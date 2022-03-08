var userInput = document.getElementById("user_input");
var list = document.getElementById("all_items");
var pencil = document.getElementById("pencil");
var eraser = document.getElementById("eraser");

function addItem(){
    if(userInput.value){
        var item = document.createElement("h2");
        item.innerHTML = '- ' + userInput.value;
        list.appendChild(item);
        userInput.value = '';

        item.onclick = function(){
            this.classList.toggle("checked");
        }
    }
}

function clearItem(){
    list.innerHTML = "";
}

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addItem();
    }
})

pencil.addEventListener("click", addItem);

eraser.addEventListener("click", clearItem);
