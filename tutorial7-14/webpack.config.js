module.exports ={
	entry: [
      './src/App.js'
	],
	outpout:{
		path: __dirname,
		filename: 'app.js'
	},
	module:{
		loader: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	}
};