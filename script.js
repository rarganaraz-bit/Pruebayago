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
            { text: 'Seguir durmiendo', nextText: 3 }
        ]
    },
    {
        id: 2,
        text: 'Llegaste a la parada, pero el colectivo viene lleno. ¿Qué hacés?',
        options: [
            { text: 'Subir igual (vas apretada)', nextText: 6 },
            { text: 'Esperar al siguiente', nextText: 7 }
        ]
    },
    {
        id: 6,
        text: 'En el colectivo apretado, alguien te pisa. ¿Reaccionás?',
        options: [
            { text: 'Quejarse en voz alta', nextText: 8 },
            { text: 'Suspirar y mirar por la ventana', nextText: 4 }
        ]
    },
    {
        id: 7,
        text: 'El siguiente colectivo nunca pasó. Llegaste tardísimo y el profe no te dejó entrar. Fin del día.',
        options: [{ text: 'Reiniciar aventura', nextText: -1 }]
    },
    {
        id: 8,
        text: 'Se arma una discusión y te pasás de parada. Terminaste en la otra punta de la ciudad.',
        options: [{ text: 'Volver a casa (Reiniciar)', nextText: -1 }]
    },
    {
        id: 3,
        text: 'Te despertaste al mediodía con 10 llamadas perdidas. Perdiste el día pero ganaste sueño.',
        options: [{ text: 'Reiniciar aventura', nextText: -1 }]
    },
    {
        id: 4,
        text: 'Llegaste a clase y el profe dice que el examen se canceló. ¡Es tu día de suerte!',
        options: [{ text: 'Festejar (Jugar de nuevo)', nextText: -1 }]
    }
];

startGame();
