import { Util } from "../Util";
const SpeedAdd = 0.2;
const SpeedSub = 1 / 3;
const Chance = 0.6;
export default class ProgressBar extends Laya.Script {
    constructor() {
        super(...arguments);
        this.progress = 0;
        this.origin_width = 0;
        this.origin_height = 0;
    }
    onAwake() {
        let s = this.owner.getChildByName('pb_progress');
        this.origin_width = s.width;
        this.origin_height = s.height;
        this.pb = s;
        this.mask = new Laya.Sprite();
        // mask.graphics.drawTexture(s.texture);// = s.texture;
        // mask.graphics.drawRect(0,0,s.width,s.height,'#ffffff');
        // mask.graphics.drawPath
        this.pb.mask = this.mask;
        this.set_value(0);
    }
    set_value(progress) {
        progress = Util.clamp(progress, 0, 1);
        let radius = 0;
        let mask_width = this.origin_width * progress;
        let mask_height = this.origin_height;
        this.mask.graphics.drawPath(0, 0, [
            ["moveTo", radius, 0],
            ["lineTo", mask_width - radius, 0],
            ["arcTo", mask_width, 0, mask_width, radius, radius],
            ["lineTo", mask_width, mask_height - radius],
            ["arcTo", mask_width, mask_height, mask_width - radius, mask_height, radius],
            ["lineTo", radius, mask_height],
            ["arcTo", 0, mask_height, 0, mask_height - radius, radius],
            ["lineTo", 0, radius],
            ["arcTo", 0, 0, radius, 0, radius],
            ["closePath"]
        ], {
            fillStyle: "#ffffff"
        });
        // this.pb.x = this.origin_x - (1-progress)*this.origin_width;
    }
}
