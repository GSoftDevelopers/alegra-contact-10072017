var btn_new_contact;

Ext.define('Alegra.controller.Home', {
    extend: 'Ext.app.Controller',

    init: function() {
    },

    index: function() {
      app.debug = true;
      app.star("Cargando datos...");
      app.api(
          {},
          app.config.ROOT + app.contact.GET,
          "GET"
      ).success(function(msg){
        app.end();
        app.createTableContact(msg);
        app.log(msg);

      }).error(function(msg){
      });
    }
});
