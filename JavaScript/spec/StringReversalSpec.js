var StringReversal = require('../lib/StringReversal.js')

describe("Jasmine Startup", function(){
    it("Will confirm that jasmine is working", function(){
        expect(true).toBe(true)
    })
})

describe("String Reversal", function(){
    it("Should reverse string", function(){
        expect(StringReversal.reversed("Hello World!")).toEqual("!dlroW olleH");
    })
})