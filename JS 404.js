let studenti = [
    {
    ime: "Marko",
    prezime: "Marković",
    grad: "Pula"
    },
    {
    ime: "Iva",
    prezime: "Ivić",
    grad: "Našice"
    },
    {
    ime: "Lucija",
    prezime: "Lucić",
    grad: "Zagreb"
    },
    {
    ime: "Nikola",
    prezime: "Nikolić",
    grad: "Rijeka"
    }
   ];
   function napredna_pretraga(lista, pojam) {
    let temp = pojam.split(/(\s+)/);
    for(let i = 0; i < lista.length; i++){
        let brojac = 0
        for(let j = 0; j < temp.length; j++){
        if(lista[i].ime.toUpperCase().includes(temp[j].toUpperCase()) || lista[i].prezime.toUpperCase().includes(temp[j].toUpperCase()) || lista[i].grad.toUpperCase().includes(temp[j].toUpperCase())){   
            brojac++
        }
    }
    if(brojac === Math.ceil(temp.length/2)) return i
    }
   }
    console.assert(napredna_pretraga(studenti, "ma ić") == 0) // → prvi student
    console.assert(napredna_pretraga(studenti, "ko lić ri") == 3) // → zadnji student
    console.assert(napredna_pretraga(studenti, "ić za") == 2) // → treći student
    console.assert(napredna_pretraga(studenti, "ić ko la ri") == 3) // → zadnji student