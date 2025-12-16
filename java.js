let btn = document.getElementById("btn")


btn.addEventListener("click", getWords)
function getWords(){
    console.log(btn)
    
    var words = document.querySelectorAll("input[type=text]")
    console.log(words)
    
    let  placeholders = document.querySelectorAll(".userInput")
    console.log(placeholders)    
    
    placeholders.forEach((placeholder, index)=> {
        console.log(placeholder, index);
    });

    console.log(67);
}