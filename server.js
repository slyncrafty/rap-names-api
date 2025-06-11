const express = require('express')
const app = express()

const PORT = 8000;

const rappers = {
    '21 savage' : {
    'birthName': 'London, UK',
    'birthLocation': 'Shéyaa Bin Abraham-Joseph',
    'age': 32,
    },
    'chance the rapper' : {
        'birthName': 'Chicago, Illinois',
        'birthLocation': 'Chancellor Bennett',
        'age': 32,
    }, 
    'unknown' : {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 'unknown', 
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (req, res) => {
    try {
        const rapperName = req.params.rapperName.toLowerCase();
        if(rappers[rapperName]) {
            res.json(rappers[rapperName]);
        }
        else {
            res.json(rappers['unknown']);
        }
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});