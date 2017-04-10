var express =  require('express')
var app = express()
app.set('view engine', 'hbs')
const port = process.env.PORT || 3000

const result = []

app.use(express.static('public'))

app.get('/',(req, res) => {

  res.render('index')
})

app.get('/forms', (req, res) => {
  res.render('forms')
})

app.get('/thoughtLocation', (req, res) => {
  console.log('hey')
  result.push(req.query)
  res.render('output', {result});

});

app.listen(port, function(){
  console.log('Listening on 3000');
})
