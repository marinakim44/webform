const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/allinputs", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  ),
    app.use(
      createProxyMiddleware("/allinputs", {
        target: "https://yourapp.herokuapp.com",
        changeOrigin: true,
      })
    );
};
