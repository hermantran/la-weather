define([
  'backbone',
  'templates',
  'views/forecast',
  'state'
], function(Backbone, Templates, ForecastView, AppState) {
  'use strict';
  var ForecastListView = Backbone.View.extend({
    template: Templates.forecastList,
    
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
      this.changeActive();
    },
    
    displayNext: function(e) {
      e.preventDefault();
      
      if (this.activeCounter === this.collection.length - 1) {
        return;  
      }
      
      this.activeCounter++;
      this.changeActive();
    },
    
    changeActive: function() {
      var activeForecast = this.collection.at(this.activeCounter);
      AppState.get('activeForecast').set('isActive', false);
      AppState.set('activeForecast', activeForecast);
      activeForecast.set('isActive', true);  
    },
    
    addOne: function(model) {
      var subView = new ForecastView({ model: model });
      this.$list.append(subView.el);
    }
  });
  
  return ForecastListView;
});