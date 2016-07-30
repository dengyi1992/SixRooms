_SIX_ROOMS_CB_([42], {
    227: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var a = function (a) {
            return 10 > a ? "0" + a : a + ""
        };
        k.default = {
            format: function (b, c) {
                var e = new Date(b), f = e.getFullYear(), m = a(e.getMonth() + 1), g = a(e.getDate()), h = a(e.getHours()), d = a(e.getMinutes());
                return (c || "y-m-d").replace(/y|m|d|h|i/g, function (a) {
                    switch (a) {
                        case "y":
                            return f;
                        case "m":
                            return m;
                        case "d":
                            return g;
                        case "h":
                            return h;
                        case "i":
                            return d
                    }
                })
            }, formatSecond: function (a) {
                var c = Math.floor(a / 3600), e = Math.floor((a - 3600 * c) /
                    60);
                a = Math.floor(a % 60);
                c = 10 > c ? "0" + c : c;
                return ("00" == c ? "" : c + ":") + (10 > e ? "0" + e : e) + ":" + (10 > a ? "0" + a : a)
            }
        }
    }, 229: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "TabBar", mixins: [a.default], propTypes: {
                className: c.default.PropTypes.string,
                active: c.default.PropTypes.string,
                node: c.default.PropTypes.arrayOf(c.default.PropTypes.object),
                onClick: c.default.PropTypes.func,
                onChange: c.default.PropTypes.func
            }, render: function () {
                var a = this.props.className, b = this.props.active, e = this.props.node.map(function (a, f) {
                    return c.default.createElement("li", {
                        key: a.name,
                        ref: a.name,
                        className: a.name + (b == a.name ? " on" : ""),
                        "data-name": a.name,
                        dangerouslySetInnerHTML: {__html: a.text}
                    })
                });
                return c.default.createElement("ul", {
                    className: a,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick,
                    onClick: this.onClick
                }, e)
            }, onClick: function (a) {
                if ("touchend" == a.type &&
                    this.checkTouchAvailable(a) || "click" == a.type)if (a.preventDefault(), this.props.onChange) {
                    var b = this._closest(a.target, "li", e.default.findDOMNode(this)).getAttribute("data-name");
                    this.props.onChange(b, a)
                } else if (this.props.onClick)this.props.onClick(a)
            }, _closest: function (a, b, c) {
                for (c = c || null; a && a.nodeName.toLowerCase() != b && a != c;)a = a.parentNode;
                return a
            }
        });
        k.default = a
    }, 237: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.default = function (b) {
            for (b += ""; a.test(b);)b = b.replace(a, "$1,$2");
            return b
        };
        var a = /(\d+)(\d{3})/
    }, 246: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.default = {
            randrange: function (a, b) {
                return a + Math.floor(Math.random() * (b - a))
            }, shuffleArray: function (a) {
                for (var b = a.length, c, e; b;)e = Math.floor(Math.random() * b--), c = a[b], a[b] = a[e], a[e] = c;
                return a
            }
        }
    }, 249: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.encode = function (c) {
            for (var e = new b, f, m, g, h, d, l, n = 0; n < c.length;)f = c.charCodeAt(n++), m = c.charCodeAt(n++), g = c.charCodeAt(n++), h = f >> 2, f = (f & 3) <<
                4 | m >> 4, d = (m & 15) << 2 | g >> 6, l = g & 63, isNaN(m) ? d = l = 64 : isNaN(g) && (l = 64), e.append(a.charAt(h) + a.charAt(f) + a.charAt(d) + a.charAt(l));
            return e.toString()
        };
        k.decode = function (c) {
            var e = new b, f, m, g, h, d, l = 0;
            for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < c.length;)f = a.indexOf(c.charAt(l++)), m = a.indexOf(c.charAt(l++)), h = a.indexOf(c.charAt(l++)), d = a.indexOf(c.charAt(l++)), f = f << 2 | m >> 4, m = (m & 15) << 4 | h >> 2, g = (h & 3) << 6 | d, e.append(String.fromCharCode(f)), 64 != h && e.append(String.fromCharCode(m)), 64 != d && e.append(String.fromCharCode(g));
            return e.toString()
        };
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b = function () {
            this.str = "";
            this.length = 0;
            this.append = function (a) {
                this.str += a;
                this.length += a.length
            };
            this.prepend = function (a) {
                this.str = a + this.str;
                this.length += a.length
            };
            this.toString = function () {
                return this.str
            }
        }
    }, 250: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var a, b, c, e, f = null, m, g, h, p, l, n, r, q, y, w, t, v, A, x, z, D, u, Q, G, E, R, M, F, H, B, K, S, V, L, N, W, ba, O, J, ca, I, C, ia, fa, wa, oa, pa, Z, qa, xa, ga, ja, da, ha,
            ra, ya, ka = function () {
                this.dl = this.fc = 0
            }, za = function () {
                this.extra_bits = this.static_tree = this.dyn_tree = null;
                this.max_code = this.max_length = this.elems = this.extra_base = 0
            }, aa = function (a, b, c, f) {
                this.good_length = a;
                this.max_lazy = b;
                this.nice_length = c;
                this.max_chain = f
            }, Qa = function () {
                this.next = null;
                this.len = 0;
                this.ptr = Array(8192);
                this.off = 0
            }, Aa = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], la = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Ra = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 2, 3, 7], Ga = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ba = [new aa(0, 0, 0, 0), new aa(4, 4, 8, 4), new aa(4, 5, 16, 8), new aa(4, 6, 32, 32), new aa(4, 4, 16, 16), new aa(8, 16, 32, 32), new aa(8, 16, 128, 128), new aa(8, 32, 128, 256), new aa(32, 128, 258, 1024), new aa(32, 258, 258, 4096)], ta = function (e) {
                f[g + m++] = e;
                if (8192 == g + m && 0 != m) {
                    var h;
                    null != a ? (e = a, a = a.next) : e = new Qa;
                    e.next = null;
                    e.len = e.off = 0;
                    null == b ? b = c = e : c = c.next = e;
                    e.len = m - g;
                    for (h = 0; h < e.len; h++)e.ptr[h] = f[g + h];
                    m = g = 0
                }
            }, ua = function (a) {
                a &= 65535;
                8190 > g + m ? (f[g + m++] = a & 255, f[g +
                m++] = a >>> 8) : (ta(a & 255), ta(a >>> 8))
            }, va = function () {
                t = (t << 5 ^ p[u + 3 - 1] & 255) & 8191;
                v = r[32768 + t];
                r[u & 32767] = v;
                r[32768 + t] = u
            }, ea = function (a, b) {
                T(b[a].fc, b[a].dl)
            }, Ha = function (a, b, c) {
                return a[b].fc < a[c].fc || a[b].fc == a[c].fc && C[b] <= C[c]
            }, Ia = function (a, b, c) {
                var f;
                for (f = 0; f < c && ya < ra.length; f++)a[b + f] = ra.charCodeAt(ya++) & 255;
                return f
            }, La = function (a) {
                var b = R, c = u, f, e = D, g = 32506 < u ? u - 32506 : 0, m = u + 258, h = p[c + e - 1], d = p[c + e];
                D >= H && (b >>= 2);
                do if (f = a, p[f + e] == d && p[f + e - 1] == h && p[f] == p[c] && p[++f] == p[c + 1]) {
                    c += 2;
                    for (f++; p[++c] == p[++f] &&
                    p[++c] == p[++f] && p[++c] == p[++f] && p[++c] == p[++f] && p[++c] == p[++f] && p[++c] == p[++f] && p[++c] == p[++f] && p[++c] == p[++f] && c < m;);
                    f = 258 - (m - c);
                    c = m - 258;
                    if (f > e) {
                        Q = a;
                        e = f;
                        if (258 <= f)break;
                        h = p[c + e - 1];
                        d = p[c + e]
                    }
                } while ((a = r[a & 32767]) > g && 0 != --b);
                return e
            }, Ca = function () {
                var a, b, c = 65536 - E - u;
                if (-1 == c)c--; else if (65274 <= u) {
                    for (a = 0; 32768 > a; a++)p[a] = p[a + 32768];
                    Q -= 32768;
                    u -= 32768;
                    w -= 32768;
                    for (a = 0; 8192 > a; a++)b = r[32768 + a], r[32768 + a] = 32768 <= b ? b - 32768 : 0;
                    for (a = 0; 32768 > a; a++)b = r[a], r[a] = 32768 <= b ? b - 32768 : 0;
                    c += 32768
                }
                G || (a = Ia(p, u + E, c),
                    0 >= a ? G = !0 : E += a)
            }, Sa = function (a, c, f) {
                var d;
                if (!e) {
                    if (!G) {
                        y = q = 0;
                        var n, l;
                        if (0 == V[0].dl) {
                            N.dyn_tree = B;
                            N.static_tree = S;
                            N.extra_bits = Aa;
                            N.extra_base = 257;
                            N.elems = 286;
                            N.max_length = 15;
                            N.max_code = 0;
                            W.dyn_tree = K;
                            W.static_tree = V;
                            W.extra_bits = la;
                            W.extra_base = 0;
                            W.elems = 30;
                            W.max_length = 15;
                            W.max_code = 0;
                            ba.dyn_tree = L;
                            ba.static_tree = null;
                            ba.extra_bits = Ra;
                            ba.extra_base = 0;
                            ba.elems = 19;
                            ba.max_length = 7;
                            for (l = n = ba.max_code = 0; 28 > l; l++)for (wa[l] = n, d = 0; d < 1 << Aa[l]; d++)ia[n++] = l;
                            ia[n - 1] = l;
                            for (l = n = 0; 16 > l; l++)for (oa[l] = n, d = 0; d <
                            1 << la[l]; d++)fa[n++] = l;
                            for (n >>= 7; 30 > l; l++)for (oa[l] = n << 7, d = 0; d < 1 << la[l] - 7; d++)fa[256 + n++] = l;
                            for (d = 0; 15 >= d; d++)O[d] = 0;
                            for (d = 0; 143 >= d;)S[d++].dl = 8, O[8]++;
                            for (; 255 >= d;)S[d++].dl = 9, O[9]++;
                            for (; 279 >= d;)S[d++].dl = 7, O[7]++;
                            for (; 287 >= d;)S[d++].dl = 8, O[8]++;
                            U(S, 287);
                            for (d = 0; 30 > d; d++)V[d].dl = 5, V[d].fc = Y(d, 5);
                            ma()
                        }
                        for (d = 0; 8192 > d; d++)r[32768 + d] = 0;
                        M = Ba[F].max_lazy;
                        H = Ba[F].good_length;
                        R = Ba[F].max_chain;
                        w = u = 0;
                        E = Ia(p, 0, 65536);
                        if (0 >= E)G = !0, E = 0; else {
                            for (G = !1; 262 > E && !G;)Ca();
                            for (d = t = 0; 2 > d; d++)t = (t << 5 ^ p[d] & 255) & 8191
                        }
                        b =
                            null;
                        g = m = 0;
                        3 >= F ? (D = 2, z = 0) : (z = 2, x = 0);
                        h = !1
                    }
                    e = !0;
                    if (0 == E)return h = !0, 0
                }
                if ((d = Ma(a, c, f)) == f)return f;
                if (h)return d;
                if (3 >= F)for (; 0 != E && null == b;) {
                    va();
                    0 != v && 32506 >= u - v && (z = La(v), z > E && (z = E));
                    if (3 <= z)if (l = na(u - Q, z - 3), E -= z, z <= M) {
                        z--;
                        do u++, va(); while (0 != --z);
                        u++
                    } else u += z, z = 0, t = p[u] & 255, t = (t << 5 ^ p[u + 1] & 255) & 8191; else l = na(0, p[u] & 255), E--, u++;
                    l && (P(0), w = u);
                    for (; 262 > E && !G;)Ca()
                } else for (; 0 != E && null == b;) {
                    va();
                    D = z;
                    A = Q;
                    z = 2;
                    0 != v && D < M && 32506 >= u - v && (z = La(v), z > E && (z = E), 3 == z && 4096 < u - Q && z--);
                    if (3 <= D && z <= D) {
                        l = na(u - 1 - A,
                            D - 3);
                        E -= D - 1;
                        D -= 2;
                        do u++, va(); while (0 != --D);
                        x = 0;
                        z = 2;
                        u++;
                        l && (P(0), w = u)
                    } else 0 != x ? na(0, p[u - 1] & 255) && (P(0), w = u) : x = 1, u++, E--;
                    for (; 262 > E && !G;)Ca()
                }
                0 == E && (0 != x && na(0, p[u - 1] & 255), P(1), h = !0);
                return d + Ma(a, d + c, f - d)
            }, Ma = function (c, e, h) {
                var d, n, q;
                for (d = 0; null != b && d < h;) {
                    n = h - d;
                    n > b.len && (n = b.len);
                    for (q = 0; q < n; q++)c[e + d + q] = b.ptr[b.off + q];
                    b.off += n;
                    b.len -= n;
                    d += n;
                    0 == b.len && (n = b, b = b.next, n.next = a, a = n)
                }
                if (d == h)return d;
                if (g < m) {
                    n = h - d;
                    n > m - g && (n = m - g);
                    for (q = 0; q < n; q++)c[e + d + q] = f[g + q];
                    g += n;
                    d += n;
                    m == g && (m = g = 0)
                }
                return d
            }, ma = function () {
                var a;
                for (a = 0; 286 > a; a++)B[a].fc = 0;
                for (a = 0; 30 > a; a++)K[a].fc = 0;
                for (a = 0; 19 > a; a++)L[a].fc = 0;
                B[256].fc = 1;
                ga = Z = qa = xa = da = ha = 0;
                ja = 1
            }, Da = function (a, b) {
                for (var c = J[b], f = b << 1; f <= ca;) {
                    f < ca && Ha(a, J[f + 1], J[f]) && f++;
                    if (Ha(a, c, J[f]))break;
                    J[b] = J[f];
                    b = f;
                    f <<= 1
                }
                J[b] = c
            }, U = function (a, b) {
                var c = Array(16), f = 0, e;
                for (e = 1; 15 >= e; e++)f = f + O[e - 1] << 1, c[e] = f;
                for (f = 0; f <= b; f++)e = a[f].dl, 0 != e && (a[f].fc = Y(c[e]++, e))
            }, Ea = function (a) {
                var b = a.dyn_tree, c = a.static_tree, f = a.elems, e, g = -1, m = f;
                ca = 0;
                I = 573;
                for (e = 0; e < f; e++)0 != b[e].fc ? (J[++ca] = g = e, C[e] =
                    0) : b[e].dl = 0;
                for (; 2 > ca;)e = J[++ca] = 2 > g ? ++g : 0, b[e].fc = 1, C[e] = 0, da--, null != c && (ha -= c[e].dl);
                a.max_code = g;
                for (e = ca >> 1; 1 <= e; e--)Da(b, e);
                do e = J[1], J[1] = J[ca--], Da(b, 1), c = J[1], J[--I] = e, J[--I] = c, b[m].fc = b[e].fc + b[c].fc, C[m] = C[e] > C[c] + 1 ? C[e] : C[c] + 1, b[e].dl = b[c].dl = m, J[1] = m++, Da(b, 1); while (2 <= ca);
                J[--I] = J[1];
                m = a.dyn_tree;
                e = a.extra_bits;
                var f = a.extra_base, c = a.max_code, h = a.max_length, d = a.static_tree, n, q, l, r, p = 0;
                for (q = 0; 15 >= q; q++)O[q] = 0;
                m[J[I]].dl = 0;
                for (a = I + 1; 573 > a; a++)n = J[a], q = m[m[n].dl].dl + 1, q > h && (q = h, p++),
                    m[n].dl = q, n > c || (O[q]++, l = 0, n >= f && (l = e[n - f]), r = m[n].fc, da += r * (q + l), null != d && (ha += r * (d[n].dl + l)));
                if (0 != p) {
                    do {
                        for (q = h - 1; 0 == O[q];)q--;
                        O[q]--;
                        O[q + 1] += 2;
                        O[h]--;
                        p -= 2
                    } while (0 < p);
                    for (q = h; 0 != q; q--)for (n = O[q]; 0 != n;)e = J[--a], e > c || (m[e].dl != q && (da += (q - m[e].dl) * m[e].fc, m[e].fc = q), n--)
                }
                U(b, g)
            }, Na = function (a, b) {
                var c, f = -1, e, m = a[0].dl, g = 0, h = 7, d = 4;
                0 == m && (h = 138, d = 3);
                a[b + 1].dl = 65535;
                for (c = 0; c <= b; c++)e = m, m = a[c + 1].dl, ++g < h && e == m || (g < d ? L[e].fc += g : 0 != e ? (e != f && L[e].fc++, L[16].fc++) : 10 >= g ? L[17].fc++ : L[18].fc++, g = 0, f = e, 0 ==
                m ? (h = 138, d = 3) : e == m ? (h = 6, d = 3) : (h = 7, d = 4))
            }, Oa = function (a, b) {
                var c, f = -1, e, m = a[0].dl, g = 0, h = 7, d = 4;
                0 == m && (h = 138, d = 3);
                for (c = 0; c <= b; c++)if (e = m, m = a[c + 1].dl, !(++g < h && e == m)) {
                    if (g < d) {
                        do ea(e, L); while (0 != --g)
                    } else 0 != e ? (e != f && (ea(e, L), g--), ea(16, L), T(g - 3, 2)) : 10 >= g ? (ea(17, L), T(g - 3, 3)) : (ea(18, L), T(g - 11, 7));
                    g = 0;
                    f = e;
                    0 == m ? (h = 138, d = 3) : e == m ? (h = 6, d = 3) : (h = 7, d = 4)
                }
            }, P = function (a) {
                var b, c, f, e;
                e = u - w;
                pa[xa] = ga;
                Ea(N);
                Ea(W);
                Na(B, N.max_code);
                Na(K, W.max_code);
                Ea(ba);
                for (f = 18; 3 <= f && 0 == L[Ga[f]].dl; f--);
                da += 3 * (f + 1) + 14;
                b = da + 3 + 7 >> 3;
                c = ha + 3 + 7 >> 3;
                c <= b && (b = c);
                if (e + 4 <= b && 0 <= w)for (T(0 + a, 3), Pa(), ua(e), ua(~e), f = 0; f < e; f++)ta(p[w + f]); else if (c == b)T(2 + a, 3), Fa(S, V); else {
                    T(4 + a, 3);
                    e = N.max_code + 1;
                    b = W.max_code + 1;
                    f += 1;
                    T(e - 257, 5);
                    T(b - 1, 5);
                    T(f - 4, 4);
                    for (c = 0; c < f; c++)T(L[Ga[c]].dl, 3);
                    Oa(B, e - 1);
                    Oa(K, b - 1);
                    Fa(B, K)
                }
                ma();
                0 != a && Pa()
            }, na = function (a, b) {
                n[Z++] = b;
                0 == a ? B[b].fc++ : (a--, B[ia[b] + 256 + 1].fc++, K[(256 > a ? fa[a] : fa[256 + (a >> 7)]) & 255].fc++, l[qa++] = a, ga |= ja);
                ja <<= 1;
                0 == (Z & 7) && (pa[xa++] = ga, ga = 0, ja = 1);
                if (2 < F && 0 == (Z & 4095)) {
                    var c = 8 * Z, f = u - w, e;
                    for (e = 0; 30 > e; e++)c +=
                        K[e].fc * (5 + la[e]);
                    c >>= 3;
                    if (qa < parseInt(Z / 2) && c < parseInt(f / 2))return !0
                }
                return 8191 == Z || 8192 == qa
            }, Fa = function (a, b) {
                var c, f = 0, e = 0, m = 0, g = 0, h, d;
                if (0 != Z) {
                    do 0 == (f & 7) && (g = pa[m++]), c = n[f++] & 255, 0 == (g & 1) ? ea(c, a) : (h = ia[c], ea(h + 256 + 1, a), d = Aa[h], 0 != d && (c -= wa[h], T(c, d)), c = l[e++], h = (256 > c ? fa[c] : fa[256 + (c >> 7)]) & 255, ea(h, b), d = la[h], 0 != d && (c -= oa[h], T(c, d))), g >>= 1; while (f < Z)
                }
                ea(256, a)
            }, T = function (a, c) {
                y > 16 - c ? (q |= a << y, ua(q), q = a >> 16 - y, y += c - 16) : (q |= a << y, y += c)
            }, Y = function (a, c) {
                var b = 0;
                do b |= a & 1, a >>= 1, b <<= 1; while (0 < --c);
                return b >> 1
            }, Pa = function () {
                8 < y ? ua(q) : 0 < y && ta(q);
                y = q = 0
            };
        k.default = function (m, g) {
            var h, d;
            ra = m;
            ya = 0;
            "undefined" == typeof g && (g = 6);
            (h = g) ? 1 > h ? h = 1 : 9 < h && (h = 9) : h = 6;
            F = h;
            G = e = !1;
            if (null == f) {
                a = b = c = null;
                f = Array(8192);
                p = Array(65536);
                l = Array(8192);
                n = Array(32832);
                r = Array(65536);
                B = Array(573);
                for (h = 0; 573 > h; h++)B[h] = new ka;
                K = Array(61);
                for (h = 0; 61 > h; h++)K[h] = new ka;
                S = Array(288);
                for (h = 0; 288 > h; h++)S[h] = new ka;
                V = Array(30);
                for (h = 0; 30 > h; h++)V[h] = new ka;
                L = Array(39);
                for (h = 0; 39 > h; h++)L[h] = new ka;
                N = new za;
                W = new za;
                ba = new za;
                O =
                    Array(16);
                J = Array(573);
                C = Array(573);
                ia = Array(256);
                fa = Array(512);
                wa = Array(29);
                oa = Array(30);
                pa = Array(1024)
            }
            for (var q = Array(1024), k = []; 0 < (h = Sa(q, 0, q.length));) {
                var x = Array(h);
                for (d = 0; d < h; d++)x[d] = String.fromCharCode(q[d]);
                k[k.length] = x.join("")
            }
            ra = null;
            return k.join("")
        }
    }, 251: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(6)) && d.__esModule ? d : {default: d};
        k.default = {
            url: function (a, b) {
                return a.replace(/^([^_]+)(_[a-zA-Z])?(\.\w+)$/i, "$1" + (b || "") + "$3")
            }, justifySize: function (a,
                                      b, f, m) {
                var g = f[1], h = m[1];
                f = f[0];
                m = m[0];
                a <= g && b <= h ? (g = f || a, h = m || b) : a / b >= g / h ? (g = Math.min(a, g), h = g * b / a) : (h = Math.min(b, h), g = h * a / b);
                return [g, h]
            }, createImageElement: function (a) {
                a = "string" == typeof a ? [a] : a;
                var e = (0, b.default)(), f = 0, m = function () {
                    f++;
                    this.onload = this.onerror = null;
                    f == a.length && (clearTimeout(d), e.resolve(h))
                }, g = function () {
                    clearTimeout(d);
                    this.onload = this.onerror = null;
                    e.reject(this)
                }, h = a.map(function (a) {
                    var b = new Image;
                    b.onload = m;
                    b.onerror = g;
                    b.src = a;
                    return b
                }), d = setTimeout(function () {
                    e.reject(null);
                    h.forEach(function (a) {
                        a.onload = a.onerror = null
                    })
                }, 6E3);
                return e.promise()
            }
        }
    }, 252: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var a, b, c = null, e, f, m, g, h, p, l, n, r, q, y, w, t, v, A, x = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], z = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073,
            4097, 6145, 8193, 12289, 16385, 24577], Q = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], E = function () {
            this.list = this.next = null
        }, R = function () {
            this.n = this.b = this.e = 0;
            this.t = null
        }, M = function (a, b, c, f, e, g) {
            this.BMAX = 16;
            this.N_MAX = 288;
            this.status = 0;
            this.root = null;
            this.m = 0;
            var m = Array(this.BMAX + 1), h, d, n, q, l, r, p, k = Array(this.BMAX + 1), x, t, y, w = new R, z = Array(this.BMAX);
            q = Array(this.N_MAX);
            var v, u = Array(this.BMAX + 1), D, A, B;
            B = this.root = null;
            for (l =
                     0; l < m.length; l++)m[l] = 0;
            for (l = 0; l < k.length; l++)k[l] = 0;
            for (l = 0; l < z.length; l++)z[l] = null;
            for (l = 0; l < q.length; l++)q[l] = 0;
            for (l = 0; l < u.length; l++)u[l] = 0;
            h = 256 < b ? a[256] : this.BMAX;
            x = a;
            t = 0;
            l = b;
            do m[x[t]]++, t++; while (0 < --l);
            if (m[0] == b)this.root = null, this.status = this.m = 0; else {
                for (r = 1; r <= this.BMAX && 0 == m[r]; r++);
                p = r;
                g < r && (g = r);
                for (l = this.BMAX; 0 != l && 0 == m[l]; l--);
                n = l;
                g > l && (g = l);
                for (D = 1 << r; r < l; r++, D <<= 1)if (0 > (D -= m[r])) {
                    this.status = 2;
                    this.m = g;
                    return
                }
                if (0 > (D -= m[l]))this.status = 2, this.m = g; else {
                    m[l] += D;
                    u[1] = r = 0;
                    x = m;
                    t = 1;
                    for (y = 2; 0 < --l;)u[y++] = r += x[t++];
                    x = a;
                    l = t = 0;
                    do 0 != (r = x[t++]) && (q[u[r]++] = l); while (++l < b);
                    b = u[n];
                    u[0] = l = 0;
                    x = q;
                    t = 0;
                    q = -1;
                    v = k[0] = 0;
                    y = null;
                    for (A = 0; p <= n; p++)for (a = m[p]; 0 < a--;) {
                        for (; p > v + k[1 + q];) {
                            v += k[1 + q];
                            q++;
                            A = (A = n - v) > g ? g : A;
                            if ((d = 1 << (r = p - v)) > a + 1)for (d -= a + 1, y = p; ++r < A && !((d <<= 1) <= m[++y]);)d -= m[y];
                            v + r > h && v < h && (r = h - v);
                            A = 1 << r;
                            k[1 + q] = r;
                            y = Array(A);
                            for (d = 0; d < A; d++)y[d] = new R;
                            B = null == B ? this.root = new E : B.next = new E;
                            B.next = null;
                            B.list = y;
                            z[q] = y;
                            0 < q && (u[q] = l, w.b = k[q], w.e = 16 + r, w.t = y, r = (l & (1 << v) - 1) >> v - k[q], z[q - 1][r].e =
                                w.e, z[q - 1][r].b = w.b, z[q - 1][r].n = w.n, z[q - 1][r].t = w.t)
                        }
                        w.b = p - v;
                        t >= b ? w.e = 99 : x[t] < c ? (w.e = 256 > x[t] ? 16 : 15, w.n = x[t++]) : (w.e = e[x[t] - c], w.n = f[x[t++] - c]);
                        d = 1 << p - v;
                        for (r = l >> v; r < A; r += d)y[r].e = w.e, y[r].b = w.b, y[r].n = w.n, y[r].t = w.t;
                        for (r = 1 << p - 1; 0 != (l & r); r >>= 1)l ^= r;
                        for (l ^= r; (l & (1 << v) - 1) != u[q];)v -= k[q], q--
                    }
                    this.m = k[1];
                    this.status = 0 != D && 1 != n ? 1 : 0
                }
            }
        }, F = function (a) {
            for (; h < a;) {
                var b = g, c;
                c = v.length == A ? -1 : v.charCodeAt(A++) & 255;
                g = b | c << h;
                h += 8
            }
        }, H = function (a) {
            return g & x[a]
        }, B = function (a) {
            g >>= a;
            h -= a
        }, K = function (c, f, e) {
            var m,
                g, h;
            if (0 == e)return 0;
            for (h = 0; ;) {
                F(w);
                g = q.list[H(w)];
                for (m = g.e; 16 < m;) {
                    if (99 == m)return -1;
                    B(g.b);
                    m -= 16;
                    F(m);
                    g = g.t[H(m)];
                    m = g.e
                }
                B(g.b);
                if (16 == m)b &= 32767, c[f + h++] = a[b++] = g.n; else {
                    if (15 == m)break;
                    F(m);
                    n = g.n + H(m);
                    B(m);
                    F(t);
                    g = y.list[H(t)];
                    for (m = g.e; 16 < m;) {
                        if (99 == m)return -1;
                        B(g.b);
                        m -= 16;
                        F(m);
                        g = g.t[H(m)];
                        m = g.e
                    }
                    B(g.b);
                    F(m);
                    r = b - g.n - H(m);
                    for (B(m); 0 < n && h < e;)n--, r &= 32767, b &= 32767, c[f + h++] = a[b++] = a[r++]
                }
                if (h == e)return e
            }
            p = -1;
            return h
        }, S = function (a, b, c) {
            var f, e, m, g, h, d, n, l = Array(316);
            for (f = 0; f < l.length; f++)l[f] = 0;
            F(5);
            d = 257 + H(5);
            B(5);
            F(5);
            n = 1 + H(5);
            B(5);
            F(4);
            f = 4 + H(4);
            B(4);
            if (286 < d || 30 < n)return -1;
            for (e = 0; e < f; e++)F(3), l[G[e]] = H(3), B(3);
            for (; 19 > e; e++)l[G[e]] = 0;
            w = 7;
            e = new M(l, 19, 19, null, null, w);
            if (0 != e.status)return -1;
            q = e.root;
            w = e.m;
            g = d + n;
            for (f = m = 0; f < g;)if (F(w), h = q.list[H(w)], e = h.b, B(e), e = h.n, 16 > e)l[f++] = m = e; else if (16 == e) {
                F(2);
                e = 3 + H(2);
                B(2);
                if (f + e > g)return -1;
                for (; 0 < e--;)l[f++] = m
            } else {
                17 == e ? (F(3), e = 3 + H(3), B(3)) : (F(7), e = 11 + H(7), B(7));
                if (f + e > g)return -1;
                for (; 0 < e--;)l[f++] = 0;
                m = 0
            }
            w = 9;
            e = new M(l, d, 257, z, D, w);
            0 == w && (e.status =
                1);
            if (0 != e.status)return -1;
            q = e.root;
            w = e.m;
            for (f = 0; f < n; f++)l[f] = l[f + d];
            t = 6;
            e = new M(l, n, 0, u, Q, t);
            y = e.root;
            t = e.m;
            return 0 == t && 257 < d || 0 != e.status ? -1 : K(a, b, c)
        }, V = function (d, k, x) {
            var v, A;
            for (v = 0; v < x && (!l || -1 != p);) {
                if (0 < n) {
                    if (0 != p)for (; 0 < n && v < x;)n--, r &= 32767, b &= 32767, d[k + v++] = a[b++] = a[r++]; else {
                        for (; 0 < n && v < x;)n--, b &= 32767, F(8), d[k + v++] = a[b++] = H(8), B(8);
                        0 == n && (p = -1)
                    }
                    if (v == x)break
                }
                if (-1 == p) {
                    if (l)break;
                    F(1);
                    0 != H(1) && (l = !0);
                    B(1);
                    F(2);
                    p = H(2);
                    B(2);
                    q = null;
                    n = 0
                }
                switch (p) {
                    case 0:
                        A = d;
                        var E = k + v, G = x - v, I = void 0, I = h & 7;
                        B(I);
                        F(16);
                        I = H(16);
                        B(16);
                        F(16);
                        if (I != (~g & 65535))A = -1; else {
                            B(16);
                            n = I;
                            for (I = 0; 0 < n && I < G;)n--, b &= 32767, F(8), A[E + I++] = a[b++] = H(8), B(8);
                            0 == n && (p = -1);
                            A = I
                        }
                        break;
                    case 1:
                        if (null != q)A = K(d, k + v, x - v); else a:{
                            A = d;
                            E = k + v;
                            G = x - v;
                            if (null == c) {
                                for (var C = void 0, I = Array(288), C = void 0, C = 0; 144 > C; C++)I[C] = 8;
                                for (; 256 > C; C++)I[C] = 9;
                                for (; 280 > C; C++)I[C] = 7;
                                for (; 288 > C; C++)I[C] = 8;
                                f = 7;
                                C = new M(I, 288, 257, z, D, f);
                                if (0 != C.status) {
                                    alert("HufBuild error: " + C.status);
                                    A = -1;
                                    break a
                                }
                                c = C.root;
                                f = C.m;
                                for (C = 0; 30 > C; C++)I[C] = 5;
                                m = 5;
                                C = new M(I, 30, 0, u,
                                    Q, m);
                                if (1 < C.status) {
                                    c = null;
                                    alert("HufBuild error: " + C.status);
                                    A = -1;
                                    break a
                                }
                                e = C.root;
                                m = C.m
                            }
                            q = c;
                            y = e;
                            w = f;
                            t = m;
                            A = K(A, E, G)
                        }
                        break;
                    case 2:
                        A = null != q ? K(d, k + v, x - v) : S(d, k + v, x - v);
                        break;
                    default:
                        A = -1
                }
                if (-1 == A)return l ? 0 : -1;
                v += A
            }
            return v
        };
        k.default = function (c) {
            var f;
            null == a && (a = Array(65536));
            h = g = b = 0;
            p = -1;
            l = !1;
            n = r = 0;
            q = null;
            v = c;
            A = 0;
            for (var e = Array(1024), m = []; 0 < (c = V(e, 0, e.length));) {
                var d = Array(c);
                for (f = 0; f < c; f++)d[f] = String.fromCharCode(e[f]);
                m[m.length] = d.join("")
            }
            v = null;
            return m.join("")
        }
    }, 253: function (d, k, a) {
        Object.defineProperty(k,
            "__esModule", {value: !0});
        d = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var f in a)Object.prototype.hasOwnProperty.call(a, f) && (b[f] = a[f]);
            b.default = a;
            return b
        }(a(3));
        a = (a = a(10)) && a.__esModule ? a : {default: a};
        var b = function (a, b) {
            this.url = a;
            this.protocol = b;
            this.onopen = this.onopen.bind(this);
            this.onclose = this.onclose.bind(this);
            this.onmessage = this.onmessage.bind(this);
            this.onerror = this.onerror.bind(this);
            this._core = null;
            this._queue = []
        };
        b.prototype = {
            connect: function (a, b) {
                if ("WebSocket" in
                    window) {
                    this._core && (this.cleanQueue(), this.destroyCore());
                    a = a || this.url;
                    var f = (b = b || this.protocol) ? new window.WebSocket(a, b) : new window.WebSocket(a);
                    f.onopen = this.onopen;
                    f.onclose = this.onclose;
                    f.onmessage = this.onmessage;
                    f.onerror = this.onerror;
                    this._core = f
                } else this.trigger("nonsupport")
            }, send: function (a) {
                var b = this._core;
                b && 1 == b.readyState ? (b.send(a), this.trigger("send", a)) : this._queue.push(a)
            }, close: function () {
                this.destroyCore();
                this.cleanQueue();
                this.off()
            }, sendQueue: function () {
                for (var a = this._queue,
                         b; b = a.shift();)this._core.send(b), this.trigger("send", b)
            }, destroyCore: function () {
                var a = this._core;
                a && (a.onopen = a.onmessage = a.onclose = a.onerror = null, a.close(), this._core = null)
            }, cleanQueue: function () {
                this._queue = []
            }, onopen: function (a) {
                this.trigger("open", a);
                this.sendQueue()
            }, onclose: function (a) {
                this.trigger("close", a)
            }, onmessage: function (a) {
                this.trigger("message", a.data, a)
            }, onerror: function (a) {
                this.trigger("error", a)
            }
        };
        d.mix(b.prototype, a.default.prototype);
        k.default = b
    }, 308: function (d, k, a) {
        function b(a) {
            return a &&
            a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(15);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = e.default.createClass({
            displayName: "Alert",
            mixins: [d.default, a.default],
            propTypes: {
                text: e.default.PropTypes.string,
                okayText: e.default.PropTypes.string,
                onClick: e.default.PropTypes.func
            },
            render: function () {
                return e.default.createElement("div", {className: "g-curtain"}, e.default.createElement("div", {className: "g-confirm"}, e.default.createElement("div", {className: "title"},
                    c.default.text("\u516d\u95f4\u623f") + "\u63d0\u793a\u60a8"), e.default.createElement("div", {
                    className: "content",
                    dangerouslySetInnerHTML: {__html: this.props.text}
                }), e.default.createElement("div", {className: "btn"}, e.default.createElement("div", {
                    className: "okay",
                    onClick: this.onClick,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick
                }, this.props.okayText || "\u786e \u5b9a"))))
            },
            onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
            }
        });
        k.default = a
    }, 309: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(15);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(221), f = b(f);
        a = a(298);
        a = b(a);
        a = e.default.createClass({
            displayName: "Confirm",
            mixins: [d.default, f.default, a.default],
            propTypes: {
                text: e.default.PropTypes.string,
                okayText: e.default.PropTypes.string,
                cancelText: e.default.PropTypes.string,
                onOkay: e.default.PropTypes.func,
                onCancel: e.default.PropTypes.func,
                onClickButton: e.default.PropTypes.func
            },
            render: function () {
                return e.default.createElement("div", {className: "g-curtain"}, e.default.createElement("div", {className: "g-confirm"}, e.default.createElement("div", {className: "title"}, c.default.text("\u516d\u95f4\u623f") + "\u63d0\u793a\u60a8"), e.default.createElement("div", {
                    className: "content",
                    dangerouslySetInnerHTML: {__html: this.props.text}
                }), e.default.createElement("div", {className: "btn"}, e.default.createElement("div", {
                    className: "cancel", onClick: this.onClickButton, onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove, onTouchEnd: this.onClickButton
                }, this.props.cancelText || "\u53d6\u6d88"), e.default.createElement("div", {
                    className: "okay",
                    onClick: this.onClickButton,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClickButton
                }, this.props.okayText || "\u786e\u5b9a"))))
            },
            onClickButton: function (a) {
                if (this.checkHandlerAvailable(a)) {
                    var b = a.target;
                    "okay" == b.className ? this.props.onOkay && this.props.onOkay(a) : "cancel" == b.className && this.props.onCancel && this.props.onCancel(a);
                    this.props.onClickButton && this.props.onClickButton(a)
                }
            }
        });
        k.default = a
    }, 349: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(13);
        var c = b(d);
        d = a(30);
        var e = b(d);
        a = a(309);
        var f = b(a);
        a = e.default.createClass({
            displayName: "DownloadAppConfirm", render: function () {
                return e.default.createElement(f.default, {
                    text: "\u8bf7\u767b\u5f55\u6216\u6ce8\u518c\u540e\u4e0b\u8f7d\u516d\u95f4\u623f APP \u3002",
                    okayText: "\u9a6c\u4e0a\u6ce8\u518c",
                    cancelText: "\u767b\u5f55",
                    onOkay: this.onOkay,
                    onCancel: this.onCancel
                })
            }, onOkay: function () {
                c.default.toReg("/downloadapp")
            }, onCancel: function () {
                c.default.toLogin("/downloadapp")
            }
        });
        k.default = a
    }, 355: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        var e = a(356), f = b(e), e = a(261), m = b(e);
        a = a(280);
        a = b(a);
        var g = c.default.createClass({
            displayName: "Item",
            mixins: [d.default],
            propTypes: {item: a.default.map, onClick: c.default.PropTypes.func},
            render: function () {
                var a = this.props.item;
                return c.default.createElement(m.default, {
                    href: "/" + a.get("rid"),
                    className: "item",
                    onClick: this.props.onClick
                }, c.default.createElement("section", {
                    className: "pic",
                    style: {backgroundImage: "url(" + (a.get("pospic") || a.get("pic")) + ")"}
                }), c.default.createElement("section", null, c.default.createElement("p", {className: "alias"}, a.get("username", a.get("alias"))), c.default.createElement("p", {className: "viewer"}, c.default.createElement("i", {className: "iconfont icon-avatar"}),
                    c.default.createElement("span", null, a.get("count")))))
            }
        });
        a = c.default.createClass({
            displayName: "LiveList",
            mixins: [d.default],
            propTypes: {
                list: a.default.list,
                itemWidth: c.default.PropTypes.number,
                onClickItem: c.default.PropTypes.func
            },
            render: function () {
                return c.default.createElement("div", {className: "livelist"}, c.default.createElement(f.default, {
                    list: this.props.list,
                    component: g,
                    itemWidth: this.props.itemWidth || 120,
                    onClick: this.props.onClickItem
                }))
            }
        });
        k.default = a
    }, 356: function (d, k, a) {
        function b(a) {
            return a &&
            a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(3));
        d = a(30);
        var e = b(d);
        d = a(63);
        var f = b(d);
        d = a(288);
        d = b(d);
        a = a(280);
        a = b(a);
        a = e.default.createClass({
            displayName: "FlexGrid", mixins: [d.default], propTypes: {
                className: e.default.PropTypes.string,
                component: e.default.PropTypes.func.isRequired,
                list: a.default.list.isRequired,
                width: e.default.PropTypes.number,
                itemWidth: e.default.PropTypes.number.isRequired,
                itemHeight: e.default.PropTypes.number
            }, componentWillMount: function () {
                this.width = this.props.width || 0
            }, componentDidMount: function () {
                this.width || (this.width = f.default.findDOMNode(this).clientWidth, this.forceUpdate())
            }, render: function () {
                var a = this.width && this.make();
                return e.default.createElement("div", {className: "g-flexgrid " + (this.props.className || "")}, a)
            }, getRowLength: function () {
                return Math.floor(this.width / this.props.itemWidth)
            },
            make: function () {
                for (var a = this.props.component, b = c.omit(this.props, "className", "component", "list", "itemWidth", "itemHeight"), f = this.props.list.toArray(), d = this.props.itemHeight, l = this.getRowLength(), n = [[]], r = 0; f[0];) {
                    var q = n[n.length - 1];
                    q.length < l ? q.push(f.shift()) : n.push([])
                }
                f = n[n.length - 1];
                q = f.length;
                0 != f.length && q < l && f.splice.apply(f, [q, q].concat(Array(l - q)));
                return n.map(function (c, f) {
                    var h = c.map(function (c, f) {
                        var h = {width: 100 / l + "%", height: d || "auto"};
                        b.item = c;
                        b.index = r++;
                        return e.default.createElement("section",
                            {className: "flexgrid-item", style: h, key: f}, c && e.default.createElement(a, b))
                    });
                    return e.default.createElement("div", {className: "flexgrid-row", key: f}, h)
                })
            }
        });
        k.default = a
    }, 357: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = Object.assign || function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b], f;
                    for (f in c)Object.prototype.hasOwnProperty.call(c, f) && (a[f] = c[f])
                }
                return a
            };
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(355),
            m = b(f), f = a(221), f = b(f);
        a = a(280);
        a = b(a);
        a = e.default.createClass({
            displayName: "LiveListWithTitle",
            mixins: [d.default, f.default],
            propTypes: {
                list: a.default.list,
                showMore: e.default.PropTypes.bool,
                categoryName: e.default.PropTypes.string,
                categoryCode: e.default.PropTypes.string,
                onClickMore: e.default.PropTypes.func,
                onClickItem: e.default.PropTypes.func
            },
            getDefaultProps: function () {
                return {listTotal: 0}
            },
            render: function () {
                var a = this.props.list, b = this.props.showMore && e.default.createElement("p", {className: "more"},
                        "\u66f4\u591a", e.default.createElement("i", {className: "iconfont icon-arrowright"}));
                return e.default.createElement("div", {className: "livelistwithtitle"}, e.default.createElement("h3", c({
                    className: "title",
                    "data-code": this.props.categoryCode
                }, this.props.showMore ? {
                    onClick: this.onClickMore,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClickMore
                } : {}), e.default.createElement("p", null, this.props.categoryName), b), e.default.createElement(m.default, {
                    list: a,
                    onClickItem: this.props.onClickItem
                }))
            },
            onClickMore: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClickMore && this.props.onClickMore(a)
            }
        });
        k.default = a
    }, 375: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = a(3);
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(376), f = b(f);
        a = a(280);
        a = b(a);
        a = e.default.createClass({
            displayName: "Carousel", mixins: [d.default, f.default], propTypes: {
                carousel_className: e.default.PropTypes.string,
                carousel_list: a.default.list,
                carousel_total: e.default.PropTypes.number,
                carousel_index: e.default.PropTypes.number,
                carousel_loop: e.default.PropTypes.bool,
                carousel_reactionWhenMove: e.default.PropTypes.bool,
                carousel_preventDefaultWhenStartTouch: e.default.PropTypes.bool,
                carousel_itemComponent: e.default.PropTypes.func,
                carousel_onSwitch: e.default.PropTypes.func
            }, getDefaultProps: function () {
                return {carousel_index: 0, carousel_reactionWhenMove: !0, carousel_preventDefaultWhenStartTouch: !1}
            }, componentWillMount: function () {
                this._index = this.props.carousel_index;
                this._screenWidth = document.documentElement.clientWidth;
                this.setReactionWhenMove(this.props.carousel_reactionWhenMove);
                this.setPreventDefaultWhenStartTouch(this.props.carousel_preventDefaultWhenStartTouch)
            }, render: function () {
                for (var a = this.props.carousel_total, b = this.props.carousel_list, f = this._getIndexRange(), d = [], l = {width: this._screenWidth * (f[1] - f[0])}, n = f[0]; n < f[1]; n++) {
                    var r = b.get(0 > n ? a + n : n >= a ? 0 : n), q = {width: this._screenWidth + "px"}, k = (0, c.omit)(this.props, function (a) {
                        return 0 === a.indexOf("carousel_")
                    });
                    (0, c.mix)(k, {data: r, style: q, key: n});
                    d.push(e.default.createElement(this.props.carousel_itemComponent,
                        k))
                }
                return e.default.createElement("div", {
                    className: "g-carousel " + (this.props.carousel_className || ""),
                    style: l
                }, d)
            }, componentDidMount: function () {
                this.translateTo(this._getStablePosition())
            }, componentWillReceiveProps: function (a) {
                this.props.carousel_index != a.carousel_index && (this._index = a.carousel_index, this.translateTo(this._getStablePosition()))
            }, onSlide: function (a) {
                "left" == a && this._canMove(a) ? (this.translateSmoothToNextScreen(), this._index = this._limitIndex(this._index + 1)) : "right" == a && this._canMove(a) ?
                    (this.translateSmoothToPreviousScreen(), this._index = this._limitIndex(this._index - 1)) : this.resetTranslate()
            }, onSlideEnd: function () {
                this.translateTo(this._getStablePosition());
                this._switch(this._index)
            }, _getIndexRange: function (a) {
                a = a || this._index;
                var b = this.props.carousel_total, c = [];
                return c = this.props.carousel_loop ? 3 <= b ? [a - 1, a + 2] : [0, 1] : [Math.max(0, a - (a >= b - 1 ? 2 : 1)), Math.min(b, 0 >= a ? 3 : a + 2)]
            }, _canMove: function (a) {
                var b = this._index, c = this.props.carousel_total, f = !1;
                return f = this.props.carousel_loop ? 1 < c : "right" ==
                a && 0 < b || "left" == a && b < c - 1
            }, _getStablePosition: function () {
                var a = this._index, b = this._getIndexRange(a), c = this.props.carousel_total;
                return this.props.carousel_loop ? 1 < c ? -this._screenWidth : 0 : 2 < b[1] - b[0] ? 0 >= a ? 0 : a == c - 1 ? 2 * -this._screenWidth : -this._screenWidth : 1 == c ? 0 : -this._screenWidth * a
            }, _limitIndex: function (a) {
                var b = this.props.carousel_total;
                return this.props.carousel_loop ? 0 > a ? b - 1 : a >= b ? 0 : a : Math.max(0, Math.min(b - 1, a))
            }, _switch: function (a) {
                this.props.carousel_onSwitch && this.props.carousel_onSwitch(a)
            }
        });
        k.default =
            a
    }, 376: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(63)) && d.__esModule ? d : {default: d};
        k.default = {
            componentWillMount: function () {
                this._screenWidth = document.documentElement.clientWidth;
                this._touchStartCoordinate = [0, 0];
                this._touchMoveCoordinate = [0, 0];
                this._currentTranslate = this._touchStartTime = this._touchStartTranslate = 0;
                this._translating = !1;
                this._doTouchMoveTimer = null;
                this._translateStylePattern = /translateX\((\-?\d+\.?\d*px)\)/;
                this._reactionWhenMove = !0;
                this._preventDefaultWhenStartTouch = !1
            }, componentDidMount: function () {
                this._elem().addEventListener("touchstart", this._touchStartHandler, !1)
            }, componentWillUnmount: function () {
                var a = this._elem();
                a.removeEventListener("touchstart", this._touchStartHandler, !1);
                a.removeEventListener("touchmove", this._touchMoveHandler, !1);
                a.removeEventListener("touchend", this._touchEndHandler, !1)
            }, setReactionWhenMove: function (a) {
                this._reactionWhenMove = !!a
            }, setPreventDefaultWhenStartTouch: function (a) {
                this._preventDefaultWhenStartTouch = !!a
            }, translateTo: function (a) {
                this._disableTransition();
                this._setTranslateStyle(a)
            }, translateSmoothTo: function (a) {
                this._translating = !0;
                this._enableTransition();
                this._setTranslateStyle(a);
                setTimeout(this._translateSmoothEnd, 300)
            }, translateSmoothToNextScreen: function () {
                var a = this._currentTranslate, b = Math.abs(a) % this._screenWidth;
                this.translateSmoothTo(a - this._screenWidth + b)
            }, translateSmoothToPreviousScreen: function () {
                var a = this._currentTranslate, b = Math.abs(a + this._screenWidth) % this._screenWidth;
                this.translateSmoothTo(a + this._screenWidth - b)
            }, resetTranslate: function () {
                this.translateSmoothTo(this._touchStartTranslate)
            },
            isTranslating: function () {
                return this._translating
            }, _touchStartHandler: function (a) {
                this._preventDefaultWhenStartTouch && a.preventDefault();
                if (!this._translating) {
                    var b = this._elem();
                    a = a.changedTouches[0];
                    this._touchStartTranslate = this._currentTranslate;
                    this._touchStartCoordinate = [a.pageX, a.pageY];
                    this._touchStartTime = Date.now();
                    this._disableTransition();
                    this._reactionWhenMove && b.addEventListener("touchmove", this._touchMoveHandler, !1);
                    b.addEventListener("touchend", this._touchEndHandler, !1);
                    b.addEventListener("touchcancel",
                        this._touchEndHandler, !1)
                }
            }, _touchMoveHandler: function (a) {
                this._preventDefaultWhenStartTouch && a.preventDefault();
                this._doTouchMoveTimer || (a = a.touches[0], this._touchMoveCoordinate = [a.pageX, a.pageY], this._doTouchMoveTimer = setTimeout(this._doTouchMove, 50))
            }, _touchEndHandler: function (a) {
                var b = this._elem(), f = a.changedTouches[0].pageX - this._touchStartCoordinate[0], d = Date.now();
                this._preventDefaultWhenStartTouch && a.preventDefault();
                b.removeEventListener("touchmove", this._touchMoveHandler, !1);
                b.removeEventListener("touchend",
                    this._touchEndHandler, !1);
                b.removeEventListener("touchcancel", this._touchEndHandler, !1);
                clearTimeout(this._doTouchMoveTimer);
                this._doTouchMoveTimer = null;
                if (6 < Math.abs(f) && 1E3 > d - this._touchStartTime || Math.abs(f) > .3 * this._screenWidth)this.onSlide(0 < f ? "right" : "left"); else this.resetTranslate()
            }, _doTouchMove: function () {
                this.translateTo(this._touchStartTranslate + (this._touchMoveCoordinate[0] - this._touchStartCoordinate[0]));
                this._doTouchMoveTimer = null
            }, _translateSmoothEnd: function () {
                this.onSlideEnd();
                this._translating = !1
            }, _elem: function () {
                return b.default.findDOMNode(this)
            }, _getTranslateX: function () {
                var a = this._elem(), a = this._translateStylePattern.exec(a.style.transform || a.style.webkitTransform), b = 0;
                a && (b = parseFloat(a[1]));
                return b
            }, _enableTransition: function () {
                var a = this._elem();
                a.style.transitionDuration = a.style.webkitTransitionDuration = "0.3s"
            }, _disableTransition: function () {
                var a = this._elem();
                a.style.transitionDuration = a.style.webkitTransitionDuration = "0s"
            }, _setTranslateStyle: function (a) {
                var b = this._elem();
                this._currentTranslate =
                    a;
                b.style.transform = b.style.webkitTransform = "translateX(" + a + "px) translateZ(0px)"
            }
        }
    }, 387: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        a(198);
        a(388);
        var c = a(7), e = b(c), f = a(2), m = b(f), g = a(4), h = b(g), p = a(13), l = b(p), n = a(390), r = b(n), q = a(15), y = b(q), w = a(30), t = b(w), v = a(288), A = b(v), x = a(221), z = b(x), D = a(204), u = b(D), Q = a(391), G = b(Q), E = a(291), R = b(E), M = a(308), F = b(M), H = a(309), B = b(H), K = a(295), S = b(K), V = a(392), L = b(V), N = a(349), W = b(N), ba = a(357), O = b(ba),
            J = a(393), ca = b(J), I = a(397), C = b(I), ia = a(399), fa = b(ia), wa = a(400), oa = b(wa), pa = a(401), Z = b(pa), qa = a(403), xa = b(qa), ga = a(404), ja = b(ga), da = a(407), ha = b(da), ra = a(408), ya = b(ra), ka = a(410), za = b(ka), aa = a(411), Qa = b(aa), Aa = a(414), la = b(Aa), Ra = a(415), Ga = b(Ra), Ba = a(416), ta = b(Ba), ua = a(417), va = b(ua), ea = a(418), Ha = b(ea), Ia = a(419), La = b(Ia), Ca = a(420), Sa = b(Ca), Ma = a(303), ma = b(Ma), Da = a(266), U = b(Da), Ea = a(304), Na = b(Ea), Oa = a(421), P = b(Oa), na = a(429), Fa = b(na), T = a(432), Y = b(T), Pa = a(430), sa = b(Pa), Ta = a(425), X = b(Ta), Ua = a(435), Va = b(Ua),
            Wa = a(436), Ja = b(Wa), Xa = a(426), Ka = b(Xa), Ya = a(427), Za = b(Ya);
        a(437);
        var $a = t.default.createClass({
            displayName: "RoomPage", mixins: [A.default, z.default, u.default, G.default], getState: function (a) {
                return {
                    baseframe: a.baseFrame,
                    user: a.user,
                    live: a.live,
                    page: a.page.room,
                    livevideo: a.room.livevideo,
                    leLiveVideo: a.room.leLiveVideo,
                    spectator: a.room.spectator,
                    owner: a.room.owner,
                    gift: a.room.gift,
                    chatlist: a.room.chatlist,
                    chatform: a.room.chatform,
                    roomuser: a.room.user,
                    song: a.room.song,
                    fantop: a.room.fantop,
                    redEnvelope: a.room.redEnvelope,
                    notice: a.notice
                }
            }, componentWillMount: function () {
                P.default.setup()
            }, render: function () {
                var a = this.state.owner, b = this.state.page, f = this.state.spectator, c = this.state.livevideo, e = this.state.leLiveVideo, g = this.state.gift, d = this.state.redEnvelope, h = this.state.chatlist, n = this.state.chatform, q = this.state.song, r = this.state.fantop, p = this.state.user, k = this.state.notice, x = this.state.baseframe.get("showingSideNav") || this.state.baseframe.get("showingIndexNav") || n.get("showingForm"), e = e.get("streamingName") ? t.default.createElement(C.default,
                    {
                        width: b.get("videoWidth"),
                        height: b.get("videoHeight"),
                        avatar: a.get("avatar"),
                        hideAway: b.get("hideAwayPlayer"),
                        onHideBoard: this.onHidePlayerBoard,
                        onShowBoard: this.onShowPlayerBoard,
                        streamingName: e.get("streamingName")
                    }) : t.default.createElement(ca.default, {
                        src: c.get("streaming"),
                        width: b.get("videoWidth"),
                        height: b.get("videoHeight"),
                        poster: c.get("poster"),
                        avatar: a.get("avatar"),
                        liveType: c.get("liveType"),
                        hideAway: b.get("hideAwayPlayer"),
                        showGuide: m.default.baidu,
                        onHideBoard: this.onHidePlayerBoard,
                        onShowBoard: this.onShowPlayerBoard,
                        onResourceBreak: this.onResourceBreak
                    }), e = t.default.createElement("div", {
                        className: "video-area",
                        style: {height: b.get("videoHeight")}
                    }, e, t.default.createElement(Ga.default, {amount: a.get("redEnvelopeAmount")})), y = t.default.createElement(oa.default, {
                        active: b.get("mainTabActive"),
                        spectatorAmount: f.get("spectatorAmount"),
                        privateChatArrival: b.get("privateChatArrival"),
                        onChangeMainTab: this.onChangeMainTab
                    }), w = t.default.createElement(L.default, {
                        followed: a.get("following"),
                        onClick: this.onClickFollowButton
                    }),
                    v = "spectator" == b.get("mainTabActive") ? t.default.createElement(za.default, {
                        spectatorInfo: f,
                        active: b.get("spectatorCategoryActive"),
                        onChange: this.onClickSpectatorCategroyTab
                    }) : null, z = g.get("showingGiftStore") ? t.default.createElement(ja.default, {
                        gift: g.get("gift"),
                        selected: g.get("selectedGift"),
                        currentCategory: g.get("currentCategory"),
                        target: g.get("sendGiftTo"),
                        amount: g.get("giftAmount"),
                        coin6: Number(p.getIn(["info", "coin6"])),
                        inventory: g.get("inventoryGift"),
                        onSelectGift: this.onSelectGift,
                        onChangeCategory: this.onChangeGiftCategory,
                        onSelectGiftAmount: this.onSelectGiftAmount,
                        onSendGift: this.onSendGift,
                        onClose: this.onCloseGiftStore
                    }) : null, d = b.get("showingRoomPanel") ? t.default.createElement(xa.default, {
                        redEnvelopeAmount: d.get("amount"),
                        onClickGiftButton: this.onClickPanelGiftButton,
                        onClickSayButton: this.onClickPanelSayButton,
                        onClickRedbagButton: this.onClickPanelRedbagButton
                    }) : null, N = "pubchat" != b.get("mainTabActive") || g.get("showingGiftStore") ? null : t.default.createElement(Z.default, {
                        height: b.get("chatListHeight"), list: h.get("publicChat"),
                        gift: g.get("gift"), pauseUpdate: x, onClickAlias: this.onClickChatListAlias
                    }), h = "prichat" == b.get("mainTabActive") ? t.default.createElement(Z.default, {
                        height: b.get("chatListHeight"),
                        list: h.get("privateChat"),
                        myid: l.default.info && l.default.info.id,
                        pauseUpdate: x,
                        onClickAlias: this.onClickChatListAlias
                    }) : null, u = b.get("spectatorCategoryActive"), x = "guard" == u ? f.get("spectatorGuard") : "manager" == u ? f.get("spectatorManager") : f.get("spectator"), f = "citizen" == u && f.get("showingMoreSpectatorButton"), f = "spectator" == b.get("mainTabActive") ?
                        t.default.createElement(ha.default, {
                            list: x,
                            height: b.get("spectatorListHeight"),
                            showmore: f,
                            onClickItem: this.onClickSpectatorListItem,
                            onDemandMore: this.demandMoreSpectator
                        }) : null, x = "more" == b.get("mainTabActive") ? t.default.createElement(va.default, {onClickItem: this.onClickMoreFunctionItem}) : null, u = this.getEmotionListAndSize(), n = n.get("showingForm") ? t.default.createElement(Qa.default, {
                        ref: "chatform",
                        icon: n.get("showingEmotionLayer") ? "keyboard" : "emotion",
                        secret: n.get("secret"),
                        target: n.get("target"),
                        targetList: n.get("targetList"),
                        emotionList: u[0],
                        emotionSize: u[1],
                        emotionCategoryActive: n.get("emotionCategoryActive"),
                        onClickEmotionCategoryTab: this.onClickEmotionCategoryTab,
                        onClickIcon: this.onClickChatFormAppearEmotionLayerIcon,
                        onClickSecret: this.onClickChatFormSecretIcon,
                        onSelectTarget: this.onSelectChatTarget,
                        onFocus: this.onFocusChatForm,
                        onBlur: this.onBlurChatForm,
                        onClose: this.onCloseChatForm,
                        onSubmit: this.onChatFormSubmit
                    }) : null, u = b.get("showingSpectatorMenu") ? t.default.createElement(ya.default, {
                        spectator: b.get("selectedSpectator"),
                        onClose: this.onCloseSpectatorMenu, onClickButton: this.onClickSpectatorActionButtion
                    }) : null, g = g.getIn(["waitToPresent", 0]) && t.default.createElement(la.default, {
                            data: g.getIn(["waitToPresent", 0]),
                            gift: g.get("gift"),
                            animation: !(m.default.qq || m.default.uc),
                            topPosition: b.get("presentGiftTopPosition"),
                            onPresentComplete: this.presentNextGift
                        }), q = q.get("showing") ? t.default.createElement(ta.default, {
                        list: q.get("songList"),
                        memo: q.get("songMemo"),
                        profile: a,
                        onClose: this.onCloseSongList,
                        onDemand: this.onDemandSong
                    }) :
                        null, A = b.get("showingAppBanner") && t.default.createElement(S.default, {
                            style: {top: b.get("appBannerTop")},
                            className: "room",
                            canCollapse: !0,
                            collapsed: b.get("collapsedAppBanner"),
                            compact: !0,
                            onNeedLogin: U.default.showDownloadAppConfirm,
                            onCollapse: this.collapseAppBanner
                        }), c = r.get("showing") && t.default.createElement(Sa.default, {
                            data: r.get("fanstop"),
                            activeCategory: r.get("activeCategory"),
                            islive: 10 == c.get("liveType"),
                            onClose: this.closeFansTop,
                            onChangeCategory: this.changeFansTopCategory
                        }), r = k.get("chargeConfirm") &&
                        t.default.createElement(B.default, {
                            text: "\u60a8\u7684\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u5145\u503c\u3002",
                            okayText: "\u9a6c\u4e0a\u5145\u503c",
                            onOkay: this.toCharge,
                            onCancel: U.default.hideChargeConfirm
                        }), k = k.get("downloadAppConfirm") && t.default.createElement(W.default, null);
                "2" == p.getIn(["info", "privInfo", "status"]) ? p = t.default.createElement(F.default, {
                    text: "\u5f88\u9057\u61be\uff0c\u60a8\u5df2\u7ecf\u88ab\u8e22\u51fa\u672c\u623f\u95f4\u3002",
                    okayText: "\u77e5\u9053\u4e86",
                    onClick: this.onBack
                }) : b.get("requirePassword") ?
                    p = t.default.createElement("div", {className: "mainframe"}, t.default.createElement(Ha.default, {onSubmit: this.onSubmitEnterPrivateForm})) : b.get("roomFull") ? p = t.default.createElement(F.default, {
                    text: "\u672c\u623f\u95f4\u4eba\u6570\u5df2\u6ee1\uff0c\u60a8\u9700\u8981\u8d2d\u4e70 VIP \u6216 \u968f\u610f\u8fdb \u624d\u53ef\u4ee5\u8fdb\u5165\u3002",
                    onClick: this.onBack
                }) : b.get("nonsupport") ? (p = this.state.live.getIn(["synopsis", "u1", "list"]), p = t.default.createElement("div", {className: "mainframe"}, e, t.default.createElement(S.default,
                    {
                        className: "room",
                        subtitle: "\u4e0e " + a.get("alias") + " \u804a\u5929\u4e92\u52a8",
                        onNeedLogin: U.default.showDownloadAppConfirm
                    }), t.default.createElement(O.default, {
                    list: p,
                    categoryName: "\u70ed\u95e8\u76f4\u64ad",
                    showMore: !0,
                    onClickMore: this.toIndex
                }), k)) : p = b.get("connecting") ? t.default.createElement("div", {className: "mainframe"}, e, t.default.createElement(La.default, null), k) : t.default.createElement("div", {className: "mainframe"}, e, t.default.createElement("div", {className: "room-belt"}, t.default.createElement("section",
                    null, y), t.default.createElement("section", null, w)), N, h, f, x, d, v, z, n, u, g, q, A, k, c, r);
                k = this.getViewportClassName(this.state.baseframe, "viewport-room" + (m.default.nonstandardPlayer ? " nonstandard" : "") + (b.get("nonsupport") ? " nonsupport" : ""));
                return t.default.createElement("div", {
                    className: k,
                    style: {height: b.get("windowHeight")}
                }, t.default.createElement(R.default, {
                    titleComponent: fa.default,
                    "title-alias": a.get("alias"),
                    "title-rid": a.get("rid"),
                    "title-wealthrank": a.get("wealthrank"),
                    "title-onClick": this.onClickStarProfile,
                    baseFrame: this.state.baseframe,
                    user: this.state.user,
                    notice: this.state.notice
                }), p)
            }, componentDidUpdate: function (a, b) {
                this.state.page.get("nonsupport") && Na.default.get("synopsis")
            }, componentWillUnmount: function () {
                P.default.teardown()
            }, hideAllOverlay: function () {
                X.default.hideForm();
                Ka.default.hide();
                Y.default.hideGiftStore();
                Ja.default.hide();
                P.default.hideSpectatorMenu();
                U.default.hideLoginConfirm();
                ma.default.hideSideNav();
                ma.default.hideIndexNav()
            }, onSelectGift: function (a) {
                Y.default.selectGift(a)
            },
            onSelectGiftAmount: function (a) {
                Y.default.changeGiftAmount(Number(a))
            }, onCloseGiftStore: function () {
                Y.default.hideGiftStore()
            }, onChangeGiftCategory: function (a) {
                Y.default.changeCategory(a)
            }, onClickPanelGiftButton: function () {
                l.default.isLogin() ? Y.default.showGiftStore() : U.default.showLoginConfirm()
            }, onClickPanelSayButton: function () {
                l.default.isLogin() ? X.default.showPublicChatForm() : U.default.showLoginConfirm()
            }, onClickPanelRedbagButton: function () {
                l.default.isLogin() ? Va.default.send(this.state.owner.get("uid")) :
                    U.default.showLoginConfirm()
            }, onChangeMainTab: function (a, b) {
                P.default.switchMainTab(a)
            }, onClickSpectatorListItem: function (a) {
                var b = a.currentTarget.getAttribute("data-uid"), f = this.state.page.get("selectedSpectator"), b = f && b == f.get("uid") ? "" : b;
                a.preventDefault();
                P.default.selectSpectator(b) && P.default.showSpectatorMenu()
            }, onClickSpectatorCategroyTab: function (a) {
                P.default.changeSpectatorCategory(a)
            }, onClickSpectatorActionButtion: function (a, b) {
                if (l.default.isLogin())switch (b) {
                    case "public-talk":
                        X.default.showPublicChatForm();
                        X.default.selectTarget(this.state.page.get("selectedSpectator"));
                        break;
                    case "private-talk":
                        X.default.showPrivateChatForm();
                        X.default.selectTarget(this.state.page.get("selectedSpectator"));
                        break;
                    case "send-present":
                        Y.default.showGiftStore();
                        Y.default.selectTarget(this.state.page.get("selectedSpectator"));
                        break;
                    case "disable-talk":
                        sa.default.disableTalk(this.state.page.getIn(["selectedSpectator", "uid"]), this.state.owner.get("uid"));
                        break;
                    case "enable-talk":
                        sa.default.enableTalk(this.state.page.getIn(["selectedSpectator",
                            "uid"]), this.state.owner.get("uid"));
                        break;
                    case "kickout":
                        sa.default.kickout(this.state.page.getIn(["selectedSpectator", "uid"]), this.state.owner.get("uid"))
                } else U.default.showLoginConfirm()
            }, onCloseChatForm: function () {
                X.default.hideForm()
            }, onClickEmotionCategoryTab: function (a) {
                a = a.target.getAttribute("data-name");
                var b = this.state.roomuser.getIn(["info", "prop"]).toArray(), f = sa.default.isVIP(b), b = sa.default.isGuard(b);
                "vip" != a || f ? "guard" != a || b ? X.default.changeEmotionCategory(a) : alert("\u4f60\u4e0d\u662f\u672c\u623f\u95f4\u5b88\u62a4\uff0c\u65e0\u6cd5\u4f7f\u7528\u6b64\u8868\u60c5") :
                    alert("\u4f60\u8fd8\u6ca1\u6709VIP\u6216\u8005\u7eff\u5361\uff0c\u65e0\u6cd5\u4f7f\u7528\u6b64\u8868\u60c5")
            }, onClickChatFormAppearEmotionLayerIcon: function (a) {
                X.default.toggleEmotionLayer()
            }, onClickChatFormSecretIcon: function () {
                X.default.toggleSecret()
            }, onSelectChatTarget: function (a) {
                X.default.selectTarget(a.target.value)
            }, onChatFormSubmit: function (a) {
                this.refs.chatform.refs.form.clearField();
                X.default.chat(this.state.owner.get("uid"), this.state.roomuser.get("authKey"), a)
            }, onFocusChatForm: function (a) {
                X.default.hideEmotionLayer()
            },
            onBlurChatForm: function () {
            }, onClickChatListAlias: function (a) {
                a = a.currentTarget.getAttribute("data-id");
                P.default.selectSpectator(a) && P.default.showSpectatorMenu()
            }, onBack: function (a) {
                e.default.push("/")
            }, onClickFollowButton: function (a) {
                l.default.isLogin() ? this.state.owner.get("following") ? Fa.default.unfollow() : Fa.default.follow() : U.default.showLoginConfirm()
            }, getEmotionListAndSize: function () {
                var a = [], b = this.state.chatform.get("emotionCategoryActive"), f = "normal" == b ? r.default.EMOTION_NORMAL : "vip" ==
                b ? r.default.EMOTION_VIP : r.default.EMOTION_GUARD, c = r.default["EMOTION_" + b.toUpperCase() + "_URL"], e;
                for (e in f)f.hasOwnProperty(e) && a.push({src: c + "/face_" + e + ".png", text: f[e]});
                b = r.default["EMOTION_" + b.toUpperCase() + "_SIZE"];
                return [a, b]
            }, onCloseSpectatorMenu: function () {
                P.default.hideSpectatorMenu()
            }, onSendGift: function () {
                Y.default.sendGift(this.state.roomuser.get("authKey"), this.state.page.get("roomID"))
            }, onDemandSong: function (a, b) {
                Ja.default.demandSong(a, b, this.state.owner.get("uid"))
            }, onCloseSongList: function () {
                Ja.default.hide()
            },
            onClickMoreFunctionItem: function (a, b) {
                switch (b) {
                    case "song":
                        l.default.isLogin() ? Ja.default.show() : U.default.showLoginConfirm();
                        break;
                    case "top":
                        Ka.default.show();
                        break;
                    case "info":
                        e.default.push("/" + this.state.owner.get("rid") + "/synopsis")
                }
            }, onSubmitEnterPrivateForm: function (a) {
                l.default.isLogin() ? P.default.enterPrivateRoom(this.state.owner.get("uid"), a) : U.default.showLoginConfirm()
            }, onHidePlayerBoard: function () {
                m.default.nonstandardPlayer || ma.default.hideHeader()
            }, onShowPlayerBoard: function () {
                ma.default.showHeader()
            },
            onClickLoginConfirmButton: function () {
                U.default.hideLoginConfirm()
            }, onClickStarProfile: function () {
                e.default.push("/" + this.state.owner.get("rid") + "/synopsis")
            }, collapseAppBanner: function () {
                P.default.collapseAppBanner()
            }, onResourceBreak: function () {
                Za.default.refreshLiveStreaming()
            }, demandMoreSpectator: function () {
                sa.default.fetchAllSpectator()
            }, closeFansTop: function () {
                Ka.default.hide()
            }, changeFansTopCategory: function (a, b) {
                Ka.default.changeCategory(a)
            }, presentNextGift: function () {
                Y.default.presentNextGift()
            },
            toCharge: function () {
                e.default.push(h.default.make(y.default.text("/pay"), {next: e.default.getPath()}))
            }, toIndex: function () {
                e.default.push("/")
            }
        });
        k.default = $a
    }, 388: function (d, k, a) {
        k = a(389);
        "string" === typeof k && (k = [[d.id, k, ""]]);
        a(201)(k, {});
        k.locals && (d.exports = k.locals)
    }, 389: function (d, k, a) {
        k = d.exports = a(200)();
        k.push([d.id, '.more-function-icon,i.fun-guard,i.fun-info,i.fun-song,i.fun-top{display:inline-block;width:61.5px;height:61.5px;background-image:url("//vr1.6rooms.com/v/v6/fd9669ee0593a12b185395adcd446dc0.png");background-size:300px 75px}i.fun-song{background-position:0 0}i.fun-top{background-position:-75px 0}i.fun-guard{background-position:-150px 0}i.fun-info{background-position:-225px 0}.viewport-room{width:100%;height:100%;overflow:hidden;background:#f8f8f8}.viewport-room .g-header{position:absolute;top:0;background:hsla(0,0%,100%,.8);z-index:2}.luffy.room{position:absolute;right:0;z-index:1}.viewport-room.nonstandard .g-header{position:static;background:#fff url("//vr1.6rooms.com/v/e1/1a5158d59b13ef0819e6741eb4a89ac3.png") repeat 0 0}.viewport-room.nonsupport{height:auto;overflow:auto}.viewport-room.nonsupport .luffy.room{position:relative}.viewport-room.nonsupport .g-header{position:static}.viewport-room.nonsupport .livelistwithtitle h3.title{color:#333;font-size:16px;margin:0;padding:16px 10px 10px 12px;font-weight:500;display:-webkit-box;display:flex}.viewport-room.nonsupport .livelistwithtitle h3.title .more{font-size:13px;color:#999;padding-top:4px}.viewport-room.nonsupport .livelistwithtitle h3.title p{margin:0;padding:0}.viewport-room.nonsupport .livelistwithtitle h3.title p:first-of-type{-webkit-box-flex:1;flex:1}.viewport-room.nonsupport .livelistwithtitle h3.title:before{content:"";display:block;width:3px;height:22px;background:#d93629;position:relative;left:-5px}.viewport-room.nonsupport .livelistwithtitle .livelist{box-sizing:border-box;padding:0 10px}@media (min-width:768px){.luffy.room{display:none}}.room-title{padding-top:5px}.room-title p{margin:0;padding:0;line-height:1}.room-title .alias-and-rank{height:20px;line-height:20px;font-size:16px;color:#000;padding:5px 0 3px}.room-title .alias-and-rank i{vertical-align:top;margin-left:3px}.room-title .rid{font-size:12px;color:#333}@media (min-width:768px){.room-title{padding-top:9px}}.followbtn{width:60px;height:25px;font-size:13px}.followbtn.followed{width:80px;background:#666;color:#fff}.followbtn.followed:before{content:" ";display:inline-block;width:8px;height:8px;background-image:url("//vr1.6rooms.com/v/x3/bfc3e7f10247fd0afdc8d962fb3d165a.png");background-size:200px 200px;background-position:-100px 0;margin:0 2px 0 0}.followbtn.unfollow{background:#64b340;color:#fff}.followbtn.unfollow:before{content:" ";display:inline-block;width:9px;height:9px;background-image:url("//vr1.6rooms.com/v/x3/bfc3e7f10247fd0afdc8d962fb3d165a.png");background-size:200px 200px;background-position:-100px -50px;margin:-1px 3px 0 0}.video-area{width:100%;position:relative}.video-area .video{text-align:center}.video-area .video-mask{width:100%;position:absolute;left:0;top:0;z-index:3}.video-area .video-curtain{display:inline-block;text-align:center;color:#fff}.video-area .video-curtain .container{width:100%;height:100%;box-sizing:border-box;position:absolute;left:0;top:0;background:rgba(0,0,0,.5);z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.video-area .video-curtain .text{display:block;text-align:center;color:#fff;font-size:16px}.video-area .video-curtain .btn{margin:30px 0 0;padding:10px 20px;color:#fff;background-color:#d93629}.video-area .video-curtain .bg{width:100%;height:100%;position:absolute;left:0;top:0;background-size:cover;background-position:50%}.video-area .play-guide{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);z-index:5}.video-area .play-guide .button{width:149.66667px;height:109.33333px;background-image:url("//vr1.6rooms.com/v/t7/d3a64edfbe32a3972d9a5e9f3a9ba5ee.png");background-size:149.66667px 109.33333px;top:150px;margin-left:-105px}.video-area .play-guide .button,.video-area .play-guide .girl{background-repeat:no-repeat;background-position:0 0;position:absolute;left:50%}.video-area .play-guide .girl{width:77px;height:90px;background-image:url("//vr1.6rooms.com/v/y0/d07331c6b58fee92b194bde37f64064d.png");background-size:77px 176.66667px;top:173px;margin-left:45px;-webkit-animation:girl .7s infinite steps(2);animation:girl .7s infinite steps(2)}@keyframes "girl"{0%{background-position:0 0}to{background-position:0 -180px}}@-webkit-keyframes "girl"{0%{background-position:0 0}to{background-position:0 -180px}}.room-belt{display:-webkit-box;display:flex;height:36px}.room-belt section:first-of-type{-webkit-box-flex:1;flex:1}.room-belt section:last-of-type{width:55px;height:100%}.room-belt section:last-of-type .followbtn{display:block;width:100%;height:100%;padding:0;border:0;border-radius:0;background:#3c6;font-size:13px}.room-belt section:last-of-type .followbtn:active{opacity:.7}.room-belt section:last-of-type .followbtn.followed{background:#999}.room-belt section:last-of-type .followbtn.followed:before{display:none}.room-maintab{display:-webkit-box;display:flex;list-style:none;margin:0;padding:0;background-color:#f0f0f0;border-bottom:1px solid #d9d9d9}.room-maintab li{box-sizing:border-box;min-width:50px;height:35px;color:#666;padding:0 18px;text-align:center;font-size:14px;line-height:35px;position:relative;white-space:nowrap}.room-maintab li.spectator{-webkit-box-flex:1;flex:1}.room-maintab li.on{color:#d93629}.room-maintab li.on:after{content:"";display:inline-block;width:50px;height:3px;background:#d93629;color:#d93629;position:absolute;bottom:-1px;left:50%;margin-left:-25px}.room-maintab li.on.spectator:after{width:80px;margin-left:-40px}.room-maintab .new{display:inline-block;width:4px;height:4px;background:red;border-radius:4px;position:absolute;left:20%;top:6px}.room-chatlist{overflow-y:scroll;z-index:0;-webkit-overflow-scrolling:touch;box-sizing:border-box;padding-top:16px;color:#222}.room-chatlist .line{padding:0 15px 15px;font-size:14px;line-height:1.5}.room-chatlist .line.sys-info,.room-chatlist .line.sys-info a,.room-chatlist .line.welcome,.room-chatlist .line.welcome a{color:#666}.room-chatlist .line.padding{padding-left:55px}.room-chatlist .line.padding .time{margin-left:-40px}.room-chatlist .time{width:40px;color:#999;display:inline-block}.room-chatlist .name{color:purple;padding:0 2px}.room-chatlist .rid{color:#969}.room-chatlist .gift{display:inline-block;width:23px;height:23px;background-size:23px 23px;vertical-align:middle}.room-chatlist .username i{margin-right:3px}.room-chatlist .redenvelope{margin-left:5px}.room-chatlist .emoji.normal{width:18px;height:18px}.room-chatlist .emoji.guard{width:37.33333px;height:39.66667px}.room-chatlist i,.room-chatlist img{vertical-align:middle}.room-chatlist a{color:#222}.room-panel{display:-webkit-box;display:flex;width:100%;height:50px;padding:0;border-top:1px solid #dbdbdb;box-sizing:border-box;background:#fff;position:fixed;bottom:0;left:0;right:0}.room-panel section{padding-top:6px}.room-panel section:nth-of-type(2){-webkit-box-flex:1;flex:1;border-width:0 1px;border-style:solid;border-color:#eee;padding:9px 10px 0}.room-panel section:first-of-type,.room-panel section:last-of-type{width:58px;text-align:center}.room-panel .gift,.room-panel .redbag{display:inline-block;background-image:url("//vr1.6rooms.com/v/x3/bfc3e7f10247fd0afdc8d962fb3d165a.png");background-size:200px 200px;background-position:0 -50px;width:39px;height:39px;margin:0 10px}.room-panel .redbag{background-position:0 0;position:relative}.room-panel .redbag span{background:red;width:15px;height:15px;border-radius:15px;line-height:15px;color:#fff;position:absolute;right:0;top:0;font-size:8px;text-align:center}.room-panel .say{display:block;box-sizing:border-box;width:100%;border:1px solid #dcdcdc;border-radius:16px;height:33px;line-height:31px;padding:0 16px;font-size:14px;color:#999}.room-panel .gift:active,.room-panel .redbag:active,.room-panel .say:active{opacity:.5}.room-giftstore{overflow:hidden;z-index:10}.room-giftstore,.room-giftstore .clickable{position:absolute;width:100%;height:100%;left:0;top:0}.room-giftstore .clickable{background-color:rgba(0,0,0,.5)}.room-giftstore .giftstore{width:100%;height:290px;position:absolute;left:0;bottom:0;background:#fff}.room-giftstore .panel{width:100%;height:123px;position:absolute;bottom:0;left:0;background:#f9f9f9;border-top:1px solid #d6d6d6;padding:10px 12px;box-sizing:border-box}.room-giftstore .panel div{padding:5px 0;font-size:15px;overflow:hidden}.room-giftstore .panel div.remaining{border-bottom:1px dashed #d6d6d6;padding:0 0 9px;margin-bottom:8px;font-size:16px}.room-giftstore .panel div.remaining .left{float:left}.room-giftstore .panel div.remaining .right{float:right;color:#d93629}.room-giftstore .panel div.remaining .right:after{content:" ";display:inline-block;background-image:url("//vr1.6rooms.com/v/x3/bfc3e7f10247fd0afdc8d962fb3d165a.png");background-size:200px 200px;width:9px;height:15px;background-position:-150px -150px;margin:0 0 0 3px;position:relative;top:2px}.room-giftstore .panel div.remaining .count{color:#646464;padding:0 0 0 3px}.room-giftstore .panel select{-webkit-appearance:menulist-button;box-sizing:border-box;height:30px;vertical-align:middle;float:left;font-size:15px}.room-giftstore .panel .g-btn{padding:3px 12px;height:30px;float:right;font-size:inherit}.room-giftstore .panel .giftname,.room-giftstore .panel .target{padding:0 3px;color:#d93629}.room-giftstore .loading{padding:40px 0 0;text-align:center}.room-spectator-catetab{margin:0;padding:0;width:100%;height:41px;background:#f7f7f7;border-top:1px solid #dfdfdf;position:fixed;bottom:0;left:0;list-style:none;display:-webkit-box;display:flex}.room-spectator-catetab li{-webkit-box-flex:1;flex:1;line-height:41px;text-align:center}.room-spectator-catetab li.on{color:#d93629}.room-spectator-catetab .citizen:before,.room-spectator-catetab .guard:before,.room-spectator-catetab .manager:before{content:" ";display:inline-block;background-image:url("//vr1.6rooms.com/v/i5/e04581f07d5cbd2a0e8d92c8749f8440.png");background-size:75px 50px;width:35px/2;height:38px/2;background-position:0 0;margin-right:5px;position:relative;top:4px}.room-spectator-catetab .guard.on:before{background-position:0 -25px}.room-spectator-catetab .manager:before{width:33px/2;height:36px/2;background-position:-25px 0;top:3px}.room-spectator-catetab .manager.on:before{background-position:-25px -25px}.room-spectator-catetab .citizen:before{width:41px/2;height:34px/2;background-position:-50px 0;top:3px}.room-spectator-catetab .citizen.on:before{background-position:-50px -25px}.room-spectator-list{overflow-y:scroll;z-index:0;-webkit-overflow-scrolling:touch}.room-spectator-list .spectator{display:-webkit-box;display:flex;height:50px;border-bottom:1px solid #eee;font-size:15px}.room-spectator-list .spectator section{box-sizing:border-box}.room-spectator-list .spectator section:nth-of-type(1){width:50px;text-align:center;line-height:50px}.room-spectator-list .spectator section:nth-of-type(2){-webkit-box-flex:1;flex:1;padding:0 0 0 5px}.room-spectator-list .spectator section:nth-of-type(3){width:30px;padding:17px 0 0}.room-spectator-list .spectator p{margin:0;padding:5px 0 0}.room-spectator-list .spectator .role-icon{vertical-align:middle}.room-spectator-list .spectator .family-icon,.room-spectator-list .spectator .prop-icon,.room-spectator-list .spectator .seller{margin-left:10px}.room-spectator-list .spectator .family-icon{display:inline-block;width:36px;height:15px;background-repeat:no-repeat;position:relative;top:1px}.room-spectator-list .spectator .rank{display:inline-block;position:relative}.room-spectator-list .spectator .rid{padding:0 0 0 3px;color:#d93629}.room-spectator-list .spectator.offline section:last-of-type{visibility:hidden}.room-spectator-list .guest,.room-spectator-list .showmore{height:50px;line-height:50px;color:#666;text-align:center}.room-spectator-list .guest .iconfont,.room-spectator-list .showmore .iconfont{font-size:12px;vertical-align:middle;color:#999;margin-left:4px}.room-spectator-list .showmore:active{background:#eee}.spectator-action-button .btn{display:inline-block;font-size:14px;text-align:center;margin:5px 20px 5px 5px;width:60px}.spectator-action-button .btn span{display:block}.room-chatform{width:100%;position:fixed;top:0;bottom:0;left:0;right:0;z-index:10}.room-chatform .clickable{width:100%;height:100%}.room-chatform .main{width:100%;position:fixed;bottom:0;background:#f5f5f5}.room-chatformtarget{height:40px;box-sizing:border-box;background:#eee;border-top:1px solid #b3b3b3;padding:6px 15px 0}.room-chatformtarget select{box-sizing:border-box;font-size:14px;border-radius:3px;width:180px;height:27px;float:right;-webkit-appearance:menulist-button}.room-chatformtarget .secret{display:inline-block;float:left;padding-top:3px}.room-chatformtarget .secret.on{color:#d93629}.room-chatformtarget .secret:before{content:" ";display:inline-block;background-image:url("//vr1.6rooms.com/v/t4/290f0b79df7a81acaa1a80c722e76985.png");background-size:100px 50px;width:15px;height:12px;background-position:0 0;margin-right:3px}.room-chatformtarget .secret.on:before{background-position:-50px 0}.room-spectator-menu{position:absolute;width:100%;height:100%;left:0;top:0}.room-spectator-menu .clickable{width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.5)}.room-spectator-menu .main{width:100%;height:200px;position:absolute;bottom:0;background:#ecf4f6}.room-spectator-menu header{height:33px;font-size:15px;color:#000;background:#f5f5f5;border-top:1px solid #ccc;border-bottom:1px solid #ccc;text-align:center;line-height:33px}.room-spectator-menu .close{position:absolute;right:-5px;top:8px;width:30px;height:30px;display:block}.room-spectator-menu .spectator-action-button{padding:15px 0}.room-giftscreen{position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:10}.room-giftscreen .motion{width:311px;height:97.5px;position:absolute;left:50%;margin-left:-158.25px;bottom:-97.5px;font-size:13px;opacity:0;-webkit-transition-property:all;transition-property:all}.room-giftscreen .motion canvas{position:absolute;z-index:2}.room-giftscreen .motion .container{width:100%;height:100%;background-repeat:no-repeat;background-position:0 0;background-size:311px 97.5px;z-index:1}.room-giftscreen .motion .giftpic{position:absolute;left:180px;top:0;width:54px}.room-giftscreen .motion .who{float:left;width:200px;padding:30px 0 0 25px;margin:0;line-height:1.5}.room-giftscreen .motion .who b{color:#d93629;padding:0 5px 0 1em}.room-giftscreen .motion .count{padding:40px 0 0 4px;width:70px;margin:0;float:right}.room-giftscreen .motion .count b{color:#d93629;padding-left:2px}.room-redenvelope-layer{position:absolute;left:10px;top:10px;font-size:14px}.room-redenvelope-layer .icon{width:26px;text-align:center;background:#d93529;z-index:1}.room-redenvelope-layer .amount,.room-redenvelope-layer .icon{height:26px;border-radius:13px;line-height:26px;display:inline-block;color:#fff;position:relative}.room-redenvelope-layer .amount{min-width:30px;padding:0 12px 0 20px;background:rgba(0,0,0,.7);left:-16px}.room-songlist p{margin:0;padding:0;line-height:1}.room-songlist .g-draweroverlay-wrap{height:auto}.room-songlist .list{max-height:200px;overflow:scroll;background:#fff;-webkit-overflow-scrolling:touch}.room-songlist .list ul{list-style:none;margin:0;padding:0}.room-songlist .list li{display:-webkit-box;display:flex;border-bottom:1px solid #c7c7c7}.room-songlist .list li p{padding:4px 0}.room-songlist .list li .g-btn{vertical-align:middle}.room-songlist .list li .title{font-size:14px}.room-songlist .list li .singer{font-size:13px;color:#727272}.room-songlist .list li section{padding:5px 0;box-sizing:border-box;height:50px}.room-songlist .list li section:first-of-type{-webkit-box-flex:1;flex:1;padding-left:14px}.room-songlist .list li section:last-of-type{padding-right:14px;line-height:40px}.room-songlist .list li:last-of-type{border:0}.room-songlist .g-btn{height:33px;vertical-align:middle}.room-songlist .dark{height:122px;padding:0 0 20px;background:#f5f5f5;color:#9e9e9e;border-top:1px solid #bbb}.room-songlist .custom{display:-webkit-box;display:flex;padding:10px 5px 5px}.room-songlist .custom input{padding:2px;border-radius:2px;height:33px;font-size:14px;box-sizing:border-box;border:1px solid #bbb;width:100%;vertical-align:top}.room-songlist .custom section{height:35px;box-sizing:border-box;padding:0 5px}.room-songlist .custom section:first-of-type{-webkit-box-flex:1;flex:1}.room-songlist .custom .g-btn{vertical-align:top}.room-songlist .memo{padding:3px 0 10px 10px;font-size:12px;line-height:1.5;color:#bbb}.room-morepanel{box-sizing:border-box;width:100%;padding:16px 0 16px 16px;margin:0;list-style:none}.room-morepanel li{display:inline-block;margin:0 16px 0 0;padding:0}.room-morepanel li span{display:block;text-align:center;color:#5e5e5e;font-size:14px}.room-morepanel li:active{opacity:.7}.room-enterprivateform{padding:30px 50px 0}.room-enterprivateform input{box-sizing:border-box;width:100%;height:40px;border:1px solid #ccc;padding:3px 9px;border-radius:3px}.room-enterprivateform .g-btn{width:100px;height:40px}.room-nonsupport{border-top:3px solid #d93629;padding:2em;color:#666;line-height:1.6}.room-nonsupport .g-btn{display:block;margin:0 auto;width:100%;padding:.3em 0;font-size:1.6em;text-align:center}.room-nonsupport .or{text-align:center}@media (max-width:320px){.room-maintab li{padding-right:5px;padding-left:5px}}.room-connecting{border-top:3px solid #d93629;color:#666}.room-connecting .spinner{vertical-align:top;margin-right:.5em}.room-connecting .connecting{padding:32px 0 0;text-align:center}.room-fanstop .g-toplist{padding-bottom:35px}.room-fanstop .tab{display:-webkit-box;display:flex;width:100%;padding:0;margin:0;list-style:none;position:fixed;bottom:0;background:#f5f5f5;border-top:1px solid #bbb}.room-fanstop .tab li{-webkit-box-flex:1;flex:1;height:35px;line-height:35px;text-align:center;position:relative;font-size:14px}.room-fanstop .tab li.on{color:#d93629}.room-fanstop .tab li.on:after{content:"";display:block;width:32px;height:2px;background:#d93629;font-size:0;line-height:0;position:absolute;left:50%;margin-left:-16px;bottom:3px}.room-gift-shelf{height:200px;overflow:hidden}.room-gift-shelf .category{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch}.room-gift-shelf .category ul{width:550px;list-style:none;margin:0;padding:0;border-bottom:1px solid #f0f0f0;color:#838383}.room-gift-shelf .category li{display:inline-block;width:50px;height:35px;line-height:35px;font-size:14px;text-align:center;vertical-align:top}.room-gift-shelf .category li.on{color:#d93629}.room-gift-shelf .carousel-paginate{padding:5px 0;margin:0;text-align:center}.room-gift-shelf .carousel-paginate span{display:inline-block;width:4px;height:4px;border-radius:50%;border:2px solid #ffd2ce;background-color:#ffd2ce;margin:0 3px}.room-gift-shelf .carousel-paginate span.on{background:transparent;border-color:#d93629}.room-gift-shelf .giftcell{display:inline-block;width:58px;padding:5px 0;border-radius:4px;text-align:center}.room-gift-shelf .giftcell i{display:inline-block;width:52px;height:52px;text-align:center;background-repeat:no-repeat;background-size:35px 35px;background-position:50%;border-radius:50%;border:1px solid transparent}.room-gift-shelf .giftcell .name{display:block;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.room-gift-shelf .giftcell .price{font-size:12px;color:#646464}.room-gift-shelf .giftcell.on i{border-color:#d93629}',
            ""])
    }, 390: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.default = {
            PRESENT_CATEGORY: [{text: "\u5e93\u5b58", flag: 11}, {text: "\u521d\u7ea7", flag: 1}, {
                text: "\u4e2d\u7ea7",
                flag: 2
            }, {text: "\u9ad8\u7ea7", flag: 3}, {text: "\u8c6a\u534e", flag: 4}, {
                text: "\u7279\u6b8a",
                flag: 5
            }, {text: "\u8da3\u5473", flag: 6}, {text: "\u4f34\u821e", flag: 7}, {
                text: "\u8d35\u65cf",
                flag: 8
            }, {text: "\u5957\u793c", flag: 9}, {text: "\u5b88\u62a4", flag: 10}],
            PRESENT_AMOUNT_SELECT: [["1\u4e2a", "1"], ["5\u4e2a", "5"], ["10\u4e2a", "10"], ["20\u4e2a",
                "20"], ["V(50\u4e2a)", "50"], ["\u5fc3(99\u4e2a)", "99"], ["\u7b11\u8138(100\u4e2a)", "100"], ["LOVE(300\u4e2a)", "300"], ["\u7231\u4e4b\u7bad(520\u4e2a)", "520"], ["\u6bd4\u7ffc\u53cc\u98de(999\u4e2a)", "999"], ["\u4e00\u751f\u4e00\u4e16(1314\u4e2a)", "1314"], ["\u751f\u751f\u4e16\u4e16(3344\u4e2a)", "3344"]],
            EMOTION_NORMAL_URL: "http://vr0.6rooms.com/img/emotion",
            EMOTION_NORMAL_SIZE: [32, 32],
            EMOTION_NORMAL: {
                0: "/\u72c2\u7b11",
                1: "/\u5927\u7b11",
                2: "/\u60ca\u8bb6",
                3: "/\u5bb3\u7f9e",
                4: "/\u7a83\u7b11",
                5: "/\u53d1\u6012",
                6: "/\u5927\u54ed",
                7: "/\u8272\u8272",
                8: "/\u574f\u7b11",
                9: "/\u706b\u5927",
                10: "/\u6c57",
                11: "/\u5978\u7b11",
                12: "/\u6b22\u8fce",
                13: "/\u518d\u89c1",
                14: "/\u767d\u773c",
                15: "/\u6316\u9f3b",
                16: "/\u9876",
                17: "/\u80dc\u5229",
                18: "/\u6b27\u8036",
                19: "/\u62b1\u62f3",
                20: "/\u56e7",
                21: "/\u6de1\u5b9a",
                22: "/\u7f8e\u5973",
                23: "/\u9753\u4ed4",
                24: "/\u795e\u9a6c",
                25: "/\u5f00\u5fc3",
                26: "/\u7ed9\u529b",
                27: "/\u98de\u543b",
                28: "/\u7728\u773c",
                29: "/V5",
                30: "/\u6765\u5427",
                31: "/\u56f4\u89c2",
                32: "/\u98d8\u8fc7",
                33: "/\u5730\u96f7",
                34: "/\u83dc\u5200",
                35: "/\u5e05",
                36: "/\u5ba1\u89c6",
                37: "/\u65e0\u8bed",
                38: "/\u65e0\u5948",
                39: "/\u4eb2\u4eb2",
                40: "/\u52fe\u5f15",
                41: "/\u540e\u540e",
                42: "/\u5410\u8840",
                44: "/\u5a9a\u773c",
                45: "/\u6101\u4eba",
                46: "/\u80bf\u4e48\u4e86",
                47: "/\u8c03\u620f",
                48: "/\u62bd",
                49: "/\u54fc\u54fc",
                50: "/bs",
                52: "/\u9e21\u51bb",
                53: "/\u773c\u998b",
                54: "/\u70ed\u6c57",
                55: "/\u8f93",
                56: "/\u77f3\u5316",
                57: "/\u8511\u89c6",
                58: "/\u54ed",
                59: "/\u9a82"
            },
            EMOTION_GUARD_URL: "http://vr0.6rooms.com/img/emotion-guard",
            EMOTION_GUARD_SIZE: [56, 59.5],
            EMOTION_GUARD: {
                10: "/\u88ab\u6241",
                11: "/\u53d8\u8138",
                12: "/\u5403\u996d",
                13: "/\u5439\u88d9\u5b50",
                14: "/\u6253\u52ab",
                15: "/\u61a8\u7b11",
                16: "/\u6cea\u6d41\u6ee1\u9762",
                17: "/\u50bb\u7b11",
                18: "/\u60ca\u5413",
                19: "/\u60ca\u6050",
                20: "/\u597d\u56e7",
                21: "/\u8e72\u5899\u89d2",
                22: "/\u53ef\u7231",
                23: "/\u59d4\u5c48\u843d\u6cea",
                24: "/\u62a0\u9f3b",
                25: "/\u4eb2\u4e00\u4e2a",
                26: "/\u8272\u8ff7\u8ff7",
                27: "/\u95ea\u95ea\u53d1\u5149",
                28: "/\u8650",
                29: "/\u5e78\u798f",
                30: "/\u88c5\u5e05",
                31: "/\u62cd\u7816",
                32: "/\u5de6\u5410",
                33: "/\u53f3\u5410",
                34: "/\u5de6\u95ea",
                35: "/\u53f3\u8eb2",
                0: "/\u767d\u5bcc\u7f8e",
                1: "/\u5fc3\u52a8\u7684\u611f\u89c9",
                2: "/\u5144\u5f1f\u4eec\u4e0a",
                3: "/\u6c42\u4ea4\u5f80",
                4: "/\u5ac1\u7ed9\u6211\u5427",
                5: "/\u5728\u4e00\u8d77",
                6: "/\u770b\u597d\u8001\u5a46",
                7: "/\u597d\u57fa\u53cb",
                8: "/\u5c4c\u7206\u4e86",
                9: "/\u8d70\u4f60"
            },
            EMOTION_VIP_URL: "http://vr0.6rooms.com/img/emotion-vip",
            EMOTION_VIP_SIZE: [84, 17],
            EMOTION_VIP: {
                0: "/\u55e8\u8d77\u6765",
                1: "/\u771f\u597d\u542c",
                2: "/\u9738\u6c14",
                3: "/\u7ea2\u5305\u5237\u8d77\u6765",
                4: "/\u592a\u6f02\u4eae\u4e86",
                5: "/\u9a6c\u4e0a\u6295\u7968",
                6: "/\u73ab\u7470\u5728\u54ea\u91cc",
                7: "/\u571f\u8c6a\u6765\u5566",
                8: "/\u7231\u6b7b\u4f60\u4e86",
                9: "/\u5575\u4e00\u4e2a",
                10: "/\u65b0\u8d27\u6c42\u5173\u6ce8",
                11: "/\u8981\u62b1\u62b1",
                12: "/\u5192\u4e2a\u6ce1",
                13: "/\u6709\u9ed1\u5e55",
                14: "/\u7231\u4f601314",
                15: "/\u597d\u751c\u5440",
                16: "/\u5751\u7239",
                17: "/\u5973\u6c49\u5b50",
                18: "/\u9f13\u638c",
                19: "/\u52a0\u6cb9",
                20: "/\u5929\u7136\u5446",
                21: "/\u8d5e"
            },
            VALID_PROP_CODE: "7829 7828 7827 7122 7569 7570 7103 7104 7105 7559 7859 7112".split(" ")
        }
    },
    391: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(7)) && d.__esModule ? d : {default: d}, c = (a = a(4)) && a.__esModule ? a : {default: a};
        k.default = {
            componentWillMount: function () {
                this._removeOverlayParam()
            }, componentDidMount: function () {
                b.default.on("change", this._overlayHistoChangeHandler)
            }, componentWillUnmount: function () {
                b.default.off("change", this._overlayHistoChangeHandler)
            }, _overlayHistoChangeHandler: function () {
                -1 == b.default.getPath().indexOf("overlay=1") && this.hideAllOverlay()
            },
            _removeOverlayParam: function () {
                var a = b.default.getPath(), f = a.split("?")[1];
                (f = c.default.param(f || "")) && "overlay" in f && (delete f.overlay, f = c.default.param(f), b.default.replace(f ? "?" + f : a.split("?")[0]))
            }
        }
    }, 392: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = Object.assign || function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b], e;
                    for (e in c)Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e])
                }
                return a
            };
        d = a(30);
        var e =
            b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = e.default.createClass({
            displayName: "FollowButton",
            mixins: [d.default, a.default],
            propTypes: {followed: e.default.PropTypes.bool, onClick: e.default.PropTypes.func},
            render: function () {
                var a = "g-btn followbtn", b, g = {};
                this.props.followed ? (a += " followed", b = "\u5df2\u5173\u6ce8") : (a += " unfollow", b = "\u5173\u6ce8");
                this.props.onClick && (g = {
                    onClick: this.onClick,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick
                });
                return e.default.createElement("button",
                    c({className: a, "data-status": this.props.followed}, g), b)
            },
            onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
            }
        });
        k.default = a
    }, 393: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = Object.assign || function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b], f;
                    for (f in c)Object.prototype.hasOwnProperty.call(c, f) && (a[f] = c[f])
                }
                return a
            }, e = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(3));
        d = a(30);
        var f = b(d);
        d = a(288);
        d = b(d);
        var m = a(221), m = b(m), g = a(394), h = b(g);
        a = a(395);
        var p = b(a);
        a = f.default.createClass({
            displayName: "RoomLiveVideo", mixins: [d.default, m.default], propTypes: {
                liveType: f.default.PropTypes.number,
                src: f.default.PropTypes.string,
                poster: f.default.PropTypes.string,
                avatar: f.default.PropTypes.string,
                width: f.default.PropTypes.number,
                height: f.default.PropTypes.number,
                showGuide: f.default.PropTypes.bool,
                onClick: f.default.PropTypes.func
            }, componentWillMount: function () {
                this._passGuide = this._started = !1
            }, render: function () {
                var a, b;
                a = {
                    style: {width: this.props.width + "px", height: this.props.height + "px"},
                    poster: this.props.poster,
                    pic: this.props.avatar,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick,
                    onClick: this.onClick
                };
                10 > this.props.liveType ? a = f.default.createElement(h.default, c({}, a, {
                    notice: "\u76f4\u64ad\u5df2\u7ed3\u675f",
                    ended: !0
                })) : this.props.src || this._started ?
                    this.props.src ? (a = e.omit(this.props, "onClick", "liveType", "hiddenBoard", "onPlay"), b = this.props.showGuide && !this._passGuide && f.default.createElement("div", {
                            className: "play-guide",
                            onClick: this.onClickGuide,
                            onTouchStart: this.startTraceTouch,
                            onTouchMove: this.traceTouchMove,
                            onTouchEnd: this.onClickGuide
                        }, f.default.createElement("div", {className: "button"}), f.default.createElement("div", {className: "girl"})), a = f.default.createElement(p.default, c({
                        ref: "player", hiddenBoard: this.props.showGuide && !this._passGuide,
                        onClick: this.props.onClick, onPlaying: this.onPlaying
                    }, a))) : a = f.default.createElement(h.default, c({}, a, {notice: "\u7b49\u5f85\u4e3b\u64ad\u5f00\u59cb"})) : a = f.default.createElement(h.default, c({}, a, {notice: "\u52a0\u8f7d\u4e2d"}));
                return f.default.createElement("div", {className: "video"}, a, b)
            }, componentDidUpdate: function (a) {
                !a.src && this.props.src && (this._started = !0)
            }, onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
            }, onClickGuide: function (a) {
                this.checkHandlerAvailable(a) &&
                (this.refs.player.play(), this._passGuide = !0, this.forceUpdate())
            }, onPlaying: function () {
                this._passGuide = !0;
                this.forceUpdate()
            }
        });
        k.default = a
    }, 394: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = Object.assign || function (a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b], f;
                    for (f in c)Object.prototype.hasOwnProperty.call(c, f) && (a[f] = c[f])
                }
                return a
            }, c = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] =
                a[c]);
            b.default = a;
            return b
        }(a(3)), e = (d = a(30)) && d.__esModule ? d : {default: d}, f = (a = a(261)) && a.__esModule ? a : {default: a};
        a = e.default.createClass({
            displayName: "RoomFakePlayer",
            propTypes: {
                pic: e.default.PropTypes.string,
                poster: e.default.PropTypes.string,
                notice: e.default.PropTypes.string,
                ended: e.default.PropTypes.bool
            },
            render: function () {
                var a = this.props.ended && e.default.createElement(f.default, {
                        className: "g-btn g-btn-primary btn",
                        href: "/"
                    }, "\u67e5\u770b\u5176\u4ed6\u76f4\u64ad"), g = c.omit(this.props, "pic", "poster",
                    "notice", "ended");
                return e.default.createElement("div", b({className: "video-curtain"}, g), e.default.createElement("div", {className: "container"}, e.default.createElement("span", {className: "text"}, this.props.notice), a), e.default.createElement("div", {
                    className: "bg",
                    style: {backgroundImage: "url(" + (this.props.poster || this.props.pic) + ")"}
                }))
            }
        });
        k.default = a
    }, 395: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        var c = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(3));
        d = a(4);
        var e = b(d);
        d = a(246);
        var f = b(d);
        d = a(13);
        var m = b(d);
        d = a(11);
        var g = b(d);
        d = a(30);
        var h = b(d);
        d = a(288);
        d = b(d);
        var p = a(221), p = b(p);
        a = a(396);
        var l = b(a);
        a = h.default.createClass({
            displayName: "LivePlayer", mixins: [d.default, p.default], propTypes: {
                src: h.default.PropTypes.string,
                autoPlay: h.default.PropTypes.bool,
                width: h.default.PropTypes.number,
                height: h.default.PropTypes.number,
                poster: h.default.PropTypes.string,
                style: h.default.PropTypes.object,
                hiddenBoard: h.default.PropTypes.bool,
                hideAway: h.default.PropTypes.bool,
                onClick: h.default.PropTypes.func,
                onPlaying: h.default.PropTypes.func,
                onResourceBreak: h.default.PropTypes.func,
                onShowBoard: h.default.PropTypes.func,
                onHideBoard: h.default.PropTypes.func
            }, getDefaultProps: function () {
                return {hiddenBoard: !1}
            }, componentWillMount: function () {
                this.showingBoard = !this.props.hiddenBoard;
                this.delayHideBoardTimer = null;
                this.st = 1;
                this.startBufferingTime = this.startPlayTime = 0;
                this.analyticData =
                    [];
                this.nextSendAnalyticTime = this.lastTimeOfSendAnalytic = 0;
                this.sendAnalyticTimer = null;
                this.sendAnalyticWhenBuffering = !1
            }, render: function () {
                var a = 1 == this.st ? "playbtn" : 2 == this.st ? "spinner" : "playbtn pause", a = this.showingBoard && h.default.createElement("div", {
                        ref: "button",
                        onClick: this.buttonClickHandler,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.buttonClickHandler,
                        className: a
                    }), b = c.mix({width: this.props.width, height: this.props.height}, this.props.style);
                return h.default.createElement("div",
                    {className: "player", style: b}, h.default.createElement(l.default, {
                        ref: "media",
                        width: this.props.width,
                        height: this.props.height,
                        poster: this.props.poster,
                        style: this.props.hideAway ? {position: "absolute", left: "-1024px"} : null,
                        autoPlay: this.props.autoPlay,
                        src: this.props.src,
                        onClick: this.onClick,
                        onPlaying: this.onPlaying,
                        onPause: this.onPause,
                        onBuffering: this.onBuffering,
                        onBufferFull: this.onBufferFull,
                        onResourceBreak: this.props.onResourceBreak
                    }), a)
            }, componentDidUpdate: function (a) {
                this.props.src && a.src != this.props.src &&
                (this.load(), this.play())
            }, componentWillUnmount: function () {
                clearTimeout(this.delayHideBoardTimer);
                clearTimeout(this.sendAnalyticTimer)
            }, play: function () {
                1 == this.st && (this.st = 2);
                this.refs.media.play();
                this.forceUpdate()
            }, pause: function () {
                this.refs.media.pause();
                this.showBoard()
            }, load: function () {
                this.refs.media.getDOMNode().load()
            }, onPlaying: function () {
                this.st = 3;
                this.forceUpdate();
                clearTimeout(this.delayHideBoardTimer);
                this.delayHideBoardTimer = setTimeout(this.hideBoard, 500);
                this.props.onPlaying && this.props.onPlaying();
                this.startPlayTime || (this.startPlayTime = Date.now());
                this.sendAnalyticTimer || (this.setNextSendAnalyticTime(), this.sendAnalyticTimer = setTimeout(this.sendAnalytic, this.nextSendAnalyticTime))
            }, onPause: function () {
                this.st = 1;
                this.forceUpdate();
                clearTimeout(this.delayHideBoardTimer);
                this.showBoard();
                this.sendAnalytic();
                clearTimeout(this.sendAnalyticTimer);
                this.startPlayTime = 0;
                this.sendAnalyticTimer = null;
                this.lastTimeOfSendAnalytic = 0
            }, onBuffering: function () {
                3 == this.st && (this.startBufferingTime = Date.now())
            },
            onBufferFull: function () {
                this.collectBufferingData()
            }, onClick: function () {
                this.props.hiddenBoard || (this.showingBoard ? this.hideBoard() : this.showBoard());
                this.props.onClick && this.props.onClick()
            }, buttonClickHandler: function (a) {
                this.checkHandlerAvailable(a) && (3 == this.st ? this.pause() : this.play())
            }, showBoard: function () {
                this.props.hiddenBoard || (this.showingBoard = !0, this.forceUpdate(), this.props.onShowBoard && this.props.onShowBoard())
            }, hideBoard: function () {
                this.props.hiddenBoard || (this.showingBoard = !1, this.forceUpdate(),
                this.props.onHideBoard && this.props.onHideBoard())
            }, sendAnalytic: function () {
                if (this.refs.media.canTriggerTimeupdateEvent()) {
                    var a = new Image, b = Date.now(), c = Math.round((b - (this.lastTimeOfSendAnalytic || this.startPlayTime)) / 1E3), f = e.default.parse(this.props.src), d = this.refs.media && this.refs.media.isBuffering();
                    d && this.collectBufferingData(d);
                    c = {
                        p: "h5",
                        d: this.analyticData.join(),
                        t: c,
                        f: f.pathname.split("_")[0].slice(1),
                        w: f.host,
                        u: m.default.info && m.default.info.id || m.default.guestid,
                        __uu: g.default.uu(),
                        __ut: g.default.ut()
                    };
                    a.src = e.default.make("http://shrek.6.cn/live.6.cn/xs.php", c);
                    this.analyticData = [];
                    this.lastTimeOfSendAnalytic = b;
                    clearTimeout(this.sendAnalyticTimer);
                    this.setNextSendAnalyticTime();
                    this.sendAnalyticTimer = setTimeout(this.sendAnalytic, this.nextSendAnalyticTime)
                } else this.analyticData = []
            }, setNextSendAnalyticTime: function () {
                this.nextSendAnalyticTime = 1E3 * f.default.randrange(20, 41)
            }, collectBufferingData: function (a) {
                if (this.startBufferingTime && this.startPlayTime && this.startBufferingTime >= this.startPlayTime) {
                    var b =
                        Date.now(), c = b - this.startBufferingTime, f = Math.round((this.startBufferingTime - (this.lastTimeOfSendAnalytic || this.startPlayTime)) / 1E3);
                    this.analyticData.push(f + ":" + c);
                    a && (this.startPlayTime = this.startBufferingTime = b)
                }
            }
        });
        k.default = a
    }, 396: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "Media", mixins: [a.default], propTypes: {
                tag: c.default.PropTypes.oneOf(["video",
                    "audio"]),
                src: c.default.PropTypes.string,
                poster: c.default.PropTypes.string,
                width: c.default.PropTypes.number,
                height: c.default.PropTypes.number,
                playsinline: c.default.PropTypes.bool,
                duration: c.default.PropTypes.number,
                preload: c.default.PropTypes.string,
                autoplay: c.default.PropTypes.bool,
                controls: c.default.PropTypes.bool,
                hls: c.default.PropTypes.bool,
                onDurationChange: c.default.PropTypes.func,
                onEnded: c.default.PropTypes.func,
                onError: c.default.PropTypes.func,
                onPause: c.default.PropTypes.func,
                onPlaying: c.default.PropTypes.func,
                onProgress: c.default.PropTypes.func,
                onTimeUpdate: c.default.PropTypes.func,
                onBuffering: c.default.PropTypes.func,
                onBufferFull: c.default.PropTypes.func,
                onResourceBreak: c.default.PropTypes.func,
                onClick: c.default.PropTypes.func
            }, getDefaultProps: function () {
                return {tag: "video", playsinline: !0, autoPlay: !0, controls: !1}
            }, componentWillMount: function () {
                this.loadStarted = !1;
                this.paused = !0;
                this.buffering = !1;
                this.doOnTimeUpdateTimer = this.doOnProgressTimer = this.playheadMovingTimer = null;
                this._eventMap = {
                    canplay: "onCanPlay",
                    canplaythrough: "onCanPlayThrough",
                    durationchange: "onDurationChange",
                    ended: "onEnded",
                    error: "onError",
                    loadeddata: "onLoadedData",
                    loadedmetadata: "onLoadedMetaData",
                    pause: "onPause",
                    playing: "onPlaying",
                    progress: "onProgress",
                    seeked: "onSeeked",
                    seeking: "onSeeking",
                    stalled: "onStalled",
                    timeupdate: "onTimeUpdate",
                    waiting: "onWaiting"
                };
                this._hls = this._isHls();
                this._timeupdateOccurTimes = 0
            }, render: function () {
                var a = {}, b = this.props, e = ["tag", "playsinline", "autoplay", "duration"];
                Object.keys(b).forEach(function (c) {
                    0 !=
                    c.indexOf("on") && 0 > e.indexOf(c) && (a[c] = b[c])
                });
                a.onClick = this.onClick;
                a.onTouchStart = this.startTraceTouch;
                a.onTouchMove = this.traceTouchMove;
                a.onTouchEnd = this.onClick;
                return c.default.createElement(this.props.tag, a)
            }, componentDidMount: function () {
                var a = this.getDOMNode();
                this._bindEventHandler(this._eventMap);
                this.props.playsinline && a && a.setAttribute("webkit-playsinline", "");
                this.props.autoplay && (a && a.setAttribute("autoplay", ""), this.paused = !1);
                this.props.controls && a && a.setAttribute("controls", "")
            },
            componentDidUpdate: function (a, b) {
                a.src != this.props.src && (this._hls = this._isHls())
            }, componentWillUnmount: function () {
                this._bindEventHandler(this._eventMap, !0);
                this.stopPlayheadMovingCheck();
                clearTimeout(this.doOnProgressTimer);
                clearTimeout(this.doOnTimeUpdateTimer)
            }, getDOMNode: function () {
                return e.default.findDOMNode(this)
            }, play: function () {
                var a = this.getDOMNode();
                this.paused = !1;
                a && a.play();
                this.handleBufferingEvent()
            }, pause: function () {
                var a = this.getDOMNode();
                this.paused = !0;
                a && a.pause();
                this.handleBufferingEvent()
            },
            setCurrentTime: function (a) {
                var b = this.getDOMNode();
                b && (b.currentTime = a)
            }, isPlaying: function () {
                var a = this.getDOMNode();
                return !a.paused && !a.ended
            }, isBuffering: function () {
                return !!this.buffering
            }, getCurrentTime: function () {
                var a = this.getDOMNode();
                return a && a.currentTime
            }, getDuration: function () {
                var a = this.getDOMNode();
                return a && a.duration || this.props.duration
            }, getBuffered: function () {
                var a = this.getDOMNode();
                return a && a.buffered
            }, getSrc: function () {
                var a = this.getDOMNode();
                return a && a.src
            }, canTriggerTimeupdateEvent: function () {
                return 2 <
                    this._timeupdateOccurTimes
            }, onCanPlay: function () {
                this.handleBufferingEvent()
            }, onCanPlayThrough: function () {
                this.handleBufferingEvent()
            }, onDurationChange: function () {
                this.props.onDurationChange && this.props.onDurationChange(this.getDuration())
            }, onEnded: function () {
                clearTimeout(this.doOnTimeUpdateTimer);
                this.doOnTimeUpdateTimer = null;
                this.handleBufferingEvent();
                this.props.onEnded && this.props.onEnded()
            }, onError: function () {
                this.props.onError && this.props.onError()
            }, onLoadedData: function () {
                this.loadStarted = !0;
                this.handleBufferingEvent()
            }, onLoadedMetaData: function () {
                this.handleBufferingEvent()
            }, onPause: function () {
                this.stopPlayheadMovingCheck();
                this.handleBufferingEvent();
                this.props.onPause && this.props.onPause();
                this.paused || this.props.onResourceBreak && this.props.onResourceBreak()
            }, onPlaying: function () {
                this.startPlayheadMovingCheck();
                this.handleBufferingEvent();
                this.props.onPlaying && this.props.onPlaying()
            }, onProgress: function () {
                this.doOnProgressTimer || (this.doOnProgressTimer = setTimeout(this.doOnProgress,
                    1E3))
            }, onSeeked: function () {
                this.handleBufferingEvent()
            }, onSeeking: function () {
                this.handleBufferingEvent()
            }, onStalled: function () {
                this.handleBufferingEvent()
            }, onTimeUpdate: function () {
                4 > this._timeupdateOccurTimes && this._timeupdateOccurTimes++;
                this.doOnTimeUpdateTimer || (this.doOnTimeUpdateTimer = setTimeout(this.doOnTimeUpdate, 1E3))
            }, onWaiting: function () {
                this.loadStarted = !0;
                this.handleBufferingEvent()
            }, onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
            }, startPlayheadMovingCheck: function () {
                this.playheadMovingTimer ||
                (this.playheadMovingTimeOnCheck = null, this.doPlayheadMovingCheck())
            }, stopPlayheadMovingCheck: function () {
                clearTimeout(this.playheadMovingTimer);
                this.playheadMovingTimer = null
            }, doPlayheadMovingCheck: function () {
                var a = this.getDOMNode().currentTime;
                this.playheadMoving = this.playheadMovingTimeOnCheck != a;
                this.playheadMovingTimeOnCheck = a;
                !this.playheadMoving && 3 > this._timeupdateOccurTimes && this._hls && (this.playheadMoving = !0);
                this.handleBufferingEvent();
                this.playheadMovingTimer = setTimeout(this.doPlayheadMovingCheck,
                    600)
            }, handleBufferingEvent: function (a) {
                a = this.getDOMNode();
                var b = !a.ended && !a.paused;
                a = this.loadStarted && b && (!this.playheadMoving || 3 > a.readyState);
                a != this.buffering && ((this.buffering = a) ? this.props.onBuffering && this.props.onBuffering() : this.props.onBufferFull && this.props.onBufferFull())
            }, doOnProgress: function () {
                this.doOnProgressTimer = null;
                this.props.onProgress && this.props.onProgress(this.getBuffered())
            }, doOnTimeUpdate: function () {
                this.doOnTimeUpdateTimer = null;
                this.handleBufferingEvent();
                this.props.onTimeUpdate &&
                this.props.onTimeUpdate(this.getCurrentTime())
            }, _bindEventHandler: function (a, b) {
                var c = this, d = b ? "removeEventListener" : "addEventListener", p = e.default.findDOMNode(this);
                Object.keys(a).forEach(function (b) {
                    p[d](b, c[a[b]])
                })
            }, _isHls: function () {
                return this.props.hls || this.props.src && 0 < this.props.src.lastIndexOf(".m3u8")
            }
        });
        k.default = a
    }, 397: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(398);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(63);
        var f =
            b(d);
        a = a(394);
        var m = b(a);
        a = e.default.createClass({
            displayName: "RoomLeLiveVideo",
            propTypes: {
                width: e.default.PropTypes.number,
                height: e.default.PropTypes.number,
                avatar: e.default.PropTypes.string,
                streamingName: e.default.PropTypes.string.isRequired,
                hideAway: e.default.PropTypes.bool,
                onShowBoard: e.default.PropTypes.func,
                onHideBoard: e.default.PropTypes.func
            },
            componentWillMount: function () {
                this._lePlayer = null;
                this._sdkIsReady = "CloudLivePlayer" in window;
                this._showBoard = !0;
                this._sdkIsReady || (this._deferred = (0,
                    c.default)("//yuntv.letv.com/player/live/blive.js").done(this._sdkReady))
            },
            render: function () {
                return this._sdkIsReady ? e.default.createElement("div", {
                    ref: "player",
                    id: "leplayer",
                    style: {width: this.props.width, height: this.props.height},
                    onClick: this.onClick
                }) : e.default.createElement(m.default, {pic: this.props.avatar, notice: "\u52a0\u8f7d\u4e2d"})
            },
            componentDidMount: function () {
                this.refs.player && this._initLePlayer()
            },
            componentWillReceiveProps: function (a) {
                if (this.props.hideAway != a.hideAway) {
                    var b = f.default.findDOMNode(this.refs.player);
                    a.hideAway ? (b.style.position = "absolute", b.style.left = "-9999px") : b.style.position = "static"
                }
            },
            shouldComponentUpdate: function (a, b) {
                return !1
            },
            componentDidUpdate: function () {
                this.refs.player && !this._lePlayer && this._initLePlayer()
            },
            componentWillUnmount: function () {
                this._lePlayer = null;
                this._deferred && this._deferred.reject();
                this._deferred = null
            },
            onClick: function (a) {
                this._showBoard ? (this._showBoard = !1, this.props.onHideBoard && this.props.onHideBoard()) : (this._showBoard = !0, this.props.onShowBoard && this.props.onShowBoard())
            },
            _initLePlayer: function () {
                this._lePlayer = new window.CloudLivePlayer;
                this._lePlayer.init({
                    type: "video",
                    customerId: 845308,
                    p: 102,
                    activityId: this.props.streamingName,
                    pic: this.props.avatar
                }, "leplayer");
                var a = f.default.findDOMNode(this.refs.player);
                if (a)for (var a = a.querySelectorAll("div"), b = 0; b < a.length; b++) {
                    var c = a[b], e = c.style.zIndex;
                    e && 0 < e && (c.style.zIndex = "0")
                }
            },
            _sdkReady: function () {
                var a = this;
                setTimeout(function () {
                    a._sdkIsReady = !0;
                    a.forceUpdate()
                }, 100)
            }
        });
        k.default = a
    }, 398: function (d, k, a) {
        Object.defineProperty(k,
            "__esModule", {value: !0});
        k.default = function (a) {
            var e = (0, b.default)(), f = document.createElement("script"), d = function () {
                e.resolve(f.src);
                d = g = f = null
            }, g = function () {
                e.reject();
                d = g = f = null
            };
            f.onload = d;
            f.onerror = g;
            f.src = a;
            document.head.appendChild(f);
            return e
        };
        var b = (d = a(6)) && d.__esModule ? d : {default: d}
    }, 399: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomTitle",
            mixins: [d.default, a.default],
            propTypes: {
                alias: c.default.PropTypes.string,
                rid: c.default.PropTypes.string,
                wealthrank: c.default.PropTypes.number,
                onClick: c.default.PropTypes.func
            },
            render: function () {
                return c.default.createElement("div", {
                    className: "room-title",
                    onClick: this.onClick,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick
                }, c.default.createElement("p", {className: "alias-and-rank"}, c.default.createElement("span", {className: "alias"}, this.props.alias), c.default.createElement("i",
                    {className: "star" + this.props.wealthrank})), c.default.createElement("p", {className: "rid"}, "\u623f\u95f4\u53f7:(", this.props.rid, ")"))
            },
            onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick()
            }
        });
        k.default = a
    }, 400: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        a = a(229);
        var e = b(a);
        a = c.default.createClass({
            displayName: "RoomMainTab", mixins: [d.default], propTypes: {
                active: c.default.PropTypes.string,
                privateChatArrival: c.default.PropTypes.bool,
                spectatorAmount: c.default.PropTypes.number,
                onChangeMainTab: c.default.PropTypes.func
            }, render: function () {
                return c.default.createElement(e.default, {
                    className: "room-maintab",
                    node: [{name: "pubchat", text: "\u516c\u804a"}, {
                        name: "prichat",
                        text: "\u79c1\u804a" + (this.props.privateChatArrival ? '<i class="new"></i>' : "")
                    }, {
                        name: "spectator",
                        text: "\u89c2\u4f17<span>(" + this.props.spectatorAmount + ")<span>"
                    }, {name: "more", text: "\u66f4\u591a"}],
                    active: this.props.active,
                    onChange: this.props.onChangeMainTab
                })
            }
        });
        k.default = a
    }, 401: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(223);
        var c = b(d);
        d = a(2);
        var e = b(d);
        d = a(227);
        var f = b(d);
        d = a(390);
        var m = b(d);
        d = a(402);
        var g = b(d);
        d = a(30);
        var h = b(d);
        d = a(63);
        var p = b(d);
        d = a(288);
        var l = b(d);
        d = a(221);
        d = b(d);
        a = a(280);
        a = b(a);
        var n = h.default.createClass({
                displayName: "Username", mixins: [l.default, d.default], propTypes: {
                    name: h.default.PropTypes.string,
                    rid: h.default.PropTypes.number,
                    prop: a.default.list,
                    uid: h.default.PropTypes.string,
                    onClick: h.default.PropTypes.func
                }, render: function () {
                    var a = m.default.VALID_PROP_CODE, b = this.props.prop, b = b && 0 != b.size ? b.map(function (b, c) {
                        if (-1 < a.indexOf(b))return h.default.createElement("i", {className: "prop-" + b, key: c})
                    }) : null, c = !this.props.rid || 3E6 < this.props.rid ? "" : h.default.createElement("span", {className: "rid"}, "(" + this.props.rid + ")");
                    return h.default.createElement("span", {
                        className: "username",
                        "data-id": this.props.uid,
                        onClick: this.onClick,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onClick
                    }, b, h.default.createElement("span", {className: "name"}, this.props.name), c)
                }, onClick: function (a) {
                    a.preventDefault();
                    this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
                }
            }), r = h.default.createClass({
                displayName: "PublicChat",
                mixins: [l.default],
                propTypes: {data: a.default.map, onClickAlias: h.default.PropTypes.func},
                render: function () {
                    var a = this.props.data, b;
                    b = h.default.createElement(n, {
                        name: a.get("from"), rid: Number(a.get("frid")), prop: a.get("prop"), uid: String(a.get("fid")),
                        onClick: this.props.onClickAlias
                    });
                    var c = a.get("to") ? h.default.createElement(n, {
                        name: a.get("to"),
                        rid: Number(a.get("torid")),
                        uid: String(a.get("toid")),
                        onClick: this.props.onClickAlias
                    }) : null, e = {__html: g.default.parse(g.default.parseGuard(g.default.parseVIP(a.get("m", a.get("content")))))};
                    b = c ? h.default.createElement("span", null, b, "\u5bf9", c, "\u8bf4") : h.default.createElement("span", null, b, "\u8bf4");
                    return h.default.createElement("div", {className: "line padding"}, h.default.createElement("span", {className: "time"},
                        f.default.format(1E3 * a.get("tm"), "h:i")), b, ":", h.default.createElement("span", {dangerouslySetInnerHTML: e}))
                }
            }), q = h.default.createClass({
                displayName: "PrivateChat",
                mixins: [l.default],
                propTypes: {data: a.default.map, myid: h.default.PropTypes.string, onClickAlias: h.default.PropTypes.func},
                render: function () {
                    var a = this.props.data, b, c = {__html: a.get("content")};
                    b = a.get("fid") == this.props.myid ? h.default.createElement("span", null, "\u6211\u5bf9", h.default.createElement(n, {
                        name: a.get("tname"), uid: String(a.get("to")),
                        rid: Number(a.get("trid")), onClick: this.props.onClickAlias
                    }), "\u8bf4") : h.default.createElement("span", null, h.default.createElement(n, {
                        name: a.get("from"),
                        uid: String(a.get("fid")),
                        prop: a.get("prop"),
                        rid: Number(a.get("frid")),
                        onClick: this.props.onClickAlias
                    }), "\u5bf9\u6211\u8bf4");
                    return h.default.createElement("div", {className: "line padding chat-info"}, h.default.createElement("span", {className: "time"}, f.default.format(1E3 * a.get("tm"), "h:i")), b, ":", h.default.createElement("span", {dangerouslySetInnerHTML: c}))
                }
            }),
            y = h.default.createClass({
                displayName: "SystemInfo",
                mixins: [l.default],
                propTypes: {data: a.default.map},
                render: function () {
                    var a = {__html: this.props.data.get("content").replace(/\<[^\>]+\>/, "")};
                    return h.default.createElement("div", {className: "line padding sys-info"}, h.default.createElement("span", {className: "time"}, f.default.format(1E3 * this.props.data.get("tm"), "h:i")), h.default.createElement("span", {dangerouslySetInnerHTML: a}))
                }
            }), w = h.default.createClass({
                displayName: "GiftInfo", mixins: [l.default], propTypes: {
                    data: a.default.map,
                    gift: a.default.map, onClickAlias: h.default.PropTypes.func
                }, render: function () {
                    var a = this.props.data, b = this.props.gift && this.props.gift.get(String(a.getIn(["content", "item"]))), c = null;
                    b && a.get("fid") ? c = h.default.createElement("div", {className: "line padding gift-info"}, h.default.createElement("span", {className: "time"}, f.default.format(1E3 * a.get("tm"), "h:i")), h.default.createElement(n, {
                            name: a.get("from"),
                            uid: String(a.get("fid")),
                            rid: Number(a.get("frid")),
                            prop: a.get("prop"),
                            onClick: this.props.onClickAlias
                        }),
                        h.default.createElement("span", null, "\u5411"), h.default.createElement(n, {
                            name: a.get("to"),
                            uid: String(a.get("tid")),
                            rid: Number(a.get("trid")),
                            onClick: this.props.onClickAlias
                        }), h.default.createElement("span", null, "\u9001"), h.default.createElement("i", {
                            className: "gift",
                            style: {backgroundImage: "url(" + b.getIn(["spic", "img"]) + ")"}
                        }), h.default.createElement("span", null, " " + b.get("title") + "\uff0c\u5171" + a.getIn(["content", "num"]) + "\u4e2a\uff0c\u611f\u8c22"), h.default.createElement(n, {
                            name: a.get("from"), uid: String(a.get("fid")),
                            rid: Number(a.get("frid")), onClick: this.props.onClickAlias
                        }), h.default.createElement("span", null, "\u7684\u70ed\u60c5\u652f\u6301\uff01")) : b && (c = h.default.createElement("div", {className: "line padding gift-info"}, h.default.createElement("span", {className: "time"}, f.default.format(1E3 * a.get("tm"), "h:i")), h.default.createElement(n, {
                        name: a.get("to"),
                        uid: String(a.get("tid")),
                        rid: Number(a.get("trid")),
                        onClick: this.props.onClickAlias
                    }), h.default.createElement("span", null, "\u73a9"), h.default.createElement("span",
                        null, a.get("from")), h.default.createElement("span", null, "\u83b7\u5f97"), h.default.createElement("i", {
                        className: "gift",
                        style: {backgroundImage: "url(" + b.getIn(["spic", "img"]) + ")"}
                    }), h.default.createElement("span", null, " " + b.get("title") + "\uff0c\u5171" + a.getIn(["content", "num"]) + "\u4e2a")));
                    return c
                }
            }), t = h.default.createClass({
                displayName: "WelcomeInfo", mixins: [l.default], propTypes: {data: a.default.map}, render: function () {
                    var a = {__html: this.props.data.getIn(["content", "msg"]).replace(/\<[^\>]+\>/, "")};
                    return h.default.createElement("div",
                        {className: "line padding welcome"}, h.default.createElement("span", {className: "time"}, f.default.format(1E3 * this.props.data.get("tm"), "h:i")), h.default.createElement("span", {dangerouslySetInnerHTML: a}))
                }
            }), v = h.default.createClass({
                displayName: "PrivateBulletin",
                mixins: [l.default],
                propTypes: {data: a.default.map, onClickAlias: h.default.PropTypes.func},
                render: function () {
                    var a = this.props.data;
                    return h.default.createElement("div", {className: "line"}, h.default.createElement(n, {
                        uid: a.get("uid"), rid: Number(a.get("rid")),
                        name: a.get("alias"), onClick: this.props.onClickAlias
                    }), "\u5bf9\u6211\u8bf4\uff1a", h.default.createElement("span", {dangerouslySetInnerHTML: {__html: a.get("content")}}))
                }
            }), A = h.default.createClass({
                displayName: "RedEnvelopeInfo",
                mixins: [],
                propTypes: {data: a.default.map, onClickAlias: h.default.PropTypes.func},
                shouldComponentUpdate: function (a, b) {
                    return !c.default.is(this.props.data, a.data)
                },
                render: function () {
                    var a = this.props.data;
                    return h.default.createElement("div", {className: "line padding"}, h.default.createElement("span",
                        {className: "time"}, f.default.format(1E3 * a.get("tm"), "h:i")), h.default.createElement(n, {
                        uid: a.get("fid"),
                        rid: Number(a.get("frid")),
                        name: a.get("from"),
                        onClick: this.props.onClickAlias
                    }), "\uff1a\u90011\u4e2a\u7ea2\u5305", h.default.createElement("i", {className: "redenvelope"}))
                }
            });
        a = h.default.createClass({
            displayName: "RoomChatList",
            propTypes: {
                height: h.default.PropTypes.number,
                list: a.default.list,
                myid: h.default.PropTypes.string,
                gift: a.default.map,
                pauseUpdate: h.default.PropTypes.bool,
                onClickAlias: h.default.PropTypes.func
            },
            componentDidMount: function () {
                this._shouldUpdate = !0;
                this._enableUpdateTimer = null;
                this._scrollToBottom()
            },
            componentDidUpdate: function () {
                this._scrollToBottom()
            },
            shouldComponentUpdate: function (a, b) {
                return l.default.shouldComponentUpdate.call(this, a, b) && this._shouldUpdate && !a.pauseUpdate
            },
            render: function () {
                var a = this.props.list.map(function (a, b) {
                    var c = a.get("typeID"), e = this.props.onClickAlias;
                    if (101 == c)return h.default.createElement(r, {data: a, key: b, onClickAlias: e});
                    if (102 == c)return h.default.createElement(y,
                        {data: a, key: b});
                    if (107 == c)return h.default.createElement(q, {
                        data: a,
                        key: b,
                        myid: this.props.myid,
                        onClickAlias: e
                    });
                    if (201 == c)return h.default.createElement(w, {
                        data: a,
                        key: b,
                        gift: this.props.gift,
                        onClickAlias: e
                    });
                    if (123 == c)return h.default.createElement(t, {data: a, key: b});
                    if ("privateBulletin" == a.get("type"))return h.default.createElement(v, {
                        data: a,
                        key: b,
                        onClickAlias: e
                    });
                    if (1304 == c)return h.default.createElement(A, {data: a, key: b, onClickAlias: e})
                }.bind(this));
                return h.default.createElement("div", {
                    className: "room-chatlist",
                    style: {height: this.props.height},
                    onTouchStart: this._touchStartHandler,
                    onTouchEnd: this._touchEndHandler,
                    onTouchCancel: this._touchEndHandler
                }, a)
            },
            componentWillUnmount: function () {
                clearTimeout(this._enableUpdateTimer)
            },
            _scrollToBottom: function () {
                var a = p.default.findDOMNode(this);
                a.lastChild && a.lastChild.scrollIntoView && !e.default.uc ? a.lastChild.scrollIntoView(!0) : a.scrollTop = 9999
            },
            _touchStartHandler: function (a) {
                clearTimeout(this._enableUpdateTimer);
                this._shouldUpdate = !1
            },
            _touchEndHandler: function (a) {
                this._enableUpdateTimer =
                    setTimeout(this._enableUpdate, 1E3)
            },
            _enableUpdate: function () {
                this._shouldUpdate = !0;
                this.forceUpdate()
            }
        });
        k.default = a
    }, 402: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        d = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(3));
        var b = (a = a(390)) && a.__esModule ? a : {default: a}, c = function (a, b, c, d) {
            this.dict = a;
            this.imgurl = b;
            this.imgsize = c;
            this.imgcls = d;
            this.reg = this.reverseDict = null
        };
        d.mix(c.prototype,
            {
                parse: function (a) {
                    if (!this.reverseDict) {
                        var b = this.reverseDict = {}, c = [], d;
                        for (d in this.dict)this.dict.hasOwnProperty(d) && (b[this.dict[d]] = d, c.push("\\" + this.dict[d]));
                        this.reg = new RegExp(c.join("|"), "gi")
                    }
                    return a.replace(this.reg, function (a) {
                        return '<img src="' + this.imgurl + "/face_" + this.reverseDict[a] + '.png" width="' + this.imgsize[0] + '" height="' + this.imgsize[1] + '" class="emoji ' + this.imgcls + '" />'
                    }.bind(this))
                }
            });
        a = function () {
            this.vipParser = this.guardParser = this.normalParser = null
        };
        d.mix(a.prototype,
            {
                parse: function (a) {
                    this.normalParser || (this.normalParser = new c(b.default.EMOTION_NORMAL, b.default.EMOTION_NORMAL_URL, b.default.EMOTION_NORMAL_SIZE, "normal"));
                    return this.normalParser.parse(a)
                }, parseGuard: function (a) {
                this.guardParser || (this.guardParser = new c(b.default.EMOTION_GUARD, b.default.EMOTION_GUARD_URL, b.default.EMOTION_GUARD_SIZE, "guard"));
                return this.guardParser.parse(a)
            }, parseVIP: function (a) {
                this.vipParser || (this.vipParser = new c(b.default.EMOTION_VIP, b.default.EMOTION_VIP_URL, b.default.EMOTION_VIP_SIZE,
                    "vip"));
                return this.vipParser.parse(a)
            }
            });
        k.default = new a
    }, 403: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomPanel",
            mixins: [d.default, a.default],
            propTypes: {
                redEnvelopeAmount: c.default.PropTypes.number,
                onClickGiftButton: c.default.PropTypes.func,
                onClickRedbagButton: c.default.PropTypes.func,
                onClickSayButton: c.default.PropTypes.func
            },
            render: function () {
                return c.default.createElement("div",
                    {className: "room-panel"}, c.default.createElement("section", null, c.default.createElement("span", {
                        className: "redbag",
                        onClick: this.onClickRedbagButton,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onClickRedbagButton
                    }, c.default.createElement("span", null, this.props.redEnvelopeAmount))), c.default.createElement("section", null, c.default.createElement("span", {
                        className: "say",
                        onClick: this.onClickSayButton,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onClickSayButton
                    }, "\u8ddf\u4e3b\u64ad\u804a\u804a\u5929~~")), c.default.createElement("section", null, c.default.createElement("span", {
                        className: "gift",
                        onClick: this.onClickGiftButton,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onClickGiftButton
                    })))
            },
            onClickGiftButton: function (a) {
                a.preventDefault();
                this.checkHandlerAvailable(a) && this.props.onClickGiftButton && this.props.onClickGiftButton(a)
            },
            onClickSayButton: function (a) {
                a.preventDefault();
                this.checkHandlerAvailable(a) &&
                this.props.onClickSayButton && this.props.onClickSayButton(a)
            },
            onClickRedbagButton: function (a) {
                a.preventDefault();
                this.checkHandlerAvailable(a) && this.props.onClickRedbagButton && this.props.onClickRedbagButton(a)
            }
        });
        k.default = a
    }, 404: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(4);
        var c = b(d);
        d = a(7);
        var e = b(d);
        d = a(390);
        var f = b(d);
        d = a(15);
        var m = b(d);
        d = a(30);
        var g = b(d);
        d = a(288);
        d = b(d);
        var h = a(221), h = b(h), p = a(298), p = b(p), l = a(405), l =
            b(l), n = a(261), r = b(n), n = a(406), q = b(n);
        a = a(280);
        a = b(a);
        var y = g.default.createClass({
            displayName: "RoomGiftShopPanel",
            mixins: [d.default, h.default],
            propTypes: {
                target: a.default.map,
                selected: a.default.map,
                coin6: g.default.PropTypes.number,
                amount: g.default.PropTypes.number,
                onSelectGiftAmount: g.default.PropTypes.func,
                onSendGift: g.default.PropTypes.func
            },
            render: function () {
                var a, b, d;
                this.props.target && (a = g.default.createElement("span", {className: "target"}, this.props.target.get("alias", this.props.target.get("uname"))));
                b = this.props.selected ? g.default.createElement("span", {className: "selected-gift"}, "\u5df2\u9009\u62e9\u793c\u7269", g.default.createElement("span", {className: "giftname"}, this.props.selected.get("title")), "\u9001\u7ed9") : g.default.createElement("span", {className: "selected-gift"}, "\u8bf7\u9009\u62e9\u793c\u7269 \u9001\u7ed9");
                d = f.default.PRESENT_AMOUNT_SELECT.map(function (a) {
                    return g.default.createElement("option", {key: a[1], value: a[1]}, a[0])
                });
                return g.default.createElement("div", {className: "panel"},
                    g.default.createElement("div", {className: "remaining"}, g.default.createElement("span", {className: "left"}, g.default.createElement("em", {className: "label"}, "\u4f59\u989d"), g.default.createElement("em", {className: "count"}, this.props.coin6, "\u4e2a\u516d\u5e01")), g.default.createElement(r.default, {
                        className: "right",
                        href: c.default.make(m.default.text("/pay"), {next: e.default.getPath()})
                    }, "\u5145\u503c")), g.default.createElement("div", null, b, " ", a), g.default.createElement("div", null, g.default.createElement("select",
                        {
                            onChange: this.onSelectGiftAmount,
                            value: this.props.amount
                        }, d), g.default.createElement("button", {
                        className: "g-btn g-btn-primary",
                        onClick: this.onSend,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onSend
                    }, "\u8d60\u9001")))
            },
            onSelectGiftAmount: function (a) {
                this.props.onSelectGiftAmount && this.props.onSelectGiftAmount(a.target.value)
            },
            onSend: function (a) {
                this.checkHandlerAvailable(a) && this.props.onSendGift && this.props.onSendGift(a)
            }
        });
        a = g.default.createClass({
            displayName: "RoomGiftStore",
            mixins: [h.default, p.default, l.default],
            propTypes: {
                gift: a.default.map,
                selected: a.default.map,
                currentCategory: g.default.PropTypes.string,
                target: a.default.map,
                amount: g.default.PropTypes.number,
                coin6: g.default.PropTypes.number,
                inventory: a.default.map,
                onSelectGift: g.default.PropTypes.func,
                onChangeCategory: g.default.PropTypes.func,
                onSelectGiftAmount: g.default.PropTypes.func,
                onSendGift: g.default.PropTypes.func,
                onClose: g.default.PropTypes.func
            },
            render: function () {
                var a = this.props.gift && g.default.createElement(q.default,
                        {
                            width: document.documentElement.clientWidth,
                            gift: this.props.gift,
                            selected: this.props.selected,
                            inventory: this.props.inventory,
                            currentCategory: this.props.currentCategory,
                            onSelectGift: this.props.onSelectGift,
                            onChangeCategory: this.props.onChangeCategory
                        }), b = this.props.gift && g.default.createElement(y, {
                        selected: this.props.selected,
                        target: this.props.target,
                        amount: this.props.amount,
                        coin6: this.props.coin6,
                        onSelectGiftAmount: this.props.onSelectGiftAmount,
                        onSendGift: this.props.onSendGift
                    }), c = !this.props.gift &&
                    g.default.createElement("div", {className: "loading"}, g.default.createElement("span", {className: "spinner xs"}));
                return g.default.createElement("div", {className: "room-giftstore"}, g.default.createElement("div", {
                    className: "clickable",
                    onClick: this.onClose,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClose
                }), g.default.createElement("div", {className: "giftstore"}, a, b, c))
            },
            onClose: function (a) {
                a.preventDefault();
                this.checkHandlerAvailable(a) && this.props.onClose && this.props.onClose(a)
            }
        });
        k.default = a
    }, 405: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(7)) && d.__esModule ? d : {default: d}, c = (a = a(4)) && a.__esModule ? a : {default: a};
        k.default = {
            componentDidMount: function () {
                var a = b.default.getPath().split("?")[1], f = c.default.param(a || "");
                f && "overlay" in f || b.default.push("?" + (a ? a + "&" : "") + "overlay=1")
            }, componentWillUnmount: function () {
                var a = c.default.param(b.default.getPath().split("?")[1] || "");
                a && "overlay" in a && history.back()
            }
        }
    }, 406: function (d, k, a) {
        function b(a) {
            return a &&
            a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(237);
        var c = b(d);
        d = a(390);
        var e = b(d);
        d = a(30);
        var f = b(d);
        d = a(223);
        var m = b(d);
        d = a(288);
        d = b(d);
        var g = a(221), g = b(g), h = a(375), p = b(h), h = a(229), l = b(h), h = a(356), n = b(h);
        a = a(280);
        a = b(a);
        var r = f.default.createClass({
            displayName: "RoomGiftShopShelfItem",
            mixins: [g.default, d.default],
            propTypes: {item: a.default.map, selected: a.default.map, onSelect: f.default.PropTypes.func},
            render: function () {
                var a = this.props.item, b = this.props.selected, e =
                    "gift-icon " + a.get("cls"), d = {backgroundImage: "url(" + a.getIn(["mpic", "img"]) + ")"}, b = "giftcell" + (b && b.get("id") == a.get("id") ? " on" : "");
                return f.default.createElement("span", {
                    className: b,
                    onClick: this.onSelect,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onSelect,
                    "data-giftid": a.get("id")
                }, f.default.createElement("i", {
                    className: e,
                    style: d
                }), f.default.createElement("span", {className: "name"}, a.get("title")), f.default.createElement("span", {className: "price"}, (0, c.default)(a.get("price")),
                    "\u5e01"))
            },
            onSelect: function (a) {
                this.checkHandlerAvailable(a) && this.props.onSelect && (a = a.currentTarget.getAttribute("data-giftid"), this.props.onSelect(a))
            }
        }), q = f.default.createClass({
            displayName: "RoomGiftShopShelfInventoryItem",
            mixins: [d.default, g.default],
            propTypes: {
                item: a.default.list,
                gift: a.default.map,
                selected: a.default.map,
                onSelect: f.default.PropTypes.func
            },
            render: function () {
                var a = this.props.item.get(0), b = this.props.item.get(1), a = this.props.gift.get(a), c = this.props.selected, e = "gift-icon " + a.get("cls"),
                    d = {backgroundImage: "url(" + a.getIn(["mpic", "img"]) + ")"}, c = "giftcell" + (c && c.get("id") == a.get("id") ? " on" : "");
                return f.default.createElement("span", {
                    className: c,
                    onClick: this.onSelect,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onSelect,
                    "data-giftid": a.get("id")
                }, f.default.createElement("i", {
                    className: e,
                    style: d
                }), f.default.createElement("span", {className: "name"}, a.get("title")), f.default.createElement("span", {className: "price"}, b, "\u4e2a"))
            },
            onSelect: function (a) {
                this.checkHandlerAvailable(a) &&
                this.props.onSelect && (a = a.currentTarget.getAttribute("data-giftid"), this.props.onSelect(a))
            }
        }), y = f.default.createClass({
            displayName: "RoomGiftShopShelfPage",
            mixins: [d.default],
            propTypes: {
                width: f.default.PropTypes.number,
                style: f.default.PropTypes.object,
                gift: a.default.map,
                data: a.default.list,
                selected: a.default.map,
                currentCategory: f.default.PropTypes.string,
                onSelect: f.default.PropTypes.func
            },
            render: function () {
                return f.default.createElement("div", {
                    className: "",
                    style: this.props.style
                }, f.default.createElement(n.default,
                    {
                        list: this.props.data,
                        component: "11" == this.props.currentCategory ? q : r,
                        width: this.props.width,
                        itemWidth: 58,
                        style: this.props.style,
                        gift: this.props.gift,
                        selected: this.props.selected,
                        onSelect: this.props.onSelect
                    }))
            }
        }), w = f.default.createClass({
            displayName: "RoomGiftShopShelfCarousel",
            mixins: [d.default],
            propTypes: {
                width: f.default.PropTypes.number,
                gift: a.default.map,
                inventory: a.default.map,
                currentCategory: f.default.PropTypes.string,
                selected: a.default.map,
                onSelectGift: f.default.PropTypes.func
            },
            componentWillMount: function () {
                if (this.props.gift &&
                    this.props.selected) {
                    for (var a = this.getCurrentCategoryList(), b = this.props.selected, c = -1, f = 0; f < a.length; f++)if (a[f].get("id") == b.get("id")) {
                        c = f;
                        break
                    }
                    this._index = 0 <= c ? Math.floor(c / Math.floor(this.props.width / 58)) : 0
                } else this._index = 0
            },
            render: function () {
                for (var a = this.getCurrentCategoryList(), b = [], c = Math.floor(this.props.width / 58), e = []; 0 < a.length;)b.push(a.splice(0, c));
                b = m.default.fromJS(b);
                if (1 < b.size)for (a = 0; a < b.size; a++)e.push(f.default.createElement("span", {
                    className: this._index == a ? "on" : "",
                    key: a
                }));
                return f.default.createElement("div", null, f.default.createElement(p.default, {
                    carousel_list: b,
                    carousel_total: b.size,
                    carousel_index: this._index,
                    carousel_itemComponent: y,
                    carousel_reactionWhenMove: !1,
                    carousel_preventDefaultWhenStartTouch: !0,
                    carousel_onSwitch: this.onSwitch,
                    selected: this.props.selected,
                    gift: this.props.gift,
                    currentCategory: this.props.currentCategory,
                    width: this.props.width,
                    onSelect: this.props.onSelectGift
                }), f.default.createElement("div", {className: "carousel-paginate"}, e))
            },
            componentWillReceiveProps: function (a) {
                this.props.currentCategory !=
                a.currentCategory && (this._index = 0)
            },
            onSwitch: function (a) {
                this._index = a;
                this.forceUpdate()
            },
            getCurrentCategoryList: function () {
                var a = this.props.currentCategory, b = this.props.gift, c = this.props.inventory, f = [];
                "11" == a ? c.forEach(function (a, c) {
                    b.get(c) && f.push(m.default.List([c, a]))
                }) : (b.forEach(function (b, c) {
                    b.get("type") == a && f.push(b)
                }), f.sort(function (a, b) {
                    var c = parseInt(a.get("price")), f = parseInt(b.get("price")), e = parseInt(a.get("id")), d = parseInt(b.get("id"));
                    return c < f ? -1 : c == f ? e < d ? -1 : 1 : 1
                }));
                return f
            }
        });
        a = f.default.createClass({
            displayName: "RoomGiftShopShelf",
            mixins: [d.default],
            propTypes: {
                width: f.default.PropTypes.number,
                gift: a.default.map,
                inventory: a.default.map,
                currentCategory: f.default.PropTypes.string,
                selected: a.default.map,
                onSelectGift: f.default.PropTypes.func,
                onChangeCategory: f.default.PropTypes.func
            },
            render: function () {
                var a = e.default.PRESENT_CATEGORY.map(function (a) {
                    return {text: a.text, name: String(a.flag)}
                });
                return f.default.createElement("div", {className: "room-gift-shelf"}, f.default.createElement("div",
                    {className: "category"}, f.default.createElement(l.default, {
                        node: a,
                        active: this.props.currentCategory,
                        onChange: this.onChangeCategory
                    })), f.default.createElement(w, this.props))
            },
            onChangeCategory: function (a) {
                this.props.onChangeCategory && this.props.onChangeCategory(a)
            }
        });
        k.default = a
    }, 407: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(390);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(221), f = b(f);
        a = a(280);
        a = b(a);
        var m = e.default.createClass({
            displayName: "RoomSpectatorListItem",
            mixins: [d.default, f.default],
            propTypes: {info: a.default.map, onClick: e.default.PropTypes.func},
            render: function () {
                var a = this.props.info, b = this.getRoleIcon(a), c = e.default.createElement("span", null, a.get("uname")), f = 3E7 <= a.get("urid") && 6E7 > a.get("urid") || 2E8 <= a.get("urid") && 9E8 > a.get("urid") || 0 == a.get("urid") ? null : e.default.createElement("span", {className: "rid"}, a.get("urid")), d = this.getRank(a), m = this.getFamilyIcon(a), q = a.getIn(["privInfo", "seller"]) ? e.default.createElement("i", {className: "seller"}) : null,
                    k = this.getBadge(a), w = "flag" in a && !a.get("flag");
                return e.default.createElement("div", {className: "line"}, e.default.createElement("div", {
                    className: "spectator" + (w ? " offline" : ""),
                    "data-uid": w ? 0 : a.get("uid"),
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick,
                    onClick: this.onClick
                }, e.default.createElement("section", null, b), e.default.createElement("section", null, e.default.createElement("p", null, c, f), e.default.createElement("p", {className: "icon"}, d, m, q, k)), e.default.createElement("section",
                    null, e.default.createElement("i", {className: "spectator-collapsed"}))))
            },
            getRoleIcon: function (a) {
                var b = a.getIn(["privInfo", "role"]), c = "role-icon ";
                if (a.get("guard"))c = -1 < a.getIn(["privInfo", "prop"]).indexOf("7570") ? c + ("role-icon-guard-golden " + (a.get("flag") ? "" : "offline")) : c + ("role-icon-guard-silver " + (a.get("flag") ? "" : "offline")); else switch (b) {
                    case 9:
                        c += "role-icon-star";
                        break;
                    case 8:
                        c += "role-icon-cop";
                        break;
                    case 7:
                    case 10:
                    case 5:
                        c += "role-icon-manager";
                        break;
                    default:
                        c += "role-icon-citizen"
                }
                return e.default.createElement("i",
                    {className: c})
            },
            getRank: function (a) {
                for (var b = a.getIn(["privInfo", "prop"]), c = ["7116", "7117", "7118", "7119", "7120"], f = 0, d = [], m = 0; m < b.size; m++) {
                    var q = b.get(m), q = c.indexOf(q);
                    if (-1 < q) {
                        f = q + 1;
                        break
                    }
                }
                for (b = 1; b <= f; b++)d.push(e.default.createElement("i", {className: "star star-" + b, key: b}));
                a = 9 == a.getIn(["privInfo", "role"]) ? "star" + a.getIn(["privInfo", "starRank"]) : "rich" + a.getIn(["privInfo", "richRank"]);
                return e.default.createElement("span", {className: "rank"}, e.default.createElement("i", {className: a}), d)
            },
            getFamilyIcon: function (a) {
                if (2 ==
                    a.getIn(["privInfo", "badge", 1]))return a = {backgroundImage: "url(http://vi0.6rooms.com/live/family/" + a.getIn(["privInfo", "badge", 0]) + ".png)"}, e.default.createElement("i", {
                    className: "family-icon",
                    style: a
                })
            },
            getBadge: function (a) {
                var b = c.default.VALID_PROP_CODE;
                return a.getIn(["privInfo", "prop"]).map(function (a, c) {
                    return -1 < b.indexOf(a) ? e.default.createElement("i", {
                        className: "prop-icon prop-" + a,
                        key: c
                    }) : null
                })
            },
            onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClick && this.props.onClick(a)
            }
        });
        a = e.default.createClass({
            displayName: "RoomSpectatorList",
            mixins: [d.default, f.default],
            propTypes: {
                height: e.default.PropTypes.number,
                list: a.default.listOf(a.default.map),
                showmore: e.default.PropTypes.bool,
                onClickItem: e.default.PropTypes.func,
                onDemandMore: e.default.PropTypes.func
            },
            render: function () {
                var a = this.props.list.map(function (a, b) {
                    return "1000000000" == a.get("uid") ? !this.props.showmore && e.default.createElement("div", {
                        className: "guest",
                        key: b
                    }, a.get("uname")) : e.default.createElement(m, {
                        key: a.get("uid"),
                        info: a, onClick: this.props.onClickItem
                    })
                }.bind(this)), b = this.props.showmore && e.default.createElement("div", {
                        className: "showmore",
                        onClick: this.demandMore,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.demandMore
                    }, e.default.createElement("span", null, "\u663e\u793a\u66f4\u591a\u89c2\u4f17"), e.default.createElement("i", {className: "iconfont icon-sanjiao"}));
                return e.default.createElement("div", {
                    className: "room-spectator-list",
                    style: {height: this.props.height + "px"}
                }, a, b)
            },
            demandMore: function (a) {
                this.checkHandlerAvailable(a) && this.props.onDemandMore && this.props.onDemandMore()
            }
        });
        k.default = a
    }, 408: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(223);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(221), f = b(f), m = a(298), m = b(m), g = a(405), g = b(g), h = a(409), p = b(h);
        a = a(280);
        a = b(a);
        a = e.default.createClass({
            displayName: "RoomSpectatorMenu", mixins: [d.default, m.default, f.default, g.default], propTypes: {
                spectator: a.default.map,
                onClose: e.default.PropTypes.func, onClickButton: e.default.PropTypes.func
            }, render: function () {
                var a = this.props.spectator || c.default.Map();
                return e.default.createElement("div", {className: "room-spectator-menu"}, e.default.createElement("div", {
                    className: "clickable",
                    onClick: this.close,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.close
                }), e.default.createElement("div", {className: "main"}, e.default.createElement("header", null, a.get("alias", a.get("uname", ""))), e.default.createElement(p.default,
                    {onClickButton: this.props.onClickButton}), e.default.createElement("i", {
                    className: "close",
                    onClick: this.close,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.close
                })))
            }, close: function (a) {
                a.preventDefault();
                this.checkHandlerAvailable(a) && this.props.onClose && this.props.onClose(a)
            }
        });
        k.default = a
    }, 409: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomSpectatorActionButton",
            mixins: [d.default, a.default],
            propTypes: {onClickButton: c.default.PropTypes.func},
            render: function () {
                return c.default.createElement("div", {
                    className: "spectator-action-button",
                    onClick: this.onClick,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick
                }, c.default.createElement("span", {
                    className: "btn",
                    "data-id": "public-talk"
                }, c.default.createElement("i", {className: "public-talk"}), c.default.createElement("span",
                    null, "\u516c\u804a")), c.default.createElement("span", {
                    className: "btn",
                    "data-id": "private-talk"
                }, c.default.createElement("i", {className: "private-talk"}), c.default.createElement("span", null, "\u79c1\u804a")), c.default.createElement("span", {
                    className: "btn",
                    style: {display: "none"},
                    "data-id": "show-info"
                }, c.default.createElement("i", {className: "show-info"}), c.default.createElement("span", null, "\u67e5\u770b\u8d44\u6599")), c.default.createElement("span", {
                    className: "btn",
                    "data-id": "send-present"
                }, c.default.createElement("i",
                    {className: "send-present"}), c.default.createElement("span", null, "\u9001\u793c\u7269")), c.default.createElement("span", {
                    className: "btn",
                    "data-id": "disable-talk"
                }, c.default.createElement("i", {className: "disable-talk"}), c.default.createElement("span", null, "\u7981\u8a00")), c.default.createElement("span", {
                    className: "btn",
                    "data-id": "enable-talk"
                }, c.default.createElement("i", {className: "enable-talk"}), c.default.createElement("span", null, "\u89e3\u9664\u7981\u8a00")), c.default.createElement("span", {
                    className: "btn",
                    "data-id": "kickout"
                }, c.default.createElement("i", {className: "kickout"}), c.default.createElement("span", null, "\u8e22\u51fa\u623f\u95f4")))
            },
            onClick: function (a) {
                a.preventDefault();
                if (this.checkHandlerAvailable(a)) {
                    for (var b = e.default.findDOMNode(this), c = a.target, d; !c.classList.contains("btn") && c != b;)c = c.parentNode;
                    if (c && (d = c.getAttribute("data-id")) && this.props.onClickButton)this.props.onClickButton(a, d)
                }
            }
        });
        k.default = a
    }, 410: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k,
            "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        var e = a(229), f = b(e);
        a = a(280);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomSpectatorTab",
            mixins: [d.default],
            propTypes: {
                active: c.default.PropTypes.string,
                spectatorInfo: a.default.map,
                onChange: c.default.PropTypes.func
            },
            render: function () {
                var a = [{
                    name: "guard",
                    text: "\u5b88\u62a4(" + this.props.spectatorInfo.get("spectatorGuard").size + ")"
                }, {
                    name: "manager",
                    text: "\u7ba1\u7406\u5458(" + this.props.spectatorInfo.get("spectatorManager").size + ")"
                }, {
                    name: "citizen",
                    text: "\u89c2\u4f17(" + this.props.spectatorInfo.get("spectatorAmount") + ")"
                }];
                return c.default.createElement(f.default, {
                    className: "room-spectator-catetab",
                    node: a,
                    active: this.props.active,
                    onChange: this.props.onChange
                })
            }
        });
        k.default = a
    }, 411: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        d = a(288);
        d = b(d);
        var f = a(221), f = b(f), m = a(298), m = b(m), g = a(405), g = b(g), h = a(412), p = b(h);
        a = a(280);
        a = b(a);
        var l = c.default.createClass({
            displayName: "RoomChatFormTarget",
            mixins: [d.default, f.default],
            propTypes: {
                secret: c.default.PropTypes.bool,
                targetList: a.default.list,
                target: a.default.map,
                onClickSecret: c.default.PropTypes.func,
                onSelectTarget: c.default.PropTypes.func
            },
            render: function () {
                var a = this.props.secret ? " on" : "", b = this.props.targetList.map(function (a, b) {
                    return c.default.createElement("option", {value: a.get("uid"), key: b}, a.get("uname"))
                });
                return c.default.createElement("div", {className: "room-chatformtarget"}, c.default.createElement("span", {
                    className: "secret" + a,
                    onClick: this.onClickSecret,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClickSecret
                }, "\u6084\u6084"), c.default.createElement("select", {
                    onChange: this.props.onSelectTarget,
                    value: this.props.target && this.props.target.get("uid")
                }, b))
            },
            onClickSecret: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClickSecret && this.props.onClickSecret(a)
            }
        });
        a = c.default.createClass({
            displayName: "RoomChatForm", mixins: [d.default, m.default, g.default], propTypes: {
                icon: c.default.PropTypes.oneOf(["emotion",
                    "keyboard"]),
                secret: c.default.PropTypes.bool,
                target: a.default.map,
                targetList: a.default.list,
                emotionList: c.default.PropTypes.array,
                emotionSize: c.default.PropTypes.array,
                emotionCategoryActive: c.default.PropTypes.string,
                onClickIcon: c.default.PropTypes.func,
                onClickSecret: c.default.PropTypes.func,
                onSelectTarget: c.default.PropTypes.func,
                onClickEmotionCategoryTab: c.default.PropTypes.func,
                onFocus: c.default.PropTypes.func,
                onBlur: c.default.PropTypes.func,
                onClose: c.default.PropTypes.func,
                onSubmit: c.default.PropTypes.func
            },
            componentDidMount: function () {
                e.default.findDOMNode(this.refs.form.refs.contentInput).focus()
            }, render: function () {
                return c.default.createElement("div", {className: "room-chatform"}, c.default.createElement("div", {
                    className: "clickable",
                    onClick: this.close,
                    onTouchEnd: this.close
                }), c.default.createElement("div", {
                        className: "main",
                        ref: "main"
                    }, c.default.createElement(l, {
                        secret: this.props.secret,
                        target: this.props.target,
                        targetList: this.props.targetList,
                        onClickSecret: this.props.onClickSecret,
                        onSelectTarget: this.props.onSelectTarget
                    }),
                    c.default.createElement(p.default, {
                        ref: "form",
                        icon: this.props.icon,
                        placeholder: "\u5728\u6b64\u8f93\u5165\u53d1\u8a00\u4eba\u5185\u5bb9",
                        emotionList: this.props.emotionList,
                        emotionSize: this.props.emotionSize,
                        emotionCategory: [{name: "normal", text: " "}, {name: "vip", text: " "}, {
                            name: "guard",
                            text: " "
                        }],
                        emotionCategoryActive: this.props.emotionCategoryActive,
                        onClickIcon: this.props.onClickIcon,
                        onClickEmotionCategoryTab: this.props.onClickEmotionCategoryTab,
                        onFocus: this.props.onFocus,
                        onBlur: this.props.onBlur,
                        onSubmit: this.props.onSubmit
                    })))
            },
            close: function (a) {
                a.preventDefault();
                this.props.onClose && this.props.onClose(a)
            }
        });
        k.default = a
    }, 412: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        d = a(221);
        d = b(d);
        var f = a(413), m = b(f);
        a = a(229);
        var g = b(a);
        a = c.default.createClass({
            displayName: "AccostForm", mixins: [d.default], propTypes: {
                placeholder: c.default.PropTypes.string,
                icon: c.default.PropTypes.oneOf(["keyboard", "emotion"]),
                emotionList: c.default.PropTypes.arrayOf(c.default.PropTypes.object),
                emotionSize: c.default.PropTypes.arrayOf(c.default.PropTypes.number),
                emotionCategory: c.default.PropTypes.arrayOf(c.default.PropTypes.object),
                emotionCategoryActive: c.default.PropTypes.string,
                onClickEmotionCategoryTab: c.default.PropTypes.func,
                onClickIcon: c.default.PropTypes.func,
                onFocus: c.default.PropTypes.func,
                onBlur: c.default.PropTypes.func,
                onSubmit: c.default.PropTypes.func
            }, getDefaultProps: function () {
                return {icon: "emotion"}
            }, render: function () {
                var a = "keyboard" == this.props.icon ? c.default.createElement("div",
                    {className: "emotion"}, c.default.createElement(m.default, {
                        list: this.props.emotionList,
                        onClickFace: this.onClickEmotionFace,
                        size: this.props.emotionSize
                    }), c.default.createElement(g.default, {
                        className: "emotion-category",
                        node: this.props.emotionCategory,
                        active: this.props.emotionCategoryActive,
                        onClick: this.props.onClickEmotionCategoryTab
                    })) : null;
                return c.default.createElement("div", {className: "accost-form"}, c.default.createElement("form", {onSubmit: this.onSubmit}, c.default.createElement("section", null, c.default.createElement("i",
                    {
                        className: this.props.icon + "-icon",
                        onClick: this.onClickIcon,
                        onTouchStart: this.startTraceTouch,
                        onTouchMove: this.traceTouchMove,
                        onTouchEnd: this.onClickIcon
                    })), c.default.createElement("section", null, c.default.createElement("input", {
                    placeholder: this.props.placeholder,
                    ref: "contentInput"
                })), c.default.createElement("section", null, c.default.createElement("button", {
                    type: "submit",
                    className: "g-btn g-btn-primary"
                }, "\u53d1\u9001"))), a)
            }, componentDidMount: function () {
                var a = e.default.findDOMNode(this.refs.contentInput);
                a.addEventListener("focus", this._focusHandler, !1);
                a.addEventListener("blur", this._blurHandler, !1)
            }, componentWillUnmount: function () {
                var a = e.default.findDOMNode(this.refs.contentInput);
                a.removeEventListener("focus", this._focusHandler, !1);
                a.removeEventListener("blur", this._blurHandler, !1)
            }, componentDidUpdate: function () {
                var a = e.default.findDOMNode(this.refs.contentInput);
                "emotion" != this.props.icon && a.blur()
            }, onClickEmotionFace: function (a) {
                var b = a.target.getAttribute("data-alt");
                b && (a.preventDefault(),
                    this.insert(b))
            }, insert: function (a) {
                var b = e.default.findDOMNode(this.refs.contentInput), c = b.selectionStart, f = b.selectionEnd, d = b.value;
                b.value = d.substring(0, c) + a + d.substring(f);
                b.selectionEnd = b.selectionStart = c + a.length;
                b.blur()
            }, clearField: function () {
                e.default.findDOMNode(this.refs.contentInput).value = ""
            }, onClickIcon: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClickIcon && this.props.onClickIcon(a)
            }, onSubmit: function (a) {
                var b = e.default.findDOMNode(this.refs.contentInput).value;
                a.preventDefault();
                this.props.onSubmit(b)
            }, _focusHandler: function (a) {
                this.props.onFocus && this.props.onFocus(a)
            }, _blurHandler: function (a) {
                this.props.onBlur && this.props.onBlur(a)
            }
        });
        k.default = a
    }, 413: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(30)) && d.__esModule ? d : {default: d};
        a = a(221);
        a = b.default.createClass({
            displayName: "Emotion",
            mixins: [(a && a.__esModule ? a : {default: a}).default],
            propTypes: {
                list: b.default.PropTypes.array,
                size: b.default.PropTypes.array,
                onClickFace: b.default.PropTypes.func
            },
            render: function () {
                var a = this, e = this.props.size, f = this.props.list.map(function (f, d) {
                    var h = f.size || e;
                    return b.default.createElement("span", {
                        style: {
                            backgroundImage: "url(" + f.src + ")",
                            backgroundSize: h[0] + "px " + h[1] + "px",
                            width: h[0] + "px",
                            height: h[1] + "px"
                        },
                        "data-alt": f.text,
                        key: d,
                        onClick: a.onClick,
                        onTouchStart: a.startTraceTouch,
                        onTouchMove: a.traceTouchMove,
                        onTouchEnd: a.onClick
                    })
                });
                return b.default.createElement("div", {className: "emotion-pad"}, f)
            },
            onClick: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClickFace &&
                this.props.onClickFace(a)
            }
        });
        k.default = a
    }, 414: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(251);
        var c = b(d), e = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(3));
        d = a(28);
        var f = b(d);
        d = a(6);
        var m = b(d);
        d = a(30);
        var g = b(d);
        d = a(63);
        var h = b(d);
        d = a(288);
        d = b(d);
        a = a(280);
        a = b(a);
        var p = g.default.createClass({
            displayName: "FrameAnimationCanvas",
            propTypes: {
                width: g.default.PropTypes.number,
                height: g.default.PropTypes.number,
                style: g.default.PropTypes.object,
                loop: g.default.PropTypes.bool
            }, componentWillMount: function () {
                this._frame = [];
                this._lastUpdateTime = this._frameIndex = 0;
                this._requestId = null
            }, componentWillUnmount: function () {
                this._frame = null;
                window.cancelAnimationFrame(this._requestId)
            }, render: function () {
                return g.default.createElement("canvas", {
                    width: this.props.width,
                    height: this.props.height,
                    style: this.props.style
                })
            }, play: function (a) {
                this._frame =
                    a;
                this._draw()
            }, _draw: function () {
                var a = h.default.findDOMNode(this);
                if (a) {
                    var b = Date.now();
                    100 < b - this._lastUpdateTime && (a = a.getContext("2d"), a.clearRect(0, 0, this.props.width, this.props.height), a.drawImage(this._frame[Math.round(this._frameIndex)], 0, 0, this.props.width, this.props.height), this._lastUpdateTime = b, this._frameIndex += 1);
                    this.props.loop && this._frameIndex >= this._frame.length && (this._frameIndex = 0);
                    this._frameIndex < this._frame.length && (this._requestId = window.requestAnimationFrame(this._draw))
                }
            }
        });
        a = g.default.createClass({
            displayName: "RoomGiftScreen",
            propTypes: {
                data: a.default.map.isRequired,
                gift: a.default.map,
                animation: g.default.PropTypes.bool,
                topPosition: g.default.PropTypes.number,
                onPresentComplete: g.default.PropTypes.func.isRequired
            },
            mixins: [d.default],
            backgroundImage: ["//vr1.6rooms.com/v/e2/0694e7f0a45d9a7642173be05550f4db.png", "//vr1.6rooms.com/v/o7/08b6c5d3e575753331f786b2d5ca58f8.png", "//vr1.6rooms.com/v/f4/ab19f47468498c2df8d6fcce6346a293.png", "//vr1.6rooms.com/v/i0/506edb181a96e2fe139cdd153dba453f.png",
                "//vr1.6rooms.com/v/i0/7afaf6d277cd534a4d778a6bb2ece2e5.png"],
            animationStarExplod: {
                size: [103.5, 95],
                position: [155.25, -34],
                frame: "//vr1.6rooms.com/v/b0/36b8d83cb54cf3660ca1966f45519995.png //vr1.6rooms.com/v/a7/7e0d33bd4f6de548005a9c5d916dff56.png //vr1.6rooms.com/v/y8/44fbc74f0a3decbdac56e98bbd3d98e3.png //vr1.6rooms.com/v/g1/094aef4c859abf838333c3a7f54d5515.png //vr1.6rooms.com/v/k7/ba251be556ac4b675d41ebc2d5166d68.png //vr1.6rooms.com/v/i4/b9c6dd8d7e50e12fb145b1730fbcbddc.png //vr1.6rooms.com/v/d0/631dbaf3ef6e8e1f082d3dd1dd6d1d9f.png".split(" ")
            },
            animationWaterWave: {
                size: [311, 97.5],
                position: [0, 0],
                loop: !0,
                style: {zIndex: -1},
                frame: "//vr1.6rooms.com/v/l3/c092f933a4cc3cf25a9f06cb30b59e30.png //vr1.6rooms.com/v/c4/24017a1e20212d387bec07ac382d87a6.png //vr1.6rooms.com/v/c3/f9f5915a2b0a6dbc7e92f00c0988e4c2.png //vr1.6rooms.com/v/c0/36a85c57af23a5e38e6810daefe9f2eb.png //vr1.6rooms.com/v/j2/7b632e1d236d2acccfff75d8e34269d9.png //vr1.6rooms.com/v/d2/080bdb1a19afceab633266037450a18a.png //vr1.6rooms.com/v/n3/0081fef935a6961af8115ffeea342ec2.png".split(" ")
            },
            animationStarShine: {
                size: [280, 40],
                position: [16, 45],
                loop: !0,
                frame: "//vr1.6rooms.com/v/m4/433c77addc642c4115d1cb677f6eda56.png //vr1.6rooms.com/v/a3/b8aaf5f87267a5c12f45b092ff34f74e.png //vr1.6rooms.com/v/c1/f8e83f35260d8c944027c9987c8a1c66.png //vr1.6rooms.com/v/s2/894fdf26bdfccac6d7241cb45d3f518e.png //vr1.6rooms.com/v/n4/e3e59e7ea7242ac8bce297c93ed2f7bb.png //vr1.6rooms.com/v/y6/299905c9e2d2297bbe742e97b23f3f3b.png //vr1.6rooms.com/v/m2/3b0431b17efe670f3db2cb01f7930237.png //vr1.6rooms.com/v/e0/a3fd9617d5c480e29c92021dda6c0095.png //vr1.6rooms.com/v/h3/3d87442dd277c66533541c674b743efb.png //vr1.6rooms.com/v/k2/62195675226d2d74bac1744e960fe0b2.png".split(" ")
            },
            animationStarFlash: {
                size: [173, 95],
                position: [74, 0],
                frame: "//vr1.6rooms.com/v/t3/4238c1626284620249eb0f9c231ca7ee.png //vr1.6rooms.com/v/u7/07c6ae9d040140e4b1acf22b08d28e0f.png //vr1.6rooms.com/v/v4/2f17a4552fdb041dea41c8640b694b9e.png //vr1.6rooms.com/v/s2/2131615f70a7e84190ba00f67eed11d1.png //vr1.6rooms.com/v/q6/090daed70eec23d83d654637901fbe0e.png //vr1.6rooms.com/v/o7/782164c9cad57b569f8c277c1e855d49.png //vr1.6rooms.com/v/o2/4a675beceab573a2a5a379b27008f848.png //vr1.6rooms.com/v/i7/633748a8eb010f9e943fb56e2af12b0c.png //vr1.6rooms.com/v/l5/27dcd60a86c0ad76b98e1b45661a5077.png".split(" ")
            },
            animationThunderLeft: {
                size: [45.5, 97.5],
                position: [-21, 5],
                loop: !0,
                style: {zIndex: -1},
                frame: ["//vr1.6rooms.com/v/m8/db83d176827478318081b9159ebed8cb.png", "//vr1.6rooms.com/v/x6/d6fdcd415d6ef6c3c674f8c253473c8e.png", "//vr1.6rooms.com/v/g4/ef6bf069d68bf8fa4ac8cace15bd72e0.png", "//vr1.6rooms.com/v/c0/f2e92337d0422f59740cd0127f42f2d5.png", "//vr1.6rooms.com/v/m3/fb86bea5b005be723c430d4ea32a805c.png"]
            },
            animationThunderRight: {
                size: [45.5, 97.5],
                position: [288, 5],
                loop: !0,
                style: {
                    zIndex: -1, WebkitTransform: "rotate(180deg)",
                    transform: "rotate(180deg)"
                },
                frame: ["//vr1.6rooms.com/v/c0/f2e92337d0422f59740cd0127f42f2d5.png", "//vr1.6rooms.com/v/m8/db83d176827478318081b9159ebed8cb.png", "//vr1.6rooms.com/v/x6/d6fdcd415d6ef6c3c674f8c253473c8e.png", "//vr1.6rooms.com/v/m3/fb86bea5b005be723c430d4ea32a805c.png", "//vr1.6rooms.com/v/g4/ef6bf069d68bf8fa4ac8cace15bd72e0.png"]
            },
            componentWillMount: function () {
                this.initializeState();
                this._isMounted = !1
            },
            componentDidMount: function () {
                this.prepareImage();
                this._isMounted = !0
            },
            componentWillUpdate: function () {
                var a =
                    h.default.findDOMNode(this.refs.motion);
                a.style.WebkitTransitionDuration = a.style.transitionDuration = "0s";
                a.style.opacity = 0;
                a.style.WebkitTransform = a.style.transform = "translate3d(0, 0, 0)";
                this.initializeState()
            },
            componentDidUpdate: function (a, b) {
                this.prepareImage()
            },
            componentWillUnmount: function () {
                this._timer.forEach(function (a) {
                    clearTimeout(a)
                });
                this._canvasref = this._animationFrame = this._animation = this._timer = null;
                !this._complete && this.onComplete();
                this._isMounted = !1
            },
            render: function () {
                var a = this.props.data,
                    b = String(a.getIn(["content", "item"])), c = this.props.gift && this.props.gift.get(b);
                if (c) {
                    var d = a.getIn(["presentInfo", "level"]), b = this.backgroundImage[d - 1], c = c.getIn(["bpic", "img"]), d = 5 <= d ? [this.animationStarShine, this.animationStarFlash, this.animationThunderLeft, this.animationThunderRight] : 4 <= d ? [this.animationStarExplod, this.animationStarShine] : 3 <= d ? [this.animationStarExplod, this.animationWaterWave] : 2 <= d ? [this.animationStarExplod] : [];
                    this._background = b;
                    this._giftimg = c;
                    this._animation = d;
                    d = this.props.animation &&
                        d.map(function (a, b) {
                            var c = e.mix(a.style || {}, {left: a.position[0], top: a.position[1]});
                            return g.default.createElement(p, {
                                width: a.size[0],
                                height: a.size[1],
                                style: c,
                                loop: !!a.loop,
                                ref: this._theref,
                                key: (0, f.default)()
                            })
                        }.bind(this));
                    return g.default.createElement("div", {className: "room-giftscreen"}, g.default.createElement("div", {
                        className: "motion",
                        ref: "motion"
                    }, g.default.createElement("div", {
                        className: "container",
                        style: {backgroundImage: "url(" + b + ")"}
                    }, g.default.createElement("p", {className: "who"}, g.default.createElement("span",
                        null, a.get("from")), g.default.createElement("br", null), g.default.createElement("b", null, "\u9001\u7ed9"), g.default.createElement("span", null, a.get("to"))), g.default.createElement("img", {
                        className: "giftpic",
                        src: c
                    }), g.default.createElement("p", {className: "count"}, g.default.createElement("span", null, a.getIn(["content", "num"])), g.default.createElement("b", null, "\u4e2a"))), d))
                }
                return null
            },
            prepareImage: function () {
                var a = [];
                this._background && (a.push(c.default.createImageElement([this._background, this._giftimg])),
                this.props.animation && 0 < this._animation.length && this._animation.forEach(function (b) {
                    a.push(c.default.createImageElement(b.frame))
                }), m.default.when.apply(m.default, a).always(this.start))
            },
            initializeState: function () {
                this._giftimg = this._background = "";
                this._canvasref = [];
                this._animation = [];
                this._animationFrame = [];
                this._timer = [];
                this._complete = !1
            },
            start: function () {
                if (this._isMounted) {
                    var a = [].slice.call(arguments, 0), b = h.default.findDOMNode(this.refs.motion);
                    1 < a.length && Array.isArray(a[1]) && (this._animationFrame =
                        a.slice(1), this._timer.push(setTimeout(this.startAnimation, 500)));
                    b.style.WebkitTransitionDuration = b.style.transitionDuration = ".3s";
                    b.style.WebkitTransform = b.style.transform = "translate3d(0, -" + this.props.topPosition + "px, 0)";
                    b.style.opacity = "1";
                    this._timer.push(setTimeout(this.startQuit, this.props.data.getIn(["presentInfo", "duration"])))
                }
            },
            startAnimation: function () {
                this._canvasref.forEach(function (a, b) {
                    a.play(this._animationFrame[b])
                }.bind(this))
            },
            startQuit: function () {
                var a = h.default.findDOMNode(this.refs.motion);
                a.style.WebkitTransform = a.style.transform = "translate3d(999px, -" + this.props.topPosition + "px, 0)";
                a.style.opacity = "0";
                this._timer.push(setTimeout(this.onComplete, 500))
            },
            onComplete: function () {
                this._complete = !0;
                this.props.onPresentComplete && this.props.onPresentComplete()
            },
            _theref: function (a) {
                this._canvasref && a && this._canvasref.push(a)
            }
        });
        k.default = a
    }, 415: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(237);
        var c = b(d);
        d = a(30);
        var e =
            b(d);
        a = a(288);
        a = b(a);
        a = e.default.createClass({
            displayName: "RoomRedEnvelope",
            mixins: [a.default],
            propTypes: {amount: e.default.PropTypes.number},
            render: function () {
                return e.default.createElement("div", {className: "room-redenvelope-layer"}, e.default.createElement("span", {className: "icon"}, "\u8d22"), e.default.createElement("span", {className: "amount"}, (0, c.default)(this.props.amount)))
            }
        });
        k.default = a
    }, 416: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule",
            {value: !0});
        d = a(2);
        var c = b(d);
        d = a(30);
        var e = b(d);
        d = a(63);
        var f = b(d);
        d = a(288);
        d = b(d);
        var m = a(221), m = b(m), g = a(405), g = b(g), h = a(301), p = b(h);
        a = a(280);
        a = b(a);
        var l = e.default.createClass({
            displayName: "RoomSongListItem",
            mixins: [d.default, m.default],
            propTypes: {song: a.default.map, onClickButton: e.default.PropTypes.func},
            render: function () {
                var a = this.props.song;
                return e.default.createElement("li", null, e.default.createElement("section", null, e.default.createElement("p", {className: "title"}, a.get("msc_name")), e.default.createElement("p",
                    {className: "singer"}, a.get("msc_first", "\u672a\u77e5"))), e.default.createElement("section", null, e.default.createElement("button", {
                    className: "g-btn g-btn-primary",
                    onClick: this.onClickButton,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClickButton,
                    "data-song": a.get("msc_name"),
                    "data-singer": a.get("msc_first")
                }, "\u70b9\u6b4c")))
            },
            onClickButton: function (a) {
                this.checkHandlerAvailable(a) && this.props.onClickButton && this.props.onClickButton(a)
            }
        });
        a = e.default.createClass({
            displayName: "RoomSongList",
            mixins: [d.default, m.default, g.default],
            propTypes: {
                profile: a.default.map,
                list: a.default.list,
                memo: e.default.PropTypes.string,
                onClose: e.default.PropTypes.func,
                onDemand: e.default.PropTypes.func
            },
            componentDidMount: function () {
                if (c.default.iOS) {
                    var a = f.default.findDOMNode(this.refs.input);
                    a.addEventListener("focus", this._focusHandler, !1);
                    a.addEventListener("blur", this._blurHandler, !1)
                }
            },
            componentWillUnmount: function () {
                var a = f.default.findDOMNode(this.refs.input);
                a.removeEventListener("focus", this._focusHandler,
                    !1);
                a.removeEventListener("blur", this._blurHandler, !1)
            },
            render: function () {
                var a = this.props.list.map(function (a, b) {
                    return e.default.createElement(l, {song: a, key: b, onClickButton: this.onClickDemandButton})
                }.bind(this));
                return e.default.createElement(p.default, {
                    className: "room-songlist",
                    ref: "drawer",
                    title: this.props.profile.get("alias") + "\u7684\u70b9\u6b4c\u5355",
                    autoSetBodyHeight: !1,
                    onClose: this.props.onClose
                }, e.default.createElement("div", {className: "list"}, e.default.createElement("ul", null, a)), e.default.createElement("div",
                    {className: "dark"}, e.default.createElement("form", {
                        className: "custom",
                        onSubmit: this.onCustomDemand
                    }, e.default.createElement("section", null, e.default.createElement("input", {
                        placeholder: "\u8bf7\u8f93\u5165\u6b4c\u66f2\u540d\u79f0",
                        ref: "input"
                    })), e.default.createElement("section", null, e.default.createElement("button", {
                        className: "g-btn g-btn-primary",
                        type: "submit"
                    }, "\u70b9\u6b4c"))), e.default.createElement("div", {
                        className: "memo",
                        dangerouslySetInnerHTML: {__html: this.props.memo}
                    })))
            },
            onClickDemandButton: function (a) {
                a =
                    a.target;
                this.props.onDemand(a.getAttribute("data-song"), a.getAttribute("data-singer"))
            },
            onCustomDemand: function (a) {
                var b = f.default.findDOMNode(this.refs.input);
                a.preventDefault();
                if (b.value)this.props.onDemand(b.value, "")
            },
            _focusHandler: function (a) {
                this.refs.drawer.setWrapHeight("100%")
            },
            _blurHandler: function (a) {
                this.refs.drawer.setWrapHeight("auto")
            }
        });
        k.default = a
    }, 417: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c =
            b(d);
        d = a(63);
        var e = b(d);
        d = a(288);
        d = b(d);
        a = a(221);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomMorePanel",
            mixins: [d.default, a.default],
            propTypes: {onClickItem: c.default.PropTypes.func},
            render: function () {
                return c.default.createElement("ul", {
                    className: "room-morepanel",
                    onClick: this.onClick,
                    onTouchStart: this.startTraceTouch,
                    onTouchMove: this.traceTouchMove,
                    onTouchEnd: this.onClick
                }, c.default.createElement("li", {"data-id": "top"}, c.default.createElement("i", {className: "fun-top"}), c.default.createElement("span",
                    null, "\u7c89\u4e1d\u699c")), c.default.createElement("li", {"data-id": "song"}, c.default.createElement("i", {className: "fun-song"}), c.default.createElement("span", null, "\u70b9\u6b4c")), c.default.createElement("li", {"data-id": "info"}, c.default.createElement("i", {className: "fun-info"}), c.default.createElement("span", null, "\u4e3b\u64ad\u8d44\u6599")))
            },
            onClick: function (a) {
                if (this.checkHandlerAvailable(a)) {
                    for (var b = e.default.findDOMNode(this), c = a.target, d; "LI" != c.nodeName && c != b;)c = c.parentNode;
                    if (c && (d =
                            c.getAttribute("data-id")) && this.props.onClickItem)this.props.onClickItem(a, d)
                }
            }
        });
        k.default = a
    }, 418: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(63);
        var e = b(d);
        a = a(288);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomEnterPrivateForm",
            mixins: [a.default],
            propTypes: {onSubmit: c.default.PropTypes.func},
            render: function () {
                return c.default.createElement("div", {className: "room-enterprivateform"}, c.default.createElement("form",
                    {onSubmit: this.onSubmit}, c.default.createElement("p", {className: "tip"}, "\u672c\u623f\u95f4\u5df2\u7ecf\u52a0\u5bc6\uff0c\u8bf7\u8f93\u5165\u5bc6\u7801\u3002"), c.default.createElement("p", {className: "input"}, c.default.createElement("input", {
                        type: "password",
                        placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801",
                        ref: "input"
                    })), c.default.createElement("p", {className: "button"}, c.default.createElement("button", {
                        className: "g-btn g-btn-primary",
                        type: "submit"
                    }, "\u63d0\u4ea4"))))
            },
            onSubmit: function (a) {
                var b = e.default.findDOMNode(this.refs.input).value;
                a.preventDefault();
                if (b)this.props.onSubmit(b)
            }
        });
        k.default = a
    }, 419: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        var b = (d = a(30)) && d.__esModule ? d : {default: d};
        a = a(288);
        a = b.default.createClass({
            displayName: "RoomConnecting",
            mixins: [(a && a.__esModule ? a : {default: a}).default],
            render: function () {
                return b.default.createElement("div", {className: "room-connecting"}, b.default.createElement("div", {className: "connecting"}, b.default.createElement("b", {className: "spinner xs"}), "\u8fde\u63a5\u4e2d..."))
            }
        });
        k.default = a
    }, 420: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(30);
        var c = b(d);
        d = a(288);
        d = b(d);
        var e = a(405), e = b(e), f = a(229), m = b(f), f = a(301), g = b(f);
        a = a(280);
        a = b(a);
        a = c.default.createClass({
            displayName: "RoomFansTop",
            mixins: [d.default, e.default],
            propTypes: {
                activeCategory: c.default.PropTypes.string,
                data: a.default.list,
                islive: c.default.PropTypes.bool,
                onChangeCategory: c.default.PropTypes.func,
                onClose: c.default.PropTypes.func
            },
            render: function () {
                var a =
                    this.props.activeCategory, b = this.props.data.filter(function (b) {
                    return b.get("name") == a
                }).getIn([0, "list"]), f = b && b.map(function (a, b) {
                        return c.default.createElement("li", {key: b}, c.default.createElement("section", {className: "number " + (3 > b ? "top3" : "")}, 0 == b ? c.default.createElement("i", {className: "cup"}) : b + 1), c.default.createElement("section", {className: "avatar"}, c.default.createElement("img", {src: a.get("picuser")})), c.default.createElement("section", {className: "main"}, c.default.createElement("p", null,
                            c.default.createElement("i", {className: "rankicon rich" + a.get("coin6rank")}), c.default.createElement("em", {className: "alias"}, "(", a.get("uname"), ")")), c.default.createElement("p", null, c.default.createElement("em", {className: "coin"}, a.get("contribution", a.get("money"))))))
                    }), f = b && c.default.createElement("ol", {className: "g-toplist"}, f), b = null === b && c.default.createElement("span", {className: "spinner xs"}), e = [];
                this.props.data.forEach(function (a) {
                    (this.props.islive && "period" == a.get("name") || "period" != a.get("name") &&
                    a.get("display")) && e.push({name: a.get("name"), text: a.get("text")})
                }.bind(this));
                return c.default.createElement(g.default, {
                    className: "room-fanstop",
                    title: "\u7c89\u4e1d\u699c",
                    onClose: this.props.onClose
                }, f, b, c.default.createElement(m.default, {
                    className: "tab",
                    node: e,
                    active: a,
                    onChange: this.props.onChangeCategory
                }))
            }
        });
        k.default = a
    }, 421: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(224);
        d = b(d);
        var e = a(3), f = a(227), m = b(f), f = a(7), g = b(f), f = a(2), h = b(f), f = a(246), p = b(f), f = a(8), l = b(f), f = a(27), n = b(f), f = a(1), r = b(f), f = a(13), q = b(f), f = a(14), y = b(f), f = a(15), w = b(f), f = a(422), t = b(f), f = a(423), v = b(f), f = a(294), A = b(f), f = a(205), x = b(f), f = a(304), z = b(f), f = a(424), D = b(f), f = a(425), u = b(f), f = a(426), Q = b(f), f = a(427), G = b(f), f = a(429), E = b(f), f = a(430), R = b(f), f = a(432), M = b(f), f = a(434), F = b(f), f = a(435), H = b(f), f = a(436), B = b(f), f = a(437), K = b(f);
        a = a(266);
        var S = b(a), V = k.NAMESPACE = "page.room";
        a = c.default.fromJS({
            roomID: 0,
            windowWidth: 0,
            windowHeight: 0,
            videoWidth: 0,
            videoHeight: 0,
            mainTabActive: "pubchat",
            spectatorCategoryActive: "citizen",
            selectedSpectator: null,
            requirePassword: !1,
            nonsupport: !1,
            connecting: !0,
            roomFull: !1,
            privateChatArrival: !1,
            presentGiftTopPosition: 0,
            chatListHeight: 0,
            spectatorListHeight: 0,
            appBannerTop: 0,
            showingRoomPanel: !0,
            showingAppBanner: !1,
            showingSpectatorMenu: !1,
            collapsedAppBanner: !1,
            hideAwayPlayer: !1
        });
        x.default.registerByMap(V, a, {});
        a = function N() {
            N.superclass.constructor.call(this, x.default, V);
            this._bindSelf("_ioLoginSuccess",
                "_ioPrivateRoom", "_ioRelogin", "_ioRoomFull", "_ioNonsupport", "_enterPrivateBack", "_loginSocket", "_getRoomInfoBack", "_getRoomUserStateBack", "_ioLiveVideoStateChange", "_ioPublicChat", "_ioPrivateChat", "_ioGift", "_ioRedEnvelope", "_sendGiftBack", "_privateChatBack", "_publicChatBack", "_ioUpdateSpectator", "_pickOneLive", "_resizeHandler", "_overlayShowInNonstandardBrowser", "_overlayHideInNonstandardBrowser")
        };
        (0, e.extend)(a, d.default, {
            setup: function () {
                this.update({roomID: this._getRoomID()});
                window.addEventListener("resize",
                    this._resizeHandler, !1);
                this._resizeHandler();
                this._bindIO(!0);
                this._getRoomInfo();
                this._whetherShowAppBanner();
                this._whetherCollapseAppBanner();
                D.default.setup();
                F.default.setup();
                u.default.setup();
                M.default.setup();
                R.default.setup();
                B.default.setup();
                H.default.setup();
                E.default.setup();
                G.default.setup();
                Q.default.setup();
                h.default.nonstandardPlayer && (n.default.subscribe("overlay-show", this._overlayShowInNonstandardBrowser), n.default.subscribe("overlay-hide", this._overlayHideInNonstandardBrowser))
            },
            teardown: function () {
                window.removeEventListener("resize", this._resizeHandler, !1);
                this._bindIO();
                t.default.close();
                clearTimeout(this._reloginTimer);
                this.init();
                D.default.teardown();
                F.default.teardown();
                u.default.teardown();
                M.default.teardown();
                B.default.teardown();
                R.default.teardown();
                H.default.teardown();
                E.default.teardown();
                G.default.teardown();
                K.default.teardown();
                Q.default.teardown();
                S.default.init();
                h.default.nonstandardPlayer && (n.default.unsubscribe("overlay-show", this._overlayShowInNonstandardBrowser),
                    n.default.unsubscribe("overlay-hide", this._overlayHideInNonstandardBrowser))
            }, switchMainTab: function (a) {
                this.update({
                    mainTabActive: a,
                    privateChatArrival: "prichat" == a ? !1 : this.getState().get("privateChatArrival")
                });
                this._whetherShowAppBanner();
                "prichat" != a && "pubchat" != a ? this.hideRoomPanel() : this.showRoomPanel()
            }, changeSpectatorCategory: function (a) {
                this.update({spectatorCategoryActive: a})
            }, showSpectatorMenu: function () {
                this.update({showingSpectatorMenu: !0})
            }, hideSpectatorMenu: function () {
                this.update({showingSpectatorMenu: !1})
            },
            showRoomPanel: function () {
                this.update({showingRoomPanel: !0})
            }, hideRoomPanel: function () {
                this.update({showingRoomPanel: !1})
            }, selectSpectator: function (a) {
                var b = this.getRootState().room.spectator.get("all");
                if (a && b.has(String(a)))return this.update({selectedSpectator: b.get(a)}), !0;
                a && alert("\u8be5\u7528\u6237\u4e0d\u5728\u6b64\u623f\u95f4\u5185\u3002");
                this.update({selectedSpectator: null})
            }, enterPrivateRoom: function (a, b) {
                (0, y.default)("room-action-validate.php", {
                    r: a,
                    passwd: b,
                    encpass: q.default.ticket
                }).done(this._enterPrivateBack)
            },
            hideAppBanner: function () {
                this.update({showingAppBanner: !1})
            }, collapseAppBanner: function () {
                this.update({collapsedAppBanner: !0});
                l.default.setItem("collapsedAppBanner", "1")
            }, calculateVideoDimension: function () {
                var a = Math.min(document.documentElement.clientWidth, 480);
                this.update({videoWidth: a, videoHeight: 3 * a / 4})
            }, calculatePresentGiftTopPosition: function () {
                var a = this.getState().get("videoHeight"), b = this.getState().get("windowHeight");
                this.update({presentGiftTopPosition: b - a - this._getHeaderHeight()})
            }, calculateChatListHeight: function () {
                var a =
                    this.getState().get("windowHeight") - this.getState().get("videoHeight") - 36 - 50 - this._getHeaderHeight();
                this.update({chatListHeight: a})
            }, calculateSpectatorListHeight: function () {
                var a = this.getState().get("windowHeight") - this.getState().get("videoHeight") - 36 - 41 - this._getHeaderHeight();
                this.update({spectatorListHeight: a})
            }, calculateAppBannerPosition: function () {
                this.update({appBannerTop: this.getState().get("videoHeight") + 36 + this._getHeaderHeight()})
            }, _getHeaderHeight: function () {
                return h.default.nonstandardPlayer ?
                    768 > this.getState().get("windowWidth") ? 56 : 64 : 0
            }, _getRoomInfo: function () {
                var a = q.default.info ? q.default.info.id : void 0;
                (0, y.default)("coop-mobile-inroom.php", {
                    rid: this.getState().get("roomID"),
                    playeruid: a,
                    logiuid: a,
                    encpass: q.default.ticket
                }).done(this._getRoomInfoBack)
            }, _getRoomInfoBack: function (a) {
                var b = this;
                if ("001" == a.flag) {
                    var f = a.content.roommsg, e = a.content.roominfo, d = a.content.roomParamInfo, n = a.content.liveinfo, k = JSON.parse(a.content.roomlist).content, l = d.operation.privnote, p = {
                        uid: e.id,
                        alias: e.alias,
                        rid: e.rid,
                        wealthrank: e.wealthrank,
                        avatar: e.uoption.picuser,
                        time: n.starttime && m.default.formatSecond((Date.now() - 1E3 * n.starttime) / 1E3),
                        redEnvelopeAmount: Number(n.content["1"].red.allgetnum),
                        following: !!a.content.isFav
                    };
                    E.default.update(p);
                    u.default.addTarget(p.alias, p.uid);
                    R.default.updateSpectatorList(k);
                    G.default.changeLiveType(n.type);
                    G.default.updateStreamingParameter(e.id);
                    M.default.selectTarget(this.getRootState().room.owner);
                    Q.default.setCategoryDisplay(d.operation.setranking);
                    f && D.default.receivePublicChat(c.default.fromJS(JSON.parse(f)));
                    l && (D.default.receivePrivateChat(c.default.fromJS({
                        type: "privateBulletin",
                        content: l,
                        alias: e.alias,
                        uid: e.id,
                        rid: Number(e.rid)
                    })), this.update({privateChatArrival: !0}));
                    10 == n.type ? (Q.default.changeCategory("period"), 6 == n.livetype ? K.default.updateStreamingName(n.flvtitle) : (G.default.updateStreamingName(n.flvtitle), G.default.fetchLiveStreaming(), G.default.receivePoster(n.pic || n.spredPic || ""))) : -1 < g.default.getPath().indexOf("everlive") && this._playNextLive();
                    q.default.refresh().always(this._loginSocket);
                    q.default.isLogin() && this._getRoomUserState(e.uid);
                    document.title = a.content.roominfo.alias + "\u7684\u76f4\u64ad\u95f4 - " + w.default.text("\u516d\u95f4\u623f");
                    h.default.wechat && "wx" in window && (r.default.get("wechat-share-title") ? this._configWechatShare() : (0, y.default)("coop-mobile-shareContents.php").done(function (a) {
                        "001" == a.flag && (r.default.set("wechat-share-title", a.content.title), r.default.set("wechat-share-content", a.content.contents), b._configWechatShare())
                    }))
                } else alert(a.content)
            }, _getRoomUserState: function (a) {
                (0,
                    y.default)("room-roomUser.php", {
                    encpass: q.default.ticket,
                    logiuid: q.default.info.id,
                    r: a
                }).done(this._getRoomUserStateBack)
            }, _getRoomUserStateBack: function (a) {
                "001" == a.flag ? (M.default.receiveInventoryGift(a.content.proplist), q.default.isLogin() && H.default.fetchAmount()) : alert(a.content)
            }, _loginSocket: function () {
                var a = q.default.info ? q.default.info.uid : q.default.guestid, b = E.default.getState().get("uid"), c = q.default.isLogin() ? q.default.ticket : "";
                t.default.login(b, a, c);
                this.update({connecting: !0})
            }, _ioLoginSuccess: function () {
                this.update({connecting: !1});
                t.default.sendMsg("priv_info", {encpass: q.default.ticket || ""})
            }, _ioRelogin: function () {
                this.getState().get("connecting") || (t.default.close(), this._reloginTimer = setTimeout(this._loginSocket, 5E3), this.update({connecting: !0}))
            }, _ioPrivateRoom: function () {
                this.update({requirePassword: !0})
            }, _ioNonsupport: function () {
                this.update({nonsupport: !0})
            }, _enterPrivateBack: function (a) {
                "001" == a.flag ? this.update({requirePassword: !1}) : "203" == a.flag ? alert("\u8bf7\u767b\u5f55") : "106" == a.flag && alert("\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165")
            },
            _ioRoomFull: function () {
                this.update({roomFull: !0})
            }, _whetherShowAppBanner: function () {
                var a = (0, A.default)() && "pubchat" == this.getState().get("mainTabActive") && !window.navigator.standalone;
                this.update({showingAppBanner: a})
            }, _whetherCollapseAppBanner: function () {
                var a = l.default.getItem("collapsedAppBanner");
                this.update({collapsedAppBanner: !!a})
            }, _getRoomID: function () {
                var a = g.default.getPath();
                return (a = /^\/(\d+)/.exec(a)) ? parseInt(a[1]) : 0
            }, _playNextLive: function () {
                var a = z.default.get("synopsis");
                a ? a.done(this._pickOneLive) :
                    this._pickOneLive()
            }, _pickOneLive: function () {
                for (var a = z.default.getState().getIn(["synopsis", "u1", "list"]), b = a.get(p.default.randrange(0, a.size - 1)); b.get("rid") == this.getState().get("roomID");)b = a.get(p.default.randrange(0, a.size - 1));
                window.location = "/" + b.get("rid") + "?everlive"
            }, _ioLiveVideoStateChange: function (a) {
                G.default.changeLiveType(Number(a.content));
                10 == a.content ? (G.default.updateStreamingName(a.flvtitle), G.default.fetchLiveStreaming()) : -1 < g.default.getPath().indexOf("everlive") && this._playNextLive()
            },
            _ioPublicChat: function (a) {
                R.default.cacheChatPlayer(a)
            }, _ioPrivateChat: function (a) {
                R.default.cacheChatPlayer(a);
                "prichat" != this.getState().get("mainTabActive") && this.update({privateChatArrival: !0})
            }, _ioGift: function (a) {
                R.default.cacheChatPlayer(a)
            }, _sendGiftBack: function (a) {
                "001" == a.flag && M.default.selectTarget(this.getRootState().room.owner)
            }, _privateChatBack: function () {
                this.switchMainTab("prichat")
            }, _publicChatBack: function () {
                this.switchMainTab("pubchat")
            }, _ioUpdateSpectator: function () {
                R.default.refreshSpectator(this.getRootState().room.owner.get("uid"))
            },
            _ioRedEnvelope: function (a) {
                R.default.cacheChatPlayer(a)
            }, _resizeHandler: function () {
                var a = document.documentElement.clientWidth, b = document.documentElement.clientHeight;
                if (b != this.getState().get("windowHeight") || a != this.getState().get("windowWidth"))this.update({
                    windowWidth: a,
                    windowHeight: b
                }), this.calculateVideoDimension(), this.calculatePresentGiftTopPosition(), this.calculateChatListHeight(), this.calculateSpectatorListHeight(), this.calculateAppBannerPosition()
            }, _overlayShowInNonstandardBrowser: function () {
                this.update({hideAwayPlayer: !0})
            },
            _overlayHideInNonstandardBrowser: function () {
                this.update({hideAwayPlayer: !1})
            }, _configWechatShare: function () {
                var a = E.default.getState(), b = {
                    title: r.default.get("wechat-share-title") || document.title,
                    desc: a.get("alias") + (r.default.get("wechat-share-content") || "\u6b63\u5728\u516d\u95f4\u623f\u76f4\u64ad\u3002"),
                    link: "http://m.v.6.cn/" + this.getState().get("roomID"),
                    imgUrl: G.default.getState().get("poster") || a.get("avatar"),
                    success: function () {
                        "function" == typeof window.ga && window.ga("send", "event", "wechat",
                            "share")
                    }
                };
                v.default.config();
                wx.ready(function () {
                    wx.onMenuShareTimeline(b);
                    wx.onMenuShareAppMessage(b);
                    wx.onMenuShareQQ(b);
                    wx.onMenuShareQZone(b)
                })
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                t.default[a]("login.success", this._ioLoginSuccess);
                t.default[a]("receiveerr:104", this._ioPrivateRoom);
                t.default[a]("receiveerr:205", this._ioRelogin);
                t.default[a]("receiveerr:102", this._ioRoomFull);
                t.default[a]("nonsupport", this._ioNonsupport);
                t.default[a]("receive:101", this._ioPublicChat);
                t.default[a]("receive:107",
                    this._ioPrivateChat);
                t.default[a]("receive:105", this._ioLiveVideoStateChange);
                t.default[a]("receive:201", this._ioGift);
                t.default[a]("receive:413", this._ioUpdateSpectator);
                t.default[a]("receiveres:prop_prop", this._sendGiftBack);
                t.default[a]("receiveres:msg_private", this._privateChatBack);
                t.default[a]("receiveres:msg_room", this._publicChatBack);
                t.default[a]("receive:1304", this._ioRedEnvelope)
            }
        });
        k.default = new a
    }, 422: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function c(a) {
            if (a &&
                a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(3);
        d = c(d);
        var e = a(246), f = b(e), e = a(252), m = b(e), e = a(250), g = b(e), e = a(249), h = c(e), e = a(6), p = b(e), e = a(253), e = b(e);
        a = a(14);
        var l = b(a);
        a = function r() {
            r.superclass.constructor.apply(this, arguments);
            this.addressPool = [];
            this.addressPoolIndex = 0;
            this.address = "";
            this.uid = this.roomid = this.failCount = 0;
            this.encpass = "";
            this.heartbeatTimer =
                null;
            this.logined = !1;
            this.waitToConvey = [];
            this.heartbeat = this.heartbeat.bind(this);
            this._doLogin = this._doLogin.bind(this);
            this._onLoginFail = this._onLoginFail.bind(this);
            this._onGlobalBatchMessage = this._onGlobalBatchMessage.bind(this);
            this._doLoginTimer = null;
            this.on("login.success", this._onLoginSuccess)
        };
        d.extend(a, e.default, {
            onmessage: function (a) {
                var b = this.explode(a.data);
                this.trigger("message", a.data);
                if ("receivemessage" == b.command) {
                    b.content = "yes" == b.enc ? this.decode(b.content) : h.decode(b.content);
                    b.content = JSON.parse(this.stripZeroCharCode(b.content));
                    this.trigger("receive", b);
                    b = b.content;
                    if ("001" != b.flag)this.trigger("receiveerr", b), this.trigger("receiveerr:" + b.flag, b); else {
                        this.trigger("receive:" + b.content.typeID, b.content);
                        if (1413 == b.content.typeID) {
                            a = b.content.content;
                            for (var c = 0; c < a.length; c++) {
                                var e = a[c];
                                this.trigger("receive:" + e.typeID, e)
                            }
                        }
                        416 == b.content.typeID && (0, l.default)("room-getRoomMsgSys.php", {t: b.content.content}).done(this._onGlobalBatchMessage)
                    }
                    701 == b.content.typeID && (this.trigger("receiveres",
                        b.content.content), this.trigger("receiveres:" + b.content.content.t, b.content.content))
                } else"result" == b.command ? this.trigger(b.content, b) : "network.error" != b.command && "SecurityError" != b.command || this.trigger(b.command, b)
            }, login: function (a, b, c) {
                var e = this;
                this.roomid = a;
                this.uid = b;
                this.encpass = c;
                this.on("network.error", this._onNetworkError);
                this.on("SecurityError", this._onSecurityError);
                this.on("login.failed", this._onLoginFailed);
                this.on("close", this._onClose);
                this.on("error", this._onError);
                this.getAddress().done(function () {
                    return e._doLogin()
                })
            },
            sendMsg: function (a, b) {
                b = this.encode(JSON.stringify({t: a, content: b}));
                this.convey(["command=sendmessage", "content=" + b])
            }, convey: function (a) {
                var b = a[0];
                this.logined || "command=login" == b ? this.send(this.implode(a)) : this.waitToConvey.push(a)
            }, conveyQueue: function () {
                for (var a; a = this.waitToConvey.shift();)this.convey(a)
            }, implode: function (a) {
                a.push("");
                return a.join("\r\n")
            }, explode: function (a) {
                a = a.split("\r\n");
                var b = 0, c = {}, e;
                for (a.pop(); b < a.length; b++)e = a[b].split("="), c[e[0]] = e[1];
                return c
            }, decode: function (a) {
                a =
                    a.replace(/\(|\)|\@/g, function (a) {
                        switch (a) {
                            case "(":
                                return "+";
                            case ")":
                                return "/";
                            case "@":
                                return "="
                        }
                    });
                a = h.decode(a);
                return a = (0, m.default)(a, 6)
            }, encode: function (a) {
                a = (0, g.default)(this.unicodeToByte(a).join(""), 6);
                a = h.encode(a);
                return a = a.replace(/\+|\/|\=/g, function (a) {
                    switch (a) {
                        case "+":
                            return "(";
                        case "/":
                            return ")";
                        case "=":
                            return "@"
                    }
                })
            }, heartbeat: function () {
                this.stopHeartbeat();
                this.convey(["command=sendmessage", "content=y8vPLwAA"]);
                this.heartbeatTimer = window.setTimeout(this.heartbeat, 16E3)
            },
            startHeartbeat: function () {
                this.heartbeatTimer = setTimeout(this.heartbeat, 1E3)
            }, stopHeartbeat: function () {
                clearTimeout(this.heartbeatTimer)
            }, getAddress: function () {
                var a = this, b = (0, p.default)();
                (0, l.default)("coop-mobile-chatConf.php", {
                    type: "chat",
                    ruid: this.roomid,
                    uid: this.uid
                }).done(function (c) {
                    "001" == c.flag ? (a.addressPool = f.default.shuffleArray(c.content.websock), a.addressPoolIndex = 0, b.resolve()) : (alert(c.content), b.reject())
                });
                return b
            }, unicodeToByte: function (a) {
                for (var b = [], c = 0, e = a.length, f; c < e; c++)f =
                    a.charCodeAt(c), 127 >= f ? b.push(String.fromCharCode(f)) : (2047 >= f ? b.push(String.fromCharCode(f >> 6 | 192)) : (65535 >= f ? b.push(String.fromCharCode(f >> 12 | 224)) : (b.push(String.fromCharCode(f >> 18 | 240)), b.push(String.fromCharCode(f >> 12 & 63 | 128))), b.push(String.fromCharCode(f >> 6 & 63 | 128))), b.push(String.fromCharCode(f & 63 | 128)));
                return b
            }, stripZeroCharCode: function (a) {
                for (var b = [], c = 0; c < a.length; c++)0 < a.charCodeAt(c) && b.push(a[c]);
                return b.join("")
            }, close: function () {
                clearTimeout(this._doLoginTimer);
                this._doLoginTimer =
                    null;
                this.stopHeartbeat();
                this.off("network.error");
                this.off("SecurityError");
                this.off("login.failed");
                this.off("close");
                this.off("error");
                this.logined = !1;
                this.waitToConvey = [];
                this.destroyCore()
            }, _doLogin: function () {
                var a = ["command=login", "uid=" + this.uid, "encpass=" + this.encpass, "roomid=" + this.roomid], b = this.addressPool;
                this.address = b = b[this.addressPoolIndex++ % b.length];
                this.connect("ws://" + b);
                this.convey(a);
                this._doLoginTimer = null
            }, _onLoginFail: function () {
                this._doLoginTimer || (this.logined = !1, this.failCount++,
                    this.stopHeartbeat(), this._doLoginTimer = setTimeout(this._doLogin, 1E3))
            }, _onLoginSuccess: function () {
                this.logined = !0;
                this.failCount = 0;
                this.conveyQueue();
                this.startHeartbeat()
            }, _onNetworkError: function () {
                this._onLoginFail()
            }, _onSecurityError: function () {
                this._onLoginFail()
            }, _onLoginFailed: function () {
                this._onLoginFail()
            }, _onClose: function (a) {
                this._onLoginFail()
            }, _onError: function (a) {
                this._onLoginFail()
            }, _onGlobalBatchMessage: function (a) {
                for (var b = 0; b < a.content.length; b++) {
                    var c = a.content[b];
                    this.trigger("receive:" +
                        c.typeID, c)
                }
            }
        });
        k.default = new a
    }, 423: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(2);
        var c = b(d);
        d = a(7);
        var e = b(d);
        a = a(14);
        var f = b(a);
        a = function () {
            this._getConfigBack = this._getConfigBack.bind(this)
        };
        a.prototype = {
            config: function () {
                c.default.wechat && "wx" in window && this._getConfig()
            }, _getConfig: function () {
                var a = window.location, a = a.protocol + "//" + a.host + e.default.getPath();
                (0, f.default)("api-getWechatTicket.php", {url: a}).done(this._getConfigBack)
            },
            _getConfigBack: function (a) {
                "001" == a.flag && (wx.config({
                    appId: a.content.appId,
                    timestamp: a.content.timestamp,
                    nonceStr: a.content.nonceStr,
                    signature: a.content.signature,
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
                }), wx.error(function (b) {
                    b = window.location;
                    a.content.url != b.protocol + "//" + b.host + e.default.getPath() && setTimeout(this._getWechatConfig, 2E3)
                }.bind(this)))
            }
        };
        k.default = new a
    }, 424: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k,
            "__esModule", {value: !0});
        k.RECEIVE_PRIVATE_CHAT = k.RECEIVE_PUBLIC_CHAT = k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(3);
        var e = a(224), e = b(e), f = a(422), m = b(f);
        a = a(205);
        var g = b(a), h = k.NAMESPACE = "room.chatlist", p = k.RECEIVE_PUBLIC_CHAT = h + ".RECEIVE_PUBLIC_CHAT", l = k.RECEIVE_PRIVATE_CHAT = h + ".RECEIVE_PRIVATE_CHAT";
        a = c.default.fromJS({publicChat: [], privateChat: []});
        f = {};
        f[p] = function (a, b) {
            return a.update("publicChat", function (a) {
                var e = b.payload;
                return (Array.isArray(e) ? a.withMutations(function (a) {
                    e.forEach(function (b) {
                        return a.push(b)
                    })
                }) :
                    c.default.List.isList(e) ? a.concat(e) : a.push(e)).takeLast(66)
            })
        };
        f[l] = function (a, b) {
            return a.update("privateChat", function (a) {
                var e = b.payload;
                return (c.default.List.isList(e) ? a.concat(e) : a.push(e)).takeLast(66)
            })
        };
        g.default.registerByMap(h, a, f);
        a = function r() {
            r.superclass.constructor.call(this, g.default, h);
            this._bindSelf("_ioPublicChat", "_ioPrivateChat", "_ioSystemMessage", "_ioWelcome", "_ioGift", "_ioRedEnvelope")
        };
        (0, d.extend)(a, e.default, {
            actionCreator: {
                receivePublicChat: function (a) {
                    return {type: p, payload: a}
                },
                receivePrivateChat: function (a) {
                    return {type: l, payload: a}
                }
            }, setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO();
                this.init()
            }, _ioPublicChat: function (a) {
                this.receivePublicChat(c.default.fromJS(a))
            }, _ioPrivateChat: function (a) {
                this.receivePrivateChat(c.default.fromJS(a))
            }, _ioWelcome: function (a) {
                this.receivePublicChat(c.default.fromJS(a))
            }, _ioGift: function (a) {
                this.receivePublicChat(c.default.fromJS(a))
            }, _ioRedEnvelope: function (a) {
                a.tm -= a.tm % 60;
                this.receivePublicChat(c.default.fromJS(a))
            },
            _ioSystemMessage: function (a) {
                this.receivePublicChat(c.default.fromJS(a))
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                m.default[a]("receive:101", this._ioPublicChat);
                m.default[a]("receive:107", this._ioPrivateChat);
                m.default[a]("receive:102", this._ioSystemMessage);
                m.default[a]("receive:123", this._ioWelcome);
                m.default[a]("receive:201", this._ioGift);
                m.default[a]("receive:1304", this._ioRedEnvelope)
            }
        });
        k.default = new a
    }, 425: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k,
            "__esModule", {value: !0});
        k.ADD_TARGET = k.SET_SECRET_OFF = k.SET_SECRET_ON = k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(3);
        var e = a(224), e = b(e), f = a(422), m = b(f);
        a = a(205);
        var g = b(a), h = k.NAMESPACE = "room.chatform", p = k.SET_SECRET_ON = h + ".SET_SECRET_ON", l = k.SET_SECRET_OFF = h + ".SET_SECRET_OFF", n = k.ADD_TARGET = h + ".ADD_TARGET";
        a = c.default.fromJS({
            showingForm: !1,
            showingEmotionLayer: !1,
            emotionCategoryActive: "normal",
            target: null,
            targetList: [],
            secret: !1,
            sending: !1
        });
        f = {};
        f[p] = function (a, b) {
            var c = b.payload, e = c.targetAll,
                f = c.targetNobody;
            a = a.set("secret", !0);
            a.get("target") && "0" != a.getIn(["target", "uid"]) || (a = a.update("targetList", function (a) {
                a.contains(e) && (a = a.remove(a.indexOf(e)));
                return a.unshift(f)
            }), a = a.set("target", f));
            return a
        };
        f[l] = function (a, b) {
            var c = b.payload, e = c.targetAll, f = c.targetNobody;
            a = a.set("secret", !1);
            a = a.update("targetList", function (a) {
                a.contains(f) && (a = a.remove(a.indexOf(f)));
                a.contains(e) || (a = a.unshift(e));
                return a
            });
            a.get("target") && "0" != a.getIn(["target", "uid"]) || (a = a.set("target", e));
            return a
        };
        f[n] = function (a, b) {
            var e = c.default.fromJS({uname: b.payload.alias, uid: b.payload.uid});
            return a.get("targetList").contains(e) ? a : a.update("targetList", function (a) {
                return a.push(e)
            })
        };
        g.default.registerByMap(h, a, f);
        a = function q() {
            q.superclass.constructor.call(this, g.default, h);
            this._targetAll = c.default.Map({uname: "\u6240\u6709\u4eba", uid: "0"});
            this._targetNobody = c.default.Map({uname: "\u8bf7\u9009\u62e9\u804a\u5929\u5bf9\u8c61", uid: "0"});
            this._bindSelf("_chatBack")
        };
        (0, d.extend)(a, e.default, {
            actionCreator: {
                setSecretOn: function (a,
                                       b) {
                    return {type: p, payload: {targetAll: this._targetAll, targetNobody: this._targetNobody}}
                }, setSecretOff: function () {
                    return {type: l, payload: {targetAll: this._targetAll, targetNobody: this._targetNobody}}
                }, addTarget: function (a, b) {
                    return {type: n, payload: {alias: a, uid: b}}
                }
            }, setup: function () {
                this.update({secret: !1, targetList: c.default.List([this._targetAll])});
                this.selectTarget(this._targetAll);
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO(!1);
                this.init()
            }, showPublicChatForm: function () {
                this.update({showingForm: !0});
                this.setSecretOff()
            }, showPrivateChatForm: function () {
                this.update({showingForm: !0});
                this.setSecretOn()
            }, hideForm: function () {
                this.update({showingForm: !1})
            }, showEmotionLayer: function () {
                this.update({showingEmotionLayer: !0})
            }, hideEmotionLayer: function () {
                this.update({showingEmotionLayer: !1})
            }, toggleEmotionLayer: function () {
                this.update({showingEmotionLayer: !this.getState().get("showingEmotionLayer")})
            }, selectTarget: function (a) {
                var b = this.getState().get("targetList");
                if (c.default.Map.isMap(a))b.every(function (b) {
                    return b.get("uid") !=
                        a.get("uid")
                }) && (b = b.push(a)), this.update({
                    target: a,
                    targetList: b
                }); else if ("string" == typeof a || "number" == typeof a)for (var e = 0; e < b.size; e++)if (b.get(e).get("uid") == a) {
                    this.update({target: b.get(e)});
                    break
                }
            }, changeEmotionCategory: function (a) {
                this.update({emotionCategoryActive: a})
            }, toggleSecret: function () {
                this.getState().get("secret") ? this.setSecretOff() : this.setSecretOn()
            }, chat: function (a, b, c) {
                var e = this.getState().get("secret"), f = this.getState().get("target");
                if (e && (!f || "0" == f.get("uid")))return alert("\u8bf7\u9009\u62e9\u79c1\u804a\u5bf9\u8c61");
                a = {
                    r: a,
                    ak: b,
                    t: f.get("uid", 0),
                    toid: f.get("uid", 0),
                    torid: f.get("urid", f.get("rid", 0)),
                    to: f.get("uname", f.get("alias", "")),
                    m: c,
                    ttt: Date.now()
                };
                this.update({sending: !0});
                m.default.sendMsg(e ? "msg_private" : "msg_room", a)
            }, _chatBack: function (a) {
                this.update({sending: !1, showingForm: !1});
                "001" == a.flag ? (this.hideForm(), "function" == typeof window.ga && window.ga("send", "event", "chat", this.getState().get("secret") ? "private_say" : "public_say")) : "201" == a.flag ? alert("\u53d1\u8a00\u8fc7\u5feb") : alert(a.content)
            }, _bindIO: function (a) {
                a =
                    a ? "on" : "off";
                m.default[a]("receiveres:msg_private", this._chatBack);
                m.default[a]("receiveres:msg_room", this._chatBack)
            }
        });
        k.default = new a
    }, 426: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.SET_CATEGORY_DISPLAY = k.RECEIVE_PERIOD_TOP_LIST = k.RECEIVE_TOP_LIST = k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(224);
        d = b(d);
        var e = a(3), f = a(14), m = b(f), f = a(422), g = b(f);
        a = a(205);
        var h = b(a), p = k.NAMESPACE = "room.fantop", l = k.RECEIVE_TOP_LIST = p + ".RECEIVE_TOP_LIST",
            n = k.RECEIVE_PERIOD_TOP_LIST = p + ".RECEIVE_PERIOD_TOP_LIST", r = k.SET_CATEGORY_DISPLAY = p + ".SET_CATEGORY_DISPLAY";
        a = c.default.fromJS({
            fanstop: [{name: "period", text: "\u672c\u573a", display: !1, list: null}, {
                name: "week",
                text: "7\u5929",
                display: !1,
                list: null
            }, {name: "month", text: "30\u5929", display: !1, list: null}, {
                name: "all",
                text: "\u8d85\u7c89",
                display: !1,
                list: null
            }], activeCategory: "week", showing: !1
        });
        f = {};
        f[l] = function (a, b) {
            var c = b.payload;
            return a.update("fanstop", function (a) {
                return a.map(function (a, b) {
                    var e = a.get("name");
                    return "all" == e ? a.set("list", c.get("fansList")) : "month" == e ? a.set("list", c.get("fansListDay")) : "week" == e ? a.set("list", c.get("fansListWeek")) : a
                })
            })
        };
        f[r] = function (a, b) {
            var c = b.payload;
            return a.update("fanstop", function (a) {
                return a.map(function (a, b) {
                    return 0 == b || 1 == b ? a.set("display", !0) : 2 == b ? 0 != c ? a.set("display", !0) : a.set("display", !1) : 3 == b ? 2 == c ? a.set("display", !0) : a.set("display", !1) : a
                })
            })
        };
        f[n] = function (a, b) {
            return a.setIn(["fanstop", 0, "list"], b.payload)
        };
        h.default.registerByMap(p, a, f);
        a = function y() {
            y.superclass.constructor.call(this,
                h.default, p);
            this._bindSelf("_fetchPeriodFansTopBack", "_fetchFansTopBack", "_ioFansTop")
        };
        (0, e.extend)(a, d.default, {
            actionCreator: {
                receiveTopList: function (a) {
                    return {type: l, payload: a}
                }, receivePeriodTopList: function (a) {
                    return {type: n, payload: a}
                }, setCategoryDisplay: function (a) {
                    return {type: r, payload: a}
                }
            }, setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO(!1);
                this.init()
            }, show: function () {
                this.update({showing: !0});
                this._whetherFetch()
            }, hide: function () {
                this.update({showing: !1})
            }, changeCategory: function (a) {
                this.update({activeCategory: a});
                this._whetherFetch()
            }, fetchPeriodFansTop: function (a, b) {
                (0, m.default)("room-getRoomFans.php", {
                    id: b || this.getRootState().room.owner.get("uid"),
                    t: a
                }).done(this._fetchPeriodFansTopBack)
            }, _fetchPeriodFansTopBack: function (a) {
                "001" == a.flag && this.receivePeriodTopList(c.default.fromJS(a.content.content.post))
            }, fetchFansTop: function (a) {
                (0, m.default)("room-getDataActive.php", {uid: a || this.getRootState().room.owner.get("uid")}).done(this._fetchFansTopBack)
            }, _fetchFansTopBack: function (a) {
                "001" == a.flag && this.receiveTopList(c.default.fromJS(a.content))
            },
            _whetherFetch: function () {
                var a = this.getState(), b = a.get("activeCategory");
                a.get("showing") && ("period" != b || a.getIn(["fanstop", 0, "list"]) || this.fetchPeriodFansTop(Math.round(Date.now() / 1E3)), "period" == b || a.getIn(["fanstop", 1, "list"]) || this.fetchFansTop())
            }, _ioFansTop: function (a) {
                this.getState().getIn(["fanstop", 0, "list"]) && this.fetchPeriodFansTop(a.content)
            }, _bindIO: function (a) {
                g.default[a ? "on" : "off"]("receive:414", this._ioFansTop)
            }
        });
        k.default = new a
    }, 427: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ?
                a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(3);
        var e = a(224), e = b(e), f = a(422), m = b(f), g = a(428);
        a = a(205);
        var h = b(a), p = k.NAMESPACE = "room.livevideo";
        a = c.default.fromJS({liveType: 10, streamingParameter: "", streamingName: "", streaming: "", poster: ""});
        h.default.registerByMap(p, a, {});
        a = function n() {
            n.superclass.constructor.call(this, h.default, p);
            this._bindSelf("_fetchLiveStreamingBack", "_ioChangeStreaming");
            this._liveStreaming = null
        };
        (0, d.extend)(a, e.default,
            {
                setup: function () {
                    this._bindIO(!0)
                }, teardown: function () {
                this._liveStreaming && this._liveStreaming.abort();
                this._liveStreaming = null;
                this._bindIO(!1);
                this.init()
            }, updateStreamingName: function (a) {
                this.update({streamingName: a})
            }, updateStreamingParameter: function (a) {
                this.update({streamingParameter: a})
            }, fetchLiveStreaming: function () {
                this._liveStreaming && this._liveStreaming.abort();
                var a = this.getState().get("streamingName"), b = this.getState().get("streamingParameter");
                a && b && (this._liveStreaming = new g.LiveStreaming(a,
                    b), this._liveStreaming.getLiveStreaming().done(this._fetchLiveStreamingBack))
            }, refreshLiveStreaming: function () {
                10 == this.getState().get("liveType") && (this.update({streaming: ""}), this.fetchLiveStreaming())
            }, changeLiveType: function (a) {
                this.update({liveType: Number(a)})
            }, receivePoster: function (a) {
                this.update({poster: a})
            }, _fetchLiveStreamingBack: function (a) {
                this.update({streaming: a})
            }, _ioChangeStreaming: function (a) {
                a.content.flvtitle && (this.updateStreamingName(a.content.flvtitle), this.updateStreamingParameter(a.content.uid),
                    this.fetchLiveStreaming())
            }, _bindIO: function (a) {
                m.default[a ? "on" : "off"]("receive:301", this._ioChangeStreaming)
            }
            });
        k.default = new a
    }, 428: function (d, k, a) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.LiveStreaming = void 0;
        k.default = function (a, b) {
            return (new f(a, b)).getLiveStreaming()
        };
        var b = (d = a(6)) && d.__esModule ? d : {default: d}, c = function (a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            b.default = a;
            return b
        }(a(249)), e = (a = a(5)) &&
        a.__esModule ? a : {default: a}, f = k.LiveStreaming = function (a, c) {
            this._liveStreamingCode = a;
            this._uid = c || "";
            this._liveStreamingIPIndex = 0;
            this._liveStreamingIPPool = null;
            this._liveStreamingURL = "";
            this._getLiveStreamingDelayCode = 0;
            this._currentAjax = this._validateStreamingTime = this._requestLiveStreamingTimer = null;
            this._result = (0, b.default)();
            this._requestLiveStreaming = this._requestLiveStreaming.bind(this);
            this._validateStreamingBack = this._validateStreamingBack.bind(this);
            this._validateStreaming = this._validateStreaming.bind(this);
            this._requestLiveStreamingBack = this._requestLiveStreamingBack.bind(this)
        };
        f.prototype = {
            getLiveStreaming: function () {
                "pending" == this._result.state() && this._getLiveStreamingIPPool();
                return this._result
            }, abort: function () {
                "pending" == this._result.state() && this._result.reject();
                this._currentAjax && (this._currentAjax.abort(), this._currentAjax = null);
                clearTimeout(this._requestLiveStreamingTimer);
                clearTimeout(this._validateStreamingTime)
            }, _getLiveStreamingIPPool: function () {
                var a = this, b, c;
                this._liveStreamingIPPool ?
                    this._requestLiveStreaming() : (b = this._currentAjax = (0, e.default)({
                    url: "http://rio.6rooms.com/live/?s=" + this._uid,
                    type: "GET",
                    dataType: "xml"
                }), c = function (b) {
                    var e = b.getElementsByTagName("hip")[0];
                    b = b.getElementsByTagName("morehip")[0].getElementsByTagName("ip");
                    var f = 0, d = [];
                    for (d.push(e.firstChild.nodeValue); f < b.length; f++)(e = b[f].firstChild && b[f].firstChild.nodeValue) && d.push(e);
                    a._liveStreamingIPPool = d;
                    a._requestLiveStreaming();
                    a = c = null
                }, b.done(c))
            }, _getLiveStreamingIP: function () {
                var a = this._liveStreamingIPPool;
                return a[this._liveStreamingIPIndex % a.length]
            }, _requestLiveStreaming: function () {
                var a = this._getLiveStreamingIP();
                this._currentAjax = (0, e.default)({
                    url: "http://" + a + "/liverepeater/playstream?StreamName=" + c.encode(this._liveStreamingCode) + (this._getLiveStreamingDelayCode ? "&id=" + this._getLiveStreamingDelayCode : ""),
                    dataType: "text"
                }).always(this._requestLiveStreamingBack)
            }, _requestLiveStreamingBack: function (a, b) {
                this._getLiveStreamingIP();
                if ("OK" != b)this._liveStreamingIPIndex++, this._getLiveStreamingDelayCode =
                    0, this._requestLiveStreaming(); else if (-1 < a.indexOf("Error"))this._requestLiveStreamingTimer = setTimeout(this._requestLiveStreaming, 1E3); else if (-1 < a.indexOf("Delay")) {
                    var c = a.replace(/\[\+ok\]\s*(-?\d+).*/i, "$1");
                    this._getLiveStreamingDelayCode = Number(c);
                    this._requestLiveStreamingTimer = setTimeout(this._requestLiveStreaming, 1E3)
                } else c = a.replace(/\[\+ok\]\s*/i, ""), this._liveStreamingURL = "http://" + this._getLiveStreamingIP() + "/" + c + "/playlist.m3u8", this._validateStreaming()
            }, _validateStreaming: function () {
                var a =
                    this._liveStreamingURL;
                a ? this._currentAjax = (0, e.default)({
                    url: a,
                    dataType: "text"
                }).always(this._validateStreamingBack) : this._result && this._result.reject()
            }, _validateStreamingBack: function (a, b) {
                "OK" == b ? this._result.resolve(this._liveStreamingURL) : this._validateStreamingTime = setTimeout(this._validateStreaming, 1E3)
            }
        }
    }, 429: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(224);
        d = b(d);
        var e = a(3),
            f = a(14), m = b(f), f = a(422), g = b(f);
        a = a(205);
        var h = b(a), p = k.NAMESPACE = "room.owner";
        a = c.default.fromJS({
            uid: 0,
            alias: "",
            wealthrank: 0,
            rid: "",
            avatar: "",
            time: "",
            redEnvelopeAmount: 0,
            following: !1
        });
        h.default.registerByMap(p, a, {});
        a = function n() {
            n.superclass.constructor.call(this, h.default, p);
            this._bindSelf("_unfollowBack", "_followBack", "_ioRedEnvelope")
        };
        (0, e.extend)(a, d.default, {
            setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO();
                this.init()
            }, follow: function () {
                (0, m.default)("coop-mobile-follow_add.php",
                    {tuid: this.getState().get("uid")}).done(this._followBack)
            }, unfollow: function () {
                (0, m.default)("coop-mobile-follow_del.php", {r: this.getState().get("uid")}).done(this._unfollowBack)
            }, _followBack: function (a) {
                "001" == a.flag ? this.update({following: !0}) : alert(a.content)
            }, _unfollowBack: function (a) {
                "001" == a.flag ? this.update({following: !1}) : alert(a.content)
            }, _ioRedEnvelope: function (a) {
                this.update({redEnvelopeAmount: this.getState().get("redEnvelopeAmount") + 1})
            }, _bindIO: function (a) {
                g.default[a ? "on" : "off"]("receive:1304",
                    this._ioRedEnvelope)
            }
        });
        k.default = new a
    }, 430: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.CACHE_PLAYER = k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(224);
        d = b(d);
        var e = a(3), f = a(14), m = b(f), f = a(422), g = b(f), f = a(431), h = b(f);
        a = a(205);
        var p = b(a), l = k.NAMESPACE = "room.spectator", n = k.CACHE_PLAYER = l + ".CACHE_PLAYER";
        a = c.default.fromJS({
            all: {},
            spectator: [],
            spectatorAmount: 0,
            spectatorManager: [],
            spectatorGuard: [],
            showingMoreSpectatorButton: !0,
            loadingAll: !1
        });
        f = {};
        f[n] = function (a, b) {
            var e = b.payload, f = a.get("all"), f = f.withMutations(function (a) {
                c.default.List.isList(e) ? e.forEach(function (b, c) {
                    a.set(b.get("uid", b.get("id")), b)
                }) : a.set(e.get("uid", e.get("id")), e)
            });
            return a.set("all", f)
        };
        p.default.registerByMap(l, a, f);
        a = function q() {
            q.superclass.constructor.call(this, p.default, l);
            this._bindSelf("_refreshSpecatorBack", "_ioBanSayingBack", "_ioRecoverBack", "_ioKickOut", "_ioAllSpectator")
        };
        (0, e.extend)(a, d.default, {
            actionCreator: {
                cachePlayer: function (a) {
                    return {
                        type: n,
                        payload: a
                    }
                }
            }, setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO();
                this.init()
            }, isVIP: function (a) {
                return -1 < a.indexOf("7103") || -1 < a.indexOf("7104") || -1 < a.indexOf("7105")
            }, isGuard: function (a) {
                return -1 < a.indexOf("7569") || -1 < a.indexOf("7570")
            }, refreshSpectator: function (a) {
                (0, m.default)("room-getRoomList.php", {id: a, tm: Date.now()}).done(this._refreshSpecatorBack)
            }, fetchAllSpectator: function () {
                this.update({loadingAll: !0});
                g.default.sendMsg("priv_alllist", {g: ""})
            }, disableTalk: function (a, b) {
                g.default.sendMsg("priv_stopmsg",
                    {u: a, r: b})
            }, enableTalk: function (a, b) {
                g.default.sendMsg("priv_recover", {u: a, r: b})
            }, kickout: function (a, b) {
                g.default.sendMsg("priv_kill", {u: a, r: b})
            }, updateSpectatorList: function (a) {
                var b = a.content, e = function (a) {
                    a.privInfo = (0, h.default)(a.priv || "");
                    return a
                }, f = b.all.map(e), d = b.adm.map(e), e = b.safe.map(e), g = Number(a.num);
                a = 50 < Number(a.num) && 51 >= b.all.length;
                e.sort(function (a, b) {
                    return a.flag != b.flag ? a.flag ? -1 : 1 : -1 < a.priv.indexOf("7570") ? -1 : 1
                });
                e.forEach(function (a) {
                    a.guard = 1
                });
                this.update({
                    spectator: c.default.fromJS(f),
                    spectatorAmount: g,
                    spectatorManager: c.default.fromJS(d),
                    spectatorGuard: c.default.fromJS(e),
                    showingMoreSpectatorButton: a
                });
                this.cachePlayer(this.getState().get("spectator"))
            }, cacheChatPlayer: function (a) {
                var b;
                a.toid && (b = {uname: a.to, uid: a.toid, rid: a.torid});
                a.tid && (b = {uname: a.to, uid: a.tid, rid: a.trid});
                a.fid && (b = {uname: a.from, uid: a.fid, rid: a.frid});
                b && this.cachePlayer(c.default.fromJS(b))
            }, _refreshSpecatorBack: function (a) {
                "001" == a.flag && (this.updateSpectatorList(a.content), this.update({spectatorAmount: Number(a.content.num)}))
            },
            _ioAllSpectator: function (a) {
                this.updateSpectatorList(a)
            }, _ioBanSayingBack: function (a) {
                "001" == a.flag ? ("function" == typeof window.ga && window.ga("send", "event", "spectator", "ban-saying"), alert("\u7981\u8a00\u6210\u529f\u3002")) : alert(a.content)
            }, _ioRecoverBack: function (a) {
                "001" == a.flag ? ("function" == typeof window.ga && window.ga("send", "event", "spectator", "recover"), alert("\u53d6\u6d88\u7981\u8a00\u6210\u529f\u3002")) : alert(a.content)
            }, _ioKickOut: function (a) {
                "001" == a.flag ? ("function" == typeof window.ga && window.ga("send",
                    "event", "spectator", "kickout"), alert("\u8e22\u51fa\u6210\u529f\u3002")) : alert(a.content)
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                g.default[a]("receive:407", this._ioAllSpectator);
                g.default[a]("receiveres:priv_stopmsg", this._ioBanSayingBack);
                g.default[a]("receiveres:priv_recover", this._ioRecoverBack);
                g.default[a]("receiveres:priv_kill", this._ioKickOut)
            }
        });
        k.default = new a
    }, 431: function (d, k) {
        Object.defineProperty(k, "__esModule", {value: !0});
        k.default = function (a) {
            a = a.split("|");
            return {
                role: Number(a[0]),
                starRank: Number(a[1]),
                status: Number(a[2]),
                fuid: a[3],
                noteid: Number(a[4]),
                seller: Number(a[5]),
                prop: a[6].split("-"),
                richRank: Number(a[7]),
                army: a[11],
                phone: a[12],
                badge: a[13].split("-")
            }
        }
    }, 432: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.SHIFT_PRESENT_QUEUE = k.PUSH_PRESENT_QUEUE = k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(433);
        var e = b(d);
        d = a(224);
        d = b(d);
        var f = a(3), m = a(5), g = b(m), m = a(8), h = b(m), m = a(1), p = b(m), m = a(14), l = b(m), m = a(13), n = b(m), m = a(422), r = b(m), m =
            a(205), q = b(m);
        a = a(266);
        var y = b(a), w = k.NAMESPACE = "room.gift", t = k.PUSH_PRESENT_QUEUE = w + ".PUSH_PRESENT_QUEUE", v = k.SHIFT_PRESENT_QUEUE = w + ".SHIFT_PRESENT_QUEUE";
        a = c.default.fromJS({
            gift: null,
            showingGiftStore: !1,
            selectedGift: null,
            giftAmount: 1,
            sendGiftTo: null,
            waitToPresent: [],
            inventoryGift: null,
            currentCategory: "1"
        });
        m = {};
        m[t] = function (a, b) {
            return a.update("waitToPresent", function (a) {
                return a.push(b.payload)
            })
        };
        m[v] = function (a, b) {
            return a.update("waitToPresent", function (a) {
                return a.shift()
            })
        };
        q.default.registerByMap(w,
            a, m);
        a = function x() {
            x.superclass.constructor.call(this, q.default, w);
            this._bindSelf("_ioGift", "_ioUpdateInventoryGift", "_sendGiftBack", "_getGiftInfoBack", "_updateGift", "_ioUserState")
        };
        (0, f.extend)(a, d.default, {
            actionCreator: {
                pushPresentQueue: function (a) {
                    return {type: t, payload: a}
                }, shiftPresentQueue: function () {
                    return {type: v}
                }
            }, setup: function () {
                this._bindIO(!0);
                this._getGiftInfo()
            }, teardown: function () {
                this._bindIO();
                this.init()
            }, showGiftStore: function () {
                this.update({showingGiftStore: !0})
            }, hideGiftStore: function () {
                this.update({showingGiftStore: !1})
            },
            receiveInventoryGift: function (a) {
                this.update({inventoryGift: c.default.fromJS(a)})
            }, selectGift: function (a) {
                this.update({selectedGift: this.getState().getIn(["gift", a], null)})
            }, selectTarget: function (a) {
                this.update({sendGiftTo: a})
            }, changeGiftAmount: function (a) {
                this.update({giftAmount: a})
            }, sendGift: function (a, b) {
                var c = this.getState();
                r.default.sendMsg("prop_prop", {
                    t: c.getIn(["sendGiftTo", "uid"], c.getIn(["sendGiftTo", "id"])),
                    ak: a,
                    r: b,
                    i: c.getIn(["selectedGift", "id"]),
                    n: c.get("giftAmount"),
                    f: 0 == c.getIn(["selectedGift",
                        "cid"]) ? 1 : 0
                })
            }, presentNextGift: function () {
                this.shiftPresentQueue()
            }, changeCategory: function (a) {
                this.update({currentCategory: a})
            }, _ioGift: function (a) {
                this.getState().getIn(["gift", String(a.content.item)], null) && "0" != a.fid && (a = this._reorganizePresentedGift(a), 0 < a.presentInfo.level && this.pushPresentQueue(c.default.fromJS(a)))
            }, _sendGiftBack: function (a) {
                this.hideGiftStore();
                if ("105" == a.flag)y.default.showChargeConfirm(); else if ("001" != a.flag)alert(a.content); else if ("function" == typeof window.ga) {
                    a = this.getState().get("selectedGift");
                    var b = this.getState().get("giftAmount");
                    a && window.ga("send", "event", "gift", "send", a.get("price") * b)
                }
            }, _ioUpdateInventoryGift: function (a) {
                this.update({inventoryGift: c.default.fromJS(a.content)})
            }, _getGiftInfo: function () {
                var a = JSON.parse(h.default.getItem("gift") || "null"), b = a && c.default.fromJS(this._reorganizeGift(a)), e = p.default.get("gift-update-time");
                this.update({gift: b, selectedGift: b ? b.get("1") : null});
                a && e || (0, l.default)("coop-mobile-giftupdate.php", {ver: a && a.ver}).done(this._getGiftInfoBack)
            },
            _getGiftInfoBack: function (a) {
                "001" == a.flag && (p.default.set("gift-update-time", Date.now()), a.content && a.content.down && (0, g.default)({
                    url: a.content.down,
                    dataType: "text"
                }).done(this._updateGift))
            }, _updateGift: function (a) {
                try {
                    var b = JSON.parse(a);
                    h.default.setItem("gift", a);
                    this.update({gift: c.default.fromJS(this._reorganizeGift(b))})
                } catch (f) {
                    var b = new e.default, d = h.default.getItem("gift");
                    a = b.patch_apply(b.patch_fromText(a), d);
                    h.default.setItem("gift", a[0]);
                    this.update({gift: c.default.fromJS(this._reorganizeGift(JSON.parse(a[0])))})
                }
                this.update({
                    selectedGift: this.getState().getIn(["gift",
                        "1"])
                })
            }, _reorganizeGift: function (a) {
                var b = {}, c;
                for (c in a.gifts)a.gifts.hasOwnProperty(c) && a.gifts[c].forEach(function (a) {
                    b[a.id] = a
                });
                return b
            }, _reorganizePresentedGift: function (a) {
                var b = this.getState().getIn(["gift", String(a.content.item)]), c = a.content.num, b = b.get("price") * c / 100, e = c = 0;
                500 <= b ? (c = 7E3, e = 5) : 200 <= b ? (c = 6E3, e = 4) : 50 <= b ? (c = 6E3, e = 3) : 10 <= b ? (c = 5E3, e = 2) : 1 <= b && (c = 5E3, e = 1);
                a.presentInfo = {level: e, duration: c};
                return a
            }, _ioUserState: function (a) {
                a = a.content["404"] ? a.content["404"].content : a.content;
                n.default.isLogin() && a.userInfo && a.userInfo.proplist && this.receiveInventoryGift(a.userInfo.proplist)
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                r.default[a]("receive:201", this._ioGift);
                r.default[a]("receive:1201", this._ioUpdateInventoryGift);
                r.default[a]("receiveres:prop_prop", this._sendGiftBack);
                r.default[a]("receive:408", this._ioUserState);
                r.default[a]("receive:404", this._ioUserState)
            }
        });
        k.default = new a
    }, 433: function (d, k) {
        function a() {
            this.Diff_Timeout = 1;
            this.Diff_EditCost = 4;
            this.Match_Threshold = .5;
            this.Match_Distance =
                1E3;
            this.Patch_DeleteThreshold = .5;
            this.Patch_Margin = 4;
            this.Match_MaxBits = 32
        }

        a.prototype.diff_main = function (a, c, e, f) {
            "undefined" == typeof f && (f = 0 >= this.Diff_Timeout ? Number.MAX_VALUE : (new Date).getTime() + 1E3 * this.Diff_Timeout);
            if (null == a || null == c)throw Error("Null input. (diff_main)");
            if (a == c)return a ? [[0, a]] : [];
            "undefined" == typeof e && (e = !0);
            var d = e, g = this.diff_commonPrefix(a, c);
            e = a.substring(0, g);
            a = a.substring(g);
            c = c.substring(g);
            var g = this.diff_commonSuffix(a, c), h = a.substring(a.length - g);
            a = a.substring(0,
                a.length - g);
            c = c.substring(0, c.length - g);
            a = this.diff_compute_(a, c, d, f);
            e && a.unshift([0, e]);
            h && a.push([0, h]);
            this.diff_cleanupMerge(a);
            return a
        };
        a.prototype.diff_compute_ = function (a, c, e, f) {
            if (!a)return [[1, c]];
            if (!c)return [[-1, a]];
            var d = a.length > c.length ? a : c, g = a.length > c.length ? c : a, h = d.indexOf(g);
            return -1 != h ? (e = [[1, d.substring(0, h)], [0, g], [1, d.substring(h + g.length)]], a.length > c.length && (e[0][0] = e[2][0] = -1), e) : 1 == g.length ? [[-1, a], [1, c]] : (d = this.diff_halfMatch_(a, c)) ? (c = d[1], g = d[3], a = d[4], d = this.diff_main(d[0],
                d[2], e, f), e = this.diff_main(c, g, e, f), d.concat([[0, a]], e)) : e && 100 < a.length && 100 < c.length ? this.diff_lineMode_(a, c, f) : this.diff_bisect_(a, c, f)
        };
        a.prototype.diff_lineMode_ = function (a, c, e) {
            var f = this.diff_linesToChars_(a, c);
            a = f.chars1;
            c = f.chars2;
            f = f.lineArray;
            a = this.diff_main(a, c, !1, e);
            this.diff_charsToLines_(a, f);
            this.diff_cleanupSemantic(a);
            a.push([0, ""]);
            for (var d = f = c = 0, g = "", h = ""; c < a.length;) {
                switch (a[c][0]) {
                    case 1:
                        d++;
                        h += a[c][1];
                        break;
                    case -1:
                        f++;
                        g += a[c][1];
                        break;
                    case 0:
                        if (1 <= f && 1 <= d) {
                            a.splice(c - f -
                                d, f + d);
                            c = c - f - d;
                            f = this.diff_main(g, h, !1, e);
                            for (d = f.length - 1; 0 <= d; d--)a.splice(c, 0, f[d]);
                            c += f.length
                        }
                        f = d = 0;
                        h = g = ""
                }
                c++
            }
            a.pop();
            return a
        };
        a.prototype.diff_bisect_ = function (a, c, e) {
            for (var f = a.length, d = c.length, g = Math.ceil((f + d) / 2), h = 2 * g, k = Array(h), l = Array(h), n = 0; n < h; n++)k[n] = -1, l[n] = -1;
            k[g + 1] = 0;
            l[g + 1] = 0;
            for (var n = f - d, r = 0 != n % 2, q = 0, y = 0, w = 0, t = 0, v = 0; v < g && !((new Date).getTime() > e); v++) {
                for (var A = -v + q; A <= v - y; A += 2) {
                    var x = g + A, z;
                    z = A == -v || A != v && k[x - 1] < k[x + 1] ? k[x + 1] : k[x - 1] + 1;
                    for (var D = z - A; z < f && D < d && a.charAt(z) ==
                    c.charAt(D);)z++, D++;
                    k[x] = z;
                    if (z > f)y += 2; else if (D > d)q += 2; else if (r && (x = g + n - A, 0 <= x && x < h && -1 != l[x])) {
                        var u = f - l[x];
                        if (z >= u)return this.diff_bisectSplit_(a, c, z, D, e)
                    }
                }
                for (A = -v + w; A <= v - t; A += 2) {
                    x = g + A;
                    u = A == -v || A != v && l[x - 1] < l[x + 1] ? l[x + 1] : l[x - 1] + 1;
                    for (z = u - A; u < f && z < d && a.charAt(f - u - 1) == c.charAt(d - z - 1);)u++, z++;
                    l[x] = u;
                    if (u > f)t += 2; else if (z > d)w += 2; else if (!r && (x = g + n - A, 0 <= x && x < h && -1 != k[x] && (z = k[x], D = g + z - x, u = f - u, z >= u)))return this.diff_bisectSplit_(a, c, z, D, e)
                }
            }
            return [[-1, a], [1, c]]
        };
        a.prototype.diff_bisectSplit_ = function (a,
                                                  c, e, f, d) {
            var g = a.substring(0, e), h = c.substring(0, f);
            a = a.substring(e);
            c = c.substring(f);
            g = this.diff_main(g, h, !1, d);
            d = this.diff_main(a, c, !1, d);
            return g.concat(d)
        };
        a.prototype.diff_linesToChars_ = function (a, c) {
            function e(a) {
                for (var b = "", c = 0, e = -1, g = f.length; e < a.length - 1;) {
                    e = a.indexOf("\n", c);
                    -1 == e && (e = a.length - 1);
                    var h = a.substring(c, e + 1), c = e + 1;
                    (d.hasOwnProperty ? d.hasOwnProperty(h) : void 0 !== d[h]) ? b += String.fromCharCode(d[h]) : (b += String.fromCharCode(g), d[h] = g, f[g++] = h)
                }
                return b
            }

            var f = [], d = {};
            f[0] = "";
            var g =
                e(a), h = e(c);
            return {chars1: g, chars2: h, lineArray: f}
        };
        a.prototype.diff_charsToLines_ = function (a, c) {
            for (var e = 0; e < a.length; e++) {
                for (var f = a[e][1], d = [], g = 0; g < f.length; g++)d[g] = c[f.charCodeAt(g)];
                a[e][1] = d.join("")
            }
        };
        a.prototype.diff_commonPrefix = function (a, c) {
            if (!a || !c || a.charAt(0) != c.charAt(0))return 0;
            for (var e = 0, f = Math.min(a.length, c.length), d = f, g = 0; e < d;)a.substring(g, d) == c.substring(g, d) ? g = e = d : f = d, d = Math.floor((f - e) / 2 + e);
            return d
        };
        a.prototype.diff_commonSuffix = function (a, c) {
            if (!a || !c || a.charAt(a.length -
                    1) != c.charAt(c.length - 1))return 0;
            for (var e = 0, f = Math.min(a.length, c.length), d = f, g = 0; e < d;)a.substring(a.length - d, a.length - g) == c.substring(c.length - d, c.length - g) ? g = e = d : f = d, d = Math.floor((f - e) / 2 + e);
            return d
        };
        a.prototype.diff_commonOverlap_ = function (a, c) {
            var e = a.length, f = c.length;
            if (0 == e || 0 == f)return 0;
            e > f ? a = a.substring(e - f) : e < f && (c = c.substring(0, e));
            e = Math.min(e, f);
            if (a == c)return e;
            for (var f = 0, d = 1; ;) {
                var g = a.substring(e - d), g = c.indexOf(g);
                if (-1 == g)return f;
                d += g;
                if (0 == g || a.substring(e - d) == c.substring(0,
                        d))f = d, d++
            }
        };
        a.prototype.diff_halfMatch_ = function (a, c) {
            function e(a, b, c) {
                for (var e = a.substring(c, c + Math.floor(a.length / 4)), f = -1, d = "", h, m, k, l; -1 != (f = b.indexOf(e, f + 1));) {
                    var p = g.diff_commonPrefix(a.substring(c), b.substring(f)), u = g.diff_commonSuffix(a.substring(0, c), b.substring(0, f));
                    d.length < u + p && (d = b.substring(f - u, f) + b.substring(f, f + p), h = a.substring(0, c - u), m = a.substring(c + p), k = b.substring(0, f - u), l = b.substring(f + p))
                }
                return 2 * d.length >= a.length ? [h, m, k, l, d] : null
            }

            if (0 >= this.Diff_Timeout)return null;
            var f =
                a.length > c.length ? a : c, d = a.length > c.length ? c : a;
            if (4 > f.length || 2 * d.length < f.length)return null;
            var g = this, h = e(f, d, Math.ceil(f.length / 4)), f = e(f, d, Math.ceil(f.length / 2));
            if (h || f)h = f ? h ? h[4].length > f[4].length ? h : f : f : h; else return null;
            var k, l;
            a.length > c.length ? (f = h[0], d = h[1], k = h[2], l = h[3]) : (k = h[0], l = h[1], f = h[2], d = h[3]);
            return [f, d, k, l, h[4]]
        };
        a.prototype.diff_cleanupSemantic = function (a) {
            for (var c = !1, e = [], f = 0, d = null, g = 0, h = 0, k = 0, l = 0, n = 0; g < a.length;)0 == a[g][0] ? (e[f++] = g, h = l, k = n, n = l = 0, d = a[g][1]) : (1 == a[g][0] ?
                l += a[g][1].length : n += a[g][1].length, d && d.length <= Math.max(h, k) && d.length <= Math.max(l, n) && (a.splice(e[f - 1], 0, [-1, d]), a[e[f - 1] + 1][0] = 1, f--, f--, g = 0 < f ? e[f - 1] : -1, n = l = k = h = 0, d = null, c = !0)), g++;
            c && this.diff_cleanupMerge(a);
            this.diff_cleanupSemanticLossless(a);
            for (g = 1; g < a.length;) {
                if (-1 == a[g - 1][0] && 1 == a[g][0]) {
                    c = a[g - 1][1];
                    e = a[g][1];
                    f = this.diff_commonOverlap_(c, e);
                    d = this.diff_commonOverlap_(e, c);
                    if (f >= d) {
                        if (f >= c.length / 2 || f >= e.length / 2)a.splice(g, 0, [0, e.substring(0, f)]), a[g - 1][1] = c.substring(0, c.length - f), a[g +
                        1][1] = e.substring(f), g++
                    } else if (d >= c.length / 2 || d >= e.length / 2)a.splice(g, 0, [0, c.substring(0, d)]), a[g - 1][0] = 1, a[g - 1][1] = e.substring(0, e.length - d), a[g + 1][0] = -1, a[g + 1][1] = c.substring(d), g++;
                    g++
                }
                g++
            }
        };
        a.prototype.diff_cleanupSemanticLossless = function (b) {
            function c(b, c) {
                if (!b || !c)return 6;
                var e = b.charAt(b.length - 1), f = c.charAt(0), d = e.match(a.nonAlphaNumericRegex_), g = f.match(a.nonAlphaNumericRegex_), h = d && e.match(a.whitespaceRegex_), m = g && f.match(a.whitespaceRegex_), e = h && e.match(a.linebreakRegex_), f = m && f.match(a.linebreakRegex_),
                    k = e && b.match(a.blanklineEndRegex_), n = f && c.match(a.blanklineStartRegex_);
                return k || n ? 5 : e || f ? 4 : d && !h && m ? 3 : h || m ? 2 : d || g ? 1 : 0
            }

            for (var e = 1; e < b.length - 1;) {
                if (0 == b[e - 1][0] && 0 == b[e + 1][0]) {
                    var f = b[e - 1][1], d = b[e][1], g = b[e + 1][1], h = this.diff_commonSuffix(f, d);
                    if (h)var k = d.substring(d.length - h), f = f.substring(0, f.length - h), d = k + d.substring(0, d.length - h), g = k + g;
                    for (var h = f, k = d, l = g, n = c(f, d) + c(d, g); d.charAt(0) === g.charAt(0);) {
                        var f = f + d.charAt(0), d = d.substring(1) + g.charAt(0), g = g.substring(1), r = c(f, d) + c(d, g);
                        r >= n && (n = r,
                            h = f, k = d, l = g)
                    }
                    b[e - 1][1] != h && (h ? b[e - 1][1] = h : (b.splice(e - 1, 1), e--), b[e][1] = k, l ? b[e + 1][1] = l : (b.splice(e + 1, 1), e--))
                }
                e++
            }
        };
        a.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
        a.whitespaceRegex_ = /\s/;
        a.linebreakRegex_ = /[\r\n]/;
        a.blanklineEndRegex_ = /\n\r?\n$/;
        a.blanklineStartRegex_ = /^\r?\n\r?\n/;
        a.prototype.diff_cleanupEfficiency = function (a) {
            for (var c = !1, e = [], f = 0, d = null, g = 0, h = !1, k = !1, l = !1, n = !1; g < a.length;)0 == a[g][0] ? (a[g][1].length < this.Diff_EditCost && (l || n) ? (e[f++] = g, h = l, k = n, d = a[g][1]) : (f = 0, d = null), l = n = !1) : (-1 == a[g][0] ?
                n = !0 : l = !0, d && (h && k && l && n || d.length < this.Diff_EditCost / 2 && 3 == h + k + l + n) && (a.splice(e[f - 1], 0, [-1, d]), a[e[f - 1] + 1][0] = 1, f--, d = null, h && k ? (l = n = !0, f = 0) : (f--, g = 0 < f ? e[f - 1] : -1, l = n = !1), c = !0)), g++;
            c && this.diff_cleanupMerge(a)
        };
        a.prototype.diff_cleanupMerge = function (a) {
            a.push([0, ""]);
            for (var c = 0, e = 0, f = 0, d = "", g = "", h; c < a.length;)switch (a[c][0]) {
                case 1:
                    f++;
                    g += a[c][1];
                    c++;
                    break;
                case -1:
                    e++;
                    d += a[c][1];
                    c++;
                    break;
                case 0:
                    1 < e + f ? (0 !== e && 0 !== f && (h = this.diff_commonPrefix(g, d), 0 !== h && (0 < c - e - f && 0 == a[c - e - f - 1][0] ? a[c - e - f - 1][1] +=
                        g.substring(0, h) : (a.splice(0, 0, [0, g.substring(0, h)]), c++), g = g.substring(h), d = d.substring(h)), h = this.diff_commonSuffix(g, d), 0 !== h && (a[c][1] = g.substring(g.length - h) + a[c][1], g = g.substring(0, g.length - h), d = d.substring(0, d.length - h))), 0 === e ? a.splice(c - f, e + f, [1, g]) : 0 === f ? a.splice(c - e, e + f, [-1, d]) : a.splice(c - e - f, e + f, [-1, d], [1, g]), c = c - e - f + (e ? 1 : 0) + (f ? 1 : 0) + 1) : 0 !== c && 0 == a[c - 1][0] ? (a[c - 1][1] += a[c][1], a.splice(c, 1)) : c++, e = f = 0, g = d = ""
            }
            "" === a[a.length - 1][1] && a.pop();
            e = !1;
            for (c = 1; c < a.length - 1;)0 == a[c - 1][0] && 0 == a[c +
            1][0] && (a[c][1].substring(a[c][1].length - a[c - 1][1].length) == a[c - 1][1] ? (a[c][1] = a[c - 1][1] + a[c][1].substring(0, a[c][1].length - a[c - 1][1].length), a[c + 1][1] = a[c - 1][1] + a[c + 1][1], a.splice(c - 1, 1), e = !0) : a[c][1].substring(0, a[c + 1][1].length) == a[c + 1][1] && (a[c - 1][1] += a[c + 1][1], a[c][1] = a[c][1].substring(a[c + 1][1].length) + a[c + 1][1], a.splice(c + 1, 1), e = !0)), c++;
            e && this.diff_cleanupMerge(a)
        };
        a.prototype.diff_xIndex = function (a, c) {
            var e = 0, f = 0, d = 0, g = 0, h;
            for (h = 0; h < a.length; h++) {
                1 !== a[h][0] && (e += a[h][1].length);
                -1 !== a[h][0] &&
                (f += a[h][1].length);
                if (e > c)break;
                d = e;
                g = f
            }
            return a.length != h && -1 === a[h][0] ? g : g + (c - d)
        };
        a.prototype.diff_prettyHtml = function (a) {
            for (var c = [], e = /&/g, f = /</g, d = />/g, g = /\n/g, h = 0; h < a.length; h++) {
                var k = a[h][0], l = a[h][1].replace(e, "&amp;").replace(f, "&lt;").replace(d, "&gt;").replace(g, "&para;<br>");
                switch (k) {
                    case 1:
                        c[h] = '<ins style="background:#e6ffe6;">' + l + "</ins>";
                        break;
                    case -1:
                        c[h] = '<del style="background:#ffe6e6;">' + l + "</del>";
                        break;
                    case 0:
                        c[h] = "<span>" + l + "</span>"
                }
            }
            return c.join("")
        };
        a.prototype.diff_text1 =
            function (a) {
                for (var c = [], e = 0; e < a.length; e++)1 !== a[e][0] && (c[e] = a[e][1]);
                return c.join("")
            };
        a.prototype.diff_text2 = function (a) {
            for (var c = [], e = 0; e < a.length; e++)-1 !== a[e][0] && (c[e] = a[e][1]);
            return c.join("")
        };
        a.prototype.diff_levenshtein = function (a) {
            for (var c = 0, e = 0, f = 0, d = 0; d < a.length; d++) {
                var g = a[d][1];
                switch (a[d][0]) {
                    case 1:
                        e += g.length;
                        break;
                    case -1:
                        f += g.length;
                        break;
                    case 0:
                        c += Math.max(e, f), f = e = 0
                }
            }
            return c += Math.max(e, f)
        };
        a.prototype.diff_toDelta = function (a) {
            for (var c = [], e = 0; e < a.length; e++)switch (a[e][0]) {
                case 1:
                    c[e] =
                        "+" + encodeURI(a[e][1]);
                    break;
                case -1:
                    c[e] = "-" + a[e][1].length;
                    break;
                case 0:
                    c[e] = "=" + a[e][1].length
            }
            return c.join("\t").replace(/%20/g, " ")
        };
        a.prototype.diff_fromDelta = function (a, c) {
            for (var e = [], f = 0, d = 0, g = c.split(/\t/g), h = 0; h < g.length; h++) {
                var k = g[h].substring(1);
                switch (g[h].charAt(0)) {
                    case "+":
                        try {
                            e[f++] = [1, decodeURI(k)]
                        } catch (l) {
                            throw Error("Illegal escape in diff_fromDelta: " + k);
                        }
                        break;
                    case "-":
                    case "=":
                        var n = parseInt(k, 10);
                        if (isNaN(n) || 0 > n)throw Error("Invalid number in diff_fromDelta: " + k);
                        k = a.substring(d,
                            d += n);
                        "=" == g[h].charAt(0) ? e[f++] = [0, k] : e[f++] = [-1, k];
                        break;
                    default:
                        if (g[h])throw Error("Invalid diff operation in diff_fromDelta: " + g[h]);
                }
            }
            if (d != a.length)throw Error("Delta length (" + d + ") does not equal source text length (" + a.length + ").");
            return e
        };
        a.prototype.match_main = function (a, c, e) {
            if (null == a || null == c || null == e)throw Error("Null input. (match_main)");
            e = Math.max(0, Math.min(e, a.length));
            return a == c ? 0 : a.length ? a.substring(e, e + c.length) == c ? e : this.match_bitap_(a, c, e) : -1
        };
        a.prototype.match_bitap_ =
            function (a, c, e) {
                function f(a, b) {
                    var f = a / c.length, d = Math.abs(e - b);
                    return g.Match_Distance ? f + d / g.Match_Distance : d ? 1 : f
                }

                if (c.length > this.Match_MaxBits)throw Error("Pattern too long for this browser.");
                var d = this.match_alphabet_(c), g = this, h = this.Match_Threshold, k = a.indexOf(c, e);
                -1 != k && (h = Math.min(f(0, k), h), k = a.lastIndexOf(c, e + c.length), -1 != k && (h = Math.min(f(0, k), h)));
                for (var l = 1 << c.length - 1, k = -1, n, r, q = c.length + a.length, y, w = 0; w < c.length; w++) {
                    n = 0;
                    for (r = q; n < r;)f(w, e + r) <= h ? n = r : q = r, r = Math.floor((q - n) / 2 + n);
                    q =
                        r;
                    n = Math.max(1, e - r + 1);
                    var t = Math.min(e + r, a.length) + c.length;
                    r = Array(t + 2);
                    for (r[t + 1] = (1 << w) - 1; t >= n; t--) {
                        var v = d[a.charAt(t - 1)];
                        r[t] = 0 === w ? (r[t + 1] << 1 | 1) & v : (r[t + 1] << 1 | 1) & v | (y[t + 1] | y[t]) << 1 | 1 | y[t + 1];
                        if (r[t] & l && (v = f(w, t - 1), v <= h))if (h = v, k = t - 1, k > e)n = Math.max(1, 2 * e - k); else break
                    }
                    if (f(w + 1, e) > h)break;
                    y = r
                }
                return k
            };
        a.prototype.match_alphabet_ = function (a) {
            for (var c = {}, e = 0; e < a.length; e++)c[a.charAt(e)] = 0;
            for (e = 0; e < a.length; e++)c[a.charAt(e)] |= 1 << a.length - e - 1;
            return c
        };
        a.prototype.patch_addContext_ = function (a,
                                                  c) {
            if (0 != c.length) {
                for (var e = c.substring(a.start2, a.start2 + a.length1), f = 0; c.indexOf(e) != c.lastIndexOf(e) && e.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;)f += this.Patch_Margin, e = c.substring(a.start2 - f, a.start2 + a.length1 + f);
                f += this.Patch_Margin;
                (e = c.substring(a.start2 - f, a.start2)) && a.diffs.unshift([0, e]);
                (f = c.substring(a.start2 + a.length1, a.start2 + a.length1 + f)) && a.diffs.push([0, f]);
                a.start1 -= e.length;
                a.start2 -= e.length;
                a.length1 += e.length + f.length;
                a.length2 += e.length + f.length
            }
        };
        a.prototype.patch_make =
            function (b, c, e) {
                var f;
                if ("string" == typeof b && "string" == typeof c && "undefined" == typeof e)f = b, c = this.diff_main(f, c, !0), 2 < c.length && (this.diff_cleanupSemantic(c), this.diff_cleanupEfficiency(c)); else if (b && "object" == typeof b && "undefined" == typeof c && "undefined" == typeof e)c = b, f = this.diff_text1(c); else if ("string" == typeof b && c && "object" == typeof c && "undefined" == typeof e)f = b; else if ("string" == typeof b && "string" == typeof c && e && "object" == typeof e)f = b, c = e; else throw Error("Unknown call format to patch_make.");
                if (0 === c.length)return [];
                e = [];
                b = new a.patch_obj;
                for (var d = 0, g = 0, h = 0, k = f, l = 0; l < c.length; l++) {
                    var n = c[l][0], r = c[l][1];
                    d || 0 === n || (b.start1 = g, b.start2 = h);
                    switch (n) {
                        case 1:
                            b.diffs[d++] = c[l];
                            b.length2 += r.length;
                            f = f.substring(0, h) + r + f.substring(h);
                            break;
                        case -1:
                            b.length1 += r.length;
                            b.diffs[d++] = c[l];
                            f = f.substring(0, h) + f.substring(h + r.length);
                            break;
                        case 0:
                            r.length <= 2 * this.Patch_Margin && d && c.length != l + 1 ? (b.diffs[d++] = c[l], b.length1 += r.length, b.length2 += r.length) : r.length >= 2 * this.Patch_Margin && d && (this.patch_addContext_(b,
                                k), e.push(b), b = new a.patch_obj, d = 0, k = f, g = h)
                    }
                    1 !== n && (g += r.length);
                    -1 !== n && (h += r.length)
                }
                d && (this.patch_addContext_(b, k), e.push(b));
                return e
            };
        a.prototype.patch_deepCopy = function (b) {
            for (var c = [], e = 0; e < b.length; e++) {
                var f = b[e], d = new a.patch_obj;
                d.diffs = [];
                for (var g = 0; g < f.diffs.length; g++)d.diffs[g] = f.diffs[g].slice();
                d.start1 = f.start1;
                d.start2 = f.start2;
                d.length1 = f.length1;
                d.length2 = f.length2;
                c[e] = d
            }
            return c
        };
        a.prototype.patch_apply = function (a, c) {
            if (0 == a.length)return [c, []];
            a = this.patch_deepCopy(a);
            var e =
                this.patch_addPadding(a);
            c = e + c + e;
            this.patch_splitMax(a);
            for (var f = 0, d = [], g = 0; g < a.length; g++) {
                var h = a[g].start2 + f, k = this.diff_text1(a[g].diffs), l, n = -1;
                if (k.length > this.Match_MaxBits) {
                    if (l = this.match_main(c, k.substring(0, this.Match_MaxBits), h), -1 != l && (n = this.match_main(c, k.substring(k.length - this.Match_MaxBits), h + k.length - this.Match_MaxBits), -1 == n || l >= n))l = -1
                } else l = this.match_main(c, k, h);
                if (-1 == l)d[g] = !1, f -= a[g].length2 - a[g].length1; else if (d[g] = !0, f = l - h, h = -1 == n ? c.substring(l, l + k.length) : c.substring(l,
                        n + this.Match_MaxBits), k == h)c = c.substring(0, l) + this.diff_text2(a[g].diffs) + c.substring(l + k.length); else if (h = this.diff_main(k, h, !1), k.length > this.Match_MaxBits && this.diff_levenshtein(h) / k.length > this.Patch_DeleteThreshold)d[g] = !1; else {
                    this.diff_cleanupSemanticLossless(h);
                    for (var k = 0, r, n = 0; n < a[g].diffs.length; n++) {
                        var q = a[g].diffs[n];
                        0 !== q[0] && (r = this.diff_xIndex(h, k));
                        1 === q[0] ? c = c.substring(0, l + r) + q[1] + c.substring(l + r) : -1 === q[0] && (c = c.substring(0, l + r) + c.substring(l + this.diff_xIndex(h, k + q[1].length)));
                        -1 !== q[0] && (k += q[1].length)
                    }
                }
            }
            c = c.substring(e.length, c.length - e.length);
            return [c, d]
        };
        a.prototype.patch_addPadding = function (a) {
            for (var c = this.Patch_Margin, e = "", f = 1; f <= c; f++)e += String.fromCharCode(f);
            for (f = 0; f < a.length; f++)a[f].start1 += c, a[f].start2 += c;
            var f = a[0], d = f.diffs;
            if (0 == d.length || 0 != d[0][0])d.unshift([0, e]), f.start1 -= c, f.start2 -= c, f.length1 += c, f.length2 += c; else if (c > d[0][1].length) {
                var g = c - d[0][1].length;
                d[0][1] = e.substring(d[0][1].length) + d[0][1];
                f.start1 -= g;
                f.start2 -= g;
                f.length1 += g;
                f.length2 +=
                    g
            }
            f = a[a.length - 1];
            d = f.diffs;
            0 == d.length || 0 != d[d.length - 1][0] ? (d.push([0, e]), f.length1 += c, f.length2 += c) : c > d[d.length - 1][1].length && (g = c - d[d.length - 1][1].length, d[d.length - 1][1] += e.substring(0, g), f.length1 += g, f.length2 += g);
            return e
        };
        a.prototype.patch_splitMax = function (b) {
            for (var c = this.Match_MaxBits, e = 0; e < b.length; e++)if (!(b[e].length1 <= c)) {
                var d = b[e];
                b.splice(e--, 1);
                for (var k = d.start1, g = d.start2, h = ""; 0 !== d.diffs.length;) {
                    var p = new a.patch_obj, l = !0;
                    p.start1 = k - h.length;
                    p.start2 = g - h.length;
                    "" !== h && (p.length1 =
                        p.length2 = h.length, p.diffs.push([0, h]));
                    for (; 0 !== d.diffs.length && p.length1 < c - this.Patch_Margin;) {
                        var h = d.diffs[0][0], n = d.diffs[0][1];
                        1 === h ? (p.length2 += n.length, g += n.length, p.diffs.push(d.diffs.shift()), l = !1) : -1 === h && 1 == p.diffs.length && 0 == p.diffs[0][0] && n.length > 2 * c ? (p.length1 += n.length, k += n.length, l = !1, p.diffs.push([h, n]), d.diffs.shift()) : (n = n.substring(0, c - p.length1 - this.Patch_Margin), p.length1 += n.length, k += n.length, 0 === h ? (p.length2 += n.length, g += n.length) : l = !1, p.diffs.push([h, n]), n == d.diffs[0][1] ?
                            d.diffs.shift() : d.diffs[0][1] = d.diffs[0][1].substring(n.length))
                    }
                    h = this.diff_text2(p.diffs);
                    h = h.substring(h.length - this.Patch_Margin);
                    n = this.diff_text1(d.diffs).substring(0, this.Patch_Margin);
                    "" !== n && (p.length1 += n.length, p.length2 += n.length, 0 !== p.diffs.length && 0 === p.diffs[p.diffs.length - 1][0] ? p.diffs[p.diffs.length - 1][1] += n : p.diffs.push([0, n]));
                    l || b.splice(++e, 0, p)
                }
            }
        };
        a.prototype.patch_toText = function (a) {
            for (var c = [], d = 0; d < a.length; d++)c[d] = a[d];
            return c.join("")
        };
        a.prototype.patch_fromText = function (b) {
            var c =
                [];
            if (!b)return c;
            b = b.split("\n");
            for (var d = 0, f = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; d < b.length;) {
                var k = b[d].match(f);
                if (!k)throw Error("Invalid patch string: " + b[d]);
                var g = new a.patch_obj;
                c.push(g);
                g.start1 = parseInt(k[1], 10);
                "" === k[2] ? (g.start1--, g.length1 = 1) : "0" == k[2] ? g.length1 = 0 : (g.start1--, g.length1 = parseInt(k[2], 10));
                g.start2 = parseInt(k[3], 10);
                "" === k[4] ? (g.start2--, g.length2 = 1) : "0" == k[4] ? g.length2 = 0 : (g.start2--, g.length2 = parseInt(k[4], 10));
                for (d++; d < b.length;) {
                    k = b[d].charAt(0);
                    try {
                        var h = decodeURI(b[d].substring(1))
                    } catch (p) {
                        throw Error("Illegal escape in patch_fromText: " +
                            h);
                    }
                    if ("-" == k)g.diffs.push([-1, h]); else if ("+" == k)g.diffs.push([1, h]); else if (" " == k)g.diffs.push([0, h]); else if ("@" == k)break; else if ("" !== k)throw Error('Invalid patch mode "' + k + '" in: ' + h);
                    d++
                }
            }
            return c
        };
        a.patch_obj = function () {
            this.diffs = [];
            this.start2 = this.start1 = null;
            this.length2 = this.length1 = 0
        };
        a.patch_obj.prototype.toString = function () {
            for (var a = ["@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ?
            this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], c, d = 0; d < this.diffs.length; d++) {
                switch (this.diffs[d][0]) {
                    case 1:
                        c = "+";
                        break;
                    case -1:
                        c = "-";
                        break;
                    case 0:
                        c = " "
                }
                a[d + 1] = c + encodeURI(this.diffs[d][1]) + "\n"
            }
            return a.join("").replace(/%20/g, " ")
        };
        this.diff_match_patch = a;
        this.DIFF_DELETE = -1;
        this.DIFF_INSERT = 1;
        this.DIFF_EQUAL = 0;
        d.exports = a
    }, 434: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(3);
        var e = a(224), e = b(e), f = a(13), m = b(f), f = a(431), g = b(f), f = a(422), h = b(f), f = a(205), p = b(f);
        a = a(265);
        var l = b(a), n = k.NAMESPACE = "room.user";
        a = c.default.fromJS({authKey: ""});
        p.default.registerByMap(n, a, {});
        a = function q() {
            q.superclass.constructor.call(this, p.default, n);
            this._bindSelf("_ioUserState", "_ioUpdateMyCoin")
        };
        (0, d.extend)(a, e.default, {
            setup: function () {
                this._bindIO(!0);
                l.default.refreshInfo()
            }, teardown: function () {
                this._bindIO();
                this.init();
                l.default.receivePrivInfo(c.default.Map())
            }, _ioUserState: function (a) {
                a =
                    a.content["404"] ? a.content["404"].content : a.content;
                this.update({authKey: a.authKey});
                m.default.isLogin() && l.default.receivePrivInfo(c.default.fromJS((0, g.default)(a.priv)))
            }, _ioUpdateMyCoin: function (a) {
                l.default.updateCoin6(a.content.coin6)
            }, _ioKickout: function (a) {
                l.default.updatePrivInfo({status: 2});
                h.default.close()
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                h.default[a]("receive:408", this._ioUserState);
                h.default[a]("receive:404", this._ioUserState);
                h.default[a]("receive:201001", this._ioUpdateMyCoin);
                h.default[a]("receiveerr:101",
                    this._ioKickout)
            }
        });
        k.default = new a
    }, 435: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(3);
        var e = a(224), e = b(e), f = a(14), m = b(f), f = a(422), g = b(f);
        a = a(205);
        var h = b(a), p = k.NAMESPACE = "room.redEnvelope";
        a = c.default.fromJS({amount: 0});
        h.default.registerByMap(p, a, {});
        a = function n() {
            n.superclass.constructor.call(this, h.default, p);
            this._bindSelf("fetchAmount", "_fetchAmountBack", "_sendBack");
            this._fetchAmountTimer =
                null
        };
        (0, d.extend)(a, e.default, {
            setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO();
                clearTimeout(this._fetchAmountTimer);
                this._fetchAmountTimer = null
            }, fetchAmount: function () {
                this._fetchAmountTimer || (0, m.default)("coop-mobile-getRedCount.php").done(this._fetchAmountBack)
            }, send: function (a) {
                g.default.sendMsg("prop_redenvelope", {tuid: a, num: 1})
            }, _fetchAmountBack: function (a) {
                "001" == a.flag ? (this.update({amount: Number(a.content.currentRed)}), this._fetchAmountTimer = setTimeout(this.fetchAmount,
                    14400)) : alert(a.content)
            }, _sendBack: function (a) {
                "001" == a.flag ? (this.update({amount: this.getState().get("amount") - 1}), "function" == typeof window.ga && window.ga("send", "event", "redenvelope", "send")) : alert(a.content)
            }, _bindIO: function (a) {
                g.default[a ? "on" : "off"]("receiveres:prop_redenvelope", this._sendBack)
            }
        });
        k.default = new a
    }, 436: function (d, k, a) {
        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        k.NAMESPACE = void 0;
        d = a(223);
        var c = b(d);
        d = a(224);
        d = b(d);
        var e =
            a(3), f = a(422), m = b(f), f = a(205), g = b(f);
        a = a(266);
        var h = b(a), p = k.NAMESPACE = "room.song";
        a = c.default.fromJS({songList: [], songMemo: "", showing: !1, fetchingSongList: !1});
        g.default.registerByMap(p, a, {});
        a = function n() {
            n.superclass.constructor.call(this, g.default, p);
            this._bindSelf("_ioShowCalledListBack", "_ioShowLiveListBack", "_ioDemandBack")
        };
        (0, e.extend)(a, d.default, {
            setup: function () {
                this._bindIO(!0)
            }, teardown: function () {
                this._bindIO(!1);
                this.init()
            }, show: function (a) {
                this.update({showing: !0});
                this.getState().get("songMemo") ||
                (this.update({fetchingSongList: !0}), m.default.sendMsg("song_showcalledlist", {p: 1}), m.default.sendMsg("song_showlivelist", {
                    p: 1,
                    tuid: a
                }))
            }, hide: function () {
                this.update({showing: !1})
            }, demandSong: function (a, b, c) {
                a = {mscname: a, mscfirst: b || "", toname: "", tuid: c, rand: Date.now()};
                m.default.sendMsg("song_addcalledsong", a)
            }, hidePoorNotification: function () {
                this.update({poorNotification: !1})
            }, _ioShowCalledListBack: function (a) {
                this.update({songMemo: a.content.memo})
            }, _ioShowLiveListBack: function (a) {
                this.update({
                    songList: c.default.fromJS(a.content.songlist),
                    fetchingSongList: !1
                })
            }, _ioDemandBack: function (a) {
                this.hide();
                "001" == a.flag ? alert("\u5217\u961f\u6210\u529f\u8bf7\u7b49\u5f85\u4e3b\u64ad\u786e\u8ba4\u3002") : "105" == a.flag ? h.default.showChargeConfirm() : alert(a.content)
            }, _bindIO: function (a) {
                a = a ? "on" : "off";
                m.default[a]("receiveres:song_showcalledlist", this._ioShowCalledListBack);
                m.default[a]("receiveres:song_showlivelist", this._ioShowLiveListBack);
                m.default[a]("receiveres:song_addcalledsong", this._ioDemandBack)
            }
        });
        k.default = new a
    }, 437: function (d, k, a) {
        function b(a) {
            return a &&
            a.__esModule ? a : {default: a}
        }

        Object.defineProperty(k, "__esModule", {value: !0});
        d = a(3);
        var c = a(224), c = b(c), e = a(223), e = b(e);
        a = a(205);
        var f = b(a);
        a = e.default.fromJS({streamingName: ""});
        f.default.registerByMap("room.leLiveVideo", a);
        a = function g() {
            g.superclass.constructor.call(this, f.default, "room.leLiveVideo")
        };
        (0, d.extend)(a, c.default, {
            setup: function () {
            }, teardown: function () {
                this.init()
            }, updateStreamingName: function (a) {
                this.update({streamingName: a})
            }
        });
        k.default = new a
    }
});
