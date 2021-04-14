const express = require("express");
const app = express();
const fetch = require('node-fetch');
require('dotenv').config();

const port = process.env.PORT || 3000;



app.use(express.static("public"));



//GET route to obtain bot response
//Using client GET request parameters as POST body for chatbot API
//to prevent exposing API key in front end
app.get("/:question", async (req, res) => {

    const answer = await fetch(`${process.env.CHATBOT_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.CHATBOT_API_KEY}`,
        },
        body: JSON.stringify(req.params)
    })
        .then(res => res.json())
        .catch(err => err)

    res.send(answer);

})


app.listen(port)

