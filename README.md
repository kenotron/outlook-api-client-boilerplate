# outlook-api-client-boilerplate
A Client & Server boilerplate for a React app that uses the Outlook API.

This boilerplate brings in:

* React
* mobx
* gulp
* webpack
* express
* simple-oauth2

And requires you to register an application to access the Outlook REST API. 

# Getting Started
## 1. Clone this repository and run npm install:
```
git clone https://github.com/kenotron/outlook-api-client-boilerplate.git
npm i
```

## 2. Register a new application in the [Azure App Registration portal](http://apps.dev.microsoft.com)
  1. Sign In -> Add an App -> Fill out details
  2. Copy Application ID, paste it in the clientId under ```src/server/config.ts```
  3. Generate New Password, paste it in the clientSecret under ```src/server/config.ts```
  4. Add Platform -> Web -> paste this in for the text field: ```http://localhost:3000/authorize```
  5. Hit Save Button
  6. Then, make sure that you DON'T ever check in the config.ts by typing this:
    ```
    git update-index --assume-unchanged src/server/config.ts
    ```

## 3. Run the dev server with a npm start script:
```
npm start
```
Now, simply open your browser to http://localhost:3000
