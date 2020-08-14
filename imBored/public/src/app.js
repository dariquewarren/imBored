const path = require('path')

const moment = require('moment')
const exphbs = require('express-handlebars')
const express = require('express')

const app = express()
const port = 3000


//DEFINE PATHS FOR EXPRESS CONFIG

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// SETS UP HANDLEBARS ENGINE AND VIEWS LOCATION

app.engine( 'hbs', exphbs({extname:'.hbs' ,layoutsDir: 
viewsPath, partialsDir: partialsPath, defaultLayout: 'main'}));
app.set('view engine','hbs')
app.set('views', viewsPath)
express.static(__dirname)

// SETUP STATIC DIRECTORY TO SERVE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.get('/',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('index', {layout: 'index'})
})

app.get('/omdb',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('omdb', {layout: 'omdb'})
})
app.get('/supes',(req, res )=>{
    // res.send('helloooooooooo')
    //  res.sendFile(viewsPath + '/main.hbs' )
     res.render('supes', {layout: 'supes'})
})


var ddw = moment().format('h:mm:ss a');
app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
    console.log('moment---', ddw)
})

