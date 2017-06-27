var U = {
  t : function(path){
    path = path.split('.');
    if(locales.hasOwnProperty(PrivateData.get("current_language") || "es")){
      var object = locales[PrivateData.get("current_language") || "es"];
    }else{
      return "translation missing: " + path;
    }

    for(var i in path){
      if(object.hasOwnProperty('key')){
        object = object[path[i]]
      }else{
        return "translation missing: " + path;
      }
    }

    return object;
  },
  translate_screen : function(css_rule){
    $(css_rule + " [data-t]").each(function(){
      $(this).html(U.t($(this).data('t')));
    });
  }
};