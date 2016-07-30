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
    getNotes: function (c) {
        var a = jQuery.extend(a, this.n);
        if (c > 0) {
            a = jQuery.extend(a, this.n1);
            if (c > 2) {
                a = jQuery.extend(a, this.n2);
                if (c > 4) {
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
    parseErr: function (c) {
        var a = this.err[c.flag];
        if (a) {
            this[a](c.content)
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
    onRepay: function (c) {
        if (window.__pay__) {
            return
        }
        window.__pay__ = 1;
        this.room_stop();
        var a = function (d) {
            if (jQuery.type(d) != "object") {
                return alert("网络错误！")
            }
            switch (d.flag) {
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
            content: '<strong>本房间是收费房间</strong><p>需要花费<em style="color:red">' + c + '</em>六币 购买门票才能进入房间。</p><p style="text-align:right">注：门票等同于礼物消费</p>',
            onSubmit: function () {
                if (confirm("门票价格 " + c + "六币 确定支付嘛？")) {
                    jQuery.ajax({
                        dataType: "json",
                        url: "/room/action/validate.php",
                        data: {r: page.rid, m: c},
                        success: a
                    })
                }
                return 0
            }
        })
    },
    onPwd: function () {
        this.room_stop();
        var a = function (c) {
            if (jQuery.type(c) != "object") {
                return alert("网络错误！")
            }
            switch (c.flag) {
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
                    this.onRepay(c.content);
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
                var c = Prompt.box.find('input[name="prive_pwd"]').val();
                jQuery.ajax({
                    dataType: "json",
                    url: "/room/action/validate.php",
                    data: {r: page.rid, passwd: c},
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
        var c = jQuery.makeArray(arguments), f = c.shift().split("."), a = f.shift();
        var g = this[a] || window[a];
        if (g) {
            var h = f.shift();
            for (var d = 0; d < f.length; d++) {
                g = g[h];
                h = f[d]
            }
            if (h) {
                g[h].apply(g, c)
            } else {
                g.apply(g, c)
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
            var c = this;
            this.sug = jQuery("<div>", {
                "class": "user-manager",
                style: "visibility:hidden; top:-10000px",
                html: this.html
            }).bind("mouseover", function () {
                clearTimeout(c.t)
            }).bind("mouseout", function () {
                c.iHidden()
            }).appendTo(document.body);
            this.times = {t1: 0, t2: 0};
            this.sug.find(".super-rich, .user-oper").bind("mouseenter mouseleave", function (i) {
                var h = jQuery(this), d = h.attr("t");
                clearTimeout(Room.userMenu.times[d]);
                var g, f;
                if (i.type == "mouseenter") {
                    g = "block";
                    f = 500
                } else {
                    g = "none";
                    f = 200
                }
                Room.userMenu.times[d] = setTimeout(function () {
                    h.find(".more").css("display", g)
                }, f)
            });
            this.icons = this.sug.find("p.icon:eq(0)");
            this.username = this.sug.find("h6");
            this.sug.find("span.to-chat-pri").click(function (d) {
                d.stopPropagation();
                c.iHidden("y");
                ChatPrivateWin.open({uid: c.uid, alias: c.alias});
                return false
            });
            this.sug.on("click", "a", function (d) {
                var f = jQuery(this);
                if (!f.hasClass("is_link")) {
                    d.preventDefault()
                }
                if (!f.hasClass("menu_s")) {
                    c.iHidden()
                }
                var g = f.prop("class").replace(/^.+\s+/, "");
                if (!pageMessage.userCheck && !jQuery.inArray(g, ["into_room", "userinfo"])) {
                    Login.toLogin();
                    return
                }
                switch (g) {
                    case"sendGift":
                        Room.present.setTou({uid: c.uid, alias: c.alias, rid: c.rid});
                        setTimeout(function () {
                            Room.present.set_gift(f)
                        }, 50);
                        break;
                    case"add_f":
                        IM.add.apply_friend(c.uid);
                        break;
                    case"add_follow":
                        Room.follow(c.uid);
                        break;
                    case"say_pub":
                        Room.chatList.setCurUser({uid: c.uid, alias: c.alias, rid: c.rid});
                        break;
                    case"say_pri":
                        Room.chatList.setCurUser({uid: c.uid, alias: c.alias, rid: c.rid, pri: 1});
                        break;
                    case"into_room":
                        d.target.href = "/" + c.rid;
                        return true;
                        break;
                    case"del_note":
                        Room.stickNote.deStick();
                        break;
                    case"stone":
                        Stone.start({uid: c.uid, alias: c.alias});
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
                        Prompt.confirm("总管具有提拔/撤销普通房管的权限，任期为1个月。<br/>您确定要提拨 " + Room.userMenu.alias + " 为总管吗？", function (h) {
                            if (h) {
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
                        Room.resolve(f);
                        break;
                    case"move":
                        Room.HostPower.moveUser(f.attr("rid"));
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
        visible: function (f, a) {
            clearTimeout(this.t);
            Room.userList.isOver2 = 1;
            try {
                if (this.par) {
                    this.par.removeClass("on")
                }
                f.addClass("on")
            } catch (h) {
            }
            this.par = jQuery(f);
            if (!a) {
                a = Room.listUsers[f.id]
            }
            if (jQuery.inArray(Room.user.role / 1, [10, 8, 9, 3]) > -1) {
                if (Room.user.role == 10) {
                    if (jQuery.inArray(a.role / 1, [10, 9, 3]) > -1) {
                        this.sug.find(".main_1 .more-list").css("display", "none")
                    } else {
                        this.sug.find(".main_1 .more-list").css("display", "block");
                        if (a.role == 7) {
                            d = ".del_power";
                            _selector_h = ".set_power, .del_bo"
                        } else {
                            d = ".set_power";
                            _selector_h = ".del_power"
                        }
                        this.sug.find(d).css("display", "block");
                        this.sug.find(_selector_h).css("display", "none")
                    }
                } else {
                    if ("893".indexOf(Room.user.role) > -1) {
                        if (jQuery.inArray(a.role / 1, [9, 3]) > -1) {
                            this.sug.find(".main_1 .more-list").css("display", "none")
                        } else {
                            this.sug.find(".main_1 .more-list").css("display", "block");
                            var d, c;
                            switch (a.role / 1) {
                                case 5:
                                    d = ".set_power_z";
                                    _selector_h = ".del_power, .del_power_z,.set_power";
                                    break;
                                case 7:
                                    d = ".del_power,  .set_power_z";
                                    _selector_h = ".set_power, .del_power_z";
                                    break;
                                case 10:
                                    d = ".del_power_z";
                                    _selector_h = ".set_power, .del_power, .set_power_z";
                                    break;
                                default:
                                    d = ".set_power, .set_power_z";
                                    _selector_h = ".del_power, .del_power_z"
                            }
                            this.sug.find(d).css("display", "block");
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
            var g = this;
            a.ico = a.ico || [];
            a.ico = jQuery.grep(a.ico, function (i) {
                return jQuery.inArray(i / 1, g.no_badges) < 0
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
            for (var c in this.hid_fn) {
                try {
                    this.hid_fn[c]()
                } catch (a) {
                    console.log(c)
                }
            }
        },
        hid: function () {
            var a = Room.userMenu;
            try {
                a.par.removeClass("on")
            } catch (c) {
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
        dev: function (c) {
            if (!c) {
                return
            }
            var a = jQuery(c.target), d = Room.userMenu;
            while (!a.is("body")) {
                if (a[0] == d.sug[0] || (d.par && a[0] == d.par[0])) {
                    return
                }
                a = a.parent()
            }
            d.iHidden("y")
        },
        set_pos: function () {
            var i = this.par.offset(), f, h;
            if (!this.par.is("li")) {
                f = i.left + this.par.width();
                if ((f + 200 + 30) > jQuery(document.body).width()) {
                    f = i.left - 200
                }
            } else {
                f = i.left - 200
            }
            var h = i.top, d = jQuery(document.body).height(), a = jQuery(document.body).scrollTop(), c = this.sug.height() + 45, g = this.sug.width();
            if (h + c > d + a) {
                if (d > c) {
                    h = d + a - c
                } else {
                    h = a
                }
            }
            if (i.left - g < 5) {
                f = i.left + this.par.width()
            }
            this.sug.css({top: h, left: f})
        }
    },
    resolve: function (g) {
        var d = Room.userMenu;
        if (!d.resolve) {
            d.resolve = jQuery("<ul>", {"class": "ul_list"}).appendTo(d.sug);
            var h = [{n: "一", r: 34948913}, {n: "二", r: 34948924}, {n: "三", r: 34948932}, {
                n: "四",
                r: 34948942
            }, {n: "五", r: 34948944}], c = [];
            for (var f = 0; f < h.length; f++) {
                c.push('<a href="" class="move" rid="' + h[f].r + '">争议房间' + h[f].n + "</a>")
            }
            d.resolve.html("<li>" + c.join("</li><li>") + "</li>")
        }
        if (d.resolve.css("visibility") == "hidden") {
            var a = jQuery(g).position();
            d.resolve.css({top: a.top + 21, left: a.left + 15});
            d.resolve.css("visibility", "visible")
        } else {
            d.resolve.css("visibility", "hidden")
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
                var i = this, k = Room.userMenu.note, j = k.box;
                clearTimeout(k._nt);
                clearTimeout(k._st);
                k._st = setTimeout(function () {
                    k.setPos(i, j)
                }, 500)
            }, note_hide: function (i) {
                var j = Room.userMenu.note, i = j.box;
                clearTimeout(j._nt);
                clearTimeout(j._st);
                j._nt = setTimeout(function () {
                    i.css("top", -99999)
                }, 200)
            }, setPos: function (k, m) {
                var i = Room.userMenu.sug.offset().top;
                var l = jQuery(k).offset().top;
                var p = m.height() + 45;
                var n = jQuery(document.body).height();
                var j = jQuery(document.body).scrollTop();
                var o = l - i;
                clearTimeout(this._nt);
                if ((n + j) - l < p) {
                    if (n > p) {
                        o = (n + j - p) - i
                    } else {
                        o = j - i
                    }
                }
                m.css({top: o, left: 175})
            }
        });
        a.note.add_note.bind("mouseover", a.note.note_vis).bind("mouseout", a.note.note_hide);
        a.note.box.bind("mouseover", a.note.note_vis).bind("mouseout", a.note.note_hide);
        var d = [], h = Notes.getNotes(Room.user.fstar);
        for (var g in h) {
            d.push(h[g])
        }
        d.sort(function (j, i) {
            return j.ord - i.ord
        });
        for (var c = 0; c < d.length; c++) {
            var f = d[c];
            if (f.u) {
                jQuery("<li>", {
                    id: f.id, "class": f.cls, html: '<a href="">' + f.name + "</a>", click: function () {
                        Room.stickNote.stick(this.id)
                    }, mouseenter: function (i) {
                        wsug(i, "价值：100个六币")
                    }, mouseleave: function () {
                        try {
                            wsug("", 0)
                        } catch (i) {
                        }
                    }
                }).appendTo(a.note.box)
            }
        }
    },
    Ruser: {
        parse: function (j) {
            if (j.status == "001") {
                page.authKey = j.authKey;
                var a = j.priv.split("|");
                var h = {"7116": 1, "7117": 2, "7118": 3, "7119": 4, "7120": 5};
                var g = a[6].split("-"), f = 0;
                for (var d = 0; d < g.length; d++) {
                    f = h[g[d]];
                    if (f) {
                        break
                    }
                }
                var c = a[6].match(/(7570|7569)/);
                c = (c ? c[1] : 0) || Number(a[0]) == 9;
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
                    fstar: f,
                    safe: c,
                    master: _puser.uid == page.rid,
                    army: a[13],
                    coin6: j.userInfo.userRoomInfo.coin6all
                };
                if (j.userInfo) {
                    Room.user404 = j.userInfo;
                    Room.freeGifts = j.userInfo.proplist;
                    Room.privChat.init(j.userInfo.userRoomInfo.prive);
                    Room.giftpk = j.userInfo.eventDefend;
                    Fav.init(j.userInfo.isFav);
                    Mediator.publish("account-update", j.userInfo)
                }
                Room.Ready.load()
            } else {
                onErr.parseErr(j)
            }
        }
    },
    follow: function (a) {
        jQuery.ajax({
            dataType: "json", data: {tuid: a}, url: "/message/follow_add.php", success: function (c) {
                if (c.flag == "001") {
                    Prompt.alert("关注成功")
                } else {
                    if (c.flag == "203") {
                        Login.toLogin()
                    } else {
                        alert(c.content)
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
            } catch (c) {
                console.log(c.message + "\n" + this)
            }
        });
        if (!a.is_init) {
            window.tt = 0;
            a.is_init = 1;
            jQuery.each(a.init_list, function () {
                try {
                    this()
                } catch (c) {
                    console.log(c.message + "\n" + this)
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
            var c = Room.Socket;
            c.viewWatch("<br/>logining= " + (++c.lwt.tim) + " 秒");
            if (c.lwt.tim > 10) {
                c.reLogin()
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
    }, getSwfCount: 0, init: function (c) {
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
        jQuery.extend(a.parback, c || {})
    }, getProxy: function () {
        return swfobject.getObjectById("room_proxy") || 0
    }, tongji: function (a) {
        clearTimeout(this.tongji_t);
        var c = (new Date).getTime() - this._loginTime;
        (new Image).src = "http://sclick.6rooms.com/w.html?act=24&uid=" + _puser.uid + "&tm=" + c + "&st=" + a + "&ip=" + encodeURIComponent(this.curIp.ip + ":" + this.curIp.port)
    }, setIp: function (c) {
        if (c) {
            var a = c.split(":");
            this._IP = {ip: a[0], port: a[1]}
        } else {
            this._IP = null
        }
        this.reLogin()
    }, history: [], getHistory: function () {
        var a = [];
        jQuery.each(this.history, function (c, d) {
            a.push(c + " - " + d.ip + ":" + d.port)
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
    }, _loginTime: 0, tongji_t: 0, login: function (g) {
        if (!this.is_ip) {
            jQuery.ajax({
                dataType: "json", url: "/room/getChat.php?rid=" + page.rid, success: function (i) {
                    Room.Socket.ipBack(i)
                }, error: function () {
                    jQuery.getJSON("/room/getIpList.php?rid=" + page.rid, function (i) {
                        Room.Socket.ipBack(i)
                    })
                }
            })
        } else {
            if (this._IP) {
                this.curIp = this._IP
            } else {
                this.curIp = this.IP.getIp()
            }
            var c = this.curIp.ip, a = this.curIp.port;
            this.loginWait(1);
            var d = 0;
            if (_puser.uid) {
                d = _puser.uid
            } else {
                d = _puser.guest_id
            }
            this.history.push(this.curIp);
            if (!this.isTongJi) {
                var f = this;
                f.isTongJi = 1;
                f._loginTime = (new Date).getTime();
                this.tongji_t = setTimeout(function () {
                    f.tongji(-1)
                }, 15000)
            }
            var h = _puser.encpass || "";
            this.viewWatch('<span style="display:block; color:blue; padding:10px 5px 0 5px">proxy.login(' + this.curIp.ip + "," + this.curIp.port + "," + d + "," + h + "," + page.rid + ", 'proxyCallBackRoom')</span>");
            this.proxy.login(c, a, d, h, page.rid, "proxyCallBackRoom", 7 * 1000);
            if (jQuery.type(g) == "number") {
                (new Image).src = "http://sclick.6rooms.com/w.html?act=27&uid=" + _puser.uid + "&type=" + g + "&ip=" + encodeURIComponent(this.curIp.ip + ":" + this.curIp.port)
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
            var d = jQuery.parseJSON(a);
            Room.Msg.get(d);
            d = null
        } catch (c) {
            this.viewWatch("ERR：<textarea>" + a + "</textarea>");
            this.viewWatch('<span style="color:red">' + c.message + "</span>");
            return
        }
    }, callback: function (c, a) {
        if (this.watch) {
            this.viewWatch('<span style="display:block; color:green; padding:10px 5px 0 5px"><strong>t:' + (new Date()).getTime() + "</strong> command: " + c + "<br />content: " + decodeURIComponent(a) + "</span>")
        }
        switch (c) {
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
        var d = [], g = {};
        for (var f in Pres) {
            if (Pres[f].z) {
                var c = Pres[f].desc || Pres[f].title;
                d.push('<a href="#" zid="' + Pres[f].id + '">' + c.replace(/<.+?>/g, "") + "</a>")
            }
            if (Pres[f].s) {
                g[f] = 1000
            }
        }
        Room.freeGifts = g;
        Room.present.preBox.parseFreeGift();
        Room.present.preBox.tab_change(10);
        jQuery('<div class="roomDebugBox" id="zj_test" style=" width:95%; height:70px; line-height:20px; top:5px">').html("<strong>专属座驾：</strong>" + d.join(" - ")).appendTo(document.body).on("click", "a", function () {
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
    get: function (d) {
        if (d.flag == "001") {
            page.initTime = d.time;
            if (!Room.isInit && d.content.typeID != "404" && d.content.typeID != "408" && d.content.typeID != "123") {
                return
            }
            var c = d.content.typeID, a = this._getback[c];
            if (a) {
                a(d.content)
            }
            d = null
        } else {
            onErr.parseErr(d)
        }
    }, send: function (a, f) {
        var d = '{"t":"' + a + '", "content":' + jQuery.toJSON(f) + "}";
        Room.Socket.sendMessage(d);
        if (page.tpl == "v2013") {
            User_life.activate(a)
        }
    }, _getback: {
        701: function (d) {
            var c = d.content.t, a = Room.Msg._callback[c];
            if (a) {
                a(d.content)
            }
            Mediator.publish("room.callback", d.content)
        }, 161: function (a) {
            if (a.to == _puser.uid) {
                Prompt.create({
                    btn_sure: 1,
                    width: 700,
                    content: '<p style="font-size:14px;color:red" class="p161">' + a.content + "</p>"
                })
            }
        }, 1053: function (a) {
            var c = [];
            jQuery.each(a.content, function () {
                c.push('<a href="' + this.url + '" target="_blank">' + this.alias + "</a>")
            });
            Prompt.create({
                btn_sure: {text: "确定", href: ""},
                content: "<p>您已经在其它房间的麦上，请先下麦然后再尝试在本房间直播</p>" + c.join("<br/>")
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
            var c = Room.Msg._getback;
            c["404"](a.content["404"]);
            if (c["403"]) {
                c["403"](a.content.list)
            }
        }, 404: function (c) {
            Room.Ruser.parse(c.content);
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
                    msg_gamerunmsg: function (f) {
                        if (f.flag == "001" && f.content) {
                            var g = [];
                            for (var d = 0; d < f.content.length; d++) {
                                g.push(f.content[d])
                            }
                            Room.chatList.onlyMsg(g.join("<br/>"))
                        }
                    }
                });
                Room.Msg.send("msg_gamerunmsg", {type: a})
            }
        }, 114: function (c) {
            if (c.content.type == "egg") {
                page.isEgg = c.content.value
            } else {
                if (c.content.type == "pubchat") {
                    Room.chatList.setChatChange(c.content.value)
                } else {
                    if (c.content.type == "anonymchat") {
                        Room.chatList.anonym.start(c.content.value)
                    } else {
                        if (c.content.type == "closeMsgPic") {
                            var a = jQuery("#uploadeImage");
                            if (c.content.value) {
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
                dataType: "json", url: "/room/getRoomMsgSys.php", data: {t: a.content}, success: function (c) {
                    jQuery.each(c.content, function () {
                        var d = Room.Msg._getback[this.typeID];
                        if (d) {
                            d(this)
                        }
                    });
                    c = null
                }
            });
            a = null
        }, 1413: function (a) {
            jQuery.each(a.content, function () {
                var c = Room.Msg._getback[this.typeID];
                if (c) {
                    c(this)
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
        }, 123: function (h) {
            var d = {
                1: '<a class="from-iphone" target="_blank" href="https://itunes.apple.com/cn/app/xiu-chang-hd/id546304751?l=cn&mt=8">(<i title="来自iPad"></i>)</a>',
                2: '<a class="from-iphone" target="_blank" href="https://itunes.apple.com/cn/app/xiu-chang/id546300644?l=cn&mt=8">(<i title="来自iPhone"></i>)</a>',
                3: '<a class="from-android" target="_blank" href="http://v.6.cn/event/liveClient/?t=phone">(<i title="来自Android"></i>)</a>'
            };
            var i = {tm: h.tm, content: h.content.msg + (d[h.content.driver] || "")};
            var c;
            if ("theater,pps,wide".indexOf(page.tpl) < 0 && h.content.pngcar) {
                c = Pres[h.content.pngcar];
                i.content += '<div class="tSeatCar"><em class="carIco seatBig_' + c.id + '"></em><span class="carInfo"><em class="seat_' + c.id + '"></em>' + c.title + '<em class="carUid">' + h.content.rid + "</em></span></div>"
            }
            if (!Room.chatList) {
                try {
                    TempViewList.parseSysMsg(i)
                } catch (g) {
                }
            } else {
                Room.chatList.parseMsg(i)
            }
            if (h.content.prop > 0) {
                var a = h.content, f = {alias: a.alias, rid: a.rid, id: a.prop};
                if (Room.GiftSuper.isInit) {
                    Room.GiftSuper.zuojia(f)
                } else {
                    Room.prop_lib.push(f)
                }
            }
        }, 124: function (a) {
            Rank_happy.msg_up(a.content)
        }, 430: function (a) {
            Rank_god.play(a.content)
        }, 431: function (c) {
            Super_fireworks_effect.play(c.content);
            try {
                if (c.content.localrid == location.pathname.replace("/", "")) {
                    fireworks_guest_login.visible(1)
                }
            } catch (a) {
            }
        }, 125: function (a) {
            Rank_msg.master_up(a.content)
        }, "116": function (a) {
            location.href = location.href.replace(/(\#|\?).*$/, "") + "?" + (new Date()).getTime()
        }, 1425: function (c) {
            var a = c.content;
            Prompt.create({
                btn_sure: {text: "同意"},
                btn_cancel: {text: "拒绝"},
                callback: function (d) {
                    Room.Msg.send("priv_agreeinvitekick", {inviterid: a.uid, tuid: a.tuid, action: d ? 1 : 0})
                },
                content: "大神您好，主播" + a.alias + "(" + a.rid + ")请您帮TA将玩家" + a.talias + "(" + a.trid + ")限制进入自己的房间，期限为7天"
            })
        }, 163: function (c) {
            if (c.type == 4) {
                var a = '<div class="debug-box" id="debug-box"><a class="close"></a><p>后台人气流量监测显示，玩家在您房间的停留时间较短，经查原因可能是由于您的视频效果较差所致，请尽快联络运营人员为您调整视频效果。</p><p class="qq">运营QQ：' + c.content + "</p></div>";
                jQuery(a).appendTo(document.body);
                Mask.create();
                jQuery("#debug-box a").click(function () {
                    jQuery("#debug-box").remove();
                    Mask.remove()
                })
            } else {
                Prompt.alert(c.content)
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
        (function (d) {
            var c = [];
            d.each(function () {
                c.push(jQuery(this).attr("rel"));
                jQuery(this).bind("click", function (f) {
                    f.preventDefault();
                    var g = jQuery(this);
                    jQuery(c).css("display", "none");
                    jQuery("#" + g.attr("rel")).css("display", "block");
                    d.removeClass("on");
                    Room.chat_tab = "all_chat";
                    if (g.hasClass("only_chat")) {
                        Room.chat_tab = "only_chat";
                        (new Image).src = "http://sclick.6rooms.com/w.html?act=13"
                    }
                    g.removeClass("flash").addClass("on")
                })
            });
            c = "#" + c.join(",#")
        })(a)
    }
});
Rank_happy = {
    msg_list: [], msg_up: function (d) {
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
            this.msg_list.push(d);
            return
        }
        var c = (d.type == "wealth" ? "star" : "rich") + d.rank;
        var a = '<p class="user"><a href="/profile/index.php?rid=' + d.urid + '" target="_blank">' + d.alias + '</a><span>晋升</span><i class="' + c + '"></i></p><p class="btn"><a href="/profile/index.php?rid=' + d.urid + "&tid=" + d.msgid + '" target="_blank">立即接生</a></p>';
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
        items: [], input: 0, list: [], cur: null, max: 20, initialize: function (c) {
            this.callback = c.callback || function () {
                };
            this.input = a(c.input);
            this.is_order = c.order == 0 ? 0 : 1;
            this.box = a('<div class="preUserSug"><ul></ul></div>').appendTo(document.body).addClass(c._class || "");
            this.upList(c.items || []);
            this.input.bind("keydown", a.proxy(this.nextUserList, this));
            this.input.bind("click", a.proxy(function () {
                if (!this.vis) {
                    this.visible(this.input, c.posBox)
                } else {
                    this.iHidden()
                }
            }, this));
            if (c.btn && c.btn[0]) {
                c.btn.bind("click", a.proxy(function () {
                    if (!this.vis) {
                        this.visible(c.btn, c.posBox)
                    } else {
                        this.iHidden()
                    }
                }, this))
            }
        }, addItem: function (c) {
            var d = a.grep(this.items, function (f) {
                return f.uid != c.uid
            });
            d.unshift(c);
            if (d.length > this.max) {
                d.pop()
            }
            this.upList(d || [])
        }, empty: function () {
            this.items = [];
            this.box.find("ul").remove()
        }, upList: function (c) {
            if (c.length < 1) {
                return
            }
            this.items = c;
            this.box.find("ul").remove();
            var d = a("<ul>"), f = this;
            a.each(this.items, function (g, h) {
                a("<li>", {
                    html: h.alias,
                    mouseover: a.proxy(f.setOver, f, g),
                    mouseout: a.proxy(f.setOut, f, g),
                    click: a.proxy(f.setCallback, f, g)
                }).appendTo(d).attr("u", h.uid)
            });
            this.box.append(d);
            this.list = this.box.find("li")
        }, setOver: function (d) {
            var c = this.list;
            if (this.cur != null) {
                c.eq(this.cur).removeClass("on")
            }
            c.eq(d).addClass("on");
            this.cur = d
        }, setOut: function (c) {
            this.list.eq(c).removeClass("on");
            delete this.cur
        }, setCallback: function (f) {
            if (this.list.eq(f).length < 1) {
                return
            }
            var d = this.list.eq(f).attr("u"), c = this.getItem(d);
            this.callback(c);
            if (this.is_order) {
                this.addItem(c)
            }
            this.iHidden();
            return false
        }, getItem: function (d) {
            for (var c = 0; c < this.items.length; c++) {
                if (this.items[c].uid == d) {
                    return this.items[c]
                }
            }
        }, nextUserList: function (f) {
            if (this.items.length < 1) {
                return false
            }
            var d = this.list;
            if (!this.vis) {
                this.visible()
            }
            switch (f.which) {
                case 40:
                    if (this.cur == null) {
                        this.setOver(0)
                    } else {
                        var c = this.cur + 1;
                        if (!d[c]) {
                            c = 0
                        }
                        this.setOver(c)
                    }
                    break;
                case 38:
                    if (this.cur == null) {
                        this.setOver(this.items.length - 1)
                    } else {
                        var c = this.cur - 1;
                        if (!d[c]) {
                            c = this.items.length - 1
                        }
                        this.setOver(c)
                    }
                    break;
                case 13:
                    this.setCallback(this.cur);
                    break
            }
            return true
        }, visible: function (g, f) {
            this.vt = jQuery(g);
            if (this.items.length < 1) {
                return
            }
            var d = this.box, c = (f || this.input).offset();
            d.css({
                width: (f || this.input).width(),
                left: c.left,
                top: c.top - d.height(),
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
        }, dev: function (d) {
            var c = a(d.target);
            while (!c.is("body")) {
                if (c[0] == this.input[0] || c[0] == this.vt[0]) {
                    return
                }
                c = c.parent()
            }
            this.iHidden()
        }
    })
})();
Room.userPower = {
    set: function (a) {
        var c = Room.userMenu.uid, d = {
            t: "priv_privilege_kill",
            j: "priv_privilege_stopmsg",
            rj: "priv_privilege_recover"
        };
        Room.Msg.send(d[a], {u: c, r: page.rid})
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
        var c = this;
        Prompt.create({
            title: "穿越对象：" + Room.userMenu.alias,
            btn_cancel: {text: "取消"},
            btn_sure: {text: "确定"},
            content: '请输入目的地链接地址：<input type="" id="chuanyue_to" size="25" /><br/><p style="padding-top:12px"><input type="checkbox" id="chuangyue_set"/>不可返回（勾选后，穿越对象30分钟内将不能进入本房间）</p>',
            onSubmit: function () {
                var f = jQuery("#chuanyue_to").val();
                var d = jQuery("#chuangyue_set").prop("checked") ? 2 : 1;
                Room.Msg.send("priv_priv_rewrite", {u: Room.userMenu.uid, url: f, type: d});
                return 1
            }
        })
    }
};
Room.HostPower = {
    _isSet: 0, setPower: function () {
        var c = Room.user, a = Room.HostPower;
        if (c.rich < 21 && "124".indexOf(c.role) > -1) {
            if (a._isSet) {
                a._set_p1(0);
                a._isSet = 0
            }
            return
        }
        switch (c.role) {
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
        var c = "none";
        if (Room.user.role == 10 && a) {
            c = "block"
        }
        Room.userMenu.sug.find("p.main_1").find(".user-oper, a.set_power, a.del_power").css("display", c)
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
        var i = Room.user, a = i.rich, g = i.fstar;
        var d = Room.userMenu.oJinyanBtn, h = Room.userMenu.oJinyanrBtn, f = Room.userMenu.oTirenBtn, c = Room.userMenu.oTeQuan;
        if ((a > 21 && (/7104|7105/.test(i.prop) || g > 3)) || (a == 21 && g > 3)) {
            c.css("display", "block");
            d.css("display", "block");
            h.css("display", "block")
        }
        if (a > 21 && g > 3) {
            c.css("display", "block");
            f.css("display", "block")
        }
        if (a > 25) {
            c.css("display", "block");
            Room.userMenu.oChuanyue.css("display", "block")
        }
    }, setManager: function (a) {
        var f = a ? "p" : "d";
        var d = f == "d" ? "priv_deladmin" : "priv_setadmin";
        Room.Msg.send(d, {f: page.rid, u: Room.userMenu.uid, act: f});
        return false
    }, setManager_z: function (a) {
        var f = a ? "p" : "d";
        var d = f == "d" ? "priv_delroommanager" : "priv_setroommanager";
        Room.Msg.send(d, {f: page.rid, u: Room.userMenu.uid, act: f});
        return false
    }, setBo: function (a) {
        var a = a ? "p" : "d";
        var c = a == "p" ? "priv_setmac" : "priv_delmac";
        Room.Msg.send(c, {f: page.rid, u: Room.userMenu.uid, act: a})
    }, forbid: function (a) {
        var c = Room.userMenu.uid, d = {t: "priv_kill", j: "priv_stopmsg", c: "priv_recover"};
        Room.Msg.send(d[a], {u: c, r: page.rid});
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
        this.container = jQuery('<ul class="watch_gift_list"></ul>').appendTo(jQuery("#watchGift")).on("click", "a", function (c) {
            if (this.target == "_blank") {
                return true
            }
            c.preventDefault();
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
    }, parseList: function (d) {
        var c = [], a = this;
        jQuery.each(d, function (f, g) {
            c.push(a.get_row(g))
        });
        c.reverse();
        this.container[0].innerHTML = "<li>" + c.join("</li><li>") + "</li>";
        c = null;
        Mediator.publish("giftlist-update")
    }, get_row: function (f) {
        var g;
        if (f.uid == 1900000047) {
            g = '<em class="mystery"><i class="fixpng"></i>' + (f.uname || f.alias) + "</em>"
        } else {
            if (f.uid > 900000000 && f.uid < 1900000000) {
                g = '<a href="/a/' + f.uid + '" target="_blank">' + (f.uname || f.alias) + " </a>"
            } else {
                if (f.uid > 1900000000) {
                    g = '<em><i class="fixpng"></i>' + (f.uname || f.alias) + "</em>"
                } else {
                    g = '<a href="" uid="' + f.uid + '">' + (f.uname || f.alias) + "</a>"
                }
            }
        }
        var d = aptime.stoHoursEx(f.tm);
        var c = Pres[f.item].cls + " giftSmall";
        var a = Pres[f.item].title;
        if (page.tpl == "wmp") {
            return '<span class="gift"><i title="' + a + '" class="' + c + '"></i>' + f.num + '个</span><span class="name">' + g + "</span>"
        } else {
            return '<span class="time">' + d + '</span><span class="gift"><i class="' + c + '"></i>' + a + '</span><span class="num">' + f.num + '个</span><span class="name">' + g + "</span>"
        }
    }, add: function (a) {
        if (!this.isLoad) {
            return
        }
        var c = this.get_row(a);
        this.container.prepend(jQuery("<li/>").html(c));
        if (this.container.children().length > 50) {
            this.container.children().last().remove()
        }
    }, clearList: function () {
        this.container[0].innerHTML = ""
    }
};
function setBg(a, d) {
    var c = location.href, c = (c + "").replace(/^.+6\.cn\/(\d+).+$/i, "http://v.6.cn/$1");
    if (a == "p") {
        location.href = c
    } else {
        if (a == "m") {
            alert(d);
            document.form1.submitBtn.disabled = false
        } else {
            if (a == "d") {
                location.href = c
            }
        }
    }
}
Room.privChat = {
    sendApi: "/room/action/roomoption.php", prive: 0, init: function (a) {
        var c = jQuery("#priHandBox, #only_chat div.pubHandBox:eq(1)");
        if (c.length < 1) {
            return
        }
        this.priBtn = c.find(".priBtn").bind("click", function () {
            Prompt.create({
                btn_sure: 1,
                btn_cancel: 1,
                title: "私聊设置",
                content: '<div id="pri_set_box"><p><input type="radio" value="0" name="pri_set" />允许所有人对我私聊</p>								<p><input type="radio" value="2" name="pri_set" />仅允许我的房管对我私聊</p>								<p><input type="radio" value="1" name="pri_set" />禁止所有人对我私聊</p></div>',
                callback: function (d) {
                    if (d) {
                        var f = jQuery("#pri_set_box").find("input[name=pri_set]:checked").val();
                        if (f == Room.privChat.prive) {
                            return
                        }
                        Room.privChat.set(f)
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
        this.sug.bind("vis", function (g, f, i, d) {
            var h = jQuery(this);
            var c = f.offset();
            d ? h.addClass("color_green") : h.removeClass("color_green");
            h.html(i);
            h.css({top: c.top + 32, left: c.left + 140});
            h.fadeIn(100);
            h.hasClass("roteNotice-zemble") ? h.removeClass("roteNotice-zemble") : h.addClass("roteNotice-zemble");
            clearTimeout(a);
            a = setTimeout(function () {
                h.fadeOut(100)
            }, 1000)
        })
    }, send: function (f, h) {
        this.btn = jQuery(f);
        if (!this.sug) {
            this.create_sug()
        }
        var c = "/event/shownew/vote.php", a, d, g = "";
        var a = h, d = _puser.uid, g = page.rid;
        jQuery.ajax({dataType: "json", url: c, data: {cpid: a, u: d, rid: g}, success: this.callback})
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
        var c = a, f = this.box;
        if (c) {
            var d = "/message/follow_add.php"
        } else {
            var d = "/message/follow_del.php"
        }
        f.html("<a></a>");
        f.addClass("favorite_load");
        this.sending = 1;
        jQuery.ajax({
            dataType: "json", url: d, data: {tuid: this.tuid, act: "p", format: "json"}, success: function (g) {
                if (jQuery.type(g) != "object") {
                    return
                }
                var h = Fav;
                h.sending = 0;
                if (g.flag == "001") {
                    h.change(c);
                    c && Mediator.publish("favorite")
                } else {
                    if (g.flag == "203") {
                        h.change(!c);
                        return Login.toLogin()
                    } else {
                        Prompt.alert(g.content);
                        h.change(!c)
                    }
                }
            }
        });
        return false
    }, change: function (a, d) {
        this.tuid = d || page.rid;
        var c = a ? 1 : 0;
        if (c) {
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
    }, setSug: function (c) {
        if (!this.sugBox) {
            this.sugBox = jQuery("<div/>", {id: "giftShowSug"}).appendTo(document.body)
        }
        this.sugBox[!c ? "addClass" : "removeClass"]("giftShowSug-hide");
        this.sugBox[0].innerHTML = '<div class="bg"></div>' + (c ? "礼物的显示特效已经打开" : "礼物的显示特效已经关闭");
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
        var l = page.temUserList;
        if (!l) {
            return
        }
        var g = this.options.userList, a = this.options.userCount, j = this.options.manageList, f = this.options.manageCount;
        var d = l.num, c = l.content.all;
        if (!c) {
            return
        }
        var r = [], m = [], n = 0;
        for (var h = 0, k = c[h]; h < c.length; h++, k = c[h]) {
            var p = UserListMain.parseUser(k);
            if (p.sf == 6) {
                d--;
                continue
            }
            switch (p.sf) {
                case 1:
                    r.push('<li class="' + p.cls + '">' + p.str + "</li>");
                    break;
                case 7:
                case 9:
                    if (page.jinpai / 1 == 1) {
                        p.star_str = p.star_str.replace(/<\/em><\/p>$/, '<i class="gold-sign" title="金牌签约主播"></i></em></p>')
                    }
                case 5:
                    m.push('<li id="' + k.uid + '" class="' + p.cls + '">' + (p.sf == 9 ? p.star_str : p.str) + "</li>");
                    n++;
                case 2:
                case 3:
                case 8:
                default:
                    r.push('<li id="' + k.uid + '" class="' + p.cls + '">' + (p.sf == 9 ? p.star_str : p.str) + "</li>");
                    break
            }
        }
        var o = l.content.adm;
        if (o.length > 0) {
            for (var h = 0; h < o.length; h++) {
                var p = UserListMain.parseUser(o[h]), q = '<li id="' + p.user.uid + '" class="' + p.cls + '">' + p.str + "</li>";
                m.push(q);
                n++;
                r.push(q)
            }
        }
        a.length > 0 && a.text(d);
        g[0].innerHTML = '<ul class="userList">' + r.join("") + "</ul>";
        if (f && f[0]) {
            f.text(n)
        }
        if (j && j[0]) {
            j[0].innerHTML = '<ul class="userList">' + m.join("") + "</ul>"
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
    parseMsgList: function (n) {
        var n = page.temMsgList;
        if (!n) {
            return
        }
        for (var k = 0; k < n.length; k++) {
            var m = n[k];
            if (m.typeID == "101") {
                var f = m.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
                f = ParseFaceSymobls(f);
                var h = Room.test_rid(m.frid) ? '<span class="urid">(<em>' + m.frid + "</em>)</span>" : "";
                var g = Badge.get_ico_img(m.prop);
                var p = "";
                if (m.vest > 0) {
                    p = '<span class="u-vest" title="马甲累计：' + m.vest + '天"><img src="' + ChatList.vestLevel(m.vest) + '"/></span>'
                }
                var t = m.prop.join(",").match(/7569|7570/);
                if (t || m.fid == page.rid) {
                    f = ParseFaceSymobls(f, 1);
                    if (t) {
                        if (t[0] == 7570) {
                            l = "style_7570"
                        } else {
                        }
                    }
                }
                try {
                    if (/7103|7104|7105|7559/.test(m.priv.join(",")) || m.fid == page.rid) {
                        f = ParseFaceSymobls(f, 3)
                    }
                } catch (m) {
                }
                try {
                    if (page.birthday) {
                        f = ParseFaceSymobls(f, 4)
                    }
                } catch (m) {
                }
                if (m.gstra != "") {
                    var s = m.gstra.split("-");
                    g += '<em class="army_level army-rank' + s[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + s[0] + '.png)"><i class="army' + s[2] + '"></i><b></b></em>'
                }
                if (page.top30 == m.fid / 1 || (m.fid && m.fid == page.firstTotalId)) {
                    l = "style_fans";
                    g = GetPix("crownIcon_all", (page.top30 == m.fid / 1 ? "30天" : "超级") + "粉丝榜单第一名") + g
                } else {
                    if (m.fid && m.fid == page.firstId) {
                        l = "style_fans_cur";
                        g = GetPix("crownIcon_cur", "当前直播粉丝榜单第一名") + g
                    }
                }
                var l = 0;
                if (m.cr > 26) {
                    l = "style_god_super"
                } else {
                    if (m.cr > 25) {
                        l = "style_god"
                    } else {
                        if (m.fid == page.puid) {
                            l = "style_room"
                        }
                    }
                }
                if (m.fpriv / 1 == 8) {
                    l = "sys";
                    f = '<span class="con" style="font-weight:bold">' + f + "</span>"
                } else {
                    f = '<span class="con">' + f + "</span>"
                }
                var o = m.mb > 0 ? '<i class="phone"></i>' : "";
                var j = [m.fid, m.frid, m.from, Badge.get_ico_id(m.prop).join("|"), m.fpriv];
                var d;
                if (m.anonym) {
                    d = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(m.tm) + " </span>" + m.from
                } else {
                    d = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(m.tm) + " </span>" + g + o + p + '<a href="#" class="u" user="' + j.join(",") + '">' + m.from + " </a>" + h
                }
                if (m.to == "") {
                    var a = d + '<span class="c9">：</span>' + f
                } else {
                    var c = [m.toid, m.torid, m.to, "", m.tpriv];
                    var r = (m.torid >= 30000000 && m.torid < 80000000) ? "" : '<span class="urid">[<em>' + m.torid + "</em>]</span>";
                    var a = d + ' <span class="c9">对</span> <a href="#" class="u" user="' + c.join(",") + '">' + m.to + "</a>" + r + ' <span class="c9">说：</span>' + f
                }
                var q = document.createElement("li");
                q.className = "style-chat " + (l || this.textClass[m.typeID] || "");
                q.innerHTML = a;
                this.options.chatList.append(q);
                q = null
            }
        }
    },
    parseSysMsg: function (c) {
        var a = document.createElement("li");
        a.className = "notice";
        a.innerHTML = c.content;
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
        dataType: "json", url: "/room/getRecGame.php", success: function (d) {
            if (d.flag == "001") {
                var c = d.content;
                a.html('<a href="' + c.link + '" target="_blank">' + c.title.st(16) + '</a><em class="close fixpng"></em>');
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
                var c = jQuery(this);
                c.unbind();
                _face = new Faces({
                    btn: c[0],
                    smile: FaceVip,
                    input_text: page.tpl == "voice" ? jQuery("div.chat-txt .act-text input") : jQuery("#chatForm").find("input")[2],
                    fname: "face_vip_box",
                    pageSize: 22,
                    cells: 3,
                    isTitle: 1
                });
                c.trigger("click")
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
            var c = jQuery('<div class="clairvoyance-btn" id="clairvoyance-btn"><a href="#" class="fixpng">千里眼</a></div>');
            c.insertAfter(jQuery("#userPanel"));
            c.find("a").click(function (d) {
                d.preventDefault();
                a.create_pop()
            })
        }
    }, key_sug: "请输入您想要定位对象的房间号", create_pop: function () {
        var c = clairvoyance;
        var a = {
            class_name: "prompt-clairvoyance",
            title: "千里眼",
            content: '<div class="clairvoyance-box" id="clairvoyance-box"><div class="form"><h4>“千里眼”帮您定位指定的对象在哪个房间</h4><input class="input" type="text" value="' + c.key_sug + '" /><a class="sure" href="#">开始定位</a></div><div class="list"></div></div>',
            onSubmit: function () {
                var f = jQuery("#clairvoyance-box");
                var d = f.find(".input").val();
                if (isNaN(d)) {
                    alert("请输入正确的房间号");
                    f.find(".input").addClass("error");
                    return
                }
                jQuery.ajax({
                    dataType: "json", url: "/room/position.php", data: {rid: d}, success: function (h) {
                        if (h.flag == "001") {
                            var g = '<h4>当前的定位对象<a target="_blank" href="/' + d + '">' + h.content.info.alias + "</a>正在以下房间</h4>";
                            g += "<p>";
                            if (h.content.list.length > 0) {
                                jQuery.each(h.content.list, function (j, k) {
                                    g += '<a target="_blank" href="' + k.url + '">' + k.name + "</a>"
                                })
                            } else {
                                g += '<span class="none">当前定位对象没有在任何房间</span>'
                            }
                            g += "</p>";
                            f.find(".list").html(g)
                        } else {
                            alert(h.content);
                            f.find(".input").addClass("error")
                        }
                    }
                })
            }
        };
        Prompt.create(a);
        jQuery("#clairvoyance-box .input").bind("focus", function () {
            jQuery(this).removeClass("error");
            jQuery(this).addClass("focus");
            if (jQuery(this).val() == c.key_sug) {
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
    var c = 1000 * 60 * 5;
    var a = function () {
        new Image().src = "/room/roomInfoUser.php?uid=" + _puser.uid + "&rid=" + page.rid + "&_=" + (new Date().getTime());
        setTimeout(a, c)
    };
    a()
})();
(function () {
    var j = 0;
    var l = 8;
    var q = function (i, a) {
        i[a >> 5] |= 128 << (24 - a % 32);
        i[((a + 64 >> 9) << 4) + 15] = a;
        var g = Array(80);
        var F = 1732584193;
        var G = -271733879;
        var H = -1732584194;
        var I = 271733878;
        var J = -1009589776;
        for (var h = 0; h < i.length; h += 16) {
            var d = F;
            var f = G;
            var t = H;
            var x = I;
            var E = J;
            for (var D = 0; D < 80; D++) {
                if (D < 16) {
                    g[D] = i[h + D]
                } else {
                    g[D] = o(g[D - 3] ^ g[D - 8] ^ g[D - 14] ^ g[D - 16], 1)
                }
                var c = n(n(o(F, 5), r(D, G, H, I)), n(n(J, g[D]), p(D)));
                J = I;
                I = H;
                H = o(G, 30);
                G = F;
                F = c
            }
            F = n(F, d);
            G = n(G, f);
            H = n(H, t);
            I = n(I, x);
            J = n(J, E)
        }
        return Array(F, G, H, I, J)
    };
    var r = function (d, f, a, c) {
        if (d < 20) {
            return (f & a) | ((~f) & c)
        }
        if (d < 40) {
            return f ^ a ^ c
        }
        if (d < 60) {
            return (f & a) | (f & c) | (a & c)
        }
        return f ^ a ^ c
    };
    var p = function (a) {
        return (a < 20) ? 1518500249 : (a < 40) ? 1859775393 : (a < 60) ? -1894007588 : -899497514
    };
    var n = function (f, a) {
        var c = (f & 65535) + (a & 65535);
        var d = (f >> 16) + (a >> 16) + (c >> 16);
        return (d << 16) | (c & 65535)
    };
    var o = function (c, a) {
        return (c << a) | (c >>> (32 - a))
    };
    var m = function (a) {
        var c = Array();
        var f = (1 << l) - 1;
        for (var d = 0; d < a.length * l; d += l) {
            c[d >> 5] |= (a.charCodeAt(d / l) & f) << (24 - d % 32)
        }
        return c
    };
    var k = function (c) {
        var d = j ? "0123456789ABCDEF" : "0123456789abcdef";
        var a = "";
        for (var f = 0; f < c.length * 4; f++) {
            a += d.charAt((c[f >> 2] >> ((3 - f % 4) * 8 + 4)) & 15) + d.charAt((c[f >> 2] >> ((3 - f % 4) * 8)) & 15)
        }
        return a
    };
    this.hex_sha1 = function (a) {
        return k(q(m(a), a.length * l))
    }
}).call(window);
(function () {
    var c = 1000 * 60 * 2;
    var a = function () {
        _uuid = jQuery.cookie("_uuid");
        if (!_uuid) {
            _uuid = hex_sha1((navigator.userAgent || "") + (navigator.platform || "") + Math.round(new Date().getTime() / 1000)).slice(0, 16);
            jQuery.cookie("_uuid", _uuid, {expires: 500, path: "/"})
        }
        new Image().src = "http://sclick.6rooms.com/inroom.html?uuid=" + _uuid + "&uid=" + _puser.uid + "&rid=" + page.rid + "&referer=" + encodeURIComponent(document.referrer) + "&_=" + (new Date().getTime());
        setTimeout(a, c)
    };
    a()
})();
(function () {
    var a = jQuery;
    Room.anchorCookie = {
        name: "anchorSet", set: function (d, h, c) {
            var f = {}, g = "";
            if (a.cookie(this.name)) {
                g = a.cookie(this.name);
                f = a.evalJSON(g)
            }
            f[d] = h;
            g = a.toJSON(f);
            a.cookie(this.name, g, c || 365)
        }, get: function (c) {
            var d = {}, f = "";
            f = a.cookie(this.name);
            d = a.evalJSON(f);
            return d[c] || 0
        }
    }
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
            }, 110: function (d) {
                for (var c = d.content, a = 0; a < c.length; a++) {
                    Room.chatList.parsePub(c[a])
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
    init: function (d) {
        var a = this;
        this.container = d.publicBox.find("ul");
        if (this.container.length < 1) {
            this.container = jQuery("<ul>").appendTo(d.publicBox)
        }
        this.container.addClass("chatList");
        this.scrollBox = d.publicBox.parent();
        this.publicBox = d.publicBox;
        this.priveBox = d.priveBox;
        this.is_vip_face = d.is_vip_face == null ? 1 : d.is_vip_face;
        this.sendBtn = d.chatSendBtn;
        this.sendBtn.data("def_class", this.sendBtn.prop("class"));
        this.sendBtn.bind("mouseover", function () {
            jQuery(this).addClass("on")
        });
        this.sendBtn.bind("mouseout", function () {
            jQuery(this).removeClass("on")
        });
        this.sendInput = d.chatInput.val("").attr("disabled", "disabled");
        this.userInput = d.userInput;
        this.userInput.val("所有人");
        this.userSug = new Input_sug({
            callback: jQuery.proxy(this.changeUser, this),
            input: this.userInput[0],
            posBox: d.posBox
        });
        this.sendInput.bind("focus blur", function (k) {
            if (k.type == "focus") {
                a.setChatChange(10)
            } else {
                a.setChatChange(11)
            }
        });
        if (!page.isMic && page.tpl != "army" && page.masterName) {
            this.userSug.addItem({uid: page.rid, alias: page.masterName, rid: page.roomid})
        }
        this.container.on("click", "a,em", function (m) {
            var k = jQuery(m.target), o = k.attr("user");
            if (k.is("a") && o) {
                m.preventDefault();
                var l = o.split(",");
                o = {uid: l[0], rid: l[1], alias: l[2], ico: (l[3] && l[3].split("|") || []), role: l[4], pub: 1};
                Room.chatList.setCurUser(o);
                Room.userMenu.visible(k, o);
                Room.chatList.rollChange(0)
            } else {
                if (k.hasClass("re")) {
                    var n = k.parent().html().replace(/<em.+?>.+?>/i, "");
                    WB.re.setCon(k[0], n)
                }
            }
        });
        this.sendBtn.bind("click", function (k) {
            k.preventDefault();
            if (a.sendBtn.hasClass("disabled")) {
                return
            }
            a.send()
        });
        this.sendInput.bind("keyup", function (k) {
            if (k.which == 13) {
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
        var h = jQuery("#pubHandBox").hide().css({visibility: "visible", opacity: 1});
        h.bind("visible hidden mouseenter", function (k) {
            switch (k.type) {
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
            h.trigger("visible")
        });
        this.scrollBox.bind("mouseleave", function () {
            h.trigger("hidden")
        });
        h.find(".clearListBtn").bind("click", function () {
            a.clearList("pub")
        });
        this.rollBtn = h.find(".rollPauseBtn");
        this.rollBtn.bind("click", this.rollChange);
        this.isPriveCheck = d.isPriveCheck;
        if (this.isPriveCheck && d.checkboxSubstitue) {
            d.checkboxSubstitue.bind("click", function () {
                var k = d.checkboxSubstitue;
                var l = Room.chatList.isPriveCheck;
                if (l.prop("disabled")) {
                    return
                }
                l.prop("checked", k.hasClass("checkbox-checked") ? false : true);
                l.trigger("change")
            });
            this.isPriveCheck.bind("change", function () {
                var m = a.isPriveCheck;
                var k = d.checkboxSubstitue;
                var l = a.sendInput;
                if (m.prop("disabled")) {
                    k.addClass("checkbox-disabled")
                } else {
                    k.removeClass("checkbox-disabled")
                }
                if (m.prop("checked")) {
                    l.addClass("input_text_prive");
                    k.addClass("checkbox-checked");
                    a.notice_cover(1)
                } else {
                    l.removeClass("input_text_prive");
                    k.removeClass("checkbox-checked");
                    a.notice_cover(0)
                }
            })
        }
        if (d.priveBox.length > 0) {
            this.isPriveCheck.prop("checked", false);
            this.isPriveCheck.prop("disabled", true);
            this.isPriveCheck.trigger("change");
            this.priveContainer = jQuery("<ul>").appendTo(d.priveBox);
            this.priveScrollBox = d.priveBox.parent();
            this.priveContainer.addClass("chatList");
            this.priveContainer.on("click", "a, .to-chat-pri", function (n) {
                var m = jQuery(this), o = m.attr("user");
                if (o) {
                    n.preventDefault();
                    var l = o.split(",");
                    o = {uid: l[0], rid: l[1], alias: l[2], ico: (l[3] && l[3].split("|") || []), role: l[4], pri: 1};
                    Room.chatList.setCurUser(o);
                    Room.userMenu.visible(m, o)
                } else {
                    if (m.hasClass("to-chat-pri")) {
                        var k = m.siblings("a[user]").attr("user").split(",");
                        ChatPrivateWin.open({alias: k[2], uid: k[0]})
                    }
                }
            });
            var c = jQuery("#priHandBox").hide().css({visibility: "visible", opacity: 1});
            c.bind("visible hidden mouseenter", function (k) {
                switch (k.type) {
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
                c.trigger("visible")
            });
            this.priveScrollBox.bind("mouseleave", function () {
                c.trigger("hidden")
            });
            c.find(".clearListBtn").bind("click", function () {
                a.clearList("pri")
            });
            this.priHandBox = c;
            if (Room.unLogin) {
                this.setAnony()
            }
            var j = this.sendInput;
            this.isPriveCheck.bind("click", function () {
                if (this.checked) {
                    j.addClass("input_text_prive");
                    a.notice_cover(1)
                } else {
                    j.removeClass("input_text_prive");
                    a.notice_cover(0)
                }
            })
        }
        this.sliderBar = jQuery("#watchChat_slideBar");
        if (this.sliderBar) {
            if (page.tpl == "wmp") {
                new Drag(this.sliderBar[0], {
                    onDrag: function (k) {
                        var l = parseInt(k.style.left);
                        Room.chatList.scrollBox.parent().css("width", l);
                        Room.chatList.priveScrollBox.parent().css("width", 648 - l);
                        Room.chatList._resizeStream()
                    }, limit: {x: [100, 600], y: [0, 0]}
                })
            } else {
                if (!page.event) {
                    jQuery("#watchChat_slideBar").bind("mousedown", function (p) {
                        var l = parseInt(Room.chatList.priHandBox.css("bottom")), k = parseInt(Room.chatList.scrollBox.css("height")), o = parseInt(Room.chatList.priveScrollBox.css("height")), n = parseInt(Room.chatList.sliderBar.css("bottom"));
                        var m = Room.chatList.scrollBox.attr("min") / 1;
                        jQuery(document).bind("mousemove", function (s) {
                            var r = s.pageY - p.pageY, t = r + k, q = -r + o;
                            if (t < 100 || q < 50) {
                                return
                            }
                            Room.chatList.sliderBar.css("bottom", -r + n);
                            Room.chatList.priHandBox.css("bottom", l - r);
                            Room.chatList.scrollBox.css("height", t);
                            Room.chatList.priveScrollBox.css("height", q)
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
                            var l = 273;
                            var k = Room.chatList.sliderBar.offsetTop - l;
                            Room.chatList.priHandBox.style.top = 288 + k + "px";
                            Room.chatList.scrollBox.style.height = 217 + k + "px";
                            Room.chatList.priveScrollBox.style.height = 50 - k + "px"
                        }, limit: {x: [0, 0], y: [100, 278]}
                    })
                }
            }
        }
        var g = [];
        for (var i in FaceSymbols) {
            g.push(FaceSymbols[i])
        }
        this.Fsm = g.join("|");
        this.deSend();
        setTimeout(jQuery.proxy(this.unSend, this), this.sayDelay);
        this.setChatChange(11);
        this.toPub = d.toPub ? d.toPub : jQuery("#chatForm, #chatInput, #chatBox").find("a.toPub").addClass("to_select");
        this.toPub.bind("click", function (k) {
            k.preventDefault();
            if (jQuery(this).hasClass("to_select")) {
                if (Room.chatList.userSug.vis) {
                    Room.chatList.userSug.iHidden()
                } else {
                    Room.chatList.userSug.visible(this, d.posBox)
                }
            } else {
                Room.chatList.setCurUser({})
            }
        });
        this.timing();
        this.attachRoom();
        var f = d.faceBtn;
        _face = new Faces({btn: f[0], input_text: this.sendInput, fname: "chat", vip: 1, safe: 1});
        Room.userMenu.add_hid_fn({
            chat: function () {
                Room.chatList.rollChange(1)
            }
        });
        if (d.only_chat) {
            this.only_chat.init(d.only_chat)
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
    rollChange: function (c) {
        var a = Room.chatList;
        if (c === 0) {
            a.rollAuto = 0;
            return
        } else {
            if (c === 1) {
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
    setChatChange: function (f) {
        var a;
        if (f == 10) {
            a = 0
        } else {
            if (f == 11) {
                a = page.isChatPub
            } else {
                page.isChatPub = f;
                a = f
            }
        }
        var d = this.get_input_notice(), c = this.sendInput.val();
        if (a > 0 && (c == "" || f < 10) && this.cover_count < 1) {
            this.sendInput.val(d).addClass("notice_default")
        } else {
            if (c == d || f == 0) {
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
    unSend: function (c) {
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
        c && this.inputFocus()
    },
    send: function () {
        if (Room.user.role == 1) {
            return Login.toLogin()
        }
        if (this.unPrive[this.toUserId]) {
            Prompt.alert("此人不允许私聊！");
            return
        }
        var g = this.sendInput.val();
        if (g == "" || g == this.get_input_notice()) {
            calert("请输入聊天内容！");
            return
        }
        if (g.len() > 100) {
            Prompt.alert("您的聊天内容过长，请确保不超过50个汉字！");
            return
        }
        var f = g.match(new RegExp(this.Fsm, "g"));
        if (f && f.length > 9) {
            Prompt.alert("您的聊天表情太多，不能发送！");
            return
        }
        if (Room.user.rich < 1 && g == this.pre_content && this.pre_date && (new Date().getTime() - this.pre_date) < 5 * 1000) {
            Prompt.alert("请勿频繁发送重复的聊天内容！");
            return
        }
        this.pre_content = g;
        this.pre_date = new Date().getTime();
        if (!Room.liveMaster && _puser.rich == 0 && _puser.rich_next >= 900) {
            var j = 0, h = 0, c = 0;
            for (var d = 0; d < g.length; d++) {
                var a = g.charAt(d);
                if (FilterStr.dots.indexOf(a) > -1) {
                    c = 1;
                    break
                }
                if (FilterStr.number.indexOf(a) > -1) {
                    j++
                } else {
                    if (FilterStr.letter.indexOf(a) > -1) {
                        h++
                    }
                }
            }
            if (c || j > 6 || (j + h) > 4) {
                Prompt.alert("您的发言中包含过多字母或数字！");
                return
            }
        }
        this.sendInput.val("");
        this.deSend();
        if (this.isPriveCheck && this.isPriveCheck.prop("disabled")) {
            this.sendPubMsg({tuid: this.toUserId, con: g})
        } else {
            var k = {
                pri: (this.isPriveCheck && this.isPriveCheck.prop("checked")),
                touid: this.toUserId,
                con: g,
                toname: this.toName,
                torid: this.toUserRid,
                touid: this.toUserId
            };
            this.sendPriMsg(k)
        }
    },
    flashSend: function (a) {
        if (!_puser.uid) {
            return
        }
        this.__flashSend = 1;
        this.sendPubMsg({con: a})
    },
    sendPubMsg: function (d) {
        this.sendBack2 = d.sendBack || 0;
        var c = {r: page.rid, ak: page.authKey, t: d.touid, m: d.con, ttt: new Date().getTime()};
        var a = "msg_room";
        Room.Msg.send(a, c)
    },
    sendPriMsg: function (d) {
        this.sendBack2 = d.sendBack || 0;
        var c = {r: page.rid, ak: page.authKey, t: d.touid, m: d.con, to: d.toname, torid: d.torid, toid: d.touid};
        var a = {pub: "msg_room", pri: "msg_private"};
        Room.Msg.send(d.pri ? a.pri : a.pub, c)
    },
    remove_face: function (f, a) {
        var a = a || "2", c = {"1": FaceSafe, "2": FaceSymbols, "3": FaceVip}[a];
        for (var d in c) {
            f = f.replace(new RegExp(c[d], "g"), "")
        }
        return f
    },
    zimu: function (f, d) {
        if (!window.liaotianzimu) {
            return
        }
        if (!this.zimu_swf) {
            this.zimu_swf = swfobject.getObjectById("videoPlayer")
        }
        var a = this.remove_face(f.content);
        a = this.remove_face(a, 1);
        a = this.remove_face(a, 3);
        if (a != "") {
            try {
                if (Room.DanMu && Room.DanMu.isSupport) {
                    Room.DanMu.add(f.from + "：" + a, d, (f.fid == _puser.uid ? true : false))
                } else {
                    this.zimu_swf.addMessage(f.from + "：" + a, (f.fid == _puser.uid ? true : false), d)
                }
            } catch (c) {
            }
        }
    },
    vestLevel: function (a) {
        var c = (a >= 0 && a <= 3 && 1) || (a > 3 && a <= 30 && 2) || (a > 30 && a <= 90 && 3) || (a > 90 && 4);
        return page.vestUrl + "_" + c + ".png"
    },
    parsePub: function (l) {
        if (l.from == "") {
            return
        }
        var f = l.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
        f = ParseFaceSymobls(f);
        var h = Room.test_rid(l.frid) ? '<span class="urid">[<em>' + l.frid + "</em>]</span>" : "";
        var g = Badge.get_ico_img(l.prop);
        var o = "";
        if (l.vest > 0) {
            o = '<span class="u-vest" title="马甲累计：' + l.vest + '天"><img src="' + ChatList.vestLevel(l.vest) + '"/></span>'
        }
        var j = "", k = "";
        var r = l.prop.join(",").match(/7569|7570/);
        if (r || l.fid == page.rid) {
            f = ParseFaceSymobls(f, 1);
            if (r) {
                if (r[0] == 7570) {
                    j = "style_7570";
                    k = "0xbca031"
                } else {
                }
            }
        }
        if (this.is_vip_face && (/7103|7104|7105|7559/.test(l.priv.join(",")) || l.fid == page.rid)) {
            f = ParseFaceSymobls(f, 3)
        }
        if (page.birthday) {
            f = ParseFaceSymobls(f, 4)
        }
        if (!!l.gstra) {
            var q = l.gstra.split("-");
            g += '<em class="army_level army-rank' + q[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + q[0] + '.png)"><i class="army' + q[2] + '"></i><b></b></em>'
        }
        if (l.fid && l.fid == page.firstId) {
            j = "style_fans_cur";
            k = "0xff0000";
            g = GetPix("crownIcon_cur", "当前直播粉丝榜单第一名") + g
        } else {
            if (page.top30 == l.fid / 1 || (l.fid && l.fid == page.firstTotalId)) {
                j = "style_fans";
                g = GetPix("crownIcon_all", (page.top30 == l.fid / 1 ? "30天" : "超级") + "粉丝榜单第一名") + g;
                k = "0x1e4bde"
            }
        }
        if (l.fid == page.puid) {
            j = "style_room";
            k = "0xff6e2e"
        } else {
            if (l.cr > 26) {
                j = "style_god_super";
                k = "0xff0000"
            } else {
                if (l.cr > 25) {
                    j = "style_god";
                    k = "0xaf8026"
                }
            }
        }
        this.zimu(l, k);
        if (l.fpriv / 1 == 8) {
            j = "sys";
            f = '<span class="con" style="font-weight:bold">' + f + "</span>"
        } else {
            f = '<span class="con">' + f + "</span>"
        }
        var n = l.mb > 0 ? '<i class="phone"></i>' : "";
        var m = Badge.get_ico_id(l.prop);
        var i = [l.fid, l.frid, l.from, m.join("|"), l.fpriv];
        var d = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(l.tm) + " </span>" + g + n + o + '<a href="" class="u" user="' + i.join(",") + '">' + l.from + " </a>" + h;
        if (l.to == "") {
            var a = d + '<span class="c9">：</span>' + f
        } else {
            var c = [l.toid, l.torid, l.to, "", l.tpriv];
            var p = Room.test_rid(l.torid) ? '<span class="urid">[<em>' + l.torid + "</em>]</span>" : "";
            var a = d + ' <span class="c9">对</span> <a href="" class="u" user="' + c.join(",") + '">' + l.to + "</a>" + p + ' <span class="c9">说：</span>' + f
        }
        this.add_list({str: a, e: l, cls: j, only: 1});
        if (Room.Sofa) {
            Room.Sofa.chat.parse(l.fid, l.content)
        }
        f = null;
        m = null;
        g = null;
        a = null;
        l = null
    },
    parsePriv: function (i) {
        if (!this.priveContainer) {
            return
        }
        Room.newMsg.start("有私聊消息！");
        try {
            if (window.ChatPrivateWin && ChatPrivateWin.newMsg(i)) {
                return
            }
        } catch (i) {
        }
        var g = Badge.get_ico_img(i.prop), h = Badge.get_ico_id(i.prop);
        var a = i.content.replace(/&amp;/g, "&").replace(/(http:\/\/)?((?:[\w.]+\.)?6\.cn(?:\/[\w/#%&=.?+-]*)?)/gim, '<a href="http://$2" target="_blank">$1$2</a>');
        a = ParseFaceSymobls(a);
        var d = i.prop.join(",").match(/7569|7570/);
        if (d || i.fid == page.rid) {
            a = ParseFaceSymobls(a, 1)
        }
        var f = i.mb > 0 ? '<a href="/event/liveClient/?t=phone" target="_blank" title="手机在线"><i class="phone"></i></a>' : "";
        if (i.fid == _puser.uid) {
            var j = [i.to, i.trid, i.tname, h.join("|"), i.tpriv];
            var c = '<span class="t">' + aptime.stoHoursEx(i.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span><a class="u">我</a> <span class="c9">对</span> <a href="#" user="' + j.join(",") + '" class="u">' + i.tname + '</a><span class="urid">[<em>' + i.trid + '</em>]</span> <span class="c9">说：</span><span class="con">' + a + "</span>"
        } else {
            if (Room.user.role == 6) {
                var c = '<span class="t">' + aptime.stoHoursEx(i.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span><a href="#" class="u">' + i.from + ' </a><span class="urid">[<em>' + i.frid + '</em>]</span> <span style="color:black"><a href="#" class="u">' + i.tname + '</a><span class="urid2">(' + i.trid + ')</span> <span class="c9">说：</span> <span class="con">' + a + "</span>"
            } else {
                var j = [i.fid, i.frid, i.from, h.join("|"), i.fpriv];
                var c = '<span class="t">' + aptime.stoHoursEx(i.tm) + ' </span><span class="to-chat-pri" title="打开私聊窗口"></span>' + g + f + '<a href="#" class="u" user="' + j.join(",") + '">' + i.from + ' </a><span class="urid">[<em>' + i.frid + '</em>]</span> <span class="c9">对</span> <a class="u">我</a> <span class="c9">说：</span><span class="con">' + a + "</span>"
            }
        }
        this.visMsg_pri(c);
        if (this.only_chat.is_init) {
            this.only_chat.add_pri(c)
        }
        i = null
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
    visMsg: function (g) {
        var f = (jQuery.type(g) != "array" ? [g] : g);
        for (var c = 0; c < f.length; c++) {
            var h = f[c], a = (h.cls || Room.chatList.textClass[(h.e && h.e.typeID) || "1212112"] || "");
            if (/(game\.v|game|games)\.6\.cn/.test(h.str)) {
                a += " game-link"
            }
            var d = document.createElement("li");
            d.className = a;
            d.innerHTML = h.str;
            if (this.only_chat.is_init && h.only) {
                this.only_chat.add_pub(d.cloneNode(true), h.e)
            }
            this.container[0].appendChild(d);
            d = null;
            h = null
        }
        g = null;
        f = null
    },
    onlyMsg: function (a, c) {
        this.add_list({str: a, e: {typeID: c || 10000}})
    },
    clearList: function (a) {
        var c = a == "pub" ? this.container : this.priveContainer;
        c[0].innerHTML = "";
        c = null
    },
    remove_list: function () {
        var a = Room.chatList, f = a.container[0].getElementsByTagName("li");
        if (f.length > 50) {
            var d = document.createDocumentFragment();
            for (var c = 0; c < f.length - 30; c++) {
                f[0].style.display = "none";
                d.appendChild(f[0])
            }
            d.innerHTML = "";
            d = null
        }
        setTimeout(a.remove_list, a.remove_delay);
        f = null;
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
    _resizeStream: function (f) {
        var a;
        var c;
        var d;
        if (Room.chatList.ie6 && !f) {
            return
        }
        if (a = this.publicBox[0]) {
            jQuery(a).css("width", "auto");
            d = jQuery(a).width();
            d && jQuery(a).css("width", d - 20)
        }
        if (c = this.priveBox[0]) {
            jQuery(c).css("width", "auto");
            d = jQuery(c).width();
            d && jQuery(c).css("width", d - 20)
        }
    },
    only_chat: {
        user_fn: function (g) {
            var d = Room.chatList.only_chat, c = jQuery(g.target), i = c.attr("user");
            if (c.is("a") && i) {
                g.preventDefault();
                var f = i.split(",");
                i = {uid: f[0], rid: f[1], alias: f[2], ico: (f[3] && f[3].split("|") || []), role: f[4], pub: 1};
                Room.chatList.setCurUser(i);
                Room.userMenu.visible(c, i);
                d.rollChange(0)
            } else {
                if (c.hasClass("re")) {
                    var h = c.parent().html().replace(/<em.+?>.+?>/i, "");
                    WB.re.setCon(c[0], h)
                }
            }
        }, init: function (f) {
            this.is_init = 1;
            var a = this;
            this.pub_box = jQuery('<ul class="chatList"></ul>').appendTo(f.pub_box);
            this.pri_box = jQuery('<ul class="chatList"></ul>').appendTo(f.pri_box);
            this.pub_scroll = f.pub_box.parent().css("overflow", "hidden");
            this.pri_scroll = f.pri_box.parent().css("overflow", "hidden");
            this.tab_btn = f.tab_btn;
            this.tome_box = f.tome_box.find(".talk-tome-box").bind("visible hidden", function (g) {
                var h = jQuery(this);
                if (g.type == "visible") {
                    h.css("display", "block").stop().animate({height: 190}, 200, function () {
                        a.tome_btn.removeClass("talk-tome-new");
                        a.tome_btn.addClass("talk-tome-spreadopen");
                        h.data("state", "open")
                    })
                } else {
                    h.stop().animate({height: 0}, 200, function () {
                        h.data("state", "close").css("display", "none");
                        a.tome_btn.removeClass("talk-tome-spreadopen")
                    })
                }
            }).css({display: "none", height: 0});
            this.tome_btn = f.tome_box.find("div.talk-tome-spread").bind("click", function () {
                var g = a.tome_box.data("state") == "open" ? "hidden" : "visible";
                a.tome_box.trigger(g)
            });
            this.tome_list_box = jQuery('<ul class="chatList"></ul>').appendTo(this.tome_box.find("div.stream")).on("click", "a,em", this.user_fn);
            this.pub_box.on("click", "a,em", this.user_fn);
            f.pub_hand.css({visibility: "visible", opacity: 1}).bind("visible hidden mouseenter", function (g) {
                switch (g.type) {
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
            this.pub_scroll.bind("mouseenter", function () {
                f.pub_hand.trigger("visible");
                var g = jQuery(this);
                clearTimeout(c);
                c = setTimeout(function () {
                    g.css("overflow", "auto")
                }, 500)
            }).bind("mouseleave", function () {
                f.pub_hand.trigger("hidden");
                var g = jQuery(this);
                clearTimeout(c);
                c = setTimeout(function () {
                    g.css("overflow", "hidden")
                }, 5000)
            });
            f.pub_hand.find(".clearListBtn").bind("click", function () {
                a.clearList("pub")
            });
            this.rollBtn = f.pub_hand.find("span.rollPauseBtn").bind("click", this.rollChange);
            this.pri_box.on("click", "a, .to-chat-pri", function (j) {
                var i = jQuery(j.target), k = i.attr("user");
                if (k) {
                    j.preventDefault();
                    var h = k.split(",");
                    k = {uid: h[0], rid: h[1], alias: h[2], ico: (h[3] && h[3].split("|") || []), role: h[4], pri: 1};
                    Room.chatList.setCurUser(k);
                    Room.userMenu.visible(i, k)
                } else {
                    if (i.hasClass("to-chat-pri")) {
                        var g = i.siblings("a[user]").attr("user").split(",");
                        ChatPrivateWin.open({alias: g[2], uid: g[0]})
                    }
                }
            });
            f.pri_hand.hide().css({visibility: "visible", opacity: 1}).bind("visible hidden mouseenter", function (g) {
                switch (g.type) {
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
            var d = 0;
            this.pri_scroll.bind("mouseenter", function () {
                var g = jQuery(this);
                clearTimeout(d);
                d = setTimeout(function () {
                    g.css("overflow", "auto")
                }, 500);
                if (!_puser.uid) {
                    return
                }
                f.pri_hand.trigger("visible")
            }).bind("mouseleave", function () {
                f.pri_hand.trigger("hidden");
                var g = jQuery(this);
                clearTimeout(d);
                d = setTimeout(function () {
                    g.css("overflow", "hidden")
                }, 5000)
            });
            f.pri_hand.find(".clearListBtn").bind("click", function () {
                a.clearList("pri")
            });
            Room.userMenu.add_hid_fn({
                only_chat: function () {
                    Room.chatList.only_chat.rollChange(1)
                }
            });
            f.bar.bind("mousedown", function (l) {
                var h = parseInt(f.pri_hand.css("bottom")), g = parseInt(a.pub_scroll.css("height")), k = parseInt(a.pri_scroll.css("height")), j = parseInt(f.bar.css("bottom"));
                var i = a.pub_scroll.attr("min") / 1;
                jQuery(document).bind("mousemove", function (o) {
                    var n = o.pageY - l.pageY, p = n + g, m = -n + k;
                    if (p < 150 || m < 50) {
                        return
                    }
                    f.bar.css("bottom", -n + j);
                    f.pri_hand.css("bottom", h - n);
                    a.pub_scroll.css("height", p);
                    a.pri_scroll.css("height", m)
                });
                jQuery(document).bind("mouseup", function () {
                    jQuery(document).unbind("mousemove");
                    jQuery(document).unbind("mouseup")
                });
                return false
            })
        }, ct: 0, msg_count: 0, add_pub: function (d, f) {
            this.pub_box.append(d);
            if (f.toid == _puser.uid) {
                this.tome_box.find("p.talk-none").remove();
                this.tome_list_box.append(d.cloneNode(true));
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
                var c = document.createDocumentFragment();
                for (var a = 30; a < this.msg_count; a++) {
                    var d = this.pub_box[0].firstChild;
                    d.style.display = "none";
                    c.appendChild(d)
                }
                c.innerHTML = "";
                c = null;
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
        }, clearList: function (c) {
            var a = Room.chatList.only_chat, d = c == "pub" ? a.pub_box : a.pri_box;
            d.empty();
            d = null;
            this.msg_count = 0
        }, rollAuto: 1, rollChange: function (c) {
            var a = Room.chatList.only_chat;
            if (c === 0) {
                a.rollAuto = 0;
                return
            } else {
                if (c === 1) {
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
    get: function (c) {
        var a = c.content;
        c = null;
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
    parseUser: function (N) {
        var k = N.priv.split("|"), A = Number(k[0]), B = Number(k[1]), O = Number(k[2]), d = k[3], s = Number(k[4]), m = Number(k[5]), r = k[6], n = k[7], I = k[11], l = k[12], H = k[13], q = "name-def";
        if (A == 6) {
            return {sf: A}
        }
        var K = "", p = "", F, G;
        switch (O) {
            case 1:
                p = "deSay";
                break;
            case 2:
            case 6:
                break
        }
        if (A == 1) {
            K = '<span class="youke">' + N.uname + "</span>"
        } else {
            var F = {uid: N.uid, alias: N.uname, rid: N.urid, dj: n, army: N.g, role: A};
            var t = (!Room.test_rid(N.urid) && A != 9) ? "" : '<em class="rid-def">' + N.urid + "</em>";
            var c = "", h = "", P = 0, D = "", a = "", z = "", L = "", C = "";
            var v = {
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
            if (r && r != "") {
                var f = r.split("-");
                for (var J = 0; J < f.length; J++) {
                    var E = f[J];
                    v[E] = this.icos[E]
                }
                var z = v["7570"] || v["7569"] || "", L = v["7122"] || "", c = v["7103"] || v["7104"] || v["7105"] || "", D = v["7559"] || "", a = v["7859"] || "", h = v["7112"] || "", P = v[7116] || v[7117] || v[7118] || v[7119] || v[7120] || "", C = v["7827"] || v["7828"] || v["7829"] || ""
            }
            var u = m ? '<a href="/user/payshow.php?pxuid=' + N.uid + '" title="六币销售" target="_blank">' + GetPix("isShou" + m) + "</a>" : "", q = A == 8 ? 'class="name-xg"' : 'class="name-def"';
            var i = "", H = H.split("-");
            if (H[1] == 2) {
                i = '<a href="/family/rewriteIndex.php?id=' + H[0] + '" title="家族" target="_blank"><img src="http://vi0.6rooms.com/live/family/' + H[0] + '.png" class="flogo" /></a>'
            } else {
                if (H[1] == 3) {
                    i = '<a href="/a/' + H[0].replace(/^.+\//, "").split("_")[0] + '" title="军团" target="_blank"><em class="army_level army-rank' + H[3] + '" style="background-image:url(http://vi0.6rooms.com/live/army/' + H[0] + '.png)"><i class="army' + H[2] + '"></i><b></b></em></a>'
                }
            }
            if (n > 26) {
                q = 'class="name-26"'
            } else {
                if (n > 25) {
                    q = 'class="name-25"'
                }
            }
            var g = "";
            if (s) {
                F.isNote = 1;
                g = GetPix("iNote " + Notes.ns[s].cls)
            }
            if (A == 8) {
                B = 0;
                u = GetPix("xunIco")
            }
            var M = A / 1 == 10 ? '<i title="房间总管" class="manage"></i>' : "";
            var y = P ? '<i class="rich' + n + " rich-" + N.uid + '"><img src="http://vr1.6.cn/imges/live/levelFlash_v5/s' + P + '.gif" /></i>' : '<i class="rich' + n + " rich-" + N.uid + '"></i>';
            y = n > 0 ? '<a href="/event/help/index.php?type=02" title="财富等级" target="_blank">' + y + "</a>" : y;
            l = parseInt(l) > 0 ? '<a target="_blank" href="/event/liveClient/?t=phone" title="手机在线"><i class="phone"></i></a>' : "";
            K = g + '<p class="honor">' + y + h + u + c + D + a + z + C + L + M + t + '</p><p class="user">' + i + l + "<em " + q + ">" + N.uname + "</em></p>";
            var o = "", G = "";
            o = B > 0 ? '<a href="/event/help/index.php?type=01" title="主播等级" target="_blank">' + GetPix("star" + B) + "</a>" : "";
            G = g + '<p class="honor">' + o + h + u + c + D + a + z + C + L + t + '</p><p class="user">' + i + l + "<em " + q + ">" + N.uname + "</em></p>";
            F.ico = Badge.get_ico_id(r.split("-"))
        }
        N = null;
        return {sf: A, cls: p, str: K, star_str: G, user: F}
    },
    getAllUser: function (a) {
        jQuery(a).addClass("userList-loading").find("span").html("<i></i>加载中...");
        Room.Msg.send("priv_alllist", {g: ""});
        a = null
    },
    clearList: function (a) {
        try {
            a.innerHTML = ""
        } catch (c) {
        }
        a = null
    },
    mouseenter: function (a) {
        var c;
        if (Room.userMenu.vis) {
            Room.userMenu.visible(a);
            return
        }
        if (c = Room.userMenu.timer) {
            clearTimeout(c)
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
        var c = Room.listUsers[a.id];
        Room.Call("chatList.setCurUser", c);
        c = null
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
            jQuery.getJSON("/room/getRoomFans.php", {id: page.rid, t: a.content}, function (c) {
                Room.Msg.get(c)
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
            }, 531: function (c) {
                var a = '<font color="#ff0000">' + c.content.armyName + '赠送</font><br><font color="#49016B">' + c.content.num + "个<br>" + Pres[c.content.item].title + "</font>";
                Room.Call("GiftSuper.toSwf", {id: c.content.propid, num: 1, alias: a, isSuit: 0})
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
        this.preBtn.bind("click", function (d) {
            d.preventDefault();
            d.stopPropagation();
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
            for (var c = 0; c < page.gameUsers.length; c++) {
                this.setTou(page.gameUsers[c])
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
        var c = jQuery("#anonBox"), a = jQuery("#anonym_btn"), f = function (h) {
            var g = h.target;
            if (!g) {
                return
            }
            while (g.tagName.toLowerCase() != "body") {
                if (g == c[0] || g == a[0]) {
                    return
                }
                g = g.parentNode
            }
            c.fadeOut(200);
            jQuery(document.body).unbind("click", f)
        };
        a.bind("click", function (g) {
            g.preventDefault();
            if (c.css("display") == "none") {
                c.fadeIn(200);
                jQuery(document.body).bind("click", f)
            } else {
                c.fadeOut(200);
                jQuery(document.body).unbind("click", f)
            }
        });
        var d = this.preSubmit.find("i");
        this.anonym_checkbox.bind("click", function () {
            d.css("display", this.checked ? "block" : "none")
        })
    },
    alert: function (a) {
        Prompt.alert(a)
    },
    set_gift: function (a, c) {
        this.preBox.visible(a, c)
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
        for (var d = 0; d < a.length; d++) {
            if (!Pres[a[d].id]) {
                continue
            }
            var c = Room.present.preBox.panel.find(".gift_big_" + a[d].id).parent();
            if (parseInt(a[d].value) == 0) {
                c.css("display", "none")
            } else {
                c.css("display", "inline")
            }
        }
    },
    test_gift: function (a) {
        if (!this.preNum.data("gid")) {
            this.preBox.visible(a)
        }
    },
    select_gift: function (d, f) {
        var c = {1: 0, 2: 1, 3: 2, 4: 3, 5: 7, 6: 4, 8: 5, 9: 8, 11: 9, 12: 6}, a = Pres[d].u;
        this.preBox.visible(this.preBtn);
        this.preBox.tab_change(c[a]);
        _btn = this.preBox.panel.find(".gifts-list li[gid=" + d + "]");
        _btn.click();
        if (f) {
            setTimeout(function () {
                Room.present.preBox.visible(Room.present.preBtn)
            }, 0)
        }
    },
    createGiftBox: function () {
        this.preBox = {};
        var c = [{item: 1, title: "初级", c: "n1"}, {item: 2, title: "中级", c: "n2"}, {
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
            isInit: 0, vis: 0, num: 0, gid: 0, btn: null, cur: 0, tab_change: function (g) {
                var h = this.cur;
                if (g == h) {
                    return false
                }
                var f = this.btns, d = this.boxs;
                f.eq(h).removeClass("on");
                d.eq(h).css("display", "none");
                f.eq(g).addClass("on");
                d.eq(g).css("display", "block");
                this.cur = g;
                if (_puser.uid) {
                    if (f.eq(g).text() == "守护" && !Room.user.safe) {
                        Room.User_safe.on_notsafe()
                    }
                    if (f.eq(g).text == "贵族" && _puser.rich < 11) {
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
                    } catch (d) {
                    }
                } else {
                    this.panel.find(".gifts-list:eq(0)").jsscroll_remake()
                }
            }, init: function () {
                var o = [], h = [];
                jQuery.each(c, function () {
                    var i = this;
                    o.push('<ul class="gift fix"></ul>');
                    h.push('<li class="' + i.c + '"><a href="">' + i.title + '<i></i></a><i class="line"></i></li>')
                });
                this.panel.find("div.content").remove();
                this.panel.html('<div class="gifts-tab"><ul>' + h.join("") + '</ul></div><div class="gifts-list">' + o.join("") + "</div>");
                if (jQuery("#user_safe").length < 1) {
                    this.panel.find("li.safe").css("display", "none")
                }
                this.panel.attr("class", "gifts-box gifts-box-float");
                _btns = this.panel.find("a"), _pbox = {}, _boxs = this.panel.find("ul.gift");
                _btns.eq(this.cur).addClass("on");
                _boxs.eq(this.cur).css("display", "block");
                var m = this;
                jQuery.each(c, function (n) {
                    var q = this;
                    _pbox[q.item] = _boxs.eq(n);
                    _btns.eq(n).bind("click", jQuery.proxy(m.tab_change, m, n))
                });
                if (page.notPet) {
                    this.panel.find("li.pets").css("display", "none")
                }
                this.btns = _btns;
                this.boxs = _boxs;
                if (Room.user404.appointProp.length > 0) {
                    jQuery.each(Room.user404.appointProp, function (n, q) {
                        if (Pres[q]) {
                            Pres[q].u = 6
                        }
                    })
                }
                var l = [];
                if (page.birthday > 0) {
                    Pres["539"].u = 6
                }
                for (var d in Pres) {
                    if (!Pres[d].isTop) {
                        Pres[d].isTop = 0
                    }
                    if (!Pres[d].u || Pres[d].u == 10) {
                        continue
                    }
                    l.push(Pres[d]);
                    if (!Pres[d].gold) {
                        Pres[d].gold = 5000000
                    }
                }
                l.sort(function (n, i) {
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
                var p = [], k = [];
                for (var f = 0; f < l.length; f++) {
                    var g = l[f];
                    var j = this.getLi(g);
                    if (!_pbox[g.u]) {
                        continue
                    }
                    _pbox[g.u][0].appendChild(j);
                    if (g.isNew == 1) {
                        p[g.u] = 1
                    }
                }
                this.freeBox = _pbox.free;
                _pbox = null;
                jQuery.each(c, function (n) {
                    var q = this;
                    k[q.item] = _btns.eq(n);
                    if (p[q.item] == 1) {
                        k[q.item].append('<span class="new"></span>')
                    }
                });
                this.isInit = 1;
                this.parseFreeGift();
                Room.present.privateGifts();
                this.panel.find(".gifts-list").on("click mouseenter mouseleave", "li", function (n) {
                    var i = jQuery(this), q = Pres[i.attr("gid")];
                    if (n.type == "click") {
                        Room.present.preBox.selGift(q);
                        try {
                            Room.present.gifts_selected.removeClass("selected")
                        } catch (n) {
                        }
                        i.addClass("selected");
                        Room.present.gifts_selected = i
                    } else {
                        if (n.type == "mouseenter") {
                            if (q.id == 652) {
                                wsug(n, q.tip ? (q.gold ? "价格：" + q.gold + "个银币" + q.tip : q.tip.replace("<br/>", "")) : ("价格：" + q.gold + "个银币"))
                            } else {
                                wsug(n, q.tip ? (q.gold ? "价格：" + q.gold + "个六币" + q.tip : q.tip.replace("<br/>", "")) : ("价格：" + q.gold + "个六币"))
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
                var d = this;
                jQuery.ajax({
                    cache: true,
                    dataType: "jsonp",
                    url: customGift,
                    jsonp: "callback",
                    jsonpCallback: "getCustomGift",
                    success: function (f) {
                        d.parseCustom(f)
                    }
                })
            }, parseCustom: function (h) {
                var l = [];
                jQuery.each(c, function (n) {
                    var o = this;
                    l[o.item] = _boxs.eq(n)
                });
                jQuery.each(h, function (n, o) {
                    _boxs.find(".gift_big_" + o.id).parents("li").remove()
                });
                var g = h, k = [];
                jQuery.each(g, function (n, o) {
                    _boxs.find(".gift_big_" + o.id).parents("li").remove()
                });
                for (var m in g) {
                    jQuery.extend(Pres[m], g[m]);
                    k.push(Pres[m]);
                    if (!Pres[m].gold) {
                        Pres[m].gold = 5000000
                    }
                }
                k.sort(function (n, i) {
                    if (n.isTop == i.isTop) {
                        return n.gold - i.gold
                    } else {
                        return Number(n.isTop) - Number(i.isTop)
                    }
                });
                for (var d = 0; d < k.length; d++) {
                    var j = k[d];
                    var f = this.getLi(j);
                    if (!l[j.u]) {
                        continue
                    }
                    l[j.u].eq(0).prepend(f)
                }
                l = null;
                this.jsscroll()
            }, parseFreeGift: function () {
                if (!this.isInit) {
                    return
                }
                var l = (jQuery.type(Room.freeGifts) == "array" || !Room.freeGifts) ? {} : Room.freeGifts, f = [];
                for (var k in l) {
                    if (l[k] < 1) {
                        continue
                    }
                    f.push({id: k, count: l[k]})
                }
                this.freeBox.empty();
                if (f.length < 1) {
                    this.freeBox.innerHTML = '<li class="gift_empty" style="width:auto; cursor:default; text-indent:15px; ">当前没有库存礼物！您可以在 <a href="/event/games/luck.php" target="_blank">幸运魔方</a> 中抽取库存礼物。</li>'
                } else {
                    f.sort(function (m, i) {
                        try {
                            if (!Pres[m.id]) {
                                return 0
                            } else {
                                return (Pres[m.id].gold || 0) - (Pres[i.id].gold || 0)
                            }
                        } catch (n) {
                        }
                    });
                    for (var h = 0; h < f.length; h++) {
                        var g = f[h].id, j = Pres[g];
                        if (!j) {
                            console.log("礼物不存在id=" + g)
                        }
                        var d = this.getLi(j);
                        this.freeBox[0].appendChild(d);
                        d = null;
                        if (j._tip || j._tip === "") {
                        } else {
                            if (j.tip) {
                                j._tip = j.tip
                            } else {
                                j._tip = ""
                            }
                        }
                        jQuery.extend(j, {tip: (j._tip) + "<br>剩余：" + f[h].count + "个", mf: 1})
                    }
                }
                l = null;
                f = null
            }, getLi: function (g) {
                var d = document.createElement("li"), f = (g.isNew == 1) ? '<i class="new"></i>' : "";
                d.innerHTML = '<i class="gift-big gift_big_' + g.id + '"></i><span>' + g.title + "</span>" + f;
                d.className = "gid-" + g.id;
                d.setAttribute("gid", g.id);
                if (g.pri) {
                    d.style.display = "none"
                }
                return d
            }, selGift: function (h) {
                wsug("", 0);
                var i = Room.present;
                i.preNum.data("gid", h.id);
                i.preNum.data("mf", h.mf || 0);
                if ((!Room.GiftShape.hasShape(i.preNum.val() / 1) && i.gift_type != 3) || i.giftOther[h.id] || (h.ns || h.f)) {
                    i.preNum.val(1);
                    i.gift_type = 1;
                    i.custom_id = 0
                }
                this.iHidden();
                var d = i.giftOther;
                if (d[h.id]) {
                    i.preTo.data("uid", 0);
                    i.preTo.val(d[h.id])
                } else {
                    var g = i.preTo.val();
                    for (var f in d) {
                        if (g == d[f]) {
                            i.preTo.val("");
                            break
                        }
                    }
                }
                i.preBtn.text(h.title);
                if (h.id == "599") {
                    i.setTou({uid: page.rid, alias: page.masterName});
                    i.preNum.val(1)
                }
                Room.GiftShape.setState(!(h.ns || h.f));
                h = null
            }, visible: function (d, j) {
                if (this.btn && this.btn[0] == jQuery(d)[0]) {
                    return this.iHidden()
                }
                this.btn = jQuery(d);
                var i = Room.present;
                if (jQuery("#room_gift_panel").length < 1) {
                    var h = i.preBtn.offset();
                    var f = 0;
                    var g = 160;
                    if (page.tpl == "wmp") {
                        f = 300;
                        g = 180
                    } else {
                        if (page.tpl == "voice") {
                            f = 85;
                            g = 195
                        }
                    }
                    this.panel.css({left: h.left - f, top: h.top - g})
                }
                if (!this.isInit) {
                    this.init()
                }
                this.panel.css({visibility: "visible"});
                if (/\d/.test(j)) {
                    this.tab_change(j)
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
            }, _dev: function (f) {
                var d = f.target;
                if (!jQuery.contains(this.panel[0], d) && d != this.panel[0]) {
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
            } catch (c) {
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
    preCheck: function (g) {
        g.preventDefault();
        if (!pageMessage.userCheck) {
            return Login.toLogin()
        }
        var i = Room.present;
        if (i.preSubmit.hasClass("disabled")) {
            return false
        }
        if (i.preTo.val() == "" || i.preTo.val() == "选择选手") {
            i.alert("请选择发送对象！");
            return
        }
        var h = i.preNum;
        var d = h.val(), f = h.data("gid");
        if (i.gift_type != 4 && !/^\d+$/.test(f)) {
            i.alert("请选择礼物！");
            return
        }
        if (f == 536 && page.liveType < 1) {
            Prompt.alert("操作失败，直播未开始不允许送“上头条”礼物");
            return
        }
        if (i.giftOther[f] && i.preTo.data("uid")) {
            i.alert(Pres[f].title + "只能送给" + i.giftOther[f] + "！\n请选择其他礼物！");
            return
        }
        if (!/^\d+$/.test(d)) {
            i.alert("数量错误！");
            h[0].focus();
            h[0].select();
            return
        }
        i.gid = f;
        i.num = d;
        i.mf = i.preNum.data("mf") || 0;
        i.tou = i.preTo.data("uid");
        _custom_id = i.custom_id;
        var a = i.anonym_checkbox && i.anonym_checkbox.prop("checked") ? 1 : 0;
        var c = i.gift_type;
        i.readySend({gift_type: c, gid: i.gid, num: i.num, mf: i.mf, to: i.tou, custom_id: _custom_id, anonym: a})
    },
    readySend: function (c) {
        if (Pres[c.gid] && Pres[c.gid].w) {
            var d = this;
            var a = Pres[c.gid].w == 1 ? "文字" : Pres[c.gid].w;
            Prompt.create({
                btn_sure: {text: "确定"},
                btn_cancel: {text: "取消"},
                onCreateAfter: function (f) {
                    Prompt.box.find("textarea").focus()
                },
                onSubmit: function () {
                    var f = Prompt.box.find("textarea").val();
                    if (f.len() > 50) {
                        alert("输入内容请不要超过25个字");
                        return 0
                    } else {
                        return 1
                    }
                },
                content: '<div class="popGiftMod"><p>请输入' + a + ':<span>(限25个字以内)</span></p><textarea name="custom"></textarea></div>',
                callback: function (f) {
                    if (f) {
                        c.custom_w = Prompt.box.find("textarea").val();
                        d.send(c)
                    }
                }
            })
        } else {
            this.send(c)
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
        }, suit_gift_show: function (a, c) {
            Room.present.parseGet.parse(jQuery.extend(true, {}, c, a.shift()));
            if (a.length > 0) {
                setTimeout(function () {
                    Room.present.parseGet.suit_gift_show(a, c)
                }, 800)
            }
        }, parseSuit: function (g) {
            var f = [], d = g.content.shape;
            if (g.content.item == 10006) {
                for (var c in Pres) {
                    if (jQuery.inArray(Pres[c].u, [1, 2, 3, 4, 8, 12]) > -1) {
                        f.push({gold: Pres[c].gold, content: {item: Pres[c].id, num: 1}});
                        f.sort(function (i, h) {
                            return i.gold - h.gold
                        })
                    }
                }
            } else {
                jQuery.each(Pres[g.content.item].suit, function (h, j) {
                    f.push({content: {item: j.id, num: j.num, shape: d[j.id] || 0}})
                })
            }
            var a = [];
            for (var c = 0; c < g.content.num; c++) {
                a = a.concat(f)
            }
            f = null;
            this.suit_gift_show(a, g);
            a = null
        }, parse: function (v) {
            var q = 1, c = v.content.num;
            var p = aptime.stoHoursEx(v.tm), n = v.from, a = v.fid, l = v.to, y = Pres[v.content.item], d = y ? y.cls : "";
            if (v.content.isShape == 1) {
                y = {gold: v.content.giftCoin}
            }
            var t = [v.fid, v.frid, v.from, Badge.get_ico_id(v.prop).join("|"), v.fpriv];
            var A = [v.tid, v.trid, v.to, Badge.get_ico_id(v.tprop).join("|"), v.tpriv];
            if (Room.liveMaster && (v.tid == page.rid || (y.id == 98 || y.id == 99 || y.id == 106))) {
                Room.Call("newMsg.start", "有新礼物！")
            }
            if (v.tid == page.puid || jQuery.inArray(y.id, [98, 99, 430, 571, 7560, 7570]) > -1) {
                for (var r = 0; r < Room.present.events.length; r++) {
                    try {
                        Room.present.events[r](v, v.content.num * y.gold)
                    } catch (v) {
                    }
                }
            }
            if (y.id == "99") {
                try {
                    fireworks_guest_login.visible()
                } catch (v) {
                }
            }
            var o = [];
            if (page.fid && page.fid == page.gameId) {
                var z = c > 75 ? 75 : c
            } else {
                var z = c > 1000 ? 1000 : c
            }
            if (Room.m.isGiftIcons) {
                for (var r = 0; r < z; r++) {
                    o.push('<i class="' + d + ' gift-small"></i>')
                }
            } else {
                o.push('<i class="' + d + ' gift-small"></i>')
            }
            var s = "", x = "";
            if (this.giftAni[d] && c >= this.giftAni[d].s) {
                x = '<img src="http://vr0.6rooms.com/imges/pixel.gif" class="giftAni ' + (c >= this.giftAni[d].m ? "m" : "s") + d + '"/>'
            }
            var f = y.id == 98 ? ", 礼物价值平均分配" : "";
            if (!a) {
                s = Room.reBtn + '<span class="t">' + p + "</span> " + l + " 玩 " + n + " 获得 " + o.join("") + " " + y.title + "，共" + c + "个";
                v.typeID = "101"
            } else {
                if (v.tid) {
                    l = '<a href="#" class="u" user="' + A.join(",") + '">' + l + "</a>"
                } else {
                    l = '<span class="u">' + l + "</span>"
                }
                var k = "";
                if (v.fid == 1900000026) {
                    k = '<span class="u">' + n + "</span>"
                } else {
                    if (v.fid == 1900000047) {
                        k = '<span class="mystery"><i class="fixpng"></i>' + n + "</span>"
                    } else {
                        if (v.fid > 900000000) {
                            k = '<a class="u" href="/a/' + v.frid + '" target="_blank">' + n + " </a>"
                        } else {
                            k = '<a href="#" class="u" user="' + t.join(",") + '">' + n + " </a>"
                        }
                    }
                }
                if (v.content.isShape == 1) {
                    s = Room.reBtn + '<span class="t">' + p + " </span>" + k + " 送给 " + l + " " + v.content.num + "个单价" + v.content.giftCoin + "六币的个性礼包"
                } else {
                    s = Room.reBtn + '<span class="t">' + p + " </span>" + k + "向 " + l + " 送 " + o.join("") + " " + y.title + "，共" + c + "个" + x + f + "，感谢 " + k + "的热情支持!"
                }
                if (y.id == "600") {
                    s = Room.reBtn + '<span class="t">' + p + " </span>" + k + "向 " + l + " " + y.title + '<i class="' + d + ' gift-small"></i> ' + v.content.num * y.gold + "六币，感谢 " + k + "的热情支持!"
                }
            }
            Room.Call("chatList.add_list", {
                u: {uid: v.fid, rid: v.frid, alias: v.from},
                u2: {uid: v.tid, rid: v.trid, alias: v.to},
                cls: "style-gift",
                e: v,
                str: s
            });
            if (!a) {
                return
            }
            if (Room.get_gifts_list && Room.get_gifts_list.isLoad) {
                if (page.isMic || (v.tid == page.puid || jQuery.inArray(y.id, [98, 99, 430, 571, 7560, 7570]) > -1)) {
                    if (v.content.isShape == 1) {
                        var h = v.content.itemAry;
                        for (var r = 0; r < v.content.num; r++) {
                            jQuery.each(h, function (m, i) {
                                Room.Call("get_gifts_list.add", {uid: v.fid, tm: v.tm, item: m, num: i, alias: v.from})
                            })
                        }
                    } else {
                        if (!v.suit) {
                            Room.Call("get_gifts_list.add", {
                                uid: v.fid,
                                tm: v.tm,
                                item: v.content.item,
                                num: v.content.num,
                                alias: v.from
                            })
                        }
                    }
                }
            }
            if (d == "flyMsg" || d == "sofa") {
                return
            }
            if (y.f || (y.id == 416 && c == 6666)) {
                if (y.id == 416) {
                    c = 1
                }
                var g = y.to ? v.to : v.from;
                Room.Call("GiftSuper.toSwf", {
                    id: y.id,
                    num: c,
                    alias: g,
                    send_alias: v.from,
                    get_alias: v.to,
                    isSuit: v.suit,
                    msg: v.content.msg,
                    gname: v.content.gname
                });
                return
            }
            if (!y.suit && v.content.shape != "" && Room.m.isShape) {
                Room.Call("Room.GiftShape.toSwf", v.content, v.suit);
                return
            }
            if (v.content.isShape == 1) {
                return
            }
            var j = jQuery.extend(true, {}, y);
            if (page.fid && page.fid == page.gameId) {
            } else {
                if (d == "gift_1") {
                    if (c >= 99) {
                        j.info.src = pUrl + "rose99.png";
                        j.info.w = w = 326;
                        j.info.h = 276;
                        c = Math.floor(c / 99)
                    }
                }
                Room.Call("Gift_show.addGift", j, c)
            }
            if (y.suit) {
                setTimeout(function () {
                    Room.present.parseGet.parseSuit(v)
                }, 8.1 * 1000)
            }
        }
    }
};
Room.Gift_show = {
    ie6: jQuery.browser.msie && jQuery.browser.version == "6.0", imgCache: {}, addGift: function (c, a) {
        if (!Room.m.isGiftShow || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(c.id)) {
            return
        }
        if (!c.info) {
            return
        }
        this.show(c, a)
    }, show: function (d, g) {
        g = Math.min(g, 20);
        var h = [];
        for (var f = 0; f < g; f++) {
            h.push('<div style="width:' + d.info.w + "px;height:" + d.info.h + "px;background:url(" + d.info.src + ") no-repeat; position:absolute; left:" + Number.random(0, Math.max(0, 940 - d.info.w)) + "px; top:" + Number.random(0, Math.max(0, 450 - d.info.h)) + 'px"></div>')
        }
        var c = jQuery("#micer_player_1"), l = c[0] ? c.offset().top : 100;
        var a = jQuery('<div class="giftShowBox"></div>').css({
            width: 940,
            marginLeft: -470,
            top: l,
            left: "50%"
        }).html(h.join("")).appendTo(document.body);
        if (this.ie6) {
            var j = a[0].getElementsByTagName("div");
            if (!typeof(DD_belatedPNG)) {
                $LAB.script("png").wait(function () {
                    for (var m = 0; m < j.length; m++) {
                        DD_belatedPNG.fixPng(j[m])
                    }
                })
            } else {
                for (var f = 0; f < j.length; f++) {
                    DD_belatedPNG.fixPng(j[f])
                }
            }
        }
        var k = 8000;
        if (d.gold >= 100 && d.gold <= 1000) {
            k = 10 * 1000
        }
        setTimeout(function () {
            a.remove()
        }, k)
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
    }, init: function (d) {
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
                a.init(d)
            }, 1000);
            return
        }
        this.setPos = d.setPos || jQuery.noop;
        this.close_btn = jQuery("#gift-swf-close");
        a.isInit = 1;
        if (Room.prop_lib.length > 0) {
            while (Room.prop_lib.length > 0) {
                var c = Room.prop_lib.pop();
                a.zuojia(c)
            }
        }
        if (this.close_btn) {
            this.close_btn.click(function (f) {
                f.preventDefault();
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
    }, toSwf: function (d) {
        if (!Room.m.isGiftShow || !this.isInit || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(d.id)) {
            return
        }
        this.setPos();
        var a = Pres[d.id].title;
        try {
            Room.GiftSuper.swf_player(d)
        } catch (c) {
            Room.GiftSuper.getSwf();
            Room.GiftSuper.swf_player(d)
        }
        this.box.css("z-index", 666)
    }, swf_player: function (c) {
        var a = Pres[c.id];
        var d = a.w ? c.msg : c.alias;
        if (c.gname != "") {
            d = c.gname
        }
        this.swf.receivejsMessage(c.id, c.num, {
            rid: c.rid,
            str: d,
            userName: c.alias,
            get_alias: c.get_alias,
            send_alias: c.send_alias,
            isSuit: c.isSuit
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
    init: function (c) {
        if (!Room.m.isGiftShow) {
            return
        }
        this.write_swf();
        if (!this.getSwf()) {
            this.t = setTimeout(jQuery.proxy(this.init, this, c), 1000);
            return
        }
        this.shapeBtn = c.btn;
        this.setPos = c.setPos || jQuery.noop;
        this.giftNum = c.giftNum;
        if (!Room.m.isShape) {
            this.shapeBtn.css("visibility", "hidden")
        } else {
            this.create_shapbox();
            var a = this;
            this.shapeBtn.bind("click", function (d) {
                d.preventDefault();
                d.stopPropagation();
                if (a.shape_panel.box.is(":visible")) {
                    a.shape_panel.iHidden()
                } else {
                    a.shape_panel.visible(this, c.posBox || null)
                }
            })
        }
        window.giftShapeClose = jQuery.proxy(this.remove, this)
    },
    hasShape: function (c) {
        for (var a = 0; a < this.shapes.length; a++) {
            if (c == this.shapes[a].num) {
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
    toSwf: function (d, c) {
        if (!Room.m.isGiftShow || Room.m.superGiftHidden) {
            return
        }
        if (!Room.present.show_test(d.id)) {
            return
        }
        this.setPos();
        if (!this.swf || !this.swf.jsRun) {
            this.getSwf()
        }
        var a = this.swf;
        setTimeout(function () {
            if (d.isShape == 1) {
                for (var f = 0; f < d.num; f++) {
                    setTimeout(function () {
                        a.jsRun("", d.shape)
                    }, 500)
                }
            } else {
                a.jsRun(Pres[d.item].info.src_s, d.shape)
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
            box: _box, visible: function (g, f) {
                this.btn = jQuery(g);
                var d = (f || Room.GiftShape.giftNum).offset();
                this.box.css({left: d.left, top: d.top - 211}).fadeIn(200);
                jQuery(document.body).bind("click", this.dev)
            }, iHidden: function () {
                this.btn = null;
                this.box.fadeOut(200);
                jQuery(document.body).unbind("click", this.dev)
            }, dev: function (f) {
                var d = f.target, g = Room.GiftShape.shape_panel;
                if (!jQuery.contains(g.box[0], d) && d != g.box[0]) {
                    g.iHidden()
                }
            }
        };
        var a = [];
        jQuery.each(this.shapes, function () {
            var d = this;
            a.push('<a href="" sys="' + d.num + '" class="s' + d.id + '">' + d.name + "</a>")
        });
        var c = this.shape_panel.box.find("div.giftBase");
        c.html(a.join(""));
        this.shape_panel.box.on("click", "a,span", function (d) {
            var g = Room.GiftShape, f = Room.present;
            d.preventDefault();
            _a = jQuery(this);
            switch (_a.attr("class")) {
                case"giftBtab":
                    g.shape_panel.box.removeClass("giftShapeMy");
                    break;
                case"giftMtab":
                    g.shape_panel.box.addClass("giftShapeMy");
                    if (!g.is_get_shap) {
                        g.get_my_shap();
                        g.is_get_shap = 1
                    }
                    break;
                case"draw_btn":
                    g.draw_open(0);
                    break;
                case"draw_btn2":
                    g.draw_open(1);
                    break;
                case"giftDel":
                    d.stopPropagation();
                    g.del_my_shap(_a);
                    break;
                case"mys":
                    f.setGift({gift_type: 3, count: _a.attr("num_m"), custom_id: _a.attr("gid")});
                    g.shape_panel.iHidden();
                    f.test_gift(_a);
                    break;
                case"group":
                    f.setGift({gift_type: 4, count: 1, custom_id: _a.attr("gid")});
                    g.shape_panel.iHidden();
                    break
            }
            if (_a.attr("sys")) {
                f.setGift({gift_type: 2, count: _a.attr("sys"), custom_id: 1});
                g.shape_panel.iHidden();
                Room.present.test_gift(_a)
            }
        })
    },
    get_my_shap: function () {
        jQuery.ajax({
            dataType: "json", url: "/user/prop/userPropShapeList.php", success: function (f) {
                if (f.flag == "001") {
                    var d = f.content, a = Room.GiftShape.shape_panel.box.find("p.giftMyList");
                    if (d) {
                        a.find("a").remove();
                        var c = [];
                        jQuery.each(d, function () {
                            var g = this;
                            if (g.type == 2) {
                                c.push('<a href="" class="group" gid="' + g.id + '"><span title="删除" gid="' + g.id + '" class="giftDel">x</span><img style="background-image:url(' + g.pic + ')" src="http://vr0.6.cn/imges/live/CSSIMG/giftShapeImg.png" />' + g.coin + "六币</a>")
                            } else {
                                c.push('<a href="" class="mys" num_m="' + g.num + '" gid="' + g.id + '"><span title="删除" gid="' + g.id + '" class="giftDel">x</span><img style="background-image:url(' + g.pic + ')" src="http://vr0.6.cn/imges/live/CSSIMG/giftShapeImg.png" />' + g.num + "个</a>")
                            }
                        });
                        a.html(c.join(""))
                    }
                } else {
                    if (f.flag == "203") {
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
            success: function (c) {
                if (c.flag == "001") {
                    a.parent().remove()
                } else {
                    if (c.flag == "203") {
                        Login.toLogin()
                    } else {
                        a.parent().css("display", "block");
                        alert(c.content)
                    }
                }
            }
        })
    },
    draw_open: function (c) {
        if (!_puser.uid) {
            return Login.toLogin()
        }
        if (!_puser.rich || _puser.rich < 1) {
            return alert("您的等级不够1富，不能使用此功能")
        }
        if (this.is_get_shap && Room.GiftShape.shape_panel.box.find("p.giftMyList a").length >= 30) {
            return alert("您设计的礼物图形不能超过30个")
        }
        var a = "width=1080,height=600,top=0,left=0,scrollbars=0,resizable=0,status=1", d = window.open("/user/prop/drawshape.php?" + !!c, "drawshape", a);
        if (d) {
            d.focus()
        }
    },
    draw_save: function () {
        this.get_my_shap();
        this.shape_panel.box.addClass("giftShapeMy")
    }
};
function swf_get_gifts() {
    var a = [];
    for (var c in Pres) {
        var d = Pres[c];
        if (!d.ns && ",1,2,3,".indexOf("," + d.u + ",") > -1) {
            a.push(d)
        }
    }
    return a
}
Room.GiftFly = {
    attachRoom: function () {
        Room.Msg.set_getback({
            108: function (a) {
                Room.GiftFly.add(a)
            }, 153: function (a) {
                Room.GiftFly.add(a, 36);
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
    }, init: function (a) {
        if (!!document.createElement("canvas").getContext && window.requestAnimationFrame) {
            this.scroll = this.h5
        } else {
            this.scroll = this.flash
        }
        this.scroll.init();
        this.sendInput = a.sendInput;
        this.setPos = a.setPos;
        if (Room.m.isFly) {
            a.sendBtn.bind("click mouseover mouseout", function (c) {
                c.preventDefault();
                if (c.type == "click") {
                    Room.GiftFly.send()
                } else {
                    if (c.type == "mouseover") {
                        wsug(c, "飞屏，价格：1000个六币")
                    } else {
                        wsug("", 0)
                    }
                }
            })
        }
        this.attachRoom();
        window.giftFlyClose = jQuery.proxy(this.remove, this)
    }, add: function (c, a) {
        if (!Room.m.isGiftShow) {
            return
        }
        this.setPos();
        if (a) {
            this.scroll.add(c.content, a);
            this.swf.jsExec(e.content, a)
        } else {
            this.scroll.add(c.from + "说：" + c.content, 46)
        }
    }, remove: function () {
        this.scroll.remove()
    }, send: function () {
        if (this.sendInput.disabled) {
            Prompt.alert("禁言状态不能飞屏!");
            return false
        }
        var d = this.sendInput.val(), c = new RegExp(this.Fsm), a = "";
        while (d = d.replace(c, "")) {
            if (a == d) {
                break
            }
            a = d
        }
        if (d == "") {
            Prompt.alert("请输入飞屏内容!");
            this.sendInput.val("");
            this.sendInput[0].focus();
            return false
        }
        if (d.len() > 80) {
            Prompt.alert("您的飞屏内容过长，请确保不超过40个汉字！");
            return false
        }
        Prompt.confirm('"飞屏"等同于礼物，价值1000六币，是否发送？', function (f) {
            if (f) {
                Room.GiftFly.sendInput.val("");
                Room.Msg.send("prop_flymsg", {m: d})
            }
        });
        return false
    }, setBox: function (a, c, d, f) {
        this.scroll.setPos(a, c, d, f)
    }, flash: {
        init: function () {
            this.write_swf()
        }, swf: 0, write_swf: function () {
            if (this.box) {
                return
            }
            this.box = jQuery('<div class="gift-fly-swf-box"><div id="flyMsgBox"></div></div>').appendTo(document.body);
            swfobject.embedSWF("/apple/flashComponent/msgRoll1.9.swf", "flyMsgBox", "100%", "100%", "10.0", "", {}, {wmode: "transparent"})
        }, getSwf: function () {
            this.swf = swfobject.getObjectById("flyMsgBox");
            return this.swf && this.swf.jsExec
        }, add: function (c, a) {
            if (!this.swf || !this.swf.jsExec) {
                this.getSwf()
            }
            this.swf.jsExec(c, a);
            this.box.css("z-index", 201)
        }, setPos: function (a, c, d, f) {
            this.box.css({width: a, height: c, left: d, top: f})
        }, remove: function () {
            this.box.css({width: 900, height: 400, zIndex: -10})
        }
    }, h5: {
        font: "40px '黑体', Artial", lineHeight: 40, index: 0, list: [], init: function () {
            this.canvas = document.createElement("canvas");
            this.canvas.className = "gift-fly-h5-box";
            document.body.appendChild(this.canvas);
            this.context = this.canvas.getContext("2d");
            var a = this;
            this.Text = function (h, c, i, g, f) {
                this.height = a.lineHeight;
                this.x = c;
                this.y = i;
                this.m = 0;
                this.canvas = document.createElement("canvas");
                var d = this.canvas.getContext("2d");
                d.font = f;
                this.width = d.measureText(h).width;
                this.canvas.width = this.width + 10;
                this.canvas.height = this.height + 10;
                d.save();
                d.font = f;
                d.lineWidth = 4;
                d.strokeStyle = "purple";
                d.fillStyle = g;
                d.strokeText(h, 2, this.height);
                d.fillText(h, 2, this.height);
                d.restore()
            };
            this.Text.prototype.move = function (c) {
                c.drawImage(this.canvas, this.x, this.y)
            }
        }, remove: function () {
            this.stop()
        }, setPos: function (a, c, d, f) {
            this.canvas.width = a;
            this.canvas.height = c;
            this.canvas.style.left = d + "px";
            this.canvas.style.top = f + "px";
            this.setRows()
        }, rows: [], setRows: function () {
            var f = this.lineHeight + 10, a = parseInt(this.canvas.height / f), h = Math.ceil(a / 2), g = [];
            g[0] = {pos: h * f, item: false};
            for (var d = 1; d < h + 1; d++) {
                var c = h + d;
                b = h - d;
                if (c < a) {
                    g.push({pos: c * f, item: false})
                }
                if (b > 0) {
                    g.push({pos: b * f, item: false})
                }
            }
            for (var d = 0; d < g.length; d++) {
                if (this.rows[d]) {
                    g[d] = this.rows[d]
                }
            }
            this.rows = g
        }, getRow: function () {
            var c = this.rows, f = {i: 0, pos: c[0].pos}, d = new Date().getTime();
            for (var a = 0; a < c.length; a++) {
                if (!c[a].item || d - c[a].item.tm > 5000) {
                    f = {i: a, pos: c[a].pos};
                    break
                }
            }
            return f
        }, add: function (d, c) {
            var f = this.getRow(), a = new this.Text(d.slice(0, c), this.canvas.width, f.pos, "#ffffff", this.font);
            a.tm = new Date().getTime();
            a.speed = 2;
            this.list.push(a);
            this.rows[f.i].item = a;
            if (!this.isStart) {
                this.start()
            }
        }, af: 0, start: function () {
            this.isStart = 1;
            this.canvas.style.visibility = "visible";
            this.drawFrame()
        }, stop: function () {
            cancelAnimationFrame(this.af);
            this.canvas.style.visibility = "hidden";
            this.isStart = 0
        }, drawFrame: function () {
            var d = Room.GiftFly.h5;
            d.af = window.requestAnimationFrame(d.drawFrame, d.canvas);
            d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);
            if (d.list.length < 1) {
                d.stop()
            } else {
                var a = [], c = new Date().getTime();
                d.list.forEach(function (g, f) {
                    if (c - g.tm > 2000 && g.m < 1) {
                        return
                    }
                    g.m++;
                    g.x -= g.speed;
                    g.move(d.context);
                    if (g.x > -g.width - 5) {
                        a.push(g)
                    } else {
                        g.canvas = null;
                        g = null
                    }
                });
                d.list = a;
                a = null
            }
        }
    }
};
(function () {
    Room.Ready.set_init(function () {
        if (!window.new2016 && jQuery("#mySite")[0]) {
            Room.mySite = new l()
        }
    });
    var j = jQuery;
    var i = function (s) {
        typeof console == "object" && console.log && console.log(s)
    };
    var p = 200;
    var l = function () {
        l.superclass.constructor.call(this, j("#mySite"));
        this.pop = null;
        this.siteData = {};
        this.siteDOM = {};
        this.siteCount = 0;
        this.updateQueue = [];
        this.efc = new d();
        this.update = j.proxy(this, "update");
        this._mouseoverHandler = j.proxy(this, "_mouseoverHandler");
        this._mouseoutHandler = j.proxy(this, "_mouseoutHandler");
        this._clickHandler = j.proxy(this, "_clickHandler");
        this._effectHideHandler = j.proxy(this, "_effectHideHandler");
        this._effectShowHandler = j.proxy(this, "_effectShowHandler");
        this._effectCloseHandler = j.proxy(this, "_effectCloseHandler");
        this._effectStartHandler = j.proxy(this, "_effectStartHandler");
        this.initialize();
        this.attachRoom()
    };
    VI.extend(l, VI.Widget, {
        initialize: function () {
            var u = this.elem();
            var v = u.find("div[class^=site]");
            var y = v.length;
            this.siteCount = y;
            for (var t = 0; t < v.length; t++) {
                var x = v[t];
                var s = String(t + 1);
                j(x).attr("data-siteNumber", s);
                this.siteDOM[s] = {id: this.mark(x), num: s};
                this.siteData[s] = null
            }
            for (var s in page.sites) {
                if (page.sites.hasOwnProperty(s)) {
                    this.siteData[s] = page.sites[s];
                    this.render(s)
                }
            }
            u.on("mouseover", this._mouseoverHandler);
            u.on("mouseout", this._mouseoutHandler);
            u.on("click", this._clickHandler);
            this.efc.on("start", this._effectStartHandler);
            this.efc.on("hide", this._effectHideHandler);
            this.efc.on("show", this._effectShowHandler);
            this.efc.on("close", this._effectCloseHandler)
        }, attachRoom: function () {
            Room.Msg.set_getback({
                109: function (s) {
                    Room.mySite.queue(s.content);
                    Room.sitechat.change(s.content)
                }, 109001: function (s) {
                    Room.mySite.info_change(s.content)
                }
            });
            Room.Msg.set_callback({
                prop_seat: function (s) {
                    (s.flag != "001") && onErr.parseErr(s)
                }
            })
        }, queue: function (t) {
            var s = this.updateQueue;
            s.push(t);
            if (s.length == 1) {
                this.update()
            }
        }, update: function () {
            var t = this.updateQueue[0];
            var s = t.site;
            this.siteData[s] = t;
            page.sites = this.siteData;
            this.efc.run(t.site.toString(), Number(s) > this.siteCount / 2 ? "left" : "right")
        }, render: function (s) {
            var u = this.siteData[s];
            var t = this.mark(this.siteDOM[s].id);
            if (u) {
                t.html('<p>					<img class="uh" src="' + u.pic + '" />					<em class="has">' + u.alias + '</em>					<i class="bg"></i>					</p>');
                t.addClass("has")
            } else {
                t.html('<p><img src="http://vr1.6rooms.com/imges/pixel.gif"><i class="bg"></i></p>');
                t.removeClass("has")
            }
        }, info_change: function (s) {
            this.siteData[s.site] = s;
            j("#mySite").find("div.site_" + s.site).find("img").attr("src", s.pic).end().find("em").text(s.alias)
        }, clear: function () {
            var s = this.siteData;
            for (var t in s) {
                if (s.hasOwnProperty(t)) {
                    s[t] = null;
                    this.render(t)
                }
            }
        }, _checkMouseEvent: function (v, t) {
            var s = this.elem();
            var u = j(v).closest("[data-siteNumber]", s[0]);
            var x = j(t).closest("[data-siteNumber]", s[0]);
            if (u.length > 0 && u[0] != x[0]) {
                return true
            }
            return false
        }, _mouseoverHandler: function (u) {
            if (this._checkMouseEvent(u.target, u.relatedTarget)) {
                var t = j(u.target).closest("[data-siteNumber]", this.elem());
                var s = t.attr("data-siteNumber");
                var v = this.siteData[s];
                wsug(u, (v ? '<span style="font-size:14px; font-weight:normal;">' + v.alias + "</span><br />" : "") + "抢座，当前：" + (v ? v.num : 0) + "个沙发")
            }
        }, _mouseoutHandler: function (s) {
            if (this._checkMouseEvent(s.target, s.relatedTarget)) {
                wsug(s, "")
            }
        }, _clickHandler: function (v) {
            var y = v.target;
            var u = j(y).closest("[data-siteNumber]", this.elem()[0]);
            if (u.length > 0) {
                var t = u.attr("data-siteNumber");
                var x = this.siteData[t];
                var s = this.pop = this.pop || new c();
                v.preventDefault();
                v.stopPropagation();
                s.show();
                s.updateCount(x ? x.num : 0);
                s.updateSiteNumber(t);
                s.updatePosition(u);
                s.focus()
            }
        }, _effectStartHandler: function (s) {
            i("start");
            var t = this.mark(this.siteDOM[s].id);
            this.efc.setPos(t)
        }, _effectHideHandler: function (s) {
            i("hide handler: " + s);
            var t = this.mark(this.siteDOM[s].id);
            t.html('<p><img src="http://vr1.6rooms.com/imges/pixel.gif"><i class="bg"></i></p>');
            t.addClass("has")
        }, _effectShowHandler: function (s) {
            i("show handler: " + s);
            this.render(s)
        }, _effectCloseHandler: function (t) {
            var s = this.updateQueue;
            s.shift();
            if (s.length > 0) {
                i("update next one");
                setTimeout(this.update, p)
            }
        }
    });
    var n = "/apple/flashComponent/leftAndRight.swf";
    var r = "getSite";
    var a = 488;
    var k = 406;
    var g = 207;
    var m = 260;
    var f = 500;
    var h = 6 * 4000;
    var o = 10 * 1000;
    var d = function () {
        this.siteNumber = "";
        this.callShowTimer = null;
        this.callCloseTimer = null;
        this.hide = j.proxy(this, "hide");
        this.show = j.proxy(this, "show");
        this.close = j.proxy(this, "close")
    };
    VI.extend(d, VI.Widget, {
        createSWF: function () {
            var s = j("<b>");
            s.attr("id", r);
            j("body").append(s);
            swfobject.embedSWF(n, r, a, k, "10.0", "", {}, {wmode: "transparent"})
        }, getSWF: function () {
            var s = document.getElementById(r);
            return s || this.createSWF() || document.getElementById(r)
        }, run: function (u, v) {
            var t = this.getSWF();
            this.siteNumber = u;
            if (t && typeof t.run == "function") {
                this.trigger("start", u, v);
                t.style.visibility = "visible";
                t.style.zIndex = "99999";
                this.callShowTimer = setTimeout(this.show, h);
                this.callCloseTimer = setTimeout(this.close, o);
                t.run(u, v)
            } else {
                var s = this;
                setTimeout(function () {
                    s.run(u, v);
                    s = t = null
                }, f)
            }
        }, setPos: function (s) {
            var v = this.getSWF();
            var t = s.offset();
            var x = page.tpl == "wmp" ? 36 : 16;
            var u = page.tpl == "wmp" ? 3 : 10;
            var z = t.left + x - g;
            var y = t.top + u - m;
            v.style.left = z + "px";
            v.style.top = y + "px"
        }, hide: function (s) {
            this.trigger("hide", s)
        }, show: function (s) {
            i((s ? "flash " : "") + "show");
            clearTimeout(this.callShowTimer);
            var s = s || this.siteNumber;
            this.trigger("show", s)
        }, close: function (t) {
            i((t ? "flash " : "") + "close");
            clearTimeout(this.callCloseTimer);
            var t = t || this.siteNumber;
            var s = this.getSWF();
            this.trigger("close", t);
            s.style.visibility = "hidden";
            s.style.zIndex = "0"
        }
    });
    var q = '<form class="mySitePop">								<input type="hidden" name="site" />								<p class="info">								当前<em>0</em>个沙发，超过此数量才能成功抢座								</p>								<p class="btn">								数量：<input type="text" class="js_num input_text"> 								<button type="submit">抢座</button> 								<em>(100六币/沙发)</em>								</p>								<span class="arrow">								<i class="i1">◆</i><i class="i2">◆</i>								</span>								</form>';
    var c = function () {
        c.superclass.constructor.call(this, {fill: q});
        this.on("mount", this.initialize)
    };
    VI.extend(c, VI.Overlay, {
        initialize: function () {
            var s = this.getContentBox();
            this._submitHandler = j.proxy(this, "_submitHandler");
            this._documentClickHandler = j.proxy(this, "_documentClickHandler");
            s.on("submit", this._submitHandler);
            this.on("afterShow", this._afterShowHandler);
            this.on("afterHide", this._afterHideHandler)
        }, updateCount: function (s) {
            this.elem().find(".info em").html(s)
        }, updateSiteNumber: function (s) {
            this.elem().find("input[name=site]").val(s)
        }, updatePosition: function (t) {
            var u = t.offset();
            var s = t.width();
            var y = t.height();
            var x = u.top + y - 120;
            var v = u.left - (264 - s) / 2;
            this.move(v, x)
        }, focus: function () {
            this.elem().find("input.js_num").trigger("focus").val("")
        }, _submitHandler: function (x) {
            x.preventDefault();
            if (!_puser.uid) {
                Login.toLogin()
            } else {
                var v = this.elem();
                var u = v.find("input.js_num");
                var t = u.val().replace(/\s/g, "");
                var s = v.find("input[name=site]").val();
                if (!/^[1-9]\d*$/.test(t)) {
                    alert("请输入正确的数量！");
                    u.trigger("focus").trigger("select")
                } else {
                    this.hide();
                    u.val("");
                    Room.Msg.send("prop_seat", {rid: page.rid, tuid: Room.micer.uid, t: 0, num: t, site: s})
                }
            }
        }, _documentClickHandler: function (t) {
            var u = t.target;
            var s = this.elem();
            if (!j.contains(s[0], u) && u != s[0]) {
                this.hide()
            }
        }, _afterShowHandler: function () {
            j(document).on("click", this._documentClickHandler)
        }, _afterHideHandler: function () {
            j(document).off("click", this._documentClickHandler)
        }
    })
})();
(function () {
    var a = jQuery;
    Room.sitechat = {
        pops: {}, init: function () {
            this.isinit = 1;
            var c = this, d = a('<div class="mysite-chat"></div>').appendTo(a("#mySite"));
            for (var f = 1; f < 5; f++) {
                c.pops[f] = {
                    t: 0,
                    uid: 0,
                    elm: a("<div/>", {
                        "class": "chatpop chatpop" + f,
                        html: '<i class="bg1"></i><p class="con"></p><i class="bg2"></i>'
                    }).appendTo(d)
                }
            }
            a.each(page.sites, function (h, g) {
                c.pops[h].uid = g.uid
            })
        }, parse: function (f, g) {
            if (page.tpl == "wmp") {
                return
            }
            if (!this.isinit) {
                this.init()
            }
            var c = this, d = 0;
            a.each(this.pops, function (i, h) {
                if (f && h.uid == f) {
                    if (!d) {
                        g = g.st(20, "...")
                    }
                    d = 1;
                    c.popchat(h, g)
                }
            })
        }, popchat: function (c, f) {
            var d = c;
            clearTimeout(d.t);
            d.t = setTimeout(function () {
                d.elm.hide(150)
            }, 5000);
            d.elm.find(".con").html(f);
            d.elm.show(150)
        }, change: function (d) {
            var c = this.pops[d.site];
            if (c.uid != d.uid) {
                clearTimeout(c.t);
                c.elm.css("display", "none");
                c.uid = d.uid
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
        var g = [];
        for (var c in this.anis) {
            var a = this.anis[c];
            g.push('<li><a href="#" ani="' + a.id + '">' + a.name + "</a></li>")
        }
        this.magic_menu = jQuery("<a>", {
            "class": "magic_menu",
            html: '<i class="arrows"></i>鄙视Ta',
            style: "display:block"
        }).prependTo(Room.userMenu.oTeQuan);
        this.anisList = jQuery("<ul>", {"class": "ul_list", html: g.join("")}).appendTo(this.magic_menu);
        var d = function () {
            clearTimeout(Room.magic.vt);
            Room.magic.vt = setTimeout(function () {
                Room.magic.vis()
            }, 500)
        }, f = function () {
            clearTimeout(Room.magic.vt);
            Room.magic.vt = setTimeout(function () {
                Room.magic.hid()
            }, 200)
        };
        this.magic_menu.bind("mouseover", d).bind("mouseout", f);
        this.anisList.bind("mouseover", d).bind("mouseout", f);
        this.magic_menu.bind("click", function (h) {
            h.preventDefault();
            h.stopPropagation();
            var k = h.target;
            if (k.className != "magic_menu") {
                var j = k.getAttribute("ani"), i = Room.userMenu;
                if (j) {
                    i.iHidden();
                    Room.magic.setAni({id: j, uid: i.uid, alias: i.alias})
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
    change: function (f) {
        if (!Room.m.isGiftShow) {
            return
        }
        if (!Room.m.isMagic || jQuery.type(f) == "array" || f.endtm < 1) {
            return
        }
        if (!this.box) {
            this.box = jQuery('<div class="magic_box"></div>').hide().appendTo(document.body);
            this.box.on("click", ".user a", function () {
                var i = jQuery(this);
                var h = i.data("user").split("|");
                if (h[0] > 0) {
                    Room.userMenu.visible(i, {uid: h[0], rid: h[1], alias: h[2], dj: 25, ico: ""})
                }
            })
        }
        if (this.anis[f.stype].f == 1) {
            var d = String.uniqueID(), c = this.swfPath + this.anis[f.stype].src;
            this.box.hide().html('<p class="media" title="' + this.anis[f.stype].name + '"><span id="' + d + '"><span></p><p class="user"><a data-user="' + f.tuid + "|" + f.trid + "|" + f.talias + '">' + f.talias + "</a></p>");
            swfobject.embedSWF(c, d, "140", "160", "10.0", "", {}, {wmode: "transparent", menu: "false"});
            this.box.fadeIn(300)
        } else {
            this.box.hide().html('<p class="media" title="' + this.anis[f.stype].name + '"><img src="' + this.imgPath + this.anis[f.stype].src + '"/></p><p class="user"><a data-user="' + f.tuid + "|" + f.trid + "|" + f.talias + '">' + f.talias + "</a></p>");
            var g = Room.magic, a = new Image();
            a.onload = function () {
                g.box.fadeIn(300)
            };
            a.src = this.imgPath + this.anis[f.stype].src
        }
        $LAB.script(JSF.jq_drag).wait(function () {
            Room.magic.box.draggable()
        });
        this.timeOut(f.endtm)
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
        var c = jQuery("#redBag");
        c.bind("click", this.send);
        var a = jQuery("div.redBagBox");
        this.count_box = jQuery(c.find("i:eq(0)")[0] || a.find("span.packetNum"));
        this.liveCountBox = jQuery("div#redBagNum");
        this.numberBox = this.liveCountBox.find("p.rbnbox span");
        this.attachRoom();
        this.liveCountUpdate(0);
        if (!_puser.uid) {
            return
        }
        c.bind("mouseenter", this.pop_vis).bind("mouseleave", this.pop_hid_y);
        this.pop = a;
        this.pop.bind("mouseenter", this.pop_vis).bind("mouseleave", this.pop_hid_y);
        this.getCount()
    },
    liveCountUpdate: function (c) {
        var a = Number(this.numberBox.text().replace(/\D/g, ""));
        this.numberBox.text(numF(a + c));
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
        var c = Room.redBag;
        if (a.flag == "001") {
            c.testTime();
            c.myCount = a.content.num;
            c.postCount = a.content.postnum;
            c.pop_update()
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
        var c = this.pop.find("span.y"), a = this.pop.find("span.n"), d = this.myCount;
        if (d > 0) {
            c.html(c.html().replace(/<em>.+<\/em>/i, "<em>" + d + "</em>"));
            this.count_box.text(d);
            this.count_box.css("display", "block");
            c.css("display", "inline");
            a.css("display", "none")
        } else {
            a.css("display", "inline");
            c.css("display", "none");
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
    parse: function (c) {
        if (!c.me && c.fid == _puser.uid) {
            return
        }
        this.liveCountUpdate(1);
        var h = aptime.stoHoursEx(c.tm), a = c.from, f = c.fid;
        if (Room.liveMaster) {
            Room.newMsg.start("有新礼物！")
        }
        var d = [c.fid, c.frid, c.from, ""];
        var g = Room.reBtn + '<span class="t">' + h + ' </span><a href="#" class="u" user="' + d.join(",") + '">' + a + ': </a> 送1个红包 <em class="redBagIco"></em>';
        Room.chatList.add_list({str: g, e: c})
    }
};
if (_puser.uid) {
    Mediator.subscribe("redbag_add", function () {
        Room.redBag.myCount++;
        Room.redBag.pop_update()
    })
}
(function () {
    var d = '<div class="fireworks-packet" unselectable="on" onselectstart="return false;">		<div class="packet-before">			<a class="rub-area"></a>			<span class="countdown"><em>0</em>秒</span>		</div>	  	<div class="packet-after">	  		<a class="btn">确定</a>	  	</div>	</div> ';
    var c = function (g, f) {
        this.stm = f;
        this.id = g;
        this.redid = null;
        this.init();
        return this
    };
    jQuery.extend(c.prototype, {
        init: function () {
            this.box = null;
            this.create()
        }, create: function () {
            var f = this.box = jQuery(d);
            if (jQuery.browser.safari) {
                f.css("-webkit-transform", "none")
            }
            f.attr("id", "firework_packet_" + this.id);
            f.on("mousedown", jQuery.proxy(this, "_mousedown"));
            f.on("mouseup", jQuery.proxy(this, "_mouseup"));
            f.on("click", ".rub-area", jQuery.proxy(this, "_grab"));
            f.on("click", ".btn", jQuery.proxy(this, "destroy"));
            this.getpos();
            if (this.stm) {
                this.wait()
            } else {
                this.start()
            }
            a._size++
        }, getpos: function () {
            var h = this;
            var g = a._pos;
            for (var f = 0; f < g.length; f++) {
                if (g[f][2]) {
                    h.box.css({left: g[f][0], top: g[f][1], zIndex: a._zIndex}).appendTo("body");
                    h.index = f;
                    g[f][2] = false;
                    break
                }
            }
        }, wait: function (f) {
            var g = Math.floor(f || this.stm);
            clearInterval(this.timer);
            this.box.addClass("wait-packet");
            if (g >= 0) {
                this.countdown(g)
            }
        }, start: function () {
            var f = this;
            clearInterval(this.timer);
            this.box.removeClass("wait-packet");
            this.countdown(30, function () {
                f.destroy()
            })
        }, destroy: function () {
            var g = this.id;
            var f = this.redid;
            this.box.off().remove();
            setTimeout(function () {
                a._list[g] = a._list[f] = null
            }, 5000);
            a._pos[this.index][2] = true;
            a._size--
        }, _grab: function (f) {
            f.preventDefault();
            f.stopPropagation();
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
        }, grab_back: function (h) {
            var f = h.content;
            var g = this;
            if (h.flag == "001") {
                g.box.addClass("success-packet");
                if (f.msg == 100) {
                    g.box.addClass("success-super-packet")
                }
                setTimeout(function () {
                    g.box.removeClass("success-packet")
                }, 2000)
            } else {
                if (f.state == "-1") {
                    g.box.addClass("fail-packet");
                    return
                }
                Prompt.alert(f.msg)
            }
            setTimeout(function () {
                g.lock = 0;
                g.box.removeClass("disabled-packet")
            }, 3000)
        }, countdown: function (f, h) {
            var i = this;
            var g = this.box.find(".countdown em");
            g.text(f);
            this.timer = setInterval(function () {
                f--;
                if (f <= 0) {
                    f = 0;
                    clearInterval(i.timer);
                    h && h()
                }
                g.text(f)
            }, 1000)
        }, _mousedown: function (g) {
            var f = jQuery(g.target);
            var h = this.box.position();
            this._data = {target: f, startLeft: h.left, startTop: h.top, startX: g.pageX, startY: g.pageY};
            this.is_drag = 1;
            this.box.css("zIndex", a._size + a._zIndex++);
            jQuery(document).on("mousemove.fireworks", jQuery.proxy(this, "_mousemove"))
        }, _mousemove: function (i) {
            if (this.is_drag) {
                var h = this._data;
                var g = i.pageX - h.startX;
                var f = i.pageY - h.startY;
                this.box.css({left: h.startLeft + g, top: h.startTop + f});
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
        _size: 0, _zIndex: 1100, _pos: [], init: function (f) {
            this._list = {};
            this._startPoint = f.setPos();
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
                prop_grabfireworkwealth: function (g) {
                    var f = a._list[g.content.redid];
                    if (f) {
                        f.grab_back(g)
                    }
                }
            });
            Room.Msg.set_getback({
                1605: function (f) {
                    jQuery.each(f.content, function (h, g) {
                        a.add(f.content[h])
                    })
                }, 1606: function (g) {
                    var f = a._list[g.content.redid];
                    if (f) {
                        f.is_empty = 1
                    }
                }, 1607: function (f) {
                    jQuery.each(f.content, function (j, h) {
                        var g = a._list[h.id];
                        if (g) {
                            g.wait(h.second)
                        } else {
                            a.add(h.id, h.second)
                        }
                    })
                }, 1608: function (f) {
                    jQuery.each(f.content, function (h, g) {
                        a._list[g.id].redid = g.redid;
                        a._list[g.redid] = a._list[g.id];
                        a._list[g.id].start()
                    })
                }
            })
        }, add: function (g, f) {
            this._list[g] = new c(g, f)
        }, _setPoint: function () {
            var f = this._startPoint;
            var h = 8;
            var g = Math.floor(f.top / 130);
            var m = -1 * 130;
            if (g <= 0) {
                g = 1
            }
            for (var l = 0; l < h; l++) {
                for (var k = 0; k < g; k++) {
                    a._pos.push([f.left + l * m, f.top + k * m, true])
                }
            }
        }, _watch: function () {
            jQuery.each(this._pos, function (g, f) {
                jQuery('<div id="point"></div>').css({
                    width: "5px",
                    height: "5px",
                    overflow: "hidden",
                    background: "#f09",
                    "border-radius": "50%",
                    position: "absolute",
                    zIndex: 2000,
                    left: f[0],
                    top: f[1]
                }).appendTo(document.body)
            })
        }
    };
    Room.fireworks = a
})();
(function () {
    var d = {
        LI_HTML: '<li><a href="/" title="{{title}}"><img src="{{src}}" width="{{width}}" height="{{height}}" data-bigsrc="{{bigsrc}}" /><span title="关闭" class="close"></span></a></li>',
        CONTAINER_ID: "#liveImgshow",
        TIME_TO_LIVE: 60 * 1000,
        WARP_WIDTH: 480,
        init: function (f) {
            this.container = f || jQuery(this.CONTAINER_ID).css("display", "none");
            this.ul = this.container.find("ul");
            this._attacheEvent();
            return this
        },
        add: function (h) {
            var f = this;
            var g = function (k, i) {
                if (k && i) {
                    var j = f.scaleImageSize(k, i);
                    k = j[0];
                    i = j[1]
                }
                h.id = String.uniqueID();
                h.width = k || "";
                h.height = i || "";
                f.append(h);
                f.justify();
                jQuery(h.id).delay(f.TIME_TO_LIVE).remove();
                setTimeout(jQuery.proxy(f.remove, f, h.id), f.TIME_TO_LIVE)
            };
            if (!h.width) {
                this.getImageSize(h.src, g)
            } else {
                g(h.width, h.height)
            }
        },
        getLength: function () {
            return this.ul.find("li").length
        },
        append: function (f) {
            this.container.css("display", "block");
            this.ul.append(this._createLI(f))
        },
        pop: function () {
            var f = this.ul.find("li:eq(0)");
            f && this.remove(f)
        },
        remove: function (g) {
            var f = typeof g == "string" ? jQuery("#" + g) : g;
            f && f.remove();
            this.justify();
            if (this.ul.children().length < 1) {
                this.container.css("display", "none")
            }
        },
        showDetail: function (f) {
            new ImageOverlay().show(f)
        },
        justify: function () {
            var f = this.ul.find("li");
            var j = this.WARP_WIDTH;
            var m = 10;
            if (f.length == 1) {
                f.eq(0).css("left", m + "px")
            } else {
                if (f.length > 1) {
                    var k = 0;
                    var h = f.map(function () {
                        var i = jQuery(this).width();
                        k += Number(i);
                        return i
                    });
                    if (k + (f.length + 1) * m >= j) {
                        this.pop();
                        this.justify()
                    } else {
                        var l = m;
                        for (var g = 0; g < h.length; g++) {
                            f.eq(g).css("left", l);
                            l += h[g] + m
                        }
                    }
                }
            }
        },
        getImageSize: function (g, h) {
            var f = new Image();
            f.onload = function () {
                h && h(this.width, this.height);
                this.onload = null
            };
            f.src = g
        },
        scaleImageSize: function (i, g, k, j) {
            var k = k || 49;
            var j = j || 49;
            var h = i / g;
            var f = k / j;
            if (i <= k && g <= j) {
            } else {
                if (h >= f) {
                    i = k;
                    g = i / h
                } else {
                    g = j;
                    i = g * h
                }
            }
            return [i, g]
        },
        _createLI: function (i) {
            var h = document.createElement("ul");
            var g = /\{\{(\w+?)\}\}/g;
            var j = this.LI_HTML.replace(g, function (l, k) {
                return i[k] || ""
            });
            var f;
            h.innerHTML = j;
            f = h.firstChild;
            f.id = i.id;
            return f
        },
        _attacheEvent: function () {
            this.pop = jQuery.proxy(this.pop, this);
            this._clickHandler = jQuery.proxy(this._clickHandler, this);
            this._mouseHandler = jQuery.proxy(this._mouseHandler, this);
            this.container.bind("click", this._clickHandler);
            this.container.bind("mouseover", this._mouseHandler);
            this.container.bind("mouseout", this._mouseHandler)
        },
        _clickHandler: function (f) {
            var g = jQuery(f.target);
            f.preventDefault();
            if (g.is("img") && g.attr("data-bigsrc")) {
                var h = g.attr("data-bigsrc");
                this.showDetail(h)
            } else {
                if (g.hasClass("close")) {
                    this.remove(g.parents("li"))
                }
            }
        },
        _mouseHandler: function (h) {
            var i = jQuery(h.target);
            var g = jQuery(h.relatedTarget);
            var f = i.parents("li");
            if (f.length < 1) {
                return
            }
            if (!g || g.is("object") || g && !g.parents("li:eq(0)")) {
                h.type == "mouseover" ? f.find(".close").css("display", "block") : f.find(".close").css("display", "none")
            }
        }
    };
    jQuery.extend(d, {scaleImageSize: d.scaleImageSize, getImageSize: d.getImageSize});
    var c = function () {
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
        state: function (i) {
            var h = this.elem;
            var f = this.STATES;
            for (var g in f) {
                h.removeClass(f[g])
            }
            i && f[i] && h.addClass(f[i])
        },
        show: function () {
            var f = this.elem;
            if (!pageMessage.userCheck) {
                return Login.toLogin()
            }
            (!f[0].parentNode || f[0].parentNode.nodeName != "body") && f.appendTo(document.body);
            f.fadeIn(200);
            this.justifyPos();
            jQuery(document.body).trigger("click", {target: this.trigger});
            jQuery(document.body).bind("click", c)
        },
        hide: function () {
            this.elem.fadeOut(200);
            jQuery(document.body).unbind("click", c)
        },
        toggle: function () {
            if (this.elem.css("display") != "block") {
                this.show()
            } else {
                this.hide()
            }
        },
        justifyPos: function () {
            var f = this.trigger;
            var h = f.offset();
            var g = this.elem;
            g.css("left", h.left + f.width() / 2 - g.width() / 2);
            g.css("top", h.top - g.height() - 8)
        },
        resetForm: function () {
            this.state();
            this.elem.find("form").trigger("reset");
            this._imagesrc = ""
        },
        checkExtension: function (f) {
            var g = f.split(".");
            var h = g[g.length - 1];
            if (jQuery.inArray(h.toLowerCase(), this.EXTENSION) > -1) {
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
        suffix: function (f, h) {
            var g = /^(.+?)(_\w+)?(\.\w+)$/;
            if (g.exec(f)) {
                return f.replace(g, "$1" + (h ? "_" + h : "") + "$3")
            }
            return f
        },
        disabled: function () {
            this.fileInput.prop("disabled", true);
            this.elem.find("." + this.PSEUDO_BTN).addClass(this.PSEUDO_DISABLE_CLS)
        },
        enable: function () {
            this.fileInput.prop("disabled", false);
            this.elem.find("." + this.PSEUDO_BTN).removeClass(this.PSEUDO_DISABLE_CLS)
        },
        _uploadBack: function (k) {
            if (k.flag != "001") {
                alert(k.content);
                this.state()
            } else {
                var h = this;
                var g = h.elem.find("img:eq(0)");
                var i = k.content.s.width;
                var f = k.content.s.height;
                var j = d.scaleImageSize(i, f, 90, 68);
                g.attr("src", k.content.s.link);
                g.attr("width", j[0]);
                g.attr("height", j[1]);
                h.state("uploaded");
                h._imagesrc = k.content.url.link
            }
        },
        _attacheEvent: function () {
            this.trigger.bind("click", this._triggerHandler);
            this.elem.bind("click", this._clickHandler);
            this.fileInput.bind("change", this._changeHandler);
            window.roomPhotoboxCallback = this._uploadBack
        },
        _clickHandler: function (g) {
            var i = jQuery(g.target);
            var f = this.HOOKS;
            if (i[0].nodeName == "A") {
                for (var h in f) {
                    if (i.hasClass(f[h])) {
                        g.preventDefault()
                    }
                }
                if (i.hasClass(f.del)) {
                    this.resetForm()
                } else {
                    if (i.hasClass(f.close)) {
                        this.hide()
                    } else {
                        if (i.hasClass(f.publish)) {
                            this.publish()
                        }
                    }
                }
            }
            g.stopPropagation()
        },
        _triggerHandler: function (f) {
            f.preventDefault();
            f.stopPropagation();
            this.toggle()
        },
        _changeHandler: function () {
            var f = this.fileInput.val();
            if (!this.checkExtension(f)) {
                alert("格式错误");
                return
            }
            this.upload()
        },
        _create: function () {
            var g = document.createElement("div");
            var f;
            g.innerHTML = this.HTML;
            f = g.firstChild;
            return jQuery(f)
        }
    };
    Room.SendImage = function () {
        if (jQuery("#uploadeImage").length < 1) {
            return
        }
        imageUploader = a.init();
        jQuery.extend(Room, {imageList: d.init(), imageUploader: imageUploader});
        Room.chatList.container.bind("click", function (f) {
            var g = jQuery(f.target);
            if (g.is("img") && g.hasClass("gift_image")) {
                new ImageOverlay().show(imageUploader.suffix(g.attr("src"), ""))
            }
        })
    };
    Room.Msg.set_getback({
        122: function (i) {
            if (!i) {
                Room.user.status == 1 ? Room.Call("imageUploader.disabled") : Room.Call("imageUploader.enable")
            } else {
                if (Room.imageList) {
                    var k = Room.imageList;
                    var h = Room.imageUploader;
                    var g = k.scaleImageSize(i.width, i.height);
                    var j = [i.fid, i.frid, i.from, "", ""];
                    var f = Room.reBtn + '<span class="t">' + aptime.stoHoursEx(i.tm) + ' </span> <a href="#" class="u" user="' + j.join(",") + '">' + i.from + '</a><span class="urid">(' + i.frid + ')</span>：<img class="gift_image" width="' + g[0] + '" height="' + g[1] + '" src="' + h.suffix(i.content, "s") + '" style="cursor:pointer;" />';
                    Room.Call("chatList.visMsg", {e: i, u: {uid: i.fid, rid: i.frid, alias: i.from}, str: f});
                    k.add({
                        title: "由 " + i.from + " 发布",
                        src: h.suffix(i.content, "s"),
                        bigsrc: h.suffix(i.content, ""),
                        width: g[0],
                        height: g[1]
                    })
                }
            }
        }
    });
    Room.Msg.set_callback({
        msg_pic: function (f) {
            if (f.flag != "001") {
                onErr.parseErr(f)
            }
        }
    })
})();
(function () {
    var d = '<div class="silver-coin-pop" date-tracing="ir3a9hz2">		<h3 unselectable="on" onselectstart="return false;"></h3>		<div class="num" unselectable="on" onselectstart="return false;">1</div>		<a href="javascript:;" class="close"></a>		<a href="javascript:;" class="btn"></a>		<div class="countdown"><span>120</span>秒后开始抢币</div>		<a class="scan" href="event/thyh" target="_blank"></a>	</div>';
    var c = function (g, f) {
        this.config = f || {};
        this.id = g;
        this.stm = f.outtm;
        this.etm = f.endtm;
        this.init();
        return this
    };
    jQuery.extend(c.prototype, {
        init: function () {
            this.box = null;
            this.create()
        }, create: function () {
            var f = this.box = jQuery(d);
            f.attr("id", "rich_firework_packet_" + this.id);
            f.on("mousedown", "h3", jQuery.proxy(this, "_mousedown"));
            f.on("mouseup", "h3", jQuery.proxy(this, "_mouseup"));
            f.on("click", ".btn", jQuery.proxy(this, "grab"));
            f.on("click", ".close", jQuery.proxy(this, "destroy"));
            this.getpos();
            if (this.stm) {
                this.wait(this.stm)
            } else {
                this.start(this.etm)
            }
        }, getpos: function () {
            var h = this;
            var g = a._pos;
            for (var f = 0; f < g.length; f++) {
                if (g[f][2]) {
                    h.box.css({left: g[f][0], top: g[f][1], zIndex: a._zIndex}).appendTo("body");
                    h.index = f;
                    g[f][2] = false;
                    break
                }
            }
        }, wait: function (f) {
            var g = Math.floor(f);
            clearInterval(this.timer);
            this.lock = 1;
            this.box.addClass("rich-wait-packet");
            if (g >= 0) {
                this.countdown(g)
            }
        }, start: function (f) {
            var g = this;
            clearInterval(this.timer);
            this.lock = 0;
            this.box.removeClass("rich-wait-packet");
            this.box.find(".countdown").html("剩余时间<span>60</span>秒");
            this.countdown(f, function () {
                g.destroy()
            })
        }, destroy: function () {
            var f = this.id;
            this.box.off().remove();
            setTimeout(function () {
                a._list[f] = null
            }, 5000);
            a._pos[this.index][2] = true;
            a._size--
        }, grab: function (f) {
            f.preventDefault();
            f.stopPropagation();
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
            var f = this;
            jQuery.getJSON("/event/thyh/getgold.php", {id: this.id, t: +new Date()}).done(function (g) {
                var h = g.content;
                if (g.flag == "001") {
                    f.effect(h)
                } else {
                    if (g.flag == "203") {
                        Login.toLogin();
                        return
                    } else {
                        Prompt.alert(h)
                    }
                }
                setTimeout(function () {
                    f.lock = 0;
                    f.box.removeClass("rich-disabled-packet")
                }, 1200)
            })
        }, effect_list: [], effect: function (f) {
            var i = 52;
            var k = 40;
            var h = this;
            var g = this.effect_list;
            if (this.animate) {
                g.push(f);
                return
            }
            this.animate = 1;
            var j = this.box.find(".num");
            j.text(f).show().animate({top: i - k + "px", opacity: 0}, 700, function () {
                j.hide().css({top: i + "px", opacity: 1});
                h.animate = 0;
                if (g.length) {
                    h.effect(g.shift())
                }
            })
        }, countdown: function (f, h) {
            var i = this;
            var g = this.box.find(".countdown span");
            g.text(f);
            this.timer = setInterval(function () {
                f--;
                if (f <= 0) {
                    f = 0;
                    clearInterval(i.timer);
                    h && h()
                }
                g.text(f)
            }, 1000)
        }, _mousedown: function (g) {
            var f = jQuery(g.target);
            var h = this.box.position();
            this._data = {target: f, startLeft: h.left, startTop: h.top, startX: g.pageX, startY: g.pageY};
            this.is_drag = 1;
            this.box.css("zIndex", a._size + a._zIndex++);
            jQuery(document).on("mousemove.fireworks", jQuery.proxy(this, "_mousemove"))
        }, _mousemove: function (i) {
            if (this.is_drag) {
                var h = this._data;
                var g = i.pageX - h.startX;
                var f = i.pageY - h.startY;
                this.box.css({left: h.startLeft + g, top: h.startTop + f});
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
        _size: 0, _zIndex: 1100, _pos: [], _w: 220, _h: 310, init: function (f) {
            this._list = {};
            this._startPoint = f.setPos();
            this._setPoint();
            setTimeout(function () {
                new Image().src = "http://vr3.6rooms.com/imges/live/vim/silver_coin_pop_v3.gif";
                new Image().src = "http://vr3.6rooms.com/imges/live/vim/fireworks_num_bg.png"
            }, 5000);
            this.attachRoom()
        }, attachRoom: function () {
            Room.Msg.set_getback({
                1701: function (h) {
                    var g = h.content.redid;
                    var f = a._list[g];
                    if (!f) {
                        a.add(g, h.content);
                        console.log("fire - add - wait")
                    }
                }, 1702: function (h) {
                    var g = h.content.redid;
                    var f = a._list[g];
                    if (f) {
                        if (f.is_over) {
                            return
                        }
                        console.log("fire - start");
                        f.start(h.content.endtm)
                    } else {
                        console.log("fire - add - start");
                        a.add(g, h.content)
                    }
                }, 1703: function (h) {
                    var g = h.content;
                    var f = a._list[g];
                    if (f) {
                        f.box.addClass("rich-disabled-packet");
                        f.is_over = 1
                    }
                    a.flash.play({id: g})
                }
            })
        }, add: function (i, f) {
            this._size++;
            if (this._size > this._pos.length) {
                var h = jQuery(window);
                var g = this._randomPoint(this._w, h.width() - (this._w * 2), h.scrollTop(), h.height() - this._h);
                this._addPoint(g[0], g[1], true)
            }
            this._list[i] = new c(i, f)
        }, _setPoint: function () {
            var f = this._startPoint;
            var h = 6;
            var g = Math.floor(f.top / this._h);
            var n = -1 * this._w;
            var m = -1 * this._h;
            if (g <= 0) {
                g = 1
            }
            for (var l = 0; l < h; l++) {
                for (var k = 0; k < g; k++) {
                    var o = l % 2 ? -180 : -80;
                    a._addPoint(f.left + l * n, f.top + k * m + o, true)
                }
            }
        }, _addPoint: function (f, h, g) {
            this._pos.push([f, h, g])
        }, _randomPoint: function (f, h, k, g) {
            var j = Math.ceil(Math.random() * g) + k;
            var i = Math.ceil(Math.random() * h) + f;
            return [i, j]
        }, _watch: function () {
            jQuery.each(this._pos, function (g, f) {
                jQuery('<div id="point"></div>').css({
                    width: "5px",
                    height: "5px",
                    overflow: "hidden",
                    background: "#f09",
                    "border-radius": "50%",
                    position: "absolute",
                    zIndex: 2000,
                    left: f[0],
                    top: f[1]
                }).appendTo(document.body)
            })
        }, flash: {
            _list: [], _playing: 0, init: function () {
                this._init = 1;
                window.rich_fireworks_ready = jQuery.proxy(this, "flash_ready");
                window.rich_fireworks_close = jQuery.proxy(this, "close");
                this.box = jQuery('<div class="rich-fireworks-effect"><div id="rich_fireworks_player"></div></div>').appendTo(document.body);
                swfobject.embedSWF("/apple/room/rich/richFireworks_0.swf", "rich_fireworks_player", 940, 500, "10.0", "", {}, {wmode: "transparent"})
            }, flash_ready: function () {
                this.player = swfobject.getObjectById("rich_fireworks_player");
                this.next()
            }, play: function (f) {
                if (!this._init || !this.player) {
                    this._list.push(f);
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
            }, set_state: function (f) {
                this.box.css(f ? {top: "150px", zIndex: 777} : {top: "-999999px", zIndex: -1})
            }, close: function () {
                this._playing = 0;
                this.set_state(0);
                this.next()
            }
        }
    };
    Room.rich_fireworks = a
})();
var fireworks_guest_login = {
    init: function () {
        this.box = jQuery('<div id="fireworks_guest_login_box" class="free-bean-pop"><a class="close" href="javascript:;"></a><p>太幸运啦！您所在的房间即将绽放<span class="b">大烟花</span><span class="s">超级烟花</span>！<br/>登录就能获得免费六豆！速来！</p><p class="countdown">超级烟花引爆倒计时：<span>300</span>秒</p><a class="btn" href="">速去领豆</a></div>').appendTo(document.body);
        this.box.on("click", "a", function (c) {
            c.preventDefault();
            var a = jQuery(this);
            if (a.hasClass("close")) {
                fireworks_guest_login.hidden()
            } else {
                Login.toLogin()
            }
        })
    }, visible: function (a) {
        if (_puser.uid || this.vis) {
            return
        }
        this.vis = 1;
        if (!this.box) {
            this.init()
        } else {
            this.box.show()
        }
        if (a) {
            this.box.addClass("super-pop");
            this.countdown(300)
        }
    }, hidden: function () {
        this.vis = 0;
        clearInterval(this.timer);
        this.box.removeClass("super-pop").hide()
    }, countdown: function (a) {
        var d = this;
        var c = this.box.find("p.countdown span");
        c.text(a);
        this.timer = setInterval(function () {
            a--;
            c.text(a);
            if (a <= 0) {
                d.hidden()
            }
        }, 1000)
    }
};
if (location.href.match("#superFireworks")) {
    fireworks_guest_login.visible(1);
    location.href = location.href.replace("#superFireworks", "#")
}
Room.Msg.set_getback({
    507: function (a) {
        Lottery.create(a.content)
    }, 508: function (a) {
        Lottery.getPrize(a.content)
    }
});
var Lottery = {
    create: function (d) {
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
            isClick: _puser.uid == d.uid ? "true" : "false",
            youke: (_puser.uid ? _puser.uid : "null"),
            rid: page.rid,
            type: d.type,
            msg: d.msg,
            domain: "http://" + location.hostname
        };
        var c = d.type == "9103" ? "LuckyDraw1.1.swf" : "LuckyDraw1.2.swf";
        swfobject.embedSWF("/apple/games/" + c, "lotterySwf", 285, 312, "9.0.0", "", a, {wmode: "transparent"})
    }, getPrize: function (c) {
        if (!Room.m.isLottery) {
            return
        }
        var a = swfobject.getObjectById("lotterySwf");
        if (a && a.jsOpenBox) {
            a.jsOpenBox(c)
        } else {
            setTimeout(function () {
                Lottery.getPrize(c)
            }, 1000)
        }
    }, remove: function () {
        this.box.remove()
    }, setPos: function () {
        if (page.isMic) {
            var c = jQuery("#player_area");
            var a = c.offset();
            this.box.css("top", a.top - 50)
        } else {
            var c = jQuery("#player");
            if (!c[0]) {
                return
            }
            var a = c.offset();
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
                var c = document.f_jiu, a = c.title.value, f = c.rid.value, d = c.gifts.value;
                if (a.len() > 20) {
                    alert("请输入10个中文字！\n(默认：欢迎大家来捉五魁)");
                    c.title[0].focus();
                    return 0
                }
                if (!f / 1) {
                    alert("房间号输入有误，请重新输入！");
                    return 0
                }
                Lottery_diy.cur = {title: a, rid: f, gid: d};
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
            callback: function (c) {
                if (c) {
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
            var a = "accept", c = "/flashgame/action/lots.php"
        } else {
            var a = "reject", c = "/flashgame/action/lots.php"
        }
        jQuery.ajax({
            dataType: "json", url: c, data: {act: a, rid: page.rid}, success: function (d) {
                if (!d) {
                    return
                }
                if (d.flag == "001") {
                } else {
                    onErr.parseErr(d)
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
        var c = {
            isClick: _puser.uid == a.to ? "true" : "false",
            youke: (_puser.uid ? _puser.uid : "null"),
            rid: page.rid,
            domain: "http://" + location.hostname
        };
        swfobject.embedSWF("/apple/games/zhuobie1.5.swf", "lottery_diy", 338, 451, "9.0.0", "", c, {wmode: "transparent"})
    }, result: function (a) {
        var c = swfobject.getObjectById("lottery_diy");
        if (c && c.jsOpenBox) {
            c.jsOpenBox(a)
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
            var c = jQuery("#player");
            if (c.length < 1) {
                return
            }
            var a = c.offset();
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
        var a = {isLogin: pageMessage.userCheck, r: page.rid, domain: pageMessage.domain}, c = this.swf;
        swfobject.embedSWF(c.src, c.id, c.w, c.h, "9.0.0", "http://v.6.cn/apple/expressInstall.swf", a, {wmode: "transparent"})
    }, removeGame: function () {
        swfobject.removeSWF(this.swf.id);
        this.gameBox[0].innerHTML = "";
        this.gameBox.css("display", "none")
    }, setPos: function () {
        var c = jQuery("#player_area, #player"), a;
        if (c[0]) {
            a = c.offset()
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
        jQuery.getJSON("/room/getRoomNotice.php", {t: a.content}, function (c) {
            Room.Msg.get(c)
        })
    }
});
Room.giftNotice = function () {
    var g = jQuery, a = "#gotohellflash", f = [], i = [], h = null, d = 1000;

    function c() {
        if (f.length == 0) {
            h = setTimeout(c, d);
            return
        }
        var n = g(a), o = n.find("ul"), r = g("<li/>"), j = String.uniqueID(), p = "", l = f.shift(), s = l.content, m = Pres[s.item], k = null, q = parseInt(o.css("top"));
        if (s.type == 1) {
            p = '<a target="_blank" href="' + s.url + '"><em class="user">' + s.msg + '</a>  <em class="time">' + aptime.stoHoursEx(s.tm) + "<i></i></em>"
        } else {
            if (s.frid == 0) {
                p = '<a target="_blank" href="' + s.url + '"><em class="user">' + s.to + '</em> <em class="user">' + s.from + "</em> " + s.num + "个" + m.title + '</a>  <i class="gift_' + s.item + ' giftSmall"></i>  <em class="time">' + aptime.stoHoursEx(s.tm) + "<i></i></em>"
            } else {
                if (s.isShape == 1) {
                    p = '<a target="_blank" href="' + s.url + '"><em class="user">' + s.from + '</em> 送给 <em class="user">' + s.to + "</em> " + s.num + "个单价" + s.giftCoin + '六币的个性礼包</a> <em class="time">' + aptime.stoHoursEx(s.tm) + "<i></i></em>"
                } else {
                    p = '<a target="_blank" href="' + s.url + '"><em class="user">' + s.from + '</em> 送给 <em class="user">' + s.to + "</em> " + s.num + "个" + m.title + '</a>  <i class="gift_' + s.item + ' giftSmall"></i>  <em class="time">' + aptime.stoHoursEx(s.tm) + "<i></i></em>"
                }
            }
        }
        r.html(p).attr("id", j);
        r.appendTo(o);
        i.push(j);
        if (i.length > 3) {
            g("#" + i.shift()).remove()
        }
        if (i.length >= 3) {
            d = 5000
        }
        h = setTimeout(c, d)
    }

    return function (j) {
        if (!Room.m.isGiftNotice) {
            return
        }
        f = f.concat(j);
        if (!h) {
            c()
        }
    }
}();
Room.Ready.set_init(function () {
    var d = jQuery;
    if (Room.m.isRadioRoll) {
        var a = d("#radioRollJ");
        if (!a[0]) {
            return
        }
        var c = new Faces({btn: a.find("button.face_default"), input_text: a.find("textarea"), fname: "radio"});
        try {
            page.getRadioRoll = GetRadioRoll;
            page.getRadioRoll.init()
        } catch (f) {
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
        this.button.bind("click", function (d) {
            d.preventDefault();
            page.getRadioRoll.openPop()
        });
        this.subBtn.bind("click", function (d) {
            d.preventDefault();
            page.getRadioRoll.send()
        });
        this.closeBtn.bind("click", function (d) {
            d.preventDefault();
            page.getRadioRoll.pop.css("display", "none")
        });
        this.radioInput.bind("focus", function () {
            if (page.getRadioRoll.radioInput.val() == page.getRadioRoll.sugStr) {
                page.getRadioRoll.radioInput.val("")
            }
            page.getRadioRoll.radioInput.css("color", "#666")
        });
        var a = [];
        for (var c in FaceSymbols) {
            a.push(FaceSymbols[c])
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
        var i = this.msgBox.shift();
        if (!i) {
            return
        }
        chatContent = ParseFaceSymobls(i.msg);
        if (i.rrid !== 0) {
            var f = i.rrid.replace(/^\//, ""), d = f.indexOf("http") < 0 ? "/" + f : f, c = "<a target='_blank' href='" + d + "'>", h = "</a>"
        } else {
            c = "", h = ""
        }
        if (i.rid !== 0) {
            var a = "(" + i.rid + ")"
        } else {
            var a = ""
        }
        var g = jQuery('<span class="tipItem"></span>').html(c + "<em class='tipIcon fixpng'></em><em class='tipName'>" + i.from + a + "：</em><em class='tipWords'>" + chatContent + "</em><em class='tipTime'>(" + aptime.stoHoursEx(i.tm) + ")</em>" + h);
        g.appendTo(this.proCont);
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
        var c = a.match(new RegExp(this.Fsm, "g"));
        if (c && c.length > 1) {
            this.alert("发布失败，每条广播只允许添加1个表情。");
            return
        }
        this.pop.css("display", "none");
        this.isSending = 1;
        Room.Msg.send("msg_sys", {r: page.rid, m: a})
    },
    sendBack: function (c) {
        this.isSending = 0;
        var a = String(c.flag);
        if (a == "001") {
            alert(c.content);
            this.radioInput.val("")
        } else {
            onErr.parseErr(c)
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
            var c = ChatPrivateWin;
            c.is_init = 1;
            a.ajax({
                dataType: "text", url: c.tpl, success: function (d) {
                    c.box = a(d).appendTo(document.body).eq(0);
                    if (c.ie6) {
                        c.box.css({
                            right: IM.main_box ? IM.main_box.css("right") : 6,
                            top: IM.main_box ? parseInt(IM.main_box.css("top")) + 3 : 68
                        })
                    } else {
                        c.box.css({
                            right: IM.main_box ? IM.main_box.css("right") : 6,
                            bottom: IM.main_box ? parseInt(IM.main_box.css("bottom")) + 32 : 68
                        })
                    }
                    c.events();
                    a.each(c.userAry, function (f, g) {
                        c.open(g)
                    })
                }
            })
        },
        userAry: [],
        open: function (d) {
            if (!_puser.uid) {
                return Login.toLogin()
            }
            var j = ChatPrivateWin;
            if (!this.is_init) {
                this.userAry.push(d);
                this.init();
                return
            }
            if (!j.box) {
                this.userAry.push(d);
                return
            }
            var g = d.uid, k = d.alias, c = j.box.find(".chat-ulist ul"), i = j.box.find(".chat-body"), f = c.find("li.user-" + g), h = i.find("dl.list-" + g);
            if (!f[0]) {
                f = a('<li data-uid="' + g + '" class="user-' + g + '"><a>' + k + '</a><span class="u-close" title="关闭"></span><i class="newmsg"></i></li>').prependTo(c);
                h = a('<dl class="list-' + g + '"></dl>').prependTo(i)
            }
            f.addClass("on").siblings("li").removeClass("on");
            h.show().siblings("dl").hide();
            if (!j.is_open) {
                j.is_open = 1;
                j.box.fadeIn(200)
            }
            j.send_input.trigger("focus");
            i.scrollTop(i[0].scrollHeight)
        },
        msgHtml: '<dd><p class="user"><a data-uid="{uid}" href="#">{alias}</a><span>{time}</span></p><p class="text">{content}</p></dd>',
        newMsg: function (f) {
            if (!ChatPrivateWin.box) {
                return false
            }
            var k = ChatPrivateWin, i = k.box.find(".chat-ulist ul"), g = k.box.find(".chat-body"), h, c, l, j;
            l = (f.fid == _puser.uid) ? f.to : f.fid;
            j = (f.fid == _puser.uid) ? "我" : f.from + "<em>[" + f.frid + "]</em>";
            h = i.find("li.user-" + l), c = g.find("dl.list-" + l);
            if (!h[0]) {
                return false
            }
            var d = k.msgHtml.replace(/\{uid\}/, f.fid).replace(/\{alias\}/, j).replace(/\{time\}/, aptime.stoHoursEx(f.tm)).replace(/\{content\}/, ParseFaceSymobls(f.content));
            a(d).appendTo(c);
            if (!h.hasClass("on")) {
                h.find(".newmsg").css("display", "block")
            }
            g.scrollTop(g[0].scrollHeight);
            return k.is_open
        },
        events: function () {
            var f = ChatPrivateWin, c = f.box.find(".chat-ulist ul"), d = f.box.find(".chat-body");
            $LAB.script(JSF.jq_drag).wait(function () {
                f.box.draggable({handle: f.box.find("div.chat-head:eq(0)"), containment: "document", cursor: "pointer"})
            });
            f.box.find("a.close").on("click", function (g) {
                g.preventDefault();
                f.box.fadeOut(200);
                f.is_open = 0
            });
            c.on("click", "li", function () {
                var h = a(this), g = h.data("uid"), i = h.text();
                h.find(".newmsg").hide();
                h.addClass("on").siblings("li").removeClass("on");
                d.find("dl.list-" + g).show().siblings("dl").hide();
                d.scrollTop(d[0].scrollHeight);
                f.send_input.trigger("focus")
            });
            c.on("click", ".u-close", function (k) {
                k.stopPropagation();
                var j = a(this).parents("li"), i = j.data("uid"), h = j.prev("li"), g = j.next("li");
                if (h[0]) {
                    h.click()
                } else {
                    if (g[0]) {
                        g.click()
                    } else {
                        f.box.fadeOut(200);
                        f.is_open = 0
                    }
                }
                j.remove();
                d.find("dl.list-" + i).remove()
            });
            d.on("click", "a", function (h) {
                h.preventDefault();
                var g = a(this).data("uid");
                if (g > 0) {
                    UserCard_win.getCard(g)
                }
            });
            this.sendInit()
        },
        sendInit: function () {
            var f = ChatPrivateWin, c = f.box.find(".chat-act"), d = c.find("a.face");
            f.send_input = c.find("textarea");
            f.send_button = c.find("button");
            _face = new Faces({btn: d[0], input_text: f.send_input[0], fname: "chat", vip: 0, safe: 0});
            f.send_input.on("keydown", function (g) {
                if (g.which == 13) {
                    f.sendMsg()
                }
            });
            f.send_button.on("click", function () {
                f.sendMsg()
            })
        },
        sendMsg: function () {
            var f = ChatPrivateWin, d = f.send_input, g = a.trim(d.val());
            if (f.send_button.hasClass("disabled")) {
                return
            }
            if (g == "") {
                alert("请输入聊天内容！");
                d.focus();
                return
            }
            if (g.len() > 120) {
                alert("聊天内容过长！");
                d.focus();
                return
            }
            _touid = f.box.find(".chat-ulist li.on").data("uid");
            if (!_touid) {
                alert("请选择私聊对象！");
                return
            }
            var c = {touid: _touid, con: g, pri: 1, sendBack: a.proxy(f.sendBack, f)};
            ChatList.sendPriMsg(c);
            f.send_input.attr("disabled", true);
            f.send_button.attr("disabled", true);
            f.send_button.addClass("disabled")
        },
        sendBack: function (c) {
            var d = ChatPrivateWin;
            d.send_input.val("");
            d.send_input.attr("disabled", false);
            d.send_button.attr("disabled", false);
            d.send_button.removeClass("disabled");
            d.send_input.trigger("focus")
        }
    }
})();
(function () {
    var a = jQuery;
    window.Faces = function () {
        this.initialize.apply(this, arguments)
    };
    a.extend(Faces.prototype, {
        init: 0, initialize: function (c) {
            this.haveVip = c.vip;
            this.haveSafe = c.safe;
            this.isSafe = c.safe && Room.user.safe || Room.user.role == 9;
            this.isVip = c.vip && (/7103|7104|7105|7559/.test(Room.user.prop) || Room.user.role == 9);
            this.btn = a(c.btn);
            this.btn.bind("click", a.proxy(this.visible, this));
            this.input_text = a(c.input_text);
            this.smile = {base: FaceSymbols, vip: FaceVip, safe: FaceSafe};
            this.cells = {base: 9, vip: 3, safe: 4};
            this.isTitle = c.isTitle
        }, insertFace: function (c) {
            if (this.input_text.prop("disabled")) {
                return
            }
            if (this.input_text.val() == this.input_text.attr("title") || this.input_text.hasClass("notice_default")) {
                this.input_text.focus()
            }
            insertFace(this.input_text[0], c)
        }, visible: function (c) {
            c.preventDefault();
            c.stopPropagation();
            if (!this.panel) {
                this.createPanel()
            }
            this.panel.visible()
        }, createPanel: function () {
            var c = this;
            c.panel = {};
            c.panel.box = a("<div>", {"class": "face-pop"}).on("click", "td", function (d) {
                console.log(this);
                c.insertFace("/" + this.title);
                c.panel.iHidden()
            }).appendTo(document.body);
            a.extend(c.panel, {
                vis: 0, isInit: 0, gifInit: function () {
                    this.isInit = 1;
                    var g = a('<div class="face-default"/>').appendTo(c.panel.box);
                    var h = a('<div class="face-vip"/>').appendTo(c.panel.box);
                    var i = a('<div class="face-safe"/>').appendTo(c.panel.box);
                    g.append(this.get_smile_table("base"));
                    if (c.isVip) {
                        h.append(this.get_smile_table("vip"))
                    }
                    if (c.isSafe) {
                        i.append(this.get_smile_table("safe"))
                    }
                    var f = a('<div class="tab"/>').html('<a class="default on" data-type="face-default" title="普通表情"><i></i></a><a class="vip" data-type="face-vip" title="VIP和绿卡专用表情"><i></i></a><a class="safe" data-type="face-safe" title="守护专用表情"><i></i></a>').appendTo(c.panel.box);
                    var j = c.panel.box.find("div.face-default, div.face-vip, div.face-safe"), d = f.find("a");
                    if (!c.haveVip) {
                        d.filter(".vip").css("display", "none")
                    }
                    if (!c.haveSafe) {
                        d.filter(".safe").css("display", "none")
                    }
                    d.click(function (l) {
                        l.preventDefault();
                        var k = a(this).attr("data-type");
                        if (k == "face-vip" && !c.isVip) {
                            Prompt.create({
                                content: "您没有VIP或绿卡，不能使用会员专属表情。<br/>是否现在购买VIP？",
                                btn_sure: {text: "立即购买", link: "/user/shopprop.php", target: "shop"},
                                btn_cancel: {text: "取消"}
                            })
                        } else {
                            if (k == "face-safe" && !c.isSafe) {
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
                                j.css("display", "none");
                                j.filter("." + k).css("display", "block");
                                d.removeClass("on");
                                a(this).addClass("on")
                            }
                        }
                    });
                    this.dev = a.proxy(this._dev, this)
                }, get_smile_table: function (l) {
                    var k = c.smile[l], q = document.createElement("table"), r = c.cells[l], n = q.insertRow(0), s = 0, h = 1;
                    var m = [];
                    for (var d in k) {
                        m.push([d, k[d]])
                    }
                    s = m.length / 1 + m.length % r / 1;
                    for (var j = 0; j < s; j++) {
                        if (j % r == 0 && j != 0) {
                            var n = q.insertRow(Math.floor(j / r))
                        }
                        var g = n.insertCell(j % r);
                        var f = m[j];
                        if (f) {
                            var o = f[1].slice(1);
                            g.title = o;
                            g.innerHTML = '<img alt="' + o + '" src="' + FaceUrl + f[0] + '.gif" />'
                        } else {
                            g.innerHTML = ""
                        }
                    }
                    return q
                }, visible: function () {
                    if (!this.isInit) {
                        this.gifInit()
                    }
                    if (this.vis) {
                        return this.iHidden()
                    }
                    var d = c.btn.offset();
                    this.box.css({left: d.left - 150, top: d.top - 280, opacity: 1, visibility: "visible"});
                    this.vis = 1;
                    a(document).on("click", this.dev)
                }, iHidden: function () {
                    this.box.css({top: -10000, opacity: 0, visibility: "hidden"});
                    this.vis = 0;
                    this.btn = null;
                    a(document).off("click", this.dev);
                    return false
                }, _dev: function (f) {
                    var d = f.target;
                    if (!a.contains(this.box[0], d) && d != this.box[0]) {
                        this.iHidden()
                    }
                }
            })
        }
    })
})();
$LAB.script(JSF.jq).wait(function () {
    Room.Msg.set_getback({
        419: function (c) {
            Room.Army.show_big(c.content)
        }, 532: function (c) {
            Room.Army_rank.setList(c.content)
        }
    });
    var a = jQuery;
    Room.Army = {
        army_list: {}, get_head: function (c) {
            return '<a href="/a/' + c + '" title="军团" target="_blank"><em class="army_level" style="background-image:url(background-image:url(http://vi0.6rooms.com/live/army/' + c + '.png)"><i class="army' + _army.r + '"></i></em></a>'
        }, get_chat_ico: function (d) {
            var c = this.army_list[d];
            if (c && c.f == 1) {
                return this.get_head(d)
            } else {
                return ""
            }
        }, init: function () {
            if (!_puser.uid) {
                return
            }
            var c = this;
            var g = _puser.army.split("-");
            if (g[1] == 1 || g[1] == 2) {
                var f = g[0];
                var d = a('<div class="army-mass-btn" id="army-mass-btn"><a>集结号</a></div>');
                d.insertAfter(a("#userPanel"));
                d.find("a").click(function (h) {
                    h.preventDefault();
                    c.callup(f)
                })
            }
        }, parse_list: function (c) {
            this.army_list = c
        }, show_big: function (g) {
            if (!Room.m.isArmyShow) {
                return
            }
            var d = [];
            a.each(g.list, function (h, j) {
                d.push('<li><a href="" onclick="UserCard_win.getCard(' + j.uid + '); return false"><i class="rich' + j.rank + " rich-" + j.uid + '"></i>' + j.uname + "</a></li>")
            });
            var c = a("<div>").addClass("army_set_list fixpng").html('<div class="army_list"><ul>' + d.join("") + '</ul></div><div class="army_ico"><em class="army_flag_big"><i class="name">' + g.info.name + '</i><i class="num">' + g.info.rank + '</i></em></div><span class="army_state fixpng">集结完毕</span><a title="关闭" href="#" class="close_big"></a>').appendTo(document.body).css({
                display: "block",
                opacity: 0
            });
            c.animate({opacity: 1, left: c.position().left - 16}, 100);
            var f = setTimeout(function () {
                Room.Army.remove_big(c)
            }, 30000);
            c.find("a.close_big").bind("click", function (h) {
                h.preventDefault();
                clearTimeout(f);
                f = null;
                Room.Army.remove_big(c)
            })
        }, remove_big: function (c) {
            c.animate({opacity: 0, left: c.position().left - 16}, 100, function () {
                c.remove();
                c = null
            })
        }, callup: function (d) {
            var c = {
                class_name: "amry-prompt",
                title: "军团集结号",
                content: '<div class="mass"><form action="/army/home/together.php" method="post" id="bigMac"><label>集结目的地：</label><p class="fix"><input name="address" placeholder="请输入集结地址" value="' + location.href.replace(/#.*$/, "") + '" type="text" id="army-mass-url" class="army-url"></p><h4>提示：</h4><p class="hint"><span>发出集结号，所有在房间内的军团成员可以收到集结通知！</span>房间内同时聚集的军团成员超过15人，则表示该军团在该房间处于集结状态；军团集结成功，可获得200点数奖励，每天奖励1次；同时参与集结的军团成员可获得特殊进场座驾1天，每天奖励1次。<br/>系统将于第二天自动加上军团点数并发放座驾。</p></form></div>',
                btn_sure: {text: "发出"},
                btn_cancel: {text: "取消"},
                onSubmit: function () {
                    var f = a("#army-mass-url").val();
                    if (f.indexOf("6.cn") <= 0) {
                        alert("请输入正确的集结地址");
                        return
                    }
                    jQuery.getJSON("/army/home/together.php", {gid: d, url: f}, function (g) {
                        if (g.flag == 1) {
                            alert(g.content);
                            Prompt.close()
                        } else {
                            alert(g.content)
                        }
                    })
                }
            };
            Prompt.create(c)
        }
    };
    Room.Army_rank = {
        init: function () {
            if (page.tpl != "2016") {
                return
            }
            var c = Room.Army_rank;
            if (!Room.user.role) {
                setTimeout(c.init, 500);
                return
            }
            a.ajax({
                dataType: "json", url: "/army/roomArmyRank.php", data: {rid: page.rid}, success: function (d) {
                    if (d.flag == 1) {
                        c.show(d.content)
                    }
                }
            })
        },
        html: {
            btn: '<div class="army-hold-btn" id="army-hold-btn" title="军团护卫" data-tracing="iqg9rubp"><a class="holder"><span>{name}</span><em>{rank}</em></a></div>',
            list: '<div class="army-hold" id="army-hold" data-tracing="iqg9rubp"><div class="arrow"><i>◆</i></div><a class="close-big close" href="#" title="关闭"></a><div class="holder">上周头名：{ahtml}</div><div class="army-rank"><div class="tab"><a class="on" data-class="army-top">本周排行<i class="line"></i></a><a data-class="army-safe">成为护卫军团<i class="line"></i></a></div><div class="army-top"><ul class="title"><li><span class="rank">排名</span><span class="name">军团名称</span><span class="cash"><i></i>贡献财富</span></li></ul><ul class="list scroll-bar"></ul></div><div class="army-safe"><div class="btn"><a class="safe-join"><i></i>我要护卫</a><a class="safe-quit"><i></i>退出护卫</a></div><div class="remind"><p><i></i>军团同时只能护卫1个主播，由军团司令申请；</p><p><i></i>申请完成后，军团即成为主播的护卫军团，进入护卫榜；</p><p><i></i>军团司令可主动更换护卫的主播，每次更换的时间间隔不少于7天；</p><p><i></i>主播可主动撤销军团的护卫资格。</p></div></div></div></div>',
            li: '<li data-gid={gid}><span class="rank"><em class="fixpng t{num}">{num}</em></span><span class="name"><a title="{name}军团" target="_blank" href="/a/{gid}"><em class="army_level" style="background:url(http://vi0.6rooms.com/live/army/{pic}.png)"><i class="army{rank}"></i></em></a></span><span class="cash">{money}</span><a class="remove" title="删除护卫"></a></li>'
        },
        show: function (i) {
            var g = this;
            var f = i.lastWeekArmy;
            var j = i.thisWeekList;
            var c = i.user.owner;
            var h, d;
            if (f.length != 0) {
                h = this.html.btn.replace("{name}", f.name).replace("{rank}", f.rank);
                d = this.html.list.replace("{ahtml}", '<a title="' + f.name + '军团" target="_blank" href="/a/' + f.gid + '"><em class="army_level" style="background:url(http://vi0.6rooms.com/live/army/' + f.bpic + '.png)"><i class="army' + f.rank + '"></i></em></a>')
            } else {
                h = this.html.btn.replace("{name}", "暂无").replace("{rank}", 0);
                d = this.html.list.replace("{ahtml}", '<span style="color:#666">暂无</span>')
            }
            this.box_btn = a(h).insertAfter(a("#synopsis"));
            this.box_btn.fadeIn(500);
            this.box_list = a(d).appendTo("body");
            this.setList(j);
            if (_puser.uid == page.rid) {
                this.box_list.find(".army-top").addClass("army-top-anchor")
            }
            if (c) {
                this.box_list.find("a.safe-join").hide();
                this.box_list.find("a.safe-quit").css("display", "block")
            } else {
                this.box_list.find("a.safe-join").css("display", "block");
                this.box_list.find("a.safe-quit").hide()
            }
            this.events()
        },
        setList: function (f) {
            var d = Room.Army_rank, c = "";
            if (f.length == 0) {
                c = '<li class="none">暂无护卫军团</li>'
            }
            a.each(f, function (g, h) {
                c += d.html.li.replace(/\{num\}/g, g + 1).replace("{name}", h.name).replace(/\{gid\}/g, h.gid).replace("{pic}", h.bpic).replace("{rank}", h.rank).replace("{money}", h.money)
            });
            d.box_list.find("ul.list").html(c)
        },
        events: function () {
            var f = this, c = this.box_btn, d = this.box_list;
            c.find("a").on("click", function (h) {
                h.preventDefault();
                if (d.css("display") == "block") {
                    d.fadeOut(200)
                } else {
                    d.css({
                        left: (c.offset().left + 22) + "px",
                        top: c.offset().top + c.height() + 6 + "px"
                    }).fadeIn(200)
                }
            });
            d.find("a.close").on("click", function (h) {
                h.preventDefault();
                d.fadeOut(200)
            });
            var g = d.find("div.army-top, div.army-safe");
            d.find(".tab a").on("click", function (i) {
                i.preventDefault();
                var h = a(this).data("class");
                a(this).addClass("on").siblings("a").removeClass("on");
                g.hide().filter("." + h).show()
            });
            d.find(".army-safe a").on("click", function (i) {
                i.preventDefault();
                if (!_puser.uid) {
                    Login.toLogin();
                    return
                }
                var h = a(i.target);
                if (h.hasClass("safe-join")) {
                    a.getJSON("/army/convoy/add.php", {rid: page.rid}, function (j) {
                        if (j.flag == "001") {
                            d.find("a.safe-join").hide();
                            d.find("a.safe-quit").css("display", "block");
                            Prompt.alert(j.content)
                        } else {
                            Prompt.alert(j.content)
                        }
                    })
                } else {
                    Prompt.create({
                        btn_sure: {text: "确定"},
                        btn_cancel: {text: "取消"},
                        content: "您确定要退出护卫军团？",
                        onSubmit: function () {
                            Prompt.close();
                            a.getJSON("/army/convoy/quit.php", {rid: page.rid}, function (j) {
                                if (j.flag == "001") {
                                    d.find("a.safe-join").css("display", "block");
                                    d.find("a.safe-quit").hide();
                                    Prompt.alert(j.content)
                                } else {
                                    Prompt.alert(j.content)
                                }
                            })
                        }
                    })
                }
            });
            d.find("ul.list").on("click", "a.remove", function (k) {
                k.preventDefault();
                var i = a(this).parents("li"), j = i.data("gid"), h = i.find("span.name").html();
                Prompt.create({
                    btn_sure: {text: "确定"},
                    btn_cancel: {text: "取消"},
                    content: "您确定要删除 " + h + "的军团护卫？",
                    onSubmit: function () {
                        Prompt.close();
                        a.getJSON("/army/convoy/cancel.php", {gid: j}, function (l) {
                            if (l.flag == "001") {
                                Prompt.alert(l.content)
                            } else {
                                Prompt.alert(l.content)
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