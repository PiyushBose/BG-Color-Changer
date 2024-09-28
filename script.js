const body = document.querySelector("body");

let colors = ["red", "green", "blue"];

function createPopUp(){
    document.querySelector(".pop-up").classList.remove("hide");
    document.querySelector(".container").classList.add("blur");
    const input = document.querySelector("input");
    input.focus();
    input.select();
    input.value = '';
    
    input.addEventListener("keyup", (e)=>{
        if(e.key === "Enter"){
            e.stopImmediatePropagation();
            e.preventDefault();
            addColor();
        }
    })

    input.addEventListener("keyup", (e)=>{
        if(e.key === "Escape"){
            e.preventDefault();
            closePopUp();
        }
    })
    
}

function closePopUp(){
    document.querySelector(".pop-up").classList.add("hide");
    document.querySelector(".container").classList.remove("blur");

}

function addColor(){
    let inputColor = document.querySelector("input").value;
    if(CSS.supports('color', inputColor)){
        colors.push(inputColor);
        closePopUp();
        render();
    }
    else{
        const invalid = document.createElement("div");
        invalid.innerHTML = 'Invalid Color! Try something else';
        invalid.classList.add("invalid");
        document.querySelector("input").after(invalid);
        inputColor = '';
        if(!inputColor){
            setTimeout(()=>{
                invalid.remove();
            }, 1000);
        }
    }
}

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