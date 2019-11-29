"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ui;

(function(ui) {
    var main_sceneUI =
        /*#__PURE__*/
        function(_Laya$Scene) {
            _inherits(main_sceneUI, _Laya$Scene);

            function main_sceneUI() {
                _classCallCheck(this, main_sceneUI);

                return _possibleConstructorReturn(this, _getPrototypeOf(main_sceneUI).call(this));
            }

            _createClass(main_sceneUI, [{
                key: "createChildren",
                value: function createChildren() {
                    _get(_getPrototypeOf(main_sceneUI.prototype), "createChildren", this).call(this);

                    this.loadScene("main_scene");
                }
            }]);

            return main_sceneUI;
        }(Laya.Scene);

    ui.main_sceneUI = main_sceneUI;
    REG("ui.main_sceneUI", main_sceneUI);

    var start_sceneUI =
        /*#__PURE__*/
        function(_Laya$Scene2) {
            _inherits(start_sceneUI, _Laya$Scene2);

            function start_sceneUI() {
                _classCallCheck(this, start_sceneUI);

                return _possibleConstructorReturn(this, _getPrototypeOf(start_sceneUI).call(this));
            }

            _createClass(start_sceneUI, [{
                key: "createChildren",
                value: function createChildren() {
                    _get(_getPrototypeOf(start_sceneUI.prototype), "createChildren", this).call(this);

                    this.loadScene("start_scene");
                }
            }]);

            return start_sceneUI;
        }(Laya.Scene);

    ui.start_sceneUI = start_sceneUI;
    REG("ui.start_sceneUI", start_sceneUI);
})(ui || (ui = {}));

(function(ui) {
    var youzi;

    (function(youzi) {
        var Youzi_BottomBannerUI =
            /*#__PURE__*/
            function(_Laya$View) {
                _inherits(Youzi_BottomBannerUI, _Laya$View);

                function Youzi_BottomBannerUI() {
                    _classCallCheck(this, Youzi_BottomBannerUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_BottomBannerUI).call(this));
                }

                _createClass(Youzi_BottomBannerUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_BottomBannerUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_BottomBannerUI.uiView);
                    }
                }]);

                return Youzi_BottomBannerUI;
            }(Laya.View);

        Youzi_BottomBannerUI.uiView = {
            "type": "View",
            "props": {
                "width": 640,
                "visible": false,
                "name": "YouziBottomView",
                "height": 170
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 640,
                    "visible": false,
                    "var": "BannerBottomUI",
                    "sizeGrid": "12,10,0,10",
                    "height": 170
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 640,
                        "var": "bannerBottomBg",
                        "skin": "youziTexture/two_round_corner.png",
                        "sizeGrid": "10,12,5,12",
                        "height": 170
                    },
                    "compId": 4
                }, {
                    "type": "Image",
                    "props": {
                        "y": 37.5,
                        "x": 14,
                        "skin": "youziTexture/txt_hotgame_v.png",
                        "name": "bannerTitle"
                    },
                    "compId": 5
                }, {
                    "type": "List",
                    "props": {
                        "y": 20,
                        "x": 47,
                        "width": 584,
                        "var": "bottomList",
                        "spaceY": 5,
                        "spaceX": 24,
                        "repeatY": 1,
                        "repeatX": 4,
                        "height": 150,
                        "hScrollBarSkin": "youziTexture/hscroll.png",
                        "drawCallOptimize": true
                    },
                    "compId": 6,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 110,
                            "renderType": "render",
                            "name": "render",
                            "height": 150
                        },
                        "compId": 7,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 110,
                                "name": "icon",
                                "height": 110
                            },
                            "compId": 8
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 130,
                                "x": 55,
                                "text": "弹弹欢乐球",
                                "name": "namelab",
                                "fontSize": 20,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 9
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/two_round_corner.png", "youziTexture/txt_hotgame_v.png", "youziTexture/hscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_BottomBannerUI = Youzi_BottomBannerUI;
        REG("ui.youzi.Youzi_BottomBannerUI", Youzi_BottomBannerUI);

        var Youzi_GameBannerViewUI =
            /*#__PURE__*/
            function(_Laya$View2) {
                _inherits(Youzi_GameBannerViewUI, _Laya$View2);

                function Youzi_GameBannerViewUI() {
                    _classCallCheck(this, Youzi_GameBannerViewUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_GameBannerViewUI).call(this));
                }

                _createClass(Youzi_GameBannerViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_GameBannerViewUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_GameBannerViewUI.uiView);
                    }
                }]);

                return Youzi_GameBannerViewUI;
            }(Laya.View);

        Youzi_GameBannerViewUI.uiView = {
            "type": "View",
            "props": {
                "width": 640,
                "visible": false,
                "name": "YouziGameBanner",
                "height": 170
            },
            "compId": 2,
            "child": [{
                "type": "List",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 640,
                    "visible": true,
                    "var": "GameBannerList",
                    "spaceY": 5,
                    "spaceX": 5,
                    "repeatY": 1,
                    "repeatX": 6,
                    "height": 170,
                    "hScrollBarSkin": "youziTexture/hscroll.png"
                },
                "compId": 10,
                "child": [{
                    "type": "Box",
                    "props": {
                        "y": 1,
                        "x": 0,
                        "width": 640,
                        "renderType": "render",
                        "name": "render",
                        "height": 170
                    },
                    "compId": 11,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 640,
                            "name": "icon",
                            "height": 170
                        },
                        "compId": 12
                    }]
                }]
            }],
            "loadList": ["youziTexture/hscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_GameBannerViewUI = Youzi_GameBannerViewUI;
        REG("ui.youzi.Youzi_GameBannerViewUI", Youzi_GameBannerViewUI);

        var Youzi_GuessLikeUI =
            /*#__PURE__*/
            function(_Laya$View3) {
                _inherits(Youzi_GuessLikeUI, _Laya$View3);

                function Youzi_GuessLikeUI() {
                    _classCallCheck(this, Youzi_GuessLikeUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_GuessLikeUI).call(this));
                }

                _createClass(Youzi_GuessLikeUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_GuessLikeUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_GuessLikeUI.uiView);
                    }
                }]);

                return Youzi_GuessLikeUI;
            }(Laya.View);

        Youzi_GuessLikeUI.uiView = {
            "type": "View",
            "props": {
                "width": 464,
                "name": "YouziGuessLikeView",
                "height": 124
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 464,
                    "visible": false,
                    "var": "guessUI",
                    "height": 124
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 464,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "10,10,10,10",
                        "name": "guessLikeBg",
                        "height": 124
                    },
                    "compId": 4
                }, {
                    "type": "Image",
                    "props": {
                        "y": 15,
                        "x": 28,
                        "skin": "youziTexture/txt_guesslike_v.png",
                        "name": "guessTitle"
                    },
                    "compId": 5
                }, {
                    "type": "List",
                    "props": {
                        "y": 19,
                        "x": 87,
                        "width": 369,
                        "var": "guesslist",
                        "spaceX": 18,
                        "repeatY": 1,
                        "repeatX": 3,
                        "height": 90,
                        "hScrollBarSkin": "youziTexture/hscroll.png"
                    },
                    "compId": 6,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 90,
                            "renderType": "render",
                            "name": "render",
                            "height": 90
                        },
                        "compId": 7,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 90,
                                "name": "icon",
                                "height": 90
                            },
                            "compId": 8
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_v.png", "youziTexture/hscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_GuessLikeUI = Youzi_GuessLikeUI;
        REG("ui.youzi.Youzi_GuessLikeUI", Youzi_GuessLikeUI);

        var Youzi_GuessLikeHUI =
            /*#__PURE__*/
            function(_Laya$View4) {
                _inherits(Youzi_GuessLikeHUI, _Laya$View4);

                function Youzi_GuessLikeHUI() {
                    _classCallCheck(this, Youzi_GuessLikeHUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_GuessLikeHUI).call(this));
                }

                _createClass(Youzi_GuessLikeHUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_GuessLikeHUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_GuessLikeHUI.uiView);
                    }
                }]);

                return Youzi_GuessLikeHUI;
            }(Laya.View);

        Youzi_GuessLikeHUI.uiView = {
            "type": "View",
            "props": {
                "width": 124,
                "renderType": "render",
                "name": "YouziGuessLikeViewH",
                "height": 464
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 124,
                    "visible": false,
                    "var": "guessUI",
                    "height": 464,
                    "drawCallOptimize": true
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 124,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "8,8,8,8",
                        "rotation": 0,
                        "name": "guessLikeBg",
                        "height": 464
                    },
                    "compId": 4
                }, {
                    "type": "Image",
                    "props": {
                        "y": 30,
                        "x": 12,
                        "width": 100,
                        "skin": "youziTexture/txt_guesslike_h.png",
                        "rotation": 0,
                        "name": "title",
                        "height": 26
                    },
                    "compId": 5
                }, {
                    "type": "List",
                    "props": {
                        "y": 289,
                        "x": 17,
                        "width": 90,
                        "var": "guesslist",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 18,
                        "rotation": 0,
                        "repeatY": 3,
                        "repeatX": 1,
                        "pivotY": 210,
                        "height": 385,
                        "disabled": false
                    },
                    "compId": 6,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 90,
                            "name": "render",
                            "height": 90
                        },
                        "compId": 7,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 90,
                                "name": "icon",
                                "height": 90
                            },
                            "compId": 8
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/vscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_GuessLikeHUI = Youzi_GuessLikeHUI;
        REG("ui.youzi.Youzi_GuessLikeHUI", Youzi_GuessLikeHUI);

        var Youzi_MainPushUI =
            /*#__PURE__*/
            function(_Laya$View5) {
                _inherits(Youzi_MainPushUI, _Laya$View5);

                function Youzi_MainPushUI() {
                    _classCallCheck(this, Youzi_MainPushUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_MainPushUI).call(this));
                }

                _createClass(Youzi_MainPushUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_MainPushUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_MainPushUI.uiView);
                    }
                }]);

                return Youzi_MainPushUI;
            }(Laya.View);

        Youzi_MainPushUI.uiView = {
            "type": "View",
            "props": {
                "width": 102,
                "visible": false,
                "name": "YouziMainPushView",
                "mouseEnabled": true,
                "height": 124
            },
            "compId": 2,
            "child": [{
                "type": "Image",
                "props": {
                    "y": 0,
                    "width": 102,
                    "visible": false,
                    "var": "btnMainRecBg",
                    "skin": "youziTexture/icon_bg.png",
                    "sizeGrid": "5,5,5,5",
                    "pivotX": 51,
                    "height": 124,
                    "centerX": 0
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 3,
                        "x": 51,
                        "width": 92,
                        "var": "btnMainRec",
                        "height": 90,
                        "anchorX": 0.5
                    },
                    "compId": 7,
                    "child": [{
                        "type": "Text",
                        "props": {
                            "y": 103,
                            "x": 50,
                            "width": 102,
                            "var": "slogan",
                            "valign": "middle",
                            "pivotY": 1,
                            "pivotX": 51,
                            "overflow": "hidden",
                            "height": 1,
                            "fontSize": 18,
                            "bold": true,
                            "align": "center",
                            "runtime": "laya.display.Text"
                        },
                        "compId": 5
                    }]
                }]
            }],
            "loadList": ["youziTexture/icon_bg.png"],
            "loadList3D": []
        };
        youzi.Youzi_MainPushUI = Youzi_MainPushUI;
        REG("ui.youzi.Youzi_MainPushUI", Youzi_MainPushUI);

        var Youzi_MoreGameUI =
            /*#__PURE__*/
            function(_Laya$View6) {
                _inherits(Youzi_MoreGameUI, _Laya$View6);

                function Youzi_MoreGameUI() {
                    _classCallCheck(this, Youzi_MoreGameUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_MoreGameUI).call(this));
                }

                _createClass(Youzi_MoreGameUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_MoreGameUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_MoreGameUI.uiView);
                    }
                }]);

                return Youzi_MoreGameUI;
            }(Laya.View);

        Youzi_MoreGameUI.uiView = {
            "type": "View",
            "props": {
                "y": 0,
                "x": 0,
                "width": 720,
                "visible": false,
                "name": "YouziMoreGameView",
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Button",
                "props": {
                    "width": 1000,
                    "stateNum": 1,
                    "skin": "youziTexture/blank.png",
                    "name": "maskButton",
                    "mouseEnabled": true,
                    "height": 1900,
                    "centerY": 0,
                    "centerX": 0
                },
                "compId": 22
            }, {
                "type": "Sprite",
                "props": {
                    "y": 300,
                    "x": 95,
                    "width": 530,
                    "visible": false,
                    "var": "MoreGameUI",
                    "pivotY": 0,
                    "pivotX": 0,
                    "mouseThrough": false,
                    "mouseEnabled": true,
                    "height": 680
                },
                "compId": 12,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 530,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "8,8,8,8",
                        "pivotX": 0,
                        "name": "panel",
                        "height": 680
                    },
                    "compId": 14
                }, {
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 103,
                        "skin": "youziTexture/main_title.png",
                        "name": "title"
                    },
                    "compId": 15
                }, {
                    "type": "Button",
                    "props": {
                        "y": -11,
                        "x": 498,
                        "width": 42,
                        "var": "moreGameCloseBtn",
                        "stateNum": 1,
                        "skin": "youziTexture/close_button.png",
                        "labelSize": 26,
                        "labelPadding": "-50",
                        "height": 46
                    },
                    "compId": 16
                }, {
                    "type": "List",
                    "props": {
                        "y": 59,
                        "x": 25,
                        "width": 480,
                        "var": "moreGameList",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 12,
                        "spaceX": 28,
                        "repeatY": 3,
                        "repeatX": 3,
                        "height": 620
                    },
                    "compId": 17,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 140,
                            "renderType": "render",
                            "name": "render",
                            "height": 180
                        },
                        "compId": 18,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 140,
                                "name": "icon",
                                "height": 140
                            },
                            "compId": 19
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 166,
                                "x": 70,
                                "width": 140,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "name": "namelab",
                                "height": 30,
                                "fontSize": 26,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 20
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png", "youziTexture/vscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_MoreGameUI = Youzi_MoreGameUI;
        REG("ui.youzi.Youzi_MoreGameUI", Youzi_MoreGameUI);

        var Youzi_MoreGameHUI =
            /*#__PURE__*/
            function(_Laya$View7) {
                _inherits(Youzi_MoreGameHUI, _Laya$View7);

                function Youzi_MoreGameHUI() {
                    _classCallCheck(this, Youzi_MoreGameHUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_MoreGameHUI).call(this));
                }

                _createClass(Youzi_MoreGameHUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_MoreGameHUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_MoreGameHUI.uiView);
                    }
                }]);

                return Youzi_MoreGameHUI;
            }(Laya.View);

        Youzi_MoreGameHUI.uiView = {
            "type": "View",
            "props": {
                "width": 1280,
                "visible": false,
                "name": "YouziMoreGameH",
                "height": 720
            },
            "compId": 2,
            "child": [{
                "type": "Button",
                "props": {
                    "width": 1900,
                    "stateNum": 1,
                    "skin": "youziTexture/blank.png",
                    "pivotX": 0,
                    "name": "moreGameMaskBtn",
                    "mouseEnabled": true,
                    "height": 1000,
                    "centerY": 0,
                    "centerX": 0,
                    "cacheAs": "none"
                },
                "compId": 4
            }, {
                "type": "Sprite",
                "props": {
                    "y": 60,
                    "x": 376,
                    "width": 528,
                    "visible": false,
                    "var": "MoreGameUI",
                    "pivotY": 0,
                    "pivotX": 0,
                    "mouseThrough": false,
                    "mouseEnabled": true,
                    "height": 600,
                    "drawCallOptimize": true
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 528,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "8,8,8,8",
                        "pivotX": 0,
                        "name": "panel",
                        "height": 600,
                        "cacheAs": "none"
                    },
                    "compId": 5
                }, {
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 113,
                        "skin": "youziTexture/main_title.png",
                        "name": "title"
                    },
                    "compId": 6
                }, {
                    "type": "Button",
                    "props": {
                        "y": -8,
                        "x": 497,
                        "var": "moreGameCloseBtn",
                        "stateNum": 1,
                        "skin": "youziTexture/close_button.png",
                        "labelSize": 26,
                        "labelPadding": "-50",
                        "cacheAs": "none"
                    },
                    "compId": 7
                }, {
                    "type": "List",
                    "props": {
                        "y": 70,
                        "x": 31,
                        "width": 466,
                        "var": "moreGameList",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 10,
                        "spaceX": 45,
                        "repeatY": 3,
                        "repeatX": 3,
                        "height": 530
                    },
                    "compId": 8,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 120,
                            "renderType": "render",
                            "name": "render",
                            "height": 153
                        },
                        "compId": 9,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 120,
                                "name": "icon",
                                "height": 120
                            },
                            "compId": 10
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 142,
                                "x": 60,
                                "width": 120,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "overflow": "hidden",
                                "name": "namelab",
                                "height": 22,
                                "fontSize": 22,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 11
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png", "youziTexture/vscroll.png"],
            "loadList3D": []
        };
        youzi.Youzi_MoreGameHUI = Youzi_MoreGameHUI;
        REG("ui.youzi.Youzi_MoreGameHUI", Youzi_MoreGameHUI);

        var Youzi_OffLineUI =
            /*#__PURE__*/
            function(_Laya$View8) {
                _inherits(Youzi_OffLineUI, _Laya$View8);

                function Youzi_OffLineUI() {
                    _classCallCheck(this, Youzi_OffLineUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_OffLineUI).call(this));
                }

                _createClass(Youzi_OffLineUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_OffLineUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_OffLineUI.uiView);
                    }
                }]);

                return Youzi_OffLineUI;
            }(Laya.View);

        Youzi_OffLineUI.uiView = {
            "type": "View",
            "props": {
                "width": 720,
                "name": "YouziOffLineView",
                "height": 1280
            },
            "compId": 2,
            "child": [{
                "type": "Button",
                "props": {
                    "width": 1000,
                    "stateNum": 1,
                    "skin": "youziTexture/blank.png",
                    "name": "OffLineMask",
                    "mouseEnabled": true,
                    "height": 1900,
                    "centerY": 0,
                    "centerX": 0,
                    "cacheAs": "normal"
                },
                "compId": 4
            }, {
                "type": "Sprite",
                "props": {
                    "y": 506,
                    "x": 40,
                    "width": 640,
                    "visible": false,
                    "var": "OffLineUI",
                    "mouseEnabled": true,
                    "height": 268
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 56,
                        "width": 528,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "9,9,9,9",
                        "name": "OffLineBg",
                        "height": 268
                    },
                    "compId": 5
                }, {
                    "type": "Image",
                    "props": {
                        "y": 25,
                        "x": 265,
                        "width": 110,
                        "skin": "youziTexture/txt_guesslike_h.png",
                        "name": "offlineTitle",
                        "height": 30
                    },
                    "compId": 12
                }, {
                    "type": "Button",
                    "props": {
                        "y": -21.5,
                        "x": 552,
                        "width": 42,
                        "var": "OffLineCloseButton",
                        "stateNum": 1,
                        "skin": "youziTexture/close_button.png",
                        "height": 46
                    },
                    "compId": 11
                }, {
                    "type": "List",
                    "props": {
                        "y": 72,
                        "x": 85,
                        "width": 470,
                        "var": "OffLineList",
                        "spaceX": 25,
                        "repeatY": 1,
                        "height": 180
                    },
                    "compId": 6,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 140,
                            "renderType": "render",
                            "name": "render",
                            "height": 180
                        },
                        "compId": 7,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "width": 140,
                                "name": "icon",
                                "height": 140
                            },
                            "compId": 8,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -14,
                                    "x": 126,
                                    "visible": false,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "redhit",
                                    "cacheAs": "bitmap"
                                },
                                "compId": 9
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 150,
                                "width": 140,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "overflow": "hidden",
                                "name": "namelab",
                                "height": 30,
                                "fontSize": 24,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "compId": 10
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_OffLineUI = Youzi_OffLineUI;
        REG("ui.youzi.Youzi_OffLineUI", Youzi_OffLineUI);

        var Youzi_OffLineHUI =
            /*#__PURE__*/
            function(_Laya$View9) {
                _inherits(Youzi_OffLineHUI, _Laya$View9);

                function Youzi_OffLineHUI() {
                    _classCallCheck(this, Youzi_OffLineHUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_OffLineHUI).call(this));
                }

                _createClass(Youzi_OffLineHUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_OffLineHUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_OffLineHUI.uiView);
                    }
                }]);

                return Youzi_OffLineHUI;
            }(Laya.View);

        Youzi_OffLineHUI.uiView = {
            "type": "View",
            "props": {
                "width": 1280,
                "name": "YouziOffLineHView",
                "height": 720
            },
            "compId": 2,
            "child": [{
                "type": "Button",
                "props": {
                    "width": 1900,
                    "stateNum": 1,
                    "skin": "youziTexture/blank.png",
                    "name": "OffLineMask",
                    "mouseThrough": false,
                    "height": 1000,
                    "centerY": 0,
                    "centerX": 0,
                    "cacheAs": "bitmap"
                },
                "compId": 4
            }, {
                "type": "Sprite",
                "props": {
                    "y": 180,
                    "x": 320,
                    "width": 640,
                    "visible": false,
                    "var": "OffLineUI",
                    "mouseThrough": true,
                    "mouseEnabled": true,
                    "height": 360,
                    "drawCallOptimize": true
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 640,
                        "skin": "youziTexture/full_round_corner.png",
                        "sizeGrid": "8,8,8,8",
                        "name": "OffLineBg",
                        "height": 360
                    },
                    "compId": 5
                }, {
                    "type": "Image",
                    "props": {
                        "y": 37,
                        "x": 255,
                        "width": 130,
                        "skin": "youziTexture/txt_guesslike_h.png",
                        "name": "title",
                        "height": 32
                    },
                    "compId": 6
                }, {
                    "type": "Button",
                    "props": {
                        "y": -9,
                        "x": 609,
                        "var": "OffLineCloseButton",
                        "stateNum": 1,
                        "skin": "youziTexture/close_button.png"
                    },
                    "compId": 7
                }, {
                    "type": "List",
                    "props": {
                        "y": 101,
                        "x": 0,
                        "width": 640,
                        "var": "OffLineList",
                        "repeatY": 1,
                        "height": 210
                    },
                    "compId": 8,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 15,
                            "x": 25,
                            "width": 180,
                            "renderType": "render",
                            "name": "render",
                            "height": 180
                        },
                        "compId": 9,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 15,
                                "width": 150,
                                "name": "icon",
                                "height": 150
                            },
                            "compId": 10,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -14,
                                    "x": 136,
                                    "visible": false,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "redhit",
                                    "cacheAs": "bitmap"
                                },
                                "compId": 11
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 160,
                                "width": 180,
                                "text": "弹弹欢乐球",
                                "name": "namelab",
                                "height": 30,
                                "fontSize": 30,
                                "color": "#ffffff",
                                "align": "center"
                            },
                            "compId": 12
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_OffLineHUI = Youzi_OffLineHUI;
        REG("ui.youzi.Youzi_OffLineHUI", Youzi_OffLineHUI);

        var Youzi_ScreenPageUI =
            /*#__PURE__*/
            function(_Laya$View10) {
                _inherits(Youzi_ScreenPageUI, _Laya$View10);

                function Youzi_ScreenPageUI() {
                    _classCallCheck(this, Youzi_ScreenPageUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_ScreenPageUI).call(this));
                }

                _createClass(Youzi_ScreenPageUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_ScreenPageUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_ScreenPageUI.uiView);
                    }
                }]);

                return Youzi_ScreenPageUI;
            }(Laya.View);

        Youzi_ScreenPageUI.uiView = {
            "type": "View",
            "props": {
                "width": 720,
                "height": 1280
            },
            "loadList": [],
            "loadList3D": []
        };
        youzi.Youzi_ScreenPageUI = Youzi_ScreenPageUI;
        REG("ui.youzi.Youzi_ScreenPageUI", Youzi_ScreenPageUI);

        var Youzi_SlideWindowUI =
            /*#__PURE__*/
            function(_Laya$View11) {
                _inherits(Youzi_SlideWindowUI, _Laya$View11);

                function Youzi_SlideWindowUI() {
                    _classCallCheck(this, Youzi_SlideWindowUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_SlideWindowUI).call(this));
                }

                _createClass(Youzi_SlideWindowUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_SlideWindowUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_SlideWindowUI.uiView);
                    }
                }]);

                return Youzi_SlideWindowUI;
            }(Laya.View);

        Youzi_SlideWindowUI.uiView = {
            "type": "View",
            "props": {
                "width": 536,
                "visible": false,
                "name": "YouziSlideView",
                "height": 604
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 536,
                    "visible": false,
                    "var": "SlideWindowUI",
                    "mouseEnabled": true,
                    "height": 604
                },
                "compId": 14,
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 536,
                        "var": "slideBg",
                        "height": 604
                    },
                    "compId": 26,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 497,
                            "skin": "youziTexture/full_round_corner.png",
                            "sizeGrid": "9,9,9,9",
                            "name": "slideBgLeft",
                            "height": 604
                        },
                        "compId": 16
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 220,
                            "x": 495,
                            "width": 42,
                            "skin": "youziTexture/slide_bg_mid.png",
                            "sizeGrid": "0,40,0,4",
                            "name": "slideBtn",
                            "mouseEnabled": false,
                            "height": 164
                        },
                        "compId": 18
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 258,
                            "x": 494,
                            "width": 44,
                            "var": "btnSLideClose",
                            "stateNum": 1,
                            "height": 83
                        },
                        "compId": 24
                    }]
                }, {
                    "type": "List",
                    "props": {
                        "y": 11,
                        "x": 34,
                        "width": 463,
                        "var": "slideList",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 5,
                        "spaceX": 26,
                        "repeatY": 3,
                        "repeatX": 3,
                        "height": 593
                    },
                    "compId": 19,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 130,
                            "renderType": "render",
                            "name": "render",
                            "height": 180
                        },
                        "compId": 20,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 12,
                                "x": 0,
                                "width": 130,
                                "name": "icon",
                                "height": 130
                            },
                            "compId": 21,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -14,
                                    "x": 116,
                                    "visible": false,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "markImg",
                                    "cacheAs": "bitmap"
                                },
                                "compId": 22
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 164,
                                "x": 65,
                                "width": 130,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "name": "namelab",
                                "height": 26,
                                "fontSize": 26,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 23
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/full_round_corner.png", "youziTexture/slide_bg_mid.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_SlideWindowUI = Youzi_SlideWindowUI;
        REG("ui.youzi.Youzi_SlideWindowUI", Youzi_SlideWindowUI);

        var Youzi_SlideWindowHUI =
            /*#__PURE__*/
            function(_Laya$View12) {
                _inherits(Youzi_SlideWindowHUI, _Laya$View12);

                function Youzi_SlideWindowHUI() {
                    _classCallCheck(this, Youzi_SlideWindowHUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_SlideWindowHUI).call(this));
                }

                _createClass(Youzi_SlideWindowHUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_SlideWindowHUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_SlideWindowHUI.uiView);
                    }
                }]);

                return Youzi_SlideWindowHUI;
            }(Laya.View);

        Youzi_SlideWindowHUI.uiView = {
            "type": "View",
            "props": {
                "width": 600,
                "visible": false,
                "name": "YouziSlideWindowViewH",
                "height": 614
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 600,
                    "visible": false,
                    "var": "SlideWindowUI",
                    "height": 614,
                    "drawCallOptimize": true
                },
                "compId": 3,
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 600,
                        "var": "slideBg",
                        "height": 614
                    },
                    "compId": 13,
                    "child": [{
                        "type": "Image",
                        "props": {
                            "y": 225,
                            "x": 566,
                            "width": 33,
                            "skin": "youziTexture/slide_bg_mid.png",
                            "sizeGrid": "0,40,0,4",
                            "name": "slideBgMiddle",
                            "height": 164
                        },
                        "compId": 5
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 0,
                            "x": -71,
                            "width": 640,
                            "skin": "youziTexture/full_round_corner.png",
                            "sizeGrid": "10,10,10,10",
                            "name": "zhezhao",
                            "height": 614
                        },
                        "compId": 6
                    }, {
                        "type": "Button",
                        "props": {
                            "y": 265,
                            "x": 569,
                            "width": 31,
                            "var": "btnSLideClose",
                            "stateNum": 1,
                            "height": 80
                        },
                        "compId": 12
                    }]
                }, {
                    "type": "List",
                    "props": {
                        "y": 0,
                        "x": 67,
                        "width": 485,
                        "var": "slideList",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 1,
                        "spaceX": 40,
                        "repeatY": 3,
                        "repeatX": 3,
                        "height": 614
                    },
                    "compId": 7,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 130,
                            "renderType": "render",
                            "name": "render",
                            "height": 190
                        },
                        "compId": 8,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 20,
                                "x": 0,
                                "width": 130,
                                "name": "icon",
                                "height": 130
                            },
                            "compId": 9,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -14,
                                    "x": 116,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "markImg",
                                    "cacheAs": "none"
                                },
                                "compId": 10
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 177,
                                "x": 65,
                                "width": 130,
                                "valign": "bottom",
                                "text": "弹弹欢乐球",
                                "overflow": "hidden",
                                "name": "namelab",
                                "height": 24,
                                "fontSize": 22,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 11
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/slide_bg_mid.png", "youziTexture/full_round_corner.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_SlideWindowHUI = Youzi_SlideWindowHUI;
        REG("ui.youzi.Youzi_SlideWindowHUI", Youzi_SlideWindowHUI);

        var Youzi_SmallWallUI =
            /*#__PURE__*/
            function(_Laya$View13) {
                _inherits(Youzi_SmallWallUI, _Laya$View13);

                function Youzi_SmallWallUI() {
                    _classCallCheck(this, Youzi_SmallWallUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_SmallWallUI).call(this));
                }

                _createClass(Youzi_SmallWallUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_SmallWallUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_SmallWallUI.uiView);
                    }
                }]);

                return Youzi_SmallWallUI;
            }(Laya.View);

        Youzi_SmallWallUI.uiView = {
            "type": "View",
            "props": {
                "width": 600,
                "visible": false,
                "name": "YouziSmallWallView",
                "height": 414
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 600,
                    "visible": false,
                    "var": "SmallWallUI",
                    "pivotY": 0,
                    "pivotX": 0,
                    "mouseThrough": false,
                    "mouseEnabled": true,
                    "height": 414
                },
                "compId": 4,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 600,
                        "skin": "youziTexture/bg_small_wall.png",
                        "sizeGrid": "38,42,38,42",
                        "pivotX": 0,
                        "name": "panel",
                        "height": 414
                    },
                    "compId": 5
                }, {
                    "type": "Image",
                    "props": {
                        "y": 7,
                        "x": 110,
                        "skin": "youziTexture/txt_small_wall.png",
                        "name": "title"
                    },
                    "compId": 6
                }, {
                    "type": "List",
                    "props": {
                        "y": 56,
                        "x": 17,
                        "width": 568,
                        "var": "smallWallList",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 10,
                        "spaceX": 25,
                        "repeatY": 1,
                        "repeatX": 4,
                        "height": 350
                    },
                    "compId": 8,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 120,
                            "renderType": "render",
                            "name": "render",
                            "height": 172
                        },
                        "compId": 9,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 12,
                                "x": 0,
                                "width": 120,
                                "name": "icon",
                                "height": 120
                            },
                            "compId": 10,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -12,
                                    "x": 104,
                                    "visible": false,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "redhit"
                                },
                                "compId": 12
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 152,
                                "x": 60,
                                "width": 120,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "overflow": "hidden",
                                "name": "namelab",
                                "height": 30,
                                "fontSize": 22,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 11
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_SmallWallUI = Youzi_SmallWallUI;
        REG("ui.youzi.Youzi_SmallWallUI", Youzi_SmallWallUI);

        var Youzi_SmallWallHUI =
            /*#__PURE__*/
            function(_Laya$View14) {
                _inherits(Youzi_SmallWallHUI, _Laya$View14);

                function Youzi_SmallWallHUI() {
                    _classCallCheck(this, Youzi_SmallWallHUI);

                    return _possibleConstructorReturn(this, _getPrototypeOf(Youzi_SmallWallHUI).call(this));
                }

                _createClass(Youzi_SmallWallHUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        _get(_getPrototypeOf(Youzi_SmallWallHUI.prototype), "createChildren", this).call(this);

                        this.createView(Youzi_SmallWallHUI.uiView);
                    }
                }]);

                return Youzi_SmallWallHUI;
            }(Laya.View);

        Youzi_SmallWallHUI.uiView = {
            "type": "View",
            "props": {
                "width": 750,
                "name": "YouziSmallWallViewH",
                "height": 414
            },
            "compId": 2,
            "child": [{
                "type": "Sprite",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 750,
                    "visible": false,
                    "var": "SmallWallUIH",
                    "pivotY": 0,
                    "pivotX": 0,
                    "mouseThrough": false,
                    "mouseEnabled": true,
                    "height": 414
                },
                "compId": 3,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "width": 750,
                        "skin": "youziTexture/bg_small_wall.png",
                        "sizeGrid": "38,42,38,42",
                        "pivotX": 0,
                        "name": "panel",
                        "height": 414
                    },
                    "compId": 4
                }, {
                    "type": "Image",
                    "props": {
                        "y": 9,
                        "x": 177.5,
                        "skin": "youziTexture/txt_small_wall.png",
                        "name": "title"
                    },
                    "compId": 5
                }, {
                    "type": "List",
                    "props": {
                        "y": 56,
                        "x": 17,
                        "width": 720,
                        "var": "smallWallListH",
                        "vScrollBarSkin": "youziTexture/vscroll.png",
                        "spaceY": 10,
                        "spaceX": 25,
                        "repeatY": 1,
                        "repeatX": 5,
                        "height": 350
                    },
                    "compId": 6,
                    "child": [{
                        "type": "Box",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 120,
                            "renderType": "render",
                            "name": "render",
                            "height": 172
                        },
                        "compId": 7,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 12,
                                "x": 0,
                                "width": 120,
                                "name": "icon",
                                "height": 120
                            },
                            "compId": 8,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": -12,
                                    "x": 104,
                                    "visible": false,
                                    "skin": "youziTexture/redhit.png",
                                    "name": "redhit"
                                },
                                "compId": 9
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 152,
                                "x": 60,
                                "width": 120,
                                "valign": "middle",
                                "text": "弹弹欢乐球",
                                "overflow": "hidden",
                                "name": "namelab",
                                "height": 30,
                                "fontSize": 22,
                                "color": "#ffffff",
                                "anchorY": 0.5,
                                "anchorX": 0.5,
                                "align": "center"
                            },
                            "compId": 10
                        }]
                    }]
                }]
            }],
            "loadList": ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"],
            "loadList3D": []
        };
        youzi.Youzi_SmallWallHUI = Youzi_SmallWallHUI;
        REG("ui.youzi.Youzi_SmallWallHUI", Youzi_SmallWallHUI);
    })(youzi = ui.youzi || (ui.youzi = {}));
})(ui || (ui = {}));

var Const;

(function(Const) {
    function is_weixin() {
        return typeof wx != "undefined";
    }

    Const.is_weixin = is_weixin;
    Const.GAME_RES = {
        player: "js/subpackage/res/Model3D/player/Conventional/player.lh",
        player_2: "js/subpackage/res/Model3D/player_2/Conventional/player.lh",
        player_3: "js/subpackage/res/Model3D/player_3/Conventional/player.lh",
        player_5: "js/subpackage/res/Model3D/player_5/Conventional/player.lh",
        player_6: "js/subpackage/res/Model3D/player_6/Conventional/player.lh",
        player_7: "js/subpackage/res/Model3D/player_7/Conventional/player.lh",
        player_8: "js/subpackage/res/Model3D/player_8/Conventional/player.lh",
        player_9: "js/subpackage/res/Model3D/player_9/Conventional/player.lh",
        player_10: "js/subpackage/res/Model3D/player_10/Conventional/player.lh",
        die_effect: "js/subpackage/res/Model3D/die_effect/Conventional/die.lh",
        field: "js/subpackage/res/Model3D/field/Conventional/scene.lh",
        dot_1: "js/subpackage/res/Model3D/dot_1/Conventional/dot.lh",
        dot_2: "js/subpackage/res/Model3D/dot_2/Conventional/dot.lh",
        dot_3: "js/subpackage/res/Model3D/dot_3/Conventional/dot.lh",
        dot_4: "js/subpackage/res/Model3D/dot_4/Conventional/dot.lh",
        acc: "js/subpackage/res/Model3D/acc/Conventional/acc.lh",
        music_coin: "js/subpackage/res/music/Coin.mp3",
        music_crowd: "",
        music_open_Reward: "",
        music_bg: "js/subpackage/res/music/qiangbin-bgm.mp3",
        music_hit: "js/subpackage/res/music/hit_2.mp3",
        music_win: "js/subpackage/res/music/qiangbing-win.mp3",
        music_lose: "js/subpackage/res/music/qiangbing-lose.mp3",
        music_hit_player: "js/subpackage/res/music/qiangbing-beijidao.mp3"
    };
    Const.user_head_avatars = [];

    function get_Game_Res_Arr() {
        var arr = [];

        for (var key in Const.GAME_RES) {
            arr.push(Const.GAME_RES[key]);
        }

        return arr;
    }

    Const.get_Game_Res_Arr = get_Game_Res_Arr;
    Const.LEVEL_INFO = {
        SUB_LEVEL_LENGTH: 67,
        INIT_BALL_POSITION_Z_OFFSET: 14.5
    };
    var goal_position = {
        normal_z: Const.LEVEL_INFO.SUB_LEVEL_LENGTH / 2 - Const.LEVEL_INFO.INIT_BALL_POSITION_Z_OFFSET
    };
    Const.demolevel = [];
    Const.skins_skill = [{
        item_id: 0,
        speed: 0,
        power: 0
    }, {
        item_id: 1,
        speed: 7,
        power: 10
    }, {
        item_id: 2,
        speed: 17,
        power: 35
    }, {
        item_id: 3,
        speed: 5,
        power: 5
    }, {
        item_id: 4,
        speed: 11,
        power: 20
    }, {
        item_id: 5,
        speed: 15,
        power: 30
    }, {
        item_id: 6,
        speed: 13,
        power: 25
    }, {
        item_id: 7,
        speed: 19,
        power: 40
    }, {
        item_id: 8,
        speed: 9,
        power: 15
    }, {
        item_id: 9,
        speed: 9,
        power: 15
    }, {
        item_id: 10,
        speed: 9,
        power: 15
    }];

    function get_item_by_id(id) {
        var items = get_items();
        return items[id];
    }

    Const.get_item_by_id = get_item_by_id;

    function get_items() {
        var items = [{
            id: 0,
            tag: "skin",
            cost: 0,
            url: Const.GAME_RES.player,
            icon_url: "spear_io_shop/ui_shop_person_1.png"
        }, {
            id: 1,
            tag: "skin",
            cost: 250,
            url: Const.GAME_RES.player_2,
            icon_url: "spear_io_shop/ui_shop_person_3.png"
        }, {
            id: 2,
            tag: "skin",
            cost: 500,
            url: Const.GAME_RES.player_3,
            icon_url: "spear_io_shop/ui_shop_person_2.png"
        }, {
            id: 3,
            tag: "skin",
            cost: 750,
            url: Const.GAME_RES.player_5,
            icon_url: "spear_io_shop/ui_shop_person_4.png"
        }, {
            id: 4,
            tag: "skin",
            cost: 1500,
            url: Const.GAME_RES.player_6,
            icon_url: "spear_io_shop/ui_shop_person_5.png"
        }, {
            id: 5,
            tag: "skin",
            cost: 2500,
            url: Const.GAME_RES.player_7,
            icon_url: "spear_io_shop/ui_shop_person_7.png"
        }, {
            id: 6,
            tag: "skin",
            cost: 4500,
            url: Const.GAME_RES.player_8,
            icon_url: "spear_io_shop/ui_shop_person_6.png"
        }, {
            id: 7,
            tag: "skin",
            cost: 5000,
            url: Const.GAME_RES.player_9,
            icon_url: "spear_io_shop/ui_shop_person_8.png"
        }, {
            id: 8,
            tag: "skin",
            cost: 7000,
            url: Const.GAME_RES.player_10,
            icon_url: "spear_io_shop/ui_shop_person_9.png"
        }];
        return items;
    }

    Const.get_items = get_items;

    function get_ai_config(lvl) {
        var config = [{
            lvl: 0,
            concentrate_time: 0,
            init_length: 0.1
        }, {
            lvl: 5,
            concentrate_time: 0.2,
            init_length: 0.1
        }, {
            lvl: 8,
            concentrate_time: 0.4,
            init_length: 0.2
        }, {
            lvl: 13,
            concentrate_time: 0.5,
            init_length: 0.4
        }, {
            lvl: 17,
            concentrate_time: 0.7,
            init_length: 0.6
        }, {
            lvl: 23,
            concentrate_time: 0.9,
            init_length: 0.8
        }, {
            lvl: 28,
            concentrate_time: 1.2,
            init_length: 1.0
        }, {
            lvl: 31,
            concentrate_time: 1.3,
            init_length: 1.0
        }, {
            lvl: 35,
            concentrate_time: 1.5,
            init_length: 1.0
        }];

        for (var _i = 0, _config = config; _i < _config.length; _i++) {
            var c = _config[_i];
            if (c.lvl >= lvl) return c;
        }

        return config[config.length - 1];
    }

    Const.get_ai_config = get_ai_config;
})(Const || (Const = {}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function compareVersion(s1, s2) {
    var v1 = s1.split('.');
    var v2 = s2.split('.');
    var len = Math.max(v1.length, v2.length);

    while (v1.length < len) {
        v1.push('0');
    }

    while (v2.length < len) {
        v2.push('0');
    }

    for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);

        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
}

var BANNER_TYPE = {
    MATRIX: 1,
    WX: 2,
    GAME: 3,
    SWITCH: 4
};
var PHONE_TYPE = {
    ANDROID: 2,
    IOS: 3
};
var PAGE_STATUS = {
    CLOSE: 0,
    OPEN: 1,
    AUDIT: 2,
    BUY: 3
};
var BI_PAGE_TYPE = {
    MAIN: 1,
    FLOAT: 2,
    MATRIX: 3,
    GUESS: 4,
    MORE: 5,
    GAME: 6,
    OFFLINE: 7,
    BUY_Screen: 8,
    BUY_BOX: 9,
    SMALL_MATRIX_WALL: 10,
    CUSTOM_COMPONENT: 9999
};
var PAGE_TYPE = {
    BANNER: 1,
    ITEMLIST: 2,
    HOT: 3,
    MAIN: 4,
    PAGE: 5,
    OFFLINE: 6,
    BUY: 7,
    MORE: 8,
    MATRIX_BANNER: 9
};
var PLAT_TYPE = {
    Test: 0,
    WeChat: 1,
    OppoMiniGame: 2
};
var PLAT_TYPE_CHANNELID = [1002, 1002, 8001];
var YOUZI_UI_ID = {
    Youzi_BottomBanner: 1,
    Youzi_GameBanner: 2,
    Youzi_GuessLike: 3,
    Youzi_GuessLikeH: 4,
    Youzi_MainPush: 5,
    Youzi_MoreGame: 6,
    Youzi_MoreGameH: 7,
    Youzi_OffLine: 8,
    Youzi_OffLineH: 9,
    Youzi_SlideWindow: 10,
    Youzi_SlideWindowH: 11,
    Youzi_SmallWall: 12,
    Youzi_SmallWallH: 13
};
var YouziData = {
    SdkVersion: 'laya2.0-v5.9',
    resVersion: '1.00.00',
    debug: false,
    appid: '',
    channelId: 1002,
    miniGamePlatType: 0,
    bannnerDatas: [],
    itemListDatas: [],
    hotListDatas: [],
    moreDatas: [],
    matrixBannerDatas: [],
    mainRecDatas: [],
    buyListDatas: [],
    gameBannerDatas: [],
    offlineBannerDatas: [],
    allBeRecommendGames: {},
    clickGameYouziUIId: 0,
    _userinfo: {
        uid: '',
        gender: 0,
        type: 1
    },
    _platform: 1,
    isDataLoaded: function isDataLoaded() {
        return this._isDataLoaded;
    },
    _isDataLoaded: false,
    _loadedCallBacks: [],
    _bannerType: BANNER_TYPE.MATRIX,
    _banerShowSwitchInterval: 10,
    _bannerCreateInterval: 20,
    _pageOpen: PAGE_STATUS.OPEN,
    _bannerSwitchs: [],
    _provinceAllow: 1,
    _mainRecAmount: 1,
    _gameIndexArrLength: 1,
    _gameIndexArr: [],
    init: function init(appid, resVersion, miniGamePlatType) {
        if (this.isInit) return;

        if (Laya.Browser.onIOS) {
            this._platform = PHONE_TYPE.IOS;
        } else if (Laya.Browser.onAndroid) {
            this._platform = PHONE_TYPE.ANDROID;
        }

        console.log('中心化初始化 SdkVersion', this.SdkVersion, appid, resVersion, miniGamePlatType);
        console.log('中心化平台：', PLAT_TYPE_CHANNELID[miniGamePlatType]);
        this.isInit = true;
        this.appid = appid || '';
        this.resVersion = resVersion || '1.00.00';
        this.miniGamePlatType = miniGamePlatType || 0;
        this.channelId = PLAT_TYPE_CHANNELID[miniGamePlatType] || 1002;

        this._loadUid();

        this._loadData(this._initBannerShow.bind(this));

        if (this.miniGamePlatType == PLAT_TYPE.WeChat) {
            this._wxLaunch();
        }
    },
    _wxLaunch: function _wxLaunch() {
        if (!Laya.Browser.window.wx) {
            return;
        } else if (!Laya.Browser.window.wx.getLaunchOptionsSync) {
            return;
        }

        var self = this;
        var wxLaunchOptions = Laya.Browser.window.wx.getLaunchOptionsSync();

        this._loadUid();

        this.checkUserIsImported(wxLaunchOptions);

        if (wxLaunchOptions.referrerInfo && wxLaunchOptions.referrerInfo.appId && wxLaunchOptions.referrerInfo.extraData && wxLaunchOptions.referrerInfo.extraData.boxAppid && wxLaunchOptions.referrerInfo.extraData.orgAppid) {
            this.sendJumpToOpen(wxLaunchOptions.referrerInfo.extraData.orgAppid, wxLaunchOptions.referrerInfo.extraData.boxAppid, wxLaunchOptions.referrerInfo.extraData.locationIndex ? wxLaunchOptions.referrerInfo.extraData.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT);
        } else {
            this.openGameInitLog();
        }

        Laya.Browser.window.wx.onShow(function(res) {
            self._wxOnShow(res);
        });
    },
    _wxOnShow: function _wxOnShow(wxOnShowRes) {
        console.log('wx onShow--------------');
        this.checkUserIsImported(wxOnShowRes);

        if (wxOnShowRes.referrerInfo && wxOnShowRes.referrerInfo.extraData && wxOnShowRes.referrerInfo.extraData.boxAppid && wxOnShowRes.referrerInfo.extraData.orgAppid) {
            this.sendJumpToOpen(wxOnShowRes.referrerInfo.extraData.orgAppid, wxOnShowRes.referrerInfo.extraData.boxAppid, wxOnShowRes.referrerInfo.extraData.locationIndex ? wxOnShowRes.referrerInfo.extraData.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT);
        }
    },
    checkUserIsImported: function checkUserIsImported(res) {
        if (res.referrerInfo && res.referrerInfo.adChannelId && res.referrerInfo.adSubChannelId || res.query && res.query.adChannelId && res.query.adSubChannelId) {
            this._userinfo.type = 2;
        }

        if (res.referrerInfo && res.referrerInfo.leuokShareIn || res.query && res.query.leuokShareIn) {
            this._userinfo.type = 3;
        }

        var isNeedSaveUID = false;
        var hasExtraData = res.referrerInfo && res.referrerInfo.extraData;

        if (hasExtraData) {
            if (res.referrerInfo.extraData.YouziFixUID && res.referrerInfo.extraData.YouziFixUID.trim().length > 0) {
                isNeedSaveUID = true;
                this._userinfo.uid = res.referrerInfo.extraData.YouziFixUID;
            } else if (res.referrerInfo.extraData.YouziUID && res.referrerInfo.extraData.YouziUID.trim().length > 0) {
                isNeedSaveUID = true;
                this._userinfo.uid = res.referrerInfo.extraData.YouziUID;
            }
        }

        if (res.query && res.query.extraData && res.query.extraData.YouziUID) {
            isNeedSaveUID = true;
            this._userinfo.uid = res.query.YouziUID;
        }

        if (isNeedSaveUID) {
            localStorage.setItem('YOUZI_UID', this._userinfo.uid);
        }
    },
    _loadData: function _loadData(cb) {
        var self = this;
        var reqData = {
            "appid": self.appid,
            "channelId": self.channelId,
            "languageType": 1,
            "uid": self._userinfo.uid,
            "version": self.resVersion
        };

        var cb2 = function cb2(res) {
            var clone = JSON.parse(JSON.stringify(res));
            console.log('中心化数据OK', clone);

            if (res && res.info && res.info.swith && res.info.swith == 1) {
                self._mainRecAmount = res.info.hasOwnProperty('mainRecAmount') ? res.info.mainRecAmount : 3;
                self._pageOpen = res.info.status;
                self._bannerType = res.info.bannerSwith;
                self._banerShowSwitchInterval = res.info.bannerAutoInterval;
                self._bannerCreateInterval = res.info.wxBannerRefresh;
                self._provinceAllow = res.info.provinceAllow;

                var weight = function weight(a, b) {
                    return b.weight - a.weight;
                };

                var clear = function clear(list) {
                    list = list.sort(weight);
                    list = self._clearArrIndex(list);
                    list = self._removeItemByTestPeriod(list);
                    return list;
                };

                for (var i = 0; i < res.info.recommendListBos.length; i++) {
                    var data = res.info.recommendListBos[i];
                    data.contentBos.forEach(function(item) {
                        if (!self.allBeRecommendGames.hasOwnProperty.call({}, item.appid)) {
                            self.allBeRecommendGames[item.appid] = Object.assign({}, item);
                        }
                    });
                    console.log('allBeRecommendGames:' + self.allBeRecommendGames);

                    switch (data.type) {
                        case PAGE_TYPE.BANNER:
                            self.bannnerDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.ITEMLIST:
                            self.itemListDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.HOT:
                            self.hotListDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.MORE:
                            self.moreDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.MATRIX_BANNER:
                            self.matrixBannerDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.MAIN:
                            self.mainRecDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.PAGE:
                            self.gameBannerDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.OFFLINE:
                            self.offlineBannerDatas = clear(data.contentBos);
                            break;

                        case PAGE_TYPE.BUY:
                            self.buyListDatas = clear(data.contentBos);
                            break;

                        default:
                            console.error('中心化数据类型错误', data.type);
                            break;
                    }
                }
            }

            self._isDataLoaded = true;
            if (cb) cb(res);

            for (var _i2 = 0; _i2 < self._loadedCallBacks.length; _i2++) {
                var callback = self._loadedCallBacks[_i2];
                if (callback) callback();
            }

            if (self._bannerType == BANNER_TYPE.SWITCH) {
                self.refreshBannerSwitch();
                setInterval(self.refreshBannerSwitch.bind(self), self._banerShowSwitchInterval * 1000);
            }
        };

        if (self.miniGamePlatType == PLAT_TYPE.WeChat) {
            console.log('userInfo 调用开始');

            self._getWxUserInfo(function() {
                console.log('请求开始');

                self._request('POST', reqData, self._url(), cb2);
            });
        } else {
            self._request('POST', reqData, self._url(), cb2);
        }
    },
    _clearArrIndex: function _clearArrIndex(dataArray) {
        var arr1 = [];

        for (var i = 0; i < dataArray.length; i++) {
            var data = dataArray[i];

            if (this._pushData(data.hide)) {
                arr1.push(data);
            }
        }

        var arr2 = [];

        for (var _i3 = 0; _i3 < arr1.length; _i3++) {
            var _data2 = arr1[_i3];

            if (this._pushDataBySexual(_data2.gender)) {
                arr2.push(_data2);
            }
        }

        return arr2;
    },
    _request: function _request(methon, data, url, cb) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                if (xhr.responseText != '') {
                    var res = JSON.parse(xhr.responseText);

                    if (cb) {
                        cb(res);
                    }
                } else {
                    if (cb) {
                        cb({});
                    }
                }
            }
        };

        xhr.open(methon, url, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
    },
    _loadUid: function _loadUid() {
        try {
            var gen = function gen() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : r & 0x3 | 0x8;
                    return v.toString(16);
                });
            };

            var uid = localStorage.getItem('YOUZI_UID');

            if (uid && uid.trim().length > 0) {
                this._userinfo.uid = uid;
            } else {
                this._userinfo.uid = gen();
                localStorage.setItem('YOUZI_UID', this._userinfo.uid);
            }
        } catch (error) {
            this._userinfo.uid = '10001';
        }
    },
    _removeItemByTestPeriod: function _removeItemByTestPeriod(list) {
        for (var i = 0; i < list.length; i++) {
            var tmp = list[i];

            if ((tmp.testPeriod == 1 || tmp.testPeriod == 3) && tmp.showLimit == 0) {
                var navigatedMark = localStorage.getItem(tmp.appid);

                if (navigatedMark && navigatedMark == 'navigated') {
                    continue;
                } else {
                    list.splice(i, 1);
                    i--;
                }
            } else if (tmp.testPeriod == 2) {
                var cpacpsMark = localStorage.getItem(tmp.appid);

                if (cpacpsMark && cpacpsMark == 'CPACPS') {
                    list.splice(i, 1);
                    i--;
                }
            }
        }

        return list;
    },
    _url: function _url() {
        return this.debug ? 'https://test.gw.leuok.com/gl-ms-mini-recommend/recommend/show' : 'https://gw.lightlygame.com/gl-ms-mini-recommend/recommend/show';
    },
    _pushData: function _pushData(hideType) {
        var push = false;

        switch (hideType) {
            case 1:
                push = true;
                break;

            case 2:
                if (this._platform == PHONE_TYPE.ANDROID) {
                    push = true;
                }

                break;

            case 3:
                if (this._platform == PHONE_TYPE.IOS) {
                    push = true;
                }

                break;

            default:
                push = false;
                break;
        }

        return push;
    },
    _pushDataBySexual: function _pushDataBySexual(sexual) {
        var pushSexual = false;

        switch (sexual) {
            case 0:
                pushSexual = true;
                break;

            case 1:
                if (this._userinfo.gender == 1) {
                    pushSexual = true;
                }

                break;

            case 2:
                if (this._userinfo.gender == 2) {
                    pushSexual = true;
                }

                break;

            default:
                pushSexual = false;
                break;
        }

        return pushSexual;
    },
    _getWxUserInfo: function _getWxUserInfo(call) {
        var self = this;

        if (!Laya.Browser.window.wx) {
            call();
            return;
        } else if (!Laya.Browser.window.wx.getUserInfo) {
            call();
            return;
        }

        console.log('userInfo 调用 start');
        Laya.Browser.window.wx.getUserInfo({
            success: function success(res) {
                self._userinfo.gender = res.userInfo.gender;
                console.log('userInfo 成功回调请求');
                call();
                return;
            },
            fail: function fail(res) {
                console.log('userInfo 失败回调请求');
                call();
            }
        });
        console.log('userInfo 调用 end');
    },
    _loadTexture: function _loadTexture(sp, url) {},
    startOtherGame: function startOtherGame(data, call) {
        switch (this.miniGamePlatType) {
            case PLAT_TYPE.WeChat:
                if (data.codeJump == 1) {
                    this.wxPreviewImage(data.chopencode || data.vopencode || data.hopencode, data, call);
                } else {
                    this.navigateToOtherGame(data, call);
                }

                break;

            case PLAT_TYPE.OppoMiniGame:
                this.navigateToOppoMiniGame(data, call);
                break;

            default:
                if (call) call(false);
                break;
        }
    },
    openGameInitLog: function openGameInitLog() {
        var curInitLogTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());
        var curInitLogParam = {
            "logType": "login",
            "channelId": this.channelId,
            "orgAppid": this.appid,
            "uid": this._userinfo.uid,
            "dt": curInitLogTime,
            "sdkVersion": this.SdkVersion
        };

        var initLogCall = function initLogCall() {
            console.log("log event send YouziSdk init success");
        };

        this.logNavigate(curInitLogParam, initLogCall);
    },
    sendExposureLog: function sendExposureLog(data, locationIndex) {
        if (!data) {
            console.warn('发送曝光日志时,data不存在', data, locationIndex);
            return;
        }

        var curTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());
        var param = {
            "logType": "exposure",
            "channelId": this.channelId,
            "orgAppid": this.appid,
            "uid": this._userinfo.uid,
            "languageType": 1,
            "jumpAppid": data.appid,
            "locationIndex": locationIndex ? locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT,
            "recommendType": data.type ? data.type : 1,
            "screenId": locationIndex ? locationIndex : 1,
            "dt": curTime,
            "sdkVersion": this.SdkVersion
        };

        var cb = function cb(res) {};

        this.logNavigate(param, cb);
    },
    navigateToOppoMiniGame: function navigateToOppoMiniGame(data, call) {
        if (this.debug) {
            console.log('oppo小游戏跳转成功');
        } else {
            var self = this;
            console.log('--------->1', data.pkgName);
            var packageName = data.pkgName.replace(/\s*/g, "");
            console.log('--------->2', packageName);
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: packageName,
                success: function success() {
                    self.sendGameToGame(data);
                    if (call) call(true);
                    console.log('oppo小游戏跳转成功');
                },
                fail: function fail(res) {
                    if (call) call(false);
                    console.log('oppo小游戏跳转失败：', JSON.stringify(res));
                }
            });
        }
    },
    navigateToOtherGame: function navigateToOtherGame(data, call) {
        if (!Laya.Browser.window.wx) {
            return;
        } else if (!Laya.Browser.window.wx.navigateToMiniProgram) {
            return;
        }

        var self = this;
        var desAppid = data.appid;
        var haveBoxAppId = false;
        var _boxId = 'leuokNull';

        if (data.boxAppId && data.boxAppId != '') {
            haveBoxAppId = true;
            desAppid = data.boxAppId;
            _boxId = desAppid;
        }

        var extraJson = {
            'togame': data.appid,
            'boxAppid': _boxId,
            'orgAppid': self.appid,
            'YouziUID': self.uid,
            'YouziFixUID': self._userinfo.uid,
            'userType': self._userinfo.type,
            'locationIndex': data.locationIndex ? data.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT
        };
        var littleProgramPath = null;

        if (data.miniProgramArgs && data.miniProgramArgs != '') {
            littleProgramPath = data.miniProgramArgs;
        }

        if (data.anChannelId || data.ioChannelId) {
            if (littleProgramPath != null) {
                littleProgramPath = littleProgramPath + "&anChannelId=" + data.anChannelId + "&ioChannelId=" + data.ioChannelId;
            } else {
                littleProgramPath = "?anChannelId=" + data.anChannelId + "&ioChannelId=" + data.ioChannelId;
            }
        }

        console.log('mimiProgramPath:' + littleProgramPath);

        if (data.miniGameArgs && data.miniGameArgs != '') {
            var addJson = JSON.parse(data.miniGameArgs);
            var addJsonKeyArr = Object.keys(addJson);
            var key0 = addJsonKeyArr[0];

            if (key0 == 'togame' || key0 == 'boxAppid' || key0 == 'orgAppid') {
                console.log('联运附加key值冲突');
                return;
            }

            extraJson[key0] = addJson[key0];
        }

        console.log('extraData' + JSON.stringify(extraJson));
        Laya.Browser.window.wx.navigateToMiniProgram({
            appId: desAppid,
            path: littleProgramPath,
            extraData: extraJson,
            success: function success(result) {
                if (haveBoxAppId) {
                    self.sendGameToBox(data);
                } else {
                    self.sendGameToGame(data);
                }

                haveBoxAppId = false;
                if (call) call(true);
                console.log('navigateToMiniProgram success');

                if (data.testPeriod && data.testPeriod == '1') {
                    localStorage.setItem(data.appid, 'navigated');
                } else if (data.testPeriod == '2') {
                    localStorage.setItem(data.appid, 'CPACPS');
                }
            },
            fail: function fail(res) {
                if (call) call(false);
                self.notifyNavigateFailUIId();
                console.log('navigateToMiniProgram fail');
            }
        });
    },
    notifyNavigateFailUIId: function notifyNavigateFailUIId() {
        switch (this.clickGameYouziUIId) {
            case YOUZI_UI_ID.Youzi_MainPush:
            case YOUZI_UI_ID.Youzi_BottomBanner:
            case YOUZI_UI_ID.Youzi_GuessLike:
            case YOUZI_UI_ID.Youzi_GuessLikeH:
                YouziCenter.getInstance().notifyNavigateToMini(this.clickGameYouziUIId);
                break;

            default:
                console.log('不需要取消');
                break;
        }
    },
    sendJumpToOpen: function sendJumpToOpen(orgAppId, boxAppId) {
        var locationIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var type = 'jump2open';

        if (boxAppId == 'leuokNull') {
            type = 'app2open';
            boxAppId = '';
        }

        var cb = function cb(res) {
            console.log('log event sendJumpToOpen success---');
        };

        var curTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());
        var param = {
            "logType": type,
            "userType": this._userinfo.type,
            "channelId": this.channelId,
            "orgAppid": orgAppId,
            "boxAppid": boxAppId,
            "uid": this._userinfo.uid,
            "languageType": 1,
            "jumpAppid": this.appid,
            "locationIndex": locationIndex ? locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT,
            "recommendType": 1,
            "screenId": 1,
            "dt": curTime,
            "sdkVersion": this.SdkVersion
        };
        console.log(param);
        this.logNavigate(param, cb);
    },
    sendGameToGame: function sendGameToGame(_data) {
        var curTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());

        var cb = function cb(res) {
            console.log('log event success---');
        };

        var param = {
            "logType": "app2app",
            "userType": this._userinfo.type,
            "channelId": this.channelId,
            "orgAppid": this.appid,
            "uid": this._userinfo.uid,
            "languageType": 1,
            "jumpAppid": _data.appid,
            "locationIndex": _data.locationIndex ? _data.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT,
            "recommendType": _data.type,
            "screenId": 1,
            "dt": curTime,
            "sdkVersion": this.SdkVersion
        };
        console.log(param);
        this.logNavigate(param, cb);
    },
    sendGameToBox: function sendGameToBox(_data) {
        var curTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());

        var cb = function cb(res) {
            console.log('log event success---');
        };

        var param = {
            "logType": "jump2box",
            "userType": this._userinfo.type,
            "channelId": this.channelId,
            "orgAppid": this.appid,
            "uid": this._userinfo.uid,
            "languageType": 1,
            "boxAppid": _data.boxAppId,
            "jumpAppid": _data.appid,
            "locationIndex": _data.locationIndex ? _data.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT,
            "recommendType": _data.type,
            "screenId": 1,
            "dt": curTime,
            "sdkVersion": this.SdkVersion
        };
        console.log(param);
        this.logNavigate(param, cb);
    },
    wxPreviewImage: function wxPreviewImage(qrCodeimageUrl, data, call) {
        var self = this;
        Laya.Browser.window.wx.previewImage({
            current: qrCodeimageUrl,
            urls: [qrCodeimageUrl],
            success: function success() {
                if (call) call(true);
                self.sendGameByQrcode(data);
            },
            fail: function fail() {
                if (call) call(false);
            }
        });
    },
    sendGameByQrcode: function sendGameByQrcode(_data) {
        var curTime = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date());

        var cb = function cb(res) {
            console.log('log event success---');
        };

        var param = {
            "logType": "showcode",
            "userType": this._userinfo.type,
            "channelId": this.channelId,
            "orgAppid": this.appid,
            "uid": this._userinfo.uid,
            "languageType": 1,
            "jumpAppid": _data.appid,
            "locationIndex": _data.locationIndex ? _data.locationIndex : BI_PAGE_TYPE.CUSTOM_COMPONENT,
            "recommendType": _data.type,
            "screenId": 1,
            "dt": curTime,
            "sdkVersion": this.SdkVersion
        };
        console.log(param);
        this.logNavigate(param, cb);
    },
    logNavigate: function logNavigate(reqData, cb) {
        console.log('send log--->' + reqData);

        if (!this.debug) {
            this._request('POST', reqData, 'https://bi.log.lightlygame.com/recommend/', cb);
        }
    },
    YouziDateFtt: function YouziDateFtt(fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }

        return fmt;
    },
    getDatasByBIType: function getDatasByBIType(locationIndex) {
        if (locationIndex == 1) {
            return this.mainRecDatas;
        } else if (locationIndex == 2) {
            return this.hotListDatas;
        } else if (locationIndex === 3 || locationIndex == 4) {
            return this.matrixBannerDatas;
        } else if (locationIndex === 5 || locationIndex === 10) {
            return this.moreDatas;
        } else if (locationIndex == 6) {
            return this.gameBannerDatas;
        } else if (locationIndex == 7) {
            return this.offlineBannerDatas;
        } else if (locationIndex == 8 || locationIndex == 9) {
            return this.buyListDatas;
        }

        console.error('未找到中心化数据 locationIndex', locationIndex);
        return [];
    },
    _initBannerShow: function _initBannerShow() {
        if (this._bannerType == BANNER_TYPE.MATRIX || this._bannerType == BANNER_TYPE.GAME || this._bannerType == BANNER_TYPE.WX) {
            for (var i = 0; i < this._bannerSwitchs.length; i++) {
                var banner = this._bannerSwitchs[i];

                if (banner && banner.bannerType == this._bannerType) {
                    banner.showBanner();
                } else if (banner) {
                    banner.hideBanner();
                }
            }
        } else if (this._bannerType == BANNER_TYPE.SWITCH) {
            for (var _i4 = 0; _i4 < this._bannerSwitchs.length; _i4++) {
                var _banner = this._bannerSwitchs[_i4];

                if (_banner && _banner.bannerType == BANNER_TYPE.MATRIX) {
                    _banner.showBanner();
                } else if (_banner) {
                    _banner.hideBanner();
                }
            }
        }
    },
    getMultiMainAmount: function getMultiMainAmount(nodesAmout) {
        if (nodesAmout >= this._mainRecAmount) {
            return this._mainRecAmount >= this.mainRecDatas.length ? [this.mainRecDatas.length, false] : [this._mainRecAmount, true];
        } else {
            return nodesAmout >= this.mainRecDatas.length ? [this.mainRecDatas.length, false] : [nodesAmout, true];
        }
    },
    getGamesIndex: function getGamesIndex(num, showNum) {
        if (this._gameIndexArr.length == 0) {
            this._gameIndexArrLength = num;

            for (var i = 0; i < num; i++) {
                this._gameIndexArr.push(i);
            }
        } else {
            if (num != this._gameIndexArrLength) {
                this._gameIndexArrLength = num;

                for (var _i5 = 0; _i5 < num; _i5++) {
                    this._gameIndexArr.push(_i5);
                }
            }
        }

        if (num <= showNum) {
            return this._gameIndexArr;
        } else {
            var t, k;

            while (num) {
                k = Math.floor(Math.random() * num--);
                t = this._gameIndexArr[num];
                this._gameIndexArr[num] = this._gameIndexArr[k];
                this._gameIndexArr[k] = t;
            }

            return this._gameIndexArr.slice(0, showNum);
        }
    },
    getRandomArrayElements: function getRandomArrayElements(arr, count) {
        var m = arr.length,
            t,
            i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = arr[m];
            arr[m] = arr[i];
            arr[i] = t;
        }

        return arr.slice(0, count);
    },
    addBanner: function addBanner(banner) {
        this._destroyUnuseWxBanner(banner);

        this._bannerSwitchs.push(banner);

        if (this.isDataLoaded()) {
            this._initBannerShow();
        }
    },
    refreshBannerSwitch: function refreshBannerSwitch() {
        if (!this.curBannerType) {
            this.curBannerType = BANNER_TYPE.WX;
        }

        this.curBannerType = this.curBannerType == BANNER_TYPE.WX ? BANNER_TYPE.MATRIX : BANNER_TYPE.WX;

        for (var i = 0; i < this._bannerSwitchs.length; i++) {
            var banner = this._bannerSwitchs[i];

            if (banner && banner.bannerType == this.curBannerType) {
                banner.showBanner();
            } else if (banner) {
                banner.hideBanner();
            }
        }
    },
    _destroyUnuseWxBanner: function _destroyUnuseWxBanner(b) {
        if (b.bannerType == BANNER_TYPE.WX) {
            for (var i = 0; i < this._bannerSwitchs.length; i++) {
                var banner = this._bannerSwitchs[i];

                if (banner && banner.bannerType == BANNER_TYPE.WX) {
                    banner.destroySelf();

                    this._bannerSwitchs.splice(i, 1);

                    return;
                }
            }
        }
    },
    _checkExposureInview: function _checkExposureInview(cellNodes, limitx, limity, datas, locationIndex) {},
    getDataByAppId: function getDataByAppId(appid) {
        var data = this._getDataByAppid(this.mainRecDatas, appid);

        if (!data) {
            data = this._getDataByAppid(this.hotListDatas, appid);
        }

        if (!data) {
            data = this._getDataByAppid(this.buyListDatas, appid);
        }

        return data;
    },
    getDataFromAllGameObj: function getDataFromAllGameObj(appid) {
        return this.allBeRecommendGames[appid];
    },
    _getDataByAppid: function _getDataByAppid(datas, appid) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i].appid == appid) {
                return datas[i];
            }
        }

        return null;
    },
    scrollviewAction: function scrollviewAction(scrollView, speed, limit) {},
    miscClampf: function miscClampf(valueNumber, minNumber, maxNumber) {
        if (minNumber > maxNumber) {
            var temp = minNumber;
            minNumber = maxNumber;
            maxNumber = temp;
        }

        return valueNumber < minNumber ? minNumber : valueNumber < maxNumber ? valueNumber : maxNumber;
    },
    BI_AppOnce: function BI_AppOnce(params) {
        var BI = this.getBI();

        if (BI && BI.leuok) {
            BI.leuok.appOnce(params);
        }
    },
    BI_Action: function BI_Action(params) {
        var BI = this.getBI();

        if (BI && BI.leuok) {
            BI.leuok.action(params);
        }
    },
    BI_WXBannerError: function BI_WXBannerError(params) {
        var BI = this.getBI();

        if (BI && BI.leuok) {
            BI.leuok.error(params);
        }
    },
    getBI: function getBI() {
        if (typeof Laya.Browser.window.wx !== 'undefined') {
            return Laya.Browser.window.wx;
        } else if (typeof Laya.Browser.window.BK !== 'undefined') {
            return Laya.Browser.window.BK;
        } else if (typeof Laya.Browser.window.qg !== 'undefined') {
            return Laya.Browser.window.qg;
        } else if (typeof window !== 'undefined') {
            return window;
        }
    }
};

var YouziMainPush =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_MainP) {
        _inherits(YouziMainPush, _ui$youzi$Youzi_MainP);

        function YouziMainPush() {
            var _this;

            _classCallCheck(this, YouziMainPush);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(YouziMainPush).call(this));
            _this.mainRecDatas = [];
            _this.mainRecItemExposure = {};
            _this.angel = 0;
            _this.curMainRecIdx = 0;
            _this.uiCompleteCallCopy = null;
            _this.uiStateCallCopy = null;
            _this.leftTween = null;
            _this.rightTween = null;
            _this.startTimer = true;
            _this.visible = false;
            _this.btnMainRecBg.visible = false;
            return _this;
        }

        _createClass(YouziMainPush, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isMainDataOk = YouziData.isDataLoaded();

                if (isMainDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.mainRecDatas = YouziData.mainRecDatas;

                if (this.mainRecDatas.length > 0) {
                    this.btnMainRec.on(Laya.Event.CLICK, this, this.onBtnMainRecClicked);
                    this.visible = true;
                    this.btnMainRecBg.visible = true;
                    this.btnMainRec.skin = this.mainRecDatas[0].iconImg;
                    Laya.timer.frameOnce(1 * 60, null, function() {});
                    this.slogan.text = this.mainRecDatas[0].slogan;
                    this.btnMainRecBg.rotation = 10;
                    YouziData.sendExposureLog(this.mainRecDatas[0], BI_PAGE_TYPE.MAIN);
                    this.mainRecItemExposure[this.mainRecDatas[0].appid] = 1;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_MainPush, {
                        complete: true
                    });
                    this.startTimerLoop();
                }
            }
        }, {
            key: "startTimerLoop",
            value: function startTimerLoop() {
                if (this.startTimer) {
                    this.startTimer = false;

                    if (this.mainRecDatas.length > 1) {
                        Laya.timer.loop(5000, this, this.updateMainRec);
                    }

                    this.mainPushRotationAction();
                }
            }
        }, {
            key: "clearTimerLoop",
            value: function clearTimerLoop() {
                this.btnMainRecBg.rotation = 10;
                this.startTimer = true;

                if (this.mainRecDatas.length > 1) {
                    Laya.timer.clear(this, this.updateMainRec);
                }

                if (this.leftTween) {
                    Laya.Tween.clear(this.leftTween);
                }

                if (this.rightTween) {
                    Laya.Tween.clear(this.rightTween);
                }
            }
        }, {
            key: "mainPushRotationAction",
            value: function mainPushRotationAction() {
                this.rotatotionRight();
            }
        }, {
            key: "rotatotionRight",
            value: function rotatotionRight() {
                this.rightTween = Laya.Tween.to(this.btnMainRecBg, {
                    rotation: -10
                }, 2000, null, new Laya.Handler(this, this.rotationLeft));
            }
        }, {
            key: "rotationLeft",
            value: function rotationLeft(actionCompleteCall) {
                this.leftTween = Laya.Tween.to(this.btnMainRecBg, {
                    rotation: 10
                }, 2000, null, new Laya.Handler(this, this.rotatotionRight));
            }
        }, {
            key: "updateMainRec",
            value: function updateMainRec() {
                this.curMainRecIdx = this.curMainRecIdx + 1 >= this.mainRecDatas.length ? 0 : this.curMainRecIdx + 1;
                this.btnMainRec.graphics.clear(true);
                this.btnMainRec.skin = this.mainRecDatas[this.curMainRecIdx].iconImg;
                this.slogan.text = this.mainRecDatas[this.curMainRecIdx].slogan;

                if (!this.mainRecItemExposure[this.mainRecDatas[this.curMainRecIdx].appid]) {
                    YouziData.sendExposureLog(this.mainRecDatas[this.curMainRecIdx], BI_PAGE_TYPE.MAIN);
                    this.mainRecItemExposure[this.mainRecDatas[this.curMainRecIdx].appid] = 1;
                }
            }
        }, {
            key: "onBtnMainRecClicked",
            value: function onBtnMainRecClicked() {
                YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_MainPush;
                var tmpData = this.mainRecDatas[this.curMainRecIdx];
                tmpData.locationIndex = BI_PAGE_TYPE.MAIN;
                YouziData.startOtherGame(tmpData, null);
                this.updateMainRec();
            }
        }]);

        return YouziMainPush;
    }(ui.youzi.Youzi_MainPushUI);

var YouziBottomBanner =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Botto) {
        _inherits(YouziBottomBanner, _ui$youzi$Youzi_Botto);

        function YouziBottomBanner(isOffSwitch) {
            var _this2;

            _classCallCheck(this, YouziBottomBanner);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(YouziBottomBanner).call(this));
            _this2.matrixBannerDatas = [];
            _this2.bannerType = BANNER_TYPE.MATRIX;
            _this2.bannerBottomItemExposure = {};
            _this2.isOffSwitch = false;
            _this2.uiCompleteCallCopy = null;
            _this2.uiStateCallCopy = null;
            _this2.stopAction = false;
            _this2.curFront = true;
            _this2.curBack = false;
            _this2.isClick = false;
            _this2.dur = 10;

            _this2.pos(Laya.stage.width / 2 - _this2.BannerBottomUI.width / 2, Laya.stage.height - _this2.BannerBottomUI.height);

            _this2.visible = false;
            _this2.BannerBottomUI.visible = false;
            _this2.bottomList.scrollBar.hide = true;
            _this2.isOffSwitch = isOffSwitch;
            return _this2;
        }

        _createClass(YouziBottomBanner, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isBottomDataOk = YouziData.isDataLoaded();

                if (isBottomDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.matrixBannerDatas = YouziData.matrixBannerDatas;

                if (this.matrixBannerDatas.length <= 0) {
                    return;
                }

                this.loadBottomList();

                if (!this.isOffSwitch) {
                    YouziData.addBanner(this);
                }
            }
        }, {
            key: "loadBottomList",
            value: function loadBottomList() {
                var arr = [];
                var pRecord = null;

                for (var i = 0; i < this.matrixBannerDatas.length; i++) {
                    pRecord = this.matrixBannerDatas[i];
                    arr.push({
                        icon: pRecord.iconImg,
                        namelab: pRecord.title
                    });
                }

                this.bottomList.array = arr;
                this.bottomList.renderHandler = new Laya.Handler(this, this.onListRender);
                this.bottomList.mouseHandler = new Laya.Handler(this, this.onBannerItemMouseEvent);
                this.notifyUIComplete(YOUZI_UI_ID.Youzi_BottomBanner, {
                    complete: true
                });
                this.bottomlistAutoScroll();
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.BannerBottomUI.visible) {
                    if (!this.bannerBottomItemExposure[this.matrixBannerDatas[index].appid]) {
                        YouziData.sendExposureLog(this.matrixBannerDatas[index], BI_PAGE_TYPE.MATRIX);
                        this.bannerBottomItemExposure[this.matrixBannerDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "onBannerItemMouseEvent",
            value: function onBannerItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的bottombanner索引：" + index);
                        YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_BottomBanner;
                        var tmpData = this.matrixBannerDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.MATRIX;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall(state) {
                this.isClick = false;
                this.starBottomBannerAction();
            }
        }, {
            key: "stopBottomBannerAcion",
            value: function stopBottomBannerAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starBottomBannerAction",
            value: function starBottomBannerAction() {
                this.bottomlistAutoScroll();
            }
        }, {
            key: "bottomlistAutoScroll",
            value: function bottomlistAutoScroll() {
                if (this.matrixBannerDatas.length <= 5) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.matrixBannerDatas.length - 5) * 5000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.bottomList.tweenTo(this.matrixBannerDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.bottomList.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "showBanner",
            value: function showBanner() {
                if (this) {
                    this.visible = true;
                    this.BannerBottomUI.visible = true;
                    this.notifyUIState(YOUZI_UI_ID.Youzi_BottomBanner, {
                        uiVisible: true
                    });

                    if (this.stopAction) {
                        this.starBottomBannerAction();
                    }
                }
            }
        }, {
            key: "hideBanner",
            value: function hideBanner() {
                if (this) {
                    this.stopBottomBannerAcion();
                    this.visible = false;
                    this.BannerBottomUI.visible = false;
                    this.notifyUIState(YOUZI_UI_ID.Youzi_BottomBanner, {
                        uiVisible: false
                    });
                }
            }
        }, {
            key: "destroySelf",
            value: function destroySelf() {
                if (this) {
                    this.removeSelf();
                }
            }
        }]);

        return YouziBottomBanner;
    }(ui.youzi.Youzi_BottomBannerUI);

var WECHAT_BANNER_POSTYPE = {
    BOTTOM: 1,
    TOP: 2
};

var YouziWeChatBanner =
    /*#__PURE__*/
    function() {
        function YouziWeChatBanner(wechatBannerID) {
            var posType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var isOffSwich = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var isOffSwitchSelf = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            _classCallCheck(this, YouziWeChatBanner);

            this.isLoadOk = false;
            this.adUnitId = null;
            this.posType = 1;
            this.offset = {
                x: 0,
                y: 0
            };
            this.bannerType = BANNER_TYPE.WX;
            this.isShowBanner = false;
            this.isOffSwitch = false;
            this.isOffSwitchSelf = false;
            this.bannerAd = null;
            this.refreshTimer = null;
            this.adUnitId = wechatBannerID;
            this.posType = posType || 1;
            this.offset = offset || {
                x: 0,
                y: 0
            };
            this.isOffSwitch = isOffSwich;
            this.isOffSwitchSelf = isOffSwitchSelf;
            this.initShow();
        }

        _createClass(YouziWeChatBanner, [{
            key: "initShow",
            value: function initShow() {
                this.isLoadOk = YouziData.isDataLoaded();

                if (this.isLoadOk) {
                    this.freshShow();
                } else {
                    YouziData._loadedCallBacks.push(this.freshShow.bind(this));
                }
            }
        }, {
            key: "freshShow",
            value: function freshShow() {
                this.createWXBanner();

                if (!this.isOffSwitch) {
                    YouziData.addBanner(this);

                    this._autoSwitchSelf();
                }
            }
        }, {
            key: "createWXBanner",
            value: function createWXBanner() {
                if (!Laya.Browser.window.wx) {
                    return;
                } else if (!Laya.Browser.window.wx.createBannerAd) {
                    return;
                }

                var self = this;
                var screenWidth = Laya.Browser.window.wx.getSystemInfoSync().screenWidth;
                var screenHeight = Laya.Browser.window.wx.getSystemInfoSync().screenHeight;
                var designWidth = Laya.stage.designWidth;
                var designHeight = Laya.stage.designHeight;
                var rateHeight = screenWidth / designWidth * designHeight;
                var minHeight = 100 * (screenWidth / designWidth) + (screenHeight - rateHeight) / 2;
                self.bannerAd = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.adUnitId,
                    style: {
                        left: this.offset.x,
                        top: this.offset.y,
                        width: screenWidth
                    }
                });
                var oldBannerAd = self.bannerAd;
                var isSetWidth = false;
                self.bannerAd.onResize(function(res) {
                    if (isSetWidth) {
                        return;
                    }

                    if (self.bannerAd.style.realHeight > minHeight) {
                        isSetWidth = true;
                        var width = screenWidth * minHeight / self.bannerAd.style.realHeight;
                        width = YouziData.miscClampf(width, 300, 9999);
                        self.bannerAd.style.width = width;
                        self.bannerAd.style.top = screenHeight - self.bannerAd.style.realHeight * (width / self.bannerAd.style.realWidth) + self.offset.y;
                        self.bannerAd.style.left = (screenWidth - self.bannerAd.style.width) / 2 + self.offset.x;
                    } else {
                        self.bannerAd.style.top = screenHeight - self.bannerAd.style.realHeight + self.offset.y;

                        if (screenHeight / screenWidth > 2) {
                            self.bannerAd.style.top = self.bannerAd.style.top - 34 + self.offset.y;
                        }
                    }

                    if (self.posType == WECHAT_BANNER_POSTYPE.TOP) {
                        self.bannerAd.style.left = (screenWidth - self.bannerAd.style.width) / 2 + self.offset.x;
                        self.bannerAd.style.top = self.offset.y;

                        if (screenHeight / screenWidth > 2) {
                            self.bannerAd.style.top += 76;
                        } else if (screenWidth / screenHeight > 2) {
                            self.bannerAd.style.top += 76;
                        }
                    }
                });
                self.bannerAd.onLoad(function(res) {
                    if (oldBannerAd) {
                        oldBannerAd.hide();
                        oldBannerAd.destroy();
                    }

                    if (self.isShowBanner) {
                        self.bannerAd.show();
                    } else {
                        self.bannerAd.hide();
                    }
                });
                self.bannerAd.onError(function(err) {
                    console.warn('微信banner广告出错', err);
                });
            }
        }, {
            key: "showBanner",
            value: function showBanner() {
                this.isShowBanner = true;

                if (this.bannerAd) {
                    this.bannerAd.show();
                }
            }
        }, {
            key: "hideBanner",
            value: function hideBanner() {
                this.isShowBanner = false;

                if (this.bannerAd) {
                    this.bannerAd.hide();
                }
            }
        }, {
            key: "destroySelf",
            value: function destroySelf() {
                if (this.bannerAd) {
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                }

                if (this.refreshTimer) {
                    clearInterval(this.refreshTimer);
                    this.refreshTimer = null;
                }

                this.isShowBanner = false;
            }
        }, {
            key: "switchBannerNow",
            value: function switchBannerNow() {
                if (this.refreshTimer) {
                    clearInterval(this.refreshTimer);
                    this.refreshTimer = null;
                }

                this.createWXBanner();

                this._autoSwitchSelf();
            }
        }, {
            key: "_autoSwitchSelf",
            value: function _autoSwitchSelf() {
                if (!this.isOffSwitchSelf) {
                    var self2 = this;
                    this.refreshTimer = setInterval(function() {
                        self2.createWXBanner();
                    }, YouziData._bannerCreateInterval * 1000);
                }
            }
        }]);

        return YouziWeChatBanner;
    }();

var YouziGameBanner =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_GameB) {
        _inherits(YouziGameBanner, _ui$youzi$Youzi_GameB);

        function YouziGameBanner(isOffSwitch, switchTime) {
            var _this3;

            _classCallCheck(this, YouziGameBanner);

            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(YouziGameBanner).call(this));
            _this3.isOffSwitch = false;
            _this3.bannerType = BANNER_TYPE.GAME;
            _this3.switchTime = 5;
            _this3.gameBannerItemExposure = {};
            _this3.startSwitchIndex = 0;
            _this3.isHide = false;
            _this3.uiCompleteCallCopy = null;
            _this3.uiStateCallCopy = null;

            _this3.pos(Laya.stage.width / 2 - _this3.GameBannerList.width / 2, Laya.stage.height - _this3.GameBannerList.height);

            _this3.visible = false;
            _this3.GameBannerList.scrollBar.hide = true;
            _this3.isOffSwitch = isOffSwitch;
            _this3.switchTime = switchTime < 5 ? 5 : switchTime;
            _this3.switchTime *= 1000;
            return _this3;
        }

        _createClass(YouziGameBanner, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var gameBannerDatasOk = YouziData.isDataLoaded();

                if (gameBannerDatasOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                if (YouziData.gameBannerDatas.length <= 0) return;
                this.loadGameBannerList();
                this.creatGameBannerTimerLoop();

                if (!this.isOffSwitch) {
                    YouziData.addBanner(this);
                }
            }
        }, {
            key: "loadGameBannerList",
            value: function loadGameBannerList() {
                this.GameBannerList.repeatX = YouziData.gameBannerDatas.length;
                var gameBannerArr = [];

                for (var gameBannerArrI = 0; gameBannerArrI < YouziData.gameBannerDatas.length; gameBannerArrI++) {
                    gameBannerArr.push({
                        infoData: YouziData.gameBannerDatas[gameBannerArrI]
                    });
                }

                this.GameBannerList.mouseHandler = new Laya.Handler(this, this.onGameBannerItemMouseEvent);
                this.GameBannerList.dataSource = gameBannerArr;

                for (var gameBannerDataI = 0; gameBannerArrI < YouziData.gameBannerDatas.length; gameBannerDataI++) {
                    var gameBannerImage = this.GameBannerList.getCell(gameBannerDataI).getChildByName('icon');
                    gameBannerImage.loadImage(YouziData.gameBannerDatas[gameBannerDataI].bannerImg);
                }

                this.notifyUIComplete(YOUZI_UI_ID.Youzi_GameBanner, {
                    complete: true
                });
            }
        }, {
            key: "creatGameBannerTimerLoop",
            value: function creatGameBannerTimerLoop() {
                Laya.timer.loop(this.switchTime, this, this.updateGameBaner);
            }
        }, {
            key: "clearGameBannerTimerLoop",
            value: function clearGameBannerTimerLoop() {
                Laya.timer.clear(this, this.updateGameBaner);
            }
        }, {
            key: "updateGameBaner",
            value: function updateGameBaner(e) {
                if (YouziData.gameBannerDatas.length <= 1) {
                    this.checkExposure();
                    return;
                } else {
                    this.startSwitchIndex = this.GameBannerList.startIndex + 1;
                    this.GameBannerList.scrollTo(this.startSwitchIndex >= this.GameBannerList.length ? 0 : this.startSwitchIndex);
                    this.checkExposure();
                }
            }
        }, {
            key: "checkExposure",
            value: function checkExposure() {
                if (this.visible) {
                    var data = YouziData.gameBannerDatas[this.startSwitchIndex];

                    if (!this.gameBannerItemExposure[data.appid]) {
                        this.gameBannerItemExposure[data.appid] = 1;
                        YouziData.sendExposureLog(data, BI_PAGE_TYPE.GAME);
                    }
                }
            }
        }, {
            key: "onGameBannerItemMouseEvent",
            value: function onGameBannerItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    console.log("当前选择的gamebannerlist索引：" + index);
                    var tmpData = YouziData.gameBannerDatas[index];
                    tmpData.locationIndex = BI_PAGE_TYPE.GAME;
                    tmpData.type = 5;
                    YouziData.startOtherGame(tmpData, null);
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "showBanner",
            value: function showBanner() {
                if (this) {
                    this.visible = true;

                    if (this.isHide) {
                        this.isHide = false;
                        this.creatGameBannerTimerLoop();
                    }

                    this.notifyUIState(YOUZI_UI_ID.Youzi_GameBanner, {
                        uiVisible: true
                    });
                }
            }
        }, {
            key: "hideBanner",
            value: function hideBanner() {
                if (this) {
                    this.isHide = true;
                    this.visible = false;
                    this.clearGameBannerTimerLoop();
                    this.notifyUIState(YOUZI_UI_ID.Youzi_GameBanner, {
                        uiVisible: false
                    });
                }
            }
        }, {
            key: "destroySelf",
            value: function destroySelf() {
                if (this) {
                    this.removeSelf();
                }
            }
        }]);

        return YouziGameBanner;
    }(ui.youzi.Youzi_GameBannerViewUI);

var YouziMoreGame =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_MoreG) {
        _inherits(YouziMoreGame, _ui$youzi$Youzi_MoreG);

        function YouziMoreGame() {
            var _this4;

            _classCallCheck(this, YouziMoreGame);

            _this4 = _possibleConstructorReturn(this, _getPrototypeOf(YouziMoreGame).call(this));
            _this4.morelistDatas = [];
            _this4.mainItemExposure = {};
            _this4.fisrtShow = false;
            _this4.isCreate = false;
            _this4.uiCompleteCallCopy = null;
            _this4.uiStateCallCopy = null;
            _this4.curFront = true;
            _this4.curBack = false;
            _this4.stopAction = false;
            _this4.isClick = false;
            _this4.dur = 5000;
            _this4.centerX = 0;
            _this4.centerY = 0;
            _this4.visible = false;
            _this4.MoreGameUI.visible = false;
            _this4.moreGameList.scrollBar.hide = true;
            return _this4;
        }

        _createClass(YouziMoreGame, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.MoreGameUI.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isMoreGameOk = YouziData.isDataLoaded();

                if (isMoreGameOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "showMoreGameUI",
            value: function showMoreGameUI() {
                if (this.isCreate && !this.visible) {
                    this.visible = true;
                    this.moreGameList.mouseThrough = false;
                    this.MoreGameUI.visible = true;
                    this.starMoreGameAction();
                    this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGame, {
                        uiVisible: true
                    });
                    this.checkExposure();
                }
            }
        }, {
            key: "onBtnCloseClicked",
            value: function onBtnCloseClicked() {
                this.stopMoreGameAcion();
                this.visible = false;
                this.moreGameList.mouseThrough = true;
                this.MoreGameUI.visible = false;
                this.mainItemExposure = {};
                this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGame, {
                    uiVisible: false
                });
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);

                if (YouziData.moreDatas.length > 0) {
                    this.morelistDatas = YouziData.moreDatas;
                    var arr = [];
                    var pRecord = null;

                    for (var i = 0; i < this.morelistDatas.length; i++) {
                        pRecord = this.morelistDatas[i];
                        arr.push({
                            icon: pRecord.iconImg,
                            namelab: pRecord.title
                        });
                    }

                    this.moreGameList.dataSource = arr;
                    this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent);
                    this.isCreate = true;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_MoreGame, {
                        complete: true
                    });
                }
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.MoreGameUI.visible) {
                    if (!this.mainItemExposure[this.morelistDatas[index].appid]) {
                        YouziData.sendExposureLog(this.morelistDatas[index], BI_PAGE_TYPE.MORE);
                        this.mainItemExposure[this.morelistDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopMoreGameAcion",
            value: function stopMoreGameAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starMoreGameAction",
            value: function starMoreGameAction() {
                this.moreGameListAutoScroll();
            }
        }, {
            key: "moreGameListAutoScroll",
            value: function moreGameListAutoScroll() {
                if (!this.MoreGameUI.visible) return;

                if (this.morelistDatas.length <= 12) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.morelistDatas.length - 12) * 3000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.moreGameList.tweenTo(this.morelistDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.moreGameList.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "moreGameListMouseEvent",
            value: function moreGameListMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的更多游戏索引：" + index);
                        var tmpData = this.morelistDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.MORE;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall() {
                this.isClick = false;
                this.starMoreGameAction();
            }
        }, {
            key: "checkExposure",
            value: function checkExposure() {
                if (this.MoreGameUI.visible) {
                    for (var i = 0; i < this.morelistDatas.length; i++) {
                        var infoData = this.morelistDatas[i];

                        if (!this.mainItemExposure[infoData.appid]) {
                            this.mainItemExposure[infoData.appid] = 1;
                            YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.MORE);
                        }

                        if (i >= 11) {
                            break;
                        }
                    }
                }
            }
        }]);

        return YouziMoreGame;
    }(ui.youzi.Youzi_MoreGameUI);

var YouziSlideWindow =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Slide) {
        _inherits(YouziSlideWindow, _ui$youzi$Youzi_Slide);

        function YouziSlideWindow(leftOrRight) {
            var _this5;

            _classCallCheck(this, YouziSlideWindow);

            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(YouziSlideWindow).call(this));
            _this5.hotlistDatas = [];
            _this5.slideItemExposure = {};
            _this5.uiCompleteCallCopy = null;
            _this5.uiStateCallCopy = null;
            _this5.slideButton = null;
            _this5.slideMask = null;
            _this5.showFirst = false;
            _this5.isLeft = false;
            _this5.isLeft = leftOrRight;
            _this5.centerY = 0;
            _this5.visible = false;
            _this5.SlideWindowUI.visible = false;
            _this5.slideList.scrollBar.hide = true;

            if (!leftOrRight) {
                _this5.right = -_this5.width;
                _this5.slideBg.scaleX = -1;

                _this5.slideBg.pos(_this5.slideBg.width, _this5.slideBg.y);

                _this5.slideList.pos(2 * _this5.slideList.x, _this5.slideList.y);
            } else {
                _this5.left = -_this5.width;
            }

            return _this5;
        }

        _createClass(YouziSlideWindow, [{
            key: "setYouziPosition",
            value: function setYouziPosition(y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.SlideWindowUI.pos(this.SlideWindowUI.x, y);
            }
        }, {
            key: "setSlideButton",
            value: function setSlideButton(slideBtn) {
                this.slideButton = slideBtn;
            }
        }, {
            key: "setSlideMask",
            value: function setSlideMask(slideViewMask) {
                this.slideMask = slideViewMask;
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isSlideDataOk = YouziData.isDataLoaded();

                if (isSlideDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "showSlideBtnAndHideSlideMask",
            value: function showSlideBtnAndHideSlideMask() {
                if (this.slideButton) this.slideButton.visible = true;
                if (this.slideMask) this.slideMask.visible = false;
            }
        }, {
            key: "hideSlideBtnAndShowSlideMask",
            value: function hideSlideBtnAndShowSlideMask() {
                if (this.slideButton) this.slideButton.visible = false;
                if (this.slideMask) this.slideMask.visible = true;
            }
        }, {
            key: "showSlideWindow",
            value: function showSlideWindow() {
                if (this.hotlistDatas.length <= 0) {
                    console.log('抽屉没有数据');
                    return;
                }

                if (!this.SlideWindowUI.visible) {
                    this.visible = true;
                    this.SlideWindowUI.visible = true;
                    this.hideSlideBtnAndShowSlideMask();
                    var self = this;
                    this.slideWindowActionShow(function() {
                        self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindow, {
                            uiVisible: true
                        });

                        if (!self.showFirst) {
                            self.showFirst = true;
                            self.checkExposure();
                        }
                    });
                }
            }
        }, {
            key: "slideWindowActionShow",
            value: function slideWindowActionShow(actionFinishCall) {
                if (!this.isLeft) {
                    Laya.Tween.to(this, {
                        right: 0
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                } else {
                    Laya.Tween.to(this, {
                        left: 0
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                }
            }
        }, {
            key: "closeSlideWindow",
            value: function closeSlideWindow() {
                var self = this;

                if (this.hotlistDatas.length <= 0) {
                    console.log('抽屉没有数据');
                    self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindow, {
                        uiVisible: false
                    });
                    return;
                }

                this.slideWindowActionClose(function() {
                    self.visible = false;
                    self.SlideWindowUI.visible = false;
                    self.btnSLideClose.visible = true;
                    self.showSlideBtnAndHideSlideMask();
                    self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindow, {
                        uiVisible: false
                    });
                });
                self.btnSLideClose.visible = false;
            }
        }, {
            key: "slideWindowActionClose",
            value: function slideWindowActionClose(actionFinishCall) {
                if (!this.isLeft) {
                    Laya.Tween.to(this, {
                        right: -this.width
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                } else {
                    Laya.Tween.to(this, {
                        left: -this.width
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.hotlistDatas = YouziData.hotListDatas;
                this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow);

                if (this.hotlistDatas.length > 0) {
                    var arr = [];
                    var pRecord = null;

                    for (var i = 0; i < this.hotlistDatas.length; i++) {
                        pRecord = this.hotlistDatas[i];
                        arr.push({
                            icon: pRecord.iconImg,
                            namelab: pRecord.title
                        });
                    }

                    this.slideList.array = arr;
                    this.slideList.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.slideList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent);
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_SlideWindow, {
                        complete: true
                    });
                }
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                if (this.hotlistDatas[index].hotred == 1) {
                    var redHitWall = item.getChildByName('icon').getChildByName('markImg');
                    redHitWall.visible = true;
                }

                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.SlideWindowUI.visible) {
                    if (!this.slideItemExposure[this.hotlistDatas[index].appid]) {
                        YouziData.sendExposureLog(this.hotlistDatas[index], BI_PAGE_TYPE.FLOAT);
                        this.slideItemExposure[this.hotlistDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "onslideListItemMouseEvent",
            value: function onslideListItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    console.log("当前选择的抽屉索引：" + index);
                    var tmpData = this.hotlistDatas[index];
                    tmpData.locationIndex = BI_PAGE_TYPE.FLOAT;
                    YouziData.startOtherGame(tmpData, null);

                    if (tmpData.hotred == 1) {
                        var tmpSlideHit = this.slideList.getCell(index).getChildByName('icon').getChildByName('markImg');
                        tmpSlideHit.visible = false;
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "checkExposure",
            value: function checkExposure() {
                if (this.SlideWindowUI.visible) {
                    for (var i = 0; i < this.hotlistDatas.length; i++) {
                        var infoData = this.hotlistDatas[i];

                        if (!this.slideItemExposure[infoData.appid]) {
                            this.slideItemExposure[infoData.appid] = 1;
                            YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.FLOAT);
                        }

                        if (i >= 11) break;
                    }
                }
            }
        }]);

        return YouziSlideWindow;
    }(ui.youzi.Youzi_SlideWindowUI);

var YouziGuessLike =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Guess) {
        _inherits(YouziGuessLike, _ui$youzi$Youzi_Guess);

        function YouziGuessLike() {
            var _this6;

            _classCallCheck(this, YouziGuessLike);

            _this6 = _possibleConstructorReturn(this, _getPrototypeOf(YouziGuessLike).call(this));
            _this6.matrixBannerDatas = [];
            _this6.guessAnyItemExposure = {};
            _this6.firstShow = false;
            _this6.uiCompleteCallCopy = null;
            _this6.uiStateCallCopy = null;
            _this6.curFront = true;
            _this6.curBack = false;
            _this6.stopAction = false;
            _this6.isClick = false;
            _this6.dur = 5000;
            _this6.visible = false;
            _this6.guessUI.visible = false;
            _this6.guesslist.scrollBar.hide = true;
            return _this6;
        }

        _createClass(YouziGuessLike, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var guessLikeDataOk = YouziData.isDataLoaded();

                if (guessLikeDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.matrixBannerDatas = YouziData.matrixBannerDatas;

                if (this.matrixBannerDatas.length <= 0) {
                    return;
                }

                var arr = [];
                var pRecord = null;

                for (var i = 0; i < this.matrixBannerDatas.length; i++) {
                    pRecord = this.matrixBannerDatas[i];
                    arr.push({
                        icon: pRecord.iconImg,
                        namelab: pRecord.title
                    });
                }

                this.guesslist.dataSource = arr;
                this.guesslist.mouseHandler = new Laya.Handler(this, this.onGuessLikeItemMouseEvent);
                this.guesslist.renderHandler = new Laya.Handler(this, this.onListRender);
                this.visible = true;
                this.guessUI.visible = true;
                this.notifyUIComplete(YOUZI_UI_ID.Youzi_GuessLike, {
                    complete: true
                });
                this.notifyUIState(YOUZI_UI_ID.Youzi_GuessLike, {
                    uiVisible: true
                });
                this.starGuessLikeAction();
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.guessUI.visible) {
                    if (!this.guessAnyItemExposure[this.matrixBannerDatas[index].appid]) {
                        YouziData.sendExposureLog(this.matrixBannerDatas[index], BI_PAGE_TYPE.GUESS);
                        this.guessAnyItemExposure[this.matrixBannerDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopGuessLikeAcion",
            value: function stopGuessLikeAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starGuessLikeAction",
            value: function starGuessLikeAction() {
                this.guessAnylistAutoScroll();
            }
        }, {
            key: "guessAnylistAutoScroll",
            value: function guessAnylistAutoScroll() {
                if (!this.guessUI.visible) return;

                if (this.matrixBannerDatas.length <= 5) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.matrixBannerDatas.length - 5) * 5000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.guesslist.tweenTo(this.matrixBannerDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.guesslist.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "onGuessLikeItemMouseEvent",
            value: function onGuessLikeItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的guesslike索引：" + index);
                        YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_GuessLike;
                        var tmpData = this.matrixBannerDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.GUESS;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall(state) {
                this.isClick = false;
                this.starGuessLikeAction();
            }
        }]);

        return YouziGuessLike;
    }(ui.youzi.Youzi_GuessLikeUI);

var YouziSmallWall =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Small) {
        _inherits(YouziSmallWall, _ui$youzi$Youzi_Small);

        function YouziSmallWall() {
            var _this7;

            _classCallCheck(this, YouziSmallWall);

            _this7 = _possibleConstructorReturn(this, _getPrototypeOf(YouziSmallWall).call(this));
            _this7.smallWallDatas = [];
            _this7.redHitHide = [];
            _this7.smallWallItemExposure = {};
            _this7.smallWallItemExposureCount = 0;
            _this7.uiCompleteCallCopy = null;
            _this7.curFront = true;
            _this7.curBack = false;
            _this7.stopAction = false;
            _this7.isClick = false;
            _this7.dur = 5000;
            _this7.visible = false;
            _this7.SmallWallUI.visible = false;
            _this7.smallWallList.scrollBar.hide = true;
            return _this7;
        }

        _createClass(YouziSmallWall, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isSmallWallDataOk = YouziData.isDataLoaded();

                if (isSmallWallDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.smallWallDatas = YouziData.moreDatas;

                if (this.smallWallDatas.length > 0) {
                    var arr = [];
                    var pRecord = null;

                    for (var i = 0; i < this.smallWallDatas.length; i++) {
                        pRecord = this.smallWallDatas[i];
                        arr.push({
                            icon: pRecord.iconImg,
                            namelab: pRecord.title
                        });
                    }

                    this.smallWallList.array = arr;
                    this.smallWallList.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.smallWallList.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent);
                    this.visible = true;
                    this.SmallWallUI.visible = true;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_SmallWall, {
                        complete: true
                    });
                    this.starSmallWallAction();
                }
            }
        }, {
            key: "scrollBarListen",
            value: function scrollBarListen() {
                this.starSmallWallAction();
            }
        }, {
            key: "onListRender",
            value: function onListRender(cell, index) {
                if (this.smallWallDatas[index].hotred == 1) {
                    var redHitWall = cell.getChildByName('icon').getChildByName('redhit');
                    redHitWall.visible = true;
                }

                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.SmallWallUI.visible) {
                    if (!this.smallWallItemExposure[this.smallWallDatas[index].appid]) {
                        YouziData.sendExposureLog(this.smallWallDatas[index], BI_PAGE_TYPE.SMALL_MATRIX_WALL);
                        this.smallWallItemExposure[this.smallWallDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopSmallWallAcion",
            value: function stopSmallWallAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starSmallWallAction",
            value: function starSmallWallAction() {
                this.smallWallListAutoScroll();
            }
        }, {
            key: "smallWallListAutoScroll",
            value: function smallWallListAutoScroll() {
                if (!this.SmallWallUI.visible) return;

                if (this.smallWallDatas.length <= 8) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.smallWallDatas.length - 8) * 2000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.smallWallList.tweenTo(this.smallWallDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.smallWallList.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "onSmallWallListItemMouseEvent",
            value: function onSmallWallListItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的大家都在玩儿索引：" + index);
                        var tmpData = this.smallWallDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.SMALL_MATRIX_WALL;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));

                        if (tmpData.hotred == 1) {
                            var tmpSlideHit = this.smallWallList.getCell(index).getChildByName('icon').getChildByName('redhit');
                            tmpSlideHit.visible = false;
                        }
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall(state) {
                this.isClick = false;
                this.starSmallWallAction();
            }
        }]);

        return YouziSmallWall;
    }(ui.youzi.Youzi_SmallWallUI);

var YouziOffLine =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_OffLi) {
        _inherits(YouziOffLine, _ui$youzi$Youzi_OffLi);

        function YouziOffLine() {
            var _this8;

            _classCallCheck(this, YouziOffLine);

            _this8 = _possibleConstructorReturn(this, _getPrototypeOf(YouziOffLine).call(this));
            _this8.offLineGameShow = [];
            _this8.offLineGameDatas = [];
            _this8.offLineCreateComplete = false;
            _this8.isSendLog = true;
            _this8.uiCompleteCallCopy = null;
            _this8.uiStateCallCopy = null;
            _this8.hideOffLineGameTimes = 0;

            if (Laya.stage.height / Laya.stage.width >= 1.9) {
                _this8.OffLineUI.pos(Laya.stage.width / 2 - _this8.OffLineUI.width / 2, Laya.stage.height / 2 - _this8.OffLineUI.height / 2);
            } else {
                _this8.centerX = 0;
                _this8.centerY = 0;
            }

            _this8.visible = false;
            _this8.OffLineUI.visible = false;
            return _this8;
        }

        _createClass(YouziOffLine, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.OffLineUI.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var offLineDataOk = YouziData.isDataLoaded();

                if (offLineDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.offLineGameDatas = YouziData.offlineBannerDatas;
                this.wxOnShow();
                this.wxOnHide();
            }
        }, {
            key: "wxOnShow",
            value: function wxOnShow() {
                var self = this;

                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.onShow(function(res) {
                        var showOffLineTimes = Math.floor(new Date().getTime() - self.hideOffLineGameTimes);
                        var showOffLineTimeSecond = Math.floor(showOffLineTimes / 1000);

                        if (showOffLineTimeSecond >= 8) {
                            if (self.offLineCreateComplete) {
                                self.visible = true;
                                self.OffLineUI.visible = true;
                                self.notifyUIState(YOUZI_UI_ID.Youzi_OffLine, {
                                    uiVisible: true
                                });

                                if (self.isSendLog) {
                                    for (var i = 0; i < self.offLineGameShow.length; i++) {
                                        YouziData.sendExposureLog(self.offLineGameShow[i], BI_PAGE_TYPE.OFFLINE);

                                        if (i == self.offLineGameShow.length) {
                                            self.isSendLog = false;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }, {
            key: "wxOnHide",
            value: function wxOnHide() {
                var self = this;

                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.onHide(function() {
                        self.hideOffLineGameTimes = new Date().getTime();

                        if (self.offLineGameDatas.length > 0 && !self.offLineCreateComplete) {
                            self.createOffLineDialog();
                        }
                    });
                }
            }
        }, {
            key: "createOffLineDialog",
            value: function createOffLineDialog() {
                if (this.offLineGameDatas.length <= 0) {
                    console.log('离线推荐没有数据');
                    return;
                }

                this.OffLineCloseButton.on(Laya.Event.CLICK, this, this.onBtnOffLineClose);
                var offLineArr = [];

                for (var i = 0; i < this.offLineGameDatas.length; i++) {
                    if (i >= 3) {
                        break;
                    } else {
                        var tempOffLine = this.offLineGameDatas[i];
                        offLineArr.push({
                            infoData: tempOffLine,
                            namelab: tempOffLine.title
                        });
                    }
                }

                switch (offLineArr.length) {
                    case 1:
                        this.OffLineList.width = 140;
                        this.OffLineList.x = 194;
                        break;

                    case 2:
                        this.OffLineList.width = 305;
                        this.OffLineList.x = 111.5;
                        break;

                    default:
                        break;
                }

                this.OffLineList.mouseHandler = new Laya.Handler(this, this.onOffLinelistItemMouseEvent);
                this.OffLineList.dataSource = offLineArr;

                for (var j = 0; j < this.offLineGameDatas.length; j++) {
                    var offLineIcon = this.OffLineList.getCell(j).getChildByName('icon');
                    offLineIcon.loadImage(this.offLineGameDatas[j].iconImg);
                    var offLineIconRedHit = offLineIcon.getChildByName('redhit');
                    offLineIconRedHit.visible = false;

                    if (this.offLineGameDatas[j].hotred == 1) {
                        offLineIconRedHit.visible = true;
                    }

                    this.offLineGameShow.push(this.offLineGameDatas[j]);

                    if (++j >= offLineArr.length) {
                        this.offLineCreateComplete = true;
                        break;
                    }
                }

                this.notifyUIComplete(YOUZI_UI_ID.Youzi_OffLine, {
                    complete: true
                });
            }
        }, {
            key: "onBtnOffLineClose",
            value: function onBtnOffLineClose() {
                this.visible = false;
                this.OffLineUI.visible = false;
                this.notifyUIState(YOUZI_UI_ID.Youzi_OffLine, {
                    uiVisible: false
                });
            }
        }, {
            key: "onOffLinelistItemMouseEvent",
            value: function onOffLinelistItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    console.log("当前选择的hotlist索引：" + index);
                    var tmpData = this.offLineGameDatas[index];
                    tmpData.locationIndex = BI_PAGE_TYPE.OFFLINE;
                    tmpData.type = 3;

                    if (tmpData.hotred == 1) {
                        var hideOffLineHit = this.OffLineList.getCell(index).getChildByName('icon').getChildByName('redhit');
                        hideOffLineHit.visible = false;
                    }

                    YouziData.startOtherGame(tmpData, null);
                } else if (e.type == 'mouseover');
                else if (e.type == 'mouseout');
            }
        }]);

        return YouziOffLine;
    }(ui.youzi.Youzi_OffLineUI);

var YouziGuessLikeH =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Guess2) {
        _inherits(YouziGuessLikeH, _ui$youzi$Youzi_Guess2);

        function YouziGuessLikeH() {
            var _this9;

            _classCallCheck(this, YouziGuessLikeH);

            _this9 = _possibleConstructorReturn(this, _getPrototypeOf(YouziGuessLikeH).call(this));
            _this9.matrixBannerDatas = [];
            _this9.guessAnyItemExposure = {};
            _this9.firstShow = false;
            _this9.uiCompleteCallCopy = null;
            _this9.uiStateCallCopy = null;
            _this9.curFront = true;
            _this9.curBack = false;
            _this9.stopAction = false;
            _this9.isClick = false;
            _this9.dur = 5000;
            _this9.visible = false;
            _this9.guessUI.visible = false;
            _this9.guesslist.scrollBar.hide = true;
            return _this9;
        }

        _createClass(YouziGuessLikeH, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var guessLikeDataOk = YouziData.isDataLoaded();

                if (guessLikeDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.matrixBannerDatas = YouziData.matrixBannerDatas;
                var arr = [];
                var pRecord = null;

                for (var i = 0; i < this.matrixBannerDatas.length; i++) {
                    pRecord = this.matrixBannerDatas[i];
                    arr.push({
                        icon: pRecord.iconImg,
                        namelab: pRecord.title
                    });
                }

                this.guesslist.array = arr;
                this.guesslist.renderHandler = new Laya.Handler(this, this.onListRender);
                this.guesslist.mouseHandler = new Laya.Handler(this, this.onGuessLikeItemMouseEvent);
                this.visible = true;
                this.guessUI.visible = true;
                this.notifyUIComplete(YOUZI_UI_ID.Youzi_GuessLikeH, {
                    complete: true
                });
                this.notifyUIState(YOUZI_UI_ID.Youzi_GuessLikeH, {
                    uiVisible: true
                });
                this.guessAnylistHAutoScroll();
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.guessUI.visible) {
                    if (!this.guessAnyItemExposure[this.matrixBannerDatas[index].appid]) {
                        YouziData.sendExposureLog(this.matrixBannerDatas[index], BI_PAGE_TYPE.GUESS);
                        this.guessAnyItemExposure[this.matrixBannerDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopGuessLikeHAcion",
            value: function stopGuessLikeHAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starGuessLikeHAction",
            value: function starGuessLikeHAction() {
                this.guessAnylistHAutoScroll();
            }
        }, {
            key: "guessAnylistHAutoScroll",
            value: function guessAnylistHAutoScroll() {
                if (!this.guessUI.visible) return;

                if (this.matrixBannerDatas.length <= 5) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.matrixBannerDatas.length - 5) * 5000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    this.curFront = true;
                    this.curBack = false;
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.guesslist.tweenTo(this.matrixBannerDatas.length - 1, this.dur, endCompletHandler);
                }
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    this.curFront = false;
                    this.curBack = true;
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.guesslist.tweenTo(0, this.dur, startCompleteHandler);
                }
            }
        }, {
            key: "onGuessLikeItemMouseEvent",
            value: function onGuessLikeItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的guesslikeh索引：" + index);
                        YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_GuessLikeH;
                        var tmpData = this.matrixBannerDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.GUESS;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall(state) {
                this.isClick = false;
                this.starGuessLikeHAction();
            }
        }]);

        return YouziGuessLikeH;
    }(ui.youzi.Youzi_GuessLikeHUI);

var YouziMoreGameH =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_MoreG2) {
        _inherits(YouziMoreGameH, _ui$youzi$Youzi_MoreG2);

        function YouziMoreGameH() {
            var _this10;

            _classCallCheck(this, YouziMoreGameH);

            _this10 = _possibleConstructorReturn(this, _getPrototypeOf(YouziMoreGameH).call(this));
            _this10.morelistHDatas = [];
            _this10.mainItemHExposure = {};
            _this10.fisrtShow = false;
            _this10.isCreate = false;
            _this10.uiCompleteCallCopy = null;
            _this10.uiStateCallCopy = null;
            _this10.curFront = true;
            _this10.curBack = false;
            _this10.stopAction = false;
            _this10.isClick = false;
            _this10.dur = 5000;

            if (Laya.stage.width / Laya.stage.height >= 1.9) {
                _this10.MoreGameUI.scale(0.9, 0.9);

                var scaleW = _this10.MoreGameUI.width * 0.9;
                var scaleH = _this10.MoreGameUI.height * 0.9;

                _this10.MoreGameUI.pos(Laya.stage.width / 2 - scaleW / 2, Laya.stage.height / 2 - scaleH / 2);
            } else {
                _this10.centerX = 0;
                _this10.centerY = 0;
            }

            _this10.visible = false;
            _this10.MoreGameUI.visible = false;
            _this10.moreGameList.scrollBar.hide = true;
            return _this10;
        }

        _createClass(YouziMoreGameH, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.MoreGameUI.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isMoreGameOk = YouziData.isDataLoaded();

                if (isMoreGameOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "showMoreGameUI",
            value: function showMoreGameUI() {
                if (this.isCreate && !this.visible) {
                    this.visible = true;
                    this.moreGameList.mouseThrough = false;
                    this.MoreGameUI.visible = true;
                    this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGameH, {
                        uiVisible: true
                    });
                    this.starMoreGameAction();

                    if (!this.fisrtShow) {
                        this.fisrtShow = true;
                        this.checkExposure();
                    }
                }
            }
        }, {
            key: "onBtnCloseClicked",
            value: function onBtnCloseClicked() {
                this.stopMoreGameAcion();
                this.visible = false;
                this.moreGameList.mouseThrough = true;
                this.MoreGameUI.visible = false;
                this.notifyUIState(YOUZI_UI_ID.Youzi_MoreGameH, {
                    uiVisible: false
                });
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);

                if (YouziData.moreDatas.length > 0) {
                    this.morelistHDatas = YouziData.moreDatas;
                    var arr = [];
                    var pRecord = null;

                    for (var i = 0; i < this.morelistHDatas.length; i++) {
                        pRecord = this.morelistHDatas[i];
                        arr.push({
                            icon: pRecord.iconImg,
                            namelab: pRecord.title
                        });
                    }

                    this.moreGameList.array = arr;
                    this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent);
                    this.isCreate = true;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_MoreGameH, {
                        complete: true
                    });
                }
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.MoreGameUI.visible) {
                    if (!this.mainItemHExposure[this.morelistHDatas[index].appid]) {
                        YouziData.sendExposureLog(this.morelistHDatas[index], BI_PAGE_TYPE.MORE);
                        this.mainItemHExposure[this.morelistHDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopMoreGameAcion",
            value: function stopMoreGameAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starMoreGameAction",
            value: function starMoreGameAction() {
                this.moreGameListAutoScroll();
            }
        }, {
            key: "moreGameListAutoScroll",
            value: function moreGameListAutoScroll() {
                if (!this.MoreGameUI.visible) return;

                if (this.morelistHDatas.length <= 12) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.morelistHDatas.length - 12) * 3000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.moreGameList.tweenTo(this.morelistHDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.moreGameList.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "moreGameListMouseEvent",
            value: function moreGameListMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的moreGameH索引：" + index);
                        var tmpData = this.morelistHDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.MORE;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall() {
                this.isClick = false;
                this.starMoreGameAction();
            }
        }, {
            key: "checkExposure",
            value: function checkExposure() {
                if (this.MoreGameUI.visible) {
                    for (var i = 0; i < this.morelistHDatas.length; i++) {
                        var infoData = this.morelistHDatas[i];

                        if (!this.mainItemHExposure[infoData.appid]) {
                            this.mainItemHExposure[infoData.appid] = 1;
                            YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.MORE);
                        }

                        if (i >= 11) {
                            break;
                        }
                    }
                }
            }
        }]);

        return YouziMoreGameH;
    }(ui.youzi.Youzi_MoreGameHUI);

var YouziOffLineH =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_OffLi2) {
        _inherits(YouziOffLineH, _ui$youzi$Youzi_OffLi2);

        function YouziOffLineH() {
            var _this11;

            _classCallCheck(this, YouziOffLineH);

            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(YouziOffLineH).call(this));
            _this11.offLineGameShow = [];
            _this11.offLineGameDatas = [];
            _this11.offLineCreateComplete = false;
            _this11.isSendLog = true;
            _this11.uiCompleteCallCopy = null;
            _this11.uiStateCallCopy = null;
            _this11.hideOffLineGameTimes = 0;

            if (Laya.stage.width / Laya.stage.height >= 1.9) {
                _this11.OffLineUI.pos(Laya.stage.width / 2 - _this11.OffLineUI.width / 2, Laya.stage.height / 2 - _this11.OffLineUI.height / 2);
            } else {
                _this11.centerX = 0;
                _this11.centerY = 0;
            }

            _this11.visible = false;
            _this11.OffLineUI.visible = false;
            return _this11;
        }

        _createClass(YouziOffLineH, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.OffLineUI.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var offLineDataOk = YouziData.isDataLoaded();

                if (offLineDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.offLineGameDatas = YouziData.offlineBannerDatas;
                this.wxOnShow();
                this.wxOnHide();
            }
        }, {
            key: "wxOnShow",
            value: function wxOnShow() {
                var self = this;

                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.onShow(function(res) {
                        var showOffLineTimes = Math.floor(new Date().getTime() - self.hideOffLineGameTimes);
                        var showOffLineTimeSecond = Math.floor(showOffLineTimes / 1000);

                        if (showOffLineTimeSecond >= 8) {
                            if (self.offLineCreateComplete) {
                                self.visible = true;
                                self.OffLineUI.visible = true;
                                self.notifyUIState(YOUZI_UI_ID.Youzi_OffLineH, {
                                    uiVisible: true
                                });

                                if (self.isSendLog) {
                                    for (var i = 0; i < self.offLineGameShow.length; i++) {
                                        YouziData.sendExposureLog(self.offLineGameShow[i], BI_PAGE_TYPE.OFFLINE);

                                        if (i == self.offLineGameShow.length) {
                                            self.isSendLog = false;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }, {
            key: "wxOnHide",
            value: function wxOnHide() {
                var self = this;

                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.onHide(function() {
                        self.hideOffLineGameTimes = new Date().getTime();

                        if (self.offLineGameDatas.length > 0 && !self.offLineCreateComplete) {
                            self.createOffLineDialog();
                        }
                    });
                }
            }
        }, {
            key: "createOffLineDialog",
            value: function createOffLineDialog() {
                if (this.offLineGameDatas.length <= 0) {
                    console.log('离线推荐没有数据');
                    return;
                }

                this.OffLineCloseButton.on(Laya.Event.CLICK, this, this.onBtnOffLineClose);
                var offLineArr = [];

                for (var i = 0; i < this.offLineGameDatas.length; i++) {
                    if (i >= 3) {
                        break;
                    } else {
                        var tempOffLine = this.offLineGameDatas[i];
                        offLineArr.push({
                            infoData: tempOffLine,
                            namelab: tempOffLine.title
                        });
                    }
                }

                var offLineListPostionX = 0;

                switch (offLineArr.length) {
                    case 1:
                        offLineListPostionX = 205;
                        break;

                    case 2:
                        offLineListPostionX = 85;
                        this.OffLineList.spaceX = 50;
                        break;

                    default:
                        offLineListPostionX = 8;
                        this.OffLineList.spaceX = 15;
                        break;
                }

                this.OffLineList.x = offLineListPostionX;
                this.OffLineList.mouseHandler = new Laya.Handler(this, this.onOffLinelistItemMouseEvent);
                this.OffLineList.dataSource = offLineArr;

                for (var j = 0; j < this.offLineGameDatas.length; j++) {
                    var offLineIcon = this.OffLineList.getCell(j).getChildByName('icon');
                    offLineIcon.loadImage(this.offLineGameDatas[j].iconImg);
                    var offLineIconRedHit = offLineIcon.getChildByName('redhit');
                    offLineIconRedHit.visible = false;

                    if (this.offLineGameDatas[j].hotred == 1) {
                        offLineIconRedHit.visible = true;
                    }

                    this.offLineGameShow.push(this.offLineGameDatas[j]);

                    if (++j >= offLineArr.length) {
                        this.offLineCreateComplete = true;
                        break;
                    }
                }

                this.notifyUIComplete(YOUZI_UI_ID.Youzi_OffLineH, {
                    complete: true
                });
            }
        }, {
            key: "onBtnOffLineClose",
            value: function onBtnOffLineClose() {
                this.visible = false;
                this.OffLineUI.visible = false;
                this.notifyUIState(YOUZI_UI_ID.Youzi_OffLineH, {
                    uiVisible: false
                });
            }
        }, {
            key: "onOffLinelistItemMouseEvent",
            value: function onOffLinelistItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    console.log("当前选择的hotlist索引：" + index);
                    var tmpData = this.offLineGameDatas[index];
                    tmpData.locationIndex = BI_PAGE_TYPE.OFFLINE;
                    tmpData.type = 3;

                    if (tmpData.hotred == 1) {
                        var hideOffLineHit = this.OffLineList.getCell(index).getChildByName('icon').getChildByName('redhit');
                        hideOffLineHit.visible = false;
                    }

                    YouziData.startOtherGame(tmpData, null);
                } else if (e.type == 'mouseover');
                else if (e.type == 'mouseout');
            }
        }]);

        return YouziOffLineH;
    }(ui.youzi.Youzi_OffLineHUI);

var YouziSlideWindowH =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Slide2) {
        _inherits(YouziSlideWindowH, _ui$youzi$Youzi_Slide2);

        function YouziSlideWindowH(leftOrRight) {
            var _this12;

            _classCallCheck(this, YouziSlideWindowH);

            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(YouziSlideWindowH).call(this));
            _this12.hotlistHDatas = [];
            _this12.slideItemExposure = {};
            _this12.uiCompleteCallCopy = null;
            _this12.uiStateCallCopy = null;
            _this12.slideButton = null;
            _this12.slideMask = null;
            _this12.showFirst = false;
            _this12.isFullDevice = false;
            _this12.acitonPianYi = 0;
            _this12.isLeft = false;
            _this12.isLeft = leftOrRight;

            if (Laya.stage.width / Laya.stage.height >= 1.9) {
                _this12.isFullDevice = true;
                _this12.acitonPianYi = 20;

                _this12.scale(0.9, 0.9);

                var scaleH = _this12.height * 0.9;

                _this12.pos(_this12.x, Laya.stage.height / 2 - scaleH / 2);
            } else {
                _this12.centerY = 0;
            }

            if (!leftOrRight) {
                _this12.right = -_this12.width;
                _this12.slideBg.scaleX = -1;

                _this12.slideBg.pos(_this12.slideBg.width, _this12.slideBg.y);

                _this12.slideList.pos(_this12.slideList.x, _this12.slideList.y);
            } else {
                _this12.left = -_this12.width;
            }

            _this12.visible = false;
            _this12.SlideWindowUI.visible = false;
            _this12.slideList.scrollBar.hide = true;
            return _this12;
        }

        _createClass(YouziSlideWindowH, [{
            key: "setYouziPosition",
            value: function setYouziPosition(y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.pos(this.x, y);
            }
        }, {
            key: "setSlideButton",
            value: function setSlideButton(slideBtn) {
                this.slideButton = slideBtn;
            }
        }, {
            key: "setSlideMask",
            value: function setSlideMask(slideViewMask) {
                this.slideMask = slideViewMask;
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isSlideDataOk = YouziData.isDataLoaded();

                if (isSlideDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "showSlideBtnAndHideSlideMask",
            value: function showSlideBtnAndHideSlideMask() {
                if (this.slideButton) this.slideButton.visible = true;
                if (this.slideMask) this.slideMask.visible = false;
            }
        }, {
            key: "hideSlideBtnAndShowSlideMask",
            value: function hideSlideBtnAndShowSlideMask() {
                if (this.slideButton) this.slideButton.visible = false;
                if (this.slideMask) this.slideMask.visible = true;
            }
        }, {
            key: "showSlideWindow",
            value: function showSlideWindow() {
                if (this.hotlistHDatas.length <= 0) {
                    console.log('抽屉没有数据');
                    return;
                }

                if (!this.SlideWindowUI.visible) {
                    this.visible = true;
                    this.SlideWindowUI.visible = true;
                    this.hideSlideBtnAndShowSlideMask();
                    var self = this;
                    this.slideWindowActionShow(function() {
                        self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindowH, {
                            uiVisible: true
                        });

                        if (!self.showFirst) {
                            self.showFirst = true;
                            self.checkExposure();
                        }
                    });
                }
            }
        }, {
            key: "slideWindowActionShow",
            value: function slideWindowActionShow(actionFinishCall) {
                var self = this;

                if (!this.isLeft) {
                    Laya.Tween.to(this, {
                        right: self.acitonPianYi
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                } else {
                    Laya.Tween.to(this, {
                        left: self.acitonPianYi
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                }
            }
        }, {
            key: "closeSlideWindow",
            value: function closeSlideWindow() {
                if (this.hotlistHDatas.length <= 0) {
                    console.log('抽屉没有数据');
                    return;
                }

                var self = this;
                this.slideWindowActionClose(function() {
                    self.notifyUIState(YOUZI_UI_ID.Youzi_SlideWindowH, {
                        uiVisible: false
                    });
                    self.visible = false;
                    self.SlideWindowUI.visible = false;
                    self.btnSLideClose.visible = true;
                    self.showSlideBtnAndHideSlideMask();
                });
                self.btnSLideClose.visible = false;
            }
        }, {
            key: "slideWindowActionClose",
            value: function slideWindowActionClose(actionFinishCall) {
                if (!this.isLeft) {
                    Laya.Tween.to(this, {
                        right: -this.width
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                } else {
                    Laya.Tween.to(this, {
                        left: -this.width
                    }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, actionFinishCall));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.hotlistHDatas = YouziData.hotListDatas;
                this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow);
                var arr = [];
                var pRecord = null;

                for (var i = 0; i < this.hotlistHDatas.length; i++) {
                    pRecord = this.hotlistHDatas[i];
                    arr.push({
                        icon: pRecord.iconImg,
                        namelab: pRecord.title
                    });
                }

                this.slideList.array = arr;
                this.slideList.renderHandler = new Laya.Handler(this, this.onListRender);
                this.slideList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent);
                this.notifyUIComplete(YOUZI_UI_ID.Youzi_SlideWindowH, {
                    complete: true
                });
            }
        }, {
            key: "onListRender",
            value: function onListRender(item, index) {
                if (this.hotlistHDatas[index].hotred == 1) {
                    var redHitWall = item.getChildByName('icon').getChildByName('markImg');
                    redHitWall.visible = true;
                }

                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.SlideWindowUI.visible) {
                    if (!this.slideItemExposure[this.hotlistHDatas[index].appid]) {
                        YouziData.sendExposureLog(this.hotlistHDatas[index], BI_PAGE_TYPE.FLOAT);
                        this.slideItemExposure[this.hotlistHDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "onslideListItemMouseEvent",
            value: function onslideListItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    console.log("当前选择的slideh索引：" + index);
                    var tmpData = this.hotlistHDatas[index];
                    tmpData.locationIndex = BI_PAGE_TYPE.FLOAT;
                    YouziData.startOtherGame(tmpData, null);

                    if (tmpData.hotred == 1) {
                        var tmpSlideHit = this.slideList.getCell(index).getChildByName('icon').getChildByName('markImg');
                        tmpSlideHit.visible = false;
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "checkExposure",
            value: function checkExposure() {
                if (this.SlideWindowUI.visible) {
                    for (var i = 0; i < this.hotlistHDatas.length; i++) {
                        var infoData = this.hotlistHDatas[i];

                        if (!this.slideItemExposure[infoData.appid]) {
                            this.slideItemExposure[infoData.appid] = 1;
                            YouziData.sendExposureLog(infoData, BI_PAGE_TYPE.FLOAT);
                        }

                        if (i >= 11) break;
                    }
                }
            }
        }]);

        return YouziSlideWindowH;
    }(ui.youzi.Youzi_SlideWindowHUI);

var YouziSmallWallH =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_Small2) {
        _inherits(YouziSmallWallH, _ui$youzi$Youzi_Small2);

        function YouziSmallWallH() {
            var _this13;

            _classCallCheck(this, YouziSmallWallH);

            _this13 = _possibleConstructorReturn(this, _getPrototypeOf(YouziSmallWallH).call(this));
            _this13.smallWallHDatas = [];
            _this13.smallWallHItemExposure = {};
            _this13.smallWallHItemExposureCount = 0;
            _this13.uiCompleteCallCopy = null;
            _this13.curFront = true;
            _this13.curBack = false;
            _this13.stopAction = false;
            _this13.isClick = false;
            _this13.dur = 5000;
            _this13.visible = false;
            _this13.SmallWallUIH.visible = false;
            _this13.smallWallListH.scrollBar.hide = true;
            return _this13;
        }

        _createClass(YouziSmallWallH, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isSmallWallDataOk = YouziData.isDataLoaded();

                if (isSmallWallDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                this.smallWallHDatas = YouziData.moreDatas;

                if (this.smallWallHDatas.length > 0) {
                    var arr = [];
                    var pRecord = null;

                    for (var i = 0; i < this.smallWallHDatas.length; i++) {
                        pRecord = this.smallWallHDatas[i];
                        arr.push({
                            icon: pRecord.iconImg,
                            namelab: pRecord.title
                        });
                    }

                    this.smallWallListH.renderHandler = new Laya.Handler(this, this.onListRender);
                    this.smallWallListH.array = arr;
                    this.smallWallListH.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent);
                    this.visible = true;
                    this.SmallWallUIH.visible = true;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_SmallWall, {
                        complete: true
                    });
                    this.starSmallWallAction();
                }
            }
        }, {
            key: "onListRender",
            value: function onListRender(cell, index) {
                if (this.smallWallHDatas[index].hotred == 1) {
                    var redHitWallH = cell.getChildByName('icon').getChildByName('redhit');
                    redHitWallH.visible = true;
                }

                this.checkSendExpsureLog(index);
            }
        }, {
            key: "checkSendExpsureLog",
            value: function checkSendExpsureLog(index) {
                if (this.visible && this.SmallWallUIH.visible) {
                    if (!this.smallWallHItemExposure[this.smallWallHDatas[index].appid]) {
                        YouziData.sendExposureLog(this.smallWallHDatas[index], BI_PAGE_TYPE.SMALL_MATRIX_WALL);
                        this.smallWallHItemExposure[this.smallWallHDatas[index].appid] = 1;
                    }
                }
            }
        }, {
            key: "stopSmallWallAcion",
            value: function stopSmallWallAcion() {
                this.stopAction = true;
            }
        }, {
            key: "starSmallWallAction",
            value: function starSmallWallAction() {
                this.smallWallListAutoScroll();
            }
        }, {
            key: "smallWallListAutoScroll",
            value: function smallWallListAutoScroll() {
                if (!this.SmallWallUIH.visible) return;

                if (this.smallWallHDatas.length <= 8) {
                    return;
                }

                this.stopAction = false;
                this.dur = (this.smallWallHDatas.length - 8) * 2000;

                if (this.curFront && !this.curBack) {
                    this.listTweenToEnd();
                } else if (!this.curFront && this.curBack) {
                    this.listTweenToStart();
                }
            }
        }, {
            key: "listTweenToEnd",
            value: function listTweenToEnd() {
                if (!this.stopAction) {
                    var endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, true);
                    this.smallWallListH.tweenTo(this.smallWallHDatas.length - 1, this.dur, endCompletHandler);
                }

                this.curFront = true;
                this.curBack = false;
            }
        }, {
            key: "listTweenToStart",
            value: function listTweenToStart() {
                if (!this.stopAction) {
                    var startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, true);
                    this.smallWallListH.tweenTo(0, this.dur, startCompleteHandler);
                }

                this.curFront = false;
                this.curBack = true;
            }
        }, {
            key: "onSmallWallListItemMouseEvent",
            value: function onSmallWallListItemMouseEvent(e, index) {
                if (e.type == 'mousedown');
                else if (e.type == 'mouseup') {
                    if (!this.isClick) {
                        this.isClick = true;
                        console.log("当前选择的大家都在玩儿索引：" + index);
                        var tmpData = this.smallWallHDatas[index];
                        tmpData.locationIndex = BI_PAGE_TYPE.SMALL_MATRIX_WALL;
                        YouziData.startOtherGame(tmpData, this.startOtherCall.bind(this));

                        if (tmpData.hotred == 1) {
                            var tmpSlideHit = this.smallWallListH.getCell(index).getChildByName('icon').getChildByName('redhit');
                            tmpSlideHit.visible = false;
                        }
                    }
                } else if (e.type == 'mouseover');
            }
        }, {
            key: "startOtherCall",
            value: function startOtherCall(state) {
                this.isClick = false;
                this.starSmallWallAction();
            }
        }]);

        return YouziSmallWallH;
    }(ui.youzi.Youzi_SmallWallHUI);

var YouziMultipleMainPush =
    /*#__PURE__*/
    function(_ui$youzi$Youzi_MainP2) {
        _inherits(YouziMultipleMainPush, _ui$youzi$Youzi_MainP2);

        function YouziMultipleMainPush(mainData) {
            var _this14;

            _classCallCheck(this, YouziMultipleMainPush);

            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(YouziMultipleMainPush).call(this));
            _this14.mainRecData = null;
            _this14.mainRecItemExposure = {};
            _this14.angel = 0;
            _this14.curMainRecIdx = 0;
            _this14.uiCompleteCallCopy = null;
            _this14.uiStateCallCopy = null;
            _this14.leftTween = null;
            _this14.rightTween = null;
            _this14.startTimer = true;
            _this14.mainRecData = mainData;
            _this14.visible = false;
            _this14.btnMainRecBg.visible = false;
            return _this14;
        }

        _createClass(YouziMultipleMainPush, [{
            key: "setYouziPosition",
            value: function setYouziPosition(x, y) {
                this.centerX = NaN;
                this.centerY = NaN;
                this.pos(x, y);
            }
        }, {
            key: "setUICompleteCall",
            value: function setUICompleteCall(uiCompleteCall) {
                this.uiCompleteCallCopy = uiCompleteCall;
            }
        }, {
            key: "notifyUIComplete",
            value: function notifyUIComplete(uiID, msg) {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUICompleteCall",
            value: function offUICompleteCall() {
                if (this.uiCompleteCallCopy) {
                    this.uiCompleteCallCopy = null;
                }
            }
        }, {
            key: "setUIStateCall",
            value: function setUIStateCall(uiStateCall) {
                this.uiStateCallCopy = uiStateCall;
            }
        }, {
            key: "notifyUIState",
            value: function notifyUIState(uiID, msg) {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy(uiID, msg);
                }
            }
        }, {
            key: "offUIStateCall",
            value: function offUIStateCall() {
                if (this.uiStateCallCopy) {
                    this.uiStateCallCopy = null;
                }
            }
        }, {
            key: "onEnable",
            value: function onEnable() {
                var isMainDataOk = YouziData.isDataLoaded();

                if (isMainDataOk) {
                    this.initShow();
                } else {
                    YouziData._loadedCallBacks.push(this.initShow.bind(this));
                }
            }
        }, {
            key: "initShow",
            value: function initShow() {
                if (this.mainRecData) {
                    this.btnMainRec.on(Laya.Event.CLICK, this, this.onBtnMainRecClicked);
                    this.visible = true;
                    this.btnMainRecBg.visible = true;
                    this.btnMainRec.skin = this.mainRecData.iconImg;
                    this.slogan.text = this.mainRecData.slogan;
                    this.btnMainRecBg.rotation = 10;
                    YouziData.sendExposureLog(this.mainRecData, BI_PAGE_TYPE.MAIN);
                    this.mainRecItemExposure[this.mainRecData.appid] = 1;
                    this.notifyUIComplete(YOUZI_UI_ID.Youzi_MainPush, {
                        complete: true
                    });
                    this.startTimerLoop();
                }
            }
        }, {
            key: "startTimerLoop",
            value: function startTimerLoop() {
                if (this.startTimer) {
                    this.startTimer = false;
                    this.mainPushRotationAction();
                }
            }
        }, {
            key: "clearTimerLoop",
            value: function clearTimerLoop() {
                this.btnMainRecBg.rotation = 10;
                this.startTimer = true;

                if (this.leftTween) {
                    Laya.Tween.clear(this.leftTween);
                }

                if (this.rightTween) {
                    Laya.Tween.clear(this.rightTween);
                }
            }
        }, {
            key: "mainPushRotationAction",
            value: function mainPushRotationAction() {
                this.rotatotionRight();
            }
        }, {
            key: "rotatotionRight",
            value: function rotatotionRight() {
                this.rightTween = Laya.Tween.to(this.btnMainRecBg, {
                    rotation: -10
                }, 2000, null, new Laya.Handler(this, this.rotationLeft));
            }
        }, {
            key: "rotationLeft",
            value: function rotationLeft(actionCompleteCall) {
                this.leftTween = Laya.Tween.to(this.btnMainRecBg, {
                    rotation: 10
                }, 2000, null, new Laya.Handler(this, this.rotatotionRight));
            }
        }, {
            key: "updateMainRec",
            value: function updateMainRec() {}
        }, {
            key: "updateMainRecMultiple",
            value: function updateMainRecMultiple(mainPushData) {
                this.btnMainRec.graphics.clear(true);
                this.btnMainRec.loadImage(mainPushData.iconImg);
                this.slogan.text = mainPushData.slogan;

                if (!this.mainRecItemExposure[mainPushData.appid]) {
                    YouziData.sendExposureLog(mainPushData, BI_PAGE_TYPE.MAIN);
                    this.mainRecItemExposure[mainPushData.appid] = 1;
                }
            }
        }, {
            key: "onBtnMainRecClicked",
            value: function onBtnMainRecClicked() {
                YouziData.clickGameYouziUIId = YOUZI_UI_ID.Youzi_MainPush;
                this.mainRecData.locationIndex = BI_PAGE_TYPE.MAIN;
                YouziData.startOtherGame(this.mainRecData, null);
            }
        }]);

        return YouziMultipleMainPush;
    }(ui.youzi.Youzi_MainPushUI);

var YouziMultipleMainPushManager =
    /*#__PURE__*/
    function() {
        function YouziMultipleMainPushManager(jsonArray) {
            _classCallCheck(this, YouziMultipleMainPushManager);

            this.multipleAmount = 1;
            this.isUpdateMainPush = false;
            this.multipleMainPushObj = [];
            this.paramsJsonArray = [];
            this.randomData = [];
            this.startTimerMulti = true;
            this.paramsJsonArray = jsonArray;
            this.initShow();
        }

        _createClass(YouziMultipleMainPushManager, [{
            key: "initShow",
            value: function initShow() {
                if (YouziData.isDataLoaded()) {
                    this.creatYouziMultipleMainPush();
                } else {
                    YouziData._loadedCallBacks.push(this.creatYouziMultipleMainPush.bind(this));
                }
            }
        }, {
            key: "creatYouziMultipleMainPush",
            value: function creatYouziMultipleMainPush() {
                var amountArr = YouziData.getMultiMainAmount(this.paramsJsonArray.length);
                this.multipleAmount = amountArr[0];
                this.isUpdateMainPush = amountArr[1];
                this.randomData = YouziData.getGamesIndex(YouziData.mainRecDatas.length, this.multipleAmount);

                for (var i = 0; i < this.randomData.length; i++) {
                    var multipleMainPush = new YouziMultipleMainPush(YouziData.mainRecDatas[this.randomData[i]]);
                    var paramsJson = this.paramsJsonArray[i];

                    if (this.paramsJsonArray[i]) {
                        multipleMainPush.setYouziPosition(paramsJson.x, paramsJson.y);
                        paramsJson.parentNode.addChild(multipleMainPush);
                        this.multipleMainPushObj.push(multipleMainPush);
                    }
                }

                this.startChangeTimeLoop();
            }
        }, {
            key: "startChangeTimeLoop",
            value: function startChangeTimeLoop() {
                if (this.startTimerMulti) {
                    this.startTimerMulti = false;

                    if (this.isUpdateMainPush) {
                        Laya.timer.loop(5000, this, this.updateMultipleMainPush);
                    }

                    for (var k = 0; k < this.multipleMainPushObj.length; k++) {
                        this.multipleMainPushObj[k].startTimerLoop();
                    }
                }
            }
        }, {
            key: "stopChangeTimeLoop",
            value: function stopChangeTimeLoop() {
                if (this.isUpdateMainPush) {
                    Laya.timer.clear(this, this.updateMultipleMainPush);
                }

                for (var l = 0; l < this.multipleMainPushObj.length; l++) {
                    this.multipleMainPushObj[l].clearTimerLoop();
                }

                this.startTimerMulti = true;
            }
        }, {
            key: "updateMultipleMainPush",
            value: function updateMultipleMainPush() {
                this.randomData = YouziData.getGamesIndex(YouziData.mainRecDatas.length, this.multipleAmount);

                for (var j = 0; j < this.multipleMainPushObj.length; j++) {
                    this.multipleMainPushObj[j].updateMainRecMultiple(YouziData.mainRecDatas[this.randomData[j]]);
                }
            }
        }]);

        return YouziMultipleMainPushManager;
    }();

var MiniGame_Plat_Type = {
    Test: 0,
    WeChat: 1,
    OppoMiniGame: 2
};

var YouziCenter =
    /*#__PURE__*/
    function() {
        function YouziCenter() {
            _classCallCheck(this, YouziCenter);

            this.navigateToMiniCallTemp = null;
            this.slideBtn = null;
            this.multiMainPushAmount = 1;
            this.moreGameUI = null;
            this.slideWindowUI = null;
            this.slideWindowMask = null;
            this.moreGameUIH = null;
            this.slideWindowUIH = null;
            this.slideWindowMaskH = null;
        }

        _createClass(YouziCenter, [{
            key: "youziDebug",
            value: function youziDebug(debug) {
                YouziData.debug = debug;
            }
        }, {
            key: "initYouzi",
            value: function initYouzi(appId, resVersion, miniGamePlatType) {
                YouziData.init(appId, resVersion, miniGamePlatType);
            }
        }, {
            key: "registerNavigateToMiniCall",
            value: function registerNavigateToMiniCall(call) {
                this.navigateToMiniCallTemp = call;
            }
        }, {
            key: "notifyNavigateToMini",
            value: function notifyNavigateToMini(uiId) {
                if (this.navigateToMiniCallTemp) {
                    this.navigateToMiniCallTemp(uiId);
                }
            }
        }, {
            key: "offNavigateToMimiCall",
            value: function offNavigateToMimiCall() {
                this.navigateToMiniCallTemp = null;
            }
        }, {
            key: "createMoreGameButton",
            value: function createMoreGameButton(parentNode, params, isAutoClick) {
                var moreGameBtn = null;
                if (!params) params = {};

                if (params.hasOwnProperty('btnUrl')) {
                    moreGameBtn = new Laya.Button(params.btnUrl);
                } else {
                    moreGameBtn = new Laya.Button('youziTexture/btn-entrance-nogift.png');
                }

                moreGameBtn.mouseEnabled = true;
                moreGameBtn.stateNum = 1;
                moreGameBtn.width = params.hasOwnProperty('width') ? params.width : 119;
                moreGameBtn.height = params.hasOwnProperty('height') ? params.height : 119;
                var moreGameBtnX = params.hasOwnProperty('x') ? params.x : 0;
                var moreGameBtnY = params.hasOwnProperty('y') ? params.y : 0;
                moreGameBtn.pos(moreGameBtnX, moreGameBtnY);
                parentNode.addChild(moreGameBtn);

                if (isAutoClick) {
                    moreGameBtn.on(Laya.Event.CLICK, this, this.showMoreGameUI);
                }

                return moreGameBtn;
            }
        }, {
            key: "showMoreGameUI",
            value: function showMoreGameUI() {
                if (Laya.stage.width > Laya.stage.height) {
                    if (this.moreGameUIH) this.moreGameUIH.showMoreGameUI();
                } else {
                    if (this.moreGameUI) this.moreGameUI.showMoreGameUI();
                }
            }
        }, {
            key: "createMoreGameUI",
            value: function createMoreGameUI(parentNode, params, uiStateCall) {
                this.moreGameUI = new YouziMoreGame();
                this.moreGameUI.setUIStateCall(uiStateCall);

                if (params) {
                    this.moreGameUI.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(this.moreGameUI);
                return this.moreGameUI;
            }
        }, {
            key: "createMoreGameUIH",
            value: function createMoreGameUIH(parentNode, params, uiStateCall) {
                this.moreGameUIH = new YouziMoreGameH();
                this.moreGameUIH.setUIStateCall(uiStateCall);

                if (params) {
                    this.moreGameUIH.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(this.moreGameUIH);
                return this.moreGameUIH;
            }
        }, {
            key: "createSlideButton",
            value: function createSlideButton(parentNode, params, leftOrRight, isAutoClick) {
                this.slideBtn = new Laya.Button('spear_io_start/btn_slide.png');
                this.slideBtn.mouseEnabled = true;
                this.slideBtn.stateNum = 1;
                var dot = new Laya.Image('spear_io_start/ui_public_red.png');
                dot.pos(-13, -13);
                this.slideBtn.addChild(dot);

                if (!params) {
                    params = {};
                }

                this.slideBtn.width = params.width;
                this.slideBtn.height = params.height;
                var slideBtnX = 0;
                var slideBtnY = params.hasOwnProperty('y') ? params.y : Laya.stage.height / 2;

                if (leftOrRight) {
                    this.slideBtn.scaleX = -1;
                    slideBtnX = params.hasOwnProperty('x') ? params.x : this.slideBtn.width;
                } else {
                    slideBtnX = params.hasOwnProperty('x') ? params.x : Laya.stage.width - this.slideBtn.width;
                }

                this.slideBtn.pos(slideBtnX, slideBtnY);
                parentNode.addChild(this.slideBtn);
                if (isAutoClick) this.slideBtn.on(Laya.Event.CLICK, this, this.showSlideWindowUI);
                return this.slideBtn;
            }
        }, {
            key: "showSlideWindowUI",
            value: function showSlideWindowUI() {
                if (Laya.stage.width > Laya.stage.height) {
                    if (this.slideWindowUIH) {
                        this.slideWindowUIH.showSlideWindow();
                    }
                } else {
                    if (this.slideWindowUI) {
                        this.slideWindowUI.showSlideWindow();
                    }
                }
            }
        }, {
            key: "createSlideWindowUI",
            value: function createSlideWindowUI(parentNode, params, leftOrRight, uiStateCall) {
                this.slideWindowUI = new YouziSlideWindow(leftOrRight);
                this.slideWindowUI.setSlideButton(this.slideBtn);
                this.slideWindowUI.setSlideMask(this.createSlideWindowMask());
                this.slideWindowUI.setUIStateCall(uiStateCall);

                if (params) {
                    this.slideWindowUI.setYouziPosition(params.y);
                }

                parentNode.addChild(this.createSlideWindowMask());
                parentNode.addChild(this.slideWindowUI);
                return this.slideWindowUI;
            }
        }, {
            key: "createSlideWindowMask",
            value: function createSlideWindowMask() {
                if (this.slideWindowMask) {
                    return this.slideWindowMask;
                } else {
                    this.slideWindowMask = new Laya.Button('youziTexture/blank.png');
                    this.slideWindowMask.width = 1000;
                    this.slideWindowMask.height = 1900;
                    this.slideWindowMask.stateNum = 1;
                    this.slideWindowMask.centerX = 0;
                    this.slideWindowMask.centerY = 0;
                    this.slideWindowMask.visible = false;
                    return this.slideWindowMask;
                }
            }
        }, {
            key: "createSlideWindowUIH",
            value: function createSlideWindowUIH(parentNode, params, leftOrRight, uiStateCall) {
                this.slideWindowUIH = new YouziSlideWindowH(leftOrRight);
                this.slideWindowUIH.setSlideButton(this.slideBtn);
                this.slideWindowUIH.setSlideMask(this.createSlideWindowMaskH());
                this.slideWindowUIH.setUIStateCall(uiStateCall);

                if (params) {
                    this.slideWindowUIH.setYouziPosition(params.y);
                }

                parentNode.addChild(this.createSlideWindowMaskH());
                parentNode.addChild(this.slideWindowUIH);
                return this.slideWindowUIH;
            }
        }, {
            key: "createSlideWindowMaskH",
            value: function createSlideWindowMaskH() {
                if (this.slideWindowMaskH) {
                    return this.slideWindowMaskH;
                } else {
                    this.slideWindowMaskH = new Laya.Button('youziTexture/blank.png');
                    this.slideWindowMaskH.width = 1900;
                    this.slideWindowMaskH.height = 1000;
                    this.slideWindowMaskH.centerX = 0;
                    this.slideWindowMaskH.centerY = 0;
                    this.slideWindowMaskH.stateNum = 1;
                    this.slideWindowMaskH.visible = false;
                    return this.slideWindowMaskH;
                }
            }
        }, {
            key: "createBottomBanner",
            value: function createBottomBanner(parentNode, params, isOffSwich) {
                var bottomBanner = new YouziBottomBanner(isOffSwich);

                if (params) {
                    bottomBanner.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(bottomBanner);
                return bottomBanner;
            }
        }, {
            key: "bottomBannerActionStopOrStart",
            value: function bottomBannerActionStopOrStart(startOrStop, bottomBannerTemp) {
                if (bottomBannerTemp) {
                    if (startOrStop) {
                        bottomBannerTemp.stopBottomBannerAcion();
                    } else {
                        bottomBannerTemp.starBottomBannerAction();
                    }
                }
            }
        }, {
            key: "createGuessLike",
            value: function createGuessLike(parentNode, params) {
                var guessLike = new YouziGuessLike();

                if (params) {
                    guessLike.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(guessLike);
                return guessLike;
            }
        }, {
            key: "createGuessLikeH",
            value: function createGuessLikeH(parentNode, params) {
                var guessLikeH = new YouziGuessLikeH();

                if (params) {
                    guessLikeH.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(guessLikeH);
                return guessLikeH;
            }
        }, {
            key: "guessLikeListTweenStopOrStart",
            value: function guessLikeListTweenStopOrStart(stopOrStart, guessLikeTemp, guessLikeHTemp) {
                if (guessLikeTemp) {
                    if (stopOrStart) {
                        guessLikeTemp.stopGuessLikeAcion();
                    } else {
                        guessLikeTemp.starGuessLikeAction();
                    }
                }

                if (guessLikeHTemp) {
                    if (stopOrStart) {
                        guessLikeHTemp.stopGuessLikeHAcion();
                    } else {
                        guessLikeHTemp.starGuessLikeHAction();
                    }
                }
            }
        }, {
            key: "createMainPush",
            value: function createMainPush(parentNode, params) {
                var mainPush = new YouziMainPush();

                if (params) {
                    mainPush.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(mainPush);
                return mainPush;
            }
        }, {
            key: "mainPushActionStopOrStart",
            value: function mainPushActionStopOrStart(stopOrStart, mainPushTemp) {
                if (stopOrStart) {
                    mainPushTemp.clearTimerLoop();
                } else {
                    mainPushTemp.startTimerLoop();
                }
            }
        }, {
            key: "createMultiMainPush",
            value: function createMultiMainPush(paramsJsonArray) {
                var youziMultiMainPushManager = new YouziMultipleMainPushManager(paramsJsonArray);
                return youziMultiMainPushManager;
            }
        }, {
            key: "stopOrStartMultiMainPush",
            value: function stopOrStartMultiMainPush(stopOrStart, multiMainPushManager) {
                if (!multiMainPushManager) return;

                if (stopOrStart) {
                    multiMainPushManager.stopChangeTimeLoop();
                } else {
                    multiMainPushManager.startChangeTimeLoop();
                }
            }
        }, {
            key: "createOffline",
            value: function createOffline(parentNode, params, uiStateCall) {
                var offlineUI = new YouziOffLine();
                offlineUI.setUIStateCall(uiStateCall);

                if (params) {
                    offlineUI.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(offlineUI);
                return offlineUI;
            }
        }, {
            key: "createOfflineH",
            value: function createOfflineH(parentNode, params, uiStateCall) {
                var offlineUIH = new YouziOffLineH();
                offlineUIH.setUIStateCall(uiStateCall);

                if (params) {
                    offlineUIH.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(offlineUIH);
                return offlineUIH;
            }
        }, {
            key: "createYouzi_WechatBanner",
            value: function createYouzi_WechatBanner(wechatBannerID) {
                var posType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var isOffSwich = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var isOffSwitchSelf = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var youziWechatBanner = new YouziWeChatBanner(wechatBannerID, posType, offset, isOffSwich, isOffSwitchSelf);
                return youziWechatBanner;
            }
        }, {
            key: "createYouzi_GameBanner",
            value: function createYouzi_GameBanner(isOffSwitch, switchTime, params) {
                var youziGameBanner = new YouziGameBanner(isOffSwitch, switchTime);

                if (params) {
                    youziGameBanner.setYouziPosition(params.x, params.y);
                }

                return youziGameBanner;
            }
        }, {
            key: "createYouziSmallWall",
            value: function createYouziSmallWall(parentNode, params) {
                var youziSmallWall = new YouziSmallWall();

                if (params) {
                    youziSmallWall.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(youziSmallWall);
                return youziSmallWall;
            }
        }, {
            key: "smallWallActionStopOrStart",
            value: function smallWallActionStopOrStart(startOrStop, smallWallTemp) {
                if (smallWallTemp) {
                    if (startOrStop) {
                        smallWallTemp.stopSmallWallAcion();
                    } else {
                        smallWallTemp.starSmallWallAction();
                    }
                }
            }
        }, {
            key: "createYouziSmallWallH",
            value: function createYouziSmallWallH(parentNode, params) {
                var youziSmallWallH = new YouziSmallWallH();

                if (params) {
                    youziSmallWallH.setYouziPosition(params.x, params.y);
                }

                parentNode.addChild(youziSmallWallH);
                return youziSmallWallH;
            }
        }, {
            key: "smallWallHActionStopOrStart",
            value: function smallWallHActionStopOrStart(startOrStop, smallWallHTemp) {
                if (smallWallHTemp) {
                    if (startOrStop) {
                        smallWallHTemp.stopSmallWallAcion();
                    } else {
                        smallWallHTemp.starSmallWallAction();
                    }
                }
            }
        }], [{
            key: "getInstance",
            value: function getInstance() {
                if (this.instance == null) {
                    this.instance = new YouziCenter();
                }

                return this.instance;
            }
        }]);

        return YouziCenter;
    }();

YouziCenter.instance = null;