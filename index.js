const express = require('express')
const app = express()
const router = express.Router()
const routes = require('./routes')(router, {});
const appVersion = require('./package.json').version;
const port = 3000

app.use('/app-test-1', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port} and running version ${appVersion}`);
})