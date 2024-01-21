import "./chunk-Y2F7D3TJ.js";

// node_modules/@fancyapps/ui/dist/carousel/carousel.esm.js
var t = (t2, e2 = 1e4) => (t2 = parseFloat(t2 + "") || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
var e = function(t2, i2 = void 0) {
  return !(!t2 || t2 === document.body || i2 && t2 === i2) && (function(t3) {
    if (!(t3 && t3 instanceof Element && t3.offsetParent))
      return false;
    const e2 = t3.scrollHeight > t3.clientHeight, i3 = window.getComputedStyle(t3).overflowY, n2 = -1 !== i3.indexOf("hidden"), s2 = -1 !== i3.indexOf("visible");
    return e2 && !n2 && !s2;
  }(t2) ? t2 : e(t2.parentElement, i2));
};
var i = function(t2) {
  var e2 = new DOMParser().parseFromString(t2, "text/html").body;
  if (e2.childElementCount > 1) {
    for (var i2 = document.createElement("div"); e2.firstChild; )
      i2.appendChild(e2.firstChild);
    return i2;
  }
  return e2.firstChild;
};
var n = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3);
var s = (t2, e2, i2) => {
  t2 && n(e2).forEach((e3) => {
    t2.classList.toggle(e3, i2 || false);
  });
};
var o = class {
  constructor(t2) {
    Object.defineProperty(this, "pageX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "time", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.nativePointer = t2, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY, this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.time = Date.now();
  }
};
var a = { passive: false };
var r = class {
  constructor(t2, { start: e2 = () => true, move: i2 = () => {
  }, end: n2 = () => {
  } }) {
    Object.defineProperty(this, "element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: true, configurable: true, writable: true, value: [] }), this.element = t2, this.startCallback = e2, this.moveCallback = i2, this.endCallback = n2;
    for (const t3 of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
      this[t3] = this[t3].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, a), this.element.addEventListener("touchstart", this.onTouchStart, a), this.element.addEventListener("touchmove", this.onMove, a), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t2) {
    if (!t2.buttons || 0 !== t2.button)
      return;
    const e2 = new o(t2);
    this.currentPointers.some((t3) => t3.id === e2.id) || this.triggerPointerStart(e2, t2) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t2) {
    for (const e2 of Array.from(t2.changedTouches || []))
      this.triggerPointerStart(new o(e2), t2);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t2) {
    const e2 = this.currentPointers.slice(), i2 = "changedTouches" in t2 ? Array.from(t2.changedTouches || []).map((t3) => new o(t3)) : [new o(t2)], n2 = [];
    for (const t3 of i2) {
      const e3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
      e3 < 0 || (n2.push(t3), this.currentPointers[e3] = t3);
    }
    n2.length && this.moveCallback(t2, this.currentPointers.slice(), e2);
  }
  onPointerEnd(t2) {
    t2.buttons > 0 && 0 !== t2.button || (this.triggerPointerEnd(t2, new o(t2)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t2) {
    for (const e2 of Array.from(t2.changedTouches || []))
      this.triggerPointerEnd(t2, new o(e2));
  }
  triggerPointerStart(t2, e2) {
    return !!this.startCallback(e2, t2, this.currentPointers.slice()) && (this.currentPointers.push(t2), this.startPointers.push(t2), true);
  }
  triggerPointerEnd(t2, e2) {
    const i2 = this.currentPointers.findIndex((t3) => t3.id === e2.id);
    i2 < 0 || (this.currentPointers.splice(i2, 1), this.startPointers.splice(i2, 1), this.endCallback(t2, e2, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length; ) {
      const t2 = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", { bubbles: true, cancelable: true, clientX: t2.clientX, clientY: t2.clientY }), t2, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, a), this.element.removeEventListener("touchstart", this.onTouchStart, a), this.element.removeEventListener("touchmove", this.onMove, a), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
};
function l(t2, e2) {
  return e2 ? Math.sqrt(Math.pow(e2.clientX - t2.clientX, 2) + Math.pow(e2.clientY - t2.clientY, 2)) : 0;
}
function h(t2, e2) {
  return e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
}
var c = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2);
var d = (t2, ...e2) => {
  const i2 = e2.length;
  for (let n2 = 0; n2 < i2; n2++) {
    const i3 = e2[n2] || {};
    Object.entries(i3).forEach(([e3, i4]) => {
      const n3 = Array.isArray(i4) ? [] : {};
      t2[e3] || Object.assign(t2, { [e3]: n3 }), c(i4) ? Object.assign(t2[e3], d(n3, i4)) : Array.isArray(i4) ? Object.assign(t2, { [e3]: [...i4] }) : Object.assign(t2, { [e3]: i4 });
    });
  }
  return t2;
};
var u = function(t2, e2) {
  return t2.split(".").reduce((t3, e3) => "object" == typeof t3 ? t3[e3] : void 0, e2);
};
var g = class {
  constructor(t2 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t2 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t2);
    for (const t3 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      t3.startsWith("on") && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
  }
  setOptions(t2) {
    this.options = t2 ? d({}, this.constructor.defaults, t2) : {};
    for (const [t3, e2] of Object.entries(this.option("on") || {}))
      this.on(t3, e2);
  }
  option(t2, ...e2) {
    let i2 = u(t2, this.options);
    return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2;
  }
  optionFor(t2, e2, i2, ...n2) {
    let s2 = u(e2, t2);
    var o2;
    "string" != typeof (o2 = s2) || isNaN(o2) || isNaN(parseFloat(o2)) || (s2 = parseFloat(s2)), "true" === s2 && (s2 = true), "false" === s2 && (s2 = false), s2 && "function" == typeof s2 && (s2 = s2.call(this, this, t2, ...n2));
    let a2 = u(e2, this.options);
    return a2 && "function" == typeof a2 ? s2 = a2.call(this, this, t2, ...n2, s2) : void 0 === s2 && (s2 = a2), void 0 === s2 ? i2 : s2;
  }
  cn(t2) {
    const e2 = this.options.classes;
    return e2 && e2[t2] || "";
  }
  localize(t2, e2 = []) {
    t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, e3, i2) => {
      let n2 = "";
      return i2 ? n2 = this.option(`${e3[0] + e3.toLowerCase().substring(1)}.l10n.${i2}`) : e3 && (n2 = this.option(`l10n.${e3}`)), n2 || (n2 = t3), n2;
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
Object.defineProperty(g, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.33" }), Object.defineProperty(g, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var p = class extends g {
  constructor(t2 = {}) {
    super(t2), Object.defineProperty(this, "plugins", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  attachPlugins(t2 = {}) {
    const e2 = /* @__PURE__ */ new Map();
    for (const [i2, n2] of Object.entries(t2)) {
      const t3 = this.option(i2), s2 = this.plugins[i2];
      s2 || false === t3 ? s2 && false === t3 && (s2.detach(), delete this.plugins[i2]) : e2.set(i2, new n2(this, t3 || {}));
    }
    for (const [t3, i2] of e2)
      this.plugins[t3] = i2, i2.attach();
  }
  detachPlugins(t2) {
    t2 = t2 || Object.keys(this.plugins);
    for (const e2 of t2) {
      const t3 = this.plugins[e2];
      t3 && t3.detach(), delete this.plugins[e2];
    }
    return this.emit("detachPlugins"), this;
  }
};
var f;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Error = 1] = "Error", t2[t2.Ready = 2] = "Ready", t2[t2.Panning = 3] = "Panning", t2[t2.Mousemove = 4] = "Mousemove", t2[t2.Destroy = 5] = "Destroy";
}(f || (f = {}));
var m = ["a", "b", "c", "d", "e", "f"];
var b = { content: null, width: "auto", height: "auto", panMode: "drag", touch: true, dragMinThreshold: 3, lockAxis: false, mouseMoveFactor: 1, mouseMoveFriction: 0.12, zoom: true, pinchToZoom: true, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: 0.25, dragFriction: 0.35, decelFriction: 0.05, click: "toggleZoom", dblClick: false, wheel: "zoom", wheelLimit: 7, spinner: true, bounds: "auto", infinite: false, rubberband: true, bounce: true, maxVelocity: 75, transformParent: false, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" } };
var v = '<circle cx="25" cy="25" r="20"></circle>';
var y = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + v + v + "</svg></div>";
var w = (t2) => t2 && null !== t2 && t2 instanceof Element && "nodeType" in t2;
var x = (t2, e2) => {
  t2 && n(e2).forEach((e3) => {
    t2.classList.remove(e3);
  });
};
var P = (t2, e2) => {
  t2 && n(e2).forEach((e3) => {
    t2.classList.add(e3);
  });
};
var T = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
var S = 1e5;
var M = 1e4;
var O = "mousemove";
var E = "drag";
var k = "content";
var z = null;
var L = null;
var D = class _D extends p {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === L && (L = window.matchMedia("(hover: none)").matches), L;
  }
  get isMobile() {
    return null === z && (z = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), z;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? E : O;
  }
  get panOnlyZoomed() {
    const t2 = this.options.panOnlyZoomed;
    return "auto" === t2 ? this.isTouchDevice : t2;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const { a: t2, b: e2 } = this.current;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get targetScale() {
    const { a: t2, b: e2 } = this.target;
    return Math.sqrt(t2 * t2 + e2 * e2) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const { contentRect: t2 } = this;
    return t2.fullWidth / t2.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const { containerRect: t2, contentRect: e2 } = this, i2 = Math.max(t2.height / e2.fitHeight, t2.width / e2.fitWidth) || 1;
    return Math.min(this.fullScale, i2);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t2 = this.content;
    return !!(t2 && t2 instanceof HTMLImageElement) && !t2.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY)
      return false;
    for (const t2 of m) {
      const e2 = "e" == t2 || "f" === t2 ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t2] - this.current[t2]) > e2)
        return false;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t2, e2 = {}, n2 = {}) {
    var s2;
    if (super(e2), Object.defineProperty(this, "pointerTracker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "resizeObserver", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "updateTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "rAF", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isTicking", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ignoreBounds", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "clicks", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "trackingPoints", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "cwd", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "pmme", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "friction", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: f.Init }), Object.defineProperty(this, "isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "content", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "spinner", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "containerRect", { enumerable: true, configurable: true, writable: true, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(this, "contentRect", { enumerable: true, configurable: true, writable: true, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(this, "dragStart", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(this, "dragOffset", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(this, "current", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, T) }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, T) }), Object.defineProperty(this, "velocity", { enumerable: true, configurable: true, writable: true, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(this, "lockedAxis", { enumerable: true, configurable: true, writable: true, value: false }), !t2)
      throw new Error("Container Element Not Found");
    this.container = t2, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, _D.Plugins), n2)), this.emit("attachPlugins"), this.emit("init");
    const o2 = this.content;
    if (o2.addEventListener("load", this.onLoad), o2.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t2.classList.add(this.cn("isLoading"));
        const e3 = i(y);
        !t2.contains(o2) || o2.parentElement instanceof HTMLPictureElement ? this.spinner = t2.appendChild(e3) : this.spinner = (null === (s2 = o2.parentElement) || void 0 === s2 ? void 0 : s2.insertBefore(e3, o2)) || null;
      }
      this.emit("beforeLoad");
    } else
      queueMicrotask(() => {
        this.enable();
      });
  }
  initContent() {
    const { container: t2 } = this, e2 = this.cn(k);
    let i2 = this.option(k) || t2.querySelector(`.${e2}`);
    if (i2 || (i2 = t2.querySelector("img,picture") || t2.firstElementChild, i2 && P(i2, e2)), i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")), !i2)
      throw new Error("No content found");
    this.content = i2;
  }
  onLoad() {
    const { spinner: t2, container: e2, state: i2 } = this;
    t2 && (t2.remove(), this.spinner = null), this.option("spinner") && e2.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i2 === f.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== f.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = f.Error, this.emit("error"));
  }
  getNextScale(t2) {
    const { fullScale: e2, targetScale: i2, coverScale: n2, maxScale: s2, minScale: o2 } = this;
    let a2 = o2;
    switch (t2) {
      case "toggleMax":
        a2 = i2 - o2 < 0.5 * (s2 - o2) ? s2 : o2;
        break;
      case "toggleCover":
        a2 = i2 - o2 < 0.5 * (n2 - o2) ? n2 : o2;
        break;
      case "toggleZoom":
        a2 = i2 - o2 < 0.5 * (e2 - o2) ? e2 : o2;
        break;
      case "iterateZoom":
        let t3 = [1, e2, s2].sort((t4, e3) => t4 - e3), r2 = t3.findIndex((t4) => t4 > i2 + 1e-5);
        a2 = t3[r2] || 1;
    }
    return a2;
  }
  attachObserver() {
    var t2;
    const e2 = () => {
      const { container: t3, containerRect: e3 } = this;
      return Math.abs(e3.width - t3.getBoundingClientRect().width) > 0.1 || Math.abs(e3.height - t3.getBoundingClientRect().height) > 0.1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e2() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e2() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.observe(this.container);
  }
  detachObserver() {
    var t2;
    null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect();
  }
  attachEvents() {
    const { container: t2 } = this;
    t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new r(t2, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t2;
    const { container: e2 } = this;
    e2.removeEventListener("click", this.onClick, { passive: false, capture: false }), e2.removeEventListener("wheel", this.onWheel, { passive: false }), null === (t2 = this.pointerTracker) || void 0 === t2 || t2.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t2 = this.friction, e2 = this.option("maxVelocity");
    for (const i2 of m)
      t2 ? (this.velocity[i2] *= 1 - t2, e2 && !this.isScaling && (this.velocity[i2] = Math.max(Math.min(this.velocity[i2], e2), -1 * e2)), this.current[i2] += this.velocity[i2]) : this.current[i2] = this.target[i2];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t2 of m)
      "e" === t2 && this.isBouncingX || "f" === t2 && this.isBouncingY || (this.velocity[t2] = (1 / (1 - this.friction) - 1) * (this.target[t2] - this.current[t2]));
  }
  checkBounds(t2 = 0, e2 = 0) {
    const { current: i2 } = this, n2 = i2.e + t2, s2 = i2.f + e2, o2 = this.getBounds(), { x: a2, y: r2 } = o2, l2 = a2.min, h2 = a2.max, c2 = r2.min, d2 = r2.max;
    let u2 = 0, g2 = 0;
    return l2 !== 1 / 0 && n2 < l2 ? u2 = l2 - n2 : h2 !== 1 / 0 && n2 > h2 && (u2 = h2 - n2), c2 !== 1 / 0 && s2 < c2 ? g2 = c2 - s2 : d2 !== 1 / 0 && s2 > d2 && (g2 = d2 - s2), Math.abs(u2) < 1e-4 && (u2 = 0), Math.abs(g2) < 1e-4 && (g2 = 0), Object.assign(Object.assign({}, o2), { xDiff: u2, yDiff: g2, inBounds: !u2 && !g2 });
  }
  clampTargetBounds() {
    const { target: t2 } = this, { x: e2, y: i2 } = this.getBounds();
    e2.min !== 1 / 0 && (t2.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (t2.e = Math.min(t2.e, e2.max)), i2.min !== 1 / 0 && (t2.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (t2.f = Math.min(t2.f, i2.max));
  }
  calculateContentDim(t2 = this.current) {
    const { content: e2, contentRect: i2 } = this, { fitWidth: n2, fitHeight: s2, fullWidth: o2, fullHeight: a2 } = i2;
    let r2 = o2, l2 = a2;
    if (this.option("zoom") || 0 !== this.angle) {
      const i3 = !(e2 instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e2).maxWidth || "none" === window.getComputedStyle(e2).maxHeight), h2 = i3 ? o2 : n2, c2 = i3 ? a2 : s2, d2 = this.getMatrix(t2), u2 = new DOMPoint(0, 0).matrixTransform(d2), g2 = new DOMPoint(0 + h2, 0).matrixTransform(d2), p2 = new DOMPoint(0 + h2, 0 + c2).matrixTransform(d2), f2 = new DOMPoint(0, 0 + c2).matrixTransform(d2), m2 = Math.abs(p2.x - u2.x), b2 = Math.abs(p2.y - u2.y), v2 = Math.abs(f2.x - g2.x), y2 = Math.abs(f2.y - g2.y);
      r2 = Math.max(m2, v2), l2 = Math.max(b2, y2);
    }
    return { contentWidth: r2, contentHeight: l2 };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale)
      return this.isBouncingX = false, void (this.isBouncingY = false);
    const { target: t2 } = this, { x: e2, y: i2, xDiff: n2, yDiff: s2 } = this.checkBounds();
    const o2 = this.option("maxVelocity");
    let a2 = this.velocity.e, r2 = this.velocity.f;
    0 !== n2 ? (this.isBouncingX = true, n2 * a2 <= 0 ? a2 += 0.14 * n2 : (a2 = 0.14 * n2, e2.min !== 1 / 0 && (this.target.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (this.target.e = Math.min(t2.e, e2.max))), o2 && (a2 = Math.max(Math.min(a2, o2), -1 * o2))) : this.isBouncingX = false, 0 !== s2 ? (this.isBouncingY = true, s2 * r2 <= 0 ? r2 += 0.14 * s2 : (r2 = 0.14 * s2, i2.min !== 1 / 0 && (this.target.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (this.target.f = Math.min(t2.f, i2.max))), o2 && (r2 = Math.max(Math.min(r2, o2), -1 * o2))) : this.isBouncingY = false, this.isBouncingX && (this.velocity.e = a2), this.isBouncingY && (this.velocity.f = r2);
  }
  enable() {
    const { content: t2 } = this, e2 = new DOMMatrixReadOnly(window.getComputedStyle(t2).transform);
    for (const t3 of m)
      this.current[t3] = this.target[t3] = e2[t3];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = f.Ready, this.emit("ready");
  }
  onClick(t2) {
    var e2;
    "click" === t2.type && 0 === t2.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e2 = this.pointerTracker) || void 0 === e2 || e2.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i2 = t2.target;
    if (!i2 || t2.defaultPrevented)
      return;
    if (i2.hasAttribute("disabled"))
      return t2.preventDefault(), void t2.stopPropagation();
    if ((() => {
      const t3 = window.getSelection();
      return t3 && "Range" === t3.type;
    })() && !i2.closest("button"))
      return;
    const n2 = i2.closest("[data-panzoom-action]"), s2 = i2.closest("[data-panzoom-change]"), o2 = n2 || s2, a2 = o2 && w(o2) ? o2.dataset : null;
    if (a2) {
      const e3 = a2.panzoomChange, i3 = a2.panzoomAction;
      if ((e3 || i3) && t2.preventDefault(), e3) {
        let t3 = {};
        try {
          t3 = JSON.parse(e3);
        } catch (t4) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t3);
      }
      if (i3)
        return void (this[i3] && this[i3]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
      return t2.preventDefault(), void t2.stopPropagation();
    if (i2.closest("[data-fancybox]"))
      return;
    const r2 = this.content.getBoundingClientRect(), l2 = this.dragStart;
    if (l2.time && !this.canZoomOut() && (Math.abs(r2.x - l2.x) > 2 || Math.abs(r2.y - l2.y) > 2))
      return;
    this.dragStart.time = 0;
    const h2 = (e3) => {
      this.option("zoom", t2) && e3 && "string" == typeof e3 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e3) && "function" == typeof this[e3] && (t2.preventDefault(), this[e3]({ event: t2 }));
    }, c2 = this.option("click", t2), d2 = this.option("dblClick", t2);
    d2 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t2), !t2.defaultPrevented && c2 && h2(c2)) : (this.emit("dblClick", t2), t2.defaultPrevented || h2(d2)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t2), !t2.defaultPrevented && c2 && h2(c2));
  }
  addTrackingPoint(t2) {
    const e2 = this.trackingPoints.filter((t3) => t3.time > Date.now() - 100);
    e2.push(t2), this.trackingPoints = e2;
  }
  onPointerDown(t2, e2, i2) {
    var n2;
    if (false === this.option("touch", t2))
      return false;
    this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];
    const s2 = this.content.getBoundingClientRect();
    if (this.dragStart = { x: s2.x, y: s2.y, top: s2.top, left: s2.left, time: Date.now() }, this.clickTimer)
      return false;
    if (this.panMode === O && this.targetScale > 1)
      return t2.preventDefault(), t2.stopPropagation(), false;
    const o2 = t2.composedPath()[0];
    if (!i2.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o2.nodeName) || o2.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))
        return false;
      null === (n2 = window.getSelection()) || void 0 === n2 || n2.removeAllRanges();
    }
    if ("mousedown" === t2.type)
      ["A", "BUTTON"].includes(o2.nodeName) || t2.preventDefault();
    else if (Math.abs(this.velocity.a) > 0.3)
      return false;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = true, this.addTrackingPoint(e2), this.emit("touchStart", t2)), true;
  }
  onPointerMove(i2, n2, s2) {
    if (false === this.option("touch", i2))
      return;
    if (!this.isDragging)
      return;
    if (n2.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale))
      return;
    if (this.emit("touchMove", i2), i2.defaultPrevented)
      return;
    this.addTrackingPoint(n2[0]);
    const { content: o2 } = this, a2 = h(s2[0], s2[1]), r2 = h(n2[0], n2[1]);
    let c2 = 0, d2 = 0;
    if (n2.length > 1) {
      const t2 = o2.getBoundingClientRect();
      c2 = a2.clientX - t2.left - 0.5 * t2.width, d2 = a2.clientY - t2.top - 0.5 * t2.height;
    }
    const u2 = l(s2[0], s2[1]), g2 = l(n2[0], n2[1]);
    let p2 = u2 ? g2 / u2 : 1, f2 = r2.clientX - a2.clientX, m2 = r2.clientY - a2.clientY;
    this.dragOffset.x += f2, this.dragOffset.y += m2, this.dragOffset.time = Date.now() - this.dragStart.time;
    let b2 = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (b2 && !this.lockedAxis)
      if ("xy" === b2 || "y" === b2 || "touchmove" === i2.type) {
        if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
          return void i2.preventDefault();
        const t2 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
        this.lockedAxis = t2 > 45 && t2 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, f2 = 0, m2 = 0;
      } else
        this.lockedAxis = b2;
    if (e(i2.target, this.content) && (b2 = "x", this.dragOffset.y = 0), b2 && "xy" !== b2 && this.lockedAxis !== b2 && t(this.targetScale) === t(this.minScale))
      return;
    i2.cancelable && i2.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const v2 = this.checkBounds(f2, m2);
    this.option("rubberband") ? ("x" !== this.isInfinite && (v2.xDiff > 0 && f2 < 0 || v2.xDiff < 0 && f2 > 0) && (f2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitWidth * v2.xDiff))), "y" !== this.isInfinite && (v2.yDiff > 0 && m2 < 0 || v2.yDiff < 0 && m2 > 0) && (m2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitHeight * v2.yDiff)))) : (v2.xDiff && (f2 = 0), v2.yDiff && (m2 = 0));
    const y2 = this.targetScale, w2 = this.minScale, x2 = this.maxScale;
    y2 < 0.5 * w2 && (p2 = Math.max(p2, w2)), y2 > 1.5 * x2 && (p2 = Math.min(p2, x2)), "y" === this.lockedAxis && t(y2) === t(w2) && (f2 = 0), "x" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0), this.applyChange({ originX: c2, originY: d2, panX: f2, panY: m2, scale: p2, friction: this.option("dragFriction"), ignoreBounds: true });
  }
  onPointerUp(t2, i2, n2) {
    if (n2.length)
      return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(i2), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), e(t2.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t2), this.isDragging = false, this.lockedAxis = false, this.state !== f.Destroy && (t2.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e2;
    const i2 = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const t2 of m)
      this.velocity[t2] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, x(this.container, "is-scaling"), x(this.container, "is-animating"), this.isTicking = false;
    const { trackingPoints: n2 } = this, s2 = n2[0], o2 = n2[n2.length - 1];
    let a2 = 0, r2 = 0, l2 = 0;
    o2 && s2 && (a2 = o2.clientX - s2.clientX, r2 = o2.clientY - s2.clientY, l2 = o2.time - s2.time);
    const h2 = (null === (e2 = window.visualViewport) || void 0 === e2 ? void 0 : e2.scale) || 1;
    1 !== h2 && (a2 *= h2, r2 *= h2);
    let c2 = 0, d2 = 0, u2 = 0, g2 = 0, p2 = this.option("decelFriction");
    const f2 = this.targetScale;
    if (l2 > 0) {
      u2 = Math.abs(a2) > 3 ? a2 / (l2 / 30) : 0, g2 = Math.abs(r2) > 3 ? r2 / (l2 / 30) : 0;
      const t2 = this.option("maxVelocity");
      t2 && (u2 = Math.max(Math.min(u2, t2), -1 * t2), g2 = Math.max(Math.min(g2, t2), -1 * t2));
    }
    u2 && (c2 = u2 / (1 / (1 - p2) - 1)), g2 && (d2 = g2 / (1 / (1 - p2) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(f2) === this.minScale) && (c2 = u2 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(f2) === this.minScale) && (d2 = g2 = 0);
    const b2 = this.dragOffset.x, v2 = this.dragOffset.y, y2 = this.option("dragMinThreshold") || 0;
    Math.abs(b2) < y2 && Math.abs(v2) < y2 && (c2 = d2 = 0, u2 = g2 = 0), (this.option("zoom") && (f2 < this.minScale - 1e-5 || f2 > this.maxScale + 1e-5) || i2 && !c2 && !d2) && (p2 = 0.35), this.applyChange({ panX: c2, panY: d2, friction: p2 }), this.emit("decel", u2, g2, b2, v2);
  }
  onWheel(t2) {
    var e2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    });
    const i2 = Math.max(-1, Math.min(1, e2));
    if (this.emit("wheel", t2, i2), this.panMode === O)
      return;
    if (t2.defaultPrevented)
      return;
    const n2 = this.option("wheel");
    "pan" === n2 ? (t2.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({ panX: 2 * -t2.deltaX, panY: 2 * -t2.deltaY, bounce: false })) : "zoom" === n2 && false !== this.option("zoom") && this.zoomWithWheel(t2);
  }
  onMouseMove(t2) {
    this.panWithMouse(t2);
  }
  onKeydown(t2) {
    "Escape" === t2.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const { current: e2, target: i2, content: n2, contentRect: s2 } = this, o2 = Object.assign({}, T);
    for (const n3 of m) {
      const s3 = "e" == n3 || "f" === n3 ? M : S;
      o2[n3] = t(e2[n3], s3), Math.abs(i2[n3] - e2[n3]) < ("e" == n3 || "f" === n3 ? 0.51 : 1e-3) && (e2[n3] = i2[n3]);
    }
    let { a: a2, b: r2, c: l2, d: h2, e: c2, f: d2 } = o2, u2 = `matrix(${a2}, ${r2}, ${l2}, ${h2}, ${c2}, ${d2})`, g2 = n2.parentElement instanceof HTMLPictureElement ? n2.parentElement : n2;
    if (this.option("transformParent") && (g2 = g2.parentElement || g2), g2.style.transform === u2)
      return;
    g2.style.transform = u2;
    const { contentWidth: p2, contentHeight: f2 } = this.calculateContentDim();
    s2.width = p2, s2.height = f2, this.emit("afterTransform");
  }
  updateMetrics(e2 = false) {
    var i2;
    if (!this || this.state === f.Destroy)
      return;
    if (this.isContentLoading)
      return;
    const n2 = Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1), { container: s2, content: o2 } = this, a2 = o2 instanceof HTMLImageElement, r2 = s2.getBoundingClientRect(), l2 = getComputedStyle(this.container);
    let h2 = r2.width * n2, c2 = r2.height * n2;
    const d2 = parseFloat(l2.paddingTop) + parseFloat(l2.paddingBottom), u2 = h2 - (parseFloat(l2.paddingLeft) + parseFloat(l2.paddingRight)), g2 = c2 - d2;
    this.containerRect = { width: h2, height: c2, innerWidth: u2, innerHeight: g2 };
    let p2 = this.option("width") || "auto", m2 = this.option("height") || "auto";
    "auto" === p2 && (p2 = parseFloat(o2.dataset.width || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2 instanceof SVGElement ? t2.width.baseVal.value : Math.max(t2.offsetWidth, t2.scrollWidth), e3 || 0;
    })(o2)), "auto" === m2 && (m2 = parseFloat(o2.dataset.height || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2 instanceof SVGElement ? t2.height.baseVal.value : Math.max(t2.offsetHeight, t2.scrollHeight), e3 || 0;
    })(o2));
    let b2 = o2.parentElement instanceof HTMLPictureElement ? o2.parentElement : o2;
    this.option("transformParent") && (b2 = b2.parentElement || b2);
    const v2 = b2.getAttribute("style") || "";
    b2.style.setProperty("transform", "none", "important"), a2 && (b2.style.width = "", b2.style.height = ""), b2.offsetHeight;
    const y2 = o2.getBoundingClientRect();
    let w2 = y2.width * n2, x2 = y2.height * n2, P2 = 0, T2 = 0;
    a2 && (Math.abs(p2 - w2) > 1 || Math.abs(m2 - x2) > 1) && ({ width: w2, height: x2, top: P2, left: T2 } = ((t2, e3, i3, n3) => {
      const s3 = i3 / n3;
      return s3 > t2 / e3 ? (i3 = t2, n3 = t2 / s3) : (i3 = e3 * s3, n3 = e3), { width: i3, height: n3, top: 0.5 * (e3 - n3), left: 0.5 * (t2 - i3) };
    })(w2, x2, p2, m2)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: y2.top - r2.top + P2, bottom: r2.bottom - y2.bottom + P2, left: y2.left - r2.left + T2, right: r2.right - y2.right + T2, fitWidth: w2, fitHeight: x2, width: w2, height: x2, fullWidth: p2, fullHeight: m2 }), b2.style.cssText = v2, a2 && (b2.style.width = `${w2}px`, b2.style.height = `${x2}px`), this.setTransform(), true !== e2 && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === f.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const { contentWidth: e2, contentHeight: i2 } = this.calculateContentDim(this.target), { targetScale: n2, lockedAxis: s2 } = this, { fitWidth: o2, fitHeight: a2 } = this.contentRect;
    let r2 = 0, l2 = 0, h2 = 0, c2 = 0;
    const d2 = this.option("infinite");
    if (true === d2 || s2 && d2 === s2)
      r2 = -1 / 0, h2 = 1 / 0, l2 = -1 / 0, c2 = 1 / 0;
    else {
      let { containerRect: s3, contentRect: d3 } = this, u2 = t(o2 * n2, M), g2 = t(a2 * n2, M), { innerWidth: p2, innerHeight: f2 } = s3;
      if (s3.width === u2 && (p2 = s3.width), s3.width === g2 && (f2 = s3.height), e2 > p2) {
        h2 = 0.5 * (e2 - p2), r2 = -1 * h2;
        let t2 = 0.5 * (d3.right - d3.left);
        r2 += t2, h2 += t2;
      }
      if (o2 > p2 && e2 < p2 && (r2 -= 0.5 * (o2 - p2), h2 -= 0.5 * (o2 - p2)), i2 > f2) {
        c2 = 0.5 * (i2 - f2), l2 = -1 * c2;
        let t2 = 0.5 * (d3.bottom - d3.top);
        l2 += t2, c2 += t2;
      }
      a2 > f2 && i2 < f2 && (r2 -= 0.5 * (a2 - f2), h2 -= 0.5 * (a2 - f2));
    }
    return { x: { min: r2, max: h2 }, y: { min: l2, max: c2 } };
  }
  getBounds() {
    const t2 = this.option("bounds");
    return "auto" !== t2 ? t2 : this.calculateBounds();
  }
  updateControls() {
    const e2 = this, i2 = e2.container, { panMode: n2, contentRect: o2, targetScale: a2, minScale: r2 } = e2;
    let l2 = r2, h2 = e2.option("click") || false;
    h2 && (l2 = e2.getNextScale(h2));
    let c2 = e2.canZoomIn(), d2 = e2.canZoomOut(), u2 = n2 === E && !!this.option("touch"), g2 = d2 && u2;
    if (u2 && (t(a2) < t(r2) && !this.panOnlyZoomed && (g2 = true), (t(o2.width, 1) > t(o2.fitWidth, 1) || t(o2.height, 1) > t(o2.fitHeight, 1)) && (g2 = true)), t(o2.width * a2, 1) < t(o2.fitWidth, 1) && (g2 = false), n2 === O && (g2 = false), s(i2, this.cn("isDraggable"), g2), !this.option("zoom"))
      return;
    let p2 = c2 && t(l2) > t(a2), f2 = !p2 && !g2 && d2 && t(l2) < t(a2);
    s(i2, this.cn("canZoomIn"), p2), s(i2, this.cn("canZoomOut"), f2);
    for (const t2 of i2.querySelectorAll("[data-panzoom-action]")) {
      let e3 = false, i3 = false;
      switch (t2.dataset.panzoomAction) {
        case "zoomIn":
          c2 ? e3 = true : i3 = true;
          break;
        case "zoomOut":
          d2 ? e3 = true : i3 = true;
          break;
        case "toggleZoom":
        case "iterateZoom":
          c2 || d2 ? e3 = true : i3 = true;
          const n3 = t2.querySelector("g");
          n3 && (n3.style.display = c2 ? "" : "none");
      }
      e3 ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex")) : i3 && (t2.setAttribute("disabled", ""), t2.setAttribute("tabindex", "-1"));
    }
  }
  panTo({ x: t2 = this.target.e, y: e2 = this.target.f, scale: i2 = this.targetScale, friction: n2 = this.option("friction"), angle: s2 = 0, originX: o2 = 0, originY: a2 = 0, flipX: r2 = false, flipY: l2 = false, ignoreBounds: h2 = false }) {
    this.state !== f.Destroy && this.applyChange({ panX: t2 - this.target.e, panY: e2 - this.target.f, scale: i2 / this.targetScale, angle: s2, originX: o2, originY: a2, friction: n2, flipX: r2, flipY: l2, ignoreBounds: h2 });
  }
  applyChange({ panX: e2 = 0, panY: i2 = 0, scale: n2 = 1, angle: s2 = 0, originX: o2 = -this.current.e, originY: a2 = -this.current.f, friction: r2 = this.option("friction"), flipX: l2 = false, flipY: h2 = false, ignoreBounds: c2 = false, bounce: d2 = this.option("bounce") }) {
    const u2 = this.state;
    if (u2 === f.Destroy)
      return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r2 || 0, this.ignoreBounds = c2;
    const { current: g2 } = this, p2 = g2.e, b2 = g2.f, v2 = this.getMatrix(this.target);
    let y2 = new DOMMatrix().translate(p2, b2).translate(o2, a2).translate(e2, i2);
    if (this.option("zoom")) {
      if (!c2) {
        const t2 = this.targetScale, e3 = this.minScale, i3 = this.maxScale;
        t2 * n2 < e3 && (n2 = e3 / t2), t2 * n2 > i3 && (n2 = i3 / t2);
      }
      y2 = y2.scale(n2);
    }
    y2 = y2.translate(-o2, -a2).translate(-p2, -b2).multiply(v2), s2 && (y2 = y2.rotate(s2)), l2 && (y2 = y2.scale(-1, 1)), h2 && (y2 = y2.scale(1, -1));
    for (const e3 of m)
      "e" !== e3 && "f" !== e3 && (y2[e3] > this.minScale + 1e-5 || y2[e3] < this.minScale - 1e-5) ? this.target[e3] = y2[e3] : this.target[e3] = t(y2[e3], M);
    (this.targetScale < this.scale || Math.abs(n2 - 1) > 0.1 || this.panMode === O || false === d2) && !c2 && this.clampTargetBounds(), u2 === f.Init ? this.animate() : this.isResting || (this.state = f.Panning, this.requestTick());
  }
  stop(t2 = false) {
    if (this.state === f.Init || this.state === f.Destroy)
      return;
    const e2 = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const e3 of m)
      this.velocity[e3] = 0, "current" === t2 ? this.current[e3] = this.target[e3] : "target" === t2 && (this.target[e3] = this.current[e3]);
    this.setTransform(), x(this.container, "is-scaling"), x(this.container, "is-animating"), this.isTicking = false, this.state = f.Ready, e2 && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = true, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e2, i2 = this.option("mouseMoveFriction")) {
    if (this.pmme = e2, this.panMode !== O || !e2)
      return;
    if (t(this.targetScale) <= t(this.minScale))
      return;
    this.emit("mouseMove", e2);
    const { container: n2, containerRect: s2, contentRect: o2 } = this, a2 = s2.width, r2 = s2.height, l2 = n2.getBoundingClientRect(), h2 = (e2.clientX || 0) - l2.left, c2 = (e2.clientY || 0) - l2.top;
    let { contentWidth: d2, contentHeight: u2 } = this.calculateContentDim(this.target);
    const g2 = this.option("mouseMoveFactor");
    g2 > 1 && (d2 !== a2 && (d2 *= g2), u2 !== r2 && (u2 *= g2));
    let p2 = 0.5 * (d2 - a2) - h2 / a2 * 100 / 100 * (d2 - a2);
    p2 += 0.5 * (o2.right - o2.left);
    let f2 = 0.5 * (u2 - r2) - c2 / r2 * 100 / 100 * (u2 - r2);
    f2 += 0.5 * (o2.bottom - o2.top), this.applyChange({ panX: p2 - this.target.e, panY: f2 - this.target.f, friction: i2 });
  }
  zoomWithWheel(e2) {
    if (this.state === f.Destroy || this.state === f.Init)
      return;
    const i2 = Date.now();
    if (i2 - this.pwt < 45)
      return void e2.preventDefault();
    this.pwt = i2;
    var n2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(function(t2, e3) {
      return Math.abs(e3) > Math.abs(t2) ? e3 : t2;
    });
    const s2 = Math.max(-1, Math.min(1, n2)), { targetScale: o2, maxScale: a2, minScale: r2 } = this;
    let l2 = o2 * (100 + 45 * s2) / 100;
    t(l2) < t(r2) && t(o2) <= t(r2) ? (this.cwd += Math.abs(s2), l2 = r2) : t(l2) > t(a2) && t(o2) >= t(a2) ? (this.cwd += Math.abs(s2), l2 = a2) : (this.cwd = 0, l2 = Math.max(Math.min(l2, a2), r2)), this.cwd > this.option("wheelLimit") || (e2.preventDefault(), t(l2) !== t(o2) && this.zoomTo(l2, { event: e2 }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn(t2 = 1.25, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomOut(t2 = 0.8, e2) {
    this.zoomTo(this.targetScale * t2, e2);
  }
  zoomToFit(t2) {
    this.zoomTo("fit", t2);
  }
  zoomToCover(t2) {
    this.zoomTo("cover", t2);
  }
  zoomToFull(t2) {
    this.zoomTo("full", t2);
  }
  zoomToMax(t2) {
    this.zoomTo("max", t2);
  }
  toggleZoom(t2) {
    this.zoomTo(this.getNextScale("toggleZoom"), t2);
  }
  toggleMax(t2) {
    this.zoomTo(this.getNextScale("toggleMax"), t2);
  }
  toggleCover(t2) {
    this.zoomTo(this.getNextScale("toggleCover"), t2);
  }
  iterateZoom(t2) {
    this.zoomTo("next", t2);
  }
  zoomTo(t2 = 1, { friction: e2 = "auto", originX: i2 = "auto", originY: n2 = "auto", event: s2 } = {}) {
    if (this.isContentLoading || this.state === f.Destroy)
      return;
    const { targetScale: o2, fullScale: a2, maxScale: r2, coverScale: l2 } = this;
    if (this.stop(), this.panMode === O && (s2 = this.pmme || s2), s2 || "auto" === i2 || "auto" === n2) {
      const t3 = this.content.getBoundingClientRect(), e3 = this.container.getBoundingClientRect(), o3 = s2 ? s2.clientX : e3.left + 0.5 * e3.width, a3 = s2 ? s2.clientY : e3.top + 0.5 * e3.height;
      i2 = o3 - t3.left - 0.5 * t3.width, n2 = a3 - t3.top - 0.5 * t3.height;
    }
    let h2 = 1;
    "number" == typeof t2 ? h2 = t2 : "full" === t2 ? h2 = a2 : "cover" === t2 ? h2 = l2 : "max" === t2 ? h2 = r2 : "fit" === t2 ? h2 = 1 : "next" === t2 && (h2 = this.getNextScale("iterateZoom")), h2 = h2 / o2 || 1, e2 = "auto" === e2 ? h2 > 1 ? 0.15 : 0.25 : e2, this.applyChange({ scale: h2, originX: i2, originY: n2, friction: e2 }), s2 && this.panMode === O && this.panWithMouse(s2, e2);
  }
  rotateCCW() {
    this.applyChange({ angle: -90 });
  }
  rotateCW() {
    this.applyChange({ angle: 90 });
  }
  flipX() {
    this.applyChange({ flipX: true });
  }
  flipY() {
    this.applyChange({ flipY: true });
  }
  fitX() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.height - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.width / e2.fitWidth / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  fitY() {
    this.stop("target");
    const { containerRect: t2, contentRect: e2, target: i2 } = this;
    this.applyChange({ panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e, panY: 0.5 * t2.innerHeight - (e2.top + 0.5 * e2.fitHeight) - i2.f, scale: t2.height / e2.fitHeight / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  toggleFS() {
    const { container: t2 } = this, e2 = this.cn("inFullscreen"), i2 = this.cn("htmlHasFullscreen");
    t2.classList.toggle(e2);
    const n2 = t2.classList.contains(e2);
    n2 ? (document.documentElement.classList.add(i2), document.addEventListener("keydown", this.onKeydown, true)) : (document.documentElement.classList.remove(i2), document.removeEventListener("keydown", this.onKeydown, true)), this.updateMetrics(), this.emit(n2 ? "enterFS" : "exitFS");
  }
  getMatrix(t2 = this.current) {
    const { a: e2, b: i2, c: n2, d: s2, e: o2, f: a2 } = t2;
    return new DOMMatrix([e2, i2, n2, s2, o2, a2]);
  }
  reset(t2) {
    if (this.state !== f.Init && this.state !== f.Destroy) {
      this.stop("current");
      for (const t3 of m)
        this.target[t3] = T[t3];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t2 ? this.option("friction") : t2, this.state = f.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = f.Destroy, this.detachEvents(), this.detachObserver();
    const { container: t2, content: e2 } = this, i2 = this.option("classes") || {};
    for (const e3 of Object.values(i2))
      t2.classList.remove(e3 + "");
    e2 && (e2.removeEventListener("load", this.onLoad), e2.removeEventListener("error", this.onError)), this.detachPlugins();
  }
};
Object.defineProperty(D, "defaults", { enumerable: true, configurable: true, writable: true, value: b }), Object.defineProperty(D, "Plugins", { enumerable: true, configurable: true, writable: true, value: {} });
var R = function(t2, e2) {
  let i2 = true;
  return (...n2) => {
    i2 && (i2 = false, t2(...n2), setTimeout(() => {
      i2 = true;
    }, e2));
  };
};
var C = (t2, e2) => {
  let i2 = [];
  return t2.childNodes.forEach((t3) => {
    t3.nodeType !== Node.ELEMENT_NODE || e2 && !t3.matches(e2) || i2.push(t3);
  }), i2;
};
var A = { viewport: null, track: null, enabled: true, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: 0.12, Panzoom: { decelFriction: 0.12 }, center: true, infinite: true, fill: true, dragFree: false, adaptiveHeight: false, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
var j;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Destroy = 2] = "Destroy";
}(j || (j = {}));
var F = (t2) => {
  if ("string" == typeof t2 || t2 instanceof HTMLElement)
    t2 = { html: t2 };
  else {
    const e2 = t2.thumb;
    void 0 !== e2 && ("string" == typeof e2 && (t2.thumbSrc = e2), e2 instanceof HTMLImageElement && (t2.thumbEl = e2, t2.thumbElSrc = e2.src, t2.thumbSrc = e2.src), delete t2.thumb);
  }
  return Object.assign({ html: "", el: null, isDom: false, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: false }, t2);
};
var I = (t2 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t2);
var B = class extends g {
  constructor(t2, e2) {
    super(e2), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t2 });
  }
  attach() {
  }
  detach() {
  }
};
var H = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
var N = class extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "list", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t2 = this.list;
    if (!t2) {
      t2 = document.createElement("ul"), P(t2, this.cn("list")), t2.setAttribute("role", "tablist");
      const e2 = this.instance.container;
      e2.appendChild(t2), P(e2, this.cn("hasDots")), this.list = t2;
    }
    return t2;
  }
  refresh() {
    var t2;
    const e2 = this.instance.pages.length, i2 = Math.min(2, this.option("minCount")), n2 = Math.max(2e3, this.option("maxCount")), o2 = this.option("dynamicFrom");
    if (e2 < i2 || e2 > n2)
      return void this.cleanup();
    const a2 = "number" == typeof o2 && e2 > 5 && e2 >= o2, r2 = !this.list || this.isDynamic !== a2 || this.list.children.length !== e2;
    r2 && this.cleanup();
    const l2 = this.build();
    if (s(l2, this.cn("isDynamic"), !!a2), r2)
      for (let t3 = 0; t3 < e2; t3++)
        l2.append(this.createItem(t3));
    let h2, c2 = 0;
    for (const e3 of [...l2.children]) {
      const i3 = c2 === this.instance.page;
      i3 && (h2 = e3), s(e3, this.cn("isCurrent"), i3), null === (t2 = e3.children[0]) || void 0 === t2 || t2.setAttribute("aria-selected", i3 ? "true" : "false");
      for (const t3 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
        x(e3, this.cn(t3));
      c2++;
    }
    if (h2 = h2 || l2.firstChild, a2 && h2) {
      const t3 = h2.previousElementSibling, e3 = t3 && t3.previousElementSibling;
      P(t3, this.cn("isPrev")), P(e3, this.cn("isBeforePrev"));
      const i3 = h2.nextElementSibling, n3 = i3 && i3.nextElementSibling;
      P(i3, this.cn("isNext")), P(n3, this.cn("isAfterNext"));
    }
    this.isDynamic = a2;
  }
  createItem(t2 = 0) {
    var e2;
    const n2 = document.createElement("li");
    n2.setAttribute("role", "presentation");
    const s2 = i(this.instance.localize(this.option("dotTpl"), [["%d", t2 + 1]]).replace(/\%i/g, t2 + ""));
    return n2.appendChild(s2), null === (e2 = n2.children[0]) || void 0 === e2 || e2.setAttribute("role", "tab"), n2;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = false, x(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty(N, "defaults", { enumerable: true, configurable: true, writable: true, value: H });
var X = "disabled";
var W = "next";
var Y = "prev";
var $ = class extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prev", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "next", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isDom", { enumerable: true, configurable: true, writable: true, value: false });
  }
  onRefresh() {
    const t2 = this.instance, e2 = t2.pages.length, i2 = t2.page;
    if (e2 < 2)
      return void this.cleanup();
    this.build();
    let n2 = this.prev, s2 = this.next;
    n2 && s2 && (n2.removeAttribute(X), s2.removeAttribute(X), t2.isInfinite || (i2 <= 0 && n2.setAttribute(X, ""), i2 >= e2 - 1 && s2.setAttribute(X, "")));
  }
  addBtn(t2) {
    var e2;
    const i2 = this.instance, n2 = document.createElement("button");
    n2.setAttribute("tabindex", "0"), n2.setAttribute("title", i2.localize(`{{${t2.toUpperCase()}}}`)), P(n2, this.cn("button") + " " + this.cn(t2 === W ? "isNext" : "isPrev"));
    const s2 = i2.isRTL ? t2 === W ? Y : W : t2;
    var o2;
    return n2.innerHTML = i2.localize(this.option(`${s2}Tpl`)), n2.dataset[`carousel${o2 = t2, o2 ? o2.match("^[a-z]") ? o2.charAt(0).toUpperCase() + o2.substring(1) : o2 : ""}`] = "true", null === (e2 = this.container) || void 0 === e2 || e2.appendChild(n2), n2;
  }
  build() {
    const t2 = this.instance.container, e2 = this.cn("container");
    let { container: i2, prev: n2, next: s2 } = this;
    i2 || (i2 = t2.querySelector("." + e2), this.isDom = !!i2), i2 || (i2 = document.createElement("div"), P(i2, e2), t2.appendChild(i2)), this.container = i2, s2 || (s2 = i2.querySelector("[data-carousel-next]")), s2 || (s2 = this.addBtn(W)), this.next = s2, n2 || (n2 = i2.querySelector("[data-carousel-prev]")), n2 || (n2 = this.addBtn(Y)), this.prev = n2;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = false;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty($, "defaults", { enumerable: true, configurable: true, writable: true, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
var Z = class extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "nav", { enumerable: true, configurable: true, writable: true, value: null });
  }
  addAsTargetFor(t2) {
    this.target = this.instance, this.nav = t2, this.attachEvents();
  }
  addAsNavFor(t2) {
    this.nav = this.instance, this.target = t2, this.attachEvents();
  }
  attachEvents() {
    const { nav: t2, target: e2 } = this;
    t2 && e2 && (t2.options.initialSlide = e2.options.initialPage, t2.state === j.Ready ? this.onNavReady(t2) : t2.on("ready", this.onNavReady), e2.state === j.Ready ? this.onTargetReady(e2) : e2.on("ready", this.onTargetReady));
  }
  onNavReady(t2) {
    t2.on("createSlide", this.onNavCreateSlide), t2.on("Panzoom.click", this.onNavClick), t2.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t2) {
    t2.on("change", this.onTargetChange), t2.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t2, e2, i2) {
    this.onNavTouch(t2, t2.panzoom, i2);
  }
  onNavTouch(t2, e2, i2) {
    var n2, s2;
    if (Math.abs(e2.dragOffset.x) > 3 || Math.abs(e2.dragOffset.y) > 3)
      return;
    const o2 = i2.target, { nav: a2, target: r2 } = this;
    if (!a2 || !r2 || !o2)
      return;
    const l2 = o2.closest("[data-index]");
    if (i2.stopPropagation(), i2.preventDefault(), !l2)
      return;
    const h2 = parseInt(l2.dataset.index || "", 10) || 0, c2 = r2.getPageForSlide(h2), d2 = a2.getPageForSlide(h2);
    a2.slideTo(d2), r2.slideTo(c2, { friction: (null === (s2 = null === (n2 = this.nav) || void 0 === n2 ? void 0 : n2.plugins) || void 0 === s2 ? void 0 : s2.Sync.option("friction")) || 0 }), this.markSelectedSlide(h2);
  }
  onNavCreateSlide(t2, e2) {
    e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
  }
  onTargetChange() {
    var t2, e2;
    const { target: i2, nav: n2 } = this;
    if (!i2 || !n2)
      return;
    if (n2.state !== j.Ready || i2.state !== j.Ready)
      return;
    const s2 = null === (e2 = null === (t2 = i2.pages[i2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index, o2 = n2.getPageForSlide(s2);
    this.markSelectedSlide(s2), n2.slideTo(o2, null === n2.prevPage && null === i2.prevPage ? { friction: 0 } : void 0);
  }
  markSelectedSlide(t2) {
    const e2 = this.nav;
    e2 && e2.state === j.Ready && (this.selectedIndex = t2, [...e2.slides].map((e3) => {
      e3.el && e3.el.classList[e3.index === t2 ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t2 = this;
    let e2 = t2.options.target, i2 = t2.options.nav;
    e2 ? t2.addAsNavFor(e2) : i2 && t2.addAsTargetFor(i2);
  }
  detach() {
    const t2 = this, e2 = t2.nav, i2 = t2.target;
    e2 && (e2.off("ready", t2.onNavReady), e2.off("createSlide", t2.onNavCreateSlide), e2.off("Panzoom.click", t2.onNavClick), e2.off("Panzoom.touchEnd", t2.onNavTouch)), t2.nav = null, i2 && (i2.off("ready", t2.onTargetReady), i2.off("refresh", t2.onTargetChange), i2.off("change", t2.onTargetChange)), t2.target = null;
  }
};
Object.defineProperty(Z, "defaults", { enumerable: true, configurable: true, writable: true, value: { friction: 0.35 } });
var V = { Navigation: $, Dots: N, Sync: Z };
var q = "animationend";
var _ = "isSelected";
var G = "slide";
var U = class _U extends p {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === j.Ready;
  }
  get isInfinite() {
    let t2 = false;
    const { contentDim: e2, viewportDim: i2, pages: n2, slides: s2 } = this, o2 = s2[0];
    return n2.length >= 2 && o2 && e2 + o2.dim >= i2 && (t2 = this.option("infinite")), t2;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t2, e2 = {}, i2 = {}) {
    if (super(), Object.defineProperty(this, "bp", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "lp", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "userOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: j.Init }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "prevPage", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "viewport", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "slides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pages", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "panzoom", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "inTransition", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "contentDim", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "viewportDim", { enumerable: true, configurable: true, writable: true, value: 0 }), "string" == typeof t2 && (t2 = document.querySelector(t2)), !t2 || !w(t2))
      throw new Error("No Element found");
    this.container = t2, this.slideNext = R(this.slideNext.bind(this), 150), this.slidePrev = R(this.slidePrev.bind(this), 150), this.userOptions = e2, this.userPlugins = i2, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t2, e2;
    const i2 = d({}, _U.defaults, this.userOptions);
    let n2 = "";
    const s2 = i2.breakpoints;
    if (s2 && c(s2))
      for (const [t3, e3] of Object.entries(s2))
        window.matchMedia(t3).matches && c(e3) && (n2 += t3, d(i2, e3));
    n2 === this.bp && this.state !== j.Init || (this.bp = n2, this.state === j.Ready && (i2.initialSlide = (null === (e2 = null === (t2 = this.pages[this.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0), this.state !== j.Init && this.destroy(), super.setOptions(i2), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = j.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, _U.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = j.Ready, this.emit("ready");
  }
  initLayout() {
    const { container: t2 } = this, e2 = this.option("classes");
    P(t2, this.cn("container")), s(t2, e2.isLTR, !this.isRTL), s(t2, e2.isRTL, this.isRTL), s(t2, e2.isVertical, !this.isHorizontal), s(t2, e2.isHorizontal, this.isHorizontal);
    let i2 = this.option("viewport") || t2.querySelector(`.${e2.viewport}`);
    i2 || (i2 = document.createElement("div"), P(i2, e2.viewport), i2.append(...C(t2, `.${e2.slide}`)), t2.prepend(i2)), i2.addEventListener("scroll", this.onScroll);
    let n2 = this.option("track") || t2.querySelector(`.${e2.track}`);
    n2 || (n2 = document.createElement("div"), P(n2, e2.track), n2.append(...Array.from(i2.childNodes))), n2.setAttribute("aria-live", "polite"), i2.contains(n2) || i2.prepend(n2), this.viewport = i2, this.track = n2, this.emit("initLayout");
  }
  initSlides() {
    const { track: t2 } = this;
    if (!t2)
      return;
    const e2 = [...this.slides], i2 = [];
    [...C(t2, `.${this.cn(G)}`)].forEach((t3) => {
      if (w(t3)) {
        const e3 = F({ el: t3, isDom: true, index: this.slides.length });
        i2.push(e3);
      }
    });
    for (let t3 of [...this.option("slides", []) || [], ...e2])
      i2.push(F(t3));
    this.slides = i2;
    for (let t3 = 0; t3 < this.slides.length; t3++)
      this.slides[t3].index = t3;
    for (const t3 of i2)
      this.emit("beforeInitSlide", t3, t3.index), this.emit("initSlide", t3, t3.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t2 = this.option("initialSlide");
    this.page = "number" == typeof t2 ? this.getPageForSlide(t2) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const { track: t2, pages: e2, isHorizontal: i2 } = this;
    if (!t2 || !e2.length)
      return;
    let n2 = this.page;
    e2[n2] || (this.page = n2 = 0);
    const s2 = (e2[n2].pos || 0) * (this.isRTL && i2 ? 1 : -1), o2 = i2 ? `${s2}px` : "0", a2 = i2 ? "0" : `${s2}px`;
    t2.style.transform = `translate3d(${o2}, ${a2}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t2 = this.option("Panzoom") || {};
    this.panzoom = new D(this.viewport, d({}, { content: this.track, zoom: false, panOnlyZoomed: false, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: false, dblClick: false, touch: (t3) => !(this.pages.length < 2 && !t3.options.infinite), bounds: () => this.getBounds(), maxVelocity: (t3) => Math.abs(t3.target[this.axis] - t3.current[this.axis]) < 2 * this.viewportDim ? 100 : 0 }, t2)), this.panzoom.on("*", (t3, e2, ...i2) => {
      this.emit(`Panzoom.${e2}`, t3, ...i2);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t2 = this.container;
    t2 && (t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t2 = [];
    const { contentDim: e2, viewportDim: i2 } = this;
    let n2 = this.option("slidesPerPage");
    n2 = ("auto" === n2 || e2 <= i2) && false !== this.option("fill") ? 1 / 0 : parseFloat(n2 + "");
    let s2 = 0, o2 = 0, a2 = 0;
    for (const e3 of this.slides)
      (!t2.length || o2 + e3.dim - i2 > 0.05 || a2 >= n2) && (t2.push(I()), s2 = t2.length - 1, o2 = 0, a2 = 0), t2[s2].slides.push(e3), o2 += e3.dim + e3.gap, a2++;
    return t2;
  }
  processPages() {
    const e2 = this.pages, { contentDim: i2, viewportDim: n2, isInfinite: s2 } = this, o2 = this.option("center"), a2 = this.option("fill"), r2 = a2 && o2 && i2 > n2 && !s2;
    if (e2.forEach((t2, e3) => {
      var s3;
      t2.index = e3, t2.pos = (null === (s3 = t2.slides[0]) || void 0 === s3 ? void 0 : s3.pos) || 0, t2.dim = 0;
      for (const [e4, i3] of t2.slides.entries())
        t2.dim += i3.dim, e4 < t2.slides.length - 1 && (t2.dim += i3.gap);
      r2 && t2.pos + 0.5 * t2.dim < 0.5 * n2 ? t2.pos = 0 : r2 && t2.pos + 0.5 * t2.dim >= i2 - 0.5 * n2 ? t2.pos = i2 - n2 : o2 && (t2.pos += -0.5 * (n2 - t2.dim));
    }), e2.forEach((e3) => {
      a2 && !s2 && i2 > n2 && (e3.pos = Math.max(e3.pos, 0), e3.pos = Math.min(e3.pos, i2 - n2)), e3.pos = t(e3.pos, 1e3), e3.dim = t(e3.dim, 1e3), Math.abs(e3.pos) <= 0.1 && (e3.pos = 0);
    }), s2)
      return e2;
    const l2 = [];
    let h2;
    return e2.forEach((t2) => {
      const e3 = Object.assign({}, t2);
      h2 && e3.pos === h2.pos ? (h2.dim += e3.dim, h2.slides = [...h2.slides, ...e3.slides]) : (e3.index = l2.length, h2 = e3, l2.push(e3));
    }), l2;
  }
  getPageFromIndex(t2 = 0) {
    const e2 = this.pages.length;
    let i2;
    return t2 = parseInt((t2 || 0).toString()) || 0, i2 = this.isInfinite ? (t2 % e2 + e2) % e2 : Math.max(Math.min(t2, e2 - 1), 0), i2;
  }
  getSlideMetrics(e2) {
    var i2, n2;
    const s2 = this.isHorizontal ? "width" : "height";
    let o2 = 0, a2 = 0, r2 = e2.el;
    const l2 = !(!r2 || r2.parentNode);
    if (r2 ? o2 = parseFloat(r2.dataset[s2] || "") || 0 : (r2 = document.createElement("div"), r2.style.visibility = "hidden", (this.track || document.body).prepend(r2)), P(r2, this.cn(G) + " " + e2.class + " " + e2.customClass), o2)
      r2.style[s2] = `${o2}px`, r2.style["width" === s2 ? "height" : "width"] = "";
    else {
      l2 && (this.track || document.body).prepend(r2), o2 = r2.getBoundingClientRect()[s2] * Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1);
      let t2 = r2[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t2 - 1 > o2 && (o2 = t2);
    }
    const h2 = getComputedStyle(r2);
    return "content-box" === h2.boxSizing && (this.isHorizontal ? (o2 += parseFloat(h2.paddingLeft) || 0, o2 += parseFloat(h2.paddingRight) || 0) : (o2 += parseFloat(h2.paddingTop) || 0, o2 += parseFloat(h2.paddingBottom) || 0)), a2 = parseFloat(h2[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l2 ? null === (n2 = r2.parentElement) || void 0 === n2 || n2.removeChild(r2) : e2.el || r2.remove(), { dim: t(o2, 1e3), gap: t(a2, 1e3) };
  }
  getBounds() {
    const { isInfinite: t2, isRTL: e2, isHorizontal: i2, pages: n2 } = this;
    let s2 = { min: 0, max: 0 };
    if (t2)
      s2 = { min: -1 / 0, max: 1 / 0 };
    else if (n2.length) {
      const t3 = n2[0].pos, o2 = n2[n2.length - 1].pos;
      s2 = e2 && i2 ? { min: t3, max: o2 } : { min: -1 * o2, max: -1 * t3 };
    }
    return { x: i2 ? s2 : { min: 0, max: 0 }, y: i2 ? { min: 0, max: 0 } : s2 };
  }
  repositionSlides() {
    let e2, { isHorizontal: i2, isRTL: n2, isInfinite: s2, viewport: o2, viewportDim: a2, contentDim: r2, page: l2, pages: h2, slides: c2, panzoom: d2 } = this, u2 = 0, g2 = 0, p2 = 0, f2 = 0;
    d2 ? f2 = -1 * d2.current[this.axis] : h2[l2] && (f2 = h2[l2].pos || 0), e2 = i2 ? n2 ? "right" : "left" : "top", n2 && i2 && (f2 *= -1);
    for (const i3 of c2) {
      const n3 = i3.el;
      n3 ? ("top" === e2 ? (n3.style.right = "", n3.style.left = "") : n3.style.top = "", i3.index !== u2 ? n3.style[e2] = 0 === g2 ? "" : `${t(g2, 1e3)}px` : n3.style[e2] = "", p2 += i3.dim + i3.gap, u2++) : g2 += i3.dim + i3.gap;
    }
    if (s2 && p2 && o2) {
      let n3 = getComputedStyle(o2), s3 = "padding", l3 = i2 ? "Right" : "Bottom", h3 = parseFloat(n3[s3 + (i2 ? "Left" : "Top")]);
      f2 -= h3, a2 += h3, a2 += parseFloat(n3[s3 + l3]);
      for (const i3 of c2)
        i3.el && (t(i3.pos) < t(a2) && t(i3.pos + i3.dim + i3.gap) < t(f2) && t(f2) > t(r2 - a2) && (i3.el.style[e2] = `${t(g2 + p2, 1e3)}px`), t(i3.pos + i3.gap) >= t(r2 - a2) && t(i3.pos) > t(f2 + a2) && t(f2) < t(a2) && (i3.el.style[e2] = `-${t(p2, 1e3)}px`));
    }
    let m2, b2, v2 = [...this.inTransition];
    if (v2.length > 1 && (m2 = h2[v2[0]], b2 = h2[v2[1]]), m2 && b2) {
      let i3 = 0;
      for (const n3 of c2)
        n3.el ? this.inTransition.has(n3.index) && m2.slides.indexOf(n3) < 0 && (n3.el.style[e2] = `${t(i3 + (m2.pos - b2.pos), 1e3)}px`) : i3 += n3.dim + n3.gap;
    }
  }
  createSlideEl(t2) {
    const { track: e2, slides: i2 } = this;
    if (!e2 || !t2)
      return;
    if (t2.el && t2.el.parentNode)
      return;
    const n2 = t2.el || document.createElement("div");
    P(n2, this.cn(G)), P(n2, t2.class), P(n2, t2.customClass);
    const s2 = t2.html;
    s2 && (s2 instanceof HTMLElement ? n2.appendChild(s2) : n2.innerHTML = t2.html + "");
    const o2 = [];
    i2.forEach((t3, e3) => {
      t3.el && o2.push(e3);
    });
    const a2 = t2.index;
    let r2 = null;
    if (o2.length) {
      r2 = i2[o2.reduce((t3, e3) => Math.abs(e3 - a2) < Math.abs(t3 - a2) ? e3 : t3)];
    }
    const l2 = r2 && r2.el && r2.el.parentNode ? r2.index < t2.index ? r2.el.nextSibling : r2.el : null;
    e2.insertBefore(n2, e2.contains(l2) ? l2 : null), t2.el = n2, this.emit("createSlide", t2);
  }
  removeSlideEl(t2, e2 = false) {
    const i2 = null == t2 ? void 0 : t2.el;
    if (!i2 || !i2.parentNode)
      return;
    const n2 = this.cn(_);
    if (i2.classList.contains(n2) && (x(i2, n2), this.emit("unselectSlide", t2)), t2.isDom && !e2)
      return i2.removeAttribute("aria-hidden"), i2.removeAttribute("data-index"), void (i2.style.left = "");
    this.emit("removeSlide", t2);
    const s2 = new CustomEvent(q);
    i2.dispatchEvent(s2), t2.el && (t2.el.remove(), t2.el = null);
  }
  transitionTo(t2 = 0, e2 = this.option("transition")) {
    var i2, n2, s2, o2;
    if (!e2)
      return false;
    const a2 = this.page, { pages: r2, panzoom: l2 } = this;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const h2 = this.getPageFromIndex(t2);
    if (!l2 || !r2[h2] || r2.length < 2 || Math.abs(((null === (n2 = null === (i2 = r2[a2]) || void 0 === i2 ? void 0 : i2.slides[0]) || void 0 === n2 ? void 0 : n2.dim) || 0) - this.viewportDim) > 1)
      return false;
    const c2 = t2 > a2 ? 1 : -1, d2 = r2[h2].pos * (this.isRTL ? 1 : -1);
    if (a2 === h2 && Math.abs(d2 - l2.target[this.axis]) < 1)
      return false;
    this.clearTransitions();
    const u2 = l2.isResting;
    P(this.container, this.cn("inTransition"));
    const g2 = (null === (s2 = r2[a2]) || void 0 === s2 ? void 0 : s2.slides[0]) || null, p2 = (null === (o2 = r2[h2]) || void 0 === o2 ? void 0 : o2.slides[0]) || null;
    this.inTransition.add(p2.index), this.createSlideEl(p2);
    let f2 = g2.el, m2 = p2.el;
    u2 || e2 === G || (e2 = "fadeFast", f2 = null);
    const b2 = this.isRTL ? "next" : "prev", v2 = this.isRTL ? "prev" : "next";
    return f2 && (this.inTransition.add(g2.index), g2.transition = e2, f2.addEventListener(q, this.onAnimationEnd), f2.classList.add(`f-${e2}Out`, `to-${c2 > 0 ? v2 : b2}`)), m2 && (p2.transition = e2, m2.addEventListener(q, this.onAnimationEnd), m2.classList.add(`f-${e2}In`, `from-${c2 > 0 ? b2 : v2}`)), l2.current[this.axis] = d2, l2.target[this.axis] = d2, l2.requestTick(), this.onChange(h2), true;
  }
  manageSlideVisiblity() {
    const t2 = /* @__PURE__ */ new Set(), e2 = /* @__PURE__ */ new Set(), i2 = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n2 of this.slides)
      i2.has(n2) ? t2.add(n2) : e2.add(n2);
    for (const e3 of this.inTransition)
      t2.add(this.slides[e3]);
    for (const e3 of t2)
      this.createSlideEl(e3), this.lazyLoadSlide(e3);
    for (const i3 of e2)
      t2.has(i3) || this.removeSlideEl(i3);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides)
      return;
    const t2 = "aria-hidden";
    let e2 = this.cn(_);
    if (e2)
      for (const i2 of this.slides) {
        const n2 = i2.el;
        n2 && (n2.dataset.index = `${i2.index}`, n2.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i2) ? n2.removeAttribute(t2) : n2.setAttribute(t2, "true") : this.pages[this.page].slides.includes(i2) ? (n2.classList.contains(e2) || (P(n2, e2), this.emit("selectSlide", i2)), n2.removeAttribute(t2)) : (n2.classList.contains(e2) && (x(n2, e2), this.emit("unselectSlide", i2)), n2.setAttribute(t2, "true")));
      }
  }
  flipInfiniteTrack() {
    const { axis: t2, isHorizontal: e2, isInfinite: i2, isRTL: n2, viewportDim: s2, contentDim: o2 } = this, a2 = this.panzoom;
    if (!a2 || !i2)
      return;
    let r2 = a2.current[t2], l2 = a2.target[t2] - r2, h2 = 0, c2 = 0.5 * s2;
    n2 && e2 ? (r2 < -c2 && (h2 = -1, r2 += o2), r2 > o2 - c2 && (h2 = 1, r2 -= o2)) : (r2 > c2 && (h2 = 1, r2 -= o2), r2 < -o2 + c2 && (h2 = -1, r2 += o2)), h2 && (a2.current[t2] = r2, a2.target[t2] = r2 + l2);
  }
  lazyLoadImg(t2, e2) {
    const n2 = this, s2 = "f-fadeIn", o2 = "is-preloading";
    let a2 = false, r2 = null;
    const l2 = () => {
      a2 || (a2 = true, r2 && (r2.remove(), r2 = null), x(e2, o2), e2.complete && (P(e2, s2), setTimeout(() => {
        x(e2, s2);
      }, 350)), this.option("adaptiveHeight") && t2.el && this.pages[this.page].slides.indexOf(t2) > -1 && (n2.updateMetrics(), n2.setViewportHeight()), this.emit("load", t2));
    };
    P(e2, o2), e2.src = e2.dataset.lazySrcset || e2.dataset.lazySrc || "", delete e2.dataset.lazySrc, delete e2.dataset.lazySrcset, e2.addEventListener("error", () => {
      l2();
    }), e2.addEventListener("load", () => {
      l2();
    }), setTimeout(() => {
      const n3 = e2.parentNode;
      n3 && t2.el && (e2.complete ? l2() : a2 || (r2 = i(y), n3.insertBefore(r2, e2)));
    }, 300);
  }
  lazyLoadSlide(t2) {
    const e2 = t2 && t2.el;
    if (!e2)
      return;
    const i2 = /* @__PURE__ */ new Set();
    let n2 = Array.from(e2.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
    e2.dataset.lazySrc && n2.push(e2), n2.map((t3) => {
      t3 instanceof HTMLImageElement ? i2.add(t3) : t3 instanceof HTMLElement && t3.dataset.lazySrc && (t3.style.backgroundImage = `url('${t3.dataset.lazySrc}')`, delete t3.dataset.lazySrc);
    });
    for (const e3 of i2)
      this.lazyLoadImg(t2, e3);
  }
  onAnimationEnd(t2) {
    var e2;
    const i2 = t2.target, n2 = i2 ? parseInt(i2.dataset.index || "", 10) || 0 : -1, s2 = this.slides[n2], o2 = t2.animationName;
    if (!i2 || !s2 || !o2)
      return;
    const a2 = !!this.inTransition.has(n2) && s2.transition;
    a2 && o2.substring(0, a2.length + 2) === `f-${a2}` && this.inTransition.delete(n2), this.inTransition.size || this.clearTransitions(), n2 === this.page && (null === (e2 = this.panzoom) || void 0 === e2 ? void 0 : e2.isResting) && this.emit("settle");
  }
  onDecel(t2, e2 = 0, i2 = 0, n2 = 0, s2 = 0) {
    if (this.option("dragFree"))
      return void this.setPageFromPosition();
    const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this, h2 = l2.length, c2 = Math.abs(Math.atan2(i2, e2) / (Math.PI / 180));
    let d2 = 0;
    if (d2 = c2 > 45 && c2 < 135 ? a2 ? 0 : i2 : a2 ? e2 : 0, !h2)
      return;
    let u2 = this.page, g2 = o2 && a2 ? 1 : -1;
    const p2 = t2.current[r2] * g2;
    let { pageIndex: f2 } = this.getPageFromPosition(p2);
    Math.abs(d2) > 5 ? (l2[u2].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u2 = f2), u2 = o2 && a2 ? d2 < 0 ? u2 - 1 : u2 + 1 : d2 < 0 ? u2 + 1 : u2 - 1) : u2 = 0 === n2 && 0 === s2 ? u2 : f2, this.slideTo(u2, { transition: false, friction: t2.option("decelFriction") });
  }
  onClick(t2) {
    const e2 = t2.target, i2 = e2 && w(e2) ? e2.dataset : null;
    let n2, s2;
    i2 && (void 0 !== i2.carouselPage ? (s2 = "slideTo", n2 = i2.carouselPage) : void 0 !== i2.carouselNext ? s2 = "slideNext" : void 0 !== i2.carouselPrev && (s2 = "slidePrev")), s2 ? (t2.preventDefault(), t2.stopPropagation(), e2 && !e2.hasAttribute("disabled") && this[s2](n2)) : this.emit("click", t2);
  }
  onSlideTo(t2) {
    const e2 = t2.detail || 0;
    this.slideTo(this.getPageForSlide(e2), { friction: 0 });
  }
  onChange(t2, e2 = 0) {
    const i2 = this.page;
    this.prevPage = i2, this.page = t2, this.option("adaptiveHeight") && this.setViewportHeight(), t2 !== i2 && (this.markSelectedSlides(), this.emit("change", t2, i2, e2));
  }
  onRefresh() {
    let t2 = this.contentDim, e2 = this.viewportDim;
    this.updateMetrics(), this.contentDim === t2 && this.viewportDim === e2 || this.slideTo(this.page, { friction: 0, transition: false });
  }
  onScroll() {
    var t2;
    null === (t2 = this.viewport) || void 0 === t2 || t2.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t2) {
    this.lp !== t2.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t2.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit(t2 = null, e2 = null) {
    this.destroy(), this.state = j.Init, this.prevPage = null, this.userOptions = t2 || this.userOptions, this.userPlugins = e2 || this.userPlugins, this.processOptions();
  }
  slideTo(t2 = 0, { friction: e2 = this.option("friction"), transition: i2 = this.option("transition") } = {}) {
    if (this.state === j.Destroy)
      return;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const n2 = this.getPageFromIndex(t2), { axis: s2, isHorizontal: o2, isRTL: a2, pages: r2, panzoom: l2 } = this, h2 = r2.length, c2 = a2 && o2 ? 1 : -1;
    if (!l2 || !h2)
      return;
    if (this.page !== n2) {
      const e3 = new Event("beforeChange", { bubbles: true, cancelable: true });
      if (this.emit("beforeChange", e3, t2), e3.defaultPrevented)
        return;
    }
    if (this.transitionTo(t2, i2))
      return;
    let d2 = r2[n2].pos;
    if (this.isInfinite) {
      const e3 = this.contentDim, i3 = l2.target[s2] * c2;
      if (2 === h2)
        d2 += e3 * Math.floor(parseFloat(t2 + "") / 2);
      else {
        d2 = [d2, d2 - e3, d2 + e3].reduce(function(t3, e4) {
          return Math.abs(e4 - i3) < Math.abs(t3 - i3) ? e4 : t3;
        });
      }
    }
    d2 *= c2, Math.abs(l2.target[s2] - d2) < 1 || (l2.panTo({ x: o2 ? d2 : 0, y: o2 ? 0 : d2, friction: e2 }), this.onChange(n2));
  }
  slideToClosest(t2) {
    if (this.panzoom) {
      const { pageIndex: e2 } = this.getPageFromPosition();
      this.slideTo(e2, t2);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), x(this.container, this.cn("inTransition"));
    const t2 = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e2 of this.slides) {
      const i2 = e2.el;
      if (i2) {
        i2.removeEventListener(q, this.onAnimationEnd), i2.classList.remove(...t2);
        const n2 = e2.transition;
        n2 && i2.classList.remove(`f-${n2}Out`, `f-${n2}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t2, e2) {
    var i2, n2, s2, o2;
    const a2 = this.panzoom, r2 = (null === (i2 = this.pages[this.page]) || void 0 === i2 ? void 0 : i2.pos) || 0, l2 = (null === (n2 = this.pages[this.page]) || void 0 === n2 ? void 0 : n2.dim) || 0, h2 = this.contentDim < this.viewportDim;
    let c2 = Array.isArray(e2) ? e2 : [e2];
    const d2 = [];
    for (const t3 of c2)
      d2.push(F(t3));
    this.slides.splice(t2, 0, ...d2);
    for (let t3 = 0; t3 < this.slides.length; t3++)
      this.slides[t3].index = t3;
    for (const t3 of d2)
      this.emit("beforeInitSlide", t3, t3.index);
    if (this.page >= t2 && (this.page += d2.length), this.updateMetrics(), a2) {
      const e3 = (null === (s2 = this.pages[this.page]) || void 0 === s2 ? void 0 : s2.pos) || 0, i3 = (null === (o2 = this.pages[this.page]) || void 0 === o2 ? void 0 : o2.dim) || 0, n3 = this.pages.length || 1, c3 = this.isRTL ? l2 - i3 : i3 - l2, d3 = this.isRTL ? r2 - e3 : e3 - r2;
      h2 && 1 === n3 ? (t2 <= this.page && (a2.current[this.axis] -= c3, a2.target[this.axis] -= c3), a2.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e3 })) : d3 && t2 <= this.page && (a2.target[this.axis] -= d3, a2.current[this.axis] -= d3, a2.requestTick());
    }
    for (const t3 of d2)
      this.emit("initSlide", t3, t3.index);
  }
  prependSlide(t2) {
    this.addSlide(0, t2);
  }
  appendSlide(t2) {
    this.addSlide(this.slides.length, t2);
  }
  removeSlide(t2) {
    const e2 = this.slides.length;
    t2 = (t2 % e2 + e2) % e2;
    const i2 = this.slides[t2];
    if (i2) {
      this.removeSlideEl(i2, true), this.slides.splice(t2, 1);
      for (let t3 = 0; t3 < this.slides.length; t3++)
        this.slides[t3].index = t3;
      this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: false }), this.emit("destroySlide", i2);
    }
  }
  updateMetrics() {
    const { panzoom: e2, viewport: i2, track: n2, slides: s2, isHorizontal: o2, isInfinite: a2 } = this;
    if (!n2)
      return;
    const r2 = o2 ? "width" : "height", l2 = o2 ? "offsetWidth" : "offsetHeight";
    if (i2) {
      let e3 = Math.max(i2[l2], t(i2.getBoundingClientRect()[r2], 1e3)), n3 = getComputedStyle(i2), s3 = "padding", a3 = o2 ? "Right" : "Bottom";
      e3 -= parseFloat(n3[s3 + (o2 ? "Left" : "Top")]) + parseFloat(n3[s3 + a3]), this.viewportDim = e3;
    }
    let h2, c2 = 0;
    for (const [e3, i3] of s2.entries()) {
      let n3 = 0, o3 = 0;
      !i3.el && h2 ? (n3 = h2.dim, o3 = h2.gap) : ({ dim: n3, gap: o3 } = this.getSlideMetrics(i3), h2 = i3), n3 = t(n3, 1e3), o3 = t(o3, 1e3), i3.dim = n3, i3.gap = o3, i3.pos = c2, c2 += n3, (a2 || e3 < s2.length - 1) && (c2 += o3);
    }
    c2 = t(c2, 1e3), this.contentDim = c2, e2 && (e2.contentRect[r2] = c2, e2.contentRect[o2 ? "fullWidth" : "fullHeight"] = c2), this.pages = this.createPages(), this.pages = this.processPages(), this.state === j.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e2, i2 = false, n2 = false) {
    void 0 === e2 && (e2 = this.page);
    const s2 = this, o2 = s2.panzoom, a2 = s2.contentDim, r2 = s2.pages[e2] || 0;
    if (!r2 || !o2)
      return e2 > this.page ? -1 : 1;
    let l2 = -1 * o2.current.e, h2 = t((l2 - r2.pos) / (1 * r2.dim), 1e3), c2 = h2, d2 = h2;
    this.isInfinite && true !== n2 && (c2 = t((l2 - r2.pos + a2) / (1 * r2.dim), 1e3), d2 = t((l2 - r2.pos - a2) / (1 * r2.dim), 1e3));
    let u2 = [h2, c2, d2].reduce(function(t2, e3) {
      return Math.abs(e3) < Math.abs(t2) ? e3 : t2;
    });
    return i2 ? u2 : u2 > 1 ? 1 : u2 < -1 ? -1 : u2;
  }
  setViewportHeight() {
    const { page: t2, pages: e2, viewport: i2, isHorizontal: n2 } = this;
    if (!i2 || !e2[t2])
      return;
    let s2 = 0;
    n2 && this.track && (this.track.style.height = "auto", e2[t2].slides.forEach((t3) => {
      t3.el && (s2 = Math.max(s2, t3.el.offsetHeight));
    })), i2.style.height = s2 ? `${s2}px` : "";
  }
  getPageForSlide(t2) {
    for (const e2 of this.pages)
      for (const i2 of e2.slides)
        if (i2.index === t2)
          return e2.index;
    return -1;
  }
  getVisibleSlides(t2 = 0) {
    var e2;
    const i2 = /* @__PURE__ */ new Set();
    let { panzoom: n2, contentDim: s2, viewportDim: o2, pages: a2, page: r2 } = this;
    if (o2) {
      s2 = s2 + (null === (e2 = this.slides[this.slides.length - 1]) || void 0 === e2 ? void 0 : e2.gap) || 0;
      let l2 = 0;
      l2 = n2 && n2.state !== f.Init && n2.state !== f.Destroy ? -1 * n2.current[this.axis] : a2[r2] && a2[r2].pos || 0, this.isInfinite && (l2 -= Math.floor(l2 / s2) * s2), this.isRTL && this.isHorizontal && (l2 *= -1);
      const h2 = l2 - o2 * t2, c2 = l2 + o2 * (t2 + 1), d2 = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t3 of this.slides)
        for (const e3 of d2) {
          const n3 = t3.pos + e3 * s2, o3 = n3 + t3.dim + t3.gap;
          n3 < c2 && o3 > h2 && i2.add(t3);
        }
    }
    return i2;
  }
  getPageFromPosition(t2) {
    const { viewportDim: e2, contentDim: i2, slides: n2, pages: s2, panzoom: o2 } = this, a2 = s2.length, r2 = n2.length, l2 = n2[0], h2 = n2[r2 - 1], c2 = this.option("center");
    let d2 = 0, u2 = 0, g2 = 0, p2 = void 0 === t2 ? -1 * ((null == o2 ? void 0 : o2.target[this.axis]) || 0) : t2;
    c2 && (p2 += 0.5 * e2), this.isInfinite ? (p2 < l2.pos - 0.5 * h2.gap && (p2 -= i2, g2 = -1), p2 > h2.pos + h2.dim + 0.5 * h2.gap && (p2 -= i2, g2 = 1)) : p2 = Math.max(l2.pos || 0, Math.min(p2, h2.pos));
    let f2 = h2, m2 = n2.find((t3) => {
      const e3 = t3.pos - 0.5 * f2.gap, i3 = t3.pos + t3.dim + 0.5 * t3.gap;
      return f2 = t3, p2 >= e3 && p2 < i3;
    });
    return m2 || (m2 = h2), u2 = this.getPageForSlide(m2.index), d2 = u2 + g2 * a2, { page: d2, pageIndex: u2 };
  }
  setPageFromPosition() {
    const { pageIndex: t2 } = this.getPageFromPosition();
    this.onChange(t2);
  }
  destroy() {
    if ([j.Destroy].includes(this.state))
      return;
    this.state = j.Destroy;
    const { container: t2, viewport: e2, track: i2, slides: n2, panzoom: s2 } = this, o2 = this.option("classes");
    t2.removeEventListener("click", this.onClick, { passive: false, capture: false }), t2.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s2 && (s2.destroy(), this.panzoom = null), n2 && n2.forEach((t3) => {
      this.removeSlideEl(t3);
    }), this.detachPlugins(), e2 && (e2.removeEventListener("scroll", this.onScroll), e2.offsetParent && i2 && i2.offsetParent && e2.replaceWith(...i2.childNodes));
    for (const [e3, i3] of Object.entries(o2))
      "container" !== e3 && i3 && t2.classList.remove(i3);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a2 = this.events.get("ready");
    this.events = /* @__PURE__ */ new Map(), a2 && this.events.set("ready", a2);
  }
};
Object.defineProperty(U, "Panzoom", { enumerable: true, configurable: true, writable: true, value: D }), Object.defineProperty(U, "defaults", { enumerable: true, configurable: true, writable: true, value: A }), Object.defineProperty(U, "Plugins", { enumerable: true, configurable: true, writable: true, value: V });
export {
  U as Carousel,
  D as Panzoom
};
//# sourceMappingURL=@fancyapps_ui_dist_carousel_carousel__esm__js.js.map
