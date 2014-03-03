define([
  'backbone',
  'models/forecast'
], function(Backbone, ForecastModel) {
  'use strict';
  var AppState = Backbone.Model.extend({
    defaults: {
      'activeForecast': new ForecastModel()
    }
  });
  
  return new AppState();
});