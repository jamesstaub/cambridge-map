'use strict';
var domData = {};
function main() {

  cartodb.createVis('map', 'https://jamesstaub.cartodb.com/api/v2/viz/c48060d2-b1ee-11e5-87a7-0e787de82d45/viz.json', {
      shareable: true,
      title: true,
      description: true,
      search: true,
      tiles_loader: true,
      center_lat: 42.38,
      center_lon: -71.12,
      zoom: 13
    })
    .done(function(vis, layers) {
      // layer 0 is the base layer, layer 1 is cartodb layer
      // setInteraction is disabled by default
      layers[1].setInteraction(true);
      layers[1].on('featureOver', function(e, latlng, pos, data) {
        cartodb.log.log(e, latlng, pos, data);

      });
      // torque layer
      layers[2].on('change:time', function(changes) {
        domData.year = changes.time.getUTCFullYear();
        $('.year').text(domData.year);
        // if (changes.step === layers[2].provider.getSteps() - 1) {
        //   layers[2].pause();
        // }
      });
      // you can get the native map to work with it
      var map = vis.getNativeMap();
      // now, perform any operations you need
      // map.setZoom(3);
      map.panTo([42.375, -71.13,]);
    })
    .error(function(err) {
      console.log(err);
    });
}
window.onload = main;


$( document ).ready(function() {
  // console.log($('div.cartodb-timeslider p').text());
  
});
  