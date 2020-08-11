let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eyeo.png') {
        myImage.setAttribute('src', 'images/eyec.png');
    }   else {
        myImage.setAttribute('src', 'images/eyeo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('이름을 입력해주세요.');
    if (!myName || myName === null) {
        setUserName();
    }   else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '내 이름은 ' + myName;
    }
    if (!localStorage.getItem('name')) {
        setUserName();
    }   else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = '내 이름은 ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}