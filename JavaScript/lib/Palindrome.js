function isPalindrome (text){
    var noPunctuation = text.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    var cleanText = noPunctuation.replace(/\s{2,}/g," ");
    var textLowerCase = cleanText.toLowerCase()
    var reversed = textLowerCase.split(" ").reverse()
    var reversedArray = reversed.reverse()
    var reversedString = reversedArray.join(" ")
    if (reversedString === textLowerCase){
        console.log("text",text)
        console.log("noPunctuation",noPunctuation)
        console.log("cleanText",cleanText)
        console.log("reversed",reversed)
        console.log("textLowerCase",textLowerCase)
        console.log("reversedArray",reversedArray)
        console.log("reversedString",reversedString)
        return true
    }
    else {
        console.log("text",text)
        console.log("noPunctuation",noPunctuation)
        console.log("cleanText",cleanText)
        console.log("reversed",reversed)
        console.log("textLowerCase",textLowerCase)
        console.log("reversedArray",reversedArray)
        console.log("reversedString",reversedString)

        return false
    }
}

module.exports = {
    isPalindrome : isPalindrome
}


// This needs to be broken into 2D arrays
// and then bring out a true or false dependent on a matcher
// check that when its reversed its the text
// lowercase everything