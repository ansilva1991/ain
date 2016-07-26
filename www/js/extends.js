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
  scrollToInputFocus : function(selector_css){
    $(selector_css).scrollTop(($(selector_css).scrollTop() + $(':focus').offset().top) - window.innerHeight + 60);
  }
}