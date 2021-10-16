let bodovi = prompt("Unesi broj bodova");
let ocjena;
if(bodovi >= 89) {
    ocjena = 5
} else if(bodovi >= 79) {
    ocjena = 4
} else if(bodovi >= 65) {
    ocjena = 3
} else if(bodovi >= 50) {
    ocjena = 2
} else {
    ocjena = 1
}
let poruka = "Čestitke na " + ocjena + "!";
// tvoj kod
if(ocjena > 1){
console.log(poruka);
}
