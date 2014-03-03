define([
  'backbone',
  'state',
  'templates'
], function(Backbone, AppState, Templates) {
  'use strict';
  var RainView = Backbone.View.extend({
    template: Templates.particle,
    currentCount: 0,
    fadeSpeed: 2000,
    
    initialize: function() {
      this.listenTo(AppState, 'change:activeForecast', this.render);
    },

    render: function() {
      var rainCount = AppState.get('activeForecast').get('rain')['3h'] * 100,
          html = '',
          deferred,
          $removed;
      
      rainCount = rainCount > 1000 ? 1000 : rainCount;
      
      if (rainCount > this.currentCount) {
        for (var i = 0; i < rainCount; ++i) {
          html += this.template({ 
            top: (Math.random() > 0.5 ? '-' : '') + Math.round(Math.random() * 100) + '%', 
            left: Math.round(Math.random() * 100) + '%'
          });
        }
        
        this.el.innerHTML += html;
        this.$el.children().fadeIn(this.fadeSpeed);
        
      } else {
        $removed = this.$el.children().slice(0, Math.round(this.currentCount - rainCount));
        deferred = $removed.fadeOut(this.fadeSpeed);
        $.when(deferred).done(function() {
          $removed.remove();
        });
      }
      
      this.currentCount = rainCount;
      return this;
    }
  });
  
  return RainView;
});