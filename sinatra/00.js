var express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/hello', function(req, res) {
  res.json({a: 1})
})

app.listen(4000)
