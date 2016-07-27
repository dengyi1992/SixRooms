var console = window.console || {
        log: function () {
        }
    };
if (page.fid && page.fid == page.gameId) {
    Pres["144"].u = 0;
    page.notPet = 1
}
window.F_toLogin = function () {
    Login.toLogin()
};
__KEY.addEvents({
    "4848": function () {
        Room.setGift.hid()
    }, "4949": function () {
        if (Room.getScore) {
            Room.getScore.setOpen()
        }
    }, "5050": function () {
        Vphone.set_open()
    }, "5252": function () {
        Room.GTest()
    }, "5353": function () {
        try {
            swfobject.getObjectById("gift_super").debugFun()
        } catch (a) {
        }
    }, "5454": function () {
        Room.Socket.createWatch()
    }, "5555": function () {
        Debug.viewer()
    }, "5757": function () {
        Room.Socket.getHistory()
    }
});
var Notes = {
    getNotes: function (b) {
        var a = jQuery.extend(a, this.n);
        if (b > 0) {
            a = jQuery.extend(a, this.n1);
            if (b > 2) {
                a = jQuery.extend(a, this.n2);
                if (b > 4) {
                    a = jQuery.extend(a, this.n3)
                }
            }
        }
        return a
    },
    n: {
        7009: {ord: 30, u: 0, id: 7009, pric: 100, name: "凤姐", cls: "noteFengJie"},
        7006: {ord: 31, u: 1, id: 7006, pric: 100, name: "老公", cls: "noteLaoGong"},
        7007: {ord: 32, u: 1, id: 7007, pric: 100, name: "老婆", cls: "noteLaoPo"},
        7002: {ord: 35, u: 1, id: 7002, pric: 100, name: "李公公", cls: "noteLiGongGong"},
        7010: {ord: 36, u: 1, id: 7010, pric: 100, name: "色狼", cls: "noteSeLang"},
        7011: {ord: 37, u: 1, id: 7011, pric: 100, name: "女神", cls: "noteNvShen"},
        7020: {ord: 1, u: 1, id: 7020, pric: 100, name: "高帅富", cls: "noteGaoFuShuai"},
        7021: {ord: 2, u: 1, id: 7021, pric: 100, name: "白富美", cls: "noteBaiFuMei"},
        7022: {ord: 3, u: 1, id: 7022, pric: 100, name: "穷矮丑", cls: "noteQiongAiChou"},
        7023: {ord: 4, u: 1, id: 7023, pric: 100, name: "屌丝", cls: "noteDiaoSi"},
        7024: {ord: 5, u: 1, id: 7024, pric: 100, name: "贰货", cls: "noteErHuo"},
        7025: {ord: 6, u: 1, id: 7025, pric: 100, name: "基友", cls: "noteJiYou"},
        7026: {ord: 7, u: 0, id: 7026, pric: 100, name: "腐女", cls: "noteFuNv"},
        7030: {ord: 8, u: 1, id: 7030, pric: 100, name: "女汉子", cls: "noteHanZi"},
        7028: {ord: 9, u: 1, id: 7028, pric: 100, name: "土豪", cls: "noteTuHao"},
        7029: {ord: 10, u: 1, id: 7029, pric: 100, name: "熊孩子", cls: "noteXiongHaiZi"}
    },
    n1: {
        7012: {ord: 100, u: 1, id: 7012, pric: 100, name: "旺财", cls: "noteWangCai"},
        7013: {ord: 101, u: 1, id: 7013, pric: 100, name: "小强", cls: "noteXiaoQiang"}
    },
    n2: {
        7014: {ord: 150, u: 1, id: 7014, pric: 100, name: "悲催", cls: "noteBeiCui"},
        7015: {ord: 151, u: 1, id: 7015, pric: 100, name: "蛋疼", cls: "noteDanTeng"}
    },
    n3: {
        7016: {ord: 200, u: 1, id: 7016, pric: 100, name: "坑爹", cls: "noteKengDie"},
        7017: {ord: 201, u: 1, id: 7017, pric: 100, name: "心肝", cls: "noteXinGan"},
        7018: {ord: 202, u: 1, id: 7018, pric: 100, name: "死鬼", cls: "noteSiGui"},
        7019: {ord: 203, u: 1, id: 7019, pric: 100, name: "小P孩", cls: "noteXiaoPiHai"}
    }
};
Notes.ns = Notes.getNotes(10);
var onErr = {
    parseErr: function (b) {
        var a = this.err[b.flag];
        if (a) {
            this[a](b.content)
        }
    },
    err: {
        "101": "onKickout",
        "102": "onFull",
        "103": "onRepay",
        "104": "onPwd",
        "201": "onFast",
        "202": "onDeSay",
        "203": "onUserErr",
        "204": "onClosed",
        "205": "onNotUser",
        "206": "onNotPower",
        "301": "onSysErr",
        "305": "onNotRank",
        "105": "onShortage",
        "302": "onAuthKeyErr",
        "306": "onReLogin",
        "304": "onNotAllow",
        "208": "onSayFast",
        "402": "onParsErr",
        "401": "onParsErr",
        "403": "onSay",
        "109": "onKilled",
        "110": "onRemove",
        "111": "onUnallow",
        "213": "onbad",
        "112": "kill_30",
        "113": "php_kill"
    },
    onbad: function () {
        _puser.encpass = "7Ibv4%7CnL9Z3TNztoKw";
        jQuery.removeCookie("_coin6");
        Room.Socket.disconnect();
        Room.Socket.login()
    },
    room_stop: function () {
        if (page.isMic) {
            jQuery("player_area").remove()
        } else {
            try {
                swfobject.removeSWF("videoPlayer");
                jQuery("videoPlayer").remove()
            } catch (a) {
            }
        }
        try {
            Room.Socket.disconnect()
        } catch (a) {
        }
    },
    onKickout: function () {
        this.onDel("您已经被踢出本房间！")
    },
    onUnallow: function (a) {
        this.onDel("您已经被禁止进入本房间！")
    },
    kill_30: function () {
        this.onDel("您已被派出考察，暂时不能返回本房间")
    },
    onRemove: function () {
        this.onDel("您在解决争议期间暂时不能进入本房间！")
    },
    onKilled: function (a) {
        this.onDel("您已经被禁止进入本房间！")
    },
    php_kill: function (a) {
        this.onDel(a)
    },
    onDel: function (a) {
        this.room_stop();
        Prompt.create({
            opacity: 0.9,
            btn_sure: {text: "回到首页", link: "/", target: "_self"},
            content: a,
            delay: 1000 * 5,
            callback: function () {
                location.replace("/")
            }
        })
    },
    onReLogin: function () {
        this.room_stop();
        Prompt.create({
            btn_sure: 1, content: "帐号信息不完整,请重新登录!", delay: 1000 * 5, callback: function () {
                location.replace("http://6.cn/logout.php?from_act=live&url=http://v.6.cn/ulogin.php")
            }
        })
    },
    onSay: function (a) {
        calert(a)
    },
    onNotRank: function (a) {
        Room.Socket.disconnect();
        Prompt.create({
            btn_sure: 1, content: a, delay: 1000 * 10, callback: function () {
                location.replace("/")
            }
        })
    },
    onNotPower: function (a) {
        Prompt.alert(a)
    },
    onParsErr: function (a) {
        Prompt.alert(a)
    },
    onAuthKeyErr: function () {
        var a = _puser.encpass || "";
        Room.Msg.send("priv_info", {encpass: a})
    },
    onNotAllow: function () {
        calert("对方不允许私聊！")
    },
    onSayFast: function (a) {
        calert(a)
    },
    onRemoveMask: function (a) {
        if (a) {
            return
        }
        location.href = location.href.replace(/#.*$/, "")
    },
    onFull: function () {
        this.room_stop();
        Prompt.create({
            opacity: 0.9,
            btn_cancel: {text: "稍后再说", link: "/", target: "_self"},
            btn_sure: {text: "立即购买", link: "/user/shopprop.php?pxuid=&pgpid=0", target: "_self"},
            content: "本房间人数已满，您需要购买 VIP 或 随意进 才可以进入。"
        })
    },
    onRepay: function (b) {
        if (window.__pay__) {
            return
        }
        window.__pay__ = 1;
        this.room_stop();
        var a = function (c) {
            if (jQuery.type(c) != "object") {
                return alert("网络错误！")
            }
            switch (c.flag) {
                case"001":
                    alert("支付成功");
                    location.href = "/" + page.rid;
                    break;
                case"105":
                    alert("您的余额不足");
                    location.replace("/user/payshow.php?i=1");
                    break;
                case"108":
                case"107":
                    alert("直播活动已变更，请重新操作！");
                    location.href = "/" + page.rid;
                    break;
                case"203":
                    alert("请先登录");
                    location.replace("/logins.php");
                    break
            }
        };
        Prompt.create({
            opacity: 0.9,
            btn_cancel: {text: "返回大厅", link: "/", target: "_self"},
            btn_sure: {text: "支付六币购买门票"},
            content: '<strong>本房间是收费房间</strong><p>需要花费<em style="color:red">' + b + '</em>六币 购买门票才能进入房间。</p><p style="text-align:right">注：门票等同于礼物消费</p>',
            onSubmit: function () {
                if (confirm("门票价格 " + b + "六币 确定支付嘛？")) {
                    jQuery.ajax({
                        dataType: "json",
                        url: "/room/action/validate.php",
                        data: {r: page.rid, m: b},
                        success: a
                    })
                }
                return 0
            }
        })
    },
    onPwd: function () {
        this.room_stop();
        var a = function (b) {
            if (jQuery.type(b) != "object") {
                return alert("网络错误！")
            }
            switch (b.flag) {
                case"001":
                    location.href = location.href;
                    break;
                case"106":
                    alert("密码错误！");
                    break;
                case"108":
                    alert("直播活动已变更，请重新操作！");
                    break;
                case"107":
                    alert("直播活动已变更，请重新操作！");
                    this.onRepay(b.content);
                    break;
                case"203":
                    Prompt.close(0);
                    Login.toLogin();
                    break
            }
        };
        Prompt.create({
            opacity: 0.9,
            btn_cancel: {text: "取消", link: "/", target: "_self"},
            btn_sure: {text: "确定"},
            content: '<strong>本房间已经加密，请输入密码。</strong><p>密码：<input type="password" name="prive_pwd" /></p>',
            onSubmit: function () {
                var b = Prompt.box.find('input[name="prive_pwd"]').val();
                jQuery.ajax({
                    dataType: "json",
                    url: "/room/action/validate.php",
                    data: {r: page.rid, passwd: b},
                    success: a
                });
                return 0
            }
        })
    },
    onFast: function () {
        calert("发言过快！")
    },
    onDeSay: function () {
        if (Room.chatList) {
            Room.chatList.deSend()
        }
    },
    onUserErr: function () {
        Login.toLogin()
    },
    onClosed: function () {
        this.room_stop();
        Prompt.create({
            opacity: 0.9,
            btn_sure: {text: "确定", link: "/", target: "_self"},
            content: "房间已经被关闭！",
            delay: 1000 * 5,
            callback: function () {
                location.replace("/")
            }
        })
    },
    onNotUser: function () {
        Room.Socket.reLogin(205)
    },
    onSysErr: function () {
        alert("403 - PHP程序异常！")
    },
    onShortage: function () {
        Prompt.create({
            content: "您的六币余额不足，是否现在充值？",
            btn_sure: {text: "马上充值", link: "/user/payshow.php?i=2", target: "_blank"},
            btn_cancel: {text: "稍后充值"}
        })
    }
};
var Room = {
    chat_tab: "all_chat",
    prop_lib: [],
    Config: {},
    micer: {uid: page.puid, alias: page.masterName},
    user: {},
    test_rid: function (a) {
        return !((a >= 30000000 && a < 60000000) || (a >= 200000000 && a < 900000000))
    },
    live_state_change: jQuery.noop,
    title_change: jQuery.noop,
    notice_change: jQuery.noop,
    Call: function () {
        var b = jQuery.makeArray(arguments), d = b.shift().split("."), a = d.shift();
        var e = this[a] || window[a];
        if (e) {
            var f = d.shift();
            for (var c = 0; c < d.length; c++) {
                e = e[f];
                f = d[c]
            }
            if (f) {
                e[f].apply(e, b)
            } else {
                e.apply(e, b)
            }
        }
    },
    listUsers: {},
    micUsers: {},
    reBtn: "",
    m: {
        isGiftIcons: 1,
        isRankHappy: 1,
        isLottery: 1,
        isFansList: 1,
        isFly: 1,
        isMagic: 1,
        isWeiBo: 1,
        isGame: 1,
        isGiftShow: 1,
        superGiftHidden: 0,
        isMySite: 1,
        isRadioRoll: 1,
        isWatchUser: 1,
        isWatchVoteTopAll: 1,
        isWatchVideo: 1,
        isEgg: 1,
        isSong: 1,
        isShape: 1,
        isGiftNotice: 1,
        isArmyShow: 1,
        isSuperFireworksEffect: 1,
        isRankGod: 1
    },
    isInit: 0,
    init: function (a) {
        jQuery.extend(this.m, page.pars);
        jQuery.extend(this.m, jQuery.type(a) == "object" ? a : {});
        this.userMenu.create();
        this.Socket.init()
    },
    userMenu: {
        html: '<div class="userWrap">		<h6></h6>			<b class="underline"></b>			<p class="icon"><b class="underline"></b></p>			<p class="main_2">			<a href="" class="number_off">封号</a>			<a href="" class="ip_off_2">封IP</a>			<a href="" class="menu_s resolve">解决争议</a>			<b class="underline"></b>			</p>			<p class="oTeQuan">			<span class="more-list super-rich" t="t1"><i class="arrows"></i>超富特权				<em class="more">				<a href="" class="oJinyan">特权禁言</a>				<a href="" class="oJinyan_r">特权恢复发言</a>				<a href="" class="oTiren">特权踢人</a>				<a href="" class="chuanyue">穿越</a>				</em>			</span>			<b class="underline"></b>			</p>			<p class="main_1">			<a href="" class="kick">踢出1小时</a>			<a href="" class="say_off">禁言15分钟</a>			<a href="" class="say_on">恢复发言</a>			<span class="more-list user-oper" t="t2"><i class="arrows"></i>人员管理				<em class="more">				<a href="" class="set_power">提拔为管理</a>				<a href="" class="del_power">撤销管理</a>				<a href="" class="set_power_z">提拔为总管</a>				<a href="" class="del_power_z">撤销总管</a>				</em>			</span>			<a href="" class="ip_off">封IP1小时</a>			<b class="underline"></b>			</p>			<p class="base">			<a href="" class="sendGift" data-tracing="iqg9rucn">赠送礼物</a>			<a href="" class="add_f" data-tracing="iqg9ruco">加好友</a>			<a href="" class="del_note">揭掉贴条</a>			<a href="" class="menu_s add_note" data-tracing="iqg9rucp"><i class="arrows"></i>贴条</a>			<a href="" class="say_pub" data-tracing="iqg9rucq">公开说</a>			<a href="" class="say_pri" data-tracing="iqg9rucr">悄悄说<span class="to-chat-pri" title="打开私聊窗口"></span></a>			<a href="" class="say_pri_del" data-tracing="iqg9rucs">拉黑</a>			<b class="underline"></b>			<a href="" class="userinfo" data-tracing="iqg9ruct">个人资料</a>			</p>			</div>			',
        create: function () {
            var b = this;
            this.sug = jQuery("<div>", {
                "class": "user-manager",
                style: "visibility:hidden; top:-10000px",
                html: this.html
            }).bind("mouseover", function () {
                clearTimeout(b.t)
            }).bind("mouseout", function () {
                b.iHidden()
            }).appendTo(document.body);
            this.times = {t1: 0, t2: 0};
            this.sug.find(".super-rich, .user-oper").bind("mouseenter mouseleave", function (h) {
                var g = jQuery(this), c = g.attr("t");
                clearTimeout(Room.userMenu.times[c]);
                var f, d;
                if (h.type == "mouseenter") {
                    f = "block";
                    d = 500
                } else {
                    f = "none";
                    d = 200
                }
                Room.userMenu.times[c] = setTimeout(function () {
                    g.find(".more").css("display", f)
                }, d)
            });
            this.icons = this.sug.find("p.icon:eq(0)");
            this.username = this.sug.find("h6");
            this.sug.find("span.to-chat-pri").click(function (c) {
                c.stopPropagation();
                b.iHidden("y");
                ChatPrivateWin.open({uid: b.uid, alias: b.alias});
                return false
            });
            this.sug.on("click", "a", function (c) {
                var d = jQuery(this);
                if (!d.hasClass("is_link")) {
                    c.preventDefault()
                }
                if (!d.hasClass("menu_s")) {
                    b.iHidden()
                }
                var e = d.prop("class").replace(/^.+\s+/, "");
                if (!pageMessage.userCheck && !jQuery.inArray(e, ["into_room", "userinfo"])) {
                    Login.toLogin();
                    return
                }
                switch (e) {
                    case"sendGift":
                        Room.present.setTou({uid: b.uid, alias: b.alias, rid: b.rid});
                        setTimeout(function () {
                            Room.present.set_gift(d)
                        }, 50);
                        break;
                    case"add_f":
                        IM.add.apply_friend(b.uid);
                        break;
                    case"add_follow":
                        Room.follow(b.uid);
                        break;
                    case"say_pub":
                        Room.chatList.setCurUser({uid: b.uid, alias: b.alias, rid: b.rid});
                        break;
                    case"say_pri":
                        Room.chatList.setCurUser({uid: b.uid, alias: b.alias, rid: b.rid, pri: 1});
                        break;
                    case"into_room":
                        c.target.href = "/" + b.rid;
                        return true;
                        break;
                    case"del_note":
                        Room.stickNote.deStick();
                        break;
                    case"stone":
                        Stone.start({uid: b.uid, alias: b.alias});
                        break;
                    case"oJinyan":
                        Room.userPower.set("j");
                        break;
                    case"oJinyan_r":
                        Room.userPower.set("rj");
                        break;
                    case"oTiren":
                        Room.userPower.set("t");
                        break;
                    case"chuanyue":
                        Room.userPower.chuanyue();
                        break;
                    case"kick":
                        Room.HostPower.forbid("t");
                        break;
                    case"say_off":
                        Room.HostPower.forbid("j");
                        break;
                    case"say_on":
                        Room.HostPower.forbid("c");
                        break;
                    case"set_power":
                        Room.HostPower.setManager(1);
                        break;
                    case"del_power":
                        Room.HostPower.setManager(0);
                        break;
                    case"set_power_z":
                        Prompt.confirm("总管具有提拔/撤销普通房管的权限，任期为1个月。<br/>您确定要提拨 " + Room.userMenu.alias + " 为总管吗？", function (f) {
                            if (f) {
                                Room.HostPower.setManager_z(1)
                            }
                        });
                        break;
                    case"del_power_z":
                        Room.HostPower.setManager_z(0);
                        break;
                    case"ip_off":
                        Room.HostPower.mdelIp();
                        break;
                    case"resolve":
                        Room.resolve(d);
                        break;
                    case"move":
                        Room.HostPower.moveUser(d.attr("rid"));
                        break;
                    case"number_off":
                        Room.HostPower.killUser("no");
                        break;
                    case"ip_off_2":
                        Room.HostPower.mdelIp();
                        break;
                    case"say_pri_del":
                        if (!confirm("确定要拉入黑名单吗？")) {
                            return
                        }
                        Room.Msg.send("room_addbaduser", {t: Room.userMenu.uid});
                        break;
                    case"userinfo":
                        UserCard_win.getCard(Room.userMenu.uid);
                        break
                }
            });
            var a = this.sug.find("a.sendGift").eq(0);
            this.oTeQuan = this.sug.find("p.oTeQuan");
            this.oJinyanBtn = this.sug.find("a.oJinyan");
            this.oJinyanrBtn = this.sug.find("a.oJinyan_r");
            this.oTirenBtn = this.sug.find("a.oTiren");
            this.oChuanyue = this.sug.find("a.chuanyue")
        },
        no_badges: [7570, 7569, 7122, 7839, 7946, 7827, 7828, 7829],
        t: 0,
        visible: function (d, a) {
            clearTimeout(this.t);
            Room.userList.isOver2 = 1;
            try {
                if (this.par) {
                    this.par.removeClass("on")
                }
                d.addClass("on")
            } catch (g) {
            }
            this.par = jQuery(d);
            if (!a) {
                a = Room.listUsers[d.id]
            }
            if (jQuery.inArray(Room.user.role / 1, [10, 8, 9, 3]) > -1) {
                if (Room.user.role == 10) {
                    if (jQuery.inArray(a.role / 1, [10, 9, 3]) > -1) {
                        this.sug.find(".main_1 .more-list").css("display", "none")
                    } else {
                        this.sug.find(".main_1 .more-list").css("display", "block");
                        if (a.role == 7) {
                            c = ".del_power";
                            _selector_h = ".set_power, .del_bo"
                        } else {
                            c = ".set_power";
                            _selector_h = ".del_power"
                        }
                        this.sug.find(c).css("display", "block");
                        this.sug.find(_selector_h).css("display", "none")
                    }
                } else {
                    if ("893".indexOf(Room.user.role) > -1) {
                        if (jQuery.inArray(a.role / 1, [9, 3]) > -1) {
                            this.sug.find(".main_1 .more-list").css("display", "none")
                        } else {
                            this.sug.find(".main_1 .more-list").css("display", "block");
                            var c, b;
                            switch (a.role / 1) {
                                case 5:
                                    c = ".set_power_z";
                                    _selector_h = ".del_power, .del_power_z,.set_power";
                                    break;
                                case 7:
                                    c = ".del_power,  .set_power_z";
                                    _selector_h = ".set_power, .del_power_z";
                                    break;
                                case 10:
                                    c = ".del_power_z";
                                    _selector_h = ".set_power, .del_power, .set_power_z";
                                    break;
                                default:
                                    c = ".set_power, .set_power_z";
                                    _selector_h = ".del_power, .del_power_z"
                            }
                            this.sug.find(c).css("display", "block");
                            this.sug.find(_selector_h).css("display", "none")
                        }
                    }
                }
            }
            if (a.isNote && a.uid == _puser.uid) {
                this.note.add_note.css("display", "none");
                this.note.del_note.css("display", "block")
            } else {
                this.note.add_note.css("display", "block");
                this.note.del_note.css("display", "none")
            }
            this.set_pos();
            this.sug.css("visibility", "visible");
            this.vis = 1;
            this.username.html(a.alias + "：");
            this.uid = a.uid;
            this.rid = a.rid;
            this.alias = a.alias;
            this.dj = a.dj;
            var f = this;
            a.ico = a.ico || [];
            a.ico = jQuery.grep(a.ico, function (e) {
                return jQuery.inArray(e / 1, f.no_badges) < 0
            });
            if (a.ico && a.ico.length > 0) {
                this.icons.addClass("iconVis");
                this.icons.html('<i class="badge_' + a.ico.join('"></i><i class="badge_') + '"></i><b class="underline"></b>')
            } else {
                this.icons.removeClass("iconVis");
                this.icons.empty()
            }
            jQuery(document.body).bind("click", this.dev)
        },
        iHidden: function (a) {
            clearTimeout(this.t);
            if (a == "y") {
                this.hid()
            } else {
                this.t = setTimeout(this.hid, 200)
            }
        },
        hid_fn: {},
        add_hid_fn: function (a) {
            jQuery.extend(this.hid_fn, a)
        },
        on_hid: function () {
            for (var b in this.hid_fn) {
                try {
                    this.hid_fn[b]()
                } catch (a) {
                    console.log(b)
                }
            }
        },
        hid: function () {
            var a = Room.userMenu;
            try {
                a.par.removeClass("on")
            } catch (b) {
            }
            Room.userList.isOver2 = 0;
            Room.chatList.rollChange(1);
            a.par = null;
            a.sug.css({visibility: "hidden", top: -9999});
            a.sug.find("ul.ul_list").css("top", -99999);
            Room.magic.hid();
            a.vis = 0;
            jQuery(document.body).unbind("click", a.dev);
            a.on_hid()
        },
        dev: function (b) {
            if (!b) {
                return
            }
            var a = jQuery(b.target), c = Room.userMenu;
            while (!a.is("body")) {
                if (a[0] == c.sug[0] || (c.par && a[0] == c.par[0])) {
                    return
                }
                a = a.parent()
            }
            c.iHidden("y")
        },
        set_pos: function () {
            var g = this.par.offset(), d, f;
            if (!this.par.is("li")) {
                d = g.left + this.par.width();
                if ((d + 200 + 30) > jQuery(document.body).width()) {
                    d = g.left - 200
                }
            } else {
                d = g.left - 200
            }
            var f = g.top, c = jQuery(document.body).height(), a = jQuery(document.body).scrollTop(), b = this.sug.height() + 45, e = this.sug.width();
            if (f + b > c + a) {
                if (c > b) {
                    f = c + a - b
                } else {
                    f = a
                }
            }
            if (g.left - e < 5) {
                d = g.left + this.par.width()
            }
            this.sug.css({top: f, left: d})
        }
    },
    resolve: function (e) {
        var c = Room.userMenu;
        if (!c.resolve) {
            c.resolve = jQuery("<ul>", {"class": "ul_list"}).appendTo(c.sug);
            var f = [{n: "一", r: 34948913}, {n: "二", r: 34948924}, {n: "三", r: 34948932}, {
                n: "四",
                r: 34948942
            }, {n: "五", r: 34948944}], b = [];
            for (var d = 0; d < f.length; d++) {
                b.push('<a href="" class="move" rid="' + f[d].r + '">争议房间' + f[d].n + "</a>")
            }
            c.resolve.html("<li>" + b.join("</li><li>") + "</li>")
        }
        if (c.resolve.css("visibility") == "hidden") {
            var a = jQuery(e).position();
            c.resolve.css({top: a.top + 21, left: a.left + 15});
            c.resolve.css("visibility", "visible")
        } else {
            c.resolve.css("visibility", "hidden")
        }
    },
    noteInit: function () {
        var a = this.userMenu;
        a.note = {};
        a.note.del_note = a.sug.find("a.del_note");
        a.note.add_note = a.sug.find("a.add_note");
        a.note.box = jQuery("<ul>", {"class": "ul_list"}).appendTo(a.note.add_note);
        jQuery.extend(a.note, {
            _nt: 0, _st: 0, note_vis: function () {
                var e = this, i = Room.userMenu.note, h = i.box;
                clearTimeout(i._nt);
                clearTimeout(i._st);
                i._st = setTimeout(function () {
                    i.setPos(e, h)
                }, 500)
            }, note_hide: function (e) {
                var h = Room.userMenu.note, e = h.box;
                clearTimeout(h._nt);
                clearTimeout(h._st);
                h._nt = setTimeout(function () {
                    e.css("top", -99999)
                }, 200)
            }, setPos: function (i, k) {
                var e = Room.userMenu.sug.offset().top;
                var j = jQuery(i).offset().top;
                var n = k.height() + 45;
                var l = jQuery(document.body).height();
                var h = jQuery(document.body).scrollTop();
                var m = j - e;
                clearTimeout(this._nt);
                if ((l + h) - j < n) {
                    if (l > n) {
                        m = (l + h - n) - e
                    } else {
                        m = h - e
                    }
                }
                k.css({top: m, left: 175})
            }
        });
        a.note.add_note.bind("mouseover", a.note.note_vis).bind("mouseout", a.note.note_hide);
        a.note.box.bind("mouseover", a.note.note_vis).bind("mouseout", a.note.note_hide);
        var c = [], g = Notes.getNotes(Room.user.fstar);
        for (var f in g) {
            c.push(g[f])
        }
        c.sort(function (h, e) {
            return h.ord - e.ord
        });
        for (var b = 0; b < c.length; b++) {
            var d = c[b];
            if (d.u) {
                jQuery("<li>", {
                    id: d.id, "class": d.cls, html: '<a href="">' + d.name + "</a>", click: function () {
                        Room.stickNote.stick(this.id)
                    }, mouseenter: function (e) {
                        wsug(e, "价值：100个六币")
                    }, mouseleave: function () {
                        try {
                            wsug("", 0)
                        } catch (h) {
                        }
                    }
                }).appendTo(a.note.box)
            }
        }
    },
    Ruser: {
        parse: function (g) {
            if (g.status == "001") {
                page.authKey = g.authKey;
                var a = g.priv.split("|");
                var f = {"7116": 1, "7117": 2, "7118": 3, "7119": 4, "7120": 5};
                var e = a[6].split("-"), d = 0;
                for (var c = 0; c < e.length; c++) {
                    d = f[e[c]];
                    if (d) {
                        break
                    }
                }
                var b = a[6].match(/(7570|7569)/);
                b = (b ? b[1] : 0) || Number(a[0]) == 9;
                Room.user = {
                    role: Number(a[0]),
                    rank: Number(a[1]),
                    status: Number(a[2]),
                    fuid: a[3],
                    note: a[4],
                    shou: a[5],
                    prop: a[6],
                    rich: a[7],
                    product: a[8],
                    tickt: a[9],
                    idcard: a[10],
                    fstar: d,
                    safe: b,
                    master: _puser.uid == page.rid,
                    army: a[13],
                    coin6: g.userInfo.userRoomInfo.coin6all
                };
                if (g.userInfo) {
                    Room.user404 = g.userInfo;
                    Room.freeGifts = g.userInfo.proplist;
                    Room.privChat.init(g.userInfo.userRoomInfo.prive);
                    Room.giftpk = g.userInfo.eventDefend;
                    Fav.init(g.userInfo.isFav);
                    Mediator.publish("account-update", g.userInfo)
                }
                Room.Ready.load()
            } else {
                onErr.parseErr(g)
            }
        }
    },
    follow: function (a) {
        jQuery.ajax({
            dataType: "json", data: {tuid: a}, url: "/message/follow_add.php", success: function (b) {
                if (b.flag == "001") {
                    Prompt.alert("关注成功")
                } else {
                    if (b.flag == "203") {
                        Login.toLogin()
                    } else {
                        alert(b.content)
                    }
                }
            }
        })
    }
};
Room.Ready = {
    login_list: [], init_list: [], is_init: 0, set_login: function (a) {
        if (Room.user.role) {
            a()
        }
        this.login_add(a)
    }, login_add: function (a) {
        this.login_list.push(a)
    }, set_init: function (a) {
        if (Room.user.role) {
            a()
        } else {
            this.init_add(a)
        }
    }, init_add: function (a) {
        this.init_list.push(a)
    }, load: function () {
        var a = Room.Ready;
        jQuery.each(a.login_list, function () {
            try {
                this()
            } catch (b) {
                console.log(b.message + "\n" + this)
            }
        });
        if (!a.is_init) {
            window.tt = 0;
            a.is_init = 1;
            jQuery.each(a.init_list, function () {
                try {
                    this()
                } catch (b) {
                    console.log(b.message + "\n" + this)
                }
            })
        }
        delete a.init_list
    }
};
Room.Socket = {
    IP: {
        ips: page.socketip, init: 0, mark: function () {
            return
        }, get_mark: function () {
            return 0
        }, ipc: 0, getIp: function () {
            if (!this.init) {
                this.ipc = this.get_mark();
                this.init = 1
            }
            this.ipc = (this.ipc > 7) ? 1 : (++this.ipc);
            var a = [];
            if (this.ipc < 6) {
                a = this.ips.a
            } else {
                a = this.ips.b.length > 0 ? this.ips.b : this.ips.a
            }
            a = a[Number.random(0, a.length - 1)].split(":");
            return {ip: a[0], port: a[1]}
        }
    }, proxy: 0, getCount: 0, watch: 0, isBreak: 0, lwt: {t: 0, tim: 0}, createWatch: function () {
        if (this.watchBox) {
            return this.removeWatch()
        }
        this.watchBox = jQuery("<div>", {
            "class": "roomDebugBox", title: "已停止，移出后继续！", mouseover: function () {
                Room.Socket.watch = 0
            }, mouseout: function () {
                Room.Socket.watch = 1
            }
        }).appendTo(document.body);
        this.watch = 1
    }, removeWatch: function () {
        this.watchBox.remove();
        delete this.watchBox;
        this.watch = 0
    }, viewWatch: function (a) {
        if (!this.watch) {
            return
        }
        this.watchBox.html(a + this.watchBox.html())
    }, loginWait: function (a) {
        this.lwt.tim = 0;
        clearInterval(this.lwt.t);
        if (a == "n") {
            return
        }
        this.lwt.t = setInterval(function () {
            var b = Room.Socket;
            b.viewWatch("<br/>logining= " + (++b.lwt.tim) + " 秒");
            if (b.lwt.tim > 10) {
                b.reLogin()
            }
        }, 1000)
    }, parback: {
        t: 0, onSuccess: function () {
            var a = _puser.encpass || "";
            Room.Msg.send("priv_info", {encpass: a});
            Room.Socket.parback.t = setTimeout(Room.Socket.parback.onSuccess, 30 * 1000);
            Room.Socket.privInfo_t = setTimeout(function () {
                new Image().src = "http://sclick.6rooms.com/w.html?act=26&tm=20&st=1"
            }, 1500)
        }, onFailure: function () {
            alert("网络繁忙，建议您刷新当前页面！");
            location.replace(location.href)
        }
    }, isw: 0, write_swf: function (a) {
        if (this.isw) {
            return
        }
        this.isw = 1;
        jQuery('<div id="gProxy" style="position:absolute; left:-1000px; top:-1000px"><div id="room_proxy"></div></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/chatProxy/chatSocket.swf?r=" + (a || ""), "room_proxy", 1, 1, "10.0")
    }, getSwfCount: 0, init: function (b) {
        var a = Room.Socket;
        if (isAndroid || isIpad || isIphone) {
            $LAB.script(JSF.websocket).wait(function () {
                a.proxy = new Socket;
                a._h5 = 1;
                a.login()
            })
        } else {
            a.write_swf();
            a.proxy = a.getProxy();
            if (a.proxy && a.proxy.login) {
                a.login()
            } else {
                if (a.getSwfCount > 10) {
                    a.isw = 0;
                    a.write_swf((new Date()).getTime());
                    a.getSwfCount = 1;
                    (new Image).src = "http://sclick.6rooms.com/w.html?uleve=22"
                }
                a.getSwfCount++;
                setTimeout(a.init, 500);
                return
            }
        }
        jQuery.extend(a.parback, b || {})
    }, getProxy: function () {
        return swfobject.getObjectById("room_proxy") || 0
    }, tongji: function (a) {
        clearTimeout(this.tongji_t);
        var b = (new Date).getTime() - this._loginTime;
        (new Image).src = "http://sclick.6rooms.com/w.html?act=24&uid=" + _puser.uid + "&tm=" + b + "&st=" + a + "&ip=" + encodeURIComponent(this.curIp.ip + ":" + this.curIp.port)
    }, setIp: function (b) {
        if (b) {
            var a = b.split(":");
            this._IP = {ip: a[0], port: a[1]}
        } else {
            this._IP = null
        }
        this.reLogin()
    }, history: [], getHistory: function () {
        var a = [];
        jQuery.each(this.history, function (b, c) {
            a.push(b + " - " + c.ip + ":" + c.port)
        });
        Prompt.alert(a.join("<br/>"), 10000)
    }, ipBack: function (a) {
        if (Room.Socket._h5) {
            Room.Socket.IP.ips = {a: a.websock, b: a.websock}
        } else {
            Room.Socket.IP.ips = a
        }
        Room.Socket.is_ip = 1;
        Room.Socket.login()
    }, _loginTime: 0, tongji_t: 0, login: function (e) {
        if (!this.is_ip) {
            jQuery.ajax({
                dataType: "json", url: "/room/getChat.php?rid=" + page.rid, success: function (g) {
                    Room.Socket.ipBack(g)
                }, error: function () {
                    jQuery.getJSON("/room/getIpList.php?rid=" + page.rid, function (g) {
                        Room.Socket.ipBack(g)
                    })
                }
            })
        } else {
            if (this._IP) {
                this.curIp = this._IP
            } else {
                this.curIp = this.IP.getIp()
            }
            var b = this.curIp.ip, a = this.curIp.port;
            this.loginWait(1);
            var c = 0;
            if (_puser.uid) {
                c = _puser.uid
            } else {
                c = _puser.guest_id
            }
            this.history.push(this.curIp);
            if (!this.isTongJi) {
                var d = this;
                d.isTongJi = 1;
                d._loginTime = (new Date).getTime();
                this.tongji_t = setTimeout(function () {
                    d.tongji(-1)
                }, 15000)
            }
            var f = _puser.encpass || "";
            this.viewWatch('<span style="display:block; color:blue; padding:10px 5px 0 5px">proxy.login(' + this.curIp.ip + "," + this.curIp.port + "," + c + "," + f + "," + page.rid + ", 'proxyCallBackRoom')</span>");
            this.proxy.login(b, a, c, f, page.rid, "proxyCallBackRoom", 7 * 1000);
            if (jQuery.type(e) == "number") {
                (new Image).src = "http://sclick.6rooms.com/w.html?act=27&uid=" + _puser.uid + "&type=" + e + "&ip=" + encodeURIComponent(this.curIp.ip + ":" + this.curIp.port)
            }
        }
    }, reLogin: function (a) {
        this.loginWait("n");
        this.disconnect();
        this.isBreak = 0;
        this.login(a)
    }, tryLogin: function (a) {
        if (this.isBreak) {
            this.isClosed = 1;
            return
        }
        if (this.getCount == 100) {
            this.isBreak = 1;
            this.disconnect();
            this.parback.onFailure()
        } else {
            this.getCount++;
            setTimeout(jQuery.proxy(this.login, this, a), 2000)
        }
    }, sendMessage: function (a) {
        if (this.isBreak) {
            return
        }
        this.viewWatch('<span style="display:block; color:blue; padding:10px 5px 0 5px">send: ' + a + "</span>");
        this.proxy.sendMessage(a)
    }, pMessage: function (a) {
        try {
            var c = jQuery.parseJSON(a);
            Room.Msg.get(c);
            c = null
        } catch (b) {
            this.viewWatch("ERR：<textarea>" + a + "</textarea>");
            this.viewWatch('<span style="color:red">' + b.message + "</span>");
            return
        }
    }, callback: function (b, a) {
        if (this.watch) {
            this.viewWatch('<span style="display:block; color:green; padding:10px 5px 0 5px"><strong>t:' + (new Date()).getTime() + "</strong> command: " + b + "<br />content: " + decodeURIComponent(a) + "</span>")
        }
        switch (b) {
            case"result":
                if (!this.isTongJiOk) {
                    this.tongji(1);
                    this.isTongJiOk = 1
                }
                switch (a) {
                    case"login.success":
                        this.loginWait("n");
                        this.getCount = 0;
                        this.IP.mark();
                        this.parback.onSuccess();
                        break;
                    case"login.failed":
                        this.tryLogin(208);
                        break;
                    case"":
                        break
                }
                break;
            case"receivemessage":
                this.pMessage(a);
                break;
            case"network.error":
                this.tryLogin(206);
                break;
            case"SecurityError":
                (new Image).src = "http://sclick.6rooms.com/w.html?act=27&uid=" + _user.uid + "&ip=" + this.curIp.ip + ":" + this.curIp.port;
                this.tryLogin(207);
                break
        }
    }, disconnect: function () {
        this.isBreak = 1;
        this.proxy.disconnect();
        this.viewWatch("this.proxy.disconnect()")
    }
};
var proxyCallBackRoom = jQuery.proxy(Room.Socket.callback, Room.Socket);
Room.GTest = function () {
    if (!Room.present) {
        return
    }
    var a = jQuery(Room.present.preSubmit);
    if (a.hasClass("mtest")) {
        a.removeClass("mtest");
        a.html("赠送");
        jQuery("#zj_test").remove()
    } else {
        a.addClass("mtest");
        a.html("测试");
        var c = [], e = {};
        for (var d in Pres) {
            if (Pres[d].z) {
                var b = Pres[d].desc || Pres[d].title;
                c.push('<a href="#" zid="' + Pres[d].id + '">' + b.replace(/<.+?>/g, "") + "</a>")
            }
            if (Pres[d].s) {
                e[d] = 1000
            }
        }
        Room.freeGifts = e;
        Room.present.preBox.parseFreeGift();
        Room.present.preBox.tab_change(10);
        jQuery('<div class="roomDebugBox" id="zj_test" style=" width:95%; height:70px; line-height:20px; top:5px">').html("<strong>专属座驾：</strong>" + c.join(" - ")).appendTo(document.body).on("click", "a", function () {
            Room.GiftSuper.toSwf({
                id: jQuery(this).attr("zid"),
                num: 1,
                rid: _puser.rid || 666666,
                alias: _puser.nickname || "guest"
            });
            return false
        })
    }
};
Room.Msg = {
    get: function (c) {
        if (c.flag == "001") {
            page.initTime = c.time;
            if (!Room.isInit && c.content.typeID != "404" && c.content.typeID != "408" && c.content.typeID != "123") {
                return
            }
            var b = c.content.typeID, a = this._getback[b];
            if (a) {
                a(c.content)
            }
            c = null
        } else {
            onErr.parseErr(c)
        }
    }, send: function (a, d) {
        var b = '{"t":"' + a + '", "content":' + jQuery.toJSON(d) + "}";
        Room.Socket.sendMessage(b);
        if (page.tpl == "v2013") {
            User_life.activate(a)
        }
    }, _getback: {
        701: function (c) {
            var b = c.content.t, a = Room.Msg._callback[b];
            if (a) {
                a(c.content)
            }
            Mediator.publish("room.callback", c.content)
        }, 161: function (a) {
            if (a.to == _puser.uid) {
                Prompt.create({
                    btn_sure: 1,
                    width: 700,
                    content: '<p style="font-size:14px;color:red" class="p161">' + a.content + "</p>"
                })
            }
        }, 1053: function (a) {
            var b = [];
            jQuery.each(a.content, function () {
                b.push('<a href="' + this.url + '" target="_blank">' + this.alias + "</a>")
            });
            Prompt.create({
                btn_sure: {text: "确定", href: ""},
                content: "<p>您已经在其它房间的麦上，请先下麦然后再尝试在本房间直播</p>" + b.join("<br/>")
            })
        }, 1002: function (a) {
            Prompt.create({btn_sure: {text: "确定"}, content: a.content})
        }, 201001: function (a) {
            if (!_puser.uid) {
                return
            }
            pageMessage.user._6b = a.content.coin6;
            pageMessage.user._6d = a.content.wealth
        }, 408: function (a) {
            clearTimeout(Room.Socket.parback.t);
            var b = Room.Msg._getback;
            b["404"](a.content["404"]);
            if (b["403"]) {
                b["403"](a.content.list)
            }
        }, 404: function (b) {
            Room.Ruser.parse(b.content);
            if (Room.is_game_tmp) {
                return
            }
            Room.is_game_tmp = 1;
            var a = 0;
            if (page.rid / 1 == 20341804) {
                a = 2
            } else {
                if (page.rid / 1 == 37791039) {
                    a = 1
                }
            }
            if (a) {
                Room.Msg.set_callback({
                    msg_gamerunmsg: function (d) {
                        if (d.flag == "001" && d.content) {
                            var e = [];
                            for (var c = 0; c < d.content.length; c++) {
                                e.push(d.content[c])
                            }
                            Room.chatList.onlyMsg(e.join("<br/>"))
                        }
                    }
                });
                Room.Msg.send("msg_gamerunmsg", {type: a})
            }
        }, 114: function (b) {
            if (b.content.type == "egg") {
                page.isEgg = b.content.value
            } else {
                if (b.content.type == "pubchat") {
                    Room.chatList.setChatChange(b.content.value)
                } else {
                    if (b.content.type == "anonymchat") {
                        Room.chatList.anonym.start(b.content.value)
                    } else {
                        if (b.content.type == "closeMsgPic") {
                            var a = jQuery("#uploadeImage");
                            if (b.content.value) {
                                a.hide()
                            } else {
                                a.show()
                            }
                        }
                    }
                }
            }
        }, 1423: function (a) {
            page.privateGifts = a.content;
            Room.present.giftReinit();
            Room_tools.prvgift.callback(a)
        }, 416: function (a) {
            jQuery.ajax({
                dataType: "json", url: "/room/getRoomMsgSys.php", data: {t: a.content}, success: function (b) {
                    jQuery.each(b.content, function () {
                        var c = Room.Msg._getback[this.typeID];
                        if (c) {
                            c(this)
                        }
                    });
                    b = null
                }
            });
            a = null
        }, 1413: function (a) {
            jQuery.each(a.content, function () {
                var b = Room.Msg._getback[this.typeID];
                if (b) {
                    b(this)
                }
            });
            a = null
        }, 102: function (a) {
            if (!Room.chatList) {
                TempViewList.parseSysMsg(a);
                return
            }
            Room.chatList.parseMsg(a);
            a = null
        }, 123: function (g) {
            var c = {
                1: '<a class="from-iphone" target="_blank" href="https://itunes.apple.com/cn/app/xiu-chang-hd/id546304751?l=cn&mt=8">(<i title="来自iPad"></i>)</a>',
                2: '<a class="from-iphone" target="_blank" href="https://itunes.apple.com/cn/app/xiu-chang/id546300644?l=cn&mt=8">(<i title="来自iPhone"></i>)</a>',
                3: '<a class="from-android" target="_blank" href="http://v.6.cn/event/liveClient/?t=phone">(<i title="来自Android"></i>)</a>'
            };
            var h = {tm: g.tm, content: g.content.msg + (c[g.content.driver] || "")};
            var b;
            if ("theater,pps,wide".indexOf(page.tpl) < 0 && g.content.pngcar) {
                b = Pres[g.content.pngcar];
                h.content += '<div class="tSeatCar"><em class="carIco seatBig_' + b.id + '"></em><span class="carInfo"><em class="seat_' + b.id + '"></em>' + b.title + '<em class="carUid">' + g.content.rid + "</em></span></div>"
            }
            if (!Room.chatList) {
                try {
                    TempViewList.parseSysMsg(h)
                } catch (f) {
                }
            } else {
                Room.chatList.parseMsg(h)
            }
            if (g.content.prop > 0) {
                var a = g.content, d = {alias: a.alias, rid: a.rid, id: a.prop};
                if (Room.GiftSuper.isInit) {
                    Room.GiftSuper.zuojia(d)
                } else {
                    Room.prop_lib.push(d)
                }
            }
        }, 124: function (a) {
            Rank_happy.msg_up(a.content)
        }, 430: function (a) {
            Rank_god.play(a.content)
        }, 431: function (a) {
            Super_fireworks_effect.play(a.content)
        }, 125: function (a) {
            Rank_msg.master_up(a.content)
        }, "116": function (a) {
            location.href = location.href.replace(/(\#|\?).*$/, "") + "?" + (new Date()).getTime()
        }, 1425: function (b) {
            var a = b.content;
            Prompt.create({
                btn_sure: {text: "同意"},
                btn_cancel: {text: "拒绝"},
                callback: function (c) {
                    Room.Msg.send("priv_agreeinvitekick", {inviterid: a.uid, tuid: a.tuid, action: c ? 1 : 0})
                },
                content: "大神您好，主播" + a.alias + "(" + a.rid + ")请您帮TA将玩家" + a.talias + "(" + a.trid + ")限制进入自己的房间，期限为7天"
            })
        }, 163: function (b) {
            if (b.type == 4) {
                var a = '<div class="debug-box" id="debug-box"><a class="close"></a><p>后台人气流量监测显示，玩家在您房间的停留时间较短，经查原因可能是由于您的视频效果较差所致，请尽快联络运营人员为您调整视频效果。</p><p class="qq">运营QQ：' + b.content + "</p></div>";
                jQuery(a).appendTo(document.body);
                Mask.create();
                jQuery("#debug-box a").click(function () {
                    jQuery("#debug-box").remove();
                    Mask.remove()
                })
            } else {
                Prompt.alert(b.content)
            }
        }
    }, set_getback: function (a) {
        jQuery.extend(this._getback, a)
    }, _callback: {
        prop_getprop: function (a) {
            Room.get_gifts_list.callback(a)
        }, priv_stopmsg: function (a) {
            Room.HostPower.callback(a)
        }, priv_recover: function (a) {
            Room.HostPower.callback(a)
        }, priv_kill: function (a) {
            Room.HostPower.callback(a)
        }, priv_closeip: function (a) {
            Room.HostPower.callback(a)
        }, priv_setadmin: function (a) {
            Room.HostPower.callback(a)
        }, priv_deladmin: function (a) {
            Room.HostPower.callback(a)
        }, priv_setroommanager: function (a) {
            Room.HostPower.callback(a)
        }, priv_delroommanager: function (a) {
            Room.HostPower.callback(a)
        }, priv_setmac: function (a) {
            Room.HostPower.callback(a)
        }, priv_delmac: function (a) {
            Room.HostPower.callback(a)
        }, prop_scripadd: function (a) {
            Room.stickNote.callback(a)
        }, prop_scripdel: function (a) {
            Room.stickNote.callback(a)
        }, room_addbaduser: function (a) {
            if (a.flag == "001") {
                alert("操作成功")
            } else {
                alert(a.content)
            }
        }, room_privatemsg: function (a) {
            Room.privChat.callback(a)
        }, priv_info: function (a) {
            clearTimeout(Room.Socket.privInfo_t)
        }, priv_closeroom: function (a) {
            if (a.flag == "001") {
                alert("操作成功！")
            } else {
                alert(a.content)
            }
        }, priv_user_rewrite: function (a) {
            if (a.flag == "001") {
                alert("操作成功！")
            } else {
                alert(a.content)
            }
        }, priv_privilege_kill: function (a) {
            Room.userPower.killBack(a)
        }, priv_priv_rewrite: function (a) {
            Room.userPower.killBack(a)
        }, priv_privilege_stopmsg: function (a) {
            Room.userPower.stopmsgBack(a)
        }, priv_privilege_recover: function (a) {
            Room.userPower.stopmsgBack(a)
        }, prop_swap: function (a) {
            Room.magic.setback(a)
        }
    }, set_callback: function (a) {
        jQuery.extend(this._callback, a)
    }
};
jQuery.extend(Room, {
    isFocus: 1, onfocus: function () {
        this.isFocus = 1
    }, onblur: function () {
        this.isFocus = 0
    }, newMsg: {
        title: 0, t: 0, aniStr: location.href.replace("http://", ""), start: function (a) {
            if (!this.title) {
                this.title = document.title
            }
            if (Room.isFocus) {
                return
            }
            document.title = this.aniStr;
            this.ani(a);
            document.documentElement.onclick = jQuery.proxy(this.stop, this);
            jQuery(window).focus()
        }, stop: function () {
            document.title = this.title;
            clearTimeout(this.t);
            document.documentElement.onclick = null
        }, ani: function (a) {
            document.title = document.title == a ? this.aniStr : a;
            clearTimeout(this.t);
            this.t = setTimeout(jQuery.proxy(this.ani, this, a), 1000)
        }
    }
});
v6.addWinFocus(function () {
    Room.onfocus()
});
v6.addWinBlur(function () {
    Room.onblur()
});
Room.Msg.set_getback({
    103: function (a) {
        Room.notice_change(a)
    }, 104: function (a) {
        Room.title_change(a)
    }, 105: function (a) {
        Room.live_state_change(a)
    }, 106: function (a) {
        location.href = a.content
    }, 115: function (a) {
        page.myVideo.url = a.content.evid;
        swfobject.embedSWF(__PLAYER.video, "videoPlayer", page.fw, page.fh, "9.0", __NOF, {
            vid: a.content.evid,
            pvid: a.content.evid,
            flag: 1,
            model: 1,
            autoplay: 1
        }, {wmode: "Opaque"});
        page.isVideo = 1
    }, 303: function (a) {
        Prompt.alert(a.content, 60 * 1000)
    }
});
var StickNote = {
    init: function (a) {
    }, stick: function (a) {
        Room.userMenu.iHidden();
        Room.Msg.send("prop_scripadd", {r: page.rid, uid: _puser.uid, tuid: Room.userMenu.uid, scrip: a})
    }, deStick: function () {
        Room.userMenu.iHidden();
        if (Room.user.fstar < 4) {
            if (!confirm("揭条需要花费100六币。是否要揭下贴条？")) {
                return
            }
        }
        Room.Msg.send("prop_scripdel", {r: page.rid, uid: _puser.uid})
    }, callback: function (a) {
        if (a.flag == "001") {
            Prompt.alert(a.content, 3000)
        } else {
            onErr.parseErr(a)
        }
    }
};
Room.Ready.set_init(function () {
    Room.isInit = 1;
    if (Room.Fvote) {
        Room.Fvote.ltime()
    }
    Room.noteInit();
    Room.stickNote = StickNote;
    if ("theater,football,pps,wide,hunger,army".indexOf(page.tpl) < 0) {
        if (page.isMic) {
            var a = jQuery("#chatBox ul:eq(0) a")
        } else {
            var a = jQuery("#watchForum_, #watchForum").find("ul:eq(0) a")
        }
        (function (c) {
            var b = [];
            c.each(function () {
                b.push(jQuery(this).attr("rel"));
                jQuery(this).bind("click", function (d) {
                    d.preventDefault();
                    var e = jQuery(this);
                    jQuery(b).css("display", "none");
                    jQuery("#" + e.attr("rel")).css("display", "block");
                    c.removeClass("on");
                    Room.chat_tab = "all_chat";
                    if (e.hasClass("only_chat")) {
                        Room.chat_tab = "only_chat";
                        (new Image).src = "http://sclick.6rooms.com/w.html?act=13"
                    }
                    e.removeClass("flash").addClass("on")
                })
            });
            b = "#" + b.join(",#")
        })(a)
    }
});
Rank_happy = {
    msg_list: [], msg_up: function (c) {
        if (!Room.m.isRankHappy) {
            return
        }
        if (!this.msg_box) {
            this.msg_box = jQuery("<div>", {id: "pubUpRich", "class": "pubUpRich"}).appendTo(document.body)
        }
        if (window.DD_belatedPNG) {
            DD_belatedPNG.fix("#pubUpRich")
        }
        if (this.fade_in) {
            this.msg_list.push(c);
            return
        }
        var b = (c.type == "wealth" ? "star" : "rich") + c.rank;
        var a = '<p class="user"><a href="/profile/index.php?rid=' + c.urid + '" target="_blank">' + c.alias + '</a><span>晋升</span><i class="' + b + '"></i></p><p class="btn"><a href="/profile/index.php?rid=' + c.urid + "&tid=" + c.msgid + '" target="_blank">立即接生</a></p>';
        this.msg_box.html(a);
        if (page.tpl == "wmp") {
            this.msg_box.css({top: "auto", bottom: 60})
        } else {
            this.msg_box.css("top", 290)
        }
        this.msg_box.css("display", "block");
        this.fade_in = 1;
        setTimeout(function () {
            Rank_happy.msg_box.css("display", "none");
            Rank_happy.fade_in = 0;
            if (Rank_happy.msg_list.length > 0) {
                Rank_happy.msg_up(Rank_happy.msg_list.shift())
            }
        }, 15 * 1000)
    }
};
Rank_god = {
    init: function () {
        this.isInit = 1;
        window.rank_ready = jQuery.proxy(this.play_ready, this);
        window.rank_close = jQuery.proxy(this.close, this);
        this.play_box = jQuery('<div class="rank_god"><div id="rankplay"></div></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/room/upgrade/upgrade.swf", "rankplay", 940, 500, "10.0", "", {}, {wmode: "transparent"});
        this.play_box.css("top", "50px")
    }, play_ready: function () {
        Rank_god.player = swfobject.getObjectById("rankplay");
        this.play(this.list.pop())
    }, list: [], play: function (a) {
        if (!Room.m.isRankGod) {
            return
        }
        if (!this.player) {
            this.list.push(a);
            if (!this.isInit) {
                this.init()
            }
        } else {
            if (this.isPlaying) {
                this.list.push(a)
            } else {
                _rank = a.rank;
                _ralias = a.ralias;
                _link = a.link;
                _alias = a.alias;
                this.isPlaying = 1;
                this.player.receiveMessage({rank: _rank, ralias: _ralias, link: _link, alias: _alias});
                this.play_box.css("top", "50px")
            }
        }
    }, close: function () {
        Rank_god.play_box.css("top", "-1000px");
        this.isPlaying = 0;
        if (this.list.length > 0) {
            this.play(this.list.pop())
        }
    }
};
var Super_fireworks_effect = {
    _list: [], _playing: 0, init: function () {
        this._init = 1;
        window.super_fireworks_ready = jQuery.proxy(this, "flash_ready");
        window.super_fireworks_close = jQuery.proxy(this, "close");
        this.box = jQuery('<div class="super-fireworks-effect"><div id="super_fireworks_player"></div></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/room/superRocket/superRocket_0.swf", "super_fireworks_player", 940, 180, "10.0", "", {}, {wmode: "transparent"})
    }, flash_ready: function () {
        this.player = swfobject.getObjectById("super_fireworks_player");
        this.next()
    }, play: function (a) {
        if (!Room.m.isSuperFireworksEffect) {
            return
        }
        if (!this._init || !this.player || this._playing) {
            this._list.push(a);
            if (!this._init) {
                this.init()
            }
            return
        }
        this._playing = 1;
        this.set_state(1);
        this.player.receiveMessage(a)
    }, next: function () {
        if (this._list.length) {
            this.play(this._list.shift())
        }
    }, set_state: function (a) {
        this.box.css(a ? {top: "50px", zIndex: 9999} : {top: "-999999px", zIndex: -1})
    }, close: function () {
        this._playing = 0;
        this.set_state(0);
        this.next()
    }
};
var Input_sug;
(function () {
    var a = jQuery;
    Input_sug = function () {
        this.initialize.apply(this, arguments)
    };
    a.extend(Input_sug.prototype, {
        items: [], input: 0, list: [], cur: null, max: 20, initialize: function (b) {
            this.callback = b.callback || function () {
                };
            this.input = a(b.input);
            this.is_order = b.order == 0 ? 0 : 1;
            this.box = a('<div class="preUserSug"><ul></ul></div>').appendTo(document.body).addClass(b._class || "");
            this.upList(b.items || []);
            this.input.bind("keydown", a.proxy(this.nextUserList, this));
            this.input.bind("click", a.proxy(function () {
                if (!this.vis) {
                    this.visible(this.input, b.posBox)
                } else {
                    this.iHidden()
                }
            }, this));
            if (b.btn && b.btn[0]) {
                b.btn.bind("click", a.proxy(function () {
                    if (!this.vis) {
                        this.visible(b.btn, b.posBox)
                    } else {
                        this.iHidden()
                    }
                }, this))
            }
        }, addItem: function (b) {
            var c = a.grep(this.items, function (d) {
                return d.uid != b.uid
            });
            c.unshift(b);
            if (c.length > this.max) {
                c.pop()
            }
            this.upList(c || [])
        }, empty: function () {
            this.items = [];
            this.box.find("ul").remove()
        }, upList: function (b) {
            if (b.length < 1) {
                return
            }
            this.items = b;
            this.box.find("ul").remove();
            var c = a("<ul>"), d = this;
            a.each(this.items, function (e, f) {
                a("<li>", {
                    html: f.alias,
                    mouseover: a.proxy(d.setOver, d, e),
                    mouseout: a.proxy(d.setOut, d, e),
                    click: a.proxy(d.setCallback, d, e)
                }).appendTo(c).attr("u", f.uid)
            });
            this.box.append(c);
            this.list = this.box.find("li")
        }, setOver: function (c) {
            var b = this.list;
            if (this.cur != null) {
                b.eq(this.cur).removeClass("on")
            }
            b.eq(c).addClass("on");
            this.cur = c
        }, setOut: function (b) {
            this.list.eq(b).removeClass("on");
            delete this.cur
        }, setCallback: function (d) {
            if (this.list.eq(d).length < 1) {
                return
            }
            var c = this.list.eq(d).attr("u"), b = this.getItem(c);
            this.callback(b);
            if (this.is_order) {
                this.addItem(b)
            }
            this.iHidden();
            return false
        }, getItem: function (c) {
            for (var b = 0; b < this.items.length; b++) {
                if (this.items[b].uid == c) {
                    return this.items[b]
                }
            }
        }, nextUserList: function (d) {
            if (this.items.length < 1) {
                return false
            }
            var c = this.list;
            if (!this.vis) {
                this.visible()
            }
            switch (d.which) {
                case 40:
                    if (this.cur == null) {
                        this.setOver(0)
                    } else {
                        var b = this.cur + 1;
                        if (!c[b]) {
                            b = 0
                        }
                        this.setOver(b)
                    }
                    break;
                case 38:
                    if (this.cur == null) {
                        this.setOver(this.items.length - 1)
                    } else {
                        var b = this.cur - 1;
                        if (!c[b]) {
                            b = this.items.length - 1
                        }
                        this.setOver(b)
                    }
                    break;
                case 13:
                    this.setCallback(this.cur);
                    break
            }
            return true
        }, visible: function (e, d) {
            this.vt = jQuery(e);
            if (this.items.length < 1) {
                return
            }
            var c = this.box, b = (d || this.input).offset();
            c.css({
                width: (d || this.input).width(),
                left: b.left,
                top: b.top - c.height(),
                opacity: 1,
                visibility: "visible"
            });
            this.vis = 1;
            if (!this.devPreSug) {
                this.devPreSug = a.proxy(this.dev, this)
            }
            a(document.body).bind("click", this.devPreSug)
        }, iHidden: function () {
            this.box.css({opacity: 0, visibility: "hidden"});
            this.vis = 0;
            delete this.vt;
            this.setOut(this.cur || 0);
            a(document.body).unbind("click", this.devPreSug)
        }, dev: function (c) {
            var b = a(c.target);
            while (!b.is("body")) {
                if (b[0] == this.input[0] || b[0] == this.vt[0]) {
                    return
                }
                b = b.parent()
            }
            this.iHidden()
        }
    })
})();
Room.userPower = {
    set: function (a) {
        var b = Room.userMenu.uid, c = {
            t: "priv_privilege_kill",
            j: "priv_privilege_stopmsg",
            rj: "priv_privilege_recover"
        };
        Room.Msg.send(c[a], {u: b, r: page.rid})
    }, killBack: function (a) {
        if (a.flag == "001") {
            alert(a.content)
        } else {
            onErr.parseErr(a)
        }
    }, stopmsgBack: function (a) {
        if (a.flag == "001") {
            alert(a.content)
        } else {
            onErr.parseErr(a)
        }
    }, chuanyue: function (a) {
        var b = this;
        Prompt.create({
            title: "穿越对象：" + Room.userMenu.alias,
            btn_cancel: {text: "取消"},
            btn_sure: {text: "确定"},
            content: '请输入目的地链接地址：<input type="" id="chuanyue_to" size="25" /><br/><p style="padding-top:12px"><input type="checkbox" id="chuangyue_set"/>不可返回（勾选后，穿越对象30分钟内将不能进入本房间）</p>',
            onSubmit: function () {
                var d = jQuery("#chuanyue_to").val();
                var c = jQuery("#chuangyue_set").prop("checked") ? 2 : 1;
                Room.Msg.send("priv_priv_rewrite", {u: Room.userMenu.uid, url: d, type: c});
                return 1
            }
        })
    }
};
Room.HostPower = {
    _isSet: 0, setPower: function () {
        var b = Room.user, a = Room.HostPower;
        if (b.rich < 21 && "124".indexOf(b.role) > -1) {
            if (a._isSet) {
                a._set_p1(0);
                a._isSet = 0
            }
            return
        }
        switch (b.role) {
            case 5:
                a._set_p1(1);
                if (a._isSet) {
                    return
                }
                if (page.isMic) {
                } else {
                    if (page.queueroom) {
                        Room.userTools = new UserTools
                    }
                }
                if (page.tpl == "game_anchor") {
                    Room.userTools = new UserTools
                }
                break;
            case 7:
            case 10:
                a._set_p1(1);
                break;
            case 6:
                break;
            case 3:
            case 9:
                a._set_p2();
                break;
            case 8:
                a._set_p3();
                break
        }
        a._set_p_nb();
        a._isSet = 1
    }, _set_p1: function (a) {
        Room.userMenu.sug.find("p.main_1").css("display", a ? "block" : "none");
        var b = "none";
        if (Room.user.role == 10 && a) {
            b = "block"
        }
        Room.userMenu.sug.find("p.main_1").find(".user-oper, a.set_power, a.del_power").css("display", b)
    }, _set_p2: function () {
        if (this._isSet) {
            return
        }
        this._set_p1(1);
        var a = Room.userMenu.sug.find("p.main_1:eq(0)");
        a.find(".user-oper, a.set_power,a.set_power_z").css("display", "block");
        if (Room.user.rank > 12 || page.tpl == "love") {
            a.find("a.ip_off").css("display", "block")
        }
        if (page.isMic || page.queueroom) {
            if (page.isMic) {
                a.find("a.set_power_z, a.del_power_z").remove()
            }
        }
        if (!page.isMic) {
            Pres["108"].u = 1
        }
        Room.liveMaster = 1;
        Room.userTools = new UserTools();
        if (Room.m.isWeiBo) {
            Room.reBtn = '<em class="re">转</em> '
        }
    }, _set_p3: function () {
        if (this._isSet) {
            return
        }
        this._set_p1(1);
        Room.userMenu.sug.find("p.main_2").css("display", "block");
        Room.userTools = new UserTools
    }, _set_p_nb: function () {
        if (this._isSet) {
            return
        }
        var g = Room.user, a = g.rich, e = g.fstar;
        var c = Room.userMenu.oJinyanBtn, f = Room.userMenu.oJinyanrBtn, d = Room.userMenu.oTirenBtn, b = Room.userMenu.oTeQuan;
        if ((a > 21 && (/7104|7105/.test(g.prop) || e > 3)) || (a == 21 && e > 3)) {
            b.css("display", "block");
            c.css("display", "block");
            f.css("display", "block")
        }
        if (a > 21 && e > 3) {
            b.css("display", "block");
            d.css("display", "block")
        }
        if (a > 25) {
            b.css("display", "block");
            Room.userMenu.oChuanyue.css("display", "block")
        }
    }, setManager: function (a) {
        var d = a ? "p" : "d";
        var b = d == "d" ? "priv_deladmin" : "priv_setadmin";
        Room.Msg.send(b, {f: page.rid, u: Room.userMenu.uid, act: d});
        return false
    }, setManager_z: function (a) {
        var d = a ? "p" : "d";
        var b = d == "d" ? "priv_delroommanager" : "priv_setroommanager";
        Room.Msg.send(b, {f: page.rid, u: Room.userMenu.uid, act: d});
        return false
    }, setBo: function (a) {
        var a = a ? "p" : "d";
        var b = a == "p" ? "priv_setmac" : "priv_delmac";
        Room.Msg.send(b, {f: page.rid, u: Room.userMenu.uid, act: a})
    }, forbid: function (a) {
        var b = Room.userMenu.uid, c = {t: "priv_kill", j: "priv_stopmsg", c: "priv_recover"};
        Room.Msg.send(c[a], {u: b, r: page.rid});
        return false
    }, mdelIp: function () {
        if (!confirm("确定这样做么?")) {
            return
        }
        Room.Msg.send("priv_closeip", {r: page.rid, act: "k", u: Room.userMenu.uid, flag: 0})
    }, callback: function (a) {
        if (a.flag == "001") {
            Prompt.alert("操作成功！")
        } else {
            onErr.parseErr(a)
        }
    }, moveUser: function (a) {
        if (!confirm("非常重要,确定继续吗?")) {
            return
        }
        Room.Msg.send("priv_user_rewrite", {prid: a, u: Room.userMenu.uid})
    }, killUser: function (a) {
        if (!confirm("非常重要,确定继续吗?")) {
            return
        }
        Room.Msg.send("priv_closeroom", {r: page.rid, u: Room.userMenu.uid})
    }
};
Room.Ready.set_login(Room.HostPower.setPower);
Room.get_gifts_list = {
    isLoad: 0, init: function () {
        if (page.isMic) {
            var a = jQuery("#chatBox ul:eq(0) a[rel=watchGift]")
        } else {
            if (page.tpl == "voice") {
                var a = jQuery("div.rank-btn a")
            } else {
                var a = jQuery("#watchForum_, #watchForum").find("ul:eq(0) a[rel=watchGift]")
            }
        }
        a.click(function () {
            Room.get_gifts_list.get()
        });
        this.container = jQuery('<ul class="watch_gift_list"></ul>').appendTo(jQuery("#watchGift")).on("click", "a", function (b) {
            if (this.target == "_blank") {
                return true
            }
            b.preventDefault();
            UserCard_win.getCard(jQuery(this).attr("uid"))
        })
    }, get: function () {
        if (this.isLoad) {
            return
        }
        Room.Msg.send("prop_getprop", {r: page.rid, ak: page.authKey})
    }, callback: function (a) {
        if (a.flag == "001") {
            this.isLoad = 1;
            this.parseList(a.content)
        } else {
            onErr.parseErr(a)
        }
    }, parseList: function (c) {
        var b = [], a = this;
        jQuery.each(c, function (d, f) {
            b.push(a.get_row(f))
        });
        b.reverse();
        this.container[0].innerHTML = "<li>" + b.join("</li><li>") + "</li>";
        b = null;
        Mediator.publish("giftlist-update")
    }, get_row: function (d) {
        var f;
        if (d.uid == 1900000047) {
            f = '<em class="mystery"><i class="fixpng"></i>' + (d.uname || d.alias) + "</em>"
        } else {
            if (d.uid > 900000000 && d.uid < 1900000000) {
                f = '<a href="/a/' + d.uid + '" target="_blank">' + (d.uname || d.alias) + " </a>"
            } else {
                if (d.uid > 1900000000) {
                    f = '<em><i class="fixpng"></i>' + (d.uname || d.alias) + "</em>"
                } else {
                    f = '<a href="" uid="' + d.uid + '">' + (d.uname || d.alias) + "</a>"
                }
            }
        }
        var c = aptime.stoHoursEx(d.tm);
        var b = Pres[d.item].cls + " giftSmall";
        var a = Pres[d.item].title;
        if (page.tpl == "wmp") {
            return '<span class="gift"><i title="' + a + '" class="' + b + '"></i>' + d.num + '个</span><span class="name">' + f + "</span>"
        } else {
            return '<span class="time">' + c + '</span><span class="gift"><i class="' + b + '"></i>' + a + '</span><span class="num">' + d.num + '个</span><span class="name">' + f + "</span>"
        }
    }, add: function (a) {
        if (!this.isLoad) {
            return
        }
        var b = this.get_row(a);
        this.container.prepend(jQuery("<li/>").html(b));
        if (this.container.children().length > 50) {
            this.container.children().last().remove()
        }
    }, clearList: function () {
        this.container[0].innerHTML = ""
    }
};
function setBg(a, c) {
    var b = location.href, b = (b + "").replace(/^.+6\.cn\/(\d+).+$/i, "http://v.6.cn/$1");
    if (a == "p") {
        location.href = b
    } else {
        if (a == "m") {
            alert(c);
            document.form1.submitBtn.disabled = false
        } else {
            if (a == "d") {
                location.href = b
            }
        }
    }
}
Room.privChat = {
    sendApi: "/room/action/roomoption.php", prive: 0, init: function (a) {
        var b = jQuery("#priHandBox, #only_chat div.pubHandBox:eq(1)");
        if (b.length < 1) {
            return
        }
        this.priBtn = b.find(".priBtn").bind("click", function () {
            Prompt.create({
                btn_sure: 1,
                btn_cancel: 1,
                title: "私聊设置",
                content: '<div id="pri_set_box"><p><input type="radio" value="0" name="pri_set" />允许所有人对我私聊</p>								<p><input type="radio" value="2" name="pri_set" />仅允许我的房管对我私聊</p>								<p><input type="radio" value="1" name="pri_set" />禁止所有人对我私聊</p></div>',
                callback: function (c) {
                    if (c) {
                        var d = jQuery("#pri_set_box").find("input[name=pri_set]:checked").val();
                        if (d == Room.privChat.prive) {
                            return
                        }
                        Room.privChat.set(d)
                    }
                }
            });
            jQuery("#pri_set_box").find("input[value=" + Room.privChat.prive + "]").prop("checked", true);
            return false
        });
        this.prive = parseInt(a);
        this.btnChange()
    }, btnChange: function () {
        var a = ["deny", "but", "onlyManage"];
        this.priBtn.attr("class", "priBtn " + a[this.prive])
    }, set: function (a) {
        if (!this.sending) {
            this.sending = 1;
            this.prive = a;
            Room.Msg.send("room_privatemsg", {t: "prive", v: this.prive})
        }
    }, callback: function (a) {
        this.sending = 0;
        if (a.flag == "001") {
            this.btnChange()
        } else {
            Prompt.alert(a.content)
        }
    }
};
var Vote = {
    isF: null, create_sug: function () {
        this.sug = jQuery("<div>", {"class": "roteNotice"}).appendTo(document.body).css("visibility", "visible");
        var a = 0;
        this.sug.bind("vis", function (e, d, g, c) {
            var f = jQuery(this);
            var b = d.offset();
            c ? f.addClass("color_green") : f.removeClass("color_green");
            f.html(g);
            f.css({top: b.top + 32, left: b.left + 140});
            f.fadeIn(100);
            f.hasClass("roteNotice-zemble") ? f.removeClass("roteNotice-zemble") : f.addClass("roteNotice-zemble");
            clearTimeout(a);
            a = setTimeout(function () {
                f.fadeOut(100)
            }, 1000)
        })
    }, send: function (d, f) {
        this.btn = jQuery(d);
        if (!this.sug) {
            this.create_sug()
        }
        var b = "/event/shownew/vote.php", a, c, e = "";
        var a = f, c = _puser.uid, e = page.rid;
        jQuery.ajax({dataType: "json", url: b, data: {cpid: a, u: c, rid: e}, success: this.callback})
    }, callback: function (a) {
        if (a.flag == "001") {
            Vote.sug.trigger("vis", [Vote.btn, "投票成功！", true])
        } else {
            if (a.flag == "203") {
                Login.toLogin()
            } else {
                Vote.sug.trigger("vis", [Vote.btn, a.content, false])
            }
        }
    }
};
var Fav = {
    box: 0, sending: 0, init: function (a) {
        this.box = jQuery("#favorite");
        if (this.box.length < 1) {
            return
        }
        this.box.css("display", "block");
        this.change(a)
    }, set: function (a) {
        if (!_puser.uid) {
            return Login.toLogin()
        }
        if (this.sending) {
            return
        }
        var b = a, d = this.box;
        if (b) {
            var c = "/message/follow_add.php"
        } else {
            var c = "/message/follow_del.php"
        }
        d.html("<a></a>");
        d.addClass("favorite_load");
        this.sending = 1;
        jQuery.ajax({
            dataType: "json", url: c, data: {tuid: this.tuid, act: "p", format: "json"}, success: function (e) {
                if (jQuery.type(e) != "object") {
                    return
                }
                var f = Fav;
                f.sending = 0;
                if (e.flag == "001") {
                    f.change(b);
                    b && Mediator.publish("favorite")
                } else {
                    if (e.flag == "203") {
                        f.change(!b);
                        return Login.toLogin()
                    } else {
                        Prompt.alert(e.content);
                        f.change(!b)
                    }
                }
            }
        });
        return false
    }, change: function (a, c) {
        this.tuid = c || page.rid;
        var b = a ? 1 : 0;
        if (b) {
            this.box.attr("class", "favorite favorite_ok");
            this.box[0].innerHTML = '<a onclick="Fav.set(0);return false" href=""><em class="f1">已关注</em><em class="f2">取消关注</em></a>'
        } else {
            this.box.attr("class", "favorite");
            this.box[0].innerHTML = '<a href="" onclick="Fav.set(1);return false"><i>+</i>关注</a>'
        }
    }
};
function pageReload() {
    location.replace(location.href.replace(/#.*$/, ""))
}
Room.setGift = {
    sugBox: 0, setBtn: 0, mt: 0, init: function () {
        this.setBtn = jQuery("#toggleGift");
        if (this.setBtn.length < 1) {
            return
        }
        this.setBtn.css("display", "block");
        this.setBtn.bind("click", this.set)
    }, set: function () {
        var a = Room.setGift;
        if (!a.setBtn) {
            return
        }
        a.setBtn.hasClass("toggleGift_hid") ? a.vis() : a.hid();
        return false
    }, vis: function () {
        Room.m.superGiftHidden = 0;
        jQuery("#presSwf, #flyMsgBox, #giftShapeSwf").css("display", "block");
        this.setBtn.removeClass("toggleGift_hid");
        this.setSug(1)
    }, hid: function () {
        Room.m.superGiftHidden = 1;
        try {
            Room.GiftSuper.swf.clearGifts()
        } catch (a) {
        }
        jQuery("#presSwf, #flyMsgBox, #giftShapeSwf").css("display", "none");
        this.setBtn.addClass("toggleGift_hid");
        this.setSug(0)
    }, setSug: function (b) {
        if (!this.sugBox) {
            this.sugBox = jQuery("<div/>", {id: "giftShowSug"}).appendTo(document.body)
        }
        this.sugBox[!b ? "addClass" : "removeClass"]("giftShowSug-hide");
        this.sugBox[0].innerHTML = '<div class="bg"></div>' + (b ? "礼物的显示特效已经打开" : "礼物的显示特效已经关闭");
        clearTimeout(this.mt);
        var a = Room.setGift;
        this.sugBox.css("display", "block");
        a.mt = setTimeout(function () {
            a.sugBox.css("display", "none")
        }, 3000)
    }
};
AddReady(function () {
    setTimeout(function () {
        Room.setGift.init()
    }, 5000)
});
var TempViewList = {
    init: function (a) {
        if (page.tpl == "football" || page.tpl == "army") {
            return
        }
        this.options = a;
        this.options.chatList = jQuery('<ul class="chatList">').appendTo(this.options.chatList);
        TempViewList.parseUserList();
        TempViewList.parseMsgList()
    },
    parseUserList: function () {
        var k = page.temUserList;
        if (!k) {
            return
        }
        var f = this.options.userList, a = this.options.userCount, h = this.options.manageList, d = this.options.manageCount;
        var c = k.num, b = k.content.all;
        if (!b) {
            return
        }
        var q = [], l = [], m = 0;
        for (var g = 0, j = b[g]; g < b.length; g++, j = b[g]) {
            var o = UserListMain.parseUser(j);
            if (o.sf == 6) {
                c--;
                continue
            }
            switch (o.sf) {
                case 1:
                    q.push('<li class="' + o.cls + '">' + o.str + "</li>");
                    break;
                case 7:
                case 9:
                    if (page.jinpai / 1 == 1) {
                        o.star_str = o.star_str.replace(/<\/em><\/p>$/, '<i class="gold-sign" title="金牌签约主播"></i></em></p>')
                    }
                case 5:
                    l.push('<li id="' + j.uid + '" class="' + o.cls + '">' + (o.sf == 9 ? o.star_str : o.str) + "</li>");
                    m++;
                case 2:
                case 3:
                case 8:
                default:
                    q.push('<li id="' + j.uid + '" class="' + o.cls + '">' + (o.sf == 9 ? o.star_str : o.str) + "</li>");
                    break
            }
        }
        var n = k.content.adm;
        if (n.length > 0) {
            for (var g = 0; g < n.length; g++) {
                var o = UserListMain.parseUser(n[g]), p = '<li id="' + o.user.uid + '" class="' + o.cls + '">' + o.str + "</li>";
                l.push(p);
                m++;
                q.push(p)
            }
        }
        a.length > 0 && a.text(c);
        f[0].innerHTML = '<ul class="userList">' + q.join("") + "</ul>";
        if (d && d[0]) {
            d.text(m)
        }
        if (h && h[0]) {
            h[0].innerHTML = '<ul class="userList">' + l.join("") + "</ul>"
        }
    },
    textClass: {
        "101": "",
        "102": "notice",
        "103": "mes",
        "201": "",
        "1000": "",
        "10000": "top1",
        "10001": "gEggMsg",
        "9527": ""
    },
    parseMsgList: function (m) {
        var m = page.temMsgList;
        if (!m) {
            return
        }
        for (var j = 0; j < m.length; j++) {
            var l = m[j];
            if (l.typeID == "101") {
                var d = l.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
                d = ParseFaceSymobls(d);
                var g = Room.test_rid(l.frid) ? '<span class="urid">(<em>' + l.frid + "</em>)</span>" : "";
                var f = Badge.get_ico_img(l.prop);
                var o = "";
                if (l.vest > 0) {
                    o = '<span class="u-vest" title="马甲累计：' + l.vest + '天"><img src="' + ChatList.vestLevel(l.vest) + '"/></span>'
                }
                var s = l.prop.join(",").match(/7569|7570/);
                if (s || l.fid == page.rid) {
                    d = ParseFaceSymobls(d, 1);
                    if (s) {
                        if (s[0] == 7570) {
                            k = "style_7570"
                        } else {
                        }
                    }
                }
                try {
                    if (/7103|7104|7105|7559/.test(l.priv.join(",")) || l.fid == page.rid) {
                        d = ParseFaceSymobls(d, 3)
                    }
                } catch (l) {
                }
                try {
                    if (page.birthday) {
                        d = ParseFaceSymobls(d, 4)
                    }
                } catch (l) {
                }
                if (l.gstra != "") {
                    var r = l.gstra.split("-");
                    f += '<em class="army_level army-rank' + r[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + r[0] + '.png)"><i class="army' + r[2] + '"></i><b></b></em>'
                }
                if (page.top30 == l.fid / 1 || (l.fid && l.fid == page.firstTotalId)) {
                    k = "style_fans";
                    f = GetPix("crownIcon_all", (page.top30 == l.fid / 1 ? "30天" : "超级") + "粉丝榜单第一名") + f
                } else {
                    if (l.fid && l.fid == page.firstId) {
                        k = "style_fans_cur";
                        f = GetPix("crownIcon_cur", "当前直播粉丝榜单第一名") + f
                    }
                }
                var k = 0;
                if (l.cr > 26) {
                    k = "style_god_super"
                } else {
                    if (l.cr > 25) {
                        k = "style_god"
                    } else {
                        if (l.fid == page.puid) {
                            k = "style_room"
                        }
                    }
                }
                if (l.fpriv / 1 == 8) {
                    k = "sys";
                    d = '<span class="con" style="font-weight:bold">' + d + "</span>"
                } else {
                    d = '<span class="con">' + d + "</span>"
                }
                var n = l.mb > 0 ? '<i class="phone"></i>' : "";
                var h = [l.fid, l.frid, l.from, Badge.get_ico_id(l.prop).join("|"), l.fpriv];
                var c;
                if (l.anonym) {
                    c = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(l.tm) + " </span>" + l.from
                } else {
                    c = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(l.tm) + " </span>" + f + n + o + '<a href="#" class="u" user="' + h.join(",") + '">' + l.from + " </a>" + g
                }
                if (l.to == "") {
                    var a = c + '<span class="c9">：</span>' + d
                } else {
                    var b = [l.toid, l.torid, l.to, "", l.tpriv];
                    var q = (l.torid >= 30000000 && l.torid < 80000000) ? "" : '<span class="urid">[<em>' + l.torid + "</em>]</span>";
                    var a = c + ' <span class="c9">对</span> <a href="#" class="u" user="' + b.join(",") + '">' + l.to + "</a>" + q + ' <span class="c9">说：</span>' + d
                }
                var p = document.createElement("li");
                p.className = "style-chat " + (k || this.textClass[l.typeID] || "");
                p.innerHTML = a;
                this.options.chatList.append(p);
                p = null
            }
        }
    },
    parseSysMsg: function (b) {
        var a = document.createElement("li");
        a.className = "notice";
        a.innerHTML = b.content;
        this.options.chatList.append(a);
        a = null
    }
};
setTimeout(function () {
    var a = jQuery("#gameNotice");
    if (a.length < 1) {
        return
    }
    jQuery.ajax({
        dataType: "json", url: "/room/getRecGame.php", success: function (c) {
            if (c.flag == "001") {
                var b = c.content;
                a.html('<a href="' + b.link + '" target="_blank">' + b.title.st(16) + '</a><em class="close fixpng"></em>');
                a.find(".close").bind("click", function () {
                    a.css("visibility", "hidden")
                })
            } else {
                a.css("visibility", "hidden")
            }
        }
    })
}, 2000);
var Face_vip = function () {
    var a = jQuery("#chatForm button.face_vip, button.face-vip");
    if (a.length < 1) {
        return
    }
    if (a.attr("s") == 1) {
        return
    }
    a.attr("s", 1);
    a.bind("click", function () {
        if (!_puser.uid) {
            Login.toLogin()
        } else {
            if (/7103|7104|7105|7559/.test(Room.user.prop) || Room.user.role == 9) {
                var b = jQuery(this);
                b.unbind();
                _face = new Faces({
                    btn: b[0],
                    smile: FaceVip,
                    input_text: page.tpl == "voice" ? jQuery("div.chat-txt .act-text input") : jQuery("#chatForm").find("input")[2],
                    fname: "face_vip_box",
                    pageSize: 22,
                    cells: 3,
                    isTitle: 1
                });
                b.trigger("click")
            } else {
                Prompt.create({
                    content: "您没有VIP或绿卡，不能使用会员专属表情。<br/>是否现在购买VIP？",
                    btn_sure: {text: "立即购买", link: "/user/shopprop.php", target: "shop"},
                    btn_cancel: {text: "取消"}
                })
            }
        }
    })
};
Room.Ready.set_login(Face_vip);
var clairvoyance = {
    init: function () {
        if (_puser.rich > 26 || jQuery.inArray(_puser.uid / 1, [766]) > -1) {
            var a = this;
            var b = jQuery('<div class="clairvoyance-btn" id="clairvoyance-btn"><a href="#" class="fixpng">千里眼</a></div>');
            b.insertAfter(jQuery("#userPanel"));
            b.find("a").click(function (c) {
                c.preventDefault();
                a.create_pop()
            })
        }
    }, key_sug: "请输入您想要定位对象的房间号", create_pop: function () {
        var b = clairvoyance;
        var a = {
            class_name: "prompt-clairvoyance",
            title: "千里眼",
            content: '<div class="clairvoyance-box" id="clairvoyance-box"><div class="form"><h4>“千里眼”帮您定位指定的对象在哪个房间</h4><input class="input" type="text" value="' + b.key_sug + '" /><a class="sure" href="#">开始定位</a></div><div class="list"></div></div>',
            onSubmit: function () {
                var d = jQuery("#clairvoyance-box");
                var c = d.find(".input").val();
                if (isNaN(c)) {
                    alert("请输入正确的房间号");
                    d.find(".input").addClass("error");
                    return
                }
                jQuery.ajax({
                    dataType: "json", url: "/room/position.php", data: {rid: c}, success: function (f) {
                        if (f.flag == "001") {
                            var e = '<h4>当前的定位对象<a target="_blank" href="/' + c + '">' + f.content.info.alias + "</a>正在以下房间</h4>";
                            e += "<p>";
                            if (f.content.list.length > 0) {
                                jQuery.each(f.content.list, function (g, h) {
                                    e += '<a target="_blank" href="' + h.url + '">' + h.name + "</a>"
                                })
                            } else {
                                e += '<span class="none">当前定位对象没有在任何房间</span>'
                            }
                            e += "</p>";
                            d.find(".list").html(e)
                        } else {
                            alert(f.content);
                            d.find(".input").addClass("error")
                        }
                    }
                })
            }
        };
        Prompt.create(a);
        jQuery("#clairvoyance-box .input").bind("focus", function () {
            jQuery(this).removeClass("error");
            jQuery(this).addClass("focus");
            if (jQuery(this).val() == b.key_sug) {
                jQuery(this).val("")
            }
        })
    }
};
clairvoyance.init();
(function () {
    if (!pageMessage.userCheck) {
        return
    }
    var b = 1000 * 60 * 5;
    var a = function () {
        new Image().src = "/room/roomInfoUser.php?uid=" + _puser.uid + "&rid=" + page.rid + "&_=" + (new Date().getTime());
        setTimeout(a, b)
    };
    a()
})();
(function () {
    var j = 0;
    var l = 8;
    var q = function (g, a) {
        g[a >> 5] |= 128 << (24 - a % 32);
        g[((a + 64 >> 9) << 4) + 15] = a;
        var e = Array(80);
        var D = 1732584193;
        var E = -271733879;
        var F = -1732584194;
        var G = 271733878;
        var H = -1009589776;
        for (var f = 0; f < g.length; f += 16) {
            var c = D;
            var d = E;
            var h = F;
            var i = G;
            var x = H;
            for (var t = 0; t < 80; t++) {
                if (t < 16) {
                    e[t] = g[f + t]
                } else {
                    e[t] = o(e[t - 3] ^ e[t - 8] ^ e[t - 14] ^ e[t - 16], 1)
                }
                var b = n(n(o(D, 5), r(t, E, F, G)), n(n(H, e[t]), p(t)));
                H = G;
                G = F;
                F = o(E, 30);
                E = D;
                D = b
            }
            D = n(D, c);
            E = n(E, d);
            F = n(F, h);
            G = n(G, i);
            H = n(H, x)
        }
        return Array(D, E, F, G, H)
    };
    var r = function (c, d, a, b) {
        if (c < 20) {
            return (d & a) | ((~d) & b)
        }
        if (c < 40) {
            return d ^ a ^ b
        }
        if (c < 60) {
            return (d & a) | (d & b) | (a & b)
        }
        return d ^ a ^ b
    };
    var p = function (a) {
        return (a < 20) ? 1518500249 : (a < 40) ? 1859775393 : (a < 60) ? -1894007588 : -899497514
    };
    var n = function (d, a) {
        var b = (d & 65535) + (a & 65535);
        var c = (d >> 16) + (a >> 16) + (b >> 16);
        return (c << 16) | (b & 65535)
    };
    var o = function (b, a) {
        return (b << a) | (b >>> (32 - a))
    };
    var m = function (a) {
        var b = Array();
        var d = (1 << l) - 1;
        for (var c = 0; c < a.length * l; c += l) {
            b[c >> 5] |= (a.charCodeAt(c / l) & d) << (24 - c % 32)
        }
        return b
    };
    var k = function (b) {
        var c = j ? "0123456789ABCDEF" : "0123456789abcdef";
        var a = "";
        for (var d = 0; d < b.length * 4; d++) {
            a += c.charAt((b[d >> 2] >> ((3 - d % 4) * 8 + 4)) & 15) + c.charAt((b[d >> 2] >> ((3 - d % 4) * 8)) & 15)
        }
        return a
    };
    this.hex_sha1 = function (a) {
        return k(q(m(a), a.length * l))
    }
}).call(window);
(function () {
    var b = 1000 * 60 * 2;
    var a = function () {
        _uuid = jQuery.cookie("_uuid");
        if (!_uuid) {
            _uuid = hex_sha1((navigator.userAgent || "") + (navigator.platform || "") + Math.round(new Date().getTime() / 1000)).slice(0, 16);
            jQuery.cookie("_uuid", _uuid, {expires: 500, path: "/"})
        }
        new Image().src = "http://sclick.6rooms.com/inroom.html?uuid=" + _uuid + "&uid=" + _puser.uid + "&rid=" + page.rid + "&referer=" + encodeURIComponent(document.referrer) + "&_=" + (new Date().getTime());
        setTimeout(a, b)
    };
    a()
})();
var FilterStr = {
    number: "扣1234567890１２３４５６７８９０一二三四五六七八九零①②③④⑤⑥⑦⑧⑨㈠ ㈡ ㈢ ㈣ ㈤ ㈥ ㈦ ㈧ ㈨ ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼壹贰叁肆伍陆柒捌玖",
    letter: "./．点。６Ｐ．ＰＭabcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZａｂｃｄｅｆｇｈｉｇｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＧＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
    dots: "らㄋ⒈⒉⒋⒌⒍⒎⒏⒐ΒСΟΚКМТΧΙΝткτκ┰Τ"
};
var ChatList = {
    ie6: jQuery.browser.msie && jQuery.browser.version == "6.0",
    attachRoom: function () {
        Room.Ready.set_login(function () {
            switch (Room.user.status) {
                case 1:
                    Room.chatList.deSend();
                    break;
                case 2:
                    break;
                case 6:
                    Room.chatList.unSend();
                    break
            }
        });
        Room.Msg.set_getback({
            101: function (a) {
                Room.chatList.parsePub(a)
            }, 110: function (c) {
                for (var b = c.content, a = 0; a < b.length; a++) {
                    Room.chatList.parsePub(b[a])
                }
            }, 107: function (a) {
                Room.chatList.parsePriv(a);
                Room.chatList.scrollTo_pri(1)
            }, 111: function (a) {
                Room.chatList.visMsg_pri('<a class="u">' + page.masterName + '</a> <span class="c9">对</span> <a class="u">你</a> <span class="c9">说：</span><span class="con">' + a.content + "</span>")
            }, 112: function (a) {
                Room.chatList.visMsg_pri(a.content)
            }
        });
        Room.Msg.set_callback({
            msg_room: function (a) {
                Room.chatList.sendBack(a)
            }, msg_private: function (a) {
                Room.chatList.sendBack(a)
            }
        })
    },
    textClass: {
        "101": "",
        "102": "notice",
        "103": "mes",
        "201": "",
        "1000": "",
        "10000": "top1",
        "10001": "gEggMsg",
        "9527": ""
    },
    rollAuto: 1,
    toUserId: "",
    unPrive: {},
    Fsm: "",
    sayDelay: 1000,
    init: function (c) {
        var a = this;
        this.container = c.publicBox.find("ul");
        if (this.container.length < 1) {
            this.container = jQuery("<ul>").appendTo(c.publicBox)
        }
        this.container.addClass("chatList");
        this.scrollBox = c.publicBox.parent();
        this.publicBox = c.publicBox;
        this.priveBox = c.priveBox;
        this.is_vip_face = c.is_vip_face == null ? 1 : c.is_vip_face;
        this.sendBtn = c.chatSendBtn;
        this.sendBtn.data("def_class", this.sendBtn.prop("class"));
        this.sendBtn.bind("mouseover", function () {
            jQuery(this).addClass("on")
        });
        this.sendBtn.bind("mouseout", function () {
            jQuery(this).removeClass("on")
        });
        this.sendInput = c.chatInput.val("").attr("disabled", "disabled");
        this.userInput = c.userInput;
        this.userInput.val("所有人");
        this.userSug = new Input_sug({
            callback: jQuery.proxy(this.changeUser, this),
            input: this.userInput[0],
            posBox: c.posBox
        });
        this.sendInput.bind("focus blur", function (i) {
            if (i.type == "focus") {
                a.setChatChange(10)
            } else {
                a.setChatChange(11)
            }
        });
        if (!page.isMic && page.tpl != "army" && page.masterName) {
            this.userSug.addItem({uid: page.rid, alias: page.masterName, rid: page.roomid})
        }
        this.container.on("click", "a,em", function (k) {
            var i = jQuery(k.target), m = i.attr("user");
            if (i.is("a") && m) {
                k.preventDefault();
                var j = m.split(",");
                m = {uid: j[0], rid: j[1], alias: j[2], ico: (j[3] && j[3].split("|") || []), role: j[4], pub: 1};
                Room.chatList.setCurUser(m);
                Room.userMenu.visible(i, m);
                Room.chatList.rollChange(0)
            } else {
                if (i.hasClass("re")) {
                    var l = i.parent().html().replace(/<em.+?>.+?>/i, "");
                    WB.re.setCon(i[0], l)
                }
            }
        });
        this.sendBtn.bind("click", function (i) {
            i.preventDefault();
            if (a.sendBtn.hasClass("disabled")) {
                return
            }
            a.send()
        });
        this.sendInput.bind("keyup", function (i) {
            if (i.which == 13) {
                if (a.sendBtn.hasClass("disabled")) {
                    return
                }
                a.send()
            }
        });
        this.sendInput.bind("focus", function () {
            jQuery(this).addClass("input_focus")
        }).bind("blur", function () {
            jQuery(this).removeClass("input_focus")
        });
        var f = jQuery("#pubHandBox").hide().css({visibility: "visible", opacity: 1});
        f.bind("visible hidden mouseenter", function (i) {
            switch (i.type) {
                case"visible":
                    jQuery(this).show();
                    break;
                case"hidden":
                    jQuery(this).hide();
                    break;
                case"mouseenter":
                    jQuery(this).show()
            }
        });
        this.scrollBox.bind("mouseenter", function () {
            f.trigger("visible")
        });
        this.scrollBox.bind("mouseleave", function () {
            f.trigger("hidden")
        });
        f.find(".clearListBtn").bind("click", function () {
            a.clearList("pub")
        });
        this.rollBtn = f.find(".rollPauseBtn");
        this.rollBtn.bind("click", this.rollChange);
        this.isPriveCheck = c.isPriveCheck;
        if (this.isPriveCheck && c.checkboxSubstitue) {
            c.checkboxSubstitue.bind("click", function () {
                var i = c.checkboxSubstitue;
                var j = Room.chatList.isPriveCheck;
                if (j.prop("disabled")) {
                    return
                }
                j.prop("checked", i.hasClass("checkbox-checked") ? false : true);
                j.trigger("change")
            });
            this.isPriveCheck.bind("change", function () {
                var k = a.isPriveCheck;
                var i = c.checkboxSubstitue;
                var j = a.sendInput;
                if (k.prop("disabled")) {
                    i.addClass("checkbox-disabled")
                } else {
                    i.removeClass("checkbox-disabled")
                }
                if (k.prop("checked")) {
                    j.addClass("input_text_prive");
                    i.addClass("checkbox-checked");
                    a.notice_cover(1)
                } else {
                    j.removeClass("input_text_prive");
                    i.removeClass("checkbox-checked");
                    a.notice_cover(0)
                }
            })
        }
        if (c.priveBox.length > 0) {
            this.isPriveCheck.prop("checked", false);
            this.isPriveCheck.prop("disabled", true);
            this.isPriveCheck.trigger("change");
            this.priveContainer = jQuery("<ul>").appendTo(c.priveBox);
            this.priveScrollBox = c.priveBox.parent();
            this.priveContainer.addClass("chatList");
            this.priveContainer.on("click", "a, .to-chat-pri", function (l) {
                var k = jQuery(this), m = k.attr("user");
                if (m) {
                    l.preventDefault();
                    var j = m.split(",");
                    m = {uid: j[0], rid: j[1], alias: j[2], ico: (j[3] && j[3].split("|") || []), role: j[4], pri: 1};
                    Room.chatList.setCurUser(m);
                    Room.userMenu.visible(k, m)
                } else {
                    if (k.hasClass("to-chat-pri")) {
                        var i = k.siblings("a[user]").attr("user").split(",");
                        ChatPrivateWin.open({alias: i[2], uid: i[0]})
                    }
                }
            });
            var b = jQuery("#priHandBox").hide().css({visibility: "visible", opacity: 1});
            b.bind("visible hidden mouseenter", function (i) {
                switch (i.type) {
                    case"visible":
                        jQuery(this).show();
                        break;
                    case"hidden":
                        jQuery(this).hide();
                        break;
                    case"mouseenter":
                        jQuery(this).show()
                }
            });
            this.priveScrollBox.bind("mouseenter", function () {
                if (!_puser.uid) {
                    return
                }
                b.trigger("visible")
            });
            this.priveScrollBox.bind("mouseleave", function () {
                b.trigger("hidden")
            });
            b.find(".clearListBtn").bind("click", function () {
                a.clearList("pri")
            });
            this.priHandBox = b;
            if (Room.unLogin) {
                this.setAnony()
            }
            var h = this.sendInput;
            this.isPriveCheck.bind("click", function () {
                if (this.checked) {
                    h.addClass("input_text_prive");
                    a.notice_cover(1)
                } else {
                    h.removeClass("input_text_prive");
                    a.notice_cover(0)
                }
            })
        }
        this.sliderBar = jQuery("#watchChat_slideBar");
        if (this.sliderBar) {
            if (page.tpl == "wmp") {
                new Drag(this.sliderBar[0], {
                    onDrag: function (i) {
                        var j = parseInt(i.style.left);
                        Room.chatList.scrollBox.parent().css("width", j);
                        Room.chatList.priveScrollBox.parent().css("width", 648 - j);
                        Room.chatList._resizeStream()
                    }, limit: {x: [100, 600], y: [0, 0]}
                })
            } else {
                if (!page.event) {
                    jQuery("#watchChat_slideBar").bind("mousedown", function (n) {
                        var j = parseInt(Room.chatList.priHandBox.css("bottom")), i = parseInt(Room.chatList.scrollBox.css("height")), m = parseInt(Room.chatList.priveScrollBox.css("height")), l = parseInt(Room.chatList.sliderBar.css("bottom"));
                        var k = Room.chatList.scrollBox.attr("min") / 1;
                        jQuery(document).bind("mousemove", function (q) {
                            var p = q.pageY - n.pageY, r = p + i, o = -p + m;
                            if (r < 100 || o < 50) {
                                return
                            }
                            Room.chatList.sliderBar.css("bottom", -p + l);
                            Room.chatList.priHandBox.css("bottom", j - p);
                            Room.chatList.scrollBox.css("height", r);
                            Room.chatList.priveScrollBox.css("height", o)
                        });
                        jQuery(document).bind("mouseup", function () {
                            jQuery(document).unbind("mousemove");
                            jQuery(document).unbind("mouseup")
                        });
                        return false
                    })
                } else {
                    new Drag(this.sliderBar, {
                        onDrag: function () {
                            var j = 273;
                            var i = Room.chatList.sliderBar.offsetTop - j;
                            Room.chatList.priHandBox.style.top = 288 + i + "px";
                            Room.chatList.scrollBox.style.height = 217 + i + "px";
                            Room.chatList.priveScrollBox.style.height = 50 - i + "px"
                        }, limit: {x: [0, 0], y: [100, 278]}
                    })
                }
            }
        }
        var e = [];
        for (var g in FaceSymbols) {
            e.push(FaceSymbols[g])
        }
        this.Fsm = e.join("|");
        this.deSend();
        setTimeout(jQuery.proxy(this.unSend, this), this.sayDelay);
        this.setChatChange(11);
        this.toPub = c.toPub ? c.toPub : jQuery("#chatForm, #chatInput, #chatBox").find("a.toPub").addClass("to_select");
        this.toPub.bind("click", function (i) {
            i.preventDefault();
            if (jQuery(this).hasClass("to_select")) {
                if (Room.chatList.userSug.vis) {
                    Room.chatList.userSug.iHidden()
                } else {
                    Room.chatList.userSug.visible(this, c.posBox)
                }
            } else {
                Room.chatList.setCurUser({})
            }
        });
        this.timing();
        this.attachRoom();
        var d = c.faceBtn;
        _face = new Faces({btn: d[0], input_text: this.sendInput, fname: "chat", vip: 1, safe: 1});
        Room.userMenu.add_hid_fn({
            chat: function () {
                Room.chatList.rollChange(1)
            }
        });
        if (c.only_chat) {
            this.only_chat.init(c.only_chat)
        }
        this.setSayDelay(Room.user.coin6);
        if (page.privNotic && page.privNotic != "") {
            Room.chatList.visMsg_pri('<a class="u">' + page.masterName + '</a> <span class="c9">对</span> <a class="u">你</a> <span class="c9">说：</span><span class="con">' + page.privNotic + "</span>")
        }
        window.FlashChatSend = jQuery.proxy(this.flashSend, this)
    },
    remove_delay: 5000,
    scroll_delay: 250,
    timing: function () {
        setTimeout(jQuery.proxy(this.remove_list, this), this.remove_delay)
    },
    setSayDelay: function (a) {
        if (Room.liveMaster) {
            return this.sayDelay = 1000
        }
        if (parseInt(a) < 10 || Room.unLogin) {
            this.sayDelay = 5000
        }
        if (jQuery.inArray(page.rid, ["900000029", "900001510", "900002273", "900001883"]) > -1) {
            this.sayDelay = 10 * 1000
        }
    },
    sendBack: function (a) {
        if (this.sendBack2) {
            this.sendBack2(a)
        } else {
            if (!this.__flashSend) {
                setTimeout(jQuery.proxy(this.unSend, this, 1), this.sayDelay)
            }
        }
        this.__flashSend = 0;
        if (a.flag == "001") {
            page.authKey = a.content.authKey
        } else {
            onErr.parseErr(a)
        }
    },
    rollChange: function (b) {
        var a = Room.chatList;
        if (b === 0) {
            a.rollAuto = 0;
            return
        } else {
            if (b === 1) {
                if (!a.rollBtn.hasClass("rollAutoBtn")) {
                    a.rollAuto = 1
                }
                return
            } else {
                a.rollAuto = a.rollAuto === 1 ? 0 : 1
            }
        }
        if (a.rollAuto) {
            a.rollBtn.removeClass("rollAutoBtn")
        } else {
            a.rollBtn.addClass("rollAutoBtn")
        }
    },
    cover_count: 0,
    setChatChange: function (d) {
        var a;
        if (d == 10) {
            a = 0
        } else {
            if (d == 11) {
                a = page.isChatPub
            } else {
                page.isChatPub = d;
                a = d
            }
        }
        var c = this.get_input_notice(), b = this.sendInput.val();
        if (a > 0 && (b == "" || d < 10) && this.cover_count < 1) {
            this.sendInput.val(c).addClass("notice_default")
        } else {
            if (b == c || d == 0) {
                this.sendInput.val("").removeClass("notice_default")
            }
        }
    },
    get_input_notice: function () {
        return {
                "0": "",
                "1": "本房间仅限管理员公聊！",
                "2": "新朋友的发言请不要超过10个字哦！",
                "3": "系统关闭",
                "4": "本房间仅限一富及以上玩家公聊"
            }[page.isChatPub] || ""
    },
    notice_cover: function (a) {
        if (a) {
            this.cover_count++;
            this.setChatChange(10)
        } else {
            this.cover_count--;
            this.setChatChange(11)
        }
    },
    setCurUser: function (a) {
        this.changeUser(a);
        if (a.uid) {
            this.userSug.addItem(a)
        }
    },
    changeUser: function (a) {
        if (!a.uid) {
            this.toUserId = "";
            this.userInput.val("所有人");
            this.isPriveCheck.prop("checked", false);
            this.isPriveCheck.prop("disabled", true);
            this.toPub.addClass("to_select");
            this.isPriveCheck.trigger("change");
            if (this.sendInput.hasClass("input_text_prive")) {
                this.sendInput.removeClass("input_text_prive");
                this.notice_cover(0)
            }
            return
        }
        this.isPriveCheck.prop("disabled", false);
        if (a.pri) {
            this.isPriveCheck.prop("checked", true);
            this.sendInput.addClass("input_text_prive");
            this.notice_cover(1)
        } else {
            if (this.sendInput.hasClass("input_text_prive")) {
                this.isPriveCheck.prop("checked", false);
                this.sendInput.removeClass("input_text_prive");
                this.notice_cover(0)
            }
        }
        this.isPriveCheck.trigger("change");
        if (!a.pub) {
            this.inputFocus()
        }
        this.toPub.removeClass("to_select");
        this.toUserId = a.uid;
        this.toUserRid = a.rid;
        this.toName = a.alias.unescapeHTML();
        this.userInput.val(a.alias.unescapeHTML())
    },
    inputFocus: function () {
        try {
            this.sendInput[0].focus()
        } catch (a) {
        }
    },
    setAnony: function () {
        if (page.tpl == "pps" || this.priveContainer.find("li").length > 0) {
            return
        }
        this.priveContainer.html('<li class="anonyNote">欢迎您进入房间。请 <a target="nologin" href="#" onclick="Login.toLogin(1); return false">注册</a> 或 <a target="nologin" href="#" onclick="Login.toLogin(); return false">登录</a>，与主播互动。</li>')
    },
    deSend: function () {
        this.sendInput.attr("disabled", "disabled");
        this.sendInput.addClass("disabled");
        if (this.sendBtn.parents("span.actBtn").length > 0) {
            this.sendBtn.parents(".actBtn").addClass("actBtn-skin-gray")
        } else {
            this.sendBtn.addClass("disabled")
        }
        this.sendBtn.attr("disabled", "disabled");
        this.sendBtn.addClass("disabled")
    },
    unSend: function (b) {
        if (Room.user.status != 6) {
            return
        }
        var a = this.sendBtn;
        if (a.parents("span.actBtn")) {
            a.parents(".actBtn").removeClass("actBtn-skin-gray")
        } else {
            this.sendBtn.addClass(this.sendBtn.data("def_class"))
        }
        this.sendInput.removeAttr("disabled");
        this.sendBtn.removeAttr("disabled");
        this.sendInput.removeClass("disabled");
        this.sendBtn.removeClass("disabled");
        this.inputInit = 1;
        b && this.inputFocus()
    },
    send: function () {
        if (Room.user.role == 1) {
            return Login.toLogin()
        }
        if (this.unPrive[this.toUserId]) {
            Prompt.alert("此人不允许私聊！");
            return
        }
        var e = this.sendInput.val();
        if (e == "" || e == this.get_input_notice()) {
            calert("请输入聊天内容！");
            return
        }
        if (e.len() > 100) {
            Prompt.alert("您的聊天内容过长，请确保不超过50个汉字！");
            return
        }
        var d = e.match(new RegExp(this.Fsm, "g"));
        if (d && d.length > 9) {
            Prompt.alert("您的聊天表情太多，不能发送！");
            return
        }
        if (Room.user.rich < 1 && e == this.pre_content && this.pre_date && (new Date().getTime() - this.pre_date) < 5 * 1000) {
            Prompt.alert("请勿频繁发送重复的聊天内容！");
            return
        }
        this.pre_content = e;
        this.pre_date = new Date().getTime();
        if (!Room.liveMaster && _puser.rich == 0 && _puser.rich_next >= 900) {
            var g = 0, f = 0, b = 0;
            for (var c = 0; c < e.length; c++) {
                var a = e.charAt(c);
                if (FilterStr.dots.indexOf(a) > -1) {
                    b = 1;
                    break
                }
                if (FilterStr.number.indexOf(a) > -1) {
                    g++
                } else {
                    if (FilterStr.letter.indexOf(a) > -1) {
                        f++
                    }
                }
            }
            if (b || g > 6 || (g + f) > 4) {
                Prompt.alert("您的发言中包含过多字母或数字！");
                return
            }
        }
        this.sendInput.val("");
        this.deSend();
        if (this.isPriveCheck && this.isPriveCheck.prop("disabled")) {
            this.sendPubMsg({tuid: this.toUserId, con: e})
        } else {
            var h = {
                pri: (this.isPriveCheck && this.isPriveCheck.prop("checked")),
                touid: this.toUserId,
                con: e,
                toname: this.toName,
                torid: this.toUserRid,
                touid: this.toUserId
            };
            this.sendPriMsg(h)
        }
    },
    flashSend: function (a) {
        if (!_puser.uid) {
            return
        }
        this.__flashSend = 1;
        this.sendPubMsg({con: a})
    },
    sendPubMsg: function (c) {
        this.sendBack2 = c.sendBack || 0;
        var b = {r: page.rid, ak: page.authKey, t: c.touid, m: c.con, ttt: new Date().getTime()};
        var a = "msg_room";
        Room.Msg.send(a, b)
    },
    sendPriMsg: function (c) {
        this.sendBack2 = c.sendBack || 0;
        var b = {r: page.rid, ak: page.authKey, t: c.touid, m: c.con, to: c.toname, torid: c.torid, toid: c.touid};
        var a = {pub: "msg_room", pri: "msg_private"};
        Room.Msg.send(c.pri ? a.pri : a.pub, b)
    },
    remove_face: function (d, a) {
        var a = a || "2", b = {"1": FaceSafe, "2": FaceSymbols, "3": FaceVip}[a];
        for (var c in b) {
            d = d.replace(new RegExp(b[c], "g"), "")
        }
        return d
    },
    zimu: function (d, c) {
        if (!window.liaotianzimu) {
            return
        }
        if (!this.zimu_swf) {
            this.zimu_swf = swfobject.getObjectById("videoPlayer")
        }
        var a = this.remove_face(d.content);
        a = this.remove_face(a, 1);
        a = this.remove_face(a, 3);
        if (a != "") {
            try {
                this.zimu_swf.addMessage(d.from + "：" + a, (d.fid == _puser.uid ? true : false), c)
            } catch (b) {
            }
        }
    },
    vestLevel: function (a) {
        var b = (a >= 0 && a <= 3 && 1) || (a > 3 && a <= 30 && 2) || (a > 30 && a <= 90 && 3) || (a > 90 && 4);
        return page.vestUrl + "_" + b + ".png"
    },
    parsePub: function (k) {
        if (k.from == "") {
            return
        }
        var d = k.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
        d = ParseFaceSymobls(d);
        var g = Room.test_rid(k.frid) ? '<span class="urid">[<em>' + k.frid + "</em>]</span>" : "";
        var f = Badge.get_ico_img(k.prop);
        var n = "";
        if (k.vest > 0) {
            n = '<span class="u-vest" title="马甲累计：' + k.vest + '天"><img src="' + ChatList.vestLevel(k.vest) + '"/></span>'
        }
        var i = "", j = "";
        var q = k.prop.join(",").match(/7569|7570/);
        if (q || k.fid == page.rid) {
            d = ParseFaceSymobls(d, 1);
            if (q) {
                if (q[0] == 7570) {
                    i = "style_7570";
                    j = "0xbca031"
                } else {
                }
            }
        }
        if (this.is_vip_face && (/7103|7104|7105|7559/.test(k.priv.join(",")) || k.fid == page.rid)) {
            d = ParseFaceSymobls(d, 3)
        }
        if (page.birthday) {
            d = ParseFaceSymobls(d, 4)
        }
        if (!!k.gstra) {
            var p = k.gstra.split("-");
            f += '<em class="army_level army-rank' + p[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + p[0] + '.png)"><i class="army' + p[2] + '"></i><b></b></em>'
        }
        if (k.fid && k.fid == page.firstId) {
            i = "style_fans_cur";
            j = "0xff0000";
            f = GetPix("crownIcon_cur", "当前直播粉丝榜单第一名") + f
        } else {
            if (page.top30 == k.fid / 1 || (k.fid && k.fid == page.firstTotalId)) {
                i = "style_fans";
                f = GetPix("crownIcon_all", (page.top30 == k.fid / 1 ? "30天" : "超级") + "粉丝榜单第一名") + f;
                j = "0x1e4bde"
            }
        }
        if (k.fid == page.puid) {
            i = "style_room";
            j = "0xff6e2e"
        } else {
            if (k.cr > 26) {
                i = "style_god_super";
                j = "0xff0000"
            } else {
                if (k.cr > 25) {
                    i = "style_god";
                    j = "0xaf8026"
                }
            }
        }
        this.zimu(k, j);
        if (k.fpriv / 1 == 8) {
            i = "sys";
            d = '<span class="con" style="font-weight:bold">' + d + "</span>"
        } else {
            d = '<span class="con">' + d + "</span>"
        }
        var m = k.mb > 0 ? '<i class="phone"></i>' : "";
        var l = Badge.get_ico_id(k.prop);
        var h = [k.fid, k.frid, k.from, l.join("|"), k.fpriv];
        var c = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(k.tm) + " </span>" + f + m + n + '<a href="" class="u" user="' + h.join(",") + '">' + k.from + " </a>" + g;
        if (k.to == "") {
            var a = c + '<span class="c9">：</span>' + d
        } else {
            var b = [k.toid, k.torid, k.to, "", k.tpriv];
            var o = Room.test_rid(k.torid) ? '<span class="urid">[<em>' + k.torid + "</em>]</span>" : "";
            var a = c + ' <span class="c9">对</span> <a href="" class="u" user="' + b.join(",") + '">' + k.to + "</a>" + o + ' <span class="c9">说：</span>' + d
        }
        this.add_list({str: a, e: k, cls: i, only: 1});
        if (Room.Sofa) {
            Room.Sofa.chat.parse(k.fid, k.content)
        }
        d = null;
        l = null;
        f = null;
        a = null;
        k = null
    },
    parsePriv: function (h) {
        if (!this.priveContainer) {
            return
        }
        Room.newMsg.start("有私聊消息！");
        try {
            if (window.ChatPrivateWin && ChatPrivateWin.newMsg(h)) {
                return
            }
        } catch (h) {
        }
        var f = Badge.get_ico_img(h.prop), g = Badge.get_ico_id(h.prop);
        var a = h.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
        a = ParseFaceSymobls(a);
        var c = h.prop.join(",").match(/7569|7570/);
        if (c || h.fid == page.rid) {
            a = ParseFaceSymobls(a, 1)
        }
        var d = h.mb > 0 ? '<a href="/event/liveClient/?t=phone" target="_blank" title="手机在线"><i class="phone"></i></a>' : "";
        if (h.fid == _puser.uid) {
            var i = [h.to, h.trid, h.tname, g.join("|"), h.tpriv];
            var b = '<span class="t">' + aptime.stoHoursEx(h.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span><a class="u">我</a> <span class="c9">对</span> <a href="#" user="' + i.join(",") + '" class="u">' + h.tname + '</a><span class="urid">[<em>' + h.trid + '</em>]</span> <span class="c9">说：</span><span class="con">' + a + "</span>"
        } else {
            if (Room.user.role == 6) {
                var b = '<span class="t">' + aptime.stoHoursEx(h.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span><a href="#" class="u">' + h.from + ' </a><span class="urid">[<em>' + h.frid + '</em>]</span> <span style="color:black"><a href="#" class="u">' + h.tname + '</a><span class="urid2">(' + h.trid + ')</span> <span class="c9">说：</span> <span class="con">' + a + "</span>"
            } else {
                var i = [h.fid, h.frid, h.from, g.join("|"), h.fpriv];
                var b = '<span class="t">' + aptime.stoHoursEx(h.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span>' + f + d + '<a href="#" class="u" user="' + i.join(",") + '">' + h.from + ' </a><span class="urid">[<em>' + h.frid + '</em>]</span> <span class="c9">对</span> <a class="u">我</a> <span class="c9">说：</span><span class="con">' + a + "</span>"
            }
        }
        this.visMsg_pri(b);
        if (this.only_chat.is_init) {
            this.only_chat.add_pri(b)
        }
        h = null
    },
    parseMsg: function (a) {
        this.add_list({str: a.content, e: a})
    },
    visMsg_pri: function (a) {
        jQuery("<li>", {
            "class": (/(game\.v|game|games)\.6\.cn/.test(a) ? "game-link" : ""),
            html: a
        }).appendTo(this.priveContainer);
        this.scrollTo_pri(1)
    },
    visMsg: function (e) {
        var d = (jQuery.type(e) != "array" ? [e] : e);
        for (var b = 0; b < d.length; b++) {
            var f = d[b], a = (f.cls || Room.chatList.textClass[(f.e && f.e.typeID) || "1212112"] || "");
            if (/(game\.v|game|games)\.6\.cn/.test(f.str)) {
                a += " game-link"
            }
            var c = document.createElement("li");
            c.className = a;
            c.innerHTML = f.str;
            if (this.only_chat.is_init && f.only) {
                this.only_chat.add_pub(c.cloneNode(true), f.e)
            }
            this.container[0].appendChild(c);
            c = null;
            f = null
        }
        e = null;
        d = null
    },
    onlyMsg: function (a, b) {
        this.add_list({str: a, e: {typeID: b || 10000}})
    },
    clearList: function (a) {
        var b = a == "pub" ? this.container : this.priveContainer;
        b[0].innerHTML = "";
        b = null
    },
    remove_list: function () {
        var a = Room.chatList, d = a.container[0].getElementsByTagName("li");
        if (d.length > 50) {
            var c = document.createDocumentFragment();
            for (var b = 0; b < d.length - 30; b++) {
                d[0].style.display = "none";
                c.appendChild(d[0])
            }
            c.innerHTML = "";
            c = null
        }
        setTimeout(a.remove_list, a.remove_delay);
        d = null;
        a = null
    },
    list_pub: [],
    vt: 0,
    add_list: function (a) {
        this.list_pub.push(a);
        clearTimeout(this.vt);
        this.vt = setTimeout(this.scrollTo_pub, 300)
    },
    scrollTo_pub: function () {
        var a = Room.chatList;
        if (a.list_pub.length > 0) {
            a.visMsg(a.list_pub);
            a.list_pub = []
        }
        if (Room.chat_tab == "all_chat" && a.rollAuto) {
            a.scrollBox[0].scrollTop = a.scrollBox[0].scrollHeight
        }
        a = null
    },
    scrollTo_pri: function () {
        if (!this.priveScrollBox) {
            return
        }
        this.priveScrollBox[0].scrollTop = this.priveScrollBox[0].scrollHeight
    },
    _initScrollBar: function () {
        this._scrollBarHideDelay = 90 * 1000;
        this._scrollBarShowDelay = 500;
        this._pubScrollBarHideTimer = null;
        this._pubScrollBarShowTimer = null;
        this._priScrollBarHideTimer = null;
        this._priScrollBarShowTimer = null;
        this._showPubScrollBar = jQuery.proxy(this._showScrollBar, this, 0);
        this._hidePubScrollBar = jQuery.proxy(this._hideScrollBar, this, 0);
        this._delayHidePubScrollBar = jQuery.proxy(this._delayHideScrollBar, this, 0);
        this._delayShowPubScrollBar = jQuery.proxy(this._delayShowScrollBar, this, 0);
        this._showPriScrollBar = jQuery.proxy(this._showScrollBar, this, 1);
        this._hidePriScrollBar = jQuery.proxy(this._hideScrollBar, this, 1);
        this._delayHidePriScrollBar = jQuery.proxy(this._delayHideScrollBar, this, 1);
        this._delayShowPriScrollBar = jQuery.proxy(this._delayShowScrollBar, this, 1);
        this._resizeStream = jQuery.proxy(this._resizeStream, this);
        this._hidePubScrollBar();
        this.scrollBox.bind("mouseenter", this._delayShowPubScrollBar).bind("mouseleave", this._delayHidePubScrollBar);
        if (this.priveScrollBox) {
            this._hidePriScrollBar();
            this.priveScrollBox.bind("mouseenter", this._delayShowPriScrollBar).bind("mouseleave", this._delayHidePriScrollBar)
        }
        jQuery(window).bind("resize", this._resizeStream);
        this._resizeStream(true)
    },
    _showScrollBar: function (a) {
        if (a) {
            clearTimeout(this._priScrollBarHideTimer);
            clearTimeout(this._priScrollBarShowTimer);
            this.priveScrollBox.css("overflow", "auto")
        } else {
            clearTimeout(this._pubScrollBarHideTimer);
            clearTimeout(this._pubScrollBarShowTimer);
            this.scrollBox.css("overflow", "auto")
        }
    },
    _hideScrollBar: function (a) {
        if (a) {
            clearTimeout(this._priScrollBarHideTimer);
            clearTimeout(this._priScrollBarShowTimer);
            this.priveScrollBox.css("overflow", "hidden")
        } else {
            clearTimeout(this._pubScrollBarHideTimer);
            clearTimeout(this._pubScrollBarShowTimer);
            this.scrollBox.css("overflow", "hidden")
        }
    },
    _delayShowScrollBar: function (a) {
        if (a) {
            this._priScrollBarShowTimer = setTimeout(this._showPriScrollBar, this._scrollBarShowDelay)
        } else {
            this._pubScrollBarShowTimer = setTimeout(this._showPubScrollBar, this._scrollBarShowDelay)
        }
    },
    _delayHideScrollBar: function (a) {
        if (a) {
            clearTimeout(this._priScrollBarShowTimer);
            this._priScrollBarHideTimer = setTimeout(this._hidePriScrollBar, this._scrollBarHideDelay)
        } else {
            clearTimeout(this._pubScrollBarShowTimer);
            this._pubScrollBarHideTimer = setTimeout(this._hidePubScrollBar, this._scrollBarHideDelay)
        }
    },
    _resizeStream: function (d) {
        var a;
        var b;
        var c;
        if (Room.chatList.ie6 && !d) {
            return
        }
        if (a = this.publicBox[0]) {
            jQuery(a).css("width", "auto");
            c = jQuery(a).width();
            c && jQuery(a).css("width", c - 20)
        }
        if (b = this.priveBox[0]) {
            jQuery(b).css("width", "auto");
            c = jQuery(b).width();
            c && jQuery(b).css("width", c - 20)
        }
    },
    only_chat: {
        user_fn: function (f) {
            var c = Room.chatList.only_chat, b = jQuery(f.target), h = b.attr("user");
            if (b.is("a") && h) {
                f.preventDefault();
                var d = h.split(",");
                h = {uid: d[0], rid: d[1], alias: d[2], ico: (d[3] && d[3].split("|") || []), role: d[4], pub: 1};
                Room.chatList.setCurUser(h);
                Room.userMenu.visible(b, h);
                c.rollChange(0)
            } else {
                if (b.hasClass("re")) {
                    var g = b.parent().html().replace(/<em.+?>.+?>/i, "");
                    WB.re.setCon(b[0], g)
                }
            }
        }, init: function (d) {
            this.is_init = 1;
            var a = this;
            this.pub_box = jQuery('<ul class="chatList"></ul>').appendTo(d.pub_box);
            this.pri_box = jQuery('<ul class="chatList"></ul>').appendTo(d.pri_box);
            this.pub_scroll = d.pub_box.parent().css("overflow", "hidden");
            this.pri_scroll = d.pri_box.parent().css("overflow", "hidden");
            this.tab_btn = d.tab_btn;
            this.tome_box = d.tome_box.find(".talk-tome-box").bind("visible hidden", function (e) {
                var f = jQuery(this);
                if (e.type == "visible") {
                    f.css("display", "block").stop().animate({height: 190}, 200, function () {
                        a.tome_btn.removeClass("talk-tome-new");
                        a.tome_btn.addClass("talk-tome-spreadopen");
                        f.data("state", "open")
                    })
                } else {
                    f.stop().animate({height: 0}, 200, function () {
                        f.data("state", "close").css("display", "none");
                        a.tome_btn.removeClass("talk-tome-spreadopen")
                    })
                }
            }).css({display: "none", height: 0});
            this.tome_btn = d.tome_box.find("div.talk-tome-spread").bind("click", function () {
                var e = a.tome_box.data("state") == "open" ? "hidden" : "visible";
                a.tome_box.trigger(e)
            });
            this.tome_list_box = jQuery('<ul class="chatList"></ul>').appendTo(this.tome_box.find("div.stream")).on("click", "a,em", this.user_fn);
            this.pub_box.on("click", "a,em", this.user_fn);
            d.pub_hand.css({visibility: "visible", opacity: 1}).bind("visible hidden mouseenter", function (f) {
                switch (f.type) {
                    case"visible":
                        jQuery(this).show();
                        break;
                    case"hidden":
                        jQuery(this).hide();
                        break;
                    case"mouseenter":
                        jQuery(this).show()
                }
            });
            var b = 0;
            this.pub_scroll.bind("mouseenter", function () {
                d.pub_hand.trigger("visible");
                var e = jQuery(this);
                clearTimeout(b);
                b = setTimeout(function () {
                    e.css("overflow", "auto")
                }, 500)
            }).bind("mouseleave", function () {
                d.pub_hand.trigger("hidden");
                var e = jQuery(this);
                clearTimeout(b);
                b = setTimeout(function () {
                    e.css("overflow", "hidden")
                }, 5000)
            });
            d.pub_hand.find(".clearListBtn").bind("click", function () {
                a.clearList("pub")
            });
            this.rollBtn = d.pub_hand.find("span.rollPauseBtn").bind("click", this.rollChange);
            this.pri_box.on("click", "a, .to-chat-pri", function (i) {
                var h = jQuery(i.target), j = h.attr("user");
                if (j) {
                    i.preventDefault();
                    var g = j.split(",");
                    j = {uid: g[0], rid: g[1], alias: g[2], ico: (g[3] && g[3].split("|") || []), role: g[4], pri: 1};
                    Room.chatList.setCurUser(j);
                    Room.userMenu.visible(h, j)
                } else {
                    if (h.hasClass("to-chat-pri")) {
                        var f = h.siblings("a[user]").attr("user").split(",");
                        ChatPrivateWin.open({alias: f[2], uid: f[0]})
                    }
                }
            });
            d.pri_hand.hide().css({visibility: "visible", opacity: 1}).bind("visible hidden mouseenter", function (f) {
                switch (f.type) {
                    case"visible":
                        jQuery(this).show();
                        break;
                    case"hidden":
                        jQuery(this).hide();
                        break;
                    case"mouseenter":
                        jQuery(this).show()
                }
            });
            var c = 0;
            this.pri_scroll.bind("mouseenter", function () {
                var e = jQuery(this);
                clearTimeout(c);
                c = setTimeout(function () {
                    e.css("overflow", "auto")
                }, 500);
                if (!_puser.uid) {
                    return
                }
                d.pri_hand.trigger("visible")
            }).bind("mouseleave", function () {
                d.pri_hand.trigger("hidden");
                var e = jQuery(this);
                clearTimeout(c);
                c = setTimeout(function () {
                    e.css("overflow", "hidden")
                }, 5000)
            });
            d.pri_hand.find(".clearListBtn").bind("click", function () {
                a.clearList("pri")
            });
            Room.userMenu.add_hid_fn({
                only_chat: function () {
                    Room.chatList.only_chat.rollChange(1)
                }
            });
            d.bar.bind("mousedown", function (k) {
                var g = parseInt(d.pri_hand.css("bottom")), f = parseInt(a.pub_scroll.css("height")), j = parseInt(a.pri_scroll.css("height")), i = parseInt(d.bar.css("bottom"));
                var h = a.pub_scroll.attr("min") / 1;
                jQuery(document).bind("mousemove", function (m) {
                    var l = m.pageY - k.pageY, n = l + f, e = -l + j;
                    if (n < 150 || e < 50) {
                        return
                    }
                    d.bar.css("bottom", -l + i);
                    d.pri_hand.css("bottom", g - l);
                    a.pub_scroll.css("height", n);
                    a.pri_scroll.css("height", e)
                });
                jQuery(document).bind("mouseup", function () {
                    jQuery(document).unbind("mousemove");
                    jQuery(document).unbind("mouseup")
                });
                return false
            })
        }, ct: 0, msg_count: 0, add_pub: function (c, d) {
            this.pub_box.append(c);
            if (d.toid == _puser.uid) {
                this.tome_box.find("p.talk-none").remove();
                this.tome_list_box.append(c.cloneNode(true));
                if (this.tome_box.data("state") == "open") {
                    this.tome_box[0].scrollTop = this.tome_box[0].scrollHeight
                } else {
                    this.tome_btn.addClass("talk-tome-new")
                }
                if (_puser.uid != page.rid && Room.chat_tab != "only_chat") {
                    this.tab_btn.addClass("flash")
                }
            }
            clearTimeout(this.ct);
            this.ct = setTimeout(this.pub_scrolling, 300);
            if (++this.msg_count > 150) {
                var b = document.createDocumentFragment();
                for (var a = 30; a < this.msg_count; a++) {
                    var c = this.pub_box[0].firstChild;
                    c.style.display = "none";
                    b.appendChild(c)
                }
                b.innerHTML = "";
                b = null;
                this.msg_count = 30
            }
        }, add_pri: function (a) {
            this.pri_box.append(jQuery("<li/>").html(a));
            this.pri_scroll[0].scrollTop = this.pri_scroll[0].scrollHeight
        }, pub_scrolling: function () {
            var a = Room.chatList.only_chat;
            if (Room.chat_tab != "only_chat" || !a.rollAuto) {
                return
            }
            a.pub_scroll[0].scrollTop = a.pub_scroll[0].scrollHeight
        }, clearList: function (b) {
            var a = Room.chatList.only_chat, c = b == "pub" ? a.pub_box : a.pri_box;
            c.empty();
            c = null;
            this.msg_count = 0
        }, rollAuto: 1, rollChange: function (b) {
            var a = Room.chatList.only_chat;
            if (b === 0) {
                a.rollAuto = 0;
                return
            } else {
                if (b === 1) {
                    if (!a.rollBtn.hasClass("rollAutoBtn")) {
                        a.rollAuto = 1
                    }
                    return
                } else {
                    a.rollAuto = a.rollAuto === 1 ? 0 : 1
                }
            }
            if (a.rollAuto) {
                a.rollBtn.removeClass("rollAutoBtn")
            } else {
                a.rollBtn.addClass("rollAutoBtn")
            }
        }
    }
};
var UserListMain = {
    attachRoom: function () {
        Room.Msg.set_getback({
            403: function (a) {
                Room.userList.parseList(a)
            }, 407: function (a) {
                Room.userList.parseList(a)
            }, 413: function (a) {
                Room.userList.get(a)
            }
        })
    },
    minCount: 50,
    content: [],
    getP: 0,
    userCount: 0,
    isOver: 0,
    isOver2: 0,
    isAlled: 0,
    icos: {
        "7829": '<a href="/profile/weekStar.php?rid=' + page.roomid + '" title="抢星达人高级徽章" target="_blank">' + GetPix(Pres["7829"].cls) + "</a>",
        "7828": '<a href="/profile/weekStar.php?rid=' + page.roomid + '" title="抢星达人中级徽章" target="_blank">' + GetPix(Pres["7828"].cls) + "</a>",
        "7827": '<a href="/profile/weekStar.php?rid=' + page.roomid + '" title="抢星达人初级徽章" target="_blank">' + GetPix(Pres["7827"].cls) + "</a>",
        "7122": '<a href="/event/service/loveadmin.php" title="爱心管理" target="_blank">' + GetPix(Pres["7122"].cls) + "</a>",
        "7570": '<a href="/user/prop/showBuyProp.php?rid=' + page.rid + '" title="黄金守护" target="_blank">' + GetPix(Pres["7570"].cls) + "</a>",
        "7569": '<a href="/user/prop/showBuyProp.php?rid=' + page.rid + '" title="白银守护" target="_blank">' + GetPix(Pres["7569"].cls) + "</a>",
        "7103": '<a href="/user/shopprop.php?pxuid=&pgpid=0" title="超级VIP" target="_blank">' + GetPix(Pres["7103"].cls + " userLevelSmall") + "</a>",
        "7104": '<a href="/user/shopprop.php?pxuid=&pgpid=0" title="至尊VIP" target="_blank">' + GetPix(Pres["7104"].cls + " userLevelSmall") + "</a>",
        "7105": '<a href="/user/shopprop.php?pxuid=&pgpid=0" title="VIP" target="_blank">' + GetPix(Pres["7105"].cls + " userLevelSmall") + "</a>",
        "7559": '<a href="/user/shopprop.php?pxuid=&pgpid=0&ptype=lvcard" title="绿卡" target="_blank">' + GetPix(Pres["7559"].cls) + "</a>",
        "7859": '<a href="/user/shopprop.php?pxuid=&pgpid=0&ptype=lvcard" title="黄卡" target="_blank">' + GetPix(Pres["7859"].cls) + "</a>",
        "7112": GetPix("isGuan", "官方管理"),
        "7116": 1,
        "7117": 2,
        "7118": 3,
        "7119": 4,
        "7120": 5
    },
    get: function (b) {
        var a = b.content;
        b = null;
        jQuery.ajax({
            dataType: "json",
            url: "/room/getRoomList.php",
            data: {id: page.rid, tm: a},
            success: this.getback
        })
    },
    getback: function (a) {
        if (a.flag == "001") {
            Room.userList.parseList(a.content);
            a = null
        } else {
        }
    },
    parseList: function (a) {
        if (this.isAlled) {
            return
        }
        if (this.isOver2) {
            return
        }
        if (a.typeID == "407") {
            this.isAlled = 1;
            if (this.isAlled_t) {
                clearTimeout(this.isAlled_t)
            }
            this.isAlled_t = setTimeout(function () {
                Room.userList.isAlled = 0
            }, 30 * 1000)
        }
        this.userCount = a.num;
        this.content = a.content;
        if (!this.content) {
            return
        }
        if (!this.content.all) {
            this.content = {all: [], liv: [], adm: []}
        }
        if (Room.Army) {
            Room.Army.parse_list(a.content.group)
        }
        this.getList();
        a = null
    },
    parseUser: function (M) {
        var i = M.priv.split("|"), z = Number(i[0]), A = Number(i[1]), N = Number(i[2]), c = i[3], r = Number(i[4]), l = Number(i[5]), q = i[6], m = i[7], H = i[11], k = i[12], G = i[13], p = "name-def";
        if (z == 6) {
            return {sf: z}
        }
        var J = "", o = "", E, F;
        switch (N) {
            case 1:
                o = "deSay";
                break;
            case 2:
            case 6:
                break
        }
        if (z == 1) {
            J = '<span class="youke">' + M.uname + "</span>"
        } else {
            var E = {uid: M.uid, alias: M.uname, rid: M.urid, dj: m, army: M.g, role: z};
            var s = (!Room.test_rid(M.urid) && z != 9) ? "" : '<em class="rid-def">' + M.urid + "</em>";
            var b = "", g = "", O = 0, C = "", a = "", y = "", K = "", B = "";
            var u = {
                "7829": 0,
                "7828": 0,
                "7827": 0,
                "7122": 0,
                "7569": 0,
                "7570": 0,
                "7103": 0,
                "7104": 0,
                "7105": 0,
                "7559": 0,
                "7859": 0,
                "7112": 0,
                "7116": 0,
                "7117": 0,
                "7118": 0,
                "7119": 0,
                "7120": 0
            };
            if (q && q != "") {
                var d = q.split("-");
                for (var I = 0; I < d.length; I++) {
                    var D = d[I];
                    u[D] = this.icos[D]
                }
                var y = u["7570"] || u["7569"] || "", K = u["7122"] || "", b = u["7103"] || u["7104"] || u["7105"] || "", C = u["7559"] || "", a = u["7859"] || "", g = u["7112"] || "", O = u[7116] || u[7117] || u[7118] || u[7119] || u[7120] || "", B = u["7827"] || u["7828"] || u["7829"] || ""
            }
            var t = l ? '<a href="/user/payshow.php?pxuid=' + M.uid + '" title="六币销售" target="_blank">' + GetPix("isShou" + l) + "</a>" : "", p = z == 8 ? 'class="name-xg"' : 'class="name-def"';
            var h = "", G = G.split("-");
            if (G[1] == 2) {
                h = '<a href="/family/rewriteIndex.php?id=' + G[0] + '" title="家族" target="_blank"><img src="http://vi0.6rooms.com/live/family/' + G[0] + '.png" class="flogo" /></a>'
            } else {
                if (G[1] == 3) {
                    h = '<a href="/a/' + G[0].replace(/^.+\//, "").split("_")[0] + '" title="军团" target="_blank"><em class="army_level army-rank' + G[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + G[0] + '.png)"><i class="army' + G[2] + '"></i><b></b></em></a>'
                }
            }
            if (m > 26) {
                p = 'class="name-26"'
            } else {
                if (m > 25) {
                    p = 'class="name-25"'
                }
            }
            var f = "";
            if (r) {
                E.isNote = 1;
                f = GetPix("iNote " + Notes.ns[r].cls)
            }
            if (z == 8) {
                A = 0;
                t = GetPix("xunIco")
            }
            var L = z / 1 == 10 ? '<i title="房间总管" class="manage"></i>' : "";
            var v = O ? '<i class="rich' + m + " rich-" + M.uid + '"><img src="http://vr1.6.cn/imges/live/levelFlash_v5/s' + O + '.gif" /></i>' : '<i class="rich' + m + " rich-" + M.uid + '"></i>';
            v = m > 0 ? '<a href="/event/help/index.php?type=02" title="财富等级" target="_blank">' + v + "</a>" : v;
            k = parseInt(k) > 0 ? '<a target="_blank" href="/event/liveClient/?t=phone" title="手机在线"><i class="phone"></i></a>' : "";
            J = f + '<p class="honor">' + v + g + t + b + C + a + y + B + K + L + s + '</p><p class="user">' + h + k + "<em " + p + ">" + M.uname + "</em></p>";
            var n = "", F = "";
            n = A > 0 ? '<a href="/event/help/index.php?type=01" title="主播等级" target="_blank">' + GetPix("star" + A) + "</a>" : "";
            F = f + '<p class="honor">' + n + g + t + b + C + a + y + B + K + s + '</p><p class="user">' + h + k + "<em " + p + ">" + M.uname + "</em></p>";
            E.ico = Badge.get_ico_id(q.split("-"))
        }
        M = null;
        return {sf: z, cls: o, str: J, star_str: F, user: E}
    },
    getAllUser: function (a) {
        jQuery(a).addClass("userList-loading").find("span").html("<i></i>加载中...");
        Room.Msg.send("priv_alllist", {g: ""});
        a = null
    },
    clearList: function (a) {
        try {
            a.innerHTML = ""
        } catch (b) {
        }
        a = null
    },
    mouseenter: function (a) {
        var b;
        if (Room.userMenu.vis) {
            Room.userMenu.visible(a);
            return
        }
        if (b = Room.userMenu.timer) {
            clearTimeout(b)
        }
        Room.userMenu.timer = setTimeout(function () {
            Room.userMenu.visible(a)
        }, 500)
    },
    mouseleave: function () {
        clearTimeout(Room.userMenu.timer);
        Room.userMenu.iHidden()
    },
    click: function (a) {
        var b = Room.listUsers[a.id];
        Room.Call("chatList.setCurUser", b);
        b = null
    }
};
Room.Msg.set_getback({
    401: function (a) {
        if (Room._fans_list) {
            Room._fans_list(a.content)
        }
    }
});
Room.Msg.set_getback({
    414: function (a) {
        if (Room._fans_list) {
            jQuery.getJSON("/room/getRoomFans.php", {id: page.rid, t: a.content}, function (b) {
                Room.Msg.get(b)
            })
        }
    }
});
Room.present = {
    attachRoom: function () {
        Room.Msg.set_getback({
            201: function (a) {
                Room.present.parseGet.parse(a);
                if (window.Rank_msg) {
                    Rank_msg.master_up(a)
                }
            }, 1201: function (a) {
                Room.freeGifts = a.content;
                Room.present.preBox.parseFreeGift()
            }, 1202: function (a) {
                customGift = a.content;
                Room.present.preBox.getCustom()
            }, 518: function (a) {
                Room.Call("GiftSuper.toSwf", {id: a.content.propid, num: 1, alias: a.content.alias, isSuit: 0, msg: ""})
            }, 531: function (b) {
                var a = '<font color="#ff0000">' + b.content.armyName + '赠送</font><br><font color="#49016B">' + b.content.num + "个<br>" + Pres[b.content.item].title + "</font>";
                Room.Call("GiftSuper.toSwf", {id: b.content.propid, num: 1, alias: a, isSuit: 0})
            }
        });
        Room.Msg.set_callback({
            prop_prop: function (a) {
                Room.present.callback(a)
            }
        })
    },
    toUsers: {},
    num: 0,
    gid: 0,
    tou: 0,
    giftOther: {
        "7500": "本家族",
        "98": "房主和房管",
        "99": "房内注册玩家",
        "430": "房主和房内注册玩家",
        "515": "房主和房内注册玩家",
        "571": "房主和军团成员",
        "7821": "当前主播",
        "7822": "当前主播",
        "7823": "当前主播"
    },
    show_test: function (a) {
        return !this.show_gifts || jQuery.inArray(a, this.show_gifts) > -1
    },
    init: function (a) {
        this.needTo = a.needTo === 0 ? 0 : 1;
        this.preSubmit = a.sendBtn;
        this.preBtn = a.giftBtn;
        this.preNum = a.giftNum;
        this.preTo = a.toUser;
        this.preTo.val("");
        this.preTo[0].readOnly = true;
        this.preBtn.bind("click", function (c) {
            c.preventDefault();
            c.stopPropagation();
            Room.present.preBox.vis ? Room.present.preBox.iHidden() : Room.present.preBox.visible(this)
        });
        this.preNum.bind("focus", function () {
            jQuery(this).addClass("input_focus");
            this.select()
        }).bind("blur", function () {
            jQuery(this).removeClass("input_focus")
        });
        this.preSubmit.bind("click", this.preCheck);
        this.createGiftBox();
        this.userSug = new Input_sug({
            callback: this.changeUser,
            input: this.preTo,
            posBox: a.posBox,
            btn: jQuery("#to_select_gifts")
        });
        this.preNum.on("change", function () {
            if (Room.present.gift_type == 3) {
                Room.present.custom_id = 0
            }
        });
        if (page.gameUsers && jQuery.type(page.gameUsers) == "array") {
            for (var b = 0; b < page.gameUsers.length; b++) {
                this.setTou(page.gameUsers[b])
            }
        } else {
            if (!this.needTo && page.masterName) {
                this.setTou({uid: page.rid, alias: page.masterName})
            }
        }
        this.attachRoom();
        this.anonym_checkbox = jQuery("#anonBox input");
        if (this.anonym_checkbox.length > 0) {
            this.anonym_init()
        }
        if (jQuery("#watchGift").length > 0) {
            Room.get_gifts_list.init()
        }
    },
    anonym_init: function () {
        var b = jQuery("#anonBox"), a = jQuery("#anonym_btn"), d = function (f) {
            var e = f.target;
            if (!e) {
                return
            }
            while (e.tagName.toLowerCase() != "body") {
                if (e == b[0] || e == a[0]) {
                    return
                }
                e = e.parentNode
            }
            b.fadeOut(200);
            jQuery(document.body).unbind("click", d)
        };
        a.bind("click", function (f) {
            f.preventDefault();
            if (b.css("display") == "none") {
                b.fadeIn(200);
                jQuery(document.body).bind("click", d)
            } else {
                b.fadeOut(200);
                jQuery(document.body).unbind("click", d)
            }
        });
        var c = this.preSubmit.find("i");
        this.anonym_checkbox.bind("click", function () {
            c.css("display", this.checked ? "block" : "none")
        })
    },
    alert: function (a) {
        Prompt.alert(a)
    },
    set_gift: function (a, b) {
        this.preBox.visible(a, b)
    },
    giftReinit: function () {
        if (this.preBox.isInit) {
            this.privateGifts()
        }
    },
    privateGifts: function () {
        if (typeof(page.privateGifts) == "undefined") {
            return
        }
        var a = page.privateGifts;
        for (var c = 0; c < a.length; c++) {
            if (!Pres[a[c].id]) {
                continue
            }
            var b = Room.present.preBox.panel.find(".gift_big_" + a[c].id).parent();
            if (parseInt(a[c].value) == 0) {
                b.css("display", "none")
            } else {
                b.css("display", "inline")
            }
        }
    },
    test_gift: function (a) {
        if (!this.preNum.data("gid")) {
            this.preBox.visible(a)
        }
    },
    select_gift: function (c, d) {
        var b = {1: 0, 2: 1, 3: 2, 4: 3, 5: 7, 6: 4, 8: 5, 9: 8, 11: 9, 12: 6}, a = Pres[c].u;
        this.preBox.visible(this.preBtn);
        this.preBox.tab_change(b[a]);
        _btn = this.preBox.panel.find(".gifts-list li[gid=" + c + "]");
        _btn.click();
        if (d) {
            setTimeout(function () {
                Room.present.preBox.visible(Room.present.preBtn)
            }, 0)
        }
    },
    createGiftBox: function () {
        this.preBox = {};
        var b = [{item: 1, title: "初级", c: "n1"}, {item: 2, title: "中级", c: "n2"}, {
            item: 3,
            title: "高级",
            c: "n3"
        }, {item: 4, title: "豪华", c: "n4"}, {item: 6, title: "特殊", c: "n5"}, {
            item: 8,
            title: "趣味",
            c: "pets"
        }, {item: 12, title: "伴舞", c: "dancer"}, {item: 5, title: "贵族", c: "n6"}, {
            item: 9,
            title: "套礼",
            c: "suit"
        }, {item: 11, title: "守护", c: "safe"}, {item: "free", title: "库存", c: "freeBtn"}];
        var a = jQuery("#room_gift_panel");
        this.preBox.panel = jQuery('<div class="gifts-box" data-tracing="iqg9rubt">', {html: '<div class="content"></div>'}).css({visibility: "hidden"}).appendTo(a[0] && a || document.body);
        this.preBox.dev = jQuery.proxy(this.preBox._dev, this.preBox);
        jQuery.extend(this.preBox, {
            isInit: 0, vis: 0, num: 0, gid: 0, btn: null, cur: 0, tab_change: function (e) {
                var f = this.cur;
                if (e == f) {
                    return false
                }
                var d = this.btns, c = this.boxs;
                d.eq(f).removeClass("on");
                c.eq(f).css("display", "none");
                d.eq(e).addClass("on");
                c.eq(e).css("display", "block");
                this.cur = e;
                if (_puser.uid) {
                    if (d.eq(e).text() == "守护" && !Room.user.safe) {
                        Room.User_safe.on_notsafe()
                    }
                    if (d.eq(e).text == "贵族" && _puser.rich < 11) {
                        Prompt.create({content: "您的等级没有达到“男爵”，不能赠送贵族礼物。", btn_sure: {text: "我知道了"}})
                    }
                }
                this.jsscroll();
                return false
            }, jsscroll: function () {
                if (!this.is_set_scroll) {
                    try {
                        this.panel.find("div.gifts-list:eq(0)").jsscroll();
                        this.is_set_scroll = 1
                    } catch (c) {
                    }
                } else {
                    this.panel.find(".gifts-list:eq(0)").jsscroll_remake()
                }
            }, init: function () {
                var l = [], f = [];
                jQuery.each(b, function () {
                    var i = this;
                    l.push('<ul class="gift fix"></ul>');
                    f.push('<li class="' + i.c + '"><a href="">' + i.title + '<i></i></a><i class="line"></i></li>')
                });
                this.panel.find("div.content").remove();
                this.panel.html('<div class="gifts-tab"><ul>' + f.join("") + '</ul></div><div class="gifts-list">' + l.join("") + "</div>");
                if (jQuery("#user_safe").length < 1) {
                    this.panel.find("li.safe").css("display", "none")
                }
                this.panel.attr("class", "gifts-box gifts-box-float");
                _btns = this.panel.find("a"), _pbox = {}, _boxs = this.panel.find("ul.gift");
                _btns.eq(this.cur).addClass("on");
                _boxs.eq(this.cur).css("display", "block");
                var k = this;
                jQuery.each(b, function (n) {
                    var o = this;
                    _pbox[o.item] = _boxs.eq(n);
                    _btns.eq(n).bind("click", jQuery.proxy(k.tab_change, k, n))
                });
                if (page.notPet) {
                    this.panel.find("li.pets").css("display", "none")
                }
                this.btns = _btns;
                this.boxs = _boxs;
                if (Room.user404.appointProp.length > 0) {
                    jQuery.each(Room.user404.appointProp, function (n, o) {
                        if (Pres[o]) {
                            Pres[o].u = 6
                        }
                    })
                }
                var j = [];
                if (page.birthday > 0) {
                    Pres["539"].u = 6
                }
                for (var c in Pres) {
                    if (!Pres[c].isTop) {
                        Pres[c].isTop = 0
                    }
                    if (!Pres[c].u || Pres[c].u == 10) {
                        continue
                    }
                    j.push(Pres[c]);
                    if (!Pres[c].gold) {
                        Pres[c].gold = 5000000
                    }
                }
                j.sort(function (n, i) {
                    if (n.isTop || i.isTop) {
                        return i.isTop - n.isTop
                    } else {
                        if (n.gold == i.gold) {
                            return n.id - i.id
                        } else {
                            return n.gold - i.gold
                        }
                    }
                });
                var m = [], h = [];
                for (var d = 0; d < j.length; d++) {
                    var e = j[d];
                    var g = this.getLi(e);
                    if (!_pbox[e.u]) {
                        continue
                    }
                    _pbox[e.u][0].appendChild(g);
                    if (e.isNew == 1) {
                        m[e.u] = 1
                    }
                }
                this.freeBox = _pbox.free;
                _pbox = null;
                jQuery.each(b, function (n) {
                    var o = this;
                    h[o.item] = _btns.eq(n);
                    if (m[o.item] == 1) {
                        h[o.item].append('<span class="new"></span>')
                    }
                });
                this.isInit = 1;
                this.parseFreeGift();
                Room.present.privateGifts();
                this.panel.find(".gifts-list").on("click mouseenter mouseleave", "li", function (n) {
                    var i = jQuery(this), o = Pres[i.attr("gid")];
                    if (n.type == "click") {
                        Room.present.preBox.selGift(o);
                        try {
                            Room.present.gifts_selected.removeClass("selected")
                        } catch (n) {
                        }
                        i.addClass("selected");
                        Room.present.gifts_selected = i
                    } else {
                        if (n.type == "mouseenter") {
                            if (o.id == 652) {
                                wsug(n, o.tip ? (o.gold ? "价格：" + o.gold + "个银币" + o.tip : o.tip.replace("<br/>", "")) : ("价格：" + o.gold + "个银币"))
                            } else {
                                wsug(n, o.tip ? (o.gold ? "价格：" + o.gold + "个六币" + o.tip : o.tip.replace("<br/>", "")) : ("价格：" + o.gold + "个六币"))
                            }
                            i.addClass("on")
                        } else {
                            wsug("", 0);
                            i.removeClass("on")
                        }
                    }
                });
                this.dev = jQuery.proxy(this._dev, this);
                this.getCustom()
            }, getCustom: function () {
                var c = this;
                jQuery.ajax({
                    cache: true,
                    dataType: "jsonp",
                    url: customGift,
                    jsonp: "callback",
                    jsonpCallback: "getCustomGift",
                    success: function (d) {
                        c.parseCustom(d)
                    }
                })
            }, parseCustom: function (f) {
                var j = [];
                jQuery.each(b, function (l) {
                    var m = this;
                    j[m.item] = _boxs.eq(l)
                });
                jQuery.each(f, function (l, m) {
                    _boxs.find(".gift_big_" + m.id).parents("li").remove()
                });
                var e = f, h = [];
                jQuery.each(e, function (l, m) {
                    _boxs.find(".gift_big_" + m.id).parents("li").remove()
                });
                for (var k in e) {
                    jQuery.extend(Pres[k], e[k]);
                    h.push(Pres[k]);
                    if (!Pres[k].gold) {
                        Pres[k].gold = 5000000
                    }
                }
                h.sort(function (l, i) {
                    if (l.isTop == i.isTop) {
                        return l.gold - i.gold
                    } else {
                        return Number(l.isTop) - Number(i.isTop)
                    }
                });
                for (var c = 0; c < h.length; c++) {
                    var g = h[c];
                    var d = this.getLi(g);
                    if (!j[g.u]) {
                        continue
                    }
                    j[g.u].eq(0).prepend(d)
                }
                j = null;
                this.jsscroll()
            }, parseFreeGift: function () {
                if (!this.isInit) {
                    return
                }
                var j = (jQuery.type(Room.freeGifts) == "array" || !Room.freeGifts) ? {} : Room.freeGifts, d = [];
                for (var h in j) {
                    if (j[h] < 1) {
                        continue
                    }
                    d.push({id: h, count: j[h]})
                }
                this.freeBox.empty();
                if (d.length < 1) {
                    this.freeBox.innerHTML = '<li class="gift_empty" style="width:auto; cursor:default; text-indent:15px; ">当前没有库存礼物！您可以在 <a href="/event/games/luck.php" target="_blank">幸运魔方</a> 中抽取库存礼物。</li>'
                } else {
                    d.sort(function (k, i) {
                        try {
                            if (!Pres[k.id]) {
                                return 0
                            } else {
                                return (Pres[k.id].gold || 0) - (Pres[i.id].gold || 0)
                            }
                        } catch (l) {
                        }
                    });
                    for (var f = 0; f < d.length; f++) {
                        var e = d[f].id, g = Pres[e];
                        if (!g) {
                            console.log("礼物不存在id=" + e)
                        }
                        var c = this.getLi(g);
                        this.freeBox[0].appendChild(c);
                        c = null;
                        if (g._tip || g._tip === "") {
                        } else {
                            if (g.tip) {
                                g._tip = g.tip
                            } else {
                                g._tip = ""
                            }
                        }
                        jQuery.extend(g, {tip: (g._tip) + "<br>剩余：" + d[f].count + "个", mf: 1})
                    }
                }
                j = null;
                d = null
            }, getLi: function (e) {
                var c = document.createElement("li"), d = (e.isNew == 1) ? '<i class="new"></i>' : "";
                c.innerHTML = '<i class="gift-big gift_big_' + e.id + '"></i><span>' + e.title + "</span>" + d;
                c.className = "gid-" + e.id;
                c.setAttribute("gid", e.id);
                if (e.pri) {
                    c.style.display = "none"
                }
                return c
            }, selGift: function (f) {
                wsug("", 0);
                var g = Room.present;
                g.preNum.data("gid", f.id);
                g.preNum.data("mf", f.mf || 0);
                if ((!Room.GiftShape.hasShape(g.preNum.val() / 1) && g.gift_type != 3) || g.giftOther[f.id] || (f.ns || f.f)) {
                    g.preNum.val(1);
                    g.gift_type = 1;
                    g.custom_id = 0
                }
                this.iHidden();
                var c = g.giftOther;
                if (c[f.id]) {
                    g.preTo.data("uid", 0);
                    g.preTo.val(c[f.id])
                } else {
                    var e = g.preTo.val();
                    for (var d in c) {
                        if (e == c[d]) {
                            g.preTo.val("");
                            break
                        }
                    }
                }
                g.preBtn.text(f.title);
                if (f.id == "599") {
                    g.setTou({uid: page.rid, alias: page.masterName});
                    g.preNum.val(1)
                }
                Room.GiftShape.setState(!(f.ns || f.f));
                f = null
            }, visible: function (c, h) {
                if (this.btn && this.btn[0] == jQuery(c)[0]) {
                    return this.iHidden()
                }
                this.btn = jQuery(c);
                var g = Room.present;
                if (jQuery("#room_gift_panel").length < 1) {
                    var f = g.preBtn.offset();
                    var d = 0;
                    var e = 160;
                    if (page.tpl == "wmp") {
                        d = 300;
                        e = 180
                    } else {
                        if (page.tpl == "voice") {
                            d = 85;
                            e = 195
                        }
                    }
                    this.panel.css({left: f.left - d, top: f.top - e})
                }
                if (!this.isInit) {
                    this.init()
                }
                this.panel.css({visibility: "visible"});
                if (/\d/.test(h)) {
                    this.tab_change(h)
                }
                this.vis = 1;
                jQuery(document).bind("click", this.dev);
                this.jsscroll()
            }, iHidden: function () {
                if (this.gifts_vis) {
                    return
                }
                this.btn = null;
                this.panel.css({visibility: "hidden"});
                this.vis = 0;
                jQuery(document).unbind("click", this.dev)
            }, _dev: function (d) {
                var c = d.target;
                if (!jQuery.contains(this.panel[0], c) && c != this.panel[0]) {
                    this.iHidden()
                }
            }
        })
    },
    setGift: function (a) {
        if (this.gift_type == 4) {
            this.preBtn.text("礼物宝箱")
        }
        this.preNum.val(a.count);
        this.custom_id = a.custom_id;
        this.gift_type = a.gift_type;
        if (a.gift_type == 4) {
            this.preBtn.text("个性礼包");
            try {
                this.gifts_selected.removeClass("selected")
            } catch (b) {
            }
        }
    },
    setTou: function (a) {
        this.userSug.addItem(a);
        this.changeUser(a)
    },
    changeUser: function (a) {
        Room.present.preTo.val(a.alias);
        Room.present.preTo.data("uid", a.uid)
    },
    disabled: function () {
        this.preSubmit.prop("disabled", true);
        this.preBtn.prop("disabled", true);
        this.preNum.prop("disabled", true)
    },
    preCheck: function (e) {
        e.preventDefault();
        if (!pageMessage.userCheck) {
            return Login.toLogin()
        }
        var g = Room.present;
        if (g.preSubmit.hasClass("disabled")) {
            return false
        }
        if (g.preTo.val() == "" || g.preTo.val() == "选择选手") {
            g.alert("请选择发送对象！");
            return
        }
        var f = g.preNum;
        var c = f.val(), d = f.data("gid");
        if (g.gift_type != 4 && !/^\d+$/.test(d)) {
            g.alert("请选择礼物！");
            return
        }
        if (d == 536 && page.liveType < 1) {
            Prompt.alert("操作失败，直播未开始不允许送“上头条”礼物");
            return
        }
        if (g.giftOther[d] && g.preTo.data("uid")) {
            g.alert(Pres[d].title + "只能送给" + g.giftOther[d] + "！\n请选择其他礼物！");
            return
        }
        if (!/^\d+$/.test(c)) {
            g.alert("数量错误！");
            f[0].focus();
            f[0].select();
            return
        }
        g.gid = d;
        g.num = c;
        g.mf = g.preNum.data("mf") || 0;
        g.tou = g.preTo.data("uid");
        _custom_id = g.custom_id;
        var a = g.anonym_checkbox && g.anonym_checkbox.prop("checked") ? 1 : 0;
        var b = g.gift_type;
        g.readySend({gift_type: b, gid: g.gid, num: g.num, mf: g.mf, to: g.tou, custom_id: _custom_id, anonym: a})
    },
    readySend: function (b) {
        if (Pres[b.gid] && Pres[b.gid].w) {
            var c = this;
            var a = Pres[b.gid].w == 1 ? "文字" : Pres[b.gid].w;
            Prompt.create({
                btn_sure: {text: "确定"},
                btn_cancel: {text: "取消"},
                onCreateAfter: function (d) {
                    Prompt.box.find("textarea").focus()
                },
                onSubmit: function () {
                    var d = Prompt.box.find("textarea").val();
                    if (d.len() > 50) {
                        alert("输入内容请不要超过25个字");
                        return 0
                    } else {
                        return 1
                    }
                },
                content: '<div class="popGiftMod"><p>请输入' + a + ':<span>(限25个字以内)</span></p><textarea name="custom"></textarea></div>',
                callback: function (d) {
                    if (d) {
                        b.custom_w = Prompt.box.find("textarea").val();
                        c.send(b)
                    }
                }
            })
        } else {
            this.send(b)
        }
    },
    send: function (a) {
        this.preSubmit.addClass("disabled");
        setTimeout(function () {
            Room.present.preSubmit.removeClass("disabled")
        }, 500);
        if (this.preSubmit.hasClass("mtest")) {
            Room.present.parseGet.parse({
                typeID: 201,
                tm: 1393311706,
                fid: _puser.uid,
                frid: _puser.rid,
                from: _puser.nickname,
                to: page.masterName,
                tid: page.rid,
                trid: page.roomid,
                sp: "",
                wealthRank: 23,
                wealthLate: 5072382,
                coin6Rank: 26,
                coin6Late: 250048466,
                prop: [],
                tprop: [],
                content: {item: a.gid, num: a.num, msg: "", shape: ""}
            })
        } else {
            if (a.gift_type == 4) {
                Room.Msg.send("prop_shape", {
                    t: a.to,
                    ak: page.authKey,
                    r: page.rid,
                    i: a.gid,
                    n: a.num,
                    f: a.mf,
                    m: a.custom_w,
                    y: a.custom_id,
                    anonym: (a.anonym || 0)
                })
            } else {
                Room.Msg.send("prop_prop", {
                    t: a.to,
                    ak: page.authKey,
                    r: page.rid,
                    i: a.gid,
                    n: a.num,
                    f: a.mf,
                    m: a.custom_w,
                    y: a.custom_id,
                    anonym: (a.anonym || 0)
                })
            }
        }
    },
    callback: function (a) {
        if (jQuery.type(a) != "object") {
            return
        }
        if (a.flag == "001") {
            if (a.content == "430") {
                Prompt.alert("您赠送的超级烟花将在5分钟后引爆，敬请期待！")
            }
        } else {
            onErr.parseErr(a)
        }
    },
    pause: function () {
        this.preSubmit.prop("disabled", true)
    },
    start: function () {
        this.preSubmit.prop("disabled", false)
    },
    events: [],
    addEvent: function (a) {
        this.events.push(a)
    },
    parseGet: {
        giftAni: {
            gift_1: {m: 99, s: 20},
            gift_3: {m: 20, s: 10},
            gift_10: {m: 40, s: 20},
            gift_25: {m: 4, s: 2}
        }, suit_gift_show: function (a, b) {
            Room.present.parseGet.parse(jQuery.extend(true, {}, b, a.shift()));
            if (a.length > 0) {
                setTimeout(function () {
                    Room.present.parseGet.suit_gift_show(a, b)
                }, 800)
            }
        }, parseSuit: function (e) {
            var d = [], c = e.content.shape;
            if (e.content.item == 10006) {
                for (var b in Pres) {
                    if (jQuery.inArray(Pres[b].u, [1, 2, 3, 4, 8, 12]) > -1) {
                        d.push({gold: Pres[b].gold, content: {item: Pres[b].id, num: 1}});
                        d.sort(function (g, f) {
                            return g.gold - f.gold
                        })
                    }
                }
            } else {
                jQuery.each(Pres[e.content.item].suit, function (f, g) {
                    d.push({content: {item: g.id, num: g.num, shape: c[g.id] || 0}})
                })
            }
            var a = [];
            for (var b = 0; b < e.content.num; b++) {
                a = a.concat(d)
            }
            d = null;
            this.suit_gift_show(a, e);
            a = null
        }, parse: function (t) {
            var p = 1, b = t.content.num;
            var o = aptime.stoHoursEx(t.tm), l = t.from, a = t.fid, k = t.to, x = Pres[t.content.item], c = x ? x.cls : "";
            if (t.content.isShape == 1) {
                x = {gold: t.content.giftCoin}
            }
            var s = [t.fid, t.frid, t.from, Badge.get_ico_id(t.prop).join("|"), t.fpriv];
            var z = [t.tid, t.trid, t.to, Badge.get_ico_id(t.tprop).join("|"), t.tpriv];
            if (Room.liveMaster && (t.tid == page.rid || (x.id == 98 || x.id == 99 || x.id == 106))) {
                Room.Call("newMsg.start", "有新礼物！")
            }
            if (t.tid == page.puid || jQuery.inArray(x.id, [98, 99, 430, 571, 7560, 7570]) > -1) {
                for (var q = 0; q < Room.present.events.length; q++) {
                    try {
                        Room.present.events[q](t, t.content.num * x.gold)
                    } catch (t) {
                    }
                }
            }
            var n = [];
            if (page.fid && page.fid == page.gameId) {
                var y = b > 75 ? 75 : b
            } else {
                var y = b > 1000 ? 1000 : b
            }
            if (Room.m.isGiftIcons) {
                for (var q = 0; q < y; q++) {
                    n.push('<i class="' + c + ' gift-small"></i>')
                }
            } else {
                n.push('<i class="' + c + ' gift-small"></i>')
            }
            var r = "", v = "";
            if (this.giftAni[c] && b >= this.giftAni[c].s) {
                v = '<img src="http://vr0.6rooms.com/imges/pixel.gif" class="giftAni ' + (b >= this.giftAni[c].m ? "m" : "s") + c + '"/>'
            }
            var d = x.id == 98 ? ", 礼物价值平均分配" : "";
            if (!a) {
                r = Room.reBtn + '<span class="t">' + o + "</span> " + k + " 玩 " + l + " 获得 " + n.join("") + " " + x.title + "，共" + b + "个";
                t.typeID = "101"
            } else {
                if (t.tid) {
                    k = '<a href="#" class="u" user="' + z.join(",") + '">' + k + "</a>"
                } else {
                    k = '<span class="u">' + k + "</span>"
                }
                var j = "";
                if (t.fid == 1900000026) {
                    j = '<span class="u">' + l + "</span>"
                } else {
                    if (t.fid == 1900000047) {
                        j = '<span class="mystery"><i class="fixpng"></i>' + l + "</span>"
                    } else {
                        if (t.fid > 900000000) {
                            j = '<a class="u" href="/a/' + t.frid + '" target="_blank">' + l + " </a>"
                        } else {
                            j = '<a href="#" class="u" user="' + s.join(",") + '">' + l + " </a>"
                        }
                    }
                }
                if (t.content.isShape == 1) {
                    r = Room.reBtn + '<span class="t">' + o + " </span>" + j + " 送给 " + k + " " + t.content.num + "个单价" + t.content.giftCoin + "六币的个性礼包"
                } else {
                    r = Room.reBtn + '<span class="t">' + o + " </span>" + j + "向 " + k + " 送 " + n.join("") + " " + x.title + "，共" + b + "个" + v + d + "，感谢 " + j + "的热情支持!"
                }
                if (x.id == "600") {
                    r = Room.reBtn + '<span class="t">' + o + " </span>" + j + "向 " + k + " " + x.title + '<i class="' + c + ' gift-small"></i> ' + t.content.num * x.gold + "六币，感谢 " + j + "的热情支持!"
                }
            }
            Room.Call("chatList.add_list", {
                u: {uid: t.fid, rid: t.frid, alias: t.from},
                u2: {uid: t.tid, rid: t.trid, alias: t.to},
                cls: "style-gift",
                e: t,
                str: r
            });
            if (!a) {
                return
            }
            if (Room.get_gifts_list && Room.get_gifts_list.isLoad) {
                if (page.isMic || (t.tid == page.puid || jQuery.inArray(x.id, [98, 99, 430, 571, 7560, 7570]) > -1)) {
                    if (t.content.isShape == 1) {
                        var g = t.content.itemAry;
                        for (var q = 0; q < t.content.num; q++) {
                            jQuery.each(g, function (i, e) {
                                Room.Call("get_gifts_list.add", {uid: t.fid, tm: t.tm, item: i, num: e, alias: t.from})
                            })
                        }
                    } else {
                        if (!t.suit) {
                            Room.Call("get_gifts_list.add", {
                                uid: t.fid,
                                tm: t.tm,
                                item: t.content.item,
                                num: t.content.num,
                                alias: t.from
                            })
                        }
                    }
                }
            }
            if (c == "flyMsg" || c == "sofa") {
                return
            }
            if (x.f || (x.id == 416 && b == 6666)) {
                if (x.id == 416) {
                    b = 1
                }
                var f = x.to ? t.to : t.from;
                Room.Call("GiftSuper.toSwf", {
                    id: x.id,
                    num: b,
                    alias: f,
                    send_alias: t.from,
                    get_alias: t.to,
                    isSuit: t.suit,
                    msg: t.content.msg,
                    gname: t.content.gname
                });
                return
            }
            if (!x.suit && t.content.shape != "" && Room.m.isShape) {
                Room.Call("Room.GiftShape.toSwf", t.content, t.suit);
                return
            }
            if (t.content.isShape == 1) {
                return
            }
            var h = jQuery.extend(true, {}, x);
            if (page.fid && page.fid == page.gameId) {
            } else {
                if (c == "gift_1") {
                    if (b >= 99) {
                        h.info.src = pUrl + "rose99.png";
                        h.info.w = w = 326;
                        h.info.h = 276;
                        b = Math.floor(b / 99)
                    }
                }
                Room.Call("Gift_show.addGift", h, b)
            }
            if (x.suit) {
                setTimeout(function () {
                    Room.present.parseGet.parseSuit(t)
                }, 8.1 * 1000)
            }
        }
    }
};
Room.Gift_show = {
    ie6: jQuery.browser.msie && jQuery.browser.version == "6.0", imgCache: {}, addGift: function (b, a) {
        if (!Room.m.isGiftShow || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(b.id)) {
            return
        }
        if (!b.info) {
            return
        }
        this.show(b, a)
    }, show: function (c, e) {
        e = Math.min(e, 20);
        var f = [];
        for (var d = 0; d < e; d++) {
            f.push('<div style="width:' + c.info.w + "px;height:" + c.info.h + "px;background:url(" + c.info.src + ") no-repeat; position:absolute; left:" + Number.random(0, Math.max(0, 940 - c.info.w)) + "px; top:" + Number.random(0, Math.max(0, 450 - c.info.h)) + 'px"></div>')
        }
        var b = jQuery("#micer_player_1"), j = b[0] ? b.offset().top : 100;
        var a = jQuery('<div class="giftShowBox"></div>').css({
            width: 940,
            marginLeft: -470,
            top: j,
            left: "50%"
        }).html(f.join("")).appendTo(document.body);
        if (this.ie6) {
            var g = a[0].getElementsByTagName("div");
            if (!typeof(DD_belatedPNG)) {
                $LAB.script("png").wait(function () {
                    for (var k = 0; k < g.length; k++) {
                        DD_belatedPNG.fixPng(g[k])
                    }
                })
            } else {
                for (var d = 0; d < g.length; d++) {
                    DD_belatedPNG.fixPng(g[d])
                }
            }
        }
        var h = 8000;
        if (c.gold >= 100 && c.gold <= 1000) {
            h = 10 * 1000
        }
        setTimeout(function () {
            a.remove()
        }, h)
    }
};
Room.GiftSuper = {
    swf: 0, isInit: 0, isw: 0, write_swf: function () {
        if (this.box) {
            return
        }
        this.box = jQuery('<div class="gift-super-swf-box"><div class="gift-swf-close" id="gift-swf-close" style=""><a href="#" title="清除本次礼物特效"><i></i></a></div><div id="gift_super"></div></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/flashComponent/gift/sendGift4.10.swf", "gift_super", "100%", "100%", "10.0", "", {
            domain: "http://" + location.hostname + "/",
            rid: page.rid,
            uid: _puser.uid
        }, {wmode: "transparent"})
    }, init: function (c) {
        if (isAndroid || isIpad || isIphone) {
            return
        }
        if (!Room.m.isGiftShow) {
            return
        }
        var a = this;
        a.write_swf();
        if (!a.getSwf()) {
            setTimeout(function () {
                a.init(c)
            }, 1000);
            return
        }
        this.setPos = c.setPos || jQuery.noop;
        this.close_btn = jQuery("#gift-swf-close");
        a.isInit = 1;
        if (Room.prop_lib.length > 0) {
            while (Room.prop_lib.length > 0) {
                var b = Room.prop_lib.pop();
                a.zuojia(b)
            }
        }
        if (this.close_btn) {
            this.close_btn.click(function (d) {
                d.preventDefault();
                a.close_btn.fadeOut(200, function () {
                    a.close()
                });
                a.swf.clearGifts()
            })
        }
        window.giftSuperClose = jQuery.proxy(this.close, this);
        window.GiftSuperBtnClose = jQuery.proxy(this.closeBtn, this)
    }, closeBtn: function (a) {
        if (this.close_btn) {
            this.close_btn.show(200)
        }
    }, getSwf: function () {
        this.swf = swfobject.getObjectById("gift_super");
        return this.swf && this.swf.receivejsMessage
    }, zuojia: function (a) {
        setTimeout(function () {
            Room.GiftSuper.toSwf({id: a.id, num: 1, rid: a.rid, alias: a.alias})
        }, 500)
    }, toSwf: function (c) {
        if (!Room.m.isGiftShow || !this.isInit || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(c.id)) {
            return
        }
        this.setPos();
        var a = Pres[c.id].title;
        try {
            Room.GiftSuper.swf_player(c)
        } catch (b) {
            Room.GiftSuper.getSwf();
            Room.GiftSuper.swf_player(c)
        }
        this.box.css("z-index", 666)
    }, swf_player: function (b) {
        var a = Pres[b.id];
        var c = a.w ? b.msg : b.alias;
        if (b.gname != "") {
            c = b.gname
        }
        this.swf.receivejsMessage(b.id, b.num, {
            rid: b.rid,
            str: c,
            userName: b.alias,
            get_alias: b.get_alias,
            send_alias: b.send_alias,
            isSuit: b.isSuit
        })
    }, close: function () {
        console.log("super-close");
        if (this.close_btn) {
            this.close_btn.css("display", "none")
        }
        this.box.css({width: 900, zIndex: -10})
    }
};
Room.Msg.set_getback({
    1601: function (a) {
        goodness.get(a.content)
    }
});
var goodness = {
    cur_data: null, play_box: null, swf_con: null, init: function () {
        this.is_init = 1;
        this.play_box = jQuery('<div class="goodness_flash" style="width:940px;height:500px;position: absolute;left:-10000px;top:0;z-index:9999"><div id="goodness_play"></div></div>').appendTo(document.body);
        this.swf_con = swfobject.embedSWF("/apple/flashComponent/goddess_0.swf?domain=" + pageMessage.domain, "goodness_play", 940, 500, "10.0", "", {}, {wmode: "transparent"});
        window.goodness_play_ready = this.play_ready;
        window.goodness_play_close = this.close
    }, get: function (a) {
        this.cur_data = a;
        this.cur_tm = 30;
        this.play()
    }, play_ready: function () {
        goodness.player = swfobject.getObjectById("goodness_play");
        clearInterval(goodness.tm);
        if (goodness.cur_tm > 5) {
            goodness.play()
        }
    }, tm: 0, play: function () {
        if (!this.is_init) {
            this.tm = setInterval(function () {
                goodness.cur_tm--
            }, 1000);
            this.init()
        } else {
            this.set_pos();
            swfobject.getObjectById("goodness_play").initGoddess(this.cur_data.redid, this.cur_data.rid, this.cur_data.tvalue, this.cur_tm)
        }
    }, close: function () {
        goodness.play_box.css("left", -100000)
    }, set_pos: function () {
        var a = jQuery("#player");
        if (a[0]) {
            _pos = a.offset()
        } else {
            _pos = {left: 30, top: 150}
        }
        this.play_box.css({left: _pos.left, top: _pos.top})
    }
};
Room.GiftShape = {
    shapes: [{id: "1", num: 50, name: "V(50个)"}, {id: "2", num: 99, name: "心(99个)"}, {
        id: "3",
        num: 100,
        name: "笑脸(100个)"
    }, {id: "4", num: 300, name: "LOVE(300个)"}, {id: "5", num: 520, name: "爱之箭(520个)"}, {
        id: "6",
        num: 999,
        name: "比翼双飞(999个)"
    }, {id: "7", num: 1314, name: "一生一世(1314个)"}, {id: "8", num: 2345, name: "飞火流星(2345个)"}, {
        id: "9",
        num: 3344,
        name: "生生世世(3344个)"
    }, {id: "10", num: 5200, name: "爱的花火(5200个)"}, {id: "11", num: 9999, name: "天长地久(9999个)"}],
    swf: 0,
    shape_panel: 0,
    shapeBtn: 0,
    giftNum: 0,
    write_swf: function () {
        if (this.box) {
            return
        }
        this.box = jQuery('<div class="gift-shape-swf-box"><div id="giftShapeSwf"></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/giftShape/GiftShape2.1.swf", "giftShapeSwf", "100%", "100%", "10.0", "", {domain: "http://" + location.hostname + "/"}, {wmode: "transparent"})
    },
    init: function (b) {
        if (!Room.m.isGiftShow) {
            return
        }
        this.write_swf();
        if (!this.getSwf()) {
            this.t = setTimeout(jQuery.proxy(this.init, this, b), 1000);
            return
        }
        this.shapeBtn = b.btn;
        this.setPos = b.setPos || jQuery.noop;
        this.giftNum = b.giftNum;
        if (!Room.m.isShape) {
            this.shapeBtn.css("visibility", "hidden")
        } else {
            this.create_shapbox();
            var a = this;
            this.shapeBtn.bind("click", function (c) {
                c.preventDefault();
                c.stopPropagation();
                if (a.shape_panel.box.is(":visible")) {
                    a.shape_panel.iHidden()
                } else {
                    a.shape_panel.visible(this, b.posBox || null)
                }
            })
        }
        window.giftShapeClose = jQuery.proxy(this.remove, this)
    },
    hasShape: function (b) {
        for (var a = 0; a < this.shapes.length; a++) {
            if (b == this.shapes[a].num) {
                return true
            }
        }
        return false
    },
    getSwf: function () {
        this.swf = swfobject.getObjectById("giftShapeSwf");
        return this.swf && this.swf.jsRun
    },
    sendPres: 0,
    toSwf: function (c, b) {
        if (!Room.m.isGiftShow || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(c.id)) {
            return
        }
        this.setPos();
        if (!this.swf || !this.swf.jsRun) {
            this.getSwf()
        }
        var a = this.swf;
        setTimeout(function () {
            if (c.isShape == 1) {
                for (var d = 0; d < c.num; d++) {
                    setTimeout(function () {
                        a.jsRun("", c.shape)
                    }, 500)
                }
            } else {
                a.jsRun(Pres[c.item].info.src_s, c.shape)
            }
            if (window.setSuperGiftCount) {
                window.setSuperGiftCount(1)
            }
            Room.GiftShape.box.css("z-index", 201)
        }, 200)
    },
    remove: function () {
        this.box.css({width: 900, zIndex: -10})
    },
    setState: function (a) {
        if (!this.shapeBtn) {
            return
        }
        this.shapeBtn.css("display", (a ? "block" : "none"))
    },
    create_shapbox: function () {
        _box = jQuery("<div>", {
            "class": "giftShapeBox",
            html: '<div class="giftTab"><a href="" class="giftBtab">标准图形</a><a href="" class="giftMtab"><i></i>我的图形</a></div>					<div class="giftBase scroll-bar"></div>					<div class="giftMy">					<p class="giftMyList scroll-bar"></p>					<p class="giftMyDraw"><a href="" class="draw_btn">单一画图</a><a href="" class="draw_btn2">个性画图</a></p></div>'
        }).appendTo(document.body);
        this.shape_panel = {
            box: _box, visible: function (e, d) {
                this.btn = jQuery(e);
                var c = (d || Room.GiftShape.giftNum).offset();
                this.box.css({left: c.left, top: c.top - 211}).fadeIn(200);
                jQuery(document.body).bind("click", this.dev)
            }, iHidden: function () {
                this.btn = null;
                this.box.fadeOut(200);
                jQuery(document.body).unbind("click", this.dev)
            }, dev: function (d) {
                var c = d.target, e = Room.GiftShape.shape_panel;
                if (!jQuery.contains(e.box[0], c) && c != e.box[0]) {
                    e.iHidden()
                }
            }
        };
        var a = [];
        jQuery.each(this.shapes, function () {
            var c = this;
            a.push('<a href="" sys="' + c.num + '" class="s' + c.id + '">' + c.name + "</a>")
        });
        var b = this.shape_panel.box.find("div.giftBase");
        b.html(a.join(""));
        this.shape_panel.box.on("click", "a,span", function (c) {
            var e = Room.GiftShape, d = Room.present;
            c.preventDefault();
            _a = jQuery(this);
            switch (_a.attr("class")) {
                case"giftBtab":
                    e.shape_panel.box.removeClass("giftShapeMy");
                    break;
                case"giftMtab":
                    e.shape_panel.box.addClass("giftShapeMy");
                    if (!e.is_get_shap) {
                        e.get_my_shap();
                        e.is_get_shap = 1
                    }
                    break;
                case"draw_btn":
                    e.draw_open(0);
                    break;
                case"draw_btn2":
                    e.draw_open(1);
                    break;
                case"giftDel":
                    c.stopPropagation();
                    e.del_my_shap(_a);
                    break;
                case"mys":
                    d.setGift({gift_type: 3, count: _a.attr("num_m"), custom_id: _a.attr("gid")});
                    e.shape_panel.iHidden();
                    d.test_gift(_a);
                    break;
                case"group":
                    d.setGift({gift_type: 4, count: 1, custom_id: _a.attr("gid")});
                    e.shape_panel.iHidden();
                    break
            }
            if (_a.attr("sys")) {
                d.setGift({gift_type: 2, count: _a.attr("sys"), custom_id: 1});
                e.shape_panel.iHidden();
                Room.present.test_gift(_a)
            }
        })
    },
    get_my_shap: function () {
        jQuery.ajax({
            dataType: "json", url: "/user/prop/userPropShapeList.php", success: function (d) {
                if (d.flag == "001") {
                    var c = d.content, a = Room.GiftShape.shape_panel.box.find("p.giftMyList");
                    if (c) {
                        a.find("a").remove();
                        var b = [];
                        jQuery.each(c, function () {
                            var e = this;
                            if (e.type == 2) {
                                b.push('<a href="" class="group" gid="' + e.id + '"><span title="删除" gid="' + e.id + '" class="giftDel">x</span><img style="background-image:url(' + e.pic + ')" src="http://vr0.6.cn/imges/live/CSSIMG/giftShapeImg.png" />' + e.coin + "六币</a>")
                            } else {
                                b.push('<a href="" class="mys" num_m="' + e.num + '" gid="' + e.id + '"><span title="删除" gid="' + e.id + '" class="giftDel">x</span><img style="background-image:url(' + e.pic + ')" src="http://vr0.6.cn/imges/live/CSSIMG/giftShapeImg.png" />' + e.num + "个</a>")
                            }
                        });
                        a.html(b.join(""))
                    }
                } else {
                    if (d.flag == "203") {
                        Login.toLogin()
                    }
                }
            }
        })
    },
    del_my_shap: function (a) {
        if (!confirm("确定删除吗？")) {
            return
        }
        a.parent().css("display", "none");
        jQuery.ajax({
            dataType: "json",
            url: "/user/prop/delUserPropShape.php",
            data: {id: a.attr("gid")},
            success: function (b) {
                if (b.flag == "001") {
                    a.parent().remove()
                } else {
                    if (b.flag == "203") {
                        Login.toLogin()
                    } else {
                        a.parent().css("display", "block");
                        alert(b.content)
                    }
                }
            }
        })
    },
    draw_open: function (b) {
        if (!_puser.uid) {
            return Login.toLogin()
        }
        if (!_puser.rich || _puser.rich < 1) {
            return alert("您的等级不够1富，不能使用此功能")
        }
        if (this.is_get_shap && Room.GiftShape.shape_panel.box.find("p.giftMyList a").length >= 30) {
            return alert("您设计的礼物图形不能超过30个")
        }
        var a = "width=1080,height=600,top=0,left=0,scrollbars=0,resizable=0,status=1", c = window.open("/user/prop/drawshape.php?" + !!b, "drawshape", a);
        if (c) {
            c.focus()
        }
    },
    draw_save: function () {
        this.get_my_shap();
        this.shape_panel.box.addClass("giftShapeMy")
    }
};
function swf_get_gifts() {
    var a = [];
    for (var b in Pres) {
        var c = Pres[b];
        if (!c.ns && ",1,2,3,".indexOf("," + c.u + ",") > -1) {
            a.push(c)
        }
    }
    return a
}
Room.GiftFly = {
    attachRoom: function () {
        Room.Msg.set_getback({
            108: function (a) {
                Room.GiftFly.toSwf(a)
            }, 153: function (a) {
                Room.GiftFly.toSwf(a, 36);
                Rank_msg.master_up({wealthLate: a.wealthLate, wealthRank: a.wealthRank, tid: page.rid})
            }
        });
        Room.Msg.set_callback({
            prop_flymsg: function (a) {
                if (a.flag != "001") {
                    onErr.parseErr(a)
                }
            }, prop_perform_flymsg: function (a) {
                if (a.flag != "001") {
                    onErr.parseErr(a)
                }
            }
        })
    }, swf: 0, write_swf: function () {
        if (this.box) {
            return
        }
        this.box = jQuery('<div class="gift-fly-swf-box"><div id="flyMsgBox"></div></div>').appendTo(document.body);
        swfobject.embedSWF("/apple/flashComponent/msgRoll1.9.swf", "flyMsgBox", "100%", "100%", "10.0", "", {}, {wmode: "transparent"})
    }, init: function (a) {
        if (!Room.m.isGiftShow) {
            return
        }
        this.write_swf();
        if (!this.getSwf()) {
            setTimeout(jQuery.proxy(this.init, this, a), 1000);
            return
        }
        this.sendInput = a.sendInput;
        this.setPos = a.setPos;
        if (Room.m.isFly) {
            a.sendBtn.bind("click mouseover mouseout", function (b) {
                b.preventDefault();
                if (b.type == "click") {
                    Room.GiftFly.send()
                } else {
                    if (b.type == "mouseover") {
                        wsug(b, "飞屏，价格：1000个六币")
                    } else {
                        wsug("", 0)
                    }
                }
            })
        }
        this.attachRoom();
        window.giftFlyClose = jQuery.proxy(this.remove, this)
    }, send: function () {
        if (this.sendInput.disabled) {
            Prompt.alert("禁言状态不能飞屏!");
            return false
        }
        var c = this.sendInput.val(), b = new RegExp(this.Fsm), a = "";
        while (c = c.replace(b, "")) {
            if (a == c) {
                break
            }
            a = c
        }
        if (c == "") {
            Prompt.alert("请输入飞屏内容!");
            this.sendInput.val("");
            this.sendInput[0].focus();
            return false
        }
        if (c.len() > 80) {
            Prompt.alert("您的飞屏内容过长，请确保不超过40个汉字！");
            return false
        }
        Prompt.confirm('"飞屏"等同于礼物，价值1000六币，是否发送？', function (d) {
            if (d) {
                Room.GiftFly.sendInput.val("");
                Room.Msg.send("prop_flymsg", {m: c})
            }
        });
        return false
    }, getSwf: function () {
        this.swf = swfobject.getObjectById("flyMsgBox");
        return this.swf && this.swf.jsExec
    }, toSwf: function (b, a) {
        if (!Room.m.isGiftShow) {
            return
        }
        this.setPos();
        if (!this.swf || !this.swf.jsExec) {
            this.getSwf()
        }
        if (a) {
            this.swf.jsExec(b.content, a)
        } else {
            this.swf.jsExec(b.from + "说：" + b.content, 46)
        }
        this.box.css("z-index", 201)
    }, remove: function () {
        this.box.css({width: 900, zIndex: -10})
    }
};
(function () {
    Room.Ready.set_init(function () {
        if (!window.new2016 && jQuery("#mySite")[0]) {
            Room.mySite = new j()
        }
    });
    var h = jQuery;
    var g = function (q) {
        typeof console == "object" && console.log && console.log(q)
    };
    var n = 200;
    var j = function () {
        j.superclass.constructor.call(this, h("#mySite"));
        this.pop = null;
        this.siteData = {};
        this.siteDOM = {};
        this.siteCount = 0;
        this.updateQueue = [];
        this.efc = new c();
        this.update = h.proxy(this, "update");
        this._mouseoverHandler = h.proxy(this, "_mouseoverHandler");
        this._mouseoutHandler = h.proxy(this, "_mouseoutHandler");
        this._clickHandler = h.proxy(this, "_clickHandler");
        this._effectHideHandler = h.proxy(this, "_effectHideHandler");
        this._effectShowHandler = h.proxy(this, "_effectShowHandler");
        this._effectCloseHandler = h.proxy(this, "_effectCloseHandler");
        this._effectStartHandler = h.proxy(this, "_effectStartHandler");
        this.initialize();
        this.attachRoom()
    };
    VI.extend(j, VI.Widget, {
        initialize: function () {
            var s = this.elem();
            var t = s.find("div[class^=site]");
            var v = t.length;
            this.siteCount = v;
            for (var r = 0; r < t.length; r++) {
                var u = t[r];
                var q = String(r + 1);
                h(u).attr("data-siteNumber", q);
                this.siteDOM[q] = {id: this.mark(u), num: q};
                this.siteData[q] = null
            }
            for (var q in page.sites) {
                if (page.sites.hasOwnProperty(q)) {
                    this.siteData[q] = page.sites[q];
                    this.render(q)
                }
            }
            s.on("mouseover", this._mouseoverHandler);
            s.on("mouseout", this._mouseoutHandler);
            s.on("click", this._clickHandler);
            this.efc.on("start", this._effectStartHandler);
            this.efc.on("hide", this._effectHideHandler);
            this.efc.on("show", this._effectShowHandler);
            this.efc.on("close", this._effectCloseHandler)
        }, attachRoom: function () {
            Room.Msg.set_getback({
                109: function (q) {
                    Room.mySite.queue(q.content);
                    Room.sitechat.change(q.content)
                }, 109001: function (q) {
                    Room.mySite.info_change(q.content)
                }
            });
            Room.Msg.set_callback({
                prop_seat: function (q) {
                    (q.flag != "001") && onErr.parseErr(q)
                }
            })
        }, queue: function (r) {
            var q = this.updateQueue;
            q.push(r);
            if (q.length == 1) {
                this.update()
            }
        }, update: function () {
            var r = this.updateQueue[0];
            var q = r.site;
            this.siteData[q] = r;
            page.sites = this.siteData;
            this.efc.run(r.site.toString(), Number(q) > this.siteCount / 2 ? "left" : "right")
        }, render: function (q) {
            var s = this.siteData[q];
            var r = this.mark(this.siteDOM[q].id);
            if (s) {
                r.html('<p>					<img class="uh" src="' + s.pic + '" />					<em class="has">' + s.alias + '</em>					<i class="bg"></i>					</p>');
                r.addClass("has")
            } else {
                r.html('<p><img src="http://vr1.6rooms.com/imges/pixel.gif"><i class="bg"></i></p>');
                r.removeClass("has")
            }
        }, info_change: function (q) {
            this.siteData[q.site] = q;
            h("#mySite").find("div.site_" + q.site).find("img").attr("src", q.pic).end().find("em").text(q.alias)
        }, clear: function () {
            var q = this.siteData;
            for (var r in q) {
                if (q.hasOwnProperty(r)) {
                    q[r] = null;
                    this.render(r)
                }
            }
        }, _checkMouseEvent: function (t, r) {
            var q = this.elem();
            var s = h(t).closest("[data-siteNumber]", q[0]);
            var u = h(r).closest("[data-siteNumber]", q[0]);
            if (s.length > 0 && s[0] != u[0]) {
                return true
            }
            return false
        }, _mouseoverHandler: function (s) {
            if (this._checkMouseEvent(s.target, s.relatedTarget)) {
                var r = h(s.target).closest("[data-siteNumber]", this.elem());
                var q = r.attr("data-siteNumber");
                var t = this.siteData[q];
                wsug(s, (t ? '<span style="font-size:14px; font-weight:normal;">' + t.alias + "</span><br />" : "") + "抢座，当前：" + (t ? t.num : 0) + "个沙发")
            }
        }, _mouseoutHandler: function (q) {
            if (this._checkMouseEvent(q.target, q.relatedTarget)) {
                wsug(q, "")
            }
        }, _clickHandler: function (t) {
            var v = t.target;
            var s = h(v).closest("[data-siteNumber]", this.elem()[0]);
            if (s.length > 0) {
                var r = s.attr("data-siteNumber");
                var u = this.siteData[r];
                var q = this.pop = this.pop || new b();
                t.preventDefault();
                t.stopPropagation();
                q.show();
                q.updateCount(u ? u.num : 0);
                q.updateSiteNumber(r);
                q.updatePosition(s);
                q.focus()
            }
        }, _effectStartHandler: function (q) {
            g("start");
            var r = this.mark(this.siteDOM[q].id);
            this.efc.setPos(r)
        }, _effectHideHandler: function (q) {
            g("hide handler: " + q);
            var r = this.mark(this.siteDOM[q].id);
            r.html('<p><img src="http://vr1.6rooms.com/imges/pixel.gif"><i class="bg"></i></p>');
            r.addClass("has")
        }, _effectShowHandler: function (q) {
            g("show handler: " + q);
            this.render(q)
        }, _effectCloseHandler: function (r) {
            var q = this.updateQueue;
            q.shift();
            if (q.length > 0) {
                g("update next one");
                setTimeout(this.update, n)
            }
        }
    });
    var l = "/apple/flashComponent/leftAndRight.swf";
    var p = "getSite";
    var a = 488;
    var i = 406;
    var e = 207;
    var k = 260;
    var d = 500;
    var f = 6 * 4000;
    var m = 10 * 1000;
    var c = function () {
        this.siteNumber = "";
        this.callShowTimer = null;
        this.callCloseTimer = null;
        this.hide = h.proxy(this, "hide");
        this.show = h.proxy(this, "show");
        this.close = h.proxy(this, "close")
    };
    VI.extend(c, VI.Widget, {
        createSWF: function () {
            var q = h("<b>");
            q.attr("id", p);
            h("body").append(q);
            swfobject.embedSWF(l, p, a, i, "10.0", "", {}, {wmode: "transparent"})
        }, getSWF: function () {
            var q = document.getElementById(p);
            return q || this.createSWF() || document.getElementById(p)
        }, run: function (s, t) {
            var r = this.getSWF();
            this.siteNumber = s;
            if (r && typeof r.run == "function") {
                this.trigger("start", s, t);
                r.style.visibility = "visible";
                r.style.zIndex = "99999";
                this.callShowTimer = setTimeout(this.show, f);
                this.callCloseTimer = setTimeout(this.close, m);
                r.run(s, t)
            } else {
                var q = this;
                setTimeout(function () {
                    q.run(s, t);
                    q = r = null
                }, d)
            }
        }, setPos: function (q) {
            var t = this.getSWF();
            var r = q.offset();
            var u = page.tpl == "wmp" ? 36 : 16;
            var s = page.tpl == "wmp" ? 3 : 10;
            var x = r.left + u - e;
            var v = r.top + s - k;
            t.style.left = x + "px";
            t.style.top = v + "px"
        }, hide: function (q) {
            this.trigger("hide", q)
        }, show: function (q) {
            g((q ? "flash " : "") + "show");
            clearTimeout(this.callShowTimer);
            var q = q || this.siteNumber;
            this.trigger("show", q)
        }, close: function (r) {
            g((r ? "flash " : "") + "close");
            clearTimeout(this.callCloseTimer);
            var r = r || this.siteNumber;
            var q = this.getSWF();
            this.trigger("close", r);
            q.style.visibility = "hidden";
            q.style.zIndex = "0"
        }
    });
    var o = '<form class="mySitePop">								<input type="hidden" name="site" />								<p class="info">								当前<em>0</em>个沙发，超过此数量才能成功抢座								</p>								<p class="btn">								数量：<input type="text" class="js_num input_text"> 								<button type="submit">抢座</button> 								<em>(100六币/沙发)</em>								</p>								<span class="arrow">								<i class="i1">◆</i><i class="i2">◆</i>								</span>								</form>';
    var b = function () {
        b.superclass.constructor.call(this, {fill: o});
        this.on("mount", this.initialize)
    };
    VI.extend(b, VI.Overlay, {
        initialize: function () {
            var q = this.getContentBox();
            this._submitHandler = h.proxy(this, "_submitHandler");
            this._documentClickHandler = h.proxy(this, "_documentClickHandler");
            q.on("submit", this._submitHandler);
            this.on("afterShow", this._afterShowHandler);
            this.on("afterHide", this._afterHideHandler)
        }, updateCount: function (q) {
            this.elem().find(".info em").html(q)
        }, updateSiteNumber: function (q) {
            this.elem().find("input[name=site]").val(q)
        }, updatePosition: function (r) {
            var s = r.offset();
            var q = r.width();
            var v = r.height();
            var u = s.top + v - 120;
            var t = s.left - (264 - q) / 2;
            this.move(t, u)
        }, focus: function () {
            this.elem().find("input.js_num").trigger("focus").val("")
        }, _submitHandler: function (u) {
            u.preventDefault();
            if (!_puser.uid) {
                Login.toLogin()
            } else {
                var t = this.elem();
                var s = t.find("input.js_num");
                var r = s.val().replace(/\s/g, "");
                var q = t.find("input[name=site]").val();
                if (!/^[1-9]\d*$/.test(r)) {
                    alert("请输入正确的数量！");
                    s.trigger("focus").trigger("select")
                } else {
                    this.hide();
                    s.val("");
                    Room.Msg.send("prop_seat", {rid: page.rid, tuid: Room.micer.uid, t: 0, num: r, site: q})
                }
            }
        }, _documentClickHandler: function (r) {
            var s = r.target;
            var q = this.elem();
            if (!h.contains(q[0], s) && s != q[0]) {
                this.hide()
            }
        }, _afterShowHandler: function () {
            h(document).on("click", this._documentClickHandler)
        }, _afterHideHandler: function () {
            h(document).off("click", this._documentClickHandler)
        }
    })
})();
(function () {
    var a = jQuery;
    Room.sitechat = {
        pops: {}, init: function () {
            this.isinit = 1;
            var b = this, c = a('<div class="mysite-chat"></div>').appendTo(a("#mySite"));
            for (var d = 1; d < 5; d++) {
                b.pops[d] = {
                    t: 0,
                    uid: 0,
                    elm: a("<div/>", {
                        "class": "chatpop chatpop" + d,
                        html: '<i class="bg1"></i><p class="con"></p><i class="bg2"></i>'
                    }).appendTo(c)
                }
            }
            a.each(page.sites, function (f, e) {
                b.pops[f].uid = e.uid
            })
        }, parse: function (d, e) {
            if (page.tpl == "wmp") {
                return
            }
            if (!this.isinit) {
                this.init()
            }
            var b = this, c = 0;
            a.each(this.pops, function (g, f) {
                if (d && f.uid == d) {
                    if (!c) {
                        e = e.st(20, "...")
                    }
                    c = 1;
                    b.popchat(f, e)
                }
            })
        }, popchat: function (b, d) {
            var c = b;
            clearTimeout(c.t);
            c.t = setTimeout(function () {
                c.elm.hide(150)
            }, 5000);
            c.elm.find(".con").html(d);
            c.elm.show(150)
        }, change: function (c) {
            var b = this.pops[c.site];
            if (b.uid != c.uid) {
                clearTimeout(b.t);
                b.elm.css("display", "none");
                b.uid = c.uid
            }
        }
    }
})();
Room.Ready.set_init(function () {
    if (Room.user.rich > 24) {
        Room.magic.btn_init()
    }
    Room.magic.change(page.magic_info)
});
Room.Msg.set_getback({
    121: function (a) {
        Room.magic.change(a.content)
    }
});
Room.magic = {
    imgPath: "http://vr4.6.cn/imges/room/magic/",
    swfPath: "/apple/room/magic/",
    anis: {
        1: {id: 1, name: "如花", src: "ruhua_v1.gif"},
        2: {id: 2, name: "外星人", src: "waixingren_v1.gif"},
        3: {id: 3, name: "乌龟", src: "wugui_v1.gif"},
        4: {id: 4, name: "二师兄", src: "zhu_v1.gif"},
        5: {id: 5, name: "青蛙", src: "qingwa.gif"},
        6: {id: 6, name: "原始人", src: "yuanshiren.swf", f: 1},
        7: {id: 7, name: "小驴", src: "xiaolv.swf", f: 1}
    },
    _v: 0,
    btn_init: function () {
        var e = [];
        for (var b in this.anis) {
            var a = this.anis[b];
            e.push('<li><a href="#" ani="' + a.id + '">' + a.name + "</a></li>")
        }
        this.magic_menu = jQuery("<a>", {
            "class": "magic_menu",
            html: '<i class="arrows"></i>鄙视Ta',
            style: "display:block"
        }).prependTo(Room.userMenu.oTeQuan);
        this.anisList = jQuery("<ul>", {"class": "ul_list", html: e.join("")}).appendTo(this.magic_menu);
        var c = function () {
            clearTimeout(Room.magic.vt);
            Room.magic.vt = setTimeout(function () {
                Room.magic.vis()
            }, 500)
        }, d = function () {
            clearTimeout(Room.magic.vt);
            Room.magic.vt = setTimeout(function () {
                Room.magic.hid()
            }, 200)
        };
        this.magic_menu.bind("mouseover", c).bind("mouseout", d);
        this.anisList.bind("mouseover", c).bind("mouseout", d);
        this.magic_menu.bind("click", function (f) {
            f.preventDefault();
            f.stopPropagation();
            var i = f.target;
            if (i.className != "magic_menu") {
                var h = i.getAttribute("ani"), g = Room.userMenu;
                if (h) {
                    g.iHidden();
                    Room.magic.setAni({id: h, uid: g.uid, alias: g.alias})
                }
            }
        })
    },
    vt: 0,
    vis: function () {
        var a = Room.magic;
        clearTimeout(a.vt);
        a.anisList.css({left: 175, top: a.magic_menu.offset().top - Room.userMenu.sug.offset().top});
        a.anisList.css("visibility", "visible");
        a._v = 1
    },
    hid: function () {
        if (!this.magic_menu) {
            return
        }
        this.anisList.css("visibility", "hidden");
        this._v = 0
    },
    change: function (d) {
        if (!Room.m.isGiftShow) {
            return
        }
        if (!Room.m.isMagic || jQuery.type(d) == "array" || d.endtm < 1) {
            return
        }
        if (!this.box) {
            this.box = jQuery('<div class="magic_box"></div>').hide().appendTo(document.body);
            this.box.on("click", ".user a", function () {
                var g = jQuery(this);
                var f = g.data("user").split("|");
                if (f[0] > 0) {
                    Room.userMenu.visible(g, {uid: f[0], rid: f[1], alias: f[2], dj: 25, ico: ""})
                }
            })
        }
        if (this.anis[d.stype].f == 1) {
            var c = String.uniqueID(), b = this.swfPath + this.anis[d.stype].src;
            this.box.hide().html('<p class="media" title="' + this.anis[d.stype].name + '"><span id="' + c + '"><span></p><p class="user"><a data-user="' + d.tuid + "|" + d.trid + "|" + d.talias + '">' + d.talias + "</a></p>");
            swfobject.embedSWF(b, c, "140", "160", "10.0", "", {}, {wmode: "transparent", menu: "false"});
            this.box.fadeIn(300)
        } else {
            this.box.hide().html('<p class="media" title="' + this.anis[d.stype].name + '"><img src="' + this.imgPath + this.anis[d.stype].src + '"/></p><p class="user"><a data-user="' + d.tuid + "|" + d.trid + "|" + d.talias + '">' + d.talias + "</a></p>");
            var e = Room.magic, a = new Image();
            a.onload = function () {
                e.box.fadeIn(300)
            };
            a.src = this.imgPath + this.anis[d.stype].src
        }
        $LAB.script(JSF.jq_drag).wait(function () {
            Room.magic.box.draggable()
        });
        this.timeOut(d.endtm)
    },
    close: function () {
        var a = Room.magic;
        if (!a.box) {
            return
        }
        a.box.fadeOut(300)
    },
    setAni: function (a) {
        if (!confirm("确认将 " + a.alias + " 变身为" + this.anis[a.id].name + "？")) {
            return
        }
        Room.Msg.send("prop_swap", {tuid: a.uid, stype: a.id})
    },
    setback: function (a) {
        Prompt.create({btn_sure: 1, content: a.content, delay: 1000 * 5})
    },
    _t: 0,
    timeOut: function (a) {
        clearTimeout(this._t);
        this._t = setTimeout(this.close, a * 1000)
    }
};
Room.Ready.set_init(function () {
    if (jQuery("#redBag").length > 0) {
        Room.redBag.init()
    }
});
Room.redBag = {
    attachRoom: function () {
        Room.Msg.set_getback({
            1304: function (a) {
                Room.redBag.parse(a)
            }
        });
        Room.Msg.set_callback({
            prop_redenvelope: function (a) {
                Room.redBag.sendback(a)
            }
        })
    },
    getApi: "/room/gethb.php",
    delay: 1000 * 180,
    isGet: 1,
    myCount: 0,
    postnum: 0,
    liveCount: 0,
    liveCountBox: 0,
    testTime: function () {
        var a = this;
        setTimeout(function () {
            a.isGet = 1
        }, this.delay)
    },
    init: function () {
        var b = jQuery("#redBag");
        b.bind("click", this.send);
        var a = jQuery("div.redBagBox");
        this.count_box = jQuery(b.find("i:eq(0)")[0] || a.find("span.packetNum"));
        this.liveCountBox = jQuery("div#redBagNum");
        this.numberBox = this.liveCountBox.find("p.rbnbox span");
        this.attachRoom();
        this.liveCountUpdate(0);
        if (!_puser.uid) {
            return
        }
        b.bind("mouseenter", this.pop_vis).bind("mouseleave", this.pop_hid_y);
        this.pop = a;
        this.pop.bind("mouseenter", this.pop_vis).bind("mouseleave", this.pop_hid_y);
        this.getCount()
    },
    liveCountUpdate: function (b) {
        var a = Number(this.numberBox.text().replace(/\D/g, ""));
        this.numberBox.text(numF(a + b));
        this.liveCountBox.css("display", "block")
    },
    getCount: function () {
        if (!this.isGet) {
            return
        }
        this.isGet = 0;
        jQuery.ajax({dataType: "json", url: this.getApi, success: this.getback})
    },
    getback: function (a) {
        var b = Room.redBag;
        if (a.flag == "001") {
            b.testTime();
            b.myCount = a.content.num;
            b.postCount = a.content.postnum;
            b.pop_update()
        } else {
            Prompt.alert(a.content)
        }
    },
    pop_vis: function () {
        var a = Room.redBag;
        clearTimeout(a.hid_t);
        if (_puser.uid) {
            a.getCount()
        } else {
        }
        a.pop.fadeIn(200)
    },
    hid_t: 0,
    pop_hid_y: function () {
        var a = Room.redBag;
        clearTimeout(a.hid_t);
        a.hid_t = setTimeout(a.pop_hid, 500)
    },
    pop_hid: function () {
        Room.redBag.pop.fadeOut(200)
    },
    pop_update: function () {
        var b = this.pop.find("span.y"), a = this.pop.find("span.n"), c = this.myCount;
        if (c > 0) {
            b.html(b.html().replace(/<em>.+<\/em>/i, "<em>" + c + "</em>"));
            this.count_box.text(c);
            this.count_box.css("display", "block");
            b.css("display", "inline");
            a.css("display", "none")
        } else {
            a.css("display", "inline");
            b.css("display", "none");
            this.count_box.css("display", "none")
        }
        this.pop.find("em:eq(1)").text(this.postCount)
    },
    send: function (a) {
        a.preventDefault();
        if (!_puser.uid) {
            loginFast.login()
        } else {
            if (Room.redBag.myCount < 1) {
                return
            }
            if (!Room.micer || !Room.micer.uid) {
                Prompt.alert("麦上无人，不能赠送红包")
            } else {
                Room.Msg.send("prop_redenvelope", {tuid: Room.micer.uid, num: 1})
            }
        }
    },
    sendback: function (a) {
        if (a.flag == "001") {
            this.myCount--;
            this.postCount++;
            this.pop_update();
            this.parse({tm: a.content, from: _puser.nickname, fid: _puser.uid, frid: _puser.rid, me: 1})
        } else {
            if (a.flag == "405") {
                Prompt.create({
                    delay: 1000 * 10,
                    btn_cancel: {text: "稍后再说"},
                    btn_sure: {text: "立即购买", link: "/user/shopprop.php?pxuid=&pgpid=0&ptype=lvcard", target: "_blank"},
                    content: "您的红包已经送完。拥有绿卡或黄卡可以加速积攒红包。是否现在就去商城购买？"
                })
            } else {
                onErr.parseErr(a)
            }
        }
    },
    parse: function (b) {
        if (!b.me && b.fid == _puser.uid) {
            return
        }
        this.liveCountUpdate(1);
        var g = aptime.stoHoursEx(b.tm), a = b.from, d = b.fid;
        if (Room.liveMaster) {
            Room.newMsg.start("有新礼物！")
        }
        var c = [b.fid, b.frid, b.from, ""];
        var f = Room.reBtn + '<span class="t">' + g + ' </span><a href="#" class="u" user="' + c.join(",") + '">' + a + ': </a> 送1个红包 <em class="redBagIco"></em>';
        Room.chatList.add_list({str: f, e: b})
    }
};
if (_puser.uid) {
    Mediator.subscribe("redbag_add", function () {
        Room.redBag.myCount++;
        Room.redBag.pop_update()
    })
}
(function () {
    var c = '<div class="fireworks-packet" unselectable="on" onselectstart="return false;">		<div class="packet-before">			<a class="rub-area"></a>			<span class="countdown"><em>0</em>秒</span>		</div>	  	<div class="packet-after">	  		<a class="btn">确定</a>	  	</div>	</div> ';
    var b = function (e, d) {
        this.stm = d;
        this.id = e;
        this.redid = null;
        this.init();
        return this
    };
    jQuery.extend(b.prototype, {
        init: function () {
            this.box = null;
            this.create()
        }, create: function () {
            var d = this.box = jQuery(c);
            if (jQuery.browser.safari) {
                d.css("-webkit-transform", "none")
            }
            d.attr("id", "firework_packet_" + this.id);
            d.on("mousedown", jQuery.proxy(this, "_mousedown"));
            d.on("mouseup", jQuery.proxy(this, "_mouseup"));
            d.on("click", ".rub-area", jQuery.proxy(this, "_grab"));
            d.on("click", ".btn", jQuery.proxy(this, "destroy"));
            this.getpos();
            if (this.stm) {
                this.wait()
            } else {
                this.start()
            }
            a._size++
        }, getpos: function () {
            var f = this;
            var e = a._pos;
            for (var d = 0; d < e.length; d++) {
                if (e[d][2]) {
                    f.box.css({left: e[d][0], top: e[d][1], zIndex: a._zIndex}).appendTo("body");
                    f.index = d;
                    e[d][2] = false;
                    break
                }
            }
        }, wait: function (d) {
            var e = Math.floor(d || this.stm);
            clearInterval(this.timer);
            this.box.addClass("wait-packet");
            if (e >= 0) {
                this.countdown(e)
            }
        }, start: function () {
            var d = this;
            clearInterval(this.timer);
            this.box.removeClass("wait-packet");
            this.countdown(30, function () {
                d.destroy()
            })
        }, destroy: function () {
            var e = this.id;
            var d = this.redid;
            this.box.off().remove();
            setTimeout(function () {
                a._list[e] = a._list[d] = null
            }, 5000);
            a._pos[this.index][2] = true;
            a._size--
        }, _grab: function (d) {
            d.preventDefault();
            d.stopPropagation();
            this.grab()
        }, grab: function () {
            if (!_puser.uid) {
                Login.toLogin();
                return false
            }
            if (this.lock) {
                return false
            }
            this.lock = 1;
            this.box.addClass("disabled-packet");
            if (this.is_empty) {
                this.box.addClass("fail-packet");
                return
            }
            Room.Msg.send("prop_grabfireworkwealth", {redid: this.redid || this.id})
        }, grab_back: function (f) {
            var d = f.content;
            var e = this;
            if (f.flag == "001") {
                e.box.addClass("success-packet");
                if (d.msg == 100) {
                    e.box.addClass("success-super-packet")
                }
                setTimeout(function () {
                    e.box.removeClass("success-packet")
                }, 2000)
            } else {
                if (d.state == "-1") {
                    e.box.addClass("fail-packet");
                    return
                }
                Prompt.alert(d.msg)
            }
            setTimeout(function () {
                e.lock = 0;
                e.box.removeClass("disabled-packet")
            }, 3000)
        }, countdown: function (d, f) {
            var g = this;
            var e = this.box.find(".countdown em");
            e.text(d);
            this.timer = setInterval(function () {
                d--;
                if (d <= 0) {
                    d = 0;
                    clearInterval(g.timer);
                    f && f()
                }
                e.text(d)
            }, 1000)
        }, _mousedown: function (f) {
            var d = jQuery(f.target);
            var g = this.box.position();
            this._data = {target: d, startLeft: g.left, startTop: g.top, startX: f.pageX, startY: f.pageY};
            this.is_drag = 1;
            this.box.css("zIndex", a._size + a._zIndex++);
            jQuery(document).on("mousemove.fireworks", jQuery.proxy(this, "_mousemove"))
        }, _mousemove: function (h) {
            if (this.is_drag) {
                var g = this._data;
                var f = h.pageX - g.startX;
                var d = h.pageY - g.startY;
                this.box.css({left: g.startLeft + f, top: g.startTop + d});
                a._pos[this.index][2] = true
            }
            return false
        }, _mouseup: function () {
            this.is_drag = 0;
            this._data = {};
            jQuery(document).off("mousemove.fireworks")
        }
    });
    var a = {
        _size: 0, _zIndex: 1100, _pos: [], init: function (d) {
            this._list = {};
            this._startPoint = d.setPos();
            this._setPoint();
            setTimeout(function () {
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_wait.png";
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_v1_bg.gif";
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_disabled_v1_bg.png";
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_success50.gif";
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_success100.gif";
                new Image().src = "http://vr1.6rooms.com/imges/live/events/fireworks_packet_fail.png"
            }, 5000);
            this.attachRoom()
        }, attachRoom: function () {
            Room.Msg.set_callback({
                prop_grabfireworkwealth: function (e) {
                    var d = a._list[e.content.redid];
                    if (d) {
                        d.grab_back(e)
                    }
                }
            });
            Room.Msg.set_getback({
                1605: function (d) {
                    jQuery.each(d.content, function (f, e) {
                        a.add(d.content[f])
                    })
                }, 1606: function (e) {
                    var d = a._list[e.content.redid];
                    if (d) {
                        d.is_empty = 1
                    }
                }, 1607: function (d) {
                    jQuery.each(d.content, function (g, f) {
                        var e = a._list[f.id];
                        if (e) {
                            e.wait(f.second)
                        } else {
                            a.add(f.id, f.second)
                        }
                    })
                }, 1608: function (d) {
                    jQuery.each(d.content, function (f, e) {
                        a._list[e.id].redid = e.redid;
                        a._list[e.redid] = a._list[e.id];
                        a._list[e.id].start()
                    })
                }
            })
        }, add: function (e, d) {
            this._list[e] = new b(e, d)
        }, _setPoint: function () {
            var d = this._startPoint;
            var f = 8;
            var e = Math.floor(d.top / 130);
            var k = -1 * 130;
            if (e <= 0) {
                e = 1
            }
            for (var h = 0; h < f; h++) {
                for (var g = 0; g < e; g++) {
                    a._pos.push([d.left + h * k, d.top + g * k, true])
                }
            }
        }, _watch: function () {
            jQuery.each(this._pos, function (e, d) {
                jQuery('<div id="point"></div>').css({
                    width: "5px",
                    height: "5px",
                    overflow: "hidden",
                    background: "#f09",
                    "border-radius": "50%",
                    position: "absolute",
                    zIndex: 2000,
                    left: d[0],
                    top: d[1]
                }).appendTo(document.body)
            })
        }
    };
    Room.fireworks = a
})();
(function () {
    var c = {
        LI_HTML: '<li><a href="/" title="{{title}}"><img src="{{src}}" width="{{width}}" height="{{height}}" data-bigsrc="{{bigsrc}}" /><span title="关闭" class="close"></span></a></li>',
        CONTAINER_ID: "#liveImgshow",
        TIME_TO_LIVE: 60 * 1000,
        WARP_WIDTH: 480,
        init: function (d) {
            this.container = d || jQuery(this.CONTAINER_ID).css("display", "none");
            this.ul = this.container.find("ul");
            this._attacheEvent();
            return this
        },
        add: function (f) {
            var d = this;
            var e = function (i, g) {
                if (i && g) {
                    var h = d.scaleImageSize(i, g);
                    i = h[0];
                    g = h[1]
                }
                f.id = String.uniqueID();
                f.width = i || "";
                f.height = g || "";
                d.append(f);
                d.justify();
                jQuery(f.id).delay(d.TIME_TO_LIVE).remove();
                setTimeout(jQuery.proxy(d.remove, d, f.id), d.TIME_TO_LIVE)
            };
            if (!f.width) {
                this.getImageSize(f.src, e)
            } else {
                e(f.width, f.height)
            }
        },
        getLength: function () {
            return this.ul.find("li").length
        },
        append: function (d) {
            this.container.css("display", "block");
            this.ul.append(this._createLI(d))
        },
        pop: function () {
            var d = this.ul.find("li:eq(0)");
            d && this.remove(d)
        },
        remove: function (e) {
            var d = typeof e == "string" ? jQuery("#" + e) : e;
            d && d.remove();
            this.justify();
            if (this.ul.children().length < 1) {
                this.container.css("display", "none")
            }
        },
        showDetail: function (d) {
            new ImageOverlay().show(d)
        },
        justify: function () {
            var d = this.ul.find("li");
            var g = this.WARP_WIDTH;
            var k = 10;
            if (d.length == 1) {
                d.eq(0).css("left", k + "px")
            } else {
                if (d.length > 1) {
                    var h = 0;
                    var f = d.map(function () {
                        var i = jQuery(this).width();
                        h += Number(i);
                        return i
                    });
                    if (h + (d.length + 1) * k >= g) {
                        this.pop();
                        this.justify()
                    } else {
                        var j = k;
                        for (var e = 0; e < f.length; e++) {
                            d.eq(e).css("left", j);
                            j += f[e] + k
                        }
                    }
                }
            }
        },
        getImageSize: function (e, f) {
            var d = new Image();
            d.onload = function () {
                f && f(this.width, this.height);
                this.onload = null
            };
            d.src = e
        },
        scaleImageSize: function (g, e, i, h) {
            var i = i || 49;
            var h = h || 49;
            var f = g / e;
            var d = i / h;
            if (g <= i && e <= h) {
            } else {
                if (f >= d) {
                    g = i;
                    e = g / f
                } else {
                    e = h;
                    g = e * f
                }
            }
            return [g, e]
        },
        _createLI: function (g) {
            var f = document.createElement("ul");
            var e = /\{\{(\w+?)\}\}/g;
            var h = this.LI_HTML.replace(e, function (j, i) {
                return g[i] || ""
            });
            var d;
            f.innerHTML = h;
            d = f.firstChild;
            d.id = g.id;
            return d
        },
        _attacheEvent: function () {
            this.pop = jQuery.proxy(this.pop, this);
            this._clickHandler = jQuery.proxy(this._clickHandler, this);
            this._mouseHandler = jQuery.proxy(this._mouseHandler, this);
            this.container.bind("click", this._clickHandler);
            this.container.bind("mouseover", this._mouseHandler);
            this.container.bind("mouseout", this._mouseHandler)
        },
        _clickHandler: function (d) {
            var e = jQuery(d.target);
            d.preventDefault();
            if (e.is("img") && e.attr("data-bigsrc")) {
                var f = e.attr("data-bigsrc");
                this.showDetail(f)
            } else {
                if (e.hasClass("close")) {
                    this.remove(e.parents("li"))
                }
            }
        },
        _mouseHandler: function (f) {
            var g = jQuery(f.target);
            var e = jQuery(f.relatedTarget);
            var d = g.parents("li");
            if (d.length < 1) {
                return
            }
            if (!e || e.is("object") || e && !e.parents("li:eq(0)")) {
                f.type == "mouseover" ? d.find(".close").css("display", "block") : d.find(".close").css("display", "none")
            }
        }
    };
    jQuery.extend(c, {scaleImageSize: c.scaleImageSize, getImageSize: c.getImageSize});
    var b = function () {
        imageUploader.hide()
    };
    var a = {
        HTML: '<div class="roomPhotobox" style="display:none;"><div class="upload"><form method="post" action="http://pic.v.6.cn/api/uploadForGeneral.php" enctype="multipart/form-data" class="comform uploadForm" target="emptyIframe"><input type="hidden" name="callbackFun" value="top.roomPhotoboxCallback" /><input type="hidden" name="pid" value="1005" /><input type="hidden" name="size" value="s2,b1" /><input type="hidden" name="rid" value=' + (page.roomid || "") + ' /><input type="hidden" name="callbackUrl" value="http://' + document.domain + '/profile/transferStation.html" /><p class="inputFile"><a class="btn js_pseudo" href="javascript:return false;">选择图片</a><span><input type="file" name="file"></span></p><p>单张图片最大尺寸为2M。</p></form></div><div class="uploading">上传中... 请稍候...</div><div class="uploadinfo" ><dl><dt class="pic"><img ></dt><dd class="dec"><p>上传成功！</p><p><a class="btn js_publish" href="#">发布</a><span>或者 <a class="del_photo" href="">删除</a></span></p></dd></dl></div><div class="uploadwarn"><p><span>*</span>聊天时发图片需花费<em>10</em>个六币。</p><p><span>*</span>主播可收到<em>5</em>个六豆。</p></div><a class="js_close close_small" href="#" title="关闭">关闭</a><span class="arrow"><i class="i1">◆</i><i class="i2">◆</i></span></div>',
        TRIGGER: "#uploadeImage",
        PSEUDO_BTN: "js_pseudo",
        PSEUDO_DISABLE_CLS: "unClick",
        STATES: {uploading: "roomPhotobox-uploading", uploaded: "roomPhotobox-uploaded"},
        HOOKS: {del: "del_photo", close: "js_close", publish: "js_publish"},
        EXTENSION: ["jpg", "jpeg", "png", "gif"],
        init: function () {
            this.elem = this._create();
            this.trigger = jQuery(this.TRIGGER);
            this.fileInput = this.elem.find("input[type=file]");
            this._imagesrc = "";
            this._triggerHandler = jQuery.proxy(this._triggerHandler, this);
            this._clickHandler = jQuery.proxy(this._clickHandler, this);
            this._changeHandler = jQuery.proxy(this._changeHandler, this);
            this._uploadBack = jQuery.proxy(this._uploadBack, this);
            this._attacheEvent();
            return this
        },
        state: function (g) {
            var f = this.elem;
            var d = this.STATES;
            for (var e in d) {
                f.removeClass(d[e])
            }
            g && d[g] && f.addClass(d[g])
        },
        show: function () {
            var d = this.elem;
            if (!pageMessage.userCheck) {
                return Login.toLogin()
            }
            (!d[0].parentNode || d[0].parentNode.nodeName != "body") && d.appendTo(document.body);
            d.fadeIn(200);
            this.justifyPos();
            jQuery(document.body).trigger("click", {target: this.trigger});
            jQuery(document.body).bind("click", b)
        },
        hide: function () {
            this.elem.fadeOut(200);
            jQuery(document.body).unbind("click", b)
        },
        toggle: function () {
            if (this.elem.css("display") != "block") {
                this.show()
            } else {
                this.hide()
            }
        },
        justifyPos: function () {
            var d = this.trigger;
            var f = d.offset();
            var e = this.elem;
            e.css("left", f.left + d.width() / 2 - e.width() / 2);
            e.css("top", f.top - e.height() - 8)
        },
        resetForm: function () {
            this.state();
            this.elem.find("form").trigger("reset");
            this._imagesrc = ""
        },
        checkExtension: function (d) {
            var e = d.split(".");
            var f = e[e.length - 1];
            if (jQuery.inArray(f.toLowerCase(), this.EXTENSION) > -1) {
                return true
            }
            return false
        },
        upload: function () {
            this.state("uploading");
            this.elem.find("form").trigger("submit")
        },
        publish: function () {
            if (!this._imagesrc) {
                return
            }
            Room.Msg.send("msg_pic", {pic: this._imagesrc, rid: page.roomid, uid: pageMessage.user.uid});
            this.resetForm();
            this.hide()
        },
        suffix: function (d, f) {
            var e = /^(.+?)(_\w+)?(\.\w+)$/;
            if (e.exec(d)) {
                return d.replace(e, "$1" + (f ? "_" + f : "") + "$3")
            }
            return d
        },
        disabled: function () {
            this.fileInput.prop("disabled", true);
            this.elem.find("." + this.PSEUDO_BTN).addClass(this.PSEUDO_DISABLE_CLS)
        },
        enable: function () {
            this.fileInput.prop("disabled", false);
            this.elem.find("." + this.PSEUDO_BTN).removeClass(this.PSEUDO_DISABLE_CLS)
        },
        _uploadBack: function (i) {
            if (i.flag != "001") {
                alert(i.content);
                this.state()
            } else {
                var f = this;
                var e = f.elem.find("img:eq(0)");
                var g = i.content.s.width;
                var d = i.content.s.height;
                var h = c.scaleImageSize(g, d, 90, 68);
                e.attr("src", i.content.s.link);
                e.attr("width", h[0]);
                e.attr("height", h[1]);
                f.state("uploaded");
                f._imagesrc = i.content.url.link
            }
        },
        _attacheEvent: function () {
            this.trigger.bind("click", this._triggerHandler);
            this.elem.bind("click", this._clickHandler);
            this.fileInput.bind("change", this._changeHandler);
            window.roomPhotoboxCallback = this._uploadBack
        },
        _clickHandler: function (e) {
            var g = jQuery(e.target);
            var d = this.HOOKS;
            if (g[0].nodeName == "A") {
                for (var f in d) {
                    if (g.hasClass(d[f])) {
                        e.preventDefault()
                    }
                }
                if (g.hasClass(d.del)) {
                    this.resetForm()
                } else {
                    if (g.hasClass(d.close)) {
                        this.hide()
                    } else {
                        if (g.hasClass(d.publish)) {
                            this.publish()
                        }
                    }
                }
            }
            e.stopPropagation()
        },
        _triggerHandler: function (d) {
            d.preventDefault();
            d.stopPropagation();
            this.toggle()
        },
        _changeHandler: function () {
            var d = this.fileInput.val();
            if (!this.checkExtension(d)) {
                alert("格式错误");
                return
            }
            this.upload()
        },
        _create: function () {
            var e = document.createElement("div");
            var d;
            e.innerHTML = this.HTML;
            d = e.firstChild;
            return jQuery(d)
        }
    };
    Room.SendImage = function () {
        if (jQuery("#uploadeImage").length < 1) {
            return
        }
        imageUploader = a.init();
        jQuery.extend(Room, {imageList: c.init(), imageUploader: imageUploader});
        Room.chatList.container.bind("click", function (d) {
            var e = jQuery(d.target);
            if (e.is("img") && e.hasClass("gift_image")) {
                new ImageOverlay().show(imageUploader.suffix(e.attr("src"), ""))
            }
        })
    };
    Room.Msg.set_getback({
        122: function (g) {
            if (!g) {
                Room.user.status == 1 ? Room.Call("imageUploader.disabled") : Room.Call("imageUploader.enable")
            } else {
                if (Room.imageList) {
                    var i = Room.imageList;
                    var f = Room.imageUploader;
                    var e = i.scaleImageSize(g.width, g.height);
                    var h = [g.fid, g.frid, g.from, "", ""];
                    var d = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(g.tm) + ' </span> <a href="#" class="u" user="' + h.join(",") + '">' + g.from + '</a><span class="urid">(' + g.frid + ')</span>：<img class="gift_image" width="' + e[0] + '" height="' + e[1] + '" src="' + f.suffix(g.content, "s") + '" style="cursor:pointer;" />';
                    Room.Call("chatList.visMsg", {e: g, u: {uid: g.fid, rid: g.frid, alias: g.from}, str: d});
                    i.add({
                        title: "由 " + g.from + " 发布",
                        src: f.suffix(g.content, "s"),
                        bigsrc: f.suffix(g.content, ""),
                        width: e[0],
                        height: e[1]
                    })
                }
            }
        }
    });
    Room.Msg.set_callback({
        msg_pic: function (d) {
            if (d.flag != "001") {
                onErr.parseErr(d)
            }
        }
    })
})();
(function () {
    var c = '<div class="silver-coin-pop">		<h3 unselectable="on" onselectstart="return false;"></h3>		<div class="num" unselectable="on" onselectstart="return false;">1</div>		<a href="javascript:;" class="close"></a>		<a href="javascript:;" class="btn"></a>		<div class="countdown"><span>60</span><em>秒后开始抢币</em></div>	</div>';
    var b = function (e, d) {
        this.config = d || {};
        this.id = e;
        this.stm = d.outtm;
        this.etm = d.endtm;
        this.init();
        return this
    };
    jQuery.extend(b.prototype, {
        init: function () {
            this.box = null;
            this.create()
        }, create: function () {
            var d = this.box = jQuery(c);
            d.attr("id", "rich_firework_packet_" + this.id);
            d.on("mousedown", "h3", jQuery.proxy(this, "_mousedown"));
            d.on("mouseup", "h3", jQuery.proxy(this, "_mouseup"));
            d.on("click", ".btn", jQuery.proxy(this, "grab"));
            d.on("click", ".close", jQuery.proxy(this, "destroy"));
            this.getpos();
            if (this.stm) {
                this.wait(this.stm)
            } else {
                this.start(this.etm)
            }
        }, getpos: function () {
            var f = this;
            var e = a._pos;
            for (var d = 0; d < e.length; d++) {
                if (e[d][2]) {
                    f.box.css({left: e[d][0], top: e[d][1], zIndex: a._zIndex}).appendTo("body");
                    f.index = d;
                    e[d][2] = false;
                    break
                }
            }
        }, wait: function (d) {
            var e = Math.floor(d);
            clearInterval(this.timer);
            this.lock = 1;
            this.box.addClass("rich-wait-packet");
            if (e >= 0) {
                this.countdown(e)
            }
        }, start: function (d) {
            var e = this;
            clearInterval(this.timer);
            this.lock = 0;
            this.box.removeClass("rich-wait-packet");
            this.box.find(".countdown em").text("秒后引爆烟花");
            this.countdown(d, function () {
                e.destroy()
            })
        }, destroy: function () {
            var d = this.id;
            this.box.off().remove();
            setTimeout(function () {
                a._list[d] = null
            }, 5000);
            a._pos[this.index][2] = true;
            a._size--
        }, grab: function (d) {
            d.preventDefault();
            d.stopPropagation();
            this._grab()
        }, _grab: function () {
            if (!_puser.uid) {
                Login.toLogin();
                return false
            }
            if (this.lock) {
                return false
            }
            this.lock = 1;
            this.box.addClass("rich-disabled-packet");
            if (this.is_empty) {
                this.box.addClass("rich-fail-packet");
                return
            }
            var d = this;
            jQuery.getJSON("/event/thyh/getgold.php", {id: this.id, t: +new Date()}).done(function (e) {
                var f = e.content;
                if (e.flag == "001") {
                    d.effect(f)
                } else {
                    if (e.flag == "203") {
                        Login.toLogin();
                        return
                    } else {
                        Prompt.alert(f)
                    }
                }
                setTimeout(function () {
                    d.lock = 0;
                    d.box.removeClass("rich-disabled-packet")
                }, 1000)
            })
        }, effect_list: [], effect: function (d) {
            var g = 52;
            var i = 40;
            var f = this;
            var e = this.effect_list;
            if (this.animate) {
                e.push(d);
                return
            }
            this.animate = 1;
            var h = this.box.find(".num");
            h.text(d).show().animate({top: g - i + "px", opacity: 0}, 400, function () {
                h.hide().css({top: g + "px", opacity: 1});
                f.animate = 0;
                if (e.length) {
                    f.effect(e.shift())
                }
            })
        }, countdown: function (d, f) {
            var g = this;
            var e = this.box.find(".countdown span");
            e.text(d);
            this.timer = setInterval(function () {
                d--;
                if (d <= 0) {
                    d = 0;
                    clearInterval(g.timer);
                    f && f()
                }
                e.text(d)
            }, 1000)
        }, _mousedown: function (f) {
            var d = jQuery(f.target);
            var g = this.box.position();
            this._data = {target: d, startLeft: g.left, startTop: g.top, startX: f.pageX, startY: f.pageY};
            this.is_drag = 1;
            this.box.css("zIndex", a._size + a._zIndex++);
            jQuery(document).on("mousemove.fireworks", jQuery.proxy(this, "_mousemove"))
        }, _mousemove: function (h) {
            if (this.is_drag) {
                var g = this._data;
                var f = h.pageX - g.startX;
                var d = h.pageY - g.startY;
                this.box.css({left: g.startLeft + f, top: g.startTop + d});
                a._pos[this.index][2] = true
            }
            return false
        }, _mouseup: function () {
            this.is_drag = 0;
            this._data = {};
            jQuery(document).off("mousemove.fireworks")
        }
    });
    var a = {
        _size: 0, _zIndex: 1100, _pos: [], _w: 180, _h: 260, init: function (d) {
            this._list = {};
            this._startPoint = d.setPos();
            this._setPoint();
            setTimeout(function () {
                new Image().src = "http://vr3.6rooms.com/imges/live/vim/silver_coin_pop.png";
                new Image().src = "http://vr3.6rooms.com/imges/live/vim/fireworks_num_bg.png"
            }, 5000);
            this.attachRoom()
        }, attachRoom: function () {
            Room.Msg.set_getback({
                1701: function (f) {
                    var e = f.content.redid;
                    var d = a._list[e];
                    if (!d) {
                        a.add(e, f.content);
                        console.log("fire - add - wait")
                    }
                }, 1702: function (f) {
                    var e = f.content.redid;
                    var d = a._list[e];
                    if (d) {
                        if (d.is_over) {
                            return
                        }
                        console.log("fire - start");
                        d.start(f.content.endtm)
                    } else {
                        console.log("fire - add - start");
                        a.add(e, f.content)
                    }
                }, 1703: function (f) {
                    var e = f.content;
                    var d = a._list[e];
                    if (d) {
                        d.box.addClass("rich-disabled-packet");
                        d.is_over = 1
                    }
                    a.flash.play({id: e})
                }
            })
        }, add: function (g, d) {
            this._size++;
            if (this._size > this._pos.length) {
                var f = jQuery(window);
                var e = this._randomPoint(this._w, f.width() - (this._w * 2), f.scrollTop(), f.height() - this._h);
                this._addPoint(e[0], e[1], true)
            }
            this._list[g] = new b(g, d)
        }, _setPoint: function () {
            var d = this._startPoint;
            var f = 6;
            var e = Math.floor(d.top / this._h);
            var l = -1 * this._w;
            var k = -1 * this._h;
            if (e <= 0) {
                e = 1
            }
            for (var h = 0; h < f; h++) {
                for (var g = 0; g < e; g++) {
                    var m = h % 2 ? -100 : 0;
                    a._addPoint(d.left + h * l, d.top + g * k + m, true)
                }
            }
        }, _addPoint: function (d, f, e) {
            this._pos.push([d, f, e])
        }, _randomPoint: function (d, f, i, e) {
            var h = Math.ceil(Math.random() * e) + i;
            var g = Math.ceil(Math.random() * f) + d;
            return [g, h]
        }, _watch: function () {
            jQuery.each(this._pos, function (e, d) {
                jQuery('<div id="point"></div>').css({
                    width: "5px",
                    height: "5px",
                    overflow: "hidden",
                    background: "#f09",
                    "border-radius": "50%",
                    position: "absolute",
                    zIndex: 2000,
                    left: d[0],
                    top: d[1]
                }).appendTo(document.body)
            })
        }, flash: {
            _list: [], _playing: 0, init: function () {
                this._init = 1;
                window.rich_fireworks_ready = jQuery.proxy(this, "flash_ready");
                window.rich_fireworks_close = jQuery.proxy(this, "close");
                this.box = jQuery('<div class="rich-fireworks-effect"><div id="rich_fireworks_player"></div></div>').appendTo(document.body);
                swfobject.embedSWF("/apple/room/rich/richFireworks.swf", "rich_fireworks_player", 940, 500, "10.0", "", {}, {wmode: "transparent"})
            }, flash_ready: function () {
                this.player = swfobject.getObjectById("rich_fireworks_player");
                this.next()
            }, play: function (d) {
                if (!this._init || !this.player) {
                    this._list.push(d);
                    if (!this._init) {
                        this.init()
                    }
                    return
                }
                this._playing = 1;
                this.set_state(1);
                this.player.receiveMessage()
            }, next: function () {
                if (this._list.length) {
                    this.play(this._list.shift())
                }
            }, set_state: function (d) {
                this.box.css(d ? {top: "150px", zIndex: 777} : {top: "-999999px", zIndex: -1})
            }, close: function () {
                this._playing = 0;
                this.set_state(0);
                this.next()
            }
        }
    };
    Room.rich_fireworks = a
})();
Room.Msg.set_getback({
    507: function (a) {
        Lottery.create(a.content)
    }, 508: function (a) {
        Lottery.getPrize(a.content)
    }
});
var Lottery = {
    create: function (c) {
        if (!Room.m.isLottery) {
            return
        }
        if (this.box) {
            this.remove()
        }
        this.box = jQuery("<div/>", {"class": "lottery"});
        this.setPos();
        this.box.html('<div id="lotterySwf"></div>').appendTo(document.body);
        var a = {
            isClick: _puser.uid == c.uid ? "true" : "false",
            youke: (_puser.uid ? _puser.uid : "null"),
            rid: page.rid,
            type: c.type,
            msg: c.msg,
            domain: "http://" + location.hostname
        };
        var b = c.type == "9103" ? "LuckyDraw1.1.swf" : "LuckyDraw1.2.swf";
        swfobject.embedSWF("/apple/games/" + b, "lotterySwf", 285, 312, "9.0.0", "", a, {wmode: "transparent"})
    }, getPrize: function (b) {
        if (!Room.m.isLottery) {
            return
        }
        var a = swfobject.getObjectById("lotterySwf");
        if (a && a.jsOpenBox) {
            a.jsOpenBox(b)
        } else {
            setTimeout(function () {
                Lottery.getPrize(b)
            }, 1000)
        }
    }, remove: function () {
        this.box.remove()
    }, setPos: function () {
        if (page.isMic) {
            var b = jQuery("#player_area");
            var a = b.offset();
            this.box.css("top", a.top - 50)
        } else {
            var b = jQuery("#player");
            if (!b[0]) {
                return
            }
            var a = b.offset();
            this.box.css("top", a.top - 50)
        }
    }
};
Room.Msg.set_getback({
    162: function (a) {
        Lottery_diy.socket_back(a)
    }
});
var Lottery_diy = {
    isGame: 0, cur: {title: 0, rid: 0, gid: 51}, gifts: [10, 25, 37, 7, 41, 144], create: function () {
        Prompt.create({
            style: "zhuabiePop",
            btn_sure: {text: "确定"},
            btn_cancel: {text: "取消"},
            title: "捉五魁游戏设置",
            content: '<p style="padding:0 0 15px">游戏说明：“捉五魁”是您自由设置的房间抽奖游戏。您指定奖品并邀请粉丝开奖。如果对方接受邀请，则由其开奖并提供奖品。</p><form name="f_jiu"><p style="text-indent:12px">游戏标题：<input type="text" name="title" value="' + (this.cur.title || "") + '" /> (10个中文字)</p>			<p>开奖人房号：<input type="text" value="' + (this.cur.rid || "") + '"  name="rid" /></p>			<p style="text-indent:12px">游戏奖品：<select name="gifts">' + jQuery.map(this.gifts, function (a) {
                return "<option " + (a == Lottery_diy.cur.gid ? "selected" : "") + " value='" + a + "'>" + Pres[a].title + "</option>"
            }).join("") + '</select></p>			<p><strong style="color:red">开奖人将收到捉五魁游戏开奖邀请，并由开奖人提供游戏奖品</strong></p></form>',
            onSubmit: function () {
                var b = document.f_jiu, a = b.title.value, d = b.rid.value, c = b.gifts.value;
                if (a.len() > 20) {
                    alert("请输入10个中文字！\n(默认：欢迎大家来捉五魁)");
                    b.title[0].focus();
                    return 0
                }
                if (!d / 1) {
                    alert("房间号输入有误，请重新输入！");
                    return 0
                }
                Lottery_diy.cur = {title: a, rid: d, gid: c};
                Lottery_diy.get_alias();
                Lottery_diy.isGame = 1;
                return 1
            }
        })
    }, get_alias: function () {
        jQuery.ajax({
            dataType: "json",
            url: "/flashgame/action/lots.php",
            data: {act: "issure", uid: this.cur.rid},
            success: function (a) {
                if (a.flag == "001") {
                    Lottery_diy.cur.alias = a.content.toalias;
                    Lottery_diy.confirm()
                } else {
                    alert(a.content);
                    Lottery_diy.create()
                }
            }
        })
    }, confirm: function () {
        Prompt.create({
            style: "zhuabiePop",
            btn_sure: {text: "确定"},
            btn_cancel: {text: "返回"},
            title: "确认发出捉五魁游戏邀请？",
            content: '您将邀请<a href="/' + this.cur.rid + '" target="_blank">' + this.cur.alias + "(" + this.cur.rid + ')</a>开奖并提供<span style="color:red; padding:0 3px">游戏奖品：' + Pres[this.cur.gid].title + "</span>",
            callback: function (a) {
                if (a) {
                    Lottery_diy.app_send()
                } else {
                    Lottery_diy.create()
                }
            }
        })
    }, app_send: function () {
        jQuery.ajax({
            dataType: "json",
            url: "/flashgame/action/lots.php",
            data: {act: "add", title: this.cur.title, uid: this.cur.rid, propid: this.cur.gid, rid: page.rid},
            success: function (a) {
                if (a.flag == "001") {
                } else {
                    onErr.parseErr(a)
                }
            }
        });
        this.wt = setTimeout(this.waiting, 30 * 1000)
    }, waiting: function () {
        alert(Lottery_diy.cur.alias + "（" + Lottery_diy.cur.rid + "）无响应！");
        Lottery_diy.isGame = 0;
        Lottery_diy.cur = {}
    }, feedback: function (a) {
        Prompt.create({delay: 5 * 1000, title: "捉五魁游戏", content: a.toalias + "(" + a.torid + ") 拒绝了您的邀请！"});
        this.isGame = 0;
        Lottery_diy.cur = {};
        clearTimeout(this.wt)
    }, get_Lottery_diy: function (a) {
        this.isPop = 1;
        Prompt.create({
            style: 1,
            delay: 20 * 1000,
            btn_sure: {text: "接受"},
            btn_cancel: {text: "拒绝"},
            title: "捉五魁游戏邀请",
            content: '<p><a href="' + (a.url ? a.url : a.fromrid) + '" target="_blank">' + a.alias + (a.fromrid ? "(" + a.fromrid + ")" : "") + "</a>邀请您作为本轮捉五魁游戏的开奖人，接受邀请后，您将在游戏中开奖，并由" + (a.from > 1900000000 ? a.alias : "您") + '向中奖人赠送<strong style="color:red">游戏奖品：' + Pres[a.propid].title + "</strong></p>",
            callback: function (b) {
                if (b) {
                    Lottery_diy.act_send(1)
                } else {
                    Lottery_diy.act_send(0)
                }
            }
        });
        a = null
    }, act_send: function (a) {
        this.isPop = 0;
        if (this.isStart) {
            this.isStart = 0;
            return
        }
        if (a) {
            var a = "accept", b = "/flashgame/action/lots.php"
        } else {
            var a = "reject", b = "/flashgame/action/lots.php"
        }
        jQuery.ajax({
            dataType: "json", url: b, data: {act: a, rid: page.rid}, success: function (c) {
                if (!c) {
                    return
                }
                if (c.flag == "001") {
                } else {
                    onErr.parseErr(c)
                }
            }
        })
    }, start: function (a) {
        if (this.isPop) {
            this.isStart = 1;
            Prompt.close(0)
        }
        clearTimeout(this.wt);
        jQuery("#zhuobiebox").remove();
        this.box = jQuery("<div>", {
            id: "zhuobiebox",
            "class": "zhuabieBox",
            html: '<div class="head"><p>' + a.title + '</p><p class="red">本轮奖品：' + Pres[a.propid].title + "</p><p>开奖人：" + a.toalias + "（" + a.torid + '）</p></div><div id="lottery_diy"></div>'
        }).appendTo(document.body);
        $LAB.script(JSF.jq_drag).wait(function () {
            Lottery_diy.box.draggable({handle: Lottery_diy.box.find("div.head"), cursor: "default"})
        });
        this.setPos();
        var b = {
            isClick: _puser.uid == a.to ? "true" : "false",
            youke: (_puser.uid ? _puser.uid : "null"),
            rid: page.rid,
            domain: "http://" + location.hostname
        };
        swfobject.embedSWF("/apple/games/zhuobie1.5.swf", "lottery_diy", 338, 451, "9.0.0", "", b, {wmode: "transparent"})
    }, result: function (a) {
        var b = swfobject.getObjectById("lottery_diy");
        if (b && b.jsOpenBox) {
            b.jsOpenBox(a)
        } else {
            setTimeout(function () {
                Lottery_diy.result(a)
            }, 1500)
        }
    }, remove: function () {
        this.isGame = 0;
        jQuery("#zhuobiebox").html("").remove()
    }, setPos: function () {
        if (page.isMic) {
            var a = jQuery("#player_area").offset();
            this.box.css("top", a.top - 50)
        } else {
            var b = jQuery("#player");
            if (b.length < 1) {
                return
            }
            var a = b.offset();
            this.box.css("top", a.top - 50)
        }
    }, socket_back: function (a) {
        switch (Number(a.type)) {
            case 1:
                this.get_Lottery_diy(a.content);
                break;
            case 2:
                this.start(a.content);
                break;
            case 3:
                this.feedback(a.content);
                break;
            case 4:
                this.result(a.content);
                break
        }
    }
};
Room.Msg.set_getback({
    502: function (a) {
        if (page.tpl == "game") {
            return
        }
        if (page.isEgg / 1 == 0 && Room.m.isEgg) {
            gameObj.createGame(a.content)
        }
    }, set_egg: function (a) {
        page.isEgg = a.content.value
    }
});
var gameObj = {
    swf: {id: "egg_z", src: "/apple/games/egg_v8.swf", w: 338, h: 420}, init: function () {
        this.gameBox = jQuery("<div>", {
            css: {
                display: "none",
                position: "absolute",
                left: "50%",
                "margin-left": -169,
                "z-index": 500,
                width: 338,
                height: 460
            }
        }).appendTo(document.body)
    }, createGame: function () {
        if (!this.gameBox || this.gameBox.length < 1) {
            this.init()
        }
        this.setPos();
        this.gameBox.html('<div id="gbox_"><div id="' + this.swf.id + '"></div></div>');
        this.gameBox.css("display", "block");
        var a = {isLogin: pageMessage.userCheck, r: page.rid, domain: pageMessage.domain}, b = this.swf;
        swfobject.embedSWF(b.src, b.id, b.w, b.h, "9.0.0", "http://v.6.cn/apple/expressInstall.swf", a, {wmode: "transparent"})
    }, removeGame: function () {
        swfobject.removeSWF(this.swf.id);
        this.gameBox[0].innerHTML = "";
        this.gameBox.css("display", "none")
    }, setPos: function () {
        var b = jQuery("#player_area, #player"), a;
        if (b[0]) {
            a = b.offset()
        } else {
            a = {top: 200}
        }
        this.gameBox.css("top", a.top - 60)
    }
};
Room.Ready.set_init(function () {
    if (Room.m.isGiftNotice) {
        try {
            Room.giftNotice(__gift_notice__)
        } catch (a) {
        }
    }
});
Room.Msg.set_getback({
    402: function (a) {
        if (document.getElementById("gotohellflash")) {
            Room.giftNotice(a.content)
        }
    }
});
Room.Msg.set_getback({
    415: function (a) {
        jQuery.getJSON("/room/getRoomNotice.php", {t: a.content}, function (b) {
            Room.Msg.get(b)
        })
    }
});
Room.giftNotice = function () {
    var e = jQuery, a = "#gotohellflash", d = [], g = [], f = null, c = 1000;

    function b() {
        if (d.length == 0) {
            f = setTimeout(b, c);
            return
        }
        var l = e(a), m = l.find("ul"), p = e("<li/>"), h = String.uniqueID(), n = "", j = d.shift(), q = j.content, k = Pres[q.item], i = null, o = parseInt(m.css("top"));
        if (q.type == 1) {
            n = '<a target="_blank" href="' + q.url + '"><em class="user">' + q.msg + '</a>  <em class="time">' + aptime.stoHoursEx(q.tm) + "<i></i></em>"
        } else {
            if (q.frid == 0) {
                n = '<a target="_blank" href="' + q.url + '"><em class="user">' + q.to + '</em> <em class="user">' + q.from + "</em> " + q.num + "个" + k.title + '</a>  <i class="gift_' + q.item + ' giftSmall"></i>  <em class="time">' + aptime.stoHoursEx(q.tm) + "<i></i></em>"
            } else {
                if (q.isShape == 1) {
                    n = '<a target="_blank" href="' + q.url + '"><em class="user">' + q.from + '</em> 送给 <em class="user">' + q.to + "</em> " + q.num + "个单价" + q.giftCoin + '六币的个性礼包</a> <em class="time">' + aptime.stoHoursEx(q.tm) + "<i></i></em>"
                } else {
                    n = '<a target="_blank" href="' + q.url + '"><em class="user">' + q.from + '</em> 送给 <em class="user">' + q.to + "</em> " + q.num + "个" + k.title + '</a>  <i class="gift_' + q.item + ' giftSmall"></i>  <em class="time">' + aptime.stoHoursEx(q.tm) + "<i></i></em>"
                }
            }
        }
        p.html(n).attr("id", h);
        p.appendTo(m);
        g.push(h);
        if (g.length > 3) {
            e("#" + g.shift()).remove()
        }
        if (g.length >= 3) {
            c = 5000
        }
        f = setTimeout(b, c)
    }

    return function (h) {
        if (!Room.m.isGiftNotice) {
            return
        }
        d = d.concat(h);
        if (!f) {
            b()
        }
    }
}();
Room.Ready.set_init(function () {
    var c = jQuery;
    if (Room.m.isRadioRoll) {
        var a = c("#radioRollJ");
        if (!a[0]) {
            return
        }
        var b = new Faces({btn: a.find("button.face_default"), input_text: a.find("textarea"), fname: "radio"});
        try {
            page.getRadioRoll = GetRadioRoll;
            page.getRadioRoll.init()
        } catch (d) {
        }
    }
});
Room.Msg.set_callback({
    msg_sys: function (a) {
        page.getRadioRoll.sendBack(a)
    }
});
Room.Msg.set_getback({
    501: function (a) {
        if (!page.getRadioRoll) {
            return
        }
        page.getRadioRoll.orderMsg(a.content)
    }
});
var GetRadioRoll = {
    rollBox: 0,
    visBoxBtn: 0,
    subBtn: 0,
    closeBtn: 0,
    pop: 0,
    radioInput: 0,
    FX: 0,
    swfObj: 0,
    vt: 0,
    isSending: 0,
    msgBox: null,
    orderPause: 0.5,
    autoTrigger: 0,
    nowArylen: 0,
    sugStr: "输入文字不超过50个。每次广播花费500六币。",
    init: function () {
        this.window = window;
        this.msgBox = new Array();
        this.rollBox = jQuery("#radioRollJ");
        this.pop = this.rollBox.find("div.pop");
        this.subBtn = this.rollBox.find("a.subBtn");
        this.closeBtn = this.rollBox.find("a.close");
        this.radioInput = this.rollBox.find("textarea");
        this.proCont = jQuery("#proCont");
        this.button = jQuery("#postRadio");
        this.radioInput.attr("title", this.sugStr);
        this.setShow();
        this.button.bind("click", function (c) {
            c.preventDefault();
            page.getRadioRoll.openPop()
        });
        this.subBtn.bind("click", function (c) {
            c.preventDefault();
            page.getRadioRoll.send()
        });
        this.closeBtn.bind("click", function (c) {
            c.preventDefault();
            page.getRadioRoll.pop.css("display", "none")
        });
        this.radioInput.bind("focus", function () {
            if (page.getRadioRoll.radioInput.val() == page.getRadioRoll.sugStr) {
                page.getRadioRoll.radioInput.val("")
            }
            page.getRadioRoll.radioInput.css("color", "#666")
        });
        var a = [];
        for (var b in FaceSymbols) {
            a.push(FaceSymbols[b])
        }
        this.Fsm = a.join("|")
    },
    openPop: function () {
        this.pop.css("display") == "none" ? this.pop.css("display", "block") : this.pop.css("display", "none");
        if (this.radioInput.val() == "") {
            this.radioInput.val(this.sugStr);
            this.radioInput.css("color", "#bbb")
        }
    },
    orderMsg: function (a) {
        this.msgBox.push(a);
        if (this.autoTrigger == 1) {
            return
        } else {
            this.loopMsg(this.msgBox.length);
            this.autoTrigger = 1
        }
    },
    loopMsg: function () {
        var a = GetRadioRoll.msgBox.length;
        if (a < 1) {
            GetRadioRoll.autoTrigger = 0
        } else {
            interval = Math.max(500, (10 / a) * 1000);
            GetRadioRoll.setMsg();
            setTimeout(GetRadioRoll.loopMsg, interval)
        }
    },
    setMsg: function () {
        var g = this.msgBox.shift();
        if (!g) {
            return
        }
        chatContent = ParseFaceSymobls(g.msg);
        if (g.rrid !== 0) {
            var d = g.rrid.replace(/^\//, ""), c = d.indexOf("http") < 0 ? "/" + d : d, b = "<a target='_blank' href='" + c + "'>", f = "</a>"
        } else {
            b = "", f = ""
        }
        if (g.rid !== 0) {
            var a = "(" + g.rid + ")"
        } else {
            var a = ""
        }
        var e = jQuery('<span class="tipItem"></span>').html(b + "<em class='tipIcon fixpng'></em><em class='tipName'>" + g.from + a + "：</em><em class='tipWords'>" + chatContent + "</em><em class='tipTime'>(" + aptime.stoHoursEx(g.tm) + ")</em>" + f);
        e.appendTo(this.proCont);
        if (this.proCont.children().length > 6) {
            this.proCont.children().first().remove()
        }
    },
    setShow: function () {
        this.rollBox.css("visibility", "visible")
    },
    alert: function (a) {
        Prompt.create({bnt_sure: 1, delay: 3000, content: a})
    },
    send: function () {
        if (this.isSending) {
            this.alert("正在发送数据！");
            return
        }
        var a = this.radioInput.val();
        if (a == "" || a == this.sugStr) {
            this.alert("请输入广播内容！");
            return
        }
        if (a.len() > 100) {
            this.alert("输入文字超过50个，发送失败！");
            return
        }
        var b = a.match(new RegExp(this.Fsm, "g"));
        if (b && b.length > 1) {
            this.alert("发布失败，每条广播只允许添加1个表情。");
            return
        }
        this.pop.css("display", "none");
        this.isSending = 1;
        Room.Msg.send("msg_sys", {r: page.rid, m: a})
    },
    sendBack: function (b) {
        this.isSending = 0;
        var a = String(b.flag);
        if (a == "001") {
            alert(b.content);
            this.radioInput.val("")
        } else {
            onErr.parseErr(b)
        }
    }
};
var ChatPrivateWin = {};
(function () {
    var a = jQuery;
    ChatPrivateWin = {
        ie6: a.browser.msie && a.browser.version == "6.0",
        tpl: "/js/tpls/chat_private.html",
        box: 0,
        is_open: 0,
        is_init: 0,
        init: function () {
            var b = ChatPrivateWin;
            b.is_init = 1;
            a.ajax({
                dataType: "text", url: b.tpl, success: function (c) {
                    b.box = a(c).appendTo(document.body).eq(0);
                    if (b.ie6) {
                        b.box.css({
                            right: IM.main_box ? IM.main_box.css("right") : 6,
                            top: IM.main_box ? parseInt(IM.main_box.css("top")) + 3 : 68
                        })
                    } else {
                        b.box.css({
                            right: IM.main_box ? IM.main_box.css("right") : 6,
                            bottom: IM.main_box ? parseInt(IM.main_box.css("bottom")) + 32 : 68
                        })
                    }
                    b.events();
                    a.each(b.userAry, function (d, f) {
                        b.open(f)
                    })
                }
            })
        },
        userAry: [],
        open: function (c) {
            if (!_puser.uid) {
                return Login.toLogin()
            }
            var h = ChatPrivateWin;
            if (!this.is_init) {
                this.userAry.push(c);
                this.init();
                return
            }
            if (!h.box) {
                this.userAry.push(c);
                return
            }
            var e = c.uid, i = c.alias, b = h.box.find(".chat-ulist ul"), g = h.box.find(".chat-body"), d = b.find("li.user-" + e), f = g.find("dl.list-" + e);
            if (!d[0]) {
                d = a('<li data-uid="' + e + '" class="user-' + e + '"><a>' + i + '</a><span class="u-close" title="关闭"></span><i class="newmsg"></i></li>').prependTo(b);
                f = a('<dl class="list-' + e + '"></dl>').prependTo(g)
            }
            d.addClass("on").siblings("li").removeClass("on");
            f.show().siblings("dl").hide();
            if (!h.is_open) {
                h.is_open = 1;
                h.box.fadeIn(200)
            }
            h.send_input.trigger("focus");
            g.scrollTop(g[0].scrollHeight)
        },
        msgHtml: '<dd><p class="user"><a data-uid="{uid}" href="#">{alias}</a><span>{time}</span></p><p class="text">{content}</p></dd>',
        newMsg: function (d) {
            if (!ChatPrivateWin.box) {
                return false
            }
            var i = ChatPrivateWin, g = i.box.find(".chat-ulist ul"), e = i.box.find(".chat-body"), f, b, j, h;
            j = (d.fid == _puser.uid) ? d.to : d.fid;
            h = (d.fid == _puser.uid) ? "我" : d.from + "<em>[" + d.frid + "]</em>";
            f = g.find("li.user-" + j), b = e.find("dl.list-" + j);
            if (!f[0]) {
                return false
            }
            var c = i.msgHtml.replace(/\{uid\}/, d.fid).replace(/\{alias\}/, h).replace(/\{time\}/, aptime.stoHoursEx(d.tm)).replace(/\{content\}/, ParseFaceSymobls(d.content));
            a(c).appendTo(b);
            if (!f.hasClass("on")) {
                f.find(".newmsg").css("display", "block")
            }
            e.scrollTop(e[0].scrollHeight);
            return i.is_open
        },
        events: function () {
            var d = ChatPrivateWin, b = d.box.find(".chat-ulist ul"), c = d.box.find(".chat-body");
            $LAB.script(JSF.jq_drag).wait(function () {
                d.box.draggable({handle: d.box.find("div.chat-head:eq(0)"), containment: "document", cursor: "pointer"})
            });
            d.box.find("a.close").on("click", function (f) {
                f.preventDefault();
                d.box.fadeOut(200);
                d.is_open = 0
            });
            b.on("click", "li", function () {
                var f = a(this), e = f.data("uid"), g = f.text();
                f.find(".newmsg").hide();
                f.addClass("on").siblings("li").removeClass("on");
                c.find("dl.list-" + e).show().siblings("dl").hide();
                c.scrollTop(c[0].scrollHeight);
                d.send_input.trigger("focus")
            });
            b.on("click", ".u-close", function (j) {
                j.stopPropagation();
                var i = a(this).parents("li"), h = i.data("uid"), g = i.prev("li"), f = i.next("li");
                if (g[0]) {
                    g.click()
                } else {
                    if (f[0]) {
                        f.click()
                    } else {
                        d.box.fadeOut(200);
                        d.is_open = 0
                    }
                }
                i.remove();
                c.find("dl.list-" + h).remove()
            });
            c.on("click", "a", function (g) {
                g.preventDefault();
                var f = a(this).data("uid");
                if (f > 0) {
                    UserCard_win.getCard(f)
                }
            });
            this.sendInit()
        },
        sendInit: function () {
            var d = ChatPrivateWin, b = d.box.find(".chat-act"), c = b.find("a.face");
            d.send_input = b.find("textarea");
            d.send_button = b.find("button");
            _face = new Faces({btn: c[0], input_text: d.send_input[0], fname: "chat", vip: 0, safe: 0});
            d.send_input.on("keydown", function (e) {
                if (e.which == 13) {
                    d.sendMsg()
                }
            });
            d.send_button.on("click", function () {
                d.sendMsg()
            })
        },
        sendMsg: function () {
            var d = ChatPrivateWin, c = d.send_input, e = a.trim(c.val());
            if (d.send_button.hasClass("disabled")) {
                return
            }
            if (e == "") {
                alert("请输入聊天内容！");
                c.focus();
                return
            }
            if (e.len() > 120) {
                alert("聊天内容过长！");
                c.focus();
                return
            }
            _touid = d.box.find(".chat-ulist li.on").data("uid");
            if (!_touid) {
                alert("请选择私聊对象！");
                return
            }
            var b = {touid: _touid, con: e, pri: 1, sendBack: a.proxy(d.sendBack, d)};
            ChatList.sendPriMsg(b);
            d.send_input.attr("disabled", true);
            d.send_button.attr("disabled", true);
            d.send_button.addClass("disabled")
        },
        sendBack: function (b) {
            var c = ChatPrivateWin;
            c.send_input.val("");
            c.send_input.attr("disabled", false);
            c.send_button.attr("disabled", false);
            c.send_button.removeClass("disabled");
            c.send_input.trigger("focus")
        }
    }
})();
(function () {
    var a = jQuery;
    window.Faces = function () {
        this.initialize.apply(this, arguments)
    };
    a.extend(Faces.prototype, {
        init: 0, initialize: function (b) {
            this.haveVip = b.vip;
            this.haveSafe = b.safe;
            this.isSafe = b.safe && Room.user.safe || Room.user.role == 9;
            this.isVip = b.vip && (/7103|7104|7105|7559/.test(Room.user.prop) || Room.user.role == 9);
            this.btn = a(b.btn);
            this.btn.bind("click", a.proxy(this.visible, this));
            this.input_text = a(b.input_text);
            this.smile = {base: FaceSymbols, vip: FaceVip, safe: FaceSafe};
            this.cells = {base: 9, vip: 3, safe: 4};
            this.isTitle = b.isTitle
        }, insertFace: function (b) {
            if (this.input_text.prop("disabled")) {
                return
            }
            if (this.input_text.val() == this.input_text.attr("title") || this.input_text.hasClass("notice_default")) {
                this.input_text.focus()
            }
            insertFace(this.input_text[0], b)
        }, visible: function (b) {
            b.preventDefault();
            b.stopPropagation();
            if (!this.panel) {
                this.createPanel()
            }
            this.panel.visible()
        }, createPanel: function () {
            var b = this;
            b.panel = {};
            b.panel.box = a("<div>", {"class": "face-pop"}).on("click", "td", function (c) {
                console.log(this);
                b.insertFace("/" + this.title);
                b.panel.iHidden()
            }).appendTo(document.body);
            a.extend(b.panel, {
                vis: 0, isInit: 0, gifInit: function () {
                    this.isInit = 1;
                    var e = a('<div class="face-default"/>').appendTo(b.panel.box);
                    var f = a('<div class="face-vip"/>').appendTo(b.panel.box);
                    var g = a('<div class="face-safe"/>').appendTo(b.panel.box);
                    e.append(this.get_smile_table("base"));
                    if (b.isVip) {
                        f.append(this.get_smile_table("vip"))
                    }
                    if (b.isSafe) {
                        g.append(this.get_smile_table("safe"))
                    }
                    var d = a('<div class="tab"/>').html('<a class="default on" data-type="face-default" title="普通表情"><i></i></a><a class="vip" data-type="face-vip" title="VIP和绿卡专用表情"><i></i></a><a class="safe" data-type="face-safe" title="守护专用表情"><i></i></a>').appendTo(b.panel.box);
                    var h = b.panel.box.find("div.face-default, div.face-vip, div.face-safe"), c = d.find("a");
                    if (!b.haveVip) {
                        c.filter(".vip").css("display", "none")
                    }
                    if (!b.haveSafe) {
                        c.filter(".safe").css("display", "none")
                    }
                    c.click(function (j) {
                        j.preventDefault();
                        var i = a(this).attr("data-type");
                        if (i == "face-vip" && !b.isVip) {
                            Prompt.create({
                                content: "您没有VIP或绿卡，不能使用会员专属表情。<br/>是否现在购买VIP？",
                                btn_sure: {text: "立即购买", link: "/user/shopprop.php", target: "shop"},
                                btn_cancel: {text: "取消"}
                            })
                        } else {
                            if (i == "face-safe" && !b.isSafe) {
                                Prompt.create({
                                    content: "您不是本房间的守护，不能使用专属表情和礼物。<br/>现在去查看守护的各类尊贵特权吗？",
                                    btn_sure: {
                                        text: "立即查看",
                                        link: "/user/prop/showBuyProp.php?rid=" + page.rid,
                                        target: "_target"
                                    },
                                    btn_cancel: {text: "取消"}
                                })
                            } else {
                                h.css("display", "none");
                                h.filter("." + i).css("display", "block");
                                c.removeClass("on");
                                a(this).addClass("on")
                            }
                        }
                    });
                    this.dev = a.proxy(this._dev, this)
                }, get_smile_table: function (j) {
                    var h = b.smile[j], n = document.createElement("table"), o = b.cells[j], l = n.insertRow(0), q = 0, f = 1;
                    var k = [];
                    for (var c in h) {
                        k.push([c, h[c]])
                    }
                    q = k.length / 1 + k.length % o / 1;
                    for (var g = 0; g < q; g++) {
                        if (g % o == 0 && g != 0) {
                            var l = n.insertRow(Math.floor(g / o))
                        }
                        var e = l.insertCell(g % o);
                        var d = k[g];
                        if (d) {
                            var m = d[1].slice(1);
                            e.title = m;
                            e.innerHTML = '<img alt="' + m + '" src="' + FaceUrl + d[0] + '.gif" />'
                        } else {
                            e.innerHTML = ""
                        }
                    }
                    return n
                }, visible: function () {
                    if (!this.isInit) {
                        this.gifInit()
                    }
                    if (this.vis) {
                        return this.iHidden()
                    }
                    var c = b.btn.offset();
                    this.box.css({left: c.left - 150, top: c.top - 280, opacity: 1, visibility: "visible"});
                    this.vis = 1;
                    a(document).on("click", this.dev)
                }, iHidden: function () {
                    this.box.css({top: -10000, opacity: 0, visibility: "hidden"});
                    this.vis = 0;
                    this.btn = null;
                    a(document).off("click", this.dev);
                    return false
                }, _dev: function (d) {
                    var c = d.target;
                    if (!a.contains(this.box[0], c) && c != this.box[0]) {
                        this.iHidden()
                    }
                }
            })
        }
    })
})();
$LAB.script(JSF.jq).wait(function () {
    Room.Msg.set_getback({
        419: function (b) {
            Room.Army.show_big(b.content)
        }, 532: function (b) {
            Room.Army_rank.setList(b.content)
        }
    });
    var a = jQuery;
    Room.Army = {
        army_list: {}, get_head: function (b) {
            return '<a href="/a/' + b + '" title="军团" target="_blank"><em class="army_level" style="background-image:url(background-image:url(http://vi0.6rooms.com/live/army/' + b + '.png)"><i class="army' + _army.r + '"></i></em></a>'
        }, get_chat_ico: function (c) {
            var b = this.army_list[c];
            if (b && b.f == 1) {
                return this.get_head(c)
            } else {
                return ""
            }
        }, init: function () {
            if (!_puser.uid) {
                return
            }
            var b = this;
            var e = _puser.army.split("-");
            if (e[1] == 1 || e[1] == 2) {
                var d = e[0];
                var c = a('<div class="army-mass-btn" id="army-mass-btn"><a>集结号</a></div>');
                c.insertAfter(a("#userPanel"));
                c.find("a").click(function (f) {
                    f.preventDefault();
                    b.callup(d)
                })
            }
        }, parse_list: function (b) {
            this.army_list = b
        }, show_big: function (e) {
            if (!Room.m.isArmyShow) {
                return
            }
            var c = [];
            a.each(e.list, function (f, g) {
                c.push('<li><a href="" onclick="UserCard_win.getCard(' + g.uid + '); return false"><i class="rich' + g.rank + " rich-" + g.uid + '"></i>' + g.uname + "</a></li>")
            });
            var b = a("<div>").addClass("army_set_list fixpng").html('<div class="army_list"><ul>' + c.join("") + '</ul></div><div class="army_ico"><em class="army_flag_big"><i class="name">' + e.info.name + '</i><i class="num">' + e.info.rank + '</i></em></div><span class="army_state fixpng">集结完毕</span><a title="关闭" href="#" class="close_big"></a>').appendTo(document.body).css({
                display: "block",
                opacity: 0
            });
            b.animate({opacity: 1, left: b.position().left - 16}, 100);
            var d = setTimeout(function () {
                Room.Army.remove_big(b)
            }, 30000);
            b.find("a.close_big").bind("click", function (f) {
                f.preventDefault();
                clearTimeout(d);
                d = null;
                Room.Army.remove_big(b)
            })
        }, remove_big: function (b) {
            b.animate({opacity: 0, left: b.position().left - 16}, 100, function () {
                b.remove();
                b = null
            })
        }, callup: function (c) {
            var b = {
                class_name: "amry-prompt",
                title: "军团集结号",
                content: '<div class="mass"><form action="/army/home/together.php" method="post" id="bigMac"><label>集结目的地：</label><p class="fix"><input name="address" placeholder="请输入集结地址" value="' + location.href.replace(/#.*$/, "") + '" type="text" id="army-mass-url" class="army-url"></p><h4>提示：</h4><p class="hint"><span>发出集结号，所有在房间内的军团成员可以收到集结通知！</span>房间内同时聚集的军团成员超过15人，则表示该军团在该房间处于集结状态；军团集结成功，可获得200点数奖励，每天奖励1次；同时参与集结的军团成员可获得特殊进场座驾1天，每天奖励1次。<br/>系统将于第二天自动加上军团点数并发放座驾。</p></form></div>',
                btn_sure: {text: "发出"},
                btn_cancel: {text: "取消"},
                onSubmit: function () {
                    var d = a("#army-mass-url").val();
                    if (d.indexOf("6.cn") <= 0) {
                        alert("请输入正确的集结地址");
                        return
                    }
                    jQuery.getJSON("/army/home/together.php", {gid: c, url: d}, function (e) {
                        if (e.flag == 1) {
                            alert(e.content);
                            Prompt.close()
                        } else {
                            alert(e.content)
                        }
                    })
                }
            };
            Prompt.create(b)
        }
    };
    Room.Army_rank = {
        init: function () {
            if (page.tpl != "2016") {
                return
            }
            var b = Room.Army_rank;
            if (!Room.user.role) {
                setTimeout(b.init, 500);
                return
            }
            a.ajax({
                dataType: "json", url: "/army/roomArmyRank.php", data: {rid: page.rid}, success: function (c) {
                    if (c.flag == 1) {
                        b.show(c.content)
                    }
                }
            })
        },
        html: {
            btn: '<div class="army-hold-btn" id="army-hold-btn" title="军团护卫" data-tracing="iqg9rubp"><a class="holder"><span>{name}</span><em>{rank}</em></a></div>',
            list: '<div class="army-hold" id="army-hold" data-tracing="iqg9rubp"><div class="arrow"><i>◆</i></div><a class="close-big close" href="#" title="关闭"></a><div class="holder">上周头名：{ahtml}</div><div class="army-rank"><div class="tab"><a class="on" data-class="army-top">本周排行<i class="line"></i></a><a data-class="army-safe">成为护卫军团<i class="line"></i></a></div><div class="army-top"><ul class="title"><li><span class="rank">排名</span><span class="name">军团名称</span><span class="cash"><i></i>贡献财富</span></li></ul><ul class="list"></ul></div><div class="army-safe"><div class="btn"><a class="safe-join"><i></i>我要护卫</a><a class="safe-quit"><i></i>退出护卫</a></div><div class="remind"><p><i></i>军团同时只能护卫1个主播，由军团司令申请；</p><p><i></i>申请完成后，军团即成为主播的护卫军团，进入护卫榜；</p><p><i></i>军团司令可主动更换护卫的主播，每次更换的时间间隔不少于7天；</p><p><i></i>主播可主动撤销军团的护卫资格。</p></div></div></div></div>',
            li: '<li data-gid={gid}><span class="rank"><em class="fixpng t{num}">{num}</em></span><span class="name"><a title="{name}军团" target="_blank" href="/a/{gid}"><em class="army_level" style="background:url(http://vi0.6rooms.com/live/army/{pic}.png)"><i class="army{rank}"></i></em></a></span><span class="cash">{money}</span><a class="remove" title="删除护卫"></a></li>'
        },
        show: function (g) {
            var e = this;
            var d = g.lastWeekArmy;
            var h = g.thisWeekList;
            var b = g.user.owner;
            var f, c;
            if (d.length != 0) {
                f = this.html.btn.replace("{name}", d.name).replace("{rank}", d.rank);
                c = this.html.list.replace("{ahtml}", '<a title="' + d.name + '军团" target="_blank" href="/a/' + d.gid + '"><em class="army_level" style="background:url(http://vi0.6rooms.com/live/army/' + d.bpic + '.png)"><i class="army' + d.rank + '"></i></em></a>')
            } else {
                f = this.html.btn.replace("{name}", "暂无").replace("{rank}", 0);
                c = this.html.list.replace("{ahtml}", '<span style="color:#666">暂无</span>')
            }
            this.box_btn = a(f).appendTo(a("#synopsis"));
            this.box_btn.fadeIn(500);
            this.box_list = a(c).appendTo("body");
            this.setList(h);
            if (_puser.uid == page.rid) {
                this.box_list.find(".army-top").addClass("army-top-anchor")
            }
            if (b) {
                this.box_list.find("a.safe-join").hide();
                this.box_list.find("a.safe-quit").css("display", "block")
            } else {
                this.box_list.find("a.safe-join").css("display", "block");
                this.box_list.find("a.safe-quit").hide()
            }
            this.events()
        },
        setList: function (d) {
            var c = Room.Army_rank, b = "";
            if (d.length == 0) {
                b = '<li class="none">暂无护卫军团</li>'
            }
            a.each(d, function (f, g) {
                b += c.html.li.replace(/\{num\}/g, f + 1).replace("{name}", g.name).replace(/\{gid\}/g, g.gid).replace("{pic}", g.bpic).replace("{rank}", g.rank).replace("{money}", g.money)
            });
            c.box_list.find("ul.list").html(b)
        },
        events: function () {
            var d = this, b = this.box_btn, c = this.box_list;
            b.find("a").on("click", function (f) {
                f.preventDefault();
                if (c.css("display") == "block") {
                    c.fadeOut(200)
                } else {
                    c.css({
                        left: (b.offset().left + 22) + "px",
                        top: b.offset().top + b.height() + 6 + "px"
                    }).fadeIn(200)
                }
            });
            c.find("a.close").on("click", function (f) {
                f.preventDefault();
                c.fadeOut(200)
            });
            var e = c.find("div.army-top, div.army-safe");
            c.find(".tab a").on("click", function (g) {
                g.preventDefault();
                var f = a(this).data("class");
                a(this).addClass("on").siblings("a").removeClass("on");
                e.hide().filter("." + f).show()
            });
            c.find(".army-safe a").on("click", function (g) {
                g.preventDefault();
                if (!_puser.uid) {
                    Login.toLogin();
                    return
                }
                var f = a(g.target);
                if (f.hasClass("safe-join")) {
                    a.getJSON("/army/convoy/add.php", {rid: page.rid}, function (h) {
                        if (h.flag == "001") {
                            c.find("a.safe-join").hide();
                            c.find("a.safe-quit").css("display", "block");
                            Prompt.alert(h.content)
                        } else {
                            Prompt.alert(h.content)
                        }
                    })
                } else {
                    Prompt.create({
                        btn_sure: {text: "确定"},
                        btn_cancel: {text: "取消"},
                        content: "您确定要退出护卫军团？",
                        onSubmit: function () {
                            Prompt.close();
                            a.getJSON("/army/convoy/quit.php", {rid: page.rid}, function (h) {
                                if (h.flag == "001") {
                                    c.find("a.safe-join").css("display", "block");
                                    c.find("a.safe-quit").hide();
                                    Prompt.alert(h.content)
                                } else {
                                    Prompt.alert(h.content)
                                }
                            })
                        }
                    })
                }
            });
            c.find("ul.list").on("click", "a.remove", function (i) {
                i.preventDefault();
                var g = a(this).parents("li"), h = g.data("gid"), f = g.find("span.name").html();
                Prompt.create({
                    btn_sure: {text: "确定"},
                    btn_cancel: {text: "取消"},
                    content: "您确定要删除 " + f + "的军团护卫？",
                    onSubmit: function () {
                        Prompt.close();
                        a.getJSON("/army/convoy/cancel.php", {gid: h}, function (j) {
                            if (j.flag == "001") {
                                Prompt.alert(j.content)
                            } else {
                                Prompt.alert(j.content)
                            }
                        })
                    }
                })
            })
        }
    };
    Room.Army.init();
    Room.Army_rank.init()
});