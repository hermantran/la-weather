define([
  'backbone'
], function(Backbone) {
  'use strict';
  var ForecastModel = Backbone.Model.extend({
    defaults: {
      isActive: false,
      dt: new Date()
    },
    
    parse: function(response) {
      response.isActive = false;
      response.main.temp = Math.round(response.main.temp);
      
      return response;
    }
  });
  
  return ForecastModel;
});