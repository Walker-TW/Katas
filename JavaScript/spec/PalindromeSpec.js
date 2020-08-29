var Palindrome = require("./../lib/Palindrome.js")

describe("String Reversal", function(){
    it("Should fail reversal of string", function(){
        expect(Palindrome.isPalindrome("Cigar Toss it in a can It is so tragic")).toEqual(false);
    })
    it("Should pass the palindrome phrase test", function(){
        expect(Palindrome.isPalindrome("Madam Im Adam")).toEqual(true)
    })
})