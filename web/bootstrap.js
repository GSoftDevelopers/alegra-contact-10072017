Ext.Loader.setConfig({
   enabled: true,
   paths: {
      'Ext.ux.Router': 'Router.js'
  }
});

Ext.application({
    name: 'Alegra',
    autoCreateViewport: true,

    requires: [
        'Ext.ux.Router',
        'Ext.window.MessageBox'
    ],

    stores: [
        'Users'
    ],

    controllers: [
        'Home',
        'New',
        'Users',
        'Edit'
    ],

    views: [
        'home.Index',
        'new.Index',
        'users.Index',
        'edit.Index'
    ],

    enableRouter: true,

    routes: {
        '/'     : 'home#index',
        'p'     : 'new#index',
        'users' : 'users#index',
        'edit'  : 'edit#index'
    },


    launch: function() {
      Ext.ux.Router.on({
          routemissed: function(token) {
              Ext.Msg.show({
                  title:'Error 404',
                  msg: 'Route not found: ' + token,
                  buttons: Ext.Msg.OK,
                  icon: Ext.Msg.ERROR
              });
          },

          beforedispatch: function(token, match, params) {
              Ext.log('beforedispatch ' + token);
          },

          dispatch: function(token, match, params, controller) {
              var view, viewClass, action,
                  viewport    = Ext.getCmp('viewport'),
                  target      = viewport.down('#viewport-target'),
                  navToolbar  = viewport.down('#main-nav-toolbar');

              action      = Ext.String.capitalize(match.action);
              controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);
              viewClass   = Ext.ClassManager.get('Alegra.view.' + controller + '.' + action);
              app.cache('set', 'controller', controller);

              if (viewClass) {

                  view = Ext.create(viewClass, {
                      border: false
                  });

                  target.removeAll();
                  target.add(view);

                  if (navToolbar.child('#' + controller)) {
                      navToolbar.child('#' + controller).toggle(true);
                  }
              }
          }
      });
    }
});





/*

var myTpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div style="background-color: {color}; margin: 10px;">',
            '<b> Name :</b> {name}<br />',
            '<b> Age :</b> {age}<br />',
            '<b> DOB :</b> {dob}<br />',
            '<b> Cars : </b>',
             '<tpl for="cars">',
                '[{.}]',
                '<tpl if="this.isCamry(values)">',
                  '<b> (same car)</b>',
                '</tpl>',
                '{[ (xindex < xcount) ? ", " : "" ]}',
            '</tpl>',
            '<br />',
        '</div>',
     '</tpl>',
    {
       isCamry : function(car) {
           return car === 'Camry';
       }
    }
);


*/
