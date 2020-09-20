const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody());

router
    .get('/test', (ctx) => {
        ctx.body = 'test';
    })

app.use(router.routes());
app.listen(3000);