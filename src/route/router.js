const express = require('express');
const router = express.Router();

router.post('/url/shorten', )
router.get('/:urlCode', )

router.all('/*', function(req, res){
    return res.status(400).send({status:false, message: "Enter Valid Url"})
})