/**
 * Created by dg on 2016/7/29.
 */
module.exports = Code;
function Code() {
    
}
Code.firdecode = function (c) {
    c = c.replace(/\(|\)|\@/g, function (d) {
        switch (d) {
            case "(":
                return "+";
            case ")":
                return "/";
            case "@":
                return "="
        }
    });
    c = Code.base64.decode(c);
    c = Code.inflate(c, 6);
    // console.log(c);
    return c
};
Code.base64 = (function () {
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var f = function () {
        this.str = "";
        this.length = 0;
        this.append = function (g) {
            this.str += g;
            this.length += g.length
        };
        this.prepend = function (g) {
            this.str = g + this.str;
            this.length += g.length
        };
        this.toString = function () {
            return this.str
        }
    };

    function d(j) {
        var g = new f();
        var q, o, m;
        var p, n, l, k;
        var h = 0;
        j = j.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (h < j.length) {
            p = c.indexOf(j.charAt(h++));
            n = c.indexOf(j.charAt(h++));
            l = c.indexOf(j.charAt(h++));
            k = c.indexOf(j.charAt(h++));
            q = (p << 2) | (n >> 4);
            o = ((n & 15) << 4) | (l >> 2);
            m = ((l & 3) << 6) | k;
            g.append(String.fromCharCode(q));
            if (l != 64) {
                g.append(String.fromCharCode(o))
            }
            if (k != 64) {
                g.append(String.fromCharCode(m))
            }
        }
        // console.log(g.toString());
        return g.toString()

    }

    return {
        decode: d
    }
})();
Code.inflate = (function () {
    var p = 32768;
    var x = 0;
    var J = 1;
    var k = 2;
    var T = 9;
    var j = 6;
    var u = 32768;
    var c = 64;
    var D;
    var m;
    var R = null;
    var d;
    var N, E;
    var t;
    var s;
    var V;
    var O;
    var U;
    var z;
    var o, q;
    var h, l;
    var C;
    var G;
    var Q = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
    var e = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
    var M = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
    var K = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
    var A = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
    var r = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
    var y = function () {
        this.next = null;
        this.list = null
    };
    var I = function () {
        this.e = 0;
        this.b = 0;
        this.n = 0;
        this.t = null
    };
    var n = function (ay, am, ah, aw, av, ar) {
        this.BMAX = 16;
        this.N_MAX = 288;
        this.status = 0;
        this.root = null;
        this.m = 0;
        var az;
        var ax = new Array(this.BMAX + 1);
        var W;
        var au;
        var at;
        var aq;
        var ap;
        var ao;
        var an;
        var X = new Array(this.BMAX + 1);
        var ak;
        var Y;
        var aj;
        var ai = new I();
        var ag = new Array(this.BMAX);
        var af = new Array(this.N_MAX);
        var ae;
        var ac = new Array(this.BMAX + 1);
        var ad;
        var ab;
        var aa;
        var al;
        var Z;
        Z = this.root = null;
        for (ap = 0; ap < ax.length; ap++) {
            ax[ap] = 0
        }
        for (ap = 0; ap < X.length; ap++) {
            X[ap] = 0
        }
        for (ap = 0; ap < ag.length; ap++) {
            ag[ap] = null
        }
        for (ap = 0; ap < af.length; ap++) {
            af[ap] = 0
        }
        for (ap = 0; ap < ac.length; ap++) {
            ac[ap] = 0
        }
        W = am > 256 ? ay[256] : this.BMAX;
        ak = ay;
        Y = 0;
        ap = am;
        do {
            ax[ak[Y]]++;
            Y++
        } while (--ap > 0);
        if (ax[0] == am) {
            this.root = null;
            this.m = 0;
            this.status = 0;
            return
        }
        for (ao = 1; ao <= this.BMAX; ao++) {
            if (ax[ao] != 0) {
                break
            }
        }
        an = ao;
        if (ar < ao) {
            ar = ao
        }
        for (ap = this.BMAX; ap != 0; ap--) {
            if (ax[ap] != 0) {
                break
            }
        }
        at = ap;
        if (ar > ap) {
            ar = ap
        }
        for (ab = 1 << ao; ao < ap; ao++, ab <<= 1) {
            if ((ab -= ax[ao]) < 0) {
                this.status = 2;
                this.m = ar;
                return
            }
        }
        if ((ab -= ax[ap]) < 0) {
            this.status = 2;
            this.m = ar;
            return
        }
        ax[ap] += ab;
        ac[1] = ao = 0;
        ak = ax;
        Y = 1;
        ad = 2;
        while (--ap > 0) {
            ac[ad++] = (ao += ak[Y++])
        }
        ak = ay;
        Y = 0;
        ap = 0;
        do {
            if ((ao = ak[Y++]) != 0) {
                af[ac[ao]++] = ap
            }
        } while (++ap < am);
        am = ac[at];
        ac[0] = ap = 0;
        ak = af;
        Y = 0;
        aq = -1;
        ae = X[0] = 0;
        aj = null;
        aa = 0;
        for (; an <= at; an++) {
            az = ax[an];
            while (az-- > 0) {
                while (an > ae + X[1 + aq]) {
                    ae += X[1 + aq];
                    aq++;
                    aa = (aa = at - ae) > ar ? ar : aa;
                    if ((au = 1 << (ao = an - ae)) > az + 1) {
                        au -= az + 1;
                        ad = an;
                        while (++ao < aa) {
                            if ((au <<= 1) <= ax[++ad]) {
                                break
                            }
                            au -= ax[ad]
                        }
                    }
                    if (ae + ao > W && ae < W) {
                        ao = W - ae
                    }
                    aa = 1 << ao;
                    X[1 + aq] = ao;
                    aj = new Array(aa);
                    for (al = 0; al < aa; al++) {
                        aj[al] = new I()
                    }
                    if (Z == null) {
                        Z = this.root = new y()
                    } else {
                        Z = Z.next = new y()
                    }
                    Z.next = null;
                    Z.list = aj;
                    ag[aq] = aj;
                    if (aq > 0) {
                        ac[aq] = ap;
                        ai.b = X[aq];
                        ai.e = 16 + ao;
                        ai.t = aj;
                        ao = (ap & ((1 << ae) - 1)) >> (ae - X[aq]);
                        ag[aq - 1][ao].e = ai.e;
                        ag[aq - 1][ao].b = ai.b;
                        ag[aq - 1][ao].n = ai.n;
                        ag[aq - 1][ao].t = ai.t
                    }
                }
                ai.b = an - ae;
                if (Y >= am) {
                    ai.e = 99
                } else {
                    if (ak[Y] < ah) {
                        ai.e = (ak[Y] < 256 ? 16 : 15);
                        ai.n = ak[Y++]
                    } else {
                        ai.e = av[ak[Y] - ah];
                        ai.n = aw[ak[Y++] - ah]
                    }
                }
                au = 1 << (an - ae);
                for (ao = ap >> ae; ao < aa; ao += au) {
                    aj[ao].e = ai.e;
                    aj[ao].b = ai.b;
                    aj[ao].n = ai.n;
                    aj[ao].t = ai.t
                }
                for (ao = 1 << (an - 1);
                     (ap & ao) != 0; ao >>= 1) {
                    ap ^= ao
                }
                ap ^= ao;
                while ((ap & ((1 << ae) - 1)) != ac[aq]) {
                    ae -= X[aq];
                    aq--
                }
            }
        }
        this.m = X[1];
        this.status = ((ab != 0 && at != 1) ? 1 : 0)
    };
    var g = function () {
        if (C.length == G) {
            return -1
        }
        return C.charCodeAt(G++) & 255
    };
    var S = function (W) {
        while (s < W) {
            t |= g() << s;
            s += 8
        }
    };
    var v = function (W) {
        return t & Q[W]
    };
    var f = function (W) {
        t >>= W;
        s -= W
    };
    var i = function (ab, Z, X) {
        var Y;
        var W;
        var aa;
        if (X == 0) {
            return 0
        }
        aa = 0;
        for (; ;) {
            S(h);
            W = o.list[v(h)];
            Y = W.e;
            while (Y > 16) {
                if (Y == 99) {
                    return -1
                }
                f(W.b);
                Y -= 16;
                S(Y);
                W = W.t[v(Y)];
                Y = W.e
            }
            f(W.b);
            if (Y == 16) {
                m &= p - 1;
                ab[Z + aa++] = D[m++] = W.n;
                if (aa == X) {
                    return X
                }
                continue
            }
            if (Y == 15) {
                break
            }
            S(Y);
            U = W.n + v(Y);
            f(Y);
            S(l);
            W = q.list[v(l)];
            Y = W.e;
            while (Y > 16) {
                if (Y == 99) {
                    return -1
                }
                f(W.b);
                Y -= 16;
                S(Y);
                W = W.t[v(Y)];
                Y = W.e
            }
            f(W.b);
            S(Y);
            z = m - W.n - v(Y);
            f(Y);
            while (U > 0 && aa < X) {
                U--;
                z &= p - 1;
                m &= p - 1;
                ab[Z + aa++] = D[m++] = D[z++]
            }
            if (aa == X) {
                return X
            }
        }
        V = -1;
        return aa
    };
    var w = function (Z, X, W) {
        var Y;
        Y = s & 7;
        f(Y);
        S(16);
        Y = v(16);
        f(16);
        S(16);
        if (Y != ((~t) & 65535)) {
            return -1
        }
        f(16);
        U = Y;
        Y = 0;
        while (U > 0 && Y < W) {
            U--;
            m &= p - 1;
            S(8);
            Z[X + Y++] = D[m++] = v(8);
            f(8)
        }
        if (U == 0) {
            V = -1
        }
        return Y
    };
    var L = function (ab, aa, Y) {
        if (R == null) {
            var X;
            var W = new Array(288);
            var Z;
            for (X = 0; X < 144; X++) {
                W[X] = 8
            }
            for (; X < 256; X++) {
                W[X] = 9
            }
            for (; X < 280; X++) {
                W[X] = 7
            }
            for (; X < 288; X++) {
                W[X] = 8
            }
            N = 7;
            Z = new n(W, 288, 257, e, M, N);
            if (Z.status != 0) {
                alert("HufBuild error: " + Z.status);
                return -1
            }
            R = Z.root;
            N = Z.m;
            for (X = 0; X < 30; X++) {
                W[X] = 5
            }
            zip_fixed_bd = 5;
            Z = new n(W, 30, 0, K, A, zip_fixed_bd);
            if (Z.status > 1) {
                R = null;
                alert("HufBuild error: " + Z.status);
                return -1
            }
            d = Z.root;
            zip_fixed_bd = Z.m
        }
        o = R;
        q = d;
        h = N;
        l = zip_fixed_bd;
        return i(ab, aa, Y)
    };
    var a = {};
    var B = function (ag, Y, ai) {
        var ac;
        var ab;
        var Z;
        var X;
        var ah;
        var ae;
        var W;
        var aa;
        var af = new Array(286 + 30);
        var ad;
        for (ac = 0; ac < af.length; ac++) {
            af[ac] = 0
        }
        S(5);
        W = 257 + v(5);
        f(5);
        S(5);
        aa = 1 + v(5);
        f(5);
        S(4);
        ae = 4 + v(4);
        f(4);
        if (W > 286 || aa > 30) {
            return -1
        }
        for (ab = 0; ab < ae; ab++) {
            S(3);
            af[r[ab]] = v(3);
            f(3)
        }
        for (; ab < 19; ab++) {
            af[r[ab]] = 0
        }
        h = 7;
        ad = new n(af, 19, 19, null, null, h);
        if (ad.status != 0) {
            return -1
        }
        o = ad.root;
        h = ad.m;
        X = W + aa;
        ac = Z = 0;
        while (ac < X) {
            S(h);
            ah = o.list[v(h)];
            ab = ah.b;
            f(ab);
            ab = ah.n;
            if (ab < 16) {
                af[ac++] = Z = ab
            } else {
                if (ab == 16) {
                    S(2);
                    ab = 3 + v(2);
                    f(2);
                    if (ac + ab > X) {
                        return -1
                    }
                    while (ab-- > 0) {
                        af[ac++] = Z
                    }
                } else {
                    if (ab == 17) {
                        S(3);
                        ab = 3 + v(3);
                        f(3);
                        if (ac + ab > X) {
                            return -1
                        }
                        while (ab-- > 0) {
                            af[ac++] = 0
                        }
                        Z = 0
                    } else {
                        S(7);
                        ab = 11 + v(7);
                        f(7);
                        if (ac + ab > X) {
                            return -1
                        }
                        while (ab-- > 0) {
                            af[ac++] = 0
                        }
                        Z = 0
                    }
                }
            }
        }
        h = T;
        ad = new n(af, W, 257, e, M, h);
        if (h == 0) {
            ad.status = 1
        }
        if (ad.status != 0) {
            if (ad.status == 1) {
            }
            return -1
        }
        o = ad.root;
        h = ad.m;
        for (ac = 0; ac < aa; ac++) {
            af[ac] = af[ac + W]
        }
        l = j;
        ad = new n(af, aa, 0, K, A, l);
        q = ad.root;
        l = ad.m;
        a.base64 = (function () {
            var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var f = function () {
                this.str = "";
                this.length = 0;
                this.append = function (g) {
                    this.str += g;
                    this.length += g.length
                };
                this.prepend = function (g) {
                    this.str = g + this.str;
                    this.length += g.length
                };
                this.toString = function () {
                    return this.str
                }
            };

            function d(j) {
                var g = new f();
                var q, o, m;
                var p, n, l, k;
                var h = 0;
                j = j.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (h < j.length) {
                    p = c.indexOf(j.charAt(h++));
                    n = c.indexOf(j.charAt(h++));
                    l = c.indexOf(j.charAt(h++));
                    k = c.indexOf(j.charAt(h++));
                    q = (p << 2) | (n >> 4);
                    o = ((n & 15) << 4) | (l >> 2);
                    m = ((l & 3) << 6) | k;
                    g.append(String.fromCharCode(q));
                    if (l != 64) {
                        g.append(String.fromCharCode(o))
                    }
                    if (k != 64) {
                        g.append(String.fromCharCode(m))
                    }
                }
                // console.log(g.toString());
                return g.toString()

            }

            return {
                decode: d
            }
        })();
        inflate = (function () {
            var p = 32768;
            var x = 0;
            var J = 1;
            var k = 2;
            var T = 9;
            var j = 6;
            var u = 32768;
            var c = 64;
            var D;
            var m;
            var R = null;
            var d;
            var N, E;
            var t;
            var s;
            var V;
            var O;
            var U;
            var z;
            var o, q;
            var h, l;
            var C;
            var G;
            var Q = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
            var e = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
            var M = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
            var K = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
            var A = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
            var r = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
            var y = function () {
                this.next = null;
                this.list = null
            };
            var I = function () {
                this.e = 0;
                this.b = 0;
                this.n = 0;
                this.t = null
            };
            var n = function (ay, am, ah, aw, av, ar) {
                this.BMAX = 16;
                this.N_MAX = 288;
                this.status = 0;
                this.root = null;
                this.m = 0;
                var az;
                var ax = new Array(this.BMAX + 1);
                var W;
                var au;
                var at;
                var aq;
                var ap;
                var ao;
                var an;
                var X = new Array(this.BMAX + 1);
                var ak;
                var Y;
                var aj;
                var ai = new I();
                var ag = new Array(this.BMAX);
                var af = new Array(this.N_MAX);
                var ae;
                var ac = new Array(this.BMAX + 1);
                var ad;
                var ab;
                var aa;
                var al;
                var Z;
                Z = this.root = null;
                for (ap = 0; ap < ax.length; ap++) {
                    ax[ap] = 0
                }
                for (ap = 0; ap < X.length; ap++) {
                    X[ap] = 0
                }
                for (ap = 0; ap < ag.length; ap++) {
                    ag[ap] = null
                }
                for (ap = 0; ap < af.length; ap++) {
                    af[ap] = 0
                }
                for (ap = 0; ap < ac.length; ap++) {
                    ac[ap] = 0
                }
                W = am > 256 ? ay[256] : this.BMAX;
                ak = ay;
                Y = 0;
                ap = am;
                do {
                    ax[ak[Y]]++;
                    Y++
                } while (--ap > 0);
                if (ax[0] == am) {
                    this.root = null;
                    this.m = 0;
                    this.status = 0;
                    return
                }
                for (ao = 1; ao <= this.BMAX; ao++) {
                    if (ax[ao] != 0) {
                        break
                    }
                }
                an = ao;
                if (ar < ao) {
                    ar = ao
                }
                for (ap = this.BMAX; ap != 0; ap--) {
                    if (ax[ap] != 0) {
                        break
                    }
                }
                at = ap;
                if (ar > ap) {
                    ar = ap
                }
                for (ab = 1 << ao; ao < ap; ao++, ab <<= 1) {
                    if ((ab -= ax[ao]) < 0) {
                        this.status = 2;
                        this.m = ar;
                        return
                    }
                }
                if ((ab -= ax[ap]) < 0) {
                    this.status = 2;
                    this.m = ar;
                    return
                }
                ax[ap] += ab;
                ac[1] = ao = 0;
                ak = ax;
                Y = 1;
                ad = 2;
                while (--ap > 0) {
                    ac[ad++] = (ao += ak[Y++])
                }
                ak = ay;
                Y = 0;
                ap = 0;
                do {
                    if ((ao = ak[Y++]) != 0) {
                        af[ac[ao]++] = ap
                    }
                } while (++ap < am);
                am = ac[at];
                ac[0] = ap = 0;
                ak = af;
                Y = 0;
                aq = -1;
                ae = X[0] = 0;
                aj = null;
                aa = 0;
                for (; an <= at; an++) {
                    az = ax[an];
                    while (az-- > 0) {
                        while (an > ae + X[1 + aq]) {
                            ae += X[1 + aq];
                            aq++;
                            aa = (aa = at - ae) > ar ? ar : aa;
                            if ((au = 1 << (ao = an - ae)) > az + 1) {
                                au -= az + 1;
                                ad = an;
                                while (++ao < aa) {
                                    if ((au <<= 1) <= ax[++ad]) {
                                        break
                                    }
                                    au -= ax[ad]
                                }
                            }
                            if (ae + ao > W && ae < W) {
                                ao = W - ae
                            }
                            aa = 1 << ao;
                            X[1 + aq] = ao;
                            aj = new Array(aa);
                            for (al = 0; al < aa; al++) {
                                aj[al] = new I()
                            }
                            if (Z == null) {
                                Z = this.root = new y()
                            } else {
                                Z = Z.next = new y()
                            }
                            Z.next = null;
                            Z.list = aj;
                            ag[aq] = aj;
                            if (aq > 0) {
                                ac[aq] = ap;
                                ai.b = X[aq];
                                ai.e = 16 + ao;
                                ai.t = aj;
                                ao = (ap & ((1 << ae) - 1)) >> (ae - X[aq]);
                                ag[aq - 1][ao].e = ai.e;
                                ag[aq - 1][ao].b = ai.b;
                                ag[aq - 1][ao].n = ai.n;
                                ag[aq - 1][ao].t = ai.t
                            }
                        }
                        ai.b = an - ae;
                        if (Y >= am) {
                            ai.e = 99
                        } else {
                            if (ak[Y] < ah) {
                                ai.e = (ak[Y] < 256 ? 16 : 15);
                                ai.n = ak[Y++]
                            } else {
                                ai.e = av[ak[Y] - ah];
                                ai.n = aw[ak[Y++] - ah]
                            }
                        }
                        au = 1 << (an - ae);
                        for (ao = ap >> ae; ao < aa; ao += au) {
                            aj[ao].e = ai.e;
                            aj[ao].b = ai.b;
                            aj[ao].n = ai.n;
                            aj[ao].t = ai.t
                        }
                        for (ao = 1 << (an - 1);
                             (ap & ao) != 0; ao >>= 1) {
                            ap ^= ao
                        }
                        ap ^= ao;
                        while ((ap & ((1 << ae) - 1)) != ac[aq]) {
                            ae -= X[aq];
                            aq--
                        }
                    }
                }
                this.m = X[1];
                this.status = ((ab != 0 && at != 1) ? 1 : 0)
            };
            var g = function () {
                if (C.length == G) {
                    return -1
                }
                return C.charCodeAt(G++) & 255
            };
            var S = function (W) {
                while (s < W) {
                    t |= g() << s;
                    s += 8
                }
            };
            var v = function (W) {
                return t & Q[W]
            };
            var f = function (W) {
                t >>= W;
                s -= W
            };
            var i = function (ab, Z, X) {
                var Y;
                var W;
                var aa;
                if (X == 0) {
                    return 0
                }
                aa = 0;
                for (; ;) {
                    S(h);
                    W = o.list[v(h)];
                    Y = W.e;
                    while (Y > 16) {
                        if (Y == 99) {
                            return -1
                        }
                        f(W.b);
                        Y -= 16;
                        S(Y);
                        W = W.t[v(Y)];
                        Y = W.e
                    }
                    f(W.b);
                    if (Y == 16) {
                        m &= p - 1;
                        ab[Z + aa++] = D[m++] = W.n;
                        if (aa == X) {
                            return X
                        }
                        continue
                    }
                    if (Y == 15) {
                        break
                    }
                    S(Y);
                    U = W.n + v(Y);
                    f(Y);
                    S(l);
                    W = q.list[v(l)];
                    Y = W.e;
                    while (Y > 16) {
                        if (Y == 99) {
                            return -1
                        }
                        f(W.b);
                        Y -= 16;
                        S(Y);
                        W = W.t[v(Y)];
                        Y = W.e
                    }
                    f(W.b);
                    S(Y);
                    z = m - W.n - v(Y);
                    f(Y);
                    while (U > 0 && aa < X) {
                        U--;
                        z &= p - 1;
                        m &= p - 1;
                        ab[Z + aa++] = D[m++] = D[z++]
                    }
                    if (aa == X) {
                        return X
                    }
                }
                V = -1;
                return aa
            };
            var w = function (Z, X, W) {
                var Y;
                Y = s & 7;
                f(Y);
                S(16);
                Y = v(16);
                f(16);
                S(16);
                if (Y != ((~t) & 65535)) {
                    return -1
                }
                f(16);
                U = Y;
                Y = 0;
                while (U > 0 && Y < W) {
                    U--;
                    m &= p - 1;
                    S(8);
                    Z[X + Y++] = D[m++] = v(8);
                    f(8)
                }
                if (U == 0) {
                    V = -1
                }
                return Y
            };
            var L = function (ab, aa, Y) {
                if (R == null) {
                    var X;
                    var W = new Array(288);
                    var Z;
                    for (X = 0; X < 144; X++) {
                        W[X] = 8
                    }
                    for (; X < 256; X++) {
                        W[X] = 9
                    }
                    for (; X < 280; X++) {
                        W[X] = 7
                    }
                    for (; X < 288; X++) {
                        W[X] = 8
                    }
                    N = 7;
                    Z = new n(W, 288, 257, e, M, N);
                    if (Z.status != 0) {
                        alert("HufBuild error: " + Z.status);
                        return -1
                    }
                    R = Z.root;
                    N = Z.m;
                    for (X = 0; X < 30; X++) {
                        W[X] = 5
                    }
                    zip_fixed_bd = 5;
                    Z = new n(W, 30, 0, K, A, zip_fixed_bd);
                    if (Z.status > 1) {
                        R = null;
                        alert("HufBuild error: " + Z.status);
                        return -1
                    }
                    d = Z.root;
                    zip_fixed_bd = Z.m
                }
                o = R;
                q = d;
                h = N;
                l = zip_fixed_bd;
                return i(ab, aa, Y)
            };
            var B = function (ag, Y, ai) {
                var ac;
                var ab;
                var Z;
                var X;
                var ah;
                var ae;
                var W;
                var aa;
                var af = new Array(286 + 30);
                var ad;
                for (ac = 0; ac < af.length; ac++) {
                    af[ac] = 0
                }
                S(5);
                W = 257 + v(5);
                f(5);
                S(5);
                aa = 1 + v(5);
                f(5);
                S(4);
                ae = 4 + v(4);
                f(4);
                if (W > 286 || aa > 30) {
                    return -1
                }
                for (ab = 0; ab < ae; ab++) {
                    S(3);
                    af[r[ab]] = v(3);
                    f(3)
                }
                for (; ab < 19; ab++) {
                    af[r[ab]] = 0
                }
                h = 7;
                ad = new n(af, 19, 19, null, null, h);
                if (ad.status != 0) {
                    return -1
                }
                o = ad.root;
                h = ad.m;
                X = W + aa;
                ac = Z = 0;
                while (ac < X) {
                    S(h);
                    ah = o.list[v(h)];
                    ab = ah.b;
                    f(ab);
                    ab = ah.n;
                    if (ab < 16) {
                        af[ac++] = Z = ab
                    } else {
                        if (ab == 16) {
                            S(2);
                            ab = 3 + v(2);
                            f(2);
                            if (ac + ab > X) {
                                return -1
                            }
                            while (ab-- > 0) {
                                af[ac++] = Z
                            }
                        } else {
                            if (ab == 17) {
                                S(3);
                                ab = 3 + v(3);
                                f(3);
                                if (ac + ab > X) {
                                    return -1
                                }
                                while (ab-- > 0) {
                                    af[ac++] = 0
                                }
                                Z = 0
                            } else {
                                S(7);
                                ab = 11 + v(7);
                                f(7);
                                if (ac + ab > X) {
                                    return -1
                                }
                                while (ab-- > 0) {
                                    af[ac++] = 0
                                }
                                Z = 0
                            }
                        }
                    }
                }
                h = T;
                ad = new n(af, W, 257, e, M, h);
                if (h == 0) {
                    ad.status = 1
                }
                if (ad.status != 0) {
                    if (ad.status == 1) {
                    }
                    return -1
                }
                o = ad.root;
                h = ad.m;
                for (ac = 0; ac < aa; ac++) {
                    af[ac] = af[ac + W]
                }
                l = j;
                ad = new n(af, aa, 0, K, A, l);
                q = ad.root;
                l = ad.m;
                if (l == 0 && W > 257) {
                    return -1
                }
                if (ad.status == 1) {
                }
                if (ad.status != 0) {
                    return -1
                }
                return i(ag, Y, ai)
            };
            var P = function () {
                var W;
                if (D == null) {
                    D = new Array(2 * p)
                }
                m = 0;
                t = 0;
                s = 0;
                V = -1;
                O = false;
                U = z = 0;
                o = null
            };
            var H = function (aa, Y, X) {
                var Z, W;
                Z = 0;
                while (Z < X) {
                    if (O && V == -1) {
                        return Z
                    }
                    if (U > 0) {
                        if (V != x) {
                            while (U > 0 && Z < X) {
                                U--;
                                z &= p - 1;
                                m &= p - 1;
                                aa[Y + Z++] = D[m++] = D[z++]
                            }
                        } else {
                            while (U > 0 && Z < X) {
                                U--;
                                m &= p - 1;
                                S(8);
                                aa[Y + Z++] = D[m++] = v(8);
                                f(8)
                            }
                            if (U == 0) {
                                V = -1
                            }
                        }
                        if (Z == X) {
                            return Z
                        }
                    }
                    if (V == -1) {
                        if (O) {
                            break
                        }
                        S(1);
                        if (v(1) != 0) {
                            O = true
                        }
                        f(1);
                        S(2);
                        V = v(2);
                        f(2);
                        o = null;
                        U = 0
                    }
                    switch (V) {
                        case 0:
                            W = w(aa, Y + Z, X - Z);
                            break;
                        case 1:
                            if (o != null) {
                                W = i(aa, Y + Z, X - Z)
                            } else {
                                W = L(aa, Y + Z, X - Z)
                            }
                            break;
                        case 2:
                            if (o != null) {
                                W = i(aa, Y + Z, X - Z)
                            } else {
                                W = B(aa, Y + Z, X - Z)
                            }
                            break;
                        default:
                            W = -1;
                            break
                    }
                    if (W == -1) {
                        if (O) {
                            return 0
                        }
                        return -1
                    }
                    Z += W
                }
                return Z
            };
            var F = function (aa) {
                var Y, X;
                P();
                C = aa;
                G = 0;
                var ab = new Array(1024);
                var Z = [];
                while ((Y = H(ab, 0, ab.length)) > 0) {
                    var W = new Array(Y);
                    for (X = 0; X < Y; X++) {
                        W[X] = String.fromCharCode(ab[X])
                    }
                    Z[Z.length] = W.join("")
                }
                C = null;
                return Z.join("")
            };
            return F
        })();
        if (l == 0 && W > 257) {
            return -1
        }
        if (ad.status == 1) {
        }
        if (ad.status != 0) {
            return -1
        }
        return i(ag, Y, ai)
    };
    var P = function () {
        var W;
        if (D == null) {
            D = new Array(2 * p)
        }
        m = 0;
        t = 0;
        s = 0;
        V = -1;
        O = false;
        U = z = 0;
        o = null
    };
    var H = function (aa, Y, X) {
        var Z, W;
        Z = 0;
        while (Z < X) {
            if (O && V == -1) {
                return Z
            }
            if (U > 0) {
                if (V != x) {
                    while (U > 0 && Z < X) {
                        U--;
                        z &= p - 1;
                        m &= p - 1;
                        aa[Y + Z++] = D[m++] = D[z++]
                    }
                } else {
                    while (U > 0 && Z < X) {
                        U--;
                        m &= p - 1;
                        S(8);
                        aa[Y + Z++] = D[m++] = v(8);
                        f(8)
                    }
                    if (U == 0) {
                        V = -1
                    }
                }
                if (Z == X) {
                    return Z
                }
            }
            if (V == -1) {
                if (O) {
                    break
                }
                S(1);
                if (v(1) != 0) {
                    O = true
                }
                f(1);
                S(2);
                V = v(2);
                f(2);
                o = null;
                U = 0
            }
            switch (V) {
                case 0:
                    W = w(aa, Y + Z, X - Z);
                    break;
                case 1:
                    if (o != null) {
                        W = i(aa, Y + Z, X - Z)
                    } else {
                        W = L(aa, Y + Z, X - Z)
                    }
                    break;
                case 2:
                    if (o != null) {
                        W = i(aa, Y + Z, X - Z)
                    } else {
                        W = B(aa, Y + Z, X - Z)
                    }
                    break;
                default:
                    W = -1;
                    break
            }
            if (W == -1) {
                if (O) {
                    return 0
                }
                return -1
            }
            Z += W
        }
        return Z
    };
    var F = function (aa) {
        var Y, X;
        P();
        C = aa;
        G = 0;
        var ab = new Array(1024);
        var Z = [];
        while ((Y = H(ab, 0, ab.length)) > 0) {
            var W = new Array(Y);
            for (X = 0; X < Y; X++) {
                W[X] = String.fromCharCode(ab[X])
            }
            Z[Z.length] = W.join("")
        }
        C = null;
        return Z.join("")
    };
    return F
})();
