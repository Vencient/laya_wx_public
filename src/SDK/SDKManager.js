import { WeiXin } from "./WeiXin";
import { OPPOQG } from "./OPPOQG";
class SDKManager {
    is_wx() {
        return typeof wx != 'undefined';
    }
    is_qg() {
        return typeof qg != 'undefined';
    }
    is_mini_game() {
        if (this.sdk)
            return true;
        return false;
    }
    constructor() {
        if (this.is_wx()) {
            this.sdk = WeiXin;
        }
        else if (this.is_qg()) {
            this.sdk = OPPOQG;
        }
        if (this.is_mini_game()) {
            this.VideoAdsType = this.sdk.VideoAdsType;
            this.BannerAdsType = this.sdk.BannerAdsType;
            this.banners = new Banners(this.sdk.BannerAdsType);
            this.cloud_config_url = this.sdk.cloud_config_url;
            this.YouziType = this.sdk.YouziType;
        }
        else {
            this.VideoAdsType = WeiXin.VideoAdsType;
            this.BannerAdsType = WeiXin.BannerAdsType;
            this.banners = new Banners(WeiXin.BannerAdsType);
            this.cloud_config_url = WeiXin.cloud_config_url;
            this.YouziType = WeiXin.YouziType;
        }
    }
    instantiateBannerAtBottomCenter(bannerAdsID) {
        if (this.sdk) {
            return this.sdk.instantiateBannerAtBottomCenter(bannerAdsID);
        }
        else {
            return WeiXin.instantiateBannerAtBottomCenter(bannerAdsID);
        }
    }
    instantiateRewardedVideo(_adunitId, success, error, failed) {
        if (this.sdk) {
            return this.sdk.instantiateRewardedVideo(_adunitId, success, error, failed);
        }
    }
    vibrateShort() {
        this.sdk && this.sdk.vibrateShort();
    }
    initYouzi() {
        if (this.sdk) {
            this.sdk.initYouzi(this.sdk.YouziType.appId, this.sdk.YouziType.resVersion, this.sdk.YouziType.miniGamePlatType);
        }
        else {
            WeiXin.initYouzi(WeiXin.YouziType.appId, WeiXin.YouziType.resVersion, WeiXin.YouziType.miniGamePlatType);
        }
    }
}
class Banners {
    constructor(bannder_ads) {
        this.banners = [];
        this.p_current = 0;
        this.p_current_mistake = 0;
        this.banner_ads_type = [];
        for (const key in bannder_ads) {
            if (bannder_ads.hasOwnProperty(key)) {
                const type = bannder_ads[key];
                this.banner_ads_type.push(type);
                this.banners.push(null);
            }
        }
        this.banner_ads_type.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
    }
    get_next_exposure_banner() {
        let b = this.banners[this.p_current];
        if (b) {
            b.destroy();
        }
        this.banners[this.p_current] = sdk_manager.instantiateBannerAtBottomCenter(this.banner_ads_type[this.p_current]);
        let p_before = this.p_current;
        this.p_current = (this.p_current + 1) % this.banners.length;
        return this.banners[p_before];
    }
    get_next_mistake_touch_banner() {
        let p_before = this.p_current_mistake;
        this.p_current_mistake = (this.p_current_mistake + 1) % this.banners.length;
        return this.banners[p_before];
    }
}
export let sdk_manager = new SDKManager();
sdk_manager.banners.get_next_exposure_banner();
