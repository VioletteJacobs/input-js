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

// // # Exercice 12 - DOM
// // ## JS
// //     - Créer un input

// //     - Créer un evenement que a chaque fois qu'on introduit une lettre dans l'input, la valeur de l'input s'affiche dans un span
// let div = document.createElement("div")
// document.body.append(div)
// let input = document.createElement("input")
// div.append(input)
// let span = document.createElement("span")
// div.append(span)

// input.addEventListener("input", function(){
//     console.log(input.value);
//     span.innerHTML = input.value
// })

// # Exercce 13 - DOM
// ## JS
//     - Créer une liste de CheckBox avec plusieurs valeurs

//     - Créer un button qui au click on sait voir dans la console les valeurs qui ont été cochés

//     - Tester aussi avec des inputs radio
// let button = document.querySelector("button")
// let div = document.querySelector("div")
// let inputs = document.querySelectorAll("input")
// div.setAttribute("class", "display")
// button.addEventListener("click", function(){
//     console.log(inputs.checked);
// })