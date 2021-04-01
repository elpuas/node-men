const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/database', { useNewUrlParser: true});

BlogPost.create({
    title: 'Un Post Alli',
    body: 'Some Contenido en Ingles and Spanish'
}, ( error, blogpost ) => {
    console.log( error, blogpost )
})