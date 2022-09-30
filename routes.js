const appVersion = require('./package.json').version;

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(`Hello from app-test-1! and running version ${appVersion}`);
  });

  app.get("/test", (req, res) => {
    res.send(`Testing routes app-test-1! and running version ${appVersion}`);
  });

  return app;
};
