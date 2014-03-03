define([
  'backbone',
  'state',
  'templates'
], function(Backbone, AppState, Templates) {
  'use strict'; 
  var CloudsView = Backbone.View.extend({
    template: Templates.cloud,
    currentCount: 0,
    fadeSpeed: 3000,
    
    initialize: function() {
      this.listenTo(AppState, 'change:activeForecast', this.render);
    },

    render: function() {
      var cloudCount = AppState.get('activeForecast').get('clouds').all / 3,
          time = moment(AppState.get('activeForecast').get('dt_txt')).format('H'),
          html = '',
          deferred,
          $removed;
      
      if (cloudCount > this.currentCount) {
        for (var i = this.currentCount; i < cloudCount; ++i) {
          html += this.template({ 
            icon: Math.random() > 0.5 ? 'one' : 'two',
            size: Math.round(Math.random() * 150), 
            top: Math.round(Math.random() * 100) + '%', 
            left: Math.round(Math.random() * 250) + '%'
          });
        }
        
        this.el.innerHTML += html;
        this.$el.children().fadeIn(this.fadeSpeed);
        
      } else {
        $removed = this.$el.children().slice(0, Math.round(this.currentCount - cloudCount));
        deferred = $removed.fadeOut(this.fadeSpeed);
        $.when(deferred).done(function() {
          $removed.remove();
        });
      }
      
      if (time > 15 || time < 6) {
        this.$el.children().addClass('dark');
      } else {
        this.$el.children().removeClass('dark');  
      }
      
      this.currentCount = cloudCount;
      return this;
    }
  });
  
  return CloudsView;
});