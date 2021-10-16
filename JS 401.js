let student = [
{
    ime: "aPojama",
    prezime: "Neki",
    upisan: true
},
{
    ime: "Albus",
    prezime: "Dumbledore",
    upisan: true
},
{
    ime: "Artemis",
    prezime: "Fowl",
    upisan: true
}
]

function provjeri(lista, pojam){
    for(let i = 0; i < lista.length; i++){
        if((lista[i].ime.toUpperCase().includes(pojam.toUpperCase()) || lista[i].prezime.toUpperCase().includes(pojam.toUpperCase())) && lista[i].upisan === true){
            return true
        }
    }
    return false
}

console.log(provjeri(student, "x"))