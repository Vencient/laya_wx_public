import { Util } from "../Util";
export default class Button_Scale_On_Click extends Laya.Script {
    constructor() {
        super(...arguments);
        this.is_on_click = false;
    }
    onClick() {
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null);
        this.is_on_click && this.event_msg && Util.event_dispatcher.sendMessage(this.event_msg);
        this.is_on_click = false;
    }
    onMouseDown() {
        this.is_on_click = true;
        Laya.Tween.to(this.owner, { scaleX: 0.8, scaleY: 0.8 }, 100, null, null, null, true);
    }
    onMouseUp() {
        // this.click();
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null, true);
    }
    onMouseOut() {
        // this.click();
        Laya.Tween.to(this.owner, { scaleX: 1, scaleY: 1 }, 50, null, null, null, true);
    }
}
