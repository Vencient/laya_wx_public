//自动缩放按钮
export default class Forever_Scale_Action extends Laya.Script {
    constructor() {
        super(...arguments);
        /** @prop {name:scale_to,type:Number} */
        this.scale_to = 1.2;
        this.origin_scale = 1;
    }
    onAwake() {
        let s = this.owner;
        s.pivotX = s.width / 2;
        s.pivotY = s.height / 2;
        this.origin_scale = s.scaleX;
        this.scale_to_big();
    }
    //放大后缩小
    scale_to_big() {
        let s = this.owner;
        if (s) {
            s.scaleX;
            Laya.Tween.to(s, { scaleX: this.scale_to, scaleY: this.scale_to }, 1000, null, Laya.Handler.create(this, this.scale_to_small));
        }
    }
    //缩小
    scale_to_small() {
        let s = this.owner;
        if (s) {
            s.scaleX;
            Laya.Tween.to(s, { scaleX: this.origin_scale, scaleY: this.origin_scale }, 1000, null, Laya.Handler.create(this, this.scale_to_big));
        }
    }
}
