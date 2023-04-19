const express = require('express')
const router = express.Router
const { handleAuth , checkAuth } =require('../controller/user')
const path = require("path");


router.get('/home', (req , res) => res.sendfile(path.resolve(__dirname, '../Public/index.html')))
router.post('/login', handleAuth);
router.get('/member',checkAuth);

module.exports = router