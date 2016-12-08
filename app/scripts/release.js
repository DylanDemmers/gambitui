'use strict';
function getApi(url) {
    var api = { adal: {} };
    if (url.match('dev')) {
        //development
        api.path = "http://gambitapidev.azurewebsites.net/api/";                            //Api path used in services
        api.adal.tenant = "bskassocates.onmicrosoft.com";                                   //Host of authentication services
        api.adal.clientId = '44cc7fbb-f80d-4513-8879-5b0aab96982d';                         //Gambit API key
        api.notify = "dev";                                                                 
    } 
    /*else if (url.match('staging')) {
        //staging
        api.path = "http://forgeapistaging.azurewebsites.net/api/";
        api.adal.tenant = "bskassocates.onmicrosoft.com";
        api.adal.clientId = '540eceeb-f703-4924-9bcf-24d50c98a92b';
        api.notify = "staging";
    } else if (url.match('demo')) {
        //demo
        api.path = "http://forgeapidemo.azurewebsites.net/api/";
        api.adal.tenant = "bskassocates.onmicrosoft.com";
        api.adal.clientId = '';
        api.notify = "demo";
    } else if (url.match('bskassociates')) {
        //production
        api.path = "http://prodigyapi.azurewebsites.net/api/";
        api.adal.tenant = "bskassocates.onmicrosoft.com";
        api.adal.clientId = '';
        api.notify = "";
    }*/ 
    else {
        //local
        api.path = "http://gambitapidev.azurewebsites.net/api/";                            //Used for no deployed working version
        api.adal.tenant = "bskassocates.onmicrosoft.com";                                   //Host of authenticatoin services
        api.adal.clientId = '44cc7fbb-f80d-4513-8879-5b0aab96982d';                         //Api key for development
    }


    return api;
}
console.log(window.location);                                                               //Logs The location of url for debugging purposes 
var api = getApi(window.location.href);                                                     //sets the api varibale to the approprate conditional cause