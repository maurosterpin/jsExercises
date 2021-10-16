let zagrade = (s) => {
    s.split("")
    let temp = [0,0,0,0,0,0]
    for(let i = 0; i < s.length; i++){
        if((s[i] === "{" && s[i+1] === "]") || (s[i] === "{" && s[i+1] === ")") || (s[i] === "[" && s[i+1] === "}") || (s[i] === "[" && s[i+1] === ")") || (s[i] === "(" && s[i+1] === "]") || (s[i] === "(" && s[i+1] === "}")){
            return false
        }
        if(s[i] === "{") temp[0]++
        else if(s[i] === "[")temp[1]++
        else if(s[i] === "(")temp[2]++
        else if(s[i] === ")")temp[3]++
        else if(s[i] === "]")temp[4]++
        else if(s[i] === "}")temp[5]++
    }
    if(temp[0] != temp[5]) return false
    else if(temp[1] != temp[4]) return false
    else if(temp[2] != temp[3]) return false
    else return true
}

console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false
