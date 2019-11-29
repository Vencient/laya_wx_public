import { compareVersion } from "./SDK_Util";
import YouziCenter, { MiniGame_Plat_Type } from "./Youzi/YouziCenter";
class _oppo_qg {
    constructor() {
        this.cloud_config_url = "";
        this.systemInfo = {
            brand: '',
            model: '',
            pixelRatio: 0,
            screenWidth: 0,
            screenHeight: 0,
            windowWidth: 0,
            windowHeight: 0,
            language: '',
            system: '',
            platform: '',
            platformVersion: 0,
            notchHeight: 0,
        };
        this.videoEnabled = true;
        this.VideoAdsType = {
            continue: '139752',
        };
        this.BannerAdsType = {
            Banner_1: '139747',
            Banner_2: '139747',
            Banner_3: '139747',
            Banner_4: '139747',
            Banner_5: '139747',
        };
        this.YouziType = {
            appId: '30220768',
            resVersion: '1.00.00',
            miniGamePlatType: MiniGame_Plat_Type.OppoMiniGame,
        };
        if (this.is_qg()) {
            this.systemInfo = this.getSystemInfoSync();
            qg.initAdService({
                appId: "30220768",
                isDebug: false,
                success: function (res) {
                    console.log("success");
                },
                fail: function (res) {
                    console.log("fail:" + res.code + res.msg);
                },
                complete: function (res) {
                    console.log("complete");
                }
            });
        }
    }
    is_qg() {
        return typeof qg != 'undefined';
    }
    getSystemInfoSync() {
        return qg.getSystemInfoSync();
    }
    getLaunchOptionsSync() {
        return qg.getLaunchOptionsSync();
    }
    navigateToMiniProgram(param) {
        if (!this.is_qg() && param.success) {
            param.success();
        }
        qg.navigateToMiniProgram(param);
    }
    instantiateBannerAtBottomCenter(bannerAdsID) {
        let _width = 300;
        var ad = OPPOQG.createBannerAd({
            posId: bannerAdsID,
        });
        ad.onError((err) => { console.log('banner ads 加载失败'); });
        return ad;
    }
    createBannerAd(param) {
        if (this.systemInfo) {
            if (compareVersion(this.systemInfo.platformVersion.toString(), '1031') < 0 || !this.is_qg()) {
                return {
                    hide() { }, destroy() { }, show() { }, onError() { }, offError() { }
                };
            }
        }
        return qg.createBannerAd(param);
    }
    createRewardedVideoAd(param) {
        if (this.systemInfo) {
            if (compareVersion(this.systemInfo.platformVersion.toString(), '1031') < 0) {
                return {
                    load() { return new Promise((resolve, reject) => { resolve(); }); },
                    show() { return new Promise((resolve, reject) => { resolve(); }); },
                    onClose() { }, offClose() { }, onError() { }, offError() { }, onLoad() { }, offLoad() { },
                };
            }
        }
        return qg.createRewardedVideoAd(param);
    }
    vibrateShort() {
        this.is_qg() && qg.vibrateShort({});
    }
    instantiateRewardedVideo(_adunitId, success, error, failed) {
        let video = this.createRewardedVideoAd({ posId: _adunitId });
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
        video.load();
        video.onLoad(function () {
            console.log("激励视频加载成功");
            video.show();
        });
    }
    initYouzi(appId, resVersion, miniGamePlatType) {
        YouziCenter.getInstance().initYouzi(appId, resVersion, miniGamePlatType);
    }
}
export var OPPOQG = new _oppo_qg();
