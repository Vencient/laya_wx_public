import { ui } from '../../ui/layaMaxUI';
import { YouziData, YOUZI_UI_ID, BI_PAGE_TYPE } from './YouziData';
export default class YouziMoreGameH extends ui.youzi.Youzi_MoreGameHUI {
    constructor() {
        super();
        this.morelistHDatas = [];
        this.mainItemHExposure = {};
        this.fisrtShow = false;
        this.isCreate = false;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.curFront = true;
        this.curBack = false;
        this.stopAction = false;
        this.isClick = false;
        this.dur = 5000;
        if (Laya.stage.width / Laya.stage.height >= 1.9) {
            this.MoreGameUI.scale(0.9, 0.9);
            var scaleW = this.MoreGameUI.width * 0.9;
            var scaleH = this.MoreGameUI.height * 0.9;
            this.MoreGameUI.pos(Laya.stage.width / 2 - scaleW / 2, Laya.stage.height / 2 - scaleH / 2);
        }
        else {
            this.centerX = 0;
            this.centerY = 0;
        }
        this.visible = false;
        this.MoreGameUI.visible = false;
        this.moreGameList.scrollBar.hide = true;
    }
    setYouziPosition(x, y) {
        this.centerX = NaN;
        this.centerY = NaN;
        this.MoreGameUI.pos(x, y);
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
        var isMoreGameOk = YouziData.isDataLoaded();
        if (isMoreGameOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    showMoreGameUI() {
        if (this.isCreate && !this.visible) {
            this.visible = true;
            this.moreGameList.mouseThrough = false;
            this.MoreGameUI.visible = true;
            this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGameH, { uiVisible: true });
            this.starMoreGameAction();
            if (!this.fisrtShow) {
                this.fisrtShow = true;
                this.checkExposure();
            }
        }
    }
    onBtnCloseClicked() {
        this.stopMoreGameAcion();
        this.visible = false;
        this.moreGameList.mouseThrough = true;
        this.MoreGameUI.visible = false;
        this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGameH, { uiVisible: false });
    }
    initShow() {
        this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);
        if (YouziData.moreDatas.length > 0) {
            this.morelistHDatas = YouziData.moreDatas;
            var arr = [];
            var pRecord = null;
            for (var i = 0; i < this.morelistHDatas.length; i++) {
                pRecord = this.morelistHDatas[i];
                arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
            }
            this.moreGameList.array = arr;
            this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender);
            this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent);
            this.isCreate = true;
            this.notifyUIComplete(YOUZI_UI_ID.Youzi_MoreGameH, { complete: true });
        }
    }
    onListRender(item, index) {
        // var icon : Laya.Image = item.getChildByName('icon') as Laya.Image;
        // icon.loadImage(this.morelistDatas[index].iconImg);
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.MoreGameUI.visible) {
            if (!this.mainItemHExposure[this.morelistHDatas[index].appid]) {
                // console.log('---send log moregame index:',index);
                YouziData.sendExposureLog(this.morelistHDatas[index], BI_PAGE_TYPE.MORE);
                this.mainItemHExposure[this.morelistHDatas[index].appid] = 1;
            }
        }
    }
    stopMoreGameAcion() {
        this.stopAction = true;
    }
    starMoreGameAction() {
        this.moreGameListAutoScroll();
    }
    moreGameListAutoScroll() {
        if (!this.MoreGameUI.visible)
            return;
        if (this.morelistHDatas.length <= 12) {
            return;
        }
        this.stopAction = false;
        this.dur = (this.morelistHDatas.length - 12) * 3000;
        //当前是从前面开始向后，但是未到后面
        if (this.curFront && !this.curBack) {
            this.listTweenToEnd();
        }
        else if (!this.curFront && this.curBack) {
            this.listTweenToStart();
        }
    }
    listTweenToEnd() {
        if (!this.stopAction) {
            var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
            this.moreGameList.tweenTo(this.morelistHDatas.length - 1, this.dur, endCompletHandler);
        }
        this.curFront = true;
        this.curBack = false;
    }
    listTweenToStart() {
        if (!this.stopAction) {
            var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
            this.moreGameList.tweenTo(0, this.dur, startCompleteHandler);
        }
        this.curFront = false;
        this.curBack = true;
    }
    moreGameListMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            if (!this.isClick) {
                this.isClick = true;
                console.log("当前选择的moreGameH索引：" + index);
                var tmpData = this.morelistHDatas[index];
                tmpData.locationIndex = BI_PAGE_TYPE.MORE;
                YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                // var curTime = YouziData.YouziDateFtt("yyyyMMdd",new Date());
                // localStorage.setItem(tmpData.appid, curTime); 
            }
        }
        else if (e.type == 'mouseover') {
        }
    }
    startOtherCall() {
        this.isClick = false;
        this.starMoreGameAction();
    }
    checkExposure() {
        if (this.MoreGameUI.visible) {
            for (var i = 0; i < this.morelistHDatas.length; i++) {
                var infoData = this.morelistHDatas[i];
                if (!this.mainItemHExposure[infoData.appid]) {
                    this.mainItemHExposure[infoData.appid] = 1;
                    YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.MORE);
                }
                if (i >= 11) {
                    break;
                }
            }
        }
    }
}
