// require packages
const express = require("express")
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// route
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  const pageOne = {
    title: 'About',
  }
  res.render('show', { page: pageOne })
})

app.get('/porfolio', (req, res) => {
  const pageTwo = {
    title: 'Porfolio',
  }
  res.render('show', { page: pageTwo })
})

app.get('/contact', (req, res) => {
  const pageThree = {
    title: 'Contact',
  }
  res.render('show', { page: pageThree })
})

// start and listten on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})