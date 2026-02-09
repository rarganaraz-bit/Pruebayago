const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(node => node.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) return startGame();
    showTextNode(nextTextNodeId);
}

const textNodes = [
    {
        id: 1,
        text: 'Lunes, 7:00 AM. El despertador suena.',
        options: [
            { text: 'Levantarse', nextText: 2 },
            { text: '5 minutos más', nextText: 3 }
        ]
    },
    {
        id: 2,
        text: 'Te levantaste. Estás en la parada y el colectivo viene explotado de gente. Si no subís, llegás tarde al parcial.',
        options: [
            { text: 'Subir y viajar colgada de la puerta', nextText: 6 },
            { text: 'Esperar el siguiente y rezar', nextText: 7 }
        ]
    },
    {
        id: 6,
        text: 'Lograste entrar. Al lado tuyo alguien escucha música sin auriculares. El viaje es un suplicio, pero llegás.',
        options: [
            { text: 'Ir directo al aula', nextText: 10 },
            { text: 'Pasar por el buffet por un café salvador', nextText: 11 }
        ]
    },
    // --- ESCENAS QUE FALTABAN ---
    {
        id: 7,
        text: 'El siguiente colectivo tardó 40 minutos en pasar. Ya es demasiado tarde para el parcial.',
        options: [
            { text: 'Volver a casa derrotada', nextText: 15 }
        ]
    },
    {
        id: 11,
        text: 'El café del buffet está espectacular. Te sentís con energías renovadas para enfrentar al profe.',
        options: [
            { text: 'Entrar al aula con confianza', nextText: 10 }
        ]
    },
    {
        id: 16,
        text: 'Corriste tanto que llegaste toda transpirada, pero entraste justo a tiempo antes de que repartan las hojas.',
        options: [
            { text: 'Tomar aire y rendir', nextText: 18 }
        ]
    },
    // ----------------------------
    {
        id: 3,
        text: 'Cerrás los ojos. De repente, entrás en un sueño profundo donde sos una estrella de rock. Estás en medio de un solo de guitarra...',
        options: [
            { text: 'Disfrutar el concierto en tu mente', nextText: 12 },
            { text: 'Despertar de golpe por un ruido', nextText: 13 }
        ]
    },
    {
        id: 12,
        text: 'El público grita tu nombre. Pero el grito se transforma en la voz de tu mamá preguntando por qué no fuiste a rendir. Son las 11:30 AM.',
        options: [
            { text: 'Entrar en pánico y llamar a un compañero', nextText: 14 },
            { text: 'Aceptar el fracaso y pedir delivery', nextText: 15 }
        ]
    },
    {
        id: 13,
        text: 'Te despertás asustada. Son las 8:15 AM. Si te cambiás en 2 minutos, quizás llegás a la segunda mitad.',
        options: [
            { text: 'Correr como si no hubiera un mañana', nextText: 16 },
            { text: 'Ya fue, me quedo haciendo scroll en TikTok', nextText: 17 }
        ]
    },
    {
        id: 14,
        text: 'Tu amigo te dice que el profe se enfermó y el examen se pasó para el viernes. ¡El destino te ama!',
        options: [{ text: 'Celebrar y reiniciar', nextText: -1 }]
    },
    {
        id: 15,
        text: 'Gastaste tus últimos ahorros en una hamburguesa fría. Mañana será otro día.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 17,
        text: 'Entraste en un bucle de videos de gatitos y recetas que nunca vas a hacer. Se hicieron las 4 de la tarde. No hiciste nada.',
        options: [{ text: 'Intentar ser productiva mañana', nextText: -1 }]
    },
    {
        id: 10,
        text: 'Entrás al aula. El silencio es sepulcral. El examen ya empezó hace media hora. El profe te mira mal.',
        options: [
            { text: 'Sentarse y dar lo mejor', nextText: 18 },
            { text: 'Pedir perdón e irse dignamente', nextText: 15 }
        ]
    },
    {
        id: 18,
        text: 'Entregaste casi en blanco, pero el profe valoró tu esfuerzo y te puso un 4. ¡Aprobaste de milagro!',
        options: [{ text: 'Ir de fiesta y reiniciar', nextText: -1 }]
    }
];

startGame();
