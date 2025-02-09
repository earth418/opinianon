# Opinanon stack


#### (based on a template repository from CS 439)
## Overview

The MERN stack is an extremely popular development stack, and is composed of the following components:

- MongoDB (NoSQL Database)
- Express (Backend Framework)
- React (Frontend Framework)
- Node.js (Backend Runtime)

This application is a MERN-stack application written in TypeScript. We'll use the database functionality to create our application.

## Running This App Locally

To run this app locally, there are some prerequisites:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node v16.14](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Once you installed all the stuff above, follow these directions:

1. Run `yarn install:all`. This will install all of the necessary npm packages.
2. Open a terminal window and run `yarn dev:env`. This will run a MongoDB container on your local machine. Keep this terminal open.
3. Open another terminal window and run `yarn dev:server`. This will run the REST API on port `4000`.
4. Open another terminal window and run `yarn dev:client`. This wll serve the client on port `3000`.

After completing the steps above, you should be able to go to `http://localhost:3000` on your browser and see the app. Have fun making doggos!
