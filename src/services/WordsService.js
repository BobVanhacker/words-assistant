class WordsService {
    constructor() {
        this.words = []
    }

    addWord(word) {
        if (this.checkWordAlreadyExists(word)) {
            throw new Error("Bob has already learned this word");
        }
        this.words.push(word);

        return this.words;
    }

    checkWordAlreadyExists(word) {
        return this.words.includes(word);
    }
}

module.exports = WordsService
