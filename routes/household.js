var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET household listing. */
router.get('/', function (req, res, next) {
  axios('https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-045')
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err);
    })
});

module.exports = router;
