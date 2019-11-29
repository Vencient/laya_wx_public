import { WeiXin } from "../SDK/WeiXin";
//iphonex 顶部适配
export default class IPhone_Adapter extends Laya.Script {
    onAwake() {
        if (WeiXin.isiPhoneXSeries) {
            let n = this.owner;
            n.y += 50;
        }
    }
}
