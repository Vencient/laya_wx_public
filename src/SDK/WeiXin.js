import { compareVersion } from "./SDK_Util";
import YouziCenter, { MiniGame_Plat_Type } from "./Youzi/YouziCenter";
export function catchWxNotDefined(obj) {
    return function (target, propertyKey, descriptor) {
        let f = descriptor.value;
        descriptor.value = function (...args) {
            try {
                return f.apply(this, args);
            }
            catch (e) {
                if (typeof wx == 'undefined') {
                    console.log(" wx is not defined " + target.name + " " + propertyKey + " can not be called");
                    if (obj) {
                        return obj;
                    }
                }
                else {
                    console.log('wx api error');
                    console.log(e.message);
                    return null;
                }
            }
        };
    };
}
//微信接口适配器
class _weixin {
    constructor() {
        this.cloud_config_url = "https://xiazai.qi-guo.cn/spear_io_3d/config_wx.json";
        this.systemInfo = {
            brand: '',
            model: '',
            pixelRatio: 0,
            screenWidth: 0,
            screenHeight: 0,
            windowWidth: 0,
            windowHeight: 0,
            statusBarHeight: 0,
            language: '',
            version: '',
            system: '',
            platform: '',
            fontSizeSetting: 0,
            SDKVersion: '',
            benchmarkLevel: 0,
        };
        this.videoEnabled = true;
        this.shareTicket = "";
        this._shared_timestamp = Date.now();
        this._shared_cnt = 0;
        this._shared_failure_cnt = 0;
        this.height = 0;
        this.width = 0;
        this.isiPhoneXSeries = false;
        this._shareChanceInverse = 3;
        this._gameReadyBonusTimes = 0;
        this.VideoAdsType = {
            continue: 'adunit-32718990893a6134',
        };
        this.BannerAdsType = {
            Banner_1: 'adunit-93cf152aa8e5b40f',
            Banner_2: 'adunit-93cf152aa8e5b40f',
            Banner_3: 'adunit-93cf152aa8e5b40f',
            Banner_4: 'adunit-93cf152aa8e5b40f',
            Banner_5: 'adunit-93cf152aa8e5b40f',
        };
        this.YouziType = {
            appId: 'wxbd9c93b8b318d5b1',
            resVersion: '1.00.07',
            miniGamePlatType: MiniGame_Plat_Type.WeChat,
        };
        this.systemInfo = this.getSystemInfoSync();
        this.height = this.systemInfo.screenHeight;
        this.width = this.systemInfo.screenWidth;
        this.setIsiPhoneXSeries(this.height, this.width);
        this.showShareMenu({
            withShareTicket: true
        });
    }
    is_wx() {
        return typeof wx != 'undefined';
    }
    postMessage(param) {
        wx.postMessage(param);
    }
    loadSubpackage(param) {
        if (compareVersion(this.systemInfo.SDKVersion, '2.1.0') >= 0) {
            wx.loadSubpackage(param);
        }
        else {
            param.success(null);
        }
    }
    showModal(arg0) {
        return wx.showModal(arg0);
    }
    getUpdateManager() {
        return wx.getUpdateManager();
    }
    getSetting(arg) {
        wx.getSetting(arg);
    }
    onShow(cb) {
        wx.onShow(cb);
    }
    ;
    offShow(cb) {
        wx.offShow(cb);
    }
    ;
    getUserInfo(arg) {
        wx.getUserInfo(arg);
    }
    getNetworkType(arg) {
        wx.getNetworkType(arg);
    }
    getLocation(arg) {
        wx.getLocation(arg);
    }
    request(arg) {
        wx.request(arg);
    }
    getStorageSync(key) {
        wx.getStorageSync(key);
    }
    setStorageSync(key, data) {
        wx.setStorageSync(key, data);
    }
    onHide(arg) {
        wx.onHide(arg);
    }
    onError(arg) {
        wx.onError(arg);
    }
    is_iphone_6() {
        return this.systemInfo.model.indexOf('iPhone 6') >= 0;
    }
    showShareMenu(obj) {
        wx.showShareMenu(obj);
    }
    getSystemInfoSync() {
        return wx.getSystemInfoSync();
    }
    createInnerAudioContext() {
        return wx.createInnerAudioContext();
    }
    login(arg0) {
        return wx.login(arg0);
    }
    createUserInfoButton(arg0) {
        return wx.createUserInfoButton(arg0);
    }
    getLaunchOptionsSync() {
        return wx.getLaunchOptionsSync();
    }
    updateShareMenu(param) {
        return wx.updateShareMenu(param);
    }
    navigateToMiniProgram(param) {
        if (!this.is_wx() && param.success) {
            param.success();
        }
        wx.navigateToMiniProgram(param);
    }
    instantiateBannerAtBottomLeft(bannerAdsID) {
        //return { hide() { }, destroy() { }, show() { }, onResize() { }, offResize() { }, onError() { }, offError() { }, style: { left: 0, top: 0, width: 0, } };
        var ad = WeiXin.createBannerAd({
            adUnitId: bannerAdsID,
            style: { left: 0, top: 0, width: 300, }
        });
        var resize = () => {
            ad.style.left = WeiXin.width - ad.style.realWidth + 0.1;
            ad.style.top = WeiXin.height - ad.style.realHeight + 0.1;
            ad.offResize(resize);
        };
        ad.onResize(resize);
        ad.onError(() => { });
        return ad;
    }
    instantiateBannerAtBottomCenter(bannerAdsID) {
        //return {hide(){},destroy(){},show(){},onResize(){},offResize(){},onError(){},offError(){},style:{left:0,top:0,width:0,}};
        let _width = WeiXin.width;
        var ad = WeiXin.createBannerAd({
            adUnitId: bannerAdsID,
            style: { left: 0, top: 0, width: _width, }
        });
        var resize = () => {
            ad.style.left = (WeiXin.width - ad.style.realWidth) / 2 + 0.1;
            if (WeiXin.isiPhoneXSeries) {
                ad.style.top = WeiXin.height - ad.style.realHeight - 20 + 0.1;
            }
            else {
                ad.style.top = WeiXin.height - ad.style.realHeight + 0.1;
            }
            // ad.hide();
            ad.offResize(resize);
        };
        ad.onResize(resize);
        ad.onError(() => { });
        return ad;
    }
    set_banner_up_pixel(ad, px) {
        ad.style.width = WeiXin.width;
        let height = (ad.style.realHeight / ad.style.realWidth) * WeiXin.width;
        ad.style.left = (WeiXin.width - WeiXin.width) / 2;
        if (!WeiXin.isiPhoneXSeries) {
            ad.style.top = WeiXin.height - height - px;
        }
        else {
            ad.style.top = WeiXin.height - height - px - 10;
        }
    }
    createBannerAd(param) {
        return {
            hide() { }, destroy() { }, show() { }, onResize() { }, offResize() { }, onError() { }, offError() { }, style: { left: 0, top: 0, width: 0, }
        };
        if (this.systemInfo) {
            if (compareVersion(this.systemInfo.SDKVersion, '2.0.1') < 0) {
                return {
                    hide() { }, destroy() { }, show() { }, onResize() { }, offResize() { }, onError() { }, offError() { }, style: { left: 0, top: 0, width: 0, }
                };
            }
        }
        return wx.createBannerAd(param);
    }
    createRewardedVideoAd(param) {
        if (this.systemInfo) {
            if (compareVersion(this.systemInfo.SDKVersion, '2.0.1') < 0) {
                return {
                    load() { return new Promise((resolve, reject) => { resolve(); }); },
                    show() { return new Promise((resolve, reject) => { resolve(); }); },
                    onClose() { }, offClose() { }, onError() { }, offError() { }
                };
            }
        }
        return wx.createRewardedVideoAd(param);
    }
    getShareInfo(param) {
        wx.getShareInfo(param);
    }
    onShareAppMessage(f) {
        wx.onShareAppMessage(f);
    }
    offShareAppMessage(f) {
        wx.offShareAppMessage(f);
    }
    setIsiPhoneXSeries(h, w) {
        var screen = [{ h: 812, w: 375 }, { h: 896, w: 414 }];
        for (let n of screen) {
            if (n.h == h && n.w == w)
                this.isiPhoneXSeries = true;
        }
    }
    shareAppMessage(sharedMsg) {
        this._shared_timestamp = Date.now();
        wx.shareAppMessage(sharedMsg);
    }
    vibrateShort() {
        wx.vibrateShort();
    }
    getShareSuccessStatus() {
        this._shared_cnt++;
        if (Date.now() - this._shared_timestamp < 3000) {
            return false;
        }
        // if(this._shared_cnt<=1){
        //     return false;
        // }
        return true;
    }
    instantiateRewardedVideo(_adunitId, success, error, failed) {
        let video = this.createRewardedVideoAd({ adUnitId: _adunitId });
        let onClose = (res) => {
            if (res.isEnded) {
                success();
            }
            else if (failed) {
                failed();
            }
            video.offClose(onClose);
            video.offError(onError);
        };
        let onError = (res) => {
            error(res.errMsg);
            video.offClose(onClose);
            video.offError(onError);
        };
        video.onClose(onClose);
        video.onError(onError);
        video.load().then(() => {
            video.show();
        })
            .catch(err => console.log(err.errMsg));
    }
    getAbleToShowVideo() {
        var c = this._gameReadyBonusTimes;
        return c % this._shareChanceInverse != 0;
    }
    getBonus() {
        this._gameReadyBonusTimes++;
    }
    initYouzi(appId, resVersion, miniGamePlatType) {
        YouziCenter.getInstance().initYouzi(appId, resVersion, miniGamePlatType);
    }
}
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "postMessage", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "loadSubpackage", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "showModal", null);
__decorate([
    catchWxNotDefined({ onCheckForUpdate: () => { }, onUpdateReady: () => { }, onUpdateFailed: () => { }, })
], _weixin.prototype, "getUpdateManager", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getSetting", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "onShow", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "offShow", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getUserInfo", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getNetworkType", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getLocation", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "request", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getStorageSync", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "setStorageSync", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "onHide", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "onError", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "showShareMenu", null);
__decorate([
    catchWxNotDefined({
        screenWidth: 0,
        screenHeight: 0,
        model: ""
    })
], _weixin.prototype, "getSystemInfoSync", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "createInnerAudioContext", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "login", null);
__decorate([
    catchWxNotDefined({ show: () => { }, hide: () => { }, destroy: () => { }, onTap: () => { }, offTap: () => { }, })
], _weixin.prototype, "createUserInfoButton", null);
__decorate([
    catchWxNotDefined({
        scene: 1001,
        query: {},
        shareTicket: "",
        referrerInfo: {}
    })
], _weixin.prototype, "getLaunchOptionsSync", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "updateShareMenu", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "navigateToMiniProgram", null);
__decorate([
    catchWxNotDefined({
        hide() { }, destroy() { }, show() { }, onResize() { }, offResize() { }, onError() { }, offError() { }, style: { left: 0, top: 0, width: 0, }
    })
], _weixin.prototype, "instantiateBannerAtBottomLeft", null);
__decorate([
    catchWxNotDefined({
        hide() { }, destroy() { }, show() { }, onResize() { }, offResize() { }, onError() { }, offError() { }, style: { left: 0, top: 0, width: 0, }
    })
], _weixin.prototype, "createBannerAd", null);
__decorate([
    catchWxNotDefined({
        load() { return new Promise((resolve, reject) => { resolve(); }); },
        show() { return new Promise((resolve, reject) => { resolve(); }); },
        onClose() { }, offClose() { }, onError() { }, offError() { }
    })
], _weixin.prototype, "createRewardedVideoAd", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "getShareInfo", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "onShareAppMessage", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "offShareAppMessage", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "shareAppMessage", null);
__decorate([
    catchWxNotDefined()
], _weixin.prototype, "vibrateShort", null);
export var WeiXin = new _weixin();
