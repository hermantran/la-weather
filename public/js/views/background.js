define([
  'backbone',
  'state'
], function(Backbone, AppState) {
  'use strict';
  var classMap = {
    '0': 'midnight',
    '3': 'dawn',
    '6': 'sunrise',
    '9': 'morning',
    '12': 'noon',
    '15': 'afternoon',
    '18': 'sunset',
    '21': 'night'
  };
  
  var BackgroundView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(AppState, 'change:activeForecast', this.render);
      this.render();
    },

    render: function() {
      var time = moment(AppState.get('activeForecast').get('dt_txt')).format('H');
      this.el.className = 'sky ' + classMap[time];
      return this;
    }
  });
  
  return BackgroundView;
});