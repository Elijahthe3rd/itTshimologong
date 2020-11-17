const express = require('express')
const path = require('path')
const router = express.Router()

router.use(express.static('/public'))

//http requests
router.get('/survey', (req, res) => {
    res.sendFile('survey.html',{root:path.join( 'public/')})  
})

router.get('/results', (req, res) => {
    res.sendFile('results.html', { root:path.join('public/') })
    console.log(req.body)
})


//back tracking html pages
router.get('/index.html', (req, res) => {
    // console.log(req.body.url)
    res.sendFile(__dirname+'/public/index.html')
})
router.get('/survey.html', (req, res) => {
    // console.log(req.body.url)
    res.sendFile(__dirname+'/public/survey.html')
})
router.get('/survey.html', (req, res) => {
    // console.log(req.body.url)
    res.sendFile(__dirname+'/public/results.html')
})



module.exports = router