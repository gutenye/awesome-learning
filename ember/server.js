var express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/users', function(req, res) {
  res.json({
    users: [
      {id: 1, name: "Google"},
      {id: 2, name: "Amazon"}
    ],
  })
})

app.get('/users/:id', function(req, res) {
  res.json({
    user: {id: req.params.id, name: "Facebook"}
  })
})

app.listen(4000)
