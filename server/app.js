const express    = require('express');
const cors       = require('cors')
const bodyParser = require('body-parser');
// const dotenv     = require("dotenv");
// dotenv.config();


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.send("HELLO HUBVISORY WORLD")
})

module.exports = app;


