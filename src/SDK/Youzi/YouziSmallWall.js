import { ui } from "../../ui/layaMaxUI";
import { YouziData, BI_PAGE_TYPE, YOUZI_UI_ID } from "./YouziData";
export default class YouziSmallWall extends ui.youzi.Youzi_SmallWallUI {
    constructor() {
        super();
        this.smallWallDatas = [];
        this.redHitHide = [];
        this.smallWallItemExposure = {};
        this.smallWallItemExposureCount = 0;
        this.uiCompleteCallCopy = null;
        // private uiStateCallCopy:Function = null;
        this.curFront = true;
        this.curBack = false;
        this.stopAction = false;
        this.isClick = false;
        this.dur = 5000;
        this.visible = false;
        this.SmallWallUI.visible = false;
        this.smallWallList.scrollBar.hide = true;
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
    onEnable() {
        var isSmallWallDataOk = YouziData.isDataLoaded();
        if (isSmallWallDataOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    initShow() {
        this.smallWallDatas = YouziData.moreDatas;
        if (this.smallWallDatas.length > 0) {
            var arr = [];
            var pRecord = null;
            for (var i = 0; i < this.smallWallDatas.length; i++) {
                pRecord = this.smallWallDatas[i];
                arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
            }
            this.smallWallList.array = arr;
            this.smallWallList.renderHandler = new Laya.Handler(this, this.onListRender);
            this.smallWallList.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent);
            // this.smallWallList.on(Laya.Event.MOUSE_UP,this,this.scrollBarListen.bind(this));
            this.visible = true;
            this.SmallWallUI.visible = true;
            this.notifyUIComplete(YOUZI_UI_ID.Youzi_SmallWall, { complete: true });
            this.starSmallWallAction();
        }
    }
    scrollBarListen() {
        this.starSmallWallAction();
    }
    onListRender(cell, index) {
        // console.log('small index : ',index);
        if (this.smallWallDatas[index].hotred == 1) {
            var redHitWall = cell.getChildByName('icon').getChildByName('redhit');
            redHitWall.visible = true;
        }
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.SmallWallUI.visible) {
            if (!this.smallWallItemExposure[this.smallWallDatas[index].appid]) {
                // console.log('---send log moregame index:',index);
                YouziData.sendExposureLog(this.smallWallDatas[index], BI_PAGE_TYPE.SMALL_MATRIX_WALL);
                this.smallWallItemExposure[this.smallWallDatas[index].appid] = 1;
            }
        }
    }
    stopSmallWallAcion() {
        this.stopAction = true;
    }
    starSmallWallAction() {
        this.smallWallListAutoScroll();
    }
    smallWallListAutoScroll() {
        if (!this.SmallWallUI.visible)
            return;
        if (this.smallWallDatas.length <= 8) {
            return;
        }
        this.stopAction = false;
        this.dur = (this.smallWallDatas.length - 8) * 2000;
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
            this.smallWallList.tweenTo(this.smallWallDatas.length - 1, this.dur, endCompletHandler);
        }
        this.curFront = true;
        this.curBack = false;
    }
    listTweenToStart() {
        if (!this.stopAction) {
            var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
            this.smallWallList.tweenTo(0, this.dur, startCompleteHandler);
        }
        this.curFront = false;
        this.curBack = true;
    }
    onSmallWallListItemMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            if (!this.isClick) {
                this.isClick = true;
                console.log("当前选择的大家都在玩儿索引：" + index);
                var tmpData = this.smallWallDatas[index];
                tmpData.locationIndex = BI_PAGE_TYPE.SMALL_MATRIX_WALL;
                YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                if (tmpData.hotred == 1) {
                    var tmpSlideHit = this.smallWallList.getCell(index).getChildByName('icon').getChildByName('redhit');
                    tmpSlideHit.visible = false;
                }
            }
        }
        else if (e.type == 'mouseover') {
        }
    }
    startOtherCall(state) {
        this.isClick = false;
        this.starSmallWallAction();
    }
}
