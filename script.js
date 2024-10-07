let input = document.getElementById("task");
let btn = document.getElementById("btn");
let out = document.getElementById("out");

let data = [];
let newDiv;


btn.addEventListener("click",()=>{
    data.push(input.value);
    newDiv = document.createElement("li");
newDiv.textContent = input.value;
out.appendChild(newDiv);
    
})