function reversed(text){
    var reversed = text.split("")
    var reversedArray = reversed.reverse()
    return reversedArray.join("")
}

module.exports = {
    reversed : reversed
}
