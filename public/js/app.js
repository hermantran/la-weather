define([
  'jquery',
  'moment',
  'collections/hourlyForecasts',
  'views/hourlyForecasts',
  'views/background',
  'views/clouds'
], function($, moment, HourlyForecastCollection, HourlyForecastListView, BackgroundView, CloudsView) {
  var App = {
    initialize: function() {
      var $day = $('.day'),
          $container = $('.controls'),
          $background = $('.sky'),
          $clouds = $('.clouds'),
          hourlyForecastCollection = new HourlyForecastCollection({ url: 'data/hourly.json' }),
          hourlyForecastListView = new HourlyForecastListView({ el: $container, collection: hourlyForecastCollection }),
          backgroundView = new BackgroundView({ el: $background }),
          cloudsView = new CloudsView({ el: $clouds });
      
      hourlyForecastCollection.fetch({ 
        success: function() { 
          hourlyForecastListView.changeActive();  
        }
      });
    }
  };
  
  return App;
});