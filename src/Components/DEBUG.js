export default class DEBUG extends Laya.Script {
    onUpdate() {
        if (this.owner._children[0]._y.toString() == 'NaN') {
            console.log('sth happend');
        }
    }
}
