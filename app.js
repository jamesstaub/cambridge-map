      function main() {
        cartodb.createVis('map', 'https://jamesstaub.cartodb.com/api/v2/viz/daabe572-b1e2-11e5-9da5-0ea31932ec1d/viz.json', {
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
            // you can get the native map to work with it
            var map = vis.getNativeMap();
            // now, perform any operations you need
            // map.setZoom(3);
            // map.panTo([50.5, 30.5]);
          })
          .error(function(err) {
            console.log(err);
          });
      }
      window.onload = main;