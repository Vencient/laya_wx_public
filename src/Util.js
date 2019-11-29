import { WeiXin } from "./SDK/WeiXin";
import { Model2D } from "./Model2D/Model";
export var Util;
(function (Util) {
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
        let t = v3(0, 0, 0);
        Laya.Vector3.subtract(v1, v2, t);
        return t;
    }
    Util.subv3 = subv3;
    function random(min, max) {
        return min + Math.random() * (max - min);
    }
    Util.random = random;
    function add_childs(node, childs) {
        for (let c of childs) {
            node.addChild(c);
        }
    }
    Util.add_childs = add_childs;
    function deactive_children(node) {
        for (let i = 0; i < node.numChildren; i++) {
            let c = node.getChildAt(i);
            deactive_node(c);
        }
    }
    Util.deactive_children = deactive_children;
    function get_angle(xx, yy) {
        var obl = Math.sqrt(Math.pow(xx, 2) + Math.pow(yy, 2));
        if (obl == 0)
            return 0;
        var rad = yy < 0 ? Math.acos(xx / obl) : (Math.PI * 2 - Math.acos(xx / obl));
        return rad * 180 / Math.PI;
    }
    Util.get_angle = get_angle;
    function get_average_v3(v3_arr) {
        let x = 0, y = 0, z = 0;
        let size = v3_arr.length;
        for (let i = 0; i < size; i++) {
            x += v3_arr[i].x;
            y += v3_arr[i].y;
            z += v3_arr[i].z;
        }
        return v3(x / size, y / size, z / size);
    }
    Util.get_average_v3 = get_average_v3;
    class EventDispatcher {
        constructor() {
            this.nodeList = [];
        }
        sendMessage(func, ...args) {
            for (let i = 0; i < this.nodeList.length; i++) {
                const scriptNode = this.nodeList[i];
                if (scriptNode[func] && !scriptNode.destroyed) {
                    scriptNode[func](...args);
                }
            }
        }
        ;
        remove(scriptNode) {
            Laya.timer.callLater(null, () => {
                for (let i = 0; i < this.nodeList.length; i++) {
                    if (this.nodeList[i] === scriptNode) {
                        this.nodeList.splice(i, 1);
                        break;
                    }
                }
            });
        }
        ;
        register(scriptNode) {
            this.nodeList.push(scriptNode);
        }
        ;
    }
    Util.event_dispatcher = new EventDispatcher();
    function find(node, name) {
        let ns = name.split('/');
        let nd = null;
        for (let n of ns) {
            if (!nd)
                nd = node.getChildByName(n);
            else
                nd = nd.getChildByName(n);
        }
        // return node.getChildByName(name);
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
    // export function play_sound(url){
    //     Laya.timer.callLater(null,()=>Laya.SoundManager.playSound(url,1));
    // }
    function is_weixin() {
        return typeof wx != "undefined";
    }
    Util.is_weixin = is_weixin;
    function is_qg() {
        return typeof qg != "undefined";
    }
    Util.is_qg = is_qg;
    function get_children(node) {
        let length = node.numChildren;
        let children = [];
        for (let i = 0; i < length; i++) {
            let c = node.getChildAt(i);
            children.push(c);
        }
        return children;
    }
    Util.get_children = get_children;
    function play_sound(url, volume = 1) {
        if (!is_weixin()) {
            Laya.SoundManager.playSound(url, 1);
        }
        else {
            var sound = Laya.Pool.getItem(url);
            if (sound == null) {
                sound = WeiXin.createInnerAudioContext();
                sound.src = url;
                sound.play();
                sound.volume = volume;
                sound.onEnded(() => {
                    Laya.Pool.recover(url, sound);
                });
            }
            else {
                sound.volume = volume;
                sound.play();
            }
        }
    }
    Util.play_sound = play_sound;
    let _bgm_sound = null;
    function play_music(url, volume = 1) {
        if (!is_weixin()) {
            Laya.SoundManager.playMusic(url, 0);
        }
        else {
            if (_bgm_sound) {
                _bgm_sound.stop();
                _bgm_sound.destroy();
            }
            _bgm_sound = WeiXin.createInnerAudioContext();
            _bgm_sound.onError((res) => {
                Util.event_dispatcher.sendMessage("on_debug_message", "音频出错" + res.errMsg + res.errCode);
            });
            _bgm_sound.src = url;
            _bgm_sound.play();
            _bgm_sound.volume = volume;
            _bgm_sound.loop = true;
            _bgm_sound.autoplay = true;
        }
    }
    Util.play_music = play_music;
    function stop_music() {
        if (!is_weixin()) {
            Laya.SoundManager.stopMusic();
        }
        else {
            _bgm_sound.stop();
        }
    }
    Util.stop_music = stop_music;
    function play_sound_for_weixin(arr) {
        for (let m of arr) {
            // Util.play_sound(m,0);
        }
    }
    Util.play_sound_for_weixin = play_sound_for_weixin;
    function convert_number_to_string(points, precise = 2) {
        if (points < Math.pow(10, 3))
            return points + '';
        else if (points < Math.pow(10, 6))
            return (points / Math.pow(10, 3)).toFixed(precise) + 'K';
        else if (points < Math.pow(10, 9))
            return (points / Math.pow(10, 6)).toFixed(precise) + 'M';
        else if (points < Math.pow(10, 12))
            return (points / Math.pow(10, 9)).toFixed(precise) + 'B';
        else if (points < Math.pow(10, 15))
            return (points / Math.pow(10, 12)).toFixed(precise) + 'T';
        else if (points < Math.pow(10, 18))
            return (points / Math.pow(10, 15)).toFixed(precise) + 'aa';
        else if (points < Math.pow(10, 21))
            return (points / Math.pow(10, 18)).toFixed(precise) + 'ab';
        else if (points < Math.pow(10, 24))
            return (points / Math.pow(10, 21)).toFixed(precise) + 'ac';
        else if (points < Math.pow(10, 27))
            return (points / Math.pow(10, 24)).toFixed(precise) + 'ad';
        else if (points < Math.pow(10, 30))
            return (points / Math.pow(10, 27)).toFixed(precise) + 'ae';
        else if (points < Math.pow(10, 33))
            return (points / Math.pow(10, 30)).toFixed(precise) + 'bb';
    }
    Util.convert_number_to_string = convert_number_to_string;
    function http_get(url, cb, timeout = 10000) {
        const xhr = new XMLHttpRequest();
        let time = false;
        const timer = setTimeout(function () {
            time = true;
            this.httpCount--;
            xhr.abort();
            cb(0, null);
        }, timeout);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (time)
                    return;
                clearTimeout(timer);
                if ((xhr.status === 200 || xhr.status === 304) && xhr.responseText.length > 0) {
                    cb(200, xhr.responseText);
                }
                else {
                    cb(0, null);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }
    Util.http_get = http_get;
    function get_random_from_array(a) {
        if (a.length < 0)
            return null;
        let id = Math.floor(Math.random() * a.length);
        return a[id];
    }
    Util.get_random_from_array = get_random_from_array;
    function show_Tip(node, msg) {
        let sp = Model2D.instantiate_sprite_with_anchor('spear_io_public/ui_public_bg_blue.jpg', 0.5, 0.5, v2(578, 126));
        sp.alpha = 0.8;
        let txt = Model2D.instantiate_txt_with_anchor(msg, 45, v2(578, 126), 0.5, 0.5, "#FFFFFF");
        node.addChild(sp);
        Model2D.addchild_at_center(sp, txt);
        Laya.Tween.to(sp, { y: -150 }, 1000);
        Laya.timer.frameOnce(60, null, () => { sp.removeSelf(), txt.removeSelf(), sp.destroy(), txt.destroy(); });
    }
    Util.show_Tip = show_Tip;
    function show_video(layer, btn, Variable) {
        // get_bonus_time++;
        share_app(layer, Variable.share_data.cloud_share_msg, "", Variable.share_data.share_enabled, btn);
        if (!is_qg() && !is_weixin()) {
            layer.getVideoBonus();
        }
        return;
        // if(!btn.active) return;
        // btn.active = false;
        // let video = sdk_manager.instantiateRewardedVideo(
        //     layer.AdUnitId,()=>{
        //         Util.show_Tip(layer.getNode(),'成功领取奖励')
        //         layer.getVideoBonus.bind(layer)();
        //         btn.active = true;
        //     },
        //     (errMsg)=>{
        //         // show_Tip(layer.getNode(),"视频拉取失败,error message : "+ errMsg);
        //         btn.active = true;
        //         share_app(layer,Variable.share_data.cloud_share_msg,"",Variable.share_data.share_enabled,btn);
        //     },
        //     ()=>{
        //         show_Tip(layer.getNode(),"看完视频才能领取奖励哦!");
        //         btn.active = true;
        //     }
        // );
        // if(!is_qg()&&!is_weixin()){
        //     layer.getVideoBonus();
        //     btn.active = true;
        // }
    }
    Util.show_video = show_video;
    // let get_bonus_time = 0;
    function share_app(layer, cloud_share_msg, city = "", is_share_enabled, btn) {
        if (!btn.active)
            return;
        btn.active = false;
        if (!is_share_enabled) {
            show_Tip(layer.getNode(), "今日视频已经看完");
            return;
        }
        cloud_share_msg.title = cloud_share_msg.title.replace("${city}", city);
        WeiXin.shareAppMessage(cloud_share_msg);
        WeiXin._shared_timestamp = Date.now();
        let success_callback = () => {
            if (WeiXin.getShareSuccessStatus()) {
                // layer.getVideoBonus();
                Util.show_Tip(layer.getNode(), '成功领取奖励');
                Laya.timer.once(600, layer, layer.getVideoBonus);
                Laya.timer.once(600, null, () => btn.active = true);
            }
            else {
                btn.active = true;
                WeiXin.showModal({
                    title: '提示',
                    confirmText: '重新分享',
                    cancelText: '取消',
                    content: '该群已分享过，请换个群',
                    success: (res) => {
                        if (res.confirm) {
                            share_app(layer, cloud_share_msg, city, is_share_enabled, btn);
                        }
                        else if (res.cancel) {
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
        if (((is_new_player && get_bonus_time < new_player_shared_time) || get_bonus_time < old_player_share_time) && share_enabled && is_in_white_list) {
            active_node(btn_share);
            deactive_node(btn_video);
        }
        else {
            active_node(btn_video);
            deactive_node(btn_share);
        }
    }
    Util.switch_video_and_share_btn = switch_video_and_share_btn;
    function set_color_filter_color(f, r, g, b) {
        // f._mat[0]=r;
        // f._mat[5]=g;
        // f._mat[10]=b;
    }
    Util.set_color_filter_color = set_color_filter_color;
    function get_color_filter_color(f) {
        // return v3(f._mat[0],f._mat[5],f._mat[10]);
        return v3(0, 0, 0);
    }
    Util.get_color_filter_color = get_color_filter_color;
    function set_sprite_color(sp, color) {
        var color_mat = [
            color.x, 0, 0, 0, 0,
            0, color.y, 0, 0, 0,
            0, 0, color.z, 0, 0,
            0, 0, 0, 1, 0,
        ];
        var filter = new Laya.ColorFilter(color_mat);
        sp.filters = [filter];
        return filter;
    }
    Util.set_sprite_color = set_sprite_color;
    function generate_grid_pos(coloum, row, width, height) {
        let pos = [];
        for (let i = 0; i < row * coloum; i++) {
            let sp_icon = new Laya.Sprite();
            let rid = Math.floor(i / coloum);
            let cid = i % coloum;
            pos.push(v2((cid - (coloum - 1) / 2) * (width), (rid - (row - 1) / 2) * (height)));
        }
        return pos;
    }
    Util.generate_grid_pos = generate_grid_pos;
    function generate_bezier_curve(start_pos, mid_pos, end_pos, size) {
        // let p = start_pos;
        let arr = [];
        for (let i = 0; i <= size; i++) {
            let x1 = start_pos.x + (mid_pos.x - start_pos.x) * i / size;
            let y1 = start_pos.y + (mid_pos.y - start_pos.y) * i / size;
            let x2 = mid_pos.x + (end_pos.x - mid_pos.x) * i / size;
            let y2 = mid_pos.y + (end_pos.y - mid_pos.y) * i / size;
            let x = x1 + (x2 - x1) * i / size;
            let y = y1 + (y2 - y1) * i / size;
            arr.push(v2(x, y));
        }
        return average_bezier_curve(arr);
        // return arr;
    }
    Util.generate_bezier_curve = generate_bezier_curve;
    function average_bezier_curve(points) {
        let lines = new Array();
        function calc_line_length(lines) {
            let line_s = 0; //线段总长度
            for (let l of lines) {
                let p1 = l.p1;
                let p2 = l.p2;
                line_s += Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
            }
            ;
            return line_s;
        }
        function get_point_in_line_by_length(length, line) {
            let p1 = line.p1;
            let p2 = line.p2;
            let s = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
            let per = length / s;
            return Util.v2(line.p1.x + (line.p2.x - line.p1.x) * per, line.p1.y + (line.p2.y - line.p1.y) * per);
        }
        for (let i = 0; i < points.length - 1; i++) {
            let p1 = points[i];
            let p2 = points[i + 1];
            lines.push({
                p1: p1,
                p2: p2,
            });
        }
        const average_line_length = calc_line_length(lines) / lines.length;
        let averaged_points = [points[0]];
        while (lines.length > 1) {
            let line_s = calc_line_length([lines[0]]);
            let p = null;
            if (line_s <= average_line_length) {
                let sum_length = 0;
                let index_for_trim = 0;
                for (let n of lines) {
                    sum_length += calc_line_length([n]);
                    if (sum_length < average_line_length) {
                        index_for_trim++;
                    }
                    else {
                        break;
                    }
                }
                sum_length = calc_line_length(lines.splice(0, index_for_trim));
                p = get_point_in_line_by_length(average_line_length - sum_length, lines[0]);
                lines[0].p1.setValue(p.x, p.y);
                averaged_points.push(p);
            }
            else {
                p = get_point_in_line_by_length(average_line_length, lines[0]);
                lines[0].p1.setValue(p.x, p.y);
                averaged_points.push(p);
            }
        }
        return averaged_points;
    }
    Util.average_bezier_curve = average_bezier_curve;
    function show_effect_coin_add(coins, music, world_pos_x, world_pos_y) {
        for (let i = 0; i < coins.numChildren; i++) {
            let coin = coins.getChildAt(i);
            Util.active_node(coin);
            let coin_x = coin.x;
            let coin_y = coin.y;
            let point = coin.globalToLocal(new Laya.Point(world_pos_x, world_pos_y));
            // = coin.globalToLocal(new Laya.Point(519+146,150+13));
            Laya.Tween.to(coin, { x: point.x, y: point.y }, 450, null, Laya.Handler.create(null, () => {
                coin.x = coin_x;
                coin.y = coin_y;
                Util.deactive_node(coin);
                Util.play_sound(music);
            }), (800 * i) / coins.numChildren, true);
        }
    }
    Util.show_effect_coin_add = show_effect_coin_add;
})(Util || (Util = {}));
