const startButton = document.getElementById("start-button");
const cardArea = document.getElementById("hide-card-area");
const frontCards = [document.getElementById("card1-front"), document.getElementById("card2-front"), document.getElementById("card3-front")];
const backCards = [document.getElementById("card1-back"), document.getElementById("card2-back"), document.getElementById("card3-back")];
const cardPrompts = [document.getElementsByClassName("card1"), document.getElementsByClassName("card2"), document.getElementsByClassName("card3")];

// DO NOT EDIT ABOVE THIS LINE!

// Place Custom Prompts into arrays below in their respective Categories. Examples of how these will work are shown below so feel free to add your own and see how they work on the webpage.

const drawing1 = [
	"Example Drawing-1 Answer: 1", "Example Drawing-1 Answer: 2", "Example Drawing-1 Answer: 3", "Example Drawing-1 Answer: 4", "Example Drawing-1 Answer: 5"
];
const drawing2 = [
	"Example Drawing-2 Answer: 1", "Example Drawing-2 Answer: 2", "Example Drawing-2 Answer: 3", "Example Drawing-2 Answer: 4", "Example Drawing-2 Answer: 5"
];
const speaking1 = [
	"Example Speaking-1 Answer: 1", "Example Speaking-1 Answer: 2", "Example Speaking-1 Answer: 3", "Example Speaking-1 Answer: 4", "Example Speaking-1 Answer: 5"
];
const speaking2 = [
	"Example Speaking-2 Answer: 1", "Example Speaking-2 Answer: 2", "Example Speaking-2 Answer: 3", "Example Speaking-2 Answer: 4", "Example Speaking-2 Answer: 5"
];
const acting1 = [
	"Example Acting-1 Answer: 1", "Example Acting-1 Answer: 2", "Example Acting-1 Answer: 3", "Example Acting-1 Answer: 4", "Example Acting-1 Answer: 5"
];
const acting2 = [
	"Example Acting-2 Answer: 1", "Example Acting-2 Answer: 2", "Example Acting-2 Answer: 3", "Example Acting-2 Answer: 4", "Example Acting-2 Answer: 5"
];

// DO NOT EDIT BELOW THIS LINE!

let cardsLeft = -1;
let previousCard = -1;
let cardCounter = 0;

const assignPrompt = (type) => {
	let temp;
	let randomNum;
	switch (type) {
		case "d1":
			randomNum = Math.floor(Math.random() * (drawing1.length - cardCounter));
			temp = drawing1[randomNum];
			drawing1[randomNum] = drawing1[drawing1.length - cardCounter - 1];
			drawing1[drawing1.length - cardCounter - 1] = temp;
			return (temp);
		case "s1":
			randomNum = Math.floor(Math.random() * (speaking1.length - cardCounter));
			temp = speaking1[randomNum];
			speaking1[randomNum] = speaking1[speaking1.length - cardCounter - 1];
			speaking1[speaking1.length - cardCounter - 1] = temp;
			return (temp);
		case "a1":
			randomNum = Math.floor(Math.random() * (acting1.length - cardCounter));
			temp = acting1[randomNum];
			acting1[randomNum] = acting1[acting1.length - cardCounter - 1];
			acting1[acting1.length - cardCounter - 1] = temp;
			return (temp);
		case "d2":
			randomNum = Math.floor(Math.random() * (drawing2.length - cardCounter));
			temp = drawing2[randomNum];
			drawing2[randomNum] = drawing2[drawing2.length - cardCounter - 1];
			drawing2[drawing2.length - cardCounter - 1] = temp;
			return (temp);
		case "s2":
			randomNum = Math.floor(Math.random() * (speaking2.length - cardCounter));
			temp = speaking2[randomNum];
			speaking2[randomNum] = speaking2[speaking2.length - cardCounter - 1];
			speaking2[speaking2.length - cardCounter - 1] = temp;
			return (temp);
		case "a2":
			randomNum = Math.floor(Math.random() * (acting2.length - cardCounter));
			temp = acting2[randomNum];
			acting2[randomNum] = acting2[acting2.length - cardCounter - 1];
			acting2[acting2.length - cardCounter - 1] = temp;
			return (temp);
	}
}

const revealCard = (cardNum) => {
	cardPrompts[cardNum][0].innerText = assignPrompt("d1");
	cardPrompts[cardNum][1].innerText = assignPrompt("s1");
	cardPrompts[cardNum][2].innerText = assignPrompt("a1");
	cardPrompts[cardNum][3].innerText = assignPrompt("d2");
	cardPrompts[cardNum][4].innerText = assignPrompt("s2");
	cardPrompts[cardNum][5].innerText = assignPrompt("a2");
	backCards[cardNum].classList.add("hidden");
	frontCards[cardNum].classList.remove("hidden");
	if (previousCard !== -1)
		frontCards[previousCard].parentNode.classList.add("black-border");
	previousCard = cardNum;
	cardCounter++;
	if (cardCounter >= cardsLeft)
		cardCounter = 0;
}

const drawCards = () => {
	for (let i = 0; i < 3; ++i) {
		frontCards[i].classList.add("hidden");
		frontCards[i].parentNode.classList.remove("black-border");
		backCards[i].classList.remove("hidden");
	}
	previousCard = -1;
}

const maxFullCardPrompts = () => {
	cardsLeft = drawing1.length;
	if (cardsLeft > drawing2.length)
		cardsLeft = drawing2.length;
	if (cardsLeft > speaking1.length)
		cardsLeft = speaking1.length;
	if (cardsLeft > speaking2.length)
		cardsLeft = speaking2.length;
	if (cardsLeft > acting1.length)
		cardsLeft = acting1.length;
	if (cardsLeft > acting2.length)
		cardsLeft = acting2.length;
}

const setupCards = () => {
	startButton.classList.add("hidden");
	cardArea.classList.remove("hidden");
	maxFullCardPrompts();
}
