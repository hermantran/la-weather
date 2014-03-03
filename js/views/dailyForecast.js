define([
  'backbone',
  'state',
  'moment'
], function(Backbone, AppState, moment) {
  'use strict';
  
  var DailyForecastView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(AppState, 'change:activeForecast', this.render);
      this.render();
    },

    render: function() {
      var date = moment(AppState.get('activeForecast').get('dt_txt')).calendar();
      this.$el.html(date);
      return this;
    }
  });
  
  return DailyForecastView;
});