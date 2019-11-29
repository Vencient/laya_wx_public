import { ui } from "../../ui/layaMaxUI";
import { YouziData, BI_PAGE_TYPE, YOUZI_UI_ID, BANNER_TYPE } from "./YouziData";
/**
 * 底部游戏banner推荐，类似于微信banner广告
 */
export default class YouziGameBanner extends ui.youzi.Youzi_GameBannerViewUI {
    constructor(isOffSwitch, switchTime) {
        super();
        this.isOffSwitch = false;
        this.bannerType = BANNER_TYPE.GAME;
        this.switchTime = 5;
        this.gameBannerItemExposure = {};
        this.startSwitchIndex = 0;
        this.isHide = false;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.pos(Laya.stage.width / 2 - this.GameBannerList.width / 2, Laya.stage.height - this.GameBannerList.height);
        this.visible = false;
        this.GameBannerList.scrollBar.hide = true;
        this.isOffSwitch = isOffSwitch;
        this.switchTime = switchTime < 5 ? 5 : switchTime;
        this.switchTime *= 1000;
    }
    setYouziPosition(x, y) {
        this.pos(x, y);
    }
    //传入UI是否创建完成通知对象
    setUICompleteCall(uiCompleteCall) {
        this.uiCompleteCallCopy = uiCompleteCall;
    }
    /**通知UI已创建完毕
     * @param uiID {界面编号}
     * @param msg {通知：是个json，方便后期能够随时增加新的信息}
     */
    notifyUIComplete(uiID, msg) {
        if (this.uiCompleteCallCopy) {
            this.uiCompleteCallCopy(uiID, msg);
        }
    }
    offUICompleteCall() {
        if (this.uiCompleteCallCopy) {
            this.uiCompleteCallCopy = null;
        }
    }
    setUIStateCall(uiStateCall) {
        this.uiStateCallCopy = uiStateCall;
    }
    /**通知UI界面状态
     * @param uiID {界面编号}
     * @param msg {通知：是个json，方便后期能够随时增加新的信息}
     */
    notifyUIState(uiID, msg) {
        if (this.uiStateCallCopy) {
            this.uiStateCallCopy(uiID, msg);
        }
    }
    offUIStateCall() {
        if (this.uiStateCallCopy) {
            this.uiStateCallCopy = null;
        }
    }
    onEnable() {
        var gameBannerDatasOk = YouziData.isDataLoaded();
        if (gameBannerDatasOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    initShow() {
        if (YouziData.gameBannerDatas.length <= 0)
            return;
        this.loadGameBannerList();
        this.creatGameBannerTimerLoop();
        if (!this.isOffSwitch) {
            YouziData.addBanner(this);
        }
    }
    loadGameBannerList() {
        this.GameBannerList.repeatX = YouziData.gameBannerDatas.length;
        var gameBannerArr = [];
        for (var gameBannerArrI = 0; gameBannerArrI < YouziData.gameBannerDatas.length; gameBannerArrI++) {
            gameBannerArr.push({ infoData: YouziData.gameBannerDatas[gameBannerArrI] });
        }
        this.GameBannerList.mouseHandler = new Laya.Handler(this, this.onGameBannerItemMouseEvent);
        this.GameBannerList.dataSource = gameBannerArr;
        for (var gameBannerDataI = 0; gameBannerArrI < YouziData.gameBannerDatas.length; gameBannerDataI++) {
            var gameBannerImage = this.GameBannerList.getCell(gameBannerDataI).getChildByName('icon');
            gameBannerImage.loadImage(YouziData.gameBannerDatas[gameBannerDataI].bannerImg);
        }
        this.notifyUIComplete(YOUZI_UI_ID.Youzi_GameBanner, { complete: true });
    }
    creatGameBannerTimerLoop() {
        Laya.timer.loop(this.switchTime, this, this.updateGameBaner);
    }
    clearGameBannerTimerLoop() {
        Laya.timer.clear(this, this.updateGameBaner);
    }
    updateGameBaner(e) {
        if (YouziData.gameBannerDatas.length <= 1) {
            this.checkExposure();
            return;
        }
        else {
            this.startSwitchIndex = this.GameBannerList.startIndex + 1;
            this.GameBannerList.scrollTo(this.startSwitchIndex >= this.GameBannerList.length ? 0 : this.startSwitchIndex);
            this.checkExposure();
        }
    }
    checkExposure() {
        if (this.visible) {
            var data = YouziData.gameBannerDatas[this.startSwitchIndex];
            if (!this.gameBannerItemExposure[data.appid]) {
                this.gameBannerItemExposure[data.appid] = 1;
                YouziData.sendExposureLog(data, BI_PAGE_TYPE.GAME);
            }
        }
    }
    onGameBannerItemMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            console.log("当前选择的gamebannerlist索引：" + index);
            var tmpData = YouziData.gameBannerDatas[index];
            tmpData.locationIndex = BI_PAGE_TYPE.GAME;
            tmpData.type = 5;
            YouziData.startOtherGame(tmpData, null);
        }
        else if (e.type == 'mouseover') {
        }
    }
    showBanner() {
        if (this) {
            this.visible = true;
            if (this.isHide) {
                this.isHide = false;
                this.creatGameBannerTimerLoop();
            }
            this.notifyUIState(YOUZI_UI_ID.Youzi_GameBanner, { uiVisible: true });
        }
    }
    hideBanner() {
        if (this) {
            this.isHide = true;
            this.visible = false;
            this.clearGameBannerTimerLoop();
            this.notifyUIState(YOUZI_UI_ID.Youzi_GameBanner, { uiVisible: false });
        }
    }
    destroySelf() {
        if (this) {
            this.removeSelf();
        }
    }
}
