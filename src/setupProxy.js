const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('mobile-api/', {
			target: 'https://lab.rxhealthbeta.com/jimmy/medicourier/',
			changeOrigin: true,
		})
	);
};
