const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const port = 8088
router.post('/pushcode',ctx => {
    console.log(ctx);
    ctx.status = 200
    ctx.body = 'success'
})
app.use(router.routes).use(router.allowedMethods())
app.listen(port, () => {
    console.log(`app runing at 127.0.0.1:${port}`);
})