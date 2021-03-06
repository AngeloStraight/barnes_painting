const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// const Story = require('../models/Story')
// @desc   Login/landing page
// @route  GET /


router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

router.get('/dashboard', ensureAuth, async (req, res) => {

    try{
        res.render('dashboard')
    }catch(err){
        console.error(err)
        res.render('error/500')
    }

    
})

module.exports = router