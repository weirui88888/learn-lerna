const { API } = require('new-learn-core')
const axios = require('axios')
const getPopularImg = () => axios.get(API)

module.exports = getPopularImg
