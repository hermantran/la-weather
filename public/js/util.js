define([
], function() {
  'use strict';
  var Util = {},
      icons = {
        '01n': 'B', // sky is clear
        '02n': 'H', // few clouds
        '03n': 'N', // scattered clouds
        '04n': 'Y', // broken clouds
        '09n': 'Q', // shower rain
        '10n': 'R', // rain
        '11n': 'P', // thunderstorm
        '13n': 'U', // snow
        '50n': 'L', // mist
        '01d': 'B', // sky is clear
        '02d': 'H', // few clouds
        '03d': 'N', // scattered clouds
        '04d': 'Y', // broken clouds
        '09d': 'Q', // shower rain
        '10d': 'R', // rain
        '11d': 'P', // thunderstorm
        '13d': 'U', // snow
        '50d': 'L', // mist
      };
  
  Util.mapIcon = function(icon) {
    return icons[icon];  
  };
  
  return Util;
});