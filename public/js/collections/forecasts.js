define([
  'backbone',
  'models/forecast'
], function(Backbone, ForecastModel) {
  var ForecastsCollection = Backbone.Collection.extend({
    model: ForecastModel,
    
    initialize: function(attrs) {
      this.url = attrs.url;
    },
    
    parse: function(response) {
      return response.list; 
    }
  });
  
  return ForecastsCollection;
});