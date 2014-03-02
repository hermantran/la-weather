define([
  'jquery',
  'collections/hourlyForecasts',
  'views/hourlyForecasts'
], function($, HourlyForecastCollection, HourlyForecastListView) {
  var App = {
    initialize: function() {
      var $container = $('.controls'),
          hourlyForecastCollection = new HourlyForecastCollection({ url: 'data/hourly.json' }),
          hourlyForecastListView = new HourlyForecastListView({ el: $container, collection: hourlyForecastCollection });
      
      hourlyForecastCollection.fetch({ 
        success: function() { 
          hourlyForecastListView.changeActive();  
        }
      });
      $container.append(hourlyForecastListView.el);
    }
  };
  
  return App;
});