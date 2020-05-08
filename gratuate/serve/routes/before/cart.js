const router = require('express').Router()

const Cart = require('../../models/Cart');

router.post('/cart', async (req, res) => {
    const model = await Cart.create(req.body)
    res.send(model)
})
router.post('/cart/get', async (req, res) => {
    const model = await Cart.find()
    res.send(model)
})

router.delete('/cart/:id', async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id)
    res.send({
        success: true
    })
})

router.delete('/cart', async (req, res) => {
    await Cart.remove()
    res.send({
        success: true
    })
})

router.put('/cart/:id', async (req, res) => {
    const model = await Cart.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
})


module.exports = router