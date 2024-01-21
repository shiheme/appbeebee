import "./chunk-Y2F7D3TJ.js";

// node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js
var t = (e2, ...i2) => {
  const s2 = i2.length;
  for (let n2 = 0; n2 < s2; n2++) {
    const s3 = i2[n2] || {};
    Object.entries(s3).forEach(([i3, s4]) => {
      const n3 = Array.isArray(s4) ? [] : {};
      var r2;
      e2[i3] || Object.assign(e2, { [i3]: n3 }), "object" == typeof (r2 = s4) && null !== r2 && r2.constructor === Object && "[object Object]" === Object.prototype.toString.call(r2) ? Object.assign(e2[i3], t(n3, s4)) : Array.isArray(s4) ? Object.assign(e2, { [i3]: [...s4] }) : Object.assign(e2, { [i3]: s4 });
    });
  }
  return e2;
};
var e = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3);
var i = (t2, i2) => {
  t2 && e(i2).forEach((e2) => {
    t2.classList.add(e2);
  });
};
var s = (t2, i2) => {
  t2 && e(i2).forEach((e2) => {
    t2.classList.remove(e2);
  });
};
var n = function(t2, e2) {
  return t2.split(".").reduce((t3, e3) => "object" == typeof t3 ? t3[e3] : void 0, e2);
};
var r = class {
  constructor(t2 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t2 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t2);
    for (const t3 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      t3.startsWith("on") && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
  }
  setOptions(e2) {
    this.options = e2 ? t({}, this.constructor.defaults, e2) : {};
    for (const [t2, e3] of Object.entries(this.option("on") || {}))
      this.on(t2, e3);
  }
  option(t2, ...e2) {
    let i2 = n(t2, this.options);
    return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2;
  }
  optionFor(t2, e2, i2, ...s2) {
    let r2 = n(e2, t2);
    var o2;
    "string" != typeof (o2 = r2) || isNaN(o2) || isNaN(parseFloat(o2)) || (r2 = parseFloat(r2)), "true" === r2 && (r2 = true), "false" === r2 && (r2 = false), r2 && "function" == typeof r2 && (r2 = r2.call(this, this, t2, ...s2));
    let a2 = n(e2, this.options);
    return a2 && "function" == typeof a2 ? r2 = a2.call(this, this, t2, ...s2, r2) : void 0 === r2 && (r2 = a2), void 0 === r2 ? i2 : r2;
  }
  cn(t2) {
    const e2 = this.options.classes;
    return e2 && e2[t2] || "";
  }
  localize(t2, e2 = []) {
    t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, e3, i2) => {
      let s2 = "";
      return i2 ? s2 = this.option(`${e3[0] + e3.toLowerCase().substring(1)}.l10n.${i2}`) : e3 && (s2 = this.option(`l10n.${e3}`)), s2 || (s2 = t3), s2;
    });
    for (let i2 = 0; i2 < e2.length; i2++)
      t2 = t2.split(e2[i2][0]).join(e2[i2][1]);
    return t2 = t2.replace(/\{\{(.*?)\}\}/g, (t3, e3) => e3);
  }
  on(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), this.events || (this.events = /* @__PURE__ */ new Map()), i2.forEach((t3) => {
      let i3 = this.events.get(t3);
      i3 || (this.events.set(t3, []), i3 = []), i3.includes(e2) || i3.push(e2), this.events.set(t3, i3);
    });
  }
  off(t2, e2) {
    let i2 = [];
    "string" == typeof t2 ? i2 = t2.split(" ") : Array.isArray(t2) && (i2 = t2), i2.forEach((t3) => {
      const i3 = this.events.get(t3);
      if (Array.isArray(i3)) {
        const t4 = i3.indexOf(e2);
        t4 > -1 && i3.splice(t4, 1);
      }
    });
  }
  emit(t2, ...e2) {
    [...this.events.get(t2) || []].forEach((t3) => t3(this, ...e2)), "*" !== t2 && this.emit("*", t2, ...e2);
  }
};
Object.defineProperty(r, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.33" }), Object.defineProperty(r, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var o = class extends r {
  constructor(t2, e2) {
    super(e2), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t2 });
  }
  attach() {
  }
  detach() {
  }
};
var a;
var l;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Error = 1] = "Error", t2[t2.Ready = 2] = "Ready", t2[t2.Panning = 3] = "Panning", t2[t2.Mousemove = 4] = "Mousemove", t2[t2.Destroy = 5] = "Destroy";
}(a || (a = {})), function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Destroy = 2] = "Destroy";
}(l || (l = {}));
var c = (t2, e2 = 1e4) => (t2 = parseFloat(t2 + "") || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
var h = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var u;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Hidden = 2] = "Hidden";
}(u || (u = {}));
var d = "isResting";
var f = "thumbWidth";
var b = "thumbHeight";
var p = "thumbClipWidth";
var g = class extends o {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: u.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t2, e2) {
    const i2 = e2.el ? e2.el.dataset : void 0;
    i2 && (e2.thumbSrc = i2.thumbSrc || e2.thumbSrc || "", e2[p] = parseFloat(i2[p] || "") || e2[p] || 0, e2[b] = parseFloat(i2.thumbHeight || "") || e2[b] || 0), this.addSlide(e2);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t2;
    if (!this.isModern)
      return;
    const i2 = this.container, n2 = this.instance, r2 = n2.panzoom, o2 = this.carousel, a2 = o2 ? o2.panzoom : null, l2 = n2.page;
    if (r2 && o2 && a2) {
      if (r2.isDragging) {
        s(i2, this.cn(d));
        let e2 = (null === (t2 = o2.pages[l2]) || void 0 === t2 ? void 0 : t2.pos) || 0;
        e2 += n2.getProgress(l2) * (this[p] + this.thumbGap);
        let r3 = a2.getBounds();
        -1 * e2 > r3.x.min && -1 * e2 < r3.x.max && a2.panTo({ x: -1 * e2, friction: 0.12 });
      } else
        c2 = i2, h2 = this.cn(d), u2 = r2.isResting, c2 && e(h2).forEach((t3) => {
          c2.classList.toggle(t3, u2 || false);
        });
      var c2, h2, u2;
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t2 of this.instance.slides || [])
      this.resizeModernSlide(t2);
    this.shiftModern();
  }
  isDisabled() {
    const t2 = this.option("minCount") || 0;
    if (t2) {
      const e3 = this.instance;
      let i2 = 0;
      for (const t3 of e3.slides || [])
        t3.thumbSrc && i2++;
      if (i2 < t2)
        return true;
    }
    const e2 = this.option("type");
    return ["modern", "classic"].indexOf(e2) < 0;
  }
  getThumb(t2) {
    const e2 = this.option("thumbTpl") || "";
    return { html: this.instance.localize(e2, [["%i", t2.index], ["%d", t2.index + 1], ["%s", t2.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
  }
  addSlide(t2) {
    const e2 = this.carousel;
    e2 && e2.addSlide(t2.index, this.getThumb(t2));
  }
  getSlides() {
    const t2 = [];
    for (const e2 of this.instance.slides || [])
      t2.push(this.getThumb(e2));
    return t2;
  }
  resizeModernSlide(t2) {
    this.isModern && (t2[f] = t2[p] && t2[b] ? Math.round(this[b] * (t2[p] / t2[b])) : this[f]);
  }
  updateProps() {
    const t2 = this.container;
    if (!t2)
      return;
    const e2 = (e3) => parseFloat(getComputedStyle(t2).getPropertyValue("--f-thumb-" + e3)) || 0;
    this.thumbGap = e2("gap"), this.thumbExtraGap = e2("extra-gap"), this[f] = e2("width") || 40, this[p] = e2("clip-width") || 40, this[b] = e2("height") || 40;
  }
  build() {
    const e2 = this;
    if (e2.state !== u.Init)
      return;
    if (e2.isDisabled())
      return void e2.emit("disabled");
    const s2 = e2.instance, n2 = s2.container, r2 = e2.getSlides(), o2 = e2.option("type");
    e2.type = o2;
    const a2 = e2.option("parentEl"), l2 = e2.cn("container"), c2 = e2.cn("track");
    let h2 = null == a2 ? void 0 : a2.querySelector("." + l2);
    h2 || (h2 = document.createElement("div"), i(h2, l2), a2 ? a2.appendChild(h2) : n2.after(h2)), i(h2, `is-${o2}`), i(n2, e2.cn("hasThumbs")), e2.container = h2, e2.updateProps();
    let d2 = h2.querySelector("." + c2);
    d2 || (d2 = document.createElement("div"), i(d2, e2.cn("track")), h2.appendChild(d2)), e2.track = d2;
    const f2 = t({}, { track: d2, infinite: false, center: true, fill: "classic" === o2, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, e2.option("Carousel") || {}, { Sync: { target: s2 }, slides: r2 }), b2 = new s2.constructor(h2, f2);
    b2.on("createSlide", (t2, i2) => {
      e2.setProps(i2.index), e2.emit("createSlide", i2, i2.el);
    }), b2.on("ready", () => {
      e2.shiftModern(), e2.emit("ready");
    }), b2.on("refresh", () => {
      e2.shiftModern();
    }), b2.on("Panzoom.click", (t2, i2, s3) => {
      e2.onClick(s3);
    }), e2.carousel = b2, e2.state = u.Ready;
  }
  onClick(t2) {
    t2.preventDefault(), t2.stopPropagation();
    const e2 = this.instance, { pages: i2, page: s2 } = e2, n2 = (t3) => {
      if (t3) {
        const e3 = t3.closest("[data-carousel-index]");
        if (e3)
          return [parseInt(e3.dataset.carouselIndex || "", 10) || 0, e3];
      }
      return [-1, void 0];
    }, r2 = (t3, e3) => {
      const i3 = document.elementFromPoint(t3, e3);
      return i3 ? n2(i3) : [-1, void 0];
    };
    let [o2, a2] = n2(t2.target);
    if (o2 > -1)
      return;
    const l2 = this[p], c2 = t2.clientX, h2 = t2.clientY;
    let [u2, d2] = r2(c2 - l2, h2), [f2, b2] = r2(c2 + l2, h2);
    d2 && b2 ? (o2 = Math.abs(c2 - d2.getBoundingClientRect().right) < Math.abs(c2 - b2.getBoundingClientRect().left) ? u2 : f2, o2 === s2 && (o2 = o2 === u2 ? f2 : u2)) : d2 ? o2 = u2 : b2 && (o2 = f2), o2 > -1 && i2[o2] && e2.slideTo(o2);
  }
  getShift(t2) {
    var e2;
    const i2 = this, { instance: s2 } = i2, n2 = i2.carousel;
    if (!s2 || !n2)
      return 0;
    const r2 = i2[f], o2 = i2[p], a2 = i2.thumbGap, l2 = i2.thumbExtraGap;
    if (!(null === (e2 = n2.slides[t2]) || void 0 === e2 ? void 0 : e2.el))
      return 0;
    const c2 = 0.5 * (r2 - o2), h2 = s2.pages.length - 1;
    let u2 = s2.getProgress(0), d2 = s2.getProgress(h2), b2 = s2.getProgress(t2, false, true), g2 = 0, m = c2 + l2 + a2;
    const y = u2 < 0 && u2 > -1, v = d2 > 0 && d2 < 1;
    return 0 === t2 ? (g2 = m * Math.abs(u2), v && 1 === u2 && (g2 -= m * Math.abs(d2))) : t2 === h2 ? (g2 = m * Math.abs(d2) * -1, y && -1 === d2 && (g2 += m * Math.abs(u2))) : y || v ? (g2 = -1 * m, g2 += m * Math.abs(u2), g2 += m * (1 - Math.abs(d2))) : g2 = m * b2, g2;
  }
  setProps(t2) {
    var e2;
    const i2 = this;
    if (!i2.isModern)
      return;
    const { instance: s2 } = i2, n2 = i2.carousel;
    if (s2 && n2) {
      const r2 = null === (e2 = n2.slides[t2]) || void 0 === e2 ? void 0 : e2.el;
      if (r2 && r2.childNodes.length) {
        let e3 = c(1 - Math.abs(s2.getProgress(t2))), n3 = c(i2.getShift(t2));
        r2.style.setProperty("--progress", e3 ? e3 + "" : ""), r2.style.setProperty("--shift", n3 + "");
      }
    }
  }
  shiftModern() {
    const t2 = this;
    if (!t2.isModern)
      return;
    const { instance: e2, track: i2 } = t2, s2 = e2.panzoom, n2 = t2.carousel;
    if (!(e2 && i2 && s2 && n2))
      return;
    if (s2.state === a.Init || s2.state === a.Destroy)
      return;
    for (const i3 of e2.slides)
      t2.setProps(i3.index);
    let r2 = (t2[p] + t2.thumbGap) * (n2.slides.length || 0);
    i2.style.setProperty("--width", r2 + "");
  }
  cleanup() {
    const t2 = this;
    t2.carousel && t2.carousel.destroy(), t2.carousel = null, t2.container && t2.container.remove(), t2.container = null, t2.track && t2.track.remove(), t2.track = null, t2.state = u.Init, s(t2.instance.container, t2.cn("hasThumbs"));
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("initSlide", t2.onInitSlide), e2.state === l.Init ? e2.on("initSlides", t2.onInitSlides) : t2.onInitSlides(), e2.on(["change", "Panzoom.afterTransform"], t2.onChange), e2.on("Panzoom.refresh", t2.onRefresh);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("initSlide", t2.onInitSlide), e2.off("initSlides", t2.onInitSlides), e2.off(["change", "Panzoom.afterTransform"], t2.onChange), e2.off("Panzoom.refresh", t2.onRefresh), t2.cleanup();
  }
};
Object.defineProperty(g, "defaults", { enumerable: true, configurable: true, writable: true, value: h });
export {
  u as States,
  g as Thumbs,
  h as defaultOptions
};
//# sourceMappingURL=@fancyapps_ui_dist_carousel_carousel__thumbs__esm__js.js.map
