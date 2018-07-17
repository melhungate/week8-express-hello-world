const express = require('express')
const app = express()
const path = require('path');

app.use('/', express.static('public'))


app.get('*', (req, res) => {
  res.send('404 File not Found!!!!');
})

app.listen(3000, () => {
  console.log('Hello World listening on port 3000.')
})