module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello from app-test-1!");
  });

  app.get("/test", (req, res) => {
    res.send("Testing routes app-test-1!");
  });

  return app;
};
