#1 Create the enviroment files within the environment folder adding SERVER_PORT, DB_NAME, DB_USER, DB_PASSWORD and GROK_API key for respective environments - local.env, development.env and production.env

#2 Install the dependencies via npm via npm install

#3 Run the backend as per the respective environment using npm run
For local - "local": "cross-env NODE_ENV=local nodemon server.js",
For dev - "dev": "cross-env NODE_ENV=development nodemon server.js"