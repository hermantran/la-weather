define([
  'backbone',
  'templates',
  'moment',
  'util'
], function(Backbone, Templates, moment, Util) {
  'use strict';
  var HourlyForecastView = Backbone.View.extend({
    tagName: 'li',
    className: 'forecastBox hide',
    changeClass: 'hide',
    template: Templates.hourlyForecast,
    
    initialize: function() {
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'change:isActive', this.changeDisplay);
      this.render();
    },
    
    changeDisplay: function() {
      if (this.model.get('isActive')) {
        this.$el.removeClass(this.changeClass);  
      } else {
        this.$el.addClass(this.changeClass);  
      }
    },

    render: function() {
      this.model.set('dt', moment(this.model.get('dt_txt')).calendar());
      this.model.get('weather')[0].icon = Util.mapIcon(this.model.get('weather')[0].icon);
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  
  return HourlyForecastView;
});