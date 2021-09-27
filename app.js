const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const url = "https://www.indiatoday.in/coronavirus-covid-19-outbreak";

axios(url)
    .then(response => {
    const html = response.data;
    const $ = cheerio.load(html)
    const articles = []

        $('.detail', html).each(function () {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title: title,
            url
        })
        })
        console.log(articles)
    }).catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send("The server is working just fine!");
})

app.listen(3000, ()=>{
    console.log("Server is on air on port 3000");
});