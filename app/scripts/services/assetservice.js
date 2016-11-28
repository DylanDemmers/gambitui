(function(){ 


'use strict';

/**
 * @ngdoc service
 * @name gambituiApp.assetService
 * @description
 * # assetService
 * Factory in the gambituiApp.
 */


/*-------------------------------------------------------------------Asset Service Setup--------------------------------------------------------------------------- */
angular.module('gambituiApp')
  .factory('assetService', assetService);
  
      function assetService ($http) {
                return{
                  getAssets: getAssets,     //register get Function
                  postAsset: postAsset,   //register post function
                }




/*-------------------------------------------------------------------Get Assets--------------------------------------------------------------------------- */
                function getAssets(){ 
                  return $http.get("http://gambitapidev.azurewebsites.net/api/ITAssets")
                  .then(success)
                  .catch(failure)
                }

                function success(response){
                  return response.data;
                }
                function failure(error){
                  console.error(error.message);
                }

/*-------------------------------------------------------------------POST Assets--------------------------------------------------------------------------- */                

                function postAsset(Asset){
                  return $http({
                    url: "http://gambitapidev.azurewebsites.net/api/ITAssets",
                    method: 'POST',
                    data: Asset,
                    headers:{'Content-Type': 'application/json'}
                  })
                  .then(postAssetComplete)
                  .catch(postAssetFailure)

                  function postAssetComplete(res,data){
                    toastr.success('New Asset was added');
                    return res.data;
                  }

                  function postAssetFailure(err){
                    toastr.warning('New Asset wasn\'t added');
                  }    
      
     }
            
  };
   

 })();
