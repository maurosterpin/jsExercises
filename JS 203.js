
for(let i = 0; i < 8; i++){
    let n=""
    for(let j = 0; j < 4; j++){
        if(i%2==0){
            n+=" "
            n+="#"
        } else {
            n+="#"
            n+=" "
        }
    
    }
    console.log(n)
}