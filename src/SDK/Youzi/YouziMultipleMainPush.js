import { ui } from '../../ui/layaMaxUI';
import { YouziData, YOUZI_UI_ID, BI_PAGE_TYPE } from './YouziData';
export default class YouziMultipleMainPush extends ui.youzi.Youzi_MainPushUI {
    constructor(mainData) {
        super();
        this.mainRecData = null;
        this.mainRecItemExposure = {};
        this.angel = 0;
        this.curMainRecIdx = 0;
        this.uiCompleteCallCopy = null;
        this.uiStateCallCopy = null;
        this.leftTween = null;
        this.rightTween = null;
        this.startTimer = true;
        this.mainRecData = mainData;
        this.visible = false;
        this.btnMainRecBg.visible = false;
    }
    setYouziPosition(x, y) {
        this.centerX = NaN;
        this.centerY = NaN;
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
        var isMainDataOk = YouziData.isDataLoaded();
        if (isMainDataOk) {
            this.initShow();
        }
        else {
            YouziData._loadedCallBacks.push(this.initShow.bind(this));
        }
    }
    initShow() {
        if (this.mainRecData) {
            this.btnMainRec.on(Laya.Event.CLICK, this, this.onBtnMainRecClicked);
            this.visible = true;
            this.btnMainRecBg.visible = true;
            this.btnMainRec.skin = this.mainRecData.iconImg;
            this.slogan.text = this.mainRecData.slogan;
            this.btnMainRecBg.rotation = 10;
            YouziData.sendExposureLog(this.mainRecData, BI_PAGE_TYPE.MAIN);
            this.mainRecItemExposure[this.mainRecData.appid] = 1;
            this.notifyUIComplete(YOUZI_UI_ID.Youzi_MainPush, { complete: true });
            this.startTimerLoop();
        }
    }
    startTimerLoop() {
        // if(this.mainRecDatas.length > 1){
        //     Laya.timer.loop(5000,this,this.updateMainRec);
        // }
        if (this.startTimer) {
            this.startTimer = false;
            this.mainPushRotationAction();
        }
    }
    clearTimerLoop() {
        //清除计时器后，旋转角度变回10
        this.btnMainRecBg.rotation = 10;
        this.startTimer = true;
        // if(this.mainRecDatas.length > 1){
        //     Laya.timer.clear(this,this.updateMainRec);
        // }
        if (this.leftTween) {
            Laya.Tween.clear(this.leftTween);
        }
        if (this.rightTween) {
            Laya.Tween.clear(this.rightTween);
        }
    }
    /**
     * 主推动画
     * 1、默认角度是10
     * 2、向右转到-10
     * 3、完成之后向左转到10
     * 4、重复2、3
     */
    mainPushRotationAction() {
        this.rotatotionRight();
    }
    //向右边旋转
    rotatotionRight() {
        this.rightTween = Laya.Tween.to(this.btnMainRecBg, { rotation: -10 }, 2000, null, new Laya.Handler(this, this.rotationLeft));
    }
    //像左边旋转
    rotationLeft(actionCompleteCall) {
        this.leftTween = Laya.Tween.to(this.btnMainRecBg, { rotation: 10 }, 2000, null, new Laya.Handler(this, this.rotatotionRight));
    }
    updateMainRec() {
    }
    updateMainRecMultiple(mainPushData) {
        this.btnMainRec.graphics.clear(true);
        this.btnMainRec.loadImage(mainPushData.iconImg);
        this.slogan.text = mainPushData.slogan;
        if (!this.mainRecItemExposure[mainPushData.appid]) {
            YouziData.sendExposureLog(mainPushData, BI_PAGE_TYPE.MAIN);
            this.mainRecItemExposure[mainPushData.appid] = 1;
        }
    }
    onBtnMainRecClicked() {
        YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_MainPush;
        this.mainRecData.locationIndex = BI_PAGE_TYPE.MAIN;
        YouziData.startOtherGame(this.mainRecData, null);
        // this.updateMainRec();
    }
}
