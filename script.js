import characterData from "./data.js"
import Character from "./character.js"


const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById("attack-button").addEventListener("click", attack)

function attack(){
	wizard.getDiceHtml()
	orc.getDiceHtml()
	wizard.takeDamage(orc.currentDiceScore)
	orc.takeDamage(wizard.currentDiceScore)
	display()	
}

function display() {
	document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
	document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

display()


// 
// 
// **EXERCISE 12: FIX THE DICE DISPLAY**
// 
// 1. In the getDiceHtml method, map over currentDiceScore to return this string of html template for each element:
// 
// `<div class="dice">${number}</div>`.
// 
// Save this new array to diceArray.
// 
// 2. Modify the attack() function in index.js to get the 
// app working again.
// 
// ---
// 
// **EXERCISE 13: INFLICTING DAMAGE**
// 
// 1. Since we need to pass some data to our new `takeDamage()` method, add that data as an argument each time we call `takeDamage()` in the `attack()` function.
// 2. In the `takeDamage()` method, add a parameter called `attackScoreArray` and log it out.
// 3. *Hint - think about the currentDiceScore property.*
// 
// ---
// 
// **EXERCISE 14**
// 
// Fix the app to show the orc card again.
// 
// ---



