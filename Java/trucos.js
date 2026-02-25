const trucosDB = {
    "Salpicadura Ácida": {
        componentes: "V, S",
        distancia: "60 pies Radio 5 pies",
        tipo: "salvacion",
        ts: "Destreza",
        dano: {
            1: "1d6 Ácido",
            5: "2d6 Ácido",
            11: "3d6 Ácido",
            17: "4d6 Ácido"
        }
    },

    "Sala de Cuchillas": {
        componentes: "V, S",
        distancia: "Personal Concentracion 1 minuto",
        tipo: "otro",
        dano: "Cada vez que una criatura realiza una tirada de ataque contra ti antes de que termine el hechizo, el atacante resta 1d4 de la tirada de ataque."
    },

    "Rayo de Fuego": {
        componentes: "V, S",
        distancia: "120 pies",
        tipo: "ataque",
        dano: {
            1: "1d10 fuego",
            5: "2d10 fuego",
            11: "3d10 fuego",
            17: "4d10 fuego"
        }
    },

    "Descarga Sobrenatural": {
        componentes: "V, S",
        distancia: "120 pies",
        tipo: "ataque",
        dano: {
            1: "1d10 fuerza",
            5: "2d10 fuerza",
            11: "3d10 fuerza",
            17: "4d10 fuerza"
        }
    },

    "Llama Sagrada": {
        componentes: "V, S",
        distancia: "60 pies",
        tipo: "salvacion",
        dano: {
            1: "1d8 fuego",
            5: "2d8 fuego",
            11: "3d8 fuego",
            17: "4d8 fuego"
        },
        efecto: "Salvación Destreza"
    }
};