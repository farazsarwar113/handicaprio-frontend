"use strict";
angular.module('minovateApp').factory('toastService', function (toastr) {
  var openedToasts = [];

  function success(title,msg) {
    var options = {
      position: 'toast-top-right',
      type: 'success',
      iconClass: {name:'success'},
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: true,
      tapToDismiss: true,
      closeHtml: '<i class="fa fa-times"></i>'
    };

    var toast = toastr[options.type](msg,title, {
      iconClass: 'toast-'+options.iconClass.name + ' ' + 'bg-'+options.iconClass.name,
      closeButton: true
    });

    openedToasts.push(toast);


  }

  function error(title,msg) {
    var options = {
      position: 'toast-top-right',
      type: 'error',
      iconClass: {name:'error'},
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: true,
      tapToDismiss: true,
      closeHtml: '<i class="fa fa-times"></i>'
    };

    var toast = toastr[options.type](msg,title, {
      iconClass: 'toast-'+options.iconClass.name + ' ' + 'bg-'+options.iconClass.name,
      closeButton: true
    });

    openedToasts.push(toast);
  }

  function info(title,msg){
    var options = {
      position: 'toast-top-right',
      type: 'info',
      iconClass: {name:'info'},
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: true,
      tapToDismiss: true,
      closeHtml: '<i class="fa fa-times"></i>'
    };

    var toast = toastr[options.type](msg,title, {
      iconClass: 'toast-'+options.iconClass.name + ' ' + 'bg-'+options.iconClass.name,
      closeButton: true
    });

    openedToasts.push(toast);
  }

  return {
    success:success,
    error:error,
    info:info
  };


});
