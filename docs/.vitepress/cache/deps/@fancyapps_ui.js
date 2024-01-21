import "./chunk-Y2F7D3TJ.js";

// node_modules/@fancyapps/ui/dist/index.esm.js
var t = (t2, e2 = 1e4) => (t2 = parseFloat(t2 + "") || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
var e = function(t2) {
  if (!(t2 && t2 instanceof Element && t2.offsetParent))
    return false;
  const e2 = t2.scrollHeight > t2.clientHeight, i2 = window.getComputedStyle(t2).overflowY, n2 = -1 !== i2.indexOf("hidden"), s2 = -1 !== i2.indexOf("visible");
  return e2 && !n2 && !s2;
};
var i = function(t2, n2 = void 0) {
  return !(!t2 || t2 === document.body || n2 && t2 === n2) && (e(t2) ? t2 : i(t2.parentElement, n2));
};
var n = function(t2) {
  var e2 = new DOMParser().parseFromString(t2, "text/html").body;
  if (e2.childElementCount > 1) {
    for (var i2 = document.createElement("div"); e2.firstChild; )
      i2.appendChild(e2.firstChild);
    return i2;
  }
  return e2.firstChild;
};
var s = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3);
var o = (t2, e2, i2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.toggle(e3, i2 || false);
  });
};
var a = class {
  constructor(t2) {
    Object.defineProperty(this, "pageX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "time", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.nativePointer = t2, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY, this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.time = Date.now();
  }
};
var r = { passive: false };
var l = class {
  constructor(t2, { start: e2 = () => true, move: i2 = () => {
  }, end: n2 = () => {
  } }) {
    Object.defineProperty(this, "element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: true, configurable: true, writable: true, value: [] }), this.element = t2, this.startCallback = e2, this.moveCallback = i2, this.endCallback = n2;
    for (const t3 of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
      this[t3] = this[t3].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t2) {
    if (!t2.buttons || 0 !== t2.button)
      return;
    const e2 = new a(t2);
    this.currentPointers.some((t3) => t3.id === e2.id) || this.triggerPointerStart(e2, t2) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t2) {
    for (const e2 of Array.from(t2.changedTouches || []))
      this.triggerPointerStart(new a(e2), t2);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t2) {
    const e2 = this.currentPointers.slice(), i2 = "changedTouches" in t2 ? Array.from(t2.changedTouches || []).map((t3) => new a(t3)) : [new a(t2)], n2 = [];
    for (const t3 of i2) {
      const e3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
      e3 < 0 || (n2.push(t3), this.currentPointers[e3] = t3);
    }
    n2.length && this.moveCallback(t2, this.currentPointers.slice(), e2);
  }
  onPointerEnd(t2) {
    t2.buttons > 0 && 0 !== t2.button || (this.triggerPointerEnd(t2, new a(t2)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t2) {
    for (const e2 of Array.from(t2.changedTouches || []))
      this.triggerPointerEnd(t2, new a(e2));
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
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
};
function c(t2, e2) {
  return e2 ? Math.sqrt(Math.pow(e2.clientX - t2.clientX, 2) + Math.pow(e2.clientY - t2.clientY, 2)) : 0;
}
function h(t2, e2) {
  return e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
}
var d = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2);
var u = (t2, ...e2) => {
  const i2 = e2.length;
  for (let n2 = 0; n2 < i2; n2++) {
    const i3 = e2[n2] || {};
    Object.entries(i3).forEach(([e3, i4]) => {
      const n3 = Array.isArray(i4) ? [] : {};
      t2[e3] || Object.assign(t2, { [e3]: n3 }), d(i4) ? Object.assign(t2[e3], u(n3, i4)) : Array.isArray(i4) ? Object.assign(t2, { [e3]: [...i4] }) : Object.assign(t2, { [e3]: i4 });
    });
  }
  return t2;
};
var p = function(t2, e2) {
  return t2.split(".").reduce((t3, e3) => "object" == typeof t3 ? t3[e3] : void 0, e2);
};
var f = class {
  constructor(t2 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t2 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t2);
    for (const t3 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      t3.startsWith("on") && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
  }
  setOptions(t2) {
    this.options = t2 ? u({}, this.constructor.defaults, t2) : {};
    for (const [t3, e2] of Object.entries(this.option("on") || {}))
      this.on(t3, e2);
  }
  option(t2, ...e2) {
    let i2 = p(t2, this.options);
    return i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2;
  }
  optionFor(t2, e2, i2, ...n2) {
    let s2 = p(e2, t2);
    var o2;
    "string" != typeof (o2 = s2) || isNaN(o2) || isNaN(parseFloat(o2)) || (s2 = parseFloat(s2)), "true" === s2 && (s2 = true), "false" === s2 && (s2 = false), s2 && "function" == typeof s2 && (s2 = s2.call(this, this, t2, ...n2));
    let a2 = p(e2, this.options);
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
Object.defineProperty(f, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.33" }), Object.defineProperty(f, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var g = class extends f {
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
var m;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Error = 1] = "Error", t2[t2.Ready = 2] = "Ready", t2[t2.Panning = 3] = "Panning", t2[t2.Mousemove = 4] = "Mousemove", t2[t2.Destroy = 5] = "Destroy";
}(m || (m = {}));
var v = ["a", "b", "c", "d", "e", "f"];
var b = { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" };
var y = { content: null, width: "auto", height: "auto", panMode: "drag", touch: true, dragMinThreshold: 3, lockAxis: false, mouseMoveFactor: 1, mouseMoveFriction: 0.12, zoom: true, pinchToZoom: true, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: 0.25, dragFriction: 0.35, decelFriction: 0.05, click: "toggleZoom", dblClick: false, wheel: "zoom", wheelLimit: 7, spinner: true, bounds: "auto", infinite: false, rubberband: true, bounce: true, maxVelocity: 75, transformParent: false, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: b };
var w = '<circle cx="25" cy="25" r="20"></circle>';
var x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>";
var E = (t2) => t2 && null !== t2 && t2 instanceof Element && "nodeType" in t2;
var S = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.remove(e3);
  });
};
var P = (t2, e2) => {
  t2 && s(e2).forEach((e3) => {
    t2.classList.add(e3);
  });
};
var C = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
var T = 1e5;
var M = 1e4;
var O = "mousemove";
var A = "drag";
var L = "content";
var z = null;
var R = null;
var k = class _k extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === R && (R = window.matchMedia("(hover: none)").matches), R;
  }
  get isMobile() {
    return null === z && (z = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), z;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? A : O;
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
    for (const t2 of v) {
      const e2 = "e" == t2 || "f" === t2 ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t2] - this.current[t2]) > e2)
        return false;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t2, e2 = {}, i2 = {}) {
    var s2;
    if (super(e2), Object.defineProperty(this, "pointerTracker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "resizeObserver", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "updateTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "rAF", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isTicking", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ignoreBounds", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "clicks", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "trackingPoints", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "cwd", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "pmme", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "friction", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: m.Init }), Object.defineProperty(this, "isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "content", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "spinner", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "containerRect", { enumerable: true, configurable: true, writable: true, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(this, "contentRect", { enumerable: true, configurable: true, writable: true, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(this, "dragStart", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(this, "dragOffset", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(this, "current", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "velocity", { enumerable: true, configurable: true, writable: true, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(this, "lockedAxis", { enumerable: true, configurable: true, writable: true, value: false }), !t2)
      throw new Error("Container Element Not Found");
    this.container = t2, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, _k.Plugins), i2)), this.emit("attachPlugins"), this.emit("init");
    const o2 = this.content;
    if (o2.addEventListener("load", this.onLoad), o2.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t2.classList.add(this.cn("isLoading"));
        const e3 = n(x);
        !t2.contains(o2) || o2.parentElement instanceof HTMLPictureElement ? this.spinner = t2.appendChild(e3) : this.spinner = (null === (s2 = o2.parentElement) || void 0 === s2 ? void 0 : s2.insertBefore(e3, o2)) || null;
      }
      this.emit("beforeLoad");
    } else
      queueMicrotask(() => {
        this.enable();
      });
  }
  initContent() {
    const { container: t2 } = this, e2 = this.cn(L);
    let i2 = this.option(L) || t2.querySelector(`.${e2}`);
    if (i2 || (i2 = t2.querySelector("img,picture") || t2.firstElementChild, i2 && P(i2, e2)), i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")), !i2)
      throw new Error("No content found");
    this.content = i2;
  }
  onLoad() {
    const { spinner: t2, container: e2, state: i2 } = this;
    t2 && (t2.remove(), this.spinner = null), this.option("spinner") && e2.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i2 === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
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
    t2.addEventListener("click", this.onClick, { passive: false, capture: false }), t2.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new l(t2, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t2;
    const { container: e2 } = this;
    e2.removeEventListener("click", this.onClick, { passive: false, capture: false }), e2.removeEventListener("wheel", this.onWheel, { passive: false }), null === (t2 = this.pointerTracker) || void 0 === t2 || t2.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t2 = this.friction, e2 = this.option("maxVelocity");
    for (const i2 of v)
      t2 ? (this.velocity[i2] *= 1 - t2, e2 && !this.isScaling && (this.velocity[i2] = Math.max(Math.min(this.velocity[i2], e2), -1 * e2)), this.current[i2] += this.velocity[i2]) : this.current[i2] = this.target[i2];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t2 of v)
      "e" === t2 && this.isBouncingX || "f" === t2 && this.isBouncingY || (this.velocity[t2] = (1 / (1 - this.friction) - 1) * (this.target[t2] - this.current[t2]));
  }
  checkBounds(t2 = 0, e2 = 0) {
    const { current: i2 } = this, n2 = i2.e + t2, s2 = i2.f + e2, o2 = this.getBounds(), { x: a2, y: r2 } = o2, l2 = a2.min, c2 = a2.max, h2 = r2.min, d2 = r2.max;
    let u2 = 0, p2 = 0;
    return l2 !== 1 / 0 && n2 < l2 ? u2 = l2 - n2 : c2 !== 1 / 0 && n2 > c2 && (u2 = c2 - n2), h2 !== 1 / 0 && s2 < h2 ? p2 = h2 - s2 : d2 !== 1 / 0 && s2 > d2 && (p2 = d2 - s2), Math.abs(u2) < 1e-4 && (u2 = 0), Math.abs(p2) < 1e-4 && (p2 = 0), Object.assign(Object.assign({}, o2), { xDiff: u2, yDiff: p2, inBounds: !u2 && !p2 });
  }
  clampTargetBounds() {
    const { target: t2 } = this, { x: e2, y: i2 } = this.getBounds();
    e2.min !== 1 / 0 && (t2.e = Math.max(t2.e, e2.min)), e2.max !== 1 / 0 && (t2.e = Math.min(t2.e, e2.max)), i2.min !== 1 / 0 && (t2.f = Math.max(t2.f, i2.min)), i2.max !== 1 / 0 && (t2.f = Math.min(t2.f, i2.max));
  }
  calculateContentDim(t2 = this.current) {
    const { content: e2, contentRect: i2 } = this, { fitWidth: n2, fitHeight: s2, fullWidth: o2, fullHeight: a2 } = i2;
    let r2 = o2, l2 = a2;
    if (this.option("zoom") || 0 !== this.angle) {
      const i3 = !(e2 instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e2).maxWidth || "none" === window.getComputedStyle(e2).maxHeight), c2 = i3 ? o2 : n2, h2 = i3 ? a2 : s2, d2 = this.getMatrix(t2), u2 = new DOMPoint(0, 0).matrixTransform(d2), p2 = new DOMPoint(0 + c2, 0).matrixTransform(d2), f2 = new DOMPoint(0 + c2, 0 + h2).matrixTransform(d2), g2 = new DOMPoint(0, 0 + h2).matrixTransform(d2), m2 = Math.abs(f2.x - u2.x), v2 = Math.abs(f2.y - u2.y), b2 = Math.abs(g2.x - p2.x), y2 = Math.abs(g2.y - p2.y);
      r2 = Math.max(m2, b2), l2 = Math.max(v2, y2);
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
    for (const t3 of v)
      this.current[t3] = this.target[t3] = e2[t3];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
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
    const n2 = i2.closest("[data-panzoom-action]"), s2 = i2.closest("[data-panzoom-change]"), o2 = n2 || s2, a2 = o2 && E(o2) ? o2.dataset : null;
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
    const c2 = (e3) => {
      this.option("zoom", t2) && e3 && "string" == typeof e3 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e3) && "function" == typeof this[e3] && (t2.preventDefault(), this[e3]({ event: t2 }));
    }, h2 = this.option("click", t2), d2 = this.option("dblClick", t2);
    d2 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2)) : (this.emit("dblClick", t2), t2.defaultPrevented || c2(d2)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t2), !t2.defaultPrevented && h2 && c2(h2));
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
  onPointerMove(e2, n2, s2) {
    if (false === this.option("touch", e2))
      return;
    if (!this.isDragging)
      return;
    if (n2.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale))
      return;
    if (this.emit("touchMove", e2), e2.defaultPrevented)
      return;
    this.addTrackingPoint(n2[0]);
    const { content: o2 } = this, a2 = h(s2[0], s2[1]), r2 = h(n2[0], n2[1]);
    let l2 = 0, d2 = 0;
    if (n2.length > 1) {
      const t2 = o2.getBoundingClientRect();
      l2 = a2.clientX - t2.left - 0.5 * t2.width, d2 = a2.clientY - t2.top - 0.5 * t2.height;
    }
    const u2 = c(s2[0], s2[1]), p2 = c(n2[0], n2[1]);
    let f2 = u2 ? p2 / u2 : 1, g2 = r2.clientX - a2.clientX, m2 = r2.clientY - a2.clientY;
    this.dragOffset.x += g2, this.dragOffset.y += m2, this.dragOffset.time = Date.now() - this.dragStart.time;
    let v2 = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (v2 && !this.lockedAxis)
      if ("xy" === v2 || "y" === v2 || "touchmove" === e2.type) {
        if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
          return void e2.preventDefault();
        const t2 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
        this.lockedAxis = t2 > 45 && t2 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g2 = 0, m2 = 0;
      } else
        this.lockedAxis = v2;
    if (i(e2.target, this.content) && (v2 = "x", this.dragOffset.y = 0), v2 && "xy" !== v2 && this.lockedAxis !== v2 && t(this.targetScale) === t(this.minScale))
      return;
    e2.cancelable && e2.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const b2 = this.checkBounds(g2, m2);
    this.option("rubberband") ? ("x" !== this.isInfinite && (b2.xDiff > 0 && g2 < 0 || b2.xDiff < 0 && g2 > 0) && (g2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitWidth * b2.xDiff))), "y" !== this.isInfinite && (b2.yDiff > 0 && m2 < 0 || b2.yDiff < 0 && m2 > 0) && (m2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitHeight * b2.yDiff)))) : (b2.xDiff && (g2 = 0), b2.yDiff && (m2 = 0));
    const y2 = this.targetScale, w2 = this.minScale, x2 = this.maxScale;
    y2 < 0.5 * w2 && (f2 = Math.max(f2, w2)), y2 > 1.5 * x2 && (f2 = Math.min(f2, x2)), "y" === this.lockedAxis && t(y2) === t(w2) && (g2 = 0), "x" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0), this.applyChange({ originX: l2, originY: d2, panX: g2, panY: m2, scale: f2, friction: this.option("dragFriction"), ignoreBounds: true });
  }
  onPointerUp(t2, e2, n2) {
    if (n2.length)
      return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e2), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t2.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t2), this.isDragging = false, this.lockedAxis = false, this.state !== m.Destroy && (t2.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e2;
    const i2 = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const t2 of v)
      this.velocity[t2] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false;
    const { trackingPoints: n2 } = this, s2 = n2[0], o2 = n2[n2.length - 1];
    let a2 = 0, r2 = 0, l2 = 0;
    o2 && s2 && (a2 = o2.clientX - s2.clientX, r2 = o2.clientY - s2.clientY, l2 = o2.time - s2.time);
    const c2 = (null === (e2 = window.visualViewport) || void 0 === e2 ? void 0 : e2.scale) || 1;
    1 !== c2 && (a2 *= c2, r2 *= c2);
    let h2 = 0, d2 = 0, u2 = 0, p2 = 0, f2 = this.option("decelFriction");
    const g2 = this.targetScale;
    if (l2 > 0) {
      u2 = Math.abs(a2) > 3 ? a2 / (l2 / 30) : 0, p2 = Math.abs(r2) > 3 ? r2 / (l2 / 30) : 0;
      const t2 = this.option("maxVelocity");
      t2 && (u2 = Math.max(Math.min(u2, t2), -1 * t2), p2 = Math.max(Math.min(p2, t2), -1 * t2));
    }
    u2 && (h2 = u2 / (1 / (1 - f2) - 1)), p2 && (d2 = p2 / (1 / (1 - f2) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g2) === this.minScale) && (h2 = u2 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g2) === this.minScale) && (d2 = p2 = 0);
    const m2 = this.dragOffset.x, b2 = this.dragOffset.y, y2 = this.option("dragMinThreshold") || 0;
    Math.abs(m2) < y2 && Math.abs(b2) < y2 && (h2 = d2 = 0, u2 = p2 = 0), (this.option("zoom") && (g2 < this.minScale - 1e-5 || g2 > this.maxScale + 1e-5) || i2 && !h2 && !d2) && (f2 = 0.35), this.applyChange({ panX: h2, panY: d2, friction: f2 }), this.emit("decel", u2, p2, m2, b2);
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
    const { current: e2, target: i2, content: n2, contentRect: s2 } = this, o2 = Object.assign({}, C);
    for (const n3 of v) {
      const s3 = "e" == n3 || "f" === n3 ? M : T;
      o2[n3] = t(e2[n3], s3), Math.abs(i2[n3] - e2[n3]) < ("e" == n3 || "f" === n3 ? 0.51 : 1e-3) && (e2[n3] = i2[n3]);
    }
    let { a: a2, b: r2, c: l2, d: c2, e: h2, f: d2 } = o2, u2 = `matrix(${a2}, ${r2}, ${l2}, ${c2}, ${h2}, ${d2})`, p2 = n2.parentElement instanceof HTMLPictureElement ? n2.parentElement : n2;
    if (this.option("transformParent") && (p2 = p2.parentElement || p2), p2.style.transform === u2)
      return;
    p2.style.transform = u2;
    const { contentWidth: f2, contentHeight: g2 } = this.calculateContentDim();
    s2.width = f2, s2.height = g2, this.emit("afterTransform");
  }
  updateMetrics(e2 = false) {
    var i2;
    if (!this || this.state === m.Destroy)
      return;
    if (this.isContentLoading)
      return;
    const n2 = Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1), { container: s2, content: o2 } = this, a2 = o2 instanceof HTMLImageElement, r2 = s2.getBoundingClientRect(), l2 = getComputedStyle(this.container);
    let c2 = r2.width * n2, h2 = r2.height * n2;
    const d2 = parseFloat(l2.paddingTop) + parseFloat(l2.paddingBottom), u2 = c2 - (parseFloat(l2.paddingLeft) + parseFloat(l2.paddingRight)), p2 = h2 - d2;
    this.containerRect = { width: c2, height: h2, innerWidth: u2, innerHeight: p2 };
    let f2 = this.option("width") || "auto", g2 = this.option("height") || "auto";
    "auto" === f2 && (f2 = parseFloat(o2.dataset.width || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2 instanceof SVGElement ? t2.width.baseVal.value : Math.max(t2.offsetWidth, t2.scrollWidth), e3 || 0;
    })(o2)), "auto" === g2 && (g2 = parseFloat(o2.dataset.height || "") || ((t2) => {
      let e3 = 0;
      return e3 = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2 instanceof SVGElement ? t2.height.baseVal.value : Math.max(t2.offsetHeight, t2.scrollHeight), e3 || 0;
    })(o2));
    let v2 = o2.parentElement instanceof HTMLPictureElement ? o2.parentElement : o2;
    this.option("transformParent") && (v2 = v2.parentElement || v2);
    const b2 = v2.getAttribute("style") || "";
    v2.style.setProperty("transform", "none", "important"), a2 && (v2.style.width = "", v2.style.height = ""), v2.offsetHeight;
    const y2 = o2.getBoundingClientRect();
    let w2 = y2.width * n2, x2 = y2.height * n2, E2 = 0, S2 = 0;
    a2 && (Math.abs(f2 - w2) > 1 || Math.abs(g2 - x2) > 1) && ({ width: w2, height: x2, top: E2, left: S2 } = ((t2, e3, i3, n3) => {
      const s3 = i3 / n3;
      return s3 > t2 / e3 ? (i3 = t2, n3 = t2 / s3) : (i3 = e3 * s3, n3 = e3), { width: i3, height: n3, top: 0.5 * (e3 - n3), left: 0.5 * (t2 - i3) };
    })(w2, x2, f2, g2)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: y2.top - r2.top + E2, bottom: r2.bottom - y2.bottom + E2, left: y2.left - r2.left + S2, right: r2.right - y2.right + S2, fitWidth: w2, fitHeight: x2, width: w2, height: x2, fullWidth: f2, fullHeight: g2 }), v2.style.cssText = b2, a2 && (v2.style.width = `${w2}px`, v2.style.height = `${x2}px`), this.setTransform(), true !== e2 && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const { contentWidth: e2, contentHeight: i2 } = this.calculateContentDim(this.target), { targetScale: n2, lockedAxis: s2 } = this, { fitWidth: o2, fitHeight: a2 } = this.contentRect;
    let r2 = 0, l2 = 0, c2 = 0, h2 = 0;
    const d2 = this.option("infinite");
    if (true === d2 || s2 && d2 === s2)
      r2 = -1 / 0, c2 = 1 / 0, l2 = -1 / 0, h2 = 1 / 0;
    else {
      let { containerRect: s3, contentRect: d3 } = this, u2 = t(o2 * n2, M), p2 = t(a2 * n2, M), { innerWidth: f2, innerHeight: g2 } = s3;
      if (s3.width === u2 && (f2 = s3.width), s3.width === p2 && (g2 = s3.height), e2 > f2) {
        c2 = 0.5 * (e2 - f2), r2 = -1 * c2;
        let t2 = 0.5 * (d3.right - d3.left);
        r2 += t2, c2 += t2;
      }
      if (o2 > f2 && e2 < f2 && (r2 -= 0.5 * (o2 - f2), c2 -= 0.5 * (o2 - f2)), i2 > g2) {
        h2 = 0.5 * (i2 - g2), l2 = -1 * h2;
        let t2 = 0.5 * (d3.bottom - d3.top);
        l2 += t2, h2 += t2;
      }
      a2 > g2 && i2 < g2 && (r2 -= 0.5 * (a2 - g2), c2 -= 0.5 * (a2 - g2));
    }
    return { x: { min: r2, max: c2 }, y: { min: l2, max: h2 } };
  }
  getBounds() {
    const t2 = this.option("bounds");
    return "auto" !== t2 ? t2 : this.calculateBounds();
  }
  updateControls() {
    const e2 = this, i2 = e2.container, { panMode: n2, contentRect: s2, targetScale: a2, minScale: r2 } = e2;
    let l2 = r2, c2 = e2.option("click") || false;
    c2 && (l2 = e2.getNextScale(c2));
    let h2 = e2.canZoomIn(), d2 = e2.canZoomOut(), u2 = n2 === A && !!this.option("touch"), p2 = d2 && u2;
    if (u2 && (t(a2) < t(r2) && !this.panOnlyZoomed && (p2 = true), (t(s2.width, 1) > t(s2.fitWidth, 1) || t(s2.height, 1) > t(s2.fitHeight, 1)) && (p2 = true)), t(s2.width * a2, 1) < t(s2.fitWidth, 1) && (p2 = false), n2 === O && (p2 = false), o(i2, this.cn("isDraggable"), p2), !this.option("zoom"))
      return;
    let f2 = h2 && t(l2) > t(a2), g2 = !f2 && !p2 && d2 && t(l2) < t(a2);
    o(i2, this.cn("canZoomIn"), f2), o(i2, this.cn("canZoomOut"), g2);
    for (const t2 of i2.querySelectorAll("[data-panzoom-action]")) {
      let e3 = false, i3 = false;
      switch (t2.dataset.panzoomAction) {
        case "zoomIn":
          h2 ? e3 = true : i3 = true;
          break;
        case "zoomOut":
          d2 ? e3 = true : i3 = true;
          break;
        case "toggleZoom":
        case "iterateZoom":
          h2 || d2 ? e3 = true : i3 = true;
          const n3 = t2.querySelector("g");
          n3 && (n3.style.display = h2 ? "" : "none");
      }
      e3 ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex")) : i3 && (t2.setAttribute("disabled", ""), t2.setAttribute("tabindex", "-1"));
    }
  }
  panTo({ x: t2 = this.target.e, y: e2 = this.target.f, scale: i2 = this.targetScale, friction: n2 = this.option("friction"), angle: s2 = 0, originX: o2 = 0, originY: a2 = 0, flipX: r2 = false, flipY: l2 = false, ignoreBounds: c2 = false }) {
    this.state !== m.Destroy && this.applyChange({ panX: t2 - this.target.e, panY: e2 - this.target.f, scale: i2 / this.targetScale, angle: s2, originX: o2, originY: a2, friction: n2, flipX: r2, flipY: l2, ignoreBounds: c2 });
  }
  applyChange({ panX: e2 = 0, panY: i2 = 0, scale: n2 = 1, angle: s2 = 0, originX: o2 = -this.current.e, originY: a2 = -this.current.f, friction: r2 = this.option("friction"), flipX: l2 = false, flipY: c2 = false, ignoreBounds: h2 = false, bounce: d2 = this.option("bounce") }) {
    const u2 = this.state;
    if (u2 === m.Destroy)
      return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r2 || 0, this.ignoreBounds = h2;
    const { current: p2 } = this, f2 = p2.e, g2 = p2.f, b2 = this.getMatrix(this.target);
    let y2 = new DOMMatrix().translate(f2, g2).translate(o2, a2).translate(e2, i2);
    if (this.option("zoom")) {
      if (!h2) {
        const t2 = this.targetScale, e3 = this.minScale, i3 = this.maxScale;
        t2 * n2 < e3 && (n2 = e3 / t2), t2 * n2 > i3 && (n2 = i3 / t2);
      }
      y2 = y2.scale(n2);
    }
    y2 = y2.translate(-o2, -a2).translate(-f2, -g2).multiply(b2), s2 && (y2 = y2.rotate(s2)), l2 && (y2 = y2.scale(-1, 1)), c2 && (y2 = y2.scale(1, -1));
    for (const e3 of v)
      "e" !== e3 && "f" !== e3 && (y2[e3] > this.minScale + 1e-5 || y2[e3] < this.minScale - 1e-5) ? this.target[e3] = y2[e3] : this.target[e3] = t(y2[e3], M);
    (this.targetScale < this.scale || Math.abs(n2 - 1) > 0.1 || this.panMode === O || false === d2) && !h2 && this.clampTargetBounds(), u2 === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop(t2 = false) {
    if (this.state === m.Init || this.state === m.Destroy)
      return;
    const e2 = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const e3 of v)
      this.velocity[e3] = 0, "current" === t2 ? this.current[e3] = this.target[e3] : "target" === t2 && (this.target[e3] = this.current[e3]);
    this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false, this.state = m.Ready, e2 && (this.emit("endAnimation"), this.updateControls());
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
    const { container: n2, containerRect: s2, contentRect: o2 } = this, a2 = s2.width, r2 = s2.height, l2 = n2.getBoundingClientRect(), c2 = (e2.clientX || 0) - l2.left, h2 = (e2.clientY || 0) - l2.top;
    let { contentWidth: d2, contentHeight: u2 } = this.calculateContentDim(this.target);
    const p2 = this.option("mouseMoveFactor");
    p2 > 1 && (d2 !== a2 && (d2 *= p2), u2 !== r2 && (u2 *= p2));
    let f2 = 0.5 * (d2 - a2) - c2 / a2 * 100 / 100 * (d2 - a2);
    f2 += 0.5 * (o2.right - o2.left);
    let g2 = 0.5 * (u2 - r2) - h2 / r2 * 100 / 100 * (u2 - r2);
    g2 += 0.5 * (o2.bottom - o2.top), this.applyChange({ panX: f2 - this.target.e, panY: g2 - this.target.f, friction: i2 });
  }
  zoomWithWheel(e2) {
    if (this.state === m.Destroy || this.state === m.Init)
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
    if (this.isContentLoading || this.state === m.Destroy)
      return;
    const { targetScale: o2, fullScale: a2, maxScale: r2, coverScale: l2 } = this;
    if (this.stop(), this.panMode === O && (s2 = this.pmme || s2), s2 || "auto" === i2 || "auto" === n2) {
      const t3 = this.content.getBoundingClientRect(), e3 = this.container.getBoundingClientRect(), o3 = s2 ? s2.clientX : e3.left + 0.5 * e3.width, a3 = s2 ? s2.clientY : e3.top + 0.5 * e3.height;
      i2 = o3 - t3.left - 0.5 * t3.width, n2 = a3 - t3.top - 0.5 * t3.height;
    }
    let c2 = 1;
    "number" == typeof t2 ? c2 = t2 : "full" === t2 ? c2 = a2 : "cover" === t2 ? c2 = l2 : "max" === t2 ? c2 = r2 : "fit" === t2 ? c2 = 1 : "next" === t2 && (c2 = this.getNextScale("iterateZoom")), c2 = c2 / o2 || 1, e2 = "auto" === e2 ? c2 > 1 ? 0.15 : 0.25 : e2, this.applyChange({ scale: c2, originX: i2, originY: n2, friction: e2 }), s2 && this.panMode === O && this.panWithMouse(s2, e2);
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
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t3 of v)
        this.target[t3] = C[t3];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t2 ? this.option("friction") : t2, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const { container: t2, content: e2 } = this, i2 = this.option("classes") || {};
    for (const e3 of Object.values(i2))
      t2.classList.remove(e3 + "");
    e2 && (e2.removeEventListener("load", this.onLoad), e2.removeEventListener("error", this.onError)), this.detachPlugins();
  }
};
Object.defineProperty(k, "defaults", { enumerable: true, configurable: true, writable: true, value: y }), Object.defineProperty(k, "Plugins", { enumerable: true, configurable: true, writable: true, value: {} });
var I = function(t2, e2) {
  let i2 = true;
  return (...n2) => {
    i2 && (i2 = false, t2(...n2), setTimeout(() => {
      i2 = true;
    }, e2));
  };
};
var D = (t2, e2) => {
  let i2 = [];
  return t2.childNodes.forEach((t3) => {
    t3.nodeType !== Node.ELEMENT_NODE || e2 && !t3.matches(e2) || i2.push(t3);
  }), i2;
};
var F = { viewport: null, track: null, enabled: true, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: 0.12, Panzoom: { decelFriction: 0.12 }, center: true, infinite: true, fill: true, dragFree: false, adaptiveHeight: false, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
var j;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Destroy = 2] = "Destroy";
}(j || (j = {}));
var B = (t2) => {
  if ("string" == typeof t2 || t2 instanceof HTMLElement)
    t2 = { html: t2 };
  else {
    const e2 = t2.thumb;
    void 0 !== e2 && ("string" == typeof e2 && (t2.thumbSrc = e2), e2 instanceof HTMLImageElement && (t2.thumbEl = e2, t2.thumbElSrc = e2.src, t2.thumbSrc = e2.src), delete t2.thumb);
  }
  return Object.assign({ html: "", el: null, isDom: false, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: false }, t2);
};
var H = (t2 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t2);
var N = class extends f {
  constructor(t2, e2) {
    super(e2), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t2 });
  }
  attach() {
  }
  detach() {
  }
};
var _ = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
var $ = class extends N {
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
    const e2 = this.instance.pages.length, i2 = Math.min(2, this.option("minCount")), n2 = Math.max(2e3, this.option("maxCount")), s2 = this.option("dynamicFrom");
    if (e2 < i2 || e2 > n2)
      return void this.cleanup();
    const a2 = "number" == typeof s2 && e2 > 5 && e2 >= s2, r2 = !this.list || this.isDynamic !== a2 || this.list.children.length !== e2;
    r2 && this.cleanup();
    const l2 = this.build();
    if (o(l2, this.cn("isDynamic"), !!a2), r2)
      for (let t3 = 0; t3 < e2; t3++)
        l2.append(this.createItem(t3));
    let c2, h2 = 0;
    for (const e3 of [...l2.children]) {
      const i3 = h2 === this.instance.page;
      i3 && (c2 = e3), o(e3, this.cn("isCurrent"), i3), null === (t2 = e3.children[0]) || void 0 === t2 || t2.setAttribute("aria-selected", i3 ? "true" : "false");
      for (const t3 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
        S(e3, this.cn(t3));
      h2++;
    }
    if (c2 = c2 || l2.firstChild, a2 && c2) {
      const t3 = c2.previousElementSibling, e3 = t3 && t3.previousElementSibling;
      P(t3, this.cn("isPrev")), P(e3, this.cn("isBeforePrev"));
      const i3 = c2.nextElementSibling, n3 = i3 && i3.nextElementSibling;
      P(i3, this.cn("isNext")), P(n3, this.cn("isAfterNext"));
    }
    this.isDynamic = a2;
  }
  createItem(t2 = 0) {
    var e2;
    const i2 = document.createElement("li");
    i2.setAttribute("role", "presentation");
    const s2 = n(this.instance.localize(this.option("dotTpl"), [["%d", t2 + 1]]).replace(/\%i/g, t2 + ""));
    return i2.appendChild(s2), null === (e2 = i2.children[0]) || void 0 === e2 || e2.setAttribute("role", "tab"), i2;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = false, S(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty($, "defaults", { enumerable: true, configurable: true, writable: true, value: _ });
var W = "disabled";
var X = "next";
var q = "prev";
var Y = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prev", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "next", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isDom", { enumerable: true, configurable: true, writable: true, value: false });
  }
  onRefresh() {
    const t2 = this.instance, e2 = t2.pages.length, i2 = t2.page;
    if (e2 < 2)
      return void this.cleanup();
    this.build();
    let n2 = this.prev, s2 = this.next;
    n2 && s2 && (n2.removeAttribute(W), s2.removeAttribute(W), t2.isInfinite || (i2 <= 0 && n2.setAttribute(W, ""), i2 >= e2 - 1 && s2.setAttribute(W, "")));
  }
  addBtn(t2) {
    var e2;
    const i2 = this.instance, n2 = document.createElement("button");
    n2.setAttribute("tabindex", "0"), n2.setAttribute("title", i2.localize(`{{${t2.toUpperCase()}}}`)), P(n2, this.cn("button") + " " + this.cn(t2 === X ? "isNext" : "isPrev"));
    const s2 = i2.isRTL ? t2 === X ? q : X : t2;
    var o2;
    return n2.innerHTML = i2.localize(this.option(`${s2}Tpl`)), n2.dataset[`carousel${o2 = t2, o2 ? o2.match("^[a-z]") ? o2.charAt(0).toUpperCase() + o2.substring(1) : o2 : ""}`] = "true", null === (e2 = this.container) || void 0 === e2 || e2.appendChild(n2), n2;
  }
  build() {
    const t2 = this.instance.container, e2 = this.cn("container");
    let { container: i2, prev: n2, next: s2 } = this;
    i2 || (i2 = t2.querySelector("." + e2), this.isDom = !!i2), i2 || (i2 = document.createElement("div"), P(i2, e2), t2.appendChild(i2)), this.container = i2, s2 || (s2 = i2.querySelector("[data-carousel-next]")), s2 || (s2 = this.addBtn(X)), this.next = s2, n2 || (n2 = i2.querySelector("[data-carousel-prev]")), n2 || (n2 = this.addBtn(q)), this.prev = n2;
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
Object.defineProperty(Y, "defaults", { enumerable: true, configurable: true, writable: true, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
var V = class extends N {
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
    const c2 = parseInt(l2.dataset.index || "", 10) || 0, h2 = r2.getPageForSlide(c2), d2 = a2.getPageForSlide(c2);
    a2.slideTo(d2), r2.slideTo(h2, { friction: (null === (s2 = null === (n2 = this.nav) || void 0 === n2 ? void 0 : n2.plugins) || void 0 === s2 ? void 0 : s2.Sync.option("friction")) || 0 }), this.markSelectedSlide(c2);
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
Object.defineProperty(V, "defaults", { enumerable: true, configurable: true, writable: true, value: { friction: 0.35 } });
var Z = { Navigation: Y, Dots: $, Sync: V };
var U = "animationend";
var G = "isSelected";
var K = "slide";
var J = class _J extends g {
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
    if (super(), Object.defineProperty(this, "bp", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "lp", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "userOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: j.Init }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "prevPage", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "viewport", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "slides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pages", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "panzoom", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "inTransition", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "contentDim", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "viewportDim", { enumerable: true, configurable: true, writable: true, value: 0 }), "string" == typeof t2 && (t2 = document.querySelector(t2)), !t2 || !E(t2))
      throw new Error("No Element found");
    this.container = t2, this.slideNext = I(this.slideNext.bind(this), 150), this.slidePrev = I(this.slidePrev.bind(this), 150), this.userOptions = e2, this.userPlugins = i2, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t2, e2;
    const i2 = u({}, _J.defaults, this.userOptions);
    let n2 = "";
    const s2 = i2.breakpoints;
    if (s2 && d(s2))
      for (const [t3, e3] of Object.entries(s2))
        window.matchMedia(t3).matches && d(e3) && (n2 += t3, u(i2, e3));
    n2 === this.bp && this.state !== j.Init || (this.bp = n2, this.state === j.Ready && (i2.initialSlide = (null === (e2 = null === (t2 = this.pages[this.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0), this.state !== j.Init && this.destroy(), super.setOptions(i2), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = j.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, _J.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = j.Ready, this.emit("ready");
  }
  initLayout() {
    const { container: t2 } = this, e2 = this.option("classes");
    P(t2, this.cn("container")), o(t2, e2.isLTR, !this.isRTL), o(t2, e2.isRTL, this.isRTL), o(t2, e2.isVertical, !this.isHorizontal), o(t2, e2.isHorizontal, this.isHorizontal);
    let i2 = this.option("viewport") || t2.querySelector(`.${e2.viewport}`);
    i2 || (i2 = document.createElement("div"), P(i2, e2.viewport), i2.append(...D(t2, `.${e2.slide}`)), t2.prepend(i2)), i2.addEventListener("scroll", this.onScroll);
    let n2 = this.option("track") || t2.querySelector(`.${e2.track}`);
    n2 || (n2 = document.createElement("div"), P(n2, e2.track), n2.append(...Array.from(i2.childNodes))), n2.setAttribute("aria-live", "polite"), i2.contains(n2) || i2.prepend(n2), this.viewport = i2, this.track = n2, this.emit("initLayout");
  }
  initSlides() {
    const { track: t2 } = this;
    if (!t2)
      return;
    const e2 = [...this.slides], i2 = [];
    [...D(t2, `.${this.cn(K)}`)].forEach((t3) => {
      if (E(t3)) {
        const e3 = B({ el: t3, isDom: true, index: this.slides.length });
        i2.push(e3);
      }
    });
    for (let t3 of [...this.option("slides", []) || [], ...e2])
      i2.push(B(t3));
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
    this.panzoom = new k(this.viewport, u({}, { content: this.track, zoom: false, panOnlyZoomed: false, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: false, dblClick: false, touch: (t3) => !(this.pages.length < 2 && !t3.options.infinite), bounds: () => this.getBounds(), maxVelocity: (t3) => Math.abs(t3.target[this.axis] - t3.current[this.axis]) < 2 * this.viewportDim ? 100 : 0 }, t2)), this.panzoom.on("*", (t3, e2, ...i2) => {
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
      (!t2.length || o2 + e3.dim - i2 > 0.05 || a2 >= n2) && (t2.push(H()), s2 = t2.length - 1, o2 = 0, a2 = 0), t2[s2].slides.push(e3), o2 += e3.dim + e3.gap, a2++;
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
    let c2;
    return e2.forEach((t2) => {
      const e3 = Object.assign({}, t2);
      c2 && e3.pos === c2.pos ? (c2.dim += e3.dim, c2.slides = [...c2.slides, ...e3.slides]) : (e3.index = l2.length, c2 = e3, l2.push(e3));
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
    if (r2 ? o2 = parseFloat(r2.dataset[s2] || "") || 0 : (r2 = document.createElement("div"), r2.style.visibility = "hidden", (this.track || document.body).prepend(r2)), P(r2, this.cn(K) + " " + e2.class + " " + e2.customClass), o2)
      r2.style[s2] = `${o2}px`, r2.style["width" === s2 ? "height" : "width"] = "";
    else {
      l2 && (this.track || document.body).prepend(r2), o2 = r2.getBoundingClientRect()[s2] * Math.max(1, (null === (i2 = window.visualViewport) || void 0 === i2 ? void 0 : i2.scale) || 1);
      let t2 = r2[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t2 - 1 > o2 && (o2 = t2);
    }
    const c2 = getComputedStyle(r2);
    return "content-box" === c2.boxSizing && (this.isHorizontal ? (o2 += parseFloat(c2.paddingLeft) || 0, o2 += parseFloat(c2.paddingRight) || 0) : (o2 += parseFloat(c2.paddingTop) || 0, o2 += parseFloat(c2.paddingBottom) || 0)), a2 = parseFloat(c2[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l2 ? null === (n2 = r2.parentElement) || void 0 === n2 || n2.removeChild(r2) : e2.el || r2.remove(), { dim: t(o2, 1e3), gap: t(a2, 1e3) };
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
    let e2, { isHorizontal: i2, isRTL: n2, isInfinite: s2, viewport: o2, viewportDim: a2, contentDim: r2, page: l2, pages: c2, slides: h2, panzoom: d2 } = this, u2 = 0, p2 = 0, f2 = 0, g2 = 0;
    d2 ? g2 = -1 * d2.current[this.axis] : c2[l2] && (g2 = c2[l2].pos || 0), e2 = i2 ? n2 ? "right" : "left" : "top", n2 && i2 && (g2 *= -1);
    for (const i3 of h2) {
      const n3 = i3.el;
      n3 ? ("top" === e2 ? (n3.style.right = "", n3.style.left = "") : n3.style.top = "", i3.index !== u2 ? n3.style[e2] = 0 === p2 ? "" : `${t(p2, 1e3)}px` : n3.style[e2] = "", f2 += i3.dim + i3.gap, u2++) : p2 += i3.dim + i3.gap;
    }
    if (s2 && f2 && o2) {
      let n3 = getComputedStyle(o2), s3 = "padding", l3 = i2 ? "Right" : "Bottom", c3 = parseFloat(n3[s3 + (i2 ? "Left" : "Top")]);
      g2 -= c3, a2 += c3, a2 += parseFloat(n3[s3 + l3]);
      for (const i3 of h2)
        i3.el && (t(i3.pos) < t(a2) && t(i3.pos + i3.dim + i3.gap) < t(g2) && t(g2) > t(r2 - a2) && (i3.el.style[e2] = `${t(p2 + f2, 1e3)}px`), t(i3.pos + i3.gap) >= t(r2 - a2) && t(i3.pos) > t(g2 + a2) && t(g2) < t(a2) && (i3.el.style[e2] = `-${t(f2, 1e3)}px`));
    }
    let m2, v2, b2 = [...this.inTransition];
    if (b2.length > 1 && (m2 = c2[b2[0]], v2 = c2[b2[1]]), m2 && v2) {
      let i3 = 0;
      for (const n3 of h2)
        n3.el ? this.inTransition.has(n3.index) && m2.slides.indexOf(n3) < 0 && (n3.el.style[e2] = `${t(i3 + (m2.pos - v2.pos), 1e3)}px`) : i3 += n3.dim + n3.gap;
    }
  }
  createSlideEl(t2) {
    const { track: e2, slides: i2 } = this;
    if (!e2 || !t2)
      return;
    if (t2.el && t2.el.parentNode)
      return;
    const n2 = t2.el || document.createElement("div");
    P(n2, this.cn(K)), P(n2, t2.class), P(n2, t2.customClass);
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
    const n2 = this.cn(G);
    if (i2.classList.contains(n2) && (S(i2, n2), this.emit("unselectSlide", t2)), t2.isDom && !e2)
      return i2.removeAttribute("aria-hidden"), i2.removeAttribute("data-index"), void (i2.style.left = "");
    this.emit("removeSlide", t2);
    const s2 = new CustomEvent(U);
    i2.dispatchEvent(s2), t2.el && (t2.el.remove(), t2.el = null);
  }
  transitionTo(t2 = 0, e2 = this.option("transition")) {
    var i2, n2, s2, o2;
    if (!e2)
      return false;
    const a2 = this.page, { pages: r2, panzoom: l2 } = this;
    t2 = parseInt((t2 || 0).toString()) || 0;
    const c2 = this.getPageFromIndex(t2);
    if (!l2 || !r2[c2] || r2.length < 2 || Math.abs(((null === (n2 = null === (i2 = r2[a2]) || void 0 === i2 ? void 0 : i2.slides[0]) || void 0 === n2 ? void 0 : n2.dim) || 0) - this.viewportDim) > 1)
      return false;
    const h2 = t2 > a2 ? 1 : -1, d2 = r2[c2].pos * (this.isRTL ? 1 : -1);
    if (a2 === c2 && Math.abs(d2 - l2.target[this.axis]) < 1)
      return false;
    this.clearTransitions();
    const u2 = l2.isResting;
    P(this.container, this.cn("inTransition"));
    const p2 = (null === (s2 = r2[a2]) || void 0 === s2 ? void 0 : s2.slides[0]) || null, f2 = (null === (o2 = r2[c2]) || void 0 === o2 ? void 0 : o2.slides[0]) || null;
    this.inTransition.add(f2.index), this.createSlideEl(f2);
    let g2 = p2.el, m2 = f2.el;
    u2 || e2 === K || (e2 = "fadeFast", g2 = null);
    const v2 = this.isRTL ? "next" : "prev", b2 = this.isRTL ? "prev" : "next";
    return g2 && (this.inTransition.add(p2.index), p2.transition = e2, g2.addEventListener(U, this.onAnimationEnd), g2.classList.add(`f-${e2}Out`, `to-${h2 > 0 ? b2 : v2}`)), m2 && (f2.transition = e2, m2.addEventListener(U, this.onAnimationEnd), m2.classList.add(`f-${e2}In`, `from-${h2 > 0 ? v2 : b2}`)), l2.current[this.axis] = d2, l2.target[this.axis] = d2, l2.requestTick(), this.onChange(c2), true;
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
    let e2 = this.cn(G);
    if (e2)
      for (const i2 of this.slides) {
        const n2 = i2.el;
        n2 && (n2.dataset.index = `${i2.index}`, n2.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i2) ? n2.removeAttribute(t2) : n2.setAttribute(t2, "true") : this.pages[this.page].slides.includes(i2) ? (n2.classList.contains(e2) || (P(n2, e2), this.emit("selectSlide", i2)), n2.removeAttribute(t2)) : (n2.classList.contains(e2) && (S(n2, e2), this.emit("unselectSlide", i2)), n2.setAttribute(t2, "true")));
      }
  }
  flipInfiniteTrack() {
    const { axis: t2, isHorizontal: e2, isInfinite: i2, isRTL: n2, viewportDim: s2, contentDim: o2 } = this, a2 = this.panzoom;
    if (!a2 || !i2)
      return;
    let r2 = a2.current[t2], l2 = a2.target[t2] - r2, c2 = 0, h2 = 0.5 * s2;
    n2 && e2 ? (r2 < -h2 && (c2 = -1, r2 += o2), r2 > o2 - h2 && (c2 = 1, r2 -= o2)) : (r2 > h2 && (c2 = 1, r2 -= o2), r2 < -o2 + h2 && (c2 = -1, r2 += o2)), c2 && (a2.current[t2] = r2, a2.target[t2] = r2 + l2);
  }
  lazyLoadImg(t2, e2) {
    const i2 = this, s2 = "f-fadeIn", o2 = "is-preloading";
    let a2 = false, r2 = null;
    const l2 = () => {
      a2 || (a2 = true, r2 && (r2.remove(), r2 = null), S(e2, o2), e2.complete && (P(e2, s2), setTimeout(() => {
        S(e2, s2);
      }, 350)), this.option("adaptiveHeight") && t2.el && this.pages[this.page].slides.indexOf(t2) > -1 && (i2.updateMetrics(), i2.setViewportHeight()), this.emit("load", t2));
    };
    P(e2, o2), e2.src = e2.dataset.lazySrcset || e2.dataset.lazySrc || "", delete e2.dataset.lazySrc, delete e2.dataset.lazySrcset, e2.addEventListener("error", () => {
      l2();
    }), e2.addEventListener("load", () => {
      l2();
    }), setTimeout(() => {
      const i3 = e2.parentNode;
      i3 && t2.el && (e2.complete ? l2() : a2 || (r2 = n(x), i3.insertBefore(r2, e2)));
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
    const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this, c2 = l2.length, h2 = Math.abs(Math.atan2(i2, e2) / (Math.PI / 180));
    let d2 = 0;
    if (d2 = h2 > 45 && h2 < 135 ? a2 ? 0 : i2 : a2 ? e2 : 0, !c2)
      return;
    let u2 = this.page, p2 = o2 && a2 ? 1 : -1;
    const f2 = t2.current[r2] * p2;
    let { pageIndex: g2 } = this.getPageFromPosition(f2);
    Math.abs(d2) > 5 ? (l2[u2].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u2 = g2), u2 = o2 && a2 ? d2 < 0 ? u2 - 1 : u2 + 1 : d2 < 0 ? u2 + 1 : u2 - 1) : u2 = 0 === n2 && 0 === s2 ? u2 : g2, this.slideTo(u2, { transition: false, friction: t2.option("decelFriction") });
  }
  onClick(t2) {
    const e2 = t2.target, i2 = e2 && E(e2) ? e2.dataset : null;
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
    const n2 = this.getPageFromIndex(t2), { axis: s2, isHorizontal: o2, isRTL: a2, pages: r2, panzoom: l2 } = this, c2 = r2.length, h2 = a2 && o2 ? 1 : -1;
    if (!l2 || !c2)
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
      const e3 = this.contentDim, i3 = l2.target[s2] * h2;
      if (2 === c2)
        d2 += e3 * Math.floor(parseFloat(t2 + "") / 2);
      else {
        d2 = [d2, d2 - e3, d2 + e3].reduce(function(t3, e4) {
          return Math.abs(e4 - i3) < Math.abs(t3 - i3) ? e4 : t3;
        });
      }
    }
    d2 *= h2, Math.abs(l2.target[s2] - d2) < 1 || (l2.panTo({ x: o2 ? d2 : 0, y: o2 ? 0 : d2, friction: e2 }), this.onChange(n2));
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
    this.inTransition.clear(), S(this.container, this.cn("inTransition"));
    const t2 = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e2 of this.slides) {
      const i2 = e2.el;
      if (i2) {
        i2.removeEventListener(U, this.onAnimationEnd), i2.classList.remove(...t2);
        const n2 = e2.transition;
        n2 && i2.classList.remove(`f-${n2}Out`, `f-${n2}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t2, e2) {
    var i2, n2, s2, o2;
    const a2 = this.panzoom, r2 = (null === (i2 = this.pages[this.page]) || void 0 === i2 ? void 0 : i2.pos) || 0, l2 = (null === (n2 = this.pages[this.page]) || void 0 === n2 ? void 0 : n2.dim) || 0, c2 = this.contentDim < this.viewportDim;
    let h2 = Array.isArray(e2) ? e2 : [e2];
    const d2 = [];
    for (const t3 of h2)
      d2.push(B(t3));
    this.slides.splice(t2, 0, ...d2);
    for (let t3 = 0; t3 < this.slides.length; t3++)
      this.slides[t3].index = t3;
    for (const t3 of d2)
      this.emit("beforeInitSlide", t3, t3.index);
    if (this.page >= t2 && (this.page += d2.length), this.updateMetrics(), a2) {
      const e3 = (null === (s2 = this.pages[this.page]) || void 0 === s2 ? void 0 : s2.pos) || 0, i3 = (null === (o2 = this.pages[this.page]) || void 0 === o2 ? void 0 : o2.dim) || 0, n3 = this.pages.length || 1, h3 = this.isRTL ? l2 - i3 : i3 - l2, d3 = this.isRTL ? r2 - e3 : e3 - r2;
      c2 && 1 === n3 ? (t2 <= this.page && (a2.current[this.axis] -= h3, a2.target[this.axis] -= h3), a2.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e3 })) : d3 && t2 <= this.page && (a2.target[this.axis] -= d3, a2.current[this.axis] -= d3, a2.requestTick());
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
    let c2, h2 = 0;
    for (const [e3, i3] of s2.entries()) {
      let n3 = 0, o3 = 0;
      !i3.el && c2 ? (n3 = c2.dim, o3 = c2.gap) : ({ dim: n3, gap: o3 } = this.getSlideMetrics(i3), c2 = i3), n3 = t(n3, 1e3), o3 = t(o3, 1e3), i3.dim = n3, i3.gap = o3, i3.pos = h2, h2 += n3, (a2 || e3 < s2.length - 1) && (h2 += o3);
    }
    h2 = t(h2, 1e3), this.contentDim = h2, e2 && (e2.contentRect[r2] = h2, e2.contentRect[o2 ? "fullWidth" : "fullHeight"] = h2), this.pages = this.createPages(), this.pages = this.processPages(), this.state === j.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e2, i2 = false, n2 = false) {
    void 0 === e2 && (e2 = this.page);
    const s2 = this, o2 = s2.panzoom, a2 = s2.contentDim, r2 = s2.pages[e2] || 0;
    if (!r2 || !o2)
      return e2 > this.page ? -1 : 1;
    let l2 = -1 * o2.current.e, c2 = t((l2 - r2.pos) / (1 * r2.dim), 1e3), h2 = c2, d2 = c2;
    this.isInfinite && true !== n2 && (h2 = t((l2 - r2.pos + a2) / (1 * r2.dim), 1e3), d2 = t((l2 - r2.pos - a2) / (1 * r2.dim), 1e3));
    let u2 = [c2, h2, d2].reduce(function(t2, e3) {
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
      l2 = n2 && n2.state !== m.Init && n2.state !== m.Destroy ? -1 * n2.current[this.axis] : a2[r2] && a2[r2].pos || 0, this.isInfinite && (l2 -= Math.floor(l2 / s2) * s2), this.isRTL && this.isHorizontal && (l2 *= -1);
      const c2 = l2 - o2 * t2, h2 = l2 + o2 * (t2 + 1), d2 = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t3 of this.slides)
        for (const e3 of d2) {
          const n3 = t3.pos + e3 * s2, o3 = n3 + t3.dim + t3.gap;
          n3 < h2 && o3 > c2 && i2.add(t3);
        }
    }
    return i2;
  }
  getPageFromPosition(t2) {
    const { viewportDim: e2, contentDim: i2, slides: n2, pages: s2, panzoom: o2 } = this, a2 = s2.length, r2 = n2.length, l2 = n2[0], c2 = n2[r2 - 1], h2 = this.option("center");
    let d2 = 0, u2 = 0, p2 = 0, f2 = void 0 === t2 ? -1 * ((null == o2 ? void 0 : o2.target[this.axis]) || 0) : t2;
    h2 && (f2 += 0.5 * e2), this.isInfinite ? (f2 < l2.pos - 0.5 * c2.gap && (f2 -= i2, p2 = -1), f2 > c2.pos + c2.dim + 0.5 * c2.gap && (f2 -= i2, p2 = 1)) : f2 = Math.max(l2.pos || 0, Math.min(f2, c2.pos));
    let g2 = c2, m2 = n2.find((t3) => {
      const e3 = t3.pos - 0.5 * g2.gap, i3 = t3.pos + t3.dim + 0.5 * t3.gap;
      return g2 = t3, f2 >= e3 && f2 < i3;
    });
    return m2 || (m2 = c2), u2 = this.getPageForSlide(m2.index), d2 = u2 + p2 * a2, { page: d2, pageIndex: u2 };
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
Object.defineProperty(J, "Panzoom", { enumerable: true, configurable: true, writable: true, value: k }), Object.defineProperty(J, "defaults", { enumerable: true, configurable: true, writable: true, value: F }), Object.defineProperty(J, "Plugins", { enumerable: true, configurable: true, writable: true, value: Z });
var Q = function(t2) {
  if (!E(t2))
    return 0;
  const e2 = window.scrollY, i2 = window.innerHeight, n2 = e2 + i2, s2 = t2.getBoundingClientRect(), o2 = s2.y + e2, a2 = s2.height, r2 = o2 + a2;
  if (e2 > r2 || n2 < o2)
    return 0;
  if (e2 < o2 && n2 > r2)
    return 100;
  if (o2 < e2 && r2 > n2)
    return 100;
  let l2 = a2;
  o2 < e2 && (l2 -= e2 - o2), r2 > n2 && (l2 -= r2 - n2);
  const c2 = l2 / i2 * 100;
  return Math.round(c2);
};
var tt = !("undefined" == typeof window || !window.document || !window.document.createElement);
var et;
var it = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(",");
var nt = (t2) => {
  if (t2 && tt) {
    void 0 === et && document.createElement("div").focus({ get preventScroll() {
      return et = true, false;
    } });
    try {
      if (et)
        t2.focus({ preventScroll: true });
      else {
        const e2 = window.scrollY || document.body.scrollTop, i2 = window.scrollX || document.body.scrollLeft;
        t2.focus(), document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
      }
    } catch (t3) {
    }
  }
};
var st = () => {
  const t2 = document;
  let e2, i2 = "", n2 = "", s2 = "";
  return t2.fullscreenEnabled ? (i2 = "requestFullscreen", n2 = "exitFullscreen", s2 = "fullscreenElement") : t2.webkitFullscreenEnabled && (i2 = "webkitRequestFullscreen", n2 = "webkitExitFullscreen", s2 = "webkitFullscreenElement"), i2 && (e2 = { request: function(e3 = t2.documentElement) {
    return "webkitRequestFullscreen" === i2 ? e3[i2](Element.ALLOW_KEYBOARD_INPUT) : e3[i2]();
  }, exit: function() {
    return t2[s2] && t2[n2]();
  }, isFullscreen: function() {
    return t2[s2];
  } }), e2;
};
var ot = { dragToClose: true, hideScrollbar: true, Carousel: { classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" } }, contentClick: "toggleZoom", contentDblClick: false, backdropClick: "close", animated: true, idle: 3500, showClass: "f-zoomInUp", hideClass: "f-fadeOut", commonCaption: false, parentEl: null, startIndex: 0, l10n: Object.assign(Object.assign({}, b), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" }), tpl: { closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>', main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>' }, groupAll: false, groupAttr: "data-fancybox", defaultType: "image", defaultDisplay: "block", autoFocus: true, trapFocus: true, placeFocusBack: true, closeButton: "auto", keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, Fullscreen: { autoStart: false }, compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches, wheel: "zoom" };
var at;
var rt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Closing = 2] = "Closing", t2[t2.CustomClosing = 3] = "CustomClosing", t2[t2.Destroy = 4] = "Destroy";
}(at || (at = {})), function(t2) {
  t2[t2.Loading = 0] = "Loading", t2[t2.Opening = 1] = "Opening", t2[t2.Ready = 2] = "Ready", t2[t2.Closing = 3] = "Closing";
}(rt || (rt = {}));
var lt = "";
var ct = false;
var ht = false;
var dt = null;
var ut = () => {
  let t2 = "", e2 = "";
  const i2 = Ce.getInstance();
  if (i2) {
    const n2 = i2.carousel, s2 = i2.getSlide();
    if (n2 && s2) {
      let o2 = s2.slug || void 0, a2 = s2.triggerEl || void 0;
      e2 = o2 || (i2.option("slug") || ""), !e2 && a2 && a2.dataset && (e2 = a2.dataset.fancybox || ""), e2 && "true" !== e2 && (t2 = "#" + e2 + (!o2 && n2.slides.length > 1 ? "-" + (s2.index + 1) : ""));
    }
  }
  return { hash: t2, slug: e2, index: 1 };
};
var pt = () => {
  const t2 = new URL(document.URL).hash, e2 = t2.slice(1).split("-"), i2 = e2[e2.length - 1], n2 = i2 && /^\+?\d+$/.test(i2) && parseInt(e2.pop() || "1", 10) || 1;
  return { hash: t2, slug: e2.join("-"), index: n2 };
};
var ft = () => {
  const { slug: t2, index: e2 } = pt();
  if (!t2)
    return;
  let i2 = document.querySelector(`[data-slug="${t2}"]`);
  if (i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), Ce.getInstance())
    return;
  const n2 = document.querySelectorAll(`[data-fancybox="${t2}"]`);
  n2.length && (i2 = n2[e2 - 1], i2 && i2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
};
var gt = () => {
  if (false === Ce.defaults.Hash)
    return;
  const t2 = Ce.getInstance();
  if (false === (null == t2 ? void 0 : t2.options.Hash))
    return;
  const { slug: e2, index: i2 } = pt(), { slug: n2 } = ut();
  t2 && (e2 === n2 ? t2.jumpTo(i2 - 1) : (ct = true, t2.close())), ft();
};
var mt = () => {
  dt && clearTimeout(dt), queueMicrotask(() => {
    gt();
  });
};
var vt = () => {
  window.addEventListener("hashchange", mt, false), setTimeout(() => {
    gt();
  }, 500);
};
tt && (/complete|interactive|loaded/.test(document.readyState) ? vt() : document.addEventListener("DOMContentLoaded", vt));
var bt = "is-zooming-in";
var yt = class extends N {
  onCreateSlide(t2, e2, i2) {
    const n2 = this.instance.optionFor(i2, "src") || "";
    i2.el && "image" === i2.type && "string" == typeof n2 && this.setImage(i2, n2);
  }
  onRemoveSlide(t2, e2, i2) {
    i2.panzoom && i2.panzoom.destroy(), i2.panzoom = void 0, i2.imageEl = void 0;
  }
  onChange(t2, e2, i2, n2) {
    S(this.instance.container, bt);
    for (const t3 of e2.slides) {
      const e3 = t3.panzoom;
      e3 && t3.index !== i2 && e3.reset(0.35);
    }
  }
  onClose() {
    var t2;
    const e2 = this.instance, i2 = e2.container, n2 = e2.getSlide();
    if (!i2 || !i2.parentElement || !n2)
      return;
    const { el: s2, contentEl: o2, panzoom: a2, thumbElSrc: r2 } = n2;
    if (!s2 || !r2 || !o2 || !a2 || a2.isContentLoading || a2.state === m.Init || a2.state === m.Destroy)
      return;
    a2.updateMetrics();
    let l2 = this.getZoomInfo(n2);
    if (!l2)
      return;
    this.instance.state = at.CustomClosing, i2.classList.remove(bt), i2.classList.add("is-zooming-out"), o2.style.backgroundImage = `url('${r2}')`;
    const c2 = i2.getBoundingClientRect();
    1 === ((null === (t2 = window.visualViewport) || void 0 === t2 ? void 0 : t2.scale) || 1) && Object.assign(i2.style, { position: "absolute", top: `${i2.offsetTop + window.scrollY}px`, left: `${i2.offsetLeft + window.scrollX}px`, bottom: "auto", right: "auto", width: `${c2.width}px`, height: `${c2.height}px`, overflow: "hidden" });
    const { x: h2, y: d2, scale: u2, opacity: p2 } = l2;
    if (p2) {
      const t3 = ((t4, e3, i3, n3) => {
        const s3 = e3 - t4, o3 = n3 - i3;
        return (e4) => i3 + ((e4 - t4) / s3 * o3 || 0);
      })(a2.scale, u2, 1, 0);
      a2.on("afterTransform", () => {
        o2.style.opacity = t3(a2.scale) + "";
      });
    }
    a2.on("endAnimation", () => {
      e2.destroy();
    }), a2.target.a = u2, a2.target.b = 0, a2.target.c = 0, a2.target.d = u2, a2.panTo({ x: h2, y: d2, scale: u2, friction: p2 ? 0.2 : 0.33, ignoreBounds: true }), a2.isResting && e2.destroy();
  }
  setImage(t2, e2) {
    const i2 = this.instance;
    t2.src = e2, this.process(t2, e2).then((e3) => {
      const { contentEl: n2, imageEl: s2, thumbElSrc: o2, el: a2 } = t2;
      if (i2.isClosing() || !n2 || !s2)
        return;
      n2.offsetHeight;
      const r2 = !!i2.isOpeningSlide(t2) && this.getZoomInfo(t2);
      if (this.option("protected") && a2) {
        a2.addEventListener("contextmenu", (t4) => {
          t4.preventDefault();
        });
        const t3 = document.createElement("div");
        P(t3, "fancybox-protected"), n2.appendChild(t3);
      }
      if (o2 && r2) {
        const s3 = e3.contentRect, a3 = Math.max(s3.fullWidth, s3.fullHeight);
        let c2 = null;
        !r2.opacity && a3 > 1200 && (c2 = document.createElement("img"), P(c2, "fancybox-ghost"), c2.src = o2, n2.appendChild(c2));
        const h2 = () => {
          c2 && (P(c2, "f-fadeFastOut"), setTimeout(() => {
            c2 && (c2.remove(), c2 = null);
          }, 200));
        };
        (l2 = o2, new Promise((t3, e4) => {
          const i3 = new Image();
          i3.onload = t3, i3.onerror = e4, i3.src = l2;
        })).then(() => {
          i2.hideLoading(t2), t2.state = rt.Opening, this.instance.emit("reveal", t2), this.zoomIn(t2).then(() => {
            h2(), this.instance.done(t2);
          }, () => {
          }), c2 && setTimeout(() => {
            h2();
          }, a3 > 2500 ? 800 : 200);
        }, () => {
          i2.hideLoading(t2), i2.revealContent(t2);
        });
      } else {
        const n3 = this.optionFor(t2, "initialSize"), s3 = this.optionFor(t2, "zoom"), o3 = { event: i2.prevMouseMoveEvent || i2.options.event, friction: s3 ? 0.12 : 0 };
        let a3 = i2.optionFor(t2, "showClass") || void 0, r3 = true;
        i2.isOpeningSlide(t2) && ("full" === n3 ? e3.zoomToFull(o3) : "cover" === n3 ? e3.zoomToCover(o3) : "max" === n3 ? e3.zoomToMax(o3) : r3 = false, e3.stop("current")), r3 && a3 && (a3 = e3.isDragging ? "f-fadeIn" : ""), i2.hideLoading(t2), i2.revealContent(t2, a3);
      }
      var l2;
    }, () => {
      i2.setError(t2, "{{IMAGE_ERROR}}");
    });
  }
  process(t2, e2) {
    return new Promise((i2, s2) => {
      var o2;
      const a2 = this.instance, r2 = t2.el;
      a2.clearContent(t2), a2.showLoading(t2);
      let l2 = this.optionFor(t2, "content");
      if ("string" == typeof l2 && (l2 = n(l2)), !l2 || !E(l2)) {
        if (l2 = document.createElement("img"), l2 instanceof HTMLImageElement) {
          let i3 = "", n2 = t2.caption;
          i3 = "string" == typeof n2 && n2 ? n2.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t2.index + 1} of ${(null === (o2 = a2.carousel) || void 0 === o2 ? void 0 : o2.pages.length) || 1}`, l2.src = e2 || "", l2.alt = i3, l2.draggable = false, t2.srcset && l2.setAttribute("srcset", t2.srcset), this.instance.isOpeningSlide(t2) && (l2.fetchPriority = "high");
        }
        t2.sizes && l2.setAttribute("sizes", t2.sizes);
      }
      P(l2, "fancybox-image"), t2.imageEl = l2, a2.setContent(t2, l2, false);
      t2.panzoom = new k(r2, u({ transformParent: true }, this.option("Panzoom") || {}, { content: l2, width: a2.optionFor(t2, "width", "auto"), height: a2.optionFor(t2, "height", "auto"), wheel: () => {
        const t3 = a2.option("wheel");
        return ("zoom" === t3 || "pan" == t3) && t3;
      }, click: (e3, i3) => {
        var n2, s3;
        if (a2.isCompact || a2.isClosing())
          return false;
        if (t2.index !== (null === (n2 = a2.getSlide()) || void 0 === n2 ? void 0 : n2.index))
          return false;
        if (i3) {
          const t3 = i3.composedPath()[0];
          if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t3.nodeName))
            return false;
        }
        let o3 = !i3 || i3.target && (null === (s3 = t2.contentEl) || void 0 === s3 ? void 0 : s3.contains(i3.target));
        return a2.option(o3 ? "contentClick" : "backdropClick") || false;
      }, dblClick: () => a2.isCompact ? "toggleZoom" : a2.option("contentDblClick") || false, spinner: false, panOnlyZoomed: true, wheelLimit: 1 / 0, on: { ready: (t3) => {
        i2(t3);
      }, error: () => {
        s2();
      }, destroy: () => {
        s2();
      } } }));
    });
  }
  zoomIn(t2) {
    return new Promise((e2, i2) => {
      const n2 = this.instance, s2 = n2.container, { panzoom: o2, contentEl: a2, el: r2 } = t2;
      o2 && o2.updateMetrics();
      const l2 = this.getZoomInfo(t2);
      if (!(l2 && r2 && a2 && o2 && s2))
        return void i2();
      const { x: c2, y: h2, scale: d2, opacity: u2 } = l2, p2 = () => {
        t2.state !== rt.Closing && (u2 && (a2.style.opacity = Math.max(Math.min(1, 1 - (1 - o2.scale) / (1 - d2)), 0) + ""), o2.scale >= 1 && o2.scale > o2.targetScale - 0.1 && e2(o2));
      }, f2 = (t3) => {
        (t3.scale < 0.99 || t3.scale > 1.01) && !t3.isDragging || (S(s2, bt), a2.style.opacity = "", t3.off("endAnimation", f2), t3.off("touchStart", f2), t3.off("afterTransform", p2), e2(t3));
      };
      o2.on("endAnimation", f2), o2.on("touchStart", f2), o2.on("afterTransform", p2), o2.on(["error", "destroy"], () => {
        i2();
      }), o2.panTo({ x: c2, y: h2, scale: d2, friction: 0, ignoreBounds: true }), o2.stop("current");
      const g2 = { event: "mousemove" === o2.panMode ? n2.prevMouseMoveEvent || n2.options.event : void 0 }, m2 = this.optionFor(t2, "initialSize");
      P(s2, bt), n2.hideLoading(t2), "full" === m2 ? o2.zoomToFull(g2) : "cover" === m2 ? o2.zoomToCover(g2) : "max" === m2 ? o2.zoomToMax(g2) : o2.reset(0.172);
    });
  }
  getZoomInfo(t2) {
    const { el: e2, imageEl: i2, thumbEl: n2, panzoom: s2 } = t2, o2 = this.instance, a2 = o2.container;
    if (!e2 || !i2 || !n2 || !s2 || Q(n2) < 3 || !this.optionFor(t2, "zoom") || !a2 || o2.state === at.Destroy)
      return false;
    if ("0" === getComputedStyle(a2).getPropertyValue("--f-images-zoom"))
      return false;
    const r2 = window.visualViewport || null;
    if (1 !== (r2 ? r2.scale : 1))
      return false;
    let { top: l2, left: c2, width: h2, height: d2 } = n2.getBoundingClientRect(), { top: u2, left: p2, fitWidth: f2, fitHeight: g2 } = s2.contentRect;
    if (!(h2 && d2 && f2 && g2))
      return false;
    const m2 = s2.container.getBoundingClientRect();
    p2 += m2.left, u2 += m2.top;
    const v2 = -1 * (p2 + 0.5 * f2 - (c2 + 0.5 * h2)), b2 = -1 * (u2 + 0.5 * g2 - (l2 + 0.5 * d2)), y2 = h2 / f2;
    let w2 = this.option("zoomOpacity") || false;
    return "auto" === w2 && (w2 = Math.abs(h2 / d2 - f2 / g2) > 0.1), { x: v2, y: b2, scale: y2, opacity: w2 };
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.change", t2.onChange), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.removeSlide", t2.onRemoveSlide), e2.on("close", t2.onClose);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.change", t2.onChange), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.removeSlide", t2.onRemoveSlide), e2.off("close", t2.onClose);
  }
};
Object.defineProperty(yt, "defaults", { enumerable: true, configurable: true, writable: true, value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: false, zoom: true, zoomOpacity: "auto" } }), "function" == typeof SuppressedError && SuppressedError;
var wt = "html";
var xt = "image";
var Et = "map";
var St = "youtube";
var Pt = "vimeo";
var Ct = "html5video";
var Tt = (t2, e2 = {}) => {
  const i2 = new URL(t2), n2 = new URLSearchParams(i2.search), s2 = new URLSearchParams();
  for (const [t3, i3] of [...n2, ...Object.entries(e2)]) {
    let e3 = i3 + "";
    if ("t" === t3) {
      let t4 = e3.match(/((\d*)m)?(\d*)s?/);
      t4 && s2.set("start", 60 * parseInt(t4[2] || "0") + parseInt(t4[3] || "0") + "");
    } else
      s2.set(t3, e3);
  }
  let o2 = s2 + "", a2 = t2.match(/#t=((.*)?\d+s)/);
  return a2 && (o2 += `#t=${a2[1]}`), o2;
};
var Mt = { ajax: null, autoSize: true, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: true, videoAutoplay: true, videoRatio: 16 / 9, videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, videoFormat: "", vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
var Ot = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
var At = class extends N {
  onBeforeInitSlide(t2, e2, i2) {
    this.processType(i2);
  }
  onCreateSlide(t2, e2, i2) {
    this.setContent(i2);
  }
  onClearContent(t2, e2) {
    e2.xhr && (e2.xhr.abort(), e2.xhr = null);
    const i2 = e2.iframeEl;
    i2 && (i2.onload = i2.onerror = null, i2.src = "//about:blank", e2.iframeEl = null);
    const n2 = e2.contentEl, s2 = e2.placeholderEl;
    if ("inline" === e2.type && n2 && s2)
      n2.classList.remove("fancybox__content"), "none" !== n2.style.display && (n2.style.display = "none"), s2.parentNode && s2.parentNode.insertBefore(n2, s2), s2.remove(), e2.contentEl = void 0, e2.placeholderEl = void 0;
    else
      for (; e2.el && e2.el.firstChild; )
        e2.el.removeChild(e2.el.firstChild);
  }
  onSelectSlide(t2, e2, i2) {
    i2.state === rt.Ready && this.playVideo();
  }
  onUnselectSlide(t2, e2, i2) {
    var n2, s2;
    if (i2.type === Ct) {
      try {
        null === (s2 = null === (n2 = i2.el) || void 0 === n2 ? void 0 : n2.querySelector("video")) || void 0 === s2 || s2.pause();
      } catch (t3) {
      }
      return;
    }
    let o2;
    i2.type === Pt ? o2 = { method: "pause", value: "true" } : i2.type === St && (o2 = { event: "command", func: "pauseVideo" }), o2 && i2.iframeEl && i2.iframeEl.contentWindow && i2.iframeEl.contentWindow.postMessage(JSON.stringify(o2), "*"), i2.poller && clearTimeout(i2.poller);
  }
  onDone(t2, e2) {
    t2.isCurrentSlide(e2) && !t2.isClosing() && this.playVideo();
  }
  onRefresh(t2, e2) {
    e2.slides.forEach((t3) => {
      t3.el && (this.resizeIframe(t3), this.setAspectRatio(t3));
    });
  }
  onMessage(t2) {
    try {
      let e2 = JSON.parse(t2.data);
      if ("https://player.vimeo.com" === t2.origin) {
        if ("ready" === e2.event)
          for (let e3 of Array.from(document.getElementsByClassName("fancybox__iframe")))
            e3 instanceof HTMLIFrameElement && e3.contentWindow === t2.source && (e3.dataset.ready = "true");
      } else if (t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e2.event) {
        const t3 = document.getElementById(e2.id);
        t3 && (t3.dataset.ready = "true");
      }
    } catch (t3) {
    }
  }
  loadAjaxContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    this.instance.showLoading(t2);
    const i2 = this.instance, n2 = new XMLHttpRequest();
    i2.showLoading(t2), n2.onreadystatechange = function() {
      n2.readyState === XMLHttpRequest.DONE && i2.state === at.Ready && (i2.hideLoading(t2), 200 === n2.status ? i2.setContent(t2, n2.responseText) : i2.setError(t2, 404 === n2.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s2 = t2.ajax || null;
    n2.open(s2 ? "POST" : "GET", e2 + ""), n2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n2.send(s2), t2.xhr = n2;
  }
  setInlineContent(t2) {
    let e2 = null;
    if (E(t2.src))
      e2 = t2.src;
    else if ("string" == typeof t2.src) {
      const i2 = t2.src.split("#", 2).pop();
      e2 = i2 ? document.getElementById(i2) : null;
    }
    if (e2) {
      if ("clone" === t2.type || e2.closest(".fancybox__slide")) {
        e2 = e2.cloneNode(true);
        const i2 = e2.dataset.animationName;
        i2 && (e2.classList.remove(i2), delete e2.dataset.animationName);
        let n2 = e2.getAttribute("id");
        n2 = n2 ? `${n2}--clone` : `clone-${this.instance.id}-${t2.index}`, e2.setAttribute("id", n2);
      } else if (e2.parentNode) {
        const i2 = document.createElement("div");
        i2.classList.add("fancybox-placeholder"), e2.parentNode.insertBefore(i2, e2), t2.placeholderEl = i2;
      }
      this.instance.setContent(t2, e2);
    } else
      this.instance.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t2) {
    const { src: e2, el: i2 } = t2;
    if (!e2 || "string" != typeof e2 || !i2)
      return;
    i2.classList.add("is-loading");
    const n2 = this.instance, s2 = document.createElement("iframe");
    s2.className = "fancybox__iframe", s2.setAttribute("id", `fancybox__iframe_${n2.id}_${t2.index}`);
    for (const [e3, i3] of Object.entries(this.optionFor(t2, "iframeAttr") || {}))
      s2.setAttribute(e3, i3);
    s2.onerror = () => {
      n2.setError(t2, "{{IFRAME_ERROR}}");
    }, t2.iframeEl = s2;
    const o2 = this.optionFor(t2, "preload");
    if ("iframe" !== t2.type || false === o2)
      return s2.setAttribute("src", t2.src + ""), n2.setContent(t2, s2, false), this.resizeIframe(t2), void n2.revealContent(t2);
    n2.showLoading(t2), s2.onload = () => {
      if (!s2.src.length)
        return;
      const e3 = "true" !== s2.dataset.ready;
      s2.dataset.ready = "true", this.resizeIframe(t2), e3 ? n2.revealContent(t2) : n2.hideLoading(t2);
    }, s2.setAttribute("src", e2), n2.setContent(t2, s2, false);
  }
  resizeIframe(t2) {
    const { type: e2, iframeEl: i2 } = t2;
    if (e2 === St || e2 === Pt)
      return;
    const n2 = null == i2 ? void 0 : i2.parentElement;
    if (!i2 || !n2)
      return;
    let s2 = t2.autoSize;
    void 0 === s2 && (s2 = this.optionFor(t2, "autoSize"));
    let o2 = t2.width || 0, a2 = t2.height || 0;
    o2 && a2 && (s2 = false);
    const r2 = n2 && n2.style;
    if (false !== t2.preload && false !== s2 && r2)
      try {
        const t3 = window.getComputedStyle(n2), e3 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight), s3 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), l2 = i2.contentWindow;
        if (l2) {
          const t4 = l2.document, i3 = t4.getElementsByTagName(wt)[0], n3 = t4.body;
          r2.width = "", n3.style.overflow = "hidden", o2 = o2 || i3.scrollWidth + e3, r2.width = `${o2}px`, n3.style.overflow = "", r2.flex = "0 0 auto", r2.height = `${n3.scrollHeight}px`, a2 = i3.scrollHeight + s3;
        }
      } catch (t3) {
      }
    if (o2 || a2) {
      const t3 = { flex: "0 1 auto", width: "", height: "" };
      o2 && "auto" !== o2 && (t3.width = `${o2}px`), a2 && "auto" !== a2 && (t3.height = `${a2}px`), Object.assign(r2, t3);
    }
  }
  playVideo() {
    const t2 = this.instance.getSlide();
    if (!t2)
      return;
    const { el: e2 } = t2;
    if (!e2 || !e2.offsetParent)
      return;
    if (!this.optionFor(t2, "videoAutoplay"))
      return;
    if (t2.type === Ct)
      try {
        const t3 = e2.querySelector("video");
        if (t3) {
          const e3 = t3.play();
          void 0 !== e3 && e3.then(() => {
          }).catch((e4) => {
            t3.muted = true, t3.play();
          });
        }
      } catch (t3) {
      }
    if (t2.type !== St && t2.type !== Pt)
      return;
    const i2 = () => {
      if (t2.iframeEl && t2.iframeEl.contentWindow) {
        let e3;
        if ("true" === t2.iframeEl.dataset.ready)
          return e3 = t2.type === St ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e3 && t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"), void (t2.poller = void 0);
        t2.type === St && (e3 = { event: "listening", id: t2.iframeEl.getAttribute("id") }, t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
      }
      t2.poller = setTimeout(i2, 250);
    };
    i2();
  }
  processType(t2) {
    if (t2.html)
      return t2.type = wt, t2.src = t2.html, void (t2.html = "");
    const e2 = this.instance.optionFor(t2, "src", "");
    if (!e2 || "string" != typeof e2)
      return;
    let i2 = t2.type, n2 = null;
    if (n2 = e2.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s2 = this.optionFor(t2, St), { nocookie: o2 } = s2, a2 = function(t3, e3) {
        var i3 = {};
        for (var n3 in t3)
          Object.prototype.hasOwnProperty.call(t3, n3) && e3.indexOf(n3) < 0 && (i3[n3] = t3[n3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var s3 = 0;
          for (n3 = Object.getOwnPropertySymbols(t3); s3 < n3.length; s3++)
            e3.indexOf(n3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, n3[s3]) && (i3[n3[s3]] = t3[n3[s3]]);
        }
        return i3;
      }(s2, ["nocookie"]), r2 = `www.youtube${o2 ? "-nocookie" : ""}.com`, l2 = Tt(e2, a2), c2 = encodeURIComponent(n2[2]);
      t2.videoId = c2, t2.src = `https://${r2}/embed/${c2}?${l2}`, t2.thumbSrc = t2.thumbSrc || `https://i.ytimg.com/vi/${c2}/mqdefault.jpg`, i2 = St;
    } else if (n2 = e2.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s2 = Tt(e2, this.optionFor(t2, Pt)), o2 = encodeURIComponent(n2[1]), a2 = n2[4] || "";
      t2.videoId = o2, t2.src = `https://player.vimeo.com/video/${o2}?${a2 ? `h=${a2}${s2 ? "&" : ""}` : ""}${s2}`, i2 = Pt;
    }
    if (!i2 && t2.triggerEl) {
      const e3 = t2.triggerEl.dataset.type;
      Ot.includes(e3) && (i2 = e3);
    }
    i2 || "string" == typeof e2 && ("#" === e2.charAt(0) ? i2 = "inline" : (n2 = e2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i2 = Ct, t2.videoFormat = t2.videoFormat || "video/" + ("ogv" === n2[1] ? "ogg" : n2[1])) : e2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i2 = xt : e2.match(/\.(pdf)((\?|#).*)?$/i) && (i2 = "pdf")), (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t2.src = `https://maps.google.${n2[1]}/?ll=${(n2[2] ? n2[2] + "&z=" + Math.floor(parseFloat(n2[3])) + (n2[4] ? n2[4].replace(/^\//, "&") : "") : n2[4] + "").replace(/\?/, "&")}&output=${n2[4] && n2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i2 = Et) : (n2 = e2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t2.src = `https://maps.google.${n2[1]}/maps?q=${n2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i2 = Et), i2 = i2 || this.instance.option("defaultType"), t2.type = i2, i2 === xt && (t2.thumbSrc = t2.thumbSrc || t2.src);
  }
  setContent(t2) {
    const e2 = this.instance.optionFor(t2, "src") || "";
    if (t2 && t2.type && e2) {
      switch (t2.type) {
        case wt:
          this.instance.setContent(t2, e2);
          break;
        case Ct:
          const i2 = this.option("videoTpl");
          i2 && this.instance.setContent(t2, i2.replace(/\{\{src\}\}/gi, e2 + "").replace(/\{\{format\}\}/gi, this.optionFor(t2, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t2.poster || t2.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t2);
          break;
        case "ajax":
          this.loadAjaxContent(t2);
          break;
        case "pdf":
        case Et:
        case St:
        case Pt:
          t2.preload = false;
        case "iframe":
          this.setIframeContent(t2);
      }
      this.setAspectRatio(t2);
    }
  }
  setAspectRatio(t2) {
    const e2 = t2.contentEl;
    if (!(t2.el && e2 && t2.type && [St, Pt, Ct].includes(t2.type)))
      return;
    let i2, n2 = t2.width || "auto", s2 = t2.height || "auto";
    if ("auto" === n2 || "auto" === s2) {
      i2 = this.optionFor(t2, "videoRatio");
      const e3 = (i2 + "").match(/(\d+)\s*\/\s?(\d+)/);
      i2 = e3 && e3.length > 2 ? parseFloat(e3[1]) / parseFloat(e3[2]) : parseFloat(i2 + "");
    } else
      n2 && s2 && (i2 = n2 / s2);
    if (!i2)
      return;
    e2.style.aspectRatio = "", e2.style.width = "", e2.style.height = "", e2.offsetHeight;
    const o2 = e2.getBoundingClientRect(), a2 = o2.width || 1, r2 = o2.height || 1;
    e2.style.aspectRatio = i2 + "", i2 < a2 / r2 ? (s2 = "auto" === s2 ? r2 : Math.min(r2, s2), e2.style.width = "auto", e2.style.height = `${s2}px`) : (n2 = "auto" === n2 ? a2 : Math.min(a2, n2), e2.style.width = `${n2}px`, e2.style.height = "auto");
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.on("Carousel.createSlide", t2.onCreateSlide), e2.on("Carousel.selectSlide", t2.onSelectSlide), e2.on("Carousel.unselectSlide", t2.onUnselectSlide), e2.on("Carousel.Panzoom.refresh", t2.onRefresh), e2.on("done", t2.onDone), e2.on("clearContent", t2.onClearContent), window.addEventListener("message", t2.onMessage);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.beforeInitSlide", t2.onBeforeInitSlide), e2.off("Carousel.createSlide", t2.onCreateSlide), e2.off("Carousel.selectSlide", t2.onSelectSlide), e2.off("Carousel.unselectSlide", t2.onUnselectSlide), e2.off("Carousel.Panzoom.refresh", t2.onRefresh), e2.off("done", t2.onDone), e2.off("clearContent", t2.onClearContent), window.removeEventListener("message", t2.onMessage);
  }
};
Object.defineProperty(At, "defaults", { enumerable: true, configurable: true, writable: true, value: Mt });
var Lt = "play";
var zt = "pause";
var Rt = "ready";
var kt = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Rt }), Object.defineProperty(this, "inHover", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "progressBar", { enumerable: true, configurable: true, writable: true, value: null });
  }
  get isActive() {
    return this.state !== Rt;
  }
  onReady(t2) {
    this.option("autoStart") && (t2.isInfinite || t2.page < t2.pages.length - 1) && this.start();
  }
  onChange() {
    this.removeProgressBar(), this.pause();
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = true, this.pause();
  }
  onMouseLeave() {
    var t2;
    this.inHover = false, (null === (t2 = this.instance.panzoom) || void 0 === t2 ? void 0 : t2.isResting) && this.resume();
  }
  onTimerEnd() {
    const t2 = this.instance;
    "play" === this.state && (t2.isInfinite || t2.page !== t2.pages.length - 1 ? t2.slideNext() : t2.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t2;
    if (!this.option("showProgress"))
      return null;
    this.removeProgressBar();
    const e2 = this.instance, i2 = (null === (t2 = e2.pages[e2.page]) || void 0 === t2 ? void 0 : t2.slides) || [];
    let n2 = this.option("progressParentEl");
    if (n2 || (n2 = (1 === i2.length ? i2[0].el : null) || e2.viewport), !n2)
      return null;
    const s2 = document.createElement("div");
    return P(s2, "f-progress"), n2.prepend(s2), this.progressBar = s2, s2.offsetHeight, s2;
  }
  set() {
    const t2 = this, e2 = t2.instance;
    if (e2.pages.length < 2)
      return;
    if (t2.timer)
      return;
    const i2 = t2.option("timeout");
    t2.state = Lt, P(e2.container, "has-autoplay");
    let n2 = t2.createProgressBar();
    n2 && (n2.style.transitionDuration = `${i2}ms`, n2.style.transform = "scaleX(1)"), t2.timer = setTimeout(() => {
      t2.timer = null, t2.inHover || t2.onTimerEnd();
    }, i2), t2.emit("set");
  }
  clear() {
    const t2 = this;
    t2.timer && (clearTimeout(t2.timer), t2.timer = null), t2.removeProgressBar();
  }
  start() {
    const t2 = this;
    if (t2.set(), t2.state !== Rt) {
      if (t2.option("pauseOnHover")) {
        const e2 = t2.instance.container;
        e2.addEventListener("mouseenter", t2.onMouseEnter, false), e2.addEventListener("mouseleave", t2.onMouseLeave, false);
      }
      document.addEventListener("visibilitychange", t2.onVisibilityChange, false), t2.emit("start");
    }
  }
  stop() {
    const t2 = this, e2 = t2.state, i2 = t2.instance.container;
    t2.clear(), t2.state = Rt, i2.removeEventListener("mouseenter", t2.onMouseEnter, false), i2.removeEventListener("mouseleave", t2.onMouseLeave, false), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), S(i2, "has-autoplay"), e2 !== Rt && t2.emit("stop");
  }
  pause() {
    const t2 = this;
    t2.state === Lt && (t2.state = zt, t2.clear(), t2.emit(zt));
  }
  resume() {
    const t2 = this, e2 = t2.instance;
    if (e2.isInfinite || e2.page !== e2.pages.length - 1)
      if (t2.state !== Lt) {
        if (t2.state === zt && !t2.inHover) {
          const e3 = new Event("resume", { bubbles: true, cancelable: true });
          t2.emit("resume", e3), e3.defaultPrevented || t2.set();
        }
      } else
        t2.set();
    else
      t2.stop();
  }
  toggle() {
    this.state === Lt || this.state === zt ? this.stop() : this.start();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("ready", t2.onReady), e2.on("Panzoom.startAnimation", t2.onChange), e2.on("Panzoom.endAnimation", t2.onSettle), e2.on("Panzoom.touchMove", t2.onChange);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("ready", t2.onReady), e2.off("Panzoom.startAnimation", t2.onChange), e2.off("Panzoom.endAnimation", t2.onSettle), e2.off("Panzoom.touchMove", t2.onChange), t2.stop();
  }
};
Object.defineProperty(kt, "defaults", { enumerable: true, configurable: true, writable: true, value: { autoStart: true, pauseOnHover: true, progressParentEl: null, showProgress: true, timeout: 3e3 } });
var It = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onPrepare(t2) {
    const e2 = t2.carousel;
    if (!e2)
      return;
    const i2 = t2.container;
    i2 && (e2.options.Autoplay = u({ autoStart: false }, this.option("Autoplay") || {}, { pauseOnHover: false, timeout: this.option("timeout"), progressParentEl: () => this.option("progressParentEl") || null, on: { start: () => {
      t2.emit("startSlideshow");
    }, set: (e3) => {
      var n2;
      i2.classList.add("has-slideshow"), (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) !== rt.Ready && e3.pause();
    }, stop: () => {
      i2.classList.remove("has-slideshow"), t2.isCompact || t2.endIdle(), t2.emit("endSlideshow");
    }, resume: (e3, i3) => {
      var n2, s2, o2;
      !i3 || !i3.cancelable || (null === (n2 = t2.getSlide()) || void 0 === n2 ? void 0 : n2.state) === rt.Ready && (null === (o2 = null === (s2 = t2.carousel) || void 0 === s2 ? void 0 : s2.panzoom) || void 0 === o2 ? void 0 : o2.isResting) || i3.preventDefault();
    } } }), e2.attachPlugins({ Autoplay: kt }), this.ref = e2.plugins.Autoplay);
  }
  onReady(t2) {
    const e2 = t2.carousel, i2 = this.ref;
    i2 && e2 && this.option("playOnStart") && (e2.isInfinite || e2.page < e2.pages.length - 1) && i2.start();
  }
  onDone(t2, e2) {
    const i2 = this.ref, n2 = t2.carousel;
    if (!i2 || !n2)
      return;
    const s2 = e2.panzoom;
    s2 && s2.on("startAnimation", () => {
      t2.isCurrentSlide(e2) && i2.stop();
    }), t2.isCurrentSlide(e2) && i2.resume();
  }
  onKeydown(t2, e2) {
    var i2;
    const n2 = this.ref;
    n2 && e2 === this.option("key") && "BUTTON" !== (null === (i2 = document.activeElement) || void 0 === i2 ? void 0 : i2.nodeName) && n2.toggle();
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.init", t2.onPrepare), e2.on("Carousel.ready", t2.onReady), e2.on("done", t2.onDone), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.init", t2.onPrepare), e2.off("Carousel.ready", t2.onReady), e2.off("done", t2.onDone), e2.off("keydown", t2.onKeydown);
  }
};
Object.defineProperty(It, "defaults", { enumerable: true, configurable: true, writable: true, value: { key: " ", playOnStart: false, progressParentEl: (t2) => {
  var e2;
  return (null === (e2 = t2.instance.container) || void 0 === e2 ? void 0 : e2.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t2.instance.container;
}, timeout: 3e3 } });
var Dt = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var Ft;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Hidden = 2] = "Hidden";
}(Ft || (Ft = {}));
var jt = "isResting";
var Bt = "thumbWidth";
var Ht = "thumbHeight";
var Nt = "thumbClipWidth";
var _t = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Ft.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t2, e2) {
    const i2 = e2.el ? e2.el.dataset : void 0;
    i2 && (e2.thumbSrc = i2.thumbSrc || e2.thumbSrc || "", e2[Nt] = parseFloat(i2[Nt] || "") || e2[Nt] || 0, e2[Ht] = parseFloat(i2.thumbHeight || "") || e2[Ht] || 0), this.addSlide(e2);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t2;
    if (!this.isModern)
      return;
    const e2 = this.container, i2 = this.instance, n2 = i2.panzoom, s2 = this.carousel, a2 = s2 ? s2.panzoom : null, r2 = i2.page;
    if (n2 && s2 && a2) {
      if (n2.isDragging) {
        S(e2, this.cn(jt));
        let n3 = (null === (t2 = s2.pages[r2]) || void 0 === t2 ? void 0 : t2.pos) || 0;
        n3 += i2.getProgress(r2) * (this[Nt] + this.thumbGap);
        let o2 = a2.getBounds();
        -1 * n3 > o2.x.min && -1 * n3 < o2.x.max && a2.panTo({ x: -1 * n3, friction: 0.12 });
      } else
        o(e2, this.cn(jt), n2.isResting);
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
    this.isModern && (t2[Bt] = t2[Nt] && t2[Ht] ? Math.round(this[Ht] * (t2[Nt] / t2[Ht])) : this[Bt]);
  }
  updateProps() {
    const t2 = this.container;
    if (!t2)
      return;
    const e2 = (e3) => parseFloat(getComputedStyle(t2).getPropertyValue("--f-thumb-" + e3)) || 0;
    this.thumbGap = e2("gap"), this.thumbExtraGap = e2("extra-gap"), this[Bt] = e2("width") || 40, this[Nt] = e2("clip-width") || 40, this[Ht] = e2("height") || 40;
  }
  build() {
    const t2 = this;
    if (t2.state !== Ft.Init)
      return;
    if (t2.isDisabled())
      return void t2.emit("disabled");
    const e2 = t2.instance, i2 = e2.container, n2 = t2.getSlides(), s2 = t2.option("type");
    t2.type = s2;
    const o2 = t2.option("parentEl"), a2 = t2.cn("container"), r2 = t2.cn("track");
    let l2 = null == o2 ? void 0 : o2.querySelector("." + a2);
    l2 || (l2 = document.createElement("div"), P(l2, a2), o2 ? o2.appendChild(l2) : i2.after(l2)), P(l2, `is-${s2}`), P(i2, t2.cn("hasThumbs")), t2.container = l2, t2.updateProps();
    let c2 = l2.querySelector("." + r2);
    c2 || (c2 = document.createElement("div"), P(c2, t2.cn("track")), l2.appendChild(c2)), t2.track = c2;
    const h2 = u({}, { track: c2, infinite: false, center: true, fill: "classic" === s2, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, t2.option("Carousel") || {}, { Sync: { target: e2 }, slides: n2 }), d2 = new e2.constructor(l2, h2);
    d2.on("createSlide", (e3, i3) => {
      t2.setProps(i3.index), t2.emit("createSlide", i3, i3.el);
    }), d2.on("ready", () => {
      t2.shiftModern(), t2.emit("ready");
    }), d2.on("refresh", () => {
      t2.shiftModern();
    }), d2.on("Panzoom.click", (e3, i3, n3) => {
      t2.onClick(n3);
    }), t2.carousel = d2, t2.state = Ft.Ready;
  }
  onClick(t2) {
    t2.preventDefault(), t2.stopPropagation();
    const e2 = this.instance, { pages: i2, page: n2 } = e2, s2 = (t3) => {
      if (t3) {
        const e3 = t3.closest("[data-carousel-index]");
        if (e3)
          return [parseInt(e3.dataset.carouselIndex || "", 10) || 0, e3];
      }
      return [-1, void 0];
    }, o2 = (t3, e3) => {
      const i3 = document.elementFromPoint(t3, e3);
      return i3 ? s2(i3) : [-1, void 0];
    };
    let [a2, r2] = s2(t2.target);
    if (a2 > -1)
      return;
    const l2 = this[Nt], c2 = t2.clientX, h2 = t2.clientY;
    let [d2, u2] = o2(c2 - l2, h2), [p2, f2] = o2(c2 + l2, h2);
    u2 && f2 ? (a2 = Math.abs(c2 - u2.getBoundingClientRect().right) < Math.abs(c2 - f2.getBoundingClientRect().left) ? d2 : p2, a2 === n2 && (a2 = a2 === d2 ? p2 : d2)) : u2 ? a2 = d2 : f2 && (a2 = p2), a2 > -1 && i2[a2] && e2.slideTo(a2);
  }
  getShift(t2) {
    var e2;
    const i2 = this, { instance: n2 } = i2, s2 = i2.carousel;
    if (!n2 || !s2)
      return 0;
    const o2 = i2[Bt], a2 = i2[Nt], r2 = i2.thumbGap, l2 = i2.thumbExtraGap;
    if (!(null === (e2 = s2.slides[t2]) || void 0 === e2 ? void 0 : e2.el))
      return 0;
    const c2 = 0.5 * (o2 - a2), h2 = n2.pages.length - 1;
    let d2 = n2.getProgress(0), u2 = n2.getProgress(h2), p2 = n2.getProgress(t2, false, true), f2 = 0, g2 = c2 + l2 + r2;
    const m2 = d2 < 0 && d2 > -1, v2 = u2 > 0 && u2 < 1;
    return 0 === t2 ? (f2 = g2 * Math.abs(d2), v2 && 1 === d2 && (f2 -= g2 * Math.abs(u2))) : t2 === h2 ? (f2 = g2 * Math.abs(u2) * -1, m2 && -1 === u2 && (f2 += g2 * Math.abs(d2))) : m2 || v2 ? (f2 = -1 * g2, f2 += g2 * Math.abs(d2), f2 += g2 * (1 - Math.abs(u2))) : f2 = g2 * p2, f2;
  }
  setProps(e2) {
    var i2;
    const n2 = this;
    if (!n2.isModern)
      return;
    const { instance: s2 } = n2, o2 = n2.carousel;
    if (s2 && o2) {
      const a2 = null === (i2 = o2.slides[e2]) || void 0 === i2 ? void 0 : i2.el;
      if (a2 && a2.childNodes.length) {
        let i3 = t(1 - Math.abs(s2.getProgress(e2))), o3 = t(n2.getShift(e2));
        a2.style.setProperty("--progress", i3 ? i3 + "" : ""), a2.style.setProperty("--shift", o3 + "");
      }
    }
  }
  shiftModern() {
    const t2 = this;
    if (!t2.isModern)
      return;
    const { instance: e2, track: i2 } = t2, n2 = e2.panzoom, s2 = t2.carousel;
    if (!(e2 && i2 && n2 && s2))
      return;
    if (n2.state === m.Init || n2.state === m.Destroy)
      return;
    for (const i3 of e2.slides)
      t2.setProps(i3.index);
    let o2 = (t2[Nt] + t2.thumbGap) * (s2.slides.length || 0);
    i2.style.setProperty("--width", o2 + "");
  }
  cleanup() {
    const t2 = this;
    t2.carousel && t2.carousel.destroy(), t2.carousel = null, t2.container && t2.container.remove(), t2.container = null, t2.track && t2.track.remove(), t2.track = null, t2.state = Ft.Init, S(t2.instance.container, t2.cn("hasThumbs"));
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("initSlide", t2.onInitSlide), e2.state === j.Init ? e2.on("initSlides", t2.onInitSlides) : t2.onInitSlides(), e2.on(["change", "Panzoom.afterTransform"], t2.onChange), e2.on("Panzoom.refresh", t2.onRefresh);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("initSlide", t2.onInitSlide), e2.off("initSlides", t2.onInitSlides), e2.off(["change", "Panzoom.afterTransform"], t2.onChange), e2.off("Panzoom.refresh", t2.onRefresh), t2.cleanup();
  }
};
Object.defineProperty(_t, "defaults", { enumerable: true, configurable: true, writable: true, value: Dt });
var $t = Object.assign(Object.assign({}, Dt), { key: "t", showOnStart: true, parentEl: null });
var Wt = "is-masked";
var Xt = "aria-hidden";
var qt = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "hidden", { enumerable: true, configurable: true, writable: true, value: false });
  }
  get isEnabled() {
    const t2 = this.ref;
    return t2 && !t2.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t2, e2) {
    e2.stopPropagation();
  }
  onCreateSlide(t2, e2) {
    var i2, n2, s2;
    const o2 = (null === (s2 = null === (n2 = null === (i2 = this.instance) || void 0 === i2 ? void 0 : i2.carousel) || void 0 === n2 ? void 0 : n2.slides[e2.index]) || void 0 === s2 ? void 0 : s2.type) || "", a2 = e2.el;
    if (a2 && o2) {
      let t3 = `for-${o2}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o2) && (t3 += " for-video"), P(a2, t3);
    }
  }
  onInit() {
    var t2;
    const e2 = this, i2 = e2.instance, n2 = i2.carousel;
    if (e2.ref || !n2)
      return;
    const s2 = e2.option("parentEl") || i2.footer || i2.container;
    if (!s2)
      return;
    const o2 = u({}, e2.options, { parentEl: s2, classes: { container: "f-thumbs fancybox__thumbs" }, Carousel: { Sync: { friction: i2.option("Carousel.friction") || 0 } }, on: { ready: (t3) => {
      const i3 = t3.container;
      i3 && this.hidden && (e2.refresh(), i3.style.transition = "none", e2.hide(), i3.offsetHeight, queueMicrotask(() => {
        i3.style.transition = "", e2.show();
      }));
    } } });
    o2.Carousel = o2.Carousel || {}, o2.Carousel.on = u((null === (t2 = e2.options.Carousel) || void 0 === t2 ? void 0 : t2.on) || {}, { click: this.onClick, createSlide: this.onCreateSlide }), n2.options.Thumbs = o2, n2.attachPlugins({ Thumbs: _t }), e2.ref = n2.plugins.Thumbs, e2.option("showOnStart") || (e2.ref.state = Ft.Hidden, e2.hidden = true);
  }
  onResize() {
    var t2;
    const e2 = null === (t2 = this.ref) || void 0 === t2 ? void 0 : t2.container;
    e2 && (e2.style.maxHeight = "");
  }
  onKeydown(t2, e2) {
    const i2 = this.option("key");
    i2 && i2 === e2 && this.toggle();
  }
  toggle() {
    const t2 = this.ref;
    if (t2 && !t2.isDisabled())
      return t2.state === Ft.Hidden ? (t2.state = Ft.Init, void t2.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t2 = this.ref;
    if (!t2 || t2.isDisabled())
      return;
    const e2 = t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.removeAttribute(Xt), e2.classList.remove(Wt), this.hidden = false);
  }
  hide() {
    const t2 = this.ref, e2 = t2 && t2.container;
    e2 && (this.refresh(), e2.offsetHeight, e2.classList.add(Wt), e2.setAttribute(Xt, "true")), this.hidden = true;
  }
  refresh() {
    const t2 = this.ref;
    if (!t2 || !t2.state)
      return;
    const e2 = t2.container, i2 = (null == e2 ? void 0 : e2.firstChild) || null;
    e2 && i2 && i2.childNodes.length && (e2.style.maxHeight = `${i2.getBoundingClientRect().height}px`);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.state === at.Init ? e2.on("Carousel.init", t2.onInit) : t2.onInit(), e2.on("resize", t2.onResize), e2.on("keydown", t2.onKeydown);
  }
  detach() {
    var t2;
    const e2 = this, i2 = e2.instance;
    i2.off("Carousel.init", e2.onInit), i2.off("resize", e2.onResize), i2.off("keydown", e2.onKeydown), null === (t2 = i2.carousel) || void 0 === t2 || t2.detachPlugins(["Thumbs"]), e2.ref = null;
  }
};
Object.defineProperty(qt, "defaults", { enumerable: true, configurable: true, writable: true, value: $t });
var Yt = { panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } }, panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } }, panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } }, panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } }, zoomIn: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>', action: "zoomIn" }, zoomOut: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "zoomOut" }, toggle1to1: { icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>', action: "toggleZoom" }, toggleZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "toggleZoom" }, iterateZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "iterateZoom" }, rotateCCW: { icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>', action: "rotateCCW" }, rotateCW: { icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>', action: "rotateCW" }, flipX: { icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>', action: "flipX" }, flipY: { icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>', action: "flipY" }, fitX: { icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>', action: "fitX" }, fitY: { icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>', action: "fitY" }, reset: { icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>', action: "reset" }, toggleFS: { icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>', action: "toggleFS" } };
var Vt;
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Ready = 1] = "Ready", t2[t2.Disabled = 2] = "Disabled";
}(Vt || (Vt = {}));
var Zt = { absolute: "auto", display: { left: ["infobar"], middle: [], right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"] }, enabled: "auto", items: { infobar: { tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>' }, download: { tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>' }, prev: { tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>' }, next: { tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>' }, slideshow: { tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, fullscreen: { tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, thumbs: { tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>' }, close: { tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>' } }, parentEl: null };
var Ut = { tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
var Gt = "has-toolbar";
var Kt = "fancybox__toolbar";
var Jt = class extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Vt.Init }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onReady(t2) {
    var e2;
    if (!t2.carousel)
      return;
    let i2 = this.option("display"), n2 = this.option("absolute"), s2 = this.option("enabled");
    if ("auto" === s2) {
      const t3 = this.instance.carousel;
      let e3 = 0;
      if (t3)
        for (const i3 of t3.slides)
          (i3.panzoom || "image" === i3.type) && e3++;
      e3 || (s2 = false);
    }
    s2 || (i2 = void 0);
    let o2 = 0;
    const a2 = { left: [], middle: [], right: [] };
    if (i2)
      for (const t3 of ["left", "middle", "right"])
        for (const n3 of i2[t3]) {
          const i3 = this.createEl(n3);
          i3 && (null === (e2 = a2[t3]) || void 0 === e2 || e2.push(i3), o2++);
        }
    let r2 = null;
    if (o2 && (r2 = this.createContainer()), r2) {
      for (const [t3, e3] of Object.entries(a2)) {
        const i3 = document.createElement("div");
        P(i3, Kt + "__column is-" + t3);
        for (const t4 of e3)
          i3.appendChild(t4);
        "auto" !== n2 || "middle" !== t3 || e3.length || (n2 = true), r2.appendChild(i3);
      }
      true === n2 && P(r2, "is-absolute"), this.state = Vt.Ready, this.onRefresh();
    } else
      this.state = Vt.Disabled;
  }
  onClick(t2) {
    var e2, i2;
    const n2 = this.instance, s2 = n2.getSlide(), o2 = null == s2 ? void 0 : s2.panzoom, a2 = t2.target, r2 = a2 && E(a2) ? a2.dataset : null;
    if (!r2)
      return;
    if (void 0 !== r2.fancyboxToggleThumbs)
      return t2.preventDefault(), t2.stopPropagation(), void (null === (e2 = n2.plugins.Thumbs) || void 0 === e2 || e2.toggle());
    if (void 0 !== r2.fancyboxToggleFullscreen)
      return t2.preventDefault(), t2.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r2.fancyboxToggleSlideshow) {
      t2.preventDefault(), t2.stopPropagation();
      const e3 = null === (i2 = n2.carousel) || void 0 === i2 ? void 0 : i2.plugins.Autoplay;
      let s3 = e3.isActive;
      return o2 && "mousemove" === o2.panMode && !s3 && o2.reset(), void (s3 ? e3.stop() : e3.start());
    }
    const l2 = r2.panzoomAction, c2 = r2.panzoomChange;
    if ((c2 || l2) && (t2.preventDefault(), t2.stopPropagation()), c2) {
      let t3 = {};
      try {
        t3 = JSON.parse(c2);
      } catch (t4) {
      }
      o2 && o2.applyChange(t3);
    } else
      l2 && o2 && o2[l2] && o2[l2]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing())
      return;
    const t2 = this.container;
    if (!t2)
      return;
    const e2 = this.instance.getSlide();
    if (!e2 || e2.state !== rt.Ready)
      return;
    const i2 = e2 && !e2.error && e2.panzoom;
    for (const e3 of t2.querySelectorAll("[data-panzoom-action]"))
      i2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    let n2 = i2 && i2.canZoomIn(), s2 = i2 && i2.canZoomOut();
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomIn"]'))
      n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomOut"]'))
      s2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
    for (const e3 of t2.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s2 || n2 ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex")) : (e3.setAttribute("disabled", ""), e3.setAttribute("tabindex", "-1"));
      const t3 = e3.querySelector("g");
      t3 && (t3.style.display = n2 ? "" : "none");
    }
  }
  onDone(t2, e2) {
    var i2;
    null === (i2 = e2.panzoom) || void 0 === i2 || i2.on("afterTransform", () => {
      this.instance.isCurrentSlide(e2) && this.onRefresh();
    }), this.instance.isCurrentSlide(e2) && this.onRefresh();
  }
  createContainer() {
    const t2 = this.instance.container;
    if (!t2)
      return null;
    const e2 = this.option("parentEl") || t2;
    let i2 = e2.querySelector("." + Kt);
    return i2 || (i2 = document.createElement("div"), P(i2, Kt), e2.prepend(i2)), i2.addEventListener("click", this.onClick, { passive: false, capture: true }), t2 && P(t2, Gt), this.container = i2, i2;
  }
  createEl(t2) {
    const e2 = this.instance, i2 = e2.carousel;
    if (!i2)
      return null;
    if ("toggleFS" === t2)
      return null;
    if ("fullscreen" === t2 && !st())
      return null;
    let s2 = null;
    const o2 = i2.slides.length || 0;
    let a2 = 0, r2 = 0;
    for (const t3 of i2.slides)
      (t3.panzoom || "image" === t3.type) && a2++, ("image" === t3.type || t3.downloadSrc) && r2++;
    if (o2 < 2 && ["infobar", "prev", "next"].includes(t2))
      return s2;
    if (void 0 !== Yt[t2] && !a2)
      return null;
    if ("download" === t2 && !r2)
      return null;
    if ("thumbs" === t2) {
      const t3 = e2.plugins.Thumbs;
      if (!t3 || !t3.isEnabled)
        return null;
    }
    if ("slideshow" === t2) {
      if (!i2.plugins.Autoplay || o2 < 2)
        return null;
    }
    if (void 0 !== Yt[t2]) {
      const e3 = Yt[t2];
      s2 = document.createElement("button"), s2.setAttribute("title", this.instance.localize(`{{${t2.toUpperCase()}}}`)), P(s2, "f-button"), e3.action && (s2.dataset.panzoomAction = e3.action), e3.change && (s2.dataset.panzoomChange = JSON.stringify(e3.change)), s2.appendChild(n(this.instance.localize(e3.icon)));
    } else {
      const e3 = (this.option("items") || [])[t2];
      e3 && (s2 = n(this.instance.localize(e3.tpl)), "function" == typeof e3.click && s2.addEventListener("click", (t3) => {
        t3.preventDefault(), t3.stopPropagation(), "function" == typeof e3.click && e3.click.call(this, this, t3);
      }));
    }
    const l2 = null == s2 ? void 0 : s2.querySelector("svg");
    if (l2)
      for (const [t3, e3] of Object.entries(Ut))
        l2.getAttribute(t3) || l2.setAttribute(t3, String(e3));
    return s2;
  }
  removeContainer() {
    const t2 = this.container;
    t2 && t2.remove(), this.container = null, this.state = Vt.Disabled;
    const e2 = this.instance.container;
    e2 && S(e2, Gt);
  }
  attach() {
    const t2 = this, e2 = t2.instance;
    e2.on("Carousel.initSlides", t2.onReady), e2.on("done", t2.onDone), e2.on(["reveal", "Carousel.change"], t2.onChange), t2.onReady(t2.instance);
  }
  detach() {
    const t2 = this, e2 = t2.instance;
    e2.off("Carousel.initSlides", t2.onReady), e2.off("done", t2.onDone), e2.off(["reveal", "Carousel.change"], t2.onChange), t2.removeContainer();
  }
};
Object.defineProperty(Jt, "defaults", { enumerable: true, configurable: true, writable: true, value: Zt });
var Qt = { Hash: class extends N {
  onReady() {
    ct = false;
  }
  onChange(t2) {
    dt && clearTimeout(dt);
    const { hash: e2 } = ut(), { hash: i2 } = pt(), n2 = t2.isOpeningSlide(t2.getSlide());
    n2 && (lt = i2 === e2 ? "" : i2), e2 && e2 !== i2 && (dt = setTimeout(() => {
      try {
        if (t2.state === at.Ready) {
          let t3 = "replaceState";
          n2 && !ht && (t3 = "pushState", ht = true), window.history[t3]({}, document.title, window.location.pathname + window.location.search + e2);
        }
      } catch (t3) {
      }
    }, 300));
  }
  onClose(t2) {
    if (dt && clearTimeout(dt), !ct && ht)
      return ht = false, ct = false, void window.history.back();
    if (!ct)
      try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (lt || ""));
      } catch (t3) {
      }
  }
  attach() {
    const t2 = this.instance;
    t2.on("ready", this.onReady), t2.on(["Carousel.ready", "Carousel.change"], this.onChange), t2.on("close", this.onClose);
  }
  detach() {
    const t2 = this.instance;
    t2.off("ready", this.onReady), t2.off(["Carousel.ready", "Carousel.change"], this.onChange), t2.off("close", this.onClose);
  }
  static parseURL() {
    return pt();
  }
  static startFromUrl() {
    ft();
  }
  static destroy() {
    window.removeEventListener("hashchange", mt, false);
  }
}, Html: At, Images: yt, Slideshow: It, Thumbs: qt, Toolbar: Jt };
var te = "with-fancybox";
var ee = "hide-scrollbar";
var ie = "--fancybox-scrollbar-compensate";
var ne = "--fancybox-body-margin";
var se = "aria-hidden";
var oe = "is-using-tab";
var ae = "is-animated";
var re = "is-compact";
var le = "is-loading";
var ce = "is-opening";
var he = "has-caption";
var de = "disabled";
var ue = "tabindex";
var pe = "download";
var fe = "href";
var ge = "src";
var me = (t2) => "string" == typeof t2;
var ve = function() {
  var t2 = window.getSelection();
  return !!t2 && "Range" === t2.type;
};
var be;
var ye = null;
var we = null;
var xe = 0;
var Ee = 0;
var Se = /* @__PURE__ */ new Map();
var Pe = 0;
var Ce = class _Ce extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor(t2 = [], e2 = {}, i2 = {}) {
    super(e2), Object.defineProperty(this, "userSlides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "idle", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "idleTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "ignoreFocusChange", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "startedFs", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: at.Init }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "footer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "lastFocus", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prevMouseMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), be || (be = st()), this.id = e2.id || ++Pe, Se.set(this.id, this), this.userSlides = t2, this.userPlugins = i2, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === at.Destroy)
      return;
    this.state = at.Init, this.attachPlugins(Object.assign(Object.assign({}, _Ce.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), true === this.option("hideScrollbar") && (() => {
      if (!tt)
        return;
      const t3 = document, e2 = t3.body, i2 = t3.documentElement;
      if (e2.classList.contains(ee))
        return;
      let n2 = window.innerWidth - i2.getBoundingClientRect().width;
      const s2 = parseFloat(window.getComputedStyle(e2).marginRight);
      n2 < 0 && (n2 = 0), i2.style.setProperty(ie, `${n2}px`), s2 && e2.style.setProperty(ne, `${s2}px`), e2.classList.add(ee);
    })(), this.initLayout(), this.scale();
    const t2 = () => {
      this.initCarousel(this.userSlides), this.state = at.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
        this.container && this.container.setAttribute(se, "false");
      }, 16);
    };
    this.option("Fullscreen.autoStart") && be && !be.isFullscreen() ? be.request().then(() => {
      this.startedFs = true, t2();
    }).catch(() => t2()) : t2();
  }
  initLayout() {
    var t2, e2;
    const i2 = this.option("parentEl") || document.body, s2 = n(this.localize(this.option("tpl.main") || ""));
    s2 && (s2.setAttribute("id", `fancybox-${this.id}`), s2.setAttribute("aria-label", this.localize("{{MODAL}}")), s2.classList.toggle(re, this.isCompact), P(s2, this.option("mainClass") || ""), P(s2, ce), this.container = s2, this.footer = s2.querySelector(".fancybox__footer"), i2.appendChild(s2), P(document.documentElement, te), ye && we || (ye = document.createElement("span"), P(ye, "fancybox-focus-guard"), ye.setAttribute(ue, "0"), ye.setAttribute(se, "true"), ye.setAttribute("aria-label", "Focus guard"), we = ye.cloneNode(), null === (t2 = s2.parentElement) || void 0 === t2 || t2.insertBefore(ye, s2), null === (e2 = s2.parentElement) || void 0 === e2 || e2.append(we)), s2.addEventListener("mousedown", (t3) => {
      xe = t3.pageX, Ee = t3.pageY, S(s2, oe);
    }), this.option("animated") && (P(s2, ae), setTimeout(() => {
      this.isClosing() || S(s2, ae);
    }, 350)), this.emit("initLayout"));
  }
  initCarousel(t2) {
    const i2 = this.container;
    if (!i2)
      return;
    const n2 = i2.querySelector(".fancybox__carousel");
    if (!n2)
      return;
    const s2 = this.carousel = new J(n2, u({}, { slides: t2, transition: "fade", Panzoom: { lockAxis: this.option("dragToClose") ? "xy" : "x", infinite: !!this.option("dragToClose") && "y" }, Dots: false, Navigation: { classes: { container: "fancybox__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" } }, initialPage: this.option("startIndex"), l10n: this.option("l10n") }, this.option("Carousel") || {}));
    s2.on("*", (t3, e2, ...i3) => {
      this.emit(`Carousel.${e2}`, t3, ...i3);
    }), s2.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t3, e2, i3) => {
      this.clearContent(i3), i3.state = void 0;
    }), s2.on("Panzoom.touchStart", () => {
      var t3, e2;
      this.isCompact || this.endIdle(), (null === (t3 = document.activeElement) || void 0 === t3 ? void 0 : t3.closest(".f-thumbs")) && (null === (e2 = this.container) || void 0 === e2 || e2.focus());
    }), s2.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s2.on("Panzoom.afterTransform", (t3, i3) => {
      const n3 = this.getSlide();
      if (n3 && e(n3.el))
        return;
      const s3 = this.container;
      if (s3) {
        const t4 = Math.abs(i3.current.f), e2 = t4 < 1 ? "" : Math.max(0.5, Math.min(1, 1 - t4 / i3.contentRect.fitHeight * 1.5));
        s3.style.setProperty("--fancybox-ts", e2 ? "0s" : ""), s3.style.setProperty("--fancybox-opacity", e2 + "");
      }
    }), s2.on("Panzoom.touchEnd", (t3, i3, n3) => {
      var s3;
      const o2 = this.getSlide();
      if (o2 && e(o2.el))
        return;
      if (i3.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s3 = document.activeElement) || void 0 === s3 ? void 0 : s3.nodeName))
        return;
      const a2 = Math.abs(i3.dragOffset.y);
      "y" === i3.lockedAxis && (a2 >= 200 || a2 >= 50 && i3.dragOffset.time < 300) && (n3 && n3.cancelable && n3.preventDefault(), this.close(n3, "f-throwOut" + (i3.current.f < 0 ? "Up" : "Down")));
    })), s2.on("change", (t3) => {
      var e2;
      let i3 = null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.triggerEl;
      if (i3) {
        const e3 = new CustomEvent("slideTo", { bubbles: true, cancelable: true, detail: t3.page });
        i3.dispatchEvent(e3);
      }
    }), s2.on(["refresh", "change"], (t3) => {
      const e2 = this.container;
      if (!e2)
        return;
      for (const i4 of e2.querySelectorAll("[data-fancybox-current-index]"))
        i4.innerHTML = t3.page + 1;
      for (const i4 of e2.querySelectorAll("[data-fancybox-count]"))
        i4.innerHTML = t3.pages.length;
      if (!t3.isInfinite) {
        for (const i4 of e2.querySelectorAll("[data-fancybox-next]"))
          t3.page < t3.pages.length - 1 ? (i4.removeAttribute(de), i4.removeAttribute(ue)) : (i4.setAttribute(de, ""), i4.setAttribute(ue, "-1"));
        for (const i4 of e2.querySelectorAll("[data-fancybox-prev]"))
          t3.page > 0 ? (i4.removeAttribute(de), i4.removeAttribute(ue)) : (i4.setAttribute(de, ""), i4.setAttribute(ue, "-1"));
      }
      const i3 = this.getSlide();
      if (!i3)
        return;
      let n3 = i3.downloadSrc || "";
      n3 || "image" !== i3.type || i3.error || !me(i3[ge]) || (n3 = i3[ge]);
      for (const t4 of e2.querySelectorAll("[data-fancybox-download]")) {
        const e3 = i3.downloadFilename;
        n3 ? (t4.removeAttribute(de), t4.removeAttribute(ue), t4.setAttribute(fe, n3), t4.setAttribute(pe, e3 || n3), t4.setAttribute("target", "_blank")) : (t4.setAttribute(de, ""), t4.setAttribute(ue, "-1"), t4.removeAttribute(fe), t4.removeAttribute(pe));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2)
      return;
    e2.addEventListener("click", t2.onClick, { passive: false, capture: false }), e2.addEventListener("wheel", t2.onWheel, { passive: false, capture: false }), document.addEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), document.addEventListener("visibilitychange", t2.onVisibilityChange, false), document.addEventListener("mousemove", t2.onMousemove), t2.option("trapFocus") && document.addEventListener("focus", t2.onFocus, true), window.addEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.addEventListener("scroll", t2.onResize), i2.addEventListener("resize", t2.onResize));
  }
  detachEvents() {
    const t2 = this, e2 = t2.container;
    if (!e2)
      return;
    document.removeEventListener("keydown", t2.onKeydown, { passive: false, capture: true }), e2.removeEventListener("wheel", t2.onWheel, { passive: false, capture: false }), e2.removeEventListener("click", t2.onClick, { passive: false, capture: false }), document.removeEventListener("mousemove", t2.onMousemove), window.removeEventListener("resize", t2.onResize);
    const i2 = window.visualViewport;
    i2 && (i2.removeEventListener("resize", t2.onResize), i2.removeEventListener("scroll", t2.onResize)), document.removeEventListener("visibilitychange", t2.onVisibilityChange, false), document.removeEventListener("focus", t2.onFocus, true);
  }
  scale() {
    const t2 = this.container;
    if (!t2)
      return;
    const e2 = window.visualViewport, i2 = Math.max(1, (null == e2 ? void 0 : e2.scale) || 1);
    let n2 = "", s2 = "", o2 = "";
    if (e2 && i2 > 1) {
      let t3 = `${e2.offsetLeft}px`, a2 = `${e2.offsetTop}px`;
      n2 = e2.width * i2 + "px", s2 = e2.height * i2 + "px", o2 = `translate3d(${t3}, ${a2}, 0) scale(${1 / i2})`;
    }
    t2.style.transform = o2, t2.style.width = n2, t2.style.height = s2;
  }
  onClick(t2) {
    var e2;
    const { container: i2, isCompact: n2 } = this;
    if (!i2 || this.isClosing())
      return;
    !n2 && this.option("idle") && this.resetIdle();
    const s2 = t2.composedPath()[0];
    if (s2.closest(".fancybox-spinner") || s2.closest("[data-fancybox-close]"))
      return t2.preventDefault(), void this.close(t2);
    if (s2.closest("[data-fancybox-prev]"))
      return t2.preventDefault(), void this.prev();
    if (s2.closest("[data-fancybox-next]"))
      return t2.preventDefault(), void this.next();
    if ("click" === t2.type && 0 === t2.detail)
      return;
    if (Math.abs(t2.pageX - xe) > 30 || Math.abs(t2.pageY - Ee) > 30)
      return;
    const o2 = document.activeElement;
    if (ve() && o2 && i2.contains(o2))
      return;
    if (n2 && "image" === (null === (e2 = this.getSlide()) || void 0 === e2 ? void 0 : e2.type))
      return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
        this.toggleIdle(), this.clickTimer = null;
      }, 350));
    if (this.emit("click", t2), t2.defaultPrevented)
      return;
    let a2 = false;
    if (s2.closest(".fancybox__content")) {
      if (o2) {
        if (o2.closest("[contenteditable]"))
          return;
        s2.matches(it) || o2.blur();
      }
      if (ve())
        return;
      a2 = this.option("contentClick");
    } else
      s2.closest(".fancybox__carousel") && !s2.matches(it) && (a2 = this.option("backdropClick"));
    "close" === a2 ? (t2.preventDefault(), this.close(t2)) : "next" === a2 ? (t2.preventDefault(), this.next()) : "prev" === a2 && (t2.preventDefault(), this.prev());
  }
  onWheel(t2) {
    const e2 = t2.target;
    let n2 = this.option("wheel", t2);
    e2.closest(".fancybox__thumbs") && (n2 = "slide");
    const s2 = "slide" === n2, o2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(function(t3, e3) {
      return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
    }), a2 = Math.max(-1, Math.min(1, o2)), r2 = Date.now();
    this.pwt && r2 - this.pwt < 300 ? s2 && t2.preventDefault() : (this.pwt = r2, this.emit("wheel", t2, a2), t2.defaultPrevented || ("close" === n2 ? (t2.preventDefault(), this.close(t2)) : "slide" === n2 && (i(e2) || (t2.preventDefault(), this[a2 > 0 ? "prev" : "next"]()))));
  }
  onKeydown(t2) {
    if (!this.isTopmost())
      return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e2 = t2.key, i2 = this.option("keyboard");
    if (!i2)
      return;
    const n2 = t2.composedPath()[0], s2 = document.activeElement && document.activeElement.classList, o2 = s2 && s2.contains("f-button") || n2.dataset.carouselPage || n2.dataset.carouselIndex;
    if ("Escape" !== e2 && !o2 && E(n2)) {
      if (n2.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n2.nodeName))
        return;
    }
    if ("Tab" === t2.key ? P(this.container, oe) : S(this.container, oe), t2.ctrlKey || t2.altKey || t2.shiftKey)
      return;
    this.emit("keydown", e2, t2);
    const a2 = i2[e2];
    a2 && "function" == typeof this[a2] && (t2.preventDefault(), this[a2]());
  }
  onResize() {
    const t2 = this.container;
    if (!t2)
      return;
    const e2 = this.isCompact;
    t2.classList.toggle(re, e2), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t2) {
    this.isTopmost() && this.checkFocus(t2);
  }
  onMousemove(t2) {
    this.prevMouseMoveEvent = t2, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t2) {
    const e2 = this.optionFor(t2, "closeButton") || false;
    if ("auto" === e2) {
      const t3 = this.plugins.Toolbar;
      if (t3 && t3.state === Vt.Ready)
        return;
    }
    if (!e2)
      return;
    if (!t2.contentEl || t2.closeBtnEl)
      return;
    const i2 = this.option("tpl.closeButton");
    if (i2) {
      const e3 = n(this.localize(i2));
      t2.closeBtnEl = t2.contentEl.appendChild(e3), t2.el && P(t2.el, "has-close-btn");
    }
  }
  manageCaption(t2 = void 0) {
    var e2, i2;
    const n2 = "fancybox__caption", s2 = this.container;
    if (!s2)
      return;
    S(s2, he);
    const o2 = this.isCompact || this.option("commonCaption"), a2 = !o2;
    if (this.caption && this.stop(this.caption), a2 && this.caption && (this.caption.remove(), this.caption = null), o2 && !this.caption)
      for (const t3 of (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.slides) || [])
        t3.captionEl && (t3.captionEl.remove(), t3.captionEl = void 0, S(t3.el, he), null === (i2 = t3.el) || void 0 === i2 || i2.removeAttribute("aria-labelledby"));
    if (t2 || (t2 = this.getSlide()), !t2 || o2 && !this.isCurrentSlide(t2))
      return;
    const r2 = t2.el;
    let l2 = this.optionFor(t2, "caption", "");
    if (!l2)
      return void (o2 && this.caption && this.animate(this.caption, "f-fadeOut", () => {
        this.caption && (this.caption.innerHTML = "");
      }));
    let c2 = null;
    if (a2) {
      if (c2 = t2.captionEl || null, r2 && !c2) {
        const e3 = n2 + `_${this.id}_${t2.index}`;
        c2 = document.createElement("div"), P(c2, n2), c2.setAttribute("id", e3), t2.captionEl = r2.appendChild(c2), P(r2, he), r2.setAttribute("aria-labelledby", e3);
      }
    } else {
      if (c2 = this.caption, c2 || (c2 = s2.querySelector("." + n2)), !c2) {
        c2 = document.createElement("div"), c2.dataset.fancyboxCaption = "", P(c2, n2);
        (this.footer || s2).prepend(c2);
      }
      P(s2, he), this.caption = c2;
    }
    c2 && (c2.innerHTML = "", me(l2) || "number" == typeof l2 ? c2.innerHTML = l2 + "" : l2 instanceof HTMLElement && c2.appendChild(l2));
  }
  checkFocus(t2) {
    this.focus(t2);
  }
  focus(t2) {
    var e2;
    if (this.ignoreFocusChange)
      return;
    const i2 = document.activeElement || null, n2 = (null == t2 ? void 0 : t2.target) || null, s2 = this.container, o2 = null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.viewport;
    if (!s2 || !o2)
      return;
    if (!t2 && i2 && s2.contains(i2))
      return;
    const a2 = this.getSlide(), r2 = a2 && a2.state === rt.Ready ? a2.el : null;
    if (!r2 || r2.contains(i2) || s2 === i2)
      return;
    t2 && t2.cancelable && t2.preventDefault(), this.ignoreFocusChange = true;
    const l2 = Array.from(s2.querySelectorAll(it));
    let c2 = [], h2 = null;
    for (let t3 of l2) {
      const e3 = !t3.offsetParent || !!t3.closest('[aria-hidden="true"]'), i3 = r2 && r2.contains(t3), n3 = !o2.contains(t3);
      if (t3 === s2 || (i3 || n3) && !e3) {
        c2.push(t3);
        const e4 = t3.dataset.origTabindex;
        void 0 !== e4 && e4 && (t3.tabIndex = parseFloat(e4)), t3.removeAttribute("data-orig-tabindex"), !t3.hasAttribute("autoFocus") && h2 || (h2 = t3);
      } else {
        const e4 = void 0 === t3.dataset.origTabindex ? t3.getAttribute("tabindex") || "" : t3.dataset.origTabindex;
        e4 && (t3.dataset.origTabindex = e4), t3.tabIndex = -1;
      }
    }
    let d2 = null;
    t2 ? (!n2 || c2.indexOf(n2) < 0) && (d2 = h2 || s2, c2.length && (i2 === we ? d2 = c2[0] : this.lastFocus !== s2 && i2 !== ye || (d2 = c2[c2.length - 1]))) : d2 = a2 && "image" === a2.type ? s2 : h2 || s2, d2 && nt(d2), this.lastFocus = document.activeElement, this.ignoreFocusChange = false;
  }
  next() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slideNext();
  }
  prev() {
    const t2 = this.carousel;
    t2 && t2.pages.length > 1 && t2.slidePrev();
  }
  jumpTo(...t2) {
    this.carousel && this.carousel.slideTo(...t2);
  }
  isTopmost() {
    var t2;
    return (null === (t2 = _Ce.getInstance()) || void 0 === t2 ? void 0 : t2.id) == this.id;
  }
  animate(t2 = null, e2 = "", i2) {
    if (!t2 || !e2)
      return void (i2 && i2());
    this.stop(t2);
    const n2 = (s2) => {
      s2.target === t2 && t2.dataset.animationName && (t2.removeEventListener("animationend", n2), delete t2.dataset.animationName, i2 && i2(), S(t2, e2));
    };
    t2.dataset.animationName = e2, t2.addEventListener("animationend", n2), P(t2, e2);
  }
  stop(t2) {
    t2 && t2.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: t2 }));
  }
  setContent(t2, e2 = "", i2 = true) {
    if (this.isClosing())
      return;
    const s2 = t2.el;
    if (!s2)
      return;
    let o2 = null;
    if (E(e2) ? o2 = e2 : (o2 = n(e2 + ""), E(o2) || (o2 = document.createElement("div"), o2.innerHTML = e2 + "")), ["img", "picture", "iframe", "video", "audio"].includes(o2.nodeName.toLowerCase())) {
      const t3 = document.createElement("div");
      t3.appendChild(o2), o2 = t3;
    }
    E(o2) && t2.filter && !t2.error && (o2 = o2.querySelector(t2.filter)), o2 && E(o2) ? (P(o2, "fancybox__content"), t2.id && o2.setAttribute("id", t2.id), "none" !== o2.style.display && "none" !== getComputedStyle(o2).getPropertyValue("display") || (o2.style.display = t2.display || this.option("defaultDisplay") || "flex"), s2.classList.add(`has-${t2.error ? "error" : t2.type || "unknown"}`), s2.prepend(o2), t2.contentEl = o2, i2 && this.revealContent(t2), this.manageCloseBtn(t2), this.manageCaption(t2)) : this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t2, e2) {
    const i2 = t2.el, n2 = t2.contentEl;
    i2 && n2 && (this.emit("reveal", t2), this.hideLoading(t2), t2.state = rt.Opening, (e2 = this.isOpeningSlide(t2) ? void 0 === e2 ? this.optionFor(t2, "showClass") : e2 : "f-fadeIn") ? this.animate(n2, e2, () => {
      this.done(t2);
    }) : this.done(t2));
  }
  done(t2) {
    this.isClosing() || (t2.state = rt.Ready, this.emit("done", t2), P(t2.el, "is-done"), this.isCurrentSlide(t2) && this.option("autoFocus") && queueMicrotask(() => {
      var e2;
      null === (e2 = t2.panzoom) || void 0 === e2 || e2.updateControls(), this.option("autoFocus") && this.focus();
    }), this.isOpeningSlide(t2) && (S(this.container, ce), !this.isCompact && this.option("idle") && this.setIdle()));
  }
  isCurrentSlide(t2) {
    const e2 = this.getSlide();
    return !(!t2 || !e2) && e2.index === t2.index;
  }
  isOpeningSlide(t2) {
    var e2, i2;
    return null === (null === (e2 = this.carousel) || void 0 === e2 ? void 0 : e2.prevPage) && t2 && t2.index === (null === (i2 = this.getSlide()) || void 0 === i2 ? void 0 : i2.index);
  }
  showLoading(t2) {
    t2.state = rt.Loading;
    const e2 = t2.el;
    if (!e2)
      return;
    P(e2, le), this.emit("loading", t2), t2.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t2.spinnerEl && t2.state === rt.Loading) {
        let i2 = n(x);
        P(i2, "fancybox-spinner"), t2.spinnerEl = i2, e2.prepend(i2), this.animate(i2, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t2) {
    const e2 = t2.el;
    if (!e2)
      return;
    const i2 = t2.spinnerEl;
    this.isClosing() ? null == i2 || i2.remove() : (S(e2, le), i2 && this.animate(i2, "f-fadeOut", () => {
      i2.remove();
    }), t2.state === rt.Loading && (this.emit("loaded", t2), t2.state = rt.Ready));
  }
  setError(t2, e2) {
    if (this.isClosing())
      return;
    const i2 = new Event("error", { bubbles: true, cancelable: true });
    if (this.emit("error", i2, t2), i2.defaultPrevented)
      return;
    t2.error = e2, this.hideLoading(t2), this.clearContent(t2);
    const n2 = document.createElement("div");
    n2.classList.add("fancybox-error"), n2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>"), this.setContent(t2, n2);
  }
  clearContent(t2) {
    if (void 0 === t2.state)
      return;
    this.emit("clearContent", t2), t2.contentEl && (t2.contentEl.remove(), t2.contentEl = void 0);
    const e2 = t2.el;
    e2 && (S(e2, "has-error"), S(e2, "has-unknown"), S(e2, `has-${t2.type || "unknown"}`)), t2.closeBtnEl && t2.closeBtnEl.remove(), t2.closeBtnEl = void 0, t2.captionEl && t2.captionEl.remove(), t2.captionEl = void 0, t2.spinnerEl && t2.spinnerEl.remove(), t2.spinnerEl = void 0;
  }
  getSlide() {
    var t2;
    const e2 = this.carousel;
    return (null === (t2 = null == e2 ? void 0 : e2.pages[null == e2 ? void 0 : e2.page]) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0;
  }
  close(t2, e2) {
    if (this.isClosing())
      return;
    const i2 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (this.emit("shouldClose", i2, t2), i2.defaultPrevented)
      return;
    t2 && t2.cancelable && (t2.preventDefault(), t2.stopPropagation());
    const n2 = () => {
      this.proceedClose(t2, e2);
    };
    this.startedFs && be && be.isFullscreen() ? Promise.resolve(be.exit()).then(() => n2()) : n2();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle(t2 = false) {
    const e2 = () => {
      this.clearIdle(), this.idle = true, P(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing())
      if (t2)
        e2();
      else {
        const t3 = this.option("idle");
        t3 && (this.idleTimer = setTimeout(e2, t3));
      }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = false, S(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(true);
  }
  toggleFullscreen() {
    be && (be.isFullscreen() ? be.exit() : be.request().then(() => {
      this.startedFs = true;
    }));
  }
  isClosing() {
    return [at.Closing, at.CustomClosing, at.Destroy].includes(this.state);
  }
  proceedClose(t2, e2) {
    var i2, n2;
    this.state = at.Closing, this.clearIdle(), this.detachEvents();
    const s2 = this.container, o2 = this.carousel, a2 = this.getSlide(), r2 = a2 && this.option("placeFocusBack") ? a2.triggerEl || this.option("triggerEl") : null;
    if (r2 && (Q(r2) ? nt(r2) : r2.focus()), s2 && (S(s2, ce), P(s2, "is-closing"), s2.setAttribute(se, "true"), this.option("animated") && P(s2, ae), s2.style.pointerEvents = "none"), o2) {
      o2.clearTransitions(), null === (i2 = o2.panzoom) || void 0 === i2 || i2.destroy(), null === (n2 = o2.plugins.Navigation) || void 0 === n2 || n2.detach();
      for (const t3 of o2.slides) {
        t3.state = rt.Closing, this.hideLoading(t3);
        const e3 = t3.contentEl;
        e3 && this.stop(e3);
        const i3 = null == t3 ? void 0 : t3.panzoom;
        i3 && (i3.stop(), i3.detachEvents(), i3.detachObserver()), this.isCurrentSlide(t3) || o2.emit("removeSlide", t3);
      }
    }
    this.emit("close", t2), this.state !== at.CustomClosing ? (void 0 === e2 && a2 && (e2 = this.optionFor(a2, "hideClass")), e2 && a2 ? (this.animate(a2.contentEl, e2, () => {
      o2 && o2.emit("removeSlide", a2);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t2;
    if (this.state === at.Destroy)
      return;
    this.state = at.Destroy, null === (t2 = this.carousel) || void 0 === t2 || t2.destroy();
    const e2 = this.container;
    e2 && e2.remove(), Se.delete(this.id);
    const i2 = _Ce.getInstance();
    i2 ? i2.focus() : (ye && (ye.remove(), ye = null), we && (we.remove(), we = null), S(document.documentElement, te), (() => {
      if (!tt)
        return;
      const t3 = document, e3 = t3.body;
      e3.classList.remove(ee), e3.style.setProperty(ne, ""), t3.documentElement.style.setProperty(ie, "");
    })(), this.emit("destroy"));
  }
  static bind(t2, e2, i2) {
    if (!tt)
      return;
    let n2, s2 = "", o2 = {};
    if (void 0 === t2 ? n2 = document.body : me(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : (n2 = t2, me(e2) && (s2 = e2), "object" == typeof i2 && (o2 = i2 || {})), !n2 || !E(n2))
      return;
    s2 = s2 || "[data-fancybox]";
    const a2 = _Ce.openers.get(n2) || /* @__PURE__ */ new Map();
    a2.set(s2, o2), _Ce.openers.set(n2, a2), 1 === a2.size && n2.addEventListener("click", _Ce.fromEvent);
  }
  static unbind(t2, e2) {
    let i2, n2 = "";
    if (me(t2) ? (i2 = document.body, n2 = t2) : (i2 = t2, me(e2) && (n2 = e2)), !i2)
      return;
    const s2 = _Ce.openers.get(i2);
    s2 && n2 && s2.delete(n2), n2 && s2 || (_Ce.openers.delete(i2), i2.removeEventListener("click", _Ce.fromEvent));
  }
  static destroy() {
    let t2;
    for (; t2 = _Ce.getInstance(); )
      t2.destroy();
    for (const t3 of _Ce.openers.keys())
      t3.removeEventListener("click", _Ce.fromEvent);
    _Ce.openers = /* @__PURE__ */ new Map();
  }
  static fromEvent(t2) {
    if (t2.defaultPrevented)
      return;
    if (t2.button && 0 !== t2.button)
      return;
    if (t2.ctrlKey || t2.metaKey || t2.shiftKey)
      return;
    let e2 = t2.composedPath()[0];
    const i2 = e2.closest("[data-fancybox-trigger]");
    if (i2) {
      const t3 = i2.dataset.fancyboxTrigger || "", n3 = document.querySelectorAll(`[data-fancybox="${t3}"]`), s3 = parseInt(i2.dataset.fancyboxIndex || "", 10) || 0;
      e2 = n3[s3] || e2;
    }
    if (!(e2 && e2 instanceof Element))
      return;
    let n2, s2, o2, a2;
    if ([..._Ce.openers].reverse().find(([t3, i3]) => !(!t3.contains(e2) || ![...i3].reverse().find(([i4, r3]) => {
      let l3 = e2.closest(i4);
      return !!l3 && (n2 = t3, s2 = i4, o2 = l3, a2 = r3, true);
    }))), !n2 || !s2 || !o2)
      return;
    a2 = a2 || {}, t2.preventDefault(), e2 = o2;
    let r2 = [], l2 = u({}, ot, a2);
    l2.event = t2, l2.triggerEl = e2, l2.delegate = i2;
    const c2 = l2.groupAll, h2 = l2.groupAttr, d2 = h2 && e2 ? e2.getAttribute(`${h2}`) : "";
    if ((!e2 || d2 || c2) && (r2 = [].slice.call(n2.querySelectorAll(s2))), e2 && !c2 && (r2 = d2 ? r2.filter((t3) => t3.getAttribute(`${h2}`) === d2) : [e2]), !r2.length)
      return;
    const p2 = _Ce.getInstance();
    return p2 && p2.options.triggerEl && r2.indexOf(p2.options.triggerEl) > -1 ? void 0 : (e2 && (l2.startIndex = r2.indexOf(e2)), _Ce.fromNodes(r2, l2));
  }
  static fromSelector(t2, e2, i2) {
    let n2 = null, s2 = "", o2 = {};
    if (me(t2) ? (n2 = document.body, s2 = t2, "object" == typeof e2 && (o2 = e2 || {})) : t2 instanceof HTMLElement && me(e2) && (n2 = t2, s2 = e2, "object" == typeof i2 && (o2 = i2 || {})), !n2 || !s2)
      return false;
    const a2 = _Ce.openers.get(n2);
    return !!a2 && (o2 = u({}, a2.get(s2) || {}, o2), !!o2 && _Ce.fromNodes(Array.from(n2.querySelectorAll(s2)), o2));
  }
  static fromNodes(t2, e2) {
    e2 = u({}, ot, e2 || {});
    const i2 = [];
    for (const n2 of t2) {
      const t3 = n2.dataset || {}, s2 = t3[ge] || n2.getAttribute(fe) || n2.getAttribute("currentSrc") || n2.getAttribute(ge) || void 0;
      let o2;
      const a2 = e2.delegate;
      let r2;
      a2 && i2.length === e2.startIndex && (o2 = a2 instanceof HTMLImageElement ? a2 : a2.querySelector("img:not([aria-hidden])")), o2 || (o2 = n2 instanceof HTMLImageElement ? n2 : n2.querySelector("img:not([aria-hidden])")), o2 && (r2 = o2.currentSrc || o2[ge] || void 0, !r2 && o2.dataset && (r2 = o2.dataset.lazySrc || o2.dataset[ge] || void 0));
      const l2 = { src: s2, triggerEl: n2, thumbEl: o2, thumbElSrc: r2, thumbSrc: r2 };
      for (const e3 in t3) {
        let i3 = t3[e3] + "";
        i3 = "false" !== i3 && ("true" === i3 || i3), l2[e3] = i3;
      }
      i2.push(l2);
    }
    return new _Ce(i2, e2);
  }
  static getInstance(t2) {
    if (t2)
      return Se.get(t2);
    return Array.from(Se.values()).reverse().find((t3) => !t3.isClosing() && t3) || null;
  }
  static getSlide() {
    var t2;
    return (null === (t2 = _Ce.getInstance()) || void 0 === t2 ? void 0 : t2.getSlide()) || null;
  }
  static show(t2 = [], e2 = {}) {
    return new _Ce(t2, e2);
  }
  static next() {
    const t2 = _Ce.getInstance();
    t2 && t2.next();
  }
  static prev() {
    const t2 = _Ce.getInstance();
    t2 && t2.prev();
  }
  static close(t2 = true, ...e2) {
    if (t2)
      for (const t3 of Se.values())
        t3.close(...e2);
    else {
      const t3 = _Ce.getInstance();
      t3 && t3.close(...e2);
    }
  }
};
Object.defineProperty(Ce, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.33" }), Object.defineProperty(Ce, "defaults", { enumerable: true, configurable: true, writable: true, value: ot }), Object.defineProperty(Ce, "Plugins", { enumerable: true, configurable: true, writable: true, value: Qt }), Object.defineProperty(Ce, "openers", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() });
export {
  J as Carousel,
  Ce as Fancybox,
  k as Panzoom
};
//# sourceMappingURL=@fancyapps_ui.js.map
