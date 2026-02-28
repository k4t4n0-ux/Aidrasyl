const trucosDB = {
    "Salpicadura Ácida": {
        componentes: "V, S",
        distancia: "60 distancia; Radio 5 pies impacto",
        tipo: "salvacion",
        ts: "Destreza",
        dano: {
            1: "1d6 Ácido",
            5: "2d6 Ácido",
            11: "3d6 Ácido",
            17: "4d6 Ácido"
        }
    },

    "Toque Frío": {
        componentes: "V, S",
        distancia: "Toque",
        tipo: "ataque",
        dano: {
            1: "1d10 Necrótico y no puede recuperar puntos de vida hasta el final del siguiente turno.",
            5: "2d10 Necrótico y no puede recuperar puntos de vida hasta el final del siguiente turno.",
            11: "3d10 Necrótico y no puede recuperar puntos de vida hasta el final del siguiente turno.",
            17: "4d10 Necrótico y no puede recuperar puntos de vida hasta el final del siguiente turno."
        }
    },

    "Explosión sobrenatural": {
        componentes: "V, S",
        distancia: "120",
        tipo: "ataque",
        dano: {
            1: "Realiza 1 ataque de hechizo. En un golpe, el objetivo recibe daño de 1d10 Fuerza.",
            5: "Realiza 2 ataque de hechizo. En un golpe, el objetivo recibe daño de 1d10 Fuerza.",
            11: "Realiza 3 ataque de hechizo. En un golpe, el objetivo recibe daño de 1d10 Fuerza.",
            17: "Realiza 4 ataque de hechizo. En un golpe, el objetivo recibe daño de 1d10 Fuerza."
        }
    },

    "Rayo de Fuego": {
        componentes: "V, S",
        distancia: "120",
        tipo: "ataque",
        dano: {
            1: "1d10 Fuego. Un objeto inflamable golpeado por este hechizo comienza a arder si no se usa ni se lleva.",
            5: "2d10 Fuego. Un objeto inflamable golpeado por este hechizo comienza a arder si no se usa ni se lleva.",
            11: "3d10 Fuego. Un objeto inflamable golpeado por este hechizo comienza a arder si no se usa ni se lleva.",
            17: "4d10 Fuego. Un objeto inflamable golpeado por este hechizo comienza a arder si no se usa ni se lleva."
        }
    },

    "Astilla Mental": {
        componentes: "V",
        distancia: "60",
        tipo: "salvacion",
        ts: "Inteligencia",
        dano: {
            1: "El objetivo debe tener éxito en la TS o recibir 1d6 Psíquico y restar 1d4 de la siguiente TS que realice antes del final de su siguiente turno.",
            5: "El objetivo debe tener éxito en la TS o recibir 2d6 Psíquico y restar 1d4 de la siguiente TS que realice antes del final de su siguiente turno.",
            11: "El objetivo debe tener éxito en la TS o recibir 3d6 Psíquico y restar 1d4 de la siguiente TS que realice antes del final de su siguiente turno.",
            17: "El objetivo debe tener éxito en la TS o recibir 4d6 Psíquico y restar 1d4 de la siguiente TS que realice antes del final de su siguiente turno."
        }
    },

    "Spray Venenoso": {
        componentes: "V, S",
        distancia: "30",
        tipo: "ataque",
        dano: {
            1: "1d12 Veneno",
            5: "2d12 Veneno",
            11: "3d12 Veneno",
            17: "4d12 Veneno"
        }
    },

    "Producir LLama": {
        componentes: "V, S",
        distancia: "Accion adicional. Efecto a ti mismo duracion 10 Minutos",
        tipo: "ataque",
        dano: {
            1: "Creas una llama que no produce calor ni quema, pero produce luz brillante a 20 pies y luz tenue a 20 pies adicionales. Hasta el final del hechizo, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe daño de 1d8 Fuego.",
            5: "Creas una llama que no produce calor ni quema, pero produce luz brillante a 20 pies y luz tenue a 20 pies adicionales. Hasta el final del hechizo, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe daño de 2d8 Fuego.",
            11: "Creas una llama que no produce calor ni quema, pero produce luz brillante a 20 pies y luz tenue a 20 pies adicionales. Hasta el final del hechizo, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe daño de 3d8 Fuego.",
            17: "Creas una llama que no produce calor ni quema, pero produce luz brillante a 20 pies y luz tenue a 20 pies adicionales. Hasta el final del hechizo, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe daño de 4d8 Fuego."
        }
    },

    "Rayo de Escarcha": {
        componentes: "V, S",
        distancia: "60",
        tipo: "ataque",
        dano: {
            1: "En un golpe, recibe 1d8 de daño en frío y la velocidad del objetivo se reduce en 10 pies hasta el inicio de su siguiente turno.",
            5: "En un golpe, recibe 2d8 de daño en frío y la velocidad del objetivo se reduce en 10 pies hasta el inicio de su siguiente turno.",
            11: "En un golpe, recibe 3d8 de daño en frío y la velocidad del objetivo se reduce en 10 pies hasta el inicio de su siguiente turno.",
            17: "En un golpe, recibe 4d8 de daño en frío y la velocidad del objetivo se reduce en 10 pies hasta el inicio de su siguiente turno."
        }
    },

    "Llama Sagrada": {
        componentes: "V, S",
        distancia: "60",
        tipo: "salvacion",
        ts: "Destreza",
        dano: {
            1: "El objetivo debe tener éxito en la TS o recibir 1d8 Radiante. El objetivo no obtiene ningún beneficio de Cobertura Media o Tres Cuartos hasta el inicio de su siguiente turno.",
            5: "El objetivo debe tener éxito en la TS o recibir 2d8 Radiante. El objetivo no obtiene ningún beneficio de Cobertura Media o Tres Cuartos hasta el inicio de su siguiente turno.",
            11: "El objetivo debe tener éxito en la TS o recibir 3d8 Radiante. El objetivo no obtiene ningún beneficio de Cobertura Media o Tres Cuartos hasta el inicio de su siguiente turno.",
            17: "El objetivo debe tener éxito en la TS o recibir 4d8 Radiante. El objetivo no obtiene ningún beneficio de Cobertura Media o Tres Cuartos hasta el inicio de su siguiente turno."
        }
    },

    "Garrote": {
        componentes: "V, S, M (Muerdago)",
        distancia: "Propio; Duración 1 minuto",
        tipo: "ataque",
        dano: {
            1: "Imbuyes tu cuerpo o una arma del poder de la naturaleza. Mientras dure, puedes usar tu habilidad de lanzamiento de hechizos en lugar de Fuerza para las tiradas de ataque y daño de los ataques, y el dado de daño del arma se convierte en 1d8. Si el ataque causa daño, puede ser daño de fuerza o el tipo de daño normal del arma. El hechizo termina temprano si lo lanzas de nuevo o si sueltas el arma.",
            5: "Imbuyes tu cuerpo o una arma del poder de la naturaleza. Mientras dure, puedes usar tu habilidad de lanzamiento de hechizos en lugar de Fuerza para las tiradas de ataque y daño de los ataques, y el dado de daño del arma se convierte en 1d10. Si el ataque causa daño, puede ser daño de fuerza o el tipo de daño normal del arma. El hechizo termina temprano si lo lanzas de nuevo o si sueltas el arma.",
            11: "Imbuyes tu cuerpo o una arma del poder de la naturaleza. Mientras dure, puedes usar tu habilidad de lanzamiento de hechizos en lugar de Fuerza para las tiradas de ataque y daño de los ataques, y el dado de daño del arma se convierte en 1d12. Si el ataque causa daño, puede ser daño de fuerza o el tipo de daño normal del arma. El hechizo termina temprano si lo lanzas de nuevo o si sueltas el arma.",
            17: "Imbuyes tu cuerpo o una arma del poder de la naturaleza. Mientras dure, puedes usar tu habilidad de lanzamiento de hechizos en lugar de Fuerza para las tiradas de ataque y daño de los ataques, y el dado de daño del arma se convierte en 2d6. Si el ataque causa daño, puede ser daño de fuerza o el tipo de daño normal del arma. El hechizo termina temprano si lo lanzas de nuevo o si sueltas el arma."
        }
    },

    "Agarre Impactante": {
        componentes: "V, S",
        distancia: "Toque",
        tipo: "ataque",
        dano: {
            1: "Con un golpe, el objetivo recibe 1d8 Rayo y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            5: "Con un golpe, el objetivo recibe 2d8 Rayo y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            11: "Con un golpe, el objetivo recibe 3d8 Rayo y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            17: "Con un golpe, el objetivo recibe 4d8 Rayo y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno."
        }
    },

    "Explosión Hechicera": {
        componentes: "V, S",
        distancia: "120",
        tipo: "ataque",
        dano: {
            1: "Con un golpe, el objetivo recibe 1d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si sacas un 8 en un d8 para este hechizo, puedes tirar otro d8 y agregarlo al daño. La cantidad máxima de estos d8 es igual a tu Modificador de la Caracteristica de este truco.",
            5: "Con un golpe, el objetivo recibe 2d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si sacas un 8 en un d8 para este hechizo, puedes tirar otro d8 y agregarlo al daño. La cantidad máxima de estos d8 es igual a tu Modificador de la Caracteristica de este truco.",
            11: "Con un golpe, el objetivo recibe 3d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si sacas un 8 en un d8 para este hechizo, puedes tirar otro d8 y agregarlo al daño. La cantidad máxima de estos d8 es igual a tu Modificador de la Caracteristica de este truco.",
            17: "Con un golpe, el objetivo recibe 4d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si sacas un 8 en un d8 para este hechizo, puedes tirar otro d8 y agregarlo al daño. La cantidad máxima de estos d8 es igual a tu Modificador de la Caracteristica de este truco."
        }
    },

    "Rastro Estrellado": {
        componentes: "V, S",
        distancia: "60",
        tipo: "ataque",
        dano: {
            1: "Con un golpe, el objetivo recibe 1d8 Radiante, y hasta el final del siguiente turno, emite Luz Tenue en un radio de 10 pies y no puede beneficiarse de la condición Invisible.",
            5: "Con un golpe, el objetivo recibe 2d8 Radiante, y hasta el final del siguiente turno, emite Luz Tenue en un radio de 10 pies y no puede beneficiarse de la condición Invisible.",
            11: "Con un golpe, el objetivo recibe 3d8 Radiante, y hasta el final del siguiente turno, emite Luz Tenue en un radio de 10 pies y no puede beneficiarse de la condición Invisible.",
            17: "Con un golpe, el objetivo recibe 4d8 Radiante, y hasta el final del siguiente turno, emite Luz Tenue en un radio de 10 pies y no puede beneficiarse de la condición Invisible."
        }
    },

    "Látigo de espinas": {
        componentes: "V, S, M (el tallo de una planta espinosa)",
        distancia: "30",
        tipo: "ataque",
        dano: {
            1: "Con un golpe, el objetivo recibe 1d6 Perforante y, si es grande o más pequeño, puedes acercarlo hasta 10 pies a ti.",
            5: "Con un golpe, el objetivo recibe 2d6 Perforante y, si es grande o más pequeño, puedes acercarlo hasta 10 pies a ti.",
            11: "Con un golpe, el objetivo recibe 3d6 Perforante y, si es grande o más pequeño, puedes acercarlo hasta 10 pies a ti.",
            17: "Con un golpe, el objetivo recibe 4d6 Perforante y, si es grande o más pequeño, puedes acercarlo hasta 10 pies a ti."
        }
    },

    "Trueno": {
        componentes: "S",
        distancia: "Propio",
        tipo: "salvacion",
        ts: "Constitución",
        dano: {
            1: "Cada criatura a 5 pies de ti debe tener éxito en la TS o recibir daño de 1d6 Trueno. El atronador sonido se puede escuchar hasta a 100 pies de distancia.",
            5: "Cada criatura a 5 pies de ti debe tener éxito en la TS o recibir daño de 2d6 Trueno. El atronador sonido se puede escuchar hasta a 100 pies de distancia.",
            11: "Cada criatura a 5 pies de ti debe tener éxito en la TS o recibir daño de 3d6 Trueno. El atronador sonido se puede escuchar hasta a 100 pies de distancia.",
            17: "Cada criatura a 5 pies de ti debe tener éxito en la TS o recibir daño de 4d6 Trueno. El atronador sonido se puede escuchar hasta a 100 pies de distancia."
        }
    },

    "Llamar a los Muertos": {
        componentes: "V, S",
        distancia: "60",
        tipo: "salvacion",
        ts: "Sabiduría",
        dano: {
            1: "El objetivo debe tener éxito en la TS o recibir 1d8 Necrotico o 1d12 si le falta alguno de sus puntos de vida.",
            5: "El objetivo debe tener éxito en la TS o recibir 2d8 Necrotico o 2d12 si le falta alguno de sus puntos de vida.",
            11: "El objetivo debe tener éxito en la TS o recibir 3d8 Necrotico o 3d12 si le falta alguno de sus puntos de vida.",
            17: "El objetivo debe tener éxito en la TS o recibir 4d8 Necrotico o 4d12 si le falta alguno de sus puntos de vida."
        }
    },

    "Golpe Verdadero": {
        componentes: "S, M (un arma con la que tienes competencia y que vale 1+ M.E.)",
        distancia: "Propio",
        tipo: "ataque",
        dano: {
            1: "Realizas un ataque con el arma utilizada en el lanzamiento del truco. El ataque y daño utiliza tu habilidad de lanzamiento del truco en lugar de usar Fuerza o Destreza. El daño puede ser Radiante o el tipo de daño normal del arma (a tu elección).",
            5: "Realizas un ataque con el arma utilizada en el lanzamiento del truco. El ataque y daño utiliza tu habilidad de lanzamiento del truco en lugar de usar Fuerza o Destreza. El daño puede ser Radiante o el tipo de daño normal del arma (a tu elección) +1d6.",
            11: "Realizas un ataque con el arma utilizada en el lanzamiento del truco. El ataque y daño utiliza tu habilidad de lanzamiento del truco en lugar de usar Fuerza o Destreza. El daño puede ser Radiante o el tipo de daño normal del arma (a tu elección) +2d6.",
            17: "Realizas un ataque con el arma utilizada en el lanzamiento del truco. El ataque y daño utiliza tu habilidad de lanzamiento del truco en lugar de usar Fuerza o Destreza. El daño puede ser Radiante o el tipo de daño normal del arma (a tu elección) +3d6."
        }
    },

    "Burla viciosa": {
        componentes: "V",
        distancia: "60",
        tipo: "salvacion",
        ts: "Sabiduría",
        dano: {
            1: "El objetivo debe tener éxito en la TS o recibir 1d6 Psíquico y tener desventaja en la siguiente tirada de ataque que realice antes del final de su siguiente turno.",
            5: "El objetivo debe tener éxito en la TS o recibir 2d6 Psíquico y tener desventaja en la siguiente tirada de ataque que realice antes del final de su siguiente turno.",
            11: "El objetivo debe tener éxito en la TS o recibir 3d6 Psíquico y tener desventaja en la siguiente tirada de ataque que realice antes del final de su siguiente turno.",
            17: "El objetivo debe tener éxito en la TS o recibir 4d6 Psíquico y tener desventaja en la siguiente tirada de ataque que realice antes del final de su siguiente turno."
        }
    },

    "Palabra de Resplandor": {
        componentes: "V, M (una ficha de rayos de sol)",
        distancia: "Propio",
        tipo: "salvacion",
        ts: "Constitución",
        dano: {
            1: "Cada criatura de tu elección que puedas a 5 pies de ti debe tener éxito en la TS de la Constitución o 1d6 Radiante.",
            5: "Cada criatura de tu elección que puedas a 5 pies de ti debe tener éxito en la TS de la Constitución o 2d6 Radiante.",
            11: "Cada criatura de tu elección que puedas a 5 pies de ti debe tener éxito en la TS de la Constitución o 3d6 Radiante.",
            17: "Cada criatura de tu elección que puedas a 5 pies de ti debe tener éxito en la TS de la Constitución o 4d6 Radiante."
        }
    }

};