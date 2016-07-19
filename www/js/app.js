var app = {
  SCREENS: {
    AUTHORIZATIONS: {
      icon_left: {
        icon: "bars",
        func: function(){
          app.openMenu();
        }
      },
      section_name: "Autorizaciones",
      html: "authorizations"
    },
    AUTHORIZATION_FORM_FAMILY: {
      icon_left: {
        icon: "chevron-left",
        func: function(){
          cs.back();
        }
      },
      section_name: "Familiar",
      html: "authorization_form_family"
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
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    FastClick.attach(document.body);
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    console.log('deviceready');

    if (cordova.platformId == 'android') {
      StatusBar.backgroundColorByHexString("#ff0000");
    }

    app.loadScreen(app.SCREENS.AUTHORIZATION_FORM_FAMILY);
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
  iconLeftClick: function(){},
  loadScreen: function(x_screen){
    $('.header .icon i').attr('class','fa fa-' + x_screen.icon_left.icon);
    $('.header .section-name').html(x_screen.section_name);

    $('.app .content .loading').show();
    app.iconLeftClick = x_screen.icon_left.func;

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