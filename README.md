(function() {
    var n;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    function q(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    function ba(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }
    function ca(a) {
        return a instanceof Array ? a : ba(q(a))
    }
    var da = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ea;
    if ("function" == typeof Object.setPrototypeOf)
        ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                a: !0
            }
              , ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ja = ea;
    function ka(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja)
            ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.cj = b.prototype
    }
    function la() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    var ma = {
        construct: "Metrika2",
        callbackPostfix: "2",
        version: "14pwap7gbnncs44tf8xglmzmdcdb",
        host: "mc.yandex.ru"
    };
    function na(a, b) {
        return b(a)
    }
    function oa(a) {
        return function(b) {
            return function(c) {
                return a(b, c)
            }
        }
    }
    function pa(a) {
        return function(b) {
            return function(c) {
                return a(c, b)
            }
        }
    }
    var qa = oa(function(a, b) {
        return a === b
    })
      , ra = oa(function(a, b) {
        a(b);
        return b
    })
      , sa = oa(na);
    function u() {}
    var ta = [];
    function ua(a, b) {
        if (!b || "function" !== typeof b)
            return !1;
        try {
            var c = "" + b
        } catch (h) {
            return !1
        }
        var d = c.length;
        if (d > 35 + a.length)
            return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
            f = "[native code]"[f] === c[g] || 7 === f && "-" === c[g] ? f + 1 : 0;
            if (12 === f)
                return !0;
            if (!f && g > e)
                break
        }
        return !1
    }
    function va(a, b) {
        var c = ua(a, b);
        b && !c && ta.push([a, b]);
        return c
    }
    function wa(a, b) {
        return va(b, a) && a
    }
    function xa(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (b[c] === a)
                return c;
        return -1
    }
    var ya;
    function za(a) {
        if (ya)
            return ya;
        var b = !1;
        try {
            b = [].indexOf && 0 === [void 0].indexOf(void 0)
        } catch (d) {}
        var c = a.Array && a.Array.prototype && wa(a.Array.prototype.indexOf, "indexOf");
        return ya = a = b && c ? function(d, e) {
            return c.call(e, d)
        }
        : xa
    }
    var Aa = za(window)
      , Ba = pa(Aa);
    function w(a) {
        return a
    }
    function Ca(a, b) {
        return b
    }
    function Da(a) {
        return !a
    }
    var Ea = wa(Array.from, "from");
    function Fa(a) {
        for (var b = a.length, c = [], d = 0; d < b; d += 1)
            c.push(a[d]);
        return c
    }
    function Ha(a) {
        if (Ea)
            try {
                return Ea(a)
            } catch (b) {}
        return Fa(a)
    }
    function x(a, b) {
        var c = []
          , d = [];
        var e = b ? b : w;
        return function() {
            var f = Ha(arguments)
              , g = e.apply(null, ca(f))
              , h = Aa(g, d);
            if (-1 !== h)
                return c[h];
            f = a.apply(null, ca(f));
            c.push(f);
            d.push(g);
            return f
        }
    }
    var Ia = /\./g;
    function y(a) {
        return "string" === typeof a
    }
    var Ja = wa(String.prototype.indexOf, "indexOf");
    function Ka(a, b) {
        for (var c = 0, d = a.length - b.length, e = 0; e < a.length; e += 1) {
            c = a[e] === b[c] ? c + 1 : 0;
            if (c === b.length)
                return e - b.length + 1;
            if (!c && e > d)
                break
        }
        return -1
    }
    var La = Ja ? function(a, b) {
        return Ja.call(a, b)
    }
    : Ka;
    function Ma(a, b) {
        return La(a, b)
    }
    function Na(a, b) {
        return !(!a || -1 === La(a, b))
    }
    function Oa(a) {
        return "" + a
    }
    function Pa(a) {
        return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Ia, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
    }
    var Qa = qa(null);
    function A(a) {
        return "function" === typeof a
    }
    var B = qa(void 0);
    function C(a) {
        return B(a) || Qa(a)
    }
    function Ra(a) {
        return !Qa(a) && !B(a) && "[object Object]" === Object.prototype.toString.call(a)
    }
    function Sa(a, b, c) {
        b = void 0 === b ? [] : b;
        c = c || {};
        var d = b.length
          , e = a;
        A(e) && (e = "d",
        c[e] = a);
        var f;
        d ? 1 === d ? f = c[e](b[0]) : 2 === d ? f = c[e](b[0], b[1]) : 3 === d ? f = c[e](b[0], b[1], b[2]) : 4 === d && (f = c[e](b[0], b[1], b[2], b[3])) : f = c[e]();
        return f
    }
    var Ta = wa(Function.prototype.bind, "bind");
    function Ua() {
        var a = Ha(arguments);
        a = q(a);
        var b = a.next().value
          , c = a.next().value
          , d = ba(a);
        return function() {
            var e = [].concat(ca(d), ca(Ha(arguments)));
            if (Function.prototype.call)
                return Function.prototype.call.apply(b, [c].concat(ca(e)));
            if (c) {
                for (var f = "_b"; c[f]; )
                    f += "_" + f.length;
                c[f] = b;
                e = c[f] && Sa(f, e, c);
                delete c[f];
                return e
            }
            return Sa(b, e)
        }
    }
    var D = Ta ? function() {
        var a = Ha(arguments)
          , b = q(a);
        a = b.next().value;
        var c = b.next().value;
        b = ba(b);
        return Ta.apply(a, [c].concat(b))
    }
    : Ua;
    function E(a, b) {
        return D.apply(null, [b, null].concat(ca(a)))
    }
    function F(a, b) {
        return D(b, null, a)
    }
    function Va(a, b) {
        return D(b[a], b)
    }
    function Wa(a) {
        return Va("test", a)
    }
    var Xa = wa(Array.prototype.reduce, "reduce");
    function Ya(a, b, c) {
        for (var d = 0, e = c.length; d < e; )
            b = a(b, c[d], d),
            d += 1;
        return b
    }
    var G = Xa ? function(a, b, c) {
        return Xa.call(c, a, b)
    }
    : Ya;
    function Za(a, b) {
        return E([a, b], G)
    }
    function H() {
        var a = Ha(arguments)
          , b = a.shift();
        return function() {
            var c = b.apply(null, arguments);
            return G(na, c, a)
        }
    }
    var $a = oa(E)
      , ab = oa(Va)
      , bb = Object.prototype.hasOwnProperty;
    function I(a, b) {
        return C(a) ? !1 : bb.call(a, b)
    }
    function J(a, b) {
        return a ? G(function(c, d) {
            if (C(c))
                return c;
            try {
                return c[d]
            } catch (e) {}
            return null
        }, a, b.split(".")) : null
    }
    var cb = pa(J)
      , db = cb("length");
    function eb(a) {
        var b = void 0 === b ? {} : b;
        if (!a || 1 > a.length)
            return b;
        G(function(c, d, e) {
            if (e === a.length - 1)
                return c;
            e === a.length - 2 ? c[d] = a[e + 1] : I(c, d) || (c[d] = {});
            return c[d]
        }, b, a);
        return b
    }
    function fb(a, b) {
        var c = J(b, a)
          , d = J(b, "constructor.prototype." + a) || c;
        try {
            if (d && d.apply)
                return function() {
                    return d.apply(b, arguments)
                }
        } catch (e) {
            return c
        }
        return d
    }
    function gb(a, b, c) {
        return c ? a : b
    }
    var hb = E([1, null], gb)
      , ib = E([1, 0], gb)
      , jb = Boolean
      , kb = wa(Array.prototype.filter, "filter");
    function lb(a, b) {
        return Ya(function(c, d, e) {
            a(d, e) && c.push(d);
            return c
        }, [], b)
    }
    var mb = kb ? function(a, b) {
        return kb.call(b, a)
    }
    : lb
      , nb = F(jb, mb)
      , ob = oa(mb)
      , pb = wa(Array.prototype.includes, "includes");
    function qb(a, b) {
        return 1 <= lb(qa(a), b).length
    }
    var K = pb ? function(a, b, c) {
        return pb.call(b, a, c)
    }
    : qb
      , rb = pa(K);
    function sb(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    var tb = wa(Array.isArray, "isArray")
      , L = tb ? function(a) {
        return tb(a)
    }
    : sb;
    function ub(a) {
        return a ? L(a) ? a : Ea ? Ea(a) : "number" === typeof a.length && 0 <= a.length ? Fa(a) : [] : []
    }
    var vb = x(za)
      , wb = cb("0");
    function xb(a) {
        return a.splice(0, a.length)
    }
    var yb = x(function(a) {
        var b = J(a, "navigator") || {};
        a = J(b, "userAgent") || "";
        b = J(b, "vendor") || "";
        return {
            ff: -1 < La(b, "Apple"),
            Yf: a
        }
    });
    function zb(a, b) {
        return -1 !== (J(b, "navigator.userAgent") || "").toLowerCase().search(a)
    }
    var Ab = x(cb("navigator.userAgent"))
      , Bb = /Firefox\/([0-9]+)/i
      , Cb = x(function(a) {
        var b = J(a, "document.documentElement.style")
          , c = J(a, "InstallTrigger");
        a = zb(Bb, a);
        Bb.lastIndex = 0;
        return !(!(b && "MozAppearance"in b) || C(c)) || a
    });
    function Db() {
        var a = Array.prototype.map;
        if (!Cb(window))
            return !0;
        try {
            a.call({
                0: !0,
                length: -Math.pow(2, 32) + 1
            }, function() {
                throw 1;
            })
        } catch (b) {
            return !1
        }
        return !0
    }
    var Eb = wa(Array.prototype.map, "map");
    function Fb(a, b) {
        return G(function(c, d, e) {
            c.push(a(d, e));
            return c
        }, [], b)
    }
    var M = Eb && Db() ? function(a, b) {
        return b && 0 < b.length ? Eb.call(b, a) : []
    }
    : Fb
      , Gb = wa(Array.prototype.flatMap, "flatMap");
    function Hb(a, b) {
        return G(function(c, d, e) {
            d = a(d, e);
            return c.concat(L(d) ? d : [d])
        }, [], b)
    }
    var Ib = Gb ? function(a, b) {
        return Gb.call(b, a)
    }
    : Hb
      , Jb = oa(M)
      , Kb = pa(M)
      , Lb = wa(Array.prototype.some, "some");
    function Mb(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (c in b && a.call(b, b[c], c))
                return !0;
        return !1
    }
    var Nb = Lb ? function(a, b) {
        return Lb.call(b, a)
    }
    : Mb
      , Ob = wa(Array.prototype.every, "every");
    function Pb(a, b) {
        return G(function(c, d, e) {
            return c ? !!a(d, e) : !1
        }, !0, b)
    }
    var Qb = Ob ? function(a, b) {
        return Ob.call(b, a)
    }
    : Pb;
    function Rb(a, b) {
        return a.isFinite(b) && !a.isNaN(b) && "[object Number]" === Object.prototype.toString.call(b)
    }
    function Sb(a) {
        try {
            return parseInt(a, 10)
        } catch (b) {
            return null
        }
    }
    var Tb = pa(parseInt)
      , Ub = Tb(10)
      , Vb = Tb(2);
    function Wb(a, b) {
        return Qa(b) || B(b) || Rb(a, b) || y(b) || !!b === b
    }
    var Xb = wa(Object.keys, "keys");
    function Yb(a) {
        var b = [], c;
        for (c in a)
            I(a, c) && b.push(c);
        return b
    }
    var Zb = wa(Object.entries, "entries");
    function $b(a) {
        return B(a) ? [] : Ya(function(b, c) {
            b.push([c, a[c]]);
            return b
        }, [], Yb(a))
    }
    var ac = Zb ? function(a) {
        return a ? Zb(a) : []
    }
    : $b
      , bc = Xb ? function(a) {
        return Xb(a)
    }
    : Yb
      , cc = wa(Object.values, "values")
      , dc = H($b, F(cb("1"), Fb))
      , ec = cc ? function(a) {
        return cc(a)
    }
    : dc;
    function fc() {
        var a = Ha(arguments)
          , b = q(a);
        a = b.next().value;
        for (b = ba(b); b.length; ) {
            var c = b.shift(), d;
            for (d in c)
                I(c, d) && (a[d] = c[d]);
            I(c, "toString") && (a.toString = c.toString)
        }
        return a
    }
    var N = Object.assign || fc
      , gc = oa(function(a, b) {
        return N({}, a, b)
    })
      , hc = x(H(cb("String.fromCharCode"), F("fromCharCode", va), Da))
      , ic = x(H(Ab, Wa(/ipad|iphone|ipod/i)))
      , jc = x(function(a) {
        return J(a, "navigator.platform") || ""
    })
      , kc = x(function(a) {
        a = yb(a);
        var b = a.Yf;
        return a.ff && !b.match("CriOS")
    })
      , lc = Wa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
      , mc = Wa(/; wv\)/)
      , nc = x(function(a) {
        a = Ab(a);
        return mc(a) || lc(a)
    })
      , oc = /Chrome\/(\d+)\./
      , pc = x(function(a) {
        return (a = (J(a, "navigator.userAgent") || "").match(oc)) && a.length ? 76 <= Ub(a[1]) : !1
    })
      , qc = x(function(a) {
        a = (Ab(a) || "").toLowerCase();
        return Na(a, "android") && Na(a, "mobile")
    })
      , rc = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" ")
      , sc = x(function(a) {
        var b = J(a, "navigator.connection.type");
        if (B(b))
            return null;
        a = vb(a)(b, rc);
        return -1 === a ? b : "" + a
    })
      , tc = x(H(cb("document.addEventListener"), Da))
      , uc = x(function(a) {
        var b = J(a, "navigator") || {};
        return G(function(c, d) {
            return c || J(b, d)
        }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
    })
      , vc = x(function(a) {
        var b = J(a, "navigator") || {};
        a = uc(a);
        y(a) || (a = "",
        b = J(b, "languages.0"),
        y(b) && (a = b));
        return a.toLowerCase().split("-")[0]
    })
      , wc = x(function(a) {
        return (J(a, "top") || a) !== a
    })
      , xc = x(cb("top.contentWindow"))
      , yc = x(function(a) {
        var b = !1;
        try {
            b = a.navigator.javaEnabled()
        } catch (c) {}
        return b
    })
      , zc = x(function(a) {
        var b = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
          , c = J(a, "external");
        c = J(c, "toString") ? "" + c.toString() : "";
        c = -1 !== La(c, "Sequentum");
        var d = J(a, "document.documentElement")
          , e = ["selenium", "webdriver", "driver"];
        return !!(Nb(F(a, J), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Nb(F(J(a, "document"), J), b) || c || d && Nb(D(d.getAttribute, d), e))
    })
      , Ac = x(function(a) {
        return !!(Nb(F(a, J), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Ab(a)) || J(a, "navigator.webdriver") || J(a, "isChrome") && !J(a, "chrome"))
    })
      , Bc = x(function(a) {
        return !(!J(a, "ia_document.shareURL") || !J(a, "ia_document.referrer"))
    });
    function Cc(a) {
        return K("prerender", M(F(J(a, "document"), J), ["webkitVisibilityState", "visibilityState"]))
    }
    var Dc = x(function(a) {
        var b = Ab(a) || ""
          , c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
        c = c ? [+c[1], +c[2]] : [0, 0];
        b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
        return 14 <= (b ? +b[1] : 0) ? !0 : (ic(a) || 10 < c[0] || 10 === c[0] && 13 <= c[1]) && kc(a)
    })
      , Ec = /Edg\/(\d+)\./;
    function Fc(a) {
        return (a = Ab(a)) && (a = a.match(Ec)) && 1 < a.length ? 79 <= Ub(a[1]) : !1
    }
    function Gc(a) {
        return Cb(a) && (a = Ab(a).match(Bb)) && a.length ? 68 <= +a[1] : !1
    }
    var Hc = x(function(a) {
        return Dc(a) || Gc(a) || Fc(a)
    })
      , Ic = ma.construct
      , Kc = ma.host
      , Lc = tc(window)
      , Mc = {
        gg: 24226447,
        ag: 26302566,
        jg: 51533966,
        xi: 65446441,
        La: "https:",
        eb: "1630",
        ec: Ic,
        fg: Lc ? 512 : 2048,
        dg: Lc ? 512 : 2048,
        eg: Lc ? 100 : 400,
        yi: 100,
        hg: "noindex"
    }
      , Nc = qa("1");
    function Oc(a, b, c, d) {
        var e = {};
        return Ra(a) ? a : (e.id = a,
        e.type = c,
        e.defer = d,
        e.params = b,
        e)
    }
    function Pc(a) {
        return G(function(b, c) {
            var d = q(c)
              , e = d.next().value
              , f = d.next().value;
            d = f.Va;
            f = a[f.da];
            b[e] = d ? d(f) : f;
            return b
        }, {}, ac(Qc))
    }
    var O = x(function(a) {
        return a.id + ":" + a.ca
    });
    function Rc(a) {
        a = a.Ya = a.Ya || {};
        var b = a._metrika = a._metrika || {};
        return {
            ra: function(c, d) {
                I(b, c) || (b[c] = d);
                return this
            },
            D: function(c, d) {
                b[c] = d;
                return this
            },
            C: function(c, d) {
                var e = b[c];
                return I(b, c) || B(d) ? e : d
            }
        }
    }
    var Q = x(Rc)
      , Sc = setTimeout;
    function Tc() {}
    function Uc(a, b) {
        return function() {
            a.apply(b, arguments)
        }
    }
    function Vc(a) {
        if (!(this instanceof Vc))
            throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a)
            throw new TypeError("not a function");
        this.Ka = 0;
        this.He = !1;
        this.Qa = void 0;
        this.Ab = [];
        Wc(a, this)
    }
    function Xc(a, b) {
        for (; 3 === a.Ka; )
            a = a.Qa;
        0 === a.Ka ? a.Ab.push(b) : (a.He = !0,
        Vc.Ie(function() {
            var c = 1 === a.Ka ? b.Fh : b.Jh;
            if (null === c)
                (1 === a.Ka ? Yc : Zc)(b.promise, a.Qa);
            else {
                try {
                    var d = c(a.Qa)
                } catch (e) {
                    Zc(b.promise, e);
                    return
                }
                Yc(b.promise, d)
            }
        }))
    }
    function Yc(a, b) {
        try {
            if (b === a)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (b && ("object" === typeof b || "function" === typeof b)) {
                var c = b.then;
                if (b instanceof Vc) {
                    a.Ka = 3;
                    a.Qa = b;
                    $c(a);
                    return
                }
                if ("function" === typeof c) {
                    Wc(Uc(c, b), a);
                    return
                }
            }
            a.Ka = 1;
            a.Qa = b;
            $c(a)
        } catch (d) {
            Zc(a, d)
        }
    }
    function Zc(a, b) {
        a.Ka = 2;
        a.Qa = b;
        $c(a)
    }
    function $c(a) {
        2 === a.Ka && 0 === a.Ab.length && Vc.Ie(function() {
            a.He || Vc.kg(a.Qa)
        });
        for (var b = 0, c = a.Ab.length; b < c; b++)
            Xc(a, a.Ab[b]);
        a.Ab = null
    }
    function ad(a, b, c) {
        this.Fh = "function" === typeof a ? a : null;
        this.Jh = "function" === typeof b ? b : null;
        this.promise = c
    }
    function Wc(a, b) {
        var c = !1;
        try {
            a(function(d) {
                c || (c = !0,
                Yc(b, d))
            }, function(d) {
                c || (c = !0,
                Zc(b, d))
            })
        } catch (d) {
            c || (c = !0,
            Zc(b, d))
        }
    }
    Vc.prototype["catch"] = function(a) {
        return this.then(null, a)
    }
    ;
    Vc.prototype.then = function(a, b) {
        var c = new this.constructor(Tc);
        Xc(this, new ad(a,b,c));
        return c
    }
    ;
    Vc.prototype["finally"] = function(a) {
        var b = this.constructor;
        return this.then(function(c) {
            return b.resolve(a()).then(function() {
                return c
            })
        }, function(c) {
            return b.resolve(a()).then(function() {
                return b.reject(c)
            })
        })
    }
    ;
    Vc.all = function(a) {
        return new Vc(function(b, c) {
            function d(h, k) {
                try {
                    if (k && ("object" === typeof k || "function" === typeof k)) {
                        var l = k.then;
                        if ("function" === typeof l) {
                            l.call(k, function(m) {
                                d(h, m)
                            }, c);
                            return
                        }
                    }
                    e[h] = k;
                    0 === --f && b(e)
                } catch (m) {
                    c(m)
                }
            }
            if (!a || "undefined" === typeof a.length)
                return c(new TypeError("Promise.all accepts an array"));
            var e = Array.prototype.slice.call(a);
            if (0 === e.length)
                return b([]);
            for (var f = e.length, g = 0; g < e.length; g++)
                d(g, e[g])
        }
        )
    }
    ;
    Vc.resolve = function(a) {
        return a && "object" === typeof a && a.constructor === Vc ? a : new Vc(function(b) {
            b(a)
        }
        )
    }
    ;
    Vc.reject = function(a) {
        return new Vc(function(b, c) {
            c(a)
        }
        )
    }
    ;
    Vc.race = function(a) {
        return new Vc(function(b, c) {
            if (!a || "undefined" === typeof a.length)
                return c(new TypeError("Promise.race accepts an array"));
            for (var d = 0, e = a.length; d < e; d++)
                Vc.resolve(a[d]).then(b, c)
        }
        )
    }
    ;
    Vc.Ie = "function" === typeof setImmediate && function(a) {
        setImmediate(a)
    }
    || function(a) {
        Sc(a, 0)
    }
    ;
    Vc.kg = function(a) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
    }
    ;
    var R = window.Promise
      , bd = wa(R, "Promise")
      , cd = wa(J(R, "resolve"), "resolve")
      , dd = wa(J(R, "reject"), "reject")
      , ed = wa(J(R, "all"), "all");
    if (bd && cd && dd && ed) {
        var fd = function(a) {
            return new Promise(a)
        };
        fd.resolve = D(cd, R);
        fd.reject = D(dd, R);
        fd.all = D(ed, R);
        R = fd
    } else
        R = Vc;
    var gd = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], hd;
    function id(a) {
        this.message = a
    }
    var jd = function(a) {
        return function(b, c) {
            c = void 0 === c ? !1 : c;
            if (hd)
                var d = new hd(b);
            else
                va("Error", a.Error) ? (hd = a.Error,
                d = new a.Error(b)) : (hd = id,
                d = new hd(b));
            c && (d.unk = !0);
            return d
        }
    }(window);
    function kd(a) {
        return jd("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
    }
    var ld = Wa(RegExp("^http."));
    function md(a) {
        throw a;
    }
    function nd(a, b) {
        for (var c = "", d = 0; d < b.length; d += 1)
            c += "" + (d ? a : "") + b[d];
        return c
    }
    var od = wa(Array.prototype.join, "join")
      , S = od ? function(a, b) {
        return od.call(b, a)
    }
    : nd
      , pd = oa(S)
      , qd = x(function(a) {
        a = !(!a.addEventListener || !a.removeEventListener);
        return {
            Zh: a,
            F: a ? "addEventListener" : "attachEvent",
            ga: a ? "removeEventListener" : "detachEvent"
        }
    });
    function rd(a, b, c, d, e, f) {
        a = qd(a);
        var g = a.F
          , h = a.ga;
        f = f ? h : g;
        if (b[f])
            if (a.Zh)
                if (e)
                    b[f](c, d, e);
                else
                    b[f](c, d);
            else
                b[f]("on" + c, d)
    }
    var sd = x(function(a) {
        var b = !1;
        if (!a.addEventListener)
            return b;
        try {
            var c = Object.defineProperty({}, "passive", {
                get: function() {
                    b = !0;
                    return 1
                }
            });
            a.addEventListener("test", u, c)
        } catch (d) {}
        return b
    })
      , td = oa(function(a, b) {
        if (null !== b)
            return a ? N({
                capture: !0,
                passive: !0
            }, b || {}) : !!b
    })
      , ud = x(function(a) {
        var b = sd(a)
          , c = td(b)
          , d = {};
        return N(d, {
            F: function(e, f, g, h) {
                M(function(k) {
                    var l = c(h);
                    rd(a, e, k, g, l, !1)
                }, f);
                return D(d.Wb, d, e, f, g, h)
            },
            Wb: function(e, f, g, h) {
                M(function(k) {
                    var l = c(h);
                    rd(a, e, k, g, l, !0)
                }, f)
            }
        })
    });
    function vd(a) {
        return J(a, "performance") || J(a, "webkitPerformance")
    }
    function wd(a) {
        a = vd(a);
        var b = J(a, "timing.navigationStart")
          , c = J(a, "now");
        c && (c = D(c, a));
        return [b, c]
    }
    function xd(a, b) {
        var c = q(b || wd(a))
          , d = c.next().value;
        c = c.next().value;
        return !isNaN(d) && A(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
    }
    function yd(a) {
        return (10 > a ? "0" : "") + a
    }
    function zd(a) {
        var b = ud(a)
          , c = wd(a)
          , d = {
            l: a,
            Ae: 0,
            Hc: c,
            oh: xd(a, c)
        }
          , e = q(c);
        c = e.next().value;
        e = e.next().value;
        c && e || b.F(a, ["beforeunload", "unload"], function() {
            0 === d.Ae && (d.Ae = xd(a, d.Hc))
        });
        return sa(d)
    }
    function Ad(a) {
        var b = a.Ae;
        return 0 !== b ? b : xd(a.l, a.Hc)
    }
    function Bd(a) {
        return Math.floor(Ad(a) / 1E3 / 60)
    }
    function Cd(a) {
        return Math.round(Ad(a) / 1E3)
    }
    function Dd(a) {
        var b = q(a.Hc)
          , c = b.next().value;
        b = b.next().value;
        a = c && b ? b() : Ad(a) - a.oh;
        return Math.round(a)
    }
    var Ed = x(zd);
    function Fd(a) {
        a = Ed(a);
        return Math.round(a(Dd) / 50)
    }
    function Gd(a) {
        return a.te || a.Ta.length <= a.xa
    }
    function Hd(a) {
        a.xa = a.Ta.length
    }
    function Id(a) {
        a.te = !0
    }
    function Jd(a) {
        a.te = !1
    }
    function Kd(a) {
        Gd(a) && md(jd("i"));
        var b = a.Nd(a.Ta[a.xa]);
        a.xa += 1;
        return b
    }
    var Ld = oa(function(a, b) {
        for (var c = []; !Gd(b); ) {
            var d = Kd(b);
            a(d, function(e) {
                return e(b)
            });
            c.push(d)
        }
        return c
    });
    function Md(a) {
        return function(b) {
            for (var c; b.Ta.length && !Gd(b); )
                c = b.Ta.pop(),
                c = b.Nd(c, b.Ta),
                a(b);
            return c
        }
    }
    function Nd(a, b) {
        return function(c) {
            var d = Ed(a)
              , e = d(Ad);
            return Md(function(f) {
                d(Ad) - e >= b && Id(f)
            })(c)
        }
    }
    function Od(a, b) {
        return function(c) {
            var d = Ed(a)
              , e = d(Ad);
            return Ld(function(f, g) {
                d(Ad) - e >= b && g(Id)
            })(c)
        }
    }
    function Qd(a) {
        for (var b = !0, c = {}; !Gd(a) && b; c = {
            Vd: void 0
        })
            b = !1,
            c.Vd = function() {
                b = !0;
                a.xa += 1
            }
            ,
            a.Nd(a.Ta[a.xa], function(d) {
                return function() {
                    (0,
                    d.Vd)()
                }
            }(c)),
            b || (a.xa += 1,
            c.Vd = F(a, Qd))
    }
    function Rd(a, b) {
        return sa({
            Ta: a,
            Nd: b || w,
            te: !1,
            xa: 0
        })
    }
    function Sd(a, b, c) {
        c = void 0 === c ? !1 : c;
        return new R(function(d, e) {
            function f(k, l) {
                l();
                d()
            }
            var g = a.slice();
            g.push({
                R: f,
                Ca: f
            });
            var h = Rd(g, function(k, l) {
                var m = c ? k.R : k.Ca;
                if (m)
                    try {
                        m(b, l)
                    } catch (p) {
                        h(Hd),
                        e(p)
                    }
                else
                    l()
            });
            h(Qd)
        }
        )
    }
    function Td(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
        a = S("", mb(function(b) {
            return 55296 >= b.charCodeAt(0)
        }, a.split("")));
        return encodeURIComponent(a)
    }
    function Ud(a) {
        var b = "";
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    }
    function Vd(a) {
        return a ? H(Jb(function(b) {
            var c = q(b.split("="));
            b = c.next().value;
            c = c.next().value;
            return [b, C(c) ? void 0 : Ud(c)]
        }), Za(function(b, c) {
            var d = q(c)
              , e = d.next().value;
            d = d.next().value;
            b[e] = d;
            return b
        }, {}))(a.split("&")) : {}
    }
    function Wd(a) {
        return a ? H(ac, Za(function(b, c) {
            var d = q(c)
              , e = d.next().value;
            d = d.next().value;
            B(d) || C(d) || b.push(e + "=" + Td(d));
            return b
        }, []), pd("&"))(a) : ""
    }
    function Xd(a, b, c) {
        var d = B(c);
        B(b) && d ? (d = 1,
        b = 1073741824) : d ? d = 1 : (d = b,
        b = c);
        return a.Math.floor(a.Math.random() * (b - d)) + d
    }
    function Yd(a, b, c) {
        return function() {
            var d = Q(arguments[0])
              , e = c ? "global" : "m1630"
              , f = d.C(e, {})
              , g = J(f, a);
            g || (g = x(b),
            f[a] = g,
            d.D(e, f));
            return g.apply(null, arguments)
        }
    }
    var Zd = rb([26812653])
      , $d = x(H(cb("id"), Zd), O)
      , ae = "hash host hostname href pathname port protocol search".split(" ");
    function T(a) {
        return G(function(b, c) {
            var d = J(a, "location." + c);
            b[c] = d ? "" + d : "";
            return b
        }, {}, ae)
    }
    var be = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" ")
      , ce = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/;
    function de(a) {
        if (a = a.match(ce)) {
            var b = q(a);
            b.next();
            a = b.next().value;
            if (b = b.next().value)
                return K(b, be) ? b : !1;
            if (a)
                return be[0]
        }
        return !1
    }
    var ee = x(function(a) {
        return (a ? a.replace(/^www\./, "") : "").toLowerCase()
    })
      , fe = x(function(a) {
        a = T(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(ce));
        return b
    })
      , ge = H(T, cb("protocol"), qa("https:"))
      , he = x(function(a) {
        return pc(a) && ge(a) ? "SameSite=None;Secure;" : ""
    })
      , ie = /^\s+|\s+$/g
      , je = wa(String.prototype.trim, "trim");
    function ke(a, b) {
        if (a) {
            var c = je ? je.call(a) : ("" + a).replace(ie, "");
            return b && c.length > b ? c.substring(0, b) : c
        }
        return ""
    }
    var le = oa(function(a, b) {
        return b.replace(a, "")
    })
      , me = le(/\s/g)
      , ne = le(/\D/g)
      , oe = le(/\d/g)
      , pe = ["metrika_enabled"]
      , qe = [];
    function re(a, b) {
        var c = se;
        return !qe.length || K(b, pe) ? !0 : G(function(d, e) {
            return d && e(a, c, b)
        }, !0, qe)
    }
    function te(a) {
        try {
            var b = a.document.cookie;
            if (!C(b)) {
                var c = {};
                M(function(d) {
                    var e = q(d.split("="));
                    d = e.next().value;
                    e = e.next().value;
                    c[ke(d)] = ke(Ud(e))
                }, (b || "").split(";"));
                return c
            }
        } catch (d) {}
        return null
    }
    var ue = Yd("gsc", te);
    function se(a, b) {
        var c = ue(a);
        return c ? c[b] || null : null
    }
    var ve = /:\d+$/;
    function we(a, b, c, d, e, f, g) {
        g = void 0 === g ? !1 : g;
        if (re(a, b)) {
            var h = b + "=" + encodeURIComponent(c) + ";";
            h += "" + he(a);
            if (d) {
                var k = new Date;
                k.setTime(k.getTime() + 6E4 * d);
                h += "expires=" + k.toUTCString() + ";"
            }
            e && (d = e.replace(ve, ""),
            h += "domain=" + d + ";");
            try {
                a.document.cookie = h + ("path=" + (f || "/")),
                g || (ue(a)[b] = c)
            } catch (l) {}
        }
    }
    function xe(a, b) {
        we(a, "metrika_enabled", "1", 0, b, void 0, !0);
        var c = te(a);
        (c = c && c.metrika_enabled) && we(a, "metrika_enabled", "", -100, b, void 0, !0);
        return !!c
    }
    var ye = x(function(a) {
        var b = (T(a).host || "").split(".");
        return 1 === b.length ? b[0] : G(function(c, d, e) {
            e += 1;
            2 <= e && !c && (e = S(".", b.slice(-e)),
            xe(a, e) && (c = e));
            return c
        }, "", b)
    });
    function ze(a, b, c) {
        b = void 0 === b ? "_ym_" : b;
        c = void 0 === c ? "" : c;
        var d = ye(a)
          , e = 1 === (d || "").split(".").length ? d : "." + d
          , f = c ? "_" + c : "";
        return {
            kc: function(g, h, k) {
                we(a, "" + b + g + f, "", -100, h || e, k, !1);
                return this
            },
            C: function(g) {
                return se(a, "" + b + g + f)
            },
            D: function(g, h, k, l, m) {
                we(a, "" + b + g + f, h, k, l || e, m);
                return this
            }
        }
    }
    var Ae = x(ze)
      , Be = x(function(a) {
        var b = Ae(a)
          , c = "1" === b.C("debug")
          , d = -1 < Ma(T(a).href, "_ym_debug=1") || -1 < Ma(T(a).href, "_ym_debug=2")
          , e = a._ym_debug;
        !e && !d || c || (a = T(a),
        b.D("debug", "1", void 0, a.host));
        return !!(c || e || d)
    });
    function Ce() {
        return {}
    }
    function De() {
        return []
    }
    var Ee = Yd("debuggerEvents", De, !0);
    function Fe(a, b) {
        if (Be(a)) {
            var c = b.counterKey;
            if (c) {
                var d = q(c.split(":"));
                c = d.next().value;
                d = d.next().value;
                c = Zd(Sb(c));
                if ("1" === d || c)
                    return
            }
            c = Ee(a);
            1E3 === c.length && c.shift();
            c.push(b)
        }
    }
    function Ge(a, b, c) {
        var d = Xd(a)
          , e = c.ea
          , f = c.ba
          , g = c.$a
          , h = c.ab;
        c = c.Vc;
        var k = {}
          , l = {}
          , m = {};
        Fe(a, (m.name = "request",
        m.data = (l.url = b,
        l.requestId = d,
        l.senderParams = (k.rBody = f,
        k.debugStack = e,
        k.rHeaders = g,
        k.rQuery = h,
        k.verb = c,
        k),
        l),
        m));
        return d
    }
    var He = wa(Array.prototype.find, "find");
    function Ie(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (a.call(b, b[c], c))
                return b[c]
    }
    var Je = He ? function(a, b) {
        return He.call(b, a)
    }
    : Ie
      , Ke = oa(function(a, b) {
        var c = b || {};
        return {
            l: F(c, w),
            C: function(d, e) {
                var f = c[d];
                return B(f) && !B(e) ? e : f
            },
            D: function(d, e) {
                c[d] = e;
                return this
            },
            Sb: function(d, e) {
                return "" === e || C(e) ? this : this.D(d, e)
            },
            Aa: F(c, a)
        }
    })
      , Le = Ke(function(a) {
        var b = "";
        a = G(function(c, d) {
            var e = q(d)
              , f = e.next().value;
            e = e.next().value;
            e = "" + f + ":" + e;
            "t" === f ? b = e : c.push(e);
            return c
        }, [], ac(a));
        b && a.push(b);
        return S(":", a)
    });
    function Me(a, b, c) {
        var d = N({}, b.H);
        a = Ed(a);
        b.K && (d["browser-info"] = Le(b.K.l()).D("st", a(Cd)).Aa());
        !d.t && (b = b.Ha) && (b.D("ti", c),
        d.t = b.Aa());
        return d
    }
    function Ne(a, b, c, d, e, f) {
        e = void 0 === e ? 0 : e;
        f = void 0 === f ? 0 : f;
        var g = N({
            ea: []
        }, d.N)
          , h = q(b[f])
          , k = h.next().value;
        h = h.next().value;
        var l = c[e];
        if ((!g.$a || !g.$a["Content-Type"]) && g.ba) {
            var m = {};
            g.$a = N({}, g.$a, (m["Content-Type"] = "application/x-www-form-urlencoded",
            m));
            g.ba = "site-info=" + Td(g.ba)
        }
        g.Vc = g.ba ? "POST" : "GET";
        g.ab = Me(a, d, k);
        g.qa = (d.Ja || {}).qa;
        g.ea.push(k);
        N(d.N, g);
        k = "" + l + (d.Jc && d.Jc.Ch ? "/1" : "");
        var p = 0;
        p = Ge(a, k, g);
        return h(k, g).then(function(r) {
            var t = p
              , v = {}
              , z = {};
            Fe(a, (z.name = "requestSuccess",
            z.data = (v.body = r,
            v.requestId = t,
            v),
            z));
            return {
                Ga: r,
                Ce: e
            }
        })["catch"](function(r) {
            var t = p
              , v = {}
              , z = {};
            Fe(a, (z.name = "requestFail",
            z.data = (v.error = r,
            v.requestId = t,
            v),
            z));
            t = f + 1 >= b.length;
            v = e + 1 >= c.length;
            t && v && md(r);
            return Ne(a, b, c, d, !v && t ? e + 1 : e, t ? 0 : f + 1)
        })
    }
    function Oe(a, b) {
        return function(c, d) {
            return Ne(a, b, d, c)
        }
    }
    function Pe(a, b) {
        M(H(w, Va("push", a)), b);
        return a
    }
    function Qe(a, b) {
        return b ? a(b) : a()
    }
    var Re = H(w, Qe)
      , Se = {
        id: "id",
        Ee: "ut",
        ca: "type",
        Rd: "ldc",
        Ua: "nck",
        rc: "url",
        Yg: "referrer"
    }
      , Te = /^\d+$/
      , Ue = {
        id: function(a) {
            a = "" + (a || "0");
            Te.test(a) || (a = "0");
            try {
                var b = Ub(a)
            } catch (c) {
                b = 0
            }
            return b
        },
        ca: function(a) {
            return "" + (a || 0 === a ? a : "0")
        },
        Ua: jb,
        Ee: jb
    };
    Se.jd = "defer";
    Ue.jd = jb;
    Se.O = "params";
    Ue.O = function(a) {
        return Ra(a) || L(a) ? a : null
    }
    ;
    Se.De = "userParams";
    Se.Wf = "triggerEvent";
    Ue.Wf = jb;
    Se.Hf = "sendTitle";
    Ue.Hf = function(a) {
        return !!a || B(a)
    }
    ;
    Se.ye = "trackHash";
    Ue.ye = jb;
    Se.Vf = "trackLinks";
    Se.Lg = "enableAll";
    var Qc = G(function(a, b) {
        var c = q(b)
          , d = c.next().value;
        c = c.next().value;
        a[d] = {
            da: c,
            Va: Ue[d]
        };
        return a
    }, {}, ac(Se));
    function Ve(a) {
        N(Qc, a)
    }
    function We(a) {
        return G(function(b, c) {
            var d = q(c)
              , e = d.next().value;
            d = d.next().value;
            b[Qc[e].da] = d;
            return b
        }, {}, ac(a))
    }
    function Xe(a, b, c) {
        for (var d = [b, c], e = -1E4, f = 0; f < a.length; f += 1) {
            var g = q(a[f])
              , h = g.next().value;
            g = g.next().value;
            if (c === g && h === b)
                return;
            if (c < g && c >= e) {
                a.splice(f, 0, d);
                return
            }
            e = g
        }
        a.push(d)
    }
    function Ye(a, b, c, d) {
        a[b] || (a[b] = []);
        c && !C(d) && Xe(a[b], c, d)
    }
    var Ze = {}
      , $e = (Ze.w = [[function(a, b) {
        return {
            R: function(c, d) {
                var e = c.H
                  , f = {};
                e = (f["page-url"] = e && e["page-url"] || "",
                f.charset = "utf-8",
                f);
                "0" !== b.ca && (e["cnt-class"] = b.ca);
                c.K || (c.K = Le());
                f = c.K;
                e = {
                    Ja: {
                        qa: "watch/" + b.id
                    },
                    N: N(void 0 === c.N ? {} : c.N, {
                        cb: !!f.C("pv") && !f.C("ar") && !f.C("wh")
                    }),
                    H: N(c.H || {}, e)
                };
                N(c, e);
                d()
            }
        }
    }
    , 1]],
    Ze)
      , af = F($e, Ye);
    function bf(a, b, c) {
        var d = Oe(a, b);
        return function(e) {
            return Sd(c, e, !0).then(function() {
                var f = e.Ja || {}
                  , g = void 0 === f.nh ? "" : f.nh
                  , h = void 0 === f.qa ? "" : f.qa;
                f = M(function(k) {
                    return Mc.La + "//" + ("" + g + k || Kc) + "/" + h
                }, void 0 === f.bf ? [Kc] : f.bf);
                return d(e, f)
            }).then(function(f) {
                var g = f.Ga;
                f = f.Ce;
                e.Uh = g;
                e.Wi = f;
                return Sd(c, e).then(F(g, w))
            })
        }
    }
    function cf(a) {
        return function(b, c, d) {
            return function(e, f) {
                var g = M(H(wb, $a([b, f]), Qe), $e[a] || []);
                g = Pe(g, d);
                return bf(b, c, g)(e)
            }
        }
    }
    var df = cf("w")
      , ef = ["webkitvisibilitychange", "visibilitychange"];
    function ff(a) {
        return {
            R: function(b, c) {
                var d = a.document
                  , e = b.K;
                if (e && Cc(a)) {
                    var f = ud(a)
                      , g = function(h) {
                        Cc(a) || (f.Wb(d, ef, g),
                        c());
                        return h
                    };
                    f.F(d, ef, g);
                    e.D("pr", "1")
                } else
                    c()
            }
        }
    }
    function hf(a) {
        var b = "";
        L(a) ? b = S(".", a) : y(a) && (b = a);
        return jd("err.kn(" + Mc.eb + ")" + b)
    }
    function jf() {
        var a = Ha(arguments);
        md(hf(a))
    }
    var kf = Wa(RegExp("^err.kn"))
      , lf = [];
    function mf(a, b, c) {
        var d = "u.a.e"
          , e = "";
        c && ("object" === typeof c ? (c.unk && md(c),
        d = c.message,
        e = "string" === typeof c.stack && c.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + c);
        kf(d) || Nb(F(d, Na), gd) || ld(d) && .1 <= a.Math.random() || M(H(w, $a(["jserrs", d, b, e]), Qe), lf)
    }
    function U(a, b, c, d, e) {
        var f = c || md;
        return function() {
            var g = d;
            try {
                g = f.apply(e || null, arguments)
            } catch (h) {
                mf(a, b, h)
            }
            return g
        }
    }
    function V(a, b, c) {
        return function() {
            return U(arguments[0], a, b, c).apply(this, arguments)
        }
    }
    var nf = Ke(function(a) {
        a = ac(a);
        return S("", M(function(b) {
            var c = q(b);
            b = c.next().value;
            c = c.next().value;
            return Qa(c) ? "" : b + "(" + c + ")"
        }, a))
    });
    function of(a, b, c) {
        c = void 0 === c ? null : c;
        a.Ha || (a.Ha = nf());
        b && a.Ha.Sb(b, c);
        return a.Ha
    }
    var pf = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" ")
      , qf = []
      , rf = /^\s*(data|javascript):/i
      , sf = new RegExp(S("", ["\\.(" + S("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i")
      , tf = {}
      , uf = (tf.hit = "h",
    tf.params = "p",
    tf.reachGoal = "g",
    tf.userParams = "up",
    tf.trackHash = "th",
    tf.accurateTrackBounce = "atb",
    tf.notBounce = "nb",
    tf.addFileExtension = "fe",
    tf.extLink = "el",
    tf.file = "fc",
    tf.trackLinks = "tl",
    tf.destruct = "d",
    tf.setUserID = "ui",
    tf.getClientID = "ci",
    tf.clickmap = "cm",
    tf.enableAll = "ea",
    tf)
      , vf = H(O, x(function() {
        var a = 0;
        return function() {
            return a += 1
        }
    }), Qe)
      , wf = {
        mc: function(a) {
            a = Rc(a).C("mt", {});
            a = ac(a);
            return a.length ? G(function(b, c, d) {
                var e = q(c);
                c = e.next().value;
                e = e.next().value;
                return "" + b + (d ? "-" : "") + c + "-" + e
            }, "", a) : null
        },
        clc: function(a) {
            var b = Q(a).C("cls", {
                dc: 0,
                x: 0,
                y: 0
            })
              , c = b.dc
              , d = b.x;
            b = b.y;
            return c ? c + "-" + a.Math.floor(d / c) + "-" + a.Math.floor(b / c) : c + "-" + d + "-" + b
        },
        rqnt: function(a, b, c) {
            a = c.H;
            return !a || a.nohit ? null : vf(b)
        }
    };
    function xf(a, b) {
        if (!b)
            return null;
        try {
            return a.JSON.parse(b)
        } catch (c) {
            return null
        }
    }
    function yf(a, b) {
        try {
            return a.JSON.stringify(b, null, void 0)
        } catch (c) {
            return null
        }
    }
    function zf(a) {
        try {
            return a.localStorage
        } catch (b) {}
        return null
    }
    function Af(a, b) {
        var c = zf(a);
        try {
            c.removeItem(b)
        } catch (d) {}
    }
    function Bf(a, b) {
        var c = zf(a);
        try {
            return xf(a, c.getItem(b))
        } catch (d) {}
        return null
    }
    function Cf(a, b, c) {
        var d = zf(a);
        a = yf(a, c);
        if (!Qa(a))
            try {
                d.setItem(b, a)
            } catch (e) {}
    }
    var Df = x(function(a) {
        Cf(a, "_ymBRC", "1");
        var b = "1" !== Bf(a, "_ymBRC");
        b || Af(a, "_ymBRC");
        return b
    });
    function Ef(a, b, c) {
        var d = "" + (void 0 === c ? "_ym" : c) + (void 0 === b ? "" : b);
        d && (d += "_");
        return {
            Jd: Df(a),
            C: function(e, f) {
                var g = Bf(a, "" + d + e);
                return Qa(g) && !B(f) ? f : g
            },
            D: function(e, f) {
                Cf(a, "" + d + e, f);
                return this
            },
            kc: function(e) {
                Af(a, "" + d + e);
                return this
            }
        }
    }
    var Ff = x(Ef)
      , Gf = x(Ef, function(a, b, c) {
        return "" + b + c
    });
    function Hf(a) {
        if (C(a))
            return !1;
        a = a.nodeType;
        return 3 === a || 8 === a
    }
    function If(a) {
        return a ? a.innerText || "" : ""
    }
    var Jf = x(cb("document.documentElement"))
      , Kf = x(function(a) {
        a = J(a, "document") || {};
        return ("" + (a.characterSet || a.charset || "")).toLowerCase()
    })
      , Lf = x(H(cb("document"), F("createElement", fb)));
    function Mf(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a)
    }
    function Nf(a) {
        var b;
        try {
            if (b = a.target || a.srcElement)
                !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== document && (b = null)
        } catch (c) {}
        return b
    }
    function Of(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(b.className)
        } catch (c) {
            return !1
        }
    }
    var Pf = x(function(a) {
        var b = J(a, "Element.prototype");
        return b ? (a = Je(function(c) {
            var d = b[c];
            return !!d && va(c, d)
        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? b[a] : null : null
    });
    function Qf(a) {
        a = J(a, "document");
        try {
            return a.getElementsByTagName("body")[0]
        } catch (b) {
            return null
        }
    }
    function Rf(a) {
        var b = J(a, "document") || {}
          , c = b.documentElement;
        return "CSS1Compat" === b.compatMode ? c : Qf(a) || c
    }
    function Sf(a) {
        var b = J(a, "visualViewport.width")
          , c = J(a, "visualViewport.height");
        a = J(a, "visualViewport.scale");
        return C(b) || C(c) ? null : [Math.floor(b), Math.floor(c), a]
    }
    function Tf(a) {
        var b = Sf(a);
        if (b) {
            var c = q(b);
            b = c.next().value;
            var d = c.next().value;
            c = c.next().value;
            return [a.Math.round(b * c), a.Math.round(d * c)]
        }
        b = Rf(a);
        return [J(b, "clientWidth") || a.innerWidth, J(b, "clientHeight") || a.innerHeight]
    }
    function Uf(a) {
        var b = Qf(a)
          , c = J(a, "document");
        return {
            x: a.pageXOffset || c.documentElement && c.documentElement.scrollLeft || b && b.scrollLeft || 0,
            y: a.pageYOffset || c.documentElement && c.documentElement.scrollTop || b && b.scrollTop || 0
        }
    }
    function Vf(a) {
        try {
            return a.getBoundingClientRect && a.getBoundingClientRect()
        } catch (b) {
            return a = b,
            "object" === typeof a && null !== a && 16389 === (a.nf && a.nf & 65535) ? {
                top: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
                right: 0
            } : null
        }
    }
    function Wf(a, b, c) {
        c = fb("dispatchEvent", c || a.document);
        var d = null
          , e = J(a, "Event.prototype.constructor");
        if (e && (va("(Event|Object|constructor)", e) || tc(a) && "[object Event]" === "" + e))
            try {
                d = new a.Event(b)
            } catch (f) {
                if ((a = fb("createEvent", J(a, "document"))) && A(a)) {
                    try {
                        d = a(b)
                    } catch (g) {}
                    d && d.initEvent && d.initEvent(b, !1, !1)
                }
            }
        d && c(d)
    }
    function Xf(a, b) {
        var c = a.document.getElementsByTagName("form");
        return za(a)(b, ub(c))
    }
    function Yf(a) {
        if (a)
            try {
                var b = a.nodeName;
                if (y(b))
                    return b;
                b = a.tagName;
                if (y(b))
                    return b
            } catch (c) {}
    }
    var Zf = qa("INPUT")
      , $f = H(Yf, Zf)
      , ag = qa("TEXTAREA")
      , bg = H(Yf, ag)
      , cg = qa("SELECT")
      , dg = H(Yf, cg)
      , eg = H(cb("type"), Wa(/^(checkbox|radio)$/))
      , fg = H(Yf, Wa(/^INPUT|SELECT|TEXTAREA$/))
      , gg = H(Yf, Wa(/^INPUT|SELECT|TEXTAREA|BUTTON$/))
      , hg = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" ")
      , ig = ["submit", "image", "hidden"];
    function jg(a) {
        return $f(a) && !Nb(qa(a.type), ig) ? eg(a) ? !a.checked : !a.value : bg(a) ? !a.value : dg(a) ? 0 > a.selectedIndex : !0
    }
    function kg(a, b, c) {
        var d = b.top
          , e = b.bottom
          , f = b.left
          , g = c.w;
        c = c.h;
        a = a.Math;
        b = a.min(a.max(b.right, 0), g) - a.min(a.max(f, 0), g);
        return (a.min(a.max(e, 0), c) - a.min(a.max(d, 0), c)) * b
    }
    var lg = /\/$/;
    function mg(a) {
        var b = Q(a)
          , c = b.C("hitId");
        c || (c = Xd(a),
        b.D("hitId", c));
        return c
    }
    function ng(a, b) {
        var c = Ff(a)
          , d = Ae(a)
          , e = b.Rd || "uid";
        return [c.C(e), d.C(e)]
    }
    var og = Yd("r", function(a, b) {
        var c = q(ng(a, b))
          , d = c.next().value;
        return !c.next().value && d
    });
    function pg(a, b) {
        return !b.Ua && og(a, b)
    }
    function qg(a, b) {
        var c = b.Rd
          , d = c || "uid";
        c = c ? a.location.hostname : void 0;
        var e = Ae(a)
          , f = Ff(a)
          , g = Ed(a)(Cd)
          , h = q(ng(a, b))
          , k = h.next().value;
        h = h.next().value;
        var l = e.C("d");
        og(a, b);
        var m = !1;
        !h && k && (h = k,
        m = !0);
        if (!h)
            h = S("", [g, Xd(a, 1E6, 999999999)]),
            m = !0;
        else if (!l || 15768E3 < g - Ub(l))
            m = !0;
        m && !b.Ua && (e.D(d, h, 525600, c),
        e.D("d", "" + g, 525600, c));
        f.D(d, h);
        return h
    }
    function rg(a, b, c) {
        return fb("setTimeout", a)(b, c)
    }
    function sg(a, b) {
        return fb("clearTimeout", a)(b)
    }
    function X(a, b, c, d) {
        return rg(a, U(a, "d.err." + (d || "def"), b), c)
    }
    function tg(a, b) {
        return a.setInterval(U(a, "i.err.t.h", b), 200)
    }
    function ug(a, b) {
        return a.clearInterval(b)
    }
    function vg(a, b) {
        return function(c) {
            return c(a, b)
        }
    }
    var wg = oa(function(a, b) {
        return sa(function(c, d) {
            return b(c, function(e) {
                try {
                    d(a(e))
                } catch (f) {
                    c(f)
                }
            })
        })
    })
      , xg = oa(function(a, b) {
        return sa(function(c, d) {
            return b(c, function(e) {
                try {
                    a(e)(vg(c, d))
                } catch (f) {
                    c(f)
                }
            })
        })
    });
    function yg(a) {
        var b = []
          , c = !1;
        return sa(function(d, e) {
            function f(g) {
                b.push(g) === a.length && d(b)
            }
            M(function(g) {
                g(vg(f, function(h) {
                    if (!c)
                        try {
                            e(h),
                            c = !0
                        } catch (k) {
                            f(k)
                        }
                }))
            }, a)
        })
    }
    function zg(a) {
        var b = []
          , c = 0;
        return sa(function(d, e) {
            M(function(f, g) {
                f(vg(d, function(h) {
                    try {
                        b[g] = h,
                        c += 1,
                        c === a.length && e(b)
                    } catch (k) {
                        d(k)
                    }
                }))
            }, a)
        })
    }
    function Ag(a) {
        return sa(function(b, c) {
            a.then(c, b)
        })
    }
    function Bg(a) {
        return sa(function(b, c) {
            c(a)
        })
    }
    function Cg(a, b) {
        function c(e) {
            J(b, d) ? e() : X(a, F(e, c), 100)
        }
        b = void 0 === b ? a : b;
        var d = (b.nodeType ? "contentWindow." : "") + "document.body";
        return sa(function(e, f) {
            c(f)
        })
    }
    function Dg(a) {
        var b = []
          , c = {
            Ti: b
        };
        c.F = H(Va("push", b), F(c, w));
        c.ga = H(pa(za(a))(b), pa(Va("splice", b))(1), F(c, w));
        c.$ = H(w, pa(Qe), Kb(b));
        return c
    }
    function Eg(a) {
        var b = {};
        return {
            F: function(c, d) {
                M(function(e) {
                    J(b, e) || (b[e] = Dg(a));
                    b[e].F(d)
                }, c);
                return this
            },
            ga: function(c, d) {
                M(function(e) {
                    J(b, e) && b[e].ga(d)
                }, c);
                return this
            },
            $: function(c, d) {
                return J(b, c) ? U(a, "e." + c, b[c].$, [])(d) : []
            }
        }
    }
    var Fg = x(function() {
        return {
            Fa: {},
            pending: {},
            children: {}
        }
    })
      , Gg = cb("postMessage");
    function Hg(a, b) {
        return function(c, d) {
            var e = {
                jc: Ed(a)(Ad),
                key: a.Math.random(),
                dir: 0
            };
            c.length && (e.jc = Ub(c[0]),
            e.key = parseFloat(c[1]),
            e.dir = Ub(c[2]));
            N(d, b);
            var f = {};
            f = (f.data = d,
            f.__yminfo = S(":", ["__yminfo", e.jc, e.key, e.dir]),
            f);
            return {
                meta: e,
                Of: yf(a, f) || ""
            }
        }
    }
    var Ig = V("s.f", function(a, b, c, d, e) {
        b = b(d);
        var f = Fg(a)
          , g = S(":", [b.meta.jc, b.meta.key]);
        if (Gg(c)) {
            f.pending[g] = e;
            try {
                c.postMessage(b.Of, "*")
            } catch (h) {
                delete f.pending[g];
                return
            }
            X(a, function() {
                delete f.pending[g]
            }, 5E3, "if.s")
        }
    });
    function Jg(a) {
        if (va("MutationObserver", a.MutationObserver)) {
            var b = Fg(a).children
              , c = new a.MutationObserver(function() {
                M(function(d) {
                    J(b[d], "window.window") || delete b[d]
                }, bc(b))
            }
            );
            Cg(a)(vg(u, function() {
                c.observe(a.document.body, {
                    subtree: !0,
                    childList: !0
                })
            }))
        }
    }
    function Kg(a, b) {
        var c = Fg(a);
        b.F(["initToParent"], function(d) {
            var e = q(d);
            d = e.next().value;
            e = e.next().value;
            window.window && (c.children[e.counterId] = {
                info: e,
                window: d.source
            })
        }).F(["initToChild"], function(d) {
            var e = q(d);
            d = e.next().value;
            e = e.next().value;
            d.source === a.parent && b.$("parentConnect", [d, e])
        }).F(["parentConnect"], function(d) {
            var e = q(d);
            d = e.next().value;
            e = e.next().value;
            e.counterId && (c.Fa[e.counterId] = {
                info: e,
                window: d.source
            })
        })
    }
    var Lg = V("s.fh", function(a, b, c, d, e, f) {
        var g = null
          , h = null
          , k = Fg(a)
          , l = null;
        try {
            g = xf(a, f.data),
            h = g.__yminfo,
            l = g.data
        } catch (m) {
            return
        }
        if (!C(h) && h.substring && "__yminfo" === h.substring(0, 8) && !C(l) && (a = h.split(":"),
        4 === a.length))
            if (g = b.id,
            h = q(a),
            h.next(),
            b = h.next().value,
            a = h.next().value,
            h = h.next().value,
            !L(l) && l.type && "0" === h && l.counterId) {
                if (!l.toCounter || l.toCounter == g) {
                    k = null;
                    try {
                        k = f.source
                    } catch (m) {}
                    !Qa(k) && Gg(k) && (f = d.$(l.type, [f, l]),
                    e = M(H(w, gc(e)), f.concat([void 0])),
                    l = c([b, a, l.counterId], e),
                    k.postMessage(l.Of, "*"))
                }
            } else
                h === "" + g && L(l) && mb(function(m) {
                    return !(!m.hid || !m.counterId)
                }, l).length === l.length && (c = k.pending[S(":", [b, a])]) && c.apply(null, [f].concat(l))
    })
      , Mg = x(function(a, b) {
        var c = fb("getElementsByTagName", J(a, "document"))
          , d = Fg(a)
          , e = Gg(a)
          , f = Eg(a)
          , g = ud(a);
        if (!c || !e)
            return null;
        c = c.call(a.document, "iframe");
        e = {};
        e = (e.counterId = b.id,
        e.hid = "" + mg(a),
        e);
        Hc(a) && (e.duid = qg(a, b));
        Kg(a, f);
        Jg(a);
        var h = Hg(a, e)
          , k = E([a, F([], h)], Ig);
        M(function(l) {
            var m = null;
            try {
                m = l.contentWindow
            } catch (p) {}
            m && k(m, {
                type: "initToChild"
            }, function(p, r) {
                f.$("initToParent", [p, r])
            })
        }, c);
        wc(a) && k(a.parent, {
            type: "initToParent"
        }, function(l, m) {
            f.$("parentConnect", [l, m])
        });
        g.F(a, ["message"], E([a, b, h, f, e], Lg));
        return {
            Z: f,
            Fa: d.Fa,
            children: d.children,
            me: k
        }
    }, H(Ca, O))
      , Ng = x(function(a, b) {
        if (!Hc(a) || !wc(a))
            return qg(a, b);
        var c = Mg(a, b);
        return c && c.Fa[b.id] ? c.Fa[b.id].info.duid || qg(a, b) : qg(a, b)
    }, function(a, b) {
        return "" + b.Rd + b.Ua
    })
      , Og = x(H(Ed, sa(function(a) {
        return -(new a.l.Date).getTimezoneOffset()
    })))
      , Pg = H(Ed, sa(function(a) {
        a = new a.l.Date;
        return S("", M(yd, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
    }))
      , Qg = H(Ed, sa(Cd))
      , Rg = x(H(Ed, sa(function(a) {
        return q(a.Hc).next().value
    })))
      , Sg = x(function(a) {
        a = Q(a);
        var b = a.C("counterNum", 0) + 1;
        a.D("counterNum", b);
        return b
    }, H(Ca, O))
      , Tg = {}
      , Ug = (Tg.vf = F(ma.version, w),
    Tg.nt = sc,
    Tg.fu = function(a, b, c) {
        var d = c.H;
        if (!d)
            return null;
        b = (J(a, "document.referrer") || "").replace(lg, "");
        c = (d["page-ref"] || "").replace(lg, "");
        d = d["page-url"];
        a = T(a).href !== d;
        b = b !== c;
        c = 0;
        a && b ? c = 3 : b ? c = 1 : a && (c = 2);
        return c
    }
    ,
    Tg.en = Kf,
    Tg.la = uc,
    Tg.ut = function(a, b, c) {
        var d = c.M;
        c = c.H;
        d = d && d.Ac;
        c && (fe(a) || b.Ee || d) && (c.ut = Mc.hg);
        return null
    }
    ,
    Tg.v = F(Mc.eb, w),
    Tg.cn = Sg,
    Tg.dp = function(a) {
        var b = Q(a)
          , c = b.C("bt", {});
        if (B(b.C("bt"))) {
            var d = J(a, "navigator.getBattery");
            try {
                c.p = d && d.call(a.navigator)
            } catch (e) {}
            b.D("bt", c);
            c.p && c.p.then && c.p.then(U(a, "bi:dp.p", function(e) {
                c.ni = J(e, "charging") && 0 === J(e, "chargingTime")
            }))
        }
        return ib(c.ni)
    }
    ,
    Tg.ls = x(function(a, b) {
        var c = Gf(a, b.id)
          , d = Ed(a)
          , e = c.C("lsid");
        return +e ? e : (d = Xd(a, 0, d(Ad)),
        c.D("lsid", d),
        d)
    }, Ca),
    Tg.hid = mg,
    Tg.phid = function(a, b) {
        if (!wc(a))
            return null;
        var c = Mg(a, b);
        if (!c)
            return null;
        var d = bc(c.Fa);
        return d.length ? c.Fa[d[0]].info.hid : null
    }
    ,
    Tg.z = Og,
    Tg.i = Pg,
    Tg.et = Qg,
    Tg.c = H(cb("navigator.cookieEnabled"), hb),
    Tg.rn = H(w, Xd),
    Tg.rqn = function(a, b, c) {
        c = c.H;
        if (!c || c.nohit)
            return null;
        b = O(b);
        a = Gf(a, b);
        b = (a.C("reqNum", 0) || 0) + 1;
        a.D("reqNum", b);
        if (a.C("reqNum") === b)
            return b;
        a.kc("reqNum");
        return null
    }
    ,
    Tg.u = Ng,
    Tg.w = function(a) {
        var b = q(Tf(a));
        a = b.next().value;
        b = b.next().value;
        return a + "x" + b
    }
    ,
    Tg.s = function(a) {
        var b = J(a, "screen");
        if (b) {
            a = J(b, "width");
            var c = J(b, "height");
            b = J(b, "colorDepth") || J(b, "pixelDepth");
            return S("x", [a, c, b])
        }
        return null
    }
    ,
    Tg.sk = cb("devicePixelRatio"),
    Tg.ifr = H(wc, hb),
    Tg.j = H(yc, hb),
    Tg.sti = function(a) {
        return wc(a) && xc(a) ? "1" : null
    }
    ,
    Tg)
      , Vg = x(function() {
        return Pe(bc(Ug), bc(wf))
    });
    function Wg(a) {
        return function(b, c) {
            return {
                R: function(d, e) {
                    var f = d.K
                      , g = d.H;
                    f && g && M(function(h) {
                        var k = Ug[h]
                          , l = "bi"
                          , m = f;
                        k || (k = wf[h],
                        l = "tel",
                        m = of(d));
                        k && (k = V(l + ":" + h, k, null)(b, c, d),
                        m.Sb(h, k))
                    }, a || Vg());
                    e()
                }
            }
        }
    }
    function Xg(a, b) {
        return {
            R: function(c, d) {
                var e = c.K;
                if (e && (!b || b.Hf)) {
                    var f = a.document.title;
                    c.M && c.M.title && (f = c.M.title);
                    var g = fb("getElementsByTagName", a.document);
                    "string" !== typeof f && g && (f = g("title"),
                    f = (f = J(f, "0.innerHtml")) ? f : "");
                    f = f.slice(0, Mc.eg);
                    e.D("t", f)
                }
                d()
            }
        }
    }
    var Yg = x(Ce, O);
    function Zg(a, b, c) {
        if (Hc(a) && wc(a)) {
            var d = Yg(b);
            if (!d.sh) {
                d.sh = !0;
                b = Mg(a, b);
                if (!b) {
                    c();
                    return
                }
                d.wa = [];
                var e = function() {
                    d.wa && (M(Qe, d.wa),
                    d.wa = null)
                };
                X(a, e, 3E3);
                b.Z.F(["initToChild"], e)
            }
            d.wa ? d.wa.push(c) : c()
        } else
            c()
    }
    var $g = x(function() {
        return {
            Ve: null,
            wa: []
        }
    }, O);
    function ah(a) {
        return (a = a.K) && a.C("pv") && !a.C("ar")
    }
    function bh(a, b, c) {
        var d = a.K;
        d ? ah(a) ? (b.Ve = d,
        c()) : b.wa ? b.wa.push(c) : c() : c()
    }
    function ch(a, b) {
        return {
            R: function(c, d) {
                var e = $g(b);
                e = E([c, e, d], bh);
                Zg(a, b, e)
            },
            Ca: function(c, d) {
                var e = c.K
                  , f = $g(b);
                if (e) {
                    var g = f.wa;
                    f.Ve === e && g && (M(Qe, g),
                    f.wa = null)
                }
                d()
            }
        }
    }
    var dh = /^[a-z][\w.+-]+:/i;
    function eh(a, b) {
        var c = T(a)
          , d = c.href
          , e = c.host
          , f = -1;
        if (!y(b) || B(b))
            return d;
        c = b.replace(ie, "");
        if (-1 !== c.search(dh))
            return c;
        var g = c.charAt(0);
        if ("?" === g && (f = d.search(/\?/),
        -1 === f) || "#" === g && (f = d.search(/#/),
        -1 === f))
            return d + c;
        if (-1 !== f)
            return d.substr(0, f) + c;
        if ("/" === g) {
            if (f = La(d, e),
            -1 !== f)
                return d.substr(0, f + e.length) + c
        } else
            return d = d.split("/"),
            d[d.length - 1] = c,
            S("/", d);
        return ""
    }
    function fh(a) {
        return {
            R: function(b, c) {
                var d = b.H;
                if (!b.K || !d)
                    return c();
                var e = d["page-ref"]
                  , f = d["page-url"];
                e && f !== e ? d["page-ref"] = eh(a, e) : delete d["page-ref"];
                d["page-url"] = eh(a, f).slice(0, Mc.fg);
                return c()
            }
        }
    }
    var gh = [[ff, 1], [ch, 2], [Wg(), 3], [Xg, 4]]
      , hh = []
      , ih = F(gh, Xe)
      , jh = {}
      , kh = (jh.h = gh,
    jh)
      , lh = F(kh, Ye);
    ih(fh, -100);
    function mh(a, b, c) {
        b = L(b) ? b : kh[b] || gh;
        var d = M(wb, b);
        M(function(e) {
            return d.unshift(e)
        }, hh);
        return M(H($a([a, c]), Qe), d)
    }
    function nh(a, b, c, d) {
        return new R(function(e, f) {
            if (!J(a, "navigator.onLine"))
                return f();
            var g = {};
            g = N(d.ab, (g["force-urlencoded"] = 1,
            g));
            g = c + "?" + Wd(g) + (d.ba ? "&" + d.ba : "");
            return 2E3 < g.length ? f(hf("sb.tlq")) : b(g) ? e("") : f()
        }
        )
    }
    function oh(a) {
        var b = J(a, "navigator.sendBeacon");
        return b && va("sendBeacon", b) ? E([a, D(b, J(a, "navigator"))], nh) : !1
    }
    function ph(a, b) {
        var c = Lf(a);
        if (c) {
            var d = a.document
              , e = c("script");
            e.src = b.src;
            e.type = b.type || "text/javascript";
            e.charset = b.charset || "utf-8";
            e.async = b.async || !0;
            try {
                var f = d.getElementsByTagName("head")[0];
                if (!f) {
                    var g = d.getElementsByTagName("html")[0];
                    f = c("head");
                    g && g.appendChild(f)
                }
                f.insertBefore(e, f.firstChild);
                return e
            } catch (h) {}
        }
    }
    var qh = x(function(a) {
        if (a = Lf(a))
            return a("a")
    });
    function rh(a, b) {
        var c = qh(a);
        return c ? (c.href = b,
        {
            protocol: c.protocol,
            host: c.host,
            port: c.port,
            hostname: c.hostname,
            hash: c.hash,
            search: c.search,
            query: c.search.replace(/^\?/, ""),
            pathname: c.pathname || "/",
            path: (c.pathname || "/") + c.search,
            href: c.href
        }) : {}
    }
    function sh(a) {
        return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
    }
    function th(a, b) {
        if (!b || !b.length)
            return a;
        var c = q(a.split("#"))
          , d = c.next().value;
        c = ba(c);
        c = (c = S("#", c)) ? "#" + c : "";
        return Na(a, "?") ? d + "&" + b + c : d + "?" + b + c
    }
    function uh(a, b, c) {
        (c = Wd(c)) && (a = th(a, c));
        b.ba && (a = th(a, b.ba));
        return a
    }
    function vh(a, b) {
        try {
            delete a[b]
        } catch (c) {
            a[b] = void 0
        }
    }
    function wh(a, b, c) {
        return new R(function(d, e) {
            var f = "_ymjsp" + Xd(a)
              , g = {};
            g = N((g.callback = f,
            g), c.ab);
            var h = E([a, f], vh);
            a[f] = function(l) {
                try {
                    h(),
                    Mf(k),
                    d(l)
                } catch (m) {
                    e(m)
                }
            }
            ;
            g.wmode = "5";
            f = {};
            var k = ph(a, (f.src = uh(b, c, g),
            f));
            if (!k)
                return h(),
                e(jd("jp.s"));
            f = F(k, Mf);
            f = H(f, F(hf(c.ea), e));
            g = rg(a, f, c.Oa || 1E4);
            g = E([a, g], sg);
            k.onload = g;
            k.onerror = H(h, g, f)
        }
        )
    }
    function xh(a, b, c, d) {
        var e = {};
        e = N(d.cb ? (e.wmode = "7",
        e) : {}, d.ab);
        var f = b || {
            signal: void 0,
            abort: u
        }
          , g = a.fetch(th(c, Wd(e)), {
            method: d.Vc,
            body: d.ba,
            credentials: !1 === d.Wc ? "omit" : "include",
            headers: d.$a,
            signal: f.signal
        })
          , h = F(d.ea, hf);
        return new R(function(k, l) {
            d.Oa && rg(a, function() {
                try {
                    f.abort()
                } catch (m) {}
                l(h())
            }, d.Oa);
            return g.then(function(m) {
                if (!m.ok) {
                    if (d.Nc)
                        return md(kd(m));
                    jf(d.ea)
                }
                return d.Nc ? m.text() : d.cb ? m.json() : null
            }).then(k)["catch"](F(h(), l))
        }
        )
    }
    var yh = /[^a-z0-9.:-]/;
    function zh(a, b, c, d, e, f, g, h) {
        if (4 === b.readyState)
            if (200 === b.status || e || g(c),
            e)
                200 === b.status ? f(b.responseText) : g(kd(b));
            else {
                e = null;
                if (d)
                    try {
                        (e = xf(a, b.responseText)) || g(c)
                    } catch (k) {
                        g(c)
                    }
                f(e)
            }
        return h
    }
    function Ah(a, b, c) {
        var d = new a.XMLHttpRequest
          , e = c.ba
          , f = {}
          , g = N(c.cb ? (f.wmode = "7",
        f) : {}, c.ab);
        return new R(function(h, k) {
            d.open(c.Vc || "GET", th(b, Wd(g)), !0);
            d.withCredentials = !1 !== c.Wc;
            c.Oa && (d.timeout = c.Oa);
            H(ac, Jb(function(m) {
                var p = q(m);
                m = p.next().value;
                p = p.next().value;
                d.setRequestHeader(m, p)
            }))(c.$a);
            var l = E([a, d, hf(c.ea), c.cb, c.Nc, h, k], zh);
            d.onreadystatechange = l;
            try {
                d.send(e)
            } catch (m) {}
        }
        )
    }
    function Bh(a, b, c, d) {
        return new R(function(e, f) {
            var g = Rf(a)
              , h = b("img")
              , k = H(F(h, Mf), F(hf(d.ea), f))
              , l = rg(a, k, d.Oa || 3E3);
            h.onerror = k;
            h.onload = H(F(h, Mf), F(null, e), E([a, l], sg));
            k = N({}, d.ab);
            delete k.wmode;
            h.src = uh(c, d, k);
            kc(a) && (N(h.style, {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px"
            }),
            g.appendChild(h))
        }
        )
    }
    var Ch = {}
      , Dh = (Ch.x = {
        id: 2,
        check: function(a) {
            var b;
            if (b = J(a, "XMLHttpRequest"))
                if (b = "withCredentials"in new a.XMLHttpRequest) {
                    a: {
                        if (yh.test(a.location.host) && a.opera && A(a.opera.version) && (b = a.opera.version(),
                        "string" === typeof b && "12" === b.split(".")[0])) {
                            b = !0;
                            break a
                        }
                        b = !1
                    }
                    b = !b
                }
            return b ? F(a, Ah) : !1
        }
    },
    Ch.i = {
        id: 4,
        check: function(a) {
            var b = Lf(a);
            return b ? E([a, b], Bh) : !1
        }
    },
    Ch);
    Dh.f = {
        id: 1,
        check: function(a) {
            if (a.fetch) {
                var b = J(a, "AbortController");
                return E([a, b ? new b : void 0], xh)
            }
            return !1
        }
    };
    Dh.b = {
        id: 0,
        check: function(a) {
            return !nc(a) && oh(a)
        }
    };
    Dh.j = {
        id: 3,
        check: function(a) {
            return Lf(a) ? F(a, wh) : !1
        }
    };
    var Eh = {};
    function Fh(a) {
        if (a)
            return G(function(b, c) {
                var d = Dh[c];
                d && b.push(d);
                return b
            }, [], a)
    }
    function Gh(a) {
        return Eh["*"] ? Fh(Eh["*"]) : a ? Fh(Eh[a]) : void 0
    }
    var Hh = ["b", "f", "x", "j", "i"]
      , Ih = ["x"];
    Ih.unshift("f");
    Ih.push("j");
    var Jh = ["i"]
      , Kh = ["f", "x"]
      , Lh = ["f", "i"]
      , Mh = {}
      , Nh = (Mh.h = Ih,
    Mh)
      , Oh = x(function(a, b, c) {
        (c = Gh(b) || Fh(c)) || (c = Fh(b ? Nh[b] : Hh));
        b = G(function(d, e) {
            var f = e.check
              , g = e.id;
            (f = f(a)) && d.push([g, f]);
            return d
        }, [], c || []);
        b.length || jf();
        return b
    }, Ca)
      , Ph = D(R.reject, R, hf())
      , Qh = {}
      , Rh = (Qh.h = df,
    Qh)
      , Sh = V("g.sen", function(a, b, c) {
        var d = Oh(a, b);
        c = c ? mh(a, b, c) : [];
        var e = Rh[b]
          , f = e ? e(a, d, c) : df(a, d, c);
        return function() {
            var g = q(Ha(arguments))
              , h = g.next().value;
            g = ba(g);
            h = N(h, {
                N: N(void 0 === h.N ? {} : h.N, {
                    ea: [b]
                })
            });
            return f.apply(null, [h].concat(g))
        }
    }, Ph);
    function Th(a, b) {
        return function(c) {
            var d = c[a];
            d ? (d.zf = !0,
            d.yf(b)) : c[a] = {
                promise: R.resolve(b),
                zf: !0,
                yf: u
            }
        }
    }
    var Uh = oa(function(a, b) {
        if (!b[a]) {
            var c, d = new R(function(e) {
                c = e
            }
            );
            b[a] = {
                yf: c,
                promise: d,
                zf: !1
            }
        }
        return b[a].promise
    })
      , Vh = x(H(Ce, sa));
    function Wh(a, b, c) {
        b = O(b);
        var d = zd(a);
        c = N({
            Sg: d(Ad)
        }, c);
        d = {};
        var e = {};
        Fe(a, (e.counterKey = b,
        e.name = "counterSettings",
        e.data = (d.settings = c,
        d),
        e));
        return Vh()(Th(b, c))
    }
    function Xh(a, b) {
        var c = O(a);
        return Vh()(Uh(c)).then(b)
    }
    function Yh(a, b) {
        function c(d, e, f) {
            var g = {}
              , h = {};
            Fe(a, (h.name = "log",
            h.counterKey = b,
            h.data = (g.args = L(e) ? e : [e],
            g.type = d,
            g.variables = f,
            g),
            h))
        }
        return {
            log: F("log", c),
            error: F("error", c),
            warn: F("warn", c)
        }
    }
    var Zh = x(V("dc.init", function(a, b) {
        return b && Zd(Sb(b.split(":")[0])) ? {
            log: u,
            warn: u,
            error: u
        } : Yh(a, b)
    }), Ca);
    function $h(a, b, c, d) {
        Zh(a, b).log(c, d)
    }
    function ai(a, b, c, d, e) {
        return E([a, O(b), e ? [c + ".p", e] : c, d], $h)
    }
    function bi(a, b, c) {
        c = c || "as";
        if (a.postMessage && !a.attachEvent) {
            var d = ud(a)
              , e = "__ym__promise_" + Xd(a) + "_" + Xd(a)
              , f = u;
            f = d.F(a, ["message"], U(a, c, function(g) {
                try {
                    var h = g.data
                } catch (k) {
                    return
                }
                h === e && (f(),
                g.stopPropagation && g.stopPropagation(),
                b())
            }));
            a.postMessage(e, "*")
        } else
            X(a, b, 0, c)
    }
    var ci = V("h.p", function(a, b) {
        var c = Sh(a, "h", b)
          , d = b.rc || "" + T(a).href
          , e = b.Yg || a.document.referrer
          , f = {}
          , g = {};
        f = {
            K: Le((f.pv = 1,
            f)),
            H: (g["page-url"] = d,
            g["page-ref"] = e,
            g),
            M: {}
        };
        f.M.O = b.O;
        f.M.De = b.De;
        b.jd && f.H && (f.H.nohit = "1");
        return c(f, b).then(function(h) {
            if (h) {
                if (!b.jd) {
                    var k = {};
                    ai(a, b, "h", (k.id = b.id,
                    k.url = d,
                    k.ref = e,
                    k), b.O)()
                }
                bi(a, E([a, b, h], Wh))
            }
        })["catch"](U(a, "h.g.s"))
    });
    function di(a, b, c) {
        try {
            if (A(b)) {
                var d = q(Ha(arguments));
                d.next();
                d.next();
                d.next();
                var e = ba(d);
                b.apply(C(c) ? null : c, e)
            }
        } catch (f) {
            rg(a, F(f, md), 0)
        }
    }
    var ei = ["yandex_metrika_callback" + ma.callbackPostfix, "yandex_metrika_callbacks" + ma.callbackPostfix]
      , fi = V("cb.i", function(a) {
        var b = q(ei)
          , c = b.next().value
          , d = b.next().value;
        if (A(a[c]))
            a[c]();
        "object" === typeof a[d] && M(function(e, f) {
            a[d][f] = null;
            di(a, e)
        }, a[d]);
        M(function(e) {
            try {
                delete a[e]
            } catch (f) {
                a[e] = void 0
            }
        }, ei)
    });
    function gi(a, b) {
        var c = Q(a).C("counters", {})
          , d = O(b);
        return c[d]
    }
    function hi(a, b, c, d) {
        var e = uf[c];
        return e ? function() {
            var f = Ha(arguments);
            f = d.apply(null, ca(f));
            var g = Q(a);
            g.ra("mt", {});
            g = g.C("mt");
            var h = g[e];
            g[e] = h ? h + 1 : 1;
            return f
        }
        : d
    }
    var ii = []
      , ji = []
      , ki = []
      , li = []
      , mi = []
      , ni = []
      , oi = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/;
    function pi(a) {
        var b = a.length;
        return 1 > b || 64 < b ? !1 : Qb(function(c) {
            var d = c.length;
            if (1 > d)
                c = !1;
            else if ('"' === c[0] && '"' === c[d - 1] && 2 < d)
                a: {
                    for (d = 1; d + 2 < c.length; d += 1) {
                        var e = c.charCodeAt(d);
                        if (32 > e || 34 === e || 126 < e) {
                            c = !1;
                            break a
                        }
                        if (92 === e) {
                            if (d + 2 === c.length || 32 > c.charCodeAt(d + 1)) {
                                c = !1;
                                break a
                            }
                            d += 1
                        }
                    }
                    c = !0
                }
            else
                c = oi.test(c) ? !0 : !1;
            return c
        }, a.split("."))
    }
    function qi(a) {
        var b = a.length;
        return 5 > b || 100 < b ? void 0 : a
    }
    function ri(a) {
        var b = ke(a).replace(/^\++/gm, "").toLowerCase()
          , c = b.lastIndexOf("@");
        if (-1 === c)
            return qi(b);
        a = b.substr(0, c);
        c = b.substr(c + 1);
        if (!c || !pi(a))
            return qi(b);
        c = c.replace("googlemail.com", "gmail.com");
        de(c) && (c = "yandex.ru");
        "yandex.ru" === c ? a = a.replace(Ia, "-") : "gmail.com" === c && (a = a.replace(Ia, ""));
        b = La(a, "+");
        -1 !== b && (a = a.slice(0, b));
        return qi(a + "@" + c)
    }
    var si = le(/[^\d+()]/g)
      , ti = /[a-z\u0430-\u044f\u0451,.]/gi;
    function ui(a, b) {
        var c = ne(b)
          , d = c.length;
        if (!(ti.test(b) || b.length - d > d || 10 > d || 16 < d)) {
            d = c[0];
            var e = b[1];
            if ("+" !== b[0] || e === d)
                return d = si(b),
                10 > c.length || 13 < c.length || d.startsWith("+8") ? ke(b) : "8" === d[0] ? "7" + c.slice(1) : "+" === d[0] || Rb(a, +d[0]) ? c : "7" + c
        }
    }
    var vi = x(function(a) {
        return !!J(a, "crypto.subtle.digest") && !!J(a, "TextEncoder") && !!J(a, "FileReader") && !!J(a, "Blob")
    });
    function wi(a, b) {
        return new R(function(c, d) {
            var e = (new a.TextEncoder).encode(b);
            a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                f = new a.Blob([f],{
                    type: "application/octet-binary"
                });
                var g = new a.FileReader;
                g.onload = function(h) {
                    h = J(h, "target.result") || "";
                    var k = La(h, ",");
                    -1 !== k ? c(h.substring(k + 1)) : d(jd("fpm.i"))
                }
                ;
                g.readAsDataURL(f)
            }, d)
        }
        )
    }
    var xi = ["yandex_cid", "yandex_public_id"];
    function yi(a, b, c) {
        c = void 0 === c ? 0 : c;
        b = ac(b);
        b = G(function(d, e) {
            var f = q(e)
              , g = f.next().value;
            f = f.next().value;
            var h = Ra(f);
            if (!h && (Rb(a, f) && (f = "" + f),
            !y(f)))
                return d;
            if (h)
                f = yi(a, f, c + 1);
            else if (!c && K(g, xi))
                f = R.resolve(f);
            else {
                "phone_number" === g ? f = ui(a, f) : "email" === g && (f = ri(f));
                if (!f)
                    return d;
                f = wi(a, f)
            }
            d.push(f.then(function(k) {
                return [g, k]
            }));
            return d
        }, [], b);
        return R.all(b)
    }
    var zi = V("fpm", function(a, b) {
        if (!ge(a))
            return u;
        var c = O(b);
        if (!vi(a))
            return $h(a, c, "ns"),
            u;
        var d = gi(a, b);
        return d ? function(e) {
            return (new R(function(f, g) {
                return Ra(e) ? bc(e).length ? f(yi(a, e).then(function(h) {
                    if (h && h.length) {
                        var k = {}
                          , l = {};
                        d.params((l.__ym = (k.fpp = h,
                        k),
                        l))
                    }
                }, u)) : g(hf("fpm.l")) : g(hf("fpm.o"))
            }
            ))["catch"](U(a, "fpm.en"))
        }
        : u
    });
    function Ai(a, b) {
        return G(function(c, d) {
            var e = q(d)
              , f = e.next().value
              , g = e.next().value;
            e = g;
            g = Ra(g);
            if (!g && (Rb(a, e) && (e = "" + e),
            !y(e)))
                return c;
            e = g ? Ai(a, e) : e;
            db(e) && c.push([f, e]);
            return c
        }, [], ac(b))
    }
    function Bi(a, b) {
        return function(c) {
            var d = gi(a, b);
            if (d) {
                var e = Zh(a, O(b));
                if (Ra(c))
                    if (db(bc(c))) {
                        if ((c = Ai(a, c)) && db(c)) {
                            e = {};
                            var f = {};
                            d.params((f.__ym = (e.fpmh = c,
                            e),
                            f))
                        }
                    } else
                        e.log("fpeo");
                else
                    e.log("fpno")
            }
        }
    }
    function Ci(a) {
        a = Q(a);
        var b = a.C("dsjf") || sa({});
        a.ra("dsjf", b);
        return b
    }
    function Di(a, b, c) {
        Ci(a)(function(d) {
            d[b] = N(d[b] || {}, c)
        })
    }
    function Ei(a, b) {
        Ci(a)(function(c) {
            delete c[b]
        })
    }
    function Fi(a, b) {
        return function(c) {
            Di(a, b, c)
        }
    }
    var Gi = oa(function(a, b) {
        var c = {};
        Ci(a)(function(d) {
            c = d[b] || {}
        });
        return c
    })
      , Hi = V("c.c.cc", function(a) {
        var b = Q(a)
          , c = H(Gi(a), function(d) {
            var e = {};
            e = (e.clickmap = !!d.clickmap,
            e);
            return N({}, d, e)
        });
        return U(a, "g.c.cc", H(D(b.C, b, "counters", {}), bc, Jb(c)))
    })
      , Ii = V("gt.c.rs", function(a, b) {
        var c = O(b)
          , d = b.id
          , e = b.ca
          , f = b.xg
          , g = b.ye
          , h = E([a, c], Ei)
          , k = {};
        Di(a, c, (k.id = d,
        k.type = +e,
        k.clickmap = f,
        k.trackHash = !!g,
        k));
        return h
    })
      , Ji = {};
    function Ki(a, b) {
        var c = O(a)
          , d = J(b, "__ym.turbo_page")
          , e = J(b, "__ym.turbo_page_id");
        Ji[c] || (Ji[c] = {});
        if (d || e)
            Ji[c].hi = d,
            Ji[c].ii = e
    }
    function Li(a) {
        a = O(a);
        return Ji[a] && Ji[a].hi
    }
    var Mi = x(De);
    function Ni(a, b) {
        return {
            R: function(c, d) {
                var e = (c.M || {}).O
                  , f = void 0 === c.N ? {} : c.N;
                if (e && (Ki(b, e),
                !f.ba && c.K && c.H)) {
                    var g = yf(a, e)
                      , h = Mi(a)
                      , k = c.K.C("pv");
                    if (g && !c.H.nohit) {
                        var l = {}
                          , m = {};
                        Fe(a, (m.counterKey = O(b),
                        m.name = "params",
                        m.data = (l.val = e,
                        l),
                        m));
                        k ? encodeURIComponent(g).length > Mc.dg ? h.push([c.K, e]) : c.H["site-info"] = g : (f.ba = g,
                        c.N = f,
                        c.Jc || (c.Jc = {}),
                        c.Jc.Ch = !0)
                    }
                }
                d()
            },
            Ca: function(c, d) {
                var e = Mi(a)
                  , f = gi(a, b)
                  , g = f && f.params;
                g && (f = mb(H(wb, qa(c.K)), e),
                M(function(h) {
                    var k = q(h);
                    k.next();
                    k = k.next().value;
                    g(k);
                    h = vb(a)(h, e);
                    e.splice(h, 1)
                }, f));
                d()
            }
        }
    }
    function Oi(a, b, c, d, e) {
        var f = E([a, d, e], di);
        return c.then(f, function(g) {
            f();
            mf(a, b, g)
        })
    }
    var Pi = x(Ce, O);
    function Qi(a) {
        var b = u
          , c = null
          , d = a.length;
        if (0 !== a.length && a[0]) {
            var e = a.slice(-1)[0];
            A(e) && (b = e,
            d = a.length + -1);
            var f = a.slice(-2)[0];
            A(f) && (b = f,
            c = e,
            d = a.length + -2);
            d = a.slice(0, d);
            return {
                Eg: c,
                Zb: b,
                O: 1 === d.length ? a[0] : eb(d)
            }
        }
    }
    var Ri = V("pa.int", function(a, b) {
        var c = {};
        return c.params = function() {
            var d = Ha(arguments)
              , e = Qi(d);
            if (!e)
                return null;
            d = e.Eg;
            var f = e.O;
            e = e.Zb;
            if (!Ra(f) && !L(f))
                return null;
            var g = Sh(a, "1", b)
              , h = Pi(b).url
              , k = !$d(b)
              , l = "pa"
              , m = {};
            m = (m.id = b.id,
            m);
            var p = f
              , r = "";
            if (r = J(f, "__ym.user_id"))
                l = "pau",
                m.uid = r;
            K("__ymu", bc(f)) && (l = "paup");
            p.__ym && (p = N({}, f),
            p.__ym = G(function(t, v) {
                var z = J(f, "__ym." + v);
                z && (t[v] = z);
                return t
            }, {}, qf),
            bc(p.__ym).length || delete p.__ym,
            k = !!bc(p).length);
            p = r ? void 0 : JSON.stringify(p);
            l = ai(a, b, l, m, p);
            m = {};
            p = {};
            g = g({
                M: {
                    O: f
                },
                K: Le((m.pa = 1,
                m.ar = 1,
                m)),
                H: (p["page-url"] = h || T(a).href,
                p)
            }, b).then(k ? l : u);
            return Oi(a, "p.s", g, e, d)
        }
        ,
        c
    });
    function Si(a, b, c, d, e) {
        return (new R(function(f, g) {
            var h = bc(c)
              , k = H(d.resolve || w, ra(f))
              , l = H(d.reject || w, ra(g));
            d.resolve = k;
            d.reject = l;
            M(function(m) {
                d.ze.push(+m);
                var p = c[m]
                  , r = X(a, F(hf(), l), 5100, "is.m")
                  , t = {};
                b(p.window, N(e, (t.toCounter = Ub(m),
                t)), function(v, z) {
                    sg(a, r);
                    d.Lf.push(m);
                    d.resolve && d.resolve(z)
                })
            }, h)
        }
        ))["catch"](U(a, "if.b"))
    }
    function Ti(a, b, c) {
        b = mb(function(d) {
            return !K(c.info.counterId, d.ze)
        }, b);
        M(function(d) {
            if (c.info.counterId) {
                var e = {};
                a((e[c.info.counterId] = c,
                e), d, d.data)
            }
        }, b)
    }
    function Ui(a, b) {
        var c = Mg(a, b)
          , d = []
          , e = [];
        if (!c)
            return null;
        var f = E([a, c.me], Si)
          , g = F(f, Ti);
        c.Z.F(["initToParent"], function(h) {
            h = q(h);
            h.next();
            h = h.next().value;
            g(d, c.children[h.counterId])
        }).F(["parentConnect"], function(h) {
            h = q(h);
            h.next();
            h = h.next().value;
            g(e, c.Fa[h.counterId])
        });
        return {
            Z: c.Z,
            Xi: function(h, k) {
                return new R(function(l, m) {
                    c.me(h, k, function(p, r) {
                        l([p, r])
                    });
                    X(a, F(hf(), m), 5100, "is.o")
                }
                )
            },
            If: function(h) {
                var k = {
                    Lf: [],
                    ze: [],
                    data: h
                };
                d.push(k);
                return f(c.children, k, h)
            },
            Jf: function(h) {
                var k = {
                    Lf: [],
                    ze: [],
                    data: h
                };
                e.push(k);
                return f(c.Fa, k, h)
            }
        }
    }
    var Vi = x(Ui, H(Ca, O));
    function Wi(a, b) {
        if (!K(b, M(cb("ymetrikaEvent.type"), a))) {
            var c = {}
              , d = {};
            a.push((d.ymetrikaEvent = (c.type = b,
            c),
            d))
        }
    }
    function Xi(a) {
        a = Q(a);
        var b = a.C("dataLayer", []);
        a.D("dataLayer", b);
        return b
    }
    function Yi(a, b, c, d) {
        c = void 0 === c ? u : c;
        d = void 0 === d ? !1 : d;
        var e = Dg(a);
        if (b && A(b.push)) {
            var f = b.push;
            b.push = function() {
                var g = Ha(arguments)
                  , h = q(g).next().value;
                d && e.$(h);
                g = f.apply(b, g);
                d || e.$(h);
                return g
            }
            ;
            a = {
                oa: e,
                unsubscribe: function() {
                    b.push = f
                }
            };
            c(a);
            M(e.$, b);
            return a
        }
    }
    function Zi(a, b) {
        var c = J(b, "ymetrikaEvent");
        c && a.$(J(c, "type"), c)
    }
    function $i(a, b, c) {
        c = void 0 === c ? w : c;
        var d = Eg(a);
        c(d);
        var e = F(d, Zi);
        Yi(a, b, function(f) {
            f.oa.F(e)
        });
        return d
    }
    function aj(a, b, c, d) {
        var e = gi(a, c);
        if (e) {
            a = d.data;
            c = "" + c.id;
            var f = d.sended || [];
            d.sended || (d.sended = f);
            K(c, f) || !e.params || d.counter && "" + d.counter !== c || (e.params(a),
            f.push(c),
            d.parent && (d = {},
            b.Jf((d.type = "params",
            d.data = a,
            d))))
        }
    }
    var bj = V("y.p", function(a, b) {
        var c = Ui(a, b);
        if (c) {
            var d = Xi(a)
              , e = E([a, c, b], aj);
            $i(a, d, function(f) {
                f.F(["params"], e)
            });
            c.Z.F(["params"], H(cb("1"), e))
        }
    });
    function cj(a, b, c, d) {
        var e = T(a)
          , f = e.hostname;
        e = e.href;
        if (b = Pi(b).url)
            a = rh(a, b),
            f = a.hostname,
            e = a.href;
        return [d + "://" + f + "/" + c, e || ""]
    }
    var dj = {
        Pi: Wa(/[/&=?#]/)
    }, ej = V("go.in", function(a, b, c, d) {
        c = void 0 === c ? "goal" : c;
        var e = {};
        return e.reachGoal = function(f, g, h, k) {
            if (!f || dj[c] && dj[c](f))
                return null;
            var l = g
              , m = h || u;
            A(g) && (m = g,
            l = void 0,
            k = h);
            g = {};
            var p = ai(a, b, "gr", (g.id = b.id,
            g.goal = f,
            g), l)
              , r = "goal" === c;
            g = Sh(a, "g", b);
            var t = q(cj(a, b, f, c));
            h = t.next().value;
            t = t.next().value;
            var v = {}
              , z = {};
            g = g({
                M: {
                    O: l
                },
                K: Le((v.ar = 1,
                v)),
                H: (z["page-url"] = h,
                z["page-ref"] = t,
                z)
            }, b).then(function() {
                r && p();
                var P = {}
                  , W = {};
                Fe(a, (W.counterKey = O(b),
                W.name = "event",
                W.data = (P.schema = c,
                P.name = f,
                P.params = l,
                P),
                W));
                d && d()
            });
            return Oi(a, "g.s", g, m, k)
        }
        ,
        e
    }), fj = V("guid.int", function(a, b) {
        var c = {};
        return c.getClientID = function(d) {
            var e = qg(a, b);
            d && di(a, d, null, e);
            return e
        }
        ,
        c
    }), gj;
    function hj(a) {
        return (a = T(a).hash.split("#")[1]) ? a.split("?")[0] : ""
    }
    function ij(a, b) {
        var c = hj(a);
        gj = tg(a, function() {
            var d = hj(a);
            d !== c && (b(),
            c = d)
        });
        return D(ug, null, a, gj)
    }
    function jj(a, b, c, d) {
        var e = b.ca
          , f = b.Ee
          , g = b.rc
          , h = Q(a)
          , k = {};
        k = Le((k.wh = 1,
        k.pv = 1,
        k));
        var l = J(d, "isTrusted");
        d && !C(l) && k.D("ite", ib(l));
        Nc(e) && a.Ya && a.Ya.Direct && k.D("ad", "1");
        f && k.D("ut", "1");
        e = h.C("lastReferrer");
        d = T(a).href;
        f = {};
        g = {
            H: (f["page-url"] = g || d,
            f["page-ref"] = e,
            f),
            K: k
        };
        c(g, b)["catch"](U(a, "g.s"));
        h.D("lastReferrer", d)
    }
    var kj = V("th.e", function(a, b) {
        function c() {
            f || (h = I(a, "onhashchange") ? ud(a).F(a, ["hashchange"], g) : ij(a, g))
        }
        var d = Sh(a, "t", b)
          , e = Fi(a, O(b))
          , f = !1
          , g = U(a, "h.h.ch", D(jj, null, a, b, d))
          , h = u;
        b.ye && (c(),
        f = !0);
        d = {};
        return d.trackHash = U(a, "tr.hs.h", function(k) {
            k ? c() : h();
            f = !!k;
            k = {};
            e((k.trackHash = f,
            k))
        }),
        d.u = h,
        d
    });
    function lj(a) {
        var b = null;
        try {
            b = a.target || a.srcElement
        } catch (c) {}
        if (b) {
            3 === b.nodeType && (b = b.parentNode);
            for (a = b && b.nodeName && ("" + b.nodeName).toLowerCase(); J(b, "parentNode.nodeName") && ("a" !== a && "area" !== a || !b.href && !b.getAttribute("xlink:href")); )
                a = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
            return b.href ? b : null
        }
        return null
    }
    function mj(a, b) {
        var c = {};
        c = (c.string = !0,
        c.object = !0,
        c["boolean"] = b,
        c)[typeof b] || !1;
        var d = {};
        a((d.trackLinks = c,
        d))
    }
    function nj(a, b, c) {
        var d = Le();
        void 0 !== c.yc && d.D("ite", ib(c.yc));
        c.wc && d.D("dl", 1);
        c.ob && d.D("ln", 1);
        var e = c.Zf || {}
          , f = {};
        d = {
            K: d,
            M: {
                title: e.title || c.title,
                Ac: !!c.Ac,
                O: e.params
            },
            H: (f["page-url"] = c.url,
            f["page-ref"] = b.rc || T(a).href,
            f)
        };
        f = "Link";
        c.wc ? f = c.ob ? "Ext link - File" : "File" : c.ob && (f = "Ext link");
        var g = {}
          , h = {};
        Fe(a, (h.counterKey = O(b),
        h.name = "event",
        h.data = (g.schema = "Link click",
        g.name = (c.ob ? "external" : "internal") + " url: " + c.url,
        g),
        h));
        g = {};
        b = c.sender(d, b).then(ai(a, b, "lcl", (g.prefix = f,
        g.id = b.id,
        g.url = c.url,
        g), c.Zf));
        Oi(a, "cl.p.s", b, e.callback || u, e.ctx)
    }
    function oj(a, b) {
        if (a.ji()) {
            var c = lj(b);
            if (c && !Of("ym-disable-tracklink", c)) {
                var d = a.l
                  , e = a.Cg
                  , f = a.fb
                  , g = a.sender
                  , h = a.Rg
                  , k = f.rc
                  , l = c.href;
                var m = ke(c.innerHTML && c.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                m || (m = (m = c.querySelector("img")) ? ke(m.getAttribute("title") || m.getAttribute("alt")) : "");
                m = l === m ? "" : m;
                var p = J(b, "isTrusted");
                if (Of("ym-external-link", c))
                    nj(d, f, {
                        url: l,
                        ob: !0,
                        title: m,
                        yc: p,
                        sender: g
                    });
                else {
                    k = k ? rh(d, k).hostname : T(d).hostname;
                    h = RegExp("\\.(" + S("|", M(Pa, h)) + ")$", "i");
                    var r = c.protocol + "//" + c.hostname + c.pathname;
                    h = sf.test(r) || sf.test(l) || h.test(l) || h.test(r);
                    c = c.hostname;
                    ee(k) === ee(c) ? h ? nj(d, f, {
                        url: l,
                        wc: !0,
                        yc: p,
                        title: m,
                        sender: g
                    }) : m && e.D("il", ke(m).slice(0, 100)) : l && rf.test(l) || nj(d, f, {
                        url: l,
                        Ac: !0,
                        ob: !0,
                        wc: h,
                        yc: p,
                        title: m,
                        sender: g
                    })
                }
            }
        }
    }
    var pj = oa(function(a, b) {
        y(b) ? a.push(b) : M(H(w, Va("push", a)), b)
    })
      , qj = Yd("retryReqs", function(a) {
        var b = Ff(a)
          , c = b.C("retryReqs", {})
          , d = Ed(a)(Ad);
        M(function(e) {
            var f = q(e);
            e = f.next().value;
            f = f.next().value;
            (!f || !f.time || f.time + 864E5 < d) && delete c[e]
        }, ac(c));
        b.D("retryReqs", c);
        return c
    }, !0);
    function rj(a) {
        var b = qj(a);
        Ff(a).D("retryReqs", b)
    }
    function sj(a, b) {
        var c = qj(a);
        b.K && !Qa(c) && b.M && (delete c[b.M.Pb],
        rj(a))
    }
    function tj(a, b) {
        return {
            R: function(c, d) {
                var e = c.K
                  , f = c.Ha
                  , g = c.H
                  , h = void 0 === c.N ? {} : c.N;
                if (e && g) {
                    var k = Ed(a);
                    e.Sb("rqnl", 1);
                    for (var l = qj(a), m = 1; l[m]; )
                        m += 1;
                    c.M || (c.M = {});
                    c.M.Pb = m;
                    var p = {};
                    l[m] = (p.protocol = Mc.La,
                    p.host = Kc,
                    p.resource = c.Ja.qa,
                    p.postParams = h.ba,
                    p.time = k(Ad),
                    p.counterType = b.ca,
                    p.params = g,
                    p.browserInfo = e.l(),
                    p.counterId = b.id,
                    p.ghid = mg(a),
                    p);
                    f && (l[m].telemetry = f.l());
                    rj(a)
                }
                d()
            },
            Ca: function(c, d) {
                sj(a, c);
                d()
            }
        }
    }
    var uj = H(Ma, qa(0))
      , vj = pa(uj)
      , wj = [vj("watch"), vj("clmap")]
      , xj = V("g.r", function(a) {
        var b = Ed(a)
          , c = qj(a)
          , d = b(Ad)
          , e = mg(a);
        return G(function(f, g) {
            var h = q(g)
              , k = h.next().value;
            (h = h.next().value) && Nb(sa(h.resource), wj) && !h.d && h.ghid && h.ghid !== e && h.time && 500 < d - h.time && h.time + 864E5 > d && 2 >= h.browserInfo.rqnl && (h.d = 1,
            k = {
                protocol: h.protocol,
                host: h.host,
                qa: h.resource,
                Nh: h.postParams,
                O: h.params,
                qg: h.browserInfo,
                Ni: h.ghid,
                time: h.time,
                Pb: Ub(k),
                Bg: h.counterId,
                ca: h.counterType
            },
            h.telemetry && (k.Ha = h.telemetry),
            f.push(k));
            return f
        }, [], ac(c))
    });
    function yj(a, b, c) {
        function d() {
            t || (r = !0,
            v = !1,
            t = !0,
            f())
        }
        function e() {
            m = !0;
            k(!1);
            b()
        }
        function f() {
            sg(a, l);
            if (m)
                k(!1);
            else {
                var Ga = Math.max(0, c - (v ? z : z + p(Ad) - P));
                Ga ? l = X(a, e, Ga, "u.t.d.c") : e()
            }
        }
        function g() {
            v = r = t = !0;
            z += p(Ad) - P;
            P = p(Ad);
            f()
        }
        function h() {
            r || t || (z = 0);
            P = p(Ad);
            r = t = !0;
            v = !1;
            f()
        }
        function k(Ga) {
            Ga = Ga ? W.F : W.Wb;
            Ga(a, ["blur"], g);
            Ga(a, ["focus"], h);
            Ga(a.document, ["click", "mousemove", "keydown", "scroll"], d)
        }
        var l = 0
          , m = !1;
        if (tc(a))
            return l = X(a, b, c, "u.t.d"),
            E([a, l], sg);
        var p = Ed(a)
          , r = !1
          , t = !1
          , v = !0
          , z = 0
          , P = p(Ad)
          , W = ud(a);
        k(!0);
        f();
        return function() {
            sg(a, l);
            k(!1)
        }
    }
    var zj = V("nb.p", function(a, b) {
        function c(z) {
            h() || (z = "number" === typeof z ? z : 15E3,
            v = yj(a, d(!1), z),
            l())
        }
        function d(z) {
            return function(P) {
                var W = {};
                P = void 0 === P ? (W.ctx = {},
                W.callback = u,
                W) : P;
                if (z || !r && !g.Jd) {
                    r = !0;
                    l();
                    v && v();
                    var Ga = m(Ad);
                    W = (Ub(g.C("lastHit")) || 0) < Ga - 18E5;
                    var Jc = .1 > Math.random();
                    g.D("lastHit", Ga);
                    Ga = {};
                    Ga = Le((Ga.nb = 1,
                    Ga.cl = t,
                    Ga.ar = 1,
                    Ga));
                    var Pd = Pi(b)
                      , gf = {};
                    Ga = {
                        H: (gf["page-url"] = Pd.url || T(a).href,
                        gf),
                        K: Ga,
                        M: {
                            force: z
                        }
                    };
                    Pd = Zh(a, O(b)).warn;
                    !P.callback && P.ctx && Pd("nbnc");
                    (W = z || W || Jc) || (W = a.location.href,
                    Jc = a.document.referrer,
                    W = !(W && Jc ? sh(W) === sh(Jc) : !W && !Jc));
                    if (W)
                        return W = e(Ga, b),
                        Oi(a, "l.o.l", W, P.callback, P.ctx)
                }
                return null
            }
        }
        var e = Sh(a, "n", b), f = O(b), g = Gf(a, b.id), h = F(F(f, Gi(a)), H(Qe, cb("accurateTrackBounce"))), k = {}, l = F((k.accurateTrackBounce = !0,
        k), Fi(a, f)), m = Ed(a), p = m(Ad), r = !1, t = 0, v;
        Xh(b, function(z) {
            t = z.Sg - p
        });
        b.Je && c(b.Je);
        f = {};
        f = (f.notBounce = d(!0),
        f.u = v,
        f);
        f.accurateTrackBounce = c;
        return f
    });
    function Aj(a) {
        return !(!va("querySelectorAll", J(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
    }
    function Bj(a, b) {
        if (!b || !b.querySelectorAll)
            return [];
        var c = b.querySelectorAll(a);
        return c ? ub(c) : []
    }
    function Cj(a, b) {
        if (b.querySelector)
            return b.querySelector(a);
        var c = Bj(a, b);
        return c && c.length ? c[0] : null
    }
    function Dj(a, b) {
        var c = Pe([], a)
          , d = c.shift();
        if (!d)
            return [];
        d = b.getElementsByTagName(d);
        return c.length ? Ib(F(c, Dj), ub(d)) : ub(d)
    }
    function Ej(a, b, c) {
        if (Aj(a))
            return ub(c.querySelectorAll(b));
        var d = Dj(b.split(" "), c);
        return mb(function(e, f) {
            return za(a)(e, d) === f
        }, d)
    }
    function Fj(a, b, c) {
        if (!(b && b.Element && b.Element.prototype && b.document && c))
            return null;
        if (b.Element.prototype.closest && va("closest", b.Element.prototype.closest) && c.closest)
            return c.closest(a);
        var d = Pf(b);
        if (d) {
            for (b = c; b && 1 === b.nodeType && !d.call(b, a); )
                b = b.parentElement || b.parentNode;
            return b && 1 === b.nodeType ? b : null
        }
        if (Aj(b)) {
            for (a = ub((b.document || b.ownerDocument).querySelectorAll(a)); c && 1 === c.nodeType && -1 === za(b)(c, a); )
                c = c.parentElement || c.parentNode;
            return c && 1 === c.nodeType ? c : null
        }
        return null
    }
    function Gj(a, b) {
        return I(b, "isConnected") ? !b.isConnected : Fj("html", a, b) !== a.document.documentElement
    }
    function Hj(a, b) {
        var c = b
          , d = J(a, "document")
          , e = Yf(c);
        if (!c || !c.ownerDocument || "PARAM" === e || c === Qf(a) || c === d.documentElement)
            return {
                left: 0,
                top: 0
            };
        if (d = Vf(c))
            return c = Uf(a),
            {
                left: Math.round(d.left + c.x),
                top: Math.round(d.top + c.y)
            };
        for (e = d = 0; c; )
            d += c.offsetLeft,
            e += c.offsetTop,
            c = c.offsetParent;
        return {
            left: d,
            top: e
        }
    }
    function Ij(a, b) {
        var c = J(a, "document");
        if (b === Qf(a) || b === c.documentElement) {
            c = Rf(a);
            var d = q(Tf(a))
              , e = d.next().value;
            d = d.next().value;
            return [Math.max(c.scrollWidth, e), Math.max(c.scrollHeight, d)]
        }
        return (c = Vf(b)) ? [c.width, c.height] : [b.offsetWidth, b.offsetHeight]
    }
    function Jj(a, b) {
        var c = Hj(a, b)
          , d = c.left;
        c = c.top;
        var e = q(Ij(a, b))
          , f = e.next().value;
        e = e.next().value;
        return [d, c, f, e]
    }
    function Kj(a, b) {
        var c = J(a, "document");
        return b && b !== c.documentElement ? b === Qf(a) ? c.documentElement : J(b, "parentNode") : null
    }
    function Lj(a, b, c) {
        if (a = Kj(a, b)) {
            a = a.childNodes;
            for (var d = b && b.nodeName, e = 0, f = 0; f < a.length; f += 1)
                if (d === (a[f] && a[f].nodeName)) {
                    if (b === a[f])
                        return e;
                    c && a[f] === c || (e += 1)
                }
        }
        return 0
    }
    var Mj = x(function() {
        for (var a = 59, b = {}, c = 0; c < pf.length; c += 1)
            b[pf[c]] = String.fromCharCode(a),
            a += 1;
        return b
    });
    function Nj(a, b, c) {
        for (var d = "", e = Mj(), f = Yf(b) || "*"; b && b.parentNode && !K(f, ["BODY", "HTML"]); )
            d += e[f] || "*",
            d += Lj(a, b, c) || "",
            b = b.parentElement,
            f = Yf(b) || "*";
        return ke(d, 128)
    }
    function Oj(a) {
        var b = ["ym-disable-keys", "-metrika-nokeys"];
        b = L(b) ? b : [b];
        a = a || document;
        if (a.querySelectorAll)
            return b = S(", ", M(function(c) {
                return "." + c
            }, b)),
            ub(a.querySelectorAll(b));
        if (a.getElementsByClassName)
            return Ib(H(Va("getElementsByClassName", a), ub), b);
        a = a.getElementsByTagName("*");
        b = "(" + S("|", b) + ")";
        return mb(F(b, Of), ub(a))
    }
    function Pj(a, b) {
        var c = Rf(a)
          , d = Uf(a);
        return {
            x: b.pageX || b.clientX + d.x - (c.clientLeft || 0) || 0,
            y: b.pageY || b.clientY + d.y - (c.clientTop || 0) || 0
        }
    }
    function Qj(a) {
        var b = a.which;
        a = a.button;
        return b || void 0 === a ? b : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
    }
    function Rj(a, b) {
        var c = null;
        try {
            if (c = b.target || b.srcElement)
                !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== a.document && (c = null)
        } catch (d) {}
        return c
    }
    var Sj = oa(Of)("(ym-disable-clickmap|ym-clickmap-ignore)");
    function Tj(a, b, c, d, e) {
        if (I(a, "ymDisabledClickmap") || !b || !b.element)
            return !1;
        a = Yf(b.element);
        if (e && !e(b.element, a) || K(b.button, [2, 3]) && "A" !== a || Nb(qa(a), d))
            return !1;
        d = b.element;
        if (b && c) {
            if (50 > b.time - c.time)
                return !1;
            e = Math.abs(c.position.x - b.position.x);
            a = Math.abs(c.position.y - b.position.y);
            b = b.time - c.time;
            if (c.element === d && 2 > e && 2 > a && 1E3 > b)
                return !1
        }
        for (; d; ) {
            if (Sj(d))
                return !1;
            d = d.parentElement
        }
        return !0
    }
    function Uj(a, b, c, d, e) {
        var f = "clmap/" + e.id
          , g = {};
        b = (g["page-url"] = b,
        g["pointer-click"] = c,
        g);
        f = {
            K: Le(),
            H: b,
            Ja: {
                qa: f
            }
        };
        d(f, e)["catch"](U(a, "c.s.c"))
    }
    var Vj = V("clm.p", function(a, b) {
        if (hc(a))
            return u;
        var c = Sh(a, "m", b), d = O(b), e = Ed(a), f = e(Ad), g = F(F(d, Gi(a)), H(Qe, cb("clickmap"))), h, k = null;
        d = U(a, "clm.p.c", function(l) {
            var m = g();
            if (m) {
                var p = Q(a)
                  , r = p.C("cls", {
                    dc: 0,
                    x: 0,
                    y: 0
                });
                p.D("cls", {
                    dc: r.dc + 1,
                    x: r.x + l.clientX,
                    y: r.y + l.clientY
                });
                p = "object" === typeof m ? m : {};
                r = p.filter;
                m = p.isTrackHash || !1;
                var t = M(function(z) {
                    return ("" + z).toUpperCase()
                }, p.ignoreTags || []);
                B(h) && (h = p.quota || null);
                var v = !!p.quota;
                l = {
                    element: Rj(a, l),
                    position: Pj(a, l),
                    button: Qj(l),
                    time: e(Ad)
                };
                p = T(a).href;
                if (Tj(a, l, k, t, r)) {
                    if (v) {
                        if (!h)
                            return;
                        --h
                    }
                    t = q(Ij(a, l.element));
                    r = t.next().value;
                    t = t.next().value;
                    v = Hj(a, l.element);
                    r = ["rn", Xd(a), "x", Math.floor(65535 * (l.position.x - v.left) / (r || 1)), "y", Math.floor(65535 * (l.position.y - v.top) / (t || 1)), "t", Math.floor((l.time - f) / 100), "p", Nj(a, l.element), "X", l.position.x, "Y", l.position.y];
                    r = S(":", r);
                    m && (r += ":wh:1");
                    Uj(a, p, r, c, b);
                    k = l
                }
            }
        });
        return ud(a).F(J(a, "document"), ["click"], d)
    })
      , Wj = V("trigger.in", function(a, b) {
        b.Wf && bi(a, E([a, "yacounter" + b.id + "inited"], Wf), "t.i")
    });
    function Xj(a, b) {
        var c = {};
        a((c.clickmap = B(b) ? !0 : b,
        c))
    }
    var Yj = V("c.m.p", function(a, b) {
        var c = O(b)
          , d = {};
        return d.clickmap = F(Fi(a, c), Xj),
        d
    });
    function Zj(a) {
        a = "" + a;
        for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1)
            b ^= a.charCodeAt(d),
            b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    }
    var ak = {}
      , bk = {};
    ak.p = 500;
    var ck = {
        i: "id",
        n: "name",
        h: "href",
        ty: "type"
    };
    bk.h = !0;
    bk.c = !0;
    var dk = {
        p: function(a, b, c) {
            if (b && Gj(a, b) && b._ymp)
                return b._ymp;
            a = Nj(a, b, c);
            b && (b._ymp = a);
            return a
        },
        c: function(a, b, c) {
            (a = ke(J(b, "textContent"))) && c && (c = c(b),
            c.length && Nb(H(cb("textContent"), ke, qa(a)), c) && (a = ""));
            $f(b) && (a = ke(b.getAttribute && b.getAttribute("value") || a));
            return a
        }
    };
    function ek(a, b, c, d) {
        return G(function(e, f) {
            var g = null;
            f in ck ? g = b.getAttribute && b.getAttribute(ck[f]) : f in dk && (g = "p" === f ? dk[f](a, b, void 0) : "c" === f ? dk[f](a, b, d) : dk[f](a, b));
            g && (g = g.slice(0, ak[f] || 100),
            e[f] = bk[f] ? "" + Zj(g) : g);
            return e
        }, {}, c)
    }
    var fk = F("form", Fj)
      , gk = x(H(Ca, pa(Xh)(cb("settings.form_goals"))), Ca);
    function hk(a, b, c, d) {
        return gk(a, b).then(H(E([ai(a, b, c, d), u], gb), Qe))
    }
    function ik(a, b, c, d, e, f) {
        var g = za(b)(e, d)
          , h = -1 !== g;
        if (a || h)
            h && d.splice(g, 1),
            a = ek(b, e, ["i", "n", "p"]),
            a = "?" + Wd(a),
            d = {},
            d = E([b, c, "fg", (d.id = c.id,
            d.query = a,
            d)], hk),
            C(f) ? f = void 0 : (e = {},
            g = {},
            f = (g.__ym = (e.ite = ib(f),
            e),
            g)),
            ej(b, c, "form", d).reachGoal(a, f)
    }
    function jk(a, b, c, d) {
        var e = J(d, "target");
        e && (d = J(d, "isTrusted"),
        (e = Fj("button,input", a, e)) && "submit" === e.type && (e = fk(a, e))) && (c.push(e),
        X(a, E([!1, a, b, c, e, d], ik), 300))
    }
    var kk = V("s.f.i", function(a, b) {
        var c = []
          , d = []
          , e = ud(a);
        c.push(e.F(a, ["click"], U(a, "s.f.c", E([a, b, d], jk))));
        c.push(e.F(a, ["submit"], U(a, "s.f.e", function(f) {
            var g = J(f, "target");
            f = J(f, "isTrusted");
            ik(!0, a, b, d, g, f)
        })));
        e = {};
        hk(a, b, "fgi", (e.id = b.id,
        e));
        return E([Re, c], M)
    });
    function lk(a, b, c, d) {
        return function() {
            if (gi(a, b)) {
                var e = Ha(arguments);
                return d.apply(null, ca(e))
            }
        }
    }
    var mk = "button," + S(",", M(function(a) {
        return 'input[type="' + a + '"]'
    }, ["button", "submit", "reset", "file"])) + ",a"
      , nk = F(mk, Bj)
      , ok = {}
      , pk = (ok.A = "h",
    ok.BUTTON = "i",
    ok.DIV = "i",
    ok.INPUT = "ty",
    ok);
    function qk(a, b, c) {
        var d = J(c, "target");
        if (d) {
            var e = Fj(mk, a, d);
            e || (d = Fj("div", a, d)) && (Bj(mk + ",div", d).length || (e = d));
            if (e = (d = Yf(e)) && ek(a, e, nb(["p", pk[d], "c"]), nk)) {
                e = "?" + Wd(e);
                d = {};
                d = ai(a, b, "gbn", (d.id = b.id,
                d.query = e,
                d));
                c = J(c, "isTrusted");
                if (C(c))
                    c = void 0;
                else {
                    var f = {}
                      , g = {};
                    c = (g.__ym = (f.ite = ib(c),
                    f),
                    g)
                }
                ej(a, b, "btn", d).reachGoal(e, c)
            }
        }
    }
    var rk = V("s.f.i", function(a, b) {
        return Xh(b, function(c) {
            if (J(c, "settings.button_goals")) {
                c = ud(a).F(a, ["click"], U(a, "c.t.c", H(E([a, b], lk(a, b, "", qk)))));
                var d = {};
                ai(a, b, "gbi", (d.id = b.id,
                d))();
                return c
            }
        })
    })
      , sk = {}
      , tk = (sk.transaction_id = "id",
    sk.item_brand = "brand",
    sk.index = "position",
    sk.item_variant = "variant",
    sk.value = "revenue",
    sk.item_category = "category",
    sk.item_list_name = "list",
    sk)
      , uk = {}
      , vk = (uk.item_id = "id",
    uk.item_name = "name",
    uk.promotion_name = "coupon",
    uk)
      , wk = {}
      , xk = (wk.promotion_name = "name",
    wk)
      , yk = {}
      , zk = (yk.promotion_name = "name",
    yk.promotion_id = "id",
    yk.item_id = "product_id",
    yk.item_name = "product_name",
    yk)
      , Ak = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" ")
      , Bk = {}
      , Ck = (Bk.view_item = {
        event: "detail",
        ya: vk,
        Ia: "products"
    },
    Bk.add_to_cart = {
        event: "add",
        ya: vk,
        Ia: "products"
    },
    Bk.remove_from_cart = {
        event: "remove",
        ya: vk,
        Ia: "products"
    },
    Bk.begin_checkout = {
        event: "checkout",
        ya: vk,
        Ia: "products"
    },
    Bk.purchase = {
        event: "purchase",
        ya: vk,
        Ia: "products"
    },
    Bk.view_item_list = {
        event: "impressions",
        ya: vk
    },
    Bk.select_item = {
        event: "click",
        Ia: "products",
        ya: vk
    },
    Bk.view_promotion = {
        event: "promoView",
        Ia: "promotions",
        ya: zk
    },
    Bk.select_promotion = {
        event: "promoClick",
        Ia: "promotions",
        ya: zk
    },
    Bk);
    function Dk(a, b) {
        var c = {};
        M(function(d) {
            var e = a[d] || tk[d] || d;
            -1 !== La(d, "item_category") ? (e = tk.item_category,
            c[e] = c[e] ? c[e] + ("/" + b[d]) : b[d]) : c[e] = b[d]
        }, bc(b));
        return c
    }
    function Ek(a, b) {
        var c = y(a) ? Ck[a] : a;
        if (c) {
            var d = c.event
              , e = c.Ia
              , f = void 0 === c.af ? "items" : c.af
              , g = b.purchase || b
              , h = g[f];
            if (h) {
                c = M(F(c.ya, Dk), h);
                h = {};
                var k = {}
                  , l = (k[d] = e ? (h[e] = c,
                h) : c,
                k);
                c = bc(g);
                e && 1 < c.length && (l[d].actionField = G(function(m, p) {
                    if (p === f)
                        return m;
                    if ("currency" === p)
                        return l.currencyCode = g.currency,
                        m;
                    m[xk[p] || tk[p] || p] = g[p];
                    return m
                }, {}, c));
                return l
            }
        }
    }
    var Fk = V("dl.w", function(a, b, c) {
        function d() {
            var g = J(a, b);
            (e = L(g) && Yi(a, g, c)) || (f = X(a, d, 1E3, "ec.dl"))
        }
        var e, f = 0;
        d();
        return function() {
            return sg(a, f)
        }
    });
    function Gk(a) {
        var b = J(a, "ecommerce");
        if (Ra(b))
            return a = mb(rb(Ak), bc(b)),
            a = G(function(c, d) {
                c[d] = b[d];
                return c
            }, {}, a),
            0 === bc(a).length ? void 0 : a
    }
    function Hk(a, b, c, d) {
        if (c) {
            var e = J(d, "ecommerce") || {};
            var f = J(d, "event") || "";
            e = Ra(e) && y(f) ? Ek(f, e) : void 0;
            if (!e)
                a: {
                    e = d;
                    !L(d) && Rb(a, db(d)) && (e = Ha(e));
                    if (L(e)) {
                        var g = q(e);
                        e = g.next().value;
                        f = g.next().value;
                        g = g.next().value;
                        if (y(f) && Ra(g) && "event" === e) {
                            e = Ek(f, g);
                            break a
                        }
                    }
                    e = void 0
                }
            if (d = e || Gk(d))
                e = {},
                Fe(a, (e.counterKey = b,
                e.name = "ecommerce",
                e.data = d,
                e)),
                a = {},
                b = {},
                c((b.__ym = (a.ecommerce = [d],
                a),
                b))
        }
    }
    function Ik(a, b, c) {
        var d;
        a = [Fk(a, b, function(e) {
            d = e;
            e.oa.F(c)
        }), function() {
            d && d.unsubscribe()
        }
        ];
        return E([Re, a], M)
    }
    var Jk = V("p.e", function(a, b) {
        var c = gi(a, b);
        if (c) {
            var d = Q(a);
            c = c.params;
            var e = U(a, "h.ee", E([a, O(b), c], Hk));
            return b.od ? (d.D("ecs", 0),
            Ik(a, b.od, e)) : Xh(b, function(f) {
                if ((f = J(f, "settings.ecommerce")) && y(f))
                    return d.D("ecs", 1),
                    Ik(a, f, e)
            })
        }
    });
    function Kk(a, b) {
        var c = []
          , d = H(w, Va("push", c));
        if (A()) {
            var e = (void 0)(b);
            (C(e) || e === a.NodeFilter.FILTER_ACCEPT) && d(b)
        } else
            d(b);
        if (b.childNodes && 0 < b.childNodes.length) {
            e = b.childNodes;
            for (var f = 0, g = e.length; f < g; f += 1) {
                var h = Kk(a, e[f]);
                M(d, h)
            }
        }
        return c
    }
    function Lk(a, b, c, d, e, f) {
        function g(k) {
            return A(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
        }
        e = void 0 === e ? -1 : e;
        f = void 0 === f ? !1 : f;
        var h = g(b);
        if (A(c) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && c(b),
        !Hf(b)))
            for (b = a.document.createTreeWalker(b, e, d ? {
                acceptNode: g
            } : null, !1); b.nextNode() && !1 !== c(b.currentNode); )
                ;
    }
    function Mk(a, b, c) {
        if (b) {
            var d = [];
            b && (a.document.documentElement.contains(b) ? Lk(a, b, Va("push", d)) : Pe(d, Kk(a, b)));
            M(c, d)
        }
    }
    var Nk = x(function(a) {
        a = T(a);
        a = Vd(a.search.substring(1));
        return {
            id: Ub(a["_ym_status-check"] || ""),
            lang: a._ym_lang || "ru"
        }
    })
      , Ok = V("suid.int", function(a, b) {
        var c = {};
        return c.setUserID = function(d, e, f) {
            if (y(d) || Rb(a, d)) {
                var g = gi(a, b);
                d = eb(["__ym", "user_id", d]);
                g.params(d, e || u, f)
            } else
                Zh(a, O(b)).error("wuid")
        }
        ,
        c
    })
      , Pk = V("up.int", function(a, b) {
        var c = {};
        return c.userParams = U(a, "up.c", function(d, e, f) {
            var g = gi(a, b)
              , h = Zh(a, O(b)).warn;
            g ? Ra(d) ? (h = {},
            d = (h.__ymu = d,
            h),
            (g = g.params) && g(d, e || u, f)) : h("wup") : h("nci")
        }),
        c
    })
      , Qk = /[\*\.\?\(\)]/g
      , Rk = x(function(a, b, c) {
        try {
            var d = c.replace("\\s", " ").replace(Qk, "");
            b = {};
            Zh(a, "").warn("nnw", (b.name = d,
            b))
        } catch (e) {}
    }, Ca)
      , Sk = V("r.nn", function(a) {
        Be(a) && Yi(a, ta, function(b) {
            b.oa.F(function(c) {
                var d = q(c);
                c = d.next().value;
                d = d.next().value;
                Rk(a, d, c);
                ta.splice(100)
            })
        })
    })
      , Tk = V("e.a.p", function(a, b) {
        var c = gi(a, b);
        c = E([H(w, sa(!0)), nb(M(F(c, J), ["clickmap", "trackLinks", "accurateTrackBounce"]))], M);
        b.Lg && c();
        var d = {};
        return d.enableAll = c,
        d
    });
    function Uk(a, b) {
        return {
            R: function(c, d) {
                ah(c) ? d() : Xh(b, function(e) {
                    if (e = J(e, "settings.hittoken")) {
                        var f = {};
                        e = (f.hittoken = e,
                        f);
                        c.H = N(c.H || {}, e)
                    }
                    d()
                })
            }
        }
    }
    var Vk = x(Ce, O)
      , Wk = V("fpi", function(a) {
        var b = vd(a);
        if (b && !a.document.hidden) {
            var c = Q(a).ra;
            c("fpe", 1);
            var d = ud(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                a.document.hidden && (c("fht", b.now()),
                d())
            })
        }
    })
      , Xk = x(function(a) {
        a = J(a, "console");
        var b = J(a, "log");
        b = ua("log", b) ? D(b, a) : u;
        var c = J(a, "warn");
        c = ua("warn", c) ? D(c, a) : b;
        var d = J(a, "error");
        a = ua("error", d) ? D(d, a) : b;
        return {
            log: b,
            error: a,
            warn: c
        }
    });
    function Yk(a, b, c) {
        var d = !1
          , e = "";
        if (!Ra(b))
            return $h(c, "", "ecomeo"),
            d;
        var f = b.goods;
        switch (a) {
        case "detail":
        case "add":
        case "remove":
            L(f) && f.length ? (d = Qb(function(g) {
                return Ra(g) && (y(g.id) || Rb(c, g.id) || y(g.name))
            }, f)) || (e = "ecomgi") : e = "ecomgei";
            break;
        case "purchase":
            Rb(c, b.id) || y(b.id) ? d = !0 : e = "ecompi"
        }
        $h(c, "", e);
        return d
    }
    function Zk(a, b, c) {
        return function(d) {
            var e = gi(b, c);
            if (e && Yk(a, d, b) && (e = D(e.params, e),
            (d = Ek({
                event: a,
                Ia: "products",
                ya: vk,
                af: "goods"
            }, d)) && e)) {
                var f = {}
                  , g = {};
                e((g.__ym = (f.ecommerce = [d],
                f),
                g))
            }
        }
    }
    var $k = F("add", Zk)
      , al = F("remove", Zk)
      , bl = F("detail", Zk)
      , cl = F("purchase", Zk)
      , dl = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" ")
      , el = x(function(a) {
        var b = yb(a);
        a = b.Yf;
        if (!b.ff)
            return !1;
        b = Va("indexOf", a);
        b = Nb(H(b, qa(-1), Da), dl);
        var c = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a)
          , d = /YaBrowser\/[\d.]+/.test(a)
          , e = /Mobile/.test(a);
        return b || c || d && e || !/Safari/.test(a) && e
    })
      , fl = x(function(a) {
        var b = Ab(a);
        return b ? Na(b, "YangoEats") || nc(a) : !1
    })
      , gl = /([0-9\\.]+) Safari/
      , hl = /\sYptp\/\d\.(\d+)\s/;
    function il(a) {
        return kc(a) && (a = Ab(a).match(gl)) && a.length ? "14.1" === a[1] : !1
    }
    var jl = x(function(a) {
        var b;
        a: {
            if ((b = Ab(a)) && (b = hl.exec(b)) && 1 < b.length) {
                b = Ub(b[1]);
                break a
            }
            b = 0
        }
        return 50 <= b && 99 >= b || Fc(a) ? !1 : !Dc(a) || el(a)
    });
    function kl(a, b, c, d, e, f, g, h) {
        var k = c.C(f);
        C(k) && (c.D(f, g),
        e(a, b, c, d),
        k = c.C(f, g));
        B(h) || h.Sb(f, "" + k);
        return k
    }
    var ll = []
      , ml = !1
      , nl = !1;
    function ol(a) {
        if (ll.length) {
            var b = ll.shift();
            nl ? b() : X(a, b, 100)
        } else
            ml = !1
    }
    function pl(a, b, c, d) {
        c = void 0 === c ? 1 : c;
        d = void 0 === d ? Od : d;
        nl = Infinity === c;
        return sa(function(e, f) {
            function g() {
                try {
                    var k = b(d(a, c));
                    h = h.concat(k)
                } catch (l) {
                    return e(l)
                }
                b(Jd);
                if (b(Gd))
                    return f(h),
                    ol(a);
                nl ? (b(d(a, 1E4)),
                f(h),
                ol(a)) : X(a, g, 100)
            }
            var h = [];
            ml ? ll.push(g) : (ml = !0,
            g())
        })
    }
    var ql = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";")
      , rl = x(function(a) {
        a = Lf(a)("canvas");
        var b = J(a, "getContext");
        if (!b)
            return null;
        try {
            var c = D(b, a)("2d");
            c.font = "72px mmmmmmmmmmlli";
            var d = c.measureText("mmmmmmmmmmlli").width;
            return function(e) {
                c.font = "72px " + e;
                return c.measureText("mmmmmmmmmmlli").width === d
            }
        } catch (e) {
            return null
        }
    })
      , sl = wa(String.prototype.repeat, "repeat");
    function tl(a, b) {
        for (var c = "", d = 0; d < b; d += 1)
            c += a;
        return c
    }
    var ul = sl ? function(a, b) {
        return sl.call(a, b)
    }
    : tl
      , vl = F(!0, function(a, b, c, d) {
        c = b.length && (c - d.length) / b.length;
        if (0 >= c)
            return d;
        b = ul(b, c);
        return a ? b + d : d + b
    });
    function wl(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] * b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] * b[3];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[2] += a[3] * b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] * b[3];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[2] * b[2];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[3] * b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
    }
    function xl(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] + b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] + b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] + b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] + b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
    }
    function yl(a, b) {
        b %= 64;
        if (32 === b)
            return [a[1], a[0]];
        if (32 > b)
            return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
        b -= 32;
        return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b]
    }
    function zl(a, b) {
        b %= 64;
        return 0 === b ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
    }
    function Al(a, b) {
        return [a[0] ^ b[0], a[1] ^ b[1]]
    }
    function Bl(a) {
        a = Al(a, [0, a[0] >>> 1]);
        a = wl(a, [4283543511, 3981806797]);
        a = Al(a, [0, a[0] >>> 1]);
        a = wl(a, [3301882366, 444984403]);
        return a = Al(a, [0, a[0] >>> 1])
    }
    var Cl = [2277735313, 289559509]
      , Dl = [1291169091, 658871167];
    function El(a, b) {
        var c = a || ""
          , d = (void 0 === b ? 210 : b) || 0
          , e = c.length - c.length % 16
          , f = [0, d];
        d = [0, d];
        for (var g = 0; g < e; g += 16) {
            var h = [a.charCodeAt(g + 4) & 255 | (a.charCodeAt(g + 5) & 255) << 8 | (a.charCodeAt(g + 6) & 255) << 16 | (a.charCodeAt(g + 7) & 255) << 24, a.charCodeAt(g) & 255 | (a.charCodeAt(g + 1) & 255) << 8 | (a.charCodeAt(g + 2) & 255) << 16 | (a.charCodeAt(g + 3) & 255) << 24]
              , k = [a.charCodeAt(g + 12) & 255 | (a.charCodeAt(g + 13) & 255) << 8 | (a.charCodeAt(g + 14) & 255) << 16 | (a.charCodeAt(g + 15) & 255) << 24, a.charCodeAt(g + 8) & 255 | (a.charCodeAt(g + 9) & 255) << 8 | (a.charCodeAt(g + 10) & 255) << 16 | (a.charCodeAt(g + 11) & 255) << 24];
            h = wl(h, Cl);
            h = yl(h, 31);
            h = wl(h, Dl);
            f = Al(f, h);
            f = yl(f, 27);
            f = xl(f, d);
            f = xl(wl(f, [0, 5]), [0, 1390208809]);
            k = wl(k, Dl);
            k = yl(k, 33);
            k = wl(k, Cl);
            d = Al(d, k);
            d = yl(d, 31);
            d = xl(d, f);
            d = xl(wl(d, [0, 5]), [0, 944331445])
        }
        e = c.length % 16;
        g = c.length - e;
        h = [0, 0];
        k = [0, 0];
        switch (e) {
        case 15:
            k = Al(k, zl([0, c.charCodeAt(g + 14)], 48));
        case 14:
            k = Al(k, zl([0, c.charCodeAt(g + 13)], 40));
        case 13:
            k = Al(k, zl([0, c.charCodeAt(g + 12)], 32));
        case 12:
            k = Al(k, zl([0, c.charCodeAt(g + 11)], 24));
        case 11:
            k = Al(k, zl([0, c.charCodeAt(g + 10)], 16));
        case 10:
            k = Al(k, zl([0, c.charCodeAt(g + 9)], 8));
        case 9:
            k = Al(k, [0, c.charCodeAt(g + 8)]),
            k = wl(k, Dl),
            k = yl(k, 33),
            k = wl(k, Cl),
            d = Al(d, k);
        case 8:
            h = Al(h, zl([0, c.charCodeAt(g + 7)], 56));
        case 7:
            h = Al(h, zl([0, c.charCodeAt(g + 6)], 48));
        case 6:
            h = Al(h, zl([0, c.charCodeAt(g + 5)], 40));
        case 5:
            h = Al(h, zl([0, c.charCodeAt(g + 4)], 32));
        case 4:
            h = Al(h, zl([0, c.charCodeAt(g + 3)], 24));
        case 3:
            h = Al(h, zl([0, c.charCodeAt(g + 2)], 16));
        case 2:
            h = Al(h, zl([0, c.charCodeAt(g + 1)], 8));
        case 1:
            h = Al(h, [0, c.charCodeAt(g)]),
            h = wl(h, Cl),
            h = yl(h, 31),
            h = wl(h, Dl),
            f = Al(f, h)
        }
        f = Al(f, [0, c.length]);
        d = Al(d, [0, c.length]);
        f = xl(f, d);
        d = xl(d, f);
        f = Bl(f);
        d = Bl(d);
        f = xl(f, d);
        d = xl(d, f);
        return ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
    }
    var Fl = V("p.cd", function(a) {
        if (qc(a) || ic(a)) {
            var b = Ff(a);
            if (C(b.C("jn"))) {
                b.D("jn", !1);
                var c = a.chrome || kc(a) ? function() {}
                : /./;
                a = Xk(a);
                c.toString = function() {
                    b.D("jn", !0);
                    return "Yandex.Metrika counter is initialized"
                }
                ;
                a.log("%c%s", "color: inherit", c)
            }
        }
    });
    function Gl(a, b) {
        return Array.prototype.sort.call(b, a)
    }
    var Hl = oa(Gl);
    function Il(a) {
        return S(",", [a.description, a.suffixes, a.type])
    }
    function Jl(a) {
        try {
            var b = db(a) ? a : [];
            return S(",", [a.name, a.description, H(ub, nb, Jb(Il), pd(","))(b)])
        } catch (c) {
            return ""
        }
    }
    var Kl = x(function(a) {
        a = J(a, "navigator.plugins");
        return !!(a && db(a) && Nb(H(cb("name"), Wa(/Chrome PDF Viewer/)), a))
    })
      , Ll = oa(function(a, b) {
        return Q(b).C(a, null)
    })
      , Ml = ["bl", "mf", "ntq", "rt"]
      , Nl = {
        "*": "+",
        "-": "/",
        Bi: "=",
        "+": "*",
        "/": "-",
        "=": "_"
    };
    function Ol(a) {
        return a ? a.replace(/[+/=]/g, function(b) {
            return Nl[b] || b
        }) : ""
    }
    function Pl(a) {
        var b = ""
          , c = 0;
        if (!a)
            return "";
        for (; a.length % 4; )
            a += "=";
        do {
            var d = Ma("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , e = Ma("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , f = Ma("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , g = Ma("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++));
            if (0 > d || 0 > e || 0 > f || 0 > g)
                return "";
            var h = d << 18 | e << 12 | f << 6 | g;
            d = h >> 16 & 255;
            e = h >> 8 & 255;
            h &= 255;
            b = 64 === f ? b + String.fromCharCode(d) : 64 === g ? b + String.fromCharCode(d, e) : b + String.fromCharCode(d, e, h)
        } while (c < a.length);
        return b
    }
    function Ql(a, b) {
        b = void 0 === b ? !1 : b;
        for (var c = a.length, d = c - c % 3, e = [], f = 0; f < d; f += 3) {
            var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
        }
        switch (c - d) {
        case 1:
            c = a[d] << 4;
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=", "=");
            break;
        case 2:
            c = (a[d] << 10) + (a[d + 1] << 2),
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=")
        }
        e = S("", e);
        return b ? Ol(e) : e
    }
    function Rl(a) {
        for (var b = "", c = 0; c < a.length; ) {
            var d = a.charCodeAt(c);
            128 > d ? (b += String.fromCharCode(d),
            c++) : 191 < d && 224 > d ? (b += String.fromCharCode((d & 31) << 6 | a.charCodeAt(c + 1) & 63),
            c += 2) : (b += String.fromCharCode((d & 15) << 12 | (a.charCodeAt(c + 1) & 63) << 6 | a.charCodeAt(c + 2) & 63),
            c += 3)
        }
        return b
    }
    function Sl(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224),
            b.push(d >> 6 & 63 | 128)),
            b.push(d & 63 | 128))
        }
        return b
    }
    function Tl(a) {
        return a ? Ql(Sl(a)) : null
    }
    var Ul = x(function(a) {
        return zb(/tizen/i, a)
    });
    function Vl(a) {
        if (!Ul(a))
            return null;
        a = J(a, "webapis.adinfo.getTIFA");
        if (A(a))
            try {
                return Tl(a())
            } catch (b) {}
        return null
    }
    function Wl(a) {
        if (!Ul(a))
            return null;
        a = J(a, "tizen.systeminfo.getCapability");
        if (A(a))
            try {
                return Tl(a("http://tizen.org/system/tizenid"))
            } catch (b) {}
        return null
    }
    function Xl(a) {
        if (!Ul(a))
            return null;
        a = J(a, "tizen.systeminfo.getCapabilities");
        try {
            if (A(a))
                return Tl(J(a(), "duid"))
        } catch (b) {}
        return null
    }
    var Yl = x(function(a) {
        return zb(/webos|web0s/i, a)
    });
    function Zl(a) {
        var b = J(a, "webOS.service.request");
        return A(b) ? new R(function(c) {
            var d = {}
              , e = {};
            b("luna://com.webos.service.sm", (e.method = "deviceid/getIDs",
            e.parameters = (d.idType = ["LGUDID"],
            d),
            e.onSuccess = function(f) {
                c(Tl(J(f, "idList.0.idValue")))
            }
            ,
            e))
        }
        ) : R.resolve(null)
    }
    var $l = x(function(a) {
        return A(J(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
    });
    function am(a, b) {
        try {
            var c = b.localStorage.getItem(a);
            return c && Ql(Sl(c))
        } catch (d) {}
        return null
    }
    var bm = x(F("panoramaId", am))
      , cm = x(function(a) {
        return am("pubcid.org", a) || am("_pubCommonId", a)
    })
      , dm = x(F("_sharedid", am))
      , em = x(function(a, b) {
        if (b.Ua)
            return null;
        var c = ze(a, "").C("_ga");
        return c && Ql(Sl(c))
    }, H(Ca, O))
      , fm = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, b) {
        return J(b, "redirectCount") || J(a, "navigation.redirectCount")
    }
    ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]]
      , gm = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]]
      , hm = {}
      , im = (hm.responseEnd = 1,
    hm.domInteractive = 1,
    hm.domContentLoadedEventStart = 1,
    hm.domContentLoadedEventEnd = 1,
    hm.domComplete = 1,
    hm.loadEventStart = 1,
    hm.loadEventEnd = 1,
    hm.unloadEventStart = 1,
    hm.unloadEventEnd = 1,
    hm.secureConnectionStart = 1,
    hm)
      , jm = x(De);
    function km(a, b, c) {
        return M(function(d) {
            var e = q(d)
              , f = e.next().value;
            e = e.next().value;
            if (A(f))
                return f(a, b) || null;
            if (1 === d.length)
                return b[f] ? Math.round(b[f]) : null;
            var g;
            !(g = b[f] && b[e]) && (g = 0 === b[f] && 0 === b[e]) && (g = q(d),
            d = g.next().value,
            g = g.next().value,
            g = !(im[d] || im[g]));
            if (!g)
                return null;
            f = Math.round(b[f]) - Math.round(b[e]);
            return 0 > f || 36E5 < f ? null : f
        }, c)
    }
    function lm(a, b) {
        var c = a.length ? M(function(d, e) {
            var f = b[e];
            return f === d ? null : f
        }, a) : b;
        a.length = 0;
        M(H(w, Va("push", a)), b);
        return mb(qa(null), c).length === a.length ? null : c
    }
    function mm(a, b, c) {
        if ((void 0 === c.H ? {} : c.H).nohit)
            return null;
        a = vd(a);
        if (!a)
            return null;
        var d = c = null;
        J(a, "getEntriesByType") && (d = J(a.getEntriesByType("navigation"), "0")) && (c = gm);
        if (!c) {
            var e = J(a, "timing");
            e && (c = fm,
            d = e)
        }
        if (!c)
            return null;
        a = km(a, d, c);
        b = O(b);
        b = jm(b);
        return (b = lm(b, a)) && S(",", b)
    }
    var nm = x(Ce)
      , om = x(function(a) {
        var b = J(a, "webkitRequestFileSystem");
        if (A(b) && !qc(a))
            return (new R(D(b, a, 0, 0))).then(function() {
                var d = J(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {}
            }).then(function(d) {
                return (d = d.quota) && 12E7 > d ? !0 : !1
            })["catch"](F(!0, w));
        if (Cb(a))
            return b = J(a, "navigator.serviceWorker"),
            R.resolve(B(b));
        b = J(a, "openDatabase");
        if (kc(a) && A(b)) {
            var c = !1;
            try {
                b(null, null, null, null)
            } catch (d) {
                c = !0
            }
            return R.resolve(c)
        }
        return R.resolve(!J(a, "indexedDB") && (J(a, "PointerEvent") || J(a, "MSPointerEvent")))
    });
    function pm(a) {
        if (nc(a))
            return null;
        var b = nm(a)
          , c = b.tf;
        B(c) && (b.tf = null,
        om(a).then(function(d) {
            b.tf = d
        }));
        return c ? 1 : null
    }
    var qm = /(\?|&)turbo_uid=([\w\d]+)($|&)/
      , rm = x(function(a, b) {
        var c = Ae(a)
          , d = T(a).search.match(qm);
        return d && 2 <= d.length ? (d = q(d),
        d.next(),
        d.next(),
        d = d.next().value,
        b.Ua || c.D("turbo_uid", d),
        d) : (c = c.C("turbo_uid")) ? c : ""
    })
      , sm = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]]
      , tm = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]]
      , um = {
        H: {
            t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
        }
    }
      , vm = {
        Qf: 60,
        error: 15
    }
      , wm = {
        Qf: 5,
        error: 1
    }
      , xm = {
        id: 42822899,
        ca: "0"
    }
      , zm = V("pa.plgn", function(a, b) {
        var c = Vi(a, b);
        c && c.Z.F(["pluginInfo"], U(a, "c.plgn", function() {
            var d = Q(a);
            d.D("cmc", d.C("cmc", 0) + 1);
            return We(b)
        }))
    })
      , Am = {}
      , Bm = (Am.am = "com.am",
    Am.tr = "com.tr",
    Am.ge = "com.ge",
    Am.il = "co.il",
    Am["\u0440\u0444"] = "ru",
    Am["xn--p1ai"] = "ru",
    Am["\u0431\u0435\u043b"] = "by",
    Am["xn--90ais"] = "by",
    Am)
      , Cm = {
        "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
        "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
        "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
    }
      , Dm = {}
      , Em = (Dm.ka = "ge",
    Dm.ro = "md",
    Dm.tg = "tj",
    Dm.tk = "tm",
    Dm.et = "ee",
    Dm.hy = "com.am",
    Dm.he = "co.li",
    Dm.ky = "kg",
    Dm.be = "by",
    Dm.tr = "com.tr",
    Dm.kk = "kz",
    Dm);
    function Fm(a, b) {
        var c = Gl(function(d, e) {
            return d[1].da > e[1].da ? 1 : -1
        }, ac(Qc));
        c = M(function(d) {
            var e = q(d);
            d = e.next().value;
            var f = e.next().value.Va;
            e = I(b, d) && !C(b[d]);
            d = b[d] !== (f || w)(void 0);
            return ib(e && d)
        }, c);
        return Vb(S("", c))
    }
    var Gm = /^https?:\/\//
      , Hm = {
        1882689622: 1,
        2318205080: 1,
        3115871109: 1,
        3604875100: 1,
        339366994: 1,
        849340123: 1,
        3735661796: 1,
        3082499531: 1,
        2343947156: 1,
        655012937: 1,
        3724710748: 1,
        3364370932: 1,
        1996539654: 1,
        2065498185: 1,
        823651274: 1,
        12282461: 1,
        1555719328: 1,
        1417229093: 1,
        138396985: 1,
        3015043526: 1
    }
      , Im = x(function() {
        return G(function(a, b) {
            a[Zj(b + "/tag.js")] = 1;
            return a
        }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
    })
      , Jm = x(function(a) {
        a = vd(a);
        if (!a || !A(a.getEntriesByType))
            return null;
        a = a.getEntriesByType("resource");
        var b = Im();
        return (a = Je(function(c) {
            c = q(c.name.replace(Gm, "").split("?")).next().value;
            return b[Zj(c)]
        }, a)) ? ib(a.transferSize) : null
    })
      , Km = "ar:1:pv:1:v:" + Mc.eb + ":vf:" + ma.version
      , Lm = Mc.La + "//" + Kc + "/watch/" + Mc.ag;
    function Mm(a, b) {
        try {
            var c = q(b)
              , d = q(c.next().value);
            d.next();
            var e = d.next().value
        } catch (f) {
            return function() {
                return R.resolve()
            }
        }
        return function(f) {
            var g = {};
            g = (g["browser-info"] = Km,
            g["page-url"] = a.location && "" + a.location.href,
            g);
            return e && (f = yf(a, f)) ? e(Lm, {
                ab: g,
                ea: [],
                ba: "site-info=" + Td(f)
            })["catch"](u) : R.resolve()
        }
    }
    var Nm = {}
      , Om = V("exps.int", function(a, b) {
        var c = {};
        return c.experiments = function(d, e, f) {
            if (y(d) && !(0 >= d.length)) {
                var g = Sh(a, "e", b)
                  , h = Pi(b).url
                  , k = {}
                  , l = {};
                d = g({
                    K: Le((k.ex = 1,
                    k.ar = 1,
                    k)),
                    H: (l["page-url"] = h || T(a).href,
                    l.exp = d,
                    l)
                }, b);
                return Oi(a, "exps.s", d, e || u, f)
            }
        }
        ,
        c
    })
      , Pm = []
      , Qm = V("p.fh", function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Ff(a)
          , d = Ed(a)
          , e = c.C("wasSynced")
          , f = {
            id: 3,
            ca: "0"
        };
        if (b && e && e.time + 864E5 > d(Ad))
            return R.resolve(e);
        e = {};
        var g = {};
        return Sh(a, "f", f)({
            K: Le((e.pv = 1,
            e)),
            H: (g["page-url"] = T(a).href,
            g["page-ref"] = a.document.referrer,
            g)
        }, f).then(function(h) {
            var k = {};
            h = (k.time = d(Ad),
            k.params = J(h, "settings"),
            k.bkParams = J(h, "userData"),
            k);
            c.D("wasSynced", h);
            return h
        })["catch"](U(a, "f.h"))
    })
      , Rm = oa(function(a, b) {
        0 === parseFloat(J(b, "settings.c_recp")) && (a.Sd.D("ymoo" + a.ta, a.Uf(Bd)),
        a.kd && a.kd.destruct && a.kd.destruct())
    })
      , Sm = H(cb("settings.pcs"), qa("1"));
    function Tm(a, b, c) {
        var d = b || {}
          , e = Sh(a, "u", c)
          , f = Ff(a);
        return {
            C: function(g, h) {
                return B(d[g]) ? f.C(g, h) : d[g]
            },
            D: function(g, h) {
                var k = "" + h;
                d[g] = k;
                f.D(g, k);
                var l = {};
                return e({
                    H: (l.key = g,
                    l.value = k,
                    l)
                }, [Mc.La + "//" + Kc + "/user_storage_set"], {})["catch"](U(a, "u.d.s.s"))
            }
        }
    }
    var Um = x(function(a) {
        a = T(a).hostname.split(".");
        return a[a.length - 1]
    })
      , Vm = x(function(a) {
        return -1 !== T(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
    })
      , Wm = RegExp("^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|yastatic\\.net|.*\\.yandex|turbopages\\.org|turbo\\.site|diplodoc\\.(com|tech)|datalens\\.tech|white-label\\.yango-tech\\.com|al-sadhan\\.com|spar\\.sa)$")
      , Xm = x(function(a) {
        a = T(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(Wm));
        return b
    })
      , Ym = RegExp("^(.*\\.)?((yandex(-team)?)\\.(com?\\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\\.ru|ya\\.(ru|cc)|yadi\\.sk|.*\\.yandex|turbopages\\.org|turbo\\.site)$")
      , Zm = x(function(a) {
        a = T(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(Ym));
        return b
    })
      , $m = {}
      , an = ($m.s = "p",
    $m["8"] = "i",
    $m)
      , bn = Yd("csp", function(a, b) {
        return Sh(a, "s", b)({}, ["https://ymetrica1.com/watch/3/1"])
    });
    function cn(a, b, c) {
        var d = c.je
          , e = c.data
          , f = Sh(a, d, c.fb);
        a = N({}, um);
        e && N(a.H, e);
        return yg(M(function(g) {
            return Ag(f(N({
                N: {
                    Wc: !1,
                    Nc: !0
                }
            }, um), M(function(h) {
                var k = q(h)
                  , l = k.next().value;
                h = k.next().value;
                k = k.next().value;
                l = S("", M(function(m) {
                    return String.fromCharCode(m.charCodeAt(0) + 10)
                }, l.split("")));
                return "http" + (k ? "s" : "") + "://" + l + ":" + h + "/" + an[d]
            }, g)).then(function(h) {
                return N({}, h, {
                    host: g[h.Ce]
                })
            }))
        }, b))
    }
    function dn(a, b, c, d, e, f) {
        var g = f.Qd
          , h = f.fb
          , k = f.wb;
        return new R(function(l, m) {
            var p = c.C(g, 0);
            p = parseInt("" + p, 10);
            return b(Bd) - p <= e.Qf ? (k(3),
            m()) : Zm(a) ? l(void 0) : Sm(d) ? (k(4),
            m()) : l(bn(a, h)["catch"](H(ra(F(5, k)), md)))
        }
        )
    }
    function en(a, b, c, d, e) {
        var f = void 0 === e.Rf ? u : e.Rf
          , g = e.Qd
          , h = void 0 === e.wb ? u : e.wb
          , k = d(Ad);
        return cn(a, b, e)(vg(function(l) {
            h(6);
            M(function(m) {
                m && mf(a, g + ".s", m)
            }, l);
            l = d(Bd);
            c.D(g, l).then(F(7, h))
        }, function(l) {
            h(8);
            c.D(g, d(Bd)).then(F(9, h));
            f(l, d, k)
        }))
    }
    function fn(a) {
        var b = qc(a);
        a = H(jc, rb(["iPhone", "iPad"]))(a);
        return b ? sm : a ? tm : []
    }
    function gn(a, b, c) {
        var d = c.fb
          , e = void 0 === c.wb ? u : c.wb
          , f = Ed(a)
          , g = Tm(a, b.userData, d)
          , h = fn(a)
          , k = H(fe, E([wm, vm], gb))(a)
          , l = J(b, "settings.sbp");
        c.wb = e;
        if (l) {
            var m = {};
            c.data = N({}, l, (m.c = d.id,
            m))
        }
        return h.length ? dn(a, f, g, b, k, c).then(function() {
            return en(a, h, g, f, c)
        }, u) : (e(2),
        R.resolve())
    }
    function hn(a, b) {
        this.l = a;
        this.type = b
    }
    hn.isEnabled = function(a) {
        return !!a.JSON
    }
    ;
    hn.prototype.Aa = function(a) {
        return Bg(yf(this.l, a))
    }
    ;
    hn.prototype.ub = function(a) {
        var b = a.data;
        return "string" === typeof b ? b : yf(this.l, a.data)
    }
    ;
    hn.prototype.lb = function(a) {
        return encodeURIComponent(a).length
    }
    ;
    hn.prototype.pe = function(a, b) {
        for (var c = Math.ceil(a.length / b), d = [], e = 0; e < b; e += 1)
            d.push(a.slice(e * c, c * (e + 1)));
        return d
    }
    ;
    function jn(a) {
        if (!a)
            return [0, 0];
        var b = 0 > a;
        b && (a = -a);
        var c = a >>> 0;
        a = (a - c) / 4294967296 >>> 0;
        b && (a = ~a >>> 0,
        c = ~c >>> 0,
        4294967295 < ++c && (c = 0,
        4294967295 < ++a && (a = 0)));
        return [a, c]
    }
    function kn(a, b, c, d) {
        b = q(b);
        a = b.next().value;
        for (b = b.next().value; a; )
            c[d++] = b & 127 | 128,
            b = (b >>> 7 | a << 25) >>> 0,
            a >>>= 7;
        for (; 127 < b; )
            c[d++] = b & 127 | 128,
            b >>>= 7;
        c[d++] = b
    }
    function ln(a, b, c) {
        b[c] = a & 255;
        b[c + 1] = a >>> 8 & 255;
        b[c + 2] = a >>> 16 & 255;
        b[c + 3] = a >>> 24
    }
    function mn(a, b, c, d) {
        var e = 0 > b ? 1 : 0;
        e && (b = -b);
        if (0 === b)
            ln(0 < 1 / b ? 0 : 2147483648, c, d);
        else if (a.isNaN(b))
            ln(2143289344, c, d);
        else if (3.4028234663852886E38 < b)
            ln((e << 31 | 2139095040) >>> 0, c, d);
        else if (1.1754943508222875E-38 > b)
            ln((e << 31 | a.Math.round(b / 1.401298464324817E-45)) >>> 0, c, d);
        else {
            var f = a.Math.floor(a.Math.log(b) / Math.LN2);
            ln((e << 31 | f + 127 << 23 | Math.round(b * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, c, d)
        }
    }
    var nn = x(function(a) {
        function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0]
        }
        function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3]
        }
        if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array)
            return mn;
        var d = new Float32Array([-0])
          , e = new Uint8Array(d.buffer);
        return 128 === e[3] ? c : b
    });
    function on(a, b, c, d) {
        return nn(a)(a, b, c, d)
    }
    function pn(a) {
        return function(b, c, d, e) {
            for (var f, g = 0, h = 0; h < c.length; ++h)
                if (b = c.charCodeAt(h),
                128 > b)
                    a ? g += 1 : d[e++] = b;
                else {
                    if (2048 > b) {
                        if (a) {
                            g += 2;
                            continue
                        }
                        d[e++] = b >> 6 | 192
                    } else {
                        if (55296 === (b & 64512) && 56320 === ((f = c.charCodeAt(h + 1)) & 64512)) {
                            if (a) {
                                g += 4;
                                continue
                            }
                            b = 65536 + ((b & 1023) << 10) + (f & 1023);
                            ++h;
                            d[e++] = b >> 18 | 240;
                            d[e++] = b >> 12 & 63 | 128
                        } else {
                            if (a) {
                                g += 3;
                                continue
                            }
                            d[e++] = b >> 12 | 224
                        }
                        d[e++] = b >> 6 & 63 | 128
                    }
                    d[e++] = b & 63 | 128
                }
            return a ? g : e
        }
    }
    var qn = pn(!1)
      , rn = pn(!0);
    function sn(a, b, c, d) {
        for (a = 0; a < b.length; ++a)
            c[d + a] = b[a]
    }
    function tn(a, b, c, d) {
        c[d] = b
    }
    function un(a, b, c, d) {
        for (a = b; 127 < a; )
            c[d++] = a & 127 | 128,
            a >>>= 7;
        c[d] = a
    }
    function vn(a) {
        return [un, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
    }
    function wn(a) {
        return 0 > a ? [kn, 10, jn(a)] : vn(a)
    }
    function xn(a) {
        return [on, 4, a]
    }
    function yn(a) {
        a = jn(a);
        var b = q(a)
          , c = b.next().value;
        b = b.next().value;
        var d = (b >>> 28 | c << 4) >>> 0;
        c >>>= 24;
        return [kn, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
    }
    function zn(a) {
        return [tn, 1, a ? 1 : 0]
    }
    function An(a) {
        return [sn, a.length, a]
    }
    function Bn(a) {
        var b = rn({}, a, [], 0);
        return b ? [qn, b, a] : [tn, 0, 0]
    }
    function Cn(a) {
        return [[513, a.hidden, zn], [449, a.prev, vn], [385, a.next, vn], [337, a.content, Bn], [257, a.parent, vn], [210, a.attributes, 81, Bn, 145, Bn], [145, a.name, Bn], [65, a.id, vn]]
    }
    function Dn(a) {
        return [[129, a.height, wn], [65, a.width, wn]]
    }
    function En(a) {
        return [[209, a.path, Bn], [145, a.protocol, Bn], [81, a.host, Bn]]
    }
    function Fn(a) {
        return [[852, a.content, Cn], [785, a.tabId, Bn], [705, a.recordStamp, yn], [656, a.location, En], [592, a.viewport, Dn], [528, a.screen, Dn], [449, a.hasBase, zn], [401, a.base, Bn], [337, a.referrer, Bn], [273, a.ua, Bn], [209, a.address, Bn], [145, a.title, Bn], [81, a.doctype, Bn]]
    }
    function Gn(a) {
        return [[210, a.attributes, 81, Bn, 145, Bn], [129, a.index, vn], [65, a.target, vn]]
    }
    function Hn(a) {
        return [[129, a.index, vn], [84, a.nodes, Cn]]
    }
    function In(a) {
        return [[129, a.index, vn], [69, a.nodes, wn]]
    }
    function Jn(a) {
        return [[209, a.value, Bn], [129, a.index, vn], [65, a.target, vn]]
    }
    function Kn(a) {
        return [[193, a.index, vn], [145, a.op, Bn], [81, a.style, Bn]]
    }
    function Ln(a) {
        return [[148, a.changes, Kn], [65, a.target, wn]]
    }
    function Mn(a) {
        return [[193, a.target, wn], [129, a.y, vn], [65, a.x, vn]]
    }
    function Nn(a) {
        return [[257, a.target, wn], [193, a.page, zn], [129, a.y, wn], [65, a.x, wn]]
    }
    function On(a) {
        return [[133, a.Ki, wn], [65, a.Zg, wn]]
    }
    function Pn(a) {
        return [[257, a.endNode, vn], [193, a.startNode, vn], [129, a.end, wn], [65, a.start, wn]]
    }
    function Qn(a) {
        return [[257, a.target, wn], [193, a.hidden, zn], [129, a.checked, zn], [81, a.value, Bn]]
    }
    function Rn(a) {
        return [[297, a.force, xn], [233, a.y, xn], [169, a.x, xn], [81, a.id, Bn]]
    }
    function Sn(a) {
        return [[129, a.target, wn], [84, a.touches, Rn]]
    }
    function Tn(a) {
        return [[193, a.y, wn], [129, a.x, wn], [105, a.level, xn]]
    }
    function Un(a) {
        return [[257, a.pageHeight, vn], [193, a.pageWidth, vn], [129, a.height, vn], [65, a.width, vn]]
    }
    function Vn(a) {
        return [[273, a.modifier, Bn], [193, a.isMeta, zn], [145, a.key, Bn], [65, a.id, vn]]
    }
    function Wn(a) {
        return [[84, a.keystrokes, Vn]]
    }
    function Xn(a) {
        return [[193, a.orientation, wn], [129, a.height, vn], [65, a.width, vn]]
    }
    function Yn(a) {
        return [[209, a.stack, Bn], [145, a.Pg, Bn], [81, a.code, Bn]]
    }
    function Zn(a) {
        return [[65, a.target, wn]]
    }
    function $n(a) {
        return [[257, a.Zi, wn], [209, a.name, Bn], [129, a.Zg, wn], [65, a.Hi, wn]]
    }
    function ao(a) {
        return [[129, a.involvedTime, wn], [84, a.articleMeta, bo]]
    }
    function bo(a) {
        return [[513, a.chars, wn], [489, a.maxScrolled, xn], [385, a.involvedTime, wn], [321, a.height, wn], [257, a.width, wn], [193, a.y, wn], [129, a.x, wn], [65, a.id, vn]]
    }
    function co(a) {
        return [[593, a.updateDate, Bn], [532, a.rubric, eo], [449, a.chars, wn], [401, a.publicationDate, Bn], [340, a.topics, fo], [276, a.authors, go], [209, a.pageTitle, Bn], [145, a.pageUrlCanonical, Bn], [65, a.id, vn]]
    }
    function go(a) {
        return [[81, a.name, Bn]]
    }
    function fo(a) {
        return [[81, a.name, Bn]]
    }
    function eo(a) {
        return [[129, a.position, wn], [81, a.name, Bn]]
    }
    function ho(a) {
        return [[84, a.Rh, io]]
    }
    function io(a) {
        return [[1857, a.partsTotal, vn], [2E3, a.Li, $n], [1936, a.aj, On], [1793, a.activity, vn], [1744, a.textChangeMutation, Jn], [1680, a.removedNodesMutation, In], [1616, a.addedNodesMutation, Hn], [1552, a.attributesChangeMutation, Gn], [1488, a.publishersHeader, ao], [1424, a.articleInfo, co], [1360, a.focusEvent, Zn], [1296, a.fatalErrorEvent, Yn], [1232, a.deviceRotationEvent, Xn], [1168, a.keystrokesEvent, Wn], [1104, a.resizeEvent, Un], [1040, a.zoomEvent, Tn], [976, a.touchEvent, Sn], [912, a.changeEvent, Qn], [848, a.selectionEvent, Pn], [784, a.scrollEvent, Nn], [720, a.mouseEvent, Mn], [656, a.styleChangeEvent, Ln], [592, a.page, Fn], [513, a.end, zn], [449, a.partNum, vn], [401, a.chunk, An], [257, a.frameId, wn], [193, a.event, vn], [129, a.type, vn], [65, a.stamp, vn]]
    }
    var jo = {}
      , ko = (jo.mousemove = 0,
    jo.mouseup = 1,
    jo.mousedown = 2,
    jo.click = 3,
    jo.scroll = 4,
    jo.windowblur = 5,
    jo.windowfocus = 6,
    jo.focus = 7,
    jo.blur = 8,
    jo.eof = 9,
    jo.selection = 10,
    jo.change = 11,
    jo.input = 12,
    jo.touchmove = 13,
    jo.touchstart = 14,
    jo.touchend = 15,
    jo.touchcancel = 16,
    jo.touchforcechange = 17,
    jo.zoom = 18,
    jo.resize = 19,
    jo.keystroke = 20,
    jo.deviceRotation = 21,
    jo.fatalError = 22,
    jo.hashchange = 23,
    jo.stylechange = 24,
    jo.articleInfo = 25,
    jo.publishersHeader = 26,
    jo.pageData = 27,
    jo.mutationAdd = 28,
    jo.mutationRemove = 29,
    jo.mutationTextChange = 30,
    jo.mutationAttributesChange = 31,
    jo.formNodeData = 32,
    jo.submit = 33,
    jo)
      , lo = {}
      , mo = (lo.page = 0,
    lo.event = 1,
    lo.mutation = 2,
    lo.publishers = 3,
    lo.activity = 4,
    lo.formNode = 5,
    lo);
    function no(a, b) {
        a[0] += b[1];
        a[2][3] = b;
        a[2] = b
    }
    function oo(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [u, 0, 0];
        a[2] = a[1];
        a[0] = 0
    }
    function po(a) {
        var b = a[1]
          , c = a[0]
          , d = a[2];
        a[3] ? (a[0] = a[3][0],
        a[1] = a[3][1],
        a[2] = a[3][2],
        a[3] = a[3][3]) : (a[0] = 0,
        a[1] = [u, 0, 0],
        a[2] = a[1]);
        no(a, vn(c));
        c && (a[2][3] = b[3],
        a[2] = d,
        a[0] += c)
    }
    function qo(a, b) {
        var c = a(b)
          , d = [u, 0, 0]
          , e = [0, d, d, void 0];
        return Rd(c, function(f, g) {
            var h = q(f)
              , k = h.next().value
              , l = h.next().value
              , m = h.next().value;
            if (0 === k)
                return m(e, l),
                e;
            if (void 0 === l || null === l)
                return e;
            h = k >> 3;
            if (k & 4)
                for (var p = l.length - 1; 0 <= p; ) {
                    var r = l[p];
                    k & 1 ? Pe(g, [[k - 4, r, m]]) : (r = m(r),
                    r.push([0, 0, oo]),
                    r.push([0, vn(h), no]),
                    r.unshift([0, 0, po]),
                    Pe(g, r));
                    --p
                }
            else if (k & 1)
                no(e, vn(h)),
                l = m(l),
                h & 2 && no(e, vn(l[1])),
                no(e, l);
            else if (k & 2) {
                r = q(f);
                r.next();
                r.next();
                k = r.next().value;
                m = r.next().value;
                p = r.next().value;
                r = r.next().value;
                for (var t = bc(l), v = t.length - 1; 0 <= v; ) {
                    var z = t[v];
                    Pe(g, [[0, 0, po], [p, l[z], r], [k, z, m], [0, 0, oo], [0, vn(h), no]]);
                    --v
                }
            } else
                l = m(l),
                l.push([0, 0, oo]),
                l.push([0, vn(h), no]),
                l.unshift([0, 0, po]),
                Pe(g, l);
            return e
        })
    }
    function ro(a, b) {
        var c = b[1][3]
          , d = 0
          , e = new a.Uint8Array(b[0]);
        return Rd([c], function(f, g) {
            if (!f)
                return e;
            f[0](a, f[2], e, d);
            d += f[1];
            g.push(f[3]);
            return e
        })
    }
    function so(a, b) {
        var c = this;
        this.isSync = !1;
        this.Eb = [];
        var d = {};
        this.Ng = (d.ad = "mutationAdd",
        d.re = "mutationRemove",
        d.tc = "mutationTextChange",
        d.ac = "mutationAttributesChange",
        d.page = "pageData",
        d);
        d = {};
        this.Hg = (d.ad = "addedNodesMutation",
        d.re = "removedNodesMutation",
        d.tc = "textChangeMutation",
        d.ac = "attributesChangeMutation",
        d.touchmove = "touchEvent",
        d.touchstart = "touchEvent",
        d.touchend = "touchEvent",
        d.touchforcechange = "touchEvent",
        d.touchcancel = "touchEvent",
        d.resize = "resizeEvent",
        d.scroll = "scrollEvent",
        d.change = "changeEvent",
        d.mousemove = "mouseEvent",
        d.mousedown = "mouseEvent",
        d.mouseup = "mouseEvent",
        d.click = "mouseEvent",
        d.focus = "focusEvent",
        d.blur = "focusEvent",
        d.deviceRotation = "deviceRotationEvent",
        d.zoom = "zoomEvent",
        d.keystroke = "keystrokesEvent",
        d.selection = "selectionEvent",
        d.stylechange = "styleChangeEvent",
        d.fatalError = "fatalErrorEvent",
        d.pageData = "page",
        d);
        this.eh = function(e) {
            var f = e.type;
            return e.event || "publishersHeader" !== f && "articleInfo" !== f ? {
                type: mo[f],
                event: ko[c.Ng[e.event] || e.event]
            } : {
                type: mo.publishers,
                event: ko[f]
            }
        }
        ;
        this.mf = function(e) {
            var f = !B(e.partNum)
              , g = c.eh(e);
            g = {
                stamp: e.stamp,
                type: g.type,
                event: g.event,
                frameId: e.frameId,
                chunk: f ? e.data : void 0,
                partNum: e.partNum,
                end: e.end
            };
            !f && e.data && (f = c.Hg[e.event] || e.event || e.type) && (g[f] = e.data);
            return g
        }
        ;
        this.l = a;
        this.type = b
    }
    so.prototype.Aa = function(a, b) {
        var c = this
          , d = this.isSync || (void 0 === b ? 0 : b) ? Infinity : 10
          , e = pl(this.l, Rd(a, this.mf), d)
          , f = [e];
        this.Eb.push(e);
        return e(xg(function(g) {
            g = qo(ho, {
                Rh: g
            });
            g = pl(c.l, g, d, Nd);
            f.push(g);
            c.Eb.push(g);
            return g
        }))(xg(function(g) {
            g = ro(c.l, g.slice(-4));
            g = pl(c.l, g, d, Nd);
            f.push(g);
            c.Eb.push(g);
            return g
        }))(wg(function(g) {
            g = g[g.length - 1];
            M(function(h) {
                h = vb(c.l)(h, c.Eb);
                c.Eb.splice(h, 1)
            }, f);
            return g
        }))
    }
    ;
    so.prototype.ub = function(a) {
        return qo(io, this.mf(a))(Md(u))
    }
    ;
    so.prototype.lb = function(a) {
        return a[0]
    }
    ;
    so.prototype.pe = function(a, b) {
        for (var c = ro(this.l, a)(Md(u)), d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
            e.push(c.slice(f * d, d * (f + 1)));
        return e
    }
    ;
    so.isEnabled = function(a) {
        var b = Be(a)
          , c = !1;
        try {
            c = (c = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
        } catch (d) {}
        return !b && c && !(!a.Uint8Array || !J(a, "Uint8Array.prototype.slice"))
    }
    ;
    function to(a, b, c) {
        if (so.isEnabled(a))
            return new so(a,b);
        if (hn.isEnabled(a))
            return new hn(a,c)
    }
    var uo = cf("wv");
    function vo(a, b, c, d) {
        var e = c.H;
        e.wmode = "0";
        e["wv-hit"] = e["wv-hit"] || "" + mg(a);
        e["page-url"] = e["page-url"] || T(a).href;
        d && (e[d] = e[d] || "" + Xd(a));
        a = {};
        b = {
            Ja: {
                qa: "webvisor/" + b.id
            },
            N: N(c.N || {}, {
                $a: (a["Content-Type"] = "text/plain",
                a),
                Vc: "POST"
            }),
            H: e
        };
        N(c, b)
    }
    function wo(a, b) {
        return {
            R: function(c, d) {
                vo(a, b, c);
                d()
            }
        }
    }
    var xo = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" ")
      , yo = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" ");
    function zo(a, b, c, d, e) {
        var f = this;
        this.xc = !1;
        this.meta = {};
        this.scroll = {
            x: 0,
            y: 0
        };
        this.involvedTime = this.kf = 0;
        this.Ud = this.sf = "";
        this.fa = [];
        this.ne = this.Pa = 0;
        this.yb = {
            h: 0,
            w: 0
        };
        this.buffer = [];
        this.bg = yo;
        this.flush = function() {
            f.ne = X(f.l, f.flush, 2500);
            var g = f.zd();
            if (f.buffer.length || g) {
                var h = xb(f.buffer);
                g && h.push(g);
                f.sf = f.Ud;
                f.ja.Aa(h)(vg(U(f.l, "p.b.st"), function(k) {
                    k && f.Rb(k)
                }))
            }
        }
        ;
        this.Rb = d;
        this.ja = c;
        this.Yb = D(this.Yb, this);
        this.zd = D(this.zd, this);
        this.flush = D(this.flush, this);
        this.l = a;
        this.ta = e;
        this.Oc = b;
        this.Od = "pai" + b.id;
        this.Jb();
        this.Re = ud(this.l);
        this.time = Ed(this.l);
        Ao(this);
        this.Bd = Q(this.l);
        this.Be = null
    }
    n = zo.prototype;
    n.start = function() {
        this.ne = X(this.l, this.flush, 2500);
        if (!this.xc) {
            this.Re.F(this.l, xo, this.Yb);
            var a = this.Bd.C(this.Od, [])
              , b = !a.length;
            a.push(D(this.vh, this));
            this.Bd.ra(this.Od, a);
            b && this.Bf();
            this.Be = ud(this.l).F(this.l, ["click"], D(this.Yh, this));
            this.Yb({
                type: "page",
                target: this.l
            })
        }
    }
    ;
    n.stop = function() {
        this.Be && this.Be();
        this.Re.Wb(this.l, xo, this.Yb);
        this.xc = !0;
        this.flush();
        sg(this.l, this.ne)
    }
    ;
    n.Bf = function() {
        var a = this;
        U(this.l, "p.ic" + this.Oc.id, function() {
            if (!a.xc) {
                var b = a.Bd.C(a.Od)
                  , c = Bo(a.Oc);
                M(function(d) {
                    var e = M(function(f) {
                        return N({}, f)
                    }, c);
                    A(d) && d(e)
                }, b);
                a.Pa = X(a.l, D(a.Bf, a), 1E3, "p")
            }
        })()
    }
    ;
    n.vh = function(a) {
        this.xc || (Co(this, a),
        Do(this),
        Eo(this))
    }
    ;
    n.zg = function(a, b) {
        return (a.ke || 0) <= (b.ke || 0) ? b : a
    }
    ;
    n.Yh = function(a) {
        if (this.fa.length) {
            a = lj(a);
            var b = T(this.l).hostname;
            a && ee(a.hostname) === ee(b) && (a = G(this.zg, this.fa[0], this.fa).id,
            b = mg(this.l),
            Gf(this.l, this.ta.split(":")[0]).D("pai", a + "-" + b))
        }
    }
    ;
    n.Yb = function(a) {
        var b = this;
        U(this.l, "p.ec." + this.Oc.id, function() {
            try {
                var c = a.type;
                var d = a.target
            } catch (k) {
                return
            }
            var e = "page" === c;
            if ("scroll" === c || e) {
                var f = [b.l, b.l.document, b.l.document.documentElement, Qf(b.l)];
                K(d, f) && b.Jb()
            }
            ("resize" === c || e) && Ao(b);
            c = b.time(Ad);
            var g = Math.min(c - b.kf, 5E3);
            b.involvedTime += Math.round(g);
            b.kf = c;
            if (b.meta && b.scroll && b.yb) {
                var h = b.yb.h * b.yb.w;
                b.fa = M(function(k) {
                    var l = N({}, k)
                      , m = b.meta[l.id]
                      , p = Vf(k.Db);
                    if (!m || Fj("html", b.l, l.element) !== b.l.document.documentElement || !p)
                        return l;
                    k = b.l.Math;
                    m = k.max((b.scroll.y + b.yb.h - m.y) / m.height, 0);
                    var r = p.height * p.width;
                    p = kg(b.l, p, b.yb);
                    l.ke = p / h;
                    l.visibility = p / r;
                    if (.9 <= l.visibility || .1 <= l.ke)
                        l.involvedTime += g;
                    l.maxScrolled = k.round(1E4 * m) / 1E4;
                    return l
                }, b.fa);
                c = {};
                d = {};
                Fe(b.l, (d.name = "publishers",
                d.counterKey = b.ta,
                d.data = (c.involvedTime = b.involvedTime,
                c.contentItems = M(function(k) {
                    var l = {};
                    return N((l.contentElement = k.Db,
                    l), k)
                }, b.fa),
                c),
                d))
            }
        })()
    }
    ;
    function Co(a, b) {
        var c = M(function(d) {
            return d.id
        }, a.fa);
        a.fa = a.fa.concat(mb(function(d) {
            return !K(d.id, c)
        }, b))
    }
    function Ao(a) {
        var b = q(Sf(a.l) || Tf(a.l))
          , c = b.next().value;
        b = b.next().value;
        a.yb = {
            w: c,
            h: b
        }
    }
    function Do(a) {
        U(a.l, "p.um." + a.Oc.id, function() {
            var b = [];
            a.Jb();
            a.meta = G(function(c, d) {
                if (Fj("html", a.l, d.element) !== a.l.document.documentElement)
                    return b.push(d),
                    delete c[d.id],
                    c;
                var e = {};
                e = (e.id = d.id,
                e.involvedTime = Math.max(d.involvedTime, 0),
                e.maxScrolled = d.maxScrolled || 0,
                e.chars = d.update ? d.update("chars") || 0 : 0,
                e);
                if (d.Db) {
                    var f = Vf(d.Db);
                    f && (e.x = Math.max(Math.round(f.left) + a.scroll.x, 0),
                    e.y = Math.max(Math.round(f.top) + a.scroll.y, 0),
                    e.width = Math.round(f.width),
                    e.height = Math.round(f.height))
                }
                c[d.id] = e;
                return c
            }, {}, a.fa);
            M(function(c) {
                c = vb(a.l)(c, a.fa);
                a.fa.splice(c, 1)
            }, b)
        })()
    }
    n.zd = function() {
        var a = M(F(this.meta, J), bc(this.meta));
        if (a.length && (this.Ud = yf(this.l, a),
        this.sf !== this.Ud)) {
            var b = {}
              , c = {};
            return c.type = "publishersHeader",
            c.data = (b.articleMeta = a || [],
            b.involvedTime = this.involvedTime,
            b),
            c
        }
        return null
    }
    ;
    function Eo(a) {
        if (a.fa.length) {
            var b = M(function(c) {
                var d = G(function(f, g) {
                    c[g] && (f[g] = c[g]);
                    return f
                }, {}, a.bg);
                c.Kf = !0;
                var e = {};
                return e.type = "articleInfo",
                e.stamp = d.stamp,
                e.data = d,
                e
            }, mb(function(c) {
                return !c.Kf
            }, a.fa));
            b.length && (a.buffer = a.buffer.concat(b),
            $h(a.l, a.ta, ["pdf", b]))
        }
    }
    n.Jb = function() {
        this.scroll = {
            x: this.l.pageXOffset || J(this.l, "document.documentElement.scrollLeft") || 0,
            y: this.l.pageYOffset || J(this.l, "document.documentElement.scrollLeft") || 0
        }
    }
    ;
    var Fo = {}
      , Go = (Fo[1] = 500,
    Fo[2] = 500,
    Fo[3] = 0,
    Fo);
    function Ho(a, b, c) {
        var d = b.getAttribute("itemtype");
        c = Bj('[itemprop~="' + c + '"]', b);
        return d ? mb(function(e) {
            return e.parentNode && Fj("[itemtype]", a, e.parentNode) === b
        }, c) : c
    }
    function Io(a, b, c) {
        return (a = Ho(a, b, c)) && a.length ? a[0] : null
    }
    function Jo(a) {
        if (!a)
            return "";
        a = L(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || If(a[0]) : ""
    }
    function Ko(a) {
        return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Jo(a) : ""
    }
    var Lo = ["topics", "rubric", "authors"];
    function Mo(a, b) {
        var c = this;
        this.id = "a";
        this.Id = !1;
        this.Gb = {};
        this.tb = {
            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
            pf: ["article"]
        };
        var d = {};
        this.Vb = (d.Answer = 3,
        d.Review = 2,
        d);
        this.Te = x(function(e, f, g) {
            var h = {};
            $h(c.l, c.ta, "pfi", (h.field = e,
            h.itemField = f,
            h.value = g,
            h))
        }, function(e, f, g) {
            return "" + e + f + g
        });
        this.oi = function(e) {
            M(function(f) {
                e[f] && (e[f] = G(function(g, h) {
                    var k = h.name
                      , l = h.position;
                    if (!k)
                        return c.Te(f, "name", k),
                        g;
                    if ("string" === typeof l) {
                        k = Sb(l);
                        if (null === k || c.l.isNaN(k))
                            return c.Te(f, "position", l),
                            g;
                        h.position = k
                    }
                    g.push(h);
                    return g
                }, [], e[f]))
            }, Lo);
            return e
        }
        ;
        this.Ag = x(function(e, f) {
            var g = {};
            $h(c.l, c.ta, ["pcs", f], (g.chars = f.chars,
            g.limit = Go[f.type],
            g))
        });
        this.l = a;
        this.root = Rf(a);
        this.ta = b
    }
    Mo.prototype.Ma = function(a) {
        return a.element
    }
    ;
    function No(a, b, c) {
        var d;
        U(a.l, "P.s." + c, function() {
            d = a.Gb[c].call(a, b)
        })();
        return d
    }
    function Oo(a, b) {
        var c = N({}, b);
        if (a.Id && !c.id && K(b.type, [3, 2])) {
            var d = S(", ", M(cb("name"), c.authors || []));
            c.pageTitle = d + ": " + c.pageTitle
        }
        if (!c.pageTitle) {
            a: {
                d = c.Db;
                for (var e = 1; 5 >= e; e += 1) {
                    var f = Jo(Cj("h" + e, d));
                    if (f) {
                        d = f;
                        break a
                    }
                }
                d = void 0
            }
            c.pageTitle = d
        }
        c.pageUrlCanonical || (d = c.id,
        d = ("string" !== typeof d ? 0 : /^(https?:)\/\//.test(d)) ? c.id : (d = Cj('[rel="canonical"]', a.root)) ? d.href : void 0,
        c.pageUrlCanonical = d);
        c.id || (c.id = c.pageTitle || c.pageUrlCanonical);
        return c
    }
    Mo.prototype.Da = function(a) {
        var b = this
          , c = {}
          , d = this.Ma(a);
        if (!d)
            return null;
        c.type = a.type;
        M(function(f) {
            c[f] = No(b, a, f)
        }, bc(this.Gb));
        var e = Ed(this.l);
        c.stamp = e(Dd);
        c.element = a.element;
        c.Db = d;
        c = this.oi(Oo(this, c));
        c.id = c.id ? Zj(c.id) : 1;
        c.update = function(f) {
            return b.Ma(a) ? No(b, a, f) : void 0
        }
        ;
        return c
    }
    ;
    Mo.prototype.getType = function() {
        return 1
    }
    ;
    Mo.prototype.qc = function() {
        return []
    }
    ;
    function Bo(a) {
        var b = a.qc()
          , c = 1;
        return G(function(d, e) {
            var f = a.Da({
                element: e,
                type: a.getType(e)
            }) || [];
            L(f) || (f = [f]);
            f = G(function(g, h) {
                var k = g.values
                  , l = g.cf;
                h && h.chars > Go[h.type] && !K(h.id, l) ? (k.push(h),
                l.push(h.id)) : h && h.chars <= Go[h.type] && a.Ag(h.id, h);
                return {
                    values: k,
                    cf: l
                }
            }, {
                values: [],
                cf: M(cb("id"), d)
            }, f).values;
            return d.concat(M(function(g) {
                var h = {};
                g = N((h.index = c,
                h.Kf = !1,
                h.involvedTime = 0,
                h), g);
                c += 1;
                return g
            }, f))
        }, [], b)
    }
    function Po() {
        Mo.apply(this, arguments);
        this.id = "j";
        this.Id = !0;
        this.Ne = S(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
        var a = {};
        this.Gb = (a.id = function(b) {
            var c = b.data["@id"];
            b = b.data.mainEntity || b.data.mainEntityOfPage;
            !c && Ra(b) && (c = b["@id"]);
            return c
        }
        ,
        a.chars = function(b) {
            var c = b.data;
            return y(c.text) ? c.text.length : If(this.Ma(b)).length
        }
        ,
        a.authors = function(b) {
            b = b.data;
            var c = [];
            c = c.concat(Qo(b, "author"));
            c = c.concat(Qo(b.mainEntity, "author"));
            return c.concat(Qo(b.mainEntityOfPage, "author"))
        }
        ,
        a.pageTitle = function(b) {
            var c = b.data
              , d = c.headline || "";
            c.alternativeHeadline && (d += " " + c.alternativeHeadline);
            "" === d && (c.name ? d = c.name : c.itemReviewed && (d = c.itemReviewed));
            3 === b.type && Ra(c.parentItem) && (d = c.parentItem.text);
            return d
        }
        ,
        a.updateDate = function(b) {
            return b.data.dateModified || ""
        }
        ,
        a.publicationDate = function(b) {
            return b.data.datePublished || ""
        }
        ,
        a.pageUrlCanonical = function(b) {
            return b.data.url
        }
        ,
        a.topics = function(b) {
            return Qo(b.data, "about", ["name", "alternateName"])
        }
        ,
        a.rubric = function(b) {
            var c = this
              , d = this.Ma(b);
            b = nb(M(function(e) {
                e = xf(c.l, If(e));
                if (Ra(e) || L(e)) {
                    var f = Ro(e);
                    if (f)
                        return G(function(g, h) {
                            return g ? g : Ra(h) && "BreadcrumbList" === h["@type"] ? h : g
                        }, null, f);
                    if ("BreadcrumbList" === e["@type"])
                        return e
                }
                return null
            }, [b.element].concat(Bj(this.Ne, document.body === d ? document.documentElement : d))));
            return b.length && (b = b[0].itemListElement,
            L(b)) ? nb(M(function(e) {
                return Ra(e) && e.item && Ra(e.item) && !c.l.isNaN(e.position) ? {
                    name: e.item.name || e.name,
                    position: e.position
                } : null
            }, b)) : []
        }
        ,
        a)
    }
    ka(Po, Mo);
    function Qo(a, b, c) {
        c = void 0 === c ? ["name"] : c;
        if (!Ra(a) || !a[b])
            return [];
        a = a[b];
        a = L(a) ? a : [a];
        a = nb(M(function(d) {
            return d ? "string" === typeof d ? d : Ra(d) ? G(function(e, f) {
                return e || "" + d[f]
            }, "", c) : null : null
        }, a));
        return M(function(d) {
            var e = {};
            return e.name = d,
            e
        }, a)
    }
    Po.prototype.Ma = function(a) {
        var b = a.element
          , c = a.data || {};
        a = c["@id"];
        var d = c.url;
        c = null;
        d && y(d) && (c = So(this, d));
        !c && a && y(a) && (c = So(this, a));
        c || (c = a = b.parentNode,
        !Fj("head", this.l, b) && a && 0 !== If(a).length) || (c = this.l.document.body);
        return c
    }
    ;
    function So(a, b) {
        try {
            var c = rh(a.l, b).hash;
            if (c) {
                var d = Cj(c, a.l.document.body);
                if (d)
                    return d
            }
        } catch (e) {}
        return null
    }
    Po.prototype.Da = function(a) {
        var b = this
          , c = a.element
          , d = a.data;
        if (!d && (d = xf(this.l, If(c)),
        !d || !/schema\.org/.test(d["@context"]) && !L(d)))
            return null;
        var e = Ro(d);
        if (e)
            return M(function(g) {
                return Ra(g) && K(g["@type"], b.tb["schema.org"]) ? Mo.prototype.Da.call(b, {
                    element: c,
                    data: g,
                    type: b.Vb[g["@type"]] || 1
                }) : null
            }, e);
        a.data = d;
        if ("QAPage" === a.data["@type"]) {
            var f = a.data.mainEntity || a.data.mainEntityOfPage;
            if (!f)
                return null
        }
        "Question" === a.data["@type"] && (f = a.data);
        return f ? (a = Ib(F(f, J), ["acceptedAnswer", "suggestedAnswer"]),
        M(function(g) {
            if (!Ra(g) || !K(g["@type"], b.tb["schema.org"]))
                return null;
            var h = {};
            g = {
                element: c,
                type: b.Vb[g["@type"]] || 1,
                data: N((h.parentItem = f,
                h), g)
            };
            return Mo.prototype.Da.call(b, g)
        }, a)) : K(a.data["@type"], this.tb["schema.org"]) ? Mo.prototype.Da.call(this, N(a, {
            type: this.Vb[a.data["@type"]] || 1
        })) : null
    }
    ;
    Po.prototype.qc = function() {
        return Bj(this.Ne, this.root)
    }
    ;
    function Ro(a) {
        if (L(a))
            return a;
        if (a && L(a["@graph"]))
            return a["@graph"]
    }
    function To() {
        Mo.apply(this, arguments);
        this.id = "s";
        this.Id = !0;
        this.mi = Va("exec", new RegExp("schema.org\\/(" + S("|", bc(this.Vb)) + ")$"));
        var a = {};
        this.Gb = (a.id = function(b) {
            b = b.element;
            var c = Io(this.l, b, "identifier");
            return c ? Jo(c) : (c = Io(this.l, b, "mainEntityOfPage")) && c.getAttribute("itemid") ? c.getAttribute("itemid") : null
        }
        ,
        a.chars = function(b) {
            var c = 0;
            b = b.element;
            for (var d = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], e = 0; e < d.length; e += 1) {
                var f = Io(this.l, b, d[e]);
                if (f) {
                    c = Jo(f).length;
                    break
                }
            }
            b = If(b);
            0 === c && b && (c += b.length);
            return c
        }
        ,
        a.topics = function(b) {
            var c = this
              , d = Ho(this.l, b.element, "about");
            return M(function(e) {
                var f = {
                    name: Jo(e)
                };
                if (d = Io(c.l, e, "name"))
                    f.name = Jo(d);
                return f
            }, d)
        }
        ,
        a.rubric = function(b) {
            var c = this;
            (b = Cj('[itemtype$="schema.org/BreadcrumbList"]', b.element)) || (b = Cj('[itemtype$="schema.org/BreadcrumbList"]', this.root));
            return b ? M(function(d) {
                return {
                    name: Jo(Io(c.l, d, "name")),
                    position: Jo(Io(c.l, d, "position"))
                }
            }, Ho(this.l, b, "itemListElement")) : []
        }
        ,
        a.updateDate = function(b) {
            return (b = Io(this.l, b.element, "dateModified")) ? Ko(b) : ""
        }
        ,
        a.publicationDate = function(b) {
            return (b = Io(this.l, b.element, "datePublished")) ? Ko(b) : ""
        }
        ,
        a.pageUrlCanonical = function(b) {
            b = Ho(this.l, b.element, "url");
            if (b.length) {
                var c = b[0];
                return c.href ? c.href : Jo(b)
            }
            return null
        }
        ,
        a.pageTitle = function(b) {
            var c = ""
              , d = b.element
              , e = Io(this.l, d, "headline");
            e && (c += Jo(e));
            (e = Io(this.l, d, "alternativeHeadline")) && (c += " " + Jo(e));
            "" === c && ((e = Io(this.l, d, "name")) || (e = Io(this.l, d, "itemReviewed")),
            e && (c += Jo(e)));
            3 === b.type && (b = Fj('[itemtype$="schema.org/Question"]', this.l, d)) && (b = Io(this.l, b, "text")) && (c += Jo(b));
            return c
        }
        ,
        a.authors = function(b) {
            var c = this;
            b = Ho(this.l, b.element, "author");
            return M(function(d) {
                var e = {};
                e = (e.name = "",
                e);
                if (/.+schema.org\/(Person|Organization)/.test(d.getAttribute("itemtype") || "")) {
                    var f = Io(c.l, d, "name");
                    f && (e.name = Jo(f))
                }
                e.name || (e.name = d.getAttribute("content") || If(d) || d.getAttribute("href"));
                return e
            }, b)
        }
        ,
        a)
    }
    ka(To, Mo);
    To.prototype.getType = function(a) {
        a = a.getAttribute("itemtype") || "";
        return (a = this.mi(a)) ? this.Vb[a[1]] : 1
    }
    ;
    To.prototype.Da = function(a) {
        return a.element && If(a.element).length ? Mo.prototype.Da.call(this, a) : null
    }
    ;
    To.prototype.qc = function() {
        var a = S(",", M(function(b) {
            return '[itemtype$="schema.org/' + b + '"]'
        }, this.tb["schema.org"]));
        return Bj(a, this.root)
    }
    ;
    function Uo(a, b) {
        Mo.call(this, a, b);
        this.id = "o";
        var c = {};
        this.Gb = (c.chars = function(d) {
            d = this.Ma(d);
            return If(d).length
        }
        ,
        c.authors = function(d) {
            return Vo(d.data.author)
        }
        ,
        c.pageTitle = function(d) {
            return Wo(d.data.title) || ""
        }
        ,
        c.updateDate = function(d) {
            return Wo(d.data.modified_time)
        }
        ,
        c.publicationDate = function(d) {
            return Wo(d.data.published_time)
        }
        ,
        c.pageUrlCanonical = function(d) {
            return Wo(d.data.url)
        }
        ,
        c.rubric = function(d) {
            return Vo(d.data.section)
        }
        ,
        c.topics = function(d) {
            return Vo(d.data.tag)
        }
        ,
        c);
        this.Mg = new RegExp("^(og:)?((" + S("|", this.tb.pf) + "):)?")
    }
    ka(Uo, Mo);
    function Vo(a) {
        if (a) {
            if (L(a))
                return M(function(c) {
                    var d = {};
                    return d.name = c ? "" + c : null,
                    d
                }, a);
            var b = {};
            return [(b.name = a ? "" + a : null,
            b)]
        }
        return []
    }
    function Wo(a) {
        return L(a) ? a.length ? "" + a[0] : null : a ? "" + a : null
    }
    Uo.prototype.qc = function() {
        var a = Bj('meta[property="og:type"]', this.l.document.body);
        return [this.l.document.head].concat(a)
    }
    ;
    function Xo(a, b) {
        var c = b.element
          , d = {}
          , e = a.Ma(b);
        c = Bj("meta[property]", c === a.l.document.head ? c : e);
        if (c.length)
            M(function(f) {
                try {
                    if (f.parentNode === e || f.parentNode === a.l.document.head) {
                        var g = f.getAttribute("property").replace(a.Mg, "")
                          , h = Jo(f);
                        d[g] ? L(d[g]) ? d[g].push(h) : d[g] = [d[g], h] : d[g] = h
                    }
                } catch (k) {
                    mf(a.l, "og.ed", k)
                }
            }, c);
        else
            return null;
        return K(d.type, a.tb.pf) ? N(b, {
            data: d
        }) : null
    }
    Uo.prototype.Ma = function(a) {
        a = a.element;
        var b = this.l.document;
        return a === b.head ? b.body : a.parentNode
    }
    ;
    Uo.prototype.Da = function(a) {
        return (a = Xo(this, a)) ? Mo.prototype.Da.call(this, a) : null
    }
    ;
    function Yo(a, b, c, d, e) {
        d = Oh(a, c, d);
        b = mh(a, e || c, b);
        var f = bf(a, d, b);
        return function(g) {
            g = N({
                N: {
                    ea: ["mms." + c]
                }
            }, g);
            return f(g)
        }
    }
    var Zo = "et w v z i u vf".split(" ")
      , $o = {};
    Po && ($o.json_ld = Po);
    To && ($o.schema = To,
    $o.microdata = To);
    Uo && ($o.opengraph = Uo);
    var ap = V("p.p", function(a, b) {
        function c(l) {
            var m = N({}, k);
            m.N.ba = l;
            return e(m)["catch"](U(a, "s.ww.p"))
        }
        var d = to(a, "9", "8");
        if (!va("querySelectorAll", a.document.querySelectorAll) || !d)
            return R.resolve();
        var e = Yo(a, b, "p", ["f", "x"], [[Wg(Zo), 1], [wo, 1]])
          , f = Le()
          , g = Gf(a, b.id)
          , h = g.C("pai");
        h && (g.kc("pai"),
        f.D("pai", h));
        g = {};
        var k = {
            H: (g["wv-type"] = d.type,
            g),
            K: f,
            N: {}
        };
        return Xh(b, U(a, "ps.s", function(l) {
            if (l = J(l, "settings.publisher.schema")) {
                Li(b) && (l = "microdata");
                var m = $o[l];
                if (m && d) {
                    var p = O(b);
                    m = new m(a,p);
                    m = new zo(a,m,d,c,p);
                    m.start();
                    var r = {};
                    $h(a, p, "ps", (r.schema = l,
                    r));
                    return D(m.stop, m)
                }
            }
        }))
    });
    function bp(a) {
        var b = cp;
        this.type = "0";
        this.l = a;
        this.bh = b
    }
    n = bp.prototype;
    n.Aa = function(a) {
        return Bg(Ib(D(this.ub, this), a))
    }
    ;
    n.ub = function(a, b) {
        var c = this
          , d = []
          , e = this.bh(this.l, b && b.type, a.type);
        e && (d = Ib(function(f) {
            return f({
                l: c.l,
                ma: a
            }) || []
        }, e));
        return d
    }
    ;
    n.lb = function(a) {
        return a.length
    }
    ;
    n.pe = function(a) {
        return [a]
    }
    ;
    n.isEnabled = function() {
        return !0
    }
    ;
    function dp(a, b, c) {
        this.Oe = 0;
        this.ae = 1;
        this.Xc = 5E3;
        this.l = a;
        this.ja = b;
        this.Rb = c
    }
    dp.prototype.Rc = function() {
        this.Oe = X(this.l, H(D(this.flush, this), D(this.Rc, this)), this.Xc, "b.f")
    }
    ;
    dp.prototype.send = function(a, b) {
        var c = this.Rb(a, b || [], this.ae);
        this.ae += 1;
        return c
    }
    ;
    dp.prototype.push = function() {}
    ;
    dp.prototype.flush = function() {}
    ;
    function ep(a, b, c) {
        dp.call(this, a, b, c);
        this.buffer = [];
        this.cg = 7500;
        this.Xc = 3E4;
        this.Rc()
    }
    ka(ep, dp);
    ep.prototype.push = function(a, b) {
        var c = this.ja.ub(a, b);
        Pe(this.buffer, c);
        this.ja.lb(this.buffer) > this.cg && this.flush()
    }
    ;
    ep.prototype.flush = function() {
        var a = this.buffer;
        a.length && (this.send(a),
        this.buffer = [])
    }
    ;
    var fp = /opera mini/i;
    function gp(a, b) {
        var c = Ae(a)
          , d = c.C("visorc");
        K(d, ["w", "b"]) || (d = "");
        xe(a) && re(a, "visorc") && !fp.test(Ab(a) || "") || (d = "b");
        var e = J(b, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e)
            d = "w";
        d || (d = Q(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
        c.D("visorc", d, 30);
        return "w" === d
    }
    var hp = ["phone", "email"]
      , ip = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" ")
      , jp = /^[\w\u0410-\u042f\u0430-\u044f]$/
      , kp = [65, 90]
      , lp = [97, 122];
    function mp(a, b) {
        if (C(b))
            return !1;
        if (Hf(b)) {
            var c = b.parentNode;
            return (C(c) ? 0 : 11 === c.nodeType) ? !1 : mp(a, b.parentNode)
        }
        c = Pf(a);
        if (!c)
            return !1;
        var d = c.call(b, ".ym-hide-content,.ym-hide-content *");
        return d && c.call(b, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
    }
    function np(a, b) {
        return S("", M(function(c) {
            if (!a.isNaN(c))
                return "" + Xd(a, 0, 9);
            if (jp.test(c)) {
                var d = q(c.toUpperCase() === c ? kp : lp);
                c = d.next().value;
                d = d.next().value;
                return String.fromCharCode(Xd(a, c, d))
            }
            return c
        }, b.split("")))
    }
    var op = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" ")
      , pp = new RegExp("(" + ip.join("|") + ")","i")
      , qp = new RegExp("(" + hp.join("|") + ")","i")
      , rp = ["password", "passwd", "pswd"]
      , sp = new RegExp("(" + ip.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")).join("|") + ")","i");
    function tp(a) {
        return a && Of("(ym-disable-submit|-metrika-noform)", a)
    }
    function up(a) {
        try {
            var b = Yf(a);
            if (K(b, hg)) {
                if ("INPUT" === b) {
                    var c = a.type;
                    return !c || K(c.toLocaleLowerCase(), op)
                }
                return !0
            }
        } catch (d) {}
        return !1
    }
    function vp(a) {
        return !!(a && 2 < a.length)
    }
    function wp(a, b) {
        var c = a && (Na(a.className, "ym-disable-keys") || Na(a.className, "-metrika-nokeys"));
        return b && a ? c || !!Oj(a).length : c
    }
    function xp(a) {
        return $f(a) ? "password" === a.type || a.name && K(a.name.toLowerCase(), rp) || a.id && K(a.id.toLowerCase(), rp) : !1
    }
    function yp(a, b) {
        return xp(b) || wp(b) ? !0 : mp(a, b)
    }
    function zp(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (!b)
            return {
                Wa: !1,
                hb: !1,
                qb: !1
            };
        var d = b.getAttribute("type") || b.type;
        if ("button" === d)
            return {
                Wa: !1,
                hb: !1,
                qb: !1
            };
        var e = mb(vp, [b.className, b.id, b.name])
          , f = b && Of("ym-record-keys", b);
        d = d && K(d, hp) || Nb(Wa(qp), e);
        var g;
        (g = d) || (g = b.placeholder,
        g = Nb(Wa(pp), e) || vp(g) && sp.test(g || ""));
        e = g;
        return {
            Wa: !f && (yp(a, b) || e && c || e && !d && !c),
            hb: f,
            qb: e
        }
    }
    var Ap = wa(Array.prototype.reverse, "reverse");
    function Bp(a) {
        for (var b = [], c = a.length - 1; 0 <= c; --c)
            b[a.length - 1 - c] = a[c];
        return b
    }
    var Cp = Ap ? function(a) {
        return Ap.call(a)
    }
    : Bp
      , Dp = "metrikaId_" + Math.random()
      , Ep = {
        counter: 0
    }
      , Fp = x(function() {
        var a = {};
        return a.A = 1,
        a.ABBR = 2,
        a.ACRONYM = 3,
        a.ADDRESS = 4,
        a.APPLET = 5,
        a.AREA = 6,
        a.B = 7,
        a.BASE = 8,
        a.BASEFONT = 9,
        a.BDO = 10,
        a.BIG = 11,
        a.BLOCKQUOTE = 12,
        a.BODY = 13,
        a.BR = 14,
        a.BUTTON = 15,
        a.CAPTION = 16,
        a.CENTER = 17,
        a.CITE = 18,
        a.CODE = 19,
        a.COL = 20,
        a.COLGROUP = 21,
        a.DD = 22,
        a.DEL = 23,
        a.DFN = 24,
        a.DIR = 25,
        a.DIV = 26,
        a.DL = 27,
        a.DT = 28,
        a.EM = 29,
        a.FIELDSET = 30,
        a.FONT = 31,
        a.FORM = 32,
        a.FRAME = 33,
        a.FRAMESET = 34,
        a.H1 = 35,
        a.H2 = 36,
        a.H3 = 37,
        a.H4 = 38,
        a.H5 = 39,
        a.H6 = 40,
        a.HEAD = 41,
        a.HR = 42,
        a.HTML = 43,
        a.I = 44,
        a.IFRAME = 45,
        a.IMG = 46,
        a.INPUT = 47,
        a.INS = 48,
        a.ISINDEX = 49,
        a.KBD = 50,
        a.LABEL = 51,
        a.LEGEND = 52,
        a.LI = 53,
        a.LINK = 54,
        a.MAP = 55,
        a.MENU = 56,
        a.META = 57,
        a.NOFRAMES = 58,
        a.NOSCRIPT = 59,
        a.OBJECT = 60,
        a.OL = 61,
        a.OPTGROUP = 62,
        a.OPTION = 63,
        a.P = 64,
        a.PARAM = 65,
        a.PRE = 66,
        a.Q = 67,
        a.S = 68,
        a.SAMP = 69,
        a.SCRIPT = 70,
        a.SELECT = 71,
        a.SMALL = 72,
        a.SPAN = 73,
        a.STRIKE = 74,
        a.STRONG = 75,
        a.STYLE = 76,
        a.SUB = 77,
        a.SUP = 78,
        a.TABLE = 79,
        a.TBODY = 80,
        a.TD = 81,
        a.TEXTAREA = 82,
        a.TFOOT = 83,
        a.TH = 84,
        a.THEAD = 85,
        a.TITLE = 86,
        a.TR = 87,
        a.TT = 88,
        a.U = 89,
        a.UL = 90,
        a.VAR = 91,
        a.NOINDEX = 100,
        a
    })
      , Gp = [17, 18, 38, 32, 39, 15, 11, 7, 1];
    function Hp(a, b) {
        var c = Math.max(0, Math.min(b, 65535));
        Pe(a, [c >> 8, c & 255])
    }
    function Ip(a, b) {
        Pe(a, [b & 255])
    }
    function Jp(a, b, c) {
        return -1 !== za(a)(c, Gp) ? (Ip(b, c),
        !1) : !0
    }
    function Y(a, b) {
        for (var c = Math.max(0, b | 0); 127 < c; )
            Pe(a, [c & 127 | 128]),
            c >>= 7;
        Pe(a, [c])
    }
    function Kp(a, b) {
        Y(a, b.length);
        for (var c = 0; c < b.length; c += 1)
            Y(a, b.charCodeAt(c))
    }
    function Lp(a, b) {
        var c = b;
        255 < c.length && (c = c.substr(0, 255));
        a.push(c.length);
        for (var d = 0; d < c.length; d += 1)
            Hp(a, c.charCodeAt(d))
    }
    function Mp(a, b) {
        var c = [];
        if (Jp(a, c, 27))
            return [];
        Y(c, b);
        return c
    }
    function Np(a, b) {
        var c = Yf(b);
        if (!c)
            return b[Dp] = -1,
            null;
        var d = +b[Dp];
        if (!isFinite(d) || 0 >= d)
            return null;
        if (b.attributes)
            for (var e = b; e; ) {
                if (e.attributes.Ci)
                    return null;
                e = e.parentElement
            }
        e = 64;
        var f = Kj(a, b)
          , g = f && f[Dp] ? f[Dp] : 0;
        0 > g && (g = 0);
        c = (c || "").toUpperCase();
        var h = Fp()[c];
        h || (e |= 2);
        var k = Lj(a, b);
        k || (e |= 4);
        var l = Jj(a, b);
        (f = f ? Jj(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
        Ep[d].qf = l[0] + "x" + l[1];
        Ep[d].size = l[2] + "x" + l[3];
        b.id && "string" === typeof b.id && (e |= 32);
        f = [];
        if (Jp(a, f, 1))
            return null;
        Y(f, d);
        Ip(f, e);
        Y(f, g);
        h ? Ip(f, h) : Lp(f, c);
        k && Y(f, k);
        e & 8 || (Y(f, l[0]),
        Y(f, l[1]),
        Y(f, l[2]),
        Y(f, l[3]));
        e & 32 && Lp(f, b.id);
        Ip(f, 0);
        return f
    }
    function Op(a, b) {
        var c = b[Dp];
        if (!c || 0 > c || !fg(b) || !b.form || tp(b.form))
            return [];
        var d = Xf(a, b.form);
        if (0 > d)
            return [];
        if ($f(b))
            var e = {
                text: 0,
                color: 0,
                jc: 0,
                Gi: 0,
                "datetime-local": 0,
                email: 0,
                nf: 0,
                Vi: 0,
                search: 0,
                ej: 0,
                time: 0,
                url: 0,
                month: 0,
                gj: 0,
                password: 2,
                Ui: 3,
                Ei: 4,
                file: 6,
                image: 7
            }[b.type];
        else {
            e = {
                zi: 1,
                Ai: 5
            };
            var f = Yf(b);
            e = B(f) ? "" : e[f]
        }
        if ("number" !== typeof e)
            return [];
        f = -1;
        for (var g = b.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
            if (g[k].name === b.name) {
                if (g[k] === b) {
                    f = l;
                    break
                }
                l += 1
            }
        if (0 > f)
            return [];
        g = [];
        if (Jp(a, g, 7))
            return [];
        Y(g, c);
        Y(g, d);
        Y(g, e);
        Kp(g, b.name || "");
        Y(g, f);
        return g
    }
    var Pp = Jb(F("\u2022", w));
    function Qp(a, b, c) {
        var d = b[Dp];
        if (d) {
            a: {
                var e = Fd(a)
                  , f = b[Dp];
                if (0 < f) {
                    var g = [];
                    b = Jj(a, b);
                    var h = Ep[f]
                      , k = b[0] + "x" + b[1]
                      , l = b[2] + "x" + b[3];
                    if (k !== h.qf) {
                        h.qf = k;
                        if (Jp(a, g, 9)) {
                            a = [];
                            break a
                        }
                        Y(g, e);
                        Y(g, f);
                        Y(g, b[0]);
                        Y(g, b[1])
                    }
                    if (l !== h.size) {
                        h.size = l;
                        if (Jp(a, g, 10)) {
                            a = [];
                            break a
                        }
                        Y(g, e);
                        Y(g, f);
                        Y(g, b[2]);
                        Y(g, b[3])
                    }
                    if (g.length) {
                        a = g;
                        break a
                    }
                }
                a = []
            }
            Pe(c, a)
        }
        return d
    }
    function Rp(a, b) {
        var c = void 0 === c ? [] : c;
        for (var d = [], e = b; e && !Qp(a, e, c); e = Kj(a, e))
            d.push(e);
        M(function(f) {
            Ep.counter += 1;
            var g = Ep.counter;
            f[Dp] = g;
            Ep[g] = {};
            g = Np(a, f);
            f = Op(a, f);
            g && f && (Pe(c, g),
            Pe(c, f))
        }, Cp(d));
        return c
    }
    var Sp = !0;
    function Tp(a) {
        if (!Sp) {
            Sp = !0;
            a = Fd(a.l);
            var b = [];
            Ip(b, 14);
            Y(b, a);
            return b
        }
    }
    function Up(a) {
        if (Sp) {
            Sp = !1;
            var b = a.l;
            a = Fd(a.l);
            var c = [];
            Jp(b, c, 15) ? b = [] : (Y(c, a),
            b = c);
            return b
        }
    }
    function Vp(a) {
        var b = a.ma;
        if (!Sp || b && !b.fromElement)
            return Tp(a)
    }
    function Wp(a) {
        var b = a.ma;
        if (b && !b.toElement)
            return Up(a)
    }
    function Xp(a, b) {
        var c = a.l
          , d = []
          , e = b.form;
        if (!b[Dp] && e) {
            var f = e.elements;
            e = e.length;
            for (var g = 0; g < e; g += 1) {
                var h = f[g];
                gg(h) && !h[Dp] && Pe(d, Rp(c, h))
            }
        } else
            Pe(d, Rp(c, b));
        return d
    }
    function Yp(a) {
        var b = Nf(a.ma);
        if (b && gg(b)) {
            var c = Xp(a, b)
              , d = c.concat;
            var e = a.l;
            a = Fd(a.l);
            var f = [];
            Jp(e, f, 17) ? b = [] : (Y(f, a),
            Y(f, b[Dp]),
            b = f);
            return d.call(c, b)
        }
    }
    function Zp(a) {
        var b = a.l
          , c = a.ma.target;
        if (c && gg(c)) {
            b = Rp(b, c);
            var d = b.concat;
            var e = a.l;
            a = Fd(a.l);
            var f = [];
            Jp(e, f, 18) ? c = [] : (Y(f, a),
            Y(f, c[Dp]),
            c = f);
            return d.call(b, c)
        }
    }
    function $p(a) {
        var b = a.l
          , c = Nf(a.ma);
        if (!c || xp(c) || wp(c))
            return [];
        if (fg(c)) {
            var d = Q(b).C("isEU")
              , e = zp(b, c, d)
              , f = e.Wa;
            d = e.qb;
            e = e.hb;
            if (eg(c))
                var g = c.checked;
            else
                g = c.value,
                g = f ? S("", Pp(g.split(""))) : g;
            b = Rp(b, c);
            f = b.concat;
            var h = a.l;
            a = Fd(a.l);
            var k = [];
            Jp(h, k, 39) ? c = [] : (Y(k, a),
            Y(k, c[Dp]),
            Lp(k, String(g)),
            Ip(k, d && !e ? 1 : 0),
            c = k);
            return f.call(b, c)
        }
    }
    function aq(a) {
        var b = a.l
          , c = a.ma
          , d = Nf(c);
        if (!d || "SCROLLBAR" === d.nodeName)
            return [];
        var e = []
          , f = F(e, Pe);
        d && gg(d) ? f(Xp(a, d)) : f(Rp(b, d));
        var g = Pj(b, c);
        f = e.concat;
        a = Fd(a.l);
        var h = c.type
          , k = [g.x, g.y];
        g = c.which;
        c = c.button;
        var l = q(Ij(b, d))
          , m = l.next().value;
        for (l = l.next().value; d && (!m || !l); )
            if (d = Kj(b, d))
                l = q(Ij(b, d)),
                m = l.next().value,
                l = l.next().value;
        if (d)
            if (m = d[Dp],
            !m || 0 > m)
                b = [];
            else {
                l = {};
                var p = (l.mousemove = 2,
                l.click = 32,
                l.dblclick = 33,
                l.mousedown = 4,
                l.mouseup = 30,
                l.touch = 12,
                l)[h];
                p ? (l = [],
                d = Hj(b, d),
                Jp(b, l, p) ? b = [] : (Y(l, a),
                Y(l, m),
                Y(l, Math.max(0, k[0] - d.left)),
                Y(l, Math.max(0, k[1] - d.top)),
                /^mouse(up|down)|click$/.test(h) && (b = g || c,
                Ip(l, 2 > b ? 1 : b === (g ? 2 : 4) ? 4 : 2)),
                b = l)) : b = []
            }
        else
            b = [];
        return f.call(e, b)
    }
    var bq = "";
    function cq(a) {
        var b = null
          , c = a.l
          , d = c.document;
        if (c.getSelection) {
            try {
                var e = c.getSelection()
            } catch (g) {
                return []
            }
            if (Qa(e))
                return [];
            var f = "" + e;
            b = e.anchorNode
        } else
            d.selection && d.selection.createRange && (b = d.selection.createRange(),
            f = b.text,
            b = b.parentElement());
        if ("string" !== typeof f)
            return [];
        try {
            for (; b && 1 !== b.nodeType; )
                b = b.parentNode
        } catch (g) {
            return []
        }
        if (!b)
            return [];
        d = zp(c, b).Wa || wp(b, !0);
        b = b.getElementsByTagName("*");
        for (e = 0; e < b.length && !d; )
            d = b[e],
            d = zp(c, d).Wa || wp(d, !0),
            e += 1;
        if (f !== bq)
            return bq = f,
            b = d ? S("", Pp(f.split(""))) : f,
            f = a.l,
            a = Fd(a.l),
            0 === b.length ? b = c = "" : 100 >= b.length ? (c = b,
            b = "") : 200 >= b.length ? (c = b.substr(0, 100),
            b = b.substr(100)) : (c = b.substr(0, 97),
            b = b.substr(b.length - 97)),
            d = [],
            Jp(f, d, 29) ? a = [] : (Y(d, a),
            Kp(d, c),
            Kp(d, b),
            a = d),
            a
    }
    function dq(a) {
        return aq(a).concat(cq(a) || [])
    }
    function eq(a) {
        return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
    }
    var fq = !1;
    function gq(a) {
        var b = [];
        fq || (fq = !0,
        bq && Pe(b, Mp(a.l, Fd(a.l))),
        bi(a.l, function() {
            fq = !1
        }, "fv.c"));
        return b
    }
    function hq(a, b, c, d) {
        b = Nf(b);
        if (!b || yp(a, b))
            return [];
        var e = zp(a, b)
          , f = e.qb
          , g = e.hb;
        e = e.Wa;
        var h = Q(a);
        if (!g && (f && h.C("isEU") || wp(b)))
            a = [];
        else {
            f = Rp(a, b);
            g = f.concat;
            var k = Fd(a);
            h = [];
            if (Jp(a, h, 38))
                a = [];
            else {
                Y(h, k);
                Hp(h, c);
                Ip(h, d);
                a = b[Dp];
                if (!a || 0 > a)
                    a = 0;
                Y(h, a);
                Ip(h, e ? 1 : 0);
                a = h
            }
            a = g.call(f, a)
        }
        return a
    }
    var iq = !0;
    function jq(a) {
        var b = a.l
          , c = a.ma
          , d = c.keyCode
          , e = eq(c)
          , f = []
          , g = F(f, Pe);
        if ({
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1
        }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
            19 === d && 4 === (e & -17) && (d = 144),
            g(hq(b, c, d, e | 16)),
            iq = !1,
            bi(b, function() {
                iq = !0
            }, "fv.kd"),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(gq(a));
        return f
    }
    var kq = !1;
    function lq(a) {
        var b = a.l;
        a = a.ma;
        var c = [];
        iq && !kq && 0 !== a.which && (Pe(c, hq(b, a, a.charCode || a.keyCode, eq(a))),
        kq = !0,
        bi(b, function() {
            kq = !1
        }, "fv.kp"));
        return c
    }
    function mq(a) {
        var b = a.l
          , c = Nf(a.ma);
        if (!c || tp(c))
            return [];
        var d = [];
        if ("FORM" === c.nodeName) {
            for (var e = c.elements, f = 0; f < e.length; f += 1)
                jg(e[f]) || Pe(d, Rp(b, e[f]));
            a = Fd(a.l);
            e = Xf(b, c);
            if (0 > e)
                b = [];
            else {
                f = c.elements;
                var g = f.length;
                c = [];
                for (var h = 0; h < g; h += 1)
                    if (!jg(f[h])) {
                        var k = f[h][Dp];
                        k && 0 < k && c.push(k)
                    }
                f = [];
                if (Jp(b, f, 11))
                    b = [];
                else {
                    Y(f, a);
                    Y(f, e);
                    Y(f, c.length);
                    for (b = 0; b < c.length; b += 1)
                        Y(f, c[b]);
                    b = f
                }
            }
            Pe(d, b)
        }
        return d
    }
    function nq(a) {
        var b = a.flush;
        "BODY" === Yf(Nf(a.ma)) && b()
    }
    var oq = oa(function(a, b) {
        var c = E([a, "efv." + b.event], U);
        b.T = M(H(w, c), b.T);
        return b
    });
    function pq(a, b) {
        var c = mb(function(e) {
            return 0 < e.T.length
        }, b)
          , d = gc({
            target: a.document,
            type: "document"
        });
        return M(H(w, d, oq(a)), c)
    }
    var qq = x(function(a) {
        var b = []
          , c = []
          , d = [];
        a.document.attachEvent && !a.opera && (b.push(Up),
        c.push(Vp),
        c.push(Wp));
        a.document.addEventListener ? b.push(Zp) : (c.push(Yp),
        d.push(Zp));
        return pq(a, ("onpagehide"in a ? [] : [{
            target: a,
            type: "window",
            event: "beforeunload",
            T: [u]
        }, {
            target: a,
            type: "window",
            event: "unload",
            T: [u]
        }]).concat([{
            event: "click",
            T: [aq]
        }, {
            event: "dblclick",
            T: [aq]
        }, {
            event: "mousedown",
            T: [aq]
        }, {
            event: "mouseup",
            T: [dq]
        }, {
            event: "keydown",
            T: [jq]
        }, {
            event: "keypress",
            T: [lq]
        }, {
            event: "copy",
            T: [gq]
        }, {
            event: "blur",
            T: b
        }, {
            event: "focusin",
            T: c
        }, {
            event: "focusout",
            T: d
        }]).concat(!a.document.attachEvent || a.opera ? [{
            target: a,
            type: "window",
            event: "focus",
            T: [Tp]
        }, {
            target: a,
            type: "window",
            event: "blur",
            T: [Up]
        }] : []).concat(a.document.addEventListener ? [{
            event: "focus",
            T: [Yp]
        }, {
            event: "change",
            T: [$p]
        }, {
            event: "submit",
            T: [mq]
        }] : [{
            type: "formInput",
            event: "change",
            T: [$p]
        }, {
            type: "form",
            event: "submit",
            T: [mq]
        }]))
    })
      , rq = x(function(a) {
        var b = [];
        Qf(a) && b.push({
            target: a,
            type: "document",
            event: "mouseleave",
            T: [nq]
        });
        "onpagehide"in a && b.push({
            target: a,
            type: "window",
            event: "pagehide",
            T: [function(c) {
                c = c.flush;
                c()
            }
            ]
        });
        return b
    })
      , sq = ["submit", "beforeunload", "unload"]
      , tq = x(function(a, b) {
        var c = b(a);
        return G(function(d, e) {
            d[e.type + ":" + e.event] = e.T;
            return d
        }, {}, c)
    })
      , cp = F(qq, function(a, b, c, d) {
        return tq(b, a)[c + ":" + d] || []
    })
      , uq = /^\s*function submit\(\)/;
    function vq(a, b) {
        var c = a.document
          , d = []
          , e = ud(a)
          , f = ":submit" + Math.random()
          , g = []
          , h = D(b.flush, b)
          , k = oa(function(l, m) {
            U(a, "hfv." + l, function() {
                try {
                    var p = m.type
                } catch (r) {
                    return
                }
                p = K(p, sq);
                b.push(m, {
                    type: l
                });
                p && h()
            })()
        });
        return {
            start: U(a, "sfv", function() {
                var l = qq(a)
                  , m = rq(a);
                M(function(p) {
                    d.push(e.F(p.target, [p.event], k(p.type)))
                }, l);
                M(function(p) {
                    d.push(e.F(p.target, [p.event], U(a, "hff." + p.type + "." + p.event, function(r) {
                        M(sa({
                            l: a,
                            ma: r,
                            flush: h
                        }), p.T)
                    })))
                }, m);
                g = Ej(a, "form", c);
                c.attachEvent && (l = Ej(a, "form *", c),
                M(function(p) {
                    d.push(e.F(p, ["submit"], k("form")))
                }, g),
                M(function(p) {
                    fg(p) && d.push(e.F(p, ["change"], k("formInput")))
                }, l));
                M(function(p) {
                    var r = p.submit;
                    if (A(r) || "object" === typeof r && uq.test("" + r))
                        p[f] = r,
                        p.submit = U(a, "fv", function() {
                            var t = {
                                target: p,
                                type: "submit"
                            };
                            k("document")(t);
                            return p[f]()
                        })
                }, g)
            }),
            stop: U(a, "ufv", function() {
                M(Qe, d);
                M(function(l) {
                    l && (l.submit = l[f])
                }, g);
                b.flush()
            })
        }
    }
    function wq(a, b, c) {
        function d() {
            h && h.stop()
        }
        if (!b.zb)
            return R.resolve(u);
        var e = Sh(a, "4", b)
          , f = {
            K: Le()
        }
          , g = new ep(a,c,function(k, l, m) {
            if (!e)
                return R.resolve();
            l = "wv-data=" + Ql(k, !0);
            var p = {};
            p["wv-part"] = "" + m;
            m = k.length;
            for (var r = 0, t = 255, v = 255, z, P, W; m; ) {
                z = 21 < m ? 21 : m;
                m -= z;
                do
                    P = "string" === typeof k ? k.charCodeAt(r) : k[r],
                    r += 1,
                    255 < P && (W = P >> 8,
                    P &= 255,
                    P ^= W),
                    t += P,
                    v += t;
                while (--z);
                t = (t & 255) + (t >> 8);
                v = (v & 255) + (v >> 8)
            }
            k = (t & 255) + (t >> 8) << 8 | (v & 255) + (v >> 8);
            return e(N({}, f, {
                N: {
                    ba: l
                },
                H: (p["wv-check"] = "" + (65535 === k ? 0 : k),
                p["wv-type"] = c.type,
                p)
            }), b)["catch"](U(a, "m.n.m.s"))
        }
        )
          , h = vq(a, g);
        return Xh(b, function(k) {
            k && Q(a).D("isEU", J(k, "settings.eu"));
            Q(a).C("oo") || h && gp(a, k) && h.start();
            return d
        })
    }
    var xq = V("fw.p", function(a, b) {
        var c;
        if (!(c = b.Ig || !b.zb)) {
            var d = Q(a)
              , e = !1;
            c = d.C("hitParam", {});
            var f = O(b);
            c[f] && (d = d.C("counters", {}),
            e = Nc(b.ca) && !d[f]);
            c[f] = 1;
            c = e
        }
        return c ? R.resolve(u) : wq(a, b, new bp(a))
    });
    function yq(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        dp.call(this, a, b, c);
        this.we = this.Bb = this.xe = 0;
        this.buffer = [];
        this.Xc = 2E3;
        this.Z = Eg(a);
        this.Rc();
        this.we = d
    }
    ka(yq, dp);
    function zq(a, b) {
        return nb(a.Z.$("ag", b))
    }
    function Aq(a, b, c) {
        b(vg(U(a.l, "wv2.b.st"), function(d) {
            a.send(d, c)
        }))
    }
    function Bq(a, b, c) {
        sg(a.l, a.Oe);
        var d = Math.ceil(a.ja.lb(c) / 63E4)
          , e = a.ja.pe(c, d);
        M(function(f, g) {
            var h = {};
            h = N({}, b, (h.data = f,
            h.partNum = g + 1,
            h.end = g + 1 === d,
            h.partsTotal = e.length,
            h));
            var k = a.ja.Aa([h], !1);
            Aq(a, k, [h])
        }, e);
        a.Rc()
    }
    n = yq.prototype;
    n.send = function(a, b) {
        var c = this;
        this.Z.$("se", b);
        return dp.prototype.send.call(this, a, b).then(w, function() {
            c.Z.$("see", b)
        })
    }
    ;
    function Cq(a, b, c, d, e, f) {
        yq.$c["" + b + c] || (a.$c[c] = new yq(f,e,d,"m" === c ? 31457280 : 0));
        return a.$c[c]
    }
    n.push = function(a) {
        var b = this;
        if (!(this.we && this.xe >= this.we)) {
            this.Z.$("p", a);
            var c = this.ja.ub(a)
              , d = this.ja.lb(c);
            7E5 < d ? Bq(this, a, c) : (c = zq(this, this.buffer.concat([a])),
            c = G(function(e, f) {
                return e + b.ja.lb(b.ja.ub(f))
            }, 0, c),
            this.Bb + c + d >= 7E5 * .7 && this.flush(),
            this.buffer.push(a),
            this.Bb += d)
        }
    }
    ;
    n.F = function(a, b) {
        this.Z.F([a], b)
    }
    ;
    n.ga = function(a, b) {
        this.Z.ga([a], b)
    }
    ;
    n.flush = function(a) {
        var b = this.buffer.concat(zq(this, this.buffer));
        b.length && (this.buffer = [],
        this.xe += this.Bb,
        this.Bb = 0,
        a = this.ja.Aa(b, a),
        Aq(this, a, b))
    }
    ;
    yq.$c = {};
    function Dq(a, b, c, d, e) {
        d = void 0 === d ? 1 : d;
        e = void 0 === e ? "itc" : e;
        b = Rd(b, c);
        pl(a, b, d)(vg(U(a, e), u))
    }
    var Eq = {
        type: "event",
        event: "fatalError",
        data: {
            code: "invalid-snapshot",
            Pg: "p.s.f",
            stack: ""
        }
    }
      , Fq = ["checkbox", "radio"]
      , Gq = /pwd|value|password/i;
    function Hq(a, b, c, d, e, f) {
        f = void 0 === f ? Yf(b) : f;
        var g = {
            pb: !1,
            value: d
        };
        if (up(b))
            "value" === c ? !C(d) && "" !== d && (c = e.Kd,
            f = e.uf,
            e = mp(a, b),
            f ? (c = zp(a, b, c),
            b = c.qb,
            a = c.hb,
            c = c.Wa,
            g.pb = !a && (e || b)) : (g.pb = e,
            c = !(b && Of("ym-record-keys", b))),
            c || e) && (d = "" + d,
            g.value = 0 < d.length ? ul("\u2022", d.length) : "") : "checked" === c && K((b.getAttribute("type") || "").toLowerCase(), Fq) ? g.value = b.checked ? "checked" : null : Gq.test(c) && xp(b) && (g.value = null);
        else if ("IMG" === f && "src" === c)
            (d = mp(a, b)) ? (g.pb = d,
            g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (b.getAttribute("srcset") ? b.currentSrc : "") || b.src;
        else if ("A" === f && "href" === c)
            g.value = d ? "#" : "";
        else if (K(c, ["srcset", "integrity", "crossorigin", "password"]) || 2 < c.length && 0 === La(c, "on") || "IFRAME" === f && "src" === c || "SCRIPT" === f && K(c, ["src", "type"]))
            g.value = null;
        return g
    }
    function Iq(a, b, c) {
        var d = {};
        up(a) ? d.value = a.value || c.value : "IMG" !== b || c.src || (d.src = "");
        return d
    }
    function Jq(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        e = void 0 === e ? Yf(b) : e;
        var f = N(G(function(h, k) {
            h[k.name] = k.value;
            return h
        }, {}, ub(b.attributes)), d);
        N(f, Iq(b, e, f));
        var g = (d = G(function(h, k) {
            var l = q(k)
              , m = l.next().value;
            l = l.next().value;
            l = Hq(a, b, m, l, c, e);
            var p = l.value;
            C(p) ? delete f[m] : f[m] = p;
            return h || l.pb
        }, !1, ac(f))) && Vf(b);
        g && (f.width = g.width,
        f.height = g.height);
        return {
            pb: d,
            og: f
        }
    }
    function Kq(a, b) {
        if (y(b))
            return b;
        var c = a.textContent;
        if (y(c))
            return c;
        c = a.data;
        if (y(c))
            return c;
        c = a.nodeValue;
        return y(c) ? c : ""
    }
    var Lq = cb("location.href");
    function Mq(a, b, c, d) {
        d = void 0 === d ? "wv2" : d;
        return {
            J: function(e, f) {
                return U(a, d + "." + c + "." + f, e, void 0, b)
            }
        }
    }
    function Z(a, b, c) {
        this.yh = "wv2.c";
        this.rb = [];
        this.ha = [];
        this.l = a;
        this.L = Mq(a, this, c, this.yh);
        this.G = b;
        this.Ra = this.G.fh();
        this.start = this.L.J(this.start, "st");
        this.stop = this.L.J(this.stop, "sp")
    }
    Z.prototype.start = function() {
        var a = this;
        this.rb = M(function(b) {
            var c = q(b);
            b = c.next().value;
            var d = c.next().value;
            c = c.next().value;
            d = D(a.L.J(d, b[0]), a);
            return a.Ra.F(c || a.l, b, d)
        }, this.ha)
    }
    ;
    Z.prototype.stop = function() {
        M(Qe, this.rb)
    }
    ;
    Z.prototype.Y = function(a) {
        return this.G.va().Y(a)
    }
    ;
    function Nq(a, b, c) {
        Z.call(this, a, b, c);
        this.sa = {
            elements: [],
            attributes: []
        };
        this.index = 0;
        this.Xd = this.L.J(this.Xd, "o");
        this.ld = this.L.J(this.ld, "io");
        this.Yc = this.L.J(this.Yc, "ao");
        this.ee = this.L.J(this.ee, "a");
        this.ce = this.L.J(this.ce, "at");
        this.fe = this.L.J(this.fe, "r");
        this.de = this.L.J(this.de, "c");
        this.oa = new a.MutationObserver(this.Xd)
    }
    ka(Nq, Z);
    n = Nq.prototype;
    n.start = function() {
        this.oa.observe(this.l.document.documentElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
            attributeOldValue: !0,
            characterDataOldValue: !0
        })
    }
    ;
    n.stop = function() {
        this.oa.disconnect()
    }
    ;
    n.Yc = function(a) {
        var b = a.target
          , c = a.attributeName
          , d = a.oldValue;
        a = b.getAttribute(c);
        if (a === d)
            return !1;
        d = za(this.l)(b, this.sa.elements);
        -1 === d && (d = this.sa.elements.push(b) - 1,
        this.sa.attributes[d] = {});
        this.sa.attributes[d] || (this.sa.attributes[d] = {});
        this.sa.attributes[d][c] = Hq(this.l, b, c, a, this.G.Ib()).value;
        return !0
    }
    ;
    n.ld = function(a) {
        function b(g) {
            var h = za(c.l)(g, d);
            return -1 === h ? (d.push(g),
            g = {
                ud: {}
            },
            e.push(g),
            g) : e[h]
        }
        var c = this
          , d = []
          , e = [];
        M(function(g) {
            var h = g.attributeName
              , k = g.removedNodes
              , l = g.oldValue
              , m = g.target
              , p = g.nextSibling
              , r = g.previousSibling;
            switch (g.type) {
            case "attributes":
                if (c.Yc(g)) {
                    var t = b(m);
                    t.ud[h] || (t.ud[h] = Hq(c.l, m, h, l, c.G.Ib()).value)
                }
                break;
            case "childList":
                k && M(function(v) {
                    t = b(v);
                    t.We || N(t, {
                        We: m,
                        Wg: p ? p : void 0,
                        Xg: r ? r : void 0
                    })
                }, ub(k));
                break;
            case "characterData":
                t = b(m),
                t.Xe || (t.Xe = l)
            }
        }, a);
        var f = this.G.va();
        M(function(g, h) {
            f.oe(g, e[h])
        }, d)
    }
    ;
    n.Xd = function(a) {
        var b = this;
        if (Lq(this.l)) {
            var c = this.G.stamp();
            this.ld(a);
            M(function(d) {
                var e = d.addedNodes
                  , f = d.removedNodes
                  , g = d.target;
                switch (d.type) {
                case "childList":
                    f && f.length && b.fe(ub(f), c);
                    e && e.length && b.ee(ub(e), c);
                    break;
                case "characterData":
                    b.de(g, c)
                }
            }, a);
            this.ce(c)
        } else
            this.stop()
    }
    ;
    n.ce = function(a) {
        var b = this;
        M(function(c, d) {
            var e = Oq(b);
            b.G.V("mutation", {
                index: e,
                attributes: b.sa.attributes[d],
                target: b.Y(c)
            }, "ac", a)
        }, this.sa.elements);
        this.sa.elements = [];
        this.sa.attributes = []
    }
    ;
    n.ee = function(a, b) {
        var c = this
          , d = Oq(this);
        this.G.va().uc({
            nodes: a,
            Qc: function(e) {
                e = M(function(f) {
                    f.node = void 0;
                    return f
                }, e);
                c.G.V("mutation", {
                    index: d,
                    nodes: e
                }, "ad", b)
            }
        })
    }
    ;
    n.fe = function(a, b) {
        var c = this
          , d = Oq(this)
          , e = this.G.va()
          , f = M(function(g) {
            var h = e.removeNode(g);
            Mk(c.l, g, function(k) {
                e.removeNode(k)
            });
            return h
        }, a);
        this.G.V("mutation", {
            index: d,
            nodes: f
        }, "re", b)
    }
    ;
    n.de = function(a, b) {
        var c = Oq(this);
        this.G.V("mutation", {
            value: a.textContent,
            target: this.Y(a),
            index: c
        }, "tc", b)
    }
    ;
    function Oq(a) {
        var b = a.index;
        a.index += 1;
        return b
    }
    function Pq(a, b) {
        var c = this;
        this.oc = [];
        this.gb = [];
        this.Wd = 1;
        this.Le = this.Gf = 0;
        this.za = {};
        this.Sa = {};
        this.Hb = [];
        this.Fd = function(e) {
            return c.gb.length ? K(e, c.gb) : !1
        }
        ;
        this.removeNode = function(e) {
            var f = c.Y(e)
              , g = Yf(e);
            if (g && !B(f))
                return g = "NR:" + g.toLowerCase(),
                c.Fd(g) && c.Z.$(g, {
                    data: {
                        node: e,
                        id: f
                    }
                }),
                f
        }
        ;
        this.kb = function(e) {
            var f = Yf(e);
            if (f) {
                var g = e.__ym_indexer;
                return g ? g : (g = c.Wd,
                e.__ym_indexer = g,
                c.Wd += 1,
                f = "NA:" + f.toLowerCase(),
                c.Fd(f) && c.Z.$(f, {
                    data: {
                        node: e,
                        id: g
                    }
                }),
                g)
            }
            return null
        }
        ;
        this.Cf = function() {
            c.Gf = X(c.l, H(D(c.aa, c, !1), c.Cf), 50, "i.s")
        }
        ;
        this.Af = function() {
            c.Le = X(c.l, H(D(c.dd, c, !1), c.Af), 50, "i.g")
        }
        ;
        this.Sh = function(e) {
            null === c.za[e] && delete c.za[e];
            null === c.Sa[e] && delete c.Sa[e]
        }
        ;
        this.l = a;
        var d = Mq(a, this, "i");
        this.Z = Eg(a);
        this.options = b;
        this.start = d.J(this.start, "st");
        this.stop = d.J(this.stop, "sp");
        this.Y = d.J(this.Y, "i");
        this.oe = d.J(this.oe, "o");
        this.uc = d.J(this.uc, "a");
        this.removeNode = d.J(this.removeNode, "r");
        this.aa = d.J(this.aa, "s");
        this.dd = d.J(this.dd, "g")
    }
    n = Pq.prototype;
    n.oe = function(a, b) {
        var c = this.kb(a);
        Qa(c) || (this.Sa[c] && this.Y(a),
        this.Sa[c] = b)
    }
    ;
    n.F = function(a, b, c) {
        a = "" + b + a;
        this.gb.push(a);
        this.Fd(a) || this.gb.push(a);
        this.Z.F([a], c)
    }
    ;
    n.ga = function(a, b, c) {
        var d = "" + b + a;
        this.gb = mb(function(e) {
            return e !== d
        }, this.gb);
        this.Z.ga([d], c)
    }
    ;
    n.start = function() {
        this.Cf();
        this.Af()
    }
    ;
    n.stop = function() {
        this.flush();
        sg(this.l, this.Le);
        sg(this.l, this.Gf);
        this.oc = [];
        this.Hb = [];
        this.za = {};
        this.Sa = {}
    }
    ;
    n.uc = function(a) {
        var b = this
          , c = []
          , d = 0
          , e = {
            Qc: a.Qc,
            result: [],
            vc: 0,
            nodes: c
        };
        this.oc.push(e);
        M(function(f) {
            Mk(b.l, f, function(g) {
                var h = b.kb(g);
                Qa(h) || (c.push(g),
                b.za[h] && b.Y(g),
                b.za[h] = {
                    node: g,
                    event: e,
                    ki: d
                },
                d += 1)
            })
        }, a.nodes)
    }
    ;
    n.Y = function(a) {
        if (a === this.l)
            return 0;
        var b = this.kb(a)
          , c = this.za[b];
        if (Qa(b))
            var d = {};
        else
            (d = this.Sa[b]) ? (this.Sa[b] = null,
            this.Hb.push(b)) : d = {};
        var e = d.We
          , f = d.ud
          , g = d.Xe
          , h = d.Wg
          , k = d.Xg;
        if (c) {
            d = c.event;
            c = c.ki;
            var l = Jf(this.l) === a;
            h = h || a.nextSibling;
            var m = k || a.previousSibling;
            k = !l && h ? this.kb(h) : null;
            m = !l && m ? this.kb(m) : null;
            l = this.l;
            h = this.options;
            e = this.kb(e || a.parentNode || a.parentElement) || 0;
            var p = f;
            m = void 0 === m ? null : m;
            k = void 0 === k ? null : k;
            p = void 0 === p ? {} : p;
            var r = void 0 === r ? Yf(a) : r;
            if (B(r))
                a = void 0;
            else {
                f = {
                    id: b,
                    prev: m !== e ? m : null,
                    next: k !== e ? k : null,
                    parent: e,
                    name: r.toLowerCase(),
                    node: a
                };
                if (Hf(a)) {
                    if (r = Kq(a, g),
                    f.attributes = {},
                    f.content = r)
                        if (a = mp(l, a))
                            f.content = "" !== ke(r) ? np(l, r) : r,
                            f.hidden = a
                } else
                    r = Jq(l, a, h, p, r),
                    g = r.pb,
                    f.attributes = r.og,
                    g && (f.hidden = g),
                    a.namespaceURI && Na(a.namespaceURI, "svg") && (f.namespace = a.namespaceURI);
                a = f
            }
            if (B(a))
                return;
            this.za[b] = null;
            this.Hb.push(b);
            d.result[c] = a;
            d.vc += 1;
            d.nodes.length === d.vc && d.Qc(d.result)
        }
        return b
    }
    ;
    n.flush = function() {
        this.aa(!0)
    }
    ;
    n.dd = function() {
        this.Hb.length && Rd(this.Hb, this.Sh)(Nd(this.l, 30))
    }
    ;
    n.aa = function(a) {
        var b = this;
        if (Lq(this.l)) {
            var c = bc(this.za);
            c = G(function(d, e) {
                b.za[e] && d.push(b.za[e].node);
                return d
            }, [], c);
            c = Rd(c, this.Y);
            a = a ? Ld(u) : Od(this.l, 20);
            c(a);
            this.oc = mb(function(d) {
                return d.vc !== d.result.length
            }, this.oc)
        }
    }
    ;
    var Qq = ["input", "change", "keyup", "paste", "cut"];
    function Rq(a, b, c) {
        Z.call(this, a, b, c);
        this.inputs = {};
        this.nd = !1;
        this.Cc = this.L.J(this.Cc, "ii");
        this.Dc = this.L.J(this.Dc, "ir");
        this.Lc = this.L.J(this.Lc, "ri");
        this.Uc = this.L.J(this.Uc, "ur");
        this.Dd = this.L.J(this.Dd, "ce");
        this.sc = this.L.J(this.sc, "vc")
    }
    ka(Rq, Z);
    n = Rq.prototype;
    n.start = function() {
        var a = this
          , b = this.G.va();
        this.nd = Sq(this);
        M(function(c) {
            c = c.toLowerCase();
            b.F(c, "NA:", D(a.Cc, a));
            b.F(c, "NR:", D(a.Dc, a))
        }, hg);
        this.rb = [this.Ra.F(this.l.document, Qq, D(this.Dd, this)), function() {
            M(function(c) {
                c = c.toLowerCase();
                b.ga(c, "NA:", a.Cc);
                b.ga(c, "NR:", a.Dc)
            }, hg);
            M(a.Uc, bc(a.inputs))
        }
        ]
    }
    ;
    n.Uc = function(a) {
        var b = this.inputs[a];
        if (b) {
            if (this.nd) {
                var c = b.Mh;
                b = b.element;
                c && this.l.Object.defineProperty(b, Tq(b), c)
            }
            delete this.inputs[a]
        }
    }
    ;
    n.Dc = function(a) {
        a && this.Uc(a.data.id)
    }
    ;
    n.Cc = function(a) {
        a && (a = a.data,
        this.Lc(a.node, a.id))
    }
    ;
    function Tq(a) {
        return eg(a) ? "checked" : "value"
    }
    n.Dd = function(a) {
        if (a = a.target) {
            var b = Tq(a);
            this.sc(a[b], a)
        }
    }
    ;
    n.sc = function(a, b) {
        var c = this.Y(b)
          , d = this.inputs[c];
        if (!d && (d = this.Lc(d, c),
        !d))
            return;
        var e = d;
        c = e.wg;
        var f = e.value
          , g = Tq(b)
          , h = !a || K(typeof a, ["string", "boolean", "number"]);
        e = this.G.Ib().Kd;
        h && a !== f && (f = Hq(this.l, b, g, a, this.G.Ib()).value,
        c ? this.G.V("event", {
            target: this.Y(b),
            checked: !!a
        }, "change") : (c = zp(this.l, b, e),
        e = c.hb,
        this.G.V("event", {
            value: f,
            hidden: c.qb && !e,
            target: this.Y(b)
        }, "change")),
        d.value = a)
    }
    ;
    n.Lc = function(a, b) {
        var c = this;
        if (!up(a) || "__ym_input_override_test" === a.getAttribute("class") || this.inputs[b])
            return null;
        var d = eg(a)
          , e = Tq(a)
          , f = {
            element: a,
            wg: d,
            value: a[e]
        };
        this.inputs[b] = f;
        this.nd && bi(this.l, function() {
            var g = c.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a), e) || {}
              , h = c.l.Object.getOwnPropertyDescriptor(a, e) || {}
              , k = N({}, g, h);
            if (va("((set)?(\\s?" + e + ")?)?", k.set)) {
                try {
                    c.l.Object.defineProperty(a, e, N({}, k, {
                        configurable: !0,
                        set: function(l) {
                            c.sc(l, this);
                            return k.set.call(this, l)
                        }
                    }))
                } catch (l) {}
                f.Mh = k
            }
        });
        return f
    }
    ;
    function Sq(a) {
        var b = !0
          , c = Lf(a.l)("input");
        try {
            c = Lf(a.l)("input");
            c.value = "INPUT_VALUE";
            c.style.setProperty("display", "none", "important");
            c.setAttribute("type", "text");
            c.setAttribute("class", "__ym_input_override_test");
            var d = a.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c), "value") || {}
              , e = a.l.Object.getOwnPropertyDescriptor(c, "value") || {}
              , f = N({}, d, e);
            a.l.Object.defineProperty(c, "value", N({}, f, {
                configurable: !0,
                set: function(g) {
                    return f.set.call(c, g)
                }
            }));
            "INPUT_VALUE" !== c.value && (b = !1);
            c.value = "INPUT_TEST";
            "INPUT_TEST" !== c.value && (b = !1)
        } catch (g) {
            b = !1
        }
        return b
    }
    function Uq(a, b, c) {
        Z.call(this, a, b, c);
        this.Za = {
            width: 0,
            height: 0,
            pageHeight: 0,
            pageWidth: 0,
            orientation: 0
        };
        this.ha.push([["resize"], this.Kh]);
        this.ha.push([["orientationchange"], this.Ih])
    }
    ka(Uq, Z);
    Uq.prototype.start = function() {
        Z.prototype.start.call(this);
        this.Ef()
    }
    ;
    Uq.prototype.Kh = function() {
        var a = Vq(this);
        if (a.height !== this.Za.height || a.width !== this.Za.width)
            this.Za = a,
            Wq(this, a)
    }
    ;
    Uq.prototype.Ih = function() {
        var a = Vq(this);
        if (this.Za.orientation !== a.orientation) {
            this.Za = a;
            var b = void 0 === b ? this.G.stamp() : b;
            this.G.V("event", {
                width: a.width,
                height: a.height,
                orientation: a.orientation
            }, "deviceRotation", b)
        }
    }
    ;
    function Vq(a) {
        var b = a.G.jb()
          , c = q(Tf(a.l))
          , d = c.next().value;
        c = c.next().value;
        b = b.Ad();
        return {
            width: d,
            height: c,
            pageWidth: b ? b.scrollWidth : 0,
            pageHeight: b ? b.scrollHeight : 0,
            orientation: a.G.jb().gh()
        }
    }
    function Wq(a, b, c) {
        c = void 0 === c ? a.G.stamp() : c;
        a.G.V("event", {
            width: b.width,
            height: b.height,
            pageWidth: b.pageWidth,
            pageHeight: b.pageHeight
        }, "resize", c)
    }
    Uq.prototype.Ef = function() {
        var a = Vq(this);
        if (a.height && a.width && a.pageWidth && a.pageHeight) {
            var b = this.Za;
            b.height && b.width && b.pageWidth && b.pageHeight || (this.Za = a);
            Wq(this, a, 0)
        } else
            X(this.l, D(this.Ef, this), 300)
    }
    ;
    function Xq(a) {
        this.index = 0;
        this.xb = {};
        this.l = a
    }
    function Yq(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = Ed(a.l)
          , f = a.index;
        a.index += 1;
        a.xb[f] = {
            Pa: 0,
            Qb: !1,
            fn: b,
            Zc: [],
            Pd: e(Ad)
        };
        return function() {
            var g = Ha(arguments)
              , h = d.Ue && !a.xb[f].Qb
              , k = a.xb[f];
            sg(a.l, k.Pa);
            k.Zc = g;
            k.Qb = !0;
            var l = e(Ad);
            if (h || l - k.Pd >= c)
                b.apply(null, ca(g)),
                k.Pd = l;
            k.Pa = X(a.l, function() {
                h || (b.apply(null, ca(g)),
                k.Pd = e(Ad));
                k.Qb = !1;
                k.Zc = []
            }, c, "th")
        }
    }
    Xq.prototype.flush = function() {
        var a = this;
        M(function(b) {
            var c = a.xb[b]
              , d = c.Pa
              , e = c.fn
              , f = c.Zc;
            c.Qb && (a.xb[b].Qb = !1,
            e.apply(null, ca(f)),
            sg(a.l, d))
        }, bc(this.xb))
    }
    ;
    function Zq(a, b, c) {
        Z.call(this, a, b, c);
        this.Tf = [];
        this.Ge = {
            x: 0,
            y: 0
        };
        this.Ba = new Xq(a);
        this.Gc = this.L.J(this.Gc, "o");
        this.ha.push([["scroll"], this.Lh])
    }
    ka(Zq, Z);
    n = Zq.prototype;
    n.start = function() {
        Z.prototype.start.call(this);
        this.G.V("event", {
            x: Math.max(this.l.scrollX, 0),
            y: Math.max(this.l.scrollY, 0),
            page: !0,
            target: -1
        }, "scroll", 0)
    }
    ;
    n.stop = function() {
        Z.prototype.stop.call(this);
        this.Ba.flush()
    }
    ;
    n.Lh = function(a) {
        if (this.G.jb().ef())
            this.Gc(a);
        else {
            var b = a.target
              , c = mb(function(d) {
                return q(d).next().value === b
            }, this.Tf).pop();
            if (c)
                (0,
                c[1])(a);
            else
                c = Yq(this.Ba, D(this.Gc, this), 100, {
                    Ue: !0
                }),
                this.Tf.push([b, c]),
                c(a)
        }
    }
    ;
    n.Gc = function(a) {
        var b = this.G.jb().Ad();
        a = a.target;
        var c = this.Jb(a);
        b = b === a || this.l === a || this.l.document === a;
        var d = Math.max(c.left, 0);
        c = Math.max(c.top, 0);
        if (b) {
            if (this.Ge.x === d && this.Ge.y === c)
                return;
            this.Ge = {
                x: d,
                y: c
            }
        }
        this.G.V("event", {
            x: d,
            y: c,
            page: b,
            target: b ? -1 : this.Y(a)
        }, "scroll")
    }
    ;
    n.Jb = function(a) {
        var b = {
            left: 0,
            top: 0
        };
        if (!a)
            return b;
        if (a.window === a)
            return {
                top: a.scrollY || 0,
                left: a.scrollX || 0
            };
        var c = a.ownerDocument || a
          , d = a.documentElement
          , e = c.defaultView || c.parentWindow
          , f = c.body;
        return a !== c || (a = this.G.jb().Ad(),
        a) ? K(a, [d, f]) ? {
            top: a.scrollTop || e.scrollY,
            left: a.scrollLeft || e.scrollX
        } : {
            top: a.scrollTop || 0,
            left: a.scrollLeft || 0
        } : b
    }
    ;
    var $q = ["mousemove", "mousedown", "mouseup", "click"];
    function ar(a, b, c) {
        Z.call(this, a, b, c);
        this.ha.push([$q, this.Hh]);
        this.Ba = new Xq(a);
        this.Bc = this.L.J(this.Bc, "n");
        this.ai = this.L.J(Yq(this.Ba, D(this.Bc, this), 100), "t")
    }
    ka(ar, Z);
    ar.prototype.stop = function() {
        Z.prototype.stop.call(this);
        this.Ba.flush()
    }
    ;
    ar.prototype.Hh = function(a) {
        var b = null;
        try {
            b = a.type
        } catch (c) {
            return
        }
        "mousemove" === b ? this.ai(a) : this.Bc(a)
    }
    ;
    ar.prototype.Bc = function(a) {
        var b = a.type
          , c = void 0 === a.clientX ? null : a.clientX
          , d = void 0 === a.clientY ? null : a.clientY;
        a = a.target || this.l.document.elementFromPoint(c, d);
        this.G.V("event", {
            x: c || 0,
            y: d || 0,
            target: this.Y(a)
        }, b)
    }
    ;
    var br = ["focus", "blur"];
    function cr(a, b, c) {
        Z.call(this, a, b, c);
        this.ha.push([br, this.Vg])
    }
    ka(cr, Z);
    cr.prototype.Vg = function(a) {
        var b = a.target;
        a = a.type;
        this.G.V("event", {
            target: this.Y(b === this.l ? this.l.document.documentElement : b)
        }, a)
    }
    ;
    var dr = H(x(function(a) {
        var b = wa(a.getSelection, "getSelection");
        return b ? D(b, a) : u
    }), Qe)
      , er = ["mousemove", "touchmove", "mousedown", "touchdown", "select"]
      , fr = /text|search|password|tel|url/;
    function gr(a, b, c) {
        Z.call(this, a, b, c);
        this.Gd = !1;
        this.ha.push([er, this.lh])
    }
    ka(gr, Z);
    gr.prototype.lh = function(a) {
        var b = this.G
          , c = a.type
          , d = a.which;
        a = a.target;
        if ("mousemove" !== c || 1 === d) {
            if ("select" === c)
                a: {
                    if (fr.test(a.type || "") && (c = this.Y(a),
                    !B(c))) {
                        c = {
                            start: a.selectionStart,
                            end: a.selectionEnd,
                            target: c
                        };
                        break a
                    }
                    c = void 0
                }
            else
                a: {
                    if ((c = dr(this.l)) && 0 < c.rangeCount && (c = c.getRangeAt(0) || this.l.document.createRange(),
                    d = this.Y(c.startContainer),
                    a = this.Y(c.endContainer),
                    !B(d) && !B(a))) {
                        c = {
                            start: c.startOffset,
                            end: c.endOffset,
                            startNode: d,
                            endNode: a
                        };
                        break a
                    }
                    c = void 0
                }
            c && c.start !== c.end ? (this.Gd = !0,
            b.V("event", c, "selection")) : this.Gd && (this.Gd = !1,
            b.V("event", {
                start: 0,
                end: 0
            }, "selection"))
        }
    }
    ;
    var hr = {}
      , ir = (hr.focus = "windowfocus",
    hr.blur = "windowblur",
    hr.pageshow = "windowfocus",
    hr.pagehide = "windowblur",
    hr);
    function jr(a, b, c) {
        Z.call(this, a, b, c);
        this.visibility = null;
        B(this.l.document.hidden) ? B(this.l.document.msHidden) ? B(this.l.document.webkitHidden) || (this.visibility = {
            hidden: "webkitHidden",
            event: "webkitvisibilitychange"
        }) : this.visibility = {
            hidden: "msHidden",
            event: "msvisibilitychange"
        } : this.visibility = {
            hidden: "hidden",
            event: "visibilitychange"
        };
        this.Cd = this.L.J(this.Cd, "fbe");
        this.Ed = this.L.J(this.Ed, "she")
    }
    ka(jr, Z);
    jr.prototype.start = function() {
        this.rb = [this.Ra.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], D(this.Cd, this))];
        "onpagehide"in this.l && this.rb.push(this.Ra.F(this.l, ["pageshow", "pagehide"], D(this.Ed, this), null))
    }
    ;
    jr.prototype.Ed = function(a) {
        this.G.V("event", {}, ir[a.type])
    }
    ;
    jr.prototype.Cd = function(a) {
        this.visibility ? this.G.V("event", {}, ir[this.l.document[this.visibility.hidden] ? "blur" : "focus"]) : this.G.V("event", {}, ir[a.type])
    }
    ;
    function kr() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    function lr() {
        return kr() + kr() + "-" + kr() + "-" + kr() + "-" + kr() + "-" + kr() + kr() + kr()
    }
    var mr = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"];
    function nr(a, b, c) {
        Z.call(this, a, b, c);
        this.Tc = {};
        this.scrolling = !1;
        this.Df = 0;
        this.ha.push([["scroll"], this.Wh, this.l.document]);
        this.ha.push([mr, this.ei, this.l.document]);
        this.Ba = new Xq(a);
        this.Mb = this.L.J(this.Mb, "nh");
        this.bi = this.L.J(Yq(this.Ba, this.Mb, this.G.jb().ef() ? 0 : 50, {
            Ue: !0
        }), "th")
    }
    ka(nr, Z);
    nr.prototype.Wh = function() {
        var a = this;
        this.scrolling = !0;
        sg(this.l, this.Df);
        this.Df = X(this.l, function() {
            a.scrolling = !1
        }, 150)
    }
    ;
    nr.prototype.ei = function(a) {
        var b = this
          , c = "touchcancel" === a.type || "touchend" === a.type;
        a.changedTouches && 0 < a.changedTouches.length && M(function(d) {
            b.Tc[d.identifier] || (b.Tc[d.identifier] = lr());
            d.__ym_touch_id = b.Tc[d.identifier];
            c && delete b.Tc[d.identifier]
        }, ub(a.changedTouches));
        "touchmove" === a.type ? this.scrolling ? this.Mb(a) : this.bi(a, this.G.stamp()) : this.Mb(a)
    }
    ;
    nr.prototype.Mb = function(a, b) {
        b = void 0 === b ? this.G.stamp() : b;
        var c = a.type
          , d = M(function(e) {
            return {
                id: e.__ym_touch_id,
                x: Math.round(e.clientX),
                y: Math.round(e.clientY),
                force: e.force
            }
        }, ub(a.changedTouches));
        0 < d.length && this.G.V("event", {
            touches: d,
            target: this.Y(a.target)
        }, c, b)
    }
    ;
    function or(a, b, c) {
        Z.call(this, a, b, c);
        this.ha.push([["load"], this.Gh, this.l.document])
    }
    ka(or, Z);
    or.prototype.Gh = function(a) {
        a = a.target;
        "IMG" === Yf(a) && a.getAttribute("srcset") && this.G.V("mutation", {
            target: this.Y(a),
            attributes: {
                src: a.currentSrc
            }
        }, "ac")
    }
    ;
    function pr(a, b, c) {
        Z.call(this, a, b, c);
        this.$f = 1;
        this.Ba = new Xq(a);
        this.bc = this.L.J(this.bc, "z")
    }
    ka(pr, Z);
    pr.prototype.start = function() {
        if (qr(this)) {
            Z.prototype.start.call(this);
            this.bc();
            var a = this.Ra.F(J(this.l, "visualViewport"), ["resize"], Yq(this.Ba, this.bc, 10));
            this.rb.push(a)
        }
    }
    ;
    pr.prototype.stop = function() {
        Z.prototype.stop.call(this);
        this.Ba.flush()
    }
    ;
    pr.prototype.bc = function() {
        var a = qr(this);
        if (a && a !== this.$f) {
            this.$f = a;
            var b = Uf(this.l);
            this.G.V("event", {
                x: b.x,
                y: b.y,
                level: a
            }, "zoom")
        }
    }
    ;
    function qr(a) {
        return (a = Sf(a.l)) ? a[2] : null
    }
    var rr = {
        91: "super",
        93: "super",
        224: "super",
        18: "alt",
        17: "ctrl",
        16: "shift",
        9: "tab",
        8: "backspace",
        46: "delete"
    }
      , sr = {
        bj: 1,
        Fi: 2,
        alt: 3,
        shift: 4,
        dj: 5,
        "delete": 6,
        Di: 6
    }
      , tr = [4, 9, 8, 32, 37, 38, 39, 40, 46]
      , ur = {}
      , vr = (ur["1"] = {
        91: "&#8984;",
        93: "&#8984;",
        224: "&#8984;",
        18: "&#8997;",
        17: "&#8963;",
        16: "&#8679;",
        9: "&#8677;",
        8: "&#9003;",
        46: "&#9003;"
    },
    ur["2"] = {
        91: "&#xff;",
        93: "&#xff;",
        224: "&#xff;",
        18: "Alt",
        17: "Ctrl",
        16: "Shift",
        9: "Tab",
        8: "Backspace",
        46: "Delete"
    },
    ur.Ah = {
        32: "SPACEBAR",
        37: "&larr;",
        38: "&uarr;",
        39: "&rarr;",
        40: "&darr;",
        13: "Enter"
    },
    ur)
      , wr = /flash/
      , xr = /ym-disable-keys/
      , yr = /^&#/;
    function zr(a, b, c) {
        Z.call(this, a, b, c);
        this.mb = {};
        this.Na = 0;
        this.Ea = [];
        this.Pf = [];
        this.xf = this.lc = 0;
        this.ha.push([["keydown"], this.ih]);
        this.ha.push([["keyup"], this.jh]);
        this.ig = -1 !== Ma(J(a, "navigator.appVersion") || "", "Mac") ? "1" : "2";
        this.zc = this.L.J(this.zc, "v");
        this.pd = this.L.J(this.pd, "ec");
        this.Pc = this.L.J(this.Pc, "sk");
        this.yd = this.L.J(this.yd, "gk");
        this.qe = this.L.J(this.qe, "sc");
        this.$b = this.L.J(this.$b, "cc");
        this.reset = this.L.J(this.reset, "r");
        this.Mc = this.L.J(this.Mc, "rs")
    }
    ka(zr, Z);
    n = zr.prototype;
    n.ih = function(a) {
        if (this.zc(a) && (!a.target || "INPUT" !== a.target.nodeName || !a.shiftKey && 32 !== a.keyCode && "shift" !== rr[a.keyCode])) {
            var b = a.keyCode;
            a.repeat || this.mb[b] || (this.mb[a.keyCode] = !0,
            rr[a.keyCode] && !this.Na ? (this.Na += 1,
            this.qe(a),
            this.reset(300)) : this.Na ? (sg(this.l, this.xf),
            Ar(this, a),
            this.pd()) : (this.reset(),
            Ar(this, a)))
        }
    }
    ;
    n.jh = function(a) {
        if (this.zc(a)) {
            var b = a.keyCode
              , c = rr[a.keyCode];
            this.mb[a.keyCode] && (this.mb[b] = !1);
            c && this.Na && (this.Na = 0,
            this.mb = {});
            1 === this.Ea.length && (a = q(this.Ea).next().value,
            K(a.keyCode, tr) && (this.Pc([a], !0),
            this.reset()));
            this.Ea = mb(H(cb("keyCode"), qa(b), Da), this.Ea);
            sg(this.l, this.lc)
        }
    }
    ;
    n.zc = function(a) {
        var b = this.l.document.activeElement;
        b = b && "OBJECT" === b.nodeName && wr.test(b.getAttribute("type") || "");
        a = a.target;
        if (!a)
            return !b;
        a = "INPUT" === a.nodeName && "password" === a.getAttribute("type") && xr.test(a.className);
        return !b && !a
    }
    ;
    n.pd = function() {
        this.Pf = this.Ea.slice(0);
        sg(this.l, this.lc);
        this.lc = X(this.l, F(this.Pf, D(this.Pc, this)), 0, "e.c")
    }
    ;
    n.Pc = function(a, b) {
        if (1 < a.length || (void 0 === b ? 0 : b)) {
            var c = this.yd(a);
            this.G.V("event", {
                keystrokes: c
            }, "keystroke")
        }
    }
    ;
    n.yd = function(a) {
        var b = this;
        a = M(function(c) {
            c = c.keyCode;
            var d = rr[c]
              , e = vr[b.ig][c] || vr.Ah[c] || String.fromCharCode(c);
            return {
                id: c,
                key: e,
                isMeta: !!d && yr.test(e),
                modifier: d
            }
        }, a);
        return Gl(function(c, d) {
            return (sr[c.modifier] || 100) - (sr[d.modifier] || 100)
        }, a)
    }
    ;
    function Ar(a, b) {
        K(b, a.Ea) || a.Ea.push(b)
    }
    n.qe = function(a) {
        Ar(this, a);
        this.$b()
    }
    ;
    n.$b = function() {
        this.Na ? X(this.l, this.$b, 100) : this.Ea = []
    }
    ;
    n.reset = function(a) {
        a ? this.xf = X(this.l, D(this.Mc, this), a) : this.Mc()
    }
    ;
    n.Mc = function() {
        this.Na = 0;
        this.Ea = [];
        this.mb = {};
        sg(this.l, this.lc)
    }
    ;
    var Br = ["sr", "sd", "\u043d"];
    function Cr(a) {
        return !B(a.frameId) && !B(a.data)
    }
    function Dr(a, b, c) {
        b || md(hf());
        b.postMessage(yf(a, c), "*")
    }
    function Er(a, b) {
        try {
            return Je(H(cb("contentWindow"), qa(b)), ub(a.document.querySelectorAll("iframe")))
        } catch (c) {
            return null
        }
    }
    function Fr(a, b, c) {
        var d = Eg(a)
          , e = ud(a)
          , f = wc(a)
          , g = b.xd()
          , h = !J(a, "postMessage") || f && !J(a, "parent.postMessage")
          , k = F(d, w);
        if (h) {
            if (!g)
                return X(a, D(d.$, d, "i", {
                    ia: !1
                }), 10),
                {
                    wd: k,
                    Ff: u,
                    stop: u
                };
            md(hf())
        }
        d.F(["sr"], function(t) {
            if (y(t.origin) && !B(t.source)) {
                var v = Er(a, t.source);
                if (v) {
                    var z = {};
                    Dr(a, t.source, (z.type = "\u043d",
                    z.frameId = b.va().Y(v),
                    z))
                }
            }
        });
        d.F(["sd"], function(t) {
            if (y(t.origin) && !B(t.source)) {
                var v = t.data;
                t = t.source;
                (a === t || Er(a, t)) && d.$("sdr", {
                    data: v.data,
                    frameId: v.frameId
                })
            }
        });
        if (f && !g) {
            var l = !1
              , m = 0
              , p = function() {
                var t = {};
                Dr(a, a.parent, (t.type = "sr",
                t));
                m = X(a, p, 100, "if.i")
            };
            p();
            var r = function(t) {
                if (y(t.origin) && !B(t.source)) {
                    d.ga(["\u043d"], r);
                    sg(a, m);
                    var v = rh(a, t.origin).host;
                    l || t.source !== a.parent || !t.data.frameId || "about:blank" !== T(a).host && !K(v, c) || (l = !0,
                    d.$("i", {
                        frameId: t.data.frameId,
                        ia: !0
                    }))
                }
            };
            d.F(["\u043d"], r);
            X(a, function() {
                d.ga(["\u043d"], r);
                sg(a, m);
                l || (l = !0,
                d.$("i", {
                    ia: !1
                }))
            }, 2E3, "if.r")
        }
        e = e.F(a, ["message"], function(t) {
            var v = xf(a, t.data);
            v && v.type && K(v.type, Br) && d.$(v.type, {
                data: v,
                source: t.source,
                origin: t.origin
            })
        });
        return {
            wd: k,
            Ff: function(t) {
                var v = {};
                return Dr(a, a.parent, (v.frameId = b.xd(),
                v.data = t,
                v.type = "sd",
                v))
            },
            stop: e
        }
    }
    var Gr = /allow-same-origin/;
    function Hr(a, b, c) {
        Z.call(this, a, b, c);
        this.Tb = [];
        this.vd = {};
        this.Yd = this.L.J(this.Yd, "fi");
        this.Zd = this.L.J(this.Zd, "sd");
        this.$d = this.L.J(this.$d, "src");
        this.oa = new a.MutationObserver(this.$d)
    }
    ka(Hr, Z);
    n = Hr.prototype;
    n.start = function() {
        Z.prototype.start.call(this);
        this.G.Ib().cc && this.G.va().F("iframe", "NA:", D(this.Yd, this));
        this.G.Ye().wd().F(["sdr"], D(this.Zd, this))
    }
    ;
    n.stop = function() {
        Z.prototype.stop.call(this);
        M(function(a) {
            a.G.stop()
        }, this.Tb)
    }
    ;
    n.$d = function(a) {
        var b = a.pop().target;
        if (a = Je(function(d) {
            return d.df === b
        }, this.Tb)) {
            this.Tb = mb(function(d) {
                return d.df !== b
            }, this.Tb);
            var c = a.G.xd();
            try {
                a.G.stop()
            } catch (d) {}
            this.fc(b, c)
        }
    }
    ;
    n.Yd = function(a) {
        if (a) {
            var b = a.data.node;
            this.oa.observe(b, {
                attributes: !0,
                attributeFilter: ["src"]
            });
            this.fc(b, a.data.id)
        }
    }
    ;
    n.fc = function(a, b) {
        var c = this;
        Ir(this, a) && Cg(this.l, a)(vg(u, function() {
            var d = c.G.fc(a.contentWindow, b);
            c.Tb.push({
                G: d,
                df: a
            })
        }))
    }
    ;
    n.Zd = function(a) {
        var b = this;
        if (Cr(a)) {
            var c = a.frameId;
            a = a.data;
            this.vd[c] || (this.vd[c] = {
                data: []
            });
            var d = this.vd[c];
            d.data = d.data.concat(a);
            this.l.isNaN(d.md) && M(function(e) {
                "page" === e.type && (d.md = e.data.recordStamp - b.G.Ze())
            }, d.data);
            this.l.isNaN(d.md) || (this.G.aa(M(function(e) {
                e.stamp += d.md;
                e.stamp = b.l.Math.max(0, e.stamp);
                return e
            }, d.data)),
            d.data = [])
        }
    }
    ;
    function Ir(a, b) {
        var c = b.getAttribute("src")
          , d = b.getAttribute("sandbox");
        return b.getAttribute("_ym_ignore") || d && !d.match(Gr) || c && "about:blank" !== c && (c = rh(a.l, c).host) && T(a.l).host !== c ? !1 : J(b, "contentWindow.location.href")
    }
    var Jr = x(function(a) {
        var b = J(a, "sessionStorage");
        if (!b)
            return null;
        try {
            var c = b.getItem("__ym_tab_guid");
            b = !1;
            var d = J(a, "opener.sessionStorage");
            try {
                b = !!d && c === d.getItem("__ym_tab_guid")
            } catch (e) {
                b = !0
            }
            if (!c || b)
                c = lr(),
                a.sessionStorage.setItem("__ym_tab_guid", c);
            return c
        } catch (e) {
            return null
        }
    });
    function Kr(a, b, c) {
        Z.call(this, a, b, c);
        this.le = this.L.J(this.le, "ps")
    }
    ka(Kr, Z);
    Kr.prototype.start = function() {
        this.G.va().uc({
            nodes: [this.l.document.documentElement],
            Qc: this.le
        })
    }
    ;
    Kr.prototype.le = function(a) {
        var b = this.G.hh()
          , c = b.ah()
          , d = T(this.l)
          , e = d.host
          , f = d.protocol;
        d = d.pathname;
        var g = q(Tf(this.l))
          , h = g.next().value;
        g = g.next().value;
        this.G.V("page", {
            content: M(function(k) {
                k.node = void 0;
                return k
            }, a),
            base: c || "",
            hasBase: !!c,
            viewport: {
                width: h,
                height: g
            },
            title: this.l.document.title,
            doctype: b.dh() || "",
            address: this.l.location.href,
            ua: Ab(this.l) || "",
            referrer: this.l.document.referrer,
            screen: {
                width: this.l.screen.width,
                height: this.l.screen.height
            },
            location: {
                host: e,
                protocol: f,
                path: d
            },
            recordStamp: this.G.Ze(),
            tabId: Jr(this.l)
        }, "page", 0)
    }
    ;
    var Lr = ["addRule", "removeRule", "insertRule", "deleteRule"];
    function Mr(a, b, c) {
        Z.call(this, a, b, c);
        this.bb = {};
        this.Ub = {};
        this.Ke = 0;
        this.Ec = this.L.J(this.Ec, "a");
        this.vb = this.L.J(this.vb, "sr");
        this.Fc = this.L.J(this.Fc, "r");
        this.aa = this.L.J(this.aa, "d")
    }
    ka(Mr, Z);
    n = Mr.prototype;
    n.start = function() {
        var a = this.G.va();
        a.F("style", "NA:", this.Ec);
        a.F("style", "NR:", this.Fc);
        this.aa()
    }
    ;
    n.stop = function() {
        var a = this;
        Z.prototype.stop.call(this);
        var b = this.G.va();
        b.ga("style", "NA:", this.Ec);
        b.ga("style", "NR:", this.Fc);
        this.aa();
        sg(this.l, this.Ke);
        M(function(c) {
            a.bb[c].sheet && Nr(a, a.bb[c].sheet)
        }, bc(this.bb));
        this.bb = {}
    }
    ;
    n.aa = function() {
        var a = this;
        M(function(b) {
            b = q(b);
            var c = b.next().value;
            b = b.next().value;
            if (b.length) {
                for (var d = [], e = b[0].stamp, f = [], g = 0; g < b.length; g += 1) {
                    var h = b[g]
                      , k = h.stamp;
                    delete h.stamp;
                    k <= e + 50 ? d.push(h) : (f.push(d),
                    e = k,
                    d = [h])
                }
                d.length && f.push(d);
                f.length && M(function(l) {
                    a.G.V("event", {
                        target: Ub(c),
                        changes: l
                    }, "stylechange", e)
                }, f);
                delete a.Ub[c]
            }
        }, ac(this.Ub));
        this.Ke = X(this.l, this.aa, 100)
    }
    ;
    n.vb = function(a, b, c, d, e) {
        this.Ub[a] || (this.Ub[a] = []);
        this.Ub[a].push({
            op: b,
            style: void 0 === d ? "" : d,
            index: void 0 === e ? -1 : e,
            stamp: c
        })
    }
    ;
    function Or(a, b, c) {
        var d = b.addRule
          , e = b.removeRule
          , f = b.insertRule
          , g = b.deleteRule;
        A(d) && (b.addRule = function(h, k, l) {
            a.vb(c, "a", a.G.stamp(), h + "{" + k + "}", l);
            return d.call(b, h, k, l)
        }
        );
        A(e) && (b.removeRule = function(h) {
            a.vb(c, "r", a.G.stamp(), "", h);
            return e.call(b, h)
        }
        );
        A(f) && (b.insertRule = function(h, k) {
            a.vb(c, "a", a.G.stamp(), h, k);
            return f.call(b, h, k)
        }
        );
        A(g) && (b.deleteRule = function(h) {
            a.vb(c, "r", a.G.stamp(), "", h);
            return g.call(b, h)
        }
        )
    }
    function Nr(a, b) {
        M(function(c) {
            var d = a.l.CSSStyleSheet.prototype[c];
            A(d) && (b[c] = D(d, b))
        }, Lr)
    }
    n.Ec = function(a) {
        var b = a.data;
        a = b.id;
        b = b.node;
        if (b.sheet && !b.getAttribute("src") && !b.innerText) {
            var c = b.sheet;
            try {
                var d = c.cssRules || c.rules
            } catch (g) {
                d = null
            }
            if (d && d.length) {
                for (var e = [], f = 0; f < d.length; f += 1)
                    e.push({
                        style: d[f].cssText,
                        index: f,
                        op: "a"
                    });
                this.G.V("event", {
                    changes: e,
                    target: a
                }, "stylechange")
            }
            Or(this, c, a);
            this.bb[a] = b
        }
    }
    ;
    n.Fc = function(a) {
        a = a.data.id;
        var b = this.bb[a];
        b && (delete this.bb[a],
        b.sheet && Nr(this, b.sheet))
    }
    ;
    var Pr = [[Mr, "ss"], [Rq, "in"], [Nq, "mu"], [Uq, "r"], [Zq, "sc"], [ar, "mo"], [cr, "f"], [gr, "se"], [jr, "wf"], [nr, "t"], [or, "src"], [pr, "z"], [zr, "ks"]];
    Pr.push([Hr, "if"]);
    Pr.push([Kr, "pa"]);
    var Qr = x(function(a) {
        var b = a.document;
        return {
            Ad: function() {
                if (b.scrollingElement)
                    return b.scrollingElement;
                var c = 0 === La(b.compatMode, "CSS1") ? b.documentElement : b.body;
                return J(b, "documentElement.scrollHeight") >= J(b, "body.scrollHeight") ? c : null
            },
            gh: function() {
                var c = a.screen;
                if (!c)
                    return 0;
                var d = Je(F(c, J), ["orientation", "mozOrientation", "msOrientation"]);
                return J(c, d + ".angle") || 0
            },
            Si: F(a, wc),
            ef: F(a, qc),
            Ri: F(a, ic)
        }
    });
    function Rr(a) {
        return {
            ah: function() {
                var b = a.document.querySelector("base[href]");
                return b ? b.getAttribute("href") : null
            },
            dh: function() {
                if (a.document.doctype) {
                    var b = N({
                        name: "html",
                        publicId: "",
                        systemId: ""
                    }, a.document.doctype)
                      , c = b.publicId
                      , d = b.systemId;
                    return "<!DOCTYPE " + S("", [b.name, c ? ' PUBLIC "' + c + '"' : "", !c && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                }
                return null
            }
        }
    }
    function Sr(a, b) {
        var c = this;
        this.Lb = 0;
        this.ic = [];
        this.Kb = null;
        this.ia = this.Xb = this.Nf = !1;
        this.recordStamp = 0;
        this.stopped = !1;
        this.hh = function() {
            return c.page
        }
        ;
        this.xd = function() {
            return c.Lb
        }
        ;
        this.Ze = function() {
            return c.recordStamp
        }
        ;
        this.fh = function() {
            return c.Ra
        }
        ;
        this.Ye = function() {
            return c.Kb
        }
        ;
        this.va = function() {
            return c.Hd
        }
        ;
        this.stamp = function() {
            return c.ve ? c.l.Math.max(c.ve(Ad) - c.recordStamp, 0) : 0
        }
        ;
        this.Ib = function() {
            return c.options
        }
        ;
        this.jb = function() {
            return c.pg
        }
        ;
        this.V = function(e, f, g, h) {
            h = void 0 === h ? c.stamp() : h;
            c.aa([{
                type: e,
                data: f,
                stamp: h,
                frameId: c.Lb,
                event: g
            }])
        }
        ;
        this.aa = function(e) {
            c.Nf && !c.Xb ? c.ia ? c.Ye().Ff(M(function(f) {
                return f.frameId ? f : N(f, {
                    frameId: c.Lb
                })
            }, e)) : c.Rb(e) : c.ic = c.ic.concat(e)
        }
        ;
        this.l = a;
        var d = Mq(a, this, "R");
        this.se = d.J(this.se, "s");
        this.aa = d.J(this.aa, "sd");
        d = Q(a);
        d.C("wv2e") && jf();
        d.D("wv2e", !0);
        this.options = b;
        this.Ra = ud(a);
        this.Hd = new Pq(this.l,b);
        this.pg = Qr(a);
        this.Me = M(function(e) {
            var f = q(e);
            e = f.next().value;
            f = f.next().value;
            return new e(a,c,f)
        }, Pr);
        Tr(this);
        this.page = Rr(this.l);
        this.se()
    }
    Sr.prototype.start = function(a) {
        this.Nf = !0;
        this.Rb = a;
        a = xb(this.ic);
        this.aa(a)
    }
    ;
    Sr.prototype.stop = function() {
        this.stopped || (this.stopped = !0,
        Lq(this.l) && (M(function(a) {
            return a.stop()
        }, this.Me),
        this.Hd.stop(),
        this.Kb && this.Kb.stop(),
        this.ia || this.V("event", {}, "eof")))
    }
    ;
    Sr.prototype.fc = function(a, b) {
        var c = new Sr(a,N({}, this.options, {
            frameId: b
        }));
        c.start(u);
        return c
    }
    ;
    function Tr(a) {
        a.ia = !!a.options.frameId;
        a.Lb = a.options.frameId || 0;
        a.Xb = !a.ia;
        var b = a.options.Xf || [];
        b.push(T(a.l).host);
        a.Kb = Fr(a.l, a, b);
        b = a.Kb.wd();
        wc(a.l) ? a.Xb && b.F(["i"], function(c) {
            if (!1 === c.ia || !0 === c.ia)
                a.ia = c.ia,
                a.Xb = !1,
                c.frameId && (a.Lb = c.frameId),
                c = xb(a.ic),
                a.aa(c)
        }) : (a.ia = !1,
        a.Xb = !1)
    }
    Sr.prototype.se = function() {
        this.ve = zd(this.l);
        this.recordStamp = this.ve(Ad);
        M(function(a) {
            a.start()
        }, this.Me);
        this.Hd.start()
    }
    ;
    function Ur(a, b, c) {
        var d = this;
        this.bd = this.Nb = !1;
        this.Xa = [];
        this.lf = [];
        this.Qe = [];
        this.send = function(e, f, g) {
            e = d.sender(e, d.Dg);
            f && g && e.then(f, g);
            return e
        }
        ;
        this.ue = function(e, f, g) {
            return new R(function(h, k) {
                e.push([f, h, k, g])
            }
            )
        }
        ;
        this.mh = function() {
            d.Xa = Gl(function(g, h) {
                return g[3].partNum - h[3].partNum
            }, d.Xa);
            var e = G(function(g, h, k) {
                h = h[3];
                return g && k + 1 === h.partNum
            }, !0, d.Xa)
              , f = !!d.Xa[d.Xa.length - 1][3].end;
            return e && f
        }
        ;
        this.sd = function(e) {
            Dq(d.l, e.slice(), function(f) {
                var g = q(f);
                f = g.next().value;
                var h = g.next().value;
                g = g.next().value;
                d.send(f, h, g)
            }, 20, "s.w2.sf.fes");
            xb(e)
        }
        ;
        this.Ug = function() {
            d.bd || (d.bd = !0,
            d.sd(d.lf),
            d.sd(d.Qe))
        }
        ;
        this.vg = function(e) {
            return G(function(f, g) {
                var h = "page" === g.type && !g.frameId
                  , k = "eof" === g.event
                  , l = h && !!g.partNum;
                return {
                    gd: f.gd || l,
                    fd: f.fd || h,
                    ed: f.ed || k
                }
            }, {
                fd: !1,
                ed: !1,
                gd: !1
            }, e)
        }
        ;
        this.kh = function(e, f, g) {
            g ? (e = d.ue(d.Xa, e, f[0]),
            d.mh() && (d.sd(d.Xa),
            d.Nb = !0)) : (d.Nb = !0,
            e = d.send(e));
            return e
        }
        ;
        this.$e = function(e, f, g) {
            var h = {};
            f = {
                H: (h["wv-part"] = "" + g,
                h["wv-type"] = d.Xh,
                h),
                K: Le(),
                N: {
                    ba: f
                }
            };
            e && f.K.D("bt", 1);
            return f
        }
        ;
        this.Og = function(e, f, g) {
            e = d.$e(!1, e, g);
            return d.Nb ? d.send(e) : d.ue(d.Qe, e, f)
        }
        ;
        this.Bh = function(e, f, g) {
            e = d.$e(!0, e, g);
            if (d.Nb)
                return d.send(e);
            var h = d.vg(f);
            g = h.fd;
            var k = h.ed;
            h = h.gd;
            var l;
            g && (l = d.kh(e, f, h));
            d.bd ? g || (l = d.send(e)) : (g || (l = d.ue(d.lf, e, f)),
            (d.Nb || k) && d.Ug());
            return l
        }
        ;
        this.l = a;
        this.Xh = c;
        this.sender = Sh(a, "W", b);
        this.Dg = b
    }
    function Vr() {
        var a = G(function(b, c) {
            var d = q(c)
              , e = d.next().value;
            d = d.next().value;
            b[e] = {
                cd: 0,
                sg: 1 / d
            };
            return b
        }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]);
        return {
            ng: function(b) {
                if (b.length)
                    return {
                        type: "activity",
                        data: G(function(c, d) {
                            var e = a[d];
                            return Math.round(c + e.cd * e.sg)
                        }, 0, bc(a))
                    }
            },
            yg: function(b) {
                b && (b = b.event) && (b = a[b]) && (b.cd += 1)
            }
        }
    }
    var Wr = x(function(a) {
        var b = Q(a)
          , c = b.C("isEU");
        if (B(c)) {
            var d = Ub(se(a, "is_gdpr") || "");
            if (K(d, [0, 1]))
                b.D("isEU", d),
                c = !!d;
            else if (a = Ff(a).C("wasSynced"),
            a = J(a, "params.eu"))
                b.D("isEU", a),
                c = !!a
        }
        return c
    }, function(a) {
        return Q(a).C("isEU")
    })
      , Xr = V("i.e", Wr)
      , Yr = V("i.ep", function(a) {
        Wr(a)
    });
    function Zr(a, b) {
        var c = Ff(a)
          , d = "wv2rf:" + O(b)
          , e = b.cc
          , f = Xr(a)
          , g = c.C(d)
          , h = b.li;
        return B(f) || Qa(g) ? sa(function(k, l) {
            Xh(b, function(m) {
                var p = !!J(m, "settings.webvisor.forms");
                p = !J(m, "settings.x3") && p;
                f = Xr(a) || J(m, "settings.eu");
                c.D(d, ib(p));
                l({
                    cc: e,
                    Kd: !!f,
                    uf: p,
                    Xf: h
                })
            })
        }) : Bg({
            cc: e,
            Kd: f,
            uf: !!Ub(g),
            Xf: h
        })
    }
    var $r = V("w2", function(a, b) {
        function c() {
            h = !0
        }
        var d = Q(a)
          , e = O(b);
        if (!b.zb || hc(a) || !a.MutationObserver || !va("Element", a.Element))
            return u;
        va("MutationObserver", a.MutationObserver) || Zh(a, e).warn("w2mo");
        var f = sa(function(k, l) {
            Xh(b, l)["catch"](k)
        })
          , g = Cg(a)(xg(E([a, b], Zr)))(wg(function(k) {
            return new Sr(a,k)
        }))
          , h = !1;
        zg([g, f])(vg(U(a, "wv2.R.c"), function(k) {
            k = q(k);
            var l = k.next().value;
            k = k.next().value;
            if (!h) {
                c = D(l.stop, l);
                var m = d.C("wv2Counter");
                if (!gp(a, k) || m)
                    c();
                else if (d.D("wv2Counter", e),
                d.D("stopRecorder", c),
                k = to(a, "7", "6")) {
                    m = new Ur(a,b,k.type);
                    var p = Cq(yq, e, "m", D(m.Bh, m), k, a)
                      , r = Cq(yq, e, "e", D(m.Og, m), k, a);
                    "onpagehide"in a ? ud(a).F(a, ["pagehide"], function(v) {
                        v.persisted ? (p.flush(!0),
                        r.flush(!0)) : c()
                    }, null) : ud(a).F(a, ["beforeunload", "unload"], c);
                    k = Vr();
                    m = k.yg;
                    r.F("ag", k.ng);
                    r.F("p", m);
                    p.F("see", function(v) {
                        var z = !1;
                        M(function(P) {
                            "page" === P.type && (z = !0)
                        }, v);
                        z && (h || r.push(Eq),
                        c())
                    });
                    var t = Jb(function(v) {
                        "eof" === J(v, "data.type") || "eof" === v.event ? (r.push(v),
                        p.push(v),
                        r.flush(!0),
                        p.flush(!0)) : ("event" === v.type ? r : p).push(v)
                    });
                    X(a, c, 864E5);
                    bi(a, function() {
                        var v = {}
                          , z = {};
                        Fe(a, (z.counterKey = e,
                        z.name = "webvisor",
                        z.data = (v.version = 2,
                        v),
                        z));
                        l.start(t)
                    })
                }
            }
        }));
        return function() {
            return c()
        }
    })
      , as = V("w2.cs", function(a, b) {
        var c = O(b)
          , d = {};
        Di(a, c, (d.webvisor = !!b.zb,
        d))
    })
      , bs = Mc.La + "//" + Kc + "/metrika"
      , cs = bs + "/match.html"
      , ds = x(function(a) {
        return {
            Mi: a,
            ib: null,
            sb: []
        }
    });
    function es(a, b) {
        var c = ds(cs);
        K(b, c.sb) || c.sb.push(b);
        if (Qa(c.ib)) {
            var d = Lf(a);
            if (!d)
                return null;
            d = d("iframe");
            N(d.style, {
                display: "none",
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            d.src = cs;
            var e = Rf(a);
            if (!e)
                return null;
            e.appendChild(d);
            c.ib = d
        } else
            (d = J(c.ib, "contentWindow")) && d.postMessage("frameReinit", "*");
        return c.ib
    }
    function fs(a) {
        var b = ds(cs);
        K(a, b.sb) && (b.sb = mb(H(qa(a), Da), b.sb),
        b.sb.length || (Mf(b.ib),
        b.ib = null))
    }
    function gs(a, b, c, d) {
        var e = d.data;
        if (y(e)) {
            var f = q(e.split("*"));
            e = f.next().value;
            var g = f.next().value
              , h = f.next().value;
            f = f.next().value;
            "sc.frame" === e && d.source ? d.source.postMessage(("bl" === a || "ntq" === a ? "sc.bl" : "sc.images") + "*" + b, "*") : e === ("bl" === a || "ntq" === a ? "sc.blr" : "sc.image") && g === b.split("?")[0] && c(h, y(f) ? Rl(Pl(f)) : null)
        }
    }
    function hs(a, b, c) {
        return new R(function(d, e) {
            if (es(a, "isp")) {
                var f = u
                  , g = function(h, k) {
                    "1" === h ? d({
                        Ga: k,
                        Ce: 0
                    }) : e();
                    f();
                    fs("isp")
                };
                f = ud(a).F(a, ["message"], E([b, c, g], U(a, "isp.stat.m", gs)));
                X(a, g, 1500)
            } else
                e()
        }
        )
    }
    var is = x(Ce, O);
    function js() {
        return S("", M(function(a) {
            return String.fromCharCode(a.charCodeAt(0) + 15)
        }, Rl(Pl("VCNUKCkkUiMeIlUjVx4lIydVHiohJyEeVyZWKFNVVSEmIyoj"))))
    }
    function ks(a, b, c) {
        if ("rt" === c)
            return a = Ng(a, b),
            c = {},
            c = Le((c.rt = 1,
            c.u = a,
            c)).Aa(),
            b = {},
            c = Wd((b["browser-info"] = c,
            b)),
            "https://" + Zj(a) + ".mc.yandex.ru/watch/99742118/1?" + c;
        if ("mf" === c) {
            c = T(a);
            c = Td(c.protocol + "//" + c.hostname + c.pathname);
            b = Ng(a, b);
            var d = "";
            do
                d += Xd(a);
            while (d.length < b.length);
            d = d.slice(0, b.length);
            a = "";
            for (var e = 0; e < b.length; e += 1)
                a += (b.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
            a = q([d, a]);
            b = a.next().value;
            return "https://adstat.yandex.ru/track?service=metrika&id=" + a.next().value + "&mask=" + b + "&ref=" + c
        }
        if ("bl" === c)
            return a = js(),
            S("=", ["https://fcpe.beeline.ru/sync/me?guid", a]);
        if ("ntq" === c)
            return c = new a.Date,
            c.setMonth(c.getMonth() + 1),
            c = c.getTime(),
            a = vl("0", 30, "" + Zj(Ng(a, b))),
            a = S("-", [a.slice(0, 8), a.slice(8, 12), "4" + a.slice(12, 15), "8" + a.slice(15, 18), a.slice(18, 30)]),
            "https://spadsync.com/partner?brandid=pyan0002&consent=" + c + "&zenithid=" + a
    }
    var ls = Yd("isp", function(a, b) {
        return Xh(b, function(c) {
            var d = Je(function(g) {
                return J(c, "settings." + g)
            }, Ml);
            if (d) {
                var e = is(b);
                N(e, {
                    je: d,
                    status: 4
                });
                var f = ks(a, b, d);
                if (f)
                    return hs(a, d, f).then(function(g) {
                        g = g.Ga;
                        e.status = 1;
                        ("bl" === d || "ntq" === d) && y(g) && (g = "bl" === d ? J(xf(a, g), "cid") : g) && (g = Ql(Sl(g)),
                        Q(a).D(d, g))
                    })["catch"](function() {
                        e.status = 2
                    })
            }
        })["catch"](U(a, "l.isp"))
    })
      , ms = V("fbq.o", function(a, b, c) {
        var d = J(a, "fbq");
        if (d && d.callMethod) {
            var e = function() {
                var g = Ha(arguments)
                  , h = d.apply(null, ca(g));
                b(g);
                return h
            };
            N(e, d);
            c && M(b, c);
            a.fbq = e
        } else
            var f = X(a, E([a, b].concat(ub(d && d.queue)), ms), 1E3, "fbq.d");
        return D(sg, null, a, f)
    })
      , ns = {}
      , os = (ns.add_to_wishlist = "add-to-wishlist",
    ns.begin_checkout = "begin-checkout",
    ns.generate_lead = "submit-lead",
    ns.add_payment_info = "add-payment-info",
    ns)
      , ps = {}
      , qs = (ps.AddToCart = "add-to-cart",
    ps.Lead = "submit-lead",
    ps.InitiateCheckout = "begin-checkout",
    ps.Purchase = "purchase",
    ps.CompleteRegistration = "register",
    ps.Contact = "submit-contact",
    ps.AddPaymentInfo = "add-payment-info",
    ps.AddToWishlist = "add-to-wishlist",
    ps.Subscribe = "subscribe",
    ps)
      , rs = {}
      , ss = (rs["1"] = os,
    rs["2"] = os,
    rs["3"] = os,
    rs["0"] = qs,
    rs)
      , ts = [qs.AddToCart, qs.Purchase];
    function us(a, b, c) {
        if (c) {
            var d = c.version;
            (c = J(ss, d + "." + c.nc)) && (b && K(c, ts) || a("ym-" + c + "-" + d))
        }
    }
    var vs = oa(function(a, b) {
        var c = J(b, "ecommerce")
          , d = J(b, "event") || "";
        if (!(c = c && d && {
            version: "3",
            nc: d
        }))
            a: {
                if (L(b) || db(b))
                    if (d = q(Ha(b)),
                    c = d.next().value,
                    d = d.next().value,
                    "event" === c && d) {
                        c = {
                            version: "2",
                            nc: d
                        };
                        break a
                    }
                c = void 0
            }
        c || (c = (c = J(b, "ecommerce")) && {
            version: "1",
            nc: S(",", bc(c))
        });
        c && a(c)
    });
    function ws(a, b, c) {
        c = q(Ha(c));
        a = c.next().value;
        c = c.next().value;
        "track" === a && b({
            version: "0",
            nc: c
        })
    }
    var xs = V("ag.e", function(a, b) {
        if ("0" === b.ca) {
            var c = []
              , d = U(a, "ag.s", E([Qe, c], M));
            Xh(b, function(e) {
                if (J(e, "settings.auto_goals") && gi(a, b) && (e = ej(a, b, "autogoal").reachGoal)) {
                    e = E([e, !!b.od], us);
                    var f = vs(e);
                    e = E([a, e], ws);
                    c.push(ms(a, e));
                    c.push(Fk(a, "dataLayer", function(g) {
                        g.oa.F(f)
                    }))
                }
            });
            return d
        }
    });
    function ys(a, b) {
        if (!b)
            return "";
        var c = []
          , d = J(a, "document");
        Lk(a, b, function(e) {
            if (e.nodeType === d.TEXT_NODE)
                var f = e.textContent;
            else
                e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
            (f = f && ke(f)) && c.push(f)
        });
        return 0 === c.length ? "" : S(" ", c)
    }
    var zs = /[^\d.,]/g
      , As = /[.,]$/;
    function Bs(a) {
        a = ub(Pl(a));
        return M(function(b) {
            b = b.charCodeAt(0).toString(2);
            return vl("0", 8, b)
        }, a)
    }
    function Cs(a, b) {
        var c = null;
        try {
            c = b ? Cj(b, a) : c
        } catch (d) {}
        return c
    }
    function Ds(a, b, c) {
        if (b = gi(a, b))
            a = eb(["dr", c || "" + Xd(a, 10, 99)]),
            b.params(eb(["__ym", a]))
    }
    var Es = V("ep.pp", function(a, b) {
        if (!b)
            return 0;
        a: {
            var c = b.replace(zs, "").replace(As, "");
            for (var d = "0" === c[c.length - 1], e = c.length; 0 < e && !(3 < c.length - e + 1 && d); --e) {
                var f = c[e - 1];
                if (K(f, [",", "."])) {
                    c = f;
                    break a
                }
            }
            c = ""
        }
        c = (d = c) ? b.split(d) : [b];
        d = d ? c[1] : "00";
        c = parseFloat(ne(c[0]) + "." + ne(d));
        d = Math.pow(10, 8) - .01;
        a.isNaN(c) ? c = 0 : (c = a.Math.min(c, d),
        c = a.Math.max(c, 0));
        return c
    })
      , Fs = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]]
      , Gs = x(function(a) {
        return new RegExp(S("|", a),"i")
    })
      , Hs = x(function() {
        function a() {
            var k = h + "0"
              , l = h + "1";
            f[k] ? f[l] ? (h = h.slice(0, -1),
            --g) : (e[l] = c(8),
            f[l] = 1) : (e[k] = c(8),
            f[k] = 1)
        }
        function b() {
            var k = h + "1";
            f[h + "0"] ? f[k] ? (h = h.slice(0, -1),
            --g) : (h += "1",
            f[h] = 1) : (h += "0",
            f[h] = 1)
        }
        function c(k) {
            k = void 0 === k ? 1 : k;
            var l = d.slice(g, g + k);
            g += k;
            return l
        }
        for (var d = S("", Bs("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; )
            ("0" === c() ? b : a)();
        return e
    })
      , Is = V("ep.dec", function(a, b) {
        if (!b || hc(a))
            return [];
        var c = q(Bs(b))
          , d = c.next().value
          , e = c.next().value
          , f = c.next().value;
        c = ba(c);
        if (2 !== Vb(d))
            return [];
        d = Hs();
        c = S("", c);
        e = Vb(e + f);
        for (var g = f = "", h = 0; g.length < e && c[h]; )
            f += c[h],
            d[f] && (g += String.fromCharCode(Vb(d[f])),
            f = ""),
            h += 1;
        d = xf(a, Rl(g));
        return L(d) ? M(Oa, d) : []
    })
      , Js = V("ep.ent", function(a, b, c) {
        a = "" + Xd(a, 10, 99);
        c = "" + 100 * b + c + a;
        if (16 < db(c))
            return "";
        c = vl("0", 16, c);
        b = c.slice(0, 8);
        c = c.slice(-8);
        b = (+b ^ 92844).toString(35);
        c = (+c ^ 92844).toString(35);
        return "" + b + "z" + c
    });
    function Ks(a, b) {
        var c = Cs(a.document.body, b);
        return c ? ys(a, c) : ""
    }
    function Ls(a, b) {
        var c = Ks(a, b);
        return Es(a, c)
    }
    var Ms = H(Ks, V("ep.cp", function(a) {
        if (!a)
            return "643";
        var b = me(a);
        return (a = Je(function(c) {
            c = q(c).next().value;
            return Gs(c).test(b)
        }, Fs)) ? a[1] : "643"
    }));
    function Ns(a, b, c, d) {
        (c = Js(a, d, c)) && Ds(a, b, c)
    }
    var Os = V("ep.ctp", function(a, b, c, d) {
        var e = Ms(a, c)
          , f = Ls(a, d);
        Ns(a, b, e, f);
        va("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
            var g = Ms(a, c)
              , h = Ls(a, d);
            if (e !== g || f !== h)
                e = g,
                f = h,
                Ns(a, b, e, f)
        }
        )).observe(a.document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0
        })
    });
    function Ps(a, b, c, d, e) {
        c = Cs(a.document.body, c);
        d = Cs(a.document.body, d);
        K(e.target, [c, d]) && Ds(a, b)
    }
    var Qs = V("ep.chp", function(a, b, c, d, e) {
        c && Ds(a, b);
        return d || e ? ud(a).F(a.document, ["click"], U(a, "ep.chp.cl", E([a, b, d, e], Ps))) : u
    });
    function Rs(a, b) {
        return Xh(b, function(c) {
            var d = J(c, "settings.dr");
            return {
                Kg: Is(a, d),
                isEnabled: J(c, "settings.auto_goals")
            }
        })
    }
    function Ss(a, b) {
        if (!b)
            return !1;
        var c = T(a);
        return (new RegExp(b)).test("" + c.pathname + c.hash + c.search)
    }
    var Ts = V("ep.i", function(a, b) {
        if (Aj(a))
            return Rs(a, b).then(function(c) {
                var d = q(c.Kg)
                  , e = d.next().value
                  , f = d.next().value
                  , g = d.next().value
                  , h = d.next().value
                  , k = d.next().value
                  , l = d.next().value
                  , m = d.next().value
                  , p = d.next().value
                  , r = d.next().value
                  , t = d.next().value
                  , v = d.next().value
                  , z = d.next().value
                  , P = d.next().value
                  , W = d.next().value
                  , Ga = d.next().value
                  , Jc = d.next().value;
                if (!c.isEnabled)
                    return R.resolve(u);
                var Pd = Ss(a, e)
                  , gf = Ss(a, h)
                  , Mu = Ss(a, m)
                  , Nu = Ss(a, r)
                  , Ou = "" + e + f + g === "" + h + k + l;
                return new R(function(Pu, Qu) {
                    Cg(a)(vg(Qu, function() {
                        Pd && Os(a, b, f, g, v, z, P);
                        gf && !Ou && Os(a, b, k, l, W, Ga, Jc);
                        Pu(Qs(a, b, Mu || Nu, p, t))
                    }))
                }
                )
            })
    })
      , Us = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"];
    function Vs(a, b) {
        var c = Ff(a)
          , d = c.C
          , e = c.D;
        if ("" === d("cc")) {
            e("cc", 0);
            var f = Ed(a)
              , g = Q(a);
            Sh(a, "6", b)({
                N: {
                    cb: !0,
                    Wc: !1
                }
            }, ["https://mc.yandex.md/cc"]).then(function(h) {
                h = J(h.Ga, "c");
                e("cc", h + "&" + f(Bd));
                g.D("cc", h)
            })["catch"](function(h) {
                var k = f(Bd);
                e("cc", "&" + k);
                mf(a, "cc", h)
            })
        }
    }
    var Ws = V("cc.i", function(a, b) {
        var c = E([a, b], Vs);
        c = E([a, c, 300, void 0], X);
        Xh(b, c)
    });
    function Xs(a, b) {
        var c = Nf(b)
          , d = Mc.ec
          , e = Rc(a);
        if (c && Of("ym-advanced-informer", c)) {
            var f = e.C("ifc", 0) + 1;
            e.D("ifc", f);
            f = c.getAttribute("data-lang");
            var g = Ub(c.getAttribute("data-cid") || "");
            if (g || 0 === g)
                (d = J(a, "Ya." + d + ".informer")) ? (e = {},
                d((e.i = c,
                e.id = g,
                e.lang = f,
                e))) : e.D("ib", !0),
                c = b || window.event,
                c.preventDefault ? c.preventDefault() : c.returnValue = !1
        }
    }
    function Ys(a) {
        var b = U(a, "i.clch", Xs);
        ud(a).F(a.document, ["click"], F(a, b), {
            passive: !1
        });
        return function(c) {
            var d = Mc.La
              , e = a.Ya[Mc.ec]
              , f = !!e._informer;
            e._informer = N({
                domain: "informer.yandex.ru"
            }, c);
            f || ph(a, {
                src: d + "//informer.yandex.ru/metrika/informer.js"
            })
        }
    }
    function Zs(a) {
        return {
            R: function(b, c) {
                var d = b.K;
                if (d) {
                    var e = Q(a).C("adBlockEnabled");
                    e && d.D("adb", e)
                }
                c()
            }
        }
    }
    function $s(a, b) {
        var c = a.document;
        if (K(c.readyState, ["interactive", "complete"]))
            bi(a, b);
        else {
            var d = ud(a)
              , e = d.F
              , f = d.Wb
              , g = function() {
                f(c, ["DOMContentLoaded"], g);
                f(a, ["load"], g);
                b()
            };
            e(c, ["DOMContentLoaded"], g);
            e(a, ["load"], g)
        }
    }
    var at = F("9-d5ve+.r%7", w)
      , bt = V("ad", function(a, b) {
        if (!b.Ua) {
            var c = Q(a);
            if (!c.C("adBlockEnabled")) {
                var d = function(m) {
                    K(m, ["2", "1"]) && c.D("adBlockEnabled", m)
                }
                  , e = Ae(a)
                  , f = e.C("isad");
                if (f)
                    d(f);
                else {
                    var g = F("adStatus", c.D)
                      , h = function(m) {
                        m = m ? "1" : "2";
                        d(m);
                        g("complete");
                        e.D("isad", m, 1200);
                        return m
                    }
                      , k = Sh(a, "adb", b);
                    if (!c.C("adStatus")) {
                        g("process");
                        var l = "metrika/a" + at().replace(/[^a-v]+/g, "") + "t.gif";
                        $s(a, function() {
                            return k({
                                Ja: {
                                    qa: l
                                }
                            }).then(F(!1, h))["catch"](F(!0, h))
                        })
                    }
                }
            }
        }
    })
      , ct = V("pr.p", function(a, b) {
        if (Cc(a)) {
            var c = Sh(a, "5", b)
              , d = {};
            d = Le((d.pq = 1,
            d.ar = 1,
            d));
            var e = {};
            c({
                K: d,
                H: (e["page-url"] = T(a).href,
                e["page-ref"] = J(a, "document.referrer") || "",
                e)
            }, b)["catch"](U(a, "pr.p.s"))
        }
    })
      , dt = !1;
    function et(a) {
        return {
            R: function(b, c) {
                if (!b.K)
                    return c();
                var d = Q(a).C("fid");
                !dt && d && (of(b, "fid", d),
                dt = !0);
                return c()
            }
        }
    }
    var ft = V("fid", function(a) {
        var b = u;
        if (!A(a.PerformanceObserver))
            return b;
        var c = Q(a);
        if (c.C("fido"))
            return b;
        c.D("fido", !0);
        var d = new a.PerformanceObserver(U(a, "fid", function(f) {
            f = f.getEntries()[0];
            c.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
            b()
        }));
        b = function() {
            return d.disconnect()
        }
        ;
        try {
            var e = {};
            d.observe((e.type = "first-input",
            e.buffered = !0,
            e))
        } catch (f) {}
        return b
    })
      , gt = x(Ce);
    function ht(a) {
        var b = gt();
        b.Sf || (b.Sf = a)
    }
    function it(a, b, c) {
        if (J(c, "settings.ins")) {
            var d = Q(a);
            if (!d.C("scip")) {
                var e = Ff(a)
                  , f = Ed(a)(Bd);
                c = Sb(e.C("sci"));
                if (!(c && 1440 >= f - c)) {
                    c = Sh(a, "ci");
                    var g = ["sync.cook.int"]
                      , h = function(m) {
                        m = d.C("scip", "") + m;
                        d.D("scip", m)
                    }
                      , k = F("a", h);
                    d.D("scip", "0");
                    var l = {};
                    b = (l.tag = "cm-urls",
                    l.stage = "mc-yandex-ru",
                    l["mc-id"] = "" + b.id,
                    l.duid = Ng(a, b),
                    l);
                    (l = gt().Sf) && (b.scid = l);
                    return c({
                        N: {
                            ea: g,
                            Oa: 3E3,
                            cb: !0
                        },
                        H: b
                    }, ["https://eu.asas.yango.com/mapuid"]).then(function(m) {
                        m = J(m.Ga, "CookieMatchUrls");
                        if (L(m) && db(m)) {
                            h("1");
                            var p = Sh(a, "c");
                            m = M(function(r, t) {
                                return p({
                                    N: {
                                        ea: g,
                                        Oa: 3E3
                                    }
                                }, ["https://" + r]).then(H(F("c", h), F("" + t, h)))["catch"](H(F("b", h), F("" + t, h)))
                            }, mb(y, m));
                            return R.all(m)
                        }
                        k()
                    }, k).then(function() {
                        var m = d.C("scip");
                        !m || Na(m, "a") || Na(m, "b") || (e.D("sci", f),
                        h("d"))
                    }, u)
                }
            }
        }
    }
    function jt(a) {
        a = J(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown"
    }
    var kt = x(H(cb("performance.memory.jsHeapSizeLimit"), Va("concat", "")))
      , lt = ["availWidth", "availHeight", "availTop"];
    function mt(a) {
        a = J(a, "screen") || {};
        return S("x", M(F(a, J), lt))
    }
    var nt = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" ");
    function ot(a) {
        var b = void 0 === b ? nt : b;
        var c = J(a, "navigator") || {};
        b = M(F(c, J), b);
        b = S("x", b);
        try {
            var d = J(a, "navigator.getGamepads");
            var e = wa(d, "getGamepads") && a.navigator.getGamepads() || []
        } catch (f) {
            e = []
        }
        return b + "x" + db(e)
    }
    var pt = ["webgl", "experimental-webgl"];
    function qt(a, b) {
        b.clearColor(0, 0, 0, 1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
        return "[" + J(a, "0") + ", " + J(a, "1") + "]"
    }
    var rt = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0];
    function st(a, b) {
        if (!A(a.Float32Array))
            return !1;
        var c = J(b, "canvas");
        if (!c || !va("toDataUrl", c.toDataURL))
            return !1;
        try {
            b.createBuffer()
        } catch (d) {
            return !1
        }
        return !0
    }
    var tt = F(hf("ccf"), md);
    function ut(a, b) {
        return [function() {
            var c = b.createBuffer();
            c && b.getParameter && va("getParameter", b.getParameter) || tt();
            b.bindBuffer(b.ARRAY_BUFFER, c);
            var d = new a.Float32Array(rt);
            b.bufferData(b.ARRAY_BUFFER, d, b.STATIC_DRAW);
            c.uh = 3;
            c.Dh = 3;
            d = b.createProgram();
            var e = b.createShader(b.VERTEX_SHADER);
            d && e || tt();
            return {
                ie: d,
                ui: e,
                ti: c
            }
        }
        , function(c) {
            var d = c.ie
              , e = c.ui;
            b.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
            b.compileShader(e);
            b.attachShader(d, e);
            (d = b.createShader(b.FRAGMENT_SHADER)) || tt();
            return N(c, {
                $g: d
            })
        }
        , function(c) {
            var d = c.ie
              , e = c.$g;
            b.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
            b.compileShader(e);
            b.attachShader(d, e);
            b.linkProgram(d);
            b.useProgram(d);
            return c
        }
        , function(c) {
            var d = c.ie;
            c = c.ti;
            d.ri = b.getAttribLocation(d, "attrVertex");
            d.Eh = b.getUniformLocation(d, "uniformOffset");
            b.enableVertexAttribArray(d.fj);
            b.vertexAttribPointer(d.ri, c.uh, b.FLOAT, !1, 0, 0);
            b.uniform2f(d.Eh, 1, 1);
            b.drawArrays(b.TRIANGLE_STRIP, 0, c.Dh);
            return b.canvas
        }
        ]
    }
    function vt(a) {
        return G(function(b, c) {
            var d = q(c)
              , e = d.next().value;
            d = d.next().value;
            b[e + " precision"] = J(d, "precision") || "n";
            b[e + " precision rangeMin"] = J(d, "rangeMin") || "n";
            b[e + " precision rangeMax"] = J(d, "rangeMax") || "n";
            return b
        }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
    }
    var wt = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";");
    function xt(a) {
        var b = J(a, "matchMedia");
        if (b && va("matchMedia", b)) {
            var c = Va("matchMedia", a);
            return G(function(d, e) {
                d[e] = c("(" + e + ")");
                return d
            }, {}, wt)
        }
    }
    var yt = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" ")
      , zt = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" ");
    function At(a) {
        a = Lf(a);
        if (!a)
            return "";
        a = a("video");
        try {
            var b = Va("canPlayType", a)
              , c = Ib(function(d) {
                return M(H(w, Va("concat", d + "; codecs=")), zt)
            }, yt);
            return M(b, yt.concat(c))
        } catch (d) {
            return "canPlayType"
        }
    }
    function Bt(a, b, c) {
        var d = J(a, "location.host");
        a = Ng(a, b);
        c.D("pu", "" + Zj(d) + a)
    }
    function Ct(a, b, c) {
        var d = Mg(a, b);
        if (d) {
            d.Z.F(["gpu-get"], function() {
                var g = {};
                return g.type = "gpu-get",
                g.pu = c.C("pu"),
                g
            });
            var e = J(a, "opener");
            if (e) {
                var f = X(a, E([a, b, c], Bt), 200, "pu.m");
                b = {};
                d.me(e, (b.type = "gpu-get",
                b), function(g, h) {
                    var k = J(h, "pu");
                    k && (sg(a, f),
                    c.D("pu", k))
                })
            } else
                Bt(a, b, c)
        }
    }
    function Dt(a, b, c) {
        b = Je(F(a, J), Us);
        b = B(b) ? null : J(a, b);
        if (J(a, "navigator.onLine") && b && b && J(b, "prototype.constructor.name")) {
            a = {};
            var d = new b((a.iceServers = [],
            a));
            a = J(d, "createDataChannel");
            A(a) && (D(a, d, "y.metrika")(),
            a = J(d, "createOffer"),
            A(a) && !a.length && (a = D(a, d)(),
            b = J(a, "then"),
            A(b) && D(b, a, function(e) {
                var f = J(d, "setLocalDescription");
                A(f) && D(f, d, e, u, u)()
            })(),
            a = {},
            N(d, (a.onicecandidate = function() {
                var e, f = J(d, "close");
                if (A(f)) {
                    f = D(f, d);
                    try {
                        var g = (e = J(d, "localDescription.sdp")) && e.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                    } catch (h) {
                        d.onicecandidate = u;
                        "closed" !== d.iceConnectionState && f();
                        return
                    }
                    g && 0 < g.length && c.D("pp", Zj(g[1]));
                    d.onicecandidate = u;
                    f()
                }
            }
            ,
            a))))
        }
    }
    function Et(a, b, c, d) {
        return Xh(b, function(e) {
            if (!Sm(e) && !hc(a))
                if (e = d.C("zzlc"),
                B(e) || Qa(e) || "na" === e) {
                    var f = Lf(a);
                    if (f && (e = Rf(a))) {
                        var g = f("iframe");
                        N(g.style, {
                            display: "none",
                            width: "1px",
                            height: "1px",
                            visibility: "hidden"
                        });
                        f = Gc(a);
                        var h = Fc(a);
                        g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Pl("L21ldHJpa2EvenpsYy5odG1s");
                        e.appendChild(g);
                        var k = 0
                          , l = ud(a).F(a, ["message"], U(a, "zz.m", function(m) {
                            (m = J(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (Mf(g),
                            m = m.substr(8),
                            d.D("zzlc", m),
                            c.D("zzlc", m),
                            l(),
                            sg(a, k))
                        }));
                        k = X(a, H(l, F(g, Mf)), 3E3)
                    }
                } else
                    c.D("zzlc", e)
        })
    }
    function Ft(a, b, c, d) {
        b = d.C("cc");
        d = E(["cc", ""], d.D);
        if (b) {
            var e = q(b.split("&"));
            b = e.next().value;
            (e = (e = e.next().value) && Ub(e)) && 1440 < Ed(a)(Bd) - e ? d() : c.D("cc", b)
        } else
            qa(0)(b) || d()
    }
    var Gt = x(function(a, b) {
        var c = Q(a)
          , d = Ff(a)
          , e = []
          , f = E([a, b, c, d], kl);
        nc(a) || il(a) || e.push(E([Dt, "pp", ""], f));
        var g = !jl(a) || Gc(a);
        g && e.push(E([Ct, "pu", ""], f));
        !g || d.Jd || Dc(a) || (e.push(E([Et, "zzlc", "na"], f)),
        e.push(E([Ft, "cc", ""], f)));
        return e.length ? {
            Ca: function(h, k) {
                if (0 === c.C("isEU"))
                    try {
                        M(Re, e)
                    } catch (l) {}
                k()
            },
            R: function(h, k) {
                var l = h.K;
                if (l && 0 === c.C("isEU"))
                    try {
                        M(sa(l), e)
                    } catch (m) {}
                k()
            }
        } : {}
    }, H(Ca, O));
    function Ht(a) {
        var b = J(a, "ApplePaySession")
          , c = T(a).protocol;
        a = b && "https:" === c && !wc(a) ? b : void 0;
        b = "";
        if (!a)
            return b;
        try {
            b = "" + a.canMakePayments();
            c = "";
            var d = a.supportsVersion;
            if (A(d))
                for (var e = 1; 20 >= e; e += 1)
                    c += d.call(a, e) ? "" + e : "0";
            return c + b
        } catch (f) {
            return b
        }
    }
    var It = H(function(a) {
        return (a = J(a, "navigator.plugins")) && db(a) ? H(ub, nb, Hl(function(b, c) {
            return b.name > c.name ? 1 : 2
        }), Jb(Jl))(a) : ""
    }, pd(","));
    function Jt(a, b, c) {
        c = void 0 === c ? ":" : c;
        M(function(d) {
            var e = q(d);
            d = e.next().value;
            e = e.next().value;
            return a.push("" + d + c + e)
        }, ac(b))
    }
    function Kt(a, b) {
        var c = b.ug;
        if (!st(a, c))
            return "";
        var d = [];
        a: {
            var e = ut(a, c);
            try {
                var f = E(e, H)()();
                break a
            } catch (P) {
                if ("ccf" === J(P, "message")) {
                    f = null;
                    break a
                }
                md(P)
            }
            f = void 0
        }
        if (Qa(f))
            var g = "";
        else
            try {
                g = f.toDataURL()
            } catch (P) {
                g = ""
            }
        g && d.push(g);
        var h = c.getContextAttributes();
        try {
            var k = wa(c.getSupportedExtensions, "getSupportedExtensions") ? c.getSupportedExtensions() || [] : []
        } catch (P) {
            k = []
        }
        k = S(";", k);
        g = qt(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE), c);
        f = qt(c.getParameter(c.ALIASED_POINT_SIZE_RANGE), c);
        e = c.getParameter(c.ALPHA_BITS);
        h = h && h.antialias ? "yes" : "no";
        var l = c.getParameter(c.BLUE_BITS)
          , m = c.getParameter(c.DEPTH_BITS)
          , p = c.getParameter(c.GREEN_BITS)
          , r = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (r) {
            var t = c.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            0 === t && (t = 2)
        }
        t = {
            Ji: k,
            "webgl aliased line width range": g,
            "webgl aliased point size range": f,
            "webgl alpha bits": e,
            "webgl antialiasing": h,
            "webgl blue bits": l,
            "webgl depth bits": m,
            "webgl green bits": p,
            "webgl max anisotropy": r ? t : null,
            "webgl max combined texture image units": c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            "webgl max cube map texture size": c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),
            "webgl max fragment uniform vectors": c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),
            "webgl max render buffer size": c.getParameter(c.MAX_RENDERBUFFER_SIZE),
            "webgl max texture image units": c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),
            "webgl max texture size": c.getParameter(c.MAX_TEXTURE_SIZE),
            "webgl max varying vectors": c.getParameter(c.MAX_VARYING_VECTORS),
            "webgl max vertex attribs": c.getParameter(c.MAX_VERTEX_ATTRIBS),
            "webgl max vertex texture image units": c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            "webgl max vertex uniform vectors": c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),
            "webgl max viewport dims": qt(c.getParameter(c.MAX_VIEWPORT_DIMS), c),
            "webgl red bits": c.getParameter(c.RED_BITS),
            "webgl renderer": c.getParameter(c.RENDERER),
            "webgl shading language version": c.getParameter(c.SHADING_LANGUAGE_VERSION),
            "webgl stencil bits": c.getParameter(c.STENCIL_BITS),
            "webgl vendor": c.getParameter(c.VENDOR),
            "webgl version": c.getParameter(c.VERSION)
        };
        Jt(d, t, ": ");
        a: {
            try {
                var v = c.getExtension("WEBGL_debug_renderer_info");
                if (v) {
                    var z = {
                        "webgl unmasked vendor": c.getParameter(v.UNMASKED_VENDOR_WEBGL),
                        "webgl unmasked renderer": c.getParameter(v.UNMASKED_RENDERER_WEBGL)
                    };
                    break a
                }
            } catch (P) {}
            z = {}
        }
        Jt(d, z);
        if (!c.getShaderPrecisionFormat)
            return S("~", d);
        Jt(d, vt(c));
        return S("~", d)
    }
    var Lt = function(a) {
        return function(b) {
            var c = Lf(b);
            if (!c)
                return "";
            c = c("canvas");
            var d = []
              , e = a()
              , f = e.Qg;
            e = e.Fg;
            try {
                var g = Va("getContext", c);
                d = M(H(w, g), e)
            } catch (h) {
                return ""
            }
            return (g = Je(w, d)) ? f(b, {
                canvas: c,
                ug: g
            }) : ""
        }
    }(function() {
        return {
            Fg: pt,
            Qg: Kt
        }
    });
    function Mt(a, b, c) {
        return S("x", M(H(w, Va("concat", "" + a), F(c, J)), b))
    }
    function Nt(a) {
        return (a = xt(a)) ? S("x", M(E(["", ["matches", "media"]], Mt), nb(ec(a)))) : ""
    }
    function Ot(a) {
        if (a = rl(a))
            try {
                for (var b = [], c = 0; c < ql.length; c += 1) {
                    var d = a(ql[c]);
                    b.push(d)
                }
                var e = b
            } catch (f) {
                e = []
            }
        else
            e = [];
        return e ? S("x", e) : ""
    }
    var Pt = ["name", "lang", "localService", "voiceURI", "default"];
    function Qt(a) {
        var b = J(a, "speechSynthesis.getVoices");
        if (b)
            return a = D(b, a.speechSynthesis),
            Ib(function(c) {
                return M(F(c, J), Pt)
            }, a())
    }
    function Rt(a) {
        return S("x", Qt(a) || [])
    }
    function St(a) {
        a = At(a);
        return L(a) ? S("x", a) : a
    }
    function Tt(a, b, c, d, e) {
        if (!Aj(a))
            return u;
        var f = [], g = [], h = ud(a), k;
        Cg(a)(vg(u, function() {
            var l = Bj(b, a.document.body);
            e && (l = mb(e, l));
            M(function(p) {
                f.push(p);
                g.push(h.F(p, c, d))
            }, l);
            if (va("MutationObserver", a.MutationObserver)) {
                var m = b.toUpperCase();
                l = new a.MutationObserver(U(a, "de.m", function(p) {
                    M(function(r) {
                        var t = r.addedNodes;
                        r = r.removedNodes;
                        t && t.length && M(function(v) {
                            Lk(a, v, function(z) {
                                z.nodeName !== m || e && !e(z) || Je(qa(z), f) || (f.push(z),
                                g.push(h.F(z, c, d)))
                            }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                        }, t);
                        r && r.length && M(function(v) {
                            Lk(a, v, function(z) {
                                z.nodeName !== m || e && !e(z) || (z = vb(a)(z, f),
                                -1 !== z && (g[z](),
                                g.splice(z, 1),
                                f.splice(z, 1)))
                            }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                        }, r)
                    }, p)
                }));
                l.observe(a.document.body, {
                    childList: !0,
                    subtree: !0
                });
                k = D(l.disconnect, l)
            }
        }));
        return function() {
            k && k();
            M(Qe, g);
            xb(g);
            xb(f)
        }
    }
    function Ut(a, b) {
        var c = J(b, "target");
        if (c) {
            var d = J(c, "value");
            if ((d = ke(d)) && !(100 <= db(d))) {
                var e = "tel" === J(c, "type")
                  , f = 0 < La(d, "@") && !e
                  , g = ne(d);
                g = db(g);
                if (f || !f && (e || g))
                    if (d = f ? ri(d) : ui(a, d))
                        return e = J(b, "isTrusted"),
                        {
                            qh: c,
                            th: f,
                            rh: d,
                            isTrusted: e,
                            Md: b.Md
                        }
            }
        }
    }
    function Vt(a, b, c, d) {
        var e = c.th
          , f = c.qh
          , g = c.isTrusted;
        c = c.Md;
        a = Nj(a, f);
        f = f.readOnly;
        var h = {}
          , k = {};
        d = (k.fi = nf((h.a = e ? 1 : 0,
        h.b = a,
        h.c = d || 0,
        h.d = f ? 1 : null,
        h.e = c ? 1 : null,
        h)).Aa(),
        k);
        C(g) || (d.ite = ib(g));
        g = {};
        b.params((g.__ym = d,
        g))
    }
    var Wt = V("ice", function(a, b, c) {
        if (b = gi(a, b))
            if (c = Ut(a, c))
                return Vt(a, b, c),
                !0
    }), Xt = V("ice", function(a, b, c) {
        if (b = gi(a, b))
            if (c = Ut(a, c))
                return wi(a, c.rh).then(E([a, b, c], Vt), U(a, "ice.s")),
                !0
    }), Yt = ["text", "email", "tel"], Zt = ["cc-", "name", "shipping"], $t = V("icei", function(a, b) {
        if (vi(a)) {
            var c = !1
              , d = u
              , e = u;
            Xh(b, function(f) {
                if (!(Xr(a) || J(f, "settings.eu") || c)) {
                    f = J(f, "settings.cf") ? Xt : Wt;
                    var g = E([a, b], f)
                      , h = function(k) {
                        return yp(a, k) || !K(k.type, Yt) || Nb(jb, M(F(k.autocomplete, Na), Zt)) ? !1 : !0
                    };
                    d = Tt(a, "input", ["blur"], g, h);
                    e = Tt(a, "form", ["submit"], function(k) {
                        var l = k.target;
                        if (l) {
                            l = Bj("input", l);
                            var m = 0;
                            M(function(p) {
                                20 <= m || !h(p) || g({
                                    target: p,
                                    isTrusted: k.isTrusted,
                                    Md: !0
                                }) && (m += 1)
                            }, l)
                        }
                    })
                }
            });
            return function() {
                c = !0;
                d();
                e()
            }
        }
    }), au;
    function bu(a, b, c) {
        var d = J(a, "AppMetricaInitializer")
          , e = J(d, "init");
        if (e)
            try {
                D(e, d)(yf(a, b))
            } catch (f) {}
        else
            au = X(a, E([a, b, 2 * c], bu), c, "ai.d");
        return function() {
            return sg(a, au)
        }
    }
    var cu = V("p.ai", function(a, b) {
        if (nc(a) || el(a))
            return Xh(b, function(c) {
                if (c = J(c, "settings.sbp")) {
                    var d = {};
                    return bu(a, N({}, c, (d.c = b.id,
                    d)), 10)
                }
            })
    })
      , du = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" ")
      , eu = Yd("uah", function(a) {
        if (!va("getHighEntropyValues", J(a, "navigator.userAgentData.getHighEntropyValues")))
            return R.reject("0");
        try {
            return a.navigator.userAgentData.getHighEntropyValues(du).then(function(b) {
                if (!Ra(b))
                    throw "2";
                return b
            }, function() {
                throw "1";
            })
        } catch (b) {
            return R.reject("3")
        }
    })
      , fu = new RegExp(S("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&"))
      , gu = x(function(a) {
        var b = Ab(a);
        return (b = fu.test(b)) ? R.resolve(b) : eu(a).then(function(c) {
            try {
                return G(function(d, e) {
                    return d || fu.test(e.brand)
                }, !1, c.brands)
            } catch (d) {
                return !1
            }
        }, F(!1, w))
    })
      , hu = ["0", "1", "2", "3"]
      , iu = hu[0]
      , ju = hu[1]
      , ku = hu[2]
      , lu = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"]
      , mu = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(lu);
    function nu(a) {
        if (K(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
            return iu;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return K(a, hu) ? a : iu
    }
    var ou = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(lu).concat(["28", "29", "30", "31"])
      , pu = "3 13 14 31 15 16 17 28".split(" ")
      , qu = H(Jb(cb("ymetrikaEvent.type")), ob(rb(ou)));
    function ru(a, b, c) {
        a = c || vc(a);
        return K(a, b) ? a : "en"
    }
    var su = {
        xh: !0,
        url: "https://yastatic.net/s3/gdpr/v3/gdpr",
        rf: "",
        jf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
    }
      , tu = Yd("gdpr", function(a, b, c, d, e) {
        function f(p) {
            b("10");
            c.F(mu, function(r) {
                r = r.type;
                var t = {};
                l.If((t.type = r,
                t));
                p({
                    value: nu(r)
                })
            })
        }
        var g = void 0 === e ? su : e;
        e = g.url;
        var h = g.rf
          , k = g.xh;
        g = ru(a, g.jf, d.wi);
        var l = Vi(a, d);
        if (!l)
            return R.resolve({
                value: iu,
                Ld: !0
            });
        if (a._yaGdprLoaded)
            return new R(function(p) {
                b("7");
                f(p)
            }
            );
        var m = ph(a, {
            src: "" + e + (k ? "" : g) + h + ".js"
        });
        return new R(function(p, r) {
            m ? (b("7"),
            m.onerror = function() {
                b("9");
                var t = {};
                l.If((t.type = "GDPR-ok-view-default",
                t));
                p(null)
            }
            ,
            m.onload = F(p, f)) : (b("9"),
            r(hf("gdp.e")))
        }
        )
    });
    function uu(a, b) {
        var c = Vi(a, b);
        c && c.Z.F(["isYandex"], function() {
            var d = {};
            return d.type = "isYandex",
            d.isYandex = Xm(a),
            d
        })
    }
    function vu(a, b, c) {
        var d = Vi(a, c);
        return new R(function(e) {
            if (d) {
                var f = d.Z
                  , g = H(F("4", b), F(null, e))
                  , h = X(a, g, 2E3, "gdp.f.t")
                  , k = {};
                d.Jf((k.type = "isYandex",
                k)).then(function(l) {
                    l.isYandex ? (b("5"),
                    f.F(mu, function(m) {
                        m = q(m);
                        m.next();
                        m = m.next().value.type;
                        e({
                            value: nu(m)
                        })
                    })) : (b("6"),
                    e(null))
                })["catch"](g).then(E([a, h], sg))
            } else
                e({
                    value: ju,
                    Ld: !0
                })
        }
        )
    }
    var wu = {}
      , xu = (wu["GDPR-ok"] = "ok",
    wu["GDPR-ok-view-default"] = "ok-default",
    wu["GDPR-ok-view-detailed"] = "ok-detailed",
    wu["GDPR-ok-view-detailed-0"] = "ok-detailed-all",
    wu["GDPR-ok-view-detailed-1"] = "ok-detailed-tech",
    wu["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
    wu["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other",
    wu);
    function yu(a, b) {
        if (Xm(a)) {
            var c = Xi(a)
              , d = gi(a, b);
            d = d && d.params;
            c = M(F(xu, J), qu(c));
            d && c.length && d("gdpr", nb(c))
        }
    }
    var zu = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" ")
      , Au = []
      , Bu = Va("push", Au)
      , Cu = x(function(a, b) {
        var c = b.C("gdpr");
        return K(c, hu) ? "-" + c : ""
    });
    function Du(a, b, c, d) {
        if (!c.K || Nc(b.ca))
            d();
        else {
            var e = Xi(a)
              , f = F(e, Wi)
              , g = ze(a, "")
              , h = function() {
                var r = S(",", M(Ba(ou), qu(e)));
                r = "" + r + Cu(r, g);
                of(c, "gdpr", r);
                d()
            };
            if (b.vi)
                f("31"),
                h();
            else if (3 === b.id)
                h();
            else {
                var k = Q(a)
                  , l = k.C("f1");
                if (l)
                    l(h);
                else if (l = qu(e),
                Nb(rb(ou), l))
                    h();
                else if (g.C("yandex_login"))
                    f("13"),
                    g.D("gdpr", iu, 525600),
                    h();
                else {
                    l = Xm(a);
                    var m = T(a);
                    var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                        url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                        version: 2,
                        jf: zu,
                        rf: "_inversed_buttons"
                    } : void 0;
                    l || p ? (l = g.C("gdpr"),
                    K(l, hu) ? (f(l === ju ? "12" : "3"),
                    h()) : el(a) || fl(a) ? (f("17"),
                    h()) : gu(a).then(w, u).then(function(r) {
                        r ? (f("28"),
                        h()) : (Bu(h),
                        k.D("f1", Bu),
                        r = q(Pm).next().value,
                        r(a).then(cb("params.eu")).then(function(t) {
                            if (t || Na(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                g.D("gdpr_popup", ju);
                                uu(a, b);
                                if (wc(a))
                                    return vu(a, f, b);
                                var v = $i(a, e);
                                if (v)
                                    return t = tu(a, f, v, b, p),
                                    t.then(E([a, b], yu)),
                                    t
                            }
                            t || f("8");
                            return R.resolve({
                                value: iu,
                                Ld: !0
                            })
                        }).then(function(t) {
                            g.kc("gdpr_popup");
                            if (t) {
                                var v = t.value;
                                t = t.Ld;
                                K(v, hu) && g.D("gdpr", v, t ? void 0 : 525600)
                            }
                            v = Rd(Au, Qe);
                            pl(a, v, 20)(vg(U(a, "gdr"), u));
                            k.D("f1", Qe)
                        })["catch"](U(a, "gdp.a")))
                    })) : (f("14"),
                    h())
                }
            }
        }
    }
    var Eu = Kc.split(".")
      , Fu = Eu.pop()
      , Gu = S(".", Eu)
      , Hu = {};
    function Iu(a, b) {
        Hu[b] || (Hu[b] = {
            Vh: ph(a, {
                src: b
            }),
            state: 0
        });
        return Hu[b]
    }
    function Ju(a, b, c, d) {
        function e() {
            g.state = 1;
            c()
        }
        function f() {
            g.state = 2;
            d && d()
        }
        var g = Iu(a, b);
        b = g.Vh;
        var h = g.state;
        b && 2 !== h ? 1 === h ? e() : (a = ud(a),
        a.F(b, ["load"], e),
        a.F(b, ["error"], f)) : f()
    }
    var Ku = x(Ce, O);
    function Lu(a, b, c, d) {
        var e = Ku(c).Qh;
        if (!e)
            throw jd("im.no");
        Ju(a, bs + "/" + b + ".js?ver=" + Mc.eb + "&b=p", function() {
            var f = Q(a).C("ytmm");
            (f = J(f, b + ".init")) && f(e, d, Mc.eb)
        })
    }
    var Ru = x(De);
    function Su(a) {
        a = vc(a);
        return Em[a] || "ru"
    }
    function Tu(a) {
        a = Um(a);
        return Bm[a] || a
    }
    var Uu = x(function() {
        var a = G(function(b, c) {
            "ru" !== c && (b[c] = Gu + "." + c);
            return b
        }, {}, be);
        M(function(b) {
            a[b] = b
        }, bc(Cm));
        return a
    })
      , Vu = x(function(a) {
        a = T(a).hostname;
        return (a = Je(H(cb("1"), ab("test"), pa(Qe)(a)), ac(Cm))) && a[0]
    });
    function Wu(a, b) {
        var c = Su(a)
          , d = [Vu(a) || Tu(a)];
        Vm(a) && d.push(c);
        var e = Ed(a);
        c = Ff(a);
        var f = c.C("synced", {});
        d = mb(function(g) {
            if (b[g]) {
                var h = (f[g] || 1) + 1440 < e(Bd);
                h && delete f[g];
                return h
            }
        }, d);
        c.D("synced", f);
        return M(function(g) {
            return {
                $h: b[g],
                zh: g
            }
        }, d)
    }
    var Xu = function(a, b) {
        return function(c, d) {
            if (Dc(c) || Cb(c))
                return {};
            var e = O(d);
            e = Uu(e);
            var f = Wu(c, e)
              , g = Q(c)
              , h = wc(c);
            return {
                R: function(k, l) {
                    var m = k.K
                      , p = Vm(c);
                    m = !(m && m.C("pv"));
                    if (!p || h || m || !f.length)
                        return l();
                    if (g.C("startSync"))
                        Ru(c).push(l);
                    else {
                        g.D("startSync", !0);
                        p = E([c, f, d.id, u, !1], a);
                        m = q(Pm).next().value;
                        if (!m)
                            return l();
                        m(c).then(p).then(l, H(ra(l), U(c, b)))["catch"](u)
                    }
                }
            }
        }
    }(function(a, b, c, d, e) {
        var f = Ed(a)
          , g = Q(a)
          , h = Ff(a);
        d = Oh(a, "c");
        var k = Oe(a, d)
          , l = lr();
        ht(l);
        return G(function(m, p) {
            function r() {
                var z = h.C("synced");
                g.D("startSync", !1);
                z && (z[p.zh] = t,
                h.D("synced", z));
                z = Ru(a);
                M(Qe, z);
                xb(z)
            }
            var t, v = {};
            v = k({
                N: {
                    ea: ["sync.cook"],
                    Oa: 1500
                },
                H: (v.scid = l,
                v.cid = "" + c,
                v)
            }, [Mc.La + "//" + p.$h + "/sync_cookie_image_check" + (e ? "_secondary" : "")]).then(function() {
                t = f(Bd);
                r()
            })["catch"](function() {
                t = f(Bd) - 1435;
                r()
            });
            v = F(v, w);
            return m.then(v)
        }, R.resolve(), b)["catch"](U(a, "ctl"))
    }, "sy.c")
      , Yu = {}
      , Zu = (Yu.brands = "chu",
    Yu.architecture = "cha",
    Yu.bitness = "chb",
    Yu.uaFullVersion = "chf",
    Yu.fullVersionList = "chl",
    Yu.mobile = "chm",
    Yu.model = "cho",
    Yu.platform = "chp",
    Yu.platformVersion = "chv",
    Yu);
    function $u(a) {
        return y(a) ? a : L(a) ? S(",", M(function(b) {
            return '"' + b.brand + '";v="' + b.version + '"'
        }, a)) : C(a) ? "" : a ? "?1" : "?0"
    }
    function av(a) {
        return "che\n" + a
    }
    function bv(a) {
        var b = G(function(c, d) {
            var e = q(d)
              , f = e.next().value;
            e = e.next().value;
            (f = $u(a[f])) && c.push("" + e + "\n" + f);
            return c
        }, [], ac(Zu));
        return S("\n", b)
    }
    var cv = x(function(a) {
        return eu(a).then(bv, av)
    });
    function dv(a) {
        return {
            R: function(b, c) {
                cv(a).then(function(d) {
                    b.H || (b.H = {});
                    b.H.uah = d;
                    c()
                }, c)
            }
        }
    }
    function ev(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Cj("canvas", a.document);
        if (c && (c = Vf(c))) {
            var d = q(Sf(a) || Tf(a))
              , e = d.next().value;
            d = d.next().value;
            if (.3 <= kg(a, c, {
                h: d,
                w: e
            }) / (d * e)) {
                Q(a).D("hc", 1);
                return
            }
        }
        b && X(a, E([a, !1], ev), 3E3)
    }
    function fv(a, b) {
        if ("https://oauth.yandex.ru" === J(b, "origin") && J(b, "source.window") && "_ym_uid_request" === J(b.data, "_ym")) {
            var c = b.source
              , d = {};
            d = (d._ym_uid = a,
            d);
            c.postMessage(d, "https://oauth.yandex.ru")
        }
    }
    var gv = Yd("ot", function(a, b) {
        if (Hc(a)) {
            var c = ud(a);
            return Xh(b, U(a, "ot.s", function(d) {
                if (J(d, "settings.oauth")) {
                    var e = []
                      , f = Ng(a, b);
                    e.push(c.F(a, ["message"], U(a, "ot.m", F(f, fv))));
                    Cg(a)(vg(u, U(a, "ot.b", function() {
                        function g(p) {
                            var r = p.href;
                            if (r && uj(r, "https://oauth.yandex.ru/") && !Na(r, "_ym_uid=")) {
                                r = Na(r, "?") ? "&" : "?";
                                var t = {};
                                p.href += "" + r + Wd((t._ym_uid = f,
                                t.mc = "v",
                                t));
                                c.F(p, ["click"], U(a, "ot.click", function() {
                                    var v = "et=" + k(Ad);
                                    p.href += "&" + v
                                }))
                            }
                        }
                        var h = a.document.body
                          , k = Ed(a)
                          , l = Bj("a", h);
                        M(g, l);
                        if (va("MutationObserver", a.MutationObserver)) {
                            l = new a.MutationObserver(U(a, "ot.m", F(function(p) {
                                p = p.addedNodes;
                                for (var r = 0; r < p.length; r += 1) {
                                    var t = p[r];
                                    "A" === t.nodeName && g(t)
                                }
                            }, M)));
                            var m = {};
                            m = (m.childList = !0,
                            m.subtree = !0,
                            m);
                            l.observe(h, m);
                            e.push(D(l.disconnect, l))
                        }
                    })));
                    return E([Re, e], M)
                }
            }))
        }
    });
    function hv(a, b, c, d) {
        var e = J(d, "data");
        if (y(e)) {
            var f = q(e.split("*"));
            e = f.next().value;
            var g = f.next().value;
            f = f.next().value;
            "sc.topics-response" === e ? (g && ("1" === g && f ? (a = xf(a, f),
            L(a) && b.D("cta", a)) : b.D("cta.e", g)),
            c()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
        }
    }
    function iv(a) {
        var b = J(a, "featurePolicy");
        return b ? "browsingTopics"in a && b.allowsFeature("browsing-topics") : !1
    }
    var jv = V("p.cta", function(a) {
        Cg(a)(vg(u, function() {
            var b = Q(a);
            if (iv(a.document)) {
                var c = 0;
                if (es(a, "cta")) {
                    var d = u
                      , e = function() {
                        fs("cta");
                        d();
                        sg(a, c)
                    };
                    d = ud(a).F(a, ["message"], V("p.cta.o", E([a, b, e], hv)));
                    c = X(a, e, 1500)
                } else
                    b.D("cta.e", "if")
            } else
                b.D("cta.e", "ns")
        }))
    }), kv = "pbjsInit bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "), lv = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"], mv = {}, nv = (mv.netRevenue = function(a) {
        return y(a) ? "net" === a : !!a
    }
    ,
    mv), ov = {}, pv;
    function qv(a) {
        var b = ov[a]
          , c = b.Sc
          , d = b.Pe
          , e = b.Th;
        return M(function(f) {
            var g = q(f);
            f = g.next().value;
            g = g.next().value;
            var h = g.Td
              , k = g.timeout
              , l = g.Fb
              , m = {};
            return N((m.renderState = g.Ob,
            m.mediaTypes = h,
            m.auctionId = a,
            m.adUnitCode = f,
            m.startStamp = c,
            m.endStamp = d,
            m.requestedBidders = e,
            m.bidTimeout = k,
            m), l)
        }, ac(b.Ic))
    }
    function rv(a, b, c) {
        var d = ov[c];
        d.aa = !1;
        d.Pa && sg(a, d.Pa);
        d.Pa = X(a, function() {
            var e = qv(c)
              , f = {}
              , g = {};
            b((g.__ym = (f.pbjsv = pv,
            f.pbjs = e,
            f),
            g));
            delete ov[c]
        }, 2E3)
    }
    function sv(a, b) {
        M(function(c) {
            ov[c].aa && rv(a, b, c)
        }, bc(ov))
    }
    function tv(a, b) {
        a.Ic[b] || (a.Ic[b] = {
            Fb: {}
        });
        return a.Ic[b]
    }
    function uv(a, b, c) {
        var d = c.adUnitCode
          , e = c.bidderCode || c.bidder;
        if (e && d) {
            var f = tv(b, d);
            !f.Td && c.mediaTypes && (f.Td = {},
            M(function(g) {
                var h = q(g);
                g = h.next().value;
                h = h.next().value;
                var k;
                L(h) ? k = h : h.sizes ? k = h.sizes : h.playerSize && (k = h.playerSize);
                k && (f.Td[g] = k)
            }, ac(c.mediaTypes)));
            "bidTimeout" === a ? (f.timeout || (f.timeout = {}),
            f.timeout[e] = !0) : (f.Fb[a] || (f.Fb[a] = {}),
            f.Fb[a][e] = G(function(g, h) {
                C(c[h]) || (g[h] = nv[h] ? nv[h](c[h]) : c[h]);
                return g
            }, {}, lv),
            b = J(c, "meta.advertiserDomains"),
            L(b) && (f.Fb[a][e].advertiserDomains = b))
        }
    }
    function vv(a, b, c) {
        var d = c.bid
          , e = d.bidderCode || d.bidder;
        d = d.adUnitCode;
        e && d && (b = tv(b, d),
        b.Ob || (b.Ob = {}),
        a = "adRenderSucceeded" === a,
        d = {},
        b.Ob[e] = (d.success = a,
        d),
        a || (b.Ob[e].reason = c.reason,
        b.Ob[e].message = c.message))
    }
    function wv(a, b) {
        if (K(a, kv))
            if ("pbjsInit" === a)
                pv = b.version;
            else {
                var c = J(b, "auctionId") || J(b, "bid.auctionId") || void 0;
                if (c) {
                    ov[c] || (ov[c] = {
                        Ic: {}
                    });
                    c = ov[c];
                    var d = "auctionInit" === a
                      , e = "auctionEnd" === a
                      , f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                    f || c.Sc && !d || (c.Sc = J(b, "auctionStart") || void 0,
                    !c.Sc && d && (c.Sc = b.timestamp));
                    var g = E([a, c], uv);
                    "bidRequested" === a ? M(g, b.bids) : f ? vv(a, c, b) : e ? (c.Pe = b.auctionEnd || b.timestamp,
                    c.Th = mb(function(h, k, l) {
                        return Aa(h, l) === k
                    }, M(cb("bidderCode"), b.bidderRequests))) : d || g(b);
                    c.Pe && (c.aa = !0)
                }
            }
    }
    function xv(a) {
        M(function(b) {
            var c = b.event;
            b = b.data;
            var d = F(c, wv);
            "bidTimeout" === c ? M(d, b) : d(b)
        }, a)
    }
    var yv = V("pj", function(a, b) {
        var c = gi(a, b)
          , d = c && c.params;
        if (!d)
            return u;
        c = {};
        return c.pbjs = function(e) {
            L(e) && (e = mb(jb, M(function(f) {
                if (Ra(f) && f.data && f.event && (Ra(f.data) || L(f.data))) {
                    var g = J(f, "data.args");
                    return g ? {
                        event: f.event,
                        data: g
                    } : f
                }
            }, e)),
            xv(e),
            sv(a, d))
        }
        ,
        c
    })
      , zv = x(function() {
        var a = Mj();
        return G(function(b, c) {
            b[a[c]] = c;
            return b
        }, {}, bc(a))
    })
      , Av = /(\D\d*)/g;
    function Bv(a) {
        if (!a)
            return "";
        a = a.match(Av);
        if (!a || 0 === a.length)
            return "";
        var b = zv();
        return "//HTML/BODY/" + G(function(c, d) {
            var e = d[0]
              , f = Ub(d.slice(1));
            return "/" + b[e] + (f ? "[" + (f + 1) + "]" : "") + c
        }, "", a)
    }
    function Cv(a, b) {
        var c = Bv(b);
        return c ? J(a, "document.evaluate") ? a.document.evaluate(c, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null
    }
    var Dv = x(Ce);
    function Ev(a) {
        return {
            Oh: If(a.element),
            rd: a.rd
        }
    }
    function Fv(a, b) {
        var c = a.document.body;
        if (c) {
            var d = b.price_patterns
              , e = Dv(b.id);
            if (e.Cb) {
                if (!Gj(a, e.Cb.element))
                    return Ev(e.Cb);
                e.Cb = void 0
            }
            d = G(function(h, k) {
                var l = q(k)
                  , m = l.next().value;
                l = l.next().value;
                h[m] = l;
                return h
            }, {}, d);
            var f = null
              , g = null;
            d.cs && Aj(a) && (f = Cj(d.cs, c),
            g = "c");
            d.p && !f && (f = Cv(a, d.p),
            g = "x");
            if (f && g)
                return e.Cb = {
                    element: f,
                    rd: g
                },
                Ev(e.Cb)
        }
    }
    function Gv(a, b) {
        var c = a[b[0]];
        return !(!c || c !== b[1])
    }
    function Hv(a, b) {
        var c = b.patterns;
        if (0 === c.length)
            return !1;
        if (1 === c.length)
            return Gv(a, c[0]);
        c = G(function(f, g) {
            var h = q(g)
              , k = h.next().value;
            h = h.next().value;
            var l = a[k];
            if (l === h) {
                if (f.qd += 1,
                "i" === k || "c" === k)
                    f.gf = !0
            } else
                l && "p" === k && oe(l) === oe(h) && (f.hf = !0);
            return f
        }, {
            qd: 0,
            gf: !1,
            hf: !1
        }, c);
        var d = c.gf
          , e = c.hf;
        return 2 <= c.qd || d && e
    }
    function Iv(a, b) {
        var c = b.patterns;
        return 0 === c.length ? !1 : Nb(F(a, Gv), c)
    }
    function Jv(a, b, c, d) {
        c = M(function(e) {
            if (!d(b, e))
                return !1;
            var f = {};
            f = (f.rg = e.id,
            f);
            if (e = Fv(a, e))
                f.gp = Tl(e.Oh),
                f.mg = e.rd;
            return f
        }, c);
        return nb(c)
    }
    var Kv = pa(uj)("btn:")
      , Lv = pa(uj)("form:");
    function Mv(a) {
        var b = q(a)
          , c = b.next().value;
        b = b.next().value;
        return "bp" === c ? ["p", Rl(Pl(b))] : a
    }
    var Nv = Jb(function(a) {
        a.patterns = M(Mv, a.patterns);
        a.price_patterns = M(Mv, a.price_patterns);
        return a
    })
      , Ov = "ytm.js ytm.dom ytm.load ytm.init ytm.click ytm.linkClick ytm.formSubmit".split(" ")
      , Pv = ["ytm.click", "ytm.linkClick", "ytm.formSubmit"];
    function Qv(a, b, c) {
        if (Pv.includes(b) && c) {
            a = Ea(c.classList);
            var d = c.innerText
              , e = c.getAttribute("id");
            var f = c.getAttribute("formAction") || c.getAttribute("action") || c.getAttribute("href") || c.getAttribute("src") || c.getAttribute("code") || c.getAttribute("codebase") || "";
            c = {
                element: c,
                elementClasses: a,
                elementText: d,
                elementId: e,
                elementUrl: f,
                Ii: c.getAttribute("formTarget") || c.getAttribute("target") || ""
            };
            return {
                event: b,
                ytm: c
            }
        }
        return "ytm.init" === b ? {
            event: b,
            ytm: {
                timestamp: Ed(a)(Ad)
            }
        } : {
            event: b,
            ytm: {}
        }
    }
    function Rv(a, b) {
        return ud(a).F(a.document, ["click"], function(c) {
            "A" === c.target.nodeName && b(Qv(a, "ytm.linkClick", c.target))
        })
    }
    function Sv(a, b, c, d, e) {
        e = void 0 === e ? a.document : e;
        return ud(a).F(e, d, function(f) {
            b(Qv(a, c, f.target))
        })
    }
    function Tv(a, b, c) {
        return K(a.document.readyState, ["complete", "interactive"]) ? (b(Qv(a, c)),
        u) : Sv(a, b, c, ["DOMContentLoaded"])
    }
    function Uv(a, b, c) {
        if ("ytm.linkClick" === b)
            return Rv(a, c);
        if ("ytm.js" === b)
            return Tv(a, c, "ytm.js");
        if ("ytm.dom" === b)
            return Tv(a, c, "ytm.dom");
        if ("ytm.load" === b)
            return "complete" === a.document.readyState ? (c(Qv(a, "ytm.load")),
            a = u) : a = Sv(a, c, "ytm.load", ["load"], a),
            a;
        if ("ytm.click" === b)
            return Sv(a, c, "ytm.click", ["click"]);
        if ("ytm.formSubmit" === b)
            return Sv(a, c, "ytm.formSubmit", ["submit"], a)
    }
    var Vv = ["ytm.js"]
      , Wv = ["ytm.js", "ytm.dom", "ytm.load"];
    function Xv(a, b) {
        var c = a[b["var"]]
          , d = "eq" === b.fn
          , e = b.target;
        return c && "event" === c.type && d && y(e) && e
    }
    function Yv(a) {
        return Ib(H(cb("conditions"), Jb(F(a.variables, Xv)), nb), a.triggers)
    }
    function Zv(a, b, c) {
        var d = void 0 === d ? "dataLayer" : d;
        c = Yv(c);
        var e = []
          , f = [];
        M(function(g) {
            if (K(g, Ov)) {
                var h = Uv(a, g, b);
                h && e.push(h);
                K(g, Vv) && f.push(g)
            } else
                f.push(g)
        }, Gl(function(g, h) {
            var k = vb(a)(g, Wv)
              , l = vb(a)(h, Wv);
            return -1 === k ? 1 : -1 === l ? -1 : k - l
        }, c));
        c = J(a, d);
        c || (c = [],
        a[d] = c);
        Yi(a, c, function(g) {
            g.oa.F(function(h) {
                var k = J(h, "event");
                y(k) && K(k, f) && b(h)
            });
            e.push(g.unsubscribe)
        });
        return function() {
            return M(Qe, e)
        }
    }
    var $v = u
      , aw = x(function(a, b) {
        $v = b
    });
    function bw(a, b, c) {
        return function() {
            try {
                return b.apply(null, arguments)
            } catch (d) {
                $v(a, d)
            }
            return c
        }
    }
    function cw(a) {
        aw(a, function(b, c) {
            mf(a, "ytm." + b, c)
        })
    }
    function dw(a, b) {
        return a === b
    }
    function ew(a, b, c) {
        return Wb(a, b) && Wb(a, c) ? b > c : !1
    }
    function fw(a, b, c) {
        return Wb(a, b) && Wb(a, c) ? b < c : !1
    }
    function gw(a, b, c) {
        if (!y(b) || !y(c))
            return !1;
        try {
            return (new RegExp(c,a ? "i" : "")).test(b)
        } catch (d) {
            return !1
        }
    }
    function hw(a, b) {
        return L(a) ? K(b, a) : y(a) ? Na(a, "" + b) : !1
    }
    function iw(a, b, c, d) {
        var e = b.defaultValue;
        if (b = c(b.key))
            return d && d.X.checkPermission({
                permissions: d.permissions,
                permissionType: "dataLayer",
                permissionParams: {
                    key: b,
                    operation: 2
                }
            }),
            a = J(a, b),
            C(a) ? e ? c(e) : void 0 : a
    }
    var jw = x(function(a, b, c) {
        b = void 0 === c.min ? 0 : c.min;
        b = a.Math.random() * ((void 0 === c.max ? 2147483647 : c.max) - b + 1) + b;
        return (void 0 === c.isInt ? 0 : c.isInt) ? a.Math.floor(b) : b
    }, Ca);
    function kw(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return "query" === b ? c ? Vd(a.query)[c] : a.query : "protocol" === b ? a.protocol : "host" === b ? d ? ee(a.host) : a.host : "port" === b ? (b = a.protocol,
        a = Ub(a.port) ? a.port : "http:" === b ? "80" : "https:" === b ? "443" : void 0,
        a) : "path" === b ? a.pathname : "fragment" === b ? a.hash.replace("#", "") : "extension" === b ? (a = a.pathname.split("."),
        ((1 < a.length ? a.pop() : void 0) || "").split("/")[0]) : a.href
    }
    var lw = "clientInformation globalThis this caches console cookieStore credentialless crypto customElements document documentPictureInPicture event external fence frameElement frames history indexedDB launchQueue localStorage location mozInnerScreenX mozInnerScreenY navigation navigator opener orientation origin originAgentCluster parent performance scheduler self sessionStorage sharedStorage speechSynthesis top trustedTypes visualViewport window alert atob back blur btoa cancelAnimationFrame cancelIdleCallback captureEvents clearImmediate clearInterval clearTimeout close confirm dump fetch find focus forward getComputedStyle getDefaultComputedStyle getScreenDetails getSelection matchMedia moveBy moveTo open postMessage print prompt queryLocalFonts queueMicrotask releaseEvents reportError requestAnimationFrame requestFileSystem requestIdleCallback resizeBy resizeTo scroll scrollBy scrollByLines scrollByPages scrollTo setImmediate setInterval setTimeout showDirectoryPicker showModalDialog showOpenFilePicker showSaveFilePicker sizeToContent stop structuredClone".split(" ");
    function mw(a) {
        if (!y(a))
            throw jd("gppns");
        if (K(a.split(".")[0], lw))
            throw jd("rwp");
        if (uj(a, "on"))
            throw jd("rwp");
    }
    function nw(a, b) {
        if (C(b) || !!b === b || Rb(a, b) || y(b))
            return b
    }
    function ow(a, b) {
        if (C(b))
            return b;
        var c = nw(a, b);
        if (!C(c))
            return c;
        if (Ra(b))
            return G(function(d, e) {
                var f = q(e)
                  , g = f.next().value;
                f = f.next().value;
                d[g] = ow(a, f);
                return d
            }, {}, ac(b));
        if (L(b))
            return M(F(a, ow), b)
    }
    function pw(a, b) {
        var c = a(b);
        return C(c) ? void 0 : "" + c
    }
    function qw(a, b, c, d, e) {
        var f = F(d, pw);
        if ("event" === c.type)
            return iw(b, {
                type: "dataLayer",
                key: "event"
            }, f, e);
        if ("dataLayer" === c.type)
            return iw(b, c, f, e);
        if ("cnst" === c.type)
            return d(c.value);
        if ("rand" === c.type)
            return jw(a, b, c);
        if ("url" === c.type || "ref" === c.type) {
            a: if (e = !1,
            b = c.component,
            d = "url" === c.type ? (d = c.urlSource) ? f(d) : J(a, "location.href") : J(a, "document.referrer"),
            d) {
                if ("queryVar" === c.component) {
                    b = "query";
                    var g = f(c.key);
                    if (!g) {
                        a = void 0;
                        break a
                    }
                }
                "host" === c.component && (e = c.$i);
                a = rh(a, d);
                a = kw(a, b, g, e)
            } else
                a = void 0;
            return a
        }
        if ("cookie" === c.type)
            return a = "null" === a.origin ? "" : (g = f(c.cookieName)) ? (a = te(a)) ? a[g] || "" : "" : "",
            a;
        if ("js" === c.type)
            return (g = f(c.key)) ? (mw(g),
            e && e.X.checkPermission({
                permissions: e.permissions,
                permissionType: "globals",
                permissionParams: {
                    key: g,
                    operation: 2
                }
            }),
            g = J(a, g),
            a = nw(a, g)) : a = void 0,
            a
    }
    function rw(a, b, c, d, e) {
        var f = d[c];
        if (!f)
            throw jd("var: " + c);
        c = E([a, b, d], sw);
        return qw(a, b, f, c, e)
    }
    function sw(a, b, c, d, e) {
        if (L(d)) {
            if ("template" === d[0])
                return S("", M(function(f) {
                    return sw(a, b, c, f, e)
                }, d.slice(1)));
            if ("var" === d[0])
                return d = q(d),
                d.next(),
                d = d.next().value,
                rw(a, b, d, c, e)
        } else
            return d
    }
    function tw(a, b, c) {
        a = Pf(a);
        if (!(a && y(c) && b instanceof HTMLElement))
            return !1;
        try {
            return a.call(b, c)
        } catch (d) {
            return !1
        }
    }
    function uw(a, b) {
        if ("eq" === b)
            return dw;
        if ("more" === b)
            return F(a, ew);
        if ("less" === b)
            return F(a, fw);
        if ("regex" === b)
            return F(!1, gw);
        if ("iRegex" === b)
            return F(!0, gw);
        if ("css" === b)
            return F(a, tw);
        if ("inc" === b)
            return hw
    }
    var vw = bw("c.ch", function(a, b, c, d) {
        var e = rw(a, b, c["var"], d)
          , f = c.target
          , g = c.not
          , h = uw(a, c.fn);
        if (!h)
            throw jd("fn: " + c.fn);
        a = sw(a, b, d, f);
        return g ? !h(e, a) : h(e, a)
    }, !1);
    function ww(a, b) {
        var c = b.split(".")
          , d = c.pop();
        c = c.length ? J(a, S(".", c)) : a;
        if (!c)
            throw jd("noma");
        return {
            value: J(c, d),
            parent: c,
            Kc: d
        }
    }
    function xw(a, b, c, d) {
        var e = Lf(a)("img");
        e.src = b;
        b = F(e, Mf);
        var f = F(void 0, w);
        e.onerror = H(b, f, d);
        e.onload = H(b, f, c);
        kc(a) && (a = Qf(a),
        N(e.style, {
            position: "absolute",
            visibility: "hidden",
            width: "0px",
            height: "0px"
        }),
        a.appendChild(e))
    }
    var yw = x(function(a, b) {
        return G(function(c, d) {
            c[d] = a[d];
            return c
        }, {}, b)
    })
      , zw = "protocol host port path query extension fragment href".split(" ");
    function Aw(a, b, c, d) {
        if (!c)
            return !1;
        var e = (b = "set_cookies" === b) ? 1 : 2;
        return b && !Ra(d) ? !1 : a.na({
            permissionType: "cookies",
            permissionParams: {
                name: c,
                operation: e,
                options: d
            }
        })
    }
    function Bw(a, b, c, d) {
        if (!c || !y(c) || !y(d))
            return !1;
        switch (c) {
        case "read":
            c = 2;
            break;
        case "write":
            c = 1;
            break;
        case "execute":
            c = 4;
            break;
        default:
            return !1
        }
        return a.na({
            permissionType: "access_local_storage" === b ? "localStorage" : "globals",
            permissionParams: {
                key: d,
                operation: c
            }
        })
    }
    function Cw(a, b, c) {
        if (!c)
            return !1;
        var d = "iframe";
        "load_script" === b ? d = "loadScript" : "send_pixel" === b && (d = "pixel");
        return a.na({
            permissionType: d,
            permissionParams: {
                url: c
            }
        })
    }
    var Dw = {}
      , Ew = (Dw.access_globals = Bw,
    Dw.access_local_storage = Bw,
    Dw.get_cookies = Aw,
    Dw.get_referrer = function(a, b, c) {
        return a.na({
            permissionType: "referrer",
            permissionParams: {
                urlComponent: c || "href"
            }
        })
    }
    ,
    Dw.get_url = function(a, b, c) {
        return a.na({
            permissionType: "url",
            permissionParams: {
                urlComponent: c || "href"
            }
        })
    }
    ,
    Dw.inject_hidden_iframe = Cw,
    Dw.load_script = Cw,
    Dw.logging = function(a) {
        return a.na({
            permissionType: "log",
            permissionParams: null
        })
    }
    ,
    Dw.read_data_layer = function(a, b, c) {
        return c ? a.na({
            permissionType: "dataLayer",
            permissionParams: {
                key: c,
                operation: 2
            }
        }) : !1
    }
    ,
    Dw.read_title = function(a) {
        return a.na({
            permissionType: "readTitle",
            permissionParams: null
        })
    }
    ,
    Dw.send_pixel = Cw,
    Dw.set_cookies = Aw,
    Dw)
      , Fw = {}
      , Gw = (Fw.callInWindow = function(a) {
        var b = a.l
          , c = a.X;
        return function(d) {
            var e = la.apply(1, arguments);
            mw(d);
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 4
                }
            });
            var f = J(b, d);
            if (!A(f))
                throw jd("ca.c.wenf");
            e = f.apply(null, ca(e));
            return ow(b, e)
        }
    }
    ,
    Fw.callLater = function(a) {
        var b = a.l;
        return function(c) {
            X(b, c, 0)
        }
    }
    ,
    Fw.copyFromDataLayer = function(a) {
        var b = a.l
          , c = a.X
          , d = a.event;
        return function(e) {
            if (!d)
                throw jd("No dataLayer data");
            c.checkPermission({
                permissionType: "dataLayer",
                permissionParams: {
                    key: e,
                    operation: 2
                }
            });
            return ow(b, J(d, e))
        }
    }
    ,
    Fw.copyFromWindow = function(a) {
        var b = a.l
          , c = a.X;
        return function(d) {
            mw(d);
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    operation: 2,
                    key: d
                }
            });
            d = J(b, d);
            return ow(b, d)
        }
    }
    ,
    Fw.createArgumentsQueue = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e) {
            function f() {
                return g.push(arguments)
            }
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 1
                }
            });
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: e,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: e,
                    operation: 1
                }
            });
            mw(d);
            mw(e);
            var g = []
              , h = ww(b, d);
            h.value || (h.parent[h.Kc] = f);
            h = ww(b, e);
            if (h.value) {
                if (!L(h.value))
                    throw jd("ca.akna");
                g = h.value
            } else
                h.parent[h.Kc] = g;
            return f
        }
    }
    ,
    Fw.createQueue = function(a) {
        var b = a.l
          , c = a.X;
        return function(d) {
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 1
                }
            });
            mw(d);
            var e = ww(b, d);
            d = e.value;
            var f = e.parent;
            e = e.Kc;
            if (!d)
                f[e] = [];
            else if (!L(d))
                throw jd("akna");
            return D(f[e].push, f[e])
        }
    }
    ,
    Fw.decodeUri = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.decodeURI(c)
            } catch (d) {}
        }
    }
    ,
    Fw.decodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.decodeURIComponent(c)
            } catch (d) {}
        }
    }
    ,
    Fw.encodeUri = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.encodeURI(c)
            } catch (d) {}
        }
    }
    ,
    Fw.encodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.encodeURIComponent(c)
            } catch (d) {}
        }
    }
    ,
    Fw.getCookieValues = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e) {
            e = void 0 === e ? !0 : e;
            c.checkPermission({
                permissionType: "cookies",
                permissionParams: {
                    name: d,
                    operation: 2
                }
            });
            return G(function(f, g) {
                var h = q(ke(g).split("="))
                  , k = h.next().value;
                h = h.next().value;
                k === d && f.push(e ? Ud(h) : h);
                return f
            }, [], b.document.cookie.split(";"))
        }
    }
    ,
    Fw.getTimestamp = function(a) {
        var b = a.l;
        return function() {
            return Ed(b)(Ad)
        }
    }
    ,
    Fw.getType = function(a) {
        var b = a.l;
        return function(c) {
            return B(c) ? "undefined" : Qa(c) ? "null" : Rb(b, c) ? "number" : y(c) ? "string" : !0 === c || !1 === c ? "boolean" : A(c) ? "function" : L(c) ? "array" : "object"
        }
    }
    ,
    Fw.getUrl = function(a) {
        var b = a.l
          , c = a.X;
        return function(d) {
            d = K(d, zw) ? d : "href";
            c.checkPermission({
                permissionType: "url",
                permissionParams: {
                    urlComponent: d
                }
            });
            var e = T(b);
            e.query = e.search.replace(/^\?/, "");
            return kw(e, d)
        }
    }
    ,
    Fw.injectHiddenIframe = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e) {
            e = void 0 === e ? u : e;
            c.checkPermission({
                permissionType: "iframe",
                permissionParams: {
                    url: d
                }
            });
            var f = Lf(b)("iframe");
            N(f.style, {
                display: "none",
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            f.src = d;
            f.onload = function() {
                return e()
            }
            ;
            f.onerror = u;
            Qf(b).appendChild(f)
        }
    }
    ,
    Fw.JSON = function(a) {
        var b = a.l;
        return {
            parse: function(c) {
                try {
                    return b.JSON.parse("" + c)
                } catch (d) {}
            },
            stringify: function(c) {
                try {
                    return b.JSON.stringify(c)
                } catch (d) {}
            }
        }
    }
    ,
    Fw.loadScript = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e, f) {
            c.checkPermission({
                permissionType: "loadScript",
                permissionParams: {
                    url: d
                }
            });
            Ju(b, d, A(e) ? bw("ls.ol", function() {
                return e.apply(null)
            }) : u, A(f) ? bw("ls.ol", function() {
                return f.apply(null)
            }) : void 0)
        }
    }
    ,
    Fw.localStorage = function(a) {
        var b = a.X
          , c = a.l.localStorage;
        return {
            getItem: function(d) {
                b.checkPermission({
                    permissionType: "localStorage",
                    permissionParams: {
                        key: d,
                        operation: 2
                    }
                });
                return c.getItem(d)
            },
            setItem: function(d, e) {
                b.checkPermission({
                    permissionType: "localStorage",
                    permissionParams: {
                        key: d,
                        operation: 1
                    }
                });
                c.setItem(d, e)
            },
            removeItem: function(d) {
                b.checkPermission({
                    permissionType: "localStorage",
                    permissionParams: {
                        key: d,
                        operation: 1
                    }
                });
                c.removeItem(d)
            }
        }
    }
    ,
    Fw.logToConsole = function(a) {
        var b = a.l
          , c = a.X;
        return function() {
            var d = la.apply(0, arguments);
            if (c.na({
                permissionType: "log",
                permissionParams: {
                    logLevel: 0
                }
            })) {
                var e;
                (e = Xk(b)).log.apply(e, ca(d))
            }
        }
    }
    ,
    Fw.Math = function(a) {
        return yw(a.l.Math, "abs floor ceil round max min pow sqrt".split(" "))
    }
    ,
    Fw.Object = function(a) {
        var b = a.l;
        return {
            keys: bc,
            values: ec,
            freeze: function(c) {
                return b.Object.freeze(c)
            },
            entries: ac,
            "delete": function(c, d) {
                if (!c || !I(c, d) || L(c) || c === b)
                    return !1;
                try {
                    return delete c[d]
                } catch (e) {
                    return !1
                }
            }
        }
    }
    ,
    Fw.queryPermission = function(a) {
        var b = a.X;
        return function(c, d, e) {
            return (B(d) || y(d)) && I(Ew, c) ? (0,
            Ew[c])(b, c, d, e) : !1
        }
    }
    ,
    Fw.readTitle = function(a) {
        var b = a.l
          , c = a.X;
        return function() {
            c.checkPermission({
                permissionType: "readTitle",
                permissionParams: null
            });
            return b.document.title
        }
    }
    ,
    Fw.sendPixel = function(a) {
        var b = a.X
          , c = a.l;
        return function(d, e, f) {
            e = void 0 === e ? u : e;
            f = void 0 === f ? u : f;
            if (!y(d))
                throw jd("ca.p.uns");
            b.checkPermission({
                permissionType: "pixel",
                permissionParams: {
                    url: d
                }
            });
            xw(c, d, e, f)
        }
    }
    ,
    Fw.setCookie = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e, f, g) {
            f = void 0 === f ? {} : f;
            g = void 0 === g ? !0 : g;
            c.checkPermission({
                permissionType: "cookies",
                permissionParams: {
                    name: d,
                    operation: 1,
                    options: f
                }
            });
            e = g ? Td(e) : e;
            d = d + "=" + e + ";";
            if (f) {
                I(f, "domain") && (d += " Domain=" + f.domain + ";");
                I(f, "path") && (d += " Path=" + f.path + ";");
                I(f, "expires") && (d += " Expires=" + f.expires + ";");
                if (I(f, "max-age")) {
                    if (!Rb(b, f["max-age"]))
                        throw jd("ca.c.mann");
                    d += " Max-Age=" + f["max-age"] + ";"
                }
                if (I(f, "sameSite")) {
                    if (!K(f.sameSite, ["Lax", "Strict", "None"]))
                        throw jd("ca.c.ssuop");
                    d += " Same-Site=" + f.sameSite + ";"
                }
                I(f, "secure") && f.secure && (d += " Secure;")
            }
            b.document.cookie = d
        }
    }
    ,
    Fw.setInWindow = function(a) {
        var b = a.l
          , c = a.X;
        return function(d, e, f) {
            f = void 0 === f ? !1 : f;
            c.checkPermission({
                permissionType: "globals",
                permissionParams: {
                    key: d,
                    operation: 1
                }
            });
            mw(d);
            try {
                var g = ww(b, d)
                  , h = g.parent
                  , k = g.Kc;
                if (!f && I(h, k))
                    return !1;
                h[k] = e;
                return !0
            } catch (l) {
                return !1
            }
        }
    }
    ,
    Fw);
    function Hw(a) {
        return I(Gw, a) ? Gw[a] : void 0
    }
    function Iw(a, b) {
        for (var c = a.length; 0 < c; ) {
            var d = a[--c];
            if (I(d.Fe, b))
                return d.Fe[b]
        }
    }
    function Jw(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        return a.concat({
            Fe: b,
            methods: c,
            pc: !0
        })
    }
    function Kw(a, b, c, d) {
        for (var e = a.length - 1; 0 <= e; --e) {
            var f = a[e];
            f.pc = !1;
            if (I(f.methods, b)) {
                f.methods[b](d ? d() : void 0);
                return
            }
        }
        throw jd(c);
    }
    function Lw(a, b) {
        var c = q(b);
        c.next();
        var d = c.next().value
          , e = c.next().value
          , f = c.next().value
          , g = M(w, a);
        return function() {
            var h = arguments
              , k = G(function(m, p, r) {
                if (m[p])
                    throw jd("da");
                m[p] = {
                    kind: 1,
                    value: h[r]
                };
                return m
            }, {}, e);
            d && !K(d, e) && (k[d] = {
                kind: 0,
                value: d
            });
            var l;
            Mw(g, f, k, {
                "return": function(m) {
                    l = m
                }
            });
            return l
        }
    }
    function Nw(a) {
        return L(a) && 42 === a[0]
    }
    function Ow(a) {
        return L(a) && 35 === a[0]
    }
    function Pw(a, b) {
        var c = q(b);
        c.next();
        c = ba(c);
        return G(function(d, e) {
            var f = q(e)
              , g = f.next().value;
            f = f.next().value;
            g = Qw(a, g);
            f = Qw(a, f);
            d["" + g] = f;
            return d
        }, {}, c)
    }
    function Rw(a) {
        return L(a) && 40 === a[0]
    }
    function Sw(a, b) {
        var c = q(b);
        c.next();
        c = ba(c);
        return M(function(d) {
            return Qw(a, d)
        }, c)
    }
    function Tw(a, b) {
        var c = q(b);
        c.next();
        var d = c.next().value
          , e = c.next().value;
        c = c.next().value;
        e = Qw(a, e);
        c = Qw(a, c);
        switch (d) {
        case "==":
            return e == c;
        case "!=":
            return e != c;
        case "===":
            return e === c;
        case "!==":
            return e !== c;
        case "<":
            return e < c;
        case "<=":
            return e <= c;
        case ">":
            return e > c;
        case ">=":
            return e >= c;
        case "<<":
            return e << c;
        case ">>":
            return e >> c;
        case ">>>":
            return e >>> c;
        case "+":
            return e + c;
        case "-":
            return e - c;
        case "*":
            return e * c;
        case "/":
            return e / c;
        case "%":
            return e % c;
        case "|":
            return e | c;
        case "^":
            return e ^ c;
        case "&":
            return e & c;
        case "in":
            return e in c;
        case "instanceof":
            return e instanceof c;
        default:
            throw jd("uo");
        }
    }
    function Uw(a, b) {
        var c = q(b);
        c.next();
        var d = c.next().value;
        c = c.next().value;
        c = Qw(a, c);
        switch (d) {
        case "+":
            return +c;
        case "!":
            return !c;
        case "-":
            return -c;
        case "~":
            return ~c;
        default:
            throw jd("uo");
        }
    }
    function Vw(a, b, c) {
        c = void 0 === c ? [] : c;
        if (Rw(b)) {
            b = q(b);
            b.next();
            b = b.next().value;
            a = Iw(a, b);
            if (!a)
                throw jd("vnd");
            if (0 === a.kind && 0 === c.length)
                throw jd("cva");
            return {
                Ph: c,
                pi: a
            }
        }
        if (Ow(b)) {
            var d = q(b);
            d.next();
            b = d.next().value;
            d = d.next().value;
            d = Qw(a, d);
            c.push("" + d);
            return Vw(a, b, c)
        }
        throw jd("iat");
    }
    function Ww(a, b, c, d) {
        b = Vw(a, b);
        a = b.pi;
        var e = b.Ph;
        e.unshift("value");
        b = e.pop();
        a = G(function(f, g) {
            return f[g]
        }, a, e);
        switch (d) {
        case "=":
            return a[b] = c;
        case "+=":
            return a[b] += c;
        case "-=":
            return a[b] -= c;
        case "*=":
            return a[b] *= c;
        case "/=":
            return a[b] /= c;
        case "%=":
            return a[b] %= c;
        case "<<=":
            return a[b] <<= c;
        case ">>=":
            return a[b] >>= c;
        case ">>>=":
            return a[b] >>>= c;
        case "|=":
            return a[b] |= c;
        case "^=":
            return a[b] ^= c;
        case "&=":
            return a[b] &= c;
        default:
            throw jd("uo");
        }
    }
    function Qw(a, b) {
        if (y(b) || "[object Number]" === Object.prototype.toString.call(b) || !!b === b || Nw(b))
            return Nw(b) ? null : b;
        if (Rw(b)) {
            var c = q(b);
            c.next();
            c = c.next().value;
            c = Iw(a, c);
            if (!c)
                throw jd("vnd");
            return c.value
        }
        if (L(b) && 37 === b[0]) {
            var d = q(b);
            d.next();
            c = d.next().value;
            d = ba(d);
            c = Qw(a, c);
            if (!A(c))
                throw jd("tenf");
            d = M(F(a, Qw), d);
            return c.apply(null, d)
        }
        if (L(b) && 24 === b[0])
            return Lw(a, b);
        if (Ow(b)) {
            d = q(b);
            d.next();
            c = d.next().value;
            d = d.next().value;
            c = Qw(a, c);
            d = Qw(a, d);
            if (!c)
                throw jd("noma");
            return c["" + d]
        }
        if (L(b) && 23 === b[0])
            return Pw(a, b);
        if (L(b) && 22 === b[0])
            return Sw(a, b);
        if (L(b) && 29 === b[0])
            return Tw(a, b);
        if (L(b) && 25 === b[0])
            return Uw(a, b);
        if (L(b) && 27 === b[0]) {
            d = q(b);
            d.next();
            var e = d.next().value;
            c = d.next().value;
            d = d.next().value;
            switch (e) {
            case "++":
                e = "+=";
                break;
            case "--":
                e = "-=";
                break;
            default:
                throw jd("uo");
            }
            c ? c = Ww(a, d, 1, e) : (c = Qw(a, d),
            Ww(a, d, 1, e));
            return c
        }
        if (L(b) && 31 === b[0])
            return e = q(b),
            e.next(),
            c = e.next().value,
            d = e.next().value,
            e = e.next().value,
            e = Qw(a, e),
            Ww(a, d, e, c);
        if (L(b) && 33 === b[0]) {
            c = q(b);
            c.next();
            d = c.next().value;
            e = c.next().value;
            c = c.next().value;
            if ("&&" === d)
                c = (d = Qw(a, e)) ? Qw(a, c) : d;
            else if ("||" === d)
                c = (d = Qw(a, e)) ? d : Qw(a, c);
            else
                throw jd("uo");
            return c
        }
        if (L(b) && 36 === b[0])
            return e = q(b),
            e.next(),
            d = e.next().value,
            c = e.next().value,
            e = e.next().value,
            d = Qw(a, d),
            Qw(a, d ? c : e)
    }
    function Xw(a) {
        return L(a) && (18 === a[0] || 19 === a[0])
    }
    function Yw(a, b) {
        var c = q(b)
          , d = c.next().value;
        c = ba(c);
        var e = 18 === d;
        M(function(f) {
            var g = q(f)
              , h = g.next().value;
            g = g.next().value;
            if (e && 1 === f.length)
                throw jd("mca");
            f = a[a.length - 1].Fe;
            if (I(f, h))
                throw jd("vr");
            g = B(g) ? g : Qw(a, g);
            f[h] = {
                kind: e ? 0 : 1,
                value: g
            }
        }, c)
    }
    function Zw(a, b) {
        var c = q(b);
        c.next();
        var d = c.next().value;
        Kw(a, "return", "irs", function() {
            return B(d) ? d : Qw(a, d)
        })
    }
    function $w(a) {
        var b = {
            hd: !1
        };
        a = Jw(a, void 0, {
            "continue": function() {
                b.hd = !0
            },
            "break": u
        });
        b.stack = a;
        b.Gg = a[a.length - 1];
        return b
    }
    function ax(a, b) {
        if (L(b) && 3 === b[0])
            Mw(a, b);
        else if (Xw(b))
            Yw(a, b);
        else if (L(b) && 2 === b[0]) {
            var c = q(b);
            c.next();
            c = c.next().value;
            Qw(a, c)
        } else if (L(b) && 7 === b[0]) {
            var d = q(b);
            d.next();
            c = d.next().value;
            var e = d.next().value;
            d = d.next().value;
            Qw(a, c) ? ax(a, e) : d && ax(a, d)
        } else if (8 === b[0]) {
            c = q(b);
            c.next();
            var f = c.next().value;
            c = ba(c);
            d = e = !1;
            var g = []
              , h = [];
            f = Qw(a, f);
            for (var k = 0; k < c.length; k += 1) {
                var l = q(c[k]);
                l.next();
                var m = l.next().value;
                l = ba(l);
                var p = Qa(m);
                d = d || p;
                p || (e = e || Qw(a, m) === f);
                e && (g = g.concat(l));
                d && (h = h.concat(l))
            }
            Mw(a, [3].concat(ca(e ? g : h)), {}, {
                "break": u
            })
        } else if (L(b) && 4 === b[0])
            Zw(a, b);
        else if (L(b) && 5 === b[0])
            Kw(a, "break", "ibs");
        else if (L(b) && 6 === b[0])
            Kw(a, "continue", "ics");
        else if (L(b) && 15 === b[0])
            for (d = q(b),
            d.next(),
            h = d.next().value,
            c = d.next().value,
            e = d.next().value,
            d = d.next().value,
            g = $w(a),
            h && (Xw(h) ? Yw(g.stack, h) : Qw(g.stack, h)),
            h = !0; h && (!c || Qw(g.stack, c)); )
                h = g.Gg,
                ax(g.stack, d),
                g.hd && (h.pc = !0,
                g.hd = !1),
                h = h.pc,
                e && h && Qw(g.stack, e)
    }
    function Mw(a, b, c, d) {
        b = q(b);
        b.next();
        b = ba(b);
        a = Jw(a, c, d);
        c = a[a.length - 1];
        for (d = 0; d < b.length && c.pc; d += 1)
            ax(a, b[d])
    }
    function bx(a, b, c) {
        b = q(b);
        b.next();
        b.next();
        b = ba(b);
        a = {
            X: c.X,
            l: a,
            event: c.event
        };
        var d = {};
        c = N(c.data, (d.ytmOnFailure = u,
        d.ytmOnSuccess = u,
        d));
        d = {};
        c = Jw([], (d.undefined = {
            kind: 0,
            value: void 0
        },
        d.require = {
            kind: 0,
            value: H(Hw, pa(Qe)(a))
        },
        d.data = {
            kind: 0,
            value: c
        },
        d));
        Mw(c, [3].concat(ca(b)))
    }
    function cx(a, b) {
        return {
            checkPermission: function(c) {
                c = N({
                    permissions: a
                }, c);
                b.checkPermission(c)
            },
            na: function(c) {
                c = N({
                    permissions: a
                }, c);
                return b.na(c)
            }
        }
    }
    function dx(a, b) {
        if (!I(b, "code") || !L(b.code) || !b.code[a])
            throw jd("mp");
        return b.code[a]
    }
    function ex(a, b, c, d, e) {
        var f = d.data;
        f = L(f) ? f : dx(f, b);
        var g = cx(e.permissions, e.X);
        d = G(function(h, k) {
            var l = q(k)
              , m = l.next().value;
            l = l.next().value;
            l = B(l) ? l : sw(a, c, b.variables, l, e);
            h[m] = ow(a, l);
            return h
        }, {}, ac(d.settings || {}));
        bx(a, f, {
            X: g,
            data: d,
            event: c
        })
    }
    function fx(a, b, c, d, e) {
        M(bw("t.e", function(f) {
            var g = b.tags[f]
              , h = b.permissions[f];
            if (!g || !h)
                throw jd("i.conf." + b.containerVersion + "-" + f);
            var k = {
                X: e,
                permissions: h
            };
            "pro" === g.type ? ex(a, b, c, g, k) : "pix" === g.type && (f = k.X,
            h = k.permissions,
            g = sw(a, c, b.variables, g.data.pixelUrl, k),
            y(g) && (f.checkPermission({
                permissions: h,
                permissionType: "pixel",
                permissionParams: {
                    url: g
                }
            }),
            xw(a, g, u, u)))
        }), Gl(function(f, g) {
            return f - g
        }, d))
    }
    function gx(a, b, c) {
        var d = b.triggers
          , e = b.variables;
        return {
            dispatchEvent: function(f) {
                var g = G(function(h, k) {
                    Nb(function(l) {
                        return !vw(a, f, l, e)
                    }, k.conditions) || M(function(l) {
                        K(l, h) || h.push(l)
                    }, k.tags);
                    return h
                }, [], d);
                0 === g.length || fx(a, b, f, g, c)
            }
        }
    }
    function hx(a, b) {
        return b.length > a.length ? !1 : a.substring(a.length - b.length) === b
    }
    function ix(a, b, c) {
        b = rh(a, b);
        if (!b.protocol || "https:" !== b.protocol)
            return !1;
        a = rh(a, c);
        return b.host && a.host && (uj(a.host, "*.") ? hx(b.host, a.host.substring(2)) : b.host === a.host) ? "/" === a.pathname ? !0 : hx(a.pathname, "/*") ? uj(b.pathname, a.pathname.substring(0, a.pathname.length - 2)) : a.pathname === b.pathname : !1
    }
    function jx(a, b, c, d) {
        if (!I(a, "cookies"))
            return !1;
        var e = a.cookies;
        a = I(e, b) ? e[b] : {
            access: 0
        };
        if (2 === c)
            return I(e, "ytm.ks.*") || !!(a.access & c);
        if (1 === c) {
            if (!I(e, b) || !d)
                return !1;
            b = a.access;
            e = a.domain;
            var f = a.path
              , g = a.secure
              , h = a.Yi
              , k = !C(d.expires) || !C(d["max-age"]);
            if (I(a, "session") && h)
                if (1 === h) {
                    if (k)
                        return !1
                } else if (!k)
                    return !1;
            return !(b & c) || I(a, "domain") && e !== d.domain || I(a, "path") && f !== d.path || I(a, "secure") && (1 === g && !d.secure || 2 === g && d.secure) ? !1 : !0
        }
        return !1
    }
    function kx(a, b) {
        var c = b.permissionType
          , d = b.permissions
          , e = b.permissionParams;
        if ("globals" === c || "localStorage" === c || "dataLayer" === c) {
            var f = e.key;
            e = e.operation;
            I(d, c) ? (d = d[c],
            c = "dataLayer" === c && I(d, "ytm.ks.*") && d["ytm.ks.*"] & e ? !0 : I(d, f) ? !!(d[f] & e) : !1) : c = !1
        } else
            "url" === c || "referrer" === c ? (f = e.urlComponent,
            e = e.variableName,
            I(d, c) ? (c = d[c],
            c = "queryVar" === f ? I(c, "queryVars") && e ? K(e, c.queryVars) : !1 : !!c[f]) : c = !1) : "log" === c ? (c = e.logLevel,
            c = I(d, "log") ? c >= d.log : !1) : "loadScript" === c || "pixel" === c || "iframe" === c ? (f = e.url,
            I(d, c) && I(d[c], "allow") ? (c = d[c],
            c = Nb(E([a, f], ix), c.allow)) : c = !1) : c = "cookies" === c ? jx(d, e.name, e.operation, e.options) : "readTitle" === c ? I(d, "readTitle") ? d.readTitle : !1 : !1;
        return c
    }
    function lx(a, b) {
        return {
            containerId: b,
            permissionType: a.permissionType,
            permissionParams: a.permissionParams
        }
    }
    function mx(a, b) {
        function c(e) {
            var f = I(d, e.permissionType) && d[e.permissionType];
            if (f) {
                var g = lx(e, b);
                if (Nb(function(h) {
                    try {
                        return !1 === h(g, b)
                    } catch (k) {
                        return !0
                    }
                }, f))
                    return !1
            }
            return kx(a, e)
        }
        var d = {};
        return {
            lg: function(e, f) {
                y(e) && A(f) && (I(d, e) || (d[e] = []),
                d[e].push(f))
            },
            checkPermission: function(e) {
                if (!c(e)) {
                    e = lx(e, b);
                    var f = Error("Permission denied for " + e.permissionType);
                    f.cause = e;
                    md(f)
                }
            },
            na: c
        }
    }
    var nx = x(function(a) {
        a = T(a).search;
        return Vd(a.substring(1))._ytm_preview
    })
      , ox = V("p.ips", function(a, b) {
        Xh(b, function(c) {
            (J(c, "settings.phchange") || J(c, "settings.phhide")) && Lu(a, "tag_phone", b, c)
        })
    })
      , px = V("p.suic", function(a, b) {
        return Xh(b, function(c) {
            var d = Rc(a);
            if (!d.C("pic") && !Sm(c) && (c = J(c, "settings.pic"))) {
                var e = Sh(a, "pic");
                d.D("pic", 1);
                return e({
                    N: {
                        Wc: !1,
                        Nc: !0
                    }
                }, [c]).then(function(f) {
                    y(f.Ga) && (f = xf(a, f.Ga)) && (f = J(f, "ymaf"),
                    y(f) && f && we(a, "_ym_fa", f, 43200))
                })
            }
        })["catch"](U(a, "pic"))
    })
      , qx = V("p.tv", function(a) {
        if (Yl(a)) {
            var b = Q(a);
            Zl(a).then(function(c) {
                b.D("lgguid", c)
            }, U(a, "p.tv.p"))
        }
    })
      , rx = V("p.cm", function(a) {
        Rc(a).ra("mcs", V("p.cm.cs", function(b, c, d, e, f) {
            if (gi(a, c))
                return Yo(b, c, d, e, f);
            md(jd("cmws.cd"))
        })).ra("wsfm", Wg)
    })
      , sx = {}
      , tx = x(Ce)
      , ux = H(Va("exec", /counterID=(\d+)/), cb("1"));
    function vx(a, b) {
        var c = "" + b
          , d = {
            id: 1,
            ca: "0"
        }
          , e = ux(c);
        e ? d.id = e : -1 === La(c, ":") ? (c = Ub(c),
        d.id = c) : (e = q(c.split(":")),
        c = e.next().value,
        e = e.next().value,
        d.id = Ub(c),
        d.ca = Nc(e) ? "1" : "0");
        return [gi(a, d), d]
    }
    var wx = oa(function(a, b) {
        var c = tx(a)
          , d = q(ub(b))
          , e = d.next().value
          , f = d.next().value
          , g = ba(d);
        if (f) {
            d = q(vx(a, e));
            var h = d.next().value
              , k = d.next().value;
            d = O(k);
            c[d] || (c[d] = {});
            c = c[d];
            b.Se || sx[f] && G(function(l, m) {
                return l || !!m(a, k, g, h)
            }, !1, sx[f]) || ("init" === f ? (b.Se = !0,
            h ? (f = {},
            $h(a, "" + e, "dc", (f.key = e,
            f))) : a["yaCounter" + k.id] = new a.Ya[Mc.ec](N({}, g[0], k))) : h && h[f] && c.ph ? (h[f].apply(h, ca(g)),
            b.Se = !0) : (d = c.Mf,
            d || (d = [],
            c.Mf = d),
            d.push(Pe([e, f], g))))
        }
    })
      , xx = V("destruct.e", function(a, b, c) {
        return function() {
            var d = Q(a)
              , e = b.id;
            M(function(f, g) {
                return A(f) && U(a, "dest.fr." + g, f)()
            }, c);
            delete d.C("counters")[O(b)];
            delete a["yaCounter" + e]
        }
    });
    function yx(a, b, c, d) {
        return function() {
            var e = Ha(arguments);
            e = d.apply(null, ca(e));
            return B(e) ? gi(a, b) : e
        }
    }
    function zx(a, b, c, d) {
        return U(a, "cm." + c, d)
    }
    function Ax(a, b, c, d, e) {
        if (!c.length)
            return e;
        c = M(function(f) {
            return E([a, b, d], f)
        }, c);
        return H.apply(null, ca(c))(e)
    }
    var Bx = Q(window);
    Bx.ra("hitParam", {});
    Bx.ra("lastReferrer", window.location.href);
    ki.push(function(a, b) {
        var c = {};
        return c.firstPartyParams = zi(a, b),
        c.firstPartyParamsHashed = Bi(a, b),
        c
    });
    qf.push("fpp");
    qf.push("fpmh");
    (function() {
        var a = Q(window);
        a.ra("getCounters", Hi(window));
        ji.push(Ii);
        mi.push(function(b, c) {
            c.counters = a.C("getCounters")
        })
    }
    )();
    Rh["1"] = df;
    ki.push(Ri);
    Nh["1"] = Hh;
    ih(Ni, -1);
    kh["1"] = [[Ni, -1], [ff, 1], [ch, 2], [Wg(), 3], [fh, 4]];
    ki.push(bj);
    ki.push(V("p.ar", function(a, b) {
        var c = Sh(a, "a", b)
          , d = {};
        return d.hit = function(e, f, g, h, k, l) {
            var m = {};
            m = {
                H: {},
                K: Le((m.pv = 1,
                m.ar = 1,
                m))
            };
            f = Ra(f) ? {
                title: f.title,
                wf: f.referer,
                O: f.params,
                Zb: f.callback,
                l: f.ctx
            } : {
                title: f,
                wf: g,
                O: h,
                Zb: k,
                l: l
            };
            h = Pi(b);
            g = e || T(a).href;
            h.url !== g && (h.ref = h.url,
            h.url = e);
            e = f.wf || h.ref || a.document.referrer;
            h = {};
            h = ai(a, b, "pv", (h.id = b.id,
            h.url = g,
            h.ref = e,
            h), f.O);
            k = N(m.M || {}, {
                O: f.O,
                title: f.title
            });
            l = {};
            m = c(N(m, {
                M: k,
                H: N(m.H || {}, (l["page-url"] = g,
                l["page-ref"] = e,
                l))
            }), b).then(h);
            return Oi(a, "p.ar.s", m, f.Zb || u, f.l)
        }
        ,
        d
    }));
    Rh.a = df;
    kh.a = gh;
    Nh.a = Hh;
    ki.push(ej);
    Rh.g = df;
    Nh.g = Hh;
    kh.g = gh;
    ki.push(fj);
    ki.push(kj);
    kh.t = gh;
    Rh.t = df;
    Nh.t = Hh;
    ki.push(V("cl.p", function(a, b) {
        function c(p, r, t, v) {
            v = void 0 === v ? {} : v;
            t ? nj(a, b, {
                url: t,
                ob: !0,
                wc: p,
                Ac: r,
                sender: d,
                Zf: v
            }) : g.warn("clel")
        }
        var d = Sh(a, "2", b)
          , e = []
          , f = O(b)
          , g = Zh(a, f)
          , h = U(a, "s.s.tr", F(Fi(a, f), mj));
        f = {
            l: a,
            fb: b,
            Rg: e,
            sender: d,
            Oi: Q(a),
            Cg: Gf(a, b.id),
            Qi: mg(a),
            ji: F(F(f, Gi(a)), H(Qe, cb("trackLinks")))
        };
        f = U(a, "cl.p.c", F(f, oj));
        f = ud(a).F(a, ["click"], f);
        b.Vf && h(b.Vf);
        var k = U(a, "file.clc", E([!0, !1], c))
          , l = U(a, "e.l.l.clc", E([!1, !0], c));
        e = U(a, "add.f.e.clc", pj(e));
        var m = {};
        return m.file = k,
        m.extLink = l,
        m.addFileExtension = e,
        m.trackLinks = h,
        m.u = f,
        m
    }));
    kh["2"] = gh;
    Rh["2"] = df;
    Nh["2"] = Hh;
    Rh.r = cf("r");
    Nh.r = ["f", "x", "j", "i"];
    li.push(V("p.r", function(a, b) {
        var c = xj(a)
          , d = Sh(a, "r", b)
          , e = U(a, "rts.p");
        return Xh(b, E([function(f, g) {
            var h = {
                id: g.Bg,
                ca: g.ca
            }
              , k = {
                N: {
                    ba: g.Nh
                },
                K: Le(g.qg),
                H: g.O,
                M: {
                    Pb: g.Pb
                },
                Ja: {
                    qa: g.qa
                }
            };
            g.Ha && (k.Ha = nf(g.Ha));
            h = d(k, h)["catch"](e);
            return f.then(F(h, w))
        }
        , R.resolve(), c], G)).then(F(void 0, w))["catch"](e)
    }));
    lh("r", function(a) {
        return {
            R: function(b, c) {
                var d = void 0 === b.K ? Le() : b.K
                  , e = b.M.Pb
                  , f = qj(a)
                  , g = d.C("rqnl", 0) + 1;
                d.D("rqnl", g);
                if (d = J(f, S(".", [e, "browserInfo"])))
                    d.rqnl = g,
                    rj(a);
                c()
            },
            Ca: function(b, c) {
                sj(a, b);
                c()
            }
        }
    }, 1);
    ih(tj, 100);
    lh("1", tj, 100);
    lh("n", tj, 100);
    lh("m", tj, 100);
    ki.push(zj);
    lh("n", ff, 1);
    lh("n", ch, 2);
    lh("n", Wg(), 3);
    lh("n", fh, 3);
    Rh.n = df;
    Nh.n = Hh;
    Ve({
        Je: {
            da: "accurateTrackBounce"
        }
    });
    ki.push(Vj);
    Rh.m = cf("cm");
    Nh.m = Lh;
    lh("m", Wg(["u", "v", "vf"]), 1);
    Ve({
        xg: {
            da: "clickmap"
        }
    });
    ki.push(Wj);
    ki.push(Yj);
    ki.push(kk);
    ki.push(rk);
    ki.push(Jk);
    qf.push("ecommerce");
    Ve({
        od: {
            da: "ecommerce",
            Va: function(a) {
                if (a)
                    return !0 === a ? "dataLayer" : "" + a
            }
        }
    });
    ki.push(Ok);
    qf.push("user_id");
    ki.push(Pk);
    ih(function(a, b) {
        return {
            Ca: function(c, d) {
                var e = gi(a, b);
                e = e && e.userParams;
                var f = (c.M || {}).De;
                e && f && e(f);
                d()
            }
        }
    }, 0);
    pe.push("_ym_debug");
    ni.unshift(Sk);
    ki.push(Tk);
    var Cx = {}
      , Dx = (Cx.tp = H(Ca, Li, hb),
    Cx.tpid = H(Ca, function(a) {
        a = O(a);
        return Ji[a] && Ji[a].ii || null
    }),
    Cx);
    N(Ug, Dx);
    ih(Uk, 20);
    lh("n", Uk, 20);
    lh("1", Uk, 20);
    ni.unshift(Wk);
    Ug.fp = function(a, b, c) {
        if (c.H && c.H.nohit)
            return null;
        c = Q(a).C;
        if (!c("fpe"))
            return null;
        b = Vk(b);
        if (b.Tg)
            return null;
        c = c("fht", Infinity);
        a: {
            var d = J(a, "performance.getEntriesByType");
            if (A(d)) {
                if (a = mb(H(w, cb("name"), qa("first-contentful-paint")), d.call(a.performance, "paint")),
                a.length) {
                    a = a[0].startTime;
                    break a
                }
            } else {
                var e = J(a, "chrome.loadTimes");
                d = Rg(a);
                if (A(e) && (e = e.call(a.chrome),
                e = J(e, "firstPaintTime"),
                d && e)) {
                    a = 1E3 * e - d;
                    break a
                }
                if (a = J(a, "performance.timing.msFirstPaint")) {
                    a -= d;
                    break a
                }
            }
            a = void 0
        }
        return a && c > a ? (b.Tg = a,
        Math.round(a)) : null
    }
    ;
    ki.push(function(a, b) {
        var c = {};
        return c.ecommerceAdd = V("ecm.a", $k(a, b)),
        c.ecommerceRemove = V("ecm.r", al(a, b)),
        c.ecommerceDetail = V("ecm.d", bl(a, b)),
        c.ecommercePurchase = V("ecm.p", cl(a, b)),
        c
    });
    (function() {
        var a = {
            bu: $l,
            pri: pm
        };
        a.wv = F(2, w);
        a.ds = mm;
        a.co = function(c) {
            return ib(Q(c).C("jn"))
        }
        ;
        a.td = rm;
        var b = {};
        N(a, (b.iss = H(zc, hb),
        b.hdl = H(Ac, hb),
        b.iia = H(Bc, hb),
        b.cpf = H(Kl, hb),
        b.ntf = x(function(c) {
            c = J(c, "Notification.permission");
            c = "denied" === c ? !1 : "granted" === c ? !0 : null;
            return Qa(c) ? null : c ? 2 : 1
        }),
        b.eu = Ll("isEU"),
        b.ns = Rg,
        b.np = function(c) {
            return Xd(c, 0, 100) ? null : Tl(ke(jc(c), 100))
        }
        ,
        b));
        a.pani = bm;
        a.pci = cm;
        a.si = dm;
        a.gi = em;
        a.pic = pa(se)("_ym_fa");
        a.stlgg = Ll("lgguid");
        a.sttdi = Xl;
        a.stti = Wl;
        a.sttifa = Vl;
        a.bl = Ll("bl");
        a.ntq = Ll("ntq");
        N(Ug, a)
    }
    )();
    (function() {
        var a = {};
        a.hc = Ll("hc");
        a.oo = Ll("oo");
        a.pmc = Ll("cmc");
        a.re = H(pg, hb);
        a.aw = function(b) {
            b = Je(H(C, Da), [b.document.hidden, b.document.msHidden, b.document.webkitHidden]);
            return C(b) ? null : ib(!b)
        }
        ;
        a.rcm = Jm;
        a.yu = function(b) {
            return (b = ze(b, "").C("yandexuid")) && b.substring(0, 25)
        }
        ;
        a.ifc = Ll("ifc");
        a.ifb = Ll("ifb");
        a.ecs = Ll("ecs");
        a.csi = Ll("scip");
        a.cdl = Ll("cdl");
        a.eco = x(Fm, H(Ca, O));
        a.dss = Ll("dSync");
        a.pis = Ll("pis");
        a.ucs = function(b) {
            return (b = ze(b).C("ucs")) && b.substring(0, 25)
        }
        ;
        N(wf, a)
    }
    )();
    Nh.er = Jh;
    (function() {
        var a = window;
        try {
            var b = Oh(a, "er")
              , c = Mm(a, b);
            lf.push(function(d, e, f, g) {
                if (!(.01 >= a.Math.random())) {
                    var h = {}
                      , k = {}
                      , l = {}
                      , m = {}
                      , p = {};
                    c((p[d] = (m[Mc.eb] = (l[e] = (k[f] = g ? (h[a.location.href] = g,
                    h) : a.location.href,
                    k),
                    l),
                    m),
                    p))
                }
            })
        } catch (d) {}
    }
    )();
    ii.push(function(a, b) {
        if (J(a, "disableYaCounter" + b.id) || J(a, "Ya.disableMetrica")) {
            var c = O(b);
            delete Q(a).C("counters", {})[c];
            md(hf("oo.e"))
        }
    });
    hh.unshift(function(a) {
        return {
            R: function(b, c) {
                Q(a).C("oo") || c()
            }
        }
    });
    ih(function(a, b) {
        return {
            R: function(c, d) {
                var e = c.H
                  , f = c.K;
                !Nm[b.id] && f.C("pv") && b.exp && !e.nohit && (e.exp = b.exp,
                Nm[b.id] = !0);
                d()
            }
        }
    }, -99);
    ki.push(Om);
    kh.e = gh;
    Rh.e = df;
    Nh.e = Hh;
    Ve({
        exp: {
            da: "experiments"
        }
    });
    uf.experiments = "ex";
    Pm.push(Qm);
    Rh.f = df;
    var Ex = {};
    N(Nh, (Ex.f = Ih,
    Ex));
    lh("f", Wg(), 1);
    lh("f", Xg, 2);
    lh("f", Uk, 20);
    ii.push(function(a, b) {
        var c = {
            ta: O(b),
            kd: gi(a, b),
            Uf: Ed(a),
            Sd: Ff(a)
        }
          , d = c.Uf(Bd);
        if (!c.Sd.Jd) {
            var e = c.Sd.C("ymoo" + c.ta);
            e && 30 > d - e ? (c = c.ta,
            delete Q(a).C("counters", {})[c],
            md(hf("uws"))) : Xh(b, Rm(c))["catch"](U(a, "d.f"))
        }
    });
    var Fx = ["x"]
      , Gx = {};
    N(Nh, (Gx.s = Fx,
    Gx.S = Fx,
    Gx.u = Jh,
    Gx));
    var Hx = {};
    N(Rh, (Hx.s = Oe,
    Hx.S = df,
    Hx.u = Oe,
    Hx));
    lh("s");
    lh("u");
    lh("S", Wg(["v", "hid", "u", "vf", "rn"]), 1);
    ki.push(V("s", function(a, b) {
        return Xh(b, function(c) {
            var d = Q(a)
              , e = d.C
              , f = F("dSync", d.D);
            O(b);
            if (e("dSync", !1))
                f(1);
            else
                return f(!0),
                gn(a, c, {
                    fb: b,
                    je: "s",
                    Qd: "ds",
                    wb: f,
                    Rf: function(g, h, k) {
                        var l = g.Ga;
                        g = g.host;
                        if (J(l, "settings"))
                            return md(hf("ds.e"));
                        h = h(Ad) - k;
                        k = g[1];
                        g = {};
                        l = Le((g.di = l,
                        g.dit = h,
                        g.dip = k,
                        g));
                        h = {};
                        h = (h["page-url"] = T(a).href,
                        h);
                        return Sh(a, "S", xm)({
                            K: l,
                            H: h
                        }, xm).then(F(10, f), U(a, "ds.rs"))
                    }
                })
        })
    }));
    Rh["8"] = Oe;
    Dh.br = {
        check: oh,
        id: 0
    };
    Nh["8"] = ["br"];
    ki.push(V("p.us", function(a, b) {
        return Xh(b, function(c) {
            if (J(c, "settings.sbp"))
                return gn(a, c, {
                    fb: b,
                    je: "8",
                    Qd: "cs"
                })
        })
    }));
    li.push(ap);
    Ve({
        zb: {
            da: "webvisor",
            Va: jb
        },
        Ig: {
            da: "disableFormAnalytics",
            Va: jb
        }
    });
    lh("4", Wg(Zo), 1);
    Rh["4"] = uo;
    Nh["4"] = ["f", "x", "i"];
    li.push(xq);
    lh("W", Wg(Zo), 1);
    af("wv", function(a, b) {
        return {
            R: function(c, d) {
                c.K.Sb("we", hb(b.zb));
                vo(a, b, c, "rn");
                d()
            }
        }
    }, 1);
    Nh.W = ["f", "x"];
    Rh.W = uo;
    li.push($r);
    ki.push(as);
    Ve({
        zb: {
            da: "webvisor"
        }
    });
    Ve({
        li: {
            da: "trustedDomains"
        },
        cc: {
            da: "childIframe",
            Va: jb
        }
    });
    ki.push(ls);
    ki.push(xs);
    ki.push(Ts);
    Nh["6"] = ["f", "x"];
    Rh["6"] = Oe;
    ki.push(Ws);
    ki.push(zm);
    mi.push(function(a, b) {
        b.informer = Ys(a)
    });
    ih(Zs, 6);
    lh("1", Zs, 6);
    lh("adb");
    lh("n", Zs, 4);
    Nh.adb = Jh;
    Rh.adb = bf;
    ji.push(bt);
    Nh["5"] = Hh;
    Rh["5"] = df;
    kh["5"] = mb(H(wb, rb([ff, ch]), Da), gh);
    ki.push(ct);
    lh("5", Uk, 20);
    ih(et, 7);
    lh("n", et, 6);
    li.push(ft);
    Rh.d = df;
    lh("d", Wg(["hid", "u", "v", "vf"]), 1);
    Nh.d = Jh;
    lh("n", function(a, b) {
        return {
            Ca: function(c, d) {
                if (!c.M || !c.M.force) {
                    var e = b.id === Mc.gg ? 1 : .002
                      , f = .002;
                    f = void 0 === f ? 1 : f;
                    e = void 0 === e ? 1 : e;
                    var g = vd(a);
                    if (g && A(g.getEntriesByType)) {
                        f = Math.random() > f;
                        var h = Math.random() > e;
                        if (!f || !h) {
                            var k = g.getEntriesByType("resource")
                              , l = {}
                              , m = {};
                            g = {};
                            var p = Im();
                            e = T(a).href;
                            for (var r = 0; r < k.length; r += 1) {
                                var t = k[r]
                                  , v = q(t.name.replace(Gm, "").split("?")).next().value
                                  , z = Zj(v)
                                  , P = {};
                                P = (P.dns = Math.round(t.domainLookupEnd - t.domainLookupStart),
                                P.tcp = Math.round(t.connectEnd - t.connectStart),
                                P.duration = Math.round(t.duration),
                                P.response = Math.round(t.responseEnd - t.requestStart),
                                P);
                                if ("script" === t.initiatorType && !f) {
                                    var W = {};
                                    m[v] = N(P, (W.name = t.name,
                                    W.decodedBodySize = t.decodedBodySize,
                                    W.transferSize = Math.round(t.transferSize),
                                    W))
                                }
                                !Hm[z] && !p[z] || l[v] || h || (t = {},
                                l[v] = N(P, (t.pages = e,
                                t)))
                            }
                            bc(l).length && (g.timings8 = l);
                            bc(m).length && (g.scripts = m);
                            bc(g).length && (f = {},
                            h = {},
                            Sh(a, "d", b)({
                                K: Le((f.ar = 1,
                                f.pv = 1,
                                f)),
                                N: {
                                    ba: yf(a, g) || void 0
                                },
                                H: (h["page-url"] = e,
                                h)
                            }, {
                                id: Mc.jg,
                                ca: "0"
                            })["catch"](U(a, "r.tim.ng2")))
                        }
                    }
                }
                d()
            }
        }
    }, 7);
    Nh.ci = ["x"];
    Rh.ci = Oe;
    li.push(V("p.sci", function(a, b) {
        return Xh(b, E([a, b], it))["catch"](U(a, "ins.cs"))
    }));
    li.push(Fl);
    ih(Gt, 8);
    lh("f", Gt, 3);
    lh("n", Gt, 5);
    ji.push(function() {
        var a = [Lt, It, Ht, jt, Ot, ot, kt, mt, Rt, St, Nt];
        return V("fip", function(b) {
            if (!jl(b) || Cb(b)) {
                var c = Ff(b);
                if (!c.C("fip")) {
                    var d = H(Jb(H(function(e, f) {
                        return V("fip." + f, e)(b)
                    }, D(El, null))), pd("-"))(a);
                    c.D("fip", d)
                }
            }
        })
    }());
    ih(function(a) {
        return {
            R: function(b, c) {
                var d = b.K
                  , e = Ff(a).C("fip");
                e && d && (d.D("fip", e),
                of(b, "fip", ib(e)));
                c()
            }
        }
    }, 9);
    lh("h", function(a) {
        return {
            Ca: function(b, c) {
                var d = b.Uh;
                ah(b) && d && Q(a).D("isEU", J(d, "settings.eu"));
                c()
            }
        }
    }, 3);
    ji.push(Yr);
    li.push($t);
    ki.push(cu);
    Ve({
        vi: {
            da: "yaDisableGDPR"
        },
        wi: {
            da: "yaGDPRLang"
        }
    });
    hh.push(function(a, b) {
        return {
            R: E([a, b], Du)
        }
    });
    pe.push("gdpr");
    pe.push("gdpr_popup");
    qe.push(function(a, b) {
        var c = Xi(a);
        c = qu(c);
        if (mb(rb(pu), c).length)
            return !0;
        c = b(a, "gdpr");
        return K(c, [iu, ku])
    });
    hh.push(function(a) {
        return {
            R: function(b, c) {
                var d = b.Ja || {}, e;
                (e = J(a, "document.referrer")) ? (e = rh(a, e).host,
                e = de(e),
                e = Gu + "." + (e || Fu)) : e = Kc;
                b.Ja = N(d, {
                    bf: [e]
                });
                c()
            }
        }
    });
    ih(Xu, 5);
    lh("1", Xu, 6);
    Nh.c = Jh;
    Rh.c = Oe;
    lh("1", dv, 7);
    ih(dv, 7);
    ni.push(V("hcp", ev));
    li.push(V("p.ot", gv));
    li.push(Yd("cta", jv, !0));
    lh("n", function(a) {
        var b = Q(a);
        return {
            R: function(c, d) {
                var e = c.M || {}
                  , f = b.C("cta")
                  , g = b.C("cta.e");
                if (f || g) {
                    e.O || (e.O = {});
                    e.O.__ym || (e.O.__ym = {});
                    var h = {};
                    f ? (f = M(function(k) {
                        var l = J(k, "topic");
                        k = J(k, "version");
                        var m = {};
                        return m.topic = l,
                        m.version = k,
                        m
                    }, f),
                    h.ct = f) : g && (h["ct.e"] = g);
                    N(e.O.__ym, h);
                    c.M = N(c.M || {}, e)
                }
                d()
            }
        }
    }, 7);
    lh("n", Ni, 8);
    ki.push(yv);
    lh("g", function(a, b) {
        return {
            R: function(c, d) {
                var e = c.H;
                if (e && e["page-url"]) {
                    var f = e["page-url"];
                    Kv(f) || Lv(f) ? Xh(b, function(g) {
                        var h = J(g, "settings.goal_values");
                        if (h) {
                            var k = (g = rh(a, f).query) ? Vd(g) : void 0;
                            if (k) {
                                g = c.M || {};
                                g.O || (g.O = {});
                                g.O.__ym || (g.O.__ym = {});
                                var l = Kv(f) ? Hv : Iv;
                                h = Nv(h);
                                h = Jv(a, k, h, l);
                                0 !== h.length && (k = {},
                                h = (k.cgd = h[0],
                                k.cmg = h,
                                k),
                                N(g.O.__ym, h),
                                c.M = N(c.M || {}, g))
                            }
                        }
                        d()
                    })["catch"](H(ra(d), U(a, "a.g.v"))) : d()
                } else
                    d()
            }
        }
    }, -2);
    ni.push(V("cdl", function(a) {
        var b = Q(a).ra;
        if (a = J(a, "navigator.cookieDeprecationLabel"))
            try {
                a.getValue().then(F("cdl", b), E(["cdl", "e"], b))
            } catch (c) {
                b("cdl", "d")
            }
        else
            b("cdl", "na")
    }));
    Ve({
        Jg: {
            da: "disableYtm",
            Va: jb
        }
    });
    Nh.ytm = Kh;
    ki.push(V("p.ytm", function(a, b) {
        if (!b.Jg) {
            var c = !1
              , d = function() {
                c = !0
            }
              , e = []
              , f = function(h, k) {
                e.push([h, k])
            };
            Xh(b, function(h) {
                if (!c && J(h, "settings.aytm")) {
                    cw(a);
                    h = nx(a);
                    var k = Oh(a, "ytm")
                      , l = {};
                    return Oe(a, k)({
                        N: {
                            ea: ["ytm"],
                            cb: !0
                        },
                        H: h ? (l.nonce = h,
                        l) : void 0
                    }, [Mc.La + "//" + Kc + "/ytm-config/" + b.id]).then(function(m) {
                        m = m.Ga;
                        if (!c && Ra(m)) {
                            var p = mx(a, "" + b.id)
                              , r = gx(a, m, p).dispatchEvent;
                            f = p.lg;
                            M(function(t) {
                                var v = q(t);
                                t = v.next().value;
                                v = v.next().value;
                                return f(t, v)
                            }, e);
                            xb(e);
                            r(Qv(a, "ytm.init"));
                            d = Zv(a, r, m)
                        }
                    })
                }
            })["catch"](U(a, "ytm.s"));
            var g = {};
            return g.u = function() {
                return d()
            }
            ,
            g.policy = function(h, k) {
                return f(h, k)
            }
            ,
            g
        }
    }));
    li.push(ox);
    Nh.pis = Lh;
    Rh.pis = Oe;
    li.push(V("p.sci", function(a, b) {
        return Xh(b, function(c) {
            var d = J(c, "settings.pis");
            if (d && !Sm(c)) {
                c = Q(a);
                var e = c.C;
                c = c.D;
                e = e("pis");
                if (C(e))
                    return e = Sh(a, "pis"),
                    c("pis", "0"),
                    e({
                        N: {
                            ea: ["pis"]
                        }
                    }, [d]).then(E(["pis", "1"], c), ra(E(["pis", "a"], c)))
            }
        })["catch"](U(a, "pis"))
    }));
    Nh.pic = Kh;
    Rh.pic = Oe;
    li.push(px);
    ni.push(qx);
    ki.push(rx);
    ki.push(function(a, b) {
        var c = tx(a)
          , d = O(b)
          , e = c[d];
        e || (e = {},
        c[d] = e);
        e.ph = !0;
        if (c = e.Mf)
            d = wx(a),
            M(d, c)
    });
    li.unshift(function(a, b) {
        Xh(b, function(c) {
            var d = Be(a)
              , e = J(c, "settings.sm")
              , f = Nk(a);
            (d || e || f.id) && Lu(a, "tag_debug", b, c)
        })
    });
    function Ix(a, b, c, d) {
        var e = this;
        return U(window, "c.i", function() {
            function f(z) {
                (z = lk(k, m, "", z)(k, m)) && (A(z.then) ? z.then(g) : g(z));
                return z
            }
            function g(z) {
                z && (A(z) ? p.push(z) : Ra(z) && M(function(P) {
                    var W = q(P);
                    P = W.next().value;
                    W = W.next().value;
                    A(W) && ("u" === P ? p.push(W) : h(W, P))
                }, ac(z)))
            }
            function h(z, P, W) {
                e[P] = Ax(k, m, W || r, P, z)
            }
            var k = window;
            (!k || isNaN(a) && !a) && jf();
            var l = Oc(a, b, c, d)
              , m = Pc(l);
            Ku(m).Qh = l;
            Ki(m, m.O || {});
            var p = []
              , r = [zx, lk, yx];
            r.unshift(hi);
            var t = M(w, li);
            l = O(m);
            m.id || md(jd("Invalid Metrika id: " + m.id, !0));
            var v = Bx.C("counters", {});
            if (v[l])
                return t = {},
                $h(k, l, "dc", (t.key = l,
                t)),
                v[l];
            v[l] = e;
            Bx.D("counters", v);
            Bx.ra("counter", e);
            M(function(z) {
                z(k, m)
            }, ii);
            M(f, ji);
            f(ci);
            h(xx(k, m, p), "destruct", [zx, yx]);
            bi(k, E([k, t, f, 1, "a.i"], Dq));
            M(f, ki);
            l = {};
            Fe(k, (l.counterKey = O(m),
            l.name = "counter",
            l.data = We(m),
            l))
        })()
    }
    M(pa(Qe)(window), ni);
    if (window.Ya && Ix) {
        var Jx = Mc.ec;
        window.Ya[Jx] = Ix;
        fi(window);
        M(H($a([window, window.Ya[Jx]]), Qe), mi)
    }
    (function(a) {
        var b = J(a, "ym");
        if (b) {
            var c = J(b, "a");
            c || (b.a = [],
            c = b.a);
            var d = wx(a);
            Yi(a, c, function(e) {
                e.oa.F(d)
            }, !0)
        }
    }
    )(window);
}
).call(this);
