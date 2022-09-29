const express = require('express')
const app = express()
const router = express.Router()
const routes = require('./routes')(router, {});
const port = 3000

app.use('/app-test-1', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port} in app-test-1 v3.0`)
})