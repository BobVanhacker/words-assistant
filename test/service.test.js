const WordsService = require('../src/service/WordsService');

describe("Words Service tests", () => {
    it("Should be able to add a new word, given Bob does not know it yet", () => {
        const wordsService = new WordsService();
        const serviceResponse = wordsService.addWord("Apple");

        expect(serviceResponse.length).toEqual(1);
        expect(serviceResponse[0]).toEqual("Apple");
    });

    it("Should not be able to add a new word, given Bob already knows it", () => {
        const ERROR_MESASGE = "Bob has already learned this word"; 
        const wordsService = new WordsService();
        wordsService.addWord("Apple");

        expect(() => wordsService.addWord("Apple")).toThrow(new Error(ERROR_MESASGE));
    });
});
