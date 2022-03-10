let telOne = document.querySelector('.first');
let telTwo = document.querySelector('.second');
let telThree = document.querySelector('.third');
let telFour = document.querySelector('.fourth');
let tellMass = [];
let addTelButton = document.querySelector('#addTelButton');
let tels = document.querySelector('#tels');

addTelButton.onclick = () => {
    if(telOne.value!=null&&telTwo.value!=null&&telThree.value!=null&&telFour.value!=null) {
        tels.innerHTML+=`${tellMass.length+1}`;
        tellMass[tellMass.length] = document.createElement('a');
        tellMass[tellMass.length-1].setAttribute('href',`tel:0${telOne.value}${telTwo.value}${telThree.value}${telFour.value}`);
        tellMass[tellMass.length-1].innerHTML = `0${telOne.value} ${telTwo.value}-${telThree.value}-${telFour.value}`;
        tels.append(tellMass[tellMass.length-1]);
        tels.innerHTML+=`\n`
    }
};