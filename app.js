/**
 *Created by Shinelon on 2019/10/21
 */
const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const path = require('path');
const formidable = require('formidable');
const static = require('koa-static');

const bodyParser = require('koa-bodyparser');

const staticPath = './static';



router.get('/', async (ctx) => {
    ctx.body  = 'HeloWorld';
})

router.post('/upload', async(ctx) => {
    const formiable = new formidable.IncomingForm();
    const savePath = './upload/images';
    formiable.uploadDir = savePath;
    formiable.keepExtensions = true;
    formiable.parse(ctx.req, function (err, fields, files) {
        console.log(files);
    })
})  



app.use(static(path.join(__dirname, staticPath)));
app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server is running at port 3000');
})
