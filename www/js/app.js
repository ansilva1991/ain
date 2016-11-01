var app = {
  VERSION: 206,
  MINIUM_VERSION_LOGUINED: 206,
  ENV: "production",
  load_screen_ajax: false,
  current_screen: false,
  header_icon_clicks: {},
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    FastClick.attach(document.body);
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('backbutton', this.onBackButton, false);
  },
  getMyPath: function(){
    return cordova.platformId == 'ios' ? cordova.file.documentsDirectory : cordova.file.externalDataDirectory;
  },
  openFile: function(file,from_root,error){
    var mime_types = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      jpe: "image/jpeg",
      png: "image/png",
      bmp: "image/bmp",
      pdf: "application/pdf",
      doc: "application/msword",
      xls: "application/vnd.ms-excel"
    }
    var type = file.split('/')[file.split('/').length -1].split('.')[1].split('?')[0];
    var url = (!from_root ? app.getMyPath() : '' ) + file;
    console.log('Try open: ' + url + ' TYPE: ' + type);
    cordova.plugins.fileOpener2.open(url,mime_types[type.toLowerCase()],{
      error : error
    });
  },
  onDeviceReady: function() {
    console.log('deviceready');
    console.log(cordova.platformId);
    console.log(device.uuid);

    localStorage.uuid = localStorage.uuid || Extends.generateUUID();

    if(window.plugins.OneSignal && window.plugins.OneSignal.startInit){

      window.plugins.OneSignal.startInit("c121ee3a-dcad-4171-a489-12a59f102a04", "44425877825").handleNotificationOpened(app.onNotificationOpenedCallback).handleNotificationReceived(app.onNotificationReceivedCallback).inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification).endInit();
    }

    if (cordova.platformId == 'android') {
      StatusBar.backgroundColorByHexString("#DC9929");
    }

    $(window).resize(function(){
      app.windowResize();
    });

    var hammertime = new Hammer($('.app>.menu')[0]);
    hammertime.on('swipeleft', function(ev) {
      app.closeMenu();
    });

    if(PrivateData.get('is_login')){

      if(!PrivateData.get('logined_version') || PrivateData.get('logined_version') < app.MINIUM_VERSION_LOGUINED){
        PrivateData.clear();
        app.loadScreen(app.SCREENS.LOGIN);
      }

      if(PrivateData.get('current_auth_code')){
        app.updateConfig(function(){
          app.updateMenuInfo();
          if(localStorage['welcome_' + PrivateData.get('email_logined')]){
            app.loadScreen(app.SCREENS.DASHBOARD);
          }else{
            app.loadScreen(app.SCREENS.WELCOME);
          }
        })
      }else{
        app.loadScreen(app.SCREENS.SELECT_AUTH);
      }
    }else{
      app.loadScreen(app.SCREENS.LOGIN);
    }
  },
  onNotificationOpenedCallback: function(jsonData){
    console.log('onNotificationOpenedCallback: ');
    console.log(jsonData);
    var data = JSON.parse(jsonData.notification.payload.additionalData);

    app.loadScreen(app.SCREENS[data.screen],data.data);

  },
  onNotificationReceivedCallback: function(jsonData){
    console.log('onNotificationReceivedCallback: ');
    console.log(jsonData);
    var data = jsonData.payload.additionalData;
  },
  onBackButton: function(){
    if($('.app .menu').hasClass('open')){
      app.closeMenu();
    }else if(cs && cs.back){
      cs.back();
    }else{
      navigator.app.exitApp();
    }
  },
  updateMenuInfo: function(){
    if(PrivateData.get('current_person_avatar')){
      $('.app>.menu .content .header img').attr('src',PrivateData.get('current_person_avatar'));
    }
    $('.app>.menu .content .header #client_name').html(PrivateData.get('current_client_name'));
    $('.app>.menu .content .header #group_identificator').html(PrivateData.get('current_group_identificator'));
    $('.app>.menu .content .header #person_full_name').html(PrivateData.get('current_person_full_name'));
    $('.app>.menu .content .header').css({
      'background-image' : 'url(img/back_menu_lateral_' + PrivateData.get('current_client_picture_menu_n')+ '.jpg)'
    });

    if(!PrivateData.get('module_expense_active')){
      $('.app>.menu .content [data-module="expenses"]').remove();
    }

    if(!PrivateData.get('module_guard_active')){
      $('.app>.menu .content [data-module="guard"]').remove();
    }

    if(!PrivateData.get('module_events_active')){
      $('.app>.menu .content [data-module="events"]').remove();
    }
  },
  openMenu: function(){
    $('.app .menu').addClass('open');
  },
  closeMenu: function(){
    $('.app .menu').removeClass('open');
  },
  pageLoading: function(x){
    x == 'show' ? $('.app .content .loading').show() : $('.app .content .loading').hide();
  },
  liActive: function(x){
    $('.app .menu .list .item').removeClass('active');
    $('.app .menu .list .item[data-li="' + x + '"]').addClass('active');
  },
  update_config_callback: -1,
  updateConfig: function(callback){
    app.update_config_callback = callback;

    if((new Date()).getTime() - (PrivateData.get('last_config_sync') || 0) > 10800000){
      app.pageLoading('show');
      console.log('SYNC CONFIG');
      Server.send({
        route : [PrivateData.get('current_server_portal'),'app','config','sync'],
        data : {
          avatar_last_change: PrivateData.get('current_person_avatar_last_change') || 0
        },
        callback : function(data, success){
          console.log(data);
          if(success){
            PrivateData.set('current_person_full_name',data.person_full_name);
            PrivateData.set('current_group_identificator',data.group_identificator);
            PrivateData.set('current_client_name',data.client_name);
            PrivateData.set('current_client_picture_menu_n',data.client_picture_menu_app_n);
            PrivateData.set('last_config_sync',(new Date()).getTime());
            PrivateData.set('current_person_avatar_last_change',data.person_last_avatar_change);
            PrivateData.set('current_group_identificator_one',data.current_group_identificator_one);
            PrivateData.set('current_group_identificator_others',data.current_group_identificator_others);
            PrivateData.set('module_expense_active',data.module_expense_active);
            PrivateData.set('module_guard_active',data.module_guard_active);
            PrivateData.set('module_events_active',data.module_events_active);

            if(data.person_avatar){
              PrivateData.set('current_person_avatar',data.person_avatar);
            }

            app.update_config_callback();
          }
        }
      });

    }else{
      app.update_config_callback();
    }
  },
  selectLiMenu: function(x){
    if(x == 'sign_out'){
      app.closeMenu();

      Confirm.open({
        title: "Cerrar sesión",
        msg: "¿Estas seguro que deseas cerrar sesión?",
        success_button: "Continuar",
        cancel_button: "Cancelar",
        callback_success: function(){
          ModalLoading.open('Cerrando Sesión', "Espere un momento por favor");

          Server.send({
            route : [PrivateData.get('current_server_portal'),'app','people','sign_out'],
            data : {},
            callback : function(data, success){
              if(success){
                ModalLoading.close();
                PrivateData.clear();
                app.loadScreen(app.SCREENS.LOGIN);
              }
            }
          });
        }
      });
    }else{
      app.closeMenu();
      app.loadScreen(x);
    }
  },
  takeFromCamera: function(success,error,options){

    onPhotoDataSuccess = success;
    onPhotoDataFail = error;

    navigator.camera.getPicture(onPhotoDataSuccess, onPhotoDataFail,options);
  },
  headerIconClick: function(function_id){
    app.header_icon_clicks[function_id]();
  },
  ifDemo: function(){
    if(PrivateData.get('is_demo')){
      app.ENV = 'demo';
    }
  },
  windowResize: function(){},
  loadScreen: function(x_screen,opts){
    console.log('loadScreen: ' + x_screen.html);
    console.log('loadScreen(opts): ' + JSON.stringify(opts|| {}));

    app.load_screen_opts = opts;
    app.windowResize = function(){};
    $('.header .icon_end').remove();
    app.header_icon_clicks = {};

    if(x_screen.header == false){
      $('.header').hide();
    }else{
      $('.header').show();
    }

    $('.header').attr('class','header');
    if(x_screen.header_class){
      for(var i in x_screen.header_class){
        $('.header').addClass(x_screen.header_class[i]);
      }
    }

    $('.header .section-name').removeAttr('onclick');

    if(x_screen.icon_left && x_screen.icon_left.length > 0){

      for(var i in x_screen.icon_left){
        var tmp = $('.header .icon.example').clone().insertBefore('.header .section-name');
        tmp.addClass('icon_end');
        tmp.removeClass('example');

        if(x_screen.icon_left[i].icon){
          tmp.children().attr('class','fa fa-' + x_screen.icon_left[i].icon);
        }else{
          tmp.html(x_screen.icon_left[i].text);
          tmp.addClass('text');
        }

        var function_id = Math.round(Math.random() * 99999999999);

        tmp.attr('onclick','app.headerIconClick(' + function_id + ')');

        if(i == 0){
          $('.header .section-name').attr('onclick','app.headerIconClick(' + function_id + ')');
        }

        tmp.show();

        app.header_icon_clicks[function_id] = x_screen.icon_left[i].func;
      }
    }

    if(x_screen.icon_right && x_screen.icon_right.length > 0){

      for(var i in x_screen.icon_right){
        var tmp = $('.header .icon.example').clone().insertAfter('.header .section-name');
        tmp.addClass('icon_end');
        tmp.addClass('right');
        tmp.removeClass('example');
        if(x_screen.icon_right[i].id){
          tmp.attr('id',x_screen.icon_right[i].id);
        }

        if(x_screen.icon_right[i].icon){
          tmp.children().attr('class','fa fa-' + x_screen.icon_right[i].icon);
        }else{
          tmp.html(x_screen.icon_right[i].text);
          tmp.addClass('text');
        }

        var function_id = Math.round(Math.random() * 99999999999);

        tmp.attr('onclick','app.headerIconClick(' + function_id + ')');

        tmp.show();

        app.header_icon_clicks[function_id] = x_screen.icon_right[i].func;
      }
    }

    $('.header .section-name').html(x_screen.section_name || "");

    $('.app .content .loading').show();

    $('.content .page').empty();

    $('.content .page').load('screens/' + x_screen.html + '.html',function(data,status,xhr){
      app.current_screen = new c();
      window.cs = app.current_screen;

      app.current_screen.start(app.load_screen_opts);
    });

  },
  in_dev : function(){
    return app.ENV == 'development';
  },
  in_demo : function(){
    return app.ENV == 'demo';
  }
};

var Alert = {
  open : function(title,msg,button){
    $('.modal-alert h4 span').html(title);
    $('.modal-alert p').html(msg);
    $('.modal-alert button').html(button);
    $('.modal-alert').addClass('open');
  },
  close : function(){
    $('.modal-alert').removeClass('open');
  }
}

var ModalLoading = {
  open : function(title,msg){
    $('.modal-loading h4 span').html(title);
    $('.modal-loading p').html(msg);
    $('.modal-loading').addClass('open');
  },
  close : function(){
    $('.modal-loading').removeClass('open');
  }
}

var Confirm = {
  callback_success : function(){},
  callback_cancel : function(){},
  open : function(opts){
    title = opts.title;
    msg = opts.msg;
    success_button = opts.success_button;
    cancel_button = opts.cancel_button;
    Confirm.callback_success = opts.callback_success || function(){};
    Confirm.callback_cancel = opts.callback_cancel || function(){};

    $('.modal-confirm h4 span').html(title);
    $('.modal-confirm p').html(msg);
    $('.modal-confirm button#success').html(success_button);
    $('.modal-confirm button#cancel').html(cancel_button);
    $('.modal-confirm').addClass('open');
  },
  success : function(){
    Confirm.callback_success();
    $('.modal-confirm').removeClass('open');
  },
  cancel : function(){
    Confirm.callback_cancel();
    $('.modal-confirm').removeClass('open');
  }
}

var PrivateData = {
  hide_fields : {
    country_server_id: "msjnd",
    country_server_url: "mvjnd",
    current_auth_code: "mkemd",
    current_server_portal: "spkmk",
    email_logined: "eljjh",
    is_login: "evjjh",
    is_demo: "diskk",
    logined_version: "lvsyd",
    current_person_id: "evjjc",
    current_person_full_name: "esjjc",
    current_person_avatar: "avjjc",
    current_person_avatar_last_change: "avlcc",
    current_group_identificator: "esjjf",
    current_group_identificator_one: "esjjo",
    current_group_identificator_others: "esjot",
    current_client_name: "cvjjf",
    current_client_picture_menu_n: "cbjjf",
    last_config_sync: "lcsyd",
    module_expense_active: "meadd",
    module_guard_active: "mgadd",
    module_events_active: "mevad"
  },
  booleans : ["is_login","is_demo"],
  get : function(key){
    if(PrivateData.booleans.indexOf(key) > -1){
      return localStorage[PrivateData.hide_fields[key]] ? Security.decrypt(localStorage[PrivateData.hide_fields[key]]) : false;
    }else{
      return localStorage[PrivateData.hide_fields[key]] ? Security.decrypt(localStorage[PrivateData.hide_fields[key]]) : undefined;
    }
  },
  set : function(key,value){
    return localStorage[PrivateData.hide_fields[key]] = Security.encrypt(value.constructor == String ? value.replace("0.0.0.0","192.168.1.55") : value);
  },
  delete : function(key){
    delete localStorage[PrivateData.hide_fields[key]];
  },
  getAll : function(){
    var g = {};

    for(var i in PrivateData.hide_fields){
      g[i] = PrivateData.get(i);
    }

    return g;
  },
  clear : function(){
    for(var i in PrivateData.hide_fields){
      PrivateData.delete(i);
    }
  }
}

function onPhotoDataSuccess(i){};
function onPhotoDataFail(i){};