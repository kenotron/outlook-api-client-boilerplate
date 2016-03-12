//******************************************************************************
//* GULP OPTIONS
//******************************************************************************
var path = require('path');
var appRoot = 'src/';

module.exports = {
  root: appRoot,
  source: [appRoot + 'server/**/*.ts'],
  fake: 'test/fake/**/*.ts',
  test: 'test/**/*.ts',
  output: 'dist/',
  nodeModulesPath: path.resolve(__dirname + "../../node_modules")	
};