"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function catchWxNotDefined(obj) {
    return function(target, propertyKey, descriptor) {
        var f = descriptor.value;

        descriptor.value = function() {
            try {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return f.apply(this, args);
            } catch (e) {
                if (typeof wx == 'undefined') {
                    console.log(" wx is not defined " + target.name + " " + propertyKey + " can not be called");

                    if (obj) {
                        return obj;
                    }
                } else {
                    console.log('wx api error');
                    console.log(e.message);
                    return null;
                }
            }
        };
    };
}

var _weixin =
    /*#__PURE__*/
    function() {
        function _weixin() {
            _classCallCheck(this, _weixin);

            this.cloud_config_url = "https://xiazai.qi-guo.cn/spear_io_3d/config_wx.json";
            this.systemInfo = {
                brand: '',
                model: '',
                pixelRatio: 0,
                screenWidth: 0,
                screenHeight: 0,
                windowWidth: 0,
                windowHeight: 0,
                statusBarHeight: 0,
                language: '',
                version: '',
                system: '',
                platform: '',
                fontSizeSetting: 0,
                SDKVersion: '',
                benchmarkLevel: 0
            };
            this.videoEnabled = true;
            this.shareTicket = "";
            this._shared_timestamp = Date.now();
            this._shared_cnt = 0;
            this._shared_failure_cnt = 0;
            this.height = 0;
            this.width = 0;
            this.isiPhoneXSeries = false;
            this._shareChanceInverse = 3;
            this._gameReadyBonusTimes = 0;
            this.VideoAdsType = {
                continue: 'adunit-32718990893a6134'
            };
            this.BannerAdsType = {
                Banner_1: 'adunit-93cf152aa8e5b40f',
                Banner_2: 'adunit-93cf152aa8e5b40f',
                Banner_3: 'adunit-93cf152aa8e5b40f',
                Banner_4: 'adunit-93cf152aa8e5b40f',
                Banner_5: 'adunit-93cf152aa8e5b40f'
            };
            this.YouziType = {
                appId: 'wxbd9c93b8b318d5b1',
                resVersion: '1.00.07',
                miniGamePlatType: MiniGame_Plat_Type.WeChat
            };
            this.systemInfo = this.getSystemInfoSync();
            this.height = this.systemInfo.screenHeight;
            this.width = this.systemInfo.screenWidth;
            this.setIsiPhoneXSeries(this.height, this.width);
            this.showShareMenu({
                withShareTicket: true
            });
        }

        _createClass(_weixin, [{
            key: "is_wx",
            value: function is_wx() {
                return typeof wx != 'undefined';
            }
        }, {
            key: "postMessage",
            value: function postMessage(param) {
                wx.postMessage(param);
            }
        }, {
            key: "loadSubpackage",
            value: function loadSubpackage(param) {
                if (compareVersion(this.systemInfo.SDKVersion, '2.1.0') >= 0) {
                    wx.loadSubpackage(param);
                } else {
                    param.success(null);
                }
            }
        }, {
            key: "showModal",
            value: function showModal(arg0) {
                return wx.showModal(arg0);
            }
        }, {
            key: "getUpdateManager",
            value: function getUpdateManager() {
                return wx.getUpdateManager();
            }
        }, {
            key: "getSetting",
            value: function getSetting(arg) {
                wx.getSetting(arg);
            }
        }, {
            key: "onShow",
            value: function onShow(cb) {
                wx.onShow(cb);
            }
        }, {
            key: "offShow",
            value: function offShow(cb) {
                wx.offShow(cb);
            }
        }, {
            key: "getUserInfo",
            value: function getUserInfo(arg) {
                wx.getUserInfo(arg);
            }
        }, {
            key: "getNetworkType",
            value: function getNetworkType(arg) {
                wx.getNetworkType(arg);
            }
        }, {
            key: "getLocation",
            value: function getLocation(arg) {
                wx.getLocation(arg);
            }
        }, {
            key: "request",
            value: function request(arg) {
                wx.request(arg);
            }
        }, {
            key: "getStorageSync",
            value: function getStorageSync(key) {
                wx.getStorageSync(key);
            }
        }, {
            key: "setStorageSync",
            value: function setStorageSync(key, data) {
                wx.setStorageSync(key, data);
            }
        }, {
            key: "onHide",
            value: function onHide(arg) {
                wx.onHide(arg);
            }
        }, {
            key: "onError",
            value: function onError(arg) {
                wx.onError(arg);
            }
        }, {
            key: "is_iphone_6",
            value: function is_iphone_6() {
                return this.systemInfo.model.indexOf('iPhone 6') >= 0;
            }
        }, {
            key: "showShareMenu",
            value: function showShareMenu(obj) {
                wx.showShareMenu(obj);
            }
        }, {
            key: "getSystemInfoSync",
            value: function getSystemInfoSync() {
                return wx.getSystemInfoSync();
            }
        }, {
            key: "createInnerAudioContext",
            value: function createInnerAudioContext() {
                return wx.createInnerAudioContext();
            }
        }, {
            key: "login",
            value: function login(arg0) {
                return wx.login(arg0);
            }
        }, {
            key: "createUserInfoButton",
            value: function createUserInfoButton(arg0) {
                return wx.createUserInfoButton(arg0);
            }
        }, {
            key: "getLaunchOptionsSync",
            value: function getLaunchOptionsSync() {
                return wx.getLaunchOptionsSync();
            }
        }, {
            key: "updateShareMenu",
            value: function updateShareMenu(param) {
                return wx.updateShareMenu(param);
            }
        }, {
            key: "navigateToMiniProgram",
            value: function navigateToMiniProgram(param) {
                if (!this.is_wx() && param.success) {
                    param.success();
                }

                wx.navigateToMiniProgram(param);
            }
        }, {
            key: "instantiateBannerAtBottomLeft",
            value: function instantiateBannerAtBottomLeft(bannerAdsID) {
                var ad = WeiXin.createBannerAd({
                    adUnitId: bannerAdsID,
                    style: {
                        left: 0,
                        top: 0,
                        width: 300
                    }
                });

                var resize = function resize() {
                    ad.style.left = WeiXin.width - ad.style.realWidth + 0.1;
                    ad.style.top = WeiXin.height - ad.style.realHeight + 0.1;
                    ad.offResize(resize);
                };

                ad.onResize(resize);
                ad.onError(function() {});
                return ad;
            }
        }, {
            key: "instantiateBannerAtBottomCenter",
            value: function instantiateBannerAtBottomCenter(bannerAdsID) {
                var _width = WeiXin.width;
                var ad = WeiXin.createBannerAd({
                    adUnitId: bannerAdsID,
                    style: {
                        left: 0,
                        top: 0,
                        width: _width
                    }
                });

                var resize = function resize() {
                    ad.style.left = (WeiXin.width - ad.style.realWidth) / 2 + 0.1;

                    if (WeiXin.isiPhoneXSeries) {
                        ad.style.top = WeiXin.height - ad.style.realHeight - 20 + 0.1;
                    } else {
                        ad.style.top = WeiXin.height - ad.style.realHeight + 0.1;
                    }

                    ad.offResize(resize);
                };

                ad.onResize(resize);
                ad.onError(function() {});
                return ad;
            }
        }, {
            key: "set_banner_up_pixel",
            value: function set_banner_up_pixel(ad, px) {
                ad.style.width = WeiXin.width;
                var height = ad.style.realHeight / ad.style.realWidth * WeiXin.width;
                ad.style.left = (WeiXin.width - WeiXin.width) / 2;

                if (!WeiXin.isiPhoneXSeries) {
                    ad.style.top = WeiXin.height - height - px;
                } else {
                    ad.style.top = WeiXin.height - height - px - 10;
                }
            }
        }, {
            key: "createBannerAd",
            value: function createBannerAd(param) {
                return {
                    hide: function hide() {},
                    destroy: function destroy() {},
                    show: function show() {},
                    onResize: function onResize() {},
                    offResize: function offResize() {},
                    onError: function onError() {},
                    offError: function offError() {},
                    style: {
                        left: 0,
                        top: 0,
                        width: 0
                    }
                };

                if (this.systemInfo) {
                    if (compareVersion(this.systemInfo.SDKVersion, '2.0.1') < 0) {
                        return {
                            hide: function hide() {},
                            destroy: function destroy() {},
                            show: function show() {},
                            onResize: function onResize() {},
                            offResize: function offResize() {},
                            onError: function onError() {},
                            offError: function offError() {},
                            style: {
                                left: 0,
                                top: 0,
                                width: 0
                            }
                        };
                    }
                }

                return wx.createBannerAd(param);
            }
        }, {
            key: "createRewardedVideoAd",
            value: function createRewardedVideoAd(param) {
                if (this.systemInfo) {
                    if (compareVersion(this.systemInfo.SDKVersion, '2.0.1') < 0) {
                        return {
                            load: function load() {
                                return new Promise(function(resolve, reject) {
                                    resolve();
                                });
                            },
                            show: function show() {
                                return new Promise(function(resolve, reject) {
                                    resolve();
                                });
                            },
                            onClose: function onClose() {},
                            offClose: function offClose() {},
                            onError: function onError() {},
                            offError: function offError() {}
                        };
                    }
                }

                return wx.createRewardedVideoAd(param);
            }
        }, {
            key: "getShareInfo",
            value: function getShareInfo(param) {
                wx.getShareInfo(param);
            }
        }, {
            key: "onShareAppMessage",
            value: function onShareAppMessage(f) {
                wx.onShareAppMessage(f);
            }
        }, {
            key: "offShareAppMessage",
            value: function offShareAppMessage(f) {
                wx.offShareAppMessage(f);
            }
        }, {
            key: "setIsiPhoneXSeries",
            value: function setIsiPhoneXSeries(h, w) {
                var screen = [{
                    h: 812,
                    w: 375
                }, {
                    h: 896,
                    w: 414
                }];

                for (var _i = 0, _screen = screen; _i < _screen.length; _i++) {
                    var n = _screen[_i];
                    if (n.h == h && n.w == w) this.isiPhoneXSeries = true;
                }
            }
        }, {
            key: "shareAppMessage",
            value: function shareAppMessage(sharedMsg) {
                this._shared_timestamp = Date.now();
                wx.shareAppMessage(sharedMsg);
            }
        }, {
            key: "vibrateShort",
            value: function vibrateShort() {
                wx.vibrateShort();
            }
        }, {
            key: "getShareSuccessStatus",
            value: function getShareSuccessStatus() {
                this._shared_cnt++;

                if (Date.now() - this._shared_timestamp < 3000) {
                    return false;
                }

                return true;
            }
        }, {
            key: "instantiateRewardedVideo",
            value: function instantiateRewardedVideo(_adunitId, success, error, failed) {
                var video = this.createRewardedVideoAd({
                    adUnitId: _adunitId
                });

                var onClose = function onClose(res) {
                    if (res.isEnded) {
                        success();
                    } else if (failed) {
                        failed();
                    }

                    video.offClose(onClose);
                    video.offError(onError);
                };

                var onError = function onError(res) {
                    error(res.errMsg);
                    video.offClose(onClose);
                    video.offError(onError);
                };

                video.onClose(onClose);
                video.onError(onError);
                video.load().then(function() {
                    video.show();
                }).catch(function(err) {
                    return console.log(err.errMsg);
                });
            }
        }, {
            key: "getAbleToShowVideo",
            value: function getAbleToShowVideo() {
                var c = this._gameReadyBonusTimes;
                return c % this._shareChanceInverse != 0;
            }
        }, {
            key: "getBonus",
            value: function getBonus() {
                this._gameReadyBonusTimes++;
            }
        }, {
            key: "initYouzi",
            value: function initYouzi(appId, resVersion, miniGamePlatType) {
                YouziCenter.getInstance().initYouzi(appId, resVersion, miniGamePlatType);
            }
        }]);

        return _weixin;
    }();

__decorate([catchWxNotDefined()], _weixin.prototype, "postMessage", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "loadSubpackage", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "showModal", null);

__decorate([catchWxNotDefined({
    onCheckForUpdate: function onCheckForUpdate() {},
    onUpdateReady: function onUpdateReady() {},
    onUpdateFailed: function onUpdateFailed() {}
})], _weixin.prototype, "getUpdateManager", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getSetting", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "onShow", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "offShow", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getUserInfo", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getNetworkType", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getLocation", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "request", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getStorageSync", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "setStorageSync", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "onHide", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "onError", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "showShareMenu", null);

__decorate([catchWxNotDefined({
    screenWidth: 0,
    screenHeight: 0,
    model: ""
})], _weixin.prototype, "getSystemInfoSync", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "createInnerAudioContext", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "login", null);

__decorate([catchWxNotDefined({
    show: function show() {},
    hide: function hide() {},
    destroy: function destroy() {},
    onTap: function onTap() {},
    offTap: function offTap() {}
})], _weixin.prototype, "createUserInfoButton", null);

__decorate([catchWxNotDefined({
    scene: 1001,
    query: {},
    shareTicket: "",
    referrerInfo: {}
})], _weixin.prototype, "getLaunchOptionsSync", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "updateShareMenu", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "navigateToMiniProgram", null);

__decorate([catchWxNotDefined({
    hide: function hide() {},
    destroy: function destroy() {},
    show: function show() {},
    onResize: function onResize() {},
    offResize: function offResize() {},
    onError: function onError() {},
    offError: function offError() {},
    style: {
        left: 0,
        top: 0,
        width: 0
    }
})], _weixin.prototype, "instantiateBannerAtBottomLeft", null);

__decorate([catchWxNotDefined({
    hide: function hide() {},
    destroy: function destroy() {},
    show: function show() {},
    onResize: function onResize() {},
    offResize: function offResize() {},
    onError: function onError() {},
    offError: function offError() {},
    style: {
        left: 0,
        top: 0,
        width: 0
    }
})], _weixin.prototype, "createBannerAd", null);

__decorate([catchWxNotDefined({
    load: function load() {
        return new Promise(function(resolve, reject) {
            resolve();
        });
    },
    show: function show() {
        return new Promise(function(resolve, reject) {
            resolve();
        });
    },
    onClose: function onClose() {},
    offClose: function offClose() {},
    onError: function onError() {},
    offError: function offError() {}
})], _weixin.prototype, "createRewardedVideoAd", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "getShareInfo", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "onShareAppMessage", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "offShareAppMessage", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "shareAppMessage", null);

__decorate([catchWxNotDefined()], _weixin.prototype, "vibrateShort", null);

var WeiXin = new _weixin();
var Model2D;

(function(Model2D) {
    function instantiate_sprite_with_anchor(url) {
        var anchorX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
        var anchorY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
        var size = arguments.length > 3 ? arguments[3] : undefined;
        var n = new Laya.Sprite();
        var cmp = n.addComponent(Achor_Image);
        cmp.url = url;
        cmp.anchorX = anchorX;
        cmp.anchorY = anchorY;
        cmp.size = size;
        return n;
    }

    Model2D.instantiate_sprite_with_anchor = instantiate_sprite_with_anchor;

    function instantiate_image_with_anchor(url, anchorX, anchorY, size) {
        var img = new Laya.Image();
        img.anchorX = anchorX;
        img.anchorY = anchorY;
        img.skin = url;

        if (size) {
            img.width = size.x;
            img.height = size.y;
        }

        return img;
    }

    Model2D.instantiate_image_with_anchor = instantiate_image_with_anchor;

    function instantiate_txt_with_anchor(txt, font_size, size, anchorX, anchorY, color) {
        var n = new Laya.Label();
        n.text = txt;
        n.fontSize = font_size;
        n.color = color;
        n.valign = 'middle';
        n.align = 'center';
        n.size(size.x, size.y);
        n.anchorX = anchorX;
        n.anchorY = anchorY;
        return n;
    }

    Model2D.instantiate_txt_with_anchor = instantiate_txt_with_anchor;

    function addchild_at_center(sp, child) {
        sp.addChild(child);
        child.pos(child.x - sp.width / 2, child.y - sp.height / 2);
    }

    Model2D.addchild_at_center = addchild_at_center;

    var Achor_Image =
        /*#__PURE__*/
        function(_Laya$Script) {
            _inherits(Achor_Image, _Laya$Script);

            function Achor_Image() {
                _classCallCheck(this, Achor_Image);

                return _possibleConstructorReturn(this, _getPrototypeOf(Achor_Image).apply(this, arguments));
            }

            _createClass(Achor_Image, [{
                key: "onAwake",
                value: function onAwake() {
                    this.sp = new Laya.Sprite();
                    this.owner.addChild(this.sp);

                    if (this.size) {
                        this.sp.width = this.size.x;
                        this.sp.height = this.size.y;
                    }

                    this.sp.loadImage(this.url, Laya.Handler.create(this, this.on_load_finish));
                }
            }, {
                key: "on_load_finish",
                value: function on_load_finish() {
                    var texture = this.sp.texture;

                    if (!this.size) {
                        this.sp.pos(-this.anchorX * texture.sourceWidth, -this.anchorY * texture.sourceHeight);
                    } else this.sp.pos(-this.anchorX * this.size.x, -this.anchorY * this.size.y);
                }
            }, {
                key: "on",
                value: function on(type, caller, listener) {
                    this.sp.on(type, caller, listener);
                }
            }]);

            return Achor_Image;
        }(Laya.Script);

    Model2D.Achor_Image = Achor_Image;

    function generate_layout_sprite(center_node, row, coloum, width, height) {
        var sps = [];

        for (var i = 0; i < row * coloum; i++) {
            var sp_icon = new Laya.Sprite();
            var rid = Math.floor(i / 3);
            var cid = i % 3;
            sp_icon.pos((cid - (coloum - 1) / 2) * width, (rid - (row - 1) / 2) * height);
            sps.push(sp_icon);
            center_node.addChild(sp_icon);
        }

        return sps;
    }

    Model2D.generate_layout_sprite = generate_layout_sprite;
})(Model2D || (Model2D = {}));

var Util;

(function(Util) {
    function v4(x, y, z, w) {
        return new Laya.Vector4(x, y, z, w);
    }

    Util.v4 = v4;

    function v3(x, y, z) {
        return new Laya.Vector3(x, y, z);
    }

    Util.v3 = v3;

    function v2(x, y) {
        return new Laya.Vector2(x, y);
    }

    Util.v2 = v2;

    function subv3(v1, v2) {
        var t = v3(0, 0, 0);
        Laya.Vector3.subtract(v1, v2, t);
        return t;
    }

    Util.subv3 = subv3;

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    Util.random = random;

    function add_childs(node, childs) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = childs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var c = _step.value;
                node.addChild(c);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    Util.add_childs = add_childs;

    function deactive_children(node) {
        for (var i = 0; i < node.numChildren; i++) {
            var c = node.getChildAt(i);
            deactive_node(c);
        }
    }

    Util.deactive_children = deactive_children;

    function get_angle(xx, yy) {
        var obl = Math.sqrt(Math.pow(xx, 2) + Math.pow(yy, 2));
        if (obl == 0) return 0;
        var rad = yy < 0 ? Math.acos(xx / obl) : Math.PI * 2 - Math.acos(xx / obl);
        return rad * 180 / Math.PI;
    }

    Util.get_angle = get_angle;

    function get_average_v3(v3_arr) {
        var x = 0,
            y = 0,
            z = 0;
        var size = v3_arr.length;

        for (var i = 0; i < size; i++) {
            x += v3_arr[i].x;
            y += v3_arr[i].y;
            z += v3_arr[i].z;
        }

        return v3(x / size, y / size, z / size);
    }

    Util.get_average_v3 = get_average_v3;

    var EventDispatcher =
        /*#__PURE__*/
        function() {
            function EventDispatcher() {
                _classCallCheck(this, EventDispatcher);

                this.nodeList = [];
            }

            _createClass(EventDispatcher, [{
                key: "sendMessage",
                value: function sendMessage(func) {
                    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        args[_key2 - 1] = arguments[_key2];
                    }

                    for (var i = 0; i < this.nodeList.length; i++) {
                        var scriptNode = this.nodeList[i];

                        if (scriptNode[func] && !scriptNode.destroyed) {
                            scriptNode[func].apply(scriptNode, args);
                        }
                    }
                }
            }, {
                key: "remove",
                value: function remove(scriptNode) {
                    var _this = this;

                    Laya.timer.callLater(null, function() {
                        for (var i = 0; i < _this.nodeList.length; i++) {
                            if (_this.nodeList[i] === scriptNode) {
                                _this.nodeList.splice(i, 1);

                                break;
                            }
                        }
                    });
                }
            }, {
                key: "register",
                value: function register(scriptNode) {
                    this.nodeList.push(scriptNode);
                }
            }]);

            return EventDispatcher;
        }();

    Util.event_dispatcher = new EventDispatcher();

    function find(node, name) {
        var ns = name.split('/');
        var nd = null;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = ns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var n = _step2.value;
                if (!nd) nd = node.getChildByName(n);
                else nd = nd.getChildByName(n);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return nd;
    }

    Util.find = find;

    function deactive_node(node) {
        node.visible = false;
        node.active = false;
    }

    Util.deactive_node = deactive_node;

    function active_node(node) {
        node.visible = true;
        node.active = true;
    }

    Util.active_node = active_node;

    function clamp(n, min, max) {
        if (n > max) {
            return max;
        }

        if (n < min) {
            return min;
        }

        return n;
    }

    Util.clamp = clamp;

    function is_weixin() {
        return typeof wx != "undefined";
    }

    Util.is_weixin = is_weixin;

    function is_qg() {
        return typeof qg != "undefined";
    }

    Util.is_qg = is_qg;

    function get_children(node) {
        var length = node.numChildren;
        var children = [];

        for (var i = 0; i < length; i++) {
            var c = node.getChildAt(i);
            children.push(c);
        }

        return children;
    }

    Util.get_children = get_children;

    function play_sound(url) {
        var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (!is_weixin()) {
            Laya.SoundManager.playSound(url, 1);
        } else {
            var sound = Laya.Pool.getItem(url);

            if (sound == null) {
                sound = WeiXin.createInnerAudioContext();
                sound.src = url;
                sound.play();
                sound.volume = volume;
                sound.onEnded(function() {
                    Laya.Pool.recover(url, sound);
                });
            } else {
                sound.volume = volume;
                sound.play();
            }
        }
    }

    Util.play_sound = play_sound;
    var _bgm_sound = null;

    function play_music(url) {
        var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (!is_weixin()) {
            Laya.SoundManager.playMusic(url, 0);
        } else {
            if (!_bgm_sound) {
                _bgm_sound = WeiXin.createInnerAudioContext();

                _bgm_sound.onError(function(res) {
                    Util.event_dispatcher.sendMessage("on_debug_message", "音频出错" + res.errMsg + res.errCode);
                });

                _bgm_sound.src = url;

                _bgm_sound.play();

                _bgm_sound.volume = volume;
                _bgm_sound.loop = true;
                _bgm_sound.autoplay = true;
            } else {
                _bgm_sound.volume = volume;

                _bgm_sound.play();
            }
        }
    }

    Util.play_music = play_music;

    function stop_music() {
        if (!is_weixin()) {
            Laya.SoundManager.stopMusic();
        } else {
            _bgm_sound.stop();
        }
    }

    Util.stop_music = stop_music;

    function play_sound_for_weixin(arr) {}

    Util.play_sound_for_weixin = play_sound_for_weixin;

    function convert_number_to_string(points) {
        var precise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        if (points < Math.pow(10, 3)) return points + '';
        else if (points < Math.pow(10, 6)) return (points / Math.pow(10, 3)).toFixed(precise) + 'K';
        else if (points < Math.pow(10, 9)) return (points / Math.pow(10, 6)).toFixed(precise) + 'M';
        else if (points < Math.pow(10, 12)) return (points / Math.pow(10, 9)).toFixed(precise) + 'B';
        else if (points < Math.pow(10, 15)) return (points / Math.pow(10, 12)).toFixed(precise) + 'T';
        else if (points < Math.pow(10, 18)) return (points / Math.pow(10, 15)).toFixed(precise) + 'aa';
        else if (points < Math.pow(10, 21)) return (points / Math.pow(10, 18)).toFixed(precise) + 'ab';
        else if (points < Math.pow(10, 24)) return (points / Math.pow(10, 21)).toFixed(precise) + 'ac';
        else if (points < Math.pow(10, 27)) return (points / Math.pow(10, 24)).toFixed(precise) + 'ad';
        else if (points < Math.pow(10, 30)) return (points / Math.pow(10, 27)).toFixed(precise) + 'ae';
        else if (points < Math.pow(10, 33)) return (points / Math.pow(10, 30)).toFixed(precise) + 'bb';
    }

    Util.convert_number_to_string = convert_number_to_string;

    function http_get(url, cb) {
        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;
        var xhr = new XMLHttpRequest();
        var time = false;
        var timer = setTimeout(function() {
            time = true;
            this.httpCount--;
            xhr.abort();
            cb(0, null);
        }, timeout);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (time) return;
                clearTimeout(timer);

                if ((xhr.status === 200 || xhr.status === 304) && xhr.responseText.length > 0) {
                    cb(200, xhr.responseText);
                } else {
                    cb(0, null);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send(null);
    }

    Util.http_get = http_get;

    function get_random_from_array(a) {
        if (a.length < 0) return null;
        var id = Math.floor(Math.random() * a.length);
        return a[id];
    }

    Util.get_random_from_array = get_random_from_array;

    function show_Tip(node, msg) {
        var sp = Model2D.instantiate_sprite_with_anchor('spear_io_public/ui_public_bg_blue.jpg', 0.5, 0.5, v2(578, 126));
        sp.alpha = 0.8;
        var txt = Model2D.instantiate_txt_with_anchor(msg, 45, v2(578, 126), 0.5, 0.5, "#FFFFFF");
        node.addChild(sp);
        Model2D.addchild_at_center(sp, txt);
        Laya.Tween.to(sp, {
            y: -150
        }, 1000);
        Laya.timer.frameOnce(60, null, function() {
            sp.removeSelf(), txt.removeSelf(), sp.destroy(), txt.destroy();
        });
    }

    Util.show_Tip = show_Tip;

    function show_video(layer, btn, Variable) {
        share_app(layer, Variable.share_data.cloud_share_msg, "", Variable.share_data.share_enabled, btn);

        if (!is_qg() && !is_weixin()) {
            layer.getVideoBonus();
        }

        return;
    }

    Util.show_video = show_video;

    function share_app(layer, cloud_share_msg) {
        var city = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var is_share_enabled = arguments.length > 3 ? arguments[3] : undefined;
        var btn = arguments.length > 4 ? arguments[4] : undefined;
        if (!btn.active) return;
        btn.active = false;

        if (!is_share_enabled) {
            show_Tip(layer.getNode(), "今日视频已经看完");
            return;
        }

        cloud_share_msg.title = cloud_share_msg.title.replace("${city}", city);
        WeiXin.shareAppMessage(cloud_share_msg);
        WeiXin._shared_timestamp = Date.now();

        var success_callback = function success_callback() {
            if (WeiXin.getShareSuccessStatus()) {
                Util.show_Tip(layer.getNode(), '成功领取奖励');
                Laya.timer.once(600, layer, layer.getVideoBonus);
                Laya.timer.once(600, null, function() {
                    return btn.active = true;
                });
            } else {
                btn.active = true;
                WeiXin.showModal({
                    title: '提示',
                    confirmText: '重新分享',
                    cancelText: '取消',
                    content: '该群已分享过，请换个群',
                    success: function success(res) {
                        if (res.confirm) {
                            share_app(layer, cloud_share_msg, city, is_share_enabled, btn);
                        } else if (res.cancel) {
                            return;
                        }
                    }
                });
            }

            WeiXin.offShow(success_callback);
        };

        WeiXin.onShow(success_callback);
    }

    Util.share_app = share_app;

    function switch_video_and_share_btn(btn_video, btn_share, is_new_player, share_enabled, is_in_white_list, get_bonus_time, new_player_shared_time, old_player_share_time) {
        if ((is_new_player && get_bonus_time < new_player_shared_time || get_bonus_time < old_player_share_time) && share_enabled && is_in_white_list) {
            active_node(btn_share);
            deactive_node(btn_video);
        } else {
            active_node(btn_video);
            deactive_node(btn_share);
        }
    }

    Util.switch_video_and_share_btn = switch_video_and_share_btn;

    function set_color_filter_color(f, r, g, b) {}

    Util.set_color_filter_color = set_color_filter_color;

    function get_color_filter_color(f) {
        return v3(0, 0, 0);
    }

    Util.get_color_filter_color = get_color_filter_color;

    function set_sprite_color(sp, color) {
        var color_mat = [color.x, 0, 0, 0, 0, 0, color.y, 0, 0, 0, 0, 0, color.z, 0, 0, 0, 0, 0, 1, 0];
        var filter = new Laya.ColorFilter(color_mat);
        sp.filters = [filter];
        return filter;
    }

    Util.set_sprite_color = set_sprite_color;

    function generate_grid_pos(coloum, row, width, height) {
        var pos = [];

        for (var i = 0; i < row * coloum; i++) {
            var sp_icon = new Laya.Sprite();
            var rid = Math.floor(i / coloum);
            var cid = i % coloum;
            pos.push(v2((cid - (coloum - 1) / 2) * width, (rid - (row - 1) / 2) * height));
        }

        return pos;
    }

    Util.generate_grid_pos = generate_grid_pos;

    function generate_bezier_curve(start_pos, mid_pos, end_pos, size) {
        var arr = [];

        for (var i = 0; i <= size; i++) {
            var x1 = start_pos.x + (mid_pos.x - start_pos.x) * i / size;
            var y1 = start_pos.y + (mid_pos.y - start_pos.y) * i / size;
            var x2 = mid_pos.x + (end_pos.x - mid_pos.x) * i / size;
            var y2 = mid_pos.y + (end_pos.y - mid_pos.y) * i / size;
            var x = x1 + (x2 - x1) * i / size;
            var y = y1 + (y2 - y1) * i / size;
            arr.push(v2(x, y));
        }

        return average_bezier_curve(arr);
    }

    Util.generate_bezier_curve = generate_bezier_curve;

    function average_bezier_curve(points) {
        var lines = new Array();

        function calc_line_length(lines) {
            var line_s = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = lines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var l = _step3.value;
                    var p1 = l.p1;
                    var p2 = l.p2;
                    line_s += Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return line_s;
        }

        function get_point_in_line_by_length(length, line) {
            var p1 = line.p1;
            var p2 = line.p2;
            var s = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
            var per = length / s;
            return Util.v2(line.p1.x + (line.p2.x - line.p1.x) * per, line.p1.y + (line.p2.y - line.p1.y) * per);
        }

        for (var i = 0; i < points.length - 1; i++) {
            var p1 = points[i];
            var p2 = points[i + 1];
            lines.push({
                p1: p1,
                p2: p2
            });
        }

        var average_line_length = calc_line_length(lines) / lines.length;
        var averaged_points = [points[0]];

        while (lines.length > 1) {
            var line_s = calc_line_length([lines[0]]);
            var p = null;

            if (line_s <= average_line_length) {
                var sum_length = 0;
                var index_for_trim = 0;
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = lines[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var n = _step4.value;
                        sum_length += calc_line_length([n]);

                        if (sum_length < average_line_length) {
                            index_for_trim++;
                        } else {
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                sum_length = calc_line_length(lines.splice(0, index_for_trim));
                p = get_point_in_line_by_length(average_line_length - sum_length, lines[0]);
                lines[0].p1.setValue(p.x, p.y);
                averaged_points.push(p);
            } else {
                p = get_point_in_line_by_length(average_line_length, lines[0]);
                lines[0].p1.setValue(p.x, p.y);
                averaged_points.push(p);
            }
        }

        return averaged_points;
    }

    Util.average_bezier_curve = average_bezier_curve;

    function show_effect_coin_add(coins, music, world_pos_x, world_pos_y) {
        var _loop = function _loop(i) {
            var coin = coins.getChildAt(i);
            Util.active_node(coin);
            var coin_x = coin.x;
            var coin_y = coin.y;
            var point = coin.globalToLocal(new Laya.Point(world_pos_x, world_pos_y));
            Laya.Tween.to(coin, {
                x: point.x,
                y: point.y
            }, 450, null, Laya.Handler.create(null, function() {
                coin.x = coin_x;
                coin.y = coin_y;
                Util.deactive_node(coin);
                Util.play_sound(music);
            }), 800 * i / coins.numChildren, true);
        };

        for (var i = 0; i < coins.numChildren; i++) {
            _loop(i);
        }
    }

    Util.show_effect_coin_add = show_effect_coin_add;
})(Util || (Util = {}));

var _oppo_qg =
    /*#__PURE__*/
    function() {
        function _oppo_qg() {
            _classCallCheck(this, _oppo_qg);

            this.cloud_config_url = "";
            this.systemInfo = {
                brand: '',
                model: '',
                pixelRatio: 0,
                screenWidth: 0,
                screenHeight: 0,
                windowWidth: 0,
                windowHeight: 0,
                language: '',
                system: '',
                platform: '',
                platformVersion: 0,
                notchHeight: 0
            };
            this.videoEnabled = true;
            this.VideoAdsType = {
                continue: '139752'
            };
            this.BannerAdsType = {
                Banner_1: '139747',
                Banner_2: '139747',
                Banner_3: '139747',
                Banner_4: '139747',
                Banner_5: '139747'
            };
            this.YouziType = {
                appId: '30220768',
                resVersion: '1.00.00',
                miniGamePlatType: MiniGame_Plat_Type.OppoMiniGame
            };

            if (this.is_qg()) {
                this.systemInfo = this.getSystemInfoSync();
                qg.initAdService({
                    appId: "30220768",
                    isDebug: false,
                    success: function success(res) {
                        console.log("success");
                    },
                    fail: function fail(res) {
                        console.log("fail:" + res.code + res.msg);
                    },
                    complete: function complete(res) {
                        console.log("complete");
                    }
                });
            }
        }

        _createClass(_oppo_qg, [{
            key: "is_qg",
            value: function is_qg() {
                return typeof qg != 'undefined';
            }
        }, {
            key: "getSystemInfoSync",
            value: function getSystemInfoSync() {
                return qg.getSystemInfoSync();
            }
        }, {
            key: "getLaunchOptionsSync",
            value: function getLaunchOptionsSync() {
                return qg.getLaunchOptionsSync();
            }
        }, {
            key: "navigateToMiniProgram",
            value: function navigateToMiniProgram(param) {
                if (!this.is_qg() && param.success) {
                    param.success();
                }

                qg.navigateToMiniProgram(param);
            }
        }, {
            key: "instantiateBannerAtBottomCenter",
            value: function instantiateBannerAtBottomCenter(bannerAdsID) {
                var ad = OPPOQG.createBannerAd({
                    posId: bannerAdsID
                });
                ad.onError(function(err) {
                    console.log('banner ads 加载失败');
                });
                return ad;
            }
        }, {
            key: "createBannerAd",
            value: function createBannerAd(param) {
                if (this.systemInfo) {
                    if (compareVersion(this.systemInfo.platformVersion.toString(), '1031') < 0 || !this.is_qg()) {
                        return {
                            hide: function hide() {},
                            destroy: function destroy() {},
                            show: function show() {},
                            onError: function onError() {},
                            offError: function offError() {}
                        };
                    }
                }

                return qg.createBannerAd(param);
            }
        }, {
            key: "createRewardedVideoAd",
            value: function createRewardedVideoAd(param) {
                if (this.systemInfo) {
                    if (compareVersion(this.systemInfo.platformVersion.toString(), '1031') < 0) {
                        return {
                            load: function load() {
                                return new Promise(function(resolve, reject) {
                                    resolve();
                                });
                            },
                            show: function show() {
                                return new Promise(function(resolve, reject) {
                                    resolve();
                                });
                            },
                            onClose: function onClose() {},
                            offClose: function offClose() {},
                            onError: function onError() {},
                            offError: function offError() {},
                            onLoad: function onLoad() {},
                            offLoad: function offLoad() {}
                        };
                    }
                }

                return qg.createRewardedVideoAd(param);
            }
        }, {
            key: "vibrateShort",
            value: function vibrateShort() {
                this.is_qg() && qg.vibrateShort({});
            }
        }, {
            key: "instantiateRewardedVideo",
            value: function instantiateRewardedVideo(_adunitId, success, error, failed) {
                var video = this.createRewardedVideoAd({
                    posId: _adunitId
                });

                var onClose = function onClose(res) {
                    if (res.isEnded) {
                        success();
                    } else if (failed) {
                        failed();
                    }

                    video.offClose(onClose);
                    video.offError(onError);
                };

                var onError = function onError(res) {
                    error(res.errMsg);
                    video.offClose(onClose);
                    video.offError(onError);
                };

                video.onClose(onClose);
                video.onError(onError);
                video.load();
                video.onLoad(function() {
                    console.log("激励视频加载成功");
                    video.show();
                });
            }
        }, {
            key: "initYouzi",
            value: function initYouzi(appId, resVersion, miniGamePlatType) {
                YouziCenter.getInstance().initYouzi(appId, resVersion, miniGamePlatType);
            }
        }]);

        return _oppo_qg;
    }();

var OPPOQG = new _oppo_qg();

var SDKManager =
    /*#__PURE__*/
    function() {
        _createClass(SDKManager, [{
            key: "is_wx",
            value: function is_wx() {
                return typeof wx != 'undefined';
            }
        }, {
            key: "is_qg",
            value: function is_qg() {
                return typeof qg != 'undefined';
            }
        }, {
            key: "is_mini_game",
            value: function is_mini_game() {
                if (this.sdk) return true;
                return false;
            }
        }]);

        function SDKManager() {
            _classCallCheck(this, SDKManager);

            if (this.is_wx()) {
                this.sdk = WeiXin;
            } else if (this.is_qg()) {
                this.sdk = OPPOQG;
            }

            if (this.is_mini_game()) {
                this.VideoAdsType = this.sdk.VideoAdsType;
                this.BannerAdsType = this.sdk.BannerAdsType;
                this.banners = new Banners(this.sdk.BannerAdsType);
                this.cloud_config_url = this.sdk.cloud_config_url;
                this.YouziType = this.sdk.YouziType;
            } else {
                this.VideoAdsType = WeiXin.VideoAdsType;
                this.BannerAdsType = WeiXin.BannerAdsType;
                this.banners = new Banners(WeiXin.BannerAdsType);
                this.cloud_config_url = WeiXin.cloud_config_url;
                this.YouziType = WeiXin.YouziType;
            }
        }

        _createClass(SDKManager, [{
            key: "instantiateBannerAtBottomCenter",
            value: function instantiateBannerAtBottomCenter(bannerAdsID) {
                if (this.sdk) {
                    return this.sdk.instantiateBannerAtBottomCenter(bannerAdsID);
                } else {
                    return WeiXin.instantiateBannerAtBottomCenter(bannerAdsID);
                }
            }
        }, {
            key: "instantiateRewardedVideo",
            value: function instantiateRewardedVideo(_adunitId, success, error, failed) {
                if (this.sdk) {
                    return this.sdk.instantiateRewardedVideo(_adunitId, success, error, failed);
                }
            }
        }, {
            key: "vibrateShort",
            value: function vibrateShort() {
                this.sdk && this.sdk.vibrateShort();
            }
        }, {
            key: "initYouzi",
            value: function initYouzi() {
                if (this.sdk) {
                    this.sdk.initYouzi(this.sdk.YouziType.appId, this.sdk.YouziType.resVersion, this.sdk.YouziType.miniGamePlatType);
                } else {
                    WeiXin.initYouzi(WeiXin.YouziType.appId, WeiXin.YouziType.resVersion, WeiXin.YouziType.miniGamePlatType);
                }
            }
        }]);

        return SDKManager;
    }();

var Banners =
    /*#__PURE__*/
    function() {
        function Banners(bannder_ads) {
            _classCallCheck(this, Banners);

            this.banners = [];
            this.p_current = 0;
            this.p_current_mistake = 0;
            this.banner_ads_type = [];

            for (var key in bannder_ads) {
                if (bannder_ads.hasOwnProperty(key)) {
                    var type = bannder_ads[key];
                    this.banner_ads_type.push(type);
                    this.banners.push(null);
                }
            }

            this.banner_ads_type.sort(function(a, b) {
                return Math.random() > 0.5 ? -1 : 1;
            });
        }

        _createClass(Banners, [{
            key: "get_next_exposure_banner",
            value: function get_next_exposure_banner() {
                var b = this.banners[this.p_current];

                if (b) {
                    b.destroy();
                }

                this.banners[this.p_current] = sdk_manager.instantiateBannerAtBottomCenter(this.banner_ads_type[this.p_current]);
                var p_before = this.p_current;
                this.p_current = (this.p_current + 1) % this.banners.length;
                return this.banners[p_before];
            }
        }, {
            key: "get_next_mistake_touch_banner",
            value: function get_next_mistake_touch_banner() {
                var p_before = this.p_current_mistake;
                this.p_current_mistake = (this.p_current_mistake + 1) % this.banners.length;
                return this.banners[p_before];
            }
        }]);

        return Banners;
    }();

var sdk_manager = new SDKManager();
sdk_manager.banners.get_next_exposure_banner();
var Variable;

(function(Variable) {
    Variable.current_lvl = 0;
    Variable.coins = 0;
    Variable.coin_bonus = 1;
    Variable.is_game_start = false;
    Variable.player_rank = 3;
    Variable.current_pos = 1;
    Variable.is_touch_finish_line = false;
    Variable.coin_collected = 59;
    Variable.finished_cnt = 0;
    Variable.on_line_played_cnt = 0;
    Variable.today_share_time = 0;
    Variable.is_new_player = true;
    Variable.is_auto_test = false;
    Variable.current_player = Const.get_item_by_id(0);
    Variable.current_color = Util.v3(0.3, 0.3, 0.98);
    Variable.scene_id = 0;
    Variable.is_in_share_white_list = false;
    Variable.mistake_touch_data = {
        is_in_white_list: false,
        mistouch_list: [0, 0, 0, 0, 0, 0]
    };

    function get_player_speed() {
        if (WeiXin.is_iphone_6()) return 0.3;
        else return 0.15;
    }

    Variable.get_player_speed = get_player_speed;

    function get_current_theme() {
        return Math.floor(Variable.current_lvl / 3) % 5;
    }

    Variable.get_current_theme = get_current_theme;
    Variable.share_data = {
        share_enabled: false,
        new_player_share_time: 0,
        old_player_share_time: 0,
        cloud_share_msg: {
            title: '@你，单挑，敢就来！',
            imageUrlId: '',
            imageUrl: 'http://xiazai.qi-guo.cn/spear/sharepic/pic1.jpg',
            query: ''
        }
    };
    Variable.unlocked_items = [0];

    function is_current_play_cnt_active_mistake() {
        return Variable.mistake_touch_data.is_in_white_list && Variable.mistake_touch_data.mistouch_list[Variable.on_line_played_cnt % 6] == 1;
    }

    Variable.is_current_play_cnt_active_mistake = is_current_play_cnt_active_mistake;

    function on_restart_game() {
        Variable.player_rank = 5;
        Variable.current_pos = 0;
        Variable.coin_collected = 0;
        Variable.is_touch_finish_line = false;
    }

    Variable.on_restart_game = on_restart_game;

    function save() {
        var data = new Saved_Data();
        data.coins = Variable.coins;
        data.current_lvl = Variable.current_lvl;
        data.finished_cnt = Variable.finished_cnt;
        data.is_in_white_list = Variable.mistake_touch_data.is_in_white_list;
        data.is_in_share_white_list = Variable.is_in_share_white_list;
        data.time_stamp = Date.now();
        data.today_share_time = Variable.today_share_time;
        data.unlocked_items = Variable.unlocked_items;
        data.current_player_id = Variable.current_player.id;
        Laya.LocalStorage.setItem(storage_key, JSON.stringify(data));
    }

    Variable.save = save;

    function load() {
        var s = Laya.LocalStorage.getItem(storage_key);

        if (s) {
            var data = JSON.parse(s);
            data.current_lvl && (Variable.current_lvl = data.current_lvl);
            data.coins && (Variable.coins = data.coins);
            data.finished_cnt && (Variable.finished_cnt = data.finished_cnt);
            data.today_share_time && (Variable.today_share_time = data.today_share_time);
            data.unlocked_items && (Variable.unlocked_items = data.unlocked_items);
            data.is_in_share_white_list != undefined && (Variable.is_in_share_white_list = data.is_in_share_white_list);
            data.current_player_id != undefined && (Variable.current_player = Const.get_item_by_id(data.current_player_id));

            if (data.is_in_white_list != undefined) {
                Variable.mistake_touch_data.is_in_white_list = data.is_in_white_list;
                Variable.is_new_player = false;
            }

            if (data.time_stamp) {
                if (get_day_time_stamp(Date.now()) - get_day_time_stamp(data.time_stamp) >= 60 * 1000 * 60 * 24) {
                    Variable.today_share_time = 0;
                }
            }
        }
    }

    Variable.load = load;

    function get_day_time_stamp(time_stamp) {
        return time_stamp - time_stamp % (60 * 1000 * 60 * 24);
    }

    function get_ai_speed() {
        if (Variable.current_lvl < 5) return 8;
        if (Variable.current_lvl < 10) return 12;
        if (Variable.current_lvl < 15) return 18;
        if (Variable.current_lvl < 20) return 26;
        if (Variable.current_lvl < 25) return 35;
        if (Variable.current_lvl < 30) return 40;
        if (Variable.current_lvl < 35) return 41;
        return 16;
    }

    Variable.get_ai_speed = get_ai_speed;

    var Saved_Data = function Saved_Data() {
        _classCallCheck(this, Saved_Data);
    };

    function init_data_on_wx_show() {
        WeiXin.onShow(function(res) {
            console.log('场景值', res.scene);
            Variable.scene_id = res.scene;
            if (res.scene == 1008 || res.scene == 1007);
            Util.play_music(Const.GAME_RES.music_bg);
        });
        var updateManager = WeiXin.getUpdateManager();
        updateManager.onCheckForUpdate(function(res) {
            console.log(res.hasUpdate);
        });
        updateManager.onUpdateReady(function() {
            WeiXin.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function success(res) {
                    if (res.confirm) {
                        updateManager.applyUpdate();
                    }
                }
            });
        });
        updateManager.onUpdateFailed(function() {});
        typeof wx != "undefined" && WeiXin.onShareAppMessage(function() {
            return Variable.share_data.cloud_share_msg;
        });
    }

    var client_version = "0.0.5";

    function fetch_cloud_data(cb) {
        Util.http_get(sdk_manager.cloud_config_url, function(code, res) {
            cb();

            if (!res) {
                return;
            }

            var res_obj = JSON.parse(res);

            if (res_obj.censorship_version) {
                if (res_obj.censorship_version == client_version) {
                    return;
                }
            }

            if (res_obj.share_white_list_scenes.indexOf(Variable.scene_id) >= 0) {
                Variable.is_new_player && (Variable.is_in_share_white_list = true);
            }

            if (res_obj.mistake_touch_white_list_scenes.indexOf(Variable.scene_id) >= 0) {
                Variable.is_new_player && (Variable.mistake_touch_data.is_in_white_list = true);
            }

            res_obj.new_player_share_time && (Variable.share_data.new_player_share_time = res_obj.new_player_share_time);
            res_obj.old_player_share_time && (Variable.share_data.old_player_share_time = res_obj.old_player_share_time);
            res_obj.mistouch_list && (Variable.mistake_touch_data.mistouch_list = res_obj.mistouch_list);
            res_obj.share_enabled && (Variable.share_data.share_enabled = res_obj.share_enabled);

            if (Variable.mistake_touch_data.is_in_white_list) {
                res_obj.white_list_share_msg && (Variable.share_data.cloud_share_msg = res_obj.white_list_share_msg);
            } else {
                res_obj.share_msg && (Variable.share_data.cloud_share_msg = res_obj.share_msg);
            }

            if (res_obj.fake_share_msg_diabled_citys && Variable.is_in_share_white_list) {
                var is_fake_msg = false;
                res_obj.fake_share_msg_diabled_citys && (is_fake_msg = true);
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = res_obj.fake_share_msg_diabled_citys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var n = _step5.value;

                        if (Variable.city.indexOf(n) >= 0) {
                            is_fake_msg = false;
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }

                if (is_fake_msg) {
                    console.log('at cloud config loaded city :' + Variable.city);
                    Variable.share_data.cloud_share_msg = res_obj.fake_share_msg;
                }
            }
        });
    }

    Variable.fetch_cloud_data = fetch_cloud_data;

    function fetch_current_city(cb) {
        Util.http_get("https://www.ipip.net/ip.html", function(code, res) {
            if (res) {
                Variable.city = res.match(/地理位置<\/td>[\s]*.*[\s]*.*/)[0].replace(/地理位置<\/td>[\s]*.*[\s]*/, "").split('>')[1].replace('</span', "");
            }

            cb();
            console.log('city :', Variable.city);
        });
    }

    Variable.fetch_current_city = fetch_current_city;
    init_data_on_wx_show();
    Variable.city = '';
})(Variable || (Variable = {}));

var CollisionComponent =
    /*#__PURE__*/
    function(_Laya$Script3D) {
        _inherits(CollisionComponent, _Laya$Script3D);

        function CollisionComponent() {
            var _this2;

            _classCallCheck(this, CollisionComponent);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CollisionComponent).apply(this, arguments));
            _this2.collide_handlers = [];
            _this2.start_collide_handlers = [];
            _this2.exit_collide_handlers = [];
            _this2.collided_rbs = [];
            return _this2;
        }

        _createClass(CollisionComponent, [{
            key: "register_collide",
            value: function register_collide(handler) {
                this.collide_handlers.push(handler);
            }
        }, {
            key: "register_start_collide",
            value: function register_start_collide(handler) {
                this.start_collide_handlers.push(handler);
            }
        }, {
            key: "register_exit_collide",
            value: function register_exit_collide(handler) {
                this.exit_collide_handlers.push(handler);
            }
        }, {
            key: "onCollide",
            value: function onCollide(physics) {
                if (this.collided_rbs.indexOf(physics) < 0) {
                    this.collided_rbs.push(physics);
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = this.collide_handlers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var h = _step6.value;
                            h(physics);
                        }
                    } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                _iterator6.return();
                            }
                        } finally {
                            if (_didIteratorError6) {
                                throw _iteratorError6;
                            }
                        }
                    }
                }
            }
        }, {
            key: "onCollisionEnter",
            value: function onCollisionEnter(collision) {
                this.onCollide(collision.other);
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = this.start_collide_handlers[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var h = _step7.value;
                        h(collision.other);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
        }, {
            key: "onCollisionStay",
            value: function onCollisionStay(collision) {
                this.onCollide(collision.other);
            }
        }, {
            key: "onCollisionExit",
            value: function onCollisionExit(collision) {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = this.exit_collide_handlers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var h = _step8.value;
                        h(collision.other);
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                delete this.collide_handlers;
            }
        }]);

        return CollisionComponent;
    }(Laya.Script3D);

var TriggerComponent =
    /*#__PURE__*/
    function(_Laya$Script3D2) {
        _inherits(TriggerComponent, _Laya$Script3D2);

        function TriggerComponent() {
            var _this3;

            _classCallCheck(this, TriggerComponent);

            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TriggerComponent).apply(this, arguments));
            _this3.collide_handlers = [];
            _this3.start_collide_handlers = [];
            _this3.collided_physics = [];
            return _this3;
        }

        _createClass(TriggerComponent, [{
            key: "register_collide",
            value: function register_collide(handler) {
                this.collide_handlers.push(handler);
            }
        }, {
            key: "register_start_collide",
            value: function register_start_collide(handler) {
                this.start_collide_handlers.push(handler);
            }
        }, {
            key: "on_collide",
            value: function on_collide(physics) {
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = this.collide_handlers[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var h = _step9.value;
                        h(physics);
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }
            }
        }, {
            key: "onTriggerEnter",
            value: function onTriggerEnter(physics) {
                this.on_collide(physics);
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = this.start_collide_handlers[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var h = _step10.value;
                        h(physics);
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }
            }
        }, {
            key: "onTriggerStay",
            value: function onTriggerStay(physics) {
                this.on_collide(physics);
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                delete this.collide_handlers;
            }
        }]);

        return TriggerComponent;
    }(Laya.Script3D);

var Canvas =
    /*#__PURE__*/
    function(_Laya$Script2) {
        _inherits(Canvas, _Laya$Script2);

        function Canvas() {
            _classCallCheck(this, Canvas);

            return _possibleConstructorReturn(this, _getPrototypeOf(Canvas).apply(this, arguments));
        }

        _createClass(Canvas, [{
            key: "onUpdate",
            value: function onUpdate() {
                var sp = this.owner;
                if (!sp) throw "canvas must have a sprite component";
                sp.height = Laya.stage.height;
                sp.parent.height = Laya.stage.height;
                Laya.stage.height;
            }
        }]);

        return Canvas;
    }(Laya.Script);

var Joy_Stick =
    /*#__PURE__*/
    function(_Laya$Script3) {
        _inherits(Joy_Stick, _Laya$Script3);

        function Joy_Stick() {
            var _this4;

            _classCallCheck(this, Joy_Stick);

            _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Joy_Stick).call(this));
            _this4.tgt_angle = 0;
            _this4.angle = 0;
            _this4.radius = 100;
            _this4.temp = 0;
            _this4.isButtonDown = false;
            _this4.angle_speed = 10;
            Laya.timer.frameLoop(1, _assertThisInitialized(_this4), _this4.onButtonDown);
            return _this4;
        }

        _createClass(Joy_Stick, [{
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                this.rocker = this.owner.getChildByName("rocker");
                this.rocker_base = this.owner.getChildByName("rocker_base");
                this.base_center = new Laya.Vector2(this.rocker_base.x + this.rocker_base.width / 2, this.rocker_base.y + this.rocker_base.width / 2);
            }
        }, {
            key: "on_touch_down",
            value: function on_touch_down(x, y) {
                Util.active_node(this.rocker_base);
                Util.active_node(this.rocker);
                this.isButtonDown = true;
                this.rocker_base.x = x - this.rocker_base.width / 2;
                this.rocker_base.y = y - this.rocker_base.width / 2;
                this.base_center = new Laya.Vector2(this.rocker_base.x + this.rocker_base.width / 2, this.rocker_base.y + this.rocker_base.width / 2);
            }
        }, {
            key: "on_touch_release",
            value: function on_touch_release() {
                Util.deactive_node(this.rocker_base);
                Util.deactive_node(this.rocker);
                this.isButtonDown = false;
                Laya.Tween.to(this.rocker, {
                    x: this.base_center.x - this.rocker.width / 2,
                    y: this.base_center.y - this.rocker.width / 2
                }, 100, Laya.Ease.backIn);
                this.temp = 0;
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Laya.timer.clear(this, this.onButtonDown);
                Util.event_dispatcher.remove(this);
            }
        }, {
            key: "onButtonDown",
            value: function onButtonDown() {
                if (this.isButtonDown) {
                    this.on_rocker_mousemove();
                }
            }
        }, {
            key: "on_rocker_mousemove",
            value: function on_rocker_mousemove() {
                var xx = Laya.stage.mouseX - this.base_center.x;
                var yy = Laya.stage.mouseY - this.base_center.y;
                var obl = Math.sqrt(Math.pow(xx, 2) + Math.pow(yy, 2));
                var rad = this.getrad(xx, yy, obl);
                this.tgt_angle = 180 * rad / Math.PI;

                if (obl > this.radius) {
                    var rockerCircleX = this.radius * xx / obl + this.base_center.x;
                    var rockerCircleY = this.radius * yy / obl + this.base_center.y;
                    this.rocker.pos(rockerCircleX - this.rocker.width / 2, rockerCircleY - this.rocker.width / 2);
                } else {
                    this.rocker.pos(Laya.stage.mouseX - this.rocker.width / 2, Laya.stage.mouseY - this.rocker.width / 2);
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.isButtonDown) {
                    Util.event_dispatcher.sendMessage("on_controlled_player_change_radius", this.angle);
                    var sign = 1;
                    var delta = Math.abs(this.tgt_angle - this.angle);
                    delta < 180 ? sign *= 1 : sign *= -1;
                    this.tgt_angle - this.angle > 0 ? sign *= 1 : sign *= -1;

                    if (Math.abs(delta % 360) < this.angle_speed) {
                        this.angle = this.tgt_angle;
                    } else {
                        this.angle += this.angle_speed * sign;
                        this.angle = this.angle % 360;
                    }
                }
            }
        }, {
            key: "getrad",
            value: function getrad(xx, yy, obl) {
                var rad = yy < 0 ? Math.acos(xx / obl) : Math.PI * 2 - Math.acos(xx / obl);
                return rad;
            }
        }]);

        return Joy_Stick;
    }(Laya.Script);

var UI_User_Move_Panel =
    /*#__PURE__*/
    function(_Laya$Script4) {
        _inherits(UI_User_Move_Panel, _Laya$Script4);

        function UI_User_Move_Panel() {
            var _this5;

            _classCallCheck(this, UI_User_Move_Panel);

            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(UI_User_Move_Panel).apply(this, arguments));
            _this5.touch_down_point = Util.v2(0, 0);
            _this5.is_in_touch = false;
            _this5.touch_time = 0;
            return _this5;
        }

        _createClass(UI_User_Move_Panel, [{
            key: "onAwake",
            value: function onAwake() {
                var sp = this.owner;
                sp.on(Laya.Event.MOUSE_DOWN, this, this.on_mouse_down);
                sp.on(Laya.Event.MOUSE_UP, this, this.on_mouse_up);
                Util.event_dispatcher.register(this);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {}
        }, {
            key: "on_mouse_down",
            value: function on_mouse_down(e) {
                var touches = e.touches;
                this.is_in_touch = true;
                if (touches && touches.length == 1);
                this.touch_down_point.setValue(e.stageX, e.stageY);
                Util.event_dispatcher.sendMessage("on_touch_down", e.stageX, e.stageY);
            }
        }, {
            key: "on_mouse_up",
            value: function on_mouse_up(e) {
                this.is_in_touch = false;
                this.touch_time = 0;
                Util.event_dispatcher.sendMessage("on_touch_release");
            }
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {
                if (this.is_in_touch) {
                    this.touch_time += 0.016;
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }]);

        return UI_User_Move_Panel;
    }(Laya.Script);

var Button =
    /*#__PURE__*/
    function(_Laya$Script5) {
        _inherits(Button, _Laya$Script5);

        function Button() {
            _classCallCheck(this, Button);

            return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
        }

        _createClass(Button, [{
            key: "onClick",
            value: function onClick() {
                Util.event_dispatcher.sendMessage(this.event_msg);
            }
        }]);

        return Button;
    }(Laya.Script);

var UI_Metric_Wall =
    /*#__PURE__*/
    function(_Laya$Script6) {
        _inherits(UI_Metric_Wall, _Laya$Script6);

        function UI_Metric_Wall() {
            _classCallCheck(this, UI_Metric_Wall);

            return _possibleConstructorReturn(this, _getPrototypeOf(UI_Metric_Wall).apply(this, arguments));
        }

        _createClass(UI_Metric_Wall, [{
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
                Util.deactive_node(this.owner);
                this.next_btn = Util.find(this.owner, 'btn_next');
                this.next_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_next_button);
                YouziCenter.getInstance().createYouziSmallWall(this.owner, {
                    x: 60,
                    y: 200
                });
                var flow_banner = YouziCenter.getInstance().createBottomBanner(this.owner, null, false);
                WeiXin.isiPhoneXSeries && (flow_banner.y -= 20);
            }
        }, {
            key: "showMoreGameForCancel",
            value: function showMoreGameForCancel() {
                Util.active_node(this.owner);
            }
        }, {
            key: "on_show_ui_metric_wall",
            value: function on_show_ui_metric_wall() {
                Util.active_node(this.owner);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var _this6 = this;

                if (!this.owner.active) return;
                Util.deactive_node(this.next_btn);
                Laya.timer.frameOnce(2 * 60, null, function() {
                    Util.active_node(_this6.next_btn);
                });
                sdk_manager.is_wx() && WeiXin.set_banner_up_pixel(this.banner, 100);
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }, {
            key: "on_click_next_button",
            value: function on_click_next_button() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage("on_metric_wall_next_click");
            }
        }]);

        return UI_Metric_Wall;
    }(Laya.Script);

var UI_Continue =
    /*#__PURE__*/
    function(_Laya$Script7) {
        _inherits(UI_Continue, _Laya$Script7);

        function UI_Continue() {
            var _this7;

            _classCallCheck(this, UI_Continue);

            _this7 = _possibleConstructorReturn(this, _getPrototypeOf(UI_Continue).apply(this, arguments));
            _this7.BI_Ad_ID = 1;
            _this7.count_down_value = 5;
            _this7.AdUnitId = sdk_manager.VideoAdsType.continue;
            return _this7;
        }

        _createClass(UI_Continue, [{
            key: "getVideoBonus",
            value: function getVideoBonus() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage("on_continue");
            }
        }, {
            key: "getNode",
            value: function getNode() {
                return Util.find(this.owner, 'nd_tip');
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
                Util.deactive_node(this.owner);
                this.restart_btn = Util.find(this.owner, 'btn_restart');
                this.restart_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_restart_button);
                this.btn_continue = Util.find(this.owner, 'btn_continue');
                this.btn_continue.on(Laya.Event.MOUSE_UP, this, this.on_click_continue_button);
                this.circle_progressbar = Util.find(this.owner, "dcrt_restart/circle_progressbar");
                this.cMask = new Laya.Sprite();
                this.circle_progressbar.mask = this.cMask;
                YouziCenter.getInstance().createYouziSmallWall(this.owner, {
                    x: 60,
                    y: 380
                });
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                if (!this.owner.active) return;
                this.switch_continue_restart_btn(true);
                this.count_down_value = 5;
                Laya.Tween.to(this, {
                    count_down_value: 0
                }, 5000, null, null, 0, true);
                Laya.timer.frameOnce(0, this, this.switch_continue_restart_btn, [false], true);

                if (Variable.is_auto_test) {
                    +Laya.timer.callLater(this, this.on_click_restart_button);
                }
            }
        }, {
            key: "switch_continue_restart_btn",
            value: function switch_continue_restart_btn(is_continue) {
                if (is_continue) {
                    Util.deactive_node(this.restart_btn);
                } else {
                    Util.active_node(this.restart_btn);
                }
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                var lb_cnt_down = Util.find(this.owner, 'dcrt_restart/lb_cnt_down');
                lb_cnt_down.value = Math.ceil(this.count_down_value) + '';
                this.draw_circle_mask();
            }
        }, {
            key: "draw_circle_mask",
            value: function draw_circle_mask() {
                if (this.count_down_value > 0) {
                    this.cMask.graphics.clear();
                    this.cMask.graphics.drawPie(116, 116, 116, (5 - this.count_down_value) * 360 / 5 - 90, 0 - 90, "#ffffff");
                }
            }
        }, {
            key: "set_detail",
            value: function set_detail() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }, {
            key: "on_click_restart_button",
            value: function on_click_restart_button() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage("on_finish", "end", false);
            }
        }, {
            key: "on_click_continue_button",
            value: function on_click_continue_button() {
                var btn_continue = Util.find(this.owner, "btn_continue");
                Util.show_video(this, btn_continue, Variable);
            }
        }, {
            key: "on_finish",
            value: function on_finish(type, per) {
                if (type == 'continue') {
                    Util.active_node(this.owner);
                }
            }
        }]);

        return UI_Continue;
    }(Laya.Script);

var UI_Finish =
    /*#__PURE__*/
    function(_Laya$Script8) {
        _inherits(UI_Finish, _Laya$Script8);

        function UI_Finish() {
            var _this8;

            _classCallCheck(this, UI_Finish);

            _this8 = _possibleConstructorReturn(this, _getPrototypeOf(UI_Finish).apply(this, arguments));
            _this8.BI_Ad_ID = 2;
            _this8.AdUnitId = sdk_manager.VideoAdsType.continue;
            _this8.is_active = true;
            return _this8;
        }

        _createClass(UI_Finish, [{
            key: "on_check_box_clicked",
            value: function on_check_box_clicked() {
                var fc = Util.find(this.owner, "red_envolope/lb_coin");

                if (this.cb_double.selected) {
                    fc.value = '250';
                } else {
                    fc.value = '50';
                }
            }
        }, {
            key: "getVideoBonus",
            value: function getVideoBonus() {
                this.get_coin(250);
                var lb_coin = Util.find(this.owner, 'red_envolope/lb_coin');
                lb_coin.value = 250 + '';
            }
        }, {
            key: "getNode",
            value: function getNode() {
                return Util.find(this.owner, 'nd_tip');
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
                Util.deactive_node(this.owner);
                this.set_detail();
                var get_btn = Util.find(this.owner, "get_btn");
                get_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_finish_get_coin_button);
                this.cb_double = Util.find(this.owner, "cb_double");
                this.cb_double.on(Laya.Event.CLICK, this, this.on_check_box_clicked);
                this.ray = Util.find(this.owner, "red_envolope/ray");
                YouziCenter.getInstance().createBottomBanner(this.owner, {
                    x: 60,
                    y: 580
                }, false);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                if (!this.owner.active) return;
                this.cb_double.selected = false;
                this.on_check_box_clicked();
                this.set_detail();
                this.is_active = true;
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "set_detail",
            value: function set_detail() {
                var lb_lvl = Util.find(this.owner, 'lb_win/lb_lvl');
                lb_lvl.value = '';
                Variable.current_lvl + 1 + '';
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }, {
            key: "on_click_finish_share_btn",
            value: function on_click_finish_share_btn() {
                WeiXin.shareAppMessage(Variable.share_data.cloud_share_msg);
            }
        }, {
            key: "on_click_finish_get_coin_button",
            value: function on_click_finish_get_coin_button() {
                if (!this.is_active) return;
                var cb_double = Util.find(this.owner, "cb_double");

                if (cb_double.selected) {
                    Util.show_video(this, Util.find(this.owner, "get_btn"), Variable);
                } else this.get_coin(50);
            }
        }, {
            key: "get_coin",
            value: function get_coin(cnt) {
                this.is_active = false;
                Util.play_sound(Const.GAME_RES.music_open_Reward);
                var coins = Util.find(this.owner, 'red_envolope/coin');
                Variable.coins += cnt;
                Util.event_dispatcher.sendMessage('on_ui_coin_add', cnt, coins);
                Variable.save();
                Laya.timer.frameOnce(2 * 60, this, this.on_finish_get_coin);
            }
        }, {
            key: "on_finish_get_coin",
            value: function on_finish_get_coin() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage('on_finish', 'end', true);
            }
        }, {
            key: "on_finish",
            value: function on_finish(type) {
                if (type == 'finish') {
                    Util.active_node(this.owner);
                    Util.play_sound(Const.GAME_RES.music_crowd);
                    Variable.save();
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.ray.rotation += 1;
            }
        }]);

        return UI_Finish;
    }(Laya.Script);

var UI_End =
    /*#__PURE__*/
    function(_Laya$Script9) {
        _inherits(UI_End, _Laya$Script9);

        function UI_End() {
            _classCallCheck(this, UI_End);

            return _possibleConstructorReturn(this, _getPrototypeOf(UI_End).apply(this, arguments));
        }

        _createClass(UI_End, [{
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
                Util.deactive_node(this.owner);
                var restart_btn = Util.find(this.owner, 'btn_end');
                restart_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_end_button);
                var back_btn = Util.find(this.owner, 'btn_back');
                back_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_back_home_page_button);
                var bottom_back_btn = Util.find(this.owner, 'bottom_btn_back');
                bottom_back_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_back_home_page_button);
                var share_btn = Util.find(this.owner, "btn_share");
                share_btn.on(Laya.Event.MOUSE_UP, this, this.on_click_restart_share_btn);

                if (sdk_manager.is_wx()) {
                    Util.deactive_node(bottom_back_btn);
                } else {
                    Util.deactive_node(back_btn);
                    Util.deactive_node(share_btn);
                }

                YouziCenter.getInstance().createYouziSmallWall(this.owner, {
                    x: 60,
                    y: 380
                });
            }
        }, {
            key: "on_click_restart_share_btn",
            value: function on_click_restart_share_btn() {
                WeiXin.shareAppMessage(Variable.share_data.cloud_share_msg);
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                if (!this.owner.active) return;
                Variable.is_auto_test && Laya.timer.callLater(this, this.on_click_end_button);
            }
        }, {
            key: "onDisable",
            value: function onDisable() {}
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }, {
            key: "on_click_end_button",
            value: function on_click_end_button() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage("on_end");
            }
        }, {
            key: "on_click_back_home_page_button",
            value: function on_click_back_home_page_button() {
                Util.deactive_node(this.owner);
                Util.event_dispatcher.sendMessage("on_end");
            }
        }, {
            key: "on_finish",
            value: function on_finish(type, is_succ) {
                if (type == 'end') {
                    if (is_succ);
                    else {
                        Util.stop_music();
                        Util.play_sound(Const.GAME_RES.music_lose);
                    }
                    var image = Util.find(this.owner, 'btn_end/txt');
                    image.skin = is_succ ? "spear_io_finish/ui_finish_lb_next_level.png" : "spear_io_finish/ui_finish_btn_txt_restart.png";
                    var title = Util.find(this.owner, "lb_title");
                    title.skin = is_succ ? "spear_io_finish/ui_finish_title_success.png" : "spear_io_finish/ui_finish_title_fail.png";
                    Util.active_node(this.owner);
                }
            }
        }]);

        return UI_End;
    }(Laya.Script);

var UI_Coin =
    /*#__PURE__*/
    function(_Laya$Script10) {
        _inherits(UI_Coin, _Laya$Script10);

        function UI_Coin() {
            var _this9;

            _classCallCheck(this, UI_Coin);

            _this9 = _possibleConstructorReturn(this, _getPrototypeOf(UI_Coin).apply(this, arguments));
            _this9.coin_cnt = 0;
            return _this9;
        }

        _createClass(UI_Coin, [{
            key: "onAwake",
            value: function onAwake() {
                Util.event_dispatcher.register(this);
                this.lb_count = Util.find(this.owner, 'lb_count');
                this.coins = Util.find(this.owner, 'coins');
                Util.deactive_children(this.coins);
                this.fresh_coin_num();
            }
        }, {
            key: "fresh_coin_num",
            value: function fresh_coin_num() {
                this.lb_count.value = Variable.coins + '';
                this.coin_cnt = Variable.coins;
            }
        }, {
            key: "on_fresh_coin_num",
            value: function on_fresh_coin_num() {
                this.fresh_coin_num();
            }
        }, {
            key: "init_part",
            value: function init_part() {}
        }, {
            key: "show_particale",
            value: function show_particale() {}
        }, {
            key: "on_ui_coin_add",
            value: function on_ui_coin_add(num, coins) {
                var dcrt_coin_pos = Util.find(this.owner, "dcrt_coin").localToGlobal(new Laya.Point(0, 0));
                var coins_pos = this.owner.globalToLocal(coins.localToGlobal(new Laya.Point(0, 0)));
                this.coins.x = coins_pos.x;
                this.coins.y = coins_pos.y;
                Util.show_effect_coin_add(this.coins, Const.GAME_RES.music_coin, dcrt_coin_pos.x - 5, dcrt_coin_pos.y - 13);
                Laya.Tween.to(this, {
                    coin_cnt: this.coin_cnt + num
                }, 1200, null, Laya.Handler.create(this, this.fresh_coin_num), 600, true);
                Laya.timer.once(600, this, this.show_particale);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.lb_count.value = Math.round(this.coin_cnt) + '';
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Util.event_dispatcher.remove(this);
            }
        }]);

        return UI_Coin;
    }(Laya.Script);

var UI_More_Game =
    /*#__PURE__*/
    function(_Laya$Script11) {
        _inherits(UI_More_Game, _Laya$Script11);

        function UI_More_Game() {
            _classCallCheck(this, UI_More_Game);

            return _possibleConstructorReturn(this, _getPrototypeOf(UI_More_Game).apply(this, arguments));
        }

        _createClass(UI_More_Game, [{
            key: "onAwake",
            value: function onAwake() {
                this.more = YouziCenter.getInstance().createMoreGameUI(this.owner, null);
                YouziCenter.getInstance().registerNavigateToMiniCall(this.showMoreGameForCancel.bind(this));
            }
        }, {
            key: "showMoreGameForCancel",
            value: function showMoreGameForCancel(youziUIId) {
                switch (youziUIId) {
                    case YOUZI_UI_ID.Youzi_MainPush:
                    case YOUZI_UI_ID.Youzi_BottomBanner:
                    case YOUZI_UI_ID.Youzi_GuessLike:
                    case YOUZI_UI_ID.Youzi_GuessLikeH:
                        this.more.showMoreGameUI();
                        break;

                    default:
                        console.log('不需要弹出更多游戏');
                        break;
                }
            }
        }]);

        return UI_More_Game;
    }(Laya.Script);

var ProgressBar =
    /*#__PURE__*/
    function(_Laya$Script12) {
        _inherits(ProgressBar, _Laya$Script12);

        function ProgressBar() {
            var _this10;

            _classCallCheck(this, ProgressBar);

            _this10 = _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
            _this10.progress = 0;
            _this10.origin_width = 0;
            _this10.origin_height = 0;
            return _this10;
        }

        _createClass(ProgressBar, [{
            key: "onAwake",
            value: function onAwake() {
                var s = this.owner.getChildByName('pb_progress');
                this.origin_width = s.width;
                this.origin_height = s.height;
                this.pb = s;
                this.mask = new Laya.Sprite();
                this.pb.mask = this.mask;
                this.set_value(0);
            }
        }, {
            key: "set_value",
            value: function set_value(progress) {
                progress = Util.clamp(progress, 0, 1);
                var radius = 0;
                var mask_width = this.origin_width * progress;
                var mask_height = this.origin_height;
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
            }
        }]);

        return ProgressBar;
    }(Laya.Script);

var StartSceneUI =
    /*#__PURE__*/
    function(_ui$start_sceneUI) {
        _inherits(StartSceneUI, _ui$start_sceneUI);

        function StartSceneUI() {
            var _this11;

            _classCallCheck(this, StartSceneUI);

            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(StartSceneUI).call(this));
            _this11.loaded_res_3d = 0;
            _this11.res_3d_cnt = 0;
            _this11._per_main_scene = 0;
            Variable.load();
            Variable.fetch_cloud_data(function() {});

            if (Const.is_weixin()) {
                _this11.load_subpackage();
            } else {
                _this11.load_res();
            }

            _this11.init_youzicenter();

            _this11.pb_load_bar = _this11.loading_bar.getComponent(ProgressBar);
            return _possibleConstructorReturn(_this11);
        }

        _createClass(StartSceneUI, [{
            key: "init_youzicenter",
            value: function init_youzicenter() {
                sdk_manager.initYouzi();
            }
        }, {
            key: "load_res",
            value: function load_res() {
                var res = Const.get_Game_Res_Arr();
                this.res_3d_cnt = 28;
                Laya.loader.create(res, Laya.Handler.create(this, this.on_3d_res_loaded), Laya.Handler.create(this, this.on_3d_res_loading));
            }
        }, {
            key: "load_subpackage",
            value: function load_subpackage() {
                var _this12 = this;

                if (Const.is_weixin()) {
                    var loadTask = wx.loadSubpackage({
                        name: 'subpackage',
                        success: function success(res) {
                            Laya.timer.callLater(null, function() {
                                _this12.load_res();
                            });
                        },
                        fail: function fail(res) {
                            throw "error subpackage load failed";
                        }
                    });
                    loadTask.onProgressUpdate(function(res) {
                        var progress = res.progress >= 1 ? res.progress : Math.floor(res.progress * 100);
                        _this12.loading_detail.text = "无敌选手准备入场，请稍后\n" + progress + "%";

                        _this12.pb_load_bar.set_value(progress);
                    });
                }
            }
        }, {
            key: "on_3d_res_loading",
            value: function on_3d_res_loading() {
                this.loaded_res_3d++;
                this.pb_load_bar.set_value(this.loaded_res_3d / this.res_3d_cnt);
                var temp = Math.floor(this.loaded_res_3d * 100 / this.res_3d_cnt);

                if (temp > 100) {
                    temp = 100;
                }

                this.loading_detail.text = "无敌选手正在入场，请稍后\n" + temp + "%";
            }
        }, {
            key: "on_3d_res_loaded",
            value: function on_3d_res_loaded() {
                console.log("资源总数：" + this.loaded_res_3d);
                var res = Const.GAME_RES;
                Util.play_sound_for_weixin([res.music_bg]);
                Laya.Tween.to(this, {
                    per_main_scene: 100
                }, 2000);
                Laya.Scene.open("main_scene.scene", true, null, Laya.Handler.create(this, this.on_game_scene_loaded));
            }
        }, {
            key: "on_game_scene_loaded",
            value: function on_game_scene_loaded(value) {
                Laya.Browser.onMiniGame && Laya.MiniAdpter.sendAtlasToOpenDataContext("js/subpackage/res/sub_context.atlas");
            }
        }, {
            key: "per_main_scene",
            set: function set(v) {
                this.pb_load_bar.set_value(v * 0.01);
                this.loading_detail.text = "无敌选手正在入场，请稍后\n" + Math.floor(v) + "%";
                this._per_main_scene = v;
            },
            get: function get() {
                return this._per_main_scene;
            }
        }]);

        return StartSceneUI;
    }(ui.start_sceneUI);

var Button_Scale_On_Click =
    /*#__PURE__*/
    function(_Laya$Script13) {
        _inherits(Button_Scale_On_Click, _Laya$Script13);

        function Button_Scale_On_Click() {
            var _this13;

            _classCallCheck(this, Button_Scale_On_Click);

            _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Button_Scale_On_Click).apply(this, arguments));
            _this13.is_on_click = false;
            return _this13;
        }

        _createClass(Button_Scale_On_Click, [{
            key: "onClick",
            value: function onClick() {
                Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, 50, null, null, null);
                this.is_on_click && this.event_msg && Util.event_dispatcher.sendMessage(this.event_msg);
                this.is_on_click = false;
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown() {
                this.is_on_click = true;
                Laya.Tween.to(this.owner, {
                    scaleX: 0.8,
                    scaleY: 0.8
                }, 100, null, null, null, true);
            }
        }, {
            key: "onMouseUp",
            value: function onMouseUp() {
                Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, 50, null, null, null, true);
            }
        }, {
            key: "onMouseOut",
            value: function onMouseOut() {
                Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, 50, null, null, null, true);
            }
        }]);

        return Button_Scale_On_Click;
    }(Laya.Script);