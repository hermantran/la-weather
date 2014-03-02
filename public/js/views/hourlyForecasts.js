define([
  'backbone',
  'templates',
  'views/hourlyForecast',
  'state'
], function(Backbone, Templates, HourlyForecastView, AppState) {
  'use strict';
  var HourlyForecastListView = Backbone.View.extend({
    template: Templates.hourlyForecastList,
    
    initialize: function() {
      this.activeCounter = 0;
      this.listenTo(this.collection, 'add', this.addOne);
      
      this.render();
    },
    
    render: function() {
      this.$el.html(this.template());
      this.$list = this.$el.find('ul');
    },
    
    events: {
      'click a.prev': 'displayPrev',
      'click a.next': 'displayNext' 
    },
    
    displayPrev: function(e) {
      e.preventDefault();
      
      if (this.activeCounter === 0) {
        return;  
      }
      
      this.activeCounter--;
      this.changeActive(this.collection.at(this.activeCounter + 1));
    },
    
    displayNext: function(e) {
      e.preventDefault();
      
      if (this.activeCounter === this.collection.length - 1) {
        return;  
      }
      
      this.activeCounter++;
      this.changeActive(this.collection.at(this.activeCounter - 1));
    },
    
    changeActive: function(prevActiveForecast) {
      var activeForecast = this.collection.at(this.activeCounter);
      AppState.get('activeForecast').set('isActive', false);
      AppState.set('activeForecast', activeForecast);
      activeForecast.set('isActive', true);  
    },
    
    addOne: function(model) {
      var subView = new HourlyForecastView({ model: model });
      this.$list.append(subView.el);
    }
  });
  
  return HourlyForecastListView;
});