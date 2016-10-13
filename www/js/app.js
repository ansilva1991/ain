var app = {
  VERSION: "1.0",
  ENV: "development",
  SCREENS: {
    LOGIN: {
      html: "login",
      header: false
    },
    SELECT_AUTH: {
      html: "select_auth",
      header: false
    },
    REGISTER: {
      html: "register",
      header: false
    },
    REGISTER_TERMS_AND_CONDITIONS: {
      html: "register_terms_and_conditions",
      header: false
    },
    WELCOME: {
      html: "welcome",
      header: false
    },
    DASHBOARD: {
      html: "dashboard",
      section_name: "<span class='dashboard-icon icon-people-bubble'></span><span class='dashboard-text'>Inicio</span>"
    },
    AUTHORIZATIONS: {
      icon_left: [
      {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      }
      ],
      icon_right: [
      {
        icon: "question-circle",
        func: function(){
          cs.help();
        }
      }
      ],
      section_name: "Autorizaciones",
      html: "authorizations"
    },
    AUTHORIZATION_FORM_FAMILY: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Familiar",
      html: "authorization_form_family"
    },
    AUTHORIZATION_FORM_VISIT: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Visita",
      html: "authorization_form_visit"
    },
    AUTHORIZATION_FORM_EMPLOYEE: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Empleado",
      html: "authorization_form_employee"
    },
    COMMUNICATIONS: {
      icon_left: [
      {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      }
      ],
      icon_right: [
      {
        icon: "question-circle",
        func: function(){
          cs.help();
        }
      }
      ],
      section_name: "Comunicaciones",
      html: "communications"
    },
    VIEW_COMMUNICATION: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      /*icon_right: [
      {
        icon: "info-circle",
        func: function(){
          cs.communicationInfo();
        }
      }
      ],*/
      section_name: "Comunicación",
      html: "view_communication"
    },
    INFO_COMMUNICATION: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "Información",
      html: "info_communication"
    },
    FORM_COMMUNICATION: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "NUEVA COMUNICACIÓN",
      html: "form_communication"
    },
    ATTACHMENT_COMMUNICATION: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "",
      header_class: ["black"],
      html: "attachment_communication"
    },
    EVENTS: {
      icon_left: [
      {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      }
      ],
      icon_right: [
      {
        icon: "question-circle",
        func: function(){
          cs.eventInfo();
        }
      }
      ],
      section_name: "Eventos",
      html: "events"
    },
    EVENT_GUEST_LIST_FORM: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Lista de invitados",
      html: "event_guest_list_form"
    },
    EVENT_GUEST_FORM: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        }
      }
      ],
      section_name: "Invitado",
      html: "event_guest_form"
    },
    EVENTS_CALENDAR_DAY: {
      icon_left: [
        {
          icon: "chevron-left",
          func: function(){
            cs.back();
          }
        }
      ],
      icon_right:[
        {
          icon: "calendar",
          func: function(){
            cs.toggleCalendar();
          }
        }
      ],
      section_name: "",
      html: "events_calendar_day"
    },
    EVENT_FORM: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Evento",
      html: "event_form"
    },
    IMPORT_GUESTS_LIST: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "Importar lista",
      html: "import_guests_list"
    },
    IMPORT_GUESTS_LIST_GUESTS: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        }
      }
      ],
      section_name: "Amigos",
      html: "import_guests_list_guests"
    },
    EXPENSES: {
      icon_left: [
        {
          icon: "bars",
          func: function(){
            app.openMenu();
          }
        }
      ],
      icon_right:[
        {
          icon: "calendar",
          func: function(){
            cs.toggleCalendar();
          }
        }
      ],
      section_name: "Ago. del 2016",
      html: "expenses"
    },
    EXPENSES_SHOW_FULL: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "EXPENSAS",
      html: "expenses_show_full"
    },
    EXPENSES_SHOW_PDF: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "EXPENSAS",
      html: "expenses_show_pdf"
    },
    EXPENSES_SHOW_NOTHING: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "EXPENSAS",
      html: "expenses_show_nothing"
    },
    EXPENSES_SHOW_PER_METER: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "EXPENSAS",
      html: "expenses_show_per_meter"
    },
    GUARD: {
      icon_left: [
      {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      }
      ],
      icon_right: [
      {
        icon: "question-circle",
        func: function(){
          cs.eventInfo();
        }
      }
      ],
      section_name: "Portería",
      html: "guard"
    },
    GUARD_RECORD_FORM: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      section_name: "Portería",
      html: "guard_record_form"
    },
    GUARD_MESSAGE_FORM: {
      icon_left: [
      {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      }
      ],
      icon_right: [
      {
        text: "Listo <i class='fa fa-check'></i>",
        func: function(){
          cs.submit();
        },
        id: 'submit-button'
      }
      ],
      section_name: "Nuevo Mensaje",
      html: "guard_message_form"
    },
    CONFIGURATIONS: {
      icon_left: [
      {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      }
      ],
      section_name: "Configuración",
      html: "configurations"
    },
    TEST: {
      icon_left: {
        icon: "user",
        func: function(){
          app.loadScreen(app.SCREENS.AUTHORIZATIONS);
        }
      },
      section_name: "Prueba",
      html: "test"
    }
  },
  load_screen_ajax: false,
  current_screen: false,
  header_icon_clicks: {},
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    FastClick.attach(document.body);
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  getMyPath: function(){
    return cordova.file.externalDataDirectory;
  },
  openFile: function(file,from_root){
    var url = (!from_root ? app.getMyPath() : '' ) + file;
    console.log('Try open: ' + url);
    window.plugins.fileOpener.open(url);
  },
  onDeviceReady: function() {
    console.log('deviceready');
    console.log(cordova.platformId);
    console.log(device.uuid);


    localStorage.uuid = localStorage.uuid || Extends.generateUUID();

    if(window.plugins.OneSignal && window.plugins.OneSignal.startInit){

      window.plugins.OneSignal.startInit("c121ee3a-dcad-4171-a489-12a59f102a04", "44425877825").handleNotificationOpened(app.onNotificationOpenedCallback).handleNotificationReceived(app.onNotificationReceivedCallback).inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None).endInit();
    }

    if (cordova.platformId == 'android') {
      StatusBar.backgroundColorByHexString("#DC9929");
    }

    $(window).resize(function(){
      app.windowResize();
    });

    $('.app>.menu').swipeLeft(function(){
      app.closeMenu();
    });

    //app.loadScreen(app.SCREENS.LOGIN);
    if(PrivateData.get('is_login')){
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

  },
  onNotificationReceivedCallback: function(jsonData){
    console.log('onNotificationReceivedCallback: ');
    console.log(jsonData);
  },
  updateMenuInfo: function(){
    if(PrivateData.get('current_person_avatar')){
      $('.app>.menu .content .header img').attr('src','data:image/jpg;base64,' + PrivateData.get('current_person_avatar'));
    }
    $('.app>.menu .content .header #client_name').html(PrivateData.get('current_client_name'));
    $('.app>.menu .content .header #group_identificator').html(PrivateData.get('current_group_identificator'));
    $('.app>.menu .content .header #person_full_name').html(PrivateData.get('current_person_full_name'));
    $('.app>.menu .content .header').css({
      'background-image' : 'url(img/back_menu_lateral_' + PrivateData.get('current_client_picture_menu_n')+ '.jpg)'
    });
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

    if((new Date()).getTime() - (PrivateData.get('last_config_sync') || 0) > 1800000){
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
            if(data.person_avatar){
              PrivateData.set('current_person_avatar',data.person_avatar);
            }
            PrivateData.set('current_group_identificator',data.group_identificator);
            PrivateData.set('current_client_name',data.client_name);
            PrivateData.set('current_client_picture_menu_n',data.client_picture_menu_app_n);
            PrivateData.set('last_config_sync',(new Date()).getTime());
            PrivateData.set('current_person_avatar_last_change',data.person_last_avatar_change);
            PrivateData.set('current_group_identificator_one',data.current_group_identificator_one);
            PrivateData.set('current_group_identificator_others',data.current_group_identificator_others);

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
    current_person_id: "evjjc",
    current_person_full_name: "esjjc",
    current_person_avatar: "avjjc",
    current_person_avatar_last_change: "avlcc",
    current_group_identificator: "esjjf",
    current_group_identificator_one: "esjjo",
    current_group_identificator_others: "esjot",
    current_client_name: "cvjjf",
    current_client_picture_menu_n: "cbjjf",
    last_config_sync: "lcsyd"
  },
  booleans : ["is_login"],
  get : function(key){
    if(PrivateData.booleans.indexOf(key) > -1){
      return localStorage[PrivateData.hide_fields[key]] ? Security.decrypt(localStorage[PrivateData.hide_fields[key]]) : false;
    }else{
      return localStorage[PrivateData.hide_fields[key]] ? Security.decrypt(localStorage[PrivateData.hide_fields[key]]) : undefined;
    }
  },
  set : function(key,value){
    return localStorage[PrivateData.hide_fields[key]] = Security.encrypt(value.constructor == String ? value.replace("0.0.0.0","192.168.1.35") : value);
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