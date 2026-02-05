const messages = [
    "You're doing better than you think?",
    "Progress matters ,not perfection ??",
    "It's okay to move at your own pace ?",
    "you've handled tough days before and you're still standing  strong  ",
    "Be Proud of how far you've come !",
    "even small wins count ",
    "you are capable and resilient .",
    "keepgoing - you've got it ",
    "Seriously be proud of ur self... ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}