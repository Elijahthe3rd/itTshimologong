const express = require('express')
const requestRoute = require('./router/router')
const app = express()
const bodyParser = require('body-parser')
const database=require('./db/postgresqlConnection')

/*
*body-parser
*a middleware used for parsing the body from the request object during POST calls made to the server. There are several modules under this package and we will mainly cover
*URL-encoded form body parser
*JSON body parser
*Text body parser
*/

const path = require('path')
const formsPath=(__dirname+'public/index.html')
// const surveyPath=(__dirname+'public/survey.html')
// const resultsPath=(__dirname+'public/results.html')
let port = 5050

/*
* Informing or allowing express to use Bootstrap packages/files installed using npm
* also serving them as static files thanks to express.static function
*/

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/form', requestRoute)
app.use(express.static('./public'))

app.get('/', (req, res) => {
    // console.log(req.body.url)
    res.sendFile(formsPath)
})

app.get('/survey', (req, res) => {
    res.sendFile('survey.html',{root:path.join( 'public/')})  
})

app.post("/survey",(req,res)=>{
    var info = {
        surname: req.body.Surname,
        first_Name: req.body.FirstName,
        contact: req.body.ContactNumber,
        date: req.body.Date,
        age: req.body.Age,
    }
    console.log(req.body)
    res.send(info)
})



app.listen(port, () => console.log(`\nserver is up and running on localhost:${port}`))
database.connector().then(()=>
database.createTable('elijah'))

