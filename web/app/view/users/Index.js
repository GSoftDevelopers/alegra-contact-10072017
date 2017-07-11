Ext.define('Alegra.view.users.Index', {
    extend: 'Ext.form.Panel',
    border: false,
    styleHtmlContent: true,
    autoScroll: true,
    bodyPadding: '0 20 20 20',
    html: [
      '<div class="container">',
        '<h3 id="title_type"> Cargando...</h3>',

        '<div class="panel panel-default" style="margin-top: 10px;">',
          '<div class="panel-body">',

            '<div class="row">',
              '<div class="col-sm-4 col-md-4">',

                '<h1 class="box_title_view">',
                  '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>',
                  '<span class="title_view"> Cargando...</span>',
                '</h1>',

              '</div>',

              '<div class="col-sm-8 col-md-8">',

                '<a href="javascript:" class="btn btn-success mr-t-13" style="margin-right: 10px;">',
                  '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>',
                  ' Crear factura de venta',
                '</a>',

                '<a href="javascript:" class="btn btn-success mr-t-13" style="margin-right: 10px;">',
                  '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>',
                  ' Crear factura de compra',
                '</a>',

                '<a id="btn_edit_contact" href="javascript:" class="btn btn-success mr-t-13" style="margin-right: 10px;">',
                  '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>',
                  ' Editar',
                '</a>',

                '<div class="btn-group">',
                  '<button type="button" class="btn btn-default dropdown-toggle mr-t-13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                    'Mas acciones <span class="caret"></span>',
                  '</button>',
                  '<ul class="dropdown-menu">',
                    '<li><a href="javascript::">Adjuntar archivo</a></li>',
                    '<li><a href="javascript::">Ver estado de cuente del cliente</a></li>',
                  '</ul>',
                '</div>',

              '</div>',

            '</div>',

          '</div>',
        '</div>',

        '<div class="row">',
          '<div class="col-sm-6 col-md-6">',

            '<blockquote>',
              '<p>Datos generales	</p>',
              '<hr>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Nombre</label>',
                  '<p id="txt_name">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Identificación</label>',
                  '<p id="txt_dni">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Dirección</label>',
                  '<p id="txt_dir">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Ciudad</label>',
                  '<p id="txt_city">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Correo electrónico</label>',
                  '<p id="txt_email">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Vendedor</label>',
                  '<p id="txt_seller">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Teléfono 1</label>',
                  '<p id="txt_phone_1">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Teléfono 2</label>',
                  '<p id="txt_phone_2">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Fax</label>',
                  '<p id="txt_fax">...</p>',
                '</div>',
              '</div>',

              '<div class="col-sm-12 col-md-12">',
                '<div class="form-group">',
                  '<label>Celular</label>',
                  '<p id="txt_movil">...</p>',
                '</div>',
              '</div>',

            '</blockquote>',

          '</div>',

          '<div class="col-sm-6 col-md-6">',

            '<div class="col-sm-12 col-md-12">',

              '<blockquote>',
                '<p>Saldos</p>',
                '<hr>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Por cobrar</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Por cobrar vencido</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Por pagar</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Anticipos recibidos</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Anticipos entregados</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Notas crédito por aplicar</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

                '<div class="col-sm-12 col-md-12">',
                  '<div class="form-group">',
                    '<label>Notas débito por aplicar</label>',
                    '<p>Bs0.00</p>',
                  '</div>',
                '</div>',

              '</blockquote>',

            '</div>',

          '</div>',

        '</div>',

        '<hr>',
        '<table id="tbl-person-aso"></table>',
        '<hr>',

        '<div style="margin-top: 60px;">',

          '<ul class="nav nav-tabs" role="tablist">',
            '<li role="presentation" class="active"><a href="#panel_1" aria-controls="home" role="tab" data-toggle="tab">Transacciones</a></li>',
            '<li role="presentation"><a href="#panel_2" aria-controls="profile" role="tab" data-toggle="tab">Facturas de ventas</a></li>',
            '<li role="presentation"><a href="#panel_3" aria-controls="messages" role="tab" data-toggle="tab">Facturas de compras</a></li>',
            '<li role="presentation"><a href="#panel_4" aria-controls="settings" role="tab" data-toggle="tab">Notas de crédito</a></li>',
            '<li role="presentation"><a href="#panel_5" aria-controls="settings" role="tab" data-toggle="tab">Notas de débito</a></li>',
            '<li role="presentation"><a href="#panel_6" aria-controls="settings" role="tab" data-toggle="tab">Cotizaciones</a></li>',
            '<li role="presentation"><a href="#panel_7" aria-controls="settings" role="tab" data-toggle="tab">Remisiones</a></li>',
            '<li role="presentation"><a href="#panel_8" aria-controls="settings" role="tab" data-toggle="tab">Órdenes de compra</a></li>',
            '<li role="presentation"><a href="#panel_9" aria-controls="settings" role="tab" data-toggle="tab">Ajustes categorías</a></li>',
          '</ul>',

          '<div class="tab-content" style="min-height: 500px;">',
            '<div role="tabpanel" class="tab-pane fade in active" id="panel_1">',

              '<table class="table table-striped">',
                '<thead>',
                  '<tr>',
                  '<th>Fechas</th>',
                  '<th>Estado</th>',
                  '<th>Detalle</th>',
                  '<th>Salidas</th>',
                  '<th>Entradas</th>',
                  '</tr>',
                '</thead>',
                '<tbody>',

                '</tbody>',
              '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_2">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Numero</th>',
                '<th>Cliente</th>',
                '<th>Creación</th>',
                '<th>Vencimiento</th>',
                '<th>Total</th>',
                '<th>Pagado</th>',
                '<th>Por pagar</th>',
                '<th>Estado</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_3">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Factura</th>',
                '<th>Proveedor</th>',
                '<th>Creación</th>',
                '<th>Vencimiento</th>',
                '<th>Total</th>',
                '<th>Pagado</th>',
                '<th>Por pagar</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_4">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Codigo</th>',
                '<th>Cliente</th>',
                '<th>Creación</th>',
                '<th>Total</th>',
                '<th>Por aplicar</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_5">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Codigo</th>',
                '<th>Proveedor</th>',
                '<th>Creación</th>',
                '<th>Total</th>',
                '<th>Por aplicar</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_6">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Codigo</th>',
                '<th>Cliente</th>',
                '<th>Creación</th>',
                '<th>Total</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_7">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Codigo</th>',
                '<th>Cliente</th>',
                '<th>Creación</th>',
                '<th>Vencimiento</th>',
                '<th>Estado</th>',
                '<th>Total</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_8">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Codigo</th>',
                '<th>Cliente</th>',
                '<th>Fecha</th>',
                '<th>Fecha de entrega</th>',
                '<th>Estado</th>',
                '<th>Total</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
            '<div role="tabpanel" class="tab-pane fade" id="panel_9">',

            '<table class="table table-striped responsive-utilities">',
              '<thead>',
                '<tr>',
                '<th>Fechas</th>',
                '<th>Contacto</th>',
                '<th>Referencia</th>',
                '<th>Observaciones</th>',
                '<th>Total</th>',
                '<th>Acciones</th>',
                '</tr>',
              '</thead>',
              '<tbody>',

              '</tbody>',
            '</table>',

            '</div>',
          '</div>',

        '</div>',

        '<div class="well well-lg">',

          '<a id="btn_home" href="javascript:: " class="btn btn-danger">Ir al inicio</a>',

        '</div>',

      '</div>'
     ],
     listeners :{
        render: function(){
          $("#btn_home").click(function(){
            Ext.ux.Router.redirect('#');
          });

          $("#btn_edit_contact").click(function(){
            Ext.ux.Router.redirect('#edit');
          });

          app.star("Cargando datos...");
          app.api(
              {},
              app.config.ROOT + app.contact.GET + '?id=' + app.cache("get", "idContact"),
              "GET"
          ).success(function(msg){
            app.end();
            app.log(msg);
            $(".title_view").text(" "+msg.name);
            $("#txt_name").text(msg.name);
            $("#txt_dni").text(msg.identification);
            $("#txt_dir").text(msg.address.address);
            $("#txt_city").text(msg.address.city);
            $("#txt_email").text(msg.email);
            $("#txt_seller").text(((msg.seller == null) ? "" : msg.seller.name));
            $("#txt_phone_1").text(msg.phonePrimary);
            $("#txt_phone_2").text(msg.phoneSecondary);
            $("#txt_fax").text(msg.fax);
            $("#txt_movil").text(msg.mobile);
            if (msg.internalContacts.length > 0) {
              app.createTableListAsociados(msg.internalContacts);
            }

            if(msg.type.length > 1){
              $("#title_type").text("Cliente y Proveedor");
            }else if(msg.type.length > 0){
              if (msg.type[0] == "client") {
                $("#title_type").text("Cliente");
              }else{
                $("#title_type").text("Proveedor");
              }
            }else{
              $("#title_type").text("");
            }
          }).error(function(msg){
          });

        }
     }
});
