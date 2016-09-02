const path = require('path');
const express = require('express');
const webpack = require('webpack');
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? require('./webpack.config.prod') : require('./webpack.config.dev');
const compiler = webpack(config);
const port = isProduction ? process.env.PORT : 3000;

if(!isProduction){
	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));
} else {
	const child_process = require('child_process');
	child_process.exec("webpack -p --config webpack.config.prod", function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error) { console.log('exec error: ' + error); }
		app.use(express.static(config.output.publicPath));
	});
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  isProduction ? console.info("==> 🌎  Application up and running", port) : console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});
