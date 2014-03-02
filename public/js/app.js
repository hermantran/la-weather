define([
  'jquery',
  'collections/forecasts',
  'views/forecasts'
], function($, ForecastsCollection, ForecastsView) {
  var App = {
    initialize: function() {
      var $container = $('.controls'),
          forecastsCollection = new ForecastsCollection({ url: 'data/hourly.json' }),
          forecastsView = new ForecastsView({ el: $container, collection: forecastsCollection });
      
      forecastsCollection.fetch();
      $container.append(forecastsView.el);
    }
  };
  
  return App;
});