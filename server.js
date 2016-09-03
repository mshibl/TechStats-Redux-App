const path = require('path');
const express = require('express');
const webpack = require('webpack');
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction ? require('./webpack.config.prod') : require('./webpack.config.dev');
const compiler = webpack(config);
const port = isProduction ? process.env.PORT : 3000;

if(!isProduction){
	// console.log("here")
	// app.use(require('webpack-dev-middleware')(compiler, {
	//   noInfo: true,
	//   publicPath: config.output.publicPath
	// }));
	
	// app.use(require('webpack-hot-middleware')(compiler));
	console.log(path.join(__dirname, 'index.html'))
	console.log(__dirname + '/index.html')
	app.use(express.static(__dirname));
} else {
	// console.log(path.join(__dirname, 'index.html'))
	// console.log(__dirname + '/index.html')
	// app.use(express.static(__dirname));
}

app.get('*', function(req, res) {
	console.log("requesting index.html")
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  isProduction ? console.info("==> 🌎  Application up and running", port) : console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});
