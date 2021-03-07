// - Créer un button et un evenement que au click la valeur de l'input sera affiché dans un span
let bouton = document.querySelector("button")
let span = document.querySelector("span")
let input = document.querySelector("input")
let contenu

bouton.addEventListener("click", function(){
    // input.style.backgroundColor ="red"
    span.innerHTML = input.value
    input.value = ""

})