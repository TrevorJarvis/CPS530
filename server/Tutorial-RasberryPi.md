# Tutorial

## Prerequisite

- NodeJS and npm installed on the system

## Procedures

1. Open the terminal on your system.
1. Create your project directory by using `mkdir ${PROJECT_NAME}` - replace `${PROJECT_NAME}` with your project name.
1. Navigate to the created directory by using `cd ${PROJECT_NAME}`
1. Create `package.json` by using `npm init` and follow the onscreen instruction
1. Add `expressJS` to the project by using `npm i --save express`
1. Create a file `index.js` in the root of the directory. This `index.js` is the main entry point of your ExpressJS app. This is the minimal code to setup the app.

   ```js
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 5000;
    // To serve static routes
    // The app will serve files from static folder at the url /static
    app.use('/static', express.static(path.join(__dirname, 'static')));
    // Main app routing
    // The app will serve index.html at the url /
    app.get('/', (req, res, next) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });
    // Run the app
    app.listen(port, () => {
      console.log(`The app is listening on port ${port}`);
    });
   ```

1. Design your app in `index.html`. You can use any front-end framework to design it such as ReactJS.
1. Run your app using `npm start`. The app can now be access on `http://localhost:5000`.

## Port Forwarding

- (Recommended) Set the Raspberry Pi to a static IP in your router.
- Configure the router to port forward the IP address of the Raspberry Pi along with the port of the ExpressJS app.