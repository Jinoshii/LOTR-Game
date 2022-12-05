const hero = {
	elementId: "hero",
	name: "Wizard",
	avatar: "images/wizard.png",
	health: "60",
	diceCount: 3
}

const monster = {
	elementId: "monster",
	name: "Orc",
	avatar: "images/orc.png",
	health: "10",
	diceCount: 1
}

	


function renderCharacter(data) {
const {elementId, name, avatar, health, diceCount} = data

const diceHTML = getDiceHtml(diceCount)

	document.getElementById(elementId).innerHTML =
 ` 
	<div class="character-card">
		<h4 class="name"> ${name} </h4>
		<img class="avatar" src="${avatar}">
		<p class="health">health: <b> ${health} </b></p>
		<div class="dice-container"> ${diceHTML} </div>
	</div>
 `
}



function getDiceRollArray(diceCount) {
	const newDiceRolls = []
	for (let i = 0; i < diceCount; i++) {
		newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
	}
	return newDiceRolls
}


function getDiceHtml(diceCount) {
	return getDiceRollArray(diceCount).map(function(number){
		return `<div class="dice">${number}</div>`
	}).join("")
}

getDiceRollArray(3)

renderCharacter(hero)
renderCharacter(monster)





	
	





// **EXERCISE 7: USING A CONSTRUCTOR FUNCTION**
// 
// 1. Create a new constructor function called `Character` which
//    takes our data as a parameter.
// 2. Set up `this` for each of the five properties in our objects
//    (for example: `this.health = data.health`).
// 3. Then create a method called `getCharacterHtml` that performs the 
//    same tasks as our current `renderCharacter` function.
// 4. Create two new instances of `Character`. One for a hero, 
//    called `wizard`, and one for a monster, called `orc`. 
//    Render both of them on the page.
// 5. Delete both the old `renderCharacter` function and the two 
//    lines of code at the bottom of the page which invoke that 
//    function.
// 
// ---
// 
// **EXERCISE 8**
// 
// Fix the broken html rendering.
// 
// ---
// 
// **EXERCISE 9: RESTRUCTURING YOUR CODEBASE**
// 
// 1. Create a file called `utils.js`.
// 2. Cut and paste the getDiceRollArray() function into it.
// 3. Import back it into script.js as a default or named export.
// 4. Create a file called `Character.js`.
// 5. Cut and paste the Character constructor function into it.
// 6. Import back it into script.js as a default or named export.
// 7. You will hit a problem! Solve the problem by using the browser console for hints.
// 
// ---
// 
// **EXERCISE 10: LAUNCH THE FIRST ATTACK!**
// 
// 1. Make the attack button trigger a dice roll for both wizard and orc.
// 2. Make sure the new dice score shows in the app.
// 
// ---
// 
// **EXERCISE 11: DISPLAY THE PLACEHOLDER DICE**
// 
// 1. In the Character constructor, create a new property called "diceArray".
// 2. Set diceArray equal to whatever is returned by the getDicePlaceholderHtml function (there are two things you need to make this work!)
// 3. Instead of rendering diceHtml in the getCharacterHtml method, render diceArray.
// 4. Delete any unnecessary code.
// 
// ---
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



