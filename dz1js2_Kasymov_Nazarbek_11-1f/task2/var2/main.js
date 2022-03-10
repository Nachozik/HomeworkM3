let tellMass = [];
let addTelButton = document.querySelector('#addTelButton');
let tels = document.querySelector('#tels');
let input = document.querySelector('#input');

let space = new RegExp(' ','gi');
let stripe = new RegExp('-','gi');

function addTel (){
    if(input!=null) {
        tels.innerHTML+=`${tellMass.length+1}`;
        tellMass[tellMass.length] = document.createElement('a');
        let noSpaceVar = `${input.value.replace(space,'')}`;
        tellMass[tellMass.length-1].setAttribute('href',`tel:0${noSpaceVar.replace(stripe,'')}`);
        tellMass[tellMass.length-1].innerHTML = `0${input.value}`;
        tels.append(tellMass[tellMass.length-1]);
        tels.innerHTML+=`\n`
    }
}
addTelButton.addEventListener('click',addTel);