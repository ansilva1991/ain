var app = {
  SCREENS: {
    LOGIN: {
      html: "login",
      header: false
    },
    REGISTER: {
      html: "register",
      header: false
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
          icon: "check",
          func: function(){
            cs.submit();
          }
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
          icon: "check",
          func: function(){
            cs.submit();
          }
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
          icon: "check",
          func: function(){
            cs.submit();
          }
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
      icon_right: [
        {
          icon: "info-circle",
          func: function(){
            cs.communicationInfo();
          }
        }
      ],
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
      section_name: "Comunicación",
      html: "info_communication"
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
          icon: "info-circle",
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
          icon: "check",
          func: function(){
            cs.submit();
          }
        }
      ],
      section_name: "Lista",
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
          icon: "check",
          func: function(){
            cs.submit();
          }
        }
      ],
      section_name: "Invitado",
      html: "event_guest_form"
    },
    EVENTS_CALENDAR: {
      icon_left: [
        {
          icon: "chevron-left",
          func: function(){
            cs.back();
          }
        }
      ],
      section_name: "ago. de 2017",
      html: "events_calendar"
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
      section_name: "ago. de 2017",
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
          icon: "check",
          func: function(){
            cs.submit();
          }
        }
      ],
      section_name: "Evento",
      html: "event_form"
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
    CONFIGURATION_NOTIFICATIONS: {
      icon_left: [
        {
          icon: "chevron-left",
          func: function(){
            cs.back();
          }
        }
      ],
      section_name: "Notificaciones",
      html: "configuration_notifications"
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
  onDeviceReady: function() {
    console.log('deviceready');
    console.log(cordova.platformId);
    console.log(device.uuid);

    if (cordova.platformId == 'android') {
      StatusBar.backgroundColorByHexString("#DC9929");
    }

    $(window).resize(function(){
      app.windowResize();
    });

    app.loadScreen(app.SCREENS.LOGIN);
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
  selectLiMenu: function(x){
    app.closeMenu();
    app.loadScreen(x);
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
  loadScreen: function(x_screen){
    app.windowResize = function(){};
    $('.header .icon_end').remove();
    app.header_icon_clicks = {};

    if(x_screen.header == false){
      $('.header').hide();
    }else{
      $('.header').show();
    }

    if(x_screen.icon_left && x_screen.icon_left.length > 0){

      for(var i in x_screen.icon_left){
        var tmp = $('.header .icon.example').clone().insertBefore('.header .section-name');
        tmp.addClass('icon_end');
        tmp.removeClass('example');
        tmp.children().attr('class','fa fa-' + x_screen.icon_left[i].icon);
        var function_id = Math.round(Math.random() * 99999999999);

        tmp.attr('onclick','app.headerIconClick(' + function_id + ')');

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
        tmp.children().attr('class','fa fa-' + x_screen.icon_right[i].icon);
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
      app.current_screen.start();

      window.cs = app.current_screen;
    });

  }
};

var Alert = {
  open : function(msg){
    $('.modal-alert p').html(msg);
    $('.modal-alert').addClass('open');
  },
  close : function(){
    $('.modal-alert').removeClass('open');
  }
}

var Confirm = {
  callback_success : function(){},
  callback_cancel : function(){},
  open : function(msg, callback_success, callback_cancel){
    Confirm.callback_success = callback_success || function(){};
    Confirm.callback_cancel = callback_cancel || function(){};

    $('.modal-confirm p').html(msg);
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

function onPhotoDataSuccess(i){};
function onPhotoDataFail(i){};