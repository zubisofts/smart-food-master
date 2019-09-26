const express=require('express')
const path=require('path')
const ejs=require('ejs');
const morgan=require('morgan')
const PORT = process.env.PORT || 6000

var app=new express()

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  app.get('/', (req, res) => res.render('pages/index'))

  app.get('/welcome',(req, res) => {
      return res.render('pages/welcome');
  })

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
