/*!
 * jQuery jTable.GSoft plugin
 * Version 1.5
 * Require jQuery v1.10 o superior y Bootstrap.
 * Copyright © 2015 Luis Manuel Larrea Chiavaroli.
 */

(function($){
  var _obj;
  $.grid = function(){};
  $.fn.grid = function(_data,_options){
    _obj = this;
    $(this).empty();
    var fullOpts = $.extend({}, $.grid.defaults, _options || {});

    $(_obj).addClass(fullOpts.clss);
    $(_obj).append(header(fullOpts.header,fullOpts));
    $(_obj).append(body(_data,fullOpts));

  }

  $.fn.addRow = function(_data,_options){
    var fullOpts = $.extend({}, $.grid.defaults, _options || {});
    for(var i in _data){
      var _tr = document.createElement("tr");
      var p   = g()+g();
      _tr.dataset.position = p;
      _tr.dataset.flb = i;

      _tr.id=p;
      if(fullOpts.dataColumn.length>0){
        for (var j = 0; j < fullOpts.dataColumn.length; j++){
          var _td = document.createElement("td");
          //_td.style.textAlign = _options.td;
          if(typeof(_data[i][_options.dataColumn[j]]) === "boolean"){
            if (_data[i][_options.dataColumn[j]]) {
              _data[i][_options.dataColumn[j]] = "SI";
            }else{
              _data[i][_options.dataColumn[j]] = "NO";
            }
          }

          if(String(fullOpts.lower.active)=='undefined'){
            fullOpts.lower.active=false;
          }

          if(fullOpts.lower.active){
            _td.innerHTML = lower(_data[i][fullOpts.dataColumn[j]],
              fullOpts.lower.number);
          }else{
            _td.innerHTML = _data[i][fullOpts.dataColumn[j]];
          }
          _tr.appendChild(_td);
        }
      }else{
        for(var j in _data[i]){
          var _td = document.createElement("td");
          //_td.style.textAlign = fullOpts.td;
          if(typeof(_data[i][j]) === "boolean"){
            if (_data[i][j]) {
              _data[i][j] = "SI";
            }else{
              _data[i][j] = "NO";
            }
          }

          if(fullOpts.lower.active){
            _td.innerHTML = new lower(_data[i][j],fullOpts.lower.number);
          }else{
            _td.innerHTML = _data[i][j];
          }
          _tr.appendChild(_td);
        }
      }

      if(fullOpts.btn_view.visible||fullOpts.btn_edit.visible||fullOpts.btn_delete.visible){
        var _td = document.createElement("td");
        if(fullOpts.btn_view.visible){
          fullOpts.btn_view.css = $.extend(true,$.grid.defaults.btn_view.css, fullOpts.btn_view.css);
          if(String(fullOpts.btn_view.clss)=="undefined"){
            fullOpts.btn_view.clss="none"
          }

          var _a = document.createElement("a");
          if(fullOpts.btn_view.clss == "none"){
            $(_a).css(fullOpts.btn_view.css);
          }else{
            _a.className = fullOpts.btn_view.clss;
          }
          _a.id = fullOpts.btn_view.id_btn;
          _a.innerHTML = fullOpts.btn_view.txt;

          if(fullOpts.btn_view.key=='' || String(fullOpts.btn_view.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(fullOpts.btn_view.key)){
              for(var v in fullOpts.btn_view.key) {
                $(_a).data(fullOpts.btn_view.key[v],_data[i][fullOpts.btn_view.key[v]]);
              }
            }else{
              $(_a).data(fullOpts.btn_view.key,_data[i][fullOpts.btn_view.key]);
            }

            _a.onclick = fullOpts.btn_view.action_btn;
          }

          _td.appendChild(_a);
        }


        if(fullOpts.btn_edit.visible){
          fullOpts.btn_edit.css = $.extend(true,$.grid.defaults.btn_edit.css, fullOpts.btn_edit.css);
          if(String(fullOpts.btn_edit.clss)=="undefined"){
            fullOpts.btn_edit.clss="none"
          }

          var _a = document.createElement("a");
          if(fullOpts.btn_edit.clss == "none"){
            $(_a).css(fullOpts.btn_edit.css);
          }else{
            _a.className = fullOpts.btn_edit.clss;
          }
          _a.id = fullOpts.btn_edit.id_btn+i;
          _a.innerHTML = fullOpts.btn_edit.txt;

          if(fullOpts.btn_edit.key=='' || String(fullOpts.btn_edit.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(fullOpts.btn_edit.key)){
              for(var v in fullOpts.btn_edit.key) {
                $(_a).data(fullOpts.btn_edit.key[v],_data[i][fullOpts.btn_edit.key[v]]);
              }
            }else{
              $(_a).data(fullOpts.btn_edit.key,_data[i][fullOpts.btn_edit.key]);
            }

            _a.onclick = fullOpts.btn_edit.action_btn;
          }

          _td.appendChild(_a);
        }



        if(fullOpts.btn_delete.visible){
          fullOpts.btn_delete.css = $.extend(true,$.grid.defaults.btn_delete.css, fullOpts.btn_delete.css);
          if(String(fullOpts.btn_delete.clss)=="undefined"){
            fullOpts.btn_delete.clss="none"
          }

          var _a = document.createElement("a");
          if(fullOpts.btn_delete.clss == "none"){
            $(_a).css(fullOpts.btn_delete.css);
          }else{
            _a.className = fullOpts.btn_delete.clss;
          }
          _a.id = fullOpts.btn_delete.id_btn+i;
          _a.innerHTML = fullOpts.btn_delete.txt;

          if(fullOpts.btn_delete.key=='' || String(fullOpts.btn_delete.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(fullOpts.btn_delete.key)){
              for(var v in fullOpts.btn_delete.key) {
                $(_a).data(fullOpts.btn_delete.key[v],_data[i][fullOpts.btn_delete.key[v]]);
              }
            }else{
              $(_a).data(fullOpts.btn_delete.key,_data[i][fullOpts.btn_delete.key]);
            }

            _a.onclick = fullOpts.btn_delete.action_btn;
          }

          _td.appendChild(_a);
        }

        //_td.style.textAlign = fullOpts.td;
        _tr.appendChild(_td);
      }
    }
    $(this).append(_tr);
  }

  function header(_header,_options){
    _options = $.extend({}, $.grid.defaults, _options || {});
    var _id = $(_obj).attr("id");
    if(String(_id)=="undefined" || String(_id)=='') {
      _id = "."+$(_obj).attr("class");
    }else{
      _id = "#"+$(_obj).attr("id");
    }
    if($(_id+" thead").length==0){
      var _thead = document.createElement("thead");
      var _tr = document.createElement("tr");
      for(var i = 0; i < _header.length; i++){
        var _th = document.createElement("th");
        //_th.style.textAlign = _options.th;
        _th.innerHTML = _header[i]
        _tr.appendChild(_th);
      }
      if(_options.btn_view.visible||_options.btn_edit.visible||_options.btn_delete.visible){
        var _th = document.createElement("th");
        //_th.style.textAlign = _options.th;
        _th.innerHTML = "";
        _tr.appendChild(_th);
      }
      _thead.appendChild(_tr);
      return _thead;
    }
  }

  function body(_data,_options){
    _options = $.extend({}, $.grid.defaults, _options || {});

    var _tbody = document.createElement("tbody");

    for(var i in _data) {
      var _tr = document.createElement("tr");
      var p   = g()+g();
      _tr.dataset.position = p;
      _tr.dataset.flb = i;

      _tr.id=p;
      if(_options.dataColumn.length>0){
        for (var j = 0; j < _options.dataColumn.length; j++){
          var _td = document.createElement("td");
          //_td.style.textAlign = _options.td;
          if(typeof(_data[i][_options.dataColumn[j]]) === "boolean"){
            if (_data[i][_options.dataColumn[j]]) {
              _data[i][_options.dataColumn[j]] = "SI";
            }else{
              _data[i][_options.dataColumn[j]] = "NO";
            }
          }

          if(_options.lower.active){
            _td.innerHTML = lower(_data[i][_options.dataColumn[j]],
              _options.lower.number);
          }else{
            _td.innerHTML = _data[i][_options.dataColumn[j]];
          }
          _tr.appendChild(_td);
        }
      }else{
        for(var j in _data[i]){
          var _td = document.createElement("td");
          //_td.style.textAlign = _options.td;
          if(typeof(_data[i][j]) === "boolean"){
            if (_data[i][j]) {
              _data[i][j] = "SI";
            }else{
              _data[i][j] = "NO";
            }
          }

          if(_options.lower.active){
            _td.innerHTML = new lower(_data[i][j],_options.lower.number);
          }else{
            _td.innerHTML = _data[i][j];
          }
          _tr.appendChild(_td);
        }
      }

      if(_options.btn_view.visible||_options.btn_edit.visible||_options.btn_delete.visible){
        var _td = document.createElement("td");

        if(_options.btn_view.visible){
          _options.btn_view.css = $.extend(true,$.grid.defaults.btn_view.css, _options.btn_view.css);
          if(String(_options.btn_view.clss)=="undefined"){
            _options.btn_view.clss="none"
          }
          var _a = document.createElement("a");

          if(_options.btn_view.clss == "none"){
            $(_a).css(_options.btn_view.css);
          }else{
            _a.className = _options.btn_view.clss;
          }

          if(String(_options.btn_view.id_btn)!=="undefined"){
            _a.id = _options.btn_view.id_btn;
          }
          _a.innerHTML = _options.btn_view.txt;

          if(_options.btn_view.key=='' || String(_options.btn_view.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(_options.btn_view.key)){
              for(var v in _options.btn_view.key) {
                $(_a).data(_options.btn_view.key[v],_data[i][_options.btn_view.key[v]]);
              }
            }else{
              $(_a).data(_options.btn_view.key,_data[i][_options.btn_view.key]);
            }

            _a.onclick = _options.btn_view.action_btn;
          }

          _td.appendChild(_a);
        }



        if(_options.btn_edit.visible){
          _options.btn_edit.css = $.extend(true,$.grid.defaults.btn_edit.css, _options.btn_edit.css);
          if(String(_options.btn_edit.clss)=="undefined"){
            _options.btn_edit.clss="none"
          }
          var _a = document.createElement("a");
          if(_options.btn_edit.clss == "none"){
            $(_a).css(_options.btn_edit.css);
          }else{
            _a.className = _options.btn_edit.clss;
          }
          if(String(_options.btn_edit.id_btn)!=="undefined"){
            _a.id = _options.btn_edit.id_btn;
          }
          _a.innerHTML = _options.btn_edit.txt;

          if(_options.btn_edit.key=='' || String(_options.btn_edit.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(_options.btn_edit.key)){
              for(var v in _options.btn_edit.key) {
                $(_a).data(_options.btn_edit.key[v],_data[i][_options.btn_edit.key[v]]);
              }
            }else{
              $(_a).data(_options.btn_edit.key,_data[i][_options.btn_edit.key]);
            }

            _a.onclick = _options.btn_edit.action_btn;
          }

          _td.appendChild(_a);
        }



        if(_options.btn_delete.visible){
          _options.btn_delete.css = $.extend(true,$.grid.defaults.btn_delete.css, _options.btn_delete.css);
          if(String(_options.btn_delete.clss)=="undefined"){
            _options.btn_delete.clss="none";
          }
          var _a = document.createElement("a");
          if(_options.btn_delete.clss == "none"){
            $(_a).css(_options.btn_delete.css);
          }else{
            _a.className = _options.btn_delete.clss;
          }
          if(String(_options.btn_delete.id_btn)!=="undefined"){
            _a.id = _options.btn_delete.id_btn;
          }
          _a.innerHTML = _options.btn_delete.txt;

          if(_options.btn_delete.key=='' || String(_options.btn_delete.key)=="undefined"){
            log("Debes indicar la key que se creara en el data del boton");
          }else{
            if(typeV(_options.btn_delete.key)){
              for(var v in _options.btn_delete.key) {
                $(_a).data(_options.btn_delete.key[v],_data[i][_options.btn_delete.key[v]]);
              }
            }else{
              $(_a).data(_options.btn_delete.key,_data[i][_options.btn_delete.key]);
            }

            _a.onclick = _options.btn_delete.action_btn;
          }

          _td.appendChild(_a);
        }

        //_td.style.textAlign = _options.td;
        _tr.appendChild(_td);
      }
      _tbody.appendChild(_tr);
    }
    return _tbody;
  }

  function g(){
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  function typeV(value){
    if(!Array.isArray){
      Array.isArray = function (value) {
        return Object.prototype.toString.call(value) === "[object Array]";
      };
    }else{
      return Array.isArray(value);
    }
  }

  function log(s) {
      if (typeof console != "undefined" && typeof console.debug != "undefined") {
          console.log(s);
      } else {
          alert(s);
      }
  }

  function lower(txt,number){
      if(txt.length>number){
          var newtxt="";
          for(var i=0;i<txt.length;i++){
              if(i<number){
                 newtxt+= txt[i];
              }else{
                  break;
              }
          }
          return newtxt + '...';
      }else{
          return txt;
      }
  }

  $.grid.version = "1.2";
  $.grid.defaults = {
    width : "100%",
    height : "auto",
    th : "",
    td : "",
    clss : "",
    lower : {
      active : false,
      number : 50
    },
    btn_view : {
      id_btn : "btn-view",
      key : "",
      visible : false,
      action_btn : "#",
      txt : "Visualizar",
      clss : "none",
      css : {
        "border-width" : "2px",
        "border-radius" : "3px",
        "font-size" : "13px",
        "line-height" : "1.5",
        "padding" : "3px 5px",
        "background-color" : "#5bc0de",
        "border-color" : "#5bc0de",
        "color" : "#ffffff",
        "text-decoration" : "none",
        "-moz-user-select" : "none",
        "background-image" : "none",
        "cursor" : "pointer",
        "display" : "inline-block",
        "font-weight" : "normal",
        "margin-bottom" : "0",
        "margin-right" : "10px",
        "text-align" : "center",
        "vertical-align" : "middle",
        "white-space" : "nowrap"
      }
    },
    btn_edit : {
      id_btn : "btn-edit",
      visible : false,
      action_btn : "#",
      txt : "Editar",
      clss : "none",
      css : {
        "border-width" : "2px",
        "border-radius" : "3px",
        "font-size" : "13px",
        "line-height" : "1.5",
        "padding" : "3px 5px",
        "background-color" : "#f39c12",
        "border-color" : "#f39c12",
        "color" : "#ffffff",
        "text-decoration" : "none",
        "-moz-user-select" : "none",
        "background-image" : "none",
        "cursor" : "pointer",
        "display" : "inline-block",
        "font-weight" : "normal",
        "margin-bottom" : "0",
        "margin-right" : "10px",
        "text-align" : "center",
        "vertical-align" : "middle",
        "white-space" : "nowrap"
      }
    },
    btn_delete : {
      id_btn : "btn-delete",
      visible : false,
      action_btn : "#",
      txt : "Eliminar",
      clss : "none",
      css : {
        "border-width" : "2px",
        "border-radius" : "3px",
        "font-size" : "13px",
        "line-height" : "1.5",
        "padding" : "3px 5px",
        "background-color" : "#e74c3c",
        "border-color" : "#e74c3c",
        "color" : "#ffffff",
        "text-decoration" : "none",
        "-moz-user-select" : "none",
        "background-image" : "none",
        "cursor" : "pointer",
        "display" : "inline-block",
        "font-weight" : "normal",
        "margin-bottom" : "0",
        "margin-right" : "10px",
        "text-align" : "center",
        "vertical-align" : "middle",
        "white-space" : "nowrap"
      }
    },
    header : {},
    dataColumn : {}
  }
})(jQuery)
