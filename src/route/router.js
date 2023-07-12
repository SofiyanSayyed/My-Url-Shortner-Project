const express = require('express');
const router = express.Router();
const {createShortUrl,getUrl} = require('../controller/urlController')


router.post('/url/shorten', createShortUrl )
router.get('/:urlCode', getUrl)

// router.all('/*', function(req, res){
//     return res.status(400).send({status:false, message: "Enter Valid Url"})
// })


module.exports = router