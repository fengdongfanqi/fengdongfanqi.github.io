let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.png') {
        myImage.setAttribute('src', 'images/2.png');
    } else {
        myImage.setAttribute('src', 'images/1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {                             //构建函数，但函数需要在调用后生效
    let myName = prompt('请输入你的名字：');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storeName;
}

myButton.onclick = function () {
    setUserName();
}