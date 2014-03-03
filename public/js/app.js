define([
  'jquery',
  'moment',
  'plax',
  'collections/hourlyForecasts',
  'views/hourlyForecasts',
  'views/background',
  'views/clouds',
  'views/rain'
], function($, moment, plax, HourlyForecastCollection, HourlyForecastListView, BackgroundView, CloudsView, RainView) {
  'use strict';
  var App = {
    initialize: function() {
      var $day = $('.day'),
          $container = $('.controls'),
          $background = $('.sky'),
          $clouds = $('.clouds'),
          $rain = $('.rain'),
          hourlyForecastCollection = new HourlyForecastCollection({ url: 'data/hourly.json' }),
          hourlyForecastListView = new HourlyForecastListView({ el: $container, collection: hourlyForecastCollection }),
          backgroundView = new BackgroundView({ el: $background }),
          cloudsView = new CloudsView({ el: $clouds }),
          rainView = new RainView({ el: $rain });
      
      //$clouds.plaxify({"xRange":0,"yRange":10});
      //$.plax.enable();
      
      hourlyForecastCollection.fetch({ 
        success: function() { 
          hourlyForecastListView.changeActive();  
        }
      });
    }
  };
  
  return App;
});