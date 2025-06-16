# CRUD app using Rap-names-API

RapNamesAPI is containing rapper data easily accessible using Rest API.
It provides basic functionalities to add, delete, and update rapper entries to a database on MongoDB Atlas.

**Link to project:** https://rap-names-api-y9gc.onrender.com/

![Demo image](https://github.com/slyncrafty/slyncrafty.github.io/blob/main/images/rap-names-api.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express, MongoDB Atlas

CRUD app created using Node, Express, MongoDB Atlas. The app functions include -- Create, Read, Update and Delete data that are on a MongoDB Atlas database using Node and Express.

## How to Use:

Click this [link](https://rap-names-api-y9gc.onrender.com/) to hosted website. Add, like or remove Rapper name!

### Set up & Requirements to Play with it on your local machine

🔑 Clone this repo:

```clone git
git clone https://github.com/slyncrafty/rap-names-api.git
```

🔑 To install requirements:

```
mkdir api-project
cd api-project
npm init
npm install express mongodb ejs dotenv --save
```

🔑 Create `.env` file and add `DB_STRING` that is a Connection String to your MongoDB.
For example,

```
echo "DB_STRING = mongodb+srv://<your-user-id>:<your-password>@cluster0.example.mongodb.net/?retryWrites=true&w=majorityi" > .env
```

For more information, check out MongoDB Docs on [Connection Strings](https://www.mongodb.com/docs/manual/reference/connection-string/)

## Lessons Learned:

Learned how to create a simple API that allows users to get a respond with the requested data from a database.
Learned how to host an app on hosting platform. Originally the app was meant to be hosted on Heroku through the heroku CLI, now hosted on render as an alternative.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Pomodoro Timer:** https://github.com/slyncrafty/pomodoro-timer

**minesweeper:** https://slyncrafty.github.io/minesweeper/
