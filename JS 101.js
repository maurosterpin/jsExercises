let brojevi = []
let a = brojevi.push(prompt("Unesi prvi broj"));
let b = brojevi.push(prompt("Unesi drugi broj"));
let c = brojevi.push(prompt("Unesi treci broj"));
let d = brojevi.push(prompt("Unesi cetvrti broj"));
let maks = Math.max.apply(Math, brojevi)
// tvoj kod
console.log("Najveći između njih je: " + maks);