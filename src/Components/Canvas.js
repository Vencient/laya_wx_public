export default class Canvas extends Laya.Script {
    onUpdate() {
        let sp = this.owner;
        if (!sp)
            throw "canvas must have a sprite component";
        sp.height = Laya.stage.height;
        sp.parent.height = Laya.stage.height;
        Laya.stage.height;
    }
}
