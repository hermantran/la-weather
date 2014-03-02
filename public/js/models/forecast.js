define([
  'backbone',
  'moment',
], function(Backbone, moment) {
  'use strict';
  var ForecastModel = Backbone.Model.extend({
    parse: function(response) {
      response.isActive = false;
      response.dt = moment(response.dt_txt).calendar();
      response.main.temp = Math.round(response.main.temp);
      
      return response;
    }
  });
  
  return ForecastModel;
});