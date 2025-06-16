const dotenv = require('dotenv');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const PORT = 8000;

// Load config
dotenv.config();

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rap-names';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`);
        db = client.db(dbName);
    })

app.set('view engine', 'ejs');

// Static folder
app.use(express.static('public'));

app.use(express.urlencoded( { extended: true }))
app.use(express.json());


app.get('/', (req, res) => {
    db.collection('rappers').find().sort({likes:-1}).toArray()
    .then(data => {
        res.render('index.ejs', { info: data });
    })
    .catch(err => console.error(err));
});

app.post('/addRapper', (req, res) => {
    db.collection('rappers')
    .insertOne( { stageName: req.body.stageName, birthName: req.body.birthName, likes: 0 })
    .then(result => {
        console.log('Rapper Added');
        res.redirect('/'); 
    })
    .catch(err => console.error(err));
})

app.put('/addOneLike', (req, res) => {
    db.collection('rappers').updateOne( { stageName: req.body.stageNameS, birthName: req.body.birthNameS, likes: req.body.likesS }, {
        $set: {
            likes:req.body.likesS + 1
        }
    },{
        sort:{_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One Like');
        res.json('Like Added');
    })
    .catch(err => console.error(err))
})

app.delete('/deleteRapper', (req, res) => {
    db.collection('rappers')
    .deleteOne( { stageName: req.body.stageNameS })
    .then(result => {
        console.log('Rapper Deleted');
        res.json('Rapper Deleted');
    })
})

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});