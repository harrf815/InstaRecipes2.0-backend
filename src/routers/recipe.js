
const express = require('express')
const router = new express.Router()

const Recipe = require('../models/recipe')
const auth = require('../middleware/auth')

//! POST -------------------------------------

router.post('/recipes', auth, async (req, res) => {
    const recipe = new Recipe({
        ...req.body,
        owner: req.user._id
    })

    try {
        await recipe.save()
        res.status(201).send(recipe)
    } catch (e) {
        res.status(400).send(e)
    }
})

//! GET ------------------------------------

router.get('/recipes', async (req, res) => {

    try {
        const recipes = await Recipe.find({})
        res.send(recipes)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router 