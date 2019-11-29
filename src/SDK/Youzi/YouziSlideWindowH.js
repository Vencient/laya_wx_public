import { ui } from '../../ui/layaMaxUI';
import { YouziData, YOUZI_UI_ID, BI_PAGE_TYPE } from './YouziData';
export default class YouziSlideWindowH extends ui.youzi.Youzi_SlideWindowHUI {
    constructor(leftOrRight) {
        super();
        this.hotlistHDatas = [];
        this.slideItemExposure = {};
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.slideButton = null;
        this.slideMask = null;
        this.showFirst = false;
        this.isFullDevice = false;
        this.acitonPianYi = 0;
        this.isLeft = false;
        this.isLeft = leftOrRight;
        if (Laya.stage.width / Laya.stage.height >= 1.9) {
            this.isFullDevice = true;
            this.acitonPianYi = 20;
            this.scale(0.9, 0.9);
            var scaleH = this.height * 0.9;
            this.pos(this.x, Laya.stage.height / 2 - scaleH / 2);
        }
        else {
            this.centerY = 0;
        }
        if (!leftOrRight) {
            this.right = -this.width;
            this.slideBg.scaleX = -1;
            this.slideBg.pos(this.slideBg.width, this.slideBg.y);
            this.slideList.pos(this.slideList.x, this.slideList.y);
        }
        else {
            this.left = -this.width;
        }
        this.visible = false;
        this.SlideWindowUI.visible = false;
        this.slideList.scrollBar.hide = true;
    }
    setYouziPosition(y) {
        this.centerX = NaN;
        this.centerY = NaN;
        this.pos(this.x, y);
    }
    setSlideButton(slideBtn) {
        this.slideButton = slideBtn;
    }
    setSlideMask(slideViewMask) {
        this.slideMask = slideViewMask;
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
        var isSlideDataOk = YouziData.isDataLoaded();
        if (isSlideDataOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    //显示抽屉按钮，隐藏抽屉遮罩
    showSlideBtnAndHideSlideMask() {
        if (this.slideButton)
            this.slideButton.visible = true;
        if (this.slideMask)
            this.slideMask.visible = false;
    }
    //隐藏抽屉按钮，显示抽屉遮罩
    hideSlideBtnAndShowSlideMask() {
        if (this.slideButton)
            this.slideButton.visible = false;
        if (this.slideMask)
            this.slideMask.visible = true;
    }
    showSlideWindow() {
        if (this.hotlistHDatas.length <= 0) {
            console.log('抽屉没有数据');
            return;
        }
        if (!this.SlideWindowUI.visible) {
            this.visible = true;
            this.SlideWindowUI.visible = true;
            this.hideSlideBtnAndShowSlideMask();
            var self = this;
            this.slideWindowActionShow(function () {
                self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindowH, { uiVisible: true });
                if (!self.showFirst) {
                    self.showFirst = true;
                    self.checkExposure();
                }
            });
        }
    }
    slideWindowActionShow(actionFinishCall) {
        var self = this;
        if (!this.isLeft) {
            Laya.Tween.to(this, {
                right: self.acitonPianYi
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
        }
        else {
            Laya.Tween.to(this, {
                left: self.acitonPianYi
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
        }
    }
    closeSlideWindow() {
        if (this.hotlistHDatas.length <= 0) {
            console.log('抽屉没有数据');
            return;
        }
        var self = this;
        this.slideWindowActionClose(function () {
            self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindowH, { uiVisible: false });
            self.visible = false;
            self.SlideWindowUI.visible = false;
            self.btnSLideClose.visible = true;
            self.showSlideBtnAndHideSlideMask();
        });
        //点击隐藏按钮，防止动画过程中继续点击造成过多偏移
        self.btnSLideClose.visible = false;
    }
    slideWindowActionClose(actionFinishCall) {
        if (!this.isLeft) {
            Laya.Tween.to(this, {
                right: -this.width
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
        }
        else {
            Laya.Tween.to(this, {
                left: -this.width
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
        }
    }
    initShow() {
        this.hotlistHDatas = YouziData.hotListDatas;
        this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow);
        var arr = [];
        var pRecord = null;
        for (var i = 0; i < this.hotlistHDatas.length; i++) {
            pRecord = this.hotlistHDatas[i];
            arr.push({ icon: pRecord.iconImg, namelab: pRecord.title });
        }
        this.slideList.array = arr;
        this.slideList.renderHandler = new Laya.Handler(this, this.onListRender);
        this.slideList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent);
        this.notifyUIComplete(YOUZI_UI_ID.Youzi_SlideWindowH, { complete: true });
    }
    onListRender(item, index) {
        // console.log('------->render slide : ',index);
        // var icon : Laya.Image = item.getChildByName('icon') as Laya.Image;
        // icon.loadImage(this.hotlistDatas[index].iconImg);
        if (this.hotlistHDatas[index].hotred == 1) {
            var redHitWall = item.getChildByName('icon').getChildByName('markImg');
            redHitWall.visible = true;
        }
        this.checkSendExpsureLog(index);
    }
    checkSendExpsureLog(index) {
        if (this.visible && this.SlideWindowUI.visible) {
            if (!this.slideItemExposure[this.hotlistHDatas[index].appid]) {
                // console.log('---send log moregame index:',index);
                YouziData.sendExposureLog(this.hotlistHDatas[index], BI_PAGE_TYPE.FLOAT);
                this.slideItemExposure[this.hotlistHDatas[index].appid] = 1;
            }
        }
    }
    onslideListItemMouseEvent(e, index) {
        if (e.type == 'mousedown') {
        }
        else if (e.type == 'mouseup') {
            console.log("当前选择的slideh索引：" + index);
            ;
            var tmpData = this.hotlistHDatas[index];
            tmpData.locationIndex = BI_PAGE_TYPE.FLOAT;
            YouziData.startOtherGame(tmpData, null);
            if (tmpData.hotred == 1) {
                var tmpSlideHit = this.slideList.getCell(index).getChildByName('icon').getChildByName('markImg');
                tmpSlideHit.visible = false;
            }
        }
        else if (e.type == 'mouseover') {
        }
    }
    checkExposure() {
        if (this.SlideWindowUI.visible) {
            for (var i = 0; i < this.hotlistHDatas.length; i++) {
                var infoData = this.hotlistHDatas[i];
                // console.log(infoData)
                if (!this.slideItemExposure[infoData.appid]) {
                    this.slideItemExposure[infoData.appid] = 1;
                    YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.FLOAT);
                }
                if (i >= 11)
                    break;
            }
        }
    }
}
