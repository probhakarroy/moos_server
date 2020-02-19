var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var models = require('.././models');

const Op = Sequelize.Op;

router.get('/showdb', function (req, res){
  models.Device_Data.findAll().then(result => {
    res.send(JSON.stringify(result));
  }).catch(err =>{
    res.status(400).send("Failed");
  });
});

router.get('/db/from/:date1/to/:date2', function (req, res){
  models.Device_Data.findAll({
    where : {
      createdAt : {
        [Op.gte] : req.params.date1,
        [Op.lte] : req.params.date2
      }
    }
  }).then(result => {
    res.send(JSON.stringify(result));
  }).catch(err =>{
    res.status(400).send("Failed");
  });
});

module.exports = router;
