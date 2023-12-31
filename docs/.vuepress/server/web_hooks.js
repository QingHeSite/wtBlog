const path = require('path')
const fs = require('fs')
const process = require('child_process')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const port = 8091
app.use(ctx => {
    console.log(ctx);
    if(ctx.method === 'POST' && ctx.url === '/webapi/pushcode'){
        console.log('接收webhooks');
        process.exec('./deploy.sh', (error,stdout, stderr) => {
            console.log(error,stdout);
        },)
        ctx.status = 200;
        ctx.body = 'success';
    }else {
        ctx.status = 404
        ctx.body = '404'
    }
})
// router.post('/pushcode',ctx => {
//     console.log(ctx)
//     ctx.status = 200
//     ctx.body = 'success'
// })
app.use(router.routes).use(router.allowedMethods())
app.listen(port, () => {
    console.log(`app runing at 127.0.0.1:${port}`);
})