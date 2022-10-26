// JavaScript source code
//function imageclick() {
    //document.getElementById("box").innerHTML += '<img src="img/money.png"/>';}

//let theBag = document.getElementById('bag');

let bag = ""; //Holds the inner.HTML
let shown = false

function getloot(loot) {
    bag += loot; //adds the inner.HTML
    console.log(getloot);
}

function showlootbag() {
     document.getElementById('inv').innerHTML = bag;//ads bag content to the div inv innerhtml
    shown = true

}

function hidebag() {
    document.getElementById('inv').innerHTML = ('');
    shown = false
}
function thief() {
    if (shown === true) {
        hidebag()
    }
    else {
        showlootbag()
    }

}



