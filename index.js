const express = require('express')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/database', { useNewUrlParser:true})
const app = new express()

// Tell Express tu use EJS as template engine
app.set('view engine', 'ejs')
// Tell Express to use the public folder
app.use(express.static('public'))

app.listen(3030, () => {
    console.log('App listening on port 3030')

    app.get('/', (req, res) => {

        res.render('index')
    })

    app.get('/about', (req, res) => {

        res.render('about')
    })

    app.get('/post', (req, res) => {

        res.render('post')
    })

    app.get('/contact', (req, res) => {

        res.render('contact')
    })

    // 404 Page not Found
    app.get('*', (req, res) => {

        res.render('index')
    })
})