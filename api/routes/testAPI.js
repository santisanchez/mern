var express = require('express');
var router = express.Router();

var UserModel = require('../models/user');


router.get('/', function(req, res, next) {
    UserModel.findOne({ name: 'santi'},(err,docs)=>{
        console.log(err);
        console.log(docs);
    });
    res.render('index', { title: 'Express' });

});

module.exports = router;
