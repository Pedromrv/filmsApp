const fetch = require('node-fetch')
const env = require('dotenv').config()
const apikey = process.env.API_KEY;

const fetchAPI = async (typeOfSearch,searchValue) => {
    try {
        let response = await fetch(`http://www.omdbapi.com/?${typeOfSearch}=${searchValue}&apikey=${apikey}`); //
        let data = await response.json(); //
        return data;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return [];
    }
}


const utils = {
  fetchAPI,
 
};

module.exports = utils;
