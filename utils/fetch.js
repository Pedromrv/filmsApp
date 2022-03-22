const fetch = require('node-fetch')
const env = require('dotenv').config()
const apikey = process.env.API_KEY;
console.log(process.env);

const fetchAPI = async () => {
    try {
        let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`); //
        let data = await response.json(); //
        console.log(data)
        return data;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return [];
    }

}

const utils = {
  fetchAPI
};

module.exports = utils;
