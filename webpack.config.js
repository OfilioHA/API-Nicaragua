import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';
import dotenv from 'dotenv';
dotenv.config();

export default {
  mode: process.env.MODE,
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new NodemonPlugin()
  ]
};