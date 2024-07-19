//HEADER BUTTONS
const pagebtn = [];
for (let i = 0; i < 4; i++) {
	pagebtn.push(document.querySelector("#page" + (i + 1).toString() + "btn"));
	//console.log(pagebtn[i]);
}
var allpages = document.querySelectorAll(".page");

//select all subtopic pages
//console.log(allpages);
hideallPages();

function hideallPages() { //function to hide all pages
	for (let onepage of allpages) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
showPages(1);

function showPages(pgno) { //function to show selected page no
	hideallPages();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#page" + pgno);
	//show the page
	onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/

for (let i = 0; i < 4; i++) {
	pagebtn[i].addEventListener("click", function() {
		showPages(i + 1);
	});
}

//SETUP BUTTONS
const setupbtn = [];
for (let i = 0; i < 5; i++) {
	setupbtn.push(document.querySelector("#setupbtn" + (i + 1).toString()));
	//console.log(pagebtn[i]);
}
var allsetupdesc = document.querySelectorAll(".setupdesc");
//console.log(allsetupdesc);
hideallSetup();

function hideallSetup() { //function to hide all pages
	for (let onepage of allsetupdesc) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
showSetup(1);

function showSetup(pgno) { //function to show selected page no
	hideallSetup();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#setupdesc" + pgno);
	//show the page
	onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
for (let i = 0; i < 5; i++) {
	setupbtn[i].addEventListener("click", function() {
		showSetup(i + 1);
	});
}

//Gameplay Buttons
//SETUP BUTTONS
const gameplaybtn = [];
for (let i = 0; i < 9; i++) {
	gameplaybtn.push(document.querySelector("#gameplaybtn" + (i + 1).toString()));
	//console.log(pagebtn[i]);
}
var allgameplaydesc = document.querySelectorAll(".gameplaydesc");
//console.log(allgameplaydesc);
hideallGameplay();

function hideallGameplay() { //function to hide all pages
	for (let onepage of allgameplaydesc) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
showGameplay(1);

function showGameplay(pgno) { //function to show selected page no
	hideallGameplay();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#gameplaydesc" + pgno);
	//show the page
	onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
for (let i = 0; i < 9; i++) {
	gameplaybtn[i].addEventListener("click", function() {
		showGameplay(i + 1);
	});
}

/*Strategy Buttons*/
const strategybtn = [];
for (let i = 0; i < 7; i++) {
	strategybtn.push(document.querySelector("#strategybtn" + (i + 1).toString()));
	//console.log(pagebtn[i]);
}
var allstrategydesc = document.querySelectorAll(".strategydesc");
//console.log(allstrategydesc);
hideallStrategy();

function hideallStrategy() { //function to hide all pages
	for (let onepage of allstrategydesc) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
showStrategy(1);

function showStrategy(pgno) { //function to show selected page no
	hideallStrategy();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#strategydesc" + pgno);
	let twopage = document.querySelector('#strategypicture');
	//show the page
	onepage.style.display = "block";
	if (!onepage.classList.contains("support-slidescreen")) {
		onepage.classList.add("support-slidescreen");
	} else {
		onepage.style.animation = 'none';
		onepage.style.animation = null;
		onepage.classList.add("support-slidescreen");
	}

	/*animation play*/
	if (!twopage.classList.contains("support-slidescreen")) {
		//console.log("false");
		twopage.classList.add("support-slidescreen");
	} else {
		//console.log("true");
		twopage.style.animation = 'none';
		twopage.style.animation = null;
		twopage.classList.add("support-slidescreen");
	}

}


/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
for (let i = 0; i < 7; i++) {
	strategybtn[i].addEventListener("click", function() {
		showStrategy(i + 1);
	});
}


//MINI MONOPOLY
class playerObject {
	constructor(name, startingCash) {
		this.name = name;
		this.cash = startingCash;
		this.pos = 0;
		this.hasMoved = false;
		this.inJail = false;
		this.jailTurnLeft = 3;
	}

	roll() {
		if (!this.hasMoved) {
			let test = Math.floor(Math.random() * 6) + 1;
			if (this.inJail) {
				this.hasMoved = true;
				chatLogs.push(this.name + " submitted an appeal<br>");
				if (test == 6) {
					chatLogs.push(this.name + " has won the appeal<br>");
					this.inJail = false;
					this.jailTurnLeft = 0;
					this.roll();
				} else {
					this.jailTurnLeft--;
					if (this.jailTurnLeft <= 0) {
						chatLogs.push(this.name + " has won the appeal<br>");
						this.inJail = false;
						this.jailTurnLeft = 0;
						this.roll();
					}
				}
			} else {
				this.moveSteps(test);
				chatLogs.push(this.name + " moved " + test.toString() + " steps. <br>");
				this.hasMoved = true;

				//check for tile
				if (tilePorpertiesIndex[this.pos] >= 0 && tilePorpertiesIndex[this.pos] <= 12) {
					//propertys
					let tempindex = tilePorpertiesIndex[this.pos];
					if (propertiesInGame[tempindex].owner != "null" && propertiesInGame[tempindex].owner != this.name) {
						//owe money
						//console.log("payup");
						let inquire = propertiesInGame[tempindex];
						let tempRent = (inquire.numOfBuilding * inquire.buildingRentIncrease) + (inquire.numOfHotel * inquire.hotelRentIncrease) + inquire.rent;
						let setCount = 0;
						console.log(setCount);
						for (let i = 0; i < propertiesInGame.length; i++) {
							if (propertiesInGame[i].setName == inquire.setName) {
								if (propertiesInGame[i].owner == inquire.owner) {
									setCount++;
								}
							}
						}
						console.log(setCount);
						if (setCount == 2) {
							tempRent *= inquire.setMultiplier;
						}
						this.cash -= tempRent;
						for (let i = 0; i < playersInGame.length; i++) {
							if (playersInGame[i].name == propertiesInGame[tempindex].owner) {
								playersInGame[i].cash += tempRent;
								chatLogs.push(this.name + " has payed $" + tempRent.toString() + " to " + propertiesInGame[tempindex].owner + " <br>");
							}
						}
					}
				} else {
					if (tilePorpertiesIndex[this.pos] == "late") {
						//console.log(tilePorpertiesIndex[this.pos]+ " " + this.pos);
						this.inJail = true;
						this.jailTurnLeft = 3;
						this.pos = 4;
						chatLogs.push(this.name + " has been grade capped <br>");
					}
				}
			}



			update();
		}

	}

	moveSteps(amt) {
		this.pos += amt;

		if (this.pos >= 16) {
			this.pos = this.pos - 16;
			this.cash += 50;
			chatLogs.push(this.name + " gained $50<br>");
		}
	}

	endturn() {
		this.roll();
		this.hasMoved = false;
		turn++;
		if (turn > 1)
			turn = 0;
		chatLogs.push(this.name + " has ended their turn<br>");
		update();
	}

	buy() {
		if (tilePorpertiesIndex[this.pos] >= 0 && tilePorpertiesIndex[this.pos] <= 12) {
			//On Property
			let tempIndex = tilePorpertiesIndex[this.pos];
			if (this.cash >= propertiesInGame[tempIndex].buyCost) {
				if (propertiesInGame[tempIndex].owner == "null") {
					this.cash -= propertiesInGame[tempIndex].buyCost;
					propertiesInGame[tempIndex].owner = this.name;
					chatLogs.push(this.name + " bought " + propertiesInGame[tempIndex].name + "<br>");
					update();
					return true;
					//add remove any border

				} else {
					chatLogs.push(propertiesInGame[tempIndex].name + " is owned by " + propertiesInGame[tempIndex].owner + "<br>");
				}
			} else {
				chatLogs.push(propertiesInGame[tempIndex].name + " needs $" + propertiesInGame[tempIndex].buyCost.toString() + "<br>");
			}
		} else {
			chatLogs.push("Invalid Property<br>");
		}
		update();
		return false;
	}

	housebuy() {
		if (tilePorpertiesIndex[this.pos] >= 0 && tilePorpertiesIndex[this.pos] <= 12) {
			//On Property
			let tempIndex = tilePorpertiesIndex[this.pos];
			//if owner == this.name
			//player cash >=  house
			//if house count < 2
			if (propertiesInGame[tempIndex].owner == this.name) {
				if (this.cash >= propertiesInGame[tempIndex].buildingCost) {
					if (propertiesInGame[tempIndex].numOfBuilding < 2 && propertiesInGame[tempIndex].numOfHotel < 2) {
						//Buy House
						this.cash -= propertiesInGame[tempIndex].buildingCost;
						propertiesInGame[tempIndex].numOfBuilding++;
						chatLogs.push(this.name + " bought " + propertiesInGame[tempIndex].name + " a House<br>");
						updateBuildingProperties(tempIndex);
						update();
						return true;
					} else {
						chatLogs.push("Properties can only hold 2 Hotels or less <br>");

					}
				} else {
					chatLogs.push(propertiesInGame[tempIndex].name + "'s House cost $" + propertiesInGame[tempIndex].buildingCost.toString() + "<br>");
				}
			} else {
				chatLogs.push(propertiesInGame[tempIndex].name + " is owned by " + propertiesInGame[tempIndex].owner + "<br>");
			}
		} else {
			chatLogs.push("Invalid Property<br>");
		}
		update();
		return false;
	}

	hotelbuy() {
		if (tilePorpertiesIndex[this.pos] >= 0 && tilePorpertiesIndex[this.pos] <= 12) {
			//On Property
			let tempIndex = tilePorpertiesIndex[this.pos];
			//if owner == this.name
			//player cash >=  house
			//if house count < 2
			if (propertiesInGame[tempIndex].owner == this.name) {
				if (this.cash >= propertiesInGame[tempIndex].hotelCost) {
					if (propertiesInGame[tempIndex].numOfBuilding == 2 && propertiesInGame[tempIndex].numOfHotel < 2) {
						//Buy House
						this.cash -= propertiesInGame[tempIndex].hotelCost;
						propertiesInGame[tempIndex].numOfBuilding = 0;
						propertiesInGame[tempIndex].numOfHotel++;
						chatLogs.push(this.name + " bought " + propertiesInGame[tempIndex].name + " a Hotel<br>");
						updateBuildingProperties(tempIndex);
						update();
						return true;
					} else {
						chatLogs.push("Properties can only hold 2 Hotels or less <br>");

					}
				} else {
					chatLogs.push(propertiesInGame[tempIndex].name + "'s Hotel cost $" + propertiesInGame[tempIndex].hotelCost.toString() + "<br>");
				}
			} else {
				chatLogs.push(propertiesInGame[tempIndex].name + " is owned by " + propertiesInGame[tempIndex].owner + "<br>");
			}
		} else {
			chatLogs.push("Invalid Property<br>");
		}
		update();
		return false;
	}
}

function propertiesObject(name, setName, buyCost, rent, setMultiplier, rentwith1Building, rentwith2Building, rentwith1Hotel, rentwith2Hotel, buildingCost, hotelCost) {
	this.owner = "null";
	this.name = name;
	this.setName = setName;
	this.buyCost = buyCost;
	this.rent = rent;
	this.setMultiplier = setMultiplier;
	this.buildingRentIncrease = 5;
	this.hotelRentIncrease = 20;
	this.rentwith1Building = rentwith1Building;
	this.rentwith2Building = rentwith2Building;
	this.rentwith1Hotel = rentwith1Hotel;
	this.rentwith2Hotel = rentwith2Hotel;
	this.buildingCost = buildingCost;
	this.hotelCost = hotelCost;
	this.numOfBuilding = 0;
	this.numOfHotel = 0;
}

let playersInGame = [];
let propertiesInGame = [];

playersInGame.push(new playerObject("player1", 750));
playersInGame.push(new playerObject("player2", 750));


//Normal Properties
propertiesInGame.push(new propertiesObject("T-Junction", "purple", 100, 50, 1.25, 55, 60, 80, 90, 100, 200)); //0
propertiesInGame.push(new propertiesObject("Atrium", "purple", 120, 60, 1.25, 65, 70, 90, 100, 100, 200)); //1
propertiesInGame.push(new propertiesObject("SBM", "white", 140, 70, 1.25, 75, 80, 100, 110, 100, 200)); //2
propertiesInGame.push(new propertiesObject("SHSS", "white", 160, 80, 1.25, 85, 90, 110, 120, 100, 200)); //3
propertiesInGame.push(new propertiesObject("SIT", "red", 180, 90, 1.5, 95, 100, 120, 130, 200, 400)); //4
propertiesInGame.push(new propertiesObject("SEG", "red", 200, 100, 1.5, 105, 110, 130, 140, 200, 400)); //5
propertiesInGame.push(new propertiesObject("SDM", "orange", 220, 110, 1.5, 115, 120, 140, 150, 200, 400)); //6
propertiesInGame.push(new propertiesObject("SAS", "orange", 240, 120, 1.5, 125, 130, 150, 160, 200, 400)); //7
//Special Properties
propertiesInGame.push(new propertiesObject("i@central", "green", 110, 55, 3, 55, 55, 55, 55, 1000000, 1000000)); //8
propertiesInGame.push(new propertiesObject("Library", "green", 190, 95, 3, 95, 95, 95, 95, 1000000, 1000000)); //9
propertiesInGame.push(new propertiesObject("North Canteen", "blue", 150, 75, 3, 75, 75, 75, 75, 1000000, 1000000)); //10
propertiesInGame.push(new propertiesObject("South Canteen", "blue", 330, 115, 3, 115, 115, 115, 115, 1000000, 1000000)); //11

const tilePorpertiesIndex = ["go", 0, 8, 1, "gradecap", 2, 10, 3, "free", 4, 9, 5, "late", 6, 11, 7];
const propertiesIndex = [0, 8, 1, 2, 10, 3, 4, 9, 5, 6, 11, 7];

for (let i = 0; i < 2; i++) {
	//console.log(playersInGame[i]);
}

for (let i = 0; i < propertiesInGame.length; i++) {
	//console.log(propertiesInGame[i]);
}

var turn = 0;
const rollbtn = document.querySelector("#rollbtn");

rollbtn.addEventListener("click", function() {
	playersInGame[turn].roll();
});

const endbtn = document.querySelector("#endbtn");

endbtn.addEventListener("click", function() {
	playersInGame[turn].endturn();
});

const buybtn = document.querySelector("#buybtn");

buybtn.addEventListener("click", function() {
	if (playersInGame[turn].buy()) {
		if (turn == 0) {
			document.querySelector("#tile" + (playersInGame[turn].pos + 1).toString()).querySelector(".bordertile").src = "images/redBorder.png";
		} else {
			document.querySelector("#tile" + (playersInGame[turn].pos + 1).toString()).querySelector(".bordertile").src = "images/blueBorder.png";

		}
	}
});

const housebtn = document.querySelector("#housebtn");

housebtn.addEventListener("click", function() {
	playersInGame[turn].housebuy();
});

const hotelbtn = document.querySelector("#hotelbtn");

hotelbtn.addEventListener("click", function() {
	playersInGame[turn].hotelbuy();
});

const sellbtn = document.querySelector("#sellbtn");

sellbtn.addEventListener("click", function() {
	showControls(2);
});

const controlbtn = document.querySelector("#controlbtn");

controlbtn.addEventListener("click", function() {
	showControls(1);
});

var player1name = document.querySelector("#player1name");
var player2name = document.querySelector("#player2name");
var player1icon = document.querySelector("#player1icon");
var player2icon = document.querySelector("#player2icon");
var startcash = document.querySelector("#startcash");
var play = document.querySelector("#play");

play.addEventListener("click", function() {
	playersInGame[0].name = player1name.value;
	playersInGame[1].name = player2name.value;
	playersInGame[0].cash = parseInt(startcash.value);
	playersInGame[1].cash = parseInt(startcash.value);
	showControls(1);
	update();
});

const sellbtns = [];
for (let i = 0; i < 12; i++) {
	sellbtns.push(document.querySelector("#sellbtn" + (i + 1).toString()));
}

for (let i = 0; i < 12; i++) {
	sellbtns[i].addEventListener("click", function() {
		Sell(i);
	});
}

function Sell(num) {

	var test;

	test = Math.ceil((num + 1) / 3);

	var propertySelect = propertiesInGame[propertiesIndex[num]];
	if (propertySelect.owner == playersInGame[turn].name) {
		//sell it off
		var tempCash;
		tempCash = propertySelect.buyCost * 0.75;
		tempCash += (propertySelect.numOfBuilding * propertySelect.buildingCost) * 0.75;
		propertySelect.numOfBuilding = 0;
		tempCash += (propertySelect.numOfHotel * propertySelect.hotelCost) * 0.75;
		propertySelect.numOfHotel = 0;
		propertySelect.owner = "null";
		playersInGame[turn].cash += tempCash;
		chatLogs.push(playersInGame[turn].name + " sold " + propertySelect.name + " for $" + tempCash + "<br>");
		updateBuildingProperties(propertiesIndex[num]);
		console.log(num + test);
		document.querySelector("#tile" + (num + test + 1).toString()).querySelector(".bordertile").src = "";
	} else {
		//not owned by you
		chatLogs.push(propertySelect.name + " is not owned by " + playersInGame[turn].name + "<br>");
	}
	update();
}

const playerimages = [];
const player1info = document.querySelector("#player1-info");
const player2info = document.querySelector("#player2-info");
const optionsinfo = document.querySelector("#options-info");
const chatinfo = document.querySelector("#chat-info");
var chatLogs = [];

for (let i = 0; i < 2; i++) {
	playerimages.push(document.querySelector("#player" + (i + 1).toString()));
}

function updateBuildingProperties(num) {
	console.log(propertiesInGame[num]);
	var buildingSelect = document.querySelector("#tile" + (playersInGame[turn].pos + 1).toString()).querySelector(".buildingtile");
	if (propertiesInGame[num].numOfBuilding == 1 && propertiesInGame[num].numOfHotel == 0) {
		buildingSelect.src = "images/1house.png";
	} else if (propertiesInGame[num].numOfBuilding == 2 && propertiesInGame[num].numOfHotel == 0) {
		buildingSelect.src = "images/2house.png";
	} else if (propertiesInGame[num].numOfBuilding == 0 && propertiesInGame[num].numOfHotel == 1) {
		buildingSelect.src = "images/1hotel.png";
	} else if (propertiesInGame[num].numOfBuilding == 1 && propertiesInGame[num].numOfHotel == 1) {
		buildingSelect.src = "images/1house1hotel.png";
	} else if (propertiesInGame[num].numOfBuilding == 2 && propertiesInGame[num].numOfHotel == 1) {
		buildingSelect.src = "images/2house1hotel.png";
	} else if (propertiesInGame[num].numOfBuilding == 0 && propertiesInGame[num].numOfHotel == 2) {
		buildingSelect.src = "images/2hotel.png";
	} else {
		buildingSelect.src = "";
	}

}

function update() {
	for (let i = 0; i < 2; i++) {

		document.getElementById("tile" + (playersInGame[i].pos + 1).toString()).appendChild(playerimages[i]);
	}
	player1info.innerHTML = playersInGame[0].name + "<br> Cash: " + playersInGame[0].cash.toString();
	player2info.innerHTML = playersInGame[1].name + " <br> Cash: " + playersInGame[1].cash.toString();

	let tempChat = [];
	if (chatLogs.length > 10) {
		let tempnum = chatLogs.length - 10;
		for (let i = tempnum; i < chatLogs.length; i++) {
			tempChat.push(chatLogs[i]);
		}
	} else {
		tempChat = chatLogs;
	}

	chatinfo.innerHTML = tempChat;


}

update();

var allinfo = document.querySelectorAll(".controlpanel");

//select all subtopic pages
//console.log(allpages);
hideAllControls();

function hideAllControls() { //function to hide all pages
	for (let onepage of allinfo) { //go through all subtopic pages
		onepage.style.display = "none"; //hide it
	}
}
showControls(4);

function showControls(pgno) { //function to show selected page no
	hideAllControls();
	//select the page based on the parameter passed in
	let onepage = document.querySelector("#controls-page" + pgno);
	//show the page
	onepage.style.display = "block";
}

//VARIANTS BUTTONS
const variationbtn = [];
const varationDesc = [
	"Features Disney characters and locations instead of traditional properties.",
	"Incorporates characters, planets, and events from the Star Wars universe.",
	"Features locations and characters from the Game of Thrones series.",
	"Set in the magical world of Harry Potter, with properties based on locations from the series.",
	"Includes Marvel superheroes and villains, with properties based on Marvel locations.",
	"Adds a special speed die to the game to speed up gameplay.",
	"Encourages players to cheat and includes rules and cards specifically for cheating, with consequences if caught.",
	"Features a digital banking system with cards instead of cash, and an electronic banking unit to handle transactions.",
	"Features famous landmarks and properties from specific cities, such as New York, London, or Paris.",
	"Highlights properties and locations unique to a particular country, like Monopoly: Canada Edition or Monopoly: Australia Edition.",
	"Released to celebrate significant anniversaries of the game, often with special tokens and updated graphics.",
	"Includes high-quality components, unique tokens, and special packaging for collectors.",
	"Features enhanced components, such as gold-tone tokens, wooden houses, and a deluxe game board.",
	"A fast-paced card game version of Monopoly, focusing on property trading and collecting sets of properties.",
	"A simplified version of the game designed for younger players, with easier rules and a smaller board.",
	"Modernized properties, events, and prices to reflect contemporary times."
];
for (let i = 0; i < 16; i++) {
	variationbtn.push(document.querySelector("#variationbtn" + (i + 1).toString()));
	//console.log(pagebtn[i]);
}
var variationdesc = document.getElementById('variationDesc');

for (let i = 0; i < 16; i++) {
	variationbtn[i].addEventListener("click", function() {
		variationdesc.innerText = varationDesc[i];
	});
	variationbtn[i].addEventListener("mouseover", function() {
		variationbtn[i].classList.add("glow");
	});
	variationbtn[i].addEventListener("mouseout", function() {
		variationbtn[i].classList.remove("glow");
	});
}