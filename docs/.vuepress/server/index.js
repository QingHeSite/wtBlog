const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const port = 3005
const app = new Koa()
const router = new KoaRouter()
const appStaticPath = path.resolve(__dirname,'../','dist')
app.use(KoaStatic(appStaticPath)).use(router.routes()).use(router.allowedMethods())
app.listen(port,() => {
    console.log(`app runing at 127.0.0.1:${port}`);
})
