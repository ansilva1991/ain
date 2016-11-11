var Server = {
  ACCESSIN_URL: 'http://accessin.net',
  TEST_ACCESSIN_URL: 'http://test.accessin.net:4000',
  DEV_URL: 'http://192.168.1.55:4000',
  last_ajax: undefined,
  upload_success_callback: function(){},
  upload_error_callback: function(){},
  getMyServer: function(){
    return localStorage.my_server;
  },
  send: function(opts){
    route = opts.route.join('/');

    var data = opts.data;
    data.k = '0987654321';
    data.uuid = localStorage.uuid;
    data.auth_code = PrivateData.get('current_auth_code');
    data.version = app.VERSION;
    console.log('send to:' + route);
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
        console.log(xhr.status);
        console.log(xhr);
        if(xhr.status == 200 && xhr.responseText != ""){
          var data = Security.decrypt(xhr.responseText);
          xhr.callback_tmp(data, true)
        }else if(xhr.status == 999){
          PrivateData.clear();
          app.loadScreen(app.SCREENS.LOGIN);
        }else if(xhr.status == 998){
          app.loadScreen(app.SCREENS.DEPRECATED);
        }else{
          xhr.callback_tmp({}, false)
        }
      }
    });
  },
  download: function(opts){
    console.log('init download:' + opts.from);
    var fileTransfer = new FileTransfer();
    fileTransfer.onprogress = opts.progress;
    fileTransfer.extra_data = opts.extra_data;
    fileTransfer.download(opts.from, app.getMyPath() + opts.to,opts.success, opts.error,false);

    return fileTransfer;
  },
  upload: function(opts){
    route = opts.route.join('/');
    var options = new FileUploadOptions();
      options.fileKey = opts.file_key || "file";
      options.fileName = opts.file_name;
      options.mimeType = opts.file_mime_type || "image/jpeg";

      var data = opts.data || new Object();
      data.k = '0987654321';
      data.uuid = localStorage.uuid;
      data.auth_code = PrivateData.get('current_auth_code');
      data.version = app.VERSION;
      console.log('upload:' + JSON.stringify(data));
      data = Security.encrypt(data);

      options.params = { a: data };
      options.chunkedMode = false;

      Server.upload_callback = opts.callback;

      var ft = new FileTransfer();
      ft.a = 2;
      ft.upload(opts.file_uri, route,function(r){
        var data = Security.decrypt(r.response);
        Server.upload_callback(data,true);
      },function(){
        Server.upload_callback({},false);
      }, options);
  },
  serverUrl: function(type){
    return type != 'test' ? (app.in_dev() ? Server.DEV_URL : Server.ACCESSIN_URL) : Server.TEST_ACCESSIN_URL;
  }
}
