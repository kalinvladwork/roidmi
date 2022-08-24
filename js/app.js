function keeptop() {
    var t = parseInt($("header").css("height")) - $(window).scrollTop();
    t > 0 ? ($(".products-top-bar").css({
        top: t + "px"
    }), $(".products-top-bar").find(".nav-desc-selection").css("border-bottom", "0px solid rgba(130,130,130,0.3)"), $(".top-bg-box").removeClass("opacity-anim")) : ($(".products-top-bar").css({
        top: "0px"
    }), $(".products-top-bar").find(".nav-desc-selection").css("border-bottom", "0px"), $(".top-bg-box").addClass("opacity-anim"))
}
function mylock() {
    event.returnValue = !1
}
function CountDown(t) {
    this.$day = t.$day,
        this.$hour = t.$hour,
        this.$min = t.$min,
        this.$second = t.$second || null,
        this.totalSecond = t.totalSecond,
        this.timeCent = t.timeCent || 1,
        this.endFn = t.endFn || null,
        this.init()
}
!
    function(t) {
        t.fn.extend({
            lightline: function() {
                t(window).scroll(function() {
                    var o = parseInt(t(document).scrollTop()),
                        n = parseInt(t(window).height());
                    t(".animation-box").each(function() {
                        o + n > parseInt(t(this).offset().top) + 200 && t(this).children(".animation-bg").each(function() {
                            t(this).addClass("lightanimate")
                        })
                    }),
                        t(".animation-box2").each(function() {
                            o + n > parseInt(t(this).offset().top) + 130 && t(this).children(".animation-bg").each(function() {
                                t(this).addClass("lightanimate")
                            })
                        })
                })
            },
            footerbottom: function() {
                var o = parseInt(t("footer").offset().top),
                    n = parseInt(t(window).height()),
                    e = parseInt(t("footer").height()),
                    i = parseInt(t("footer").css("margin-top")),
                    s = o + e - n;
                0 > s && t("footer").css({
                    "margin-top": Math.abs(s) + i + "px"
                })
            },
            keepTop: function() {
                t(function() {
                    keeptop()
                }),
                    t(window).scroll(function() {
                        keeptop()
                    })
            },
            tvSystemSilder: function() {
                setInterval(function() {
                        var o = t("#bg-box7 .animate-box .change-box ul");
                        o.animate({
                                marginLeft: "-100%"
                            },
                            1e3,
                            function() {
                                o.children("li").first().appendTo(o),
                                    o.css({
                                        "margin-left": "0px"
                                    })
                            })
                    },
                    3e3)
            },
            stopDrag: function() {
                document.onselectstart = mylock,
                    document.oncontextmenu = mylock,
                    document.ondragstart = mylock
            }
        })
    } (jQuery);;
function select_tab(t) {
    $("ul.side-bar li:eq(" + t + ")").addClass("selected")
}
function check_time(t) {
    return 10 > t ? "0" + t: t
}
function AnimateNum(t) {
    this.obj = t.obj,
        this.target = t.target.toString(),
        this.totalTime = t.totalTime || 1e3,
        this.init()
}
function Accordion(t) {
    this.$item = t.$item,
        this.speed = t.speed || 400,
        this.currentClass = t.currentClass || "",
        this.posiAry = [],
        this.disX = 0,
        this.init().bindEvent()
}
function getCss3Animation() {
    var t = document.createElement("div"),
        e = !1;
    return "oninput" in t && ["", "ms", "webkit"].forEach(function(i) {
        var n = i + (i ? "A": "a") + "nimation";
        n in t.style && (e = !0)
    }),
        e
} !
    function(t) {
        t.fn.extend({
            placeholder: function() {
                return "placeholder" in document.createElement("input") ? this: this.each(function() {
                    var e = t(this),
                        i = e.attr("placeholder");
                    e.val(i).focus(function() {
                        e.val() === i && e.val("").removeClass("placeholder")
                    }).blur(function() {
                            0 === e.val().length && e.val(i).addClass("placeholder")
                        })
                })
            }
        }),
            jQuery(".ipt").placeholder()
    } (jQuery),
    function(t) {
        jQuery(".ips").on("click",
            function(e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    t(this).siblings(".ips-droplist").show()
            }),
            jQuery(".ips-droplist a").on("click",
                function(e) {
                    e.preventDefault(),
                        e.stopPropagation();
                    var i = t(this),
                        n = i.parents(".ips-droplist");
                    console.log(i.text()),
                        n.siblings(".ips").find("span").html(i.text()).removeClass("placeholder"),
                        n.hide()
                }),
            t(document).click(function() {
                0 == t(this).parents(".ips-droplist").length && jQuery(".ips-droplist").hide()
            })
    } (jQuery),
    function(t) {
        jQuery(".choose-unit").on({
            mouseover: function() {
                t(this).addClass("choose-unit-hover"),
                    t(this).attr("action-type") && "editable" == t(this).attr("action-type") && t(this).addClass("choose-unit-editable")
            },
            mouseout: function() {
                t(this).removeClass("choose-unit-hover"),
                    t(this).attr("action-type") && "editable" == t(this).attr("action-type") && t(this).addClass("choose-unit-editable")
            },
            click: function(e) {
                if (e.preventDefault(), e.stopPropagation(), t(this).parent().attr("action-type") && "multi" == t(this).parent().attr("action-type")) {
                    t(this).toggleClass("choose-unit-choosed");
                    var i = t(this).parent().find("input[type=hidden]"),
                        n = t(this).data("value");
                    if (i && "" != n) {
                        if ("" != i.val()) {
                            var s = i.val().split(","),
                                o = [],
                                a = !1,
                                r = 0;
                            for (s.length; length > r; r++) s[r] != n ? o.push[s[r]] : a = !0;
                            var h = o.join(",");
                            a || (h += "," + n),
                                n = h
                        }
                        i.val(n)
                    }
                } else {
                    t(this).addClass("choose-unit-choosed").siblings().removeClass("choose-unit-choosed");
                    var i = t(this).parent().find("input[type=hidden]");
                    i && i.val(t(this).data("value"))
                }
            }
        })
    } (jQuery),
    Number.prototype.formatMoney = function(t, e, i) {
        var n = this,
            t = isNaN(t = Math.abs(t)) ? 2 : t,
            e = void 0 == e ? ".": e,
            i = void 0 == i ? ",": i,
            s = 0 > n ? "-": "",
            o = parseInt(n = Math.abs( + n || 0).toFixed(t)) + "",
            a = (a = o.length) > 3 ? a % 3 : 0;
        return s + (a ? o.substr(0, a) + i: "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + i) + (t ? e + Math.abs(n - o).toFixed(t).slice(2) : "")
    },
    CountDown.prototype = {
        init: function() {
            this.refreshLag = this.$second ? 1e3: 6e4,
                this.totalSecond = this.totalSecond / this.timeCent,
                0 == this.totalSecond && this.endFn && this.endFn(),
                this.getFormatTime(this.totalSecond).refreshTime().upDataTime()
        },
        getFormatTime: function(t) {
            return this.timeInfo = {
                day: t / 86400 | 0,
                hour: t % 86400 / 3600 | 0,
                minutes: t % 3600 / 60 | 0,
                second: t % 60
            },
                this
        },
        upDataTime: function() {
            var t = this;
            return t.timer = setInterval(function() {
                    t.totalSecond -= t.refreshLag / 1e3,
                        t.getFormatTime(t.totalSecond),
                        t.refreshTime(),
                        t.totalSecond <= 0 && (clearInterval(t.timer), t.endFn && t.endFn())
                },
                this.refreshLag),
                this
        },
        refreshTime: function() {
            return this.$day && this.$day.html(check_time(this.timeInfo.day)),
                this.$hour && this.$hour.html(check_time(this.timeInfo.hour)),
                this.$min && this.$min.html(check_time(this.timeInfo.minutes)),
                this.$second && this.$second.html(check_time(Math.max(0, this.timeInfo.second))),
                this
        }
    },
    AnimateNum.prototype = {
        init: function() {
            return this.target ? void this.animation() : !1
        },
        animation: function() {
            var t = this,
                e = this.target.indexOf("."),
                i = 0;
            e >= 0 && (i = this.target.length - e - 1);
            var n = this.target.replace(".", ""),
                s = this.totalTime / 30 | 0,
                o = n / s | 0,
                a = 0,
                r = 0;
            t.timer = setInterval(function() {
                    a++,
                        r += o,
                        t.obj.html((r / Math.pow(10, i)).formatMoney(2, ".", ",")),
                        a >= s && (clearInterval(t.timer), t.obj.html(Number(t.target).formatMoney(2, ".", ",")))
                },
                30)
        }
    },
    Accordion.prototype = {
        init: function() {
            var t = this;
            t.itemLength = t.$item.length;
            for (var e = 0; e < t.itemLength; e++) t.posiAry.push(parseInt(t.$item.eq(e).css("left")));
            return t.disX = t.posiAry[2] - t.posiAry[1],
                t
        },
        bindEvent: function() {
            var t = this;
            t.$item.bind("mouseenter",
                function() {
                    $(this).addClass(t.currentClass).siblings().removeClass(t.currentClass);
                    for (var e = 0; e < t.itemLength; e++) e > $(this).index() ? t.$item.eq(e).stop().animate({
                            left: t.posiAry[e] + "px"
                        },
                        t.speed) : t.$item.eq(e).stop().animate({
                            left: e * t.disX + "px"
                        },
                        t.speed)
                })
        }
    };;
"object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(t) {
            return 10 > t ? "0" + t: t
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(t) {
            return rx_escapable.lastIndex = 0,
                rx_escapable.test(t) ? '"' + t.replace(rx_escapable,
                    function(t) {
                        var e = meta[t];
                        return "string" == typeof e ? e: "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                    }) + '"': '"' + t + '"'
        }
        function str(t, e) {
            var r, n, o, u, f, a = gap,
                i = e[t];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (u = i.length, r = 0; u > r; r += 1) f[r] = str(r, i) || "null";
                        return o = 0 === f.length ? "[]": gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]": "[" + f.join(",") + "]",
                            gap = a,
                            o
                    }
                    if (rep && "object" == typeof rep) for (u = rep.length, r = 0; u > r; r += 1)"string" == typeof rep[r] && (n = rep[r], o = str(n, i), o && f.push(quote(n) + (gap ? ": ": ":") + o));
                    else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i), o && f.push(quote(n) + (gap ? ": ": ":") + o));
                    return o = 0 === f.length ? "{}": gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}": "{" + f.join(",") + "}",
                        gap = a,
                        o
            }
        }
        var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        },
            Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
            JSON.stringify = function(t, e, r) {
                var n;
                if (gap = "", indent = "", "number" == typeof r) for (n = 0; r > n; n += 1) indent += " ";
                else "string" == typeof r && (indent = r);
                if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }),
            "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var r, n, o = t[e];
                    if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n: delete o[r]);
                    return reviver.call(t, e, o)
                }
                var j;
                if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous,
                    function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
                    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"),
                    "function" == typeof reviver ? walk({
                            "": j
                        },
                        "") : j;
                throw new SyntaxError("JSON.parse")
            })
    } ();;

!function(e) {
    "use strict";
    e.fn.extend({
        headerSlider: function() {
            for (var n = e("header .container .nav ul li.select"), t = parseInt(n.css("width")), s = parseInt(n.css("margin-right")), i = parseInt(n.css("margin-left")), a = n.index(), r = i, o = 0; a > o; o++) r += i,
                r += parseInt(e("header .container .nav ul li").eq(o).css("width")),
                r += s;
            e("#slider").css({
                width: t + "px",
                left: r + "px"
            }),
                e("header .container .nav ul li").each(function() {
                    e(this);
                    e(this).on("mouseover",
                        function() {
                            for (var n = parseInt(e(this).css("width")), t = parseInt(e(this).css("margin-right")), s = parseInt(e(this).css("margin-left")), i = e(this).index(), a = s, r = 0; i > r; r++) a += s,
                                a += parseInt(e("header .container .nav ul li").eq(r).css("width")),
                                a += t;
                            e("#slider").animate({
                                    left: a + "px"
                                },
                                100,
                                function() {
                                    e("#slider").css("width", n + "px")
                                })
                        })
                }),
                e("header .container .nav ul").on("mouseleave",
                    function() {
                        e("#slider").animate({
                                left: r + "px"
                            },
                            100,
                            function() {
                                e("#slider").css("width", t + "px")
                            })
                    }),
                e("#online-sev").click(function() {
                    window.open("http://wpa.qq.com/msgrd?v=3&uin=2049737388&site=qq&menu=yes", "睿米在线客服", "top=0,left=0,width=650,height=450,location=yes,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")
                })
        },
        extendHeader: function() {
            e(".nav ul li").mouseenter(function() {
                e(".extend-nav").removeClass("active")
            }),
                e(".nav ul li").eq(1).mouseenter(function() {
                    e(".extend-nav").addClass("active"),
                        e("header").mouseleave(function() {
                            e(".extend-nav").removeClass("active")
                        })
                }),
                e(".nav ul li").eq(1).click(function() {
                    e(".extend-nav").addClass("active"),
                        e("header").mouseleave(function() {
                            e(".extend-nav").removeClass("active")
                        })
                })
        },

    })
} (jQuery),
    $.fn.headerSlider(),
    $.fn.extendHeader();;
function banner(){
    var bn_id = 0;
    var bn_id2= 1;
    var speed33=3000;
    var qhjg = 1;
    var MyMar33;
    $("#banner .d1").hide();
    $("#banner .d1").eq(0).fadeIn("slow");
    if($("#banner .d1").length>1)
    {
        $("#banner_id li").eq(0).addClass("nuw");
        function Marquee33(){
            bn_id2 = bn_id+1;
            if(bn_id2>$("#banner .d1").length-1)
            {
                bn_id2 = 0;
            }
            $("#banner .d1").eq(bn_id).css("z-index","2");
            $("#banner .d1").eq(bn_id2).css("z-index","1");
            $("#banner .d1").eq(bn_id2).show();
            $("#banner .d1").eq(bn_id).fadeOut("slow");
            $("#banner_id li").removeClass("nuw");
            $("#banner_id li").eq(bn_id2).addClass("nuw");
            bn_id=bn_id2;
        };
        MyMar33=setInterval(Marquee33,speed33);
        $("#banner_id li").click(function(){
            var bn_id3 = $("#banner_id li").index(this);
            if(bn_id3!=bn_id&&qhjg==1)
            {
                qhjg = 0;
                $("#banner .d1").eq(bn_id).css("z-index","2");
                $("#banner .d1").eq(bn_id3).css("z-index","1");
                $("#banner .d1").eq(bn_id3).show();
                $("#banner .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
                $("#banner_id li").removeClass("nuw");
                $("#banner_id li").eq(bn_id3).addClass("nuw");
                bn_id=bn_id3;
            }
        })
        $("#banner_id").hover(
            function(){
                clearInterval(MyMar33);
            }
            ,
            function(){
                MyMar33=setInterval(Marquee33,speed33);
            }
        )
    }
    else
    {
        $("#banner_id").hide();
    }
};
function abulmAnimate(){
    this.singleNodeWidth = null;
    this.clearance = null;
    this.clearanceRowNum = null;
    this.clearanceColNum = null;
    this.canvasId = null;
    this.canvasWidth = null;
    this.canvasHeight = null;
    this.animateType = null;
    this.imgURL = null;
    this.replaceTagId = null;
    this.leaveWhite = null;
    var This = this;

    var singlePicX = 0;
    var singlePicY = 0;
    this.Run = function(){
        a();
    }
    //auto
    function a(){
        var c = document.getElementById(This.canvasId);
        if(!This.canvasHeight){
            displayImg();
            console.error("canvasHeight为必要参数");
            return false;
        }
        if(c.tagName!="CANVAS"){
            displayImg();
            console.error("容器不是Canvas");
            return false;
        }
        var ctx= c.getContext('2d');
        if(!ctx){
            displayImg();
            console.error("浏览器不支持Canvas");
            return false;
        }
        var image = new Image();
        image.src= This.imgURL;
        image.onload = function () {
            if(!This.leaveWhite){
                This.leaveWhite = 0;
            }
            //获取到格子数目
            c.width = This.canvasWidth||This.canvasHeight;
            c.height = This.canvasHeight;
            ctx.drawImage(image,This.leaveWhite/2,This.leaveWhite/2, This.canvasHeight-This.leaveWhite, This.canvasHeight-This.leaveWhite);
            ctx.fillStyle="#000";
            ctx.globalAlpha=0.4;
            ctx.fillRect(20,20,This.canvasHeight-40,This.canvasHeight-40);
            SingleGridJump(ctx,image);
        }
    }
    function SingleGridJump(ctx,img){
        if(!This.leaveWhite){
            This.leaveWhite = 0;
        }
        var xyObj = getGridNum(img);
        var i = 0;
        var s = setInterval(function(){
            if(i>20){
                clearInterval(s);
            }else{
                i++;
                ctx.drawImage(img,xyObj.sourceX,xyObj.sourceY,This.singleNodeWidth,This.singleNodeWidth,xyObj.zoomX-i/2+This.leaveWhite/2,xyObj.zoomY-i/2+This.leaveWhite/2,xyObj.zoomGridNowHeight+i,xyObj.zoomGridNowHeight+i);
            }
        },20)
    }
    function getGridNum(img){
        if(!This.leaveWhite){
            This.leaveWhite = 0;
        }
        var rowNum = 0;
        var colNum = 0;
        var gridNum = 0;
        var xyObj =new Object();
        if(This.canvasWidth){
            colNum = (img.width-(This.clearance*This.clearanceRowNum))/This.singleNodeWidth;
            colNum = (img.width-(This.clearance*This.clearanceRowNum))%This.singleNodeWidth>This.singleNodeWidth/2?rownNum+1:rowNum;
            console.log(rowNum);
        }
        rowNum = (img.height-(This.clearance*(This.clearanceRowNum||This.clearanceColNum)))/This.singleNodeWidth;
        rowNum = (img.height-(This.clearance*(This.clearanceRowNum||This.clearanceColNum)))%This.singleNodeWidth>This.singleNodeWidth/2?rowNum+1:rowNum;
        if(colNum==0){
            gridNum = parseInt(rowNum*rowNum);
        }else{
            gridNum = parseInt(colNum*rowNum);
        }
        var randomGrid = randomNum(gridNum);
        var beishu = (This.canvasHeight-This.leaveWhite)/img.height;
        var zoomGridNowHeight = This.singleNodeWidth*beishu;
        var nowClearance = This.clearance*beishu;
        if(colNum==0){
            var row = randomGrid%rowNum==0?parseInt(randomGrid/rowNum):parseInt(randomGrid/rowNum+1);
            var col = randomGrid%rowNum==0?parseInt(rowNum):parseInt(randomGrid%rowNum)+1;
        }
        var zoomX = (col-1)*zoomGridNowHeight+(col-1)*nowClearance;
        var zoomY = (row-1)*zoomGridNowHeight+(row-1)*nowClearance;
        var sourceX = (col-1)*This.singleNodeWidth+(col-1)*This.clearance;
        var sourceY = (row-1)*This.singleNodeWidth+(row-1)*This.clearance;
        xyObj.zoomX = zoomX;
        xyObj.zoomY = zoomY;
        xyObj.sourceX = sourceX;
        xyObj.sourceY = sourceY;
        xyObj.zoomGridNowHeight = zoomGridNowHeight;
        xyObj.randomGrid = randomGrid;
        return xyObj;
    }
    function randomNum(gridNum){
        var times = parseInt(gridNum/10);
        var _NUM = gridNum%10;
        for(var i = 0;i<times;i++){
            _NUM+= Math.floor(Math.random()*10);
        }
        return  _NUM;
    }
    function displayImg(){
        var img = document.getElementById(This.replaceTagId);
        img.style.display="table";
    }
};
function getBrowserInfo(){
    var agent = navigator.userAgent.toLowerCase() ;
    var regStr_ie = /msie [\d.]+;/gi ;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi ;
    var regStr_saf = /safari\/[\d.]+/gi ;
    //IE
    if(agent.indexOf("msie") > 0)
    {
        return 1 ;
    }

    //firefox
    if(agent.indexOf("firefox") > 0)
    {
        return 2 ;
    }

    //Chrome
    if(agent.indexOf("chrome") > 0)
    {
        return 3 ;
    }

    //Safari
    if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
    {
        return 4 ;
    }
}