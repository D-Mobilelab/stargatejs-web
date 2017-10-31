var Promise = require('promise-polyfill');

/**
 * StargateJS Web interface
 * @namespace Stargate
 * @global
 */

module.exports = new function(){
    this.device = function() {};

    this.conf = {
        getWebappStartUrl: function() {},
        getWebappOrigin: function() {},
        getManifestValue: function() {}
    };

    /**
    * @ngdoc function
    * @name initialize
    * @methodOf Stargate
    *
    * @description Initialize Stargate
    *
    * @param {Object} options configuration object
    * @param {Function} callback called when initialization is finished,
    * you can use also the promise resolution. The callback will be called with
    * an argument that indicate if we're running inside the hybrid app.
    * 
    * @return {Promise} promise will be resolved when start is completed, rejected if failed.
    * The promise will be resolved with an argument that indicate if we're running inside the hybrid app.
    *
    */
    this.initialize = function(options, callback) {
        if (typeof callback === 'function') {
            callback(false);
        }
        return Promise.resolve(false);
    };

    /**
    * @ngdoc function
    * @name isInitialized
    * @methodOf Stargate
    *
    * @description initialization status
    *
    * @return {Boolean} true when Stargate is initialized: initialize method finished execution
    */
    this.isInitialized = function() {
        return true;
    };
    
    /**
    * @ngdoc function
    * @name isOpen
    * @methodOf Stargate
    *
    * @description communication channel status
    *
    * @return {Boolean} true when Stargate is ready
    */
    this.isOpen = function() {
        return false;
    };
    
    /**
    * @ngdoc function
    * @name isHybrid
    * @methodOf Stargate
    *
    * @description hybrid status
    *
    * @return {Boolean} true when running as native app
    */
    this.isHybrid = function() {
        return false;
    };

    /**
    * @ngdoc function
    * @name openUrl
    * @methodOf Stargate
    *
    * @description openUrl
    *
    * @return {Boolean} true when url as been opened
    */
    this.openUrl = function() {
        return false;
    };

    /**
    * @ngdoc function
    * @name googleLogin
    * @methodOf Stargate
    *
    * @description googleLogin
    *
    */
    this.googleLogin = function() {};

    /**
    * @ngdoc function
    * @name addListener
    * @methodOf Stargate
    *
    * @description addListener
    *
    */
    this.addListener = function() {};

    /**
    * @ngdoc function
    * @name checkConnection
    * @methodOf Stargate
    *
    * @description checkConnection
    *
    */
    this.checkConnection = function() {};

    /**
    * @ngdoc function
    * @name getDeviceID
    * @methodOf Stargate
    *
    * @description getDeviceID
    *
    */
    this.getDeviceID = function() {};

    /**
    * @ngdoc function
    * @name goToLocalIndex
    * @methodOf Stargate
    *
    * @description goToLocalIndex
    *
    */
    this.goToLocalIndex = function() {};

    /**
    * @ngdoc function
    * @name goToWebIndex
    * @methodOf Stargate
    *
    * @description goToWebIndex
    *
    */
    this.goToWebIndex = function() {};

    /**
    * @ngdoc function
    * @name getVersion
    * @methodOf Stargate
    *
    * @description getVersion
    *
    */
    this.getVersion = function() {
        return '1.0-web';
    };

    /**
    * @ngdoc function
    * @name getAppInformation
    * @methodOf Stargate
    *
    * @description getAppInformation
    *
    */
    this.getAppInformation = function() {};

    /**
    * @ngdoc function
    * @name getAvailableFeatures
    * @methodOf Stargate
    *
    * @description getAvailableFeatures
    *
    */
    this.getAvailableFeatures = function() {};

    /**
    * @ngdoc function
    * @name setAnalyticsCallback
    * @methodOf Stargate
    *
    * @description setAnalyticsCallback
    *
    */
    this.setAnalyticsCallback = function() {};

    /**
    * @ngdoc function
    * @name setConversionDataCallback
    * @methodOf Stargate
    *
    * @description setConversionDataCallback
    *
    */
    this.setConversionDataCallback = function() {};


    this.iaplight = {
        initialize: function() {
            return Promise.reject('Not implemented');
        },
        restore: function() {
            return Promise.reject('Not implemented');
        },
        getProductInfo: function() {
            return Promise.reject('Not implemented');
        },
        subscribe: function() {
            return Promise.reject('Not implemented');
        },
        isSubscribed: function() {
            return Promise.reject('Not implemented');
        },
        getActiveSubscriptionsInfo: function() {
            return Promise.reject('Not implemented');
        }
    };
    
    /**
    * @ngdoc function
    * @name inAppPurchaseSubscription
    * @methodOf Stargate
    *
    * @description inAppPurchaseSubscription
    *
    */
    this.inAppPurchaseSubscription = function() {};

    /**
    * @ngdoc function
    * @name inAppRestore
    * @methodOf Stargate
    *
    * @description inAppRestore
    *
    */
    this.inAppRestore = function() {};

    /**
    * @ngdoc function
    * @name inAppProductInfo
    * @methodOf Stargate
    *
    * @description inAppProductInfo
    *
    */
    this.inAppProductInfo = function() {};
    
    this.push = {
        initialize: function() {
            return Promise.reject('Not implemented');
        },
        setScheduledNotify: function() {
            return Promise.reject('Not implemented');
        }
    };

    /**
    * @ngdoc function
    * @name socialShare
    * @methodOf Stargate
    *
    * @description socialShare
    *
    */
    this.socialShare = function() {};

    /**
    * @ngdoc function
    * @name socialShareAvailable
    * @methodOf Stargate
    *
    * @description socialShareAvailable
    *
    */
    this.socialShareAvailable = function() {};
    
    /**
    * @ngdoc function
    * @name setStatusbarVisibility
    * @methodOf Stargate
    *
    * @description setStatusbarVisibility
    *
    */
    this.setStatusbarVisibility = function() {};
};