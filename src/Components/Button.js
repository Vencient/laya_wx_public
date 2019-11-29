import { Util } from "../Util";
export default class Button extends Laya.Script {
    onClick() {
        Util.event_dispatcher.sendMessage(this.event_msg);
    }
}
