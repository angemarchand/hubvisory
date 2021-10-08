const express    = require('express');
const cors       = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

const axios = require('axios');
const { response } = require('express');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=7456d34ac2a1a257877b3851d2e7aa57")
    .then(response => {
        //console.log(response.data)
        return res.status(200).send(response.data) 
    })
    .catch((error) => {
        console.log(error)
    })
})


module.exports = app;


