require.config({
  baseUrl: 'js/',
  
  paths: {
    jquery: 'lib/jquery-1.11.0.min',
    backbone: 'lib/backbone-min',
    underscore: 'lib/underscore-min',
    moment: 'lib/moment.min',
    plax: 'lib/plax.min'
  },
  
  shim: {
    plax: {
      deps: ['jquery'],
      exports: '$.fn.plaxify'
    }
  },

  urlArgs: 'bust=' + new Date().getTime()
});

require([
  'app'
], function(App) {
  App.initialize();
});