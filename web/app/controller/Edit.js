Ext.define('Alegra.controller.Edit', {
    extend: 'Ext.app.Controller',
    init: function(){},
    index: function() {
      app.debug = true;

      Ext.onReady(function() {
        var mNotif      = "";
        var btn_asociar = document.getElementById("btn_asociar");

        btn_asociar.addEventListener("click", function(){
          if ($("#txt_modal_name").val() == '') {
            new PNotify({
                title: 'Denegado!',
                text: "El campo de nombre no puede quedar vacio",
                type: 'notice',
                styling: 'bootstrap3'
            });
          }else{
            if ($('#ch_notif').is(":checked")){
              mNotif = true;
            }else{
              mNotif = false;
            }

            var params = {
               "name"              : $("#txt_modal_name").val(),
               "lastName"          : $("#txt_modal_surname").val(),
               "email"             : $("#txt_modal_email").val(),
               "phone"             : $("#txt_modal_phone").val(),
               "mobile"            : $("#txt_modal_movil").val(),
               "sendNotifications" : mNotif
            };

            app.mPersonas.push(params);
            app.createTablePersonas(app.mPersonas);
            $('#md_add_persona').modal("hide");
            app.log(app.mPersonas);

          }
        });
      });

    }
});
