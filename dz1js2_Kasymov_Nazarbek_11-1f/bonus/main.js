let anthem = {
    str1: "AGITATIS ULTRAMARINI",
    str2: "NON PRAESTATIS ULTRAMARINI",
    str3: "DOMINITIS ULTRAMARINI",
    str4: "hydra dominatus!"
};

let dropPod = JSON.stringify(anthem);

localStorage.setItem('heretic_planet', dropPod);

let droppedDropPod = localStorage.getItem('heretic_planet');

let engage = JSON.parse(droppedDropPod);

console.log(engage);

const deleteKey = document.querySelector('#deleteKey');
const exterminateLocal = document.querySelector('#exterminateLocal');

function deleteHydroDominatus () {
    localStorage.removeItem('heretic_planet')
}
function exterminatus () {
    localStorage.clear()
}

deleteKey.addEventListener('click', deleteHydroDominatus);
exterminateLocal.addEventListener('click', exterminatus,true);