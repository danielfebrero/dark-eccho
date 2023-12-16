(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6703], {
    16889: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return y
            },
            Z: function() {
                return h
            }
        });
        var a, r, i, s, o = n(90038), l = n(37178), d = n(70079), c = n(21389), u = n(92063), m = n(35250), f = c.Z.div(a || (a = (0,
        o.Z)(["bg-black rounded-md"]))), p = c.Z.div(r || (r = (0,
        o.Z)(["flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"]))), x = c.Z.div(i || (i = (0,
        o.Z)(["p-4 overflow-y-auto"]))), g = c.Z.code(s || (s = (0,
        o.Z)(["", ""])), function(e) {
            return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
        });
        function h(e) {
            var t = e.children
              , n = e.className
              , a = e.language
              , r = e.content
              , i = (0,
            d.useCallback)(function() {
                (0,
                l.S)(r)
            }, [r]);
            return (0,
            m.jsx)(y, {
                title: a,
                headerDecoration: (0,
                m.jsx)(u.Z, {
                    buttonText: "Copy code",
                    onCopy: i
                }),
                codeClassName: n,
                children: t
            })
        }
        function y(e) {
            var t = e.children
              , n = e.title
              , a = e.headerDecoration
              , r = e.shouldWrapCode
              , i = e.className
              , s = e.codeContainerClassName
              , o = e.codeClassName;
            return (0,
            m.jsxs)(f, {
                className: i,
                children: [(null != n || null != a) && (0,
                m.jsxs)(p, {
                    children: [n && (0,
                    m.jsx)("span", {
                        children: n
                    }), a]
                }), (0,
                m.jsx)(x, {
                    className: s,
                    children: (0,
                    m.jsx)(g, {
                        $shouldWrap: void 0 !== r && r,
                        className: o,
                        children: t
                    })
                })]
            })
        }
    },
    10936: function(e, t, n) {
        "use strict";
        n.d(t, {
            kd: function() {
                return r
            },
            Oq: function() {
                return l
            },
            gj: function() {
                return d
            }
        });
        var a, r, i = n(61888), s = n(68113);
        function o(e, t) {
            var n = e.slice().sort(function(e, t) {
                return e - t
            })
              , a = t * (n.length - 1)
              , r = Math.floor(a)
              , i = Math.ceil(a);
            if (r === i)
                return n[r];
            var s = a - r;
            return (1 - s) * n[r] + s * n[i]
        }
        (a = r || (r = {})).FirstTokenLatency = "first_token_lat",
        a.TotalRequestTime = "total_request_time",
        a.TokenCount = "token_count",
        a.StdDevTokenLatency = "std_dev_token_lat",
        a.MeanTokenLatency = "mean_token_lat",
        a.MedianTokenLatency = "median_token_lat",
        a.MinTokenLatency = "min_token_lat",
        a.MaxTokenLatency = "max_token_lat",
        a.P95TokenLatency = "p95_token_lat",
        a.P99TokenLatency = "p99_token_lat";
        var l = function(e) {
            var t, n = e.filter(function(e) {
                return e.requestCount > 1
            }), a = e.length ? e[0] : null, s = o(n.map(function(e) {
                return e.lastTokenDuration
            }), .95), l = o(n.map(function(e) {
                return e.lastTokenDuration
            }), .99), d = (0,
            i.mean)(n.map(function(e) {
                return e.lastTokenDuration
            })), c = function(e) {
                if (0 === e.length)
                    return null;
                var t = e.slice().sort(function(e, t) {
                    return e - t
                })
                  , n = Math.floor(t.length / 2);
                return t.length % 2 == 0 ? (t[n - 1] + t[n]) / 2 : t[n]
            }(n.map(function(e) {
                return e.lastTokenDuration
            })), u = n.filter(function(e) {
                return 0 !== e.lastTokenDuration
            }).reduce(function(e, t) {
                return Math.min(e, t.lastTokenDuration)
            }, 1 / 0), m = n.reduce(function(e, t) {
                return Math.max(e, t.lastTokenDuration)
            }, -1 / 0), f = function(e) {
                var t = e.length;
                if (0 === t)
                    return 0;
                var n = (0 === e.length ? null : e.reduce(function(e, t) {
                    return e + t
                }, 0) / e.length) || 0;
                return Math.sqrt(e.reduce(function(e, t) {
                    return e + Math.pow(t - n, 2)
                }, 0) / t)
            }(n.map(function(e) {
                return e.lastTokenDuration
            })), p = null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.requestDuration;
            return [{
                id: r.FirstTokenLatency,
                name: "First Token lat.",
                stat: a ? "".concat(a.lastTokenDuration.toFixed(2), "ms") : null,
                value: a ? a.lastTokenDuration : null,
                category: "summary"
            }, {
                id: r.TotalRequestTime,
                name: "Total request time",
                stat: p ? "".concat((p / 1e3).toFixed(2), "s") : null,
                value: p || null,
                category: "summary"
            }, {
                id: r.TokenCount,
                name: "Token count",
                stat: "".concat(e.length),
                value: e.length,
                category: "summary"
            }, {
                id: r.StdDevTokenLatency,
                name: "Std dev Token lat.",
                stat: "".concat(f.toFixed(2)),
                value: f,
                category: "token"
            }, {
                id: r.MeanTokenLatency,
                name: "Mean Token lat.",
                stat: d ? "".concat(d.toFixed(2), "ms") : null,
                value: null != d ? d : null,
                category: "aggregate"
            }, {
                id: r.MedianTokenLatency,
                name: "Median Token lat.",
                stat: c ? "".concat(c.toFixed(2), "ms") : null,
                value: null != c ? c : null,
                category: "token"
            }, {
                id: r.MinTokenLatency,
                name: "Min Token lat.",
                stat: "".concat(u.toFixed(2), "ms"),
                value: null != u ? u : null,
                category: "token"
            }, {
                id: r.MaxTokenLatency,
                name: "Max Token lat.",
                stat: "".concat(m.toFixed(2), "ms"),
                value: null != m ? m : null,
                category: "token"
            }, {
                id: r.P95TokenLatency,
                name: "p95 Token lat.",
                stat: s ? "".concat(s.toFixed(2), "ms") : null,
                value: null != s ? s : null,
                category: "aggregate"
            }, {
                id: r.P99TokenLatency,
                name: "p99 Token lat.",
                stat: l ? "".concat(l.toFixed(2), "ms") : null,
                value: null != l ? l : null,
                category: "aggregate"
            }]
        }
          , d = function() {
            var e, t = (0,
            s.JP)(), n = (0,
            s.AA)();
            if (!t || !n)
                return {
                    stats: [],
                    targetLatencyData: []
                };
            var a = t[n]
              , r = null !== (e = null == a ? void 0 : a.data) && void 0 !== e ? e : [];
            return {
                stats: l(r),
                targetLatencyData: r
            }
        }
    },
    68113: function(e, t, n) {
        "use strict";
        n.d(t, {
            AA: function() {
                return M
            },
            Ae: function() {
                return p
            },
            BC: function() {
                return j
            },
            F4: function() {
                return f
            },
            JP: function() {
                return w
            },
            Q7: function() {
                return v
            },
            WD: function() {
                return y
            },
            gL: function() {
                return g
            },
            iZ: function() {
                return k
            },
            j7: function() {
                return b
            },
            kn: function() {
                return h
            }
        });
        var a = n(6939)
          , r = n(36112)
          , i = n(66027)
          , s = n(78103)
          , o = n(10936);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var c = (0,
        s.ZP)(function() {
            return {
                messagesDevData: {},
                activeNodeId: void 0,
                ui: {
                    focusedNodeId: void 0
                }
            }
        })
          , u = c.getState
          , m = c.setState
          , f = function(e, t, n, a) {
            m(function(i) {
                return d(d({}, i), {}, {
                    activeNodeId: e,
                    ui: {
                        focusedNodeId: e
                    },
                    messagesDevData: d(d({}, i.messagesDevData), {}, (0,
                    r.Z)({}, e, {
                        status: "active",
                        data: [],
                        model: t,
                        serverRequestId: n,
                        preflightTime: a
                    }))
                })
            })
        }
          , p = function(e, t) {
            m(function(n) {
                var i = n.messagesDevData[e];
                return d(d({}, n), {}, {
                    activeNodeId: e,
                    messagesDevData: d(d({}, n.messagesDevData), {}, (0,
                    r.Z)({}, e, d(d({}, i), {}, {
                        data: [].concat((0,
                        a.Z)(i.data), [t])
                    })))
                })
            })
        }
          , x = function(e, t) {
            var n;
            return null === (n = t.find(function(t) {
                return t.id === e
            })) || void 0 === n ? void 0 : n.value
        }
          , g = function(e) {
            var t = w()[e]
              , n = (0,
            o.Oq)(t.data)
              , a = t.preflightTime
              , r = {
                model: t.model,
                serverRequestId: t.serverRequestId,
                preflightTime: a,
                countTokens: x(o.kd.TokenCount, n),
                tsFirstToken: x(o.kd.FirstTokenLatency, n),
                tsMaxTokenTime: x(o.kd.MaxTokenLatency, n),
                tsMeanTokenWithoutFirst: x(o.kd.MeanTokenLatency, n),
                tsMedianTokenWithoutFirst: x(o.kd.MedianTokenLatency, n),
                tsMinTokenTime: x(o.kd.MinTokenLatency, n),
                tsStdDevTokenTime: x(o.kd.StdDevTokenLatency, n),
                tsP95TokenWithoutFirst: x(o.kd.P95TokenLatency, n),
                tsP99TokenWithoutFirst: x(o.kd.P99TokenLatency, n),
                tsTotalRequestTime: x(o.kd.TotalRequestTime, n)
            };
            i.ZP.postLatencyTimingEvent(r)
        }
          , h = function(e) {
            return m(function(t) {
                var n = d(d({}, t.messagesDevData[e]), {}, {
                    status: "finished"
                });
                return d(d({}, t), {}, {
                    messagesDevData: d(d({}, t.messagesDevData), {}, (0,
                    r.Z)({}, e, n))
                })
            })
        }
          , y = function(e) {
            return m(function(t) {
                return d(d({}, t), {}, {
                    ui: d(d({}, t.ui), {}, {
                        focusedNodeId: e
                    })
                })
            })
        };
        function v(e) {
            var t = Object.keys(w())
              , n = t.indexOf(e);
            if (-1 === n)
                throw Error("Key not found in object");
            var a = (n + 1) % t.length;
            return t[a]
        }
        function k(e) {
            var t = Object.keys(w())
              , n = t.indexOf(e);
            if (-1 === n)
                throw Error("Key not found in object");
            var a = (n - 1 + t.length) % t.length;
            return t[a]
        }
        function b(e) {
            return Object.keys(w()).indexOf(e)
        }
        var j = function() {
            return Object.keys(w()).length
        }
          , w = function() {
            return u().messagesDevData
        }
          , M = function() {
            return u().ui.focusedNodeId
        }
    },
    97300: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return aN
            },
            n: function() {
                return aS
            }
        });
        var a, r, i, s, o, l, d, c, u, m, f, p, x, g, h, y, v, k, b, j, w, M, C, T, P, O, I, S, N, _, D, Z, R, F, E, A, L, q, B = n(90038), z = n(36112), U = n(19841), V = n(70079), G = n(21389), H = n(5063), W = n(41543), Q = n(7144), $ = n(1890), X = n(25349), K = n(99893), Y = n(70671), J = n(94968), ee = n(11591), et = n(19954), en = n(18008), ea = n(73582), er = n(73929), ei = n(5974), es = n(41899), eo = n(86178), el = n(26272), ed = n(90387), ec = n(79505), eu = n(90439), em = n(58369), ef = n(6939), ep = n(50134), ex = n(4399), eg = n.n(ex), eh = n(82256), ey = n(21775), ev = n(66027), ek = n(82473), eb = n(61236), ej = n(54362), ew = n(66140);
        function eM(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function eC(e) {
            return eT.apply(this, arguments)
        }
        function eT() {
            return (eT = (0,
            ep.Z)(eg().mark(function e(t) {
                var n, a;
                return eg().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.queryKey,
                            e.next = 3,
                            ev.ZP.publicGetPluginsById({
                                ids: n
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a.items);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function eP(e) {
            var t, n, a, r, i, s;
            return null !== (t = null === (a = (0,
            et.GR)(e),
            r = (0,
            Q.hz)(),
            i = (0,
            ey.Nw)(eh.ev.PLUGINS, r),
            s = (0,
            ek.NL)(),
            n = (0,
            eb.a)({
                queryKey: ["threadPlugins", (0,
                ef.Z)(a).sort().join("")],
                queryFn: eC,
                initialData: function() {
                    var e, t, n, r = null === (e = s.getQueryData(ew.Z)) || void 0 === e ? void 0 : e.items, i = null === (t = s.getQueryData(ej.V)) || void 0 === t ? void 0 : t.items, o = [], l = function(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return eM(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n)
                                        return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                        return eM(e, t)
                                }
                            }(e))) {
                                n && (e = n);
                                var a = 0
                                  , r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return a >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[a++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, s = !0, o = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return s = e.done,
                                e
                            },
                            e: function(e) {
                                o = !0,
                                i = e
                            },
                            f: function() {
                                try {
                                    s || null == n.return || n.return()
                                } finally {
                                    if (o)
                                        throw i
                                }
                            }
                        }
                    }(a);
                    try {
                        for (l.s(); !(n = l.n()).done; ) {
                            var d = function() {
                                var e, t = n.value, a = null !== (e = null == r ? void 0 : r.find(function(e) {
                                    return e.id === t
                                })) && void 0 !== e ? e : null == i ? void 0 : i.find(function(e) {
                                    return e.id === t
                                });
                                if (null == a)
                                    return {
                                        v: void 0
                                    };
                                o.push(a)
                            }();
                            if ("object" == typeof d)
                                return d.v
                        }
                    } catch (e) {
                        l.e(e)
                    } finally {
                        l.f()
                    }
                    return o
                },
                enabled: i && a.length > 0
            })) || void 0 === n ? void 0 : n.data) && void 0 !== t ? t : []
        }
        var eO = n(35250);
        function eI(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var eS = ["#7989FF"]
          , eN = function(e) {
            var t = e.children;
            return (0,
            eO.jsx)("div", {
                className: "pt-0.5",
                children: (0,
                eO.jsx)("div", {
                    className: "gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full",
                    children: t
                })
            })
        };
        function e_(e) {
            var t, n, a = e.isCompletionRequestInProgress, r = e.messages, i = e.clientThreadId, s = e.isCompletion, o = e.avatarColor, l = e.showInlineEmbeddedDisplay, d = (0,
            V.useMemo)(function() {
                var e, t = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return eI(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n)
                                    return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return eI(e, t)
                            }
                        }(e))) {
                            n && (e = n);
                            var a = 0
                              , r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, s = !0, o = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return s = e.done,
                            e
                        },
                        e: function(e) {
                            o = !0,
                            i = e
                        },
                        f: function() {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (o)
                                    throw i
                            }
                        }
                    }
                }(r);
                try {
                    for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value
                          , a = (0,
                        em.ZC)(n).flagSeverity;
                        if (void 0 !== a)
                            return a
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }, [r]), c = null === (n = r[0].message.metadata) || void 0 === n ? void 0 : n.shared_conversation_id, u = (0,
            ea.aF)(), m = (0,
            et.UL)(i), f = (0,
            eu.Q)(), p = f.gizmoEditorData, x = f.mode, g = (0,
            eO.jsx)(eN, {
                children: (0,
                eO.jsx)(ed.k$, {
                    background: null != o ? o : "#19c37d",
                    iconName: "openai",
                    notice: null != d ? d : void 0,
                    size: "gizmoConversation"
                })
            }), h = eP(i);
            if (a && r.length > 0) {
                var y = function(e, t) {
                    var n = (0,
                    es.rH)(t.message);
                    if (n === es.Cs.Plugin || n === es.Cs.PluginTool) {
                        var a = (0,
                        es.Lx)(n === es.Cs.Plugin ? t.message.recipient : t.message.author.name);
                        return e.find(function(e) {
                            return e.namespace === (null == a ? void 0 : a.namespace)
                        })
                    }
                }(h, r[r.length - 1]);
                null != y && (g = (0,
                eO.jsx)(eN, {
                    children: (0,
                    eO.jsx)(ed.Ph, {
                        plugin: y,
                        notice: null != d ? d : void 0,
                        iconSize: "gizmoConversation"
                    })
                }))
            }
            return null != m.gizmoId ? g = (0,
            eO.jsx)(eN, {
                children: (0,
                eO.jsx)(ec.M, {
                    gizmoId: m.gizmoId,
                    className: "h-6 w-6"
                })
            }) : null != p && "test" === x && (g = (0,
            eO.jsx)(ec.Z, {
                isFirstParty: !1,
                src: p.profilePictureUrl,
                className: "h-6 w-6"
            })),
            (0,
            eO.jsx)("div", {
                children: s ? g : null != c || void 0 !== l && l ? (0,
                eO.jsx)(eN, {
                    children: (0,
                    eO.jsx)(ed.k$, {
                        background: eS[(null !== (t = null == c ? void 0 : c.charCodeAt(0)) && void 0 !== t ? t : 0) % eS.length],
                        iconName: "user",
                        size: "gizmoConversation"
                    })
                }) : (0,
                eO.jsx)(eN, {
                    children: (0,
                    eO.jsx)(ed.Yt, {
                        user: u,
                        notice: null != d ? d : void 0,
                        size: "gizmoConversation"
                    })
                })
            })
        }
        var eD = n(80459)
          , eZ = n(48944)
          , eR = n(91559)
          , eF = n(16889)
          , eE = n(37097)
          , eA = n(14711)
          , eL = n(28818)
          , eq = n(6013)
          , eB = n(10721)
          , ez = n(1454)
          , eU = n(32004)
          , eV = n(8844)
          , eG = n(12379)
          , eH = n(86543)
          , eW = n(34317)
          , eQ = n(73524)
          , e$ = ["oauth_success"];
        function eX(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function eK(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? eX(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eX(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function eY(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return eJ(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return eJ(e, t)
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, s = !0, o = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return s = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    i = e
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }
        function eJ(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function e0(e) {
            var t = e.messages
              , n = e.clientThreadId
              , a = e.isLastTurnInConversation
              , r = e.onRequestCompletion
              , i = (0,
            eB.useRouter)()
              , s = (0,
            eZ.Z)(t)
              , o = s[0]
              , l = s.slice(1)
              , c = (0,
            Y.Z)()
              , u = null != (0,
            V.useContext)(er.gB)
              , m = (0,
            W.Wq)(n);
            (m.kind === ee.OL.GizmoInteraction || m.kind === ee.OL.GizmoMagicCreate || m.kind === ee.OL.GizmoTest) && (O = m.gizmo);
            var f = (0,
            es.Lx)(o.message.recipient);
            if ((null == f ? void 0 : f.functionName) != null && (null === (p = O) || void 0 === p ? void 0 : p.tools) != null) {
                var p, x, g, h, y, v, k, b, j, w, M, C, T, P, O, I, S, N = eY(O.tools);
                try {
                    for (N.s(); !(S = N.n()).done; ) {
                        var _ = S.value;
                        if (function(e, t) {
                            if (e.type !== eh.qK.JIT_PLUGIN || (null === (n = e.metadata) || void 0 === n ? void 0 : n.json_schema) == null)
                                return !1;
                            var n, a = !1;
                            return !function e(n) {
                                for (var r in n)
                                    "operationId" === r && n[r] === t && (a = !0),
                                    n[r] && "object" == typeof n[r] && e(n[r])
                            }(e.metadata.json_schema),
                            a
                        }(_, f.functionName)) {
                            I = _;
                            break
                        }
                    }
                } catch (e) {
                    N.e(e)
                } finally {
                    N.f()
                }
            }
            var D = (null === (x = I) || void 0 === x ? void 0 : null === (g = x.metadata) || void 0 === g ? void 0 : null === (h = g.auth) || void 0 === h ? void 0 : h.type) === ee.Jv.OAuth
              , Z = (0,
            eE.Wd)(null === (y = O) || void 0 === y ? void 0 : y.gizmo.id, D)
              , R = Z.data
              , F = Z.isLoading
              , E = l.filter(function(e) {
                var t, n, a;
                return (null === (t = e.message.metadata) || void 0 === t ? void 0 : null === (n = t.jit_plugin_data) || void 0 === n ? void 0 : null === (a = n.from_server) || void 0 === a ? void 0 : a.type) === "debug"
            })
              , A = l.filter(function(e) {
                return !["debug", "send_test"].some(function(t) {
                    var n, a, r;
                    return t === (null === (n = e.message.metadata) || void 0 === n ? void 0 : null === (a = n.jit_plugin_data) || void 0 === a ? void 0 : null === (r = a.from_server) || void 0 === r ? void 0 : r.type)
                })
            })
              , L = (null == R ? void 0 : null === (v = R.settings.find(function(e) {
                var t, n;
                return e.action_id === (null === (t = I) || void 0 === t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.action_id)
            })) || void 0 === v ? void 0 : v.oauth_status) === "valid"
              , q = function(e, t, n, a) {
                var r, i, s;
                if ((null === (r = e.message.metadata) || void 0 === r ? void 0 : null === (i = r.jit_plugin_data) || void 0 === i ? void 0 : null === (s = i.from_server) || void 0 === s ? void 0 : s.type) === "send_test")
                    return {
                        uiState: d.Hidden
                    };
                if (t.some(function(e) {
                    return e.message.content.content_type === ee.PX.SystemError
                }))
                    return {
                        uiState: d.Error
                    };
                if ((0,
                eQ.We)(e.message))
                    return {
                        uiState: d.Stopped
                    };
                for (var o = t.length - 1; o >= 0; o--) {
                    var l, c, u, m, f, p, x, g, h, y = t[o];
                    if (null !== (l = y.message.metadata) && void 0 !== l && l.invoked_plugin)
                        return {
                            uiState: d.Finished,
                            jitPluginData: y.message.metadata.jit_plugin_data
                        };
                    var v = null === (c = y.message.metadata) || void 0 === c ? void 0 : null === (u = c.jit_plugin_data) || void 0 === u ? void 0 : u.from_client;
                    if (null != v) {
                        if ((null == v ? void 0 : v.user_action.data.type) === "deny")
                            return {
                                uiState: d.Denied
                            };
                        if ((null == v ? void 0 : v.user_action.data.type) === "oauth_success")
                            return {
                                uiState: d.Running,
                                jitPluginData: null === (p = y.message.metadata) || void 0 === p ? void 0 : p.jit_plugin_data
                            };
                        break
                    }
                    var k = null === (m = y.message.metadata) || void 0 === m ? void 0 : null === (f = m.jit_plugin_data) || void 0 === f ? void 0 : f.from_server;
                    if ((null == k ? void 0 : k.type) === "preview" && n)
                        return {
                            uiState: d.Running,
                            jitPluginData: null === (x = y.message.metadata) || void 0 === x ? void 0 : x.jit_plugin_data
                        };
                    if ((null == k ? void 0 : k.type) === "confirm_action" && n)
                        return {
                            uiState: d.UserConfirmation,
                            jitPluginData: null === (g = y.message.metadata) || void 0 === g ? void 0 : g.jit_plugin_data
                        };
                    if ((null == k ? void 0 : k.type) === "oauth_required" && !a && n)
                        return {
                            uiState: d.OauthLogin,
                            jitPluginData: null === (h = y.message.metadata) || void 0 === h ? void 0 : h.jit_plugin_data
                        }
                }
                return {
                    uiState: n ? d.Running : d.Stopped
                }
            }(o, A, a, L)
              , B = q.uiState
              , z = q.jitPluginData
              , U = (null == z ? void 0 : null === (k = z.from_server) || void 0 === k ? void 0 : k.type) !== "denied_by_user" ? null == z ? void 0 : null === (b = z.from_server) || void 0 === b ? void 0 : b.body.domain : null === (j = I) || void 0 === j ? void 0 : null === (w = j.metadata) || void 0 === w ? void 0 : w.domain
              , G = null === (M = I) || void 0 === M ? void 0 : null === (C = M.metadata) || void 0 === C ? void 0 : C.privacy_policy_url;
            if ((0,
            V.useEffect)(function() {
                var e, a;
                if (m.kind === ee.OL.GizmoInteraction && (null == z ? void 0 : null === (e = z.from_client) || void 0 === e ? void 0 : e.user_action.data.type) !== "oauth_success" && (null == z ? void 0 : null === (a = z.from_server) || void 0 === a ? void 0 : a.type) === "oauth_required" && !L) {
                    var s = i.query
                      , l = s.oauth_success
                      , d = (0,
                    eD.Z)(s, e$);
                    if (l) {
                        var c, u = eY(z.from_server.body.actions);
                        try {
                            for (u.s(); !(c = u.n()).done; ) {
                                var f = c.value;
                                if ("oauth_redirect" === f.type) {
                                    e2({
                                        assistantMessage: o,
                                        allMessages: t,
                                        clientThreadId: n,
                                        conversationMode: m,
                                        onRequestCompletion: r,
                                        actionData: {
                                            type: "oauth_success"
                                        },
                                        targetMessageId: f.oauth_redirect.target_message_id
                                    });
                                    return
                                }
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        i.replace({
                            pathname: i.pathname,
                            query: d
                        })
                    }
                }
            }, [L, i, o, t, n, m, r, z]),
            null == O || D && F)
                return null;
            var H = eH.X.Running
              , Q = U ? e6.running : e6.starting
              , $ = {
                domain: U
            };
            if (B === d.Hidden)
                return null;
            if (B === d.OauthLogin || B === d.UserConfirmation) {
                H = eH.X.Paused,
                Q = e6.confirming;
                var X = {
                    gizmoName: O.gizmo.display.name,
                    domain: U
                }
                  , K = c.formatMessage(e6.confirmParamsTitle, X);
                $ = eK(eK({}, X), {}, {
                    params: function(e) {
                        return (0,
                        eO.jsx)(e3, {
                            title: K,
                            assistantMessage: o,
                            privacyPolicyUrl: G,
                            children: e
                        })
                    }
                })
            } else if (B === d.Finished) {
                H = eH.X.Finished,
                Q = e6.finished;
                var J = c.formatMessage(e6.sentParamsTitle, {
                    gizmoName: O.gizmo.display.name,
                    domain: U
                });
                $ = {
                    domain: U,
                    params: function(e) {
                        return (0,
                        eO.jsx)(e3, {
                            title: J,
                            assistantMessage: o,
                            privacyPolicyUrl: G,
                            children: e
                        })
                    }
                }
            } else
                B === d.Error ? (H = eH.X.Error,
                Q = e6.error) : (B === d.Stopped || B === d.Denied) && (H = eH.X.Stopped,
                Q = B === d.Denied ? e6.declined : e6.stopped);
            return (0,
            eO.jsxs)(eO.Fragment, {
                children: [(0,
                eO.jsx)(e1, {
                    debugMessages: E
                }), (0,
                eO.jsx)(eH.Z, {
                    conversationMessages: t,
                    icon: eW.dX,
                    status: H,
                    displayMessage: Q,
                    displayMessageValues: $,
                    estimatedToolDurationMs: eG.Ui,
                    shouldPersistAfterFinished: !0
                }), (B === d.UserConfirmation || B === d.OauthLogin) && (null == z ? void 0 : null === (T = z.from_server) || void 0 === T ? void 0 : T.type) !== "denied_by_user" && !u && (0,
                eO.jsx)("div", {
                    className: "mb-2 flex gap-2",
                    children: null == z ? void 0 : null === (P = z.from_server) || void 0 === P ? void 0 : P.body.actions.map(function(e) {
                        var a = {
                            assistantMessage: o,
                            allMessages: t,
                            clientThreadId: n,
                            conversationMode: m,
                            onRequestCompletion: r
                        };
                        return "deny" === e.type ? (0,
                        eO.jsx)(eR.z, {
                            color: "neutral",
                            className: "h-8",
                            onClick: function() {
                                e2(eK(eK({}, a), {}, {
                                    actionData: {
                                        type: "deny"
                                    },
                                    targetMessageId: e.deny.target_message_id
                                }))
                            },
                            children: (0,
                            eO.jsx)(eU.Z, eK({}, "decline" === e.name ? e6.decline : e6.deny))
                        }) : "allow" === e.type ? (0,
                        eO.jsx)(eR.z, {
                            color: "dark",
                            className: "h-8",
                            onClick: function() {
                                e2(eK(eK({}, a), {}, {
                                    actionData: {
                                        type: "allow"
                                    },
                                    targetMessageId: e.allow.target_message_id
                                }))
                            },
                            children: (0,
                            eO.jsx)(eU.Z, eK({}, "allow" === e.name ? e6.allow : e6.confirm))
                        }) : "always_allow" === e.type ? (0,
                        eO.jsx)(eR.z, {
                            color: "neutral",
                            className: "h-8",
                            onClick: (0,
                            ep.Z)(eg().mark(function t() {
                                return eg().wrap(function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            e2(eK(eK({}, a), {}, {
                                                actionData: {
                                                    type: "always_allow",
                                                    operation_hash: e.always_allow.operation_hash
                                                },
                                                targetMessageId: e.always_allow.target_message_id
                                            }));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                        }
                                }, t)
                            })),
                            children: (0,
                            eO.jsx)(eU.Z, eK(eK({}, e6.alwaysAllow), {}, {
                                values: {
                                    domain: U
                                }
                            }))
                        }) : "oauth_redirect" === e.type ? (0,
                        eO.jsx)(eR.z, {
                            color: "dark",
                            className: "h-8",
                            onClick: function() {
                                !function(e, t, n, a) {
                                    e5.apply(this, arguments)
                                }(e.oauth_redirect, n, O, m.kind)
                            },
                            children: (0,
                            eO.jsx)(eU.Z, eK(eK({}, e6.signInButton), {}, {
                                values: {
                                    domain: U
                                }
                            }))
                        }) : null
                    })
                })]
            })
        }
        function e9(e) {
            var t = e.messageMetadata
              , n = (0,
            V.useState)(!1)
              , a = n[0]
              , r = n[1];
            return (0,
            eO.jsxs)("div", {
                className: "my-2 flex flex-col text-sm",
                children: [(0,
                eO.jsxs)("div", {
                    className: "flex flex-row items-center hover:cursor-pointer",
                    onClick: function() {
                        r(!a)
                    },
                    children: [a ? (0,
                    eO.jsx)(ez.bTu, {
                        className: "icon-sm"
                    }) : (0,
                    eO.jsx)(ez.Tfp, {
                        className: "icon-sm"
                    }), (0,
                    eO.jsx)("div", {
                        className: "font-medium",
                        children: t.display_message
                    })]
                }), a && (0,
                eO.jsx)("pre", {
                    children: JSON.stringify(t.data, null, 2)
                })]
            })
        }
        function e1(e) {
            var t = e.debugMessages;
            return (0,
            eO.jsx)("div", {
                children: t.map(function(e, t) {
                    var n, a, r = null === (n = e.message.metadata) || void 0 === n ? void 0 : null === (a = n.jit_plugin_data) || void 0 === a ? void 0 : a.from_server;
                    return r && "debug" === r.type ? (0,
                    eO.jsx)(e9, {
                        messageMetadata: r.body
                    }, t) : null
                })
            })
        }
        function e2(e) {
            var t = e.actionData
              , n = e.assistantMessage
              , a = e.targetMessageId
              , r = e.allMessages
              , i = e.clientThreadId
              , s = e.conversationMode
              , o = e.onRequestCompletion
              , l = {
                id: (0,
                eV.Z)(),
                author: {
                    role: ee.uU.Tool,
                    name: n.message.recipient
                },
                content: {
                    content_type: ee.PX.Text,
                    parts: [""]
                },
                recipient: "all",
                metadata: {
                    jit_plugin_data: {
                        from_client: {
                            user_action: {
                                data: t,
                                target_message_id: a
                            }
                        }
                    }
                }
            };
            et.tQ.updateTree(i, function(e) {
                e.addNode(l.id, l, r[r.length - 1].message.id, ee.uU.Tool, {
                    completionSampleFinishTime: Date.now()
                })
            }),
            et.tQ.setThreadCurrentLeafId(i, l.id),
            o({
                type: ee.Os.Next,
                promptId: l.id,
                eventMetadata: {
                    eventSource: "mouse"
                },
                cancelActiveRequests: !1,
                completionMetadata: {
                    conversationMode: s
                }
            })
        }
        function e5() {
            return (e5 = (0,
            ep.Z)(eg().mark(function e(t, n, a, r) {
                var i, s, o;
                return eg().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            i = et.tQ.getServerThreadId(n),
                            s = r === ee.OL.GizmoTest,
                            o = i && !s ? (0,
                            eL.ZV)(i, a) : window.location.href,
                            eA.U.doOAuthRedirect(t.gizmo_id, t.gizmo_action_id, t.domain, o, s);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function e3(e) {
            var t = e.title
              , n = e.children
              , a = e.assistantMessage
              , r = e.privacyPolicyUrl
              , i = (0,
            es.RR)(a.message);
            try {
                i = JSON.stringify(JSON.parse(i), null, 2)
            } catch (e) {}
            return (0,
            eO.jsxs)(eq.fC, {
                children: [(0,
                eO.jsx)(eq.xz, {
                    children: (0,
                    eO.jsxs)("div", {
                        className: "inline-flex items-center gap-1",
                        children: [n, (0,
                        eO.jsx)(H.ud, {})]
                    })
                }), (0,
                eO.jsx)(eq.h_, {
                    children: (0,
                    eO.jsx)(eq.VY, {
                        side: "bottom",
                        sideOffset: 8,
                        align: "start",
                        children: (0,
                        eO.jsxs)("div", {
                            className: "max-w-sm rounded-lg bg-token-surface-primary p-2 shadow-[0_0_24px_0_rgba(0,0,0,0.05),inset_0_0.5px_0_0_rgba(0,0,0,0.05),0_2px_8px_0_rgba(0,0,0,0.05)]",
                            children: [(0,
                            eO.jsx)("div", {
                                className: "mb-2 text-sm font-medium",
                                children: t
                            }), (0,
                            eO.jsx)(eF.$, {
                                className: "bg-token-surface-secondary text-xs text-token-text-primary",
                                codeContainerClassName: "max-h-32 p-2",
                                children: i
                            }), null != r && (0,
                            eO.jsx)("div", {
                                className: "mt-2 flex text-sm",
                                children: (0,
                                eO.jsxs)("a", {
                                    href: r,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-1 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                    children: [(0,
                                    eO.jsx)(eU.Z, eK({}, e6.privacyPolicyLink)), (0,
                                    eO.jsx)(ez.AlO, {})]
                                })
                            })]
                        })
                    })
                })]
            })
        }
        (a = d || (d = {}))[a.Running = 0] = "Running",
        a[a.Finished = 1] = "Finished",
        a[a.Error = 2] = "Error",
        a[a.Stopped = 3] = "Stopped",
        a[a.OauthLogin = 4] = "OauthLogin",
        a[a.UserConfirmation = 5] = "UserConfirmation",
        a[a.Denied = 6] = "Denied",
        a[a.Hidden = 7] = "Hidden";
        var e6 = (0,
        J.vU)({
            starting: {
                id: "jitPluginMessage.starting",
                defaultMessage: "Starting action"
            },
            confirming: {
                id: "jitPluginMessage.confirmingV2",
                defaultMessage: "<params>{gizmoName} wants to talk to {domain}, only do this for sites you trust</params>"
            },
            running: {
                id: "jitPluginMessage.runningV4",
                defaultMessage: "Talking to {domain}"
            },
            finished: {
                id: "jitPluginMessage.finishedV3",
                defaultMessage: "<params>Talked to {domain}</params>"
            },
            stopped: {
                id: "jitPluginMessage.stoppedV4",
                defaultMessage: "Stopped talking to {domain}"
            },
            error: {
                id: "jitPluginMessage.errorV5",
                defaultMessage: "Error talking to {domain}"
            },
            declined: {
                id: "jitPluginMessage.declined",
                defaultMessage: "You declined this action"
            },
            ranTest: {
                id: "jitPluginMessage.ranTest",
                defaultMessage: "Tested {operationName}"
            },
            alwaysAllow: {
                id: "jitPluginMessage.alwaysAllow",
                defaultMessage: "Always allow for {domain}"
            },
            allow: {
                id: "jitPluginMessage.allow",
                defaultMessage: "Allow"
            },
            decline: {
                id: "jitPluginMessage.decline",
                defaultMessage: "Decline"
            },
            confirm: {
                id: "jitPluginMessage.confirm",
                defaultMessage: "Confirm"
            },
            deny: {
                id: "jitPluginMessage.deny",
                defaultMessage: "Deny"
            },
            confirmParamsTitle: {
                id: "jitPluginMessage.confirmParamsTitleV2",
                defaultMessage: "{gizmoName} needs to send this info to {domain}"
            },
            sentParamsTitle: {
                id: "jitPluginMessage.sentParamsTitleV2",
                defaultMessage: "{gizmoName} sent this info to {domain}"
            },
            signInButton: {
                id: "jitPluginMessage.signInButton",
                defaultMessage: "Sign in with {domain}"
            },
            privacyPolicyLink: {
                id: "jitPluginMessage.privacyPolicyLinkV2",
                defaultMessage: "Privacy policy"
            }
        })
          , e4 = n(67311)
          , e7 = n(98486)
          , e8 = n(21988)
          , te = n.n(e8)
          , tt = n(55161)
          , tn = n(44675);
        function ta(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function tr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ta(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ti(e) {
            var t = (0,
            V.useState)(!1)
              , n = t[0]
              , a = t[1];
            return (0,
            eO.jsx)(te(), tr(tr({}, e), {}, {
                alt: e.alt,
                onLoadingComplete: function(t) {
                    var n;
                    a(!0),
                    null === (n = e.onLoadingComplete) || void 0 === n || n.call(e, t)
                },
                unoptimized: !0,
                className: (0,
                U.default)(e.className, "transition-opacity duration-300", n ? "opacity-100" : "opacity-0")
            }))
        }
        function ts(e) {
            var t = (0,
            V.useContext)(er.gB)
              , n = null == t ? void 0 : t.serverSharedThreadId;
            return (0,
            e7.h)({
                queries: e.map(function(e) {
                    var t, a = (0,
                    tt.Iy)(e.asset_pointer);
                    return {
                        queryKey: ["getFileDownloadLink", a],
                        queryFn: (t = (0,
                        ep.Z)(eg().mark(function t() {
                            var r;
                            return eg().wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!(null != n)) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return", tr(tr({}, e), {}, {
                                            url: to(n, a)
                                        }));
                                    case 4:
                                        return t.next = 6,
                                        ev.ZP.getFileDownloadLink(a).catch(function(e) {
                                            throw console.error("Could not fetch file with ID ".concat(a, " from file service"), e.message),
                                            e
                                        });
                                    case 6:
                                        if (!((r = t.sent).status !== eh.KF.Success)) {
                                            t.next = 10;
                                            break
                                        }
                                        throw console.error("Could not fetch file with ID ".concat(a, " from file service"), r),
                                        Error("Could not fetch file with ID ".concat(a, " from file service"));
                                    case 10:
                                        return t.abrupt("return", tr(tr({}, e), {}, {
                                            url: r.download_url
                                        }));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t)
                        })),
                        function() {
                            return t.apply(this, arguments)
                        }
                        )
                    }
                })
            })
        }
        function to(e, t) {
            var n, a = null !== (n = tn.env.CDN_IMAGE_BASE_URL) && void 0 !== n ? n : "", r = "".concat(e, "/image/").concat(t);
            return a ? "".concat(a, "/").concat(r) : "".concat(ev.B, "/share/").concat(r)
        }
        function tl(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function td(e) {
            var t = e.messages
              , n = ts(t.flatMap(function(e) {
                return "multimodal_text" === e.message.content.content_type ? e.message.content.parts.filter(function(e) {
                    return "object" == typeof e && "asset_pointer"in e
                }) : []
            }));
            return (0,
            eO.jsx)("div", {
                children: n.map(function(e, n) {
                    var a = e.isLoading
                      , r = e.data
                      , i = e.error;
                    if (a)
                        return (0,
                        eO.jsx)(eH.Z, {
                            conversationMessages: t,
                            icon: eW.KC,
                            status: eH.X.Finished,
                            estimatedToolDurationMs: eG.X_,
                            animationLoopDurationMs: 4e3
                        }, n);
                    if (null != i || (null == r ? void 0 : r.url) == null)
                        return (0,
                        eO.jsx)(eH.Z, {
                            conversationMessages: t,
                            icon: eW.uP,
                            status: eH.X.Error,
                            displayMessage: tf.failedProfilePic,
                            estimatedToolDurationMs: 0,
                            animationLoopDurationMs: 3500
                        }, n);
                    var s = r.url
                      , o = r.width
                      , l = r.height;
                    return (0,
                    eO.jsx)("div", {
                        className: "flex items-center justify-center p-4",
                        children: (0,
                        eO.jsx)(ti, {
                            className: "gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",
                            alt: "Profile Picture",
                            src: s,
                            width: o,
                            height: l
                        })
                    }, n)
                })
            })
        }
        function tc(e) {
            var t = e.messages;
            return 0 === t.length ? null : (0,
            eO.jsx)(eH.Z, {
                conversationMessages: t,
                icon: eW.KC,
                status: eH.X.Running,
                displayMessage: tf.generatingProfilePic,
                estimatedToolDurationMs: eG.X_,
                animationLoopDurationMs: 4e3
            })
        }
        function tu(e) {
            var t = e.messages;
            return t.some(function(e) {
                return "in_progress" === e.message.status
            }) ? (0,
            eO.jsx)(eH.Z, {
                conversationMessages: t,
                icon: eW.uP,
                status: eH.X.Running,
                displayMessage: tf.updating,
                estimatedToolDurationMs: 1e4,
                animationLoopDurationMs: 3500
            }) : (0,
            eO.jsx)(eH.Z, {
                conversationMessages: t,
                icon: eW.uP,
                status: eH.X.Finished,
                estimatedToolDurationMs: 1e4,
                animationLoopDurationMs: 3500
            })
        }
        var tm = V.memo(function(e) {
            var t, n = e.messages, a = [], r = [], i = [], s = function(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return tl(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n)
                                return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return tl(e, t)
                        }
                    }(e))) {
                        n && (e = n);
                        var a = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done,
                        e
                    },
                    e: function(e) {
                        o = !0,
                        i = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                }
            }(n);
            try {
                for (s.s(); !(t = s.n()).done; ) {
                    var o = t.value;
                    "gizmo_editor.generate_profile_pic" === o.message.recipient ? a.push(o) : "gizmo_editor.generate_profile_pic" === o.message.author.name ? r.push(o) : "gizmo_editor.update_behavior" === o.message.recipient && i.push(o)
                }
            } catch (e) {
                s.e(e)
            } finally {
                s.f()
            }
            return (0,
            eO.jsxs)(eO.Fragment, {
                children: [a.length > 0 && 0 === r.length && (0,
                eO.jsx)(tc, {
                    messages: a
                }), r.length > 0 && (0,
                eO.jsx)(td, {
                    messages: r
                }), i.length > 0 && (0,
                eO.jsx)(tu, {
                    messages: i
                })]
            })
        })
          , tf = (0,
        J.vU)({
            updating: {
                id: "message.gizmo.updating",
                defaultMessage: "Updating GPT..."
            },
            generatingProfilePic: {
                id: "message.gizmo.generatingProfilePic",
                defaultMessage: "Generating profile picture..."
            },
            failedProfilePic: {
                id: "message.gizmo.failed",
                defaultMessage: "Failed to generate profile picture."
            }
        })
          , tp = n(58438)
          , tx = n(21120)
          , tg = V.memo(function(e) {
            var t, n, a, r = e.message, i = e.className, s = (0,
            V.useState)(!1), o = s[0], l = s[1], d = r.message.content.content_type === ee.PX.ModelEditableContext ? r.message.content.model_set_context : null, c = (0,
            es.RR)(r.message);
            if (r.message.content.content_type === ee.PX.UserEditableContext)
                return null;
            var u = r.message.recipient
              , m = !!(null !== (t = r.message.metadata) && void 0 !== t && t.rebase_system_message)
              , f = !!(null !== (n = r.message.metadata) && void 0 !== n && n.is_user_system_message);
            return (0,
            eO.jsxs)(eO.Fragment, {
                children: [(0,
                eO.jsxs)("div", {
                    className: (0,
                    U.default)(i, "mt-6 flex flex-col items-start gap-2 overflow-x-auto whitespace-pre-wrap break-words first:mt-0"),
                    children: [(0,
                    eO.jsxs)("div", {
                        className: "text-xs",
                        children: [(0,
                        eO.jsx)("div", {
                            className: "uppercase text-red-500",
                            children: "debug message"
                        }), !!d && (0,
                        eO.jsxs)("button", {
                            onClick: function() {
                                return l(!0)
                            },
                            className: "flex cursor-pointer items-center gap-1",
                            children: [(0,
                            eO.jsx)(tp.Z, {
                                className: "icon-sm"
                            }), (0,
                            eO.jsx)("div", {
                                className: "underline",
                                children: "View all model memories"
                            })]
                        })]
                    }), (0,
                    eO.jsx)("div", {
                        className: "flex w-full items-start justify-between",
                        children: (0,
                        eO.jsxs)("div", {
                            className: "text-xs text-gray-500",
                            children: [(0,
                            eO.jsxs)("div", {
                                children: ["From: ", null !== (a = r.message.author.name) && void 0 !== a ? a : r.message.author.role]
                            }), !!u && "all" !== u && (0,
                            eO.jsxs)("div", {
                                children: ["To: ", u]
                            })]
                        })
                    }), (0,
                    eO.jsx)("div", {
                        className: "whitespace-pre-wrap font-mono text-sm",
                        children: c
                    }), (0,
                    eO.jsxs)("div", {
                        className: "flex gap-3",
                        children: [m && (0,
                        eO.jsx)("div", {
                            className: "rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",
                            children: "Rebased System Message"
                        }), f && (0,
                        eO.jsx)("div", {
                            className: "rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",
                            children: "Custom Instruction"
                        })]
                    })]
                }), (0,
                eO.jsx)(tx.Z, {
                    title: "All Model Memories",
                    type: "success",
                    isOpen: o,
                    onClose: function() {
                        return l(!1)
                    },
                    children: (0,
                    eO.jsx)("div", {
                        className: "max-h-[80vh] overflow-auto whitespace-pre-wrap font-mono text-sm",
                        children: d
                    })
                })]
            })
        })
          , th = n(77449)
          , ty = n(73874)
          , tv = n(49685)
          , tk = n(21935)
          , tb = n(2827);
        function tj(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function tw(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tj(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tj(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var tM = (0,
        J.vU)({
            saveAndSubmit: {
                id: "NodeEditor.saveAndSubmit",
                defaultMessage: "Save & Submit"
            },
            cancel: {
                id: "NodeEditor.cancel",
                defaultMessage: "Cancel"
            }
        })
          , tC = G.Z.div(c || (c = (0,
        B.Z)(["text-center mt-2 flex justify-center"])));
        function tT(e) {
            var t = e.initialText
              , n = e.clientThreadId
              , a = e.currentLeaf
              , r = e.onChangeItemInView
              , i = e.onExitEdit
              , s = e.onRequestCompletion
              , o = e.disabled
              , l = e.attachments
              , d = (0,
            V.useId)()
              , c = "".concat(a, "-").concat(d)
              , u = (0,
            V.useState)(null != t ? t : "")
              , m = u[0]
              , f = u[1]
              , p = (0,
            V.useRef)(null)
              , x = (0,
            V.useCallback)(function(e) {
                f(e.currentTarget.value)
            }, [])
              , g = (0,
            W.WA)(n)
              , h = (0,
            V.useCallback)(function() {
                et.tQ.updateTree(n, function(e) {
                    var t = e.getParentId(a);
                    e.addNode(c, m, t, ee.uU.User, void 0, l ? {
                        attachments: l
                    } : void 0)
                }),
                r(c),
                s({
                    type: ee.Os.Next,
                    promptId: c,
                    eventMetadata: {
                        eventSource: "mouse"
                    },
                    cancelActiveRequests: !0,
                    completionMetadata: {
                        conversationMode: g
                    }
                }),
                i(),
                X.A.logEvent(K.M.changeNode, {
                    intent: "edit_save"
                })
            }, [l, n, a, c, m, r, s, i, g])
              , y = (0,
            V.useCallback)(function() {
                r(a),
                X.A.logEvent(K.M.changeNode, {
                    intent: "edit_cancel"
                }),
                i(),
                X.A.logEvent(K.M.cancelEditPrompt, {
                    threadId: et.tQ.getServerThreadId(n)
                })
            }, [a, r, i, n]);
            (0,
            V.useEffect)(function() {
                var e = p.current
                  , t = function(e) {
                    "Enter" === e.key && e.metaKey ? h() : "Escape" === e.key && y()
                };
                return e && e.addEventListener("keydown", t),
                function() {
                    e && e.removeEventListener("keydown", t)
                }
            }, [y, h]);
            var v = l && l.length > 0;
            return (0,
            eO.jsxs)(eO.Fragment, {
                children: [v && (0,
                eO.jsx)(tP, {
                    children: l.map(function(e) {
                        return (0,
                        eO.jsx)(tv.Z, {
                            file: e.name
                        }, e.id)
                    })
                }), (0,
                eO.jsx)(tb.ZP, {
                    ref: p,
                    value: m,
                    onChange: x,
                    className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                }), (0,
                eO.jsxs)(tC, {
                    children: [(0,
                    eO.jsx)(eR.z, {
                        as: "button",
                        onClick: h,
                        className: "mr-2",
                        disabled: o,
                        children: (0,
                        eO.jsx)(eU.Z, tw({}, tM.saveAndSubmit))
                    }), (0,
                    eO.jsx)(eR.z, {
                        as: "button",
                        color: "neutral",
                        onClick: y,
                        children: (0,
                        eO.jsx)(eU.Z, tw({}, tM.cancel))
                    })]
                })]
            })
        }
        var tP = G.Z.div(u || (u = (0,
        B.Z)(["flex gap-2 flex-wrap"])))
          , tO = n(47635)
          , tI = n(65618)
          , tS = n(97761);
        function tN(e) {
            var t, n = e.title, a = e.url, r = e.imageUrl, i = e.logoUrl, s = e.className, o = e.mini, l = (0,
            Y.Z)(), d = !!r, c = (0,
            V.useCallback)(function() {
                X.A.logEvent(K.M.carouselCardClick, {
                    content: a
                })
            }, [a]);
            try {
                t = tO.get(new URL(a).hostname)
            } catch (e) {
                return console.error("Invalid card url: ", e),
                null
            }
            return (0,
            eO.jsxs)(a ? "a" : "div", {
                className: (0,
                U.default)("flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]", s),
                href: a,
                target: a ? "_blank" : "",
                onClick: c,
                children: [d && (0,
                eO.jsx)(tD, {
                    children: (0,
                    eO.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0,
                        eO.jsx)("img", {
                            src: r,
                            alt: l.formatMessage(tZ.imageAlt, {
                                title: n
                            }),
                            className: "h-full w-full border-b border-black/10 object-cover"
                        })
                    })
                }), (0,
                eO.jsxs)("div", {
                    className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
                    children: [(0,
                    eO.jsx)(t_, {
                        $clamp: void 0 !== o && o || d,
                        children: n
                    }), (0,
                    eO.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [i ? (0,
                        eO.jsx)(tI.Z, {
                            url: i,
                            name: t,
                            size: 13
                        }) : (0,
                        eO.jsx)(tS.Z, {
                            url: a,
                            size: 13
                        }), (0,
                        eO.jsx)("div", {
                            className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
                            children: t
                        })]
                    })]
                })]
            })
        }
        var t_ = G.Z.div(m || (m = (0,
        B.Z)(["text-xs text-black\n", ""])), function(e) {
            return e.$clamp && "line-clamp-2"
        })
          , tD = G.Z.div(f || (f = (0,
        B.Z)(["relative w-full overflow-hidden pt-[67%]"])))
          , tZ = (0,
        J.vU)({
            imageAlt: {
                id: "Card.imageAlt",
                defaultMessage: "image of {title}"
            }
        })
          , tR = n(33554)
          , tF = n(46244)
          , tE = n(95182)
          , tA = n.n(tE);
        function tL(e) {
            var t = e.disabled
              , n = e.onClick
              , a = e.left
              , r = e.children;
            return (0,
            eO.jsx)("button", {
                disabled: t,
                onClick: n,
                "aria-disabled": t,
                className: (0,
                U.default)("flex h-6 w-[30px] items-center justify-center rounded-full", "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white", "transition-opacity disabled:opacity-20", "cursor-pointer disabled:cursor-auto", "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2", void 0 !== a && a ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full", t && "lg:hidden"),
                children: r
            })
        }
        var tq = n(97296)
          , tB = function(e) {
            var t = e.x
              , n = e.children
              , a = e.className;
            return (0,
            eO.jsx)(tq.E.div, {
                className: (0,
                U.default)("mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]", a),
                style: {
                    x: t
                },
                children: n
            })
        }
          , tz = {
            type: "spring",
            bounce: 0
        }
          , tU = (0,
        V.forwardRef)(function(e, t) {
            return (0,
            eO.jsx)("div", {
                ref: t,
                className: (0,
                U.default)("relative flex h-full w-full overflow-hidden", e.className),
                children: e.children
            })
        });
        tU.displayName = "CarouselContainer";
        var tV = (p = {},
        (0,
        z.Z)(p, ei._G.Mobile, 1),
        (0,
        z.Z)(p, ei._G.Small, 2),
        (0,
        z.Z)(p, ei._G.Medium, 2),
        (0,
        z.Z)(p, ei._G.Large, 3),
        (0,
        z.Z)(p, ei._G.XLarge, 3),
        p);
        function tG(e) {
            var t = e.children
              , n = e.loop
              , a = void 0 === n || n
              , r = e.className
              , i = (0,
            tR.c)(0)
              , s = (0,
            V.useRef)(null)
              , o = (0,
            V.useState)(0)
              , l = o[0]
              , d = o[1]
              , c = tV[(0,
            ei.dQ)()] || 1
              , u = V.Children.count(t) > c
              , m = V.Children.toArray(t)
              , f = (0,
            V.useCallback)(function() {
                var e, t = null === (e = s.current) || void 0 === e ? void 0 : e.clientWidth;
                return t ? -Math.floor(l / c) * (t + 12) : 0
            }, [c, l])
              , p = (0,
            V.useCallback)(function(e) {
                var t = c * e;
                a ? d(function(e) {
                    return (e + t) % m.length - 1
                }) : d(function(e) {
                    return tA()(e + t, 0, m.length - 1)
                })
            }, [m.length, a, c])
              , x = (0,
            V.useCallback)(function() {
                p(1)
            }, [p])
              , g = (0,
            V.useCallback)(function() {
                p(-1)
            }, [p])
              , h = (0,
            V.useMemo)(function() {
                if (a)
                    return [!0, !0];
                var e = l < m.length - c;
                return [l > 0, e]
            }, [m.length, l, a, c])
              , y = h[0]
              , v = h[1];
            return (0,
            V.useEffect)(function() {
                return (0,
                tF.j)(i, f(), tz).stop
            }, [f, l, i]),
            (0,
            eO.jsxs)("div", {
                className: (0,
                U.default)("relative h-full w-full", r, u && "mb-12 lg:mb-0"),
                children: [(0,
                eO.jsx)(tU, {
                    ref: s,
                    children: m.map(function(e, t) {
                        return (0,
                        eO.jsx)(tB, {
                            x: i,
                            children: e
                        }, t)
                    })
                }), u && (0,
                eO.jsxs)(eO.Fragment, {
                    children: [(0,
                    eO.jsx)(tL, {
                        onClick: g,
                        left: !0,
                        disabled: !y,
                        children: (0,
                        eO.jsx)(ez.YFh, {
                            className: "icon-sm"
                        })
                    }), (0,
                    eO.jsx)(tL, {
                        onClick: x,
                        disabled: !v,
                        children: (0,
                        eO.jsx)(ez.Tfp, {
                            className: "icon-sm"
                        })
                    })]
                })]
            })
        }
        var tH = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"])
          , tW = {
            "og:site_name": "metadataTitle",
            "og:title": "title",
            "og:description": "description",
            "og:image": "imageUrl",
            "og:url": "url"
        }
          , tQ = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
          , t$ = V.memo(function(e) {
            var t, n = e.clientThreadId, a = e.urls, r = eP(n), i = (t = (0,
            e7.h)({
                queries: a.map(function(e) {
                    var t;
                    return {
                        queryKey: ["opengraph", e],
                        queryFn: (t = (0,
                        ep.Z)(eg().mark(function t() {
                            return eg().wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        ev.ZP.getPageMetadata({
                                            url: e
                                        });
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t)
                        })),
                        function() {
                            return t.apply(this, arguments)
                        }
                        ),
                        enabled: !!e,
                        retry: !1
                    }
                })
            }),
            (0,
            V.useMemo)(function() {
                return t.map(function(e, t) {
                    var n = e.data
                      , r = e.isError
                      , i = e.isLoading
                      , s = a[t];
                    if (r || i)
                        return null;
                    var o = n.tags.reduce(function(e, t) {
                        return tH.has(t.type) && (e[tW[t.type]] = t.value),
                        e
                    }, {});
                    try {
                        var l, d = s.split(/[#?]/)[0], c = null === (l = o.url) || void 0 === l ? void 0 : l.endsWith("/login"), u = o.url && "/" === new URL(o.url || "").pathname;
                        if (d !== o.url && (c || u))
                            return null
                    } catch (e) {
                        return null
                    }
                    return o.url = s,
                    o
                }).filter(Boolean)
            }, [t, a])), s = (0,
            V.useMemo)(function() {
                return !i.some(function(e) {
                    return !!(null == e ? void 0 : e.imageUrl)
                })
            }, [i]), o = (0,
            V.useMemo)(function() {
                return r.reduce(function(e, t) {
                    return e[tO.get(t.domain)] = t.manifest.logo_url,
                    e
                }, {})
            }, [r]), l = (0,
            V.useMemo)(function() {
                return i.map(function(e) {
                    var t, n;
                    if (!e)
                        return null;
                    try {
                        t = tO.get(new URL(e.url).hostname)
                    } catch (e) {
                        return console.error("Invalid card url: ", e),
                        null
                    }
                    return t in o && (n = o[t]),
                    (0,
                    eO.jsx)(tN, {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: s
                    }, e.url)
                })
            }, [i, s, o]);
            return 0 === i.length ? null : (0,
            eO.jsx)(tG, {
                loop: !1,
                children: l
            })
        })
          , tX = n(63866)
          , tK = n(58765)
          , tY = n(60077)
          , tJ = n(55509)
          , t0 = function() {
            function e(t) {
                (0,
                tY.Z)(this, e),
                this.updateReactComponentDisplay = t,
                (0,
                z.Z)(this, "textMessageParts", void 0),
                (0,
                z.Z)(this, "textMessagePartsTextLength", void 0),
                (0,
                z.Z)(this, "displayedTextLength", void 0),
                (0,
                z.Z)(this, "displayNextCharTimeout", void 0),
                (0,
                z.Z)(this, "displayNextCharDelayMs", void 0),
                this.textMessageParts = [],
                this.textMessagePartsTextLength = 0,
                this.displayedTextLength = 0,
                this.displayNextCharDelayMs = e.MAX_BUFFERING_MS_PER_CHAR
            }
            return (0,
            tJ.Z)(e, [{
                key: "displayNextChar",
                value: function() {
                    var e = this;
                    this.displayNextCharTimeout = void 0,
                    this.isBuffering() && (this.displayedTextLength++,
                    this.updateReactComponentDisplay(na(this.textMessageParts, this.displayedTextLength)),
                    this.displayNextCharTimeout = window.setTimeout(function() {
                        return e.displayNextChar()
                    }, this.displayNextCharDelayMs))
                }
            }, {
                key: "isBuffering",
                value: function() {
                    return this.displayedTextLength < this.textMessagePartsTextLength
                }
            }, {
                key: "onMessagePartsUpdated",
                value: function(t) {
                    this.textMessageParts = t,
                    this.textMessagePartsTextLength = nn(this.textMessageParts).length;
                    var n = this.textMessagePartsTextLength - this.displayedTextLength;
                    if (n > 0) {
                        var a = e.MAX_BUFFERING_LAG_MS / n;
                        this.displayNextCharDelayMs = Math.min(a, e.MAX_BUFFERING_MS_PER_CHAR)
                    }
                    null == this.displayNextCharTimeout && this.displayNextChar()
                }
            }, {
                key: "destroy",
                value: function() {
                    window.clearTimeout(this.displayNextCharTimeout)
                }
            }]),
            e
        }();
        (0,
        z.Z)(t0, "MAX_BUFFERING_LAG_MS", 500),
        (0,
        z.Z)(t0, "MAX_BUFFERING_MS_PER_CHAR", 30);
        var t9 = function() {
            function e(t) {
                (0,
                tY.Z)(this, e),
                this.updateReactComponentDisplay = t,
                (0,
                z.Z)(this, "textMessageParts", void 0),
                (0,
                z.Z)(this, "textMessagePartsTextLength", void 0),
                (0,
                z.Z)(this, "displayedTextLength", void 0),
                (0,
                z.Z)(this, "chunkLength", void 0),
                (0,
                z.Z)(this, "displayNextChunkTimeout", void 0),
                this.textMessageParts = [],
                this.textMessagePartsTextLength = 0,
                this.displayedTextLength = 0,
                this.chunkLength = 0
            }
            return (0,
            tJ.Z)(e, [{
                key: "displayNextChunk",
                value: function() {
                    var t = this;
                    this.displayNextChunkTimeout = void 0,
                    this.isBuffering() && (this.displayedTextLength = Math.min(this.displayedTextLength + this.chunkLength, this.textMessagePartsTextLength),
                    this.updateReactComponentDisplay(na(this.textMessageParts, this.displayedTextLength)),
                    this.displayNextChunkTimeout = window.setTimeout(function() {
                        return t.displayNextChunk()
                    }, e.UPDATE_FREQUENCY_MS))
                }
            }, {
                key: "isBuffering",
                value: function() {
                    return this.displayedTextLength < this.textMessagePartsTextLength
                }
            }, {
                key: "onMessagePartsUpdated",
                value: function(t) {
                    this.textMessageParts = t,
                    this.textMessagePartsTextLength = nn(this.textMessageParts).length;
                    var n = this.textMessagePartsTextLength - this.displayedTextLength;
                    n >= e.MIN_CHARS_BEHIND_TO_CATCHUP ? (this.chunkLength = Math.ceil(n * e.UPDATE_FREQUENCY_MS / e.CATCHUP_TIME_MS),
                    null == this.displayNextChunkTimeout && this.displayNextChunk()) : (this.displayNextChunkTimeout = void 0,
                    window.clearTimeout(this.displayNextChunkTimeout),
                    this.displayedTextLength = this.textMessagePartsTextLength,
                    this.updateReactComponentDisplay(na(this.textMessageParts, this.displayedTextLength)))
                }
            }, {
                key: "destroy",
                value: function() {
                    window.clearTimeout(this.displayNextChunkTimeout)
                }
            }]),
            e
        }();
        (0,
        z.Z)(t9, "MIN_CHARS_BEHIND_TO_CATCHUP", 20),
        (0,
        z.Z)(t9, "CATCHUP_TIME_MS", 300),
        (0,
        z.Z)(t9, "UPDATE_FREQUENCY_MS", 30);
        var t1 = ["message", "isEditing", "format", "isCompletionInProgress", "className", "isCompletion", "isResponseToPluginMessage", "prevBrowsingMessages", "prevCodeMessages"]
          , t2 = ["isActivelyStreaming"];
        function t5(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function t3(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? t5(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t5(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var t6 = V.memo(function(e) {
            var t, n, a, r = e.message, i = e.isEditing, s = e.format, o = e.isCompletionInProgress, l = e.className, d = e.isCompletion, c = e.isResponseToPluginMessage, u = e.prevBrowsingMessages, m = e.prevCodeMessages, f = (0,
            eD.Z)(e, t1), p = (0,
            V.useMemo)(function() {
                return "parts"in r.message.content ? r.message.content.parts : [(0,
                es.RR)(r.message)]
            }, [r]);
            return i ? (0,
            eO.jsx)(tT, t3({
                currentLeaf: r.nodeId,
                initialText: (0,
                es.RR)(r.message),
                attachments: null === (a = r.message.metadata) || void 0 === a ? void 0 : a.attachments
            }, f)) : (0,
            eO.jsx)(t4, {
                parts: p,
                messages: [r],
                isCompletionInProgress: o,
                format: s,
                className: l,
                citations: null === (t = r.message.metadata) || void 0 === t ? void 0 : t.citations,
                attachments: null === (n = r.message.metadata) || void 0 === n ? void 0 : n.attachments,
                isCompletion: d,
                id: r.nodeId,
                onRequestMoreCompletions: f.onRequestMoreCompletions,
                clientThreadId: f.clientThreadId,
                showExtractedLinkCards: c,
                prevBrowsingMessages: u,
                prevCodeMessages: m
            })
        });
        function t4(e) {
            var t = e.messages.length > 1
              , n = "danger" !== (0,
            em.ZC)(t ? void 0 : e.messages[0]).flagSeverity && e.isCompletionInProgress
              , a = !e.parts.some(function(e) {
                return "" !== e
            });
            return (0,
            V.useState)(function() {
                return e.isCompletion && (e.isCompletionInProgress || a)
            })[0] ? (0,
            eO.jsx)(t7, t3(t3({}, e), {}, {
                isActivelyStreaming: n
            })) : (0,
            eO.jsx)(t8, t3(t3({}, e), {}, {
                displayParts: na(e.parts),
                isActivelyStreaming: n
            }))
        }
        function t7(e) {
            var t, n, a = e.isActivelyStreaming, r = (0,
            eD.Z)(e, t2), i = (0,
            Q.hz)(), s = e.messages[e.messages.length - 1].message.id, o = (0,
            V.useState)([]), l = o[0], d = o[1], c = (0,
            V.useRef)();
            return void 0 === c.current && (c.current = null !== (n = null == i ? void 0 : i.includes($.Nj)) && void 0 !== n && n ? new t0(d) : new t9(d)),
            (0,
            V.useEffect)(function() {
                null != c.current && (c.current.onMessagePartsUpdated(e.parts),
                c.current.isBuffering() && tK.Bu.addDelayedRenderingMessage(s))
            }, [e.parts, s]),
            (0,
            V.useEffect)(function() {
                null == c.current || c.current.isBuffering() || tK.Bu.removeDelayedRenderingMessage(s)
            }, [l, s]),
            (0,
            V.useEffect)(function() {
                return function() {
                    return tK.Bu.removeDelayedRenderingMessage(s)
                }
            }, [s]),
            (0,
            V.useEffect)(function() {
                return function() {
                    null != c.current && (c.current.destroy(),
                    c.current = void 0)
                }
            }, []),
            (0,
            eO.jsx)(t8, t3(t3({}, r), {}, {
                displayParts: l,
                isActivelyStreaming: a || (null === (t = c.current) || void 0 === t ? void 0 : t.isBuffering())
            }))
        }
        function t8(e) {
            var t, n, a, r, i = e.attachments, s = e.citations, o = e.className, l = e.clientThreadId, d = e.displayParts, c = e.format, u = e.id, m = e.isActivelyStreaming, f = e.isCompletion, p = e.isCompletionInProgress, x = e.messages, g = e.onRequestMoreCompletions, h = e.parts, y = e.prevBrowsingMessages, v = e.prevCodeMessages, k = e.showExtractedLinkCards, b = e.size, j = void 0 === b ? "medium" : b, w = (0,
            Y.Z)(), M = x.length > 1, C = (0,
            em.ZC)(M ? void 0 : x[0]), T = C.flagSeverity, P = C.shouldHideContent, O = !h.some(function(e) {
                return "" !== e
            }), I = (n = (t = {
                text: nn(h),
                isCompletionInProgress: p
            }).text,
            a = t.isCompletionInProgress,
            (0,
            V.useMemo)(function() {
                if (a)
                    return [];
                var e = n.match(tQ);
                return Array.from(new Set(e))
            }, [a, n])), S = null === (r = x[0].message.metadata) || void 0 === r ? void 0 : r.targeted_reply, N = h.filter(function(e) {
                return "string" != typeof e
            }), _ = new Set(N.map(function(e) {
                return (0,
                tt.Iy)(e.asset_pointer)
            })), D = (null != i ? i : []).filter(function(e) {
                return null != e.id && !_.has(e.id)
            }), Z = D.length > 0 && !f;
            return (0,
            V.useEffect)(function() {
                !O && null != y && y.length > 0 && eQ.bx.onDisplayTextAfterBrowsingSession(l, x[0].message.id)
            }, [O, x, y, l]),
            (0,
            eO.jsxs)("div", {
                "data-message-author-role": x[0].message.author.role,
                "data-message-id": x[0].message.id,
                className: (0,
                U.default)(o, "text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&]:mt-5", "danger" === T && "text-red-500", "warning" === T && "text-orange-500", !O && "overflow-x-auto"),
                children: [S && (0,
                eO.jsxs)("div", {
                    className: "mt-2 flex flex-col text-token-text-primary",
                    children: [(0,
                    eO.jsx)("div", {
                        className: "text-sm text-token-text-tertiary",
                        children: (0,
                        eO.jsx)(eU.Z, t3({}, nr.targetedReply))
                    }), (0,
                    eO.jsx)("div", {
                        className: "mt-2 overflow-y-auto whitespace-pre-wrap break-words border-l-2 border-token-border-heavy px-3",
                        children: S
                    })]
                }), Z && (0,
                eO.jsx)(ne, {
                    children: D.map(function(e) {
                        return (0,
                        eO.jsx)(tv.Z, {
                            file: e.name,
                            fileId: e.id,
                            width: "wide",
                            alwaysShowData: !0
                        }, e.id)
                    })
                }), d.map(function(e, t) {
                    if ("text" === e.type) {
                        var n = P ? null : e.text;
                        if (!O && !P && c) {
                            var a = (0,
                            th.vC)(e.text, s, m ? void 0 : null == v ? void 0 : v.map(function(e) {
                                return e.message
                            }))
                              , r = a.text
                              , i = a.displayedCitations
                              , o = r;
                            if (0 === t) {
                                var d = (0,
                                eQ.CO)(y, w);
                                null != d && (o = d + o)
                            }
                            return (0,
                            eO.jsx)(th.h7.Provider, {
                                value: {
                                    clientThreadId: l,
                                    message: x[0].message,
                                    displayedCitations: i,
                                    isActivelyStreaming: m
                                },
                                children: (0,
                                eO.jsx)(tk.Z, {
                                    clientThreadId: l,
                                    messageId: u,
                                    size: j,
                                    className: (0,
                                    U.default)(m && "result-streaming", "danger" === T && "text-red-500", "warning" === T && "text-orange-500"),
                                    children: "" === o ? "&#8203;" : o
                                })
                            }, t)
                        }
                        return (0,
                        eO.jsx)("div", {
                            className: (0,
                            U.default)(O && m && "result-thinking relative"),
                            children: n
                        }, t)
                    }
                    var f = e.imageAssets.length > 1;
                    return (0,
                    eO.jsx)("div", {
                        className: (0,
                        U.default)(f && "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"),
                        children: e.imageAssets.map(function(e, t) {
                            return (0,
                            eO.jsx)(nt, {
                                asset: e,
                                showAsGrid: f
                            }, t)
                        })
                    }, t)
                }), (0,
                eO.jsx)(em.ZP, {
                    message: M ? void 0 : x[0],
                    id: u,
                    onRequestMoreCompletions: g,
                    clientThreadId: l
                }), f && k && I.length > 0 && (0,
                eO.jsx)(t$, {
                    clientThreadId: l,
                    urls: I
                })]
            })
        }
        var ne = G.Z.div(x || (x = (0,
        B.Z)(["flex gap-2 flex-wrap mt-1"])));
        function nt(e) {
            var t, n, a, r, i, s, o, l, d, c, u, m, f = e.asset, p = e.showAsGrid, x = (0,
            V.useState)(!1), g = x[0], h = x[1], y = (0,
            eu.Q)().gizmoEditorData, v = (0,
            Y.Z)(), k = (t = null == y ? void 0 : y.id,
            n = f.asset_pointer,
            a = f.width,
            r = f.height,
            i = (0,
            V.useContext)(er.gB),
            s = (0,
            tt.Iy)(n),
            l = null != (o = null == i ? void 0 : i.serverSharedThreadId),
            u = (c = (0,
            eb.a)({
                queryKey: ["getFileDownloadLink", s, t],
                queryFn: (d = (0,
                ep.Z)(eg().mark(function e() {
                    return eg().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ev.ZP.getFileDownloadLink(s, t).catch(function(e) {
                                    throw console.error("Could not fetch file with ID ".concat(s, " from file service"), e.message),
                                    e
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function() {
                    return d.apply(this, arguments)
                }
                ),
                enabled: !l
            })).data,
            m = c.isLoading,
            {
                isLoading: !l && m,
                error: c.error,
                url: l ? to(o, s) : (null == u ? void 0 : u.status) == eh.KF.Success ? u.download_url : null,
                width: a,
                height: r
            }), b = k.url, j = k.width, w = k.height, M = k.isLoading, C = k.error, T = M || !g;
            return (0,
            eO.jsx)("div", {
                className: (0,
                U.default)("relative mt-1 flex h-auto w-full max-w-lg items-center justify-center overflow-hidden bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400", p && "aspect-square"),
                children: null !== b ? (0,
                eO.jsx)(ty.l, {
                    src: b,
                    alt: v.formatMessage(nr.imageAltText),
                    children: (0,
                    eO.jsx)(ti, {
                        alt: v.formatMessage(nr.imageAltText),
                        className: (0,
                        U.default)("max-w-full", p && "aspect-square object-cover"),
                        src: b,
                        width: j,
                        height: w,
                        onLoadingComplete: function() {
                            return h(!0)
                        }
                    })
                }) : (0,
                eO.jsx)("div", {
                    className: "flex items-center justify-center",
                    style: {
                        aspectRatio: "".concat(j, " / ").concat(w),
                        width: j
                    },
                    title: T ? v.formatMessage(nr.loadingImage) : v.formatMessage(nr.errorLoadingImage),
                    children: T ? (0,
                    eO.jsx)(tX.Z, {}) : C ? (0,
                    eO.jsx)(ez.BJv, {}) : null
                })
            })
        }
        function nn(e) {
            return e.map(function(e) {
                return "string" == typeof e ? e : ""
            }).join("")
        }
        function na(e, t) {
            for (var n = [], a = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                if ("string" == typeof i) {
                    if (null != t && t < a + i.length) {
                        n.push({
                            type: "text",
                            text: i.slice(0, t - a)
                        });
                        break
                    }
                    n.push({
                        type: "text",
                        text: i
                    }),
                    a += i.length
                } else {
                    var s = r > 0 ? n[r - 1] : null;
                    (null == s ? void 0 : s.type) === "images" ? s.imageAssets.push(i) : n.push({
                        type: "images",
                        imageAssets: [i]
                    })
                }
            }
            return n
        }
        var nr = (0,
        J.vU)({
            loadingImage: {
                id: "textMessage.loadingImage",
                defaultMessage: "Loading..."
            },
            errorLoadingImage: {
                id: "textMessage.errorLoadingImage",
                defaultMessage: "Could not load image"
            },
            imageAltText: {
                id: "textMessage.imageAltText",
                defaultMessage: "Uploaded image"
            },
            targetedReply: {
                id: "textMessage.targetedReply",
                defaultMessage: "Replying to:"
            }
        });
        function ni(e) {
            var t = e.messages
              , n = e.clientThreadId
              , a = e.isCompletionInProgress
              , r = e.isCompletion
              , i = e.prevBrowsingMessages
              , s = e.prevCodeMessages
              , o = e.onRequestMoreCompletions
              , l = (0,
            V.useMemo)(function() {
                return [t.reduce(function(e, t) {
                    return null == t.err ? e + (0,
                    es.RR)(t.message) : e
                }, "")]
            }, [t]);
            return (0,
            eO.jsx)(t4, {
                clientThreadId: n,
                parts: l,
                format: !0,
                isCompletion: r,
                isCompletionInProgress: a,
                id: "",
                messages: t,
                onRequestMoreCompletions: o,
                prevBrowsingMessages: i,
                prevCodeMessages: s
            })
        }
        var ns = n(5020)
          , no = n(65100)
          , nl = n(3125)
          , nd = n(56115)
          , nc = n(71950)
          , nu = n(92347)
          , nm = n(70737);
        (r = g || (g = {}))[r.Left = -1] = "Left",
        r[r.Right = 1] = "Right",
        r[r.None = 0] = "None";
        var nf = {
            enter: function(e) {
                return {
                    zIndex: 0,
                    x: e === g.Left ? "10%" : "-10%",
                    opacity: 0
                }
            },
            center: {
                zIndex: 1,
                x: 0,
                opacity: 1
            },
            exit: function(e) {
                return {
                    zIndex: 0,
                    x: e === g.Right ? "10%" : "-10%",
                    opacity: 0
                }
            }
        }
          , np = {
            enter: {
                opacity: 0,
                y: "10%"
            },
            visible: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: "10%"
            }
        }
          , nx = function(e, t) {
            return Math.abs(e) * t
        };
        function ng(e) {
            var t = (0,
            Y.Z)()
              , n = (0,
            ei.dQ)()
              , a = [ei._G.Small, ei._G.Mobile].includes(n)
              , r = (0,
            V.useState)({
                width: 0,
                height: 0
            })
              , i = r[0]
              , s = r[1]
              , o = (0,
            V.useState)(!1)
              , l = o[0]
              , d = o[1]
              , c = (0,
            V.useState)(e.image)
              , u = c[0]
              , m = c[1]
              , f = (0,
            V.useState)(!1)
              , p = f[0]
              , x = f[1]
              , h = i.width > 0 && i.height > 0
              , y = (0,
            V.useRef)(null)
              , v = (0,
            V.useState)(g.None)
              , k = v[0]
              , b = v[1];
            function j() {
                m(function(t) {
                    var n = (e.images.findIndex(function(e) {
                        return e.url === t.url
                    }) + 1) % e.images.length;
                    return e.images[n]
                }),
                b(g.Left)
            }
            function w() {
                m(function(t) {
                    var n = e.images.findIndex(function(e) {
                        return e.url === t.url
                    })
                      , a = n > 0 ? (n - 1) % e.images.length : e.images.length - 1;
                    return e.images[a]
                }),
                b(g.Right)
            }
            function M(e) {
                "ArrowLeft" === e.key ? w() : "ArrowRight" === e.key && j()
            }
            (0,
            V.useEffect)(function() {
                if (!u.url)
                    throw Error("ExpandableImage requires a src");
                var e = new Image;
                e.onload = function() {
                    s({
                        width: e.naturalWidth,
                        height: e.naturalHeight
                    })
                }
                ,
                e.onerror = function() {
                    nu.D0 && console.error("Could not load image ".concat(u.url))
                }
                ,
                e.src = u.url
            }, [u.url]),
            (0,
            V.useEffect)(function() {
                var t = y.current;
                if (p)
                    return null == t || t.addEventListener("keydown", M),
                    function() {
                        null == t || t.removeEventListener("keydown", M)
                    }
                    ;
                m(e.image)
            }, [p]);
            var C = e.images.findIndex(function(e) {
                return e.url === u.url
            });
            return (0,
            eO.jsxs)(nc.fC, {
                onOpenChange: function(t) {
                    var n;
                    x(t),
                    t && (null === (n = e.onOpen) || void 0 === n || n.call(e, u))
                },
                children: [(0,
                eO.jsx)(nc.xz, {
                    disabled: !h,
                    className: e.className,
                    "aria-label": t.formatMessage(nh.showImage),
                    children: e.children
                }), (0,
                eO.jsx)(nc.h_, {
                    children: (0,
                    eO.jsx)(nc.aV, {
                        className: "fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",
                        children: (0,
                        eO.jsxs)(nc.VY, {
                            className: (0,
                            U.default)("relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow"),
                            ref: y,
                            children: [(0,
                            eO.jsx)("div", {
                                className: (0,
                                U.default)("flex flex-1 transition-[flex-basis]", !l && "md:basis-[75vw]"),
                                children: (0,
                                eO.jsxs)("div", {
                                    className: "flex flex-1 flex-col md:p-6",
                                    children: [(0,
                                    eO.jsxs)("div", {
                                        className: "flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2",
                                        children: [(0,
                                        eO.jsx)(nc.x8, {
                                            asChild: !0,
                                            children: (0,
                                            eO.jsx)("button", {
                                                "aria-label": t.formatMessage(nh.closeModal),
                                                children: (0,
                                                eO.jsx)(H.v7, {})
                                            })
                                        }), (0,
                                        eO.jsx)("div", {
                                            children: !a && (0,
                                            eO.jsxs)(eO.Fragment, {
                                                children: [(0,
                                                eO.jsx)(eR.z, {
                                                    color: "none",
                                                    size: "small",
                                                    onClick: function() {
                                                        return e.onDownload(u)
                                                    },
                                                    "aria-label": t.formatMessage(nh.downloadImage),
                                                    children: (0,
                                                    eO.jsx)(H.Sg, {})
                                                }), (0,
                                                eO.jsx)(eR.z, {
                                                    color: "none",
                                                    size: "small",
                                                    onClick: function() {
                                                        return d(function(e) {
                                                            return !e
                                                        })
                                                    },
                                                    "aria-label": t.formatMessage(nh.toggleSidebar),
                                                    className: "md:inline-flex",
                                                    children: (0,
                                                    eO.jsx)(H.VX, {})
                                                })]
                                            })
                                        })]
                                    }), (0,
                                    eO.jsx)("div", {
                                        className: "relative flex flex-1 flex-col items-center justify-center overflow-hidden",
                                        children: (0,
                                        eO.jsx)(nm.M, {
                                            initial: !1,
                                            custom: k,
                                            children: (0,
                                            eO.jsxs)(tq.E.div, {
                                                className: "absolute grid h-full w-full grid-rows-2",
                                                custom: k,
                                                variants: nf,
                                                drag: "x",
                                                dragConstraints: {
                                                    left: 0,
                                                    right: 0
                                                },
                                                dragElastic: 1,
                                                onDragEnd: function(e, t) {
                                                    var n = t.offset
                                                      , a = t.velocity
                                                      , r = nx(n.x, a.x);
                                                    r < -1e3 ? j() : r > 1e3 && w()
                                                },
                                                children: [(0,
                                                eO.jsx)(tq.E.img, {
                                                    src: u.url,
                                                    alt: u.alt,
                                                    className: "row-span-4 mx-auto h-full object-scale-down",
                                                    onPanEnd: function(e, t) {
                                                        var n = t.offset
                                                          , a = t.velocity
                                                          , r = nx(n.y, a.y);
                                                        r < -1e3 ? d(!0) : r > 1e3 && d(!1)
                                                    }
                                                }, u.url), a && l && (0,
                                                eO.jsx)(tq.E.div, {
                                                    className: "flex text-white",
                                                    variants: np,
                                                    initial: "enter",
                                                    animate: "visible",
                                                    exit: "exit",
                                                    transition: {
                                                        y: {
                                                            type: "spring",
                                                            stiffness: 300,
                                                            damping: 30
                                                        },
                                                        opacity: {
                                                            duration: .2
                                                        }
                                                    },
                                                    children: e.metadataRenderer(u)
                                                })]
                                            }, u.url)
                                        })
                                    }), e.images.length > 1 ? (0,
                                    eO.jsxs)("div", {
                                        className: "flex items-center justify-center gap-4 p-8 text-white",
                                        children: [(0,
                                        eO.jsx)(eR.z, {
                                            color: "none",
                                            size: "small",
                                            onClick: w,
                                            "aria-label": t.formatMessage(nh.previousImage),
                                            children: (0,
                                            eO.jsx)(H.FX, {})
                                        }), e.images.map(function(e, n) {
                                            var a;
                                            return (0,
                                            eO.jsx)("img", {
                                                src: e.url,
                                                alt: null !== (a = e.alt) && void 0 !== a ? a : "",
                                                className: (0,
                                                U.default)("h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100", e.url === u.url ? "ring-2 ring-white ring-offset-4 ring-offset-black" : "opacity-25"),
                                                onClick: function() {
                                                    m(e),
                                                    b(n < C ? g.Right : g.Left)
                                                },
                                                "aria-label": t.formatMessage(nh.showImage),
                                                role: "button"
                                            }, e.url)
                                        }), (0,
                                        eO.jsx)(eR.z, {
                                            color: "none",
                                            size: "small",
                                            onClick: j,
                                            "aria-label": t.formatMessage(nh.nextImage),
                                            children: (0,
                                            eO.jsx)(H.Gb, {})
                                        })]
                                    }) : null]
                                })
                            }), (0,
                            eO.jsx)("div", {
                                className: (0,
                                U.default)("hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex", l ? "md:basis-[25vw]" : "md:basis-0"),
                                children: (0,
                                eO.jsx)("div", {
                                    className: "w-[25vw] min-w-[25vw]",
                                    children: e.metadataRenderer(u)
                                })
                            })]
                        })
                    })
                })]
            })
        }
        var nh = (0,
        J.vU)({
            showImage: {
                id: "imageViewer.showImage",
                defaultMessage: "Show Image"
            },
            closeModal: {
                id: "imageViewer.closeModal",
                defaultMessage: "Close Modal"
            },
            downloadImage: {
                id: "imageViewer.downloadImage",
                defaultMessage: "Download Image"
            },
            toggleSidebar: {
                id: "imageViewer.toggleSidebar",
                defaultMessage: "Toggle Sidebar"
            },
            nextImage: {
                id: "imageViewer.nextImage",
                defaultMessage: "Next Image"
            },
            previousImage: {
                id: "imageViewer.previousImage",
                defaultMessage: "Previous Image"
            }
        })
          , ny = n(14765);
        function nv(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function nk(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nv(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nv(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function nb(e) {
            var t = e.messages
              , n = e.clientThreadId
              , a = (0,
            nl.Z)(t, 2)
              , r = a[0]
              , i = a[1]
              , s = (0,
            eQ.We)(r.message)
              , o = (0,
            tK.t9)()
              , l = t.some(function(e) {
                return o.has(e.message.id)
            })
              , d = null;
            null != i && "multimodal_text" === i.message.content.content_type && (d = i.message.content.parts.filter(function(e) {
                return "object" == typeof e && "asset_pointer"in e
            }));
            var c = eH.X.Running
              , u = nS.creatingImages;
            return null != d ? (c = eH.X.Finished,
            u = void 0) : null != i ? (c = eH.X.Error,
            u = nS.errorCreating) : s && (c = eH.X.Stopped,
            u = nS.stopped),
            (0,
            eO.jsxs)(eO.Fragment, {
                children: [(0,
                eO.jsx)(eH.Z, {
                    conversationMessages: t,
                    icon: eW.CJ,
                    status: c,
                    displayMessage: u,
                    estimatedToolDurationMs: eG.X_,
                    animationLoopDurationMs: 4e3
                }), null != d && d.length > 0 && !l && (0,
                eO.jsx)(nj, {
                    imageAssets: d,
                    clientThreadId: n,
                    toolMessage: i.message
                })]
            })
        }
        function nj(e) {
            var t, n, a, r = e.imageAssets, i = e.clientThreadId, s = e.toolMessage, o = (0,
            Y.Z)(), l = (0,
            et.XK)(i), d = (0,
            V.useState)(!1), c = d[0], u = d[1];
            (0,
            V.useEffect)(function() {
                u(!0)
            }, []);
            var m = ts(r);
            function f(e) {
                return p.apply(this, arguments)
            }
            function p() {
                return (p = (0,
                ep.Z)(eg().mark(function e(t) {
                    var n, a, r, i, o, d;
                    return eg().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return d = function(e) {
                                    var t = (0,
                                    nd.Z)(new Date, "yyyy-MM-dd HH.mm.ss")
                                      , n = e.slice(0, 150);
                                    return n.endsWith(".") && (n = n.slice(0, -1)),
                                    "DALL\xb7E ".concat(t, " - ").concat(n, ".png")
                                }(null !== (n = null === (a = t.metadata) || void 0 === a ? void 0 : null === (r = a.dalle) || void 0 === r ? void 0 : r.prompt) && void 0 !== n ? n : ""),
                                e.next = 4,
                                function(e, t) {
                                    return nI.apply(this, arguments)
                                }(t.url, d);
                            case 4:
                                ny.m9.logEvent("chatgpt_dalle_image_download"),
                                X.A.logEvent(K.M.dalleImageDownload, {
                                    conversationId: l,
                                    messageId: s.id,
                                    generationId: null === (i = t.metadata) || void 0 === i ? void 0 : null === (o = i.dalle) || void 0 === o ? void 0 : o.gen_id
                                });
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }))).apply(this, arguments)
            }
            function x(e) {
                var t, n;
                ny.m9.logEvent("chatgpt_dalle_image_view_full"),
                X.A.logEvent(K.M.dalleImageViewFull, {
                    conversationId: l,
                    messageId: s.id,
                    generationId: null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.dalle) || void 0 === n ? void 0 : n.gen_id
                })
            }
            var g = (n = (t = r[0]).width) > (a = t.height) ? v.WIDE : n < a ? v.TALL : v.SQUARE;
            return (0,
            eO.jsx)(nO, {
                $numItems: m.length,
                className: (0,
                U.default)("my-1 transition-opacity duration-300", c ? "opacity-100" : "opacity-0"),
                children: m.map(function(e, t) {
                    var n, a, r, l = e.isLoading, d = e.data, c = e.error;
                    if (l)
                        return (0,
                        eO.jsx)(nM, {
                            shape: g,
                            bgClassName: "animate-pulse",
                            bgStyle: {
                                animationDelay: "".concat(200 * t, "ms")
                            }
                        }, t);
                    if (null != c || (null == d ? void 0 : d.url) == null)
                        return (0,
                        eO.jsx)(nM, {
                            className: "text-sm text-gray-500",
                            shape: g,
                            children: (0,
                            eO.jsxs)("div", {
                                className: "flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",
                                children: [(0,
                                eO.jsx)(ez.bcx, {
                                    className: "icon-sm self-center text-gray-400"
                                }), o.formatMessage(nS.imageLoadError)]
                            })
                        }, t);
                    var u = nk(nk({}, d), {}, {
                        alt: null !== (n = null == d ? void 0 : null === (a = d.metadata) || void 0 === a ? void 0 : null === (r = a.dalle) || void 0 === r ? void 0 : r.prompt) && void 0 !== n ? n : ""
                    });
                    return (0,
                    eO.jsx)("div", {
                        className: "flex",
                        children: (0,
                        eO.jsx)(ng, {
                            image: u,
                            images: m.filter(function(e) {
                                return null != e.data
                            }).map(function(e) {
                                var t, n, a, r = e.data;
                                return nk(nk({}, r), {}, {
                                    alt: null !== (t = null === (n = r.metadata) || void 0 === n ? void 0 : null === (a = n.dalle) || void 0 === a ? void 0 : a.prompt) && void 0 !== t ? t : ""
                                })
                            }),
                            metadataRenderer: function(e) {
                                return (0,
                                eO.jsx)(nw, {
                                    image: e
                                })
                            },
                            onDownload: f,
                            onOpen: x,
                            children: (0,
                            eO.jsx)(nC, {
                                image: u,
                                shape: g,
                                onDownload: function() {
                                    return f(u)
                                },
                                bgClassName: "animate-pulse",
                                bgStyle: {
                                    animationDelay: "".concat(200 * t, "ms")
                                },
                                clientThreadId: i,
                                toolMessage: s
                            })
                        })
                    }, t)
                })
            })
        }
        function nw(e) {
            var t, n, a = e.image, r = (0,
            Y.Z)(), i = (0,
            V.useState)(!1), s = i[0], o = i[1];
            return (0,
            eO.jsxs)("div", {
                className: "flex flex-col items-start gap-3 p-6",
                children: [(0,
                eO.jsx)("div", {
                    className: "text-sm text-gray-300 sm:text-base",
                    children: r.formatMessage(nS.imageViewerMetadataTitle)
                }), (0,
                eO.jsx)("div", {
                    className: "max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg",
                    children: null === (t = a.metadata) || void 0 === t ? void 0 : null === (n = t.dalle) || void 0 === n ? void 0 : n.prompt
                }), (0,
                eO.jsxs)(eR.z, {
                    color: "dark",
                    onClick: function() {
                        var e, t, n, r = null !== (e = null === (t = a.metadata) || void 0 === t ? void 0 : null === (n = t.dalle) || void 0 === n ? void 0 : n.prompt) && void 0 !== e ? e : "";
                        try {
                            navigator.clipboard.writeText(r),
                            o(!0),
                            setTimeout(function() {
                                o(!1)
                            }, 2e3)
                        } catch (e) {
                            console.error("Error copying to clipboard", e)
                        }
                    },
                    disabled: s,
                    className: "hidden sm:block",
                    children: [(0,
                    eO.jsx)(ez.C3L, {
                        className: "h-5 w-5"
                    }), s ? r.formatMessage(nS.imageViewerMetadataCopyButtonCopied) : r.formatMessage(nS.imageViewerMetadataCopyButton)]
                })]
            })
        }
        function nM(e) {
            var t = e.children
              , n = e.shape
              , a = e.className
              , r = e.bgClassName
              , i = e.bgStyle;
            return (0,
            eO.jsxs)("div", {
                className: (0,
                U.default)("relative overflow-hidden", a, n === v.WIDE && "aspect-[7/4]", n === v.SQUARE && "aspect-square max-w-[400px]", n === v.TALL && "aspect-[4/7] max-w-xs"),
                children: [(0,
                eO.jsx)("div", {
                    className: (0,
                    U.default)("pointer-events-none absolute inset-0 bg-gray-100", r),
                    style: i
                }), (0,
                eO.jsx)("div", {
                    className: "relative h-full",
                    children: t
                })]
            })
        }
        function nC(e) {
            var t = e.image
              , n = e.shape
              , a = e.onDownload
              , r = e.bgClassName
              , i = e.bgStyle
              , s = e.clientThreadId
              , o = e.toolMessage
              , l = (0,
            Y.Z)()
              , d = (0,
            et.XK)(s)
              , c = null !== (0,
            V.useContext)(er.gB)
              , u = (0,
            ea.ec)(ea.F_.isBusinessWorkspace)
              , m = (0,
            W.WA)(s)
              , f = (0,
            V.useState)(null)
              , p = f[0]
              , x = f[1]
              , g = t.url
              , h = t.width
              , y = t.height
              , v = !c && !u && m.kind !== ee.OL.GizmoMagicCreate;
            function k(e) {
                var n, a;
                x(e),
                X.A.logEvent(K.M.dalleImageRating, {
                    liked: e,
                    conversationId: d,
                    messageId: o.id,
                    generationId: null === (n = t.metadata) || void 0 === n ? void 0 : null === (a = n.dalle) || void 0 === a ? void 0 : a.gen_id
                })
            }
            return (0,
            eO.jsxs)(nM, {
                shape: n,
                className: "group/dalle-image",
                bgClassName: r,
                bgStyle: i,
                children: [(0,
                eO.jsx)(ti, {
                    alt: l.formatMessage(nS.generatedImageAltText),
                    src: g,
                    width: h,
                    height: y
                }), (0,
                eO.jsx)("div", {
                    className: "pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                }), (0,
                eO.jsx)(nT, {
                    children: (0,
                    eO.jsx)(nP, {
                        icon: H.Sg,
                        onClick: function(e) {
                            e.stopPropagation(),
                            a()
                        }
                    })
                }), v && (0,
                eO.jsxs)(nT, {
                    $rightAlign: !0,
                    children: [!1 !== p && (0,
                    eO.jsx)(nP, {
                        icon: H.ib,
                        selected: !0 === p,
                        onClick: function(e) {
                            e.stopPropagation(),
                            k(!0)
                        }
                    }), !0 !== p && (0,
                    eO.jsx)(nP, {
                        icon: H.Q7,
                        selected: !1 === p,
                        onClick: function(e) {
                            e.stopPropagation(),
                            k(!1)
                        }
                    })]
                })]
            })
        }
        (i = v || (v = {})).WIDE = "1792x1024",
        i.SQUARE = "1024x1024",
        i.TALL = "1024x1792";
        var nT = G.Z.div(h || (h = (0,
        B.Z)(["invisible absolute top-1 flex gap-1 group-hover/dalle-image:visible\n", ""])), function(e) {
            return e.$rightAlign ? "right-1" : "left-1"
        });
        function nP(e) {
            var t = e.icon
              , n = e.selected
              , a = e.onClick;
            return (0,
            eO.jsx)("button", {
                className: (0,
                U.default)("flex h-6 w-6 items-center justify-center rounded", n ? "bg-gray-100" : "bg-black/50 hover:opacity-70"),
                onClick: a,
                disabled: n,
                children: (0,
                eO.jsx)(t, {
                    className: (0,
                    U.default)("icon-sm", n ? "text-gray-700" : "text-white")
                })
            })
        }
        var nO = G.Z.div(y || (y = (0,
        B.Z)(["grid gap-2\n", ""])), function(e) {
            return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2"
        });
        function nI() {
            return (nI = (0,
            ep.Z)(eg().mark(function e(t, n) {
                var a, r, i, s;
                return eg().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return (a = new Image).crossOrigin = "anonymous",
                            a.src = t,
                            e.prev = 3,
                            e.next = 6,
                            new Promise(function(e, t) {
                                a.onload = function() {
                                    e(null)
                                }
                                ,
                                a.onerror = t
                            }
                            );
                        case 6:
                            e.next = 12;
                            break;
                        case 8:
                            return e.prev = 8,
                            e.t0 = e.catch(3),
                            console.error("Error downloading image", e.t0),
                            e.abrupt("return");
                        case 12:
                            if ((r = document.createElement("canvas")).width = a.naturalWidth,
                            r.height = a.naturalHeight,
                            null != (i = r.getContext("2d"))) {
                                e.next = 18;
                                break
                            }
                            return e.abrupt("return");
                        case 18:
                            i.drawImage(a, 0, 0),
                            (s = document.createElement("a")).href = r.toDataURL("image/png"),
                            s.download = n,
                            s.click(),
                            r.remove(),
                            a.remove(),
                            s.remove();
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[3, 8]])
            }))).apply(this, arguments)
        }
        var nS = (0,
        J.vU)({
            creatingImages: {
                id: "dalleMessage.creatingImagesV2",
                defaultMessage: "Creating image"
            },
            stopped: {
                id: "dalleMessage.stoppedV3",
                defaultMessage: "Stopped creating image"
            },
            errorCreating: {
                id: "dalleMessage.errorCreatingV2",
                defaultMessage: "Error creating image"
            },
            generatedImageAltText: {
                id: "dalleMessage.generatedImageAltText",
                defaultMessage: "Generated by DALL\xb7E"
            },
            imageLoadError: {
                id: "dalleMessage.imageLoadError",
                defaultMessage: "Error loading image"
            },
            imageViewerMetadataTitle: {
                id: "dalleMessage.imageViewerMetadataTitle",
                defaultMessage: "Prompt"
            },
            imageViewerMetadataCopyButton: {
                id: "dalleMessage.imageViewerMetadataCopyButton",
                defaultMessage: "Copy"
            },
            imageViewerMetadataCopyButtonCopied: {
                id: "dalleMessage.imageViewerMetadataCopyButtonCopied",
                defaultMessage: "Copied!"
            }
        });
        function nN(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function n_(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nN(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nN(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function nD(e) {
            var t, n, a, r, i, s, o, l, d, c, u, m, f, p = e.messages, x = (0,
            nl.Z)(p, 2), g = (t = x[0],
            d = null !== (a = null == (n = x[1]) ? void 0 : null === (r = n.message.metadata) || void 0 === r ? void 0 : null === (i = r.parallel_browse) || void 0 === i ? void 0 : i.frontend_info.sub_agent_infos) && void 0 !== a ? a : null === (s = t.message.metadata) || void 0 === s ? void 0 : null === (o = s.parallel_browse) || void 0 === o ? void 0 : o.frontend_info.sub_agent_infos,
            c = 0,
            u = 0,
            null != d && (c = (l = Object.values(Object.values(d).reduce(function(e, t) {
                var n = t.task_index;
                return null == e[n] && (e[n] = []),
                e[n].push(t),
                e
            }, {})).map(function(e) {
                return n_(n_({}, e[0]), {}, {
                    status: function(e) {
                        for (var t = e.map(function(e) {
                            return e.status
                        }), n = [ee.RF.Starting, ee.RF.Running, ee.RF.Done, ee.RF.Error, ee.RF.Timeout, ee.RF.Cancelled], a = 0; a < n.length; a++) {
                            var r = function() {
                                var e = n[a];
                                if (t.some(function(t) {
                                    return t === e
                                }))
                                    return {
                                        v: e
                                    }
                            }();
                            if ("object" == typeof r)
                                return r.v
                        }
                        return ee.RF.Starting
                    }(e)
                })
            }).sort(function(e, t) {
                return e.task_index - t.task_index
            })).length,
            u = l.filter(nZ).length),
            m = k.Planning,
            (0,
            eQ.We)(t.message) ? m = k.Stopped : null != n && (m = u === c ? k.Done : k.Running),
            {
                status: m,
                subAgentInfos: l,
                numTotalSubAgents: c,
                numCompletedSubAgents: u
            }), h = eH.X.Running, y = nR.creatingPlan;
            switch (g.status) {
            case k.Running:
                g.numTotalSubAgents > 0 && g.numCompletedSubAgents / g.numTotalSubAgents >= .75 ? y = nR.almostDone : (y = nR.running,
                f = {
                    numTasks: g.numTotalSubAgents
                });
                break;
            case k.Done:
                h = eH.X.Finished,
                y = void 0;
                break;
            case k.Stopped:
                h = eH.X.Stopped,
                y = nR.cancelled
            }
            return (0,
            eO.jsx)(eH.Z, {
                conversationMessages: p,
                icon: eW.Ts,
                status: h,
                displayMessage: y,
                displayMessageValues: f,
                estimatedToolDurationMs: eG.kA,
                animationLoopDurationMs: 3500
            })
        }
        function nZ(e) {
            return e.status === ee.RF.Done || e.status === ee.RF.Timeout || e.status === ee.RF.Error || e.status === ee.RF.Cancelled
        }
        (s = k || (k = {})).Planning = "planning",
        s.Running = "running",
        s.Done = "done",
        s.Stopped = "stopped";
        var nR = (0,
        J.vU)({
            creatingPlan: {
                id: "parallelBrowsingMessage.creatingPlanV2",
                defaultMessage: "Making a research plan"
            },
            running: {
                id: "parallelBrowsingMessage.running_2",
                defaultMessage: "Visiting {numTasks, plural, one {# site} other {# sites}}"
            },
            almostDone: {
                id: "parallelBrowsingMessage.almostDone",
                defaultMessage: "Almost done"
            },
            cancelled: {
                id: "parallelBrowsingMessage.cancelledV2",
                defaultMessage: "Stopped doing research"
            }
        })
          , nF = n(90166)
          , nE = n(17378)
          , nA = n(40803)
          , nL = (0,
        J.vU)({
            generatedImage: {
                id: "pluginDisplayParams.generatedImage",
                defaultMessage: "Generated by plugin"
            }
        });
        function nq(e) {
            var t, n, a, r, i, s, o, l = e.plugin, d = e.pluginMessage, c = e.toolMessage;
            if (null != l && "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== l.id)
                return null;
            var u = j.WIDE;
            if ("text" === d.content.content_type)
                try {
                    n = function(e) {
                        for (var t = 0, n = ["", "}", '"}', "]}", '"]}']; t < n.length; t++) {
                            var a = n[t]
                              , r = e.trimEnd().endsWith(",") ? e.trimEnd().slice(0, -1) : e;
                            try {
                                return {
                                    result: JSON.parse(r + a),
                                    isComplete: "" === a
                                }
                            } catch (e) {}
                        }
                        return {
                            result: JSON.parse(e),
                            isComplete: !1
                        }
                    }(d.content.parts[0]).result,
                    (null === (a = n) || void 0 === a ? void 0 : a.image_shape) != null && (u = n.image_shape)
                } catch (e) {}
            var m = !1;
            if (null != c) {
                if ("text" === c.content.content_type) {
                    try {
                        i = JSON.parse(c.content.parts[0])
                    } catch (e) {}
                    if ((null === (r = i) || void 0 === r ? void 0 : r.images) != null)
                        return (0,
                        eO.jsx)(nz, {
                            images: i.images,
                            gridItemShape: u
                        })
                }
                m = !0
            }
            return (null === (t = n) || void 0 === t ? void 0 : t.prompts) != null ? (0,
            eO.jsx)(nB, {
                numItems: null !== (s = null === (o = n) || void 0 === o ? void 0 : o.n) && void 0 !== s ? s : Math.max(n.prompts.length, 1),
                prompts: n.prompts,
                gridItemShape: u,
                showErrorState: m || (0,
                eQ.We)(d)
            }) : null
        }
        function nB(e) {
            for (var t = e.numItems, n = e.prompts, a = e.gridItemShape, r = e.showErrorState, i = [], s = 0; s < t; s++) {
                var o = n[s];
                i.push((0,
                eO.jsx)(nU, {
                    className: (0,
                    U.default)("text-sm", r && "text-gray-500"),
                    shape: a,
                    bgColor: r ? "medium" : null == o ? "dark" : "light",
                    children: (0,
                    eO.jsx)(nA.default, {
                        className: "hide-scrollbar h-full",
                        followButtonClassName: "hidden",
                        children: (0,
                        eO.jsx)("div", {
                            className: "flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",
                            children: r ? (0,
                            eO.jsx)(ez.bcx, {
                                className: "icon-sm self-center text-gray-400"
                            }) : (0,
                            eO.jsx)(tX.Z, {
                                className: "h-4 w-4 self-center"
                            })
                        })
                    })
                }, s))
            }
            return (0,
            eO.jsx)(nG, {
                $numItems: t,
                children: i
            })
        }
        function nz(e) {
            var t = e.images
              , n = e.gridItemShape;
            return (0,
            eO.jsx)(nG, {
                $numItems: t.length,
                children: t.map(function(e, t) {
                    return (0,
                    eO.jsx)(nV, {
                        imageUrl: e.url,
                        shape: n
                    }, t)
                })
            })
        }
        function nU(e) {
            var t = e.children
              , n = e.shape
              , a = e.className
              , r = e.bgColor
              , i = void 0 === r ? "light" : r;
            return (0,
            eO.jsxs)("div", {
                className: (0,
                U.default)("relative overflow-hidden rounded", a, n === j.WIDE && "aspect-[7/4]", n === j.SQUARE && "aspect-square max-w-[400px]", n === j.TALL && "aspect-[4/7] max-w-xs"),
                children: [(0,
                eO.jsx)("div", {
                    className: (0,
                    U.default)("pointer-events-none absolute inset-0 blur-xl", "light" === i && "bg-black/[.04]", "medium" === i && "bg-black/[.08]", "dark" === i && "bg-black/[.12]")
                }), t]
            })
        }
        function nV(e) {
            var t = e.imageUrl
              , n = e.shape
              , a = (0,
            Y.Z)();
            return (0,
            eO.jsx)(nU, {
                shape: n,
                children: (0,
                eO.jsx)("a", {
                    href: t,
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    eO.jsx)("img", {
                        src: t,
                        alt: a.formatMessage(nL.generatedImage)
                    })
                })
            })
        }
        (o = j || (j = {})).WIDE = "wide",
        o.SQUARE = "square",
        o.TALL = "tall";
        var nG = G.Z.div(b || (b = (0,
        B.Z)(["grid gap-4\n", ""])), function(e) {
            return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2"
        })
          , nH = n(49546)
          , nW = V.memo(function(e) {
            var t = e.children
              , n = e.isComplete
              , a = e.expanderClosedLabel
              , r = e.expanderOpenLabel
              , i = e.resultsPreview
              , s = e.results
              , o = e.initialExpanded
              , l = e.onExpand
              , d = (0,
            V.useState)(void 0 !== o && o)
              , c = d[0]
              , u = d[1]
              , m = (0,
            V.useCallback)(function() {
                u(function(e) {
                    return !e
                }),
                null == l || l()
            }, [l]);
            return (0,
            eO.jsxs)(nQ, {
                children: [(0,
                eO.jsxs)(n$, {
                    $complete: n,
                    children: [(0,
                    eO.jsx)("div", {
                        children: t
                    }), !n && (0,
                    eO.jsx)(tX.Z, {
                        className: (0,
                        U.default)("shrink-0", null != s ? "ml-1" : "ml-12")
                    }), null != s && (0,
                    eO.jsxs)("div", {
                        className: "ml-12 flex items-center gap-2",
                        role: "button",
                        onClick: m,
                        children: [null != r && null != a && (0,
                        eO.jsx)("div", {
                            className: "text-xs text-gray-600",
                            children: c ? r : a
                        }), !c && i, c ? (0,
                        eO.jsx)(ez.rH8, {
                            className: "icon-sm"
                        }) : (0,
                        eO.jsx)(ez.bTu, {
                            className: "icon-sm"
                        })]
                    })]
                }), c && s]
            })
        })
          , nQ = G.Z.div(w || (w = (0,
        B.Z)(["flex flex-col items-start"])))
          , n$ = G.Z.div(M || (M = (0,
        B.Z)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""])), function(e) {
            return e.$complete && "bg-gray-100"
        });
        function nX(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function nK(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nX(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nX(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        G.Z.div(C || (C = (0,
        B.Z)(["max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"])));
        var nY = V.memo(function(e) {
            var t, n = e.clientThreadId, a = e.messages, r = (0,
            nl.Z)(a, 2), i = r[0], s = r[1], o = eP(n), l = (0,
            es.Lx)(i.message.recipient), d = o.find(function(e) {
                return e.namespace === (null == l ? void 0 : l.namespace)
            }), c = null == d ? void 0 : d.manifest.name_for_human, u = (0,
            eQ.We)(i.message), m = null != c ? (0,
            eO.jsx)("b", {
                children: c
            }) : "unknown plugin", f = null != s ? (0,
            eO.jsx)("div", {
                children: (0,
                eO.jsx)(eU.Z, nK(nK({}, n9.used), {}, {
                    values: {
                        pluginName: m
                    }
                }))
            }) : u ? (0,
            eO.jsx)("div", {
                children: (0,
                eO.jsx)(eU.Z, nK(nK({}, n9.triedToUse), {}, {
                    values: {
                        pluginName: m
                    }
                }))
            }) : (0,
            eO.jsx)("div", {
                children: (0,
                eO.jsx)(eU.Z, nK(nK({}, n9.using), {}, {
                    values: {
                        pluginName: m
                    }
                }))
            });
            return d && ((0,
            nE.cf)(d) ? t = (0,
            eO.jsx)(nH.nA, {}) : "approved" !== d.status && (t = (0,
            eO.jsx)(nH.uM, {}))),
            (0,
            eO.jsxs)(eO.Fragment, {
                children: [(0,
                eO.jsx)(nW, {
                    isComplete: null != s || u,
                    results: (0,
                    eO.jsx)(nJ, {
                        pluginName: null != c ? c : "unknown plugin",
                        pluginMessage: i,
                        toolMessage: s
                    }),
                    children: (0,
                    eO.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [f, t]
                    })
                }), null != d && (0,
                eO.jsx)(nq, {
                    plugin: d,
                    pluginMessage: i.message,
                    toolMessage: null == s ? void 0 : s.message
                })]
            })
        });
        function nJ(e) {
            var t = e.pluginName
              , n = e.pluginMessage
              , a = e.toolMessage
              , r = (0,
            Y.Z)()
              , i = (0,
            es.RR)(n.message)
              , s = a ? (0,
            es.RR)(a.message) : null;
            try {
                i = JSON.stringify(JSON.parse(i), null, 2),
                null != s && (s = JSON.stringify(JSON.parse(s), null, 2))
            } catch (e) {}
            var o = (null == a ? void 0 : a.message.author.name) === "plugin_service";
            return (0,
            eO.jsxs)("div", {
                className: "my-3 flex max-w-full flex-col gap-3",
                children: [(0,
                eO.jsx)(n0, {
                    title: r.formatMessage(n9.requestTo, {
                        pluginName: t
                    }),
                    infoTooltip: n.message.recipient,
                    children: i
                }), null != s && (0,
                eO.jsx)(n0, {
                    title: o ? r.formatMessage(n9.error) : r.formatMessage(n9.responseFrom, {
                        pluginName: t
                    }),
                    infoTooltip: n.message.recipient,
                    children: (0,
                    eO.jsx)("span", {
                        className: (0,
                        U.default)(o && "text-red-500"),
                        children: s
                    })
                })]
            })
        }
        function n0(e) {
            var t = e.title
              , n = e.infoTooltip
              , a = e.children;
            return (0,
            eO.jsx)(eF.$, {
                title: (0,
                eO.jsx)("span", {
                    className: "uppercase",
                    children: t
                }),
                headerDecoration: void 0 !== n ? (0,
                eO.jsx)(nF.u, {
                    label: n,
                    children: (0,
                    eO.jsx)(ez.H33, {
                        className: "icon-sm text-white/50"
                    })
                }) : void 0,
                shouldWrapCode: !0,
                className: "w-full text-xs text-white/80",
                children: a
            })
        }
        var n9 = (0,
        J.vU)({
            used: {
                id: "PluginMessage.used",
                defaultMessage: "Used {pluginName}"
            },
            triedToUse: {
                id: "PluginMessage.triedToUse",
                defaultMessage: "Tried to use {pluginName}"
            },
            using: {
                id: "PluginMessage.using",
                defaultMessage: "Using {pluginName}..."
            },
            requestTo: {
                id: "ResultsSection.requestTo",
                defaultMessage: "Request to {pluginName}"
            },
            responseFrom: {
                id: "ResultsSection.responseFrom",
                defaultMessage: "Response from {pluginName}"
            },
            error: {
                id: "ResultsSection.error",
                defaultMessage: "Error"
            }
        })
          , n1 = n(48099);
        function n2(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var a = e[n]
                  , r = (0,
                es.rH)(a.message)
                  , i = null == e ? void 0 : e[n - 1]
                  , s = null != i && ((0,
                es.lD)(i.message) || (0,
                es.qs)(a.message))
                  , o = r === es.Cs.Text && (0,
                es.RR)(a.message);
                if (r === es.Cs.System || r === es.Cs.UserModelBio || r === es.Cs.UserModelBioTool || r === es.Cs.ModelEditableContext)
                    t.push({
                        type: P.Debug,
                        message: a
                    });
                else if (r === es.Cs.Browsing || r === es.Cs.BrowseTool) {
                    var l = t[t.length - 1];
                    (null == l ? void 0 : l.type) === P.Browsing ? l.messages.push(a) : t.push({
                        type: P.Browsing,
                        messages: [a]
                    })
                } else if (r === es.Cs.RetrievalBrowsing || r === es.Cs.RetrievalBrowsingTool) {
                    var d = t[t.length - 1];
                    (null == d ? void 0 : d.type) === P.RetrievalBrowsing ? d.messages.push(a) : t.push({
                        type: P.RetrievalBrowsing,
                        messages: [a]
                    })
                } else if (r === es.Cs.ParallelBrowsing || r === es.Cs.ParallelBrowsingTool) {
                    var c = t[t.length - 1];
                    (null == c ? void 0 : c.type) === P.ParallelBrowsing ? c.messages.push(a) : t.push({
                        type: P.ParallelBrowsing,
                        messages: [a]
                    })
                } else if (r === es.Cs.Plugin || r === es.Cs.PluginTool) {
                    var u = t[t.length - 1];
                    r === es.Cs.PluginTool && (null == u ? void 0 : u.type) === P.Plugin ? u.messages.push(a) : t.push({
                        type: P.Plugin,
                        messages: [a]
                    })
                } else if (r === es.Cs.JITPlugin || r === es.Cs.JITPluginTool) {
                    var m = t[t.length - 1];
                    r === es.Cs.JITPluginTool && (null == m ? void 0 : m.type) === P.JITPlugin ? m.messages.push(a) : t.push({
                        type: P.JITPlugin,
                        messages: [a]
                    })
                } else if (r === es.Cs.Dalle || r === es.Cs.DalleTool) {
                    var f = t[t.length - 1];
                    r === es.Cs.DalleTool && (null == f ? void 0 : f.type) === P.Dalle ? f.messages.push(a) : t.push({
                        type: P.Dalle,
                        messages: [a]
                    })
                } else if (r === es.Cs.CodeInterpreter || r === es.Cs.CodeInterpreterTool) {
                    var p = t[t.length - 1];
                    r === es.Cs.CodeInterpreterTool && (null == p ? void 0 : p.type) === P.CodeInterpreter ? p.messages.push(a) : t.push({
                        type: P.CodeInterpreter,
                        messages: [a]
                    })
                } else if (r === es.Cs.GizmoEditor) {
                    var x = t[t.length - 1];
                    (null == x ? void 0 : x.type) === P.GizmoEditor ? x.messages.push(a) : t.push({
                        type: P.GizmoEditor,
                        messages: [a]
                    })
                } else if (s && null != o) {
                    var g = t.pop();
                    (null == g ? void 0 : g.type) === P.MultiText ? (g.messages.push(a),
                    t.push(g)) : (null == g ? void 0 : g.type) === P.Text && t.push({
                        type: P.MultiText,
                        messages: [g.message, a]
                    })
                } else
                    t.push({
                        type: P.Text,
                        message: a
                    })
            }
            return t
        }
        function n5(e) {
            var t = e.groupedMessagesToRender
              , n = e.allGroupedMessages
              , a = e.clientThreadId
              , r = e.currentModelId
              , i = e.isEditing
              , s = e.isCompletion
              , o = e.isCompletionRequestInProgress
              , l = e.isFinalTurn
              , d = e.hasActiveRequest
              , c = e.handleExitEdit
              , u = e.onChangeItemInView
              , m = e.onRequestMoreCompletions
              , f = e.onRequestCompletion
              , p = (0,
            n1.N)().showDebugConversationTurns
              , x = t.map(function(e, x) {
                var g = x === n.length - 1;
                switch (e.type) {
                case P.Text:
                case P.MultiText:
                    var h = t[x - 1]
                      , y = (null == h ? void 0 : h.type) === P.Browsing ? h.messages : []
                      , v = (null == h ? void 0 : h.type) === P.CodeInterpreter ? h.messages : [];
                    if (e.type === P.Text)
                        return (0,
                        eO.jsx)(t6, {
                            className: "min-h-[20px]",
                            message: e.message,
                            isEditing: i,
                            format: s,
                            isCompletionInProgress: g && o,
                            clientThreadId: a,
                            onChangeItemInView: u,
                            onRequestCompletion: f,
                            onExitEdit: c,
                            disabled: d,
                            isCompletion: s,
                            onRequestMoreCompletions: m,
                            isResponseToPluginMessage: (null == h ? void 0 : h.type) === P.Plugin,
                            prevBrowsingMessages: y,
                            prevCodeMessages: v
                        }, e.message.nodeId);
                    if (e.type === P.MultiText)
                        return (0,
                        eO.jsx)(ni, {
                            clientThreadId: a,
                            messages: e.messages,
                            isCompletionInProgress: g && o,
                            isCompletion: s,
                            onRequestMoreCompletions: m,
                            prevBrowsingMessages: y,
                            prevCodeMessages: v
                        }, x);
                    return null;
                case P.Browsing:
                case P.RetrievalBrowsing:
                    return (0,
                    eO.jsx)(ns.Z, {
                        messages: e.messages,
                        clientThreadId: a,
                        currentModelId: r,
                        isLastMessageInTurn: g,
                        isRequestActive: d,
                        isRetrieval: e.type === P.RetrievalBrowsing
                    }, e.messages[0].nodeId);
                case P.ParallelBrowsing:
                    return (0,
                    eO.jsx)(nD, {
                        messages: e.messages
                    }, e.messages[0].nodeId);
                case P.CodeInterpreter:
                    return (0,
                    eO.jsx)(no.ZP, {
                        messages: e.messages,
                        isRequestActive: d
                    }, e.messages[0].nodeId);
                case P.Plugin:
                    return (0,
                    eO.jsx)(nY, {
                        clientThreadId: a,
                        messages: e.messages
                    }, e.messages[0].nodeId);
                case P.JITPlugin:
                    return (0,
                    eO.jsx)(e0, {
                        messages: e.messages,
                        clientThreadId: a,
                        isLastTurnInConversation: l,
                        onRequestCompletion: f
                    }, e.messages[0].nodeId);
                case P.Dalle:
                    return (0,
                    eO.jsx)(nb, {
                        messages: e.messages,
                        clientThreadId: a
                    }, e.messages[0].nodeId);
                case P.GizmoEditor:
                    return (0,
                    eO.jsx)(tm, {
                        messages: e.messages
                    }, e.messages[0].nodeId);
                case P.Debug:
                    if (!p)
                        return null;
                    return (0,
                    eO.jsx)(tg, {
                        message: e.message
                    }, e.message.nodeId);
                default:
                    return null
                }
            });
            return (0,
            eO.jsx)(n3, {
                children: x
            })
        }
        (l = P || (P = {}))[l.Text = 0] = "Text",
        l[l.MultiText = 1] = "MultiText",
        l[l.Browsing = 2] = "Browsing",
        l[l.CodeInterpreter = 3] = "CodeInterpreter",
        l[l.Plugin = 4] = "Plugin",
        l[l.JITPlugin = 5] = "JITPlugin",
        l[l.RetrievalBrowsing = 6] = "RetrievalBrowsing",
        l[l.ParallelBrowsing = 7] = "ParallelBrowsing",
        l[l.Dalle = 8] = "Dalle",
        l[l.GizmoEditor = 9] = "GizmoEditor",
        l[l.Debug = 10] = "Debug";
        var n3 = G.Z.div(T || (T = (0,
        B.Z)(["flex flex-grow flex-col max-w-full"])))
          , n6 = n(92063)
          , n4 = n(38766)
          , n7 = n(54655);
        function n8(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n8(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n8(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function at(e) {
            var t = e.clientThreadId
              , n = e.messageForRating
              , a = e.variantIds
              , r = e.conversationTurnMountTime
              , i = (0,
            Y.Z)()
              , s = (0,
            V.useState)(function() {
                return null != n.message.create_time ? 1e3 * n.message.create_time : Date.now()
            })[0]
              , o = (0,
            V.useState)(function() {
                return Date.now()
            })[0]
              , l = (0,
            Q.hz)()
              , d = null == l ? void 0 : l.includes($.L0.GuidedRegenerate);
            function c(e) {
                var i, l, c = et.tQ.getTree(t), u = a[0] || "", m = (null == c ? void 0 : c.getConversationTurns(u)) || [], f = m[m.length - 1], p = (null == f ? void 0 : f.messages) || [], x = p[p.length - 1], g = (null == x ? void 0 : null === (i = x.message) || void 0 === i ? void 0 : i.id) || "", h = a[1] || "", y = (null == c ? void 0 : c.getConversationTurns(h)) || [], v = y[y.length - 1], k = (null == v ? void 0 : v.messages) || [], b = k[k.length - 1], j = (null == b ? void 0 : null === (l = b.message) || void 0 === l ? void 0 : l.id) || "";
                ev.ZP.submitMessageComparisonFeedback({
                    feedback_version: d ? "inline_guided_regen_feedback:a:1.0" : "inline_regen_feedback:a:1.0",
                    original_message_id: g,
                    new_message_id: j,
                    rating: "none",
                    conversation_id: et.tQ.getServerThreadId(t),
                    text: "",
                    tags: [],
                    completion_comparison_rating: e,
                    new_completion_placement: "not-applicable",
                    feedback_start_time: r,
                    compare_step_start_time: r,
                    new_completion_load_start_time: s,
                    new_completion_load_end_time: o,
                    frontend_submission_time: Date.now(),
                    timezone_offset_min: new Date().getTimezoneOffset()
                }),
                et.tQ.updateTree(t, function(t) {
                    t.updateNodeMetadata(n.nodeId, {
                        inlineComparisonRating: e
                    })
                }),
                et.tQ.updateTree(t, function(e) {
                    e.updateNodeMetadata(x.nodeId, {
                        inlineComparisonRating: "baseline"
                    })
                })
            }
            return (0,
            eO.jsxs)(aa, {
                children: [(0,
                eO.jsx)("div", {
                    className: (0,
                    U.default)("mr-4"),
                    children: (0,
                    eO.jsx)(eU.Z, ae({}, ar.regenTitle))
                }), (0,
                eO.jsxs)(an, {
                    onClick: function() {
                        return c("new")
                    },
                    title: i.formatMessage(ar.regenBetterLabel),
                    children: [(0,
                    eO.jsx)(ez.fmn, {
                        className: "icon-sm mr-1 flex-shrink-0"
                    }), (0,
                    eO.jsx)("span", {
                        className: "flex-shrink-0",
                        children: (0,
                        eO.jsx)(eU.Z, ae({}, ar.regenBetterText))
                    })]
                }), (0,
                eO.jsxs)(an, {
                    onClick: function() {
                        return c("original")
                    },
                    title: i.formatMessage(ar.regenWorseLabel),
                    children: [(0,
                    eO.jsx)(ez.oLd, {
                        className: "icon-sm mr-1 flex-shrink-0"
                    }), (0,
                    eO.jsx)("span", {
                        className: "flex-shrink-0",
                        children: (0,
                        eO.jsx)(eU.Z, ae({}, ar.regenWorseText))
                    })]
                }), (0,
                eO.jsxs)(an, {
                    onClick: function() {
                        return c("same")
                    },
                    title: i.formatMessage(ar.regenSameLabel),
                    children: [(0,
                    eO.jsx)(n7.Ny3, {
                        className: "icon-sm mr-1 flex-shrink-0 rounded-full border border-gray-400 dark:border-gray-300"
                    }), (0,
                    eO.jsx)("span", {
                        className: "flex-shrink-0",
                        children: (0,
                        eO.jsx)(eU.Z, ae({}, ar.regenSameText))
                    })]
                }), (0,
                eO.jsx)(an, {
                    onClick: function() {
                        et.tQ.updateTree(t, function(e) {
                            e.updateNodeMetadata(n.nodeId, {
                                inlineComparisonRating: "skip"
                            })
                        })
                    },
                    title: i.formatMessage(ar.regenSkipLabel),
                    children: (0,
                    eO.jsx)(ez.q5L, {
                        className: "icon-lg flex-shrink-0"
                    })
                })]
            })
        }
        var an = G.Z.button(O || (O = (0,
        B.Z)(["p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2 flex-wrap justify-center"])))
          , aa = G.Z.div(I || (I = (0,
        B.Z)(["flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"])))
          , ar = (0,
        J.vU)({
            regenTitle: {
                id: "ConversationTurnInlineFeedback.regenTitle",
                defaultMessage: "Was this response better or worse?"
            },
            regenBetterLabel: {
                id: "ConversationTurnInlineFeedback.regenBetterLabel",
                defaultMessage: "This response was better than the previous response"
            },
            regenBetterText: {
                id: "ConversationTurnInlineFeedback.regenBetterText",
                defaultMessage: "Better"
            },
            regenWorseLabel: {
                id: "ConversationTurnInlineFeedback.regenWorseLabel",
                defaultMessage: "This response was worse than the previous response"
            },
            regenWorseText: {
                id: "ConversationTurnInlineFeedback.regenWorseText",
                defaultMessage: "Worse"
            },
            regenSameLabel: {
                id: "ConversationTurnInlineFeedback.regenSameLabel",
                defaultMessage: "This response was the same in quality"
            },
            regenSameText: {
                id: "ConversationTurnInlineFeedback.regenSameText",
                defaultMessage: "Same"
            },
            regenSkipLabel: {
                id: "ConversationTurnInlineFeedback.regenSkipLabel",
                defaultMessage: "Skip this comparison"
            }
        })
          , ai = n(58272)
          , as = n(93239)
          , ao = n(84829)
          , al = n(61888)
          , ad = n(95552)
          , ac = n.n(ad)
          , au = n(7254);
        function am(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function af(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? am(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : am(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ap(e, t, n) {
            et.tQ.updateTree(e, function(e) {
                e.updateNodeMetadata(t, {
                    inlineComparisonRating: n
                })
            })
        }
        function ax() {
            return (0,
            eO.jsxs)("div", {
                className: "mx-auto flex flex-col",
                children: [(0,
                eO.jsx)("div", {
                    className: "text-center text-lg",
                    children: (0,
                    eO.jsx)(eU.Z, af({}, ak.responsePrompt))
                }), (0,
                eO.jsx)("div", {
                    className: "text-center text-sm text-token-text-tertiary",
                    children: (0,
                    eO.jsx)(eU.Z, af({}, ak.responsePromptExplanation))
                })]
            })
        }
        function ag(e) {
            var t = e.clientThreadId
              , n = e.variantIds
              , a = e.variantsInStreamInfo
              , r = e.avatarColor;
            (0,
            ao.ok)(2 === n.length);
            var i = (0,
            V.useState)(function() {
                return Date.now()
            })[0]
              , s = (0,
            n1.N)()
              , o = (0,
            el.B$)()
              , l = (0,
            V.useMemo)(function() {
                return .5 > ac()(n.join(""))() ? [0, 1] : [1, 0]
            }, [n[0], n[1]])
              , d = l[0]
              , c = l[1]
              , u = d < c ? "left" : "right"
              , m = "left" === u ? "right" : "left"
              , f = n[d]
              , p = n[c]
              , x = (0,
            et.Rz)(t, f)
              , g = (0,
            et.Rz)(t, p)
              , h = (0,
            et.uj)(t, x.id)
              , y = (0,
            et.uj)(t, g.id)
              , v = "left" === u ? h : y
              , k = "left" === u ? y : h
              , b = "unskippable" === a.display_treatment
              , j = b ? "unskippable_parallel_2_in_stream:a:1.0" : "skippable_parallel_2_in_stream:a:1.0";
            (0,
            V.useEffect)(function() {
                return au.i.setState({
                    displayingSideBySideFeedback: !0,
                    unskippable: b
                }),
                function() {
                    au.i.setState({
                        displayingSideBySideFeedback: !1,
                        unskippable: !1
                    })
                }
            }, [b]),
            (0,
            V.useEffect)(function() {
                return (0,
                ai.LW)(as.E, {
                    requestCompletion: function() {
                        var e, n, a, r, s = null === (e = (0,
                        al.last)(v.messages)) || void 0 === e ? void 0 : e.completionSampleFinishTime, o = null === (n = (0,
                        al.last)(k.messages)) || void 0 === n ? void 0 : n.completionSampleFinishTime;
                        ev.ZP.submitMessageComparisonFeedback({
                            feedback_version: j,
                            original_message_id: null === (a = v.messages[v.messages.length - 1]) || void 0 === a ? void 0 : a.message.id,
                            new_message_id: null === (r = k.messages[k.messages.length - 1]) || void 0 === r ? void 0 : r.message.id,
                            rating: "none",
                            conversation_id: et.tQ.getServerThreadId(t),
                            text: "",
                            tags: [],
                            completion_comparison_rating: "skip",
                            new_completion_placement: m,
                            feedback_start_time: i,
                            compare_step_start_time: i,
                            original_completion_load_start_time: i,
                            original_completion_load_end_time: null != s ? s : 0,
                            new_completion_load_start_time: i,
                            new_completion_load_end_time: null != o ? o : 0,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })
                    }
                })
            }, [h, y, t, i, j, m, v.messages, k.messages]);
            var w = function(e) {
                var n, a, r, s, o = et.tQ.getTree(t).getLeafFromNode(e);
                et.tQ.setThreadCurrentLeafId(t, o.id);
                var l = e === f == ("left" === u)
                  , d = null === (n = (0,
                al.last)(v.messages)) || void 0 === n ? void 0 : n.completionSampleFinishTime
                  , c = null === (a = (0,
                al.last)(k.messages)) || void 0 === a ? void 0 : a.completionSampleFinishTime;
                v.messages.length > 0 && ap(t, v.messages[v.messages.length - 1].nodeId, l ? "original" : "new"),
                k.messages.length > 0 && ap(t, k.messages[k.messages.length - 1].nodeId, l ? "original" : "new"),
                null != d && null != c && ev.ZP.submitMessageComparisonFeedback({
                    feedback_version: j,
                    original_message_id: null === (r = v.messages[v.messages.length - 1]) || void 0 === r ? void 0 : r.message.id,
                    new_message_id: null === (s = k.messages[k.messages.length - 1]) || void 0 === s ? void 0 : s.message.id,
                    rating: "none",
                    conversation_id: et.tQ.getServerThreadId(t),
                    text: "",
                    tags: [],
                    completion_comparison_rating: l ? "original" : "new",
                    new_completion_placement: m,
                    feedback_start_time: i,
                    compare_step_start_time: i,
                    original_completion_load_start_time: i,
                    original_completion_load_end_time: d,
                    new_completion_load_start_time: i,
                    new_completion_load_end_time: c,
                    frontend_submission_time: Date.now(),
                    timezone_offset_min: new Date().getTimezoneOffset()
                })
            }
              , M = (0,
            el.Yk)(eo.Cv.getRequestIdFromConversationTurn(h))
              , C = (0,
            el.Yk)(eo.Cv.getRequestIdFromConversationTurn(y))
              , T = eo.Cv.getRequestIdFromConversationTurn(h)
              , P = (0,
            el.Yk)(T)
              , O = eo.Cv.getRequestIdFromConversationTurn(y)
              , I = (0,
            el.Yk)(O)
              , S = (0,
            V.useMemo)(function() {
                return n2(h.messages)
            }, [h.messages])
              , N = (0,
            V.useMemo)(function() {
                return n2(y.messages)
            }, [y.messages]);
            function _(e) {
                return s.showDebugConversationTurns ? (0,
                eO.jsx)("div", {
                    className: "text-sm uppercase text-red-500",
                    children: e === v ? "Original" : "New"
                }) : null
            }
            return (0,
            eO.jsx)("div", {
                className: (0,
                U.default)("relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"),
                children: (0,
                eO.jsxs)("div", {
                    className: "relative mt-3 flex gap-1 md:gap-3",
                    children: [(0,
                    eO.jsxs)(ah, {
                        onClick: function() {
                            w(f)
                        },
                        children: [(0,
                        eO.jsxs)(av, {
                            children: [(0,
                            eO.jsx)(e_, {
                                isCompletionRequestInProgress: M,
                                messages: h.messages,
                                clientThreadId: t,
                                isCompletion: aS(h),
                                avatarColor: r,
                                showInlineEmbeddedDisplay: !1
                            }), (0,
                            eO.jsx)(ay, {
                                children: (0,
                                eO.jsx)(eU.Z, af(af({}, ak.responseNumber), {}, {
                                    values: {
                                        responseIndex: 1
                                    }
                                }))
                            })]
                        }), (0,
                        eO.jsx)(n5, af(af({}, e), {}, {
                            groupedMessagesToRender: S,
                            allGroupedMessages: S,
                            isEditing: !1,
                            isCompletion: aS(h),
                            isCompletionRequestInProgress: P,
                            hasActiveRequest: o,
                            handleExitEdit: al.noop
                        })), _(h)]
                    }), (0,
                    eO.jsxs)(ah, {
                        onClick: function() {
                            w(p)
                        },
                        children: [(0,
                        eO.jsxs)(av, {
                            children: [(0,
                            eO.jsx)(e_, {
                                isCompletionRequestInProgress: C,
                                messages: y.messages,
                                clientThreadId: t,
                                isCompletion: aS(y),
                                avatarColor: r,
                                showInlineEmbeddedDisplay: !1
                            }), (0,
                            eO.jsx)(ay, {
                                children: (0,
                                eO.jsx)(eU.Z, af(af({}, ak.responseNumber), {}, {
                                    values: {
                                        responseIndex: 2
                                    }
                                }))
                            })]
                        }), (0,
                        eO.jsx)(n5, af(af({}, e), {}, {
                            groupedMessagesToRender: N,
                            allGroupedMessages: N,
                            isEditing: !1,
                            isCompletion: aS(y),
                            isCompletionRequestInProgress: I,
                            hasActiveRequest: o,
                            handleExitEdit: al.noop
                        })), _(y)]
                    })]
                })
            })
        }
        var ah = G.Z.button(S || (S = (0,
        B.Z)(["relative flex w-full flex-col gap-1 bg-white cursor-pointer truncate rounded-lg border border-gray-300 text-left\nbg-white dark:bg-[#444654] py-4 px-5\nhover:border-[var(--avatar-color)]"])))
          , ay = G.Z.div(N || (N = (0,
        B.Z)(["text-sm text-token-text-tertiary"])))
          , av = G.Z.div(_ || (_ = (0,
        B.Z)(["flex gap-4 items-center mb-1"])))
          , ak = (0,
        J.vU)({
            responsePrompt: {
                id: "ConversationTurnTwoUpFeedback.responsePrompt",
                defaultMessage: "Which response do you prefer?"
            },
            responsePromptExplanation: {
                id: "ConversationTurnTwoUpFeedback.responsePromptExplanation",
                defaultMessage: "Your choice will help make ChatGPT better."
            },
            responseNumber: {
                id: "ConversationTurnTwoUpFeedback.responseNumber",
                defaultMessage: "Response {responseIndex, number}"
            }
        })
          , ab = n(25736)
          , aj = n(52467)
          , aw = n(72459)
          , aM = n(75884)
          , aC = n(99471)
          , aT = n(46514);
        function aP(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function aO(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? aP(Object(n), !0).forEach(function(t) {
                    (0,
                    z.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aP(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function aI(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function aS(e) {
            return e.role !== ee.uU.User
        }
        var aN = V.memo(function(e) {
            var t, n, a, r, i, s, o, l = e.turnIndex, d = e.conversationLeafId, c = e.isFinalTurn, u = e.clientThreadId, m = e.onChangeItemInView, f = e.onChangeRating, p = e.showInlineEmbeddedDisplay, x = void 0 !== p && p, g = e.currentModelId, h = e.initiallyHighlightedMessageId, y = e.avatarColor, v = null !== (0,
            V.useContext)(er.gB), k = (0,
            ea.ec)(ea.F_.isBusinessWorkspace), b = (0,
            eE.Po)(u), j = (0,
            et.GD)(u, l, d), w = j.messages, M = j.variantIds, C = j.variantsInStreamInfo, T = n2(w), O = (0,
            tK.t9)(), I = w[w.length - 1], S = function(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return aI(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n)
                                return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return aI(e, t)
                        }
                    }(e))) {
                        n && (e = n);
                        var a = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done,
                        e
                    },
                    e: function(e) {
                        o = !0,
                        i = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                }
            }(T);
            try {
                for (S.s(); !(o = S.n()).done; ) {
                    var N = o.value
                      , _ = function(e) {
                        var t = e.type;
                        switch (t) {
                        case P.Text:
                        case P.Debug:
                            return [e.message];
                        case P.MultiText:
                        case P.Browsing:
                        case P.CodeInterpreter:
                        case P.Plugin:
                        case P.JITPlugin:
                        case P.RetrievalBrowsing:
                        case P.ParallelBrowsing:
                        case P.Dalle:
                        case P.GizmoEditor:
                            return e.messages;
                        default:
                            return (0,
                            e4.Z)(t),
                            []
                        }
                    }(N);
                    if (_.some(function(e) {
                        return O.has(e.message.id)
                    })) {
                        I = _[_.length - 1];
                        break
                    }
                }
            } catch (e) {
                S.e(e)
            } finally {
                S.f()
            }
            var D = w.slice(0, w.indexOf(I) + 1)
              , Z = (0,
            ei.x_)()
              , R = (0,
            V.useState)(!1)
              , F = R[0]
              , E = R[1]
              , A = M.findIndex(function(e) {
                return D.some(function(t) {
                    return t.nodeId === e
                })
            })
              , L = aS(j)
              , q = (0,
            n4.V_)()
              , B = (0,
            en.tN)(function(e) {
                return e.isDesktopNavCollapsed
            })
              , z = (0,
            W.WA)(u)
              , G = (0,
            Q.hz)()
              , Y = D.some(function(e) {
                return e.message.content.content_type === ee.PX.MultimodalText
            })
              , J = (0,
            V.useRef)(null);
            (0,
            V.useEffect)(function() {
                var e;
                null != h && j.messages.map(function(e) {
                    return e.message.id
                }).includes(h) && (null === (e = J.current) || void 0 === e || e.scrollIntoView({
                    behavior: "auto"
                }))
            }, [h]);
            var ed = D[D.length - 1]
              , ec = ed.rating
              , em = L && (null == D ? void 0 : D[0]) != null && (0,
            es.Rc)(D[0].message) || g
              , ef = (0,
            V.useCallback)(function() {
                E(!1)
            }, [])
              , ep = (0,
            V.useCallback)(function() {
                et.tQ.copyMessageToClipboard(u, l)
            }, [u, l])
              , ex = (0,
            V.useCallback)(function(e) {
                f(ed.nodeId, ed.message.id, e)
            }, [ed, f])
              , eg = (0,
            V.useState)(function() {
                return Date.now()
            })[0]
              , eh = (0,
            V.useMemo)(function() {
                return eo.Cv.getRequestIdFromConversationTurn(j)
            }, [j])
              , ey = (0,
            el.Yk)(eh)
              , ev = (0,
            el.B$)()
              , ek = function() {
                if (L && z.kind === ee.OL.PrimaryAssistant) {
                    var e, t, n = et.tQ.getTree(u), a = D[0], r = null == a ? void 0 : a.nodeId;
                    if (null == a || null == r || "" === r)
                        return null;
                    var i = n.getParentPromptNode(r)
                      , s = null == i ? void 0 : i.parentId;
                    if (null == s || "" === s)
                        return null;
                    var o = n.getNodeByIdOrMessageId(s)
                      , l = null == o ? void 0 : null === (e = o.message) || void 0 === e ? void 0 : null === (t = e.metadata) || void 0 === t ? void 0 : t.model_slug;
                    if (em && null != l && em !== l)
                        return aT.n2.has(l) ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model." : "The previous model used in this conversation is unavailable. We've switched you to the latest default model."
                }
                return null
            }()
              , eb = n2(D)
              , ej = (0,
            et.r7)(u)
              , ew = (t = (0,
            et.oq)(u),
            n = (0,
            et.Hk)(u),
            a = (0,
            el.Yk)(n),
            r = (0,
            V.useContext)(er.gt).serviceStatus,
            i = (0,
            au.i)(),
            "root" !== t && !a && !(null != r && r.oof) && !i.displayingSideBySideFeedback)
              , eM = (0,
            aC.Z)(u)
              , eC = (0,
            et.oq)(u)
              , eT = !v && !ej && !q && Z && L
              , eP = eT && !k && !ey && !x && !F && z.kind !== ee.OL.GizmoMagicCreate && 1 === A && c && !ed.inlineComparisonRating && !ec && 2 === M.length && Date.now() - (null !== (s = ed.message.create_time) && void 0 !== s ? s : 0) * 1e3 < 6e5
              , eI = (0,
            et.yt)(u, M)
              , eS = z.kind !== ee.OL.GizmoMagicCreate && z.kind !== ee.OL.GizmoTest && eT && c && (null == C ? void 0 : C.num_variants_in_stream) === 2 && 2 === M.length && !ed.inlineComparisonRating && !eI
              , eN = (0,
            eu.Q)().gizmoEditorData
              , eD = L && !x && !v && !ej && null == eN
              , eZ = eD && !k && z.kind !== ee.OL.GizmoMagicCreate
              , eR = !v && !x && !F && !eS
              , eF = !L && !x && z.kind !== ee.OL.GizmoMagicCreate && !v && !Y && 1 === D.length && !F
              , eA = (0,
            n1.N)().showDebugConversationTurns;
            if (!(j.role !== ee.uU.Root && (j.role !== ee.uU.System || eA)) && !eS)
                return null;
            var eL = eF ? (0,
            eO.jsx)(aL, {
                onClick: function() {
                    1 === D.length && (X.A.logEvent(K.M.editPrompt, {
                        id: D[0].message.id,
                        threadId: et.tQ.getServerThreadId(u)
                    }),
                    E(!0))
                },
                children: (0,
                eO.jsx)("div", {
                    className: "flex items-center gap-1.5 text-xs",
                    children: (0,
                    eO.jsx)(H.eu, {
                        className: "icon-md"
                    })
                })
            }) : null
              , eq = c && ew ? (0,
            eO.jsx)(aL, {
                onClick: function() {
                    eM(eC, {
                        eventSource: "mouse"
                    }),
                    (0,
                    aw.g)()
                },
                children: (0,
                eO.jsx)("div", {
                    className: "flex items-center gap-1.5 text-xs",
                    children: (0,
                    eO.jsx)(H.vX, {
                        className: "icon-md"
                    })
                })
            }) : null
              , eB = !L || x || c && ey ? null : (0,
            eO.jsx)(n6.Z, {
                shouldChangeText: !1,
                onCopy: ep,
                iconClassName: "icon-md",
                className: "gap-1.5 rounded-md p-1 pl-0 text-xs hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 md:invisible md:group-hover:visible md:group-[.final-completion]:visible"
            })
              , ez = eZ && !ey ? (0,
            eO.jsxs)("div", {
                className: "flex gap-1",
                children: [!(null != G && G.includes($.L0.ThumbsDownOnly)) && "thumbsDown" !== ec && !q && (0,
                eO.jsx)(aL, {
                    onClick: function() {
                        return ex("thumbsUp")
                    },
                    disabled: "thumbsUp" === ec,
                    className: (0,
                    U.default)("thumbsUp" === ec && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                    children: (0,
                    eO.jsx)(H.ib, {
                        className: "icon-md"
                    })
                }, "thumbsUp:".concat(ed.nodeId)), "thumbsUp" !== ec && !q && (0,
                eO.jsx)(aL, {
                    onClick: function() {
                        return ex("thumbsDown")
                    },
                    disabled: "thumbsDown" === ec,
                    className: (0,
                    U.default)("thumbsDown" === ec && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                    children: (0,
                    eO.jsx)(H.Q7, {
                        className: "icon-md"
                    })
                }, "thumbsDown:".concat(ed.nodeId))]
            }) : null
              , eU = eP ? (0,
            eO.jsx)(at, {
                clientThreadId: u,
                messageForRating: ed,
                variantIds: M,
                conversationTurnMountTime: eg
            }) : null;
            return (0,
            eO.jsxs)("div", {
                className: "w-full text-token-text-primary",
                ref: J,
                style: {
                    "--avatar-color": y
                },
                "data-testid": "conversation-turn-".concat(l),
                children: [ek && (0,
                eO.jsx)(aF, {
                    children: ek
                }), (0,
                eO.jsxs)(aE, {
                    $isStaticSharedThread: v,
                    $showInlineEmbeddedDisplay: x,
                    children: [(0,
                    eO.jsx)(aA, {
                        $isStaticSharedThread: v,
                        $isDesktopNavCollapsed: B,
                        className: (0,
                        U.default)("group", L && c && "final-completion"),
                        children: eS ? (0,
                        eO.jsx)(ax, {}) : (0,
                        eO.jsxs)(eO.Fragment, {
                            children: [(0,
                            eO.jsx)(aZ, {
                                children: (0,
                                eO.jsx)(e_, {
                                    isCompletionRequestInProgress: ey,
                                    messages: D,
                                    clientThreadId: u,
                                    isCompletion: L,
                                    avatarColor: y,
                                    showInlineEmbeddedDisplay: x
                                })
                            }), (0,
                            eO.jsxs)("div", {
                                className: (0,
                                U.default)("relative flex w-full flex-col lg:w-[calc(100%-115px)]", L && aM.om),
                                children: [(0,
                                eO.jsx)(a_, {
                                    messages: D,
                                    isCompletion: L,
                                    gizmo: b
                                }), (0,
                                eO.jsxs)("div", {
                                    className: "flex-col gap-1 md:gap-3",
                                    children: [(0,
                                    eO.jsx)(n5, aO(aO({
                                        groupedMessagesToRender: eb,
                                        allGroupedMessages: T
                                    }, e), {}, {
                                        isEditing: F,
                                        isCompletion: L,
                                        isCompletionRequestInProgress: ey,
                                        isFinalTurn: c,
                                        hasActiveRequest: ev,
                                        handleExitEdit: ef
                                    })), (eD || eR) && (0,
                                    eO.jsx)(eO.Fragment, {
                                        children: (0,
                                        eO.jsxs)("div", {
                                            className: "mt-1 flex justify-start gap-3 empty:hidden",
                                            children: [eR && M.length > 1 && (0,
                                            eO.jsx)(aj.h, {
                                                currentPage: A,
                                                onChangeIndex: function(e) {
                                                    m(M[e]),
                                                    X.A.logEvent(K.M.changeNode, {
                                                        intent: "toggle_between"
                                                    })
                                                },
                                                length: M.length,
                                                className: (0,
                                                U.default)("self-center", M.length > 1 ? "visible" : "!invisible")
                                            }), eD ? (0,
                                            eO.jsxs)(aq, {
                                                $hidden: ey,
                                                children: [eB, ez, eq]
                                            }) : eF ? (0,
                                            eO.jsx)(aq, {
                                                $hidden: !1,
                                                children: eL
                                            }) : null, eP && eU]
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), eS && (0,
                    eO.jsx)(aD, {
                        children: (0,
                        eO.jsx)(ag, aO({
                            variantIds: M,
                            variantsInStreamInfo: C,
                            conversationTurnMountTime: eg
                        }, e))
                    })]
                })]
            })
        })
          , a_ = function(e) {
            var t, n = e.messages, a = e.isCompletion, r = e.gizmo, i = (0,
            Y.Z)(), s = null === (t = n[0].message.metadata) || void 0 === t ? void 0 : t.shared_conversation_id, o = (0,
            eu.Q)(), l = o.gizmoEditorData, d = o.mode, c = "ChatGPT";
            return a ? null != l ? c = "magic" === d ? eE.HW : (null == l ? void 0 : l.name) || ab.zf : (null == r ? void 0 : r.gizmo.display.name) != null && (c = r.gizmo.display.name) : c = null != s ? i.formatMessage(aB.anonymousName) : i.formatMessage(aB.you),
            (0,
            eO.jsx)(aR, {
                children: c
            })
        }
          , aD = G.Z.div(D || (D = (0,
        B.Z)(["justify-center flex flex-1 p-4 gap-4 text-base mx-auto max-w-6xl"])))
          , aZ = G.Z.div(Z || (Z = (0,
        B.Z)(["flex-shrink-0 flex flex-col relative items-end"])))
          , aR = G.Z.div(R || (R = (0,
        B.Z)(["font-semibold select-none"])))
          , aF = G.Z.div(F || (F = (0,
        B.Z)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"])))
          , aE = G.Z.div(E || (E = (0,
        B.Z)(["\npx-4 py-2 justify-center text-base md:gap-6\n", "\n"])), function(e) {
            return e.$showInlineEmbeddedDisplay && !e.$isStaticSharedThread ? "ml-5" : "m-auto"
        })
          , aA = G.Z.div(A || (A = (0,
        B.Z)(["\nflex flex-1 text-base mx-auto gap-3\n", "\n", "\n"])), function(e) {
            return e.$isStaticSharedThread ? "" : "md:px-5 lg:px-1 xl:px-5"
        }, function(e) {
            return e.$isDesktopNavCollapsed ? "md:max-w-3xl" : "md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"
        })
          , aL = G.Z.button(L || (L = (0,
        B.Z)(["p-1 pl-0 rounded-md disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 text-gray-400 hover:text-gray-950 md:invisible md:group-hover:visible md:group-[.final-completion]:visible"])))
          , aq = G.Z.div(q || (q = (0,
        B.Z)(["text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 gap-1\n", ""])), function(e) {
            return e.$hidden ? "invisible" : "visible"
        })
          , aB = (0,
        J.vU)({
            you: {
                id: "ConversationTurn.you",
                defaultMessage: "You"
            },
            anonymousName: {
                id: "ConversationTurn.anonymousName",
                defaultMessage: "Anonymous"
            }
        })
    },
    97761: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var a = n(35250);
        function r(e) {
            var t, n = e.url, r = e.size, i = void 0 === r ? 16 : r, s = e.className;
            try {
                t = new URL(n)
            } catch (e) {
                return console.error(e),
                null
            }
            return (0,
            a.jsx)("img", {
                src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
                alt: "Favicon",
                width: i,
                height: i,
                className: s
            })
        }
    },
    3359: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return C
            }
        });
        var a, r = n(36112), i = n(90038), s = n(7813), o = n(18008), l = n(33322), d = n(73582), c = n(25349), u = n(99893), m = n(37178), f = n(19841), p = n(1454), x = n(32004), g = n(94968), h = n(21389), y = n(41202), v = n(4748), k = n(35250);
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var w = h.Z.a(a || (a = (0,
        i.Z)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"])));
        function M(e) {
            var t = e.onClick
              , n = e.href
              , a = e.target
              , r = e.children;
            return (0,
            k.jsx)(s.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    k.jsx)(w, {
                        as: void 0 !== n ? "a" : "button",
                        onClick: t,
                        href: n,
                        target: a,
                        className: (0,
                        f.default)(i ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"),
                        children: r
                    })
                }
            })
        }
        function C() {
            var e = (0,
            d.aF)()
              , t = (0,
            l.E)().isUserUnauthenticated;
            return (0,
            k.jsxs)(s.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                k.jsx)(s.v.Button, {
                    className: "flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                    children: (0,
                    k.jsx)("div", {
                        className: "flex h-6 w-6 items-center justify-center text-xs",
                        children: "?"
                    })
                }), (0,
                k.jsx)(y.m, {
                    children: (0,
                    k.jsxs)(s.v.Items, {
                        className: "absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950",
                        children: [e && !t && (0,
                        k.jsx)(M, {
                            onClick: function() {
                                (0,
                                m.S)(null == e ? void 0 : e.id).then(function() {
                                    v.m.success("Copied your User ID to clipboard")
                                })
                            },
                            children: (0,
                            k.jsx)("span", {
                                className: "truncate text-xs text-black/20 dark:text-white/30",
                                children: null == e ? void 0 : e.email
                            })
                        }), (0,
                        k.jsxs)(M, {
                            as: "a",
                            href: "https://help.openai.com/en/collections/3742473-chatgpt",
                            target: "_blank",
                            onClick: function() {
                                c.A.logEvent(u.M.clickFaqLink)
                            },
                            children: [(0,
                            k.jsx)(p.AlO, {
                                className: "icon-sm"
                            }), (0,
                            k.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                k.jsx)(x.Z, j({}, T.helpAndFaq))
                            })]
                        }), (0,
                        k.jsxs)(M, {
                            as: "a",
                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                            target: "_blank",
                            children: [(0,
                            k.jsx)(p.AlO, {
                                className: "icon-sm"
                            }), (0,
                            k.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                k.jsx)(x.Z, j({}, T.releaseNotes))
                            })]
                        }), (0,
                        k.jsxs)(M, {
                            as: "a",
                            href: "https://openai.com/policies",
                            target: "_blank",
                            onClick: function() {
                                c.A.logEvent(u.M.clickPrivacyPolicy)
                            },
                            children: [(0,
                            k.jsx)(p.AlO, {
                                className: "icon-sm"
                            }), (0,
                            k.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                k.jsx)(x.Z, j({}, T.termsAndPolicies))
                            })]
                        }), (0,
                        k.jsxs)(M, {
                            onClick: function() {
                                o.vm.openModal(o.B.KeyboardActions)
                            },
                            children: [(0,
                            k.jsx)(p.aCJ, {
                                className: "icon-sm"
                            }), (0,
                            k.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                k.jsx)(x.Z, j({}, T.keyboardShortcutsMenu))
                            })]
                        })]
                    })
                })]
            })
        }
        var T = (0,
        g.vU)({
            helpAndFaq: {
                id: "thread.helpAndFaq",
                defaultMessage: "Help & FAQ"
            },
            releaseNotes: {
                id: "thread.releaseNotes",
                defaultMessage: "Release notes"
            },
            termsAndPolicies: {
                id: "thread.termsAndPolicies",
                defaultMessage: "Terms & policies"
            },
            keyboardShortcutsMenu: {
                id: "thread.keyboardShortcutsMenu",
                defaultMessage: "Keyboard shortcuts"
            }
        })
    },
    41202: function(e, t, n) {
        "use strict";
        n.d(t, {
            m: function() {
                return s
            }
        });
        var a = n(98359)
          , r = n(70079)
          , i = n(35250);
        function s(e) {
            var t = e.show
              , n = e.appear
              , s = e.children;
            return (0,
            i.jsx)(a.u, {
                as: r.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                show: t,
                appear: n,
                children: s
            })
        }
    },
    50590: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return ax
            }
        });
        var a, r, i, s, o, l, d, c, u, m, f, p, x, g, h, y, v, k, b, j, w, M, C, T = n(90038), P = n(80459), O = n(50134), I = n(36112), S = n(4399), N = n.n(S), _ = n(37097), D = n(84623), Z = n(15136), R = n(25349), F = n(99893), E = n(5397), A = n.n(E), L = n(29124), q = n.n(L), B = n(73040), z = n.n(B), U = n(10721), V = n(70079), G = n(1454), H = n(13002), W = n(94968), Q = n(32004), $ = n(21389), X = n(8844), K = n(11591), Y = n(66027), J = n(1890), ee = n(19954), et = n(18008), en = n(73582), ea = n(73929), er = n(5974), ei = n(41899), es = n(28818), eo = n(26272), el = n(7254), ed = n(3125), ec = n(6939), eu = n(19841), em = n(91530), ef = n.n(em), ep = n(2827), ex = n(70671), eg = n(86178), eh = n(50829), ey = n(97300), ev = n(3554), ek = n(21120), eb = n(90166), ej = n(4748), ew = n(35250);
        function eM(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        var eC = (0,
        W.vU)({
            submitFeedback: {
                id: "feedbackModal.submitFeedback",
                defaultMessage: "Submit feedback"
            },
            submitReport: {
                id: "feedbackModal.submitReport",
                defaultMessage: "Submit report"
            },
            submitRejectModeration: {
                id: "feedbackModal.moderationReject",
                defaultMessage: "Block Content"
            },
            submitAcceptModeration: {
                id: "feedbackModal.moderationAccept",
                defaultMessage: "Allow Content"
            },
            thumbsUpPlaceholder: {
                id: "feedbackModal.thumbsUpPlaceholder",
                defaultMessage: "What do you like about the response?"
            },
            thumbsDownPlaceholder: {
                id: "feedbackModal.thumbsDownPlaceholder",
                defaultMessage: "What was the issue with the response? How could it be improved?"
            },
            reportContentExplanationPlaceholder: {
                id: "feedbackModal.reportContentExplanationPlaceholder",
                defaultMessage: "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below."
            },
            harmfulUnsafe: {
                id: "feedbackModal.harmfulUnsafe",
                defaultMessage: "This is harmful / unsafe"
            },
            harmfulOffensive: {
                id: "feedbackModal.harmfulOffensive",
                defaultMessage: "This content is harmful or offensive"
            },
            copyrightContent: {
                id: "feedbackModal.copyrightContent",
                defaultMessage: "This content violates copyright law"
            },
            reportOtherContent: {
                id: "feedbackModal.reportOtherContent",
                defaultMessage: "I don't like this for some other reason (please describe)"
            },
            notTrue: {
                id: "feedbackModal.notTrue",
                defaultMessage: "This isn't true"
            },
            notHelpful: {
                id: "feedbackModal.notHelpful",
                defaultMessage: "This isn't helpful"
            },
            dontLikeThis: {
                id: "feedbackModal.dontLikeThis",
                defaultMessage: "I don't like this"
            },
            sexualAbuse: {
                id: "feedbackModal.sexualAbuse",
                defaultMessage: "This content contains sexual abuse"
            },
            provideAdditionalFeedback: {
                id: "feedbackModal.provideAdditionalFeedback",
                defaultMessage: "Provide additional feedback"
            },
            provideReportModalTitle: {
                id: "feedbackModal.provideReportModalTitle",
                defaultMessage: "Report This Content"
            },
            pickBestAnswer: {
                id: "feedbackModal.pickBestAnswer",
                defaultMessage: "Pick the best answer to improve the model"
            },
            newAnswer: {
                id: "feedbackModal.newAnswer",
                defaultMessage: "New Answer"
            },
            originalAnswer: {
                id: "feedbackModal.originalAnswer",
                defaultMessage: "Original Answer"
            },
            newAnswerBetter: {
                id: "feedbackModal.newAnswerBetter",
                defaultMessage: "New answer is better"
            },
            originalAnswerBetter: {
                id: "feedbackModal.originalAnswerBetter",
                defaultMessage: "Original answer is better"
            },
            neitherAnswerBetter: {
                id: "feedbackModal.neitherAnswerBetter",
                defaultMessage: "Neither answer is better"
            },
            skipStep: {
                id: "feedbackModal.skipStep",
                defaultMessage: "Skip this step"
            },
            continueWithChosenAnswer: {
                id: "feedbackModal.continueWithChosenAnswer",
                defaultMessage: "The conversation will continue with the answer you choose."
            },
            employeeConsent: {
                id: "feedbackModal.employeeConsent",
                defaultMessage: "Allow this content to be used for model evals"
            },
            employeeConsentExplanation: {
                id: "feedbackModal.employeeConsentExplanation",
                defaultMessage: "Allow your feedback and conversation to be used to in model evals. Please verify there is no confidential data in the conversation."
            }
        });
        function eT(e) {
            var t, n, a, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.length) === 1 && !(null != e && null !== (n = e.messages) && void 0 !== n && n.some(function(e) {
                return "error"in e
            })) && (!r || !((null == e ? void 0 : null === (a = e.messages) || void 0 === a ? void 0 : a.length) === 1 && (0,
            ei.RR)(null == e ? void 0 : e.messages[0].message).length < 20))
        }
        function eP(e) {
            var t, n, a = e.ratingModalNodeId, r = e.ratingModalOpen, i = e.onCloseRatingModal, s = e.onSubmitFeedback, o = e.onHandleChangeFeedbackComparisonRating, l = e.feedbackTextareaRef, d = e.clientThreadId, c = e.currentModelId, u = e.onChangeItemInView, m = e.onRequestMoreCompletions, f = e.onRequestCompletion, p = (0,
            ex.Z)(), x = ee.tQ.getTree(d), g = (0,
            ee.XK)(d), h = (0,
            en.aF)(), y = !!h && (0,
            Z.yl)(h), v = (0,
            V.useState)(!1), k = v[0], b = v[1];
            (0,
            V.useEffect)(function() {
                "report" === r && Z.pg.forceEnableSession()
            }, [r]);
            var j = (0,
            V.useRef)(.5 > Math.random() ? "left" : "right")
              , w = null == x ? void 0 : x.getConversationTurns(a || "root")
              , M = w.length - 1
              , C = w[w.length - 1]
              , T = (0,
            V.useState)("critique")
              , P = T[0]
              , O = T[1]
              , S = (0,
            er.w$)()
              , N = eT(C, !0) && S
              , _ = (0,
            V.useMemo)(function() {
                return {
                    id: a || "root",
                    threadId: ee.tQ.getServerThreadId(d),
                    rating: r,
                    model: c
                }
            }, [a, d, r, c])
              , D = null == w ? void 0 : w[(null == w ? void 0 : w.length) - 1].variantIds
              , E = null == D ? void 0 : D[(null == D ? void 0 : D.length) - 1]
              , A = (n = (t = null == x ? void 0 : x.getConversationTurns(E))[t.length - 1]).messages[n.messages.length - 1].nodeId
              , L = null == x ? void 0 : x.getConversationTurns(A)
              , q = (0,
            V.useMemo)(function() {
                var e = null == L ? void 0 : L[(null == L ? void 0 : L.length) - 1];
                return "thumbsDown" === r && N && eT(e) && eT(C)
            }, [r, N, L, C])
              , B = (0,
            V.useRef)(Date.now())
              , z = (0,
            V.useRef)(-1)
              , U = (0,
            V.useRef)(Date.now())
              , H = (0,
            V.useRef)(Date.now());
            (0,
            V.useEffect)(function() {
                "compare" === P ? (z.current = Date.now(),
                R.A.logEvent(F.M.displayedComparisonUIV0, _)) : "critique" === P && "thumbsDown" === r && R.A.logEvent(F.M.displayedThumbsDownFeedbackForm, _)
            }, [P]);
            var W = w.length - 2
              , $ = L.length - 1
              , X = L[L.length - 1]
              , K = (0,
            V.useMemo)(function() {
                return X && eg.Cv.getRequestIdFromConversationTurn(X)
            }, [X])
              , J = (0,
            eo.Yk)(K);
            (0,
            V.useMemo)(function() {
                J || (H.current = Date.now())
            }, [J]);
            var et = C.messages
              , ea = et[et.length - 1]
              , ei = ea.message.id
              , es = ea.nodeId
              , el = x.getLeafFromNode(es)
              , em = X.messages
              , eP = em[em.length - 1]
              , e_ = eP.message.id
              , eD = eP.nodeId
              , eZ = x.getLeafFromNode(eD)
              , eR = "critique" === P ? "report" === r ? p.formatMessage(eC.provideReportModalTitle) : p.formatMessage(eC.provideAdditionalFeedback) : p.formatMessage(eC.pickBestAnswer)
              , eF = (0,
            V.useRef)([])
              , eE = (0,
            V.useRef)("")
              , eA = (0,
            V.useCallback)(function() {
                var e, t = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
                eF.current = (0,
                ec.Z)(t || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }).map(function(e) {
                    return e.replace("feedback-", "")
                }),
                eE.current = (null == t ? void 0 : t["feedback-other"].value) || ""
            }, [l])
              , eL = (0,
            V.useCallback)(function() {
                eA(),
                s({
                    customFeedback: eE.current,
                    tags: eF.current,
                    employeeConsented: y ? k : void 0
                }),
                "thumbsDown" === r && R.A.logEvent(F.M.submitThumbsDownFeedbackForm, _),
                q ? O("compare") : i()
            }, [eA, s, y, k, r, q, _, i])
              , eq = (0,
            V.useCallback)(function(e, t) {
                var n = ee.tQ.getServerThreadId(d);
                if (null != n) {
                    var a = x.getMessageId(ee.tQ.getThreadCurrentLeafId(d));
                    Y.ZP.submitSharedConversationReportFeedback({
                        message_id: a,
                        shared_conversation_id: n,
                        text: e,
                        tags: t
                    }).then(function() {
                        ej.m.success("Moderation logged successfully")
                    }).catch(function() {
                        ej.m.danger("Moderation NOT logged successfully! Please try again")
                    }),
                    i()
                }
            }, [x, d, i])
              , eB = (0,
            V.useCallback)(function() {
                eA(),
                eF.current.push("moderation-reject"),
                eq(eE.current, eF.current)
            }, [eq, eA])
              , ez = (0,
            V.useCallback)(function() {
                eA(),
                eF.current.push("moderation-accept"),
                eq(eE.current, eF.current)
            }, [eq, eA])
              , eU = "moderate" === r ? (0,
            ew.jsxs)(ew.Fragment, {
                children: [(0,
                ew.jsx)(ev.ZP.Button, {
                    title: p.formatMessage(eC.submitRejectModeration),
                    color: "danger",
                    onClick: eB
                }), (0,
                ew.jsx)(ev.ZP.Button, {
                    title: p.formatMessage(eC.submitAcceptModeration),
                    color: "primary",
                    onClick: ez
                })]
            }) : "critique" === P ? (0,
            ew.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [y && "report" !== r && (0,
                ew.jsx)(eb.u, {
                    label: p.formatMessage(eC.employeeConsentExplanation),
                    children: (0,
                    ew.jsx)(eh.Z, {
                        id: "employee-consent",
                        checked: k,
                        onChange: function(e) {
                            return b(e.currentTarget.checked)
                        },
                        label: p.formatMessage(eC.employeeConsent)
                    })
                }), (0,
                ew.jsx)(ev.ZP.Button, {
                    title: p.formatMessage("report" === r ? eC.submitReport : eC.submitFeedback),
                    onClick: eL
                })]
            }) : null
              , eV = "left" === j.current
              , eG = eV ? es : eD
              , eH = eV ? "new" : "original"
              , eW = eV ? "original" : "new"
              , eQ = eV ? p.formatMessage(eC.newAnswer) : p.formatMessage(eC.originalAnswer)
              , e$ = eV ? p.formatMessage(eC.originalAnswer) : p.formatMessage(eC.newAnswer)
              , eX = eV ? p.formatMessage(eC.newAnswerBetter) : p.formatMessage(eC.originalAnswerBetter)
              , eK = eV ? p.formatMessage(eC.originalAnswerBetter) : p.formatMessage(eC.newAnswerBetter)
              , eY = r && "report" !== r && "moderate" !== r
              , eJ = (0,
            V.useCallback)(function(e) {
                var t = "left" === e ? eH : "right" === e ? eW : "same";
                if (R.A.logEvent(F.M.submittedComparisonUIV0, Object.assign({}, _, {
                    choice: t
                })),
                eY) {
                    var n = ee.tQ.getTree(d);
                    n.updateNodeMetadata(es, {
                        inlineComparisonRating: "baseline"
                    }),
                    n.updateNodeMetadata(eD, {
                        inlineComparisonRating: t
                    }),
                    o(ei, e_, r, t, j.current, B.current, z.current, U.current, H.current, eE.current, eF.current)
                }
                ee.tQ.setThreadCurrentLeafId(d, e === j.current ? eZ.id : el.id),
                i()
            }, [eH, eW, _, eY, d, eZ.id, el.id, i, es, eD, o, ei, e_, r])
              , e0 = !J && null != H.current && q
              , e9 = (0,
            V.useCallback)(function() {
                i(),
                "critique" === P ? R.A.logEvent(F.M.skippedThumbsDownFeedbackForm, Object.assign({}, _)) : "compare" === P && R.A.logEvent(F.M.skippedComparisonUIV0, Object.assign({}, _))
            }, [i, _, P])
              , e1 = (0,
            V.useState)([])
              , e2 = e1[0]
              , e5 = e1[1];
            return (0,
            V.useEffect)(function() {
                "moderate" === r && Y.ZP.fetchShareModerationCategories().then(function(e) {
                    var t = e.moderation_categories;
                    e5(Object.keys(t).map(function(e) {
                        return [e, t[e]]
                    }))
                })
            }, []),
            (0,
            ew.jsxs)(ek.Z, {
                isOpen: !0,
                onClose: e9,
                size: "custom",
                className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
                type: "critique" === P ? "thumbsUp" === r ? "success" : "danger" : "success",
                icon: "critique" === P ? "thumbsUp" === r ? G.fmn : G.oLd : void 0,
                title: eR,
                closeButton: (0,
                ew.jsx)(ev.ZP.CloseButton, {
                    onClose: e9
                }),
                children: ["critique" === P && (0,
                ew.jsxs)("form", {
                    ref: l,
                    children: [(0,
                    ew.jsx)(ep.ZP, {
                        id: "feedback-other",
                        placeholder: "thumbsUp" === r ? p.formatMessage(eC.thumbsUpPlaceholder) : "report" === r ? p.formatMessage(eC.reportContentExplanationPlaceholder) : p.formatMessage(eC.thumbsDownPlaceholder),
                        rows: 3,
                        className: "mb-1 mt-4 w-full resize-none rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                    }), "thumbsDown" === r && (0,
                    ew.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        ew.jsx)(eh.Z, {
                            id: "feedback-harmful",
                            label: p.formatMessage(eC.harmfulUnsafe)
                        }), (0,
                        ew.jsx)(eh.Z, {
                            id: "feedback-false",
                            label: p.formatMessage(eC.notTrue)
                        }), (0,
                        ew.jsx)(eh.Z, {
                            id: "feedback-not-helpful",
                            label: p.formatMessage(eC.notHelpful)
                        })]
                    }), null != r && !eY && (0,
                    ew.jsx)(ew.Fragment, {
                        children: (0,
                        ew.jsxs)("div", {
                            className: "mb-4",
                            children: ["report" === r && (0,
                            ew.jsxs)(ew.Fragment, {
                                children: [(0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-dont-like-this",
                                    label: p.formatMessage(eC.dontLikeThis)
                                }), (0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-false",
                                    label: p.formatMessage(eC.notTrue)
                                }), (0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-not-helpful",
                                    label: p.formatMessage(eC.notHelpful)
                                }), (0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-harmful-offensive",
                                    label: p.formatMessage(eC.harmfulOffensive)
                                }), (0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-sexual-abuse",
                                    label: p.formatMessage(eC.sexualAbuse)
                                })]
                            }), "moderate" === r && (0,
                            ew.jsxs)(ew.Fragment, {
                                children: [e2.map(function(e) {
                                    var t = (0,
                                    ed.Z)(e, 2)
                                      , n = t[0]
                                      , a = t[1];
                                    return (0,
                                    ew.jsx)(eh.Z, {
                                        id: "feedback-" + n,
                                        label: a
                                    }, n)
                                }), (0,
                                ew.jsx)(eh.Z, {
                                    id: "feedback-copyright",
                                    label: p.formatMessage(eC.copyrightContent)
                                })]
                            }), (0,
                            ew.jsx)(eh.Z, {
                                id: "feedback-content-other",
                                label: p.formatMessage(eC.reportOtherContent)
                            })]
                        })
                    })]
                }), "compare" === P && L && void 0 !== g && (0,
                ew.jsxs)("div", {
                    className: (0,
                    eu.default)("w-full"),
                    children: [(0,
                    ew.jsx)("p", {
                        className: (0,
                        eu.default)("mb-7 mt-3"),
                        children: (0,
                        ew.jsx)(Q.Z, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? eM(Object(n), !0).forEach(function(t) {
                                    (0,
                                    I.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eM(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, eC.continueWithChosenAnswer))
                    }), (0,
                    ew.jsx)(eS, {
                        className: "rounded-md",
                        children: (0,
                        ew.jsx)(eN, {
                            children: (0,
                            ew.jsx)(ey.Z, {
                                currentModelId: c,
                                turnIndex: W,
                                conversationLeafId: eG,
                                isFinalTurn: !1,
                                clientThreadId: d,
                                onChangeItemInView: u,
                                onChangeRating: ef(),
                                onRequestMoreCompletions: m,
                                onRequestCompletion: f,
                                showInlineEmbeddedDisplay: !0
                            })
                        })
                    }), (0,
                    ew.jsxs)("div", {
                        className: (0,
                        eu.default)(),
                        children: [(0,
                        ew.jsxs)("div", {
                            className: (0,
                            eu.default)("mb-2 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            ew.jsx)("div", {
                                children: (0,
                                ew.jsx)("p", {
                                    className: (0,
                                    eu.default)("font-semibold"),
                                    children: eQ
                                })
                            }), (0,
                            ew.jsx)("div", {
                                children: (0,
                                ew.jsx)("p", {
                                    className: (0,
                                    eu.default)("font-semibold"),
                                    children: e$
                                })
                            })]
                        }), (0,
                        ew.jsxs)("div", {
                            className: (0,
                            eu.default)("mb-5 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            ew.jsxs)(eI, {
                                children: [(0,
                                ew.jsx)(eN, {
                                    children: (0,
                                    ew.jsx)(ey.Z, {
                                        currentModelId: c,
                                        turnIndex: eV ? $ : M,
                                        conversationLeafId: eV ? eD : es,
                                        isFinalTurn: !0,
                                        clientThreadId: d,
                                        onChangeItemInView: u,
                                        onChangeRating: ef(),
                                        onRequestMoreCompletions: m,
                                        onRequestCompletion: f,
                                        showInlineEmbeddedDisplay: !0
                                    })
                                }), (0,
                                ew.jsx)(eO, {
                                    children: (0,
                                    ew.jsx)(ev.ZP.Button, {
                                        disabled: !e0,
                                        title: eX,
                                        onClick: function() {
                                            return eJ("left")
                                        },
                                        color: "dark"
                                    })
                                })]
                            }), (0,
                            ew.jsxs)(eI, {
                                children: [(0,
                                ew.jsx)(eN, {
                                    children: (0,
                                    ew.jsx)(ey.Z, {
                                        currentModelId: c,
                                        turnIndex: eV ? M : $,
                                        conversationLeafId: eG,
                                        isFinalTurn: !0,
                                        clientThreadId: d,
                                        onChangeItemInView: u,
                                        onChangeRating: ef(),
                                        onRequestMoreCompletions: m,
                                        onRequestCompletion: f,
                                        showInlineEmbeddedDisplay: !0
                                    })
                                }), (0,
                                ew.jsx)(eO, {
                                    children: (0,
                                    ew.jsx)(ev.ZP.Button, {
                                        disabled: !e0,
                                        title: eK,
                                        onClick: function() {
                                            return eJ("right")
                                        },
                                        color: "dark"
                                    })
                                })]
                            })]
                        }), (0,
                        ew.jsx)("div", {
                            className: (0,
                            eu.default)("grid w-full"),
                            children: (0,
                            ew.jsxs)("div", {
                                className: (0,
                                eu.default)("mb-2 text-right"),
                                children: [(0,
                                ew.jsx)(ev.ZP.Button, {
                                    disabled: !e0,
                                    title: p.formatMessage(eC.neitherAnswerBetter),
                                    color: "primary",
                                    onClick: function() {
                                        return eJ("same")
                                    },
                                    className: (0,
                                    eu.default)("mr-2")
                                }), (0,
                                ew.jsx)(ev.ZP.Button, {
                                    title: p.formatMessage(eC.skipStep),
                                    onClick: function() {
                                        return i()
                                    }
                                })]
                            })
                        })]
                    })]
                }), (0,
                ew.jsx)(ev.ZP.Actions, {
                    primaryButton: eU
                })]
            }, "RatingModal-".concat(a))
        }
        var eO = $.Z.div(i || (i = (0,
        T.Z)(["mb-2 mt-auto ml-auto mr-auto"])))
          , eI = $.Z.div(s || (s = (0,
        T.Z)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"])))
          , eS = $.Z.div(o || (o = (0,
        T.Z)(["mb-5 border dark:bg-gray-800 overflow-hidden"])))
          , eN = $.Z.div(l || (l = (0,
        T.Z)([""])))
          , e_ = n(41711)
          , eD = n(61888);
        function eZ(e) {
            var t, n = e.clientThreadId, a = e.currentLeafId, r = e.currentModelId, i = e.onChangeItemInView, s = e.onRequestMoreCompletions, o = e.onChangeRating, l = e.onRequestCompletion, d = e.ratingModalOpen, c = e.ratingModalNodeId, u = e.ratingModalCompletionId, m = e.sharedConversationReportModalNodeId, f = e.setRatingModalOpen, p = e.setSharedConversationReportModalNodeId, x = (0,
            ex.Z)(), g = (0,
            V.useRef)(null), h = (0,
            et.EV)(et.B.SharedConversationModeration), y = (0,
            V.useState)(!1), v = y[0], k = y[1], b = (0,
            V.useCallback)(function(e) {
                var t = e.customFeedback
                  , a = e.tags
                  , i = e.employeeConsented;
                if (d && null != c && "" !== c && (t || a.length > 0 || i)) {
                    var s = ee.tQ.getServerThreadId(n);
                    R.A.logEvent(F.M.reportResult, {
                        id: u,
                        threadId: s,
                        content: t,
                        model: r,
                        rating: d,
                        tags: a
                    }),
                    n && u && Y.ZP.submitMessageFeedback({
                        message_id: u,
                        conversation_id: s,
                        rating: d,
                        text: t,
                        tags: a,
                        employee_consented: i
                    })
                }
            }, [d, c, n, u, r]), j = (0,
            V.useCallback)(function(e) {
                var t = e.customFeedback
                  , a = e.tags;
                if (null != m && "" !== m) {
                    var i = ee.tQ.getServerThreadId(n);
                    R.A.logEvent(F.M.reportResult, {
                        id: u,
                        threadId: i,
                        content: t,
                        model: r,
                        rating: d,
                        tags: a
                    }),
                    Y.ZP.submitSharedConversationReportFeedback({
                        message_id: m,
                        shared_conversation_id: i,
                        text: t,
                        tags: a
                    }),
                    k(!0)
                }
            }, [m, n, u, r, d, k]), w = (0,
            V.useCallback)((t = (0,
            O.Z)(N().mark(function e(t, a, r, i, s, o, l, d, c, u, m) {
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Y.ZP.submitMessageComparisonFeedback({
                                feedback_version: "comparison_feedback_modal:a:1.0",
                                original_message_id: t,
                                new_message_id: a,
                                rating: r,
                                conversation_id: ee.tQ.getServerThreadId(n),
                                text: u,
                                tags: m.map(function(e) {
                                    return e.replace("feedback-", "")
                                }),
                                completion_comparison_rating: i,
                                new_completion_placement: s,
                                feedback_start_time: o,
                                compare_step_start_time: l,
                                new_completion_load_start_time: d,
                                new_completion_load_end_time: c,
                                frontend_submission_time: Date.now(),
                                timezone_offset_min: new Date().getTimezoneOffset()
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, n, a, r, i, s, o, l, d, c, u) {
                return t.apply(this, arguments)
            }
            ), [n]);
            return null != d ? (0,
            ew.jsx)(eP, {
                ratingModalNodeId: c,
                ratingModalOpen: d,
                onCloseRatingModal: function() {
                    return f(void 0)
                },
                onSubmitFeedback: b,
                onHandleChangeFeedbackComparisonRating: w,
                currentModelId: r,
                feedbackTextareaRef: g,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: o,
                onRequestCompletion: l
            }) : null != m ? (0,
            ew.jsx)(eP, {
                ratingModalNodeId: m,
                ratingModalOpen: "report",
                onCloseRatingModal: function() {
                    return p(void 0)
                },
                onSubmitFeedback: j,
                onHandleChangeFeedbackComparisonRating: eD.noop,
                currentModelId: r,
                feedbackTextareaRef: g,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: o,
                onRequestCompletion: l
            }) : v ? (0,
            ew.jsx)(ek.Z, {
                onClose: function() {
                    return k(!1)
                },
                isOpen: !0,
                icon: e_.Z,
                title: x.formatMessage(eR.reportModalThankYouTitle),
                description: x.formatMessage(eR.reportModalThankYouDescription),
                primaryButton: (0,
                ew.jsx)(ev.ZP.Button, {
                    onClick: function() {
                        return k(!1)
                    },
                    title: x.formatMessage(eR.reportModalThankYouDismiss)
                }),
                type: "danger"
            }) : h ? (0,
            ew.jsx)(eP, {
                ratingModalNodeId: a,
                ratingModalOpen: "moderate",
                onCloseRatingModal: function() {
                    return et.vm.closeModal(et.B.SharedConversationModeration)
                },
                onSubmitFeedback: eD.noop,
                onHandleChangeFeedbackComparisonRating: eD.noop,
                currentModelId: r,
                feedbackTextareaRef: g,
                clientThreadId: n,
                onChangeItemInView: i,
                onRequestMoreCompletions: s,
                onChangeRating: o,
                onRequestCompletion: l
            }) : null
        }
        var eR = (0,
        W.vU)({
            reportModalThankYouTitle: {
                id: "thread.modal.reportModalThankYou.title",
                defaultMessage: "Thank you for your report!"
            },
            reportModalThankYouDescription: {
                id: "thread.modal.reportModalThankYou.description",
                defaultMessage: "Thank you for your report."
            },
            reportModalThankYouDismiss: {
                id: "thread.modal.reportModalThankYou.dismissButton",
                defaultMessage: "Close"
            }
        })
          , eF = n(60624)
          , eE = n(61236)
          , eA = n(82473)
          , eL = n(25494)
          , eq = n(14765)
          , eB = n(91559)
          , ez = n(83649)
          , eU = n(63866);
        function eV(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function eG(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? eV(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eV(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function eH(e) {
            var t, n = e.isOpen, a = e.onClose, r = (0,
            V.useCallback)(function() {
                R.A.logEvent(F.M.closeAccountPaymentModal),
                a()
            }, [a]), i = (0,
            eE.a)({
                queryKey: ["referralInvites"],
                queryFn: function() {
                    return Y.ZP.getEligibleReferralInvites()
                },
                enabled: n
            }), s = i.data, o = i.isLoading, l = i.isSuccess, d = null !== (t = null == s ? void 0 : s.invites_remaining) && void 0 !== t ? t : 0, c = l ? s.invite_codes : [];
            return ((0,
            V.useEffect)(function() {
                n && (eq.m9.logEvent("chatgpt_referral_invite_modal_opened"),
                R.A.logEvent(F.M.chatgptReferralInviteModalOpened))
            }, [n]),
            l) ? (0,
            ew.jsxs)(ez.x, {
                isOpen: n,
                onClose: a,
                children: [(0,
                ew.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    ew.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: (0,
                        ew.jsx)(Q.Z, eG(eG({}, eX.modalTitle), {}, {
                            values: {
                                remainingInviteCount: d
                            }
                        }))
                    }), (0,
                    ew.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: r,
                        children: (0,
                        ew.jsx)(G.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                ew.jsx)("div", {
                    className: "px-4 py-4",
                    children: (0,
                    ew.jsx)("div", {
                        className: "relative col-span-1 px-3 md:w-[500px] md:px-0",
                        children: (0,
                        ew.jsxs)("div", {
                            children: [(0,
                            ew.jsx)("div", {
                                className: "flex flex-col items-center pb-5 pt-4",
                                children: (0,
                                ew.jsx)(G.E33, {
                                    className: "h-12 w-12 text-gray-800"
                                })
                            }), (0,
                            ew.jsxs)("div", {
                                className: "flex flex-col items-center gap-2 text-center",
                                children: [(0,
                                ew.jsx)("p", {
                                    className: "text-xl font-semibold leading-6",
                                    children: (0,
                                    ew.jsx)(Q.Z, eG({}, eX.inviteDescription))
                                }), (0,
                                ew.jsx)("p", {
                                    className: "max-w-sm text-xs text-gray-500",
                                    children: (0,
                                    ew.jsx)(Q.Z, eG({}, eX.inviteDescriptionFollowUp))
                                })]
                            }), (0,
                            ew.jsxs)("div", {
                                className: "mt-6",
                                children: [(0,
                                ew.jsxs)("div", {
                                    className: "flex flex-row justify-between px-2",
                                    children: [(0,
                                    ew.jsx)("label", {
                                        className: "block text-sm font-medium text-gray-900",
                                        children: (0,
                                        ew.jsx)(Q.Z, eG({}, eX.referralCodeLabel))
                                    }), (0,
                                    ew.jsx)("label", {
                                        className: "block text-sm text-gray-500",
                                        children: (0,
                                        ew.jsx)(Q.Z, eG(eG({}, eX.inviteRemaining), {}, {
                                            values: {
                                                remainingInviteCount: d
                                            }
                                        }))
                                    })]
                                }), o ? (0,
                                ew.jsx)("div", {
                                    className: "h-40 py-2",
                                    children: (0,
                                    ew.jsx)(eU.Z, {
                                        className: "h-4 w-4"
                                    })
                                }) : null, (null == c ? void 0 : c.length) > 0 && (0,
                                ew.jsx)(eQ, {
                                    referralCodes: c
                                })]
                            })]
                        })
                    })
                })]
            }) : null
        }
        var eW = function(e) {
            return "".concat(window.location.host, "/invite/").concat(e)
        }
          , eQ = function(e) {
            var t = e.referralCodes
              , n = (0,
            V.useRef)(null);
            return (0,
            ew.jsx)("div", {
                className: "mt-2 flow-root",
                children: (0,
                ew.jsx)("div", {
                    className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                    children: (0,
                    ew.jsx)("div", {
                        className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                        children: (0,
                        ew.jsx)("div", {
                            ref: n,
                            className: (0,
                            eu.default)("shadow ring-1 ring-black ring-opacity-5 sm:rounded-md", {
                                "h-44 overflow-y-scroll": t.length > 4,
                                "overflow-hidden": t.length <= 4
                            }),
                            children: (0,
                            ew.jsx)("table", {
                                className: "min-w-full",
                                children: (0,
                                ew.jsx)("tbody", {
                                    className: "divide-y divide-gray-200 bg-white dark:divide-gray-900 dark:bg-gray-800",
                                    children: t.sort(function(e, t) {
                                        var n = {
                                            activated: 0,
                                            created: 1,
                                            claimed: 2,
                                            subscription_granted: 3
                                        }
                                          , a = e.status
                                          , r = t.status;
                                        return n[a] < n[r] ? -1 : n[a] > n[r] ? 1 : e.updated_at > t.updated_at ? -1 : e.updated_at < t.updated_at ? 1 : 0
                                    }).map(function(e) {
                                        return (0,
                                        ew.jsx)(e$, {
                                            tableRef: n,
                                            referralCode: e
                                        }, e.id)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
          , e$ = function(e) {
            var t, n, a = e.referralCode, r = e.tableRef, i = (0,
            ex.Z)(), s = (0,
            V.useRef)(null), o = (0,
            V.useState)(!1), l = o[0], d = o[1], c = (0,
            V.useState)(!1), u = c[0], m = c[1], f = (0,
            eA.NL)(), p = (0,
            eL.D)({
                mutationFn: function() {
                    return Y.ZP.postActivateReferralInvite(a.id)
                },
                onSettled: function() {
                    f.invalidateQueries({
                        queryKey: ["referralInvites"]
                    }),
                    d(!1)
                },
                onError: (t = (0,
                O.Z)(N().mark(function e() {
                    return N().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                ej.m.danger(i.formatMessage(eX.activateReferralError));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function() {
                    return t.apply(this, arguments)
                }
                ),
                onSuccess: function(e) {
                    d(!1);
                    var t, n, a = e.invite_code;
                    navigator.clipboard.writeText(eW(null != a ? a : "")),
                    m(!0),
                    null === (t = s.current) || void 0 === t || t.select(),
                    ej.m.success(i.formatMessage(eX.copiedReferralToastMessage, {
                        referralInviteCode: a
                    }), {
                        duration: 3,
                        hasCloseButton: !0
                    }),
                    null === (n = r.current) || void 0 === n || n.scrollTo(0, 0)
                }
            }).mutateAsync, x = (n = (0,
            O.Z)(N().mark(function e(t) {
                var n;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            e.t0 = t.status,
                            e.next = "created" === e.t0 ? 3 : "activated" === e.t0 ? 9 : "claimed" === e.t0 ? 15 : "subscription_granted" === e.t0 ? 16 : 17;
                            break;
                        case 3:
                            return d(!0),
                            eq.m9.logEvent("chatgpt_referral_invite_link_activated"),
                            R.A.logEvent(F.M.chatgptReferralInviteLinkActivated),
                            e.next = 8,
                            p();
                        case 8:
                        case 15:
                        case 16:
                        case 17:
                            return e.abrupt("break", 18);
                        case 9:
                            return eq.m9.logEvent("chatgpt_referral_invite_link_copied"),
                            R.A.logEvent(F.M.chatgptReferralInviteLinkCopied),
                            navigator.clipboard.writeText(eW(null !== (n = t.code_token) && void 0 !== n ? n : "")),
                            m(!0),
                            ej.m.success(i.formatMessage(eX.copiedReferralToastMessage, {
                                referralInviteCode: t.code_token
                            }), {
                                duration: 3,
                                hasCloseButton: !0
                            }),
                            e.abrupt("break", 18);
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e) {
                return n.apply(this, arguments)
            }
            ), g = "".concat(window.location.host, "/invite/");
            return (0,
            ew.jsxs)("tr", {
                children: [(0,
                ew.jsxs)("td", {
                    className: "relative w-full whitespace-nowrap py-1.5 pl-1 pr-3 text-sm text-gray-900 dark:text-white",
                    children: [(0,
                    ew.jsx)("input", {
                        ref: s,
                        name: "referral-code",
                        className: "block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 shadow-none ring-0 ring-inset placeholder:text-gray-600 focus:ring-0 focus:ring-inset dark:text-white placeholder:dark:text-white sm:text-sm",
                        disabled: "activated" != a.status,
                        value: "created" == a.status || "subscription_granted" == a.status ? "" : eW(a.code_token)
                    }), (0,
                    ew.jsxs)("span", {
                        className: "absolute top-3 flex items-center pl-2 text-gray-700  dark:text-white",
                        children: ["created" == a.status && (0,
                        ew.jsxs)("span", {
                            children: [g, (0,
                            ew.jsx)("span", {
                                className: "select-none text-gray-400  dark:text-gray-300",
                                children: "•••••••"
                            })]
                        }), "subscription_granted" == a.status && (0,
                        ew.jsx)("span", {
                            className: "select-none line-through opacity-25",
                            children: eW(a.code_token)
                        })]
                    })]
                }), (0,
                ew.jsx)("td", {
                    className: "relative whitespace-nowrap py-1.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2",
                    children: (0,
                    ew.jsx)(eB.z, {
                        disabled: l || "claimed" == a.status || "subscription_granted" == a.status,
                        loading: l,
                        as: "button",
                        type: "button",
                        onClick: function() {
                            return x(a)
                        },
                        color: "created" == a.status ? "primary" : "light",
                        className: (0,
                        eu.default)("w-20 rounded-sm py-1 text-sm", {
                            "bg-brand-green/20 text-green-700 hover:bg-brand-green/30 dark:bg-brand-green/50 dark:text-green-100 dark:hover:bg-brand-green/40": "activated" == a.status,
                            "!bg-gray-200 ": "subscription_granted" == a.status
                        }),
                        children: (0,
                        ew.jsx)("span", {
                            className: "flex flex-row items-center",
                            children: "created" == a.status ? (0,
                            ew.jsx)(Q.Z, eG({}, eX.referralActivate)) : "activated" == a.status ? u ? (0,
                            ew.jsx)(Q.Z, eG({}, eX.referralCopied)) : (0,
                            ew.jsx)(Q.Z, eG({}, eX.referralCopy)) : "claimed" == a.status ? (0,
                            ew.jsx)(Q.Z, eG({}, eX.referralClaimed)) : "subscription_granted" == a.status ? (0,
                            ew.jsx)(Q.Z, eG({}, eX.referralClaimed)) : null
                        })
                    })
                })]
            })
        }
          , eX = (0,
        W.vU)({
            modalTitle: {
                id: "InviteReferralModal.modalTitle",
                defaultMessage: "Refer a friend"
            },
            inviteFormTitle: {
                id: "InviteReferralModal.inviteFormTitle",
                defaultMessage: "Emails"
            },
            invitePlaceholder: {
                id: "InviteReferralModal.invitePlaceholder",
                defaultMessage: "friend@openai.com, friend2@openai.com..."
            },
            referralActivate: {
                id: "InviteReferralModal.referralActivate",
                defaultMessage: "Copy"
            },
            referralCopy: {
                id: "InviteReferralModal.referralCopy",
                defaultMessage: "Copy"
            },
            referralCopied: {
                id: "InviteReferralModal.referralCopied",
                defaultMessage: "Copied"
            },
            referralClaimed: {
                id: "InviteReferralModal.referralClaimed",
                defaultMessage: "Claimed"
            },
            inviteDescription: {
                id: "InviteReferralModal.inviteDescription",
                defaultMessage: "Share ChatGPT Plus with your friends!"
            },
            inviteDescriptionFollowUp: {
                id: "InviteReferralModal.inviteDescriptionFollowUp",
                defaultMessage: "Activate and copy the referral links below to share ChatGPT Plus with your friends, giving them access to a free trial!"
            },
            inviteRemaining: {
                id: "InviteReferralModal.inviteRemaining",
                defaultMessage: "{remainingInviteCount} available"
            },
            usersInvited: {
                id: "InviteReferralModal.usersInvited",
                defaultMessage: "<showcaseValue>{usersInviteCount}</showcaseValue><description>users invited</description>"
            },
            referralCodeLabel: {
                id: "InviteReferralModal.referralCodeLabel",
                defaultMessage: "Links"
            },
            sendInviteCta: {
                id: "InviteReferralModal.sendInviteCta",
                defaultMessage: "Send invites"
            },
            clickToActivateString: {
                id: "InviteReferralModal.clickToActivateString",
                defaultMessage: "chat.openai.com/invite/<codeStyle>•••••••</codeStyle>"
            },
            clickToCopyString: {
                id: "InviteReferralModal.clickToCopyString",
                defaultMessage: "Click to copy"
            },
            copiedReferralToastMessage: {
                id: "InviteReferralModal.copiedReferralToastMessage",
                defaultMessage: "Your referral link {referralInviteCode} has been copied to your clipboard. Share it with your friends!"
            },
            activateReferralError: {
                id: "InviteReferralModal.activateReferralError",
                defaultMessage: "Failed to accept referral invite. Please try again."
            }
        })
          , eK = n(22364)
          , eY = n(80555)
          , eJ = n(64851)
          , e0 = n(37994);
        function e9(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function e1() {
            var e, t, n, a, r, i, s = (0,
            ex.Z)(), o = (t = (e = (0,
            eY.S)()).isLoggedInWithMfa,
            n = e.isUsernamePassword,
            a = e.setupMfa,
            i = (r = (0,
            e0.p0)()).filter(function(e) {
                return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
            }),
            (t || !n) && (i = []),
            {
                disablePluginsThatWeCantUse: function() {
                    var e = r.filter(function(e) {
                        return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                    });
                    (0,
                    e0.dT)(e.map(function(e) {
                        return e.id
                    }))
                },
                pluginsWeCantUse: i,
                setupMfa: a
            }), l = o.disablePluginsThatWeCantUse, d = o.pluginsWeCantUse, c = o.setupMfa, u = (0,
            V.useCallback)(function() {
                l()
            }, [l]);
            return 0 === d.length ? null : (0,
            ew.jsx)(ek.Z, {
                isOpen: !0,
                onClose: u,
                title: (0,
                ew.jsx)(Q.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? e9(Object(n), !0).forEach(function(t) {
                            (0,
                            I.Z)(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e9(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, e2.title)),
                primaryButton: (0,
                ew.jsx)(ev.ZP.Button, {
                    onClick: c,
                    title: s.formatMessage(e2.primaryButtonTitle),
                    color: "primary"
                }),
                secondaryButton: (0,
                ew.jsx)(ev.ZP.Button, {
                    onClick: l,
                    title: s.formatMessage(e2.secondaryButtonTitle)
                }),
                type: "danger",
                children: (0,
                ew.jsx)("div", {
                    className: "flex flex-col gap-2 py-4",
                    children: d.map(function(e) {
                        return (0,
                        ew.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            ew.jsx)(eJ.Z, {
                                plugin: e
                            })
                        }, e.id)
                    })
                })
            })
        }
        var e2 = (0,
        W.vU)({
            title: {
                id: "RequireMfaForAuthPluginsModal.title",
                defaultMessage: "Some of your plugins require two-factor authentication."
            },
            primaryButtonTitle: {
                id: "RequireMfaForAuthPluginsModal.primaryButtonTitle",
                defaultMessage: "Setup two-factor authentication"
            },
            secondaryButtonTitle: {
                id: "RequireMfaForAuthPluginsModal.secondaryButtonTitle",
                defaultMessage: "Turn off the plugins"
            }
        });
        function e5(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function e3(e) {
            var t = e.isOpen
              , n = e.onClose
              , a = (0,
            V.useCallback)(function() {
                R.A.logEvent(F.M.closeAccountPaymentModal),
                n()
            }, [n]);
            return (0,
            ew.jsx)(ev.ZP.Root, {
                isOpen: t,
                onClose: a,
                shouldIgnoreClickOutside: !0,
                children: (0,
                ew.jsx)(ev.ZP.Overlay, {
                    children: (0,
                    ew.jsx)(ev.ZP.Content, {
                        className: "focus-none !bg-transparent !shadow-none outline-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                        children: (0,
                        ew.jsx)("div", {
                            className: "focus-none flex h-full flex-col items-center justify-start outline-none",
                            children: (0,
                            ew.jsx)("div", {
                                className: "relative w-full",
                                children: (0,
                                ew.jsxs)("div", {
                                    className: "flex grow flex-col items-start justify-center overflow-hidden rounded-md border bg-white shadow-md dark:border-gray-700 dark:bg-gray-900",
                                    children: [(0,
                                    ew.jsxs)("div", {
                                        className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                                        children: [(0,
                                        ew.jsx)("span", {
                                            className: "text-base font-semibold sm:text-base",
                                            children: (0,
                                            ew.jsx)(Q.Z, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? e5(Object(n), !0).forEach(function(t) {
                                                        (0,
                                                        I.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e5(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({}, e6.modalTitle))
                                        }), (0,
                                        ew.jsx)("button", {
                                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                                            onClick: a,
                                            children: (0,
                                            ew.jsx)(G.q5L, {
                                                className: "h-6 w-6"
                                            })
                                        })]
                                    }), (0,
                                    ew.jsx)("div", {
                                        className: "grid w-full",
                                        children: (0,
                                        ew.jsx)("div", {
                                            className: "relative w-full ",
                                            children: (0,
                                            ew.jsx)("div", {
                                                id: "embedded-checkout-modal"
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        }
        var e6 = (0,
        W.vU)({
            modalTitle: {
                id: "EmbeddedPaymentModal.modalTitle",
                defaultMessage: "Your plan"
            }
        })
          , e4 = n(62442)
          , e7 = n(26003)
          , e8 = n(6013)
          , te = n(37178)
          , tt = n(43477)
          , tn = n(78103)
          , ta = (0,
        V.createContext)()
          , tr = function(e) {
            return (0,
            tn.oR)((0,
            V.useContext)(ta), e)
        }
          , ti = n(88654)
          , ts = n(65100);
        function to(e) {
            return e.some(function(e) {
                return e.messages.some(function(e) {
                    var t, n, a, r;
                    return (null == (a = null === (t = e.message.metadata) || void 0 === t ? void 0 : t.aggregate_result) ? void 0 : null === (n = a.messages) || void 0 === n ? void 0 : n.some(ts.O1)) || ("parts"in (r = e.message.content) ? r.parts.join("") : "").includes("sandbox:")
                })
            })
        }
        var tl = function(e) {
            var t = e.children
              , n = e.color
              , a = void 0 === n ? "yellow" : n
              , r = e.icon;
            return (0,
            ew.jsxs)("div", {
                className: (0,
                eu.default)("mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0", {
                    "bg-yellow-300 text-[#756B5C]": "yellow" === a,
                    "bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100": "gray" === a
                }),
                children: [null != r && (0,
                ew.jsx)(r, {
                    className: "icon-sm mt-1 flex-shrink-0"
                }), t]
            })
        }
          , td = n(7144)
          , tc = n(40803)
          , tu = n(90439)
          , tm = n(5063);
        function tf(e) {
            var t = e.clientThreadId
              , n = (0,
            ee.qA)(t)
              , a = (0,
            ee.je)(t)
              , r = (0,
            ee.qN)(function(e) {
                return ee.iN.getThreadCreateTime(t, e)
            })
              , i = (0,
            ee.oq)(t)
              , s = (0,
            ee.JI)(t, i)
              , o = (0,
            V.useMemo)(function() {
                return to(s)
            }, [s])
              , l = (0,
            ee.aS)(t)
              , d = (0,
            ee.eY)(t);
            return (0,
            ew.jsxs)("div", {
                className: "border-b border-gray-100 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
                children: [(0,
                ew.jsx)("h1", {
                    className: "text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
                    children: n
                }), (null != a || null != r) && (0,
                ew.jsxs)("div", {
                    className: "pt-3 text-base text-gray-400 sm:pt-4",
                    children: [null != a && (0,
                    ew.jsx)("span", {
                        children: a
                    }), null != a && null != r && (0,
                    ew.jsx)("span", {
                        className: "px-2",
                        children: "•"
                    }), null != r && (0,
                    ew.jsx)(W.Ji, {
                        value: r,
                        month: "long",
                        year: "numeric",
                        day: "numeric"
                    })]
                }), (0,
                ew.jsx)(tp, {
                    shouldShowCodeInterpreterDisclaimer: o,
                    shouldShowPersonalizedDataDisclaimer: l || d
                })]
            })
        }
        var tp = function(e) {
            var t = e.shouldShowCodeInterpreterDisclaimer
              , n = e.shouldShowPersonalizedDataDisclaimer;
            return (0,
            ew.jsxs)(ew.Fragment, {
                children: [t && (0,
                ew.jsx)("div", {
                    className: "mt-4",
                    children: (0,
                    ew.jsx)(tl, {
                        icon: G.H33,
                        color: "gray",
                        children: (0,
                        ew.jsx)(Q.Z, {
                            id: "sharedConversation.advancedDataAnalysisSupportDisclaimer",
                            defaultMessage: "This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."
                        })
                    })
                }), n && (0,
                ew.jsx)("div", {
                    className: "mt-4",
                    children: (0,
                    ew.jsx)(tl, {
                        icon: G.H33,
                        color: "gray",
                        children: (0,
                        ew.jsx)(Q.Z, {
                            id: "sharedConversation.personalizedDataDisclaimer",
                            defaultMessage: "This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."
                        })
                    })
                })]
            })
        }
          , tx = n(70737)
          , tg = n(97296)
          , th = n(89678)
          , ty = n.n(th)
          , tv = n(11296)
          , tk = n.n(tv)
          , tb = n(22584)
          , tj = n(95552)
          , tw = n.n(tj)
          , tM = n(41543)
          , tC = [1, 2, 3, 4];
        function tT(e) {
            var t = e.clientThreadId
              , n = e.conversationLeafId
              , a = (0,
            en.ec)(en.F_.isBusinessWorkspace)
              , r = (0,
            ee.XK)(t)
              , i = (0,
            tM.WA)(t)
              , s = (0,
            V.useMemo)(function() {
                if (!r)
                    return -1;
                var e = tw()(r);
                return e() > .5 ? -1 : tC[Math.floor(e() * tC.length)]
            }, [r])
              , o = (0,
            ee.JI)(t, n)
              , l = o[o.length - 1]
              , d = (0,
            V.useMemo)(function() {
                return eg.Cv.getRequestIdFromConversationTurn(l)
            }, [l])
              , c = (0,
            eo.Yk)(d)
              , u = (0,
            V.useState)(null)
              , m = u[0]
              , f = u[1]
              , p = (0,
            V.useState)(!1)
              , x = p[0]
              , g = p[1]
              , h = (0,
            V.useState)(!1)
              , y = h[0]
              , v = h[1]
              , k = (0,
            V.useState)(!1)
              , b = k[0]
              , j = k[1]
              , w = (0,
            V.useMemo)(function() {
                return ty()(function(e, t) {
                    r && e && Y.ZP.submitConversationRating({
                        conversation_id: r,
                        message_id: e,
                        rating: t,
                        shown_at_assistant_turn: s
                    }),
                    g(!0),
                    setTimeout(function() {
                        v(!0)
                    }, 1500)
                }, 2e3)
            }, [r, s])
              , M = function(e) {
                var t, n, a = null === (t = tk()(o)) || void 0 === t ? void 0 : null === (n = t.messages[0]) || void 0 === n ? void 0 : n.message.id;
                f(e),
                w(a, e)
            }
              , C = o.filter(function(e) {
                return e.role === K.uU.Assistant
            }).length
              , T = (null == l ? void 0 : l.role) === K.uU.Assistant;
            return C !== s || c || !T || a || i.kind !== K.OL.PrimaryAssistant || b ? null : (0,
            ew.jsxs)("div", {
                className: "mx-auto",
                children: [(0,
                ew.jsx)(tx.M, {
                    children: x && !y && (0,
                    ew.jsx)(tg.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .2
                        },
                        children: (0,
                        ew.jsx)(tO, {
                            $padded: !0,
                            children: (0,
                            ew.jsx)("span", {
                                className: "text-sm text-token-text-tertiary",
                                children: (0,
                                ew.jsx)(Q.Z, {
                                    id: "rating.thanks",
                                    defaultMessage: "Thanks for your feedback!"
                                })
                            })
                        })
                    }, "submitted")
                }), !x && (0,
                ew.jsx)(tg.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .1
                    },
                    children: (0,
                    ew.jsxs)(tO, {
                        $padded: !1,
                        children: [(0,
                        ew.jsxs)("div", {
                            className: "flex items-center justify-center gap-4 px-4 py-3 text-sm text-token-text-tertiary",
                            children: [(0,
                            ew.jsx)(Q.Z, {
                                id: "rating.instructions",
                                defaultMessage: "Is this conversation helpful so far?"
                            }), (0,
                            ew.jsxs)("div", {
                                className: "flex items-center gap-5",
                                children: [(0,
                                ew.jsx)(tP, {
                                    $selected: "thumbsUp" === m,
                                    onClick: function() {
                                        return M("thumbsUp")
                                    },
                                    children: (0,
                                    ew.jsx)(tm.ib, {
                                        className: "icon-md"
                                    })
                                }), (0,
                                ew.jsx)(tP, {
                                    $selected: "thumbsDown" === m,
                                    onClick: function() {
                                        return M("thumbsDown")
                                    },
                                    children: (0,
                                    ew.jsx)(tm.Q7, {
                                        className: "icon-md"
                                    })
                                })]
                            })]
                        }), (0,
                        ew.jsx)("div", {
                            className: "w-px flex-1 self-stretch bg-gray-100 dark:bg-gray-700"
                        }), (0,
                        ew.jsx)(tP, {
                            className: "p-3",
                            $selected: !1,
                            onClick: function() {
                                return j(!0)
                            },
                            children: (0,
                            ew.jsx)(tb.bjh, {
                                className: "icon-sm"
                            })
                        })]
                    })
                }, "rating")]
            })
        }
        var tP = $.Z.button(d || (d = (0,
        T.Z)(["\n  ", "\n  dark:hover:text-gray-200 hover:text-gray-950\n"])), function(e) {
            return e.$selected ? "text-gray-950 dark:text-gray-100" : "text-gray-400 dark:text-gray-400"
        })
          , tO = $.Z.div(c || (c = (0,
        T.Z)(["mx-auto mt-2 inline-flex rounded-xl border border-gray-100 dark:border-gray-700\n", "\n"])), function(e) {
            return e.$padded && "py-3 px-4"
        })
          , tI = n(2306)
          , tS = n(46514)
          , tN = n(60177);
        function t_(e) {
            var t = e.onChangeItemInView
              , n = e.onRequestMoreCompletions
              , a = e.onChangeRating
              , r = e.onRequestCompletion
              , i = e.clientThreadId
              , s = e.conversationLeafId
              , o = e.currentThreadModel
              , l = e.inlineEmbeddedDisplay
              , d = e.initiallyHighlightedMessageId
              , c = e.hideHeader
              , u = null !== (0,
            V.useContext)(ea.gB)
              , m = (0,
            tc.useScrollToBottom)()
              , f = (0,
            tc.useSticky)()
              , p = (0,
            ed.Z)(f, 1)[0]
              , x = (0,
            tu.Q)().mode
              , g = (0,
            td.t)()
              , h = (0,
            tS.Xy)(o, i)
              , y = (0,
            tN.wZ)(h.id)
              , v = "magic" === x ? "var(--brand-purple)" : y
              , k = (0,
            ee.U0)(i, s)
              , b = (0,
            ec.Z)(Array(k).keys()).map(function(e) {
                return (0,
                ew.jsx)(ey.Z, {
                    isFinalTurn: e === k - 1,
                    turnIndex: e,
                    clientThreadId: i,
                    conversationLeafId: s,
                    onChangeItemInView: t,
                    onChangeRating: a,
                    onRequestMoreCompletions: n,
                    onRequestCompletion: r,
                    currentModelId: h.id,
                    showInlineEmbeddedDisplay: l,
                    initiallyHighlightedMessageId: d,
                    avatarColor: v
                }, e)
            });
            return (0,
            ew.jsxs)("div", {
                className: (0,
                eu.default)("flex flex-col pb-9 text-sm", u && "pt-2"),
                children: [!c && (u || (null == g ? void 0 : g.data)) && !l && (0,
                ew.jsx)(tI.B, {
                    clientThreadId: i
                }), u && !l && (0,
                ew.jsx)("div", {
                    className: "mx-auto w-full p-4 md:max-w-2xl md:px-0 lg:max-w-[38rem] xl:max-w-3xl",
                    children: (0,
                    ew.jsx)(tf, {
                        clientThreadId: i
                    })
                }), b, (0,
                ew.jsx)(tT, {
                    clientThreadId: i,
                    conversationLeafId: s
                }), !p && !l && (0,
                ew.jsx)(tD, {
                    onClick: m,
                    children: (0,
                    ew.jsx)(tm.Hg, {
                        className: "m-1 text-black dark:text-white"
                    })
                })]
            })
        }
        var tD = $.Z.button(u || (u = (0,
        T.Z)(["cursor-pointer absolute z-10 rounded-full bg-clip-padding border text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 right-1/2 border-black/10 bg-token-surface-primary bottom-5"])));
        function tZ(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function tR(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tZ(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tZ(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var tF = (0,
        W.vU)({
            sharingModalTitle: {
                id: "thread.sharingModal.title",
                defaultMessage: "Share link to Chat"
            },
            sharingModalDescription: {
                id: "sharingModal.description",
                defaultMessage: "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat."
            },
            sharingModalBizDescription: {
                id: "sharingModal.bizDescription.1",
                defaultMessage: "Only members of your workspace with the URL will see the latest messages sent in this conversation. Files you attach to the conversation will not be shared, but any file contents referenced in messages will continue to be visible."
            },
            existingShareDescription: {
                id: "sharingModal.exisitingDescription",
                defaultMessage: "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link."
            },
            sharingModalMoreInfo: {
                id: "thread.sharingModal.moreInfo",
                defaultMessage: "More Info"
            },
            moderationBlocked: {
                id: "sharingModal.moderationBlocked",
                defaultMessage: "This shared link has been disabled by moderation."
            },
            confirmCloseWithChanges: {
                id: "thread.sharingModal.confirmCloseWithChanges",
                defaultMessage: "You have unsaved changes. Do you want to continue?"
            },
            confirmDeleteLink: {
                id: "sharingModal.confirmDeleteLink",
                defaultMessage: "Are you sure you want to delete the share link?"
            },
            advancedDataAnalysisSupportDisclaimer: {
                id: "sharingModal.advancedDataAnalysisSupportDisclaimer",
                defaultMessage: "Recipients won’t be able to view Advanced Data Analysis images or download files."
            },
            personalizedDataDisclaimer: {
                id: "sharingModal.personalizedDataDisclaimer",
                defaultMessage: "Any personalized data not present in the conversation won’t be shared with viewers (ex: custom instructions)."
            },
            copied: {
                id: "thread.sharingModal.copied",
                defaultMessage: "Copied!"
            },
            copying: {
                id: "thread.sharingModal.copying",
                defaultMessage: "Copying..."
            },
            updateAndCopyLink: {
                id: "thread.sharingModal.updateAndCopyLink",
                defaultMessage: "Update and Copy Link"
            },
            shareYourName: {
                id: "sharingModal.shareYourName",
                defaultMessage: "Share your name"
            },
            shareAnonymously: {
                id: "sharingModal.shareAnonymously",
                defaultMessage: "Share anonymously"
            },
            deleteLink: {
                id: "sharingModal.deleteLink",
                defaultMessage: "Delete Link"
            },
            failedToCopyLink: {
                id: "thread.sharingModal.failedToCopyLink",
                defaultMessage: "Failed to copy link to clipboard"
            },
            copyLink: {
                id: "thread.sharingModal.copyLink",
                defaultMessage: "Copy Link"
            },
            copiedSharedConversationURL: {
                id: "thread.sharingModal.copiedSharedConversationURL",
                defaultMessage: "Copied shared conversation URL to clipboard!"
            },
            failedToDeleteSharedLink: {
                id: "thread.sharingModal.failedToDeleteSharedLink",
                defaultMessage: "Failed to delete shared link"
            }
        });
        function tE(e) {
            var t = e.serverThreadId
              , n = (0,
            ee.oq)(t)
              , a = (0,
            V.useState)(function() {
                return (0,
                tt.Z)(function(e, t) {
                    return {
                        title: void 0,
                        highlightedMessageId: void 0,
                        initiallyHighlightedMessageId: void 0,
                        currentNodeId: void 0,
                        shareLinkId: void 0,
                        shareLinkUrl: void 0,
                        isPublic: !1,
                        isDeleted: !1,
                        isAnonymous: !0,
                        linkAlreadyExisted: !1,
                        linkError: void 0,
                        moderationState: void 0
                    }
                })
            })[0]
              , r = !(0,
            eo.B$)() && "root" !== n
              , i = (0,
            V.useRef)(!1);
            return (0,
            V.useEffect)(function() {
                if (r && !i.current) {
                    i.current = !0;
                    var e = ee.tQ.getThreadCurrentLeafId(t)
                      , n = ee.tQ.getTree(t).getMessageId(e);
                    Y.ZP.createShareLink({
                        current_node_id: n,
                        conversation_id: t,
                        is_anonymous: !0
                    }).then(function(e) {
                        a.setState({
                            shareLinkId: e.share_id,
                            shareLinkUrl: e.share_url,
                            isPublic: e.is_public,
                            isDeleted: !e.is_visible,
                            title: e.title,
                            highlightedMessageId: e.highlighted_message_id,
                            initiallyHighlightedMessageId: e.highlighted_message_id,
                            currentNodeId: e.current_node_id,
                            linkAlreadyExisted: e.already_exists,
                            isAnonymous: e.is_anonymous,
                            moderationState: e.moderation_state
                        })
                    }).catch(function(e) {
                        var t = (0,
                        ti.Ot)(e);
                        t ? a.setState({
                            linkError: t
                        }) : (ej.m.danger("Failed to copy link to clipboard - could not create link"),
                        et.vm.closeSharingModal())
                    })
                }
            }, [r]),
            (0,
            ew.jsx)(ta.Provider, {
                value: a,
                children: (0,
                ew.jsx)(tL, tR({}, e))
            })
        }
        function tA(e) {
            return !0 === e.has_been_auto_blocked || !0 === e.has_been_auto_moderated || !0 === e.has_been_blocked
        }
        function tL(e) {
            var t, n, a, r, i = e.serverThreadId, s = e.currentThreadModel, o = (0,
            ex.Z)(), l = (0,
            V.useRef)(null), d = (0,
            V.useState)(!1), c = d[0], u = d[1], m = (0,
            V.useState)(!1), f = m[0], p = m[1], x = (0,
            V.useState)(!1), g = x[0], h = x[1], y = (0,
            V.useContext)(ta), v = tr(function(e) {
                return e.title
            }), k = tr(function(e) {
                return e.shareLinkId
            }), b = tr(function(e) {
                return e.shareLinkUrl
            }), j = tr(function(e) {
                return e.isAnonymous
            }), w = tr(function(e) {
                return e.initiallyHighlightedMessageId
            }), M = tr(function(e) {
                return e.currentNodeId
            }), C = tr(function(e) {
                return e.isPublic
            }), T = tr(function(e) {
                return e.linkAlreadyExisted
            }) && C, P = tr(function(e) {
                return e.linkError
            }), I = tr(function(e) {
                return e.moderationState
            }), S = null != I && tA(I), _ = (0,
            en.ec)(en.F_.isBusinessWorkspace), D = (0,
            ee.oq)(i), Z = (0,
            V.useRef)(), R = (0,
            V.useRef)();
            (0,
            V.useEffect)(function() {
                T && (Z.current = v,
                R.current = j)
            }, [T]);
            var F = (0,
            en.aF)()
              , E = (0,
            ee.JI)(i, null != M ? M : D)
              , A = (0,
            V.useMemo)(function() {
                return to(E)
            }, [E])
              , L = (0,
            ee.aS)(i)
              , q = (0,
            ee.eY)(i)
              , B = (t = (0,
            O.Z)(N().mark(function e(t, n) {
                var a, r, i, s, l, d, c;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            p(!0),
                            r = (a = y.getState()).highlightedMessageId,
                            i = a.title,
                            s = a.isDeleted,
                            l = a.isAnonymous,
                            e.prev = 2,
                            (0,
                            te.S)(n),
                            e.next = 11;
                            break;
                        case 6:
                            return e.prev = 6,
                            e.t0 = e.catch(2),
                            ej.m.warning(o.formatMessage(tF.failedToCopyLink)),
                            p(!1),
                            e.abrupt("return");
                        case 11:
                            return e.prev = 11,
                            e.next = 14,
                            Y.ZP.updateShareLink({
                                share_id: t,
                                highlighted_message_id: r,
                                title: null != i ? i : void 0,
                                is_public: !s,
                                is_visible: !s,
                                is_anonymous: l
                            });
                        case 14:
                            if (!tA(d = e.sent.moderation_state)) {
                                e.next = 19;
                                break
                            }
                            return y.setState({
                                moderationState: d
                            }),
                            e.abrupt("return");
                        case 19:
                            y.setState({
                                isPublic: !0,
                                moderationState: d
                            }),
                            h(!0),
                            setTimeout(function() {
                                et.vm.closeSharingModal(),
                                ej.m.success(o.formatMessage(tF.copiedSharedConversationURL))
                            }, 500),
                            e.next = 28;
                            break;
                        case 24:
                            e.prev = 24,
                            e.t1 = e.catch(11),
                            (c = (0,
                            ti.Ot)(e.t1)) && y.setState({
                                linkError: c
                            });
                        case 28:
                            return e.prev = 28,
                            p(!1),
                            e.finish(28);
                        case 31:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[2, 6], [11, 24, 28, 31]])
            })),
            function(e, n) {
                return t.apply(this, arguments)
            }
            )
              , z = T && (v !== Z.current || j !== R.current);
            function U() {
                (!z || window.confirm(o.formatMessage(tF.confirmCloseWithChanges))) && et.vm.closeSharingModal()
            }
            var $ = (0,
            ew.jsxs)(ev.ZP.Button, {
                onClick: function() {
                    return B(k, b)
                },
                color: "primary",
                disabled: f || g || null == k || null == b || null != P || S,
                children: [g ? (0,
                ew.jsx)(G.LSm, {
                    className: "icon-sm"
                }) : f ? (0,
                ew.jsx)(eU.Z, {}) : (0,
                ew.jsx)(G.XKb, {
                    className: "icon-sm"
                }), g ? (0,
                ew.jsx)(Q.Z, tR({}, tF.copied)) : f ? (0,
                ew.jsx)(Q.Z, tR({}, tF.copying)) : z ? (0,
                ew.jsx)(Q.Z, tR({}, tF.updateAndCopyLink)) : (0,
                ew.jsx)(Q.Z, tR({}, tF.copyLink))]
            })
              , X = (0,
            V.useCallback)(function(e) {
                var t;
                null == e || e.preventDefault(),
                y.setState({
                    title: null === (t = l.current) || void 0 === t ? void 0 : t.value
                }),
                u(!1)
            }, [y])
              , K = (0,
            V.useCallback)(function(e) {
                "Enter" === e.key && X()
            }, [X])
              , J = (n = (0,
            O.Z)(N().mark(function e() {
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Y.ZP.deleteShareLink({
                                share_id: y.getState().shareLinkId
                            }).catch(function(e) {
                                ej.m.danger(o.formatMessage(tF.failedToDeleteSharedLink))
                            }).then(function() {
                                et.vm.closeSharingModal()
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function() {
                return n.apply(this, arguments)
            }
            )
              , er = (a = (0,
            O.Z)(N().mark(function e() {
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            y.setState({
                                isAnonymous: !0
                            }),
                            ee.qN.setState(function(e) {
                                e.threads[i].initialThreadData.authorName = void 0
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function() {
                return a.apply(this, arguments)
            }
            )
              , ei = (r = (0,
            O.Z)(N().mark(function e() {
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            y.setState({
                                isAnonymous: !1
                            }),
                            ee.qN.setState(function(e) {
                                e.threads[i].initialThreadData.authorName = null == F ? void 0 : F.name
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function() {
                return r.apply(this, arguments)
            }
            )
              , es = (0,
            ew.jsxs)(tV, {
                $active: c,
                children: [(0,
                ew.jsxs)("div", {
                    className: "flex-1 pr-1",
                    children: [void 0 !== v ? c ? (0,
                    ew.jsx)(tH, {
                        ref: l,
                        type: "text",
                        defaultValue: null != v ? v : "",
                        autoFocus: !0,
                        onKeyDown: K,
                        onBlur: X
                    }) : (0,
                    ew.jsxs)(tG, {
                        onDoubleClick: function() {
                            return u(!0)
                        },
                        children: [v, c || null == v || T ? null : (0,
                        ew.jsx)("button", {
                            onClick: function() {
                                return u(!0)
                            },
                            className: "text-gray-500",
                            children: (0,
                            ew.jsx)(G.Nte, {
                                className: "icon-sm"
                            })
                        })]
                    }) : (0,
                    ew.jsx)("div", {
                        className: "h-6"
                    }), (0,
                    ew.jsxs)("div", {
                        className: "mt-1 text-gray-500",
                        children: [!j && (0,
                        ew.jsx)("span", {
                            children: "".concat(null == F ? void 0 : F.name, " \xb7 ")
                        }), (0,
                        ew.jsx)(W.Ji, {
                            value: new Date,
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })]
                    })]
                }), (0,
                ew.jsx)(tW, {
                    children: (0,
                    ew.jsxs)(e8.fC, {
                        children: [(0,
                        ew.jsx)(e8.xz, {
                            asChild: !0,
                            children: (0,
                            ew.jsx)(eB.z, {
                                color: "neutral",
                                className: "mb-auto mt-auto",
                                children: (0,
                                ew.jsx)(H.JEI, {})
                            })
                        }), (0,
                        ew.jsx)(e8.h_, {
                            children: (0,
                            ew.jsxs)(e8.VY, {
                                className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                side: "top",
                                align: "end",
                                children: [j && (0,
                                ew.jsx)(eB.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: ei,
                                    children: (0,
                                    ew.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        ew.jsx)(G.fzv, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        ew.jsx)("div", {
                                            children: (0,
                                            ew.jsx)(Q.Z, tR({}, tF.shareYourName))
                                        })]
                                    })
                                }), !j && (0,
                                ew.jsx)(eB.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: er,
                                    children: (0,
                                    ew.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        ew.jsx)(G.fzv, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        ew.jsx)("div", {
                                            children: (0,
                                            ew.jsx)(Q.Z, tR({}, tF.shareAnonymously))
                                        })]
                                    })
                                }), T && (0,
                                ew.jsx)(eB.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: J,
                                    children: (0,
                                    ew.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        ew.jsx)(G.Ybf, {
                                            className: "icon-sm float-left mb-auto mr-4 mt-auto"
                                        }), (0,
                                        ew.jsx)("div", {
                                            children: (0,
                                            ew.jsx)(Q.Z, tR({}, tF.deleteLink))
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            })
              , eo = P;
            return null == eo && (null != I && I.has_been_auto_blocked || null != I && I.has_been_auto_moderated || null != I && I.has_been_blocked) && (eo = (0,
            ew.jsx)(Q.Z, tR({}, tF.moderationBlocked))),
            (0,
            ew.jsxs)(ek.Z, {
                isOpen: !0,
                onClose: function() {
                    U()
                },
                size: "custom",
                className: "max-w-[550px]",
                type: "success",
                title: o.formatMessage(tF.sharingModalTitle),
                closeButton: (0,
                ew.jsx)(ev.ZP.CloseButton, {
                    onClose: function() {
                        U()
                    }
                }),
                children: [null != eo && (0,
                ew.jsx)("div", {
                    className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                    children: eo
                }), (0,
                ew.jsx)("div", {
                    className: (0,
                    eu.default)("w-full"),
                    children: (0,
                    ew.jsx)("p", {
                        className: (0,
                        eu.default)("mb-6 text-gray-500"),
                        children: T ? (0,
                        ew.jsx)(Q.Z, tR(tR({}, tF.existingShareDescription), {}, {
                            values: {
                                existingLink: function(e) {
                                    return (0,
                                    ew.jsx)("a", {
                                        href: b,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline",
                                        children: e
                                    })
                                },
                                deleteLink: function(e) {
                                    return (0,
                                    ew.jsx)("a", {
                                        href: "#",
                                        onClick: function(e) {
                                            e.preventDefault(),
                                            window.confirm(o.formatMessage(tF.confirmDeleteLink)) && J()
                                        },
                                        className: "underline",
                                        children: e
                                    })
                                }
                            }
                        })) : (0,
                        ew.jsx)(Q.Z, tR({}, _ ? tF.sharingModalBizDescription : tF.sharingModalDescription))
                    })
                }), (0,
                ew.jsx)(tq, {
                    shouldShowCodeInterpreterDisclaimer: A,
                    shouldShowPersonalizedDataDisclaimer: L || q
                }), (0,
                ew.jsx)(tU, {
                    children: (0,
                    ew.jsx)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: (0,
                        ew.jsx)(tB, {
                            children: (0,
                            ew.jsxs)(tz, {
                                children: [(0,
                                ew.jsx)(e7.f, {
                                    ratio: 1.9,
                                    className: "overflow-auto bg-white dark:bg-gray-800",
                                    children: null != M ? (0,
                                    ew.jsx)(ea.gB.Provider, {
                                        value: {
                                            serverSharedThreadId: null
                                        },
                                        children: (0,
                                        ew.jsx)(t_, {
                                            onChangeItemInView: ef(),
                                            onRequestMoreCompletions: ef(),
                                            onChangeRating: ef(),
                                            onRequestCompletion: ef(),
                                            clientThreadId: i,
                                            conversationLeafId: M,
                                            currentThreadModel: s,
                                            inlineEmbeddedDisplay: !0,
                                            initiallyHighlightedMessageId: w
                                        })
                                    }) : (0,
                                    ew.jsx)("div", {
                                        className: "flex h-full items-center justify-center",
                                        children: (0,
                                        ew.jsx)(eU.Z, {
                                            className: "text-gray-400 dark:text-gray-500"
                                        })
                                    })
                                }), es]
                            })
                        })
                    })
                }), (0,
                ew.jsx)(ev.ZP.Actions, {
                    isSpacedBetween: !0,
                    primaryButton: $,
                    secondaryButton: (0,
                    ew.jsx)("div", {
                        children: (0,
                        ew.jsxs)("a", {
                            href: _ ? "https://help.openai.com/en/articles/8474715-chatgpt-enterprise-shared-links-faq" : "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq",
                            className: "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [o.formatMessage(tF.sharingModalMoreInfo), (0,
                            ew.jsx)(G.AlO, {
                                className: "icon-sm"
                            })]
                        })
                    })
                })]
            })
        }
        var tq = function(e) {
            var t = e.shouldShowCodeInterpreterDisclaimer
              , n = e.shouldShowPersonalizedDataDisclaimer;
            return (0,
            ew.jsxs)(ew.Fragment, {
                children: [t && (0,
                ew.jsx)(tl, {
                    icon: G.H33,
                    children: (0,
                    ew.jsx)(Q.Z, tR({}, tF.advancedDataAnalysisSupportDisclaimer))
                }), n && (0,
                ew.jsxs)("p", {
                    className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                    children: [(0,
                    ew.jsx)(G.H33, {
                        className: "icon-sm mt-1 flex-shrink-0"
                    }), (0,
                    ew.jsx)(Q.Z, tR({}, tF.personalizedDataDisclaimer))]
                })]
            })
        }
          , tB = $.Z.main(m || (m = (0,
        T.Z)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"])))
          , tz = $.Z.div(f || (f = (0,
        T.Z)(["grow flex-1 overflow-hidden"])))
          , tU = $.Z.div(p || (p = (0,
        T.Z)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50"])))
          , tV = $.Z.div(x || (x = (0,
        T.Z)(["flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n", "\n"])), function(e) {
            return e.$active,
            ""
        })
          , tG = $.Z.div(g || (g = (0,
        T.Z)(["flex w-full items-center justify-left gap-2 min-h-[1.5rem]"])))
          , tH = $.Z.input(h || (h = (0,
        T.Z)(["border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full"])))
          , tW = $.Z.div(y || (y = (0,
        T.Z)(["flex-none h-full mt-auto mb-auto"])))
          , tQ = n(48099)
          , t$ = n(66548)
          , tX = n(38766)
          , tK = n(8024)
          , tY = n(47428)
          , tJ = n(76483)
          , t0 = n(47249)
          , t9 = n(82743)
          , t1 = n(12063)
          , t2 = n(93982)
          , t5 = n(7525)
          , t3 = n(14402)
          , t6 = n(55161)
          , t4 = n(41845)
          , t7 = n(82256)
          , t8 = n(7137)
          , ne = n(73797)
          , nt = n(34408)
          , nn = n(998);
        function na(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function nr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? na(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ni(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function ns(e) {
            var t = e.connectorData
              , a = e.onConnectorClick
              , r = e.displayType
              , i = (0,
            ex.Z)();
            return (0,
            ew.jsxs)(ne.Z.Root, {
                children: [(0,
                ew.jsx)(ne.Z.Trigger, {
                    children: "button" === r ? (0,
                    ew.jsx)(eB.z, {
                        size: "medium",
                        children: (0,
                        ew.jsx)(G.wzc, {})
                    }) : (0,
                    ew.jsx)(G.OvN, {
                        className: "icon-sm md:icon-md rounded-full bg-gray-500 text-white outline-none hover:bg-black"
                    })
                }), (0,
                ew.jsx)(ne.Z.Portal, {
                    children: (0,
                    ew.jsx)(ne.Z.Content, {
                        children: t.map(function(e) {
                            return (0,
                            ew.jsx)(ne.Z.Item, {
                                onClick: (0,
                                O.Z)(N().mark(function t() {
                                    return N().wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (!e.oauth_required) {
                                                    t.next = 8;
                                                    break
                                                }
                                                return t.next = 3,
                                                Promise.resolve().then(n.bind(n, 80449));
                                            case 3:
                                                (0,
                                                t.sent.doOauthRedirect)({
                                                    id: e.id
                                                }, "#settings"),
                                                t.next = 9;
                                                break;
                                            case 8:
                                                a(e);
                                            case 9:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t)
                                })),
                                children: (0,
                                ew.jsxs)("div", {
                                    className: "flex space-x-2",
                                    children: [e.type === t7.PO.GDRIVE && (0,
                                    ew.jsx)(t8.dv9, {}), e.type === t7.PO.O365 && (0,
                                    ew.jsx)(t8.oV6, {}), (0,
                                    ew.jsx)("div", {
                                        children: e.oauth_required ? i.formatMessage(nl.signinWithMessage, {
                                            connector_name: e.name
                                        }) : i.formatMessage(nl.uploadFromMessage, {
                                            connector_name: e.name
                                        })
                                    })]
                                })
                            }, e.id)
                        })
                    })
                })]
            })
        }
        function no(e) {
            var t, n, a = e.displayType, r = e.connectFile, i = e.fetchData, s = (0,
            ex.Z)(), o = (0,
            V.useState)([]), l = o[0], d = o[1], c = (0,
            V.useState)(""), u = c[0], m = c[1], f = (0,
            V.useState)([]), p = f[0], x = f[1], g = (0,
            V.useState)(null), h = g[0], y = g[1], v = (0,
            V.useState)(!1), k = v[0], b = v[1], j = (0,
            V.useState)(null), w = j[0], M = j[1], C = (t = (0,
            O.Z)(N().mark(function e() {
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (h) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return b(!0),
                            e.next = 5,
                            Y.ZP.searchConnectorAPI(u, h.type);
                        case 5:
                            d(e.sent.results),
                            b(!1);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function() {
                return t.apply(this, arguments)
            }
            ), T = (n = (0,
            O.Z)(N().mark(function e(t, n) {
                var a, o, l, d, c, u;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = function(e) {
                                t3.Dw.uploadFile(e.file_id, new File([],e.title), t5.A.ContextConnector, [], s),
                                t3.Dw.createFileCompleted(e.file_id, e.file_id, ""),
                                t3.Dw.uploadCompleted(e.file_id, void 0, void 0, e)
                            }
                            ,
                            h) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return o = null != r ? r : a,
                            M(t),
                            e.next = 7,
                            null != i ? i(n, h.type) : Y.ZP.fetchConnectorAPI(n, h.type);
                        case 7:
                            if ("file" === (l = e.sent).type)
                                o(l.file);
                            else if ("folder" === l.type) {
                                d = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e)
                                                    return ni(e, t);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n)
                                                    return Array.from(e);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                                    return ni(e, t)
                                            }
                                        }(e))) {
                                            n && (e = n);
                                            var a = 0
                                              , r = function() {};
                                            return {
                                                s: r,
                                                n: function() {
                                                    return a >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[a++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: r
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var i, s = !0, o = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return s = e.done,
                                            e
                                        },
                                        e: function(e) {
                                            o = !0,
                                            i = e
                                        },
                                        f: function() {
                                            try {
                                                s || null == n.return || n.return()
                                            } finally {
                                                if (o)
                                                    throw i
                                            }
                                        }
                                    }
                                }(l.folder);
                                try {
                                    for (d.s(); !(c = d.n()).done; )
                                        u = c.value,
                                        o(u)
                                } catch (e) {
                                    d.e(e)
                                } finally {
                                    d.f()
                                }
                            }
                            M(null);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t) {
                return n.apply(this, arguments)
            }
            );
            return (0,
            V.useEffect)(function() {
                function e() {
                    return (e = (0,
                    O.Z)(N().mark(function e() {
                        return N().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Y.ZP.checkConnectorAPI();
                                case 2:
                                    x(e.sent.connectors);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }, []),
            (0,
            ew.jsxs)(ew.Fragment, {
                children: [(0,
                ew.jsx)(ns, {
                    connectorData: p,
                    onConnectorClick: function(e) {
                        y(e)
                    },
                    displayType: a
                }), (0,
                ew.jsx)(ek.Z, {
                    isOpen: null !== h,
                    size: "normal",
                    type: "success",
                    onClose: function() {
                        y(null)
                    },
                    className: "max-h-[calc(100vh-300px)] min-h-fit max-w-xl self-center overflow-y-auto p-4",
                    children: (0,
                    ew.jsxs)("div", {
                        className: "flex flex-col space-y-4",
                        children: [(0,
                        ew.jsxs)("div", {
                            className: "flex items-center space-x-2 self-center text-xl",
                            children: [(null == h ? void 0 : h.type) === t7.PO.GDRIVE && (0,
                            ew.jsx)(t8.dv9, {
                                className: "icon-md toggle-item-button-open text-gray-500"
                            }), (null == h ? void 0 : h.type) === t7.PO.O365 && (0,
                            ew.jsx)(t8.oV6, {
                                className: "icon-md toggle-item-button-open text-gray-500"
                            }), (0,
                            ew.jsx)("span", {
                                children: s.formatMessage(nl.modalTitle, {
                                    connector_name: null == h ? void 0 : h.name
                                })
                            })]
                        }), (0,
                        ew.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [(0,
                            ew.jsx)(nn.Z, {
                                type: "text",
                                name: "Search Drive",
                                placeholder: "Search Keywords",
                                className: "flex-1",
                                value: u,
                                onChange: function(e) {
                                    m(e.target.value)
                                }
                            }), (0,
                            ew.jsx)(eB.z, {
                                color: "primary",
                                onClick: C,
                                loading: k,
                                children: (0,
                                ew.jsx)(Q.Z, nr({}, nl.search))
                            })]
                        }), l.length > 0 && (0,
                        ew.jsxs)(nt.Z.Root, {
                            className: "w-full table-auto",
                            children: [(0,
                            ew.jsx)("thead", {
                                className: "border-b border-gray-100",
                                children: (0,
                                ew.jsxs)("tr", {
                                    children: [(0,
                                    ew.jsx)("th", {
                                        className: "py-2 text-left font-bold",
                                        children: (0,
                                        ew.jsx)(Q.Z, nr({}, nl.tableNameLabel))
                                    }), (0,
                                    ew.jsx)("th", {
                                        className: "py-2 text-left font-bold",
                                        children: (0,
                                        ew.jsx)(Q.Z, nr({}, nl.tableTypeLabel))
                                    }), (0,
                                    ew.jsx)("th", {})]
                                })
                            }), (0,
                            ew.jsx)("tbody", {
                                children: l.map(function(e, t) {
                                    return (0,
                                    ew.jsxs)("tr", {
                                        className: "text-sm",
                                        children: [(0,
                                        ew.jsx)("td", {
                                            className: "border-t border-gray-200 py-2",
                                            children: e.name
                                        }), (0,
                                        ew.jsx)("td", {
                                            className: "border-t border-gray-200 py-2",
                                            children: e.mime_type
                                        }), (0,
                                        ew.jsx)("td", {
                                            className: "border-t border-gray-200 py-2",
                                            children: (0,
                                            ew.jsx)(eB.z, {
                                                color: "dark",
                                                onClick: (0,
                                                O.Z)(N().mark(function n() {
                                                    return N().wrap(function(n) {
                                                        for (; ; )
                                                            switch (n.prev = n.next) {
                                                            case 0:
                                                                T(t, e.id);
                                                            case 1:
                                                            case "end":
                                                                return n.stop()
                                                            }
                                                    }, n)
                                                })),
                                                loading: w === t,
                                                children: (0,
                                                ew.jsx)(G.wzc, {
                                                    className: "icon-md"
                                                })
                                            })
                                        })]
                                    }, e.id)
                                })
                            })]
                        })]
                    })
                })]
            })
        }
        var nl = (0,
        W.vU)({
            modalTitle: {
                id: "ContextConnectorPicker.modalTitle",
                defaultMessage: "Upload from {connector_name}"
            },
            search: {
                id: "ContextConnectorPicker.search",
                defaultMessage: "Search"
            },
            tableNameLabel: {
                id: "ContextConnectorPicker.tableNameLabel",
                defaultMessage: "Filename"
            },
            tableTypeLabel: {
                id: "ContextConnectorPicker.tableTypeLabel",
                defaultMessage: "Filetype"
            },
            connectOAuth: {
                id: "ContextConnectorPicker.connectOAuth",
                defaultMessage: "Connect"
            },
            attachFiles: {
                id: "ContextConnectorPicker.attachFiles",
                defaultMessage: "Attach files"
            },
            signinWithMessage: {
                id: "ContextConnectorPicker.signInWithMessage",
                defaultMessage: "Sign in with {connector_name}"
            },
            uploadFromMessage: {
                id: "ContextConnectorPicker.uploadWithMessage",
                defaultMessage: "Upload from {connector_name}"
            }
        })
          , nd = n(49685)
          , nc = n(90246)
          , nu = n(31609)
          , nm = n(52336)
          , nf = n(14972)
          , np = n(31803)
          , nx = n(75884)
          , ng = n(99471);
        function nh(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        var ny = {
            data: void 0
        }
          , nv = (0,
        tn.ZP)()(function() {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nh(Object(n), !0).forEach(function(t) {
                        (0,
                        I.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, ny)
        });
        function nk(e) {
            if (null == e.data)
                return nv.setState(e);
            var t = e.data.suggestions.map(function(e) {
                return {
                    text: e
                }
            });
            nv.setState({
                data: {
                    messageId: e.data.messageId,
                    suggestions: t
                }
            })
        }
        var nb = (a = (0,
        O.Z)(N().mark(function e(t, n, a) {
            return N().wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return nk({
                            data: void 0
                        }),
                        e.prev = 1,
                        e.next = 4,
                        Y.ZP.generateSuggestions(t, n, a);
                    case 4:
                        nk({
                            data: {
                                messageId: n,
                                suggestions: e.sent.suggestions
                            }
                        }),
                        e.next = 12;
                        break;
                    case 9:
                        e.prev = 9,
                        e.t0 = e.catch(1),
                        console.error(e.t0);
                    case 12:
                    case "end":
                        return e.stop()
                    }
            }, e, null, [[1, 9]])
        })),
        function(e, t, n) {
            return a.apply(this, arguments)
        }
        )
          , nj = function() {
            nk(ny)
        }
          , nw = n(72459);
        function nM(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function nC(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function nT(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nC(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nC(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function nP(e) {
            var t = e.files;
            return (0,
            ew.jsx)("div", {
                className: "mx-2 mt-2 flex flex-wrap gap-2 px-2.5 md:pl-0 md:pr-4",
                children: t.map(function(e) {
                    return (0,
                    ew.jsx)(nd.Z, {
                        onRemoveFileClick: function() {
                            return t3.Dw.remove(e.tempId, "none")
                        },
                        file: e.file,
                        loadingPercentage: e.status === t5.X.Uploading ? e.progress : void 0
                    }, e.tempId)
                })
            })
        }
        var nO = (0,
        V.forwardRef)(function(e, t) {
            var n, a, r, i, s, o = e.onAbortCompletion, l = e.onCreateNewCompletion, d = e.onContinueGenerating, c = e.currentModelId, u = e.clientThreadId, m = e.isNewThread, f = e.isCompletionInProgress, p = e.className, x = e.disabled, g = void 0 !== x && x, h = e.disabledReason, y = e.canPause, v = void 0 !== y && y, k = e.canContinue, b = e.suggestions, j = e.isInteractableSharedThread, w = (0,
            ex.Z)(), M = (0,
            ee.oq)(u), C = (0,
            ee.Hk)(u), T = (0,
            ee.XK)(u), P = (0,
            U.useRouter)(), O = (0,
            tu.Q)(), I = O.gizmoEditorData, S = O.mode, N = O.getGizmoId, Z = (0,
            tM.Wq)(u), E = (0,
            td.t)(), A = (0,
            td.hz)(), L = (0,
            er.w$)(), q = (0,
            tX.V_)(), B = (0,
            V.useRef)(null), z = (0,
            V.useState)(""), H = z[0], W = z[1], $ = (0,
            tS.Y7)().data, X = (0,
            tS.B9)(), Y = null !== c ? X[c] : void 0, en = (0,
            _.Po)(u), ea = (0,
            t6.YN)(Y, Z), es = !1;
            (Z.kind === K.OL.GizmoInteraction || Z.kind === K.OL.GizmoMagicCreate || Z.kind === K.OL.GizmoTest) && (null === (n = Z.gizmo) || void 0 === n ? void 0 : n.gizmo.id) === nm.CS && (es = !0);
            var eo = ea !== t5.A.None && !es
              , el = (0,
            t6.p0)(Y, Z)
              , ec = el.length > 0
              , em = (0,
            t3.gF)(function(e) {
                return e.files
            })
              , ef = (em = "magic" === S ? em.filter(function(e) {
                return null != e.gizmoId
            }) : em.filter(function(e) {
                return null == e.gizmoId
            })).length > 0
              , eg = (0,
            t3.gF)(t3.HR.hasUploadInProgress)
              , eh = ef ? !eg : "" !== H
              , ey = (ea === t5.A.Multimodal ? t4.Ql : t4.dO) - em.length
              , ev = ey <= 0
              , ek = eh && !g && !f
              , eM = (0,
            V.useState)(!1)
              , eC = eM[0]
              , eT = eM[1]
              , eP = null === (r = X[c || (null === (a = (0,
            tS.BC)($, E)) || void 0 === a ? void 0 : a.id)]) || void 0 === r ? void 0 : r.tags
              , eO = (0,
            V.useState)()
              , eI = eO[0]
              , eS = eO[1]
              , eN = (0,
            tQ.N)().rebaseSystemMessageContent;
            (0,
            V.useEffect)(function() {
                eC !== ek && (eT(ek),
                ek && (0,
                D.Rr)(A, null != eP ? eP : [], Z.kind) && D.ZP.startEnforcement(null != eP ? eP : []))
            }, [ek, eC, A, eP, Z.kind]);
            var e_ = (0,
            eF.Sv)(w, (0,
            t6.YN)(Y, Z), el, "mouse", N, null === (i = (0,
            t6.ww)(Y, Z)) || void 0 === i ? void 0 : i.attachments).handleFileAccepted
              , eD = (0,
            tJ.uI)(nT({
                disabled: g || !eo || ev,
                noClick: !0,
                onDropAccepted: e_,
                onDropRejected: function(e) {
                    return (0,
                    eF.UJ)(e, w, ea)
                },
                multiple: !0,
                maxSize: t4.xC,
                maxFiles: ey
            }, (0,
            t6.Z8)((0,
            t6.Zp)(Y, Z))))
              , eZ = eD.getInputProps
              , eR = eD.open
              , eE = (0,
            V.useCallback)(function() {
                W(""),
                (0,
                ep.SI)(1, B.current),
                nj();
                var e, t = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return nM(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n)
                                    return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return nM(e, t)
                            }
                        }(e))) {
                            n && (e = n);
                            var a = 0
                              , r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, s = !0, o = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return s = e.done,
                            e
                        },
                        e: function(e) {
                            o = !0,
                            i = e
                        },
                        f: function() {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (o)
                                    throw i
                            }
                        }
                    }
                }(em);
                try {
                    for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value;
                        t3.Dw.remove(n.tempId, "none")
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }, [em])
              , eA = (0,
            V.useCallback)(function(e) {
                if (null == e || e.preventDefault(),
                !g && eh) {
                    var t, n, a, r, i, s, o, d, c = B.current, u = (t = c.value,
                    n = t3.HR.getReadyFiles(t3.gF.getState()),
                    n = Z.kind === K.OL.GizmoMagicCreate ? n.filter(function(e) {
                        return null != e.gizmoId
                    }) : n.filter(function(e) {
                        return null == e.gizmoId
                    }),
                    a = null != t ? t : "",
                    r = [],
                    i = [],
                    s = (0,
                    t6.YN)(Y, Z),
                    o = (0,
                    t6.p0)(Y, Z).length > 0,
                    d = s === t5.A.Interpreter || s === t5.A.Retrieval || s === t5.A.ContextConnector,
                    n.forEach(function(e) {
                        var t = e.fileSpec;
                        d && r.push(t),
                        o && "width"in t && "height"in t && i.push({
                            asset_pointer: (0,
                            t6.L8)(t.id),
                            size_bytes: t.size,
                            width: t.width,
                            height: t.height
                        })
                    }),
                    i.length > 0 && (i.push(null != t ? t : ""),
                    a = {
                        content_type: K.PX.MultimodalText,
                        parts: i
                    }),
                    {
                        content: a,
                        attachments: r
                    }), m = u.content, f = u.attachments, p = "".concat(c.dataset.id, "-nextPrompt"), x = [];
                    eI && x.push((0,
                    ei.bm)(eI)),
                    eN && x.push((0,
                    ei.f$)(eN)),
                    l({
                        promptId: p,
                        content: m,
                        eventMetadata: {
                            eventSource: e ? "mouse" : "keyboard"
                        },
                        completionMetadata: {
                            suggestions: b,
                            conversationMode: Z
                        },
                        messageMetadata: nT(nT({}, f.length > 0 && {
                            attachments: f
                        }), eI && {
                            targeted_reply: eI
                        }),
                        appendMessages: x.length > 0 ? x : void 0
                    }),
                    eI && R.A.logEvent(F.M.targetedReplySubmitted, {
                        conversationId: T,
                        currentLeafId: M
                    }),
                    et.vm.hideThreadHeader(),
                    eS(void 0),
                    eE(),
                    void 0 !== b && (eq.m9.logEvent("chatgpt_prompt_ignore_suggestions"),
                    R.A.logEvent(F.M.promptIgnoreSuggestions))
                }
            }, [g, eh, Y, Z, eI, eN, l, b, eE, T, M])
              , eL = (0,
            V.useCallback)(function() {
                var e;
                eS(void 0),
                null === (e = B.current) || void 0 === e || e.focus(),
                R.A.logEvent(F.M.targetedReplyCleared, {
                    conversationId: T,
                    currentLeafId: M
                })
            }, [M, T])
              , eB = (0,
            V.useMemo)(function() {
                return {
                    Enter: {
                        validator: function(e) {
                            var t = e.nativeEvent.isComposing || 229 === e.keyCode;
                            return ek && (e.metaKey || L && !e.shiftKey && !t)
                        },
                        handler: function(e) {
                            e.preventDefault(),
                            eA()
                        }
                    },
                    Escape: {
                        validator: function(e) {
                            return !e.nativeEvent.isComposing
                        },
                        handler: function(e) {
                            v && f && (o("", C),
                            R.A.logEvent(F.M.pauseCompletion, {
                                threadId: ee.tQ.getServerThreadId(u),
                                currentLeafId: ee.tQ.getTree(u).getMessageId(M),
                                eventSource: "keyboard"
                            })),
                            "" === e.target.value && eL()
                        }
                    }
                }
            }, [ek, L, eA, v, f, o, C, u, M, eL])
              , ez = (0,
            V.useCallback)(function(e) {
                var t;
                null !== (t = eB[e.key]) && void 0 !== t && t.validator(e) && eB[e.key].handler(e)
            }, [eB])
              , eU = (0,
            V.useCallback)(function(e) {
                if (e.clipboardData.files.length > 0 && ec) {
                    var t, n, a = (0,
                    t6.ww)(Y, Z), r = e.clipboardData.files[0], i = null == a ? void 0 : null === (t = a.attachments) || void 0 === t ? void 0 : t.accepted_mime_types, s = null == a ? void 0 : null === (n = a.attachments) || void 0 === n ? void 0 : n.can_accept_all_mime_types;
                    if (void 0 !== i && !i.includes(r.type) && !0 !== s) {
                        ej.m.danger(w.formatMessage(nU.unsupportedFileType, {
                            file_type: r.type
                        })),
                        e.preventDefault();
                        return
                    }
                    if (et.vm.hideThreadHeader(),
                    R.A.logEvent(F.M.uploadFile, {
                        eventSource: "paste"
                    }),
                    null != N) {
                        N().then(function(e) {
                            return t3.Dw.uploadFile((0,
                            nu.W7)(r), r, ea, el, w, {
                                gizmoId: e
                            })
                        });
                        return
                    }
                    t3.Dw.uploadFile((0,
                    nu.W7)(r), r, ea, el, w, void 0, null == a ? void 0 : a.attachments)
                }
            }, [ec, Y, Z, ea, el, w, N])
              , eV = (0,
            V.useCallback)(function() {
                o("", C),
                R.A.logEvent(F.M.pauseCompletion, {
                    threadId: ee.tQ.getServerThreadId(u),
                    currentLeafId: ee.tQ.getTree(u).getMessageId(M),
                    eventSource: "mouse"
                }),
                (0,
                nw.g)()
            }, [o, u, C, M]);
            (0,
            V.useEffect)(function() {
                var e;
                I || null === (e = B.current) || void 0 === e || e.focus()
            }, []),
            (0,
            V.useEffect)(function() {
                I || t3.Dw.reset()
            }, [c, I]);
            var eG = (0,
            ew.jsx)(nN, {
                clientThreadId: u,
                currentLeafId: M,
                currentRequestId: C,
                canContinue: void 0 !== k && k,
                canPause: !1,
                suggestions: b,
                isCompletionInProgress: f,
                onStopGenerating: eV,
                onAbortCompletion: o,
                onCreateNewCompletion: l,
                onContinueGenerating: d,
                onResetState: eE
            });
            (0,
            V.useImperativeHandle)(t, function() {
                return {
                    setInputValue: W
                }
            });
            var eH = function() {
                switch (h) {
                case "feedbackRequired":
                    return [nU.disabledFeedbackPlaceholder, !0];
                case "noModelsAvailable":
                    return [nU.noModelsAvailablePlaceholder, !0];
                case "requiresPluginsToBeInstalled":
                    return [nU.requiresPluginsToBeInstalled, !0];
                case "loadingPlugins":
                    return [nU.loading, !0];
                default:
                    if (j)
                        return [nU.continueSharedConversationPlaceholder, !1];
                    return [nU.placeholderWithName, !1]
                }
            }()
              , eW = (0,
            ed.Z)(eH, 2)
              , eQ = eW[0]
              , e$ = eW[1];
            return (0,
            ew.jsxs)(ew.Fragment, {
                children: [(0,
                ew.jsx)("form", {
                    className: p,
                    onSubmit: eA,
                    children: (0,
                    ew.jsxs)("div", {
                        className: "relative flex h-full flex-1 items-stretch md:flex-col",
                        children: [L && eG, (0,
                        ew.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [m && "from_template_row"in P.query && (0,
                            ew.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    P.push("/", void 0, {
                                        shallow: !0
                                    })
                                },
                                className: "mr-2 flex h-8 w-8 items-center justify-center text-token-text-tertiary hover:text-token-text-secondary",
                                children: (0,
                                ew.jsx)(G.YFh, {
                                    className: "icon-lg"
                                })
                            }), (0,
                            ew.jsxs)(nB, {
                                $historyDisabled: q,
                                children: [ef && (0,
                                ew.jsxs)(ew.Fragment, {
                                    children: ["magic" === S && (0,
                                    ew.jsx)("div", {
                                        className: "m-2 mb-0 rounded-lg bg-gray-50 p-2 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-300",
                                        children: (0,
                                        ew.jsx)(Q.Z, nT({}, nU.gizmoKnowledgeWarning))
                                    }), (0,
                                    ew.jsx)(nP, {
                                        files: em
                                    })]
                                }), eI && (0,
                                ew.jsxs)("div", {
                                    className: "relative bg-token-surface-secondary p-5 text-token-text-primary dark:bg-token-surface-tertiary",
                                    children: [(0,
                                    ew.jsx)("button", {
                                        className: "absolute right-4 top-5 text-sm font-bold",
                                        onClick: eL,
                                        children: (0,
                                        ew.jsx)(tm.v7, {
                                            className: "icon-md text-token-text-secondary hover:text-token-text-primary"
                                        })
                                    }), (0,
                                    ew.jsx)("div", {
                                        className: "text-sm text-token-text-tertiary",
                                        children: (0,
                                        ew.jsx)(Q.Z, nT({}, nU.targetedReply))
                                    }), (0,
                                    ew.jsx)("div", {
                                        className: "mt-2 max-h-32 overflow-y-auto whitespace-pre-wrap break-words border-l-2 border-token-border-heavy px-3",
                                        children: eI
                                    })]
                                }), (0,
                                ew.jsx)(ep.ZP, {
                                    id: nw.h,
                                    tabIndex: 0,
                                    value: H,
                                    "data-id": M,
                                    ref: B,
                                    style: {
                                        maxHeight: "200px"
                                    },
                                    rows: 1,
                                    onKeyDown: ez,
                                    onChange: function(e) {
                                        et.vm.hideThreadHeader(),
                                        W(e.target.value)
                                    },
                                    onPaste: eU,
                                    placeholder: w.formatMessage(eQ, {
                                        name: null != I ? "magic" === S ? _.HW : I.name || "GPT" : null !== (s = null == en ? void 0 : en.gizmo.display.name) && void 0 !== s ? s : "ChatGPT"
                                    }),
                                    className: (0,
                                    eu.default)("m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12", !q && "placeholder-black/50 dark:placeholder-white/50", !ev && eo ? "pl-10 md:pl-[55px]" : "pl-3 md:pl-4", e$ && "text-center"),
                                    disabled: g
                                }), !ev && eo && ea !== t5.A.ContextConnector && (0,
                                ew.jsx)(nq, {
                                    children: (0,
                                    ew.jsx)(nc.Z, {
                                        uploadType: ea,
                                        openFileDialog: eR,
                                        getInputProps: eZ,
                                        customIcon: (0,
                                        ew.jsx)(nf.FK, {
                                            className: q ? "text-white" : void 0
                                        }),
                                        customClassName: "p-0 text-black dark:text-white"
                                    })
                                }), ea === t5.A.ContextConnector && (0,
                                ew.jsx)("div", {
                                    className: "absolute bottom-1 left-0.5 md:bottom-3",
                                    children: (0,
                                    ew.jsx)(no, {
                                        displayType: "icon"
                                    })
                                }), f ? (0,
                                ew.jsx)("div", {
                                    className: "absolute bottom-0 right-2 top-0 p-1 md:right-3 md:p-2",
                                    children: (0,
                                    ew.jsx)("div", {
                                        className: "flex h-full",
                                        children: v ? (0,
                                        ew.jsx)("div", {
                                            className: "flex h-full flex-row items-center justify-center gap-3",
                                            children: (0,
                                            ew.jsx)("button", {
                                                type: "button",
                                                className: "rounded-full border-2 border-gizmo-gray-950 p-1 dark:border-gray-200",
                                                onClick: eV,
                                                "aria-label": w.formatMessage(nU.stopGenerating),
                                                children: (0,
                                                ew.jsx)(nf.uf, {
                                                    className: "h-2 w-2 text-gizmo-gray-950 dark:text-gray-200"
                                                })
                                            })
                                        }) : (0,
                                        ew.jsx)("div", {
                                            className: "text-2xl",
                                            children: (0,
                                            ew.jsx)(nI, {})
                                        })
                                    })
                                }) : !e$ && (0,
                                ew.jsx)(nL, {
                                    disabled: !ek,
                                    className: (0,
                                    eu.default)("bottom-1.5", f ? "disabled:bottom-0.5 md:disabled:bottom-0" : "transition-colors"),
                                    "data-testid": "send-button",
                                    children: (0,
                                    ew.jsx)(eb.u, {
                                        label: w.formatMessage(nU.sendMessageTooltip),
                                        children: (0,
                                        ew.jsx)(nf.Ms, {
                                            className: "text-white dark:text-black"
                                        })
                                    })
                                })]
                            })]
                        }), !L && eG]
                    })
                }), (null == A ? void 0 : A.includes(J.L0.TargetedReplies)) && nx.wB.includes(Z.kind) && (0,
                ew.jsx)(nx.ZP, {
                    onTargetedReply: function(e) {
                        if (eS(e.targetedReply),
                        e.targetedReply) {
                            var t;
                            null === (t = B.current) || void 0 === t || t.focus(),
                            R.A.logEvent(F.M.targetedReplyButtonClicked, {
                                conversationId: T,
                                sourceMessageId: e.messageId
                            })
                        }
                    }
                })]
            })
        });
        function nI() {
            var e = (0,
            V.useState)(0)
              , t = e[0]
              , n = e[1];
            (0,
            V.useEffect)(function() {
                var e = setInterval(function() {
                    n(function(e) {
                        return (e + 1) % 3
                    })
                }, 350);
                return function() {
                    return clearInterval(e)
                }
            }, []);
            for (var a = [], r = 0; r < 3; r++)
                a.push((0,
                ew.jsx)("span", {
                    className: r <= t ? "" : "invisible",
                    children: "\xb7"
                }, r));
            return (0,
            ew.jsx)(ew.Fragment, {
                children: a
            })
        }
        var nS = function(e, t) {
            eq.m9.logEvent("chatgpt_prompt_use_suggestion", (0,
            np.bf)(e), {
                index: "".concat(t),
                type: (0,
                np.QO)(e) ? np.jK.Reply : np.jK.Starter
            }),
            (0,
            np.QO)(e) ? R.A.logEvent(F.M.useSuggestedReply, {
                value: (0,
                np.bf)(e),
                prompt_type: np.jK.Reply
            }) : R.A.logEvent(F.M.useStarterPrompt, {
                value: (0,
                np.bf)(e),
                prompt_type: np.jK.Starter,
                title: e.title
            })
        };
        function nN(e) {
            var t = e.clientThreadId
              , n = e.currentLeafId
              , a = e.currentRequestId
              , r = e.canContinue
              , i = e.canPause
              , s = e.suggestions
              , o = e.isCompletionInProgress
              , l = e.onStopGenerating
              , d = e.onAbortCompletion
              , c = e.onCreateNewCompletion
              , u = e.onContinueGenerating
              , m = e.onResetState
              , f = (0,
            ng.Z)(t)
              , p = (0,
            tM.WA)(t)
              , x = (0,
            V.useCallback)(function(e) {
                if (d("", a),
                f(n, {
                    eventSource: "mouse"
                }, null == e ? void 0 : e.systemMessage),
                (0,
                nw.g)(),
                e) {
                    var r = ee.tQ.getServerThreadId(t);
                    R.A.logEvent(F.M.guidedRegenerateSubmit, {
                        systemMessage: e.systemMessage,
                        label: e.label,
                        currentLeafId: ee.tQ.getTree(t).getMessageId(n),
                        threadId: r
                    })
                }
            }, [d, a, f, n, t])
              , g = (0,
            V.useCallback)(function() {
                u(n),
                (0,
                nw.g)()
            }, [u, n])
              , h = (0,
            V.useCallback)(function(e, t) {
                et.vm.hideThreadHeader(),
                c({
                    promptId: "".concat(n, "-nextPrompt"),
                    content: (0,
                    np.bf)(e),
                    eventMetadata: {
                        eventSource: "mouse"
                    },
                    completionMetadata: {
                        suggestions: s,
                        conversationMode: p
                    }
                }),
                m(),
                nS(e, t),
                (0,
                nw.g)()
            }, [m, n, c, s, p]);
            return r || i || void 0 !== s && 0 !== s.length ? (0,
            ew.jsx)("div", {
                children: (0,
                ew.jsxs)(nz, {
                    children: [(0,
                    ew.jsx)("div", {
                        className: "grow",
                        children: void 0 !== s && (0,
                        ew.jsx)(np.Gt, {
                            suggestions: s,
                            onSelectingSuggestedReply: h
                        })
                    }), (0,
                    ew.jsx)(nD, {
                        canContinue: r,
                        canPause: i,
                        canRegenerateResponse: !1,
                        isCompletionInProgress: o,
                        onHandleContinueGenerating: g,
                        onRegenerateResponse: x,
                        onStopGenerating: l
                    })]
                })
            }) : null
        }
        var n_ = function(e) {
            var t = e.children;
            return (0,
            ew.jsx)(tg.E.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0,
                    transition: {
                        duration: .1,
                        delay: 0
                    }
                },
                transition: {
                    type: "tween",
                    duration: .3,
                    delay: .2
                },
                children: t
            })
        }
          , nD = function(e) {
            var t = e.canContinue
              , n = e.canPause
              , a = e.canRegenerateResponse
              , r = e.isCompletionInProgress
              , i = e.onHandleContinueGenerating
              , s = e.onRegenerateResponse
              , o = e.onStopGenerating
              , l = (0,
            td.hz)()
              , d = null != l && l.includes(J.L0.GuidedRegenerate) ? nA : nF;
            return t ? (0,
            ew.jsx)("div", {
                className: "flex items-center md:items-end",
                children: (0,
                ew.jsx)(nZ, {
                    onHandleContinueGenerating: i
                })
            }) : n && r ? (0,
            ew.jsx)("div", {
                className: "flex items-center md:items-end",
                children: (0,
                ew.jsx)(nR, {
                    onStopGenerating: o
                })
            }) : a ? (0,
            ew.jsx)("div", {
                className: "flex items-center md:items-end",
                children: (0,
                ew.jsx)(d, {
                    onRegenerateResponse: s
                })
            }) : null
        }
          , nZ = function(e) {
            var t = e.onHandleContinueGenerating
              , n = (0,
            er.w$)();
            return (0,
            ew.jsx)(n_, {
                children: (0,
                ew.jsxs)(eB.z, {
                    as: "button",
                    color: "neutral",
                    onClick: t,
                    className: "whitespace-nowrap border-0 md:border",
                    children: [(0,
                    ew.jsx)(G.lV_, {
                        className: (0,
                        eu.default)("-rotate-180", n ? "icon-xs" : "icon-sm")
                    }), n && (0,
                    ew.jsx)(Q.Z, nT({}, nU.continueGenerating))]
                })
            })
        }
          , nR = function(e) {
            var t = e.onStopGenerating
              , n = (0,
            er.w$)();
            return (0,
            ew.jsx)(n_, {
                children: (0,
                ew.jsxs)(eB.z, {
                    as: "button",
                    color: "neutral",
                    onClick: t,
                    className: "whitespace-nowrap border-0 md:border",
                    children: [(0,
                    ew.jsx)(G.jxP, {
                        className: (0,
                        eu.default)(n ? "icon-xs" : "icon-sm")
                    }), n && (0,
                    ew.jsx)(Q.Z, nT({}, nU.stopGenerating))]
                })
            })
        }
          , nF = function(e) {
            var t = e.onRegenerateResponse
              , n = (0,
            er.w$)();
            return (0,
            ew.jsx)(n_, {
                children: (0,
                ew.jsxs)(eB.z, {
                    as: "button",
                    color: n ? "neutral" : "none",
                    onClick: function() {
                        return t()
                    },
                    className: "-z-0 whitespace-nowrap border-0 md:border",
                    children: [(0,
                    ew.jsx)(G.Qxo, {
                        className: (0,
                        eu.default)("flex-shrink-0", n ? "icon-xs" : "icon-sm")
                    }), n && (0,
                    ew.jsx)(Q.Z, nT({}, nU.regenerateResponse))]
                })
            })
        }
          , nE = [{
            labelKey: "shorter",
            systemMessage: "Be very concise in your answer",
            Icon: t1.yft
        }, {
            labelKey: "longer",
            systemMessage: "Please respond in a longer answer with more details",
            Icon: t9.pyB
        }, {
            labelKey: "moreCreative",
            systemMessage: "Be creative in your answer",
            Icon: t0.LCi
        }, {
            labelKey: "moreCasual",
            systemMessage: "Respond in a casual tone",
            Icon: t1.sWy
        }, {
            labelKey: "moreProfessional",
            systemMessage: "Respond in a professional tone",
            Icon: t2.xnT
        }, {
            labelKey: "regenerate",
            systemMessage: void 0,
            Icon: G.Qxo
        }]
          , nA = function(e) {
            var t = e.onRegenerateResponse
              , n = (0,
            er.w$)()
              , a = (0,
            ex.Z)();
            return (0,
            ew.jsx)(n_, {
                children: (0,
                ew.jsxs)(tY.fC, {
                    onOpenChange: function(e) {
                        e && R.A.logEvent(F.M.guidedRegenerateOpen)
                    },
                    children: [(0,
                    ew.jsx)(tY.xz, {
                        asChild: !0,
                        children: (0,
                        ew.jsxs)(eB.z, {
                            as: "button",
                            color: n ? "neutral" : "none",
                            className: "border-0 md:border",
                            children: [(0,
                            ew.jsx)(tb.LYv, {
                                className: (0,
                                eu.default)("flex-shrink-0", n ? "icon-sm" : "icon-md")
                            }), n && (0,
                            ew.jsx)(Q.Z, nT({}, nU.guidedRegenerateResponse))]
                        })
                    }), (0,
                    ew.jsx)(tY.Uv, {
                        children: (0,
                        ew.jsx)(tY.VY, {
                            className: "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                            side: "bottom",
                            sideOffset: 4,
                            children: nE.map(function(e) {
                                var n = a.formatMessage(nU[e.labelKey]);
                                return (0,
                                ew.jsxs)(tY.ck, {
                                    onClick: function() {
                                        return t({
                                            systemMessage: e.systemMessage,
                                            label: n
                                        })
                                    },
                                    className: "flex cursor-pointer select-none items-center gap-2 px-4 py-3 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                                    children: [(0,
                                    ew.jsx)(e.Icon, {
                                        className: "h-5 w-5"
                                    }), n]
                                }, e.labelKey)
                            })
                        })
                    })]
                })
            })
        }
          , nL = $.Z.button(v || (v = (0,
        T.Z)(["absolute bottom-2.5 md:bottom-3 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 dark:disabled:bg-white disabled:bg-black disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg dark:border-white dark:bg-white"])))
          , nq = $.Z.div(k || (k = (0,
        T.Z)(["absolute bottom-2 md:bottom-3 left-2 md:left-4"])))
          , nB = $.Z.div(b || (b = (0,
        T.Z)(["\noverflow-hidden [&:has(textarea:focus)]:border-token-border-xheavy [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-heavy flex-grow relative border border-token-border-heavy dark:text-white rounded-2xl\n", "\n"])), function(e) {
            return e.$historyDisabled ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900" : "bg-white dark:bg-gray-800 shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]"
        })
          , nz = $.Z.div(j || (j = (0,
        T.Z)(["h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center"])))
          , nU = (0,
        W.vU)({
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate"
            },
            guidedRegenerateResponse: {
                id: "PromptTextarea.guidedRegenerateResponse",
                defaultMessage: "Improve"
            },
            continueGenerating: {
                id: "PromptTextarea.continueGenerating",
                defaultMessage: "Continue generating"
            },
            stopGenerating: {
                id: "PromptTextarea.stopGenerating",
                defaultMessage: "Stop generating"
            },
            disabledFeedbackPlaceholder: {
                id: "PromptTextarea.disabledFeedbackPlaceholder",
                defaultMessage: "Select a response to continue"
            },
            noModelsAvailablePlaceholder: {
                id: "PromptTextarea.noModelsAvailablePlaceholder",
                defaultMessage: "No models available"
            },
            requiresPluginsToBeInstalled: {
                id: "PromptTextarea.requiresPluginsToBeInstalled",
                defaultMessage: "Requires plugins to be installed"
            },
            loading: {
                id: "PromptTextarea.loading",
                defaultMessage: "Loading..."
            },
            placeholder: {
                id: "PromptTextarea.placeholder",
                defaultMessage: "Send a message"
            },
            placeholderWithName: {
                id: "PromptTextarea.placeholderWithName",
                defaultMessage: "Message {name}…"
            },
            continueSharedConversationPlaceholder: {
                id: "PromptTextarea.continueSharedConversationPlaceholder",
                defaultMessage: "Send a message to continue the conversation."
            },
            sendMessageTooltip: {
                id: "PromptTextarea.sendMessageTooltip",
                defaultMessage: "Send message"
            },
            unsupportedFileType: {
                id: "PromptTextarea.unsupportedFileType",
                defaultMessage: 'Uploads with file type "{file_type}" are not supported, please try another file.'
            },
            shorter: {
                id: "PromptTextarea.shorter",
                defaultMessage: "Shorter"
            },
            longer: {
                id: "PromptTextarea.longer",
                defaultMessage: "Longer"
            },
            moreCreative: {
                id: "PromptTextarea.moreCreative",
                defaultMessage: "More creative"
            },
            moreCasual: {
                id: "PromptTextarea.moreCasual",
                defaultMessage: "More casual"
            },
            moreProfessional: {
                id: "PromptTextarea.moreProfessional",
                defaultMessage: "More professional"
            },
            regenerate: {
                id: "PromptTextarea.regenerate",
                defaultMessage: "Regenerate"
            },
            targetedReply: {
                id: "PromptTextarea.targetedReply",
                defaultMessage: "Replying to:"
            },
            gizmoKnowledgeWarning: {
                id: "PromptTextarea.gizmoKnowledgeWarning",
                defaultMessage: "Files uploaded here may be included in conversations with your GPT. Files can be downloaded if Code Interpreter is enabled."
            }
        })
          , nV = n(85064)
          , nG = n(65448);
        function nH(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function nW(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nH(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nH(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function nQ(e) {
            var t = e.clientThreadId
              , n = e.isNewThread
              , a = e.currentModelId
              , r = e.showPromptStarters
              , i = e.onRequestCompletion
              , s = e.onNewThreadCreationFinished
              , o = e.promptTextareaRef
              , l = (0,
            eo.B$)()
              , d = (0,
            ee.qN)(function(e) {
                var n, a, r, i, s, o;
                return s = (null === (a = (n = ee.iN.getCurrentNode(t, e)).message) || void 0 === a ? void 0 : a.author.role) === K.uU.User,
                o = (null === (r = n.metadata) || void 0 === r ? void 0 : r.err) != null && (null === (i = n.metadata) || void 0 === i ? void 0 : i.errCode) !== t$.qS.ContentPolicy,
                s || o
            });
            return !l && d ? (0,
            ew.jsx)(n$, {
                clientThreadId: t
            }) : (0,
            ew.jsx)(tK.Z, {
                children: (0,
                ew.jsx)(nX, {
                    clientThreadId: t,
                    currentModelId: a,
                    isNewThread: n,
                    showPromptStarters: r,
                    onRequestCompletion: i,
                    onNewThreadCreationFinished: s,
                    promptTextareaRef: o
                })
            })
        }
        function n$(e) {
            var t = e.clientThreadId
              , n = (0,
            nG.Z)(t)
              , a = (0,
            tM.WA)(t)
              , r = (0,
            ee.qN)(function(e) {
                var n;
                return (null === (n = ee.iN.getCurrentNode(t, e).metadata) || void 0 === n ? void 0 : n.errCode) === nV.uU
            })
              , i = (0,
            nV.Y8)(function(e) {
                return e.isoDate
            })
              , s = (0,
            er.w$)()
              , o = (0,
            ee.oq)(t);
            return r && null != i && "" !== i ? null : (0,
            ew.jsxs)("div", {
                children: [(0,
                ew.jsx)("div", {
                    className: "mb-3 text-center text-xs",
                    children: (0,
                    ew.jsx)(Q.Z, nW({}, nK.errorGeneratingResponse))
                }), (0,
                ew.jsx)("div", {
                    className: "flex items-center md:mb-4",
                    children: (0,
                    ew.jsxs)(eB.z, {
                        as: "button",
                        color: "primary",
                        onClick: function() {
                            n({
                                id: o,
                                eventMetadata: {
                                    eventSource: "mouse"
                                },
                                conversationMode: a
                            })
                        },
                        className: "m-auto",
                        children: [(0,
                        ew.jsx)(G.Qxo, {
                            className: (0,
                            eu.default)("flex-shrink-0", s ? "icon-xs" : "icon-sm")
                        }), (0,
                        ew.jsx)(Q.Z, nW({}, nK.regenerateResponse))]
                    })
                })]
            })
        }
        function nX(e) {
            var t, n, a, r, i, s, o, l, d, c, u, m, f, p, x, g, h, y = e.clientThreadId, v = e.currentModelId, k = e.isNewThread, b = e.onRequestCompletion, j = e.onNewThreadCreationFinished, w = e.promptTextareaRef, M = e.showPromptStarters, C = (0,
            ee.oq)(y), T = (0,
            ee.Hk)(y), P = (0,
            el.i)(), O = (0,
            eo.Yk)(T), I = (0,
            tM.WA)(y), S = (0,
            V.useCallback)(function(e) {
                R.A.logEvent(F.M.continueCompletion),
                b({
                    type: K.Os.Continue,
                    promptId: e,
                    eventMetadata: {
                        eventSource: "mouse"
                    },
                    cancelActiveRequests: !1,
                    completionMetadata: {
                        conversationMode: I
                    }
                })
            }, [b, I]), N = (0,
            V.useCallback)(function(e, t) {
                var n, a = ee.tQ.getTree(y);
                a.hasReceivedServerCompletion || (0,
                tX.YK)() || (null === (n = a.getParent(t).metadata) || void 0 === n ? void 0 : n.errCode) === t$.qS.ContentPolicy || setTimeout(function() {
                    j()
                }, 500),
                eo.hx.abortRequest(t) && ee.tQ.updateTree(y, function(e) {
                    var t = ee.tQ.getThreadCurrentLeafId(y);
                    e.updateNodeMessageMetadata(t, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
                })
            }, [j, y]), D = (0,
            V.useCallback)(function(e) {
                var t = e.promptId
                  , n = e.content
                  , a = e.eventMetadata
                  , r = e.completionMetadata
                  , i = e.messageMetadata
                  , s = e.appendMessages
                  , o = ee.tQ.getThreadCurrentLeafId(y);
                ee.tQ.setNewThreadConversationModeMetadata(y, null == r ? void 0 : r.conversationMode),
                ee.tQ.updateTree(y, function(e) {
                    e.addNode(t, n, o, K.uU.User, void 0, i)
                }),
                b({
                    type: K.Os.Next,
                    promptId: t,
                    eventMetadata: a,
                    cancelActiveRequests: !0,
                    completionMetadata: r,
                    appendMessages: s
                })
            }, [y, b]), Z = (0,
            ee.lA)(y, C), E = (0,
            ee.dz)(y, C), A = (0,
            eo.Yk)(T), L = (0,
            V.useMemo)(function() {
                return !A && !Z && E
            }, [Z, E, A]), q = (0,
            ee.Kt)(y), B = (i = (0,
            td.hz)(),
            s = (0,
            tM.WA)(y),
            o = (0,
            _.Po)(y),
            d = (l = (0,
            tu.Q)()).gizmoEditorData,
            c = l.mode,
            u = s.kind === K.OL.GizmoMagicCreate || s.kind === K.OL.GizmoTest || s.kind === K.OL.GizmoInteraction,
            f = (m = (0,
            eE.a)({
                queryKey: ["promptStarters", y],
                queryFn: function() {
                    return Y.ZP.getSampledPromptStarter(4)
                },
                enabled: null !== (t = null == i ? void 0 : i.includes(J.Zz)) && void 0 !== t && t && k && !q && !u
            })).data,
            p = m.isLoading,
            x = m.isSuccess,
            null != i && i.includes(J.Zz) ? "test" === c && d ? {
                promptStarters: null !== (n = null === (a = d.promptStarters) || void 0 === a ? void 0 : a.map(function(e) {
                    return {
                        title: "",
                        body: e,
                        prompt: e
                    }
                })) && void 0 !== n ? n : [],
                isLoading: !1,
                isSuccess: !0
            } : null != o ? {
                promptStarters: null === (r = o.gizmo.display.prompt_starters) || void 0 === r ? void 0 : r.map(function(e) {
                    return {
                        title: "",
                        body: e,
                        prompt: e
                    }
                }),
                isLoading: !1,
                isSuccess: !0
            } : {
                promptStarters: (null == f ? void 0 : f.items.map(function(e) {
                    return {
                        title: e.title,
                        body: e.description,
                        prompt: e.prompt
                    }
                })) || [],
                isLoading: p,
                isSuccess: x
            } : {
                promptStarters: [],
                isLoading: !1,
                isSuccess: !0
            }), z = B.promptStarters, U = B.isSuccess, G = nv(function(e) {
                return e.data
            }), H = (null == G ? void 0 : G.messageId) === (null === (g = ee.tQ.getTree(y).getLastValidNode(C)) || void 0 === g ? void 0 : null === (h = g.message) || void 0 === h ? void 0 : h.id) ? null == G ? void 0 : G.suggestions : M && !q && U ? z : void 0, W = (0,
            tS.iu)().size ? P.displayingSideBySideFeedback && P.unskippable ? "feedbackRequired" : null : "noModelsAvailable", Q = (0,
            ee.r7)(y);
            return (0,
            ew.jsx)(nO, {
                clientThreadId: y,
                onCreateNewCompletion: D,
                onAbortCompletion: N,
                onContinueGenerating: S,
                currentModelId: v,
                isNewThread: k,
                isCompletionInProgress: O,
                className: "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl",
                canContinue: L,
                suggestions: null != H ? H : [],
                disabled: !!W,
                disabledReason: null != W ? W : void 0,
                canPause: A && "gpt-4-pbrowse" !== v,
                isInteractableSharedThread: Q,
                ref: w
            }, y)
        }
        var nK = (0,
        W.vU)({
            errorGeneratingResponse: {
                id: "PromptTextarea.errorGeneratingResponse",
                defaultMessage: "There was an error generating a response"
            },
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate"
            }
        })
          , nY = n(77986)
          , nJ = n(24047);
        function n0(e) {
            return n9.apply(this, arguments)
        }
        function n9() {
            return (n9 = (0,
            O.Z)(N().mark(function e(t) {
                var n, a;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return (n = (0,
                            ed.Z)(t.queryKey, 2))[0],
                            a = n[1],
                            e.next = 3,
                            Y.ZP.getThreadInterpreterState(a).then(function(e) {
                                return 0 === e.time_remaining_ms && e.kernel_started && ej.m.warning("This advanced data analysis (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.", {
                                    hasCloseButton: !0,
                                    duration: 0
                                }),
                                e
                            });
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        var n1 = n(13366)
          , n2 = n(29703)
          , n5 = n(21775)
          , n3 = n(71690)
          , n6 = n(17080)
          , n4 = n(3359)
          , n7 = n(2454);
        function n8(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n8(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n8(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        (r = w || (w = {}))[r.GPT_AVAILABLE = 0] = "GPT_AVAILABLE",
        r[r.GPT_UNAVAILABLE = 1] = "GPT_UNAVAILABLE",
        r[r.DEFAULT_GPT = 2] = "DEFAULT_GPT";
        var at = function(e) {
            var t = e.threadData;
            return e.gizmo ? w.GPT_AVAILABLE : null != t.gizmoId ? w.GPT_UNAVAILABLE : w.DEFAULT_GPT
        }
          , an = function(e) {
            var t = e.clientThreadId
              , n = (0,
            td.t)()
              , a = null == n ? void 0 : n.canInteractWithGizmos()
              , r = (0,
            ee.UL)(t)
              , i = (0,
            _.kg)(r.gizmoId)
              , s = i.data;
            if (i.isLoading || void 0 === a)
                return null;
            if (!(null != n && n.hasPlusFeatures()) && !1 === a)
                return s ? (0,
                ew.jsx)(n7.p, {
                    href: (0,
                    _.m_)(s),
                    children: (0,
                    ew.jsx)("div", {
                        children: (0,
                        ew.jsx)(Q.Z, ae(ae({}, aa.userUpgrade), {}, {
                            values: {
                                gizmoName: null == s ? void 0 : s.gizmo.display.name,
                                bolded: function(e) {
                                    return (0,
                                    ew.jsx)("span", {
                                        className: "font-bold",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })
                }) : (0,
                ew.jsx)(n7.p, {
                    href: (0,
                    es.cy)(),
                    children: (0,
                    ew.jsx)("div", {
                        children: (0,
                        ew.jsx)(Q.Z, ae(ae({}, aa.userUpgradeNoGizmo), {}, {
                            values: {
                                bolded: function(e) {
                                    return (0,
                                    ew.jsx)("span", {
                                        className: "font-bold",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })
                });
            var o = at({
                threadData: r,
                gizmo: s
            });
            return function() {
                switch (o) {
                case w.GPT_AVAILABLE:
                    if (!s)
                        return null;
                    return (0,
                    ew.jsx)(n7.p, {
                        href: (0,
                        _.m_)(s),
                        children: (0,
                        ew.jsx)("div", {
                            children: (0,
                            ew.jsx)(Q.Z, ae(ae({}, aa.gptAvailable), {}, {
                                values: {
                                    gizmoName: null == s ? void 0 : s.gizmo.display.name,
                                    bolded: function(e) {
                                        return (0,
                                        ew.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    });
                case w.GPT_UNAVAILABLE:
                    if (!(null != n && n.canCreateGizmos()))
                        return (0,
                        ew.jsx)(n7.p, {
                            href: "/",
                            children: (0,
                            ew.jsx)("div", {
                                children: (0,
                                ew.jsx)(Q.Z, ae(ae({}, aa.gptDefault), {}, {
                                    values: {
                                        bolded: function(e) {
                                            return (0,
                                            ew.jsx)("span", {
                                                className: "font-bold",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        });
                    return (0,
                    ew.jsx)(n7.p, {
                        href: (0,
                        es.AA)(),
                        children: (0,
                        ew.jsx)("div", {
                            children: (0,
                            ew.jsx)(Q.Z, ae(ae({}, aa.gptUnavailable), {}, {
                                values: {
                                    bolded: function(e) {
                                        return (0,
                                        ew.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    });
                case w.DEFAULT_GPT:
                default:
                    return (0,
                    ew.jsx)(n7.p, {
                        href: "/",
                        children: (0,
                        ew.jsx)("div", {
                            children: (0,
                            ew.jsx)(Q.Z, ae(ae({}, aa.gptDefault), {}, {
                                values: {
                                    bolded: function(e) {
                                        return (0,
                                        ew.jsx)("span", {
                                            className: "font-bold",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    })
                }
            }()
        }
          , aa = (0,
        W.vU)({
            gptAvailable: {
                id: "GizmoSharedConversationCTA.gptAvailable",
                defaultMessage: "Chat with <bolded>{gizmoName}</bolded> on ChatGPT"
            },
            gptUnavailable: {
                id: "GizmoSharedConversationCTA.gptUnavailable",
                defaultMessage: "Create your own <bolded>GPT</bolded>"
            },
            gptDefault: {
                id: "GizmoSharedConversationCTA.gptDefault",
                defaultMessage: "Get started with <bolded>ChatGPT</bolded>"
            },
            userUpgrade: {
                id: "GizmoSharedConversationCTA.userUpgrade",
                defaultMessage: "Upgrade to Plus to chat with <bolded>{gizmoName}</bolded>"
            },
            userUpgradeNoGizmo: {
                id: "GizmoSharedConversationCTA.userUpgradeNoGizmo",
                defaultMessage: "Upgrade to Plus to create your own <bolded>GPT</bolded>"
            }
        });
        function ar(e) {
            var t = e.clientThreadId
              , n = e.isModeratingThread
              , a = e.continueConversationUrl
              , r = (0,
            td.hz)()
              , i = (0,
            ex.Z)();
            return (0,
            ew.jsxs)("div", {
                className: "relative flex w-full flex-1 items-center justify-center gap-2 pt-3 empty:hidden",
                children: [(0,
                ew.jsx)(an, {
                    clientThreadId: t
                }), n && (0,
                ew.jsx)(eB.z, {
                    onClick: function() {
                        et.vm.openModal(et.B.SharedConversationModeration)
                    },
                    children: i.formatMessage({
                        id: "thread.sharedConversation.moderate",
                        defaultMessage: "Moderate conversation"
                    })
                }), (null == r ? void 0 : r.includes("debug")) && a && (0,
                ew.jsxs)(eB.z, {
                    color: "neutral",
                    as: "link",
                    to: a,
                    children: [(0,
                    ew.jsx)(tb.sUY, {
                        className: "icon-sm"
                    }), i.formatMessage({
                        id: "thread.sharedConversation.continue",
                        defaultMessage: "Continue this conversation"
                    })]
                })]
            })
        }
        function ai(e) {
            var t = e.onClickReportSharedConversation;
            return (0,
            ew.jsxs)("div", {
                className: "flex justify-center gap-3 text-gray-500",
                children: [(0,
                ew.jsx)("button", {
                    onClick: function() {
                        t()
                    },
                    children: (0,
                    ew.jsx)(Q.Z, {
                        id: "thread.reportSharedConversation",
                        defaultMessage: "Report content"
                    })
                }), (0,
                ew.jsx)(as, {}), (0,
                ew.jsx)("a", {
                    href: "https://openai.com/policies/terms-of-use",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    ew.jsx)(Q.Z, {
                        id: "thread.termsOfUse",
                        defaultMessage: "Terms of use"
                    })
                }), (0,
                ew.jsx)(as, {}), (0,
                ew.jsx)("a", {
                    href: "https://openai.com/policies/privacy-policy",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0,
                    ew.jsx)(Q.Z, {
                        id: "thread.privacyPolicy",
                        defaultMessage: "Privacy policy"
                    })
                }), (0,
                ew.jsx)(as, {}), (0,
                ew.jsx)("button", {
                    onClick: function() {
                        return et.vm.openModal(et.B.CookieManagement)
                    },
                    children: (0,
                    ew.jsx)(Q.Z, {
                        id: "thread.cookieManager",
                        defaultMessage: "Manage cookies"
                    })
                })]
            })
        }
        var as = function() {
            return (0,
            ew.jsx)("span", {
                children: "|"
            })
        }
          , ao = ["m"];
        function al(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ad(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? al(Object(n), !0).forEach(function(t) {
                    (0,
                    I.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var ac = A()(function() {
            return Promise.all([n.e(1966), n.e(9387)]).then(n.bind(n, 39387))
        }, {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [39387]
                }
            }
        })
          , au = (0,
        W.vU)({
            doNotShareSensitive: {
                id: "thread.modal.onboarding.title",
                defaultMessage: "Do not share sensitive materials with this application"
            },
            mayProduceInaccurateInformation: {
                id: "thread.chatgptMayProduceInaccurateInformation-oct-30",
                defaultMessage: "ChatGPT can make mistakes. Consider checking important information."
            },
            businessDisclaimer: {
                id: "thread.businessDisclaimer-oct-30",
                defaultMessage: "{workspaceName} workspace chats aren't used to train our models. ChatGPT can make mistakes."
            },
            businessDisclaimerNoName: {
                id: "thread.businessDisclaimerNoName-oct-30",
                defaultMessage: "Your workspace chats aren'ts used to train our models. ChatGPT can make mistakes."
            },
            outdatedGptDisclaimer: {
                id: "thread.outdatedGptDisclaimer.0",
                defaultMessage: "<bold>New version of GPT available</bold> - Continue chatting to use the old version, or start a <link>new chat</link> for the latest version."
            },
            somethingWentWrong: {
                id: "thread.modal.unrecoverableError.title",
                defaultMessage: "Something went wrong"
            },
            tryAgainLater: {
                id: "thread.modal.unrecoverableError.description",
                defaultMessage: "We're sorry, but something went wrong. Please try again later."
            },
            resetThread: {
                id: "thread.modal.unrecoverableError.resetThread",
                defaultMessage: "Reset thread"
            },
            sharedConversationReportConversation: {
                id: "thread.sharedConversation.report",
                defaultMessage: "Report conversation"
            },
            latencyButton: {
                id: "thread.latencyButton",
                defaultMessage: "Latency"
            }
        });
        function am(e) {
            var t = e.clientThreadId
              , n = (0,
            ee.UL)(t)
              , a = null == n ? void 0 : n.gizmoId;
            return null != a ? (0,
            ew.jsx)(af, {
                clientThreadId: t,
                gizmoId: a
            }) : (0,
            ew.jsx)(ap, {})
        }
        function af(e) {
            var t = e.clientThreadId
              , n = e.gizmoId
              , a = (0,
            _.b9)(n).data
              , r = (0,
            ee.qN)(function(e) {
                return ee.iN.getThreadCreateTime(t, e)
            })
              , i = (null == a ? void 0 : a.gizmo.updated_at) != null ? new Date(a.gizmo.updated_at) : void 0;
            return (null == a ? void 0 : a.gizmo.short_url) == null || null == i || null == r || i <= r ? (0,
            ew.jsx)(ap, {}) : (0,
            ew.jsxs)("span", {
                className: "text-gray-500",
                children: [(0,
                ew.jsx)(H.h5O, {
                    className: "text-token-secondary mb-1 mr-1 inline-block h-4 w-4 stroke-0"
                }), (0,
                ew.jsx)(Q.Z, ad(ad({}, au.outdatedGptDisclaimer), {}, {
                    values: {
                        link: function(e) {
                            return (0,
                            ew.jsx)(z(), {
                                href: (0,
                                _.un)(a.gizmo.short_url),
                                className: "underline",
                                shallow: !0,
                                children: e
                            })
                        },
                        bold: function(e) {
                            return (0,
                            ew.jsx)("span", {
                                className: "text-token-secondary font-semibold",
                                children: e
                            })
                        }
                    }
                }))]
            })
        }
        function ap() {
            var e = (0,
            en.ec)(en.F_.isBusinessWorkspace)
              , t = (0,
            en.ec)(function(e) {
                return e.currentWorkspace
            })
              , n = null == t ? void 0 : t.name;
            return e ? (0,
            ew.jsx)("span", {
                children: null != n ? (0,
                ew.jsx)(Q.Z, ad(ad({}, au.businessDisclaimer), {}, {
                    values: {
                        workspaceName: n
                    }
                })) : (0,
                ew.jsx)(Q.Z, ad({}, au.businessDisclaimerNoName))
            }) : (0,
            ew.jsx)("span", {
                children: (0,
                ew.jsx)(Q.Z, ad({}, au.mayProduceInaccurateInformation))
            })
        }
        var ax = function(e) {
            var t, n, a, r, i, s, o, l, d, c, u, m, f, p, x, g, h = e.initialThreadData, y = e.clientThreadId, v = e.initiallyHighlightedMessageId, k = e.continueConversationUrl, b = e.onCompletionFinished, j = e.preRequestCompletion, w = e.hideHeader, M = e.prependThreadChildren, C = e.renderEmptyState, T = null !== (0,
            V.useContext)(ea.gB), I = (0,
            td.t)(), S = (0,
            td.hz)(), E = (0,
            n5.Nw)(t7.ev.PLUGINS, S), A = (0,
            er.w$)(), L = (0,
            el.i)(), B = (0,
            tM.Wq)(y), z = (0,
            tS.Y7)().data, H = (0,
            U.useRouter)(), W = T && (null === (m = H.query) || void 0 === m ? void 0 : null === (f = m.shareParams) || void 0 === f ? void 0 : f[1]) === "moderate", Q = (0,
            ee.Kt)(y), $ = (0,
            ee.oq)(y), en = (0,
            ee.Yk)(y, $), ed = (0,
            ee.U0)(y, $), ec = (0,
            ee.je)(y), eu = (0,
            V.useState)(), em = eu[0], ef = eu[1], ep = (0,
            V.useState)(), ex = ep[0], eg = ep[1], eh = (0,
            V.useState)(), ey = eh[0], ev = eh[1], ek = (0,
            V.useState)(), eb = ek[0], ej = ek[1], eM = null == S ? void 0 : S.includes(J.AL), eC = (0,
            e0.p0)(), eP = ed >= 2, eO = (0,
            ee.Zz)(y) && !eP && (0,
            tM.HE)(B), eI = (0,
            ee.Zz)(y) && !en && ((0,
            tM.HE)(B) || B.kind === K.OL.GizmoTest), eS = null === (p = (0,
            tS.BC)(z, I)) || void 0 === p ? void 0 : p.id, eN = null !== (x = (0,
            tS.Bv)(h.lastModelUsed, y)) && void 0 !== x ? x : eS, e_ = (0,
            tS.B9)()[eN], eD = (0,
            nY.iF)(), eR = (0,
            V.useCallback)(function() {
                eD(),
                R.A.logEvent(F.M.newThread)
            }, [eD]), eA = (r = (0,
            ee.Zz)(y),
            i = ee.tQ.getTitle(y),
            B.kind === K.OL.GizmoInteraction && B.gizmo ? r ? "ChatGPT - ".concat(B.gizmo.gizmo.display.name) : i ? "".concat(B.gizmo.gizmo.display.name, " - ").concat(i) : i : r ? "ChatGPT" : i), eL = (0,
            tM.WA)(y), eq = (0,
            V.useCallback)(function(e) {
                if (!(0,
                tX.YK)() && e) {
                    var t = ee.tQ.getTree(e).getMessageId(ee.tQ.getThreadCurrentLeafId(e));
                    if (Y.ZP.generateTitle(e, t, eN).then(function(t) {
                        var n = t.title;
                        ee.tQ.setTitle(e, n, ee._L.Generated),
                        eD(),
                        R.A.logEvent(F.M.renameThread, {
                            threadId: e,
                            content: n,
                            model: eN
                        })
                    }).catch(function(e) {
                        console.error(e)
                    }),
                    (0,
                    tM.HE)(B)) {
                        var n = function() {
                            H.push((0,
                            es.ZV)(e), void 0, {
                                shallow: !0
                            })
                        }
                          , a = ee.iN.getGizmoId(y);
                        null != a ? (0,
                        _.F0)(a).then(function(t) {
                            history.pushState({}, "", (0,
                            es.ZV)(e, t))
                        }).catch(function(e) {
                            console.error(e),
                            n()
                        }) : n()
                    }
                }
            }, [y, eN, eD, H, B]);
            (0,
            V.useEffect)(function() {
                nj()
            }, []);
            var eB = (0,
            V.useCallback)(function(e) {
                if (!(null == e || (null == b || b(e),
                (0,
                tX.YK)())) && (eL.kind === K.OL.GizmoInteraction && _.D2.handleGizmoInteracted(eL.gizmo_id),
                (null === (t = (0,
                td.N$)()) || void 0 === t ? void 0 : t.includes(J.uj)) && !L.displayingSideBySideFeedback)) {
                    var t, n = ee.tQ.getThreadCurrentLeafId(e), a = ee.tQ.getTree(e).getMessage(n);
                    (0,
                    ei.lD)(a) || (0,
                    ei.JD)(a) || nb(e, a.id, eN)
                }
            }, [eN, L.displayingSideBySideFeedback, b, eL])
              , ez = (0,
            ee.Uy)(y)
              , eU = E && null != e_ && null !== (g = e_.enabledTools) && void 0 !== g && g.includes("tools3") ? eC : void 0
              , eV = null == eU ? void 0 : eU.map(function(e) {
                return e.id
            })
              , eG = (0,
            nJ.Z)(y, ez, eR, eq, eB, eV)
              , eW = (0,
            V.useCallback)(function() {
                var e = ee.tQ.getThreadCurrentLeafId(y);
                if (null != e) {
                    var t = ee.tQ.getTree(y).getBranchFromLeaf(e);
                    eo.hx.abortRequests(t.map(function(e) {
                        return e.id
                    }))
                }
            }, [y])
              , eQ = (0,
            tQ.N)()
              , e$ = (0,
            V.useCallback)((s = (0,
            O.Z)(N().mark(function e(t) {
                var n, a, r, i, s, o, l, d, c, u, m, f, p, x, g, h;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.type,
                            i = t.promptId,
                            s = t.eventMetadata,
                            o = t.cancelActiveRequests,
                            d = void 0 === (l = t.focusOnNewCompletion) || l,
                            c = t.useDefaultModel,
                            u = t.completionMetadata,
                            m = t.appendMessages,
                            nj(),
                            o && eW(),
                            f = performance.now(),
                            p = c ? eS : eN,
                            x = null === (n = (0,
                            tS.P6)(p)) || void 0 === n ? void 0 : n.tags,
                            g = u.conversationMode,
                            !(0,
                            D.Rr)(S, null != x ? x : [], g.kind)) {
                                e.next = 12;
                                break
                            }
                            return e.next = 11,
                            D.ZP.getEnforcementToken(null != x ? x : []);
                        case 11:
                            h = e.sent;
                        case 12:
                            null == j || j(y, i),
                            eG({
                                model: p,
                                completionType: r,
                                parentNodeId: i,
                                metadata: s,
                                focusOnNewCompletion: d,
                                completionMetadata: u,
                                arkoseToken: null !== (a = h) && void 0 !== a ? a : null,
                                preflightTime: performance.now() - f,
                                extraStreamParams: {
                                    forceParagen: eQ.forceParagen,
                                    forceRateLimit: eQ.forceRateLimit,
                                    disableSystemContentToggling: !!eQ.rebaseSystemMessageContent || void 0
                                },
                                appendMessages: m
                            });
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e) {
                return s.apply(this, arguments)
            }
            ), [eS, eN, S, j, y, eG, eQ.forceParagen, eQ.forceRateLimit, eQ.rebaseSystemMessageContent, eW])
              , eX = (0,
            V.useCallback)(function(e, t, n, a) {
                ee.tQ.updateTree(y, function(r) {
                    r.addNode(e, n, t, K.uU.User, void 0, a)
                })
            }, [y])
              , eY = (0,
            V.useCallback)((o = (0,
            O.Z)(N().mark(function e(t, n, a, r) {
                var i, s;
                return N().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            i = n.content,
                            s = n.attachments,
                            ee.tQ.setNewThreadConversationModeMetadata(y, r.conversationMode),
                            eX(t, $, i, s.length > 0 ? {
                                attachments: s
                            } : {}),
                            e$({
                                type: K.Os.Next,
                                promptId: t,
                                eventMetadata: a,
                                cancelActiveRequests: !0,
                                completionMetadata: r
                            });
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t, n, a) {
                return o.apply(this, arguments)
            }
            ), [y, eX, e$, $])
              , eJ = (0,
            V.useRef)(!1)
              , e9 = (0,
            tS.B8)()
              , e2 = (0,
            Z.kP)().session;
            (0,
            V.useEffect)(function() {
                if (e2 && void 0 !== e_ && (void 0 === e_.enabledTools || !(e_.enabledTools.length > 0)) && null != S && S.includes(J.Yj) && 0 !== e9.enabledModelsInCategoriesById.size && !eJ.current && void 0 === ee.tQ.getServerThreadId(y)) {
                    var e, t = H.query, n = t.m, a = (0,
                    P.Z)(t, ao);
                    if (void 0 !== n) {
                        e = Array.isArray(n) ? n[0] : n;
                        var r = (0,
                        X.Z)();
                        eJ.current = !0,
                        eY(r, {
                            content: e,
                            attachments: []
                        }, {
                            eventSource: "url"
                        }, {
                            conversationMode: eL
                        }),
                        H.replace({
                            pathname: H.pathname,
                            query: a
                        }, void 0, {
                            shallow: !0
                        })
                    }
                }
            }, [e_, H, eY, e2, e9, S, y, eL]);
            var e5 = (0,
            V.useCallback)(function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
                  , r = arguments.length > 4 ? arguments[4] : void 0
                  , i = ee.tQ.getTree(y).getParentPromptNode(e).id;
                e$({
                    type: K.Os.Variant,
                    promptId: i,
                    eventMetadata: t,
                    cancelActiveRequests: !1,
                    focusOnNewCompletion: n,
                    useDefaultModel: r,
                    completionMetadata: {
                        variantPurpose: a,
                        conversationMode: eL
                    }
                })
            }, [e$, y, eL])
              , e6 = (0,
            V.useCallback)(function(e) {
                var t = ee.tQ.getTree(y).getLeafFromNode(e);
                ee.tQ.setThreadCurrentLeafId(y, t.id)
            }, [y])
              , e7 = (0,
            V.useCallback)(function(e, t, n) {
                var a = ee.tQ.getServerThreadId(y);
                if (R.A.logEvent(F.M.thumbRating, {
                    id: t,
                    threadId: a,
                    rating: n,
                    model: eN
                }),
                void 0 !== a && Y.ZP.submitMessageFeedback({
                    message_id: t,
                    conversation_id: a,
                    rating: n
                }),
                ev(e),
                ej(t),
                eg(n),
                ee.tQ.updateTree(y, function(t) {
                    t.updateNodeMetadata(e, {
                        rating: n
                    })
                }),
                "thumbsDown" === n && A) {
                    var r = ee.tQ.getTree(y).getConversationTurns(e || "root");
                    eT(r[r.length - 1]) && e5(e, {
                        eventSource: "mouse",
                        intent: "comparison"
                    }, !1, "comparison")
                }
            }, [y, eN, A, e5])
              , e8 = (0,
            e4.tS)(function(e) {
                return {
                    showEmbeddedPaymentModal: e.showEmbeddedPaymentModal,
                    setShowEmbeddedPaymentModal: e.setShowEmbeddedPaymentModal
                }
            })
              , te = e8.showEmbeddedPaymentModal
              , tt = e8.setShowEmbeddedPaymentModal
              , tn = (0,
            eK.C)(function(e) {
                return {
                    setShowReferralInviteModal: e.setShowReferralInviteModal
                }
            }).setShowReferralInviteModal
              , ta = (0,
            V.useCallback)(function() {
                tt(!1)
            }, [tt])
              , tr = (0,
            V.useCallback)(function() {
                tn(!1)
            }, [tn])
              , ti = (0,
            V.useRef)(null)
              , ts = (0,
            ee.XK)(y)
              , to = (0,
            et.tN)(function(e) {
                return e.sharingModalThreadId === ts
            })
              , tl = (0,
            eK.C)(function(e) {
                return e.showReferralInviteModal
            });
            return d = (l = {
                clientThreadId: y,
                currentModelId: eN
            }).clientThreadId,
            c = l.currentModelId,
            t = (0,
            tN.i0)(c, tN.dN.CODE_INTERPRETER),
            n = null !== (0,
            V.useContext)(ea.gB),
            a = ee.tQ.getServerThreadId(d),
            (0,
            eE.a)({
                queryKey: ["interpreterState", a],
                queryFn: n0,
                enabled: !!(t && a && !n),
                gcTime: 0
            }),
            (0,
            ew.jsxs)(ew.Fragment, {
                children: [eM && (0,
                ew.jsx)(ac, {}), (0,
                ew.jsxs)(q(), {
                    children: [null != eA && (0,
                    ew.jsx)("title", {
                        children: eA
                    }), T && (0,
                    ew.jsxs)(ew.Fragment, {
                        children: [(0,
                        ew.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }), (0,
                        ew.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }, "robots"), (0,
                        ew.jsx)("meta", {
                            property: "og:title",
                            content: null != eA ? eA : "Shared Chat on ChatGPT"
                        }, "og:title"), (0,
                        ew.jsx)("meta", {
                            property: "og:description",
                            content: "Shared " + (null != ec ? "by ".concat(ec, " ") : "") + "via ChatGPT"
                        }, "og:description"), (0,
                        ew.jsx)("meta", {
                            property: "og:image",
                            content: n3.Z.src
                        }, "og:image")]
                    })]
                }), B.kind === K.OL.GizmoInteraction && B.gizmo && (0,
                ew.jsx)(n2.N, {
                    gizmo: B.gizmo
                }), (0,
                ew.jsxs)(ea.OV.Provider, {
                    value: e$,
                    children: [null != S && S.includes(J.i) ? (0,
                    ew.jsx)(e1, {}) : null, to && null != ts && (0,
                    ew.jsx)(tE, {
                        serverThreadId: ts,
                        currentThreadModel: h.lastModelUsed
                    }), (0,
                    ew.jsxs)(eF.ZP, {
                        clientThreadId: y,
                        currentModelConfig: e_,
                        className: "flex h-full flex-col",
                        children: [(0,
                        ew.jsx)(ag, {
                            children: Q ? null : eI ? null != C ? C : (0,
                            ew.jsx)(n6.iD, {
                                clientThreadId: y
                            }) : eP ? (u = (0,
                            ew.jsxs)(ew.Fragment, {
                                children: [M, (0,
                                ew.jsx)(t_, {
                                    onChangeItemInView: e6,
                                    onRequestMoreCompletions: e5,
                                    onChangeRating: e7,
                                    onRequestCompletion: e$,
                                    clientThreadId: y,
                                    currentThreadModel: h.lastModelUsed,
                                    initiallyHighlightedMessageId: v,
                                    inlineEmbeddedDisplay: !1,
                                    conversationLeafId: $,
                                    hideHeader: w
                                }, y)]
                            }),
                            T ? (0,
                            ew.jsx)("div", {
                                className: "h-full overflow-auto dark:bg-gray-800",
                                children: u
                            }) : (0,
                            ew.jsx)(n1.I, {
                                children: u
                            })) : null
                        }), (0,
                        ew.jsxs)(ah, {
                            children: [T ? (0,
                            ew.jsx)(ar, {
                                clientThreadId: y,
                                isModeratingThread: W,
                                continueConversationUrl: k
                            }) : (0,
                            ew.jsx)(nQ, {
                                clientThreadId: y,
                                isNewThread: eO,
                                showPromptStarters: eO || !en,
                                currentModelId: eN,
                                onRequestCompletion: e$,
                                onNewThreadCreationFinished: eq,
                                promptTextareaRef: ti
                            }), (0,
                            ew.jsx)("div", {
                                className: "relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]",
                                children: T ? (0,
                                ew.jsx)(ai, {
                                    onClickReportSharedConversation: function() {
                                        ef($)
                                    }
                                }) : (0,
                                tM.HE)(B) ? (0,
                                ew.jsx)(am, {
                                    clientThreadId: y
                                }) : null
                            })]
                        })]
                    }), (0,
                    ew.jsxs)("div", {
                        className: "group fixed bottom-3 right-3 z-10 hidden gap-1 lg:flex",
                        children: [eM && (0,
                        ew.jsx)("button", {
                            onClick: function() {
                                et.vm.showLatencyDevTools()
                            },
                            className: "box-content flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                            children: (0,
                            ew.jsx)(G.DKx, {
                                className: "icon-sm"
                            })
                        }), (0,
                        ew.jsx)(n4.Z, {})]
                    }), (0,
                    ew.jsx)(eZ, {
                        clientThreadId: y,
                        currentLeafId: $,
                        currentModelId: eN,
                        onChangeItemInView: e6,
                        onRequestMoreCompletions: e5,
                        onChangeRating: e7,
                        onRequestCompletion: e$,
                        ratingModalOpen: ex,
                        ratingModalNodeId: ey,
                        ratingModalCompletionId: eb,
                        sharedConversationReportModalNodeId: em,
                        setSharedConversationReportModalNodeId: ef,
                        setRatingModalOpen: eg
                    }), (0,
                    ew.jsx)(e3, {
                        isOpen: te,
                        onClose: ta
                    }), (null == S ? void 0 : S.includes(J.a3)) && (0,
                    ew.jsx)(eH, {
                        isOpen: tl,
                        onClose: tr
                    })]
                })]
            })
        }
          , ag = $.Z.div(M || (M = (0,
        T.Z)(["grow flex-1 overflow-hidden"])))
          , ah = $.Z.div(C || (C = (0,
        T.Z)(["w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:w-[calc(100%-.5rem)]"])))
    },
    13366: function(e, t, n) {
        "use strict";
        n.d(t, {
            I: function() {
                return o
            }
        });
        var a = n(5397)
          , r = n.n(a)
          , i = n(35250)
          , s = r()(function() {
            return Promise.resolve().then(n.bind(n, 40803))
        }, {
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [40803]
                }
            }
        });
        function o(e) {
            var t = e.children
              , n = e.scrollViewClassName;
            return (0,
            i.jsx)(s, {
                className: "h-full",
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                scrollViewClassName: n,
                children: t
            })
        }
    },
    73874: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return d
            }
        });
        var a = n(71950)
          , r = n(92347)
          , i = n(19841)
          , s = n(70079)
          , o = n(1454)
          , l = n(35250);
        function d(e) {
            var t = (0,
            s.useState)({
                width: 0,
                height: 0
            })
              , n = t[0]
              , d = t[1]
              , c = n.width / n.height
              , u = n.width > 0 && n.height > 0;
            return (0,
            s.useEffect)(function() {
                if (!e.src)
                    throw Error("ExpandableImage requires a src");
                var t = new Image;
                t.onload = function() {
                    d({
                        width: t.naturalWidth,
                        height: t.naturalHeight
                    })
                }
                ,
                t.onerror = function() {
                    r.D0 && console.error("Could not load image ".concat(e.src))
                }
                ,
                t.src = e.src
            }, [e.src]),
            (0,
            l.jsxs)(a.fC, {
                children: [(0,
                l.jsx)(a.xz, {
                    className: e.className,
                    disabled: !u,
                    children: e.children
                }), (0,
                l.jsx)(a.h_, {
                    children: (0,
                    l.jsxs)(a.aV, {
                        className: "fixed inset-0 flex items-center justify-center overflow-hidden bg-black/90 radix-state-open:animate-show dark:bg-black/80",
                        children: [(0,
                        l.jsx)(a.x8, {
                            asChild: !0,
                            children: (0,
                            l.jsx)("button", {
                                className: "absolute right-4 top-4 text-gray-50 transition hover:text-gray-200",
                                children: (0,
                                l.jsx)(o.q5L, {
                                    className: "h-5 w-5"
                                })
                            })
                        }), (0,
                        l.jsx)(a.VY, {
                            className: (0,
                            i.default)("relative max-h-[85vh] max-w-[90vw] shadow-xl focus:outline-none radix-state-open:animate-contentShow"),
                            style: {
                                aspectRatio: c
                            },
                            children: (0,
                            l.jsx)("img", {
                                src: e.src,
                                alt: e.alt,
                                className: "h-full w-full object-contain"
                            })
                        })]
                    })
                })]
            })
        }
    },
    7254: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return a
            }
        });
        var a = (0,
        n(78103).ZP)(function() {
            return {
                displayingSideBySideFeedback: !1,
                unskippable: !1
            }
        })
    },
    60624: function(e, t, n) {
        "use strict";
        n.d(t, {
            Sv: function() {
                return Z
            },
            UJ: function() {
                return D
            },
            ZP: function() {
                return _
            }
        });
        var a, r = n(90038), i = n(50134), s = n(6939), o = n(36112), l = n(4399), d = n.n(l), c = n(25349), u = n(99893), m = n(70079), f = n(76483), p = n(94968), x = n(70671), g = n(32004), h = n(21389), y = n(90439), v = n(4748), k = n(41543), b = n(41845), j = n(98911), w = n(90246), M = n(7525), C = n(31609), T = n(14402), P = n(55161), O = n(35250);
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach(function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var N = (0,
        p.vU)({
            dragInstructions: {
                id: "FileDropZone.dragInstructions",
                defaultMessage: "Add anything"
            },
            dragAllAccepted: {
                id: "FileDropZone.dragAllAccepted",
                defaultMessage: "Drop any file here to add it to the conversation"
            }
        });
        function _(e) {
            var t, n = e.className, a = e.children, r = e.clientThreadId, i = e.currentModelConfig, o = (0,
            x.Z)(), l = (0,
            k.Wq)(r), d = (0,
            P.YN)(i, l), c = d !== M.A.None, u = (0,
            T.gF)(function(e) {
                return e.files
            }), m = (d === M.A.Multimodal ? b.Ql : b.dO) - u.length, p = (0,
            y.Q)().getGizmoId, h = Z(o, (0,
            P.YN)(i, l), (0,
            P.p0)(i, l), "drag", p, null === (t = (0,
            P.ww)(i, l)) || void 0 === t ? void 0 : t.attachments).handleFileAccepted, v = (0,
            P.Z8)((0,
            P.Zp)(i, l)), w = (0,
            f.uI)(S({
                maxFiles: m,
                disabled: !c || m <= 0,
                noClick: !0,
                onDropAccepted: h,
                onDropRejected: function(e) {
                    return D(e, o, d)
                },
                multiple: !0,
                maxSize: b.xC
            }, v)), C = w.getRootProps, I = w.isDragActive, _ = function() {
                if (!v.accept || 0 === Object.keys(v.accept).length)
                    return [];
                var e = [];
                return Object.values(v.accept).forEach(function(t) {
                    return e.push.apply(e, (0,
                    s.Z)(t))
                }),
                e.sort()
            }();
            return (0,
            O.jsxs)("div", S(S({}, C({
                className: n
            })), {}, {
                children: [a, I && (0,
                O.jsxs)(R, {
                    children: [(0,
                    O.jsx)(j.Fk, {}), (0,
                    O.jsx)("h3", {
                        children: (0,
                        O.jsx)(g.Z, S({}, N.dragInstructions))
                    }), (0,
                    O.jsx)("h4", {
                        className: "w-2/3",
                        children: _.length > 0 ? _.join(", ") : (0,
                        O.jsx)(g.Z, S({}, N.dragAllAccepted))
                    })]
                })]
            }))
        }
        function D(e, t, n) {
            e[0].errors.forEach(function(e) {
                var a = (0,
                w.s)(e);
                "string" == typeof a ? v.m.danger(a, {
                    hasCloseButton: !0
                }) : v.m.danger(t.formatMessage(a, {
                    size: b.EZ,
                    maxNum: n === M.A.Multimodal ? b.Ql : b.dO
                }), {
                    hasCloseButton: !0
                })
            })
        }
        function Z(e, t, n, a, r, s) {
            var o;
            return {
                handleFileAccepted: (0,
                m.useCallback)((o = (0,
                i.Z)(d().mark(function i(o, l) {
                    var m;
                    return d().wrap(function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (c.A.logEvent(u.M.uploadFile, {
                                    eventSource: a,
                                    intent: t.toString()
                                }),
                                !(null != r)) {
                                    i.next = 7;
                                    break
                                }
                                return i.next = 4,
                                r();
                            case 4:
                                i.t0 = i.sent,
                                i.next = 8;
                                break;
                            case 7:
                                i.t0 = void 0;
                            case 8:
                                m = i.t0,
                                o.length > 0 && o.forEach(function(a) {
                                    T.Dw.uploadFile((0,
                                    C.W7)(a), a, t, n, e, {
                                        gizmoId: m
                                    }, s)
                                });
                            case 10:
                            case "end":
                                return i.stop()
                            }
                    }, i)
                })),
                function(e, t) {
                    return o.apply(this, arguments)
                }
                ), [a, t, r, n, e, s])
            }
        }
        var R = h.Z.div(a || (a = (0,
        r.Z)(["absolute inset-0 bg-gray-100 opacity-80 flex gap-2 flex-col justify-center items-center dark:bg-gray-800 dark:text-gray-100"])))
    },
    98911: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fk: function() {
                return i
            },
            LO: function() {
                return d
            },
            N: function() {
                return l
            },
            OD: function() {
                return s
            },
            pC: function() {
                return c
            },
            tf: function() {
                return o
            },
            yc: function() {
                return u
            }
        });
        var a = n(14972)
          , r = n(35250)
          , i = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "132",
                height: "108",
                viewBox: "0 0 132 108",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("g", {
                    clipPath: "url(#clip0_3605_64419)",
                    children: (0,
                    r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M25.2025 29.3514C10.778 33.2165 8.51524 37.1357 11.8281 49.4995L13.4846 55.6814C16.7975 68.0453 20.7166 70.308 35.1411 66.443L43.3837 64.2344C57.8082 60.3694 60.0709 56.4502 56.758 44.0864L55.1016 37.9044C51.7887 25.5406 47.8695 23.2778 33.445 27.1428L29.3237 28.2471L25.2025 29.3514ZM18.1944 42.7244C18.8572 41.5764 20.325 41.1831 21.4729 41.8459L27.3517 45.24C28.4996 45.9027 28.8929 47.3706 28.2301 48.5185L24.836 54.3972C24.1733 55.5451 22.7054 55.9384 21.5575 55.2757C20.4096 54.613 20.0163 53.1451 20.6791 51.9972L22.8732 48.1969L19.0729 46.0028C17.925 45.3401 17.5317 43.8723 18.1944 42.7244ZM29.4091 56.3843C29.066 55.104 29.8258 53.7879 31.1062 53.4449L40.3791 50.9602C41.6594 50.6172 42.9754 51.377 43.3184 52.6573C43.6615 53.9376 42.9017 55.2536 41.6214 55.5967L32.3485 58.0813C31.0682 58.4244 29.7522 57.6646 29.4091 56.3843Z",
                        fill: "#AFC1FF"
                    })
                }), (0,
                r.jsx)("g", {
                    clipPath: "url(#clip1_3605_64419)",
                    children: (0,
                    r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M86.8124 13.4036C81.0973 11.8722 78.5673 13.2649 77.0144 19.0603L68.7322 49.97C67.1793 55.7656 68.5935 58.2151 74.4696 59.7895L97.4908 65.958C103.367 67.5326 105.816 66.1184 107.406 60.1848L115.393 30.379C115.536 29.8456 115.217 29.2959 114.681 29.16C113.478 28.8544 112.435 28.6195 111.542 28.4183C106.243 27.2253 106.22 27.2201 109.449 20.7159C109.73 20.1507 109.426 19.4638 108.816 19.3004L86.8124 13.4036ZM87.2582 28.4311C86.234 28.1567 85.1812 28.7645 84.9067 29.7888C84.6323 30.813 85.2401 31.8658 86.2644 32.1403L101.101 36.1158C102.125 36.3902 103.178 35.7824 103.453 34.7581C103.727 33.7339 103.119 32.681 102.095 32.4066L87.2582 28.4311ZM82.9189 37.2074C83.1934 36.1831 84.2462 35.5753 85.2704 35.8497L100.107 39.8252C101.131 40.0996 101.739 41.1524 101.465 42.1767C101.19 43.201 100.137 43.8088 99.1132 43.5343L84.2766 39.5589C83.2523 39.2844 82.6445 38.2316 82.9189 37.2074ZM83.2826 43.2683C82.2584 42.9939 81.2056 43.6017 80.9311 44.626C80.6567 45.6502 81.2645 46.703 82.2888 46.9775L89.7071 48.9652C90.7313 49.2396 91.7841 48.6318 92.0586 47.6076C92.333 46.5833 91.7252 45.5305 90.7009 45.256L83.2826 43.2683Z",
                        fill: "#7989FF"
                    })
                }), (0,
                r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M40.4004 71.8426C40.4004 57.2141 44.0575 53.5569 61.1242 53.5569H66.0004H70.8766C87.9432 53.5569 91.6004 57.2141 91.6004 71.8426V79.1569C91.6004 93.7855 87.9432 97.4426 70.8766 97.4426H61.1242C44.0575 97.4426 40.4004 93.7855 40.4004 79.1569V71.8426ZM78.8002 67.4995C78.8002 70.1504 76.6512 72.2995 74.0002 72.2995C71.3492 72.2995 69.2002 70.1504 69.2002 67.4995C69.2002 64.8485 71.3492 62.6995 74.0002 62.6995C76.6512 62.6995 78.8002 64.8485 78.8002 67.4995ZM60.7204 70.8597C60.2672 70.2553 59.5559 69.8997 58.8004 69.8997C58.045 69.8997 57.3337 70.2553 56.8804 70.8597L47.2804 83.6597C46.4851 84.72 46.7 86.2244 47.7604 87.0197C48.8208 87.8149 50.3251 87.6 51.1204 86.5397L58.8004 76.2997L66.4804 86.5397C66.8979 87.0962 67.5363 87.4443 68.2303 87.4936C68.9243 87.5429 69.6055 87.2887 70.0975 86.7967L74.8004 82.0938L79.5034 86.7967C80.4406 87.734 81.9602 87.734 82.8975 86.7967C83.8347 85.8595 83.8347 84.3399 82.8975 83.4026L76.4975 77.0026C75.5602 76.0653 74.0406 76.0653 73.1034 77.0026L68.6601 81.4459L60.7204 70.8597Z",
                    fill: "#3C46FF"
                }), (0,
                r.jsxs)("defs", {
                    children: [(0,
                    r.jsx)("clipPath", {
                        id: "clip0_3605_64419",
                        children: (0,
                        r.jsx)("rect", {
                            width: "56",
                            height: "56",
                            fill: "white",
                            transform: "translate(0 26.9939) rotate(-15)"
                        })
                    }), (0,
                    r.jsx)("clipPath", {
                        id: "clip1_3605_64419",
                        children: (0,
                        r.jsx)("rect", {
                            width: "64",
                            height: "64",
                            fill: "white",
                            transform: "translate(69.5645 0.5) rotate(15)"
                        })
                    })]
                })]
            })
        }
          , s = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#10A37F"
                }), (0,
                r.jsx)("path", {
                    d: "M15.5 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V13.5V18M15.5 10.5H23.8333C24.7538 10.5 25.5 11.2462 25.5 12.1667V13.5V18M15.5 10.5V25.5M15.5 25.5H18H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V18M15.5 25.5H12.1667C11.2462 25.5 10.5 24.7538 10.5 23.8333V18M10.5 18H25.5",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , o = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#FF5588"
                }), (0,
                r.jsx)("path", {
                    d: "M19.6663 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V14.6666L19.6663 9.66663Z",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M19.667 9.66663V14.6666H24.667",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M21.3337 18.8334H14.667",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M21.3337 22.1666H14.667",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M16.3337 15.5H15.5003H14.667",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , l = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#F8CA27"
                }), (0,
                r.jsx)("path", {
                    d: "M10.5 14V13.5V12.1667C10.5 11.2462 11.2462 10.5 12.1667 10.5H15.5H23.8333C24.7538 10.5 25.5 11.2462 25.5 12.1667V13.5V14M10.5 14V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H15.5H18H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V14M10.5 14H25.5M14 21.5L16.5 19L19 20.5L22 17.5",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , d = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#B161FD"
                }), (0,
                r.jsx)("path", {
                    d: "M26.3337 23.8333C26.3337 24.2754 26.1581 24.6993 25.8455 25.0118C25.5329 25.3244 25.109 25.5 24.667 25.5H11.3337C10.8916 25.5 10.4677 25.3244 10.1551 25.0118C9.84259 24.6993 9.66699 24.2754 9.66699 23.8333V12.1667C9.66699 11.7246 9.84259 11.3007 10.1551 10.9882C10.4677 10.6756 10.8916 10.5 11.3337 10.5H15.5003L17.167 13H24.667C25.109 13 25.5329 13.1756 25.8455 13.4882C26.1581 13.8007 26.3337 14.2246 26.3337 14.6667V23.8333Z",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , c = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#0000FF"
                }), (0,
                r.jsx)("path", {
                    d: "M18.833 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V15.5L18.833 9.66663Z",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M18.833 9.66663V15.5H24.6663",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , u = function(e) {
            var t = e.className;
            return (0,
            r.jsxs)(a.A0, {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: t,
                children: [(0,
                r.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "6",
                    fill: "#FF6E3C"
                }), (0,
                r.jsx)("path", {
                    d: "M21.333 23L26.333 18L21.333 13",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M14.667 13L9.66699 18L14.667 23",
                    stroke: "white",
                    strokeWidth: "1.66667",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
    },
    49685: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return S
            },
            Z: function() {
                return P
            }
        });
        var a, r = n(50134), i = n(90038), s = n(4399), o = n.n(s), l = n(82256), d = n(66027), c = n(19841), u = n(70079), m = n(1454), f = n(70671), p = n(94968), x = n(21389), g = n(68919), h = n(73874), y = n(90166), v = n(98911), k = n(55161), b = n(35250);
        function j(e) {
            var t = e.filename
              , n = e.icon
              , a = e.loadingPercentage
              , r = (0,
            f.Z)()
              , i = void 0 !== a && a < 100;
            return (0,
            b.jsxs)("div", {
                className: "flex flex-row items-center gap-2",
                children: [null != n && !1 !== n ? (0,
                b.jsxs)("div", {
                    className: "relative h-10 w-10 overflow-hidden rounded-md border border-gray-200 dark:border-gray-600",
                    children: [n, i && (0,
                    b.jsx)(w, {
                        percentage: a,
                        blurBackground: !0
                    })]
                }) : (0,
                b.jsx)("div", {
                    className: "relative h-10 w-10 shrink-0 overflow-hidden rounded-md",
                    children: i ? (0,
                    b.jsxs)(b.Fragment, {
                        children: [(0,
                        b.jsx)("div", {
                            className: (0,
                            c.default)("inset-0", M, function(e) {
                                switch ((0,
                                k.$p)(e)) {
                                case "py":
                                case "js":
                                case "jsx":
                                case "ts":
                                case "tsx":
                                    return "bg-[#FF6E3C]";
                                case "doc":
                                case "docx":
                                case "txt":
                                case "pdf":
                                    return "bg-[#FF5588]";
                                case "zip":
                                    return "bg-[#B161FD]";
                                case "ppt":
                                case "pptx":
                                case "key":
                                    return "bg-[#F8CA27]";
                                case "xls":
                                case "xlsx":
                                case "csv":
                                    return "bg-[#10A37F]";
                                default:
                                    return "bg-blue"
                                }
                            }(t))
                        }), (0,
                        b.jsx)(w, {
                            percentage: a
                        })]
                    }) : function(e) {
                        switch ((0,
                        k.$p)(e)) {
                        case "py":
                        case "js":
                        case "jsx":
                        case "ts":
                        case "tsx":
                            return (0,
                            b.jsx)(v.yc, {
                                className: M
                            });
                        case "doc":
                        case "docx":
                        case "txt":
                        case "pdf":
                            return (0,
                            b.jsx)(v.tf, {
                                className: M
                            });
                        case "zip":
                            return (0,
                            b.jsx)(v.LO, {
                                className: M
                            });
                        case "ppt":
                        case "pptx":
                        case "key":
                            return (0,
                            b.jsx)(v.N, {
                                className: M
                            });
                        case "xls":
                        case "xlsx":
                        case "csv":
                            return (0,
                            b.jsx)(v.OD, {
                                className: M
                            });
                        default:
                            return (0,
                            b.jsx)(v.pC, {
                                className: M
                            })
                        }
                    }(t)
                }), (0,
                b.jsxs)("div", {
                    className: "overflow-hidden",
                    children: [(0,
                    b.jsx)("div", {
                        className: "truncate font-medium",
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: "truncate text-gray-300",
                        children: function(e) {
                            if ((0,
                            k.CO)(e))
                                return r.formatMessage(C.fileDescImage);
                            switch ((0,
                            k.$p)(e)) {
                            case "py":
                                return "Python";
                            case "js":
                            case "jsx":
                                return "JavaScript";
                            case "ts":
                            case "tsx":
                                return "TypeScript";
                            case "pdf":
                                return "PDF";
                            case "doc":
                            case "docx":
                            case "txt":
                                return r.formatMessage(C.fileDescDocument);
                            case "zip":
                                return r.formatMessage(C.fileDescZip);
                            case "xls":
                            case "xlsx":
                            case "csv":
                                return r.formatMessage(C.fileDescSpreadsheet);
                            case "ppt":
                            case "pptx":
                            case "key":
                                return r.formatMessage(C.fileDescPresentation);
                            default:
                                return r.formatMessage(C.fileDescFile)
                            }
                        }(t)
                    })]
                })]
            })
        }
        function w(e) {
            var t = e.percentage
              , n = e.blurBackground;
            return (0,
            b.jsx)("div", {
                className: (0,
                c.default)("absolute inset-0 flex items-center justify-center text-white", void 0 !== n && n && "bg-black/5 backdrop-blur-sm"),
                children: (0,
                b.jsx)(g.Z, {
                    percentage: t,
                    className: "h-6 w-6"
                })
            })
        }
        var M = "h-10 w-10 flex-shrink-0"
          , C = (0,
        p.vU)({
            fileDescDocument: {
                id: "FileDataView.fileDescDocument",
                defaultMessage: "Document"
            },
            fileDescZip: {
                id: "FileDataView.fileDescZip",
                defaultMessage: "Zip Archive"
            },
            fileDescSpreadsheet: {
                id: "FileDataView.fileDescSpreadsheet",
                defaultMessage: "Spreadsheet"
            },
            fileDescPresentation: {
                id: "FileDataView.fileDescPresentation",
                defaultMessage: "Presentation"
            },
            fileDescImage: {
                id: "FileDataView.fileDescImage",
                defaultMessage: "Image"
            },
            fileDescFile: {
                id: "FileDataView.fileDescFile",
                defaultMessage: "File"
            }
        });
        function T(e) {
            return e instanceof File
        }
        function P(e) {
            var t = e.onRemoveFileClick
              , n = e.file
              , a = e.fileId
              , r = e.gizmoId
              , i = e.loadingPercentage
              , s = e.width
              , o = e.alwaysShowData
              , l = (0,
            f.Z)()
              , d = T(n) ? n.name : n
              , u = T(n) && (null == n ? void 0 : n.type.startsWith("image/")) || (0,
            k.CO)(d) && null != a
              , p = u && (0,
            b.jsx)(S, {
                file: n,
                fileId: a,
                gizmoId: r
            });
            return (0,
            b.jsxs)("div", {
                className: "group relative inline-block text-sm text-black/70 dark:text-white/90",
                children: [(0,
                b.jsx)("div", {
                    className: "relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-600",
                    children: u && !(void 0 !== o && o) ? (0,
                    b.jsxs)("div", {
                        className: "h-14 w-14",
                        children: [p, void 0 !== i && i < 100 && (0,
                        b.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                            children: (0,
                            b.jsx)(g.Z, {
                                percentage: i,
                                className: "h-6 w-6"
                            })
                        })]
                    }) : (0,
                    b.jsx)("div", {
                        className: (0,
                        c.default)("p-2 dark:bg-gray-600", "wide" === (void 0 === s ? "normal" : s) ? "w-80" : "w-60"),
                        children: (0,
                        b.jsx)(j, {
                            filename: d,
                            icon: p,
                            loadingPercentage: i
                        })
                    })
                }), null != t && (0,
                b.jsx)("button", {
                    onClick: t,
                    className: "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-gray-500 p-0.5 text-white transition-colors hover:bg-black hover:opacity-100 group-hover:opacity-100 md:opacity-0",
                    children: (0,
                    b.jsx)(y.u, {
                        label: l.formatMessage(N.removeFile),
                        side: "top",
                        sideOffset: 4,
                        children: (0,
                        b.jsx)(m.q5L, {
                            className: "icon-sm"
                        })
                    })
                })]
            })
        }
        var O = x.Z.span(a || (a = (0,
        i.Z)(["flex items-center h-full w-full justify-center bg-gray-500 dark:bg-gray-700 bg-cover bg-center text-white"])));
        function I() {
            return (0,
            b.jsx)(O, {})
        }
        function S(e) {
            var t, n, a, i, s = e.file, c = e.fileId, m = e.gizmoId, p = (0,
            f.Z)(), x = T(s) ? s.name : s, g = (t = T(s) ? s : null,
            a = (n = (0,
            u.useState)(void 0))[0],
            i = n[1],
            (0,
            u.useEffect)(function() {
                function e() {
                    return (e = (0,
                    r.Z)(o().mark(function e(t) {
                        var n;
                        return o().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    d.ZP.getFileDownloadLink(t, m);
                                case 3:
                                    (n = e.sent).status === l.KF.Success ? i(n.download_url) : console.error("Error fetching URL for file ".concat(t, ": ").concat(n.status)),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    console.error("Error fetching URL for file ".concat(t, ": ").concat(e.t0));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[0, 7]])
                    }))).apply(this, arguments)
                }
                if (null != t && t.type.startsWith("image/")) {
                    var n = new FileReader;
                    n.addEventListener("load", function() {
                        var e = n.result;
                        i("string" == typeof e ? e : void 0)
                    }),
                    n.readAsDataURL(t)
                } else
                    (0,
                    k.CO)(x) && null != c ? function(t) {
                        return e.apply(this, arguments)
                    }(c) : i(void 0)
            }, [t, x, c, m]),
            a);
            return null == g ? (0,
            b.jsx)(I, {}) : (0,
            b.jsx)(h.l, {
                src: g,
                alt: p.formatMessage(N.userUploadedImage),
                className: "h-full w-full",
                children: (0,
                b.jsx)(O, {
                    style: {
                        backgroundImage: "url(".concat(g, ")")
                    }
                })
            })
        }
        var N = (0,
        p.vU)({
            removeFile: {
                id: "FileTile.removeFile",
                defaultMessage: "Remove file"
            },
            userUploadedImage: {
                id: "FileTile.userUploadedImage",
                defaultMessage: "User uploaded image"
            }
        })
    },
    90246: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return x
            },
            s: function() {
                return g
            }
        });
        var a = n(36112)
          , r = n(25349)
          , i = n(99893)
          , s = n(19841)
          , o = n(27009)
          , l = n(1454)
          , d = n(70671)
          , c = n(94968)
          , u = n(91559)
          , m = n(7525)
          , f = n(35250);
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function x(e) {
            var t = e.getInputProps
              , n = e.openFileDialog
              , o = e.uploadType
              , c = e.customIcon
              , x = e.customClassName
              , g = (0,
            d.Z)()
              , y = (0,
            f.jsx)(u.z, {
                onClick: function(e) {
                    e.preventDefault(),
                    r.A.logEvent(i.M.openFileViewer, {
                        intent: o.toString()
                    }),
                    n()
                },
                color: "none",
                className: null != x ? x : (0,
                s.default)("rounded-full p-0 outline-none ", o === m.A.Multimodal ? "text-gray-500 dark:text-gray-300" : "bg-gray-500 text-white hover:bg-black"),
                "aria-label": g.formatMessage(h.attachFiles),
                children: null != c ? c : o === m.A.Multimodal ? (0,
                f.jsx)(l.LFN, {
                    className: "icon-sm"
                }) : (0,
                f.jsx)(l.OvN, {
                    className: "icon-sm"
                })
            })
              , v = (0,
            f.jsx)("input", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0,
                        a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, t({
                className: "hidden"
            })));
            return (0,
            f.jsxs)("div", {
                className: "flex",
                children: [y, v]
            })
        }
        function g(e) {
            var t = e.code
              , n = e.message;
            switch (t) {
            case o.jK.FileTooLarge:
                return h.errorFileTooLarge;
            case o.jK.TooManyFiles:
                return r.A.logEvent(i.M.uploadedMaxFilesError),
                h.errorTooManyFiles;
            default:
                return n
            }
        }
        var h = (0,
        c.vU)({
            attachImages: {
                id: "PromptFilePicker.attachImages",
                defaultMessage: "Attach images"
            },
            attachFiles: {
                id: "PromptFilePicker.attachFiles",
                defaultMessage: "Attach files"
            },
            errorFileTooLarge: {
                id: "PromptFilePicker.errorFileTooLarge",
                defaultMessage: "File is too large. Maximum file size is {size}MB"
            },
            errorTooManyFiles: {
                id: "PromptFilePicker.errorTooManyFiles",
                defaultMessage: "Too many files uploaded. Maximum number of files at a time is {maxNum}"
            }
        })
    },
    14402: function(e, t, n) {
        "use strict";
        n.d(t, {
            Dw: function() {
                return C
            },
            HR: function() {
                return M
            },
            gF: function() {
                return w
            }
        });
        var a, r = n(36112), i = n(6939), s = n(50134), o = n(4399), l = n.n(o), d = n(82256), c = n(67311), u = n(25349), m = n(99893), f = n(94968), p = n(78103), x = n(4748), g = n(41845), h = n(7525), y = n(31609), v = n(55161);
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var j = {
            files: [],
            connectorFileData: {}
        }
          , w = (0,
        p.ZP)(function() {
            return j
        })
          , M = {
            hasUploadInProgress: function(e) {
                return e.files.some(function(e) {
                    return e.status === h.X.Uploading
                })
            },
            getReadyFiles: function(e) {
                return e.files.filter(function(e) {
                    return e.status === h.X.Ready
                })
            }
        }
          , C = {
            reset: function() {
                w.setState(j)
            },
            uploadFile: (a = (0,
            s.Z)(l().mark(function e(t, n, a, r, s) {
                var o, f, p, k, b, j, M, C, O, I, S, N, _, D = arguments;
                return l().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (o = D.length > 5 && void 0 !== D[5] ? D[5] : {},
                            f = D.length > 6 ? D[6] : void 0,
                            p = o.gizmoId,
                            k = w.getState().files,
                            b = (0,
                            v.xs)(a, n.name, n.type, f),
                            j = {
                                tempId: t,
                                gizmoId: o.gizmoId,
                                status: h.X.Uploading,
                                file: n,
                                progress: 1,
                                fileId: null,
                                cdnUrl: null
                            },
                            k.length !== g.dO) {
                                e.next = 11;
                                break
                            }
                            u.A.logEvent(m.M.uploadedMaxFilesError),
                            x.m.danger(s.formatMessage(P.maxUploadsAtATime, {
                                maxUploads: g.dO,
                                fileName: n.name
                            }), g.$e),
                            e.next = 54;
                            break;
                        case 11:
                            if (w.setState(function(e) {
                                var t = e.files;
                                return {
                                    files: [].concat((0,
                                    i.Z)(t), [j])
                                }
                            }),
                            C = {},
                            !r.includes(n.type)) {
                                e.next = 39;
                                break
                            }
                            return M = {
                                kind: d.Ei.Multimodal
                            },
                            e.next = 17,
                            (0,
                            y.po)(n);
                        case 17:
                            if (I = (O = e.sent).width,
                            S = O.height,
                            !(I > 2048 || S > 2048)) {
                                e.next = 36;
                                break
                            }
                            return e.prev = 21,
                            e.next = 24,
                            (0,
                            v.Tu)(n, 2048);
                        case 24:
                            return N = e.sent,
                            e.next = 27,
                            (0,
                            y.po)(N);
                        case 27:
                            I = (_ = e.sent).width,
                            S = _.height,
                            n = N,
                            e.next = 36;
                            break;
                        case 33:
                            e.prev = 33,
                            e.t0 = e.catch(21),
                            console.error("Error resizing image:", e.t0);
                        case 36:
                            C.imageDimensions = {
                                width: I,
                                height: S
                            },
                            e.next = 51;
                            break;
                        case 39:
                            e.t1 = b,
                            e.next = e.t1 === h.A.Multimodal ? 42 : e.t1 === h.A.Interpreter ? 43 : e.t1 === h.A.Retrieval ? 45 : e.t1 === h.A.ProfilePicture ? 48 : e.t1 === h.A.ContextConnector ? 49 : e.t1 === h.A.None ? 49 : 50;
                            break;
                        case 42:
                            throw Error("Multimodal file upload not supported mime type, ".concat(n.type, "\nSupported mime types: ") + r.join(", "));
                        case 43:
                            return M = {
                                kind: d.Ei.AceUpload
                            },
                            e.abrupt("break", 51);
                        case 45:
                            return M = {
                                kind: d.Ei.MyFiles
                            },
                            C.usesRetrievalIndex = !0,
                            e.abrupt("break", 51);
                        case 48:
                            throw Error("cannot upload profile picture via uploadFile");
                        case 49:
                            return e.abrupt("return");
                        case 50:
                            (0,
                            c.Z)(b);
                        case 51:
                            return null != p && (M = {
                                kind: d.Ei.Gizmo,
                                gizmoId: p
                            }),
                            e.next = 54,
                            (0,
                            y.cT)(t, n, s, M, T, C);
                        case 54:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[21, 33]])
            })),
            function(e, t, n, r, i) {
                return a.apply(this, arguments)
            }
            ),
            createFileCompleted: function(e, t, n) {
                var a = w.getState().files
                  , r = a.findIndex(function(t) {
                    return t.tempId === e
                })
                  , s = a[r];
                if (r >= 0 && s.status === h.X.Uploading) {
                    var o = (0,
                    i.Z)(a);
                    o.splice(r, 1, b(b({}, s), {}, {
                        progress: 10,
                        fileId: t,
                        cdnUrl: n
                    })),
                    w.setState({
                        files: o
                    })
                }
            },
            updateProgress: function(e, t) {
                var n = w.getState().files
                  , a = n.findIndex(function(t) {
                    return t.tempId === e
                })
                  , r = n[a];
                if (a >= 0 && r.status === h.X.Uploading) {
                    var s = (0,
                    i.Z)(n);
                    s.splice(a, 1, b(b({}, r), {}, {
                        progress: t
                    })),
                    w.setState({
                        files: s
                    })
                }
            },
            uploadCompleted: function(e, t, n, a) {
                var r = w.getState().files
                  , s = r.findIndex(function(t) {
                    return t.tempId === e
                });
                if (s >= 0 && r[s].status === h.X.Uploading && null !== r[s].fileId) {
                    var o = r[s]
                      , l = (0,
                    i.Z)(r)
                      , d = b(b({}, o), {}, {
                        tempId: e,
                        status: h.X.Ready,
                        progress: 100,
                        fileSpec: b(b({
                            name: o.file.name,
                            id: o.fileId,
                            size: o.file.size,
                            mimeType: o.file.type
                        }, t || {}), n || {})
                    });
                    l.splice(s, 1, d);
                    var c = b({}, w.getState().connectorFileData);
                    a && (c[null == a ? void 0 : a.file_id] = a),
                    w.setState({
                        files: l,
                        connectorFileData: c
                    }),
                    u.A.logEvent(m.M.uploadFileCompleted, {
                        status: o.status,
                        fileId: o.fileId
                    })
                }
            },
            remove: function(e, t) {
                var n = w.getState().files
                  , a = n.findIndex(function(t) {
                    return t.tempId === e
                });
                if (a >= 0) {
                    var r = n[a]
                      , s = "error" === t ? m.M.uploadFileError : m.M.removeFile;
                    u.A.logEvent(s, {
                        status: r.status,
                        fileId: r.fileId
                    });
                    var o = (0,
                    i.Z)(n);
                    o.splice(a, 1),
                    w.setState({
                        files: o
                    })
                }
            }
        }
          , T = {
            onFileCreated: C.createFileCompleted,
            onFileUploadProgress: C.updateProgress,
            onFileUploaded: C.uploadCompleted,
            onError: C.remove
        }
          , P = (0,
        f.vU)({
            maxUploadsAtATime: {
                id: "useFilePickerState.maxUploadsAtATime",
                defaultMessage: "Unable to upload {fileName}. Max {maxUploads} uploads at a time"
            }
        })
    },
    21935: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return eT
            }
        });
        var a = n(36112)
          , r = n(80459)
          , i = n(7144)
          , s = n(19954)
          , o = n(73929)
          , l = n(25349)
          , d = n(99893)
          , c = n(70002)
          , u = n(19841)
          , m = n(77997)
          , f = n(70079)
          , p = n(24910)
          , x = n(50134)
          , g = n(4399)
          , h = n.n(g)
          , y = n(61236);
        n(61888);
        var v = n(61110)
          , k = n(55975)
          , b = n(46050)
          , j = n(29874)
          , w = n(8449)
          , M = n(15472)
          , C = {
            tokenize: function(e, t, n) {
                var a = this
                  , r = this.events[this.events.length - 1]
                  , i = r && r[1].type === M.V.linePrefix ? r[2].sliceSerialize(r[1], !0).length : 0
                  , s = [];
                return function(t) {
                    return k.q.backslash,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function t(a) {
                        return a === k.q.backslash || a === k.q.leftSquareBracket && s[0] === k.q.backslash ? (e.consume(a),
                        s.push(a),
                        t) : (e.exit("mathFlowFenceSequence"),
                        s.length < 2 ? n(a) : (0,
                        b.f)(e, o, M.V.whitespace)(a))
                    }(t)
                }
                ;
                function o(t) {
                    return t === k.q.eof || (0,
                    j.Ch)(t) ? l(t) : (e.enter("mathFlowFenceMeta"),
                    e.enter(M.V.chunkString, {
                        contentType: w._.contentTypeString
                    }),
                    function t(a) {
                        return a === k.q.eof || (0,
                        j.Ch)(a) ? (e.exit(M.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(a)) : a === k.q.rightSquareBracket ? n(a) : (e.consume(a),
                        t)
                    }(t))
                }
                function l(n) {
                    return e.exit("mathFlowFence"),
                    a.interrupt ? t(n) : function t(n) {
                        return n === k.q.eof ? d(n) : (0,
                        j.Ch)(n) ? e.attempt(T, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, d, i ? (0,
                        b.f)(e, t, M.V.linePrefix, i + 1) : t), d)(n) : (e.enter("mathFlowValue"),
                        function n(a) {
                            return a === k.q.eof || (0,
                            j.Ch)(a) ? (e.exit("mathFlowValue"),
                            t(a)) : (e.consume(a),
                            n)
                        }(n))
                    }(n)
                }
                function d(n) {
                    return e.exit("mathFlow"),
                    t(n)
                }
                function c(e, t, n) {
                    var a = [];
                    return (0,
                    b.f)(e, function(t) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function t(i) {
                            return i === k.q.backslash && 0 === a.length || i === k.q.rightSquareBracket && a[0] === k.q.backslash ? (e.consume(i),
                            a.push(i),
                            t) : a < s ? n(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            b.f)(e, r, M.V.whitespace)(i))
                        }(t)
                    }, M.V.linePrefix, w._.tabSize);
                    function r(a) {
                        return a === k.q.eof || (0,
                        j.Ch)(a) ? (e.exit("mathFlowFence"),
                        t(a)) : n(a)
                    }
                }
            },
            concrete: !0
        }
          , T = {
            tokenize: function(e, t, n) {
                var a = this;
                return function(t) {
                    return e.enter(M.V.lineEnding),
                    e.consume(t),
                    e.exit(M.V.lineEnding),
                    r
                }
                ;
                function r(e) {
                    return a.parser.lazy[a.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        }
          , P = {
            tokenize: function(e, t, n) {
                var a = this
                  , r = a.events[a.events.length - 1]
                  , i = r && r[1].type === M.V.linePrefix ? r[2].sliceSerialize(r[1], !0).length : 0
                  , s = 0;
                return function(t) {
                    return k.q.dollarSign,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function t(a) {
                        return a === k.q.dollarSign ? (e.consume(a),
                        s++,
                        t) : (e.exit("mathFlowFenceSequence"),
                        s < 2 ? n(a) : (0,
                        b.f)(e, o, M.V.whitespace)(a))
                    }(t)
                }
                ;
                function o(t) {
                    return t === k.q.eof || (0,
                    j.Ch)(t) ? l(t) : (e.enter("mathFlowFenceMeta"),
                    e.enter(M.V.chunkString, {
                        contentType: w._.contentTypeString
                    }),
                    function t(a) {
                        return a === k.q.eof || (0,
                        j.Ch)(a) ? (e.exit(M.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(a)) : a === k.q.dollarSign ? n(a) : (e.consume(a),
                        t)
                    }(t))
                }
                function l(n) {
                    return e.exit("mathFlowFence"),
                    a.interrupt ? t(n) : function t(n) {
                        return n === k.q.eof ? d(n) : (0,
                        j.Ch)(n) ? e.attempt(O, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, d, i ? (0,
                        b.f)(e, t, M.V.linePrefix, i + 1) : t), d)(n) : (e.enter("mathFlowValue"),
                        function n(a) {
                            return a === k.q.eof || (0,
                            j.Ch)(a) ? (e.exit("mathFlowValue"),
                            t(a)) : (e.consume(a),
                            n)
                        }(n))
                    }(n)
                }
                function d(n) {
                    return e.exit("mathFlow"),
                    t(n)
                }
                function c(e, t, n) {
                    var a = 0;
                    return (0,
                    b.f)(e, function(t) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function t(i) {
                            return i === k.q.dollarSign ? (e.consume(i),
                            a++,
                            t) : a < s ? n(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            b.f)(e, r, M.V.whitespace)(i))
                        }(t)
                    }, M.V.linePrefix, w._.tabSize);
                    function r(a) {
                        return a === k.q.eof || (0,
                        j.Ch)(a) ? (e.exit("mathFlowFence"),
                        t(a)) : n(a)
                    }
                }
            },
            concrete: !0
        }
          , O = {
            tokenize: function(e, t, n) {
                var a = this;
                return function(t) {
                    return (0,
                    j.Ch)(t),
                    e.enter(M.V.lineEnding),
                    e.consume(t),
                    e.exit(M.V.lineEnding),
                    r
                }
                ;
                function r(e) {
                    return a.parser.lazy[a.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        };
        function I(e) {
            var t, n, a = e.length - 4, r = 3;
            if ((e[3][1].type === M.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === M.V.lineEnding || "space" === e[a][1].type)) {
                for (t = r; ++t < a; )
                    if ("mathTextData" === e[t][1].type) {
                        e[a][1].type = "mathTextPadding",
                        e[r][1].type = "mathTextPadding",
                        r += 2,
                        a -= 2;
                        break
                    }
            }
            for (t = r - 1,
            a++; ++t <= a; )
                void 0 === n ? t !== a && e[t][1].type !== M.V.lineEnding && (n = t) : (t === a || e[t][1].type === M.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                a -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function S(e) {
            return e !== k.q.backslash || this.events[this.events.length - 1][1].type === M.V.characterEscape
        }
        function N(e) {
            var t, n, a = e.length - 4, r = 3;
            if ((e[3][1].type === M.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === M.V.lineEnding || "space" === e[a][1].type)) {
                for (t = r; ++t < a; )
                    if ("mathTextData" === e[t][1].type) {
                        e[a][1].type = "mathTextPadding",
                        e[r][1].type = "mathTextPadding",
                        r += 2,
                        a -= 2;
                        break
                    }
            }
            for (t = r - 1,
            a++; ++t <= a; )
                void 0 === n ? t !== a && e[t][1].type !== M.V.lineEnding && (n = t) : (t === a || e[t][1].type === M.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                a -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function _(e) {
            return e !== k.q.dollarSign || this.events[this.events.length - 1][1].type === M.V.characterEscape
        }
        function D(e) {
            var t, n, a = e.length - 4, r = 3;
            if ((e[3][1].type === M.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === M.V.lineEnding || "space" === e[a][1].type)) {
                for (t = r; ++t < a; )
                    if ("mathTextData" === e[t][1].type) {
                        e[a][1].type = "mathTextPadding",
                        e[r][1].type = "mathTextPadding",
                        r += 2,
                        a -= 2;
                        break
                    }
            }
            for (t = r - 1,
            a++; ++t <= a; )
                void 0 === n ? t !== a && e[t][1].type !== M.V.lineEnding && (n = t) : (t === a || e[t][1].type === M.V.lineEnding) && (e[n][1].type = "mathTextData",
                t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                e.splice(n + 2, t - n - 2),
                a -= t - n - 2,
                t = n + 2),
                n = void 0);
            return e
        }
        function Z(e) {
            return e !== k.q.backslash || this.events[this.events.length - 1][1].type === M.V.characterEscape
        }
        var R = n(67726)
          , F = n(63395)
          , E = n(93362)
          , A = n(45369)
          , L = n(42426)
          , q = n(65028)
          , B = n(77449)
          , z = n(88366)
          , U = n(16889)
          , V = n(35250)
          , G = ["inline", "node", "className", "children"];
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var Q = n(66027)
          , $ = n(82473)
          , X = n(70671)
          , K = n(32004)
          , Y = n(94968)
          , J = n(90166)
          , ee = n(55161)
          , et = n(63866)
          , en = n(4748)
          , ea = ["messageId", "clientThreadId", "href"];
        function er(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ei(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? er(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var es = "sandbox:";
        function eo(e) {
            var t, n, a, i = e.messageId, l = e.clientThreadId, d = e.href, c = (0,
            r.Z)(e, ea), u = null !== (0,
            f.useContext)(o.gB), m = (0,
            $.NL)(), p = (0,
            f.useState)(!1), g = p[0], v = p[1], k = d.substring(es.length), b = s.tQ.getServerThreadId(l), j = (0,
            X.Z)(), w = (0,
            f.useCallback)(function(e) {
                var t = document.createElement("a");
                t.href = e,
                t.click(),
                v(!1)
            }, []), M = (t = (0,
            f.useCallback)(function(e) {
                v(!1),
                en.m.danger(e)
            }, []),
            n = (0,
            ee.VF)(),
            (0,
            y.a)({
                queryKey: ed(i, k),
                queryFn: function() {
                    return Q.ZP.downloadFromInterpreter(i, b, k).then(function(e) {
                        return (null == e ? void 0 : e.status) === "success" && w(e.download_url),
                        e
                    }).catch(function(e) {
                        var a = n("default_download_link_error", {
                            fileName: k
                        });
                        throw void 0 !== e.code && (a = n(e.code)),
                        null == t || t(a),
                        e
                    })
                },
                enabled: !!(g && !u && i && b && k)
            })).data, C = (0,
            f.useCallback)((a = (0,
            x.Z)(h().mark(function e(t) {
                return h().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            void 0 !== l && (t.preventDefault(),
                            (void 0 === M || (null == M ? void 0 : M.status) === "error") && m.invalidateQueries({
                                queryKey: ed(i, k)
                            }),
                            (null == M ? void 0 : M.status) == "success" && null != M && M.download_url ? w(M.download_url) : v(!0));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e) {
                return a.apply(this, arguments)
            }
            ), [l, M, m, i, k, w]);
            return (0,
            V.jsx)(J.u, {
                closeOnOutsideClick: !1,
                delayDuration: 0,
                label: (0,
                V.jsxs)("span", {
                    className: "flex items-center gap-1",
                    children: [g ? j.formatMessage(ec.startingDownload) : j.formatMessage(ec.downloadFile), g && (0,
                    V.jsx)(et.Z, {})]
                }),
                side: "top",
                sideOffset: 4,
                children: (0,
                V.jsx)("a", ei(ei({}, c), {}, {
                    className: "cursor-pointer",
                    onClick: function(e) {
                        return !g && C(e)
                    }
                }))
            })
        }
        function el(e) {
            return (0,
            V.jsx)(J.u, {
                closeOnOutsideClick: !1,
                delayDuration: 0,
                label: (0,
                V.jsx)("span", {
                    className: "flex items-center gap-1",
                    children: (0,
                    V.jsx)(K.Z, ei({}, ec.downloadUnavailable))
                }),
                side: "top",
                sideOffset: 4,
                children: (0,
                V.jsx)("span", ei(ei({}, e), {}, {
                    className: "font-semibold text-gray-500 underline dark:text-gray-300"
                }))
            })
        }
        function ed(e, t) {
            return ["downloadSandboxLink", e, t]
        }
        var ec = (0,
        Y.vU)({
            downloadFile: {
                id: "SandboxDownload.downloadFile",
                defaultMessage: "Download file"
            },
            startingDownload: {
                id: "SandboxDownload.startingDownload",
                defaultMessage: "Starting download"
            },
            downloadUnavailable: {
                id: "SandboxDownload.downloadUnavailable",
                defaultMessage: "File download not supported in a shared chat"
            }
        })
          , eu = function(e) {
            return e.startsWith(es) ? e : (0,
            F.A)(e)
        }
          , em = [q.Z, [function() {
            var e, t, n = this.data();
            function r(e, t) {
                (n[e] ? n[e] : n[e] = []).push(t)
            }
            r("micromarkExtensions", {
                flow: (e = {},
                (0,
                a.Z)(e, k.q.dollarSign, P),
                (0,
                a.Z)(e, k.q.backslash, C),
                e),
                text: (t = {},
                (0,
                a.Z)(t, k.q.dollarSign, {
                    tokenize: function(e, t, n) {
                        var a, r, i = 0;
                        return function(t) {
                            return e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            function t(a) {
                                return a === k.q.dollarSign ? (e.consume(a),
                                i++,
                                t) : i < 2 ? n(a) : (e.exit("mathTextSequence"),
                                s(a))
                            }(t)
                        }
                        ;
                        function s(l) {
                            return l === k.q.eof ? n(l) : l === k.q.dollarSign ? (r = e.enter("mathTextSequence"),
                            a = 0,
                            function n(s) {
                                return s === k.q.dollarSign ? (e.consume(s),
                                a++,
                                n) : a === i ? (e.exit("mathTextSequence"),
                                e.exit("mathText"),
                                t(s)) : (r.type = "mathTextData",
                                o(s))
                            }(l)) : l === k.q.space ? (e.enter("space"),
                            e.consume(l),
                            e.exit("space"),
                            s) : (0,
                            j.Ch)(l) ? (e.enter(M.V.lineEnding),
                            e.consume(l),
                            e.exit(M.V.lineEnding),
                            s) : (e.enter("mathTextData"),
                            o(l))
                        }
                        function o(t) {
                            return t === k.q.eof || t === k.q.space || t === k.q.dollarSign || (0,
                            j.Ch)(t) ? (e.exit("mathTextData"),
                            s(t)) : (e.consume(t),
                            o)
                        }
                    },
                    resolve: N,
                    previous: _
                }),
                (0,
                a.Z)(t, k.q.backslash, [{
                    tokenize: function(e, t, n) {
                        var a, r = [], i = [], s = this;
                        return function(t) {
                            return k.q.backslash,
                            S.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            function t(a) {
                                return (r.join(","),
                                a === k.q.backslash && 0 === r.length || a === k.q.leftParenthesis && 1 === r.length) ? (e.consume(a),
                                r.push(a),
                                t) : r.length < 2 ? n(a) : (e.exit("mathTextSequence"),
                                o(a))
                            }(t)
                        }
                        ;
                        function o(s) {
                            return s === k.q.eof ? n(s) : s === k.q.backslash ? (a = e.enter("mathTextSequence"),
                            i = [],
                            function n(s) {
                                return (r.join(","),
                                s === k.q.backslash && 0 === i.length || s === k.q.rightParenthesis && 1 === i.length) ? (e.consume(s),
                                i.push(s),
                                n) : i.length === r.length ? (e.exit("mathTextSequence"),
                                e.exit("mathText"),
                                t(s)) : (a.type = "mathTextData",
                                l(s))
                            }(s)) : s === k.q.space ? (e.enter("space"),
                            e.consume(s),
                            e.exit("space"),
                            o) : (0,
                            j.Ch)(s) ? (e.enter(M.V.lineEnding),
                            e.consume(s),
                            e.exit(M.V.lineEnding),
                            o) : (e.enter("mathTextData"),
                            l(s))
                        }
                        function l(t) {
                            return t === k.q.eof || t === k.q.space || t === k.q.backslash || (0,
                            j.Ch)(t) ? (e.exit("mathTextData"),
                            o(t)) : (e.consume(t),
                            l)
                        }
                    },
                    resolve: I,
                    previous: S
                }, {
                    tokenize: function(e, t, n) {
                        var a, r = [], i = [], s = this;
                        return function(t) {
                            return k.q.backslash,
                            Z.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            function t(a) {
                                return (r.join(","),
                                a === k.q.backslash && 0 === r.length || a === k.q.leftSquareBracket && 1 === r.length) ? (e.consume(a),
                                r.push(a),
                                t) : r.length < 2 ? n(a) : (e.exit("mathTextSequence"),
                                o(a))
                            }(t)
                        }
                        ;
                        function o(s) {
                            return s === k.q.eof ? n(s) : s === k.q.backslash ? (a = e.enter("mathTextSequence"),
                            i = [],
                            function n(s) {
                                return (r.join(","),
                                s === k.q.backslash && 0 === i.length || s === k.q.rightSquareBracket && 1 === i.length) ? (e.consume(s),
                                i.push(s),
                                n) : i.length === r.length ? (e.exit("mathTextSequence"),
                                e.exit("mathText"),
                                t(s)) : (a.type = "mathTextData",
                                l(s))
                            }(s)) : s === k.q.space ? (e.enter("space"),
                            e.consume(s),
                            e.exit("space"),
                            o) : (0,
                            j.Ch)(s) ? (e.enter(M.V.lineEnding),
                            e.consume(s),
                            e.exit(M.V.lineEnding),
                            o) : (e.enter("mathTextData"),
                            l(s))
                        }
                        function l(t) {
                            return t === k.q.eof || t === k.q.space || t === k.q.backslash || (0,
                            j.Ch)(t) ? (e.exit("mathTextData"),
                            o(t)) : (e.consume(t),
                            l)
                        }
                    },
                    resolve: D,
                    previous: Z
                }]),
                t)
            }),
            r("fromMarkdownExtensions", (0,
            v.N)()),
            r("toMarkdownExtensions", (0,
            v.O)())
        }
        , {
            singleDollarTextMath: !1
        }]]
          , ef = [[E.Z, {
            languages: {
                mathematica: R.Z
            },
            detect: !0,
            subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go", "graphql", "java", "javascript", "json", "kotlin", "latex", "less", "lua", "makefile", "makefile", "markdown", "matlab", "mathematica", "nginx", "objectivec", "perl", "pgsql", "php-template", "php", "plaintext", "python-repl", "python", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"],
            ignoreMissing: !0,
            aliases: {
                mathematica: "wolfram"
            }
        }], A.Z, [L.Z, {
            newlines: !0
        }]]
          , ep = {
            code: function(e) {
                var t = e.inline
                  , n = e.node
                  , a = e.className
                  , i = e.children
                  , s = (0,
                r.Z)(e, G)
                  , o = (0,
                f.useContext)(B.h7);
                if (t) {
                    if (null != o) {
                        var l = (0,
                        z.B)(n)
                          , d = (0,
                        B.jM)(l)
                          , c = o.displayedCitations;
                        if (d >= 0 && d < c.length)
                            return (0,
                            V.jsx)(B.s8, {
                                index: d,
                                displayInfo: c[d]
                            })
                    }
                    return (0,
                    V.jsx)("code", W(W({
                        className: a
                    }, s), {}, {
                        children: i
                    }))
                }
                var u, m = null == a ? void 0 : null === (u = a.split(" ").filter(function(e) {
                    return e.startsWith("language-")
                })) || void 0 === u ? void 0 : u[0], p = m ? m.split("-")[1] : "";
                return (0,
                V.jsx)(U.Z, {
                    language: p,
                    className: a,
                    content: (0,
                    z.B)(n),
                    children: i
                })
            }
        }
          , ex = ["node", "onClick", "clientThreadId", "messageId", "href"]
          , eg = ["src", "clientThreadId"]
          , eh = ["node"]
          , ey = ["node"];
        function ev(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ek(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ev(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ev(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var eb = {}
          , ej = {};
        function ew(e, t) {
            var n, a;
            return (a = void 0 === (a = (0,
            y.a)({
                queryKey: ["safe-url", {
                    serverThreadId: e,
                    url: t
                }],
                queryFn: (n = (0,
                x.Z)(h().mark(function e() {
                    return h().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", {
                                    safe: !0
                                });
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                function() {
                    return n.apply(this, arguments)
                }
                ),
                enabled: null != e && null != t
            }).data) ? {} : a).safe ? t : void 0
        }
        function eM(e) {
            var t, n = e.node, a = e.onClick, i = e.clientThreadId, o = e.messageId, c = e.href, u = (0,
            r.Z)(e, ex), m = a, f = null === (t = n.properties) || void 0 === t ? void 0 : t.href;
            null != o && "string" == typeof f && f.includes("/bing/redirect") && (eb[o] || (l.A.logEvent(d.M.browsingShowBingLink, {
                id: o,
                content: f
            }),
            eb[o] = !0),
            m = function(e) {
                ej[o] || (l.A.logEvent(d.M.browsingClickBingLink, {
                    id: o,
                    content: f
                }),
                ej[o] = !0),
                null == a || a(e)
            }
            );
            var p = ew((0,
            s.XK)(i), c);
            return (0,
            V.jsx)("a", ek(ek({
                onClick: m
            }, u), {}, {
                href: p
            }))
        }
        function eC(e) {
            var t = e.src
              , n = e.clientThreadId
              , a = (0,
            r.Z)(e, eg)
              , i = ew((0,
            s.XK)(n), t);
            return null == i ? (0,
            V.jsx)("div", {}) : (0,
            V.jsx)("img", ek(ek({}, a), {}, {
                src: i
            }))
        }
        function eT(e) {
            var t = e.size
              , n = e.children
              , a = e.className
              , s = e.clientThreadId
              , l = e.messageId
              , d = (0,
            m.F)().resolvedTheme
              , x = null !== (0,
            f.useContext)(o.gB)
              , g = (0,
            i.t)()
              , h = null == g ? void 0 : g.hasPlusFeatures()
              , y = (0,
            f.useMemo)(function() {
                return ek(ek({}, ep), {}, {
                    a: function(e) {
                        var t, n = e.node, a = (0,
                        r.Z)(e, eh), i = null === (t = n.properties) || void 0 === t ? void 0 : t.href;
                        return "string" == typeof i && i.startsWith(es) ? x ? (0,
                        V.jsx)(el, ek({}, a)) : h && null != s && null != l ? (0,
                        V.jsx)(eo, ek(ek({}, a), {}, {
                            clientThreadId: s,
                            messageId: l,
                            href: i
                        })) : null : (0,
                        V.jsx)(eM, ek(ek({}, e), {}, {
                            clientThreadId: s,
                            messageId: l
                        }))
                    },
                    img: function(e) {
                        var t, n = e.node, a = (0,
                        r.Z)(e, ey), i = null === (t = n.properties) || void 0 === t ? void 0 : t.src;
                        return "string" == typeof i && (i.startsWith(es) || i.startsWith("attachment:")) ? null : (0,
                        V.jsx)(eC, ek(ek({}, a), {}, {
                            clientThreadId: s
                        }))
                    }
                })
            }, [s, h, x, l]);
            return (0,
            V.jsx)(c.S, {
                name: "formatted_text_error",
                fallback: function() {
                    return (0,
                    V.jsx)(V.Fragment, {
                        children: n
                    })
                },
                children: (0,
                V.jsx)(p.D, {
                    rehypePlugins: ef,
                    remarkPlugins: em,
                    linkTarget: "_new",
                    className: (0,
                    u.default)(a, "markdown prose w-full break-words dark:prose-invert", "dark" === d ? "dark" : "light", "small" === (void 0 === t ? "medium" : t) && "prose-xs"),
                    transformLinkUri: eu,
                    components: y,
                    children: n
                })
            })
        }
    },
    29703: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return o
            }
        });
        var a = n(37097)
          , r = n(29124)
          , i = n.n(r)
          , s = n(35250);
        function o(e) {
            var t = e.gizmo
              , n = (0,
            a.uy)(t.gizmo.display.name);
            return (0,
            s.jsxs)(i(), {
                children: [(0,
                s.jsx)("title", {
                    children: n
                }), (0,
                s.jsx)("meta", {
                    name: "title",
                    content: n
                }, "title"), (0,
                s.jsx)("meta", {
                    property: "og:site_name",
                    content: "ChatGPT"
                }, "og:site_name"), (0,
                s.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }, "og:type"), (0,
                s.jsx)("meta", {
                    property: "og:title",
                    content: n
                }, "og:title"), (0,
                s.jsx)("meta", {
                    property: "og:url",
                    content: (0,
                    a.i6)(t)
                }, "og:url"), t.gizmo.display.description && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)("meta", {
                        name: "description",
                        content: t.gizmo.display.description
                    }, "description"), (0,
                    s.jsx)("meta", {
                        property: "og:description",
                        content: t.gizmo.display.description
                    }, "og:description")]
                }), t.gizmo.display.profile_picture_url && (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)("meta", {
                        property: "og:image",
                        content: t.gizmo.display.profile_picture_url
                    }, "og:image"), (0,
                    s.jsx)("meta", {
                        property: "og:image:width",
                        content: "512"
                    }, "og:image:width"), (0,
                    s.jsx)("meta", {
                        property: "og:image:height",
                        content: "512"
                    }, "og:image:height")]
                })]
            })
        }
    },
    2454: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return s
            }
        });
        var a = n(73040)
          , r = n.n(a)
          , i = n(35250);
        function s(e) {
            var t = e.href
              , n = e.children;
            return (0,
            i.jsx)(r(), {
                href: t,
                shallow: !0,
                className: "flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-medium text-white transition hover:opacity-70",
                children: n
            })
        }
    },
    22364: function(e, t, n) {
        "use strict";
        n.d(t, {
            C: function() {
                return c
            }
        });
        var a = n(36112)
          , r = n(91530)
          , i = n.n(r)
          , s = n(78103);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var d = {
            showReferralInviteModal: !1
        }
          , c = (0,
        s.ZP)()(function(e) {
            return l(l({}, d), {}, {
                setShowReferralInviteModal: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                    e({
                        showReferralInviteModal: t
                    }),
                    null == n || n()
                }
            })
        })
    },
    58765: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bu: function() {
                return l
            },
            t9: function() {
                return o
            }
        });
        var a = n(43477)
          , r = n(78103)
          , i = (0,
        a.Z)(function() {
            return {
                delayedRenderingMessageIds: new Set
            }
        })
          , s = (0,
        r.ZP)(i);
        function o() {
            return s(function(e) {
                return e.delayedRenderingMessageIds
            })
        }
        var l = {
            addDelayedRenderingMessage: function(e) {
                i.setState(function(t) {
                    if (t.delayedRenderingMessageIds.has(e))
                        return t;
                    var n = new Set(t.delayedRenderingMessageIds);
                    return n.add(e),
                    {
                        delayedRenderingMessageIds: n
                    }
                })
            },
            removeDelayedRenderingMessage: function(e) {
                i.setState(function(t) {
                    if (!t.delayedRenderingMessageIds.has(e))
                        return t;
                    var n = new Set(t.delayedRenderingMessageIds);
                    return n.delete(e),
                    {
                        delayedRenderingMessageIds: n
                    }
                })
            }
        }
    },
    5020: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            },
            h: function() {
                return p
            }
        });
        var a = n(11591)
          , r = n(41543)
          , i = n(7144)
          , s = n(67311)
          , o = n(94968)
          , l = n(12379)
          , d = n(86543)
          , c = n(34317)
          , u = n(73524)
          , m = n(35250);
        function f(e) {
            var t, n = e.messages, o = e.clientThreadId, f = e.currentModelId, x = e.isLastMessageInTurn, v = e.isRequestActive, k = e.isRetrieval, b = (0,
            i.hz)(), j = n.map(function(e) {
                return e.message
            }), w = p(j), M = w.filter(function(e) {
                return function(e, t) {
                    switch (e.type) {
                    case a.$x.Search:
                        return !0;
                    case a.$x.Click:
                    case a.$x.OpenUrl:
                    case a.$x.Quote:
                    case a.$x.QuoteFull:
                    case a.$x.QuoteLines:
                        return t ? null != h(e) : null != g(e);
                    case a.$x.Back:
                    case a.$x.Scroll:
                        return !1;
                    default:
                        return (0,
                        s.Z)(e.type),
                        !1
                    }
                }(e, k)
            }), C = (0,
            r.WA)(o), T = [a.OL.GizmoInteraction, a.OL.GizmoMagicCreate, a.OL.GizmoTest].includes(C.kind), P = d.X.Running, O = k ? T ? y.searchingKnowledge : y.startingRetrieval : y.starting;
            if (j.some(u.We))
                P = d.X.Stopped,
                O = k ? T ? y.searchingKnowledgeStopped : y.retrievalStopped : y.browsingStopped;
            else if (x && v) {
                if (M.length > 0) {
                    var I = function(e, t, n) {
                        switch (e.type) {
                        case a.$x.Search:
                            if (t)
                                return n ? {
                                    displayMessage: y.searchingKnowledge
                                } : {
                                    displayMessage: y.startingRetrieval
                                };
                            var r, i, o = null === (r = e.message.metadata) || void 0 === r ? void 0 : null === (i = r.args) || void 0 === i ? void 0 : i[0];
                            if (null != o)
                                return {
                                    displayMessage: y.searchingForQuery,
                                    displayMessageValues: {
                                        query: o
                                    }
                                };
                            return {
                                displayMessage: y.searching
                            };
                        case a.$x.Click:
                        case a.$x.OpenUrl:
                        case a.$x.Quote:
                        case a.$x.QuoteFull:
                        case a.$x.QuoteLines:
                            if (t)
                                return n ? {
                                    displayMessage: y.searchingKnowledge
                                } : {
                                    displayMessage: y.readingDocument,
                                    displayMessageValues: {
                                        filename: h(e)
                                    }
                                };
                            var l = g(e);
                            return {
                                displayMessage: y.visiting,
                                displayMessageValues: {
                                    url: null != l ? function(e) {
                                        try {
                                            return new URL(e).hostname
                                        } catch (e) {
                                            return null
                                        }
                                    }(l) : null
                                }
                            };
                        case a.$x.Back:
                        case a.$x.Scroll:
                            throw Error("No display string for command: ".concat(e.type));
                        default:
                            throw (0,
                            s.Z)(e.type),
                            Error("Unknown command type: ".concat(e.type))
                        }
                    }(M[M.length - 1], k, T);
                    O = I.displayMessage,
                    t = I.displayMessageValues
                }
            } else
                w.length > 0 && w.every(function(e) {
                    return e.didError
                }) ? (P = d.X.Error,
                O = k ? T ? y.searchingKnowledgeFailed : y.retrievalFailed : y.browsingFailed) : (P = d.X.Finished,
                O = void 0);
            return "gpt-4-hogwild-browsing" === f || f.includes("maraschino") || null != b && b.includes("hogwild_browsing") ? P === d.X.Running ? (0,
            m.jsx)("div", {
                className: "text-message [.text-message+&]:mt-5",
                children: (0,
                m.jsx)("div", {
                    className: "result-thinking relative"
                })
            }) : null : (0,
            m.jsx)(d.Z, {
                conversationMessages: n,
                icon: k ? c.BK : c.ED,
                status: P,
                displayMessage: O,
                displayMessageValues: t,
                estimatedToolDurationMs: k ? l.cf : l.Tv
            })
        }
        function p(e) {
            return e.map(function(t, n) {
                if (t.author.role !== a.uU.Tool || n > 0 && x(t) && x(e[n - 1]))
                    return null;
                if ("browser_one_box" === t.author.name)
                    return {
                        type: "search",
                        didError: "system_error" === t.content.content_type,
                        message: t
                    };
                var r = t.metadata;
                if (!r)
                    return null;
                var i = r.command
                  , s = r.status;
                return i ? {
                    type: i,
                    status: s,
                    didError: "system_error" === t.content.content_type,
                    message: t
                } : null
            }).filter(Boolean)
        }
        function x(e) {
            var t, n, a;
            return (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote" || (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote_full" || (null === (a = e.metadata) || void 0 === a ? void 0 : a.command) === "quote_lines"
        }
        function g(e) {
            var t, n, a = null === (t = e.message.metadata) || void 0 === t ? void 0 : null === (n = t._cite_metadata) || void 0 === n ? void 0 : n.metadata_list[0];
            return null != a && "file" !== a.type ? a.url : null
        }
        function h(e) {
            var t, n, a = null === (t = e.message.metadata) || void 0 === t ? void 0 : null === (n = t._cite_metadata) || void 0 === n ? void 0 : n.metadata_list[0];
            return null != a && "file" === a.type ? a.name : null
        }
        var y = (0,
        o.vU)({
            starting: {
                id: "browsingMessage.startingV3",
                defaultMessage: "Doing research with Bing"
            },
            browsingStopped: {
                id: "browsingMessage.browsingStopped",
                defaultMessage: "Stopped browsing"
            },
            browsingFailed: {
                id: "browsingMessage.browsingFailed",
                defaultMessage: "Error browsing"
            },
            searching: {
                id: "browsingMessage.searching",
                defaultMessage: "Searching Bing"
            },
            searchingForQuery: {
                id: "browsingMessage.searchingForQuery",
                defaultMessage: "Searching “{query}”"
            },
            visiting: {
                id: "browsingMessage.visiting",
                defaultMessage: "Visiting {url}"
            },
            startingRetrieval: {
                id: "browsingMessage.startingRetrieval",
                defaultMessage: "Reading documents"
            },
            retrievalStopped: {
                id: "browsingMessage.retrievalStopped",
                defaultMessage: "Stopped reading documents"
            },
            retrievalFailed: {
                id: "browsingMessage.retrievalFailed",
                defaultMessage: "Error reading documents"
            },
            readingDocument: {
                id: "browsingMessage.readingDocument",
                defaultMessage: "Reading {filename}"
            },
            searchingKnowledge: {
                id: "browsingMessage.searchingKnowledge",
                defaultMessage: "Searching my knowledge"
            },
            searchingKnowledgeStopped: {
                id: "browsingMessage.searchingKnowledgeStopped",
                defaultMessage: "Stopped searching knowledge"
            },
            searchingKnowledgeFailed: {
                id: "browsingMessage.searchingKnowledgeFailed",
                defaultMessage: "Error searching knowledge"
            }
        })
    },
    65100: function(e, t, n) {
        "use strict";
        n.d(t, {
            XX: function() {
                return S
            },
            Xt: function() {
                return N
            },
            ZP: function() {
                return I
            },
            O1: function() {
                return R
            }
        });
        var a = n(3125)
          , r = n(11591)
          , i = n(55161)
          , s = n(21935)
          , o = n(5063)
          , l = n(19841)
          , d = n(77997)
          , c = n(70079)
          , u = n(70671)
          , m = n(94968)
          , f = n(36112)
          , p = n(66027)
          , x = n(73929)
          , g = n(61236)
          , h = n(1454)
          , y = n(32004)
          , v = n(35250);
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function b(e) {
            var t = e.jupyterMessage
              , n = null !== (0,
            c.useContext)(x.gB)
              , a = (0,
            u.Z)();
            if (n)
                return (0,
                v.jsxs)("div", {
                    className: "my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
                    children: [(0,
                    v.jsx)(h.LFN, {
                        className: "icon-lg"
                    }), (0,
                    v.jsx)(y.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(Object(n), !0).forEach(function(t) {
                                (0,
                                f.Z)(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, M.imageNotSupported))]
                });
            if (null != t.image_payload)
                return (0,
                v.jsx)("img", {
                    className: "my-1",
                    src: "data:image/png;base64,".concat(t.image_payload),
                    alt: a.formatMessage(M.altText)
                });
            if (null != t.image_url) {
                var r = (0,
                i.Iy)(t.image_url);
                return (0,
                v.jsx)(w, {
                    fileId: r
                })
            }
            return null
        }
        var j = Math.log(151) / Math.log(1.5);
        function w(e) {
            var t = e.fileId
              , n = (0,
            u.Z)()
              , a = (0,
            g.a)({
                queryKey: ["getFileDownloadLink", t],
                queryFn: function() {
                    return p.ZP.getFileDownloadLink(t)
                },
                refetchInterval: function(e) {
                    var t, n = e.state.dataUpdateCount;
                    return (null === (t = e.state.data) || void 0 === t ? void 0 : t.status) !== "success" && !(n > j) && "error" !== e.state.status && 100 * Math.pow(1.5, n)
                }
            }).data
              , r = (null == a ? void 0 : a.status) === "success" ? a.download_url : null;
            return r ? (0,
            v.jsx)("img", {
                src: r,
                className: "my-1",
                alt: n.formatMessage(M.altText)
            }) : null
        }
        var M = (0,
        m.vU)({
            imageNotSupported: {
                id: "CodeExecutionOutputImage.imageNotSupported",
                defaultMessage: "Image output is not supported in a shared chat"
            },
            altText: {
                id: "CodeExecutionOutputImage.altText",
                defaultMessage: "Output image"
            }
        })
          , C = n(12379)
          , T = n(86543)
          , P = n(34317)
          , O = n(73524);
        function I(e) {
            var t, n = e.messages, i = e.isRequestActive, s = (0,
            a.Z)(n, 2), l = s[0], d = s[1], u = (0,
            c.useState)(!1), m = u[0], f = u[1], p = (0,
            c.useState)(!1), x = p[0], g = p[1], h = (0,
            O.We)(l.message), y = null == d ? void 0 : null === (t = d.message.metadata) || void 0 === t ? void 0 : t.aggregate_result, k = T.X.Running, b = F.running;
            return (null == y ? void 0 : y.status) === "success" ? (k = T.X.Finished,
            b = x ? F.finished : void 0) : null != d && d.message.content.content_type !== r.PX.ExecutionOutput || null != y && "running" !== y.status ? (k = T.X.Error,
            b = F.error) : (h || !i) && (k = T.X.Stopped,
            b = F.stopped),
            (0,
            v.jsxs)(v.Fragment, {
                children: [(0,
                v.jsx)(T.Z, {
                    conversationMessages: n,
                    icon: P.BU,
                    status: k,
                    displayMessage: b,
                    displayMessageValues: {
                        expander: function(e) {
                            return (0,
                            v.jsxs)("button", {
                                className: "inline-flex items-center gap-1",
                                onClick: function() {
                                    f(function(e) {
                                        return !e
                                    }),
                                    m || g(!0)
                                },
                                children: [e, (0,
                                v.jsx)(o.ud, {})]
                            })
                        }
                    },
                    estimatedToolDurationMs: C.yF,
                    shouldPersistAfterFinished: x
                }), m && (0,
                v.jsxs)("div", {
                    className: "mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",
                    children: [(0,
                    v.jsx)(S, {
                        message: l.message
                    }), null != d && (0,
                    v.jsx)(N, {
                        message: d.message
                    })]
                }), null != d && (0,
                v.jsx)(D, {
                    message: d.message
                })]
            })
        }
        function S(e) {
            var t = e.message
              , n = (0,
            d.F)().resolvedTheme;
            return (0,
            v.jsx)(s.Z, {
                className: (0,
                l.default)("markdown prose w-full break-words dark:prose-invert", "dark" === n ? "dark" : "light"),
                children: function(e) {
                    function t(e, t) {
                        return "```".concat(t, "\n").concat(e, "\n```")
                    }
                    if ("code" === e.content.content_type)
                        return t(e.content.text, "python");
                    if ("python" === e.recipient) {
                        if ("text" !== e.content.content_type)
                            throw Error("Unexpected content type for code message");
                        var n = e.content.parts;
                        if (1 !== n.length || "string" != typeof n[0])
                            throw Error("Unexpected parts for code message");
                        return t(n[0], "python")
                    }
                    throw Error("Unexpected code message format")
                }(t)
            })
        }
        function N(e) {
            var t, n = e.message, a = (0,
            u.Z)();
            if (n.content.content_type !== r.PX.ExecutionOutput)
                return null;
            var i = null === (t = n.metadata) || void 0 === t ? void 0 : t.aggregate_result;
            if (!i)
                return console.error("Corrupt code execution result message"),
                null;
            var s = i.messages.filter(Z)
              , o = s.length > 0
              , l = null != i.final_expression_output;
            return (0,
            v.jsxs)(v.Fragment, {
                children: [o && (0,
                v.jsx)(_, {
                    label: "STDOUT/STDERR",
                    output: s.map(function(e, t) {
                        return (0,
                        v.jsx)("span", {
                            className: "stderr" === e.stream_name ? "text-red-500" : "",
                            children: e.text
                        }, "".concat(t))
                    })
                }), l && (0,
                v.jsx)(_, {
                    label: a.formatMessage(F.resultLabel),
                    output: i.final_expression_output
                })]
            })
        }
        function _(e) {
            var t = e.label
              , n = e.output;
            return (0,
            v.jsxs)("div", {
                className: "bg-gray-700 p-4 text-xs",
                children: [(0,
                v.jsx)("div", {
                    className: "mb-1 text-gray-400",
                    children: t
                }), (0,
                v.jsx)("div", {
                    className: "prose flex flex-col-reverse text-white",
                    children: (0,
                    v.jsx)("pre", {
                        className: "shrink-0",
                        children: n
                    })
                })]
            })
        }
        function D(e) {
            var t, n = e.message;
            if (n.content.content_type !== r.PX.ExecutionOutput)
                return null;
            var a = null === (t = n.metadata) || void 0 === t ? void 0 : t.aggregate_result;
            return a ? (0,
            v.jsx)(v.Fragment, {
                children: a.messages.filter(R).map(function(e, t) {
                    return (0,
                    v.jsx)(b, {
                        jupyterMessage: e
                    }, t)
                })
            }) : (console.error("Corrupt code execution result message"),
            null)
        }
        function Z(e) {
            return "stream" === e.message_type
        }
        function R(e) {
            return "image" === e.message_type || "image_url"in e && (0,
            i.$H)(e.image_url + "")
        }
        var F = (0,
        m.vU)({
            running: {
                id: "codeInterpreterMessage.runningV2",
                defaultMessage: "<expander>Analyzing</expander>"
            },
            finished: {
                id: "codeInterpreterMessage.finished",
                defaultMessage: "<expander>Finished analyzing</expander>"
            },
            stopped: {
                id: "codeInterpreterMessage.stoppedV2",
                defaultMessage: "<expander>Stopped analyzing</expander>"
            },
            error: {
                id: "codeInterpreterMessage.errorV2",
                defaultMessage: "<expander>Error analyzing</expander>"
            },
            resultLabel: {
                id: "codeInterpreterMessage.resultLabel",
                defaultMessage: "Result"
            }
        })
    },
    86543: function(e, t, n) {
        "use strict";
        n.d(t, {
            X: function() {
                return i
            },
            Z: function() {
                return y
            }
        });
        var a, r, i, s, o = n(68919), l = n(70079);
        function d(e, t) {
            var n = (0,
            l.useRef)(e);
            (0,
            l.useEffect)(function() {
                n.current = e
            }, [e]),
            (0,
            l.useEffect)(function() {
                if (null !== t) {
                    var e = window.setInterval(function() {
                        n.current()
                    }, t);
                    return function() {
                        return clearInterval(e)
                    }
                }
            }, [t])
        }
        var c = n(19841)
          , u = n(70737)
          , m = n(97296)
          , f = n(70671)
          , p = n(58765)
          , x = n(34317)
          , g = n(73524)
          , h = n(35250);
        function y(e) {
            var t = e.conversationMessages
              , n = e.icon
              , a = e.status
              , r = e.displayMessage
              , o = e.displayMessageValues
              , c = e.estimatedToolDurationMs
              , u = e.animationLoopDurationMs
              , m = e.shouldPersistAfterFinished
              , f = void 0 !== m && m
              , x = (0,
            l.useState)(a === i.Running ? s.RunningEnterAnimation : s.SkippingEnterAnimation)
              , g = x[0]
              , y = x[1]
              , j = (0,
            l.useState)(0)
              , w = j[0]
              , M = j[1];
            (0,
            l.useEffect)(function() {
                a === i.Error ? y(s.ToolError) : a === i.Stopped ? y(s.ToolStopped) : a === i.Paused ? y(s.ToolPaused) : a === i.Finished ? g === s.ToolRunning ? y(s.RunningFillProgressBarAnimation) : y(s.ToolFinished) : a === i.Running && g === s.ToolPaused && (y(s.ToolRunning),
                M(function(e) {
                    return e + 1
                }))
            }, [a]);
            var C = b(g) || g === s.RunningFinishAnimation || g === s.FinishAnimationComplete || g === s.RunningHideAnimation || g === s.ToolPaused;
            return ((0,
            l.useEffect)(function() {
                var e = t[0].message.id;
                if (C)
                    return p.Bu.addDelayedRenderingMessage(e),
                    function() {
                        p.Bu.removeDelayedRenderingMessage(e)
                    }
            }, [C]),
            d(function() {
                b(g) && M(function(e) {
                    return e + 1
                })
            }, void 0 === u ? 2e3 : u),
            g !== s.ToolFinished || f) ? (0,
            h.jsxs)("div", {
                className: "my-2.5 flex items-center gap-2.5",
                children: [(0,
                h.jsx)(v, {
                    icon: n,
                    status: a,
                    uiState: g,
                    estimatedToolDurationMs: c,
                    animationLoopCounter: w,
                    shouldPersistAfterFinished: f,
                    onFillProgressBarAnimationComplete: function() {
                        return y(s.RunningFinishAnimation)
                    },
                    onFinishAnimationComplete: function() {
                        y(s.FinishAnimationComplete),
                        setTimeout(function() {
                            f ? y(s.ToolFinished) : y(s.RunningHideAnimation)
                        }, 100)
                    },
                    onHideAnimationComplete: function() {
                        return y(s.ToolFinished)
                    }
                }), (0,
                h.jsx)(k, {
                    displayMessage: r,
                    displayMessageValues: o,
                    uiState: g,
                    animationLoopCounter: w,
                    onEnterAnimationComplete: function() {
                        return y(s.ToolRunning)
                    }
                })]
            }) : null
        }
        function v(e) {
            var t, n, a, r = e.icon, f = e.status, p = e.uiState, y = e.estimatedToolDurationMs, v = e.animationLoopCounter, k = e.shouldPersistAfterFinished, j = e.onFillProgressBarAnimationComplete, w = e.onFinishAnimationComplete, M = e.onHideAnimationComplete, C = (0,
            l.useState)(0), T = C[0], P = C[1];
            d(function() {
                b(p) ? P(function(e) {
                    return e + 50
                }) : p === s.ToolPaused && P(0)
            }, 50),
            b(p) || p === s.ToolPaused ? (t = "running",
            n = (0,
            h.jsx)(r, {
                animationLoopCounter: v
            }),
            a = "bg-transparent") : p === s.RunningFinishAnimation || p === s.FinishAnimationComplete || p === s.ToolFinished && k ? (t = "finished",
            n = (0,
            h.jsx)(x.Hk, {}),
            a = "bg-brand-purple") : f === i.Error ? (t = "error",
            n = (0,
            h.jsx)(x.gE, {}),
            a = "bg-orange-500") : f === i.Stopped && (t = "stopped",
            n = (0,
            h.jsx)(x.D8, {}),
            a = "bg-gray-300");
            var O = {
                opacity: 0,
                scale: 0,
                rotate: -180,
                x: 0
            }
              , I = {
                type: "spring",
                bounce: .3,
                duration: .7
            }
              , S = {
                opacity: 0,
                scale: .6,
                rotate: 0,
                x: 0
            };
            p === s.RunningEnterAnimation ? (O = {
                opacity: 0,
                scale: .5,
                rotate: -180,
                x: -8
            },
            I = {
                type: "spring",
                bounce: .3,
                duration: .5
            }) : p === s.SkippingEnterAnimation ? O = !1 : p === s.FinishAnimationComplete && (S = {
                opacity: 0,
                scale: 0,
                rotate: 0,
                x: 0
            },
            I = {
                type: "spring",
                bounce: .3,
                duration: .5
            });
            var N = (0,
            g.Lg)(T, y);
            return (0,
            h.jsx)("div", {
                className: "relative h-5 w-5 shrink-0",
                children: (0,
                h.jsx)(u.M, {
                    onExitComplete: function() {
                        p === s.RunningHideAnimation && M()
                    },
                    children: null != t && (0,
                    h.jsxs)(m.E.div, {
                        className: (0,
                        c.default)("absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full text-white", a),
                        initial: O,
                        animate: {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            x: 0
                        },
                        exit: S,
                        transition: I,
                        onAnimationComplete: function() {
                            p === s.RunningFinishAnimation && w()
                        },
                        children: [n, (b(p) || p === s.ToolPaused) && (0,
                        h.jsx)(o.Z, {
                            percentage: p === s.RunningFillProgressBarAnimation ? 100 : N,
                            thickness: 1.5 / 23,
                            className: "absolute left-1/2 top-1/2 h-[23px] w-[23px] -translate-x-1/2 -translate-y-1/2 text-brand-purple",
                            backgroundStrokeClassName: "stroke-brand-purple/25 dark:stroke-brand-purple/50",
                            transitionDuration: p === s.RunningFillProgressBarAnimation ? "".concat((100 - N) / 100, "s") : void 0,
                            transitionTimingFunction: p === s.RunningFillProgressBarAnimation ? "cubic-bezier(0.55, 0, 1, 1)" : void 0,
                            onTransitionEnd: function() {
                                p === s.RunningFillProgressBarAnimation && j()
                            }
                        })]
                    }, t)
                })
            })
        }
        function k(e) {
            var t = e.displayMessage
              , n = e.displayMessageValues
              , a = e.uiState
              , r = e.animationLoopCounter
              , i = e.onEnterAnimationComplete
              , o = (0,
            f.Z)()
              , d = (0,
            l.useState)({
                message: t,
                values: n
            })
              , p = d[0]
              , x = d[1];
            (0,
            l.useEffect)(function() {
                a === s.ToolRunning && x({
                    message: t,
                    values: n
                })
            }, [r]),
            (0,
            l.useEffect)(function() {
                b(a) || x({
                    message: t,
                    values: n
                })
            }, [a, t, n]);
            var g = {
                opacity: 0,
                x: 0,
                y: 15
            }
              , y = {
                type: "spring",
                bounce: .3,
                opacity: {
                    duration: .15
                },
                y: {
                    duration: .3
                }
            };
            a === s.RunningEnterAnimation ? (g = {
                opacity: 0,
                x: -8,
                y: 0
            },
            y = {
                type: "spring",
                bounce: .3,
                duration: .5,
                delay: .15
            }) : a === s.SkippingEnterAnimation && (g = !1);
            var v = null != p.message ? o.formatMessage(p.message, p.values) : void 0;
            return (0,
            h.jsx)("div", {
                className: (0,
                c.default)("relative h-5 w-full leading-5", "-mt-[0.75px]", a === s.ToolError || a === s.ToolStopped ? "text-token-text-tertiary" : "text-token-text-secondary"),
                children: (0,
                h.jsx)(u.M, {
                    children: null != v && (0,
                    h.jsx)(m.E.div, {
                        className: "absolute left-0 top-0 line-clamp-1",
                        initial: g,
                        animate: {
                            opacity: 1,
                            x: 0,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            x: 0,
                            y: -15
                        },
                        transition: y,
                        onAnimationComplete: function() {
                            a === s.RunningEnterAnimation && i()
                        },
                        children: v
                    }, v.toString())
                })
            })
        }
        function b(e) {
            return e === s.RunningEnterAnimation || e === s.ToolRunning || e === s.RunningFillProgressBarAnimation
        }
        (a = i || (i = {}))[a.Running = 0] = "Running",
        a[a.Finished = 1] = "Finished",
        a[a.Error = 2] = "Error",
        a[a.Stopped = 3] = "Stopped",
        a[a.Paused = 4] = "Paused",
        (r = s || (s = {}))[r.RunningEnterAnimation = 0] = "RunningEnterAnimation",
        r[r.SkippingEnterAnimation = 1] = "SkippingEnterAnimation",
        r[r.ToolRunning = 2] = "ToolRunning",
        r[r.RunningFillProgressBarAnimation = 3] = "RunningFillProgressBarAnimation",
        r[r.RunningFinishAnimation = 4] = "RunningFinishAnimation",
        r[r.FinishAnimationComplete = 5] = "FinishAnimationComplete",
        r[r.RunningHideAnimation = 6] = "RunningHideAnimation",
        r[r.ToolFinished = 7] = "ToolFinished",
        r[r.ToolError = 8] = "ToolError",
        r[r.ToolStopped = 9] = "ToolStopped",
        r[r.ToolPaused = 10] = "ToolPaused"
    },
    34317: function(e, t, n) {
        "use strict";
        n.d(t, {
            ED: function() {
                return M
            },
            BU: function() {
                return T
            },
            CJ: function() {
                return O
            },
            uP: function() {
                return _
            },
            KC: function() {
                return D
            },
            dX: function() {
                return Z
            },
            Ts: function() {
                return P
            },
            BK: function() {
                return C
            },
            gE: function() {
                return S
            },
            Hk: function() {
                return I
            },
            D8: function() {
                return N
            }
        });
        var a = n(36112)
          , r = n(14972)
          , i = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[3.5,6.75],"ix":2},"a":{"a":0,"k":[5.999855130910873,5.99917334318161],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"dot","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3.5,3.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10.00000762939453,9.997123718261719],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":100,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[410],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":360,"s":[770],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[720],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":4,"ty":4,"nm":"compass","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.897755676788864,2.156718939201098],[9.466585676788863,0.04442893920109814],[10.31768567678886,0.895618939201098],[8.205185676788863,6.464308939201097],[6.464305676788864,8.205198939201097],[0.8956156767888639,10.3176989392011],[0.04442567678886356,9.466498939201099],[2.156725676788863,3.897748939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098]],"i":[[0,0],[-1.856276666666666,0.7040966666666666],[0.2018000000000004,-0.5320100000000001],[0.7041666666666675,-1.85623],[0.8026800000000005,-0.3044999999999982],[1.85623,-0.7041666666666657],[-0.2018,0.5320999999999998],[-0.7040999999999995,1.8562499999999993],[-0.80274,0.3044900000000004],[0,0],[0,0]],"o":[[1.856276666666667,-0.7040966666666666],[0.532,-0.20181],[-0.7041666666666675,1.8562299999999992],[-0.3044999999999991,0.8025900000000004],[-1.85623,0.7041666666666693],[-0.5320100000000001,0.2018000000000022],[0.7041,-1.85625],[0.3044800000000008,-0.8027300000000004],[0,0],[0,0],[1.856276666666667,-0.7040966666666666]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-5.181057929992676,-5.181064605712891],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , s = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[3.5,6.75],"ix":2},"a":{"a":0,"k":[5.999855130910873,5.99917334318161],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"dot","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3.5,3.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10.00000762939453,9.997123718261719],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":100,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[410],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":360,"s":[770],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[720],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":4,"ty":4,"nm":"compass","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.897755676788864,2.156718939201098],[9.466585676788863,0.04442893920109814],[10.31768567678886,0.895618939201098],[8.205185676788863,6.464308939201097],[6.464305676788864,8.205198939201097],[0.8956156767888639,10.3176989392011],[0.04442567678886356,9.466498939201099],[2.156725676788863,3.897748939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098],[3.897755676788864,2.156718939201098]],"i":[[0,0],[-1.856276666666666,0.7040966666666666],[0.2018000000000004,-0.5320100000000001],[0.7041666666666675,-1.85623],[0.8026800000000005,-0.3044999999999982],[1.85623,-0.7041666666666657],[-0.2018,0.5320999999999998],[-0.7040999999999995,1.8562499999999993],[-0.80274,0.3044900000000004],[0,0],[0,0]],"o":[[1.856276666666667,-0.7040966666666666],[0.532,-0.20181],[-0.7041666666666675,1.8562299999999992],[-0.3044999999999991,0.8025900000000004],[-1.85623,0.7041666666666693],[-0.5320100000000001,0.2018000000000022],[0.7041,-1.85625],[0.3044800000000008,-0.8027300000000004],[0,0],[0,0],[1.856276666666667,-0.7040966666666666]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-5.181057929992676,-5.181064605712891],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , o = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[12,12],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[4.3226,0],[0.8041999999999998,0],[0,0.8041],[0.8041999999999998,1.6081],[4.3226,1.6081],[5.126800000000001,0.8041],[4.3226,0],[4.3226,0],[4.3226,0]],"i":[[0,0],[1.1728000000000005,0],[0,-0.4441000000000006],[-0.4441000000000006,0],[-1.1728000000000005,0],[0,0.4441000000000006],[0.4441999999999986,0],[0,0],[0,0]],"o":[[-1.1728000000000005,0],[-0.4441000000000006,0],[0,0.4441000000000006],[1.1728000000000005,0],[0.4441999999999986,0],[0,-0.4441000000000006],[0,0],[0,0],[-1.1728000000000005,0]]}}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":0.100515,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":70,"s":[11.79640007019043,13.51219940185547],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":146,"s":[11.79640007019043,16.51219940185547],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":148,"s":[11.79640007019043,9.401088290744358],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":195,"s":[11.79640007019043,13.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":270,"s":[11.79640007019043,13.51219940185547],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":346,"s":[11.79640007019043,16.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":348,"s":[11.79640007019043,9.401088290744358],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":395,"s":[11.79640007019043,13.51219940185547],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":70,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":146,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":195,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":270,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":346,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":348,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":395,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[1.28704,0.2207774999999987],[0.2208300000000003,0.2207774999999987],[0.2208300000000003,1.286817499999998],[2.100320000000001,3.165917499999999],[0.2208300000000003,5.045017499999998],[0.2208300000000003,6.111017499999999],[1.28704,6.111017499999999],[3.69972,3.6989174999999985],[3.69972,2.6329175],[1.28704,0.2207774999999987],[1.28704,0.2207774999999987],[1.28704,0.2207774999999987]],"i":[[0,0],[0.2944300000000002,-0.2943700000000007],[-0.2944399999999998,-0.2943799999999985],[-0.6264966666666663,-0.6263666666666676],[0.6264966666666671,-0.6263666666666659],[-0.2944399999999998,-0.2943999999999996],[-0.2944300000000002,0.2943999999999996],[-0.8042266666666666,0.8040333333333329],[0.2943999999999996,0.2942999999999998],[0.8042266666666666,0.8040466666666664],[0,0],[0,0]],"o":[[-0.2944300000000002,-0.2943700000000007],[-0.2944399999999998,0.2943800000000003],[0.6264966666666671,0.6263666666666676],[-0.6264966666666663,0.6263666666666659],[-0.2944399999999998,0.2943999999999996],[0.2944300000000002,0.2943999999999996],[0.8042266666666666,-0.8040333333333329],[0.2943999999999996,-0.2943999999999996],[-0.8042266666666666,-0.8040466666666664],[0,0],[0,0],[-0.2944300000000002,-0.2943700000000007]]}}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":0.201031,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":76,"s":[7.026679992675781,8.836983680725098],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":136,"s":[13.00268173217773,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":138,"s":[2,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[7.026679992675781,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[7.026679992675781,8.834091186523438],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":336,"s":[13,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":338,"s":[2,8.834091186523438],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[7.03,8.834091186523438],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":1,"k":[{"t":136,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":76,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":136,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":276,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":336,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":338,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":400,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , l = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[90],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[180],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[180],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[270],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[360],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"moon","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[2.66029,2.2502500000000003],[2.94257,2.2253300000000005],[3.16411,2.15946],[3.3642200000000004,2.1007100000000003],[3.4624800000000002,2.13988],[3.5,2.24491],[3.48749,2.3303700000000003],[3.45176,2.4336200000000003],[3.17483,2.87157],[2.79071,3.2080400000000004],[2.32261,3.42523],[1.8027100000000003,3.5],[1.08448,3.36648],[0.5109700000000004,2.9926200000000005],[0.13400000000000034,2.4229400000000005],[0,1.70727],[0.13935999999999993,1.0129700000000001],[0.5306300000000004,0.4290440000000002],[1.1219999999999999,0.03738600000000025],[1.2095500000000001,0.00890100000000027],[1.2881600000000004,2.220446049250313e-16],[1.4007100000000001,0.042726000000000264],[1.4435900000000004,0.14954200000000017],[1.4275099999999998,0.23855500000000018],[1.3864200000000002,0.33290900000000023],[1.3256800000000002,0.49313300000000027],[1.2881600000000004,0.6960800000000003],[1.2756499999999997,0.9150600000000002],[1.3703399999999997,1.4722800000000003],[1.6472699999999998,1.8942000000000003],[2.0832100000000002,2.15946],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003]],"i":[[0,0],[-0.09170999999999996,0.016619999999999635],[-0.05597999999999992,0.027300000000000324],[-0.05837000000000003,0],[-0.02382000000000062,-0.02610999999999919],[0,-0.04390999999999945],[0.00833999999999957,-0.03204999999999991],[0.016680000000000028,-0.03678999999999988],[0.1131599999999997,-0.13056],[0.14412000000000003,-0.09376000000000051],[0.16795000000000027,-0.04985000000000017],[0.17985000000000007,0],[0.21915999999999958,0.08901000000000003],[0.16317999999999966,0.16141999999999967],[0.08932999999999947,0.2183799999999998],[0,0.25873999999999997],[-0.09290999999999983,0.21957000000000004],[-0.16794000000000064,0.16853600000000002],[-0.22510999999999992,0.09138599999999997],[-0.026209999999999845,0.005934999999999913],[-0.025020000000000486,0],[-0.02739000000000047,-0.028484000000000065],[0,-0.04272599999999993],[0.010720000000000063,-0.030856999999999912],[0.017869999999999386,-0.03323100000000001],[0.01666999999999952,-0.06290200000000001],[0.008329999999999949,-0.07357999999999998],[0,-0.07359000000000004],[-0.06312999999999924,-0.16497000000000006],[-0.12029999999999941,-0.11630999999999991],[-0.17032999999999987,-0.06170999999999971],[-0.21321000000000012,0],[0,0],[0,0]],"o":[[0.09647000000000006,0],[0.09172000000000047,-0.016620000000000523],[0.07504000000000044,-0.03915999999999986],[0.041679999999999495,0],[0.025009999999999977,0.026110000000000078],[0,0.02493000000000034],[-0.00714000000000059,0.03204000000000029],[-0.07146000000000008,0.16141000000000005],[-0.11195999999999984,0.1305500000000004],[-0.14412000000000003,0.09493999999999936],[-0.1667500000000004,0.04985000000000017],[-0.2596600000000002,0],[-0.21916000000000047,-0.0878300000000003],[-0.16198000000000068,-0.16141000000000005],[-0.08933000000000035,-0.21838000000000068],[0,-0.24329999999999985],[0.0929000000000002,-0.22075],[0.16913,-0.16971899999999995],[0.03216000000000019,-0.013056000000000068],[0.02738999999999958,-0.005933999999999995],[0.04763999999999946,0],[0.02858999999999945,0.028484999999999983],[0,0.028484000000000065],[-0.009520000000000195,0.02967200000000003],[-0.02382000000000062,0.04391400000000001],[-0.016680000000000028,0.06171700000000002],[-0.008340000000000458,0.07240000000000002],[0,0.20650999999999997],[0.06432000000000038,0.16496999999999984],[0.1203000000000003,0.11512999999999995],[0.1715099999999996,0.06052999999999997],[0,0],[0,0],[0.09647000000000006,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[3.75,5.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":1,"k":[{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":140,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":280,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"sun","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[3.00708,3.00704],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.1999998092651376,-3.507655143737793],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":50,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":80,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":340,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[18,18],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":2}},{"ty":"fl","c":{"a":0,"k":[1,0.8392156862745098,0.25098039215686274],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":1,"k":[{"t":50,"s":[9.999999284744263,10.17067003250122],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[9.999999284744263,11.17067003250122],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":150,"s":[9.999999284744263,10.17067003250122],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":250,"s":[9.999999284744263,10.17067003250122],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":300,"s":[9.999999284744263,11.17067003250122],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":350,"s":[9.999999284744263,10.17067003250122],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":6,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[4.18847,0],[4.18847,0.3221899999999991],[0,0.3221899999999991],[0,0],[0,0],[0,0]],"i":[[0,0],[-1.396156666666667,0],[0,-0.1073966666666664],[1.396156666666666,0],[0,0.1073966666666664],[0,0],[0,0]],"o":[[1.396156666666666,0],[0,0.1073966666666664],[-1.396156666666666,0],[0,-0.1073966666666664],[0,0],[0,0],[1.396156666666666,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.900433540344238,3.517374992370605],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"small","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[3.215839629698487,0.4155599999999988],[1.871029629698487,0.4155599999999988],[0.08033652969848645,3.996899999999999],[0.7527406296984864,5.084849999999998],[4.334119629698487,5.084849999999998],[5.006529629698486,3.996899999999999],[3.215839629698487,0.4155599999999988],[3.215839629698487,0.4155599999999988],[3.215839629698487,0.4155599999999988]],"i":[[0,0],[0.2770400000000002,-0.5540800000000004],[0.5968977000000001,-1.19378],[-0.5588519999999999,0],[-1.193793,0],[0.2499200000000004,0.4998400000000003],[0.5968966666666669,1.19378],[0,0],[0,0]],"o":[[-0.27705,-0.5540800000000004],[-0.5968977,1.1937799999999994],[-0.2499269,0.4998400000000003],[1.193793,0],[0.5588600000000001,0],[-0.5968966666666669,-1.19378],[0,0],[0,0],[-0.27705,-0.5540800000000004]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-6.000233173370361,-1.244344711303711],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"big","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":5,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[4.719378057214302,0.41556],[3.374568057214302,0.41556],[0.08033805721430198,7.00394],[0.7527380572143016,8.0919],[7.341158057214302,8.0919],[8.0136580572143,7.00394],[4.719378057214302,0.41556],[4.719378057214302,0.41556],[4.719378057214302,0.41556]],"i":[[0,0],[0.27705,-0.55408],[1.098076666666667,-2.196126666666667],[-0.5588499999999996,0],[-2.196140000000002,0],[0.2499000000000002,0.4998400000000007],[1.098093333333333,2.196126666666667],[0,0],[0,0]],"o":[[-0.2770500000000009,-0.55408],[-1.098076666666667,2.196126666666666],[-0.24993,0.4998400000000007],[2.19614,0],[0.5588999999999995,0],[-1.098093333333332,-2.196126666666666],[0,0],[0,0],[-0.2770500000000009,-0.55408]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.093742370605469,-4.256064891815186],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , d = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[8.6485975,0.1178352687211168],[8.880497499999999,1.074935268721117],[6.6505975,3.304865268721118],[6.6505975,6.016105268721118],[9.3617975,6.016105268721118],[11.5916975,3.786175268721117],[12.5487975,4.018115268721118],[11.1692975,8.727405268721117],[5.5576975,9.820205268721118],[3.272757499999999,12.10510526872112],[0.561517499999999,12.10510526872112],[0.561517499999999,9.393905268721117],[2.8464575,7.109005268721118],[3.9393075,1.497375268721117],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168]],"i":[[0,0],[0.3205000000000009,-0.3204799999999999],[0.7432999999999996,-0.7433100000000001],[-0.7487000000000013,-0.7487000000000013],[-0.7487000000000013,0.7486999999999995],[-0.7433000000000014,0.743310000000001],[-0.09659999999999869,-0.4428200000000011],[1.278300000000002,-1.2783],[1.8610999999999986,0.7885999999999989],[0.7616466666666675,-0.7616333333333323],[0.7486899999999999,0.7486999999999995],[-0.7486899999999999,0.7487000000000013],[-0.7616466666666675,0.7616333333333323],[-1.5171100000000006,1.5171199999999994],[-1.6442,-0.3585899999999995],[0,0],[0,0]],"o":[[0.4428000000000001,0.09658000000000033],[-0.7432999999999996,0.7433100000000001],[-0.7487000000000013,0.7486899999999999],[0.7485999999999997,0.7486999999999995],[0.7432999999999996,-0.743310000000001],[0.3204999999999991,-0.3204799999999999],[0.3585999999999991,1.644189999999998],[-1.5170999999999992,1.5170999999999992],[-0.7616466666666675,0.761633333333334],[-0.7486899999999999,0.7486999999999995],[-0.7486899999999999,-0.7485999999999997],[0.7616466666666666,-0.7616333333333323],[-0.7885500000000008,-1.8611],[1.278289999999998,-1.27829],[0,0],[0,0],[0.4428000000000001,0.09658000000000033]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":0,"s":[13.23,10.77154381752014],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[12,12],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[13.23,10.77],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":1,"k":[{"t":0,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":0,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":60,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[121.15,121.15],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":60,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":184,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":217,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":227,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,-10],[10,0],[0,10],[-10,0],[0,-10]],"i":[[-5.5228475,0],[0,-5.5228475],[5.5228475,0],[0,5.5228475],[-5.5228475,0]],"o":[[5.5228475,0],[0,5.5228475],[-5.5228475,0],[0,-5.5228475],[5.5228475,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[24,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":25,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}')
          , c = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[3.5,0],[0,5.8332999999999995],[3.5,5.8332999999999995]],"i":[[0,0],[1.166666666666667,-1.944433333333334],[-1.166666666666667,0]],"o":[[-1.166666666666666,1.944433333333333],[1.166666666666666,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.184650421142578,-1.832367897033691],[0,0],[-1.166666666666667,0]],"o":[[1.184650897979736,1.832367539405823],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.184650421142578,-1.832367897033691],[0,0],[-1.166666666666667,0]],"o":[[1.184650897979736,1.832367539405823],[0,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[3.503000259399414,0],[0.003000259399414062,5.83329963684082],[3.503000259399414,5.83329963684082]],"i":[[0.2074432373046875,-0.3626899719238281],[0,0],[-1.166666666666667,0]],"o":[[-0.2074427604675293,0.3626899123191833],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":125,"s":[-4.666999816894531,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[-4.67,-4.666650772094727],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[-4.67,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[0,2.3332999999999995],[3.5,0]],"i":[[0,0],[-0.7981999999999996,1.4169]],"o":[[1.4311000000000007,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[-2.333999633789062,2.333300590515137],[-5.833999633789062,0]],"i":[[1.169005393981934,0],[0.7811636924743652,1.481373190879822]],"o":[[-1.169005155563354,0],[-0.7811641693115234,-1.481372833251953]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[-2.333999633789062,2.333300590515137],[-5.833999633789062,0]],"i":[[1.169005393981934,0],[0.7811636924743652,1.481373190879822]],"o":[[-1.169005155563354,0],[-0.7811641693115234,-1.481372833251953]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[-0.003000259399414062,2.333300590515137],[3.496999740600586,0]],"i":[[-1.720494270324707,0],[-0.6510887145996094,1.120759010314941]],"o":[[1.720494627952576,0],[0.6510882377624512,-1.120759010314941]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":200,"s":[1.166999816894531,2.33335018157959],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[1.17,2.33335018157959],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.203921568627451,0.207843137254902,0.2509803921568627],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , u = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":2,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[3.5,0],[0,5.8332999999999995],[3.5,5.8332999999999995]],"i":[[0,0],[1.166666666666667,-1.9444333333333343],[-1.166666666666667,0]],"o":[[-1.166666666666666,1.9444333333333326],[1.166666666666666,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.1846504211425781,-1.8323678970336914],[0,0],[-1.166666666666667,0]],"o":[[1.1846508979797363,1.8323675394058228],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[5.836999893188477,0],[9.336999893188477,5.83329963684082],[5.9886474609375,5.83329963684082]],"i":[[-1.1846504211425781,-1.8323678970336914],[0,0],[-1.166666666666667,0]],"o":[[1.1846508979797363,1.8323675394058228],[0,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[3.503000259399414,0],[0.0030002593994140625,5.83329963684082],[3.503000259399414,5.83329963684082]],"i":[[0.2074432373046875,-0.3626899719238281],[0,0],[-1.166666666666667,0]],"o":[[-0.2074427604675293,0.36268991231918335],[0,0],[0,0]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":125,"s":[-4.666999816894531,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[-4.67,-4.666650772094727],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[-4.67,-4.666650772094727],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":1,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":125,"s":[{"c":false,"v":[[0,2.3332999999999995],[3.5,0]],"i":[[0,0],[-0.7981999999999996,1.4169]],"o":[[1.4311000000000007,0],[0,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":200,"s":[{"c":false,"v":[[-2.3339996337890625,2.3333005905151367],[-5.8339996337890625,0]],"i":[[1.1690053939819336,0],[0.7811636924743652,1.4813731908798218]],"o":[[-1.1690051555633545,0],[-0.7811641693115234,-1.4813728332519531]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[{"c":false,"v":[[-2.3339996337890625,2.3333005905151367],[-5.8339996337890625,0]],"i":[[1.1690053939819336,0],[0.7811636924743652,1.4813731908798218]],"o":[[-1.1690051555633545,0],[-0.7811641693115234,-1.4813728332519531]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":400,"s":[{"c":false,"v":[[-0.0030002593994140625,2.3333005905151367],[3.496999740600586,0]],"i":[[-1.720494270324707,0],[-0.6510887145996094,1.1207590103149414]],"o":[[1.7204946279525757,0],[0.6510882377624512,-1.1207590103149414]]}],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2.33333,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":200,"s":[1.1669998168945312,2.33335018157959],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":325,"s":[1.17,2.33335018157959],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}],"markers":[]}')
          , m = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":24,"h":24,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"border","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[22,22],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":2,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[8.6485975,0.1178352687211168],[8.880497499999999,1.074935268721117],[6.6505975,3.304865268721118],[6.6505975,6.016105268721118],[9.3617975,6.016105268721118],[11.5916975,3.786175268721117],[12.5487975,4.018115268721118],[11.1692975,8.727405268721117],[5.5576975,9.820205268721118],[3.272757499999999,12.10510526872112],[0.561517499999999,12.10510526872112],[0.561517499999999,9.393905268721117],[2.8464575,7.109005268721118],[3.9393075,1.497375268721117],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168],[8.6485975,0.1178352687211168]],"i":[[0,0],[0.3205000000000009,-0.3204799999999999],[0.7432999999999996,-0.7433100000000001],[-0.7487000000000013,-0.7487000000000013],[-0.7487000000000013,0.7486999999999995],[-0.7433000000000014,0.743310000000001],[-0.09659999999999869,-0.4428200000000011],[1.278300000000002,-1.2783],[1.8610999999999986,0.7885999999999989],[0.7616466666666675,-0.7616333333333323],[0.7486899999999999,0.7486999999999995],[-0.7486899999999999,0.7487000000000013],[-0.7616466666666675,0.7616333333333323],[-1.5171100000000006,1.5171199999999994],[-1.6442,-0.3585899999999995],[0,0],[0,0]],"o":[[0.4428000000000001,0.09658000000000033],[-0.7432999999999996,0.7433100000000001],[-0.7487000000000013,0.7486899999999999],[0.7485999999999997,0.7486999999999995],[0.7432999999999996,-0.743310000000001],[0.3204999999999991,-0.3204799999999999],[0.3585999999999991,1.644189999999998],[-1.5170999999999992,1.5170999999999992],[-0.7616466666666675,0.761633333333334],[-0.7486899999999999,0.7486999999999995],[-0.7486899999999999,-0.7485999999999997],[0.7616466666666666,-0.7616333333333323],[-0.7885500000000008,-1.8611],[1.278289999999998,-1.27829],[0,0],[0,0],[0.4428000000000001,0.09658000000000033]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":0,"s":[13.23,10.77154381752014],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[12,12],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[12,12],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[13.23,10.77],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"a":{"a":1,"k":[{"t":0,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[7.559483528137207,5.104858875274658],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":0,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":60,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[121.15,121.15],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":227,"s":[121.15,121.15],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":60,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":117,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":184,"s":[45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":217,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":227,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":282,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":50,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,-10],[10,0],[0,10],[-10,0],[0,-10]],"i":[[-5.5228475,0],[0,-5.5228475],[5.5228475,0],[0,5.5228475],[-5.5228475,0]],"o":[[5.5228475,0],[0,5.5228475],[-5.5228475,0],[0,-5.5228475],[5.5228475,0]]}}},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[24,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[12,12],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":-180,"ix":2},"o":{"a":0,"k":25,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}')
          , f = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":200,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[{"id":"1","layers":[{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":6,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[14.25,14.25],"ix":2},"a":{"a":0,"k":[8.25,8.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":5},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":6,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":3,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"3","layers":[{"ddd":0,"refId":"2","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle - mask content","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1,"td":1},{"ddd":0,"refId":"1","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1}]},{"id":"2","layers":[{"ddd":0,"ind":8,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10008.250000047683,10008.250000047683],"ix":2},"a":{"a":0,"k":[2.7,2.7],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":9,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.7,2.6999999999999993],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":8},{"ddd":0,"ind":10,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":9},{"ddd":0,"ind":11,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":10,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"4","layers":[{"ddd":0,"ind":15,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":16,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[14.25,14.25],"ix":2},"a":{"a":0,"k":[8.25,8.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":15},{"ddd":0,"ind":17,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":16,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"st","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":3,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]},{"id":"6","layers":[{"ddd":0,"refId":"5","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle - mask content","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1,"td":1},{"ddd":0,"refId":"4","w":20000,"h":20000,"ind":1,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":0,"tt":1}]},{"id":"5","layers":[{"ddd":0,"ind":18,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10008.250000047683,10008.250000047683],"ix":2},"a":{"a":0,"k":[2.7,2.7],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":19,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.6999999999999993,2.6999999999999993],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":18},{"ddd":0,"ind":20,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[2.25,2.25],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":19},{"ddd":0,"ind":21,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":20,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4.5,4.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":1,"ix":2}},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[2.25,2.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[1,1,1],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":1,"k":[{"t":5,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":15,"s":[0.75],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":65,"s":[0.75],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":80,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3843137254901961,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[-360],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":0,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":100,"s":[180],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-4.25,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":2},{"ddd":0,"ind":4,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.75],[0.75,0],[3,0],[3,1.5],[0.75,1.5],[0,0.75],[0,0.75],[0,0.75],[0,0.75]],"i":[[0,0],[-0.4142099999999997,0],[-0.75,0],[0,-0.5],[0.75,0],[0,0.4141999999999992],[0,0],[0,0],[0,0]],"o":[[0,-0.4141999999999992],[0.75,0],[0,0.5],[-0.75,0],[-0.4142099999999997,0],[0,0],[0,0],[0,0],[0,-0.4141999999999992]]}}},{"ty":"fl","c":{"a":0,"k":[0.9686274509803922,0.9686274509803922,0.9725490196078431],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-0.75,-0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"refId":"3","w":20000,"h":20000,"ind":12,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-8.25,-8.25],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":3},{"ddd":0,"ind":13,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[4.25,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":2},{"ddd":0,"ind":14,"ty":4,"nm":"Path","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":13,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.25,0],[3,0.75],[3,0.75],[2.25,1.5],[0,1.5],[0,0],[0,0],[0,0]],"i":[[0,0],[-0.75,0],[0,-0.4141999999999992],[0,0],[0.414200000000001,0],[0.75,0],[0,0.5],[0,0],[0,0]],"o":[[0.75,0],[0.414200000000001,0],[0,0],[0,0.4141999999999992],[-0.75,0],[0,-0.5],[0,0],[0,0],[0.75,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.9686274509803922,0.9686274509803922,0.9725490196078431],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-2.25,-0.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"refId":"6","w":20000,"h":20000,"ind":22,"ty":0,"nm":"Masked Rectangle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[-8.25,-8.25],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":200,"st":0,"bm":0,"hd":false,"parent":13}],"markers":[]}')
          , p = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":350,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[3,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[7.847347463338371,11.1995756149292],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":180,"s":[0],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":260,"s":[100],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":280,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[4,1.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0.75,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[8.347347344129082,8.7995756149292],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":165,"s":[0],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":185,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":260,"s":[100],"i":{"x":[0.8],"y":[1]},"o":{"x":[0.4],"y":[0]}},{"t":280,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":80,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":120,"s":[-45],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":130,"s":[-45],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":160,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":270,"s":[-45],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":320,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[10,10],"ix":2},"s":{"a":1,"k":[{"t":80,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":120,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":160,"s":[120,120],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":270,"s":[120,120],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":320,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":350,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":4,"ty":4,"nm":"Path\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.5581,2.5581]],"i":[[0,0],[-0.8527000000000005,-0.8527000000000005]],"o":[[0.8527000000000005,0.8527000000000005],[0,0]]}}},{"ty":"st","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1.5,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[11.8169002532959,11.81639957427979],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Path\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0],[2.5581,2.5581]],"i":[[0,0],[-0.8527000000000005,-0.8527000000000005]],"o":[[0.8527000000000005,0.8527000000000005],[0,0]]}}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[11.8169002532959,11.81639957427979],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Rectangle\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[7.80233,7.80233],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":3.901165,"ix":2}},{"ty":"st","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1.5,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[9.026165008544922,9.026165008544922],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":130,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":171,"s":[-100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}}],"ix":2},"r":{"a":0,"k":-45,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"rc","hd":false,"d":1,"s":{"a":0,"k":[7.80233,7.80233],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":3.90116,"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[9.026165008544922,9.026165008544922],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":45,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Circle\'s solid stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"st","c":{"a":0,"k":[0.9607843137254902,0.9607843137254902,0.9607843137254902],"ix":2},"o":{"a":0,"k":100,"ix":2},"w":{"a":0,"k":1,"ix":2},"hd":false,"lc":2,"lj":2},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":0,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Circle\'s solid fill","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":3,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"el","hd":false,"d":1,"s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":2}},{"ty":"fl","c":{"a":0,"k":[0.6980392156862745,0.3843137254901961,0.996078431372549],"ix":2},"o":{"a":0,"k":0,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[10,10],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":90,"ix":2},"o":{"a":0,"k":100,"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":350,"st":0,"bm":0}],"markers":[]}')
          , x = JSON.parse('{"v":"5.7.5","fr":100,"ip":0,"op":400,"w":20,"h":20,"nm":"Comp 1","ddd":0,"assets":[{"id":"2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"outer","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"parent":0,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[4,0.8788999999999998],[4,0.75],[3.25,0],[2.5,0.75],[2.5,0.8499999999999996],[2.482100000000001,1.7741000000000007],[2.4183,2.0905],[2.0905,2.4183],[1.7741000000000007,2.482100000000001],[0.8499999999999996,2.5],[0.75,2.5],[0,3.25],[0.75,4],[0.8788999999999998,4],[1.8963,3.9771],[2.7715,3.7547999999999995],[3.7547999999999995,2.7715],[3.9771,1.8963],[4,0.8788999999999998],[4,0.8788999999999998],[4,0.8788999999999998]],"i":[[0,0],[0,0.0429666666666666],[0.4141999999999992,0],[0,-0.4141999999999992],[0,-0.03333333333333321],[0.01729999999999876,-0.2125000000000004],[0.01879999999999882,-0.03710000000000058],[0.1410999999999998,-0.07200000000000095],[0.2037999999999993,-0.01670000000000016],[0.4324000000000012,0],[0.03333333333333321,0],[0,-0.4141999999999992],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,0.02289999999999992],[-0.2837999999999994,0.1446000000000005],[-0.2157999999999998,0.4233000000000011],[-0.02430000000000021,0.2965],[0,0.3954000000000004],[0,0],[0,0]],"o":[[0,-0.0429666666666666],[0,-0.4141999999999992],[-0.4141999999999992,0],[0,0.03333333333333321],[0,0.4324000000000012],[-0.01670000000000016,0.2037999999999993],[-0.07200000000000095,0.1410999999999998],[-0.03710000000000058,0.01879999999999882],[-0.2125000000000004,0.01729999999999876],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,0.4141999999999992],[0.0429666666666666,0],[0.3954000000000004,0],[0.2965,-0.02430000000000021],[0.4233000000000011,-0.2157999999999998],[0.1446000000000005,-0.2837999999999994],[0.02289999999999992,-0.2810000000000006],[0,0],[0,0],[0,-0.0429666666666666]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[4,0.8788999999999998],[4,0.75],[3.25,0],[2.5,0.75],[2.5,0.8499999999999996],[2.482100000000001,1.7741000000000007],[2.4183,2.0905],[2.0905,2.4183],[1.7741000000000007,2.482100000000001],[0.8499999999999996,2.5],[0.75,2.5],[0,3.25],[0.75,4],[0.8788999999999998,4],[1.8963,3.9771],[2.7715,3.7547999999999995],[3.7547999999999995,2.7715],[3.9771,1.8963],[4,0.8788999999999998],[4,0.8788999999999998],[4,0.8788999999999998]],"i":[[0,0],[0,0.0429666666666666],[0.4141999999999992,0],[0,-0.4141999999999992],[0,-0.03333333333333321],[0.01729999999999876,-0.2125000000000004],[0.01879999999999882,-0.03710000000000058],[0.1410999999999998,-0.07200000000000095],[0.2037999999999993,-0.01670000000000016],[0.4324000000000012,0],[0.03333333333333321,0],[0,-0.4141999999999992],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,0.02289999999999992],[-0.2837999999999994,0.1446000000000005],[-0.2157999999999998,0.4233000000000011],[-0.02430000000000021,0.2965],[0,0.3954000000000004],[0,0],[0,0]],"o":[[0,-0.0429666666666666],[0,-0.4141999999999992],[-0.4141999999999992,0],[0,0.03333333333333321],[0,0.4324000000000012],[-0.01670000000000016,0.2037999999999993],[-0.07200000000000095,0.1410999999999998],[-0.03710000000000058,0.01879999999999882],[-0.2125000000000004,0.01729999999999876],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,0.4141999999999992],[0.0429666666666666,0],[0.3954000000000004,0],[0.2965,-0.02430000000000021],[0.4233000000000011,-0.2157999999999998],[0.1446000000000005,-0.2837999999999994],[0.02289999999999992,-0.2810000000000006],[0,0],[0,0],[0,-0.0429666666666666]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[2.25,1.25],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[2.25,1.25],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[3.121130417391935,4],[3.250000417391935,4],[4.000000417391935,3.25],[3.250000417391935,2.5],[3.150030417391935,2.5],[2.225880417391935,2.482100000000001],[1.909510417391935,2.4183],[1.581750417391936,2.0905],[1.517950417391935,1.7741000000000007],[1.500000417391935,0.8499999999999996],[1.500000417391935,0.75],[0.7500004173919352,0],[4.173919352368216e-7,0.75],[4.173919352368216e-7,0.8788999999999998],[0.02293041739193535,1.8963],[0.2452404173919351,2.7715],[1.228520417391935,3.7547999999999995],[2.103740417391935,3.9771],[3.121130417391935,4],[3.121130417391935,4],[3.121130417391935,4]],"i":[[0,0],[-0.04295666666666698,0],[0,0.4141999999999992],[0.4142099999999997,0],[0.03332333333333359,0],[0.21251,0.01729999999999876],[0.03707999999999956,0.01879999999999882],[0.07189999999999941,0.1410999999999998],[0.01663999999999977,0.2037999999999993],[0,0.4324000000000012],[0,0.03333333333333321],[0.4142099999999997,0],[0,-0.4141999999999992],[0,-0.0429666666666666],[-0.02295000000000025,-0.2810000000000006],[-0.14460000000000006,-0.2837999999999994],[-0.4233599999999997,-0.2157999999999998],[-0.2965100000000005,-0.02430000000000021],[-0.3953800000000003,0],[0,0],[0,0]],"o":[[0.04295666666666698,0],[0.4142099999999997,0],[0,-0.4141999999999992],[-0.03332333333333359,0],[-0.4324200000000005,0],[-0.2037500000000003,-0.01670000000000016],[-0.1411199999999999,-0.07200000000000095],[-0.01890000000000036,-0.03710000000000058],[-0.01736999999999966,-0.2125000000000004],[0,-0.03333333333333321],[0,-0.4141999999999992],[-0.4142099999999997,0],[0,0.0429666666666666],[-0.00001000000000006551,0.3954000000000004],[0.02421999999999969,0.2965],[0.2157100000000005,0.4233000000000011],[0.2837900000000007,0.1446000000000005],[0.2809299999999997,0.02289999999999992],[0,0],[0,0],[0.04295666666666698,0]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[3.121130417391935,4],[3.250000417391935,4],[4.000000417391935,3.25],[3.250000417391935,2.5],[3.150030417391935,2.5],[2.225880417391935,2.482100000000001],[1.909510417391935,2.4183],[1.581750417391936,2.0905],[1.517950417391935,1.7741000000000007],[1.500000417391935,0.8499999999999996],[1.500000417391935,0.75],[0.7500004173919352,0],[4.173919352368216e-7,0.75],[4.173919352368216e-7,0.8788999999999998],[0.02293041739193535,1.8963],[0.2452404173919351,2.7715],[1.228520417391935,3.7547999999999995],[2.103740417391935,3.9771],[3.121130417391935,4],[3.121130417391935,4],[3.121130417391935,4]],"i":[[0,0],[-0.04295666666666698,0],[0,0.4141999999999992],[0.4142099999999997,0],[0.03332333333333359,0],[0.21251,0.01729999999999876],[0.03707999999999956,0.01879999999999882],[0.07189999999999941,0.1410999999999998],[0.01663999999999977,0.2037999999999993],[0,0.4324000000000012],[0,0.03333333333333321],[0.4142099999999997,0],[0,-0.4141999999999992],[0,-0.0429666666666666],[-0.02295000000000025,-0.2810000000000006],[-0.14460000000000006,-0.2837999999999994],[-0.4233599999999997,-0.2157999999999998],[-0.2965100000000005,-0.02430000000000021],[-0.3953800000000003,0],[0,0],[0,0]],"o":[[0.04295666666666698,0],[0.4142099999999997,0],[0,-0.4141999999999992],[-0.03332333333333359,0],[-0.4324200000000005,0],[-0.2037500000000003,-0.01670000000000016],[-0.1411199999999999,-0.07200000000000095],[-0.01890000000000036,-0.03710000000000058],[-0.01736999999999966,-0.2125000000000004],[0,-0.03333333333333321],[0,-0.4141999999999992],[-0.4142099999999997,0],[0,0.0429666666666666],[-0.00001000000000006551,0.3954000000000004],[0.02421999999999969,0.2965],[0.2157100000000005,0.4233000000000011],[0.2837900000000007,0.1446000000000005],[0.2809299999999997,0.02289999999999992],[0,0],[0,0],[0.04295666666666698,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[-6.250000476837158,1.25],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[-6.250000476837158,1.25],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[4,3.121090417391934],[4,3.250000417391934],[3.25,4.000000417391934],[2.5,3.250000417391934],[2.5,3.150000417391935],[2.482100000000001,2.225880417391934],[2.4183,1.909510417391934],[2.0905,1.581750417391935],[1.7741000000000007,1.517950417391934],[0.8499999999999996,1.500000417391934],[0.75,1.500000417391934],[0,0.7500004173919343],[0.75,4.173919343486432e-7],[0.8788999999999998,4.173919343486432e-7],[1.8963,0.02293041739193402],[2.7715,0.2452404173919343],[3.7547999999999995,1.228520417391934],[3.9771,2.103730417391934],[4,3.121090417391934],[4,3.121090417391934],[4,3.121090417391934]],"i":[[0,0],[0,-0.0429700000000004],[0.4141999999999992,0],[0,0.4142100000000006],[0,0.03333333333333321],[0.01729999999999876,0.2125000000000004],[0.01879999999999882,0.03707999999999956],[0.1410999999999998,0.07189999999999941],[0.2037999999999993,0.01663999999999977],[0.4324000000000012,0],[0.03333333333333321,0],[0,0.4142099999999997],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,-0.0229499999999998],[-0.2837999999999994,-0.1445999999999996],[-0.2157999999999998,-0.4233599999999997],[-0.02430000000000021,-0.2965099999999996],[0,-0.3953599999999993],[0,0],[0,0]],"o":[[0,0.0429700000000004],[0,0.4142100000000006],[-0.4141999999999992,0],[0,-0.03333333333333321],[0,-0.43241],[-0.01670000000000016,-0.2037500000000003],[-0.07200000000000095,-0.1411199999999999],[-0.03710000000000058,-0.01890000000000036],[-0.2125000000000004,-0.01736999999999966],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,-0.4142099999999997],[0.0429666666666666,0],[0.3954000000000004,-0.000009999999999621423],[0.2965,0.02422000000000057],[0.4233000000000011,0.2157100000000005],[0.1446000000000005,0.2837900000000007],[0.02289999999999992,0.2809300000000006],[0,0],[0,0],[0,0.0429700000000004]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[4,3.121090417391934],[4,3.250000417391934],[3.25,4.000000417391934],[2.5,3.250000417391934],[2.5,3.150000417391935],[2.482100000000001,2.225880417391934],[2.4183,1.909510417391934],[2.0905,1.581750417391935],[1.7741000000000007,1.517950417391934],[0.8499999999999996,1.500000417391934],[0.75,1.500000417391934],[0,0.7500004173919343],[0.75,4.173919343486432e-7],[0.8788999999999998,4.173919343486432e-7],[1.8963,0.02293041739193402],[2.7715,0.2452404173919343],[3.7547999999999995,1.228520417391934],[3.9771,2.103730417391934],[4,3.121090417391934],[4,3.121090417391934],[4,3.121090417391934]],"i":[[0,0],[0,-0.0429700000000004],[0.4141999999999992,0],[0,0.4142100000000006],[0,0.03333333333333321],[0.01729999999999876,0.2125000000000004],[0.01879999999999882,0.03707999999999956],[0.1410999999999998,0.07189999999999941],[0.2037999999999993,0.01663999999999977],[0.4324000000000012,0],[0.03333333333333321,0],[0,0.4142099999999997],[-0.4141999999999992,0],[-0.0429666666666666,0],[-0.2810000000000006,-0.0229499999999998],[-0.2837999999999994,-0.1445999999999996],[-0.2157999999999998,-0.4233599999999997],[-0.02430000000000021,-0.2965099999999996],[0,-0.3953599999999993],[0,0],[0,0]],"o":[[0,0.0429700000000004],[0,0.4142100000000006],[-0.4141999999999992,0],[0,-0.03333333333333321],[0,-0.43241],[-0.01670000000000016,-0.2037500000000003],[-0.07200000000000095,-0.1411199999999999],[-0.03710000000000058,-0.01890000000000036],[-0.2125000000000004,-0.01736999999999966],[-0.03333333333333321,0],[-0.4141999999999992,0],[0,-0.4142099999999997],[0.0429666666666666,0],[0.3954000000000004,-0.000009999999999621423],[0.2965,0.02422000000000057],[0.4233000000000011,0.2157100000000005],[0.1446000000000005,0.2837900000000007],[0.02289999999999992,0.2809300000000006],[0,0],[0,0],[0,0.0429700000000004]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[2.25,-5.250000476837158],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[2.25,-5.250000476837158],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":1,"k":[{"t":77,"s":[{"c":false,"v":[[3.121090417391935,4.17391936125e-7],[3.250000417391935,4.17391936125e-7],[4.000000417391935,0.7500004173919361],[3.250000417391935,1.500000417391936],[3.150000417391936,1.500000417391936],[2.225880417391935,1.517950417391936],[1.909510417391935,1.581750417391937],[1.581750417391936,1.909510417391936],[1.517950417391935,2.225880417391936],[1.500000417391935,3.150000417391936],[1.500000417391935,3.250000417391936],[0.7500004173919352,4.000000417391936],[4.173919352368216e-7,3.250000417391936],[4.173919352368216e-7,3.121090417391936],[0.02293041739193535,2.103730417391936],[0.2452404173919351,1.228520417391936],[1.228520417391935,0.245240417391936],[2.103730417391935,0.0229304173919358],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7]],"i":[[0,0],[-0.0429700000000004,0],[0,-0.4142099999999997],[0.4142099999999997,0],[0.03333333333333321,0],[0.2125000000000004,-0.01736999999999966],[0.03707999999999956,-0.01890000000000036],[0.07189999999999941,-0.1411199999999999],[0.01663999999999977,-0.2037500000000003],[0,-0.43241],[0,-0.03333333333333321],[0.4142099999999997,0],[0,0.4142100000000006],[0,0.0429700000000004],[-0.02295000000000025,0.2809300000000006],[-0.14460000000000006,0.2837900000000007],[-0.4233599999999997,0.2157100000000005],[-0.2965099999999996,0.02422000000000057],[-0.3953599999999993,-0.000009999999999621423],[0,0],[0,0]],"o":[[0.0429700000000004,0],[0.4142099999999997,0],[0,0.4142099999999997],[-0.03333333333333321,0],[-0.43241,0],[-0.2037500000000003,0.01663999999999977],[-0.1411199999999999,0.07189999999999941],[-0.01890000000000036,0.03707999999999956],[-0.01736999999999966,0.2125000000000004],[0,0.03333333333333321],[0,0.4142100000000006],[-0.4142099999999997,0],[0,-0.0429700000000004],[-0.00001000000000006551,-0.3953599999999993],[0.02421999999999969,-0.2965099999999996],[0.2157100000000005,-0.4233599999999997],[0.2837900000000007,-0.1445999999999996],[0.2809300000000006,-0.0229499999999998],[0,0],[0,0],[0.0429700000000004,0]]}],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[{"c":false,"v":[[3.121090417391935,4.17391936125e-7],[3.250000417391935,4.17391936125e-7],[4.000000417391935,0.7500004173919361],[3.250000417391935,1.500000417391936],[3.150000417391936,1.500000417391936],[2.225880417391935,1.517950417391936],[1.909510417391935,1.581750417391937],[1.581750417391936,1.909510417391936],[1.517950417391935,2.225880417391936],[1.500000417391935,3.150000417391936],[1.500000417391935,3.250000417391936],[0.7500004173919352,4.000000417391936],[4.173919352368216e-7,3.250000417391936],[4.173919352368216e-7,3.121090417391936],[0.02293041739193535,2.103730417391936],[0.2452404173919351,1.228520417391936],[1.228520417391935,0.245240417391936],[2.103730417391935,0.0229304173919358],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7],[3.121090417391935,4.17391936125e-7]],"i":[[0,0],[-0.0429700000000004,0],[0,-0.4142099999999997],[0.4142099999999997,0],[0.03333333333333321,0],[0.2125000000000004,-0.01736999999999966],[0.03707999999999956,-0.01890000000000036],[0.07189999999999941,-0.1411199999999999],[0.01663999999999977,-0.2037500000000003],[0,-0.43241],[0,-0.03333333333333321],[0.4142099999999997,0],[0,0.4142100000000006],[0,0.0429700000000004],[-0.02295000000000025,0.2809300000000006],[-0.14460000000000006,0.2837900000000007],[-0.4233599999999997,0.2157100000000005],[-0.2965099999999996,0.02422000000000057],[-0.3953599999999993,-0.000009999999999621423],[0,0],[0,0]],"o":[[0.0429700000000004,0],[0.4142099999999997,0],[0,0.4142099999999997],[-0.03333333333333321,0],[-0.43241,0],[-0.2037500000000003,0.01663999999999977],[-0.1411199999999999,0.07189999999999941],[-0.01890000000000036,0.03707999999999956],[-0.01736999999999966,0.2125000000000004],[0,0.03333333333333321],[0,0.4142100000000006],[-0.4142099999999997,0],[0,-0.0429700000000004],[-0.00001000000000006551,-0.3953599999999993],[0.02421999999999969,-0.2965099999999996],[0.2157100000000005,-0.4233599999999997],[0.2837900000000007,-0.1445999999999996],[0.2809300000000006,-0.0229499999999998],[0,0],[0,0],[0.0429700000000004,0]]}],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},{"ty":"fl","c":{"a":1,"k":[{"t":77,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tm","s":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"e":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[-6.250000476837158,-5.250000476837158],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[-6.250000476837158,-5.250000476837158],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[0,0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0,0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sk":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"sa":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}}]},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","hd":false,"p":{"a":1,"k":[{"t":77,"s":[9.999999761581421,9.999999761581421],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[9.999999761581421,9.999999761581421],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[60,60],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":137,"s":[107,107],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":167,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[60,60],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":337,"s":[107,107],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":367,"s":[99.99999999999999,99.99999999999999],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":167,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":367,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"refId":"1","w":20000,"h":20000,"ind":4,"ty":0,"nm":"middle","sr":1,"ks":{"o":{"a":1,"k":[{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10010,10010],"ix":2},"a":{"a":0,"k":[10000,10000],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[50,50],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":148,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":200,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[50,50],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":348,"s":[100,100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false}]},{"id":"1","layers":[{"ddd":0,"ind":2,"ty":4,"nm":"bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.75],[0.75,0],[4.25,0],[5,0.75],[4.25,1.5],[0.75,1.5],[0,0.75],[0,0.75],[0,0.75]],"i":[[0,0],[-0.4142099999999997,0],[-1.166666666666668,0],[0,-0.4141999999999992],[0.4141999999999992,0],[1.166666666666668,0],[0,0.4141999999999992],[0,0],[0,0]],"o":[[0,-0.4141999999999992],[1.166666666666666,0],[0.4141999999999992,0],[0,0.4141999999999992],[-1.166666666666666,0],[-0.4142099999999997,0],[0,0],[0,0],[0,-0.4141999999999992]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-3.25,0.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":175,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":200,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":375,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":400,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[10000,10000],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"hd":false,"shapes":[{"ty":"gr","hd":false,"it":[{"ty":"sh","hd":false,"d":1,"ks":{"a":0,"k":{"c":false,"v":[[0,0.7500000000000009],[0.75,8.881784197001252e-16],[5.75,8.881784197001252e-16],[6.5,0.7500000000000009],[5.75,1.5000000000000009],[0.75,1.5000000000000009],[0,0.7500000000000009],[0,0.7500000000000009],[0,0.7500000000000009]],"i":[[0,0],[-0.4142099999999997,0],[-1.666666666666668,0],[0,-0.4142100000000006],[0.4141999999999992,0],[1.666666666666668,0],[0,0.4142100000000006],[0,0],[0,0]],"o":[[0,-0.4142100000000006],[1.666666666666666,0],[0.4141999999999992,0],[0,0.4142100000000006],[-1.666666666666666,0],[-0.4142099999999997,0],[0,0],[0,0],[0,-0.4142100000000006]]}}},{"ty":"fl","c":{"a":0,"k":[0.6941176470588235,0.3803921568627451,0.9921568627450981],"ix":2},"o":{"a":0,"k":100,"ix":2},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":2},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":2},"m":1,"hd":false},{"ty":"tr","hd":false,"p":{"a":0,"k":[-3.25,-2.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2},"r":{"a":0,"k":0,"ix":2},"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}},{"t":163,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":188,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":277,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":307,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":363,"s":[0],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}},{"t":388,"s":[100],"i":{"x":[1],"y":[1]},"o":{"x":[0],"y":[0]}}],"ix":2},"sk":{"a":0,"k":0,"ix":2},"sa":{"a":0,"k":0,"ix":2}}]}],"ip":0,"op":400,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":5,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":77,"s":[0],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[0],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"p":{"a":1,"k":[{"t":77,"s":[10,10],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[10,10],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false},{"ddd":0,"ind":7,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":1,"k":[{"t":77,"s":[45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":0,"k":[100,100],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":5},{"ddd":0,"ind":6,"ty":3,"nm":"","sr":1,"ks":{"o":{"a":0,"k":100,"ix":2},"r":{"a":0,"k":0,"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":7},{"ddd":0,"refId":"2","w":20000,"h":20000,"ind":8,"ty":0,"nm":"SVG Import 1","sr":1,"ks":{"o":{"a":1,"k":[{"t":77,"s":[100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"r":{"a":1,"k":[{"t":77,"s":[-45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}},{"t":107,"s":[-45],"i":{"x":[0],"y":[0]},"o":{"x":[0],"y":[0]}}],"ix":2},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":1,"k":[{"t":77,"s":[10010,10010],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[10010,10010],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2},"s":{"a":1,"k":[{"t":77,"s":[100,100],"i":{"x":[0.5],"y":[1.5]},"o":{"x":[0.8],"y":[0]}},{"t":107,"s":[100,100],"i":{"x":[0.2],"y":[1]},"o":{"x":[0.5],"y":[-0.5]}}],"ix":2}},"ao":0,"ip":0,"op":400,"st":0,"bm":0,"hd":false,"parent":6}],"markers":[]}')
          , g = n(68233)
          , h = n.n(g)
          , y = n(77997)
          , v = n(70079)
          , k = n(35250);
        function b(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function w(e) {
            var t = e.animationData
              , n = e.animationSegmentToPlay
              , a = e.animationLoopCounter
              , r = (0,
            v.useRef)(null);
            return (0,
            v.useEffect)(function() {
                var e;
                null === (e = r.current) || void 0 === e || e.playSegments(n, !0)
            }, [a]),
            (0,
            k.jsx)(h(), {
                animationData: t,
                lottieRef: r,
                loop: !1,
                autoplay: !1
            })
        }
        function M(e) {
            var t = e.animationLoopCounter
              , n = (0,
            y.F)().resolvedTheme;
            return (0,
            k.jsx)(w, {
                animationData: "dark" === n ? i : s,
                animationSegmentToPlay: [180, 380],
                animationLoopCounter: t
            })
        }
        function C(e) {
            var t = e.animationLoopCounter;
            return (0,
            k.jsx)(w, {
                animationData: x,
                animationSegmentToPlay: [132, 332],
                animationLoopCounter: t
            })
        }
        function T(e) {
            var t = e.animationLoopCounter;
            return (0,
            k.jsx)(w, {
                animationData: o,
                animationSegmentToPlay: [160, 360],
                animationLoopCounter: t
            })
        }
        function P(e) {
            var t = e.animationLoopCounter;
            return (0,
            k.jsx)(w, {
                animationData: p,
                animationSegmentToPlay: [0, 350],
                animationLoopCounter: t
            })
        }
        function O(e) {
            var t = e.animationLoopCounter;
            return (0,
            k.jsx)(w, {
                animationData: l,
                animationSegmentToPlay: [0, 400],
                animationLoopCounter: t
            })
        }
        function I(e) {
            return (0,
            k.jsx)(r.A0, j(j({
                width: "8",
                height: "9",
                viewBox: "0 0 8 9",
                fill: "none"
            }, e), {}, {
                children: (0,
                k.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.66607 0.376042C8.01072 0.605806 8.10385 1.07146 7.87408 1.4161L3.54075 7.9161C3.40573 8.11863 3.18083 8.24304 2.93752 8.24979C2.69421 8.25654 2.46275 8.1448 2.31671 7.95008L0.150044 5.06119C-0.098484 4.72982 -0.0313267 4.25972 0.300044 4.01119C0.631415 3.76266 1.10152 3.82982 1.35004 4.16119L2.88068 6.20204L6.62601 0.584055C6.85577 0.239408 7.32142 0.146278 7.66607 0.376042Z",
                    fill: "currentColor"
                })
            }))
        }
        function S(e) {
            return (0,
            k.jsxs)(r.A0, j(j({
                width: "4",
                height: "12",
                viewBox: "0 0 4 12",
                fill: "none"
            }, e), {}, {
                children: [(0,
                k.jsx)("mask", {
                    id: "path-1-inside-1_1975_4008",
                    fill: "currentColor",
                    children: (0,
                    k.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z"
                    })
                }), (0,
                k.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1 6.5C1 7.05228 1.44772 7.5 2 7.5C2.55228 7.5 3 7.05228 3 6.5V1.5C3 0.947715 2.55228 0.5 2 0.5C1.44772 0.5 1 0.947715 1 1.5L1 6.5ZM0.75 10.25C0.75 10.9404 1.30964 11.5 2 11.5C2.69036 11.5 3.25 10.9404 3.25 10.25C3.25 9.55964 2.69036 9 2 9C1.30964 9 0.75 9.55964 0.75 10.25Z",
                    fill: "currentColor"
                }), (0,
                k.jsx)("path", {
                    d: "M1 6.5H-0.25H1ZM1 1.5L-0.25 1.5L-0.25 1.5L1 1.5ZM2 6.25C2.13807 6.25 2.25 6.36193 2.25 6.5H-0.25C-0.25 7.74264 0.757359 8.75 2 8.75V6.25ZM1.75 6.5C1.75 6.36193 1.86193 6.25 2 6.25V8.75C3.24264 8.75 4.25 7.74264 4.25 6.5H1.75ZM1.75 1.5V6.5H4.25V1.5H1.75ZM2 1.75C1.86193 1.75 1.75 1.63807 1.75 1.5H4.25C4.25 0.257359 3.24264 -0.75 2 -0.75V1.75ZM2.25 1.5C2.25 1.63807 2.13807 1.75 2 1.75V-0.75C0.757359 -0.75 -0.25 0.257359 -0.25 1.5L2.25 1.5ZM2.25 6.5L2.25 1.5L-0.25 1.5L-0.25 6.5L2.25 6.5ZM2 10.25H-0.5C-0.5 11.6307 0.619288 12.75 2 12.75V10.25ZM2 10.25V12.75C3.38071 12.75 4.5 11.6307 4.5 10.25H2ZM2 10.25H2H4.5C4.5 8.86929 3.38071 7.75 2 7.75V10.25ZM2 10.25H2V7.75C0.619288 7.75 -0.5 8.86929 -0.5 10.25H2Z",
                    fill: "currentColor",
                    mask: "url(#path-1-inside-1_1975_4008)"
                })]
            }))
        }
        function N(e) {
            return (0,
            k.jsx)(r.A0, j(j({
                width: "8",
                height: "9",
                viewBox: "0 0 8 9",
                fill: "none"
            }, e), {}, {
                children: (0,
                k.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.32256 1.48447C7.59011 1.16827 7.55068 0.695034 7.23447 0.427476C6.91827 0.159918 6.44503 0.199354 6.17748 0.515559L4.00002 3.08892L1.82256 0.515559C1.555 0.199354 1.08176 0.159918 0.765559 0.427476C0.449355 0.695034 0.409918 1.16827 0.677476 1.48447L3.01755 4.25002L0.677476 7.01556C0.409918 7.33176 0.449354 7.805 0.765559 8.07256C1.08176 8.34011 1.555 8.30068 1.82256 7.98447L4.00002 5.41111L6.17748 7.98447C6.44503 8.30068 6.91827 8.34011 7.23447 8.07256C7.55068 7.805 7.59011 7.33176 7.32256 7.01556L4.98248 4.25002L7.32256 1.48447Z",
                    fill: "currentColor"
                })
            }))
        }
        function _(e) {
            var t = e.animationLoopCounter
              , n = (0,
            y.F)().resolvedTheme;
            return (0,
            k.jsx)(w, {
                animationData: "dark" === n ? d : m,
                animationSegmentToPlay: [0, 300],
                animationLoopCounter: t
            })
        }
        function D(e) {
            var t = e.animationLoopCounter
              , n = (0,
            y.F)().resolvedTheme;
            return (0,
            k.jsx)(w, {
                animationData: "dark" === n ? c : u,
                animationSegmentToPlay: [0, 400],
                animationLoopCounter: t
            })
        }
        function Z(e) {
            var t = e.animationLoopCounter;
            return (0,
            k.jsx)(w, {
                animationData: f,
                animationSegmentToPlay: [0, 200],
                animationLoopCounter: t
            })
        }
    },
    12379: function(e, t, n) {
        "use strict";
        n.d(t, {
            Tv: function() {
                return a
            },
            Ui: function() {
                return l
            },
            X_: function() {
                return o
            },
            cf: function() {
                return r
            },
            kA: function() {
                return s
            },
            yF: function() {
                return i
            }
        });
        var a = 1e4
          , r = 8e3
          , i = 15e3
          , s = 3e4
          , o = 13e3
          , l = 2e3
    },
    73524: function(e, t, n) {
        "use strict";
        n.d(t, {
            CO: function() {
                return v
            },
            Lg: function() {
                return y
            },
            We: function() {
                return h
            },
            bx: function() {
                return b
            }
        });
        var a = n(60077)
          , r = n(55509)
          , i = n(36112)
          , s = n(11591)
          , o = n(66027)
          , l = n(19954)
          , d = n(41899)
          , c = n(25349)
          , u = n(99893)
          , m = n(14765)
          , f = n(94968)
          , p = n(95552)
          , x = n.n(p)
          , g = n(5020);
        function h(e) {
            return (0,
            d.qi)(e) && !(0,
            d.oH)(e)
        }
        function y(e, t) {
            return e <= t ? e / t * 50 : 50 + 45 * (1 - Math.exp(-(50 / t) / 45 * (e - t)))
        }
        function v(e, t) {
            if (null != e) {
                var n = (0,
                g.h)(e.map(function(e) {
                    return e.message
                })).find(function(e) {
                    return e.type === s.$x.Search
                });
                if (null != n) {
                    var a, r, i = null === (a = n.message.metadata) || void 0 === a ? void 0 : null === (r = a.args) || void 0 === r ? void 0 : r[0];
                    if (null != i) {
                        var l = [k.browsingSearchLinkPrefix1, k.browsingSearchLinkPrefix2, k.browsingSearchLinkPrefix3, k.browsingSearchLinkPrefix4, k.browsingSearchLinkPrefix5, k.browsingSearchLinkPrefix6, k.browsingSearchLinkPrefix7, k.browsingSearchLinkPrefix8, k.browsingSearchLinkPrefix9, k.browsingSearchLinkPrefix10]
                          , d = m.m9.getExperimentValue(m.F5.BrowsingInjectSearchLinks, "is_active", !1) ? .4 : .2
                          , c = x()(n.message.id)();
                        if (c > d)
                            return null;
                        var u = l[Math.floor(c / d * l.length)];
                        return t.formatMessage(u, {
                            searchLink: o.ZP.getBingLink({
                                query: i
                            })
                        }) + "\n\n"
                    }
                }
            }
            return null
        }
        var k = (0,
        f.vU)({
            browsingSearchLinkPrefix1: {
                id: "toolsUtils.browsingSearchLinkPrefix1",
                defaultMessage: "Based on a [quick search]({searchLink}), here's what I found."
            },
            browsingSearchLinkPrefix2: {
                id: "toolsUtils.browsingSearchLinkPrefix2",
                defaultMessage: "After a [quick search]({searchLink}), here's what I found."
            },
            browsingSearchLinkPrefix3: {
                id: "toolsUtils.browsingSearchLinkPrefix3",
                defaultMessage: "From a [quick search]({searchLink}), here's what I found."
            },
            browsingSearchLinkPrefix4: {
                id: "toolsUtils.browsingSearchLinkPrefix4",
                defaultMessage: "I did a [quick search]({searchLink}) and here's what I found."
            },
            browsingSearchLinkPrefix5: {
                id: "toolsUtils.browsingSearchLinkPrefix5",
                defaultMessage: "I did a [quick search]({searchLink}) for more information and here's what I found."
            },
            browsingSearchLinkPrefix6: {
                id: "toolsUtils.browsingSearchLinkPrefix6",
                defaultMessage: "Based on a [quick search]({searchLink}), here's what I discovered."
            },
            browsingSearchLinkPrefix7: {
                id: "toolsUtils.browsingSearchLinkPrefix7",
                defaultMessage: "After a [quick search]({searchLink}), here's what I discovered."
            },
            browsingSearchLinkPrefix8: {
                id: "toolsUtils.browsingSearchLinkPrefix8",
                defaultMessage: "From a [quick search]({searchLink}), here's what I discovered."
            },
            browsingSearchLinkPrefix9: {
                id: "toolsUtils.browsingSearchLinkPrefix9",
                defaultMessage: "I did a [quick search]({searchLink}) and here's what I discovered."
            },
            browsingSearchLinkPrefix10: {
                id: "toolsUtils.browsingSearchLinkPrefix10",
                defaultMessage: "I did a [quick search]({searchLink}) for more information and here's what I discovered."
            }
        })
          , b = new (function() {
            function e() {
                (0,
                a.Z)(this, e),
                (0,
                i.Z)(this, "mostRecentCompletionRequest", void 0),
                (0,
                i.Z)(this, "loggedRequestIds", new Set)
            }
            return (0,
            r.Z)(e, [{
                key: "onCompletionRequestStarted",
                value: function(e) {
                    this.mostRecentCompletionRequest = {
                        requestId: e,
                        timestamp: Date.now()
                    }
                }
            }, {
                key: "onDisplayTextAfterBrowsingSession",
                value: function(e, t) {
                    var n = this.mostRecentCompletionRequest;
                    if (null != n && !this.loggedRequestIds.has(n.requestId)) {
                        var a = l.tQ.getThreadConversationTurns(e, t).find(function(e) {
                            return e.messages.some(function(e) {
                                return e.message.id === t
                            })
                        });
                        null != a && a.messages.some(function(e) {
                            return e.nodeId === n.requestId
                        }) && (c.A.logEvent(u.M.browsingTimeToFirstTextToken, {
                            messageId: t,
                            timeMs: Date.now() - n.timestamp
                        }),
                        this.loggedRequestIds.add(n.requestId))
                    }
                }
            }]),
            e
        }())
    },
    62442: function(e, t, n) {
        "use strict";
        n.d(t, {
            H1: function() {
                return f
            },
            Vk: function() {
                return u
            },
            tS: function() {
                return c
            },
            zG: function() {
                return m
            }
        });
        var a = n(36112)
          , r = n(91530)
          , i = n.n(r)
          , s = n(78103);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var d = {
            showEmbeddedPaymentModal: !1,
            embeddedCheckoutInstance: void 0,
            showFreeTrialLoadingPayment: !1,
            showConfirmDismissFreeTrial: !1,
            didCloseFreeTrial: !1
        }
          , c = (0,
        s.ZP)()(function(e) {
            return l(l({}, d), {}, {
                setShowEmbeddedPaymentModal: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                    e({
                        showEmbeddedPaymentModal: t
                    }),
                    n && n()
                },
                setEmbeddedCheckoutInstance: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                    e({
                        showEmbeddedPaymentModal: t
                    }),
                    n && n()
                }
            })
        });
        function u(e) {
            c.setState({
                showFreeTrialLoadingPayment: e
            })
        }
        function m(e) {
            c.setState({
                showConfirmDismissFreeTrial: e
            })
        }
        function f(e) {
            c.setState({
                didCloseFreeTrial: e
            })
        }
    },
    75884: function(e, t, n) {
        "use strict";
        n.d(t, {
            om: function() {
                return v
            },
            wB: function() {
                return k
            },
            ZP: function() {
                return M
            }
        });
        var a = n(11591)
          , r = n(91559)
          , i = n(99581)
          , s = n(70671)
          , o = n(94968)
          , l = n(90166)
          , d = n(86561)
          , c = n(36112)
          , u = n(70079)
          , m = n(40842)
          , f = n(88578);
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function x(e) {
            for (var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0,
                        c.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e), n = 0, a = Object.keys(t); n < a.length; n++) {
                var r = a[n];
                t[r] = Math.round(t[r])
            }
            return t
        }
        var g = {
            clientRect: void 0,
            isCollapsed: void 0,
            textContent: void 0,
            documentFragment: void 0,
            selection: void 0
        }
          , h = new m.Z;
        h.use(f.r0);
        var y = n(35250)
          , v = "agent-turn"
          , k = [a.OL.PrimaryAssistant, a.OL.GizmoInteraction];
        function b(e) {
            var t;
            return (0,
            i.createPortal)(e.children, null !== (t = e.mount) && void 0 !== t ? t : document.body)
        }
        function j(e) {
            var t = e.messageId
              , n = e.anchorNode
              , a = e.clientRect
              , i = e.onClick
              , o = (0,
            s.Z)();
            if (!n)
                return null;
            var c = n.closest(".".concat(v));
            if (!c)
                return null;
            var u = n.getBoundingClientRect();
            return (0,
            y.jsx)(b, {
                mount: c,
                children: (0,
                y.jsx)("div", {
                    className: "absolute",
                    style: {
                        top: n.offsetTop - 36 + a.top - u.top,
                        left: a.left - u.left,
                        width: a.width,
                        height: a.height
                    },
                    children: (0,
                    y.jsx)(l.u, {
                        label: o.formatMessage(C.replyTooltip),
                        delayDuration: 500,
                        side: "top",
                        children: (0,
                        y.jsx)(r.z, {
                            size: "small",
                            color: "neutral",
                            onClick: function() {
                                i(t)
                            },
                            children: (0,
                            y.jsx)(d.CE, {
                                className: "icon-md"
                            })
                        })
                    })
                })
            })
        }
        function w(e, t) {
            for (; e; ) {
                if (e instanceof HTMLElement && void 0 != e.dataset[t])
                    return {
                        node: e,
                        dataValue: e.dataset[t]
                    };
                e = e.parentNode
            }
            return {
                node: void 0,
                dataValue: void 0
            }
        }
        function M(e) {
            var t, n, a, r, i, s, o, l, d, c, m = e.onTargetedReply, f = (r = (a = (n = (0,
            u.useState)(g))[0]).clientRect,
            i = a.isCollapsed,
            s = a.textContent,
            o = a.documentFragment,
            l = a.selection,
            d = n[1],
            (0,
            u.useLayoutEffect)(function() {
                var e = function() {
                    setTimeout(function() {
                        var e, n, a, r = window.getSelection(), i = {};
                        if (null == r || !r.rangeCount) {
                            d(g);
                            return
                        }
                        var s = r.getRangeAt(0);
                        if (null != t && !t.contains(s.commonAncestorContainer) || null == s) {
                            d(g);
                            return
                        }
                        var o = s.cloneContents();
                        i.documentFragment = o,
                        i.textContent = (e = r.getRangeAt(0).cloneContents(),
                        (n = document.createElement("div")).appendChild(e),
                        h.turndown(n.innerHTML));
                        var l = s.getClientRects();
                        if (0 === l.length && null != s.commonAncestorContainer)
                            a = x(s.commonAncestorContainer.getBoundingClientRect().toJSON());
                        else {
                            if (l.length < 1)
                                return;
                            a = x(l[0].toJSON())
                        }
                        i.clientRect = a,
                        i.isCollapsed = s.collapsed,
                        i.selection = r,
                        d(i)
                    }, 0)
                };
                return window.addEventListener("mouseup", e),
                function() {
                    window.removeEventListener("mouseup", e)
                }
            }, [t]),
            {
                clientRect: r,
                isCollapsed: i,
                textContent: s,
                documentFragment: o,
                selection: l
            }), p = f.clientRect, v = f.isCollapsed, k = f.textContent, b = f.selection, M = w(null == b ? void 0 : b.anchorNode, "messageAuthorRole").dataValue, C = w(null == b ? void 0 : b.anchorNode, "messageId"), T = C.node, P = C.dataValue, O = w(null == b ? void 0 : b.focusNode, "messageId").dataValue, I = null == k ? void 0 : k.trim(), S = null !== (c = null == I ? void 0 : I.length) && void 0 !== c ? c : 0;
            return null == p || v || S < 3 || !(!O || P === O) || "assistant" !== M ? null : (0,
            y.jsx)(j, {
                messageId: null != P ? P : "",
                anchorNode: T,
                clientRect: p,
                onClick: function(e) {
                    void 0 !== I && m({
                        targetedReply: I,
                        messageId: e
                    })
                }
            })
        }
        var C = (0,
        o.vU)({
            replyTooltip: {
                id: "targetedReply.replyTooltip",
                defaultMessage: "Reply"
            }
        })
    },
    24047: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Q
            }
        });
        var a = n(6939)
          , r = n(36112)
          , i = n(50134)
          , s = n(4399)
          , o = n.n(s)
          , l = n(84623)
          , d = n(25349)
          , c = n(99893)
          , u = n(60077)
          , m = n(55509)
          , f = n(8844)
          , p = n(11591);
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function h() {
            return (h = (0,
            i.Z)(o().mark(function e(t, n) {
                var a, r, i;
                return o().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!((null === (a = n.metadata) || void 0 === a ? void 0 : a.client_actions) === void 0 || 0 === n.metadata.client_actions.length)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            if (0 != (r = n.metadata.client_actions.filter(function(e) {
                                return "browser_tool" === e.type
                            })).length) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", []);
                        case 6:
                            return e.next = 8,
                            Promise.all(r.map(function(e) {
                                return function(e, t, n) {
                                    return k.apply(this, arguments)
                                }(t, e.action, n)
                            }));
                        case 8:
                            return i = e.sent,
                            e.abrupt("return", i.flat());
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        var y = function() {
            function e(t) {
                (0,
                u.Z)(this, e),
                (0,
                r.Z)(this, "conversationId", void 0),
                this.conversationId = t
            }
            return (0,
            m.Z)(e, [{
                key: "createRequest",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, a) {
                        var r = new BroadcastChannel(Math.random().toString())
                          , i = setTimeout(function() {
                            a("Timeout"),
                            r.close()
                        }, 6e4);
                        r.onmessage = function(e) {
                            n(e.data),
                            clearTimeout(i),
                            r.close()
                        }
                        ;
                        var s = g(g({
                            action: "browse",
                            id: t.conversationId
                        }, e), {}, {
                            channel: r.name
                        });
                        window.postMessage(s, "*")
                    }
                    )
                }
            }, {
                key: "browse",
                value: function(e) {
                    return this.createRequest({
                        url: e,
                        type: "browse"
                    })
                }
            }, {
                key: "back",
                value: function() {
                    return this.createRequest({
                        type: "back"
                    })
                }
            }, {
                key: "click",
                value: function(e) {
                    return this.createRequest({
                        target: e,
                        type: "click"
                    })
                }
            }, {
                key: "scroll",
                value: function(e) {
                    return this.createRequest({
                        amount: e,
                        type: "scroll"
                    })
                }
            }, {
                key: "quote",
                value: function(e, t) {
                    return this.createRequest({
                        quote_start: e,
                        quote_end: t,
                        type: "quote"
                    })
                }
            }]),
            e
        }();
        function v(e, t, n) {
            return !function(e) {
                for (var t in e.urls)
                    e.text.includes("".concat(t)) || delete e.urls[t]
            }(n),
            {
                id: (0,
                f.Z)(),
                author: {
                    role: p.uU.Tool,
                    name: "browser"
                },
                content: {
                    content_type: p.PX.TetherBrowsingDisplay,
                    result: n.text,
                    summary: n.title
                },
                metadata: {
                    _cite_metadata: {
                        citation_format: {
                            name: "tether_og"
                        },
                        metadata_list: [{
                            type: "webpage",
                            title: n.title,
                            url: n.url,
                            text: n.text
                        }]
                    }
                },
                recipient: "all"
            }
        }
        function k() {
            return (k = (0,
            i.Z)(o().mark(function e(t, n, a) {
                var r, i, s, l, d, c;
                return o().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            r = new y(t),
                            e.prev = 1,
                            e.t0 = n.command,
                            e.next = "back" === e.t0 ? 5 : "quote" === e.t0 ? 9 : "scroll" === e.t0 ? 13 : "open_url" === e.t0 ? 17 : "click" === e.t0 ? 21 : 25;
                            break;
                        case 5:
                            return e.next = 7,
                            r.back();
                        case 7:
                            return i = e.sent,
                            e.abrupt("return", [v(t, a, i)]);
                        case 9:
                            return e.next = 11,
                            r.quote(n.quote_start, n.quote_end);
                        case 11:
                            return s = e.sent,
                            e.abrupt("return", [{
                                id: (0,
                                f.Z)(),
                                author: {
                                    role: p.uU.Tool,
                                    name: "browser"
                                },
                                content: {
                                    content_type: p.PX.Text,
                                    parts: ["".concat(JSON.stringify(s))]
                                },
                                recipient: "all"
                            }]);
                        case 13:
                            return e.next = 15,
                            r.scroll(n.amount);
                        case 15:
                            return l = e.sent,
                            e.abrupt("return", [v(t, a, l)]);
                        case 17:
                            return e.next = 19,
                            r.browse(n.url);
                        case 19:
                            return d = e.sent,
                            e.abrupt("return", [v(t, a, d)]);
                        case 21:
                            return e.next = 23,
                            r.click(n.target);
                        case 23:
                            return c = e.sent,
                            e.abrupt("return", [v(t, a, c)]);
                        case 25:
                            throw Error("Unsupported browser action type " + n);
                        case 26:
                            e.next = 32;
                            break;
                        case 28:
                            return e.prev = 28,
                            e.t1 = e.catch(1),
                            console.error(e.t1),
                            e.abrupt("return", [{
                                id: (0,
                                f.Z)(),
                                author: {
                                    role: p.uU.Tool,
                                    name: "browser"
                                },
                                content: {
                                    content_type: p.PX.Text,
                                    parts: ["Error making browse call: ".concat(e.t1)]
                                },
                                recipient: "all"
                            }]);
                        case 32:
                        case "end":
                            return e.stop()
                        }
                }, e, null, [[1, 28]])
            }))).apply(this, arguments)
        }
        var b = n(66548)
          , j = n(89678)
          , w = n.n(j)
          , M = n(70079)
          , C = n(7144)
          , T = n(17046)
          , P = n(66027)
          , O = n(19954)
          , I = n(93239)
          , S = n(86178)
          , N = n(26272)
          , _ = n(14765)
          , D = (0,
        m.Z)(function e() {
            var t = this;
            (0,
            u.Z)(this, e),
            (0,
            r.Z)(this, "completionStartTime", Date.now()),
            (0,
            r.Z)(this, "completionEndTime", void 0),
            (0,
            r.Z)(this, "blurDuringCompletionTime", void 0),
            (0,
            r.Z)(this, "refocusTime", void 0),
            (0,
            r.Z)(this, "logFocusAfterBlurDuringCompletionEvent", function() {
                _.m9.logEvent("chatgpt_focus_after_blur_during_completion", null, {
                    completion_duration_ms: "".concat(t.completionEndTime - t.completionStartTime),
                    blur_time_ms: "".concat(t.blurDuringCompletionTime - t.completionStartTime),
                    refocus_time_ms: "".concat(t.refocusTime - t.completionStartTime)
                }),
                d.A.logEvent(c.M.focusAfterBlurDuringCompletion, {
                    completion_duration_ms: "".concat(t.completionEndTime - t.completionStartTime),
                    blur_time_ms: "".concat(t.blurDuringCompletionTime - t.completionStartTime),
                    refocus_time_ms: "".concat(t.refocusTime - t.completionStartTime)
                })
            }),
            (0,
            r.Z)(this, "onWindowBlur", function() {
                void 0 === t.blurDuringCompletionTime && (t.blurDuringCompletionTime = Date.now(),
                window.addEventListener("focus", t.onWindowFocusAfterBlur))
            }),
            (0,
            r.Z)(this, "onWindowFocusAfterBlur", function() {
                t.refocusTime = Date.now(),
                void 0 !== t.completionEndTime && t.logFocusAfterBlurDuringCompletionEvent(),
                t.cleanupFocusAfterBlurListener()
            }),
            (0,
            r.Z)(this, "cleanupFocusAfterBlurListener", function() {
                window.removeEventListener("focus", t.onWindowFocusAfterBlur)
            }),
            (0,
            r.Z)(this, "onMessageError", function() {
                window.removeEventListener("blur", t.onWindowBlur)
            }),
            (0,
            r.Z)(this, "onMessageDone", function() {
                window.removeEventListener("blur", t.onWindowBlur),
                void 0 !== t.blurDuringCompletionTime && (t.completionEndTime = Date.now(),
                _.m9.logEvent("chatgpt_blur_during_completion", null, {
                    completion_duration_ms: "".concat(t.completionEndTime - t.completionStartTime),
                    blur_time_ms: "".concat(t.blurDuringCompletionTime - t.completionStartTime)
                }),
                d.A.logEvent(c.M.blurDuringCompletion, {
                    completion_duration_ms: "".concat(t.completionEndTime - t.completionStartTime),
                    blur_time_ms: "".concat(t.blurDuringCompletionTime - t.completionStartTime)
                }),
                void 0 !== t.refocusTime && t.logFocusAfterBlurDuringCompletionEvent())
            }),
            window.addEventListener("blur", this.onWindowBlur)
        })
          , Z = n(68113)
          , R = function() {
            function e(t) {
                (0,
                u.Z)(this, e),
                this.requestLatencyId = t,
                (0,
                r.Z)(this, "requestStartTime", performance.now()),
                (0,
                r.Z)(this, "requestLastTokenTime", performance.now()),
                (0,
                r.Z)(this, "requestCount", 0),
                (0,
                r.Z)(this, "requestTimes", [])
            }
            return (0,
            m.Z)(e, [{
                key: "onResponse",
                value: function(e, t, n) {
                    var a, r, i = performance.now(), s = i - this.requestLastTokenTime, o = i - this.requestStartTime;
                    this.requestLastTokenTime = i,
                    this.requestCount += 1;
                    var l = t.content.content_type == p.PX.Text ? null == t ? void 0 : null === (a = t.content) || void 0 === a ? void 0 : a.parts[(null == t ? void 0 : null === (r = t.content) || void 0 === r ? void 0 : r.parts.length) - 1] : ""
                      , d = {
                        requestCount: this.requestCount,
                        requestDuration: o,
                        lastTokenDuration: Number(JSON.stringify(s)),
                        messageType: t.content.content_type,
                        content: l
                    };
                    this.requestTimes.push(d),
                    "message" === e.type ? (0,
                    Z.Ae)(this.requestLatencyId, d) : "done" === e.type && null != n && ((0,
                    Z.kn)(this.requestLatencyId),
                    (0,
                    Z.gL)(this.requestLatencyId))
                }
            }]),
            e
        }()
          , F = n(38766)
          , E = n(73524)
          , A = n(17378)
          , L = n(85064)
          , q = n(46514);
        function B(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return z(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return z(e, t)
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, s = !0, o = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return s = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    i = e
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }
        function z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function U(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach(function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function G(e, t) {
            e.updateNodeMetadata(t.id, {
                completionSampleFinishTime: Date.now()
            })
        }
        function H(e, t, n, a, r, i, s) {
            return W.apply(this, arguments)
        }
        function W() {
            return (W = (0,
            i.Z)(o().mark(function e(t, n, a, r, i, s, d) {
                var c, u, m, f, x;
                return o().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (m = performance.now(),
                            f = null === (c = (0,
                            q.P6)(a)) || void 0 === c ? void 0 : c.tags,
                            r && l.ZP.gatherData(null != f ? f : []),
                            O.tQ.updateTree(t, function(e) {
                                var t, a = B(s);
                                try {
                                    for (a.s(); !(t = a.n()).done; ) {
                                        var r = t.value;
                                        e.addNode(r.id, r, n, p.uU.Assistant, {
                                            completionSampleFinishTime: Date.now()
                                        }),
                                        n = r.id
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                            }),
                            O.tQ.setThreadCurrentLeafId(t, n),
                            !r) {
                                e.next = 9;
                                break
                            }
                            return e.next = 8,
                            l.ZP.getEnforcementToken(null != f ? f : []);
                        case 8:
                            x = e.sent;
                        case 9:
                            i({
                                model: a,
                                completionType: p.Os.Next,
                                parentNodeId: n,
                                metadata: {},
                                arkoseToken: null !== (u = x) && void 0 !== u ? u : null,
                                preflightTime: performance.now() - m,
                                extraStreamParams: d
                            });
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
        function Q(e, t, n, r, s, u) {
            var m, f = (0,
            C.hz)(), x = (0,
            M.useRef)(n), g = (0,
            M.useRef)(r), y = (0,
            M.useRef)(s);
            x.current = n,
            g.current = r,
            y.current = s;
            var v = (0,
            M.useCallback)(function(t, n, a, r, s, u) {
                var m, v, j, M, C = r.eventSource, P = O.tQ.getTree(e), I = a, S = n === p.Os.Continue, _ = !0, Z = !1, F = P.getMessage(I), E = {}, B = {}, z = !1, U = !1, W = new D, Q = new R(s);
                function $() {
                    setTimeout(function() {
                        N.hx.removeRequest(a),
                        O.tQ.releaseThread(e)
                    }, 0)
                }
                var X = w()(function() {
                    z || O.tQ.updateTree(e, function(e) {
                        Object.values(E).forEach(function(t) {
                            e.updateNodeMessage(t.id, t)
                        })
                    }),
                    E = {}
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                return m = (0,
                i.Z)(o().mark(function r(i) {
                    var s, m, w, N, D, R, K, Y, J, ee, et, en, ea, er, ei, es, eo, el, ed, ec, eu, em, ef, ep, ex, eg, eh, ey, ev, ek, eb, ej, ew, eM, eC, eT, eP, eO, eI;
                    return o().wrap(function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                if (Q.onResponse(i, F, v),
                                s = !0,
                                "error" !== i.type) {
                                    r.next = 12;
                                    break
                                }
                                return console.error(m = i.error),
                                w = (null == m ? void 0 : m.message) || "Something went wrong",
                                O.tQ.updateTree(e, function(e) {
                                    e.updateNodeMessage(I, F),
                                    e.updateNodeMetadata(I, {
                                        err: w,
                                        errType: "danger",
                                        errCode: (0,
                                        T.T)(m) && m.code || "",
                                        completionSampleFinishTime: Date.now()
                                    })
                                }),
                                W.onMessageError(),
                                $(),
                                y.current(v),
                                (0,
                                T.T)(m) && (null == m ? void 0 : m.code) === L.uU && null != m && m.clearsIn && ((0,
                                L.c0)(new Date(Date.now() + 1e3 * m.clearsIn).toISOString()),
                                setTimeout(function() {
                                    (0,
                                    L.Zp)()
                                }, 1e3 * m.clearsIn)),
                                r.abrupt("return");
                            case 12:
                                if ("moderation" === i.type && (N = i.isCompletion,
                                D = i.messageId,
                                R = i.conversationId,
                                K = i.flagged,
                                Y = i.blocked,
                                (K || Y) && (U = !0,
                                Y && N && (z = !0),
                                O.tQ.updateTree(e, function(e) {
                                    var t = e.messageIdToNodeId(D);
                                    Y && e.clearNodeMessageParts(t),
                                    e.updateNodeMetadata(t, V(V({}, Y ? b.sK : b.Mf), {}, {
                                        completionSampleFinishTime: Date.now()
                                    }))
                                }),
                                d.A.logEvent(N ? Y ? c.M.completionBlockedByModeration : c.M.completionFlaggedByModeration : Y ? c.M.promptBlockedByModeration : c.M.promptFlaggedByModeration, {
                                    threadId: R,
                                    id: D
                                }))),
                                "num_variants_in_stream" !== i.type) {
                                    r.next = 16;
                                    break
                                }
                                return j = i,
                                r.abrupt("return");
                            case 16:
                                if ("message" !== i.type) {
                                    r.next = 34;
                                    break
                                }
                                if (J = i.message,
                                ee = i.conversationId,
                                !(_ && !P.hasReceivedServerCompletion)) {
                                    r.next = 30;
                                    break
                                }
                                if ((null == J ? void 0 : J.author.role) !== p.uU.System) {
                                    r.next = 26;
                                    break
                                }
                                if (!((null == (en = null !== (et = J.metadata) && void 0 !== et && et.parent_id ? P.getNodeByIdOrMessageId(J.metadata.parent_id) : void 0) ? void 0 : en.message.author.role) !== p.uU.User)) {
                                    r.next = 24;
                                    break
                                }
                                return P.appendSystemMessageToRoot(J),
                                r.abrupt("return");
                            case 24:
                                r.next = 28;
                                break;
                            case 26:
                                if ((null == J ? void 0 : J.author.role) !== p.uU.User) {
                                    r.next = 28;
                                    break
                                }
                                return r.abrupt("return");
                            case 28:
                                if (!P.hasNodeOrMessageId(J.id)) {
                                    r.next = 30;
                                    break
                                }
                                return r.abrupt("return");
                            case 30:
                                _ ? (er = (null === (ea = O.qN.getState().threads[e]) || void 0 === ea ? void 0 : ea.continuingFromSharedConversationId) != null,
                                O.tQ.removeContinuingFromSharedConversationId(e),
                                _ = !1,
                                Z = !P.hasReceivedServerCompletion || er,
                                void 0 !== ee && (v = ee,
                                (0,
                                O.Zz)(e) && O.tQ.setServerIdForNewThread(e, ee)),
                                O.tQ.updateTree(e, function(e) {
                                    e.updateNodeMessage(I, J)
                                }),
                                Z && x.current(ee),
                                ei = {
                                    id: a,
                                    threadId: ee,
                                    completionType: n,
                                    eventSource: C,
                                    model: t
                                },
                                n === p.Os.Next && (ec = null == (ed = O.qN.getState().threads[ee]) ? void 0 : null === (es = ed.conversationTurns) || void 0 === es ? void 0 : es.length,
                                (null == (em = null === (el = (eu = null == ed ? void 0 : null === (eo = ed.conversationTurns) || void 0 === eo ? void 0 : eo.filter(function(e) {
                                    return e.role == p.uU.User
                                }))[eu.length - 1]) || void 0 === el ? void 0 : el.messages[0].message) ? void 0 : em.content.content_type) == p.PX.Text && (ep = em.content.parts.join("").length,
                                ex = null !== (ef = eu.length) && void 0 !== ef ? ef : 0,
                                ei.countConversationTurns = ec,
                                ei.countUserSubmittedMessages = ex,
                                ei.countLastUserPromptTextMessageLength = ep)),
                                d.A.logEvent(c.M.generateCompletion, ei)) : !S && (ev = P.containsNodeOrMessageId(J.id),
                                ek = null === (eg = J.metadata) || void 0 === eg ? void 0 : eg.parent_id,
                                ev || (X.flush(),
                                O.tQ.updateTree(e, function(e) {
                                    if (null == ek)
                                        throw Error("Received a message with no parentId: ".concat(JSON.stringify(J)));
                                    e.addNode(J.id, J, ek, p.uU.Assistant)
                                })),
                                null != ek && ek === M && null != (eb = B[ek]) && (O.tQ.updateTree(e, function(e) {
                                    G(e, eb)
                                }),
                                delete B[ek]),
                                (s = (null !== (eh = null === (ey = j) || void 0 === ey ? void 0 : ey.num_variants_in_stream) && void 0 !== eh ? eh : 1) === 1 || null == M || M === J.id) && M !== J.id && (M = J.id,
                                I = J.id,
                                ej = O.tQ.getThreadCurrentLeafId(e),
                                P.messageIdToNodeId(I) !== P.messageIdToNodeId(ej) && O.tQ.setThreadCurrentLeafId(e, I),
                                null != ek && O.tQ.updateTree(e, function(e) {
                                    e.updateNodeMetadata(ek, {
                                        variantsInStreamInfo: j
                                    })
                                }))),
                                s && (F = J),
                                E[J.id] = J,
                                B[J.id] = J;
                            case 34:
                                if (X(),
                                "done" !== i.type) {
                                    r.next = 61;
                                    break
                                }
                                if (z || (X.flush(),
                                U || (Z && g.current(v),
                                y.current(v))),
                                O.tQ.updateTree(e, function(e) {
                                    Object.values(B).forEach(function(t) {
                                        G(e, t)
                                    })
                                }),
                                W.onMessageDone(),
                                $(),
                                eT = null === (ew = (0,
                                q.P6)(t)) || void 0 === ew ? void 0 : ew.tags,
                                eP = (0,
                                l.Rr)(f, null != eT ? eT : [], p.OL.PrimaryAssistant),
                                !((null === (eM = F) || void 0 === eM ? void 0 : null === (eC = eM.metadata) || void 0 === eC ? void 0 : eC.client_actions) !== void 0)) {
                                    r.next = 47;
                                    break
                                }
                                return r.next = 45,
                                function(e, t) {
                                    return h.apply(this, arguments)
                                }(e, F);
                            case 45:
                                (eO = r.sent).length > 0 && H(e, I, t, eP, k, eO, u);
                            case 47:
                                if (!(null != f && f.includes("tools3_dev")) || !(eI = (0,
                                A.wR)(F))) {
                                    r.next = 61;
                                    break
                                }
                                return r.t0 = H,
                                r.t1 = e,
                                r.t2 = I,
                                r.t3 = t,
                                r.t4 = eP,
                                r.t5 = k,
                                r.next = 58,
                                (0,
                                A.qZ)(eI);
                            case 58:
                                r.t6 = r.sent,
                                r.t7 = u,
                                (0,
                                r.t0)(r.t1, r.t2, r.t3, r.t4, r.t5, r.t6, r.t7);
                            case 61:
                            case "end":
                                return r.stop()
                            }
                    }, r)
                })),
                function(e) {
                    return m.apply(this, arguments)
                }
            }, [x, g, y, e])
              , k = (0,
            M.useCallback)((m = (0,
            i.Z)(o().mark(function n(r) {
                var i, s, l, d, c, m, f, x, g, h, y, k, b, j, w, M, C, T, _, D, R, A, L, q, z, U, G, H, W, Q, $, X, K, Y, J, ee;
                return o().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            for (i = r.model,
                            s = r.completionType,
                            l = r.parentNodeId,
                            d = r.metadata,
                            m = void 0 === (c = r.focusOnNewCompletion) || c,
                            f = r.completionMetadata,
                            x = r.arkoseToken,
                            g = r.preflightTime,
                            h = r.extraStreamParams,
                            y = r.appendMessages,
                            I.E.publish({
                                kind: "requestCompletion"
                            }),
                            k = O.tQ.getTree(e),
                            O.tQ.retainThread(e),
                            b = (0,
                            O.Lp)(),
                            j = "".concat(S.Vh).concat(e, "-").concat(b),
                            w = "".concat(e, "-").concat(b),
                            O.tQ.updateTree(e, function(e) {
                                e.addNode(j, "", l, p.uU.Assistant)
                            }),
                            m && O.tQ.setThreadCurrentLeafId(e, j),
                            C = [],
                            T = k.getNodeByIdOrMessageId(l),
                            _ = k.getNodeByIdOrMessageId(T.parentId); null != _ && ((null === (D = _.metadata) || void 0 === D ? void 0 : D.isPlaceholderTemplateAssistantWelcomeMessage) === !0 || (null === (R = _.metadata) || void 0 === R ? void 0 : R.isClientCreatedSystemMessage) === !0); )
                                q = _.message,
                                C.unshift(q),
                                M = null !== (A = null === (L = (z = k.getNodeByIdOrMessageId(_.parentId)).message) || void 0 === L ? void 0 : L.id) && void 0 !== A ? A : z.id,
                                _ = z;
                            return s === p.Os.Next || s === p.Os.Variant ? (W = k.getNodeByIdOrMessageId(T.parentId),
                            null !== (U = M) && void 0 !== U || (M = null !== (G = null === (H = W.message) || void 0 === H ? void 0 : H.id) && void 0 !== G ? G : W.id),
                            C.push(T.message),
                            y && (Q = l,
                            O.tQ.updateTree(e, function(e) {
                                var t, n = B(y);
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var a = t.value;
                                        e.insertNodeBefore(j, {
                                            id: a.id,
                                            message: a,
                                            parentId: Q,
                                            children: []
                                        }),
                                        Q = a.id
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }),
                            C.push.apply(C, (0,
                            a.Z)(y)))) : null !== ($ = M) && void 0 !== $ || (M = T.message.id),
                            void 0 === (X = O.tQ.getServerThreadId(e)) && (0,
                            O.Zz)(e) && O.tQ.updateInitialThreadDataForNewThread(e, i, u),
                            K = V(V({}, h), {}, {
                                model: i,
                                completionType: s,
                                threadId: X,
                                continueFromSharedConversationId: t,
                                historyDisabled: (0,
                                F.YK)(),
                                parentMessageId: M,
                                messages: C,
                                arkoseToken: null != x ? x : null,
                                enabledPluginIds: u,
                                completionMetadata: f
                            }),
                            Y = function(e, t) {
                                (0,
                                Z.F4)(w, t, e, g)
                            }
                            ,
                            J = v(i, s, j, d, w, h),
                            n.next = 21,
                            P.ZP.publicApiCompletionStream(K, J, Y);
                        case 21:
                            ee = n.sent,
                            N.hx.addRequest(j, ee),
                            E.bx.onCompletionRequestStarted(j);
                        case 24:
                        case "end":
                            return n.stop()
                        }
                }, n)
            })),
            function(e) {
                return m.apply(this, arguments)
            }
            ), [e, t, u, v]);
            return k
        }
    },
    65448: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var a = n(11591)
          , r = n(19954)
          , i = n(73929)
          , s = n(70079);
        function o(e) {
            var t = (0,
            s.useContext)(i.OV);
            return function(n) {
                var i = n.id
                  , s = n.eventMetadata
                  , o = n.focusOnNewCompletion
                  , l = n.variantPurpose
                  , d = n.useDefaultModel
                  , c = n.appendMessages
                  , u = n.conversationMode
                  , m = r.tQ.getTree(e).getParentPromptNode(i).id;
                t({
                    type: a.Os.Variant,
                    promptId: m,
                    eventMetadata: s,
                    cancelActiveRequests: !1,
                    focusOnNewCompletion: void 0 === o || o,
                    useDefaultModel: d,
                    completionMetadata: {
                        variantPurpose: void 0 === l ? "none" : l,
                        conversationMode: u
                    },
                    appendMessages: c
                })
            }
        }
    },
    99471: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var a = n(36112)
          , r = n(11591)
          , i = n(41543)
          , s = n(19954)
          , o = n(8844)
          , l = n(65448);
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach(function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function u(e) {
            var t = (0,
            l.Z)(e)
              , n = (0,
            i.WA)(e);
            return function(a, i, l) {
                var d = s.tQ.getTree(e).getConversationTurns(a)
                  , u = null == d ? void 0 : d[(null == d ? void 0 : d.length) - 1].variantIds
                  , m = (null == u ? void 0 : u.length) === 1;
                t({
                    id: a,
                    eventMetadata: m ? c(c({}, i), {}, {
                        intent: "comparison_implicit"
                    }) : i,
                    focusOnNewCompletion: !0,
                    variantPurpose: m ? "comparison_implicit" : "none",
                    conversationMode: n,
                    useDefaultModel: !1,
                    appendMessages: l ? [{
                        id: (0,
                        o.Z)(),
                        author: {
                            role: r.uU.System
                        },
                        content: {
                            content_type: r.PX.Text,
                            parts: [l]
                        },
                        metadata: {
                            exclude_after_next_user_message: !0
                        }
                    }] : void 0
                })
            }
        }
    },
    77449: function(e, t, n) {
        "use strict";
        n.d(t, {
            h7: function() {
                return N
            },
            s8: function() {
                return F
            },
            jM: function() {
                return R
            },
            vC: function() {
                return D
            }
        });
        var a, r, i = n(36112), s = n(14972), o = n(35250);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach(function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function c(e) {
            return (0,
            o.jsxs)(s.A0, d(d({
                width: "19",
                height: "15",
                viewBox: "0 0 19 15",
                fill: "none"
            }, e), {}, {
                children: [(0,
                o.jsx)("path", {
                    d: "M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.16045 7.41534C5.32257 7.228 4.69638 6.47988 4.69638 5.58551C4.69638 4.54998 5.53584 3.71051 6.57136 3.71051C7.60689 3.71051 8.44635 4.54998 8.44635 5.58551C8.44635 5.8965 8.37064 6.1898 8.23664 6.448C8.22998 6.48984 8.21889 6.53136 8.20311 6.57208L6.77017 10.2702C6.63182 10.6272 6.18568 10.7873 5.7737 10.6276C5.36172 10.468 5.13991 10.0491 5.27826 9.69206L6.16045 7.41534ZM11.4177 7.41534C10.5798 7.228 9.95362 6.47988 9.95362 5.58551C9.95362 4.54998 10.7931 3.71051 11.8286 3.71051C12.8641 3.71051 13.7036 4.54998 13.7036 5.58551C13.7036 5.8965 13.6279 6.1898 13.4939 6.448C13.4872 6.48984 13.4761 6.53136 13.4604 6.57208L12.0274 10.2702C11.8891 10.6272 11.4429 10.7873 11.0309 10.6276C10.619 10.468 10.3971 10.0491 10.5355 9.69206L11.4177 7.41534Z",
                    fill: "currentColor"
                })]
            }))
        }
        function u(e) {
            return (0,
            o.jsxs)(s.A0, d(d({
                width: "19",
                height: "15",
                viewBox: "0 0 19 15",
                fill: "none"
            }, e), {}, {
                children: [(0,
                o.jsx)("path", {
                    d: "M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                o.jsx)("path", {
                    d: "M5.55283 4.21963C5.25993 3.92674 4.78506 3.92674 4.49217 4.21963C4.19927 4.51252 4.19927 4.9874 4.49217 5.28029L6.36184 7.14996L4.49217 9.01963C4.19927 9.31252 4.19927 9.7874 4.49217 10.0803C4.78506 10.3732 5.25993 10.3732 5.55283 10.0803L7.95283 7.68029C8.24572 7.3874 8.24572 6.91252 7.95283 6.61963L5.55283 4.21963Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "0.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                o.jsx)("path", {
                    d: "M9.77753 8.75003C9.3357 8.75003 8.97753 9.10821 8.97753 9.55003C8.97753 9.99186 9.3357 10.35 9.77753 10.35H13.2775C13.7194 10.35 14.0775 9.99186 14.0775 9.55003C14.0775 9.10821 13.7194 8.75003 13.2775 8.75003H9.77753Z",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "0.1"
                })]
            }))
        }
        var m = n(3554)
          , f = n(70671)
          , p = n(94968)
          , x = n(65100);
        function g(e) {
            var t = e.codeMessage
              , n = e.codeExecutionOutputMessage
              , a = e.onDismiss
              , r = (0,
            f.Z)();
            return (0,
            o.jsx)(m.ZP.Root, {
                isOpen: !0,
                onClose: a,
                children: (0,
                o.jsx)(m.ZP.Overlay, {
                    children: (0,
                    o.jsxs)(m.ZP.Content, {
                        className: "flex max-h-[75vh] max-w-lg flex-col overflow-hidden",
                        children: [(0,
                        o.jsx)(m.ZP.Header, {
                            title: r.formatMessage(h.title),
                            type: "success",
                            closeButton: (0,
                            o.jsx)(m.ZP.CloseButton, {
                                onClose: a
                            })
                        }), (0,
                        o.jsxs)("div", {
                            className: "flex flex-1 flex-col overflow-auto bg-black",
                            children: [(0,
                            o.jsx)("div", {
                                children: (0,
                                o.jsx)(x.XX, {
                                    message: t
                                })
                            }), (0,
                            o.jsx)("div", {
                                children: (0,
                                o.jsx)(x.Xt, {
                                    message: n
                                })
                            })]
                        })]
                    })
                })
            })
        }
        var h = (0,
        p.vU)({
            title: {
                id: "CodeExecutionOutputModal.title",
                defaultMessage: "Analysis"
            }
        })
          , y = n(41543)
          , v = n(19954)
          , k = n(25349)
          , b = n(99893)
          , j = n(70079)
          , w = n(1454)
          , M = n(32004)
          , C = n(11591)
          , T = n(90166)
          , P = n(97761)
          , O = n(55161)
          , I = n(41899);
        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        (a = r || (r = {}))[a.Standard = 0] = "Standard",
        a[a.CodeExecution = 1] = "CodeExecution";
        var N = (0,
        j.createContext)(void 0)
          , _ = "&#8203;";
        function D(e, t, n) {
            var a = [];
            if (null != t)
                for (var i = t.filter(function(t) {
                    return t.end_ix <= e.length
                }), s = i.length - 1; s >= 0; s--) {
                    var o = i[s]
                      , l = o.citation_format_type
                      , d = o.start_ix
                      , c = o.end_ix
                      , u = o.metadata
                      , m = o.invalid_reason;
                    if ("tether_markdown" === l) {
                        if (u && "file" !== u.type) {
                            var f = e.slice(d, c).replace(/\[(.*?)\]\((\d+)\)/g, "[$1](".concat(u.url, ")"));
                            e = e.slice(0, d) + f + e.slice(c)
                        }
                    } else {
                        var p = {
                            type: r.Standard
                        };
                        u ? p.metadata = u : null != m && (p.invalid_reason = m);
                        var x = !1;
                        if (s > 0) {
                            var g = i[s - 1];
                            null != g.metadata && null != u && q(g.metadata) === q(u) && 0 === e.slice(g.end_ix, o.start_ix).trim().length && (e = e.slice(0, g.end_ix) + e.slice(o.end_ix),
                            x = !0)
                        }
                        if (!x) {
                            var h = a.length;
                            e = e.slice(0, d) + Z(h) + e.slice(c),
                            a.push(p)
                        }
                    }
                }
            if (null != n) {
                var y = n.find(function(e) {
                    return (0,
                    I.rH)(e) === I.Cs.CodeInterpreter
                })
                  , v = n.find(function(e) {
                    return (0,
                    I.rH)(e) === I.Cs.CodeInterpreterTool
                });
                null != y && null != v && (e = e + " " + Z(a.length),
                a.push({
                    type: r.CodeExecution,
                    codeMessage: y,
                    codeExecutionOutputMessage: v
                }))
            }
            return {
                text: e,
                displayedCitations: a
            }
        }
        function Z(e) {
            return "".concat(_, "``【oaicite:").concat(e, "】``").concat(_)
        }
        function R(e) {
            var t = e.match(/【oaicite:(\d+)】/);
            if (t)
                try {
                    return parseInt(t[1], 10)
                } catch (e) {}
            return -1
        }
        function F(e) {
            var t = e.index
              , n = e.displayInfo;
            return n.type === r.Standard ? (0,
            o.jsx)(E, {
                index: t,
                displayInfo: n
            }) : (0,
            o.jsx)(A, {
                displayInfo: n
            })
        }
        function E(e) {
            var t, n, a, r = e.index, i = e.displayInfo, s = (0,
            O.O6)(), l = (0,
            j.useContext)(N), d = (0,
            v.XK)(null !== (t = null == l ? void 0 : l.clientThreadId) && void 0 !== t ? t : C.Zq), u = (0,
            y.WA)(null !== (n = null == l ? void 0 : l.clientThreadId) && void 0 !== n ? n : C.Zq), m = i.metadata, f = (null == m ? void 0 : m.type) === "file", p = !f && null != l && !l.isActivelyStreaming, x = p ? {
                conversation_id: d,
                model_slug: null == l ? void 0 : null === (a = l.message.metadata) || void 0 === a ? void 0 : a.model_slug,
                message_id: null == l ? void 0 : l.message.id,
                url: null == m ? void 0 : m.url,
                citation_number: r
            } : null;
            if ((0,
            j.useEffect)(function() {
                null != x && k.A.logEvent(b.M.browsingDisplayCitation, x)
            }, [p]),
            (f || null == m) && (u.kind === C.OL.GizmoInteraction || u.kind == C.OL.GizmoTest || u.kind == C.OL.GizmoMagicCreate))
                return null;
            var g = (0,
            o.jsx)(c, {
                className: "-mt-0.5 ml-0.5 inline-block text-link-base hover:text-link-hover"
            });
            return (0,
            o.jsx)(T.u, {
                label: (0,
                o.jsx)(L, {
                    citationMetadata: m,
                    invalidReason: i.invalid_reason,
                    onClick: function() {
                        null != x && k.A.logEvent(b.M.browsingClickCitation, x)
                    }
                }),
                onOpenChange: function(e) {
                    e && null != x && k.A.logEvent(b.M.browsingHoverCitation, x)
                },
                side: "top",
                sideOffset: 4,
                withArrow: !1,
                delayDuration: 150,
                interactive: !0,
                wide: !0,
                children: f ? (0,
                o.jsx)("button", {
                    onClick: function() {
                        return s(m.id, m.name)
                    },
                    className: "px-0.5 text-green-600",
                    children: g
                }) : (0,
                o.jsx)("a", {
                    href: null == m ? void 0 : m.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "px-0.5 text-green-600 !no-underline",
                    onClick: function() {
                        null != x && k.A.logEvent(b.M.browsingClickCitation, x)
                    },
                    children: g
                })
            })
        }
        function A(e) {
            var t = e.displayInfo
              , n = (0,
            j.useState)(!1)
              , a = n[0]
              , r = n[1]
              , i = (0,
            f.Z)();
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(T.u, {
                    label: i.formatMessage(B.viewAnalysis),
                    side: "top",
                    sideOffset: 4,
                    withArrow: !1,
                    delayDuration: 150,
                    children: (0,
                    o.jsx)("button", {
                        onClick: function() {
                            return r(!0)
                        },
                        children: (0,
                        o.jsx)(u, {
                            className: "-mt-0.5 ml-0.5 inline-block text-link-base hover:text-link-hover"
                        })
                    })
                }), a && (0,
                o.jsx)(g, {
                    codeMessage: t.codeMessage,
                    codeExecutionOutputMessage: t.codeExecutionOutputMessage,
                    onDismiss: function() {
                        return r(!1)
                    }
                })]
            })
        }
        function L(e) {
            var t = e.citationMetadata
              , n = e.invalidReason
              , a = e.onClick
              , r = (0,
            O.O6)()
              , s = (null == t ? void 0 : t.type) === "file"
              , l = t ? (0,
            o.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0,
                o.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: s ? (0,
                    o.jsx)(w.NOg, {}) : (0,
                    o.jsx)(P.Z, {
                        url: t.url,
                        className: "my-0"
                    })
                }), (0,
                o.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: s ? t.name : t.title
                }), (0,
                o.jsx)("div", {
                    className: "shrink-0",
                    children: (0,
                    o.jsx)(w.AlO, {
                        className: "icon-xs"
                    })
                })]
            }) : (0,
            o.jsx)("div", {
                className: "text-red-500",
                children: null != n ? n : (0,
                o.jsx)(M.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(n), !0).forEach(function(t) {
                            (0,
                            i.Z)(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, B.invalid))
            });
            return s ? (0,
            o.jsx)("button", {
                onClick: function() {
                    r(t.id, t.name),
                    null == a || a()
                },
                className: "text-xs",
                children: l
            }) : (0,
            o.jsx)("a", {
                href: null == t ? void 0 : t.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs !no-underline",
                onClick: a,
                children: l
            })
        }
        function q(e) {
            return "file" === e.type ? e.id : e.url
        }
        var B = (0,
        p.vU)({
            invalid: {
                id: "citations.invalid",
                defaultMessage: "Invalid citation"
            },
            viewAnalysis: {
                id: "citations.viewAnalysis",
                defaultMessage: "View analysis"
            }
        })
    },
    93239: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return a
            }
        });
        var a = new (n(99304)).V
    },
    41402: function() {}
}]);
