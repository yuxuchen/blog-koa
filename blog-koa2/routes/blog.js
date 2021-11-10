const router = require('koa-router')()
const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
    let author = ctx.query.author || ''
    const keyword = ctx.query.keyword || ''

    if(ctx.query.isadmin){
      console.log('is admin')
      if(ctx.session.username == null){
        console.error('is admin, but no login')
        ctx.body = new ErrorModel('not login')
        return
      }
      author = ctx.session.username
    }
    const listData = await getList(author, keyword)
    ctx.body = new SuccessModel(listData)
})
router.get('/detail', async function(ctx, next){
  const data = await getDetail(ctx.query.id)
  ctx.body = new SuccessModel(data)
})

router.post('/new', async function(ctx, next){
  const body = ctx.request.body
  body.author = ctx.session.username
  const data = await newBlog(body)
  ctx.body = new SuccessModel(data)
})

router.post('/update', loginCheck, (req, res, next) =>{

})
router.post('/del', loginCheck, (req, res, next) =>{

})

module.exports = router
