define([
  'backbone',
  'models/forecast'
], function(Backbone, ForecastModel) {
  var HourlyForecastCollection = Backbone.Collection.extend({
    model: ForecastModel,
    
    initialize: function(attrs) {
      this.url = attrs.url;
    },
    
    parse: function(response) {
      return response.list; 
    }
  });
  
  return HourlyForecastCollection;
});