Ext.define('Alegra.view.home.Index', {
    extend: 'Ext.panel.Panel',
    border: false,
    styleHtmlContent: true,
    autoScroll: true,
    bodyPadding: '0 20 20 20',
    html: [
      '<div class="container">',
        '<div class="row" style="margin-top: 10px;">',
          '<div class="col-sm-6 col-md-6">',
            '<div class="btn-group" data-toggle="buttons">',
              '<label class="btn btn-default active">',
                '<input type="radio" name="options" autocomplete="off" checked> TODOS',
              '</label>',
              '<label class="btn btn-default">',
                '<input type="radio" name="options" autocomplete="off"> CLIENTES',
              '</label>',
              '<label class="btn btn-default">',
                '<input type="radio" name="options" autocomplete="off"> PROVEEDORES',
              '</label>',
            '</div>',
          '</div>',

          '<div class="col-sm-6 col-md-6 inf-conatact">',
            '<span class="label label-success" style="font-weight: 200;">Solicita ayuda al (+1) 305 770 6464</span>',
          '</div>',
        '</div>',

        '<hr>',

        '<div class="panel panel-default">',
          '<div class="panel-body">',

            '<div class="row">',
              '<div class="col-sm-6 col-md-3">',

                '<h1 class="box_title_view">',
                  '<span class="glyphicon glyphicon-inbox" aria-hidden="true"></span>',
                  '<span class="title_view"> Contactos</span>',
                '</h1>',

              '</div>',

              '<div class="col-sm-6 col-md-2">',

                '<a id="btn_new_contact" href="javascript:" class="btn btn-success mr-t-13">',
                  '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>',
                  'Nuevo contacto',
                '</a>',

              '</div>',

              '<div class="col-sm-6 col-md-2">',

                '<a href="#" class="btn btn-link mr-t-13">',
                  'Importar desde excel',
                '</a>',

              '</div>',
            '</div>',

          '</div>',
        '</div>',

        '<table id="table-contacts" class="table table-custom dataTable no-footer">',
        '</table>',
      '</div>'
    ],
    listeners : {
      render: function(){
        var btn_new_contact = document.getElementById("btn_new_contact");
        btn_new_contact.addEventListener("click", function(){
          Ext.ux.Router.redirect('p');
        });
        //app.setFooterStyle();
      }
    }
});
