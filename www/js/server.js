var Server = {
  ACCESSIN_URL: 'http://0.0.0.0:4000',
  last_ajax: undefined,
  getMyServer: function(){
    return localStorage.my_server;
  },
  send: function(route, data, callback){
    route = route.join('/');
    data.k = '0987654321';
    data.uuid = localStorage.uuid;
    console.log('send:' + JSON.stringify(data));
    data = Security.encrypt(data);

    return $.ajax({
      type: 'POST',
      url: route,
      data:{ a: data },
      async: true,
      beforeSend : function(xhr){
        xhr.callback_tmp = callback
      },
      complete: function(xhr,status){
        if(xhr.status == 200){
          var data = Security.decrypt(xhr.responseText);
          xhr.callback_tmp(data, true)
        }else{
          xhr.callback_tmp({}, false)
        }
      }
    });
  }
}