import { ui } from '../../ui/layaMaxUI';
import { YouziData, BI_PAGE_TYPE, YOUZI_UI_ID } from './YouziData';
export default class YouziGuessLikeH extends ui.youzi.Youzi_GuessLikeHUI {
    constructor() {
        super();
        this.matrixBannerDatas = [];
        this.guessAnyItemExposure = {};
        this.firstShow = false;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.curFront = true;
        this.curBack = false;
        this.stopAction = false;
        this.isClick = false;
        this.dur = 5000;
        this.visible = false;
        this.guessUI.visible = false;
        this.guesslist.scrollBar.hide = true;
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
        var guessLikeDataOk = YouziData.isDataLoaded();
        if (guessLikeDataOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    // showGuessLikeView(){
    //     if(!this.firstShow){
    //         this.firstShow = true;
    //         this.checkExposure();
    //     }
    //     this.visible = true;
    //     this.guessUI.visible = true;
    //     this.guessAnylistAutoScroll();
    // }
    // hideGuessLikeView(){
    //     this.visible = false;
    //     this.guessUI.visible = false; 
    // }
    initShow() {
        this.matrixBannerDatas = YouziData.matrixBannerDatas;
        var arr = [];
        var pRecord = null;
        for (var i = 0; i < this.matrixBannerDatas.length; i++) {
            pRecord = this.matrixBannerDatas[i];
            arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
        }
        this.guesslist.array = arr;
        this.guesslist.renderHandler = new Laya.Handler(this, this.onListRender);
        this.guesslist.mouseHandler = new Laya.Handler(this, this.onGuessLikeItemMouseEvent);
        this.visible = true;
        this.guessUI.visible = true;
        this.notifyUIComplete(YOUZI_UI_ID.Youzi_GuessLikeH, { complete: true });
        this.notifyUIState(YOUZI_UI_ID.Youzi_GuessLikeH, { uiVisible: true });
        this.guessAnylistHAutoScroll();
    }
    onListRender(item, index) {
        // console.log('------->render guesslikeh : ',index);
        // var icon : Laya.Image = item.getChildByName('icon') as Laya.Image;
        // icon.loadImage(this.matrixBannerDatas[index].iconImg);
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.guessUI.visible) {
            if (!this.guessAnyItemExposure[this.matrixBannerDatas[index].appid]) {
                // console.log('---send log index:',index);
                YouziData.sendExposureLog(this.matrixBannerDatas[index], BI_PAGE_TYPE.GUESS);
                this.guessAnyItemExposure[this.matrixBannerDatas[index].appid] = 1;
            }
        }
    }
    stopGuessLikeHAcion() {
        this.stopAction = true;
    }
    starGuessLikeHAction() {
        this.guessAnylistHAutoScroll();
    }
    guessAnylistHAutoScroll() {
        if (!this.guessUI.visible)
            return;
        if (this.matrixBannerDatas.length <= 5) {
            return;
        }
        this.stopAction = false;
        this.dur = (this.matrixBannerDatas.length - 5) * 5000;
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
            this.curFront = true;
            this.curBack = false;
            var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
            this.guesslist.tweenTo(this.matrixBannerDatas.length - 1, this.dur, endCompletHandler);
        }
    }
    listTweenToStart() {
        if (!this.stopAction) {
            this.curFront = false;
            this.curBack = true;
            var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
            this.guesslist.tweenTo(0, this.dur, startCompleteHandler);
        }
    }
    onGuessLikeItemMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            if (!this.isClick) {
                this.isClick = true;
                console.log("当前选择的guesslikeh索引：" + index);
                YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_GuessLikeH;
                var tmpData = this.matrixBannerDatas[index];
                tmpData.locationIndex = BI_PAGE_TYPE.GUESS;
                YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
            }
        }
        else if (e.type == 'mouseover') {
        }
    }
    startOtherCall(state) {
        this.isClick = false;
        this.starGuessLikeHAction();
    }
}
