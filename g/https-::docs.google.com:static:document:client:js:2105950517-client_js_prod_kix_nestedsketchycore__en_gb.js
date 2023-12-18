hM(CWa);
var C0e = "#FFFFFF00",
  D0e = "%s already belongs to %s",
  E0e = "%s is not an allowed shape property for a MediaClip.",
  F0e = "100",
  XN = "11",
  YN = "24",
  G0e = ":document",
  H0e = "Document does not contain MediaClip with ID %s",
  I0e = "Illegal id: %s",
  J0e = "Invalid nesting level: %s",
  K0e = "Not a shape: %s",
  L0e = "OBJECT_WITH_CAPTION_TEXT",
  M0e = "ONE_COLUMN_TEXT",
  N0e = "PICTURE_WITH_CAPTION_TEXT",
  O0e = "SECTION_HEADER",
  P0e = "SECTION_TITLE_AND_DESCRIPTION",
  Q0e = "SPLIT_TITLE_AND_BODY",
  R0e = "TITLE_AND_BODY",
  S0e = "TITLE_AND_TWO_COLUMNS",
  T0e = "TWO_OBJECTS_WITH_TEXT",
  U0e = "Text index should be less than INT_MAX",
  V0e = "The path fill cannot be null",
  W0e = "Transform %s is not valid for object %s",
  X0e = "Unknown color value type ",
  Y0e = "VERTICAL_TITLE_AND_VERTICAL_TEXT",
  Z0e = "bodyPlaceholderListEntity",
  $0e = "entityId cannot be null.",
  a1e = "index %s is out of bounds",
  b1e = "kix-ut",
  c1e = "properties",
  d1e = "remove properties cannot be null",
  e1e = "shapeIds can't be empty",
  f1e = "sketchy-addAnimation",
  g1e = "sketchy-addEntity",
  h1e = "sketchy-addListEntity",
  i1e = "sketchy-addMediaClip",
  j1e = "sketchy-addPage",
  k1e = "sketchy-animationProperies",
  l1e = "sketchy-background",
  m1e = "sketchy-changeShape",
  n1e = "sketchy-convert_shape_text_props",
  ZN = "sketchy-deleteColumn",
  o1e = "sketchy-deleteEntity",
  p1e = "sketchy-deleteListEntity",
  $N = "sketchy-deleteRow",
  q1e = "sketchy-deleteText",
  r1e = "sketchy-documentProperties",
  s1e = "sketchy-documentSize",
  t1e = "sketchy-eispbsf",
  u1e = "sketchy-esismr",
  v1e = "sketchy-evt",
  w1e = "sketchy-group",
  aO = "sketchy-insertColumn",
  bO = "sketchy-insertRow",
  x1e = "sketchy-insertTable",
  y1e = "sketchy-insertText",
  z1e = "sketchy-kixInSketchy",
  A1e = "sketchy-live-pointer-coordinates",
  B1e = "sketchy-mediaClipProperties",
  C1e = "sketchy-mergeCellRange",
  D1e = "sketchy-moveAnimation",
  E1e = "sketchy-movePage",
  F1e = "sketchy-pageProperties",
  G1e = "sketchy-pathProperties",
  H1e = "sketchy-removeAnimation",
  I1e = "sketchy-removeMediaClip",
  cO = "sketchy-removePage",
  J1e = "sketchy-selection",
  K1e = "sketchy-selection-animation",
  L1e = "sketchy-selection-animation-empty",
  M1e = "sketchy-selection-animation-impl",
  N1e = "sketchy-selection-currentPage",
  O1e = "sketchy-selection-currentPage-empty",
  P1e = "sketchy-selection-currentPage-impl",
  Q1e = "sketchy-selection-live-pointer-coordinates-empty",
  R1e = "sketchy-selection-live-pointer-coordinates-impl",
  S1e = "sketchy-selection-mediaClip",
  T1e = "sketchy-selection-mediaClip-empty",
  U1e = "sketchy-selection-mediaClip-impl",
  V1e = "sketchy-selection-page",
  W1e = "sketchy-selection-page-empty",
  X1e = "sketchy-selection-page-impl",
  Y1e = "sketchy-selection-pageCursor",
  Z1e = "sketchy-selection-pageCursor-empty",
  $1e = "sketchy-selection-pageCursor-impl",
  a2e = "sketchy-selection-pathPoint",
  b2e = "sketchy-selection-pathPoint-empty",
  c2e = "sketchy-selection-pathPoint-impl",
  d2e = "sketchy-selection-playhead",
  e2e = "sketchy-selection-playhead-empty",
  f2e = "sketchy-selection-shape",
  g2e = "sketchy-selection-shape-empty",
  h2e = "sketchy-selection-shape-impl",
  i2e = "sketchy-selection-tableBorder",
  j2e = "sketchy-selection-tableBorder-empty",
  k2e = "sketchy-selection-tableBorder-impl",
  l2e = "sketchy-selection-tableCell",
  m2e = "sketchy-selection-tableCell-empty",
  n2e = "sketchy-selection-tableCell-impl",
  o2e = "sketchy-selection-text",
  p2e = "sketchy-selection-text-empty",
  q2e = "sketchy-selection-text-impl",
  r2e = "sketchy-selection-unknown",
  s2e = "sketchy-shapeProperties",
  t2e = "sketchy-styleText",
  u2e = "sketchy-tetherEntity",
  v2e = "sketchy-transform",
  w2e = "sketchy-transition",
  x2e = "sketchy-ungroup",
  y2e = "sketchy-unifiedText",
  z2e = "sketchy-unmergeCellRange",
  A2e = "sketchy-updateAltText",
  B2e = "sketchy-updateColumnWidths",
  C2e = "sketchy-updateEntity",
  D2e = "sketchy-updateListEntity",
  E2e = "sketchy-updateRowHeights",
  F2e = "sketchy-updateTableBorderStyles",
  G2e = "sketchy-updateTableCellProperties",
  H2e = "sketchy-zOrder",
  I2e = "targets cannot be null";
function dO(a, c, d, e) {
  Ou(
    a !== zh,
    "Creating a EmojiVotingEntity requires voting state to be specified separately."
  );
  return new ZXc(a, c, d, !0 === e);
}
function J2e(a, c, d) {
  this.ga = this.aa = this.ea = 0;
  if (0 > a) throw Ep("tc`" + a).Ga;
  if (0 > c) throw Ep("uc`" + c).Ga;
  this.ea = a;
  this.aa = c;
  this.ga = d;
}
G(J2e, H);
J2e.prototype.Za = function (a) {
  var c;
  a instanceof J2e
    ? (c = I(this, a)
        ? !0
        : this && a
        ? this.ea == a.ea && this.aa == a.aa && this.ga == a.ga
        : !1)
    : (c = !1);
  return c;
};
J2e.prototype.toString = function () {
  return this.ea + "," + this.aa + "," + this.ga;
};
function eO(a) {
  return 0 == a.ga;
}
function K2e(a, c) {
  return a.aa <= c.aa && a.ha >= c.ha && a.ea <= c.ea && a.ga >= c.ga;
}
function L2e(a, c) {
  for (var d = [], e = a.aa; e <= a.ha; e = (e + 1) | 0)
    for (var f = a.ea; f <= a.ga; f = (f + 1) | 0) {
      if (f != a.ga && ((e > a.aa && e < a.ha) || !c)) {
        var g = new J2e(e, f, 0);
        d.push(g);
      }
      e != a.ha &&
        ((f > a.ea && f < a.ga) || !c) &&
        ((g = new J2e(e, f, 1)), d.push(g));
    }
  return d;
}
function M2e() {
  return function (a) {
    return Cv(a);
  };
}
function N2e(a) {
  var c = new kRc();
  c.aa = a.aa.clone(M2e());
  return c;
}
function O2e(a, c) {
  c.aa = {};
  for (var d in a.aa)
    Mx(
      c.aa,
      d,
      a.aa[d].clone(function (e) {
        return e.clone();
      })
    );
  c.ga = Cv(a.ga);
}
function P2e(a) {
  a = a.aa.Dda();
  return new f3c(a);
}
function Q2e(a) {
  return v1c(a);
}
function R2e(a) {
  return Cv(a);
}
function fO(a, c) {
  if (a.bcb === fM) a.bcb = c;
  else throw Error("Jr");
}
JAe.prototype.V9 = F(899, function (a) {
  return KAe(
    this,
    a,
    function (c, d) {
      return Math.min(c, d.min);
    },
    Number.MAX_VALUE
  );
});
JAe.prototype.U9 = F(898, function (a) {
  return KAe(
    this,
    a,
    function (c, d) {
      return Math.max(c, d.max);
    },
    Number.MIN_VALUE
  );
});
Zid.prototype.Wxa = F(457, u());
cjd.prototype.Wxa = F(456, function (a) {
  a.aa = this.aa.clone(null);
});
$id.prototype.nPa = F(455, u());
Rjd.prototype.nPa = F(454, function (a) {
  a.aa = Cv(this.aa);
  a.ga = this.ga;
  a.ea = this.ea;
});
b3c.prototype.Dda = F(453, function () {
  var a = this,
    c = new b3c(this.ea);
  c.aa = this.aa.clone(function (d) {
    return a.ea.T1(d);
  });
  return c;
});
jZc.prototype.Cda = F(429, function (a) {
  var c;
  ((c = this.aa), c()).Cda(a);
});
UI.prototype.Cda = F(428, function (a) {
  var c = this.Oa,
    d = new fGb(null);
  d.ea = c.ea;
  d.aa = c.aa;
  a.Oa = d;
  a.Ea = this.Ea.clone();
  a.ga = this.ga.clone();
  c = this.ea;
  d = a.ea;
  d.la = c.la.clone();
  var e = c.aa,
    f = new i1c(e.ga.clone());
  f.aa = {};
  for (var g in e.aa) {
    var h = v1c(e.aa[g]);
    fw(f.aa, g, h);
  }
  e.ea && ((f.ea = vpb()), (g = Vob(e.ea.aa)), Fv.prototype.Daa.call(f.ea, g));
  d.aa = f;
  d.ea = {};
  for (var l in c.ea) (g = c.ea[l].clone()), fw(d.ea, l, g);
  d.ha = lw(c.ha);
  d.ga = {};
  for (var m in c.ga) (l = c.ga[m].ha()), fw(d.ga, m, l);
  m = this.la;
  l = a.la;
  m.aa
    ? (l.aa || (l.aa = new B1c(l.ga, l.na, l.ea, l.ia, l.ma, l.ha, l.la)),
      O2e(m.aa, l.aa))
    : (l.aa = null);
  m = this.aa;
  l = m.ga.clone();
  l = new T1c(m.ma, l, null, null);
  for (var n in m.aa) (c = m.aa[n].Dda()), fw(l.aa, n, c);
  for (var q in m.la) (n = P2e(m.la[q])), fw(l.la, q, n);
  for (var r in m.ea) (q = m.ea[r].clone(Q2e)), fw(l.ea, r, q);
  for (var v in m.ia) fw(l.ia, v, m.ia[v]);
  for (var w in m.ha) (r = m.ha[w].clone(R2e)), fw(l.ha, w, r);
  a.aa = l;
  w = this.ha;
  r = new S1c();
  for (var y in w.aa)
    (v = r.aa),
      (q = y),
      (n = w.aa[y]),
      (m = new Z2c()),
      (m.aa = N2e(n.aa)),
      (m.ia = N2e(n.ia)),
      (m.ha = N2e(n.ha)),
      (m.ea = lw(n.ea)),
      (m.la = lw(n.la)),
      (m.ga = Cv(n.ga)),
      fw(v, q, m);
  for (var A in w.ea) fw(r.ea, A, w.ea[A]);
  a.ha = r;
  a.na = this.na ? P2e(this.na) : null;
  a.ma = this.ma ? P2e(this.ma) : null;
  this.ia.kDa(a.ia);
  this.Ca.nPa(a.Ca);
  this.Ma.Wxa(a.Ma);
  a.ab = this.ab;
  a.Ra = this.Ra;
  a.va = this.va ? this.va.clone() : null;
  a.qa = this.qa ? this.qa.clone() : null;
  a.oa = this.oa ? this.oa.clone() : null;
  a.Ya = this.Ya;
  a.Da = this.Da;
});
bZc.prototype.kDa = F(416, function (a) {
  if (!(a instanceof bZc)) throw no("Yj").Ga;
  var c = [],
    d = this.aa;
  for (var e = 0; e < d.length; e++) {
    var f = d[e].clone(null);
    c.push(f);
  }
  a.aa = c;
  c = this.ea;
  d = $Yc();
  d.ea = c.ea;
  d.aa = c.aa;
  a.ea = d;
});
ajd.prototype.kDa = F(415, function (a) {
  if (!(a instanceof ajd)) throw no("nm").Ga;
});
mH.prototype.eS = F(387, function () {
  return this.clone(null);
});
QYc.prototype.eS = F(386, function () {
  return this.clone(null);
});
mH.prototype.XV = F(385, function (a, c, d) {
  RRc(this, a, !1);
  URc(this, c, !1);
  this.ga[a][c] = d;
});
mH.prototype.wda = F(384, function (a) {
  URc(this, a, !1);
  var c = this.ga;
  for (var d = 0; d < c.length; d++) Sv(c[d], a);
});
mH.prototype.yda = F(383, function (a, c) {
  URc(this, a, !0);
  var d = this.ga;
  for (var e = 0; e < d.length; e++) d[e].splice(a, 0, c());
});
C0b.prototype.ha = F(128, function () {
  var a = new C0b(),
    c = this.Jc();
  for (var d = 0; d < c.length; d++) {
    var e = c[d],
      f = FD(this, e),
      g = A0b();
    y0b(g, f.aa, dpb(f.ha), f.ea, f.ga);
    o0b(a, e, g);
  }
  return a;
});
hD.prototype.Sl = F(127, x(vh));
Uxd.prototype.Sl = F(126, function () {
  return this.aa.aa.aa;
});
Pxd.prototype.Sl = F(125, function () {
  return this.aa.aa.aa;
});
xGd.prototype.Sl = F(124, function () {
  return this.na.aa.aa;
});
FDb.prototype.WW = F(108, function (a) {
  if (a.Jb()) return this;
  if (this.Jb()) return a;
  var c = a.min();
  a = a.max();
  c = GDb(c, this.ea);
  var d = this.aa;
  a = 0 <= W$a(a, d) ? a : d;
  return new FDb(c, a);
});
JDb.prototype.WW = F(107, In());
hyb.prototype.Zo = F(96, function () {
  return $u(this.Hu((bz(), pyb)));
});
dac.prototype.Zo = F(95, function () {
  return qr(this, 1);
});
EHd.prototype.Zo = F(94, x(vh));
sL.prototype.Zo = F(93, function () {
  return this.Ec(yd) || "";
});
function gO(a, c) {
  c = Math.pow(10, c);
  return sx(a * c) / c;
}
function S2e(a, c) {
  a.aa.push(c);
  return a;
}
function T2e(a, c) {
  a.aa.push(c);
  return a;
}
function hO(a, c, d) {
  return a.put("" + c, d);
}
function U2e(a, c) {
  var d = [];
  for (var e = 0; e < c.length; e++) d.push(a.tb(c[e]));
  return d;
}
var V2e = [3, 5, 7],
  W2e = [0, 1, 2];
function X2e(a, c) {
  var d = (a.aa - c.aa) | 0;
  return 0 != d ? d : (a.Sl() - c.Sl()) | 0;
}
function Y2e(a, c) {
  var d = a.ha,
    e = a.ga;
  a.ha = c.ha * d + c.ea * e;
  a.ga = c.ga * d + c.aa * e;
  d = a.ea;
  e = a.aa;
  a.ea = c.ha * d + c.ea * e;
  a.aa = c.ga * d + c.aa * e;
  d = a.ia;
  e = a.la;
  a.ia = c.ha * d + c.ea * e + c.ia;
  a.la = c.ga * d + c.aa * e + c.la;
  return a;
}
function Z2e() {}
G(Z2e, H);
Z2e.prototype.Jb = function () {
  return cv(this.ga) && kw(this.aa) && (!this.ea || kw(this.ea)) && kw(this.ha);
};
function $2e(a, c, d) {
  var e = new Z2e();
  e.ga = a;
  e.aa = c;
  e.ea = d;
  e.ha = {};
  return e;
}
function a3e(a, c) {
  Ru(
    K2e(QRc(a), c),
    "The table range extends outside the bounds of this table: %s",
    c.toString()
  );
}
function b3e(a) {
  return kv(a) ? Lv() : a.slice();
}
function c3e(a) {
  if (!a) return 0;
  for (var c = a.length, d = 1, e = 0; e < c; e = (e + 1) | 0)
    d = (Math.imul(31, d) + (null != a[e] ? a[e] : 0)) | 0;
  return d;
}
function d3e(a) {
  a: for (var c = 0; c < a.length; c = (c + 1) | 0)
    if (null == a[c] || jv(a[c]) !== xk) break a;
  return a;
}
function e3e(a, c) {
  a %= c;
  return 0 > a * c ? a + c : a;
}
function f3e(a) {
  for (var c = [], d = 0; d < a.length; d = (d + 1) | 0) c.push(a[d]);
  return c;
}
function g3e(a, c, d, e, f, g) {
  d = "" + d;
  f = "" + f;
  var h = {};
  fw(h, "" + a, c);
  fw(h, d, e);
  fw(h, f, g);
  return h;
}
function h3e(a, c) {
  yz();
  a.length > c && (a = K(ep(a, 0, (c - 1) | 0)) + "\u2026");
  return a;
}
function i3e(a, c) {
  var d = {};
  a = ew(a);
  for (var e = 0, f = a.length; e < f; e = (e + 1) | 0) {
    var g = a[e];
    g in c && (d[g] = !0);
  }
  return d;
}
function j3e(a, c) {
  var d = {};
  d[a] = !0;
  d[c] = !0;
  return d;
}
function k3e(a, c, d) {
  if (iBb(a)) return (a = pBb(a)), (a = jBb(a)), ep(a, c, d);
  throw no("$a`" + K(a)).Ga;
}
function l3e(a) {
  gA();
  return k3e(a, 0, 7);
}
function m3e(a, c) {
  ADb();
  zDb.contains(c) || ((a += (c / 1e9) | 0), (c = c % 1e9 | 0));
  0 < a && 0 > c && ((c = (c + 1e9) | 0), a--);
  0 > a && 0 < c && ((c = (c - 1e9) | 0), a++);
  return new vDb(a, c);
}
function n3e(a) {
  ADb();
  return m3e(Math.floor(a / 1e3), Zo((a % 1e3) * 1e6));
}
function o3e(a, c) {
  CEb();
  return m3e(c.getSeconds() - a.getSeconds(), (c.aa - a.aa) | 0);
}
function p3e(a) {
  CEb();
  return new tDb(Math.floor(a / 1e3), Zo((a % 1e3) * 1e6));
}
function q3e(a, c) {
  this.aa = a;
  this.ea = c;
}
G(q3e, H);
function r3e(a, c) {
  a *= c;
  return new q3e(a + c / 2, a + c);
}
function s3e(a, c) {
  var d = new RPb(null),
    e = r3e(a, 36);
  c = c ? V2e : W2e;
  d.aa = c[a % c.length | 0];
  d.ga = e.ea;
  d.ha = e.aa;
  return d;
}
function t3e() {
  return new buc(null);
}
function u3e(a, c) {
  for (var d = 0; d < a.length; d = (d + 1) | 0)
    if ((Ou(null != a[d], "properties to remove cannot be null"), a[d] in c))
      return !1;
  return !0;
}
function v3e(a, c, d, e, f) {
  c = !0 === f ? c : ev(c);
  d = !0 === f ? d : a(d);
  a = c;
  var g = d;
  Ou(u3e(a, g), "remove and properties must be disjoint");
  if (e) {
    Ou(u3e(a, e), "remove and queries must be disjoint");
    a: {
      for (h in g)
        if (h in e) {
          var h = !1;
          break a;
        }
      h = !0;
    }
    Ou(h, "properties and queries must be disjoint");
  }
  h = null;
  if (e) {
    h = {};
    f = !0 !== f;
    for (var l in e)
      (a = sp(l)),
        (g = e[a]),
        g.aa === Ml
          ? (f || ((d = lw(d)), (f = !0)), (g = g.hf()), gw(d, a, g))
          : gw(h, a, e[a]);
  }
  return $2e(c, d, h);
}
function w3e(a) {
  this.ea = a;
}
G(w3e, H);
w3e.prototype.aa = function (a, c) {
  var d;
  return (d = this.ea), d(a, c);
};
var x3e = { horizontal: !0, vertical: !0 };
function y3e() {}
var z3e;
function A3e() {
  A3e = u();
  z3e = mx(
    lx(
      lx(
        lx(
          lx(
            lx(
              lx(
                lx(
                  lx(
                    lx(lx(kx((Bv(), Av)), L(0), Gp(0, y3e)), L(1), Gp(1, y3e)),
                    L(2),
                    Gp(2, y3e)
                  ),
                  L(3),
                  Gp(3, y3e)
                ),
                L(4),
                Gp(4, y3e)
              ),
              L(5),
              Gp(5, y3e)
            ),
            L(6),
            Gp(6, y3e)
          ),
          L(7),
          Gp(7, y3e)
        ),
        L(8),
        Gp(8, y3e)
      ),
      L(9),
      Gp(9, y3e)
    )
  );
}
function B3e(a) {
  A3e();
  return Ip(Xu(Gp(Ip(z3e.Oe(L(a))), y3e), "Invalid BrushType index."));
}
var C3e;
function D3e(a) {
  return 1 == a.ea && 0 == a.wl();
}
var E3e;
function F3e(a, c, d) {
  G3e();
  this.ea = 0;
  this.ga = a;
  this.aa = Wu(c);
  this.ea = d;
}
G(F3e, H);
F3e.prototype.wl = x(fi);
F3e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof F3e
    ? 0 == wo(a.ea, this.ea) && 0 == wo(a.ga, this.ga) && gv(this.aa, a.aa)
    : !1;
};
F3e.prototype.Ac = function () {
  return Qp([this.ga, L(c3e(this.aa)), this.ea]);
};
function G3e() {
  G3e = u();
  E3e = new F3e(0, Rnb(Qnb()), 1);
}
function H3e(a, c, d, e, f, g, h, l) {
  I3e();
  this.ma = Wu(a);
  this.la = Wu(c);
  this.ea = Wu(d);
  this.na = Wu(e);
  this.aa = f;
  this.ga = g;
  this.ha = h;
  this.ia = l;
  Ou(
    this.ea.aa.length == this.na.aa.length &&
      (!this.aa || this.ea.aa.length == this.aa.aa.length) &&
      (!this.ga || this.ea.aa.length == this.ga.aa.length) &&
      (!this.ha || this.ea.aa.length == this.ha.aa.length) &&
      (!this.ia || this.ea.aa.length == this.ia.aa.length),
    "Delta properties of xStrokeSpace, yStrokeSpace, opacityShift and colorShift{1|2|3} must have the same length."
  );
  Ou(
    0 == (a.aa.length % 3 | 0),
    "The Triangle Index properties length must be a multiple of three."
  );
  Ou(
    D3e(this.ma),
    "The Triangle Index must have a scale of 1 and offset of 0."
  );
  Ou(D3e(this.la), "The Outline Index must have a scale of 1 and offset of 0.");
}
G(H3e, H);
H3e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof H3e
    ? this.ma.Za(a.ma) &&
      this.la.Za(a.la) &&
      this.ea.Za(a.ea) &&
      this.na.Za(a.na) &&
      Ap(this.aa, a.aa) &&
      Ap(this.ga, a.ga) &&
      Ap(this.ha, a.ha) &&
      Ap(this.ia, a.ia)
    : !1;
};
H3e.prototype.Ac = function () {
  return Qp([
    this.ma,
    this.la,
    this.ea,
    this.na,
    this.aa,
    this.ga,
    this.ha,
    this.ia,
  ]);
};
function I3e() {
  I3e = u();
  C3e = new H3e((G3e(), E3e), E3e, E3e, E3e, null, null, null, null);
}
function J3e(a, c, d, e, f, g) {
  K3e();
  this.aa = Wu(a);
  this.la = Wu(c);
  this.ia = Wu(d);
  this.ga = e;
  this.ha = f;
  this.ea = g;
  Ou(
    this.aa.aa.length == this.la.aa.length &&
      this.aa.aa.length == this.ia.aa.length &&
      (!this.ga || this.aa.aa.length == this.ga.aa.length) &&
      (!this.ha || this.aa.aa.length == this.ha.aa.length) &&
      (!this.ea || this.aa.aa.length == this.ea.aa.length),
    "Delta properties of all inputs must have the same length."
  );
}
G(J3e, H);
J3e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof J3e
    ? this.aa.Za(a.aa) &&
      this.la.Za(a.la) &&
      this.ia.Za(a.ia) &&
      Ap(this.ga, a.ga) &&
      Ap(this.ha, a.ha) &&
      Ap(this.ea, a.ea)
    : !1;
};
J3e.prototype.Ac = function () {
  return Qp([this.aa, this.la, this.ia, this.ga, this.ha, this.ea]);
};
function K3e() {
  K3e = u();
  new J3e((G3e(), E3e), E3e, E3e, null, null, null);
}
function L3e() {
  this.ha = 0;
}
G(L3e, H);
L3e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof L3e
    ? this.ha == a.ha &&
      Ap(this.aa, a.aa) &&
      Ap(this.ga, a.ga) &&
      I(this.ea, a.ea)
    : !1;
};
L3e.prototype.Ac = function () {
  return Qp([this.aa, this.ga, Gp(this.ea, y3e), L(this.ha)]);
};
function M3e(a, c, d, e) {
  var f = new L3e();
  f.aa = a;
  f.ga = c;
  f.ea = d;
  f.ha = e;
  a &&
    (Ou(
      3 === f.ea || 4 === f.ea ? !!f.aa.aa : !f.aa.aa,
      "Opacity Shift must be specified for BALLPOINT and TINTED BALLPOINT, but no other brush types."
    ),
    Ou(
      !f.aa.ga && !f.aa.ha && !f.aa.ia,
      "None of the default brush types support Color Shift."
    ));
  return f;
}
function N3e() {
  N3e = u();
  M3e((I3e(), C3e), null, 1, 0);
}
function O3e(a) {
  P3e();
  this.aa = a;
}
G(O3e, H);
function P3e() {
  P3e = u();
  new O3e(Ztb(ap([], np, rp, 1)));
}
function Q3e(a) {
  R3e();
  this.aa = a;
}
G(Q3e, H);
function R3e() {
  R3e = u();
  new Q3e(Ztb(ap([], np, rp, 1)));
}
function S3e(a) {
  var c = [];
  c.push(a.wl());
  c.push(jub(a.aa));
  c.push(a.ea);
  return c;
}
function T3e(a) {
  var c = $v(a, 0);
  var d = a[1];
  for (var e = Qnb(), f = 0; f < d.length; f = (f + 1) | 0) fv(e, d[f]);
  d = Rnb(e);
  return new F3e(c, d, $v(a, 2));
}
function U3e(a) {
  for (
    var c = 1.7976931348623157e308,
      d = 1.7976931348623157e308,
      e = -1.7976931348623157e308,
      f = -1.7976931348623157e308,
      g = 0,
      h = a.length;
    g < h;
    g = (g + 2) | 0
  ) {
    var l = a[g];
    null == l && (l = NaN);
    var m = a[(g + 1) | 0];
    null == m && (m = NaN);
    c = Math.min(c, l);
    d = Math.min(d, m);
    e = Math.max(e, l);
    f = Math.max(f, m);
  }
  return [c, d, e, f];
}
function V3e(a, c) {
  return new hH(a.x - c.x, a.y - c.y);
}
function W3e(a, c) {
  return a.x * c.x + a.y * c.y;
}
function X3e(a, c) {
  return a.scale(c, null);
}
function Y3e() {
  SHb.call(this);
}
G(Y3e, SHb);
Y3e.prototype.get = function (a) {
  return SHb.prototype.get.call(this, a);
};
Y3e.prototype.WGb = function () {
  return new Y3e();
};
function Z3e(a) {
  var c = new Y3e();
  for (var d in a) c.put(d, a[d]);
  return c;
}
function $3e(a, c, d) {
  for (var e = [], f = 0; f < a; f = (f + 1) | 0) {
    var g = SRc(c, d);
    e.push(g);
  }
  return e;
}
function a4e(a, c, d) {
  return new mH(
    $3e(a, c, function () {
      return d;
    })
  );
}
function b4e(a) {
  mH.call(this, a);
}
G(b4e, mH);
D = b4e.prototype;
D.insertRow = function (a, c) {
  mH.prototype.insertRow.call(this, a, c);
  c4e(this, !0, a);
};
D.yda = function (a, c) {
  mH.prototype.yda.call(this, a, c);
  c4e(this, !1, a);
};
function c4e(a, c, d) {
  var e = c ? a.Le() : a.kf(),
    f = c ? a.kf() : a.Le();
  if (0 != d && d != ((e - 1) | 0)) {
    e = [];
    for (var g = null, h = 0; h < f; h = (h + 1) | 0) {
      var l = c ? d : h,
        m = c ? h : d,
        n = c ? a.Kc((l - 1) | 0, m) : a.Kc(l, (m - 1) | 0),
        q = a.Kc(l, m);
      l = c ? a.Kc((l + 1) | 0, m) : a.Kc(l, (m + 1) | 0);
      null != q &&
        null != l &&
        null != n &&
        1 == l.ug() &&
        ((l = l.Ip()), I(l, n) || I(l, n.Ip())) &&
        (q.uDa(l), I(l, g) || ((g = l), e.push(l)));
    }
    for (a = 0; a < e.length; a++)
      (d = e[a]),
        null != d && (c ? d.ima((d.qf() + 1) | 0) : d.Vla((d.Kf() + 1) | 0));
  }
}
D.xda = function (a) {
  RRc(this, a, !1);
  for (var c = this.ga, d = [], e = 0; e < this.kf(); e = (e + 1) | 0) {
    var f = this.Kc(a, e);
    null != f &&
      0 == f.ug() &&
      1 < f.qf() &&
      ((c[(a + 1) | 0][e] = f), f.ima((f.qf() - 1) | 0), d.push(f));
  }
  RRc(this, a, !1);
  c = d4e(nH(this, a));
  for (e = 0; e < c.length; e++)
    (f = c[e]),
      null != f &&
        1 < f.qf() &&
        !e4e(d, f) &&
        (f.ima((f.qf() - 1) | 0), d.push(f));
  mH.prototype.xda.call(this, a);
};
D.wda = function (a) {
  URc(this, a, !1);
  for (var c = this.ga, d = [], e = 0; e < this.Le(); e = (e + 1) | 0) {
    var f = this.Kc(e, a);
    null != f &&
      0 == f.ug() &&
      1 < f.Kf() &&
      ((c[e][(a + 1) | 0] = f), f.Vla((f.Kf() - 1) | 0), d.push(f));
  }
  URc(this, a, !1);
  c = d4e(TRc(this, a));
  for (e = 0; e < c.length; e++)
    (f = c[e]),
      null != f &&
        1 < f.Kf() &&
        !e4e(d, f) &&
        (f.Vla((f.Kf() - 1) | 0), d.push(f));
  mH.prototype.wda.call(this, a);
};
function e4e(a, c) {
  for (var d = 0; d < a.length; d++) if (I(a[d], c)) return !0;
  return !1;
}
function d4e(a) {
  var c = [],
    d = null;
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    null != f &&
      ((f = 1 != f.ug() ? f : f.Ip()), I(f, d) || (c.push(f), (d = f)));
  }
  return c;
}
D.Ip = function () {
  var a = this.Kc(void 0, void 0);
  if (null == a) return null;
  var c = a.Ip();
  return 1 == a.ug() ? c : a;
};
D.eS = function () {
  return this.clone(null);
};
D.Za = function (a) {
  return mH.prototype.Za.call(this, a) && a instanceof b4e;
};
D.XV = function () {
  throw qo("Mergeable tables do not support directly setting cell values.").Ga;
};
function f4e(a, c) {
  this.aa = {};
  this.ha = a;
  this.ga = c;
}
G(f4e, H);
f4e.prototype.ea = function (a) {
  if (!(a in this.aa)) {
    var c = new a3c(a, this.ga, !0, this.ha);
    fw(this.aa, a, c);
  }
  return this.aa[a];
};
function g4e() {
  this.ea = !1;
}
G(g4e, H);
function h4e(a) {
  var c = new g4e();
  c.aa = a;
  c.ea = !1;
  return c;
}
D = g4e.prototype;
D.WR = function (a, c, d, e) {
  i4e(this);
  return this.aa.WR(a, c, d, e);
};
D.Jc = function () {
  return this.aa.Jc();
};
D.splice = function (a, c, d) {
  i4e(this);
  this.aa.splice(a, c, d);
};
D.Z4 = function (a) {
  i4e(this);
  this.aa.Z4(a);
};
D.KLa = function (a) {
  return this.aa.KLa(a);
};
D.XI = function (a) {
  return this.aa.XI(a);
};
D.f8a = function () {
  return this.aa.f8a();
};
D.shift = function (a, c, d) {
  i4e(this);
  this.aa.shift(a, c, d);
};
D.Dda = function () {
  return h4e(this.aa.Dda());
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof g4e
    ? Rp(this.aa, a.aa)
    : a instanceof b3c
    ? Rp(this.aa, a)
    : !1;
};
function i4e(a) {
  a.ea || ((a.aa = a.aa.Dda()), (a.ea = !0));
}
function j4e(a) {
  this.aa = {};
  this.ea = a;
}
G(j4e, H);
j4e.prototype.ga = function (a) {
  if (!(a in this.aa)) {
    var c = new b3c(this.ea.ea(a));
    fw(this.aa, a, c);
  }
  return h4e(this.aa[a]);
};
function k4e() {}
G(k4e, H);
k4e.prototype.aa = function (a, c, d, e, f) {
  d = f.Ad(a);
  if (!d) throw no("jm`" + K(a)).Ga;
  return GH(d, c).na;
};
function l4e() {}
G(l4e, H);
l4e.prototype.aa = z(null);
function m4e() {}
G(m4e, H);
m4e.prototype.aa = z(null);
function n4e() {}
G(n4e, H);
n4e.prototype.ha = z(Gj);
n4e.prototype.aa = function () {
  return [Jk, ym];
};
n4e.prototype.ga = function (a, c, d) {
  if (yXa in c) {
    d = d.Uk(Gj, a);
    if (!d) throw no("rm").Ga;
    if (c.ls_nest != eE(d)) return Shd(this, [a]);
  }
  return null;
};
n4e.prototype.ea = function (a) {
  return Shd(this, [a]);
};
var o4e;
function p4e() {
  p4e = u();
  o4e = new hWb(th);
}
function q4e(a, c) {
  iO();
  return I(a, c) ? !0 : r4e(a).Za(r4e(c));
}
var s4e, t4e;
function u4e() {}
G(u4e, H);
function v4e() {
  v4e = u();
  t4e = new u4e();
}
function w4e() {
  return v4e(), t4e;
}
var x4e,
  y4e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function z4e() {}
var A4e;
function B4e() {
  B4e = u();
  A4e = new zBb("6", "8");
}
function C4e(a) {
  B4e();
  return A4e.Zg(a);
}
function D4e(a) {
  this.ga = a;
}
G(D4e, H);
D4e.prototype.getType = x(fi);
D4e.prototype.Za = function (a) {
  return I(this, a) ? !0 : a instanceof D4e ? I(this.ga, a.ga) : !1;
};
D4e.prototype.Ac = function () {
  return Tp(Gp(this.ga, z4e));
};
var E4e;
function F4e() {
  F4e = u();
  E4e = new zBb("6", Ip(null));
}
function G4e(a, c) {
  F4e();
  this.ga = 1;
  this.ea = 0;
  Ou(E4e.Zg(a), "Color is not in hex6");
  Ou(
    0 <= c && 1 >= c,
    "The color opacity must be in the closed range [0.0, 1.0]"
  );
  this.aa = a;
  this.ea = c;
}
G(G4e, D4e);
G4e.prototype.xl = x(vh);
G4e.prototype.toString = function () {
  return "HexColor: " + K(this.aa) + ", opacity = " + this.ea;
};
G4e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : H4e(a)
    ? D4e.prototype.Za.call(this, a) &&
      aq(gq(this.aa, (jq(), iq)), gq(a.aa, iq)) &&
      this.ea == a.ea
    : !1;
};
G4e.prototype.Ac = function () {
  return (
    (Math.imul(D4e.prototype.Ac.call(this), 37) + Qp([this.aa, this.ea])) | 0
  );
};
function H4e(a) {
  return a instanceof G4e;
}
function I4e(a) {
  F4e();
  Nu(C4e(a));
  var c = 1;
  9 == a.length &&
    ((c = a),
    gA(),
    (c = k3e(c, 7, 9)),
    (c = tp(c, 16)),
    (c = gO(c / 255, 4)),
    (a = CBb(l3e(a))));
  return new G4e(a, c);
}
var J4e, K4e, L4e, M4e, N4e, O4e, P4e;
function Q4e() {
  Q4e = u();
  P4e = O4e = N4e = M4e = L4e = K4e = J4e = null;
}
function R4e(a) {
  for (var c = [], d = 0; d < a.length; d = (d + 1) | 0) c.push(d), aw(c, a[d]);
  return c;
}
var S4e = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12e4,
    12e4,
    [],
    [],
    [[1, 1, [0, 2], [0, 0], [], 0]],
    1,
    1,
    la,
    1,
    1,
    1,
    ka,
    1,
    8,
    381,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    "",
    Ma,
    0,
    0,
    36576,
    36576,
    "",
    [0, 0, 0, 0, 0, 12e4, 0, 12e4],
    7112,
    ka,
    0,
    1,
    2,
    1,
    0,
    [],
    "",
    1,
    ["", 0],
    ["", 0],
    [3657, 3657, 3657, 3657],
    0,
    0,
    0,
    0,
    "",
    0,
    0,
    [
      [ka, 0],
      [ka, 1],
    ],
    0,
    0,
    [
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], []],
    ],
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    "",
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    "",
    "",
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    [],
    [],
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    50,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    [1, 0, 0, 1, 0, 0],
    1,
    0,
    0,
    6,
    0,
    1,
    0,
    0,
    0,
    1,
    [1, 0, 0, 1, 0, 0],
    6,
    0,
    0,
    ka,
    1,
    1,
    1,
    "",
    0,
    "",
    "",
    "",
    400,
    700,
    0,
    "",
    "",
    400,
    1,
    0,
    1,
    [0],
    [0],
    0,
    1,
    0,
    0,
    0,
    [0],
    "",
    0,
    { xss: [0, [], 1], yss: [0, [], 1], ts: [0, [], 1] },
    [
      { ti: [0, [], 1], oi: [0, [], 1], xss: [0, [], 1], yss: [0, [], 1] },
      1,
      0,
    ],
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    "",
    "",
  ],
  T4e = [
    {
      50: 0,
      115: 0,
      116: 1,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
      ],
      17: 0,
      137: 0,
      144: 0,
      32: 0,
      125: 0,
      46: 0,
      14: 0,
      18: 0,
    },
    {
      50: 0,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
      ],
    },
    { 50: 0, 32: 0, 41: 36576 },
    {
      50: 4,
      115: 0,
      116: 1,
      32: 0,
      81: 1,
      14: 0,
      101: 1,
      18: 0,
      83: 0,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    { 50: 2, 25: 1, 13: 0, 115: 0, 32: 0, 14: 0 },
    {
      50: 2,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      14: 0,
      12: [[1, 1, [0, 2, 1, 2], [0, 0, 0, 1], [2, 3], 0]],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
      ],
    },
    {
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      0: 16667,
      40: [2, 9, 2, 9, 2, 10, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            0, 6, 6, 6, 108e5, 54e5, 7, 0, 6, 6, 162e5, 54e5, 1, 8, 6, 6, 0,
            54e5, 6, 2, 6, 6, 54e5, 54e5,
          ],
          [0, 4, 5, 7, 10, 11, 16, 17, 22, 23],
          1,
        ],
      ],
      11: [[0, 2, 6, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 6],
        [2, 2, 6, 0, 29289, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
      ],
    },
    {
      40: [2, 4, 2, 6, 2, 5, 2, 7],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 1, 0, 1, 108e5, 54e5, 0, 1, 162e5, 54e5, 0, 1, 0, 54e5, 0, 1,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 0, 0],
        [0, 162e5, 2, 4, 2, 6],
        [0, 108e5, 0, 0, 2, 1],
        [0, 54e5, 2, 4, 2, 7],
        [0, 54e5, 2, 0, 4, 0],
        [0, 54e5, 2, 5, 2, 7],
        [0, 0, 3, 0, 2, 1],
        [0, 162e5, 2, 5, 2, 6],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 0, 0, 27e5, 0, 0],
        [10, 2, 1, 0, 27e5, 0, 0],
        [1, 2, 0, 0, 0, 2, 2],
        [1, 2, 0, 2, 2, 0, 0],
        [1, 2, 1, 0, 0, 2, 3],
        [1, 2, 1, 2, 3, 0, 0],
      ],
    },
    {
      25: 1,
      0: 162e5,
      1: 0,
      14: 0,
      40: [2, 41, 2, 43, 2, 37, 2, 39],
      12: [
        [1, 0, [0, 2, 4, 4, 1, 2, 5, 0], [32, 33, 22, 23, 0, 4, 22, 23], [], 1],
        [0, 1, [0, 2, 4, 4], [32, 33, 22, 23, 0, 4], [], 1],
      ],
      11: [
        [1, 2, 32, 2, 33, [0, 0, 0, 0, 21599999], null],
        [1, 2, 34, 2, 35, [1, 0, 0, 0, 21599999], null],
      ],
      48: [
        [2, 19, 2, 32, 2, 33],
        [2, 21, 2, 22, 2, 23],
        [2, 20, 2, 34, 2, 35],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 21599999],
        [16, 0, 0, 1, 1, 0, 21599999],
        [1, 2, 1, 0, 0, 2, 0],
        [1, 2, 2, 0, 216e5, 0, 0],
        [7, 2, 2, 2, 2, 2, 3],
        [1, 0, 216e5, 0, 0, 2, 0],
        [1, 2, 4, 0, 0, 2, 5],
        [1, 0, 54e5, 0, 0, 2, 0],
        [1, 0, 27e6, 0, 0, 2, 0],
        [7, 2, 7, 2, 7, 2, 8],
        [1, 2, 4, 0, 0, 2, 9],
        [1, 0, 108e5, 0, 0, 2, 0],
        [1, 0, 324e5, 0, 0, 2, 0],
        [7, 2, 11, 2, 11, 2, 12],
        [1, 2, 4, 0, 0, 2, 13],
        [1, 0, 162e5, 0, 0, 2, 0],
        [1, 0, 378e5, 0, 0, 2, 0],
        [7, 2, 15, 2, 15, 2, 16],
        [1, 2, 4, 0, 0, 2, 17],
        [1, 2, 0, 0, 0, 0, 54e5],
        [1, 2, 1, 0, 54e5, 0, 0],
        [17, 2, 19, 2, 20, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [10, 2, 22, 2, 0, 0, 0],
        [11, 2, 23, 2, 0, 0, 0],
        [12, 2, 22, 2, 25, 2, 24],
        [13, 2, 23, 2, 25, 2, 24],
        [10, 2, 22, 2, 1, 0, 0],
        [11, 2, 23, 2, 1, 0, 0],
        [12, 2, 22, 2, 29, 2, 28],
        [13, 2, 23, 2, 29, 2, 28],
        [1, 2, 22, 2, 26, 0, 0],
        [1, 2, 23, 2, 27, 0, 0],
        [1, 2, 22, 2, 30, 0, 0],
        [1, 2, 23, 2, 31, 0, 0],
        [6, 2, 32, 2, 34, 0, 0],
        [7, 2, 6, 3, 0, 2, 36],
        [6, 2, 33, 2, 35, 0, 0],
        [7, 2, 10, 4, 0, 2, 38],
        [5, 2, 32, 2, 34, 0, 0],
        [7, 2, 14, 0, 0, 2, 40],
        [5, 2, 33, 2, 35, 0, 0],
        [7, 2, 18, 0, 0, 2, 42],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 43750,
      40: [0, 0, 0, 0, 2, 5, 2, 4],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 5,
            0,
          ],
          [
            0, 4, 0, 24, 17, 17, 108e5, 54e5, 21, 10, 21, 0, 5, 8, 21, 23, 21,
            22, 20, 22, 19, 19, 162e5, -54e5, 7, 4,
          ],
          [0, 2, 6, 7, 11, 22, 23],
          1,
        ],
      ],
      11: [
        [0, 2, 7, 4, 0, [0, 0, 0, 2, 1], null],
        [0, 3, 0, 2, 23, null, [1, 0, 0, 0, 5e4]],
        [0, 2, 21, 0, 0, [2, 0, 0, 0, 5e4], null],
        [0, 2, 17, 0, 0, [3, 0, 0, 2, 15], null],
      ],
      48: [
        [0, 162e5, 2, 21, 0, 0],
        [0, 54e5, 2, 21, 2, 23],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 8],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 5e4],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [16, 0, 0, 1, 2, 0, 5e4],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 6, 2, 2, 0, 1e5],
        [2, 2, 6, 2, 0, 0, 1e5],
        [2, 2, 7, 0, 1, 0, 2],
        [1, 2, 8, 0, 0, 2, 9],
        [2, 2, 6, 2, 3, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 11],
        [1, 4, 0, 0, 0, 2, 10],
        [5, 2, 12, 2, 13, 0, 0],
        [2, 0, 1e5, 2, 14, 2, 6],
        [16, 0, 0, 1, 3, 2, 15],
        [2, 2, 6, 2, 16, 0, 1e5],
        [1, 2, 17, 0, 0, 2, 7],
        [6, 2, 18, 0, 0, 0, 0],
        [1, 2, 7, 2, 19, 0, 0],
        [1, 3, 0, 0, 0, 2, 11],
        [1, 2, 10, 2, 7, 0, 0],
        [1, 2, 22, 2, 10, 0, 0],
        [1, 2, 10, 2, 17, 0, 0],
        [1, 2, 22, 2, 19, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      38: 31468,
      40: [0, 0, 2, 15, 2, 13, 2, 4],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 15, 12, 15, 12, 6, 8, 6, 10, 0, 3, 6, 13, 6, 13, 4, 0, 4],
          [0, 9, 16],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 15, null, [0, 0, 0, 0, 5e4]],
        [0, 2, 8, 0, 0, [1, 0, 0, 0, 5e4], null],
        [0, 2, 12, 2, 6, null, [2, 0, 0, 0, 5e4]],
      ],
      48: [
        [0, 162e5, 2, 10, 0, 0],
        [0, 108e5, 2, 8, 2, 6],
        [0, 108e5, 0, 0, 2, 17],
        [0, 54e5, 2, 16, 4, 0],
        [0, 0, 2, 13, 2, 18],
        [0, 0, 3, 0, 2, 6],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [16, 0, 0, 1, 2, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 5, 2, 2, 0, 1e5],
        [2, 2, 5, 2, 1, 0, 5e4],
        [1, 3, 0, 0, 0, 2, 7],
        [2, 2, 5, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [2, 2, 5, 2, 0, 0, 2e5],
        [1, 2, 10, 0, 0, 2, 11],
        [1, 2, 10, 2, 11, 0, 0],
        [2, 2, 5, 2, 0, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 14],
        [2, 2, 13, 0, 1, 0, 2],
        [17, 2, 15, 4, 0, 0, 2],
        [17, 2, 6, 4, 0, 0, 2],
      ],
    },
    {
      0: 12500,
      40: [2, 6, 2, 6, 2, 7, 2, 8],
      12: [
        [1, 0, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [6, 6, 7, 6, 7, 8, 6, 8], [], 1],
        [
          5,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 1, 0, 7, 6, 6, 6],
          [0, 1, 3],
          1,
        ],
        [
          3,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 2, 6, 8, 7, 8, 1, 2],
          [0],
          1,
        ],
        [
          4,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 6, 6, 6, 8, 0, 2],
          [0, 1, 6],
          1,
        ],
        [
          2,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [1, 0, 1, 2, 7, 8, 7, 6],
          [1],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1,
            2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2,
          ],
          [
            0, 0, 1, 0, 1, 2, 0, 2, 6, 6, 7, 6, 7, 8, 6, 8, 0, 0, 6, 6, 0, 2, 6,
            8, 1, 0, 7, 6, 1, 2, 7, 8,
          ],
          [0, 1, 3, 6, 16, 17, 20, 25],
          1,
        ],
      ],
      11: [[0, 2, 6, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 0, 3, 0, 2, 4],
        [0, 0, 2, 7, 2, 4],
        [0, 54e5, 2, 5, 4, 0],
        [0, 54e5, 2, 5, 2, 8],
        [0, 108e5, 0, 0, 2, 4],
        [0, 108e5, 2, 6, 2, 4],
        [0, 162e5, 2, 5, 0, 0],
        [0, 162e5, 2, 5, 2, 6],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 6],
      ],
    },
    {
      0: 108e5,
      1: 0,
      2: 25e3,
      40: [2, 65, 2, 69, 2, 57, 2, 61],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [35, 36, 24, 25, 0, 5, 50, 51, 40, 41, 1, 6],
          [],
          1,
        ],
      ],
      11: [
        [1, 2, 35, 2, 36, [0, 0, 0, 0, 21599999], null],
        [1, 2, 50, 2, 51, [1, 0, 0, 0, 21599999], [2, 0, 0, 0, 5e4]],
      ],
      48: [
        [2, 21, 2, 70, 2, 71],
        [2, 22, 2, 72, 2, 73],
        [2, 23, 2, 24, 2, 25],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 21599999],
        [16, 0, 0, 1, 1, 0, 21599999],
        [16, 0, 0, 1, 2, 0, 5e4],
        [1, 2, 1, 0, 0, 2, 0],
        [1, 2, 3, 0, 216e5, 0, 0],
        [7, 2, 3, 2, 3, 2, 4],
        [1, 0, 0, 0, 0, 2, 5],
        [1, 0, 216e5, 0, 0, 2, 0],
        [1, 2, 5, 0, 0, 2, 7],
        [1, 0, 54e5, 0, 0, 2, 0],
        [1, 0, 27e6, 0, 0, 2, 0],
        [7, 2, 9, 2, 9, 2, 10],
        [1, 2, 5, 0, 0, 2, 11],
        [1, 0, 108e5, 0, 0, 2, 0],
        [1, 0, 324e5, 0, 0, 2, 0],
        [7, 2, 13, 2, 13, 2, 14],
        [1, 2, 5, 0, 0, 2, 15],
        [1, 0, 162e5, 0, 0, 2, 0],
        [1, 0, 378e5, 0, 0, 2, 0],
        [7, 2, 17, 2, 17, 2, 18],
        [1, 2, 5, 0, 0, 2, 19],
        [1, 2, 0, 0, 0, 0, 54e5],
        [1, 2, 1, 0, 54e5, 0, 0],
        [17, 2, 21, 2, 22, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [5, 3, 0, 4, 0, 0, 0],
        [10, 2, 24, 2, 0, 0, 0],
        [11, 2, 25, 2, 0, 0, 0],
        [10, 2, 24, 2, 1, 0, 0],
        [11, 2, 25, 2, 1, 0, 0],
        [12, 2, 24, 2, 28, 2, 27],
        [13, 2, 25, 2, 28, 2, 27],
        [12, 2, 24, 2, 30, 2, 29],
        [13, 2, 25, 2, 30, 2, 29],
        [1, 2, 24, 2, 31, 0, 0],
        [1, 2, 25, 2, 32, 0, 0],
        [1, 2, 24, 2, 33, 0, 0],
        [1, 2, 25, 2, 34, 0, 0],
        [2, 2, 26, 2, 2, 0, 1e5],
        [1, 2, 24, 0, 0, 2, 39],
        [1, 2, 25, 0, 0, 2, 39],
        [10, 2, 40, 2, 1, 0, 0],
        [11, 2, 41, 2, 1, 0, 0],
        [10, 2, 40, 2, 0, 0, 0],
        [11, 2, 41, 2, 0, 0, 0],
        [12, 2, 40, 2, 43, 2, 42],
        [13, 2, 41, 2, 43, 2, 42],
        [12, 2, 40, 2, 45, 2, 44],
        [13, 2, 41, 2, 45, 2, 44],
        [1, 2, 24, 2, 46, 0, 0],
        [1, 2, 25, 2, 47, 0, 0],
        [1, 2, 24, 2, 48, 0, 0],
        [1, 2, 25, 2, 49, 0, 0],
        [6, 2, 35, 2, 50, 0, 0],
        [6, 2, 37, 2, 52, 0, 0],
        [6, 2, 54, 2, 55, 0, 0],
        [7, 2, 8, 3, 0, 2, 56],
        [6, 2, 36, 2, 51, 0, 0],
        [6, 2, 38, 2, 53, 0, 0],
        [6, 2, 58, 2, 59, 0, 0],
        [7, 2, 12, 4, 0, 2, 60],
        [5, 2, 35, 2, 50, 0, 0],
        [5, 2, 37, 2, 52, 0, 0],
        [5, 2, 62, 2, 63, 0, 0],
        [7, 2, 16, 0, 0, 2, 64],
        [5, 2, 36, 2, 51, 0, 0],
        [5, 2, 38, 2, 53, 0, 0],
        [5, 2, 66, 2, 67, 0, 0],
        [7, 2, 20, 0, 0, 2, 68],
        [17, 2, 35, 2, 52, 0, 2],
        [17, 2, 36, 2, 53, 0, 2],
        [17, 2, 37, 2, 50, 0, 2],
        [17, 2, 38, 2, 51, 0, 2],
      ],
    },
    {
      0: 8333,
      37: 42672,
      14: 0,
      40: [2, 13, 2, 13, 2, 14, 2, 15],
      12: [
        [
          1,
          0,
          [
            0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 4,
            4, 1, 2, 4, 4, 5, 0,
          ],
          [
            6, 2, 5, 5, 54e5, 54e5, 5, 10, 5, 5, 0, -54e5, 5, 5, 54e5, -54e5, 5,
            5, 5, 5, 108e5, 54e5, 7, 0, 5, 5, 162e5, 54e5, 8, 9, 5, 5, 108e5,
            -54e5, 5, 5, 162e5, -54e5, 8, 11, 5, 5, 0, 54e5,
          ],
          [4, 5, 10, 11, 14, 15, 20, 21, 23, 26, 27, 32, 33, 36, 37, 42, 43],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4, 0, 2, 4, 4, 1, 2, 4, 4, 4,
            4, 1, 2, 4, 4,
          ],
          [
            6, 2, 5, 5, 54e5, 54e5, 5, 10, 5, 5, 0, -54e5, 5, 5, 54e5, -54e5, 5,
            5, 5, 5, 108e5, 54e5, 7, 0, 5, 5, 162e5, 54e5, 8, 9, 5, 5, 108e5,
            -54e5, 5, 5, 162e5, -54e5, 8, 11, 5, 5, 0, 54e5,
          ],
          [4, 5, 10, 11, 14, 15, 20, 21, 23, 26, 27, 32, 33, 36, 37, 42, 43],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 5, null, [0, 0, 0, 0, 25e3]]],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 1, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 25e3],
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [2, 2, 3, 2, 0, 0, 5e4],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 3, 0, 0, 0, 2, 5],
        [1, 2, 4, 0, 0, 2, 5],
        [1, 2, 4, 2, 5, 0, 0],
        [1, 4, 0, 0, 0, 2, 5],
        [2, 2, 5, 0, 29289, 0, 1e5],
        [1, 2, 5, 2, 12, 0, 0],
        [1, 3, 0, 0, 0, 2, 13],
        [1, 4, 0, 0, 0, 2, 12],
      ],
    },
    {
      0: 16667,
      14: 0,
      40: [2, 9, 2, 9, 2, 10, 2, 11],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            0, 6, 6, 6, 108e5, 54e5, 7, 0, 6, 6, 162e5, 54e5, 1, 8, 6, 6, 0,
            54e5, 6, 2, 6, 6, 54e5, 54e5,
          ],
          [0, 4, 5, 7, 10, 11, 16, 17, 22, 23],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 0, 2, 4, 4, 1, 2, 4, 4],
          [
            6, 2, 6, 6, 54e5, 54e5, 0, 6, 6, 6, 108e5, 54e5, 7, 0, 6, 6, 162e5,
            54e5, 1, 8, 6, 6, 0, 54e5,
          ],
          [4, 5, 6, 10, 11, 13, 16, 17, 22, 23],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 6, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 6],
        [2, 2, 6, 0, 29289, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
      ],
    },
    {
      0: 25e3,
      38: 48646,
      40: [0, 0, 2, 7, 2, 1, 2, 8],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 6, 3, 6, 108e5, -108e5, 1, 8, 3, 6, 0, 108e5],
          [0, 4, 5, 10, 11],
          1,
        ],
        [
          4,
          0,
          [0, 2, 4, 4, 4, 4, 5, 0],
          [0, 6, 3, 6, 108e5, 108e5, 3, 6, 0, 108e5],
          [1, 2, 3, 6, 7],
          0,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 4, 4, 1, 2, 4, 4, 1, 2],
          [
            1, 6, 3, 6, 0, 108e5, 3, 6, 108e5, 108e5, 1, 8, 3, 6, 0, 108e5, 0,
            6,
          ],
          [4, 5, 8, 9, 14, 15, 16],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 7, null, [0, 0, 0, 2, 4]]],
      48: [
        [0, 162e5, 2, 3, 2, 7],
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 0],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 0],
      ],
      10: [
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 2],
        [16, 0, 0, 1, 0, 2, 4],
        [2, 2, 2, 2, 5, 0, 2e5],
        [1, 2, 6, 2, 6, 0, 0],
        [1, 4, 0, 0, 0, 2, 6],
      ],
    },
    {
      0: 5e4,
      38: 18288,
      40: [2, 10, 0, 0, 2, 11, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 7, 0, 0, 3, 7, 1, 0, 1, 6, 3],
          [0, 1, 3, 8],
          1,
        ],
      ],
      11: [[0, 2, 7, 0, 0, [0, 0, 0, 2, 4], null]],
      48: [
        [0, 162e5, 2, 8, 0, 0],
        [0, 108e5, 2, 6, 2, 3],
        [0, 54e5, 2, 8, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 0, 2, 4],
        [2, 2, 2, 2, 5, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [2, 2, 7, 0, 1, 0, 2],
        [1, 2, 7, 0, 0, 2, 6],
        [7, 2, 9, 2, 6, 0, 0],
        [7, 2, 9, 2, 7, 3, 0],
      ],
    },
    {
      0: 27e5,
      1: 162e5,
      40: [2, 25, 2, 27, 2, 26, 2, 28],
      12: [[1, 1, [0, 2, 4, 4, 5, 0], [17, 18, 7, 8, 0, 4], [], 1]],
      11: [
        [1, 2, 17, 2, 18, [0, 0, 0, 0, 21599999], null],
        [1, 2, 19, 2, 20, [1, 0, 0, 0, 21599999], null],
      ],
      48: [
        [2, 0, 2, 17, 2, 18],
        [2, 1, 2, 19, 2, 20],
        [2, 6, 2, 21, 2, 22],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 21599999],
        [16, 0, 0, 1, 1, 0, 21599999],
        [1, 2, 1, 0, 0, 2, 0],
        [1, 2, 2, 0, 216e5, 0, 0],
        [7, 2, 2, 2, 2, 2, 3],
        [2, 2, 4, 0, 1, 0, 2],
        [1, 2, 0, 2, 5, 0, 108e5],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [10, 2, 7, 2, 0, 0, 0],
        [11, 2, 8, 2, 0, 0, 0],
        [12, 2, 7, 2, 10, 2, 9],
        [13, 2, 8, 2, 10, 2, 9],
        [10, 2, 7, 2, 1, 0, 0],
        [11, 2, 8, 2, 1, 0, 0],
        [12, 2, 7, 2, 14, 2, 13],
        [13, 2, 8, 2, 14, 2, 13],
        [1, 2, 7, 2, 11, 0, 0],
        [1, 2, 8, 2, 12, 0, 0],
        [1, 2, 7, 2, 15, 0, 0],
        [1, 2, 8, 2, 16, 0, 0],
        [17, 2, 17, 2, 19, 0, 2],
        [17, 2, 18, 2, 20, 0, 2],
        [11, 2, 7, 0, 27e5, 0, 0],
        [10, 2, 8, 0, 27e5, 0, 0],
        [1, 2, 7, 0, 0, 2, 23],
        [1, 2, 7, 2, 23, 0, 0],
        [1, 2, 8, 0, 0, 2, 24],
        [1, 2, 8, 2, 24, 0, 0],
      ],
    },
    {
      37: 47550,
      8: 43200,
      9: 43200,
      40: [2, 0, 2, 1, 2, 2, 2, 3],
      12: [
        [
          1,
          1,
          [
            0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 5, 0,
          ],
          [
            3900, 14370, 6753, 9190, -11429249, 7426832, 5333, 7267, -8646143,
            5396714, 4365, 5945, -8748475, 5983381, 4857, 6595, -7859164,
            7034504, 5333, 7273, -4722533, 6541615, 6775, 9220, -2776035,
            7816140, 5785, 7867, 37501, 6842e3, 6752, 9215, 1347096, 6910353,
            7720, 10543, 3974558, 4542661, 4360, 5918, -16496525, 8804134, 4345,
            5945, -14809710, 9151131,
          ],
          [],
          0,
        ],
        [
          0,
          1,
          [
            0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4,
            4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4,
          ],
          [
            2114, 25548, 4345, 5945, -14809710, -1585770, 5805, 35470, 4360,
            5918, -16496525, -686848, 16480, 39264, 6752, 9215, 8257449, 844866,
            28556, 36813, 6752, 9215, 1347096, -959901, 37404, 30203, 5785,
            7867, 37501, -4255042, 41818, 15460, 5333, 7273, 1819082, 1665090,
            38318, 5576, 4857, 6595, -824660, 891534, 29833, 2481, 4857, 6595,
            -7859164, -1091722, 22456, 3432, 4365, 5945, -8748475, -1061181,
            14005, 5202, 6753, 9190, -4002417, 739161, 3900, 14370, 6753, 9190,
            -11429249, -711490,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 0, 2, 6, 2, 8],
        [0, 54e5, 2, 9, 2, 5],
        [0, 108e5, 2, 4, 2, 8],
        [0, 162e5, 2, 9, 2, 7],
      ],
      10: [
        [2, 3, 0, 0, 2977, 0, 21600],
        [2, 4, 0, 0, 3262, 0, 21600],
        [2, 3, 0, 0, 17087, 0, 21600],
        [2, 4, 0, 0, 17337, 0, 21600],
        [2, 3, 0, 0, 67, 0, 21600],
        [2, 4, 0, 0, 21577, 0, 21600],
        [2, 3, 0, 0, 21582, 0, 21600],
        [2, 4, 0, 0, 1235, 0, 21600],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      40: [0, 0, 2, 15, 2, 16, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 10, 0, 10, 12, 0, 12, 0, 1, 0, 1],
          [0, 1, 3, 10],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 12, null, [0, 0, 0, 2, 6]],
        [0, 2, 10, 0, 0, [1, 0, 0, 2, 7], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 14],
        [0, 54e5, 2, 4, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 13, 0, 0],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [1, 3, 0, 0, 0, 4, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 4, 0, 2, 3],
        [2, 0, 1e5, 3, 0, 2, 3],
        [16, 0, 0, 1, 0, 2, 6],
        [16, 0, 0, 1, 1, 2, 7],
        [2, 2, 3, 2, 9, 0, 1e5],
        [2, 2, 3, 2, 8, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 11],
        [2, 2, 10, 0, 1, 0, 2],
        [17, 2, 12, 4, 0, 0, 2],
        [7, 2, 2, 2, 12, 0, 0],
        [7, 2, 2, 3, 0, 2, 10],
      ],
    },
    {
      0: 25e3,
      40: [0, 0, 2, 4, 2, 8, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 4, 8, 4, 8, 1, 0, 1],
          [0, 6],
          1,
        ],
        [
          3,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [8, 4, 2, 0, 2, 5, 8, 1],
          [3],
          1,
        ],
        [
          5,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 4, 4, 0, 2, 0, 8, 4],
          [0, 3, 5],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 0, 2, 1,
            2,
          ],
          [0, 4, 4, 0, 2, 0, 2, 5, 8, 1, 0, 1, 0, 4, 8, 4, 2, 0, 8, 4, 8, 1],
          [0, 3, 5, 10, 12, 17],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 4, null, [0, 0, 0, 0, 1e5]]],
      48: [
        [0, 162e5, 2, 10, 0, 0],
        [0, 162e5, 2, 9, 2, 4],
        [0, 108e5, 0, 0, 2, 7],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 2, 8, 2, 7],
        [0, 0, 3, 0, 2, 6],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 4],
        [2, 2, 5, 0, 1, 0, 2],
        [17, 2, 4, 4, 0, 0, 2],
        [1, 3, 0, 0, 0, 2, 4],
        [2, 2, 8, 0, 1, 0, 2],
        [17, 2, 4, 3, 0, 0, 2],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 25e3,
      40: [0, 0, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 5, 0],
          [
            33, 1, 30, 34, 26, 34, 11, 1, 41, 36, 21, 0, 11, 1, 162e5, 35, 31,
            34,
          ],
          [11, 14],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [38, 37, 11, 1, 42, 43, 0, 1, 11, 1, 108e5, 44],
          [6, 10],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4],
          [
            38, 37, 11, 1, 42, 43, 0, 1, 11, 1, 108e5, 54e5, 21, 0, 11, 1,
            162e5, 35, 31, 34, 33, 1, 30, 34, 26, 34, 11, 1, 41, 36,
          ],
          [6, 10, 11, 13, 16],
          1,
        ],
      ],
      11: [
        [0, 2, 27, 2, 34, [0, 0, 0, 2, 45], null],
        [0, 2, 30, 4, 0, [1, 0, 0, 2, 6], null],
        [0, 3, 0, 2, 34, null, [2, 0, 0, 2, 18]],
      ],
      48: [
        [0, 162e5, 2, 38, 0, 0],
        [0, 54e5, 2, 39, 4, 0],
        [0, 54e5, 2, 30, 2, 34],
        [0, 54e5, 2, 33, 4, 0],
        [0, 0, 2, 31, 2, 34],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 4, 0, 4, 0, 0, 1],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 0, 0, 1e5],
        [2, 2, 4, 2, 7, 0, 1e5],
        [17, 2, 8, 2, 9, 0, 4],
        [1, 2, 5, 0, 0, 2, 10],
        [2, 2, 11, 0, 2, 0, 1],
        [2, 2, 12, 2, 12, 0, 1],
        [2, 2, 8, 2, 8, 0, 1],
        [1, 2, 13, 0, 0, 2, 14],
        [14, 2, 15, 0, 0, 0, 0],
        [2, 2, 16, 4, 0, 2, 12],
        [2, 0, 1e5, 2, 17, 2, 4],
        [16, 0, 0, 1, 2, 2, 18],
        [2, 2, 4, 1, 2, 0, 1e5],
        [1, 2, 11, 2, 8, 0, 0],
        [2, 2, 20, 2, 20, 0, 1],
        [1, 2, 3, 0, 0, 2, 22],
        [14, 2, 23, 0, 0, 0, 0],
        [2, 2, 24, 2, 11, 4, 0],
        [1, 2, 11, 2, 25, 0, 0],
        [1, 2, 21, 2, 25, 0, 0],
        [1, 2, 9, 0, 0, 2, 8],
        [2, 2, 28, 0, 1, 0, 2],
        [1, 2, 26, 0, 0, 2, 29],
        [1, 2, 27, 2, 29, 0, 0],
        [2, 2, 9, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 32],
        [1, 4, 0, 0, 0, 2, 20],
        [9, 2, 20, 2, 25, 0, 0],
        [1, 0, 0, 0, 0, 2, 35],
        [1, 4, 0, 0, 0, 2, 17],
        [17, 2, 11, 2, 21, 0, 2],
        [2, 2, 8, 0, 1, 0, 2],
        [9, 2, 17, 2, 39, 0, 0],
        [1, 0, 162e5, 2, 35, 0, 0],
        [1, 0, 162e5, 0, 0, 2, 40],
        [1, 2, 40, 0, 0, 0, 54e5],
        [1, 0, 54e5, 2, 40, 0, 0],
        [16, 0, 0, 1, 1, 0, 1e5],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 25e3,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 1, 2, 4, 4, 4, 4, 1, 2, 5, 0],
          [0, 33, 34, 30, 34, 26, 0, 11, 35, 41, 0, 11, 43, 42, 34, 31],
          [0],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 21, 0, 11, 0, -54e5, 0, 0, 0, 11, 162e5, 54e5],
          [0, 1, 2, 3, 8, 9],
          0,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4],
          [
            0, 21, 0, 11, 0, -54e5, 0, 0, 0, 11, 162e5, 54e5, 0, 21, 0, 11, 0,
            35, 34, 31, 0, 33, 34, 30, 34, 26, 0, 11, 35, 41,
          ],
          [4, 5, 6, 7, 10, 11, 16, 20],
          1,
        ],
      ],
      11: [
        [0, 2, 34, 2, 26, null, [0, 0, 0, 2, 6]],
        [0, 3, 0, 2, 30, null, [1, 0, 0, 2, 5]],
        [0, 2, 34, 4, 0, [2, 0, 0, 2, 18], null],
      ],
      48: [
        [0, 108e5, 0, 0, 2, 39],
        [0, 108e5, 2, 34, 2, 30],
        [0, 81e5, 0, 0, 2, 33],
        [0, 54e5, 2, 34, 2, 31],
        [0, 0, 3, 0, 2, 38],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 3, 0, 0, 1],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 3],
        [16, 0, 0, 1, 1, 2, 5],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 2, 3, 2, 7, 0, 1e5],
        [2, 2, 3, 2, 6, 0, 1e5],
        [17, 2, 8, 2, 9, 0, 4],
        [1, 2, 4, 0, 0, 2, 10],
        [2, 2, 11, 0, 2, 0, 1],
        [2, 2, 12, 2, 12, 0, 1],
        [2, 2, 8, 2, 8, 0, 1],
        [1, 2, 13, 0, 0, 2, 14],
        [14, 2, 15, 0, 0, 0, 0],
        [2, 2, 16, 3, 0, 2, 12],
        [2, 0, 1e5, 2, 17, 2, 3],
        [16, 0, 0, 1, 2, 2, 18],
        [2, 2, 3, 2, 19, 0, 1e5],
        [1, 2, 11, 2, 8, 0, 0],
        [2, 2, 20, 2, 20, 0, 1],
        [1, 2, 2, 0, 0, 2, 22],
        [14, 2, 23, 0, 0, 0, 0],
        [2, 2, 24, 2, 11, 3, 0],
        [1, 2, 11, 2, 25, 0, 0],
        [1, 2, 21, 2, 25, 0, 0],
        [1, 2, 9, 0, 0, 2, 8],
        [2, 2, 28, 0, 1, 0, 2],
        [1, 2, 26, 0, 0, 2, 29],
        [1, 2, 27, 2, 29, 0, 0],
        [2, 2, 9, 0, 1, 0, 2],
        [1, 4, 0, 0, 0, 2, 32],
        [1, 0, 0, 2, 20, 0, 0],
        [9, 2, 20, 2, 25, 0, 0],
        [1, 0, 0, 0, 0, 2, 35],
        [1, 0, 0, 2, 17, 0, 0],
        [17, 2, 11, 2, 21, 0, 2],
        [2, 2, 8, 0, 1, 0, 2],
        [9, 2, 17, 2, 39, 0, 0],
        [1, 2, 40, 0, 0, 2, 35],
        [1, 2, 35, 2, 40, 0, 0],
        [1, 0, 0, 0, 0, 2, 40],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 25e3,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 5, 0],
          [
            0, 11, 0, 11, 108e5, 37, 34, 30, 0, 33, 34, 31, 34, 27, 0, 11, 36,
            35,
          ],
          [0, 4],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 4, 4, 5, 0],
          [0, 8, 0, 11, 162e5, 42, 0, 11, 44, 43],
          [4],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4],
          [
            0, 11, 0, 11, 108e5, 37, 34, 30, 0, 33, 34, 31, 34, 27, 0, 11, 36,
            35, 0, 11, 0, 11, 108e5, 54e5, 0, 8, 0, 11, 162e5, 42,
          ],
          [0, 4, 18, 22, 23, 28],
          1,
        ],
      ],
      11: [
        [0, 2, 34, 2, 26, null, [0, 0, 0, 2, 6]],
        [0, 3, 0, 2, 30, null, [1, 0, 0, 2, 5]],
        [0, 2, 34, 4, 0, [2, 0, 0, 2, 18], null],
      ],
      48: [
        [0, 108e5, 0, 0, 2, 39],
        [0, 54e5, 2, 34, 2, 31],
        [0, 0, 3, 0, 2, 33],
        [0, 0, 2, 34, 2, 30],
        [0, 0, 3, 0, 2, 40],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 3, 0, 0, 1],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 3],
        [16, 0, 0, 1, 1, 2, 5],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 2, 3, 2, 7, 0, 1e5],
        [2, 2, 3, 2, 6, 0, 1e5],
        [17, 2, 8, 2, 9, 0, 4],
        [1, 2, 4, 0, 0, 2, 10],
        [2, 2, 11, 0, 2, 0, 1],
        [2, 2, 12, 2, 12, 0, 1],
        [2, 2, 8, 2, 8, 0, 1],
        [1, 2, 13, 0, 0, 2, 14],
        [14, 2, 15, 0, 0, 0, 0],
        [2, 2, 16, 3, 0, 2, 12],
        [2, 0, 1e5, 2, 17, 2, 3],
        [16, 0, 0, 1, 2, 2, 18],
        [2, 2, 3, 2, 19, 0, 1e5],
        [1, 2, 11, 2, 8, 0, 0],
        [2, 2, 20, 2, 20, 0, 1],
        [1, 2, 2, 0, 0, 2, 22],
        [14, 2, 23, 0, 0, 0, 0],
        [2, 2, 24, 2, 11, 3, 0],
        [1, 2, 11, 2, 25, 0, 0],
        [1, 2, 21, 2, 25, 0, 0],
        [1, 2, 9, 0, 0, 2, 8],
        [2, 2, 28, 0, 1, 0, 2],
        [1, 2, 26, 0, 0, 2, 29],
        [1, 2, 27, 2, 29, 0, 0],
        [2, 2, 9, 0, 1, 0, 2],
        [1, 4, 0, 0, 0, 2, 32],
        [1, 3, 0, 0, 0, 2, 20],
        [9, 2, 20, 2, 25, 0, 0],
        [1, 0, 108e5, 0, 0, 2, 35],
        [1, 0, 0, 0, 0, 2, 35],
        [1, 3, 0, 0, 0, 2, 17],
        [17, 2, 11, 2, 21, 0, 2],
        [2, 2, 8, 0, 1, 0, 2],
        [9, 2, 17, 2, 40, 0, 0],
        [1, 2, 41, 0, 0, 0, 54e5],
        [1, 0, 54e5, 2, 41, 0, 0],
        [1, 0, 108e5, 0, 0, 2, 41],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 25e3,
      40: [0, 0, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 1, 2, 4, 4, 4, 4, 1, 2, 5, 0],
          [33, 0, 31, 34, 27, 34, 11, 1, 43, 44, 11, 1, 45, 41, 30, 34],
          [1],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [11, 1, 11, 1, 54e5, 54e5, 8, 0, 11, 1, 108e5, -54e5],
          [4, 5, 7, 10, 11],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4],
          [
            38, 37, 11, 1, 45, 41, 30, 34, 33, 0, 31, 34, 27, 34, 11, 1, 43, 35,
            11, 1, 11, 1, 54e5, 54e5, 8, 0, 11, 1, 108e5, -54e5,
          ],
          [9, 22, 23, 25, 28, 29],
          1,
        ],
      ],
      11: [
        [0, 2, 27, 2, 34, [0, 0, 0, 2, 46], null],
        [0, 2, 30, 0, 0, [1, 0, 0, 2, 6], null],
        [0, 3, 0, 2, 34, null, [2, 0, 0, 2, 18]],
      ],
      48: [
        [0, 162e5, 2, 33, 0, 0],
        [0, 162e5, 2, 30, 2, 34],
        [0, 162e5, 2, 39, 0, 0],
        [0, 54e5, 2, 38, 4, 0],
        [0, 0, 2, 31, 2, 34],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 4, 0, 4, 0, 0, 1],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 0, 0, 1e5],
        [2, 2, 4, 2, 7, 0, 1e5],
        [17, 2, 8, 2, 9, 0, 4],
        [1, 2, 5, 0, 0, 2, 10],
        [2, 2, 11, 0, 2, 0, 1],
        [2, 2, 12, 2, 12, 0, 1],
        [2, 2, 8, 2, 8, 0, 1],
        [1, 2, 13, 0, 0, 2, 14],
        [14, 2, 15, 0, 0, 0, 0],
        [2, 2, 16, 4, 0, 2, 12],
        [2, 0, 1e5, 2, 17, 2, 4],
        [16, 0, 0, 1, 2, 2, 18],
        [2, 2, 4, 1, 2, 0, 1e5],
        [1, 2, 11, 2, 8, 0, 0],
        [2, 2, 20, 2, 20, 0, 1],
        [1, 2, 3, 0, 0, 2, 22],
        [14, 2, 23, 0, 0, 0, 0],
        [2, 2, 24, 2, 11, 4, 0],
        [1, 2, 11, 2, 25, 0, 0],
        [1, 2, 21, 2, 25, 0, 0],
        [1, 2, 9, 0, 0, 2, 8],
        [2, 2, 28, 0, 1, 0, 2],
        [1, 2, 26, 0, 0, 2, 29],
        [1, 2, 27, 2, 29, 0, 0],
        [2, 2, 9, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 32],
        [1, 0, 0, 2, 20, 0, 0],
        [9, 2, 20, 2, 25, 0, 0],
        [1, 0, 0, 0, 0, 2, 35],
        [1, 0, 0, 2, 17, 0, 0],
        [17, 2, 11, 2, 21, 0, 2],
        [2, 2, 8, 0, 1, 0, 2],
        [9, 2, 17, 2, 39, 0, 0],
        [1, 2, 40, 0, 0, 2, 35],
        [1, 0, 0, 0, 0, 2, 41],
        [1, 0, 54e5, 0, 0, 2, 35],
        [1, 2, 35, 2, 40, 0, 0],
        [1, 0, 54e5, 0, 0, 2, 40],
        [16, 0, 0, 2, 7, 0, 1e5],
      ],
    },
    {
      0: 105146,
      37: 38453,
      40: [2, 12, 2, 6, 2, 15, 2, 7],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 12, 6, 13, 5, 14, 5, 15, 6, 1, 0, 15, 7, 14, 8, 13, 8, 12, 7],
          [0],
          1,
        ],
      ],
      48: [
        [0, 0, 2, 15, 2, 6],
        [0, 0, 3, 0, 2, 0],
        [0, 0, 2, 15, 2, 7],
        [0, 54e5, 2, 14, 2, 8],
        [0, 54e5, 2, 13, 2, 8],
        [0, 108e5, 2, 12, 2, 7],
        [0, 108e5, 0, 0, 2, 0],
        [0, 108e5, 2, 12, 2, 6],
        [0, 162e5, 2, 13, 2, 5],
        [0, 162e5, 2, 14, 2, 5],
      ],
      10: [
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 0, 1, 0, 0, 1e5],
        [10, 2, 2, 0, 432e4, 0, 0],
        [10, 2, 2, 0, 216e4, 0, 0],
        [1, 2, 0, 0, 0, 2, 3],
        [1, 2, 0, 0, 0, 2, 4],
        [1, 2, 0, 2, 4, 0, 0],
        [1, 2, 0, 2, 3, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [11, 2, 9, 0, 216e4, 0, 0],
        [11, 2, 9, 0, 432e4, 0, 0],
        [1, 2, 9, 0, 0, 2, 10],
        [1, 2, 9, 0, 0, 2, 11],
        [1, 2, 9, 2, 11, 0, 0],
        [1, 2, 9, 2, 10, 0, 0],
      ],
    },
    {
      0: 5e4,
      40: [0, 0, 0, 0, 2, 5, 2, 8],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 6, 3, 0, 1, 0, 0, 2],
          [1, 2, 4, 7],
          0,
        ],
      ],
      11: [[0, 0, 0, 2, 6, null, [0, 0, 0, 0, 1e5]]],
      48: [
        [0, 0, 2, 9, 2, 10],
        [0, 108e5, 0, 0, 2, 8],
        [0, 108e5, 2, 4, 2, 7],
        [0, 162e5, 2, 5, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 0, 0, 1e5],
        [2, 2, 3, 0, 1, 0, 2],
        [17, 2, 3, 3, 0, 0, 2],
        [2, 4, 0, 2, 0, 0, 1e5],
        [2, 2, 6, 0, 1, 0, 2],
        [17, 2, 6, 4, 0, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      37: 48768,
      38: 48768,
      40: [2, 2, 2, 3, 2, 4, 2, 5],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 7, 6, 0, 0, 7, 6, 1],
          [0, 3],
          1,
        ],
      ],
      48: [
        [0, 162e5, 2, 6, 0, 0],
        [0, 108e5, 0, 0, 2, 7],
        [0, 54e5, 2, 6, 4, 0],
        [0, 0, 3, 0, 2, 7],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 4],
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      40: [2, 2, 2, 6, 2, 5, 2, 9],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            0, 7, 2, 6, 3, 0, 4, 0, 5, 6, 0, 7, 0, 8, 5, 9, 4, 1, 3, 1, 2, 9, 0,
            8,
          ],
          [0, 5, 7, 22],
          1,
        ],
      ],
      48: [
        [0, 0, 2, 5, 2, 6],
        [0, 0, 3, 0, 2, 7],
        [0, 0, 3, 0, 2, 8],
        [0, 0, 2, 5, 2, 9],
        [0, 54e5, 2, 4, 4, 0],
        [0, 54e5, 2, 3, 4, 0],
        [0, 108e5, 2, 2, 2, 9],
        [0, 108e5, 0, 0, 2, 8],
        [0, 108e5, 0, 0, 2, 7],
        [0, 108e5, 2, 2, 2, 6],
        [0, 162e5, 2, 3, 0, 0],
        [0, 162e5, 2, 4, 0, 0],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 2894, 0, 21600],
        [2, 3, 0, 0, 7906, 0, 21600],
        [2, 3, 0, 0, 13694, 0, 21600],
        [2, 3, 0, 0, 18706, 0, 21600],
        [2, 4, 0, 0, 2894, 0, 21600],
        [2, 4, 0, 0, 7906, 0, 21600],
        [2, 4, 0, 0, 13694, 0, 21600],
        [2, 4, 0, 0, 18706, 0, 21600],
      ],
    },
    {
      0: 25e3,
      40: [2, 9, 2, 11, 2, 10, 2, 12],
      12: [
        [
          1,
          1,
          [
            0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0, 0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5,
            0,
          ],
          [
            0, 3, 2, 3, 108e5, 54e5, 2, 3, 162e5, 54e5, 2, 3, 0, 54e5, 2, 3,
            54e5, 54e5, 4, 3, 5, 6, 108e5, -54e5, 5, 6, 54e5, -54e5, 5, 6, 0,
            -54e5, 5, 6, 162e5, -54e5,
          ],
          [0, 4, 5, 8, 9, 12, 13, 16, 17, 22, 23, 26, 27, 30, 31, 34, 35],
          1,
        ],
      ],
      11: [[1, 2, 4, 2, 3, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 162e5, 2, 9, 2, 11],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 9, 2, 12],
        [0, 54e5, 2, 2, 4, 0],
        [0, 54e5, 2, 10, 2, 12],
        [0, 0, 3, 0, 2, 3],
        [0, 162e5, 2, 10, 2, 11],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 1, 2, 0, 0, 1e5],
        [1, 2, 2, 0, 0, 2, 4],
        [1, 2, 3, 0, 0, 2, 4],
        [11, 2, 2, 0, 27e5, 0, 0],
        [10, 2, 3, 0, 27e5, 0, 0],
        [1, 2, 2, 0, 0, 2, 7],
        [1, 2, 2, 2, 7, 0, 0],
        [1, 2, 3, 0, 0, 2, 8],
        [1, 2, 3, 2, 8, 0, 0],
      ],
    },
    {
      0: 6250,
      1: 0,
      40: [2, 31, 2, 33, 2, 32, 2, 34],
      12: [
        [
          1,
          1,
          [0, 2, 3, 6, 3, 6, 1, 2, 3, 6, 3, 6, 5, 0],
          [
            13, 2, 17, 4, 19, 5, 20, 2, 21, 4, 22, 5, 15, 2, 24, 6, 29, 8, 28,
            7, 27, 6, 26, 8, 25, 7, 23, 6,
          ],
          [],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 2, null, [0, 0, 0, 0, 12500]],
        [0, 2, 37, 4, 0, [1, 0, -1e4, 0, 1e4], null],
      ],
      48: [
        [0, 162e5, 2, 27, 2, 2],
        [0, 108e5, 2, 11, 2, 36],
        [0, 54e5, 2, 20, 2, 6],
        [0, 0, 2, 30, 2, 36],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 12500],
        [16, 0, -1e4, 1, 1, 0, 1e4],
        [2, 4, 0, 2, 0, 0, 1e5],
        [2, 2, 2, 0, 10, 0, 3],
        [1, 2, 2, 0, 0, 2, 3],
        [1, 2, 2, 2, 3, 0, 0],
        [1, 4, 0, 0, 0, 2, 2],
        [1, 2, 6, 0, 0, 2, 3],
        [1, 2, 6, 2, 3, 0, 0],
        [2, 3, 0, 2, 1, 0, 1e5],
        [2, 3, 0, 2, 1, 0, 5e4],
        [4, 2, 9, 0, 0, 0, 0],
        [7, 2, 10, 0, 0, 2, 10],
        [1, 0, 0, 0, 0, 2, 12],
        [7, 2, 10, 2, 10, 0, 0],
        [1, 3, 0, 0, 0, 2, 14],
        [17, 2, 12, 2, 15, 0, 6],
        [1, 2, 13, 2, 16, 0, 0],
        [17, 2, 12, 2, 15, 0, 3],
        [1, 2, 13, 2, 18, 0, 0],
        [17, 2, 13, 2, 15, 0, 2],
        [1, 2, 20, 2, 16, 0, 0],
        [17, 2, 21, 2, 15, 0, 2],
        [1, 0, 0, 2, 14, 0, 0],
        [1, 3, 0, 2, 12, 0, 0],
        [1, 2, 23, 2, 16, 0, 0],
        [1, 2, 23, 2, 18, 0, 0],
        [17, 2, 23, 2, 24, 0, 2],
        [1, 2, 27, 2, 16, 0, 0],
        [17, 2, 28, 2, 24, 0, 2],
        [1, 3, 0, 0, 0, 2, 11],
        [6, 2, 13, 2, 23, 0, 0],
        [5, 2, 15, 2, 24, 0, 0],
        [2, 4, 0, 2, 0, 0, 5e4],
        [1, 4, 0, 0, 0, 2, 33],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 35, 2, 9, 0, 0],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      37: 18288,
      40: [2, 10, 0, 0, 2, 11, 2, 13],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 9, 10, 9, 10, 0, 11, 0, 11, 9, 1, 9, 5, 2],
          [0, 5, 7],
          1,
        ],
      ],
      11: [
        [0, 2, 10, 0, 0, [0, 0, 0, 0, 1e5], null],
        [0, 0, 0, 2, 9, null, [1, 0, 0, 2, 6]],
      ],
      48: [
        [0, 162e5, 2, 5, 0, 0],
        [0, 108e5, 0, 0, 2, 9],
        [0, 54e5, 2, 5, 4, 0],
        [0, 0, 3, 0, 2, 9],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 4, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 8],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 10, 2, 8, 2, 5],
        [1, 2, 9, 2, 12, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 64977,
      40: [0, 0, 0, 0, 2, 0, 2, 21],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5,
            0,
          ],
          [
            0, 0, 0, 0, 0, 21, 17, 21, 17, 20, 18, 20, 3, 1, 15, 20, 16, 20, 16,
            21, 0, 21,
          ],
          [0, 1, 3, 20],
          1,
        ],
      ],
      11: [
        [0, 2, 16, 2, 20, [0, 0, 0, 2, 6], null],
        [0, 2, 15, 4, 0, [1, 0, 0, 2, 4], null],
        [0, 3, 0, 2, 20, null, [2, 0, 0, 2, 8]],
        [0, 0, 0, 2, 21, null, [3, 0, 0, 2, 11]],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 22],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 22],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 4],
        [2, 2, 5, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 0, 1e5, 4, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 8],
        [2, 2, 9, 2, 2, 4, 0],
        [1, 0, 1e5, 0, 0, 2, 10],
        [16, 0, 0, 1, 3, 2, 11],
        [2, 2, 2, 2, 5, 0, 1e5],
        [2, 2, 2, 2, 7, 0, 2e5],
        [1, 2, 3, 0, 0, 2, 13],
        [1, 2, 3, 0, 0, 2, 14],
        [1, 2, 3, 2, 14, 0, 0],
        [1, 2, 3, 2, 13, 0, 0],
        [2, 2, 2, 2, 9, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 19],
        [2, 4, 0, 2, 12, 0, 1e5],
        [2, 2, 21, 0, 1, 0, 2],
      ],
    },
    {
      0: 16667,
      40: [0, 0, 0, 0, 2, 1, 2, 10],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 1, 0, 1, 10, 8, 2, 0, 2],
          [0, 1, 3, 8],
          1,
        ],
        [3, 0, [0, 2, 1, 2, 1, 2, 5, 0], [8, 2, 9, 11, 1, 10], [], 1],
        [
          0,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
          [8, 2, 9, 11, 1, 10, 8, 2, 0, 2, 0, 0, 1, 0, 1, 10],
          [8, 10, 11, 13],
          1,
        ],
      ],
      11: [[0, 2, 8, 4, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [2, 2, 6, 0, 1, 0, 5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 2, 8, 2, 7, 0, 0],
        [1, 4, 0, 0, 0, 2, 6],
        [1, 2, 10, 2, 7, 0, 0],
      ],
    },
    {
      0: 12500,
      40: [2, 6, 2, 6, 2, 7, 2, 8],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 1, 0, 1, 2, 0, 2, 6, 6, 6, 8, 7, 8, 7, 6],
          [0, 1, 3, 6],
          1,
        ],
      ],
      11: [[0, 2, 6, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 6],
      ],
    },
    {
      0: 33333,
      1: 33333,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 14, 12, 7, 12, 7, 16, 0, 1],
          [0, 1, 3, 10],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 12, null, [0, 0, 0, 2, 10]],
        [0, 2, 7, 0, 0, [1, 0, 0, 2, 5], null],
      ],
      48: [
        [0, 0, 2, 19, 2, 20],
        [0, 54e5, 2, 17, 2, 18],
        [0, 108e5, 0, 0, 2, 3],
        [0, 162e5, 2, 4, 0, 0],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 5],
        [2, 2, 2, 2, 6, 0, 1e5],
        [2, 4, 0, 2, 7, 3, 0],
        [1, 4, 0, 0, 0, 2, 8],
        [2, 0, 1e5, 2, 9, 2, 2],
        [16, 0, 0, 1, 0, 2, 10],
        [2, 2, 2, 2, 11, 0, 1e5],
        [2, 2, 12, 3, 0, 4, 0],
        [1, 3, 0, 0, 0, 2, 13],
        [2, 2, 7, 4, 0, 3, 0],
        [1, 4, 0, 0, 0, 2, 15],
        [2, 2, 7, 0, 1, 0, 2],
        [17, 2, 16, 4, 0, 0, 2],
        [17, 2, 14, 3, 0, 0, 2],
        [2, 2, 12, 0, 1, 0, 2],
      ],
    },
    {
      40: [2, 2, 2, 12, 2, 3, 2, 10],
      12: [
        [
          1,
          1,
          [0, 2, 3, 6, 3, 6, 5, 0],
          [4, 12, 8, 13, 9, 12, 4, 5, 6, 12, 7, 13, 4, 12],
          [],
          1,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 2, 12],
        [0, 54e5, 2, 4, 4, 0],
      ],
      10: [
        [2, 3, 0, 0, 49, 0, 48],
        [2, 3, 0, 0, 10, 0, 48],
        [2, 3, 0, 0, 1, 0, 6],
        [2, 3, 0, 0, 5, 0, 6],
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [1, 2, 4, 0, 0, 2, 0],
        [1, 2, 4, 0, 0, 2, 1],
        [1, 2, 4, 2, 1, 0, 0],
        [1, 2, 4, 2, 0, 0, 0],
        [2, 4, 0, 0, 2, 0, 3],
        [2, 4, 0, 0, 1, 0, 3],
        [2, 4, 0, 0, 1, 0, 4],
        [1, 0, 0, 0, 0, 2, 11],
      ],
    },
    {
      0: 102572,
      1: 105210,
      37: 37514,
      40: [2, 12, 2, 17, 2, 15, 2, 20],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [11, 18, 12, 17, 0, 0, 15, 17, 16, 18, 14, 19, 13, 19],
          [5],
          1,
        ],
      ],
      48: [
        [0, 0, 2, 15, 2, 17],
        [0, 0, 2, 16, 2, 18],
        [0, 54e5, 2, 14, 2, 19],
        [0, 54e5, 2, 13, 2, 19],
        [0, 108e5, 2, 11, 2, 18],
        [0, 108e5, 2, 12, 2, 17],
        [0, 162e5, 2, 0, 0, 0],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 0, 1, 0, 0, 1e5],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 2, 0, 97493, 0, 1e5],
        [2, 2, 2, 0, 78183, 0, 1e5],
        [2, 2, 2, 0, 43388, 0, 1e5],
        [2, 2, 3, 0, 62349, 0, 1e5],
        [2, 2, 3, 0, 22252, 0, 1e5],
        [2, 2, 3, 0, 90097, 0, 1e5],
        [1, 2, 0, 0, 0, 2, 5],
        [1, 2, 0, 0, 0, 2, 6],
        [1, 2, 0, 0, 0, 2, 7],
        [1, 2, 0, 2, 7, 0, 0],
        [1, 2, 0, 2, 6, 0, 0],
        [1, 2, 0, 2, 5, 0, 0],
        [1, 2, 4, 0, 0, 2, 8],
        [1, 2, 4, 2, 9, 0, 0],
        [1, 2, 4, 2, 10, 0, 0],
        [1, 4, 0, 0, 0, 2, 17],
      ],
    },
    {
      0: 25e3,
      1: 115470,
      37: 42220,
      40: [2, 19, 2, 20, 2, 21, 2, 22],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 9, 4, 10, 4, 1, 0, 10, 5, 9, 5],
          [0],
          1,
        ],
      ],
      11: [[0, 2, 9, 0, 0, [0, 0, 0, 2, 7], null]],
      48: [
        [0, 0, 3, 0, 2, 0],
        [0, 54e5, 2, 10, 2, 5],
        [0, 54e5, 2, 9, 2, 5],
        [0, 108e5, 0, 0, 2, 0],
        [0, 162e5, 2, 9, 2, 4],
        [0, 162e5, 2, 10, 2, 4],
      ],
      10: [
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 0, 1, 1, 0, 1e5],
        [10, 2, 2, 0, 36e5, 0, 0],
        [1, 2, 0, 0, 0, 2, 3],
        [1, 2, 0, 2, 3, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 0, 5e4, 3, 0, 2, 6],
        [16, 0, 0, 1, 0, 2, 7],
        [2, 2, 6, 2, 8, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [2, 2, 7, 0, -1, 0, 2],
        [1, 2, 8, 2, 11, 0, 0],
        [7, 2, 12, 0, 4, 0, 2],
        [7, 2, 12, 0, 3, 0, 2],
        [7, 2, 12, 2, 11, 0, 0],
        [17, 2, 8, 2, 15, 2, 11],
        [2, 2, 16, 2, 14, 0, -1],
        [1, 2, 13, 2, 17, 0, 0],
        [2, 3, 0, 2, 18, 0, 24],
        [2, 4, 0, 2, 18, 0, 24],
        [1, 3, 0, 0, 0, 2, 19],
        [1, 4, 0, 0, 0, 2, 20],
      ],
    },
    {
      0: 5e4,
      38: 18288,
      40: [0, 0, 0, 0, 2, 8, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 7, 0, 0, 3, 7, 1, 0, 1],
          [0, 1, 3, 8],
          1,
        ],
      ],
      11: [[0, 2, 7, 0, 0, [0, 0, 0, 2, 4], null]],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 0, 2, 4],
        [2, 2, 2, 2, 5, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [17, 2, 7, 3, 0, 0, 2],
        [2, 2, 7, 0, 1, 0, 2],
      ],
    },
    {
      0: 12500,
      40: [2, 5, 2, 5, 2, 14, 2, 10],
      12: [
        [
          1,
          0,
          [
            0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4,
            4, 5, 0, 0, 2, 4, 4, 4, 4, 5, 0,
          ],
          [
            2, 6, 6, 6, 0, 54e5, 14, 6, 7, 7, 0, 108e5, 13, 5, 6, 5, 6, 6,
            162e5, -54e5, 0, 11, 6, 6, 108e5, -108e5, 5, 10, 14, 10, 6, 6, 54e5,
            -54e5, 6, 9, 6, 6, 54e5, -54e5, 7, 7, 0, -108e5,
          ],
          [4, 5, 10, 11, 18, 19, 20, 24, 25, 32, 33, 38, 39, 42, 43],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 4, 4, 5, 0, 0, 2, 4, 4, 4, 4, 5, 0],
          [
            6, 9, 6, 6, 54e5, -54e5, 7, 7, 0, -108e5, 14, 5, 6, 6, 54e5, -162e5,
            7, 7, 108e5, -108e5,
          ],
          [4, 5, 8, 9, 14, 15, 18, 19],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 4, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4, 4, 5, 0, 0,
            2, 1, 2, 4, 4, 0, 2, 1, 2, 4, 4, 0, 2, 1, 2, 4, 4, 4, 4, 0, 2, 1, 2,
          ],
          [
            0, 8, 6, 6, 108e5, 54e5, 13, 5, 13, 6, 6, 6, 108e5, 108e5, 2, 12, 6,
            6, 0, 54e5, 5, 10, 5, 11, 6, 6, 0, 108e5, 13, 5, 14, 5, 6, 6, 54e5,
            -54e5, 14, 5, 14, 6, 7, 7, 0, 108e5, 6, 9, 6, 8, 7, 7, 108e5, 108e5,
            6, 6, 0, 108e5, 5, 8, 5, 10,
          ],
          [0, 4, 5, 12, 13, 18, 19, 26, 27, 34, 35, 42, 43, 50, 51, 54, 55],
          1,
        ],
      ],
      11: [[0, 2, 5, 0, 0, [0, 0, 0, 0, 25e3], null]],
      48: [
        [0, 162e5, 2, 4, 2, 5],
        [0, 108e5, 0, 0, 2, 1],
        [0, 54e5, 2, 4, 2, 10],
        [0, 0, 3, 0, 2, 1],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 25e3],
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [2, 2, 5, 0, 1, 0, 2],
        [2, 2, 5, 0, 1, 0, 4],
        [1, 2, 5, 2, 6, 0, 0],
        [1, 2, 5, 2, 5, 0, 0],
        [1, 4, 0, 0, 0, 2, 5],
        [1, 4, 0, 0, 0, 2, 6],
        [1, 2, 10, 0, 0, 2, 6],
        [1, 3, 0, 0, 0, 2, 5],
        [1, 3, 0, 0, 0, 2, 6],
      ],
    },
    {
      8: 21600,
      9: 21600,
      40: [2, 0, 2, 4, 2, 2, 2, 6],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 5, 0,
          ],
          [
            10800, 5800, 14522, 0, 14155, 5325, 18380, 4457, 16702, 7315, 21097,
            8137, 17607, 10475, 21600, 13290, 16837, 12942, 18145, 18095, 14020,
            14457, 13247, 19737, 10532, 14935, 8485, 21600, 7715, 15627, 4762,
            17617, 5667, 13937, 135, 14587, 3722, 11775, 0, 8615, 4627, 7617,
            370, 2295, 7312, 6320, 8352, 2295,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 1, 4, 0],
        [0, 0, 3, 0, 2, 7],
      ],
      10: [
        [2, 3, 0, 0, 4627, 0, 21600],
        [2, 3, 0, 0, 8485, 0, 21600],
        [2, 3, 0, 0, 16702, 0, 21600],
        [2, 3, 0, 0, 14522, 0, 21600],
        [2, 4, 0, 0, 6320, 0, 21600],
        [2, 4, 0, 0, 8615, 0, 21600],
        [2, 4, 0, 0, 13937, 0, 21600],
        [2, 4, 0, 0, 13290, 0, 21600],
      ],
    },
    {
      8: 21600,
      9: 21600,
      40: [2, 1, 2, 5, 2, 3, 2, 9],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            11462, 4342, 14790, 0, 14525, 5777, 18007, 3172, 16380, 6532, 21600,
            6645, 16985, 9402, 18270, 11290, 16380, 12310, 18877, 15632, 14640,
            14350, 14942, 17370, 12180, 15935, 11612, 18842, 9872, 17370, 8700,
            19712, 7527, 18125, 4917, 21600, 4805, 18240, 1285, 17825, 3330,
            15370, 0, 12877, 3935, 11592, 1172, 8270, 5372, 7817, 4502, 3625,
            8550, 6382, 9722, 1887,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 2, 4],
        [0, 108e5, 0, 0, 2, 6],
        [0, 54e5, 2, 2, 2, 8],
        [0, 0, 3, 0, 2, 10],
      ],
      10: [
        [2, 3, 0, 0, 9722, 0, 21600],
        [2, 3, 0, 0, 5372, 0, 21600],
        [2, 3, 0, 0, 11612, 0, 21600],
        [2, 3, 0, 0, 14640, 0, 21600],
        [2, 4, 0, 0, 1887, 0, 21600],
        [2, 4, 0, 0, 6382, 0, 21600],
        [2, 4, 0, 0, 12877, 0, 21600],
        [2, 4, 0, 0, 19712, 0, 21600],
        [2, 4, 0, 0, 18842, 0, 21600],
        [2, 4, 0, 0, 15935, 0, 21600],
        [2, 4, 0, 0, 6645, 0, 21600],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      38: 18288,
      40: [2, 13, 2, 10, 2, 1, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 5, 9, 0, 9, 10, 1, 10, 1, 11, 9, 11, 9, 2],
          [0, 3],
          1,
        ],
      ],
      11: [
        [0, 3, 0, 2, 10, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 9, 0, 0, [1, 0, 0, 2, 6], null],
      ],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 0, 0, 2, 8, 0, 0],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 10, 2, 8, 2, 5],
        [1, 2, 9, 0, 0, 2, 12],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 64977,
      38: 24384,
      40: [2, 21, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5,
            0,
          ],
          [
            0, 3, 19, 15, 19, 16, 21, 16, 21, 0, 0, 0, 0, 1, 21, 1, 21, 17, 19,
            17, 19, 18,
          ],
          [0, 9, 11],
          1,
        ],
      ],
      11: [
        [0, 2, 19, 2, 16, null, [0, 0, 0, 2, 6]],
        [0, 0, 0, 2, 15, null, [1, 0, 0, 2, 4]],
        [0, 2, 19, 0, 0, [2, 0, 0, 2, 8], null],
        [0, 2, 21, 4, 0, [3, 0, 0, 2, 11], null],
      ],
      48: [
        [0, 162e5, 2, 22, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 22, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 4],
        [2, 2, 5, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 8],
        [2, 2, 9, 2, 2, 3, 0],
        [1, 0, 1e5, 0, 0, 2, 10],
        [16, 0, 0, 1, 3, 2, 11],
        [2, 2, 2, 2, 5, 0, 1e5],
        [2, 2, 2, 2, 7, 0, 2e5],
        [1, 2, 3, 0, 0, 2, 13],
        [1, 2, 3, 0, 0, 2, 14],
        [1, 2, 3, 2, 14, 0, 0],
        [1, 2, 3, 2, 13, 0, 0],
        [2, 2, 2, 2, 9, 0, 1e5],
        [2, 3, 0, 2, 12, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 20],
        [17, 2, 21, 3, 0, 0, 2],
      ],
    },
    {
      0: 8333,
      1: 5e4,
      37: 6096,
      14: 0,
      40: [2, 15, 2, 16, 2, 4, 2, 17],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            4, 5, 8, 11, 54e5, 54e5, 8, 12, 8, 11, 0, -54e5, 8, 11, 54e5, -54e5,
            8, 11, 8, 11, 108e5, 54e5,
          ],
          [4, 5, 10, 11, 14, 15, 20, 21],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4],
          [
            4, 5, 8, 11, 54e5, 54e5, 8, 12, 8, 11, 0, -54e5, 8, 11, 54e5, -54e5,
            8, 11, 8, 11, 108e5, 54e5,
          ],
          [4, 5, 10, 11, 14, 15, 20, 21],
          1,
        ],
      ],
      11: [
        [0, 2, 8, 2, 11, null, [0, 0, 0, 2, 9]],
        [0, 0, 0, 2, 6, null, [1, 0, 0, 0, 1e5]],
      ],
      48: [
        [0, 54e5, 3, 0, 0, 0],
        [0, 108e5, 0, 0, 2, 6],
        [0, 162e5, 3, 0, 4, 0],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 1e5],
        [1, 0, 1e5, 0, 0, 2, 0],
        [5, 2, 1, 2, 0, 0, 0],
        [2, 2, 2, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 1e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 3, 4, 0, 2, 7],
        [16, 0, 0, 1, 0, 2, 9],
        [2, 2, 7, 2, 10, 0, 1e5],
        [1, 2, 6, 2, 11, 0, 0],
        [11, 2, 8, 0, 27e5, 0, 0],
        [10, 2, 11, 0, 27e5, 0, 0],
        [1, 3, 0, 0, 0, 2, 13],
        [1, 2, 11, 0, 0, 2, 14],
        [1, 4, 0, 2, 14, 2, 11],
      ],
    },
    {
      0: 8333,
      37: 3048,
      14: 0,
      40: [2, 3, 2, 11, 2, 0, 2, 12],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 1, 0, 8, 54e5, 54e5, 0, 8, 0, 8, 108e5, 54e5],
          [4, 5, 6, 10, 11],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4],
          [0, 1, 0, 8, 54e5, 54e5, 0, 8, 0, 8, 108e5, 54e5],
          [4, 5, 6, 10, 11],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 8, null, [0, 0, 0, 2, 6]]],
      48: [
        [0, 54e5, 3, 0, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 3, 0, 4, 0],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [11, 3, 0, 0, 27e5, 0, 0],
        [1, 3, 0, 0, 0, 2, 2],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 4],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 8],
        [10, 2, 8, 0, 27e5, 0, 0],
        [1, 2, 8, 0, 0, 2, 10],
        [1, 4, 0, 2, 10, 2, 8],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      37: 45720,
      38: 18288,
      40: [2, 13, 2, 10, 2, 14, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 5, 8, 0, 8, 10, 9, 10, 9, 0, 1, 5, 9, 2, 9, 11, 8, 11, 8, 2],
          [0, 3, 9],
          1,
        ],
      ],
      11: [
        [0, 2, 9, 2, 10, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 8, 0, 0, [1, 0, 0, 2, 6], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 9, 4, 0],
        [0, 54e5, 2, 8, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 8, 0, 0],
        [0, 162e5, 2, 9, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 10, 2, 8, 2, 5],
        [1, 2, 8, 0, 0, 2, 12],
        [1, 2, 9, 2, 12, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 48123,
      37: 48768,
      38: 24384,
      40: [2, 23, 0, 0, 2, 24, 2, 1],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 4, 20, 16, 20, 17, 23, 17, 23, 0, 24, 0, 24, 17, 21, 17, 21, 16,
            0, 4, 21, 19, 21, 18, 24, 18, 24, 1, 23, 1, 23, 18, 20, 18, 20, 19,
          ],
          [0, 9, 11],
          1,
        ],
      ],
      11: [
        [0, 2, 20, 2, 17, null, [0, 0, 0, 2, 7]],
        [0, 0, 0, 2, 16, null, [1, 0, 0, 2, 5]],
        [0, 2, 20, 0, 0, [2, 0, 0, 2, 9], null],
        [0, 2, 23, 4, 0, [3, 0, 0, 2, 12], null],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 5],
        [2, 2, 6, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 7],
        [2, 0, 5e4, 3, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 9],
        [2, 2, 10, 2, 2, 2, 3],
        [1, 0, 1e5, 0, 0, 2, 11],
        [16, 0, 0, 1, 3, 2, 12],
        [2, 2, 2, 2, 6, 0, 1e5],
        [2, 2, 2, 2, 8, 0, 2e5],
        [1, 2, 4, 0, 0, 2, 14],
        [1, 2, 4, 0, 0, 2, 15],
        [1, 2, 4, 2, 15, 0, 0],
        [1, 2, 4, 2, 14, 0, 0],
        [2, 2, 2, 2, 10, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 20],
        [2, 3, 0, 2, 13, 0, 2e5],
        [1, 2, 3, 0, 0, 2, 22],
        [1, 2, 3, 2, 22, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      37: 48768,
      38: 34233,
      40: [2, 23, 2, 21, 2, 24, 2, 22],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 20, 10, 19, 10, 21, 15, 21, 15, 10, 12, 10, 9, 0, 13, 10, 16, 10,
            16, 21, 17, 21, 17, 19, 6, 20, 17, 7, 17, 22, 10, 22, 10, 7,
          ],
          [0, 13],
          1,
        ],
      ],
      11: [
        [0, 2, 15, 2, 10, [0, 0, 0, 2, 1], null],
        [0, 2, 12, 0, 0, [1, 0, 0, 0, 5e4], null],
        [0, 3, 0, 2, 10, null, [2, 0, 0, 2, 4]],
      ],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 0, 0, 2, 20],
        [0, 54e5, 2, 9, 2, 22],
        [0, 0, 3, 0, 2, 20],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 5e4],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [1, 0, 1e5, 0, 0, 2, 1],
        [2, 2, 3, 0, 1, 0, 2],
        [16, 0, 0, 1, 2, 2, 4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 8, 2, 5, 0, 1e5],
        [2, 2, 8, 2, 0, 0, 1e5],
        [1, 2, 9, 0, 0, 2, 11],
        [1, 2, 9, 2, 11, 0, 0],
        [2, 2, 8, 2, 2, 0, 2e5],
        [1, 2, 9, 0, 0, 2, 14],
        [1, 2, 9, 2, 14, 0, 0],
        [1, 3, 0, 0, 0, 2, 10],
        [2, 2, 8, 2, 0, 0, 5e4],
        [1, 4, 0, 0, 0, 2, 18],
        [1, 4, 0, 0, 0, 2, 11],
        [1, 2, 20, 0, 0, 2, 14],
        [1, 2, 20, 2, 14, 0, 0],
        [2, 2, 14, 2, 10, 2, 11],
        [1, 3, 0, 0, 0, 2, 23],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      40: [2, 20, 2, 18, 2, 13, 2, 19],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            0, 14, 8, 11, 8, 18, 16, 18, 16, 8, 10, 8, 13, 0, 5, 8, 17, 8, 17,
            19, 8, 19, 8, 6,
          ],
          [0, 13],
          1,
        ],
      ],
      11: [
        [0, 2, 16, 2, 18, null, [0, 0, 0, 2, 1]],
        [0, 2, 10, 0, 0, [1, 0, 0, 0, 5e4], null],
        [0, 2, 16, 2, 8, null, [2, 0, 0, 2, 3]],
      ],
      48: [
        [0, 162e5, 2, 13, 0, 0],
        [0, 108e5, 2, 10, 2, 8],
        [0, 162e5, 2, 8, 2, 11],
        [0, 108e5, 0, 0, 2, 14],
        [0, 54e5, 2, 8, 4, 0],
        [0, 54e5, 2, 21, 2, 19],
        [0, 0, 2, 17, 2, 22],
        [0, 0, 3, 0, 2, 8],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 5e4],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [1, 0, 1e5, 0, 0, 2, 1],
        [16, 0, 0, 1, 2, 2, 3],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 7, 2, 4, 0, 1e5],
        [2, 2, 7, 2, 0, 0, 5e4],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
        [2, 2, 7, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 12],
        [1, 4, 0, 0, 0, 2, 12],
        [2, 2, 7, 2, 2, 0, 2e5],
        [1, 2, 13, 0, 0, 2, 15],
        [1, 2, 13, 2, 15, 0, 0],
        [1, 2, 14, 0, 0, 2, 15],
        [1, 2, 14, 2, 15, 0, 0],
        [2, 2, 15, 2, 8, 2, 12],
        [17, 2, 8, 2, 17, 0, 2],
        [17, 2, 8, 2, 19, 0, 2],
      ],
    },
    {
      8: 21600,
      9: 21600,
      40: [2, 2, 2, 9, 2, 5, 2, 12],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5,
            0,
          ],
          [
            8472, 0, 12860, 6080, 11050, 6797, 16577, 12007, 14767, 12877,
            21600, 21600, 10012, 14915, 12222, 13987, 5022, 9705, 7602, 8382, 0,
            3890,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 162e5, 0, 0, 2, 7],
        [0, 108e5, 2, 0, 2, 10],
        [0, 108e5, 2, 3, 2, 13],
        [0, 54e5, 3, 0, 4, 0],
        [0, 0, 2, 6, 2, 11],
        [0, 0, 2, 4, 2, 8],
      ],
      10: [
        [2, 3, 0, 0, 5022, 0, 21600],
        [2, 3, 0, 0, 8472, 0, 21600],
        [2, 3, 0, 0, 8757, 0, 21600],
        [2, 3, 0, 0, 10012, 0, 21600],
        [2, 3, 0, 0, 12860, 0, 21600],
        [2, 3, 0, 0, 13917, 0, 21600],
        [2, 3, 0, 0, 16577, 0, 21600],
        [2, 4, 0, 0, 3890, 0, 21600],
        [2, 4, 0, 0, 6080, 0, 21600],
        [2, 4, 0, 0, 7437, 0, 21600],
        [2, 4, 0, 0, 9705, 0, 21600],
        [2, 4, 0, 0, 12007, 0, 21600],
        [2, 4, 0, 0, 14277, 0, 21600],
        [2, 4, 0, 0, 14915, 0, 21600],
      ],
    },
    {
      0: 23520,
      1: 5880,
      2: 11760,
      40: [2, 21, 2, 16, 2, 22, 2, 17],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 5, 0, 0, 2, 4, 4, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [
            15, 19, 11, 11, 162e5, 216e5, 15, 20, 11, 11, 54e5, 216e5, 21, 16,
            22, 16, 22, 17, 21, 17,
          ],
          [4, 5, 10, 11],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 16, null, [0, 0, 1e3, 0, 36745]],
        [0, 3, 0, 2, 18, null, [1, 0, 0, 2, 7]],
        [0, 2, 23, 0, 0, [2, 0, 1e3, 2, 4], null],
      ],
      48: [
        [0, 0, 2, 22, 2, 14],
        [0, 54e5, 2, 15, 2, 20],
        [0, 108e5, 2, 21, 2, 14],
        [0, 162e5, 2, 15, 2, 19],
      ],
      10: [
        [16, 0, 1e3, 1, 0, 0, 36745],
        [1, 0, 0, 0, 0, 2, 0],
        [17, 0, 73490, 2, 1, 0, 4],
        [2, 0, 36745, 3, 0, 4, 0],
        [5, 2, 2, 2, 3, 0, 0],
        [16, 0, 1e3, 1, 2, 2, 4],
        [2, 0, -4, 2, 5, 0, 1],
        [1, 0, 73490, 2, 6, 2, 0],
        [16, 0, 0, 1, 1, 2, 7],
        [2, 4, 0, 2, 0, 0, 2e5],
        [2, 4, 0, 2, 8, 0, 1e5],
        [2, 4, 0, 2, 5, 0, 1e5],
        [2, 3, 0, 0, 73490, 0, 2e5],
        [1, 2, 10, 2, 11, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [1, 2, 14, 0, 0, 2, 9],
        [1, 2, 14, 2, 9, 0, 0],
        [1, 2, 16, 0, 0, 2, 13],
        [1, 2, 18, 0, 0, 2, 11],
        [1, 4, 0, 0, 0, 2, 19],
        [1, 2, 15, 0, 0, 2, 12],
        [1, 2, 15, 2, 12, 0, 0],
        [1, 2, 15, 0, 0, 2, 11],
      ],
    },
    {
      0: 23520,
      1: 11760,
      40: [2, 13, 2, 11, 2, 14, 2, 12],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [13, 11, 14, 11, 14, 9, 13, 9, 13, 10, 14, 10, 14, 12, 13, 12],
          [],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 11, null, [0, 0, 0, 0, 36745]],
        [0, 3, 0, 2, 9, null, [1, 0, 0, 2, 2]],
      ],
      48: [
        [0, 0, 2, 14, 2, 15],
        [0, 0, 2, 14, 2, 16],
        [0, 54e5, 2, 8, 2, 12],
        [0, 108e5, 2, 13, 2, 15],
        [0, 108e5, 2, 13, 2, 16],
        [0, 162e5, 2, 8, 2, 11],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 36745],
        [2, 2, 0, 0, 2, 0, 1],
        [1, 0, 1e5, 0, 0, 2, 1],
        [16, 0, 0, 1, 1, 2, 2],
        [2, 4, 0, 2, 0, 0, 1e5],
        [2, 4, 0, 2, 3, 0, 2e5],
        [2, 3, 0, 0, 73490, 0, 2e5],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [1, 2, 7, 0, 0, 2, 5],
        [1, 2, 7, 2, 5, 0, 0],
        [1, 2, 9, 0, 0, 2, 4],
        [1, 2, 10, 2, 4, 0, 0],
        [1, 2, 8, 0, 0, 2, 6],
        [1, 2, 8, 2, 6, 0, 0],
        [17, 2, 11, 2, 9, 0, 2],
        [17, 2, 10, 2, 12, 0, 2],
      ],
    },
    {
      0: 23520,
      40: [2, 7, 2, 5, 2, 8, 2, 6],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [7, 5, 8, 5, 8, 6, 7, 6], [], 1],
      ],
      11: [[0, 0, 0, 2, 5, null, [0, 0, 0, 0, 1e5]]],
      48: [
        [0, 0, 2, 8, 2, 3],
        [0, 54e5, 2, 4, 2, 6],
        [0, 108e5, 2, 7, 2, 3],
        [0, 162e5, 2, 4, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 2, 0, 0, 2e5],
        [2, 3, 0, 0, 73490, 0, 2e5],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [1, 2, 3, 0, 0, 2, 1],
        [1, 2, 3, 2, 1, 0, 0],
        [1, 2, 4, 0, 0, 2, 2],
        [1, 2, 4, 2, 2, 0, 0],
      ],
    },
    {
      0: 23520,
      40: [2, 18, 2, 21, 2, 26, 2, 32],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            18, 19, 20, 21, 13, 24, 25, 21, 26, 19, 29, 14, 26, 31, 25, 32, 13,
            33, 20, 32, 18, 31, 30, 14,
          ],
          [],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 15, null, [0, 0, 0, 0, 51965]]],
      48: [
        [0, 108e5, 2, 8, 2, 9],
        [0, 162e5, 2, 10, 2, 9],
        [0, 0, 2, 10, 2, 11],
        [0, 54e5, 2, 8, 2, 11],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 51965],
        [9, 3, 0, 4, 0, 0, 0],
        [10, 0, 1, 2, 1, 0, 0],
        [11, 0, 1, 2, 1, 0, 0],
        [15, 0, 1, 2, 1, 0, 0],
        [8, 3, 0, 4, 0, 0, 0],
        [2, 2, 5, 0, 51965, 0, 1e5],
        [1, 2, 5, 0, 0, 2, 6],
        [2, 2, 3, 2, 7, 0, 2],
        [2, 2, 2, 2, 7, 0, 2],
        [1, 3, 0, 0, 0, 2, 8],
        [1, 4, 0, 0, 0, 2, 9],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 12, 2, 0, 0, 1e5],
        [2, 2, 2, 2, 15, 0, 2],
        [2, 2, 3, 2, 15, 0, 2],
        [1, 2, 8, 0, 0, 2, 16],
        [1, 2, 9, 2, 17, 0, 0],
        [1, 2, 8, 2, 16, 0, 0],
        [1, 2, 9, 0, 0, 2, 17],
        [1, 2, 13, 0, 0, 2, 20],
        [2, 2, 22, 2, 4, 0, 1],
        [1, 2, 23, 2, 21, 0, 0],
        [1, 3, 0, 0, 0, 2, 20],
        [1, 3, 0, 0, 0, 2, 18],
        [1, 2, 14, 0, 0, 2, 19],
        [2, 2, 27, 0, 1, 2, 4],
        [1, 2, 26, 0, 0, 2, 28],
        [1, 2, 18, 2, 28, 0, 0],
        [1, 4, 0, 0, 0, 2, 19],
        [1, 4, 0, 0, 0, 2, 21],
        [1, 4, 0, 0, 0, 2, 24],
      ],
    },
    {
      0: 23520,
      1: 66e5,
      2: 11760,
      40: [2, 11, 2, 15, 2, 12, 2, 16],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            11, 15, 23, 15, 42, 46, 41, 45, 33, 15, 12, 15, 12, 13, 34, 13, 35,
            14, 12, 14, 12, 16, 36, 16, 48, 50, 47, 49, 29, 16, 11, 16, 11, 14,
            27, 14, 25, 13, 11, 13,
          ],
          [],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 15, null, [0, 0, 0, 0, 5e4]],
        [1, 2, 42, 0, 0, [1, 0, 42e5, 0, 66e5], null],
        [0, 3, 0, 2, 13, null, [2, 0, 0, 2, 3]],
      ],
      48: [
        [0, 0, 2, 12, 2, 54],
        [0, 0, 2, 12, 2, 55],
        [0, 54e5, 2, 52, 2, 56],
        [0, 108e5, 2, 11, 2, 54],
        [0, 108e5, 2, 11, 2, 55],
        [0, 162e5, 2, 51, 2, 53],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 42e5, 1, 1, 0, 66e5],
        [2, 2, 0, 0, 2, 0, 1],
        [1, 0, 1e5, 0, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 3],
        [2, 4, 0, 2, 0, 0, 1e5],
        [2, 4, 0, 2, 4, 0, 2e5],
        [2, 3, 0, 0, 73490, 0, 2e5],
        [1, 2, 1, 0, 0, 0, 54e5],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 9, 0, 0, 2, 7],
        [1, 2, 9, 2, 7, 0, 0],
        [1, 2, 10, 0, 0, 2, 6],
        [1, 2, 10, 2, 6, 0, 0],
        [1, 2, 13, 0, 0, 2, 5],
        [1, 2, 14, 2, 5, 0, 0],
        [15, 2, 10, 2, 8, 0, 0],
        [8, 2, 17, 2, 10, 0, 0],
        [2, 2, 18, 2, 5, 2, 10],
        [2, 2, 19, 0, 1, 0, 2],
        [1, 2, 9, 2, 17, 2, 20],
        [2, 2, 17, 2, 15, 2, 10],
        [1, 2, 21, 0, 0, 2, 22],
        [2, 2, 17, 2, 13, 2, 10],
        [1, 2, 21, 0, 0, 2, 24],
        [2, 2, 17, 2, 14, 2, 10],
        [1, 2, 21, 0, 0, 2, 26],
        [2, 2, 17, 2, 16, 2, 10],
        [1, 2, 21, 0, 0, 2, 28],
        [2, 2, 17, 0, 2, 0, 1],
        [1, 2, 21, 0, 0, 2, 30],
        [1, 2, 21, 2, 19, 0, 0],
        [1, 2, 23, 2, 19, 0, 0],
        [1, 2, 25, 2, 19, 0, 0],
        [1, 2, 27, 2, 19, 0, 0],
        [1, 2, 29, 2, 19, 0, 0],
        [1, 2, 31, 2, 19, 0, 0],
        [2, 2, 5, 2, 10, 2, 18],
        [1, 2, 21, 2, 38, 0, 0],
        [1, 2, 32, 0, 0, 2, 38],
        [7, 2, 8, 2, 39, 2, 32],
        [7, 2, 8, 2, 21, 2, 40],
        [2, 2, 5, 2, 17, 2, 18],
        [1, 0, 0, 0, 0, 2, 43],
        [7, 2, 8, 2, 43, 0, 0],
        [7, 2, 8, 0, 0, 2, 44],
        [1, 3, 0, 0, 0, 2, 41],
        [1, 3, 0, 0, 0, 2, 42],
        [1, 4, 0, 0, 0, 2, 45],
        [1, 4, 0, 0, 0, 2, 46],
        [17, 2, 41, 2, 42, 0, 2],
        [17, 2, 48, 2, 47, 0, 2],
        [17, 2, 45, 2, 46, 0, 2],
        [17, 2, 15, 2, 13, 0, 2],
        [17, 2, 14, 2, 16, 0, 2],
        [17, 2, 50, 2, 49, 0, 2],
      ],
    },
    {
      0: 23520,
      40: [2, 7, 2, 12, 2, 10, 2, 13],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            7, 12, 8, 12, 8, 11, 9, 11, 9, 12, 10, 12, 10, 13, 9, 13, 9, 14, 8,
            14, 8, 13, 7, 13,
          ],
          [],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 12, null, [0, 0, 0, 0, 73490]]],
      48: [
        [0, 0, 2, 10, 2, 5],
        [0, 54e5, 2, 4, 2, 14],
        [0, 108e5, 2, 7, 2, 5],
        [0, 162e5, 2, 4, 2, 11],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 73490],
        [2, 3, 0, 0, 73490, 0, 2e5],
        [2, 4, 0, 0, 73490, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 2e5],
        [1, 2, 4, 0, 0, 2, 1],
        [1, 2, 4, 0, 0, 2, 6],
        [1, 2, 4, 2, 6, 0, 0],
        [1, 2, 4, 2, 1, 0, 0],
        [1, 2, 5, 0, 0, 2, 2],
        [1, 2, 5, 0, 0, 2, 6],
        [1, 2, 5, 2, 6, 0, 0],
        [1, 2, 5, 2, 2, 0, 0],
      ],
    },
    {
      0: 5e4,
      37: 18288,
      40: [2, 20, 2, 27, 2, 6, 2, 28],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 4, 4, 5, 0],
          [1, 2, 1, 4, 54e5, 108e5, 30, 16, 34, 37],
          [4, 5],
          1,
        ],
      ],
      11: [[0, 2, 6, 2, 4, [0, 0, 0, 0, 87500], null]],
      48: [
        [0, 162e5, 3, 0, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 3, 0, 4, 0],
        [0, 0, 2, 6, 2, 4],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 87500],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [2, 2, 5, 3, 0, 2, 3],
        [1, 2, 3, 0, 0, 2, 5],
        [2, 2, 5, 2, 5, 2, 7],
        [2, 2, 3, 2, 3, 2, 7],
        [2, 2, 9, 0, 2, 0, 1],
        [1, 2, 10, 0, 0, 2, 8],
        [1, 2, 11, 0, 0, 2, 5],
        [2, 2, 12, 3, 0, 2, 3],
        [2, 2, 11, 0, 1, 0, 2],
        [1, 2, 14, 0, 0, 2, 5],
        [2, 2, 15, 2, 4, 2, 3],
        [1, 2, 4, 0, 0, 2, 16],
        [1, 2, 4, 2, 16, 0, 0],
        [2, 2, 5, 0, 9598, 0, 32768],
        [2, 2, 19, 3, 0, 2, 3],
        [1, 2, 3, 0, 0, 2, 19],
        [2, 2, 3, 2, 3, 0, 1],
        [2, 2, 21, 2, 21, 0, 1],
        [1, 2, 22, 0, 0, 2, 23],
        [14, 2, 24, 0, 0, 0, 0],
        [2, 2, 25, 2, 4, 2, 3],
        [1, 2, 4, 0, 0, 2, 26],
        [1, 2, 4, 2, 26, 0, 0],
        [1, 2, 13, 0, 0, 2, 6],
        [2, 2, 29, 0, 1, 0, 2],
        [1, 2, 6, 2, 30, 3, 0],
        [2, 2, 31, 0, -1, 0, 1],
        [2, 2, 4, 0, -1, 0, 1],
        [9, 2, 32, 2, 33, 0, 0],
        [9, 2, 32, 2, 4, 0, 0],
        [1, 2, 35, 0, 0, 0, 216e5],
        [1, 2, 36, 0, 0, 2, 34],
      ],
    },
    {
      0: 18750,
      40: [2, 31, 2, 33, 2, 32, 2, 34],
      12: [
        [
          1,
          1,
          [
            0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0, 0, 2, 4, 4, 5, 0, 0, 2, 4, 4, 5,
            0,
          ],
          [
            0, 5, 4, 5, 108e5, 54e5, 4, 5, 162e5, 54e5, 4, 5, 0, 54e5, 4, 5,
            54e5, 54e5, 25, 26, 7, 8, 17, 16, 27, 28, 7, 8, 18, 16,
          ],
          [0, 4, 5, 8, 9, 12, 13, 16, 17],
          1,
        ],
      ],
      11: [[1, 2, 6, 2, 5, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 162e5, 2, 31, 2, 33],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 31, 2, 34],
        [0, 54e5, 2, 4, 4, 0],
        [0, 54e5, 2, 32, 2, 34],
        [0, 0, 3, 0, 2, 5],
        [0, 162e5, 2, 32, 2, 33],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [9, 3, 0, 4, 0, 0, 0],
        [9, 3, 0, 4, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 2, 4, 0, 0, 2, 6],
        [1, 2, 5, 0, 0, 2, 6],
        [11, 2, 8, 2, 1, 0, 0],
        [10, 2, 7, 2, 1, 0, 0],
        [8, 2, 9, 2, 10, 0, 0],
        [2, 2, 7, 2, 8, 2, 11],
        [2, 2, 6, 0, 1, 0, 2],
        [9, 2, 12, 2, 13, 0, 0],
        [2, 2, 14, 0, 2, 0, 1],
        [1, 0, -108e5, 2, 15, 0, 0],
        [1, 2, 2, 0, 0, 2, 14],
        [1, 2, 17, 0, 0, 0, 108e5],
        [11, 2, 8, 2, 17, 0, 0],
        [10, 2, 7, 2, 17, 0, 0],
        [8, 2, 19, 2, 20, 0, 0],
        [2, 2, 7, 2, 8, 2, 21],
        [11, 2, 22, 2, 17, 0, 0],
        [10, 2, 22, 2, 17, 0, 0],
        [1, 2, 4, 2, 23, 0, 0],
        [1, 2, 5, 2, 24, 0, 0],
        [1, 2, 4, 0, 0, 2, 23],
        [1, 2, 5, 0, 0, 2, 24],
        [11, 2, 4, 0, 27e5, 0, 0],
        [10, 2, 5, 0, 27e5, 0, 0],
        [1, 2, 4, 0, 0, 2, 29],
        [1, 2, 4, 2, 29, 0, 0],
        [1, 2, 5, 0, 0, 2, 30],
        [1, 2, 5, 2, 30, 0, 0],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      38: 18288,
      40: [2, 12, 2, 10, 2, 13, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 10, 9, 10, 9, 0, 1, 5, 9, 2, 9, 11, 0, 11, 12, 5],
          [0, 5, 12],
          1,
        ],
      ],
      11: [
        [0, 3, 0, 2, 10, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 9, 0, 0, [1, 0, 0, 2, 6], null],
      ],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 2, 12, 2, 5],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 3, 2, 8, 2, 5],
        [1, 3, 0, 0, 0, 2, 12],
      ],
    },
    {
      0: 29289,
      40: [2, 7, 2, 7, 2, 8, 2, 9],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 4, 4, 0, 5, 0, 1, 4, 1, 6, 5, 2, 4, 2, 0, 6],
          [0, 3, 5, 14],
          1,
        ],
      ],
      11: [[0, 2, 4, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 0, 3, 0, 2, 4],
        [0, 0, 3, 0, 2, 6],
        [0, 54e5, 2, 5, 4, 0],
        [0, 54e5, 2, 4, 4, 0],
        [0, 108e5, 0, 0, 2, 6],
        [0, 108e5, 0, 0, 2, 4],
        [0, 162e5, 2, 4, 0, 0],
        [0, 162e5, 2, 5, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 4],
        [1, 4, 0, 0, 0, 2, 4],
        [2, 2, 4, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 7],
        [1, 4, 0, 0, 0, 2, 7],
      ],
    },
    {
      0: 25e3,
      37: 48768,
      40: [2, 16, 2, 17, 2, 18, 2, 19],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 8, 0, 1, 0, 10, 0],
          [0, 3, 5],
          1,
        ],
      ],
      11: [[0, 2, 8, 0, 0, [0, 0, 0, 2, 5], null]],
      48: [
        [0, 162e5, 2, 3, 2, 22],
        [0, 162e5, 2, 12, 0, 0],
        [0, 0, 2, 9, 2, 4],
        [0, 54e5, 2, 11, 4, 0],
        [0, 54e5, 2, 3, 2, 21],
        [0, 108e5, 2, 7, 2, 4],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 0, 2, 5],
        [2, 2, 2, 2, 6, 0, 2e5],
        [2, 2, 2, 2, 6, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 7],
        [1, 3, 0, 0, 0, 2, 8],
        [2, 2, 10, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 11],
        [2, 2, 3, 2, 6, 2, 5],
        [2, 0, 5, 2, 6, 2, 5],
        [17, 0, 1, 2, 14, 0, 12],
        [2, 2, 15, 3, 0, 0, 1],
        [2, 2, 15, 4, 0, 0, 1],
        [1, 3, 0, 0, 0, 2, 16],
        [1, 4, 0, 0, 0, 2, 17],
        [2, 4, 0, 2, 3, 2, 8],
        [16, 0, 0, 2, 20, 4, 0],
        [1, 4, 0, 0, 0, 2, 21],
      ],
    },
    {
      0: 105146,
      1: 110557,
      37: 38481,
      40: [2, 10, 2, 15, 2, 11, 2, 14],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [9, 13, 0, 0, 12, 13, 11, 14, 10, 14],
          [3],
          1,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 0, 0],
        [0, 108e5, 2, 9, 2, 13],
        [0, 54e5, 2, 10, 2, 14],
        [0, 54e5, 2, 0, 4, 0],
        [0, 54e5, 2, 11, 2, 14],
        [0, 0, 2, 12, 2, 13],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 0, 1, 0, 0, 1e5],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 1, 1, 1, 0, 1e5],
        [11, 2, 2, 0, 108e4, 0, 0],
        [11, 2, 2, 0, 1836e4, 0, 0],
        [10, 2, 3, 0, 108e4, 0, 0],
        [10, 2, 3, 0, 1836e4, 0, 0],
        [1, 2, 0, 0, 0, 2, 5],
        [1, 2, 0, 0, 0, 2, 6],
        [1, 2, 0, 2, 6, 0, 0],
        [1, 2, 0, 2, 5, 0, 0],
        [1, 2, 4, 0, 0, 2, 7],
        [1, 2, 4, 0, 0, 2, 8],
        [2, 2, 13, 2, 6, 2, 5],
      ],
    },
    {
      0: 0,
      1: 162e5,
      40: [2, 21, 2, 23, 2, 22, 2, 24],
      12: [[1, 1, [0, 2, 4, 4, 1, 2, 5, 0], [11, 12, 5, 6, 0, 4, 5, 6], [], 1]],
      11: [
        [1, 2, 11, 2, 12, [0, 0, 0, 0, 21599999], null],
        [1, 2, 17, 2, 18, [1, 0, 0, 0, 21599999], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 6],
        [0, 54e5, 2, 5, 4, 0],
        [0, 108e5, 0, 0, 2, 6],
        [0, 162e5, 2, 5, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 21599999],
        [16, 0, 0, 1, 1, 0, 21599999],
        [1, 2, 1, 0, 0, 2, 0],
        [1, 2, 2, 0, 216e5, 0, 0],
        [7, 2, 2, 2, 2, 2, 3],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [10, 2, 5, 2, 0, 0, 0],
        [11, 2, 6, 2, 0, 0, 0],
        [12, 2, 5, 2, 8, 2, 7],
        [13, 2, 6, 2, 8, 2, 7],
        [1, 2, 5, 2, 9, 0, 0],
        [1, 2, 6, 2, 10, 0, 0],
        [10, 2, 5, 2, 1, 0, 0],
        [11, 2, 6, 2, 1, 0, 0],
        [12, 2, 5, 2, 14, 2, 13],
        [13, 2, 6, 2, 14, 2, 13],
        [1, 2, 5, 2, 15, 0, 0],
        [1, 2, 6, 2, 16, 0, 0],
        [11, 2, 5, 0, 27e5, 0, 0],
        [10, 2, 6, 0, 27e5, 0, 0],
        [1, 2, 5, 0, 0, 2, 19],
        [1, 2, 5, 2, 19, 0, 0],
        [1, 2, 6, 0, 0, 2, 20],
        [1, 2, 6, 2, 20, 0, 0],
      ],
    },
    {
      0: 16667,
      40: [2, 9, 2, 9, 2, 10, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            0, 6, 6, 6, 54e5, -54e5, 7, 0, 6, 6, 108e5, -54e5, 1, 8, 6, 6,
            162e5, -54e5, 6, 2, 6, 6, 0, -54e5,
          ],
          [0, 4, 5, 7, 10, 11, 16, 17, 22, 23],
          1,
        ],
      ],
      11: [[0, 2, 6, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 6],
        [2, 2, 6, 0, 70711, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
      ],
    },
    {
      0: 25e3,
      40: [2, 10, 2, 12, 2, 11, 2, 13],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            0, 7, 7, 7, 7, 0, 8, 0, 8, 7, 1, 7, 1, 9, 8, 9, 8, 2, 7, 2, 7, 9, 0,
            9,
          ],
          [0, 5, 7, 22],
          1,
        ],
      ],
      11: [[0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 5, 0, 0],
        [0, 108e5, 0, 0, 2, 6],
        [0, 54e5, 2, 5, 4, 0],
        [0, 0, 3, 0, 2, 6],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [1, 3, 0, 0, 0, 4, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 7],
        [1, 4, 0, 0, 0, 2, 7],
        [7, 2, 3, 0, 0, 2, 7],
        [7, 2, 3, 3, 0, 2, 8],
        [7, 2, 3, 2, 7, 0, 0],
        [7, 2, 3, 2, 9, 4, 0],
      ],
    },
    {
      0: 22500,
      1: 22500,
      2: 22500,
      37: 48768,
      38: 48768,
      40: [2, 24, 2, 21, 2, 25, 2, 22],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 5, 0,
          ],
          [
            0, 10, 11, 19, 11, 21, 16, 21, 16, 11, 13, 11, 9, 0, 14, 11, 17, 11,
            17, 21, 18, 21, 18, 19, 6, 10, 18, 20, 18, 22, 17, 22, 17, 23, 14,
            23, 9, 7, 13, 23, 16, 23, 16, 22, 11, 22, 11, 20,
          ],
          [0, 13],
          1,
        ],
      ],
      11: [
        [0, 2, 16, 2, 11, [0, 0, 0, 2, 1], null],
        [0, 2, 13, 0, 0, [1, 0, 0, 0, 5e4], null],
        [0, 3, 0, 2, 11, null, [2, 0, 0, 2, 4]],
      ],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 0, 0, 2, 10],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 10],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 5e4],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [1, 0, 1e5, 0, 0, 2, 1],
        [2, 2, 3, 0, 1, 0, 2],
        [16, 0, 0, 1, 2, 2, 4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 8, 2, 5, 0, 1e5],
        [2, 2, 8, 2, 0, 0, 1e5],
        [1, 2, 9, 0, 0, 2, 12],
        [1, 2, 9, 2, 12, 0, 0],
        [2, 2, 8, 2, 2, 0, 2e5],
        [1, 2, 9, 0, 0, 2, 15],
        [1, 2, 9, 2, 15, 0, 0],
        [1, 3, 0, 0, 0, 2, 11],
        [1, 2, 10, 0, 0, 2, 12],
        [1, 2, 10, 2, 12, 0, 0],
        [1, 2, 10, 0, 0, 2, 15],
        [1, 2, 10, 2, 15, 0, 0],
        [1, 4, 0, 0, 0, 2, 11],
        [2, 2, 15, 2, 11, 2, 12],
        [1, 3, 0, 0, 0, 2, 24],
      ],
    },
    {
      0: 18515,
      1: 18515,
      2: 18515,
      3: 48123,
      37: 48768,
      38: 48768,
      40: [2, 19, 2, 26, 2, 20, 2, 27],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 14, 17, 28, 17, 30, 19, 30, 19, 26, 23, 26, 23, 17, 21, 17, 13,
            0, 22, 17, 24, 17, 24, 26, 20, 26, 20, 30, 18, 30, 18, 28, 8, 14,
            18, 29, 18, 31, 20, 31, 20, 27, 24, 27, 24, 25, 22, 25, 13, 9, 21,
            25, 23, 25, 23, 27, 19, 27, 19, 31, 17, 31, 17, 29,
          ],
          [0, 17],
          1,
        ],
      ],
      11: [
        [0, 2, 23, 2, 17, [0, 0, 0, 2, 1], null],
        [0, 2, 21, 0, 0, [1, 0, 0, 0, 5e4], null],
        [0, 3, 0, 2, 17, null, [2, 0, 0, 2, 3]],
        [0, 0, 0, 2, 26, null, [3, 2, 2, 2, 6]],
      ],
      48: [
        [0, 162e5, 2, 13, 0, 0],
        [0, 108e5, 0, 0, 2, 14],
        [0, 54e5, 2, 13, 4, 0],
        [0, 0, 3, 0, 2, 14],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 5e4],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [1, 0, 5e4, 0, 0, 2, 0],
        [16, 0, 0, 1, 2, 2, 3],
        [2, 2, 4, 0, 2, 0, 1],
        [1, 0, 1e5, 0, 0, 2, 5],
        [16, 2, 2, 1, 3, 2, 6],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 7, 0, 2e5],
        [2, 4, 0, 2, 7, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 12, 2, 0, 0, 1e5],
        [2, 2, 12, 2, 2, 0, 2e5],
        [2, 2, 12, 2, 4, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 17],
        [1, 2, 13, 0, 0, 2, 10],
        [1, 2, 13, 2, 10, 0, 0],
        [1, 2, 13, 0, 0, 2, 15],
        [1, 2, 13, 2, 15, 0, 0],
        [1, 2, 13, 0, 0, 2, 16],
        [1, 2, 13, 2, 16, 0, 0],
        [1, 4, 0, 0, 0, 2, 17],
        [1, 2, 14, 0, 0, 2, 11],
        [1, 2, 14, 2, 11, 0, 0],
        [1, 2, 14, 0, 0, 2, 15],
        [1, 2, 14, 2, 15, 0, 0],
        [1, 2, 14, 0, 0, 2, 16],
        [1, 2, 14, 2, 16, 0, 0],
      ],
    },
    {
      0: 16667,
      1: 5e4,
      37: 48768,
      38: 24384,
      40: [2, 16, 2, 6, 2, 17, 2, 3],
      12: [
        [
          1,
          0,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 0, 22, 0, 14, 9, 162e5, 108e5, 18, 5, 14, 9, 162e5, -108e5, 19,
            6, 14, 9, 54e5, -108e5, 23, 5, 14, 9, 54e5, 108e5, 2, 0, 15, 8, 2,
            7, 17, 7, 17, 10, 14, 9, 0, 54e5, 18, 3, 14, 9, 54e5, 54e5, 16, 7,
            0, 7, 12, 8,
          ],
          [0, 1, 3, 6, 7, 12, 13, 18, 19, 24, 25, 27, 38, 39, 44, 45, 48],
          1,
        ],
        [
          3,
          0,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0, 0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 5,
            0,
          ],
          [
            20, 6, 18, 6, 14, 9, 54e5, 108e5, 22, 5, 14, 9, 54e5, -54e5, 21, 9,
            14, 9, 108e5, -54e5, 19, 5, 14, 9, 162e5, 108e5, 21, 6,
          ],
          [6, 7, 12, 13, 18, 19, 24, 25],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2,
            0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2,
          ],
          [
            0, 0, 22, 0, 14, 9, 162e5, 108e5, 18, 5, 14, 9, 162e5, -108e5, 19,
            6, 14, 9, 54e5, -108e5, 23, 5, 14, 9, 54e5, 108e5, 2, 0, 15, 8, 2,
            7, 17, 7, 17, 10, 14, 9, 0, 54e5, 18, 3, 14, 9, 54e5, 54e5, 16, 7,
            0, 7, 12, 8, 20, 9, 20, 6, 21, 6, 21, 9, 16, 7, 16, 11, 17, 11, 17,
            7,
          ],
          [0, 1, 3, 6, 7, 12, 13, 18, 19, 24, 25, 27, 38, 39, 44, 45, 48],
          1,
        ],
      ],
      11: [
        [0, 2, 13, 2, 6, null, [0, 0, 0, 0, 33333]],
        [0, 2, 16, 0, 0, [1, 0, 25e3, 0, 75e3], null],
      ],
      48: [
        [0, 162e5, 2, 13, 2, 6],
        [0, 108e5, 2, 12, 2, 8],
        [0, 54e5, 2, 13, 4, 0],
        [0, 0, 2, 15, 2, 8],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 33333],
        [16, 0, 25e3, 1, 1, 0, 75e3],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 1, 0, 2e5],
        [2, 4, 0, 2, 0, 0, 2e5],
        [2, 4, 0, 2, 0, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 6],
        [2, 2, 7, 0, 1, 0, 2],
        [2, 4, 0, 2, 0, 0, 4e5],
        [1, 4, 0, 0, 0, 2, 9],
        [1, 2, 6, 0, 0, 2, 9],
        [2, 3, 0, 0, 1, 0, 8],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 32],
        [1, 3, 0, 0, 0, 2, 12],
        [1, 2, 13, 0, 0, 2, 4],
        [1, 2, 13, 2, 4, 0, 0],
        [1, 2, 16, 2, 14, 0, 0],
        [1, 2, 17, 0, 0, 2, 14],
        [1, 2, 16, 2, 12, 0, 0],
        [1, 2, 17, 0, 0, 2, 12],
        [1, 2, 20, 0, 0, 2, 14],
        [1, 2, 21, 2, 14, 0, 0],
      ],
    },
    {
      0: 16667,
      1: 5e4,
      37: 48768,
      38: 24384,
      40: [2, 18, 0, 0, 2, 19, 2, 8],
      12: [
        [
          1,
          0,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 2, 24, 2, 16, 11, 54e5, -108e5, 20, 6, 16, 11, 54e5, 108e5, 21,
            8, 16, 11, 162e5, 108e5, 25, 6, 16, 11, 162e5, -108e5, 3, 2, 17, 10,
            3, 9, 19, 9, 19, 11, 16, 11, 0, -54e5, 20, 0, 16, 11, 162e5, -54e5,
            18, 9, 0, 9, 14, 10,
          ],
          [0, 6, 7, 12, 13, 18, 19, 24, 25, 38, 39, 41, 44, 45, 48],
          1,
        ],
        [
          3,
          0,
          [
            0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 5, 0, 0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 5,
            0,
          ],
          [
            22, 12, 16, 11, 0, -54e5, 20, 6, 16, 11, 54e5, 108e5, 22, 8, 23, 12,
            16, 11, 108e5, 54e5, 21, 6, 16, 11, 54e5, -108e5, 23, 8,
          ],
          [4, 5, 10, 11, 18, 19, 24, 25],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0, 0, 2,
            1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2,
          ],
          [
            0, 2, 14, 10, 0, 9, 18, 9, 18, 11, 16, 11, 108e5, 54e5, 21, 0, 16,
            11, 162e5, 54e5, 19, 9, 19, 9, 3, 9, 17, 10, 3, 2, 25, 2, 16, 11,
            54e5, 108e5, 21, 6, 16, 11, 54e5, -108e5, 20, 8, 16, 11, 162e5,
            -108e5, 24, 6, 16, 11, 162e5, 108e5, 22, 8, 22, 12, 23, 12, 23, 8,
            18, 13, 18, 9, 19, 9, 19, 13,
          ],
          [0, 4, 12, 13, 15, 18, 19, 34, 35, 40, 41, 46, 47, 52, 53],
          1,
        ],
      ],
      11: [
        [0, 2, 15, 2, 8, null, [0, 0, 0, 0, 33333]],
        [0, 2, 18, 4, 0, [1, 0, 25e3, 0, 75e3], null],
      ],
      48: [
        [0, 162e5, 2, 15, 0, 0],
        [0, 108e5, 2, 14, 2, 10],
        [0, 54e5, 2, 15, 2, 8],
        [0, 0, 2, 17, 2, 10],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 33333],
        [16, 0, 25e3, 1, 1, 0, 75e3],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 1, 0, 2e5],
        [2, 4, 0, 2, 0, 0, 2e5],
        [1, 4, 0, 0, 0, 2, 5],
        [2, 4, 0, 2, 0, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 7],
        [1, 0, 0, 2, 7, 0, 0],
        [17, 2, 9, 4, 0, 0, 2],
        [2, 4, 0, 2, 0, 0, 4e5],
        [1, 4, 0, 0, 0, 2, 11],
        [1, 2, 6, 0, 0, 2, 11],
        [2, 3, 0, 0, 1, 0, 8],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 32],
        [1, 3, 0, 0, 0, 2, 14],
        [1, 2, 15, 0, 0, 2, 4],
        [1, 2, 15, 2, 4, 0, 0],
        [1, 2, 18, 2, 16, 0, 0],
        [1, 2, 19, 0, 0, 2, 16],
        [1, 2, 18, 2, 14, 0, 0],
        [1, 2, 19, 0, 0, 2, 14],
        [1, 2, 22, 0, 0, 2, 16],
        [1, 2, 23, 2, 16, 0, 0],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      38: 18288,
      40: [0, 0, 2, 10, 2, 13, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 10, 9, 10, 9, 0, 1, 5, 9, 2, 9, 11, 0, 11],
          [0, 5, 12],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 10, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 9, 0, 0, [1, 0, 0, 2, 6], null],
      ],
      48: [
        [0, 162e5, 2, 9, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 9, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 10, 2, 8, 2, 5],
        [1, 2, 9, 2, 12, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 64977,
      38: 24384,
      40: [0, 0, 0, 0, 2, 21, 2, 1],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5,
            0,
          ],
          [
            0, 0, 21, 0, 21, 16, 20, 16, 20, 15, 0, 3, 20, 18, 20, 17, 21, 17,
            21, 1, 0, 1,
          ],
          [0, 1, 3, 20],
          1,
        ],
      ],
      11: [
        [0, 2, 20, 2, 16, null, [0, 0, 0, 2, 6]],
        [0, 3, 0, 2, 15, null, [1, 0, 0, 2, 4]],
        [0, 2, 20, 0, 0, [2, 0, 0, 2, 8], null],
        [0, 2, 21, 4, 0, [3, 0, 0, 2, 11], null],
      ],
      48: [
        [0, 162e5, 2, 22, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 22, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 4],
        [2, 2, 5, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 0, 1e5, 3, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 8],
        [2, 2, 9, 2, 2, 3, 0],
        [1, 0, 1e5, 0, 0, 2, 10],
        [16, 0, 0, 1, 3, 2, 11],
        [2, 2, 2, 2, 5, 0, 1e5],
        [2, 2, 2, 2, 7, 0, 2e5],
        [1, 2, 3, 0, 0, 2, 13],
        [1, 2, 3, 0, 0, 2, 14],
        [1, 2, 3, 2, 14, 0, 0],
        [1, 2, 3, 2, 13, 0, 0],
        [2, 2, 2, 2, 9, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 19],
        [2, 3, 0, 2, 12, 0, 1e5],
        [2, 2, 21, 0, 1, 0, 2],
      ],
    },
    {
      0: 8333,
      1: 5e4,
      37: 6096,
      14: 0,
      40: [0, 0, 2, 15, 2, 14, 2, 16],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            0, 0, 6, 9, 162e5, 54e5, 6, 10, 6, 9, 108e5, -54e5, 6, 9, 162e5,
            -54e5, 6, 11, 6, 9, 0, 54e5,
          ],
          [0, 1, 4, 5, 10, 11, 14, 15, 20, 21],
          1,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 4, 4, 1, 2, 4, 4],
          [
            0, 0, 6, 9, 162e5, 54e5, 6, 10, 6, 9, 108e5, -54e5, 6, 9, 162e5,
            -54e5, 6, 11, 6, 9, 0, 54e5,
          ],
          [0, 1, 4, 5, 10, 11, 14, 15, 20, 21],
          1,
        ],
      ],
      11: [
        [0, 2, 6, 2, 9, null, [0, 0, 0, 2, 7]],
        [0, 3, 0, 2, 4, null, [1, 0, 0, 0, 1e5]],
      ],
      48: [
        [0, 54e5, 0, 0, 0, 0],
        [0, 108e5, 3, 0, 2, 4],
        [0, 162e5, 0, 0, 4, 0],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 1e5],
        [1, 0, 1e5, 0, 0, 2, 0],
        [5, 2, 1, 2, 0, 0, 0],
        [2, 2, 2, 0, 1, 0, 2],
        [2, 4, 0, 2, 0, 0, 1e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 3, 4, 0, 2, 5],
        [16, 0, 0, 1, 0, 2, 7],
        [2, 2, 5, 2, 8, 0, 1e5],
        [1, 2, 4, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
        [11, 2, 6, 0, 27e5, 0, 0],
        [10, 2, 9, 0, 27e5, 0, 0],
        [1, 0, 0, 2, 12, 0, 0],
        [1, 2, 9, 0, 0, 2, 13],
        [1, 4, 0, 2, 13, 2, 9],
      ],
    },
    {
      0: 8333,
      37: 3048,
      14: 0,
      40: [0, 0, 2, 10, 2, 3, 2, 11],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 0, 1, 7, 162e5, 54e5, 1, 8, 1, 7, 0, 54e5],
          [2, 3, 6, 7, 8, 9],
          0,
        ],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4],
          [0, 0, 1, 7, 162e5, 54e5, 1, 8, 1, 7, 0, 54e5],
          [2, 3, 6, 7, 8, 9],
          0,
        ],
      ],
      11: [[0, 3, 0, 2, 7, null, [0, 0, 0, 2, 5]]],
      48: [
        [0, 54e5, 0, 0, 0, 0],
        [0, 162e5, 0, 0, 4, 0],
        [0, 108e5, 3, 0, 2, 0],
      ],
      10: [
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [11, 3, 0, 0, 27e5, 0, 0],
        [1, 0, 0, 2, 2, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 0, 5e4, 4, 0, 2, 4],
        [16, 0, 0, 1, 0, 2, 5],
        [2, 2, 4, 2, 6, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 7],
        [10, 2, 7, 0, 27e5, 0, 0],
        [1, 2, 7, 0, 0, 2, 9],
        [1, 4, 0, 2, 9, 2, 7],
      ],
    },
    {
      0: 16667,
      40: [0, 0, 0, 0, 2, 9, 2, 2],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 1, 2, 5, 0],
          [0, 0, 7, 0, 6, 6, 162e5, 54e5, 1, 2, 0, 2],
          [2, 4, 5, 8, 9, 11],
          0,
        ],
      ],
      11: [[0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [2, 2, 6, 0, 29289, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
      ],
    },
    {
      0: 16667,
      1: 0,
      40: [2, 15, 2, 15, 2, 16, 2, 17],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            7, 0, 10, 0, 9, 9, 162e5, 54e5, 2, 8, 7, 7, 0, 54e5, 9, 3, 9, 9,
            54e5, 54e5, 0, 7, 7, 7, 108e5, 54e5,
          ],
          [1, 3, 6, 7, 12, 13, 18, 19, 20, 24, 25],
          1,
        ],
      ],
      11: [
        [0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null],
        [0, 2, 10, 0, 0, [1, 0, 0, 0, 5e4], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 6, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 6, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 7],
        [2, 2, 4, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
        [2, 2, 7, 0, 29289, 0, 1e5],
        [2, 2, 9, 0, 29289, 0, 1e5],
        [1, 2, 12, 0, 0, 2, 13],
        [7, 2, 14, 2, 12, 2, 13],
        [1, 3, 0, 0, 0, 2, 15],
        [1, 4, 0, 0, 0, 2, 15],
      ],
    },
    {
      0: 16667,
      1: 0,
      40: [2, 15, 2, 13, 2, 16, 2, 17],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            7, 0, 8, 0, 7, 7, 162e5, 54e5, 2, 11, 9, 9, 0, 54e5, 9, 3, 9, 9,
            54e5, 54e5, 0, 7, 7, 7, 108e5, 54e5,
          ],
          [1, 3, 6, 7, 12, 13, 18, 19, 20, 24, 25],
          1,
        ],
      ],
      11: [
        [0, 2, 8, 0, 0, [0, 0, 0, 0, 5e4], null],
        [0, 2, 9, 4, 0, [1, 0, 0, 0, 5e4], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 6, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 6, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 7],
        [2, 2, 4, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
        [1, 2, 7, 0, 0, 2, 9],
        [2, 2, 7, 0, 29289, 0, 1e5],
        [2, 2, 9, 0, 29289, 0, 1e5],
        [7, 2, 12, 2, 13, 2, 14],
        [1, 3, 0, 0, 0, 2, 15],
        [1, 4, 0, 0, 0, 2, 14],
      ],
    },
    {
      40: [2, 2, 2, 3, 2, 4, 2, 5],
      12: [[1, 1, [0, 2, 1, 2, 1, 2, 5, 0], [0, 0, 0, 0, 1, 0], [1, 4, 5], 0]],
      48: [
        [0, 162e5, 0, 0, 0, 0],
        [0, 108e5, 0, 0, 2, 6],
        [0, 54e5, 0, 0, 4, 0],
        [0, 54e5, 2, 7, 4, 0],
        [0, 54e5, 3, 0, 4, 0],
        [0, 0, 2, 7, 2, 6],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 12],
        [2, 4, 0, 0, 7, 0, 12],
        [2, 3, 0, 0, 7, 0, 12],
        [2, 4, 0, 0, 11, 0, 12],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      0: 4653,
      40: [2, 18, 2, 20, 2, 19, 2, 21],
      12: [
        [1, 0, [0, 2, 4, 4, 5, 0], [0, 15, 14, 15, 108e5, 216e5], [1, 2, 3], 0],
        [
          3,
          1,
          [0, 2, 4, 4, 0, 2, 4, 4],
          [2, 5, 12, 13, 108e5, 216e5, 3, 5, 12, 13, 108e5, 216e5],
          [4, 5, 10, 11],
          1,
        ],
        [0, 1, [0, 2, 2, 4], [1, 8, 14, 11, 4, 8], [], 1],
        [0, 1, [0, 2, 4, 4, 5, 0], [0, 15, 14, 15, 108e5, 216e5], [1, 2, 3], 0],
      ],
      11: [[0, 2, 14, 2, 9, null, [0, 0, -4653, 0, 4653]]],
      48: [
        [0, 162e5, 2, 14, 0, 0],
        [0, 162e5, 2, 18, 2, 20],
        [0, 108e5, 0, 0, 2, 15],
        [0, 54e5, 2, 18, 2, 21],
        [0, 54e5, 2, 14, 4, 0],
        [0, 54e5, 2, 19, 2, 21],
        [0, 0, 3, 0, 2, 15],
        [0, 162e5, 2, 19, 2, 20],
      ],
      10: [
        [16, 0, -4653, 1, 0, 0, 4653],
        [2, 3, 0, 0, 4969, 0, 21699],
        [2, 3, 0, 0, 6215, 0, 21600],
        [2, 3, 0, 0, 13135, 0, 21600],
        [2, 3, 0, 0, 16640, 0, 21600],
        [2, 4, 0, 0, 7570, 0, 21600],
        [2, 4, 0, 0, 16515, 0, 21600],
        [2, 4, 0, 2, 0, 0, 1e5],
        [1, 2, 6, 0, 0, 2, 7],
        [1, 2, 6, 2, 7, 0, 0],
        [2, 4, 0, 2, 0, 0, 5e4],
        [1, 2, 9, 2, 10, 0, 0],
        [2, 3, 0, 0, 1125, 0, 21600],
        [2, 4, 0, 0, 1125, 0, 21600],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 14, 0, 27e5, 0, 0],
        [10, 2, 15, 0, 27e5, 0, 0],
        [1, 2, 14, 0, 0, 2, 16],
        [1, 2, 14, 2, 16, 0, 0],
        [1, 2, 15, 0, 0, 2, 17],
        [1, 2, 15, 2, 17, 0, 0],
      ],
    },
    {
      0: 16667,
      40: [0, 0, 2, 8, 2, 9, 2, 2],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 7, 0, 1, 6, 1, 2, 0, 2],
          [0, 1, 3, 8],
          1,
        ],
      ],
      11: [[0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null]],
      48: [
        [0, 0, 3, 0, 2, 4],
        [0, 54e5, 2, 5, 4, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 162e5, 2, 5, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 6],
        [2, 2, 6, 0, 1, 0, 2],
        [17, 2, 7, 3, 0, 0, 2],
      ],
    },
    {
      0: 0,
      1: 16667,
      40: [2, 15, 2, 15, 2, 16, 2, 17],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [7, 0, 11, 0, 2, 10, 2, 9, 8, 3, 10, 3, 0, 12, 0, 7],
          [1, 3, 12, 14],
          1,
        ],
      ],
      11: [
        [0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null],
        [0, 2, 11, 0, 0, [1, 0, 0, 0, 5e4], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 6, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 6, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 7],
        [1, 4, 0, 0, 0, 2, 7],
        [2, 2, 4, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 10],
        [1, 4, 0, 0, 0, 2, 10],
        [1, 2, 7, 0, 0, 2, 10],
        [7, 2, 13, 2, 7, 2, 10],
        [2, 2, 14, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 15],
        [1, 4, 0, 0, 0, 2, 15],
      ],
    },
    {
      0: 16667,
      1: 0,
      40: [2, 14, 2, 16, 2, 15, 2, 17],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [7, 0, 8, 0, 2, 7, 2, 11, 10, 3, 9, 3, 0, 11, 0, 7],
          [1, 3, 12, 14],
          1,
        ],
      ],
      11: [
        [0, 2, 8, 0, 0, [0, 0, 0, 0, 5e4], null],
        [0, 2, 9, 4, 0, [1, 0, 0, 0, 5e4], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 6, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 6, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 7],
        [2, 2, 4, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 9],
        [1, 4, 0, 0, 0, 2, 9],
        [1, 2, 7, 0, 0, 2, 9],
        [7, 2, 12, 2, 7, 2, 9],
        [2, 2, 13, 0, 1, 0, 2],
        [1, 3, 0, 0, 0, 2, 14],
        [2, 2, 7, 0, 1, 0, 2],
        [17, 2, 11, 4, 0, 0, 2],
      ],
    },
    {
      0: 16667,
      1: 16667,
      40: [2, 10, 2, 10, 2, 11, 2, 3],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 5, 0],
          [7, 0, 9, 0, 2, 8, 2, 3, 0, 3, 0, 7, 7, 7, 108e5, 54e5],
          [1, 3, 8, 10, 14, 15],
          1,
        ],
      ],
      11: [
        [0, 2, 7, 0, 0, [0, 0, 0, 0, 5e4], null],
        [0, 2, 9, 0, 0, [1, 0, 0, 0, 5e4], null],
      ],
      48: [
        [0, 0, 3, 0, 2, 5],
        [0, 54e5, 2, 6, 4, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 162e5, 2, 6, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [16, 0, 0, 1, 1, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 4, 2, 0, 0, 1e5],
        [2, 2, 4, 2, 1, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
        [2, 2, 7, 0, 29289, 0, 1e5],
        [17, 2, 9, 3, 0, 0, 2],
      ],
    },
    {
      0: 42533,
      1: 105146,
      38: 38453,
      40: [2, 14, 2, 30, 2, 17, 2, 31],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            6, 23, 14, 30, 7, 22, 15, 29, 1, 0, 16, 29, 8, 22, 17, 30, 9, 23,
            18, 19, 9, 24, 17, 31, 8, 25, 16, 32, 1, 2, 15, 32, 7, 25, 14, 31,
            6, 24, 13, 19,
          ],
          [9],
          1,
        ],
      ],
      11: [[0, 2, 1, 2, 33, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 2, 9, 2, 23],
        [0, 0, 2, 9, 2, 24],
        [0, 54e5, 2, 8, 2, 25],
        [0, 54e5, 2, 1, 4, 0],
        [0, 54e5, 2, 7, 2, 25],
        [0, 108e5, 2, 6, 2, 24],
        [0, 108e5, 2, 6, 2, 23],
        [0, 162e5, 2, 7, 2, 22],
        [0, 162e5, 2, 1, 0, 0],
        [0, 162e5, 2, 8, 2, 22],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 3, 0, 95106, 0, 1e5],
        [2, 2, 3, 0, 58779, 0, 1e5],
        [1, 2, 1, 0, 0, 2, 4],
        [1, 2, 1, 0, 0, 2, 5],
        [1, 2, 1, 2, 5, 0, 0],
        [1, 2, 1, 2, 4, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 10, 0, 80902, 0, 1e5],
        [2, 2, 10, 0, 30902, 0, 1e5],
        [1, 2, 1, 0, 0, 2, 10],
        [1, 2, 1, 0, 0, 2, 11],
        [1, 2, 1, 0, 0, 2, 12],
        [1, 2, 1, 2, 12, 0, 0],
        [1, 2, 1, 2, 11, 0, 0],
        [1, 2, 1, 2, 10, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 19, 0, 80902, 0, 1e5],
        [2, 2, 19, 0, 30902, 0, 1e5],
        [1, 2, 19, 0, 0, 2, 20],
        [1, 2, 19, 0, 0, 2, 21],
        [1, 2, 19, 2, 21, 0, 0],
        [1, 2, 19, 2, 20, 0, 0],
        [2, 2, 19, 2, 0, 0, 5e4],
        [2, 2, 26, 0, 95106, 0, 1e5],
        [2, 2, 26, 0, 58779, 0, 1e5],
        [1, 2, 19, 0, 0, 2, 27],
        [1, 2, 19, 0, 0, 2, 28],
        [1, 2, 19, 2, 28, 0, 0],
        [1, 2, 19, 2, 27, 0, 0],
        [1, 2, 19, 0, 0, 2, 26],
      ],
    },
    {
      0: 37500,
      40: [2, 24, 2, 30, 2, 27, 2, 33],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 5, 0,
          ],
          [
            0, 6, 23, 31, 11, 7, 24, 30, 8, 13, 25, 29, 5, 0, 26, 29, 3, 13, 27,
            30, 12, 7, 28, 31, 1, 6, 28, 32, 12, 4, 27, 33, 3, 14, 26, 34, 5, 2,
            25, 34, 8, 14, 24, 33, 11, 4, 23, 32,
          ],
          [0, 13],
          1,
        ],
      ],
      11: [[0, 2, 5, 2, 35, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 2, 12, 2, 7],
        [0, 0, 3, 0, 2, 6],
        [0, 0, 2, 12, 2, 4],
        [0, 54e5, 2, 3, 2, 14],
        [0, 54e5, 2, 5, 4, 0],
        [0, 54e5, 2, 8, 2, 14],
        [0, 108e5, 2, 11, 2, 4],
        [0, 108e5, 0, 0, 2, 6],
        [0, 108e5, 2, 11, 2, 7],
        [0, 162e5, 2, 8, 2, 13],
        [0, 162e5, 2, 5, 0, 0],
        [0, 162e5, 2, 3, 2, 13],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 4],
        [2, 3, 0, 0, 1, 0, 4],
        [11, 2, 5, 0, 18e5, 0, 0],
        [10, 2, 6, 0, 36e5, 0, 0],
        [1, 2, 5, 0, 0, 2, 9],
        [1, 2, 5, 2, 9, 0, 0],
        [1, 2, 6, 0, 0, 2, 10],
        [1, 2, 6, 2, 10, 0, 0],
        [2, 2, 5, 2, 0, 0, 5e4],
        [2, 2, 6, 2, 0, 0, 5e4],
        [11, 2, 15, 0, 9e5, 0, 0],
        [11, 2, 15, 0, 27e5, 0, 0],
        [11, 2, 15, 0, 45e5, 0, 0],
        [10, 2, 16, 0, 45e5, 0, 0],
        [10, 2, 16, 0, 27e5, 0, 0],
        [10, 2, 16, 0, 9e5, 0, 0],
        [1, 2, 5, 0, 0, 2, 17],
        [1, 2, 5, 0, 0, 2, 18],
        [1, 2, 5, 0, 0, 2, 19],
        [1, 2, 5, 2, 19, 0, 0],
        [1, 2, 5, 2, 18, 0, 0],
        [1, 2, 5, 2, 17, 0, 0],
        [1, 2, 6, 0, 0, 2, 20],
        [1, 2, 6, 0, 0, 2, 21],
        [1, 2, 6, 0, 0, 2, 22],
        [1, 2, 6, 2, 22, 0, 0],
        [1, 2, 6, 2, 21, 0, 0],
        [1, 2, 6, 2, 20, 0, 0],
        [1, 2, 6, 0, 0, 2, 16],
      ],
    },
    {
      0: 37500,
      40: [2, 51, 2, 52, 2, 53, 2, 54],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 4, 33, 44, 11, 19, 34, 43, 12, 18, 35, 42, 13, 17, 36, 41, 3, 0,
            37, 41, 14, 17, 38, 42, 15, 18, 39, 43, 16, 19, 40, 44, 1, 4, 40,
            45, 16, 20, 39, 46, 15, 21, 38, 47, 14, 22, 37, 48, 3, 2, 36, 48,
            13, 22, 35, 47, 12, 21, 34, 46, 11, 20, 33, 45,
          ],
          [0, 17],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 55, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 2, 15, 2, 18],
        [0, 0, 2, 16, 2, 19],
        [0, 0, 3, 0, 2, 4],
        [0, 0, 2, 16, 2, 20],
        [0, 0, 2, 15, 2, 21],
        [0, 54e5, 2, 14, 2, 22],
        [0, 54e5, 2, 3, 4, 0],
        [0, 54e5, 2, 13, 2, 22],
        [0, 108e5, 2, 12, 2, 21],
        [0, 108e5, 2, 11, 2, 20],
        [0, 108e5, 0, 0, 2, 4],
        [0, 108e5, 2, 11, 2, 19],
        [0, 108e5, 2, 12, 2, 18],
        [0, 162e5, 2, 13, 2, 17],
        [0, 162e5, 2, 3, 0, 0],
        [0, 162e5, 2, 14, 2, 17],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 0, 92388, 0, 1e5],
        [2, 2, 3, 0, 70711, 0, 1e5],
        [2, 2, 3, 0, 38268, 0, 1e5],
        [2, 2, 4, 0, 92388, 0, 1e5],
        [2, 2, 4, 0, 70711, 0, 1e5],
        [2, 2, 4, 0, 38268, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 5],
        [1, 2, 3, 0, 0, 2, 6],
        [1, 2, 3, 0, 0, 2, 7],
        [1, 2, 3, 2, 7, 0, 0],
        [1, 2, 3, 2, 6, 0, 0],
        [1, 2, 3, 2, 5, 0, 0],
        [1, 2, 4, 0, 0, 2, 8],
        [1, 2, 4, 0, 0, 2, 9],
        [1, 2, 4, 0, 0, 2, 10],
        [1, 2, 4, 2, 10, 0, 0],
        [1, 2, 4, 2, 9, 0, 0],
        [1, 2, 4, 2, 8, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [2, 2, 23, 0, 98079, 0, 1e5],
        [2, 2, 23, 0, 83147, 0, 1e5],
        [2, 2, 23, 0, 55557, 0, 1e5],
        [2, 2, 23, 0, 19509, 0, 1e5],
        [2, 2, 24, 0, 98079, 0, 1e5],
        [2, 2, 24, 0, 83147, 0, 1e5],
        [2, 2, 24, 0, 55557, 0, 1e5],
        [2, 2, 24, 0, 19509, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 25],
        [1, 2, 3, 0, 0, 2, 26],
        [1, 2, 3, 0, 0, 2, 27],
        [1, 2, 3, 0, 0, 2, 28],
        [1, 2, 3, 2, 28, 0, 0],
        [1, 2, 3, 2, 27, 0, 0],
        [1, 2, 3, 2, 26, 0, 0],
        [1, 2, 3, 2, 25, 0, 0],
        [1, 2, 4, 0, 0, 2, 29],
        [1, 2, 4, 0, 0, 2, 30],
        [1, 2, 4, 0, 0, 2, 31],
        [1, 2, 4, 0, 0, 2, 32],
        [1, 2, 4, 2, 32, 0, 0],
        [1, 2, 4, 2, 31, 0, 0],
        [1, 2, 4, 2, 30, 0, 0],
        [1, 2, 4, 2, 29, 0, 0],
        [11, 2, 23, 0, 27e5, 0, 0],
        [10, 2, 24, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 49],
        [1, 2, 4, 0, 0, 2, 50],
        [1, 2, 3, 2, 49, 0, 0],
        [1, 2, 4, 2, 50, 0, 0],
        [1, 2, 4, 0, 0, 2, 24],
      ],
    },
    {
      0: 37500,
      40: [2, 78, 2, 79, 2, 80, 2, 81],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 5, 0,
          ],
          [
            0, 5, 52, 69, 18, 32, 53, 68, 19, 31, 54, 67, 20, 30, 55, 66, 21,
            29, 56, 65, 22, 28, 57, 64, 3, 0, 58, 64, 23, 28, 59, 65, 24, 29,
            60, 66, 25, 30, 61, 67, 26, 31, 62, 68, 27, 32, 63, 69, 1, 5, 63,
            70, 27, 33, 62, 71, 26, 34, 61, 72, 25, 35, 60, 73, 24, 36, 59, 74,
            23, 37, 58, 75, 3, 2, 57, 75, 22, 37, 56, 74, 21, 36, 55, 73, 20,
            35, 54, 72, 19, 34, 53, 71, 18, 33, 52, 70,
          ],
          [0, 25],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 82, null, [0, 0, 0, 2, 83]]],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 4],
        [5, 3, 0, 4, 0, 0, 0],
        [11, 2, 3, 0, 9e5, 0, 0],
        [11, 2, 3, 0, 18e5, 0, 0],
        [11, 2, 3, 0, 27e5, 0, 0],
        [0, 2, 4, 0, 0, 0, 0],
        [11, 2, 3, 0, 45e5, 0, 0],
        [10, 2, 5, 0, 45e5, 0, 0],
        [10, 2, 5, 0, 36e5, 0, 0],
        [10, 2, 5, 0, 27e5, 0, 0],
        [0, 2, 6, 0, 0, 0, 0],
        [10, 2, 5, 0, 9e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 8],
        [1, 2, 3, 0, 0, 2, 9],
        [1, 2, 3, 0, 0, 2, 10],
        [1, 2, 3, 0, 0, 2, 11],
        [1, 2, 3, 0, 0, 2, 12],
        [1, 2, 3, 2, 12, 0, 0],
        [1, 2, 3, 2, 11, 0, 0],
        [1, 2, 3, 2, 10, 0, 0],
        [1, 2, 3, 2, 9, 0, 0],
        [1, 2, 3, 2, 8, 0, 0],
        [1, 2, 5, 0, 0, 2, 13],
        [1, 2, 5, 0, 0, 2, 14],
        [1, 2, 5, 0, 0, 2, 15],
        [1, 2, 5, 0, 0, 2, 16],
        [1, 2, 5, 0, 0, 2, 17],
        [1, 2, 5, 2, 17, 0, 0],
        [1, 2, 5, 2, 16, 0, 0],
        [1, 2, 5, 2, 15, 0, 0],
        [1, 2, 5, 2, 14, 0, 0],
        [1, 2, 5, 2, 13, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 5, 2, 0, 0, 5e4],
        [2, 2, 38, 0, 99144, 0, 1e5],
        [2, 2, 38, 0, 92388, 0, 1e5],
        [2, 2, 38, 0, 79335, 0, 1e5],
        [2, 2, 38, 0, 60876, 0, 1e5],
        [2, 2, 38, 0, 38268, 0, 1e5],
        [2, 2, 38, 0, 13053, 0, 1e5],
        [2, 2, 39, 0, 99144, 0, 1e5],
        [2, 2, 39, 0, 92388, 0, 1e5],
        [2, 2, 39, 0, 79335, 0, 1e5],
        [2, 2, 39, 0, 60876, 0, 1e5],
        [2, 2, 39, 0, 38268, 0, 1e5],
        [2, 2, 39, 0, 13053, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 40],
        [1, 2, 3, 0, 0, 2, 41],
        [1, 2, 3, 0, 0, 2, 42],
        [1, 2, 3, 0, 0, 2, 43],
        [1, 2, 3, 0, 0, 2, 44],
        [1, 2, 3, 0, 0, 2, 45],
        [1, 2, 3, 2, 45, 0, 0],
        [1, 2, 3, 2, 44, 0, 0],
        [1, 2, 3, 2, 43, 0, 0],
        [1, 2, 3, 2, 42, 0, 0],
        [1, 2, 3, 2, 41, 0, 0],
        [1, 2, 3, 2, 40, 0, 0],
        [1, 2, 5, 0, 0, 2, 46],
        [1, 2, 5, 0, 0, 2, 47],
        [1, 2, 5, 0, 0, 2, 48],
        [1, 2, 5, 0, 0, 2, 49],
        [1, 2, 5, 0, 0, 2, 50],
        [1, 2, 5, 0, 0, 2, 51],
        [1, 2, 5, 2, 51, 0, 0],
        [1, 2, 5, 2, 50, 0, 0],
        [1, 2, 5, 2, 49, 0, 0],
        [1, 2, 5, 2, 48, 0, 0],
        [1, 2, 5, 2, 47, 0, 0],
        [1, 2, 5, 2, 46, 0, 0],
        [11, 2, 38, 0, 27e5, 0, 0],
        [10, 2, 39, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 76],
        [1, 2, 5, 0, 0, 2, 77],
        [1, 2, 3, 2, 76, 0, 0],
        [1, 2, 5, 2, 77, 0, 0],
        [1, 2, 5, 0, 0, 2, 39],
        [2, 2, 7, 0, 1, 0, 2],
      ],
    },
    {
      0: 37500,
      40: [2, 100, 2, 101, 2, 102, 2, 103],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
            1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 4, 66, 89, 20, 40, 67, 88, 21, 39, 68, 87, 22, 38, 69, 86, 23,
            37, 70, 85, 24, 36, 71, 84, 25, 35, 72, 83, 26, 34, 73, 82, 3, 0,
            74, 82, 27, 34, 75, 83, 28, 35, 76, 84, 29, 36, 77, 85, 30, 37, 78,
            86, 31, 38, 79, 87, 32, 39, 80, 88, 33, 40, 81, 89, 1, 4, 81, 90,
            33, 41, 80, 91, 32, 42, 79, 92, 31, 43, 78, 93, 30, 44, 77, 94, 29,
            45, 76, 95, 28, 46, 75, 96, 27, 47, 74, 97, 3, 2, 73, 97, 26, 47,
            72, 96, 25, 46, 71, 95, 24, 45, 70, 94, 23, 44, 69, 93, 22, 43, 68,
            92, 21, 42, 67, 91, 20, 41, 66, 90,
          ],
          [0, 33],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 104, null, [0, 0, 0, 2, 105]]],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 3, 0, 98079, 0, 1e5],
        [2, 2, 3, 0, 92388, 0, 1e5],
        [2, 2, 3, 0, 83147, 0, 1e5],
        [11, 2, 3, 0, 27e5, 0, 0],
        [2, 2, 3, 0, 55557, 0, 1e5],
        [2, 2, 3, 0, 38268, 0, 1e5],
        [2, 2, 3, 0, 19509, 0, 1e5],
        [2, 2, 4, 0, 98079, 0, 1e5],
        [2, 2, 4, 0, 92388, 0, 1e5],
        [2, 2, 4, 0, 83147, 0, 1e5],
        [10, 2, 4, 0, 27e5, 0, 0],
        [2, 2, 4, 0, 55557, 0, 1e5],
        [2, 2, 4, 0, 38268, 0, 1e5],
        [2, 2, 4, 0, 19509, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 6],
        [1, 2, 3, 0, 0, 2, 7],
        [1, 2, 3, 0, 0, 2, 8],
        [1, 2, 3, 0, 0, 2, 9],
        [1, 2, 3, 0, 0, 2, 10],
        [1, 2, 3, 0, 0, 2, 11],
        [1, 2, 3, 0, 0, 2, 12],
        [1, 2, 3, 2, 12, 0, 0],
        [1, 2, 3, 2, 11, 0, 0],
        [1, 2, 3, 2, 10, 0, 0],
        [1, 2, 3, 2, 9, 0, 0],
        [1, 2, 3, 2, 8, 0, 0],
        [1, 2, 3, 2, 7, 0, 0],
        [1, 2, 3, 2, 6, 0, 0],
        [1, 2, 4, 0, 0, 2, 13],
        [1, 2, 4, 0, 0, 2, 14],
        [1, 2, 4, 0, 0, 2, 15],
        [1, 2, 4, 0, 0, 2, 16],
        [1, 2, 4, 0, 0, 2, 17],
        [1, 2, 4, 0, 0, 2, 18],
        [1, 2, 4, 0, 0, 2, 19],
        [1, 2, 4, 2, 19, 0, 0],
        [1, 2, 4, 2, 18, 0, 0],
        [1, 2, 4, 2, 17, 0, 0],
        [1, 2, 4, 2, 16, 0, 0],
        [1, 2, 4, 2, 15, 0, 0],
        [1, 2, 4, 2, 14, 0, 0],
        [1, 2, 4, 2, 13, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [2, 2, 48, 0, 99518, 0, 1e5],
        [2, 2, 48, 0, 95694, 0, 1e5],
        [2, 2, 48, 0, 88192, 0, 1e5],
        [2, 2, 48, 0, 77301, 0, 1e5],
        [2, 2, 48, 0, 63439, 0, 1e5],
        [2, 2, 48, 0, 47140, 0, 1e5],
        [2, 2, 48, 0, 29028, 0, 1e5],
        [2, 2, 48, 0, 9802, 0, 1e5],
        [2, 2, 49, 0, 99518, 0, 1e5],
        [2, 2, 49, 0, 95694, 0, 1e5],
        [2, 2, 49, 0, 88192, 0, 1e5],
        [2, 2, 49, 0, 77301, 0, 1e5],
        [2, 2, 49, 0, 63439, 0, 1e5],
        [2, 2, 49, 0, 47140, 0, 1e5],
        [2, 2, 49, 0, 29028, 0, 1e5],
        [2, 2, 49, 0, 9802, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 50],
        [1, 2, 3, 0, 0, 2, 51],
        [1, 2, 3, 0, 0, 2, 52],
        [1, 2, 3, 0, 0, 2, 53],
        [1, 2, 3, 0, 0, 2, 54],
        [1, 2, 3, 0, 0, 2, 55],
        [1, 2, 3, 0, 0, 2, 56],
        [1, 2, 3, 0, 0, 2, 57],
        [1, 2, 3, 2, 57, 0, 0],
        [1, 2, 3, 2, 56, 0, 0],
        [1, 2, 3, 2, 55, 0, 0],
        [1, 2, 3, 2, 54, 0, 0],
        [1, 2, 3, 2, 53, 0, 0],
        [1, 2, 3, 2, 52, 0, 0],
        [1, 2, 3, 2, 51, 0, 0],
        [1, 2, 3, 2, 50, 0, 0],
        [1, 2, 4, 0, 0, 2, 58],
        [1, 2, 4, 0, 0, 2, 59],
        [1, 2, 4, 0, 0, 2, 60],
        [1, 2, 4, 0, 0, 2, 61],
        [1, 2, 4, 0, 0, 2, 62],
        [1, 2, 4, 0, 0, 2, 63],
        [1, 2, 4, 0, 0, 2, 64],
        [1, 2, 4, 0, 0, 2, 65],
        [1, 2, 4, 2, 65, 0, 0],
        [1, 2, 4, 2, 64, 0, 0],
        [1, 2, 4, 2, 63, 0, 0],
        [1, 2, 4, 2, 62, 0, 0],
        [1, 2, 4, 2, 61, 0, 0],
        [1, 2, 4, 2, 60, 0, 0],
        [1, 2, 4, 2, 59, 0, 0],
        [1, 2, 4, 2, 58, 0, 0],
        [11, 2, 48, 0, 27e5, 0, 0],
        [10, 2, 49, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 98],
        [1, 2, 4, 0, 0, 2, 99],
        [1, 2, 3, 2, 98, 0, 0],
        [1, 2, 4, 2, 99, 0, 0],
        [1, 2, 4, 0, 0, 2, 49],
        [2, 2, 5, 0, 1, 0, 2],
      ],
    },
    {
      0: 12500,
      40: [2, 9, 2, 11, 2, 10, 2, 12],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 4, 9, 11, 3, 0, 10, 11, 1, 4, 10, 12, 3, 2, 9, 12],
          [0, 5],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 13, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [11, 2, 5, 0, 27e5, 0, 0],
        [10, 2, 6, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 7],
        [1, 2, 3, 2, 7, 0, 0],
        [1, 2, 4, 0, 0, 2, 8],
        [1, 2, 4, 2, 8, 0, 0],
        [1, 2, 4, 0, 0, 2, 6],
      ],
    },
    {
      0: 19098,
      1: 105146,
      2: 110557,
      37: 38481,
      40: [2, 22, 2, 26, 2, 25, 2, 28],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [
            10, 14, 23, 26, 1, 0, 24, 26, 13, 14, 25, 27, 12, 15, 1, 28, 11, 15,
            22, 27,
          ],
          [5],
          1,
        ],
      ],
      11: [[0, 2, 1, 2, 29, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 108e5, 2, 10, 2, 14],
        [0, 54e5, 2, 11, 2, 15],
        [0, 54e5, 2, 12, 2, 15],
        [0, 0, 2, 13, 2, 14],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 2, 1, 2, 0, 1e5],
        [2, 2, 2, 1, 2, 0, 1e5],
        [11, 2, 3, 0, 108e4, 0, 0],
        [11, 2, 3, 0, 1836e4, 0, 0],
        [10, 2, 4, 0, 108e4, 0, 0],
        [10, 2, 4, 0, 1836e4, 0, 0],
        [1, 2, 1, 0, 0, 2, 6],
        [1, 2, 1, 0, 0, 2, 7],
        [1, 2, 1, 2, 7, 0, 0],
        [1, 2, 1, 2, 6, 0, 0],
        [1, 2, 5, 0, 0, 2, 8],
        [1, 2, 5, 0, 0, 2, 9],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [11, 2, 16, 0, 2052e4, 0, 0],
        [11, 2, 16, 0, 324e4, 0, 0],
        [10, 2, 17, 0, 324e4, 0, 0],
        [10, 2, 17, 0, 2052e4, 0, 0],
        [1, 2, 1, 0, 0, 2, 18],
        [1, 2, 1, 0, 0, 2, 19],
        [1, 2, 1, 2, 19, 0, 0],
        [1, 2, 1, 2, 18, 0, 0],
        [1, 2, 5, 0, 0, 2, 20],
        [1, 2, 5, 0, 0, 2, 21],
        [1, 2, 5, 2, 17, 0, 0],
        [1, 2, 5, 0, 0, 2, 17],
      ],
    },
    {
      0: 28868,
      1: 115470,
      38: 42220,
      40: [2, 9, 2, 18, 2, 12, 2, 19],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            5, 14, 10, 18, 1, 0, 11, 18, 6, 14, 12, 13, 6, 15, 11, 19, 1, 2, 10,
            19, 5, 15, 9, 13,
          ],
          [5],
          1,
        ],
      ],
      11: [[0, 2, 1, 2, 20, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 2, 6, 2, 14],
        [0, 0, 2, 6, 2, 15],
        [0, 54e5, 2, 1, 4, 0],
        [0, 108e5, 2, 5, 2, 15],
        [0, 108e5, 2, 5, 2, 14],
        [0, 162e5, 2, 1, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 2, 1, 1, 1, 0, 1e5],
        [11, 2, 3, 0, 18e5, 0, 0],
        [1, 2, 1, 0, 0, 2, 4],
        [1, 2, 1, 2, 4, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 7, 0, 1, 0, 2],
        [1, 2, 1, 0, 0, 2, 7],
        [1, 2, 1, 0, 0, 2, 8],
        [1, 2, 1, 2, 8, 0, 0],
        [1, 2, 1, 2, 7, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 4],
        [1, 2, 13, 2, 14, 0, 0],
        [2, 2, 13, 2, 0, 0, 5e4],
        [10, 2, 16, 0, 36e5, 0, 0],
        [1, 2, 13, 0, 0, 2, 17],
        [1, 2, 13, 2, 17, 0, 0],
        [1, 2, 13, 0, 0, 2, 16],
      ],
    },
    {
      0: 34601,
      1: 102572,
      2: 105210,
      37: 37514,
      40: [2, 27, 2, 35, 2, 30, 2, 37],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 5, 0,
          ],
          [
            12, 19, 26, 36, 13, 18, 28, 35, 1, 0, 29, 35, 16, 18, 31, 36, 17,
            19, 30, 37, 15, 20, 1, 38, 14, 20, 27, 37,
          ],
          [9],
          1,
        ],
      ],
      11: [[0, 2, 1, 2, 39, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 2, 16, 2, 18],
        [0, 0, 2, 17, 2, 19],
        [0, 54e5, 2, 15, 2, 20],
        [0, 54e5, 2, 14, 2, 20],
        [0, 108e5, 2, 12, 2, 19],
        [0, 108e5, 2, 13, 2, 18],
        [0, 162e5, 2, 1, 0, 0],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 1, 1, 1, 0, 1e5],
        [2, 2, 2, 1, 2, 0, 1e5],
        [2, 2, 2, 1, 2, 0, 1e5],
        [2, 2, 3, 0, 97493, 0, 1e5],
        [2, 2, 3, 0, 78183, 0, 1e5],
        [2, 2, 3, 0, 43388, 0, 1e5],
        [2, 2, 4, 0, 62349, 0, 1e5],
        [2, 2, 4, 0, 22252, 0, 1e5],
        [2, 2, 4, 0, 90097, 0, 1e5],
        [1, 2, 1, 0, 0, 2, 6],
        [1, 2, 1, 0, 0, 2, 7],
        [1, 2, 1, 0, 0, 2, 8],
        [1, 2, 1, 2, 8, 0, 0],
        [1, 2, 1, 2, 7, 0, 0],
        [1, 2, 1, 2, 6, 0, 0],
        [1, 2, 5, 0, 0, 2, 9],
        [1, 2, 5, 2, 10, 0, 0],
        [1, 2, 5, 2, 11, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [2, 2, 21, 0, 97493, 0, 1e5],
        [2, 2, 21, 0, 78183, 0, 1e5],
        [2, 2, 21, 0, 43388, 0, 1e5],
        [1, 2, 1, 0, 0, 2, 23],
        [1, 2, 1, 0, 0, 2, 24],
        [1, 2, 1, 0, 0, 2, 25],
        [1, 2, 1, 2, 25, 0, 0],
        [1, 2, 1, 2, 24, 0, 0],
        [1, 2, 1, 2, 23, 0, 0],
        [2, 2, 22, 0, 90097, 0, 1e5],
        [2, 2, 22, 0, 22252, 0, 1e5],
        [2, 2, 22, 0, 62349, 0, 1e5],
        [1, 2, 5, 0, 0, 2, 32],
        [1, 2, 5, 0, 0, 2, 33],
        [1, 2, 5, 2, 34, 0, 0],
        [1, 2, 5, 2, 22, 0, 0],
        [1, 2, 5, 0, 0, 2, 22],
      ],
    },
    {
      0: 37500,
      40: [2, 17, 2, 21, 2, 20, 2, 24],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 4, 17, 22, 6, 9, 18, 21, 3, 0, 19, 21, 7, 9, 20, 22, 1, 4, 20,
            23, 7, 10, 19, 24, 3, 2, 18, 24, 6, 10, 17, 23,
          ],
          [0, 9],
          1,
        ],
      ],
      11: [[0, 2, 3, 2, 25, null, [0, 0, 0, 0, 5e4]]],
      48: [
        [0, 0, 3, 0, 2, 4],
        [0, 54e5, 2, 7, 2, 10],
        [0, 54e5, 2, 3, 4, 0],
        [0, 54e5, 2, 6, 2, 10],
        [0, 108e5, 0, 0, 2, 4],
        [0, 162e5, 2, 6, 2, 9],
        [0, 162e5, 2, 3, 0, 0],
        [0, 162e5, 2, 7, 2, 9],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 5e4],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 3, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 5],
        [1, 2, 3, 2, 5, 0, 0],
        [10, 2, 4, 0, 27e5, 0, 0],
        [1, 2, 4, 0, 0, 2, 8],
        [1, 2, 4, 2, 8, 0, 0],
        [2, 2, 3, 2, 0, 0, 5e4],
        [2, 2, 4, 2, 0, 0, 5e4],
        [2, 2, 11, 0, 92388, 0, 1e5],
        [2, 2, 11, 0, 38268, 0, 1e5],
        [2, 2, 12, 0, 92388, 0, 1e5],
        [2, 2, 12, 0, 38268, 0, 1e5],
        [1, 2, 3, 0, 0, 2, 13],
        [1, 2, 3, 0, 0, 2, 14],
        [1, 2, 3, 2, 14, 0, 0],
        [1, 2, 3, 2, 13, 0, 0],
        [1, 2, 4, 0, 0, 2, 15],
        [1, 2, 4, 0, 0, 2, 16],
        [1, 2, 4, 2, 16, 0, 0],
        [1, 2, 4, 2, 15, 0, 0],
        [1, 2, 4, 0, 0, 2, 12],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      38: 18288,
      40: [2, 11, 2, 14, 2, 17, 2, 15],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 14, 6, 14, 6, 15, 0, 15, 7, 14, 8, 14, 8, 15, 7, 15, 11, 14, 13,
            14, 13, 0, 1, 5, 13, 2, 13, 15, 11, 15,
          ],
          [0, 6, 21],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 14, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 13, 0, 0, [1, 0, 0, 2, 9], null],
      ],
      48: [
        [0, 162e5, 2, 13, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 13, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 4, 0, 1, 0, 32],
        [2, 2, 4, 0, 1, 0, 16],
        [2, 2, 4, 0, 1, 0, 8],
        [2, 0, 84375, 3, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 9],
        [2, 2, 4, 0, 5, 0, 32],
        [2, 2, 4, 2, 10, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 12],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 3, 2, 12, 2, 5],
        [1, 3, 0, 0, 0, 2, 16],
      ],
    },
    {
      0: 25e3,
      40: [2, 27, 2, 40, 2, 26, 2, 39],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 5,
            0, 0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2,
            5, 0, 0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 1, 2, 1, 2, 5, 0, 0, 2, 4, 4, 5,
            0,
          ],
          [
            20, 49, 32, 48, 32, 44, 22, 23, 33, 43, 34, 42, 50, 0, 35, 41, 31,
            41, 24, 23, 30, 42, 29, 43, 0, 49, 28, 44, 28, 48, 24, 25, 29, 47,
            30, 46, 50, 21, 31, 45, 35, 45, 22, 25, 34, 46, 33, 47, 36, 49, 37,
            38, 108e5, 216e5,
          ],
          [13, 24, 52, 53],
          1,
        ],
      ],
      11: [[0, 2, 36, 2, 49, [0, 0, 12500, 0, 46875], null]],
      48: [
        [0, 162e5, 2, 50, 0, 0],
        [0, 108e5, 0, 0, 2, 49],
        [0, 54e5, 2, 50, 4, 0],
        [0, 0, 3, 0, 2, 49],
      ],
      10: [
        [16, 0, 12500, 1, 0, 0, 46875],
        [1, 0, 5e4, 0, 0, 2, 0],
        [2, 2, 1, 0, 30274, 0, 32768],
        [2, 2, 1, 0, 12540, 0, 32768],
        [1, 2, 2, 0, 5e4, 0, 0],
        [1, 2, 3, 0, 5e4, 0, 0],
        [1, 0, 5e4, 0, 0, 2, 2],
        [1, 0, 5e4, 0, 0, 2, 3],
        [2, 2, 1, 0, 23170, 0, 32768],
        [1, 0, 5e4, 2, 8, 0, 0],
        [1, 0, 5e4, 0, 0, 2, 8],
        [2, 2, 6, 0, 3, 0, 4],
        [2, 2, 7, 0, 3, 0, 4],
        [1, 2, 11, 0, 3662, 0, 0],
        [1, 2, 12, 0, 3662, 0, 0],
        [1, 2, 12, 0, 12500, 0, 0],
        [1, 0, 1e5, 0, 0, 2, 11],
        [1, 0, 1e5, 0, 0, 2, 13],
        [1, 0, 1e5, 0, 0, 2, 14],
        [1, 0, 1e5, 0, 0, 2, 15],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 18436, 0, 21600],
        [2, 4, 0, 0, 3163, 0, 21600],
        [2, 3, 0, 0, 3163, 0, 21600],
        [2, 4, 0, 0, 18436, 0, 21600],
        [2, 3, 0, 2, 9, 0, 1e5],
        [2, 3, 0, 2, 10, 0, 1e5],
        [2, 3, 0, 2, 11, 0, 1e5],
        [2, 3, 0, 2, 13, 0, 1e5],
        [2, 3, 0, 2, 14, 0, 1e5],
        [2, 3, 0, 2, 15, 0, 1e5],
        [2, 3, 0, 2, 16, 0, 1e5],
        [2, 3, 0, 2, 17, 0, 1e5],
        [2, 3, 0, 2, 18, 0, 1e5],
        [2, 3, 0, 2, 19, 0, 1e5],
        [2, 3, 0, 2, 0, 0, 1e5],
        [2, 3, 0, 2, 1, 0, 1e5],
        [2, 4, 0, 2, 1, 0, 1e5],
        [2, 4, 0, 2, 9, 0, 1e5],
        [2, 4, 0, 2, 10, 0, 1e5],
        [2, 4, 0, 2, 11, 0, 1e5],
        [2, 4, 0, 2, 13, 0, 1e5],
        [2, 4, 0, 2, 14, 0, 1e5],
        [2, 4, 0, 2, 15, 0, 1e5],
        [2, 4, 0, 2, 16, 0, 1e5],
        [2, 4, 0, 2, 17, 0, 1e5],
        [2, 4, 0, 2, 18, 0, 1e5],
        [2, 4, 0, 2, 19, 0, 1e5],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      0: 25e3,
      37: 48768,
      40: [2, 13, 2, 14, 2, 15, 2, 0],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 10, 0, 11, 0, 1, 0],
          [0, 3, 5],
          1,
        ],
      ],
      11: [[0, 2, 10, 0, 0, [0, 0, 0, 2, 7], null]],
      48: [
        [0, 162e5, 2, 5, 0, 0],
        [0, 108e5, 2, 9, 2, 6],
        [0, 54e5, 2, 5, 4, 0],
        [0, 0, 2, 12, 2, 6],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 3],
        [2, 4, 0, 0, 1, 0, 3],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 2],
        [16, 0, 0, 1, 0, 2, 7],
        [2, 2, 2, 2, 8, 0, 2e5],
        [2, 2, 2, 2, 8, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 10],
        [1, 3, 0, 0, 0, 2, 9],
        [2, 2, 3, 2, 8, 2, 7],
        [2, 2, 4, 2, 8, 2, 7],
        [1, 3, 0, 0, 0, 2, 13],
      ],
    },
    {
      0: 5e4,
      37: 42291,
      40: [2, 3, 2, 6, 2, 7, 2, 1],
      12: [[1, 1, [0, 2, 1, 2, 1, 2, 5, 0], [0, 1, 4, 0, 2, 1], [0, 3], 1]],
      11: [[0, 2, 4, 0, 0, [0, 0, 0, 0, 1e5], null]],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 2, 3, 2, 6],
        [0, 54e5, 0, 0, 4, 0],
        [0, 54e5, 2, 4, 4, 0],
        [0, 54e5, 3, 0, 4, 0],
        [0, 0, 2, 7, 2, 6],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 0, 0, 2e5],
        [2, 3, 0, 2, 0, 0, 1e5],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 3, 2, 5, 0, 0],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      37: 18288,
      40: [2, 10, 2, 13, 2, 11, 2, 2],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 9, 5, 0, 1, 9, 11, 9, 11, 2, 10, 2, 10, 9],
          [0, 3],
          1,
        ],
      ],
      11: [
        [0, 2, 10, 4, 0, [0, 0, 0, 0, 1e5], null],
        [0, 0, 0, 2, 9, null, [1, 0, 0, 2, 6]],
      ],
      48: [
        [0, 162e5, 2, 5, 0, 0],
        [0, 108e5, 0, 0, 2, 9],
        [0, 54e5, 2, 5, 4, 0],
        [0, 0, 3, 0, 2, 9],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 1e5, 4, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 6],
        [2, 2, 4, 2, 7, 0, 1e5],
        [1, 0, 0, 2, 8, 0, 0],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 10, 2, 8, 2, 5],
        [1, 2, 9, 0, 0, 2, 12],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 64977,
      37: 24384,
      40: [0, 0, 2, 21, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5,
            0,
          ],
          [
            0, 21, 16, 21, 16, 19, 15, 19, 3, 0, 18, 19, 17, 19, 17, 21, 0, 21,
            0, 1, 0, 1,
          ],
          [0, 9, 20],
          1,
        ],
      ],
      11: [
        [0, 2, 16, 2, 19, [0, 0, 0, 2, 6], null],
        [0, 2, 15, 0, 0, [1, 0, 0, 2, 4], null],
        [0, 3, 0, 2, 19, null, [2, 0, 0, 2, 8]],
        [0, 0, 0, 2, 21, null, [3, 0, 0, 2, 11]],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 21],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 21],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 3, 0, 2, 2],
        [16, 0, 0, 1, 1, 2, 4],
        [2, 2, 5, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 6],
        [2, 0, 1e5, 4, 0, 2, 2],
        [16, 0, 0, 1, 2, 2, 8],
        [2, 2, 9, 2, 2, 4, 0],
        [1, 0, 1e5, 0, 0, 2, 10],
        [16, 0, 0, 1, 3, 2, 11],
        [2, 2, 2, 2, 5, 0, 1e5],
        [2, 2, 2, 2, 7, 0, 2e5],
        [1, 2, 3, 0, 0, 2, 13],
        [1, 2, 3, 0, 0, 2, 14],
        [1, 2, 3, 2, 14, 0, 0],
        [1, 2, 3, 2, 13, 0, 0],
        [2, 2, 2, 2, 9, 0, 1e5],
        [2, 4, 0, 2, 12, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 20],
        [17, 2, 21, 4, 0, 0, 2],
      ],
    },
    {
      0: 5e4,
      1: 5e4,
      37: 18288,
      38: 45720,
      40: [2, 11, 2, 14, 2, 12, 2, 15],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 9, 5, 0, 1, 9, 12, 9, 12, 10, 1, 10, 5, 2, 0, 10, 11, 10, 11, 9],
          [0, 3, 14],
          1,
        ],
      ],
      11: [
        [0, 2, 11, 2, 10, [0, 0, 0, 0, 1e5], null],
        [0, 0, 0, 2, 9, null, [1, 0, 0, 2, 7]],
      ],
      48: [
        [0, 162e5, 2, 5, 0, 0],
        [0, 108e5, 0, 0, 2, 9],
        [0, 108e5, 2, 11, 2, 6],
        [0, 108e5, 0, 0, 2, 10],
        [0, 54e5, 2, 5, 4, 0],
        [0, 0, 3, 0, 2, 10],
        [0, 0, 2, 12, 2, 6],
        [0, 0, 3, 0, 2, 9],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 0, 0, 2e5],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 0, 5e4, 4, 0, 2, 4],
        [16, 0, 0, 1, 1, 2, 7],
        [2, 2, 4, 2, 8, 0, 1e5],
        [1, 4, 0, 0, 0, 2, 9],
        [1, 2, 5, 0, 0, 2, 3],
        [1, 2, 5, 2, 3, 0, 0],
        [2, 2, 11, 2, 9, 2, 5],
        [1, 2, 9, 0, 0, 2, 13],
        [1, 2, 10, 2, 13, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 25e3,
      2: 25e3,
      3: 43750,
      4: 75e3,
      40: [0, 0, 0, 0, 2, 4, 2, 3],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4,
            4, 1, 2, 4, 4, 1, 2, 5, 0,
          ],
          [
            0, 3, 0, 25, 25, 25, 108e5, 54e5, 32, 0, 25, 25, 162e5, 54e5, 20,
            19, 4, 19, 29, 17, 30, 19, 31, 19, 31, 28, 27, 27, 0, -54e5, 28, 13,
            27, 27, 162e5, -54e5, 13, 3,
          ],
          [0, 2, 6, 7, 9, 12, 13, 28, 29, 34, 35],
          1,
        ],
      ],
      11: [
        [0, 2, 13, 4, 0, [0, 0, 0, 2, 1], null],
        [0, 2, 30, 4, 0, [1, 0, 0, 0, 25e3], null],
        [0, 2, 30, 2, 19, null, [2, 0, 0, 2, 8]],
        [0, 2, 25, 0, 0, [3, 0, 0, 2, 23], null],
        [0, 3, 0, 2, 17, null, [4, 2, 11, 0, 1e5]],
      ],
      48: [
        [0, 54e5, 2, 30, 2, 19],
        [0, 54e5, 2, 29, 2, 17],
        [0, 0, 3, 0, 2, 19],
        [0, 162e5, 2, 34, 0, 0],
        [0, 54e5, 2, 15, 4, 0],
      ],
      10: [
        [16, 0, 0, 1, 1, 0, 25e3],
        [2, 2, 0, 0, 2, 0, 1],
        [16, 0, 0, 1, 0, 2, 1],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 2, 2, 2, 5, 4, 0],
        [1, 0, 1e5, 0, 0, 2, 6],
        [2, 2, 7, 4, 0, 2, 5],
        [16, 0, 0, 1, 2, 2, 8],
        [1, 2, 9, 2, 2, 0, 0],
        [2, 2, 10, 2, 5, 4, 0],
        [16, 2, 11, 1, 4, 0, 1e5],
        [2, 2, 5, 2, 2, 0, 1e5],
        [2, 2, 5, 2, 0, 0, 1e5],
        [2, 2, 13, 0, 1, 0, 2],
        [1, 2, 14, 0, 0, 2, 15],
        [2, 4, 0, 2, 12, 0, 1e5],
        [2, 2, 5, 2, 9, 0, 1e5],
        [1, 2, 17, 0, 0, 2, 18],
        [1, 3, 0, 0, 0, 2, 16],
        [2, 2, 20, 0, 1, 0, 2],
        [5, 2, 21, 2, 19, 0, 0],
        [2, 2, 22, 0, 1e5, 2, 5],
        [16, 0, 0, 1, 3, 2, 23],
        [2, 2, 5, 2, 24, 0, 1e5],
        [1, 2, 25, 0, 0, 2, 13],
        [6, 2, 26, 0, 0, 0, 0],
        [1, 2, 13, 2, 27, 0, 0],
        [1, 3, 0, 0, 0, 2, 14],
        [1, 2, 29, 0, 0, 2, 14],
        [1, 2, 30, 2, 16, 0, 0],
        [1, 2, 20, 0, 0, 2, 25],
        [1, 2, 31, 0, 0, 2, 27],
        [17, 2, 13, 2, 31, 0, 2],
      ],
    },
    {
      0: 12500,
      40: [2, 5, 2, 5, 2, 10, 2, 14],
      12: [
        [
          1,
          0,
          [
            0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4,
            4, 5, 0, 0, 2, 4, 4, 4, 4, 5, 0,
          ],
          [
            6, 2, 6, 6, 54e5, -54e5, 6, 14, 7, 7, 54e5, -108e5, 5, 13, 5, 6, 6,
            6, 108e5, 54e5, 11, 0, 6, 6, 162e5, 108e5, 10, 5, 10, 14, 6, 6, 0,
            54e5, 9, 6, 6, 6, 0, 54e5, 7, 7, 54e5, 108e5,
          ],
          [4, 5, 10, 11, 18, 19, 21, 24, 25, 32, 33, 38, 39, 42, 43],
          1,
        ],
        [
          3,
          0,
          [0, 2, 4, 4, 4, 4, 5, 0, 0, 2, 4, 4, 4, 4, 5, 0],
          [
            9, 6, 6, 6, 0, 54e5, 7, 7, 54e5, 108e5, 5, 14, 6, 6, 0, 162e5, 7, 7,
            162e5, 108e5,
          ],
          [4, 5, 8, 9, 14, 15, 18, 19],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0, 0,
            2, 4, 4, 4, 4, 1, 2, 0, 2, 1, 2, 0, 2, 4, 4, 1, 2, 0, 2, 4, 4, 1, 2,
          ],
          [
            5, 13, 5, 6, 6, 6, 108e5, 54e5, 11, 0, 6, 6, 162e5, 108e5, 10, 5,
            10, 14, 6, 6, 0, 54e5, 6, 2, 6, 6, 54e5, 108e5, 8, 0, 6, 6, 162e5,
            108e5, 7, 7, 54e5, 108e5, 9, 6, 10, 5, 8, 5, 6, 13, 7, 7, 162e5,
            108e5, 5, 14, 6, 2, 6, 6, 54e5, -54e5, 5, 13,
          ],
          [6, 7, 9, 12, 13, 20, 21, 26, 27, 29, 32, 33, 36, 37, 48, 49, 56, 57],
          1,
        ],
      ],
      11: [[0, 0, 0, 2, 5, null, [0, 0, 0, 0, 25e3]]],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 108e5, 2, 5, 2, 4],
        [0, 54e5, 2, 1, 4, 0],
        [0, 0, 2, 10, 2, 4],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 25e3],
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 3, 2, 0, 0, 1e5],
        [2, 2, 5, 0, 1, 0, 2],
        [2, 2, 5, 0, 1, 0, 4],
        [1, 2, 5, 2, 6, 0, 0],
        [1, 2, 5, 2, 5, 0, 0],
        [1, 3, 0, 0, 0, 2, 5],
        [1, 3, 0, 0, 0, 2, 6],
        [1, 2, 10, 0, 0, 2, 6],
        [1, 4, 0, 0, 0, 2, 5],
        [1, 4, 0, 0, 0, 2, 6],
      ],
    },
    {
      0: 12500,
      1: 0,
      40: [2, 24, 2, 26, 2, 25, 2, 27],
      12: [
        [
          1,
          1,
          [0, 2, 3, 6, 1, 2, 3, 6, 5, 0],
          [13, 2, 17, 4, 18, 5, 15, 2, 20, 6, 22, 8, 21, 7, 19, 6],
          [],
          1,
        ],
      ],
      11: [
        [0, 0, 0, 2, 2, null, [0, 0, 0, 0, 2e4]],
        [0, 2, 30, 4, 0, [1, 0, -1e4, 0, 1e4], null],
      ],
      48: [
        [0, 162e5, 2, 31, 2, 2],
        [0, 108e5, 2, 11, 2, 29],
        [0, 54e5, 2, 30, 2, 6],
        [0, 0, 2, 23, 2, 29],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 2e4],
        [16, 0, -1e4, 1, 1, 0, 1e4],
        [2, 4, 0, 2, 0, 0, 1e5],
        [2, 2, 2, 0, 10, 0, 3],
        [1, 2, 2, 0, 0, 2, 3],
        [1, 2, 2, 2, 3, 0, 0],
        [1, 4, 0, 0, 0, 2, 2],
        [1, 2, 6, 0, 0, 2, 3],
        [1, 2, 6, 2, 3, 0, 0],
        [2, 3, 0, 2, 1, 0, 1e5],
        [2, 3, 0, 2, 1, 0, 5e4],
        [4, 2, 9, 0, 0, 0, 0],
        [7, 2, 10, 0, 0, 2, 10],
        [1, 0, 0, 0, 0, 2, 12],
        [7, 2, 10, 2, 10, 0, 0],
        [1, 3, 0, 0, 0, 2, 14],
        [17, 2, 12, 2, 15, 0, 3],
        [1, 2, 13, 2, 16, 0, 0],
        [17, 2, 17, 2, 15, 0, 2],
        [1, 0, 0, 2, 14, 0, 0],
        [1, 3, 0, 2, 12, 0, 0],
        [1, 2, 19, 2, 16, 0, 0],
        [17, 2, 21, 2, 20, 0, 2],
        [1, 3, 0, 0, 0, 2, 11],
        [6, 2, 13, 2, 19, 0, 0],
        [5, 2, 15, 2, 20, 0, 0],
        [2, 4, 0, 2, 0, 0, 5e4],
        [1, 4, 0, 0, 0, 2, 26],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 28, 2, 9, 0, 0],
        [1, 2, 28, 0, 0, 2, 9],
      ],
    },
    {
      0: -20833,
      1: 62500,
      38: 24384,
      40: [2, 26, 2, 28, 2, 27, 2, 29],
      12: [
        [1, 1, [0, 2, 1, 2, 4, 4, 5, 0], [9, 10, 13, 14, 7, 8, 19, 23], [], 1],
      ],
      11: [
        [
          0,
          2,
          9,
          2,
          10,
          [0, 0, -2147483647, 0, 2147483647],
          [1, 0, -2147483647, 0, 2147483647],
        ],
      ],
      48: [
        [0, 162e5, 2, 7, 0, 0],
        [0, 162e5, 2, 26, 2, 28],
        [0, 54e5, 2, 26, 2, 29],
        [0, 54e5, 2, 7, 4, 0],
        [0, 54e5, 2, 27, 2, 29],
        [0, 0, 3, 0, 2, 8],
        [0, 162e5, 2, 27, 2, 28],
        [2, 4, 2, 9, 2, 10],
      ],
      10: [
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 1, 1, 0, 1e5],
        [2, 2, 0, 4, 0, 0, 1],
        [2, 2, 1, 3, 0, 0, 1],
        [9, 2, 2, 2, 3, 0, 0],
        [1, 2, 4, 0, 66e4, 0, 0],
        [1, 2, 4, 0, 0, 0, 66e4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 7, 2, 0, 0, 0],
        [1, 2, 8, 2, 1, 0, 0],
        [11, 2, 7, 2, 5, 0, 0],
        [10, 2, 8, 2, 5, 0, 0],
        [1, 2, 7, 2, 11, 0, 0],
        [1, 2, 8, 2, 12, 0, 0],
        [11, 2, 7, 2, 6, 0, 0],
        [10, 2, 8, 2, 6, 0, 0],
        [1, 2, 7, 2, 15, 0, 0],
        [1, 2, 8, 2, 16, 0, 0],
        [9, 2, 11, 2, 12, 0, 0],
        [9, 2, 15, 2, 16, 0, 0],
        [1, 2, 20, 0, 0, 2, 19],
        [1, 2, 21, 0, 216e5, 0, 0],
        [7, 2, 21, 2, 21, 2, 22],
        [11, 2, 7, 0, 27e5, 0, 0],
        [10, 2, 8, 0, 27e5, 0, 0],
        [1, 2, 7, 0, 0, 2, 24],
        [1, 2, 7, 2, 24, 0, 0],
        [1, 2, 8, 0, 0, 2, 25],
        [1, 2, 8, 2, 25, 0, 0],
      ],
    },
    {
      0: -20833,
      1: 62500,
      38: 24384,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [
            0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 0, 10, 0, 25, 33, 11, 0, 0, 0, 0, 14, 27, 35, 0, 15, 0, 1, 11, 1,
            29, 37, 10, 1, 0, 1, 0, 15, 23, 31, 0, 14,
          ],
          [0, 1, 3, 7, 9, 24, 26, 30],
          1,
        ],
      ],
      11: [
        [
          0,
          2,
          18,
          2,
          19,
          [0, 0, -2147483647, 0, 2147483647],
          [1, 0, -2147483647, 0, 2147483647],
        ],
      ],
      48: [
        [0, 162e5, 2, 16, 0, 0],
        [0, 108e5, 0, 0, 2, 17],
        [0, 54e5, 2, 16, 4, 0],
        [0, 0, 3, 0, 2, 17],
        [0, 54e5, 2, 18, 2, 19],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 1, 1, 0, 1e5],
        [2, 2, 2, 4, 0, 3, 0],
        [4, 2, 3, 0, 0, 0, 0],
        [4, 2, 4, 0, 0, 0, 0],
        [1, 2, 5, 0, 0, 2, 6],
        [7, 2, 2, 0, 7, 0, 2],
        [7, 2, 2, 0, 10, 0, 5],
        [2, 3, 0, 2, 8, 0, 12],
        [2, 3, 0, 2, 9, 0, 12],
        [7, 2, 3, 0, 7, 0, 2],
        [7, 2, 3, 0, 10, 0, 5],
        [2, 4, 0, 2, 12, 0, 12],
        [2, 4, 0, 2, 13, 0, 12],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [1, 2, 16, 2, 2, 0, 0],
        [1, 2, 17, 2, 3, 0, 0],
        [1, 2, 18, 0, 0, 2, 16],
        [1, 2, 19, 0, 0, 2, 17],
        [7, 2, 2, 0, 0, 2, 18],
        [7, 2, 7, 0, 0, 2, 22],
        [7, 2, 3, 2, 10, 2, 18],
        [7, 2, 7, 2, 24, 2, 10],
        [7, 2, 2, 2, 18, 3, 0],
        [7, 2, 7, 3, 0, 2, 26],
        [7, 2, 3, 2, 18, 2, 10],
        [7, 2, 7, 2, 28, 2, 10],
        [7, 2, 2, 2, 14, 2, 19],
        [7, 2, 7, 2, 14, 2, 30],
        [7, 2, 3, 0, 0, 2, 19],
        [7, 2, 7, 2, 32, 0, 0],
        [7, 2, 2, 2, 19, 2, 14],
        [7, 2, 7, 2, 14, 2, 34],
        [7, 2, 3, 2, 19, 4, 0],
        [7, 2, 7, 2, 36, 4, 0],
      ],
    },
    {
      0: -20833,
      1: 62500,
      38: 24384,
      40: [2, 40, 2, 40, 2, 41, 2, 42],
      12: [
        [
          1,
          1,
          [
            0, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 1, 2, 4,
            4, 1, 2, 1, 2, 1, 2, 1, 2, 4, 4, 1, 2, 1, 2, 1, 2, 5, 0,
          ],
          [
            0, 37, 37, 37, 108e5, 54e5, 10, 0, 24, 32, 11, 0, 38, 0, 37, 37,
            162e5, 54e5, 0, 14, 26, 34, 0, 15, 0, 39, 37, 37, 0, 54e5, 11, 1,
            28, 36, 10, 1, 37, 1, 37, 37, 54e5, 54e5, 0, 15, 22, 30, 0, 14,
          ],
          [0, 4, 5, 7, 11, 13, 16, 17, 28, 29, 40, 41, 42, 46],
          1,
        ],
      ],
      11: [
        [
          0,
          2,
          19,
          2,
          20,
          [0, 0, -2147483647, 0, 2147483647],
          [1, 0, -2147483647, 0, 2147483647],
        ],
      ],
      48: [
        [0, 162e5, 2, 16, 0, 0],
        [0, 108e5, 0, 0, 2, 17],
        [0, 54e5, 2, 16, 4, 0],
        [0, 0, 3, 0, 2, 17],
        [0, 54e5, 2, 19, 2, 20],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 1, 1, 0, 1e5],
        [2, 2, 2, 4, 0, 3, 0],
        [4, 2, 3, 0, 0, 0, 0],
        [4, 2, 4, 0, 0, 0, 0],
        [1, 2, 5, 0, 0, 2, 6],
        [7, 2, 2, 0, 7, 0, 2],
        [7, 2, 2, 0, 10, 0, 5],
        [2, 3, 0, 2, 8, 0, 12],
        [2, 3, 0, 2, 9, 0, 12],
        [7, 2, 3, 0, 7, 0, 2],
        [7, 2, 3, 0, 10, 0, 5],
        [2, 4, 0, 2, 12, 0, 12],
        [2, 4, 0, 2, 13, 0, 12],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [5, 3, 0, 4, 0, 0, 0],
        [1, 2, 16, 2, 2, 0, 0],
        [1, 2, 17, 2, 3, 0, 0],
        [7, 2, 2, 0, 0, 2, 19],
        [7, 2, 7, 0, 0, 2, 21],
        [7, 2, 3, 2, 10, 2, 19],
        [7, 2, 7, 2, 23, 2, 10],
        [7, 2, 2, 2, 19, 3, 0],
        [7, 2, 7, 3, 0, 2, 25],
        [7, 2, 3, 2, 19, 2, 10],
        [7, 2, 7, 2, 27, 2, 10],
        [7, 2, 2, 2, 14, 2, 20],
        [7, 2, 7, 2, 14, 2, 29],
        [7, 2, 3, 0, 0, 2, 20],
        [7, 2, 7, 2, 31, 0, 0],
        [7, 2, 2, 2, 20, 2, 14],
        [7, 2, 7, 2, 14, 2, 33],
        [7, 2, 3, 2, 20, 4, 0],
        [7, 2, 7, 2, 35, 4, 0],
        [2, 2, 18, 0, 1, 0, 6],
        [1, 3, 0, 0, 0, 2, 37],
        [1, 4, 0, 0, 0, 2, 37],
        [2, 2, 37, 0, 29289, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 40],
        [1, 4, 0, 0, 0, 2, 40],
      ],
    },
    {
      50: 3,
      37: 54864,
      38: 18288,
      14: 0,
      18: 0,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      38: 24384,
      40: [2, 8, 2, 8, 2, 9, 2, 10],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            0, 5, 5, 5, 108e5, 54e5, 6, 0, 5, 5, 162e5, 54e5, 0, 7, 5, 5, 0,
            54e5, 5, 1, 5, 5, 54e5, 54e5,
          ],
          [0, 4, 5, 7, 10, 11, 16, 17, 22, 23],
          1,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [5, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 2, 2, 0, 1, 0, 6],
        [1, 3, 0, 0, 0, 2, 5],
        [1, 4, 0, 0, 0, 2, 5],
        [2, 2, 5, 0, 29289, 0, 1e5],
        [1, 3, 0, 0, 0, 2, 8],
        [1, 4, 0, 0, 0, 2, 8],
      ],
    },
    {
      38: 18288,
      8: 2,
      9: 2,
      40: [2, 6, 2, 7, 2, 2, 2, 3],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 2, 0, 1, 1, 2, 2, 0, 2, 1, 1],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 162e5, 2, 4, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 4],
      ],
    },
    {
      37: 18288,
      38: 18288,
      40: [2, 4, 2, 6, 2, 5, 2, 7],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 1, 0, 1, 108e5, 54e5, 0, 1, 162e5, 54e5, 0, 1, 0, 54e5, 0, 1,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 0, 0],
        [0, 162e5, 2, 4, 2, 6],
        [0, 108e5, 0, 0, 2, 1],
        [0, 54e5, 2, 4, 2, 7],
        [0, 54e5, 2, 0, 4, 0],
        [0, 54e5, 2, 5, 2, 7],
        [0, 0, 3, 0, 2, 1],
        [0, 162e5, 2, 5, 2, 6],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 0, 0, 27e5, 0, 0],
        [10, 2, 1, 0, 27e5, 0, 0],
        [1, 2, 0, 0, 0, 2, 2],
        [1, 2, 0, 2, 2, 0, 0],
        [1, 2, 1, 0, 0, 2, 3],
        [1, 2, 1, 2, 3, 0, 0],
      ],
    },
    {
      38: 24384,
      8: 2,
      9: 2,
      40: [2, 6, 2, 7, 2, 2, 2, 3],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 1, 1, 0, 2, 1, 1, 2], [], 0],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 4],
      ],
    },
    {
      37: 24384,
      38: 24384,
      40: [0, 0, 2, 6, 2, 3, 2, 7],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 4, 162e5, 108e5, 0, 1],
          [2, 4, 5, 9],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 0, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [0, 4, 0, 0, 0, 0, 0],
        [11, 2, 0, 0, 27e5, 0, 0],
        [1, 2, 0, 2, 2, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [10, 2, 4, 0, 27e5, 0, 0],
        [1, 2, 4, 0, 0, 2, 5],
        [1, 2, 4, 2, 5, 0, 0],
      ],
    },
    {
      38: 24384,
      8: 6,
      9: 6,
      40: [2, 5, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 4, 4, 1, 2, 5, 0],
          [0, 3, 1, 0, 5, 0, 1, 3, 162e5, 108e5, 1, 6],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 5, 0, 6],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 6],
      ],
    },
    {
      38: 24384,
      8: 21600,
      9: 21600,
      40: [0, 0, 0, 0, 2, 3, 2, 0],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 3, 6, 5, 0],
          [0, 0, 21600, 0, 21600, 17322, 10800, 17322, 10800, 23922, 0, 20172],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 2],
        [0, 54e5, 2, 4, 2, 1],
        [0, 0, 3, 0, 2, 2],
      ],
      10: [
        [2, 4, 0, 0, 17322, 0, 21600],
        [2, 4, 0, 0, 20172, 0, 21600],
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      37: 42291,
      8: 2,
      9: 2,
      40: [2, 2, 2, 4, 2, 0, 2, 3],
      12: [[1, 1, [0, 2, 1, 2, 1, 2, 5, 0], [0, 2, 1, 0, 2, 2], [], 0]],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 108e5, 2, 2, 2, 4],
        [0, 54e5, 2, 1, 4, 0],
        [0, 0, 2, 0, 2, 4],
      ],
      10: [
        [2, 3, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      38: 24384,
      8: 5,
      9: 5,
      40: [2, 9, 0, 0, 2, 4, 2, 1],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 5, 1, 0, 5, 0, 4, 5], [], 0],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 162e5, 2, 6, 0, 0],
        [0, 108e5, 2, 7, 2, 8],
        [0, 54e5, 2, 2, 4, 0],
        [0, 54e5, 2, 6, 4, 0],
        [0, 0, 2, 5, 2, 8],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 2, 0, 5],
        [2, 3, 0, 0, 3, 0, 5],
        [2, 3, 0, 0, 4, 0, 5],
        [2, 3, 0, 0, 9, 0, 10],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 10],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 5],
      ],
    },
    {
      37: 24384,
      38: 24384,
      8: 8,
      9: 8,
      40: [2, 4, 2, 5, 2, 0, 2, 1],
      12: [
        [1, 0, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 8, 0, 8, 8, 0, 8], [], 0],
        [0, 1, [0, 2, 1, 2, 0, 2, 1, 2], [1, 0, 1, 8, 0, 1, 8, 1], [], 0],
        [0, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 8, 0, 8, 8, 0, 8], [], 0],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 8],
        [2, 4, 0, 0, 1, 0, 8],
      ],
    },
    {
      38: 24384,
      8: 6,
      9: 6,
      40: [0, 0, 2, 1, 2, 3, 2, 0],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 1, 3, 1, 108e5, 108e5, 6, 5, 3, 1, 0, 108e5],
          [],
          0,
        ],
        [0, 1, [0, 2, 4, 4], [6, 1, 3, 1, 0, 108e5], [], 0],
        [
          0,
          1,
          [0, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [0, 1, 3, 1, 108e5, 108e5, 6, 5, 3, 1, 0, 108e5],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 2, 1],
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 2],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 2],
      ],
      10: [
        [2, 4, 0, 0, 5, 0, 6],
        [2, 4, 0, 0, 1, 0, 3],
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      38: 27432,
      8: 6,
      9: 6,
      40: [2, 5, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          0,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [1, 0, 5, 0, 1, 3, 162e5, 108e5, 1, 6, 1, 3, 54e5, 108e5],
          [],
          0,
        ],
        [0, 1, [0, 2, 4, 4], [5, 6, 1, 3, 54e5, 108e5], [], 0],
        [
          0,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [1, 0, 5, 0, 1, 3, 162e5, 108e5, 1, 6, 1, 3, 54e5, 108e5],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 2, 2, 2, 4],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 2, 0, 3],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 6],
      ],
    },
    {
      37: 24384,
      38: 24384,
      40: [2, 7, 2, 9, 2, 8, 2, 10],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 1, 2, 5, 0],
          [
            3, 0, 3, 4, 54e5, 54e5, 3, 4, 108e5, 54e5, 3, 4, 162e5, 54e5, 3, 4,
            0, 2, 1, 10, 1, 0,
          ],
          [4, 5, 8, 9, 12, 13, 16],
          1,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [9, 3, 0, 4, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 3, 0, 27e5, 0, 0],
        [10, 2, 4, 0, 27e5, 0, 0],
        [1, 2, 3, 0, 0, 2, 5],
        [1, 2, 3, 2, 5, 0, 0],
        [1, 2, 4, 0, 0, 2, 6],
        [1, 2, 4, 2, 6, 0, 0],
      ],
    },
    {
      38: 18288,
      8: 5,
      9: 5,
      40: [0, 0, 2, 5, 2, 1, 2, 0],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 1, 5, 0, 5, 5, 0, 5], [], 0],
      ],
      48: [
        [0, 162e5, 2, 2, 2, 3],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 10],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 5],
      ],
    },
    {
      38: 24384,
      8: 5,
      9: 5,
      40: [2, 7, 0, 0, 2, 2, 2, 1],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 5, 0, 4, 5, 1, 5], [], 0],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 2, 5, 2, 6],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 2, 3, 2, 6],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 4, 0, 5],
        [2, 3, 0, 0, 9, 0, 10],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 10],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 5],
      ],
    },
    {
      37: 42291,
      8: 2,
      9: 2,
      40: [2, 2, 0, 0, 2, 0, 2, 3],
      12: [[1, 1, [0, 2, 1, 2, 1, 2, 5, 0], [0, 0, 2, 0, 1, 2], [], 0]],
      48: [
        [0, 162e5, 2, 1, 0, 0],
        [0, 108e5, 2, 2, 2, 3],
        [0, 54e5, 2, 1, 4, 0],
        [0, 0, 2, 0, 2, 3],
      ],
      10: [
        [2, 3, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      38: 26079,
      8: 21600,
      9: 21600,
      40: [0, 0, 2, 0, 2, 4, 2, 1],
      12: [
        [
          1,
          0,
          [
            0, 2, 1, 2, 1, 2, 3, 6, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 3, 6, 1, 2, 5,
            0, 0, 2, 1, 2, 1, 2, 1, 2, 3, 6, 1, 2, 5, 0,
          ],
          [
            0, 3675, 18595, 3675, 18595, 18022, 9298, 18022, 9298, 23542, 0,
            20782, 1532, 3675, 1532, 1815, 2e4, 1815, 2e4, 16252, 19298, 16252,
            18595, 16352, 18595, 16352, 18595, 3675, 2972, 1815, 2972, 0, 21600,
            0, 21600, 14392, 20800, 14392, 2e4, 14467, 2e4, 14467, 2e4, 1815,
          ],
          [],
          0,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 1, 2, 3, 6, 5, 0, 0, 2, 1, 2, 1, 2, 1, 2, 3, 6, 0, 2, 1,
            2, 1, 2, 1, 2, 3, 6,
          ],
          [
            0, 3675, 18595, 3675, 18595, 18022, 9298, 18022, 9298, 23542, 0,
            20782, 1532, 3675, 1532, 1815, 2e4, 1815, 2e4, 16252, 19298, 16252,
            18595, 16352, 18595, 16352, 2972, 1815, 2972, 0, 21600, 0, 21600,
            14392, 20800, 14392, 2e4, 14467, 2e4, 14467,
          ],
          [],
          0,
        ],
        [
          0,
          0,
          [
            0, 2, 3, 6, 1, 2, 3, 6, 1, 2, 3, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
            2, 5, 0,
          ],
          [
            0, 20782, 9298, 23542, 9298, 18022, 18595, 18022, 18595, 16352,
            18595, 16352, 19298, 16252, 2e4, 16252, 2e4, 14467, 2e4, 14467,
            20800, 14392, 21600, 14392, 21600, 0, 2972, 0, 2972, 1815, 1532,
            1815, 1532, 3675, 0, 3675,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 2, 2, 1],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [2, 4, 0, 0, 3675, 0, 21600],
        [2, 4, 0, 0, 20782, 0, 21600],
        [2, 3, 0, 0, 9298, 0, 21600],
        [2, 3, 0, 0, 12286, 0, 21600],
        [2, 3, 0, 0, 18595, 0, 21600],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      8: 10,
      9: 10,
      40: [2, 3, 0, 0, 2, 0, 2, 1],
      12: [
        [1, 0, [0, 2, 1, 2, 1, 2, 5, 0], [0, 0, 10, 0, 5, 10], [], 0],
        [0, 1, [0, 2, 1, 2], [4, 8, 6, 8], [], 0],
        [0, 1, [0, 2, 1, 2, 1, 2, 5, 0], [0, 0, 10, 0, 5, 10], [], 0],
      ],
      48: [
        [0, 0, 2, 0, 2, 1],
        [0, 54e5, 2, 2, 4, 0],
        [0, 108e5, 2, 3, 2, 1],
        [0, 162e5, 2, 2, 0, 0],
      ],
      10: [
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
      ],
    },
    {
      37: 24384,
      38: 24384,
      8: 10,
      9: 10,
      40: [0, 0, 0, 0, 2, 2, 2, 0],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 10, 0, 10, 8, 5, 10, 0, 8],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 1],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 1],
      ],
      10: [
        [2, 4, 0, 0, 4, 0, 5],
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
      ],
    },
    {
      38: 24384,
      8: 6,
      9: 6,
      40: [2, 5, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [1, 0, 6, 0, 1, 3, 162e5, -108e5, 1, 6, 1, 3, 54e5, 108e5],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 2, 2, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 5, 0, 6],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 6],
      ],
    },
    {
      37: 24384,
      38: 24384,
      40: [2, 6, 2, 8, 2, 7, 2, 9],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 3, 2, 3, 108e5, 54e5, 2, 3, 162e5, 54e5, 2, 3, 0, 54e5, 2, 3,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
        [0, 1, [0, 2, 1, 2, 0, 2, 1, 2], [2, 0, 2, 0, 0, 3, 1, 3], [1, 4], 1],
        [
          0,
          1,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 3, 2, 3, 108e5, 54e5, 2, 3, 162e5, 54e5, 2, 3, 0, 54e5, 2, 3,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 162e5, 2, 6, 2, 8],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 6, 2, 9],
        [0, 54e5, 2, 2, 4, 0],
        [0, 54e5, 2, 7, 2, 9],
        [0, 0, 3, 0, 2, 3],
        [0, 162e5, 2, 7, 2, 8],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 2, 0, 27e5, 0, 0],
        [10, 2, 3, 0, 27e5, 0, 0],
        [1, 2, 2, 0, 0, 2, 4],
        [1, 2, 2, 2, 4, 0, 0],
        [1, 2, 3, 0, 0, 2, 5],
        [1, 2, 3, 2, 5, 0, 0],
      ],
    },
    {
      38: 24384,
      8: 8,
      9: 8,
      40: [2, 5, 0, 0, 2, 2, 2, 1],
      12: [
        [1, 0, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 8, 0, 8, 8, 0, 8], [], 0],
        [0, 1, [0, 2, 1, 2, 0, 2, 1, 2], [1, 0, 1, 8, 7, 0, 7, 8], [], 0],
        [0, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 8, 0, 8, 8, 0, 8], [], 0],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 7, 0, 8],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 8],
      ],
    },
    {
      38: 20994,
      8: 10,
      9: 10,
      40: [2, 5, 0, 0, 2, 2, 2, 1],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 5, 2, 0, 8, 0, 10, 5, 8, 10, 2, 10],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 3, 0, 0],
        [0, 108e5, 0, 0, 2, 4],
        [0, 54e5, 2, 3, 4, 0],
        [0, 0, 3, 0, 2, 4],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 4, 0, 5],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 5],
      ],
    },
    {
      38: 24384,
      8: 1,
      9: 1,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [1, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 0, 1, 0, 1, 1, 0, 1], [], 0],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      8: 5,
      9: 5,
      40: [0, 0, 2, 4, 2, 1, 2, 0],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 1, 1, 0, 5, 0, 5, 5, 0, 5],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 5],
      ],
    },
    {
      8: 20,
      9: 20,
      40: [0, 0, 2, 7, 2, 1, 2, 3],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 4, 4, 1, 2, 4, 4, 4, 4, 5, 0],
          [
            0, 2, 5, 2, 108e5, -108e5, 5, 2, 108e5, 108e5, 20, 18, 5, 2, 0,
            -108e5, 5, 2, 0, 108e5,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 2, 5],
        [0, 108e5, 0, 0, 2, 6],
        [0, 54e5, 2, 4, 2, 2],
        [0, 0, 3, 0, 2, 6],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 4, 0, 0, 9, 0, 10],
        [2, 4, 0, 0, 4, 0, 5],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 10],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 5],
      ],
    },
    {
      37: 18288,
      8: 2,
      9: 2,
      40: [2, 6, 2, 7, 2, 2, 2, 3],
      12: [
        [1, 0, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 1, 1, 0, 2, 1, 1, 2], [], 0],
        [0, 1, [0, 2, 1, 2], [0, 1, 2, 1], [], 0],
        [0, 1, [0, 2, 1, 2, 1, 2, 1, 2, 5, 0], [0, 1, 1, 0, 2, 1, 1, 2], [], 0],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 3, 0, 4],
        [2, 4, 0, 0, 3, 0, 4],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 4],
        [2, 4, 0, 0, 1, 0, 4],
      ],
    },
    {
      37: 24384,
      38: 24384,
      40: [2, 4, 2, 6, 2, 5, 2, 7],
      12: [
        [
          1,
          0,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 1, 0, 1, 108e5, 54e5, 0, 1, 162e5, 54e5, 0, 1, 0, 54e5, 0, 1,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
        [0, 1, [0, 2, 1, 2, 0, 2, 1, 2], [4, 6, 5, 7, 5, 6, 4, 7], [], 1],
        [
          0,
          1,
          [0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 1, 0, 1, 108e5, 54e5, 0, 1, 162e5, 54e5, 0, 1, 0, 54e5, 0, 1,
            54e5, 54e5,
          ],
          [1, 2, 3, 6, 7, 10, 11, 14, 15],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 0, 0, 0],
        [0, 162e5, 2, 4, 2, 6],
        [0, 108e5, 0, 0, 2, 1],
        [0, 54e5, 2, 4, 2, 7],
        [0, 54e5, 2, 0, 4, 0],
        [0, 54e5, 2, 5, 2, 7],
        [0, 0, 3, 0, 2, 1],
        [0, 162e5, 2, 5, 2, 6],
      ],
      10: [
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [11, 2, 0, 0, 27e5, 0, 0],
        [10, 2, 1, 0, 27e5, 0, 0],
        [1, 2, 0, 0, 0, 2, 2],
        [1, 2, 0, 2, 2, 0, 0],
        [1, 2, 1, 0, 0, 2, 3],
        [1, 2, 1, 2, 3, 0, 0],
      ],
    },
    {
      38: 12192,
      8: 21600,
      9: 21600,
      40: [2, 0, 2, 2, 2, 1, 2, 3],
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 4, 4, 1, 2, 4, 4, 5, 0],
          [
            3475, 0, 18125, 0, 3475, 10800, 162e5, 108e5, 3475, 21600, 3475,
            10800, 54e5, 108e5,
          ],
          [],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 4, 0, 0],
        [0, 108e5, 0, 0, 2, 5],
        [0, 54e5, 2, 4, 4, 0],
        [0, 0, 3, 0, 2, 5],
      ],
      10: [
        [2, 3, 0, 0, 1018, 0, 21600],
        [2, 3, 0, 0, 20582, 0, 21600],
        [2, 4, 0, 0, 3163, 0, 21600],
        [2, 4, 0, 0, 18437, 0, 21600],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    { 50: 2, 25: 1, 32: 0, 14: 0 },
    { 50: 2, 32: 0 },
    {
      32: 0,
      37: 41910,
      38: 41910,
      8: 21600,
      9: 21600,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 3, 6, 3, 6, 1, 2, 3, 6, 3, 6, 1, 2, 1, 2, 1, 2, 5, 0],
          [
            0, 5615, 10427, 5615, 10427, 5615, 10412, 481, 10427, 435, 10427,
            -550, 11410, 445, 11410, 445, 21600, 10795, 21600, 10795, 11413,
            21119, 11413, 21141, 10263, 22165, 10427, 21155, 10427, 21155,
            10427, 15976, 0, 15976, 0, 5615,
          ],
          [],
          0,
        ],
      ],
    },
    {
      32: 0,
      37: 38100,
      38: 38100,
      8: 21600,
      9: 21600,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 3, 6, 3, 6, 1, 2, 3, 6, 3, 6, 1, 2, 1, 2, 1, 2, 5, 0],
          [
            0, 13287, 8352, 4934, 8352, 4934, 4221, 828, 4196, 779, 3405, -10,
            4992, 0, 4992, 0, 21460, 141, 21460, 141, 21582, 16584, 21600,
            16601, 21501, 18344, 20821, 17402, 20821, 17402, 16665, 13247, 8312,
            21600, 0, 13287,
          ],
          [],
          0,
        ],
      ],
    },
    {
      32: 0,
      37: 41910,
      38: 41910,
      8: 21600,
      9: 21600,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 3, 6, 3, 6, 1, 2, 3, 6, 3, 6, 1, 2, 1, 2, 1, 2, 5, 0],
          [
            5615, 21600, 5615, 11173, 5615, 11173, 481, 11188, 435, 11173, -550,
            11173, 445, 10190, 445, 10190, 10795, 0, 10795, 0, 21119, 10187,
            21141, 10187, 22165, 11337, 21155, 11173, 21155, 11173, 15976,
            11173, 15976, 21600, 5615, 21600,
          ],
          [],
          0,
        ],
      ],
    },
    {
      32: 0,
      37: 76200,
      38: 57150,
      8: 21600,
      9: 21600,
      12: [
        [
          1,
          1,
          [0, 2, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 5, 0],
          [
            21600, 8628, 21600, 3863, 16763, 0, 10799, 0, 4833, 0, 0, 3863, 0,
            8628, 0, 12311, 2883, 15453, 6947, 16693, 7371, 16821, 7356, 19211,
            5803, 21600, 8571, 20513, 9126, 17161, 9574, 17203, 9976, 17238,
            10384, 17257, 10799, 17257, 16763, 17257, 21600, 13394, 21600, 8628,
          ],
          [],
          0,
        ],
      ],
    },
    {
      32: 0,
      37: 76200,
      38: 76200,
      8: 21600,
      9: 21600,
      12: [
        [
          1,
          1,
          [
            0, 2, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3,
            6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
            3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3,
            6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
            3, 6, 5, 0,
          ],
          [
            10800, 0, 10968, 0, 11963, 1517, 12076, 1533, 12193, 1550, 13559,
            355, 13720, 399, 13882, 445, 14431, 2177, 14537, 2224, 14644, 2270,
            16281, 1490, 16426, 1578, 16568, 1665, 16631, 3481, 16720, 3553,
            16810, 3627, 18596, 3321, 18711, 3442, 18825, 3565, 18398, 5332,
            18465, 5425, 18530, 5521, 20335, 5708, 20412, 5857, 20490, 6006,
            19601, 7591, 19639, 7699, 19678, 7809, 21366, 8476, 21399, 8642,
            21433, 8807, 20151, 10091, 20159, 10208, 20167, 10323, 21611, 11421,
            21600, 11588, 21588, 11757, 20009, 12648, 19986, 12762, 19961,
            12877, 21057, 14323, 21001, 14482, 20945, 14641, 19182, 15072,
            19129, 15175, 19077, 15279, 19739, 16970, 19644, 17107, 19546,
            17244, 17735, 17182, 17655, 17267, 17576, 17352, 17761, 19160,
            17631, 19265, 17500, 19372, 15773, 18823, 15674, 18883, 15575,
            18945, 15267, 20733, 15113, 20801, 14957, 20868, 13442, 19873,
            13331, 19904, 13219, 19935, 12439, 21576, 12273, 21599, 12109,
            21622, 10915, 20252, 10800, 20252, 10684, 20252, 9492, 21622, 9326,
            21599, 9159, 21576, 8380, 19935, 8268, 19904, 8157, 19873, 6641,
            20868, 6486, 20801, 6332, 20733, 6024, 18945, 5925, 18883, 5825,
            18823, 4099, 19372, 3968, 19265, 3837, 19160, 4023, 17352, 3944,
            17267, 3863, 17182, 2053, 17244, 1954, 17107, 1859, 16970, 2522,
            15279, 2469, 15175, 2416, 15072, 654, 14641, 598, 14482, 541, 14323,
            1638, 12877, 1615, 12762, 1590, 12648, 11, 11757, 0, 11588, -10,
            11421, 1431, 10323, 1439, 10208, 1447, 10091, 166, 8807, 200, 8642,
            235, 8476, 1920, 7809, 1959, 7699, 1999, 7591, 1109, 6006, 1187,
            5857, 1264, 5708, 3069, 5521, 3134, 5425, 3201, 5332, 2773, 3565,
            2887, 3442, 3003, 3321, 4789, 3627, 4878, 3553, 4970, 3481, 5033,
            1665, 5173, 1578, 5317, 1490, 6956, 2270, 7062, 2224, 7167, 2177,
            7716, 445, 7879, 399, 8040, 355, 9406, 1550, 9522, 1533, 9637, 1517,
            10630, 0, 10800, 0,
          ],
          [],
          0,
        ],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [[0, 1, [0, 2, 1, 2, 1, 2], [0, 0, 0, 0, 0, 1], [2, 4, 5], 0]],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      40: [0, 0, 0, 0, 2, 1, 2, 0],
      12: [
        [
          0,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2],
          [0, 0, 2, 0, 2, 0, 1, 0],
          [0, 1, 3],
          1,
        ],
      ],
      11: [[0, 2, 2, 2, 3, [0, 0, -2147483647, 0, 2147483647], null]],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      1: 5e4,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          0,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2],
          [0, 0, 2, 0, 2, 4, 0, 4, 0, 1],
          [0, 1, 3],
          1,
        ],
      ],
      11: [
        [0, 2, 2, 2, 5, [0, 0, -2147483647, 0, 2147483647], null],
        [0, 2, 3, 2, 4, null, [1, 0, -2147483647, 0, 2147483647]],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 1, 0, 0, 1e5],
        [17, 2, 2, 3, 0, 0, 2],
        [2, 4, 0, 1, 1, 0, 1e5],
        [17, 0, 0, 2, 4, 0, 2],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      1: 5e4,
      2: 5e4,
      40: [0, 0, 0, 0, 2, 1, 2, 0],
      12: [
        [
          0,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
          [0, 0, 2, 0, 2, 5, 3, 5, 3, 0, 1, 0],
          [0, 1, 3],
          1,
        ],
      ],
      11: [
        [0, 2, 2, 2, 6, [0, 0, -2147483647, 0, 2147483647], null],
        [0, 2, 4, 2, 5, null, [1, 0, -2147483647, 0, 2147483647]],
        [0, 2, 3, 2, 7, [2, 0, -2147483647, 0, 2147483647], null],
      ],
      10: [
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 3, 0, 1, 2, 0, 1e5],
        [17, 2, 2, 2, 3, 0, 2],
        [2, 4, 0, 1, 1, 0, 1e5],
        [17, 0, 0, 2, 5, 0, 2],
        [17, 4, 0, 2, 5, 0, 2],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [[0, 1, [0, 2, 3, 6], [0, 0, 2, 0, 0, 3, 0, 1], [0, 1, 3], 1]],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      40: [0, 0, 0, 0, 2, 1, 2, 0],
      12: [
        [
          0,
          1,
          [0, 2, 3, 6, 3, 6],
          [0, 0, 2, 0, 9, 13, 1, 11, 14, 15, 16, 10, 0, 10],
          [0, 1, 3],
          1,
        ],
      ],
      11: [[0, 2, 1, 2, 11, [0, 0, -2147483647, 0, 2147483647], null]],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 0, 1, 0, 0, 1e5],
        [2, 2, 1, 0, 1, 0, 2],
        [2, 0, 1, 0, 1, 0, 4],
        [1, 0, 0, 0, 0, 2, 2],
        [1, 2, 0, 0, 0, 2, 1],
        [2, 2, 5, 0, 1, 0, 2],
        [1, 2, 0, 2, 4, 2, 6],
        [2, 2, 3, 2, 7, 0, 1],
        [1, 2, 1, 0, 0, 2, 8],
        [0, 4, 0, 0, 0, 0, 0],
        [3, 0, 0, 2, 10, 0, 0],
        [2, 2, 3, 2, 10, 0, 1],
        [1, 2, 11, 0, 0, 2, 12],
        [1, 2, 1, 2, 8, 0, 0],
        [1, 2, 11, 2, 12, 0, 0],
        [1, 2, 0, 0, 0, 2, 6],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      1: 5e4,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [
        [
          0,
          1,
          [0, 2, 3, 6, 3, 6, 3, 6],
          [
            0, 0, 2, 0, 12, 23, 1, 15, 24, 25, 29, 33, 4, 14, 34, 35, 0, 36, 0,
            13,
          ],
          [0, 1, 3],
          1,
        ],
      ],
      11: [
        [0, 2, 1, 2, 15, [0, 0, -2147483647, 0, 2147483647], null],
        [0, 2, 4, 2, 14, null, [1, 0, -2147483647, 0, 2147483647]],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 0, 1, 0, 0, 1e5],
        [2, 2, 1, 0, 1, 0, 2],
        [2, 0, 4, 0, 1, 0, 15],
        [3, 2, 1, 2, 0, 0, 0],
        [1, 2, 4, 0, 0, 2, 2],
        [2, 2, 3, 2, 5, 0, 1],
        [2, 0, 1, 0, 1, 0, 15],
        [1, 0, 0, 0, 0, 2, 7],
        [1, 2, 0, 0, 0, 2, 1],
        [2, 2, 8, 2, 9, 0, 1],
        [1, 2, 6, 2, 10, 0, 0],
        [1, 2, 1, 0, 0, 2, 11],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 2, 13, 1, 1, 0, 1e5],
        [3, 0, 0, 2, 14, 0, 0],
        [2, 2, 3, 2, 14, 0, 1],
        [1, 0, 0, 0, 0, 2, 15],
        [1, 2, 13, 0, 0, 2, 14],
        [2, 2, 18, 0, 1, 0, 2],
        [1, 2, 13, 2, 17, 2, 19],
        [2, 2, 8, 2, 20, 0, 1],
        [1, 2, 16, 2, 21, 0, 0],
        [1, 2, 15, 0, 0, 2, 22],
        [1, 2, 1, 2, 11, 0, 0],
        [1, 2, 15, 2, 22, 0, 0],
        [2, 2, 8, 2, 5, 0, 1],
        [2, 2, 3, 2, 9, 0, 1],
        [1, 2, 26, 2, 27, 0, 0],
        [1, 2, 4, 0, 0, 2, 28],
        [2, 2, 8, 2, 14, 0, 1],
        [2, 2, 3, 2, 20, 0, 1],
        [1, 2, 30, 2, 31, 0, 0],
        [1, 2, 14, 0, 0, 2, 32],
        [1, 2, 4, 2, 28, 0, 0],
        [1, 2, 14, 2, 32, 0, 0],
        [1, 2, 13, 0, 0, 2, 19],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      0: 5e4,
      1: 5e4,
      2: 5e4,
      40: [0, 0, 0, 0, 2, 1, 2, 0],
      12: [
        [
          0,
          1,
          [0, 2, 3, 6, 3, 6, 3, 6, 3, 6],
          [
            0, 0, 2, 0, 20, 32, 1, 23, 33, 34, 41, 47, 5, 22, 48, 49, 54, 59, 4,
            25, 60, 61, 62, 21, 0, 21,
          ],
          [0, 1, 3],
          1,
        ],
      ],
      11: [
        [0, 2, 1, 2, 23, [0, 0, -2147483647, 0, 2147483647], null],
        [0, 2, 5, 2, 22, null, [1, 0, -2147483647, 0, 2147483647]],
        [0, 2, 4, 2, 25, [2, 0, -2147483647, 0, 2147483647], null],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 0, 1, 0, 0, 1e5],
        [2, 2, 1, 0, 1, 0, 2],
        [2, 0, 15, 0, 1, 0, 56],
        [2, 2, 0, 1, 2, 0, 1e5],
        [3, 2, 1, 2, 4, 0, 0],
        [1, 2, 5, 0, 0, 2, 2],
        [2, 2, 3, 2, 6, 0, 1],
        [2, 0, 4, 0, 1, 0, 56],
        [1, 0, 0, 0, 0, 2, 8],
        [1, 2, 4, 0, 0, 2, 1],
        [2, 2, 9, 2, 10, 0, 1],
        [2, 0, 1, 0, 1, 0, 56],
        [1, 0, 0, 0, 0, 2, 5],
        [1, 2, 0, 0, 0, 2, 4],
        [2, 2, 14, 0, 1, 0, 2],
        [1, 2, 0, 2, 13, 2, 15],
        [2, 2, 12, 2, 16, 0, 1],
        [1, 2, 11, 2, 17, 0, 0],
        [1, 2, 7, 2, 18, 0, 0],
        [1, 2, 1, 0, 0, 2, 19],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 2, 21, 1, 1, 0, 1e5],
        [3, 0, 0, 2, 22, 0, 0],
        [2, 2, 3, 2, 22, 0, 1],
        [3, 2, 22, 2, 21, 0, 0],
        [1, 2, 25, 0, 0, 2, 23],
        [2, 2, 9, 2, 26, 0, 1],
        [1, 2, 21, 0, 0, 2, 22],
        [2, 2, 12, 2, 28, 0, 1],
        [1, 2, 27, 2, 29, 0, 0],
        [1, 2, 24, 2, 30, 0, 0],
        [1, 2, 23, 0, 0, 2, 31],
        [1, 2, 1, 2, 19, 0, 0],
        [1, 2, 23, 2, 31, 0, 0],
        [2, 2, 9, 2, 6, 0, 1],
        [2, 0, 16, 0, 1, 0, 56],
        [2, 2, 36, 2, 10, 0, 1],
        [2, 2, 9, 2, 16, 0, 1],
        [1, 2, 37, 2, 38, 0, 0],
        [1, 2, 35, 2, 39, 0, 0],
        [1, 2, 5, 0, 0, 2, 40],
        [2, 2, 9, 2, 22, 0, 1],
        [2, 2, 36, 2, 26, 0, 1],
        [2, 2, 9, 2, 28, 0, 1],
        [1, 2, 43, 2, 44, 0, 0],
        [1, 2, 42, 2, 45, 0, 0],
        [1, 2, 22, 0, 0, 2, 46],
        [1, 2, 5, 2, 40, 0, 0],
        [1, 2, 22, 2, 46, 0, 0],
        [2, 2, 12, 2, 6, 0, 1],
        [2, 2, 3, 2, 16, 0, 1],
        [1, 2, 11, 2, 51, 0, 0],
        [1, 2, 50, 2, 52, 0, 0],
        [1, 2, 4, 0, 0, 2, 53],
        [2, 2, 12, 2, 22, 0, 1],
        [2, 2, 3, 2, 28, 0, 1],
        [1, 2, 27, 2, 56, 0, 0],
        [1, 2, 55, 2, 57, 0, 0],
        [1, 2, 25, 0, 0, 2, 58],
        [1, 2, 4, 2, 53, 0, 0],
        [1, 2, 25, 2, 58, 0, 0],
        [1, 2, 0, 0, 0, 2, 15],
      ],
    },
    {
      50: 5,
      25: 1,
      13: 0,
      115: 0,
      32: 0,
      40: [0, 0, 0, 0, 2, 0, 2, 1],
      12: [[0, 1, [0, 2, 1, 2], [0, 0, 0, 1], [2, 3], 0]],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
      ],
    },
    { 50: 2, 25: 1, 32: 0, 14: 0 },
    { 50: 6, 59: 1, 14: 0, 17: 0, 137: 0, 144: 0, 71: 0, 32: 0 },
    { 14: 0, 17: 0, 137: 0, 144: 0, 71: 0, 44: 0, 125: 0, 46: 0 },
    {
      50: 4,
      115: 0,
      116: 1,
      71: 0,
      32: 0,
      125: 0,
      59: 1,
      81: 1,
      14: 0,
      101: 1,
      18: 0,
      83: 0,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    {
      12: [
        [1, 1, [0, 2, 1, 6, 5, 0], [0, 0, 12e4, 0, 12e4, 12e4, 0, 12e4], [], 0],
      ],
      50: 0,
      13: 0,
      115: 0,
      116: 1,
      32: 0,
      125: 0,
      46: 0,
      14: 0,
      83: 0,
    },
    {
      0: 1e5,
      40: [2, 19, 2, 10, 2, 20, 2, 11],
      12: [
        [
          1,
          1,
          [0, 2, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4, 5, 0],
          [
            0, 2, 12, 2, 108e5, 54e5, 17, 0, 16, 7, 3, 8, 3, 2, 12, 2, 0, 54e5,
            12, 2, 54e5, 54e5,
          ],
          [0, 4, 5, 7, 16, 17, 20, 21],
          1,
        ],
      ],
      11: [[0, 2, 16, 0, 0, [0, 0, 0, 0, 2e5], null]],
      48: [
        [0, 0, 3, 0, 2, 2],
        [0, 54e5, 2, 20, 2, 11],
        [0, 54e5, 2, 12, 4, 0],
        [0, 54e5, 2, 19, 2, 11],
        [0, 108e5, 0, 0, 2, 2],
        [0, 162e5, 2, 19, 2, 10],
        [0, 162e5, 2, 12, 0, 0],
        [0, 162e5, 2, 16, 2, 7],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 2e5],
        [14, 0, 2, 0, 0, 0, 0],
        [2, 4, 0, 0, 1, 0, 2],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 1, 0, 1],
        [2, 2, 4, 2, 0, 0, 1e5],
        [10, 2, 5, 0, 27e5, 0, 0],
        [1, 2, 2, 0, 0, 2, 6],
        [17, 2, 2, 2, 7, 0, 2],
        [10, 2, 2, 0, 27e5, 0, 0],
        [1, 2, 2, 0, 0, 2, 9],
        [1, 2, 2, 2, 9, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 2, 12, 2, 1, 0, 1],
        [2, 2, 13, 2, 0, 0, 1e5],
        [11, 2, 14, 0, 27e5, 0, 0],
        [1, 2, 12, 2, 15, 0, 0],
        [17, 2, 12, 2, 16, 0, 2],
        [11, 2, 12, 0, 27e5, 0, 0],
        [1, 2, 12, 0, 0, 2, 18],
        [1, 2, 12, 2, 18, 0, 0],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 12500,
      40: [2, 19, 2, 8, 2, 22, 2, 38],
      12: [
        [
          1,
          0,
          [
            0, 2, 2, 4, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 1, 2, 2, 4, 1, 2, 2, 4, 1,
            2, 2, 4, 1, 2, 5, 0,
          ],
          [
            0, 0, 27, 28, 20, 26, 19, 33, 17, 36, 22, 33, 21, 26, 29, 28, 14, 0,
            23, 12, 14, 10, 42, 41, 22, 37, 22, 38, 17, 43, 19, 38, 19, 37, 39,
            41, 0, 10, 18, 12,
          ],
          [0, 1, 17, 36],
          1,
        ],
        [
          3,
          0,
          [0, 2, 2, 4, 1, 2, 1, 2, 2, 4, 1, 2, 5, 0],
          [20, 44, 17, 45, 21, 44, 21, 26, 22, 33, 17, 36, 19, 33, 20, 26],
          [],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 2, 4, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 1, 2, 2, 4, 1, 2, 2, 4, 1,
            2, 2, 4, 1, 2, 5, 0, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2,
          ],
          [
            0, 0, 27, 28, 20, 26, 19, 33, 17, 36, 22, 33, 21, 26, 29, 28, 14, 0,
            23, 12, 14, 10, 42, 41, 22, 37, 22, 38, 17, 43, 19, 38, 19, 37, 39,
            41, 0, 10, 18, 12, 19, 37, 19, 33, 22, 33, 22, 37, 20, 26, 20, 44,
            21, 44, 21, 26,
          ],
          [0, 1, 17, 36],
          1,
        ],
      ],
      11: [
        [0, 2, 17, 2, 8, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 19, 4, 0, [1, 0, 25e3, 0, 75e3], null],
        [0, 0, 0, 2, 13, null, [2, 2, 5, 2, 0]],
      ],
      48: [
        [0, 162e5, 2, 17, 2, 8],
        [0, 108e5, 2, 18, 2, 12],
        [0, 54e5, 2, 17, 4, 0],
        [0, 0, 2, 23, 2, 12],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [16, 0, 25e3, 1, 1, 0, 75e3],
        [1, 0, 1e5, 0, 0, 2, 0],
        [2, 2, 2, 0, 1, 0, 2],
        [1, 2, 0, 0, 0, 2, 3],
        [6, 0, 0, 2, 4, 0, 0],
        [16, 2, 5, 1, 2, 2, 0],
        [2, 4, 0, 2, 6, 0, 1e5],
        [2, 4, 0, 2, 0, 0, 1e5],
        [1, 2, 8, 0, 0, 2, 7],
        [1, 4, 0, 0, 0, 2, 8],
        [2, 2, 7, 0, 14, 0, 16],
        [17, 2, 11, 2, 10, 0, 2],
        [1, 4, 0, 0, 0, 2, 7],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 1, 0, 2e5],
        [2, 0, 4, 2, 7, 3, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 8],
        [1, 2, 17, 0, 0, 2, 15],
        [1, 2, 19, 2, 18, 0, 0],
        [1, 3, 0, 0, 0, 2, 20],
        [1, 3, 0, 0, 0, 2, 19],
        [1, 3, 0, 0, 0, 2, 18],
        [2, 2, 20, 2, 20, 3, 0],
        [1, 2, 20, 0, 0, 2, 24],
        [2, 2, 16, 2, 25, 0, 1],
        [2, 2, 20, 0, 1, 0, 2],
        [2, 2, 16, 2, 27, 0, 1],
        [1, 3, 0, 0, 0, 2, 27],
        [2, 2, 19, 2, 19, 3, 0],
        [1, 2, 19, 0, 0, 2, 30],
        [2, 2, 16, 2, 31, 0, 1],
        [1, 2, 32, 2, 9, 0, 0],
        [1, 2, 7, 2, 9, 2, 33],
        [1, 2, 34, 2, 34, 0, 0],
        [1, 2, 35, 2, 33, 0, 0],
        [1, 2, 32, 2, 10, 0, 0],
        [1, 2, 33, 2, 10, 0, 0],
        [2, 2, 19, 0, 1, 0, 2],
        [2, 2, 16, 2, 39, 0, 1],
        [1, 2, 40, 2, 10, 0, 0],
        [1, 3, 0, 0, 0, 2, 39],
        [1, 2, 36, 2, 10, 0, 0],
        [1, 2, 26, 2, 9, 0, 0],
        [1, 2, 8, 2, 8, 2, 44],
      ],
    },
    {
      0: 25e3,
      1: 5e4,
      2: 12500,
      40: [2, 20, 2, 45, 2, 23, 2, 14],
      12: [
        [
          1,
          0,
          [
            0, 2, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 1, 2, 2, 4, 1, 2, 2,
            4, 1, 2, 2, 4, 5, 0,
          ],
          [
            19, 17, 0, 12, 46, 49, 20, 43, 20, 45, 18, 52, 23, 45, 23, 43, 50,
            49, 8, 12, 24, 17, 8, 7, 32, 31, 22, 28, 23, 37, 18, 41, 20, 37, 21,
            28, 29, 31, 0, 7,
          ],
          [2, 38],
          1,
        ],
        [
          3,
          0,
          [0, 2, 1, 2, 1, 2, 2, 4, 1, 2, 1, 2, 2, 4, 5, 0],
          [
            21, 54, 21, 28, 20, 37, 18, 41, 23, 37, 22, 28, 22, 54, 18, 56, 21,
            54,
          ],
          [],
          1,
        ],
        [
          0,
          1,
          [
            0, 2, 1, 2, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 2, 4, 1, 2, 1, 2, 2, 4, 1,
            2, 2, 4, 1, 2, 2, 4, 5, 0, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 0, 2,
            1, 2,
          ],
          [
            0, 7, 19, 17, 0, 12, 46, 49, 20, 43, 20, 45, 18, 52, 23, 45, 23, 43,
            50, 49, 8, 12, 24, 17, 8, 7, 32, 31, 22, 28, 23, 37, 18, 41, 20, 37,
            21, 28, 29, 31, 0, 7, 20, 37, 20, 43, 23, 43, 23, 37, 21, 54, 21,
            28, 22, 28, 22, 54,
          ],
          [0, 4, 40],
          1,
        ],
      ],
      11: [
        [0, 2, 18, 2, 14, null, [0, 0, 0, 0, 1e5]],
        [0, 2, 20, 0, 0, [1, 0, 25e3, 0, 1e5], null],
        [0, 0, 0, 2, 10, null, [2, 2, 5, 2, 0]],
      ],
      48: [
        [0, 162e5, 2, 18, 0, 0],
        [0, 108e5, 2, 19, 2, 17],
        [0, 54e5, 2, 18, 2, 14],
        [0, 0, 2, 24, 2, 17],
      ],
      10: [
        [16, 0, 0, 1, 0, 0, 1e5],
        [16, 0, 25e3, 1, 1, 0, 75e3],
        [1, 0, 1e5, 0, 0, 2, 0],
        [2, 2, 2, 0, 1, 0, 2],
        [1, 2, 0, 0, 0, 2, 3],
        [6, 0, 0, 2, 4, 0, 0],
        [16, 2, 5, 1, 2, 2, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [2, 3, 0, 2, 1, 0, 2e5],
        [2, 4, 0, 2, 6, 0, 1e5],
        [2, 0, 4, 2, 10, 3, 0],
        [2, 4, 0, 2, 0, 0, 1e5],
        [1, 2, 12, 0, 0, 2, 10],
        [1, 4, 0, 0, 0, 2, 12],
        [2, 2, 10, 0, 14, 0, 16],
        [17, 2, 15, 2, 14, 0, 2],
        [1, 4, 0, 0, 0, 2, 16],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 3, 0, 0, 1, 0, 8],
        [1, 2, 18, 0, 0, 2, 9],
        [1, 2, 20, 2, 19, 0, 0],
        [1, 3, 0, 0, 0, 2, 21],
        [1, 3, 0, 0, 0, 2, 20],
        [1, 3, 0, 0, 0, 2, 19],
        [2, 2, 21, 2, 21, 3, 0],
        [1, 2, 21, 0, 0, 2, 25],
        [2, 2, 11, 2, 26, 0, 1],
        [1, 4, 0, 0, 0, 2, 27],
        [2, 2, 21, 0, 1, 0, 2],
        [2, 2, 11, 2, 29, 0, 1],
        [1, 4, 0, 0, 0, 2, 30],
        [1, 3, 0, 0, 0, 2, 29],
        [2, 2, 20, 2, 20, 3, 0],
        [1, 2, 20, 0, 0, 2, 33],
        [2, 2, 11, 2, 34, 0, 1],
        [1, 2, 35, 2, 13, 0, 0],
        [1, 4, 0, 0, 0, 2, 36],
        [1, 2, 10, 2, 13, 2, 36],
        [1, 2, 38, 2, 10, 0, 0],
        [1, 2, 39, 2, 13, 0, 0],
        [1, 4, 0, 0, 0, 2, 40],
        [1, 2, 35, 2, 14, 0, 0],
        [1, 4, 0, 0, 0, 2, 42],
        [1, 2, 36, 2, 14, 0, 0],
        [1, 4, 0, 0, 0, 2, 44],
        [2, 2, 20, 0, 1, 0, 2],
        [2, 2, 11, 2, 46, 0, 1],
        [1, 2, 47, 2, 14, 0, 0],
        [1, 4, 0, 0, 0, 2, 48],
        [1, 3, 0, 0, 0, 2, 46],
        [1, 2, 40, 2, 14, 0, 0],
        [1, 4, 0, 0, 0, 2, 51],
        [1, 2, 27, 2, 13, 0, 0],
        [1, 4, 0, 0, 0, 2, 53],
        [1, 2, 12, 2, 12, 2, 53],
        [1, 4, 0, 0, 0, 2, 55],
      ],
    },
    {
      0: -20833,
      1: 62500,
      38: 24384,
      40: [2, 2, 2, 3, 2, 4, 2, 5],
      12: [
        [
          1,
          1,
          [
            0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 5, 0,
          ],
          [
            10803, 39805, 18706, 25456, -11429249, 7426832, 14772, 20130,
            -8646143, 5396714, 12091, 16468, -8748475, 5983381, 13454, 18268,
            -7859164, 7034504, 14772, 20146, -4722533, 6541615, 18767, 25539,
            -2776035, 7816140, 16024, 21792, 37501, 6842e3, 18703, 25526,
            1347096, 6910353, 21384, 29204, 3974558, 4542661, 12077, 16393,
            -16496525, 8804134, 12036, 16468, -14809710, 9151131,
          ],
          [],
          0,
        ],
        [1, 1, [0, 2, 4, 4, 5, 0], [43, 15, 42, 42, 0, 216e5], [4, 5], 1],
        [1, 1, [0, 2, 4, 4, 5, 0], [44, 33, 41, 41, 0, 216e5], [4, 5], 1],
        [1, 1, [0, 2, 4, 4, 5, 0], [45, 40, 28, 28, 0, 216e5], [4, 5], 1],
        [
          0,
          1,
          [
            0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4,
            4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4, 0, 2, 4, 4,
          ],
          [
            13e3, 72510, 12036, 16468, 5204520, 1585770, 19191, 96670, 12077,
            16393, 4416628, 686848, 45644, 108279, 18703, 25526, 8257449,
            844866, 79851, 96260, 18703, 25526, 387196, 959901, 94537, 63583,
            16024, 21792, -4217541, 4255042, 115780, 42531, 14772, 20146,
            1819082, 1665090, 106157, 15030, 13454, 18268, -824660, 891534,
            80546, 10947, 13454, 18268, -8950887, 1091722, 61331, 13074, 12091,
            16468, -9809656, 1061181, 38780, 14382, 18706, 25456, -4002417,
            739161, 11432, 43736, 18706, 25456, 9459261, 711490,
          ],
          [],
          0,
        ],
      ],
      11: [
        [
          0,
          2,
          14,
          2,
          15,
          [0, 0, -2147483647, 0, 2147483647],
          [1, 0, -2147483647, 0, 2147483647],
        ],
      ],
      48: [
        [0, 108e5, 2, 6, 2, 12],
        [0, 54e5, 2, 11, 2, 7],
        [0, 0, 2, 8, 2, 12],
        [0, 162e5, 2, 11, 2, 9],
        [2, 10, 2, 14, 2, 15],
      ],
      10: [
        [2, 3, 0, 1, 0, 0, 1e5],
        [2, 4, 0, 1, 1, 0, 1e5],
        [2, 3, 0, 0, 2977, 0, 21600],
        [2, 4, 0, 0, 3262, 0, 21600],
        [2, 3, 0, 0, 17087, 0, 21600],
        [2, 4, 0, 0, 17337, 0, 21600],
        [2, 3, 0, 0, 67, 0, 21600],
        [2, 4, 0, 0, 21577, 0, 21600],
        [2, 3, 0, 0, 21582, 0, 21600],
        [2, 4, 0, 0, 1235, 0, 21600],
        [9, 2, 0, 2, 1, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
        [5, 3, 0, 4, 0, 0, 0],
        [1, 2, 11, 2, 0, 0, 0],
        [1, 2, 12, 2, 1, 0, 0],
        [12, 2, 12, 2, 0, 2, 1],
        [13, 2, 11, 2, 0, 2, 1],
        [12, 2, 11, 2, 16, 2, 17],
        [13, 2, 12, 2, 16, 2, 17],
        [1, 2, 11, 2, 18, 0, 0],
        [1, 2, 12, 2, 19, 0, 0],
        [1, 2, 20, 0, 0, 2, 14],
        [1, 2, 21, 0, 0, 2, 15],
        [8, 2, 22, 2, 23, 0, 0],
        [2, 2, 13, 0, 6600, 0, 21600],
        [1, 2, 24, 0, 0, 2, 25],
        [2, 2, 26, 0, 1, 0, 3],
        [2, 2, 13, 0, 1800, 0, 21600],
        [1, 2, 27, 2, 28, 0, 0],
        [2, 2, 29, 2, 22, 2, 24],
        [2, 2, 29, 2, 23, 2, 24],
        [1, 2, 30, 2, 14, 0, 0],
        [1, 2, 31, 2, 15, 0, 0],
        [2, 2, 13, 0, 4800, 0, 21600],
        [2, 2, 27, 0, 2, 0, 1],
        [1, 2, 34, 2, 35, 0, 0],
        [2, 2, 36, 2, 22, 2, 24],
        [2, 2, 36, 2, 23, 2, 24],
        [1, 2, 37, 2, 14, 0, 0],
        [1, 2, 38, 2, 15, 0, 0],
        [2, 2, 13, 0, 1200, 0, 21600],
        [2, 2, 13, 0, 600, 0, 21600],
        [1, 2, 14, 2, 42, 0, 0],
        [1, 2, 32, 2, 41, 0, 0],
        [1, 2, 39, 2, 28, 0, 0],
      ],
    },
    {
      50: 4,
      115: 0,
      116: 1,
      71: 0,
      32: 0,
      125: 0,
      46: 0,
      59: 1,
      81: 1,
      14: 0,
      101: 1,
      18: 0,
      83: 0,
      12: [
        [
          1,
          1,
          [0, 2, 1, 2, 1, 2, 1, 2, 5, 0],
          [0, 0, 0, 0, 0, 1, 0, 1],
          [2, 4, 5, 7],
          0,
        ],
      ],
      48: [
        [0, 162e5, 2, 2, 0, 0],
        [0, 108e5, 0, 0, 2, 3],
        [0, 54e5, 2, 2, 4, 0],
        [0, 0, 3, 0, 2, 3],
      ],
      10: [
        [0, 3, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0],
        [2, 3, 0, 0, 1, 0, 2],
        [2, 4, 0, 0, 1, 0, 2],
      ],
    },
    { 50: 7, 32: 0, 17: 0, 18: 0 },
  ],
  U4e = [vPa, 1, 1, "", [], [], 1, []],
  V4e = [0, 1, 1, 1e3, 0, [null, null], 0, 0, 0, 0, 1e3, 0, 1],
  W4e = [0, 1e3, "", 0, 0],
  X4e = [
    [
      Cda,
      [
        ka,
        la,
        "#158158",
        "#F3F3F3",
        "#058DC7",
        "#50B432",
        "#ED561B",
        "#EDEF00",
        "#24CBE5",
        "#64E572",
        "#2200CC",
        "#551A8B",
      ],
    ],
    "m",
    "BLANK",
    1,
    "",
    "",
    0,
    "",
    "",
    1,
    0,
    "",
    "",
    "",
    [],
    "",
    100,
    0,
  ],
  Y4e = [
    0,
    0,
    0,
    C0e,
    ka,
    Ma,
    14,
    0,
    "",
    0,
    0,
    100,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    ka,
    0,
    Ma,
    14,
    0,
    0,
    0,
    0,
    "",
    0,
    1,
    0,
    0,
    C0e,
    0,
    "",
    [],
    "",
    "",
    0,
    0,
    Uda,
    vPa,
    0,
    0,
    0,
    400,
    700,
    400,
    700,
    [],
    "",
    "",
    "",
    [],
    "",
    "",
    400,
    400,
    0,
    0,
    C0e,
    [],
    1,
    "",
    "",
    0,
    [0, 0, ""],
    "",
    "",
    "",
    "",
  ];
function Z4e() {
  this.aa = !1;
}
G(Z4e, Qx);
Z4e.prototype.getName = x(li);
Z4e.prototype.isEnabled = x(Cc);
var $4e,
  a5e = [0, 1, 2, 3, 4, 5, 6, 7],
  b5e = [0, 1, 2, 3, 4];
function c5e() {
  c5e = u();
  $4e = $z(d3e(b5e));
}
function d5e(a, c) {
  c5e();
  this.aa = this.ea = 0;
  Nu(a in $4e);
  switch (a) {
    case 1:
      Qu(0 <= c && c < a5e.length, "Bad adjust value %s", c);
      break;
    case 2:
      Qu(0 <= c, "Negative formula reference %s", c);
  }
  this.ea = a;
  this.aa = c;
}
G(d5e, H);
d5e.prototype.getType = x(vh);
var e5e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  f5e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  g5e = [0, 1, 2, 3, 4, 5],
  h5e = [0, 1, 2, 3, 4, 5],
  i5e = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164,
  ],
  j5e = [0, 1, 2, 3],
  k5e = [0, 1, 2],
  l5e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  m5e = [0, 1, 2, 3, 4, 5],
  n5e = [9, 8, 5, 11, 10, 7, 4, 6, 3, 1, 2, 0, 12],
  o5e = [
    [69],
    [70],
    [69],
    [70],
    [67],
    [65],
    [68],
    [66],
    [65, 68],
    [65, 67],
    [66, 68],
    [66, 67],
    [],
  ],
  p5e = [0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  q5e = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 9, 9, 1, 1, 4, 3, 1, 1, 4, 3, 3, 2, 2, 2,
    1, 22, 3, 3, 22, 3, 3, 1, 21, 21, 1, 1, 2, 2, 21, 18, 2, 4, 22, 22, 22, 1,
    1, 9, 21, 22, 12, 12, 14, 22, 2, 1, 22, 21, 1, 22, 9, 3, 1, 15, 1, 1, 1, 1,
    1, 1, 1, 21, 22, 22, 2, 2, 3, 3, 3, 3, 1, 22, 22, 3, 3, 1, 2, 2, 3, 3, 21,
    21, 2, 2, 3, 3, 3, 3, 3, 3, 22, 3, 3, 3, 3, 9, 9, 22, 3, 3, 3, 3, 3, 3, 1,
    1, 1, 2, 1, 1, 6, 1, 6, 1, 1, 1, 11, 3, 3, 1, 22, 3, 3, 3, 22, 22, 1, 11,
    22, 1, 3, 4, 3, 1, 1, 21, 22, 21, 21, 21, 2, 2, 1, 21, 21, 2, 22, 22, 1, 19,
    19, 1, 3, 3, 22, 22, 24, 21, 1, 26, 27, 22, 6, 6, 6, 6, 22, 22, 2, 1, 21,
    21,
  ],
  r5e = { 48: 13, 10: 17, 106: 10, 11: 16, 107: 10, 12: 7, 61: 10 },
  s5e = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ],
  t5e = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
  ],
  u5e = [5, 21, 21, 1, 21, 21, 1, 21, 21, 1, 22, 21, 21, 21, 9, 21, 6, 22],
  v5e = { 14: 8 },
  w5e = [
    1, 1, 1, 4, 4, 21, 3, 22, 21, 22, 1, 3, 22, 3, 3, 3, 3, 22, 2, 4, 1, 21, 3,
    1, 1, 1, 1, 21, 3, 2, 22, 22, 4, 1, 21, 9, 21, 21, 1, 22, 21, 25, 1, 1, 1,
    2, 2, 2, 2, 9, 21, 21, 21, 9, 21, 21, 2, 2, 1, 1, 4, 9, 22, 21, 21, 2, 23,
    21, 21, 21, 21,
  ],
  x5e = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 36, 37, 39, 42, 43, 44, 47, 48, 54, 57, 62,
  ],
  y5e = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 34, 35, 38, 40, 41, 45, 46, 49, 50,
    51, 52, 53, 55, 56, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70,
  ],
  z5e = { 49: 21, 35: 21, 53: 21, 61: 20 },
  A5e = [
    34, 35, 38, 52, 53, 55, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70,
  ],
  B5e = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 27, 30, 34,
    35, 38, 39, 40, 41, 42, 43, 44, 45, 46, 49, 50, 52, 53, 55, 56, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  ],
  C5e = [22, 22, 22, 6, 6, 28, 1, 6, 22, 22, 6, 22, 30],
  D5e = {},
  E5e = [22, 6, 21, 22, 22],
  F5e = {},
  G5e = [25, 1, 2, 21, 9, 9, 1, 9],
  H5e = { 4: 8, 5: 8, 7: 29 },
  I5e = [null, 1, 3, 3, 0, 3, 3, 3, 3, 3, 3, 2, 3, 1, 3, 0, 3, 4, 3, 5],
  J5e = [
    [4, 15],
    [1, 13],
    [11],
    [2, 3, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18],
    [17],
    [19],
  ];
function K5e(a, c) {
  this.aa = 0;
  Ou(0 <= c, "Index is negative");
  Nu(0 == c || !Pp(a));
  this.ea = a;
  this.aa = c;
}
G(K5e, H);
K5e.prototype.getId = x(vh);
K5e.prototype.wc = x(Cc);
K5e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof K5e
    ? I(this.ea, a.ea) && this.aa == a.aa
    : !1;
};
K5e.prototype.Ac = function () {
  return Qp([this.ea, L(this.aa)]);
};
function L5e(a, c) {
  this.aa = 0;
  if (0 > c || 1 < c) throw no("Yp").Ga;
  this.ea = a;
  this.aa = c;
}
G(L5e, H);
L5e.prototype.re = x(vh);
L5e.prototype.xg = x(Cc);
L5e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof L5e
    ? this.ea.Za(a.ea) && this.aa == a.aa
    : !1;
};
L5e.prototype.Ac = function () {
  return Qp([this.ea, this.aa]);
};
function M5e(a, c, d) {
  this.aa = 0;
  Nu(a in x3e);
  this.ga = a;
  this.aa = c;
  this.ea = d;
}
G(M5e, H);
M5e.prototype.xg = x(Cc);
M5e.prototype.re = x(vh);
function N5e(a, c, d) {
  this.aa = 0;
  Qu(8 > a, "%s is not an adjustment property", a);
  this.aa = a;
  this.ga = c;
  this.ea = d;
}
G(N5e, H);
N5e.prototype.Ec = x(Cc);
N5e.prototype.V9 = x(fi);
N5e.prototype.U9 = x(vh);
function O5e(a, c, d, e, f) {
  this.ia = a;
  this.aa = Wu(c);
  this.ea = Wu(d);
  Ou(!!e || !!f, "One non-null adjustment required");
  this.ga = e;
  this.ha = f;
}
G(O5e, H);
function P5e(a, c, d, e) {
  this.ga = this.aa = this.ea = this.ha = 0;
  if (0 > a || 0 > c || 0 > d || 0 > e)
    throw no("aq`" + a + "`" + c + "`" + d + "`" + e).Ga;
  this.ha = a;
  this.ea = c;
  this.aa = d;
  this.ga = e;
}
G(P5e, H);
P5e.prototype.Nb = x(li);
P5e.prototype.Kb = x(fi);
P5e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof P5e
    ? this.ha == a.ha && this.aa == a.aa && this.ga == a.ga && this.ea == a.ea
    : !1;
};
P5e.prototype.Ac = function () {
  return Qp([L(this.ha), L(this.aa), L(this.ga), L(this.ea)]);
};
var Q5e;
function R5e(a) {
  S5e();
  this.aa = a;
}
G(R5e, H);
R5e.prototype.Za = function (a) {
  return I(this, a) ? !0 : null != a && a instanceof R5e ? this.aa == a.aa : !1;
};
R5e.prototype.Ac = function () {
  return Bp(this.aa);
};
function S5e() {
  S5e = u();
  Q5e = new R5e(Infinity);
}
var T5e, U5e;
function V5e() {
  V5e = u();
  T5e = $z(d3e(g5e));
  U5e = $z(d3e(h5e));
}
function W5e(a, c, d, e, f, g) {
  V5e();
  this.aa = 0;
  this.ea = this.ga = !1;
  Ou(null != a, V0e);
  Nu(a in T5e);
  for (var h = 0, l = 0; l < d.length; l = (l + 2) | 0)
    Nu(d[l] in U5e), (h = (h + d[(l + 1) | 0]) | 0);
  Inb(h == e.length, "Segments indicate %s vertices, got %s", h, e.length);
  this.aa = a;
  this.ga = c;
  this.ia = d;
  this.la = e;
  this.ha = f;
  this.ea = g;
}
G(W5e, H);
D = W5e.prototype;
D.Wj = x(Cc);
D.Lda = x(fi);
D.iMa = x(Ji);
D.zna = x(xj);
D.tDa = x(li);
D.sDa = x(vh);
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof W5e
    ? this.aa == a.aa &&
      this.ga == a.ga &&
      gv(this.ia, a.ia) &&
      gv(this.la, a.la) &&
      gv(this.ha, a.ha) &&
      this.ea == a.ea
    : !1;
};
D.Ac = function () {
  return Qp([
    L(this.aa),
    this.ga,
    L(c3e(this.ia)),
    L(c3e(this.la)),
    L(c3e(this.ha)),
    this.ea,
  ]);
};
function X5e(a, c, d) {
  this.aa = a;
  this.ga = c;
  this.ea = d;
}
G(X5e, H);
X5e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof X5e
    ? this.aa == a.aa && this.ga == a.ga && this.ea == a.ea
    : !1;
};
X5e.prototype.Ac = function () {
  return Qp([L(this.aa), L(this.ga), L(this.ea)]);
};
X5e.prototype.toString = function () {
  return this.aa + "," + this.ga + "," + this.ea;
};
var Y5e,
  Z5e = { 0: 2, 1: 2, 2: 4, 3: 6, 4: 4, 5: 0 },
  $5e = { 0: !1, 1: !0, 2: !0, 3: !0, 4: !1, 5: !1 };
function a6e() {
  a6e = u();
  Y5e = $z(d3e(h5e));
}
function b6e(a) {
  a6e();
  return Z5e[a];
}
function c6e(a, c, d, e) {
  a6e();
  this.ha = 0;
  this.ga = !1;
  Nu(a in Y5e);
  b6e(a);
  this.ha = a;
  this.aa = c;
  this.ea = d;
  this.ga = e;
}
G(c6e, H);
c6e.prototype.getType = x(li);
c6e.prototype.toString = function () {
  return (
    "PathSegment(" +
    this.ha +
    pa +
    K(this.aa) +
    pa +
    K(this.ea) +
    pa +
    this.ga +
    ")"
  );
};
c6e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof c6e
    ? this.ha == a.ha &&
      gv(this.aa, a.aa) &&
      gv(this.ea, a.ea) &&
      this.ga == a.ga
    : !1;
};
c6e.prototype.Ac = function () {
  return Qp([L(this.ha), L(c3e(this.aa)), L(c3e(this.ea)), this.ga]);
};
var d6e;
function e6e(a) {
  f6e();
  this.aa = 0;
  Nu(a in d6e);
  this.aa = a;
}
G(e6e, H);
e6e.prototype.Za = function (a) {
  return I(this, a) ? !0 : a instanceof e6e ? this.aa == a.aa : !1;
};
e6e.prototype.Ac = x(Cc);
function f6e() {
  f6e = u();
  d6e = $z(d3e(e5e));
  new e6e(0);
}
function g6e(a) {
  var c = 0,
    d = 0;
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    c = (c + f.aa.length) | 0;
    d = (d + (f.ga ? (f.aa.length - f.ea.length) | 0 : f.ea.length)) | 0;
  }
  return d > c / 2;
}
var h6e;
function i6e() {
  i6e = u();
  h6e = $z(d3e(g5e));
}
function j6e(a, c, d) {
  i6e();
  this.ea = 0;
  this.ga = !1;
  Ou(null != a, V0e);
  Nu(a in h6e);
  this.ea = a;
  this.ga = c;
  for (a = 0; a < d.length; a++) Xu(d[a], "Segment cannot be null");
  this.aa = d;
}
G(j6e, H);
D = j6e.prototype;
D.Wj = x(vh);
D.Lda = x(fi);
D.iMa = function () {
  for (var a = this.aa, c = [], d = 0, e = 0; e < a.length; e = (e + 1) | 0) {
    var f = a[e].getType();
    var g = f;
    a6e();
    g = $5e[g];
    d = (d + b6e(f)) | 0;
    (g && ((e + 1) | 0) < a.length && a[(e + 1) | 0].getType() == f) ||
      (c.push(f), c.push(d), (d = 0));
  }
  return c;
};
D.zna = function () {
  var a = [],
    c = this.aa;
  for (var d = 0; d < c.length; d++) xw(a, c[d].aa);
  return a;
};
D.tDa = function () {
  var a = g6e(this.aa),
    c = [],
    d = 0,
    e = this.aa;
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    if (g.ga == a) var h = g.ea;
    else {
      h = g.ea;
      for (var l = g.aa.length, m = [], n = 0, q = 0; q < l; q = (q + 1) | 0)
        n < h.length && h[n] == q ? (n = (n + 1) | 0) : m.push(q);
      h = m;
    }
    for (l = 0; l < h.length; l++) c.push((d + h[l]) | 0);
    d = (d + g.aa.length) | 0;
  }
  return c;
};
D.sDa = function () {
  return g6e(this.aa);
};
D.toString = function () {
  return "SegmentedPath(" + this.ea + pa + this.ga + pa + K(this.aa) + ")";
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof j6e
    ? this.ea == a.ea && this.ga == a.ga && Nv(this.aa, a.aa)
    : !1;
};
D.Ac = function () {
  return Qp([L(this.ea), this.ga, L(Dpb(this.aa))]);
};
function k6e(a, c) {
  return W(c, "sketchy-rcoat")
    ? [a.ha, a.ga, a.ea, a.aa, a.ia, a.la]
    : [
        gO(a.ha, 4),
        gO(a.ga, 4),
        gO(a.ea, 4),
        gO(a.aa, 4),
        gO(a.ia, 4),
        gO(a.la, 4),
      ];
}
function l6e(a) {
  return new iF(a[0], a[1], a[2], a[3], a[4], a[5]);
}
function m6e(a) {
  return a ? [a.aa, a.ea] : null;
}
function n6e(a) {
  return a ? new fD(a[0], a[1]) : null;
}
function o6e(a, c, d) {
  switch (a) {
    case Ml:
      return ZLb(d);
    case Xi:
      return $Lb(Zo(c), d[0]);
    case jf:
      return bMb(Zo(c));
    case ml:
      return aMb(Zo(c), d[0]);
    case jYa:
      return cMb(Zo(c));
    case d7a:
      return dMb(Zo(c));
    default:
      throw qo("Unknown operator " + K(a)).Ga;
  }
}
function p6e(a) {
  return [a.aa, a.Sl(), a.qf(), a.Kf()];
}
function q6e(a) {
  return new hD(a[0], a[1], a[2], a[3]);
}
function r6e(a) {
  var c = [];
  for (var d in a) {
    var e = vo(d);
    c.push(e);
    c.push(a[d]);
  }
  return c;
}
function s6e(a) {
  for (var c = {}, d = 0; d < a.length; d = (d + 2) | 0)
    c[a[d]] = a[(d + 1) | 0];
  return c;
}
function t6e(a) {
  return a
    ? [a.Ec(), a.V9().getType(), a.V9().aa, a.U9().getType(), a.U9().aa]
    : null;
}
function u6e(a) {
  return a ? new N5e(a[0], new d5e(a[1], a[2]), new d5e(a[3], a[4])) : null;
}
function v6e(a) {
  this.aa = a;
}
G(v6e, H);
v6e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof v6e
    ? gv(this.aa, a.aa) &&
      Ap(null, null) &&
      Ap(null, null) &&
      Ap(null, null) &&
      Ap(null, null) &&
      Ap(null, null)
    : !1;
};
v6e.prototype.Ac = function () {
  return Qp([L(c3e(this.aa)), null, null, null, null, null, null, null]);
};
function w6e(a, c) {
  this.ea = a;
  this.aa = c;
}
G(w6e, H);
w6e.prototype.ce = x(vh);
w6e.prototype.Ac = function () {
  return (Ux(this.ea) + Math.imul(37, c3e(this.aa))) | 0;
};
w6e.prototype.Za = function (a) {
  return a instanceof w6e ? Tx(this.ea, a.ea) && gv(this.aa, a.aa) : !1;
};
function x6e(a, c, d) {
  for (var e in a)
    Su(e in c, "%s is not a valid shape property for a Table Style %s", e, d);
}
var y6e = { 14: !0, 19: !0, 20: !0, 43: !0, 22: !0 },
  z6e = { 14: !0, 15: !0, 16: !0, 60: !0, 61: !0, 62: !0 };
function A6e(a) {
  this.ga = 2;
  this.aa = 0;
  if (0 > a || 16 < a) throw no("cq").Ga;
  this.aa = a;
}
G(A6e, D4e);
A6e.prototype.wc = x(Cc);
A6e.prototype.toString = function () {
  return "ThemeColor: " + this.aa;
};
A6e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof A6e
    ? D4e.prototype.Za.call(this, a) && this.aa == a.aa
    : !1;
};
A6e.prototype.Ac = function () {
  return (Math.imul(D4e.prototype.Ac.call(this), 37) + this.aa) | 0;
};
function B6e(a) {
  return zo(a) ? I4e(a) : null == a[0] ? new A6e(a[1]) : I4e(a[0]);
}
function C6e(a) {
  var c;
  switch (((c = a.getType()), c)) {
    case 1:
      return (
        F4e(),
        (c = a.aa),
        1 != a.xl() &&
          ((c = K(c)),
          (a = go(tx(255 * a.xl()))),
          gA(),
          (c += K(1 == a.length ? "0" + K(a) : a))),
        CBb(c)
      );
    case 2:
      return [null, a.wc()];
  }
  throw so(X0e + K(Gp(a.getType(), z4e))).Ga;
}
var D6e = {
  6: 7,
  21: 22,
  23: 24,
  25: 26,
  27: 28,
  29: 30,
  31: 32,
  33: 34,
  35: 36,
};
function E6e(a, c) {
  F6e();
  this.aa = null == a ? null : Dv(a);
  this.ea = null == c ? null : Dv(c);
  Ru(
    !(null != this.aa && 0 != Zo(this.aa)) || Zo(this.aa) in D6e,
    "Found invalid enter type: %s",
    this.aa
  );
  Ru(
    !(null != this.ea && 1 != Zo(this.ea)) || uub(D6e, Zo(this.ea)),
    "Found invalid exit type: %s",
    this.ea
  );
  null != this.aa &&
    0 != Zo(this.aa) &&
    null != this.ea &&
    1 != Zo(this.ea) &&
    Su(
      D6e[Zo(this.aa)] == Zo(this.ea),
      "Enter and exit types do not correspond: %s, %s",
      this.aa,
      this.ea
    );
}
G(E6e, H);
E6e.prototype.Ac = function () {
  return Qp([this.aa, this.ea]);
};
E6e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof E6e
    ? Ap(this.aa, a.aa) && Ap(this.ea, a.ea)
    : !1;
};
E6e.prototype.toString = function () {
  return (
    "TimelineType(enterAnimation=" +
    K(this.aa) +
    ", exitAnimation=" +
    K(this.ea) +
    ")"
  );
};
function F6e() {
  F6e = u();
  new E6e(null, null);
}
function G6e(a) {
  yw(a);
  return a;
}
var H6e, I6e, J6e, K6e, L6e;
function M6e(a, c) {
  var d = c;
  if (53 == a) iO(), (d = c);
  else if (64 == a) {
    a = new N6e();
    for (d = 0; d < l5e.length; d = (d + 1) | 0) {
      var e = l5e[d],
        f = a,
        g = O6e(c.aa[e].ga);
      f.aa[e].ea = g;
      P6e(a, e, Q6e(c.aa[e].ea));
      for (f = 0; f < m5e.length; f = (f + 1) | 0)
        (g = m5e[f]), R6e(a, e, g, Q6e(c.aa[e].aa[g]));
    }
    d = a.ua();
  } else if (61 == a || 106 == a || 107 == a) {
    iO();
    a = Kv();
    for (d = 0; d < c.length; d++)
      (e = c[d]), (e = new L5e(S6e(e.re()), T6e(3, e.xg()))), tv(a, e);
    d = wv(a);
  } else if (99 == a || 90 == a)
    (c = gO(c, 6)),
      (d =
        0 <= c
          ? Math.floor(1e4 * c + 1e-9) / 1e4
          : Math.ceil(1e4 * c - 1e-9) / 1e4);
  else if (127 == a || 138 == a) d = r4e(c);
  return d;
}
function U6e(a, c, d) {
  a = c.getId();
  var e = d.getId();
  return I(a, e) && c.wc() == d.wc();
}
function V6e(a, c, d) {
  a = W6e(c);
  var e = W6e(d);
  return a && e ? I(a, e) : Ap(c, d);
}
function X6e(a, c, d) {
  return I(c, d);
}
function Y6e(a, c) {
  return cw(a) && cw(c)
    ? eub(a, c)
    : $nb(a) && $nb(c)
    ? kob(a, c, function (d, e) {
        return Y6e(d, e);
      })
    : a instanceof Array && c instanceof Array
    ? gv(a, c)
    : Ap(a, c);
}
var Z6e = {
  0: ym,
  49: ee,
  9: ym,
  1: ym,
  2: ym,
  10: ym,
  20: ym,
  3: ym,
  4: ym,
  5: ym,
  6: ym,
  56: ym,
  7: ym,
  50: ym,
  11: Jk,
  62: Jk,
  12: Jk,
  13: Jk,
  14: Jk,
  30: Jk,
  15: Jk,
  16: Jk,
  39: Jk,
  28: Jk,
  42: Jk,
  43: Jk,
  44: Jk,
  8: Fj,
  31: Gj,
  32: Gj,
  19: Gj,
  21: Gj,
  22: Gj,
  23: Gj,
  24: Gj,
  33: Gj,
  57: Gj,
  25: Gj,
  26: Gj,
  18: Gj,
  27: Gj,
  17: Gj,
  36: Gj,
  37: Gj,
  70: Ul,
  34: Ul,
  35: Ul,
  61: Ul,
  55: Ul,
  63: gd,
  64: gd,
  65: gd,
  66: gd,
  67: gd,
  38: Pi,
  40: rra,
  41: rra,
  53: wn,
  68: wn,
  52: xn,
  69: xn,
  58: Spa,
  59: he,
  60: he,
};
function W6e(a) {
  a = cq(a, "#") ? a.substr(1) : a;
  var c = "slide" + $o(61);
  a = a && cq(a, c) ? a.substr(c.length) : null;
  var d;
  a && cq(a, "id.")
    ? (d = m9a(a, (a.indexOf("id.") + 3) | 0) || null)
    : (d = null);
  return d;
}
function $6e(a, c) {
  a7e();
  Qu(c.length == y4e.length, "Invalid color scheme length: %s", c.length);
  for (var d = 0; d < y4e.length; d = (d + 1) | 0) {
    var e = y4e[d],
      f = c[e];
    Knb(f, "Null color value for: %s", e);
    Ru(C4e(f), "Invalid hex for scheme color: %s", f);
  }
  this.ea = a;
  this.aa = b3e(c);
  this.ga = ko([c.length], G4e, H4e);
}
G($6e, H);
$6e.prototype.getName = x(vh);
$6e.prototype.re = function (a) {
  return this.aa[a];
};
$6e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof $6e
    ? I(this.ea, a.ea) && Nv(this.aa, a.aa)
    : !1;
};
$6e.prototype.Ac = function () {
  return (Math.imul(Bp(this.ea), 37) + Dpb(this.aa)) | 0;
};
function b7e() {
  var a = [];
  a7e();
  if (a.length == y4e.length) new $6e(Cda, a);
  else {
    for (var c = c7e(0, Jy()).aa.slice(0), d = 0; d < a.length; d = (d + 1) | 0)
      c[d] = a[d];
    new $6e(Cda, c);
  }
}
function a7e() {
  a7e = u();
  x4e = new G4e(ka, 1);
  b7e();
}
function c7e(a, c) {
  Q4e();
  if (!O4e) {
    var d = R4e(X4e);
    O4e = d7e(u5e, v5e, d, c);
  }
  return O4e[a];
}
function e7e(a, c) {
  return d7e(q5e, r5e, a, c);
}
function f7e(a, c) {
  return d7e(w5e, z5e, a, c);
}
function d7e(a, c, d, e) {
  for (
    var f = {}, g = (a.length - 1) | 0, h = 0;
    h < d.length;
    h = (h + 2) | 0
  ) {
    var l = d[h];
    if (!(l > g))
      if (9 == a[l]) {
        var m = c["" + l],
          n = Kv(),
          q = d[(h + 1) | 0];
        for (var r = 0; r < q.length; r++) tv(n, g7e(q[r], m, e));
        m = wv(n);
        gw(f, l, m);
      } else (m = g7e(d[(h + 1) | 0], a[l], e)), gw(f, l, m);
  }
  return f;
}
function g7e(a, c, d) {
  switch (c) {
    case 1:
      return 1 == a;
    case 4:
      return B6e(a);
    case 5:
      return new $6e(a[0], a[1]);
    case 12:
      return new K5e(a[0], a[1]);
    case 10:
      return new L5e(B6e(a[0]), a[1]);
    case 8:
      if (null == a[0]) c = rn;
      else
        a: switch (((c = a[0]), c)) {
          case 0:
            c = yi;
            break a;
          case 1:
            c = rn;
            break a;
          default:
            throw Ep("$p`" + c).Ga;
        }
      return new M5e(c, a[1], B6e(a[2]));
    case 16:
      return new O5e(
        1 == a[0],
        new d5e(a[1], a[2]),
        new d5e(a[3], a[4]),
        u6e($v(a, 5)),
        u6e($v(a, 6))
      );
    case 14:
      return new P5e(a[0], a[1], a[2], a[3]);
    case 7:
      c = a[0];
      var e = 1 == a[1],
        f = a[2],
        g = a[3],
        h = a[4];
      a = 1 == a[5];
      if (W(d, "sketchy-uncpr")) {
        for (var l = (d = 0), m = qv(), n = 0; n < f.length; n = (n + 2) | 0)
          for (
            var q = f[n],
              r = b6e(q),
              v = 0 < r ? (f[(n + 1) | 0] / r) | 0 : 1,
              w = 0;
            w < v;
            w = (w + 1) | 0
          ) {
            for (
              var y = g.slice(d, (d + r) | 0), A = [];
              l < h.length && h[l] < ((d + r) | 0);

            )
              A.push((h[l] - d) | 0), (l = (l + 1) | 0);
            d = (d + r) | 0;
            tv(m, new c6e(q, y, A, a));
          }
        a = new j6e(c, e, wv(m));
      } else a = new W5e(c, e, f, g, h, a);
      return a;
    case 15:
      g = new N6e();
      for (c = 0; c < l5e.length; c = (c + 1) | 0)
        for (
          e = l5e[c],
            f = a[c],
            h = f7e(f[0], d),
            g.aa[e].ea = h,
            g = P6e(g, e, e7e(f[1], d)),
            h = 0;
          h < m5e.length;
          h = (h + 1) | 0
        )
          g = R6e(g, e, m5e[h], e7e(f[(2 + h) | 0], d));
      return g.ua();
    case 11:
      return l6e(a);
    case 19:
      return bw(a) ? (S5e(), (a = Q5e)) : (a = new R5e(a[0])), a;
    case 20:
      return new v6e(a[0]);
    case 24:
      return new e6e(a[0]);
    case 26:
      return (
        W(d, u1e),
        zo(a)
          ? ((a = $tb(Ax(ydb(a)))), (a = new Q3e(Ztb(a))))
          : ((c = T3e(a.xss)),
            (e = T3e(a.yss)),
            (f = T3e(a.ts)),
            (g = "p" in a ? T3e(ow(a, "p")) : null),
            (h = "t" in a ? T3e(ow(a, "t")) : null),
            (a = "o" in a ? T3e(ow(a, "o")) : null),
            (a = new J3e(c, e, f, g, h, a))),
        a
      );
    case 27:
      return (
        W(d, u1e),
        (m = a[0]),
        zo(m)
          ? ((c = $tb(Ax(ydb(m)))), (c = new O3e(Ztb(c))))
          : ((c = T3e(m.ti)),
            (e = T3e(m.oi)),
            (f = T3e(m.xss)),
            (g = T3e(m.yss)),
            (h = "os" in m ? T3e(ow(m, "os")) : null),
            (d = "cs1" in m ? T3e(ow(m, "cs1")) : null),
            (l = "cs2" in m ? T3e(ow(m, "cs2")) : null),
            (m = "cs3" in m ? T3e(ow(m, "cs3")) : null),
            (c = new H3e(c, e, f, g, h, d, l, m))),
        (e = B3e(a[1])),
        (a = a[2]),
        c instanceof H3e
          ? (N3e(), (a = M3e(c, null, e, a)))
          : (N3e(), (a = M3e(null, c, e, a))),
        a
      );
    case 28:
      return new E6e(Spb(a, 0), Spb(a, 1));
    case 29:
      return (
        (c = new Z4e()),
        (e = a[1]),
        (f = a[2]),
        (g = !!a[3]),
        (c.ha = null == a[0] ? "" : $v(a, 0)),
        Up(e),
        (c.ga = e),
        Up(f),
        (c.ea = f),
        (c.aa = g),
        void 0,
        c
      );
    case 13:
    case 17:
    case 18:
      return a;
    case 23:
      return a;
    default:
      return a;
  }
}
function N6e() {
  this.aa = {};
  for (var a = 0; a < l5e.length; a = (a + 1) | 0) {
    var c = this.aa,
      d = l5e[a],
      e = new h7e();
    e.aa = {};
    for (var f = 0; f < m5e.length; f = (f + 1) | 0) gw(e.aa, m5e[f], {});
    e.ga = {};
    e.ea = {};
    gw(c, d, e);
  }
}
G(N6e, H);
function R6e(a, c, d, e) {
  c = a.aa[c];
  x6e(e, y6e, Hna);
  gw(c.aa, d, e);
  return a;
}
function P6e(a, c, d) {
  c = a.aa[c];
  x6e(d, z6e, zd);
  c.ga = d;
  return a;
}
N6e.prototype.ua = function () {
  return new i7e(this);
};
function j7e() {}
G(j7e, H);
j7e.prototype.Za = function (a) {
  if (I(this, a)) return !0;
  if (!(a instanceof j7e)) return !1;
  var c = w4e();
  return (
    k7e(c, this.aa, a.aa, function (d, e, f) {
      return l7e(d, e, f);
    }) &&
    l7e(c, this.ea, a.ea) &&
    m7e(c, this.ga, a.ga)
  );
};
j7e.prototype.Ac = function () {
  return Qp([L(Ux(this.aa)), L(Ux(this.ea)), L(Ux(this.ga))]);
};
function h7e() {}
G(h7e, H);
function i7e(a) {
  this.aa = {};
  for (var c = 0; c < l5e.length; c = (c + 1) | 0) {
    var d = l5e[c],
      e = new j7e(),
      f = e,
      g = a.aa[d];
    f.aa = {};
    for (var h = 0; h < m5e.length; h = (h + 1) | 0) {
      var l = m5e[h];
      gw(f.aa, l, lw(g.aa[l]));
    }
    f.ea = lw(g.ga);
    f.ga = lw(g.ea);
    gw(this.aa, d, e);
  }
}
G(i7e, H);
i7e.prototype.Za = function (a) {
  return I(this, a) ? !0 : a instanceof i7e ? Tx(this.aa, a.aa) : !1;
};
i7e.prototype.Ac = function () {
  return Ux(this.aa);
};
function l7e(a, c, d) {
  iO();
  return n7e(a, Q6e(c), Q6e(d), H6e);
}
function m7e(a, c, d) {
  iO();
  return n7e(a, O6e(c), O6e(d), {});
}
function n7e(a, c, d, e) {
  var f = o7e(c),
    g = o7e(d);
  yw(f);
  yw(g);
  if (!gv(f, g)) return !1;
  for (g = 0; g < f.length; g++) {
    var h = f[g],
      l = c[h],
      m = d[h];
    if ((h = e[h])) {
      if (h(a, l, m)) continue;
      return !1;
    }
    if (!Y6e(l, m)) return !1;
  }
  return !0;
}
function k7e(a, c, d, e) {
  iO();
  return zub(c, d, function (f, g) {
    return e(a, f, g);
  });
}
function Q6e(a) {
  iO();
  L6e ||
    (L6e = {
      53: M6e,
      64: M6e,
      61: M6e,
      106: M6e,
      107: M6e,
      99: M6e,
      90: M6e,
      127: M6e,
      138: M6e,
    });
  return p7e(q5e, a, L6e);
}
function O6e(a) {
  iO();
  return p7e(w5e, a, {});
}
function p7e(a, c, d) {
  var e = {};
  if (!c) return e;
  for (var f in c) {
    var g = Number(f),
      h = c[g],
      l = d[g];
    h = l ? l(g, h) : null == a[g] ? h : T6e(a[g], h);
    gw(e, g, h);
  }
  return e;
}
function T6e(a, c) {
  switch (a) {
    case 2:
    case 6:
      c = A9a(c) ? sx(Dv(c)) : NaN;
      break;
    case 1:
      c = !0 === c;
      break;
    case 4:
      c = S6e(c);
      break;
    case 5:
      a = c;
      c = a.aa.slice(0);
      var d = [];
      for (var e = 0; e < c.length; e++) {
        var f = gq(c[e], (jq(), iq));
        d.push(f);
      }
      c = new $6e(a.getName(), d);
      break;
    case 3:
      xo(c) && (c = gO(c, 4));
  }
  return c;
}
function r4e(a) {
  iO();
  return new iF(
    gO(a.ha, 4),
    gO(a.ga, 4),
    gO(a.ea, 4),
    gO(a.aa, 4),
    gO(a.ia, 4),
    gO(a.la, 4)
  );
}
function o7e(a) {
  iO();
  a = Object.keys(a);
  for (var c = 0; c < a.length; c++) a[c] = Number(a[c]);
  return a;
}
function S6e(a) {
  var c;
  iO();
  switch (((c = a.getType()), c)) {
    case 1:
      return (
        (c = gq(a.aa, (jq(), iq))),
        (a = gO(sx(255 * a.xl()) / 255, 4)),
        new G4e(c, a)
      );
    case 2:
      return a;
  }
  throw so(X0e + K(Gp(a.getType(), z4e))).Ga;
}
function iO() {
  iO = u();
  H6e = { 91: X6e, 51: U6e, 52: U6e, 49: X6e, 72: V6e };
  I6e = { 1: X6e };
  J6e = Yz(Yz(Yz(Yz(Yz(Uz(), 10), 11), 12), 13), 15).ua();
  K6e = Yz(Yz(Yz(Yz(Yz(Yz(Uz(), 147), 148), 149), 150), 154), 155).ua();
  $z(f3e(B5e));
  uzb(Uz(), J6e).ua();
  Yz(Yz(Yz(uzb(Uz(), K6e), 151), 152), 167).ua();
  o7e(H6e);
  o7e(I6e);
  L6e = null;
}
function q7e(a) {
  iO();
  return a.clone().round();
}
function r7e(a, c) {
  iO();
  return a <= c + 1.1e-4 && a >= c - 1.1e-4;
}
function s7e(a) {
  var c = Jy();
  Q4e();
  P4e || (P4e = f7e(R4e(Y4e), c));
  return P4e[a];
}
function t7e(a) {
  iO();
  return p7e(G5e, a, {});
}
function u7e(a) {
  iO();
  return p7e(E5e, a, {});
}
function v7e(a) {
  iO();
  return p7e(C5e, a, {});
}
function w7e(a) {
  iO();
  return p7e(u5e, a, {});
}
function x7e(a, c) {
  return y7e(q5e, r5e, a, c);
}
function z7e(a, c) {
  return y7e(w5e, z5e, a, c);
}
function y7e(a, c, d, e) {
  var f = ew(d);
  zv(f, Zv);
  var g = [];
  for (var h = 0; h < f.length; h++) {
    var l = f[h],
      m = Number(l);
    g.push(m);
    var n = m >= a.length ? 0 : a[m];
    if (9 == n) {
      l = c[l];
      n = [];
      m = d[m];
      for (var q = 0; q < m.length; q++) aw(n, A7e(m[q], l, e));
      aw(g, n);
    } else aw(g, A7e(d[m], n, e));
  }
  return g;
}
function A7e(a, c, d) {
  switch (c) {
    case 1:
      return !0 === a ? 1 : 0;
    case 4:
      return C6e(a);
    case 5:
      return [a.getName(), a.aa.slice(0)];
    case 12:
      return [a.getId(), a.wc()];
    case 10:
      return (d = []), aw(d, C6e(a.re())), d.push(a.xg()), d;
    case 8:
      a: switch (((d = a.ga), d)) {
        case yi:
          d = 0;
          break a;
        case rn:
          d = 1;
          break a;
        default:
          throw Ep("Zp`" + K(d)).Ga;
      }
      d = [d, a.xg()];
      aw(d, C6e(a.re()));
      return d;
    case 16:
      return [
        a.ia ? 1 : 0,
        a.aa.getType(),
        a.aa.aa,
        a.ea.getType(),
        a.ea.aa,
        t6e(a.ga),
        t6e(a.ha),
      ];
    case 14:
      return [a.Nb(), a.ea, a.aa, a.Kb()];
    case 7:
      return [
        a.Wj(),
        a.Lda() ? 1 : 0,
        a.iMa(),
        a.zna(),
        a.tDa(),
        a.sDa() ? 1 : 0,
      ];
    case 15:
      c = [];
      for (var e = 0; e < l5e.length; e = (e + 1) | 0) {
        for (
          var f = l5e[e], g = [z7e(a.aa[f].ga, d), x7e(a.aa[f].ea, d)], h = 0;
          h < m5e.length;
          h = (h + 1) | 0
        )
          g.push(x7e(a.aa[f].aa[m5e[h]], d));
        c.push(g);
      }
      return c;
    case 11:
      return k6e(a, d);
    case 19:
      return (d = bub()), Infinity != a.aa && cub(d, Zo(a.aa)), d.ua();
    case 20:
      return [a.aa];
    case 24:
      return [a.aa];
    case 26:
      return (
        a instanceof Q3e
          ? (W(d, t1e), (a = dr(Ztb($tb(a.aa)).Ls)))
          : (W(d, t1e),
            (d = Ix(
              Ix(Ix(Ex(), "xss", S3e(a.aa)), "yss", S3e(a.la)),
              "ts",
              S3e(a.ia)
            )),
            a.ga && Ix(d, "p", S3e(a.ga)),
            a.ha && Ix(d, "t", S3e(a.ha)),
            a.ea && Ix(d, "o", S3e(a.ea)),
            (a = d.ua())),
        a
      );
    case 27:
      return (
        W(d, t1e),
        (d = []),
        a.ga
          ? aw(d, dr(Ztb($tb(a.ga.aa)).Ls))
          : ((c = a.aa),
            (e = Ix(
              Ix(
                Ix(Ix(Ex(), "ti", S3e(c.ma)), "oi", S3e(c.la)),
                "xss",
                S3e(c.ea)
              ),
              "yss",
              S3e(c.na)
            )),
            c.aa && Ix(e, "os", S3e(c.aa)),
            c.ga && Ix(e, "cs1", S3e(c.ga)),
            c.ha && Ix(e, "cs2", S3e(c.ha)),
            c.ia && Ix(e, "cs3", S3e(c.ia)),
            (c = e.ua()),
            aw(d, c)),
        d.push(a.ea),
        d.push(a.ha),
        d
      );
    case 28:
      return (
        (d = a.aa),
        (a = a.ea),
        (c = bub()),
        null == d ? c.aa.push(null) : cub(c, Zo(d)),
        null == a ? c.aa.push(null) : cub(c, Zo(a)),
        c.ua()
      );
    case 29:
      return [a.getName(), a.ga, a.ea, a.isEnabled()];
    case 13:
    case 17:
    case 18:
      return a;
    case 23:
      return a;
    default:
      return a;
  }
}
function B7e(a, c, d) {
  var e = ew(c);
  zv(e, Zv);
  var f = [];
  for (var g = 0; g < e.length; g++) {
    var h = e[g],
      l = Number(h);
    f.push(l);
    l = c[l];
    var m = a[h],
      n = d,
      q = l.hf();
    h = [];
    for (var r = 0; r < q.length; r++) aw(h, A7e(q[r], m, n));
    m = bub();
    Bx(m, l.aa);
    l.ea ? cub(m, l.wc()) : m.aa.push(null);
    S2e(m, h);
    l = m.ua();
    aw(f, l);
  }
  return f;
}
function C7e(a) {
  D7e();
  for (var c = "", d = 0; 12 > d; d = (d + 1) | 0)
    c = K(c) + K(a[d] ? a[d] : ka);
  return c;
}
function D7e() {
  D7e = u();
  s4e = C7e(c7e(0, Jy()).aa.slice(0));
}
function E7e(a) {
  this.aa = Xu(a, "targetId cannot be null");
  this.ea = {};
}
G(E7e, H);
D = E7e.prototype;
D.ce = x(vh);
D.FB = function (a) {
  return a in this.ea;
};
D.Ec = function (a) {
  var c = this.ea[a];
  if (null != c) a = c;
  else {
    c = Jy();
    Q4e();
    if (!M4e) {
      var d = R4e(V4e);
      M4e = d7e(C5e, D5e, d, c);
    }
    a = M4e[a];
  }
  return a;
};
D.setProperty = function (a, c) {
  gw(this.ea, a, c);
};
D.clone = function () {
  var a = new E7e(this.aa);
  a.ea = lw(this.ea);
  return a;
};
D.Ac = function () {
  return (Math.imul(Wp(this.aa), 37) + Ux(this.ea)) | 0;
};
D.Za = function (a) {
  return I(this, a) ? !0 : null == a ? !1 : this.jt(w4e(), a);
};
D.jt = function (a, c) {
  if (I(this, c)) return !0;
  if (!(c instanceof E7e)) return !1;
  var d;
  if ((d = I(this.aa, c.aa)))
    (d = this.ea), (c = c.ea), iO(), (d = n7e(a, v7e(d), v7e(c), {}));
  return d;
};
function F7e(a, c) {
  Q4e();
  J4e || (J4e = e7e(R4e(S4e), c));
  return J4e[a];
}
function G7e(a, c, d, e) {
  if (!e || bw(e)) return null;
  var f = {};
  a = (a.length - 1) | 0;
  for (var g = 0; g < e.length; g = (g + 2) | 0) {
    var h = e[g];
    if (!(h > a)) {
      var l = h,
        m = e[(g + 1) | 0];
      h = c["" + h];
      var n = d,
        q = m[0],
        r = $v(m, 1);
      m = m[2];
      for (var v = Kv(), w = 0; w < m.length; w = (w + 1) | 0)
        tv(v, g7e(m[w], h, n));
      h = o6e(q, r, wv(v));
      gw(f, l, h);
    }
  }
  return f;
}
var H7e;
function jO() {
  if (!H7e) throw no("dq").Ga;
  return H7e;
}
function I7e() {}
var J7e;
function K7e() {
  K7e = u();
  J7e = [
    Gp(gd, I7e),
    Gp(ee, I7e),
    Gp(he, I7e),
    Gp(Spa, I7e),
    Gp(rra, I7e),
    Gp(Pi, I7e),
    Gp(Fj, I7e),
    Gp(Gj, I7e),
    Gp(Jk, I7e),
    Gp(Ul, I7e),
    Gp(ym, I7e),
    Gp(wn, I7e),
    Gp(xn, I7e),
  ];
}
function L7e(a) {
  K7e();
  for (var c = 0; c < J7e.length; c = (c + 1) | 0) {
    var d = Ip(J7e[c]);
    if (I(d, a)) return d;
  }
  throw Ep("eq`" + K(a)).Ga;
}
function M7e(a, c) {
  this.ea = a;
  this.ga = c;
}
G(M7e, H);
function N7e() {
  this.ha = t3e();
  this.ga = t3e();
}
G(N7e, H);
N7e.prototype.aa = function (a, c, d) {
  return this.ha.get(a).aa(a, c, d);
};
N7e.prototype.ea = function (a, c, d) {
  return this.ga.get(a).ea(a, c, d);
};
function O7e(a, c) {
  P7e.ga.set(a, c);
}
function Q7e(a, c) {
  P7e.ha.set(a, c);
}
var R7e, kO;
function S7e() {
  var a = Kv();
  tv(a, (Afd(), Gfd));
  tv(a, (Sad(), cbd));
  tv(a, (gbd(), lbd));
  tv(a, (jfd(), ofd));
  tv(a, (qZb(), wZb));
  tv(a, (L6b(), S6b));
  tv(a, (UC(), nRb));
  tv(a, (zed(), Hed));
  tv(a, (wC(), POb));
  tv(a, (w9c(), z9c));
  Ly(Jy(), v1e) && (tv(a, (lud(), mud)), tv(a, (nud(), oud)));
  return wv(a);
}
function lO() {
  lO = u();
  R7e = S7e();
  kO = aXb(R7e);
}
var T7e,
  U7e = {
    31: !0,
    32: !0,
    23: !0,
    19: !0,
    21: !0,
    22: !0,
    24: !0,
    33: !0,
    26: !0,
    57: !0,
    25: !0,
  },
  V7e,
  W7e = { das_a: !0, sc_sugg: !0 },
  X7e,
  Y7e = [b0a, a0a, c0a, d0a, e0a, x0a, C0a],
  Z7e,
  $7e,
  a8e = {
    0: Tm,
    1: $m,
    2: bn,
    10: r6a,
    20: an,
    3: Vm,
    4: Zm,
    5: Wm,
    6: m6a,
    56: u6a,
    7: cn,
    50: q6a,
    11: r0a,
    62: t0a,
    12: X_a,
    30: v0a,
    28: h0a,
    13: j0a,
    14: l0a,
    15: bl,
    16: al,
    39: E0a,
    42: Z_a,
    43: n0a,
    44: p0a,
    8: Ij,
    18: yXa,
    27: Nj,
    70: S1a,
    34: T1a,
    35: W1a,
    61: V1a,
    55: U1a,
    63: hla,
    64: fla,
    65: jla,
    66: ila,
    67: gla,
    38: RSa,
    40: JOa,
    41: KOa,
    49: nra,
    53: q7a,
    68: r7a,
    52: v7a,
    69: u7a,
    58: "cr_c",
    59: "cd_u",
    60: doa,
  },
  b8e = {
    autocorrect: gd,
    text: ym,
    paragraph: Jk,
    link: Fj,
    list: Gj,
    spellcheck: Ul,
    ignore_word: Pi,
    date_time: rra,
    comment: rf,
    voice_corrections: wn,
    voice_dotted_span: xn,
    composing_decoration: he,
    composing_region: Spa,
  };
function mO() {
  mO = u();
  V7e = Z3e(a8e);
  Z7e = THb(a8e);
  $7e = THb({
    7: "31",
    0: "23",
    3: "32",
    4: "19",
    5: "21",
    6: "22",
    1: YN,
    10: "33",
    20: "26",
    56: "57",
    2: "25",
  });
  T7e = Z3e(b8e);
  THb(b8e);
  X7e = j3e(9, 17);
}
function c8e(a) {
  mO();
  return (a + 1) | 0;
}
function d8e(a) {
  mO();
  return (a - 1) | 0;
}
function e8e(a) {
  mO();
  return 0 == a ? 0 : d8e(a);
}
function f8e(a) {
  mO();
  return a;
}
function g8e(a, c, d, e) {
  var f = e8e(a),
    g = f8e(c);
  0 == f && 0 == g
    ? ((d = lw(d)),
      tw(d, { kixStartIndex: a, kixEndIndex: c, type: e }),
      (a = jO()),
      (c = no("fq")),
      a.rk(c, d, !1))
    : 0 == a &&
      ((d = lw(d)),
      tw(d, { kixStartIndex: a, kixEndIndex: c, type: e }),
      (a = jO()),
      (c = no("gq")),
      a.log(c, d, !1));
}
function h8e(a, c) {
  mO();
  var d = {};
  for (var e in a) {
    var f = Number(e),
      g = Z6e[f];
    if (null != g && ((g !== wn && g !== xn) || W(c, v1e))) {
      var h = d[g];
      h ? gw(h, f, a[f]) : ((h = hO(Rx(), f, a[f]).ua()), fw(d, g, h));
    }
  }
  return d;
}
function i8e(a) {
  mO();
  for (var c = [], d = 0; d < a.length; d = (d + 1) | 0) {
    var e = null;
    null != a[d] && (e = gB($7e).get("" + a[d]));
    null != e && c.push(Number(e));
  }
  return c;
}
function j8e(a) {
  mO();
  var c = {};
  for (var d in a) {
    var e = gB($7e).get(d);
    null != e && gw(c, Number(e), a[d]);
  }
  return c;
}
function k8e(a, c, d, e, f) {
  mO();
  var g = T7e.get(a),
    h = {},
    l = !1,
    m = [];
  for (var n = 0; n < c.length; n++) {
    var q = c[n];
    if (q in U7e) m.push(q), (l = !0);
    else {
      q = V7e.get("" + q);
      var r = KA(qD((lO(), kO), g), q);
      r
        ? (h[r] = !0)
        : q === W1a
        ? rw(h, q, TC([]))
        : q === V1a
        ? rw(h, q, TC([]))
        : q in W7e
        ? rw(h, q, TC([]))
        : (h[q] = null);
    }
  }
  c = {};
  for (var v in d)
    (g = Number(v)),
      g in X7e ||
        (g in U7e
          ? (gw(c, g, d[g]), (l = !0))
          : ((n = d[g]),
            V7e.get(v) in W7e && (n = TC(n)),
            f.aa(a, g, n).aa(h)));
  if (e)
    for (var w in e) (d = DQb(eMb(e[w], null))), f.aa(a, Number(w), d).aa(h);
  l && ((m = i8e(m)), (c = j8e(c)), rw(h, Oj, k8e(ym, m, c, null, f)));
  return h;
}
function l8e(a) {
  mO();
  var c = [];
  for (var d = 0; d < a.length; d++) {
    var e = $7e.get("" + a[d]);
    null != e && c.push(Number(e));
  }
  return c;
}
function m8e(a, c) {
  mO();
  c = qD((lO(), kO), c);
  var d = [];
  for (var e in a) {
    var f = a[e];
    if (e === Oj) null == f && (f = KOb().Vd()), xw(d, l8e(m8e(f, ym)));
    else if (!mv(Y7e, e)) {
      var g = UGb(c, e);
      g && !0 === f
        ? ((f = VGb(c, e)),
          (f = gB(Z7e).get(f)),
          d.push(Number(null != f ? f : "0")))
        : g ||
          null != f ||
          ((f = gB(Z7e).get(e)), d.push(Number(null != f ? f : "0")));
    }
  }
  return d;
}
function n8e(a, c, d) {
  mO();
  var e = {},
    f = gB(Z7e);
  c = qD((lO(), kO), c);
  var g = {};
  d = W(d, XJa);
  for (var h in a) {
    var l = a[h];
    h === q6a
      ? d && sw(e, h, l)
      : (null != f.get(h) && f.get(h)) || h === Oj
      ? sw(e, h, l)
      : UGb(c, h) && f.get(VGb(c, h)) && (sw(e, h, l), fw(g, h, l));
  }
  for (var m in g) (a = g[m]), (f = VGb(c, m)), a && uw(e, f);
  return e;
}
function o8e(a, c, d) {
  mO();
  var e = {},
    f = !0;
  for (var g in W7e) g in a && (d.ea(c, g, ow(ow(a, g), Ue)).aa(e), (f = !1));
  a = {};
  for (var h in e) (c = hMb(e[h])), fw(a, h, c);
  return f ? null : a;
}
function p8e(a) {
  mO();
  var c = {};
  for (var d in a) {
    var e = $7e.get(d);
    null != e && fw(c, e, a[d]);
  }
  return c;
}
function q8e(a, c, d) {
  mO();
  var e = qD((lO(), kO), c),
    f = {};
  for (var g in a) {
    var h = a[g];
    if (g === Oj) null != h && ((h = p8e(q8e(h, ym, d))), Nx(f, h));
    else if (!(UGb(e, g) || g in W7e)) {
      var l = KA(e, g);
      (null != l && null != a[l] && a[l]) ||
        null == h ||
        (vw(h) && kw(h)) ||
        d.ea(c, g, h).aa(f);
    }
  }
  return f;
}
function r8e(a, c) {
  return W(a, "sketchy-vatl") && null != c && 1e5 < c.length;
}
function s8e(a) {
  this.aa = a;
}
G(s8e, H);
D = s8e.prototype;
D.wQb = function (a) {
  var c = this.aa;
  c(a);
};
D.xQb = function (a) {
  var c = this.aa;
  c(a);
};
D.vQb = function (a) {
  var c = this.aa;
  c(a);
};
D.AQb = function (a) {
  var c = this.aa;
  c(a);
};
D.yQb = function (a) {
  var c = this.aa;
  c(a);
};
D.uQb = function (a) {
  var c = this.aa;
  c(a);
};
D.zQb = function (a) {
  var c = this.aa;
  c(a);
};
D.BQb = function (a) {
  var c = this.aa;
  c(a);
};
var t8e, u8e;
function v8e() {
  v8e = u();
  t8e = new Lt(427680, 302400);
  u8e = new Lt(302400, 427680);
}
var w8e;
function x8e(a, c) {
  y8e();
  this.ea = a;
  this.aa = c;
}
G(x8e, H);
function nO(a, c, d) {
  return new x8e(a, c, d);
}
x8e.prototype.getName = x(vh);
x8e.prototype.Qf = x(Cc);
function z8e() {
  var a = {},
    c = nO("BIG_NUMBER", "Big number", 2);
  fw(a, "BIG_NUMBER", c);
  c = nO("BLANK", "Blank", 3);
  fw(a, "BLANK", c);
  c = nO("CAPTION_ONLY", "Caption", 4);
  fw(a, "CAPTION_ONLY", c);
  c = nO("COMPARISON", "Comparison", 5);
  fw(a, "COMPARISON", c);
  c = nO(iha, "Title and content", 8);
  fw(a, iha, c);
  c = nO(L0e, "Title and content with caption", 9);
  fw(a, L0e, c);
  c = nO("LIST", "List", 6);
  fw(a, "LIST", c);
  c = nO("MAIN_POINT", "Main point", 7);
  fw(a, "MAIN_POINT", c);
  c = nO(M0e, "One-column text", 10);
  fw(a, M0e, c);
  c = nO(N0e, "Title and picture with caption", 11);
  fw(a, N0e, c);
  c = nO(O0e, "Section header", 12);
  fw(a, O0e, c);
  c = nO(P0e, "Section title and description", 13);
  fw(a, P0e, c);
  c = nO(Q0e, "Split title and body", 14);
  fw(a, Q0e, c);
  c = nO(wja, "Title slide", 15);
  fw(a, wja, c);
  c = nO(R0e, "Title and body", 16);
  fw(a, R0e, c);
  c = nO(S0e, "Title and two columns", 17);
  fw(a, S0e, c);
  c = nO("TITLE_ONLY", "Title only", 18);
  fw(a, "TITLE_ONLY", c);
  c = nO("TWO_OBJECTS", "Title and two-column content", 19);
  fw(a, "TWO_OBJECTS", c);
  c = nO(T0e, "Two-column comparison", 20);
  fw(a, T0e, c);
  c = nO("VERTICAL_TEXT", "Title and vertical text", 21);
  fw(a, "VERTICAL_TEXT", c);
  c = nO(Y0e, "Vertical title and vertical text", 22);
  fw(a, Y0e, c);
  return a;
}
function y8e() {
  y8e = u();
  w8e = z8e();
}
function A8e(a) {
  return function (c, d) {
    return c ? c.jt(a, d) : !d;
  };
}
function B8e(a, c, d) {
  this.ga = this.ea = 0;
  this.aa = a;
  this.ea = null != c ? Zo(c) : Zo(F7e(55, Jy()));
  this.ga = null != d ? Zo(d) : 0;
}
G(B8e, H);
B8e.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof B8e
    ? this.aa == a.aa && this.ea == a.ea && this.ga == a.ga
    : !1;
};
B8e.prototype.Ac = function () {
  return Qp([L(this.aa), L(this.aa), L(this.ga)]);
};
B8e.prototype.toString = function () {
  return this.aa + "_" + this.ea + "_" + this.ga;
};
function C8e(a) {
  return new iF(a[2] - a[0], a[3] - a[1], a[4] - a[0], a[5] - a[1], a[0], a[1]);
}
function D8e(a, c) {
  c = C8e(c);
  a = C8e(a);
  Inc(c, jF(a));
  return c;
}
function oO(a, c) {
  var d = a[0],
    e = a[1],
    f = a[2];
  a = a[3];
  d = [d, e, f, e, f, a, d, a];
  c && c.transform(d, 0, d, 0, 4);
  return d;
}
function E8e(a, c) {
  var d = new kF();
  d.moveTo(a[0], a[1]);
  2 < a.length && ((a = a.slice(2, a.length)), Onc(d, a), c && d.close());
  return d;
}
function F8e(a) {
  return new kF()
    .moveTo(a[0], a[1])
    .lineTo(a[2], a[1])
    .lineTo(a[2], a[3])
    .lineTo(a[0], a[3])
    .close();
}
function G8e(a) {
  var c = a.ha,
    d = a.ea,
    e = a.aa;
  a = a.ga;
  var f = Math.sqrt(c * c + a * a),
    g = Math.sqrt(d * d + e * e);
  return 0.02 < Math.abs(f - g) / ((f + g) / 2)
    ? !1
    : 0.03490658503988659 >=
        Math.abs(Math.acos(c * d + a * e) - 1.5707963267948966);
}
function H8e(a) {
  return 1 == a.ha && 0 == a.ea && 0 == a.ga && 1 == a.aa;
}
var I8e = { b_a: !0, b_a_i: !0 },
  J8e,
  K8e,
  L8e,
  M8e,
  N8e = [1, 2, 3],
  O8e = { 17: jna, 36: fna, 37: hna, 28: lna, 13: nna, 29: pna };
function P8e() {
  P8e = u();
  J8e = Z3e(O8e);
  K8e = Z3e({
    1: "0",
    2: "1",
    3: "2",
    4: "3",
    5: "5",
    6: "4",
    7: "7",
    8: "6",
    0: "8",
    9: "9",
    10: xa,
    11: XN,
    12: za,
    13: "13",
    14: "14",
    15: "15",
    16: "16",
  });
  M8e = L8e = null;
}
function Q8e() {
  L8e || (L8e = new RPb({}));
  return L8e;
}
function R8e(a) {
  P8e();
  var c = Q8e(),
    d = [];
  for (var e in a)
    if (!(e in I8e))
      if (e === hd) xw(d, l8e(m8e(a[e], ym)));
      else if (UGb(c.ea, e) && a[e]) {
        var f = VGb(c.ea, e);
        f = Number(gB(J8e).get(f));
        d.push(f);
      }
  return d;
}
function S8e(a, c, d) {
  P8e();
  var e = Q8e(),
    f = {};
  for (var g in a)
    if (!(g in I8e)) {
      var h = a[g];
      switch (g) {
        case hd:
          var l = h;
          l = n8e(l, ym, d);
          Nx(f, p8e(q8e(l, ym, c)));
          break;
        default:
          if (
            !UGb(e.ea, g) &&
            ((l = KA(e.ea, g)), null == l || null == a[l] || !a[l])
          ) {
            l = g;
            var m = h;
            h = f;
            var n = gB(J8e).get(l);
            switch (l) {
              case jna:
                if (null == m || XPb(Ev(m))) throw Do("oq").Ga;
                l = Number(gB(K8e).get("" + Ev(m)));
                break;
              default:
                l = m;
            }
            fw(h, n, l);
          }
      }
    }
  return f;
}
function T8e(a, c, d) {
  var e = J8e.get("" + a);
  switch (a) {
    case 17:
      a = Number(K8e.get("" + Ev(c)));
      break;
    default:
      a = c;
  }
  sw(d, e, a);
  (e = KA(Q8e().ea, e)) && (d[e] = !1);
}
function U8e(a, c, d) {
  P8e();
  var e = {},
    f = {},
    g = !1;
  for (var h in c) {
    var l = Number(h),
      m = c[l];
    switch (l) {
      case 17:
      case 36:
      case 37:
      case 28:
      case 13:
      case 29:
        T8e(l, m, e);
        break;
      default:
        (g = !0), gw(f, l, m);
    }
  }
  c = [];
  for (h = 0; h < a.length; h++)
    switch (((m = a[h]), m)) {
      case 17:
      case 36:
      case 37:
      case 28:
      case 13:
      case 29:
        l = e;
        m = J8e.get("" + m);
        m = KA(Q8e().ea, m);
        l[K(m)] = !0;
        break;
      default:
        (g = !0), c.push(m);
    }
  g && ((c = i8e(c)), rw(e, hd, k8e(ym, c, j8e(f), null, d)));
  e.b_a_i = !0;
  return e;
}
function V8e(a, c) {
  M7e.call(this, a, c);
}
G(V8e, M7e);
V8e.prototype.aa = function (a) {
  null != this.ea && fw(a, this.ea, this.ga);
};
function W8e(a, c, d) {
  M7e.call(this, a, c);
  this.ha = d;
}
G(W8e, M7e);
W8e.prototype.aa = function (a) {
  if (null != this.ea) {
    sw(a, this.ea, this.ga);
    var c = KA(qD((lO(), kO), this.ha), this.ea);
    c && (a[c] = !1);
  }
};
function pO() {}
G(pO, H);
pO.prototype.ea = function (a, c, d) {
  return new V8e(gB((mO(), V7e)).get(c), d);
};
pO.prototype.aa = function (a, c, d) {
  var e = (mO(), V7e).get("" + c);
  switch (w5e[c]) {
    case 1:
      d = !!d;
  }
  a = T7e.get(a);
  return new W8e(e, d, a);
};
function X8e() {}
G(X8e, pO);
X8e.prototype.aa = function (a, c, d) {
  if (66 == c) {
    var e = d;
    0 < e.length
      ? (d = { asm_s: aFb(e[0]), asm_rl: cFb(e[1]), asm_l: bDb(e[2]) })
      : (d = null);
  }
  return pO.prototype.aa.call(this, a, c, d);
};
X8e.prototype.ea = function (a, c, d) {
  c === ila && (d = [d.asm_s, d.asm_rl, d.asm_l]);
  return pO.prototype.ea.call(this, a, c, d);
};
var Y8e;
function Z8e() {
  Z8e = u();
  Y8e = Z3e(g3e(2, L3a, 1, hm, 0, rk));
}
function $8e(a) {
  var c;
  if (!a) return new lB({ hclr_color: null });
  switch (((c = a.getType()), c)) {
    case 1:
      return 0 == a.xl()
        ? new lB({ hclr_color: null })
        : new lB({ hclr_color: a.aa });
    case 2:
      return new nIb({ sclr_index: a.wc() });
  }
  throw so(X0e + K(Gp(a.getType(), z4e))).Ga;
}
function a9e(a) {
  var c = a.clr_type;
  switch (c) {
    case 0:
      return (a = a.hclr_color) ? new G4e(a, 1) : s7e(3);
    case 1:
      return new A6e(a.sclr_index);
    default:
      throw no("pq`" + c).Ga;
  }
}
function b9e() {
  Z8e();
}
G(b9e, pO);
b9e.prototype.ea = function (a, c, d) {
  if (c === cn) (d = gB(Y8e).get(d)), (d = vo(d));
  else if (c === Zm || c === Vm) d = a9e(d);
  return pO.prototype.ea.call(this, a, c, d);
};
b9e.prototype.aa = function (a, c, d) {
  if (7 == c) xo(d) && (d = L(Zo(d))), (d = Y8e.get(K(d)));
  else if (3 == c || 4 == c) d = $8e(d).Vd();
  else if (9 == c) return new W8e(null, null, null);
  return pO.prototype.aa.call(this, a, c, d);
};
function c9e() {}
G(c9e, pO);
function d9e() {}
G(d9e, pO);
d9e.prototype.ea = function (a, c, d) {
  c === doa && (d = a9e(d));
  return pO.prototype.ea.call(this, a, c, d);
};
d9e.prototype.aa = function (a, c, d) {
  60 == c && (d = $8e(d).Vd());
  return pO.prototype.aa.call(this, a, c, d);
};
function e9e() {}
G(e9e, pO);
function f9e() {}
G(f9e, pO);
function g9e() {}
G(g9e, pO);
function h9e() {}
G(h9e, pO);
h9e.prototype.ea = function (a, c, d) {
  c === Ij && (d = d.ulnk_url);
  return pO.prototype.ea.call(this, a, c, d);
};
h9e.prototype.aa = function (a, c, d) {
  if (8 == c) {
    var e = { lnk_type: 0 };
    sw(e, W6a, d);
    d = e;
  }
  return pO.prototype.aa.call(this, a, c, d);
};
function i9e() {}
G(i9e, pO);
i9e.prototype.aa = function (a, c, d) {
  switch (c) {
    case 29:
    case 17:
      return new W8e(null, null, null);
  }
  return pO.prototype.aa.call(this, a, c, d);
};
function j9e(a) {
  switch (a) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 4;
    default:
      throw Ep("qq`" + a).Ga;
  }
}
function k9e(a) {
  switch (a) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
    default:
      throw Ep("rq`" + a).Ga;
  }
}
function l9e() {}
G(l9e, pO);
l9e.prototype.ea = function (a, c, d) {
  c === X_a
    ? (d = j9e(Ev(d)))
    : c === r0a
    ? (d *= 100)
    : c === v0a && (d = !0 === d ? 0 : 1);
  return pO.prototype.ea.call(this, a, c, d);
};
l9e.prototype.aa = function (a, c, d) {
  12 == c
    ? 0 == Ev(d)
      ? (d = L(0))
      : (d = k9e(Ev(d)))
    : 11 == c
    ? (d = Dv(d) / 100)
    : 30 == c && (d = A9a(d) ? 0 == Ev(d) : null == d);
  return pO.prototype.aa.call(this, a, c, d);
};
function m9e() {}
G(m9e, pO);
m9e.prototype.ea = function (a, c, d) {
  var e = d;
  if (c === V1a) {
    e = Wu(d);
    d = Kv();
    e = e.cv.opValue;
    for (var f = 0; f < e.length; f++)
      tv(d, new v6e(f3e(e[f].scsm_ss.cv.opValue)));
    e = wv(d);
  }
  return pO.prototype.ea.call(this, a, c, e);
};
m9e.prototype.aa = function (a, c, d) {
  if (61 == c) {
    var e = [];
    for (var f = 0; f < d.length; f++) {
      var g = Jx(Ex(), j2a, TC(ev(d[f].aa))).ua();
      e.push(g);
    }
    d = TC(e);
  }
  return pO.prototype.aa.call(this, a, c, d);
};
var P7e;
function n9e() {}
G(n9e, pO);
function o9e() {}
G(o9e, pO);
function p9e() {
  if (P7e) return P7e;
  P7e = new N7e();
  var a = new X8e();
  O7e(gd, a);
  Q7e(gd, a);
  a = new b9e();
  O7e(ym, a);
  Q7e(ym, a);
  a = new l9e();
  O7e(Jk, a);
  Q7e(Jk, a);
  a = new h9e();
  O7e(Fj, a);
  Q7e(Fj, a);
  a = new i9e();
  O7e(Gj, a);
  Q7e(Gj, a);
  a = new m9e();
  O7e(Ul, a);
  Q7e(Ul, a);
  a = new g9e();
  O7e(Pi, a);
  Q7e(Pi, a);
  a = new f9e();
  O7e(rra, a);
  Q7e(rra, a);
  a = new c9e();
  O7e(rf, a);
  Q7e(ee, a);
  a = new n9e();
  O7e(wn, a);
  Q7e(wn, a);
  a = new o9e();
  O7e(xn, a);
  Q7e(xn, a);
  a = new e9e();
  O7e(Spa, a);
  Q7e(Spa, a);
  a = new d9e();
  O7e(he, a);
  Q7e(he, a);
  return P7e;
}
function q9e() {}
G(q9e, H);
q9e.prototype.ea = function () {
  return [];
};
function r9e(a, c) {
  a = a.ea(c);
  P8e();
  if (!M8e) {
    for (var d = [], e = 0; 8 >= e; e = (e + 1) | 0) {
      var f = e,
        g = {},
        h = J8e.Jc();
      for (var l = 0; l < h.length; l++) {
        var m = Number(h[l]);
        T8e(m, s7e(m), g);
      }
      T8e(28, 36 * (f + 0.5), g);
      T8e(13, Math.imul(36, f + 1), g);
      T8e(17, N8e[f % N8e.length | 0], g);
      g.b_a = 2;
      f = p9e();
      h = {};
      for (n in (mO(), U7e))
        (l = Number(n)), (m = 32 == l ? null : s7e(l)), gw(h, l, m);
      f = U8e([], h, f);
      rw(g, hd, ow(f, hd));
      g = new RPb(g);
      d.push(g);
    }
    M8e = d;
  }
  c = Math.min(Math.max(c, 0), 8);
  var n = M8e[c].clone();
  for (c = 0; c < a.length; c++) (d = a[c].clone()), rHb(n, d), (n = d);
  return n;
}
function s9e(a) {
  this.aa = a;
}
G(s9e, q9e);
s9e.prototype.ea = function (a) {
  if (!(this.aa.Kh() && this.aa.ym() && this.aa.uU()))
    return q9e.prototype.ea.call(this, a);
  for (var c = [], d = this.aa.Kh().Su(); d; ) {
    a: {
      var e = a;
      var f = d.ZD(this.aa.uU());
      if (f && f.aa && (f = qO(f).Ad(Z0e))) {
        e = GH(f, e);
        break a;
      }
      e = null;
    }
    e && c.unshift(e);
    d = d.Su();
  }
  return c;
};
var t9e, u9e;
function v9e() {
  w9e();
  var a = {};
  Mx(a, Gj, function (c) {
    eTc();
    yTc();
    var d = [];
    for (var e = 0; 8 >= e; e = (e + 1) | 0) {
      var f = s3e(e, !0);
      Ly(Jy(), MJa) &&
        ((f.Ra = !0),
        (f.Ma = !0),
        (f.Oa = !0),
        (f.Qa = !0),
        (f.Ya = !0),
        (f.ab = !0),
        (f.gb = !0),
        (f.ia = 7));
      f.na = MOb();
      d.push(f);
    }
    d = new gTc(d);
    return new dTc(c, d);
  });
  Ly(Jy(), "sketchy-estem") &&
    Mx(a, Ok, function (c) {
      return new z2b(c);
    });
  return a;
}
function w9e() {
  w9e = u();
  u9e = v9e();
  t9e = new IWc(u9e, {});
}
function x9e() {
  w9e();
  return t9e;
}
var y9e, z9e, A9e, B9e;
function C9e() {
  C9e = u();
  y9e = new v_b(["\u0003", "\ue904"]);
  B9e = A9e = z9e = null;
}
function D9e(a) {
  A9e || (A9e = new f4e(a, (lO(), kO)));
  return A9e;
}
var E9e, F9e;
function G9e() {
  G9e = u();
  F9e = E9e = null;
}
function H9e(a) {
  var c = p9e(),
    d = {};
  for (var e in (mO(), Z6e)) {
    var f = Number(e),
      g = Lx((mO(), Z6e), f);
    I(g, a) && ((g = 3 == f ? null : s7e(f)), c.aa(a, f, g).aa(d));
  }
  return d;
}
function I9e() {
  G9e();
  if (F9e) return F9e;
  var a = H9e(Jk);
  return (F9e = new YQb(a));
}
function J9e() {
  G9e();
  if (E9e) return E9e;
  var a = H9e(ym);
  return (E9e = new vC(a));
}
function K9e(a) {
  G9e();
  switch (a) {
    case ym:
      return J9e();
    case Jk:
      return I9e();
    default:
      throw no("sq`" + K(a)).Ga;
  }
}
function L9e(a) {
  G9e();
  this.ia = a;
}
G(L9e, H);
L9e.prototype.aa = function (a, c) {
  switch (c.getType()) {
    case ym:
      return IJb(c, J9e());
    case Jk:
      return IJb(c, I9e());
    default:
      return c;
  }
};
L9e.prototype.ga = function (a, c, d) {
  switch (d) {
    case ym:
      return eid(c, J9e());
    case Jk:
      return eid(c, I9e());
    default:
      return c;
  }
};
L9e.prototype.ha = x(Ji);
var M9e;
function N9e() {
  N9e = u();
  G9e();
  M9e = "\u0003" + K(Az("\n", 9));
}
function O9e(a, c, d) {
  N9e();
  var e = d.Vd(),
    f = {};
  for (var g in e) {
    var h = d.ea.Ec(g);
    if (h.ea && !e[g]) h = h.ea.getKey();
    else if (h.aa) continue;
    else h = g;
    null != a[h] && (sw(f, h, a[h]), uw(a, h));
  }
  a = eid(f, d);
  tw(c, a);
}
function P9e(a, c, d, e) {
  a = Q9e(a, !0, e);
  e = a.Va();
  return aq(e.slice(0, e.Dc()), M9e)
    ? a.nh(c, (Math.min(Math.max(d, 0), 8) + 1) | 0)
    : a.nh(c, 1);
}
function R9e(a, c, d, e, f) {
  N9e();
  if (!c) return IJb(a, K9e(a.getType()));
  for (; c; ) {
    var g = c.ZD(e);
    if (g)
      return (
        (g = P9e(g, a.getType(), d, f)),
        (c = R9e(g, c.Su(), d, e, f)),
        IJb(a, c)
      );
    c = c.Su();
  }
  return IJb(a, K9e(a.getType()));
}
function S9e(a, c, d) {
  N9e();
  G9e();
  this.ia = a;
  this.ea = c;
  this.la = d;
}
G(S9e, L9e);
S9e.prototype.aa = function (a, c, d, e, f, g) {
  if (!T9e(this)) return L9e.prototype.aa.call(this, a, c, d, e, f, g);
  a = a.nh(Gj, g ? g.qb() : d);
  return R9e(c, this.ea.Kh().Su(), eE(a), this.ea.uU(), this.la);
};
S9e.prototype.ga = function (a, c, d, e, f, g) {
  if (!T9e(this)) return L9e.prototype.ga.call(this, a, c, d, e, f, g);
  a = eE(a.nh(Gj, e));
  e = this.ea.Kh().Su();
  f = {};
  for (c = lw(c); e; )
    (g = e.ZD(this.ea.uU())) && (g = P9e(g, d, a, this.la)) && O9e(c, f, g),
      (e = e.Su());
  O9e(c, f, K9e(d));
  return f;
};
function T9e(a) {
  return !!a.ea.Kh() && a.ea.ym() && !!a.ea.uU();
}
function U9e(a) {
  return Zo(a.Ec(54));
}
function V9e(a, c) {
  var d = Jy();
  Q4e();
  if (!K4e) {
    for (var e = {}, f = 0; f < T4e.length; f = (f + 1) | 0) {
      var g = T4e[f],
        h = [];
      for (var l in g) h.push(Number(l)), aw(h, g[l]);
      g = e7e(h, d);
      gw(e, f, g);
    }
    K4e = e;
  }
  a = K4e[a][c];
  return null == a ? F7e(c, d) : a;
}
function W9e(a, c, d) {
  var e = a[c];
  return null != e
    ? e
    : 1 == s5e[c] && !0 === a[86]
    ? V9e(3, c)
    : 1 == t5e[c] && !0 === a[180]
    ? V9e(157, c)
    : V9e(d, c);
}
function X9e(a, c, d, e, f, g) {
  this.ga = this.ia = this.ha = 0;
  this.ea = this.aa = !1;
  this.la = Xu(a, "color cannot be null.");
  this.ha = c;
  Ou(null != d, "width cannot be null.");
  this.ia = d;
  Ou(null != e, "dashStyle cannot be null.");
  this.ga = e;
  this.aa = f;
  this.ea = g;
}
G(X9e, H);
D = X9e.prototype;
D.re = x(xj);
D.xl = function () {
  return this.aa ? 0 : this.ha;
};
D.Fb = function () {
  return this.aa ? 0 : this.ia;
};
D.Ec = function (a) {
  switch (a) {
    case 22:
      return this.Fb();
    case 19:
      return this.re();
    case 20:
      return this.xl();
    case 43:
      return this.ga;
    case 14:
      return this.ea;
  }
  return null;
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof X9e
    ? this.aa || a.aa
      ? this.aa && a.aa
      : Ap(this.la, a.la) &&
        this.ha == a.ha &&
        this.ia == a.ia &&
        this.ga == a.ga &&
        this.ea == a.ea
    : !1;
};
D.Ac = function () {
  return Qp([this.la, this.ha, L(this.ia), L(this.ga), this.ea]);
};
function Y9e(a, c, d, e, f, g, h) {
  return new X9e(
    c ? c : a.la,
    null == d ? a.ha : d,
    null == e ? a.ia : Ev(e),
    null == f ? a.ga : Ev(f),
    null == g ? a.aa : g,
    null == h ? a.ea : h
  );
}
function Z9e(a, c) {
  var d = c[19],
    e = c[20];
  var f = c[22];
  f = null == f ? null : L(Zo(f));
  var g = c[43];
  g = null == g ? null : L(Zo(g));
  return Y9e(a, d, e, f, g, c[56], c[14]);
}
function $9e(a) {
  mH.call(this, a);
}
G($9e, b4e);
$9e.prototype.clone = function (a) {
  var c = this.ga,
    d = [];
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = [];
    for (var h = 0; h < f.length; h++) {
      var l = f[h].clone(a);
      g.push(l);
    }
    d.push(g);
  }
  a = new $9e(d);
  KSc(a);
  return a;
};
$9e.prototype.eS = function () {
  return this.clone(null);
};
$9e.prototype.Za = function (a) {
  return b4e.prototype.Za.call(this, a) && a instanceof $9e;
};
function a$e() {
  return new b$e();
}
function c$e() {
  return d$e(), e$e;
}
var f$e = { 64: !0, 67: !0, 65: !0, 68: !0, 66: !0, 69: !0, 70: !0 },
  g$e = {
    14: !0,
    15: !0,
    16: !0,
    60: !0,
    61: !0,
    62: !0,
    73: !0,
    64: !0,
    67: !0,
    65: !0,
    69: !0,
    68: !0,
    66: !0,
    70: !0,
    147: !0,
    148: !0,
    168: !0,
    149: !0,
    166: !0,
  },
  e$e;
function d$e() {
  d$e = u();
  e$e = new X9e(
    F7e(19, Jy()),
    F7e(20, Jy()),
    Ev(F7e(22, Jy())),
    Ev(F7e(43, Jy())),
    F7e(56, Jy()),
    !1
  );
}
function h$e(a) {
  this.aa = a;
}
G(h$e, H);
function i$e() {
  return {};
}
function j$e(a, c) {
  for (var d = 0; d < a.length; d++) {
    var e = fWb(a[d]);
    for (var f = 0; f < e.length; f++) {
      var g = c.aa;
      g(e[f]);
    }
  }
}
function k$e(a, c) {
  var d = new mH($3e(a.Le(), a.kf(), i$e));
  a = a.Ec(64);
  for (
    var e = {}, f = (n5e.length - 1) | 0;
    0 <= f;
    e = { W4a: e.W4a }, f = (f - 1) | 0
  ) {
    var g = n5e[f],
      h = c[g];
    e.W4a = a.aa[g].ga;
    for (g = 0; g < h.length; g++)
      j$e(
        h[g],
        new h$e(
          (function (l) {
            return function (m) {
              Nx(zH(d, m), l.W4a);
            };
          })(e)
        )
      );
  }
  return d;
}
function l$e(a, c) {
  var d = a4e(a.Le(), a.kf(), {});
  a = a.Ec(64);
  for (var e = {}, f = 0; f < n5e.length; e = { LJa: e.LJa }, f = (f + 1) | 0) {
    var g = n5e[f];
    if (12 != g) {
      var h = c[g];
      e.LJa = a.aa[g].ea;
      for (g = 0; g < h.length; g++)
        j$e(
          h[g],
          new h$e(
            (function (l) {
              return function (m) {
                var n = zH(d, m);
                (!n || (!0 !== n[14] && !0 === l.LJa[14])) &&
                  d.XV(m.aa, m.ea, l.LJa);
              };
            })(e)
          )
        );
    }
  }
  return d;
}
function m$e(a, c, d, e) {
  a = zH(a.aa, c);
  a.Ip() && (a = a.Ip());
  return [
    [
      new hD(
        (c.aa + Math.imul(d ? -1 : 0, a.qf() - 1)) | 0,
        (c.ea + Math.imul(e ? -1 : 0, a.Kf() - 1)) | 0,
        a.qf(),
        a.Kf()
      ),
    ],
  ];
}
function n$e(a, c) {
  var d = [],
    e = 0 == c || 1 == c,
    f = (c = 0 == c || 2 == c) ? 2147483647 : -2147483648;
  for (var g = 0; g < a.length; g++) {
    var h = a[g];
    if (e != eO(h)) {
      var l = e ? h.aa : h.ea;
      if (l == f) d.push(h);
      else if ((l < f && c) || (l > f && !c)) Qv(d), d.push(h), (f = l);
    }
  }
  return d;
}
function o$e(a, c) {
  var d = [],
    e = 0 == c || 1 == c,
    f = 0 == c || 2 == c;
  c = {};
  var g = 2147483647,
    h = -2147483648;
  for (var l = 0; l < a.length; l++) {
    var m = a[l];
    if (e != eO(m)) {
      var n = e ? m.ea : m.aa;
      g = Math.min(g, n);
      h = Math.max(h, n);
      (c[n] && (e ? c[n].aa < m.aa : c[n].ea < m.ea) == f) || gw(c, n, m);
    }
  }
  f = null;
  for (a = g; a <= h; a = (a + 1) | 0) {
    g = c[a];
    if (f)
      for (
        f = e ? f.aa : f.ea, l = e ? g.aa : g.ea, m = Math.min(f, l);
        m < Math.max(f, l);
        m = (m + 1) | 0
      )
        (n = e ? new J2e(g.ea, m, 0) : new J2e(m, g.aa, 1)), d.push(n);
    d.push(g);
    f = g;
  }
  return d;
}
function p$e(a, c, d, e) {
  !0 === e[14] &&
    Ap(a[d.ga].Kc(d.ea, d.aa), (d$e(), e$e)) &&
    a[d.ga].XV(
      d.ea,
      d.aa,
      Y9e(Z9e((d$e(), e$e), e), null, null, null, null, q$e(c, d).aa, null)
    );
}
function r$e(a) {
  a = Cv(a);
  zv(a, X2e);
  var c = null,
    d = [];
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    c
      ? c.aa == f.aa && c.qf() == f.qf() && ((c.Sl() + c.Kf()) | 0) == f.Sl()
        ? (c = new hD(c.aa, c.ea, c.la, (c.ia + f.Kf()) | 0))
        : c.Sl() == f.Sl() && c.Kf() == f.Kf() && ((c.aa + c.qf()) | 0) == f.aa
        ? ((f = f.qf()), (c = new hD(c.aa, c.ea, (c.la + f) | 0, c.ia)))
        : (d.push(c), (c = f))
      : (c = f);
  }
  c && d.push(c);
  return d;
}
function s$e(a, c) {
  if (0 != c && c != ((a.kf() - 1) | 0)) throw no("Bq").Ga;
  for (var d = [], e = 0; e < a.Le(); e = (e + 1) | 0) {
    var f = a.Kc(e, c);
    f.Ip() && (f = f.Ip());
    var g = new hD(
      e,
      (c + (0 != c ? (1 - f.Kf()) | 0 : 0)) | 0,
      f.qf(),
      f.Kf()
    );
    d.push(g);
    e = (e + (f.qf() - 1)) | 0;
  }
  return [r$e(d)];
}
function t$e(a, c) {
  if (0 != c && c != ((a.Le() - 1) | 0)) throw no("Aq").Ga;
  for (var d = [], e = 0; e < a.kf(); e = (e + 1) | 0) {
    var f = a.Kc(c, e);
    f.Ip() && (f = f.Ip());
    var g = (c + (0 != c ? (1 - f.qf()) | 0 : 0)) | 0;
    g = new hD(g, e, f.qf(), f.Kf());
    d.push(g);
    e = (e + (f.Kf() - 1)) | 0;
  }
  return [r$e(d)];
}
function u$e(a, c) {
  for (var d = [], e = [], f = [], g = 0; g < a.Le(); g = (g + 1) | 0)
    for (var h = 0; h < a.kf(); h = (h + 1) | 0)
      if (1 != a.Kc(g, h).ug()) {
        f.push(g);
        break;
      }
  for (c = a.Ec(65) ? c : (c - 1) | 0; c < f.length; c = (c + 2) | 0)
    for (g = f[c], h = 0; h < a.kf(); h = (h + 1) | 0) {
      var l = a.Kc(g, h);
      if (1 != l.ug()) {
        var m = new hD(g, h, l.qf(), l.Kf());
        e.push(m);
        h = (h + (l.Kf() - 1)) | 0;
      }
      if (1 == l.ug() || ((h + 1) | 0) == a.kf())
        0 < e.length && ((e = r$e(e)), d.push(e)), (e = []);
    }
  return d;
}
function v$e(a, c) {
  for (var d = [], e = [], f = [], g = 0; g < a.kf(); g = (g + 1) | 0)
    for (var h = 0; h < a.Le(); h = (h + 1) | 0)
      if (1 != a.Kc(h, g).ug()) {
        f.push(g);
        break;
      }
  for (c = a.Ec(67) ? c : (c - 1) | 0; c < f.length; c = (c + 2) | 0)
    for (g = f[c], h = 0; h < a.Le(); h = (h + 1) | 0) {
      var l = a.Kc(h, g);
      if (1 != l.ug()) {
        var m = new hD(h, g, l.qf(), l.Kf());
        e.push(m);
        h = (h + (l.qf() - 1)) | 0;
      }
      if (1 == l.ug() || ((h + 1) | 0) == a.Le())
        0 < e.length && ((e = r$e(e)), d.push(e)), (e = []);
    }
  return d;
}
function w$e(a, c) {
  switch (c) {
    case 9:
      return (c = new fD(0, 0)), m$e(a, c, !1, !1);
    case 8:
      return (c = new fD(0, (a.kf() - 1) | 0)), m$e(a, c, !1, !0);
    case 5:
      return t$e(a, 0);
    case 11:
      return (c = new fD((a.Le() - 1) | 0, 0)), m$e(a, c, !0, !1);
    case 10:
      return (
        (c = new fD((a.Le() - 1) | 0, (a.kf() - 1) | 0)), m$e(a, c, !0, !0)
      );
    case 7:
      return t$e(a, (a.Le() - 1) | 0);
    case 4:
      return s$e(a, 0);
    case 6:
      return s$e(a, (a.kf() - 1) | 0);
    case 3:
      return v$e(a, 2);
    case 1:
      return v$e(a, 1);
    case 2:
      return u$e(a, 2);
    case 0:
      return u$e(a, 1);
    case 12:
      return [[new hD(0, 0, a.Le(), a.kf())]];
    default:
      throw no("zq`" + c).Ga;
  }
}
function x$e(a, c) {
  d$e();
  c = null != c ? Zo(c) : 2147483647;
  for (var d in a)
    try {
      var e = sp(d);
      Qu(
        0 <= e && e < c,
        "Map of updated dimensions contained out of bounds key: %s",
        e
      );
      var f = a[e];
      Ru(
        Qtb(f),
        "Map of updated dimensions contained non-integer value: %s",
        f
      );
    } catch (g) {
      g = jo(g);
      if (fbb(g))
        throw Lab(
          "Map of updated dimensions contained a key which can't be parsed into a valid Integer: " +
            K(d),
          g
        ).Ga;
      throw g.Ga;
    }
}
function y$e(a, c) {
  x$e(c, a.length);
  for (var d in c) a[Number(d)] = c[d];
}
function z$e(a) {
  d$e();
  for (var c = {}, d = 0; d < a.length; d = (d + 1) | 0) c[d] = a[d];
  x$e(c, null);
}
function A$e(a, c, d) {
  G9e();
  this.ia = a;
  this.la = c;
  this.ea = d;
}
G(A$e, L9e);
A$e.prototype.aa = function (a, c) {
  return IJb(c, B$e(this));
};
A$e.prototype.ga = function (a, c) {
  return eid(c, B$e(this));
};
function B$e(a) {
  var c = K9e(a.ha()).clone(),
    d = p9e(),
    e = h8e(a.la.ia, a.ea)[a.ha()];
  e &&
    ((a = L7e(gB((mO(), T7e)).get(a.ha()))),
    (d = k8e(a, [], e, null, d)),
    c.bd(d));
  return c;
}
function C$e(a) {
  this.aa = a;
}
G(C$e, H);
C$e.prototype.ga = function (a) {
  a: {
    var c = a.aa;
    for (var d = 0; 8 >= d; d = (d + 1) | 0)
      if (oHb(iTc(c, d))) {
        c = !0;
        break a;
      }
    c = !1;
  }
  if (!c) return a;
  a = a.clone();
  c = a.aa;
  for (d = 0; 8 >= d; d = (d + 1) | 0) {
    var e = iTc(c, d),
      f = d;
    oHb(e) && rHb(r9e(this.aa, f), e);
  }
  return a;
};
C$e.prototype.ea = E(1342);
var D$e;
function E$e() {
  E$e = u();
  D$e = $z(d3e(i5e));
}
function F$e(a) {
  E$e();
  return Zo(V9e(a, 50));
}
function G$e(a) {
  D7e();
  return K(a) + ":notes";
}
var H$e;
function I$e() {
  I$e = u();
  H$e = RegExp("^[\\w][\\w-:]*$");
}
function J$e(a) {
  I$e();
  return Pp(a) || 10 != a.charCodeAt((a.length - 1) | 0) ? H$e.test(a) : !1;
}
function K$e(a, c) {
  Ru(J$e(a), I0e, a);
  this.kKa = a;
  this.g9 = this.l9 = "";
  this.transform = new iF();
  this.z5a = c;
}
G(K$e, H);
D = K$e.prototype;
D.JB = z(!1);
D.pZ = E(970);
D.Ssb = z(!0);
D.getId = x("kKa");
D.getParent = x("Ita");
D.Sk = Jn("Ita");
D.Wa = function () {
  return this.Ita ? this.Ita.Wa() : this;
};
D.kb = x("z5a");
D.Kh = function () {
  return this.Ita ? this.Ita.Kh() : null;
};
function L$e(a) {
  for (var c = a.getParent(), d = c.getParent(); d; )
    (a = c), (c = d), (d = c.getParent());
  return a;
}
function M$e(a, c) {
  a.accept(c, null);
}
function rO(a) {
  for (var c = new iF(); a; ) Y2e(c, a.transform), (a = a.getParent());
  return c;
}
function sO(a, c) {
  var d = [];
  M$e(
    a,
    new s8e(function (e) {
      (c && !c(e)) || d.push(e);
    })
  );
  return d;
}
D.clone = function () {
  var a = this.yX();
  N$e(this, a);
  return a;
};
function N$e(a, c) {
  c.transform = a.transform.clone();
  c.l9 = a.l9;
  c.g9 = a.g9;
}
D.Lb = x("l9");
D.setTitle = function (a) {
  if (r8e(this.z5a, a)) throw Ep("Up`" + a.length).Ga;
  this.l9 = a;
};
D.Qf = x("g9");
D.hm = function (a) {
  if (r8e(this.z5a, a)) throw Ep("Vp`" + a.length).Ga;
  this.g9 = a;
};
D.Za = function (a) {
  return I(this, a) ? !0 : null == a ? !1 : this.jt(w4e(), a);
};
D.Ac = function () {
  return (
    (Math.imul(H.prototype.Ac.call(this), 37) +
      Qp([this.kKa, this.transform, this.l9, this.g9])) |
    0
  );
};
D.jt = function (a, c) {
  a = (iO(), q4e);
  c = I(this, c)
    ? !0
    : c instanceof K$e
    ? I(this.kKa, c.kKa) &&
      a(this.transform, c.transform) &&
      I(this.l9, c.l9) &&
      I(this.g9, c.g9)
    : !1;
  return c;
};
D.getTransform = x(Qm);
function O$e(a) {
  for (var c = [], d = 0; d < a.length; d = (d + 1) | 0) {
    var e = a[d].getId();
    c[d] = e;
  }
  return c;
}
function P$e(a, c) {
  K$e.call(this, a, c);
  this.ea = [];
}
G(P$e, K$e);
D = P$e.prototype;
D.yX = function () {
  return new P$e(this.getId(), this.kb());
};
D.indexOf = function (a) {
  a: {
    for (var c = this.ea, d = 0; d < c.length; d = (d + 1) | 0)
      if (I(c[d], a)) {
        a = d;
        break a;
      }
    a = -1;
  }
  return a;
};
D.accept = function (a, c) {
  a.uQb(this);
  Q$e(this, a, c);
};
function Q$e(a, c, d) {
  a = a.ea;
  for (var e = 0, f = a.length; e < f; e = (e + 1) | 0) a[e].accept(c, d);
}
D.Jua = E(972);
D.clone = function (a) {
  a = K$e.prototype.clone.call(this, a);
  for (var c = 0; c < this.ea.length; c = (c + 1) | 0) {
    var d = this.ea[c].clone(null);
    a.ea.push(d);
    a.ea[c].Sk(a);
  }
  return a;
};
D.jt = function (a, c) {
  return K$e.prototype.jt.call(this, a, c) && R$e(this, c, A8e(a), z(!0));
};
function R$e(a, c, d, e) {
  if (!S$e(c)) return !1;
  a = a.ea ? a.ea.filter(e) : [];
  c = c.ea ? c.ea.filter(e) : [];
  return xv(a, c, d);
}
D.Py = function () {
  return !kv(this.ea);
};
D.Yc = function () {
  return this.ea.length;
};
D.Fc = function (a) {
  return this.ea[a];
};
D.E9 = E(576);
D.Sa = function (a) {
  T$e(this, a);
  a.Sk(this);
  this.ea.push(a);
};
D.removeChild = function (a) {
  Fpb(this.ea, a);
  a.Sk(null);
};
function T$e(a, c) {
  Ou(c.Ssb(), "Object is not allowed in groups.");
  Ou(!a.Za(c), "Cannot add a group to itself");
  Su(
    !c.getParent(),
    D0e,
    c.getId(),
    c.getParent() ? c.getParent().getId() : ""
  );
  for (var d = a.getParent(); d; )
    Su(!I(c, d), "%s is already a parent to %s", c, a), (d = d.getParent());
}
function S$e(a) {
  return a instanceof P$e;
}
var U$e = {
  58: !0,
  158: !0,
  177: !0,
  173: !0,
  176: !0,
  120: !0,
  121: !0,
  122: !0,
  123: !0,
  174: !0,
  175: !0,
  118: !0,
  119: !0,
  181: !0,
};
function V$e(a) {
  Ru(J$e(a), I0e, a);
  this.ea = a;
  this.aa = {};
}
G(V$e, H);
D = V$e.prototype;
D.getId = x(vh);
D.ce = x(Cc);
D.FB = function (a) {
  return a in this.aa;
};
D.Ec = function (a) {
  var c = this.aa[a];
  return null != c ? c : F7e(a, Jy());
};
D.setProperty = function (a, c) {
  Qu(a in U$e, E0e, a);
  gw(this.aa, a, c);
};
function W$e(a) {
  Px(a.aa, function (d) {
    Vu(d in U$e, E0e, d);
  });
  var c = Zo(a.Ec(158));
  if (2 != c)
    throw Do(
      Pu("Media clips only support EMBEDDED (2) audio source; found %s", [L(c)])
    ).Ga;
  if (
    a.Ec(122) &&
    ((c = a.Ec(123)), (a = a.Ec(120) ? a.Ec(121) : 0), !(100 <= c - a))
  )
    throw Do(
      Pu("Must not trim clip shorter than %s; start=%s, end=%s", [F0e, a, c])
    ).Ga;
}
D.Ac = function () {
  return Qp([this.ea, L(Ux(this.aa))]);
};
D.Za = function (a) {
  return I(this, a) ? !0 : null == a ? !1 : this.jt(w4e(), a);
};
D.jt = function (a, c) {
  return c instanceof V$e ? I(this.ea, c.ea) && l7e(a, this.aa, c.aa) : !1;
};
function X$e() {
  this.aa = {};
}
G(X$e, H);
D = X$e.prototype;
D.ce = x(Cc);
D.FB = function (a) {
  return a in this.aa;
};
D.Ec = function (a) {
  var c = this.aa[a];
  if (null != c) a = c;
  else {
    c = Jy();
    Q4e();
    if (!N4e) {
      var d = R4e(W4e);
      N4e = d7e(E5e, F5e, d, c);
    }
    a = N4e[a];
  }
  return a;
};
D.setProperty = function (a, c) {
  gw(this.aa, a, c);
};
D.clone = function () {
  var a = new X$e();
  a.aa = lw(this.aa);
  return a;
};
D.Ac = function () {
  return Ux(this.aa);
};
D.Za = function (a) {
  if (I(this, a)) var c = !0;
  else if (a instanceof X$e) {
    c = w4e();
    var d = this.aa;
    a = a.aa;
    iO();
    c = n7e(c, u7e(d), u7e(a), {});
  } else c = !1;
  return c;
};
function Y$e(a) {
  D7e();
  P$e.call(this, a, Jy());
  this.qa = "";
  this.xa = Jv();
  this.oa = {};
  this.ha = {};
  this.la = {};
  this.va = [];
  this.na = new X$e();
  this.ma = {};
}
G(Y$e, P$e);
function Z$e(a, c) {
  if (!a.aa) throw no("Wp").Ga;
  return $$e(a.aa, c);
}
D = Y$e.prototype;
D.FB = function (a) {
  return a in this.la;
};
D.Ec = function (a) {
  var c = this.la;
  D7e();
  c = c[a];
  return null != c ? c : c7e(a, Jy());
};
D.ce = function () {
  return lw(this.la);
};
D.setProperty = function (a, c) {
  gw(this.la, a, c);
  0 == a && (this.qa = C7e(c.aa.slice(0)));
};
D.yR = Jn(Cc);
D.getAnimations = x(on);
D.Kh = function () {
  return this;
};
D.get = function (a) {
  return this.xa.EL(a);
};
D.Ssb = z(!1);
D.add = function (a, c) {
  if (this.xa.Cl(a.getId())) throw Ep("Xp`" + K(a.getId())).Ga;
  null != c
    ? ((c = Zo(c)), T$e(this, a), a.Sk(this), this.ea.splice(c, 0, a))
    : this.Sa(a);
  c = sO(a, null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    this.xa.Pg(e.getId(), e);
  }
  this.aa && aaf(this.aa, c);
  a.JB() && a.ym() && baf(this);
};
D.mPa = function (a) {
  this.add(a, null);
};
D.remove = function (a) {
  var c = a.getParent();
  c.removeChild(a);
  var d = sO(a, null);
  for (var e = 0; e < d.length; e++) this.xa.jC(d[e].getId());
  this.aa && caf(this.aa, d);
  !c.Za(this) && 2 > c.Yc() && daf(this.aa, c);
  a.JB() && a.ym() && (baf(this), a.CAa(null));
};
D.group = function (a, c, d) {
  var e = [];
  if (kv(c)) return null;
  var f = this.indexOf(c[(c.length - 1) | 0]),
    g = new P$e(a, Jy());
  for (var h = 0; h < c.length; h++) {
    var l = c[h];
    this.aa && caf(this.aa, sO(l, null));
    this.removeChild(l);
    g.Sa(l);
    l = l.getId();
    e.push(l);
    (l = this.oa[l]) && vv(e, l);
  }
  d && Enc(g.transform, d[0], d[1], d[2], d[3], d[4], d[5]);
  this.add(g, 0 > f ? this.Yc() : (f - c.length + 1) | 0);
  if (1 == c.length) return daf(this.aa, g), null;
  fw(this.oa, a, e);
  return g;
};
D.Sk = function () {
  throw qo("Cannot set the parent of a page").Ga;
};
D.setTitle = function () {
  throw qo("Cannot set title").Ga;
};
D.hm = function () {
  throw qo("Cannot set description").Ga;
};
D.clone = function () {
  var a = this.yX();
  N$e(this, a);
  for (var c = 0; c < this.Yc(); c = (c + 1) | 0) a.mPa(this.Fc(c).clone(null));
  a.oa = {};
  for (var d in this.oa) (c = Cv(this.oa[d])), fw(a.oa, d, c);
  a.ha = lw(this.ha);
  a.la = lw(this.la);
  a.qa = this.qa;
  d = this.va;
  for (c = 0; c < d.length; c++) {
    var e = d[c].clone();
    a.va.push(e);
  }
  a.na = this.na.clone();
  return a;
};
D.jt = function (a, c) {
  var d;
  if ((d = P$e.prototype.jt.call(this, a, c)))
    if (eaf(c)) {
      d = this.la;
      var e = c.la,
        f;
      if ((f = l7e(a, this.ha, c.ha))) iO(), (f = n7e(a, w7e(d), w7e(e), I6e));
      d = f && xv(this.va, c.va, A8e(a)) && this.na.Za(c.na);
    } else d = !1;
  return d;
};
function faf(a, c) {
  var d = [];
  for (var e in a.ma) {
    var f = a.ma[e];
    (!0 === c && !f.aa) || d.push(f);
  }
  return d;
}
D.ZD = function (a) {
  a = a.toString();
  return a in this.ma ? this.ma[a] : null;
};
function baf(a) {
  a.ma = {};
  for (var c = {}, d = 0; d < a.Yc(); d = (d + 1) | 0) {
    var e = a.Fc(d);
    if (e.JB() && e.ym()) {
      var f = U9e(e),
        g = Zo(e.Ec(55)),
        h = new B8e(f, g, null);
      h.toString() in c || (c[h.toString()] = 0);
      var l = c[h.toString()];
      c[h.toString()] = (l + 1) | 0;
      f = new B8e(f, g, l);
      e.CAa(f);
      fw(a.ma, f.toString(), e);
    } else e.JB() && e.CAa(null);
  }
}
function eaf(a) {
  return a instanceof Y$e;
}
function tO(a) {
  D7e();
  Y$e.call(this, a);
}
G(tO, Y$e);
tO.prototype.ZD = function (a) {
  var c = Y$e.prototype.ZD.call(this, a);
  c || ((c = this.ma), (a = new B8e(a.aa, a.ea, null)), (c = c[a.toString()]));
  return c;
};
function gaf(a, c) {
  C9e();
  c = haf(a.kb(), a.Da, c, !1);
  a.Cda(c);
  return c;
}
function iaf(a, c, d, e) {
  C9e();
  a = haf(a, c, d, !0 === e);
  a.initialize();
  return a;
}
function haf(a, c, d, e) {
  var f = d instanceof K$e && d.JB() ? new s9e(d) : new q9e();
  f = [new C$e(f)];
  var g = jaf(ym, a, c, d),
    h = jaf(Jk, a, c, d);
  d = [g, h, new Jjd(new k4e())];
  g = h instanceof S9e ? [new n4e()] : [];
  h = jO();
  var l = [new W2c()],
    m = x9e(),
    n = (lO(), kO),
    q = new fGb(null),
    r = new ajd(),
    v = new $id(),
    w = new Zid(),
    y = new m4e(),
    A = new l4e(),
    B = D9e(a);
  B9e || (B9e = new j4e(D9e(a)));
  return new UI(
    h,
    d,
    g,
    l,
    f,
    m,
    n,
    q,
    r,
    v,
    w,
    null,
    null,
    null,
    y,
    A,
    c,
    a,
    B,
    B9e,
    y9e,
    e
  );
}
function jaf(a, c, d, e) {
  return e
    ? e instanceof K$e
      ? e.JB()
        ? new S9e(a, e, d)
        : new L9e(a)
      : new A$e(a, e, c)
    : new L9e(a);
}
function b$e() {
  this.ga = this.ea = 1;
  this.ha = {};
  this.ia = {};
}
G(b$e, H);
D = b$e.prototype;
D.Kf = x(vh);
D.Vla = function (a) {
  if (0 > a) throw no("Mj`" + a).Ga;
  this.ea = a;
};
D.qf = x(fi);
D.ima = function (a) {
  if (0 > a) throw no("Nj`" + a).Ga;
  this.ga = a;
};
D.ug = function () {
  return 1 == this.ga && 1 == this.ea
    ? 2
    : 0 == this.ga && 0 == this.ea
    ? 1
    : 0;
};
D.gib = function () {
  if (2 == this.ug()) throw no("Qj").Ga;
  this.la = null;
  this.ea = this.ga = 1;
};
D.Ip = x(xj);
D.ce = x(li);
D.FB = function (a) {
  return a in this.ha;
};
D.Ec = function (a) {
  return 1 == this.ug()
    ? V9e(this.getType(), a)
    : W9e(this.ha, a, this.getType());
};
D.setProperty = function (a, c) {
  gw(this.ha, a, c);
};
D.clone = function (a) {
  var c = new b$e();
  c.ga = this.ga;
  c.ea = this.ea;
  c.la = this.la;
  c.ha = lw(this.ha);
  c.ia = lw(this.ia);
  !0 !== a && (c.aa = this.aa ? gaf(this.aa, c) : null);
  return c;
};
D.Za = function (a) {
  if (a instanceof b$e) {
    var c = this.ha,
      d = a.ha;
    a = I(this, a)
      ? !0
      : l7e(w4e(), c, d) &&
        m7e(w4e(), this.ia, a.ia) &&
        this.ga == a.ga &&
        this.ea == a.ea &&
        Ap(this.la, a.la) &&
        kaf(this, a);
  } else a = !1;
  return a;
};
D.Ac = function () {
  return Qp([
    L(this.ea),
    L(this.ga),
    this.la,
    this.aa,
    L(Ux(this.ha)),
    L(Ux(this.ia)),
  ]);
};
function laf(a, c, d, e, f) {
  if (!a.aa) {
    if (!0 !== c) throw no("wq").Ga;
    c = !!f && !!f.Kh() && f.Kh().aa.Ca;
    a.aa = iaf(e, d, a, c);
  }
  return a.aa;
}
D.getType = z(156);
D.pZ = E(969);
D.ym = z(!1);
D.IN = z(!1);
D.CAa = function () {
  throw no("xq").Ga;
};
D.uU = z(null);
D.toString = function () {
  return this.qf() + "," + this.Kf();
};
D.uDa = function (a) {
  if (I(a, this)) throw no("Pj").Ga;
  this.la = a;
  this.ea = this.ga = 0;
};
D.fVa = !0;
function maf(a, c) {
  K$e.call(this, a, c);
  this.properties = {};
}
G(maf, K$e);
D = maf.prototype;
D.ce = x(c1e);
D.FB = function (a) {
  return a in this.properties;
};
D.Ec = function (a) {
  return W9e(this.properties, a, this.getType());
};
D.setProperty = function (a, c) {
  gw(this.properties, a, c);
};
D.pZ = E(968);
D.ym = function () {
  return 0 != U9e(this);
};
D.IN = function () {
  var a;
  if ((a = this.ym() && this.Kh() instanceof tO)) a = 12 != U9e(this);
  return a;
};
D.clone = function () {
  return K$e.prototype.clone.call(this, null);
};
D.Jua = E(971);
D.fVa = !0;
function naf(a, c) {
  E$e();
  maf.call(this, a, Jy());
  this.ea = 0;
  Nu(c in D$e);
  this.ea = c;
}
G(naf, maf);
D = naf.prototype;
D.yX = function () {
  return new naf(this.getId(), this.ea);
};
D.JB = z(!0);
D.getType = x(vh);
D.Tb = function (a) {
  Nu(a in D$e);
  var c = F$e(this.ea),
    d = F$e(a);
  Inb(
    c == d || (1 == c && 4 == d) || (4 == c && 1 == d),
    "Invalid new category: old=%s new=%s",
    c,
    d
  );
  for (c = 0; 7 >= c; c = (c + 1) | 0) jw(this.properties, c);
  c = oO(uO(this), this.transform);
  this.ea = a;
  this.transform.Px(D8e(oO(uO(this), null), c));
};
function oaf(a) {
  var c = "";
  a.aa
    ? ((a = qO(a).Va()), (c = a.Dc()), (c = a.slice(1, (c - 2) | 0)))
    : 2 == a.getType() && (c = a.Ec(33) || "");
  return c.length;
}
function Q9e(a, c, d) {
  if (!a.aa) {
    if (!0 !== c) throw no("Cq").Ga;
    if (!d) throw Do("Dq").Ga;
    c = uo(!0, a.Ec(32)) || 2 == a.getType();
    Su(c, "Text not allowed for shape %s of type %s", a.getId(), a.getType());
    c = !!a.Kh() && !!a.Kh().aa && a.Kh().aa.Ca;
    a.aa = iaf(Jy(), d, a, c);
  }
  return a.aa;
}
function qO(a) {
  return Q9e(a, null, null);
}
function paf(a) {
  return 5 == a.Zo();
}
D.CAa = Jn(fi);
D.uU = x(fi);
function qaf(a) {
  for (var c = a.Kh().Su(); c; ) {
    var d = c;
    var e = a;
    d = e.ym() ? ((e = e.uU()) ? d.ZD(e) : null) : null;
    if (d) return d;
    c = c.Su();
  }
  return null;
}
D.Zo = function () {
  return F$e(this.ea);
};
function uO(a) {
  return [0, 0, Zo(a.Ec(8)), Zo(a.Ec(9))];
}
function raf(a) {
  a = ov(a.Ec(12), 0).iMa();
  return 1 < a.length && 5 == a[(a.length - 2) | 0];
}
function saf(a) {
  var c = ov(a.Ec(12), 0);
  c = ev(c.zna());
  a = raf(a);
  var d = null;
  d = null != d ? d : 0.16666666666666666;
  var e = c.length;
  if (6 > e) c = E8e(c, a);
  else {
    for (var f = [], g = 0; g < e; g = (g + 2) | 0) {
      var h = (g + 2) | 0,
        l = (g - 2) | 0;
      h == e && (h = a ? 0 : (e - 2) | 0);
      0 > l && (l = a ? (e - 2) | 0 : 0);
      f[g] = d * (c[h] - c[l]);
      f[(g + 1) | 0] = d * (c[(h + 1) | 0] - c[(l + 1) | 0]);
    }
    d = (e - 2) | 0;
    e = new kF();
    e.moveTo(c[0], c[1]);
    for (g = 0; g < d; g = (g + 2) | 0)
      e.WH(
        c[g] + f[g],
        c[(g + 1) | 0] + f[(g + 1) | 0],
        c[(g + 2) | 0] - f[(g + 2) | 0],
        c[(g + 3) | 0] - f[(g + 3) | 0],
        c[(g + 2) | 0],
        c[(g + 3) | 0]
      );
    a &&
      (e.WH(
        c[d] + f[d],
        c[(d + 1) | 0] + f[(d + 1) | 0],
        c[0] - f[0],
        c[1] - f[1],
        c[0],
        c[1]
      ),
      e.close());
    c = e;
  }
  return c;
}
D.clone = function (a) {
  var c = maf.prototype.clone.call(this, null),
    d = this.properties;
  mw(c.properties);
  Nx(c.properties, d);
  this.aa && !0 !== a && (c.aa = gaf(this.aa, c));
  return c;
};
D.jt = function (a, c) {
  var d;
  if ((d = maf.prototype.jt.call(this, a, c)))
    d =
      vO(c) && this.ea == c.ea
        ? l7e(a, this.properties, c.properties) && kaf(this, c)
        : !1;
  return d;
};
function taf(a, c) {
  if (!a.ym()) return [];
  var d = [],
    e = a.Kh();
  if (e instanceof tO) {
    a = U9e(a);
    a = J5e[I5e[a]];
    e = e.qLa();
    for (var f = 0; f < e.length; f++) {
      var g = faf(e[f], c);
      for (var h = 0; h < g.length; h++) {
        var l = g[h],
          m = U9e(l);
        -1 != a.indexOf(m) && d.push(l);
      }
    }
  }
  return d;
}
D.accept = function (a) {
  a.zQb(this);
};
function kaf(a, c) {
  E$e();
  if (vO(a) && vO(c)) {
    var d = !!a.aa;
    var e = !!c.aa;
    a = d ? qO(a) : null;
    c = e ? qO(c) : null;
  } else if (a instanceof b$e && c instanceof b$e)
    (d = !!a.aa),
      (e = !!c.aa),
      (a = d ? laf(a, null, null, null, null) : null),
      (c = e ? laf(c, null, null, null, null) : null);
  else
    throw qo(
      "Only the text models of 2 Shapes or 2 MutableTableCells can be compared."
    ).Ga;
  if (d && e) return a.Za(c);
  if (!d && !e) return !0;
  d = d ? a : c;
  e = Jy();
  c = d.Da;
  C9e();
  z9e || (z9e = iaf(e, c, null, null));
  return z9e.Za(d);
}
function vO(a) {
  return a instanceof naf;
}
D.fVa = !0;
function uaf(a) {
  D7e();
  Y$e.call(this, a);
}
G(uaf, Y$e);
uaf.prototype.clone = function (a) {
  return Y$e.prototype.clone.call(this, a);
};
uaf.prototype.jt = function (a, c) {
  return Y$e.prototype.jt.call(this, a, c) && c instanceof uaf;
};
function vaf(a, c) {
  D7e();
  uaf.call(this, G$e(a));
  this.ia = c;
}
G(vaf, uaf);
D = vaf.prototype;
D.yX = function () {
  var a = this.getId();
  return new vaf(ep(a, 0, (a.length - 6) | 0), this.ia);
};
D.m6 = function () {
  return waf(this).getId();
};
function waf(a) {
  a = a.aa;
  if (!a) throw no("Wp").Ga;
  return a.oa;
}
D.clone = function () {
  var a = uaf.prototype.clone.call(this, null);
  if (this.ga) {
    var c = [this.ga.getId()],
      d = [];
    for (var e = 0; e < c.length; e++) {
      var f = a.get(c[e]);
      f && d.push(f);
    }
    a.ga = d[0];
  }
  return a;
};
D.jt = function (a, c) {
  return uaf.prototype.jt.call(this, a, c) && c instanceof vaf;
};
D.Su = function () {
  return waf(this);
};
D.add = function (a, c) {
  uaf.prototype.add.call(this, a, c);
  a: {
    if (
      vO(a) &&
      ((c = uo(!0, a.Ec(32))), 1 == U9e(a) && (c || 2 == a.getType()))
    ) {
      c = !0;
      break a;
    }
    c = !1;
  }
  c && (this.ga = a);
};
D.mPa = function (a) {
  this.add(a, null);
};
D.accept = function (a, c) {
  a.yQb(this);
  Q$e(this, a, c);
};
function xaf(a, c, d) {
  D7e();
  uaf.call(this, null == a ? "p" : a);
  this.ga = new vaf(null == a ? "p" : a, this);
  d && this.setProperty(2, d);
  c && this.setProperty(1, c);
}
G(xaf, uaf);
D = xaf.prototype;
D.yX = function () {
  return new xaf(this.getId(), null, null);
};
D.Su = function () {
  var a = Z$e(this, this.m6());
  if (a) {
    var c = this.Ec(2);
    return (c = a.ia[c]) ? c : a;
  }
  return null;
};
D.m6 = function () {
  return this.Ec(1);
};
D.yR = function (a) {
  uaf.prototype.yR.call(this, a);
  this.ga.yR(a);
};
D.clone = function () {
  var a = uaf.prototype.clone.call(this, null);
  a.ga = this.ga.clone(null);
  var c = a.ga;
  Ou(
    aq(G$e(a.getId()), c.getId()),
    "Setting mismatched slide page on notes page"
  );
  return (c.ia = a);
};
D.jt = function (a, c) {
  return uaf.prototype.jt.call(this, a, c) && yaf(c) && this.ga.jt(a, c.ga);
};
D.accept = function (a, c) {
  a.AQb(this);
  Q$e(this, a, c);
  !0 === c || this.ga.accept(a, c);
};
function yaf(a) {
  return a instanceof xaf;
}
function zaf(a, c, d, e, f) {
  this.aa = a;
  this.ia = c;
  this.ga = d;
  this.ea = e;
  this.ha = f;
}
G(zaf, H);
zaf.prototype.clone = function (a) {
  if (!QRc(this.aa.aa).Za(QRc(a.aa))) throw no("yq").Ga;
  var c = {};
  for (var d in this.ia) {
    var e = this.ia[d],
      f = [];
    for (var g = 0; g < e.length; g++) {
      var h = e[g],
        l = [];
      for (var m = 0; m < h.length; m++) {
        var n = h[m].clone();
        l.push(n);
      }
      f.push(l);
    }
    fw(c, d, f);
  }
  d = {};
  for (var q in this.ea) (e = this.ea[q].eS()), fw(d, q, e);
  return new zaf(a, c, this.ga.eS(), d, this.ha.eS());
};
zaf.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof zaf
    ? xv(this.ga.ga, a.ga.ga, function (c, d) {
        return xv(c, d, function (e, f) {
          return l7e(w4e(), e, f);
        });
      }) &&
      xv(this.ha.ga, a.ha.ga, function (c, d) {
        return xv(c, d, function (e, f) {
          return m7e(w4e(), e, f);
        });
      }) &&
      Tx(this.ea, a.ea) &&
      zub(this.ia, a.ia, function (c, d) {
        return xv(c, d, function (e, f) {
          return yv(e, f);
        });
      })
    : !1;
};
function Aaf() {
  D7e();
  tO.call(this, "n");
}
G(Aaf, tO);
D = Aaf.prototype;
D.yX = function () {
  return new Aaf();
};
D.clone = function (a) {
  return tO.prototype.clone.call(this, a);
};
D.Su = z(null);
D.qLa = function () {
  var a = this.getId(),
    c = [],
    d = Cv(this.aa.aa);
  for (var e = 0; e < d.length; e++) {
    var f = d[e].ga;
    aq(f.m6(), a) && c.push(f);
  }
  return c;
};
D.jt = function (a, c) {
  return tO.prototype.jt.call(this, a, c) && c instanceof Aaf;
};
D.accept = function (a, c) {
  a.xQb(this);
  Q$e(this, a, c);
};
function Baf(a, c, d) {
  D7e();
  tO.call(this, null != a ? a : "l");
  c &&
    ((a = c.getName()),
    y8e(),
    (c = a in w8e ? c.getName() : c.Qf()),
    this.setProperty(2, c));
  d && this.setProperty(1, d);
}
G(Baf, tO);
D = Baf.prototype;
D.yX = function () {
  return new Baf(this.getId(), null, null);
};
D.getName = function () {
  return this.Ec(2);
};
D.Su = function () {
  return Z$e(this, this.Ec(1));
};
D.clone = function (a) {
  return tO.prototype.clone.call(this, a);
};
D.jt = function (a, c) {
  return tO.prototype.jt.call(this, a, c) && c instanceof Baf;
};
D.qLa = function () {
  var a = this.Ec(1),
    c = this.getName(),
    d = [],
    e = Cv(this.aa.aa);
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    aq(g.m6(), a) && aq(g.Ec(2), c) && d.push(g);
  }
  return d;
};
D.accept = function (a, c) {
  a.vQb(this);
  Q$e(this, a, c);
};
function Caf(a) {
  D7e();
  tO.call(this, null != a ? a : "m");
  this.ga = [];
  this.ia = {};
}
G(Caf, tO);
D = Caf.prototype;
D.yX = function () {
  return new Caf(this.getId());
};
D.yR = function (a) {
  this.aa = a;
  var c = hw(this.ia);
  for (var d = 0; d < c.length; d++) c[d].yR(a);
};
function Daf(a, c, d) {
  var e = null == d ? 0 : Zo(d);
  null != d && (0 <= e && dw(a.ia), dw(a.ia));
  c.aa && Su(!c.Su(), D0e, c, c.Su());
  if (sub(a.ia, c.getName())) throw no("hq`" + K(c.getName())).Ga;
  null != d ? Yv(a.ga, e, 0, [c]) : a.ga.push(c);
  d = c.getName();
  fw(a.ia, d, c);
  if (a.aa) aaf(a.aa, sO(c, null)), c.yR(a.aa);
  else throw no("iq").Ga;
}
D.Su = z(null);
D.ZD = function (a) {
  var c = tO.prototype.ZD.call(this, a);
  if (!c) {
    var d = this.ma,
      e = Zo(F7e(55, Jy()));
    c = new B8e(a.aa, e, null);
    c = d[c.toString()];
    c ||
      ((a = I5e[a.aa]), 0 != a && 1 != a) ||
      ((e = new B8e(0 == a ? 15 : 1, e, null)), (c = d[e.toString()]));
  }
  return c;
};
D.clone = function (a) {
  var c = tO.prototype.clone.call(this, a),
    d = this.ga;
  for (var e = 0; e < d.length; e++) {
    var f = d[e].clone(a);
    c.ga.push(f);
    var g = f.getName();
    fw(c.ia, g, f);
  }
  return c;
};
D.jt = function (a, c) {
  var d;
  if ((d = tO.prototype.jt.call(this, a, c)))
    (a = A8e(a)), (d = Eaf(c) && xv(this.ga, c.ga, a));
  return d;
};
D.qLa = function () {
  var a = this.getId(),
    c = [],
    d = this.ga;
  for (var e = 0; e < d.length; e++) c.push(d[e]);
  d = Cv(this.aa.aa);
  for (e = 0; e < d.length; e++) {
    var f = d[e];
    aq(f.m6(), a) && c.push(f);
  }
  return c;
};
D.accept = function (a, c) {
  a.wQb(this);
  Q$e(this, a, c);
  if (!0 !== c) {
    var d = this.ga;
    for (var e = 0; e < d.length; e++) d[e].accept(a, c);
  }
};
function Eaf(a) {
  return a instanceof Caf;
}
function Faf(a, c, d, e, f, g, h) {
  maf.call(this, a, h);
  this.ha = c;
  this.la = d;
  this.aa = g;
  this.ia = e;
  this.ga = f;
}
G(Faf, maf);
function Gaf(a, c) {
  return new Faf(
    a.getId(),
    ev(a.ha),
    ev(a.la),
    a.ia.eS(),
    a.ga.eS(),
    a.aa.clone(c),
    a.kb()
  );
}
D = Faf.prototype;
D.yX = function () {
  return Gaf(this, !1);
};
D.getType = z(155);
D.Jb = function () {
  return 0 == this.la.length || 0 == this.ha.length;
};
D.insertRow = function (a) {
  this.aa.insertRow(a, a$e);
  dqb(this.ha, a, 0, [0]);
  this.ia.insertRow(a, c$e);
  this.ga.insertRow((a + 1) | 0, c$e);
  Haf(this, !0, a);
  Iaf(this, new hD(a, 0, (this.Le() - a) | 0, this.kf()));
};
function Haf(a, c, d) {
  for (
    var e = WRc(a.aa), f = c ? a.kf() : a.Le(), g = 0;
    g < f;
    g = (g + 1) | 0
  ) {
    var h = new fD(c ? d : g, c ? g : d),
      l = zH(a.aa, h).Ip();
    l &&
      ((h = e[h.toString()]), Jaf(a, new hD(h.aa, h.ea, l.qf(), l.Kf()), !0));
  }
}
D.Le = function () {
  return this.aa.Le();
};
D.kf = function () {
  return this.aa.kf();
};
D.Kc = function (a, c) {
  return this.aa.Kc(a, c);
};
function Kaf(a, c) {
  return 1 < c.qf() && c.Kf() == a.kf()
    ? new hD(c.aa, c.Sl(), (a.Le() - c.aa) | 0, c.Kf())
    : 1 < c.Kf() && c.qf() == a.Le()
    ? new hD(c.aa, c.Sl(), c.qf(), (a.kf() - c.Sl()) | 0)
    : c;
}
D.fMa = E(411);
function q$e(a, c) {
  return 0 == c.ga ? a.ga.Kc(c.ea, c.aa) : a.ia.Kc(c.ea, c.aa);
}
function Jaf(a, c, d) {
  c = L2e(c, !0);
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = Y9e(q$e(a, f), null, null, null, null, d, null);
    0 == f.ga ? a.ga.XV(f.ea, f.aa, g) : a.ia.XV(f.ea, f.aa, g);
  }
}
function Laf(a, c, d, e, f) {
  c = a.aa.Kc(c, d);
  return !0 === f ? laf(c, f, e, Jy(), a) : laf(c, f, null, null, null);
}
D.ce = function () {
  return lw(maf.prototype.ce.call(this));
};
D.Ec = function (a) {
  if (this.ea)
    a: {
      var c = this.ea;
      if (!uo(!0, W9e(c.aa.properties, 14, 155))) {
        var d = W9e(c.aa.properties, 64, 155).aa[12].ea[a];
        if (null != d) {
          a = d;
          break a;
        }
      }
      a = W9e(c.aa.properties, a, 155);
    }
  else a = W9e(this.properties, a, 155);
  return a;
};
D.setProperty = function (a, c) {
  Maf(this, a, c);
  a in f$e && Iaf(this, null);
};
function Maf(a, c, d) {
  Qu(c in g$e, "%s is not a valid shape property for a Table.", c);
  maf.prototype.setProperty.call(a, c, d);
}
function Naf(a, c, d, e, f) {
  var g = !1;
  for (var h in c) h in f$e && (g = !0), Maf(a, Number(h), c[h]);
  if (d)
    for (c = 0; c < d.length; c = (c + 1) | 0)
      d[c] in a.properties && ((g = !0), jw(a.properties, d[c]));
  if (e)
    for (var l in e)
      l in f$e && (g = !0), Maf(a, Number(l), f.apply(e[l], a.properties[l]));
  g && Iaf(a, null);
}
D.CAa = function () {
  throw no("xq").Ga;
};
D.uU = z(null);
D.clone = function (a) {
  a = Gaf(this, !0 === a);
  N$e(this, a);
  var c = this.properties;
  mw(a.properties);
  Nx(a.properties, c);
  a.ea = this.ea ? this.ea.clone(a) : null;
  return a;
};
D.jt = function (a, c) {
  if (!Oaf(c)) return !1;
  var d;
  if ((d = maf.prototype.jt.call(this, a, c))) {
    d = this.properties;
    var e = c.properties,
      f = hob();
    d = Oaf(c)
      ? l7e(a, d, e) &&
        f(this.aa, c.aa) &&
        gv(this.ha, c.ha) &&
        gv(this.la, c.la) &&
        this.ia.Za(c.ia) &&
        this.ga.Za(c.ga) &&
        Ap(this.ea, c.ea)
      : !1;
  }
  return d;
};
D.toString = function () {
  return this.aa.toString();
};
function Iaf(a, c) {
  if (a.Jb() || (null == a.properties[64] && !a.ea)) a.ea = null;
  else {
    if (null == a.properties[64]) var d = null;
    else {
      d = {};
      for (var e = 0; e < n5e.length; e = (e + 1) | 0) {
        for (
          var f = n5e[e], g = o5e[f], h = !0, l = 0;
          l < g.length;
          l = (l + 1) | 0
        ) {
          var m = a.Ec(g[l]);
          h = h && null != m && (!0 === m || Rp(m, 1));
        }
        g = h ? w$e(a, f) : [];
        gw(d, f, g);
      }
      e = l$e(a, d);
      f = a4e(a.Le(), (a.kf() + 1) | 0, (d$e(), e$e));
      f = { 0: a4e((a.Le() + 1) | 0, a.kf(), e$e), 1: f };
      g = a.Ec(64);
      for (h = 0; h < n5e.length; h = (h + 1) | 0) {
        l = n5e[h];
        m = d[l];
        for (var n = 0; n < m.length; n++) {
          var q = m[n],
            r = [];
          for (var v = 0; v < q.length; v++) {
            var w = L2e(q[v], !1);
            vv(r, w);
          }
          q = f;
          v = a;
          var y = g.aa[l].aa[0],
            A = g.aa[l].aa[1],
            B = g.aa[l].aa[2],
            C = g.aa[l].aa[3];
          w = g.aa[l].aa[5];
          var J = g.aa[l].aa[4],
            M = 1 == p5e[l],
            T = M ? n$e(r, 2) : o$e(r, 2),
            Z = M ? n$e(r, 3) : o$e(r, 3),
            ba = M ? o$e(r, 0) : n$e(r, 0),
            ha = M ? o$e(r, 1) : n$e(r, 1);
          M = {};
          for (var ra = 0; ra < T.length; ra++) {
            var Aa = T[ra];
            fw(M, Aa.toString(), Aa);
            p$e(q, v, Aa, B);
          }
          for (B = 0; B < Z.length; B++)
            (Aa = Z[B]), fw(M, Aa.toString(), Aa), p$e(q, v, Aa, C);
          for (C = 0; C < ba.length; C++)
            (Aa = ba[C]), fw(M, Aa.toString(), Aa), p$e(q, v, Aa, y);
          for (y = 0; y < ha.length; y++)
            (Aa = ha[y]), fw(M, Aa.toString(), Aa), p$e(q, v, Aa, A);
          for (A = 0; A < r.length; A++)
            (Aa = r[A]), M[Aa.toString()] || p$e(q, v, Aa, eO(Aa) ? w : J);
        }
      }
      g = k$e(a, d);
      d = new zaf(a, d, e, f, g);
    }
    a.ea = d;
    c || (c = new hD(0, 0, a.Le(), a.kf()));
    c = fWb(c);
    for (d = 0; d < c.length; d++)
      (e = c[d]),
        (f = zH(a.aa, e)),
        (g = {}),
        a.ea && (g = zH(a.ea.ha, e)),
        Tx(f.ia, g) ||
          ((f.ia = g), f.aa && laf(f, null, null, null, null).sX());
  }
}
D.accept = function (a) {
  a.BQb(this);
};
D.vDa = E(379);
D.lOa = E(409);
D.Wua = E(381);
function Oaf(a) {
  return a instanceof Faf;
}
function wO(a, c) {
  this.aa = a;
  this.ea = c;
}
G(wO, H);
D = wO.prototype;
D.Kc = x(vh);
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof wO
    ? I(this.aa, a.aa) && Ap(this.ea, a.Kc())
    : !1;
};
D.Ac = function () {
  return Qp([this.aa, this.ea]);
};
D.toString = function () {
  return JSON.stringify(this.tb());
};
D.tb = function () {
  var a = { shapeId: this.aa };
  this.ea && pw(a, zd, this.ea.toString());
  return a;
};
D.getType = z("sketchy-text");
D.getContext = z(2);
D.getKey = function () {
  return this.toString();
};
D.kS = z(!1);
var Paf;
function Qaf(a, c) {
  Raf();
  this.aa = 0;
  if ((null == c && 1 == a) || (null != c && 1 != a)) throw no("Eq`" + a).Ga;
  this.aa = a;
  this.ea = c;
}
G(Qaf, H);
Qaf.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Qaf
    ? this.aa == a.aa && I(this.ea, a.ea)
    : !1;
};
Qaf.prototype.Ac = function () {
  return Qp([L(this.aa), this.ea]);
};
Qaf.prototype.toString = function () {
  return this.aa + "," + K(this.ea);
};
function Raf() {
  Raf = u();
  new Qaf(2, null);
  Paf = new Qaf(0, null);
}
function Saf(a, c, d, e) {
  this.ga = a;
  this.aa = c;
  this.ia = !!a;
  this.ea = d;
  this.ha = e;
}
G(Saf, H);
function Taf(a) {
  return a.isConnected() ? a.ga : a.aa;
}
Saf.prototype.isConnected = x(Ji);
Saf.prototype.zn = x(li);
function Uaf(a, c) {
  a = c - a;
  return 20 > Math.abs(a) ? c + 20 - a : c;
}
function Vaf(a, c, d) {
  (c = c.Ec(d)) && c.getId()
    ? ((c = c.getId()),
      (a = a.aa[c] ? a.aa[c] : (a = a.ea.Cg(c)) && !vO(a) ? null : a))
    : (a = null);
  return a;
}
function Waf(a, c) {
  var d = Taf(a);
  c = Taf(c);
  return new Saf(
    a.ga,
    a.aa,
    90 *
      sx(
        e3e(57.29577951308232 * Math.atan2(c[1] - d[1], c[0] - d[0]), 360) / 90
      ),
    a.zn()
  );
}
function Xaf(a) {
  var c = {},
    d = [];
  for (var e = 0; e < a.length; e++) {
    var f = a[e];
    if (!Qz(c, f.getId())) {
      var g = f.getId();
      c[g] = !0;
      d.push(f);
    }
  }
  return d;
}
function Yaf(a, c) {
  this.aa = a ? a : (HDb(), IDb);
  this.ea = c ? c : (HDb(), IDb);
}
G(Yaf, H);
function Zaf(a) {
  return a.aa.Jb() || a.ea.Jb()
    ? null
    : [a.aa.min(), a.ea.min(), a.aa.max(), a.ea.max()];
}
function $af(a, c, d) {
  null != c && ((c = tA(c, c)), (a.aa = a.aa.WW(c)));
  null != d && ((d = tA(d, d)), (a.ea = a.ea.WW(d)));
}
function abf(a, c) {
  var d = 0;
  for (var e = 0; e < c.length; e++) d = d * a + c[e];
  return d;
}
function bbf(a, c, d, e) {
  var f = [];
  e = e - 3 * d + 3 * c - a;
  d = 3 * d - 6 * c + 3 * a;
  c = 3 * c - 3 * a;
  if (0 == e)
    0 != d &&
      ((e = c / (-2 * d)), 0 <= e && 1 >= e && f.push(abf(e, [d, c, a])));
  else {
    var g = 4 * d * d - 12 * e * c;
    if (0 <= g) {
      var h = (-2 * d + Math.sqrt(g)) / (6 * e);
      0 <= h && 1 >= h && f.push(abf(h, [e, d, c, a]));
      g = (-2 * d - Math.sqrt(g)) / (6 * e);
      0 <= g && 1 >= g && f.push(abf(g, [e, d, c, a]));
    }
  }
  if (kv(f)) f = (HDb(), IDb);
  else {
    a = f[0];
    e = f[0];
    for (d = 0; d < f.length; d++)
      (c = f[d]), 0 < W$a(a, c) && (a = c), 0 > W$a(e, c) && (e = c);
    f = tA(a, e);
  }
  return f;
}
function cbf(a, c, d) {
  return (a >= c && a <= c + d) || (360 < c + d && c + d - 360 >= a);
}
function dbf(a) {
  var c = new Yaf(null, null),
    d = [0, 0],
    e = [0, 0];
  Qnc(a, function (f, g) {
    if (0 == f)
      $af(c, g[0], g[1]),
        (d[0] = g[0]),
        (d[1] = g[1]),
        $af(c, d[0], d[1]),
        (e[0] = g[0]),
        (e[1] = g[1]);
    else if (1 == f)
      for (; 2 <= g.length; )
        (d[0] = g[0]),
          (d[1] = g[1]),
          $af(c, d[0], d[1]),
          (g = g.slice(2, g.length));
    else if (2 == f)
      for (; 6 <= g.length; ) {
        f = c;
        var h = d,
          l = g,
          m = bbf(h[0], l[0], l[2], l[4]);
        f.aa = f.aa.WW(m);
        h = bbf(h[1], l[1], l[3], l[5]);
        f.ea = f.ea.WW(h);
        d[0] = g[4];
        d[1] = g[5];
        $af(c, d[0], d[1]);
        g = g.slice(6, g.length);
      }
    else if (3 == f) {
      m = g;
      f = m[0];
      h = m[1];
      l = m[2];
      m = m[3];
      var n = d[0] - f * Math.cos(0.017453292519943295 * l),
        q = d[1] - h * Math.sin(0.017453292519943295 * l);
      cbf(0, l, m) && $af(c, n + f, null);
      cbf(90, l, m) && $af(c, null, q + h);
      cbf(180, l, m) && $af(c, n - f, null);
      cbf(270, l, m) && $af(c, null, q - h);
      d[0] = g[4];
      d[1] = g[5];
      $af(c, d[0], d[1]);
    } else 4 == f && ((d[0] = e[0]), (d[1] = e[1]));
  });
  return c;
}
var ebf = [0, 1, 2, 3, 4, 5, 6, 7],
  fbf,
  gbf = [1, 2],
  hbf = [173, 181],
  ibf = [49, 91],
  jbf = [58],
  kbf = [39, 92],
  lbf = [171, 170, 178, 179],
  mbf = [45, 34, 35, 36, 63, 33],
  nbf = [5, 4, 6, 7, 3, 10, 8, 9],
  obf = [120, 121, 122, 123];
function pbf() {
  var a = {};
  for (var c = 0; c < ebf.length; c++) a[ebf[c]] = !0;
  return a;
}
function xO() {
  xO = u();
  fbf = pbf();
}
function qbf(a, c) {
  rbf(this, a, c);
}
G(qbf, H);
function rbf(a, c, d) {
  var e = [];
  epb(c, function (h) {
    e.push(Zo(h));
  });
  yw(e);
  a.ea = e;
  a.aa = [];
  c = (xO(), ebf).length;
  for (var f = {}, g = 0; g < c; f = { dBa: f.dBa }, g = (g + 1) | 0)
    (f.dBa = []),
      epb(
        d[g],
        (function (h) {
          return function (l) {
            h.dBa.push(Zo(l));
          };
        })(f)
      ),
      yw(f.dBa),
      a.aa.push(f.dBa);
}
function sbf(a) {
  for (
    var c = Iv((Bv(), yob)), d = [], e = (xO(), ebf).length, f = 0;
    f < e;
    f = (f + 1) | 0
  )
    Ov(d, Iv(yob));
  var g = [];
  for (e = 0; e < a.length; e = (e + 1) | 0) Ov(g, Iv(yob));
  for (e = (a.length - 1) | 0; 0 <= e; e = (e - 1) | 0) {
    f = a[e];
    for (var h = {}, l = 1; l < f.length; h = { Wka: h.Wka }, l = (l + 2) | 0) {
      var m = f[l];
      h.Wka = f[(l + 1) | 0];
      switch (m) {
        case 3:
        case 4:
          Hv(c, e);
          epb(g[e], function (n) {
            Hv(c, n);
          });
          break;
        case 1:
          Hv(d[h.Wka], e);
          epb(
            g[e],
            (function (n) {
              return function (q) {
                Hv(d[n.Wka], q);
              };
            })(h)
          );
          break;
        case 2:
          Hv(g[h.Wka], e),
            epb(
              g[e],
              (function (n) {
                return function (q) {
                  Hv(g[n.Wka], q);
                };
              })(h)
            );
      }
    }
  }
  return new qbf(c, d);
}
function tbf(a) {
  xO();
  var c;
  a: {
    for (c = 0; c < hbf.length; c = (c + 1) | 0)
      if (hbf[c] in a) {
        c = !0;
        break a;
      }
    c = !1;
  }
  Ru(!c, "Property map %s contains properties only allowed on MediaClips.", a);
}
function ubf(a, c, d) {
  xO();
  var e = $z(a);
  d = $z(d);
  Sz(d, tub(c));
  c = i3e(e, d);
  return kw(c) ? 0 : dw(c) == a.length ? 2 : 1;
}
function vbf(a, c, d) {
  this.ea = a;
  this.aa = c;
  this.ga = d;
}
G(vbf, H);
vbf.prototype.Wj = x(vh);
vbf.prototype.getPath = x(fi);
var wbf;
function xbf(a, c, d) {
  ybf();
  this.aa = a;
  this.ea = c;
  this.ga = d;
}
G(xbf, H);
xbf.prototype.smooth = function (a) {
  for (var c = [], d = 0; d < a.length; d = (d + 2) | 0)
    c.push(new hH(a[d], a[(d + 1) | 0]));
  return zbf(this, c);
};
function zbf(a, c) {
  var d = c.length,
    e = V3e(c[1], c[0]).normalize();
  d = V3e(c[(d - 2) | 0], c[(d - 1) | 0]).normalize();
  var f = new kF();
  f.moveTo(c[0].x, c[0].y);
  Abf(a, c, e, d, f);
  return f;
}
function Abf(a, c, d, e, f) {
  var g = c.length;
  if (2 == g)
    (a = c[0]),
      (c = c[1]),
      (g = Vlb(a, c) / 2),
      (e = Bbf(a, c, d, e, g, g)),
      f.WH(e[1].x, e[1].y, e[2].x, e[2].y, e[3].x, e[3].y);
  else {
    for (
      var h = null, l = null, m = (g / 2) | 0, n = 0;
      n < a.ga;
      n = (n + 1) | 0
    ) {
      var q = c,
        r = h,
        v = l;
      h = q.length;
      l = [];
      if (r && v)
        for (var w = 0; w < h; w = (w + 1) | 0) {
          for (var y = Cbf(r[w], v), A = [], B = 0; 3 > B; B = (B + 1) | 0) {
            var C = X3e(V3e(v[(B + 1) | 0], v[B]), 3);
            A[B] = C;
          }
          B = [];
          for (C = 0; 2 > C; C = (C + 1) | 0) {
            var J = X3e(V3e(A[(C + 1) | 0], A[C]), 2);
            B[C] = J;
          }
          A = Cbf(r[w], A);
          C = V3e(y, q[w]);
          y = W3e(C, A);
          B = W3e(C, Cbf(r[w], B)) + W3e(A, A);
          l[w] = r[w] - (0 == B ? 0 : y / B);
          l[w] = Math.max(0, Math.min(1, l[w]));
        }
      else {
        l[0] = 0;
        for (r = 1; r < h; r = (r + 1) | 0)
          l[r] = l[(r - 1) | 0] + Vlb(q[r], q[(r - 1) | 0]);
        for (q = 1; q < h; q = (q + 1) | 0)
          (l[q] = l[q] / l[(h - 1) | 0]),
            (l[q] = Math.max(0, Math.min(1, l[q])));
      }
      h = l;
      w = c;
      y = h;
      q = d;
      l = e;
      B = w.length;
      r = w[0];
      v = w[(B - 1) | 0];
      A = [];
      for (C = 0; C < B; C = (C + 1) | 0)
        (J = [X3e(q.clone(), Dbf(y[C])), X3e(l.clone(), Ebf(y[C]))]),
          (A[C] = J);
      C = [
        [0, 0],
        [0, 0],
      ];
      for (J = 0; J < B; J = (J + 1) | 0)
        (C[0][0] = C[0][0] + W3e(A[J][0], A[J][0])),
          (C[0][1] = C[0][1] + W3e(A[J][0], A[J][1])),
          (C[1][1] = C[1][1] + W3e(A[J][1], A[J][1]));
      C[1][0] = C[0][1];
      J = [0, 0];
      for (var M = 0; M < B; M = (M + 1) | 0) {
        var T = 1 - y[M];
        T = T * T * T;
        var Z = Dbf(y[M]),
          ba = Ebf(y[M]),
          ha = y[M];
        var ra = ha * ha * ha;
        var Aa = [w[M], r, r, v, v];
        ha = [];
        ha.push(-1);
        ha.push(T);
        ha.push(Z);
        ha.push(ba);
        ha.push(ra);
        T = Aa;
        Z = ha;
        for (ra = ha = ba = 0; ra < T.length; ra = (ra + 1) | 0)
          (ba = Zo(ba + T[ra].x * Z[ra])), (ha = Zo(ha + T[ra].y * Z[ra]));
        T = new hH(ba, ha);
        J[0] = J[0] + W3e(A[M][0], T);
        J[1] = J[1] + W3e(A[M][1], T);
      }
      w = C[0][0] * C[1][1] - C[1][0] * C[0][1];
      y = C[0][0] * J[1] - C[1][0] * J[0];
      B = J[0] * C[1][1] - J[1] * C[0][1];
      B = 0 == w ? 0 : B / w;
      w = 0 == w ? 0 : y / w;
      y = Vlb(r, v);
      A = 1e-6 * y;
      if (B < A || w < A) B = w = y / 3;
      l = Bbf(r, v, q, l, B, w);
      q = 0;
      for (r = 1; r < ((g - 1) | 0); r = (r + 1) | 0)
        (v = Vlb(c[r], Cbf(h[r], l))), v >= q && ((q = v), (m = r));
      if (q > a.aa * a.ea) break;
      if (q < a.aa) {
        f.WH(l[1].x, l[1].y, l[2].x, l[2].y, l[3].x, l[3].y);
        return;
      }
    }
    n = V3e(c[(m - 1) | 0], c[(m + 1) | 0]).normalize();
    Abf(a, c.slice(0, (m + 1) | 0), d, n, f);
    d = Abf;
    c = c.slice(m, g);
    n.x = -n.x;
    n.y = -n.y;
    d(a, c, n, e, f);
  }
}
function Bbf(a, c, d, e, f, g) {
  d = X3e(d.clone(), f).add(a);
  e = X3e(e.clone(), g).add(c);
  return [a, d, e, c];
}
function Dbf(a) {
  var c = 1 - a;
  return 3 * a * c * c;
}
function Ebf(a) {
  return 3 * a * a * (1 - a);
}
function Cbf(a, c) {
  for (var d = c.length, e = [], f = [], g = 0; g < d; g = (g + 1) | 0)
    (e[g] = c[g].x), (f[g] = c[g].y);
  for (c = 1; c < d; c = (c + 1) | 0)
    for (g = 0; g < ((d - c) | 0); g = (g + 1) | 0)
      (e[g] = (1 - a) * e[g] + a * e[(g + 1) | 0]),
        (f[g] = (1 - a) * f[g] + a * f[(g + 1) | 0]);
  return new hH(e[0], f[0]);
}
function ybf() {
  ybf = u();
  wbf = new xbf(1905, 5, 5);
}
var Fbf;
function Gbf() {
  var a = Array(f5e.length);
  Rv(a, 0, In());
  Rv(a, 1, function (c, d, e) {
    return c + d - e;
  });
  Rv(a, 2, function (c, d, e) {
    return (c * d) / e;
  });
  Rv(a, 3, function (c, d) {
    return (c + d) / 2;
  });
  Rv(a, 4, function (c) {
    return Math.abs(c);
  });
  Rv(a, 5, function (c, d) {
    return Math.min(c, d);
  });
  Rv(a, 6, function (c, d) {
    return Math.max(c, d);
  });
  Rv(a, 7, function (c, d, e) {
    return 0 < c ? d : e;
  });
  Rv(a, 8, function (c, d, e) {
    return Math.sqrt(c * c + d * d + e * e);
  });
  Rv(a, 9, function (c, d) {
    return (6e4 * Math.atan2(d, c)) / 0.017453292519943295;
  });
  Rv(a, 10, function (c, d) {
    return c * Math.sin((d / 6e4) * 0.017453292519943295);
  });
  Rv(a, 11, function (c, d) {
    return c * Math.cos((d / 6e4) * 0.017453292519943295);
  });
  Rv(a, 12, function (c, d, e) {
    return c * Math.cos(Math.atan2(e, d));
  });
  Rv(a, 13, function (c, d, e) {
    return c * Math.sin(Math.atan2(e, d));
  });
  Rv(a, 14, function (c) {
    return Math.sqrt(c);
  });
  Rv(a, 15, function (c, d) {
    return c * Math.tan((d / 6e4) * 0.017453292519943295);
  });
  Rv(a, 16, function (c, d, e) {
    return 0 > wo(d, c) ? c : 0 < wo(d, e) ? e : d;
  });
  Rv(a, 17, function (c, d, e) {
    return (c + d) / e;
  });
  Rv(a, 18, function (c, d, e) {
    return c + 6e4 * d - 6e4 * e;
  });
  Rv(a, 19, function (c, d, e) {
    if (0 == d) return c;
    c /= d;
    return e * Math.sqrt(1 - c * c);
  });
  return a;
}
function Hbf() {
  Hbf = u();
  Fbf = Gbf();
}
function Ibf(a, c) {
  this.ea = a;
  this.aa = c;
}
G(Ibf, H);
function Jbf(a, c) {
  var d = Lx(a.aa.ce(), c);
  if (null != d) return d;
  a: {
    if (
      (d = a.aa.uU()) &&
      a.ea &&
      null == Lx(a.aa.ce(), c) &&
      a.aa.ym() &&
      !Kbf(a, c)
    )
      for (var e = a.ea.Su(); e; ) {
        var f = e.ZD(d);
        if (f && null != Lx(f.ce(), c)) {
          d = f;
          break a;
        }
        e = e.Su();
      }
    d = null;
  }
  return d ? Lx(d.ce(), c) : a.aa.Ec(c);
}
function Kbf(a, c) {
  if (!a.aa.ym() || !dv((xO(), ebf), c)) return !1;
  c = qaf(a.aa);
  return !!c && a.aa.getType() != c.getType();
}
function Lbf(a) {
  return new Ibf(a.Kh(), a);
}
function Mbf(a, c, d) {
  Hbf();
  this.ea = this.la = 0;
  this.transform = new iF();
  this.aa = a;
  this.oa = d ? d : Lbf(a);
  this.ia = [];
  this.ga = 2 == a.getType() ? uO(a) : null;
  a = a.Ec(10);
  this.na = !0 === c ? sbf(a) : null;
  Nbf(this);
  c = [];
  for (d = 0; d < a.length; d = (d + 1) | 0) c[d] = d;
  Obf(this, c);
}
G(Mbf, H);
Mbf.prototype.RI = function () {
  return [this.la / 2, this.ea / 2];
};
Mbf.prototype.resize = function () {
  Nbf(this);
  Obf(this, this.na.ea);
  return this;
};
Mbf.prototype.ha = E(973);
Mbf.prototype.rU = E(974);
function Pbf(a, c, d) {
  if (!0 === c && a.ma) return a.ma;
  var e = !1,
    f = [];
  switch (a.aa.getType()) {
    case 154:
      var g = saf(a.aa);
      f.push(new vbf(1, !0, g));
      break;
    case 4:
      var h = ov(a.aa.Ec(12), 0);
      var l = h.zna();
      ybf();
      var m = wbf;
      for (var n = [], q = 0; q < l.length; q = (q + 2) | 0)
        n.push(new hH(l[q], l[(q + 1) | 0]));
      g = zbf(m, n);
      f.push(new vbf(0, !0, g));
      break;
    case 164:
      g = F8e(uO(a.aa));
      f.push(new vbf(1, !1, g));
      break;
    default:
      var r = a.aa.Ec(12);
      var v = !1 === c && !1 === d;
      for (var w = 0; w < r.length; w++) {
        var y = r[w],
          A = y.Lda() && !0 === c,
          B = 0 != y.Wj() && !0 === d;
        if (v || A || B) {
          if (y instanceof j6e) {
            var C = a,
              J = new kF(),
              M = y.aa;
            for (var T = 0; T < M.length; T++) {
              for (
                var Z = M[T],
                  ba,
                  ha,
                  ra,
                  Aa,
                  Ga,
                  Ca,
                  Ia,
                  Ua,
                  qa,
                  va,
                  Qa,
                  Ba,
                  La,
                  Ra,
                  fb = void 0,
                  hb = C,
                  wb = Z,
                  lb = wb.aa,
                  Yb = wb.ea,
                  nc = wb.ga,
                  vc = 0,
                  Bc = 0 != Yb.length ? Yb[0] : -1,
                  Rd = 0;
                Rd < lb.length;
                Rd = (Rd + 1) | 0
              ) {
                if ((fb = Rd == Bc))
                  (vc = (vc + 1) | 0), (Bc = vc < Yb.length ? Yb[vc] : -1);
                +fb ^ +nc && (lb[Rd] = hb.ia[wb.aa[Rd]]);
              }
              Ra = lb;
              switch (Z.getType()) {
                case 0:
                  J.moveTo(Ra[0], Ra[1]);
                  break;
                case 1:
                  Onc(J, Ra);
                  break;
                case 3:
                  Pnc(J, Ra);
                  break;
                case 5:
                  J.close();
                  break;
                case 2:
                  ba = Rnc(J);
                  ha = ba[0] + (2 * (Ra[0] - ba[0])) / 3;
                  ra = ba[1] + (2 * (Ra[1] - ba[1])) / 3;
                  Aa = Ra[2];
                  Ga = Ra[3];
                  J.WH(
                    ha,
                    ra,
                    ha + (Aa - ba[0]) / 3,
                    ra + (Ga - ba[1]) / 3,
                    Aa,
                    Ga
                  );
                  break;
                case 4:
                  Ca = Math.max(1, Ra[0]);
                  Ia = Math.max(1, Ra[1]);
                  Ua = Ra[2];
                  qa = Ra[3];
                  va = (0.017453292519943295 * -Ua) / 6e4;
                  Qa = (0.017453292519943295 * -qa) / 6e4;
                  Ba = wo(Qa, 0);
                  La = va + Qa;
                  va = Math.atan2(Math.sin(va), (Math.cos(va) * Ia) / Ca);
                  Qa = Math.atan2(Math.sin(La), (Math.cos(La) * Ia) / Ca) - va;
                  wo(Qa, 0) != Ba && (Qa += 6.283185307179586 * Ba);
                  J.pT(
                    Ca,
                    Ia,
                    -va / 0.017453292519943295,
                    -Qa / 0.017453292519943295
                  );
                  break;
                default:
                  throw no("Jq`" + Z.getType()).Ga;
              }
            }
            var ec = J;
          } else {
            for (
              var Mc,
                Ld = a,
                dd = y,
                Zd = new kF(),
                ge = dd.iMa(),
                qe = dd.zna(),
                Rc = dd.tDa(),
                Xe = dd.sDa(),
                Sd = 0,
                ue = 0 != Rc.length ? Rc[0] : -1,
                Ne = [],
                kf = 0;
              kf < qe.length;
              kf = (kf + 1) | 0
            ) {
              if ((Mc = kf == ue))
                (Sd = (Sd + 1) | 0), (ue = Sd < Rc.length ? Rc[Sd] : -1);
              var $d = qe[kf];
              Ne[kf] = +Mc ^ +Xe ? Ld.ia[$d] : $d;
            }
            for (
              var oe = 0, lf = 0, vf = ge.length;
              lf < vf;
              lf = (lf + 2) | 0
            ) {
              var wf = void 0,
                cf = void 0,
                lg = void 0,
                xf = void 0,
                Ye = void 0,
                Nf = void 0,
                Oh = ge[lf],
                Ef = ge[(lf + 1) | 0];
              switch (Oh) {
                case 0:
                  var Tf = Zd,
                    kg = Tf.moveTo,
                    ag = ((wf = oe), (oe = (oe + 1) | 0), wf),
                    tg = Ne[ag],
                    Wc = ((cf = oe), (oe = (oe + 1) | 0), cf);
                  kg.call(Tf, tg, Ne[Wc]);
                  break;
                case 1:
                  var cd = Ne.slice(oe, (oe + Ef) | 0);
                  Onc(Zd, cd);
                  oe = (oe + Ef) | 0;
                  break;
                case 3:
                  var ad = Ne.slice(oe, (oe + Ef) | 0);
                  Pnc(Zd, ad);
                  oe = (oe + Ef) | 0;
                  break;
                case 5:
                  Zd.close();
                  break;
                case 2:
                  for (
                    var Id = 0, Td = (Ef / 4) | 0;
                    Id < Td;
                    Id = (Id + 1) | 0
                  ) {
                    var pe = void 0,
                      Dg = void 0,
                      Yf = void 0,
                      Uf = void 0,
                      Qg = Rnc(Zd),
                      re = Qg[0],
                      hg = ((pe = oe), (oe = (oe + 1) | 0), pe),
                      wi = re + (2 * (Ne[hg] - Qg[0])) / 3,
                      Xh = Qg[1],
                      ah = ((Dg = oe), (oe = (oe + 1) | 0), Dg),
                      Zg = Xh + (2 * (Ne[ah] - Qg[1])) / 3,
                      qh = ((Yf = oe), (oe = (oe + 1) | 0), Yf),
                      Jj = Ne[qh],
                      Lh = ((Uf = oe), (oe = (oe + 1) | 0), Uf),
                      ug = Ne[Lh];
                    Zd.WH(
                      wi,
                      Zg,
                      wi + (Jj - Qg[0]) / 3,
                      Zg + (ug - Qg[1]) / 3,
                      Jj,
                      ug
                    );
                  }
                  break;
                case 4:
                  var Vi = Math,
                    Ph = Vi.max,
                    Ck = ((lg = oe), (oe = (oe + 1) | 0), lg);
                  var Hg = Ph.call(Vi, 1, Ne[Ck]);
                  var Ei = Math,
                    Cj = Ei.max,
                    Tk = ((xf = oe), (oe = (oe + 1) | 0), xf);
                  var Rh = Cj.call(Ei, 1, Ne[Tk]);
                  var Fi = ((Ye = oe), (oe = (oe + 1) | 0), Ye);
                  var sl = Ne[Fi];
                  var tl = ((Nf = oe), (oe = (oe + 1) | 0), Nf);
                  var nl = Ne[tl];
                  var Yl = (0.017453292519943295 * -sl) / 6e4;
                  var Dk = (0.017453292519943295 * -nl) / 6e4;
                  var tm = wo(Dk, 0);
                  var qi = Yl + Dk;
                  Yl = Math.atan2(Math.sin(Yl), (Math.cos(Yl) * Rh) / Hg);
                  Dk = Math.atan2(Math.sin(qi), (Math.cos(qi) * Rh) / Hg) - Yl;
                  wo(Dk, 0) != tm && (Dk += 6.283185307179586 * tm);
                  Zd.pT(
                    Hg,
                    Rh,
                    -Yl / 0.017453292519943295,
                    -Dk / 0.017453292519943295
                  );
                  break;
                default:
                  throw no("Jq`" + Oh).Ga;
              }
            }
            ec = Zd;
          }
          g = ec;
          if (0 < y.tDa().length || y.sDa()) (e = !0), g.transform(a.transform);
          f.push(new vbf(y.Wj(), y.Lda(), g));
        }
      }
  }
  !0 !== c || e || (a.ma = f);
  return f;
}
function Qbf(a, c) {
  c = c ? c : rO(a.aa);
  if (a.ga) return U3e(oO(a.ga, c));
  var d = new Yaf(null, null);
  a = Pbf(a, !1, !1);
  for (var e = 0; e < a.length; e++) {
    var f = a[e].getPath().transform(c),
      g = d;
    f = dbf(f);
    g.aa = g.aa.WW(f.aa);
    g.ea = g.ea.WW(f.ea);
  }
  c = Zaf(d);
  if (!c) throw no("Iq").Ga;
  return c;
}
function Nbf(a) {
  a.la = Zo(a.aa.Ec(8));
  var c = (a.ea = Zo(a.aa.Ec(9)));
  var d = a.aa;
  var e = d.getParent(),
    f = eaf(e) && e.ha ? d.transform : rO(d);
  d = f.ha;
  e = f.ea;
  var g = f.ga;
  f = f.aa;
  d = Math.sqrt((d * d + g * g) / (e * e + f * f));
  (!isNaN(d) && !isFinite(d)) || isNaN(d) || 0 == d
    ? Enc(a.transform, 1, 0, 0, 1, 0, 0)
    : ((a.ea = a.la / d), Enc(a.transform, 1, 0, 0, c / a.ea, 0, 0));
}
function Obf(a, c) {
  var d = a.aa.Ec(10);
  for (var e = 0; e < c.length; e++) {
    var f = c[e],
      g = d[f];
    g = (0, Fbf[g[0]])(
      Rbf(a, g[1], g[2]),
      Rbf(a, g[3], g[4]),
      Rbf(a, g[5], g[6])
    );
    a.ia[f] = g;
  }
}
function Rbf(a, c, d) {
  switch (c) {
    case 0:
      return d;
    case 1:
      return Jbf(a.oa, d);
    case 2:
      return a.ia[d];
    case 3:
      return a.la;
    case 4:
      return a.ea;
    default:
      throw no("Kq`" + c).Ga;
  }
}
function Sbf(a) {
  return new Mbf(a, null, null);
}
function Tbf(a, c, d) {
  var e = null,
    f = null,
    g = null,
    h = uO(c);
  h = 51 == d ? [h[0], h[1]] : [h[2], h[3]];
  rO(c).transform(h, 0, h, 0, 1);
  if ((a = Vaf(a, c, d))) {
    a = Sbf(a);
    c = c.Ec(d).wc();
    d = a.aa.Ec(48);
    var l = [];
    for (var m = 0; m < d.length; m++) {
      var n = a;
      var q = d[m];
      q = [Rbf(n, q[2], q[3]), Rbf(n, q[4], q[5])];
      n.transform.transform(q, 0, q, 0, 1);
      rO(n.aa).transform(q, 0, q, 0, 1);
      l.push(q);
    }
    if (c < l.length) {
      f = l[c];
      e = a.aa.Ec(48);
      g = [];
      for (d = 0; d < e.length; d++)
        (m = a),
          (n = e[d]),
          (l = Inc(rO(m.aa), m.transform)),
          (n = (Rbf(m, n[0], n[1]) / 6e4) * 0.017453292519943295),
          (m = [0, 0, 1, 0]),
          (n = Jnc(n, 0, 0)),
          Y2e(n, l),
          n.transform(m, 0, m, 0, 2),
          g.push(
            e3e(57.29577951308232 * Math.atan2(m[3] - m[1], m[2] - m[0]), 360)
          );
      e = 90 * sx(g[c] / 90);
      g = Qbf(a, null);
    }
  }
  g || (g = [h[0], h[1], h[0], h[1]]);
  return new Saf(f, h, e, g);
}
function Ubf(a) {
  return K(a.getId()) + "-" + a.wc();
}
function Vbf(a, c) {
  c.yR(a);
  a.ga.Pg(c.getId(), c);
  c = sO(c, null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    a.ga.Pg(e.getId(), e);
  }
}
function Wbf(a, c) {
  c = c ? c : [];
  this.aa = {};
  for (var d = 0; d < c.length; d++) {
    var e = c[d],
      f = e.getId();
    fw(this.aa, f, e);
  }
  this.ea = a;
}
G(Wbf, H);
function Xbf(a) {
  v0b();
  ID.call(this);
  this.Ca = !1;
  this.aa = [];
  this.ga = Jv();
  this.ha = Jv();
  this.la = {};
  this.ia = {};
  this.xa = (v8e(), t8e).clone();
  this.qa = u8e.clone();
  this.ea = [];
  this.va = {};
  this.na = new NOc();
  this.ma = new sCc(null, null);
  this.oa = Ybf(this);
  this.Ca = !0 === a;
  this.clear();
}
G(Xbf, ID);
D = Xbf.prototype;
D.hT = function () {
  this.aa = [];
  this.ga = Jv();
  this.ha = Jv();
  this.la = {};
  this.ia = {};
  this.xa = (v8e(), t8e).clone();
  this.qa = u8e.clone();
  this.ea = [];
  this.va = {};
  this.oa = Ybf(this);
  Ou(
    !!this.ga.Oe(this.oa.getId()) && 1 == this.ga.oy(),
    "The object list should only include the notes master."
  );
  var a = new xaf(null, null, null);
  Zbf(this, this.aa, a, null);
  a = new Caf(null);
  Zbf(this, this.ea, a, null);
  a = this.ea[0];
  var c = new Baf(null, null, null);
  Daf(a, c, null);
  this.na.clear();
  this.ma.clear();
};
D.getSize = function () {
  return this.xa.clone();
};
D.setSize = function (a) {
  this.xa = a.clone();
};
D.ce = x(on);
D.FB = function (a) {
  return a in this.va;
};
D.Ec = function (a) {
  var c = this.va[a];
  if (null != c) a = c;
  else {
    c = Jy();
    Q4e();
    if (!L4e) {
      var d = R4e(U4e);
      L4e = d7e(G5e, H5e, d, c);
    }
    a = L4e[a];
  }
  return a;
};
D.setProperty = function (a, c) {
  gw(this.va, a, c);
};
D.JB = function (a) {
  return vO(this.Cg(a));
};
function $bf(a, c) {
  var d = c.aa;
  switch (d) {
    case 0:
      return Cv(a.aa);
    case 1:
      a = a.Cg(c.ea);
      if (!a) throw no("Lq").Ga;
      return Cv(a.ga);
    case 2:
      return Cv(a.ea);
  }
  throw no("Mq`" + d).Ga;
}
D.Kh = function (a) {
  var c = $bf(this, a.aa);
  a = a.Nq();
  return c[a];
};
D.Cg = function (a) {
  Su(
    !this.ha.Cl(a),
    "ID %s refers to a MediaClip, not a DrawingObject: %s",
    a,
    this.ha.Oe(a)
  );
  return this.ga.Cl(a) ? this.ga.Oe(a) : null;
};
D.hH = function (a) {
  a = this.Cg(a);
  Ou(!a || S$e(a), "Call to getGroup for non-group");
  return a;
};
function yO(a, c) {
  if ((a = a.Cg(c)) && !eaf(a)) throw Ep("Oq").Ga;
  return a;
}
function acf(a, c) {
  var d = [];
  for (var e = 0; e < c.length; e++) {
    var f = a.Cg(c[e]);
    f && d.push(f);
  }
  return d;
}
function bcf(a, c) {
  Xu(c, "Cannot get MediaClip with null identifier");
  Su(
    !a.ga.Cl(c),
    "ID %s refers to a DrawingObject, not a MediaClip: %s",
    c,
    a.ga.Oe(c)
  );
  return a.ha.Cl(c) ? a.ha.Oe(c) : null;
}
function ccf(a, c) {
  Uu(
    W(Jy(), "sketchy-emcm"),
    "Cannot add clips with the MediaClip model flag disabled."
  );
  Uu(
    a.ha.DG() || W(Jy(), "sketchy-emmcm"),
    "Cannot add more than one MediaClip to document."
  );
  dcf(a, c.getId());
  a.ha.Pg(c.getId(), c);
}
function dcf(a, c) {
  Su(
    !a.ga.Cl(c),
    "Document already contains DrawingObject with ID %s: %s",
    c,
    a.ga.Oe(c)
  );
  Su(
    !a.ha.Cl(c),
    "Document already contains MediaClip with ID %s: %s",
    c,
    a.ha.Oe(c)
  );
}
function ecf(a, c, d, e) {
  a = a.Cg(c.aa);
  var f = null;
  if (a)
    if ((c = c.Kc()) && Oaf(a)) {
      var g = !!a.aa.Kc(c.aa, c.ea).aa;
      a && (!0 === d || g) && (f = Laf(a, c.aa, c.ea, e, d));
    } else vO(a) && a && (!0 === d || a.aa) && (f = Q9e(a, d, e));
  return f;
}
function Zbf(a, c, d, e) {
  if (a.ga.Cl(d.getId())) throw no("Pq`" + K(d.getId())).Ga;
  null != e ? Yv(c, Zo(e), 0, [d]) : c.push(d);
  aaf(a, sO(d, null));
  d.yR(a);
}
function Ybf(a) {
  var c = new Aaf();
  c.yR(a);
  a.ga.Pg(c.getId(), c);
  return c;
}
function $$e(a, c) {
  a = a.ga.Oe(c);
  return Eaf(a) ? a : null;
}
D.Mt = function () {
  return this.na.Mt();
};
D.VJ = function (a) {
  this.na.VJ(a);
};
D.Fz = function () {
  return this.na.Fz();
};
D.uD = function () {
  return this.na.uD();
};
D.UJ = function (a) {
  this.na.UJ(a);
};
D.remove = function (a) {
  a.Wa().remove(a);
};
function daf(a, c) {
  var d = c.getParent();
  Ou(!eaf(c), "cannot ungroup drawing");
  Lnb(d, "%s has no parent", c.getId());
  for (var e = d.indexOf(c); c.Py(); ) {
    var f = void 0,
      g = c.Fc(0);
    c.removeChild(g);
    var h = d,
      l = g,
      m = ((f = e), (e = (e + 1) | 0), f);
    T$e(h, l);
    l.Sk(h);
    h.ea.splice(m, 0, l);
    Y2e(g.transform, c.transform);
  }
  d = [];
  for (e = 0; e < d.length; e = (e + 1) | 0) T$e(c, d[e]), d[e].Sk(c);
  c.ea = d;
  a.remove(c);
}
function aaf(a, c) {
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    dcf(a, e.getId());
    a.ga.Pg(e.getId(), e);
    e.JB() && (paf(e) ? (fcf(a, e, 51), fcf(a, e, 52)) : gcf(a, e));
  }
}
function caf(a, c) {
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    a.ga.jC(e.getId());
    vO(e) && paf(e) && (hcf(a, e, e.Ec(51)), hcf(a, e, e.Ec(52)));
  }
}
function gcf(a, c) {
  c = icf(a, c);
  for (var d = 0; d < c.length; d++) jcf(a, c[d]);
}
function jcf(a, c) {
  a: {
    var d = new Wbf(a, null);
    Ru(paf(c), "%s should be of type Connector", c);
    a = 153 == c.getType();
    d = [Tbf(d, c, 51), Tbf(d, c, 52)];
    if (null == d[0].ea) {
      var e = Waf(d[0], d[1]);
      d[0] = e;
    }
    null == d[1].ea &&
      (d[0].isConnected()
        ? ((e = Waf(d[1], d[0])), (d[1] = e))
        : ((e = new Saf(d[1].ga, d[1].aa, e3e(d[0].ea + 180, 360), d[1].zn())),
          (d[1] = e)));
    var f = d[0],
      g = d[1];
    e = Taf(f);
    var h = Taf(g);
    d = f.ea;
    if (f.isConnected() != g.isConnected()) {
      var l = f.isConnected() ? f.aa : g.aa,
        m = f.isConnected() ? Taf(f) : Taf(g),
        n = f.isConnected() ? g.aa : f.aa;
      l = [m[0] - l[0] + n[0], m[1] - l[1] + n[1]];
      e = f.isConnected() ? e : l;
      h = g.isConnected() ? h : l;
      f.isConnected() ||
        (d =
          90 *
          sx(
            e3e(57.29577951308232 * Math.atan2(h[1] - e[1], h[0] - e[0]), 360) /
              90
          ));
    }
    a || ((f = e), (g = h), (g[0] = Uaf(f[0], g[0])), (g[1] = Uaf(f[1], g[1])));
    g = uO(c);
    f = [g[0], g[1]];
    g = [g[2], g[3]];
    e = D8e(
      [f[0], f[1], g[0], f[1], g[0], g[1]],
      [e[0], e[1], h[0], e[1], h[0], h[1]]
    );
    a ||
      90 != d % 180 ||
      Inc(
        e,
        D8e(
          [f[0], f[1], g[0], f[1], g[0], g[1]],
          [f[0], f[1], f[0], g[1], g[0], g[1]]
        )
      );
    if (c.getParent() && !I(L$e(c), c)) {
      a = rO(c.getParent());
      d = Knc(a);
      if (!(isFinite(d) && isFinite(a.ia) && isFinite(a.la) && 0 != d)) break a;
      a = rO(c.getParent());
      Y2e(e, jF(a));
    }
    a = r4e(e);
    d = c.transform;
    iO();
    (d.ha == a.ha &&
      d.aa == a.aa &&
      d.ea == a.ea &&
      d.ga == a.ga &&
      r7e(d.ia, a.ia) &&
      r7e(d.la, a.la)) ||
      c.transform.Px(a);
  }
}
D.disconnect = function (a) {
  var c = a.getId(),
    d = icf(this, a);
  for (var e = 0; e < d.length; e++) {
    var f = d[e],
      g = f,
      h = c,
      l = f.Ec(51);
    Sp(l.getId(), h) &&
      ((h = new K5e("", 0)), gw(g.properties, 51, h), hcf(this, g, l));
    g = f;
    l = c;
    f = f.Ec(52);
    Sp(f.getId(), l) &&
      ((l = new K5e("", 0)), gw(g.properties, 52, l), hcf(this, g, f));
  }
  Ru(kv(icf(this, a)), "%s still has connectors.", a);
};
function hcf(a, c, d) {
  Su(
    Pp(d.getId()) || paf(c),
    "%s must be disconnected or %s must be a connector.",
    d,
    c
  );
  var e = d.getId();
  if (e) {
    d = Ubf(d);
    if (d in a.la) {
      var f = a.la[d],
        g = c.getId();
      iw(f, g);
      (a.la[d] && !kw(a.la[d])) || iw(a.la, d);
    }
    e in a.ia && ((a.ia[e] = (a.ia[e] - 1) | 0), 0 == a.ia[e] && iw(a.ia, e));
    jcf(a, c);
  }
}
function fcf(a, c, d) {
  Ru(paf(c), "%s must be a connector.", c);
  var e = c.Ec(d);
  if ((d = e.getId())) {
    var f = Ubf(e);
    e = a.la[f];
    e || ((e = {}), fw(a.la, f, e), (a.ia[d] = d in a.ia ? a.ia[d] : 0));
    f = c.getId();
    fw(e, f, d);
    a.ia[d] = (a.ia[d] + 1) | 0;
    jcf(a, c);
  }
}
function icf(a, c) {
  Nu(!paf(c));
  if (!(c.getId() in a.ia)) return [];
  for (var d = [], e = c.Ec(48), f = 0; f < e.length; f = (f + 1) | 0) {
    var g = Ubf(new K5e(c.getId(), f));
    g = a.la[g] ? a.la[g] : {};
    for (var h in g) (g = a.Cg(h)) && d.push(g);
  }
  return d;
}
D.cH = function () {
  return this.ma.cH();
};
D.yp = function (a) {
  return this.ma.yp(a);
};
D.QM = function (a) {
  this.ma.QM(a);
};
D.fO = function (a) {
  this.ma.fO(a);
};
D.uz = E(308);
D.UD = function (a) {
  return this.ma.UD(a);
};
D.mL = function () {
  return this.ma.mL();
};
D.clone = function () {
  return kcf(this);
};
function kcf(a) {
  var c = new Xbf(a.Ca);
  c.ga = Jv();
  c.ea = [];
  var d = a.ea;
  for (var e = 0; e < d.length; e++) {
    var f = d[e].clone(null);
    Vbf(c, f);
    c.ea.push(f);
  }
  c.aa = [];
  d = a.aa;
  for (e = 0; e < d.length; e++)
    (f = d[e].clone(null)), Vbf(c, f), c.aa.push(f);
  c.oa = a.oa.clone(null);
  Vbf(c, c.oa);
  a.ha.fp(function (l, m) {
    l = new V$e(m.ea);
    Nx(l.ce(), m.ce());
    ccf(c, l);
  });
  d = {};
  for (var g in a.la)
    c.Cg(Epb(Cz(g, "-"), 0)) && fw(d, g, a.la[g] ? lw(a.la[g]) : {});
  c.la = d;
  g = {};
  for (var h in a.ia) c.Cg(h) && (g[h] = a.ia[h]);
  c.ia = g;
  c.xa = a.xa.clone();
  c.qa = a.qa.clone();
  c.va = lw(a.va);
  c.na = a.na.clone();
  c.ma = a.ma.clone();
  return c;
}
D.Za = function (a) {
  return I(this, a) ? !0 : null == a ? !1 : this.jt(w4e(), a);
};
D.jt = function (a, c) {
  a: {
    var d = A8e(a);
    if (I(this, c)) a = !0;
    else if (c instanceof Xbf) {
      if (a instanceof u4e) {
        if (!Rp(this.ha, c.ha)) {
          a = !1;
          break a;
        }
      } else
        Ru(
          this.ha.DG() && c.ha.DG(),
          "Only EqualityIdChecker is supported for non-empty mediaClips timelines. Attempted to use: %s",
          a
        );
      var e = this.va,
        f = c.va;
      if (
        (d =
          xv(this.aa, c.aa, d) &&
          xv(this.ea, c.ea, d) &&
          Mt(this.xa, c.xa) &&
          Mt(this.qa, c.qa) &&
          this.oa.jt(a, c.oa))
      )
        iO(), (d = n7e(a, t7e(e), t7e(f), {}));
      a = d && this.na.Za(c.na) && this.ma.Za(c.ma);
    } else a = !1;
  }
  return a;
};
D.accept = function (a) {
  var c = this.ea;
  for (var d = 0; d < c.length; d++) M$e(c[d], a);
  M$e(this.oa, a);
  c = this.aa;
  for (d = 0; d < c.length; d++) M$e(c[d], a);
  this.ha.fp(u());
};
D.a6 = !0;
function lcf() {
  p4e();
  n0b.call(this, o4e);
  this.ea = null;
}
G(lcf, n0b);
lcf.prototype.ia = function () {
  return Wu(this.ea);
};
lcf.prototype.ma = Jn(vh);
lcf.prototype.ha = function () {
  var a = new lcf(),
    c = this.Jc();
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    o0b(a, e, FD(this, e).clone());
  }
  this.ea && a.ma(this.ea);
  return a;
};
lcf.prototype.la = function () {
  return new Xbf(null);
};
function zO() {
  v9d && qM(v9d);
}
function mcf(a) {
  this.aa = a;
}
G(mcf, H);
mcf.prototype.tb = function (a) {
  return this.ea(a);
};
function ncf(a, c) {
  this.aa = a;
  this.ga = c;
}
G(ncf, mcf);
ncf.prototype.hd = function (a) {
  return new Gy(mxb(this.ga, a[1]));
};
ncf.prototype.ea = function (a) {
  return [this.aa, U2e(this.ga, a.va)];
};
function ocf(a) {
  this.aa = a;
}
G(ocf, mcf);
ocf.prototype.hd = function () {
  return Fy();
};
ocf.prototype.ea = function () {
  return [this.aa];
};
function pcf(a, c) {
  this.aa = a;
  this.ga = c;
}
G(pcf, mcf);
pcf.prototype.hd = function (a) {
  a = this.ga.hd(a[1]);
  return new zvc(a.va);
};
pcf.prototype.ea = function (a) {
  return [this.aa, this.ga.tb(new Gy(a.ea))];
};
function qcf(a, c) {
  this.aa = a;
  this.ga = c;
}
G(qcf, mcf);
qcf.prototype.hd = function (a) {
  return new txb(a[1], a[2], this.ga.hd(a[3]));
};
qcf.prototype.ea = function (a) {
  return [this.aa, a.Df(), a.ha, this.ga.tb(a.ea)];
};
function rcf(a, c) {
  this.aa = a;
  this.ga = c;
}
G(rcf, mcf);
rcf.prototype.hd = function (a) {
  var c = this.ga.hd(a[2]);
  return new Avc(a[1], c.va);
};
rcf.prototype.ea = function (a) {
  return [this.aa, a.Df(), this.ga.tb(new Gy(a.ea))];
};
function scf(a, c) {
  this.la = Vg;
  this.ea = 0;
  this.ha = !1;
  if (0 >= a) throw no("Wa").Ga;
  this.ea = a;
  this.ha = c;
}
G(scf, Iy);
scf.prototype.Df = x(vh);
function tcf(a) {
  this.aa = a;
}
G(tcf, mcf);
tcf.prototype.hd = function (a) {
  return new scf(a[1], a[2]);
};
tcf.prototype.ea = function (a) {
  return [this.aa, a.Df(), a.ha];
};
function ucf(a) {
  this.aa = a;
}
G(ucf, mcf);
ucf.prototype.hd = function (a) {
  return new Gvc(a[1]);
};
ucf.prototype.ea = function (a) {
  return [this.aa, a.gT()];
};
function vcf(a) {
  this.aa = a;
}
G(vcf, mcf);
vcf.prototype.hd = function (a) {
  return new Hvc(a[1]);
};
vcf.prototype.ea = function (a) {
  return [this.aa, a.ea];
};
function wcf(a) {
  this.aa = a;
}
G(wcf, mcf);
wcf.prototype.hd = function (a) {
  return new mvc(a[1]);
};
wcf.prototype.ea = function (a) {
  return [this.aa, a.ea];
};
function xcf(a) {
  this.aa = a;
}
G(xcf, mcf);
xcf.prototype.hd = function (a) {
  a = a[1];
  for (var c = [], d = 0; d < a.length; d = (d + 1) | 0) {
    var e = a[d];
    dv(Dvc, e) && c.push(e);
  }
  a = $z(c);
  return new Evc(a);
};
xcf.prototype.ea = function (a) {
  a = a.Mt();
  a = ew(a);
  zv(a, Zv);
  var c = [];
  for (var d = 0; d < a.length; d++) c.push(sp(a[d]));
  return [this.aa, c];
};
function ycf(a, c) {
  zcf(this, a, c);
}
G(ycf, H);
function zcf(a, c, d) {
  a.aa = Xuc(
    c,
    d,
    new Wuc(function (e, f) {
      return new N2b(e, f);
    })
  );
}
ycf.prototype.hd = function (a) {
  return this.aa.hd(a);
};
ycf.prototype.tb = function (a) {
  return Uuc(this.aa, a);
};
iM(gM(), CWa);
function Acf(a) {
  this.la = a;
}
G(Acf, Iy);
function Bcf(a, c, d, e, f) {
  this.la = a;
  a = v3e(this.Da(), c, d, e, f);
  this.na = a.ga;
  this.Ha = a.aa;
  this.ha = a.ea;
}
G(Bcf, Acf);
Bcf.prototype.ce = x(xb);
Bcf.prototype.Da = function () {
  return function (a) {
    return Q6e(a);
  };
};
function Ccf(a, c, d, e, f, g) {
  Bcf.call(this, a, d, e, f, g);
  for (a = 0; a < c.length; a++) Xu(c[a], I2e);
  this.ea = !0 === g ? c : Cv(c);
}
G(Ccf, Bcf);
function Dcf() {
  this.Da =
    this.xa =
    this.Ca =
    this.Ha =
    this.Ma =
    this.va =
    this.Ea =
    this.ha =
    this.ga =
    this.qa =
      !1;
  this.ia = this.ea = this.aa = !0;
  this.oa = !1;
  this.cells = [];
  this.ma = [];
  this.na = this.PL = null;
  this.Ea = !0;
  this.Da = this.xa = this.Ca = this.Ha = this.Ma = this.va = !1;
  this.la = [];
}
G(Dcf, H);
Dcf.prototype.Ac = function () {
  return Qp([
    this.aa,
    this.ea,
    this.ia,
    this.oa,
    this.qa,
    L(nv(this.cells)),
    L(nv(this.ma)),
    this.ga,
    this.PL,
    this.na,
    this.ha,
    L(nv(this.la)),
  ]);
};
Dcf.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Dcf
    ? this.aa == a.aa &&
      this.ea == a.ea &&
      this.ia == a.ia &&
      this.oa == a.oa &&
      this.qa == a.qa &&
      yv(this.cells, a.cells) &&
      yv(this.ma, a.ma) &&
      this.ga == a.ga &&
      I(this.PL, a.PL) &&
      Ap(this.na, a.na) &&
      this.ha == a.ha &&
      yv(this.la, a.la)
    : !1;
};
function Ecf(a, c) {
  this.la = a;
  this.Ca = Xu(c, "pageId cannot be null.");
}
G(Ecf, Acf);
Ecf.prototype.ea = x(Ta);
function Fcf(a, c, d) {
  Gcf();
  this.la = a;
  this.ea = 0;
  this.Ca = c;
  this.ea = null != d ? Zo(d) : 0;
  Nu(this.ea in Hcf);
}
var Hcf;
G(Fcf, Acf);
Fcf.prototype.wc = x(Ta);
function Gcf() {
  Gcf = u();
  Hcf = $z(d3e(k5e));
}
function Icf(a, c, d, e, f) {
  Gcf();
  Fcf.call(this, j1e, c, d);
  c = e;
  this.na = Xu(a, "id cannot be null.");
  c || (c = {});
  this.ha = !0 === f ? c : w7e(c);
}
G(Icf, Fcf);
D = Icf.prototype;
D.getId = x(lk);
D.ce = x(li);
D.ZJ = function () {
  if (1 == this.ea) {
    var a = this.ha[1];
    return null != a ? a : null;
  }
  return null;
};
D.K6 = E(976);
D.nr = E(987);
function Jcf(a, c, d, e) {
  Kcf();
  this.ea = a;
  this.aa = c;
  this.ha = !0 === e;
  this.ga = d;
}
var Lcf;
G(Jcf, H);
Jcf.prototype.gC = function (a) {
  var c;
  switch (a.getType()) {
    case Vg:
      throw no("nx").Ga;
    case Rl:
      Mcf(this, a.ha(), null, null, null, null, !0, !0);
      Ncf(this, a.ha());
      break;
    case H2e:
      Mcf(this, a.ha(), null, null, null, null, null, null);
      break;
    case s2e:
      var d = !0;
      var e = a.ce();
      var f = Lcf;
      for (c = 0; c < f.length; c++)
        if (f[c] in e) {
          d = !1;
          break;
        }
      e = Ocf(a, 163) || Ocf(a, 164);
      f = Pcf(a.na, a.ce(), a.ha, [165, 163, 164]);
      c = Ocf(a, 166);
      Mcf(this, a.ea, d, f, e, c, null, null);
      break;
    case m1e:
      Mcf(this, a.ha(), null, null, null, null, !0, null);
      break;
    case w1e:
      d = a.getId();
      Qcf(this, d, null, null, null, null, !0, null, null);
      Mcf(this, a.ha(), null, null, null, null, null, null);
      break;
    case x2e:
      a = a.getId();
      Rcf(this, a, null, null, null, null, null, null, null);
      break;
    case v2e:
      d = a.getId();
      Rcf(this, d, !0, null, null, a.ea, null, null, null);
      Ncf(this, [a.getId()]);
      break;
    case V2a:
      d = a.ce();
      d = 169 in d;
      Scf(
        this,
        a.getId(),
        null,
        null,
        null,
        null,
        null,
        !0,
        null,
        null,
        null,
        null,
        null,
        null,
        !0,
        !1,
        d
      );
      a = a.getId();
      Rcf(this, a, null, null, null, null, null, null, null);
      break;
    case s1e:
      Tcf(this, G0e, !0, null, null);
      break;
    case l1e:
      Qcf(
        this,
        a.ea() ? a.ea() : "p",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
      break;
    case j1e:
      d = a.ea;
      e = a.ZJ();
      1 == d && null == e && (e = c7e(1, this.ga));
      Ucf(this, a.getId(), d, e, !0);
      a = a.wc();
      Vcf(this, d, a, null);
      break;
    case F1e:
      d = a.ea;
      f = Ocf(a, 14);
      e = Ocf(a, 2);
      c = Ocf(a, 1);
      e = e || c;
      if (f || e)
        if (
          (Tcf(this, ":guide", null, null, d),
          f && (f = Pcf(a.na, a.ce(), a.ha, [14])),
          f)
        )
          break;
      a = Ox(a.ce(), 9);
      for (f = 0; f < d.length; f++)
        if (
          ((c = d[f]),
          Qcf(this, c, null, null, null, null, null, a, null),
          (c = this.aa.Cg(c)),
          e && eaf(c))
        ) {
          c = faf(c, null);
          for (var g = 0; g < c.length; g++) {
            var h = c[g],
              l = qaf(h);
            Wcf(this, h, l, null, null, null, null, null, null, null, !0);
          }
        }
      break;
    case r1e:
      if (Ocf(a, 4)) {
        Tcf(this, ":guide", null, null, null);
        break;
      }
      Ocf(a, 0) && Tcf(this, G0e, null, null, null);
      break;
    case E1e:
      d = a.aK();
      e = a.qG();
      Vcf(this, a.ea, Math.min(d, e), Math.max(d, e));
      break;
    case cO:
      (d = a.na) && Ucf(this, d, a.ea, a.ZJ(), null);
      d = (a.wc() + 1) | 0;
      Vcf(this, a.ea, d, null);
      break;
    case Cg:
    case VFa:
      Tcf(this, G0e, null, !0, null);
      break;
    case t2e:
      if (Pcf(a.na, a.ce(), a.ea, [49])) {
        Qcf(this, a.getId(), !0, null, null, !0, null, null, !0);
        break;
      }
    case h1e:
    case y1e:
    case q1e:
    case D2e:
      (d = a.Kc())
        ? ((a = a.getId()), Qcf(this, a, !0, [d], null, !0, null, null, null))
        : ((a = a.getId()), Qcf(this, a, !0, null, null, !0, null, null, null));
      break;
    case x1e:
      a = a.getId();
      Qcf(this, a, null, null, null, null, !0, null, null);
      break;
    case bO:
    case aO:
    case $N:
    case ZN:
    case B2e:
    case E2e:
    case F2e:
    case G2e:
    case C1e:
    case z2e:
      a = a.getId();
      Qcf(this, a, null, null, null, null, null, null, null);
      break;
    case f1e:
    case k1e:
    case D1e:
      Tcf(this, ":animation", null, null, [a.ea()]);
      break;
    case H1e:
      Tcf(this, ":animation", null, null, [a.ea()]);
      if ((d = yO(this.aa, a.ea())))
        (d = d.getAnimations()),
          (a = a.wc()),
          (a = d[a]) && Qcf(this, a.aa, null, null, !0, null, null, null, null);
      break;
    case w2e:
      Tcf(this, ":transition", null, null, [a.ea()]);
      break;
    case G1e:
      a = a.getId();
      Qcf(this, a, null, null, null, !0, null, null, null);
      break;
    case i1e:
    case B1e:
    case I1e:
      (a = a.getId()),
        Xcf(
          this,
          ":mediaClip",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          a
        );
  }
};
function Ocf(a, c) {
  return (!!a.ha && c in a.ha) || Ox(a.ce(), c) || dv(a.na, c);
}
function Pcf(a, c, d, e) {
  for (var f in c) if (!dv(e, Number(f))) return !1;
  for (c = 0; c < a.length; c++) if (!dv(e, a[c])) return !1;
  if (d) for (var g in d) if (!dv(e, Number(g))) return !1;
  return !0;
}
function Scf(a, c, d, e, f, g, h, l, m, n, q, r, v, w, y, A, B) {
  var C = !a.ea[c],
    J = a.aa.Cg(c),
    M = J ? J.Kh() : null;
  M = M ? M.getId() : null;
  A = !0 === A && !!J && J.JB() && J.FB(169);
  Xcf(
    a,
    c,
    d,
    e,
    f,
    g,
    h,
    null,
    null,
    null,
    null,
    M || null,
    l,
    m,
    n,
    q,
    r,
    v,
    w,
    !0 === B || A,
    null
  );
  if (C && (c = a.aa.Cg(c)))
    for (
      Kcf(),
        h =
          c instanceof tO
            ? c.qLa()
            : c.Kh() instanceof tO && vO(c) && c.ym()
            ? taf(c, null)
            : [],
        l = 0;
      l < h.length;
      l++
    )
      Wcf(a, h[l], c, d, e, f, g, q, r, v, y);
}
function Qcf(a, c, d, e, f, g, h, l, m) {
  Scf(
    a,
    c,
    d,
    e,
    f,
    g,
    null,
    h,
    l,
    m,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
}
function Ucf(a, c, d, e, f) {
  var g = yO(a.aa, c);
  g = g ? g.Su() : null;
  var h;
  if ((h = !!g))
    (h = new Ycf()),
      M$e(g, h),
      (h = g instanceof Baf ? 0 < h.aa : Eaf(g) ? 0 < h.ea : !1);
  g = (null == f || !f) && h;
  d = new Qaf(d, e);
  Xcf(
    a,
    c,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    d,
    null,
    f,
    null,
    null,
    null,
    null,
    null,
    null,
    g,
    null
  );
}
function Vcf(a, c, d, e) {
  0 == c
    ? ((c = Cv(a.aa.aa)),
      (d = O$e(
        c.slice(
          d,
          ((null == e || 0 == Zo(e) ? (c.length - 1) | 0 : Zo(e)) + 1) | 0
        )
      )),
      Tcf(a, ":page", null, null, d))
    : Tcf(a, ":page", null, null, null);
}
function Xcf(a, c, d, e, f, g, h, l, m, n, q, r, v, w, y, A, B, C, J, M, T) {
  var Z = a.ea[c];
  Z || ((Z = new Dcf()), (Z.va = !0));
  fw(a.ea, c, Z);
  Z.aa = !0 === d && Z.aa;
  Z.ea = !0 === f && Z.ea;
  Z.ia = !0 === g && Z.ia;
  Z.ga = !0 === h || Z.ga;
  null != l && (Z.oa = l);
  null != m && (Z.qa = m);
  if (e) {
    a = {};
    c = Z.cells;
    for (d = 0; d < c.length; d++) a[c[d].toString()] = !0;
    for (c = 0; c < e.length; c++)
      (d = e[c]), d.toString() in a || Z.cells.push(d);
  }
  if (n)
    for (e = Zz(Z.ma), a = 0; a < n.length; a = (a + 1) | 0)
      (c = n[a]), c in e || Z.ma.push(c);
  q && (Z.na = q);
  r && (Z.PL = r);
  !T || mv(Z.la, T) || Z.la.push(T);
  Z.ha = !0 === v || Z.ha;
  Z.Ea = !0 === w && Z.Ea;
  Z.va = !0 === y && Z.va;
  Z.Ma = !0 === A || Z.Ma;
  Z.Ha = !0 === B || Z.Ha;
  Z.Ca = !0 === C || Z.Ca;
  Z.xa = !0 === J || Z.xa;
  Z.Da = !0 === M || Z.Da;
}
function Tcf(a, c, d, e, f) {
  Xcf(
    a,
    c,
    null,
    null,
    null,
    null,
    null,
    d,
    e,
    f,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
}
function Wcf(a, c, d, e, f, g, h, l, m, n, q) {
  var r = !1;
  !0 === q &&
    vO(c) &&
    vO(d) &&
    (r = Zcf(c) && c.ym() && d.ym() && c.getType() == d.getType());
  c = c.getId();
  Scf(a, c, e, f, g, h, !0, null, null, null, l, m, n, r, q, null, null);
}
function Rcf(a, c, d, e, f, g, h, l, m) {
  Scf(
    a,
    c,
    e,
    null,
    null,
    d,
    null,
    null,
    null,
    null,
    f,
    g,
    h,
    null,
    l,
    m,
    null
  );
  if (!a.ha) {
    var n = a.aa.Cg(c);
    if ((n = n ? n.Kh() : null))
      if ((c = n.oa[c]))
        for (n = 0; n < c.length; n++)
          Scf(
            a,
            c[n],
            e,
            null,
            null,
            d,
            null,
            null,
            null,
            null,
            f,
            g,
            h,
            null,
            l,
            m,
            null
          );
  }
}
function Mcf(a, c, d, e, f, g, h, l) {
  for (var m = 0; m < c.length; m++) Rcf(a, c[m], d, e, f, null, g, h, l);
}
function Ncf(a, c) {
  for (var d = 0; d < c.length; d++) {
    var e = a.aa.Cg(c[d]);
    if (e && e.getParent()) {
      var f = L$e(e);
      I(e, f) ||
        ((e = f.getId()), Qcf(a, e, null, null, !0, !0, null, null, null));
    }
  }
}
function Kcf() {
  Kcf = u();
  Lcf = (xO(), ibf).concat(kbf).concat(lbf).concat(jbf).concat(mbf);
}
function $cf(a, c, d, e, f, g) {
  Bcf.call(this, a, c, d, f, g);
  adf(e);
  this.Ea = e;
}
G($cf, Bcf);
$cf.prototype.Ca = E(989);
$cf.prototype.ea = x(kb);
function bdf(a, c, d, e, f) {
  $cf.call(this, l1e, a, c, d, e, f);
  tbf(c);
}
G(bdf, $cf);
bdf.prototype.xa = E(991);
function cdf(a) {
  this.la = a;
}
G(cdf, Acf);
function ddf(a, c, d) {
  edf();
  this.la = m1e;
  this.ea = 0;
  Ou(0 < a.length, e1e);
  fdf(a);
  Nu(c in gdf);
  this.xa = !0 === d ? a : Cv(a);
  this.ea = c;
}
var gdf;
G(ddf, cdf);
ddf.prototype.ha = x(Dn);
ddf.prototype.na = E(995);
function edf() {
  edf = u();
  gdf = $z(d3e(i5e));
}
function hdf(a, c) {
  this.la = Rl;
  Ou(0 < a.length, e1e);
  fdf(a);
  this.ea = !0 === c ? a : Cv(a);
}
G(hdf, cdf);
hdf.prototype.ha = x(vh);
hdf.prototype.na = E(994);
function idf(a, c, d) {
  Bcf.call(this, r1e, a, c, d, !0);
}
function jdf(a) {
  return t7e(a);
}
G(idf, Bcf);
idf.prototype.Da = function () {
  return jdf;
};
function AO(a, c) {
  this.la = a;
  Ou(!Pp(c), "id cannot be empty.");
  this.Ma = c;
}
G(AO, Acf);
AO.prototype.getId = x(Kb);
function kdf(a, c, d, e) {
  this.la = a;
  fdf([d]);
  for (a = 0; a < c.length; a++) Xu(c[a], I2e);
  this.Da = !0 === e ? c : Cv(c);
  this.Ca = d;
}
G(kdf, cdf);
kdf.prototype.ha = x(eb);
kdf.prototype.ea = x(Ta);
function ldf(a, c, d, e, f) {
  kdf.call(this, w1e, c, null != e ? e : "p", f);
  fdf([a]);
  this.xa = a;
  this.Ea = !0 === f ? d : r4e(d);
}
G(ldf, kdf);
function mdf(a, c, d, e) {
  return new ldf(a, c, d, e, null);
}
ldf.prototype.getId = x(Dn);
ldf.prototype.getTransform = x(kb);
ldf.prototype.na = E(993);
function ndf(a, c, d, e, f, g) {
  this.la = a;
  this.Ca = c;
  this.Ea = !0 === g ? d : r4e(d);
  this.Da = !0 === g ? e : Q6e(e);
  this.xa = null == f ? "p" : f;
  fdf([c, this.xa]);
  tbf(e);
}
G(ndf, Acf);
ndf.prototype.getId = x(Ta);
ndf.prototype.getTransform = x(kb);
ndf.prototype.ce = x(eb);
ndf.prototype.ea = x(Dn);
function odf(a, c, d, e, f, g) {
  ndf.call(this, V2a, a, d, e, f ? f : "p", g);
  this.ha = c;
}
G(odf, ndf);
function pdf(a, c, d, e, f, g, h) {
  ndf.call(this, x1e, a, e, f, g, h);
  this.na = !0 === h ? c : ev(c);
  this.ha = !0 === h ? d : ev(d);
}
G(pdf, ndf);
function qdf(a, c, d) {
  Gcf();
  Fcf.call(this, E1e, a, d);
  this.ha = 0;
  Ou(null == d || 1 != Zo(d), "Move layouts is unsupported.");
  this.ha = c;
}
G(qdf, Fcf);
D = qdf.prototype;
D.aK = function () {
  return this.wc();
};
D.qG = x(li);
D.ZJ = z(null);
D.aEa = E(997);
D.nr = E(986);
function rdf(a, c, d, e, f) {
  Ccf.call(
    this,
    F1e,
    !0 === f ? a : Cv(a),
    !0 === f ? c : ev(c),
    !0 === f ? d : w7e(d),
    e,
    !0
  );
}
G(rdf, Ccf);
rdf.prototype.xa = E(999);
function sdf(a, c, d, e, f) {
  tdf();
  AO.call(this, G1e, a);
  this.ea = 0;
  Ou(
    null != d || null != e || !!f,
    "At least one of fill, line or segmentQuery must be present."
  );
  Nu(null == d || Zo(d) in udf);
  this.ea = c;
  this.xa = d;
  this.ha = e;
  this.na = f;
}
var udf;
G(sdf, AO);
sdf.prototype.Wj = x(Dn);
function tdf() {
  tdf = u();
  udf = $z(d3e(g5e));
}
function vdf(a, c) {
  Ecf.call(this, H1e, c);
  this.na = 0;
  wdf([a]);
  this.na = a;
}
G(vdf, Ecf);
vdf.prototype.wc = x(lk);
vdf.prototype.ha = E(1001);
vdf.prototype.nr = E(985);
function xdf(a, c, d, e) {
  Gcf();
  Fcf.call(this, cO, a, c);
  Ou(
    (null == d && (null == c || 1 != Zo(c))) ||
      (null != d && null != c && 1 == Zo(c)),
    "Must specify the Master from which to remove the Layout, else specify null."
  );
  this.xa = null == d ? null : d;
  this.na = null == e ? null : e;
}
G(xdf, Fcf);
function ydf(a, c, d, e) {
  return new xdf(a, c, d, e);
}
xdf.prototype.ZJ = x(Dn);
xdf.prototype.ha = E(1e3);
xdf.prototype.nr = E(984);
function BO(a, c, d) {
  AO.call(this, a, c);
  this.Ha = d;
}
G(BO, AO);
BO.prototype.Kc = x(xb);
function zdf(a, c, d, e, f, g, h, l, m) {
  BO.call(this, t2e, a, c);
  this.ha = this.Ca = 0;
  this.Da = !1;
  Adf(this, d, e, f, g, h, l, m);
}
G(zdf, BO);
function Adf(a, c, d, e, f, g, h, l) {
  Ou(2147483647 > c, U0e);
  a.Ca = c;
  a.ha = d;
  a.xa = kA(a.Ca, (a.ha - 1) | 0);
  c = v3e(
    function (m) {
      return O6e(m);
    },
    e,
    f,
    g,
    l
  );
  a.na = c.ga;
  a.Ea = c.aa;
  a.ea = c.ea;
  a.Da = null != h && h;
  a.Da &&
    Ou(
      !kw(a.Ea) || !cv(a.na) || (!!a.ea && !kw(a.ea)),
      "no properties in a partitioned command"
    );
}
function Bdf(a, c, d, e, f, g, h) {
  return new zdf(a, c, d, e, f, g, h, null, null);
}
zdf.prototype.Sn = function () {
  return Cdf(this);
};
zdf.prototype.ce = x(kb);
function Cdf(a) {
  return Ddf(a, (Edf(), Fdf));
}
function Ddf(a, c) {
  var d = !1;
  for (var e in a.Ea)
    if (e in c) {
      d = !0;
      break;
    }
  e = !1;
  var f = a.na;
  for (var g = 0; g < f.length; g++)
    if (f[g] in c) {
      e = !0;
      break;
    }
  d = !d && !e;
  if (a.ea) {
    e = !1;
    for (var h in a.ea)
      if (h in c) {
        e = !0;
        break;
      }
    d = d && !e;
  }
  return !d;
}
var Gdf = { 45: 12, 35: 0, 42: 4, 34: 5, 36: 1, 41: 6, 156: 56, 63: 2 },
  Hdf,
  Idf,
  Jdf,
  Kdf,
  Fdf;
function Ldf(a) {
  Edf();
  return a in Gdf ? Gdf[a] : null;
}
function Mdf(a) {
  Edf();
  return a in Hdf;
}
function Ndf(a) {
  Edf();
  return Mdf(Number(a));
}
function Odf(a) {
  for (var c = {}, d = 0; d < a.length; d = (d + 1) | 0) c[a[d]] = !0;
  return c;
}
function Edf() {
  Edf = u();
  Hdf = Yz(
    Yz(Yz(Yz(Yz(Yz(Yz(Yz(Yz(Uz(), 45), 35), 42), 34), 36), 41), 156), 63),
    33
  ).ua();
  Idf = Yz(
    Yz(Yz(Yz(Yz(Yz(Yz(Yz(Uz(), 35), 42), 34), 36), 41), 156), 63),
    33
  ).ua();
  Jdf = Odf(x5e);
  Kdf = Odf(y5e);
  Fdf = Odf(A5e);
}
function Pdf(a, c, d, e) {
  AO.call(this, v2e, a);
  this.ea = !1;
  Xu(c, "transform cannot be null.");
  this.ha = !0 === d ? c : r4e(c);
  this.ea = !0 === e;
}
G(Pdf, AO);
Pdf.prototype.getTransform = x(li);
function Qdf(a, c, d, e, f) {
  $cf.call(this, w2e, a, c, d, e, f);
}
function Rdf(a) {
  return u7e(a);
}
G(Qdf, $cf);
Qdf.prototype.xa = E(990);
Qdf.prototype.Da = function () {
  return Rdf;
};
Qdf.prototype.Ca = E(988);
function Sdf(a, c, d, e) {
  Tdf();
  kdf.call(this, H2e, a, d, e);
  this.xa = 0;
  Nu(c in Udf);
  this.xa = c;
}
var Udf;
G(Sdf, kdf);
function Vdf(a, c, d) {
  switch (a.xa) {
    case 0:
      return (c.Yc() - d.length) | 0;
    case 1:
      return 0;
    case 2:
      return (
        (Math.min(c.Yc(), (c.indexOf(d[(d.length - 1) | 0]) + 2) | 0) -
          d.length) |
        0
      );
    default:
      return Math.max(0, (c.indexOf(d[0]) - 1) | 0);
  }
}
Sdf.prototype.na = E(992);
function Tdf() {
  Tdf = u();
  Udf = $z(d3e(j5e));
}
function Ycf() {
  this.aa = this.ea = 0;
}
G(Ycf, H);
D = Ycf.prototype;
D.wQb = function (a) {
  a = Wdf(a);
  this.ea = (this.ea + a.length) | 0;
};
D.xQb = u();
D.vQb = function (a) {
  var c = Wdf(a);
  this.aa = (this.aa + c.length) | 0;
  if ((a = a.Su())) (a = Wdf(a)), (this.aa = (this.aa + a.length) | 0);
};
D.AQb = function (a) {
  Wdf(a);
  var c = a.Su();
  c && Wdf(c);
  (a = Z$e(a, a.m6())) && c && !aq(a.getId(), c.getId()) && Wdf(a);
};
D.yQb = u();
D.uQb = u();
D.zQb = u();
D.BQb = u();
function Wdf(a) {
  var c = a.xa.Cp(),
    d = [];
  for (var e = 0; e < c.length; e++) {
    var f = a.get(c[e]);
    d.push(f);
  }
  a = [];
  for (c = 0; c < d.length; c++)
    (e = d[c]), e.JB() && vO(e) && e.FB(169) && a.push(e);
  return a;
}
D.reset = function () {
  this.aa = this.ea = 0;
};
function Zcf(a) {
  return 3 == a.getType() || a.Ec(86);
}
function adf(a) {
  Ru(null != a && J$e(a), "Invalid id %s", a);
}
function fdf(a) {
  for (var c = 0; c < a.length; c = (c + 1) | 0) adf(a[c]);
}
function wdf(a) {
  for (var c = 0; c < a.length; c = (c + 1) | 0)
    Qu(null != a[c] && 0 <= a[c], "Invalid index: %s", a[c]);
}
function Xdf(a, c, d, e) {
  c in e
    ? Qu(
        !0 === e[a],
        "Cannot set property %s without corresponding HAS property set to true",
        c
      )
    : dv(d, c)
    ? Qu(
        dv(d, a),
        "Cannot remove property %s without also removing the corresponding HAS property",
        c
      )
    : Qu(
        !(a in e) && !dv(d, a),
        "Must set or remove corresponding property when updating property %s",
        a
      );
}
function Ydf(a, c) {
  this.la = z1e;
  this.ea = a;
  this.ha = c;
  this.na = new wO(c.getId(), c.Kc());
}
G(Ydf, Acf);
Ydf.prototype.Sn = function () {
  this.ea.Sn();
  this.ha.Sn();
  return this.ea.Sn();
};
function Zdf(a, c, d, e, f) {
  Ccf.call(this, s2e, a, c, d, e, f);
  Ou(0 < a.length, e1e);
  fdf(a);
  tbf(d);
}
G(Zdf, Ccf);
Zdf.prototype.xa = E(998);
function $df() {
  aef(this);
}
G($df, H);
function aef(a) {
  a.ha = new Xgd(null);
  a.ea = new w3e(function (c, d) {
    return a.ha.aa(c, d);
  });
  a.ga = new w3e(function (c, d) {
    aq(d.getType(), s2e)
      ? ((c = {}), (d = d.ce()[34]) && (c[d] = !0), (d = c))
      : (d = {});
    return d;
  });
}
$df.prototype.aa = function (a, c) {
  var d = this.ea;
  var e = this.ga;
  aq(c.getType(), z1e)
    ? ((e = c.na),
      (a = ecf(a, e, null, null))
        ? (e = d.aa(a, c.ea))
        : ((c = c.ea),
          aq(c.getType(), nj) &&
            c.ga === Ul &&
            ((c = jO()),
            (d = Do("ox")),
            c.log(d, { modelReference: e.toString() }, null)),
          (e = {})))
    : (e = e.aa(a, c));
  return e ? e : {};
};
function bef(a, c, d) {
  this.ga = a;
  this.aa = c;
  this.ea = d;
}
G(bef, H);
bef.prototype.Bg = x(fi);
bef.prototype.Za = function (a) {
  return a instanceof bef
    ? this.ga.Za(a.ga) && this.aa == a.aa && this.ea == a.ea
    : !1;
};
bef.prototype.Ac = function () {
  return Qp([this.ga, this.aa, this.ea]);
};
bef.prototype.toString = function () {
  return DEb(this.ga) + "," + this.aa + "," + this.ea;
};
function cef(a, c) {
  this.aa = a;
  this.ea = c;
}
G(cef, H);
cef.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof cef
    ? yv(this.aa, a.aa) && yv(this.ea, a.ea)
    : !1;
};
cef.prototype.Ac = function () {
  return Qp([L(nv(this.aa)), L(nv(this.ea))]);
};
Kn.Object.defineProperties(cef.prototype, {
  mT: { configurable: !0, enumerable: !0, get: x(Cc) },
  sR: { configurable: !0, enumerable: !0, get: x(vh) },
});
var def;
function eef() {
  eef = u();
  def = new fef();
}
function CO(a, c) {
  this.la = a;
  this.Da = c;
}
G(CO, Iy);
CO.prototype.Zo = x(eb);
function gef(a, c) {
  CO.call(this, a, c);
}
G(gef, CO);
gef.prototype.Jb = z(!0);
gef.prototype.validate = u();
gef.prototype.toString = z("empty");
gef.prototype.Za = function (a) {
  return a instanceof gef && a.Jb();
};
function fef() {
  CO.call(this, L1e, K1e);
}
G(fef, gef);
D = fef.prototype;
D.tlb = function () {
  throw no(fl).Ga;
};
D.wc = function () {
  throw no("qx").Ga;
};
D.AS = function () {
  throw no("rx").Ga;
};
D.MO = E(1006);
D.nr = E(983);
function DO() {}
var hef;
function ief() {
  ief = u();
  hef = [
    Gp(K1e, DO),
    Gp(N1e, DO),
    Gp(A1e, DO),
    Gp(S1e, DO),
    Gp(V1e, DO),
    Gp(Y1e, DO),
    Gp(a2e, DO),
    Gp(d2e, DO),
    Gp(f2e, DO),
    Gp(i2e, DO),
    Gp(l2e, DO),
    Gp(o2e, DO),
  ];
}
var jef;
function kef() {
  kef = u();
  jef = new lef();
}
function lef() {
  CO.call(this, O1e, N1e);
}
G(lef, gef);
lef.prototype.lLa = function () {
  throw no("ux").Ga;
};
lef.prototype.jz = function () {
  throw no("vx").Ga;
};
lef.prototype.rC = function () {
  throw no("wx").Ga;
};
lef.prototype.YDa = E(1008);
function mef() {
  nef();
  CO.call(this, Q1e, A1e);
}
var oef,
  pef = [];
G(mef, gef);
function qef() {
  nef();
  return oef;
}
mef.prototype.ha = function () {
  return pef;
};
function nef() {
  nef = u();
  oef = new mef();
}
var sef;
function tef() {
  tef = u();
  sef = new uef();
}
function vef(a, c) {
  CO.call(this, a, c);
}
G(vef, gef);
vef.prototype.Ln = function () {
  throw no("yx").Ga;
};
vef.prototype.Hd = function () {
  throw no("zx").Ga;
};
vef.prototype.compare = function (a) {
  return a.Jb() ? null : new cef(a.Ln(), []);
};
function uef() {
  CO.call(this, T1e, S1e);
}
G(uef, vef);
var wef;
function xef() {
  xef = u();
  wef = new yef();
}
function yef() {
  CO.call(this, Z1e, Y1e);
}
G(yef, gef);
yef.prototype.ulb = function () {
  throw no("Ax").Ga;
};
yef.prototype.jz = function () {
  throw no("Bx").Ga;
};
yef.prototype.rC = function () {
  throw no("Cx").Ga;
};
yef.prototype.ZDa = E(1010);
var zef;
function Aef() {
  Aef = u();
  zef = new Bef();
}
function Bef() {
  CO.call(this, W1e, V1e);
}
G(Bef, vef);
D = Bef.prototype;
D.AS = function () {
  throw no("Ex").Ga;
};
D.MO = E(1005);
D.jz = function () {
  throw no("Gx").Ga;
};
D.rC = function () {
  throw no("Hx").Ga;
};
D.hXa = function () {
  throw no("Ix").Ga;
};
D.Lyb = function () {
  throw no("Jx").Ga;
};
D.nr = E(982);
var Cef;
function Def() {
  Def = u();
  Cef = new Eef();
}
function Eef() {
  CO.call(this, b2e, a2e);
}
G(Eef, vef);
Eef.prototype.getId = function () {
  throw no("Kx").Ga;
};
var Fef;
function Gef() {
  Gef = u();
  Fef = new Hef();
}
function Hef() {
  CO.call(this, e2e, d2e);
}
G(Hef, gef);
Hef.prototype.Nq = function () {
  throw qo("Call to getPageIndex for an empty playhead selection").Ga;
};
Hef.prototype.rC = function () {
  throw qo("Call to getMasterId for an empty playhead selection").Ga;
};
Hef.prototype.jz = function () {
  throw qo("Call to getPageType for an empty playhead selection").Ga;
};
var Ief;
function Jef() {
  Jef = u();
  Ief = new Kef();
}
function Kef() {
  CO.call(this, g2e, f2e);
}
G(Kef, vef);
var Lef;
function Mef() {
  Mef = u();
  Lef = new Nef();
}
function Nef() {
  CO.call(this, j2e, i2e);
}
G(Nef, vef);
Nef.prototype.getId = function () {
  throw no("Lx").Ga;
};
var Oef;
function Pef() {
  Pef = u();
  Oef = new Qef();
}
function Qef() {
  CO.call(this, m2e, l2e);
}
G(Qef, gef);
Qef.prototype.getId = function () {
  throw no("Mx").Ga;
};
Qef.prototype.wAb = function () {
  throw no("Nx").Ga;
};
Qef.prototype.nzb = function () {
  throw no("Ox").Ga;
};
var Ref;
function Sef() {
  Sef = u();
  Ref = new Tef();
}
function Tef() {
  CO.call(this, p2e, o2e);
}
G(Tef, gef);
D = Tef.prototype;
D.getId = function () {
  throw no("Px").Ga;
};
D.ql = function () {
  throw no("Qx").Ga;
};
D.Eo = function () {
  throw no("Rx").Ga;
};
D.hxa = E(1012);
D.sM = z(!1);
function Uef(a) {
  this.ga = (eef(), def);
  this.ha = (kef(), jef);
  this.ia = qef();
  this.la = (tef(), sef);
  this.na = (Aef(), zef);
  this.ma = (xef(), wef);
  this.oa = (Def(), Cef);
  this.ea = (Gef(), Fef);
  this.qa = (Jef(), Ief);
  this.va = (Mef(), Lef);
  this.xa = (Pef(), Oef);
  this.aa = (Sef(), Ref);
  a &&
    ((this.ga = a.Da),
    (this.ha = a.ha),
    (this.ia = a.gb),
    (this.la = a.Ea),
    (this.na = a.ea),
    (this.ma = a.na),
    (this.oa = a.Ha),
    (this.ea = a.ab),
    (this.qa = a.xa),
    (this.va = a.Ma),
    (this.xa = a.Oa),
    (this.aa = a.qp()));
}
G(Uef, H);
function Vef(a, c) {
  a.ha = c;
  return a;
}
Uef.prototype.ua = function () {
  return new Wef(this);
};
function Wef(a) {
  Xef();
  this.la = J1e;
  this.Da = a.ga;
  this.ha = a.ha;
  this.gb = a.ia;
  this.Ea = a.la;
  this.ea = a.na;
  this.na = a.ma;
  this.Ha = a.oa;
  this.ab = a.ea;
  this.xa = a.qa;
  this.Ma = a.va;
  this.Oa = a.xa;
  this.Ra = a.aa;
  this.Ca = [];
  this.Ca.push(this.Da);
  this.Ca.push(this.ha);
  this.Ca.push(this.gb);
  this.Ca.push(this.Ea);
  this.Ca.push(this.ea);
  this.Ca.push(this.na);
  this.Ca.push(this.Ha);
  this.Ca.push(this.ab);
  this.Ca.push(this.xa);
  this.Ca.push(this.Ma);
  this.Ca.push(this.Oa);
  this.Ca.push(this.Ra);
  a = this.Ca;
  for (var c = 0; c < a.length; c++) a[c].validate(this);
}
var Yef;
G(Wef, lvc);
D = Wef.prototype;
D.sQ = x(gc);
D.qp = function () {
  return this.sQ();
};
D.toString = function () {
  var a = "",
    c = this.Ca;
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    a = K(a) + (K(e.Zo()) + Da + K(e) + "\n");
  }
  return a;
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Wef
    ? this.Da.Za(a.Da) &&
      this.ha.Za(a.ha) &&
      this.Ea.Za(a.Ea) &&
      this.ea.Za(a.ea) &&
      this.na.Za(a.na) &&
      this.Ha.Za(a.Ha) &&
      this.xa.Za(a.xa) &&
      this.Ma.Za(a.Ma) &&
      this.Oa.Za(a.Oa) &&
      this.Ra.Za(a.Ra)
    : !1;
};
D.Rkc = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Wef
    ? this.Za(a) && this.ab.Za(a.ab) && this.gb.Za(a.gb)
    : !1;
};
D.Jb = function () {
  var a = this.Ca;
  for (var c = 0; c < a.length; c++) if (!a[c].Jb()) return !1;
  return !0;
};
function Xef() {
  Xef = u();
  Yef = [
    Gp(K1e, DO),
    Gp(A1e, DO),
    Gp(a2e, DO),
    Gp(f2e, DO),
    Gp(i2e, DO),
    Gp(l2e, DO),
    Gp(o2e, DO),
  ];
}
D.njb = !0;
function Zef(a, c, d) {
  CO.call(this, q2e, o2e);
  this.ha = a;
  this.ea = c;
  this.na = d;
}
G(Zef, CO);
D = Zef.prototype;
D.Jb = z(!1);
D.validate = function (a) {
  if (!a.Da.Jb()) throw no("Ux").Ga;
  if (a.ha.Jb()) throw no("Vx").Ga;
  if (!a.Ea.Jb()) throw Ep("Wx").Ga;
  if (!a.ea.Jb()) throw no("Xx").Ga;
  if (!a.na.Jb()) throw no("Yx").Ga;
  if (!a.Ha.Jb()) throw no("Zx").Ga;
  var c = a.xa;
  if (c.Jb() || 2 < c.Ln().length || !c.Hd(this.getId())) throw no("$x").Ga;
  if (!a.Ma.Jb()) throw no("ay").Ga;
  a = a.Oa;
  if (this.ha.Kc()) {
    if (a.Jb() || !aq(a.getId(), this.getId())) throw no("by").Ga;
  } else if (!a.Jb()) throw no("by").Ga;
};
D.getId = function () {
  return this.ha.aa;
};
D.ql = x(li);
D.Eo = x(vh);
D.hxa = E(1011);
D.toString = function () {
  var a;
  this.ea.Ld
    ? (a = pob(this.ea.aa))
    : 0 == this.ea.qc.getType()
    ? (a = "" + this.ea.qc.aa)
    : (a = this.ea.qc.toString());
  return K(this.ha) + " " + K(a);
};
D.Za = function (a) {
  return I(a, this)
    ? !0
    : a instanceof Zef
    ? this.ha.Za(a.ha) && this.ea.Za(a.ea) && this.na == a.na
    : !1;
};
D.sM = function (a) {
  return this.ha.Za(a);
};
function $ef() {}
G($ef, H);
D = $ef.prototype;
D.dsc = function (a, c) {
  c = new aff().Nj(a).Wl(c).ua();
  a = new auc((bff(), cff));
  duc(a);
  dff(a, c.ea, c.aa, c.ha);
  var d = eff;
  d = {
    "docs-mlti": new ncf(L(d[XCa]).qb(), a),
    "docs-null": new ocf(L(d[ADa]).qb()),
    "docs-replace": new pcf(L(d[Cg]).qb(), a),
    "docs-reverse": new qcf(L(d[UFa]).qb(), a),
    "docs-revert": new rcf(L(d[VFa]).qb(), a),
    "docs-undo": new tcf(L(d[Vg]).qb()),
    "docs-updatemodelversion": new ucf(L(d[DMa]).qb()),
    "docs-updatemodelfeaturebitset": new vcf(L(d[CMa]).qb()),
  };
  for (var e in d) NF(a, e, d[e]);
  e = c.aa;
  d = c.ga;
  c = {
    "sketchy-addAnimation": new fff(e),
    "sketchy-addMediaClip": new gff(e),
    "sketchy-addPage": new hff(e),
    "sketchy-animationProperies": new iff(e),
    "sketchy-background": new jff(e),
    "sketchy-changeShape": new kff(),
    "sketchy-delete": new lff(),
    "sketchy-deleteColumn": new mff(),
    "sketchy-deleteRow": new nff(),
    "sketchy-deleteText": new off(),
    "sketchy-documentProperties": new pff(e),
    "sketchy-documentSize": new qff(),
    "sketchy-group": new rff(e),
    "sketchy-insert": new sff(e),
    "sketchy-insertColumn": new tff(),
    "sketchy-insertRow": new uff(),
    "sketchy-insertTable": new vff(e),
    "sketchy-insertText": new wff(),
    "sketchy-mediaClipProperties": new xff(e),
    "sketchy-mergeCellRange": new yff(),
    "sketchy-moveAnimation": new zff(),
    "sketchy-movePage": new Aff(),
    "sketchy-pageProperties": new Bff(e),
    "sketchy-pathProperties": new Cff(),
    "sketchy-removeAnimation": new Dff(),
    "sketchy-removeMediaClip": new Eff(),
    "sketchy-removePage": new Fff(),
    "sketchy-selection": new Gff(Hff(e), e),
    "sketchy-shapeProperties": new Iff(e),
    "sketchy-styleText": new Jff(e),
    "sketchy-transform": new Kff(e),
    "sketchy-transition": new Lff(e),
    "sketchy-ungroup": new Mff(),
    "sketchy-unmergeCellRange": new Nff(),
    "docs-unsupportedofficefeatures": new xcf(50),
    "docs-officeroundtripdata": new wcf(51),
    "sketchy-updateAltText": new Off(e),
    "sketchy-updateColumnWidths": new Pff(),
    "sketchy-updateRowHeights": new Qff(),
    "sketchy-updateTableBorderStyles": new Rff(e),
    "sketchy-updateTableCellProperties": new Sff(e),
    "sketchy-zOrder": new Tff(),
  };
  if (d) {
    var f = new auc(new Uff());
    Vff(f, e);
    e = new Wff(f, d);
    fw(c, g1e, e);
    fw(c, h1e, e);
    fw(c, p1e, e);
    fw(c, o1e, e);
    fw(c, q1e, e);
    fw(c, y1e, e);
    fw(c, z1e, e);
    fw(c, t2e, e);
    fw(c, u2e, e);
    fw(c, y2e, e);
    fw(c, C2e, e);
    fw(c, D2e, e);
  } else Vff(a, e);
  for (var g in c) NF(a, g, c[g]);
  return a;
};
D.Qqc = function () {
  return new lcf();
};
D.Rqc = function () {
  return new Xff();
};
D.Trc = function (a) {
  return new ycf(new Yff(a), new cnd(a));
};
D.aVc = function (a) {
  H7e = a;
};
D.csc = function () {
  return new $df();
};
function Xff() {}
G(Xff, Wid);
Xff.prototype.ga = function (a, c) {
  c = c.getType();
  Ru(
    th === c,
    "Received invalid model reference %s in EmbeddedDrawingNestedModelProvider",
    c
  );
  Ou(aq(zp(YYb(a)).getType(), c), "Received entity is not an embedded drawing");
};
Xff.prototype.ha = function () {
  return p4e(), o4e;
};
function Yff(a) {
  this.aa = new Gff(Hff(a), a);
}
G(Yff, H);
Yff.prototype.hd = function (a) {
  return this.aa.hd(a);
};
Yff.prototype.tb = function (a) {
  return Zff(this.aa, a);
};
function $ff(a) {
  this.ea = a;
  this.aa = t3e();
  this.ga = t3e();
}
G($ff, H);
$ff.prototype.tb = function (a) {
  return this.aa.get(a.getType()).tb(a);
};
$ff.prototype.hd = function (a) {
  var c = this.ea.getType(a);
  return c === r2e ? null : this.aa.get(c).hd(a);
};
function EO(a, c, d) {
  a.aa.set(c, d);
}
function FO(a, c, d) {
  a.ga.set(c, d);
}
function Hff(a) {
  var c = new ovc(null),
    d = new $ff((agf(), bgf));
  EO(d, M1e, new cgf());
  EO(d, P1e, new dgf());
  EO(d, U1e, new egf());
  EO(d, X1e, new fgf());
  EO(d, $1e, new ggf());
  EO(d, R1e, new hgf());
  W(a, "sketchy-eppss") && EO(d, c2e, new igf());
  EO(d, h2e, new jgf());
  EO(d, k2e, new kgf());
  EO(d, n2e, new lgf());
  EO(d, q2e, new mgf());
  EO(d, L1e, new ngf(1, (eef(), def)));
  EO(d, O1e, new ngf(3, (kef(), jef)));
  EO(d, T1e, new ngf(24, (tef(), sef)));
  EO(d, Q1e, new ngf(20, qef()));
  EO(d, W1e, new ngf(5, (Aef(), zef)));
  EO(d, Z1e, new ngf(7, (xef(), wef)));
  EO(d, b2e, new ngf(17, (Def(), Cef)));
  EO(d, g2e, new ngf(9, (Jef(), Ief)));
  EO(d, j2e, new ngf(11, (Mef(), Lef)));
  EO(d, m2e, new ngf(13, (Pef(), Oef)));
  EO(d, p2e, new ngf(15, (Sef(), Ref)));
  a = new ogf();
  FO(d, M1e, a);
  FO(d, L1e, a);
  a = new pgf();
  FO(d, P1e, a);
  FO(d, O1e, a);
  a = new qgf();
  FO(d, U1e, a);
  FO(d, T1e, a);
  a = new rgf();
  FO(d, X1e, a);
  FO(d, W1e, a);
  a = new sgf();
  FO(d, $1e, a);
  FO(d, Z1e, a);
  c = new tgf(c);
  FO(d, c2e, c);
  FO(d, b2e, c);
  c = new ugf();
  FO(d, R1e, c);
  FO(d, Q1e, c);
  c = new vgf();
  FO(d, "sketchy-selection-playhead-impl", c);
  FO(d, e2e, c);
  c = new wgf();
  FO(d, h2e, c);
  FO(d, g2e, c);
  c = new xgf();
  FO(d, k2e, c);
  FO(d, j2e, c);
  c = new ygf();
  FO(d, n2e, c);
  FO(d, m2e, c);
  c = new zgf(new Cad(null));
  FO(d, q2e, c);
  FO(d, p2e, c);
  return d;
}
function Agf(a, c) {
  CO.call(this, M1e, K1e);
  this.ha = a;
  this.ea = c;
}
G(Agf, CO);
D = Agf.prototype;
D.Jb = z(!1);
D.validate = function (a) {
  if (a.ha.Jb()) throw no("cy").Ga;
  if (!a.Ea.Jb()) throw Ep("dy").Ga;
  if (!a.ea.Jb()) throw no("ey").Ga;
  if (!a.na.Jb()) throw no("fy").Ga;
  if (!a.Ha.Jb()) throw no("gy").Ga;
  if (!a.xa.Jb()) throw no("hy").Ga;
  if (!a.Ma.Jb()) throw no("iy").Ga;
  if (!a.Oa.Jb()) throw no("jy").Ga;
  if (!a.qp().Jb()) throw no("ky").Ga;
};
D.tlb = x(li);
D.wc = x(vh);
D.AS = function () {
  return [this.ea];
};
D.MO = E(1004);
D.toString = function () {
  return K(this.ha) + " " + this.ea;
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Agf
    ? I(this.ha, a.ha) && this.ea == a.ea
    : !1;
};
D.nr = E(981);
function cgf() {}
G(cgf, H);
cgf.prototype.tb = function (a) {
  return [0, a.tlb(), a.wc()];
};
cgf.prototype.hd = function (a) {
  return new Agf(a[1], a[2]);
};
function Bgf(a, c, d, e) {
  CO.call(this, P1e, N1e);
  this.ha = this.ea = 0;
  this.na = !1;
  if ((null == d && 1 == c) || (null != d && 1 != c)) throw no("Eq`" + c).Ga;
  this.ea = a;
  this.ha = c;
  this.xa = d;
  this.na = !0 === e;
}
G(Bgf, CO);
D = Bgf.prototype;
D.Jb = z(!1);
D.validate = function (a) {
  var c = a.na;
  if (!(c.Jb() || (c.jz() == this.jz() && Sp(c.rC(), this.rC()))))
    throw no("my").Ga;
  a = a.ea;
  if (!(a.Jb() || (a.jz() == this.jz() && Sp(a.rC(), this.rC()))))
    throw no("ny").Ga;
};
D.lLa = x(vh);
D.jz = x(li);
D.rC = x(Dn);
D.YDa = E(1007);
D.toString = function () {
  return this.ea + "," + this.ha + "," + K(this.xa) + "," + this.na;
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Bgf
    ? this.ea == a.ea && this.ha == a.ha && I(this.xa, a.xa) && this.na == a.na
    : !1;
};
function dgf() {}
G(dgf, H);
dgf.prototype.tb = function (a) {
  return [2, a.lLa(), a.lLa(), a.jz(), a.rC(), a.na];
};
dgf.prototype.hd = function (a) {
  var c;
  null != a[5] && a[5]
    ? (c = new lef())
    : (c = new Bgf(a[1], a[3], $v(a, 4), null));
  return c;
};
function ngf(a, c) {
  this.JL = a;
  this.aa = c;
}
G(ngf, H);
ngf.prototype.hd = x(Cc);
ngf.prototype.tb = function () {
  return [this.JL];
};
function Cgf(a) {
  CO.call(this, R1e, A1e);
  this.ea = a;
}
G(Cgf, CO);
Cgf.prototype.ha = x(vh);
Cgf.prototype.Jb = function () {
  return kv(this.ea);
};
Cgf.prototype.Za = function (a) {
  return I(a, this)
    ? !0
    : a instanceof Cgf || a instanceof mef
    ? yv(this.ea, a.ha())
    : !1;
};
Cgf.prototype.validate = function (a) {
  a = a.ha;
  if (!this.Jb() && (a.Jb() || 0 != a.jz())) throw Do("oy").Ga;
  a = this.ea;
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (Infinity == d.aa && Infinity != d.ea) throw Do("py").Ga;
    if (Infinity == d.ea && Infinity != d.aa) throw Do("qy").Ga;
    var e = DEb(d.Bg());
    if (e != Qo(No(e))) throw Do("ry").Ga;
    if (Infinity != d.aa) {
      if (d.aa != Qo(No(d.aa))) throw Do("sy").Ga;
      if (d.ea != Qo(No(d.ea))) throw Do("ty").Ga;
    }
  }
};
function hgf() {}
G(hgf, H);
hgf.prototype.tb = function (a) {
  a = a.ha();
  var c = [],
    d = a[0];
  c.push(DEb(d.Bg()));
  Dgf(c, d.aa, 0);
  Dgf(c, d.ea, 0);
  d = [];
  for (var e = 1; e < a.length; e = (e + 1) | 0) {
    var f = a[e],
      g = a[(e - 1) | 0],
      h = [];
    h.push(Qo(No(BDb(o3e(g.Bg(), f.Bg())))));
    Dgf(h, f.aa, g.aa);
    Dgf(h, f.ea, g.ea);
    d.push(h);
  }
  c.push(d);
  return [23, c];
};
hgf.prototype.hd = function (a) {
  var c = a[1];
  a = [];
  var d = p3e(c[0]),
    e = Egf(c, 1),
    f = Egf(c, 2);
  a.push(new bef(d, e, f));
  c = c[3];
  for (var g = 0; g < c.length; g = (g + 1) | 0) {
    var h = c[g],
      l = d,
      m = n3e(h[0]);
    CEb();
    d = l.getSeconds() + m.getSeconds();
    l = (l.aa + m.aa) | 0;
    BEb.contains(L(l)) || ((d += (l / 1e9) | 0), (l = l % 1e9 | 0));
    0 > l && ((l = (l + 1e9) | 0), --d);
    d = new tDb(d, l);
    e = (Infinity != e ? e : 0) + Egf(h, 1);
    f = (Infinity != f ? f : 0) + Egf(h, 2);
    a.push(new bef(d, e, f));
  }
  return new Cgf(a);
};
function Dgf(a, c, d) {
  Infinity == c
    ? a.push("inf")
    : Infinity == d
    ? a.push(c)
    : a.push(Qo(No(c - d)));
}
function Egf(a, c) {
  return jv(a[c]) === bm && "inf" === a[c] ? Infinity : a[c];
}
function GO(a, c, d, e) {
  CO.call(this, a, c);
  if (kv(d)) throw no("uy").Ga;
  this.Ca = Cv(d);
  this.xa = Iv(e);
  Fv.prototype.bka.call(this.xa, d);
}
G(GO, CO);
D = GO.prototype;
D.Jb = z(!1);
D.Ln = function () {
  return Cv(this.Ca);
};
D.Hd = function (a) {
  return Gv(this.xa, a);
};
D.compare = function (a) {
  if (a.Jb()) return new cef([], this.Ln());
  var c = [],
    d = this.Ca;
  for (var e = 0; e < d.length; e++) {
    var f = d[e];
    a.Hd(f) || c.push(f);
  }
  d = [];
  a = a.Ln();
  for (e = 0; e < a.length; e++) (f = a[e]), this.Hd(f) || d.push(f);
  return kv(d) && kv(c) ? null : new cef(d, c);
};
D.toString = function () {
  return this.Ln().join(",");
};
D.Za = function (a) {
  return I(a, this) ? !0 : a instanceof GO && Rp(this.xa, a.xa);
};
function Fgf(a) {
  GO.call(this, U1e, S1e, a, (Bv(), xob));
}
G(Fgf, GO);
Fgf.prototype.validate = function (a) {
  Ou(
    a.ea.Jb(),
    "The page selection is inconsistent with the media clip selection."
  );
  Ou(
    a.xa.Jb(),
    "The shape selection is inconsistent with the media clip selection."
  );
  Ou(
    a.Da.Jb(),
    "The animation selection is inconsistent with the media clip selection."
  );
  Ou(
    a.na.Jb(),
    "The page cursor selection is inconsistent with the media clip selection."
  );
  Ou(
    a.Ha.Jb(),
    "The path point selection is inconsistent with the media clip selection."
  );
  Ou(
    a.Ma.Jb(),
    "The table border selection is inconsistent with the media clip selection."
  );
  Ou(
    a.Oa.Jb(),
    "The table cell selection is inconsistent with the media clip selection."
  );
  Ou(
    a.qp().Jb(),
    "The text selection is inconsistent with the media clip selection."
  );
};
function egf() {}
G(egf, H);
egf.prototype.tb = function (a) {
  return [25, a.Ln()];
};
egf.prototype.hd = function (a) {
  return new Fgf(a[1]);
};
function Ggf(a, c, d) {
  CO.call(this, $1e, Y1e);
  this.na = a;
  this.ha = c;
  this.ea = d;
}
G(Ggf, CO);
D = Ggf.prototype;
D.Jb = z(!1);
D.validate = function (a) {
  if (!a.Da.Jb()) throw no("vy").Ga;
  var c = a.ha;
  if (!(c.Jb() || (c.jz() == this.jz() && Sp(c.rC(), this.rC()))))
    throw no("wy").Ga;
  if (!a.Ea.Jb()) throw Ep("xy").Ga;
  if (!a.ea.Jb()) throw no("yy").Ga;
  if (!a.Ha.Jb()) throw no("zy").Ga;
  if (!a.xa.Jb()) throw no("Ay").Ga;
  if (!a.Ma.Jb()) throw no("By").Ga;
  if (!a.Oa.Jb()) throw no("Cy").Ga;
  if (!a.qp().Jb()) throw no("Dy").Ga;
};
D.ulb = x(lk);
D.jz = x(li);
D.rC = x(vh);
D.ZDa = E(1009);
D.toString = function () {
  return this.na + "," + this.ha + "," + K(this.ea);
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Ggf
    ? this.na == a.na && this.ha == a.ha && I(this.ea, a.ea)
    : !1;
};
function ggf() {}
G(ggf, H);
ggf.prototype.tb = function (a) {
  return [6, a.ulb(), a.jz(), a.rC()];
};
ggf.prototype.hd = function (a) {
  return new Ggf(a[1], a[2], $v(a, 3));
};
function Hgf(a, c, d, e) {
  GO.call(this, X1e, V1e, a, (Bv(), yob));
  this.ha = this.ea = 0;
  if ((null == d && 1 == c) || (null != d && 1 != c)) throw no("Eq`" + c).Ga;
  if (null != e && !mv(a, Dv(e))) throw no("Ey").Ga;
  this.ea = c;
  this.na = d;
  this.ha = null != e ? Ev(e) : Zo(a[0]);
}
G(Hgf, GO);
D = Hgf.prototype;
D.validate = function (a) {
  if (!a.Da.Jb()) throw no("Fy").Ga;
  var c = a.ha;
  if (!(c.Jb() || (c.jz() == this.jz() && Sp(c.rC(), this.rC()))))
    throw no("Gy").Ga;
  if (!a.Ea.Jb()) throw Ep("Hy").Ga;
  if (!a.na.Jb()) throw no("Iy").Ga;
  if (!a.Ha.Jb()) throw no("Jy").Ga;
  if (!a.xa.Jb()) throw no("Ky").Ga;
  if (!a.Ma.Jb()) throw no("Ly").Ga;
  if (!a.Oa.Jb()) throw no("My").Ga;
  if (!a.qp().Jb()) throw no("Ny").Ga;
};
D.AS = function () {
  var a = this.Ln(),
    c = [];
  for (var d = 0; d < a.length; d++) c.push(Zo(a[d]));
  return c;
};
D.MO = E(1003);
D.jz = x(vh);
D.rC = x(lk);
D.hXa = function () {
  return new Qaf(this.ea, this.na);
};
D.Lyb = x(li);
D.compare = function (a) {
  return a.Jb() || this.jz() == a.jz()
    ? GO.prototype.compare.call(this, a)
    : new cef(a.Ln(), this.Ln());
};
D.toString = function () {
  return (
    "[" +
    K(GO.prototype.toString.call(this)) +
    "]," +
    this.ea +
    "," +
    K(this.na) +
    "," +
    this.ha
  );
};
D.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof Hgf
    ? GO.prototype.Za.call(this, a) &&
      yv(this.Ln(), a.Ln()) &&
      this.ea == a.ea &&
      I(this.na, a.na) &&
      this.ha == a.ha
    : !1;
};
D.nr = E(980);
function fgf() {}
G(fgf, H);
fgf.prototype.tb = function (a) {
  return [4, a.Ln(), a.jz(), a.rC(), a.Lyb()];
};
fgf.prototype.hd = function (a) {
  return new Hgf(a[1], a[2], $v(a, 3), 4 < a.length ? L(a[4]) : null);
};
function Igf(a, c) {
  GO.call(this, c2e, a2e, c, Bob());
  this.ea = a;
}
G(Igf, GO);
Igf.prototype.getId = x(vh);
Igf.prototype.toString = function () {
  return K(this.ea) + " " + K(this.Ln().join(" "));
};
Igf.prototype.Za = function (a) {
  return I(a, this)
    ? !0
    : a instanceof Igf
    ? I(this.ea, a.ea) && GO.prototype.Za.call(this, a)
    : !1;
};
Igf.prototype.validate = function (a) {
  if (!a.Da.Jb()) throw no("Oy").Ga;
  if (a.ha.Jb()) throw no("Py").Ga;
  if (!a.Ea.Jb()) throw Ep("Qy").Ga;
  if (!a.ea.Jb()) throw no("Ry").Ga;
  if (!a.na.Jb()) throw no("Sy").Ga;
  var c = a.xa;
  if (c.Jb() || 2 < c.Ln().length || !c.Hd(this.ea)) throw no("Ty").Ga;
  if (!a.Ma.Jb()) throw no("Uy").Ga;
  if (!a.Oa.Jb()) throw no("Vy").Ga;
  if (!a.qp().Jb()) throw no("Wy").Ga;
};
function igf() {}
G(igf, H);
igf.prototype.tb = function (a) {
  var c = [],
    d = a.Ln();
  for (var e = 0; e < d.length; e++) {
    var f = d[e];
    c.push([f.aa, f.ga, f.ea]);
  }
  return [19, a.getId(), c];
};
igf.prototype.hd = function (a) {
  for (var c = a[2], d = [], e = 0; e < c.length; e = (e + 1) | 0) {
    var f = c[e];
    d.push(new X5e(f[0], f[1], f[2]));
  }
  return new Igf(a[1], d);
};
var bgf;
function agf() {
  agf = u();
  bgf = new Jgf();
}
function Jgf() {}
var Kgf = {
  0: M1e,
  1: L1e,
  2: P1e,
  3: O1e,
  25: U1e,
  24: T1e,
  23: R1e,
  20: Q1e,
  4: X1e,
  5: W1e,
  6: $1e,
  7: Z1e,
  19: c2e,
  17: b2e,
  8: h2e,
  9: g2e,
  10: k2e,
  11: j2e,
  12: n2e,
  13: m2e,
  16: q2e,
  15: p2e,
};
G(Jgf, H);
Jgf.prototype.getType = function (a) {
  a = Kgf[a[0]];
  return null != a ? a : r2e;
};
function Lgf(a) {
  GO.call(this, h2e, f2e, a, (Bv(), xob));
}
G(Lgf, GO);
Lgf.prototype.validate = function (a) {
  if (!a.Da.Jb()) throw no("Xy").Ga;
  if (a.ha.Jb()) throw no("Yy").Ga;
  if (!a.ea.Jb()) throw no("$y").Ga;
  if (!a.Ea.Jb()) throw Ep("Zy").Ga;
  if (!a.na.Jb()) throw no("az").Ga;
  var c = a.Ha;
  if (!c.Jb() && (2 < this.Ln().length || !this.Hd(c.getId())))
    throw no("bz").Ga;
  c = a.Ma;
  if (!c.Jb()) {
    var d = this.Ln();
    if (1 < d.length || !aq(d[0], c.getId())) throw no("cz").Ga;
  }
  c = a.Oa;
  if (!c.Jb() && ((d = this.Ln()), 1 < d.length || !aq(d[0], c.getId())))
    throw no("dz").Ga;
  a = a.qp();
  if (!a.Jb() && (2 < this.Ln().length || !this.Hd(a.getId())))
    throw no("ez").Ga;
};
function jgf() {}
G(jgf, H);
jgf.prototype.tb = function (a) {
  return [8, a.Ln()];
};
jgf.prototype.hd = function (a) {
  return new Lgf(a[1]);
};
function Mgf(a, c) {
  GO.call(this, k2e, i2e, c, Bob());
  this.ea = a;
}
G(Mgf, GO);
Mgf.prototype.validate = function (a) {
  if (!a.Da.Jb()) throw no("fz").Ga;
  if (a.ha.Jb()) throw no("gz").Ga;
  if (!a.Ea.Jb()) throw Ep("hz").Ga;
  if (!a.ea.Jb()) throw no("iz").Ga;
  if (!a.na.Jb()) throw no("jz").Ga;
  if (!a.Ha.Jb()) throw no("kz").Ga;
  var c = a.xa,
    d;
  (d = c.Jb() || 1 < c.Ln().length) ||
    ((d = this.getId()), (c = c.Ln()[0]), (d = !I(d, c)));
  if (d) throw no("lz").Ga;
  if (!a.Oa.Jb()) throw no("mz").Ga;
  if (!a.qp().Jb()) throw no("nz").Ga;
};
Mgf.prototype.getId = x(vh);
Mgf.prototype.toString = function () {
  return K(this.ea) + " " + K(this.Ln().join(" "));
};
Mgf.prototype.Za = function (a) {
  return I(a, this)
    ? !0
    : a instanceof Mgf
    ? I(this.ea, a.ea) && GO.prototype.Za.call(this, a)
    : !1;
};
function kgf() {}
G(kgf, H);
kgf.prototype.tb = function (a) {
  var c = a.Ln(),
    d = [];
  for (var e = 0; e < c.length; e++) {
    var f = c[e];
    d.push([f.ea, f.aa, f.ga]);
  }
  return [10, a.getId(), d];
};
kgf.prototype.hd = function (a) {
  for (var c = a[2], d = [], e = 0; e < c.length; e = (e + 1) | 0) {
    var f = c[e];
    f = new J2e(f[0], f[1], f[2]);
    d.push(f);
  }
  return new Mgf(a[1], d);
};
function Ngf(a, c, d) {
  CO.call(this, n2e, l2e);
  this.na = a;
  this.ha = c;
  this.ea = d;
}
G(Ngf, CO);
D = Ngf.prototype;
D.Jb = z(!1);
D.validate = function (a) {
  if (!a.Da.Jb()) throw no("oz").Ga;
  if (a.ha.Jb()) throw no("pz").Ga;
  if (!a.Ea.Jb()) throw Ep("qz").Ga;
  if (!a.ea.Jb()) throw no("rz").Ga;
  if (!a.na.Jb()) throw no("sz").Ga;
  if (!a.Ha.Jb()) throw no("tz").Ga;
  var c = a.xa,
    d;
  (d = c.Jb() || 1 < c.Ln().length) ||
    ((d = this.getId()), (c = c.Ln()[0]), (d = !I(d, c)));
  if (d) throw no("uz").Ga;
  if (!a.Ma.Jb()) throw no("vz").Ga;
  a = a.qp();
  if (!a.Jb() && !aq(this.getId(), a.getId())) throw no("wz").Ga;
};
D.getId = x(lk);
D.wAb = x(li);
D.nzb = x(vh);
D.toString = function () {
  return K(this.na) + " " + K(this.ha) + " " + K(this.ea);
};
D.Za = function (a) {
  return I(a, this)
    ? !0
    : a instanceof Ngf
    ? I(this.na, a.na) && this.ha.Za(a.ha) && this.ea.Za(a.ea)
    : !1;
};
function lgf() {}
G(lgf, H);
lgf.prototype.tb = function (a) {
  return [12, a.getId(), m6e(a.wAb()), m6e(a.nzb())];
};
lgf.prototype.hd = function (a) {
  var c = n6e(a[2]),
    d = n6e(a[3]);
  return new Ngf(a[1], c, d);
};
function mgf() {}
G(mgf, H);
mgf.prototype.tb = function (a) {
  var c = a.ql(),
    d = a.Eo();
  a = Ogf(d.qc);
  d = d.aa;
  var e = [];
  for (var f = 0; f < d.length; f++) {
    var g = d[f];
    e.push([d8e(g.start), d8e(g.end)]);
  }
  return [16, c.aa, m6e(c.Kc()), a, e];
};
function Ogf(a) {
  switch (a.getType()) {
    case 0:
      return [0, d8e(a.aa), a.ea ? 1 : 0, a.ha ? 1 : 0];
    case 2:
      return [2, d8e(a.ga)];
    case 3:
      return [3, a.ha, a.ea, d8e(a.ia)];
    case 6:
      return [6, a.getId()];
    default:
      throw no("xz`" + a.getType()).Ga;
  }
}
mgf.prototype.hd = function (a) {
  for (var c = a[4], d = [], e = 0; e < c.length; e = (e + 1) | 0) {
    var f = c[e];
    f = new ux(c8e(f[0]), c8e(f[1]));
    d.push(f);
  }
  Nu(jv(a[3]) === Zc);
  c = Pgf(a[3]);
  d = 0 == c.getType() ? W2b(c, d) : VD(c);
  return new Zef(new wO(a[1], n6e($v(a, 2))), d, !1);
};
function Pgf(a) {
  var c = a[0];
  a = a.slice(1, a.length);
  switch (c) {
    case 0:
      c = a[1];
      var d = 1 == a[2];
      return new KD(c8e(a[0]), 1 == c, d);
    case 2:
      return new MH(c8e(a[0]));
    case 3:
      return new NH(a[0], a[1], c8e(a[2]));
    case 6:
      return new OD(a[0]);
    default:
      throw no("Mt`" + c).Ga;
  }
}
function Qgf(a) {
  Zz(a);
}
G(Qgf, H);
function ogf() {
  Zz([f1e, D1e, Rl, H1e, cO]);
}
G(ogf, Qgf);
function Rgf() {
  Zz(Sgf);
}
var Sgf = [j1e, E1e, cO];
G(Rgf, Qgf);
function pgf() {
  Zz(Sgf);
}
G(pgf, Rgf);
function ugf() {
  Zz([cO]);
}
G(ugf, Qgf);
function Tgf(a) {
  this.la = I1e;
  adf(a);
  this.ea = a;
}
G(Tgf, Acf);
Tgf.prototype.getId = x(vh);
Tgf.prototype.hb = !0;
function qgf() {
  Zz([I1e]);
}
G(qgf, Qgf);
function sgf() {
  Zz(Sgf);
}
G(sgf, Rgf);
function rgf() {
  Zz(Sgf);
}
G(rgf, Rgf);
function Ugf(a) {
  Zz(a);
  mv(a, Rl);
}
G(Ugf, Qgf);
function tgf() {
  Vgf();
  Ugf.call(this, [Rl, G1e, s2e]);
}
G(tgf, Ugf);
function Vgf() {
  Vgf = u();
  new c6e(0, [0, 0], [], !1);
}
function vgf() {
  Zz(Sgf);
}
G(vgf, Rgf);
function Wgf(a) {
  AO.call(this, x2e, a);
}
G(Wgf, AO);
function wgf() {
  Zz([Rl, w1e, cO, x2e]);
}
G(wgf, Qgf);
function Xgf(a, c) {
  AO.call(this, a, c);
}
G(Xgf, AO);
function Ygf(a, c, d) {
  AO.call(this, a, c);
  if (0 == d.qf() && 0 == d.Kf()) throw no("zz").Ga;
  this.ea = Xu(d, "tableRange cannot be null.");
}
G(Ygf, Xgf);
function Zgf(a, c) {
  Ygf.call(this, C1e, a, c);
  Ou(
    2 <= fWb(c).length,
    "The table range must contain at least two cells to merge."
  );
}
G(Zgf, Ygf);
function $gf(a, c, d) {
  AO.call(this, a, c);
  this.ea = 0;
  Qu(0 <= d, "Invalid deletion index %s", d);
  this.ea = d;
}
G($gf, Xgf);
function ahf(a, c) {
  $gf.call(this, ZN, a, c);
}
G(ahf, $gf);
function bhf(a, c) {
  $gf.call(this, $N, a, c);
}
G(bhf, $gf);
function chf(a, c, d) {
  AO.call(this, a, c);
  this.ea = 0;
  Qu(0 <= d, "Invalid insertion index %s", d);
  this.ea = d;
}
G(chf, Xgf);
function dhf(a, c) {
  chf.call(this, aO, a, c);
}
G(dhf, chf);
function ehf(a, c) {
  chf.call(this, bO, a, c);
}
G(ehf, chf);
function xgf() {
  Ugf.call(this, [Rl, ZN, $N, aO, bO, C1e, cO]);
}
G(xgf, Ugf);
function ygf() {
  Ugf.call(this, [Rl, ZN, $N, aO, bO, cO]);
}
G(ygf, Ugf);
function zgf() {
  Ugf.call(this, [Rl, ZN, $N, aO, bO, z1e, C1e, cO]);
}
G(zgf, Ugf);
function Gff(a, c) {
  this.aa = a;
  this.ea = c;
}
G(Gff, H);
function Zff(a, c) {
  if (c.ha.Jb() && !c.ea.Jb()) {
    var d = c.ea,
      e = d.Ln();
    e = Zo(e[(e.length - 1) | 0]);
    d = d.hXa();
    d = new Bgf(e, d.aa, d.ea, !0);
    c = Vef(new Uef(c), d).ua();
  }
  d = T2e(
    T2e(
      T2e(
        T2e(
          T2e(
            T2e(
              T2e(
                T2e(T2e(cub(bub(), 46), a.aa.tb(c.Da)), a.aa.tb(c.ha)),
                a.aa.tb(c.ea)
              ),
              a.aa.tb(c.na)
            ),
            a.aa.tb(c.xa)
          ),
          a.aa.tb(c.Ma)
        ),
        a.aa.tb(c.Oa)
      ),
      a.aa.tb(c.qp())
    ),
    a.aa.tb(c.gb)
  );
  W(a.ea, "sketchy-emcss") &&
    (T2e(d, a.aa.tb(c.Ea)), W(a.ea, "sketchy-eppss") && T2e(d, a.aa.tb(c.Ha)));
  return d.ua();
}
Gff.prototype.hd = function (a) {
  for (var c = new Uef(null), d = 1; d < a.length; d = (d + 1) | 0) {
    var e = this.aa.hd(a[d]);
    if (e) {
      var f = void 0,
        g = c;
      a: {
        var h = e.Zo();
        ief();
        for (var l = 0; l < hef.length; l = (l + 1) | 0) {
          var m = Ip(hef[l]);
          if (I(m, h)) {
            h = m;
            break a;
          }
        }
        throw Ep("tx`" + K(h)).Ga;
      }
      switch (((f = h), f)) {
        case K1e:
          g.ga = e;
          break;
        case N1e:
          g.ha = e;
          break;
        case A1e:
          g.ia = e;
          break;
        case S1e:
          g.la = e;
          break;
        case V1e:
          g.na = e;
          break;
        case Y1e:
          g.ma = e;
          break;
        case a2e:
          g.oa = e;
          break;
        case d2e:
          g.ea = e;
          break;
        case f2e:
          g.qa = e;
          break;
        case i2e:
          g.va = e;
          break;
        case l2e:
          g.xa = e;
          break;
        case o2e:
          g.aa = e;
          break;
        default:
          throw no("Tx`" + K(e.Zo())).Ga;
      }
    }
  }
  return c.ua();
};
Gff.prototype.tb = function (a) {
  return Zff(this, a);
};
function HO(a) {
  this.ea = a;
}
G(HO, KF);
HO.prototype.la = function (a, c, d) {
  return fhf(a, c, d, this.ea);
};
HO.prototype.ga = function (a, c, d) {
  return this.la(a, c, d);
};
function ghf(a) {
  this.ea = a;
}
G(ghf, HO);
ghf.prototype.aa = function (a, c) {
  var d = yO(c, a.ea());
  if (d) {
    c = c.Cg(a.ha);
    Ou(
      !c || c.getParent().Za(c.Kh()),
      "Cannot add animation to grouped object."
    );
    c = new E7e(a.ha);
    var e = c.ce(),
      f = a.ce();
    hhf(e, f, null, null, null);
    Ou(
      0 <= a.wc() && a.wc() <= d.getAnimations().length,
      "Index out of bounds"
    );
    d = d.getAnimations();
    a = a.wc();
    Yv(d, a, 0, [c]);
    a = !1;
  } else a = !0;
  return a;
};
function hhf(a, c, d, e, f) {
  for (var g in c) {
    var h = Number(g);
    gw(a, h, c[h]);
  }
  if (d) for (c = 0; c < d.length; c++) jw(a, d[c]);
  if (e)
    for (var l in e) (d = Number(l)), (c = f.apply(e[d], a[d])), gw(a, d, c);
}
function ihf(a, c, d, e, f) {
  for (var g in c) {
    var h = Number(g);
    a.setProperty(h, c[h]);
  }
  if (d)
    for (c = 0; c < d.length; c++)
      (g = a), (h = d[c]), jw(g.la, h), 0 == h && (g.qa = null);
  if (e)
    for (var l in e)
      (d = Number(l)),
        a.setProperty(d, f.apply(e[l], a.FB(d) ? a.Ec(d) : null));
}
function fhf(a, c, d, e) {
  if (d) return new jhf({});
  d = {};
  new Jcf(d, c, e, null).gC(a);
  return new jhf(d);
}
function jhf(a) {
  this.aa = a;
}
G(jhf, H);
function khf(a, c, d, e, f) {
  Ecf.call(this, f1e, e);
  this.na = 0;
  wdf([c]);
  Xdf(6, 7, [], d);
  this.ha = Xu(a, "targetId cannot be null.");
  this.na = c;
  this.xa = !0 === f ? d : v7e(d);
}
G(khf, Ecf);
khf.prototype.wc = x(lk);
khf.prototype.ce = x(Dn);
khf.prototype.K6 = E(975);
khf.prototype.nr = E(979);
function lhf(a) {
  this.ea = a;
}
G(lhf, HO);
lhf.prototype.aa = function (a, c) {
  var d = new V$e(a.getId()),
    e = d.ce();
  a = a.ce();
  hhf(e, a, null, null, null);
  W$e(d);
  ccf(c, d);
  return !1;
};
function mhf(a, c, d) {
  this.la = i1e;
  adf(a);
  Xdf(120, 121, [], c);
  Xdf(122, 123, [], c);
  this.ea = a;
  this.ha = !0 === d ? c : Q6e(c);
}
G(mhf, Acf);
mhf.prototype.getId = x(vh);
mhf.prototype.ce = x(li);
mhf.prototype.hb = !0;
function nhf(a) {
  this.ea = a;
}
G(nhf, HO);
nhf.prototype.aa = function (a, c) {
  var d = a.getId();
  var e = a.wc(),
    f = a.ce();
  switch (a.ea) {
    case 0:
      a = new xaf(d, null, null);
      d = f[1];
      if (null != d) {
        var g = c.Cg(d);
        if (g && !Eaf(g)) {
          g = jO();
          var h = no("Az");
          g.rk(h, { masterId: d }, !1);
        }
      }
      ihf(a, f, null, null, null);
      Zbf(c, c.aa, a, e);
      break;
    case 1:
      a = new Baf(d, null, null);
      ihf(a, f, null, null, null);
      if ((f = c = $$e(c, a.Ec(1)))) (f = a.getName()), (f = !c.ia[f]);
      f && Daf(c, a, e);
      break;
    case 2:
      (a = new Caf(d)), ihf(a, f, null, null, null), Zbf(c, c.ea, a, e);
  }
  return !1;
};
function ohf() {
  this.ea = Jy();
}
G(ohf, HO);
ohf.prototype.aa = function (a, c) {
  if ((c = yO(c, a.ea()))) {
    var d = a.AS();
    for (var e = 0; e < d.length; e++) {
      var f = d[e];
      f = c.getAnimations()[f];
      var g = a.ce();
      var h = a.ha;
      if (20 != Zo(f.Ec(0)))
        (g = phf(g)),
          (g = !!g && 20 == g.qb()),
          Ou(
            !g,
            "Cannot change ANIMATION_TYPE from non-TIMELINE animation to TIMELINE animation."
          );
      else {
        var l = (l = phf(g)) ? 20 != l.qb() : dv(h, 0);
        Ou(
          !l,
          "Cannot change ANIMATION_TYPE from TIMELINE animation to non-TIMELINE animation."
        );
        l = ubf((xO(), nbf), g, h);
        Su(
          2 === l || I(l, 0),
          "TIMELINE_TYPE and related properties must be modified together. Found remove=%s, properties=%s",
          h,
          tub(g)
        );
      }
      f = f.ce();
      g = a.ce();
      hhf(f, g, a.ha, null, null);
    }
  }
  return !1;
};
function qhf(a, c, d, e, f) {
  Ecf.call(this, k1e, e);
  wdf(a);
  for (e = 0; e < c.length; e = (e + 1) | 0) Ou(null != c[e], d1e);
  Xdf(6, 7, c, d);
  this.xa = !0 === f ? a : ev(a);
  this.ha = !0 === f ? c : ev(c);
  this.na = !0 === f ? d : v7e(d);
}
G(qhf, Ecf);
qhf.prototype.AS = x(Dn);
qhf.prototype.ce = x(lk);
qhf.prototype.MO = E(1002);
qhf.prototype.nr = E(978);
function phf(a) {
  a = a[0];
  return null == a ? null : L(Zo(a));
}
function rhf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(rhf, HO);
rhf.prototype.aa = function (a, c) {
  (c = yO(c, a.ea())) && hhf(c.ha, a.ce(), a.na, a.ha, this.ha);
  return !1;
};
function shf(a) {
  this.ea = a;
}
G(shf, HO);
function thf(a) {
  return 5 == F$e(a) && 153 != a;
}
shf.prototype.aa = function (a, c) {
  var d = acf(c, a.ha());
  for (var e = 0; e < d.length; e++) {
    var f = d[e];
    Ru(vO(f), K0e, f.getId());
    var g = f.getType();
    g != a.ea &&
      (f.Tb(a.ea),
      paf(f) || c.disconnect(f),
      paf(f) && thf(g) != thf(f.getType()) && jcf(c, f));
  }
  return !1;
};
function dff(a, c, d, e) {
  c = new uhf(c, e, d);
  e = new vhf(a, e);
  var f = new qvc(),
    g = {
      "docs-replace": new whf(a, d),
      "docs-revert": new whf(a, d),
      "sketchy-addAnimation": new ghf(d),
      "sketchy-addMediaClip": new lhf(d),
      "sketchy-addPage": new nhf(d),
      "sketchy-animationProperies": new ohf(),
      "sketchy-background": new rhf(f, d),
      "sketchy-changeShape": new shf(d),
      "sketchy-delete": new xhf(d),
      "sketchy-deleteColumn": new yhf(d),
      "sketchy-deleteRow": new zhf(d),
      "sketchy-documentProperties": new Ahf(f, d),
      "sketchy-documentSize": new Bhf(d),
      "sketchy-group": new Chf(d),
      "sketchy-insert": new Dhf(e, d),
      "sketchy-insertColumn": new Ehf(d),
      "sketchy-insertRow": new Fhf(d),
      "sketchy-insertTable": new Ghf(d),
      "sketchy-mediaClipProperties": new Hhf(f, d),
      "sketchy-mergeCellRange": new Ihf(d),
      "sketchy-moveAnimation": new Jhf(d),
      "sketchy-movePage": new Khf(d),
      "docs-officeroundtripdata": new nvc(),
      "sketchy-pageProperties": new Lhf(f, d),
      "sketchy-pathProperties": new Mhf(f, d),
      "sketchy-removeAnimation": new Nhf(d),
      "sketchy-removeMediaClip": new Ohf(d),
      "sketchy-removePage": new Phf(d),
      "sketchy-selection": new iuc(),
      "sketchy-shapeProperties": new Qhf(e, f, d),
      "sketchy-transform": new Rhf(d),
      "sketchy-transition": new Shf(f, d),
      "sketchy-ungroup": new Thf(d),
      "sketchy-unmergeCellRange": new Uhf(d),
      "docs-unsupportedofficefeatures": new Fvc(),
      "sketchy-updateAltText": new Vhf(),
      "sketchy-updateColumnWidths": new Whf(d),
      "sketchy-updateRowHeights": new Xhf(d),
      "sketchy-updateTableBorderStyles": new Yhf(d),
      "sketchy-updateTableCellProperties": new Zhf(d),
      "sketchy-zOrder": new $hf(),
    };
  c && fw(g, z1e, c);
  hBc().fp(function (l, m) {
    fw(g, l, m);
  });
  for (var h in g) LF(a, h, g[h]);
}
function aif(a) {
  this.ea = a;
}
G(aif, HO);
aif.prototype.aa = function (a, c) {
  (c = c.Cg(a.getId())) && this.ia(a, c);
  return !1;
};
function bif(a) {
  this.ea = a;
}
G(bif, aif);
bif.prototype.ia = function (a, c) {
  Nu(Oaf(c));
  this.ha(a, c);
};
function yhf(a) {
  this.ea = a;
}
G(yhf, bif);
yhf.prototype.ha = function (a, c) {
  a = a.ea;
  c.aa.wda(a);
  c.la.splice(a, 1);
  c.ga.wda(a);
  var d = TRc(c.ia, a),
    e = TRc(c.ia, (a + 1) | 0);
  c.ia.wda((a + 1) | 0);
  for (var f = 0; f < d.length; f = (f + 1) | 0)
    d[f].aa && !e[f].aa && c.ia.XV(f, a, e[f]);
  Iaf(c, new hD(0, a, c.Le(), (c.kf() - a) | 0));
};
function xhf(a) {
  this.ea = a;
}
G(xhf, HO);
xhf.prototype.aa = function (a, c) {
  a = a.ha();
  var d = acf(c, a),
    e = [];
  for (var f = 0; f < d.length; f++) {
    var g = sO(d[f], null);
    vv(e, g);
  }
  d = [];
  for (f = 0; f < e.length; f++)
    if (((g = e[f]), vO(g) && !paf(g))) {
      g = icf(c, g);
      for (var h = 0; h < g.length; h++) {
        var l = g[h];
        153 == l.getType() || mv(e, l) || d.push(l);
      }
    }
  e = Xaf(d);
  for (d = 0; d < a.length; d++)
    if ((f = c.Cg(a[d]))) {
      if (f.Kh())
        for (g = f.Kh().getAnimations(), h = 0; h < g.length; h++)
          Ou(
            !aq(g[h].aa, f.getId()),
            "Cannot delete object that has animations."
          );
      g = [];
      vO(f) && (g = taf(f, !0));
      c.remove(f);
      for (f = 0; f < g.length; f++) qO(g[f]).sX();
    }
  for (a = 0; a < e.length; a++) jcf(c, e[a]);
  return !1;
};
function zhf(a) {
  this.ea = a;
}
G(zhf, bif);
zhf.prototype.ha = function (a, c) {
  a = a.ea;
  c.aa.xda(a);
  c.ha.splice(a, 1);
  c.ia.xda(a);
  var d = nH(c.ga, a),
    e = nH(c.ga, (a + 1) | 0);
  c.ga.xda((a + 1) | 0);
  for (var f = 0; f < d.length; f = (f + 1) | 0)
    d[f].aa && !e[f].aa && c.ga.XV(a, f, e[f]);
  Iaf(c, new hD(a, 0, (c.Le() - a) | 0, c.kf()));
};
function Ahf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(Ahf, HO);
Ahf.prototype.aa = function (a, c) {
  var d = a.ce(),
    e = a.na;
  a = a.ha;
  c = c.ce();
  hhf(c, d, e, a, this.ha);
  return !1;
};
function Bhf(a) {
  this.ea = a;
}
G(Bhf, HO);
Bhf.prototype.aa = function (a, c) {
  c.setSize(a.getSize());
  if ((a = a.ea)) c.qa = a.clone();
  return !1;
};
function cif(a, c, d) {
  this.la = s1e;
  Ou(0 < a.width, "width is not positive");
  Ou(0 < a.height, "height is not positive");
  c &&
    (Ou(0 < c.width, "notes width is not positive"),
    Ou(0 < c.height, "notes height is not positive"));
  this.ha = !0 === d ? a : q7e(a);
  this.ea = c ? (!0 === d ? c : q7e(c)) : null;
}
G(cif, Acf);
cif.prototype.getSize = x(li);
function dif(a) {
  this.ea = a;
}
G(dif, HO);
dif.prototype.aa = function (a, c) {
  if ((c = yO(c, a.ea()))) {
    for (var d = a.ha(), e = [], f = 0; f < c.Yc(); f = (f + 1) | 0) {
      var g = c.Fc(f);
      mv(d, g.getId()) && e.push(g);
    }
    this.ha(a, c, e);
  }
  return !1;
};
function Chf(a) {
  this.ea = a;
}
G(Chf, dif);
Chf.prototype.ha = function (a, c, d) {
  for (var e = 0; e < d.length; e++) {
    var f = d[e];
    if (null != f && f.fVa) {
      var g = f;
      Qu(uo(!1, g.Ec(59)), "%s cannot be grouped", g.getType());
    }
    if (f.Kh()) {
      g = f.Kh().getAnimations();
      for (var h = 0; h < g.length; h++)
        Ou(
          !aq(g[h].aa, f.getId()),
          "Cannot group objects that have animation."
        );
    }
  }
  c.group(a.getId(), d, k6e(a.getTransform(), this.ea));
};
function Ehf(a) {
  this.ea = a;
}
G(Ehf, bif);
Ehf.prototype.ha = function (a, c) {
  a = a.ea;
  c.aa.yda(a, a$e);
  dqb(c.la, a, 0, [0]);
  c.ga.yda(a, c$e);
  c.ia.yda((a + 1) | 0, c$e);
  Haf(c, !1, a);
  Iaf(c, new hD(0, a, c.Le(), (c.kf() - a) | 0));
};
function eif(a) {
  this.ea = a;
}
G(eif, HO);
function fif(a, c, d) {
  var e = !W(a.ea, "sketchy-sftp") || W(a.ea, n1e),
    f = yO(d, c.ea());
  if (!f || d.Cg(c.getId())) return !0;
  if (e) {
    e = c.ce();
    var g = {},
      h = {};
    Px(e, function (l, m) {
      Ndf(l) ? fw(h, l, m) : fw(g, l, m);
    });
    e = a.ha(c, g);
    f.mPa(e);
    kw(h) || a.ia(d, e, h);
  } else (e = a.ha(c, c.ce())), f.mPa(e);
  gif(e, c);
  hif(e);
  return !1;
}
function gif(a, c) {
  var d = vO(a)
    ? 164 != a.getType()
      ? !1
      : Lx(a.ce(), 170) instanceof J3e
    : !1;
  d &&
    Ou(
      iif(a),
      "The CodedStrokeInputBatch's pressure/tilt/orientation properties are invalid for the given brush type"
    );
  d = vO(a) && 164 == a.getType() ? G8e(c.getTransform()) : !0;
  Su(d, W0e, c.getTransform(), a);
  if (vO(a)) {
    c = a.FB(170);
    d = a.FB(171);
    var e = a.FB(178),
      f = a.FB(179);
    a = 164 == a.getType() ? (d ? !f && !e : f && e) : !c && !d && !e && !f;
  } else a = !0;
  Ou(a, "Invalid properties for the given ShapeType.");
}
function iif(a) {
  if (vO(a)) {
    if (164 != a.getType()) return !0;
    var c = a.Ec(170),
      d = a.Ec(171);
    a = d ? d.ea : B3e(Zo(a.Ec(178)));
    d = c.ga;
    var e = c.ha;
    c = c.ea;
    switch (a) {
      case 0:
      case 1:
      case 2:
      case 5:
      case 6:
        return !d && !c && !e;
      case 8:
      case 9:
      case 3:
      case 4:
      case 7:
        return !e && !c;
    }
  }
  return !0;
}
eif.prototype.ia = u();
eif.prototype.aa = function (a, c) {
  return fif(this, a, c);
};
function hif(a) {
  if (a) {
    var c = [];
    a.JB() ? (c = taf(a, !0)) : eaf(a) && (c = faf(a, !0));
    for (a = 0; a < c.length; a++) qO(c[a]).sX();
  }
}
function Dhf(a, c) {
  this.ea = c;
  this.ma = a;
}
G(Dhf, eif);
Dhf.prototype.ia = function (a, c, d) {
  c.Ec(32) && 2 != c.getType() && W(this.ea, n1e)
    ? jif(this.ma, d, [], a, c.getId(), c)
    : hhf(c.properties, d, null, null, null);
};
Dhf.prototype.ha = function (a, c) {
  var d = new naf(a.getId(), a.ha);
  hhf(d.properties, c, null, null, null);
  d.transform.Px(a.getTransform());
  return d;
};
function vhf(a, c) {
  this.aa = a;
  this.ea = c;
}
G(vhf, H);
function jif(a, c, d, e, f, g) {
  var h = kif(),
    l = Q9e(g, !0, a.ea),
    m = c[33];
  if (null != m || dv(d, 33)) {
    if (0 != oaf(g)) {
      var n = new lif(f, null, 0, oaf(g));
      a.aa.apply(mif(h, n, null), e);
    }
    var q = l.nh(ym, 1);
    n = l.nh(Jk, (l.Va().Dc() - 1) | 0).clone();
    uo(!0, n.getValue(Y_a)) && n.bd({ ps_al: 1, ps_al_i: !1 });
    m &&
      ((m = m.replace(RegExp("\u2028", "g"), "\v")),
      (m = new nif(f, null, 0, m)),
      a.aa.apply(mif(h, m, null), e));
    q = new fI(ym, 1, (l.Va().Dc() - 1) | 0, q.Vd());
    m = a.aa;
    var r = m.apply;
    q = mif(h, q, new wO(f, null));
    r.call(m, q, e);
    q = new fI(Jk, (l.Va().Dc() - 1) | 0, (l.Va().Dc() - 1) | 0, n.Vd());
    l = a.aa;
    n = l.apply;
    q = mif(h, q, new wO(f, null));
    n.call(l, q, e);
  }
  n = {};
  l = {};
  for (var v in c)
    (r = Number(v)),
      (m = c[r]),
      Mdf(r) &&
        null != m &&
        ((q = Ldf(r)),
        null != q &&
          (Edf(),
          41 == r && (m /= 508),
          12 == q ? gw(l, Zo(q), m) : gw(n, Zo(q), m)));
  v = [];
  c = [];
  for (q = 0; q < d.length; q++)
    (m = d[q]),
      Mdf(m) &&
        ((m = Ldf(m)), null != m && (12 == m ? c.push(Zo(m)) : v.push(Zo(m))));
  d = new zdf(f, null, 0, (oaf(g) + 1) | 0, v, n, null, null, !0);
  a.aa.apply(mif(h, d, null), e);
  d = new zdf(f, null, oaf(g), (oaf(g) + 1) | 0, c, l, null, null, !0);
  a.aa.apply(mif(h, d, null), e);
}
function lif(a, c, d, e) {
  BO.call(this, q1e, a, c);
  this.ha = this.ea = 0;
  Ou(2147483647 > d, U0e);
  this.ea = d;
  this.ha = e;
  this.na = kA(this.ea, (this.ha - 1) | 0);
}
G(lif, BO);
lif.prototype.Dc = function () {
  return (this.ha - this.ea) | 0;
};
function nif(a, c, d, e) {
  BO.call(this, y1e, a, c);
  this.ea = 0;
  Ou(!Pp(e), "newText cannot be empty");
  Ou(2147483647 > d, U0e);
  this.ea = d;
  this.ha = e;
}
G(nif, BO);
function oif() {
  this.ga = t3e();
  this.ha = t3e();
}
G(oif, H);
oif.prototype.aa = function (a, c) {
  return this.ga.get(a.getType()).aa(a, c);
};
oif.prototype.ea = function (a) {
  return this.ha.get(a.getType()).ea(a);
};
function pif(a, c) {
  qif.ga.set(a, c);
}
function rif(a, c) {
  qif.ha.set(a, c);
}
function sif(a, c, d, e) {
  BO.call(this, a, c, d);
  this.ea = Xu(e, "Entity id cannot be null");
}
G(sif, BO);
sif.prototype.aa = x(vh);
sif.prototype.Ac = function () {
  return Qp([L(BO.prototype.Ac.call(this)), this.ea]);
};
sif.prototype.Za = function (a) {
  return I(this, a)
    ? !0
    : a instanceof sif
    ? BO.prototype.Za.call(this, a) && I(this.ea, a.ea)
    : !1;
};
sif.prototype.Ya = !0;
function tif(a, c, d, e, f) {
  sif.call(this, g1e, a, c, e);
  this.na = d;
  this.ha = f ? f : {};
}
G(tif, sif);
function uif(a) {
  this.ga = a;
}
G(uif, H);
uif.prototype.aa = function (a, c) {
  return a.ha === Gj
    ? this.ga.aa(a, c)
    : new tif(c.aa, c.Kc(), a.ha, a.aa(), a.qa);
};
uif.prototype.ea = function (a) {
  return dO(a.na, a.aa(), a.ha, !0);
};
function vif(a, c, d, e, f) {
  BO.call(this, h1e, a, c);
  Ou(!!d, "entityId cannot be null or empty");
  if (e) for (var g in e) (a = Number(g)), Qu(0 <= a && 8 >= a, J0e, a);
  this.ea = d;
  d = e ? e : {};
  if (!0 === f) var h = d;
  else {
    iO();
    f = {};
    for (h in d) (e = d[h]), (e = new w6e(O6e(e.ce()), ev(e.aa))), fw(f, h, e);
    h = f;
  }
  this.ha = h;
}
G(vif, BO);
vif.prototype.xa = x(li);
function wif(a, c) {
  this.ga = a;
  this.ha = c;
}
G(wif, H);
wif.prototype.aa = function (a, c) {
  var d = {},
    e = ow(a.qa, Aj);
  if (e)
    for (var f in e) {
      var g = e[f];
      g = new w6e(S8e(g, this.ga, this.ha), R8e(g));
      var h = BTc(f);
      gw(d, h, g);
    }
  e = c.Kc();
  return new vif(c.aa, e, a.aa(), d, null);
};
wif.prototype.ea = function (a) {
  var c = {},
    d = a.xa();
  for (var e in d) {
    var f = d[Number(e)],
      g = f.ce();
    rw(c, LH(Number(e)), U8e(f.aa, g, this.ga));
  }
  d = {};
  kw(c) || rw(d, Aj, c);
  return dO(Gj, a.ea, d, !0);
};
var qif;
function xif(a) {
  yif();
  if (qif) return qif;
  qif = new oif();
  var c = new zif();
  pif(NUa, c);
  rif(y1e, c);
  c = new Aif();
  pif(qj, c);
  rif(q1e, c);
  c = p9e();
  var d = new Bif(c);
  pif(nj, d);
  rif(t2e, d);
  d = new wif(c, a);
  var e = new uif(d);
  pif(mj, e);
  rif(h1e, d);
  rif(g1e, e);
  d = new Cif(a);
  e = new Dif(d);
  var f = W(a, Ng) ? e : d;
  pif(pj, f);
  rif(p1e, d);
  rif(o1e, e);
  d = new Eif(c, a);
  e = new Fif(d);
  f = W(a, Ng) ? e : d;
  pif(tj, f);
  rif(D2e, d);
  rif(C2e, e);
  d = new Gif();
  pif(SVa, d);
  rif(u2e, d);
  a = new Hif(c, a);
  pif(b1e, a);
  rif(y2e, a);
  return qif;
}
function yif() {
  yif = u();
  qif = null;
}
function Iif(a, c, d, e) {
  sif.call(this, o1e, a, c, e);
  this.ha = d;
}
G(Iif, sif);
function Dif(a) {
  this.ga = a;
}
G(Dif, H);
Dif.prototype.aa = function (a, c) {
  Nu(a instanceof lI);
  var d = Wu(a.ea);
  return d === Gj ? this.ga.aa(a, c) : new Iif(c.aa, c.Kc(), d, a.aa());
};
Dif.prototype.ea = function (a) {
  return new lI(a.ha, a.aa());
};
function Jif(a, c, d) {
  BO.call(this, p1e, a, c);
  this.ea = Xu(d, $0e);
}
G(Jif, BO);
function Cif(a) {
  this.ga = a;
}
G(Cif, H);
Cif.prototype.aa = function (a, c) {
  return new Jif(c.aa, c.Kc(), a.aa());
};
Cif.prototype.ea = function (a) {
  var c = null;
  W(this.ga, Ng) && (c = Gj);
  return new lI(c, a.ea);
};
function Aif() {}
G(Aif, H);
Aif.prototype.aa = function (a, c) {
  return new lif(c.aa, c.Kc(), d8e(a.ea), f8e(a.ha));
};
Aif.prototype.ea = function (a) {
  var c = c8e(a.ea);
  a = a.ha;
  mO();
  return new oI(c, a);
};
function zif() {}
G(zif, H);
zif.prototype.aa = function (a, c) {
  return new nif(c.aa, c.Kc(), d8e(a.ha), a.Va());
};
zif.prototype.ea = function (a) {
  return new hYc(c8e(a.ea), a.ha);
};
function Bif(a) {
  this.ga = a;
}
G(Bif, H);
Bif.prototype.aa = function (a, c) {
  var d = a.ma,
    e = a.ga,
    f = m8e(d, e),
    g = q8e(d, e, this.ga),
    h = o8e(d, e, this.ga),
    l = a.ia;
  a = a.ha;
  var m = e8e(l),
    n = f8e(a);
  g8e(l, a, d, e);
  return Bdf(c.aa, c.Kc(), m, n, f, g, h);
};
Bif.prototype.ea = function (a) {
  var c = a.ce(),
    d = a.ea;
  d && ((c = lw(c)), Nx(c, d));
  var e = a.na;
  mO();
  var f = c ? c : {};
  e = e ? e : [];
  if ((c = ew(f)[0])) var g = L7e(Z6e[c]);
  else if (null != e[0] && 0 != e[0]) g = L7e(Z6e[e[0]]);
  else {
    c = null;
    for (g in f) (f = Z6e[g]), null == c && (c = f);
    for (g = 0; g < e.length; g++) (f = Z6e[e[g]]), null == c && (c = f);
    g = L7e(c);
  }
  e = (mO(), T7e).get(g);
  c = a.na;
  f = a.ce();
  var h = c8e(a.Ca);
  return new fI(e, h, a.ha, k8e(g, c, f, d, this.ga));
};
function Kif(a, c, d, e) {
  sif.call(this, u2e, a, c, d);
  this.ha = 0;
  Ou(2147483647 > e, U0e);
  this.ha = e;
}
G(Kif, sif);
function Gif() {}
G(Gif, H);
Gif.prototype.aa = function (a, c) {
  var d = c.aa;
  c = c.Kc();
  var e = a.aa();
  a = a.ha;
  mO();
  return new Kif(d, c, e, 0 < a ? (a - 1) | 0 : a);
};
Gif.prototype.ea = function (a) {
  var c = a.aa();
  a = a.ha;
  mO();
  return new vWc(c, 0 <= a ? (a + 1) | 0 : a);
};
function Lif(a, c, d, e, f, g) {
  BO.call(this, y2e, a, c);
  Ou($p(d, "\n"), "Text should end with new line");
  for (var h in e) Xu(e[h], "entityMap entries cannot be null");
  a = f.Jc();
  for (c = 0; c < a.length; c++)
    Xu(f.get(a[c]), "styleMap entries cannot be null");
  this.na = d;
  if (!0 !== g) {
    iO();
    d = {};
    for (var l in e) {
      a = e[l];
      c = {};
      for (var m in a) {
        h = Number(m);
        var n = O6e(a[h]);
        gw(c, h, n);
      }
      fw(d, l, c);
    }
    e = d;
  }
  this.ea = e;
  if (!0 !== g) {
    iO();
    g = new kD();
    e = f.Jc();
    for (l = 0; l < e.length; l++)
      (m = e[l]),
        (a = f.get(m)),
        (d = O6e(a.ce())),
        (a = ev(a.aa)),
        g.set(m, new w6e(d, a));
    f = g;
  }
  this.ha = f;
}
G(Lif, BO);
Lif.prototype.Tc = x(lk);
function Hif(a, c) {
  this.ga = a;
  this.ha = c;
}
G(Hif, H);
Hif.prototype.aa = function (a, c) {
  var d = m9a(a.Va(), 1),
    e = {},
    f = a.ha;
  for (var g in f) {
    var h = ow(f[g], Aj);
    if (h) {
      var l = {};
      for (var m in h) {
        var n = BTc(m),
          q = S8e(h[m], this.ga, this.ha);
        gw(l, n, q);
      }
      fw(e, g, l);
    }
  }
  f = new kD();
  a = a.ea;
  g = d.length;
  for (var r in a)
    for (
      h = FB(r), l = a[r], m = l.Jc(), n = 0;
      n < m.length;
      n = (n + 1) | 0
    ) {
      var v = m[n];
      var w = h ? v : n < ((m.length - 1) | 0) ? (m[(n + 1) | 0] - 1) | 0 : g;
      var y = e8e(v);
      q = f8e(w);
      g8e(v, w, l.get(v), r);
      Mif(y, f);
      q < g && Mif(q, f);
      w = l.get(v);
      v = r;
      w = n8e(w, v, this.ha);
      var A = q8e(w, v, this.ga),
        B = {};
      for (var C in A)
        if (C === nra) {
          var J = o8e(w, v, this.ga);
          for (var M in J) {
            var T = J[M].hf();
            fw(B, M, T);
          }
          Nx(A, B);
        }
      v = A;
      w = f.Jc();
      y = hv(w, y);
      q = hv(w, q);
      for (0 > q && (q = w.length); y < q; y = (y + 1) | 0)
        (A = w[y]),
          (B = f.get(A).ce()),
          (B = lw(B)),
          Nx(B, v),
          f.set(A, new w6e(B, []));
    }
  r = c.Kc();
  return new Lif(c.aa, r, d, e, f, null);
};
Hif.prototype.ea = function () {
  throw no("Bz").Ga;
};
function Mif(a, c) {
  if (!c.get(a)) {
    var d = nD(c, a);
    if (d) {
      var e = c.set;
      d = new w6e(lw(d.ea), ev(d.aa));
      e.call(c, a, d);
    } else c.set(a, new w6e({}, []));
  }
}
function Nif(a, c, d, e, f) {
  sif.call(this, C2e, a, c, e);
  this.na = d;
  this.ha = f;
}
G(Nif, sif);
function Fif(a) {
  this.ga = a;
}
G(Fif, H);
Fif.prototype.aa = function (a, c) {
  Nu(a instanceof gI);
  var d = Wu(a.ha);
  return d === Gj ? this.ga.aa(a, c) : new Nif(c.aa, c.Kc(), d, a.aa(), a.oa);
};
Fif.prototype.ea = function (a) {
  return new gI(a.na, a.aa(), a.ha);
};
function Oif(a, c, d, e, f, g, h) {
  BO.call(this, D2e, a, c);
  this.ha = 0;
  Qu(0 <= e && 8 >= e, J0e, e);
  for (a = 0; a < f.length; a = (a + 1) | 0)
    Ou(null != f[a], d1e),
      Qu(
        !(f[a] in g),
        "Found same key in style types to remove and style types to set %s",
        f[a]
      );
  this.ea = Xu(d, $0e);
  this.ha = e;
  this.na = !0 === h ? f : ev(f);
  this.Ca = !0 === h ? g : O6e(g);
}
G(Oif, BO);
Oif.prototype.ce = x(Ta);
Oif.prototype.xa = function () {
  return Sx("" + this.ha, new w6e(this.Ca, this.na));
};
function Eif(a, c) {
  this.ha = a;
  this.ga = c;
}
G(Eif, H);
Eif.prototype.aa = function (a, c) {
  var d = ow(a.oa, Aj);
  dw(d);
  var e = ew(d)[0],
    f = BTc(e),
    g = d[e];
  d = c.Kc();
  e = R8e(g);
  g = S8e(g, this.ha, this.ga);
  return new Oif(c.aa, d, a.aa(), f, e, g, null);
};
Eif.prototype.ea = function (a) {
  var c = a.na,
    d = a.ce();
  c = U8e(c, d, this.ha);
  c = { le_nb: Jx(Ex(), LH(a.ha), c).ua() };
  d = null;
  W(this.ga, Ng) && (d = Gj);
  return new gI(d, a.ea, c);
};
function Pif(a, c) {
  Qif();
  this.aa = a;
  this.ea = c;
}
var Rif;
G(Pif, H);
function kif() {
  Qif();
  if (!Rif) {
    var a = xif(Jy());
    var c = Jy();
    Sif();
    if (Tif) c = Tif;
    else {
      Tif = new Uif();
      var d = new Vif();
      IO(NUa, d);
      IO(y1e, d);
      IO(qj, d);
      IO(q1e, d);
      IO(nj, new Wif(c));
      IO(t2e, new Xif(c));
      IO(mj, d);
      IO(h1e, d);
      IO(g1e, d);
      IO(pj, d);
      IO(p1e, d);
      IO(tj, new Yif());
      IO(D2e, d);
      IO(SVa, new Vif());
      IO(u2e, new Vif());
      IO(b1e, d);
      IO(y2e, d);
      c = new Zif(Tif);
      IO(ADa, c);
      IO(XCa, c);
      c = Tif;
    }
    Rif = new Pif(a, c);
  }
  return Rif;
}
function mif(a, c, d) {
  var e = !!d;
  c = a.ea.aa(c);
  var f = [];
  for (var g = 0; g < c.length; g++) {
    var h = c[g];
    h = e ? a.aa.aa(h, d) : a.aa.ea(h);
    f.push(h);
  }
  a = e ? c : f;
  e = e ? f : c;
  d = [];
  for (f = 0; f < c.length; f = (f + 1) | 0)
    (g = new Ydf(a[f], e[f])), d.push(g);
  return Ey(d);
}
function Qif() {
  Qif = u();
  Rif = null;
}
function Uif() {
  this.ea = t3e();
}
G(Uif, H);
Uif.prototype.aa = function (a) {
  return this.ea.get(a.getType()).aa(a);
};
function IO(a, c) {
  Tif.ea.set(a, c);
}
function Wif(a) {
  this.ea = a;
}
G(Wif, H);
Wif.prototype.aa = function (a) {
  var c = n8e(a.ma, a.ga, this.ea);
  return [new fI(a.ga, a.ia, a.ha, c)];
};
function Vif() {}
G(Vif, H);
Vif.prototype.aa = function (a) {
  return [a];
};
var Tif;
function Sif() {
  Sif = u();
  Tif = null;
}
function Xif(a) {
  this.ea = a;
}
G(Xif, H);
Xif.prototype.aa = function (a) {
  if (a.Da) return [a];
  var c = h8e(a.ce(), this.ea),
    d = a.na,
    e = this.ea;
  mO();
  var f = {};
  for (var g = 0; g < d.length; g++) {
    var h = d[g],
      l = Z6e[h];
    if (null != l && ((l !== wn && l !== xn) || W(e, v1e))) {
      var m = f[l];
      m ? m.push(h) : fw(f, l, [h]);
    }
  }
  d = (d = a.ea) ? h8e(d, this.ea) : {};
  e = W(this.ea, "sketchy-etstcp");
  g = [];
  for (h = 0; h < (K7e(), J7e).length; h = (h + 1) | 0) {
    var n = Ip(ov((K7e(), J7e), h));
    l = c[n];
    m = f[n];
    var q = d[n];
    if (l || m || q)
      if (
        ((l = l ? l : {}),
        (m = m ? m : []),
        n === Jk && ((a.Ca + 1) | 0) != a.ha)
      )
        for (n = a.Ca; n < a.ha; n = (n + 1) | 0) {
          var r = new zdf(a.getId(), a.Kc(), n, (n + 1) | 0, m, l, q, null, e);
          g.push(r);
        }
      else
        (l = new zdf(a.getId(), a.Kc(), a.Ca, a.ha, m, l, q, null, e)),
          g.push(l);
  }
  return g;
};
function Yif() {}
G(Yif, H);
Yif.prototype.aa = function (a) {
  var c = ow(a.oa, Aj),
    d = [];
  if (!c) return d;
  for (var e in c) {
    var f = Jx(Ex(), Aj, Jx(Ex(), e, ow(c, e)).ua()).ua();
    f = new gI(a.ha, a.aa(), f);
    d.push(f);
  }
  return d;
};
function Zif(a) {
  this.ea = a;
}
G(Zif, H);
Zif.prototype.aa = function (a) {
  a = Hy(a);
  var c = [];
  for (var d = 0; d < a.length; d++) {
    var e = this.ea.aa(a[d]);
    vv(c, e);
  }
  return c;
};
function Fhf(a) {
  this.ea = a;
}
G(Fhf, bif);
Fhf.prototype.ha = function (a, c) {
  c.insertRow(a.ea);
};
function Ghf(a) {
  this.ea = a;
}
G(Ghf, eif);
Ghf.prototype.ha = function (a, c) {
  z$e(a.na);
  z$e(a.ha);
  var d = a.getId(),
    e = a.na,
    f = a.ha,
    g = e.length,
    h = f.length,
    l = a4e(g, (h + 1) | 0, (d$e(), e$e));
  g = a4e((g + 1) | 0, h, e$e);
  h = ev(e);
  var m = ev(f);
  e = $3e(e.length, f.length, a$e);
  e = new $9e(e);
  d = new Faf(d, h, m, l, g, e, Jy());
  Iaf(d, null);
  d.transform.Px(a.getTransform());
  Naf(d, c, null, null, null);
  return d;
};
function uhf(a, c, d) {
  this.ea = d;
  this.ha = a;
  this.ia = c;
}
G(uhf, HO);
uhf.prototype.aa = function (a, c) {
  var d = a.ha,
    e = c.Cg(d.getId());
  if (e) {
    if (d.Kc())
      Ru(Oaf(e), "DrawingObject has cell but is not a Table: %s", e.getId());
    else {
      Ru(vO(e), "DrawingObject has no cell but is not a Shape: %s", e.getId());
      var f = e.Kh();
      Ou(
        !!f && !!f.aa,
        "Cannot get a text model for a shape that is not connected to a document."
      );
    }
    (c = ecf(c, new wO(d.getId(), d.Kc()), !0, this.ia)) &&
    this.ha.apply(a.ea, c)
      ? (a = !0)
      : (hif(e), (a = !1));
  } else a = !1;
  return a;
};
uhf.prototype.la = function (a, c, d) {
  if (d) c = new $if({}, null);
  else {
    var e = a.ha,
      f = ecf(c, new wO(e.getId(), e.Kc()), !0, this.ia);
    a = f ? this.ha.xC(a.ea, f, d) : null;
    d = {};
    new Jcf(d, c, this.ea, null).gC(e);
    c = new $if(d, a);
  }
  return c;
};
function $if(a, c) {
  this.aa = a;
  this.ea = c;
}
G($if, jhf);
function Hhf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(Hhf, HO);
Hhf.prototype.aa = function (a, c) {
  c = bcf(c, a.getId());
  Lnb(c, H0e, a.getId());
  hhf(c.ce(), a.ce(), a.na, a.ha, this.ha);
  W$e(c);
  return !1;
};
function ajf(a, c, d, e, f) {
  Bcf.call(this, B1e, c, d, e, f);
  this.ea = a;
  adf(a);
  Xdf(120, 121, c, d);
  Xdf(122, 123, c, d);
  a = (xO(), obf);
  a = 1 !== ubf(a, d, c);
  Su(
    a,
    "Media trim properties must be modified together. Found remove=%s, properties=%s",
    c,
    tub(d)
  );
}
G(ajf, Bcf);
ajf.prototype.getId = x(vh);
ajf.prototype.hb = !0;
function Ihf(a) {
  this.ea = a;
}
G(Ihf, bif);
Ihf.prototype.ha = function (a, c) {
  a = a.ea;
  var d = c.aa;
  a3e(d, a);
  var e = fWb(a);
  Ru(1 < e.length, "Attempted to merge fewer than two cells: %s", a.toString());
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    if (g) {
      var h = zH(d, g);
      Xu(h, "Attempted to merge across missing cell.");
      Ru(2 == h.ug(), "Attempted to merge cell which is already merged: %s", g);
    }
  }
  f = e[0];
  e.shift();
  f = zH(d, f);
  for (g = 0; g < e.length; g++) (h = e[g]) && zH(d, h).uDa(f);
  f.ima(a.qf());
  f.Vla(a.Kf());
  Jaf(c, a, !0);
  Iaf(c, Kaf(c, a));
};
function Jhf(a) {
  this.ea = a;
}
G(Jhf, HO);
Jhf.prototype.aa = function (a, c) {
  if ((c = yO(c, a.ea()))) {
    var d = c.getAnimations(),
      e = a.aK();
    d = d[e];
    Qu(a.aK() < c.getAnimations().length, a1e, a.aK());
    Sv(c.getAnimations(), a.aK());
    Qu(a.qG() <= c.getAnimations().length, a1e, a.qG());
    c = c.getAnimations();
    Yv(c, a.qG(), 0, [d]);
  }
  return !1;
};
function bjf(a, c, d) {
  Ecf.call(this, D1e, d);
  this.na = this.ha = 0;
  wdf([a, c]);
  this.ha = a;
  this.na = c;
}
G(bjf, Ecf);
bjf.prototype.aK = x(li);
bjf.prototype.qG = x(lk);
bjf.prototype.aEa = E(996);
bjf.prototype.nr = E(977);
function Khf(a) {
  this.ea = a;
}
G(Khf, HO);
Khf.prototype.aa = function (a, c) {
  var d = a.ea,
    e = a.wc();
  a = a.qG();
  0 == d
    ? (Qu(0 <= e && e < c.aa.length, a1e, e),
      (d = c.aa.splice(e, 1)),
      Qu(0 <= a && a <= c.aa.length, a1e, a),
      Yv(c.aa, a, 0, [d[0]]))
    : 2 == d &&
      (Qu(0 <= e && e < c.ea.length, a1e, e),
      (d = c.ea.splice(e, 1)),
      Qu(0 <= a && a <= c.ea.length, a1e, a),
      Yv(c.ea, a, 0, [d[0]]));
  return !1;
};
function Lhf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(Lhf, HO);
Lhf.prototype.aa = function (a, c) {
  var d = a.ea,
    e = a.ce(),
    f = a.na;
  a = a.ha;
  var g;
  a: {
    xO();
    for (g = 0; g < gbf.length; g = (g + 1) | 0) {
      var h = gbf[g];
      if (h in e || dv(f, h)) {
        g = !0;
        break a;
      }
    }
    g = !1;
  }
  for (h = 0; h < d.length; h++) {
    var l = yO(c, d[h]);
    l && (ihf(l, e, f, a, this.ha), g && hif(l));
  }
  return !1;
};
function Mhf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(Mhf, aif);
Mhf.prototype.ia = function (a, c) {
  Ru(vO(c), K0e, c.getId());
  var d = c.Ec(12);
  Ou(a.ea < d.length, "Invalid pathIndex. Path does not exist.");
  var e = d[a.ea];
  Ou(
    e instanceof j6e,
    "PathPropertiesCommand can only be applied to SegmentedPaths."
  );
  var f = a.Wj(),
    g = a.ha,
    h = a.na,
    l = e.aa;
  e = new j6e(
    null != f ? Zo(f) : e.Wj(),
    null != g ? g : e.Lda(),
    h ? this.ha.apply(h, l) : l
  );
  f = qv();
  uv(f, d);
  f.aa[a.ea] = e;
  c.setProperty(12, wv(f));
};
function Nhf(a) {
  this.ea = a;
}
G(Nhf, HO);
Nhf.prototype.aa = function (a, c) {
  if ((c = yO(c, a.ea())))
    (a = a.wc()),
      Qu(a < c.getAnimations().length, a1e, a),
      Sv(c.getAnimations(), a);
  return !1;
};
function Ohf(a) {
  this.ea = a;
}
G(Ohf, HO);
Ohf.prototype.aa = function (a, c) {
  a = a.getId();
  Ru(c.ha.Cl(a), H0e, a);
  c.ha.jC(a);
  return !1;
};
function Phf(a) {
  this.ea = a;
}
G(Phf, HO);
function cjf(a, c) {
  var d = a.wc();
  c = c[d];
  d = a.na;
  c
    ? null == d ||
      Sp(c.getId(), d) ||
      ((a = {
        commandPageIndex: "" + a.wc(),
        commandPageId: d,
        pageId: c.getId(),
      }),
      (c = jO()),
      (d = no("Dz")),
      c.rk(d, a, !1))
    : ((a = { commandPageIndex: "" + a.wc(), commandPageId: d || "" }),
      (c = jO()),
      (d = no("Cz")),
      c.rk(d, a, !1));
}
Phf.prototype.aa = function (a, c) {
  var d = a.wc();
  switch (a.ea) {
    case 0:
      var e = Cv(c.aa);
      cjf(a, e);
      a = e[d];
      d = lv(c.aa, a);
      0 <= d && Sv(c.aa, d);
      c.ga.jC(a.getId());
      caf(c, sO(a, null));
      break;
    case 1:
      c = $$e(c, a.ZJ());
      e = Cv(c.ga);
      cjf(a, e);
      a = e[d];
      Rpb(c.ga, a);
      d = a.getName();
      iw(c.ia, d);
      c.aa && caf(c.aa, sO(a, null));
      a.yR(null);
      break;
    case 2:
      (e = Cv(c.ea)),
        cjf(a, e),
        (a = lv(c.ea, e[d])),
        0 <= a && ((a = c.ea.splice(a, 1)[0]), caf(c, sO(a, null)), a.yR(null));
  }
  return !1;
};
function Qhf(a, c, d) {
  this.ea = d;
  this.ia = a;
  this.ha = c;
}
G(Qhf, HO);
function djf(a) {
  var c = {};
  for (var d in a) {
    var e = a[d];
    Ndf(d) || fw(c, d, e);
  }
  return c;
}
Qhf.prototype.aa = function (a, c) {
  var d = a.ce(),
    e = a.na,
    f = a.ha,
    g = {};
  qzb(g, ew(d));
  rzb(g, e);
  f && qzb(g, ew(f));
  var h = 54 in g || 55 in g;
  a: {
    xO();
    var l = ew(g);
    for (var m = 0; m < l.length; m++)
      if (l[m] in fbf) {
        l = !0;
        break a;
      }
    l = !1;
  }
  m = dv(e, 51);
  var n = dv(e, 52),
    q = 51 in d,
    r = 52 in d,
    v = acf(c, a.ea);
  for (var w = 0; w < v.length; w++) {
    var y = v[w];
    Ru(vO(y) || Oaf(y), "Not a shape-like drawing object: %s", y.getId());
    if (vO(y))
      if (
        (164 == y.getType() &&
          (Ou(
            !(170 in d),
            "The CodedStrokeInputBatch can not be updated for an INK_STROKE."
          ),
          Ou(
            !dv(e, 170),
            "The CodedStrokeInputBatch can not be removed for an INK_STROKE."
          )),
        2 != y.getType() && W(this.ea, n1e))
      ) {
        Edf();
        var A = [];
        for (var B in Hdf) A.push(Number(B));
        a: {
          for (var C = 0; C < A.length; C++)
            if (A[C] in g) {
              A = !0;
              break a;
            }
          A = !1;
        }
        if (A) {
          jif(this.ia, d, e, c, y.getId(), y);
          A = [];
          for (C = 0; C < e.length; C++) {
            var J = e[C];
            Mdf(J) || A.push(J);
          }
          e = A;
          d = djf(d);
          f && (f = djf(f));
        }
      } else {
        if (!(A = !y.aa)) {
          a: {
            A = a.ce();
            for (var M in A)
              if (((A = Number(M)), Edf(), A in Idf)) {
                A = !0;
                break a;
              }
            A = !1;
          }
          A = !A;
        }
        Ru(
          A,
          "Old-style text properties cannot be applied to a TextModel shape, shape id: %s",
          y.getId()
        );
      }
    A = q || m ? y.Ec(51) : null;
    C = r || n ? y.Ec(52) : null;
    J = [];
    if (vO(y) && h) {
      var T = taf(y, !0);
      for (var Z = 0; Z < T.length; Z++) J.push(T[Z]);
      J.push(y);
    }
    Oaf(y) ? Naf(y, d, e, f, this.ha) : hhf(y.properties, d, e, f, this.ha);
    if ((T = y.Kh()) && h) {
      baf(T);
      if (vO(y)) {
        T = taf(y, !0);
        for (Z = 0; Z < T.length; Z++) J.push(T[Z]);
        J = Xaf(J);
      }
      for (T = 0; T < J.length; T++) (Z = J[T]), vO(Z) && Z.aa && qO(Z).sX();
    }
    A && hcf(c, y, A);
    C && hcf(c, y, C);
    q && fcf(c, y, 51);
    r && fcf(c, y, 52);
    if (vO(y) && l && !q && !r && !paf(y)) {
      C = [];
      for (var ba in g) dv((xO(), ebf), Number(ba)) && C.push(ba);
      A = [y];
      J = [];
      for (T = 0; T < A.length; T = (T + 1) | 0)
        if (((Z = A[T]), vO(Z) && Z.IN())) {
          Z = taf(Z, null);
          for (var ha = 0; ha < Z.length; ha = (ha + 1) | 0)
            for (
              var ra = Z[ha], Aa = Lbf(ra), Ga = 0;
              Ga < C.length;
              Ga = (Ga + 1) | 0
            ) {
              var Ca = Aa,
                Ia = Number(C[Ga]);
              if (Kbf(Ca, Ia) ? 0 : !Ca.aa.FB(Ia)) {
                J.push(ra);
                break;
              }
            }
        }
      A = J;
      A.push(y);
      for (y = 0; y < A.length; y = (y + 1) | 0) gcf(c, A[y]);
    }
  }
  return !1;
};
function whf(a, c) {
  this.ea = a;
  this.ha = c;
}
G(whf, guc);
whf.prototype.ga = function (a, c, d) {
  return fhf(a, c, d, this.ha);
};
function Rhf(a) {
  this.ea = a;
}
G(Rhf, HO);
function ejf(a, c) {
  var d = c.Cg(a.getId());
  if (d) {
    Ou(!Oaf(d) || H8e(a.getTransform()), "Transform is not valid for table");
    Ou(!eaf(d), "Cannot apply a transform to a page");
    Su(fjf(d, a), W0e, a.getTransform(), d);
    var e = new Wbf(c, null);
    d.transform.Px(a.getTransform());
    d.accept(
      new s8e(function (f) {
        if (vO(f))
          if (paf(f)) {
            var g;
            if (!(g = I(f, d) || 153 == f.getType())) {
              g = Vaf(e, f, 51);
              var h = Vaf(e, f, 52);
              g = !!g || !!h;
            }
            g || jcf(c, f);
          } else gcf(c, f);
      }),
      !0
    );
  }
  return !1;
}
function fjf(a, c) {
  return vO(a) && 164 == a.getType() ? G8e(c.getTransform()) : !0;
}
Rhf.prototype.aa = function (a, c) {
  return ejf(a, c);
};
function Shf(a, c) {
  this.ea = c;
  this.ha = a;
}
G(Shf, HO);
Shf.prototype.aa = function (a, c) {
  (c = yO(c, a.ea())) && hhf(c.na.ce(), a.ce(), a.na, a.ha, this.ha);
  return !1;
};
function Thf(a) {
  this.ea = a;
}
G(Thf, HO);
Thf.prototype.aa = function (a, c) {
  if ((a = c.hH(a.getId()))) {
    if (a.Kh()) {
      var d = a.Kh().getAnimations();
      for (var e = 0; e < d.length; e++)
        Ou(
          !aq(d[e].aa, a.getId()),
          "Cannot ungroup object that has animation."
        );
    }
    daf(c, a);
  }
  return !1;
};
function Uhf(a) {
  this.ea = a;
}
G(Uhf, bif);
Uhf.prototype.ha = function (a, c) {
  a = a.ea;
  var d = c.aa;
  a3e(d, a);
  var e = d.Kc(a.aa, a.Sl());
  Ru(
    null != e && 0 == e.ug() && e.qf() == a.qf() && e.Kf() == a.Kf(),
    "The specified range does not match a set of merged cells: %s",
    a
  );
  e = fWb(a);
  for (var f = 0; f < e.length; f++) {
    var g = e[f];
    g &&
      ((g = zH(d, g)), Xu(g, "Attempted to unmerge a missing cell."), g.gib());
  }
  Jaf(c, a, !1);
  Iaf(c, Kaf(c, a));
};
function gjf(a, c) {
  Ygf.call(this, z2e, a, c);
}
G(gjf, Ygf);
function Vhf() {
  this.ea = Jy();
}
G(Vhf, aif);
Vhf.prototype.ia = function (a, c) {
  var d = a.Lb();
  null != d && c.setTitle(d);
  a = a.Qf();
  null != a && c.hm(a);
};
function hjf(a, c, d, e) {
  AO.call(this, A2e, a);
  if (r8e(e, c)) throw Ep("Up`" + c.length).Ga;
  if (r8e(e, d)) throw Ep("Vp`" + d.length).Ga;
  this.ha = c;
  this.ea = d;
}
G(hjf, AO);
hjf.prototype.Lb = x(li);
hjf.prototype.Qf = x(vh);
function Whf(a) {
  this.ea = a;
}
G(Whf, bif);
Whf.prototype.ha = function (a, c) {
  a = a.ea;
  x$e(a, null);
  y$e(c.la, a);
};
function ijf(a, c, d, e) {
  AO.call(this, a, c);
  if (!0 !== e) {
    iO();
    a = {};
    c = ew(d);
    for (e = 0; e < c.length; e = (e + 1) | 0) {
      var f = c[e];
      a[f] = Zo(sx(d[f]));
    }
    d = a;
  }
  this.ea = d;
}
G(ijf, Xgf);
function jjf(a, c, d) {
  ijf.call(this, B2e, a, c, d);
}
G(jjf, ijf);
function Xhf(a) {
  this.ea = a;
}
G(Xhf, bif);
Xhf.prototype.ha = function (a, c) {
  a = a.ea;
  x$e(a, null);
  y$e(c.ha, a);
};
function kjf(a, c, d) {
  ijf.call(this, E2e, a, c, d);
}
G(kjf, ijf);
function Yhf(a) {
  this.ea = a;
}
G(Yhf, bif);
Yhf.prototype.ha = function (a, c) {
  var d = a.ea;
  a = a.ce();
  var e = L2e(d, !1);
  for (var f = 0; f < e.length; f++) {
    var g = e[f],
      h = 0 == g.ga ? c.ga : c.ia;
    a3e(h, d);
    var l = g.ea;
    g = g.aa;
    var m = h.Kc(l, g);
    h.XV(l, g, Z9e(m, a));
  }
};
function ljf(a, c, d, e) {
  Ygf.call(this, F2e, a, c);
  tbf(d);
  this.ha = !0 === e ? d : Q6e(d);
}
G(ljf, Ygf);
ljf.prototype.ce = x(li);
function Zhf(a) {
  this.ea = a;
}
G(Zhf, bif);
Zhf.prototype.ha = function (a, c) {
  var d = a.ea,
    e = a.ha;
  a = a.ce();
  a3e(c.aa, d);
  d = fWb(d);
  for (var f = 0; f < d.length; f++) {
    var g = zH(c.aa, d[f]).ce();
    for (var h = 0; h < e.length; h++) jw(g, e[h]);
    for (var l in a) fw(g, l, a[l]);
  }
};
function mjf(a, c, d, e, f) {
  Ygf.call(this, G2e, a, c);
  for (a = 0; a < d.length; a = (a + 1) | 0)
    Ou(null != d[a], d1e),
      Qu(!(d[a] in e), "remove and properties must be disjoint: %s", d[a]);
  tbf(e);
  this.ha = !0 === f ? d : ev(d);
  this.na = !0 === f ? e : Q6e(e);
}
G(mjf, Ygf);
mjf.prototype.ce = x(lk);
function $hf() {
  this.ea = Jy();
}
G($hf, dif);
$hf.prototype.ha = function (a, c, d) {
  a = Vdf(a, c, d);
  for (var e = 0; e < d.length; e++) c.remove(d[e]);
  for (e = 0; e < d.length; e++) {
    var f = void 0;
    c.add(d[e], ((f = a), (a = (a + 1) | 0), f));
  }
};
var njf;
function ojf(a) {
  var c = njf;
  if (c) return c;
  njf = c = new auc((bff(), cff));
  var d = (lO(), kO);
  var e = x9e();
  d = new gld(d, e, null);
  Ald(d, c);
  qmd(c, a);
  return c;
}
var cff;
function bff() {
  bff = u();
  cff = new Uff();
}
function Uff() {}
var pjf = {
  54: g1e,
  41: h1e,
  35: f1e,
  58: i1e,
  12: j1e,
  38: k1e,
  9: l1e,
  19: m1e,
  0: Rl,
  26: ZN,
  55: o1e,
  47: p1e,
  24: $N,
  16: q1e,
  45: r1e,
  1: s1e,
  2: w1e,
  3: V2a,
  25: aO,
  23: bO,
  22: x1e,
  15: y1e,
  60: B1e,
  31: C1e,
  37: D1e,
  14: E1e,
  4: XCa,
  20: ADa,
  18: F1e,
  52: G1e,
  36: H1e,
  59: I1e,
  13: cO,
  40: Cg,
  21: UFa,
  39: VFa,
  46: J1e,
  5: s2e,
  17: t2e,
  56: u2e,
  6: v2e,
  43: w2e,
  11: Vg,
  7: x2e,
  32: z2e,
  44: A2e,
  57: C2e,
  50: Wg,
  51: vg,
  28: B2e,
  48: DMa,
  53: CMa,
  42: D2e,
  27: E2e,
  30: F2e,
  29: G2e,
  8: H2e,
  49: y2e,
};
G(Uff, H);
Uff.prototype.getType = function (a) {
  var c = pjf[a[0]];
  if (!c) throw no("Ez`" + K(a)).Ga;
  return c;
};
function aff() {
  this.ha = kif();
}
G(aff, H);
aff.prototype.Nj = function (a) {
  this.aa = a;
  return this;
};
aff.prototype.Wl = function (a) {
  this.ga = a;
  return this;
};
aff.prototype.ua = function () {
  Xu(this.aa, "flagService is null");
  Xu(this.ga, "performanceManager is null");
  this.ea || (this.ea = ojf(this.aa));
  var a = new qjf(),
    c = this.ga,
    d = this.ea,
    e = this.ha;
  a.aa = this.aa;
  a.ha = c;
  a.ea = d;
  a.ga = e;
  return a;
};
function qjf() {}
var eff = {
  "docs-mlti": 4,
  "docs-null": 20,
  "docs-replace": 40,
  "docs-reverse": 21,
  "docs-revert": 39,
  "docs-undo": 11,
  "docs-updatemodelversion": 48,
  "docs-updatemodelfeaturebitset": 53,
};
G(qjf, H);
function fff(a) {
  this.aa = a;
}
G(fff, H);
fff.prototype.hd = function (a) {
  return new khf(a[1], a[2], d7e(C5e, D5e, a[3], this.aa), a[4], !0);
};
fff.prototype.tb = function (a) {
  var c = a.ha,
    d = a.wc();
  var e = a.ce();
  e = y7e(C5e, D5e, e, this.aa);
  return [35, c, d, e, a.ea()];
};
function rjf() {}
G(rjf, H);
rjf.prototype.hd = function (a) {
  return new tif(a[1], n6e($v(a, 2)), a[3], a[4], a[5]);
};
rjf.prototype.tb = function (a) {
  return [54, a.getId(), m6e(a.Kc()), a.na, a.aa(), a.ha];
};
function sjf(a) {
  this.aa = a;
}
G(sjf, H);
sjf.prototype.hd = function (a) {
  var c = $v(a, 4),
    d = {};
  if (c)
    for (var e = 0; e < ((c.length - 2) | 0); e = (e + 3) | 0) {
      var f = c[e],
        g = f7e(c[(e + 1) | 0], this.aa);
      gw(d, f, new w6e(g, c[(e + 2) | 0]));
    }
  c = a[1];
  e = n6e($v(a, 2));
  return new vif(c, e, a[3], d, null);
};
sjf.prototype.tb = function (a) {
  var c = [],
    d = a.xa();
  for (var e in d) {
    var f = Number(e),
      g = d[f],
      h = z7e(g.ce(), this.aa);
    g = G6e(g.aa);
    c.push(f);
    c.push(h);
    c.push(g);
  }
  return [41, a.getId(), m6e(a.Kc()), a.ea, c];
};
function gff(a) {
  this.aa = a;
}
G(gff, H);
gff.prototype.hd = function (a) {
  return new mhf(a[1], e7e(a[2], this.aa), !0);
};
gff.prototype.tb = function (a) {
  return [58, a.getId(), x7e(a.ce(), this.aa)];
};
function hff(a) {
  this.aa = a;
}
G(hff, H);
hff.prototype.hd = function (a) {
  var c = null == a[4] ? null : d7e(u5e, v5e, a[4], this.aa);
  return new Icf(a[1], a[2], a[3], c, !0);
};
hff.prototype.tb = function (a) {
  var c = a.getId(),
    d = a.wc(),
    e = a.ea;
  a = a.ce();
  a = y7e(u5e, v5e, a, this.aa);
  return [12, c, d, e, a];
};
function iff(a) {
  this.aa = a;
}
G(iff, H);
iff.prototype.hd = function (a) {
  return new qhf(a[1], a[2], d7e(C5e, D5e, a[3], this.aa), a[4], !0);
};
iff.prototype.tb = function (a) {
  var c = a.AS(),
    d = G6e(a.ha);
  var e = a.ce();
  e = y7e(C5e, D5e, e, this.aa);
  return [38, c, d, e, a.ea()];
};
function jff(a) {
  this.aa = a;
}
G(jff, H);
jff.prototype.hd = function (a) {
  return new bdf(
    a[1],
    e7e(a[2], this.aa),
    a[3],
    G7e(q5e, r5e, this.aa, $v(a, 4)),
    !0
  );
};
jff.prototype.tb = function (a) {
  var c = [9, G6e(a.na), x7e(a.ce(), this.aa), a.ea()];
  (a = a.ha) && c.push(B7e(r5e, a, this.aa));
  return c;
};
function kff() {}
G(kff, H);
kff.prototype.hd = function (a) {
  return new ddf(a[1], a[2], !0);
};
kff.prototype.tb = function (a) {
  return [19, a.ha(), a.ea];
};
function Vff(a, c) {
  c = {
    "sketchy-addEntity": new rjf(),
    "sketchy-addListEntity": new sjf(c),
    "sketchy-deleteEntity": new tjf(),
    "sketchy-deleteListEntity": new ujf(),
    "sketchy-deleteText": new off(),
    "sketchy-insertText": new wff(),
    "sketchy-styleText": new Jff(c),
    "sketchy-tetherEntity": new vjf(),
    "sketchy-updateListEntity": new wjf(c),
    "sketchy-updateEntity": new xjf(),
    "sketchy-unifiedText": new yjf(c),
  };
  for (var d in c) NF(a, d, c[d]);
}
function mff() {}
G(mff, H);
mff.prototype.hd = function (a) {
  return new ahf(a[1], a[2]);
};
mff.prototype.tb = function (a) {
  return [26, a.getId(), a.ea];
};
function lff() {}
G(lff, H);
lff.prototype.hd = function (a) {
  return new hdf(a[1], null);
};
lff.prototype.tb = function (a) {
  return [0, a.ha()];
};
function tjf() {}
G(tjf, H);
tjf.prototype.hd = function (a) {
  return new Iif(a[1], n6e($v(a, 2)), a[3], a[4]);
};
tjf.prototype.tb = function (a) {
  return [55, a.getId(), m6e(a.Kc()), a.ha, a.aa()];
};
function ujf() {}
G(ujf, H);
ujf.prototype.hd = function (a) {
  return new Jif(a[1], n6e($v(a, 2)), a[3]);
};
ujf.prototype.tb = function (a) {
  return [47, a.getId(), m6e(a.Kc()), a.ea];
};
function nff() {}
G(nff, H);
nff.prototype.hd = function (a) {
  return new bhf(a[1], a[2]);
};
nff.prototype.tb = function (a) {
  return [24, a.getId(), a.ea];
};
function off() {}
G(off, H);
off.prototype.hd = function (a) {
  return new lif(a[1], n6e($v(a, 2)), a[3], a[4]);
};
off.prototype.tb = function (a) {
  return [16, a.getId(), m6e(a.Kc()), a.ea, a.ha];
};
function pff(a) {
  this.aa = a;
}
G(pff, H);
pff.prototype.hd = function (a) {
  var c = a[1],
    d = d7e(G5e, H5e, a[2], this.aa);
  a = G7e(G5e, H5e, this.aa, $v(a, 3));
  return new idf(c, d, a, null);
};
pff.prototype.tb = function (a) {
  var c = G6e(a.na);
  var d = a.ce();
  d = y7e(G5e, H5e, d, this.aa);
  c = [45, c, d];
  (a = a.ha) && c.push(B7e(H5e, a, this.aa));
  return c;
};
function qff() {}
G(qff, H);
qff.prototype.hd = function (a) {
  var c = a[1];
  a = $v(a, 2);
  return new cif(new Lt(c[0], c[1]), a ? new Lt(a[0], a[1]) : null, !0);
};
qff.prototype.tb = function (a) {
  var c = a.getSize();
  a = a.ea;
  return [1, [c.width, c.height], a ? [a.width, a.height] : null];
};
function rff(a) {
  this.aa = a;
}
G(rff, H);
rff.prototype.hd = function (a) {
  return new ldf(a[1], a[2], l6e(a[3]), $v(a, 4), !0);
};
rff.prototype.tb = function (a) {
  return [2, a.getId(), a.ha(), k6e(a.getTransform(), this.aa), a.ea()];
};
function tff() {}
G(tff, H);
tff.prototype.hd = function (a) {
  return new dhf(a[1], a[2]);
};
tff.prototype.tb = function (a) {
  return [25, a.getId(), a.ea];
};
function sff(a) {
  this.aa = a;
}
G(sff, H);
sff.prototype.hd = function (a) {
  return new odf(a[1], a[2], l6e(a[3]), e7e(a[4], this.aa), $v(a, 5), !0);
};
sff.prototype.tb = function (a) {
  return [
    3,
    a.getId(),
    a.ha,
    k6e(a.getTransform(), this.aa),
    x7e(a.ce(), this.aa),
    a.ea(),
  ];
};
function uff() {}
G(uff, H);
uff.prototype.hd = function (a) {
  return new ehf(a[1], a[2]);
};
uff.prototype.tb = function (a) {
  return [23, a.getId(), a.ea];
};
function vff(a) {
  this.aa = a;
}
G(vff, H);
vff.prototype.hd = function (a) {
  return new pdf(a[1], a[2], a[3], l6e(a[4]), e7e(a[5], this.aa), a[6], !0);
};
vff.prototype.tb = function (a) {
  return [
    22,
    a.getId(),
    a.na,
    a.ha,
    k6e(a.getTransform(), this.aa),
    x7e(a.ce(), this.aa),
    a.ea(),
  ];
};
function wff() {}
G(wff, H);
wff.prototype.hd = function (a) {
  return new nif(a[1], n6e($v(a, 2)), a[3], a[4]);
};
wff.prototype.tb = function (a) {
  return [15, a.getId(), m6e(a.Kc()), a.ea, a.ha];
};
function Wff(a, c) {
  this.aa = a;
  this.ea = c;
}
G(Wff, H);
Wff.prototype.hd = function (a) {
  a = this.aa.hd(a);
  return mif(this.ea, a, null);
};
Wff.prototype.tb = function (a) {
  return this.aa.tb(a.ha);
};
function xff(a) {
  this.aa = a;
}
G(xff, H);
xff.prototype.hd = function (a) {
  return new ajf(
    a[1],
    a[2],
    e7e(a[3], this.aa),
    G7e(q5e, r5e, this.aa, $v(a, 4)),
    !0
  );
};
xff.prototype.tb = function (a) {
  var c = [60, a.getId(), G6e(a.na), x7e(a.ce(), this.aa)];
  (a = a.ha) && c.push(B7e(r5e, a, this.aa));
  return c;
};
function yff() {}
G(yff, H);
yff.prototype.hd = function (a) {
  return new Zgf(a[1], q6e(a[2]));
};
yff.prototype.tb = function (a) {
  return [31, a.getId(), p6e(a.ea)];
};
function zff() {}
G(zff, H);
zff.prototype.hd = function (a) {
  return new bjf(a[1], a[2], a[3]);
};
zff.prototype.tb = function (a) {
  return [37, a.aK(), a.qG(), a.ea()];
};
function Aff() {}
G(Aff, H);
Aff.prototype.hd = function (a) {
  return new qdf(a[1], a[2], a[3]);
};
Aff.prototype.tb = function (a) {
  return [14, a.wc(), a.qG(), a.ea];
};
function Bff(a) {
  this.aa = a;
}
G(Bff, H);
Bff.prototype.hd = function (a) {
  var c = a[1],
    d = a[2],
    e = d7e(u5e, v5e, a[3], this.aa);
  a = G7e(u5e, v5e, this.aa, $v(a, 4));
  return new rdf(c, d, e, a, !0);
};
Bff.prototype.tb = function (a) {
  var c = a.ea,
    d = G6e(a.na);
  var e = a.ce();
  e = y7e(u5e, v5e, e, this.aa);
  c = [18, c, d, e];
  (a = a.ha) && c.push(B7e(v5e, a, this.aa));
  return c;
};
function Cff() {}
G(Cff, H);
Cff.prototype.hd = function (a) {
  var c = a[1],
    d = a[2],
    e = 3 < a.length && null != a[3] ? a[3] : null,
    f = 4 < a.length && null != a[4] ? !!a[4] : null;
  if (5 < a.length && null != a[5]) {
    var g = a[5];
    a = g[0];
    var h = $v(g, 1);
    g = g[2];
    for (var l = Kv(), m = 0; m < g.length; m = (m + 1) | 0) {
      var n = g[m];
      tv(l, new c6e(n[0], n[1], n[2], !!n[3]));
    }
    a = o6e(a, h, wv(l));
  } else a = null;
  return new sdf(c, d, e, f, a);
};
Cff.prototype.tb = function (a) {
  var c = cub(Bx(cub(bub(), 52), a.getId()), a.ea),
    d = a.Wj();
  null == d ? c.aa.push(null) : cub(c, Zo(d));
  d = a.ha;
  null == d ? c.aa.push(null) : c.aa.push(d);
  if ((d = a.na)) {
    a = Bx(bub(), d.aa);
    d.ea ? cub(a, d.wc()) : a.aa.push(null);
    d = d.hf();
    var e = bub();
    for (var f = 0; f < d.length; f++) {
      var g = d[f];
      S2e(e, [g.getType(), g.aa, g.ea, g.ga]);
    }
    a = S2e(a, e.ua()).ua();
    S2e(c, a);
  } else c.aa.push(null);
  return c.ua();
};
function Dff() {}
G(Dff, H);
Dff.prototype.hd = function (a) {
  return new vdf(a[1], a[2]);
};
Dff.prototype.tb = function (a) {
  return [36, a.wc(), a.ea()];
};
function Eff() {}
G(Eff, H);
Eff.prototype.hd = function (a) {
  return new Tgf(a[1]);
};
Eff.prototype.tb = function (a) {
  return [59, a.getId()];
};
function Fff() {}
G(Fff, H);
Fff.prototype.hd = function (a) {
  return new xdf(a[1], null == a[2] ? null : a[2], $v(a, 3), $v(a, 4));
};
Fff.prototype.tb = function (a) {
  return [13, a.wc(), a.ea, a.ZJ(), a.na];
};
function Iff(a) {
  this.aa = a;
}
G(Iff, H);
Iff.prototype.hd = function (a) {
  return new Zdf(
    a[1],
    a[2],
    e7e(a[3], this.aa),
    G7e(q5e, r5e, this.aa, $v(a, 4)),
    !0
  );
};
Iff.prototype.tb = function (a) {
  var c = [5, a.ea, G6e(a.na), x7e(a.ce(), this.aa)];
  (a = a.ha) && c.push(B7e(r5e, a, this.aa));
  return c;
};
function Jff(a) {
  this.aa = a;
}
G(Jff, H);
Jff.prototype.hd = function (a) {
  var c = a[1],
    d = n6e($v(a, 2)),
    e = a[3],
    f = a[4],
    g = a[5],
    h = f7e(a[6], this.aa);
  var l = G7e(w5e, z5e, this.aa, $v(a, 7));
  return new zdf(c, d, e, f, g, h, l, !!a[8], !0);
};
Jff.prototype.tb = function (a) {
  var c = [
      17,
      a.getId(),
      m6e(a.Kc()),
      a.Ca,
      a.ha,
      G6e(a.na),
      z7e(a.ce(), this.aa),
    ],
    d = a.ea;
  a = a.Da;
  (d || a) && c.push(d ? B7e(z5e, d, this.aa) : []);
  a && c.push(a);
  return c;
};
function vjf() {}
G(vjf, H);
vjf.prototype.hd = function (a) {
  return new Kif(a[1], n6e($v(a, 2)), a[3], a[4]);
};
vjf.prototype.tb = function (a) {
  return [56, a.getId(), m6e(a.Kc()), a.aa(), a.ha];
};
function Kff(a) {
  this.aa = a;
}
G(Kff, H);
Kff.prototype.hd = function (a) {
  var c = l6e(a[2]);
  return new Pdf(a[1], c, !0, null);
};
Kff.prototype.tb = function (a) {
  return [6, a.getId(), k6e(a.getTransform(), this.aa)];
};
function Lff(a) {
  this.aa = a;
}
G(Lff, H);
Lff.prototype.hd = function (a) {
  var c = a[1],
    d = d7e(E5e, F5e, a[2], this.aa),
    e = a[3];
  a = G7e(E5e, F5e, this.aa, $v(a, 4));
  return new Qdf(c, d, e, a, !0);
};
Lff.prototype.tb = function (a) {
  var c = G6e(a.na);
  var d = a.ce();
  d = y7e(E5e, F5e, d, this.aa);
  c = [43, c, d, a.ea()];
  (a = a.ha) && c.push(B7e(F5e, a, this.aa));
  return c;
};
function Mff() {}
G(Mff, H);
Mff.prototype.hd = function (a) {
  return new Wgf(a[1]);
};
Mff.prototype.tb = function (a) {
  return [7, a.getId()];
};
function yjf(a) {
  this.aa = a;
}
G(yjf, H);
yjf.prototype.hd = function (a) {
  for (
    var c = a[1],
      d = n6e($v(a, 2)),
      e = a[3],
      f = a[4],
      g = this.aa,
      h = {},
      l = 0;
    l < ((f.length - 1) | 0);
    l = (l + 2) | 0
  ) {
    for (
      var m = f[l], n = f[(l + 1) | 0], q = {}, r = 0;
      r < ((n.length - 1) | 0);
      r = (r + 2) | 0
    ) {
      var v = n[r],
        w = f7e(n[(r + 1) | 0], g);
      gw(q, v, w);
    }
    fw(h, m, q);
  }
  a = a[5];
  f = this.aa;
  g = new kD();
  for (l = 0; l < ((a.length - 2) | 0); l = (l + 3) | 0) {
    m = a[l];
    n = f7e(a[(l + 1) | 0], f);
    q = a[(l + 2) | 0];
    r = [];
    for (v = 0; v < q.length; v = (v + 1) | 0) r.push(q[v]);
    g.set(m, new w6e(n, r));
  }
  return new Lif(c, d, e, h, g, !0);
};
yjf.prototype.tb = function (a) {
  var c = a.getId(),
    d = m6e(a.Kc()),
    e = a.Tc(),
    f = a.ea,
    g = this.aa,
    h = [];
  for (var l in f) {
    var m = f[l],
      n = [];
    for (var q in m) {
      var r = z7e(m[q], g);
      n.push(Number(q));
      n.push(r);
    }
    h.push(l);
    h.push(n);
  }
  a = a.ha;
  f = this.aa;
  g = [];
  l = a.Jc();
  for (m = 0; m < l.length; m++)
    (n = l[m]),
      (r = a.get(n)),
      (q = z7e(r.ce(), f)),
      (r = G6e(r.aa)),
      g.push(n),
      g.push(q),
      g.push(r);
  return [49, c, d, e, h, g];
};
function Nff() {}
G(Nff, H);
Nff.prototype.hd = function (a) {
  return new gjf(a[1], q6e(a[2]));
};
Nff.prototype.tb = function (a) {
  return [32, a.getId(), p6e(a.ea)];
};
function Off(a) {
  this.aa = a;
}
G(Off, H);
Off.prototype.hd = function (a) {
  var c = $v(a, 2);
  c = r8e(this.aa, c) ? (null != c ? h3e(c, 1e5) : null) : c;
  var d = $v(a, 3);
  d = r8e(this.aa, d) ? (null != d ? h3e(d, 1e5) : null) : d;
  return new hjf(a[1], c, d, Jy());
};
Off.prototype.tb = function (a) {
  return [44, a.getId(), a.Lb(), a.Qf()];
};
function Pff() {}
G(Pff, H);
Pff.prototype.hd = function (a) {
  return new jjf(a[1], s6e(a[2]), !0);
};
Pff.prototype.tb = function (a) {
  return [28, a.getId(), r6e(a.ea)];
};
function xjf() {}
G(xjf, H);
xjf.prototype.hd = function (a) {
  return new Nif(a[1], n6e($v(a, 2)), a[3], a[4], a[5]);
};
xjf.prototype.tb = function (a) {
  return [57, a.getId(), m6e(a.Kc()), a.na, a.aa(), a.ha];
};
function wjf(a) {
  this.aa = a;
}
G(wjf, H);
wjf.prototype.hd = function (a) {
  return new Oif(a[1], n6e($v(a, 2)), a[3], a[4], a[5], f7e(a[6], this.aa), !0);
};
wjf.prototype.tb = function (a) {
  return [
    42,
    a.getId(),
    m6e(a.Kc()),
    a.ea,
    a.ha,
    G6e(a.na),
    z7e(a.ce(), this.aa),
  ];
};
function Qff() {}
G(Qff, H);
Qff.prototype.hd = function (a) {
  return new kjf(a[1], s6e(a[2]), !0);
};
Qff.prototype.tb = function (a) {
  return [27, a.getId(), r6e(a.ea)];
};
function Rff(a) {
  this.aa = a;
}
G(Rff, H);
Rff.prototype.hd = function (a) {
  return new ljf(a[1], q6e(a[2]), e7e(a[3], this.aa), !0);
};
Rff.prototype.tb = function (a) {
  return [30, a.getId(), p6e(a.ea), x7e(a.ce(), this.aa)];
};
function Sff(a) {
  this.aa = a;
}
G(Sff, H);
Sff.prototype.hd = function (a) {
  return new mjf(a[1], q6e(a[2]), a[3], e7e(a[4], this.aa), !0);
};
Sff.prototype.tb = function (a) {
  return [29, a.getId(), p6e(a.ea), G6e(a.ha), x7e(a.ce(), this.aa)];
};
function Tff() {}
G(Tff, H);
Tff.prototype.hd = function (a) {
  return new Sdf(a[1], a[2], a[3], !0);
};
Tff.prototype.tb = function (a) {
  return [8, a.ha(), a.xa, a.ea()];
};
function zjf() {
  fM.apply(this, arguments);
}
G(zjf, fM);
zjf.prototype.xua = function () {
  return new $ef();
};
fO(pM(CWa), zjf);
qM(gM());
zO();
// Google Inc.

//# sourceMappingURL=client_js_prod_kix_nestedsketchycore__en_gb.sourcemap
