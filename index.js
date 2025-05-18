function countSpaces(text){
    let counter = 0
    for(let i = 0; i<text.length; i++){
        const letter = text[i]
        if(letter ===' ')counter++
    }
    return counter
}
console.log(countSpaces('алла  алдад fjfjf k ала ал адааа ааа'))