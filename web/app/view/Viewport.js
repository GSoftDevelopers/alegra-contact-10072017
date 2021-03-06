var headerTpl = new Ext.XTemplate(
    '<div id="main-nav" class="navbar navbar-inverse navbar-fixed-top">',
      '<div class="nav-top">',
        '<div class="container">',
          '<div class="navbar-header">',
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">',
              '<span class="icon-bar"></span>',
              '<span class="icon-bar"></span>',
              '<span class="icon-bar"></span>',
            '</button>',

            '<a class="navbar-brand" href="#">',
              '<img src="app/assets/img/logo.png" alt="">',
            '</a>',
            '<a id="change-logo-link" class="change-logo" href="/company/edit"><span class="label label-info" style="font-weight: 200;">Utilizar mi logo</span></a>',
          '</div>',
          '<div class="navbar-collapse collapse navbar-right">',
            '<ul class="nav navbar-nav">',
              '<form class="navbar-form navbar-left">',
                '<div class="form-group">',
                  '<input type="text" class="form-control" placeholder="Buscar...">',
                '</div>',
              '</form>',

              '<li>',
                '<a href="#">',
                  '<span class="glyphicon glyphicon-info-sign" aria-hidden="true" style="margin-right: 3px;"></span>',
                  'Ayuda',
                '</a>',
              '</li>',
              '<li>',
                '<a href="#">',
                  '<span class="glyphicon glyphicon-headphones" aria-hidden="true" style="margin-right: 3px;"></span>',
                  'Soporte',
                '</a>',
              '</li>',
              '<li>',
                '<a href="#">',
                  '<span class="glyphicon glyphicon-cog" aria-hidden="true" style="margin-right: 3px;"></span>',
                  'Configuración',
                '</a>',
              '</li>',
              '<li>',
                '<a href="#">',
                  '<span class="glyphicon glyphicon-log-out" aria-hidden="true" style="margin-right: 3px;"></span>',
                  'Salir',
                '</a>',
              '</li>',
            '</ul>',

          '</div>',
        '</div>',
      '</div>',

      '<div class="nav-menu clearfix">',
        '<div class="container">',
          '<ul>',
              '<li>',
                '<a href="index.html">Inicio</a>',
              '</li>',
              '<li class="submenu">',
                '<a href="#" class="sf-with-ul">Ingresos</a>',
                '<ul style="display: none;">',
                    '<li><a href="#">Facturas de ventas</a></li>',
                    '<li><a href="#">Facturas recurrentes</a></li>',
                    '<li><a href="#">Pagos recibidos</a></li>',
                    '<li><a href="#">Notas crédito</a></li>',
                    '<li><a href="#">Cotizaciones</a></li>',
                    '<li><a href="#">Remisiones</a></li>',
                    '<li><a href="#">POS</a></li>',
                '</ul>',
              '</li>',
              '<li class="submenu">',
                '<a href="#" class="sf-with-ul">Gastos</a>',
                '<ul style="display: none;">',
                    '<li><a href="#">Pagos</a></li>',
                    '<li><a href="#">Facturas de proveedores</a></li>',
                    '<li><a href="#">Pagos recurrentes</a></li>',
                    '<li><a href="#">Notas débitos</a></li>',
                    '<li><a href="#">Órdenes de compa</a></li>',
                '</ul>',
              '</li>',
              '<li class="active">',
                '<a href="#" class="sf-with-ul">Contactos</a>',
              '</li>',
              '<li class="submenu">',
                '<a href="#" class="sf-with-ul">Inventario</a>',
                '<ul class="menu-right-position" style="display: none;">',
                    '<li><a href="#">Items de venta</a></li>',
                    '<li><a href="#">Valor de inventario</a></li>',
                    '<li><a href="#">Ajustes a inventario</a></li>',
                    '<li><a href="#">Gestión de items</a></li>',
                    '<li><a href="#">Listas de precios</a></li>',
                    '<li><a href="#">Bodegas</a></li>',
                '</ul>',
              '</li>',
              '<li>',
                '<a href="#" class="sf-with-ul">Bancos</a>',
              '</li>',
              '<li class="submenu">',
                '<a href="#" class="sf-with-ul">Categorías</a>',
                '<ul class="menu-right-position" style="display: none;">',
                    '<li><a href="#">Categorías</a></li>',
                    '<li><a href="#">Ajustes de categorías</a></li>',
                '</ul>',
              '</li>',
              '<li>',
                '<a href="#" class="sf-with-ul">Reportes</a>',
              '</li>',
          '</ul>',

          '<ul class="navbar-right">',
            '<li class="dropdown">',
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Nuevo <span class="caret"></span></a>',
              '<ul class="dropdown-menu">',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>',
                    ' Ingresos',
                  '</a>',
                '</li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>',
                    ' Gastos',
                  '</a>',
                '</li>',
                '<li role="separator" class="divider"></li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>',
                    ' {Factura de ventas',
                  '</a>',
                '</li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>',
                    ' Remisión',
                  '</a>',
                '</li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-book" aria-hidden="true"></span>',
                    ' Factura de proveedor',
                  '</a>',
                '</li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-book" aria-hidden="true"></span>',
                    ' Orden de compra',
                  '</a>',
                '</li>',
                '<li role="separator" class="divider"></li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-tags" aria-hidden="true"></span>',
                    ' Ítem de venta',
                  '</a>',
                '</li>',
                '<li role="separator" class="divider"></li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-user" aria-hidden="true"></span>',
                    ' Contactos',
                  '</a>',
                '</li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>',
                    ' Cotización',
                  '</a>',
                '</li>',
                '<li role="separator" class="divider"></li>',
                '<li>',
                  '<a href="#">',
                    '<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>',
                    ' Otros',
                  '</a>',
                '</li>',
              '</ul>',
            '</li>',
          '</ul>',
        '</div>',
      '</div>',
    '</div>'
);

var footerTpl = new Ext.XTemplate(

  '<footer>',
      '<div class="footer-bottom">',
          '<div class="container">',
              '<div class="row">',

                  '<div class="col-md-4">',
                      '<h4>',
                        '<span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>',
                        '<strong> Ayudas paso a paso</strong>',
                      '</h4>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo crear una factura de venta',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo crear una factura de proveedor',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo importar contactos',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo crear una cuenta de Banco',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo registrar un pago a una factura de venta',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Cómo crear una nota crédito',
                        '</a>',
                      '</p>',
                  '</div>',

                  '<div class="col-md-4">',
                      '<h4>',
                        '<span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>',
                        '<strong> Soporte</strong>',
                      '</h4>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Contáctanos',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Centro de ayuda',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Manual de primeros',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'pasos en Alegra',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Plan de referidos',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          'Comparte tu historia',
                        '</a>',
                      '</p>',
                  '</div>',

                  '<div class="col-md-4">',
                      '<h4>',
                        '<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>',
                        '<strong> Contactos</strong>',
                      '</h4>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          '¿Cómo crear un Cliente?',
                        '</a>',
                      '</p>',
                      '<p style="margin:0;">',
                        '<a href="#" class="btn btn-link" style="padding: 0;color: #3d4241;">',
                          '¿Cómo importar contactos?',
                        '</a>',
                      '</p>',
                  '</div>',

              '</div>',
          '</div>',
      '</div>',
  '</footer>'

);

Ext.define('Alegra.view.Viewport', {
    renderTo : Ext.getBody(),
    extend   : 'Ext.container.Viewport',
    requires :[
        'Ext.layout.container.Border',
        'Ext.panel.Panel'
    ],

    id     : 'viewport',
    layout : 'border',
    items  : [
      {
        xtype  : 'panel',
        id     : 'nav',
        itemId : 'main-nav-toolbar',
        html   : headerTpl,
        //data   : 'Teams',
        store: 'Users',
        region : 'center',
        layout : 'fit'
      },{
        xtype  : 'container',
        itemId : 'viewport-target',
        region : 'center',
        layout : 'fit'
      },{
        xtype  : 'panel',
        id     : 'footer',
        itemId : 'nav-footer',
        html   : footerTpl,
        cls    : "expand-panel",
        region : 'center',
        layout : 'fit',
        listeners : {
          render : function(){
            //app.setFooterStyle();
          }
        }
      }
    ]
});
