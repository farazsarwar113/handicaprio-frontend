angular.module('minovateApp')
  .controller('WordCtrl', function ($scope, $rootScope, $localStorage, jwtHelper, $log, $timeout, dataService,toastService, Upload, $window, r_word, $uibModal,$mdDialog, $state, $stateParams,DTOptionsBuilder, DTColumnDefBuilder) {

  //   $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
  //   $scope.dtColumnDefsSite = [
  //     DTColumnDefBuilder.newColumnDef(0),
  //     DTColumnDefBuilder.newColumnDef(1),
  //     DTColumnDefBuilder.newColumnDef(2),
  //     DTColumnDefBuilder.newColumnDef(3),
  //     DTColumnDefBuilder.newColumnDef(4),
  //     DTColumnDefBuilder.newColumnDef(5),
  //     DTColumnDefBuilder.newColumnDef(6).notSortable()
  //   ];
  //   $scope.dtColumnDefs = [
  //     DTColumnDefBuilder.newColumnDef(0),
  //     DTColumnDefBuilder.newColumnDef(1),
  //     DTColumnDefBuilder.newColumnDef(2),
  //     DTColumnDefBuilder.newColumnDef(3),
  //     DTColumnDefBuilder.newColumnDef(4).notSortable(),
  //     DTColumnDefBuilder.newColumnDef(5),
  //     DTColumnDefBuilder.newColumnDef(6)
  //   ];
  //   $scope.dtColumnDefsAsset = [
  //     DTColumnDefBuilder.newColumnDef(0),
  //     DTColumnDefBuilder.newColumnDef(1),
  //     DTColumnDefBuilder.newColumnDef(2),
  //     DTColumnDefBuilder.newColumnDef(3),
  //     DTColumnDefBuilder.newColumnDef(4),
  //     DTColumnDefBuilder.newColumnDef(5).notSortable()
  //   ];

  //   var modalInstance = {};
  //   var selectedTask = {};
       var word = r_word.data;
  //   var assets = r_client.data.assets;

  //   $rootScope.socket.emit('create-client-room',client._id);
  //   var selectedSite = {};

       $scope.word = word;


       dataService.allAdverb.get().then(function(res){
        $scope.words = [];
        for(var i=0; i < 5; i++){
          $scope.words.push(res.data[i]);
        }
        console.log($scope.words);
       },function(err){
        console.log(err);
       })

  //   $scope.assets = assets;
  //   console.log(client);
  //   console.log(assets);

  //   $scope.page = {
  //     title: 'Profile Page',
  //     subtitle: 'Place subtitle here...'
  //   };
  //   $scope.allUsers = false;
  //   $scope.openTasks = 0;
  //   $scope.shareUser = {
  //     shared_with : '',
  //     role : 0
  //   };
  //   for(var i = 0;i < client.tasks.length; i++){
  //     if(client.tasks[i].status == 0){
  //       $scope.openTasks++;
  //     }
  //   }
  //   console.log($scope.openTasks);

  //   $scope.pass = {
  //     oldpass: "",
  //     newpass: "",
  //     newpass2: ""
  //   };

  //   $scope.showSharedUsers = true;
  //   $scope.post = {};
  //   $scope.showReply = false;
  //   $scope.clientId = client._id;
  //   $scope.siteId = $stateParams.sid;

  //   $scope.tasks = [];

  //   for (var taskIndex = 0; taskIndex < client.tasks.length; taskIndex++){
  //     var obj = {
  //         _id: client.tasks[taskIndex]._id,
  //         completed: client.tasks[taskIndex].completed,
  //         created_on: client.tasks[taskIndex].created_on,
  //         description: client.tasks[taskIndex].description,
  //         due_date: client.tasks[taskIndex].due_date,
  //         priority: client.tasks[taskIndex].priority,
  //         status: client.tasks[taskIndex].status,
  //         title: client.tasks[taskIndex].title,
  //         client_id: client._id,
  //         client_name: client.name,
  //         client: client
  //       };
  //     $scope.tasks.push(obj);
  //   }
  //   for (var index = 0; index < client.sites.length; index++) {
  //     if (client.sites[index].deleted) {
  //       client.sites.splice(index,1);
  //     }
  //     else{
  //       for (var siteIndex = 0; siteIndex < client.sites[index].tasks.length; siteIndex++){
  //         var obj = {
  //           _id: client.sites[index].tasks[siteIndex]._id,
  //           completed: client.sites[index].tasks[siteIndex].completed,
  //           created_on: client.sites[index].tasks[siteIndex].created_on,
  //           description: client.sites[index].tasks[siteIndex].description,
  //           due_date: client.sites[index].tasks[siteIndex].due_date,
  //           priority: client.sites[index].tasks[siteIndex].priority,
  //           status: client.sites[index].tasks[siteIndex].status,
  //           title: client.sites[index].tasks[siteIndex].title,
  //           client_id: client._id,
  //           client_name: client.name,
  //           site_id: client.sites[index]._id,
  //           site_name: client.sites[index].building_name,
  //           site: client.sites[index]
  //         };
  //         $scope.tasks.push(obj);
  //       }
  //     }
  //     for(var aindex = 0; aindex < client.sites[index].assets.length; aindex++){
  //       for (var assetIndex = 0; assetIndex < client.sites[index].assets[aindex].tasks.length; assetIndex++){
  //         var obj = {
  //           _id: client.sites[index].assets[aindex].tasks[assetIndex]._id,
  //           completed: client.sites[index].assets[aindex].tasks[assetIndex].completed,
  //           created_on: client.sites[index].assets[aindex].tasks[assetIndex].created_on,
  //           description: client.sites[index].assets[aindex].tasks[assetIndex].description,
  //           due_date: client.sites[index].assets[aindex].tasks[assetIndex].due_date,
  //           priority: client.sites[index].assets[aindex].tasks[assetIndex].priority,
  //           status: client.sites[index].assets[aindex].tasks[assetIndex].status,
  //           title: client.sites[index].assets[aindex].tasks[assetIndex].title,
  //           client_id: client._id,
  //           client_name: client.name,
  //           site_id: client.sites[index]._id,
  //           site_name: client.sites[index].building_name,
  //           asset_id: client.sites[index].assets[aindex]._id,
  //           asset_name: client.sites[index].assets[aindex].name,
  //           asset: client.sites[index].assets[aindex]
  //         };
  //         $scope.tasks.push(obj);
  //     }
  //   }
  // }

  //   console.log($scope.tasks);
  //   // Get All Users to attach them to add user drop down for shared
  //   dataService.user.getAll().then(
  //     function(res){
  //       console.log(res);
  //       $scope.allUsers = res.data;
  //     },
  //     function(err){
  //       console.log(err);
  //     });

  //   $scope.submitNote = function () {
  //     var comment = $scope.post.comment;
  //     console.log(comment);
  //     if(comment != '' || comment != undefined){
  //       var formdata = {
  //         'comment' : comment
  //       };
  //       dataService.client.note.post($scope.clientId,formdata).then(
  //       function(res){
  //           //console.log(res.data);
  //         client.notes.push(res.data);

  //           $rootScope.socket.emit('client-note-added', res.data);

  //           $scope.post.comment = '';
  //       },
  //       function(err){
  //           console.log(err);
  //       });
  //     }
  //   };

  //   $rootScope.socket.on('client-note-added',function (data) {
  //     console.log('response from socket');
  //     console.log(data);
  //     client.notes.push(data);
  //     $scope.$apply();
  //   });

  //   $scope.showDeleteNoteDialog = function(ev,noteId,noteIndex) {
  //     ev.stopPropagation();
  //     ev.preventDefault();
  //     // Appending dialog to document.body to cover sidenav in docs app
  //     var confirm = $mdDialog.confirm()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .content('Would you like to delete this Note?')
  //       .ariaLabel('Lucky day')
  //       .ok('Confirm')
  //       .cancel('Cancel')
  //       .targetEvent(ev);
  //     $mdDialog.show(confirm).then(function() {
  //       dataService.client.note.delete($scope.clientId, noteId).then(
  //         function(res){
  //           console.log(res);
  //           client.notes.splice(noteIndex,1);
  //         },
  //         function(err){
  //           console.log(err);
  //         });
  //     }, function() {
  //       //cancel button clicked
  //     });
  //   };

  //   $scope.submitReply = function (note, index) {
  //     var reply = note.reply;
  //     console.log(reply);
  //     if(reply != '' || reply != undefined){
  //       var formdata = {
  //         'comment' : reply
  //       };
  //       dataService.client.note.reply.post($scope.clientId, note._id, formdata).then(
  //         function(res){
  //           console.log(res);
  //           client.notes[index].replies.push(res.data);

  //           $rootScope.socket.emit('client-reply-added', res.data,index);
  //           note.showReply = false;
  //           note.reply = '';
  //         },
  //         function(err){
  //           console.log(err);
  //         });
  //     }
  //   };
  //   $rootScope.socket.on('client-reply-added',function (data,index) {
  //     console.log('response from socket');
  //     console.log(data);

  //     client.notes[index].replies.push(data);
  //     $scope.$apply();
  //   });

  //   $scope.showDeleteReplyDialog = function(ev,noteId, replyId,noteIndex,replyIndex) {
  //     ev.stopPropagation();
  //     ev.preventDefault();
  //     // Appending dialog to document.body to cover sidenav in docs app
  //     var confirm = $mdDialog.confirm()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .content('Would you like to delete this comment?')
  //       .ariaLabel('Lucky day')
  //       .ok('Confirm')
  //       .cancel('Cancel')
  //       .targetEvent(ev);
  //     $mdDialog.show(confirm).then(function() {
  //       dataService.client.note.reply.delete($scope.clientId, noteId, replyId).then(
  //         function(res){
  //           console.log(res);
  //           client.notes[noteIndex].replies.splice(replyIndex,1);
  //         },
  //         function(err){
  //           console.log(err);
  //         });
  //     }, function() {
  //       //cancel button clicked
  //     });
  //   };


  //   //static progress bar
  //   $scope.sites = [{
  //     title: 'Graphic layout for client',
  //     priority: {
  //       value: 1,
  //       title: 'High Priority'
  //     },
  //     status: 42,
  //     chart: {
  //       data: [1, 3, 2, 3, 5, 6, 8, 5, 9, 8],
  //       color: '#cd97eb'
  //     }
  //   }, {
  //     title: 'Make website responsive',
  //     priority: {
  //       value: 3,
  //       title: 'Low Priority'
  //     },
  //     status: 89,
  //     chart: {
  //       data: [2, 5, 3, 4, 6, 5, 1, 8, 9, 10],
  //       color: '#a2d200'
  //     }
  //   }, {
  //     title: 'Clean html/css/js code',
  //     priority: {
  //       value: 1,
  //       title: 'High Priority'
  //     },
  //     status: 23,
  //     chart: {
  //       data: [5, 6, 8, 2, 1, 6, 8, 4, 3, 5],
  //       color: '#ffc100'
  //     }
  //   }, {
  //     title: 'Database optimization',
  //     priority: {
  //       value: 2,
  //       title: 'Normal Priority'
  //     },
  //     status: 56,
  //     chart: {
  //       data: [2, 9, 8, 7, 5, 9, 2, 3, 4, 2],
  //       color: '#16a085'
  //     }
  //   }, {
  //     title: 'Database migration',
  //     priority: {
  //       value: 3,
  //       title: 'Low Priority'
  //     },
  //     status: 48,
  //     chart: {
  //       data: [3, 5, 6, 2, 8, 9, 5, 4, 3, 2],
  //       color: '#1693A5'
  //     }
  //   }, {
  //     title: 'Email server backup',
  //     priority: {
  //       value: 2,
  //       title: 'Normal Priority'
  //     },
  //     status: 10,
  //     chart: {
  //       data: [7, 8, 6, 4, 3, 5, 8, 9, 10, 7],
  //       color: '#3f4e62'
  //     }
  //   }, {
  //     title: 'Graphic layout for client',
  //     priority: {
  //       value: 1,
  //       title: 'High Priority'
  //     },
  //     status: 42,
  //     chart: {
  //       data: [1, 3, 2, 3, 5, 6, 8, 5, 9, 8],
  //       color: '#cd97eb'
  //     }
  //   }, {
  //     title: 'Make website responsive',
  //     priority: {
  //       value: 3,
  //       title: 'Low Priority'
  //     },
  //     status: 89,
  //     chart: {
  //       data: [2, 5, 3, 4, 6, 5, 1, 8, 9, 10],
  //       color: '#a2d200'
  //     }
  //   }, {
  //     title: 'Clean html/css/js code',
  //     priority: {
  //       value: 1,
  //       title: 'High Priority'
  //     },
  //     status: 23,
  //     chart: {
  //       data: [5, 6, 8, 2, 1, 6, 8, 4, 3, 5],
  //       color: '#ffc100'
  //     }
  //   }, {
  //     title: 'Database optimization',
  //     priority: {
  //       value: 2,
  //       title: 'Normal Priority'
  //     },
  //     status: 56,
  //     chart: {
  //       data: [2, 9, 8, 7, 5, 9, 2, 3, 4, 2],
  //       color: '#16a085'
  //     }
  //   }, {
  //     title: 'Database migration',
  //     priority: {
  //       value: 3,
  //       title: 'Low Priority'
  //     },
  //     status: 48,
  //     chart: {
  //       data: [3, 5, 6, 2, 8, 9, 5, 4, 3, 2],
  //       color: '#1693A5'
  //     }
  //   }, {
  //     title: 'Email server backup',
  //     priority: {
  //       value: 2,
  //       title: 'Normal Priority'
  //     },
  //     status: 10,
  //     chart: {
  //       data: [7, 8, 6, 4, 3, 5, 8, 9, 10, 7],
  //       color: '#3f4e62'
  //     }
  //   }];




  //   function modalController($scope, $uibModalInstance, dataService) {
  //     $scope.site = {};
  //     if(selectedSite._id){
  //       console.log('if');
  //       $scope.site = selectedSite;

  //     }
  //     $scope.addSite = function (index) {
  //       var formdata = $scope.site;
  //       console.log(formdata);
  //       if ($scope.site._id) {
  //         dataService.sites.update(r_client.data._id,$scope.site._id, formdata).then(function (res) {
  //           console.log(res);
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else{
  //             client.sites[index] = formdata;
  //           }
  //           $uibModalInstance.close();
  //         },function (err) {
  //             console.log(err);
  //         });
  //       }
  //       else {
  //         dataService.sites.create(r_client.data._id, formdata).then(function (res) {
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else{
  //             console.log(res.data);
  //             client.sites.push(res.data);
  //           }

  //           $uibModalInstance.close();
  //         }, function (err) {
  //           console.log(err);
  //         })
  //       }
  //     };

  //     $scope.cancel = function () {
  //       $uibModalInstance.dismiss('cancel');
  //     };


  //     // $scope.clear = function () {
  //     //   $scope.site.startdate = null;
  //     // };

  //     // Disable weekend selection
  //     $scope.disabled = function (date, mode) {
  //       return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  //     };

  //     $scope.toggleMin = function () {
  //       $scope.minDate = $scope.minDate ? null : new Date();
  //     };


  //     $scope.open = function ($event) {
  //       $event.preventDefault();
  //       $event.stopPropagation();
  //       $scope.site.startdate = new Date();
  //       $scope.opened = true;
  //     };

  //     $scope.dateOptions = {
  //       formatYear: 'yy',
  //       startingDay: 1,
  //       'class': 'datepicker'
  //     };

  //     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  //     $scope.format = $scope.formats[0];

  //   }


  //   $scope.myImage = '';
  //   $scope.myCroppedImage = '';
  //   $scope.changeProfileClicked = false;

  //   var handleFileSelect = function (evt) {
  //     var file = evt.currentTarget.files[0];
  //     var reader = new FileReader();
  //     reader.onload = function (evt) {
  //       $scope.$apply(function ($scope) {
  //         $scope.myImage = evt.target.result;
  //       });
  //     };
  //     reader.readAsDataURL(file);
  //     $scope.changeProfileClicked = true;

  //   };
  //   console.log(document.querySelector('#fileInput'));







  //   // Scope Functions

  //   // site modal //
  //   $scope.openSiteModal = function (site) {
  //     selectedSite = site;
  //     if (!selectedSite) {
  //       selectedSite = {};
  //     }
  //     var modalInstance = $uibModal.open({
  //       templateUrl: 'CreateSiteModal.html',
  //       controller: modalController
  //     });

  //     modalInstance.result.then(function (selectedItem) {
  //       $scope.selected = selectedItem;
  //     }, function () {
  //       console.log('Modal dismissed at: ' + new Date());
  //     });
  //   };

  //   // asset modal //
  //    $scope.addAsset = function (asset) {
  //     selectedAsset = asset;
  //     if (!selectedAsset) {
  //       selectedAsset = {};
  //     }
  //     var modalInstance = $uibModal.open({
  //       templateUrl: 'CreateAssetModal.html',
  //       controller: addAssetController,
  //       resolve: {
  //         r_clientData: function () {
  //           console.log($scope.client);
  //           console.log($scope.assets);
  //           var data= {
  //             client: $scope.client,
  //             assets: $scope.assets
  //           }
  //           return data;
  //         }
  //       }
  //     });

  //     modalInstance.result.then(function (selectedItem) {
  //       $scope.selected = selectedItem;
  //     }, function () {
  //       console.log('Modal dismissed at: ' + new Date());
  //     });
  //   };

  //   // asset modal controller //
  //   function addAssetController($scope, $uibModalInstance, dataService , r_clientData) {
  //     console.log(r_clientData);
  //     var client = r_clientData.client;
  //     $scope.assets = r_clientData.assets;
  //     $scope.client = client;
  //     console.log($scope.client);

  //     $scope.asset = {};
  //     if(selectedAsset._id){
  //       console.log('if');
  //       $scope.asset = selectedAsset;

  //     }
  //     $scope.selectSite = function(site){
  //       $scope.selectedSite = site;
  //       console.log($scope.selectedSite);
  //     };
  //     $scope.ok = function (index) {
  //       var formdata = $scope.asset;
  //       console.log(formdata);
  //       console.log($scope.asset.site_id);
  //       if ($scope.asset._id) {
  //         dataService.site.asset.update($scope.client._id,$scope.asset.site_id,$scope.asset._id, formdata).then(function (res) {
  //           console.log(res);
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else{
  //            $scope.client.sites.assets[index] = formdata;
  //           }
  //           $uibModalInstance.close();
  //         },function (err) {
  //             console.log(err);
  //         });
  //       }
  //       else {
  //         dataService.site.asset.create($scope.client._id, $scope.selectedSite._id, formdata).then(function (res) {
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else{
  //             console.log(res.data);
  //             $scope.assets.push(res.data);
  //           }

  //           $uibModalInstance.close();
  //         }, function (err) {
  //           console.log(err);
  //         })
  //       }
  //     };

  //     $scope.cancel = function () {
  //       $uibModalInstance.dismiss('cancel');
  //     };


  //     // $scope.clear = function () {
  //     //   $scope.site.startdate = null;
  //     // };

  //     // Disable weekend selection
  //     $scope.disabled = function (date, mode) {
  //       return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  //     };

  //     $scope.toggleMin = function () {
  //       $scope.minDate = $scope.minDate ? null : new Date();
  //     };


  //     $scope.open = function ($event) {
  //       $event.preventDefault();
  //       $event.stopPropagation();
  //       $scope.asset.purchase_date = new Date();
  //       $scope.opened = true;
  //     };

  //     $scope.dateOptions = {
  //       formatYear: 'yy',
  //       startingDay: 1,
  //       'class': 'datepicker'
  //     };

  //     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  //     $scope.format = $scope.formats[0];

  //   }


  //   $scope.upload = function (dataUrl, name) {
  //     //console.log(dataUrl);
  //     console.log($scope.client);
  //     Upload.upload({
  //       url: $rootScope.apiUrl+'/file/upload/clients/' + $scope.client._id,
  //       transformRequest: angular.identity,
  //       "headers": {
  //         'x-access-token': $localStorage.token,
  //         'Content-Type': undefined
  //       },
  //       data: {
  //         'file': Upload.dataUrltoBlob(dataUrl, name)
  //       }
  //     }).then(function (response) {
  //       console.log(response);
  //       $timeout(function () {
  //         $scope.changeProfileClicked = false;
  //         $window.location.reload();
  //       }, 500);
  //     }, function (response) {
  //       console.log('2');
  //       console.log(response);
  //     }, function (evt) {
  //       console.log('3');
  //       console.log(evt);
  //     });

  //     //
  //     // $timeout(function () {
  //     //   $scope.changeProfileClicked = false;
  //     //   $window.location.reload();
  //     // },1000);
  //   };

  //   $scope.changeTab = function (tab) {
  //     if (tab === 2) {
  //       console.log(tab);
  //       angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
  //     }

  //     if(tab === 3){
  //       /*dataService.user.getAll().then(
  //        function(res){
  //        console.log(res);
  //        $scope.allUsers = res.data;
  //        },
  //        function(err){
  //        console.log(err);
  //        });*/
  //     }
  //   };

  //   $scope.saveClientData = function () {
  //     dataService.client.update($scope.client).then(function (res) {
  //       console.log(res.data);
  //       if(!res.success){
  //         toastService.error('Error', res.message);
  //       }
  //       else{
  //         toastService.success("Cool !", "Client updated Successfully");
  //       }
  //     }, function (err) {
  //       console.log(err);
  //     });
  //   };

  //   $scope.showDeleteDialog1 = function(ev,client,index) {
  //   ev.stopPropagation();
  //   ev.preventDefault();
  //   // Appending dialog to document.body to cover sidenav in docs app
  //   var confirm = $mdDialog.confirm()
  //     .parent(angular.element(document.querySelector('#popupContainer')))
  //     .title('Would you like to delete '+ client.name +'?')
  //     .content('All the data regarding '+client.name+' will be deleted.')
  //     .ariaLabel('Lucky day')
  //     .ok('Confirm')
  //     .cancel('Cancel')
  //     .targetEvent(ev);
  //   $mdDialog.show(confirm).then(function() {
  //     dataService.clients.deleteClient(client).then(function (res) {
  //       console.log(res);
  //       if(!res.success){
  //         toastService.error('Error', res.message);
  //       }
  //       else {
  //         clients.splice(index,1);
  //       }
  //     },function (err) {
  //       console.log(err);
  //     });
  //   }, function() {
  //     //cancel button clicked
  //   });
  // };

  //   $scope.changePass = function () {
  //     var data = {
  //       username: $rootScope.user.username,
  //       password: $scope.pass.oldpass,
  //       newpassword: $scope.pass.newpass
  //     };

  //     dataService.auth.updatepass(data).then(
  //       function (res) {
  //         console.log(res);
  //         if(!res.success){
  //           toastService.error('Error', res.message);
  //         }
  //         else {
  //           toastService.success("Success", "Password Changed Successfully");
  //           $scope.pass = {
  //             oldpass: "",
  //             newpass: "",
  //             newpass2: ""
  //           };
  //         }

  //       },
  //       function (err) {
  //         console.log(err);
  //         toastService.error("Error", "Old Password is incorrect");
  //       });
  //   };

  //   $scope.deleteAccount = function () {
  //     dataService.clients.deleteClient($scope.client).then(function (res) {
  //       console.log(res);
  //       if(!res.success){
  //         toastService.error('Error', res.message);
  //       }
  //       else{
  //         toastService.success("Success", "Client Deleted");
  //         $state.go('app.client');
  //       }

  //     }, function (err) {
  //       console.log(err);
  //     });
  //   };

  //   $scope.showDeleteDialog = function(ev,cid,site,index) {
  //     // Appending dialog to document.body to cover sidenav in docs app
  //     var confirm = $mdDialog.confirm()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .title('Would you like to delete '+ site.name +'?')
  //       .content('All the data regarding '+site.name+' will be deleted.')
  //       .ariaLabel('Lucky day')
  //       .ok('Confirm')
  //       .cancel('Cancel')
  //       .targetEvent(ev);
  //     $mdDialog.show(confirm).then(function() {
  //       dataService.sites.delete(cid, site._id).then(function (res) {
  //         console.log(res.data);
  //         if(!res.success){
  //           toastService.error('Error', res.message);
  //         }
  //         else {
  //           client.sites.splice(index, 1);
  //         }

  //       }, function (err) {
  //         console.log(err);
  //       });
  //     }, function() {
  //       //cancel button clicked
  //     })
  //   };

  //   // asset delete dialog //
  //   $scope.showDeleteAssetDialog = function(ev,asset,index) {
  //     // Appending dialog to document.body to cover sidenav in docs app
  //     var confirm = $mdDialog.confirm()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .title('Would you like to asset '+ asset.name +'?')
  //       .content('All the data regarding '+asset.name+' will be deleted.')
  //       .ariaLabel('Lucky day')
  //       .ok('Confirm')
  //       .cancel('Cancel')
  //       .targetEvent(ev);
  //     $mdDialog.show(confirm).then(function() {
  //       dataService.site.asset.delete($scope.client._id, asset.site_id ,asset._id).then(function (res) {
  //         console.log(res.data);
  //         if(!res.success){
  //           toastService.error('Error', res.message);
  //         }
  //         else {
  //           $scope.assets.splice(index, 1);
  //         }

  //       }, function (err) {
  //         console.log(err);
  //       });
  //     }, function() {
  //       //cancel button clicked
  //     })
  //   };

  //   $scope.addSharedUser = function(){
  //     console.log($scope.shareUser);
  //     dataService.clients.share.post($scope.client._id,$scope.shareUser).then(
  //     function(res){
  //         console.log(res);
  //       if(res.success){
  //         $scope.client.shared_with = res.data;
  //         toastService.success('Success', "New User Added to client");
  //         $scope.shareUser = {
  //           shared_with : '',
  //           role : 0
  //         };
  //       }
  //       else{
  //         toastService.error('Error', res.message);
  //       }
  //     },
  //     function(err){
  //         console.log(err);
  //     });
  //   };

  //   $scope.changeRole = function(user){
  //     user.role = ++user.role % 2;
  //     console.log(user.role);
  //     var data = {
  //       shared_with : user.user_id.username,
  //       role : user.role
  //     };
  //     console.log(data);

  //     dataService.clients.share.put($scope.client._id,data).then(
  //     function(res){
  //         console.log(res);
  //     },
  //     function(err){
  //         console.log(err);
  //     });
  //   };

  //   $scope.removeUser = function(user, index){
  //     var data = {
  //       shared_with : user.user_id.username
  //     };
  //     console.log(data);

  //     dataService.clients.share.delete($scope.client._id,data).then(
  //       function(res){
  //         console.log(res);
  //         if(res.success){
  //           $scope.client.shared_with.splice(index,1);
  //         }
  //       },
  //       function(err){
  //         console.log(err);
  //       });
  //   };

  //   $scope.addTask = function(task){
  //     event.stopPropagation();
  //     event.preventDefault();
  //     selectedTask = task;
  //     if(!task){
  //       selectedTask ={};
  //     }
  //     console.log('hit');
  //     modalInstance = $uibModal.open({
  //       templateUrl: 'src/common/task/addTasksModal.html',
  //       controller : 'addTaskModal',
  //       resolve: {
  //         r_selectedTask : selectedTask,
  //         r_data: {
  //           client : client,
  //           assets: assets
  //         }
  //       }
  //     });

  //     modalInstance.result.then(function (res) {
  //       console.log(res);
  //       if(res != undefined){
  //         //client.tasks.push(res.data);
  //       }

  //     }, function () {
  //       $log.info('Modal dismissed at: ' + new Date());
  //     });
  //   };

  //   $scope.showDeleteTaskDialog = function(ev,cid,sid,aid,task,index) {
  //     // Appending dialog to document.body to cover sidenav in docs app
  //     var confirm = $mdDialog.confirm()
  //       .parent(angular.element(document.querySelector('#popupContainer')))
  //       .title('Would you like to delete '+ task.title +'?')
  //       .content('All the data regarding '+ task.title +' will be deleted.')
  //       .ariaLabel('Lucky day')
  //       .ok('Confirm')
  //       .cancel('Cancel')
  //       .targetEvent(ev);
  //     $mdDialog.show(confirm).then(function() {
  //       console.log(cid,sid,aid);
  //       if(cid && !sid && !aid){
  //         dataService.client.task.delete(cid, task._id).then(function (res) {
  //           console.log(res.data);
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else {
  //             client.tasks.splice(index, 1);
  //           }
  //         }, function (err) {
  //           console.log(err);
  //         });
  //       }
  //       else if(cid && sid && !aid){
  //         dataService.site.task.delete(cid,sid, task._id).then(function (res) {
  //           console.log(res.data);
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else {
  //             //client.tasks.splice(index, 1);
  //           }
  //         }, function (err) {
  //           console.log(err);
  //         });
  //       }
  //       else if(cid && sid && aid){
  //         dataService.asset.task.delete(cid,sid,aid, task._id).then(function (res) {
  //           console.log(res.data);
  //           if(!res.success){
  //             toastService.error('Error', res.message);
  //           }
  //           else {
  //             //client.tasks.splice(index, 1);
  //           }
  //         }, function (err) {
  //           console.log(err);
  //         });
  //       }
        
  //     }, function() {
  //       //cancel button clicked
  //     })
  //   };
  });
