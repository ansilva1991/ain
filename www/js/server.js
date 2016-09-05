var Server = {
  ACCESSIN_URL: 'http://192.168.0.110:4000',
  last_ajax: undefined,
  getMyServer: function(){
    return localStorage.my_server;
  },
  send: function(opts){
    route = opts.route.join('/');

    var data = opts.data;
    data.k = '0987654321';
    data.uuid = localStorage.uuid;
    data.auth_code = PrivateData.get('current_auth_code');
    console.log('send:' + JSON.stringify(data));
    data = Security.encrypt(data);

    return $.ajax({
      type: 'POST',
      url: route,
      data:{ a: data },
      async: true,
      beforeSend : function(xhr){
        xhr.callback_tmp = opts.callback
      },
      timeout: 30000,
      complete: function(xhr,status){
        console.log(xhr);
        if(xhr.status == 200 && xhr.responseText != ""){
          var data = Security.decrypt(xhr.responseText);
          xhr.callback_tmp(data, true)
        }else{
          xhr.callback_tmp({}, false)
        }
      }
    });
  }
}