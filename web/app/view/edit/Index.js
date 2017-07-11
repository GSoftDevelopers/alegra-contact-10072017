Ext.define('Alegra.view.edit.Index', {
    extend: 'Ext.form.Panel',
    border: false,
    styleHtmlContent: true,
    autoScroll: true,
    bodyPadding: '0 20 20 20',
    html: [
      '<div class="container">',
        '<div class="panel panel-default" style="margin-top: 10px;">',
          '<div class="panel-body">',

            '<div class="row">',
              '<div class="col-sm-12 col-md-12">',

                '<h1 class="box_title_view">',
                  '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>',
                  '<span class="title_view"> Editar contacto</span>',
                '</h1>',

              '</div>',

            '</div>',

          '</div>',
        '</div>',

        '<div class="row">',
          '<div class="col-sm-6 col-md-6">',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Nombre *</label>',
                '<input type="email" class="form-control" id="txt_name">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Identificación</label>',
                '<input type="email" class="form-control" id="txt_dni">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Dirección</label>',
                '<input type="email" class="form-control" id="txt_dir">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Ciudad</label>',
                '<input type="email" class="form-control" id="txt_city">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Correo electrónico</label>',
                '<input type="email" class="form-control" id="txt_email">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Teléfono 1</label>',
                '<input type="email" class="form-control" id="txt_phone_one">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Teléfono 2</label>',
                '<input type="email" class="form-control" id="txt_phone_two">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Fax</label>',
                '<input type="email" class="form-control" id="txt_fax">',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Celular</label>',
                '<input type="email" class="form-control" id="txt_movil">',
              '</div>',
            '</div>',

          '</div>',

          '<div class="col-sm-6 col-md-6">',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',

                '<div class="row">',

                '<div class="col-sm-11 col-md-11">',
                  '<label>Lista de precios</label>',
                  '<select class="form-control" id="txt_prices">',
                    '<option value="">Ninguna</option>',
                  '</select>',
                '</div>',

                '<div class="col-sm-1 col-md-1" style="padding-left: 0;">',
                  '<a class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Selecciona la lista de precios que deceas asociar a este cliente" style="margin-top: 23px;border-radius: 50%;">?</a>',
                '</div>',

                '</div>',

              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',

                '<div class="row">',

                '<div class="col-sm-11 col-md-11">',
                  '<label>Vendedor</label>',
                  '<select class="form-control" id="txt_seller">',
                    '<option value="">Ninguno</option>',
                  '</select>',
                '</div>',

                '<div class="col-sm-1 col-md-1" style="padding-left: 0;">',
                  '<a class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Selecciona al vendedor que deceas asociar a este cliente" style="margin-top: 23px;border-radius: 50%;">?</a>',
                '</div>',

                '</div>',

              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Términos de pago</label>',
                '<select class="form-control" id="txt_payment">',
                  '<option value="0">Vencimiento anual</option>',
                  '<option value="1" selected>De contado</option>',
                  '<option value="2">8 días</option>',
                  '<option value="3">15 días</option>',
                  '<option value="4">30 días</option>',
                  '<option value="5">60 días</option>',
                '</select>',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="checkbox">',
                '<label>',
                  '<input type="checkbox" value="" id="ch_client">',
                  'Cliente',
                '</label>',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="checkbox">',
                '<label>',
                  '<input type="checkbox" value="" id="ch_prov">',
                  'Proveedor',
                '</label>',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',
              '<div class="form-group">',
                '<label>Observaciones</label>',
                '<textarea class="form-control" rows="3" id="txt_obs"></textarea>',
              '</div>',
            '</div>',

            '<div class="col-sm-12 col-md-12">',

              '<div class="form-group">',

                '<div class="row">',

                '<div class="col-sm-11 col-md-11">',
                  '<div class="checkbox">',
                    '<label>',
                      '<input type="checkbox" value="" id="txt_in_state">',
                      'Incluir estado de cuenta',
                    '</label>',
                  '</div>',
                '</div>',

                '<div class="col-sm-1 col-md-1" style="padding-left: 0;">',
                  '<a class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Tu cliente recibirá en cada factura su estado de cuenta" style="margin-top: 8px;border-radius: 50%;">?</a>',
                '</div>',

                '</div>',

              '</div>',

            '</div>',


          '</div>',

        '</div>',

        '<div class="panel panel-default" style="margin-top: 10px;">',
          '<div class="panel-body">',

            '<div class="row">',
              '<div class="col-sm-12 col-md-12">',

                '<a id="btn_add_persona" href="javascript:" class="btn btn-success">',
                  '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>',
                  'Asociar persona',
                '</a>',

              '</div>',

              '<div class="col-sm-12 col-md-12">',

                '<table id="tbl-add-personas" style="margin-top: 20px;"></table>',

              '</div>',

            '</div>',

          '</div>',
        '</div>',

        '<div class="well well-lg">',

          '<a id="btn_cancelar" href="javascript:: " class="btn btn-link">Cancelar</a>',
          '<a id="btn_update_contact" href="javascript:: " class="btn btn-primary">Actualizar cliente</a>',

        '</div>',

      '</div>'
     ],
     listeners :{
        render: function(){
          //app.setFooterStyle();
          var mType            = [];
          var mAddress         = {};
          var mTerm            = {};

          app.star("Cargando datos...");
          app.api(
              {},
              app.config.ROOT + app.contact.GET + '?id=' + app.cache("get", "idContact"),
              "GET"
          ).success(function(msg){
            app.end();
            app.log(msg);
            $("#txt_name").val(msg.name);
            $("#txt_dni").val(msg.identification);
            $("#txt_dir").val(msg.address.address);
            $("#txt_city").val(msg.address.city);
            $("#txt_email").val(msg.email);
            // $("#txt_seller").text(((msg.seller == null) ? "" : msg.seller.name));
            $("#txt_phone_one").val(msg.phonePrimary);
            $("#txt_phone_two").val(msg.phoneSecondary);
            $("#txt_fax").val(msg.fax);
            $("#txt_movil").val(msg.mobile);
            $("#txt_obs").val(msg.observations);
            if (msg.internalContacts.length > 0) {
              app.mPersonas = msg.internalContacts;
              app.createTablePersonas(app.mPersonas);
            }

            if(msg.type.length > 1){
              $('#ch_client').attr('checked', true);
              $('#ch_prov').attr('checked', true);
            }else if(msg.type.length > 0){
              if (msg.type[0] == "client") {
                $('#ch_client').attr('checked', true);
              }else{
                $('#ch_prov').attr('checked', true);
              }
            }else{
              $("#title_type").text("");
            }
          }).error(function(msg){
          });

          $("#btn_add_persona").click(function(){
            $('#md_add_persona').modal("show");
          });

          $("#btn_cancelar").click(function(){
            Ext.ux.Router.redirect('#');
          });

          $("#btn_update_contact").click(function(e){
            e.stopPropagation();
            if ($("#txt_name").val()=='') {
              new PNotify({
                  title: 'Denegado!',
                  text: "El campo de nombre no puede quedar vacio",
                  type: 'notice',
                  styling: 'bootstrap3'
              });
            }else{
              mAddress = {
                 "address" : $("#txt_dir").val(),
                 "city"    : $("#txt_city").val()
              };

              if ($('#ch_client').is(":checked")){
                mType.push("client");
              }

              if ($('#ch_prov').is(":checked")){
                mType.push("provider");
              }

              if(!app.checkEmail($("#txt_email").val())) {
                new PNotify({
                    title: 'Denegado!',
                    text: "El formato del correo electrónico no es el correcto.",
                    type: 'notice',
                    styling: 'bootstrap3'
                });
              }else{
                app.updateContact(
                  $("#txt_name").val(),
                  $("#txt_dni").val(),
                  $("#txt_email").val(),
                  $("#txt_phone_one").val(),
                  $("#txt_phone_two").val(),
                  $("#txt_fax").val(),
                  $("#txt_movil").val(),
                  $("#txt_obs").val(),
                  ((mType.length == 0) ? "client" : mType),
                  mAddress,
                  $("#txt_seller").val(),
                  $("#txt_payment").val(),
                  $("#txt_prices").val(),
                  ((app.mPersonas.length == 0) ? "null" : app.mPersonas)
                );
              }
            }
          });

        }
     }
});
