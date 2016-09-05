var Extends = {
  inputNumber : function(selector_css){
    $(selector_css).each(function(){
      $(this).find('label').click(function(){
        console.log(222);
        $(this).parent().addClass('focus');
        $(this).parent().find('input').focus();
      });

      $(this).find('input').focus(function(){
        $(this).parent().addClass('focus');
      });

      $(this).find('input').blur(function(){
        if($(this).val() == ""){
          $(this).parent().removeClass('focus');
        }
      });
    });
  },
  inputDate : function(selector_css){
    $(selector_css).each(function(){
      $(this).find('label').click(function(){
        $(this).parent().find('input[type="date"]').click();
        $(this).parent().find('input[type="date"]').focus();
      });

      $(this).find('input').bind('input', function() {
        if($(this).val() == ""){
          $(this).parent().removeClass('focus');
        }else{
          $(this).parent().addClass('focus');
        }
      });
    });
  },
  inputRadios : function(selector_css){
    $(selector_css).find('.radio').tap(function(){
      $(this).parent().find('.radio').removeClass('checked');
      $(this).addClass('checked');
    });
  },
  inputCheckBox : function(){
    $('.checkbox.for_tap').tap(function(){
      $(this).toggleClass('checked');

      $(this).find('input[type="checkbox"]').prop('checked',$(this).hasClass('checked'));
      $(this).find('input[type="checkbox"]').change();
    });

    $('.checkbox.for_tap input[type="checkbox"]').change(function(){
      if($(this).is(':checked')){
        $(this).parents('.checkbox.for_tap').addClass('checked');
      }else{
        $(this).parents('.checkbox.for_tap').removeClass('checked');
      }
    });
  },
  scrollToInputFocus : function(selector_css){
    $(selector_css).scrollTop(($(selector_css).scrollTop() + $(':focus').offset().top) - window.innerHeight + 60);
  },
  formatDate : function(date,format){
    var months_name_abbr = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    var units = {
      yyyy : date.getFullYear(),
      mm : (date.getMonth() / 10).toFixed(1).replace('.',''),
      dd : (date.getDate() / 10).toFixed(1).replace('.',''),
      mabbr : months_name_abbr[date.getMonth()]
    };

    for(var i in units){
      format = format.replace('%' + i,units[i]);
    }

    return format;
  },
  generateUUID : function(){
    var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0987654321";
    var code = "";

    for(var i = 0; i < 30; i++){
      code += chars[Math.round(Math.random() * (chars.length - 1))];
    }

    return code + (new Date()).getTime();
  },
  serializeForm : function(css_selector){
    var t = $(css_selector).serializeArray();
    var r = {};

    for(var i in t){
      r[t[i].name] = t[i].value;
    }

    return r;
  },
  name : function(css_selector){
    $(css_selector).blur(function(){
      var txt = $(this).val().split(' ');
      var txt_new = [];
      for(var i in txt){
        var t = txt[i].substr(0,1).toUpperCase();
        t += txt[i].substr(1,txt[i].length - 1).toLowerCase();
        txt_new.push(t);
      }
      $(this).val(txt_new.join(" "));
    });
  }
}