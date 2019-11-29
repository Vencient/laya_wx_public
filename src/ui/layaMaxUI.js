var REG = Laya.ClassUtils.regClass;
export var ui;
(function (ui) {
    class main_sceneUI extends Laya.Scene {
        constructor() { super(); }
        createChildren() {
            super.createChildren();
            this.loadScene("main_scene");
        }
    }
    ui.main_sceneUI = main_sceneUI;
    REG("ui.main_sceneUI", main_sceneUI);
    class start_sceneUI extends Laya.Scene {
        constructor() { super(); }
        createChildren() {
            super.createChildren();
            this.loadScene("start_scene");
        }
    }
    ui.start_sceneUI = start_sceneUI;
    REG("ui.start_sceneUI", start_sceneUI);
})(ui || (ui = {}));
(function (ui) {
    var youzi;
    (function (youzi) {
        class Youzi_BottomBannerUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_BottomBannerUI.uiView);
            }
        }
        Youzi_BottomBannerUI.uiView = { "type": "View", "props": { "width": 640, "visible": false, "name": "YouziBottomView", "height": 170 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 640, "visible": false, "var": "BannerBottomUI", "sizeGrid": "12,10,0,10", "height": 170 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 640, "var": "bannerBottomBg", "skin": "youziTexture/two_round_corner.png", "sizeGrid": "10,12,5,12", "height": 170 }, "compId": 4 }, { "type": "Image", "props": { "y": 37.5, "x": 14, "skin": "youziTexture/txt_hotgame_v.png", "name": "bannerTitle" }, "compId": 5 }, { "type": "List", "props": { "y": 20, "x": 47, "width": 584, "var": "bottomList", "spaceY": 5, "spaceX": 24, "repeatY": 1, "repeatX": 4, "height": 150, "hScrollBarSkin": "youziTexture/hscroll.png", "drawCallOptimize": true }, "compId": 6, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 110, "renderType": "render", "name": "render", "height": 150 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 110, "name": "icon", "height": 110 }, "compId": 8 }, { "type": "Label", "props": { "y": 130, "x": 55, "text": "弹弹欢乐球", "name": "namelab", "fontSize": 20, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 9 }] }] }] }], "loadList": ["youziTexture/two_round_corner.png", "youziTexture/txt_hotgame_v.png", "youziTexture/hscroll.png"], "loadList3D": [] };
        youzi.Youzi_BottomBannerUI = Youzi_BottomBannerUI;
        REG("ui.youzi.Youzi_BottomBannerUI", Youzi_BottomBannerUI);
        class Youzi_GameBannerViewUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_GameBannerViewUI.uiView);
            }
        }
        Youzi_GameBannerViewUI.uiView = { "type": "View", "props": { "width": 640, "visible": false, "name": "YouziGameBanner", "height": 170 }, "compId": 2, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 640, "visible": true, "var": "GameBannerList", "spaceY": 5, "spaceX": 5, "repeatY": 1, "repeatX": 6, "height": 170, "hScrollBarSkin": "youziTexture/hscroll.png" }, "compId": 10, "child": [{ "type": "Box", "props": { "y": 1, "x": 0, "width": 640, "renderType": "render", "name": "render", "height": 170 }, "compId": 11, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 640, "name": "icon", "height": 170 }, "compId": 12 }] }] }], "loadList": ["youziTexture/hscroll.png"], "loadList3D": [] };
        youzi.Youzi_GameBannerViewUI = Youzi_GameBannerViewUI;
        REG("ui.youzi.Youzi_GameBannerViewUI", Youzi_GameBannerViewUI);
        class Youzi_GuessLikeUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_GuessLikeUI.uiView);
            }
        }
        Youzi_GuessLikeUI.uiView = { "type": "View", "props": { "width": 464, "name": "YouziGuessLikeView", "height": 124 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 464, "visible": false, "var": "guessUI", "height": 124 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 464, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "10,10,10,10", "name": "guessLikeBg", "height": 124 }, "compId": 4 }, { "type": "Image", "props": { "y": 15, "x": 28, "skin": "youziTexture/txt_guesslike_v.png", "name": "guessTitle" }, "compId": 5 }, { "type": "List", "props": { "y": 19, "x": 87, "width": 369, "var": "guesslist", "spaceX": 18, "repeatY": 1, "repeatX": 3, "height": 90, "hScrollBarSkin": "youziTexture/hscroll.png" }, "compId": 6, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 90, "renderType": "render", "name": "render", "height": 90 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 90, "name": "icon", "height": 90 }, "compId": 8 }] }] }] }], "loadList": ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_v.png", "youziTexture/hscroll.png"], "loadList3D": [] };
        youzi.Youzi_GuessLikeUI = Youzi_GuessLikeUI;
        REG("ui.youzi.Youzi_GuessLikeUI", Youzi_GuessLikeUI);
        class Youzi_GuessLikeHUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_GuessLikeHUI.uiView);
            }
        }
        Youzi_GuessLikeHUI.uiView = { "type": "View", "props": { "width": 124, "renderType": "render", "name": "YouziGuessLikeViewH", "height": 464 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 124, "visible": false, "var": "guessUI", "height": 464, "drawCallOptimize": true }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 124, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "8,8,8,8", "rotation": 0, "name": "guessLikeBg", "height": 464 }, "compId": 4 }, { "type": "Image", "props": { "y": 30, "x": 12, "width": 100, "skin": "youziTexture/txt_guesslike_h.png", "rotation": 0, "name": "title", "height": 26 }, "compId": 5 }, { "type": "List", "props": { "y": 289, "x": 17, "width": 90, "var": "guesslist", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 18, "rotation": 0, "repeatY": 3, "repeatX": 1, "pivotY": 210, "height": 385, "disabled": false }, "compId": 6, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 90, "name": "render", "height": 90 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 90, "name": "icon", "height": 90 }, "compId": 8 }] }] }] }], "loadList": ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/vscroll.png"], "loadList3D": [] };
        youzi.Youzi_GuessLikeHUI = Youzi_GuessLikeHUI;
        REG("ui.youzi.Youzi_GuessLikeHUI", Youzi_GuessLikeHUI);
        class Youzi_MainPushUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_MainPushUI.uiView);
            }
        }
        Youzi_MainPushUI.uiView = { "type": "View", "props": { "width": 102, "visible": false, "name": "YouziMainPushView", "mouseEnabled": true, "height": 124 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "width": 102, "visible": false, "var": "btnMainRecBg", "skin": "youziTexture/icon_bg.png", "sizeGrid": "5,5,5,5", "pivotX": 51, "height": 124, "centerX": 0 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 3, "x": 51, "width": 92, "var": "btnMainRec", "height": 90, "anchorX": 0.5 }, "compId": 7, "child": [{ "type": "Text", "props": { "y": 103, "x": 50, "width": 102, "var": "slogan", "valign": "middle", "pivotY": 1, "pivotX": 51, "overflow": "hidden", "height": 1, "fontSize": 18, "bold": true, "align": "center", "runtime": "laya.display.Text" }, "compId": 5 }] }] }], "loadList": ["youziTexture/icon_bg.png"], "loadList3D": [] };
        youzi.Youzi_MainPushUI = Youzi_MainPushUI;
        REG("ui.youzi.Youzi_MainPushUI", Youzi_MainPushUI);
        class Youzi_MoreGameUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_MoreGameUI.uiView);
            }
        }
        Youzi_MoreGameUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "visible": false, "name": "YouziMoreGameView", "height": 1280 }, "compId": 2, "child": [{ "type": "Button", "props": { "width": 1000, "stateNum": 1, "skin": "youziTexture/blank.png", "name": "maskButton", "mouseEnabled": true, "height": 1900, "centerY": 0, "centerX": 0 }, "compId": 22 }, { "type": "Sprite", "props": { "y": 300, "x": 95, "width": 530, "visible": false, "var": "MoreGameUI", "pivotY": 0, "pivotX": 0, "mouseThrough": false, "mouseEnabled": true, "height": 680 }, "compId": 12, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 530, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "8,8,8,8", "pivotX": 0, "name": "panel", "height": 680 }, "compId": 14 }, { "type": "Image", "props": { "y": 0, "x": 103, "skin": "youziTexture/main_title.png", "name": "title" }, "compId": 15 }, { "type": "Button", "props": { "y": -11, "x": 498, "width": 42, "var": "moreGameCloseBtn", "stateNum": 1, "skin": "youziTexture/close_button.png", "labelSize": 26, "labelPadding": "-50", "height": 46 }, "compId": 16 }, { "type": "List", "props": { "y": 59, "x": 25, "width": 480, "var": "moreGameList", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 12, "spaceX": 28, "repeatY": 3, "repeatX": 3, "height": 620 }, "compId": 17, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 140, "renderType": "render", "name": "render", "height": 180 }, "compId": 18, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 140, "name": "icon", "height": 140 }, "compId": 19 }, { "type": "Label", "props": { "y": 166, "x": 70, "width": 140, "valign": "middle", "text": "弹弹欢乐球", "name": "namelab", "height": 30, "fontSize": 26, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 20 }] }] }] }], "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png", "youziTexture/vscroll.png"], "loadList3D": [] };
        youzi.Youzi_MoreGameUI = Youzi_MoreGameUI;
        REG("ui.youzi.Youzi_MoreGameUI", Youzi_MoreGameUI);
        class Youzi_MoreGameHUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_MoreGameHUI.uiView);
            }
        }
        Youzi_MoreGameHUI.uiView = { "type": "View", "props": { "width": 1280, "visible": false, "name": "YouziMoreGameH", "height": 720 }, "compId": 2, "child": [{ "type": "Button", "props": { "width": 1900, "stateNum": 1, "skin": "youziTexture/blank.png", "pivotX": 0, "name": "moreGameMaskBtn", "mouseEnabled": true, "height": 1000, "centerY": 0, "centerX": 0, "cacheAs": "none" }, "compId": 4 }, { "type": "Sprite", "props": { "y": 60, "x": 376, "width": 528, "visible": false, "var": "MoreGameUI", "pivotY": 0, "pivotX": 0, "mouseThrough": false, "mouseEnabled": true, "height": 600, "drawCallOptimize": true }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 528, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "8,8,8,8", "pivotX": 0, "name": "panel", "height": 600, "cacheAs": "none" }, "compId": 5 }, { "type": "Image", "props": { "y": 0, "x": 113, "skin": "youziTexture/main_title.png", "name": "title" }, "compId": 6 }, { "type": "Button", "props": { "y": -8, "x": 497, "var": "moreGameCloseBtn", "stateNum": 1, "skin": "youziTexture/close_button.png", "labelSize": 26, "labelPadding": "-50", "cacheAs": "none" }, "compId": 7 }, { "type": "List", "props": { "y": 70, "x": 31, "width": 466, "var": "moreGameList", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 10, "spaceX": 45, "repeatY": 3, "repeatX": 3, "height": 530 }, "compId": 8, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 120, "renderType": "render", "name": "render", "height": 153 }, "compId": 9, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 120, "name": "icon", "height": 120 }, "compId": 10 }, { "type": "Label", "props": { "y": 142, "x": 60, "width": 120, "valign": "middle", "text": "弹弹欢乐球", "overflow": "hidden", "name": "namelab", "height": 22, "fontSize": 22, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 11 }] }] }] }], "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png", "youziTexture/vscroll.png"], "loadList3D": [] };
        youzi.Youzi_MoreGameHUI = Youzi_MoreGameHUI;
        REG("ui.youzi.Youzi_MoreGameHUI", Youzi_MoreGameHUI);
        class Youzi_OffLineUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_OffLineUI.uiView);
            }
        }
        Youzi_OffLineUI.uiView = { "type": "View", "props": { "width": 720, "name": "YouziOffLineView", "height": 1280 }, "compId": 2, "child": [{ "type": "Button", "props": { "width": 1000, "stateNum": 1, "skin": "youziTexture/blank.png", "name": "OffLineMask", "mouseEnabled": true, "height": 1900, "centerY": 0, "centerX": 0, "cacheAs": "normal" }, "compId": 4 }, { "type": "Sprite", "props": { "y": 506, "x": 40, "width": 640, "visible": false, "var": "OffLineUI", "mouseEnabled": true, "height": 268 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 56, "width": 528, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "9,9,9,9", "name": "OffLineBg", "height": 268 }, "compId": 5 }, { "type": "Image", "props": { "y": 25, "x": 265, "width": 110, "skin": "youziTexture/txt_guesslike_h.png", "name": "offlineTitle", "height": 30 }, "compId": 12 }, { "type": "Button", "props": { "y": -21.5, "x": 552, "width": 42, "var": "OffLineCloseButton", "stateNum": 1, "skin": "youziTexture/close_button.png", "height": 46 }, "compId": 11 }, { "type": "List", "props": { "y": 72, "x": 85, "width": 470, "var": "OffLineList", "spaceX": 25, "repeatY": 1, "height": 180 }, "compId": 6, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 140, "renderType": "render", "name": "render", "height": 180 }, "compId": 7, "child": [{ "type": "Image", "props": { "x": 0, "width": 140, "name": "icon", "height": 140 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": -14, "x": 126, "visible": false, "skin": "youziTexture/redhit.png", "name": "redhit", "cacheAs": "bitmap" }, "compId": 9 }] }, { "type": "Label", "props": { "y": 150, "width": 140, "valign": "middle", "text": "弹弹欢乐球", "overflow": "hidden", "name": "namelab", "height": 30, "fontSize": 24, "color": "#ffffff", "align": "center" }, "compId": 10 }] }] }] }], "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_OffLineUI = Youzi_OffLineUI;
        REG("ui.youzi.Youzi_OffLineUI", Youzi_OffLineUI);
        class Youzi_OffLineHUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_OffLineHUI.uiView);
            }
        }
        Youzi_OffLineHUI.uiView = { "type": "View", "props": { "width": 1280, "name": "YouziOffLineHView", "height": 720 }, "compId": 2, "child": [{ "type": "Button", "props": { "width": 1900, "stateNum": 1, "skin": "youziTexture/blank.png", "name": "OffLineMask", "mouseThrough": false, "height": 1000, "centerY": 0, "centerX": 0, "cacheAs": "bitmap" }, "compId": 4 }, { "type": "Sprite", "props": { "y": 180, "x": 320, "width": 640, "visible": false, "var": "OffLineUI", "mouseThrough": true, "mouseEnabled": true, "height": 360, "drawCallOptimize": true }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 640, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "8,8,8,8", "name": "OffLineBg", "height": 360 }, "compId": 5 }, { "type": "Image", "props": { "y": 37, "x": 255, "width": 130, "skin": "youziTexture/txt_guesslike_h.png", "name": "title", "height": 32 }, "compId": 6 }, { "type": "Button", "props": { "y": -9, "x": 609, "var": "OffLineCloseButton", "stateNum": 1, "skin": "youziTexture/close_button.png" }, "compId": 7 }, { "type": "List", "props": { "y": 101, "x": 0, "width": 640, "var": "OffLineList", "repeatY": 1, "height": 210 }, "compId": 8, "child": [{ "type": "Box", "props": { "y": 15, "x": 25, "width": 180, "renderType": "render", "name": "render", "height": 180 }, "compId": 9, "child": [{ "type": "Image", "props": { "y": 0, "x": 15, "width": 150, "name": "icon", "height": 150 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": -14, "x": 136, "visible": false, "skin": "youziTexture/redhit.png", "name": "redhit", "cacheAs": "bitmap" }, "compId": 11 }] }, { "type": "Label", "props": { "y": 160, "width": 180, "text": "弹弹欢乐球", "name": "namelab", "height": 30, "fontSize": 30, "color": "#ffffff", "align": "center" }, "compId": 12 }] }] }] }], "loadList": ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_OffLineHUI = Youzi_OffLineHUI;
        REG("ui.youzi.Youzi_OffLineHUI", Youzi_OffLineHUI);
        class Youzi_ScreenPageUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_ScreenPageUI.uiView);
            }
        }
        Youzi_ScreenPageUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "loadList": [], "loadList3D": [] };
        youzi.Youzi_ScreenPageUI = Youzi_ScreenPageUI;
        REG("ui.youzi.Youzi_ScreenPageUI", Youzi_ScreenPageUI);
        class Youzi_SlideWindowUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_SlideWindowUI.uiView);
            }
        }
        Youzi_SlideWindowUI.uiView = { "type": "View", "props": { "width": 536, "visible": false, "name": "YouziSlideView", "height": 604 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 536, "visible": false, "var": "SlideWindowUI", "mouseEnabled": true, "height": 604 }, "compId": 14, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 536, "var": "slideBg", "height": 604 }, "compId": 26, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 497, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "9,9,9,9", "name": "slideBgLeft", "height": 604 }, "compId": 16 }, { "type": "Image", "props": { "y": 220, "x": 495, "width": 42, "skin": "youziTexture/slide_bg_mid.png", "sizeGrid": "0,40,0,4", "name": "slideBtn", "mouseEnabled": false, "height": 164 }, "compId": 18 }, { "type": "Button", "props": { "y": 258, "x": 494, "width": 44, "var": "btnSLideClose", "stateNum": 1, "height": 83 }, "compId": 24 }] }, { "type": "List", "props": { "y": 11, "x": 34, "width": 463, "var": "slideList", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 5, "spaceX": 26, "repeatY": 3, "repeatX": 3, "height": 593 }, "compId": 19, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 130, "renderType": "render", "name": "render", "height": 180 }, "compId": 20, "child": [{ "type": "Image", "props": { "y": 12, "x": 0, "width": 130, "name": "icon", "height": 130 }, "compId": 21, "child": [{ "type": "Image", "props": { "y": -14, "x": 116, "visible": false, "skin": "youziTexture/redhit.png", "name": "markImg", "cacheAs": "bitmap" }, "compId": 22 }] }, { "type": "Label", "props": { "y": 164, "x": 65, "width": 130, "valign": "middle", "text": "弹弹欢乐球", "name": "namelab", "height": 26, "fontSize": 26, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 23 }] }] }] }], "loadList": ["youziTexture/full_round_corner.png", "youziTexture/slide_bg_mid.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_SlideWindowUI = Youzi_SlideWindowUI;
        REG("ui.youzi.Youzi_SlideWindowUI", Youzi_SlideWindowUI);
        class Youzi_SlideWindowHUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_SlideWindowHUI.uiView);
            }
        }
        Youzi_SlideWindowHUI.uiView = { "type": "View", "props": { "width": 600, "visible": false, "name": "YouziSlideWindowViewH", "height": 614 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 600, "visible": false, "var": "SlideWindowUI", "height": 614, "drawCallOptimize": true }, "compId": 3, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 600, "var": "slideBg", "height": 614 }, "compId": 13, "child": [{ "type": "Image", "props": { "y": 225, "x": 566, "width": 33, "skin": "youziTexture/slide_bg_mid.png", "sizeGrid": "0,40,0,4", "name": "slideBgMiddle", "height": 164 }, "compId": 5 }, { "type": "Image", "props": { "y": 0, "x": -71, "width": 640, "skin": "youziTexture/full_round_corner.png", "sizeGrid": "10,10,10,10", "name": "zhezhao", "height": 614 }, "compId": 6 }, { "type": "Button", "props": { "y": 265, "x": 569, "width": 31, "var": "btnSLideClose", "stateNum": 1, "height": 80 }, "compId": 12 }] }, { "type": "List", "props": { "y": 0, "x": 67, "width": 485, "var": "slideList", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 1, "spaceX": 40, "repeatY": 3, "repeatX": 3, "height": 614 }, "compId": 7, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 130, "renderType": "render", "name": "render", "height": 190 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": 20, "x": 0, "width": 130, "name": "icon", "height": 130 }, "compId": 9, "child": [{ "type": "Image", "props": { "y": -14, "x": 116, "skin": "youziTexture/redhit.png", "name": "markImg", "cacheAs": "none" }, "compId": 10 }] }, { "type": "Label", "props": { "y": 177, "x": 65, "width": 130, "valign": "bottom", "text": "弹弹欢乐球", "overflow": "hidden", "name": "namelab", "height": 24, "fontSize": 22, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 11 }] }] }] }], "loadList": ["youziTexture/slide_bg_mid.png", "youziTexture/full_round_corner.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_SlideWindowHUI = Youzi_SlideWindowHUI;
        REG("ui.youzi.Youzi_SlideWindowHUI", Youzi_SlideWindowHUI);
        class Youzi_SmallWallUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_SmallWallUI.uiView);
            }
        }
        Youzi_SmallWallUI.uiView = { "type": "View", "props": { "width": 600, "visible": false, "name": "YouziSmallWallView", "height": 414 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 600, "visible": false, "var": "SmallWallUI", "pivotY": 0, "pivotX": 0, "mouseThrough": false, "mouseEnabled": true, "height": 414 }, "compId": 4, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "youziTexture/bg_small_wall.png", "sizeGrid": "38,42,38,42", "pivotX": 0, "name": "panel", "height": 414 }, "compId": 5 }, { "type": "Image", "props": { "y": 7, "x": 110, "skin": "youziTexture/txt_small_wall.png", "name": "title" }, "compId": 6 }, { "type": "List", "props": { "y": 56, "x": 17, "width": 568, "var": "smallWallList", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 10, "spaceX": 25, "repeatY": 1, "repeatX": 4, "height": 350 }, "compId": 8, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 120, "renderType": "render", "name": "render", "height": 172 }, "compId": 9, "child": [{ "type": "Image", "props": { "y": 12, "x": 0, "width": 120, "name": "icon", "height": 120 }, "compId": 10, "child": [{ "type": "Image", "props": { "y": -12, "x": 104, "visible": false, "skin": "youziTexture/redhit.png", "name": "redhit" }, "compId": 12 }] }, { "type": "Label", "props": { "y": 152, "x": 60, "width": 120, "valign": "middle", "text": "弹弹欢乐球", "overflow": "hidden", "name": "namelab", "height": 30, "fontSize": 22, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 11 }] }] }] }], "loadList": ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_SmallWallUI = Youzi_SmallWallUI;
        REG("ui.youzi.Youzi_SmallWallUI", Youzi_SmallWallUI);
        class Youzi_SmallWallHUI extends Laya.View {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.createView(Youzi_SmallWallHUI.uiView);
            }
        }
        Youzi_SmallWallHUI.uiView = { "type": "View", "props": { "width": 750, "name": "YouziSmallWallViewH", "height": 414 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 750, "visible": false, "var": "SmallWallUIH", "pivotY": 0, "pivotX": 0, "mouseThrough": false, "mouseEnabled": true, "height": 414 }, "compId": 3, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "youziTexture/bg_small_wall.png", "sizeGrid": "38,42,38,42", "pivotX": 0, "name": "panel", "height": 414 }, "compId": 4 }, { "type": "Image", "props": { "y": 9, "x": 177.5, "skin": "youziTexture/txt_small_wall.png", "name": "title" }, "compId": 5 }, { "type": "List", "props": { "y": 56, "x": 17, "width": 720, "var": "smallWallListH", "vScrollBarSkin": "youziTexture/vscroll.png", "spaceY": 10, "spaceX": 25, "repeatY": 1, "repeatX": 5, "height": 350 }, "compId": 6, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 120, "renderType": "render", "name": "render", "height": 172 }, "compId": 7, "child": [{ "type": "Image", "props": { "y": 12, "x": 0, "width": 120, "name": "icon", "height": 120 }, "compId": 8, "child": [{ "type": "Image", "props": { "y": -12, "x": 104, "visible": false, "skin": "youziTexture/redhit.png", "name": "redhit" }, "compId": 9 }] }, { "type": "Label", "props": { "y": 152, "x": 60, "width": 120, "valign": "middle", "text": "弹弹欢乐球", "overflow": "hidden", "name": "namelab", "height": 30, "fontSize": 22, "color": "#ffffff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" }, "compId": 10 }] }] }] }], "loadList": ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/vscroll.png", "youziTexture/redhit.png"], "loadList3D": [] };
        youzi.Youzi_SmallWallHUI = Youzi_SmallWallHUI;
        REG("ui.youzi.Youzi_SmallWallHUI", Youzi_SmallWallHUI);
    })(youzi = ui.youzi || (ui.youzi = {}));
})(ui || (ui = {}));
