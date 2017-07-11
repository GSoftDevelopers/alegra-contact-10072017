/*
 * Dev: Luis Manuel Larrea
 */
var app = new alegra();
function alegra(){}
/** ****************  Variables globales  ********************* **/

alegra.prototype.mPersonas = [];
alegra.prototype.debug     = false;

/** ****************  Cargar documento  *********************** **/
Ext.onReady(function() {
  app.setFooterStyle();
  window.onresize = app.setFooterStyle;
  $('[data-toggle="tooltip"]').tooltip()
  $('ul li.submenu:has(ul)').hover(
      function(e){
         $(this).find('ul').css({display: "block"});
      },
      function(e){
         $(this).find('ul').css({display: "none"});
      }
   );
});
/** ****************  Clase de Alegra  *********************** **/

alegra.prototype.api = function(data,url,tp){
  return $.ajax({
    type: tp,
     dataType: "json",
    // headers: {
    //     'Content-Type': 'application/json; charset=UTF-8'
    // },
    data: data ,
    url : url,
    success: function (msg) {
        return msg;
    },
    error: function (msg) {
    }
  });
}

alegra.prototype.setFooterStyle = function(){
  var docHeight = $(window).height();
  var footerHeight = $('#footer').outerHeight();
  var footerTop = $('#footer').offset().top + footerHeight;
  if (footerTop < docHeight) {
      $('#footer').css('margin-top', (docHeight - footerTop) + 'px');
  } else {
      $('#footer').css('margin-top', '');
  }
  $('#footer').removeClass('invisible');
}

alegra.prototype.checkEmail = function(_txt){
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(_txt);
}

alegra.prototype.log = function(_txt){
  if (app.debug) {
    console.log(_txt);
  }
}

alegra.prototype.cache=function(event,key,value){
    if(event=='set'){
        localStorage.setItem(key, value);
    }else{
        if(event=='get'){
            return localStorage.getItem(key);
        }else{
            if(event=='remove'){
                localStorage.removeItem(key);
            }
        }
    }
}

alegra.prototype.star = function(_txt){
    $.blockUI({
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            'border-radius': '5px',
            '-webkit-border-radius': '5px',
            '-moz-border-radius': '5px',
            opacity: .7,
            color: '#fff'
        },
        message: _txt,
        fadeIn: 700,
        fadeOut: 700
    });
}

alegra.prototype.end = function(){
    $.unblockUI();
}

alegra.prototype.createTableContact = function(_param){
  $("#table-contacts").grid(_param, {
      td : "center",
      clss : "table table-striped",
      header : [
        "Nombre",
        "Identificación",
        "Teléfono 1",
        "Observaciones"
      ],
      dataColumn : [
        "name",
        "identification",
        "phonePrimary",
        "observations"
      ],
      lower : {
        active : true,
        number : 50
      },
      btn_view : {
        visible : true,
        key : ["id"],
        txt : "Visualizar",
        action_btn : function(){
          var id = "#"+$(this).parent().parent().attr("id");
          app.cache("set","idContact",$(this).data("id"));
          Ext.ux.Router.redirect('#users');
        }
      },
      btn_edit : {
        visible : true,
        key : ["id"],
        txt : "Editar",
        action_btn : function(){
          var id = "#"+$(this).parent().parent().attr("id");
          app.cache("set","idContact",$(this).data("id"));
          Ext.ux.Router.redirect('#edit');
        }
      },
      btn_delete : {
        visible : true,
        key : ["id"],
        txt : "Eliminar",
        action_btn : function(){
          var id = "#"+$(this).parent().parent().attr("id");
          var tr = $(this);
          swal({
             title: "Eliminar cliente",
             text: "¿Estás seguro de que deseas eliminar el cliente? Esta operación no se puede deshacer.",
             type: "warning",
             showCancelButton: true,
             confirmButtonColor: "#5cb85c",
             confirmButtonText: "SI",
             cancelButtonText: "NO",
             closeOnConfirm: true,
             closeOnCancel: true },
          function(isConfirm){
             if(isConfirm){

              app.star("Eliminando cliente...");
              var _data = {
                '_method' : 'delete',
                'id'      : tr.data("id")
              }
               app.api(
                   _data,
                   app.config.ROOT + app.contact.DELETE,
                   "POST"
               ).success(function(msg){
                 app.end();
                 app.log(msg)

                 new PNotify({
                     title: 'Operación exitosa',
                     text: "El cliente fue eliminado correctamente.",
                     type: 'success',
                     styling: 'bootstrap3'
                 });

                 $(id).remove();
                 app.log(msg);

               }).error(function(msg){
                 app.log(msg)
                 app.end();
                 new PNotify({
                     title: 'Error',
                     text: "Ocurrio un error inesperado, intente nuevamente.",
                     type: 'error',
                     styling: 'bootstrap3'
                 });
               });

             }
          });

        }
      }
    }
  );
}

alegra.prototype.createTablePersonas = function(_param){
  if($("#tbl-add-personas tbody tr").length==0){
    $("#tbl-add-personas").grid(_param, {
        td : "center",
        clss : "table table-bordered",
        header : [
          "Nombre",
          "Apellido",
          "Correo electrónico",
          "Telefono",
          "Celular",
          "Recibir notificaciones",
        ],
        dataColumn : [
          "name",
          "lastName",
          "email",
          "phone",
          "mobile",
          "sendNotifications"
        ],
        lower : {
          active : true,
          number : 50
        },
        btn_delete : {
          visible : true,
          key : ["id"],
          txt : "Eliminar",
          action_btn : function(){
            var id = "#"+$(this).parent().parent().attr("id");

            $(id).remove();
            _param.splice($(id).data("flb"), 1);

          }
        }
      }
    );
  }else{
    $("#tbl-add-personas").addRow(_param, {
        clss : "table table-striped responsive-utilities jambo_table bulk_action",
        header : [
          "Nombre",
          "Apellido",
          "Correo electrónico",
          "Telefono",
          "Celular",
          "Recibir notificaciones",
        ],
        dataColumn : [
          "name",
          "lastName",
          "email",
          "phone",
          "mobile",
          "sendNotifications"
        ],
        lower : {
          active : true,
          number : 50
        },
        btn_delete : {
          visible : true,
          key : ["code"],
          txt : "Eliminar",
          action_btn : function(){
            var id = "#"+$(this).parent().parent().attr("id");

            $(id).remove();
            _param.splice($(id).data("flb"), 1);

          }
        }
      }
    );
  }
}

alegra.prototype.createTableListAsociados = function(_param){
  $("#tbl-person-aso").grid(_param, {
      td : "center",
      clss : "table table-bordered responsive-utilities",
      header : [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Telefono",
        "Celular",
        "Notificaciones",
      ],
      dataColumn : [
        "name",
        "lastName",
        "email",
        "phone",
        "mobile",
        "sendNotifications"
      ],
      lower : {
        active : true,
        number : 50
      }
    }
  );
}

alegra.prototype.newContact = function(_name, _dni, _email, _phone1, _phone2, _fax, _movil, _obs,
                                      _type, _address, _seller, _term, _prices, _personas, _ops){
    app.star("Registrando datos...");
    var _data = {
        "_method"          : "new",
        "name"             : _name,
        "identification"   : _dni,
        "email"            : _email,
        "phonePrimary"     : _phone1,
        "phoneSecondary"   : _phone2,
        "fax"              : _fax,
        "mobile"           : _movil,
        "observations"     : _obs,
        "type"             : _type,
        "address"          : _address,
        "seller"           : _seller,
        "term"             : _term,
        "priceList"        : _prices,
        "internalContacts" : _personas
    }

    app.api(
        _data,
        app.config.ROOT + app.contact.NEW,
        "POST"
    ).success(function(msg){
      app.end();
      app.log(msg)

      new PNotify({
          title: 'Operación exitosa',
          text: "El cliente fue creado correctamente.",
          type: 'success',
          styling: 'bootstrap3'
      });

      $("#txt_name").val('');
      $("#txt_dni").val('');
      $("#txt_email").val('');
      $("#txt_phone_one").val('');
      $("#txt_phone_two").val('');
      $("#txt_fax").val('');
      $("#txt_movil").val('');
      $("#txt_obs").val('');
      $("#txt_dir").val('');
      $("#txt_city").val('');
      $('#ch_client').attr('checked', false);
      $('#ch_prov').attr('checked', false);
      $('#txt_in_state').attr('checked', false);
      $("#tbl-add-personas").empty();
      app.mPersonas = [];
      if(!_ops=='save'){
        Ext.ux.Router.redirect('#');
      }

    }).error(function(msg){
      app.log(msg)
      app.end();
      new PNotify({
          title: 'Error',
          text: "Ocurrio un error inesperado, intente nuevamente.",
          type: 'error',
          styling: 'bootstrap3'
      });
    });
}

alegra.prototype.updateContact = function(_name, _dni, _email, _phone1, _phone2, _fax, _movil, _obs,
                                      _type, _address, _seller, _term, _prices, _personas){
    app.star("Actualizando datos...");
    var _data = {
        "id"               : app.cache("get", "idContact"),
        "_method"          : "put",
        "name"             : _name,
        "identification"   : _dni,
        "email"            : _email,
        "phonePrimary"     : _phone1,
        "phoneSecondary"   : _phone2,
        "fax"              : _fax,
        "mobile"           : _movil,
        "observations"     : _obs,
        "type"             : _type,
        "address"          : _address,
        "seller"           : _seller,
        "term"             : _term,
        "priceList"        : _prices,
        "internalContacts" : _personas
    }

    app.api(
        _data,
        app.config.ROOT + app.contact.UPDATE,
        "POST"
    ).success(function(msg){
      app.end();
      app.log(msg)

      new PNotify({
          title: 'Operación exitosa',
          text: "El cliente se actualizo correctamente.",
          type: 'success',
          styling: 'bootstrap3'
      });

      $("#txt_name").val('');
      $("#txt_dni").val('');
      $("#txt_email").val('');
      $("#txt_phone_one").val('');
      $("#txt_phone_two").val('');
      $("#txt_fax").val('');
      $("#txt_movil").val('');
      $("#txt_obs").val('');
      $("#txt_dir").val('');
      $("#txt_city").val('');
      $('#ch_client').attr('checked', false);
      $('#ch_prov').attr('checked', false);
      $('#txt_in_state').attr('checked', false);
      $("#tbl-add-personas").empty();
      app.mPersonas = [];
      Ext.ux.Router.redirect('#');

    }).error(function(msg){
      app.log(msg)
      app.end();
      new PNotify({
          title: 'Error',
          text: "Ocurrio un error inesperado, intente nuevamente.",
          type: 'error',
          styling: 'bootstrap3'
      });
    });
}
/** ****************  Strings de Alegra  *********************** **/

alegra.prototype.config={
    // ROOT: 'http://localhost/rest/',
    ROOT: 'https://api-alegra.herokuapp.com/',
    V_APP: '1.0'
}
alegra.prototype.contact={
    GET     : 'contact/',
    DELETE  : 'contact/',
    NEW     : 'contact/',
    UPDATE  : 'contact/'
}
