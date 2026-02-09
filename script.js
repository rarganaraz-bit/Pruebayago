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
        text: 'Es lunes por la mañana y el despertador suena. Tenés clase en 20 minutos.',
        options: [
            { text: 'Levantarse e ir a clase', nextText: 2 },
            { text: 'Seguir durmiendo un rato', nextText: 3 },
            { text: 'Apagar el despertador y renunciar a todo', nextText: 30 }
        ]
    },
    {
        id: 2,
        text: 'Llegaste a la parada, pero el colectivo viene lleno. ¿Qué hacés?',
        options: [
            { text: 'Subir igual (vas apretada)', nextText: 6 },
            { text: 'Esperar al siguiente', nextText: 7 },
            { text: 'Ir caminando para hacer ejercicio', nextText: 40 }
        ]
    },
    {
        id: 6,
        text: 'En el colectivo apretado, alguien te pisa. ¿Reaccionás?',
        options: [
            { text: 'Quejarse en voz alta', nextText: 8 },
            { text: 'Suspirar y mirar por la ventana', nextText: 4 },
            { text: 'Bajarte en la siguiente parada del enojo', nextText: 50 }
        ]
    },
    // RAMA: SEGUIR DURMIENDO
    {
        id: 3,
        text: 'Te despertás al mediodía con 10 llamadas perdidas. El sol entra por la ventana.',
        options: [
            { text: 'Desayunar tranquila ya que perdiste el día', nextText: 60 },
            { text: 'Limpiar la casa para compensar la culpa', nextText: 61 }
        ]
    },
    // --- FINALES (Solo una opción: Reiniciar) ---
    {
        id: 7,
        text: 'El siguiente colectivo llegó vacío y con aire acondicionado. Viajaste súper cómoda, llegaste relajada y el profe te felicitó por tu puntualidad.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 8,
        text: 'Se arma una discusión gigante, el chofer te pide que te bajes y terminás perdida en la otra punta de la ciudad sin batería.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 4,
        text: 'Llegaste a clase justo a tiempo. El profe dice que el examen se canceló y que van a ver una película. ¡Día ganado!',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 30,
        text: 'Te quedaste en la cama todo el día. No hiciste nada productivo, pero descansaste como nunca en tu vida.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 40,
        text: 'Caminaste tanto que encontraste un billete de 20 dólares en el piso. Te compraste un almuerzo increíble y no fuiste a clase.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 50,
        text: 'Te bajaste del colectivo y justo pasaba un camión de helados. Te compraste uno y te volviste a tu casa feliz.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 60,
        text: 'Te hiciste unos mates con tostadas. No rendiste el examen, pero tuviste una mañana de paz total.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    },
    {
        id: 61,
        text: 'La casa quedó brillante. Al menos la falta al parcial te sirvió para poner orden en tu vida.',
        options: [{ text: 'Reiniciar vida', nextText: -1 }]
    }
];

startGame();
