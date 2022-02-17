<h3 align="center">
    <img alt="Logo" title="#logo" width="250px" src="/assets/words-assistant-new.jpg">
    <br>
</h3>

# Words Assistant

- [Purpose](#purpose)
- [Technologies](#techs)
- [Requirements](#reqs)
- [Architecture](#architecture)
- [Local Configuration](#localconfig)
- [Testing](#testing)
- [Postman Doc](#postman)
- [Possible improvements](#improvements)

<a id="purpose"></a>
## Purpose

This system was created to teach Bob Vanhacker new words. Whenever you teach Bob a new word, you will receive all previous words learned as response.

<a id="techs"></a>
## Technologies Used

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Express](https://expressjs.com/pt-br/)

<a id="reqs"></a>
## Requirements
- NodeJS (Recommended version 16+) and NPM installed.

<a id="architecture"></a>
## Architecture and directories

```
Project
├── src
│   ├── app.js: Express entry point of the application
│   ├── services: Business rules.
|── tests: Unit tests to validate business rules
├── package.json: File that manages all the dependecies and contains script definitions.

```
<a id="localconfig"></a>
## Local Configuration

- After cloning the project, installing Node, NPM and Yarn you can simply run ```yarn``` and then ```yarn start```

<a id="testing"></a>
### Testing
- To run unit tests you can execute this command ```yarn test```

<a id="postman"></a>
## Postman Documentation

I have prepared a postman documentation, in which you will be able to check in details each endpoint and possible Requests and responses.

Please access it by link below:

https://documenter.getpostman.com/view/4694407/UVkiTeJc

<a id="improvements"></a>
## Possible Improvements

A system is never perfect and there is always room for improvement. Here are some points that I would like to enhance if I had more time:

- Add a database do persist words;
- Include more validation to prevent wrong inputs;
- Include Docker to make the setup easier.

## Support

* If you have any query or doubt, please, feel free to contact me by e-mail.
