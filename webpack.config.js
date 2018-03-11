const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    // Archivo que lee webpack para construir el grafo de dependencias
    entry: './src/entry.js',
    // Carpeta donde webpack dejara el codigo generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist') //dist => Distribution
    }

    //Plugins
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          
        })
      ]
    };


