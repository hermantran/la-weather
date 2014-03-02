define([
  'backbone'
], function(Backbone) {
  'use strict';
  var ForecastModel = Backbone.Model.extend({
    parse: function(response) {
      response.isActive = false;
      response.main.temp = Math.round(response.main.temp);
      
      return response;
    }
  });
  
  return ForecastModel;
});