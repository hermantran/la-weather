define([
  'underscore'
], function(_) {
  'use strict';
  var Templates = {};
  
  Templates.forecast = [
    '<h3><%= dt %></h3>',
    '<span class="temperature"><%= main.temp %></span>&deg;F <br>',
    '<%= weather[0].main %> <br>',
    '<%= weather[0].description %>',
    '<ul class="other-info">',
      '<li>Temp Max: <%= main.temp_max %>&deg;</li>',
      '<li>Temp Min: <%= main.temp_min %>&deg;</li>',
      '<li>Humidity: <%= main.humidity %>% </li>',
      '<li>Wind: <%= wind.speed %> m/s </li>',
    '</ul>'
  ];
  
  Templates.forecastList = [
    '<div>',
      '<a href="#" class="button prev">Prev</a>',
      '<a href="#" class="button next">Next</a>',
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