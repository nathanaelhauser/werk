// need to insert name of actual db

module.exports = require ('mongoose').connect('mongodb://localhost/werkdb',{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
