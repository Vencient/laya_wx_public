import { Util } from "../Util";
//自动缩放按钮
export default class Button_Scale_On_Click extends Laya.Script {
    constructor() {
        super(...arguments);
        this.is_on_click = false;
    }
    //点击事件
    onClick() {
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null);
        this.is_on_click && this.event_msg && Util.event_dispatcher.sendMessage(this.event_msg);
        this.is_on_click = false;
    }
    //缩放开始
    onMouseDown() {
        this.is_on_click = true;
        Laya.Tween.to(this.owner, { scaleX: 0.8, scaleY: 0.8 }, 100, null, null, null, true);
    }
    //缩放停止
    onMouseUp() {
        // this.click();
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null, true);
    }
    //缩放停止
    onMouseOut() {
        // this.click();
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null, true);
    }
}
