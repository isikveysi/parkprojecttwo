const express = require("express");
const hpp = require('hpp');
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require('cors');
const dotenv = require("dotenv");
const routes = require("./routes");

// Environment Variables
dotenv.config({path : "./config/config.env"});
// Creating Our Server

const app = express();
app.use(express.json());
// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const PORT = process.env.PORT || 5000;

// Security

app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());

// Routes

app.use("/",routes);
// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

app.listen(PORT,() => {
    console.log(`App Started on ${PORT} - Environment : ${process.env.NODE_ENV} `);
    
});