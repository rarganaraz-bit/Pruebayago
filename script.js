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
        text: 'Llegaste a tiempo, pero tenés un hambre voraz. ¿Qué hacés?',
        options: [
            { text: 'Comprar un alfajor en el buffet', nextText: 4 },
            { text: 'Aguantar hasta el almuerzo', nextText: 5 }
        ]
    },
    {
        id: 3,
        text: 'Te despertaste al mediodía. Perdiste la asistencia pero estás descansada. Fin del día.',
        options: [{ text: 'Reiniciar aventura', nextText: -1 }]
    },
    {
        id: 4,
        text: 'El alfajor te dio energía y aprobaste el examen. ¡Victoria!',
        options: [{ text: 'Jugar de nuevo', nextText: -1 }]
    },
    {
        id: 5,
        text: 'Te desmayaste de hambre en medio de la explicación. Qué bajón.',
        options: [{ text: 'Intentar de nuevo', nextText: -1 }]
    }
];

startGame();
