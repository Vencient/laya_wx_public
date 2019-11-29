import { ui } from "../../ui/layaMaxUI";
import { YouziData, BI_PAGE_TYPE, YOUZI_UI_ID } from "./YouziData";
export default class YouziSmallWallH extends ui.youzi.Youzi_SmallWallHUI {
    constructor() {
        super();
        this.smallWallHDatas = [];
        this.smallWallHItemExposure = {};
        this.smallWallHItemExposureCount = 0;
        this.uiCompleteCallCopy = null;
        // private uiStateCallCopy:Function = null;
        this.curFront = true;
        this.curBack = false;
        this.stopAction = false;
        this.isClick = false;
        this.dur = 5000;
        this.visible = false;
        this.SmallWallUIH.visible = false;
        this.smallWallListH.scrollBar.hide = true;
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
        this.smallWallHDatas = YouziData.moreDatas;
        if (this.smallWallHDatas.length > 0) {
            var arr = [];
            var pRecord = null;
            for (var i = 0; i < this.smallWallHDatas.length; i++) {
                pRecord = this.smallWallHDatas[i];
                arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
            }
            this.smallWallListH.renderHandler = new Laya.Handler(this, this.onListRender);
            this.smallWallListH.array = arr;
            this.smallWallListH.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent);
            this.visible = true;
            this.SmallWallUIH.visible = true;
            this.notifyUIComplete(YOUZI_UI_ID.Youzi_SmallWall, { complete: true });
            this.starSmallWallAction();
        }
    }
    onListRender(cell, index) {
        // console.log('small index : ',index);
        if (this.smallWallHDatas[index].hotred == 1) {
            var redHitWallH = cell.getChildByName('icon').getChildByName('redhit');
            redHitWallH.visible = true;
        }
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.SmallWallUIH.visible) {
            if (!this.smallWallHItemExposure[this.smallWallHDatas[index].appid]) {
                // console.log('---send log moregame index:',index);
                YouziData.sendExposureLog(this.smallWallHDatas[index], BI_PAGE_TYPE.SMALL_MATRIX_WALL);
                this.smallWallHItemExposure[this.smallWallHDatas[index].appid] = 1;
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
        if (!this.SmallWallUIH.visible)
            return;
        if (this.smallWallHDatas.length <= 8) {
            return;
        }
        this.stopAction = false;
        this.dur = (this.smallWallHDatas.length - 8) * 2000;
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
            this.smallWallListH.tweenTo(this.smallWallHDatas.length - 1, this.dur, endCompletHandler);
        }
        this.curFront = true;
        this.curBack = false;
    }
    listTweenToStart() {
        if (!this.stopAction) {
            var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
            this.smallWallListH.tweenTo(0, this.dur, startCompleteHandler);
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
                var tmpData = this.smallWallHDatas[index];
                tmpData.locationIndex = BI_PAGE_TYPE.SMALL_MATRIX_WALL;
                YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                if (tmpData.hotred == 1) {
                    var tmpSlideHit = this.smallWallListH.getCell(index).getChildByName('icon').getChildByName('redhit');
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
