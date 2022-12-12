const express = require('express')
const getSearchData = require('../controllers/companyController')

const router = express.Router()


router.get("/api/:search",getSearchData)

module.exports = router

  
