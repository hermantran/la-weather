require.config({
  baseUrl: 'js/',
  
  paths: {
    jquery: 'lib/jquery-1.11.0.min'  
  },
  
  urlArgs: 'bust=' + new Date().getTime()
});

require([
  'jquery'
], function($) {
  'use strict';
  console.log($);
});