define([
  'underscore'
], function(_) {
  'use strict';
  var Templates = {};
  
  Templates.forecast = [
    '<h3><%= dt %></h3>',
    '<%= main.temp %> &deg;F'
  ];
  
  Templates.forecastList = [
    '<div>',
      '<a href="#" class="prev">Prev</a>',
      '<a href="#" class="next">Next</a>',
    '</div>',  
    '<ul class="forecastList"></ul>'
  ];
  
  for (var tmpl in Templates) {
    if (Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = _.template(Templates[tmpl].join(''));  
    }
  }
  
  return Templates;
});