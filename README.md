# Users-Policies-Restful-WebApi

Node Web Api built to retrieve certain information about users from a fake JSON database and its related policies.

  - Get list of users and list of policies
  - Users by name and by policy Id
  - All policies related with a specific user
  - Authenticated and authorized access

### Installation

This project requires [Node.js](https://nodejs.org/) in your local machine.

Clone this repository in your local machine
```sh
$ git clone https://github.com/alexbo93/Users-Policies-Restful-WebApi.git
$ cd Users-Policies-Restful-WebApi
```

Install the dependencies and start the server.
```sh
$ npm install
$ npm run prestart
$ npm start
```
After this, server will start listening through port 3000 or whatever is set in PORT env variable. API should be consumed then at localhost:3000. All the endpoints available are deeply explained in Docs.md file in this same directory.

To check testing
```sh
$ npm run test
```

For development purposes, install dev dependences and run dev script.
```sh
$ npm install --only=dev
$ npm run dev
```
It will start a nodemon process, so any change will be watched and linted.
