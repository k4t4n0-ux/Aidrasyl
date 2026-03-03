const spellsData = {
    Mago: [
        {
            name: "Rayo de Fuego",
            level: 3,
            school: "Evocación",
            castingTime: "1 acción",
            range: "36 metros",
            components: "V, S, M (una astilla de sulfuro)",
            duration: "Instantánea",
            description: "Lanzas un rayo de fuego hacia una criatura que puedas ver dentro del rango.",
            upcast: "Cuando lanzas este hechizo usando un espacio de hechizo de nivel 4 o superior, el daño aumenta en 1d6 por cada nivel de espacio por encima del 3."
        },
        {
            name: "Truco de Magia",
            level: 0,
            school: "Transmutación",
            castingTime: "1 acción",
            range: "30 metros",
            components: "V, S",
            duration: "1 ronda",
            description: "Realizas un efecto mágico menor que produce una consecuencia mágica inofensiva.",
            upcast: "N/A"
        }
    ],
    Clérigo: [
        {
            name: "Curación",
            level: 1,
            school: "Evocación",
            castingTime: "1 acción",
            range: "Toque",
            components: "V, S",
            duration: "Instantánea",
            description: "Una criatura que toques recupera golpes de éxito iguales a 1d8 + tu modificador de lanzador.",
            upcast: "Cuando lanzas este hechizo usando un espacio de hechizo de nivel 2 o superior, la curación aumenta en 1d8 por cada nivel de espacio por encima del 1."
        }
    ]
};

const characteristics = ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"];
const proficiencyBonus = { 1: 2, 5: 3, 9: 4, 13: 5, 17: 6, 20: 6 };

function initSpellsInterface() {
    const container = document.getElementById("bloquehechizos");
    
    const classSelect = document.createElement("select");
    classSelect.id = "classSelect";
    classSelect.innerHTML = `<option value="">Selecciona una clase</option>
        <option value="Mago">Mago</option>
        <option value="Clérigo">Clérigo</option>`;
    
    const spellsContent = document.createElement("div");
    spellsContent.id = "spellsContent";
    spellsContent.style.display = "none";
    
    container.appendChild(classSelect);
    container.appendChild(spellsContent);
    
    classSelect.addEventListener("change", (e) => {
        if (e.target.value) {
            spellsContent.style.display = "block";
            renderSpellsInterface(e.target.value, spellsContent);
        } else {
            spellsContent.style.display = "none";
        }
    });
}

function renderSpellsInterface(className, container) {
    container.innerHTML = "";
    
    const levelSection = document.createElement("div");
    levelSection.className = "spell-level-section";
    
    const levelLabel = document.createElement("label");
    levelLabel.textContent = "Nivel de Hechizo: ";
    
    const levelInput = document.createElement("input");
    levelInput.type = "number";
    levelInput.min = "1";
    levelInput.max = "30";
    levelInput.value = "1";
    
    const characteristicLabel = document.createElement("label");
    characteristicLabel.textContent = "Característica: ";
    
    const characteristicSelect = document.createElement("select");
    characteristics.forEach(char => {
        const option = document.createElement("option");
        option.value = char;
        option.textContent = char;
        characteristicSelect.appendChild(option);
    });
    
    levelSection.appendChild(levelLabel);
    levelSection.appendChild(levelInput);
    levelSection.appendChild(characteristicLabel);
    levelSection.appendChild(characteristicSelect);
    
    container.appendChild(levelSection);
    
    const statsSection = document.createElement("div");
    statsSection.className = "spell-stats-section";
    
    const cdLabel = document.createElement("div");
    cdLabel.className = "stat-block";
    cdLabel.innerHTML = `<strong>CD Salvación:</strong> <span id="cdValue">10</span>`;
    
    const attackLabel = document.createElement("div");
    attackLabel.className = "stat-block";
    attackLabel.innerHTML = `<strong>Bonificador Ataque:</strong> <span id="attackValue">2</span>`;
    
    statsSection.appendChild(cdLabel);
    statsSection.appendChild(attackLabel);
    
    container.appendChild(statsSection);
    
    const slotsSection = document.createElement("div");
    slotsSection.className = "spell-slots-section";
    
    levelInput.addEventListener("change", () => {
        const level = parseInt(levelInput.value);
        const characteristic = characteristicSelect.value;
        updateStats(level, characteristic, cdLabel, attackLabel);
        renderSpellSlots(level, slotsSection);
    });
    
    characteristicSelect.addEventListener("change", () => {
        const level = parseInt(levelInput.value);
        const characteristic = characteristicSelect.value;
        updateStats(level, characteristic, cdLabel, attackLabel);
    });
    
    container.appendChild(slotsSection);
    
    const addSpellBtn = document.createElement("button");
    addSpellBtn.className = "add-spell-btn";
    addSpellBtn.textContent = "Añadir Conjuro";
    addSpellBtn.addEventListener("click", () => renderSpellSelector(container, className));
    
    container.appendChild(addSpellBtn);
    
    renderSpellSlots(1, slotsSection);
    updateStats(1, "Inteligencia", cdLabel, attackLabel);
}

function updateStats(level, characteristic, cdElement, attackElement) {
    const profBonus = getProficiencyBonus(level);
    const charBonus = 2;
    
    const cd = 8 + profBonus + charBonus;
    const attack = profBonus + charBonus;
    
    cdElement.querySelector("span").textContent = cd;
    attackElement.querySelector("span").textContent = attack;
}

function getProficiencyBonus(level) {
    if (level <= 4) return 2;
    if (level <= 8) return 3;
    if (level <= 12) return 4;
    if (level <= 16) return 5;
    return 6;
}

function renderSpellSlots(level, container) {
    container.innerHTML = "";
    const slotsPerLevel = {
        1: 2, 2: 2, 3: 3, 4: 3, 5: 4, 6: 4, 7: 5, 8: 5, 9: 6,
        10: 6, 11: 7, 12: 7, 13: 8, 14: 8, 15: 9, 16: 9, 17: 10,
        18: 10, 19: 11, 20: 11, 21: 12, 22: 12, 23: 13, 24: 13, 25: 14,
        26: 14, 27: 15, 28: 15, 29: 16, 30: 16
    };
    
    const title = document.createElement("h4");
    title.textContent = `Espacios de Nivel ${level}`;
    container.appendChild(title);
    
    const slotsDiv = document.createElement("div");
    slotsDiv.className = "spell-slots";
    
    const totalSlots = slotsPerLevel[level] || 2;
    
    for (let i = 0; i < totalSlots; i++) {
        const slot = document.createElement("div");
        slot.className = "spell-slot";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        slot.appendChild(checkbox);
        slotsDiv.appendChild(slot);
    }
    
    container.appendChild(slotsDiv);
}

function renderSpellSelector(container, className) {
    const spells = spellsData[className] || [];
    const selector = document.createElement("div");
    selector.className = "spell-selector";
    
    spells.forEach(spell => {
        const spellCard = document.createElement("div");
        spellCard.className = "spell-card";
        spellCard.innerHTML = `
            <div class="spell-card-header">
                <span>${spell.name} (Nivel ${spell.level})</span>
                <button class="add-btn">+</button>
            </div>
            <div class="spell-details" style="display: none;">
                <p><strong>Escuela:</strong> ${spell.school}</p>
                <p><strong>Tiempo de Casteo:</strong> ${spell.castingTime}</p>
                <p><strong>Rango:</strong> ${spell.range}</p>
                <p><strong>Componentes:</strong> ${spell.components}</p>
                <p><strong>Duración:</strong> ${spell.duration}</p>
                <p><strong>Descripción:</strong> ${spell.description}</p>
                <p><strong>Amplificación:</strong> ${spell.upcast}</p>
            </div>
        `;
        
        spellCard.querySelector(".spell-card-header").addEventListener("click", () => {
            const details = spellCard.querySelector(".spell-details");
            details.style.display = details.style.display === "none" ? "block" : "none";
        });
        
        selector.appendChild(spellCard);
    });
    
    container.appendChild(selector);
}

document.addEventListener("DOMContentLoaded", initSpellsInterface);