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
  },
  scrollToInputFocus : function(selector_css){
    $(selector_css).scrollTop(($(selector_css).scrollTop() + $(':focus').offset().top) - window.innerHeight + 60);
  }
}