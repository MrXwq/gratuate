const router = require('express').Router()

const Order = require('../../models/Order');

router.post('/order', async (req, res) => {
    // const {id} = jwt.verify(req.body.token, req.app.get('secret'))
    // assert(id, 401, '请先登陆')
    const model = await Order.create(req.body)
    res.send(model)
})

router.post('/order/list', async (req, res) => {
    // const {id} = jwt.verify(req.body.token, req.app.get('secret'))
    // assert(id, 401, '请先登陆')
    const model = await Order.insertMany(req.body)
    res.send(model)
})

router.post('/order/get', async (req, res) => {
    // console.log(req.body.token)
    // const model = await Order.find({"token": req.body.token})
    const model = await Order.find()
    res.send(model)
})


module.exports = router