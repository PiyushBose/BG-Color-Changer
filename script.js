const body = document.querySelector("body");

let colors = ["red", "green", "blue"];



function updateColor(color){
    body.style.backgroundColor = color.getAttribute("id");
}

function createComponent(color){
    const newColor = document.createElement("button");

    newColor.setAttribute("id", color);
    newColor.innerHTML = color.charAt(0).toUpperCase() + color.slice(1,color.length);
    newColor.style.backgroundColor = color;
    newColor.setAttribute("onclick", `updateColor(${color})`);


    return newColor;
}

function render(){
    document.querySelector("#root").innerHTML = "";
    colors.forEach((color)=>{
        const element = createComponent(color);
        document.querySelector("#root").appendChild(element);
    })
}

render();