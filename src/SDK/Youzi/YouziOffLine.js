import { ui } from '../../ui/layaMaxUI';
import { YouziData, BI_PAGE_TYPE, YOUZI_UI_ID } from './YouziData';
export default class YouziOffLine extends ui.youzi.Youzi_OffLineUI {
    constructor() {
        super();
        this.offLineGameShow = [];
        this.offLineGameDatas = [];
        this.offLineCreateComplete = false;
        this.isSendLog = true;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        //获取毫秒
        this.hideOffLineGameTimes = 0;
        if (Laya.stage.height / Laya.stage.width >= 1.9) {
            this.OffLineUI.pos(Laya.stage.width / 2 - this.OffLineUI.width / 2, Laya.stage.height / 2 - this.OffLineUI.height / 2);
        }
        else {
            this.centerX = 0;
            this.centerY = 0;
        }
        this.visible = false;
        this.OffLineUI.visible = false;
    }
    setYouziPosition(x, y) {
        this.centerX = NaN;
        this.centerY = NaN;
        this.OffLineUI.pos(x, y);
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
        var offLineDataOk = YouziData.isDataLoaded();
        if (offLineDataOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    initShow() {
        this.offLineGameDatas = YouziData.offlineBannerDatas;
        this.wxOnShow();
        this.wxOnHide();
        //以下demo演示用
        // this.createOffLineDialog();
        // this.visible = true;
        // this.OffLineUI.visible = true;
    }
    wxOnShow() {
        var self = this;
        if (Laya.Browser.window.wx) {
            Laya.Browser.window.wx.onShow(function (res) {
                var showOffLineTimes = Math.floor(new Date().getTime() - self.hideOffLineGameTimes);
                var showOffLineTimeSecond = Math.floor(showOffLineTimes / 1000);
                if (showOffLineTimeSecond >= 8) {
                    if (self.offLineCreateComplete) {
                        self.visible = true;
                        self.OffLineUI.visible = true;
                        self.notifyUIState(YOUZI_UI_ID.Youzi_OffLine, { uiVisible: true });
                        if (self.isSendLog) {
                            for (var i = 0; i < self.offLineGameShow.length; i++) {
                                YouziData.sendExposureLog(self.offLineGameShow[i], BI_PAGE_TYPE.OFFLINE);
                                if (i == self.offLineGameShow.length) {
                                    self.isSendLog = false;
                                }
                            }
                        }
                    }
                }
            });
        }
    }
    wxOnHide() {
        var self = this;
        if (Laya.Browser.window.wx) {
            Laya.Browser.window.wx.onHide(function () {
                self.hideOffLineGameTimes = new Date().getTime();
                if (self.offLineGameDatas.length > 0 && !self.offLineCreateComplete) {
                    self.createOffLineDialog();
                }
            });
        }
    }
    createOffLineDialog() {
        if (this.offLineGameDatas.length <= 0) {
            console.log('离线推荐没有数据');
            return;
        }
        this.OffLineCloseButton.on(Laya.Event.CLICK, this, this.onBtnOffLineClose);
        var offLineArr = [];
        for (var i = 0; i < this.offLineGameDatas.length; i++) {
            if (i >= 3) {
                break;
            }
            else {
                var tempOffLine = this.offLineGameDatas[i];
                offLineArr.push({ infoData: tempOffLine, namelab: tempOffLine.title });
            }
        }
        //设定list 位置，以这种方式解决list中item的居中问题
        switch (offLineArr.length) {
            case 1:
                this.OffLineList.width = 140;
                this.OffLineList.x = 194;
                break;
            case 2:
                this.OffLineList.width = 305;
                this.OffLineList.x = 111.5;
                break;
            default:
                break;
        }
        this.OffLineList.mouseHandler = new Laya.Handler(this, this.onOffLinelistItemMouseEvent);
        this.OffLineList.dataSource = offLineArr;
        for (var j = 0; j < this.offLineGameDatas.length; j++) {
            var offLineIcon = this.OffLineList.getCell(j).getChildByName('icon');
            offLineIcon.loadImage(this.offLineGameDatas[j].iconImg);
            var offLineIconRedHit = offLineIcon.getChildByName('redhit');
            offLineIconRedHit.visible = false;
            if (this.offLineGameDatas[j].hotred == 1) {
                offLineIconRedHit.visible = true;
            }
            this.offLineGameShow.push(this.offLineGameDatas[j]);
            if (++j >= offLineArr.length) {
                // console.log('offlinecreat finish');
                this.offLineCreateComplete = true;
                break;
            }
        }
        this.notifyUIComplete(YOUZI_UI_ID.Youzi_OffLine, { complete: true });
    }
    onBtnOffLineClose() {
        this.visible = false;
        this.OffLineUI.visible = false;
        this.notifyUIState(YOUZI_UI_ID.Youzi_OffLine, { uiVisible: false });
    }
    onOffLinelistItemMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            console.log("当前选择的hotlist索引：" + index);
            var tmpData = this.offLineGameDatas[index];
            tmpData.locationIndex = BI_PAGE_TYPE.OFFLINE;
            tmpData.type = 3;
            if (tmpData.hotred == 1) {
                var hideOffLineHit = this.OffLineList.getCell(index).getChildByName('icon').getChildByName('redhit');
                hideOffLineHit.visible = false;
            }
            YouziData.startOtherGame(tmpData, null);
        }
        else if (e.type == 'mouseover') {
        }
        else if (e.type == 'mouseout') {
        }
    }
}
