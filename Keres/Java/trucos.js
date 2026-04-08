const trucosDB = {

    "Salpicadura Ácida": {
        componentes: "V, S",
        distancia: "60 pies; radio de impacto 5 pies",
        tipo: "salvacion",
        ts: "Destreza",
        dano: {
            1: "La criatura debe superar la TS o recibir 1d6 de daño Ácido.",
            5: "La criatura debe superar la TS o recibir 2d6 de daño Ácido.",
            11: "La criatura debe superar la TS o recibir 3d6 de daño Ácido.",
            17: "La criatura debe superar la TS o recibir 4d6 de daño Ácido."
        }
    },

    "Toque Helado": {
        componentes: "V, S",
        distancia: "Toque",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d10 Necrótico y no puede recuperar puntos de vida hasta el final de su siguiente turno.",
            5: "En un golpe, el objetivo recibe 2d10 Necrótico y no puede recuperar puntos de vida hasta el final de su siguiente turno.",
            11: "En un golpe, el objetivo recibe 3d10 Necrótico y no puede recuperar puntos de vida hasta el final de su siguiente turno.",
            17: "En un golpe, el objetivo recibe 4d10 Necrótico y no puede recuperar puntos de vida hasta el final de su siguiente turno."
        }
    },

    "Explosión Sobrenatural": {
        componentes: "V, S",
        distancia: "120 pies",
        tipo: "ataque",
        dano: {
            1: "Realizas 1 ataque de hechizo. En un golpe, el objetivo recibe 1d10 de daño de Fuerza.",
            5: "Realizas 2 ataques de hechizo. En un golpe, el objetivo recibe 1d10 de daño de Fuerza.",
            11: "Realizas 3 ataques de hechizo. En un golpe, el objetivo recibe 1d10 de daño de Fuerza.",
            17: "Realizas 4 ataques de hechizo. En un golpe, el objetivo recibe 1d10 de daño de Fuerza."
        }
    },

    "Rayo de Fuego": {
        componentes: "V, S",
        distancia: "120 pies",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d10 de daño de Fuego. Un objeto inflamable impactado por este hechizo comienza a arder si no se lleva ni se usa.",
            5: "En un golpe, el objetivo recibe 2d10 de daño de Fuego. Un objeto inflamable impactado por este hechizo comienza a arder si no se lleva ni se usa.",
            11: "En un golpe, el objetivo recibe 3d10 de daño de Fuego. Un objeto inflamable impactado por este hechizo comienza a arder si no se lleva ni se usa.",
            17: "En un golpe, el objetivo recibe 4d10 de daño de Fuego. Un objeto inflamable impactado por este hechizo comienza a arder si no se lleva ni se usa."
        }
    },

    "Astilla Mental": {
        componentes: "V",
        distancia: "60 pies",
        tipo: "salvacion",
        ts: "Inteligencia",
        dano: {
            1: "El objetivo debe superar la TS o recibir 1d6 de daño Psíquico y restar 1d4 a la siguiente TS que realice antes del final de su siguiente turno.",
            5: "El objetivo debe superar la TS o recibir 2d6 de daño Psíquico y restar 1d4 a la siguiente TS que realice antes del final de su siguiente turno.",
            11: "El objetivo debe superar la TS o recibir 3d6 de daño Psíquico y restar 1d4 a la siguiente TS que realice antes del final de su siguiente turno.",
            17: "El objetivo debe superar la TS o recibir 4d6 de daño Psíquico y restar 1d4 a la siguiente TS que realice antes del final de su siguiente turno."
        }
    },

    "Rocío Venenoso": {
        componentes: "V, S",
        distancia: "30 pies",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d12 de daño Veneno.",
            5: "En un golpe, el objetivo recibe 2d12 de daño Veneno.",
            11: "En un golpe, el objetivo recibe 3d12 de daño Veneno.",
            17: "En un golpe, el objetivo recibe 4d12 de daño Veneno."
        }
    },

    "Producir Llama": {
        componentes: "V, S",
        distancia: "Acción adicional; efecto personal; duración 10 minutos",
        tipo: "ataque",
        dano: {
            1: "Creas una llama que no produce calor ni quema, pero emite luz brillante en 20 pies y luz tenue en 20 pies adicionales. Mientras dure el conjuro, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe 1d8 de daño de Fuego.",
            5: "Creas una llama que no produce calor ni quema, pero emite luz brillante en 20 pies y luz tenue en 20 pies adicionales. Mientras dure el conjuro, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe 2d8 de daño de Fuego.",
            11: "Creas una llama que no produce calor ni quema, pero emite luz brillante en 20 pies y luz tenue en 20 pies adicionales. Mientras dure el conjuro, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe 3d8 de daño de Fuego.",
            17: "Creas una llama que no produce calor ni quema, pero emite luz brillante en 20 pies y luz tenue en 20 pies adicionales. Mientras dure el conjuro, puedes usar una acción para lanzar un ataque a 60 pies. En un golpe, el objetivo recibe 4d8 de daño de Fuego."
        }
    },

    "Rayo de Escarcha": {
        componentes: "V, S",
        distancia: "60 pies",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d8 de daño Frío y su velocidad se reduce en 10 pies hasta el inicio de su siguiente turno.",
            5: "En un golpe, el objetivo recibe 2d8 de daño Frío y su velocidad se reduce en 10 pies hasta el inicio de su siguiente turno.",
            11: "En un golpe, el objetivo recibe 3d8 de daño Frío y su velocidad se reduce en 10 pies hasta el inicio de su siguiente turno.",
            17: "En un golpe, el objetivo recibe 4d8 de daño Frío y su velocidad se reduce en 10 pies hasta el inicio de su siguiente turno."
        }
    },

    "Llama Sagrada": {
        componentes: "V, S",
        distancia: "60 pies",
        tipo: "salvacion",
        ts: "Destreza",
        dano: {
            1: "El objetivo debe superar la TS o recibir 1d8 de daño Radiante. No obtiene beneficio de cobertura media ni tres cuartos hasta el inicio de su siguiente turno.",
            5: "El objetivo debe superar la TS o recibir 2d8 de daño Radiante. No obtiene beneficio de cobertura media ni tres cuartos hasta el inicio de su siguiente turno.",
            11: "El objetivo debe superar la TS o recibir 3d8 de daño Radiante. No obtiene beneficio de cobertura media ni tres cuartos hasta el inicio de su siguiente turno.",
            17: "El objetivo debe superar la TS o recibir 4d8 de daño Radiante. No obtiene beneficio de cobertura media ni tres cuartos hasta el inicio de su siguiente turno."
        }
    },

    "Shillelagh (Garrote)": {
        componentes: "V, S, M (muérdago)",
        distancia: "Propio; duración 1 minuto",
        tipo: "ataque",
        dano: {
            1: "Imbuyes un bastón o garrote con poder natural. Puedes usar tu característica de conjuro para las tiradas de ataque y daño, y el dado de daño del arma pasa a ser 1d8.",
            5: "Imbuyes un bastón o garrote con poder natural. Puedes usar tu característica de conjuro para las tiradas de ataque y daño, y el dado de daño del arma pasa a ser 1d10.",
            11: "Imbuyes un bastón o garrote con poder natural. Puedes usar tu característica de conjuro para las tiradas de ataque y daño, y el dado de daño del arma pasa a ser 1d12.",
            17: "Imbuyes un bastón o garrote con poder natural. Puedes usar tu característica de conjuro para las tiradas de ataque y daño, y el dado de daño del arma pasa a ser 2d6."
        }
    },

    "Agarre Impactante": {
        componentes: "V, S",
        distancia: "Toque",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d8 de daño Relámpago y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            5: "En un golpe, el objetivo recibe 2d8 de daño Relámpago y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            11: "En un golpe, el objetivo recibe 3d8 de daño Relámpago y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno.",
            17: "En un golpe, el objetivo recibe 4d8 de daño Relámpago y no puede realizar ataques de oportunidad hasta el comienzo de su siguiente turno."
        }
    },

    "Explosión Hechicera": {
        componentes: "V, S",
        distancia: "120 pies",
        tipo: "ataque",
        dano: {
            1: "En un golpe, el objetivo recibe 1d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si obtienes un 8 en el d8, puedes tirar otro d8 y añadirlo al daño.",
            5: "En un golpe, el objetivo recibe 2d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si obtienes un 8 en el d8, puedes tirar otro d8 y añadirlo al daño.",
            11: "En un golpe, el objetivo recibe 3d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si obtienes un 8 en el d8, puedes tirar otro d8 y añadirlo al daño.",
            17: "En un golpe, el objetivo recibe 4d8 de daño del tipo que elijas: ácido, frío, fuego, relámpago, veneno, psíquico o trueno. Si obtienes un 8 en el d8, puedes tirar otro d8 y añadirlo al daño."
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