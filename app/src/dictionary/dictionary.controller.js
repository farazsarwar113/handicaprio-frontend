angular.module('minovateApp')

.controller('WordsCtrl',function ($scope,r_words,$uibModal,dataService,$state, $mdDialog, toastService, DTOptionsBuilder, DTColumnDefBuilder) {

  $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
  $scope.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(0).notSortable(),
    DTColumnDefBuilder.newColumnDef(1),
    DTColumnDefBuilder.newColumnDef(2),
    DTColumnDefBuilder.newColumnDef(3).notSortable()
  ];


  var words = r_words.data;
  if(words == null)
  {
    words = [];
  }
  console.log(words);
  $scope.words = words;
  $scope.advanceShow = false;
  $scope.showArchive = false;

  console.log($scope.words);

  $scope.currentPath = $state.current.name;

  $scope.open = function(size) {

    var modalInstance = $uibModal.open({
      templateUrl: 'CreateClientModal.html',
      controller: modalController,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };



  function modalController($scope,$uibModalInstance,dataService) {
    $scope.word = {};
    $scope.ok = function () {
      var formdata = {
        name: $scope.client.name,
        url_slug: $scope.client.url_slug,
        email: $scope.client.email,
        address_line_1: $scope.client.address1,
        address_line_2: $scope.client.address2,
        city: $scope.client.city,
        state: $scope.client.state,
        zip_code: $scope.client.zipcode,
        country: $scope.client.country,
        phone: $scope.client.phone,
        website: $scope.client.website,
        bio: $scope.client.bio
      };
      dataService.words.create(formdata).then(function (res) {
        console.log(res.data);
        if(words == null)
        {
          words = [];
        }
        words.push(res.data);
        $uibModalInstance.close();
      }, function (err) {
        console.log(err);
      })
    };

    $scope.cancel = function (event) {
      event.stopPropagation();
      event.preventDefault();
      $uibModalInstance.dismiss('cancel');
    };
  }


  $scope.showDeleteDialog = function(ev,word,index) {
    ev.stopPropagation();
    ev.preventDefault();
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .title('Would you like to delete '+ word.word +'?')
      .content('All the data regarding '+word.word+' will be Archived.')
      .ok('Confirm')
      .cancel('Cancel')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      dataService.words.delete(word._id).then(function (res) {
        console.log(res);
        if(!res.success){
          toastService.error('Error', res.message);
        }
        else {
          console.log($scope.words);
        }
      },function (err) {
        console.log(err);
      });
    }, function() {
      //cancel button clicked
    });
  };

  $scope.showAddDialog = function(ev,selectedClient, index) {
      ev.stopPropagation();
      ev.preventDefault();
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .content('Would you like to add this client back?')
        .ariaLabel('add client')
        .ok('Confirm')
        .cancel('Cancel')
        .targetEvent(ev);
    console.log(selectedClient.deleted);
    if(selectedClient.deleted == true)
    {
        var formdata = {
            _id: selectedClient._id,
            deleted: false
        };
    }

      $mdDialog.show(confirm).then(function() {
        dataService.client.update(formdata).then(
          function(res){
            console.log(res);
            if(!res.success){
                toastService.error('Error', res.message);
            }
            else{
                selectedClient.deleted = res.data.deleted;
              console.log(res.data.deleted);
              console.log($scope.words);
            }
            //$scope.clients[$scope.clients.indexOf(client)]
          },
          function(err){
            console.log(err);
          });
      }, function() {
        //cancel button clicked
      });
    };

  $scope.changeTab = function(index){
    if(index == 2){
      $scope.showArchive = true;
    }
  }

});
