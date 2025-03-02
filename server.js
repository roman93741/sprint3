const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');



app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"]  // "UPDATE" is not a valid HTTP method
}));



// Dice Roller API Endpoint
app.get("/api/diceroller", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.send({ roll : diceRoll });
});

// Start Server
app.listen(3000);