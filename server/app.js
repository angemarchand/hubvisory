const express    = require('express');
const cors       = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

const axios = require('axios');
const { response } = require('express');

const questions = require('./questions');
// console.log(questions)
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    axios.get("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
    .then(response => {
        // console.log(response.data)
        return res.status(200).send(response.data) 
    })
    .catch((error) => {
        console.log(error)
    })
})
app.get('/question', function (req, res) {
   return res.send(questions)
})


module.exports = app;


