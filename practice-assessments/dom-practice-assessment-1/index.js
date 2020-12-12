const circleTextElement = document.getElementById('circle-text');
const circleArea = document.getElementById('circle-area');

function addCircleClicked() {
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    circleElement.innerText = circleTextElement.value;
    circleArea.appendChild(circleElement);
}

function toggleBackgroundClicked() {
    const body = document.querySelector('body');
    body.classList.toggle('green')
}