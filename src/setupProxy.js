// setupProxy.js
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware("/api",{
      target:"https://port-0-ht-test-eu1k2llkqouw2h.sel4.cloudtype.app/",
      changeOrigin:true,
    })
  )
}