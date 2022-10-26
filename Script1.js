// JavaScript source code
//function imageclick() {
    //document.getElementById("box").innerHTML += '<img src="img/money.png"/>';}

//let theBag = document.getElementById('bag');

let bag = ""; //Holds the inner.HTML
let shown = false

function getloot(loot) {
    bag += loot; //adds the inner.HTML
    instaloot();
    console.log(getloot);
}

function showlootbag() {
     document.getElementById('inv').innerHTML = bag;//ads bag content to the div "inv" innerhtml
    shown = true
}

function hidebag() {
    document.getElementById('inv').innerHTML = ('');
    shown = false
}
function thief() {
    if (shown === true) {
        hidebag();
    }
    else {
        showlootbag();
    }

}


function random1() {
    let randomizer = Math.floor(Math.random() * 4) + 1; //randomizes the number from 1-4 under the let variable "randomizer"
    if (randomizer === 1) {
        bag += document.getElementById("1").innerHTML
    }
    else if (randomizer === 2) {
        bag += document.getElementById("2").innerHTML
    }
    else if (randomizer === 3) {
        bag += document.getElementById("3").innerHTML
    }
    else {
        bag += document.getElementById("4").innerHTML //else if statements to assign an image to each randomized number. 1 being equal to the id="1" putting a copy of that image in the var "bag".

    }
    instaloot();
    console.log(random1)
}
function instaloot() { //this way if the bag is opened the loot gets added instantly. instead of opening and closing the bag.
    if (shown === true) {
        showlootbag()
    }
}
function arrested() {
    bag = ('');
    hidebag();
}







var tID;

function racoonsprite() {
    document.getElementById("racoon").style.backgroundPosition = '-150px 0px';

}




function racoon() {
    var position = -150;
    const interval = 250;
    const diff = -50;

    tID = setInterval(() => {
        document.getElementById("racoon").style.backgroundPosition = `-${position}px 0px`;

        if (position < 250) { position = position - diff; }
        else {
            position = 150;
        }
    }
        , interval);
}
document.getElementById("racoon").addEventListener("load", racoon())