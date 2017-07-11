<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Contactos</title>
  <!--<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />-->
  <link rel="shortcut icon" href="app/assets/ico/favicon.ico">

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" type="text/css" href="app/assets/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="app/assets/css/pnotify.custom.min.css">

  <!-- Custom styles for this template -->
  <link rel="stylesheet" type="text/css" href="app/assets/css/sweetalert2.css">
  <link rel="stylesheet" type="text/css" href="app/assets/css/alegra.css">
  <link rel="stylesheet" type="text/css" href="app/assets/css/core.css">

  <script src="app/assets/bootstrap/js/jquery.js"></script>
  <script src="app/assets/js/jquery.blockUI.js"></script>
  <script src="app/assets/js/sweetalert2.min.js"></script>
  <script src="app/assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="app/assets/js/pnotify.custom.min.js"></script>

  <script type="text/javascript" src="ext/ext-all.js"></script>
  <script type="text/javascript" src="bootstrap.js"></script>
  <script src="app/assets/js/jTable.GSoft.js"></script>
  <script src="app/assets/js/alegra.js"></script>
  </head>

  <body>
  </body>

  <!-- Modal AddPersona -->
  <div class="modal fade" id="md_add_persona" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="exampleModalLabel">Asociar persona a este cliente</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="recipient-name" class="control-label">Nombre *</label>
                <input type="text" class="form-control" id="txt_modal_name">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="recipient-name" class="control-label">Apellido</label>
                <input type="text" class="form-control" id="txt_modal_surname">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="recipient-name" class="control-label">Correo electrónico</label>
                <input type="text" class="form-control" id="txt_modal_email">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="recipient-name" class="control-label">Teléfono</label>
                <input type="text" class="form-control" id="txt_modal_phone">
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="recipient-name" class="control-label">Celular</label>
                <input type="text" class="form-control" id="txt_modal_movil">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <label class="checkbox-inline left">
            <input type="checkbox" id="ch_notif"> Enviar notificaciones
            <a class="btn btn-success btn-xs" data-toggle="tooltip" data-placement="top"
            title="Marque esta opción cuando necesite que esta persona reciba correos con alertas sobre facturas disponibles y/o vencidas" style="margin-left: 10px;">?</a>
          </label>

          <a href="javascript:" class="btn btn-default" data-dismiss="modal">Cerrar</a>
          <a id="btn_asociar" href="javascript:" class="btn btn-primary">Asociar</a>
        </div>
      </div>
    </div>
  </div>
</html>
