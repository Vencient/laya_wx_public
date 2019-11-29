import { Util } from "../Util";
//按钮
export default class Button extends Laya.Script {
    //点击发送事件
    onClick() {
        Util.event_dispatcher.sendMessage(this.event_msg);
    }
}
