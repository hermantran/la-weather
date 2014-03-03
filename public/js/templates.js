define([
  'underscore'
], function(_) {
  'use strict';
  var Templates = {};
  
  Templates.hourlyForecast = [
    '<h1><%= dt %></h1>',
    '<span class="temperature"><%= main.temp %></span>',
    '<span class="degrees">&deg;F</span>',
    '<span class="icon" data-icon="<%= weather[0].icon %>"></span> <br>',
    '<%= weather[0].main %> - <%= weather[0].description %> <br>',
    '<ul class="other-info">',
      '<li>Temp Max: <%= main.temp_max %>&deg;</li>',
      '<li>Temp Min: <%= main.temp_min %>&deg;</li>',
      '<li>Humidity: <%= main.humidity %>% </li>',
      '<li>Wind: <%= wind.speed %> m/s </li>',
    '</ul>'
  ];
  
  Templates.cloud = [
    '<span style="width:<%= size %>px; height:<%= size %>px; top: <%= top %>; left: <%= left %>" class="cloud <%= icon %> hide"></span>'
  ];
  
  Templates.hourlyForecastList = [
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