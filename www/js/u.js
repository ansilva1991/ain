var U = {
  t : function(path){
    path = path.split('.');
    var language = PrivateData.get("current_language") || "es";
    if(locales.hasOwnProperty(language)){
      var object = locales[language];
    }else{
      return "translation missing: " + language + "." + path.join('.');
    }

    for(var i in path){
      if(object.hasOwnProperty(path[i])){
        object = object[path[i]]
      }else{
        return "translation missing: " + language + "." + path.join('.');
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