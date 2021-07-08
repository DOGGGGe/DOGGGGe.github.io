// JavaScript source code
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/dog.jpg');
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('������������֡�');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla ����ˣ�' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ����ˣ�' + storedName;
}
myButton.onclick = function () {
    setUserName();
}