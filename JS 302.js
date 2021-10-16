    let f = (temp) => {
    let count = temp.split("")
    let brojac = 1
    let maksimum = 0
    for(let i = 0; i < count.length; i++){
        if(temp[i] === temp[i+1]){
            brojac++
        } else {
            brojac = 1
        }
        if(brojac >= maksimum) {
            maksimum = brojac
        }
    }
    return maksimum;
}

console.log(f("aaaabbccccc"))