/* Bruce Provencher */
/* 20 JAN 2020 */
/* Mozilla JS Project */

let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc ==='firefox-icon.png') {
		myImage.setAttribute ('src', 'firefox2.png');
	} else {
		myImage.setAttribute ('src', 'firefox-icon.png');
	}

}

// Code to change which user is displayed 
// at the end of the heading at the top of the page

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Personalize the greeting

function setUserName() {

	let myName = prompt("Please enter your first name: ");

	// Because user's name is stored in local storage, the name persists after page is closed
	// Personalized message remains even after page is opened in browser the next time

	localStorage.setItem('username', myName);
	myHeading.textContent = `Mozilla is cool, ${myName}!`;
}
// Does the username data exist?

if (!localStorage.getItem('username')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('username');
	myHeading.textContent = `Mozilla is cool, ${storedName}!`;
}

// When change user button is clicked, run the function setUserName( )

myButton.onclick = function () {
	setUserName();
}
