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
                  deleteAsset: deleteAsset,
                  editAsset: editAsset,
                }

/*-------------------------------------------------------------------Get Assets-------------------------------------------------------------------------------------- */
                function getAssets(){ 
                  return $http.get(api.path + "ITAssets")
                  .then(success)
                  .catch(failure)
                }

                function success(response){
                  return response.data;
                }
                function failure(error){
                  console.error(error.message);
                }

/*-------------------------------------------------------------------POST Assets--------------------------------------------------------------------------------------- */                

                function postAsset(Asset){
                  return $http({
                    url: api.path + "ITAssets",
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

/*------------------------------------------------------Edit Call to DB----------------------------------------------------------------------------------*/ 

            function editAsset(updatedAsset) {
                return $http({
                            url: api.path + "ITAssets/" + updatedAsset.id,
                            method: 'PUT',
                            data: updatedAsset,
                            headers: {'Content-Type': 'application/json'}
                        })
                        .then(editAssetComplete)
                        .catch(editAssetFailed);

                function editAssetComplete(res, data) {}

                function editAssetFailed(err) {
                    toastr.warning('Asset wasn\'t updated');
                }
            }


/*------------------------------------------------------Delete Call to DB---------------------------------------------------------------*/ 


                 function deleteAsset(Asset) {
                        return $http({
                            url: "http://gambitapidev.azurewebsites.net/api/ITAssets/" + Asset.id,
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'}
                        })
                            .then(deleteAssetComplete)
                            .catch(deleteAssetFailed);

                        function deleteAssetComplete(req) {                                             
                            toastr.error('Asset Deleted');
                            return req;
                        }

                        function deleteAssetFailed(err) {
                            toastr.warning('Couldn\'t delete Asset');
                        }
                } // closing tag for deleteBranch
            
  };
   

 })();
