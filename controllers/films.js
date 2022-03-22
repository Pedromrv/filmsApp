const { fetchAPI } = require("../utils/fetch")
const utils = require("../utils/fetch")

const getTitle = async (req, res) => {
    console.log(req.params)
    const film = req.params.title
    const response = await utils.fetchAPI("t", film)
    res.status(200).send(response)
}

const print = () => console.log("Funciono")



const films = {
    getTitle,
    print
}

module.exports = films;