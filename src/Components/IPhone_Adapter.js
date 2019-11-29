import { WeiXin } from "../SDK/WeiXin";
export default class IPhone_Adapter extends Laya.Script {
    onAwake() {
        if (WeiXin.isiPhoneXSeries) {
            let n = this.owner;
            n.y += 50;
        }
    }
}
