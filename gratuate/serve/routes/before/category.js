const router = require('express').Router()

const Category = require('../../models/Category');

router.get('/category', async (req, res) => {
    const model = await Category.find()
    res.send(model)
})


module.exports = router