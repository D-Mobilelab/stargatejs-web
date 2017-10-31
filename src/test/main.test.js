var main = require('../main');

describe('stargatejs interface', function(){
    it('device is defined', function(){
        expect(typeof main.device).toEqual('function');
    });

    it('conf is defined', function(){
        expect(main.conf).toBeDefined();
    });

    it('conf.getWebappStartUrl is defined', function(){
        expect(typeof main.conf.getWebappStartUrl).toEqual('function');
    });

    it('conf.getWebappOrigin is defined', function(){
        expect(typeof main.conf.getWebappOrigin).toEqual('function');
    });

    it('conf.getManifestValue is defined', function(){
        expect(typeof main.conf.getManifestValue).toEqual('function');
    });

    it('initialize is defined', function(){
        expect(typeof main.initialize).toEqual('function');
    });

    it('initialize promise is called with right status', function(done){
        var result = main.initialize().then(function(hybridStatus){
            expect(hybridStatus).toBe(false);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('initialize callback is called with right status', function(done){
        main.initialize({}, function(hybridStatus){
            expect(hybridStatus).toBe(false);
            done();
        });
    });

    it('isInitialized is defined', function(){
        expect(typeof main.isInitialized).toEqual('function');
    });

    it('isInitialized return true', function(){
        expect(main.isInitialized()).toBe(true);
    });

    it('isOpen is defined', function(){
        expect(typeof main.isOpen).toEqual('function');
    });

    it('isOpen return false', function(){
        expect(main.isOpen()).toBe(false);
    });

    it('isHybrid is defined', function(){
        expect(typeof main.isHybrid).toEqual('function');
    });

    it('isHybrid return false', function(){
        expect(main.isHybrid()).toBe(false);
    });

    it('openUrl is defined', function(){
        expect(typeof main.openUrl).toEqual('function');
    });

    it('openUrl return false', function(){
        expect(main.openUrl()).toBe(false);
    });

    it('googleLogin is defined', function(){
        expect(typeof main.googleLogin).toEqual('function');
    });

    it('addListener is defined', function(){
        expect(typeof main.addListener).toEqual('function');
    });

    it('checkConnection is defined', function(){
        expect(typeof main.checkConnection).toEqual('function');
    });

    it('getDeviceID is defined', function(){
        expect(typeof main.getDeviceID).toEqual('function');
    });

    it('goToLocalIndex is defined', function(){
        expect(typeof main.goToLocalIndex).toEqual('function');
    });

    it('goToWebIndex is defined', function(){
        expect(typeof main.goToWebIndex).toEqual('function');
    });

    it('getVersion is defined', function(){
        expect(typeof main.getVersion).toEqual('function');
    });

    it('getVersion return proper value', function(){
        expect(main.getVersion()).toMatch(/web/);
    });

    it('getAppInformation is defined', function(){
        expect(typeof main.getAppInformation).toEqual('function');
    });

    it('getAvailableFeatures is defined', function(){
        expect(typeof main.getAvailableFeatures).toEqual('function');
    });

    it('setAnalyticsCallback is defined', function(){
        expect(typeof main.setAnalyticsCallback).toEqual('function');
    });

    it('setConversionDataCallback is defined', function(){
        expect(typeof main.setConversionDataCallback).toEqual('function');
    });

    it('iaplight.initialize is defined', function(){
        expect(typeof main.iaplight.initialize).toEqual('function');
    });

    it('iaplight.initialize return a promise', function(done){
        var result = main.iaplight.initialize().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('iaplight.restore is defined', function(){
        expect(typeof main.iaplight.restore).toEqual('function');
    });

    it('iaplight.restore return a promise', function(done){
        var result = main.iaplight.restore().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('iaplight.subscribe is defined', function(){
        expect(typeof main.iaplight.subscribe).toEqual('function');
    });

    it('iaplight.subscribe return a promise', function(done){
        var result = main.iaplight.subscribe().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('iaplight.isSubscribed is defined', function(){
        expect(typeof main.iaplight.isSubscribed).toEqual('function');
    });

    it('iaplight.isSubscribed return a promise', function(done){
        var result = main.iaplight.isSubscribed().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('iaplight.getActiveSubscriptionsInfo is defined', function(){
        expect(typeof main.iaplight.getActiveSubscriptionsInfo).toEqual('function');
    });

    it('iaplight.getActiveSubscriptionsInfo return a promise', function(done){
        var result = main.iaplight.getActiveSubscriptionsInfo().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('iaplight.getProductInfo is defined', function(){
        expect(typeof main.iaplight.getProductInfo).toEqual('function');
    });

    it('iaplight.getProductInfo return a promise', function(done){
        var result = main.iaplight.getProductInfo().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('inAppPurchaseSubscription is defined', function(){
        expect(typeof main.inAppPurchaseSubscription).toEqual('function');
    });

    it('inAppRestore is defined', function(){
        expect(typeof main.inAppRestore).toEqual('function');
    });

    it('inAppProductInfo is defined', function(){
        expect(typeof main.inAppProductInfo).toEqual('function');
    });

    it('push.initialize is defined', function(){
        expect(typeof main.push.initialize).toEqual('function');
    });

    it('push.initialize return a promise', function(done){
        var result = main.push.initialize().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('push.setScheduledNotify is defined', function(){
        expect(typeof main.push.setScheduledNotify).toEqual('function');
    });

    it('push.setScheduledNotify return a promise', function(done){
        var result = main.push.setScheduledNotify().catch(function(errorMsg){
            expect(errorMsg).toMatch(/Not implemented/);
            done();
        });
        expect(typeof result.then).toEqual('function');
    });

    it('socialShare is defined', function(){
        expect(typeof main.socialShare).toEqual('function');
    });

    it('socialShareAvailable is defined', function(){
        expect(typeof main.socialShareAvailable).toEqual('function');
    });

    it('setStatusbarVisibility is defined', function(){
        expect(typeof main.setStatusbarVisibility).toEqual('function');
    });
})