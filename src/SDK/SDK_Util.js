export function compareVersion(s1, s2) {
    let v1 = s1.split('.');
    let v2 = s2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
export function setIsiPhoneXSeries(h, w) {
    var screen = [{ h: 812, w: 375 }, { h: 896, w: 414 }];
    for (let n of screen) {
        if (n.h == h && n.w == w)
            return true;
    }
    return false;
}
