//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

// A controller that sends the trending gifs (fetch from the API)\\
const serveTrendingGifs = async(req, res, next) => {
    try{
        const response = await fetch (
            `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`,
        );
        if(!response.ok) {
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText}`,
            );
        }
        const dataFromResponse = await response.json()
        res.send(dataFromResponse)
      } catch (error) {
    res.status(503).send({ error });
  }// sending a response of the data which is the trending gifs
// returns the array of gifs
};
// curl is a tool used within your terminal to make requests for an endpoint
// endpoint looks better used on web and familiar with json and does not use curl

const serveGifsBySearch = async (req, res, next) => {
    try {
        const { q } = req.query;
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?q=${q}&limit=3&rating=g&api_key=${process.env.API_KEY}`,
        );
        if(!response.ok) {
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText}`,
            );
        }
        const dataFromResponse = await response.json()
        res.send(dataFromResponse)
      } catch (error) {
    res.status(503).send({ error });
  }
}
// sending data to endpoint
// 


const serveStatic = express.static(pathToFrontend);
app.get('/api/gifs', serveTrendingGifs);
app.get('/api/gifs/search', serveGifsBySearch)
app.use(serveStatic);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 