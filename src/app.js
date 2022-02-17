const express = require('express');
const WordsService = require('./service/WordsService');

const app = express();

app.use(express.json());
const wordsService = new WordsService();

app.post('/words', (request, response) => {
    try {
        const { word } = request.body;
        const updatedWords = wordsService.addWord(word);
        return response.status(201).json(updatedWords);
    } catch (error) {
        return response.status(400).json({message: error.message});
    }
});

app.listen(3333);
