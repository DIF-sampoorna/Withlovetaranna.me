(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function rw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var yg = { exports: {} },
  ia = {},
  vg = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = Symbol.for("react.element"),
  sw = Symbol.for("react.portal"),
  iw = Symbol.for("react.fragment"),
  ow = Symbol.for("react.strict_mode"),
  aw = Symbol.for("react.profiler"),
  lw = Symbol.for("react.provider"),
  uw = Symbol.for("react.context"),
  cw = Symbol.for("react.forward_ref"),
  dw = Symbol.for("react.suspense"),
  fw = Symbol.for("react.memo"),
  hw = Symbol.for("react.lazy"),
  jf = Symbol.iterator;
function pw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jf && e[jf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bg = Object.assign,
  Sg = {};
function Yr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sg),
    (this.updater = n || wg));
}
Yr.prototype.isReactComponent = {};
Yr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kg() {}
kg.prototype = Yr.prototype;
function fc(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Sg),
    (this.updater = n || wg));
}
var hc = (fc.prototype = new kg());
hc.constructor = fc;
bg(hc, Yr.prototype);
hc.isPureReactComponent = !0;
var Tf = Array.isArray,
  jg = Object.prototype.hasOwnProperty,
  pc = { current: null },
  Tg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ng(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jg.call(t, r) && !Tg.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: hi,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: pc.current,
  };
}
function mw(e, t) {
  return {
    $$typeof: hi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hi;
}
function gw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nf = /\/+/g;
function La(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gw("" + e.key)
    : t.toString(36);
}
function Zi(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hi:
          case sw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + La(o, 0) : r),
      Tf(s)
        ? ((n = ""),
          e != null && (n = e.replace(Nf, "$&/") + "/"),
          Zi(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (mc(s) &&
            (s = mw(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Nf, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Tf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + La(i, a);
      o += Zi(i, t, n, u, s);
    }
  else if (((u = pw(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done;)
      ((i = i.value), (u = r + La(i, a++)), (o += Zi(i, t, n, u, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Zi(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function xw(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  Ji = { transition: null },
  yw = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Ji,
    ReactCurrentOwner: pc,
  };
function Pg() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: Pi,
  forEach: function (e, t, n) {
    Pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
U.Component = Yr;
U.Fragment = iw;
U.Profiler = aw;
U.PureComponent = fc;
U.StrictMode = ow;
U.Suspense = dw;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yw;
U.act = Pg;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = bg({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = pc.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      jg.call(t, u) &&
        !Tg.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: hi, type: e.type, key: s, ref: i, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: uw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lw, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Ng;
U.createFactory = function (e) {
  var t = Ng.bind(null, e);
  return ((t.type = e), t);
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: cw, render: e };
};
U.isValidElement = mc;
U.lazy = function (e) {
  return { $$typeof: hw, _payload: { _status: -1, _result: e }, _init: xw };
};
U.memo = function (e, t) {
  return { $$typeof: fw, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Ji.transition;
  Ji.transition = {};
  try {
    e();
  } finally {
    Ji.transition = t;
  }
};
U.unstable_act = Pg;
U.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Be.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
U.useId = function () {
  return Be.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Be.current.useRef(e);
};
U.useState = function (e) {
  return Be.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Be.current.useTransition();
};
U.version = "18.3.1";
vg.exports = U;
var k = vg.exports;
const Cg = rw(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vw = k,
  ww = Symbol.for("react.element"),
  bw = Symbol.for("react.fragment"),
  Sw = Object.prototype.hasOwnProperty,
  kw = vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eg(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Sw.call(t, r) && !jw.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: ww,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: kw.current,
  };
}
ia.Fragment = bw;
ia.jsx = Eg;
ia.jsxs = Eg;
yg.exports = ia;
var l = yg.exports,
  Ag = { exports: {} },
  rt = {},
  Mg = { exports: {} },
  Dg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var $ = P.length;
    P.push(L);
    e: for (; 0 < $;) {
      var K = ($ - 1) >>> 1,
        E = P[K];
      if (0 < s(E, L)) ((P[K] = L), (P[$] = E), ($ = K));
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      $ = P.pop();
    if ($ !== L) {
      P[0] = $;
      e: for (var K = 0, E = P.length, D = E >>> 1; K < D;) {
        var B = 2 * (K + 1) - 1,
          me = P[B],
          G = B + 1,
          We = P[G];
        if (0 > s(me, $))
          G < E && 0 > s(We, me)
            ? ((P[K] = We), (P[G] = $), (K = G))
            : ((P[K] = me), (P[B] = $), (K = B));
        else if (G < E && 0 > s(We, $)) ((P[K] = We), (P[G] = $), (K = G));
        else break e;
      }
    }
    return L;
  }
  function s(P, L) {
    var $ = P.sortIndex - L.sortIndex;
    return $ !== 0 ? $ : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    x = !1,
    w = !1,
    v = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var L = n(c); L !== null;) {
      if (L.callback === null) r(c);
      else if (L.startTime <= P)
        (r(c), (L.sortIndex = L.expirationTime), t(u, L));
      else break;
      L = n(c);
    }
  }
  function b(P) {
    if (((v = !1), g(P), !w))
      if (n(u) !== null) ((w = !0), Ue(S));
      else {
        var L = n(c);
        L !== null && _(b, L.startTime - P);
      }
  }
  function S(P, L) {
    ((w = !1), v && ((v = !1), p(T), (T = -1)), (x = !0));
    var $ = h;
    try {
      for (
        g(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (P && !z()));
      ) {
        var K = f.callback;
        if (typeof K == "function") {
          ((f.callback = null), (h = f.priorityLevel));
          var E = K(f.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof E == "function" ? (f.callback = E) : f === n(u) && r(u),
            g(L));
        } else r(u);
        f = n(u);
      }
      if (f !== null) var D = !0;
      else {
        var B = n(c);
        (B !== null && _(b, B.startTime - L), (D = !1));
      }
      return D;
    } finally {
      ((f = null), (h = $), (x = !1));
    }
  }
  var j = !1,
    N = null,
    T = -1,
    R = 5,
    M = -1;
  function z() {
    return !(e.unstable_now() - M < R);
  }
  function ae() {
    if (N !== null) {
      var P = e.unstable_now();
      M = P;
      var L = !0;
      try {
        L = N(!0, P);
      } finally {
        L ? ve() : ((j = !1), (N = null));
      }
    } else j = !1;
  }
  var ve;
  if (typeof m == "function")
    ve = function () {
      m(ae);
    };
  else if (typeof MessageChannel < "u") {
    var ze = new MessageChannel(),
      Ce = ze.port2;
    ((ze.port1.onmessage = ae),
      (ve = function () {
        Ce.postMessage(null);
      }));
  } else
    ve = function () {
      y(ae, 0);
    };
  function Ue(P) {
    ((N = P), j || ((j = !0), ve()));
  }
  function _(P, L) {
    T = y(function () {
      P(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Ue(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var $ = h;
      h = L;
      try {
        return P();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var $ = h;
      h = P;
      try {
        return L();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, $) {
      var K = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? K + $ : K))
          : ($ = K),
        P)
      ) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return (
        (E = $ + E),
        (P = {
          id: d++,
          callback: L,
          priorityLevel: P,
          startTime: $,
          expirationTime: E,
          sortIndex: -1,
        }),
        $ > K
          ? ((P.sortIndex = $),
            t(c, P),
            n(u) === null &&
              P === n(c) &&
              (v ? (p(T), (T = -1)) : (v = !0), _(b, $ - K)))
          : ((P.sortIndex = E), t(u, P), w || x || ((w = !0), Ue(S))),
        P
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (P) {
      var L = h;
      return function () {
        var $ = h;
        h = L;
        try {
          return P.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    }));
})(Dg);
Mg.exports = Dg;
var Tw = Mg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nw = k,
  et = Tw;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Rg = new Set(),
  _s = {};
function er(e, t) {
  (Lr(e, t), Lr(e + "Capture", t));
}
function Lr(e, t) {
  for (_s[e] = t, e = 0; e < t.length; e++) Rg.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fl = Object.prototype.hasOwnProperty,
  Pw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pf = {},
  Cf = {};
function Cw(e) {
  return Fl.call(Cf, e)
    ? !0
    : Fl.call(Pf, e)
      ? !1
      : Pw.test(e)
        ? (Cf[e] = !0)
        : ((Pf[e] = !0), !1);
}
function Ew(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Aw(e, t, n, r) {
  if (t === null || typeof t > "u" || Ew(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gc = /[\-:]([a-z])/g;
function xc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gc, xc);
    Pe[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(gc, xc);
    Pe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(gc, xc);
  Pe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yc(e, t, n, r) {
  var s = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Aw(t, n, s, r) && (n = null),
    r || s === null
      ? Cw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ci = Symbol.for("react.element"),
  or = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  vc = Symbol.for("react.strict_mode"),
  Ol = Symbol.for("react.profiler"),
  Vg = Symbol.for("react.provider"),
  Lg = Symbol.for("react.context"),
  wc = Symbol.for("react.forward_ref"),
  Bl = Symbol.for("react.suspense"),
  _l = Symbol.for("react.suspense_list"),
  bc = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  $g = Symbol.for("react.offscreen"),
  Ef = Symbol.iterator;
function ts(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ef && e[Ef]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  $a;
function fs(e) {
  if ($a === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $a = (t && t[1]) || "";
    }
  return (
    `
` +
    $a +
    e
  );
}
var Ia = !1;
function Fa(e, t) {
  if (!e || Ia) return "";
  Ia = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var u =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Ia = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function Mw(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Fa(e.type, !1)), e);
    case 11:
      return ((e = Fa(e.type.render, !1)), e);
    case 1:
      return ((e = Fa(e.type, !0)), e);
    default:
      return "";
  }
}
function zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case or:
      return "Portal";
    case Ol:
      return "Profiler";
    case vc:
      return "StrictMode";
    case Bl:
      return "Suspense";
    case _l:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lg:
        return (e.displayName || "Context") + ".Consumer";
      case Vg:
        return (e._context.displayName || "Context") + ".Provider";
      case wc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bc:
        return (
          (t = e.displayName || null),
          t !== null ? t : zl(e.type) || "Memo"
        );
      case on:
        ((t = e._payload), (e = e._init));
        try {
          return zl(e(t));
        } catch {}
    }
  return null;
}
function Dw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zl(t);
    case 8:
      return t === vc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ig(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rw(e) {
  var t = Ig(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ei(e) {
  e._valueTracker || (e._valueTracker = Rw(e));
}
function Fg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ig(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ul(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Og(e, t) {
  ((t = t.checked), t != null && yc(e, "checked", t, !1));
}
function Wl(e, t) {
  Og(e, t);
  var n = wn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hl(e, t.type, wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Mf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Hl(e, t, n) {
  (t !== "number" || wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hs = Array.isArray;
function Cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + wn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Df(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (hs(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: wn(n) };
}
function Bg(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Rf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _g(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _g(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ai,
  zg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ai = Ai || document.createElement("div"),
          Ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ai.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function zs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ss).forEach(function (e) {
  Vw.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ss[t] = Ss[e]));
  });
});
function Ug(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ss.hasOwnProperty(e) && Ss[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Ug(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Lw = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Kl(e, t) {
  if (t) {
    if (Lw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Xl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ql = null;
function Sc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ql = null,
  Er = null,
  Ar = null;
function Vf(e) {
  if ((e = gi(e))) {
    if (typeof Ql != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = ca(t)), Ql(e.stateNode, e.type, t));
  }
}
function Hg(e) {
  Er ? (Ar ? Ar.push(e) : (Ar = [e])) : (Er = e);
}
function Gg() {
  if (Er) {
    var e = Er,
      t = Ar;
    if (((Ar = Er = null), Vf(e), t)) for (e = 0; e < t.length; e++) Vf(t[e]);
  }
}
function Yg(e, t) {
  return e(t);
}
function Kg() {}
var Oa = !1;
function Xg(e, t, n) {
  if (Oa) return e(t, n);
  Oa = !0;
  try {
    return Yg(e, t, n);
  } finally {
    ((Oa = !1), (Er !== null || Ar !== null) && (Kg(), Gg()));
  }
}
function Us(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ca(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Zl = !1;
if (Gt)
  try {
    var ns = {};
    (Object.defineProperty(ns, "passive", {
      get: function () {
        Zl = !0;
      },
    }),
      window.addEventListener("test", ns, ns),
      window.removeEventListener("test", ns, ns));
  } catch {
    Zl = !1;
  }
function $w(e, t, n, r, s, i, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ks = !1,
  bo = null,
  So = !1,
  Jl = null,
  Iw = {
    onError: function (e) {
      ((ks = !0), (bo = e));
    },
  };
function Fw(e, t, n, r, s, i, o, a, u) {
  ((ks = !1), (bo = null), $w.apply(Iw, arguments));
}
function Ow(e, t, n, r, s, i, o, a, u) {
  if ((Fw.apply(this, arguments), ks)) {
    if (ks) {
      var c = bo;
      ((ks = !1), (bo = null));
    } else throw Error(C(198));
    So || ((So = !0), (Jl = c));
  }
}
function tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lf(e) {
  if (tr(e) !== e) throw Error(C(188));
}
function Bw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tr(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i;) {
        if (i === n) return (Lf(s), e);
        if (i === r) return (Lf(s), t);
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var o = !1, a = s.child; a;) {
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a;) {
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Qg(e) {
  return ((e = Bw(e)), e !== null ? Zg(e) : null);
}
function Zg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Zg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jg = et.unstable_scheduleCallback,
  $f = et.unstable_cancelCallback,
  _w = et.unstable_shouldYield,
  zw = et.unstable_requestPaint,
  he = et.unstable_now,
  Uw = et.unstable_getCurrentPriorityLevel,
  kc = et.unstable_ImmediatePriority,
  e0 = et.unstable_UserBlockingPriority,
  ko = et.unstable_NormalPriority,
  Ww = et.unstable_LowPriority,
  t0 = et.unstable_IdlePriority,
  oa = null,
  Et = null;
function Hw(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var bt = Math.clz32 ? Math.clz32 : Kw,
  Gw = Math.log,
  Yw = Math.LN2;
function Kw(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Gw(e) / Yw) | 0)) | 0);
}
var Mi = 64,
  Di = 4194304;
function ps(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function jo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = ps(a)) : ((i &= o), i !== 0 && (r = ps(i)));
  } else ((o = n & ~s), o !== 0 ? (r = ps(o)) : i !== 0 && (r = ps(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - bt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Xw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - bt(i),
      a = 1 << o,
      u = s[o];
    (u === -1
      ? (!(a & n) || a & r) && (s[o] = Xw(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function eu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function n0() {
  var e = Mi;
  return ((Mi <<= 1), !(Mi & 4194240) && (Mi = 64), e);
}
function Ba(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - bt(t)),
    (e[t] = n));
}
function Qw(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - bt(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function jc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - bt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var Y = 0;
function r0(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var s0,
  Tc,
  i0,
  o0,
  a0,
  tu = !1,
  Ri = [],
  fn = null,
  hn = null,
  pn = null,
  Ws = new Map(),
  Hs = new Map(),
  ln = [],
  Zw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function If(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ws.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hs.delete(t.pointerId);
  }
}
function rs(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = gi(t)), t !== null && Tc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Jw(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((fn = rs(fn, e, t, n, r, s)), !0);
    case "dragenter":
      return ((hn = rs(hn, e, t, n, r, s)), !0);
    case "mouseover":
      return ((pn = rs(pn, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Ws.set(i, rs(Ws.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Hs.set(i, rs(Hs.get(i) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function l0(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qg(n)), t !== null)) {
          ((e.blockedOn = t),
            a0(e.priority, function () {
              i0(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ql = r), n.target.dispatchEvent(r), (ql = null));
    } else return ((t = gi(n)), t !== null && Tc(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ff(e, t, n) {
  eo(e) && n.delete(t);
}
function eb() {
  ((tu = !1),
    fn !== null && eo(fn) && (fn = null),
    hn !== null && eo(hn) && (hn = null),
    pn !== null && eo(pn) && (pn = null),
    Ws.forEach(Ff),
    Hs.forEach(Ff));
}
function ss(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tu ||
      ((tu = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, eb)));
}
function Gs(e) {
  function t(s) {
    return ss(s, e);
  }
  if (0 < Ri.length) {
    ss(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && ss(fn, e),
      hn !== null && ss(hn, e),
      pn !== null && ss(pn, e),
      Ws.forEach(t),
      Hs.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    ((r = ln[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null);)
    (l0(n), n.blockedOn === null && ln.shift());
}
var Mr = Qt.ReactCurrentBatchConfig,
  To = !0;
function tb(e, t, n, r) {
  var s = Y,
    i = Mr.transition;
  Mr.transition = null;
  try {
    ((Y = 1), Nc(e, t, n, r));
  } finally {
    ((Y = s), (Mr.transition = i));
  }
}
function nb(e, t, n, r) {
  var s = Y,
    i = Mr.transition;
  Mr.transition = null;
  try {
    ((Y = 4), Nc(e, t, n, r));
  } finally {
    ((Y = s), (Mr.transition = i));
  }
}
function Nc(e, t, n, r) {
  if (To) {
    var s = nu(e, t, n, r);
    if (s === null) (qa(e, t, r, No, n), If(e, r));
    else if (Jw(s, e, t, n, r)) r.stopPropagation();
    else if ((If(e, r), t & 4 && -1 < Zw.indexOf(e))) {
      for (; s !== null;) {
        var i = gi(s);
        if (
          (i !== null && s0(i),
          (i = nu(e, t, n, r)),
          i === null && qa(e, t, r, No, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else qa(e, t, r, null, n);
  }
}
var No = null;
function nu(e, t, n, r) {
  if (((No = null), (e = Sc(r)), (e = On(e)), e !== null))
    if (((t = tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((No = e), null);
}
function u0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Uw()) {
        case kc:
          return 1;
        case e0:
          return 4;
        case ko:
        case Ww:
          return 16;
        case t0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  Pc = null,
  to = null;
function c0() {
  if (to) return to;
  var e,
    t = Pc,
    n = t.length,
    r,
    s = "value" in cn ? cn.value : cn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (to = s.slice(e, 1 < r ? 1 - r : void 0));
}
function no(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vi() {
  return !0;
}
function Of() {
  return !1;
}
function st(e) {
  function t(n, r, s, i, o) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Vi
        : Of),
      (this.isPropagationStopped = Of),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vi));
      },
      persist: function () {},
      isPersistent: Vi,
    }),
    t
  );
}
var Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cc = st(Kr),
  mi = oe({}, Kr, { view: 0, detail: 0 }),
  rb = st(mi),
  _a,
  za,
  is,
  aa = oe({}, mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ec,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== is &&
            (is && e.type === "mousemove"
              ? ((_a = e.screenX - is.screenX), (za = e.screenY - is.screenY))
              : (za = _a = 0),
            (is = e)),
          _a);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : za;
    },
  }),
  Bf = st(aa),
  sb = oe({}, aa, { dataTransfer: 0 }),
  ib = st(sb),
  ob = oe({}, mi, { relatedTarget: 0 }),
  Ua = st(ob),
  ab = oe({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lb = st(ab),
  ub = oe({}, Kr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cb = st(ub),
  db = oe({}, Kr, { data: 0 }),
  _f = st(db),
  fb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pb[e]) ? !!t[e] : !1;
}
function Ec() {
  return mb;
}
var gb = oe({}, mi, {
    key: function (e) {
      if (e.key) {
        var t = fb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = no(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? hb[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ec,
    charCode: function (e) {
      return e.type === "keypress" ? no(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? no(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  xb = st(gb),
  yb = oe({}, aa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zf = st(yb),
  vb = oe({}, mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec,
  }),
  wb = st(vb),
  bb = oe({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sb = st(bb),
  kb = oe({}, aa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jb = st(kb),
  Tb = [9, 13, 27, 32],
  Ac = Gt && "CompositionEvent" in window,
  js = null;
Gt && "documentMode" in document && (js = document.documentMode);
var Nb = Gt && "TextEvent" in window && !js,
  d0 = Gt && (!Ac || (js && 8 < js && 11 >= js)),
  Uf = " ",
  Wf = !1;
function f0(e, t) {
  switch (e) {
    case "keyup":
      return Tb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function h0(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var lr = !1;
function Pb(e, t) {
  switch (e) {
    case "compositionend":
      return h0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wf = !0), Uf);
    case "textInput":
      return ((e = t.data), e === Uf && Wf ? null : e);
    default:
      return null;
  }
}
function Cb(e, t) {
  if (lr)
    return e === "compositionend" || (!Ac && f0(e, t))
      ? ((e = c0()), (to = Pc = cn = null), (lr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return d0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Eb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Eb[e.type] : t === "textarea";
}
function p0(e, t, n, r) {
  (Hg(r),
    (t = Po(t, "onChange")),
    0 < t.length &&
      ((n = new Cc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ts = null,
  Ys = null;
function Ab(e) {
  T0(e, 0);
}
function la(e) {
  var t = dr(e);
  if (Fg(t)) return e;
}
function Mb(e, t) {
  if (e === "change") return t;
}
var m0 = !1;
if (Gt) {
  var Wa;
  if (Gt) {
    var Ha = "oninput" in document;
    if (!Ha) {
      var Gf = document.createElement("div");
      (Gf.setAttribute("oninput", "return;"),
        (Ha = typeof Gf.oninput == "function"));
    }
    Wa = Ha;
  } else Wa = !1;
  m0 = Wa && (!document.documentMode || 9 < document.documentMode);
}
function Yf() {
  Ts && (Ts.detachEvent("onpropertychange", g0), (Ys = Ts = null));
}
function g0(e) {
  if (e.propertyName === "value" && la(Ys)) {
    var t = [];
    (p0(t, Ys, e, Sc(e)), Xg(Ab, t));
  }
}
function Db(e, t, n) {
  e === "focusin"
    ? (Yf(), (Ts = t), (Ys = n), Ts.attachEvent("onpropertychange", g0))
    : e === "focusout" && Yf();
}
function Rb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return la(Ys);
}
function Vb(e, t) {
  if (e === "click") return la(t);
}
function Lb(e, t) {
  if (e === "input" || e === "change") return la(t);
}
function $b(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : $b;
function Ks(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Fl.call(t, s) || !kt(e[s], t[s])) return !1;
  }
  return !0;
}
function Kf(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Xf(e, t) {
  var n = Kf(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kf(n);
  }
}
function x0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? x0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function y0() {
  for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wo(e.document);
  }
  return t;
}
function Mc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ib(e) {
  var t = y0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    x0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Xf(n, i)));
        var o = Xf(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Fb = Gt && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  ru = null,
  Ns = null,
  su = !1;
function qf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  su ||
    ur == null ||
    ur !== wo(r) ||
    ((r = ur),
    "selectionStart" in r && Mc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ns && Ks(Ns, r)) ||
      ((Ns = r),
      (r = Po(ru, "onSelect")),
      0 < r.length &&
        ((t = new Cc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ur))));
}
function Li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: Li("Animation", "AnimationEnd"),
    animationiteration: Li("Animation", "AnimationIteration"),
    animationstart: Li("Animation", "AnimationStart"),
    transitionend: Li("Transition", "TransitionEnd"),
  },
  Ga = {},
  v0 = {};
Gt &&
  ((v0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function ua(e) {
  if (Ga[e]) return Ga[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in v0) return (Ga[e] = t[n]);
  return e;
}
var w0 = ua("animationend"),
  b0 = ua("animationiteration"),
  S0 = ua("animationstart"),
  k0 = ua("transitionend"),
  j0 = new Map(),
  Qf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Tn(e, t) {
  (j0.set(e, t), er(t, [e]));
}
for (var Ya = 0; Ya < Qf.length; Ya++) {
  var Ka = Qf[Ya],
    Ob = Ka.toLowerCase(),
    Bb = Ka[0].toUpperCase() + Ka.slice(1);
  Tn(Ob, "on" + Bb);
}
Tn(w0, "onAnimationEnd");
Tn(b0, "onAnimationIteration");
Tn(S0, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(k0, "onTransitionEnd");
Lr("onMouseEnter", ["mouseout", "mouseover"]);
Lr("onMouseLeave", ["mouseout", "mouseover"]);
Lr("onPointerEnter", ["pointerout", "pointerover"]);
Lr("onPointerLeave", ["pointerout", "pointerover"]);
er(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
er(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
er(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
er(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  _b = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function Zf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Ow(r, t, void 0, e), (e.currentTarget = null));
}
function T0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== i && s.isPropagationStopped())) break e;
          (Zf(s, a, c), (i = u));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== i && s.isPropagationStopped())
          )
            break e;
          (Zf(s, a, c), (i = u));
        }
    }
  }
  if (So) throw ((e = Jl), (So = !1), (Jl = null), e);
}
function Q(e, t) {
  var n = t[uu];
  n === void 0 && (n = t[uu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (N0(t, e, 2, !1), n.add(r));
}
function Xa(e, t, n) {
  var r = 0;
  (t && (r |= 4), N0(n, e, r, t));
}
var $i = "_reactListening" + Math.random().toString(36).slice(2);
function Xs(e) {
  if (!e[$i]) {
    ((e[$i] = !0),
      Rg.forEach(function (n) {
        n !== "selectionchange" && (_b.has(n) || Xa(n, !1, e), Xa(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$i] || ((t[$i] = !0), Xa("selectionchange", !1, t));
  }
}
function N0(e, t, n, r) {
  switch (u0(t)) {
    case 1:
      var s = tb;
      break;
    case 4:
      s = nb;
      break;
    default:
      s = Nc;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function qa(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null;) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null;) {
          if (((o = On(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xg(function () {
    var c = i,
      d = Sc(n),
      f = [];
    e: {
      var h = j0.get(e);
      if (h !== void 0) {
        var x = Cc,
          w = e;
        switch (e) {
          case "keypress":
            if (no(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = xb;
            break;
          case "focusin":
            ((w = "focus"), (x = Ua));
            break;
          case "focusout":
            ((w = "blur"), (x = Ua));
            break;
          case "beforeblur":
          case "afterblur":
            x = Ua;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ib;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = wb;
            break;
          case w0:
          case b0:
          case S0:
            x = lb;
            break;
          case k0:
            x = Sb;
            break;
          case "scroll":
            x = rb;
            break;
          case "wheel":
            x = jb;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = cb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = zf;
        }
        var v = (t & 4) !== 0,
          y = !v && e === "scroll",
          p = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var m = c, g; m !== null;) {
          g = m;
          var b = g.stateNode;
          if (
            (g.tag === 5 &&
              b !== null &&
              ((g = b),
              p !== null && ((b = Us(m, p)), b != null && v.push(qs(m, b, g)))),
            y)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((h = new x(h, w, null, n, d)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ql &&
            (w = n.relatedTarget || n.fromElement) &&
            (On(w) || w[Yt]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? On(w) : null),
              w !== null &&
                ((y = tr(w)), w !== y || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((v = Bf),
            (b = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = zf),
              (b = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (y = x == null ? h : dr(x)),
            (g = w == null ? h : dr(w)),
            (h = new v(b, m + "leave", x, n, d)),
            (h.target = y),
            (h.relatedTarget = g),
            (b = null),
            On(d) === c &&
              ((v = new v(p, m + "enter", w, n, d)),
              (v.target = g),
              (v.relatedTarget = y),
              (b = v)),
            (y = b),
            x && w)
          )
            t: {
              for (v = x, p = w, m = 0, g = v; g; g = ir(g)) m++;
              for (g = 0, b = p; b; b = ir(b)) g++;
              for (; 0 < m - g;) ((v = ir(v)), m--);
              for (; 0 < g - m;) ((p = ir(p)), g--);
              for (; m--;) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                ((v = ir(v)), (p = ir(p)));
              }
              v = null;
            }
          else v = null;
          (x !== null && Jf(f, h, x, v, !1),
            w !== null && y !== null && Jf(f, y, w, v, !0));
        }
      }
      e: {
        if (
          ((h = c ? dr(c) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var S = Mb;
        else if (Hf(h))
          if (m0) S = Lb;
          else {
            S = Rb;
            var j = Db;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Vb);
        if (S && (S = S(e, c))) {
          p0(f, S, n, d);
          break e;
        }
        (j && j(e, h, c),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Hl(h, "number", h.value));
      }
      switch (((j = c ? dr(c) : window), e)) {
        case "focusin":
          (Hf(j) || j.contentEditable === "true") &&
            ((ur = j), (ru = c), (Ns = null));
          break;
        case "focusout":
          Ns = ru = ur = null;
          break;
        case "mousedown":
          su = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((su = !1), qf(f, n, d));
          break;
        case "selectionchange":
          if (Fb) break;
        case "keydown":
        case "keyup":
          qf(f, n, d);
      }
      var N;
      if (Ac)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        lr
          ? f0(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (d0 &&
          n.locale !== "ko" &&
          (lr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && lr && (N = c0())
            : ((cn = d),
              (Pc = "value" in cn ? cn.value : cn.textContent),
              (lr = !0))),
        (j = Po(c, T)),
        0 < j.length &&
          ((T = new _f(T, e, null, n, d)),
          f.push({ event: T, listeners: j }),
          N ? (T.data = N) : ((N = h0(n)), N !== null && (T.data = N)))),
        (N = Nb ? Pb(e, n) : Cb(e, n)) &&
          ((c = Po(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new _f("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = N))));
    }
    T0(f, t);
  });
}
function qs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Po(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Us(e, n)),
      i != null && r.unshift(qs(e, i, s)),
      (i = Us(e, t)),
      i != null && r.push(qs(e, i, s))),
      (e = e.return));
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jf(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r;) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = Us(n, i)), u != null && o.unshift(qs(n, u, a)))
        : s || ((u = Us(n, i)), u != null && o.push(qs(n, u, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var zb = /\r\n?/g,
  Ub = /\u0000|\uFFFD/g;
function eh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zb,
      `
`,
    )
    .replace(Ub, "");
}
function Ii(e, t, n) {
  if (((t = eh(t)), eh(e) !== t && n)) throw Error(C(425));
}
function Co() {}
var iu = null,
  ou = null;
function au(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var lu = typeof setTimeout == "function" ? setTimeout : void 0,
  Wb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  th = typeof Promise == "function" ? Promise : void 0,
  Hb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof th < "u"
        ? function (e) {
            return th.resolve(null).then(e).catch(Gb);
          }
        : lu;
function Gb(e) {
  setTimeout(function () {
    throw e;
  });
}
function Qa(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Gs(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Gs(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nh(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xr = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Xr,
  Qs = "__reactProps$" + Xr,
  Yt = "__reactContainer$" + Xr,
  uu = "__reactEvents$" + Xr,
  Yb = "__reactListeners$" + Xr,
  Kb = "__reactHandles$" + Xr;
function On(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Yt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nh(e); e !== null;) {
          if ((n = e[Pt])) return n;
          e = nh(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function gi(e) {
  return (
    (e = e[Pt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function ca(e) {
  return e[Qs] || null;
}
var cu = [],
  fr = -1;
function Nn(e) {
  return { current: e };
}
function Z(e) {
  0 > fr || ((e.current = cu[fr]), (cu[fr] = null), fr--);
}
function q(e, t) {
  (fr++, (cu[fr] = e.current), (e.current = t));
}
var bn = {},
  $e = Nn(bn),
  Ye = Nn(!1),
  Kn = bn;
function $r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Ke(e) {
  return ((e = e.childContextTypes), e != null);
}
function Eo() {
  (Z(Ye), Z($e));
}
function rh(e, t, n) {
  if ($e.current !== bn) throw Error(C(168));
  (q($e, t), q(Ye, n));
}
function P0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(C(108, Dw(e) || "Unknown", s));
  return oe({}, n, r);
}
function Ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bn),
    (Kn = $e.current),
    q($e, e),
    q(Ye, Ye.current),
    !0
  );
}
function sh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = P0(e, t, Kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Ye),
      Z($e),
      q($e, e))
    : Z(Ye),
    q(Ye, n));
}
var Ft = null,
  da = !1,
  Za = !1;
function C0(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Xb(e) {
  ((da = !0), C0(e));
}
function Pn() {
  if (!Za && Ft !== null) {
    Za = !0;
    var e = 0,
      t = Y;
    try {
      var n = Ft;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ft = null), (da = !1));
    } catch (s) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), Jg(kc, Pn), s);
    } finally {
      ((Y = t), (Za = !1));
    }
  }
  return null;
}
var hr = [],
  pr = 0,
  Mo = null,
  Do = 0,
  ut = [],
  ct = 0,
  Xn = null,
  Ot = 1,
  Bt = "";
function Rn(e, t) {
  ((hr[pr++] = Do), (hr[pr++] = Mo), (Mo = e), (Do = t));
}
function E0(e, t, n) {
  ((ut[ct++] = Ot), (ut[ct++] = Bt), (ut[ct++] = Xn), (Xn = e));
  var r = Ot;
  e = Bt;
  var s = 32 - bt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - bt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Ot = (1 << (32 - bt(t) + s)) | (n << s) | r),
      (Bt = i + e));
  } else ((Ot = (1 << i) | (n << s) | r), (Bt = e));
}
function Dc(e) {
  e.return !== null && (Rn(e, 1), E0(e, 1, 0));
}
function Rc(e) {
  for (; e === Mo;)
    ((Mo = hr[--pr]), (hr[pr] = null), (Do = hr[--pr]), (hr[pr] = null));
  for (; e === Xn;)
    ((Xn = ut[--ct]),
      (ut[ct] = null),
      (Bt = ut[--ct]),
      (ut[ct] = null),
      (Ot = ut[--ct]),
      (ut[ct] = null));
}
var Ze = null,
  Qe = null,
  ee = !1,
  wt = null;
function A0(e, t) {
  var n = dt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ih(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Qe = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xn !== null ? { id: Ot, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function du(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fu(e) {
  if (ee) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!ih(e, t)) {
        if (du(e)) throw Error(C(418));
        t = mn(n.nextSibling);
        var r = Ze;
        t && ih(e, t)
          ? A0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ze = e));
      }
    } else {
      if (du(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ze = e));
    }
  }
}
function oh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  Ze = e;
}
function Fi(e) {
  if (e !== Ze) return !1;
  if (!ee) return (oh(e), (ee = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !au(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (du(e)) throw (M0(), Error(C(418)));
    for (; t;) (A0(e, t), (t = mn(t.nextSibling)));
  }
  if ((oh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ze ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function M0() {
  for (var e = Qe; e;) e = mn(e.nextSibling);
}
function Ir() {
  ((Qe = Ze = null), (ee = !1));
}
function Vc(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var qb = Qt.ReactCurrentBatchConfig;
function os(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Oi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function ah(e) {
  var t = e._init;
  return t(e._payload);
}
function D0(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null;) (t(p, m), (m = m.sibling));
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null;)
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function s(p, m) {
    return ((p = vn(p, m)), (p.index = 0), (p.sibling = null), p);
  }
  function i(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, m, g, b) {
    return m === null || m.tag !== 6
      ? ((m = il(g, p.mode, b)), (m.return = p), m)
      : ((m = s(m, g)), (m.return = p), m);
  }
  function u(p, m, g, b) {
    var S = g.type;
    return S === ar
      ? d(p, m, g.props.children, b, g.key)
      : m !== null &&
          (m.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === on &&
              ah(S) === m.type))
        ? ((b = s(m, g.props)), (b.ref = os(p, m, g)), (b.return = p), b)
        : ((b = uo(g.type, g.key, g.props, null, p.mode, b)),
          (b.ref = os(p, m, g)),
          (b.return = p),
          b);
  }
  function c(p, m, g, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = ol(g, p.mode, b)), (m.return = p), m)
      : ((m = s(m, g.children || [])), (m.return = p), m);
  }
  function d(p, m, g, b, S) {
    return m === null || m.tag !== 7
      ? ((m = Hn(g, p.mode, b, S)), (m.return = p), m)
      : ((m = s(m, g)), (m.return = p), m);
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = il("" + m, p.mode, g)), (m.return = p), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ci:
          return (
            (g = uo(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = os(p, null, m)),
            (g.return = p),
            g
          );
        case or:
          return ((m = ol(m, p.mode, g)), (m.return = p), m);
        case on:
          var b = m._init;
          return f(p, b(m._payload), g);
      }
      if (hs(m) || ts(m))
        return ((m = Hn(m, p.mode, g, null)), (m.return = p), m);
      Oi(p, m);
    }
    return null;
  }
  function h(p, m, g, b) {
    var S = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : a(p, m, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ci:
          return g.key === S ? u(p, m, g, b) : null;
        case or:
          return g.key === S ? c(p, m, g, b) : null;
        case on:
          return ((S = g._init), h(p, m, S(g._payload), b));
      }
      if (hs(g) || ts(g)) return S !== null ? null : d(p, m, g, b, null);
      Oi(p, g);
    }
    return null;
  }
  function x(p, m, g, b, S) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return ((p = p.get(g) || null), a(m, p, "" + b, S));
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ci:
          return (
            (p = p.get(b.key === null ? g : b.key) || null),
            u(m, p, b, S)
          );
        case or:
          return (
            (p = p.get(b.key === null ? g : b.key) || null),
            c(m, p, b, S)
          );
        case on:
          var j = b._init;
          return x(p, m, g, j(b._payload), S);
      }
      if (hs(b) || ts(b)) return ((p = p.get(g) || null), d(m, p, b, S, null));
      Oi(m, b);
    }
    return null;
  }
  function w(p, m, g, b) {
    for (
      var S = null, j = null, N = m, T = (m = 0), R = null;
      N !== null && T < g.length;
      T++
    ) {
      N.index > T ? ((R = N), (N = null)) : (R = N.sibling);
      var M = h(p, N, g[T], b);
      if (M === null) {
        N === null && (N = R);
        break;
      }
      (e && N && M.alternate === null && t(p, N),
        (m = i(M, m, T)),
        j === null ? (S = M) : (j.sibling = M),
        (j = M),
        (N = R));
    }
    if (T === g.length) return (n(p, N), ee && Rn(p, T), S);
    if (N === null) {
      for (; T < g.length; T++)
        ((N = f(p, g[T], b)),
          N !== null &&
            ((m = i(N, m, T)),
            j === null ? (S = N) : (j.sibling = N),
            (j = N)));
      return (ee && Rn(p, T), S);
    }
    for (N = r(p, N); T < g.length; T++)
      ((R = x(N, p, T, g[T], b)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? T : R.key),
          (m = i(R, m, T)),
          j === null ? (S = R) : (j.sibling = R),
          (j = R)));
    return (
      e &&
        N.forEach(function (z) {
          return t(p, z);
        }),
      ee && Rn(p, T),
      S
    );
  }
  function v(p, m, g, b) {
    var S = ts(g);
    if (typeof S != "function") throw Error(C(150));
    if (((g = S.call(g)), g == null)) throw Error(C(151));
    for (
      var j = (S = null), N = m, T = (m = 0), R = null, M = g.next();
      N !== null && !M.done;
      T++, M = g.next()
    ) {
      N.index > T ? ((R = N), (N = null)) : (R = N.sibling);
      var z = h(p, N, M.value, b);
      if (z === null) {
        N === null && (N = R);
        break;
      }
      (e && N && z.alternate === null && t(p, N),
        (m = i(z, m, T)),
        j === null ? (S = z) : (j.sibling = z),
        (j = z),
        (N = R));
    }
    if (M.done) return (n(p, N), ee && Rn(p, T), S);
    if (N === null) {
      for (; !M.done; T++, M = g.next())
        ((M = f(p, M.value, b)),
          M !== null &&
            ((m = i(M, m, T)),
            j === null ? (S = M) : (j.sibling = M),
            (j = M)));
      return (ee && Rn(p, T), S);
    }
    for (N = r(p, N); !M.done; T++, M = g.next())
      ((M = x(N, p, T, M.value, b)),
        M !== null &&
          (e && M.alternate !== null && N.delete(M.key === null ? T : M.key),
          (m = i(M, m, T)),
          j === null ? (S = M) : (j.sibling = M),
          (j = M)));
    return (
      e &&
        N.forEach(function (ae) {
          return t(p, ae);
        }),
      ee && Rn(p, T),
      S
    );
  }
  function y(p, m, g, b) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === ar &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ci:
          e: {
            for (var S = g.key, j = m; j !== null;) {
              if (j.key === S) {
                if (((S = g.type), S === ar)) {
                  if (j.tag === 7) {
                    (n(p, j.sibling),
                      (m = s(j, g.props.children)),
                      (m.return = p),
                      (p = m));
                    break e;
                  }
                } else if (
                  j.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === on &&
                    ah(S) === j.type)
                ) {
                  (n(p, j.sibling),
                    (m = s(j, g.props)),
                    (m.ref = os(p, j, g)),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, j);
                break;
              } else t(p, j);
              j = j.sibling;
            }
            g.type === ar
              ? ((m = Hn(g.props.children, p.mode, b, g.key)),
                (m.return = p),
                (p = m))
              : ((b = uo(g.type, g.key, g.props, null, p.mode, b)),
                (b.ref = os(p, m, g)),
                (b.return = p),
                (p = b));
          }
          return o(p);
        case or:
          e: {
            for (j = g.key; m !== null;) {
              if (m.key === j)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  (n(p, m.sibling),
                    (m = s(m, g.children || [])),
                    (m.return = p),
                    (p = m));
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            ((m = ol(g, p.mode, b)), (m.return = p), (p = m));
          }
          return o(p);
        case on:
          return ((j = g._init), y(p, m, j(g._payload), b));
      }
      if (hs(g)) return w(p, m, g, b);
      if (ts(g)) return v(p, m, g, b);
      Oi(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = s(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = il(g, p.mode, b)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return y;
}
var Fr = D0(!0),
  R0 = D0(!1),
  Ro = Nn(null),
  Vo = null,
  mr = null,
  Lc = null;
function $c() {
  Lc = mr = Vo = null;
}
function Ic(e) {
  var t = Ro.current;
  (Z(Ro), (e._currentValue = t));
}
function hu(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dr(e, t) {
  ((Vo = e),
    (Lc = mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null)));
}
function ht(e) {
  var t = e._currentValue;
  if (Lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
      if (Vo === null) throw Error(C(308));
      ((mr = e), (Vo.dependencies = { lanes: 0, firstContext: e }));
    } else mr = mr.next = e;
  return t;
}
var Bn = null;
function Fc(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function V0(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Fc(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function Oc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function L0(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Fc(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function ro(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n));
  }
}
function lh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Lo(e, t, n, r) {
  var s = e.updateQueue;
  an = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), o === null ? (i = c) : (o.next = c), (o = u));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = s.baseState;
    ((o = 0), (d = c = u = null), (a = i));
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((h = t), (x = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                f = w.call(x, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (h = typeof w == "function" ? w.call(x, f, h) : w),
                h == null)
              )
                break e;
              f = oe({}, f, h);
              break e;
            case 2:
              an = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        ((x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = x), (u = f)) : (d = d.next = x),
          (o |= h));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (s.baseState = u),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Qn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function uh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(C(191, s));
        s.call(r);
      }
    }
}
var xi = {},
  At = Nn(xi),
  Zs = Nn(xi),
  Js = Nn(xi);
function _n(e) {
  if (e === xi) throw Error(C(174));
  return e;
}
function Bc(e, t) {
  switch ((q(Js, t), q(Zs, e), q(At, xi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yl(t, e)));
  }
  (Z(At), q(At, t));
}
function Or() {
  (Z(At), Z(Zs), Z(Js));
}
function $0(e) {
  _n(Js.current);
  var t = _n(At.current),
    n = Yl(t, e.type);
  t !== n && (q(Zs, e), q(At, n));
}
function _c(e) {
  Zs.current === e && (Z(At), Z(Zs));
}
var ne = Nn(0);
function $o(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Ja = [];
function zc() {
  for (var e = 0; e < Ja.length; e++)
    Ja[e]._workInProgressVersionPrimary = null;
  Ja.length = 0;
}
var so = Qt.ReactCurrentDispatcher,
  el = Qt.ReactCurrentBatchConfig,
  qn = 0,
  ie = null,
  xe = null,
  Se = null,
  Io = !1,
  Ps = !1,
  ei = 0,
  Qb = 0;
function Ee() {
  throw Error(C(321));
}
function Uc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Wc(e, t, n, r, s, i) {
  if (
    ((qn = i),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (so.current = e === null || e.memoizedState === null ? tS : nS),
    (e = n(r, s)),
    Ps)
  ) {
    i = 0;
    do {
      if (((Ps = !1), (ei = 0), 25 <= i)) throw Error(C(301));
      ((i += 1),
        (Se = xe = null),
        (t.updateQueue = null),
        (so.current = rS),
        (e = n(r, s)));
    } while (Ps);
  }
  if (
    ((so.current = Fo),
    (t = xe !== null && xe.next !== null),
    (qn = 0),
    (Se = xe = ie = null),
    (Io = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Hc() {
  var e = ei !== 0;
  return ((ei = 0), e);
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e), Se);
}
function pt() {
  if (xe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Se === null ? ie.memoizedState : Se.next;
  if (t !== null) ((Se = t), (xe = e));
  else {
    if (e === null) throw Error(C(310));
    ((xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Se === null ? (ie.memoizedState = Se = e) : (Se = Se.next = e));
  }
  return Se;
}
function ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tl(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = xe,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var a = (o = null),
      u = null,
      c = i;
    do {
      var d = c.lane;
      if ((qn & d) === d)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
          (ie.lanes |= d),
          (Qn |= d));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (u === null ? (o = r) : (u.next = a),
      kt(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ie.lanes |= i), (Qn |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nl(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    (kt(i, t.memoizedState) || (Ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function I0() {}
function F0(e, t) {
  var n = ie,
    r = pt(),
    s = t(),
    i = !kt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ge = !0)),
    (r = r.queue),
    Gc(_0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ni(9, B0.bind(null, n, r, s, t), void 0, null),
      ke === null)
    )
      throw Error(C(349));
    qn & 30 || O0(n, t, s);
  }
  return s;
}
function O0(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function B0(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), z0(t) && U0(e));
}
function _0(e, t, n) {
  return n(function () {
    z0(t) && U0(e);
  });
}
function z0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function U0(e) {
  var t = Kt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function ch(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eS.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function W0() {
  return pt().memoizedState;
}
function io(e, t, n, r) {
  var s = Nt();
  ((ie.flags |= e),
    (s.memoizedState = ni(1 | t, n, void 0, r === void 0 ? null : r)));
}
function fa(e, t, n, r) {
  var s = pt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var o = xe.memoizedState;
    if (((i = o.destroy), r !== null && Uc(r, o.deps))) {
      s.memoizedState = ni(t, n, i, r);
      return;
    }
  }
  ((ie.flags |= e), (s.memoizedState = ni(1 | t, n, i, r)));
}
function dh(e, t) {
  return io(8390656, 8, e, t);
}
function Gc(e, t) {
  return fa(2048, 8, e, t);
}
function H0(e, t) {
  return fa(4, 2, e, t);
}
function G0(e, t) {
  return fa(4, 4, e, t);
}
function Y0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function K0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    fa(4, 4, Y0.bind(null, t, e), n)
  );
}
function Yc() {}
function X0(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function q0(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Q0(e, t, n) {
  return qn & 21
    ? (kt(n, t) || ((n = n0()), (ie.lanes |= n), (Qn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function Zb(e, t) {
  var n = Y;
  ((Y = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = el.transition;
  el.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Y = n), (el.transition = r));
  }
}
function Z0() {
  return pt().memoizedState;
}
function Jb(e, t, n) {
  var r = yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    J0(e))
  )
    ex(t, n);
  else if (((n = V0(e, t, n, r)), n !== null)) {
    var s = Fe();
    (St(n, e, r, s), tx(n, t, r));
  }
}
function eS(e, t, n) {
  var r = yn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (J0(e)) ex(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), kt(a, o))) {
          var u = t.interleaved;
          (u === null
            ? ((s.next = s), Fc(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = V0(e, t, s, r)),
      n !== null && ((s = Fe()), St(n, e, r, s), tx(n, t, r)));
  }
}
function J0(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function ex(e, t) {
  Ps = Io = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function tx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jc(e, n));
  }
}
var Fo = {
    readContext: ht,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  tS = {
    readContext: ht,
    useCallback: function (e, t) {
      return ((Nt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ht,
    useEffect: dh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, Y0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jb.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ch,
    useDebugValue: Yc,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = ch(!1),
        t = e[0];
      return ((e = Zb.bind(null, e[1])), (Nt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        s = Nt();
      if (ee) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(C(349));
        qn & 30 || O0(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        dh(_0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ni(9, B0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = ke.identifierPrefix;
      if (ee) {
        var n = Bt,
          r = Ot;
        ((n = (r & ~(1 << (32 - bt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ei++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Qb++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nS = {
    readContext: ht,
    useCallback: X0,
    useContext: ht,
    useEffect: Gc,
    useImperativeHandle: K0,
    useInsertionEffect: H0,
    useLayoutEffect: G0,
    useMemo: q0,
    useReducer: tl,
    useRef: W0,
    useState: function () {
      return tl(ti);
    },
    useDebugValue: Yc,
    useDeferredValue: function (e) {
      var t = pt();
      return Q0(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = tl(ti)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: I0,
    useSyncExternalStore: F0,
    useId: Z0,
    unstable_isNewReconciler: !1,
  },
  rS = {
    readContext: ht,
    useCallback: X0,
    useContext: ht,
    useEffect: Gc,
    useImperativeHandle: K0,
    useInsertionEffect: H0,
    useLayoutEffect: G0,
    useMemo: q0,
    useReducer: nl,
    useRef: W0,
    useState: function () {
      return nl(ti);
    },
    useDebugValue: Yc,
    useDeferredValue: function (e) {
      var t = pt();
      return xe === null ? (t.memoizedState = e) : Q0(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = nl(ti)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: I0,
    useSyncExternalStore: F0,
    useId: Z0,
    unstable_isNewReconciler: !1,
  };
function yt(e, t) {
  if (e && e.defaultProps) {
    ((t = oe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pu(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ha = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      s = yn(e),
      i = _t(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = gn(e, i, s)),
      t !== null && (St(t, e, s, r), ro(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      s = yn(e),
      i = _t(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gn(e, i, s)),
      t !== null && (St(t, e, s, r), ro(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = yn(e),
      s = _t(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = gn(e, s, r)),
      t !== null && (St(t, e, r, n), ro(t, e, r)));
  },
};
function fh(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ks(n, r) || !Ks(s, i)
        : !0
  );
}
function nx(e, t, n) {
  var r = !1,
    s = bn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ht(i))
      : ((s = Ke(t) ? Kn : $e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $r(e, s) : bn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ha),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hh(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ha.enqueueReplaceState(t, t.state, null));
}
function mu(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Oc(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = ht(i))
    : ((i = Ke(t) ? Kn : $e.current), (s.context = $r(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (pu(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ha.enqueueReplaceState(s, s.state, null),
      Lo(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Br(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Mw(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function rl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sS = typeof WeakMap == "function" ? WeakMap : Map;
function rx(e, t, n) {
  ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Bo || ((Bo = !0), (Nu = r)), gu(e, t));
    }),
    n
  );
}
function sx(e, t, n) {
  ((n = _t(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        gu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (gu(e, t),
          typeof r != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ph(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sS();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = yS.bind(null, e, t, n)), t.then(e, e));
}
function mh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gh(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var iS = Qt.ReactCurrentOwner,
  Ge = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? R0(t, null, n, r) : Fr(t, e.child, n, r);
}
function xh(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Dr(t, s),
    (r = Wc(e, t, n, r, i, s)),
    (n = Hc()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Xt(e, t, s))
      : (ee && n && Dc(t), (t.flags |= 1), Ie(e, t, r, s), t.child)
  );
}
function yh(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !td(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ix(e, t, i, r, s))
      : ((e = uo(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ks), n(o, r) && e.ref === t.ref)
    )
      return Xt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = vn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ix(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ks(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return ((t.lanes = e.lanes), Xt(e, t, s));
  }
  return xu(e, t, n, r, s);
}
function ox(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(xr, qe),
        (qe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(xr, qe),
          (qe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(xr, qe),
        (qe |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(xr, qe),
      (qe |= r));
  return (Ie(e, t, s, n), t.child);
}
function ax(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xu(e, t, n, r, s) {
  var i = Ke(n) ? Kn : $e.current;
  return (
    (i = $r(t, i)),
    Dr(t, s),
    (n = Wc(e, t, n, r, i, s)),
    (r = Hc()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Xt(e, t, s))
      : (ee && r && Dc(t), (t.flags |= 1), Ie(e, t, n, s), t.child)
  );
}
function vh(e, t, n, r, s) {
  if (Ke(n)) {
    var i = !0;
    Ao(t);
  } else i = !1;
  if ((Dr(t, s), t.stateNode === null))
    (oo(e, t), nx(t, n, r), mu(t, n, r, s), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ht(c))
      : ((c = Ke(n) ? Kn : $e.current), (c = $r(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && hh(t, o, r, c)),
      (an = !1));
    var h = t.memoizedState;
    ((o.state = h),
      Lo(t, r, o, s),
      (u = t.memoizedState),
      a !== r || h !== u || Ye.current || an
        ? (typeof d == "function" && (pu(t, n, d, r), (u = t.memoizedState)),
          (a = an || fh(t, n, a, r, h, u, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      L0(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : yt(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ht(u))
        : ((u = Ke(n) ? Kn : $e.current), (u = $r(t, u))));
    var x = n.getDerivedStateFromProps;
    ((d =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== u) && hh(t, o, r, u)),
      (an = !1),
      (h = t.memoizedState),
      (o.state = h),
      Lo(t, r, o, s));
    var w = t.memoizedState;
    a !== f || h !== w || Ye.current || an
      ? (typeof x == "function" && (pu(t, n, x, r), (w = t.memoizedState)),
        (c = an || fh(t, n, c, r, h, w, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yu(e, t, n, r, i, s);
}
function yu(e, t, n, r, s, i) {
  ax(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (s && sh(t, n, !1), Xt(e, t, i));
  ((r = t.stateNode), (iS.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Fr(t, e.child, null, i)), (t.child = Fr(t, null, a, i)))
      : Ie(e, t, a, i),
    (t.memoizedState = r.state),
    s && sh(t, n, !0),
    t.child
  );
}
function lx(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? rh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rh(e, t.context, !1),
    Bc(e, t.containerInfo));
}
function wh(e, t, n, r, s) {
  return (Ir(), Vc(s), (t.flags |= 256), Ie(e, t, n, r), t.child);
}
var vu = { dehydrated: null, treeContext: null, retryLane: 0 };
function wu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ux(e, t, n) {
  var r = t.pendingProps,
    s = ne.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    q(ne, s & 1),
    e === null)
  )
    return (
      fu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ga(o, r, 0, null)),
              (e = Hn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = wu(n)),
              (t.memoizedState = vu),
              e)
            : Kc(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return oS(e, t, o, r, a, s, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = vn(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = vn(a, i)) : ((i = Hn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? wu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = vu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kc(e, t) {
  return (
    (t = ga({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Bi(e, t, n, r) {
  return (
    r !== null && Vc(r),
    Fr(t, e.child, null, n),
    (e = Kc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oS(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = rl(Error(C(422)))), Bi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = ga({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Hn(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Fr(t, e.child, null, o),
          (t.child.memoizedState = wu(o)),
          (t.memoizedState = vu),
          i);
  if (!(t.mode & 1)) return Bi(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (i = Error(C(419))),
      (r = rl(i, r, void 0)),
      Bi(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ge || a)) {
    if (((r = ke), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Kt(e, s), St(r, e, s, -1)));
    }
    return (ed(), (r = rl(Error(C(421)))), Bi(e, t, o, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vS.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Qe = mn(s.nextSibling)),
      (Ze = t),
      (ee = !0),
      (wt = null),
      e !== null &&
        ((ut[ct++] = Ot),
        (ut[ct++] = Bt),
        (ut[ct++] = Xn),
        (Ot = e.id),
        (Bt = e.overflow),
        (Xn = t)),
      (t = Kc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), hu(e.return, t, n));
}
function sl(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function cx(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ie(e, t, r.children, n), (r = ne.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && bh(e, n, t);
        else if (e.tag === 19) bh(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((q(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null;)
          ((e = n.alternate),
            e !== null && $o(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          sl(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null;) {
          if (((e = s.alternate), e !== null && $o(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        sl(t, !0, n, null, i);
        break;
      case "together":
        sl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = vn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function aS(e, t, n) {
  switch (t.tag) {
    case 3:
      (lx(t), Ir());
      break;
    case 5:
      $0(t);
      break;
    case 1:
      Ke(t.type) && Ao(t);
      break;
    case 4:
      Bc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (q(Ro, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ux(e, t, n)
            : (q(ne, ne.current & 1),
              (e = Xt(e, t, n)),
              e !== null ? e.sibling : null);
      q(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        q(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), ox(e, t, n));
  }
  return Xt(e, t, n);
}
var dx, bu, fx, hx;
dx = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
bu = function () {};
fx = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), _n(At.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Ul(e, s)), (r = Ul(e, r)), (i = []));
        break;
      case "select":
        ((s = oe({}, s, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = Gl(e, s)), (r = Gl(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Co);
    }
    Kl(n, r);
    var o;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (_s.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else (n || (i || (i = []), i.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (_s.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && Q("scroll", e),
                    i || a === u || (i = []))
                  : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
hx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function as(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function lS(e, t, n) {
  var r = t.pendingProps;
  switch ((Rc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ae(t), null);
    case 1:
      return (Ke(t.type) && Eo(), Ae(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Or(),
        Z(Ye),
        Z($e),
        zc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (Eu(wt), (wt = null)))),
        bu(e, t),
        Ae(t),
        null
      );
    case 5:
      _c(t);
      var s = _n(Js.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (fx(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (Ae(t), null);
        }
        if (((e = _n(At.current)), Fi(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Pt] = t), (r[Qs] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Q("cancel", r), Q("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < ms.length; s++) Q(ms[s], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Q("error", r), Q("load", r));
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              (Af(r, i), Q("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                Q("invalid", r));
              break;
            case "textarea":
              (Df(r, i), Q("invalid", r));
          }
          (Kl(n, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ii(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : _s.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              (Ei(r), Mf(r, i, !0));
              break;
            case "textarea":
              (Ei(r), Rf(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Co);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _g(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Qs] = r),
            dx(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Xl(n, r)), n)) {
              case "dialog":
                (Q("cancel", e), Q("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Q("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < ms.length; s++) Q(ms[s], e);
                s = r;
                break;
              case "source":
                (Q("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (Q("error", e), Q("load", e), (s = r));
                break;
              case "details":
                (Q("toggle", e), (s = r));
                break;
              case "input":
                (Af(e, r), (s = Ul(e, r)), Q("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = oe({}, r, { value: void 0 })),
                  Q("invalid", e));
                break;
              case "textarea":
                (Df(e, r), (s = Gl(e, r)), Q("invalid", e));
                break;
              default:
                s = r;
            }
            (Kl(n, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Wg(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && zg(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && zs(e, u)
                        : typeof u == "number" && zs(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (_s.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && Q("scroll", e)
                          : u != null && yc(e, i, u, o));
              }
            switch (n) {
              case "input":
                (Ei(e), Mf(e, r, !1));
                break;
              case "textarea":
                (Ei(e), Rf(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Cr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Cr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Co);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ae(t), null);
    case 6:
      if (e && t.stateNode != null) hx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = _n(Js.current)), _n(At.current), Fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r));
      }
      return (Ae(t), null);
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Qe !== null && t.mode & 1 && !(t.flags & 128))
          (M0(), Ir(), (t.flags |= 98560), (i = !1));
        else if (((i = Fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Pt] = t;
          } else
            (Ir(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ae(t), (i = !1));
        } else (wt !== null && (Eu(wt), (wt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? ye === 0 && (ye = 3) : ed())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        Or(),
        bu(e, t),
        e === null && Xs(t.stateNode.containerInfo),
        Ae(t),
        null
      );
    case 10:
      return (Ic(t.type._context), Ae(t), null);
    case 17:
      return (Ke(t.type) && Eo(), Ae(t), null);
    case 19:
      if ((Z(ne), (i = t.memoizedState), i === null)) return (Ae(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) as(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((o = $o(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    as(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (q(ne, (ne.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > _r &&
            ((t.flags |= 128), (r = !0), as(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $o(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              as(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ee)
            )
              return (Ae(t), null);
          } else
            2 * he() - i.renderingStartTime > _r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), as(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ne.current),
          q(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        Jc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function uS(e, t) {
  switch ((Rc(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Or(),
        Z(Ye),
        Z($e),
        zc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (_c(t), null);
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Ir();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Z(ne), null);
    case 4:
      return (Or(), null);
    case 10:
      return (Ic(t.type._context), null);
    case 22:
    case 23:
      return (Jc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var _i = !1,
  Re = !1,
  cS = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Su(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Sh = !1;
function dS(e, t) {
  if (((iu = To), (e = y0()), Mc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = o + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (x = f.firstChild) !== null;
            )
              ((h = f), (f = x));
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === s && (a = o),
                h === i && ++d === r && (u = o),
                (x = f.nextSibling) !== null)
              )
                break;
              ((f = h), (h = f.parentNode));
            }
            f = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ou = { focusedElem: e, selectionRange: n }, To = !1, V = t; V !== null;)
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (V = e));
    else
      for (; V !== null;) {
        t = V;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    y = w.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : yt(t.type, v),
                      y,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (b) {
          ce(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (V = e));
          break;
        }
        V = t.return;
      }
  return ((w = Sh), (Sh = !1), w);
}
function Cs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && Su(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function pa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function px(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), px(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Qs], delete t[uu], delete t[Yb], delete t[Kb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function mx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kh(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || mx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ju(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Co)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ju(e, t, n), e = e.sibling; e !== null;)
      (ju(e, t, n), (e = e.sibling));
}
function Tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null;)
      (Tu(e, t, n), (e = e.sibling));
}
var je = null,
  vt = !1;
function tn(e, t, n) {
  for (n = n.child; n !== null;) (gx(e, t, n), (n = n.sibling));
}
function gx(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(oa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || gr(n, t);
    case 6:
      var r = je,
        s = vt;
      ((je = null),
        tn(e, t, n),
        (je = r),
        (vt = s),
        je !== null &&
          (vt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode)));
      break;
    case 18:
      je !== null &&
        (vt
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? Qa(e.parentNode, n)
              : e.nodeType === 1 && Qa(e, n),
            Gs(e))
          : Qa(je, n.stateNode));
      break;
    case 4:
      ((r = je),
        (s = vt),
        (je = n.stateNode.containerInfo),
        (vt = !0),
        tn(e, t, n),
        (je = r),
        (vt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Su(n, t, o),
            (s = s.next));
        } while (s !== r);
      }
      tn(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ce(n, t, a);
        }
      tn(e, t, n);
      break;
    case 21:
      tn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), tn(e, t, n), (Re = r))
        : tn(e, t, n);
      break;
    default:
      tn(e, t, n);
  }
}
function jh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new cS()),
      t.forEach(function (r) {
        var s = wS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((je = a.stateNode), (vt = !1));
              break e;
            case 3:
              ((je = a.stateNode.containerInfo), (vt = !0));
              break e;
            case 4:
              ((je = a.stateNode.containerInfo), (vt = !0));
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(C(160));
        (gx(i, o, s), (je = null), (vt = !1));
        var u = s.alternate;
        (u !== null && (u.return = null), (s.return = null));
      } catch (c) {
        ce(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (xx(t, e), (t = t.sibling));
}
function xx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), Tt(e), r & 4)) {
        try {
          (Cs(3, e, e.return), pa(3, e));
        } catch (v) {
          ce(e, e.return, v);
        }
        try {
          Cs(5, e, e.return);
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      break;
    case 1:
      (mt(t, e), Tt(e), r & 512 && n !== null && gr(n, n.return));
      break;
    case 5:
      if (
        (mt(t, e),
        Tt(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          zs(s, "");
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && Og(s, i),
              Xl(a, o));
            var c = Xl(a, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                f = u[o + 1];
              d === "style"
                ? Wg(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? zg(s, f)
                  : d === "children"
                    ? zs(s, f)
                    : yc(s, d, f, c);
            }
            switch (a) {
              case "input":
                Wl(s, i);
                break;
              case "textarea":
                Bg(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Cr(s, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Cr(s, !!i.multiple, i.defaultValue, !0)
                      : Cr(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Qs] = i;
          } catch (v) {
            ce(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((mt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (v) {
          ce(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gs(t.containerInfo);
        } catch (v) {
          ce(e, e.return, v);
        }
      break;
    case 4:
      (mt(t, e), Tt(e));
      break;
    case 13:
      (mt(t, e),
        Tt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Qc = he())),
        r & 4 && jh(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (c = Re) || d), mt(t, e), (Re = c)) : mt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (V = e, d = e.child; d !== null;) {
            for (f = V = d; V !== null;) {
              switch (((h = V), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cs(4, h, h.return);
                  break;
                case 1:
                  gr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (v) {
                      ce(r, n, v);
                    }
                  }
                  break;
                case 5:
                  gr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nh(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (V = x)) : Nh(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ;) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Ug("display", o))));
              } catch (v) {
                ce(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                ce(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (mt(t, e), Tt(e), r & 4 && jh(e));
      break;
    case 21:
      break;
    default:
      (mt(t, e), Tt(e));
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (mx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (zs(s, ""), (r.flags &= -33));
          var i = kh(e);
          Tu(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = kh(e);
          ju(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fS(e, t, n) {
  ((V = e), yx(e));
}
function yx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null;) {
    var s = V,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || _i;
      if (!o) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || Re;
        a = _i;
        var c = Re;
        if (((_i = o), (Re = u) && !c))
          for (V = s; V !== null;)
            ((o = V),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ph(s)
                : u !== null
                  ? ((u.return = o), (V = u))
                  : Ph(s));
        for (; i !== null;) ((V = i), yx(i), (i = i.sibling));
        ((V = s), (_i = a), (Re = c));
      }
      Th(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : Th(e);
  }
}
function Th(e) {
  for (; V !== null;) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || pa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && uh(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uh(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Gs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Re || (t.flags & 512 && ku(t));
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Nh(e) {
  for (; V !== null;) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (V = n));
      break;
    }
    V = t.return;
  }
}
function Ph(e) {
  for (; V !== null;) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pa(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, s, u);
            }
          }
          var i = t.return;
          try {
            ku(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ku(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (V = a));
      break;
    }
    V = t.return;
  }
}
var hS = Math.ceil,
  Oo = Qt.ReactCurrentDispatcher,
  Xc = Qt.ReactCurrentOwner,
  ft = Qt.ReactCurrentBatchConfig,
  W = 0,
  ke = null,
  pe = null,
  Ne = 0,
  qe = 0,
  xr = Nn(0),
  ye = 0,
  ri = null,
  Qn = 0,
  ma = 0,
  qc = 0,
  Es = null,
  He = null,
  Qc = 0,
  _r = 1 / 0,
  It = null,
  Bo = !1,
  Nu = null,
  xn = null,
  zi = !1,
  dn = null,
  _o = 0,
  As = 0,
  Pu = null,
  ao = -1,
  lo = 0;
function Fe() {
  return W & 6 ? he() : ao !== -1 ? ao : (ao = he());
}
function yn(e) {
  return e.mode & 1
    ? W & 2 && Ne !== 0
      ? Ne & -Ne
      : qb.transition !== null
        ? (lo === 0 && (lo = n0()), lo)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : u0(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < As) throw ((As = 0), (Pu = null), Error(C(185)));
  (pi(e, n, r),
    (!(W & 2) || e !== ke) &&
      (e === ke && (!(W & 2) && (ma |= n), ye === 4 && un(e, Ne)),
      Xe(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((_r = he() + 500), da && Pn())));
}
function Xe(e, t) {
  var n = e.callbackNode;
  qw(e, t);
  var r = jo(e, e === ke ? Ne : 0);
  if (r === 0)
    (n !== null && $f(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $f(n), t === 1))
      (e.tag === 0 ? Xb(Ch.bind(null, e)) : C0(Ch.bind(null, e)),
        Hb(function () {
          !(W & 6) && Pn();
        }),
        (n = null));
    else {
      switch (r0(r)) {
        case 1:
          n = kc;
          break;
        case 4:
          n = e0;
          break;
        case 16:
          n = ko;
          break;
        case 536870912:
          n = t0;
          break;
        default:
          n = ko;
      }
      n = Nx(n, vx.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function vx(e, t) {
  if (((ao = -1), (lo = 0), W & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Rr() && e.callbackNode !== n) return null;
  var r = jo(e, e === ke ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zo(e, r);
  else {
    t = r;
    var s = W;
    W |= 2;
    var i = bx();
    (ke !== e || Ne !== t) && ((It = null), (_r = he() + 500), Wn(e, t));
    do
      try {
        gS();
        break;
      } catch (a) {
        wx(e, a);
      }
    while (!0);
    ($c(),
      (Oo.current = i),
      (W = s),
      pe !== null ? (t = 0) : ((ke = null), (Ne = 0), (t = ye)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = eu(e)), s !== 0 && ((r = s), (t = Cu(e, s)))), t === 1)
    )
      throw ((n = ri), Wn(e, 0), un(e, r), Xe(e, he()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !pS(s) &&
          ((t = zo(e, r)),
          t === 2 && ((i = eu(e)), i !== 0 && ((r = i), (t = Cu(e, i)))),
          t === 1))
      )
        throw ((n = ri), Wn(e, 0), un(e, r), Xe(e, he()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Vn(e, He, It);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = Qc + 500 - he()), 10 < t))
          ) {
            if (jo(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Fe(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = lu(Vn.bind(null, e, He, It), t);
            break;
          }
          Vn(e, He, It);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r;) {
            var o = 31 - bt(r);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
          }
          if (
            ((r = s),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * hS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = lu(Vn.bind(null, e, He, It), r);
            break;
          }
          Vn(e, He, It);
          break;
        case 5:
          Vn(e, He, It);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (Xe(e, he()), e.callbackNode === n ? vx.bind(null, e) : null);
}
function Cu(e, t) {
  var n = Es;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = zo(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Eu(t)),
    e
  );
}
function Eu(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function pS(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!kt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~qc,
      t &= ~ma,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - bt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ch(e) {
  if (W & 6) throw Error(C(327));
  Rr();
  var t = jo(e, 0);
  if (!(t & 1)) return (Xe(e, he()), null);
  var n = zo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = eu(e);
    r !== 0 && ((t = r), (n = Cu(e, r)));
  }
  if (n === 1) throw ((n = ri), Wn(e, 0), un(e, t), Xe(e, he()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vn(e, He, It),
    Xe(e, he()),
    null
  );
}
function Zc(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    ((W = n), W === 0 && ((_r = he() + 500), da && Pn()));
  }
}
function Zn(e) {
  dn !== null && dn.tag === 0 && !(W & 6) && Rr();
  var t = W;
  W |= 1;
  var n = ft.transition,
    r = Y;
  try {
    if (((ft.transition = null), (Y = 1), e)) return e();
  } finally {
    ((Y = r), (ft.transition = n), (W = t), !(W & 6) && Pn());
  }
}
function Jc() {
  ((qe = xr.current), Z(xr));
}
function Wn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wb(n)), pe !== null))
    for (n = pe.return; n !== null;) {
      var r = n;
      switch ((Rc(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Eo());
          break;
        case 3:
          (Or(), Z(Ye), Z($e), zc());
          break;
        case 5:
          _c(r);
          break;
        case 4:
          Or();
          break;
        case 13:
          Z(ne);
          break;
        case 19:
          Z(ne);
          break;
        case 10:
          Ic(r.type._context);
          break;
        case 22:
        case 23:
          Jc();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (pe = e = vn(e.current, null)),
    (Ne = qe = t),
    (ye = 0),
    (ri = null),
    (qc = ma = Qn = 0),
    (He = Es = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (r.next = o));
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function wx(e, t) {
  do {
    var n = pe;
    try {
      if (($c(), (so.current = Fo), Io)) {
        for (var r = ie.memoizedState; r !== null;) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Io = !1;
      }
      if (
        ((qn = 0),
        (Se = xe = ie = null),
        (Ps = !1),
        (ei = 0),
        (Xc.current = null),
        n === null || n.return === null)
      ) {
        ((ye = 1), (ri = t), (pe = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Ne),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = mh(o);
          if (x !== null) {
            ((x.flags &= -257),
              gh(x, o, a, i, t),
              x.mode & 1 && ph(i, c, t),
              (t = x),
              (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              (v.add(u), (t.updateQueue = v));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (ph(i, c, t), ed());
              break e;
            }
            u = Error(C(426));
          }
        } else if (ee && a.mode & 1) {
          var y = mh(o);
          if (y !== null) {
            (!(y.flags & 65536) && (y.flags |= 256),
              gh(y, o, a, i, t),
              Vc(Br(u, a)));
            break e;
          }
        }
        ((i = u = Br(u, a)),
          ye !== 4 && (ye = 2),
          Es === null ? (Es = [i]) : Es.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var p = rx(i, u, t);
              lh(i, p);
              break e;
            case 1:
              a = u;
              var m = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (xn === null || !xn.has(g))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var b = sx(i, a, t);
                lh(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kx(n);
    } catch (S) {
      ((t = S), pe === n && n !== null && (pe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function bx() {
  var e = Oo.current;
  return ((Oo.current = Fo), e === null ? Fo : e);
}
function ed() {
  ((ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    ke === null || (!(Qn & 268435455) && !(ma & 268435455)) || un(ke, Ne));
}
function zo(e, t) {
  var n = W;
  W |= 2;
  var r = bx();
  (ke !== e || Ne !== t) && ((It = null), Wn(e, t));
  do
    try {
      mS();
      break;
    } catch (s) {
      wx(e, s);
    }
  while (!0);
  if (($c(), (W = n), (Oo.current = r), pe !== null)) throw Error(C(261));
  return ((ke = null), (Ne = 0), ye);
}
function mS() {
  for (; pe !== null;) Sx(pe);
}
function gS() {
  for (; pe !== null && !_w();) Sx(pe);
}
function Sx(e) {
  var t = Tx(e.alternate, e, qe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? kx(e) : (pe = t),
    (Xc.current = null));
}
function kx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uS(n, t)), n !== null)) {
        ((n.flags &= 32767), (pe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ye = 6), (pe = null));
        return;
      }
    } else if (((n = lS(n, t, qe)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Vn(e, t, n) {
  var r = Y,
    s = ft.transition;
  try {
    ((ft.transition = null), (Y = 1), xS(e, t, n, r));
  } finally {
    ((ft.transition = s), (Y = r));
  }
  return null;
}
function xS(e, t, n, r) {
  do Rr();
  while (dn !== null);
  if (W & 6) throw Error(C(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Qw(e, i),
    e === ke && ((pe = ke = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      Nx(ko, function () {
        return (Rr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = ft.transition), (ft.transition = null));
    var o = Y;
    Y = 1;
    var a = W;
    ((W |= 4),
      (Xc.current = null),
      dS(e, n),
      xx(n, e),
      Ib(ou),
      (To = !!iu),
      (ou = iu = null),
      (e.current = n),
      fS(n),
      zw(),
      (W = a),
      (Y = o),
      (ft.transition = i));
  } else e.current = n;
  if (
    (zi && ((zi = !1), (dn = e), (_o = s)),
    (i = e.pendingLanes),
    i === 0 && (xn = null),
    Hw(n.stateNode),
    Xe(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Bo) throw ((Bo = !1), (e = Nu), (Nu = null), e);
  return (
    _o & 1 && e.tag !== 0 && Rr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Pu ? As++ : ((As = 0), (Pu = e))) : (As = 0),
    Pn(),
    null
  );
}
function Rr() {
  if (dn !== null) {
    var e = r0(_o),
      t = ft.transition,
      n = Y;
    try {
      if (((ft.transition = null), (Y = 16 > e ? 16 : e), dn === null))
        var r = !1;
      else {
        if (((e = dn), (dn = null), (_o = 0), W & 6)) throw Error(C(331));
        var s = W;
        for (W |= 4, V = e.current; V !== null;) {
          var i = V,
            o = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (V = c; V !== null;) {
                  var d = V;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (V = f));
                  else
                    for (; V !== null;) {
                      d = V;
                      var h = d.sibling,
                        x = d.return;
                      if ((px(d), d === c)) {
                        V = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = x), (V = h));
                        break;
                      }
                      V = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var y = v.sibling;
                    ((v.sibling = null), (v = y));
                  } while (v !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (V = o));
          else
            e: for (; V !== null;) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cs(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                ((p.return = i.return), (V = p));
                break e;
              }
              V = i.return;
            }
        }
        var m = e.current;
        for (V = m; V !== null;) {
          o = V;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (V = g));
          else
            e: for (o = m; V !== null;) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pa(9, a);
                  }
                } catch (S) {
                  ce(a, a.return, S);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                ((b.return = a.return), (V = b));
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((W = s), Pn(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(oa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((Y = n), (ft.transition = t));
    }
  }
  return !1;
}
function Eh(e, t, n) {
  ((t = Br(n, t)),
    (t = rx(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Fe()),
    e !== null && (pi(e, 1, t), Xe(e, t)));
}
function ce(e, t, n) {
  if (e.tag === 3) Eh(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Eh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xn === null || !xn.has(r)))
        ) {
          ((e = Br(n, e)),
            (e = sx(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Fe()),
            t !== null && (pi(t, 1, e), Xe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function yS(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Ne & n) === n &&
      (ye === 4 || (ye === 3 && (Ne & 130023424) === Ne && 500 > he() - Qc)
        ? Wn(e, 0)
        : (qc |= n)),
    Xe(e, t));
}
function jx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Di), (Di <<= 1), !(Di & 130023424) && (Di = 4194304))
      : (t = 1));
  var n = Fe();
  ((e = Kt(e, t)), e !== null && (pi(e, t, n), Xe(e, n)));
}
function vS(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), jx(e, n));
}
function wS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), jx(e, n));
}
var Tx;
Tx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ge = !1), aS(e, t, n));
      Ge = !!(e.flags & 131072);
    }
  else ((Ge = !1), ee && t.flags & 1048576 && E0(t, Do, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (oo(e, t), (e = t.pendingProps));
      var s = $r(t, $e.current);
      (Dr(t, n), (s = Wc(null, t, r, e, s, n)));
      var i = Hc();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((i = !0), Ao(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Oc(t),
            (s.updater = ha),
            (t.stateNode = s),
            (s._reactInternals = t),
            mu(t, r, e, n),
            (t = yu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Dc(t), Ie(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oo(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = SS(r)),
          (e = yt(r, e)),
          s)
        ) {
          case 0:
            t = xu(null, t, r, e, n);
            break e;
          case 1:
            t = vh(null, t, r, e, n);
            break e;
          case 11:
            t = xh(null, t, r, e, n);
            break e;
          case 14:
            t = yh(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        xu(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        vh(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((lx(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          L0(e, t),
          Lo(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Br(Error(C(423)), t)), (t = wh(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Br(Error(C(424)), t)), (t = wh(e, t, r, n, s)));
            break e;
          } else
            for (
              Qe = mn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ee = !0,
                wt = null,
                n = R0(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ir(), r === s)) {
            t = Xt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $0(t),
        e === null && fu(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        au(r, s) ? (o = null) : i !== null && au(r, i) && (t.flags |= 32),
        ax(e, t),
        Ie(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && fu(t), null);
    case 13:
      return ux(e, t, n);
    case 4:
      return (
        Bc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        xh(e, t, r, s, n)
      );
    case 7:
      return (Ie(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ie(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          q(Ro, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (kt(i.value, o)) {
            if (i.children === s.children && !Ye.current) {
              t = Xt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null;) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ((u = _t(-1, n & -n)), (u.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      hu(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  hu(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null;) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (Ie(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Dr(t, n),
        (s = ht(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = yt(r, t.pendingProps)),
        (s = yt(r.type, s)),
        yh(e, t, r, s, n)
      );
    case 15:
      return ix(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        oo(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Ao(t)) : (e = !1),
        Dr(t, n),
        nx(t, r, s),
        mu(t, r, s, n),
        yu(null, t, r, !0, e, n)
      );
    case 19:
      return cx(e, t, n);
    case 22:
      return ox(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Nx(e, t) {
  return Jg(e, t);
}
function bS(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function dt(e, t, n, r) {
  return new bS(e, t, n, r);
}
function td(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function SS(e) {
  if (typeof e == "function") return td(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wc)) return 11;
    if (e === bc) return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function uo(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) td(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ar:
        return Hn(n.children, s, i, t);
      case vc:
        ((o = 8), (s |= 8));
        break;
      case Ol:
        return (
          (e = dt(12, n, t, s | 2)),
          (e.elementType = Ol),
          (e.lanes = i),
          e
        );
      case Bl:
        return ((e = dt(13, n, t, s)), (e.elementType = Bl), (e.lanes = i), e);
      case _l:
        return ((e = dt(19, n, t, s)), (e.elementType = _l), (e.lanes = i), e);
      case $g:
        return ga(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vg:
              o = 10;
              break e;
            case Lg:
              o = 9;
              break e;
            case wc:
              o = 11;
              break e;
            case bc:
              o = 14;
              break e;
            case on:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dt(o, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Hn(e, t, n, r) {
  return ((e = dt(7, e, r, t)), (e.lanes = n), e);
}
function ga(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = $g),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function il(e, t, n) {
  return ((e = dt(6, e, null, t)), (e.lanes = n), e);
}
function ol(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kS(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ba(0)),
    (this.expirationTimes = Ba(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ba(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function nd(e, t, n, r, s, i, o, a, u) {
  return (
    (e = new kS(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oc(i),
    e
  );
}
function jS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: or,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Px(e) {
  if (!e) return bn;
  e = e._reactInternals;
  e: {
    if (tr(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return P0(e, n, t);
  }
  return t;
}
function Cx(e, t, n, r, s, i, o, a, u) {
  return (
    (e = nd(n, r, !0, e, s, i, o, a, u)),
    (e.context = Px(null)),
    (n = e.current),
    (r = Fe()),
    (s = yn(n)),
    (i = _t(r, s)),
    (i.callback = t ?? null),
    gn(n, i, s),
    (e.current.lanes = s),
    pi(e, s, r),
    Xe(e, r),
    e
  );
}
function xa(e, t, n, r) {
  var s = t.current,
    i = Fe(),
    o = yn(s);
  return (
    (n = Px(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(s, t, o)),
    e !== null && (St(e, s, o, i), ro(e, s, o)),
    o
  );
}
function Uo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ah(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rd(e, t) {
  (Ah(e, t), (e = e.alternate) && Ah(e, t));
}
function TS() {
  return null;
}
var Ex =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function sd(e) {
  this._internalRoot = e;
}
ya.prototype.render = sd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  xa(e, t, null, null);
};
ya.prototype.unmount = sd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Zn(function () {
      xa(null, e, null, null);
    }),
      (t[Yt] = null));
  }
};
function ya(e) {
  this._internalRoot = e;
}
ya.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = o0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    (ln.splice(n, 0, e), n === 0 && l0(e));
  }
};
function id(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function va(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mh() {}
function NS(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Uo(o);
        i.call(c);
      };
    }
    var o = Cx(t, r, e, 0, null, !1, !1, "", Mh);
    return (
      (e._reactRootContainer = o),
      (e[Yt] = o.current),
      Xs(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      o
    );
  }
  for (; (s = e.lastChild);) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Uo(u);
      a.call(c);
    };
  }
  var u = nd(e, 0, !1, null, null, !1, !1, "", Mh);
  return (
    (e._reactRootContainer = u),
    (e[Yt] = u.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      xa(t, u, n, r);
    }),
    u
  );
}
function wa(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = Uo(o);
        a.call(u);
      };
    }
    xa(t, o, e, s);
  } else o = NS(n, t, e, s, r);
  return Uo(o);
}
s0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ps(t.pendingLanes);
        n !== 0 &&
          (jc(t, n | 1), Xe(t, he()), !(W & 6) && ((_r = he() + 500), Pn()));
      }
      break;
    case 13:
      (Zn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var s = Fe();
          St(r, e, 1, s);
        }
      }),
        rd(e, 1));
  }
};
Tc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      St(t, e, 134217728, n);
    }
    rd(e, 134217728);
  }
};
i0 = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Fe();
      St(n, e, t, r);
    }
    rd(e, t);
  }
};
o0 = function () {
  return Y;
};
a0 = function (e, t) {
  var n = Y;
  try {
    return ((Y = e), t());
  } finally {
    Y = n;
  }
};
Ql = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = ca(r);
            if (!s) throw Error(C(90));
            (Fg(r), Wl(r, s));
          }
        }
      }
      break;
    case "textarea":
      Bg(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Cr(e, !!n.multiple, t, !1));
  }
};
Yg = Zc;
Kg = Zn;
var PS = { usingClientEntryPoint: !1, Events: [gi, dr, ca, Hg, Gg, Zc] },
  ls = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  CS = {
    bundleType: ls.bundleType,
    version: ls.version,
    rendererPackageName: ls.rendererPackageName,
    rendererConfig: ls.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Qg(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ls.findFiberByHostInstance || TS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ui.isDisabled && Ui.supportsFiber)
    try {
      ((oa = Ui.inject(CS)), (Et = Ui));
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!id(t)) throw Error(C(200));
  return jS(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!id(e)) throw Error(C(299));
  var n = !1,
    r = "",
    s = Ex;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = nd(e, 1, !1, null, null, n, !1, r, s)),
    (e[Yt] = t.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new sd(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = Qg(t)), (e = e === null ? null : e.stateNode), e);
};
rt.flushSync = function (e) {
  return Zn(e);
};
rt.hydrate = function (e, t, n) {
  if (!va(t)) throw Error(C(200));
  return wa(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!id(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Ex;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Cx(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Yt] = t.current),
    Xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new ya(t);
};
rt.render = function (e, t, n) {
  if (!va(t)) throw Error(C(200));
  return wa(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!va(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Zn(function () {
        wa(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Yt] = null));
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = Zc;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!va(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return wa(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function Ax() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ax);
    } catch (e) {
      console.error(e);
    }
}
(Ax(), (Ag.exports = rt));
var ES = Ag.exports,
  Mx,
  Dh = ES;
((Mx = Dh.createRoot), Dh.hydrateRoot);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Dx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var MS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DS = k.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    u,
  ) =>
    k.createElement(
      "svg",
      {
        ref: u,
        ...MS,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Dx("lucide", s),
        ...a,
      },
      [
        ...o.map(([c, d]) => k.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O = (e, t) => {
  const n = k.forwardRef(({ className: r, ...s }, i) =>
    k.createElement(DS, {
      ref: i,
      iconNode: t,
      className: Dx(`lucide-${AS(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RS = O("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VS = O("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LS = O("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $S = O("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = O("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = O("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = O("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IS = O("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const co = O("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FS = O("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OS = O("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BS = O("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = O("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _S = O("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = O("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zS = O("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $x = O("Feather", [
  [
    "path",
    {
      d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
      key: "18jl4k",
    },
  ],
  ["path", { d: "M16 8 2 22", key: "vp34q" }],
  ["path", { d: "M17.5 15H9", key: "1oz8nu" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const US = O("Film", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ba = O("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WS = O("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mu = O("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HS = O("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = O("LockOpen", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Du = O("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GS = O("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YS = O("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KS = O("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XS = O("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qS = O("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = O("Mic", [
  [
    "path",
    {
      d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
      key: "131961",
    },
  ],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QS = O("Move", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZS = O("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fx = O("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JS = O("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e2 = O("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t2 = O("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = O("SlidersVertical", [
  ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
  ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
  ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
  ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
  ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
  ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
  ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
  ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wo = O("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n2 = O("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd",
    },
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r2 = O("Video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec",
    },
  ],
  [
    "rect",
    { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s2 = O("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = O("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vh = O("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]),
  Lh = [
    { id: "home", num: ".01", label: "HOME" },
    { id: "social-entrepreneur", num: ".02", label: "SOCIAL ENTREPRENEUR" },
    { id: "writer", num: ".03", label: "WRITER" },
    { id: "public-speaker", num: ".04", label: "PUBLIC SPEAKER" },
    { id: "model", num: ".05", label: "MODEL" },
    { id: "gallery", num: ".06", label: "GALLERY" },
  ];
function i2({ currentView: e = "home", setCurrentView: t }) {
  const [n, r] = k.useState("home"),
    [s, i] = k.useState(!1),
    [o, a] = k.useState(!1),
    [u, c] = k.useState(!1),
    [d, f] = k.useState(
      () => localStorage.getItem("collage_layout_locked") === "true",
    );
  k.useEffect(() => {
    const v = (p) => {
        p.detail !== void 0 && c(!!p.detail);
      },
      y = (p) => {
        p.detail !== void 0 && f(!!p.detail);
      };
    return (
      window.addEventListener("dev-mode-changed", v),
      window.addEventListener("dev-lock-changed", y),
      window.dispatchEvent(new CustomEvent("request-dev-state")),
      () => {
        (window.removeEventListener("dev-mode-changed", v),
          window.removeEventListener("dev-lock-changed", y));
      }
    );
  }, []);
  const h = () => {
      window.dispatchEvent(new CustomEvent("toggle-dev-mode"));
    },
    x = () => {
      const v = !d;
      (f(v),
        localStorage.setItem("collage_layout_locked", String(v)),
        window.dispatchEvent(
          new CustomEvent("toggle-dev-lock", { detail: v }),
        ));
    };
  (k.useEffect(() => {
    if (e !== "home") return;
    const v = () => {
      a(window.scrollY > 50);
      const y = window.scrollY + 180;
      for (const p of Lh) {
        const m = document.getElementById(p.id);
        if (m) {
          const g = m.offsetTop,
            b = m.offsetHeight;
          y >= g && y < g + b && r(p.id);
        }
      }
    };
    return (
      window.addEventListener("scroll", v),
      () => window.removeEventListener("scroll", v)
    );
  }, [e]),
    k.useEffect(() => {
      a(!1);
    }, [e]));
  const w = (v) => {
    if ((i(!1), t)) (t(v), window.scrollTo({ top: 0, behavior: "smooth" }));
    else {
      const y = document.getElementById(v);
      y && window.scrollTo({ top: y.offsetTop - 80, behavior: "smooth" });
    }
  };
  return l.jsxs("header", {
    className: `fixed top-0 inset-x-0 z-40 transition-all duration-300 pointer-events-none ${o || e !== "home" ? "bg-transparent py-3 md:py-4" : "bg-transparent py-5 md:py-6"}`,
    children: [
      l.jsxs("div", {
        className:
          "max-w-none px-10 md:px-12 flex items-center justify-between pointer-events-auto",
        children: [
          l.jsx("div", {
            onClick: () => w("home"),
            className: "flex items-center gap-3 cursor-pointer group",
            children: l.jsx("img", {
              src: "/tarranalogo.png",
              alt: "NGO Logo",
              className:
                "h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -ml-3 md:-ml-8",
              referrerPolicy: "no-referrer",
            }),
          }),
          l.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e === "home" &&
                l.jsxs(l.Fragment, {
                  children: [
                    u &&
                      l.jsxs("button", {
                        id: "btn-dev-lock-toggle",
                        onClick: x,
                        className: `flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${d ? "bg-red-500 text-white border-red-600 hover:bg-red-600" : "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600"}`,
                        children: [
                          d
                            ? l.jsx(Du, { className: "w-3.5 h-3.5" })
                            : l.jsx(Ix, { className: "w-3.5 h-3.5" }),
                          d ? "Locked" : "Unlocked",
                        ],
                      }),
                    l.jsxs("button", {
                      id: "btn-dev-align-toggle",
                      onClick: h,
                      className: `flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${u ? "bg-amber-500 text-white border-amber-600 hover:bg-amber-600 animate-pulse" : "bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200"}`,
                      children: [
                        l.jsx(t2, {
                          className: `w-3.5 h-3.5 ${u ? "animate-spin" : ""}`,
                        }),
                        u ? "Dev Mode Active" : "Adjust Image Positions",
                      ],
                    }),
                  ],
                }),
              l.jsx("button", {
                onClick: () => i(!s),
                className:
                  "text-neutral-900 hover:text-neutral-600 transition-all duration-300 cursor-pointer flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200/80 hover:bg-neutral-50 shrink-0",
                "aria-label": s ? "Close menu" : "Open menu",
                children: s
                  ? l.jsxs(l.Fragment, {
                      children: [
                        l.jsx("span", {
                          className:
                            "font-mono text-xs tracking-wider uppercase font-bold text-neutral-500",
                          children: "CLOSE",
                        }),
                        l.jsx(Bx, { className: "w-5 h-5 text-neutral-700" }),
                      ],
                    })
                  : l.jsxs(l.Fragment, {
                      children: [
                        l.jsx("span", {
                          className:
                            "font-mono text-xs tracking-wider uppercase font-bold text-neutral-600",
                          children: "MENU",
                        }),
                        l.jsx(XS, {
                          className: "w-5 h-5 text-neutral-700 animate-pulse",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
      s &&
        l.jsx("div", {
          className:
            "absolute top-full inset-x-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xl px-6 py-8 z-50 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-300",
          children: l.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: l.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3",
              children: Lh.map((v) => {
                const y = e === v.id || (e === "home" && n === v.id);
                return l.jsxs(
                  "button",
                  {
                    onClick: () => w(v.id),
                    className:
                      "group flex items-center justify-between text-left py-3 px-4 rounded-xl hover:bg-neutral-50/70 border border-transparent hover:border-neutral-100 transition-all duration-300 cursor-pointer",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[10px] text-neutral-400 font-bold group-hover:text-amber-600 transition-colors",
                            children: v.num,
                          }),
                          l.jsx("span", {
                            className: `font-heading text-xs tracking-wider font-semibold transition-colors ${y ? "text-neutral-950 font-bold" : "text-neutral-600 group-hover:text-neutral-950"}`,
                            children: v.label,
                          }),
                        ],
                      }),
                      l.jsx(LS, {
                        className:
                          "w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all",
                      }),
                    ],
                  },
                  v.id,
                );
              }),
            }),
          }),
        }),
    ],
  });
}
const ad = k.createContext({});
function qr(e) {
  const t = k.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Sa = k.createContext(null),
  ka = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class o2 extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function a2({ children: e, isPresent: t }) {
  const n = k.useId(),
    r = k.useRef(null),
    s = k.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = k.useContext(ka);
  return (
    k.useInsertionEffect(() => {
      const { width: o, height: a, top: u, left: c } = s.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        i && (d.nonce = i),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    l.jsx(o2, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: k.cloneElement(e, { ref: r }),
    })
  );
}
const l2 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = qr(u2),
    u = k.useId(),
    c = k.useCallback(
      (f) => {
        a.set(f, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r],
    ),
    d = k.useMemo(
      () => ({
        id: u,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: c,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      i ? [Math.random(), c] : [n, c],
    );
  return (
    k.useMemo(() => {
      a.forEach((f, h) => a.set(h, !1));
    }, [n]),
    k.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = l.jsx(a2, { isPresent: n, children: e })),
    l.jsx(Sa.Provider, { value: d, children: e })
  );
};
function u2() {
  return new Map();
}
function _x(e = !0) {
  const t = k.useContext(Sa);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = k.useId();
  k.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = k.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Wi = (e) => e.key || "";
function $h(e) {
  const t = [];
  return (
    k.Children.forEach(e, (n) => {
      k.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const ld = typeof window < "u",
  ja = ld ? k.useLayoutEffect : k.useEffect,
  Vr = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
  }) => {
    const [a, u] = _x(o),
      c = k.useMemo(() => $h(e), [e]),
      d = o && !a ? [] : c.map(Wi),
      f = k.useRef(!0),
      h = k.useRef(c),
      x = qr(() => new Map()),
      [w, v] = k.useState(c),
      [y, p] = k.useState(c);
    ja(() => {
      ((f.current = !1), (h.current = c));
      for (let b = 0; b < y.length; b++) {
        const S = Wi(y[b]);
        d.includes(S) ? x.delete(S) : x.get(S) !== !0 && x.set(S, !1);
      }
    }, [y, d.length, d.join("-")]);
    const m = [];
    if (c !== w) {
      let b = [...c];
      for (let S = 0; S < y.length; S++) {
        const j = y[S],
          N = Wi(j);
        d.includes(N) || (b.splice(S, 0, j), m.push(j));
      }
      (i === "wait" && m.length && (b = m), p($h(b)), v(c));
      return;
    }
    const { forceRender: g } = k.useContext(ad);
    return l.jsx(l.Fragment, {
      children: y.map((b) => {
        const S = Wi(b),
          j = o && !a ? !1 : c === y || d.includes(S),
          N = () => {
            if (x.has(S)) x.set(S, !0);
            else return;
            let T = !0;
            (x.forEach((R) => {
              R || (T = !1);
            }),
              T &&
                (g == null || g(),
                p(h.current),
                o && (u == null || u()),
                r && r()));
          };
        return l.jsx(
          l2,
          {
            isPresent: j,
            initial: !f.current || n ? void 0 : !1,
            custom: j ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: j ? void 0 : N,
            children: b,
          },
          S,
        );
      }),
    });
  },
  Oe = (e) => e;
let c2 = Oe,
  zx = Oe;
const d2 = { useManualTiming: !1 };
function f2(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (i.has(c) && (u.schedule(c), e()), c(o));
  }
  const u = {
    schedule: (c, d = !1, f = !1) => {
      const x = f && r ? t : n;
      return (d && i.add(c), x.has(c) || x.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), i.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        s = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const Hi = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  h2 = 40;
function Ux(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Hi.reduce((p, m) => ((p[m] = f2(i)), p), {}),
    {
      read: a,
      resolveKeyframes: u,
      update: c,
      preRender: d,
      render: f,
      postRender: h,
    } = o,
    x = () => {
      const p = performance.now();
      ((n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(p - s.timestamp, h2), 1)),
        (s.timestamp = p),
        (s.isProcessing = !0),
        a.process(s),
        u.process(s),
        c.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(x)));
    },
    w = () => {
      ((n = !0), (r = !0), s.isProcessing || e(x));
    };
  return {
    schedule: Hi.reduce((p, m) => {
      const g = o[m];
      return (
        (p[m] = (b, S = !1, j = !1) => (n || w(), g.schedule(b, S, j))),
        p
      );
    }, {}),
    cancel: (p) => {
      for (let m = 0; m < Hi.length; m++) o[Hi[m]].cancel(p);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: H,
    cancel: jt,
    state: be,
    steps: al,
  } = Ux(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0),
  Wx = k.createContext({ strict: !1 }),
  Ih = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  zr = {};
for (const e in Ih) zr[e] = { isEnabled: (t) => Ih[e].some((n) => !!t[n]) };
function p2(e) {
  for (const t in e) zr[t] = { ...zr[t], ...e[t] };
}
const m2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ho(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    m2.has(e)
  );
}
let Hx = (e) => !Ho(e);
function g2(e) {
  e && (Hx = (t) => (t.startsWith("on") ? !Ho(t) : e(t)));
}
try {
  g2(require("@emotion/is-prop-valid").default);
} catch {}
function x2(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Hx(s) ||
        (n === !0 && Ho(s)) ||
        (!t && !Ho(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function y2(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const Ta = k.createContext({});
function si(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Na(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ud = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  cd = ["initial", ...ud];
function Pa(e) {
  return Na(e.animate) || cd.some((t) => si(e[t]));
}
function Gx(e) {
  return !!(Pa(e) || e.variants);
}
function v2(e, t) {
  if (Pa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || si(n) ? n : void 0,
      animate: si(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function w2(e) {
  const { initial: t, animate: n } = v2(e, k.useContext(Ta));
  return k.useMemo(() => ({ initial: t, animate: n }), [Fh(t), Fh(n)]);
}
function Fh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const b2 = Symbol.for("motionComponentSymbol");
function yr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function S2(e, t, n) {
  return k.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : yr(n) && (n.current = r)));
    },
    [t],
  );
}
const dd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  k2 = "framerAppearId",
  Yx = "data-" + dd(k2),
  { schedule: fd } = Ux(queueMicrotask, !1),
  Kx = k.createContext({});
function j2(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = k.useContext(Ta),
    u = k.useContext(Wx),
    c = k.useContext(Sa),
    d = k.useContext(ka).reducedMotion,
    f = k.useRef(null);
  ((r = r || u.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const h = f.current,
    x = k.useContext(Kx);
  h &&
    !h.projection &&
    s &&
    (h.type === "html" || h.type === "svg") &&
    T2(f.current, n, s, x);
  const w = k.useRef(!1);
  k.useInsertionEffect(() => {
    h && w.current && h.update(n, c);
  });
  const v = n[Yx],
    y = k.useRef(
      !!v &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, v)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, v)),
    );
  return (
    ja(() => {
      h &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        fd.render(h.render),
        y.current && h.animationState && h.animationState.animateChanges());
    }),
    k.useEffect(() => {
      h &&
        (!y.current && h.animationState && h.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (y.current = !1)));
    }),
    h
  );
}
function T2(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: u,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Xx(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && yr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: u,
      layoutRoot: c,
    }));
}
function Xx(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Xx(e.parent);
}
function N2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && p2(e);
  function a(c, d) {
    let f;
    const h = { ...k.useContext(ka), ...c, layoutId: P2(c) },
      { isStatic: x } = h,
      w = w2(c),
      v = r(c, x);
    if (!x && ld) {
      C2();
      const y = E2(h);
      ((f = y.MeasureLayout),
        (w.visualElement = j2(s, v, h, t, y.ProjectionNode)));
    }
    return l.jsxs(Ta.Provider, {
      value: w,
      children: [
        f && w.visualElement
          ? l.jsx(f, { visualElement: w.visualElement, ...h })
          : null,
        n(s, c, S2(v, w.visualElement, d), v, x, w.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !== null && o !== void 0 ? o : ""})`}`;
  const u = k.forwardRef(a);
  return ((u[b2] = s), u);
}
function P2({ layoutId: e }) {
  const t = k.useContext(ad).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function C2(e, t) {
  k.useContext(Wx).strict;
}
function E2(e) {
  const { drag: t, layout: n } = zr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const A2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function hd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(A2.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Oh(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function pd(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Oh(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Oh(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const Ru = (e) => Array.isArray(e),
  M2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  D2 = (e) => (Ru(e) ? e[e.length - 1] || 0 : e),
  Ve = (e) => !!(e && e.getVelocity);
function fo(e) {
  const t = Ve(e) ? e.get() : e;
  return M2(t) ? t.toValue() : t;
}
function R2(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i,
) {
  const o = { latestValues: V2(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const qx = (e) => (t, n) => {
  const r = k.useContext(Ta),
    s = k.useContext(Sa),
    i = () => R2(e, t, r, s);
  return n ? i() : qr(i);
};
function V2(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = fo(i[h]);
  let { initial: o, animate: a } = e;
  const u = Pa(e),
    c = Gx(e);
  t &&
    c &&
    !u &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !Na(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let x = 0; x < h.length; x++) {
      const w = pd(e, h[x]);
      if (w) {
        const { transitionEnd: v, transition: y, ...p } = w;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const b = d ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (s[m] = g);
        }
        for (const m in v) s[m] = v[m];
      }
    }
  }
  return s;
}
const Qr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  nr = new Set(Qr),
  Qx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Zx = Qx("--"),
  L2 = Qx("var(--"),
  md = (e) => (L2(e) ? $2.test(e.split("/*")[0].trim()) : !1),
  $2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Jx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Lt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Zr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ii = { ...Zr, transform: (e) => Lt(0, 1, e) },
  Gi = { ...Zr, default: 1 },
  yi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  nn = yi("deg"),
  Mt = yi("%"),
  I = yi("px"),
  I2 = yi("vh"),
  F2 = yi("vw"),
  Bh = {
    ...Mt,
    parse: (e) => Mt.parse(e) / 100,
    transform: (e) => Mt.transform(e * 100),
  },
  O2 = {
    borderWidth: I,
    borderTopWidth: I,
    borderRightWidth: I,
    borderBottomWidth: I,
    borderLeftWidth: I,
    borderRadius: I,
    radius: I,
    borderTopLeftRadius: I,
    borderTopRightRadius: I,
    borderBottomRightRadius: I,
    borderBottomLeftRadius: I,
    width: I,
    maxWidth: I,
    height: I,
    maxHeight: I,
    top: I,
    right: I,
    bottom: I,
    left: I,
    padding: I,
    paddingTop: I,
    paddingRight: I,
    paddingBottom: I,
    paddingLeft: I,
    margin: I,
    marginTop: I,
    marginRight: I,
    marginBottom: I,
    marginLeft: I,
    backgroundPositionX: I,
    backgroundPositionY: I,
  },
  B2 = {
    rotate: nn,
    rotateX: nn,
    rotateY: nn,
    rotateZ: nn,
    scale: Gi,
    scaleX: Gi,
    scaleY: Gi,
    scaleZ: Gi,
    skew: nn,
    skewX: nn,
    skewY: nn,
    distance: I,
    translateX: I,
    translateY: I,
    translateZ: I,
    x: I,
    y: I,
    z: I,
    perspective: I,
    transformPerspective: I,
    opacity: ii,
    originX: Bh,
    originY: Bh,
    originZ: I,
  },
  _h = { ...Zr, transform: Math.round },
  gd = {
    ...O2,
    ...B2,
    zIndex: _h,
    size: I,
    fillOpacity: ii,
    strokeOpacity: ii,
    numOctaves: _h,
  },
  _2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  z2 = Qr.length;
function U2(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < z2; i++) {
    const o = Qr[i],
      a = e[o];
    if (a === void 0) continue;
    let u = !0;
    if (
      (typeof a == "number"
        ? (u = a === (o.startsWith("scale") ? 1 : 0))
        : (u = parseFloat(a) === 0),
      !u || n)
    ) {
      const c = Jx(a, gd[o]);
      if (!u) {
        s = !1;
        const d = _2[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function xd(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const u in t) {
    const c = t[u];
    if (nr.has(u)) {
      o = !0;
      continue;
    } else if (Zx(u)) {
      s[u] = c;
      continue;
    } else {
      const d = Jx(c, gd[u]);
      u.startsWith("origin") ? ((a = !0), (i[u] = d)) : (r[u] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = U2(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: u = "50%", originY: c = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${u} ${c} ${d}`;
  }
}
const W2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  H2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function G2(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? W2 : H2;
  e[i.offset] = I.transform(-r);
  const o = I.transform(t),
    a = I.transform(n);
  e[i.array] = `${o} ${a}`;
}
function zh(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function Y2(e, t, n) {
  const r = zh(t, e.x, e.width),
    s = zh(n, e.y, e.height);
  return `${r} ${s}`;
}
function yd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: u = 0,
    ...c
  },
  d,
  f,
) {
  if ((xd(e, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: x, dimensions: w } = e;
  (h.transform && (w && (x.transform = h.transform), delete h.transform),
    w &&
      (s !== void 0 || i !== void 0 || x.transform) &&
      (x.transformOrigin = Y2(
        w,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && G2(h, o, a, u, !1));
}
const vd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  ey = () => ({ ...vd(), attrs: {} }),
  wd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ty(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const ny = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ry(e, t, n, r) {
  ty(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(ny.has(s) ? s : dd(s), t.attrs[s]);
}
const Go = {};
function K2(e) {
  Object.assign(Go, e);
}
function sy(e, { layout: t, layoutId: n }) {
  return (
    nr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Go[e] || e === "opacity"))
  );
}
function bd(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Ve(s[o]) ||
      (t.style && Ve(t.style[o])) ||
      sy(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function iy(e, t, n) {
  const r = bd(e, t, n);
  for (const s in e)
    if (Ve(e[s]) || Ve(t[s])) {
      const i =
        Qr.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function X2(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Uh = ["x", "y", "width", "height", "cx", "cy", "r"],
  q2 = {
    useVisualState: qx({
      scrapeMotionValuesFromProps: iy,
      createRenderState: ey,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (nr.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Uh.length; a++) {
            const u = Uh[a];
            e[u] !== t[u] && (o = !0);
          }
        o &&
          H.read(() => {
            (X2(n, r),
              H.render(() => {
                (yd(r, s, wd(n.tagName), e.transformTemplate), ry(n, r));
              }));
          });
      },
    }),
  },
  Q2 = {
    useVisualState: qx({
      scrapeMotionValuesFromProps: bd,
      createRenderState: vd,
    }),
  };
function oy(e, t, n) {
  for (const r in t) !Ve(t[r]) && !sy(r, n) && (e[r] = t[r]);
}
function Z2({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = vd();
    return (xd(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function J2(e, t) {
  const n = e.style || {},
    r = {};
  return (oy(r, n, e), Object.assign(r, Z2(e, t)), r);
}
function ek(e, t) {
  const n = {},
    r = J2(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function tk(e, t, n, r) {
  const s = k.useMemo(() => {
    const i = ey();
    return (
      yd(i, t, wd(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (oy(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
function nk(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const u = (hd(n) ? tk : ek)(r, i, o, n),
      c = x2(r, typeof n == "string", e),
      d = n !== k.Fragment ? { ...c, ...u, ref: s } : {},
      { children: f } = r,
      h = k.useMemo(() => (Ve(f) ? f.get() : f), [f]);
    return k.createElement(n, { ...d, children: h });
  };
}
function rk(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(hd(r) ? q2 : Q2),
      preloadedFeatures: e,
      useRender: nk(s),
      createVisualElement: t,
      Component: r,
    };
    return N2(o);
  };
}
function ay(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ca(e, t, n) {
  const r = e.getProps();
  return pd(r, t, n !== void 0 ? n : r.custom, e);
}
function Sd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const ly = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Qr,
]);
let ho;
function sk() {
  ho = void 0;
}
const Dt = {
  now: () => (
    ho === void 0 &&
      Dt.set(
        be.isProcessing || d2.useManualTiming
          ? be.timestamp
          : performance.now(),
      ),
    ho
  ),
  set: (e) => {
    ((ho = e), queueMicrotask(sk));
  },
};
function kd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
let Td = class {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (kd(this.subscriptions, t), () => jd(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function Nd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Wh = 30,
  ik = (e) => !isNaN(parseFloat(e)),
  Ms = { current: void 0 };
let ok = class {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = Dt.now();
        (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Dt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = ik(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Td());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            H.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return (Ms.current && Ms.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Dt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Wh
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Wh);
    return Nd(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
};
function Ct(e, t) {
  return new ok(e, t);
}
function ak(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ct(n));
}
function lk(e, t) {
  const n = Ca(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = D2(i[o]);
    ak(e, o, a);
  }
}
function uk(e) {
  return !!(Ve(e) && e.add);
}
function Vu(e, t) {
  const n = e.getValue("willChange");
  if (uk(n)) return n.add(t);
}
function uy(e) {
  return e.props[Yx];
}
function Pd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const cy = Pd(() => window.ScrollTimeline !== void 0);
let ck = class {
    constructor(t) {
      ((this.stop = () => this.runAll("stop")),
        (this.animations = t.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((t) => ("finished" in t ? t.finished : t)),
      );
    }
    getAll(t) {
      return this.animations[0][t];
    }
    setAll(t, n) {
      for (let r = 0; r < this.animations.length; r++)
        this.animations[r][t] = n;
    }
    attachTimeline(t, n) {
      const r = this.animations.map((s) => {
        if (cy() && s.attachTimeline) return s.attachTimeline(t);
        if (typeof n == "function") return n(s);
      });
      return () => {
        r.forEach((s, i) => {
          (s && s(), this.animations[i].stop());
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(t) {
      this.setAll("time", t);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(t) {
      this.setAll("speed", t);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let t = 0;
      for (let n = 0; n < this.animations.length; n++)
        t = Math.max(t, this.animations[n].duration);
      return t;
    }
    runAll(t) {
      this.animations.forEach((n) => n[t]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  },
  dk = class extends ck {
    then(t, n) {
      return Promise.all(this.animations).then(t).catch(n);
    }
  };
const zt = (e) => e * 1e3,
  Ut = (e) => e / 1e3;
function Cd(e) {
  return typeof e == "function";
}
function Hh(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Ed = (e) => Array.isArray(e) && typeof e[0] == "number",
  fk = { linearEasing: void 0 };
function hk(e, t) {
  const n = Pd(e);
  return () => {
    var r;
    return (r = fk[t]) !== null && r !== void 0 ? r : n();
  };
}
const Yo = hk(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Jn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  dy = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(Jn(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function fy(e) {
  return !!(
    (typeof e == "function" && Yo()) ||
    !e ||
    (typeof e == "string" && (e in Lu || Yo())) ||
    Ed(e) ||
    (Array.isArray(e) && e.every(fy))
  );
}
const gs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Lu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gs([0, 0.65, 0.55, 1]),
    circOut: gs([0.55, 0, 1, 0.45]),
    backIn: gs([0.31, 0.01, 0.66, -0.59]),
    backOut: gs([0.33, 1.53, 0.69, 0.99]),
  };
function hy(e, t) {
  if (e)
    return typeof e == "function" && Yo()
      ? dy(e, t)
      : Ed(e)
        ? gs(e)
        : Array.isArray(e)
          ? e.map((n) => hy(n, t) || Lu.easeOut)
          : Lu[e];
}
const py = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  pk = 1e-7,
  mk = 12;
function gk(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = py(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > pk && ++a < mk);
  return o;
}
function vi(e, t, n, r) {
  if (e === t && n === r) return Oe;
  const s = (i) => gk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : py(s(i), t, r));
}
const my = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  gy = (e) => (t) => 1 - e(1 - t),
  xy = vi(0.33, 1.53, 0.69, 0.99),
  Ad = gy(xy),
  yy = my(Ad),
  vy = (e) =>
    (e *= 2) < 1 ? 0.5 * Ad(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Md = (e) => 1 - Math.sin(Math.acos(e)),
  wy = gy(Md),
  by = my(Md),
  Sy = (e) => /^0[^.\s]+$/u.test(e);
function xk(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Sy(e)
      : !0;
}
const Ds = (e) => Math.round(e * 1e5) / 1e5,
  Dd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function yk(e) {
  return e == null;
}
const vk =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rd = (e, t) => (n) =>
    !!(
      (typeof n == "string" && vk.test(n) && n.startsWith(e)) ||
      (t && !yk(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ky = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(Dd);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  wk = (e) => Lt(0, 255, e),
  ll = { ...Zr, transform: (e) => Math.round(wk(e)) },
  zn = {
    test: Rd("rgb", "red"),
    parse: ky("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ll.transform(e) +
      ", " +
      ll.transform(t) +
      ", " +
      ll.transform(n) +
      ", " +
      Ds(ii.transform(r)) +
      ")",
  };
function bk(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const $u = { test: Rd("#"), parse: bk, transform: zn.transform },
  vr = {
    test: Rd("hsl", "hue"),
    parse: ky("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Mt.transform(Ds(t)) +
      ", " +
      Mt.transform(Ds(n)) +
      ", " +
      Ds(ii.transform(r)) +
      ")",
  },
  Me = {
    test: (e) => zn.test(e) || $u.test(e) || vr.test(e),
    parse: (e) =>
      zn.test(e) ? zn.parse(e) : vr.test(e) ? vr.parse(e) : $u.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? zn.transform(e)
          : vr.transform(e),
  },
  Sk =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function kk(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Dd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Sk)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const jy = "number",
  Ty = "color",
  jk = "var",
  Tk = "var(",
  Gh = "${}",
  Nk =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      Nk,
      (u) => (
        Me.test(u)
          ? (r.color.push(i), s.push(Ty), n.push(Me.parse(u)))
          : u.startsWith(Tk)
            ? (r.var.push(i), s.push(jk), n.push(u))
            : (r.number.push(i), s.push(jy), n.push(parseFloat(u))),
        ++i,
        Gh
      ),
    )
    .split(Gh);
  return { values: n, split: a, indexes: r, types: s };
}
function Ny(e) {
  return oi(e).values;
}
function Py(e) {
  const { split: t, types: n } = oi(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === jy
          ? (i += Ds(s[o]))
          : a === Ty
            ? (i += Me.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const Pk = (e) => (typeof e == "number" ? 0 : e);
function Ck(e) {
  const t = Ny(e);
  return Py(e)(t.map(Pk));
}
const Sn = {
    test: kk,
    parse: Ny,
    createTransformer: Py,
    getAnimatableNone: Ck,
  },
  Ek = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ak(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Dd) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = Ek.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const Mk = /\b([a-z-]*)\(.*?\)/gu,
  Iu = {
    ...Sn,
    getAnimatableNone: (e) => {
      const t = e.match(Mk);
      return t ? t.map(Ak).join(" ") : e;
    },
  },
  Dk = {
    ...gd,
    color: Me,
    backgroundColor: Me,
    outlineColor: Me,
    fill: Me,
    stroke: Me,
    borderColor: Me,
    borderTopColor: Me,
    borderRightColor: Me,
    borderBottomColor: Me,
    borderLeftColor: Me,
    filter: Iu,
    WebkitFilter: Iu,
  },
  Vd = (e) => Dk[e];
function Cy(e, t) {
  let n = Vd(e);
  return (
    n !== Iu && (n = Sn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Rk = new Set(["auto", "none", "0"]);
function Vk(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s;) {
    const i = e[r];
    (typeof i == "string" && !Rk.has(i) && oi(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = Cy(n, s);
}
const Yh = (e) => e === Zr || e === I,
  Kh = (e, t) => parseFloat(e.split(", ")[t]),
  Xh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Kh(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Kh(i[1], e) : 0;
      }
    },
  Lk = new Set(["x", "y", "z"]),
  $k = Qr.filter((e) => !Lk.has(e));
function Ik(e) {
  const t = [];
  return (
    $k.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ur = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Xh(4, 13),
  y: Xh(5, 14),
};
Ur.translateX = Ur.x;
Ur.translateY = Ur.y;
const Gn = new Set();
let Fu = !1,
  Ou = !1;
function Ey() {
  if (Ou) {
    const e = Array.from(Gn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = Ik(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Ou = !1), (Fu = !1), Gn.forEach((e) => e.complete()), Gn.clear());
}
function Ay() {
  Gn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Ou = !0));
  });
}
function Fk() {
  (Ay(), Ey());
}
let Ld = class {
  constructor(t, n, r, s, i, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (Gn.add(this), Fu || ((Fu = !0), H.read(Ay), H.resolveKeyframes(Ey)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const u = r.readValue(n, a);
            u != null && (t[0] = u);
          }
          (t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Gn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Gn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
const My = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Ok = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Bk(e) {
  const t = Ok.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function Dy(e, t, n = 1) {
  const [r, s] = Bk(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return My(o) ? parseFloat(o) : o;
  }
  return md(s) ? Dy(s, t, n + 1) : s;
}
const Ry = (e) => (t) => t.test(e),
  _k = { test: (e) => e === "auto", parse: (e) => e },
  Vy = [Zr, I, Mt, nn, F2, I2, _k],
  qh = (e) => Vy.find(Ry(e));
let Ly = class extends Ld {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (typeof c == "string" && ((c = c.trim()), md(c))) {
        const d = Dy(c, n.current);
        (d !== void 0 && (t[u] = d),
          u === t.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !ly.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = qh(s),
      a = qh(i);
    if (o !== a)
      if (Yh(o) && Yh(a))
        for (let u = 0; u < t.length; u++) {
          const c = t[u];
          typeof c == "string" && (t[u] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) xk(t[s]) && r.push(s);
    r.length && Vk(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ur[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    ((s[o] = Ur[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([u, c]) => {
          n.getValue(u).set(c);
        }),
      this.resolveNoneKeyframes());
  }
};
const Qh = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Sn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function zk(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Uk(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Qh(s, t),
    a = Qh(i, t);
  return !o || !a ? !1 : zk(e) || ((n === "spring" || Cd(n)) && r);
}
const Wk = (e) => e !== null;
function Ea(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Wk),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const Hk = 40;
let $y = class {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Dt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Hk
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && Fk(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Dt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: u,
      isGenerator: c,
    } = this.options;
    if (!c && !Uk(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        (u && u(Ea(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
};
const Bu = 2e4;
function Iy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Bu;) ((t += n), (r = e.next(t)));
  return t >= Bu ? 1 / 0 : t;
}
const re = (e, t, n) => e + (t - e) * n;
function ul(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Gk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - a;
    ((s = ul(u, a, e + 1 / 3)), (i = ul(u, a, e)), (o = ul(u, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ko(e, t) {
  return (n) => (n > 0 ? t : e);
}
const cl = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  Yk = [$u, zn, vr],
  Kk = (e) => Yk.find((t) => t.test(e));
function Zh(e) {
  const t = Kk(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === vr && (n = Gk(n)), n);
}
const Jh = (e, t) => {
    const n = Zh(e),
      r = Zh(t);
    if (!n || !r) return Ko(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = cl(n.red, r.red, i)),
      (s.green = cl(n.green, r.green, i)),
      (s.blue = cl(n.blue, r.blue, i)),
      (s.alpha = re(n.alpha, r.alpha, i)),
      zn.transform(s)
    );
  },
  Xk = (e, t) => (n) => t(e(n)),
  wi = (...e) => e.reduce(Xk),
  _u = new Set(["none", "hidden"]);
function qk(e, t) {
  return _u.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Qk(e, t) {
  return (n) => re(e, t, n);
}
function $d(e) {
  return typeof e == "number"
    ? Qk
    : typeof e == "string"
      ? md(e)
        ? Ko
        : Me.test(e)
          ? Jh
          : ej
      : Array.isArray(e)
        ? Fy
        : typeof e == "object"
          ? Me.test(e)
            ? Jh
            : Zk
          : Ko;
}
function Fy(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => $d(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Zk(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = $d(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Jk(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[i] = u), s[o]++);
  }
  return r;
}
const ej = (e, t) => {
  const n = Sn.createTransformer(t),
    r = oi(e),
    s = oi(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (_u.has(e) && !s.values.length) || (_u.has(t) && !r.values.length)
      ? qk(e, t)
      : wi(Fy(Jk(r, s), s.values), n)
    : Ko(e, t);
};
function Oy(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? re(e, t, n)
    : $d(e)(e, t);
}
const tj = 5;
function By(e, t, n) {
  const r = Math.max(t - tj, 0);
  return Nd(n - e(r), t - r);
}
const le = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  dl = 0.001;
function nj({
  duration: e = le.duration,
  bounce: t = le.bounce,
  velocity: n = le.velocity,
  mass: r = le.mass,
}) {
  let s,
    i,
    o = 1 - t;
  ((o = Lt(le.minDamping, le.maxDamping, o)),
    (e = Lt(le.minDuration, le.maxDuration, Ut(e))),
    o < 1
      ? ((s = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            x = zu(c, o),
            w = Math.exp(-f);
          return dl - (h / x) * w;
        }),
        (i = (c) => {
          const f = c * o * e,
            h = f * n + n,
            x = Math.pow(o, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-f),
            v = zu(Math.pow(c, 2), o);
          return ((-s(c) + dl > 0 ? -1 : 1) * ((h - x) * w)) / v;
        }))
      : ((s = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -dl + d * f;
        }),
        (i = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        })));
  const a = 5 / e,
    u = sj(s, i, a);
  if (((e = zt(e)), isNaN(u)))
    return { stiffness: le.stiffness, damping: le.damping, duration: e };
  {
    const c = Math.pow(u, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const rj = 12;
function sj(e, t, n) {
  let r = n;
  for (let s = 1; s < rj; s++) r = r - e(r) / t(r);
  return r;
}
function zu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ij = ["duration", "bounce"],
  oj = ["stiffness", "damping", "mass"];
function ep(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function aj(e) {
  let t = {
    velocity: le.velocity,
    stiffness: le.stiffness,
    damping: le.damping,
    mass: le.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ep(e, oj) && ep(e, ij))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Lt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: le.mass, stiffness: s, damping: i };
    } else {
      const n = nj(e);
      ((t = { ...t, ...n, mass: le.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function _y(e = le.visualDuration, t = le.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: u,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: x,
    } = aj({ ...n, velocity: -Ut(n.velocity || 0) }),
    w = h || 0,
    v = c / (2 * Math.sqrt(u * d)),
    y = o - i,
    p = Ut(Math.sqrt(u / d)),
    m = Math.abs(y) < 5;
  (r || (r = m ? le.restSpeed.granular : le.restSpeed.default),
    s || (s = m ? le.restDelta.granular : le.restDelta.default));
  let g;
  if (v < 1) {
    const S = zu(p, v);
    g = (j) => {
      const N = Math.exp(-v * p * j);
      return (
        o - N * (((w + v * p * y) / S) * Math.sin(S * j) + y * Math.cos(S * j))
      );
    };
  } else if (v === 1) g = (S) => o - Math.exp(-p * S) * (y + (w + p * y) * S);
  else {
    const S = p * Math.sqrt(v * v - 1);
    g = (j) => {
      const N = Math.exp(-v * p * j),
        T = Math.min(S * j, 300);
      return (
        o - (N * ((w + v * p * y) * Math.sinh(T) + S * y * Math.cosh(T))) / S
      );
    };
  }
  const b = {
    calculatedDuration: (x && f) || null,
    next: (S) => {
      const j = g(S);
      if (x) a.done = S >= f;
      else {
        let N = 0;
        v < 1 && (N = S === 0 ? zt(w) : By(g, S, j));
        const T = Math.abs(N) <= r,
          R = Math.abs(o - j) <= s;
        a.done = T && R;
      }
      return ((a.value = a.done ? o : j), a);
    },
    toString: () => {
      const S = Math.min(Iy(b), Bu),
        j = dy((N) => b.next(S * N).value, S, 30);
      return S + "ms " + j;
    },
  };
  return b;
}
function tp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: u,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    x = (T) => (a !== void 0 && T < a) || (u !== void 0 && T > u),
    w = (T) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - T) < Math.abs(u - T)
          ? a
          : u;
  let v = n * t;
  const y = f + v,
    p = o === void 0 ? y : o(y);
  p !== y && (v = p - f);
  const m = (T) => -v * Math.exp(-T / r),
    g = (T) => p + m(T),
    b = (T) => {
      const R = m(T),
        M = g(T);
      ((h.done = Math.abs(R) <= c), (h.value = h.done ? p : M));
    };
  let S, j;
  const N = (T) => {
    x(h.value) &&
      ((S = T),
      (j = _y({
        keyframes: [h.value, w(h.value)],
        velocity: By(g, T, h.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !j && S === void 0 && ((R = !0), b(T), N(T)),
          S !== void 0 && T >= S ? j.next(T - S) : (!R && b(T), h)
        );
      },
    }
  );
}
const lj = vi(0.42, 0, 1, 1),
  uj = vi(0, 0, 0.58, 1),
  zy = vi(0.42, 0, 0.58, 1),
  cj = (e) => Array.isArray(e) && typeof e[0] != "number",
  dj = {
    linear: Oe,
    easeIn: lj,
    easeInOut: zy,
    easeOut: uj,
    circIn: Md,
    circInOut: by,
    circOut: wy,
    backIn: Ad,
    backInOut: yy,
    backOut: xy,
    anticipate: vy,
  },
  np = (e) => {
    if (Ed(e)) {
      zx(e.length === 4);
      const [t, n, r, s] = e;
      return vi(t, n, r, s);
    } else if (typeof e == "string") return dj[e];
    return e;
  };
function fj(e, t, n) {
  const r = [],
    s = n || Oy,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || Oe : t;
      a = wi(u, a);
    }
    r.push(a);
  }
  return r;
}
function Id(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((zx(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = fj(t, r, s),
    u = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (u > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = Jn(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => c(Lt(e[0], e[i - 1], d)) : c;
}
function hj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Jn(0, t, r);
    e.push(re(n, 1, s));
  }
}
function Uy(e) {
  const t = [0];
  return (hj(t, e.length - 1), t);
}
function pj(e, t) {
  return e.map((n) => n * t);
}
function mj(e, t) {
  return e.map(() => t || zy).splice(0, e.length - 1);
}
function Xo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = cj(r) ? r.map(np) : np(r),
    i = { done: !1, value: t[0] },
    o = pj(n && n.length === t.length ? n : Uy(t), e),
    a = Id(o, t, { ease: Array.isArray(s) ? s : mj(t, s) });
  return {
    calculatedDuration: e,
    next: (u) => ((i.value = a(u)), (i.done = u >= e), i),
  };
}
const gj = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => H.update(t, !0),
      stop: () => jt(t),
      now: () => (be.isProcessing ? be.timestamp : Dt.now()),
    };
  },
  xj = { decay: tp, inertia: tp, tween: Xo, keyframes: Xo, spring: _y },
  yj = (e) => e / 100;
let Fd = class extends $y {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: u } = this.options;
        u && u();
      }));
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || Ld,
      a = (u, c) => this.onKeyframesResolved(u, c);
    ((this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Cd(n) ? n : xj[n] || Xo;
    let u, c;
    a !== Xo &&
      typeof t[0] != "number" &&
      ((u = wi(yj, Oy(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = Iy(d)));
    const { calculatedDuration: f } = d,
      h = f + s,
      x = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: x,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: u,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: h,
      repeat: x,
      repeatType: w,
      repeatDelay: v,
      onUpdate: y,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const p = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > d;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let g = this.currentTime,
      b = i;
    if (x) {
      const T = Math.min(this.currentTime, d) / f;
      let R = Math.floor(T),
        M = T % 1;
      (!M && T >= 1 && (M = 1),
        M === 1 && R--,
        (R = Math.min(R, x + 1)),
        !!(R % 2) &&
          (w === "reverse"
            ? ((M = 1 - M), v && (M -= v / f))
            : w === "mirror" && (b = o)),
        (g = Lt(0, 1, M) * f));
    }
    const S = m ? { done: !1, value: u[0] } : b.next(g);
    a && (S.value = a(S.value));
    let { done: j } = S;
    !m &&
      c !== null &&
      (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      N && s !== void 0 && (S.value = Ea(u, this.options, s)),
      y && y(S.value),
      N && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ut(t.calculatedDuration) : 0;
  }
  get time() {
    return Ut(this.currentTime);
  }
  set time(t) {
    ((t = zt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = Ut(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = gj, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((i) => this.tick(i))), n && n());
    const s = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = s)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
};
const vj = new Set(["opacity", "clipPath", "filter", "transform"]);
function wj(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: u,
  } = {},
) {
  const c = { [t]: n };
  u && (c.offset = u);
  const d = hy(a, s);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const bj = Pd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  qo = 10,
  Sj = 2e4;
function kj(e) {
  return Cd(e.type) || e.type === "spring" || !fy(e.ease);
}
function jj(e, t) {
  const n = new Fd({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < Sj;) ((r = n.sample(i)), s.push(r.value), (i += qo));
  return { times: void 0, keyframes: s, duration: i - qo, ease: "linear" };
}
const Wy = { anticipate: vy, backInOut: yy, circInOut: by };
function Tj(e) {
  return e in Wy;
}
let rp = class extends $y {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    ((this.resolver = new Ly(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && Yo() && Tj(i) && (i = Wy[i]), kj(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: h,
          motionValue: x,
          element: w,
          ...v
        } = this.options,
        y = jj(t, v);
      ((t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (s = y.times),
        (i = y.ease),
        (o = "keyframes"));
    }
    const d = wj(a.owner.current, u, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Hh(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(Ea(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Ut(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Ut(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = zt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Oe;
      const { animation: r } = n;
      Hh(r, t);
    }
    return Oe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: d,
          onComplete: f,
          element: h,
          ...x
        } = this.options,
        w = new Fd({
          ...x,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        v = zt(this.time);
      c.setWithVelocity(w.sample(v - qo).value, w.sample(v).value, qo);
    }
    const { onStop: u } = this.options;
    (u && u(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: u, transformTemplate: c } = n.owner.getProps();
    return (
      bj() &&
      r &&
      vj.has(r) &&
      !u &&
      !c &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
};
const Nj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Pj = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Cj = { type: "keyframes", duration: 0.8 },
  Ej = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Aj = (e, { keyframes: t }) =>
    t.length > 2
      ? Cj
      : nr.has(e)
        ? e.startsWith("scale")
          ? Pj(t[1])
          : Nj
        : Ej;
function Mj({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: u,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Od =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Sd(r, e) || {},
      u = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - zt(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        (t.set(h), a.onUpdate && a.onUpdate(h));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    (Mj(a) || (d = { ...d, ...Aj(e, d) }),
      d.duration && (d.duration = zt(d.duration)),
      d.repeatDelay && (d.repeatDelay = zt(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const h = Ea(d.keyframes, a);
      if (h !== void 0)
        return (
          H.update(() => {
            (d.onUpdate(h), d.onComplete());
          }),
          new dk([])
        );
    }
    return !i && rp.supports(d) ? new rp(d) : new Fd(d);
  };
function Dj({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Hy(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...u } = t;
  r && (o = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in u) {
    const h = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null,
      ),
      x = u[f];
    if (x === void 0 || (d && Dj(d, f))) continue;
    const w = { delay: n, ...Sd(o || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = uy(e);
      if (p) {
        const m = window.MotionHandoffAnimation(p, f, H);
        m !== null && ((w.startTime = m), (v = !0));
      }
    }
    (Vu(e, f),
      h.start(
        Od(f, h, x, e.shouldReduceMotion && ly.has(f) ? { type: !1 } : w, e, v),
      ));
    const y = h.animation;
    y && c.push(y);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        H.update(() => {
          a && lk(e, a);
        });
      }),
    c
  );
}
function Uu(e, t, n = {}) {
  var r;
  const s = Ca(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Hy(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return Rj(e, t, d + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: u } = i;
  if (u) {
    const [c, d] = u === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => d());
  } else return Promise.all([o(), a(n.delay)]);
}
function Rj(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    u = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(Vj)
      .forEach((c, d) => {
        (c.notify("AnimationStart", t),
          o.push(
            Uu(c, t, { ...i, delay: n + u(d) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function Vj(e, t) {
  return e.sortNodePosition(t);
}
function Lj(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Uu(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Uu(e, t, n);
  else {
    const s = typeof t == "function" ? Ca(e, t, n.custom) : t;
    r = Promise.all(Hy(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const $j = cd.length;
function Gy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Gy(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < $j; n++) {
    const r = cd[n],
      s = e.props[r];
    (si(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const Ij = [...ud].reverse(),
  Fj = ud.length;
function Oj(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Lj(e, n, r)));
}
function Bj(e) {
  let t = Oj(e),
    n = sp(),
    r = !0;
  const s = (u) => (c, d) => {
    var f;
    const h = Ca(
      e,
      d,
      u === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: x, transitionEnd: w, ...v } = h;
      c = { ...c, ...v, ...w };
    }
    return c;
  };
  function i(u) {
    t = u(e);
  }
  function o(u) {
    const { props: c } = e,
      d = Gy(e.parent) || {},
      f = [],
      h = new Set();
    let x = {},
      w = 1 / 0;
    for (let y = 0; y < Fj; y++) {
      const p = Ij[y],
        m = n[p],
        g = c[p] !== void 0 ? c[p] : d[p],
        b = si(g),
        S = p === u ? m.isActive : null;
      S === !1 && (w = y);
      let j = g === d[p] && g !== c[p] && b;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
        (m.protectedKeys = { ...x }),
        (!m.isActive && S === null) ||
          (!g && !m.prevProp) ||
          Na(g) ||
          typeof g == "boolean")
      )
        continue;
      const N = _j(m.prevProp, g);
      let T = N || (p === u && m.isActive && !j && b) || (y > w && b),
        R = !1;
      const M = Array.isArray(g) ? g : [g];
      let z = M.reduce(s(p), {});
      S === !1 && (z = {});
      const { prevResolvedValues: ae = {} } = m,
        ve = { ...ae, ...z },
        ze = (_) => {
          ((T = !0),
            h.has(_) && ((R = !0), h.delete(_)),
            (m.needsAnimating[_] = !0));
          const P = e.getValue(_);
          P && (P.liveStyle = !1);
        };
      for (const _ in ve) {
        const P = z[_],
          L = ae[_];
        if (x.hasOwnProperty(_)) continue;
        let $ = !1;
        (Ru(P) && Ru(L) ? ($ = !ay(P, L)) : ($ = P !== L),
          $
            ? P != null
              ? ze(_)
              : h.add(_)
            : P !== void 0 && h.has(_)
              ? ze(_)
              : (m.protectedKeys[_] = !0));
      }
      ((m.prevProp = g),
        (m.prevResolvedValues = z),
        m.isActive && (x = { ...x, ...z }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(j && N) || R) &&
          f.push(...M.map((_) => ({ animation: _, options: { type: p } }))));
    }
    if (h.size) {
      const y = {};
      (h.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        (g && (g.liveStyle = !0), (y[p] = m ?? null));
      }),
        f.push({ animation: y }));
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var x;
        return (x = h.animationState) === null || x === void 0
          ? void 0
          : x.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = o(u);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      ((n = sp()), (r = !0));
    },
  };
}
function _j(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ay(t, e) : !1;
}
function Mn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sp() {
  return {
    animate: Mn(!0),
    whileInView: Mn(),
    whileHover: Mn(),
    whileTap: Mn(),
    whileDrag: Mn(),
    whileFocus: Mn(),
    exit: Mn(),
  };
}
let Cn = class {
    constructor(t) {
      ((this.isMounted = !1), (this.node = t));
    }
    update() {}
  },
  zj = class extends Cn {
    constructor(t) {
      (super(t), t.animationState || (t.animationState = Bj(t)));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      Na(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(),
        { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t;
      (this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this));
    }
  },
  Uj = 0,
  Wj = class extends Cn {
    constructor() {
      (super(...arguments), (this.id = Uj++));
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r) return;
      const s = this.node.animationState.setActive("exit", !t);
      n && !t && s.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {}
  };
const Hj = { animation: { Feature: zj }, exit: { Feature: Wj } },
  gt = { x: !1, y: !1 };
function Yy() {
  return gt.x || gt.y;
}
function Gj(e) {
  return e === "x" || e === "y"
    ? gt[e]
      ? null
      : ((gt[e] = !0),
        () => {
          gt[e] = !1;
        })
    : gt.x || gt.y
      ? null
      : ((gt.x = gt.y = !0),
        () => {
          gt.x = gt.y = !1;
        });
}
const Bd = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ai(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function bi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Yj = (e) => (t) => Bd(t) && e(t, bi(t));
function Rs(e, t, n, r) {
  return ai(e, t, Yj(n), r);
}
const ip = (e, t) => Math.abs(e - t);
function Kj(e, t) {
  const n = ip(e.x, t.x),
    r = ip(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
let Ky = class {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = hl(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          x = Kj(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !x) return;
        const { point: w } = f,
          { timestamp: v } = be;
        this.history.push({ ...w, timestamp: v });
        const { onStart: y, onMove: p } = this.handlers;
        (h ||
          (y && y(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, h) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = fl(h, this.transformPagePoint)),
          H.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: x, onSessionEnd: w, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = hl(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : fl(h, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && x && x(f, y), w && w(f, y));
      }),
      !Bd(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window));
    const o = bi(t),
      a = fl(o, this.transformPagePoint),
      { point: u } = a,
      { timestamp: c } = be;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    (d && d(t, hl(a, this.history)),
      (this.removeListeners = wi(
        Rs(this.contextWindow, "pointermove", this.handlePointerMove),
        Rs(this.contextWindow, "pointerup", this.handlePointerUp),
        Rs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), jt(this.updatePoint));
  }
};
function fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function op(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hl({ point: e }, t) {
  return {
    point: e,
    delta: op(e, Xy(t)),
    offset: op(e, Xj(t)),
    velocity: qj(t, 0.1),
  };
}
function Xj(e) {
  return e[0];
}
function Xy(e) {
  return e[e.length - 1];
}
function qj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = Xy(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > zt(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Ut(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const qy = 1e-4,
  Qj = 1 - qy,
  Zj = 1 + qy,
  Qy = 0.01,
  Jj = 0 - Qy,
  eT = 0 + Qy;
function tt(e) {
  return e.max - e.min;
}
function tT(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ap(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = re(t.min, t.max, e.origin)),
    (e.scale = tt(n) / tt(t)),
    (e.translate = re(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Qj && e.scale <= Zj) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Jj && e.translate <= eT) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Vs(e, t, n, r) {
  (ap(e.x, t.x, n.x, r ? r.originX : void 0),
    ap(e.y, t.y, n.y, r ? r.originY : void 0));
}
function lp(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + tt(t)));
}
function nT(e, t, n) {
  (lp(e.x, t.x, n.x), lp(e.y, t.y, n.y));
}
function up(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + tt(t)));
}
function Ls(e, t, n) {
  (up(e.x, t.x, n.x), up(e.y, t.y, n.y));
}
function rT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? re(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? re(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function cp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function sT(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: cp(e.x, n, s), y: cp(e.y, t, r) };
}
function dp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function iT(e, t) {
  return { x: dp(e.x, t.x), y: dp(e.y, t.y) };
}
function oT(e, t) {
  let n = 0.5;
  const r = tt(e),
    s = tt(t);
  return (
    s > r
      ? (n = Jn(t.min, t.max - r, e.min))
      : r > s && (n = Jn(e.min, e.max - s, t.min)),
    Lt(0, 1, n)
  );
}
function aT(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Wu = 0.35;
function lT(e = Wu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Wu),
    { x: fp(e, "left", "right"), y: fp(e, "top", "bottom") }
  );
}
function fp(e, t, n) {
  return { min: hp(e, t), max: hp(e, n) };
}
function hp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const pp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  wr = () => ({ x: pp(), y: pp() }),
  mp = () => ({ min: 0, max: 0 }),
  de = () => ({ x: mp(), y: mp() });
function at(e) {
  return [e("x"), e("y")];
}
function Zy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function uT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cT(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function pl(e) {
  return e === void 0 || e === 1;
}
function Hu({ scale: e, scaleX: t, scaleY: n }) {
  return !pl(e) || !pl(t) || !pl(n);
}
function Ln(e) {
  return (
    Hu(e) ||
    Jy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Jy(e) {
  return gp(e.x) || gp(e.y);
}
function gp(e) {
  return e && e !== "0%";
}
function Qo(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function xp(e, t, n, r, s) {
  return (s !== void 0 && (e = Qo(e, s, r)), Qo(e, n, r) + t);
}
function Gu(e, t = 0, n = 1, r, s) {
  ((e.min = xp(e.min, t, n, r, s)), (e.max = xp(e.max, t, n, r, s)));
}
function ev(e, { x: t, y: n }) {
  (Gu(e.x, t.translate, t.scale, t.originPoint),
    Gu(e.y, n.translate, n.scale, n.originPoint));
}
const yp = 0.999999999999,
  vp = 1.0000000000001;
function dT(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: u } = i.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Sr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ev(e, o)),
      r && Ln(i.latestValues) && Sr(e, i.latestValues));
  }
  (t.x < vp && t.x > yp && (t.x = 1), t.y < vp && t.y > yp && (t.y = 1));
}
function br(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function wp(e, t, n, r, s = 0.5) {
  const i = re(e.min, e.max, s);
  Gu(e, t, n, i, r);
}
function Sr(e, t) {
  (wp(e.x, t.x, t.scaleX, t.scale, t.originX),
    wp(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function tv(e, t) {
  return Zy(cT(e.getBoundingClientRect(), t));
}
function fT(e, t, n) {
  const r = tv(e, n),
    { scroll: s } = t;
  return (s && (br(r.x, s.offset.x), br(r.y, s.offset.y)), r);
}
const nv = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  hT = new WeakMap();
let pT = class {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = de()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(bi(d).point));
      },
      i = (d, f) => {
        const { drag: h, dragPropagation: x, onDragStart: w } = this.getProps();
        if (
          h &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Gj(h)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          at((y) => {
            let p = this.getAxisMotionValue(y).get() || 0;
            if (Mt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[y];
                g && (p = tt(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[y] = p;
          }),
          w && H.postRender(() => w(d, f)),
          Vu(this.visualElement, "transform"));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: x,
          onDirectionLock: w,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: y } = f;
        if (x && this.currentDirection === null) {
          ((this.currentDirection = mT(y)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, y),
          this.updateAxis("y", f.point, y),
          this.visualElement.render(),
          v && v(d, f));
      },
      a = (d, f) => this.stop(d, f),
      u = () =>
        at((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Ky(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: nv(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && H.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Yi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = rT(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    (n && yr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = sT(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = lT(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        at((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = aT(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !yr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = fT(r, s.root, this.visualElement.getTransformPagePoint());
    let o = iT(s.layout.layoutBox, i);
    if (n) {
      const a = n(uT(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Zy(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      u = this.constraints || {},
      c = at((d) => {
        if (!Yi(d, n, this.currentDirection)) return;
        let f = (u && u[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          x = s ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(d, w);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Vu(this.visualElement, t),
      r.start(Od(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    at((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    at((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    at((n) => {
      const { drag: r } = this.getProps();
      if (!Yi(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - re(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!yr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    at((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        s[o] = oT({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      at((o) => {
        if (!Yi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: u, max: c } = this.constraints[o];
        a.set(re(u, c, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    hT.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Rs(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        yr(u) && u.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      H.read(r));
    const o = ai(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (at((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = Wu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
};
function Yi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function mT(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
let gT = class extends Cn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Oe),
      (this.removeListeners = Oe),
      (this.controls = new pT(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Oe));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
};
const bp = (e) => (t, n) => {
  e && H.postRender(() => e(t, n));
};
let xT = class extends Cn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Oe));
  }
  onPointerDown(t) {
    this.session = new Ky(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: nv(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: bp(t),
      onStart: bp(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && H.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rs(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
};
const po = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const us = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (I.test(e)) e = parseFloat(e);
        else return e;
      const n = Sp(e, t.target.x),
        r = Sp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  yT = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Sn.parse(e);
      if (s.length > 5) return r;
      const i = Sn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        u = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= u));
      const c = re(a, u, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
let vT = class extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (K2(wT),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (po.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              H.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      fd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
};
function rv(e) {
  const [t, n] = _x(),
    r = k.useContext(ad);
  return l.jsx(vT, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(Kx),
    isPresent: t,
    safeToRemove: n,
  });
}
const wT = {
  borderRadius: {
    ...us,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: us,
  borderTopRightRadius: us,
  borderBottomLeftRadius: us,
  borderBottomRightRadius: us,
  boxShadow: yT,
};
function bT(e, t, n) {
  const r = Ve(e) ? e : Ct(e);
  return (r.start(Od("", r, t, n)), r.animation);
}
function ST(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const kT = (e, t) => e.depth - t.depth;
let jT = class {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (kd(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (jd(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(kT),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
};
function TT(e, t) {
  const n = Dt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (jt(r), e(i - t));
    };
  return (H.read(r, !0), () => jt(r));
}
const sv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  NT = sv.length,
  kp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  jp = (e) => typeof e == "number" || I.test(e);
function PT(e, t, n, r, s, i) {
  s
    ? ((e.opacity = re(0, n.opacity !== void 0 ? n.opacity : 1, CT(r))),
      (e.opacityExit = re(t.opacity !== void 0 ? t.opacity : 1, 0, ET(r))))
    : i &&
      (e.opacity = re(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < NT; o++) {
    const a = `border${sv[o]}Radius`;
    let u = Tp(t, a),
      c = Tp(n, a);
    if (u === void 0 && c === void 0) continue;
    (u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || jp(u) === jp(c)
        ? ((e[a] = Math.max(re(kp(u), kp(c), r), 0)),
          (Mt.test(c) || Mt.test(u)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = re(t.rotate || 0, n.rotate || 0, r));
}
function Tp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const CT = iv(0, 0.5, wy),
  ET = iv(0.5, 0.95, Oe);
function iv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jn(e, t, r)));
}
function Np(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function it(e, t) {
  (Np(e.x, t.x), Np(e.y, t.y));
}
function Pp(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Cp(e, t, n, r, s) {
  return (
    (e -= t),
    (e = Qo(e, 1 / n, r)),
    s !== void 0 && (e = Qo(e, 1 / s, r)),
    e
  );
}
function AT(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Mt.test(t) &&
      ((t = parseFloat(t)), (t = re(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = re(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Cp(e.min, t, n, a, s)),
    (e.max = Cp(e.max, t, n, a, s)));
}
function Ep(e, t, [n, r, s], i, o) {
  AT(e, t[n], t[r], t[s], t.scale, i, o);
}
const MT = ["x", "scaleX", "originX"],
  DT = ["y", "scaleY", "originY"];
function Ap(e, t, n, r) {
  (Ep(e.x, t, MT, n ? n.x : void 0, r ? r.x : void 0),
    Ep(e.y, t, DT, n ? n.y : void 0, r ? r.y : void 0));
}
function Mp(e) {
  return e.translate === 0 && e.scale === 1;
}
function ov(e) {
  return Mp(e.x) && Mp(e.y);
}
function Dp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function RT(e, t) {
  return Dp(e.x, t.x) && Dp(e.y, t.y);
}
function Rp(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function av(e, t) {
  return Rp(e.x, t.x) && Rp(e.y, t.y);
}
function Vp(e) {
  return tt(e.x) / tt(e.y);
}
function Lp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
let VT = class {
  constructor() {
    this.members = [];
  }
  add(t) {
    (kd(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (jd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function LT(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: x,
      skewY: w,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      x && (r += `skewX(${x}deg) `),
      w && (r += `skewY(${w}deg) `));
  }
  const a = e.x.scale * t.x,
    u = e.y.scale * t.y;
  return ((a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none");
}
const $n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  xs = typeof window < "u" && window.MotionDebug !== void 0,
  ml = ["", "X", "Y", "Z"],
  $T = { visibility: "hidden" },
  $p = 1e3;
let IT = 0;
function gl(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function lv(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = uy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", H, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && lv(r);
}
function uv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = IT++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            xs &&
              ($n.totalNodes =
                $n.resolvedTargetDeltas =
                $n.recalculatedProjection =
                  0),
            this.nodes.forEach(BT),
            this.nodes.forEach(HT),
            this.nodes.forEach(GT),
            this.nodes.forEach(_T),
            xs && window.MotionDebug.record($n));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jT());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Td()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = ST(o)), (this.instance = o));
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || u) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = TT(h, 250)),
            po.hasAnimatedSinceResize &&
              ((po.hasAnimatedSinceResize = !1), this.nodes.forEach(Fp)));
        });
      }
      (u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          d &&
          (u || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: x,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || QT,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: p } =
                  d.getProps(),
                m = !this.targetLayout || !av(this.targetLayout, w) || x,
                g = !h && x;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g));
                const b = { ...Sd(v, "layout"), onPlay: y, onComplete: p };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b));
              } else
                (h || Fp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = w;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        jt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(YT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Ip));
        return;
      }
      (this.isUpdating || this.nodes.forEach(UT),
        (this.isUpdating = !1),
        this.nodes.forEach(WT),
        this.nodes.forEach(FT),
        this.nodes.forEach(OT),
        this.clearAllSnapshots());
      const a = Dt.now();
      ((be.delta = Lt(0, 1e3 / 60, a - be.timestamp)),
        (be.timestamp = a),
        (be.isProcessing = !0),
        al.update.process(be),
        al.preRender.process(be),
        al.render.process(be),
        (be.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), fd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(zT), this.sharedNodes.forEach(KT));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = de()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !ov(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (a || Ln(this.latestValues) || d) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        o && (u = this.removeTransform(u)),
        ZT(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return de();
      const u = a.measureViewportBox();
      if (!(
        ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
        this.path.some(JT)
      )) {
        const { scroll: d } = this.root;
        d && (br(u.x, d.offset.x), br(u.y, d.offset.y));
      }
      return u;
    }
    removeElementScroll(o) {
      var a;
      const u = de();
      if (
        (it(u, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return u;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && it(u, o), br(u.x, f.offset.x), br(u.y, f.offset.y));
      }
      return u;
    }
    applyTransform(o, a = !1) {
      const u = de();
      it(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Sr(u, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Ln(d.latestValues) && Sr(u, d.latestValues));
      }
      return (Ln(this.latestValues) && Sr(u, this.latestValues), u);
    }
    removeTransform(o) {
      const a = de();
      it(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !Ln(c.latestValues)) continue;
        Hu(c.latestValues) && c.updateSnapshot();
        const d = de(),
          f = c.measurePageBox();
        (it(d, f),
          Ap(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d));
      }
      return (Ln(this.latestValues) && Ap(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = u.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== u;
      if (!(
        o ||
        (c && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((a = this.parent) === null || a === void 0) &&
          a.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = de()),
              (this.relativeTargetOrigin = de()),
              Ls(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              it(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = de()), (this.targetWithTransforms = de())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                nT(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : it(this.target, this.layout.layoutBox),
                  ev(this.target, this.targetDelta))
                : it(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const x = this.getClosestProjectingParent();
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = x),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = de()),
                (this.relativeTargetOrigin = de()),
                Ls(this.relativeTargetOrigin, this.target, x.target),
                it(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          xs && $n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        Hu(this.parent.latestValues) ||
        Jy(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        u = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        u &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === be.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      it(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        x = this.treeScale.y;
      (dT(this.layoutCorrected, this.treeScale, this.path, u),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = de())));
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Pp(this.prevProjectionDelta.x, this.projectionDelta.x),
          Pp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Vs(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== x ||
          !Lp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Lp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        xs && $n.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = wr()),
        (this.projectionDelta = wr()),
        (this.projectionDeltaWithTransform = wr()));
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        d = { ...this.latestValues },
        f = wr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = de(),
        x = u ? u.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        v = x !== w,
        y = this.getStack(),
        p = !y || y.members.length <= 1,
        m = !!(v && !p && this.options.crossfade === !0 && !this.path.some(qT));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (b) => {
        const S = b / 1e3;
        (Op(f.x, o.x, S),
          Op(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ls(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            XT(this.relativeTarget, this.relativeTargetOrigin, h, S),
            g && RT(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = de()),
            it(g, this.relativeTarget)),
          v &&
            ((this.animationValues = d), PT(d, c, this.latestValues, S, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (jt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = H.update(() => {
          ((po.hasAnimatedSinceResize = !0),
            (this.currentAnimation = bT(0, $p, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta($p),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !u || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          cv(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || de();
          const f = tt(this.layout.layoutBox.x);
          ((u.x.min = o.target.x.min), (u.x.max = u.x.min + f));
          const h = tt(this.layout.layoutBox.y);
          ((u.y.min = o.target.y.min), (u.y.max = u.y.min + h));
        }
        (it(a, u),
          Sr(a, d),
          Vs(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new VT()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      (c && c.promote(this, u),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: u } = o;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      u.z && gl("z", o, c, this.animationValues);
      for (let d = 0; d < ml.length; d++)
        (gl(`rotate${ml[d]}`, o, c, this.animationValues),
          gl(`skew${ml[d]}`, o, c, this.animationValues));
      o.render();
      for (const d in c)
        (o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return $T;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = fo(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = fo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Ln(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = LT(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        d && (c.transform = d(h, c.transform)));
      const { x, y: w } = this.projectionDelta;
      ((c.transformOrigin = `${x.origin * 100}% ${w.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (u =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const v in Go) {
        if (h[v] === void 0) continue;
        const { correct: y, applyTo: p } = Go[v],
          m = c.transform === "none" ? h[v] : y(h[v], f);
        if (p) {
          const g = p.length;
          for (let b = 0; b < g; b++) c[p[b]] = m;
        } else c[v] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? fo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ip),
        this.root.sharedNodes.clear());
    }
  };
}
function FT(e) {
  e.updateLayout();
}
function OT(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? at((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            x = tt(h);
          ((h.min = r[f].min), (h.max = h.min + x));
        })
      : cv(i, n.layoutBox, r) &&
        at((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            x = tt(r[f]);
          ((h.max = h.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + x)));
        });
    const a = wr();
    Vs(a, r, n.layoutBox);
    const u = wr();
    o ? Vs(u, e.applyTransform(s, !0), n.measuredBox) : Vs(u, r, n.layoutBox);
    const c = !ov(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: x } = f;
        if (h && x) {
          const w = de();
          Ls(w, n.layoutBox, h.layoutBox);
          const v = de();
          (Ls(v, r, x.layoutBox),
            av(w, v) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function BT(e) {
  (xs && $n.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function _T(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function zT(e) {
  e.clearSnapshot();
}
function Ip(e) {
  e.clearMeasurements();
}
function UT(e) {
  e.isLayoutDirty = !1;
}
function WT(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Fp(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function HT(e) {
  e.resolveTargetDelta();
}
function GT(e) {
  e.calcProjection();
}
function YT(e) {
  e.resetSkewAndRotation();
}
function KT(e) {
  e.removeLeadSnapshot();
}
function Op(e, t, n) {
  ((e.translate = re(t.translate, 0, n)),
    (e.scale = re(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Bp(e, t, n, r) {
  ((e.min = re(t.min, n.min, r)), (e.max = re(t.max, n.max, r)));
}
function XT(e, t, n, r) {
  (Bp(e.x, t.x, n.x, r), Bp(e.y, t.y, n.y, r));
}
function qT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const QT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  _p = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  zp = _p("applewebkit/") && !_p("chrome/") ? Math.round : Oe;
function Up(e) {
  ((e.min = zp(e.min)), (e.max = zp(e.max)));
}
function ZT(e) {
  (Up(e.x), Up(e.y));
}
function cv(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !tT(Vp(t), Vp(n), 0.2))
  );
}
function JT(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const eN = uv({
    attachResizeListener: (e, t) => ai(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  xl = { current: void 0 },
  dv = uv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!xl.current) {
        const e = new eN({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (xl.current = e));
      }
      return xl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  tN = {
    pan: { Feature: xT },
    drag: { Feature: gT, ProjectionNode: dv, MeasureLayout: rv },
  };
function fv(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function hv(e, t) {
  const n = fv(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function Wp(e) {
  return (t) => {
    t.pointerType === "touch" || Yy() || e(t);
  };
}
function nN(e, t, n = {}) {
  const [r, s, i] = hv(e, n),
    o = Wp((a) => {
      const { target: u } = a,
        c = t(a);
      if (typeof c != "function" || !u) return;
      const d = Wp((f) => {
        (c(f), u.removeEventListener("pointerleave", d));
      });
      u.addEventListener("pointerleave", d, s);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
function Hp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && H.postRender(() => i(t, bi(t)));
}
let rN = class extends Cn {
    mount() {
      const { current: t } = this.node;
      t &&
        (this.unmount = nN(
          t,
          (n) => (Hp(this.node, n, "Start"), (r) => Hp(this.node, r, "End")),
        ));
    }
    unmount() {}
  },
  sN = class extends Cn {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = wi(
        ai(this.node.current, "focus", () => this.onFocus()),
        ai(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  };
const pv = (e, t) => (t ? (e === t ? !0 : pv(e, t.parentElement)) : !1),
  iN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function oN(e) {
  return iN.has(e.tagName) || e.tabIndex !== -1;
}
const ys = new WeakSet();
function Gp(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function yl(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const aN = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Gp(() => {
    if (ys.has(n)) return;
    yl(n, "down");
    const s = Gp(() => {
        yl(n, "up");
      }),
      i = () => yl(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Yp(e) {
  return Bd(e) && !Yy();
}
function lN(e, t, n = {}) {
  const [r, s, i] = hv(e, n),
    o = (a) => {
      const u = a.currentTarget;
      if (!Yp(a) || ys.has(u)) return;
      ys.add(u);
      const c = t(a),
        d = (x, w) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Yp(x) || !ys.has(u)) &&
              (ys.delete(u), typeof c == "function" && c(x, { success: w })));
        },
        f = (x) => {
          d(x, n.useGlobalTarget || pv(u, x.target));
        },
        h = (x) => {
          d(x, !1);
        };
      (window.addEventListener("pointerup", f, s),
        window.addEventListener("pointercancel", h, s));
    };
  return (
    r.forEach((a) => {
      (!oN(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (c) => aN(c, s), s));
    }),
    i
  );
}
function Kp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && H.postRender(() => i(t, bi(t)));
}
let uN = class extends Cn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = lN(
        t,
        (n) => (
          Kp(this.node, n, "Start"),
          (r, { success: s }) => Kp(this.node, r, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
};
const Yu = new WeakMap(),
  vl = new WeakMap(),
  cN = (e) => {
    const t = Yu.get(e.target);
    t && t(e);
  },
  dN = (e) => {
    e.forEach(cN);
  };
function fN({ root: e, ...t }) {
  const n = e || document;
  vl.has(n) || vl.set(n, {});
  const r = vl.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(dN, { root: e, ...t })),
    r[s]
  );
}
function hN(e, t, n) {
  const r = fN(t);
  return (
    Yu.set(e, n),
    r.observe(e),
    () => {
      (Yu.delete(e), r.unobserve(e));
    }
  );
}
const pN = { some: 0, all: 1 };
let mN = class extends Cn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : pN[s],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(u);
      };
    return hN(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(gN(t, n)) && this.startObserver();
  }
  unmount() {}
};
function gN({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const xN = {
    inView: { Feature: mN },
    tap: { Feature: uN },
    focus: { Feature: sN },
    hover: { Feature: rN },
  },
  yN = { layout: { ProjectionNode: dv, MeasureLayout: rv } },
  Ku = { current: null },
  mv = { current: !1 };
function vN() {
  if (((mv.current = !0), !!ld))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ku.current = e.matches);
      (e.addListener(t), t());
    } else Ku.current = !1;
}
const wN = [...Vy, Me, Sn],
  bN = (e) => wN.find(Ry(e)),
  Xp = new WeakMap();
function SN(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Ve(s)) e.addValue(r, s);
    else if (Ve(i)) e.addValue(r, Ct(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Ct(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const qp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let kN = class {
    scrapeMotionValuesFromProps(t, n, r) {
      return {};
    }
    constructor(
      {
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: s,
        blockInitialAnimation: i,
        visualState: o,
      },
      a = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Ld),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const x = Dt.now();
          this.renderScheduledAt < x &&
            ((this.renderScheduledAt = x), H.render(this.render, !1, !0));
        }));
      const { latestValues: u, renderState: c, onUpdate: d } = o;
      ((this.onUpdate = d),
        (this.latestValues = u),
        (this.baseTarget = { ...u }),
        (this.initialValues = n.initial ? { ...u } : {}),
        (this.renderState = c),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = s),
        (this.options = a),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Pa(n)),
        (this.isVariantNode = Gx(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current)));
      const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
        n,
        {},
        this,
      );
      for (const x in h) {
        const w = h[x];
        u[x] !== void 0 && Ve(w) && w.set(u[x], !1);
      }
    }
    mount(t) {
      ((this.current = t),
        Xp.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        mv.current || vN(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
              ? !0
              : Ku.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (Xp.delete(this.current),
        this.projection && this.projection.unmount(),
        jt(this.notifyUpdate),
        jt(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const n = this.features[t];
        n && (n.unmount(), (n.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(t, n) {
      this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
      const r = nr.has(t),
        s = n.on("change", (a) => {
          ((this.latestValues[t] = a),
            this.props.onUpdate && H.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = n.on("renderRequest", this.scheduleRender);
      let o;
      (window.MotionCheckAppearSync &&
        (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
          (s(), i(), o && o(), n.owner && n.stop());
        }));
    }
    sortNodePosition(t) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
        ? 0
        : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in zr) {
        const n = zr[t];
        if (!n) continue;
        const { isEnabled: r, Feature: s } = n;
        if (
          (!this.features[t] &&
            s &&
            r(this.props) &&
            (this.features[t] = new s(this)),
          this.features[t])
        ) {
          const i = this.features[t];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : de();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    update(t, n) {
      ((t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = n));
      for (let r = 0; r < qp.length; r++) {
        const s = qp[r];
        this.propEventSubscriptions[s] &&
          (this.propEventSubscriptions[s](),
          delete this.propEventSubscriptions[s]);
        const i = "on" + s,
          o = t[i];
        o && (this.propEventSubscriptions[s] = this.on(s, o));
      }
      ((this.prevMotionValues = SN(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return (
          n.variantChildren && n.variantChildren.add(t),
          () => n.variantChildren.delete(t)
        );
    }
    addValue(t, n) {
      const r = this.values.get(t);
      n !== r &&
        (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      (n && (n(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState));
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let r = this.values.get(t);
      return (
        r === void 0 &&
          n !== void 0 &&
          ((r = Ct(n === null ? void 0 : n, { owner: this })),
          this.addValue(t, r)),
        r
      );
    }
    readValue(t, n) {
      var r;
      let s =
        this.latestValues[t] !== void 0 || !this.current
          ? this.latestValues[t]
          : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
              r !== void 0
            ? r
            : this.readValueFromInstance(this.current, t, this.options);
      return (
        s != null &&
          (typeof s == "string" && (My(s) || Sy(s))
            ? (s = parseFloat(s))
            : !bN(s) && Sn.test(n) && (s = Cy(t, n)),
          this.setBaseTarget(t, Ve(s) ? s.get() : s)),
        Ve(s) ? s.get() : s
      );
    }
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props;
      let s;
      if (typeof r == "string" || typeof r == "object") {
        const o = pd(
          this.props,
          r,
          (n = this.presenceContext) === null || n === void 0
            ? void 0
            : n.custom,
        );
        o && (s = o[t]);
      }
      if (r && s !== void 0) return s;
      const i = this.getBaseTargetFromProps(this.props, t);
      return i !== void 0 && !Ve(i)
        ? i
        : this.initialValues[t] !== void 0 && s === void 0
          ? void 0
          : this.baseTarget[t];
    }
    on(t, n) {
      return (
        this.events[t] || (this.events[t] = new Td()),
        this.events[t].add(n)
      );
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  },
  gv = class extends kN {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Ly));
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      (delete n[t], delete r[t]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Ve(t) &&
        (this.childSubscription = t.on("change", (n) => {
          this.current && (this.current.textContent = `${n}`);
        }));
    }
  };
function jN(e) {
  return window.getComputedStyle(e);
}
let TN = class extends gv {
    constructor() {
      (super(...arguments), (this.type = "html"), (this.renderInstance = ty));
    }
    readValueFromInstance(t, n) {
      if (nr.has(n)) {
        const r = Vd(n);
        return (r && r.default) || 0;
      } else {
        const r = jN(t),
          s = (Zx(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof s == "string" ? s.trim() : s;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return tv(t, n);
    }
    build(t, n, r) {
      xd(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return bd(t, n, r);
    }
  },
  NN = class extends gv {
    constructor() {
      (super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = de));
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (nr.has(n)) {
        const r = Vd(n);
        return (r && r.default) || 0;
      }
      return ((n = ny.has(n) ? n : dd(n)), t.getAttribute(n));
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return iy(t, n, r);
    }
    build(t, n, r) {
      yd(t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(t, n, r, s) {
      ry(t, n, r, s);
    }
    mount(t) {
      ((this.isSVGTag = wd(t.tagName)), super.mount(t));
    }
  };
const PN = (e, t) =>
    hd(e) ? new NN(t) : new TN(t, { allowProjection: e !== k.Fragment }),
  CN = rk({ ...Hj, ...xN, ...tN, ...yN }, PN),
  X = y2(CN);
function xv(e, t) {
  let n;
  const r = () => {
    const { currentTime: s } = t,
      o = (s === null ? 0 : s.value) / 100;
    (n !== o && e(o), (n = o));
  };
  return (H.update(r, !0), () => jt(r));
}
const mo = new WeakMap();
let rn;
function EN(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function AN({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = mo.get(e)) === null ||
    r === void 0 ||
    r.forEach((s) => {
      s({
        target: e,
        contentSize: t,
        get size() {
          return EN(e, n);
        },
      });
    });
}
function MN(e) {
  e.forEach(AN);
}
function DN() {
  typeof ResizeObserver > "u" || (rn = new ResizeObserver(MN));
}
function RN(e, t) {
  rn || DN();
  const n = fv(e);
  return (
    n.forEach((r) => {
      let s = mo.get(r);
      (s || ((s = new Set()), mo.set(r, s)),
        s.add(t),
        rn == null || rn.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const s = mo.get(r);
        (s == null || s.delete(t),
          (s != null && s.size) || rn == null || rn.unobserve(r));
      });
    }
  );
}
const go = new Set();
let $s;
function VN() {
  (($s = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    go.forEach((n) => n(t));
  }),
    window.addEventListener("resize", $s));
}
function LN(e) {
  return (
    go.add(e),
    $s || VN(),
    () => {
      (go.delete(e), !go.size && $s && ($s = void 0));
    }
  );
}
function $N(e, t) {
  return typeof e == "function" ? LN(e) : RN(e, t);
}
const IN = 50,
  Qp = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  FN = () => ({ time: 0, x: Qp(), y: Qp() }),
  ON = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Zp(e, t, n, r) {
  const s = n[t],
    { length: i, position: o } = ON[t],
    a = s.current,
    u = n.time;
  ((s.current = e[`scroll${o}`]),
    (s.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
    (s.offset.length = 0),
    (s.offset[0] = 0),
    (s.offset[1] = s.scrollLength),
    (s.progress = Jn(0, s.scrollLength, s.current)));
  const c = r - u;
  s.velocity = c > IN ? 0 : Nd(s.current - a, c);
}
function BN(e, t, n) {
  (Zp(e, "x", t, n), Zp(e, "y", t, n), (t.time = n));
}
function _N(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t;)
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      const s = r.getBoundingClientRect();
      r = r.parentElement;
      const i = r.getBoundingClientRect();
      ((n.x += s.left - i.left), (n.y += s.top - i.top));
    } else if (r instanceof SVGGraphicsElement) {
      const { x: s, y: i } = r.getBBox();
      ((n.x += s), (n.y += i));
      let o = null,
        a = r.parentNode;
      for (; !o;) (a.tagName === "svg" && (o = a), (a = r.parentNode));
      r = o;
    } else break;
  return n;
}
const Xu = { start: 0, center: 0.5, end: 1 };
function Jp(e, t, n = 0) {
  let r = 0;
  if ((e in Xu && (e = Xu[e]), typeof e == "string")) {
    const s = parseFloat(e);
    e.endsWith("px")
      ? (r = s)
      : e.endsWith("%")
        ? (e = s / 100)
        : e.endsWith("vw")
          ? (r = (s / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (s / 100) * document.documentElement.clientHeight)
            : (e = s);
  }
  return (typeof e == "number" && (r = t * e), n + r);
}
const zN = [0, 0];
function UN(e, t, n, r) {
  let s = Array.isArray(e) ? e : zN,
    i = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (s = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (s = e.split(" ")) : (s = [e, Xu[e] ? e : "0"])),
    (i = Jp(s[0], n, r)),
    (o = Jp(s[1], t)),
    i - o
  );
}
const WN = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  HN = { x: 0, y: 0 };
function GN(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function YN(e, t, n) {
  const { offset: r = WN.All } = n,
    { target: s = e, axis: i = "y" } = n,
    o = i === "y" ? "height" : "width",
    a = s !== e ? _N(s, e) : HN,
    u = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : GN(s),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let d = !t[i].interpolate;
  const f = r.length;
  for (let h = 0; h < f; h++) {
    const x = UN(r[h], c[o], u[o], a[i]);
    (!d && x !== t[i].interpolatorOffsets[h] && (d = !0), (t[i].offset[h] = x));
  }
  (d &&
    ((t[i].interpolate = Id(t[i].offset, Uy(r), { clamp: !1 })),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = Lt(0, 1, t[i].interpolate(t[i].current))));
}
function KN(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e;)
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function XN(e, t, n, r = {}) {
  return {
    measure: () => KN(e, r.target, n),
    update: (s) => {
      (BN(e, n, s), (r.offset || r.target) && YN(e, n, r));
    },
    notify: () => t(n),
  };
}
const cs = new WeakMap(),
  em = new WeakMap(),
  wl = new WeakMap(),
  tm = (e) => (e === document.documentElement ? window : e);
function _d(e, { container: t = document.documentElement, ...n } = {}) {
  let r = wl.get(t);
  r || ((r = new Set()), wl.set(t, r));
  const s = FN(),
    i = XN(t, e, s, n);
  if ((r.add(i), !cs.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      u = () => {
        for (const h of r) h.update(be.timestamp);
      },
      c = () => {
        for (const h of r) h.notify();
      },
      d = () => {
        (H.read(a, !1, !0), H.read(u, !1, !0), H.update(c, !1, !0));
      };
    cs.set(t, d);
    const f = tm(t);
    (window.addEventListener("resize", d, { passive: !0 }),
      t !== document.documentElement && em.set(t, $N(t, d)),
      f.addEventListener("scroll", d, { passive: !0 }));
  }
  const o = cs.get(t);
  return (
    H.read(o, !1, !0),
    () => {
      var a;
      jt(o);
      const u = wl.get(t);
      if (!u || (u.delete(i), u.size)) return;
      const c = cs.get(t);
      (cs.delete(t),
        c &&
          (tm(t).removeEventListener("scroll", c),
          (a = em.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", c)));
    }
  );
}
function qN({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    s = _d(
      (i) => {
        r.value = i[n].progress * 100;
      },
      { container: t, axis: n },
    );
  return { currentTime: r, cancel: s };
}
const bl = new Map();
function yv({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  (e && (t = e), bl.has(t) || bl.set(t, {}));
  const r = bl.get(t);
  return (
    r[n] ||
      (r[n] = cy()
        ? new ScrollTimeline({ source: t, axis: n })
        : qN({ source: t, axis: n })),
    r[n]
  );
}
function QN(e) {
  return e.length === 2;
}
function vv(e) {
  return e && (e.target || e.offset);
}
function ZN(e, t) {
  return QN(e) || vv(t)
    ? _d((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : xv(e, yv(t));
}
function JN(e, t) {
  if ((e.flatten(), vv(t)))
    return (
      e.pause(),
      _d((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = yv(t);
    return e.attachTimeline
      ? e.attachTimeline(
          n,
          (r) => (
            r.pause(),
            xv((s) => {
              r.time = r.duration * s;
            }, n)
          ),
        )
      : Oe;
  }
}
function eP(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? ZN(e, r) : JN(e, r);
}
function nm(e, t) {
  c2(!!(!t || t.current));
}
const tP = () => ({
  scrollX: Ct(0),
  scrollY: Ct(0),
  scrollXProgress: Ct(0),
  scrollYProgress: Ct(0),
});
function nP({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const s = qr(tP);
  return (
    (n ? ja : k.useEffect)(
      () => (
        nm("target", t),
        nm("container", e),
        eP(
          (o, { x: a, y: u }) => {
            (s.scrollX.set(a.current),
              s.scrollXProgress.set(a.progress),
              s.scrollY.set(u.current),
              s.scrollYProgress.set(u.progress));
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          },
        )
      ),
      [e, t, JSON.stringify(r.offset)],
    ),
    s
  );
}
function rP(e) {
  const t = qr(() => Ct(e)),
    { isStatic: n } = k.useContext(ka);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function wv(e, t) {
  const n = rP(t()),
    r = () => n.set(t());
  return (
    r(),
    ja(() => {
      const s = () => H.preRender(r, !1, !0),
        i = e.map((o) => o.on("change", s));
      return () => {
        (i.forEach((o) => o()), jt(r));
      };
    }),
    n
  );
}
const sP = (e) => e && typeof e == "object" && e.mix,
  iP = (e) => (sP(e) ? e.mix : void 0);
function oP(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    s = e[1 + n],
    i = e[2 + n],
    o = e[3 + n],
    a = Id(s, i, { mixer: iP(i[0]), ...o });
  return t ? a(r) : a;
}
function aP(e) {
  ((Ms.current = []), e());
  const t = wv(Ms.current, e);
  return ((Ms.current = void 0), t);
}
function Sl(e, t, n, r) {
  if (typeof e == "function") return aP(e);
  const s = typeof t == "function" ? t : oP(t, n, r);
  return Array.isArray(e) ? rm(e, s) : rm([e], ([i]) => s(i));
}
function rm(e, t) {
  const n = qr(() => []);
  return wv(e, () => {
    n.length = 0;
    const r = e.length;
    for (let s = 0; s < r; s++) n[s] = e[s].get();
    return t(n);
  });
}
const lP = [
    { left: 0, top: 0, width: 71, height: 18 },
    { left: 71, top: 0, width: 29, height: 18 },
    { left: 0, top: 18, width: 71, height: 27 },
    { left: 71, top: 18, width: 29, height: 27 },
    { left: 0, top: 45, width: 49, height: 15 },
    { left: 0, top: 60, width: 28, height: 15 },
    { left: 28, top: 60, width: 21, height: 15 },
    { left: 49, top: 45, width: 22, height: 30 },
    { left: 71, top: 45, width: 29, height: 30 },
    { left: 0, top: 75, width: 28, height: 13 },
    { left: 28, top: 75, width: 43, height: 13 },
    { left: 71, top: 75, width: 29, height: 13 },
  ],
  kl = {
    0: { scale: 120, offsetX: 10, offsetY: -35 },
    1: { scale: 100, offsetX: 0, offsetY: 0 },
    2: { scale: 100, offsetX: 0, offsetY: 0 },
    3: { scale: 125, offsetX: -20, offsetY: -15 },
    4: { scale: 100, offsetX: 0, offsetY: 0 },
    5: { scale: 100, offsetX: 0, offsetY: 0 },
    6: { scale: 120, offsetX: 0, offsetY: 0 },
    7: { scale: 100, offsetX: 0, offsetY: 0 },
    8: { scale: 105, offsetX: 0, offsetY: -10 },
    9: { scale: 100, offsetX: 0, offsetY: 0 },
    10: { scale: 100, offsetX: 0, offsetY: 0 },
    11: { scale: 100, offsetX: 0, offsetY: 0 },
  };
function uP({
  currentImageUrl: e = "/taranna.png",
  blendMode: t = "normal",
  contrast: n = 1,
  brightness: r = 1,
  saturate: s = 1,
}) {
  var Ue, _, P, L, $, K;
  const [i, o] = k.useState(1),
    [a, u] = k.useState(!1),
    [c, d] = k.useState(!0),
    [f, h] = k.useState(0),
    [x, w] = k.useState(!1),
    [v, y] = k.useState({}),
    p = Cg.useRef(null),
    [m, g] = k.useState(
      () => localStorage.getItem("collage_layout_locked") === "true",
    );
  k.useEffect(() => {
    const E = () => {
        u((G) => !G);
      },
      D = (G) => {
        G.detail !== void 0 ? g(G.detail) : g((We) => !We);
      },
      B = () => {
        setTimeout(() => {
          (window.dispatchEvent(
            new CustomEvent("dev-mode-changed", { detail: a }),
          ),
            window.dispatchEvent(
              new CustomEvent("dev-lock-changed", { detail: m }),
            ));
        }, 0);
      };
    (window.addEventListener("toggle-dev-mode", E),
      window.addEventListener("toggle-dev-lock", D),
      window.addEventListener("request-dev-state", B));
    const me = setTimeout(() => {
      (window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: a })),
        window.dispatchEvent(
          new CustomEvent("dev-lock-changed", { detail: m }),
        ));
    }, 0);
    return () => {
      (window.removeEventListener("toggle-dev-mode", E),
        window.removeEventListener("toggle-dev-lock", D),
        window.removeEventListener("request-dev-state", B),
        clearTimeout(me));
    };
  }, [a, m]);
  const [b, S] = k.useState(() => {
    const E = localStorage.getItem("collage_image_settings");
    if (E)
      try {
        return JSON.parse(E);
      } catch (D) {
        console.error("Failed to parse saved collage settings", D);
      }
    return kl;
  });
  (k.useEffect(() => {
    localStorage.setItem("collage_image_settings", JSON.stringify(b));
  }, [b]),
    k.useEffect(() => {
      localStorage.setItem("collage_layout_locked", String(m));
    }, [m]));
  const [j, N] = k.useState(null),
    T = (E, D) => {
      if (!a || m) return;
      (E.preventDefault(), h(D));
      const B = b[D] || { offsetX: 0, offsetY: 0 };
      N({
        isDragging: !0,
        cellIdx: D,
        startX: E.clientX,
        startY: E.clientY,
        startOffsetX: B.offsetX,
        startOffsetY: B.offsetY,
      });
    },
    R = (E) => {
      if (m || !j || !j.isDragging) return;
      E.preventDefault();
      const D = E.clientX - j.startX,
        B = E.clientY - j.startY;
      S((me) => ({
        ...me,
        [j.cellIdx]: {
          ...me[j.cellIdx],
          offsetX: Math.round(j.startOffsetX + D),
          offsetY: Math.round(j.startOffsetY + B),
        },
      }));
    },
    M = () => {
      j && N(null);
    },
    z = (E, D) => {
      if (!a || m) return;
      const B = E.touches[0];
      h(D);
      const me = b[D] || { offsetX: 0, offsetY: 0 };
      N({
        isDragging: !0,
        cellIdx: D,
        startX: B.clientX,
        startY: B.clientY,
        startOffsetX: me.offsetX,
        startOffsetY: me.offsetY,
      });
    },
    ae = (E) => {
      if (m || !j || !j.isDragging) return;
      const D = E.touches[0],
        B = D.clientX - j.startX,
        me = D.clientY - j.startY;
      S((G) => ({
        ...G,
        [j.cellIdx]: {
          ...G[j.cellIdx],
          offsetX: Math.round(j.startOffsetX + B),
          offsetY: Math.round(j.startOffsetY + me),
        },
      }));
    };
  (k.useEffect(() => {
    const E = p.current;
    if (!E || !a || m) return;
    const D = (B) => {
      const G = B.target.closest("[id^='collage-cell-']");
      if (!G) return;
      const We = G.id.replace("collage-cell-", ""),
        we = parseInt(We, 10);
      isNaN(we) ||
        (B.preventDefault(),
        h(we),
        S((An) => {
          const $t = An[we] || { scale: 100 },
            Zt = B.deltaY < 0 ? 5 : -5,
            sr = Math.min(1e3, Math.max(10, $t.scale + Zt));
          return { ...An, [we]: { ...An[we], scale: sr } };
        }));
    };
    return (
      E.addEventListener("wheel", D, { passive: !1 }),
      () => {
        E.removeEventListener("wheel", D);
      }
    );
  }, [a, m]),
    k.useEffect(() => {
      if (x) {
        const E = setTimeout(() => w(!1), 2e3);
        return () => clearTimeout(E);
      }
    }, [x]));
  const ve = () => {
      const E = `// Saved Image Settings Alignment
const SAVED_SETTINGS = ${JSON.stringify(b, null, 2)};`;
      navigator.clipboard.writeText(E).then(() => {
        w(!0);
      });
    },
    ze = (E) => {
      S((D) => ({
        ...D,
        [E]: kl[E] || { scale: 100, offsetX: 0, offsetY: 0 },
      }));
    },
    Ce = () => {
      S(kl);
    };
  return l.jsxs("section", {
    className:
      "relative w-full max-w-2xl mx-auto p-4 pb-0 flex flex-col items-center justify-center",
    children: [
      l.jsx("div", {
        ref: p,
        className:
          "w-full flex items-center justify-center bg-transparent overflow-hidden select-none relative",
        onMouseMove: R,
        onMouseUp: M,
        onMouseLeave: M,
        onTouchMove: ae,
        onTouchEnd: M,
        children: l.jsx("div", {
          className: `relative w-full max-w-full select-none bg-transparent flex items-center justify-center ${a && c ? "overflow-visible" : "overflow-hidden"}`,
          style: { aspectRatio: i ? i / 0.88 : 0.97 },
          children: l.jsxs("div", {
            className: `absolute inset-0 w-full h-full ${a && c ? "overflow-visible" : "overflow-hidden"}`,
            style: {
              WebkitMaskImage: a && c ? "none" : 'url("/taranna.png")',
              maskImage: a && c ? "none" : 'url("/taranna.png")',
              WebkitMaskSize: "100% 113.636%",
              maskSize: "100% 113.636%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "top left",
              maskPosition: "top left",
            },
            children: [
              l.jsx("img", {
                src: "/taranna.png",
                onLoad: (E) => {
                  const D = E.currentTarget;
                  D.naturalWidth &&
                    D.naturalHeight &&
                    o(D.naturalWidth / D.naturalHeight);
                },
                onError: () => {
                  o(0.85);
                },
                className: "absolute opacity-0 pointer-events-none w-0 h-0",
                "aria-hidden": "true",
                alt: "",
              }),
              lP.map((E, D) => {
                const B = E.top / 0.88,
                  me = E.height / 0.88,
                  G = b[D] || { scale: 100, offsetX: 0, offsetY: 0 },
                  We = f === D,
                  we = a && c && We,
                  An =
                    D === 8
                      ? "/TD-382.jpg.jpeg"
                      : D === 3
                        ? "/NOVA0019.JPG.jpeg"
                        : D === 0
                          ? "/NOV00034.JPG.jpeg"
                          : D === 6
                            ? "/Speaker.JPG.jpeg"
                            : D === 7
                              ? "/ear-optimized.png"
                              : D === 10
                                ? "/TD-263.jpg.jpeg"
                                : D === 11
                                  ? "/TD-297.jpg.jpeg"
                                  : e;
                return l.jsxs(
                  "div",
                  {
                    id: `collage-cell-${D}`,
                    onMouseDown: ($t) => T($t, D),
                    onTouchStart: ($t) => z($t, D),
                    className: `absolute border-[0.15cqw] border-white bg-white transition-shadow duration-300 ${we ? "overflow-visible z-50 shadow-2xl" : "overflow-hidden"} ${a ? "cursor-move group" : ""} ${a && We ? "ring-2 ring-amber-500 ring-offset-1 z-20 shadow-md" : a ? "hover:ring-1 hover:ring-amber-400 z-10" : ""}`,
                    style: {
                      left: `${E.left}%`,
                      top: `${B}%`,
                      width: `${E.width}%`,
                      height: `${me}%`,
                    },
                    children: [
                      l.jsx("img", {
                        src: An,
                        draggable: "false",
                        onLoad: ($t) => {
                          const Zt = $t.currentTarget;
                          Zt.naturalWidth &&
                            Zt.naturalHeight &&
                            y((sr) => ({
                              ...sr,
                              [D]: Zt.naturalWidth / Zt.naturalHeight,
                            }));
                        },
                        className:
                          "absolute pointer-events-none select-none max-w-none transition-all duration-75 origin-center",
                        style:
                          D === 8 ||
                          D === 3 ||
                          D === 0 ||
                          D === 6 ||
                          D === 7 ||
                          D === 10 ||
                          D === 11
                            ? {
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "auto",
                                height: "auto",
                                minWidth: "100%",
                                minHeight: "100%",
                                mixBlendMode:
                                  t === "multiply" ? "multiply" : "normal",
                                filter: `contrast(${n}) brightness(${r}) saturate(${s})`,
                                transform: `translate(-50%, -50%) translate(${G.offsetX}px, ${G.offsetY}px) scale(${G.scale / 100})`,
                                opacity: we ? 0.65 : 1,
                                outline: we ? "2px dashed #f59e0b" : "none",
                                outlineOffset: "-2px",
                                backgroundColor: we
                                  ? "rgba(245, 158, 11, 0.15)"
                                  : "transparent",
                              }
                            : {
                                left: `-${(E.left * 100) / E.width}%`,
                                top: `-${(E.top * 100) / E.height}%`,
                                width: `${(100 * 100) / E.width}%`,
                                height: `${(100 * 100) / E.height}%`,
                                mixBlendMode:
                                  t === "multiply" ? "multiply" : "normal",
                                filter: `contrast(${n}) brightness(${r}) saturate(${s})`,
                                objectFit: "fill",
                                transform: `scale(${G.scale / 100}) translate(${G.offsetX}px, ${G.offsetY}px)`,
                                opacity: we ? 0.65 : 1,
                                outline: we ? "2px dashed #f59e0b" : "none",
                                outlineOffset: "-2px",
                                backgroundColor: we
                                  ? "rgba(245, 158, 11, 0.15)"
                                  : "transparent",
                              },
                        referrerPolicy: "no-referrer",
                        alt: "",
                      }),
                      D === 2 &&
                        l.jsx("div", {
                          className:
                            "absolute inset-0 pointer-events-none bg-red-600 mix-blend-multiply opacity-100",
                          style: { mixBlendMode: "multiply" },
                        }),
                      a &&
                        l.jsxs("div", {
                          className:
                            "absolute inset-0 bg-black/25 flex flex-col justify-between p-1 select-none pointer-events-none",
                          children: [
                            l.jsxs("span", {
                              className:
                                "text-[9px] font-mono font-bold bg-black/70 text-white px-1 py-0.2 rounded w-fit",
                              children: ["#", D],
                            }),
                            We &&
                              l.jsx("span", {
                                className:
                                  "text-[8px] font-mono font-medium text-amber-300 bg-amber-950/80 px-1 py-0.2 rounded self-end",
                                children: "Active",
                              }),
                          ],
                        }),
                    ],
                  },
                  D,
                );
              }),
            ],
          }),
        }),
      }),
      a &&
        l.jsxs("div", {
          id: "dev-controls-panel",
          className:
            "w-full mt-6 bg-white border border-neutral-200 rounded-xl p-5 shadow-lg max-w-xl transition-all duration-300",
          children: [
            l.jsxs("div", {
              className:
                "flex items-center justify-between border-b border-neutral-100 pb-3 mb-4",
              children: [
                l.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    l.jsx(Ox, { className: "w-4 h-4 text-amber-500" }),
                    l.jsx("h4", {
                      className:
                        "text-sm font-sans font-semibold text-neutral-900 tracking-tight",
                      children: "Alignment Adjuster Panel",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex gap-1.5 items-center",
                  children: [
                    l.jsxs("button", {
                      id: "btn-dev-lock-panel-toggle",
                      onClick: () => g(!m),
                      className: `flex items-center gap-1 px-2 py-1 border text-xxs font-mono rounded transition-colors cursor-pointer ${m ? "bg-red-100 border-red-300 text-red-800 hover:bg-red-200 font-bold" : "bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200"}`,
                      title: m
                        ? "Unlock positions"
                        : "Lock positions to prevent changes",
                      children: [
                        m
                          ? l.jsx(Du, { className: "w-3 h-3" })
                          : l.jsx(Ix, { className: "w-3 h-3" }),
                        m ? "LOCKED" : "UNLOCKED",
                      ],
                    }),
                    l.jsxs("button", {
                      id: "btn-dev-toggle-out-of-bounds",
                      onClick: () => d(!c),
                      className: `flex items-center gap-1.5 px-2 py-1 border text-xxs font-mono rounded transition-colors ${c ? "bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"}`,
                      title: "Toggle showing uncropped overflow image",
                      children: [
                        l.jsx(BS, { className: "w-3 h-3" }),
                        c ? "Full Canvas: ON" : "Full Canvas: OFF",
                      ],
                    }),
                    l.jsxs("button", {
                      id: "btn-dev-reset-all",
                      onClick: Ce,
                      className:
                        "flex items-center gap-1.5 px-2 py-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 text-xxs font-mono rounded",
                      children: [
                        l.jsx(JS, { className: "w-3 h-3" }),
                        "Reset All",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "relative",
              children: [
                m &&
                  l.jsxs("div", {
                    className:
                      "absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4 rounded-xl z-20",
                    children: [
                      l.jsx(Du, {
                        className: "w-8 h-8 text-red-500 mb-2 animate-bounce",
                      }),
                      l.jsx("h5", {
                        className:
                          "font-bold text-xs font-mono uppercase text-neutral-800 tracking-wider",
                        children: "Alignment Controls Locked",
                      }),
                      l.jsx("p", {
                        className:
                          "text-[10px] text-neutral-500 max-w-xs mt-1 font-sans leading-relaxed",
                        children:
                          "Accidental drags, wheel scrolls, and zoom actions are blocked. Toggle lock state to modify cell positions.",
                      }),
                      l.jsx("button", {
                        onClick: () => g(!1),
                        className:
                          "mt-3 px-3 py-1 bg-neutral-900 hover:bg-neutral-850 text-white rounded font-mono text-[9px] uppercase tracking-wider shadow-xs transition-all cursor-pointer",
                        children: "Unlock Controls",
                      }),
                    ],
                  }),
                l.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                  children: [
                    l.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        l.jsx("label", {
                          className:
                            "text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider",
                          children: "Select Active Cell",
                        }),
                        l.jsx("div", {
                          className: "grid grid-cols-7 gap-1",
                          children: [0, 3, 6, 7, 8, 10, 11].map((E) =>
                            l.jsxs(
                              "button",
                              {
                                onClick: () => h(E),
                                className: `px-1 py-1.5 rounded text-[9px] font-mono font-medium border text-left flex flex-col justify-between transition-all duration-200 ${f === E ? "bg-neutral-900 text-white border-neutral-900 shadow-sm" : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"}`,
                                children: [
                                  l.jsxs("span", {
                                    className: "font-bold text-[9px]",
                                    children: ["Cell ", E],
                                  }),
                                  l.jsx("span", {
                                    className:
                                      "text-[8px] opacity-75 truncate max-w-full",
                                    children:
                                      E === 0
                                        ? "NOV00034"
                                        : E === 3
                                          ? "NOVA0019"
                                          : E === 6
                                            ? "TD-086"
                                            : E === 7
                                              ? "Ear"
                                              : E === 8
                                                ? "TD-382"
                                                : E === 10
                                                  ? "TD-263"
                                                  : "TD-297",
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        }),
                        l.jsx("div", {
                          className:
                            "mt-1 flex items-center gap-2 justify-between",
                          children: l.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              l.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-neutral-500",
                                children: "Other cells:",
                              }),
                              l.jsx("select", {
                                value: f,
                                onChange: (E) => h(Number(E.target.value)),
                                className:
                                  "bg-neutral-50 border border-neutral-200 rounded text-xxs font-mono p-1 text-neutral-700",
                                children: [1, 2, 4, 5, 9].map((E) =>
                                  l.jsxs(
                                    "option",
                                    {
                                      value: E,
                                      children: ["Cell ", E, " (Slices)"],
                                    },
                                    E,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                        l.jsxs("div", {
                          className:
                            "flex items-center justify-between p-2.5 bg-amber-50/30 border border-amber-100 rounded-lg",
                          children: [
                            l.jsxs("div", {
                              className: "flex flex-col pr-1",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-[10px] font-mono font-bold text-neutral-700 uppercase tracking-wider",
                                  children: "Uncropped View",
                                }),
                                l.jsx("span", {
                                  className:
                                    "text-[9px] text-neutral-400 font-sans leading-tight",
                                  children:
                                    "Reveal full outer margins of image",
                                }),
                              ],
                            }),
                            l.jsx("button", {
                              id: "toggle-reveal-bounds",
                              onClick: () => d(!c),
                              className: `w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-hidden shrink-0 ${c ? "bg-amber-500" : "bg-neutral-300"}`,
                              children: l.jsx("div", {
                                className: `bg-white w-4 h-4 rounded-full shadow-xs transform duration-200 ${c ? "translate-x-4" : "translate-x-0"}`,
                              }),
                            }),
                          ],
                        }),
                        l.jsx("div", {
                          className:
                            "mt-2 p-3 bg-neutral-50 border border-neutral-150 rounded-lg",
                          children: l.jsxs("p", {
                            className:
                              "text-[11px] text-neutral-600 leading-relaxed font-sans flex items-start gap-1.5",
                            children: [
                              l.jsx(QS, {
                                className:
                                  "w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5",
                              }),
                              l.jsxs("span", {
                                children: [
                                  l.jsx("strong", {
                                    children: "Drag directly on active image:",
                                  }),
                                  " Drag and pan images live on the canvas! A dashed boundary outline shows the full image.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Scale (Zoom)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    ((Ue = b[f]) == null ? void 0 : Ue.scale) ??
                                      100,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                l.jsx("button", {
                                  onClick: () => {
                                    S((E) => {
                                      var B;
                                      const D =
                                        ((B = E[f]) == null
                                          ? void 0
                                          : B.scale) ?? 100;
                                      return {
                                        ...E,
                                        [f]: {
                                          ...E[f],
                                          scale: Math.max(10, D - 5),
                                        },
                                      };
                                    });
                                  },
                                  className:
                                    "p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none",
                                  title: "Zoom Out",
                                  children: "-",
                                }),
                                l.jsx("input", {
                                  type: "range",
                                  min: "10",
                                  max: "1000",
                                  value:
                                    ((_ = b[f]) == null ? void 0 : _.scale) ??
                                    100,
                                  onChange: (E) => {
                                    const D = Number(E.target.value);
                                    S((B) => ({
                                      ...B,
                                      [f]: { ...B[f], scale: D },
                                    }));
                                  },
                                  className:
                                    "flex-1 accent-amber-500 cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none",
                                }),
                                l.jsx("button", {
                                  onClick: () => {
                                    S((E) => {
                                      var B;
                                      const D =
                                        ((B = E[f]) == null
                                          ? void 0
                                          : B.scale) ?? 100;
                                      return {
                                        ...E,
                                        [f]: {
                                          ...E[f],
                                          scale: Math.min(1e3, D + 5),
                                        },
                                      };
                                    });
                                  },
                                  className:
                                    "p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none",
                                  title: "Zoom In",
                                  children: "+",
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Offset X (Horizontal)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    ((P = b[f]) == null ? void 0 : P.offsetX) ??
                                      0,
                                    "px",
                                  ],
                                }),
                              ],
                            }),
                            l.jsx("input", {
                              type: "range",
                              min: "-250",
                              max: "250",
                              value:
                                ((L = b[f]) == null ? void 0 : L.offsetX) ?? 0,
                              onChange: (E) => {
                                const D = Number(E.target.value);
                                S((B) => ({
                                  ...B,
                                  [f]: { ...B[f], offsetX: D },
                                }));
                              },
                              className:
                                "w-full accent-amber-500 cursor-pointer",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Offset Y (Vertical)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    (($ = b[f]) == null ? void 0 : $.offsetY) ??
                                      0,
                                    "px",
                                  ],
                                }),
                              ],
                            }),
                            l.jsx("input", {
                              type: "range",
                              min: "-250",
                              max: "250",
                              value:
                                ((K = b[f]) == null ? void 0 : K.offsetY) ?? 0,
                              onChange: (E) => {
                                const D = Number(E.target.value);
                                S((B) => ({
                                  ...B,
                                  [f]: { ...B[f], offsetY: D },
                                }));
                              },
                              className:
                                "w-full accent-amber-500 cursor-pointer",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex gap-2 mt-2",
                          children: [
                            l.jsx("button", {
                              onClick: () => ze(f),
                              className:
                                "flex-1 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xxs font-mono rounded border border-neutral-200 transition-colors",
                              children: "Reset Current Cell",
                            }),
                            l.jsx("button", {
                              onClick: ve,
                              className: `flex-1 py-1.5 text-xxs font-mono rounded border flex items-center justify-center gap-1.5 transition-all duration-300 ${x ? "bg-emerald-500 text-white border-emerald-600" : "bg-neutral-900 text-white border-neutral-950 hover:bg-neutral-800"}`,
                              children: x
                                ? l.jsxs(l.Fragment, {
                                    children: [
                                      l.jsx(Au, { className: "w-3.5 h-3.5" }),
                                      "Copied!",
                                    ],
                                  })
                                : l.jsxs(l.Fragment, {
                                    children: [
                                      l.jsx(_S, { className: "w-3.5 h-3.5" }),
                                      "Copy Alignment Code",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400",
              children: [
                l.jsx("span", { children: "Development Tool active" }),
                l.jsxs("span", {
                  className:
                    "text-neutral-500 font-semibold bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100",
                  children: ["Selected: Cell ", f],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function cP() {
  const [e, t] = k.useState("normal"),
    [n, r] = k.useState(1.15),
    [s, i] = k.useState(1),
    [o, a] = k.useState(1);
  return l.jsx("section", {
    id: "interactive-hero",
    className:
      "relative w-full pt-28 md:pt-32 pb-0 px-4 md:px-6 flex items-center justify-center overflow-hidden",
    children: l.jsxs("div", {
      className:
        "w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12",
      children: [
        l.jsx(X.div, {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, delay: 0.3 },
          className:
            "text-neutral-950 uppercase shrink-0 text-center md:text-right",
          children: l.jsxs("div", {
            className:
              "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap",
            children: [
              "Founder.",
              l.jsx("span", { className: "md:hidden", children: " " }),
              l.jsx("span", {
                className: "hidden md:inline",
                children: l.jsx("br", {}),
              }),
              l.jsx("span", {
                className: "mt-1 md:block",
                children: "Writer.",
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className:
            "w-[290px] sm:w-[450px] md:w-[560px] lg:w-[672px] max-w-full flex items-center justify-center shrink-0",
          children: l.jsx(uP, {
            currentImageUrl: "/taranna.png",
            blendMode: e,
            contrast: n,
            brightness: s,
            saturate: o,
          }),
        }),
        l.jsx(X.div, {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, delay: 0.3 },
          className:
            "text-neutral-950 uppercase shrink-0 text-center md:text-left",
          children: l.jsxs("div", {
            className:
              "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap",
            children: [
              "Speaker.",
              l.jsx("span", { className: "md:hidden", children: " " }),
              l.jsx("span", {
                className: "hidden md:inline",
                children: l.jsx("br", {}),
              }),
              l.jsx("span", { className: "mt-1 md:block", children: "Model." }),
            ],
          }),
        }),
      ],
    }),
  });
}
const dP = [
    {
      id: "visionary",
      label: "SOCIAL ENTREPRENEUR",
      description:
        "Founder of Deepjyoti India Foundation (Sampoorna), building healthcare, mental health, and dignity-first programs for young women and the elderly across India.",
      image: "/TD-004.jpg.jpeg",
      icon: n2,
      readMoreColor: "text-sky-400 hover:text-sky-300",
      objectPosition: "center 20%",
    },
    {
      id: "voice",
      label: "WRITER",
      description:
        "Free verse. Confessional. Unguarded. Poems that turn maggi and adrak chai into metaphors for desire, and grief into a language anyone can hold.",
      image: "/Writer.jpg.jpeg",
      icon: ZS,
      readMoreColor: "text-orange-400 hover:text-orange-300",
      objectPosition: "center 20%",
    },
    {
      id: "strategist",
      label: "PUBLIC SPEAKER",
      description:
        "A podcaster and speaker who talks about what most people avoid — shame, guilt, rejection — and invites people to feel it all the way through instead of around it.",
      image: "/Speaker.JPG.jpeg",
      icon: od,
      readMoreColor: "text-teal-400 hover:text-teal-300",
      objectPosition: "center 20%",
    },
    {
      id: "catalyst",
      label: "MODEL",
      description:
        "A plus-size model who became, for someone else, exactly what she once needed to see. Her work has helped a generation of plus-size men and women embrace their bodies as they are.",
      image: "/Modle.JPG.jpeg",
      icon: Vx,
      readMoreColor: "text-amber-400 hover:text-amber-300",
      objectPosition: "center 20%",
    },
  ],
  fP = {
    visionary: "social-entrepreneur",
    voice: "writer",
    catalyst: "model",
    strategist: "public-speaker",
  };
function hP({ onNavigate: e }) {
  const t = k.useRef(null),
    [n, r] = k.useState(null),
    [s, i] = k.useState(!1);
  k.useEffect(() => {
    const d = () => {
      i(window.innerWidth < 768);
    };
    return (
      d(),
      window.addEventListener("resize", d),
      () => window.removeEventListener("resize", d)
    );
  }, []);
  const { scrollYProgress: o } = nP({
      target: t,
      offset: ["start start", "end start"],
    }),
    a = Sl(o, [0, 0.7], [0, -120]),
    u = Sl(o, [0, 0.6], [1, 0]),
    c = Sl(o, [0, 0.6], [1, 0.95]);
  return l.jsx("div", {
    id: "feathers",
    className: "relative bg-white",
    ref: t,
    children: l.jsx(X.div, {
      style: { y: a, opacity: u, scale: c },
      className:
        "relative h-[95vh] w-full overflow-hidden flex flex-col md:flex-row bg-neutral-900 border-b border-neutral-100",
      children: dP.map((d, f) => {
        const h = n === f,
          x = n !== null;
        let w = "25%";
        x && (w = h ? "50%" : "16.6%");
        let v = "100%";
        return (
          s && ((v = "25%"), x && (v = h ? "40%" : "20%")),
          l.jsxs(
            "div",
            {
              onClick: () => {
                e &&
                  (e(fP[d.id]),
                  window.scrollTo({ top: 0, behavior: "smooth" }));
              },
              className:
                "relative transition-all duration-700 ease-out flex-grow cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800/10 last:border-0",
              style: { width: s ? "100%" : w, height: s ? v : "100%" },
              onMouseEnter: () => r(f),
              onMouseLeave: () => r(null),
              children: [
                l.jsxs("div", {
                  className: "absolute inset-0 w-full h-full bg-neutral-950",
                  children: [
                    l.jsx("img", {
                      src: d.image.startsWith("http")
                        ? d.image
                        : encodeURI(d.image),
                      alt: d.label,
                      referrerPolicy: "no-referrer",
                      className: "w-full h-full object-cover",
                      style: {
                        objectPosition: d.objectPosition || "center 20%",
                        transition:
                          "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: h ? "scale(1.06)" : "scale(1.0)",
                        filter: h
                          ? "grayscale(100%) brightness(0.3) contrast(1.1)"
                          : "grayscale(0%) brightness(0.65) contrast(1.0)",
                      },
                    }),
                    l.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-60",
                    }),
                    (d.id === "visionary" || d.id === "voice") &&
                      l.jsx("div", {
                        className: `absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none transition-opacity duration-700 ${h ? "opacity-100" : "opacity-40"}`,
                      }),
                  ],
                }),
                l.jsxs("div", {
                  className: `absolute inset-0 p-6 md:p-12 flex flex-col z-10 select-none transition-all duration-500 ${h ? "justify-center items-center text-center bg-black/35" : "justify-end items-start text-left"}`,
                  children: [
                    l.jsx("div", {
                      className: "absolute top-6 right-6 md:top-10 md:right-10",
                      children: l.jsxs(X.div, {
                        animate: {
                          scale: h ? 1.15 : 1,
                          borderColor: h
                            ? "rgba(255, 255, 255, 0.4)"
                            : "rgba(255, 255, 255, 0.1)",
                          backgroundColor: h
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.4)",
                        },
                        className:
                          "p-2 md:p-2.5 rounded-full border border-neutral-800 text-white backdrop-blur-xs flex items-center justify-center relative",
                        children: [
                          l.jsx(d.icon, {
                            className: "w-4 h-4 text-neutral-100",
                          }),
                          (d.id === "visionary" || d.id === "voice") &&
                            l.jsx("span", {
                              className:
                                "absolute inset-0 rounded-full border border-white/35 animate-ping opacity-25",
                            }),
                        ],
                      }),
                    }),
                    l.jsxs(X.div, {
                      layout: !0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                      className: `flex flex-col gap-3 transition-all duration-500 ${h ? "items-center max-w-xl" : "items-start"}`,
                      children: [
                        l.jsx("span", {
                          className: `font-mono tracking-[0.25em] text-neutral-400 transition-all duration-500 uppercase ${h ? "text-xs md:text-sm" : "text-[10px] md:text-xs"}`,
                          children: "ROLE OUTLINE",
                        }),
                        l.jsxs(X.h2, {
                          className: `font-heading font-bold text-white transition-all duration-500 tracking-widest uppercase ${h ? "text-2xl md:text-4xl my-2" : "text-lg md:text-2xl"}`,
                          animate: {
                            letterSpacing: h ? "0.18em" : "0.05em",
                            color: h ? "#ffffff" : "#e5e5e5",
                            textShadow:
                              h && (d.id === "visionary" || d.id === "voice")
                                ? "0 0 12px rgba(255,255,255,0.4)"
                                : "none",
                          },
                          transition: { duration: 0.4 },
                          children: ["[ ", d.label, " ]"],
                        }),
                        l.jsxs("div", {
                          className: `transition-all duration-500 ease-out ${h ? "opacity-100 translate-y-0 max-h-[300px] mt-4" : "opacity-0 translate-y-4 max-h-0 pointer-events-none overflow-hidden"}`,
                          children: [
                            l.jsx("p", {
                              className: `font-sans text-neutral-100 leading-relaxed font-normal transition-all duration-500 ${h ? "text-sm md:text-lg" : "text-xs md:text-sm"}`,
                              children: d.description,
                            }),
                            l.jsxs("div", {
                              className: `font-mono font-bold tracking-widest uppercase mt-4 flex items-center gap-1.5 transition-all duration-300 ${d.readMoreColor} ${h ? "text-xs md:text-sm justify-center" : "text-[10px] md:text-xs"}`,
                              children: [
                                "Read More ",
                                l.jsx("span", {
                                  className: "text-sm",
                                  children: "→",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            d.id,
          )
        );
      }),
    }),
  });
}
function pP({ view: e, onBack: t, onNavigate: n }) {
  const [r, s] = k.useState(null),
    [i, o] = k.useState(!1),
    [a, u] = k.useState("1000"),
    [c, d] = k.useState(""),
    [f, h] = k.useState(""),
    [x, w] = k.useState(null),
    [v, y] = k.useState(0),
    [p, m] = k.useState(!1),
    [g, b] = k.useState(!1),
    [S, j] = k.useState("2026-07-15"),
    [N, T] = k.useState(null),
    [R, M] = k.useState(""),
    [z, ae] = k.useState(1.1),
    [ve, ze] = k.useState(1),
    Ce = (A, te) => {
      n ? n("gallery") : (T(A), M(te));
    },
    [Ue, _] = k.useState("youtube"),
    [P, L] = k.useState(null),
    [$, K] = k.useState(0),
    [E, D] = k.useState(""),
    [B, me] = k.useState(0),
    [G, We] = k.useState({
      "ig-monsoon": 4210,
      "ig-plus-size": 6842,
      "ig-adrak-chai": 3951,
    }),
    [we, An] = k.useState({}),
    [$t, Zt] = k.useState({
      "ig-monsoon": [
        {
          user: "rhea_mumbai",
          text: "This is so beautifully put. Mumbai at 4am has a different soul entirely.",
        },
        {
          user: "amit_sharma",
          text: "The concept of quiet inside is so true. Needed this reminder today.",
        },
      ],
      "ig-plus-size": [
        {
          user: "priya.garg",
          text: "You are such an inspiration Taranna! Thank you for walking so boldly.",
        },
        { user: "kabir_d", text: "All bodies are indeed great bodies! 👑" },
      ],
      "ig-adrak-chai": [
        {
          user: "nisha_reads",
          text: "A hot cup of adrak chai in the rain is therapeutic. Beautiful poetry.",
        },
        { user: "siddharth_99", text: "Tactile joys are the realest joys." },
      ],
    }),
    [sr, bf] = k.useState({});
  Cg.useEffect(() => {
    let A;
    if (P) {
      const ge =
        {
          "yt-disliked": [
            {
              time: 0,
              text: `🎥 [AUDIO PREVIEW] "We spend our entire lives managing other people's perceptions of us."`,
            },
            {
              time: 4,
              text: '"What if we just stopped and let them think what they want?"',
            },
            {
              time: 8,
              text: '"The moment you accept the freedom of being misunderstood..."',
            },
            {
              time: 12,
              text: '"...is the moment you actually start living on your own terms. Unapologetically."',
            },
          ],
          "yt-shame": [
            {
              time: 0,
              text: '🎥 [AUDIO PREVIEW] "Shame dies when it is spoken in a room where people listen."',
            },
            {
              time: 4,
              text: '"It thrives in the quiet, in the half-truths we keep telling ourselves."',
            },
            {
              time: 8,
              text: '"But the moment you name it, you strip it of all its power."',
            },
            {
              time: 12,
              text: `"So let's name it together. Let's make it speak, loud and clear."`,
            },
          ],
          "yt-body": [
            {
              time: 0,
              text: '🎥 [AUDIO PREVIEW] "Your body is not an ornament to look at; it is the home you live in."',
            },
            {
              time: 4,
              text: '"It is the vessel that carries your laughter, your stories, your work."',
            },
            {
              time: 8,
              text: '"We do not owe anyone a certain size to deserve space in a room."',
            },
            {
              time: 12,
              text: '"Existing loudly is a form of celebration. Every body is a great body."',
            },
          ],
        }[P] || [];
      (ge.length > 0 && D(ge[0].text),
        (A = setInterval(() => {
          me((Jt) => {
            const en = Jt + 1;
            if (en >= 16) return (L(null), K(0), D(""), 0);
            K((en / 16) * 100);
            const Ni = [...ge].reverse().find((nw) => en >= nw.time);
            return (Ni && D(Ni.text), en);
          });
        }, 1e3)));
    } else (me(0), K(0), D(""));
    return () => {
      A && clearInterval(A);
    };
  }, [P]);
  const q1 = (A) => {
      (A.preventDefault(),
        o(!0),
        setTimeout(() => {
          (o(!1), s(null), d(""), h(""));
        }, 2800));
    },
    Q1 = (A) => {
      (A.preventDefault(),
        b(!0),
        setTimeout(() => {
          (b(!1), m(!1));
        }, 2800));
    },
    Z1 = (A) => {
      const te = we[A];
      (An((ge) => ({ ...ge, [A]: !te })),
        We((ge) => ({ ...ge, [A]: ge[A] + (te ? -1 : 1) })));
    },
    Sf = (A) => {
      const te = sr[A] || "";
      te.trim() &&
        (Zt((ge) => ({
          ...ge,
          [A]: [
            ...(ge[A] || []),
            { user: "viewer_anonymous", text: te.trim() },
          ],
        })),
        bf((ge) => ({ ...ge, [A]: "" })));
    },
    kf = [
      {
        id: "yin-yang",
        title: "Yin and Yang",
        snippet: "A blessing built through repetition...",
        text: `I wish you adrak chai in the monsoon,
and a wool blanket that smells of yesterday's sun.
I wish you words that do not need to be explained,
and silences that feel like home.

I wish you the strength to break apart
so you may find how wide you can stretch.
I wish you the grace of water, flowing over stones,
and the stillness of the mountain at dusk.

I wish you… carrying the whole poem's rhythm.
Unmistakably, authentically yourself.`,
        vibe: "Warm / Rhythmic",
      },
      {
        id: "the-heart",
        title: "the heart",
        snippet: "Written from the perspective of a dying spouse...",
        text: `The machine next to me clicks like a clock.
You hold my hand, tracing the blue veins that have slowed.
Do not look for me only in quiet graves;
look for me in the warmth of the morning tea we shared,
in the laughter we left in Mumbai's dusty corners.

I am leaving my own point of view behind.
I am becoming the space between the notes of music you love.
Remember me as the fire that cannot be extinguished.`,
        vibe: "Confessional / Heavy",
      },
      {
        id: "loneliness",
        title: "Loneliness",
        snippet: "A heavy, unresolved gaze into distance...",
        text: `Mumbai is quietest at four in the morning.
The salt in the air is heavy, sticking to the window pane.
I make two cups of adrak chai,
knowing you are asleep four hundred miles away in Delhi.
The tea goes cold on the table.

We are close, yet we are so far away.
The ache in the body is just a map of where you are not.`,
        vibe: "Sensory / Blue",
      },
      {
        id: "39-beyond-here",
        title: "39. Beyond Here",
        snippet: "Sits in heavier, unresolved territory...",
        text: `We crossed the border on a Tuesday afternoon.
There were no signs, only the sudden turn of the trees.
You said, this is where we leave the shame behind.
We walked through four different rooms,
unguarded, looking for a place that didn't ask for permission to exist.

We have reached heights unknowingly,
becoming smooth and boundless like water.`,
        vibe: "Raw / Wit",
      },
      {
        id: "pani-puri",
        title: "Pani puri",
        snippet: "Pushes food-as-desire to its most playful extreme...",
        text: `The mint water is cold against the hot skin of the afternoon.
A single crunch.
The sudden, sharp burst of spice that makes you close your eyes.
It is sweet, it is burning, it is messy.

Just like the way you look at me across the table.
We do not speak,
we just swallow the longing, one bite at a time.`,
        vibe: "Playful / Tactile",
      },
      {
        id: "searching-home",
        title: "Searching for a home",
        snippet: "Built almost entirely out of the five senses...",
        text: `A sound like dry leaves scraping against cement.
The sharp smell of old yellowed paper and wet asphalt.
The touch of old teak wood that has survived fifty monsoon seasons.
The taste of salt on my tongue as the wind blows from the sea.

I am cataloging my world with precision.
I am finding that home is not a place with doors,
but the skin I live in.`,
        vibe: "Grounded / Senses",
      },
    ],
    J1 = [
      {
        title: "Shame and guilt — naming them instead of managing around them",
        desc: "Delving deep into the emotional blocks that society teaches us to swallow. Taranna discusses how raw confession and public naming dismantle the power of shame, inviting audiences to step into radical self-acceptance.",
      },
      {
        title: "Rejection and difficult life experiences",
        desc: "An honest exploration of failures, career re-routes, and relational ruptures. Moving away from standard 'resilience' hype, she speaks on the quiet strength found in letting things break apart so they can expand.",
      },
      {
        title: "Yoga, wellness, and mental health",
        desc: "Integrating somatic practices with modern mental health advocacy. How alignment of the physical body serves as a baseline for emotional recovery and personal truth.",
      },
      {
        title: "Body positivity — 'all bodies are great bodies'",
        desc: "A direct challenge to systemic fatphobia and straight-size modeling standards. Taranna details the path from seeking external approval to existing loudly and joyfully.",
      },
      {
        title: "Authenticity — living without fear or hesitation",
        desc: "A manifesto on self-trust. How to build independent systems of self-approval and survive in creative spaces without needing permission to belong.",
      },
    ],
    ew = [
      {
        image: "/Modle.JPG.jpeg",
        caption: "Unbound Presence // Plus-Size Boldness",
        label: "Model",
      },
      {
        image: "/TD-297.jpg.jpeg",
        caption: "Textured Warmth // Modern Knitwear Poise",
        label: "Model",
      },
      {
        image: "/NOV00034.JPG.jpeg",
        caption: "Studio Amber Portrait // Warm-Toned Confidence",
        label: "Model",
      },
      {
        image: "/NOVA0019.JPG.jpeg",
        caption: "Soft Poise & Elegance // Representation Redefined",
        label: "Model",
      },
      {
        image: "/taranna.png",
        caption: "Cinematic Cover Silhouette // The Golden Gaze",
        label: "Editorial",
      },
      {
        image: "/TD-382.jpg.jpeg",
        caption: "Intense Sincerity // Editorial Poise",
        label: "Editorial",
      },
      {
        image: "/Speaker.JPG.jpeg",
        caption: "Sculpted Shadow-Play // Chiaroscuro Modeling",
        label: "Creative",
      },
      {
        image: "/Writer.jpg.jpeg",
        caption: "Contemplative Silence // Serene Studio Framing",
        label: "Creative",
      },
    ],
    tw = () => {
      switch (e) {
        case "social-entrepreneur":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#0e5fa3] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#0e5fa3] font-bold block uppercase mb-1",
                    children: "PAGE 1 // SOCIAL ENTREPRENEUR",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Deepjyoti India Foundation",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#E65F1B] mt-2",
                    children: 'Sampoorna — meaning "complete."',
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-8 flex flex-col gap-10",
                    children: [
                      l.jsx("div", {
                        className: "prose prose-neutral max-w-none",
                        children: l.jsx("p", {
                          className:
                            "font-sans font-light text-base md:text-lg text-neutral-600 leading-relaxed mb-6",
                          children:
                            "Taranna Deepjyoti is the founder of Deepjyoti India Foundation, which runs its flagship initiative, Sampoorna, out of Mumbai. Registered under 12A and 80G, CSR-compliant, and recognized by NITI Aayog, the foundation was built on a simple belief: that empowerment isn't complete unless it addresses the whole person — their health, their confidence, and their sense of dignity, together.",
                        }),
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-8",
                        children: [
                          l.jsxs("h2", {
                            className:
                              "font-heading text-xl md:text-2xl font-bold text-neutral-950 uppercase tracking-wider pb-3 border-b border-neutral-100 flex items-center gap-2",
                            children: [
                              l.jsx("span", {
                                className:
                                  "w-2.5 h-2.5 bg-[#0e5fa3] rounded-full",
                              }),
                              "What Sampoorna Does",
                            ],
                          }),
                          l.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                              l.jsxs("div", {
                                className:
                                  "p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3",
                                children: [
                                  l.jsx("div", {
                                    className: "text-xl",
                                    children: "👩‍🦰",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-base font-bold text-neutral-900 uppercase",
                                    children: "Empowering Young Women",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                                    children:
                                      "At its core, Sampoorna works with young women to build mental health support and confidence into the same space — recognizing that self-worth and wellbeing aren't separate journeys. The goal isn't just intervention; it's helping women lead genuinely confident, fulfilling lives on their own terms.",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3",
                                children: [
                                  l.jsx("div", {
                                    className: "text-xl",
                                    children: "👴",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-base font-bold text-neutral-900 uppercase",
                                    children: "Caring for Senior Citizens",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light mb-2",
                                    children:
                                      "In 2024, Sampoorna expanded into elder care, launching regular health camps across old age homes in Guwahati, Assam. These camps bring qualified doctors in for essential checkups — but Sampoorna didn't stop at the clinical.",
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "mt-auto p-3.5 bg-amber-50/50 rounded-xl border border-amber-100/60 flex flex-col gap-1.5",
                                    children: [
                                      l.jsx("span", {
                                        className:
                                          "font-mono text-[8px] tracking-widest text-[#c57d11] font-bold uppercase",
                                        children: "SPECIAL PARTNERSHIP",
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "font-sans text-[11px] text-neutral-600 leading-relaxed",
                                        children:
                                          "Partnering with the Assam Clowning Academy, we introduced medical clowning therapy: a joyful, disarming way to ease loneliness.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "p-6 rounded-2xl bg-[#FCFAF6] border border-neutral-100 flex flex-col gap-3 mt-4",
                            children: [
                              l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  l.jsx(Lx, {
                                    className: "w-4 h-4 text-[#0e5fa3]",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-xs font-bold text-[#0e5fa3] tracking-widest uppercase",
                                    children: "Looking Ahead",
                                  }),
                                ],
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                                children:
                                  "Sampoorna plans to make these health camps a monthly fixture, not a one-off — sustained care, not a single visit. Alongside this, the foundation remains committed to its founding focus: young women's mental health and confidence.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "flex flex-col gap-5 mt-8 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                            children: [
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                    children: "FIELD ARCHIVE // DOCUMENTATION",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-lg font-bold text-neutral-900 uppercase",
                                    children: "Socio-Entrepreneurial Impact",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                    children:
                                      "Moments of active frontline leadership, bringing healthcare and mental health support camps across Northeast India. Click to view in Gallery.",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                                children: [
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/TD-004.jpg.jpeg",
                                        "Empathetic frontline counseling session with women in regional centers.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx("img", {
                                        src: "/TD-004.jpg.jpeg",
                                        alt: "Empowerment Camps",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Frontline Camp",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Assam Health Support",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/TD-263.jpg.jpeg",
                                        "Visionary healthcare and pediatric wellness support loop.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx("img", {
                                        src: "/TD-263.jpg.jpeg",
                                        alt: "Wellness Loops",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Healthcare Loop",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Children & Elder Care",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/Speaker.JPG.jpeg",
                                        "Coordinating systemic aid and regional community development.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx("img", {
                                        src: "/Speaker.JPG.jpeg",
                                        alt: "Coordination and Leadership",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Aid Coordination",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Deepjyoti Operations",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-8 md:p-10 bg-neutral-900 rounded-3xl text-white relative overflow-hidden mt-8",
                        children: [
                          l.jsx("div", {
                            className:
                              "absolute top-6 right-8 text-neutral-800 font-serif text-8xl pointer-events-none select-none",
                            children: "“",
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-[0.25em] text-[#E65F1B] font-bold block mb-4 uppercase",
                            children: "IN HER OWN WORDS",
                          }),
                          l.jsx("blockquote", {
                            className:
                              "font-display italic text-lg md:text-xl text-neutral-100 leading-relaxed mb-6",
                            children: `"I started Deepjyoti India Foundation because I kept seeing the same gap — people being handed one piece of support when what they actually needed was all of it at once. Health without dignity isn't enough. Confidence without care isn't enough. Sampoorna means complete, and that's the point — showing up for the whole person, not just the part that's easiest to fix."`,
                          }),
                          l.jsx("cite", {
                            className:
                              "font-mono text-[9px] tracking-widest text-neutral-400 font-bold uppercase block not-italic",
                            children: "— Taranna Deepjyoti, Founder",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className:
                      "lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6",
                    children: l.jsxs("div", {
                      className:
                        "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest font-bold text-[#0e5fa3] block uppercase mb-1",
                              children: "GET INVOLVED",
                            }),
                            l.jsx("h3", {
                              className:
                                "font-heading text-lg font-bold text-neutral-900",
                              children: "Join Our Mission",
                            }),
                            l.jsx("p", {
                              className:
                                "font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light",
                              children:
                                "We run on collective empathy. Pick an action below to participate in our active programs.",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-3.5",
                          children: [
                            l.jsxs("button", {
                              onClick: () => {
                                (s("partner"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-[#0e5fa3] hover:bg-[#0c4e85] px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Partner with us" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                            l.jsxs("button", {
                              onClick: () => {
                                (s("volunteer"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-neutral-700 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-5 py-4 rounded-xl transition-colors cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Volunteer" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                            l.jsxs("button", {
                              onClick: () => {
                                (s("donate"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-[#E65F1B] hover:text-white bg-[#E65F1B]/10 hover:bg-[#E65F1B] border border-[#E65F1B]/35 px-5 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Donate" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className:
                            "pt-4 border-t border-neutral-100 flex flex-col gap-2",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase",
                              children: "FOUNDATION CREDENTIALS",
                            }),
                            l.jsxs("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "12A REGISTERED",
                                }),
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "80G COMPLIANT",
                                }),
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "NITI AAYOG",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        case "writer":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#E65F1B] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#E65F1B] font-bold block uppercase mb-1",
                    children: "PAGE 2 // WRITER",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Writer",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2",
                    children: "Confessional. Sensory. Unguarded.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-6 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-200/50 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-3",
                            children: "PERSONAL NARRATIVE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "I write mostly in free verse — confessional poetry that doesn't flinch. Longing, distance, grief, the ache of being close to someone and still far away, the cities that raised me — Mumbai and Delhi aren't just places I've lived, they're places I feel from.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "I ground everything in the physical. A bowl of maggi. Adrak chai going cold. The weather. Skin. I don't think emotion means much until it's attached to something you can taste or touch — so that's where I always start.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "ON HER STYLE // ARCHIVES",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children: `Taranna's poetry moves comfortably between vulnerability and wit. A poem about maggi can be funny and tender in the same breath; a poem like "Loneliness" or "39. Beyond Here" sits in heavier, unresolved territory and doesn't rush toward resolution. She's also written in other voices entirely — "the heart," a poem written from the perspective of a dying spouse, shows a writer willing to leave her own point of view behind completely.`,
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children: `Her more recent work has leaned even further into the sensory and the embodied. "Pani puri" pushes food-as-desire to its most playful extreme. "Searching for a home" is built almost entirely out of the five senses — sound, smell, touch, catalogued with real precision. And "Yin and Yang" reveals a gift for the list-poem — a blessing built through repetition, "I wish you…" carrying the whole poem's rhythm.`,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl shadow-xs flex flex-col gap-4",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                children: "DIGITAL POEM PORTAL",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-sm font-bold text-neutral-900 uppercase",
                                children: "More Poems & Anthologies",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-[11px] text-neutral-400 font-light mt-1",
                                children:
                                  "Click a title below to view the sensory confessional piece.",
                              }),
                            ],
                          }),
                          l.jsx("div", {
                            className: "grid grid-cols-2 gap-2.5",
                            children: kf.map((A) =>
                              l.jsxs(
                                "button",
                                {
                                  onClick: () => w(A.id),
                                  className:
                                    "p-3 text-left rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-[#E65F1B]/5 hover:border-[#E65F1B]/35 transition-all cursor-pointer flex flex-col justify-between min-h-[90px] group",
                                  children: [
                                    l.jsx("span", {
                                      className:
                                        "font-heading text-xs font-bold text-neutral-800 group-hover:text-[#E65F1B] transition-colors",
                                      children: A.title,
                                    }),
                                    l.jsx("span", {
                                      className:
                                        "font-mono text-[8px] text-neutral-400 uppercase tracking-widest mt-1",
                                      children: A.vibe,
                                    }),
                                  ],
                                },
                                A.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1",
                                children: "WRITER'S SHADOWS // PORTRAITS",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Contemplative Workspace & Gaze",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                children:
                                  "Framing the spaces of silent writing where poetic verse translates vulnerability into shared universal echoes. Click to view in Gallery.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                            children: [
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Writer.jpg.jpeg",
                                    "Shedding quiet light on raw, confessional write-ups.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/Writer.jpg.jpeg",
                                    alt: "Poetics in Chiaroscuro",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Writing Corner",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Poetics in Chiaroscuro",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Writer.jpg.jpeg",
                                    "Quietly reflecting in sensory rooms where poetry takes root.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/Writer.jpg.jpeg",
                                    alt: "Silent Room",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Contemplative Gaze",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Silent Reflections",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/TD-382.jpg.jpeg",
                                    "Symmetrical focus holding deep poise and authentic sincerity.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/TD-382.jpg.jpeg",
                                    alt: "Intense Sincerity",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Symmetrical Focus",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Symmetrical Sincerity",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "lg:col-span-6",
                    children: l.jsxs("div", {
                      className:
                        "p-8 md:p-12 bg-[#FCFAF6] border border-neutral-200/80 rounded-3xl shadow-sm relative overflow-hidden flex flex-col",
                      children: [
                        l.jsx("div", {
                          className:
                            "absolute top-6 right-6 font-mono text-[8px] tracking-[0.4em] text-neutral-300 font-bold uppercase select-none border border-neutral-200 p-1.5 rounded",
                          children: "FEATURED WORK",
                        }),
                        l.jsx("span", {
                          className:
                            "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block mb-4 uppercase",
                          children: 'Ode to Myself // FROM "TARANNA"',
                        }),
                        l.jsx("h3", {
                          className:
                            "font-heading text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-none mb-6",
                          children: "Don't Let Anyone Ever Say Otherwise",
                        }),
                        l.jsx("div", {
                          className:
                            "font-mono text-[11px] md:text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l-[1.5px] border-neutral-200 flex flex-col gap-1.5 select-all font-light",
                          children: `You are the most precious thing to ever exist on this earth,
a fine blend of earth, ether, water, fire and air.
The way you breathe original ideas into life,
the way you've woven stories out of words,
translated your ideas into inspiring change
that has changed the way many daughters of coming ages view the world.
The way your eyes sparkle every time you discover something new,
come up with a solution,
find a way to help others.

Your love is so deep it could move an entire country into revolution —
a love full of fire that cannot be extinguished,
an embrace so meaningful it feels like every god and goddess is holding you tight,
a smile that lights up the darkest rooms,
a desire to spread laughter where there has been none for days.
You are a force to reckon with. Beckon.
You are slowly becoming a force for greater good.

The ache in your heart is natural —
with each passing day you are breaking apart,
you are expanding.
The world doesn't make sense right now.
You are climbing mountains without knowing it,
reaching heights unknowingly,
crossing countries and places with no changes,
becoming smooth and boundless.

You are a speaker. Why don't you speak?
You are a writer. Write more.
You love color. Create more color.
You love to sing. Sing more.
And be an inspiration.

You don't have to be liked.
You just have to be unmistakably, authentically yourself.
Nothing else.
Everything else will fall into place — is falling into place.

You ask people, "Who am I?"
Ask yourself that question instead.
You are that which cannot be defined.
You are beyond the scope of a career or profession.
You are a multiverse. An independent universe.
You are a bird. You are like water.
You are a lover. You are the sky.
You are the space between notes of music — you are the music.

When you complain, it isn't you complaining.
It's the prisoner inside you, hungry to be free,
feeling stuck in limitations, depending on others' approval.
Dependency for love — maybe that's fine.
Dependency for approval to simply be — that's the worst.
How can you depend on permission to be something
that is already who you are?`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        case "public-speaker":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#0a8fa0] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#0a8fa0] font-bold block uppercase mb-1",
                    children: "PAGE 3 // PUBLIC SPEAKER",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Speaker",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#E65F1B] mt-2",
                    children: "Talking about what everyone else avoids.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-8 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-3",
                            children: "PERSONAL EXPERIENCE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "I talk about the things people usually swallow — shame, guilt, rejection, the parts of a difficult life that don't make it into the highlight reel. Yoga and mental health. Body positivity. The belief, plainly stated, that all bodies are great bodies.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "I don't come to this as a theory. Everything I speak about, I've lived through first — and I invite the people listening to do the same: to sit with what they feel instead of managing it from a distance, to love more deeply, and to be who they actually are without asking for permission first.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "SPEAKER TOPICS & TOPICAL NOTES",
                          }),
                          l.jsx("div", {
                            className:
                              "flex flex-col border border-neutral-100 rounded-2xl bg-white divide-y divide-neutral-100",
                            children: J1.map((A, te) => {
                              const ge = v === te;
                              return l.jsxs(
                                "div",
                                {
                                  className: "flex flex-col",
                                  children: [
                                    l.jsxs("button", {
                                      onClick: () => y(ge ? null : te),
                                      className:
                                        "flex items-center justify-between p-5 text-left hover:bg-neutral-50/50 transition-colors cursor-pointer w-full group",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "font-heading text-xs md:text-sm font-semibold text-neutral-800 group-hover:text-[#0a8fa0] transition-colors",
                                          children: A.title,
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "font-mono text-xs text-neutral-400",
                                          children: ge ? "[-]" : "[+]",
                                        }),
                                      ],
                                    }),
                                    l.jsx(Vr, {
                                      children:
                                        ge &&
                                        l.jsx(X.div, {
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1,
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: { duration: 0.3 },
                                          className:
                                            "overflow-hidden bg-neutral-50/50",
                                          children: l.jsx("div", {
                                            className:
                                              "p-5 font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light border-t border-neutral-100",
                                            children: A.desc,
                                          }),
                                        }),
                                    }),
                                  ],
                                },
                                te,
                              );
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "STAGE PRESENCE // DIALOGUE",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Vocalizing Silent Struggles",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                children:
                                  "Giving voice to deep shame, societal expectations, somatic yoga, and the courage of existing loudly. Click to view in Gallery.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                            children: [
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Speaker.JPG.jpeg",
                                    "Vocalizing shadow work and somatic self-trust before public audiences.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/Speaker.JPG.jpeg",
                                    alt: "Vocalizing Struggles",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Speaking Stage",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Confessional Presentation",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Speaker.JPG.jpeg",
                                    "Sculpted shadow-play capturing spatial poise and intense presence.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/Speaker.JPG.jpeg",
                                    alt: "Sculpted Poise",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Spatial Poise",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Sculpted Shadow-Play",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/NOV00034.JPG.jpeg",
                                    "Authentic engagement, answering somatic healing questions.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx("img", {
                                    src: "/NOV00034.JPG.jpeg",
                                    alt: "Dialogue Session",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Q&A Exchange",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Dialogue & Audience Q&A",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "lg:col-span-4 flex flex-col gap-6",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[8px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "WHERE TO FIND HER",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-base font-bold text-neutral-900 uppercase",
                                children: "Audible Streams",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              l.jsxs("a", {
                                href: "https://www.youtube.com/@withlovetaranna_me",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-red-500 hover:bg-red-50/20 transition-all text-neutral-700 hover:text-red-600 font-mono text-[10px] font-bold tracking-widest uppercase",
                                children: [
                                  l.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      l.jsx(Vh, {
                                        className: "w-4 h-4 text-red-500",
                                      }),
                                      "YouTube Channel",
                                    ],
                                  }),
                                  l.jsx(Rh, {
                                    className: "w-3.5 h-3.5 opacity-60",
                                  }),
                                ],
                              }),
                              l.jsxs("a", {
                                href: "https://www.instagram.com/@withlove_taranna",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-pink-500 hover:bg-pink-50/20 transition-all text-neutral-700 hover:text-pink-600 font-mono text-[10px] font-bold tracking-widest uppercase",
                                children: [
                                  l.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      l.jsx(Mu, {
                                        className: "w-4 h-4 text-pink-500",
                                      }),
                                      "Instagram Feed",
                                    ],
                                  }),
                                  l.jsx(Rh, {
                                    className: "w-3.5 h-3.5 opacity-60",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-4",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest font-bold text-[#E65F1B] block uppercase mb-1",
                                children: "ORATORICAL BOOKING",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-base font-bold text-neutral-900",
                                children: "Speaking Events",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light",
                                children:
                                  "Book Taranna for keynotes, workshops, podcasts or academic panels.",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              (m(!0), b(!1));
                            },
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer text-center",
                            children: "Book Taranna to speak",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "mt-16 pt-12 border-t border-neutral-200/60 flex flex-col gap-8",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-end justify-between gap-4",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-[0.25em] text-[#0a8fa0] font-bold block uppercase mb-1",
                            children: "DIGITAL PREVIEWS // SOCIAL FEEDS",
                          }),
                          l.jsx("h3", {
                            className:
                              "font-heading text-2xl font-bold text-neutral-900 uppercase",
                            children: "Featured Media Samples",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-500 font-light mt-1",
                            children:
                              "Play audio extracts or read social insights directly below to preview her message before visiting the platforms.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex bg-neutral-100 p-1 rounded-xl self-start md:self-auto border border-neutral-200/40",
                        children: [
                          l.jsxs("button", {
                            onClick: () => {
                              (_("youtube"), L(null));
                            },
                            className: `px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${Ue === "youtube" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"}`,
                            children: [
                              l.jsx("span", {
                                className: `w-1.5 h-1.5 rounded-full ${Ue === "youtube" ? "bg-red-500 animate-pulse" : "bg-neutral-300"}`,
                              }),
                              "YouTube Samples",
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              (_("instagram"), L(null));
                            },
                            className: `px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${Ue === "instagram" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"}`,
                            children: [
                              l.jsx("span", {
                                className: `w-1.5 h-1.5 rounded-full ${Ue === "instagram" ? "bg-pink-500 animate-pulse" : "bg-neutral-300"}`,
                              }),
                              "Instagram Feed",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx(Vr, {
                    mode: "wait",
                    children:
                      Ue === "youtube"
                        ? l.jsxs(
                            X.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.4 },
                              className: "flex flex-col gap-8",
                              children: [
                                P &&
                                  l.jsxs(X.div, {
                                    initial: { opacity: 0, scale: 0.98 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0 },
                                    className:
                                      "bg-neutral-950 text-white rounded-3xl p-5 md:p-6 border border-neutral-800 flex flex-col gap-5 shadow-xl relative overflow-hidden",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex justify-between items-center pb-3 border-b border-neutral-850",
                                        children: [
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("span", {
                                                className:
                                                  "font-mono text-[8px] tracking-widest text-red-500 font-bold uppercase",
                                                children:
                                                  "NOW STREAMING // ACTIVE VIDEO EMBED",
                                              }),
                                              l.jsxs("h4", {
                                                className:
                                                  "font-heading text-base md:text-lg font-bold text-white tracking-tight uppercase mt-0.5",
                                                children: [
                                                  P === "yt-disliked" &&
                                                    "The Courage to Be Disliked",
                                                  P === "yt-shame" &&
                                                    "Shame and Guilt: Naming Your Shadows",
                                                  P === "yt-body" &&
                                                    "Body Image & Radical Self-Love",
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsx("button", {
                                            onClick: () => L(null),
                                            className:
                                              "font-mono text-[10px] tracking-widest uppercase bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white font-bold px-4 py-2 rounded-full transition-all cursor-pointer",
                                            children: "Close Video ×",
                                          }),
                                        ],
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "w-full aspect-video rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900 shadow-inner",
                                        children: l.jsx("iframe", {
                                          src: `https://www.youtube.com/embed/${P === "yt-disliked" ? "_U0QvsnVfGg" : P === "yt-shame" ? "psN1DORYYV0" : "H_8y0SBy3H8"}?autoplay=1&rel=0&modestbranding=1`,
                                          title: "Interactive Video Player",
                                          frameBorder: "0",
                                          allow:
                                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                          allowFullScreen: !0,
                                          className: "w-full h-full",
                                        }),
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "flex justify-between items-center font-mono text-[9px] text-neutral-400",
                                        children: [
                                          l.jsx("span", {
                                            children:
                                              "SOURCE: PUBLIC OUTREACH & TED TALKS",
                                          }),
                                          l.jsx("span", {
                                            children:
                                              "PRESS ESCAPE OR CLICK CLOSE TO DISMISS",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                l.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-3 gap-6",
                                  children: [
                                    {
                                      id: "yt-disliked",
                                      title: "The Courage to Be Disliked",
                                      desc: "A deep dive into radical self-acceptance, breaking down why seeking constant external approval is a prison.",
                                      duration: "18:45",
                                      views: "12.4k",
                                      quote:
                                        "We spend our entire lives managing other people's perceptions. What if we just stopped?",
                                      color: "from-blue-900/40",
                                    },
                                    {
                                      id: "yt-shame",
                                      title:
                                        "Shame & Guilt: Naming Your Shadows",
                                      desc: "Recorded live at a mental health summit, Taranna explains why suppressing emotions prolongs our suffering.",
                                      duration: "12:10",
                                      views: "8.9k",
                                      quote:
                                        "Shame dies when it is spoken in a room where people listen.",
                                      color: "from-emerald-900/40",
                                    },
                                    {
                                      id: "yt-body",
                                      title: "Body Image & Radical Self-Love",
                                      desc: "An empowering keynote challenging fatphobia, recounting her own transition from hiding to modeling.",
                                      duration: "24:30",
                                      views: "15.1k",
                                      quote:
                                        "Your body is not an ornament to look at; it is the home you live in.",
                                      color: "from-amber-900/40",
                                    },
                                  ].map((A) => {
                                    const te = P === A.id;
                                    return l.jsxs(
                                      "div",
                                      {
                                        className:
                                          "bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between",
                                        children: [
                                          l.jsxs("div", {
                                            className: `p-6 bg-gradient-to-b ${A.color} to-white aspect-video relative flex flex-col justify-between`,
                                            children: [
                                              l.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center",
                                                children: [
                                                  l.jsx("span", {
                                                    className:
                                                      "font-mono text-[8px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                    children: "PODCAST SESSION",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "font-mono text-[9px] text-neutral-500 font-bold bg-white/85 px-1.5 py-0.2 rounded",
                                                    children: A.duration,
                                                  }),
                                                ],
                                              }),
                                              l.jsx("div", {
                                                className:
                                                  "my-auto flex justify-center py-2",
                                                children: l.jsx("button", {
                                                  onClick: () =>
                                                    L(te ? null : A.id),
                                                  className: `w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${te ? "bg-red-500 text-white scale-110 shadow-lg animate-pulse" : "bg-white text-neutral-900 hover:scale-105 shadow-sm"}`,
                                                  children: te
                                                    ? l.jsx("span", {
                                                        className:
                                                          "font-bold text-xs uppercase tracking-widest",
                                                        children: "II",
                                                      })
                                                    : l.jsx(Fx, {
                                                        className:
                                                          "w-5 h-5 fill-current ml-0.5 text-red-500",
                                                      }),
                                                }),
                                              }),
                                              l.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center text-[9px] font-mono text-neutral-600 mt-2",
                                                children: [
                                                  l.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1",
                                                    children: [
                                                      l.jsx(zS, {
                                                        className:
                                                          "w-3 h-3 text-neutral-400",
                                                      }),
                                                      " ",
                                                      A.views,
                                                      " views",
                                                    ],
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "text-red-500 font-bold uppercase tracking-wider",
                                                    children:
                                                      "PLAY AUDIO EXTRACT",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className:
                                              "p-5 flex flex-col gap-3",
                                            children: [
                                              l.jsx("h4", {
                                                className:
                                                  "font-heading text-xs font-bold text-neutral-900 uppercase",
                                                children: A.title,
                                              }),
                                              l.jsx("p", {
                                                className:
                                                  "font-sans text-[11px] text-neutral-500 leading-relaxed font-light",
                                                children: A.desc,
                                              }),
                                              l.jsx("div", {
                                                className:
                                                  "p-3 bg-neutral-50 border-l border-[#0a8fa0] rounded-r-lg",
                                                children: l.jsxs("p", {
                                                  className:
                                                    "font-display italic text-xxs text-neutral-600",
                                                  children: ['"', A.quote, '"'],
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      A.id,
                                    );
                                  }),
                                }),
                              ],
                            },
                            "youtube-tab",
                          )
                        : l.jsx(
                            X.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.4 },
                              className:
                                "grid grid-cols-1 md:grid-cols-3 gap-6",
                              children: [
                                {
                                  id: "ig-monsoon",
                                  title: "Monsoons & Stillness",
                                  desc: "Mumbai at 4 AM taught me that peace isn't the absence of noise, but the space you make inside.",
                                  likes: G["ig-monsoon"],
                                  hasLiked: !!we["ig-monsoon"],
                                  sound: "Ambient Piano - Solitude",
                                  caption:
                                    "Chasing quiet in a city of 20 million. Adrak chai brewing in the background. Stop looking for permission to just exist and rest.",
                                },
                                {
                                  id: "ig-plus-size",
                                  title: "Unapologetically Plus",
                                  desc: "A reminder for today: Wear the loud color. Take up space. Let them look. You are the multiverse.",
                                  likes: G["ig-plus-size"],
                                  hasLiked: !!we["ig-plus-size"],
                                  sound: "Original Audio - Taranna",
                                  caption:
                                    "Every body is a great body. This is a baseline truth. Stop managing other people's comfort at the cost of your posture.",
                                },
                                {
                                  id: "ig-adrak-chai",
                                  title: "Poetry of Tactile Joys",
                                  desc: "Anchor yourself in the tactile. Sometimes the most spiritual thing is drinking your tea hot.",
                                  likes: G["ig-adrak-chai"],
                                  hasLiked: !!we["ig-adrak-chai"],
                                  sound: "Soft Lofi Beats - Rain",
                                  caption:
                                    "A bowl of maggi. Adrak chai going cold. Loneliness is just a map of where you are not. Ground your feelings in things you can touch.",
                                },
                              ].map((A) => {
                                const te = $t[A.id] || [],
                                  ge = sr[A.id] || "";
                                return l.jsxs(
                                  "div",
                                  {
                                    className:
                                      "bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "p-4 flex items-center justify-between border-b border-neutral-100",
                                        children: [
                                          l.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              l.jsx("div", {
                                                className:
                                                  "w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 p-0.5",
                                                children: l.jsx("div", {
                                                  className:
                                                    "w-full h-full rounded-full bg-white flex items-center justify-center text-[10px]",
                                                  children: "🧘",
                                                }),
                                              }),
                                              l.jsxs("div", {
                                                className: "flex flex-col",
                                                children: [
                                                  l.jsxs("span", {
                                                    className:
                                                      "font-heading text-[10px] font-bold text-neutral-800 leading-none flex items-center gap-1 uppercase",
                                                    children: [
                                                      "withlove_taranna",
                                                      l.jsx("span", {
                                                        className:
                                                          "text-[8px] text-blue-500",
                                                        children: "✓",
                                                      }),
                                                    ],
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "text-[8px] text-neutral-400 font-mono",
                                                    children: "Mumbai, India",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsx("span", {
                                            className:
                                              "font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-widest",
                                            children: "[REEL]",
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "aspect-square bg-neutral-900 relative flex items-center justify-center overflow-hidden border-b border-neutral-100",
                                        children: [
                                          l.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-tr from-[#E65F1B]/30 to-[#0e5fa3]/30 mix-blend-multiply",
                                          }),
                                          l.jsxs("div", {
                                            className:
                                              "p-6 text-center text-white z-10 flex flex-col gap-2 max-w-[85%]",
                                            children: [
                                              l.jsx("h5", {
                                                className:
                                                  "font-heading text-xs font-bold uppercase tracking-wider text-amber-300",
                                                children: A.title,
                                              }),
                                              l.jsxs("p", {
                                                className:
                                                  "font-display italic text-xxs text-neutral-100 leading-relaxed font-light",
                                                children: ['"', A.desc, '"'],
                                              }),
                                              l.jsxs("span", {
                                                className:
                                                  "font-mono text-[7px] text-neutral-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-1",
                                                children: [
                                                  l.jsx(s2, {
                                                    className:
                                                      "w-2.5 h-2.5 text-pink-400",
                                                  }),
                                                  " ",
                                                  A.sound,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "p-4 flex items-center justify-between",
                                        children: l.jsxs("div", {
                                          className: "flex items-center gap-4",
                                          children: [
                                            l.jsxs("button", {
                                              onClick: () => Z1(A.id),
                                              className:
                                                "flex items-center gap-1 text-xs cursor-pointer group",
                                              children: [
                                                l.jsx(ba, {
                                                  className: `w-4.5 h-4.5 transition-all duration-300 ${A.hasLiked ? "fill-red-500 text-red-500 scale-125" : "text-neutral-600 group-hover:text-red-500"}`,
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "font-mono text-[9px] font-bold text-neutral-600",
                                                  children: A.likes,
                                                }),
                                              ],
                                            }),
                                            l.jsxs("div", {
                                              className:
                                                "flex items-center gap-1 text-xs text-neutral-600",
                                              children: [
                                                l.jsx(qS, {
                                                  className:
                                                    "w-4.5 h-4.5 text-neutral-500",
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "font-mono text-[9px] font-bold",
                                                  children: te.length,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      l.jsx("div", {
                                        className: "px-4 pb-2",
                                        children: l.jsxs("p", {
                                          className:
                                            "font-sans text-[11px] text-neutral-600 leading-relaxed font-light",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "font-bold text-neutral-800 mr-1 text-[10px] uppercase",
                                              children: "withlove_taranna",
                                            }),
                                            A.caption,
                                          ],
                                        }),
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "px-4 py-2 border-t border-neutral-50 bg-neutral-50/50 max-h-[100px] overflow-y-auto flex flex-col gap-1.5",
                                        children: te.map((Jt, en) =>
                                          l.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex flex-col text-[10px] font-sans",
                                              children: [
                                                l.jsx("span", {
                                                  className:
                                                    "font-semibold text-neutral-700",
                                                  children: Jt.user,
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "text-neutral-500 font-light leading-relaxed",
                                                  children: Jt.text,
                                                }),
                                              ],
                                            },
                                            en,
                                          ),
                                        ),
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "p-3 border-t border-neutral-100 flex items-center gap-2",
                                        children: [
                                          l.jsx("input", {
                                            type: "text",
                                            value: ge,
                                            onChange: (Jt) => {
                                              const en = Jt.target.value;
                                              bf((Ni) => ({
                                                ...Ni,
                                                [A.id]: en,
                                              }));
                                            },
                                            onKeyDown: (Jt) => {
                                              Jt.key === "Enter" && Sf(A.id);
                                            },
                                            placeholder: "Add a comment...",
                                            className:
                                              "flex-grow bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 font-sans text-[10px] outline-none focus:bg-white focus:border-neutral-400",
                                          }),
                                          l.jsx("button", {
                                            onClick: () => Sf(A.id),
                                            className:
                                              "font-mono text-[8px] font-bold uppercase text-[#0a8fa0] tracking-widest cursor-pointer px-2",
                                            children: "POST",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  A.id,
                                );
                              }),
                            },
                            "instagram-tab",
                          ),
                  }),
                ],
              }),
            ],
          });
        case "model":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#c57d11] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#c57d11] font-bold block uppercase mb-1",
                    children: "PAGE 4 // MODEL",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Model",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2",
                    children: "Every body is a great body.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-7 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#c57d11] font-bold block uppercase mb-3",
                            children: "THE STORY IN THE IMAGE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "Back in 2018, I saw a plus-size model on Instagram for the first time — dancing, posing, completely unbothered — and something in me lit up. I wished I could be something like her. And slowly, slowly, I became her. That's the whole story, really — it just took years to actually happen.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "Modeling didn't start as a career move. It became a tool for my own growth — I came out of it more confident, more at peace with myself, more in tune with my own emotions, and needing a lot less validation from other people to feel okay. What I didn't expect was that it wouldn't stop with me. My work has gone on to inspire plus-size girls and boys to embrace their bodies exactly as they are.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "That's the part that feels full circle — someone gave me permission I didn't know I needed, just by existing loudly and joyfully online. Now I get to be that for somebody else.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "THE CRAFT, NOT JUST THE IMAGE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children:
                              "For Taranna, modeling isn't only about the image that ends up on screen — it's about the process that gets her there. She's spoken about the camera as almost a mirror: the angles, the light, the technical craft of it all becoming a vehicle for something inner to finally get seen — sometimes even by the person in front of the lens, first. It's the same instinct that runs through her writing and her speaking: dig into a feeling you haven't fully named yet, and turn it into something shared.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl flex flex-col gap-3",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              l.jsx($S, {
                                className: "w-4.5 h-4.5 text-[#c57d11]",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-xs font-bold text-neutral-900 tracking-widest uppercase",
                                children: "Body Positivity, In Practice",
                              }),
                            ],
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children:
                              "Taranna's modeling work sits inside a wider mission — proving, publicly and repeatedly, that plus-size bodies belong in every room a straight-size body does. Not as a trend. Not as a token. As the standard.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "lg:col-span-5 flex flex-col gap-6",
                    children: l.jsxs("div", {
                      className:
                        "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest font-bold text-[#c57d11] block uppercase mb-1",
                              children: "PORTFOLIO HIGHLIGHTS",
                            }),
                            l.jsx("h3", {
                              className:
                                "font-heading text-base font-bold text-neutral-900",
                              children: "Campaign Highlights",
                            }),
                            l.jsx("p", {
                              className:
                                "font-sans text-xs text-neutral-400 font-light mt-0.5",
                              children:
                                "Hover to explore the technical framing. Click to view in Gallery.",
                            }),
                          ],
                        }),
                        l.jsx("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: ew.map((A, te) =>
                            l.jsxs(
                              "div",
                              {
                                onClick: () => {
                                  Ce(A.image, A.caption);
                                },
                                className:
                                  "relative rounded-xl overflow-hidden aspect-square group cursor-pointer bg-neutral-900 border border-neutral-100",
                                children: [
                                  l.jsx("img", {
                                    src: A.image,
                                    alt: "Campaign",
                                    referrerPolicy: "no-referrer",
                                    className:
                                      "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-100",
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end",
                                    children: [
                                      l.jsx("span", {
                                        className:
                                          "font-mono text-[7px] text-amber-400 font-bold tracking-widest uppercase",
                                        children: A.label,
                                      }),
                                      l.jsx("span", {
                                        className:
                                          "font-sans text-[9px] text-white truncate font-medium mt-0.5",
                                        children: A.caption,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              te,
                            ),
                          ),
                        }),
                        l.jsxs("div", {
                          className:
                            "pt-4 border-t border-neutral-100 flex flex-col gap-2",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase",
                              children: "SOCIAL ENGAGEMENTS",
                            }),
                            l.jsxs("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                l.jsxs("a", {
                                  href: "https://www.instagram.com/@withlove_taranna",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light",
                                  children: [
                                    l.jsx(Mu, {
                                      className: "w-3.5 h-3.5 text-neutral-400",
                                    }),
                                    l.jsx("span", {
                                      children: "Instagram: @withlove_taranna",
                                    }),
                                  ],
                                }),
                                l.jsxs("a", {
                                  href: "https://www.youtube.com/@withlovetaranna_me",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light",
                                  children: [
                                    l.jsx(Vh, {
                                      className: "w-3.5 h-3.5 text-neutral-400",
                                    }),
                                    l.jsx("span", {
                                      children: "YouTube: @withlovetaranna_me",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        default:
          return null;
      }
    };
  return l.jsxs("div", {
    className:
      "min-h-screen bg-[#FCFAF6] text-neutral-900 pt-36 pb-24 px-6 font-sans relative antialiased flex flex-col justify-between",
    children: [
      l.jsx("div", {
        className:
          "absolute top-0 bottom-0 left-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute top-0 bottom-0 right-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none",
      }),
      l.jsxs("div", {
        className: "max-w-5xl mx-auto w-full my-auto z-10 relative",
        children: [
          l.jsx(
            X.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "w-full",
              children: tw(),
            },
            e,
          ),
          l.jsx("div", {
            className:
              "mt-20 pt-10 border-t border-neutral-150 flex flex-wrap gap-4 items-center",
            children: l.jsxs("button", {
              onClick: t,
              className:
                "group font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-6 py-4 rounded-xl shadow-md transition-all flex items-center gap-2.5 cursor-pointer",
              children: [
                l.jsx(RS, {
                  className:
                    "w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform",
                }),
                l.jsx("span", { children: "RETURN TO HOME" }),
              ],
            }),
          }),
        ],
      }),
      l.jsxs(Vr, {
        children: [
          r &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative",
                children: [
                  l.jsx("button", {
                    onClick: () => s(null),
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  i
                    ? l.jsxs("div", {
                        className:
                          "py-10 flex flex-col items-center justify-center text-center gap-3",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2",
                            children: l.jsx(Au, { className: "w-6 h-6" }),
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold text-neutral-900 uppercase",
                            children: "Thank You Sincerely",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-500 leading-relaxed font-light",
                            children:
                              r === "donate"
                                ? `Your contribution of ₹${a} has been registered successfully. A receipt is on its way.`
                                : "Your request has been received. Our regional coordinators will contact you within 24 hours.",
                          }),
                        ],
                      })
                    : l.jsxs("form", {
                        onSubmit: q1,
                        className: "flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                children: "SAMPOORNA PORTAL",
                              }),
                              l.jsxs("h4", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: [
                                  r === "partner" && "Partner With Us",
                                  r === "volunteer" && "Become a Volunteer",
                                  r === "donate" && "Support Our Initiatives",
                                ],
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1",
                                children:
                                  r === "donate"
                                    ? "Registered with 12A/80G. Contributions receive tax relief receipts."
                                    : "Connect with our Mumbai headquarters.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3.5",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Your Name",
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    value: c,
                                    onChange: (A) => d(A.target.value),
                                    placeholder: "Taranna Garg",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Email Address",
                                  }),
                                  l.jsx("input", {
                                    type: "email",
                                    required: !0,
                                    value: f,
                                    onChange: (A) => h(A.target.value),
                                    placeholder: "name@gmail.com",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              r === "donate" &&
                                l.jsxs("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    l.jsx("label", {
                                      className:
                                        "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                      children: "Contribution Amount (INR)",
                                    }),
                                    l.jsx("div", {
                                      className: "grid grid-cols-4 gap-2",
                                      children: [
                                        "500",
                                        "1000",
                                        "5000",
                                        "10000",
                                      ].map((A) =>
                                        l.jsxs(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => u(A),
                                            className: `py-2 rounded-lg border font-mono text-xs font-bold cursor-pointer transition-colors ${a === A ? "bg-neutral-950 text-white border-neutral-950" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`,
                                            children: ["₹", A],
                                          },
                                          A,
                                        ),
                                      ),
                                    }),
                                    l.jsx("input", {
                                      type: "number",
                                      required: !0,
                                      value: a,
                                      onChange: (A) => u(A.target.value),
                                      className:
                                        "w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 mt-1",
                                    }),
                                  ],
                                }),
                              r !== "donate" &&
                                l.jsxs("div", {
                                  className: "flex flex-col gap-1.5",
                                  children: [
                                    l.jsx("label", {
                                      className:
                                        "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                      children: "Message or Motivation",
                                    }),
                                    l.jsx("textarea", {
                                      rows: 3,
                                      placeholder:
                                        "How would you like to participate?",
                                      className:
                                        "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 resize-none",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          l.jsx("button", {
                            type: "submit",
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center",
                            children: "Confirm Submission",
                          }),
                        ],
                      }),
                ],
              }),
            }),
          x &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-lg w-full border border-neutral-100 shadow-2xl relative max-h-[85vh] overflow-y-auto",
                children: [
                  l.jsx("button", {
                    onClick: () => w(null),
                    className:
                      "absolute top-6 right-8 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  (() => {
                    const A = kf.find((te) => te.id === x);
                    return A
                      ? l.jsxs("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1",
                              children:
                                "Anthology Archives // Confessional Verse",
                            }),
                            l.jsx("h4", {
                              className:
                                "font-heading text-xl font-bold text-neutral-900 uppercase",
                              children: A.title,
                            }),
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400 block -mt-1 font-bold",
                              children: A.vibe,
                            }),
                            l.jsx("div", {
                              className: "w-8 h-[1px] bg-neutral-100 my-2",
                            }),
                            l.jsx("div", {
                              className:
                                "font-mono text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l border-[#E65F1B]/30 select-all font-light py-2",
                              children: A.text,
                            }),
                          ],
                        })
                      : null;
                  })(),
                ],
              }),
            }),
          p &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative",
                children: [
                  l.jsx("button", {
                    onClick: () => m(!1),
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  g
                    ? l.jsxs("div", {
                        className:
                          "py-10 flex flex-col items-center justify-center text-center gap-3",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2",
                            children: l.jsx(Au, { className: "w-6 h-6" }),
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold text-neutral-900 uppercase",
                            children: "Booking Request Sent",
                          }),
                          l.jsxs("p", {
                            className:
                              "font-sans text-xs text-neutral-500 leading-relaxed font-light",
                            children: [
                              "We have noted your request for ",
                              S,
                              ". Taranna's coordinator will review the slot and respond via email within 24 hours.",
                            ],
                          }),
                        ],
                      })
                    : l.jsxs("form", {
                        onSubmit: Q1,
                        className: "flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "ORATORICAL ENGAGEMENT",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Book speaking event",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1",
                                children:
                                  "Provide details for your event, university panel, or podcast recording.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3.5",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Organizer / Institution",
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    placeholder:
                                      "Tata Institute or Podcast Name",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Contact Email",
                                  }),
                                  l.jsx("input", {
                                    type: "email",
                                    required: !0,
                                    placeholder: "contact@institution.org",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Proposed Date",
                                  }),
                                  l.jsx("input", {
                                    type: "date",
                                    required: !0,
                                    value: S,
                                    onChange: (A) => j(A.target.value),
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Event Format",
                                  }),
                                  l.jsxs("select", {
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 bg-white rounded-xl font-sans text-xs outline-none focus:border-neutral-900",
                                    children: [
                                      l.jsx("option", {
                                        children: "Academic Panel / Lecture",
                                      }),
                                      l.jsx("option", {
                                        children: "Podcast Interview",
                                      }),
                                      l.jsx("option", {
                                        children: "Community Keynote Address",
                                      }),
                                      l.jsx("option", {
                                        children:
                                          "Corporate Positivity Workshop",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            type: "submit",
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center",
                            children: "Send Booking Request",
                          }),
                        ],
                      }),
                ],
              }),
            }),
          N &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center bg-neutral-950 rounded-3xl p-6 md:p-8 relative border border-neutral-800",
                children: [
                  l.jsx("button", {
                    onClick: () => {
                      (T(null), ze(1), ae(1.1));
                    },
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-white cursor-pointer font-bold",
                    children: "[CLOSE GALLERY]",
                  }),
                  l.jsx("div", {
                    className:
                      "w-full md:w-3/5 aspect-square relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-900",
                    children: l.jsx("img", {
                      src: N,
                      alt: "Portfolio Zoom",
                      referrerPolicy: "no-referrer",
                      className: "w-full h-full object-cover transition-all",
                      style: { filter: `contrast(${z}) brightness(${ve})` },
                    }),
                  }),
                  l.jsxs("div", {
                    className:
                      "w-full md:w-2/5 flex flex-col gap-6 justify-between self-stretch text-white",
                    children: [
                      l.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase",
                            children: "EDITORIAL MAGNIFIER",
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold tracking-tight uppercase leading-snug",
                            children: R.split(" // ")[0],
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-neutral-500 uppercase block -mt-1 font-bold",
                            children: R.split(" // ")[1],
                          }),
                          l.jsx("div", {
                            className: "w-10 h-[1.5px] bg-neutral-800 my-2",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-400 leading-relaxed font-light",
                            children:
                              "Every body is an original multiverse of ether and fire. Explore the light balancing of Taranna's portrait focus below.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col gap-4 mt-auto",
                        children: [
                          l.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-neutral-400",
                            children: [
                              l.jsx(Ox, {
                                className: "w-3.5 h-3.5 text-amber-500",
                              }),
                              l.jsx("span", {
                                className:
                                  "font-mono text-[8px] font-bold uppercase tracking-widest",
                                children: "Image adjustments",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex justify-between font-mono text-[8px] text-neutral-400",
                                    children: [
                                      l.jsx("span", { children: "CONTRAST" }),
                                      l.jsxs("span", {
                                        children: [z.toFixed(2), "x"],
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "range",
                                    min: "0.8",
                                    max: "1.6",
                                    step: "0.05",
                                    value: z,
                                    onChange: (A) =>
                                      ae(parseFloat(A.target.value)),
                                    className:
                                      "w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex justify-between font-mono text-[8px] text-neutral-400",
                                    children: [
                                      l.jsx("span", { children: "BRIGHTNESS" }),
                                      l.jsxs("span", {
                                        children: [ve.toFixed(2), "x"],
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "range",
                                    min: "0.7",
                                    max: "1.3",
                                    step: "0.05",
                                    value: ve,
                                    onChange: (A) =>
                                      ze(parseFloat(A.target.value)),
                                    className:
                                      "w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              (ae(1.1), ze(1));
                            },
                            className:
                              "mt-2 py-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 rounded-lg font-mono text-[8px] font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer",
                            children: "Reset adjustments",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}
const bv = k.createContext({});
function mP(e) {
  const t = k.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const zd = k.createContext(null),
  Sv = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function gP(e = !0) {
  const t = k.useContext(zd);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = k.useId();
  k.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = k.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ud = typeof window < "u",
  xP = Ud ? k.useLayoutEffect : k.useEffect,
  Je = (e) => e;
let kv = Je;
function Wd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Wr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Wt = (e) => e * 1e3,
  Ht = (e) => e / 1e3,
  yP = { useManualTiming: !1 };
function vP(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (i.has(c) && (u.schedule(c), e()), c(o));
  }
  const u = {
    schedule: (c, d = !1, f = !1) => {
      const x = f && r ? t : n;
      return (d && i.add(c), x.has(c) || x.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), i.delete(c));
    },
    process: (c) => {
      if (((o = c), r)) {
        s = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const Ki = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  wP = 40;
function jv(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = Ki.reduce((p, m) => ((p[m] = vP(i)), p), {}),
    {
      read: a,
      resolveKeyframes: u,
      update: c,
      preRender: d,
      render: f,
      postRender: h,
    } = o,
    x = () => {
      const p = performance.now();
      ((n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(p - s.timestamp, wP), 1)),
        (s.timestamp = p),
        (s.isProcessing = !0),
        a.process(s),
        u.process(s),
        c.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(x)));
    },
    w = () => {
      ((n = !0), (r = !0), s.isProcessing || e(x));
    };
  return {
    schedule: Ki.reduce((p, m) => {
      const g = o[m];
      return (
        (p[m] = (b, S = !1, j = !1) => (n || w(), g.schedule(b, S, j))),
        p
      );
    }, {}),
    cancel: (p) => {
      for (let m = 0; m < Ki.length; m++) o[Ki[m]].cancel(p);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: J,
    cancel: kn,
    state: Te,
    steps: jl,
  } = jv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Je, !0),
  Tv = k.createContext({ strict: !1 }),
  sm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Hr = {};
for (const e in sm) Hr[e] = { isEnabled: (t) => sm[e].some((n) => !!t[n]) };
function bP(e) {
  for (const t in e) Hr[t] = { ...Hr[t], ...e[t] };
}
const SP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Zo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    SP.has(e)
  );
}
let Nv = (e) => !Zo(e);
function kP(e) {
  e && (Nv = (t) => (t.startsWith("on") ? !Zo(t) : e(t)));
}
try {
  kP(require("@emotion/is-prop-valid").default);
} catch {}
function jP(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Nv(s) ||
        (n === !0 && Zo(s)) ||
        (!t && !Zo(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function TP(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const Aa = k.createContext({});
function li(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ma(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Hd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Gd = ["initial", ...Hd];
function Da(e) {
  return Ma(e.animate) || Gd.some((t) => li(e[t]));
}
function Pv(e) {
  return !!(Da(e) || e.variants);
}
function NP(e, t) {
  if (Da(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || li(n) ? n : void 0,
      animate: li(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function PP(e) {
  const { initial: t, animate: n } = NP(e, k.useContext(Aa));
  return k.useMemo(() => ({ initial: t, animate: n }), [im(t), im(n)]);
}
function im(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const CP = Symbol.for("motionComponentSymbol");
function kr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function EP(e, t, n) {
  return k.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : kr(n) && (n.current = r)));
    },
    [t],
  );
}
const Yd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  AP = "framerAppearId",
  Cv = "data-" + Yd(AP),
  { schedule: Kd } = jv(queueMicrotask, !1),
  Ev = k.createContext({});
function MP(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = k.useContext(Aa),
    u = k.useContext(Tv),
    c = k.useContext(zd),
    d = k.useContext(Sv).reducedMotion,
    f = k.useRef(null);
  ((r = r || u.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d,
      })));
  const h = f.current,
    x = k.useContext(Ev);
  h &&
    !h.projection &&
    s &&
    (h.type === "html" || h.type === "svg") &&
    DP(f.current, n, s, x);
  const w = k.useRef(!1);
  k.useInsertionEffect(() => {
    h && w.current && h.update(n, c);
  });
  const v = n[Cv],
    y = k.useRef(
      !!v &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, v)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, v)),
    );
  return (
    xP(() => {
      h &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        Kd.render(h.render),
        y.current && h.animationState && h.animationState.animateChanges());
    }),
    k.useEffect(() => {
      h &&
        (!y.current && h.animationState && h.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (y.current = !1)));
    }),
    h
  );
}
function DP(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: u,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Av(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && kr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: u,
      layoutRoot: c,
    }));
}
function Av(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Av(e.parent);
}
function RP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && bP(e);
  function a(c, d) {
    let f;
    const h = { ...k.useContext(Sv), ...c, layoutId: VP(c) },
      { isStatic: x } = h,
      w = PP(c),
      v = r(c, x);
    if (!x && Ud) {
      LP();
      const y = $P(h);
      ((f = y.MeasureLayout),
        (w.visualElement = MP(s, v, h, t, y.ProjectionNode)));
    }
    return l.jsxs(Aa.Provider, {
      value: w,
      children: [
        f && w.visualElement
          ? l.jsx(f, { visualElement: w.visualElement, ...h })
          : null,
        n(s, c, EP(v, w.visualElement, d), v, x, w.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !== null && o !== void 0 ? o : ""})`}`;
  const u = k.forwardRef(a);
  return ((u[CP] = s), u);
}
function VP({ layoutId: e }) {
  const t = k.useContext(bv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function LP(e, t) {
  k.useContext(Tv).strict;
}
function $P(e) {
  const { drag: t, layout: n } = Hr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const IP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Xd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(IP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function om(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function qd(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = om(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = om(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const qu = (e) => Array.isArray(e),
  FP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  OP = (e) => (qu(e) ? e[e.length - 1] || 0 : e),
  Le = (e) => !!(e && e.getVelocity);
function xo(e) {
  const t = Le(e) ? e.get() : e;
  return FP(t) ? t.toValue() : t;
}
function BP(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i,
) {
  const o = { latestValues: _P(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const Mv = (e) => (t, n) => {
  const r = k.useContext(Aa),
    s = k.useContext(zd),
    i = () => BP(e, t, r, s);
  return n ? i() : mP(i);
};
function _P(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = xo(i[h]);
  let { initial: o, animate: a } = e;
  const u = Da(e),
    c = Pv(e);
  t &&
    c &&
    !u &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !Ma(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let x = 0; x < h.length; x++) {
      const w = qd(e, h[x]);
      if (w) {
        const { transitionEnd: v, transition: y, ...p } = w;
        for (const m in p) {
          let g = p[m];
          if (Array.isArray(g)) {
            const b = d ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (s[m] = g);
        }
        for (const m in v) s[m] = v[m];
      }
    }
  }
  return s;
}
const Jr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  rr = new Set(Jr),
  Dv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Rv = Dv("--"),
  zP = Dv("var(--"),
  Qd = (e) => (zP(e) ? UP.test(e.split("/*")[0].trim()) : !1),
  UP =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Vv = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  qt = (e, t, n) => (n > t ? t : n < e ? e : n),
  es = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ui = { ...es, transform: (e) => qt(0, 1, e) },
  Xi = { ...es, default: 1 },
  Si = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  sn = Si("deg"),
  Rt = Si("%"),
  F = Si("px"),
  WP = Si("vh"),
  HP = Si("vw"),
  am = {
    ...Rt,
    parse: (e) => Rt.parse(e) / 100,
    transform: (e) => Rt.transform(e * 100),
  },
  GP = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
  },
  YP = {
    rotate: sn,
    rotateX: sn,
    rotateY: sn,
    rotateZ: sn,
    scale: Xi,
    scaleX: Xi,
    scaleY: Xi,
    scaleZ: Xi,
    skew: sn,
    skewX: sn,
    skewY: sn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: ui,
    originX: am,
    originY: am,
    originZ: F,
  },
  lm = { ...es, transform: Math.round },
  Zd = {
    ...GP,
    ...YP,
    zIndex: lm,
    size: F,
    fillOpacity: ui,
    strokeOpacity: ui,
    numOctaves: lm,
  },
  KP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  XP = Jr.length;
function qP(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < XP; i++) {
    const o = Jr[i],
      a = e[o];
    if (a === void 0) continue;
    let u = !0;
    if (
      (typeof a == "number"
        ? (u = a === (o.startsWith("scale") ? 1 : 0))
        : (u = parseFloat(a) === 0),
      !u || n)
    ) {
      const c = Vv(a, Zd[o]);
      if (!u) {
        s = !1;
        const d = KP[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r);
}
function Jd(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const u in t) {
    const c = t[u];
    if (rr.has(u)) {
      o = !0;
      continue;
    } else if (Rv(u)) {
      s[u] = c;
      continue;
    } else {
      const d = Vv(c, Zd[u]);
      u.startsWith("origin") ? ((a = !0), (i[u] = d)) : (r[u] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = qP(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: u = "50%", originY: c = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${u} ${c} ${d}`;
  }
}
const QP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  ZP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function JP(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? QP : ZP;
  e[i.offset] = F.transform(-r);
  const o = F.transform(t),
    a = F.transform(n);
  e[i.array] = `${o} ${a}`;
}
function um(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function e5(e, t, n) {
  const r = um(t, e.x, e.width),
    s = um(n, e.y, e.height);
  return `${r} ${s}`;
}
function ef(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: u = 0,
    ...c
  },
  d,
  f,
) {
  if ((Jd(e, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: x, dimensions: w } = e;
  (h.transform && (w && (x.transform = h.transform), delete h.transform),
    w &&
      (s !== void 0 || i !== void 0 || x.transform) &&
      (x.transformOrigin = e5(
        w,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && JP(h, o, a, u, !1));
}
const tf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Lv = () => ({ ...tf(), attrs: {} }),
  nf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $v(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Iv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Fv(e, t, n, r) {
  $v(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Iv.has(s) ? s : Yd(s), t.attrs[s]);
}
const Jo = {};
function t5(e) {
  Object.assign(Jo, e);
}
function Ov(e, { layout: t, layoutId: n }) {
  return (
    rr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Jo[e] || e === "opacity"))
  );
}
function rf(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Le(s[o]) ||
      (t.style && Le(t.style[o])) ||
      Ov(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function Bv(e, t, n) {
  const r = rf(e, t, n);
  for (const s in e)
    if (Le(e[s]) || Le(t[s])) {
      const i =
        Jr.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function n5(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const cm = ["x", "y", "width", "height", "cx", "cy", "r"],
  r5 = {
    useVisualState: Mv({
      scrapeMotionValuesFromProps: Bv,
      createRenderState: Lv,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (rr.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < cm.length; a++) {
            const u = cm[a];
            e[u] !== t[u] && (o = !0);
          }
        o &&
          J.read(() => {
            (n5(n, r),
              J.render(() => {
                (ef(r, s, nf(n.tagName), e.transformTemplate), Fv(n, r));
              }));
          });
      },
    }),
  },
  s5 = {
    useVisualState: Mv({
      scrapeMotionValuesFromProps: rf,
      createRenderState: tf,
    }),
  };
function _v(e, t, n) {
  for (const r in t) !Le(t[r]) && !Ov(r, n) && (e[r] = t[r]);
}
function i5({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = tf();
    return (Jd(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function o5(e, t) {
  const n = e.style || {},
    r = {};
  return (_v(r, n, e), Object.assign(r, i5(e, t)), r);
}
function a5(e, t) {
  const n = {},
    r = o5(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function l5(e, t, n, r) {
  const s = k.useMemo(() => {
    const i = Lv();
    return (
      ef(i, t, nf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    (_v(i, e.style, e), (s.style = { ...i, ...s.style }));
  }
  return s;
}
function u5(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const u = (Xd(n) ? l5 : a5)(r, i, o, n),
      c = jP(r, typeof n == "string", e),
      d = n !== k.Fragment ? { ...c, ...u, ref: s } : {},
      { children: f } = r,
      h = k.useMemo(() => (Le(f) ? f.get() : f), [f]);
    return k.createElement(n, { ...d, children: h });
  };
}
function c5(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Xd(r) ? r5 : s5),
      preloadedFeatures: e,
      useRender: u5(s),
      createVisualElement: t,
      Component: r,
    };
    return RP(o);
  };
}
function zv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ra(e, t, n) {
  const r = e.getProps();
  return qd(r, t, n !== void 0 ? n : r.custom, e);
}
const d5 = Wd(() => window.ScrollTimeline !== void 0);
class f5 {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) => {
      if (d5() && s.attachTimeline) return s.attachTimeline(t);
      if (typeof n == "function") return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        (s && s(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class h5 extends f5 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function sf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Qu = 2e4;
function Uv(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Qu;) ((t += n), (r = e.next(t)));
  return t >= Qu ? 1 / 0 : t;
}
function of(e) {
  return typeof e == "function";
}
function dm(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const af = (e) => Array.isArray(e) && typeof e[0] == "number",
  p5 = { linearEasing: void 0 };
function m5(e, t) {
  const n = Wd(e);
  return () => {
    var r;
    return (r = p5[t]) !== null && r !== void 0 ? r : n();
  };
}
const ea = m5(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Wv = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(Wr(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Hv(e) {
  return !!(
    (typeof e == "function" && ea()) ||
    !e ||
    (typeof e == "string" && (e in Zu || ea())) ||
    af(e) ||
    (Array.isArray(e) && e.every(Hv))
  );
}
const vs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Zu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vs([0, 0.65, 0.55, 1]),
    circOut: vs([0.55, 0, 1, 0.45]),
    backIn: vs([0.31, 0.01, 0.66, -0.59]),
    backOut: vs([0.33, 1.53, 0.69, 0.99]),
  };
function Gv(e, t) {
  if (e)
    return typeof e == "function" && ea()
      ? Wv(e, t)
      : af(e)
        ? vs(e)
        : Array.isArray(e)
          ? e.map((n) => Gv(n, t) || Zu.easeOut)
          : Zu[e];
}
const xt = { x: !1, y: !1 };
function Yv() {
  return xt.x || xt.y;
}
function g5(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Kv(e, t) {
  const n = g5(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function fm(e) {
  return (t) => {
    t.pointerType === "touch" || Yv() || e(t);
  };
}
function x5(e, t, n = {}) {
  const [r, s, i] = Kv(e, n),
    o = fm((a) => {
      const { target: u } = a,
        c = t(a);
      if (typeof c != "function" || !u) return;
      const d = fm((f) => {
        (c(f), u.removeEventListener("pointerleave", d));
      });
      u.addEventListener("pointerleave", d, s);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
const Xv = (e, t) => (t ? (e === t ? !0 : Xv(e, t.parentElement)) : !1),
  lf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  y5 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function v5(e) {
  return y5.has(e.tagName) || e.tabIndex !== -1;
}
const ws = new WeakSet();
function hm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Tl(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const w5 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = hm(() => {
    if (ws.has(n)) return;
    Tl(n, "down");
    const s = hm(() => {
        Tl(n, "up");
      }),
      i = () => Tl(n, "cancel");
    (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function pm(e) {
  return lf(e) && !Yv();
}
function b5(e, t, n = {}) {
  const [r, s, i] = Kv(e, n),
    o = (a) => {
      const u = a.currentTarget;
      if (!pm(a) || ws.has(u)) return;
      ws.add(u);
      const c = t(a),
        d = (x, w) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!pm(x) || !ws.has(u)) &&
              (ws.delete(u), typeof c == "function" && c(x, { success: w })));
        },
        f = (x) => {
          d(x, n.useGlobalTarget || Xv(u, x.target));
        },
        h = (x) => {
          d(x, !1);
        };
      (window.addEventListener("pointerup", f, s),
        window.addEventListener("pointercancel", h, s));
    };
  return (
    r.forEach((a) => {
      (!v5(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (c) => w5(c, s), s));
    }),
    i
  );
}
function S5(e) {
  return e === "x" || e === "y"
    ? xt[e]
      ? null
      : ((xt[e] = !0),
        () => {
          xt[e] = !1;
        })
    : xt.x || xt.y
      ? null
      : ((xt.x = xt.y = !0),
        () => {
          xt.x = xt.y = !1;
        });
}
const qv = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jr,
]);
let yo;
function k5() {
  yo = void 0;
}
const Vt = {
  now: () => (
    yo === void 0 &&
      Vt.set(
        Te.isProcessing || yP.useManualTiming
          ? Te.timestamp
          : performance.now(),
      ),
    yo
  ),
  set: (e) => {
    ((yo = e), queueMicrotask(k5));
  },
};
function uf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class df {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (uf(this.subscriptions, t), () => cf(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Qv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const mm = 30,
  j5 = (e) => !isNaN(parseFloat(e));
class T5 {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = Vt.now();
        (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Vt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = j5(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new df());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            J.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Vt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > mm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, mm);
    return Qv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ci(e, t) {
  return new T5(e, t);
}
function N5(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ci(n));
}
function P5(e, t) {
  const n = Ra(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = OP(i[o]);
    N5(e, o, a);
  }
}
function C5(e) {
  return !!(Le(e) && e.add);
}
function Ju(e, t) {
  const n = e.getValue("willChange");
  if (C5(n)) return n.add(t);
}
function Zv(e) {
  return e.props[Cv];
}
const Jv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  E5 = 1e-7,
  A5 = 12;
function M5(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (i = Jv(o, r, s) - e), i > 0 ? (n = o) : (t = o));
  while (Math.abs(i) > E5 && ++a < A5);
  return o;
}
function ki(e, t, n, r) {
  if (e === t && n === r) return Je;
  const s = (i) => M5(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Jv(s(i), t, r));
}
const e1 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  t1 = (e) => (t) => 1 - e(1 - t),
  n1 = ki(0.33, 1.53, 0.69, 0.99),
  ff = t1(n1),
  r1 = e1(ff),
  s1 = (e) =>
    (e *= 2) < 1 ? 0.5 * ff(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  hf = (e) => 1 - Math.sin(Math.acos(e)),
  i1 = t1(hf),
  o1 = e1(hf),
  a1 = (e) => /^0[^.\s]+$/u.test(e);
function D5(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || a1(e)
      : !0;
}
const Is = (e) => Math.round(e * 1e5) / 1e5,
  pf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function R5(e) {
  return e == null;
}
const V5 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  mf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && V5.test(n) && n.startsWith(e)) ||
      (t && !R5(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  l1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(pf);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  L5 = (e) => qt(0, 255, e),
  Nl = { ...es, transform: (e) => Math.round(L5(e)) },
  Un = {
    test: mf("rgb", "red"),
    parse: l1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Nl.transform(e) +
      ", " +
      Nl.transform(t) +
      ", " +
      Nl.transform(n) +
      ", " +
      Is(ui.transform(r)) +
      ")",
  };
function $5(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const ec = { test: mf("#"), parse: $5, transform: Un.transform },
  jr = {
    test: mf("hsl", "hue"),
    parse: l1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Rt.transform(Is(t)) +
      ", " +
      Rt.transform(Is(n)) +
      ", " +
      Is(ui.transform(r)) +
      ")",
  },
  De = {
    test: (e) => Un.test(e) || ec.test(e) || jr.test(e),
    parse: (e) =>
      Un.test(e) ? Un.parse(e) : jr.test(e) ? jr.parse(e) : ec.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Un.transform(e)
          : jr.transform(e),
  },
  I5 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function F5(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(pf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(I5)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const u1 = "number",
  c1 = "color",
  O5 = "var",
  B5 = "var(",
  gm = "${}",
  _5 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function di(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      _5,
      (u) => (
        De.test(u)
          ? (r.color.push(i), s.push(c1), n.push(De.parse(u)))
          : u.startsWith(B5)
            ? (r.var.push(i), s.push(O5), n.push(u))
            : (r.number.push(i), s.push(u1), n.push(parseFloat(u))),
        ++i,
        gm
      ),
    )
    .split(gm);
  return { values: n, split: a, indexes: r, types: s };
}
function d1(e) {
  return di(e).values;
}
function f1(e) {
  const { split: t, types: n } = di(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === u1
          ? (i += Is(s[o]))
          : a === c1
            ? (i += De.transform(s[o]))
            : (i += s[o]);
      }
    return i;
  };
}
const z5 = (e) => (typeof e == "number" ? 0 : e);
function U5(e) {
  const t = d1(e);
  return f1(e)(t.map(z5));
}
const jn = {
    test: F5,
    parse: d1,
    createTransformer: f1,
    getAnimatableNone: U5,
  },
  W5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function H5(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(pf) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = W5.has(t) ? 1 : 0;
  return (r !== n && (i *= 100), t + "(" + i + s + ")");
}
const G5 = /\b([a-z-]*)\(.*?\)/gu,
  tc = {
    ...jn,
    getAnimatableNone: (e) => {
      const t = e.match(G5);
      return t ? t.map(H5).join(" ") : e;
    },
  },
  Y5 = {
    ...Zd,
    color: De,
    backgroundColor: De,
    outlineColor: De,
    fill: De,
    stroke: De,
    borderColor: De,
    borderTopColor: De,
    borderRightColor: De,
    borderBottomColor: De,
    borderLeftColor: De,
    filter: tc,
    WebkitFilter: tc,
  },
  gf = (e) => Y5[e];
function h1(e, t) {
  let n = gf(e);
  return (
    n !== tc && (n = jn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const K5 = new Set(["auto", "none", "0"]);
function X5(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s;) {
    const i = e[r];
    (typeof i == "string" && !K5.has(i) && di(i).values.length && (s = e[r]),
      r++);
  }
  if (s && n) for (const i of t) e[i] = h1(n, s);
}
const xm = (e) => e === es || e === F,
  ym = (e, t) => parseFloat(e.split(", ")[t]),
  vm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return ym(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? ym(i[1], e) : 0;
      }
    },
  q5 = new Set(["x", "y", "z"]),
  Q5 = Jr.filter((e) => !q5.has(e));
function Z5(e) {
  const t = [];
  return (
    Q5.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Gr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: vm(4, 13),
  y: vm(5, 14),
};
Gr.translateX = Gr.x;
Gr.translateY = Gr.y;
const Yn = new Set();
let nc = !1,
  rc = !1;
function p1() {
  if (rc) {
    const e = Array.from(Yn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const s = Z5(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((rc = !1), (nc = !1), Yn.forEach((e) => e.complete()), Yn.clear());
}
function m1() {
  Yn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (rc = !0));
  });
}
function J5() {
  (m1(), p1());
}
class xf {
  constructor(t, n, r, s, i, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (Yn.add(this), nc || ((nc = !0), J.read(m1), J.resolveKeyframes(p1)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const u = r.readValue(n, a);
            u != null && (t[0] = u);
          }
          (t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]));
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Yn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Yn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const g1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  eC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function tC(e) {
  const t = eC.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function x1(e, t, n = 1) {
  const [r, s] = tC(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return g1(o) ? parseFloat(o) : o;
  }
  return Qd(s) ? x1(s, t, n + 1) : s;
}
const y1 = (e) => (t) => t.test(e),
  nC = { test: (e) => e === "auto", parse: (e) => e },
  v1 = [es, F, Rt, sn, HP, WP, nC],
  wm = (e) => v1.find(y1(e));
class w1 extends xf {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (typeof c == "string" && ((c = c.trim()), Qd(c))) {
        const d = x1(c, n.current);
        (d !== void 0 && (t[u] = d),
          u === t.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !qv.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = wm(s),
      a = wm(i);
    if (o !== a)
      if (xm(o) && xm(a))
        for (let u = 0; u < t.length; u++) {
          const c = t[u];
          typeof c == "string" && (t[u] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) D5(t[s]) && r.push(s);
    r.length && X5(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Gr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    ((s[o] = Gr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([u, c]) => {
          n.getValue(u).set(c);
        }),
      this.resolveNoneKeyframes());
  }
}
const bm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (jn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function rC(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function sC(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = bm(s, t),
    a = bm(i, t);
  return !o || !a ? !1 : rC(e) || ((n === "spring" || of(n)) && r);
}
const iC = (e) => e !== null;
function Va(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(iC),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const oC = 40;
class b1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Vt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > oC
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && J5(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Vt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: u,
      isGenerator: c,
    } = this.options;
    if (!c && !sC(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        (u && u(Va(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const se = (e, t, n) => e + (t - e) * n;
function Pl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function aC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - a;
    ((s = Pl(u, a, e + 1 / 3)), (i = Pl(u, a, e)), (o = Pl(u, a, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function ta(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Cl = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  lC = [ec, Un, jr],
  uC = (e) => lC.find((t) => t.test(e));
function Sm(e) {
  const t = uC(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === jr && (n = aC(n)), n);
}
const km = (e, t) => {
    const n = Sm(e),
      r = Sm(t);
    if (!n || !r) return ta(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Cl(n.red, r.red, i)),
      (s.green = Cl(n.green, r.green, i)),
      (s.blue = Cl(n.blue, r.blue, i)),
      (s.alpha = se(n.alpha, r.alpha, i)),
      Un.transform(s)
    );
  },
  cC = (e, t) => (n) => t(e(n)),
  ji = (...e) => e.reduce(cC),
  sc = new Set(["none", "hidden"]);
function dC(e, t) {
  return sc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function fC(e, t) {
  return (n) => se(e, t, n);
}
function yf(e) {
  return typeof e == "number"
    ? fC
    : typeof e == "string"
      ? Qd(e)
        ? ta
        : De.test(e)
          ? km
          : mC
      : Array.isArray(e)
        ? S1
        : typeof e == "object"
          ? De.test(e)
            ? km
            : hC
          : ta;
}
function S1(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => yf(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function hC(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = yf(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function pC(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[i] = u), s[o]++);
  }
  return r;
}
const mC = (e, t) => {
  const n = jn.createTransformer(t),
    r = di(e),
    s = di(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (sc.has(e) && !s.values.length) || (sc.has(t) && !r.values.length)
      ? dC(e, t)
      : ji(S1(pC(r, s), s.values), n)
    : ta(e, t);
};
function k1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? se(e, t, n)
    : yf(e)(e, t);
}
const gC = 5;
function j1(e, t, n) {
  const r = Math.max(t - gC, 0);
  return Qv(n - e(r), t - r);
}
const ue = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  El = 0.001;
function xC({
  duration: e = ue.duration,
  bounce: t = ue.bounce,
  velocity: n = ue.velocity,
  mass: r = ue.mass,
}) {
  let s,
    i,
    o = 1 - t;
  ((o = qt(ue.minDamping, ue.maxDamping, o)),
    (e = qt(ue.minDuration, ue.maxDuration, Ht(e))),
    o < 1
      ? ((s = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            x = ic(c, o),
            w = Math.exp(-f);
          return El - (h / x) * w;
        }),
        (i = (c) => {
          const f = c * o * e,
            h = f * n + n,
            x = Math.pow(o, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-f),
            v = ic(Math.pow(c, 2), o);
          return ((-s(c) + El > 0 ? -1 : 1) * ((h - x) * w)) / v;
        }))
      : ((s = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -El + d * f;
        }),
        (i = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        })));
  const a = 5 / e,
    u = vC(s, i, a);
  if (((e = Wt(e)), isNaN(u)))
    return { stiffness: ue.stiffness, damping: ue.damping, duration: e };
  {
    const c = Math.pow(u, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const yC = 12;
function vC(e, t, n) {
  let r = n;
  for (let s = 1; s < yC; s++) r = r - e(r) / t(r);
  return r;
}
function ic(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const wC = ["duration", "bounce"],
  bC = ["stiffness", "damping", "mass"];
function jm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function SC(e) {
  let t = {
    velocity: ue.velocity,
    stiffness: ue.stiffness,
    damping: ue.damping,
    mass: ue.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jm(e, bC) && jm(e, wC))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * qt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: ue.mass, stiffness: s, damping: i };
    } else {
      const n = xC(e);
      ((t = { ...t, ...n, mass: ue.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function T1(e = ue.visualDuration, t = ue.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: u,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: x,
    } = SC({ ...n, velocity: -Ht(n.velocity || 0) }),
    w = h || 0,
    v = c / (2 * Math.sqrt(u * d)),
    y = o - i,
    p = Ht(Math.sqrt(u / d)),
    m = Math.abs(y) < 5;
  (r || (r = m ? ue.restSpeed.granular : ue.restSpeed.default),
    s || (s = m ? ue.restDelta.granular : ue.restDelta.default));
  let g;
  if (v < 1) {
    const S = ic(p, v);
    g = (j) => {
      const N = Math.exp(-v * p * j);
      return (
        o - N * (((w + v * p * y) / S) * Math.sin(S * j) + y * Math.cos(S * j))
      );
    };
  } else if (v === 1) g = (S) => o - Math.exp(-p * S) * (y + (w + p * y) * S);
  else {
    const S = p * Math.sqrt(v * v - 1);
    g = (j) => {
      const N = Math.exp(-v * p * j),
        T = Math.min(S * j, 300);
      return (
        o - (N * ((w + v * p * y) * Math.sinh(T) + S * y * Math.cosh(T))) / S
      );
    };
  }
  const b = {
    calculatedDuration: (x && f) || null,
    next: (S) => {
      const j = g(S);
      if (x) a.done = S >= f;
      else {
        let N = 0;
        v < 1 && (N = S === 0 ? Wt(w) : j1(g, S, j));
        const T = Math.abs(N) <= r,
          R = Math.abs(o - j) <= s;
        a.done = T && R;
      }
      return ((a.value = a.done ? o : j), a);
    },
    toString: () => {
      const S = Math.min(Uv(b), Qu),
        j = Wv((N) => b.next(S * N).value, S, 30);
      return S + "ms " + j;
    },
  };
  return b;
}
function Tm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: u,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    x = (T) => (a !== void 0 && T < a) || (u !== void 0 && T > u),
    w = (T) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - T) < Math.abs(u - T)
          ? a
          : u;
  let v = n * t;
  const y = f + v,
    p = o === void 0 ? y : o(y);
  p !== y && (v = p - f);
  const m = (T) => -v * Math.exp(-T / r),
    g = (T) => p + m(T),
    b = (T) => {
      const R = m(T),
        M = g(T);
      ((h.done = Math.abs(R) <= c), (h.value = h.done ? p : M));
    };
  let S, j;
  const N = (T) => {
    x(h.value) &&
      ((S = T),
      (j = T1({
        keyframes: [h.value, w(h.value)],
        velocity: j1(g, T, h.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !j && S === void 0 && ((R = !0), b(T), N(T)),
          S !== void 0 && T >= S ? j.next(T - S) : (!R && b(T), h)
        );
      },
    }
  );
}
const kC = ki(0.42, 0, 1, 1),
  jC = ki(0, 0, 0.58, 1),
  N1 = ki(0.42, 0, 0.58, 1),
  TC = (e) => Array.isArray(e) && typeof e[0] != "number",
  NC = {
    linear: Je,
    easeIn: kC,
    easeInOut: N1,
    easeOut: jC,
    circIn: hf,
    circInOut: o1,
    circOut: i1,
    backIn: ff,
    backInOut: r1,
    backOut: n1,
    anticipate: s1,
  },
  Nm = (e) => {
    if (af(e)) {
      kv(e.length === 4);
      const [t, n, r, s] = e;
      return ki(t, n, r, s);
    } else if (typeof e == "string") return NC[e];
    return e;
  };
function PC(e, t, n) {
  const r = [],
    s = n || k1,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || Je : t;
      a = ji(u, a);
    }
    r.push(a);
  }
  return r;
}
function CC(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((kv(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = PC(t, r, s),
    u = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (u > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = Wr(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => c(qt(e[0], e[i - 1], d)) : c;
}
function EC(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Wr(0, t, r);
    e.push(se(n, 1, s));
  }
}
function AC(e) {
  const t = [0];
  return (EC(t, e.length - 1), t);
}
function MC(e, t) {
  return e.map((n) => n * t);
}
function DC(e, t) {
  return e.map(() => t || N1).splice(0, e.length - 1);
}
function na({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = TC(r) ? r.map(Nm) : Nm(r),
    i = { done: !1, value: t[0] },
    o = MC(n && n.length === t.length ? n : AC(t), e),
    a = CC(o, t, { ease: Array.isArray(s) ? s : DC(t, s) });
  return {
    calculatedDuration: e,
    next: (u) => ((i.value = a(u)), (i.done = u >= e), i),
  };
}
const RC = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => J.update(t, !0),
      stop: () => kn(t),
      now: () => (Te.isProcessing ? Te.timestamp : Vt.now()),
    };
  },
  VC = { decay: Tm, inertia: Tm, tween: na, keyframes: na, spring: T1 },
  LC = (e) => e / 100;
class vf extends b1 {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: u } = this.options;
        u && u();
      }));
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || xf,
      a = (u, c) => this.onKeyframesResolved(u, c);
    ((this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = of(n) ? n : VC[n] || na;
    let u, c;
    a !== na &&
      typeof t[0] != "number" &&
      ((u = ji(LC, k1(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    (i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      d.calculatedDuration === null && (d.calculatedDuration = Uv(d)));
    const { calculatedDuration: f } = d,
      h = f + s,
      x = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: x,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: u,
      calculatedDuration: c,
      totalDuration: d,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: h,
      repeat: x,
      repeatType: w,
      repeatDelay: v,
      onUpdate: y,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const p = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      m = this.speed >= 0 ? p < 0 : p > d;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let g = this.currentTime,
      b = i;
    if (x) {
      const T = Math.min(this.currentTime, d) / f;
      let R = Math.floor(T),
        M = T % 1;
      (!M && T >= 1 && (M = 1),
        M === 1 && R--,
        (R = Math.min(R, x + 1)),
        !!(R % 2) &&
          (w === "reverse"
            ? ((M = 1 - M), v && (M -= v / f))
            : w === "mirror" && (b = o)),
        (g = qt(0, 1, M) * f));
    }
    const S = m ? { done: !1, value: u[0] } : b.next(g);
    a && (S.value = a(S.value));
    let { done: j } = S;
    !m &&
      c !== null &&
      (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      N && s !== void 0 && (S.value = Va(u, this.options, s)),
      y && y(S.value),
      N && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ht(t.calculatedDuration) : 0;
  }
  get time() {
    return Ht(this.currentTime);
  }
  set time(t) {
    ((t = Wt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = Ht(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = RC, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((i) => this.tick(i))), n && n());
    const s = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = s)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const $C = new Set(["opacity", "clipPath", "filter", "transform"]);
function IC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: u,
  } = {},
) {
  const c = { [t]: n };
  u && (c.offset = u);
  const d = Gv(a, s);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const FC = Wd(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ra = 10,
  OC = 2e4;
function BC(e) {
  return of(e.type) || e.type === "spring" || !Hv(e.ease);
}
function _C(e, t) {
  const n = new vf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < OC;) ((r = n.sample(i)), s.push(r.value), (i += ra));
  return { times: void 0, keyframes: s, duration: i - ra, ease: "linear" };
}
const P1 = { anticipate: s1, backInOut: r1, circInOut: o1 };
function zC(e) {
  return e in P1;
}
class Pm extends b1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    ((this.resolver = new w1(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && ea() && zC(i) && (i = P1[i]), BC(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: h,
          motionValue: x,
          element: w,
          ...v
        } = this.options,
        y = _C(t, v);
      ((t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = y.duration),
        (s = y.times),
        (i = y.ease),
        (o = "keyframes"));
    }
    const d = IC(a.owner.current, u, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (dm(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(Va(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: d, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Ht(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Ht(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Wt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Je;
      const { animation: r } = n;
      dm(r, t);
    }
    return Je;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: d,
          onComplete: f,
          element: h,
          ...x
        } = this.options,
        w = new vf({
          ...x,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        v = Wt(this.time);
      c.setWithVelocity(w.sample(v - ra).value, w.sample(v).value, ra);
    }
    const { onStop: u } = this.options;
    (u && u(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: u, transformTemplate: c } = n.owner.getProps();
    return (
      FC() &&
      r &&
      $C.has(r) &&
      !u &&
      !c &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const UC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  WC = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  HC = { type: "keyframes", duration: 0.8 },
  GC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  YC = (e, { keyframes: t }) =>
    t.length > 2
      ? HC
      : rr.has(e)
        ? e.startsWith("scale")
          ? WC(t[1])
          : UC
        : GC;
function KC({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: u,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const wf =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = sf(r, e) || {},
      u = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Wt(u);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        (t.set(h), a.onUpdate && a.onUpdate(h));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    (KC(a) || (d = { ...d, ...YC(e, d) }),
      d.duration && (d.duration = Wt(d.duration)),
      d.repeatDelay && (d.repeatDelay = Wt(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      f && !i && t.get() !== void 0)
    ) {
      const h = Va(d.keyframes, a);
      if (h !== void 0)
        return (
          J.update(() => {
            (d.onUpdate(h), d.onComplete());
          }),
          new h5([])
        );
    }
    return !i && Pm.supports(d) ? new Pm(d) : new vf(d);
  };
function XC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function C1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...u } = t;
  r && (o = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in u) {
    const h = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null,
      ),
      x = u[f];
    if (x === void 0 || (d && XC(d, f))) continue;
    const w = { delay: n, ...sf(o || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = Zv(e);
      if (p) {
        const m = window.MotionHandoffAnimation(p, f, J);
        m !== null && ((w.startTime = m), (v = !0));
      }
    }
    (Ju(e, f),
      h.start(
        wf(f, h, x, e.shouldReduceMotion && qv.has(f) ? { type: !1 } : w, e, v),
      ));
    const y = h.animation;
    y && c.push(y);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        J.update(() => {
          a && P5(e, a);
        });
      }),
    c
  );
}
function oc(e, t, n = {}) {
  var r;
  const s = Ra(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(C1(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return qC(e, t, d + c, f, h, n);
          }
        : () => Promise.resolve(),
    { when: u } = i;
  if (u) {
    const [c, d] = u === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => d());
  } else return Promise.all([o(), a(n.delay)]);
}
function qC(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    u = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(QC)
      .forEach((c, d) => {
        (c.notify("AnimationStart", t),
          o.push(
            oc(c, t, { ...i, delay: n + u(d) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function QC(e, t) {
  return e.sortNodePosition(t);
}
function ZC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => oc(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = oc(e, t, n);
  else {
    const s = typeof t == "function" ? Ra(e, t, n.custom) : t;
    r = Promise.all(C1(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const JC = Gd.length;
function E1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? E1(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < JC; n++) {
    const r = Gd[n],
      s = e.props[r];
    (li(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const eE = [...Hd].reverse(),
  tE = Hd.length;
function nE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => ZC(e, n, r)));
}
function rE(e) {
  let t = nE(e),
    n = Cm(),
    r = !0;
  const s = (u) => (c, d) => {
    var f;
    const h = Ra(
      e,
      d,
      u === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (h) {
      const { transition: x, transitionEnd: w, ...v } = h;
      c = { ...c, ...v, ...w };
    }
    return c;
  };
  function i(u) {
    t = u(e);
  }
  function o(u) {
    const { props: c } = e,
      d = E1(e.parent) || {},
      f = [],
      h = new Set();
    let x = {},
      w = 1 / 0;
    for (let y = 0; y < tE; y++) {
      const p = eE[y],
        m = n[p],
        g = c[p] !== void 0 ? c[p] : d[p],
        b = li(g),
        S = p === u ? m.isActive : null;
      S === !1 && (w = y);
      let j = g === d[p] && g !== c[p] && b;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
        (m.protectedKeys = { ...x }),
        (!m.isActive && S === null) ||
          (!g && !m.prevProp) ||
          Ma(g) ||
          typeof g == "boolean")
      )
        continue;
      const N = sE(m.prevProp, g);
      let T = N || (p === u && m.isActive && !j && b) || (y > w && b),
        R = !1;
      const M = Array.isArray(g) ? g : [g];
      let z = M.reduce(s(p), {});
      S === !1 && (z = {});
      const { prevResolvedValues: ae = {} } = m,
        ve = { ...ae, ...z },
        ze = (_) => {
          ((T = !0),
            h.has(_) && ((R = !0), h.delete(_)),
            (m.needsAnimating[_] = !0));
          const P = e.getValue(_);
          P && (P.liveStyle = !1);
        };
      for (const _ in ve) {
        const P = z[_],
          L = ae[_];
        if (x.hasOwnProperty(_)) continue;
        let $ = !1;
        (qu(P) && qu(L) ? ($ = !zv(P, L)) : ($ = P !== L),
          $
            ? P != null
              ? ze(_)
              : h.add(_)
            : P !== void 0 && h.has(_)
              ? ze(_)
              : (m.protectedKeys[_] = !0));
      }
      ((m.prevProp = g),
        (m.prevResolvedValues = z),
        m.isActive && (x = { ...x, ...z }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(j && N) || R) &&
          f.push(...M.map((_) => ({ animation: _, options: { type: p } }))));
    }
    if (h.size) {
      const y = {};
      (h.forEach((p) => {
        const m = e.getBaseTarget(p),
          g = e.getValue(p);
        (g && (g.liveStyle = !0), (y[p] = m ?? null));
      }),
        f.push({ animation: y }));
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var x;
        return (x = h.animationState) === null || x === void 0
          ? void 0
          : x.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = o(u);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      ((n = Cm()), (r = !0));
    },
  };
}
function sE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zv(t, e) : !1;
}
function Dn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Cm() {
  return {
    animate: Dn(!0),
    whileInView: Dn(),
    whileHover: Dn(),
    whileTap: Dn(),
    whileDrag: Dn(),
    whileFocus: Dn(),
    exit: Dn(),
  };
}
class En {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class iE extends En {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = rE(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ma(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let oE = 0;
class aE extends En {
  constructor() {
    (super(...arguments), (this.id = oE++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const lE = { animation: { Feature: iE }, exit: { Feature: aE } };
function fi(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Ti(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const uE = (e) => (t) => lf(t) && e(t, Ti(t));
function Fs(e, t, n, r) {
  return fi(e, t, uE(n), r);
}
const Em = (e, t) => Math.abs(e - t);
function cE(e, t) {
  const n = Em(e.x, t.x),
    r = Em(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class A1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Ml(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          x = cE(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !x) return;
        const { point: w } = f,
          { timestamp: v } = Te;
        this.history.push({ ...w, timestamp: v });
        const { onStart: y, onMove: p } = this.handlers;
        (h ||
          (y && y(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, h) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Al(h, this.transformPagePoint)),
          J.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: x, onSessionEnd: w, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const y = Ml(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Al(h, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && x && x(f, y), w && w(f, y));
      }),
      !lf(t))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window));
    const o = Ti(t),
      a = Al(o, this.transformPagePoint),
      { point: u } = a,
      { timestamp: c } = Te;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    (d && d(t, Ml(a, this.history)),
      (this.removeListeners = ji(
        Fs(this.contextWindow, "pointermove", this.handlePointerMove),
        Fs(this.contextWindow, "pointerup", this.handlePointerUp),
        Fs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), kn(this.updatePoint));
  }
}
function Al(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Am(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ml({ point: e }, t) {
  return {
    point: e,
    delta: Am(e, M1(t)),
    offset: Am(e, dE(t)),
    velocity: fE(t, 0.1),
  };
}
function dE(e) {
  return e[0];
}
function M1(e) {
  return e[e.length - 1];
}
function fE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = M1(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Wt(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Ht(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const D1 = 1e-4,
  hE = 1 - D1,
  pE = 1 + D1,
  R1 = 0.01,
  mE = 0 - R1,
  gE = 0 + R1;
function nt(e) {
  return e.max - e.min;
}
function xE(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Mm(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = se(t.min, t.max, e.origin)),
    (e.scale = nt(n) / nt(t)),
    (e.translate = se(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= hE && e.scale <= pE) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= mE && e.translate <= gE) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Os(e, t, n, r) {
  (Mm(e.x, t.x, n.x, r ? r.originX : void 0),
    Mm(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Dm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + nt(t)));
}
function yE(e, t, n) {
  (Dm(e.x, t.x, n.x), Dm(e.y, t.y, n.y));
}
function Rm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + nt(t)));
}
function Bs(e, t, n) {
  (Rm(e.x, t.x, n.x), Rm(e.y, t.y, n.y));
}
function vE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Vm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function wE(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: Vm(e.x, n, s), y: Vm(e.y, t, r) };
}
function Lm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function bE(e, t) {
  return { x: Lm(e.x, t.x), y: Lm(e.y, t.y) };
}
function SE(e, t) {
  let n = 0.5;
  const r = nt(e),
    s = nt(t);
  return (
    s > r
      ? (n = Wr(t.min, t.max - r, e.min))
      : r > s && (n = Wr(e.min, e.max - s, t.min)),
    qt(0, 1, n)
  );
}
function kE(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ac = 0.35;
function jE(e = ac) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ac),
    { x: $m(e, "left", "right"), y: $m(e, "top", "bottom") }
  );
}
function $m(e, t, n) {
  return { min: Im(e, t), max: Im(e, n) };
}
function Im(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Fm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Tr = () => ({ x: Fm(), y: Fm() }),
  Om = () => ({ min: 0, max: 0 }),
  fe = () => ({ x: Om(), y: Om() });
function lt(e) {
  return [e("x"), e("y")];
}
function V1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function TE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NE(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Dl(e) {
  return e === void 0 || e === 1;
}
function lc({ scale: e, scaleX: t, scaleY: n }) {
  return !Dl(e) || !Dl(t) || !Dl(n);
}
function In(e) {
  return (
    lc(e) ||
    L1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function L1(e) {
  return Bm(e.x) || Bm(e.y);
}
function Bm(e) {
  return e && e !== "0%";
}
function sa(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function _m(e, t, n, r, s) {
  return (s !== void 0 && (e = sa(e, s, r)), sa(e, n, r) + t);
}
function uc(e, t = 0, n = 1, r, s) {
  ((e.min = _m(e.min, t, n, r, s)), (e.max = _m(e.max, t, n, r, s)));
}
function $1(e, { x: t, y: n }) {
  (uc(e.x, t.translate, t.scale, t.originPoint),
    uc(e.y, n.translate, n.scale, n.originPoint));
}
const zm = 0.999999999999,
  Um = 1.0000000000001;
function PE(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    ((i = n[a]), (o = i.projectionDelta));
    const { visualElement: u } = i.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Pr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), $1(e, o)),
      r && In(i.latestValues) && Pr(e, i.latestValues));
  }
  (t.x < Um && t.x > zm && (t.x = 1), t.y < Um && t.y > zm && (t.y = 1));
}
function Nr(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Wm(e, t, n, r, s = 0.5) {
  const i = se(e.min, e.max, s);
  uc(e, t, n, i, r);
}
function Pr(e, t) {
  (Wm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Wm(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function I1(e, t) {
  return V1(NE(e.getBoundingClientRect(), t));
}
function CE(e, t, n) {
  const r = I1(e, n),
    { scroll: s } = t;
  return (s && (Nr(r.x, s.offset.x), Nr(r.y, s.offset.y)), r);
}
const F1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  EE = new WeakMap();
class AE {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = fe()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ti(d).point));
      },
      i = (d, f) => {
        const { drag: h, dragPropagation: x, onDragStart: w } = this.getProps();
        if (
          h &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = S5(h)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          lt((y) => {
            let p = this.getAxisMotionValue(y).get() || 0;
            if (Rt.test(p)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[y];
                g && (p = nt(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[y] = p;
          }),
          w && J.postRender(() => w(d, f)),
          Ju(this.visualElement, "transform"));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: x,
          onDirectionLock: w,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: y } = f;
        if (x && this.currentDirection === null) {
          ((this.currentDirection = ME(y)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, y),
          this.updateAxis("y", f.point, y),
          this.visualElement.render(),
          v && v(d, f));
      },
      a = (d, f) => this.stop(d, f),
      u = () =>
        lt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new A1(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: F1(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && J.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !qi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = vE(o, this.constraints[t], this.elastic[t])),
      i.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    (n && kr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = wE(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = jE(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        lt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = kE(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !kr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = CE(r, s.root, this.visualElement.getTransformPagePoint());
    let o = bE(s.layout.layoutBox, i);
    if (n) {
      const a = n(TE(o));
      ((this.hasMutatedConstraints = !!a), a && (o = V1(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      u = this.constraints || {},
      c = lt((d) => {
        if (!qi(d, n, this.currentDirection)) return;
        let f = (u && u[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          x = s ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(d, w);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ju(this.visualElement, t),
      r.start(wf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    lt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    lt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    lt((n) => {
      const { drag: r } = this.getProps();
      if (!qi(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - se(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!kr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    lt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        s[o] = SE({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      lt((o) => {
        if (!qi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: u, max: c } = this.constraints[o];
        a.set(se(u, c, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    EE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Fs(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        kr(u) && u.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      J.read(r));
    const o = fi(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (lt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), i(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = ac,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function qi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ME(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class DE extends En {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Je),
      (this.removeListeners = Je),
      (this.controls = new AE(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Je));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Hm = (e) => (t, n) => {
  e && J.postRender(() => e(t, n));
};
class RE extends En {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Je));
  }
  onPointerDown(t) {
    this.session = new A1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: F1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: Hm(t),
      onStart: Hm(n),
      onMove: r,
      onEnd: (i, o) => {
        (delete this.session, s && J.postRender(() => s(i, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Fs(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const vo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ds = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = Gm(e, t.target.x),
        r = Gm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  VE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = jn.parse(e);
      if (s.length > 5) return r;
      const i = jn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        u = n.y.scale * t.y;
      ((s[0 + o] /= a), (s[1 + o] /= u));
      const c = se(a, u, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
class LE extends k.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    (t5($E),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (vo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              J.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Kd.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function O1(e) {
  const [t, n] = gP(),
    r = k.useContext(bv);
  return l.jsx(LE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(Ev),
    isPresent: t,
    safeToRemove: n,
  });
}
const $E = {
  borderRadius: {
    ...ds,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ds,
  borderTopRightRadius: ds,
  borderBottomLeftRadius: ds,
  borderBottomRightRadius: ds,
  boxShadow: VE,
};
function IE(e, t, n) {
  const r = Le(e) ? e : ci(e);
  return (r.start(wf("", r, t, n)), r.animation);
}
function FE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const OE = (e, t) => e.depth - t.depth;
class BE {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (uf(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (cf(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(OE),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function _E(e, t) {
  const n = Vt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (kn(r), e(i - t));
    };
  return (J.read(r, !0), () => kn(r));
}
const B1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  zE = B1.length,
  Ym = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Km = (e) => typeof e == "number" || F.test(e);
function UE(e, t, n, r, s, i) {
  s
    ? ((e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, WE(r))),
      (e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, HE(r))))
    : i &&
      (e.opacity = se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < zE; o++) {
    const a = `border${B1[o]}Radius`;
    let u = Xm(t, a),
      c = Xm(n, a);
    if (u === void 0 && c === void 0) continue;
    (u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || Km(u) === Km(c)
        ? ((e[a] = Math.max(se(Ym(u), Ym(c), r), 0)),
          (Rt.test(c) || Rt.test(u)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function Xm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const WE = _1(0, 0.5, i1),
  HE = _1(0.5, 0.95, Je);
function _1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Wr(e, t, r)));
}
function qm(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function ot(e, t) {
  (qm(e.x, t.x), qm(e.y, t.y));
}
function Qm(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Zm(e, t, n, r, s) {
  return (
    (e -= t),
    (e = sa(e, 1 / n, r)),
    s !== void 0 && (e = sa(e, 1 / s, r)),
    e
  );
}
function GE(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Rt.test(t) &&
      ((t = parseFloat(t)), (t = se(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = se(i.min, i.max, r);
  (e === i && (a -= t),
    (e.min = Zm(e.min, t, n, a, s)),
    (e.max = Zm(e.max, t, n, a, s)));
}
function Jm(e, t, [n, r, s], i, o) {
  GE(e, t[n], t[r], t[s], t.scale, i, o);
}
const YE = ["x", "scaleX", "originX"],
  KE = ["y", "scaleY", "originY"];
function eg(e, t, n, r) {
  (Jm(e.x, t, YE, n ? n.x : void 0, r ? r.x : void 0),
    Jm(e.y, t, KE, n ? n.y : void 0, r ? r.y : void 0));
}
function tg(e) {
  return e.translate === 0 && e.scale === 1;
}
function z1(e) {
  return tg(e.x) && tg(e.y);
}
function ng(e, t) {
  return e.min === t.min && e.max === t.max;
}
function XE(e, t) {
  return ng(e.x, t.x) && ng(e.y, t.y);
}
function rg(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function U1(e, t) {
  return rg(e.x, t.x) && rg(e.y, t.y);
}
function sg(e) {
  return nt(e.x) / nt(e.y);
}
function ig(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class qE {
  constructor() {
    this.members = [];
  }
  add(t) {
    (uf(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (cf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function QE(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: x,
      skewY: w,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      x && (r += `skewX(${x}deg) `),
      w && (r += `skewY(${w}deg) `));
  }
  const a = e.x.scale * t.x,
    u = e.y.scale * t.y;
  return ((a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none");
}
const Fn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  bs = typeof window < "u" && window.MotionDebug !== void 0,
  Rl = ["", "X", "Y", "Z"],
  ZE = { visibility: "hidden" },
  og = 1e3;
let JE = 0;
function Vl(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function W1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Zv(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", J, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && W1(r);
}
function H1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = JE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            bs &&
              (Fn.totalNodes =
                Fn.resolvedTargetDeltas =
                Fn.recalculatedProjection =
                  0),
            this.nodes.forEach(nA),
            this.nodes.forEach(aA),
            this.nodes.forEach(lA),
            this.nodes.forEach(rA),
            bs && window.MotionDebug.record(Fn));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new BE());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new df()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = FE(o)), (this.instance = o));
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || u) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = _E(h, 250)),
            vo.hasAnimatedSinceResize &&
              ((vo.hasAnimatedSinceResize = !1), this.nodes.forEach(lg)));
        });
      }
      (u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          d &&
          (u || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: x,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || hA,
                { onLayoutAnimationStart: y, onLayoutAnimationComplete: p } =
                  d.getProps(),
                m = !this.targetLayout || !U1(this.targetLayout, w) || x,
                g = !h && x;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g));
                const b = { ...sf(v, "layout"), onPlay: y, onComplete: p };
                ((d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b));
              } else
                (h || lg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = w;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        kn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          W1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(ag));
        return;
      }
      (this.isUpdating || this.nodes.forEach(iA),
        (this.isUpdating = !1),
        this.nodes.forEach(oA),
        this.nodes.forEach(eA),
        this.nodes.forEach(tA),
        this.clearAllSnapshots());
      const a = Vt.now();
      ((Te.delta = qt(0, 1e3 / 60, a - Te.timestamp)),
        (Te.timestamp = a),
        (Te.isProcessing = !0),
        jl.update.process(Te),
        jl.preRender.process(Te),
        jl.render.process(Te),
        (Te.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Kd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(sA), this.sharedNodes.forEach(cA));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        J.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      J.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = fe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !z1(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (a || In(this.latestValues) || d) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        o && (u = this.removeTransform(u)),
        pA(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return fe();
      const u = a.measureViewportBox();
      if (!(
        ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
        this.path.some(mA)
      )) {
        const { scroll: d } = this.root;
        d && (Nr(u.x, d.offset.x), Nr(u.y, d.offset.y));
      }
      return u;
    }
    removeElementScroll(o) {
      var a;
      const u = fe();
      if (
        (ot(u, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return u;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && ot(u, o), Nr(u.x, f.offset.x), Nr(u.y, f.offset.y));
      }
      return u;
    }
    applyTransform(o, a = !1) {
      const u = fe();
      ot(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Pr(u, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          In(d.latestValues) && Pr(u, d.latestValues));
      }
      return (In(this.latestValues) && Pr(u, this.latestValues), u);
    }
    removeTransform(o) {
      const a = fe();
      ot(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !In(c.latestValues)) continue;
        lc(c.latestValues) && c.updateSnapshot();
        const d = fe(),
          f = c.measurePageBox();
        (ot(d, f),
          eg(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d));
      }
      return (In(this.latestValues) && eg(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = u.isSharedProjectionDirty));
      const c = !!this.resumingFrom || this !== u;
      if (!(
        o ||
        (c && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((a = this.parent) === null || a === void 0) &&
          a.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = Te.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent();
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = fe()),
              (this.relativeTargetOrigin = fe()),
              Bs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                x.layout.layoutBox,
              ),
              ot(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = fe()), (this.targetWithTransforms = fe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                yE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ot(this.target, this.layout.layoutBox),
                  $1(this.target, this.targetDelta))
                : ot(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const x = this.getClosestProjectingParent();
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = x),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = fe()),
                (this.relativeTargetOrigin = fe()),
                Bs(this.relativeTargetOrigin, this.target, x.target),
                ot(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          bs && Fn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        lc(this.parent.latestValues) ||
        L1(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        u = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        u &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Te.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      ot(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        x = this.treeScale.y;
      (PE(this.layoutCorrected, this.treeScale, this.path, u),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = fe())));
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Qm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Qm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Os(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== x ||
          !ig(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ig(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        bs && Fn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Tr()),
        (this.projectionDelta = Tr()),
        (this.projectionDeltaWithTransform = Tr()));
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        d = { ...this.latestValues },
        f = Tr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const h = fe(),
        x = u ? u.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        v = x !== w,
        y = this.getStack(),
        p = !y || y.members.length <= 1,
        m = !!(v && !p && this.options.crossfade === !0 && !this.path.some(fA));
      this.animationProgress = 0;
      let g;
      ((this.mixTargetDelta = (b) => {
        const S = b / 1e3;
        (ug(f.x, o.x, S),
          ug(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Bs(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dA(this.relativeTarget, this.relativeTargetOrigin, h, S),
            g && XE(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = fe()),
            ot(g, this.relativeTarget)),
          v &&
            ((this.animationValues = d), UE(d, c, this.latestValues, S, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = J.update(() => {
          ((vo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = IE(0, og, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(og),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !u || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          G1(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || fe();
          const f = nt(this.layout.layoutBox.x);
          ((u.x.min = o.target.x.min), (u.x.max = u.x.min + f));
          const h = nt(this.layout.layoutBox.y);
          ((u.y.min = o.target.y.min), (u.y.max = u.y.min + h));
        }
        (ot(a, u),
          Pr(a, d),
          Os(this.projectionDeltaWithTransform, this.layoutCorrected, a, d));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new qE()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      (c && c.promote(this, u),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: u } = o;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      u.z && Vl("z", o, c, this.animationValues);
      for (let d = 0; d < Rl.length; d++)
        (Vl(`rotate${Rl[d]}`, o, c, this.animationValues),
          Vl(`skew${Rl[d]}`, o, c, this.animationValues));
      o.render();
      for (const d in c)
        (o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ZE;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = xo(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = xo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !In(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = QE(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h,
        )),
        d && (c.transform = d(h, c.transform)));
      const { x, y: w } = this.projectionDelta;
      ((c.transformOrigin = `${x.origin * 100}% ${w.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (u =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const v in Jo) {
        if (h[v] === void 0) continue;
        const { correct: y, applyTo: p } = Jo[v],
          m = c.transform === "none" ? h[v] : y(h[v], f);
        if (p) {
          const g = p.length;
          for (let b = 0; b < g; b++) c[p[b]] = m;
        } else c[v] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? xo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ag),
        this.root.sharedNodes.clear());
    }
  };
}
function eA(e) {
  e.updateLayout();
}
function tA(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? lt((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            x = nt(h);
          ((h.min = r[f].min), (h.max = h.min + x));
        })
      : G1(i, n.layoutBox, r) &&
        lt((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            x = nt(r[f]);
          ((h.max = h.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + x)));
        });
    const a = Tr();
    Os(a, r, n.layoutBox);
    const u = Tr();
    o ? Os(u, e.applyTransform(s, !0), n.measuredBox) : Os(u, r, n.layoutBox);
    const c = !z1(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: x } = f;
        if (h && x) {
          const w = fe();
          Bs(w, n.layoutBox, h.layoutBox);
          const v = fe();
          (Bs(v, r, x.layoutBox),
            U1(w, v) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function nA(e) {
  (bs && Fn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function rA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function sA(e) {
  e.clearSnapshot();
}
function ag(e) {
  e.clearMeasurements();
}
function iA(e) {
  e.isLayoutDirty = !1;
}
function oA(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function lg(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function aA(e) {
  e.resolveTargetDelta();
}
function lA(e) {
  e.calcProjection();
}
function uA(e) {
  e.resetSkewAndRotation();
}
function cA(e) {
  e.removeLeadSnapshot();
}
function ug(e, t, n) {
  ((e.translate = se(t.translate, 0, n)),
    (e.scale = se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function cg(e, t, n, r) {
  ((e.min = se(t.min, n.min, r)), (e.max = se(t.max, n.max, r)));
}
function dA(e, t, n, r) {
  (cg(e.x, t.x, n.x, r), cg(e.y, t.y, n.y, r));
}
function fA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  dg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  fg = dg("applewebkit/") && !dg("chrome/") ? Math.round : Je;
function hg(e) {
  ((e.min = fg(e.min)), (e.max = fg(e.max)));
}
function pA(e) {
  (hg(e.x), hg(e.y));
}
function G1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !xE(sg(t), sg(n), 0.2))
  );
}
function mA(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const gA = H1({
    attachResizeListener: (e, t) => fi(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ll = { current: void 0 },
  Y1 = H1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ll.current) {
        const e = new gA({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ll.current = e));
      }
      return Ll.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  xA = {
    pan: { Feature: RE },
    drag: { Feature: DE, ProjectionNode: Y1, MeasureLayout: O1 },
  };
function pg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && J.postRender(() => i(t, Ti(t)));
}
class yA extends En {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = x5(
        t,
        (n) => (pg(this.node, n, "Start"), (r) => pg(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class vA extends En {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ji(
      fi(this.node.current, "focus", () => this.onFocus()),
      fi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function mg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && J.postRender(() => i(t, Ti(t)));
}
class wA extends En {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = b5(
        t,
        (n) => (
          mg(this.node, n, "Start"),
          (r, { success: s }) => mg(this.node, r, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const cc = new WeakMap(),
  $l = new WeakMap(),
  bA = (e) => {
    const t = cc.get(e.target);
    t && t(e);
  },
  SA = (e) => {
    e.forEach(bA);
  };
function kA({ root: e, ...t }) {
  const n = e || document;
  $l.has(n) || $l.set(n, {});
  const r = $l.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(SA, { root: e, ...t })),
    r[s]
  );
}
function jA(e, t, n) {
  const r = kA(t);
  return (
    cc.set(e, n),
    r.observe(e),
    () => {
      (cc.delete(e), r.unobserve(e));
    }
  );
}
const TA = { some: 0, all: 1 };
class NA extends En {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : TA[s],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(u);
      };
    return jA(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(PA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function PA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const CA = {
    inView: { Feature: NA },
    tap: { Feature: wA },
    focus: { Feature: vA },
    hover: { Feature: yA },
  },
  EA = { layout: { ProjectionNode: Y1, MeasureLayout: O1 } },
  dc = { current: null },
  K1 = { current: !1 };
function AA() {
  if (((K1.current = !0), !!Ud))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (dc.current = e.matches);
      (e.addListener(t), t());
    } else dc.current = !1;
}
const MA = [...v1, De, jn],
  DA = (e) => MA.find(y1(e)),
  gg = new WeakMap();
function RA(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Le(s)) e.addValue(r, s);
    else if (Le(i)) e.addValue(r, ci(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ci(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const xg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class VA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = xf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const x = Vt.now();
        this.renderScheduledAt < x &&
          ((this.renderScheduledAt = x), J.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c, onUpdate: d } = o;
    ((this.onUpdate = d),
      (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Da(n)),
      (this.isVariantNode = Pv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const x in h) {
      const w = h[x];
      u[x] !== void 0 && Le(w) && w.set(u[x], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      gg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      K1.current || AA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : dc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (gg.delete(this.current),
      this.projection && this.projection.unmount(),
      kn(this.notifyUpdate),
      kn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = rr.has(t),
      s = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && J.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (s(), i(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Hr) {
      const n = Hr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : fe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < xg.length; r++) {
      const s = xg[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = RA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ci(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (g1(s) || a1(s))
          ? (s = parseFloat(s))
          : !DA(s) && jn.test(n) && (s = h1(t, n)),
        this.setBaseTarget(t, Le(s) ? s.get() : s)),
      Le(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = qd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Le(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new df()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class X1 extends VA {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = w1));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function LA(e) {
  return window.getComputedStyle(e);
}
class $A extends X1 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = $v));
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = gf(n);
      return (r && r.default) || 0;
    } else {
      const r = LA(t),
        s = (Rv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return I1(t, n);
  }
  build(t, n, r) {
    Jd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return rf(t, n, r);
  }
}
class IA extends X1 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = fe));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = gf(n);
      return (r && r.default) || 0;
    }
    return ((n = Iv.has(n) ? n : Yd(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Bv(t, n, r);
  }
  build(t, n, r) {
    ef(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Fv(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = nf(t.tagName)), super.mount(t));
  }
}
const FA = (e, t) =>
    Xd(e) ? new IA(t) : new $A(t, { allowProjection: e !== k.Fragment }),
  OA = c5({ ...lE, ...CA, ...xA, ...EA }, FA),
  Il = TP(OA);
function BA({ onComplete: e }) {
  const [t, n] = k.useState(!1);
  k.useEffect(() => {
    const s = setTimeout(() => {
      n(!0);
    }, 1e3);
    return () => {
      clearTimeout(s);
    };
  }, []);
  const r = () => {
    e();
  };
  return l.jsxs(Il.div, {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
    },
    className:
      "fixed inset-0 z-50 bg-[#121110] w-screen h-screen overflow-hidden select-none flex flex-col justify-between p-8 md:p-12 text-[#FCFAF6]",
    children: [
      l.jsx("div", {
        className:
          "absolute inset-0 z-0 overflow-hidden flex items-center justify-center",
        children: l.jsxs("div", {
          className:
            "relative w-full h-full scale-90 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/20",
          children: [
            l.jsx(Il.img, {
              src: "/taranna.png",
              alt: "Cinematic Portrait Fallback",
              initial: {
                scale: 1,
                filter: "grayscale(30%) brightness(50%) blur(4px)",
              },
              animate: {
                scale: 1.08,
                filter: "grayscale(10%) brightness(60%) blur(0px)",
              },
              transition: { duration: 6, ease: "easeOut" },
              className:
                "absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20",
            }),
            l.jsx("video", {
              src: "/vid.mp4",
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              onEnded: e,
              className:
                "absolute inset-0 w-full h-full md:object-cover object-contain pointer-events-none mix-blend-normal",
            }),
            l.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110] z-10 pointer-events-none opacity-90",
            }),
            l.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-[#121110]/80 via-transparent to-[#121110]/80 z-10 pointer-events-none opacity-90",
            }),
          ],
        }),
      }),
      l.jsx("div", { className: "relative z-10 w-full flex justify-end" }),
      l.jsx("div", { className: "relative z-10" }),
      l.jsx("div", {
        className: "relative z-10 flex justify-end items-center w-full",
        children: l.jsx("div", {
          className: "h-12 flex items-center justify-center",
          children:
            t &&
            l.jsxs(Il.button, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, ease: "easeOut" },
              onClick: r,
              className:
                "font-mono text-[10px] font-bold tracking-[0.25em] text-[#121110] bg-[#FCFAF6]/95 hover:bg-[#FCFAF6] shadow-2xl px-6 py-3 rounded-full transition-all flex items-center gap-2 duration-300 scale-100 hover:scale-105 active:scale-95 cursor-pointer uppercase border border-neutral-200/20 backdrop-blur-sm",
              children: [
                l.jsx("span", { children: "Skip Intro" }),
                l.jsx(VS, { className: "w-3.5 h-3.5 text-[#E65F1B]" }),
              ],
            }),
        }),
      }),
    ],
  });
}
const _A = [
  {
    id: "gal-model-1",
    type: "photo",
    src: "/Modle.JPG.jpeg",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Unbound Presence",
    category: "Model",
    description:
      "Reclaiming physical space with unshakeable dignity and softness, paving paths for radical body representation.",
  },
  {
    id: "gal-model-2",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Textured Warmth",
    category: "Model",
    description:
      "Elegant woolens and studio styling meeting soft, welcoming smiles that rewrite the narrative of high-fashion bodies.",
  },
  {
    id: "gal-model-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Studio Amber Portrait",
    category: "Model",
    description:
      "Warm-toned studio styling capturing beautiful interactions of light, texture, and relaxed confidence.",
  },
  {
    id: "gal-model-4",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Poise & Elegance",
    category: "Model",
    description:
      "Strong, soft, and unscripted. Representing the modern woman in spaces that once felt entirely exclusionary.",
  },
  {
    id: "gal-model-5",
    type: "photo",
    src: "/taranna.png",
    thumbnail: "/taranna.png",
    title: "The Silhouette of Truth",
    category: "Model",
    description:
      "The striking high-fashion silhouette representing the overarching golden thread running through all four domains.",
  },
  {
    id: "gal-model-vid",
    type: "video",
    src: "https://www.youtube.com/embed/H_8y0SBy3H8",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Radical Body Love & Representation",
    category: "Model",
    description:
      "Reflections on reclaiming plus-size representation in high fashion and establishing healthy bodily relationships.",
    youtubeId: "H_8y0SBy3H8",
  },
  {
    id: "gal-writer-1",
    type: "photo",
    src: "/Writer.jpg.jpeg",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Poetics in Chiaroscuro",
    category: "Writer",
    description:
      "Contemplative shadows framing the write-up desk. Turning personal confession into shared, universal echoes.",
  },
  {
    id: "gal-writer-2",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Silent Reflections",
    category: "Writer",
    description:
      "Capturing a writer's transient state — where the next line of free verse begins to form inside the quiet room.",
  },
  {
    id: "gal-writer-3",
    type: "photo",
    src: "/TD-382.jpg.jpeg",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Symmetrical Sincerity",
    category: "Writer",
    description:
      "A focused, symmetrical gaze capturing quiet strength, vulnerability, and absolute conviction.",
  },
  {
    id: "gal-writer-4",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Draped in Thoughts",
    category: "Writer",
    description:
      "A portrait of quiet intensity where text and form find their shared rhythm.",
  },
  {
    id: "gal-writer-vid",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Tarrana's Cinematic Journey",
    category: "Writer",
    description:
      "The official cinematic overview of Tarrana's multi-room journey. Walk through the spaces that define writer, model, speaker, and entrepreneur.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-speaker-1",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Speaking Frame",
    category: "Speaker",
    description:
      "A moment of raw presence in front of the lens, reflecting on how we give voice to silent shame and hidden shadows.",
  },
  {
    id: "gal-speaker-2",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sculpted Shadow-Play",
    category: "Speaker",
    description:
      "A monochrome block portrait demonstrating architectural lighting, texture, and visual design poise.",
  },
  {
    id: "gal-speaker-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Authentic Somatic Dialogue",
    category: "Speaker",
    description:
      "Answering somatic healing questions with deep resonance and clarity.",
  },
  {
    id: "gal-speaker-vid-1",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Courage to Be Disliked",
    category: "Speaker",
    description:
      "A compelling public presentation focusing on the freedom of standing in your individual truth, separate from external validation.",
    youtubeId: "_U0QvsnVfGg",
  },
  {
    id: "gal-speaker-vid-2",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Shame & Naming Shadows",
    category: "Speaker",
    description:
      "Addressing social expectations, unvoiced grief, and the transformational step of naming our deepest shadows.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-welfare-1",
    type: "photo",
    src: "/TD-004.jpg.jpeg",
    thumbnail: "/TD-004.jpg.jpeg",
    title: "Grassroots Empathetic Reach",
    category: "Welfare",
    description:
      "Active frontline leadership in Sampoorna, bringing health equity and empowerment directly to women in regional centers.",
  },
  {
    id: "gal-welfare-2",
    type: "photo",
    src: "/TD-263.jpg.jpeg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "The Heart of Sampoorna",
    category: "Welfare",
    description:
      "Deepjyoti Foundation's visionary healthcare loops, elevating families and building networks of persistent local aid.",
  },
  {
    id: "gal-welfare-3",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sampoorna Outreach Circle",
    category: "Welfare",
    description:
      "Frontline advocacy session and systemic planning for grassroots community aid loops.",
  },
  {
    id: "gal-welfare-vid",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "Welfare & Grassroots Outreach",
    category: "Welfare",
    description:
      "Documenting the systemic aid, medical support camps, and long-term empowerment frameworks run by Deepjyoti India Foundation.",
    youtubeId: "_U0QvsnVfGg",
  },
];
function zA({ onBack: e }) {
  const [t, n] = k.useState("all"),
    [r, s] = k.useState(null),
    i = _A.filter((h) =>
      t === "photos"
        ? h.type === "photo"
        : t === "videos"
          ? h.type === "video"
          : !0,
    ),
    o = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h - 1 + i.length) % i.length;
      s(i[x]);
    },
    a = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h + 1) % i.length;
      s(i[x]);
    };
  k.useEffect(() => {
    const h = (x) => {
      r &&
        (x.key === "Escape"
          ? s(null)
          : x.key === "ArrowLeft"
            ? o()
            : x.key === "ArrowRight" && a());
    };
    return (
      window.addEventListener("keydown", h),
      () => window.removeEventListener("keydown", h)
    );
  }, [r, i]);
  const u = i.filter((h) => h.category === "Welfare"),
    c = i.filter((h) => h.category === "Writer"),
    d = i.filter((h) => h.category === "Speaker"),
    f = i.filter((h) => h.category === "Model");
  return l.jsxs("div", {
    className:
      "min-h-screen bg-[#FCFAF6] text-neutral-900 pt-32 pb-24 px-4 md:px-12 flex flex-col relative overflow-hidden",
    children: [
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase block mb-2",
                children: "STORY ARCHIVE",
              }),
              l.jsx("h1", {
                className:
                  "font-heading text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight uppercase",
                children: "GALLERY",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "flex bg-neutral-100 p-1.5 rounded-full border border-neutral-200/60 shadow-inner w-fit select-none",
            children: [
              l.jsxs("button", {
                onClick: () => n("all"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "all" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(Lx, { className: "w-3.5 h-3.5" }), "All Work"],
              }),
              l.jsxs("button", {
                onClick: () => n("photos"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "photos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(WS, { className: "w-3.5 h-3.5" }), "Photos"],
              }),
              l.jsxs("button", {
                onClick: () => n("videos"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "videos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(r2, { className: "w-3.5 h-3.5" }), "Videos"],
              }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "w-full flex-grow flex flex-col justify-center gap-12 my-4 select-none relative z-10",
        children: [
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#15803D]/10 rounded-full border border-[#15803D]/20 shrink-0",
                    children: [
                      l.jsx(ba, { className: "w-3.5 h-3.5 text-[#15803D]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#15803D] font-bold tracking-widest uppercase",
                        children: "DOMAIN .01",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SOCIAL ENTREPRENEUR ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "frontline healthcare & care loops",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              u.length > 0
                ? l.jsx(Qi, { items: u, direction: "right", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#0E5FA3]/10 rounded-full border border-[#0E5FA3]/20 shrink-0",
                    children: [
                      l.jsx(Rx, { className: "w-3.5 h-3.5 text-[#0E5FA3]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#0E5FA3] font-bold tracking-widest uppercase",
                        children: "DOMAIN .02",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "WRITER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "poetics in quiet chiaroscuro",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              c.length > 0
                ? l.jsx(Qi, { items: c, direction: "left", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 rounded-full border border-[#B45309]/20 shrink-0",
                    children: [
                      l.jsx(od, { className: "w-3.5 h-3.5 text-[#B45309]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#B45309] font-bold tracking-widest uppercase",
                        children: "DOMAIN .03",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SPEAKER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "giving speech to naming shadows",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              d.length > 0
                ? l.jsx(Qi, { items: d, direction: "right", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#E65F1B]/10 rounded-full border border-[#E65F1B]/20 shrink-0",
                    children: [
                      l.jsx(US, { className: "w-3.5 h-3.5 text-[#E65F1B]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#E65F1B] font-bold tracking-widest uppercase",
                        children: "DOMAIN .04",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "MODEL ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "reclaiming the physical gaze",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              f.length > 0
                ? l.jsx(Qi, { items: f, direction: "left", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 border-t border-neutral-200/40 pt-8 z-10 font-mono text-[9px] tracking-widest uppercase",
        children: [
          l.jsx("span", { children: "© Tarrana Deepjyoti India Foundation" }),
          l.jsx("span", {
            children:
              "Swipe or Drag strips left/right to scroll faster • Click any card to expand",
          }),
        ],
      }),
      l.jsx(Vr, {
        children:
          r &&
          l.jsx(X.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => s(null),
            className:
              "fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out",
            children: l.jsxs(X.div, {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              transition: { type: "spring", stiffness: 300, damping: 28 },
              onClick: (h) => h.stopPropagation(),
              className:
                "bg-[#121212] border border-neutral-800 text-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative cursor-default",
              children: [
                l.jsx("button", {
                  onClick: () => s(null),
                  className:
                    "absolute top-4 right-4 md:top-6 md:right-6 bg-black/65 hover:bg-neutral-850 p-2.5 rounded-full text-neutral-300 hover:text-white transition-all border border-neutral-800 z-10 cursor-pointer hover:scale-105",
                  children: l.jsx(Bx, { className: "w-5 h-5" }),
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[60%] bg-neutral-950 flex items-center justify-center relative aspect-video md:aspect-auto md:min-h-[500px] group/media",
                  children: [
                    r.type === "photo"
                      ? l.jsx("img", {
                          src: r.src,
                          alt: r.title,
                          className:
                            "w-full h-full object-contain max-h-[50vh] md:max-h-[80vh] block",
                          referrerPolicy: "no-referrer",
                        })
                      : l.jsx("div", {
                          className:
                            "w-full h-full aspect-video md:absolute md:inset-0 bg-black",
                          children: r.youtubeId
                            ? l.jsx("iframe", {
                                src: `https://www.youtube.com/embed/${r.youtubeId}?autoplay=1&rel=0&modestbranding=1`,
                                title: r.title,
                                frameBorder: "0",
                                allow:
                                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: !0,
                                className: "w-full h-full block",
                              })
                            : l.jsx("video", {
                                src: r.src,
                                className: "w-full h-full block",
                                controls: !0,
                                autoPlay: !0,
                                playsInline: !0,
                              }),
                        }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), o());
                      },
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Previous (Left Arrow)",
                      children: l.jsx(IS, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:-translate-x-0.5",
                      }),
                    }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), a());
                      },
                      className:
                        "absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Next (Right Arrow)",
                      children: l.jsx(co, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:translate-x-0.5",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[40%] p-8 flex flex-col justify-between bg-[#121212]",
                  children: [
                    l.jsxs("div", {
                      className: "flex flex-col gap-6 mt-4",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsxs("span", {
                              className:
                                "font-mono text-[9px] tracking-[0.3em] text-[#E65F1B] font-bold uppercase block mb-2",
                              children: [
                                r.category === "Welfare"
                                  ? "SOCIAL ENTREPRENEUR"
                                  : r.category.toUpperCase(),
                                " // ARCHIVE",
                              ],
                            }),
                            l.jsx("h2", {
                              className:
                                "font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase",
                              children: r.title,
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className:
                            "font-sans text-sm text-neutral-400 leading-relaxed font-normal",
                          children: r.description,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "pt-8 border-t border-neutral-900 flex flex-col gap-2 mt-8 md:mt-0",
                      children: [
                        l.jsxs("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: ["Media format: ", r.type.toUpperCase()],
                        }),
                        l.jsx("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: "Collection: Tarrana Deepjyoti Foundation",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
function UA({ item: e, onClick: t }) {
  return l.jsxs(X.div, {
    whileHover: { scale: 1.03, y: -4 },
    transition: { duration: 0.4, ease: "easeOut" },
    onClick: t,
    className:
      "relative w-56 h-36 md:w-80 md:h-52 bg-neutral-900 rounded-2xl overflow-hidden shadow-md border border-neutral-200/5 hover:border-white/10 group cursor-pointer shrink-0",
    children: [
      l.jsx("img", {
        src: e.thumbnail,
        alt: e.title,
        draggable: "false",
        className:
          "w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500",
        referrerPolicy: "no-referrer",
      }),
      l.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300",
      }),
      l.jsxs("div", {
        className:
          "absolute inset-x-0 bottom-0 p-4 md:p-5 text-white flex flex-col gap-0.5 justify-end",
        children: [
          l.jsx("span", {
            className:
              "font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#E65F1B] font-bold uppercase",
            children:
              e.category === "Welfare" ? "SOCIAL ENTREPRENEUR" : e.category,
          }),
          l.jsx("h3", {
            className:
              "font-heading text-xs md:text-sm font-bold tracking-tight uppercase line-clamp-1",
            children: e.title,
          }),
        ],
      }),
      l.jsx("div", {
        className:
          "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-350 bg-black/35 backdrop-blur-xs scale-98 group-hover:scale-100",
        children: l.jsx("div", {
          className:
            "bg-white text-neutral-900 p-3 rounded-full shadow-lg flex items-center justify-center",
          children:
            e.type === "video"
              ? l.jsx(Fx, {
                  className: "w-4 h-4 fill-current text-neutral-900",
                })
              : l.jsx(KS, { className: "w-4 h-4 text-neutral-900" }),
        }),
      }),
    ],
  });
}
function Qi({ items: e, direction: t, onItemClick: n }) {
  const r = k.useRef(null),
    [s, i] = k.useState(!1),
    [o, a] = k.useState(0),
    [u, c] = k.useState(0),
    d = k.useRef(!1),
    f = k.useRef(!1),
    h = [...e, ...e, ...e],
    x = () => (r.current ? r.current.scrollWidth / 3 : 0);
  k.useEffect(() => {
    const b = r.current;
    if (!b) return;
    const S = x();
    S > 0 && (b.scrollLeft = S);
    let j,
      N = performance.now();
    const T = (M) => {
        if (!r.current) return;
        const z = x();
        if (z === 0) {
          j = requestAnimationFrame(T);
          return;
        }
        if (
          (b.scrollLeft <= 0
            ? (b.scrollLeft += z)
            : b.scrollLeft >= z * 2 && (b.scrollLeft -= z),
          !d.current && !f.current)
        ) {
          const ae = (M - N) / 1e3,
            ve = 40;
          t === "left" ? (b.scrollLeft += ve * ae) : (b.scrollLeft -= ve * ae);
        }
        ((N = M), (j = requestAnimationFrame(T)));
      },
      R = setTimeout(() => {
        j = requestAnimationFrame(T);
      }, 150);
    return () => {
      (cancelAnimationFrame(j), clearTimeout(R));
    };
  }, [e, t]);
  const w = (b) => {
      const S = r.current;
      S &&
        (i(!0), (d.current = !0), a(b.pageX - S.offsetLeft), c(S.scrollLeft));
    },
    v = () => {
      (i(!1), (d.current = !1), (f.current = !1));
    },
    y = () => {
      (i(!1),
        setTimeout(() => {
          d.current = !1;
        }, 100));
    },
    p = (b) => {
      if (!s) return;
      const S = r.current;
      if (!S) return;
      b.preventDefault();
      const N = (b.pageX - S.offsetLeft - o) * 2.2;
      S.scrollLeft = u - N;
    },
    m = () => {
      d.current = !0;
    },
    g = () => {
      setTimeout(() => {
        d.current = !1;
      }, 1200);
    };
  return l.jsxs("div", {
    className: "relative w-full overflow-hidden py-1",
    children: [
      l.jsx("div", {
        className:
          "absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#FCFAF6] to-transparent z-10 pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#FCFAF6] to-transparent z-10 pointer-events-none",
      }),
      l.jsx("div", {
        ref: r,
        onMouseDown: w,
        onMouseLeave: v,
        onMouseUp: y,
        onMouseMove: p,
        onTouchStart: m,
        onTouchEnd: g,
        onMouseEnter: () => {
          f.current = !0;
        },
        className:
          "flex overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none w-full py-2 touch-pan-x",
        style: { scrollBehavior: s ? "auto" : void 0 },
        children: l.jsx("div", {
          className: "flex w-max",
          children: h.map((b, S) =>
            l.jsx(
              "div",
              {
                className: "px-3 md:px-4 shrink-0",
                children: l.jsx(UA, { item: b, onClick: () => n(b) }),
              },
              `${b.id}-tripled-${S}`,
            ),
          ),
        }),
      }),
    ],
  });
}
function WA() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState({ x: -100, y: -100 }),
    [s, i] = k.useState(0),
    [o, a] = k.useState(!1),
    u = k.useRef(null),
    c = k.useRef([]);
  return (
    k.useEffect(() => {
      const d = window.matchMedia("(pointer: fine)");
      d.matches && t(!0);
      const f = (x) => {
        x.matches && t(!0);
      };
      d.addEventListener("change", f);
      const h = () => {
        (t(!0), window.removeEventListener("mousemove", h));
      };
      return (
        window.addEventListener("mousemove", h),
        () => {
          (d.removeEventListener("change", f),
            window.removeEventListener("mousemove", h));
        }
      );
    }, []),
    k.useEffect(() => {
      if (e)
        return (
          document.body.classList.add("custom-cursor-active"),
          () => {
            document.body.classList.remove("custom-cursor-active");
          }
        );
    }, [e]),
    k.useEffect(() => {
      if (!e) return;
      let d = 0;
      const f = (h) => {
        r({ x: h.clientX, y: h.clientY });
        const x = h.clientX - d;
        d = h.clientX;
        const w = Math.min(Math.max(x * 1, -22), 22);
        i(w);
        const v = h.target;
        if (v) {
          const g = !!v.closest(
            'a, button, [role="button"], input, select, textarea, .cursor-pointer, [onclick]',
          );
          a(g);
        }
        if (!u.current) return;
        const p = [
            "rgba(251, 191, 36, ",
            "rgba(245, 158, 11, ",
            "rgba(254, 240, 138, ",
            "rgba(168, 85, 247, ",
            "rgba(192, 38, 211, ",
            "rgba(255, 255, 255, ",
          ],
          m = Math.floor(Math.random() * 3) + 2;
        for (let g = 0; g < m; g++) {
          const b = p[Math.floor(Math.random() * p.length)],
            S = Math.random() > 0.45;
          c.current.push({
            x: h.clientX,
            y: h.clientY,
            vx: Math.random() * 2.2 - 1.1,
            vy: Math.random() * 2.2 - 1.1 - 0.5,
            size: Math.random() * 2.2 + 1.6,
            alpha: 1,
            decay: Math.random() * 0.016 + 0.012,
            colorBase: b,
            isStar: S,
            angle: Math.random() * Math.PI * 2,
            spin: Math.random() * 0.08 - 0.04,
          });
        }
      };
      return (
        window.addEventListener("mousemove", f),
        () => window.removeEventListener("mousemove", f)
      );
    }, [e]),
    k.useEffect(() => {
      if (!e) return;
      const d = u.current;
      if (!d) return;
      const f = d.getContext("2d");
      if (!f) return;
      const h = () => {
        ((d.width = window.innerWidth), (d.height = window.innerHeight));
      };
      (h(), window.addEventListener("resize", h));
      let x;
      const w = (y, p, m, g, b) => {
          let S = (Math.PI / 2) * 3,
            j = y,
            N = p;
          const T = Math.PI / m;
          (f.beginPath(), f.moveTo(y, p - g));
          for (let R = 0; R < m; R++)
            ((j = y + Math.cos(S) * g),
              (N = p + Math.sin(S) * g),
              f.lineTo(j, N),
              (S += T),
              (j = y + Math.cos(S) * b),
              (N = p + Math.sin(S) * b),
              f.lineTo(j, N),
              (S += T));
          (f.lineTo(y, p - g), f.closePath());
        },
        v = () => {
          f.clearRect(0, 0, d.width, d.height);
          const y = c.current;
          for (let p = y.length - 1; p >= 0; p--) {
            const m = y[p];
            if (
              ((m.x += m.vx),
              (m.y += m.vy),
              (m.alpha -= m.decay),
              (m.size -= 0.022),
              (m.angle += m.spin),
              (m.vx *= 0.98),
              (m.vy *= 0.98),
              m.alpha <= 0 || m.size <= 0)
            ) {
              y.splice(p, 1);
              continue;
            }
            (f.save(),
              (f.globalAlpha = m.alpha),
              (f.fillStyle = `${m.colorBase}${m.alpha})`),
              (f.shadowBlur = m.size * 2.5),
              (f.shadowColor = m.colorBase.replace(", ", ")")),
              m.isStar
                ? (f.translate(m.x, m.y),
                  f.rotate(m.angle),
                  w(0, 0, 4, m.size, m.size * 0.35),
                  f.fill())
                : (f.beginPath(),
                  f.arc(m.x, m.y, m.size * 0.75, 0, Math.PI * 2),
                  f.fill()),
              f.restore());
          }
          x = requestAnimationFrame(v);
        };
      return (
        (x = requestAnimationFrame(v)),
        () => {
          (window.removeEventListener("resize", h), cancelAnimationFrame(x));
        }
      );
    }, [e]),
    e
      ? l.jsxs(l.Fragment, {
          children: [
            l.jsx("style", {
              children: `
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }
      `,
            }),
            l.jsx("canvas", {
              ref: u,
              className:
                "fixed inset-0 w-full h-full pointer-events-none z-[9999]",
            }),
            l.jsx(X.div, {
              className:
                "fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-normal select-none",
              style: {
                x: n.x,
                y: n.y,
                translateX: "0%",
                translateY: "-100%",
                originX: 0,
                originY: 1,
              },
              animate: { rotate: s, scale: o ? 1.25 : 1 },
              transition: {
                type: "spring",
                damping: 28,
                stiffness: 350,
                mass: 0.06,
              },
              children: l.jsx("img", {
                src: "/golden-feather-pen.png",
                alt: "Golden Feather Quill",
                className:
                  "w-[72px] h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]",
                referrerPolicy: "no-referrer",
              }),
            }),
          ],
        })
      : null
  );
}
function HA() {
  const e = k.useRef(null),
    t = k.useRef([]),
    n = k.useRef({ x: -1e3, y: -1e3, lastX: -1e3, lastY: -1e3, vx: 0, vy: 0 });
  return (
    k.useEffect(() => {
      const r = e.current;
      if (!r) return;
      const s = r.getContext("2d");
      if (!s) return;
      const i = () => {
        ((r.width = window.innerWidth), (r.height = window.innerHeight));
      };
      (i(), window.addEventListener("resize", i));
      const o = [],
        a = 15;
      for (let y = 0; y < a; y++)
        o.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: Math.random() * 0.4 - 0.2,
          vy: 0.5 + Math.random() * 0.8,
          angle: Math.random() * Math.PI * 2,
          spin: Math.random() * 0.01 - 0.005,
          size: 18 + Math.random() * 22,
          opacity: 0.06 + Math.random() * 0.12,
          flutter: Math.random() * Math.PI * 2,
          flutterSpeed: 0.01 + Math.random() * 0.02,
          flutterRange: 0.2 + Math.random() * 0.4,
          type: Math.floor(Math.random() * 3),
          isSpawned: !1,
          life: 1,
          decay: 0,
        });
      t.current = o;
      const u = (y) => {
          const p = n.current,
            m = y.clientX,
            g = y.clientY;
          (p.lastX !== -1e3 && ((p.vx = m - p.lastX), (p.vy = g - p.lastY)),
            (p.x = m),
            (p.y = g),
            (p.lastX = m),
            (p.lastY = g));
        },
        c = (y) => {
          const p = y.clientX,
            m = y.clientY,
            g = Math.floor(Math.random() * 2) + 2;
          for (let b = 0; b < g; b++)
            t.current.push({
              x: p + (Math.random() * 30 - 15),
              y: m + (Math.random() * 30 - 15),
              vx: Math.random() * 2 - 1,
              vy: -1 - Math.random() * 1.5,
              angle: Math.random() * Math.PI * 2,
              spin: Math.random() * 0.06 - 0.03,
              size: 16 + Math.random() * 18,
              opacity: 0.2 + Math.random() * 0.2,
              flutter: Math.random() * Math.PI * 2,
              flutterSpeed: 0.03 + Math.random() * 0.04,
              flutterRange: 0.4 + Math.random() * 0.6,
              type: Math.floor(Math.random() * 3),
              isSpawned: !0,
              life: 1,
              decay: 0.005 + Math.random() * 0.008,
            });
        },
        d = (y) => {
          if (y.touches.length === 0) return;
          const p = y.touches[0],
            m = n.current,
            g = p.clientX,
            b = p.clientY;
          ((m.x = g),
            (m.y = b),
            (m.lastX = g),
            (m.lastY = b),
            (m.vx = 0),
            (m.vy = 0));
          const S = Math.floor(Math.random() * 2) + 2;
          for (let j = 0; j < S; j++)
            t.current.push({
              x: g + (Math.random() * 30 - 15),
              y: b + (Math.random() * 30 - 15),
              vx: Math.random() * 2 - 1,
              vy: -1 - Math.random() * 1.5,
              angle: Math.random() * Math.PI * 2,
              spin: Math.random() * 0.06 - 0.03,
              size: 16 + Math.random() * 18,
              opacity: 0.2 + Math.random() * 0.2,
              flutter: Math.random() * Math.PI * 2,
              flutterSpeed: 0.03 + Math.random() * 0.04,
              flutterRange: 0.4 + Math.random() * 0.6,
              type: Math.floor(Math.random() * 3),
              isSpawned: !0,
              life: 1,
              decay: 0.005 + Math.random() * 0.008,
            });
        },
        f = (y) => {
          if (y.touches.length === 0) return;
          const p = y.touches[0],
            m = n.current,
            g = p.clientX,
            b = p.clientY;
          (m.lastX !== -1e3 && ((m.vx = g - m.lastX), (m.vy = b - m.lastY)),
            (m.x = g),
            (m.y = b),
            (m.lastX = g),
            (m.lastY = b));
        },
        h = () => {
          const y = n.current;
          ((y.lastX = -1e3),
            (y.lastY = -1e3),
            (y.x = -1e3),
            (y.y = -1e3),
            (y.vx = 0),
            (y.vy = 0));
        };
      (window.addEventListener("mousemove", u),
        window.addEventListener("click", c),
        window.addEventListener("touchstart", d, { passive: !0 }),
        window.addEventListener("touchmove", f, { passive: !0 }),
        window.addEventListener("touchend", h, { passive: !0 }));
      let x;
      const w = (y, p, m, g, b, S, j) => {
          if (
            (y.save(),
            y.translate(p, m),
            y.rotate(b),
            (y.fillStyle = `rgba(255, 255, 255, ${S})`),
            (y.strokeStyle = `rgba(255, 255, 255, ${S * 1.5})`),
            j === 0)
          ) {
            (y.beginPath(),
              y.moveTo(0, -g / 2),
              y.quadraticCurveTo(g * 0.05, 0, 0, g / 2),
              (y.lineWidth = 1.2),
              y.stroke(),
              y.beginPath(),
              y.moveTo(0, -g / 2),
              y.bezierCurveTo(g * 0.35, -g * 0.25, g * 0.4, g * 0.2, 0, g / 2),
              y.fill(),
              y.beginPath(),
              y.moveTo(0, -g / 2),
              y.bezierCurveTo(
                -g * 0.35,
                -g * 0.25,
                -g * 0.4,
                g * 0.2,
                0,
                g / 2,
              ),
              y.fill(),
              (y.lineWidth = 0.5),
              y.beginPath());
            for (let N = -g * 0.3; N < g * 0.3; N += g * 0.15)
              (y.moveTo(0, N),
                y.lineTo(g * 0.2, N + g * 0.1),
                y.moveTo(0, N),
                y.lineTo(-g * 0.2, N + g * 0.1));
            y.stroke();
          } else
            j === 1
              ? (y.beginPath(),
                y.moveTo(0, -g / 2),
                y.quadraticCurveTo(g * 0.08, 0, 0, g / 2),
                (y.lineWidth = 1),
                y.stroke(),
                y.beginPath(),
                y.moveTo(0, -g / 2),
                y.bezierCurveTo(
                  g * 0.45,
                  -g * 0.1,
                  g * 0.45,
                  g * 0.3,
                  0,
                  g / 2,
                ),
                y.bezierCurveTo(
                  -g * 0.45,
                  g * 0.3,
                  -g * 0.45,
                  -g * 0.1,
                  0,
                  -g / 2,
                ),
                y.fill(),
                y.beginPath(),
                (y.lineWidth = 0.7),
                y.moveTo(0, g * 0.1),
                y.quadraticCurveTo(g * 0.28, g * 0.2, g * 0.35, g * 0.35),
                y.moveTo(0, g * 0.1),
                y.quadraticCurveTo(-g * 0.28, g * 0.2, -g * 0.35, g * 0.35),
                y.stroke())
              : (y.beginPath(),
                y.moveTo(0, -g / 2),
                y.quadraticCurveTo(g * 0.15, g * 0.05, 0, g / 2),
                (y.lineWidth = 1.4),
                y.stroke(),
                y.beginPath(),
                y.moveTo(0, -g / 2),
                y.bezierCurveTo(g * 0.3, -g * 0.3, g * 0.45, g * 0.1, 0, g / 2),
                y.bezierCurveTo(
                  -g * 0.2,
                  g * 0.2,
                  -g * 0.25,
                  -g * 0.2,
                  0,
                  -g / 2,
                ),
                y.fill());
          y.restore();
        },
        v = () => {
          s.clearRect(0, 0, r.width, r.height);
          const y = n.current;
          ((y.vx *= 0.95),
            (y.vy *= 0.95),
            t.current.forEach((p, m) => {
              p.flutter += p.flutterSpeed;
              const g = Math.sin(p.flutter) * p.flutterRange;
              ((p.x += p.vx + g * 0.3),
                (p.y += p.vy),
                (p.angle += p.spin),
                p.isSpawned
                  ? ((p.vy += 0.05),
                    (p.vy *= 0.96),
                    (p.vx *= 0.96),
                    (p.life -= p.decay))
                  : (p.vy < 0.4 && (p.vy += 0.02),
                    p.vy > 1.2 && (p.vy -= 0.02),
                    (p.vx = p.vx * 0.98 + (Math.random() * 0.02 - 0.01))));
              const b = p.x - y.x,
                S = p.y - y.y,
                j = Math.sqrt(b * b + S * S),
                N = 160;
              if (j < N) {
                const R = (N - j) / N,
                  M = Math.atan2(S, b),
                  z = Math.cos(M) * R * 2.5,
                  ae = Math.sin(M) * R * 2;
                ((p.vx += z),
                  (p.vy += ae),
                  (p.spin += (Math.random() * 0.04 - 0.02) * R),
                  (p.vx = Math.min(Math.max(p.vx, -5), 5)),
                  (p.vy = Math.min(Math.max(p.vy, -4), 4)));
              } else p.spin *= 0.98;
              p.isSpawned ||
                (p.y > r.height + p.size &&
                  ((p.y = -p.size),
                  (p.x = Math.random() * r.width),
                  (p.vx = Math.random() * 0.4 - 0.2),
                  (p.vy = 0.5 + Math.random() * 0.8)),
                p.x < -p.size
                  ? (p.x = r.width + p.size)
                  : p.x > r.width + p.size && (p.x = -p.size));
              const T = p.isSpawned ? p.opacity * p.life : p.opacity;
              T > 0.005 && w(s, p.x, p.y, p.size, p.angle, T, p.type);
            }),
            (t.current = t.current.filter(
              (p) => !p.isSpawned || p.life > 0.01,
            )),
            (x = requestAnimationFrame(v)));
        };
      return (
        (x = requestAnimationFrame(v)),
        () => {
          (window.removeEventListener("resize", i),
            window.removeEventListener("mousemove", u),
            window.removeEventListener("click", c),
            window.removeEventListener("touchstart", d),
            window.removeEventListener("touchmove", f),
            window.removeEventListener("touchend", h),
            cancelAnimationFrame(x));
        }
      );
    }, []),
    l.jsx("canvas", {
      ref: e,
      className:
        "fixed inset-0 w-full h-full pointer-events-none z-[1] select-none",
      style: { mixBlendMode: "screen" },
    })
  );
}
function GA() {
  return l.jsxs("section", {
    className:
      "relative py-24 px-6 md:px-12 bg-[#FCFAF6] border-t border-neutral-200 overflow-hidden",
    children: [
      l.jsx("div", {
        className:
          "absolute top-1/4 left-10 w-72 h-72 bg-[#0e5fa3]/5 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute bottom-1/4 right-10 w-96 h-96 bg-[#E65F1B]/5 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          l.jsxs("div", {
            className:
              "mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left",
            children: [
              l.jsxs("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3 flex items-center gap-2",
                children: [
                  l.jsx(Wo, { className: "w-3 h-3 text-[#E65F1B]" }),
                  " THE SHARED INSTINCT",
                ],
              }),
              l.jsx("h2", {
                className:
                  "font-heading text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight uppercase leading-none",
                children: "ABOUT TARANNA",
              }),
              l.jsx("div", {
                className: "h-[2px] w-12 bg-neutral-900 mt-4 md:mt-5",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
            children: [
              l.jsxs("div", {
                className: "lg:col-span-5 flex flex-col gap-6 w-full",
                children: [
                  l.jsxs(X.div, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 1, ease: "easeOut" },
                    className:
                      "relative group p-4 bg-white border border-neutral-200 shadow-xl rounded-3xl overflow-hidden",
                    children: [
                      l.jsxs("div", {
                        className:
                          "aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative",
                        children: [
                          l.jsx("img", {
                            src: "/NOV00034.JPG.jpeg",
                            alt: "Taranna Deepjyoti",
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                          }),
                          l.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none",
                          }),
                          l.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.3em] font-bold text-white uppercase bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-md",
                            children: "PORTRAIT // STUDIO AMBER",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "pt-4 pb-2 text-center",
                        children: [
                          l.jsx("p", {
                            className:
                              "font-display italic text-base text-neutral-800",
                            children:
                              "“Daring to exist completely, in public and in shadow.”",
                          }),
                          l.jsx("p", {
                            className:
                              "font-mono text-[8px] tracking-widest text-neutral-400 uppercase mt-1 font-bold",
                            children: "Kolkata, Summer 2026",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "hidden sm:grid grid-cols-2 gap-4 mt-2",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[-1.5deg]",
                        children: [
                          l.jsx("div", {
                            className:
                              "aspect-square rounded-lg overflow-hidden bg-neutral-100",
                            children: l.jsx("img", {
                              src: "/TD-382.jpg.jpeg",
                              alt: "Poise",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          l.jsx("div", {
                            className:
                              "pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold",
                            children: "Symmetrical Poise",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[2deg]",
                        children: [
                          l.jsx("div", {
                            className:
                              "aspect-square rounded-lg overflow-hidden bg-neutral-100",
                            children: l.jsx("img", {
                              src: "/Writer.jpg.jpeg",
                              alt: "Writer",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          l.jsx("div", {
                            className:
                              "pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold",
                            children: "The Writer's Gaze",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "lg:col-span-7 flex flex-col gap-8 w-full",
                children: [
                  l.jsxs(X.div, {
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 0.1 },
                    className: "flex flex-col gap-6",
                    children: [
                      l.jsx("p", {
                        className:
                          "font-display italic text-xl md:text-2xl text-neutral-800 leading-relaxed font-light",
                        children:
                          "Taranna Deepjyoti moves between four different rooms — and shows up unguarded in every one of them.",
                      }),
                      l.jsxs("div", {
                        className:
                          "font-sans text-neutral-600 space-y-6 text-sm md:text-base leading-relaxed font-light",
                        children: [
                          l.jsxs("p", {
                            children: [
                              "She's the founder of ",
                              l.jsx("strong", {
                                className: "font-semibold text-neutral-900",
                                children:
                                  "Deepjyoti India Foundation (Sampoorna)",
                              }),
                              ", building health, mental wellness, and dignity-first programs for young women and the elderly across India. She's a confessional poet, writing free verse that turns longing, loss, and the ache of distance into something physical enough to hold.",
                            ],
                          }),
                          l.jsxs("p", {
                            children: [
                              "She's a speaker and podcaster who talks about what most people are taught to swallow — ",
                              l.jsx("strong", {
                                className: "font-semibold text-neutral-900",
                                children: "shame, guilt, rejection",
                              }),
                              " — and asks people to feel their way through instead of around it. And she's a plus-size model whose work has helped a generation of men and women see their own bodies as already enough.",
                            ],
                          }),
                          l.jsx("p", {
                            className:
                              "border-l-2 border-[#E65F1B]/30 pl-5 italic font-display text-neutral-700 text-base md:text-lg",
                            children:
                              "Different mediums, same instinct: dig into a feeling before it's fully named, and turn it into something someone else can use.",
                          }),
                          l.jsx("p", {
                            children:
                              "Taranna doesn't separate the personal from the professional — her foundation, her poems, her talks, and her photographs all come from the same place, and she'd rather show up authentically than perform confidence she doesn't feel. That's the thread running through everything she builds.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(X.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 0.3 },
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#0e5fa3]/10 flex items-center justify-center text-[#0e5fa3]",
                            children: l.jsx(ba, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase",
                            children: "SAMPOORNA",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Welfare Loop",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#E65F1B]/10 flex items-center justify-center text-[#E65F1B]",
                            children: l.jsx($x, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase",
                            children: "FREE VERSE",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Confessional",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#0a8fa0]/10 flex items-center justify-center text-[#0a8fa0]",
                            children: l.jsx(Rx, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase",
                            children: "SOMATIC",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Vocal Stage",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600",
                            children: l.jsx(Wo, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-amber-600 font-bold block uppercase",
                            children: "PLUS-SIZE",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Representation",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function YA() {
  const [e, t] = k.useState({
      name: "",
      email: "",
      organization: "",
      interest: "collaboration",
      message: "",
    }),
    [n, r] = k.useState(!1),
    [s, i] = k.useState(!1),
    o = [
      { id: "collaboration", label: "Creative Collaboration", icon: Wo },
      { id: "sampoorna", label: "Sampoorna Foundation", icon: ba },
      { id: "poetry", label: "Poetry & Writing", icon: $x },
      { id: "speaking", label: "Speaking & Workshops", icon: od },
      { id: "modeling", label: "Modeling & Campaigns", icon: Vx },
      { id: "other", label: "General Inquiry", icon: OS },
    ],
    a = (c) => {
      (c.preventDefault(),
        !(!e.name || !e.email || !e.message) &&
          (r(!0),
          setTimeout(() => {
            (r(!1), i(!0));
          }, 1500)));
    },
    u = () => {
      (t({
        name: "",
        email: "",
        organization: "",
        interest: "collaboration",
        message: "",
      }),
        i(!1));
    };
  return l.jsxs("section", {
    id: "contact-collaboration",
    className:
      "relative py-24 px-6 md:px-12 bg-[#0C0C0C] text-neutral-100 border-t border-neutral-900 overflow-hidden",
    children: [
      l.jsx("div", {
        className:
          "absolute top-1/3 right-10 w-80 h-80 bg-[#0e5fa3]/10 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute bottom-10 left-10 w-96 h-96 bg-[#E65F1B]/10 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent",
      }),
      l.jsxs("div", {
        className: "max-w-7xl mx-auto relative z-10",
        children: [
          l.jsxs("div", {
            className:
              "mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left",
            children: [
              l.jsxs("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3 flex items-center gap-2",
                children: [
                  l.jsx(Wo, { className: "w-3 h-3 text-[#E65F1B]" }),
                  " FOUR ROOMS // ONE ENTRYWAY",
                ],
              }),
              l.jsx("h2", {
                className:
                  "font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none",
                children: "COLLABORATIONS & PARTNERSHIPS",
              }),
              l.jsx("p", {
                className:
                  "font-display italic text-sm md:text-base text-neutral-400 mt-4 max-w-xl",
                children:
                  "Whether for social impact, poetic projects, panel speaking, or artistic campaigns—let's create something meaningful together.",
              }),
              l.jsx("div", { className: "h-[2px] w-12 bg-neutral-700 mt-5" }),
            ],
          }),
          l.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch",
            children: [
              l.jsxs("div", {
                className: "lg:col-span-5 flex flex-col justify-between gap-10",
                children: [
                  l.jsxs("div", {
                    className: "space-y-8",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-4",
                            children: "THE CONVERSATION STARTS HERE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-neutral-400 text-sm md:text-base leading-relaxed font-light",
                            children:
                              "Taranna’s work lives in the intersection of poetry, activism, speech, and fashion. If you represent an organization, brand, publication, or have a personal creative proposal, we would love to connect.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E65F1B] shrink-0",
                                children: l.jsx(GS, { className: "w-4 h-4" }),
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5",
                                    children: "DIRECT EMAIL",
                                  }),
                                  l.jsx("a", {
                                    href: "mailto:hello@withlovetaranna.me",
                                    className:
                                      "font-sans text-sm md:text-base text-neutral-200 hover:text-[#0e5fa3] transition-colors duration-200",
                                    children: "hello@withlovetaranna.me",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#0e5fa3] shrink-0",
                                children: l.jsx(YS, { className: "w-4 h-4" }),
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5",
                                    children: "LOCATION",
                                  }),
                                  l.jsx("span", {
                                    className:
                                      "font-sans text-sm md:text-base text-neutral-200",
                                    children: "Mumbai, India",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "pt-8 border-t border-neutral-900",
                    children: [
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-4",
                        children: "CHANNELS OF CONNECTION",
                      }),
                      l.jsxs("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          l.jsxs("a", {
                            href: "https://www.instagram.com/withlove_taranna/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold",
                            children: [
                              l.jsx(Mu, {
                                className: "w-3.5 h-3.5 text-[#E65F1B]",
                              }),
                              "INSTAGRAM",
                            ],
                          }),
                          l.jsxs("a", {
                            href: "https://www.linkedin.com/in/trulytarana/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold",
                            children: [
                              l.jsx(HS, {
                                className: "w-3.5 h-3.5 text-[#0e5fa3]",
                              }),
                              "LINKEDIN",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "lg:col-span-7",
                children: l.jsx("div", {
                  className:
                    "bg-[#121110] border border-neutral-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",
                  children: l.jsx(Vr, {
                    mode: "wait",
                    children: s
                      ? l.jsxs(
                          X.div,
                          {
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.4 },
                            className:
                              "py-12 text-center flex flex-col items-center justify-center gap-6",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-16 h-16 rounded-2xl bg-[#0e5fa3]/10 border border-[#0e5fa3]/20 flex items-center justify-center text-[#E65F1B] animate-pulse",
                                children: l.jsx(FS, { className: "w-8 h-8" }),
                              }),
                              l.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  l.jsx("h4", {
                                    className:
                                      "font-heading text-xl font-bold uppercase tracking-tight text-white",
                                    children: "MESSAGE RECEIVED SUCCESSFUL",
                                  }),
                                  l.jsxs("p", {
                                    className:
                                      "font-sans text-neutral-400 text-sm max-w-md mx-auto leading-relaxed font-light",
                                    children: [
                                      "Thank you for reaching out, ",
                                      l.jsx("strong", {
                                        className: "text-white font-semibold",
                                        children: e.name,
                                      }),
                                      ". Your message is safely logged. Taranna will respond in the same direct, authentic spirit.",
                                    ],
                                  }),
                                ],
                              }),
                              l.jsx("button", {
                                type: "button",
                                onClick: u,
                                className:
                                  "font-mono text-[10px] tracking-widest text-[#0e5fa3] hover:text-[#0e5fa3]/80 font-black uppercase mt-4 underline underline-offset-4",
                                children: "SEND ANOTHER INQUIRY",
                              }),
                            ],
                          },
                          "success-message",
                        )
                      : l.jsxs(
                          X.form,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.4 },
                            onSubmit: a,
                            className: "space-y-6",
                            children: [
                              l.jsxs("div", {
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase mb-3",
                                    children: "SELECT AREA OF INTEREST",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                    children: o.map((c) => {
                                      const d = c.icon,
                                        f = e.interest === c.id;
                                      return l.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () =>
                                            t({ ...e, interest: c.id }),
                                          className: `flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-300 ${f ? "bg-[#0e5fa3]/10 border-[#0e5fa3] text-white" : "bg-neutral-950/40 border-neutral-800/60 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"}`,
                                          children: [
                                            l.jsx(d, {
                                              className: `w-3.5 h-3.5 ${f ? "text-[#E65F1B]" : "text-neutral-500"}`,
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "font-mono text-[10px] uppercase font-bold leading-none tracking-tight",
                                              children: c.label,
                                            }),
                                          ],
                                        },
                                        c.id,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                  l.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      l.jsxs("label", {
                                        className:
                                          "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                        children: [
                                          "YOUR NAME ",
                                          l.jsx("span", {
                                            className: "text-[#E65F1B]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      l.jsx("input", {
                                        type: "text",
                                        required: !0,
                                        value: e.name,
                                        onChange: (c) =>
                                          t({ ...e, name: c.target.value }),
                                        placeholder: "Taranna Deepjyoti",
                                        className:
                                          "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      l.jsxs("label", {
                                        className:
                                          "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                        children: [
                                          "EMAIL ADDRESS ",
                                          l.jsx("span", {
                                            className: "text-[#E65F1B]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      l.jsx("input", {
                                        type: "email",
                                        required: !0,
                                        value: e.email,
                                        onChange: (c) =>
                                          t({ ...e, email: c.target.value }),
                                        placeholder: "name@example.com",
                                        className:
                                          "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                    children: [
                                      "ORGANIZATION / COMPANY ",
                                      l.jsx("span", {
                                        className: "text-neutral-600",
                                        children: "(OPTIONAL)",
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    value: e.organization,
                                    onChange: (c) =>
                                      t({ ...e, organization: c.target.value }),
                                    placeholder:
                                      "Deepjyoti India Foundation / Self",
                                    className:
                                      "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                    children: [
                                      "YOUR MESSAGE ",
                                      l.jsx("span", {
                                        className: "text-[#E65F1B]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  l.jsx("textarea", {
                                    required: !0,
                                    rows: 4,
                                    value: e.message,
                                    onChange: (c) =>
                                      t({ ...e, message: c.target.value }),
                                    placeholder:
                                      "Describe your creative vision, proposal, or inquiry here...",
                                    className:
                                      "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans resize-none leading-relaxed",
                                  }),
                                ],
                              }),
                              l.jsx("button", {
                                type: "submit",
                                disabled: n,
                                className:
                                  "w-full bg-neutral-100 hover:bg-white text-neutral-950 hover:text-black font-mono text-xs font-black tracking-[0.2em] uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]",
                                children: n
                                  ? l.jsxs(l.Fragment, {
                                      children: [
                                        l.jsx("div", {
                                          className:
                                            "w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin",
                                        }),
                                        "TRANSMITTING...",
                                      ],
                                    })
                                  : l.jsxs(l.Fragment, {
                                      children: [
                                        "SEND MESSAGE",
                                        l.jsx(e2, {
                                          className:
                                            "w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          },
                          "contact-form",
                        ),
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function KA() {
  const [e, t] = k.useState("home"),
    [n, r] = k.useState(!0);
  return (
    k.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    l.jsxs("div", {
      className:
        "min-h-screen bg-[#FCFAF6] text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans antialiased relative md:cursor-none",
      children: [
        l.jsx(WA, {}),
        l.jsx(HA, {}),
        l.jsx(Vr, { children: n && l.jsx(BA, { onComplete: () => r(!1) }) }),
        l.jsx("div", {
          className:
            "absolute top-0 bottom-0 left-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none",
        }),
        l.jsx("div", {
          className:
            "absolute top-0 bottom-0 right-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none",
        }),
        l.jsx(i2, { currentView: e, setCurrentView: t }),
        e === "home"
          ? l.jsx(l.Fragment, {
              children: l.jsxs("main", {
                className: "w-full",
                children: [
                  l.jsx(cP, {}),
                  l.jsxs("section", {
                    className:
                      "py-12 px-6 text-center flex flex-col items-center",
                    children: [
                      l.jsx(X.span, {
                        initial: { opacity: 0, y: 15 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className:
                          "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3",
                        children: "Taranna Deepjyoti",
                      }),
                      l.jsx(X.p, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 1, delay: 0.5 },
                        className:
                          "font-display italic text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed font-light",
                        children:
                          "Four different rooms. One person walking through all of them, unguarded.",
                      }),
                    ],
                  }),
                  l.jsx("section", {
                    className:
                      "py-20 md:py-28 px-6 flex flex-col items-center justify-center text-center relative pointer-events-auto bg-[#0C0C0C] border-y border-neutral-900",
                    children: l.jsxs(X.div, {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, margin: "-100px" },
                      transition: { duration: 1.2, ease: "easeOut" },
                      className:
                        "max-w-2xl mx-auto flex flex-col items-center gap-5",
                      children: [
                        l.jsx("p", {
                          className:
                            "font-display italic text-2xl md:text-4xl text-[#E65F1B] leading-relaxed tracking-tight select-all",
                          children:
                            "“Awakening what is lost, nurturing what is found”",
                        }),
                        l.jsxs("div", {
                          className: "flex items-center gap-4 mt-2",
                          children: [
                            l.jsx("span", {
                              className: "w-6 h-[1.5px] bg-[#0e5fa3]/20",
                            }),
                            l.jsx("span", {
                              className:
                                "font-mono text-[10px] tracking-[0.3em] uppercase text-[#0e5fa3] font-black",
                              children: "by Tarrana",
                            }),
                            l.jsx("span", {
                              className: "w-6 h-[1.5px] bg-[#0e5fa3]/20",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx(hP, { onNavigate: (s) => t(s) }),
                  l.jsx(GA, {}),
                  l.jsx(YA, {}),
                ],
              }),
            })
          : e === "gallery"
            ? l.jsx(zA, { onBack: () => t("home") })
            : l.jsx(pP, {
                view: e,
                onBack: () => t("home"),
                onNavigate: (s) => t(s),
              }),
      ],
    })
  );
}
Mx(document.getElementById("root")).render(
  l.jsx(k.StrictMode, { children: l.jsx(KA, {}) }),
);
