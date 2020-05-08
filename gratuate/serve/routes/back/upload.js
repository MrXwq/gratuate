const router = require('express').Router()

// 中间件
const multer = require('multer')
// 登陆校验中间件
// const authMiddleware = require('../../middleware/auth')
// 传递一个目标地址是哪里
const upload = multer({ dest: __dirname + '\\..\\..\\uploads'})
// 除了资源路由还有别的路由，所以我们得在下面写
// upload.single代表单个文件上传，上传后服务端返回一个file，所以里面是file,这样子我们就接受了这个接口可以上传文件
router.post('/upload', upload.single('file'), async (req,res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
})

module.exports = router