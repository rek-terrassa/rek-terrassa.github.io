void 0 === jQuery &&
  (jQuery = "function" == typeof require ? ($ = require("jquery")) : $),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, n, o) {
      return jQuery.easing[jQuery.easing.def](t, e, i, n, o);
    },
    easeInQuad: function (t, e, i, n, o) {
      return n * (e /= o) * e + i;
    },
    easeOutQuad: function (t, e, i, n, o) {
      return -n * (e /= o) * (e - 2) + i;
    },
    easeInOutQuad: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (n / 2) * e * e + i
        : (-n / 2) * (--e * (e - 2) - 1) + i;
    },
    easeInCubic: function (t, e, i, n, o) {
      return n * (e /= o) * e * e + i;
    },
    easeOutCubic: function (t, e, i, n, o) {
      return n * ((e = e / o - 1) * e * e + 1) + i;
    },
    easeInOutCubic: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (n / 2) * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e + 2) + i;
    },
    easeInQuart: function (t, e, i, n, o) {
      return n * (e /= o) * e * e * e + i;
    },
    easeOutQuart: function (t, e, i, n, o) {
      return -n * ((e = e / o - 1) * e * e * e - 1) + i;
    },
    easeInOutQuart: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (n / 2) * e * e * e * e + i
        : (-n / 2) * ((e -= 2) * e * e * e - 2) + i;
    },
    easeInQuint: function (t, e, i, n, o) {
      return n * (e /= o) * e * e * e * e + i;
    },
    easeOutQuint: function (t, e, i, n, o) {
      return n * ((e = e / o - 1) * e * e * e * e + 1) + i;
    },
    easeInOutQuint: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (n / 2) * e * e * e * e * e + i
        : (n / 2) * ((e -= 2) * e * e * e * e + 2) + i;
    },
    easeInSine: function (t, e, i, n, o) {
      return -n * Math.cos((e / o) * (Math.PI / 2)) + n + i;
    },
    easeOutSine: function (t, e, i, n, o) {
      return n * Math.sin((e / o) * (Math.PI / 2)) + i;
    },
    easeInOutSine: function (t, e, i, n, o) {
      return (-n / 2) * (Math.cos((Math.PI * e) / o) - 1) + i;
    },
    easeInExpo: function (t, e, i, n, o) {
      return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i;
    },
    easeOutExpo: function (t, e, i, n, o) {
      return e == o ? i + n : n * (1 - Math.pow(2, (-10 * e) / o)) + i;
    },
    easeInOutExpo: function (t, e, i, n, o) {
      return 0 == e
        ? i
        : e == o
        ? i + n
        : (e /= o / 2) < 1
        ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i
        : (n / 2) * (2 - Math.pow(2, -10 * --e)) + i;
    },
    easeInCirc: function (t, e, i, n, o) {
      return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i;
    },
    easeOutCirc: function (t, e, i, n, o) {
      return n * Math.sqrt(1 - (e = e / o - 1) * e) + i;
    },
    easeInOutCirc: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + i
        : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
    },
    easeInElastic: function (t, e, i, n, o) {
      var s = 1.70158,
        a = 0,
        r = n;
      return 0 == e
        ? i
        : 1 == (e /= o)
        ? i + n
        : (a || (a = 0.3 * o),
          r < Math.abs(n)
            ? ((r = n), (s = a / 4))
            : (s = (a / (2 * Math.PI)) * Math.asin(n / r)),
          -r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e * o - s) * (2 * Math.PI)) / a) +
            i);
    },
    easeOutElastic: function (t, e, i, n, o) {
      var s = 1.70158,
        a = 0,
        r = n;
      return 0 == e
        ? i
        : 1 == (e /= o)
        ? i + n
        : (a || (a = 0.3 * o),
          r < Math.abs(n)
            ? ((r = n), (s = a / 4))
            : (s = (a / (2 * Math.PI)) * Math.asin(n / r)),
          r *
            Math.pow(2, -10 * e) *
            Math.sin(((e * o - s) * (2 * Math.PI)) / a) +
            n +
            i);
    },
    easeInOutElastic: function (t, e, i, n, o) {
      var s = 1.70158,
        a = 0,
        r = n;
      return 0 == e
        ? i
        : 2 == (e /= o / 2)
        ? i + n
        : (a || (a = o * (0.3 * 1.5)),
          r < Math.abs(n)
            ? ((r = n), (s = a / 4))
            : (s = (a / (2 * Math.PI)) * Math.asin(n / r)),
          e < 1
            ? -(
                r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e * o - s) * (2 * Math.PI)) / a) *
                0.5
              ) + i
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e * o - s) * (2 * Math.PI)) / a) *
                0.5 +
              n +
              i);
    },
    easeInBack: function (t, e, i, n, o, s) {
      return (
        null == s && (s = 1.70158), n * (e /= o) * e * ((s + 1) * e - s) + i
      );
    },
    easeOutBack: function (t, e, i, n, o, s) {
      return (
        null == s && (s = 1.70158),
        n * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + i
      );
    },
    easeInOutBack: function (t, e, i, n, o, s) {
      return (
        null == s && (s = 1.70158),
        (e /= o / 2) < 1
          ? (n / 2) * (e * e * ((1 + (s *= 1.525)) * e - s)) + i
          : (n / 2) * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2) + i
      );
    },
    easeInBounce: function (t, e, i, n, o) {
      return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i;
    },
    easeOutBounce: function (t, e, i, n, o) {
      return (e /= o) < 1 / 2.75
        ? n * (7.5625 * e * e) + i
        : e < 2 / 2.75
        ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + i
        : e < 2.5 / 2.75
        ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + i
        : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + i;
    },
    easeInOutBounce: function (t, e, i, n, o) {
      return e < o / 2
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) +
            0.5 * n +
            i;
    },
  }),
  jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function (t, e, i, n, o) {
      return (e /= o / 2) < 1
        ? (n / 2) * e * e + i
        : (n / 4) * ((e -= 2) * e * e + 2) + i;
    },
  }),
  jQuery.Velocity
    ? console.log(
        "Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."
      )
    : ((function (t) {
        function e(t) {
          var e = t.length,
            n = i.type(t);
          return (
            "function" !== n &&
            !i.isWindow(t) &&
            (!(1 !== t.nodeType || !e) ||
              "array" === n ||
              0 === e ||
              ("number" == typeof e && e > 0 && e - 1 in t))
          );
        }
        if (!t.jQuery) {
          var i = function (t, e) {
            return new i.fn.init(t, e);
          };
          (i.isWindow = function (t) {
            return null != t && t == t.window;
          }),
            (i.type = function (t) {
              return null == t
                ? t + ""
                : "object" == typeof t || "function" == typeof t
                ? o[a.call(t)] || "object"
                : typeof t;
            }),
            (i.isArray =
              Array.isArray ||
              function (t) {
                return "array" === i.type(t);
              }),
            (i.isPlainObject = function (t) {
              var e;
              if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                return !1;
              try {
                if (
                  t.constructor &&
                  !s.call(t, "constructor") &&
                  !s.call(t.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
              } catch (n) {
                return !1;
              }
              for (e in t);
              return void 0 === e || s.call(t, e);
            }),
            (i.each = function (t, i, n) {
              var o = 0,
                s = t.length,
                a = e(t);
              if (n) {
                if (a) for (; s > o && !1 !== i.apply(t[o], n); o++);
                else for (o in t) if (!1 === i.apply(t[o], n)) break;
              } else if (a) for (; s > o && !1 !== i.call(t[o], o, t[o]); o++);
              else for (o in t) if (!1 === i.call(t[o], o, t[o])) break;
              return t;
            }),
            (i.data = function (t, e, o) {
              if (void 0 === o) {
                var s = (a = t[i.expando]) && n[a];
                if (void 0 === e) return s;
                if (s && e in s) return s[e];
              } else if (void 0 !== e) {
                var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                return (n[a] = n[a] || {}), (n[a][e] = o), o;
              }
            }),
            (i.removeData = function (t, e) {
              var o = t[i.expando],
                s = o && n[o];
              s &&
                i.each(e, function (t, e) {
                  delete s[e];
                });
            }),
            (i.extend = function () {
              var t,
                e,
                n,
                o,
                s,
                a,
                r = arguments[0] || {},
                l = 1,
                c = arguments.length,
                d = !1;
              for (
                "boolean" == typeof r &&
                  ((d = r), (r = arguments[l] || {}), l++),
                  "object" != typeof r && "function" !== i.type(r) && (r = {}),
                  l === c && ((r = this), l--);
                c > l;
                l++
              )
                if (null != (s = arguments[l]))
                  for (o in s)
                    (t = r[o]),
                      r !== (n = s[o]) &&
                        (d && n && (i.isPlainObject(n) || (e = i.isArray(n)))
                          ? (e
                              ? ((e = !1), (a = t && i.isArray(t) ? t : []))
                              : (a = t && i.isPlainObject(t) ? t : {}),
                            (r[o] = i.extend(d, a, n)))
                          : void 0 !== n && (r[o] = n));
              return r;
            }),
            (i.queue = function (t, n, o) {
              if (t) {
                n = (n || "fx") + "queue";
                var s,
                  a,
                  r = i.data(t, n);
                return o
                  ? (!r || i.isArray(o)
                      ? (r = i.data(
                          t,
                          n,
                          ((a = []),
                          null != (s = o) &&
                            (e(Object(s))
                              ? (function (t, e) {
                                  for (
                                    var i = +e.length, n = 0, o = t.length;
                                    i > n;

                                  )
                                    t[o++] = e[n++];
                                  if (i != i)
                                    for (; void 0 !== e[n]; ) t[o++] = e[n++];
                                  t.length = o;
                                })(a, "string" == typeof s ? [s] : s)
                              : [].push.call(a, s)),
                          a)
                        ))
                      : r.push(o),
                    r)
                  : r || [];
              }
            }),
            (i.dequeue = function (t, e) {
              i.each(t.nodeType ? [t] : t, function (t, n) {
                e = e || "fx";
                var o = i.queue(n, e),
                  s = o.shift();
                "inprogress" === s && (s = o.shift()),
                  s &&
                    ("fx" === e && o.unshift("inprogress"),
                    s.call(n, function () {
                      i.dequeue(n, e);
                    }));
              });
            }),
            (i.fn = i.prototype =
              {
                init: function (t) {
                  if (t.nodeType) return (this[0] = t), this;
                  throw Error("Not a DOM node.");
                },
                offset: function () {
                  var e = this[0].getBoundingClientRect
                    ? this[0].getBoundingClientRect()
                    : { top: 0, left: 0 };
                  return {
                    top:
                      e.top +
                      (t.pageYOffset || document.scrollTop || 0) -
                      (document.clientTop || 0),
                    left:
                      e.left +
                      (t.pageXOffset || document.scrollLeft || 0) -
                      (document.clientLeft || 0),
                  };
                },
                position: function () {
                  function t() {
                    var t = this.offsetParent || document;
                    return t && t.nodeType.toLowerCase, t || document;
                  }
                  var e = this[0],
                    t = t.apply(e),
                    n = this.offset(),
                    o = /^(?:body|html)$/i.test(t.nodeName)
                      ? { top: 0, left: 0 }
                      : i(t).offset();
                  return (
                    (n.top -= parseFloat(e.style.marginTop) || 0),
                    (n.left -= parseFloat(e.style.marginLeft) || 0),
                    t.style &&
                      ((o.top += parseFloat(t.style.borderTopWidth) || 0),
                      (o.left += parseFloat(t.style.borderLeftWidth) || 0)),
                    { top: n.top - o.top, left: n.left - o.left }
                  );
                },
              });
          var n = {};
          (i.expando = "velocity" + new Date().getTime()), (i.uuid = 0);
          for (
            var o = {},
              s = o.hasOwnProperty,
              a = o.toString,
              r =
                "Boolean Number String Function Array Date RegExp Object Error".split(
                  " "
                ),
              l = 0;
            l < r.length;
            l++
          )
            o["[object " + r[l] + "]"] = r[l].toLowerCase();
          (i.fn.init.prototype = i.fn), (t.Velocity = { Utilities: i });
        }
      })(window),
      (function (t) {
        "object" == typeof module && "object" == typeof module.exports
          ? (module.exports = t())
          : "function" == typeof define && define.amd
          ? define(t)
          : t();
      })(function () {
        return (function (t, e, i, n) {
          function o(t) {
            return (
              v.isWrapped(t)
                ? (t = [].slice.call(t))
                : v.isNode(t) && (t = [t]),
              t
            );
          }
          function s(t) {
            var e = p.data(t, "velocity");
            return null === e ? n : e;
          }
          function a(t) {
            return function (e) {
              return Math.round(e * t) * (1 / t);
            };
          }
          function r(t, i, n, o) {
            function s(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function a(t, e) {
              return 3 * e - 6 * t;
            }
            function r(t) {
              return 3 * t;
            }
            function l(t, e, i) {
              var n;
              return ((s(e, i) * t + a(e, i)) * t + 3 * (n = e)) * t;
            }
            function c(t, e, i) {
              var n;
              return 3 * s(e, i) * t * t + 2 * a(e, i) * t + 3 * (n = e);
            }
            var d = 0.1;
            if (4 !== arguments.length) return !1;
            for (var u = 0; 4 > u; ++u)
              if (
                "number" != typeof arguments[u] ||
                isNaN(arguments[u]) ||
                !isFinite(arguments[u])
              )
                return !1;
            (t = Math.min(t, 1)),
              (n = Math.min(n, 1)),
              (t = Math.max(t, 0)),
              (n = Math.max(n, 0));
            var p = "Float32Array" in e ? new Float32Array(11) : Array(11),
              h = !1,
              f = function (e) {
                return (
                  h ||
                    ((h = !0),
                    (t != i || n != o) &&
                      (function e() {
                        for (var i = 0; 11 > i; ++i) p[i] = l(i * d, t, n);
                      })()),
                  t === i && n === o
                    ? e
                    : 0 === e
                    ? 0
                    : 1 === e
                    ? 1
                    : l(
                        (function e(i) {
                          for (
                            var o = 0, s = 1, a = 10;
                            s != a && p[s] <= i;
                            ++s
                          )
                            o += d;
                          var r = o + ((i - p[--s]) / (p[s + 1] - p[s])) * d,
                            u = c(r, t, n);
                          return u >= 0.001
                            ? (function e(i, o) {
                                for (var s = 0; 4 > s; ++s) {
                                  var a = c(o, t, n);
                                  if (0 === a) break;
                                  o -= (l(o, t, n) - i) / a;
                                }
                                return o;
                              })(i, r)
                            : 0 == u
                            ? r
                            : (function e(i, o, s) {
                                var a,
                                  r,
                                  c = 0;
                                do
                                  (a = l((r = o + (s - o) / 2), t, n) - i) > 0
                                    ? (s = r)
                                    : (o = r);
                                while (Math.abs(a) > 1e-7 && ++c < 10);
                                return r;
                              })(i, o, o + d);
                        })(e),
                        i,
                        o
                      )
                );
              };
            f.getControlPoints = function () {
              return [
                { x: t, y: i },
                { x: n, y: o },
              ];
            };
            var v = "generateBezier(" + [t, i, n, o] + ")";
            return (
              (f.toString = function () {
                return v;
              }),
              f
            );
          }
          function l(t, e) {
            var i = t;
            return (
              v.isString(t)
                ? _.Easings[t] || (i = !1)
                : (i =
                    v.isArray(t) && 1 === t.length
                      ? a.apply(null, t)
                      : v.isArray(t) && 2 === t.length
                      ? w.apply(null, t.concat([e]))
                      : !(!v.isArray(t) || 4 !== t.length) && r.apply(null, t)),
              !1 === i &&
                (i = _.Easings[_.defaults.easing] ? _.defaults.easing : b),
              i
            );
          }
          function c(t) {
            if (t) {
              var e = new Date().getTime(),
                i = _.State.calls.length;
              i > 1e4 &&
                (_.State.calls = (function (t) {
                  for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                    var o = t[e];
                    o && n.push(o);
                  }
                  return n;
                })(_.State.calls));
              for (var o = 0; i > o; o++)
                if (_.State.calls[o]) {
                  var a = _.State.calls[o],
                    r = a[0],
                    l = a[2],
                    u = a[3],
                    h = !!u,
                    f = null;
                  u || (u = _.State.calls[o][3] = e - 16);
                  for (
                    var g = Math.min((e - u) / l.duration, 1),
                      m = 0,
                      b = r.length;
                    b > m;
                    m++
                  ) {
                    var w = r[m],
                      C = w.element;
                    if (s(C)) {
                      var x = !1;
                      for (var S in (l.display !== n &&
                        null !== l.display &&
                        "none" !== l.display &&
                        ("flex" === l.display &&
                          p.each(
                            [
                              "-webkit-box",
                              "-moz-box",
                              "-ms-flexbox",
                              "-webkit-flex",
                            ],
                            function (t, e) {
                              k.setPropertyValue(C, "display", e);
                            }
                          ),
                        k.setPropertyValue(C, "display", l.display)),
                      l.visibility !== n &&
                        "hidden" !== l.visibility &&
                        k.setPropertyValue(C, "visibility", l.visibility),
                      w))
                        if ("element" !== S) {
                          var A,
                            P = w[S],
                            O = v.isString(P.easing)
                              ? _.Easings[P.easing]
                              : P.easing;
                          if (1 === g) A = P.endValue;
                          else {
                            var E = P.endValue - P.startValue;
                            if (
                              ((A = P.startValue + E * O(g, l, E)),
                              !h && A === P.currentValue)
                            )
                              continue;
                          }
                          if (((P.currentValue = A), "tween" === S)) f = A;
                          else {
                            if (k.Hooks.registered[S]) {
                              var I = k.Hooks.getRoot(S),
                                L = s(C).rootPropertyValueCache[I];
                              L && (P.rootPropertyValue = L);
                            }
                            var z = k.setPropertyValue(
                              C,
                              S,
                              P.currentValue +
                                (0 === parseFloat(A) ? "" : P.unitType),
                              P.rootPropertyValue,
                              P.scrollData
                            );
                            k.Hooks.registered[S] &&
                              (s(C).rootPropertyValueCache[I] = k.Normalizations
                                .registered[I]
                                ? k.Normalizations.registered[I](
                                    "extract",
                                    null,
                                    z[1]
                                  )
                                : z[1]),
                              "transform" === z[0] && (x = !0);
                          }
                        }
                      l.mobileHA &&
                        s(C).transformCache.translate3d === n &&
                        ((s(C).transformCache.translate3d = "(0px, 0px, 0px)"),
                        (x = !0)),
                        x && k.flushTransformCache(C);
                    }
                  }
                  l.display !== n &&
                    "none" !== l.display &&
                    (_.State.calls[o][2].display = !1),
                    l.visibility !== n &&
                      "hidden" !== l.visibility &&
                      (_.State.calls[o][2].visibility = !1),
                    l.progress &&
                      l.progress.call(
                        a[1],
                        a[1],
                        g,
                        Math.max(0, u + l.duration - e),
                        u,
                        f
                      ),
                    1 === g && d(o);
                }
            }
            _.State.isTicking && T(c);
          }
          function d(t, e) {
            if (!_.State.calls[t]) return !1;
            for (
              var i = _.State.calls[t][0],
                o = _.State.calls[t][1],
                a = _.State.calls[t][2],
                r = _.State.calls[t][4],
                l = !1,
                c = 0,
                d = i.length;
              d > c;
              c++
            ) {
              var u = i[c].element;
              if (
                (e ||
                  a.loop ||
                  ("none" === a.display &&
                    k.setPropertyValue(u, "display", a.display),
                  "hidden" === a.visibility &&
                    k.setPropertyValue(u, "visibility", a.visibility)),
                !0 !== a.loop &&
                  (p.queue(u)[1] === n ||
                    !/\.velocityQueueEntryFlag/i.test(p.queue(u)[1])) &&
                  s(u))
              ) {
                (s(u).isAnimating = !1), (s(u).rootPropertyValueCache = {});
                var h = !1;
                p.each(k.Lists.transforms3D, function (t, e) {
                  var i = /^scale/.test(e) ? 1 : 0,
                    o = s(u).transformCache[e];
                  s(u).transformCache[e] !== n &&
                    RegExp("^\\(" + i + "[^.]").test(o) &&
                    ((h = !0), delete s(u).transformCache[e]);
                }),
                  a.mobileHA &&
                    ((h = !0), delete s(u).transformCache.translate3d),
                  h && k.flushTransformCache(u),
                  k.Values.removeClass(u, "velocity-animating");
              }
              if (!e && a.complete && !a.loop && c === d - 1)
                try {
                  a.complete.call(o, o);
                } catch (f) {
                  setTimeout(function () {
                    throw f;
                  }, 1);
                }
              r && !0 !== a.loop && r(o),
                s(u) &&
                  !0 === a.loop &&
                  !e &&
                  (p.each(s(u).tweensContainer, function (t, e) {
                    /^rotate/.test(t) &&
                      360 === parseFloat(e.endValue) &&
                      ((e.endValue = 0), (e.startValue = 360)),
                      /^backgroundPosition/.test(t) &&
                        100 === parseFloat(e.endValue) &&
                        "%" === e.unitType &&
                        ((e.endValue = 0), (e.startValue = 100));
                  }),
                  _(u, "reverse", { loop: !0, delay: a.delay })),
                !1 !== a.queue && p.dequeue(u, a.queue);
            }
            _.State.calls[t] = !1;
            for (var v = 0, g = _.State.calls.length; g > v; v++)
              if (!1 !== _.State.calls[v]) {
                l = !0;
                break;
              }
            !1 === l &&
              ((_.State.isTicking = !1),
              delete _.State.calls,
              (_.State.calls = []));
          }
          var u,
            p,
            h = (function () {
              if (i.documentMode) return i.documentMode;
              for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");
                if (
                  ((e.innerHTML =
                    "<!--[if IE " + t + "]><span></span><![endif]-->"),
                  e.getElementsByTagName("span").length)
                )
                  return (e = null), t;
              }
              return n;
            })(),
            f =
              ((u = 0),
              e.webkitRequestAnimationFrame ||
                e.mozRequestAnimationFrame ||
                function (t) {
                  var e,
                    i = new Date().getTime();
                  return (
                    (e = Math.max(0, 16 - (i - u))),
                    (u = i + e),
                    setTimeout(function () {
                      t(i + e);
                    }, e)
                  );
                }),
            v = {
              isString: function (t) {
                return "string" == typeof t;
              },
              isArray:
                Array.isArray ||
                function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
              isFunction: function (t) {
                return (
                  "[object Function]" === Object.prototype.toString.call(t)
                );
              },
              isNode: function (t) {
                return t && t.nodeType;
              },
              isNodeList: function (t) {
                return (
                  "object" == typeof t &&
                  /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                    Object.prototype.toString.call(t)
                  ) &&
                  t.length !== n &&
                  (0 === t.length ||
                    ("object" == typeof t[0] && t[0].nodeType > 0))
                );
              },
              isWrapped: function (t) {
                return t && (t.jquery || (e.Zepto && e.Zepto.zepto.isZ(t)));
              },
              isSVG: function (t) {
                return e.SVGElement && t instanceof e.SVGElement;
              },
              isEmptyObject: function (t) {
                for (var e in t) return !1;
                return !0;
              },
            },
            g = !1;
          if (
            (t.fn && t.fn.jquery
              ? ((p = t), (g = !0))
              : (p = e.Velocity.Utilities),
            8 >= h && !g)
          )
            throw Error(
              "Velocity: IE8 and below require jQuery to be loaded before Velocity."
            );
          if (!(7 >= h)) {
            var m = 400,
              b = "swing",
              _ = {
                State: {
                  isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ),
                  isAndroid: /Android/i.test(navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(
                    navigator.userAgent
                  ),
                  isChrome: e.chrome,
                  isFirefox: /Firefox/i.test(navigator.userAgent),
                  prefixElement: i.createElement("div"),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: [],
                },
                CSS: {},
                Utilities: p,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                  queue: "",
                  duration: m,
                  easing: b,
                  begin: n,
                  complete: n,
                  progress: n,
                  display: n,
                  visibility: n,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0,
                },
                init: function (t) {
                  p.data(t, "velocity", {
                    isSVG: v.isSVG(t),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {},
                  });
                },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 2, patch: 2 },
                debug: !1,
              };
            e.pageYOffset !== n
              ? ((_.State.scrollAnchor = e),
                (_.State.scrollPropertyLeft = "pageXOffset"),
                (_.State.scrollPropertyTop = "pageYOffset"))
              : ((_.State.scrollAnchor =
                  i.documentElement || i.body.parentNode || i.body),
                (_.State.scrollPropertyLeft = "scrollLeft"),
                (_.State.scrollPropertyTop = "scrollTop"));
            var w = (function () {
              function t(t) {
                return -t.tension * t.x - t.friction * t.v;
              }
              function e(e, i, n) {
                var o = {
                  x: e.x + n.dx * i,
                  v: e.v + n.dv * i,
                  tension: e.tension,
                  friction: e.friction,
                };
                return { dx: o.v, dv: t(o) };
              }
              function i(i, n) {
                var o = { dx: i.v, dv: t(i) },
                  s = e(i, 0.5 * n, o),
                  a = e(i, 0.5 * n, s),
                  r = e(i, n, a),
                  l = (1 / 6) * (o.dx + 2 * (s.dx + a.dx) + r.dx),
                  c = (1 / 6) * (o.dv + 2 * (s.dv + a.dv) + r.dv);
                return (i.x = i.x + l * n), (i.v = i.v + c * n), i;
              }
              return function t(e, n, o) {
                var s,
                  a,
                  r,
                  l = { x: -1, v: 0, tension: null, friction: null },
                  c = [0],
                  d = 0;
                for (
                  e = parseFloat(e) || 500,
                    n = parseFloat(n) || 20,
                    o = o || null,
                    l.tension = e,
                    l.friction = n,
                    a = (s = null !== o) ? ((d = t(e, n)) / o) * 0.016 : 0.016;
                  (r = i(r || l, a)),
                    c.push(1 + r.x),
                    (d += 16),
                    Math.abs(r.x) > 1e-4 && Math.abs(r.v) > 1e-4;

                );
                return s
                  ? function (t) {
                      return c[(t * (c.length - 1)) | 0];
                    }
                  : d;
              };
            })();
            (_.Easings = {
              linear: function (t) {
                return t;
              },
              swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
              },
              spring: function (t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(-(6 * t));
              },
            }),
              p.each(
                [
                  ["ease", [0.25, 0.1, 0.25, 1]],
                  ["ease-in", [0.42, 0, 1, 1]],
                  ["ease-out", [0, 0, 0.58, 1]],
                  ["ease-in-out", [0.42, 0, 0.58, 1]],
                  ["easeInSine", [0.47, 0, 0.745, 0.715]],
                  ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                  ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                  ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                  ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                  ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                  ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                  ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                  ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                  ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                  ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                  ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                  ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                  ["easeOutQuint", [0.23, 1, 0.32, 1]],
                  ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                  ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                  ["easeOutExpo", [0.19, 1, 0.22, 1]],
                  ["easeInOutExpo", [1, 0, 0, 1]],
                  ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                  ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                  ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                ],
                function (t, e) {
                  _.Easings[e[0]] = r.apply(null, e[1]);
                }
              );
            var k = (_.CSS = {
              RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted:
                  /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
              },
              Lists: {
                colors: [
                  "fill",
                  "stroke",
                  "stopColor",
                  "color",
                  "backgroundColor",
                  "borderColor",
                  "borderTopColor",
                  "borderRightColor",
                  "borderBottomColor",
                  "borderLeftColor",
                  "outlineColor",
                ],
                transformsBase: [
                  "translateX",
                  "translateY",
                  "scale",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "rotateZ",
                ],
                transforms3D: [
                  "transformPerspective",
                  "translateZ",
                  "scaleZ",
                  "rotateX",
                  "rotateY",
                ],
              },
              Hooks: {
                templates: {
                  textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                  boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                  clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                  backgroundPosition: ["X Y", "0% 0%"],
                  transformOrigin: ["X Y Z", "50% 50% 0px"],
                  perspectiveOrigin: ["X Y", "50% 50%"],
                },
                registered: {},
                register: function () {
                  for (s = 0; s < k.Lists.colors.length; s++) {
                    var t,
                      e,
                      i,
                      n =
                        "color" === k.Lists.colors[s]
                          ? "0 0 0 1"
                          : "255 255 255 1";
                    k.Hooks.templates[k.Lists.colors[s]] = [
                      "Red Green Blue Alpha",
                      n,
                    ];
                  }
                  if (h)
                    for (t in k.Hooks.templates) {
                      i = (e = k.Hooks.templates[t])[0].split(" ");
                      var o = e[1].match(k.RegEx.valueSplit);
                      "Color" === i[0] &&
                        (i.push(i.shift()),
                        o.push(o.shift()),
                        (k.Hooks.templates[t] = [i.join(" "), o.join(" ")]));
                    }
                  for (t in k.Hooks.templates)
                    for (var s in (i = (e = k.Hooks.templates[t])[0].split(
                      " "
                    ))) {
                      var a = t + i[s],
                        r = s;
                      k.Hooks.registered[a] = [t, r];
                    }
                },
                getRoot: function (t) {
                  var e = k.Hooks.registered[t];
                  return e ? e[0] : t;
                },
                cleanRootPropertyValue: function (t, e) {
                  return (
                    k.RegEx.valueUnwrap.test(e) &&
                      (e = e.match(k.RegEx.valueUnwrap)[1]),
                    k.Values.isCSSNullValue(e) && (e = k.Hooks.templates[t][1]),
                    e
                  );
                },
                extractValue: function (t, e) {
                  var i = k.Hooks.registered[t];
                  if (i) {
                    var n = i[0],
                      o = i[1];
                    return (e = k.Hooks.cleanRootPropertyValue(n, e))
                      .toString()
                      .match(k.RegEx.valueSplit)[o];
                  }
                  return e;
                },
                injectValue: function (t, e, i) {
                  var n = k.Hooks.registered[t];
                  if (n) {
                    var o,
                      s = n[0],
                      a = n[1];
                    return (
                      ((o = (i = k.Hooks.cleanRootPropertyValue(s, i))
                        .toString()
                        .match(k.RegEx.valueSplit))[a] = e),
                      o.join(" ")
                    );
                  }
                  return i;
                },
              },
              Normalizations: {
                registered: {
                  clip: function (t, e, i) {
                    switch (t) {
                      case "name":
                        return "clip";
                      case "extract":
                        var n;
                        return k.RegEx.wrappedValueAlreadyExtracted.test(i)
                          ? i
                          : (n = i.toString().match(k.RegEx.valueUnwrap))
                          ? n[1].replace(/,(\s+)?/g, " ")
                          : i;
                      case "inject":
                        return "rect(" + i + ")";
                    }
                  },
                  blur: function (t, e, i) {
                    switch (t) {
                      case "name":
                        return _.State.isFirefox ? "filter" : "-webkit-filter";
                      case "extract":
                        var n = parseFloat(i);
                        if (!n && 0 !== n) {
                          var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                          n = o ? o[1] : 0;
                        }
                        return n;
                      case "inject":
                        return parseFloat(i) ? "blur(" + i + ")" : "none";
                    }
                  },
                  opacity: function (t, e, i) {
                    if (8 >= h)
                      switch (t) {
                        case "name":
                          return "filter";
                        case "extract":
                          var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                          return n ? n[1] / 100 : 1;
                        case "inject":
                          return (
                            (e.style.zoom = 1),
                            parseFloat(i) >= 1
                              ? ""
                              : "alpha(opacity=" +
                                parseInt(100 * parseFloat(i), 10) +
                                ")"
                          );
                      }
                    else
                      switch (t) {
                        case "name":
                          return "opacity";
                        case "extract":
                        case "inject":
                          return i;
                      }
                  },
                },
                register: function () {
                  for (
                    9 >= h ||
                      _.State.isGingerbread ||
                      (k.Lists.transformsBase = k.Lists.transformsBase.concat(
                        k.Lists.transforms3D
                      )),
                      t = 0;
                    t < k.Lists.transformsBase.length;
                    t++
                  )
                    !(function () {
                      var e = k.Lists.transformsBase[t];
                      k.Normalizations.registered[e] = function (t, i, o) {
                        switch (t) {
                          case "name":
                            return "transform";
                          case "extract":
                            return s(i) === n || s(i).transformCache[e] === n
                              ? /^scale/i.test(e)
                                ? 1
                                : 0
                              : s(i).transformCache[e].replace(/[()]/g, "");
                          case "inject":
                            var a = !1;
                            switch (e.substr(0, e.length - 1)) {
                              case "translate":
                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                break;
                              case "scal":
                              case "scale":
                                _.State.isAndroid &&
                                  s(i).transformCache[e] === n &&
                                  1 > o &&
                                  (o = 1),
                                  (a = !/(\d)$/i.test(o));
                                break;
                              case "skew":
                              case "rotate":
                                a = !/(deg|\d)$/i.test(o);
                            }
                            return (
                              a || (s(i).transformCache[e] = "(" + o + ")"),
                              s(i).transformCache[e]
                            );
                        }
                      };
                    })();
                  for (var t = 0; t < k.Lists.colors.length; t++)
                    !(function () {
                      var e = k.Lists.colors[t];
                      k.Normalizations.registered[e] = function (t, i, o) {
                        switch (t) {
                          case "name":
                            return e;
                          case "extract":
                            var s;
                            if (k.RegEx.wrappedValueAlreadyExtracted.test(o))
                              s = o;
                            else {
                              var a,
                                r = {
                                  black: "rgb(0, 0, 0)",
                                  blue: "rgb(0, 0, 255)",
                                  gray: "rgb(128, 128, 128)",
                                  green: "rgb(0, 128, 0)",
                                  red: "rgb(255, 0, 0)",
                                  white: "rgb(255, 255, 255)",
                                };
                              /^[A-z]+$/i.test(o)
                                ? (a = r[o] !== n ? r[o] : r.black)
                                : k.RegEx.isHex.test(o)
                                ? (a =
                                    "rgb(" +
                                    k.Values.hexToRgb(o).join(" ") +
                                    ")")
                                : /^rgba?\(/i.test(o) || (a = r.black),
                                (s = (a || o)
                                  .toString()
                                  .match(k.RegEx.valueUnwrap)[1]
                                  .replace(/,(\s+)?/g, " "));
                            }
                            return (
                              8 >= h ||
                                3 !== s.split(" ").length ||
                                (s += " 1"),
                              s
                            );
                          case "inject":
                            return (
                              8 >= h
                                ? 4 === o.split(" ").length &&
                                  (o = o.split(/\s+/).slice(0, 3).join(" "))
                                : 3 === o.split(" ").length && (o += " 1"),
                              (8 >= h ? "rgb" : "rgba") +
                                "(" +
                                o
                                  .replace(/\s+/g, ",")
                                  .replace(/\.(\d)+(?=,)/g, "") +
                                ")"
                            );
                        }
                      };
                    })();
                },
              },
              Names: {
                camelCase: function (t) {
                  return t.replace(/-(\w)/g, function (t, e) {
                    return e.toUpperCase();
                  });
                },
                SVGAttribute: function (t) {
                  var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                  return (
                    (h || (_.State.isAndroid && !_.State.isChrome)) &&
                      (e += "|transform"),
                    RegExp("^(" + e + ")$", "i").test(t)
                  );
                },
                prefixCheck: function (t) {
                  if (_.State.prefixMatches[t])
                    return [_.State.prefixMatches[t], !0];
                  for (
                    var e,
                      i = ["", "Webkit", "Moz", "ms", "O"],
                      n = 0,
                      o = i.length;
                    o > n;
                    n++
                  )
                    if (
                      ((e =
                        0 === n
                          ? t
                          : i[n] +
                            t.replace(/^\w/, function (t) {
                              return t.toUpperCase();
                            })),
                      v.isString(_.State.prefixElement.style[e]))
                    )
                      return (_.State.prefixMatches[t] = e), [e, !0];
                  return [t, !1];
                },
              },
              Values: {
                hexToRgb: function (t) {
                  var e;
                  return (
                    (t = t.replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (t, e, i, n) {
                        return e + e + i + i + n + n;
                      }
                    )),
                    (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))
                      ? [
                          parseInt(e[1], 16),
                          parseInt(e[2], 16),
                          parseInt(e[3], 16),
                        ]
                      : [0, 0, 0]
                  );
                },
                isCSSNullValue: function (t) {
                  return (
                    0 == t ||
                    /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                  );
                },
                getUnitType: function (t) {
                  return /^(rotate|skew)/i.test(t)
                    ? "deg"
                    : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                        t
                      )
                    ? ""
                    : "px";
                },
                getDisplayType: function (t) {
                  var e = t && t.tagName.toString().toLowerCase();
                  return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                    e
                  )
                    ? "inline"
                    : /^(li)$/i.test(e)
                    ? "list-item"
                    : /^(tr)$/i.test(e)
                    ? "table-row"
                    : /^(table)$/i.test(e)
                    ? "table"
                    : /^(tbody)$/i.test(e)
                    ? "table-row-group"
                    : "block";
                },
                addClass: function (t, e) {
                  t.classList
                    ? t.classList.add(e)
                    : (t.className += (t.className.length ? " " : "") + e);
                },
                removeClass: function (t, e) {
                  t.classList
                    ? t.classList.remove(e)
                    : (t.className = t.className
                        .toString()
                        .replace(
                          RegExp(
                            "(^|\\s)" + e.split(" ").join("|") + "(\\s|$)",
                            "gi"
                          ),
                          " "
                        ));
                },
              },
              getPropertyValue: function (t, i, o, a) {
                function r(t, i) {
                  function o() {
                    d && k.setPropertyValue(t, "display", "none");
                  }
                  var l = 0;
                  if (8 >= h) l = p.css(t, i);
                  else {
                    var c,
                      d = !1;
                    if (
                      (/^(width|height)$/.test(i) &&
                        0 === k.getPropertyValue(t, "display") &&
                        ((d = !0),
                        k.setPropertyValue(
                          t,
                          "display",
                          k.Values.getDisplayType(t)
                        )),
                      !a)
                    ) {
                      if (
                        "height" === i &&
                        "border-box" !==
                          k
                            .getPropertyValue(t, "boxSizing")
                            .toString()
                            .toLowerCase()
                      ) {
                        var u =
                          t.offsetHeight -
                          (parseFloat(
                            k.getPropertyValue(t, "borderTopWidth")
                          ) || 0) -
                          (parseFloat(
                            k.getPropertyValue(t, "borderBottomWidth")
                          ) || 0) -
                          (parseFloat(k.getPropertyValue(t, "paddingTop")) ||
                            0) -
                          (parseFloat(k.getPropertyValue(t, "paddingBottom")) ||
                            0);
                        return o(), u;
                      }
                      if (
                        "width" === i &&
                        "border-box" !==
                          k
                            .getPropertyValue(t, "boxSizing")
                            .toString()
                            .toLowerCase()
                      ) {
                        var f =
                          t.offsetWidth -
                          (parseFloat(
                            k.getPropertyValue(t, "borderLeftWidth")
                          ) || 0) -
                          (parseFloat(
                            k.getPropertyValue(t, "borderRightWidth")
                          ) || 0) -
                          (parseFloat(k.getPropertyValue(t, "paddingLeft")) ||
                            0) -
                          (parseFloat(k.getPropertyValue(t, "paddingRight")) ||
                            0);
                        return o(), f;
                      }
                    }
                    (c =
                      s(t) === n
                        ? e.getComputedStyle(t, null)
                        : s(t).computedStyle
                        ? s(t).computedStyle
                        : (s(t).computedStyle = e.getComputedStyle(t, null))),
                      "borderColor" === i && (i = "borderTopColor"),
                      ("" ===
                        (l =
                          9 === h && "filter" === i
                            ? c.getPropertyValue(i)
                            : c[i]) ||
                        null === l) &&
                        (l = t.style[i]),
                      o();
                  }
                  if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                    var v = r(t, "position");
                    ("fixed" === v ||
                      ("absolute" === v && /top|left/i.test(i))) &&
                      (l = p(t).position()[i] + "px");
                  }
                  return l;
                }
                if (k.Hooks.registered[i]) {
                  var l,
                    c,
                    d,
                    u = i,
                    f = k.Hooks.getRoot(u);
                  o === n &&
                    (o = k.getPropertyValue(t, k.Names.prefixCheck(f)[0])),
                    k.Normalizations.registered[f] &&
                      (o = k.Normalizations.registered[f]("extract", t, o)),
                    (l = k.Hooks.extractValue(u, o));
                } else
                  k.Normalizations.registered[i] &&
                    ("transform" !==
                      (c = k.Normalizations.registered[i]("name", t)) &&
                      ((d = r(t, k.Names.prefixCheck(c)[0])),
                      k.Values.isCSSNullValue(d) &&
                        k.Hooks.templates[i] &&
                        (d = k.Hooks.templates[i][1])),
                    (l = k.Normalizations.registered[i]("extract", t, d)));
                if (!/^[\d-]/.test(l)) {
                  if (s(t) && s(t).isSVG && k.Names.SVGAttribute(i)) {
                    if (/^(height|width)$/i.test(i))
                      try {
                        l = t.getBBox()[i];
                      } catch (v) {
                        l = 0;
                      }
                    else l = t.getAttribute(i);
                  } else l = r(t, k.Names.prefixCheck(i)[0]);
                }
                return (
                  k.Values.isCSSNullValue(l) && (l = 0),
                  _.debug >= 2 && console.log("Get " + i + ": " + l),
                  l
                );
              },
              setPropertyValue: function (t, i, n, o, a) {
                var r = i;
                if ("scroll" === i)
                  a.container
                    ? (a.container["scroll" + a.direction] = n)
                    : "Left" === a.direction
                    ? e.scrollTo(n, a.alternateValue)
                    : e.scrollTo(a.alternateValue, n);
                else if (
                  k.Normalizations.registered[i] &&
                  "transform" === k.Normalizations.registered[i]("name", t)
                )
                  k.Normalizations.registered[i]("inject", t, n),
                    (r = "transform"),
                    (n = s(t).transformCache[i]);
                else {
                  if (k.Hooks.registered[i]) {
                    var l = i,
                      c = k.Hooks.getRoot(i);
                    (o = o || k.getPropertyValue(t, c)),
                      (n = k.Hooks.injectValue(l, n, o)),
                      (i = c);
                  }
                  if (
                    (k.Normalizations.registered[i] &&
                      ((n = k.Normalizations.registered[i]("inject", t, n)),
                      (i = k.Normalizations.registered[i]("name", t))),
                    (r = k.Names.prefixCheck(i)[0]),
                    8 >= h)
                  )
                    try {
                      t.style[r] = n;
                    } catch (d) {
                      _.debug &&
                        console.log(
                          "Browser does not support [" + n + "] for [" + r + "]"
                        );
                    }
                  else
                    s(t) && s(t).isSVG && k.Names.SVGAttribute(i)
                      ? t.setAttribute(i, n)
                      : (t.style[r] = n);
                  _.debug >= 2 &&
                    console.log("Set " + i + " (" + r + "): " + n);
                }
                return [r, n];
              },
              flushTransformCache: function (t) {
                function e(e) {
                  return parseFloat(k.getPropertyValue(t, e));
                }
                var i,
                  n,
                  o = "";
                if (
                  (h || (_.State.isAndroid && !_.State.isChrome)) &&
                  s(t).isSVG
                ) {
                  var a = {
                    translate: [e("translateX"), e("translateY")],
                    skewX: [e("skewX")],
                    skewY: [e("skewY")],
                    scale:
                      1 !== e("scale")
                        ? [e("scale"), e("scale")]
                        : [e("scaleX"), e("scaleY")],
                    rotate: [e("rotateZ"), 0, 0],
                  };
                  p.each(s(t).transformCache, function (t) {
                    /^translate/i.test(t)
                      ? (t = "translate")
                      : /^scale/i.test(t)
                      ? (t = "scale")
                      : /^rotate/i.test(t) && (t = "rotate"),
                      a[t] &&
                        ((o += t + "(" + a[t].join(" ") + ") "), delete a[t]);
                  });
                } else
                  p.each(s(t).transformCache, function (e) {
                    return (
                      (i = s(t).transformCache[e]),
                      "transformPerspective" === e
                        ? ((n = i), !0)
                        : (9 === h && "rotateZ" === e && (e = "rotate"),
                          void (o += e + i + " "))
                    );
                  }),
                    n && (o = "perspective" + n + " " + o);
                k.setPropertyValue(t, "transform", o);
              },
            });
            k.Hooks.register(),
              k.Normalizations.register(),
              (_.hook = function (t, e, i) {
                var a = n;
                return (
                  (t = o(t)),
                  p.each(t, function (t, o) {
                    if ((s(o) === n && _.init(o), i === n))
                      a === n && (a = _.CSS.getPropertyValue(o, e));
                    else {
                      var r = _.CSS.setPropertyValue(o, e, i);
                      "transform" === r[0] && _.CSS.flushTransformCache(o),
                        (a = r);
                    }
                  }),
                  a
                );
              });
            var C = function () {
              function t() {
                return r ? P.promise || null : u;
              }
              function a() {
                function t(t) {
                  function u(t, e) {
                    var i = n,
                      o = n,
                      s = n;
                    return (
                      v.isArray(t)
                        ? ((i = t[0]),
                          (!v.isArray(t[1]) && /^[\d-]/.test(t[1])) ||
                          v.isFunction(t[1]) ||
                          k.RegEx.isHex.test(t[1])
                            ? (s = t[1])
                            : ((v.isString(t[1]) &&
                                !k.RegEx.isHex.test(t[1])) ||
                                v.isArray(t[1])) &&
                              ((o = e ? t[1] : l(t[1], r.duration)),
                              t[2] !== n && (s = t[2])))
                        : (i = t),
                      e || (o = o || r.easing),
                      v.isFunction(i) && (i = i.call(a, x, T)),
                      v.isFunction(s) && (s = s.call(a, x, T)),
                      [i || 0, o, s]
                    );
                  }
                  function h(t, e) {
                    var i, n;
                    return (
                      (n = (e || "0")
                        .toString()
                        .toLowerCase()
                        .replace(/[%A-z]+$/, function (t) {
                          return (i = t), "";
                        })),
                      i || (i = k.Values.getUnitType(t)),
                      [n, i]
                    );
                  }
                  if (r.begin && 0 === x)
                    try {
                      r.begin.call(f, f);
                    } catch (m) {
                      setTimeout(function () {
                        throw m;
                      }, 1);
                    }
                  if ("scroll" === A) {
                    var w,
                      C,
                      S,
                      O = /^x$/i.test(r.axis) ? "Left" : "Top",
                      E = parseFloat(r.offset) || 0;
                    r.container
                      ? v.isWrapped(r.container) || v.isNode(r.container)
                        ? ((r.container = r.container[0] || r.container),
                          (S =
                            (w = r.container["scroll" + O]) +
                            p(a).position()[O.toLowerCase()] +
                            E))
                        : (r.container = null)
                      : ((w =
                          _.State.scrollAnchor[_.State["scrollProperty" + O]]),
                        (C =
                          _.State.scrollAnchor[
                            _.State[
                              "scrollProperty" + ("Left" === O ? "Top" : "Left")
                            ]
                          ]),
                        (S = p(a).offset()[O.toLowerCase()] + E)),
                      (d = {
                        scroll: {
                          rootPropertyValue: !1,
                          startValue: w,
                          currentValue: w,
                          endValue: S,
                          unitType: "",
                          easing: r.easing,
                          scrollData: {
                            container: r.container,
                            direction: O,
                            alternateValue: C,
                          },
                        },
                        element: a,
                      }),
                      _.debug &&
                        console.log("tweensContainer (scroll): ", d.scroll, a);
                  } else if ("reverse" === A) {
                    if (!s(a).tweensContainer)
                      return void p.dequeue(a, r.queue);
                    for (var I in ("none" === s(a).opts.display &&
                      (s(a).opts.display = "auto"),
                    "hidden" === s(a).opts.visibility &&
                      (s(a).opts.visibility = "visible"),
                    (s(a).opts.loop = !1),
                    (s(a).opts.begin = null),
                    (s(a).opts.complete = null),
                    b.easing || delete r.easing,
                    b.duration || delete r.duration,
                    (r = p.extend({}, s(a).opts, r)),
                    (B = p.extend(!0, {}, s(a).tweensContainer))))
                      if ("element" !== I) {
                        var L = B[I].startValue;
                        (B[I].startValue = B[I].currentValue = B[I].endValue),
                          (B[I].endValue = L),
                          v.isEmptyObject(b) || (B[I].easing = r.easing),
                          _.debug &&
                            console.log(
                              "reverse tweensContainer (" +
                                I +
                                "): " +
                                JSON.stringify(B[I]),
                              a
                            );
                      }
                    d = B;
                  } else if ("start" === A) {
                    for (var D in (s(a).tweensContainer &&
                      !0 === s(a).isAnimating &&
                      (B = s(a).tweensContainer),
                    p.each(g, function (t, e) {
                      if (
                        RegExp("^" + k.Lists.colors.join("$|^") + "$").test(t)
                      ) {
                        var i = u(e, !0),
                          o = i[0],
                          s = i[1],
                          a = i[2];
                        if (k.RegEx.isHex.test(o)) {
                          for (
                            var r = ["Red", "Green", "Blue"],
                              l = k.Values.hexToRgb(o),
                              c = a ? k.Values.hexToRgb(a) : n,
                              d = 0;
                            d < r.length;
                            d++
                          ) {
                            var p = [l[d]];
                            s && p.push(s),
                              c !== n && p.push(c[d]),
                              (g[t + r[d]] = p);
                          }
                          delete g[t];
                        }
                      }
                    }),
                    g)) {
                      var j = u(g[D]),
                        q = j[0],
                        W = j[1],
                        N = j[2];
                      D = k.Names.camelCase(D);
                      var V = k.Hooks.getRoot(D),
                        R = !1;
                      if (
                        s(a).isSVG ||
                        "tween" === V ||
                        !1 !== k.Names.prefixCheck(V)[1] ||
                        k.Normalizations.registered[V] !== n
                      ) {
                        ((r.display !== n &&
                          null !== r.display &&
                          "none" !== r.display) ||
                          (r.visibility !== n && "hidden" !== r.visibility)) &&
                          /opacity|filter/.test(D) &&
                          !N &&
                          0 !== q &&
                          (N = 0),
                          r._cacheValues && B && B[D]
                            ? (N === n && (N = B[D].endValue + B[D].unitType),
                              (R = s(a).rootPropertyValueCache[V]))
                            : k.Hooks.registered[D]
                            ? N === n
                              ? ((R = k.getPropertyValue(a, V)),
                                (N = k.getPropertyValue(a, D, R)))
                              : (R = k.Hooks.templates[V][1])
                            : N === n && (N = k.getPropertyValue(a, D));
                        var B,
                          M,
                          Q,
                          X,
                          F = !1;
                        if (
                          ((N = (M = h(D, N))[0]),
                          (X = M[1]),
                          (q = (M = h(D, q))[0].replace(
                            /^([+-\/*])=/,
                            function (t, e) {
                              return (F = e), "";
                            }
                          )),
                          (Q = M[1]),
                          (N = parseFloat(N) || 0),
                          (q = parseFloat(q) || 0),
                          "%" === Q &&
                            (/^(fontSize|lineHeight)$/.test(D)
                              ? ((q /= 100), (Q = "em"))
                              : /^scale/.test(D)
                              ? ((q /= 100), (Q = ""))
                              : /(Red|Green|Blue)$/i.test(D) &&
                                ((q = (q / 100) * 255), (Q = ""))),
                          /[\/*]/.test(F))
                        )
                          Q = X;
                        else if (X !== Q && 0 !== N) {
                          if (0 === q) Q = X;
                          else {
                            o =
                              o ||
                              (function () {
                                var t = {
                                    myParent: a.parentNode || i.body,
                                    position: k.getPropertyValue(a, "position"),
                                    fontSize: k.getPropertyValue(a, "fontSize"),
                                  },
                                  n =
                                    t.position === z.lastPosition &&
                                    t.myParent === z.lastParent,
                                  o = t.fontSize === z.lastFontSize;
                                (z.lastParent = t.myParent),
                                  (z.lastPosition = t.position),
                                  (z.lastFontSize = t.fontSize);
                                var r = {};
                                if (o && n)
                                  (r.emToPx = z.lastEmToPx),
                                    (r.percentToPxWidth =
                                      z.lastPercentToPxWidth),
                                    (r.percentToPxHeight =
                                      z.lastPercentToPxHeight);
                                else {
                                  var l = s(a).isSVG
                                    ? i.createElementNS(
                                        "http://www.w3.org/2000/svg",
                                        "rect"
                                      )
                                    : i.createElement("div");
                                  _.init(l),
                                    t.myParent.appendChild(l),
                                    p.each(
                                      ["overflow", "overflowX", "overflowY"],
                                      function (t, e) {
                                        _.CSS.setPropertyValue(l, e, "hidden");
                                      }
                                    ),
                                    _.CSS.setPropertyValue(
                                      l,
                                      "position",
                                      t.position
                                    ),
                                    _.CSS.setPropertyValue(
                                      l,
                                      "fontSize",
                                      t.fontSize
                                    ),
                                    _.CSS.setPropertyValue(
                                      l,
                                      "boxSizing",
                                      "content-box"
                                    ),
                                    p.each(
                                      [
                                        "minWidth",
                                        "maxWidth",
                                        "width",
                                        "minHeight",
                                        "maxHeight",
                                        "height",
                                      ],
                                      function (t, e) {
                                        _.CSS.setPropertyValue(l, e, "100%");
                                      }
                                    ),
                                    _.CSS.setPropertyValue(
                                      l,
                                      "paddingLeft",
                                      "100em"
                                    ),
                                    (r.percentToPxWidth =
                                      z.lastPercentToPxWidth =
                                        (parseFloat(
                                          k.getPropertyValue(
                                            l,
                                            "width",
                                            null,
                                            !0
                                          )
                                        ) || 1) / 100),
                                    (r.percentToPxHeight =
                                      z.lastPercentToPxHeight =
                                        (parseFloat(
                                          k.getPropertyValue(
                                            l,
                                            "height",
                                            null,
                                            !0
                                          )
                                        ) || 1) / 100),
                                    (r.emToPx = z.lastEmToPx =
                                      (parseFloat(
                                        k.getPropertyValue(l, "paddingLeft")
                                      ) || 1) / 100),
                                    t.myParent.removeChild(l);
                                }
                                return (
                                  null === z.remToPx &&
                                    (z.remToPx =
                                      parseFloat(
                                        k.getPropertyValue(i.body, "fontSize")
                                      ) || 16),
                                  null === z.vwToPx &&
                                    ((z.vwToPx =
                                      parseFloat(e.innerWidth) / 100),
                                    (z.vhToPx =
                                      parseFloat(e.innerHeight) / 100)),
                                  (r.remToPx = z.remToPx),
                                  (r.vwToPx = z.vwToPx),
                                  (r.vhToPx = z.vhToPx),
                                  _.debug >= 1 &&
                                    console.log(
                                      "Unit ratios: " + JSON.stringify(r),
                                      a
                                    ),
                                  r
                                );
                              })();
                            var Y =
                              /margin|padding|left|right|width|text|word|letter/i.test(
                                D
                              ) ||
                              /X$/.test(D) ||
                              "x" === D
                                ? "x"
                                : "y";
                            switch (X) {
                              case "%":
                                N *=
                                  "x" === Y
                                    ? o.percentToPxWidth
                                    : o.percentToPxHeight;
                                break;
                              case "px":
                                break;
                              default:
                                N *= o[X + "ToPx"];
                            }
                            switch (Q) {
                              case "%":
                                N *=
                                  1 /
                                  ("x" === Y
                                    ? o.percentToPxWidth
                                    : o.percentToPxHeight);
                                break;
                              case "px":
                                break;
                              default:
                                N *= 1 / o[Q + "ToPx"];
                            }
                          }
                        }
                        switch (F) {
                          case "+":
                            q = N + q;
                            break;
                          case "-":
                            q = N - q;
                            break;
                          case "*":
                            q *= N;
                            break;
                          case "/":
                            q = N / q;
                        }
                        (d[D] = {
                          rootPropertyValue: R,
                          startValue: N,
                          currentValue: N,
                          endValue: q,
                          unitType: Q,
                          easing: W,
                        }),
                          _.debug &&
                            console.log(
                              "tweensContainer (" +
                                D +
                                "): " +
                                JSON.stringify(d[D]),
                              a
                            );
                      } else
                        _.debug &&
                          console.log(
                            "Skipping [" +
                              V +
                              "] due to a lack of browser support."
                          );
                    }
                    d.element = a;
                  }
                  d.element &&
                    (k.Values.addClass(a, "velocity-animating"),
                    H.push(d),
                    "" === r.queue &&
                      ((s(a).tweensContainer = d), (s(a).opts = r)),
                    (s(a).isAnimating = !0),
                    x === T - 1
                      ? (_.State.calls.push([H, f, r, null, P.resolver]),
                        !1 === _.State.isTicking &&
                          ((_.State.isTicking = !0), c()))
                      : x++);
                }
                var o,
                  a = this,
                  r = p.extend({}, _.defaults, b),
                  d = {};
                switch (
                  (s(a) === n && _.init(a),
                  parseFloat(r.delay) &&
                    !1 !== r.queue &&
                    p.queue(a, r.queue, function (t) {
                      (_.velocityQueueEntryFlag = !0),
                        (s(a).delayTimer = {
                          setTimeout: setTimeout(t, parseFloat(r.delay)),
                          next: t,
                        });
                    }),
                  r.duration.toString().toLowerCase())
                ) {
                  case "fast":
                    r.duration = 200;
                    break;
                  case "normal":
                    r.duration = m;
                    break;
                  case "slow":
                    r.duration = 600;
                    break;
                  default:
                    r.duration = parseFloat(r.duration) || 1;
                }
                !1 !== _.mock &&
                  (!0 === _.mock
                    ? (r.duration = r.delay = 1)
                    : ((r.duration *= parseFloat(_.mock) || 1),
                      (r.delay *= parseFloat(_.mock) || 1))),
                  (r.easing = l(r.easing, r.duration)),
                  r.begin && !v.isFunction(r.begin) && (r.begin = null),
                  r.progress &&
                    !v.isFunction(r.progress) &&
                    (r.progress = null),
                  r.complete &&
                    !v.isFunction(r.complete) &&
                    (r.complete = null),
                  r.display !== n &&
                    null !== r.display &&
                    ((r.display = r.display.toString().toLowerCase()),
                    "auto" === r.display &&
                      (r.display = _.CSS.Values.getDisplayType(a))),
                  r.visibility !== n &&
                    null !== r.visibility &&
                    (r.visibility = r.visibility.toString().toLowerCase()),
                  (r.mobileHA =
                    r.mobileHA && _.State.isMobile && !_.State.isGingerbread),
                  !1 === r.queue
                    ? r.delay
                      ? setTimeout(t, r.delay)
                      : t()
                    : p.queue(a, r.queue, function (e, i) {
                        return !0 === i
                          ? (P.promise && P.resolver(f), !0)
                          : ((_.velocityQueueEntryFlag = !0), void t(e));
                      }),
                  ("" !== r.queue && "fx" !== r.queue) ||
                    "inprogress" === p.queue(a)[0] ||
                    p.dequeue(a);
              }
              var r,
                u,
                h,
                f,
                g,
                b,
                w =
                  arguments[0] &&
                  (arguments[0].p ||
                    (p.isPlainObject(arguments[0].properties) &&
                      !arguments[0].properties.names) ||
                    v.isString(arguments[0].properties));
              if (
                (v.isWrapped(this)
                  ? ((r = !1), (h = 0), (f = this), (u = this))
                  : ((r = !0),
                    (h = 1),
                    (f = w
                      ? arguments[0].elements || arguments[0].e
                      : arguments[0])),
                (f = o(f)))
              ) {
                w
                  ? ((g = arguments[0].properties || arguments[0].p),
                    (b = arguments[0].options || arguments[0].o))
                  : ((g = arguments[h]), (b = arguments[h + 1]));
                var T = f.length,
                  x = 0;
                if (!/^(stop|finish)$/i.test(g) && !p.isPlainObject(b)) {
                  b = {};
                  for (var S = h + 1; S < arguments.length; S++)
                    !v.isArray(arguments[S]) &&
                    (/^(fast|normal|slow)$/i.test(arguments[S]) ||
                      /^\d/.test(arguments[S]))
                      ? (b.duration = arguments[S])
                      : v.isString(arguments[S]) || v.isArray(arguments[S])
                      ? (b.easing = arguments[S])
                      : v.isFunction(arguments[S]) &&
                        (b.complete = arguments[S]);
                }
                var A,
                  P = { promise: null, resolver: null, rejecter: null };
                switch (
                  (r &&
                    _.Promise &&
                    (P.promise = new _.Promise(function (t, e) {
                      (P.resolver = t), (P.rejecter = e);
                    })),
                  g)
                ) {
                  case "scroll":
                    A = "scroll";
                    break;
                  case "reverse":
                    A = "reverse";
                    break;
                  case "finish":
                  case "stop":
                    p.each(f, function (t, e) {
                      s(e) &&
                        s(e).delayTimer &&
                        (clearTimeout(s(e).delayTimer.setTimeout),
                        s(e).delayTimer.next && s(e).delayTimer.next(),
                        delete s(e).delayTimer);
                    });
                    var O = [];
                    return (
                      p.each(_.State.calls, function (t, e) {
                        e &&
                          p.each(e[1], function (i, o) {
                            var a = b === n ? "" : b;
                            return (
                              (!0 !== a &&
                                e[2].queue !== a &&
                                (b !== n || !1 !== e[2].queue)) ||
                              void p.each(f, function (i, n) {
                                n === o &&
                                  ((!0 === b || v.isString(b)) &&
                                    (p.each(
                                      p.queue(n, v.isString(b) ? b : ""),
                                      function (t, e) {
                                        v.isFunction(e) && e(null, !0);
                                      }
                                    ),
                                    p.queue(n, v.isString(b) ? b : "", [])),
                                  "stop" === g
                                    ? (s(n) &&
                                        s(n).tweensContainer &&
                                        !1 !== a &&
                                        p.each(
                                          s(n).tweensContainer,
                                          function (t, e) {
                                            e.endValue = e.currentValue;
                                          }
                                        ),
                                      O.push(t))
                                    : "finish" === g && (e[2].duration = 1));
                              })
                            );
                          });
                      }),
                      "stop" === g &&
                        (p.each(O, function (t, e) {
                          d(e, !0);
                        }),
                        P.promise && P.resolver(f)),
                      t()
                    );
                  default:
                    if (!p.isPlainObject(g) || v.isEmptyObject(g)) {
                      if (v.isString(g) && _.Redirects[g]) {
                        var E = (j = p.extend({}, b)).duration,
                          I = j.delay || 0;
                        return (
                          !0 === j.backwards &&
                            (f = p.extend(!0, [], f).reverse()),
                          p.each(f, function (t, e) {
                            parseFloat(j.stagger)
                              ? (j.delay = I + parseFloat(j.stagger) * t)
                              : v.isFunction(j.stagger) &&
                                (j.delay = I + j.stagger.call(e, t, T)),
                              j.drag &&
                                ((j.duration =
                                  parseFloat(E) ||
                                  (/^(callout|transition)/.test(g) ? 1e3 : m)),
                                (j.duration = Math.max(
                                  j.duration *
                                    (j.backwards ? 1 - t / T : (t + 1) / T),
                                  0.75 * j.duration,
                                  200
                                ))),
                              _.Redirects[g].call(
                                e,
                                e,
                                j || {},
                                t,
                                T,
                                f,
                                P.promise ? P : n
                              );
                          }),
                          t()
                        );
                      }
                      var L =
                        "Velocity: First argument (" +
                        g +
                        ") was not a property map, a known action, or a registered redirect. Aborting.";
                      return (
                        P.promise ? P.rejecter(Error(L)) : console.log(L), t()
                      );
                    }
                    A = "start";
                }
                var z = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null,
                  },
                  H = [];
                p.each(f, function (t, e) {
                  v.isNode(e) && a.call(e);
                });
                var D,
                  j = p.extend({}, _.defaults, b);
                if (((j.loop = parseInt(j.loop)), (D = 2 * j.loop - 1), j.loop))
                  for (var q = 0; D > q; q++) {
                    var W = { delay: j.delay, progress: j.progress };
                    q === D - 1 &&
                      ((W.display = j.display),
                      (W.visibility = j.visibility),
                      (W.complete = j.complete)),
                      C(f, "reverse", W);
                  }
                return t();
              }
            };
            (_ = p.extend(C, _)).animate = C;
            var T = e.requestAnimationFrame || f;
            return (
              _.State.isMobile ||
                i.hidden === n ||
                i.addEventListener("visibilitychange", function () {
                  i.hidden
                    ? ((T = function (t) {
                        return setTimeout(function () {
                          t(!0);
                        }, 16);
                      }),
                      c())
                    : (T = e.requestAnimationFrame || f);
                }),
              (t.Velocity = _),
              t !== e &&
                ((t.fn.velocity = C), (t.fn.velocity.defaults = _.defaults)),
              p.each(["Down", "Up"], function (t, e) {
                _.Redirects["slide" + e] = function (t, i, o, s, a, r) {
                  var l = p.extend({}, i),
                    c = l.begin,
                    d = l.complete,
                    u = {
                      height: "",
                      marginTop: "",
                      marginBottom: "",
                      paddingTop: "",
                      paddingBottom: "",
                    },
                    h = {};
                  l.display === n &&
                    (l.display =
                      "Down" === e
                        ? "inline" === _.CSS.Values.getDisplayType(t)
                          ? "inline-block"
                          : "block"
                        : "none"),
                    (l.begin = function () {
                      for (var i in (c && c.call(a, a), u)) {
                        h[i] = t.style[i];
                        var n = _.CSS.getPropertyValue(t, i);
                        u[i] = "Down" === e ? [n, 0] : [0, n];
                      }
                      (h.overflow = t.style.overflow),
                        (t.style.overflow = "hidden");
                    }),
                    (l.complete = function () {
                      for (var e in h) t.style[e] = h[e];
                      d && d.call(a, a), r && r.resolver(a);
                    }),
                    _(t, u, l);
                };
              }),
              p.each(["In", "Out"], function (t, e) {
                _.Redirects["fade" + e] = function (t, i, o, s, a, r) {
                  var l = p.extend({}, i),
                    c = l.complete;
                  (l.complete =
                    o !== s - 1
                      ? (l.begin = null)
                      : function () {
                          c && c.call(a, a), r && r.resolver(a);
                        }),
                    l.display === n &&
                      (l.display = "In" === e ? "auto" : "none"),
                    _(this, { opacity: "In" === e ? 1 : 0 }, l);
                };
              }),
              _
            );
          }
          jQuery.fn.velocity = jQuery.fn.animate;
        })(window.jQuery || window.Zepto || window, window, document);
      })),
  (function (t, e, i, n) {
    "use strict";
    function o(t, e, i) {
      return setTimeout(d(t, i), e);
    }
    function s(t, e, i) {
      return !!Array.isArray(t) && (a(t, i[e], i), !0);
    }
    function a(t, e, i) {
      var o;
      if (t) {
        if (t.forEach) t.forEach(e, i);
        else if (t.length !== n)
          for (o = 0; o < t.length; ) e.call(i, t[o], o, t), o++;
        else for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t);
      }
    }
    function r(t, e, i) {
      for (var o = Object.keys(e), s = 0; s < o.length; )
        (!i || (i && t[o[s]] === n)) && (t[o[s]] = e[o[s]]), s++;
      return t;
    }
    function l(t, e) {
      return r(t, e, !0);
    }
    function c(t, e, i) {
      var n,
        o = e.prototype;
      ((n = t.prototype = Object.create(o)).constructor = t),
        (n._super = o),
        i && r(n, i);
    }
    function d(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function u(t, e) {
      return typeof t == te ? t.apply((e && e[0]) || n, e) : t;
    }
    function p(t, e) {
      return t === n ? e : t;
    }
    function h(t, e, i) {
      a(m(e), function (e) {
        t.addEventListener(e, i, !1);
      });
    }
    function f(t, e, i) {
      a(m(e), function (e) {
        t.removeEventListener(e, i, !1);
      });
    }
    function v(t, e) {
      for (; t; ) {
        if (t == e) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function g(t, e) {
      return t.indexOf(e) > -1;
    }
    function m(t) {
      return t.trim().split(/\s+/g);
    }
    function b(t, e, i) {
      if (t.indexOf && !i) return t.indexOf(e);
      for (var n = 0; n < t.length; ) {
        if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
        n++;
      }
      return -1;
    }
    function _(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function w(t, e, i) {
      for (var n = [], o = [], s = 0; s < t.length; ) {
        var a = e ? t[s][e] : t[s];
        0 > b(o, a) && n.push(t[s]), (o[s] = a), s++;
      }
      return (
        i &&
          (n = e
            ? n.sort(function (t, i) {
                return t[e] > i[e];
              })
            : n.sort()),
        n
      );
    }
    function k(t, e) {
      for (
        var i, o, s = e[0].toUpperCase() + e.slice(1), a = 0;
        a < K.length;

      ) {
        if ((o = (i = K[a]) ? i + s : e) in t) return o;
        a++;
      }
      return n;
    }
    function C(t) {
      var e = t.ownerDocument;
      return e.defaultView || e.parentWindow;
    }
    function T(t, e) {
      var i = this;
      (this.manager = t),
        (this.callback = e),
        (this.element = t.element),
        (this.target = t.options.inputTarget),
        (this.domHandler = function (e) {
          u(t.options.enable, [t]) && i.handler(e);
        }),
        this.init();
    }
    function x(t, e, i) {
      var o,
        s,
        a,
        r,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        m,
        b,
        _,
        w,
        k,
        C,
        T,
        x,
        I = i.pointers.length,
        L = i.changedPointers.length,
        z = e & tp && 0 == I - L;
      (i.isFirst = !!z),
        (i.isFinal = !!(e & (tf | tv) && 0 == I - L)),
        z && (t.session = {}),
        (i.eventType = e),
        (o = t),
        (s = i),
        (a = o.session),
        (l = (r = s.pointers).length),
        a.firstInput || (a.firstInput = S(s)),
        l > 1 && !a.firstMultiple
          ? (a.firstMultiple = S(s))
          : 1 === l && (a.firstMultiple = !1),
        (c = a.firstInput),
        (u = (d = a.firstMultiple) ? d.center : c.center),
        (p = s.center = A(r)),
        (s.timeStamp = to()),
        (s.deltaTime = s.timeStamp - c.timeStamp),
        (s.angle = E(u, p)),
        (s.distance = O(u, p)),
        (h = a),
        (g = (f = s).center),
        (m = h.offsetDelta || {}),
        (b = h.prevDelta || {}),
        (_ = h.prevInput || {}),
        (f.eventType === tp || _.eventType === tf) &&
          ((b = h.prevDelta = { x: _.deltaX || 0, y: _.deltaY || 0 }),
          (m = h.offsetDelta = { x: g.x, y: g.y })),
        (f.deltaX = b.x + (g.x - m.x)),
        (f.deltaY = b.y + (g.y - m.y)),
        (s.offsetDirection = P(s.deltaX, s.deltaY)),
        (s.scale = d
          ? ((w = d.pointers), O((k = r)[0], k[1], tT) / O(w[0], w[1], tT))
          : 1),
        (s.rotation = d
          ? ((C = d.pointers), E((T = r)[1], T[0], tT) - E(C[1], C[0], tT))
          : 0),
        (function t(e, i) {
          var o,
            s,
            a,
            r,
            l = e.lastInterval || i,
            c = i.timeStamp - l.timeStamp;
          if (i.eventType != tv && (c > tu || l.velocity === n)) {
            var d,
              u,
              p,
              h = l.deltaX - i.deltaX,
              f = l.deltaY - i.deltaY,
              v = ((d = c), (u = h), (p = f), { x: u / d || 0, y: p / d || 0 });
            (s = v.x),
              (a = v.y),
              (o = tn(v.x) > tn(v.y) ? v.x : v.y),
              (r = P(h, f)),
              (e.lastInterval = i);
          } else
            (o = l.velocity),
              (s = l.velocityX),
              (a = l.velocityY),
              (r = l.direction);
          (i.velocity = o),
            (i.velocityX = s),
            (i.velocityY = a),
            (i.direction = r);
        })(a, s),
        (x = o.element),
        v(s.srcEvent.target, x) && (x = s.srcEvent.target),
        (s.target = x),
        t.emit("hammer.input", i),
        t.recognize(i),
        (t.session.prevInput = i);
    }
    function S(t) {
      for (var e = [], i = 0; i < t.pointers.length; )
        (e[i] = {
          clientX: ti(t.pointers[i].clientX),
          clientY: ti(t.pointers[i].clientY),
        }),
          i++;
      return {
        timeStamp: to(),
        pointers: e,
        center: A(e),
        deltaX: t.deltaX,
        deltaY: t.deltaY,
      };
    }
    function A(t) {
      var e = t.length;
      if (1 === e) return { x: ti(t[0].clientX), y: ti(t[0].clientY) };
      for (var i = 0, n = 0, o = 0; e > o; )
        (i += t[o].clientX), (n += t[o].clientY), o++;
      return { x: ti(i / e), y: ti(n / e) };
    }
    function P(t, e) {
      return t === e
        ? tg
        : tn(t) >= tn(e)
        ? t > 0
          ? t$
          : tm
        : e > 0
        ? ty
        : tb;
    }
    function O(t, e, i) {
      i || (i = tC);
      var n = e[i[0]] - t[i[0]],
        o = e[i[1]] - t[i[1]];
      return Math.sqrt(n * n + o * o);
    }
    function E(t, e, i) {
      i || (i = tC);
      var n = e[i[0]] - t[i[0]];
      return (180 * Math.atan2(e[i[1]] - t[i[1]], n)) / Math.PI;
    }
    function I() {
      (this.evEl = tS),
        (this.evWin = t0),
        (this.allow = !0),
        (this.pressed = !1),
        T.apply(this, arguments);
    }
    function L() {
      (this.evEl = tO),
        (this.evWin = tE),
        T.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function z() {
      (this.evTarget = t3),
        (this.evWin = tI),
        (this.started = !1),
        T.apply(this, arguments);
    }
    function H(t, e) {
      var i = _(t.touches),
        n = _(t.changedTouches);
      return e & (tf | tv) && (i = w(i.concat(n), "identifier", !0)), [i, n];
    }
    function D() {
      (this.evTarget = tz), (this.targetIds = {}), T.apply(this, arguments);
    }
    function j(t, e) {
      var i = _(t.touches),
        n = this.targetIds;
      if (e & (tp | th) && 1 === i.length)
        return (n[i[0].identifier] = !0), [i, i];
      var o,
        s,
        a = _(t.changedTouches),
        r = [],
        l = this.target;
      if (
        ((s = i.filter(function (t) {
          return v(t.target, l);
        })),
        e === tp)
      )
        for (o = 0; o < s.length; ) (n[s[o].identifier] = !0), o++;
      for (o = 0; o < a.length; )
        n[a[o].identifier] && r.push(a[o]),
          e & (tf | tv) && delete n[a[o].identifier],
          o++;
      return r.length ? [w(s.concat(r), "identifier", !0), r] : void 0;
    }
    function q() {
      T.apply(this, arguments);
      var t = d(this.handler, this);
      (this.touch = new D(this.manager, t)),
        (this.mouse = new I(this.manager, t));
    }
    function W(t, e) {
      (this.manager = t), this.set(e);
    }
    function N(t) {
      (this.id = ts++),
        (this.manager = null),
        (this.options = l(t || {}, this.defaults)),
        (this.options.enable = p(this.options.enable, !0)),
        (this.state = tV),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function V(t) {
      return t == tb
        ? "down"
        : t == ty
        ? "up"
        : t == t$
        ? "left"
        : t == tm
        ? "right"
        : "";
    }
    function R(t, e) {
      var i = e.manager;
      return i ? i.get(t) : t;
    }
    function B() {
      N.apply(this, arguments);
    }
    function M() {
      B.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function Q() {
      B.apply(this, arguments);
    }
    function X() {
      N.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function F() {
      B.apply(this, arguments);
    }
    function Y() {
      B.apply(this, arguments);
    }
    function U() {
      N.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function G(t, e) {
      return (
        ((e = e || {}).recognizers = p(e.recognizers, G.defaults.preset)),
        new Z(t, e)
      );
    }
    function Z(t, e) {
      var i;
      (e = e || {}),
        (this.options = l(e, G.defaults)),
        (this.options.inputTarget = this.options.inputTarget || t),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.element = t),
        (this.input =
          ((i = this),
          new (i.options.inputClass || (tr ? L : tl ? D : ta ? q : I))(i, x))),
        (this.touchAction = new W(this, this.options.touchAction)),
        J(this, !0),
        a(
          e.recognizers,
          function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
          },
          this
        );
    }
    function J(t, e) {
      var i = t.element;
      a(t.options.cssProps, function (t, n) {
        i.style[k(i.style, n)] = e ? t : "";
      });
    }
    var K = ["", "webkit", "moz", "MS", "ms", "o"],
      tt = e.createElement("div"),
      te = "function",
      ti = Math.round,
      tn = Math.abs,
      to = Date.now,
      ts = 1,
      ta = "ontouchstart" in t,
      tr = k(t, "PointerEvent") !== n,
      tl =
        ta && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
      tc = "touch",
      td = "mouse",
      tu = 25,
      tp = 1,
      th = 2,
      tf = 4,
      tv = 8,
      tg = 1,
      t$ = 2,
      tm = 4,
      ty = 8,
      tb = 16,
      t_ = t$ | tm,
      tw = ty | tb,
      tk = t_ | tw,
      tC = ["x", "y"],
      tT = ["clientX", "clientY"];
    T.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && h(this.element, this.evEl, this.domHandler),
          this.evTarget && h(this.target, this.evTarget, this.domHandler),
          this.evWin && h(C(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && f(this.element, this.evEl, this.domHandler),
          this.evTarget && f(this.target, this.evTarget, this.domHandler),
          this.evWin && f(C(this.element), this.evWin, this.domHandler);
      },
    };
    var tx = { mousedown: tp, mousemove: th, mouseup: tf },
      tS = "mousedown",
      t0 = "mousemove mouseup";
    c(I, T, {
      handler: function (t) {
        var e = tx[t.type];
        e & tp && 0 === t.button && (this.pressed = !0),
          e & th && 1 !== t.which && (e = tf),
          this.pressed &&
            this.allow &&
            (e & tf && (this.pressed = !1),
            this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: td,
              srcEvent: t,
            }));
      },
    });
    var tA = {
        pointerdown: tp,
        pointermove: th,
        pointerup: tf,
        pointercancel: tv,
        pointerout: tv,
      },
      tP = { 2: tc, 3: "pen", 4: td, 5: "kinect" },
      tO = "pointerdown",
      tE = "pointermove pointerup pointercancel";
    t.MSPointerEvent &&
      ((tO = "MSPointerDown"),
      (tE = "MSPointerMove MSPointerUp MSPointerCancel")),
      c(L, T, {
        handler: function (t) {
          var e = this.store,
            i = !1,
            n = tA[t.type.toLowerCase().replace("ms", "")],
            o = tP[t.pointerType] || t.pointerType,
            s = b(e, t.pointerId, "pointerId");
          n & tp && (0 === t.button || o == tc)
            ? 0 > s && (e.push(t), (s = e.length - 1))
            : n & (tf | tv) && (i = !0),
            0 > s ||
              ((e[s] = t),
              this.callback(this.manager, n, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t,
              }),
              i && e.splice(s, 1));
        },
      });
    var t9 = { touchstart: tp, touchmove: th, touchend: tf, touchcancel: tv },
      t3 = "touchstart",
      tI = "touchstart touchmove touchend touchcancel";
    c(z, T, {
      handler: function (t) {
        var e = t9[t.type];
        if ((e === tp && (this.started = !0), this.started)) {
          var i = H.call(this, t, e);
          e & (tf | tv) &&
            0 == i[0].length - i[1].length &&
            (this.started = !1),
            this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: tc,
              srcEvent: t,
            });
        }
      },
    });
    var tL = { touchstart: tp, touchmove: th, touchend: tf, touchcancel: tv },
      tz = "touchstart touchmove touchend touchcancel";
    c(D, T, {
      handler: function (t) {
        var e = tL[t.type],
          i = j.call(this, t, e);
        i &&
          this.callback(this.manager, e, {
            pointers: i[0],
            changedPointers: i[1],
            pointerType: tc,
            srcEvent: t,
          });
      },
    }),
      c(q, T, {
        handler: function (t, e, i) {
          var n = i.pointerType == tc,
            o = i.pointerType == td;
          if (n) this.mouse.allow = !1;
          else if (o && !this.mouse.allow) return;
          e & (tf | tv) && (this.mouse.allow = !0), this.callback(t, e, i);
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
    var tH = k(tt.style, "touchAction"),
      tD = tH !== n,
      t1 = "compute",
      tj = "auto",
      tq = "manipulation",
      t8 = "none",
      tW = "pan-x",
      tN = "pan-y";
    W.prototype = {
      set: function (t) {
        t == t1 && (t = this.compute()),
          tD && (this.manager.element.style[tH] = t),
          (this.actions = t.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var t = [];
        return (
          a(this.manager.recognizers, function (e) {
            u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }),
          (function (t) {
            if (g(t, t8)) return t8;
            var e = g(t, tW),
              i = g(t, tN);
            return e && i
              ? tW + " " + tN
              : e || i
              ? e
                ? tW
                : tN
              : g(t, tq)
              ? tq
              : tj;
          })(t.join(" "))
        );
      },
      preventDefaults: function (t) {
        if (!tD) {
          var e = t.srcEvent,
            i = t.offsetDirection;
          if (this.manager.session.prevented) return void e.preventDefault();
          var n = this.actions,
            o = g(n, t8),
            s = g(n, tN),
            a = g(n, tW);
          return o || (s && i & t_) || (a && i & tw)
            ? this.preventSrc(e)
            : void 0;
        }
      },
      preventSrc: function (t) {
        (this.manager.session.prevented = !0), t.preventDefault();
      },
    };
    var tV = 1;
    (N.prototype = {
      defaults: {},
      set: function (t) {
        return (
          r(this.options, t),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (t) {
        if (s(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return (
          e[(t = R(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this
        );
      },
      dropRecognizeWith: function (t) {
        return (
          s(t, "dropRecognizeWith", this) ||
            ((t = R(t, this)), delete this.simultaneous[t.id]),
          this
        );
      },
      requireFailure: function (t) {
        if (s(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return (
          -1 === b(e, (t = R(t, this))) && (e.push(t), t.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (t) {
        if (s(t, "dropRequireFailure", this)) return this;
        t = R(t, this);
        var e = b(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (t) {
        return !!this.simultaneous[t.id];
      },
      emit: function (t) {
        function e(e) {
          var o;
          i.manager.emit(
            i.options.event +
              (e
                ? 16 & (o = n)
                  ? "cancel"
                  : 8 & o
                  ? "end"
                  : 4 & o
                  ? "move"
                  : 2 & o
                  ? "start"
                  : ""
                : ""),
            t
          );
        }
        var i = this,
          n = this.state;
        8 > n && e(!0), e(), n >= 8 && e(!0);
      },
      tryEmit: function (t) {
        return this.canEmit() ? this.emit(t) : void (this.state = 32);
      },
      canEmit: function () {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (32 | tV))) return !1;
          t++;
        }
        return !0;
      },
      recognize: function (t) {
        var e = r({}, t);
        return u(this.options.enable, [this, e])
          ? (56 & this.state && (this.state = tV),
            (this.state = this.process(e)),
            void (30 & this.state && this.tryEmit(e)))
          : (this.reset(), void (this.state = 32));
      },
      process: function () {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      c(B, N, {
        defaults: { pointers: 1 },
        attrTest: function (t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e;
        },
        process: function (t) {
          var e = this.state,
            i = t.eventType,
            n = 6 & e,
            o = this.attrTest(t);
          return n && (i & tv || !o)
            ? 16 | e
            : n || o
            ? i & tf
              ? 8 | e
              : 2 & e
              ? 4 | e
              : 2
            : 32;
        },
      }),
      c(M, B, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: tk },
        getTouchAction: function () {
          var t = this.options.direction,
            e = [];
          return t & t_ && e.push(tN), t & tw && e.push(tW), e;
        },
        directionTest: function (t) {
          var e = this.options,
            i = !0,
            n = t.distance,
            o = t.direction,
            s = t.deltaX,
            a = t.deltaY;
          return (
            o & e.direction ||
              (e.direction & t_
                ? ((o = 0 === s ? tg : 0 > s ? t$ : tm),
                  (i = s != this.pX),
                  (n = Math.abs(t.deltaX)))
                : ((o = 0 === a ? tg : 0 > a ? ty : tb),
                  (i = a != this.pY),
                  (n = Math.abs(t.deltaY)))),
            (t.direction = o),
            i && n > e.threshold && o & e.direction
          );
        },
        attrTest: function (t) {
          return (
            B.prototype.attrTest.call(this, t) &&
            (2 & this.state || (!(2 & this.state) && this.directionTest(t)))
          );
        },
        emit: function (t) {
          (this.pX = t.deltaX), (this.pY = t.deltaY);
          var e = V(t.direction);
          e && this.manager.emit(this.options.event + e, t),
            this._super.emit.call(this, t);
        },
      }),
      c(Q, B, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [t8];
        },
        attrTest: function (t) {
          return (
            this._super.attrTest.call(this, t) &&
            (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
          );
        },
        emit: function (t) {
          if ((this._super.emit.call(this, t), 1 !== t.scale)) {
            var e = t.scale < 1 ? "in" : "out";
            this.manager.emit(this.options.event + e, t);
          }
        },
      }),
      c(X, N, {
        defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
        getTouchAction: function () {
          return [tj];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            s = t.deltaTime > e.time;
          if (
            ((this._input = t), n && i && (!(t.eventType & (tf | tv)) || s))
          ) {
            if (t.eventType & tp)
              this.reset(),
                (this._timer = o(
                  function () {
                    (this.state = 8), this.tryEmit();
                  },
                  e.time,
                  this
                ));
            else if (t.eventType & tf) return 8;
          } else this.reset();
          return 32;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (t) {
          8 === this.state &&
            (t && t.eventType & tf
              ? this.manager.emit(this.options.event + "up", t)
              : ((this._input.timeStamp = to()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      c(F, B, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function () {
          return [t8];
        },
        attrTest: function (t) {
          return (
            this._super.attrTest.call(this, t) &&
            (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          );
        },
      }),
      c(Y, B, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.65,
          direction: t_ | tw,
          pointers: 1,
        },
        getTouchAction: function () {
          return M.prototype.getTouchAction.call(this);
        },
        attrTest: function (t) {
          var e,
            i = this.options.direction;
          return (
            i & (t_ | tw)
              ? (e = t.velocity)
              : i & t_
              ? (e = t.velocityX)
              : i & tw && (e = t.velocityY),
            this._super.attrTest.call(this, t) &&
              i & t.direction &&
              t.distance > this.options.threshold &&
              tn(e) > this.options.velocity &&
              t.eventType & tf
          );
        },
        emit: function (t) {
          var e = V(t.direction);
          e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t);
        },
      }),
      c(U, N, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 2,
          posThreshold: 10,
        },
        getTouchAction: function () {
          return [tq];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            s = t.deltaTime < e.time;
          if ((this.reset(), t.eventType & tp && 0 === this.count))
            return this.failTimeout();
          if (n && s && i) {
            if (t.eventType != tf) return this.failTimeout();
            var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
              r = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
            if (
              ((this.pTime = t.timeStamp),
              (this.pCenter = t.center),
              r && a ? (this.count += 1) : (this.count = 1),
              (this._input = t),
              0 == this.count % e.taps)
            )
              return this.hasRequireFailures()
                ? ((this._timer = o(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    e.interval,
                    this
                  )),
                  2)
                : 8;
          }
          return 32;
        },
        failTimeout: function () {
          return (
            (this._timer = o(
              function () {
                this.state = 32;
              },
              this.options.interval,
              this
            )),
            32
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          8 == this.state &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (G.VERSION = "2.0.4"),
      (G.defaults = {
        domEvents: !1,
        touchAction: t1,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [F, { enable: !1 }],
          [Q, { enable: !1 }, ["rotate"]],
          [Y, { direction: t_ }],
          [M, { direction: t_ }, ["swipe"]],
          [U],
          [U, { event: "doubletap", taps: 2 }, ["tap"]],
          [X],
        ],
        cssProps: {
          userSelect: "default",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      }),
      (Z.prototype = {
        set: function (t) {
          return (
            r(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget &&
              (this.input.destroy(),
              (this.input.target = t.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function (t) {
          this.session.stopped = t ? 2 : 1;
        },
        recognize: function (t) {
          var e = this.session;
          if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var i,
              n = this.recognizers,
              o = e.curRecognizer;
            (!o || (o && 8 & o.state)) && (o = e.curRecognizer = null);
            for (var s = 0; s < n.length; )
              (i = n[s]),
                2 === e.stopped || (o && i != o && !i.canRecognizeWith(o))
                  ? i.reset()
                  : i.recognize(t),
                !o && 14 & i.state && (o = e.curRecognizer = i),
                s++;
          }
        },
        get: function (t) {
          if (t instanceof N) return t;
          for (var e = this.recognizers, i = 0; i < e.length; i++)
            if (e[i].options.event == t) return e[i];
          return null;
        },
        add: function (t) {
          if (s(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return (
            e && this.remove(e),
            this.recognizers.push(t),
            (t.manager = this),
            this.touchAction.update(),
            t
          );
        },
        remove: function (t) {
          if (s(t, "remove", this)) return this;
          var e = this.recognizers;
          return (
            (t = this.get(t)),
            e.splice(b(e, t), 1),
            this.touchAction.update(),
            this
          );
        },
        on: function (t, e) {
          var i = this.handlers;
          return (
            a(m(t), function (t) {
              (i[t] = i[t] || []), i[t].push(e);
            }),
            this
          );
        },
        off: function (t, e) {
          var i = this.handlers;
          return (
            a(m(t), function (t) {
              e ? i[t].splice(b(i[t], e), 1) : delete i[t];
            }),
            this
          );
        },
        emit: function (t, i) {
          this.options.domEvents &&
            ((n = t),
            (o = i),
            (s = e.createEvent("Event")).initEvent(n, !0, !0),
            (s.gesture = o),
            o.target.dispatchEvent(s));
          var n,
            o,
            s,
            a = this.handlers[t] && this.handlers[t].slice();
          if (a && a.length) {
            (i.type = t),
              (i.preventDefault = function () {
                i.srcEvent.preventDefault();
              });
            for (var r = 0; r < a.length; ) a[r](i), r++;
          }
        },
        destroy: function () {
          this.element && J(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        },
      }),
      r(G, {
        INPUT_START: tp,
        INPUT_MOVE: th,
        INPUT_END: tf,
        INPUT_CANCEL: tv,
        STATE_POSSIBLE: tV,
        STATE_BEGAN: 2,
        STATE_CHANGED: 4,
        STATE_ENDED: 8,
        STATE_RECOGNIZED: 8,
        STATE_CANCELLED: 16,
        STATE_FAILED: 32,
        DIRECTION_NONE: tg,
        DIRECTION_LEFT: t$,
        DIRECTION_RIGHT: tm,
        DIRECTION_UP: ty,
        DIRECTION_DOWN: tb,
        DIRECTION_HORIZONTAL: t_,
        DIRECTION_VERTICAL: tw,
        DIRECTION_ALL: tk,
        Manager: Z,
        Input: T,
        TouchAction: W,
        TouchInput: D,
        MouseInput: I,
        PointerEventInput: L,
        TouchMouseInput: q,
        SingleTouchInput: z,
        Recognizer: N,
        AttrRecognizer: B,
        Tap: U,
        Pan: M,
        Swipe: Y,
        Pinch: Q,
        Rotate: F,
        Press: X,
        on: h,
        off: f,
        each: a,
        merge: l,
        extend: r,
        inherit: c,
        bindFn: d,
        prefixed: k,
      }),
      typeof define == te && define.amd
        ? define(function () {
            return G;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = G)
        : (t.Hammer = G);
  })(window, document),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "hammerjs"], t)
      : "object" == typeof exports
      ? t(require("jquery"), require("hammerjs"))
      : t(jQuery, Hammer);
  })(function (t, e) {
    var i;
    (t.fn.hammer = function (i) {
      return this.each(function () {
        var n, o, s;
        (n = this),
          (o = i),
          (s = t(n)).data("hammer") || s.data("hammer", new e(s[0], o));
      });
    }),
      (e.Manager.prototype.emit =
        ((i = e.Manager.prototype.emit),
        function (e, n) {
          i.call(this, e, n), t(this.element).trigger({ type: e, gesture: n });
        }));
  }),
  (function (t) {
    t.Package ? (Materialize = {}) : (t.Materialize = {});
  })(window),
  (function (t) {
    for (
      var e = 0,
        i = ["webkit", "moz"],
        n = t.requestAnimationFrame,
        o = t.cancelAnimationFrame,
        s = i.length;
      --s >= 0 && !n;

    )
      (n = t[i[s] + "RequestAnimationFrame"]),
        (o = t[i[s] + "CancelRequestAnimationFrame"]);
    (n && o) ||
      ((n = function (t) {
        var i = +Date.now(),
          n = Math.max(e + 16, i);
        return setTimeout(function () {
          t((e = n));
        }, n - i);
      }),
      (o = clearTimeout)),
      (t.requestAnimationFrame = n),
      (t.cancelAnimationFrame = o);
  })(window),
  (Materialize.objectSelectorString = function (t) {
    return (
      (t.prop("tagName") || "") +
      (t.attr("id") || "") +
      (t.attr("class") || "")
    ).replace(/\s/g, "");
  }),
  (Materialize.guid = (function () {
    function t() {
      return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    }
    return function () {
      return (
        t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
      );
    };
  })()),
  (Materialize.escapeHash = function (t) {
    return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
  }),
  (Materialize.elementOrParentIsFixed = function (t) {
    var e = $(t),
      i = !1;
    return (
      e.add(e.parents()).each(function () {
        if ("fixed" === $(this).css("position")) return (i = !0), !1;
      }),
      i
    );
  });
var jQuery,
  Vel,
  getTime =
    Date.now ||
    function () {
      return new Date().getTime();
    };
(Materialize.throttle = function (t, e, i) {
  var n,
    o,
    s,
    a = null,
    r = 0;
  i || (i = {});
  var l = function () {
    (r = !1 === i.leading ? 0 : getTime()),
      (a = null),
      (s = t.apply(n, o)),
      (n = o = null);
  };
  return function () {
    var c = getTime();
    r || !1 !== i.leading || (r = c);
    var d = e - (c - r);
    return (
      (n = this),
      (o = arguments),
      d <= 0
        ? (clearTimeout(a),
          (a = null),
          (r = c),
          (s = t.apply(n, o)),
          (n = o = null))
        : a || !1 === i.trailing || (a = setTimeout(l, d)),
      s
    );
  };
}),
  (Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity),
  (function (t) {
    (t.fn.collapsible = function (e, i) {
      var n = e;
      return (
        (e = t.extend(
          { accordion: void 0, onOpen: void 0, onClose: void 0 },
          e
        )),
        this.each(function () {
          function o(i, n) {
            var o, a;
            n || i.toggleClass("active"),
              e.accordion || "accordion" === d || void 0 === d
                ? ((o = i),
                  (c = l.find("> li > .collapsible-header")),
                  o.hasClass("active")
                    ? o.parent().addClass("active")
                    : o.parent().removeClass("active"),
                  o.parent().hasClass("active")
                    ? o
                        .siblings(".collapsible-body")
                        .stop(!0, !1)
                        .slideDown({
                          duration: 350,
                          easing: "easeOutQuart",
                          queue: !1,
                          complete: function () {
                            t(this).css("height", "");
                          },
                        })
                    : o
                        .siblings(".collapsible-body")
                        .stop(!0, !1)
                        .slideUp({
                          duration: 350,
                          easing: "easeOutQuart",
                          queue: !1,
                          complete: function () {
                            t(this).css("height", "");
                          },
                        }),
                  c.not(o).removeClass("active").parent().removeClass("active"),
                  c
                    .not(o)
                    .parent()
                    .children(".collapsible-body")
                    .stop(!0, !1)
                    .each(function () {
                      t(this).is(":visible") &&
                        t(this).slideUp({
                          duration: 350,
                          easing: "easeOutQuart",
                          queue: !1,
                          complete: function () {
                            t(this).css("height", ""),
                              s(t(this).siblings(".collapsible-header"));
                          },
                        });
                    }))
                : ((a = i).hasClass("active")
                    ? a.parent().addClass("active")
                    : a.parent().removeClass("active"),
                  a.parent().hasClass("active")
                    ? a
                        .siblings(".collapsible-body")
                        .stop(!0, !1)
                        .slideDown({
                          duration: 350,
                          easing: "easeOutQuart",
                          queue: !1,
                          complete: function () {
                            t(this).css("height", "");
                          },
                        })
                    : a
                        .siblings(".collapsible-body")
                        .stop(!0, !1)
                        .slideUp({
                          duration: 350,
                          easing: "easeOutQuart",
                          queue: !1,
                          complete: function () {
                            t(this).css("height", "");
                          },
                        })),
              s(i);
          }
          function s(t) {
            t.hasClass("active")
              ? "function" == typeof e.onOpen && e.onOpen.call(this, t.parent())
              : "function" == typeof e.onClose &&
                e.onClose.call(this, t.parent());
          }
          function a(t) {
            return t.closest("li > .collapsible-header");
          }
          function r() {
            l.off("click.collapse", "> li > .collapsible-header");
          }
          var l = t(this),
            c = t(this).find("> li > .collapsible-header"),
            d = l.data("collapsible");
          if ("destroy" !== n) {
            if (i >= 0 && i < c.length) {
              var u = c.eq(i);
              u.length &&
                ("open" === n || ("close" === n && u.hasClass("active"))) &&
                o(u);
            } else
              r(),
                l.on(
                  "click.collapse",
                  "> li > .collapsible-header",
                  function (e) {
                    var i,
                      n = t(e.target);
                    a((i = n)).length > 0 && (n = a(n)), o(n);
                  }
                ),
                e.accordion || "accordion" === d || void 0 === d
                  ? o(c.filter(".active").first(), !0)
                  : c.filter(".active").each(function () {
                      o(t(this), !0);
                    });
          } else r();
        })
      );
    }),
      t(document).ready(function () {
        t(".collapsible").collapsible();
      });
  })(jQuery),
  (function (t) {
    (t.fn.scrollTo = function (e) {
      return (
        t(this).scrollTop(
          t(this).scrollTop() - t(this).offset().top + t(e).offset().top
        ),
        this
      );
    }),
      (t.fn.dropdown = function (e) {
        var i = {
          inDuration: 300,
          outDuration: 225,
          constrainWidth: !0,
          hover: !1,
          gutter: 0,
          belowOrigin: !1,
          alignment: "left",
          stopPropagation: !1,
        };
        return "open" === e
          ? (this.each(function () {
              t(this).trigger("open");
            }),
            !1)
          : "close" === e
          ? (this.each(function () {
              t(this).trigger("close");
            }),
            !1)
          : void this.each(function () {
              function n() {
                void 0 !== a.data("induration") &&
                  (r.inDuration = a.data("induration")),
                  void 0 !== a.data("outduration") &&
                    (r.outDuration = a.data("outduration")),
                  void 0 !== a.data("constrainwidth") &&
                    (r.constrainWidth = a.data("constrainwidth")),
                  void 0 !== a.data("hover") && (r.hover = a.data("hover")),
                  void 0 !== a.data("gutter") && (r.gutter = a.data("gutter")),
                  void 0 !== a.data("beloworigin") &&
                    (r.belowOrigin = a.data("beloworigin")),
                  void 0 !== a.data("alignment") &&
                    (r.alignment = a.data("alignment")),
                  void 0 !== a.data("stoppropagation") &&
                    (r.stopPropagation = a.data("stoppropagation"));
              }
              function o(e) {
                "focus" === e && (l = !0),
                  n(),
                  c.addClass("active"),
                  a.addClass("active"),
                  !0 === r.constrainWidth
                    ? c.css("width", a.outerWidth())
                    : c.css("white-space", "nowrap");
                var i = window.innerHeight,
                  o = a.innerHeight(),
                  d = a.offset().left,
                  u = a.offset().top - t(window).scrollTop(),
                  p = r.alignment,
                  h = 0,
                  f = 0,
                  v = 0;
                !0 === r.belowOrigin && (v = o);
                var g = 0,
                  m = 0,
                  b = a.parent();
                if (
                  (b.is("body") ||
                    (b[0].scrollHeight > b[0].clientHeight &&
                      (g = b[0].scrollTop),
                    b[0].scrollWidth > b[0].clientWidth &&
                      (m = b[0].scrollLeft)),
                  d + c.innerWidth() > t(window).width()
                    ? (p = "right")
                    : d - c.innerWidth() + a.innerWidth() < 0 && (p = "left"),
                  u + c.innerHeight() > i)
                ) {
                  if (u + o - c.innerHeight() < 0) {
                    var _ = i - u - v;
                    c.css("max-height", _);
                  } else v || (v += o), (v -= c.innerHeight());
                }
                "left" === p
                  ? ((h = r.gutter), (f = a.position().left + h))
                  : "right" === p &&
                    (f =
                      a.position().left +
                      a.outerWidth() -
                      c.outerWidth() +
                      (h = -r.gutter)),
                  c.css({
                    position: "absolute",
                    top: a.position().top + v + g,
                    left: f + m,
                  }),
                  c
                    .stop(!0, !0)
                    .css("opacity", 0)
                    .slideDown({
                      queue: !1,
                      duration: r.inDuration,
                      easing: "easeOutCubic",
                      complete: function () {
                        t(this).css("height", "");
                      },
                    })
                    .animate(
                      { opacity: 1 },
                      {
                        queue: !1,
                        duration: r.inDuration,
                        easing: "easeOutSine",
                      }
                    ),
                  setTimeout(function () {
                    t(document).bind("click." + c.attr("id"), function (e) {
                      s(), t(document).unbind("click." + c.attr("id"));
                    });
                  }, 0);
              }
              function s() {
                (l = !1),
                  c.fadeOut(r.outDuration),
                  c.removeClass("active"),
                  a.removeClass("active"),
                  t(document).unbind("click." + c.attr("id")),
                  setTimeout(function () {
                    c.css("max-height", "");
                  }, r.outDuration);
              }
              var a = t(this),
                r = t.extend({}, i, e),
                l = !1,
                c = t("#" + a.attr("data-activates"));
              if ((n(), a.after(c), r.hover)) {
                var d = !1;
                a.unbind("click." + a.attr("id")),
                  a.on("mouseenter", function (t) {
                    !1 === d && (o(), (d = !0));
                  }),
                  a.on("mouseleave", function (e) {
                    t(e.toElement || e.relatedTarget)
                      .closest(".dropdown-content")
                      .is(c) || (c.stop(!0, !0), s(), (d = !1));
                  }),
                  c.on("mouseleave", function (e) {
                    t(e.toElement || e.relatedTarget)
                      .closest(".dropdown-button")
                      .is(a) || (c.stop(!0, !0), s(), (d = !1));
                  });
              } else
                a.unbind("click." + a.attr("id")),
                  a.bind("click." + a.attr("id"), function (e) {
                    l ||
                      (a[0] != e.currentTarget ||
                      a.hasClass("active") ||
                      0 !== t(e.target).closest(".dropdown-content").length
                        ? a.hasClass("active") &&
                          (s(), t(document).unbind("click." + c.attr("id")))
                        : (e.preventDefault(),
                          r.stopPropagation && e.stopPropagation(),
                          o("click")));
                  });
              a.on("open", function (t, e) {
                o(e);
              }),
                a.on("close", s);
            });
      }),
      t(document).ready(function () {
        t(".dropdown-button").dropdown();
      });
  })(jQuery),
  (function (t) {
    var e = 0,
      i = 0,
      n = {
        init: function (n) {
          return (
            (n = t.extend(
              {
                opacity: 0.5,
                inDuration: 350,
                outDuration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%",
              },
              n
            )),
            this.each(function () {
              var o = t(this),
                s = t(this).attr("id") || "#" + t(this).data("target"),
                a = function () {
                  var i = o.data("overlay-id"),
                    s = t("#" + i);
                  o.removeClass("open"),
                    t("body").css({ overflow: "", width: "" }),
                    o.find(".modal-close").off("click.close"),
                    t(document).off("keyup.modal" + i),
                    s.velocity(
                      { opacity: 0 },
                      {
                        duration: n.outDuration,
                        queue: !1,
                        ease: "easeOutQuart",
                      }
                    );
                  var a = {
                    duration: n.outDuration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function () {
                      t(this).css({ display: "none" }),
                        "function" == typeof n.complete &&
                          n.complete.call(this, o),
                        s.remove(),
                        e--;
                    },
                  };
                  o.hasClass("bottom-sheet")
                    ? o.velocity({ bottom: "-100%", opacity: 0 }, a)
                    : o.velocity(
                        { top: n.startingTop, opacity: 0, scaleX: 0.7 },
                        a
                      );
                },
                r = function (s) {
                  var r = t("body"),
                    l = r.innerWidth();
                  if (
                    (r.css("overflow", "hidden"),
                    r.width(l),
                    !o.hasClass("open"))
                  ) {
                    var c = "materialize-modal-overlay-" + ++i,
                      d = t('<div class="modal-overlay"></div>');
                    (lStack = ++e),
                      d.attr("id", c).css("z-index", 1e3 + 2 * lStack),
                      o
                        .data("overlay-id", c)
                        .css("z-index", 1e3 + 2 * lStack + 1),
                      o.addClass("open"),
                      t("body").append(d),
                      n.dismissible &&
                        (d.click(function () {
                          a();
                        }),
                        t(document).on("keyup.modal" + c, function (t) {
                          27 === t.keyCode && a();
                        })),
                      o.find(".modal-close").on("click.close", function (t) {
                        a();
                      }),
                      d.css({ display: "block", opacity: 0 }),
                      o.css({ display: "block", opacity: 0 }),
                      d.velocity(
                        { opacity: n.opacity },
                        {
                          duration: n.inDuration,
                          queue: !1,
                          ease: "easeOutCubic",
                        }
                      ),
                      o.data("associated-overlay", d[0]);
                    var u = {
                      duration: n.inDuration,
                      queue: !1,
                      ease: "easeOutCubic",
                      complete: function () {
                        "function" == typeof n.ready &&
                          n.ready.call(this, o, s);
                      },
                    };
                    o.hasClass("bottom-sheet")
                      ? o.velocity({ bottom: "0", opacity: 1 }, u)
                      : (t.Velocity.hook(o, "scaleX", 0.7),
                        o.css({ top: n.startingTop }),
                        o.velocity(
                          { top: n.endingTop, opacity: 1, scaleX: "1" },
                          u
                        ));
                  }
                };
              t(document).off(
                "click.modalTrigger",
                'a[href="#' + s + '"], [data-target="' + s + '"]'
              ),
                t(this).off("openModal"),
                t(this).off("closeModal"),
                t(document).on(
                  "click.modalTrigger",
                  'a[href="#' + s + '"], [data-target="' + s + '"]',
                  function (e) {
                    (n.startingTop =
                      (t(this).offset().top - t(window).scrollTop()) / 1.15),
                      r(t(this)),
                      e.preventDefault();
                  }
                ),
                t(this).on("openModal", function () {
                  t(this).attr("href") || t(this).data("target"), r();
                }),
                t(this).on("closeModal", function () {
                  a();
                });
            })
          );
        },
        open: function () {
          t(this).trigger("openModal");
        },
        close: function () {
          t(this).trigger("closeModal");
        },
      };
    t.fn.modal = function (e) {
      return n[e]
        ? n[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void t.error("Method " + e + " does not exist on jQuery.modal")
        : n.init.apply(this, arguments);
    };
  })(jQuery),
  (function (t) {
    (t.fn.materialbox = function () {
      return this.each(function () {
        function e() {
          s = !1;
          var e = r.parent(".material-placeholder"),
            n = (window.innerWidth, window.innerHeight, r.data("width")),
            l = r.data("height");
          r.velocity("stop", !0),
            t("#materialbox-overlay").velocity("stop", !0),
            t(".materialbox-caption").velocity("stop", !0),
            t("#materialbox-overlay").velocity(
              { opacity: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function () {
                  (o = !1), t(this).remove();
                },
              }
            ),
            r.velocity(
              { width: n, height: l, left: 0, top: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function () {
                  e.css({
                    height: "",
                    width: "",
                    position: "",
                    top: "",
                    left: "",
                  }),
                    r.removeAttr("style"),
                    r.attr("style", c),
                    r.removeClass("active"),
                    (s = !0),
                    i && i.css("overflow", "");
                },
              }
            ),
            t(".materialbox-caption").velocity(
              { opacity: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function () {
                  t(this).remove();
                },
              }
            );
        }
        if (!t(this).hasClass("initialized")) {
          t(this).addClass("initialized");
          var i,
            n,
            o = !1,
            s = !0,
            a = 200,
            r = t(this),
            l = t("<div></div>").addClass("material-placeholder"),
            c = r.attr("style");
          r.wrap(l),
            r.on("click", function () {
              var a = r.parent(".material-placeholder"),
                l = window.innerWidth,
                c = window.innerHeight,
                d = r.width(),
                u = r.height();
              if (!1 === s || (o && !0 === s)) return e(), !1;
              for (
                s = !1,
                  r.addClass("active"),
                  o = !0,
                  a.css({
                    width: a[0].getBoundingClientRect().width,
                    height: a[0].getBoundingClientRect().height,
                    position: "relative",
                    top: 0,
                    left: 0,
                  }),
                  i = void 0,
                  n = a[0].parentNode;
                null !== n && !t(n).is(document);

              ) {
                var p = t(n);
                "visible" !== p.css("overflow") &&
                  (p.css("overflow", "visible"),
                  (i = void 0 === i ? p : i.add(p))),
                  (n = n.parentNode);
              }
              r.css({
                position: "absolute",
                "z-index": 1e3,
                "will-change": "left, top, width, height",
              })
                .data("width", d)
                .data("height", u);
              var h = t('<div id="materialbox-overlay"></div>')
                .css({ opacity: 0 })
                .click(function () {
                  !0 === s && e();
                });
              r.before(h);
              var f = h[0].getBoundingClientRect();
              if (
                (h.css({
                  width: l,
                  height: c,
                  left: -1 * f.left,
                  top: -1 * f.top,
                }),
                h.velocity(
                  { opacity: 1 },
                  { duration: 275, queue: !1, easing: "easeOutQuad" }
                ),
                "" !== r.data("caption"))
              ) {
                var v = t('<div class="materialbox-caption"></div>');
                v.text(r.data("caption")),
                  t("body").append(v),
                  v.css({ display: "inline" }),
                  v.velocity(
                    { opacity: 1 },
                    { duration: 275, queue: !1, easing: "easeOutQuad" }
                  );
              }
              var g = 0,
                m = 0;
              d / l > u / c
                ? ((g = 0.9 * l), (m = 0.9 * l * (u / d)))
                : ((g = 0.9 * c * (d / u)), (m = 0.9 * c)),
                r.hasClass("responsive-img")
                  ? r.velocity(
                      { "max-width": g, width: d },
                      {
                        duration: 0,
                        queue: !1,
                        complete: function () {
                          r.css({ left: 0, top: 0 }).velocity(
                            {
                              height: m,
                              width: g,
                              left:
                                t(document).scrollLeft() +
                                l / 2 -
                                r.parent(".material-placeholder").offset()
                                  .left -
                                g / 2,
                              top:
                                t(document).scrollTop() +
                                c / 2 -
                                r.parent(".material-placeholder").offset().top -
                                m / 2,
                            },
                            {
                              duration: 275,
                              queue: !1,
                              easing: "easeOutQuad",
                              complete: function () {
                                s = !0;
                              },
                            }
                          );
                        },
                      }
                    )
                  : r
                      .css("left", 0)
                      .css("top", 0)
                      .velocity(
                        {
                          height: m,
                          width: g,
                          left:
                            t(document).scrollLeft() +
                            l / 2 -
                            r.parent(".material-placeholder").offset().left -
                            g / 2,
                          top:
                            t(document).scrollTop() +
                            c / 2 -
                            r.parent(".material-placeholder").offset().top -
                            m / 2,
                        },
                        {
                          duration: 275,
                          queue: !1,
                          easing: "easeOutQuad",
                          complete: function () {
                            s = !0;
                          },
                        }
                      );
            }),
            t(window).scroll(function () {
              o && e();
            }),
            t(document).keyup(function (t) {
              27 === t.keyCode && !0 === s && o && e();
            });
        }
      });
    }),
      t(document).ready(function () {
        t(".materialboxed").materialbox();
      });
  })(jQuery),
  (function (t) {
    t.fn.parallax = function () {
      var e = t(window).width();
      return this.each(function (i) {
        function n(i) {
          n =
            e < 601
              ? o.height() > 0
                ? o.height()
                : o.children("img").height()
              : o.height() > 0
              ? o.height()
              : 500;
          var n,
            s = o.children("img").first(),
            a = s.height() - n,
            r = o.offset().top + n,
            l = o.offset().top,
            c = t(window).scrollTop(),
            d = window.innerHeight,
            u = (c + d - l) / (n + d);
          i && s.css("display", "block"),
            r > c &&
              l < c + d &&
              s.css(
                "transform",
                "translate3D(-50%," + Math.round(a * u) + "px, 0)"
              );
        }
        var o = t(this);
        o.addClass("parallax"),
          o
            .children("img")
            .one("load", function () {
              n(!0);
            })
            .each(function () {
              this.complete && t(this).trigger("load");
            }),
          t(window).scroll(function () {
            (e = t(window).width()), n(!1);
          }),
          t(window).resize(function () {
            (e = t(window).width()), n(!1);
          });
      });
    };
  })(jQuery),
  (function (t) {
    var e = {
      init: function (e) {
        e = t.extend(
          { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 },
          e
        );
        var i = Materialize.objectSelectorString(t(this));
        return this.each(function (n) {
          var o,
            s,
            a,
            r,
            l = i + n,
            c = t(this),
            d = t(window).width(),
            u = c.find("li.tab a"),
            p = c.width(),
            h = t(),
            f = Math.max(p, c[0].scrollWidth) / u.length,
            v = (prev_index = 0),
            g = !1,
            m = function (t) {
              return Math.ceil(
                p - t.position().left - t.outerWidth() - c.scrollLeft()
              );
            },
            b = function (t) {
              return Math.floor(t.position().left + c.scrollLeft());
            },
            _ = function (t) {
              v - t >= 0
                ? (r.velocity(
                    { right: m(o) },
                    { duration: 300, queue: !1, easing: "easeOutQuad" }
                  ),
                  r.velocity(
                    { left: b(o) },
                    {
                      duration: 300,
                      queue: !1,
                      easing: "easeOutQuad",
                      delay: 90,
                    }
                  ))
                : (r.velocity(
                    { left: b(o) },
                    { duration: 300, queue: !1, easing: "easeOutQuad" }
                  ),
                  r.velocity(
                    { right: m(o) },
                    {
                      duration: 300,
                      queue: !1,
                      easing: "easeOutQuad",
                      delay: 90,
                    }
                  ));
            };
          e.swipeable && d > e.responsiveThreshold && (e.swipeable = !1),
            0 === (o = t(u.filter('[href="' + location.hash + '"]'))).length &&
              (o = t(this).find("li.tab a.active").first()),
            0 === o.length && (o = t(this).find("li.tab a").first()),
            o.addClass("active"),
            (v = u.index(o)) < 0 && (v = 0),
            void 0 !== o[0] && (s = t(o[0].hash)).addClass("active"),
            c.find(".indicator").length ||
              c.append('<div class="indicator"></div>'),
            (r = c.find(".indicator")),
            c.append(r),
            c.is(":visible") &&
              setTimeout(function () {
                r.css({ right: m(o) }), r.css({ left: b(o) });
              }, 0),
            t(window)
              .off("resize.tabs-" + l)
              .on("resize.tabs-" + l, function () {
                (f = Math.max((p = c.width()), c[0].scrollWidth) / u.length),
                  v < 0 && (v = 0),
                  0 !== f &&
                    0 !== p &&
                    (r.css({ right: m(o) }), r.css({ left: b(o) }));
              }),
            e.swipeable
              ? (u.each(function () {
                  var e = t(Materialize.escapeHash(this.hash));
                  e.addClass("carousel-item"), (h = h.add(e));
                }),
                (a = h.wrapAll('<div class="tabs-content carousel"></div>')),
                h.css("display", ""),
                t(".tabs-content.carousel").carousel({
                  fullWidth: !0,
                  noWrap: !0,
                  onCycleTo: function (t) {
                    if (!g) {
                      var e = v;
                      (v = a.index(t)), (o = u.eq(v)), _(e);
                    }
                  },
                }))
              : u.not(o).each(function () {
                  t(Materialize.escapeHash(this.hash)).hide();
                }),
            c.off("click.tabs").on("click.tabs", "a", function (i) {
              if (t(this).parent().hasClass("disabled")) i.preventDefault();
              else if (!t(this).attr("target")) {
                (g = !0),
                  (f = Math.max((p = c.width()), c[0].scrollWidth) / u.length),
                  o.removeClass("active");
                var n = s;
                (o = t(this)),
                  (s = t(Materialize.escapeHash(this.hash))),
                  (u = c.find("li.tab a")),
                  o.position(),
                  o.addClass("active"),
                  (prev_index = v),
                  (v = u.index(t(this))) < 0 && (v = 0),
                  e.swipeable
                    ? h.length && h.carousel("set", v)
                    : (void 0 !== s &&
                        (s.show(),
                        s.addClass("active"),
                        "function" == typeof e.onShow &&
                          e.onShow.call(this, s)),
                      void 0 === n ||
                        n.is(s) ||
                        (n.hide(), n.removeClass("active"))),
                  setTimeout(function () {
                    g = !1;
                  }, 300),
                  _(prev_index),
                  i.preventDefault();
              }
            });
        });
      },
      select_tab: function (t) {
        this.find('a[href="#' + t + '"]').trigger("click");
      },
    };
    (t.fn.tabs = function (i) {
      return e[i]
        ? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.tabs")
        : e.init.apply(this, arguments);
    }),
      t(document).ready(function () {
        t("ul.tabs").tabs();
      });
  })(jQuery),
  (function (t) {
    t.fn.tooltip = function (i) {
      return "remove" === i
        ? (this.each(function () {
            t("#" + t(this).attr("data-tooltip-id")).remove(),
              t(this).off("mouseenter.tooltip mouseleave.tooltip");
          }),
          !1)
        : ((i = t.extend(
            { delay: 350, tooltip: "", position: "bottom", html: !1 },
            i
          )),
          this.each(function () {
            var n = Materialize.guid(),
              o = t(this);
            o.attr("data-tooltip-id") &&
              t("#" + o.attr("data-tooltip-id")).remove(),
              o.attr("data-tooltip-id", n);
            var s,
              a,
              r,
              l,
              c,
              d,
              u,
              p = function () {
                (s = o.attr("data-html")
                  ? "true" === o.attr("data-html")
                  : i.html),
                  (a =
                    void 0 === (a = o.attr("data-delay")) || "" === a
                      ? i.delay
                      : a),
                  (r =
                    void 0 === (r = o.attr("data-position")) || "" === r
                      ? i.position
                      : r),
                  (l =
                    void 0 === (l = o.attr("data-tooltip")) || "" === l
                      ? i.tooltip
                      : l);
              };
            p(),
              (c =
                ((u = t('<div class="material-tooltip"></div>')),
                (l = s
                  ? t("<span></span>").html(l)
                  : t("<span></span>").text(l)),
                u.append(l).appendTo(t("body")).attr("id", n),
                (d = t('<div class="backdrop"></div>')).appendTo(u),
                u)),
              o.off("mouseenter.tooltip mouseleave.tooltip");
            var h,
              f = !1;
            o.on({
              "mouseenter.tooltip": function (t) {
                h = setTimeout(function () {
                  p(),
                    (f = !0),
                    c.velocity("stop"),
                    d.velocity("stop"),
                    c.css({ visibility: "visible", left: "0px", top: "0px" });
                  var t,
                    i,
                    n,
                    s,
                    a,
                    l,
                    u = o.outerWidth(),
                    h = o.outerHeight(),
                    v = c.outerHeight(),
                    g = c.outerWidth(),
                    m = "0px",
                    b = "0px",
                    _ = d[0].offsetWidth,
                    w = d[0].offsetHeight;
                  "top" === r
                    ? ((t = o.offset().top - v - 5),
                      (n = e((i = o.offset().left + u / 2 - g / 2), t, g, v)),
                      (m = "-10px"),
                      d.css({
                        bottom: 0,
                        left: 0,
                        borderRadius: "14px 14px 0 0",
                        transformOrigin: "50% 100%",
                        marginTop: v,
                        marginLeft: g / 2 - _ / 2,
                      }))
                    : "left" === r
                    ? ((t = o.offset().top + h / 2 - v / 2),
                      (n = e((i = o.offset().left - g - 5), t, g, v)),
                      (b = "-10px"),
                      d.css({
                        top: "-7px",
                        right: 0,
                        width: "14px",
                        height: "14px",
                        borderRadius: "14px 0 0 14px",
                        transformOrigin: "95% 50%",
                        marginTop: v / 2,
                        marginLeft: g,
                      }))
                    : "right" === r
                    ? ((t = o.offset().top + h / 2 - v / 2),
                      (n = e((i = o.offset().left + u + 5), t, g, v)),
                      (b = "+10px"),
                      d.css({
                        top: "-7px",
                        left: 0,
                        width: "14px",
                        height: "14px",
                        borderRadius: "0 14px 14px 0",
                        transformOrigin: "5% 50%",
                        marginTop: v / 2,
                        marginLeft: "0px",
                      }))
                    : ((t = o.offset().top + o.outerHeight() + 5),
                      (n = e((i = o.offset().left + u / 2 - g / 2), t, g, v)),
                      (m = "+10px"),
                      d.css({ top: 0, left: 0, marginLeft: g / 2 - _ / 2 })),
                    c.css({ top: n.y, left: n.x }),
                    (s = (Math.SQRT2 * g) / parseInt(_)),
                    (a = (Math.SQRT2 * v) / parseInt(w)),
                    (l = Math.max(s, a)),
                    c
                      .velocity(
                        { translateY: m, translateX: b },
                        { duration: 350, queue: !1 }
                      )
                      .velocity(
                        { opacity: 1 },
                        { duration: 300, delay: 50, queue: !1 }
                      ),
                    d
                      .css({ visibility: "visible" })
                      .velocity(
                        { opacity: 1 },
                        { duration: 55, delay: 0, queue: !1 }
                      )
                      .velocity(
                        { scaleX: l, scaleY: l },
                        {
                          duration: 300,
                          delay: 0,
                          queue: !1,
                          easing: "easeInOutQuad",
                        }
                      );
                }, a);
              },
              "mouseleave.tooltip": function () {
                (f = !1),
                  clearTimeout(h),
                  setTimeout(function () {
                    !0 !== f &&
                      (c.velocity(
                        { opacity: 0, translateY: 0, translateX: 0 },
                        { duration: 225, queue: !1 }
                      ),
                      d.velocity(
                        { opacity: 0, scaleX: 1, scaleY: 1 },
                        {
                          duration: 225,
                          queue: !1,
                          complete: function () {
                            d.css({ visibility: "hidden" }),
                              c.css({ visibility: "hidden" }),
                              (f = !1);
                          },
                        }
                      ));
                  }, 225);
              },
            });
          }));
    };
    var e = function (e, i, n, o) {
      var s = e,
        a = i;
      return (
        s < 0
          ? (s = 4)
          : s + n > window.innerWidth && (s -= s + n - window.innerWidth),
        a < 0
          ? (a = 4)
          : a + o > window.innerHeight + t(window).scrollTop &&
            (a -= a + o - window.innerHeight),
        { x: s, y: a }
      );
    };
    t(document).ready(function () {
      t(".tooltipped").tooltip();
    });
  })(jQuery),
  (function (t) {
    "use strict";
    function e(t) {
      var e = "";
      for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
      return e;
    }
    function i(e) {
      var i = (function (t) {
        if (!1 === a.allowEvent(t)) return null;
        for (
          var e = null, i = t.target || t.srcElement;
          null !== i.parentElement;

        ) {
          if (
            !(
              i instanceof SVGElement ||
              -1 === i.className.indexOf("waves-effect")
            ) ||
            i.classList.contains("waves-effect")
          ) {
            e = i;
            break;
          }
          i = i.parentElement;
        }
        return e;
      })(e);
      null !== i &&
        (s.show(e, i),
        "ontouchstart" in t &&
          (i.addEventListener("touchend", s.hide, !1),
          i.addEventListener("touchcancel", s.hide, !1)),
        i.addEventListener("mouseup", s.hide, !1),
        i.addEventListener("mouseleave", s.hide, !1));
    }
    var n = n || {},
      o = document.querySelectorAll.bind(document),
      s = {
        duration: 750,
        show: function (t, i) {
          if (2 === t.button) return !1;
          var n,
            o,
            a,
            r,
            l,
            c,
            d,
            u = i || this,
            p = document.createElement("div");
          (p.className = "waves-ripple"), u.appendChild(p);
          var h =
              ((n = u),
              (r = { top: 0, left: 0 }),
              (o = (l = n && n.ownerDocument).documentElement),
              void 0 !== n.getBoundingClientRect &&
                (r = n.getBoundingClientRect()),
              (a =
                null !== (d = c = l) && d === d.window
                  ? c
                  : 9 === c.nodeType && c.defaultView),
              {
                top: r.top + a.pageYOffset - o.clientTop,
                left: r.left + a.pageXOffset - o.clientLeft,
              }),
            f = t.pageY - h.top,
            v = t.pageX - h.left,
            g = "scale(" + (u.clientWidth / 100) * 10 + ")";
          "touches" in t &&
            ((f = t.touches[0].pageY - h.top),
            (v = t.touches[0].pageX - h.left)),
            p.setAttribute("data-hold", Date.now()),
            p.setAttribute("data-scale", g),
            p.setAttribute("data-x", v),
            p.setAttribute("data-y", f);
          var m = { top: f + "px", left: v + "px" };
          (p.className = p.className + " waves-notransition"),
            p.setAttribute("style", e(m)),
            (p.className = p.className.replace("waves-notransition", "")),
            (m["-webkit-transform"] = g),
            (m["-moz-transform"] = g),
            (m["-ms-transform"] = g),
            (m["-o-transform"] = g),
            (m.transform = g),
            (m.opacity = "1"),
            (m["-webkit-transition-duration"] = s.duration + "ms"),
            (m["-moz-transition-duration"] = s.duration + "ms"),
            (m["-o-transition-duration"] = s.duration + "ms"),
            (m["transition-duration"] = s.duration + "ms"),
            (m["-webkit-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (m["-moz-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (m["-o-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (m["transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            p.setAttribute("style", e(m));
        },
        hide: function (t) {
          a.touchup(t);
          var i = this,
            n = (i.clientWidth, null),
            o = i.getElementsByClassName("waves-ripple");
          if (!(o.length > 0)) return !1;
          var r = (n = o[o.length - 1]).getAttribute("data-x"),
            l = n.getAttribute("data-y"),
            c = n.getAttribute("data-scale"),
            d = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
          d < 0 && (d = 0),
            setTimeout(function () {
              var t = {
                top: l + "px",
                left: r + "px",
                opacity: "0",
                "-webkit-transition-duration": s.duration + "ms",
                "-moz-transition-duration": s.duration + "ms",
                "-o-transition-duration": s.duration + "ms",
                "transition-duration": s.duration + "ms",
                "-webkit-transform": c,
                "-moz-transform": c,
                "-ms-transform": c,
                "-o-transform": c,
                transform: c,
              };
              n.setAttribute("style", e(t)),
                setTimeout(function () {
                  try {
                    i.removeChild(n);
                  } catch (t) {
                    return !1;
                  }
                }, s.duration);
            }, d);
        },
        wrapInput: function (t) {
          for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if ("input" === i.tagName.toLowerCase()) {
              var n = i.parentNode;
              if (
                "i" === n.tagName.toLowerCase() &&
                -1 !== n.className.indexOf("waves-effect")
              )
                continue;
              var o = document.createElement("i");
              o.className = i.className + " waves-input-wrapper";
              var s = i.getAttribute("style");
              s || (s = ""),
                o.setAttribute("style", s),
                (i.className = "waves-button-input"),
                i.removeAttribute("style"),
                n.replaceChild(o, i),
                o.appendChild(i);
            }
          }
        },
      },
      a = {
        touches: 0,
        allowEvent: function (t) {
          var e = !0;
          return (
            "touchstart" === t.type
              ? (a.touches += 1)
              : "touchend" === t.type || "touchcancel" === t.type
              ? setTimeout(function () {
                  a.touches > 0 && (a.touches -= 1);
                }, 500)
              : "mousedown" === t.type && a.touches > 0 && (e = !1),
            e
          );
        },
        touchup: function (t) {
          a.allowEvent(t);
        },
      };
    (n.displayEffect = function (e) {
      "duration" in (e = e || {}) && (s.duration = e.duration),
        s.wrapInput(o(".waves-effect")),
        "ontouchstart" in t &&
          document.body.addEventListener("touchstart", i, !1),
        document.body.addEventListener("mousedown", i, !1);
    }),
      (n.attach = function (e) {
        "input" === e.tagName.toLowerCase() &&
          (s.wrapInput([e]), (e = e.parentElement)),
          "ontouchstart" in t && e.addEventListener("touchstart", i, !1),
          e.addEventListener("mousedown", i, !1);
      }),
      (t.Waves = n),
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          n.displayEffect();
        },
        !1
      );
  })(window),
  (Materialize.toast = function (t, e, i, n) {
    i = i || "";
    var o = document.getElementById("toast-container");
    null === o &&
      (((o = document.createElement("div")).id = "toast-container"),
      document.body.appendChild(o));
    var s = (function (t) {
      var e = document.createElement("div");
      if ((e.classList.add("toast"), i))
        for (var o = i.split(" "), s = 0, a = o.length; s < a; s++)
          e.classList.add(o[s]);
      (
        "object" == typeof HTMLElement
          ? t instanceof HTMLElement
          : t &&
            "object" == typeof t &&
            null !== t &&
            1 === t.nodeType &&
            "string" == typeof t.nodeName
      )
        ? e.appendChild(t)
        : t instanceof jQuery
        ? e.appendChild(t[0])
        : (e.innerHTML = t);
      var r = new Hammer(e, { prevent_default: !1 });
      return (
        r.on("pan", function (t) {
          var i = t.deltaX;
          e.classList.contains("panning") || e.classList.add("panning");
          var n = 1 - Math.abs(i / 80);
          n < 0 && (n = 0),
            Vel(
              e,
              { left: i, opacity: n },
              { duration: 50, queue: !1, easing: "easeOutQuad" }
            );
        }),
        r.on("panend", function (t) {
          Math.abs(t.deltaX) > 80
            ? Vel(
                e,
                { marginTop: "-40px" },
                {
                  duration: 375,
                  easing: "easeOutExpo",
                  queue: !1,
                  complete: function () {
                    "function" == typeof n && n(), e.parentNode.removeChild(e);
                  },
                }
              )
            : (e.classList.remove("panning"),
              Vel(
                e,
                { left: 0, opacity: 1 },
                { duration: 300, easing: "easeOutExpo", queue: !1 }
              ));
        }),
        e
      );
    })(t);
    t && o.appendChild(s),
      (s.style.opacity = 0),
      Vel(
        s,
        { translateY: "-35px", opacity: 1 },
        { duration: 300, easing: "easeOutCubic", queue: !1 }
      );
    var a,
      r = e;
    null != r &&
      (a = setInterval(function () {
        null === s.parentNode && window.clearInterval(a),
          s.classList.contains("panning") || (r -= 20),
          r <= 0 &&
            (Vel(
              s,
              { opacity: 0, marginTop: "-40px" },
              {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function () {
                  "function" == typeof n && n(),
                    this[0].parentNode.removeChild(this[0]);
                },
              }
            ),
            window.clearInterval(a));
      }, 20));
  }),
  (function (t) {
    var e = {
      init: function (e) {
        (e = t.extend(
          { menuWidth: 300, edge: "left", closeOnClick: !1, draggable: !0 },
          e
        )),
          t(this).each(function () {
            var i = t(this),
              n = i.attr("data-activates"),
              o = t("#" + n);
            300 != e.menuWidth && o.css("width", e.menuWidth);
            var s = t('.drag-target[data-sidenav="' + n + '"]');
            e.draggable
              ? (s.length && s.remove(),
                (s = t('<div class="drag-target"></div>').attr(
                  "data-sidenav",
                  n
                )),
                t("body").append(s))
              : (s = t()),
              "left" == e.edge
                ? (o.css("transform", "translateX(-100%)"), s.css({ left: 0 }))
                : (o
                    .addClass("right-aligned")
                    .css("transform", "translateX(100%)"),
                  s.css({ right: 0 })),
              o.hasClass("fixed") &&
                window.innerWidth > 992 &&
                o.css("transform", "translateX(0)"),
              o.hasClass("fixed") &&
                t(window).resize(function () {
                  window.innerWidth > 992
                    ? 0 !== t("#sidenav-overlay").length && r
                      ? a(!0)
                      : o.css("transform", "translateX(0%)")
                    : !1 === r &&
                      ("left" === e.edge
                        ? o.css("transform", "translateX(-100%)")
                        : o.css("transform", "translateX(100%)"));
                }),
              !0 === e.closeOnClick &&
                o.on(
                  "click.itemclick",
                  "a:not(.collapsible-header)",
                  function () {
                    a();
                  }
                );
            var a = function (i) {
                (r = !1),
                  t("body").css({ overflow: "", width: "" }),
                  t("#sidenav-overlay").velocity(
                    { opacity: 0 },
                    {
                      duration: 200,
                      queue: !1,
                      easing: "easeOutQuad",
                      complete: function () {
                        t(this).remove();
                      },
                    }
                  ),
                  "left" === e.edge
                    ? (s.css({ width: "", right: "", left: "0" }),
                      o.velocity(
                        { translateX: "-100%" },
                        {
                          duration: 200,
                          queue: !1,
                          easing: "easeOutCubic",
                          complete: function () {
                            !0 === i &&
                              (o.removeAttr("style"),
                              o.css("width", e.menuWidth));
                          },
                        }
                      ))
                    : (s.css({ width: "", right: "0", left: "" }),
                      o.velocity(
                        { translateX: "100%" },
                        {
                          duration: 200,
                          queue: !1,
                          easing: "easeOutCubic",
                          complete: function () {
                            !0 === i &&
                              (o.removeAttr("style"),
                              o.css("width", e.menuWidth));
                          },
                        }
                      ));
              },
              r = !1;
            e.draggable &&
              (s.on("click", function () {
                r && a();
              }),
              s
                .hammer({ prevent_default: !1 })
                .bind("pan", function (i) {
                  if ("touch" == i.gesture.pointerType) {
                    i.gesture.direction;
                    var n,
                      s = i.gesture.center.x,
                      l = (i.gesture.center.y, i.gesture.velocityX, t("body")),
                      c = t("#sidenav-overlay"),
                      d = l.innerWidth();
                    if (
                      (l.css("overflow", "hidden"),
                      l.width(d),
                      0 === c.length &&
                        ((c = t('<div id="sidenav-overlay"></div>'))
                          .css("opacity", 0)
                          .click(function () {
                            a();
                          }),
                        t("body").append(c)),
                      "left" === e.edge &&
                        (s > e.menuWidth
                          ? (s = e.menuWidth)
                          : s < 0 && (s = 0)),
                      "left" === e.edge)
                    )
                      s < e.menuWidth / 2
                        ? (r = !1)
                        : s >= e.menuWidth / 2 && (r = !0),
                        o.css(
                          "transform",
                          "translateX(" + (s - e.menuWidth) + "px)"
                        );
                    else {
                      s < window.innerWidth - e.menuWidth / 2
                        ? (r = !0)
                        : s >= window.innerWidth - e.menuWidth / 2 && (r = !1);
                      var u = s - e.menuWidth / 2;
                      u < 0 && (u = 0),
                        o.css("transform", "translateX(" + u + "px)");
                    }
                    "left" === e.edge
                      ? ((n = s / e.menuWidth),
                        c.velocity(
                          { opacity: n },
                          { duration: 10, queue: !1, easing: "easeOutQuad" }
                        ))
                      : ((n = Math.abs((s - window.innerWidth) / e.menuWidth)),
                        c.velocity(
                          { opacity: n },
                          { duration: 10, queue: !1, easing: "easeOutQuad" }
                        ));
                  }
                })
                .bind("panend", function (i) {
                  if ("touch" == i.gesture.pointerType) {
                    var n = t("#sidenav-overlay"),
                      a = i.gesture.velocityX,
                      l = i.gesture.center.x,
                      c = l - e.menuWidth,
                      d = l - e.menuWidth / 2;
                    c > 0 && (c = 0),
                      d < 0 && (d = 0),
                      "left" === e.edge
                        ? (r && a <= 0.3) || a < -0.5
                          ? (0 !== c &&
                              o.velocity(
                                { translateX: [0, c] },
                                {
                                  duration: 300,
                                  queue: !1,
                                  easing: "easeOutQuad",
                                }
                              ),
                            n.velocity(
                              { opacity: 1 },
                              { duration: 50, queue: !1, easing: "easeOutQuad" }
                            ),
                            s.css({ width: "50%", right: 0, left: "" }),
                            (r = !0))
                          : (!r || a > 0.3) &&
                            (t("body").css({ overflow: "", width: "" }),
                            o.velocity(
                              { translateX: [-1 * e.menuWidth - 10, c] },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                              }
                            ),
                            n.velocity(
                              { opacity: 0 },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                  t(this).remove();
                                },
                              }
                            ),
                            s.css({ width: "10px", right: "", left: 0 }))
                        : (r && a >= -0.3) || a > 0.5
                        ? (0 !== d &&
                            o.velocity(
                              { translateX: [0, d] },
                              {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                              }
                            ),
                          n.velocity(
                            { opacity: 1 },
                            { duration: 50, queue: !1, easing: "easeOutQuad" }
                          ),
                          s.css({ width: "50%", right: "", left: 0 }),
                          (r = !0))
                        : (!r || a < -0.3) &&
                          (t("body").css({ overflow: "", width: "" }),
                          o.velocity(
                            { translateX: [e.menuWidth + 10, d] },
                            { duration: 200, queue: !1, easing: "easeOutQuad" }
                          ),
                          n.velocity(
                            { opacity: 0 },
                            {
                              duration: 200,
                              queue: !1,
                              easing: "easeOutQuad",
                              complete: function () {
                                t(this).remove();
                              },
                            }
                          ),
                          s.css({ width: "10px", right: 0, left: "" }));
                  }
                })),
              i.off("click.sidenav").on("click.sidenav", function () {
                if (!0 === r) (r = !1), a();
                else {
                  var i = t("body"),
                    n = t('<div id="sidenav-overlay"></div>'),
                    l = i.innerWidth();
                  i.css("overflow", "hidden"),
                    i.width(l),
                    t("body").append(s),
                    "left" === e.edge
                      ? (s.css({ width: "50%", right: 0, left: "" }),
                        o.velocity(
                          { translateX: [0, -1 * e.menuWidth] },
                          { duration: 300, queue: !1, easing: "easeOutQuad" }
                        ))
                      : (s.css({ width: "50%", right: "", left: 0 }),
                        o.velocity(
                          { translateX: [0, e.menuWidth] },
                          { duration: 300, queue: !1, easing: "easeOutQuad" }
                        )),
                    n.css("opacity", 0).click(function () {
                      (r = !1),
                        a(),
                        n.velocity(
                          { opacity: 0 },
                          {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                              t(this).remove();
                            },
                          }
                        );
                    }),
                    t("body").append(n),
                    n.velocity(
                      { opacity: 1 },
                      {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                          r = !0;
                        },
                      }
                    );
                }
                return !1;
              });
          });
      },
      destroy: function () {
        var e = t("#sidenav-overlay"),
          i = t(
            '.drag-target[data-sidenav="' +
              t(this).attr("data-activates") +
              '"]'
          );
        e.trigger("click"), i.remove(), t(this).off("click"), e.remove();
      },
      show: function () {
        this.trigger("click");
      },
      hide: function () {
        t("#sidenav-overlay").trigger("click");
      },
    };
    t.fn.sideNav = function (i) {
      return e[i]
        ? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.sideNav")
        : e.init.apply(this, arguments);
    };
  })(jQuery),
  (function (t) {
    function e() {
      i.trigger("scrollSpy:winSize");
    }
    var i = t(window),
      n = [],
      o = [],
      s = !1,
      a = 0,
      r = { top: 0, right: 0, bottom: 0, left: 0 };
    (t.scrollSpy = function (e, l) {
      l = t.extend({ throttle: 100, scrollOffset: 200 }, l);
      var c = [];
      (e = t(e)).each(function (e, i) {
        n.push(t(i)),
          t(i).data("scrollSpy:id", e),
          t('a[href="#' + t(i).attr("id") + '"]').click(function (e) {
            e.preventDefault();
            var i = t(Materialize.escapeHash(this.hash)).offset().top + 1;
            t("html, body").animate(
              { scrollTop: i - l.scrollOffset },
              { duration: 400, queue: !1, easing: "easeOutCubic" }
            );
          });
      }),
        (r.top = l.offsetTop || 0),
        (r.right = l.offsetRight || 0),
        (r.bottom = l.offsetBottom || 0),
        (r.left = l.offsetLeft || 0);
      var d = Materialize.throttle(function () {
          var e, s, c, d, u, p, h, f, v, g, m;
          (e = l.scrollOffset),
            ++a,
            (h = i.scrollTop()),
            (v = (f = i.scrollLeft()) + i.width()),
            (g = h + i.height()),
            (m =
              ((s = h + r.top + e || 200),
              (c = v + r.right),
              (d = g + r.bottom),
              (u = f + r.left),
              (p = t()),
              t.each(n, function (t, e) {
                if (e.height() > 0) {
                  var i = e.offset().top,
                    n = e.offset().left,
                    o = n + e.width(),
                    a = i + e.height();
                  n > c || o < u || i > d || a < s || p.push(e);
                }
              }),
              p)),
            t.each(m, function (t, e) {
              "number" != typeof e.data("scrollSpy:ticks") &&
                e.triggerHandler("scrollSpy:enter"),
                e.data("scrollSpy:ticks", a);
            }),
            t.each(o, function (t, e) {
              var i = e.data("scrollSpy:ticks");
              "number" == typeof i &&
                i !== a &&
                (e.triggerHandler("scrollSpy:exit"),
                e.data("scrollSpy:ticks", null));
            }),
            (o = m);
        }, l.throttle || 100),
        u = function () {
          t(document).ready(d);
        };
      return (
        s || (i.on("scroll", u), i.on("resize", u), (s = !0)),
        setTimeout(u, 0),
        e.on("scrollSpy:enter", function () {
          c = t.grep(c, function (t) {
            return 0 != t.height();
          });
          var e = t(this);
          c[0]
            ? (t('a[href="#' + c[0].attr("id") + '"]').removeClass("active"),
              e.data("scrollSpy:id") < c[0].data("scrollSpy:id")
                ? c.unshift(t(this))
                : c.push(t(this)))
            : c.push(t(this)),
            t('a[href="#' + c[0].attr("id") + '"]').addClass("active");
        }),
        e.on("scrollSpy:exit", function () {
          if (
            (c = t.grep(c, function (t) {
              return 0 != t.height();
            }))[0]
          ) {
            t('a[href="#' + c[0].attr("id") + '"]').removeClass("active");
            var e = t(this);
            (c = t.grep(c, function (t) {
              return t.attr("id") != e.attr("id");
            }))[0] &&
              t('a[href="#' + c[0].attr("id") + '"]').addClass("active");
          }
        }),
        e
      );
    }),
      (t.winSizeSpy = function (n) {
        return (
          (t.winSizeSpy = function () {
            return i;
          }),
          (n = n || { throttle: 100 }),
          i.on("resize", Materialize.throttle(e, n.throttle || 100))
        );
      }),
      (t.fn.scrollSpy = function (e) {
        return t.scrollSpy(t(this), e);
      });
  })(jQuery),
  (function (t) {
    t(document).ready(function () {
      Materialize.updateTextFields = function () {
        t(
          "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea"
        ).each(function (e, i) {
          var n = t(this);
          t(i).val().length > 0 ||
          i.autofocus ||
          void 0 !== n.attr("placeholder")
            ? n.siblings("label").addClass("active")
            : t(i)[0].validity
            ? n
                .siblings("label")
                .toggleClass("active", !0 === t(i)[0].validity.badInput)
            : n.siblings("label").removeClass("active");
        });
      };
      var e =
        "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
      t(document).on("change", e, function () {
        (0 === t(this).val().length &&
          void 0 === t(this).attr("placeholder")) ||
          t(this).siblings("label").addClass("active"),
          validate_field(t(this));
      }),
        t(document).ready(function () {
          Materialize.updateTextFields();
        }),
        t(document).on("reset", function (i) {
          var n = t(i.target);
          n.is("form") &&
            (n.find(e).removeClass("valid").removeClass("invalid"),
            n.find(e).each(function () {
              "" === t(this).attr("value") &&
                t(this).siblings("label").removeClass("active");
            }),
            n.find("select.initialized").each(function () {
              var t = n.find("option[selected]").text();
              n.siblings("input.select-dropdown").val(t);
            }));
        }),
        t(document).on("focus", e, function () {
          t(this).siblings("label, .prefix").addClass("active");
        }),
        t(document).on("blur", e, function () {
          var e = t(this),
            i = ".prefix";
          0 === e.val().length &&
            !0 !== e[0].validity.badInput &&
            void 0 === e.attr("placeholder") &&
            (i += ", label"),
            e.siblings(i).removeClass("active"),
            validate_field(e);
        }),
        (window.validate_field = function (t) {
          var e = void 0 !== t.attr("data-length"),
            i = parseInt(t.attr("data-length")),
            n = t.val().length;
          0 === t.val().length && !1 === t[0].validity.badInput
            ? t.hasClass("validate") &&
              (t.removeClass("valid"), t.removeClass("invalid"))
            : t.hasClass("validate") &&
              ((t.is(":valid") && e && n <= i) || (t.is(":valid") && !e)
                ? (t.removeClass("invalid"), t.addClass("valid"))
                : (t.removeClass("valid"), t.addClass("invalid")));
        }),
        t(document).on(
          "keyup.radio",
          "input[type=radio], input[type=checkbox]",
          function (e) {
            if (9 === e.which)
              return (
                t(this).addClass("tabbed"),
                void t(this).one("blur", function (e) {
                  t(this).removeClass("tabbed");
                })
              );
          }
        );
      var i = t(".hiddendiv").first();
      i.length ||
        ((i = t('<div class="hiddendiv common"></div>')), t("body").append(i)),
        t(".materialize-textarea").each(function () {
          var e = t(this);
          e.data("original-height", e.height()),
            e.data("previous-length", e.val().length);
        }),
        t("body").on(
          "keyup keydown autoresize",
          ".materialize-textarea",
          function () {
            var e, n, o, s, a;
            (n = (e = t(this)).css("font-family")),
              (o = e.css("font-size")),
              (s = e.css("line-height")),
              o && i.css("font-size", o),
              n && i.css("font-family", n),
              s && i.css("line-height", s),
              "off" === e.attr("wrap") &&
                i.css("overflow-wrap", "normal").css("white-space", "pre"),
              i.text(e.val() + "\n"),
              (a = i.html().replace(/\n/g, "<br>")),
              i.html(a),
              e.is(":visible")
                ? i.css("width", e.width())
                : i.css("width", t(window).width() / 2),
              e.data("original-height") <= i.height()
                ? e.css("height", i.height())
                : e.val().length < e.data("previous-length") &&
                  e.css("height", e.data("original-height")),
              e.data("previous-length", e.val().length);
          }
        ),
        t(document).on("change", '.file-field input[type="file"]', function () {
          for (
            var e = t(this).closest(".file-field").find("input.file-path"),
              i = t(this)[0].files,
              n = [],
              o = 0;
            o < i.length;
            o++
          )
            n.push(i[o].name);
          e.val(n.join(", ")), e.trigger("change");
        });
      var n = "input[type=range]",
        o = !1;
      t(n).each(function () {
        var e = t('<span class="thumb"><span class="value"></span></span>');
        t(this).after(e);
      });
      var s = function (t) {
          var e = -7 + parseInt(t.parent().css("padding-left")) + "px";
          t.velocity(
            { height: "30px", width: "30px", top: "-30px", marginLeft: e },
            { duration: 300, easing: "easeOutExpo" }
          );
        },
        a = function (t) {
          var e = t.width() - 15,
            i = parseFloat(t.attr("max")),
            n = parseFloat(t.attr("min"));
          return ((parseFloat(t.val()) - n) / (i - n)) * e;
        };
      t(document).on("change", n, function (e) {
        var i = t(this).siblings(".thumb");
        i.find(".value").html(t(this).val()), i.hasClass("active") || s(i);
        var n = a(t(this));
        i.addClass("active").css("left", n);
      }),
        t(document).on("mousedown touchstart", n, function (e) {
          var i = t(this).siblings(".thumb");
          if (
            (i.length <= 0 &&
              ((i = t(
                '<span class="thumb"><span class="value"></span></span>'
              )),
              t(this).after(i)),
            i.find(".value").html(t(this).val()),
            (o = !0),
            t(this).addClass("active"),
            i.hasClass("active") || s(i),
            "input" !== e.type)
          ) {
            var n = a(t(this));
            i.addClass("active").css("left", n);
          }
        }),
        t(document).on("mouseup touchend", ".range-field", function () {
          (o = !1), t(this).removeClass("active");
        }),
        t(document).on(
          "input mousemove touchmove",
          ".range-field",
          function (e) {
            var i = t(this).children(".thumb"),
              r = t(this).find(n);
            if (o) {
              i.hasClass("active") || s(i);
              var l = a(r);
              i.addClass("active").css("left", l),
                i.find(".value").html(i.siblings(n).val());
            }
          }
        ),
        t(document).on("mouseout touchleave", ".range-field", function () {
          if (!o) {
            var e = t(this).children(".thumb"),
              i = 7 + parseInt(t(this).css("padding-left")) + "px";
            e.hasClass("active") &&
              e.velocity(
                { height: "0", width: "0", top: "10px", marginLeft: i },
                { duration: 100 }
              ),
              e.removeClass("active");
          }
        }),
        (t.fn.autocomplete = function (e) {
          return (
            (e = t.extend(
              { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 },
              e
            )),
            this.each(function () {
              var i,
                n = t(this),
                o = e.data,
                s = 0,
                a = -1,
                r = n.closest(".input-field");
              if (!t.isEmptyObject(o)) {
                var l,
                  c = t(
                    '<ul class="autocomplete-content dropdown-content"></ul>'
                  );
                r.length
                  ? (l = r
                      .children(".autocomplete-content.dropdown-content")
                      .first()).length || r.append(c)
                  : (l = n.next(".autocomplete-content.dropdown-content"))
                      .length || n.after(c),
                  l.length && (c = l);
                var d = function (t, e) {
                    var i = e.find("img"),
                      n = e
                        .text()
                        .toLowerCase()
                        .indexOf("" + t.toLowerCase()),
                      o = n + t.length - 1,
                      s = e.text().slice(0, n),
                      a = e.text().slice(n, o + 1),
                      r = e.text().slice(o + 1);
                    e.html(
                      "<span>" +
                        s +
                        "<span class='highlight'>" +
                        a +
                        "</span>" +
                        r +
                        "</span>"
                    ),
                      i.length && e.prepend(i);
                  },
                  u = function () {
                    c.empty(),
                      (a = -1),
                      c.find(".active").removeClass("active"),
                      (i = void 0);
                  };
                n.off("blur.autocomplete").on("blur.autocomplete", function () {
                  u();
                }),
                  n
                    .off("keyup.autocomplete focus.autocomplete")
                    .on("keyup.autocomplete focus.autocomplete", function (a) {
                      s = 0;
                      var r = n.val().toLowerCase();
                      if (13 !== a.which && 38 !== a.which && 40 !== a.which) {
                        if (i !== r && (u(), r.length >= e.minLength)) {
                          for (var l in o)
                            if (
                              o.hasOwnProperty(l) &&
                              -1 !== l.toLowerCase().indexOf(r) &&
                              l.toLowerCase() !== r
                            ) {
                              if (s >= e.limit) break;
                              var p = t("<li></li>");
                              o[l]
                                ? p.append(
                                    '<img src="' +
                                      o[l] +
                                      '" class="right circle"><span>' +
                                      l +
                                      "</span>"
                                  )
                                : p.append("<span>" + l + "</span>"),
                                c.append(p),
                                d(r, p),
                                s++;
                            }
                        }
                        i = r;
                      }
                    }),
                  n
                    .off("keydown.autocomplete")
                    .on("keydown.autocomplete", function (t) {
                      var e,
                        i = t.which,
                        n = c.children("li").length,
                        o = c.children(".active").first();
                      13 === i && a >= 0
                        ? (e = c.children("li").eq(a)).length &&
                          (e.trigger("mousedown.autocomplete"),
                          t.preventDefault())
                        : (38 !== i && 40 !== i) ||
                          (t.preventDefault(),
                          38 === i && a > 0 && a--,
                          40 === i && a < n - 1 && a++,
                          o.removeClass("active"),
                          a >= 0 && c.children("li").eq(a).addClass("active"));
                    }),
                  c.on(
                    "mousedown.autocomplete touchstart.autocomplete",
                    "li",
                    function () {
                      var i = t(this).text().trim();
                      n.val(i),
                        n.trigger("change"),
                        u(),
                        "function" == typeof e.onAutocomplete &&
                          e.onAutocomplete.call(this, i);
                    }
                  );
              }
            })
          );
        });
    }),
      (t.fn.material_select = function (e) {
        function i(t, e, i) {
          var n = t.indexOf(e),
            o = -1 === n;
          return (
            o ? t.push(e) : t.splice(n, 1),
            i
              .siblings("ul.dropdown-content")
              .find("li:not(.optgroup)")
              .eq(e)
              .toggleClass("active"),
            i.find("option").eq(e).prop("selected", o),
            (function (t, e) {
              for (var i = "", n = 0, o = t.length; n < o; n++) {
                var s = e.find("option").eq(t[n]).text();
                i += 0 === n ? s : ", " + s;
              }
              "" === i && (i = e.find("option:disabled").eq(0).text()),
                e.siblings("input.select-dropdown").val(i);
            })(t, i),
            o
          );
        }
        t(this).each(function () {
          var n = t(this);
          if (!n.hasClass("browser-default")) {
            var o = !!n.attr("multiple"),
              s = n.data("select-id");
            if (
              (s &&
                (n.parent().find("span.caret").remove(),
                n.parent().find("input").remove(),
                n.unwrap(),
                t("ul#select-options-" + s).remove()),
              "destroy" !== e)
            ) {
              var a = Materialize.guid();
              n.data("select-id", a);
              var r = t('<div class="select-wrapper"></div>');
              r.addClass(n.attr("class"));
              var l = t(
                  '<ul id="select-options-' +
                    a +
                    '" class="dropdown-content select-dropdown ' +
                    (o ? "multiple-select-dropdown" : "") +
                    '"></ul>'
                ),
                c = n.children("option, optgroup"),
                d = [],
                u = !1,
                p =
                  n.find("option:selected").html() ||
                  n.find("option:first").html() ||
                  "",
                h = function (e, i, n) {
                  var s = i.is(":disabled") ? "disabled " : "",
                    a = "optgroup-option" === n ? "optgroup-option " : "",
                    r = o
                      ? '<input type="checkbox"' + s + "/><label></label>"
                      : "",
                    c = i.data("icon"),
                    d = i.attr("class");
                  if (c) {
                    var u = "";
                    return (
                      d && (u = ' class="' + d + '"'),
                      l.append(
                        t(
                          '<li class="' +
                            s +
                            a +
                            '"><img alt="" src="' +
                            c +
                            '"' +
                            u +
                            "><span>" +
                            r +
                            i.html() +
                            "</span></li>"
                        )
                      ),
                      !0
                    );
                  }
                  l.append(
                    t(
                      '<li class="' +
                        s +
                        a +
                        '"><span>' +
                        r +
                        i.html() +
                        "</span></li>"
                    )
                  );
                };
              c.length &&
                c.each(function () {
                  if (t(this).is("option"))
                    o ? h(0, t(this), "multiple") : h(0, t(this));
                  else if (t(this).is("optgroup")) {
                    var e = t(this).children("option");
                    l.append(
                      t(
                        '<li class="optgroup"><span>' +
                          t(this).attr("label") +
                          "</span></li>"
                      )
                    ),
                      e.each(function () {
                        h(0, t(this), "optgroup-option");
                      });
                  }
                }),
                l.find("li:not(.optgroup)").each(function (s) {
                  t(this).click(function (a) {
                    if (
                      !t(this).hasClass("disabled") &&
                      !t(this).hasClass("optgroup")
                    ) {
                      var r = !0;
                      o
                        ? (t('input[type="checkbox"]', this).prop(
                            "checked",
                            function (t, e) {
                              return !e;
                            }
                          ),
                          (r = i(d, s, n)),
                          g.trigger("focus"))
                        : (l.find("li").removeClass("active"),
                          t(this).toggleClass("active"),
                          g.val(t(this).text())),
                        m(l, t(this)),
                        n.find("option").eq(s).prop("selected", r),
                        n.trigger("change"),
                        void 0 !== e && e();
                    }
                    a.stopPropagation();
                  });
                }),
                n.wrap(r);
              var f = t('<span class="caret">&#9660;</span>');
              n.is(":disabled") && f.addClass("disabled");
              var v = p.replace(/"/g, "&quot;"),
                g = t(
                  '<input type="text" class="select-dropdown" readonly="true" ' +
                    (n.is(":disabled") ? "disabled" : "") +
                    ' data-activates="select-options-' +
                    a +
                    '" value="' +
                    v +
                    '"/>'
                );
              n.before(g),
                g.before(f),
                g.after(l),
                n.is(":disabled") || g.dropdown({ hover: !1 }),
                n.attr("tabindex") &&
                  t(g[0]).attr("tabindex", n.attr("tabindex")),
                n.addClass("initialized"),
                g.on({
                  focus: function () {
                    if (
                      (t("ul.select-dropdown").not(l[0]).is(":visible") &&
                        t("input.select-dropdown").trigger("close"),
                      !l.is(":visible"))
                    ) {
                      t(this).trigger("open", ["focus"]);
                      var e = t(this).val();
                      o && e.indexOf(",") >= 0 && (e = e.split(",")[0]);
                      var i = l.find("li").filter(function () {
                        return t(this).text().toLowerCase() === e.toLowerCase();
                      })[0];
                      m(l, i, !0);
                    }
                  },
                  click: function (t) {
                    t.stopPropagation();
                  },
                }),
                g.on("blur", function () {
                  o || t(this).trigger("close"),
                    l.find("li.selected").removeClass("selected");
                }),
                l.hover(
                  function () {
                    u = !0;
                  },
                  function () {
                    u = !1;
                  }
                ),
                t(window).on({
                  click: function () {
                    o && (u || g.trigger("close"));
                  },
                }),
                o &&
                  n.find("option:selected:not(:disabled)").each(function () {
                    var e = t(this).index();
                    i(d, e, n),
                      l.find("li").eq(e).find(":checkbox").prop("checked", !0);
                  });
              var m = function (e, i, n) {
                  if (i) {
                    e.find("li.selected").removeClass("selected");
                    var s = t(i);
                    s.addClass("selected"), (o && !n) || l.scrollTo(s);
                  }
                },
                b = [];
              g.on("keydown", function (e) {
                if (9 != e.which) {
                  if (40 != e.which || l.is(":visible")) {
                    if (13 != e.which || l.is(":visible")) {
                      e.preventDefault();
                      var i = String.fromCharCode(e.which).toLowerCase();
                      if (i && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                        b.push(i);
                        var n = b.join(""),
                          s = l.find("li").filter(function () {
                            return (
                              0 === t(this).text().toLowerCase().indexOf(n)
                            );
                          })[0];
                        s && m(l, s);
                      }
                      if (13 == e.which) {
                        var a = l.find("li.selected:not(.disabled)")[0];
                        a && (t(a).trigger("click"), o || g.trigger("close"));
                      }
                      40 == e.which &&
                        ((s = l.find("li.selected").length
                          ? l.find("li.selected").next("li:not(.disabled)")[0]
                          : l.find("li:not(.disabled)")[0]),
                        m(l, s)),
                        27 == e.which && g.trigger("close"),
                        38 == e.which &&
                          (s = l
                            .find("li.selected")
                            .prev("li:not(.disabled)")[0]) &&
                          m(l, s),
                        setTimeout(function () {
                          b = [];
                        }, 1e3);
                    }
                  } else g.trigger("open");
                } else g.trigger("close");
              });
            } else n.data("select-id", null).removeClass("initialized");
          }
        });
      });
  })(jQuery),
  (function (t) {
    var e = {
      init: function (e) {
        return (
          (e = t.extend(
            { indicators: !0, height: 400, transition: 500, interval: 6e3 },
            e
          )),
          this.each(function () {
            function i(t, e) {
              t.hasClass("center-align")
                ? t.velocity(
                    { opacity: 0, translateY: -100 },
                    { duration: e, queue: !1 }
                  )
                : t.hasClass("right-align")
                ? t.velocity(
                    { opacity: 0, translateX: 100 },
                    { duration: e, queue: !1 }
                  )
                : t.hasClass("left-align") &&
                  t.velocity(
                    { opacity: 0, translateX: -100 },
                    { duration: e, queue: !1 }
                  );
            }
            function n(t) {
              t >= c.length ? (t = 0) : t < 0 && (t = c.length - 1),
                (d = l.find(".active").index()) != t &&
                  (($caption = (o = c.eq(d)).find(".caption")),
                  o.removeClass("active"),
                  o.velocity(
                    { opacity: 0 },
                    {
                      duration: e.transition,
                      queue: !1,
                      easing: "easeOutQuad",
                      complete: function () {
                        c.not(".active").velocity(
                          { opacity: 0, translateX: 0, translateY: 0 },
                          { duration: 0, queue: !1 }
                        );
                      },
                    }
                  ),
                  i($caption, e.transition),
                  e.indicators && s.eq(d).removeClass("active"),
                  c
                    .eq(t)
                    .velocity(
                      { opacity: 1 },
                      {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                      }
                    ),
                  c
                    .eq(t)
                    .find(".caption")
                    .velocity(
                      { opacity: 1, translateX: 0, translateY: 0 },
                      {
                        duration: e.transition,
                        delay: e.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                      }
                    ),
                  c.eq(t).addClass("active"),
                  e.indicators && s.eq(t).addClass("active"));
            }
            var o,
              s,
              a,
              r = t(this),
              l = r.find("ul.slides").first(),
              c = l.find("> li"),
              d = l.find(".active").index();
            -1 != d && (o = c.eq(d)),
              r.hasClass("fullscreen") ||
                (e.indicators ? r.height(e.height + 40) : r.height(e.height),
                l.height(e.height)),
              c.find(".caption").each(function () {
                i(t(this), 0);
              }),
              c.find("img").each(function () {
                var e =
                  "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                t(this).attr("src") !== e &&
                  (t(this).css(
                    "background-image",
                    "url(" + t(this).attr("src") + ")"
                  ),
                  t(this).attr("src", e));
              }),
              e.indicators &&
                ((s = t('<ul class="indicators"></ul>')),
                c.each(function (i) {
                  var o = t('<li class="indicator-item"></li>');
                  o.click(function () {
                    n(l.parent().find(t(this)).index()),
                      clearInterval(a),
                      (a = setInterval(function () {
                        (d = l.find(".active").index()),
                          c.length == d + 1 ? (d = 0) : (d += 1),
                          n(d);
                      }, e.transition + e.interval));
                  }),
                    s.append(o);
                }),
                r.append(s),
                (s = r.find("ul.indicators").find("li.indicator-item"))),
              o
                ? o.show()
                : (c
                    .first()
                    .addClass("active")
                    .velocity(
                      { opacity: 1 },
                      {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                      }
                    ),
                  (d = 0),
                  (o = c.eq(d)),
                  e.indicators && s.eq(d).addClass("active")),
              o.find("img").each(function () {
                o.find(".caption").velocity(
                  { opacity: 1, translateX: 0, translateY: 0 },
                  { duration: e.transition, queue: !1, easing: "easeOutQuad" }
                );
              }),
              (a = setInterval(function () {
                n((d = l.find(".active").index()) + 1);
              }, e.transition + e.interval));
            var u = !1,
              p = !1;
            r
              .hammer({ prevent_default: !1 })
              .bind("pan", function (t) {
                if ("touch" === t.gesture.pointerType) {
                  clearInterval(a);
                  var e,
                    i = t.gesture.direction,
                    n = t.gesture.deltaX,
                    o = t.gesture.velocityX,
                    s = t.gesture.velocityY;
                  ($curr_slide = l.find(".active")),
                    Math.abs(o) > Math.abs(s) &&
                      $curr_slide.velocity(
                        { translateX: n },
                        { duration: 50, queue: !1, easing: "easeOutQuad" }
                      ),
                    4 === i && (n > r.innerWidth() / 2 || o < -0.65)
                      ? (p = !0)
                      : 2 === i &&
                        (n < (-1 * r.innerWidth()) / 2 || o > 0.65) &&
                        (u = !0),
                    u &&
                      (0 === (e = $curr_slide.next()).length && (e = c.first()),
                      e.velocity(
                        { opacity: 1 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      )),
                    p &&
                      (0 === (e = $curr_slide.prev()).length && (e = c.last()),
                      e.velocity(
                        { opacity: 1 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      ));
                }
              })
              .bind("panend", function (t) {
                "touch" === t.gesture.pointerType &&
                  (($curr_slide = l.find(".active")),
                  (curr_index = l.find(".active").index()),
                  (p || u) && !(c.length <= 1)
                    ? u
                      ? (n(curr_index + 1),
                        $curr_slide.velocity(
                          { translateX: -1 * r.innerWidth() },
                          {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                              $curr_slide.velocity(
                                { opacity: 0, translateX: 0 },
                                { duration: 0, queue: !1 }
                              );
                            },
                          }
                        ))
                      : p &&
                        (n(curr_index - 1),
                        $curr_slide.velocity(
                          { translateX: r.innerWidth() },
                          {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                              $curr_slide.velocity(
                                { opacity: 0, translateX: 0 },
                                { duration: 0, queue: !1 }
                              );
                            },
                          }
                        ))
                    : $curr_slide.velocity(
                        { translateX: 0 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      ),
                  (u = !1),
                  (p = !1),
                  clearInterval(a),
                  (a = setInterval(function () {
                    (d = l.find(".active").index()),
                      c.length == d + 1 ? (d = 0) : (d += 1),
                      n(d);
                  }, e.transition + e.interval)));
              }),
              r.on("sliderPause", function () {
                clearInterval(a);
              }),
              r.on("sliderStart", function () {
                clearInterval(a),
                  (a = setInterval(function () {
                    (d = l.find(".active").index()),
                      c.length == d + 1 ? (d = 0) : (d += 1),
                      n(d);
                  }, e.transition + e.interval));
              }),
              r.on("sliderNext", function () {
                n((d = l.find(".active").index()) + 1);
              }),
              r.on("sliderPrev", function () {
                n((d = l.find(".active").index()) - 1);
              });
          })
        );
      },
      pause: function () {
        t(this).trigger("sliderPause");
      },
      start: function () {
        t(this).trigger("sliderStart");
      },
      next: function () {
        t(this).trigger("sliderNext");
      },
      prev: function () {
        t(this).trigger("sliderPrev");
      },
    };
    t.fn.slider = function (i) {
      return e[i]
        ? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.tooltip")
        : e.init.apply(this, arguments);
    };
  })(jQuery),
  (function (t) {
    t(document).ready(function () {
      t(document).on("click.card", ".card", function (e) {
        t(this).find("> .card-reveal").length &&
          (t(e.target).is(t(".card-reveal .card-title")) ||
          t(e.target).is(t(".card-reveal .card-title i"))
            ? t(this)
                .find(".card-reveal")
                .velocity(
                  { translateY: 0 },
                  {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function () {
                      t(this).css({ display: "none" });
                    },
                  }
                )
            : (t(e.target).is(t(".card .activator")) ||
                t(e.target).is(t(".card .activator i"))) &&
              (t(e.target).closest(".card").css("overflow", "hidden"),
              t(this)
                .find(".card-reveal")
                .css({ display: "block" })
                .velocity("stop", !1)
                .velocity(
                  { translateY: "-100%" },
                  { duration: 300, queue: !1, easing: "easeInOutQuad" }
                )));
      });
    });
  })(jQuery),
  (function (t) {
    var e = {
      data: [],
      placeholder: "",
      secondaryPlaceholder: "",
      autocompleteOptions: {},
    };
    t(document).ready(function () {
      t(document).on("click", ".chip .close", function (e) {
        t(this).closest(".chips").attr("data-initialized") ||
          t(this).closest(".chip").remove();
      });
    }),
      (t.fn.material_chip = function (i) {
        var n = this;
        if (
          ((this.$el = t(this)),
          (this.$document = t(document)),
          (this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".material-icons",
            SELECTED_CHIP: ".selected",
          }),
          "data" === i)
        )
          return this.$el.data("chips");
        var o = t.extend({}, e, i);
        (n.hasAutocomplete = !t.isEmptyObject(o.autocompleteOptions.data)),
          (this.init = function () {
            var e = 0;
            n.$el.each(function () {
              var i = t(this),
                s = Materialize.guid();
              (n.chipId = s),
                (o.data && o.data instanceof Array) || (o.data = []),
                i.data("chips", o.data),
                i.attr("data-index", e),
                i.attr("data-initialized", !0),
                i.hasClass(n.SELS.CHIPS) || i.addClass("chips"),
                n.chips(i, s),
                e++;
            });
          }),
          (this.handleEvents = function () {
            var e = n.SELS;
            n.$document
              .off("click.chips-focus", e.CHIPS)
              .on("click.chips-focus", e.CHIPS, function (i) {
                t(i.target).find(e.INPUT).focus();
              }),
              n.$document
                .off("click.chips-select", e.CHIP)
                .on("click.chips-select", e.CHIP, function (i) {
                  var o = t(i.target);
                  if (o.length) {
                    var s = o.hasClass("selected"),
                      a = o.closest(e.CHIPS);
                    t(e.CHIP).removeClass("selected"),
                      s || n.selectChip(o.index(), a);
                  }
                }),
              n.$document
                .off("keydown.chips")
                .on("keydown.chips", function (i) {
                  if (!t(i.target).is("input, textarea")) {
                    var o,
                      s = n.$document.find(e.CHIP + e.SELECTED_CHIP),
                      a = s.closest(e.CHIPS),
                      r = s.siblings(e.CHIP).length;
                    if (s.length) {
                      if (8 === i.which || 46 === i.which) {
                        i.preventDefault(), (o = s.index()), n.deleteChip(o, a);
                        var l = null;
                        o + 1 < r
                          ? (l = o)
                          : (o !== r && o + 1 !== r) || (l = r - 1),
                          l < 0 && (l = null),
                          null !== l && n.selectChip(l, a),
                          r || a.find("input").focus();
                      } else if (37 === i.which) {
                        if ((o = s.index() - 1) < 0) return;
                        t(e.CHIP).removeClass("selected"), n.selectChip(o, a);
                      } else if (39 === i.which) {
                        if (
                          ((o = s.index() + 1),
                          t(e.CHIP).removeClass("selected"),
                          o > r)
                        )
                          return void a.find("input").focus();
                        n.selectChip(o, a);
                      }
                    }
                  }
                }),
              n.$document
                .off("focusin.chips", e.CHIPS + " " + e.INPUT)
                .on("focusin.chips", e.CHIPS + " " + e.INPUT, function (i) {
                  var n = t(i.target).closest(e.CHIPS);
                  n.addClass("focus"),
                    n.siblings("label, .prefix").addClass("active"),
                    t(e.CHIP).removeClass("selected");
                }),
              n.$document
                .off("focusout.chips", e.CHIPS + " " + e.INPUT)
                .on("focusout.chips", e.CHIPS + " " + e.INPUT, function (i) {
                  var n = t(i.target).closest(e.CHIPS);
                  n.removeClass("focus"),
                    n.data("chips").length ||
                      n.siblings("label").removeClass("active"),
                    n.siblings(".prefix").removeClass("active");
                }),
              n.$document
                .off("keydown.chips-add", e.CHIPS + " " + e.INPUT)
                .on("keydown.chips-add", e.CHIPS + " " + e.INPUT, function (i) {
                  var o = t(i.target),
                    s = o.closest(e.CHIPS),
                    a = s.children(e.CHIP).length;
                  if (13 === i.which) {
                    if (
                      n.hasAutocomplete &&
                      s.find(".autocomplete-content.dropdown-content").length &&
                      s
                        .find(".autocomplete-content.dropdown-content")
                        .children().length
                    )
                      return;
                    return (
                      i.preventDefault(),
                      n.addChip({ tag: o.val() }, s),
                      void o.val("")
                    );
                  }
                  if (
                    (8 === i.keyCode || 37 === i.keyCode) &&
                    "" === o.val() &&
                    a
                  )
                    return (
                      i.preventDefault(), n.selectChip(a - 1, s), void o.blur()
                    );
                }),
              n.$document
                .off("click.chips-delete", e.CHIPS + " " + e.DELETE)
                .on(
                  "click.chips-delete",
                  e.CHIPS + " " + e.DELETE,
                  function (i) {
                    var o = t(i.target),
                      s = o.closest(e.CHIPS),
                      a = o.closest(e.CHIP);
                    i.stopPropagation(),
                      n.deleteChip(a.index(), s),
                      s.find("input").focus();
                  }
                );
          }),
          (this.chips = function (e, i) {
            e.empty(),
              e.data("chips").forEach(function (t) {
                e.append(n.renderChip(t));
              }),
              e.append(
                t('<input id="' + i + '" class="input" placeholder="">')
              ),
              n.setPlaceholder(e);
            var s = e.next("label");
            s.length &&
              (s.attr("for", i),
              e.data("chips").length && s.addClass("active"));
            var a = t("#" + i);
            n.hasAutocomplete &&
              ((o.autocompleteOptions.onAutocomplete = function (t) {
                n.addChip({ tag: t }, e), a.val(""), a.focus();
              }),
              a.autocomplete(o.autocompleteOptions));
          }),
          (this.renderChip = function (e) {
            if (e.tag) {
              var i = t('<div class="chip"></div>');
              return (
                i.text(e.tag),
                i.append(t('<i class="material-icons close">close</i>')),
                i
              );
            }
          }),
          (this.setPlaceholder = function (t) {
            t.data("chips").length && o.placeholder
              ? t.find("input").prop("placeholder", o.placeholder)
              : !t.data("chips").length &&
                o.secondaryPlaceholder &&
                t.find("input").prop("placeholder", o.secondaryPlaceholder);
          }),
          (this.isValid = function (t, e) {
            for (var i = t.data("chips"), n = !1, o = 0; o < i.length; o++)
              if (i[o].tag === e.tag) return void (n = !0);
            return "" !== e.tag && !n;
          }),
          (this.addChip = function (t, e) {
            if (n.isValid(e, t)) {
              for (
                var i = n.renderChip(t), o = [], s = e.data("chips"), a = 0;
                a < s.length;
                a++
              )
                o.push(s[a]);
              o.push(t),
                e.data("chips", o),
                i.insertBefore(e.find("input")),
                e.trigger("chip.add", t),
                n.setPlaceholder(e);
            }
          }),
          (this.deleteChip = function (t, e) {
            var i = e.data("chips")[t];
            e.find(".chip").eq(t).remove();
            for (var o = [], s = e.data("chips"), a = 0; a < s.length; a++)
              a !== t && o.push(s[a]);
            e.data("chips", o),
              e.trigger("chip.delete", i),
              n.setPlaceholder(e);
          }),
          (this.selectChip = function (t, e) {
            var i = e.find(".chip").eq(t);
            i &&
              !1 === i.hasClass("selected") &&
              (i.addClass("selected"),
              e.trigger("chip.select", e.data("chips")[t]));
          }),
          (this.getChipsElement = function (t, e) {
            return e.eq(t);
          }),
          this.init(),
          this.handleEvents();
      });
  })(jQuery),
  (function (t) {
    t.fn.pushpin = function (e) {
      return "remove" === e
        ? (this.each(function () {
            (id = t(this).data("pushpin-id")) &&
              (t(window).off("scroll." + id),
              t(this)
                .removeData("pushpin-id")
                .removeClass("pin-top pinned pin-bottom")
                .removeAttr("style"));
          }),
          !1)
        : ((e = t.extend({ top: 0, bottom: 1 / 0, offset: 0 }, e)),
          ($index = 0),
          this.each(function () {
            function i(t) {
              t.removeClass("pin-top"),
                t.removeClass("pinned"),
                t.removeClass("pin-bottom");
            }
            function n(n, o) {
              n.each(function () {
                e.top <= o &&
                  e.bottom >= o &&
                  !t(this).hasClass("pinned") &&
                  (i(t(this)),
                  t(this).css("top", e.offset),
                  t(this).addClass("pinned")),
                  o < e.top &&
                    !t(this).hasClass("pin-top") &&
                    (i(t(this)),
                    t(this).css("top", 0),
                    t(this).addClass("pin-top")),
                  o > e.bottom &&
                    !t(this).hasClass("pin-bottom") &&
                    (i(t(this)),
                    t(this).addClass("pin-bottom"),
                    t(this).css("top", e.bottom - a));
              });
            }
            var o = Materialize.guid(),
              s = t(this),
              a = t(this).offset().top;
            t(this).data("pushpin-id", o),
              n(s, t(window).scrollTop()),
              t(window).on("scroll." + o, function () {
                var i = t(window).scrollTop() + e.offset;
                n(s, i);
              });
          }));
    };
  })(jQuery),
  (function (t) {
    t(document).ready(function () {
      (t.fn.reverse = [].reverse),
        t(document).on(
          "mouseenter.fixedActionBtn",
          ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",
          function (i) {
            var n = t(this);
            e(n);
          }
        ),
        t(document).on(
          "mouseleave.fixedActionBtn",
          ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",
          function (e) {
            var n = t(this);
            i(n);
          }
        ),
        t(document).on(
          "click.fabClickToggle",
          ".fixed-action-btn.click-to-toggle > a",
          function (n) {
            var o = t(this).parent();
            o.hasClass("active") ? i(o) : e(o);
          }
        ),
        t(document).on(
          "click.fabToolbar",
          ".fixed-action-btn.toolbar > a",
          function (e) {
            var i = t(this).parent();
            n(i);
          }
        );
    }),
      t.fn.extend({
        openFAB: function () {
          e(t(this));
        },
        closeFAB: function () {
          i(t(this));
        },
        openToolbar: function () {
          n(t(this));
        },
        closeToolbar: function () {
          o(t(this));
        },
      });
    var e = function (e) {
        var i = e;
        if (!1 === i.hasClass("active")) {
          !0 === i.hasClass("horizontal") ? (o = 40) : (n = 40),
            i.addClass("active"),
            i
              .find("ul .btn-floating")
              .velocity(
                {
                  scaleY: ".4",
                  scaleX: ".4",
                  translateY: n + "px",
                  translateX: o + "px",
                },
                { duration: 0 }
              );
          var n,
            o,
            s = 0;
          i.find("ul .btn-floating")
            .reverse()
            .each(function () {
              t(this).velocity(
                {
                  opacity: "1",
                  scaleX: "1",
                  scaleY: "1",
                  translateY: "0",
                  translateX: "0",
                },
                { duration: 80, delay: s }
              ),
                (s += 40);
            });
        }
      },
      i = function (t) {
        var e,
          i,
          n = t;
        !0 === n.hasClass("horizontal") ? (i = 40) : (e = 40),
          n.removeClass("active"),
          n.find("ul .btn-floating").velocity("stop", !0),
          n
            .find("ul .btn-floating")
            .velocity(
              {
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: e + "px",
                translateX: i + "px",
              },
              { duration: 80 }
            );
      },
      n = function (e) {
        if ("true" !== e.attr("data-open")) {
          var i,
            n,
            s,
            a = window.innerWidth,
            r = window.innerHeight,
            l = e[0].getBoundingClientRect(),
            c = e.find("> a").first(),
            d = e.find("> ul").first(),
            u = t('<div class="fab-backdrop"></div>'),
            p = c.css("background-color");
          c.append(u),
            (i = l.left - a / 2 + l.width / 2),
            (n = r - l.bottom),
            (s = a / u.width()),
            e.attr("data-origin-bottom", l.bottom),
            e.attr("data-origin-left", l.left),
            e.attr("data-origin-width", l.width),
            e.addClass("active"),
            e.attr("data-open", !0),
            e.css({
              "text-align": "center",
              width: "100%",
              bottom: 0,
              left: 0,
              transform: "translateX(" + i + "px)",
              transition: "none",
            }),
            c.css({
              transform: "translateY(" + -n + "px)",
              transition: "none",
            }),
            u.css({ "background-color": p }),
            setTimeout(function () {
              e.css({
                transform: "",
                transition:
                  "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s",
              }),
                c.css({
                  overflow: "visible",
                  transform: "",
                  transition: "transform .2s",
                }),
                setTimeout(function () {
                  e.css({ overflow: "hidden", "background-color": p }),
                    u.css({
                      transform: "scale(" + s + ")",
                      transition:
                        "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                    }),
                    d.find("> li > a").css({ opacity: 1 }),
                    t(window).on("scroll.fabToolbarClose", function () {
                      o(e),
                        t(window).off("scroll.fabToolbarClose"),
                        t(document).off("click.fabToolbarClose");
                    }),
                    t(document).on("click.fabToolbarClose", function (i) {
                      t(i.target).closest(d).length ||
                        (o(e),
                        t(window).off("scroll.fabToolbarClose"),
                        t(document).off("click.fabToolbarClose"));
                    });
                }, 100);
            }, 0);
        }
      },
      o = function (t) {
        if ("true" === t.attr("data-open")) {
          var e,
            i,
            n = window.innerWidth,
            o = window.innerHeight,
            s = t.attr("data-origin-width"),
            a = t.attr("data-origin-bottom"),
            r = t.attr("data-origin-left"),
            l = t.find("> .btn-floating").first(),
            c = t.find("> ul").first(),
            d = t.find(".fab-backdrop"),
            u = l.css("background-color");
          (e = r - n / 2 + s / 2),
            (i = o - a),
            d.width(),
            t.removeClass("active"),
            t.attr("data-open", !1),
            t.css({ "background-color": "transparent", transition: "none" }),
            l.css({ transition: "none" }),
            d.css({ transform: "scale(0)", "background-color": u }),
            c.find("> li > a").css({ opacity: "" }),
            setTimeout(function () {
              d.remove(),
                t.css({
                  "text-align": "",
                  width: "",
                  bottom: "",
                  left: "",
                  overflow: "",
                  "background-color": "",
                  transform: "translate3d(" + -e + "px,0,0)",
                }),
                l.css({
                  overflow: "",
                  transform: "translate3d(0," + i + "px,0)",
                }),
                setTimeout(function () {
                  t.css({
                    transform: "translate3d(0,0,0)",
                    transition: "transform .2s",
                  }),
                    l.css({
                      transform: "translate3d(0,0,0)",
                      transition:
                        "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                    });
                }, 20);
            }, 200);
        }
      };
  })(jQuery),
  (function (t) {
    (Materialize.fadeInImage = function (e) {
      var i;
      if ("string" == typeof e) i = t(e);
      else {
        if ("object" != typeof e) return;
        i = e;
      }
      i.css({ opacity: 0 }),
        t(i).velocity(
          { opacity: 1 },
          { duration: 650, queue: !1, easing: "easeOutSine" }
        ),
        t(i).velocity(
          { opacity: 1 },
          {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function (e, i) {
              i.start = 100;
              var n = e / 100,
                o = 150 - (100 - e) / 1.75;
              o < 100 && (o = 100),
                e >= 0 &&
                  t(this).css({
                    "-webkit-filter":
                      "grayscale(" + n + ")brightness(" + o + "%)",
                    filter: "grayscale(" + n + ")brightness(" + o + "%)",
                  });
            },
          }
        );
    }),
      (Materialize.showStaggeredList = function (e) {
        if ("string" == typeof e) i = t(e);
        else {
          if ("object" != typeof e) return;
          i = e;
        }
        var i,
          n = 0;
        i.find("li").velocity({ translateX: "-100px" }, { duration: 0 }),
          i.find("li").each(function () {
            t(this).velocity(
              { opacity: "1", translateX: "0" },
              { duration: 800, delay: n, easing: [60, 10] }
            ),
              (n += 120);
          });
      }),
      t(document).ready(function () {
        var e = !1,
          i = !1;
        t(".dismissable").each(function () {
          t(this)
            .hammer({ prevent_default: !1 })
            .bind("pan", function (n) {
              if ("touch" === n.gesture.pointerType) {
                var o = t(this),
                  s = n.gesture.direction,
                  a = n.gesture.deltaX,
                  r = n.gesture.velocityX;
                o.velocity(
                  { translateX: a },
                  { duration: 50, queue: !1, easing: "easeOutQuad" }
                ),
                  4 === s && (a > o.innerWidth() / 2 || r < -0.75) && (e = !0),
                  2 === s &&
                    (a < (-1 * o.innerWidth()) / 2 || r > 0.75) &&
                    (i = !0);
              }
            })
            .bind("panend", function (n) {
              if (
                (Math.abs(n.gesture.deltaX) < t(this).innerWidth() / 2 &&
                  ((i = !1), (e = !1)),
                "touch" === n.gesture.pointerType)
              ) {
                var o,
                  s = t(this);
                e || i
                  ? ((o = e ? s.innerWidth() : -1 * s.innerWidth()),
                    s.velocity(
                      { translateX: o },
                      {
                        duration: 100,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                          s.css("border", "none"),
                            s.velocity(
                              { height: 0, padding: 0 },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                  s.remove();
                                },
                              }
                            );
                        },
                      }
                    ))
                  : s.velocity(
                      { translateX: 0 },
                      { duration: 100, queue: !1, easing: "easeOutQuad" }
                    ),
                  (e = !1),
                  (i = !1);
              }
            });
        });
      });
  })(jQuery),
  (function (t) {
    var e = !1;
    Materialize.scrollFire = function (t) {
      var i = Materialize.throttle(function () {
        !(function () {
          for (
            var e = window.pageYOffset + window.innerHeight, i = 0;
            i < t.length;
            i++
          ) {
            var n = t[i],
              o = n.selector,
              s = n.offset,
              a = n.callback,
              r = document.querySelector(o);
            null !== r &&
              e > r.getBoundingClientRect().top + window.pageYOffset + s &&
              !0 !== n.done &&
              ("function" == typeof a
                ? a.call(this, r)
                : "string" == typeof a && Function(a)(r),
              (n.done = !0));
          }
        })();
      }, t.throttle || 100);
      e ||
        (window.addEventListener("scroll", i),
        window.addEventListener("resize", i),
        (e = !0)),
        setTimeout(i, 0);
    };
  })(),
  (function (t) {
    "function" == typeof define && define.amd
      ? define("picker", ["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : (this.Picker = t(jQuery));
  })(function (t) {
    function e(o, a, c, d) {
      function u() {
        return e._.node(
          "div",
          e._.node(
            "div",
            e._.node(
              "div",
              e._.node("div", w.component.nodes(v.open), m.box),
              m.wrap
            ),
            m.frame
          ),
          m.holder
        );
      }
      function p(t) {
        var e = t.keyCode,
          i = /^(8|46)$/.test(e);
        if (27 == e) return w.close(), !1;
        (32 == e || i || (!v.open && w.component.key[e])) &&
          (t.preventDefault(),
          t.stopPropagation(),
          i ? w.clear().close() : w.open());
      }
      function h(t) {
        t.stopPropagation(),
          "focus" == t.type && w.$root.addClass(m.focused),
          w.open();
      }
      if (!o) return e;
      var f = !1,
        v = { id: o.id || "P" + Math.abs(~~(Math.random() * new Date())) },
        g = c ? t.extend(!0, {}, c.defaults, d) : d || {},
        m = t.extend({}, e.klasses(), g.klass),
        b = t(o),
        _ = function () {
          return this.start();
        },
        w = (_.prototype = {
          constructor: _,
          $node: b,
          start: function () {
            var i, r, l;
            return v && v.start
              ? w
              : ((v.methods = {}),
                (v.start = !0),
                (v.open = !1),
                (v.type = o.type),
                (o.autofocus = o == s()),
                (o.readOnly = !g.editable),
                (o.id = o.id || v.id),
                "text" != o.type && (o.type = "text"),
                (w.component = new c(w, g)),
                (w.$root = t(
                  e._.node(
                    "div",
                    u(),
                    m.picker,
                    'id="' + o.id + '_root" tabindex="0"'
                  )
                )),
                w.$root
                  .on({
                    keydown: p,
                    focusin: function (t) {
                      w.$root.removeClass(m.focused), t.stopPropagation();
                    },
                    "mousedown click": function (e) {
                      var i = e.target;
                      i != w.$root.children()[0] &&
                        (e.stopPropagation(),
                        "mousedown" != e.type ||
                          t(i).is("input, select, textarea, button, option") ||
                          (e.preventDefault(), w.$root.eq(0).focus()));
                    },
                  })
                  .on({
                    focus: function () {
                      b.addClass(m.target);
                    },
                    blur: function () {
                      b.removeClass(m.target);
                    },
                  })
                  .on("focus.toOpen", h)
                  .on(
                    "click",
                    "[data-pick], [data-nav], [data-clear], [data-close]",
                    function () {
                      var e = t(this),
                        i = e.data(),
                        n = e.hasClass(m.navDisabled) || e.hasClass(m.disabled),
                        o = s();
                      (o = o && (o.type || o.href)),
                        (n || (o && !t.contains(w.$root[0], o))) &&
                          w.$root.eq(0).focus(),
                        !n && i.nav
                          ? w.set("highlight", w.component.item.highlight, {
                              nav: i.nav,
                            })
                          : !n && "pick" in i
                          ? w.set("select", i.pick)
                          : i.clear
                          ? w.clear().close(!0)
                          : i.close && w.close(!0);
                    }
                  ),
                n(w.$root[0], "hidden", !0),
                g.formatSubmit &&
                  (!0 === g.hiddenName
                    ? ((i = o.name), (o.name = ""))
                    : (i =
                        (i = [
                          "string" == typeof g.hiddenPrefix
                            ? g.hiddenPrefix
                            : "",
                          "string" == typeof g.hiddenSuffix
                            ? g.hiddenSuffix
                            : "_submit",
                        ])[0] +
                        o.name +
                        i[1]),
                  (w._hidden = t(
                    '<input type=hidden name="' +
                      i +
                      '"' +
                      (b.data("value") || o.value
                        ? ' value="' + w.get("select", g.formatSubmit) + '"'
                        : "") +
                      ">"
                  )[0]),
                  b.on("change." + v.id, function () {
                    w._hidden.value = o.value
                      ? w.get("select", g.formatSubmit)
                      : "";
                  }),
                  g.container
                    ? t(g.container).append(w._hidden)
                    : b.after(w._hidden)),
                b
                  .data(a, w)
                  .addClass(m.input)
                  .attr("tabindex", -1)
                  .val(b.data("value") ? w.get("select", g.format) : o.value),
                g.editable ||
                  b
                    .on("focus." + v.id + " click." + v.id, function (t) {
                      t.preventDefault(), w.$root.eq(0).focus();
                    })
                    .on("keydown." + v.id, p),
                n(o, {
                  haspopup: !0,
                  expanded: !1,
                  readonly: !1,
                  owns: o.id + "_root",
                }),
                g.container ? t(g.container).append(w.$root) : b.after(w.$root),
                w
                  .on({
                    start: w.component.onStart,
                    render: w.component.onRender,
                    stop: w.component.onStop,
                    open: w.component.onOpen,
                    close: w.component.onClose,
                    set: w.component.onSet,
                  })
                  .on({
                    start: g.onStart,
                    render: g.onRender,
                    stop: g.onStop,
                    open: g.onOpen,
                    close: g.onClose,
                    set: g.onSet,
                  }),
                (f =
                  ((r = w.$root.children()[0]).currentStyle
                    ? (l = r.currentStyle.position)
                    : window.getComputedStyle &&
                      (l = getComputedStyle(r).position),
                  "fixed" == l)),
                o.autofocus && w.open(),
                w.trigger("start").trigger("render"));
          },
          render: function (t) {
            return (
              t
                ? w.$root.html(u())
                : w.$root.find("." + m.box).html(w.component.nodes(v.open)),
              w.trigger("render")
            );
          },
          stop: function () {
            return (
              v.start &&
                (w.close(),
                w._hidden && w._hidden.parentNode.removeChild(w._hidden),
                w.$root.remove(),
                b.removeClass(m.input).removeData(a),
                setTimeout(function () {
                  b.off("." + v.id);
                }, 0),
                (o.type = v.type),
                (o.readOnly = !1),
                w.trigger("stop"),
                (v.methods = {}),
                (v.start = !1)),
              w
            );
          },
          open: function (s) {
            return v.open
              ? w
              : (b.addClass(m.active),
                n(o, "expanded", !0),
                setTimeout(function () {
                  w.$root.addClass(m.opened), n(w.$root[0], "hidden", !1);
                }, 0),
                !1 !== s &&
                  ((v.open = !0),
                  f &&
                    l
                      .css("overflow", "hidden")
                      .css("padding-right", "+=" + i()),
                  w.$root.eq(0).focus(),
                  r
                    .on("click." + v.id + " focusin." + v.id, function (t) {
                      var e = t.target;
                      e != o &&
                        e != document &&
                        3 != t.which &&
                        w.close(e === w.$root.children()[0]);
                    })
                    .on("keydown." + v.id, function (i) {
                      var n = i.keyCode,
                        o = w.component.key[n],
                        s = i.target;
                      27 == n
                        ? w.close(!0)
                        : s == w.$root[0] && (o || 13 == n)
                        ? (i.preventDefault(),
                          o
                            ? e._.trigger(w.component.key.go, w, [
                                e._.trigger(o),
                              ])
                            : w.$root
                                .find("." + m.highlighted)
                                .hasClass(m.disabled) ||
                              w
                                .set("select", w.component.item.highlight)
                                .close())
                        : t.contains(w.$root[0], s) &&
                          13 == n &&
                          (i.preventDefault(), s.click());
                    })),
                w.trigger("open"));
          },
          close: function (t) {
            return (
              t &&
                (w.$root.off("focus.toOpen").eq(0).focus(),
                setTimeout(function () {
                  w.$root.on("focus.toOpen", h);
                }, 0)),
              b.removeClass(m.active),
              n(o, "expanded", !1),
              setTimeout(function () {
                w.$root.removeClass(m.opened + " " + m.focused),
                  n(w.$root[0], "hidden", !0);
              }, 0),
              v.open
                ? ((v.open = !1),
                  f && l.css("overflow", "").css("padding-right", "-=" + i()),
                  r.off("." + v.id),
                  w.trigger("close"))
                : w
            );
          },
          clear: function (t) {
            return w.set("clear", null, t);
          },
          set: function (e, i, n) {
            var o,
              s,
              a = t.isPlainObject(e),
              r = a ? e : {};
            if (((n = a && t.isPlainObject(i) ? i : n || {}), e)) {
              for (o in (a || (r[e] = i), r))
                (s = r[o]),
                  o in w.component.item &&
                    (void 0 === s && (s = null), w.component.set(o, s, n)),
                  ("select" != o && "clear" != o) ||
                    b
                      .val("clear" == o ? "" : w.get(o, g.format))
                      .trigger("change");
              w.render();
            }
            return n.muted ? w : w.trigger("set", r);
          },
          get: function (t, i) {
            if (null != v[(t = t || "value")]) return v[t];
            if ("valueSubmit" == t) {
              if (w._hidden) return w._hidden.value;
              t = "value";
            }
            if ("value" == t) return o.value;
            if (t in w.component.item) {
              if ("string" == typeof i) {
                var n = w.component.get(t);
                return n
                  ? e._.trigger(w.component.formats.toString, w.component, [
                      i,
                      n,
                    ])
                  : "";
              }
              return w.component.get(t);
            }
          },
          on: function (e, i, n) {
            var o,
              s,
              a = t.isPlainObject(e),
              r = a ? e : {};
            if (e)
              for (o in (a || (r[e] = i), r))
                (s = r[o]),
                  n && (o = "_" + o),
                  (v.methods[o] = v.methods[o] || []),
                  v.methods[o].push(s);
            return w;
          },
          off: function () {
            var t,
              e,
              i = arguments;
            for (t = 0, namesCount = i.length; t < namesCount; t += 1)
              (e = i[t]) in v.methods && delete v.methods[e];
            return w;
          },
          trigger: function (t, i) {
            var n = function (t) {
              var n = v.methods[t];
              n &&
                n.map(function (t) {
                  e._.trigger(t, w, [i]);
                });
            };
            return n("_" + t), n(t), w;
          },
        });
      return new _();
    }
    function i() {
      if (l.height() <= a.height()) return 0;
      var e = t('<div style="visibility:hidden;width:100px" />').appendTo(
          "body"
        ),
        i = e[0].offsetWidth;
      e.css("overflow", "scroll");
      var n = t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;
      return e.remove(), i - n;
    }
    function n(e, i, n) {
      if (t.isPlainObject(i)) for (var s in i) o(e, s, i[s]);
      else o(e, i, n);
    }
    function o(t, e, i) {
      t.setAttribute(("role" == e ? "" : "aria-") + e, i);
    }
    function s() {
      try {
        return document.activeElement;
      } catch (t) {}
    }
    var a = t(window),
      r = t(document),
      l = t(document.documentElement);
    return (
      (e.klasses = function (t) {
        return {
          picker: (t = t || "picker"),
          opened: t + "--opened",
          focused: t + "--focused",
          input: t + "__input",
          active: t + "__input--active",
          target: t + "__input--target",
          holder: t + "__holder",
          frame: t + "__frame",
          wrap: t + "__wrap",
          box: t + "__box",
        };
      }),
      (e._ = {
        group: function (t) {
          for (
            var i, n = "", o = e._.trigger(t.min, t);
            o <= e._.trigger(t.max, t, [o]);
            o += t.i
          )
            (i = e._.trigger(t.item, t, [o])),
              (n += e._.node(t.node, i[0], i[1], i[2]));
          return n;
        },
        node: function (e, i, n, o) {
          return i
            ? "<" +
                e +
                (n = n ? ' class="' + n + '"' : "") +
                (o = o ? " " + o : "") +
                ">" +
                (i = t.isArray(i) ? i.join("") : i) +
                "</" +
                e +
                ">"
            : "";
        },
        lead: function (t) {
          return (t < 10 ? "0" : "") + t;
        },
        trigger: function (t, e, i) {
          return "function" == typeof t ? t.apply(e, i || []) : t;
        },
        digits: function (t) {
          return /\d/.test(t[1]) ? 2 : 1;
        },
        isDate: function (t) {
          return (
            {}.toString.call(t).indexOf("Date") > -1 &&
            this.isInteger(t.getDate())
          );
        },
        isInteger: function (t) {
          return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0;
        },
        ariaAttr: function (e, i) {
          for (var n in (t.isPlainObject(e) || (e = { attribute: i }),
          (i = ""),
          e)) {
            var o = ("role" == n ? "" : "aria-") + n;
            i += null == e[n] ? "" : o + '="' + e[n] + '"';
          }
          return i;
        },
      }),
      (e.extend = function (i, n) {
        (t.fn[i] = function (o, s) {
          var a = this.data(i);
          return "picker" == o
            ? a
            : a && "string" == typeof o
            ? e._.trigger(a[o], a, [s])
            : this.each(function () {
                t(this).data(i) || new e(this, i, n, o);
              });
        }),
          (t.fn[i].defaults = n.defaults);
      }),
      e
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["picker", "jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t(require("./picker.js"), require("jquery")))
      : t(Picker, jQuery);
  })(function (t, e) {
    function i(t, e) {
      var i,
        n = this,
        o = t.$node[0],
        s = o.value,
        a = t.$node.data("value"),
        r = a || s,
        l = a ? e.formatSubmit : e.format,
        c = function () {
          return o.currentStyle
            ? "rtl" == o.currentStyle.direction
            : "rtl" == getComputedStyle(t.$root[0]).direction;
        };
      (n.settings = e),
        (n.$node = t.$node),
        (n.queue = {
          min: "measure create",
          max: "measure create",
          now: "now create",
          select: "parse create validate",
          highlight: "parse navigate create validate",
          view: "parse create validate viewset",
          disable: "deactivate",
          enable: "activate",
        }),
        (n.item = {}),
        (n.item.clear = null),
        (n.item.disable = (e.disable || []).slice(0)),
        (n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1)),
        n.set("min", e.min).set("max", e.max).set("now"),
        r
          ? n.set("select", r, { format: l })
          : n.set("select", null).set("highlight", n.item.now),
        (n.key = {
          40: 7,
          38: -7,
          39: function () {
            return c() ? -1 : 1;
          },
          37: function () {
            return c() ? 1 : -1;
          },
          go: function (t) {
            var e = n.item.highlight,
              i = new Date(e.year, e.month, e.date + t);
            n.set("highlight", i, { interval: t }), this.render();
          },
        }),
        t
          .on(
            "render",
            function () {
              t.$root.find("." + e.klass.selectMonth).on("change", function () {
                var i = this.value;
                i &&
                  (t.set("highlight", [
                    t.get("view").year,
                    i,
                    t.get("highlight").date,
                  ]),
                  t.$root.find("." + e.klass.selectMonth).trigger("focus"));
              }),
                t.$root
                  .find("." + e.klass.selectYear)
                  .on("change", function () {
                    var i = this.value;
                    i &&
                      (t.set("highlight", [
                        i,
                        t.get("view").month,
                        t.get("highlight").date,
                      ]),
                      t.$root.find("." + e.klass.selectYear).trigger("focus"));
                  });
            },
            1
          )
          .on(
            "open",
            function () {
              var i = "";
              n.disabled(n.get("now")) &&
                (i = ":not(." + e.klass.buttonToday + ")"),
                t.$root.find("button" + i + ", select").attr("disabled", !1);
            },
            1
          )
          .on(
            "close",
            function () {
              t.$root.find("button, select").attr("disabled", !0);
            },
            1
          );
    }
    var n,
      o = t._;
    (i.prototype.set = function (t, e, i) {
      var n = this,
        o = n.item;
      return null === e
        ? ("clear" == t && (t = "select"), (o[t] = e), n)
        : ((o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[
            t
          ]
            .split(" ")
            .map(function (o) {
              return (e = n[o](t, e, i));
            })
            .pop()),
          "select" == t
            ? n.set("highlight", o.select, i)
            : "highlight" == t
            ? n.set("view", o.highlight, i)
            : t.match(/^(flip|min|max|disable|enable)$/) &&
              (o.select && n.disabled(o.select) && n.set("select", o.select, i),
              o.highlight &&
                n.disabled(o.highlight) &&
                n.set("highlight", o.highlight, i)),
          n);
    }),
      (i.prototype.get = function (t) {
        return this.item[t];
      }),
      (i.prototype.create = function (t, i, n) {
        var s;
        return (
          (i = void 0 === i ? t : i) == -1 / 0 || i == 1 / 0
            ? (s = i)
            : e.isPlainObject(i) && o.isInteger(i.pick)
            ? (i = i.obj)
            : e.isArray(i)
            ? ((i = new Date(i[0], i[1], i[2])),
              (i = o.isDate(i) ? i : this.create().obj))
            : (i =
                o.isInteger(i) || o.isDate(i)
                  ? this.normalize(new Date(i), n)
                  : this.now(t, i, n)),
          {
            year: s || i.getFullYear(),
            month: s || i.getMonth(),
            date: s || i.getDate(),
            day: s || i.getDay(),
            obj: s || i,
            pick: s || i.getTime(),
          }
        );
      }),
      (i.prototype.createRange = function (t, i) {
        var n = this,
          s = function (t) {
            return !0 === t || e.isArray(t) || o.isDate(t) ? n.create(t) : t;
          };
        return (
          o.isInteger(t) || (t = s(t)),
          o.isInteger(i) || (i = s(i)),
          o.isInteger(t) && e.isPlainObject(i)
            ? (t = [i.year, i.month, i.date + t])
            : o.isInteger(i) &&
              e.isPlainObject(t) &&
              (i = [t.year, t.month, t.date + i]),
          { from: s(t), to: s(i) }
        );
      }),
      (i.prototype.withinRange = function (t, e) {
        return (
          (t = this.createRange(t.from, t.to)),
          e.pick >= t.from.pick && e.pick <= t.to.pick
        );
      }),
      (i.prototype.overlapRanges = function (t, e) {
        return (
          (t = this.createRange(t.from, t.to)),
          (e = this.createRange(e.from, e.to)),
          this.withinRange(t, e.from) ||
            this.withinRange(t, e.to) ||
            this.withinRange(e, t.from) ||
            this.withinRange(e, t.to)
        );
      }),
      (i.prototype.now = function (t, e, i) {
        return (
          (e = new Date()),
          i && i.rel && e.setDate(e.getDate() + i.rel),
          this.normalize(e, i)
        );
      }),
      (i.prototype.navigate = function (t, i, n) {
        var o,
          s,
          a,
          r,
          l = e.isArray(i),
          c = e.isPlainObject(i),
          d = this.item.view;
        if (l || c) {
          for (
            c
              ? ((s = i.year), (a = i.month), (r = i.date))
              : ((s = +i[0]), (a = +i[1]), (r = +i[2])),
              n && n.nav && d && d.month !== a && ((s = d.year), (a = d.month)),
              s = (o = new Date(
                s,
                a + (n && n.nav ? n.nav : 0),
                1
              )).getFullYear(),
              a = o.getMonth();
            new Date(s, a, r).getMonth() !== a;

          )
            r -= 1;
          i = [s, a, r];
        }
        return i;
      }),
      (i.prototype.normalize = function (t) {
        return t.setHours(0, 0, 0, 0), t;
      }),
      (i.prototype.measure = function (t, e) {
        return (
          e
            ? "string" == typeof e
              ? (e = this.parse(t, e))
              : o.isInteger(e) && (e = this.now(t, e, { rel: e }))
            : (e = "min" == t ? -1 / 0 : 1 / 0),
          e
        );
      }),
      (i.prototype.viewset = function (t, e) {
        return this.create([e.year, e.month, 1]);
      }),
      (i.prototype.validate = function (t, i, n) {
        var s,
          a,
          r,
          l,
          c = this,
          d = i,
          u = n && n.interval ? n.interval : 1,
          p = -1 === c.item.enable,
          h = c.item.min,
          f = c.item.max,
          v =
            p &&
            c.item.disable.filter(function (t) {
              if (e.isArray(t)) {
                var n = c.create(t).pick;
                n < i.pick ? (s = !0) : n > i.pick && (a = !0);
              }
              return o.isInteger(t);
            }).length;
        if (
          (!n || !n.nav) &&
          ((!p && c.disabled(i)) ||
            (p && c.disabled(i) && (v || s || a)) ||
            (!p && (i.pick <= h.pick || i.pick >= f.pick)))
        )
          for (
            p && !v && ((!a && u > 0) || (!s && u < 0)) && (u *= -1);
            c.disabled(i) &&
            (Math.abs(u) > 1 &&
              (i.month < d.month || i.month > d.month) &&
              ((i = d), (u = u > 0 ? 1 : -1)),
            i.pick <= h.pick
              ? ((r = !0),
                (u = 1),
                (i = c.create([
                  h.year,
                  h.month,
                  h.date + (i.pick === h.pick ? 0 : -1),
                ])))
              : i.pick >= f.pick &&
                ((l = !0),
                (u = -1),
                (i = c.create([
                  f.year,
                  f.month,
                  f.date + (i.pick === f.pick ? 0 : 1),
                ]))),
            !r || !l);

          )
            i = c.create([i.year, i.month, i.date + u]);
        return i;
      }),
      (i.prototype.disabled = function (t) {
        var i = this,
          n = i.item.disable.filter(function (n) {
            return o.isInteger(n)
              ? t.day === (i.settings.firstDay ? n : n - 1) % 7
              : e.isArray(n) || o.isDate(n)
              ? t.pick === i.create(n).pick
              : e.isPlainObject(n)
              ? i.withinRange(n, t)
              : void 0;
          });
        return (
          (n =
            n.length &&
            !n.filter(function (t) {
              return (
                (e.isArray(t) && "inverted" == t[3]) ||
                (e.isPlainObject(t) && t.inverted)
              );
            }).length),
          -1 === i.item.enable
            ? !n
            : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
        );
      }),
      (i.prototype.parse = function (t, e, i) {
        var n = this,
          s = {};
        return e && "string" == typeof e
          ? ((i && i.format) || ((i = i || {}).format = n.settings.format),
            n.formats.toArray(i.format).map(function (t) {
              var i = n.formats[t],
                a = i ? o.trigger(i, n, [e, s]) : t.replace(/^!/, "").length;
              i && (s[t] = e.substr(0, a)), (e = e.substr(a));
            }),
            [s.yyyy || s.yy, +(s.mm || s.m) - 1, s.dd || s.d])
          : e;
      }),
      (i.prototype.formats = (function () {
        function t(t, e, i) {
          var n = t.match(/\w+/)[0];
          return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length;
        }
        function e(t) {
          return t.match(/\w+/)[0].length;
        }
        return {
          d: function (t, e) {
            return t ? o.digits(t) : e.date;
          },
          dd: function (t, e) {
            return t ? 2 : o.lead(e.date);
          },
          ddd: function (t, i) {
            return t ? e(t) : this.settings.weekdaysShort[i.day];
          },
          dddd: function (t, i) {
            return t ? e(t) : this.settings.weekdaysFull[i.day];
          },
          m: function (t, e) {
            return t ? o.digits(t) : e.month + 1;
          },
          mm: function (t, e) {
            return t ? 2 : o.lead(e.month + 1);
          },
          mmm: function (e, i) {
            var n = this.settings.monthsShort;
            return e ? t(e, n, i) : n[i.month];
          },
          mmmm: function (e, i) {
            var n = this.settings.monthsFull;
            return e ? t(e, n, i) : n[i.month];
          },
          yy: function (t, e) {
            return t ? 2 : ("" + e.year).slice(2);
          },
          yyyy: function (t, e) {
            return t ? 4 : e.year;
          },
          toArray: function (t) {
            return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
          },
          toString: function (t, e) {
            var i = this;
            return i.formats
              .toArray(t)
              .map(function (t) {
                return (
                  o.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                );
              })
              .join("");
          },
        };
      })()),
      (i.prototype.isDateExact = function (t, i) {
        return (o.isInteger(t) && o.isInteger(i)) ||
          ("boolean" == typeof t && "boolean" == typeof i)
          ? t === i
          : (o.isDate(t) || e.isArray(t)) && (o.isDate(i) || e.isArray(i))
          ? this.create(t).pick === this.create(i).pick
          : !(!e.isPlainObject(t) || !e.isPlainObject(i)) &&
            this.isDateExact(t.from, i.from) &&
            this.isDateExact(t.to, i.to);
      }),
      (i.prototype.isDateOverlap = function (t, i) {
        var n = this.settings.firstDay ? 1 : 0;
        return o.isInteger(t) && (o.isDate(i) || e.isArray(i))
          ? (t = (t % 7) + n) === this.create(i).day + 1
          : o.isInteger(i) && (o.isDate(t) || e.isArray(t))
          ? (i = (i % 7) + n) === this.create(t).day + 1
          : !(!e.isPlainObject(t) || !e.isPlainObject(i)) &&
            this.overlapRanges(t, i);
      }),
      (i.prototype.flipEnable = function (t) {
        var e = this.item;
        e.enable = t || (-1 == e.enable ? 1 : -1);
      }),
      (i.prototype.deactivate = function (t, i) {
        var n = this,
          s = n.item.disable.slice(0);
        return (
          "flip" == i
            ? n.flipEnable()
            : !1 === i
            ? (n.flipEnable(1), (s = []))
            : !0 === i
            ? (n.flipEnable(-1), (s = []))
            : i.map(function (t) {
                for (var i, a = 0; a < s.length; a += 1)
                  if (n.isDateExact(t, s[a])) {
                    i = !0;
                    break;
                  }
                i ||
                  ((o.isInteger(t) ||
                    o.isDate(t) ||
                    e.isArray(t) ||
                    (e.isPlainObject(t) && t.from && t.to)) &&
                    s.push(t));
              }),
          s
        );
      }),
      (i.prototype.activate = function (t, i) {
        var n = this,
          s = n.item.disable,
          a = s.length;
        return (
          "flip" == i
            ? n.flipEnable()
            : !0 === i
            ? (n.flipEnable(1), (s = []))
            : !1 === i
            ? (n.flipEnable(-1), (s = []))
            : i.map(function (t) {
                var i, r, l, c;
                for (l = 0; l < a; l += 1) {
                  if (((r = s[l]), n.isDateExact(r, t))) {
                    (i = s[l] = null), (c = !0);
                    break;
                  }
                  if (n.isDateOverlap(r, t)) {
                    e.isPlainObject(t)
                      ? ((t.inverted = !0), (i = t))
                      : e.isArray(t)
                      ? (i = t)[3] || i.push("inverted")
                      : o.isDate(t) &&
                        (i = [
                          t.getFullYear(),
                          t.getMonth(),
                          t.getDate(),
                          "inverted",
                        ]);
                    break;
                  }
                }
                if (i) {
                  for (l = 0; l < a; l += 1)
                    if (n.isDateExact(s[l], t)) {
                      s[l] = null;
                      break;
                    }
                }
                if (c) {
                  for (l = 0; l < a; l += 1)
                    if (n.isDateOverlap(s[l], t)) {
                      s[l] = null;
                      break;
                    }
                }
                i && s.push(i);
              }),
          s.filter(function (t) {
            return null != t;
          })
        );
      }),
      (i.prototype.nodes = function (t) {
        var e,
          i,
          n = this,
          s = n.settings,
          a = n.item,
          r = a.now,
          l = a.select,
          c = a.highlight,
          d = a.view,
          u = a.disable,
          p = a.min,
          h = a.max,
          f =
            ((e = (
              s.showWeekdaysFull ? s.weekdaysFull : s.weekdaysLetter
            ).slice(0)),
            (i = s.weekdaysFull.slice(0)),
            s.firstDay && (e.push(e.shift()), i.push(i.shift())),
            o.node(
              "thead",
              o.node(
                "tr",
                o.group({
                  min: 0,
                  max: 6,
                  i: 1,
                  node: "th",
                  item: function (t) {
                    return [
                      e[t],
                      s.klass.weekdays,
                      'scope=col title="' + i[t] + '"',
                    ];
                  },
                })
              )
            )),
          v = function (t) {
            return o.node(
              "div",
              " ",
              s.klass["nav" + (t ? "Next" : "Prev")] +
                ((t && d.year >= h.year && d.month >= h.month) ||
                (!t && d.year <= p.year && d.month <= p.month)
                  ? " " + s.klass.navDisabled
                  : ""),
              "data-nav=" +
                (t || -1) +
                " " +
                o.ariaAttr({
                  role: "button",
                  controls: n.$node[0].id + "_table",
                }) +
                ' title="' +
                (t ? s.labelMonthNext : s.labelMonthPrev) +
                '"'
            );
          },
          g = function (e) {
            var i = s.showMonthsShort ? s.monthsShort : s.monthsFull;
            return (
              "short_months" == e && (i = s.monthsShort),
              s.selectMonths && null == e
                ? o.node(
                    "select",
                    o.group({
                      min: 0,
                      max: 11,
                      i: 1,
                      node: "option",
                      item: function (t) {
                        return [
                          i[t],
                          0,
                          "value=" +
                            t +
                            (d.month == t ? " selected" : "") +
                            ((d.year == p.year && t < p.month) ||
                            (d.year == h.year && t > h.month)
                              ? " disabled"
                              : ""),
                        ];
                      },
                    }),
                    s.klass.selectMonth + " browser-default",
                    (t ? "" : "disabled") +
                      " " +
                      o.ariaAttr({ controls: n.$node[0].id + "_table" }) +
                      ' title="' +
                      s.labelMonthSelect +
                      '"'
                  )
                : "short_months" == e
                ? null != l
                  ? o.node("div", i[l.month])
                  : o.node("div", i[d.month])
                : o.node("div", i[d.month], s.klass.month)
            );
          },
          m = function (e) {
            var i = d.year,
              a = !0 === s.selectYears ? 5 : ~~(s.selectYears / 2);
            if (a) {
              var r = p.year,
                l = h.year,
                c = i - a,
                u = i + a;
              if ((r > c && ((u += r - c), (c = r)), l < u)) {
                var f = c - r,
                  v = u - l;
                (c -= f > v ? v : f), (u = l);
              }
              if (s.selectYears && null == e)
                return o.node(
                  "select",
                  o.group({
                    min: c,
                    max: u,
                    i: 1,
                    node: "option",
                    item: function (t) {
                      return [t, 0, "value=" + t + (i == t ? " selected" : "")];
                    },
                  }),
                  s.klass.selectYear + " browser-default",
                  (t ? "" : "disabled") +
                    " " +
                    o.ariaAttr({ controls: n.$node[0].id + "_table" }) +
                    ' title="' +
                    s.labelYearSelect +
                    '"'
                );
            }
            return "raw" == e
              ? o.node("div", i)
              : o.node("div", i, s.klass.year);
          };
        return (
          (createDayLabel = function () {
            return null != l ? o.node("div", l.date) : o.node("div", r.date);
          }),
          (createWeekdayLabel = function () {
            var t;
            return (t = null != l ? l.day : r.day), s.weekdaysFull[t];
          }),
          o.node(
            "div",
            o.node("div", createWeekdayLabel(), "picker__weekday-display") +
              o.node("div", g("short_months"), s.klass.month_display) +
              o.node("div", createDayLabel(), s.klass.day_display) +
              o.node("div", m("raw"), s.klass.year_display),
            s.klass.date_display
          ) +
            o.node(
              "div",
              o.node(
                "div",
                (s.selectYears, g() + m() + v() + v(1)),
                s.klass.header
              ) +
                o.node(
                  "table",
                  f +
                    o.node(
                      "tbody",
                      o.group({
                        min: 0,
                        max: 5,
                        i: 1,
                        node: "tr",
                        item: function (t) {
                          var e =
                            s.firstDay &&
                            0 === n.create([d.year, d.month, 1]).day
                              ? -7
                              : 0;
                          return [
                            o.group({
                              min: 7 * t - d.day + e + 1,
                              max: function () {
                                return this.min + 7 - 1;
                              },
                              i: 1,
                              node: "td",
                              item: function (t) {
                                t = n.create([
                                  d.year,
                                  d.month,
                                  t + (s.firstDay ? 1 : 0),
                                ]);
                                var e,
                                  i = l && l.pick == t.pick,
                                  a = c && c.pick == t.pick,
                                  f =
                                    (u && n.disabled(t)) ||
                                    t.pick < p.pick ||
                                    t.pick > h.pick,
                                  v = o.trigger(n.formats.toString, n, [
                                    s.format,
                                    t,
                                  ]);
                                return [
                                  o.node(
                                    "div",
                                    t.date,
                                    ((e = [s.klass.day]).push(
                                      d.month == t.month
                                        ? s.klass.infocus
                                        : s.klass.outfocus
                                    ),
                                    r.pick == t.pick && e.push(s.klass.now),
                                    i && e.push(s.klass.selected),
                                    a && e.push(s.klass.highlighted),
                                    f && e.push(s.klass.disabled),
                                    e.join(" ")),
                                    "data-pick=" +
                                      t.pick +
                                      " " +
                                      o.ariaAttr({
                                        role: "gridcell",
                                        label: v,
                                        selected:
                                          !(!i || n.$node.val() !== v) || null,
                                        activedescendant: !!a || null,
                                        disabled: !!f || null,
                                      })
                                  ),
                                  "",
                                  o.ariaAttr({ role: "presentation" }),
                                ];
                              },
                            }),
                          ];
                        },
                      })
                    ),
                  s.klass.table,
                  'id="' +
                    n.$node[0].id +
                    '_table" ' +
                    o.ariaAttr({
                      role: "grid",
                      controls: n.$node[0].id,
                      readonly: !0,
                    })
                ),
              s.klass.calendar_container
            ) +
            o.node(
              "div",
              o.node(
                "button",
                s.today,
                "btn-flat picker__today",
                "type=button data-pick=" +
                  r.pick +
                  (t && !n.disabled(r) ? "" : " disabled") +
                  " " +
                  o.ariaAttr({ controls: n.$node[0].id })
              ) +
                o.node(
                  "button",
                  s.clear,
                  "btn-flat picker__clear",
                  "type=button data-clear=1" +
                    (t ? "" : " disabled") +
                    " " +
                    o.ariaAttr({ controls: n.$node[0].id })
                ) +
                o.node(
                  "button",
                  s.close,
                  "btn-flat picker__close",
                  "type=button data-close=true " +
                    (t ? "" : " disabled") +
                    " " +
                    o.ariaAttr({ controls: n.$node[0].id })
                ),
              s.klass.footer
            )
        );
      }),
      (i.defaults = {
        labelMonthNext: "Mes siguiente",
        labelMonthPrev: "Mes anterior",
        labelMonthSelect: "Seleccione un mes",
        labelYearSelect: "Seleccione un a\xf1o",
        monthsFull: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        monthsShort: [
          "En",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        weekdaysFull: [
          "Domingo",
          "Lunes",
          "Martes",
          "Mi\xe9rcoles",
          "Jueves",
          "Viernes",
          "S\xe1bado",
        ],
        weekdaysShort: ["D", "L", "M", "X", "J", "V", "S"],
        weekdaysLetter: ["S", "L", "M", "X", "J", "V", "S"],
        today: "Hoy",
        clear: "Limpiar",
        close: "Cerrar",
        format: "d mmmm, yyyy",
        klass: {
          table: (n = t.klasses().picker + "__") + "table",
          header: n + "header",
          date_display: n + "date-display",
          day_display: n + "day-display",
          month_display: n + "month-display",
          year_display: n + "year-display",
          calendar_container: n + "calendar-container",
          navPrev: n + "nav--prev",
          navNext: n + "nav--next",
          navDisabled: n + "nav--disabled",
          month: n + "month",
          year: n + "year",
          selectMonth: n + "select--month",
          selectYear: n + "select--year",
          weekdays: n + "weekday",
          day: n + "day",
          disabled: n + "day--disabled",
          selected: n + "day--selected",
          highlighted: n + "day--highlighted",
          now: n + "day--today",
          infocus: n + "day--infocus",
          outfocus: n + "day--outfocus",
          footer: n + "footer",
          buttonClear: n + "button--clear",
          buttonToday: n + "button--today",
          buttonClose: n + "button--close",
        },
      }),
      t.extend("pickadate", i);
  }),
  (function (t) {
    function e() {
      var e,
        i,
        n,
        o = +t(this).attr("data-length"),
        s = +t(this).val().length;
      t(this)
        .parent()
        .find('span[class="character-counter"]')
        .html(s + "/" + o),
        (e = s <= o),
        (n = (i = t(this)).hasClass("invalid")),
        e && n
          ? i.removeClass("invalid")
          : e || n || (i.removeClass("valid"), i.addClass("invalid"));
    }
    function i() {
      t(this).parent().find('span[class="character-counter"]').html("");
    }
    (t.fn.characterCounter = function () {
      return this.each(function () {
        var n,
          o,
          s = t(this);
        s.parent().find('span[class="character-counter"]').length ||
          (void 0 !== s.attr("data-length") &&
            (s.on("input", e),
            s.on("focus", e),
            s.on("blur", i),
            (o = (n = s).parent().find('span[class="character-counter"]'))
              .length ||
              ((o = t("<span/>")
                .addClass("character-counter")
                .css("float", "right")
                .css("font-size", "12px")
                .css("height", 1)),
              n.parent().append(o))));
      });
    }),
      t(document).ready(function () {
        t("input, textarea").characterCounter();
      });
  })(jQuery),
  (function (t) {
    var e = {
      init: function (e) {
        e = t.extend(
          {
            duration: 200,
            dist: -100,
            shift: 0,
            padding: 0,
            fullWidth: !1,
            indicators: !1,
            noWrap: !1,
            onCycleTo: null,
          },
          e
        );
        var i = Materialize.objectSelectorString(t(this));
        return this.each(function (n) {
          function o(t) {
            return t.targetTouches && t.targetTouches.length >= 1
              ? t.targetTouches[0].clientX
              : t.clientX;
          }
          function s(t) {
            return t.targetTouches && t.targetTouches.length >= 1
              ? t.targetTouches[0].clientY
              : t.clientY;
          }
          function a(t) {
            return t >= k ? t % k : t < 0 ? a(k + (t % k)) : t;
          }
          function r(i) {
            q.hasClass("scrolling") || q.addClass("scrolling"),
              null != j && window.clearTimeout(j),
              (j = window.setTimeout(function () {
                q.removeClass("scrolling");
              }, e.duration));
            var n,
              o,
              s,
              r,
              l,
              c,
              d,
              u = b;
            if (
              ((b = Math.floor(
                ((m = "number" == typeof i ? i : m) + w / 2) / w
              )),
              (l = (-(r = (s = m - b * w) < 0 ? 1 : -1) * s * 2) / w),
              (o = k >> 1),
              e.fullWidth
                ? (d = "translateX(0)")
                : ((d = "translateX(" + (q[0].clientWidth - v) / 2 + "px) "),
                  (d += "translateY(" + (q[0].clientHeight - g) / 2 + "px)")),
              W)
            ) {
              var p = b % k,
                h = D.find(".indicator-item.active");
              h.index() !== p &&
                (h.removeClass("active"),
                D.find(".indicator-item").eq(p).addClass("active"));
            }
            for (
              (!e.noWrap || (b >= 0 && b < k)) &&
                (t((c = f[a(b)])).hasClass("active") ||
                  (q.find(".carousel-item").removeClass("active"),
                  t(c).addClass("active")),
                (c.style[P] =
                  d +
                  " translateX(" +
                  -s / 2 +
                  "px) translateX(" +
                  r * e.shift * l * n +
                  "px) translateZ(" +
                  e.dist * l +
                  "px)"),
                (c.style.zIndex = 0),
                (tweenedOpacity = e.fullWidth ? 1 : 1 - 0.2 * l),
                (c.style.opacity = tweenedOpacity),
                (c.style.display = "block")),
                n = 1;
              n <= o;
              ++n
            )
              e.fullWidth
                ? ((zTranslation = e.dist),
                  (tweenedOpacity = n === o && s < 0 ? 1 - l : 1))
                : ((zTranslation = e.dist * (2 * n + l * r)),
                  (tweenedOpacity = 1 - 0.2 * (2 * n + l * r))),
                (!e.noWrap || b + n < k) &&
                  (((c = f[a(b + n)]).style[P] =
                    d +
                    " translateX(" +
                    (e.shift + (w * n - s) / 2) +
                    "px) translateZ(" +
                    zTranslation +
                    "px)"),
                  (c.style.zIndex = -n),
                  (c.style.opacity = tweenedOpacity),
                  (c.style.display = "block")),
                e.fullWidth
                  ? ((zTranslation = e.dist),
                    (tweenedOpacity = n === o && s > 0 ? 1 - l : 1))
                  : ((zTranslation = e.dist * (2 * n - l * r)),
                    (tweenedOpacity = 1 - 0.2 * (2 * n - l * r))),
                (!e.noWrap || b - n >= 0) &&
                  (((c = f[a(b - n)]).style[P] =
                    d +
                    " translateX(" +
                    (-e.shift + (-w * n - s) / 2) +
                    "px) translateZ(" +
                    zTranslation +
                    "px)"),
                  (c.style.zIndex = -n),
                  (c.style.opacity = tweenedOpacity),
                  (c.style.display = "block"));
            if (
              ((!e.noWrap || (b >= 0 && b < k)) &&
                (((c = f[a(b)]).style[P] =
                  d +
                  " translateX(" +
                  -s / 2 +
                  "px) translateX(" +
                  r * e.shift * l +
                  "px) translateZ(" +
                  e.dist * l +
                  "px)"),
                (c.style.zIndex = 0),
                (tweenedOpacity = e.fullWidth ? 1 : 1 - 0.2 * l),
                (c.style.opacity = tweenedOpacity),
                (c.style.display = "block")),
              u !== b && "function" == typeof e.onCycleTo)
            ) {
              var _ = q.find(".carousel-item").eq(a(b));
              e.onCycleTo.call(this, _, L);
            }
          }
          function l() {
            var t, e, i;
            (e = (t = Date.now()) - E),
              (E = t),
              (i = m - O),
              (O = m),
              (A = ((1e3 * i) / (1 + e)) * 0.8 + 0.2 * A);
          }
          function c() {
            var t, i;
            x &&
              ((i = x * Math.exp(-(t = Date.now() - E) / e.duration)) > 2 ||
              i < -2
                ? (r(S - i), requestAnimationFrame(c))
                : r(S));
          }
          function d(t) {
            var i = (b % k) - t;
            e.noWrap ||
              (i < 0
                ? Math.abs(i + k) < Math.abs(i) && (i += k)
                : i > 0 && Math.abs(i - k) < i && (i -= k)),
              i < 0
                ? q.trigger("carouselNext", [Math.abs(i)])
                : i > 0 && q.trigger("carouselPrev", [i]);
          }
          function u(t) {
            t.preventDefault(),
              (_ = !0),
              (L = !1),
              (z = !1),
              (C = o(t)),
              (T = s(t)),
              (A = x = 0),
              (O = m),
              (E = Date.now()),
              clearInterval(I),
              (I = setInterval(l, 100));
          }
          function p(t) {
            var e, i;
            if (_) {
              if (
                ((e = o(t)),
                (y = s(t)),
                (i = C - e),
                30 > Math.abs(T - y) && !z)
              )
                (i > 2 || i < -2) && ((L = !0), (C = e), r(m + i));
              else {
                if (L) return t.preventDefault(), t.stopPropagation(), !1;
                z = !0;
              }
            }
            if (L) return t.preventDefault(), t.stopPropagation(), !1;
          }
          function h(t) {
            if (_)
              return (
                (_ = !1),
                clearInterval(I),
                (S = m),
                (A > 10 || A < -10) && (S = m + (x = 0.9 * A)),
                (S = Math.round(S / w) * w),
                e.noWrap &&
                  (S >= w * (k - 1) ? (S = w * (k - 1)) : S < 0 && (S = 0)),
                (x = S - m),
                (E = Date.now()),
                requestAnimationFrame(c),
                L && (t.preventDefault(), t.stopPropagation()),
                !1
              );
          }
          var f,
            v,
            g,
            m,
            b,
            _,
            w,
            k,
            C,
            T,
            x,
            S,
            A,
            P,
            O,
            E,
            I,
            L,
            z,
            H = i + n,
            D = t('<ul class="indicators"></ul>'),
            j = null,
            q = t(this),
            W = q.attr("data-indicators") || e.indicators;
          if (
            (e.fullWidth &&
              ((e.dist = 0),
              (function () {
                var e = q.find(".carousel-item img").first();
                if (e.length)
                  e.prop("complete")
                    ? q.css("height", e.height())
                    : e.on("load", function () {
                        q.css("height", t(this).height());
                      });
                else {
                  var i = q.find(".carousel-item").first().height();
                  q.css("height", i);
                }
              })(),
              W && q.find(".carousel-fixed-item").addClass("with-indicators")),
            q.hasClass("initialized"))
          )
            return (
              t(window).trigger("resize"),
              t(this).trigger("carouselNext", [1e-6]),
              !0
            );
          q.addClass("initialized"),
            (_ = !1),
            (m = S = 0),
            (f = []),
            (v = q.find(".carousel-item").first().innerWidth()),
            (g = q.find(".carousel-item").first().innerHeight()),
            (w = 2 * v + e.padding),
            q.find(".carousel-item").each(function (e) {
              if ((f.push(t(this)[0]), W)) {
                var i = t('<li class="indicator-item"></li>');
                0 === e && i.addClass("active"),
                  i.click(function (e) {
                    e.stopPropagation(), d(t(this).index());
                  }),
                  D.append(i);
              }
            }),
            W && q.append(D),
            (k = f.length),
            (P = "transform"),
            ["webkit", "Moz", "O", "ms"].every(function (t) {
              var e = t + "Transform";
              return void 0 === document.body.style[e] || ((P = e), !1);
            }),
            t(window)
              .off("resize.carousel-" + H)
              .on("resize.carousel-" + H, function () {
                e.fullWidth
                  ? ((v = q.find(".carousel-item").first().innerWidth()),
                    (g = q.find(".carousel-item").first().innerHeight()),
                    (w = 2 * v + e.padding),
                    (S = m = 2 * b * v))
                  : r();
              }),
            void 0 !== window.ontouchstart &&
              (q[0].addEventListener("touchstart", u),
              q[0].addEventListener("touchmove", p),
              q[0].addEventListener("touchend", h)),
            q[0].addEventListener("mousedown", u),
            q[0].addEventListener("mousemove", p),
            q[0].addEventListener("mouseup", h),
            q[0].addEventListener("mouseleave", h),
            q[0].addEventListener("click", function (i) {
              if (L) return i.preventDefault(), i.stopPropagation(), !1;
              if (!e.fullWidth) {
                var n = t(i.target).closest(".carousel-item").index();
                0 != (b % k) - n && (i.preventDefault(), i.stopPropagation()),
                  d(n);
              }
            }),
            r(m),
            t(this).on("carouselNext", function (t, e) {
              void 0 === e && (e = 1),
                (S = w * Math.round(m / w) + w * e),
                m !== S &&
                  ((x = S - m), (E = Date.now()), requestAnimationFrame(c));
            }),
            t(this).on("carouselPrev", function (t, e) {
              void 0 === e && (e = 1),
                (S = w * Math.round(m / w) - w * e),
                m !== S &&
                  ((x = S - m), (E = Date.now()), requestAnimationFrame(c));
            }),
            t(this).on("carouselSet", function (t, e) {
              void 0 === e && (e = 0), d(e);
            });
        });
      },
      next: function (e) {
        t(this).trigger("carouselNext", [e]);
      },
      prev: function (e) {
        t(this).trigger("carouselPrev", [e]);
      },
      set: function (e) {
        t(this).trigger("carouselSet", [e]);
      },
    };
    t.fn.carousel = function (i) {
      return e[i]
        ? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof i && i
        ? void t.error("Method " + i + " does not exist on jQuery.carousel")
        : e.init.apply(this, arguments);
    };
  })(jQuery),
  (function (t) {
    var e = {
      init: function (e) {
        return this.each(function () {
          var i = t("#" + t(this).attr("data-activates")),
            n = (t("body"), t(this)),
            o = n.parent(".tap-target-wrapper"),
            s = o.find(".tap-target-wave"),
            a = o.find(".tap-target-origin"),
            r = n.find(".tap-target-content");
          o.length ||
            (o = n.wrap(t('<div class="tap-target-wrapper"></div>')).parent()),
            r.length ||
              ((r = t('<div class="tap-target-content"></div>')), n.append(r)),
            s.length ||
              ((s = t('<div class="tap-target-wave"></div>')),
              a.length ||
                ((a = i.clone(!0, !0)).addClass("tap-target-origin"),
                a.removeAttr("id"),
                a.removeAttr("style"),
                s.append(a)),
              o.append(s));
          var l = function () {
              o.is(".open") &&
                (o.removeClass("open"),
                a.off("click.tapTarget"),
                t(document).off("click.tapTarget"),
                t(window).off("resize.tapTarget"));
            },
            c = function () {
              var e = "fixed" === i.css("position");
              if (!e)
                for (
                  var a = i.parents(), l = 0;
                  l < a.length && !(e = "fixed" == t(a[l]).css("position"));
                  l++
                );
              var c = i.outerWidth(),
                d = i.outerHeight(),
                u = e
                  ? i.offset().top - t(document).scrollTop()
                  : i.offset().top,
                p = e
                  ? i.offset().left - t(document).scrollLeft()
                  : i.offset().left,
                h = t(window).width(),
                f = t(window).height(),
                v = h / 2,
                g = f / 2,
                m = p <= v,
                b = u <= g,
                _ = u > g,
                w = p >= 0.25 * h && p <= 0.75 * h,
                k = n.outerWidth(),
                C = n.outerHeight(),
                T = u + d / 2 - C / 2,
                x = p + c / 2 - k / 2,
                S = e ? "fixed" : "absolute",
                A = 2 * c,
                P = A,
                O = {};
              (O.top = b ? T : ""),
                (O.right = p > v ? h - x - k : ""),
                (O.bottom = _ ? f - T - C : ""),
                (O.left = m ? x : ""),
                (O.position = S),
                o.css(O),
                r.css({
                  width: w ? k : k / 2 + c,
                  height: C / 2,
                  top: b ? C / 2 : 0,
                  right: 0,
                  bottom: 0,
                  left: m && !w ? k / 2 - c : 0,
                  padding: c,
                  verticalAlign: _ ? "bottom" : "top",
                }),
                s.css({
                  top: C / 2 - P / 2,
                  left: k / 2 - A / 2,
                  width: A,
                  height: P,
                });
            };
          "open" == e &&
            (c(),
            o.is(".open") ||
              (o.addClass("open"),
              setTimeout(function () {
                a.off("click.tapTarget").on("click.tapTarget", function (t) {
                  l(), a.off("click.tapTarget");
                }),
                  t(document)
                    .off("click.tapTarget")
                    .on("click.tapTarget", function (e) {
                      l(), t(document).off("click.tapTarget");
                    });
                var e = Materialize.throttle(function () {
                  c();
                }, 200);
                t(window).off("resize.tapTarget").on("resize.tapTarget", e);
              }, 0))),
            "close" == e && l();
        });
      },
      open: function () {},
      close: function () {},
    };
    t.fn.tapTarget = function (i) {
      if (e[i] || "object" == typeof i) return e.init.apply(this, arguments);
      t.error("Method " + i + " does not exist on jQuery.tap-target");
    };
  })(jQuery),
  console.log("Footer = JS : MATERIALIZE"),
  jQuery(document).ready(function (t) {
    function e() {
      t(".cd-nav-trigger").removeClass("nav-is-visible"),
        t(".cd-main-header").removeClass("nav-is-visible"),
        t(".cd-primary-nav").removeClass("nav-is-visible"),
        t(".has-children ul").addClass("is-hidden"),
        t(".has-children a").removeClass("selected"),
        t(".moves-out").removeClass("moves-out"),
        t(".cd-main-content")
          .removeClass("nav-is-visible")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              t("body").removeClass("overflow-hidden");
            }
          );
    }
    function i(e) {
      "close" == e
        ? (t(".cd-search").removeClass("is-visible"),
          t(".cd-search-trigger").removeClass("search-is-visible"),
          t(".cd-overlay").removeClass("search-is-visible"))
        : (t(".cd-search").toggleClass("is-visible"),
          t(".cd-search-trigger").toggleClass("search-is-visible"),
          t(".cd-overlay").toggleClass("search-is-visible"),
          t(window).width() > 1200 &&
            t(".cd-search").hasClass("is-visible") &&
            t(".cd-search").find('input[type="search"]').focus(),
          t(".cd-search").hasClass("is-visible")
            ? t(".cd-overlay").addClass("is-visible")
            : t(".cd-overlay").removeClass("is-visible"));
    }
    function n() {
      var t = window,
        e = "inner";
      return (
        "innerWidth" in window ||
          ((e = "client"), (t = document.documentElement || document.body)),
        t[e + "Width"] >= 1200
      );
    }
    function o() {
      var e = t(".cd-nav");
      n()
        ? (e.detach(), e.insertBefore(".cd-header-buttons"))
        : (e.detach(), e.insertAfter(".cd-main-content"));
    }
    o(),
      t(window).on("resize", function () {
        window.requestAnimationFrame
          ? window.requestAnimationFrame(o)
          : setTimeout(o, 300);
      }),
      t(".cd-nav-trigger").on("click", function (n) {
        n.preventDefault(),
          t(".cd-main-content").hasClass("nav-is-visible")
            ? (e(), t(".cd-overlay").removeClass("is-visible"))
            : (t(this).addClass("nav-is-visible"),
              t(".cd-primary-nav").addClass("nav-is-visible"),
              t(".cd-main-header").addClass("nav-is-visible"),
              t(".cd-main-content")
                .addClass("nav-is-visible")
                .one(
                  "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                  function () {
                    t("body").addClass("overflow-hidden");
                  }
                ),
              i("close"),
              t(".cd-overlay").addClass("is-visible"));
      }),
      t(".cd-search-trigger").on("click", function (t) {
        t.preventDefault(), i(), e();
      }),
      t(".cd-overlay").on("swiperight", function () {
        t(".cd-primary-nav").hasClass("nav-is-visible") &&
          (e(), t(".cd-overlay").removeClass("is-visible"));
      }),
      t(".nav-on-left .cd-overlay").on("swipeleft", function () {
        t(".cd-primary-nav").hasClass("nav-is-visible") &&
          (e(), t(".cd-overlay").removeClass("is-visible"));
      }),
      t(".cd-overlay").on("click", function () {
        e(), i("close"), t(".cd-overlay").removeClass("is-visible");
      }),
      t(".cd-primary-nav")
        .children(".has-children")
        .children("a")
        .on("click", function (t) {
          t.preventDefault();
        }),
      t(".has-children")
        .children("a")
        .on("click", function (e) {
          n() || e.preventDefault();
          var o = t(this);
          o.next("ul").hasClass("is-hidden")
            ? (o
                .addClass("selected")
                .next("ul")
                .removeClass("is-hidden")
                .end()
                .parent(".has-children")
                .parent("ul")
                .addClass("moves-out"),
              o
                .parent(".has-children")
                .siblings(".has-children")
                .children("ul")
                .addClass("is-hidden")
                .end()
                .children("a")
                .removeClass("selected"),
              t(".cd-overlay").addClass("is-visible"))
            : (o
                .removeClass("selected")
                .next("ul")
                .addClass("is-hidden")
                .end()
                .parent(".has-children")
                .parent("ul")
                .removeClass("moves-out"),
              t(".cd-overlay").removeClass("is-visible")),
            i("close");
        }),
      t(".go-back").on("click", function () {
        t(this)
          .parent("ul")
          .addClass("is-hidden")
          .parent(".has-children")
          .parent("ul")
          .removeClass("moves-out");
      });
  }),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    "use strict";
    var e,
      i = window.Slick || {};
    ((i =
      ((e = 0),
      function (i, n) {
        var o,
          s = this;
        (s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<div class="slid-prev"><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292875 7.29292C-0.097625 7.68342 -0.097625 8.31662 0.292875 8.70712L6.65688 15.0711C7.04738 15.4616 7.68048 15.4616 8.07108 15.0711C8.46158 14.6805 8.46158 14.0474 8.07108 13.6569L2.41417 8.00002L8.07108 2.34312C8.46158 1.95262 8.46158 1.31952 8.07108 0.928922C7.68048 0.538422 7.04738 0.538422 6.65688 0.928922L0.292875 7.29292ZM0.999975 9.00002H24V7.00002H0.999975V9.00002Z" fill="#7A7C7D"/></svg></div>',
          nextArrow:
            '<div class="slid-next"><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7071 8.70712C24.0976 8.31662 24.0976 7.68342 23.7071 7.29292L17.3431 0.928922C16.9526 0.538422 16.3195 0.538422 15.9289 0.928922C15.5384 1.31952 15.5384 1.95262 15.9289 2.34312L21.5858 8.00002L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70712ZM0 9.00002H23V7.00002H0V9.00002Z" fill="#7A7C7D"/></svg></div>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(s, s.initials),
          (s.activeBreakpoint = null),
          (s.animType = null),
          (s.animProp = null),
          (s.breakpoints = []),
          (s.breakpointSettings = []),
          (s.cssTransitions = !1),
          (s.focussed = !1),
          (s.interrupted = !1),
          (s.hidden = "hidden"),
          (s.paused = !0),
          (s.positionProp = null),
          (s.respondTo = null),
          (s.rowCount = 1),
          (s.shouldClick = !0),
          (s.$slider = t(i)),
          (s.$slidesCache = null),
          (s.transformType = null),
          (s.transitionType = null),
          (s.visibilityChange = "visibilitychange"),
          (s.windowWidth = 0),
          (s.windowTimer = null),
          (o = t(i).data("slick") || {}),
          (s.options = t.extend({}, s.defaults, n, o)),
          (s.currentSlide = s.options.initialSlide),
          (s.originalSettings = s.options),
          void 0 !== document.mozHidden
            ? ((s.hidden = "mozHidden"),
              (s.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((s.hidden = "webkitHidden"),
              (s.visibilityChange = "webkitvisibilitychange")),
          (s.autoPlay = t.proxy(s.autoPlay, s)),
          (s.autoPlayClear = t.proxy(s.autoPlayClear, s)),
          (s.autoPlayIterator = t.proxy(s.autoPlayIterator, s)),
          (s.changeSlide = t.proxy(s.changeSlide, s)),
          (s.clickHandler = t.proxy(s.clickHandler, s)),
          (s.selectHandler = t.proxy(s.selectHandler, s)),
          (s.setPosition = t.proxy(s.setPosition, s)),
          (s.swipeHandler = t.proxy(s.swipeHandler, s)),
          (s.dragHandler = t.proxy(s.dragHandler, s)),
          (s.keyHandler = t.proxy(s.keyHandler, s)),
          (s.instanceUid = e++),
          (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          s.registerBreakpoints(),
          s.init(!0);
      })).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (i.prototype.addSlide = i.prototype.slickAdd =
        function (e, i, n) {
          var o = this;
          if ("boolean" == typeof i) (n = i), (i = null);
          else if (0 > i || i >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof i
              ? 0 === i && 0 === o.$slides.length
                ? t(e).appendTo(o.$slideTrack)
                : n
                ? t(e).insertBefore(o.$slides.eq(i))
                : t(e).insertAfter(o.$slides.eq(i))
              : !0 === n
              ? t(e).prependTo(o.$slideTrack)
              : t(e).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (e, i) {
              t(i).attr("data-slick-index", e);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (i.prototype.animateHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.animate({ height: t }, this.options.speed);
        }
      }),
      (i.prototype.animateSlide = function (e, i) {
        var n = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: e },
                  o.options.speed,
                  o.options.easing,
                  i
                )
              : o.$slideTrack.animate(
                  { top: e },
                  o.options.speed,
                  o.options.easing,
                  i
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              t({ animStart: o.currentLeft }).animate(
                { animStart: e },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === o.options.vertical
                        ? ((n[o.animType] = "translate(" + t + "px, 0px)"),
                          o.$slideTrack.css(n))
                        : ((n[o.animType] = "translate(0px," + t + "px)"),
                          o.$slideTrack.css(n));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (e = Math.ceil(e)),
              !1 === o.options.vertical
                ? (n[o.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[o.animType] = "translate3d(0px," + e + "px, 0px)"),
              o.$slideTrack.css(n),
              i &&
                setTimeout(function () {
                  o.disableTransition(), i.call();
                }, o.options.speed));
      }),
      (i.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (i.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (i.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade
          ? (i[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (i[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (i.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (i.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (i.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (i.prototype.buildDots = function () {
        var e,
          i,
          n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (
            n.$slider.addClass("slick-dotted"),
              i = t("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            i.append(
              t("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = i.appendTo(n.options.appendDots)),
            n.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (i.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, i) {
            t(i)
              .attr("data-slick-index", e)
              .data("originalStyling", t(i).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) &&
            (e.options.slidesToScroll = 1),
          t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (i.prototype.buildRows = function () {
        var t, e, i, n, o, s, a;
        if (
          ((n = document.createDocumentFragment()),
          (s = this.$slider.children()),
          this.options.rows > 1)
        ) {
          for (
            a = this.options.slidesPerRow * this.options.rows,
              o = Math.ceil(s.length / a),
              t = 0;
            o > t;
            t++
          ) {
            var r = document.createElement("div");
            for (e = 0; e < this.options.rows; e++) {
              var l = document.createElement("div");
              for (i = 0; i < this.options.slidesPerRow; i++) {
                var c = t * a + (e * this.options.slidesPerRow + i);
                s.get(c) && l.appendChild(s.get(c));
              }
              r.appendChild(l);
            }
            n.appendChild(r);
          }
          this.$slider.empty().append(n),
            this.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (i.prototype.checkResponsive = function (e, i) {
        var n,
          o,
          s,
          a = this,
          r = !1,
          l = a.$slider.width(),
          c = window.innerWidth || t(window).width();
        if (
          ("window" === a.respondTo
            ? (s = c)
            : "slider" === a.respondTo
            ? (s = l)
            : "min" === a.respondTo && (s = Math.min(c, l)),
          a.options.responsive &&
            a.options.responsive.length &&
            null !== a.options.responsive)
        ) {
          for (n in ((o = null), a.breakpoints))
            a.breakpoints.hasOwnProperty(n) &&
              (!1 === a.originalSettings.mobileFirst
                ? s < a.breakpoints[n] && (o = a.breakpoints[n])
                : s > a.breakpoints[n] && (o = a.breakpoints[n]));
          null !== o
            ? null !== a.activeBreakpoint
              ? (o !== a.activeBreakpoint || i) &&
                ((a.activeBreakpoint = o),
                "unslick" === a.breakpointSettings[o]
                  ? a.unslick(o)
                  : ((a.options = t.extend(
                      {},
                      a.originalSettings,
                      a.breakpointSettings[o]
                    )),
                    !0 === e && (a.currentSlide = a.options.initialSlide),
                    a.refresh(e)),
                (r = o))
              : ((a.activeBreakpoint = o),
                "unslick" === a.breakpointSettings[o]
                  ? a.unslick(o)
                  : ((a.options = t.extend(
                      {},
                      a.originalSettings,
                      a.breakpointSettings[o]
                    )),
                    !0 === e && (a.currentSlide = a.options.initialSlide),
                    a.refresh(e)),
                (r = o))
            : null !== a.activeBreakpoint &&
              ((a.activeBreakpoint = null),
              (a.options = a.originalSettings),
              !0 === e && (a.currentSlide = a.options.initialSlide),
              a.refresh(e),
              (r = o)),
            e || !1 === r || a.$slider.trigger("breakpoint", [a, r]);
        }
      }),
      (i.prototype.changeSlide = function (e, i) {
        var n,
          o,
          s = t(e.currentTarget);
        switch (
          (s.is("a") && e.preventDefault(),
          s.is("li") || (s = s.closest("li")),
          (n =
            this.slideCount % this.options.slidesToScroll != 0
              ? 0
              : (this.slideCount - this.currentSlide) %
                this.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (o =
              0 === n
                ? this.options.slidesToScroll
                : this.options.slidesToShow - n),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide - o, !1, i);
            break;
          case "next":
            (o = 0 === n ? this.options.slidesToScroll : n),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide + o, !1, i);
            break;
          case "index":
            var a =
              0 === e.data.index
                ? 0
                : e.data.index || s.index() * this.options.slidesToScroll;
            this.slideHandler(this.checkNavigable(a), !1, i),
              s.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (i.prototype.checkNavigable = function (t) {
        var e, i;
        if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break;
            }
            i = e[n];
          }
        return t;
      }),
      (i.prototype.cleanUpEvents = function () {
        this.options.dots &&
          null !== this.$dots &&
          t("li", this.$dots)
            .off("click.slick", this.changeSlide)
            .off("mouseenter.slick", t.proxy(this.interrupt, this, !0))
            .off("mouseleave.slick", t.proxy(this.interrupt, this, !1)),
          this.$slider.off("focus.slick blur.slick"),
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow &&
              this.$prevArrow.off("click.slick", this.changeSlide),
            this.$nextArrow &&
              this.$nextArrow.off("click.slick", this.changeSlide)),
          this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
          this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
          this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
          this.$list.off(
            "touchcancel.slick mouseleave.slick",
            this.swipeHandler
          ),
          this.$list.off("click.slick", this.clickHandler),
          t(document).off(this.visibilityChange, this.visibility),
          this.cleanUpSlideEvents(),
          !0 === this.options.accessibility &&
            this.$list.off("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .off("click.slick", this.selectHandler),
          t(window).off(
            "orientationchange.slick.slick-" + this.instanceUid,
            this.orientationChange
          ),
          t(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
          t("[draggable!=true]", this.$slideTrack).off(
            "dragstart",
            this.preventDefault
          ),
          t(window).off(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          t(document).off(
            "ready.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (i.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (i.prototype.cleanUpRows = function () {
        var t;
        this.options.rows > 1 &&
          ((t = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(t));
      }),
      (i.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (i.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t(".slick-cloned", i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                t(this).attr("style", t(this).data("originalStyling"));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass("slick-slider"),
          i.$slider.removeClass("slick-initialized"),
          i.$slider.removeClass("slick-dotted"),
          (i.unslicked = !0),
          e || i.$slider.trigger("destroy", [i]);
      }),
      (i.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (i.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (i.prototype.fadeSlideOut = function (t) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(t),
            this.$slides
              .eq(t)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (i.prototype.filterSlides = i.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            ((e.$slidesCache = e.$slides),
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (i.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                ((e.focussed = n.is(":focus")), e.autoPlay());
            }, 0);
          });
      }),
      (i.prototype.getCurrent = i.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (i.prototype.getDotCount = function () {
        var t = 0,
          e = 0,
          i = 0;
        if (!0 === this.options.infinite)
          for (; t < this.slideCount; )
            ++i,
              (t = e + this.options.slidesToScroll),
              (e +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else if (!0 === this.options.centerMode) i = this.slideCount;
        else if (this.options.asNavFor)
          for (; t < this.slideCount; )
            ++i,
              (t = e + this.options.slidesToScroll),
              (e +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (this.slideCount - this.options.slidesToShow) /
                this.options.slidesToScroll
            );
        return i - 1;
      }),
      (i.prototype.getLeft = function (t) {
        var e,
          i,
          n,
          o = this,
          s = 0;
        return (
          (o.slideOffset = 0),
          (i = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = -(o.slideWidth * o.options.slidesToShow * 1)),
                (s = -(i * o.options.slidesToShow * 1))),
              o.slideCount % o.options.slidesToScroll != 0 &&
                t + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (t > o.slideCount
                  ? ((o.slideOffset = -(
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      o.slideWidth *
                      1
                    )),
                    (s = -(
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      i *
                      1
                    )))
                  : ((o.slideOffset = -(
                      (o.slideCount % o.options.slidesToScroll) *
                      o.slideWidth *
                      1
                    )),
                    (s = -(
                      (o.slideCount % o.options.slidesToScroll) *
                      i *
                      1
                    )))))
            : t + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (s = (t + o.options.slidesToShow - o.slideCount) * i)),
          o.slideCount <= o.options.slidesToShow &&
            ((o.slideOffset = 0), (s = 0)),
          !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (e =
            !1 === o.options.vertical
              ? -(t * o.slideWidth * 1) + o.slideOffset
              : -(t * i * 1) + s),
          !0 === o.options.variableWidth &&
            ((n =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(t)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(t + o.options.slidesToShow)),
            (e =
              !0 === o.options.rtl
                ? n[0]
                  ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === o.options.centerMode &&
              ((n =
                o.slideCount <= o.options.slidesToShow ||
                !1 === o.options.infinite
                  ? o.$slideTrack.children(".slick-slide").eq(t)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(t + o.options.slidesToShow + 1)),
              (e =
                !0 === o.options.rtl
                  ? n[0]
                    ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (e += (o.$list.width() - n.outerWidth()) / 2))),
          e
        );
      }),
      (i.prototype.getOption = i.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (i.prototype.getNavigableIndexes = function () {
        var t,
          e = 0,
          i = 0,
          n = [];
        for (
          !1 === this.options.infinite
            ? (t = this.slideCount)
            : ((e = -1 * this.options.slidesToScroll),
              (i = -1 * this.options.slidesToScroll),
              (t = 2 * this.slideCount));
          t > e;

        )
          n.push(e),
            (e = i + this.options.slidesToScroll),
            (i +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
        return n;
      }),
      (i.prototype.getSlick = function () {
        return this;
      }),
      (i.prototype.getSlideCount = function () {
        var e,
          i,
          n = this;
        return (
          (i =
            !0 === n.options.centerMode
              ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
              : 0),
          !0 === n.options.swipeToSlide
            ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
                return s.offsetLeft - i + t(s).outerWidth() / 2 >
                  -1 * n.swipeLeft
                  ? ((e = s), !1)
                  : void 0;
              }),
              Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1)
            : n.options.slidesToScroll
        );
      }),
      (i.prototype.goTo = i.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (i.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") ||
          (t(i.$slider).addClass("slick-initialized"),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger("init", [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (i.prototype.initADA = function () {
        var e = this;
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          e.$slideTrack.attr("role", "listbox"),
          e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            t(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + e.instanceUid + i,
            });
          }),
          null !== e.$dots &&
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (i) {
                t(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + e.instanceUid + i,
                  id: "slick-slide" + e.instanceUid + i,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          e.activateADA();
      }),
      (i.prototype.initArrowEvents = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, this.changeSlide),
          this.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, this.changeSlide));
      }),
      (i.prototype.initDotEvents = function () {
        !0 === this.options.dots &&
          this.slideCount > this.options.slidesToShow &&
          t("li", this.$dots).on(
            "click.slick",
            { message: "index" },
            this.changeSlide
          ),
          !0 === this.options.dots &&
            !0 === this.options.pauseOnDotsHover &&
            t("li", this.$dots)
              .on("mouseenter.slick", t.proxy(this.interrupt, this, !0))
              .on("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (i.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)));
      }),
      (i.prototype.initializeEvents = function () {
        this.initArrowEvents(),
          this.initDotEvents(),
          this.initSlideEvents(),
          this.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on("click.slick", this.clickHandler),
          t(document).on(this.visibilityChange, t.proxy(this.visibility, this)),
          !0 === this.options.accessibility &&
            this.$list.on("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler),
          t(window).on(
            "orientationchange.slick.slick-" + this.instanceUid,
            t.proxy(this.orientationChange, this)
          ),
          t(window).on(
            "resize.slick.slick-" + this.instanceUid,
            t.proxy(this.resize, this)
          ),
          t("[draggable!=true]", this.$slideTrack).on(
            "dragstart",
            this.preventDefault
          ),
          t(window).on(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          t(document).on(
            "ready.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (i.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (i.prototype.keyHandler = function (t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === t.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (i.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
              i = t(this).attr("data-lazy"),
              n = document.createElement("img");
            (n.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy").removeClass("slick-loading");
                }),
                  o.$slider.trigger("lazyLoaded", [o, e, i]);
              });
            }),
              (n.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  o.$slider.trigger("lazyLoadError", [o, e, i]);
              }),
              (n.src = i);
          });
        }
        var i,
          n,
          o = this;
        !0 === o.options.centerMode
          ? !0 === o.options.infinite
            ? (n =
                (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                o.options.slidesToShow +
                2)
            : ((i = Math.max(
                0,
                o.currentSlide - (o.options.slidesToShow / 2 + 1)
              )),
              (n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
          : ((n = Math.ceil(
              (i = o.options.infinite
                ? o.options.slidesToShow + o.currentSlide
                : o.currentSlide) + o.options.slidesToShow
            )),
            !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)),
          e(o.$slider.find(".slick-slide").slice(i, n)),
          o.slideCount <= o.options.slidesToShow
            ? e(o.$slider.find(".slick-slide"))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? e(
                o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
              )
            : 0 === o.currentSlide &&
              e(
                o.$slider
                  .find(".slick-cloned")
                  .slice(-1 * o.options.slidesToShow)
              );
      }),
      (i.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (i.prototype.next = i.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (i.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (i.prototype.pause = i.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (i.prototype.play = i.prototype.slickPlay =
        function () {
          var t = this;
          t.autoPlay(),
            (t.options.autoplay = !0),
            (t.paused = !1),
            (t.focussed = !1),
            (t.interrupted = !1);
        }),
      (i.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked ||
          (e.$slider.trigger("afterChange", [e, t]),
          (e.animating = !1),
          e.setPosition(),
          (e.swipeLeft = null),
          e.options.autoplay && e.autoPlay(),
          !0 === e.options.accessibility && e.initADA());
      }),
      (i.prototype.prev = i.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (i.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (i.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i,
          n,
          o,
          s = this,
          a = t("img[data-lazy]", s.$slider);
        a.length
          ? ((n = (i = a.first()).attr("data-lazy")),
            ((o = document.createElement("img")).onload = function () {
              i
                .attr("src", n)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                !0 === s.options.adaptiveHeight && s.setPosition(),
                s.$slider.trigger("lazyLoaded", [s, i, n]),
                s.progressiveLazyLoad();
            }),
            (o.onerror = function () {
              3 > e
                ? setTimeout(function () {
                    s.progressiveLazyLoad(e + 1);
                  }, 500)
                : (i
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, i, n]),
                  s.progressiveLazyLoad());
            }),
            (o.src = n))
          : s.$slider.trigger("allImagesLoaded", [s]);
      }),
      (i.prototype.refresh = function (e) {
        var i,
          n,
          o = this;
        (n = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (i = o.currentSlide),
          o.destroy(!0),
          t.extend(o, o.initials, { currentSlide: i }),
          o.init(),
          e || o.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (i.prototype.registerBreakpoints = function () {
        var e,
          i,
          n,
          o = this,
          s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
          for (e in ((o.respondTo = o.options.respondTo || "window"), s))
            if (
              ((n = o.breakpoints.length - 1),
              (i = s[e].breakpoint),
              s.hasOwnProperty(e))
            ) {
              for (; n >= 0; )
                o.breakpoints[n] &&
                  o.breakpoints[n] === i &&
                  o.breakpoints.splice(n, 1),
                  n--;
              o.breakpoints.push(i), (o.breakpointSettings[i] = s[e].settings);
            }
          o.breakpoints.sort(function (t, e) {
            return o.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (i.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (i.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (i.prototype.removeSlide = i.prototype.slickRemove =
        function (t, e, i) {
          var n = this;
          return (
            (t =
              "boolean" == typeof t
                ? !0 === (e = t)
                  ? 0
                  : n.slideCount - 1
                : !0 === e
                ? --t
                : t),
            !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) &&
              (n.unload(),
              !0 === i
                ? n.$slideTrack.children().remove()
                : n.$slideTrack.children(this.options.slide).eq(t).remove(),
              (n.$slides = n.$slideTrack.children(this.options.slide)),
              n.$slideTrack.children(this.options.slide).detach(),
              n.$slideTrack.append(n.$slides),
              (n.$slidesCache = n.$slides),
              void n.reinit())
          );
        }),
      (i.prototype.setCSS = function (t) {
        var e,
          i,
          n = this,
          o = {};
        !0 === n.options.rtl && (t = -t),
          (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (o[n.positionProp] = t),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(o)
            : ((o = {}),
              !1 === n.cssTransitions
                ? ((o[n.animType] = "translate(" + e + ", " + i + ")"),
                  n.$slideTrack.css(o))
                : ((o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
                  n.$slideTrack.css(o)));
      }),
      (i.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (i.prototype.setFade = function () {
        var e,
          i = this;
        i.$slides.each(function (n, o) {
          (e = -(i.slideWidth * n * 1)),
            !0 === i.options.rtl
              ? t(o).css({
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : t(o).css({
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (i.prototype.setHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.css("height", t);
        }
      }),
      (i.prototype.setOption = i.prototype.slickSetOption =
        function () {
          var e,
            i,
            n,
            o,
            s,
            a = this,
            r = !1;
          if (
            ("object" === t.type(arguments[0])
              ? ((n = arguments[0]), (r = arguments[1]), (s = "multiple"))
              : "string" === t.type(arguments[0]) &&
                ((n = arguments[0]),
                (o = arguments[1]),
                (r = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === t.type(arguments[1])
                  ? (s = "responsive")
                  : void 0 !== arguments[1] && (s = "single")),
            "single" === s)
          )
            a.options[n] = o;
          else if ("multiple" === s)
            t.each(n, function (t, e) {
              a.options[t] = e;
            });
          else if ("responsive" === s)
            for (i in o)
              if ("array" !== t.type(a.options.responsive))
                a.options.responsive = [o[i]];
              else {
                for (e = a.options.responsive.length - 1; e >= 0; )
                  a.options.responsive[e].breakpoint === o[i].breakpoint &&
                    a.options.responsive.splice(e, 1),
                    e--;
                a.options.responsive.push(o[i]);
              }
          r && (a.unload(), a.reinit());
        }),
      (i.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (i.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 !== e.WebkitTransition ||
            void 0 !== e.MozTransition ||
            void 0 !== e.msTransition) &&
            !0 === t.options.useCSS &&
            (t.cssTransitions = !0),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (i.prototype.setSlideClasses = function (t) {
        var e, i, n, o;
        (i = this.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          this.$slides.eq(t).addClass("slick-current"),
          !0 === this.options.centerMode
            ? ((e = Math.floor(this.options.slidesToShow / 2)),
              !0 === this.options.infinite &&
                (t >= e && t <= this.slideCount - 1 - e
                  ? this.$slides
                      .slice(t - e, t + e + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((n = this.options.slidesToShow + t),
                    i
                      .slice(n - e + 1, n + e + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === t
                  ? i
                      .eq(i.length - 1 - this.options.slidesToShow)
                      .addClass("slick-center")
                  : t === this.slideCount - 1 &&
                    i.eq(this.options.slidesToShow).addClass("slick-center")),
              this.$slides.eq(t).addClass("slick-center"))
            : t >= 0 && t <= this.slideCount - this.options.slidesToShow
            ? this.$slides
                .slice(t, t + this.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= this.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = this.slideCount % this.options.slidesToShow),
              (n =
                !0 === this.options.infinite
                  ? this.options.slidesToShow + t
                  : t),
              this.options.slidesToShow == this.options.slidesToScroll &&
              this.slideCount - t < this.options.slidesToShow
                ? i
                    .slice(n - (this.options.slidesToShow - o), n + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(n, n + this.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === this.options.lazyLoad && this.lazyLoad();
      }),
      (i.prototype.setupInfinite = function () {
        var e,
          i,
          n,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((i = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            n =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              e = o.slideCount;
            e > o.slideCount - n;
            e -= 1
          )
            (i = e - 1),
              t(o.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; n > e; e += 1)
            (i = e),
              t(o.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              t(this).attr("id", "");
            });
        }
      }),
      (i.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (i.prototype.selectHandler = function (e) {
        var i = t(e.target).is(".slick-slide")
            ? t(e.target)
            : t(e.target).parents(".slick-slide"),
          n = parseInt(i.attr("data-slick-index"));
        return (
          n || (n = 0),
          this.slideCount <= this.options.slidesToShow
            ? (this.setSlideClasses(n), void this.asNavFor(n))
            : void this.slideHandler(n)
        );
      }),
      (i.prototype.slideHandler = function (t, e, i) {
        var n,
          o,
          s,
          a,
          r,
          l = null,
          c = this;
        return (
          (e = e || !1),
          (!0 === c.animating && !0 === c.options.waitForAnimate) ||
          (!0 === c.options.fade && c.currentSlide === t) ||
          c.slideCount <= c.options.slidesToShow
            ? void 0
            : (!1 === e && c.asNavFor(t),
              (n = t),
              (l = c.getLeft(n)),
              (a = c.getLeft(c.currentSlide)),
              (c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft),
              (!1 === c.options.infinite &&
                !1 === c.options.centerMode &&
                (0 > t || t > c.getDotCount() * c.options.slidesToScroll)) ||
              (!1 === c.options.infinite &&
                !0 === c.options.centerMode &&
                (0 > t || t > c.slideCount - c.options.slidesToScroll))
                ? void (
                    !1 === c.options.fade &&
                    ((n = c.currentSlide),
                    !0 !== i
                      ? c.animateSlide(a, function () {
                          c.postSlide(n);
                        })
                      : c.postSlide(n))
                  )
                : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                  (o =
                    0 > n
                      ? c.slideCount % c.options.slidesToScroll != 0
                        ? c.slideCount -
                          (c.slideCount % c.options.slidesToScroll)
                        : c.slideCount + n
                      : n >= c.slideCount
                      ? c.slideCount % c.options.slidesToScroll != 0
                        ? 0
                        : n - c.slideCount
                      : n),
                  (c.animating = !0),
                  c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                  (s = c.currentSlide),
                  (c.currentSlide = o),
                  c.setSlideClasses(c.currentSlide),
                  c.options.asNavFor &&
                    (r = (r = c.getNavTarget()).slick("getSlick")).slideCount <=
                      r.options.slidesToShow &&
                    r.setSlideClasses(c.currentSlide),
                  c.updateDots(),
                  c.updateArrows(),
                  !0 === c.options.fade
                    ? (!0 !== i
                        ? (c.fadeSlideOut(s),
                          c.fadeSlide(o, function () {
                            c.postSlide(o);
                          }))
                        : c.postSlide(o),
                      void c.animateHeight())
                    : void (!0 !== i
                        ? c.animateSlide(l, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o))))
        );
      }),
      (i.prototype.startLoad = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.hide(), this.$nextArrow.hide()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.hide(),
          this.$slider.addClass("slick-loading");
      }),
      (i.prototype.swipeDirection = function () {
        var t, e, i, n;
        return (
          (t = this.touchObject.startX - this.touchObject.curX),
          0 >
            (n = Math.round(
              (180 *
                (i = Math.atan2(
                  (e = this.touchObject.startY - this.touchObject.curY),
                  t
                ))) /
                Math.PI
            )) && (n = 360 - Math.abs(n)),
          (45 >= n && n >= 0) || (360 >= n && n >= 315)
            ? !1 === this.options.rtl
              ? "left"
              : "right"
            : n >= 135 && 225 >= n
            ? !1 === this.options.rtl
              ? "right"
              : "left"
            : !0 === this.options.verticalSwiping
            ? n >= 35 && 135 >= n
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (i.prototype.swipeEnd = function (t) {
        var e,
          i,
          n = this;
        if (
          ((n.dragging = !1),
          (n.interrupted = !1),
          (n.shouldClick = !(n.touchObject.swipeLength > 10)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(e),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (i.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (i.prototype.swipeMove = function (t) {
        var e,
          i,
          n,
          o,
          s,
          a = this;
        return (
          (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!a.dragging || (s && 1 !== s.length)) &&
            ((e = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
            (a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            !0 === a.options.verticalSwiping &&
              (a.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                )
              )),
            "vertical" !== (i = a.swipeDirection())
              ? (void 0 !== t.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  t.preventDefault(),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === i) ||
                    (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = e + n * o)
                  : (a.swipeLeft =
                      e + n * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft)))
              : void 0)
        );
      }),
      (i.prototype.swipeStart = function (t) {
        var e,
          i = this;
        return (
          (i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
          i.slideCount <= i.options.slidesToShow
            ? ((i.touchObject = {}), !1)
            : (void 0 !== t.originalEvent &&
                void 0 !== t.originalEvent.touches &&
                (e = t.originalEvent.touches[0]),
              (i.touchObject.startX = i.touchObject.curX =
                void 0 !== e ? e.pageX : t.clientX),
              (i.touchObject.startY = i.touchObject.curY =
                void 0 !== e ? e.pageY : t.clientY),
              void (i.dragging = !0))
        );
      }),
      (i.prototype.unfilterSlides = i.prototype.slickUnfilter =
        function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        }),
      (i.prototype.unload = function () {
        t(".slick-cloned", this.$slider).remove(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow &&
            this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.remove(),
          this.$nextArrow &&
            this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.remove(),
          this.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (i.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy();
      }),
      (i.prototype.updateArrows = function () {
        this.options.slidesToShow,
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            !this.options.infinite &&
            (this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            this.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === this.currentSlide
              ? (this.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((this.currentSlide >=
                  this.slideCount - this.options.slidesToShow &&
                  !1 === this.options.centerMode) ||
                  (this.currentSlide >= this.slideCount - 1 &&
                    !0 === this.options.centerMode)) &&
                (this.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                this.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (i.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (i.prototype.visibility = function () {
        var t = this;
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          e,
          n = this,
          o = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          a = n.length;
        for (t = 0; a > t; t++)
          if (
            ("object" == typeof o || void 0 === o
              ? (n[t].slick = new i(n[t], o))
              : (e = n[t].slick[o].apply(n[t].slick, s)),
            void 0 !== e)
          )
            return e;
        return n;
      });
  }),
  (function (t, e) {
    "use strict";
    function i(i, a) {
      var r = this,
        l = n.extend({}, r.config, a),
        c = {},
        d = l.name + "-" + ++o;
      return (
        (r.config = function (t, i) {
          return i === e ? l[t] : ((l[t] = i), r);
        }),
        (r.addItems = function (t) {
          return c.a && c.a("string" === n.type(t) ? n(t) : t), r;
        }),
        (r.getItems = function () {
          return c.g ? c.g() : {};
        }),
        (r.update = function (t) {
          return c.e && c.e({}, !t), r;
        }),
        (r.force = function (t) {
          return c.f && c.f("string" === n.type(t) ? n(t) : t), r;
        }),
        (r.loadAll = function () {
          return c.e && c.e({ all: !0 }, !0), r;
        }),
        (r.destroy = function () {
          return (
            n(l.appendScroll).off("." + d, c.e), n(t).off("." + d), (c = {}), e
          );
        }),
        (function i(o, a, r, l, c) {
          function d() {
            var e, i, s, d;
            (C = t.devicePixelRatio > 1),
              (r = u(r)),
              a.delay >= 0 &&
                setTimeout(function () {
                  p(!0);
                }, a.delay),
              (a.delay < 0 || a.combined) &&
                ((l.e =
                  ((e = a.throttle),
                  (i = function (t) {
                    "resize" === t.type && (w = k = -1), p(t.all);
                  }),
                  (d = 0),
                  function (t, n) {
                    function r() {
                      (d = +new Date()), i.call(o, t);
                    }
                    var l = +new Date() - d;
                    s && clearTimeout(s),
                      l > e || !a.enableThrottle || n
                        ? r()
                        : (s = setTimeout(r, e - l));
                  })),
                (l.a = function (t) {
                  (t = u(t)), r.push.apply(r, t);
                }),
                (l.g = function () {
                  return (r = n(r).filter(function () {
                    return !n(this).data(a.loadedName);
                  }));
                }),
                (l.f = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var i = r.filter(function () {
                      return this === t[e];
                    });
                    i.length && p(!1, i);
                  }
                }),
                p(),
                n(a.appendScroll).on("scroll." + c + " resize." + c, l.e));
          }
          function u(t) {
            for (
              var i = a.defaultImage,
                s = a.placeholder,
                r = a.imageBase,
                l = a.srcsetAttribute,
                c = a.loaderAttribute,
                d = a._f || {},
                u = 0,
                p = (t = n(t)
                  .filter(function () {
                    var t = n(this),
                      i = v(this);
                    return (
                      !t.data(a.handledName) &&
                      (t.attr(a.attribute) ||
                        t.attr(l) ||
                        t.attr(c) ||
                        d[i] !== e)
                    );
                  })
                  .data("plugin_" + a.name, o)).length;
              u < p;
              u++
            ) {
              var h = n(t[u]),
                f = v(t[u]),
                m = h.attr(a.imageBaseAttribute) || r;
              f === A && m && h.attr(l) && h.attr(l, g(h.attr(l), m)),
                d[f] === e || h.attr(c) || h.attr(c, d[f]),
                f === A && i && !h.attr(P)
                  ? h.attr(P, i)
                  : f === A ||
                    !s ||
                    (h.css(I) && "none" !== h.css(I)) ||
                    h.css(I, "url('" + s + "')");
            }
            return t;
          }
          function p(t, e) {
            if (r.length) {
              for (
                var i = e || r,
                  s = !1,
                  l = a.imageBase || "",
                  c = a.srcsetAttribute,
                  d = a.handledName,
                  u = 0;
                u < i.length;
                u++
              )
                if (t || e || f(i[u])) {
                  var p = n(i[u]),
                    g = v(i[u]),
                    m = p.attr(a.attribute),
                    b = p.attr(a.imageBaseAttribute) || l,
                    _ = p.attr(a.loaderAttribute);
                  p.data(d) ||
                    (a.visibleOnly && !p.is(":visible")) ||
                    !(
                      ((m || p.attr(c)) &&
                        ((g === A &&
                          (b + m !== p.attr(P) || p.attr(c) !== p.attr(O))) ||
                          (g !== A && b + m !== p.css(I)))) ||
                      _
                    ) ||
                    ((s = !0), p.data(d, !0), h(p, g, b, _));
                }
              s &&
                (r = n(r).filter(function () {
                  return !n(this).data(d);
                }));
            } else a.autoDestroy && o.destroy();
          }
          function h(t, e, i, o) {
            ++_;
            var s = function () {
              b("onError", t), m(), (s = n.noop);
            };
            b("beforeLoad", t);
            var r = a.attribute,
              l = a.srcsetAttribute,
              c = a.sizesAttribute,
              d = a.retinaAttribute,
              u = a.removeAttribute,
              p = a.loadedName,
              h = t.attr(d);
            if (o) {
              var f = function () {
                u && t.removeAttr(a.loaderAttribute),
                  t.data(p, !0),
                  b(T, t),
                  setTimeout(m, 1),
                  (f = n.noop);
              };
              t.off(S).one(S, s).one(x, f),
                b(o, t, function (e) {
                  e ? (t.off(x), f()) : (t.off(S), s());
                }) || t.trigger(S);
            } else {
              var v = n(new Image());
              v.one(S, s).one(x, function () {
                t.hide(),
                  e === A
                    ? t.attr(E, v.attr(E)).attr(O, v.attr(O)).attr(P, v.attr(P))
                    : t.css(I, "url('" + v.attr(P) + "')"),
                  t[a.effect](a.effectTime),
                  u &&
                    (t.removeAttr(
                      r + " " + l + " " + d + " " + a.imageBaseAttribute
                    ),
                    c !== E && t.removeAttr(c)),
                  t.data(p, !0),
                  b(T, t),
                  v.remove(),
                  m();
              });
              var g = (C && h ? h : t.attr(r)) || "";
              v
                .attr(E, t.attr(c))
                .attr(O, t.attr(l))
                .attr(P, g ? i + g : null),
                v.complete && v.trigger(x);
            }
          }
          function f(e) {
            var i = e.getBoundingClientRect(),
              o = a.scrollDirection,
              s = a.threshold,
              r =
                (k >= 0 ? k : (k = n(t).height())) + s > i.top && -s < i.bottom,
              l =
                (w >= 0 ? w : (w = n(t).width())) + s > i.left && -s < i.right;
            return "vertical" === o ? r : ("horizontal" === o || r) && l;
          }
          function v(t) {
            return t.tagName.toLowerCase();
          }
          function g(t, e) {
            if (e) {
              var i = t.split(",");
              t = "";
              for (var n = 0, o = i.length; n < o; n++)
                t += e + i[n].trim() + (n !== o - 1 ? "," : "");
            }
            return t;
          }
          function m() {
            --_, r.length || _ || b("onFinishedAll");
          }
          function b(t, e, i) {
            return (
              !!(t = a[t]) && (t.apply(o, [].slice.call(arguments, 1)), !0)
            );
          }
          var _ = 0,
            w = -1,
            k = -1,
            C = !1,
            T = "afterLoad",
            x = "load",
            S = "error",
            A = "img",
            P = "src",
            O = "srcset",
            E = "sizes",
            I = "background-image";
          "event" === a.bind || s ? d() : n(t).on(x + "." + c, d);
        })(r, l, i, c, d),
        l.chainable ? i : r
      );
    }
    var n = t.jQuery || t.Zepto,
      o = 0,
      s = !1;
    (n.fn.Lazy = n.fn.lazy =
      function (t) {
        return new i(this, t);
      }),
      (n.Lazy = n.lazy =
        function (t, o, s) {
          if ((n.isFunction(o) && ((s = o), (o = [])), n.isFunction(s))) {
            (t = n.isArray(t) ? t : [t]), (o = n.isArray(o) ? o : [o]);
            for (
              var a = i.prototype.config,
                r = a._f || (a._f = {}),
                l = 0,
                c = t.length;
              l < c;
              l++
            )
              (a[t[l]] === e || n.isFunction(a[t[l]])) && (a[t[l]] = s);
            for (var d = 0, u = o.length; d < u; d++) r[o[d]] = t[0];
          }
        }),
      (i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage:
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e,
      }),
      n(t).on("load", function () {
        s = !0;
      });
  })(window),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    t.fn.extend(t.easing, {
      def: "easeInOutExpo",
      easeInOutExpo: function (t, e, i, n, o) {
        return 0 === e
          ? i
          : e === o
          ? i + n
          : (e /= o / 2) < 1
          ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i
          : (n / 2) * (2 - Math.pow(2, -10 * --e)) + i;
      },
    }),
      t(document).keydown(function (e) {
        var i = e.keyCode,
          n = t(".currentGridder"),
          o = n.find(".gridder-show");
        n.length &&
          (37 === i && (o.prev().prev().trigger("click"), e.preventDefault()),
          39 === i && (o.next().trigger("click"), e.preventDefault()));
      }),
      (t.fn.gridderExpander = function (e) {
        var i = t.extend({}, t.fn.gridderExpander.defaults, e);
        return this.each(function () {
          function e(e) {
            i.scroll &&
              t("html, body").animate(
                {
                  scrollTop:
                    e.find(".selectedItem").offset().top - i.scrollOffset,
                },
                { duration: 200, easing: i.animationEasing }
              ),
              s.removeClass("hasSelectedItem"),
              (a = !1),
              e.find(".selectedItem").removeClass("selectedItem"),
              e
                .find(".gridder-show")
                .slideUp(i.animationSpeed, i.animationEasing, function () {
                  e.find(".gridder-show").remove(), i.onClosed(e);
                }),
              t(".currentGridder").removeClass("currentGridder");
          }
          function n(e, n) {
            var s = '<div class="gridder-padding">';
            if (i.showNav) {
              var r = t(".selectedItem").prev(),
                l = t(".selectedItem").next().next();
              (s += '<div class="gridder-navigation">'),
                (s +=
                  '<a href="#" class="gridder-close">' + i.closeText + "</a>"),
                (s +=
                  '<a href="#" class="gridder-nav prev ' +
                  (r.length ? "" : "disabled") +
                  '">' +
                  i.prevText +
                  "</a>"),
                (s +=
                  '<a href="#" class="gridder-nav next ' +
                  (l.length ? "" : "disabled") +
                  '">' +
                  i.nextText +
                  "</a>"),
                (s += "</div>");
            }
            if (
              ((s += '<div class="gridder-expanded-content">'),
              (s += n),
              (s += "</div>"),
              (s += "</div>"),
              a
                ? (o.html(s),
                  o
                    .find(".gridder-padding")
                    .fadeIn(i.animationSpeed, i.animationEasing, function () {
                      (a = !0),
                        "function" == typeof i.onContent && i.onContent(o);
                    }))
                : o
                    .hide()
                    .append(s)
                    .slideDown(
                      i.animationSpeed,
                      i.animationEasing,
                      function () {
                        (a = !0),
                          "function" == typeof i.onContent && i.onContent(o);
                      }
                    ),
              i.scroll)
            ) {
              var c =
                "panel" === i.scrollTo
                  ? e.offset().top + e.height() - i.scrollOffset
                  : e.offset().top - i.scrollOffset;
              t("html, body").animate(
                { scrollTop: c },
                { duration: i.animationSpeed, easing: i.animationEasing }
              );
            }
            o.removeClass("loading");
          }
          var o,
            s = t(this),
            a = !1;
          i.onStart(s),
            s.on("click", ".gridder-list", function (i) {
              i.preventDefault(),
                (function i(a) {
                  if (
                    (t(".currentGridder").removeClass("currentGridder"),
                    s.addClass("currentGridder"),
                    a.hasClass("selectedItem"))
                  )
                    e(s);
                  else {
                    s.find(".selectedItem").removeClass("selectedItem"),
                      a.addClass("selectedItem"),
                      s.find(".gridder-show").remove(),
                      s.hasClass("hasSelectedItem") ||
                        s.addClass("hasSelectedItem"),
                      (o = t(
                        '<div class="gridder-show loading"></div>'
                      ).insertAfter(a));
                    var r = "";
                    0 === a.data("griddercontent").indexOf("#")
                      ? ((r = t(a.data("griddercontent")).html()), n(a, r))
                      : t.ajax({
                          type: "GET",
                          url: a.data("griddercontent"),
                          success: function (t) {
                            n(a, (r = t));
                          },
                          error: function (t) {
                            n(a, (r = t.responseText));
                          },
                        });
                  }
                })(t(this));
            }),
            s.on("click", ".gridder-nav.next", function (e) {
              e.preventDefault(),
                t(this).parents(".gridder-show").next().trigger("click");
            }),
            s.on("click", ".gridder-nav.prev", function (e) {
              e.preventDefault(),
                t(this).parents(".gridder-show").prev().prev().trigger("click");
            }),
            s.on("click", ".gridder-close", function (t) {
              t.preventDefault(), e(s);
            });
        });
      }),
      (t.fn.gridderExpander.defaults = {
        scroll: !0,
        scrollOffset: 30,
        scrollTo: "panel",
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: !0,
        nextText: "Next",
        prevText: "Previous",
        closeText: "Close",
        onStart: function () {},
        onContent: function () {},
        onClosed: function () {},
      });
  }),
  (function (t, e) {
    function i(e, i) {
      var a = this;
      (a.element = e),
        (a.options = t.extend(!0, {}, s, i)),
        (a.defaults = s),
        (a.name = o),
        (a.cssRules = ""),
        (a.breakpoints = []),
        (a.grids = []),
        (a.activeTab = a.options.config.activeTab - 1),
        (a.tabs = t(a.element).find("> dt")),
        (a.contents = t(a.element).find("> dd")),
        a.init(),
        a.generateStylesheet(a.cssRules),
        n++;
    }
    var n = 0,
      o = "gridtab",
      s = {
        grid: 4,
        borderWidth: 2,
        tabBorderColor: "#ddd",
        tabPadding: 25,
        contentBorderColor: "#ddd",
        contentPadding: 35,
        contentBackground: "#fff",
        activeTabBackground: "#fff",
        responsive: null,
        selectors: {
          tab: ">dt",
          closeButton: ".gridtab__close",
          nextArrow: ".gridtab__next.gridtab__arrow",
          prevArrow: ".gridtab__prev.gridtab__arrow",
          disabledArrow: ".is-disabled",
        },
        config: {
          layout: "grid",
          keepOpen: !1,
          speed: 500,
          activeTab: 0,
          showClose: !1,
          showArrows: !1,
          scrollToTab: !1,
          rtl: !1,
        },
        callbacks: { open: !1, close: !1 },
      };
    (i.prototype.init = function () {
      var e = this;
      t(e.element).addClass("gridtab gridtab--" + n),
        e.options.config.rtl && t(e.element).attr("dir", "rtl"),
        e.setTabOrder(),
        e.showControls(),
        e.addCssRules(
          e.options.grid,
          e.options.borderWidth,
          e.options.tabPadding,
          e.options.tabBorderColor,
          e.options.contentPadding,
          e.options.contentBorderColor,
          e.options.contentBackground,
          e.options.activeTabBackground,
          null
        ),
        null !== e.options.responsive
          ? e.responsiveBreakpoints()
          : e.setContentOrder(e.options.grid),
        e.activeTab > -1 &&
          e.activeTab < e.tabs.length &&
          e.slideContent(e.tabs[e.activeTab], !1, !1),
        t(e.element).on("click", e.options.selectors.tab, function (i) {
          t(this).attr("href") && i.preventDefault(),
            i.stopPropagation(),
            i.stopImmediatePropagation(),
            e.slideContent(
              t(this).closest("dt"),
              !1,
              e.options.config.scrollToTab
            );
        });
    }),
      (i.prototype.showControls = function () {
        var e = this;
        if (e.options.config.showClose || e.options.config.showArrows) {
          var i = t('<div class="gridtab__controls"></div>').appendTo(
            e.contents
          );
          if (
            (e.options.config.showClose &&
              t(
                '<a class="' +
                  e.options.selectors.closeButton.replace(/\./g, " ") +
                  '" href="#">Close</a>'
              ).appendTo(i),
            e.options.config.showArrows &&
              e.contents.length &&
              e.contents.length >= 2)
          ) {
            var n = e.options.selectors.nextArrow.replace(/\./g, " "),
              o = e.options.selectors.prevArrow.replace(/\./g, " "),
              s = e.options.selectors.disabledArrow.replace(/\./g, " "),
              a = '<a class="' + o + '" title="previous" href="#">Prev</a>',
              r = '<a class="' + n + '" title="next" href="#">Next</a>';
            e.contents.length > 2 &&
              t(a + r).appendTo(e.contents.slice(1, -1).find(i)),
              t(a + ('<span class="' + n + " ") + s + '">Next</span>').appendTo(
                t(e.contents[e.contents.length - 1]).find(i)
              ),
              t('<span class="' + o + " " + s + '">Prev</span>' + r).appendTo(
                t(e.contents[0]).find(i)
              );
          }
          t(i).on("click", "a", function (i) {
            i.preventDefault();
            var s = e.contents.index(t(this).parent().parent());
            t(this).hasClass(o)
              ? e.slideContent(e.tabs[s - 1], !1, e.options.config.scrollToTab)
              : t(this).hasClass(n)
              ? e.slideContent(e.tabs[s + 1], !1, e.options.config.scrollToTab)
              : e.slideContent(e.tabs[s], !0, !1);
          });
        }
      }),
      (i.prototype.setContentOrder = function (t) {
        for (var e = Math.ceil(this.contents.length / t), i = 0; e > i; i++) {
          var n = i + 1;
          this.contents
            .slice(i * t, t * n)
            .css({ order: "" + n * t, "flex-order": "" + n * t });
        }
      }),
      (i.prototype.setTabOrder = function () {
        this.tabs.each(function (e) {
          t(this).css({ order: "" + e, "flex-order": "" + e });
        });
      }),
      (i.prototype.addCssRules = function (t, e, i, o, s, a, r, l, c) {
        if (
          null !== t ||
          null !== e ||
          null !== i ||
          null !== o ||
          null !== a ||
          null !== s ||
          null !== r ||
          null !== l
        ) {
          var d = "",
            u = "";
          null !== t && (u = Math.floor((100 / t) * 100) / 100),
            (null !== t || null !== e || null !== o || null !== i) &&
              (null !== e &&
                (d +=
                  ".gridtab--" + n + "{padding:" + e + "px 0 0 " + e + "px;}"),
              (d += ".gridtab--" + n + " > dt{"),
              null !== e && (d += "margin:-" + e + "px 0 0 -" + e + "px;"),
              null !== t &&
                (d +=
                  "min-width:calc(" +
                  u +
                  "% + " +
                  e +
                  "px);width:calc(" +
                  u +
                  "% + " +
                  e +
                  "px);"),
              null !== e && (d += "border-width:" + e + "px;"),
              null !== i && (d += "padding:" + i + "px;"),
              null !== o && (d += "border-color:" + o + ";"),
              (d += "}")),
            null !== l &&
              (d += ".gridtab--" + n + " >dt.is-active{background:" + l + ";}"),
            "tab" == this.options.config.layout &&
              null !== l &&
              null !== e &&
              (d +=
                ".gridtab--" +
                n +
                " >dt.is-active:after{background:" +
                l +
                ";height:" +
                e +
                "px;bottom:-" +
                e +
                "px;}"),
            (null !== a || null !== e || null !== r || null !== s) &&
              ((d += ".gridtab--" + n + ">dd{"),
              (d +=
                "min-width:calc(" +
                u * t +
                "% + " +
                e +
                "px);max-width:calc(" +
                u * t +
                "% + " +
                e +
                "px);"),
              null !== e &&
                (d +=
                  "margin:-" +
                  e +
                  "px 0 0 -" +
                  e +
                  "px !important;border-width:" +
                  e +
                  "px;"),
              null !== a && (d += "border-color:" + a + ";"),
              null !== s && (d += "padding:" + s + "px;"),
              null !== r && (d += "background:" + r + ";"),
              (d += "}")),
            (this.cssRules +=
              null !== c ? "@media (max-width:" + c + "px){" + d + "}" : d);
        }
      }),
      (i.prototype.generateStylesheet = function (e) {
        t("head").append("<style>" + e + "</style>");
      }),
      (i.prototype.responsiveBreakpoints = function () {
        function t() {
          var t = [];
          n.filter(function (e) {
            e.matches && t.push(parseInt(e.media.replace(/[^\d.]/g, "")));
          });
          var e = t.length
            ? i.grids[i.breakpoints.indexOf(Math.min.apply(null, t))]
            : i.options.grid;
          i.setContentOrder(e);
        }
        var i = this;
        if (i.options.responsive && i.options.responsive.length) {
          i.options.responsive.sort(function (t, e) {
            return parseFloat(e.breakpoint) - parseFloat(t.breakpoint);
          });
          var n = [];
          for (var o in i.options.responsive) {
            var s = i.options.responsive[o].settings,
              a = s.grid || i.options.grid,
              r = s.borderWidth || i.options.borderWidth,
              l = s.tabBorderColor || null,
              c = s.tabPadding || null,
              d = s.activeTabBackground || null,
              u = s.contentPadding || null,
              p = s.contentBorderColor || null,
              h = s.contentBackground || null,
              f = i.options.responsive[o].breakpoint || null;
            i.addCssRules(a, r, c, l, u, p, h, d, f),
              i.breakpoints.push(f),
              i.grids.push(a),
              n.push(e.matchMedia("(max-width:" + i.breakpoints[o] + "px)")),
              t(e.matchMedia("(max-width:" + i.breakpoints[o] + "px)"));
          }
          for (o = 0; o < n.length; o++) n[o].addListener(t);
        }
      }),
      (i.prototype.scrollToTab = function () {
        var e = t("html, body");
        e.on(
          "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
          function () {
            e.stop();
          }
        ),
          e.animate(
            { scrollTop: t(this.element).find(".is-active").offset().top },
            1e3,
            function () {
              e.off(
                "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove"
              );
            }
          );
      }),
      (i.prototype.slideContent = function (e, i, n) {
        var o = this,
          s = t(e),
          a = t(o.element).find(">dt.is-active").not(e);
        if (!s.hasClass("is-disabled")) {
          if (a.length)
            o.tabs.addClass("is-disabled"),
              a
                .next()
                .stop(!0)
                .slideUp(o.options.config.speed, function () {
                  return (
                    a.removeClass("is-active"),
                    o.tabs.next().stop(!0),
                    o.options.callbacks.close &&
                      o.options.callbacks.close.call(this),
                    s
                      .addClass("is-active")
                      .next()
                      .stop(!0)
                      .slideDown(o.options.config.speed, function () {
                        return (
                          o.options.callbacks.open &&
                            o.options.callbacks.open.call(this),
                          n && o.scrollToTab(),
                          o.tabs.removeClass("is-disabled"),
                          !1
                        );
                      }),
                    !1
                  );
                });
          else if (o.options.config.keepOpen && !i) {
            if (!s.hasClass("is-active"))
              return (
                s
                  .addClass("is-active")
                  .next()
                  .stop(!0)
                  .slideDown(o.options.config.speed, function () {
                    o.options.callbacks.open &&
                      o.options.callbacks.open.call(this),
                      n && o.scrollToTab();
                  }),
                !1
              );
          } else
            o.tabs.addClass("is-disabled"),
              s
                .toggleClass("is-active")
                .next()
                .stop(!0)
                .slideToggle(o.options.config.speed, function () {
                  return (
                    t(this).is(":hidden")
                      ? o.options.callbacks.close &&
                        o.options.callbacks.close.call(this)
                      : (o.options.callbacks.open &&
                          o.options.callbacks.open.call(this),
                        n && o.scrollToTab()),
                    o.tabs.removeClass("is-disabled"),
                    !1
                  );
                });
          return !1;
        }
      }),
      (t.fn[o] = function (e) {
        return this.each(function () {
          t.data(this, "plugin_" + o) ||
            t.data(this, "plugin_" + o, new i(this, e));
        });
      });
  })(jQuery, window, document);
var MENU_NAVEGACION = function () {
    $(".wrap-HEADER").pushpin({ top: 40, offset: 0 }),
      $(".wrap-NAV").pushpin({ top: 100, offset: 0 });
    var t = document.querySelector(".wrap-HEADER");
    new MutationObserver(function (e, i) {
      for (var n of e)
        "attributes" === n.type &&
          ("fixed" === $(t).css("position")
            ? $("body").css("padding-top", "171px")
            : $("body").css("padding-top", ""));
    }).observe(t, { attributes: !0, childList: !1, subtree: !1 });
  },
  BOLDS_MENU = function () {
    $(".cd-primary-nav .cd-secondary-nav a:contains('Almer\xeda')").css(
      "font-weight",
      "bold"
    ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('C\xf3rdoba')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('Granada')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('Sevilla')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('Huelva')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('Ja\xe9n')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('M\xe1laga')").css(
        "font-weight",
        "bold"
      ),
      $(
        ".cd-primary-nav .cd-secondary-nav a:contains('V\xe9lez M\xe1laga')"
      ).css("font-weight", "normal"),
      $(".cd-primary-nav .cd-secondary-nav a:contains('Jerez')").css(
        "font-weight",
        "bold"
      ),
      $(".cd-primary-nav .cd-secondary-nav a:contains('C\xe1diz')").css(
        "font-weight",
        "bold"
      ),
      $(
        ".cd-primary-nav .cd-secondary-nav a:contains('Campo de Gibraltar')"
      ).css("font-weight", "bold"),
      $(
        ".cd-primary-nav .cd-secondary-nav a:contains('Provincia de C\xe1diz')"
      ).css("font-weight", "normal"),
      $(
        ".cd-primary-nav .cd-secondary-nav a:contains('Zona Franca C\xe1diz')"
      ).css("font-weight", "normal");
  },
  HEMEROTECA_HOVER = function () {
    $(".wrap-hemeroteca").hover(function () {
      $(".wrap-CORPORATIVO").toggleClass("hemerohover");
    });
  },
  SLICK_SLIDER = function () {
    function t(t) {
      (tallest = 0),
        t.each(function () {
          (thisHeight = $(this).height()) > tallest && (tallest = thisHeight);
        }),
        t.height(tallest);
    }
    $(".slider-x1")
      .not(".slick-initialized")
      .slick({
        autoplay: !1,
        lazyLoad: "ondemand",
        arrows: !0,
        autoplaySpeed: 7e3,
        adaptiveHeight: !1,
        dots: !0,
      }),
      $(".slider-x3")
        .not(".slick-initialized")
        .slick({
          autoplay: !1,
          lazyLoad: "ondemand",
          arrows: !0,
          centerMode: !1,
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: !0,
          dots: !1,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, dots: !0 } },
          ],
        }),
      $(".slider-x4")
        .not(".slick-initialized")
        .slick({
          autoplay: !1,
          lazyLoad: "ondemand",
          arrows: !0,
          centerMode: !1,
          slidesToShow: 4,
          slidesToScroll: 1,
          adaptiveHeight: !0,
          dots: !1,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2, dots: !0 } },
          ],
        }),
      $(".slider-x6")
        .not(".slick-initialized")
        .slick({
          autoplay: !1,
          lazyLoad: "ondemand",
          arrows: !0,
          centerMode: !1,
          slidesToShow: 6,
          slidesToScroll: 1,
          adaptiveHeight: !0,
          dots: !1,
          responsive: [
            { breakpoint: 1300, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 1, dots: !0 } },
            { breakpoint: 600, settings: { slidesToShow: 1, dots: !0 } },
            { breakpoint: 360, settings: { slidesToShow: 1, dots: !0 } },
          ],
        }),
      $(".slider-x8")
        .not(".slick-initialized")
        .slick({
          autoplay: !1,
          lazyLoad: "ondemand",
          arrows: !0,
          centerMode: !1,
          slidesToShow: 8,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1300, settings: { slidesToShow: 6 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
          ],
        }),
      $(".slider-opinion")
        .not(".slick-initialized")
        .slick({
          autoplay: !1,
          lazyLoad: "ondemand",
          arrows: !0,
          centerMode: !1,
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: !0,
          dots: !0,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 1, centerMode: !0, slidesToScroll: 1 },
            },
          ],
        }),
      $(".slick-list").on("beforeChange", function (t, e, i, n) {
        $(function () {
          $(".lazy").lazy({ effect: "fadeIn", effectTime: 2e3, threshold: 0 });
        });
      }),
      t($("#estilo-portada-blogs .wrap-text header")),
      t($("#estilo-portada-cine .wrap-text"));
  },
  TICKER_ULTIMAHORA = function () {
    var t;
    ((t = jQuery).simpleTicker = function (e, i) {
      var n = { speed: 500, delay: 4e3, easing: "swing", effectType: "fade" },
        o = {
          ul: "",
          li: "",
          initList: "",
          ulWidth: "",
          liHeight: "",
          tickerHook: "tickerHook",
          effect: {},
        },
        s = this;
      (s.settings = {}),
        t(e),
        (s.init = function () {
          (s.settings = t.extend({}, n, i)),
            (o.ul = e.children("ul")),
            (o.li = e.find("li")),
            (o.initList = e.find("li:first")),
            (o.ulWidth = o.ul.width()),
            (o.liHeight = o.li.height()),
            e.css({ height: o.liHeight }),
            o.li.css({ top: "0", left: "0", position: "absolute" }),
            "roll" === s.settings.effectType && s.effect.roll(),
            s.effect.exec();
        }),
        (s.effect = {}),
        (s.effect.exec = function () {
          o.initList
            .css(o.effect.init.css)
            .animate(o.effect.init.animate, s.settings.speed, s.settings.easing)
            .addClass(o.tickerHook),
            setInterval(function () {
              e.find("." + o.tickerHook)
                .animate(
                  o.effect.start.animate,
                  s.settings.speed,
                  s.settings.easing
                )
                .next()
                .css(o.effect.next.css)
                .animate(
                  o.effect.next.animate,
                  s.settings.speed,
                  s.settings.easing
                )
                .addClass(o.tickerHook)
                .end()
                .appendTo(o.ul)
                .css(o.effect.end.css)
                .removeClass(o.tickerHook);
            }, s.settings.delay);
        }),
        (s.effect.roll = function () {
          o.effect = {
            init: {
              css: { top: "3em", display: "block", opacity: "0" },
              animate: { top: "0", opacity: "1", zIndex: "98" },
            },
            start: { animate: { top: "-3em", opacity: "0" } },
            next: {
              css: { top: "3em", display: "block", opacity: "0", zIndex: "99" },
              animate: { top: "0", opacity: "1" },
            },
            end: { css: { zIndex: "98" } },
          };
        }),
        s.init();
    }),
      $(function () {
        $.simpleTicker($("#js-ticker-roll"), { effectType: "roll" });
      });
  },
  MATERIAL_SELECT = function () {
    $("select").material_select();
  },
  LAZY_LOAD = function () {
    $(function () {
      $(".lazy").lazy({ effect: "fadeIn", effectTime: 2e3, threshold: 0 });
    });
  },
  ADBLOCK_DETECT = function () {
    var t, e;
    (t = this),
      (e = function () {
        function t(e, i) {
          var n,
            o,
            s,
            a,
            r =
              ((n = (i = (function (t, e) {
                var i = {};
                for (var n in t)
                  (i[n] = t[n]), e.hasOwnProperty(n) && (i[n] = e[n]);
                return i;
              })(t.defaults, i || {})).testNodeClasses),
              (o = i.testNodeStyle),
              ((a = (s = window.document).createElement("div")).innerHTML =
                "&nbsp;"),
              a.setAttribute("class", n),
              a.setAttribute("style", o),
              s.body.appendChild(a),
              a),
            l = 0,
            c = !1,
            d = setInterval(function () {
              var t;
              l++,
                ((c =
                  0 === (t = r).offsetHeight ||
                  !document.body.contains(t) ||
                  "none" === t.style.display ||
                  "hidden" === t.style.visibility) ||
                  l === i.testRuns) &&
                  (clearInterval(d),
                  r.parentNode && r.parentNode.removeChild(r),
                  e(c));
            }, i.testInterval);
        }
        return (
          (t.defaults = {
            testNodeClasses:
              "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
            testNodeStyle:
              "height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;",
            testInterval: 51,
            testRuns: 4,
          }),
          t
        );
      }),
      "function" == typeof define && define.amd
        ? define([], e)
        : "object" == typeof module && module.exports
        ? (module.exports = e())
        : (t.adblockDetect = e()),
      adblockDetect(
        function (t) {
          t && $("#modal-adblock").modal({ dismissible: !1 }).modal("open");
        },
        { testInterval: 40, testRuns: 5 }
      );
  },
  MODALES = function () {
    $(".modal").modal({ dismissible: !0, preventScrolling: !1 });
  },
  SWIPENAV = function () {
    $(".wrap-FICHA-ARTICULO").length && $(".navi-movil").addClass("mostrar");
  },
  SCROLL_TO = function () {
    $(".logo-foot").click(function () {
      return $("body,html").animate({ scrollTop: 0 }, 1600), !1;
    }),
      $(document).on("click", ".BoletinScroll", function (t) {
        t.preventDefault(),
          $("html, body").animate(
            { scrollTop: $("#BOLETIN").offset().top - 170 },
            1e3
          ),
          setTimeout(function () {
            $(".wrap-newsletterform").addClass("boletin-resaltado");
          }, 1200);
      });
  },
  QUANTCAST = function () {
    var t = document.createElement("script");
    (t.src = "https://quantcast.mgr.consensu.org/cmp.js"),
      (t.async = !0),
      (t.type = "text/javascript");
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e),
      (function () {
        function t(t) {
          var e,
            i = "string" == typeof t.data;
          if (
            (e = i
              ? -1 != t.data.indexOf("__cmpCall")
                ? JSON.parse(t.data)
                : {}
              : t.data).__cmpCall
          ) {
            var n = e.__cmpCall;
            window.__cmp(n.command, n.parameter, function (e, o) {
              var s = {
                __cmpReturn: { returnValue: e, success: o, callId: n.callId },
              };
              t.source.postMessage(i ? JSON.stringify(s) : s, "*");
            });
          }
        }
        (function t() {
          if (!window.frames.__cmpLocator) {
            if (document.body) {
              var e = document.body,
                i = document.createElement("iframe");
              (i.style = "display:none"),
                (i.name = "__cmpLocator"),
                e.appendChild(i);
            } else setTimeout(t, 5);
          }
        })(),
          (window.__cmp = function (t) {
            var e = arguments;
            if (!e.length) return __cmp.a;
            if ("ping" === e[0])
              e[2]({ gdprAppliesGlobally: !0, cmpLoaded: !1 }, !0);
            else {
              if ("__cmp" == t) return !1;
              void 0 === __cmp.a && (__cmp.a = []),
                __cmp.a.push([].slice.apply(e));
            }
          }),
          (window.__cmp.gdprAppliesGlobally = !0),
          (window.__cmp.msgHandler = t),
          window.addEventListener
            ? window.addEventListener("message", t, !1)
            : window.attachEvent("onmessage", t);
      })(),
      window.__cmp("init", {
        Language: "es",
        "Initial Screen Title Text":
          "Tu privacidad es importante para nosotros",
        "Initial Screen Reject Button Text": "No acepto",
        "Initial Screen Accept Button Text": "Acepto",
        "Initial Screen Purpose Link Text": "M\xe1s informaci\xf3n",
        "Purpose Screen Title Text":
          "Tu privacidad es importante para nosotros",
        "Purpose Screen Body Text":
          "Puedes configurar tus preferencias y elegir como quieres que tus datos sean utilizados para los siguientes prop\xf3sitos. Puedes elegir configurar tus preferencias solo con nosotros independientemente del resto de nuestros partners. Cada prop\xf3sito tiene una descripci\xf3n para que puedas saber como nosotros y nuestros partners utilizamos tus datos",
        "Purpose Screen Vendor Link Text": "Ver lista completa de partners",
        "Purpose Screen Cancel Button Text": "Cancelar",
        "Purpose Screen Save and Exit Button Text": "Guardar y salir",
        "Vendor Screen Title Text": "Tu privacidad es importante para nosotros",
        "Vendor Screen Body Text":
          "Puedes dar tu consentimiento de manera individual a cada partner. Ver la lista de todos los prop\xf3sitos para los cuales utilizan tus datos para tener m\xe1s informaci\xf3n. En algunos casos, las empresas pueden revelar que usan tus datos sin pedir tu consentimiento, en funci\xf3n de intereses leg\xedtimos. Puedes hacer click en su pol\xedtica de privacidad para obtener m\xe1s informaci\xf3n al respecto o para rechazarlo.",
        "Vendor Screen Accept All Button Text": "Aceptar todo",
        "Vendor Screen Reject All Button Text": "Rechazar todo",
        "Vendor Screen Purposes Link Text": "Ver prop\xf3sitos",
        "Vendor Screen Cancel Button Text": "Cancelar",
        "Vendor Screen Save and Exit Button Text": "Guardar y salir",
        "Initial Screen Body Text":
          "Tanto nuestros partners como nosotros utilizamos cookies en nuestro sitio web para personalizar contenido y publicidad, proporcionar funcionalidades a las redes sociales, o analizar nuestro tr\xe1fico. Haciendo click consientes el uso de esta tecnolog&iacute;a en nuestra web. Puedes cambiar de opini&oacute;n y personalizar tu consentimiento siempre que quieras volviendo a esta web.",
        "Initial Screen Body Text Option": 1,
        "Publisher Name": "Andaluc\xeda Informaci\xf3n",
        "Display UI": "always",
        "Min Days Between UI Displays": 365,
        "Publisher Purpose IDs": [1],
        "Consent Scope": "service",
        "Post Consent Page": "#",
        "UI Layout": "banner",
      });
  },
  HACKS = function () {
    $(".VIDEOBANNER .BANNER").append(
      "<a target='_blank' href='https://7tvandalucia.es'>&nbsp;</a>"
    ),
      $(".button-collapse").sideNav(),
      window.location.href.indexOf("vivagalicia.tv/") > 0 &&
        (console.log("GALICIA"),
        $(".footer-mid .container .row .s12:nth-child(1)").hide(),
        $(".footer-mid .container .row .s12:nth-child(2)").hide(),
        $(".footer-mid .container .row .s12:nth-child(3)").hide(),
        $(".footer-mid .container .row .s12:nth-child(3)").hide(),
        $(".footer-mid .container .row .s12:nth-child(4) .row .s12").show());
  },
  CHECK_NEWSLETTER = function () {
    $("#popup_edicion_id").val(0);
  },
  SHOWEXTRA = function () {
    $(".btn-extra").click(function () {
      $(".NAV-right").toggleClass("showextra");
    });
  },
  GRIDTAB_XL = function () {
    $("#gridtab-1").gridtab({
      grid: 5,
      borderWidth: 2,
      tabPadding: 0,
      contentPadding: 0,
      contentBackground: "#fff",
      activeTabBackground: "#f2f2f2",
      contentBorderColor: "#d9d9d9",
      config: { showClose: !0, showArrows: !0, layout: "tab", scrollToTab: !0 },
    });
  },
  GRIDTAB_L = function () {
    $("#gridtab-1").gridtab({
      grid: 4,
      borderWidth: 2,
      tabPadding: 0,
      contentPadding: 0,
      contentBackground: "#fff",
      activeTabBackground: "#f2f2f2",
      contentBorderColor: "#d9d9d9",
      config: { showClose: !0, showArrows: !0, layout: "tab", scrollToTab: !0 },
    });
  },
  GRIDTAB_M = function () {
    $("#gridtab-1").gridtab({
      grid: 3,
      borderWidth: 2,
      tabPadding: 0,
      contentPadding: 0,
      contentBackground: "#fff",
      activeTabBackground: "#f2f2f2",
      contentBorderColor: "#d9d9d9",
      config: { showClose: !0, showArrows: !0, layout: "tab", scrollToTab: !0 },
    });
  },
  GRIDTAB_S = function () {
    $("#gridtab-1").gridtab({
      grid: 2,
      borderWidth: 2,
      tabPadding: 0,
      contentPadding: 0,
      contentBackground: "#fff",
      activeTabBackground: "#f2f2f2",
      contentBorderColor: "#d9d9d9",
      config: { showClose: !0, showArrows: !0, layout: "tab", scrollToTab: !0 },
    });
  },
  GRIDTAB_XS = function () {
    $("#gridtab-1").gridtab({
      grid: 1,
      borderWidth: 2,
      tabPadding: 0,
      contentPadding: 0,
      contentBackground: "#fff",
      activeTabBackground: "#f2f2f2",
      contentBorderColor: "#d9d9d9",
      config: { showClose: !0, showArrows: !0, layout: "tab", scrollToTab: !0 },
    });
  },
  JS_Scripts = function () {
    MENU_NAVEGACION(),
      BOLDS_MENU(),
      HEMEROTECA_HOVER(),
      SLICK_SLIDER(),
      TICKER_ULTIMAHORA(),
      MATERIAL_SELECT(),
      LAZY_LOAD(),
      ADBLOCK_DETECT(),
      MODALES(),
      SWIPENAV(),
      SCROLL_TO(),
      SWIPENAV(),
      HACKS(),
      CHECK_NEWSLETTER(),
      SHOWEXTRA(),
      $(window).width() > 1200
        ? GRIDTAB_XL()
        : $(window).width() > 899 && 1999 > $(window).width()
        ? GRIDTAB_L()
        : $(window).width() > 767 && 900 > $(window).width()
        ? GRIDTAB_M()
        : $(window).width() > 480 && 768 > $(window).width()
        ? GRIDTAB_S()
        : GRIDTAB_XS();
  };
$(document).ready(function () {
  JS_Scripts();
}),
  console.log("Load script.js");
var app = {};
