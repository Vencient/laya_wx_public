import { ui } from '../../ui/layaMaxUI';
import { YouziData, YOUZI_UI_ID, BI_PAGE_TYPE } from './YouziData';
export default class YouziMoreGame extends ui.youzi.Youzi_MoreGameUI {
    constructor() {
        super();
        this.morelistDatas = [];
        this.mainItemExposure = {};
        this.fisrtShow = false;
        this.isCreate = false;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.curFront = true;
        this.curBack = false;
        this.stopAction = false;
        this.isClick = false;
        this.dur = 5000;
        this.centerX = 0;
        this.centerY = 0;
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
            this.starMoreGameAction();
            this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGame, { uiVisible: true });
            // if(!this.fisrtShow){
            //     this.fisrtShow = true;
            this.checkExposure();
            // }
        }
    }
    onBtnCloseClicked() {
        this.stopMoreGameAcion();
        this.visible = false;
        this.moreGameList.mouseThrough = true;
        this.MoreGameUI.visible = false;
        this.mainItemExposure = {};
        this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGame, { uiVisible: false });
    }
    initShow() {
        this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);
        if (YouziData.moreDatas.length > 0) {
            this.morelistDatas = YouziData.moreDatas;
            var arr = [];
            var pRecord = null;
            for (var i = 0; i < this.morelistDatas.length; i++) {
                pRecord = this.morelistDatas[i];
                arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
            }
            this.moreGameList.dataSource = arr;
            this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender);
            this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent);
            this.isCreate = true;
            this.notifyUIComplete(YOUZI_UI_ID.Youzi_MoreGame, { complete: true });
        }
    }
    onListRender(item, index) {
        // console.log('render moregame index:',index);
        // var icon : Laya.Image = item.getChildByName('icon') as Laya.Image;
        // icon.loadImage(this.morelistDatas[index].iconImg);
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.MoreGameUI.visible) {
            if (!this.mainItemExposure[this.morelistDatas[index].appid]) {
                // console.log('---send log moregame index:',index);
                YouziData.sendExposureLog(this.morelistDatas[index], BI_PAGE_TYPE.MORE);
                this.mainItemExposure[this.morelistDatas[index].appid] = 1;
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
        if (this.morelistDatas.length <= 12) {
            return;
        }
        this.stopAction = false;
        this.dur = (this.morelistDatas.length - 12) * 3000;
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
            this.moreGameList.tweenTo(this.morelistDatas.length - 1, this.dur, endCompletHandler);
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
            // if(type == 1 || type ==2){
            //     this.mouseClickChange = true;
            // }
        }
        else if (e.type == 'mouseup') {
            if (!this.isClick) {
                this.isClick = true;
                console.log("当前选择的更多游戏索引：" + index);
                var tmpData = this.morelistDatas[index];
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
            for (var i = 0; i < this.morelistDatas.length; i++) {
                var infoData = this.morelistDatas[i];
                if (!this.mainItemExposure[infoData.appid]) {
                    this.mainItemExposure[infoData.appid] = 1;
                    YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.MORE);
                }
                if (i >= 11) {
                    break;
                }
            }
        }
    }
}
