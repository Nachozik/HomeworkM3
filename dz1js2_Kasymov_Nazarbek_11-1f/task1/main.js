
// ПРИМЕЧАНИЕ: Сначала вводится массив, с текстами внутри.
// Затем, чтобы найти совпадения в каждом элементе массива
// введите в поле то, что хотите найти в текстах массива

const input = document.querySelector("#input");
const searchButton = document.querySelector("#search");
const output = document.querySelector("#output");
const mass = document.querySelector("#mass");

let arr = [];
for (let i = 0; true; i++){
    arr[i] = prompt(`Введите текст для элемента ${i+1} массива, в котором будем искать`);
    if(!confirm("Продолжить?"))break;
}
console.log(arr);
for (let i = 0; i<arr.length; i++){
    mass.innerHTML+=`[${i+1}]: ${arr[i]}`;
}
const regex = new RegExp(`${input.value}`, 'gi');

searchButton.onclick = () => {
    if (input.value === null) {output.innerText += `Поле пустое\n`;}
    else{
        for (let i = 0; i<arr.length; i++){
            output.innerText += `[${i}]: ${arr[i].match(input.value)} `;
            }
        output.innerText += `\n`;
    }
};